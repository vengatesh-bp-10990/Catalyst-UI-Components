import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatKeyvaluepair extends Component {
  constructor() {
    super();
  }

  init() {
    const keyValueData = this.getData('keyValueData') || [];

    const transformedData = keyValueData.map(({ key = '', value = '' }) => ({
      key,
      value,
      isKeyValid: /^[a-zA-Z0-9_]+$/.test(key.trim()),
      isKeyDuplicate: false,
      isValueValid: this.getData('checkValidation.valueRequired')
        ? value.trim() !== ''
        : true
    }));

    // Add an empty row at the end for new input
    transformedData.push({
      key: '',
      value: '',
      isKeyValid: true,
      isKeyDuplicate: false,
      isValueValid: true
    });

    this.setData('dataList', transformedData);
  }

  data() {
    return {
      self: prop('object'),
      keyValueData: prop('array'),
      isKeyValueDataValid: prop('boolean'),
      dataList: prop('array', {
        default: [
          {
            key: '',
            value: '',
            isKeyValid: true,
            isKeyDuplicate: false,
            isValueValid: true
          }
        ]
      }),
      checkValidation: prop('object', {
        default: { keyRequired: true, valueRequired: false }
      }),
      lastClicked: prop('string'),
      isAllValid: prop('boolean', { default: true }),
      isPasted: prop('boolean', { default: false })
    };
  }

  validateKeyValueAndAddRow() {
    let rows = this.getData('dataList');
    const keys = rows.map((row) => row.key.trim().toLowerCase());
    let isKeyValid, isKeyDuplicate, isValueValid;
    const newRows = rows.map((row, index) => {
      isKeyValid = true;
      isKeyDuplicate = false;
      isValueValid = true;
      if (
        row.key.length == 0 &&
        row.value.length == 0 &&
        rows.length == index + 1
      ) {
        return { ...row, isKeyValid, isKeyDuplicate, isValueValid };
      } else {
        isKeyDuplicate =
          keys.filter(
            (key, i) => i !== index && key === row.key.trim().toLowerCase()
          ).length > 0;

        isKeyValid = row.key.trim() !== '';
        isValueValid = true;
        if (this.getData('checkValidation.valueRequired')) {
          isValueValid = row.value.trim() !== '';
        }
        return { ...row, isKeyValid, isKeyDuplicate, isValueValid };
      }
    });

    let allValid = true;

    newRows.map((row) => {
      if (!this.getData('checkValidation.valueRequired')) {
        if (!row.isKeyValid || row.isKeyDuplicate) {
          allValid = false;
        }
      } else {
        if (!row.isKeyValid || row.isKeyDuplicate || !row.isValueValid) {
          allValid = false;
        }
      }
    });
    const lastRow = newRows[newRows.length - 1];
    const shouldAddRow = allValid && lastRow.key.length > 0;
    this.setData('isAllValid', allValid);
    this.setData('dataList', []);
    const self = this.getData('self');
    const output = newRows
      .filter(({ key, value }) => key !== '' || value !== '')
      .map(({ key, value }) => ({ key, value }));
    self.setData('keyValueData', output);
    self.setData('isKeyValueDataValid', allValid);
    this.setData('dataList', newRows);

    if (shouldAddRow) {
      this.setData('dataList', []);
      this.setData('dataList', [
        ...newRows,
        {
          key: '',
          value: '',
          isKeyValid: true,
          isKeyDuplicate: false,
          isValueValid: true
        }
      ]);
    }

    document
      .querySelector(`lyte-input[lt-prop-id="${this.getData('lastClicked')}"]`)
      .focus();
    let inputVal = document.querySelector(
      `#${this.getData('lastClicked')}`
    ).value;

    document.querySelector(`#${this.getData('lastClicked')}`).value = '';
    document.querySelector(`#${this.getData('lastClicked')}`).value = inputVal;
  }

  validatePastedValue(text) {
    const lines = text.split('\n').map((line) => line.trim());
    const regex = /^[A-Za-z0-9_-]+(=[A-Za-z0-9_-]+)$/;
    return lines.some((line) => regex.test(line));
  }

  parseInputKeyValue(value) {
    const lines = value.split('\n');
    const output = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine) {
        const parts = trimmedLine.split('=');

        if (parts.length === 1) {
          const key = parts[0].trim();
          const value = '';
          output.push({ key, value });
        } else if (parts.length === 2) {
          const [key, value] = parts.map((item) => item.trim());
          output.push({ key, value });
        } else if (parts.length > 2) {
          const key = parts[0].trim();
          const value = parts.slice(1).join(' = ').trim();
          output.push({ key, value });
        }
      }
    });

    return output;
  }

  static methods() {
    return {
      handleKeyChange(index, event) {
        const value = event.querySelector('input').value; //No i18N
        this.setData('lastClicked', event.getData('ltPropId')); //No i18N
        let rows = this.getData('dataList'); //No i18N
        const newRows = [...rows];
        let isPasted = this.getData('isPasted'); //No i18N

        if (this.validatePastedValue(value) && isPasted) {
          let output = this.parseInputKeyValue(value, index);
          newRows.splice(index, 1, ...output);
        } else {
          newRows[index].key = value;
        }
        this.setData('dataList', newRows); //No i18N
        this.validateKeyValueAndAddRow();
      },
      handleValueChange(index, event) {
        this.setData('lastClicked', event.getData('ltPropId')); //No i18N
        const value = event.querySelector('input').value; //No i18N
        let rows = this.getData('dataList'); //No i18N
        const newRows = [...rows];
        newRows[index].value = value;
        this.setData('dataList', newRows); //No i18N
        this.validateKeyValueAndAddRow();
      }
    };
  }

  static actions() {
    return {
      addEnterListener(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
          this.setData('isPasted', true); //No i18N
        } else {
          this.setData('isPasted', false); //No i18N
        }
      },
      removeFromDataList(index) {
        let rows = this.getData('dataList'); //No i18N

        const newRows = rows.filter((_, i) => i !== index);
        this.setData('dataList', newRows); //No i18N

        this.validateKeyValueAndAddRow();
      }
    };
  }

  static observers() {
    async function resetRecordData() {
      const keyValueData = this.getData('keyValueData') || [];

      const transformedData = keyValueData.map(({ key = '', value = '' }) => ({
        key,
        value,
        isKeyValid: /^[a-zA-Z0-9_]+$/.test(key.trim()),
        isKeyDuplicate: false,
        isValueValid: this.getData('checkValidation.valueRequired')
          ? value.trim() !== ''
          : true
      }));

      // Add an empty row at the end for new input
      transformedData.push({
        key: '',
        value: '',
        isKeyValid: true,
        isKeyDuplicate: false,
        isValueValid: true
      });

      this.setData('dataList', transformedData);
    }
    return {
      resetRecordData: resetRecordData.observes('keyValueData') // No I18N
    };
  }
}

export { ZcatKeyvaluepair };

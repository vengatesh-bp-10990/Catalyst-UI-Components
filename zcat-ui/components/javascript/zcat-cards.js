import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatCards extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object'),
      key: prop('string'),
      formData: prop('object')
    };
  }

  didConnect() {
    const self = this.getData('self');
    const prop = this.getData('zcatProp');
  }

  static methods() {
    return {
      async customLbindForRadioButton(methodName, value, ...args) {
        const zcatProp = this.getData('zcatProp');
        const formData = this.getData('formData');
        const key = this.getData('key');
        const self = this.getData('self');

        if (zcatProp && value) {
          // Update the zcatProp object when a value is selected
          this.$app.objectUtils(zcatProp, 'add', 'selected', value);
        }

        if (zcatProp && key) {
          // Sync zcatProp.selected → formData.key
          this.setData(`formData.${key}`, zcatProp.selected);
        }

        // If a method name is passed, execute it asynchronously
        if (methodName && typeof this.executeMethod === 'function') {
          await self.executeMethod(methodName, ...args);
        }
      },
      async customLbindForCheckbox(methodName, value, input) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');

        if (value) {
          const isChecked = input.checked;
          const selectedValue = isChecked ? value : '';
          const keyValue = isChecked ? value.checked : '';

          this.$app.objectUtils(prop, 'add', 'selected', selectedValue);
          //   self.setData(prop.key, keyValue);
        }

        if (methodName) {
          await self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 2)
          );
        }
      }
    };
  }

  static actions() {
    return {};
  }

  static observers() {
    async function zcatPropToUserObj() {
      const zcatProp = this.getData('zcatProp');
      const formData = this.getData('formData');
      const key = this.getData('key');
      this.setData('formData.' + key, zcatProp.selected);
    }
    async function userObjToZcatProp() {
      const zcatProp = this.getData('zcatProp');
      const formData = this.getData('formData');
      const key = this.getData('key');
      this.$app.objectUtils(zcatProp, 'add', 'selected', formData[key]);
    }
    return {
      userObjToZcatProp: userObjToZcatProp.observes('formData.*'), // No I18N
      zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.selected') // No I18N
    };
  }
}

export { ZcatCards };

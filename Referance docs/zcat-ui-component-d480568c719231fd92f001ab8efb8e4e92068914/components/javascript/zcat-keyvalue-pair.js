import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

import 'node_modules/@zoho/lyte-ui-component/plugins/lyte-sortable.js';


class ZcatKeyvaluePair extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object', { default: this }), 
      // zcatProp: prop('object', { default: {} }), 
      zcatProp: prop("object", { watch: true }),
      userObjKeys: prop('object', { default: {} }),
      userObjValues: prop('object', { default: {} }),
      fieldList: prop('array', { default: [] }), 
      featureObj: prop('array', { default: [] }), 
			userObj: prop('object', { default: {} })	,
      rowList: prop('array', { default: [] }),
      rowCounter: prop('number', {default: 0 }), 
      reconstructedErrorObject: prop('array')
    };
  }

  didConnect(){
    if(this.getData('zcatProp').variant === 'auto'){
      const self = this.getData('self');    
      $L('#kvPairId').sortable({
        cancel: "input",                     
        onDrop: function(droppedElement, destination, belowElement, fromIndex, toIndex, source){
          self.updateOrder();
        }
      });
    }
  }

  init(){
    const zcatProp = this.getData('zcatProp') || {};
    const devFieldList = zcatProp.fieldList || [];
    const clonedFieldList = devFieldList.map((field, fIndex) => ({
      ...field,
      fieldObj: {
        ...field.fieldObj,
        id: `${field.fieldObj.id}_${fIndex}`, 
        key: `${field.fieldObj.key}_${0}_${fIndex}`
      }
    }));

    const firstRow = {
      id: 0,
      fieldList: clonedFieldList
    };

    this.setData('rowList', [firstRow]);
    this.setData('rowCounter', 1);
  }

  addRowLogic(index) {
    const zcatProp = this.getData('zcatProp') || {};
    const baseFieldList = zcatProp.fieldList || [];
    const rowList = this.getData('rowList') || [];
    const rowCounter = this.getData('rowCounter') || 1;

    // Normalize index
    if (Array.isArray(index)) {
      index = index[0];
    } else if (typeof index === 'object' && index !== null) {
      const clickedRowId = index.id;
      index = rowList.findIndex(row => row.id === clickedRowId);
    }
    index = Number(index);

    // Create unique cloned field list
    const clonedFieldList = baseFieldList.map((field, fIndex) => ({
      ...field,
      fieldObj: {
        ...field.fieldObj,
        id: `${field.fieldObj.id}_${rowCounter}_${fIndex}`,
        key: `${field.fieldObj.key}_${rowCounter}_${fIndex}`
      }
    }));

    const newRow = {
      id: rowCounter,
      fieldList: clonedFieldList
    };

    // Insert after the clicked row index
    // const insertAt =
    //   !isNaN(index) && index >= 0 && index < rowList.length
    //     ? index + 1
    //     : rowList.length;
    // rowList.splice(insertAt, 0, newRow);

    rowList.push(newRow);

    this.setData('rowList', [...rowList]);
    this.setData('rowCounter', rowCounter + 1);

    // --- featureObj logic for client ---
    const keyName = zcatProp.fieldList[0].fieldObj.key || 'keyHolder';
    const valueName = zcatProp.fieldList[1].fieldObj.key || 'valueHolder';

    // Flatten rowList to featureObj style   --kamali
    const featureObj = [];
    const userObjKeys = {};
    const userObjValues = {};
    
    rowList.forEach((row, rIndex) => {
      row.fieldList.forEach((field, fIndex) => {
        const key = field.fieldObj.key ?? '';
        const value = field.fieldObj.value ?? '';

        featureObj.push({
          keyHolder: key,
          valueHolder: value
        });

        userObjKeys[`keyHolder-${rIndex}-${fIndex}`] = key;
        userObjValues[`valueHolder-${rIndex}-${fIndex}`] = value;
      });
    });

    this.setData('featureObj', [...featureObj]);
    this.setData('userObjKeys', { ...userObjKeys });
    this.setData('userObjValues', { ...userObjValues });

    // Optional: handle auto variant sortable class
    if (zcatProp.variant === 'auto') {
      setTimeout(() => {
        const classNameLi = $L('#kvPairId')[0].getSortableClass();
        $L('#kvPairId li').each(function (_, li) {
          $L(li).addClass('sortable-element ' + classNameLi);
        });
      }, 0);
    }

    this.buildFeatureObjFromUserObj();
  }

  updateOrder() {
    const zcatProp = this.getData("zcatProp") || {};
    const rowList = this.getData("rowList") || [];

    // --- 1. Detect new order of <li> rows from DOM ---
    const newOrderIds = [];
    $L("#kvPairId li").each(function () {
      const firstInput = $L(this).find("input")[0];
      if (firstInput) {
        const idAttr = $L(firstInput).attr("id"); // e.g. input1_2_0
        if (idAttr) {
          const parts = idAttr.split("_");
          const rowIndex = parseInt(parts[1]);
          if (!isNaN(rowIndex)) newOrderIds.push(rowIndex);
        }
      }
    });

    // --- 2. Build reordered rowList based on DOM order ---
    const reorderedRowList = [];
    newOrderIds.forEach((id) => {
      const row = rowList.find((r) => r.id === id);
      if (row) reorderedRowList.push(row);
    });

    // Fallback: if reorder fails, don't lose data
    if (reorderedRowList.length === 0) return;

    // --- 3. Preserve current input values from DOM ---
    reorderedRowList.forEach((row) => {
      row.fieldList.forEach((field) => {
        const key = field.fieldObj.key;
        const inputEl = $L(`#${field.fieldObj.id}`).find("input");
        if (inputEl.length > 0) {
          field.fieldObj.value = inputEl.val() || "";
        }
      });
    });
    
    console.log("REORDERED LIST :: ", reorderedRowList);
    
    
    // --- 4. Commit the new row order ---
    this.setData("rowList", [...reorderedRowList]);
    
    this.buildFeatureObjFromUserObj();

    // --- 6. Restore sortable visuals if variant=auto ---
    if (zcatProp.variant === "auto") {
      setTimeout(() => {
        const classNameLi = $L("#kvPairId")[0].getSortableClass();
        $L("#kvPairId li").each(function (_, li) {
          $L(li).addClass("sortable-element " + classNameLi);
        });
      }, 0);
    }

  }

  buildFeatureObjFromUserObj() {
    const userObj = this.getData("userObj") || {};
    const userObjKeys = this.getData("userObjKeys") || {};
    const zcatProp = this.getData("zcatProp") || {};
    const baseFieldList = zcatProp.fieldList || [];
    const rowList = this.getData("rowList") || [];

    const featureObj = [];
    console.log("USEROBJ[zpkey] PRE :: ", userObj);
    console.log("FEATURE OBJ PRE :: ", this.getData('featureObj'));
    
    rowList.forEach((row) => {
      const rowObj = {};

      row.fieldList.forEach((field, fIndex) => {
        const fieldKeyName = baseFieldList[fIndex]?.fieldObj?.key || field.fieldObj.key;
        const userKey = field.fieldObj.key;
        const userValue = userObj[userKey];
        rowObj[fieldKeyName] = (userValue !== undefined ? userValue : field.fieldObj.value) || "";
      });

      featureObj.push(rowObj);
    });

    this.setData("featureObj", [...featureObj]);
    console.log("USEROBJ[zpkey] POST :: ", userObj);
    console.log("FEATURE OBJ POST :: ", this.getData('featureObj'));
  }

  checkMandatoryAndAddRow(index) {
    const rowList = this.getData('rowList') || [];
    const userObj = this.getData('userObj') || {};

    const currentRow = rowList[index];
    if (!currentRow) return;

    const mandatoryFields = currentRow.fieldList.filter(
      (field) => field.fieldObj && field.fieldObj.mandatory
    );

    if (mandatoryFields.length === 0) {
      const lastRow = rowList[rowList.length - 1];
      const isLastRowEmpty = lastRow.fieldList.every((field) => {
        const key = field.fieldObj.key;
        const val = userObj[key] || field.fieldObj.value || "";
        return val.trim() === "";
      });

      if (!isLastRowEmpty) {
        this.addRowLogic(index);
      }
      return;
    }

    const allMandatoryFilled = mandatoryFields.every((field) => {
      const key = field.fieldObj.key;
      const val = userObj[key] || field.fieldObj.value || "";
      return val.trim() !== "";
    });

    const lastRow = rowList[rowList.length - 1];
    const isLastRowEmpty = lastRow.fieldList.every((field) => {
      const key = field.fieldObj.key;
      const val = userObj[key] || field.fieldObj.value || "";
      return val.trim() === "";
    });

    if (allMandatoryFilled && !isLastRowEmpty) {
      const lastIndex = rowList.length - 1;
      this.addRowLogic(lastIndex);
    }
  }

  errorObjToField(){
    const reconstructedErrors = this.getData("reconstructedErrorObject") || [];
    const rowList = this.getData("rowList") || [];

    if (!Array.isArray(reconstructedErrors) || reconstructedErrors.length === 0) {
      console.warn("No reconstructed error data found — skipping.");
      return;
    }

    reconstructedErrors.forEach(err => {
      const { key, index, message } = err;
      if (index === null || index === undefined) return;

      const targetRow = rowList[index];
      if (!targetRow || !Array.isArray(targetRow.fieldList)) return;

      const targetField = targetRow.fieldList.find(field => {
        const fieldKey = field.fieldObj?.key || "";
        return fieldKey.startsWith(key + "_"); 
      });

      if (targetField && targetField.fieldObj) {
        targetField.fieldObj.errorMessage = message;
      }
    });

    this.setData("rowList", [...rowList]);

  }


  addRow(index){
    this.addRowLogic(index);
  }

  static methods() {
    function addRow(index, second) {
      this.addRowLogic(index)
    }

    function removeRow(index) {
      const rowList = this.getData('rowList') || [];

      // --- Normalize index ---
      if (Array.isArray(index)) {
        index = index[0];
      } else if (typeof index === 'object' && index !== null) {
        const clickedRowId = index.id;
        index = rowList.findIndex(row => row.id === clickedRowId);
      }

      // --- Remove the row ---
      if (typeof index === 'number' && index > -1 && index < rowList.length) {
        rowList.splice(index, 1);
      }

      // --- If no rows left → create one blank row ---
      if (rowList.length === 0) {
        const zcatProp = this.getData('zcatProp') || {};
        const baseFieldList = zcatProp.fieldList || [];
        let rowCounter = this.getData('rowCounter') || 1;

        const clonedFieldList = baseFieldList.map((field, fIndex) => ({
          ...field,
          fieldObj: {
            ...field.fieldObj,
            id: `${field.fieldObj.id}_${rowCounter}_${fIndex}`,
            key: `${field.fieldObj.key}_${rowCounter}_${fIndex}`,
            value: '',
          },
        }));

        const newRow = { id: rowCounter, fieldList: clonedFieldList };
        rowList.push(newRow);
        this.setData('rowCounter', rowCounter + 1);
      }

      // --- Commit updated rowList ---
      this.setData('rowList', [...rowList]);

      // --- Same featureObj + userObjKeys/Values logic as addRowLogic ---
      const zcatProp = this.getData('zcatProp') || {};
      const keyName = zcatProp.fieldList?.[0]?.fieldObj?.key || 'keyHolder';
      const valueName = zcatProp.fieldList?.[1]?.fieldObj?.key || 'valueHolder';

      const featureObj = [];
      const userObjKeys = {};
      const userObjValues = {};

      rowList.forEach((row, rIndex) => {
        row.fieldList.forEach((field, fIndex) => {
          const key = field.fieldObj?.key ?? '';
          const value = field.fieldObj?.value ?? '';

          featureObj.push({
            keyHolder: key,
            valueHolder: value,
          });

          userObjKeys[`keyHolder-${rIndex}-${fIndex}`] = key;
          userObjValues[`valueHolder-${rIndex}-${fIndex}`] = value;
        });
      });

      // --- Update component state ---
      this.setData('featureObj', [...featureObj]);
      this.setData('userObjKeys', { ...userObjKeys });
      this.setData('userObjValues', { ...userObjValues });

      // --- Optional: Keep same variant-based behavior as addRow ---
      if (zcatProp.variant === 'auto') {
        setTimeout(() => {
          const classNameLi = $L('#kvPairId')[0].getSortableClass();
          $L('#kvPairId li').each(function (_, li) {
            $L(li).addClass('sortable-element ' + classNameLi);
          });
        }, 0);
      }

      // --- Optional rebuild consistency ---
      this.buildFeatureObjFromUserObj();
    }

    function inputOnValueChange(index, elem) {
      const zcatProp = this.getData('zcatProp') || {};
      const rowList = this.getData('rowList') || [];
      const variant = zcatProp.variant || 'manual';

      // Update rowList based on input value
      if (typeof index === 'number' && rowList[index]) {
        rowList[index].fieldList.forEach((field, fIndex) => {
          if (elem.key && field.fieldObj.key === elem.key) {
            field.fieldObj.key = elem.value ?? '';
          }
          if (elem.value && field.fieldObj.value === elem.value) {
            field.fieldObj.value = elem.value ?? '';
          }
        });
      }

      this.setData('rowList', [...rowList]);

      // if (variant === 'auto') {
      //   const lastRow = rowList[rowList.length - 1];

      //   const userObj = this.getData('userObj') || {};
      //   const anyFieldHasValue = lastRow.fieldList.some(f => {
      //     const key = f.fieldObj.key;
      //     const valueInUserObj = (userObj[key] || '').trim();
      //     return valueInUserObj !== '';
      //   });

      //   if (anyFieldHasValue) {
      //     this.addRowLogic(rowList.length - 1);
      //   }
      // }

      // --- Update userObj as well ---
      const userObj = this.getData('userObj') || {};
      userObj[elem.key] = elem.value ?? '';
      this.setData('userObj', { ...userObj });

      // --- Auto behavior ---
      if (variant === 'auto') {
        this.checkMandatoryAndAddRow(index);
      }
      
      this.buildFeatureObjFromUserObj();

      if (zcatProp.variant === "auto") {
        setTimeout(() => {
          const classNameLi = $L("#kvPairId")[0].getSortableClass();
          $L("#kvPairId li").each(function (index, li) {
            $L(li).addClass("sortable-element " + classNameLi);
          });
        }, 0);
      }

    }
    function autocompleteOnSelect(index, elem){
      const zcatProp = this.getData('zcatProp') || {};
      const rowList = this.getData('rowList') || [];
      const variant = zcatProp.variant || 'manual';

      const userObj = this.getData('userObj') || {};
      userObj[elem.key] = elem.value ?? '';
      this.setData('userObj', { ...userObj });

      // --- Auto behavior ---
      if (variant === 'auto') {
        this.checkMandatoryAndAddRow(index);
      }
      this.buildFeatureObjFromUserObj();

      if (zcatProp.variant === "auto") {
        setTimeout(() => {
          const classNameLi = $L("#kvPairId")[0].getSortableClass();
          $L("#kvPairId li").each(function (index, li) {
            $L(li).addClass("sortable-element " + classNameLi);
          });
        }, 0);
      }

    }

    function dropdownOnValueSelect(index, elem) {
      const zcatProp = this.getData('zcatProp') || {};
      const rowList = this.getData('rowList') || [];
      const variant = zcatProp.variant || 'manual';

      // elem = { key: "dropdownKey1_1_0", value: "india" }
      if (typeof index === 'number' && rowList[index]) {
        rowList[index].fieldList.forEach((field) => {
          if (field.fieldObj.key === elem.key) {
            field.fieldObj.value = elem.value ?? '';
          }
        });
      }

      this.setData('rowList', [...rowList]);

      // --- Update userObj (like in textbox case) ---
      const userObj = this.getData('userObj') || {};
      if (elem.key) {
        userObj[elem.key] = elem.value ?? '';
      }
      this.setData('userObj', { ...userObj });

      // --- Auto add new row if variant = 'auto' ---
      // if (variant === 'auto') {
      //   const lastRow = rowList[rowList.length - 1];

      //   const anyFieldHasValue = lastRow.fieldList.some(f => {
      //     const key = f.fieldObj.key;
      //     const valueInUserObj = (userObj[key] || '').trim();
      //     return valueInUserObj !== '';
      //   });

      //   if (anyFieldHasValue) {
      //     this.addRowLogic(rowList.length - 1);
      //   }
      // }

      if (variant === 'auto') {
        this.checkMandatoryAndAddRow(index);
      }

      // --- Rebuild featureObj for consistency ---
      this.buildFeatureObjFromUserObj();
      if (zcatProp.variant === "auto") {
        setTimeout(() => {
          const classNameLi = $L("#kvPairId")[0].getSortableClass();
          $L("#kvPairId li").each(function (index, li) {
            $L(li).addClass("sortable-element " + classNameLi);
          });
        }, 0);
      }
    }

    return {
      removeRow, 
      addRow, 
      inputOnValueChange,
      dropdownOnValueSelect,  
      autocompleteOnSelect 
    
    };
  }

  static actions() {
    return {
      
    };
  }

  static observers() {

    const errorObject = {
      message: "overall error for comp", 
      details: [
        {
          keyK: {
            message: "column specific error", 
            keyDetails: [ 
              {
                index: 0,
                message: "row*column(field) specific error"
              }, 
              {
                index: 1,
                message: "row*column(field) specific error"
              }
            ]
          }, 
          valueV: {
            message: "column specific error", 
            keyDetails: [ 
              {
                index: 0,
                message: "row*column(field) specific error"
              }, 
              {
                index: 1
                // ,message: "row*column(field) specific error" 
              }
            ]
          },
          dropdownKey1: {
            // message: "column specific error", 
            keyDetails: [ 
              {
                index: 0
                // ,message: "row*column(field) specific error"
              }
            ]
          }

        }
      ]
    }

    async function errorObjObserver() {
      // Grab the error object from zcatProp
      const errorObject = this.getData('zcatProp.errorObject') || {};
      const fallbackMsg = "should not the field empty";

      // This will hold our parsed, flattened error list
      const finalList = [];

      // Validate structure
      if (!errorObject || !errorObject.details) {
        this.setData('reconstructedErrorObject', []);
        return;
      }

      // Extract overall + first-level detail
      const overallMsg = errorObject.message || fallbackMsg;
      const detailsObj = Array.isArray(errorObject.details)
        ? errorObject.details[0]
        : {};

      // Iterate through all field keys in details
      Object.entries(detailsObj || {}).forEach(([fieldKey, fieldData = {}]) => {
        const columnMsg = fieldData.message || overallMsg;

        // If keyDetails exists → row-specific messages
        if (Array.isArray(fieldData.keyDetails) && fieldData.keyDetails.length > 0) {
          fieldData.keyDetails.forEach(({ index, message }) => {
            finalList.push({
              key: fieldKey,
              index,
              message: message || columnMsg || overallMsg || fallbackMsg,
            });
          });
        } else {
          // Column-level or general message fallback
          finalList.push({
            key: fieldKey,
            index: null,
            message: columnMsg || overallMsg || fallbackMsg,
          });
        }
      });

      // ✅ Store it globally for other methods to use
      this.setData('reconstructedErrorObject', finalList);

      console.log("🔍 Final reconstructed error list:", finalList);
      console.log("🔍 Final reconstructed error list- this.getData('reconstructedErrorObject'):", this.getData('reconstructedErrorObject'));

      // after the new errObj
      this.errorObjToField();

    }




    return {
      errorObjObserver: errorObjObserver.observes("zcatProp.errorObject")
    };
  }



}

export { ZcatKeyvaluePair };

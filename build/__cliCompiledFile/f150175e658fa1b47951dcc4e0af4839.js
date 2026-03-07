import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-input.js';
import './zcat-dropdown.js';
import './zcat-autocomplete.js';
import './zcat-button.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";
import "../../node_modules/@zoho/lyte-ui-component/plugins/lyte-sortable.js";

class ZcatKeyvaluePair extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
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
    }), arg1);
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

  static methods(arg1) {
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

    return Object.assign(super.methods({
      removeRow, 
      addRow, 
      inputOnValueChange,
      dropdownOnValueSelect,  
      autocompleteOnSelect 
    
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      
    }), arg1);
  }

  static observers(arg1) {

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




    return Object.assign(super.observers({
      errorObjObserver: errorObjObserver.observes("zcatProp.errorObject")
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatKeyvaluePair._template = "<template tag-name=\"zcat-keyvalue-pair\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template></div></template></template><ul class=\"zcat-key-value-pair-list-block\" id=\"kvPairId\"> <template items=\"{{rowList}}\" item=\"row\" index=\"index\" is=\"for\" _new=\"true\"><li class=\"zcat-key-value-pair-box\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','auto')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-icon class=\"zcat-flex-center\" name=\"six-dot-drag\" width=\"7\" height=\"24\"> </zcat-icon></template></template><div class=\"zcat-dF zcat-gap-16 zcat-align-center {{expHandlers(expHandlers(zcatProp.keyErrorMessage,'||',zcatProp.valueErrorMessage),'?:','zcat-mb-10','')}}\" data-index=\"{{index}}\"> <template items=\"{{row.fieldList}}\" item=\"item\" index=\"fIndex\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.type,'===','textbox')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-input self=\"{{self}}\" zcat-prop=\"{{item.fieldObj}}\" feature-obj=\"{{lbind(userObj)}}\" on-value-change=\"{{method('inputOnValueChange',index,this)}}\" error-message=\"{{item.fieldObj.errorMessage}}\"> </zcat-input></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.type,'===','dropdown')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{item.fieldObj}}\" feature-obj=\"{{lbind(userObj)}}\" on-option-selected=\"{{method('dropdownOnValueSelect',index,this)}}\" error-message=\"{{item.fieldObj.errorMessage}}\"> </zcat-dropdown></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.type,'===','autocomplete')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-autocomplete zcat-prop=\"{{item.fieldObj}}\" feature-obj=\"{{lbind(userObj)}}\" on-select=\"{{method('autocompleteOnSelect',index,this)}}\" error-message=\"{{item.fieldObj.errorMessage}}\"> </zcat-autocomplete></template></template></template> </div> <div class=\"zcat-dF zcat-gap-10 zcat-align-center\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(index,'!==',0)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-button self=\"{{self}}\" zcat-prop=\"{ &quot;variant&quot;: &quot;grey&quot;, &quot;size&quot;: &quot;extra-small&quot;, &quot;color&quot;: &quot;grey&quot;, &quot;type&quot;: &quot;navigation&quot;, &quot;icon&quot;: { &quot;position&quot;: &quot;right&quot;, &quot;name&quot;: &quot;minus&quot;, &quot;stroke&quot;: &quot;zcat-stroke-greybtn-icon&quot; }, &quot;callback&quot;: { &quot;name&quot;: &quot;removeRow&quot;, &quot;arguments&quot;: [{{index}}] } }\"> </zcat-button></template></template><!-- <zcat-button lyte-if=\"{{zcatProp.variant === 'manual'}}\" self = \"{{self}}\" zcat-prop = ' { \"variant\": \"grey\", \"size\": \"extra-small\", \"color\": \"grey\", \"type\": \"navigation\", \"icon\": { \"position\": \"right\", \"name\": \"plus\", \"stroke\": \"zcat-stroke-greybtn-icon\" } } ' click-action=\"{{method('addRow', index)}}\"> </zcat-button> --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','manual')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-button self=\"{{self}}\" zcat-prop=\"{ &quot;variant&quot;: &quot;grey&quot;, &quot;size&quot;: &quot;extra-small&quot;, &quot;color&quot;: &quot;grey&quot;, &quot;type&quot;: &quot;navigation&quot;, &quot;icon&quot;: { &quot;position&quot;: &quot;right&quot;, &quot;name&quot;: &quot;plus&quot;, &quot;stroke&quot;: &quot;zcat-stroke-greybtn-icon&quot; }, &quot;callback&quot;: { &quot;name&quot;: &quot;addRow&quot;, &quot;arguments&quot;: [{{index}}] } }\"> </zcat-button></template></template></div> </li></template> </ul> </template><style>.lyteSortableParent .lyteSortablePlaceholder:hover, .lyteSortableParent .lyteSortablePlaceholder{\n    border: 1px solid var(--zcat-keyvalue-drag-border);\n    background: var(--zcat-keyvalue-drag-bg);\n}\n\n/* === Global base styles from reference css/zcat-key-value-pairs.css === */\ntable.zcat-label-value-pairs {\n  width: 100%;\n  border: none;\n  border-spacing: 0 10px;\n}\ntable.zcat-label-value-pairs td,\nth {\n  border: none;\n  text-align: left;\n}\ntable.zcat-label-value-pairs td:nth-child(2),\ntable.zcat-label-value-pairs td:nth-child(5),\ntable.zcat-label-value-pairs td:nth-child(8) {\n  width: 30px;\n  text-align: center;\n}\ntable.zcat-label-value-pairs td:nth-child(3),\ntable.zcat-label-value-pairs td:nth-child(6) {\n  padding-right: 20px;\n}\ntable.zcat-label-value-pairs .key {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n}\ntable.zcat-label-value-pairs .value {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\nzcat-keyvalue-pair .zcat-key-value-pair-box.invalid, .zcat-key-value-pair-box.invalid {\n  padding-bottom: 20px;\n}\n\nzcat-keyvalue-pair .zcat-key-value-pair-box .zcat-invalid {\n    margin-bottom: 6px;\n}\n\n/* === Global base styles from reference css/zcat-key-value-pairs.css === */\ntable.zcat-label-value-pairs {\n  width: 100%;\n  border: none;\n  border-spacing: 0 10px;\n}\ntable.zcat-label-value-pairs td,\nth {\n  border: none;\n  text-align: left;\n}\ntable.zcat-label-value-pairs td:nth-child(2),\ntable.zcat-label-value-pairs td:nth-child(5),\ntable.zcat-label-value-pairs td:nth-child(8) {\n  width: 30px;\n  text-align: center;\n}\ntable.zcat-label-value-pairs td:nth-child(3),\ntable.zcat-label-value-pairs td:nth-child(6) {\n  padding-right: 20px;\n}\ntable.zcat-label-value-pairs .key {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n}\ntable.zcat-label-value-pairs .value {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\nzcat-keyvalue-pair .zcat-key-value-pair-box.invalid, .zcat-key-value-pair-box.invalid {\n  padding-bottom: 20px;\n}\n\nzcat-keyvalue-pair .zcat-key-value-pair-box .zcat-invalid {\n    margin-bottom: 6px;\n}</style>";;
ZcatKeyvaluePair._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[3,1]},{"t":"f","p":[3,1],"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"a","p":[0,2]},{"t":"a","p":[0,2,1]},{"t":"f","p":[0,2,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[0,4,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[0,4,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;

ZcatKeyvaluePair._observedAttributes = [
  "self",
  "zcatProp",
  "userObjKeys",
  "userObjValues",
  "fieldList",
  "featureObj",
  "userObj",
  "rowList",
  "rowCounter",
  "reconstructedErrorObject"
];

export { ZcatKeyvaluePair };

ZcatKeyvaluePair.register("zcat-keyvalue-pair", {
  hash: "ZcatKeyvaluePair_4",
  refHash: "C_zcat-app_app_0"
});

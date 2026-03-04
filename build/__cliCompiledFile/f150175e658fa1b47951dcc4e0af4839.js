import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatKeyvaluePair extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      rows: prop('array', { default: [] })
    }), arg1);
  }

  init() {
    this._syncRows();
  }

  _syncRows() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    let initial = zcatProp.rows || [];
    if (initial.length === 0) {
      initial = [this._createEmptyRow()];
    }
    // Clone rows with _id for tracking
    let rows = [];
    for (let i = 0; i < initial.length; i++) {
      let row = Object.assign({}, initial[i]);
      if (!row._id) row._id = Date.now() + '_' + i;
      rows.push(row);
    }
    this.setData('rows', rows);
  }

  _createEmptyRow() {
    let zcatProp = this.getData('zcatProp');
    let fieldDefs = (zcatProp && zcatProp.fieldDefs) || [
      { key: 'key', label: 'Key', type: 'input' },
      { key: 'value', label: 'Value', type: 'input' }
    ];
    let row = { _id: Date.now() + '_' + Math.random().toString(36).slice(2, 6) };
    for (let i = 0; i < fieldDefs.length; i++) {
      row[fieldDefs[i].key] = '';
    }
    return row;
  }

  _fireCallback() {
    let self = this.getData('self');
    let zcatProp = this.getData('zcatProp');
    let rows = this.getData('rows') || [];
    if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
      self.executeMethod(zcatProp.callback.name, rows);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      addRow() {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        let maxRows = (zcatProp && zcatProp.maxRows) || 0;
        let rows = (this.getData('rows') || []).slice();
        if (maxRows && rows.length >= maxRows) return;
        rows.push(this._createEmptyRow());
        this.setData('rows', rows);
        this._fireCallback();
      },

      removeRow(row, event) {
        if (event) { event.stopPropagation(); }
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        let rows = (this.getData('rows') || []).filter(function(r) { return r._id !== row._id; });
        if (rows.length === 0) {
          rows = [this._createEmptyRow()];
        }
        this.setData('rows', rows);
        this._fireCallback();
      },

      onFieldInput(row, fieldKey, event) {
        let val = event.target.value;
        let rows = (this.getData('rows') || []).slice();
        for (let i = 0; i < rows.length; i++) {
          if (rows[i]._id === row._id) {
            rows[i] = Object.assign({}, rows[i]);
            rows[i][fieldKey] = val;
            break;
          }
        }
        this.setData('rows', rows);
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncRows();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatKeyvaluePair._template = "<template tag-name=\"zcat-keyvalue-pair\"> <div class=\"zcat-kvp-wrapper {{expHandlers(zcatProp.disabled,'?:','zcat-kvp-disabled','')}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-kvp-label-row\"> <label class=\"zcat-kvp-label\">{{zcatProp.label}}</label> </div> </template></template> <!-- Column Headers --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.fieldDefs,'&amp;&amp;',zcatProp.fieldDefs.length)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-kvp-header\"> <template items=\"{{zcatProp.fieldDefs}}\" item=\"fieldDef\" index=\"fIdx\" is=\"for\" _new=\"true\"> <span class=\"zcat-kvp-header-cell\" style=\"{{expHandlers(fieldDef.width,'?:',expHandlers('width:','+',fieldDef.width),'flex:1')}}\">{{fieldDef.label}}</span> </template> <span class=\"zcat-kvp-header-action\"></span> </div> </template></template> <!-- Rows --> <div class=\"zcat-kvp-body\"> <template items=\"{{rows}}\" item=\"row\" index=\"rowIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-kvp-row\"> <template items=\"{{zcatProp.fieldDefs}}\" item=\"fieldDef\" index=\"fIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-kvp-cell\" style=\"{{expHandlers(fieldDef.width,'?:',expHandlers('width:','+',fieldDef.width),'flex:1')}}\"> <input type=\"text\" class=\"zcat-kvp-input\" placeholder=\"{{expHandlers(expHandlers(fieldDef.placeholder,'||',fieldDef.label),'||','')}}\" value=\"{{row[fieldDef.key]}}\" disabled=\"{{expHandlers(zcatProp.disabled,'||',false)}}\" oninput=\"{{action('onFieldInput',row,fieldDef.key)}}\"> </div> </template> <div class=\"zcat-kvp-row-actions\"> <span class=\"zcat-kvp-remove-btn\" onclick=\"{{action('removeRow',row)}}\" title=\"Remove row\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </div> </div> </template> </div> <!-- Add Row Button --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.disabled,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-kvp-add-wrap\"> <button class=\"zcat-kvp-add-btn\" onclick=\"{{action('addRow')}}\"> <zcat-icon name=\"plus\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> <span>{{expHandlers(zcatProp.addLabel,'||','Add Row')}}</span> </button> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Key-Value Pair Component\n   ============================== */\n\nzcat-keyvalue-pair * { box-sizing: border-box; }\n\n.zcat-kvp-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--zcat-font-family-primary);\n  width: 100%;\n}\n\n/* Label */\n.zcat-kvp-label-row {\n  margin-bottom: 8px;\n}\n.zcat-kvp-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n\n/* Header */\n.zcat-kvp-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 0 6px;\n}\n.zcat-kvp-header-cell {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--zcat-inputField-text-label);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.zcat-kvp-header-action {\n  width: 32px;\n  flex-shrink: 0;\n}\n\n/* Body */\n.zcat-kvp-body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n/* Row */\n.zcat-kvp-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 0;\n  border-radius: 6px;\n  transition: background 0.12s;\n}\n.zcat-kvp-row:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n\n/* Cell */\n.zcat-kvp-cell {\n  min-width: 0;\n}\n\n/* Input */\n.zcat-kvp-input {\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  font-size: 13px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  outline: none;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n}\n.zcat-kvp-input::placeholder {\n  color: var(--zcat-inputField-text-placeholder);\n}\n.zcat-kvp-input:hover {\n  border-color: var(--zcat-inputField-border-hover);\n}\n.zcat-kvp-input:focus {\n  border-color: var(--zcat-inputField-border-active);\n}\n\n/* Row actions */\n.zcat-kvp-row-actions {\n  display: flex;\n  align-items: center;\n  width: 32px;\n  flex-shrink: 0;\n}\n.zcat-kvp-remove-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--zcat-inputField-icon-placeholder);\n  transition: background 0.12s, color 0.12s;\n  opacity: 0;\n}\n.zcat-kvp-row:hover .zcat-kvp-remove-btn {\n  opacity: 1;\n}\n.zcat-kvp-remove-btn:hover {\n  background: var(--zcat-inputField-bg-error, rgba(255, 0, 0, 0.06));\n  color: var(--zcat-inputField-text-error);\n}\n\n/* Add button */\n.zcat-kvp-add-wrap {\n  margin-top: 8px;\n}\n.zcat-kvp-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  background: transparent;\n  border: 1px dashed var(--zcat-body-border);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.zcat-kvp-add-btn:hover {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n\n/* Disabled */\n.zcat-kvp-disabled .zcat-kvp-input {\n  background: var(--zcat-inputField-bg-disabled);\n  border-color: var(--zcat-inputField-border-disabled);\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n}\n.zcat-kvp-disabled .zcat-kvp-remove-btn { display: none; }\n.zcat-kvp-disabled .zcat-kvp-label { color: var(--zcat-inputField-text-disabled); }\n</style>";;
ZcatKeyvaluePair._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["fieldDef.width","'?:'",null,"'flex:1'"]}}}},{"t":"tX","p":[1,0]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,11,1]},{"t":"f","p":[1,11,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["fieldDef.width","'?:'",null,"'flex:1'"]}}}},{"t":"a","p":[1,1]}],"in":1,"sibl":[0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1,1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"},{"t":"tX","p":[1,1,3,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatKeyvaluePair._observedAttributes = ["self", "zcatProp", "rows"];
export { ZcatKeyvaluePair };
ZcatKeyvaluePair.register("zcat-keyvalue-pair", {
  hash: "ZcatKeyvaluePair_2",
  refHash: "C_zcat-app_app_0"
});

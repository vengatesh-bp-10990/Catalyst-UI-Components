"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/keyvalue-comp"],{

/***/ 84459624:
/*!************************************************!*\
  !*** ./components/javascript/keyvalue-comp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyvalueComp": () => (/* binding */ KeyvalueComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_keyvalue_pair_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-keyvalue-pair.js */ 72422418);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class KeyvalueComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('keyvalueObj') || {};

    let slyte_code = '<zcat-keyvalue-pair\n  self="{{self}}"\n  zcat-prop="{{keyvalueObj}}"\n></zcat-keyvalue-pair>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    keyvalueObj: prop("object", {\n      default: {\n        label: "Parameters",\n        fieldDefs: [\n          { key: "paramKey", label: "Key", placeholder: "Enter key" },\n          { key: "paramValue", label: "Value", placeholder: "Enter value" }\n        ],\n        rows: [\n          { paramKey: "host", paramValue: "localhost" }\n        ]\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-kvp-wrapper">\n  <div class="zcat-kvp-header">\n    <span class="zcat-kvp-header-cell">Key</span>\n    <span class="zcat-kvp-header-cell">Value</span>\n  </div>\n  <div class="zcat-kvp-row">\n    <input class="zcat-kvp-input" placeholder="Key" />\n    <input class="zcat-kvp-input" placeholder="Value" />\n    <span class="zcat-kvp-remove-btn">×</span>\n  </div>\n  <button class="zcat-kvp-add-btn">+ Add Row</button>\n</div>';

    let css_code = '.zcat-kvp-row { display: flex; gap: 8px; align-items: center; }\n.zcat-kvp-input { flex: 1; height: 34px; border: 1px solid var(--zcat-inputField-border-default); border-radius: 6px; }';

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
    this.setData('htmlCodeSnippet', { code: html_code });
    this.setData('cssCodeSnippet', { code: css_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      keyvalueObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Parameters',
          fieldDefs: [
            { key: 'paramKey', label: 'Key', placeholder: 'Enter key' },
            { key: 'paramValue', label: 'Value', placeholder: 'Enter value' }
          ],
          rows: [
            { paramKey: 'host', paramValue: 'localhost', _id: 'row_1' },
            { paramKey: 'port', paramValue: '8080', _id: 'row_2' }
          ],
          addLabel: 'Add Parameter',
          callback: { name: 'onRowsChange' }
        }
      }),
      keyvalueObj2: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'HTTP Headers',
          fieldDefs: [
            { key: 'headerName', label: 'Header', placeholder: 'Header name' },
            { key: 'headerValue', label: 'Value', placeholder: 'Header value' }
          ],
          rows: [
            { headerName: 'Content-Type', headerValue: 'application/json', _id: 'h_1' },
            { headerName: 'Authorization', headerValue: 'Bearer xxx', _id: 'h_2' }
          ],
          addLabel: 'Add Header'
        }
      }),
      toggleLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onRowsChange(rows) {
        console.log('Key-value rows changed:', rows);
      },
      toggleLabel(val) {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'label', val ? 'Parameters' : '');
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'label', 'Parameters');
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'disabled', false);
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let snippet = this.getData(tab + 'CodeSnippet') || {};
        if (snippet.code && navigator.clipboard) {
          navigator.clipboard.writeText(snippet.code);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

KeyvalueComp._template = "<template tag-name=\"keyvalue-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Key-Value Pair</h1> <p class=\"zcat-page-desc\">Dynamic key-value row editor with add/remove rows, supporting custom field definitions.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Use Cases</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: 1fr\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Parameters</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">HTTP Headers</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj2}}\"></zcat-keyvalue-pair> </div> </div> </div> </div></template></template> </div> </template><style>/* keyvalue-comp demo styles are in utilities */\n</style>";;
KeyvalueComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

KeyvalueComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "keyvalueObj",
  "keyvalueObj2",
  "toggleLabelObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



KeyvalueComp.register("keyvalue-comp", {
  hash: "KeyvalueComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 72422418:
/*!*****************************************************!*\
  !*** ./components/javascript/zcat-keyvalue-pair.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatKeyvaluePair": () => (/* binding */ ZcatKeyvaluePair)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatKeyvaluePair extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }, { watch: true }),
      rows: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] })
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

ZcatKeyvaluePair.register("zcat-keyvalue-pair", {
  hash: "ZcatKeyvaluePair_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=keyvalue-comp.js.map
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/keyvalue-comp"],{

/***/ 84459624:
/*!************************************************!*\
  !*** ./components/javascript/keyvalue-comp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      keyvalueObj3: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Environment Variables',
          fieldDefs: [
            { key: 'envKey', label: 'Variable', placeholder: 'VARIABLE_NAME' },
            { key: 'envValue', label: 'Value', placeholder: 'value' }
          ],
          rows: [
            { envKey: 'NODE_ENV', envValue: 'production', _id: 'env_1' },
            { envKey: 'API_URL', envValue: 'https://api.example.com', _id: 'env_2' },
            { envKey: 'PORT', envValue: '3000', _id: 'env_3' }
          ],
          addLabel: 'Add Variable'
        }
      }),
      keyvalueObj4: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Query Parameters',
          fieldDefs: [
            { key: 'qKey', label: 'Parameter', placeholder: 'param' },
            { key: 'qValue', label: 'Value', placeholder: 'value' }
          ],
          rows: [
            { qKey: 'page', qValue: '1', _id: 'q_1' },
            { qKey: 'limit', qValue: '20', _id: 'q_2' },
            { qKey: 'sort', qValue: 'created_at', _id: 'q_3' }
          ],
          addLabel: 'Add Query Param'
        }
      }),
      keyvalueDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Read-only Config',
          disabled: true,
          fieldDefs: [
            { key: 'cfgKey', label: 'Key', placeholder: 'key' },
            { key: 'cfgValue', label: 'Value', placeholder: 'value' }
          ],
          rows: [
            { cfgKey: 'theme', cfgValue: 'dark', _id: 'cfg_1' },
            { cfgKey: 'language', cfgValue: 'en-US', _id: 'cfg_2' }
          ],
          addLabel: 'Add Config'
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

KeyvalueComp._template = "<template tag-name=\"keyvalue-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Key-Value Pair</h1> <p class=\"zcat-page-desc\">Dynamic key-value row editor with add/remove rows, supporting custom field definitions.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Use Cases</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: 1fr\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Parameters</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">HTTP Headers</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj2}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Environment Variables</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj3}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Query Parameters</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj4}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled (Read-only)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueDisabledObj}}\"></zcat-keyvalue-pair> </div> </div> </div> </div></template></template></div> </template><style>/* keyvalue-comp demo styles are in utilities */\n</style>";;
KeyvalueComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

KeyvalueComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "keyvalueObj",
  "keyvalueObj2",
  "keyvalueObj3",
  "keyvalueObj4",
  "keyvalueDisabledObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



KeyvalueComp.register("keyvalue-comp", {
  hash: "KeyvalueComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 72422418:
/*!*****************************************************!*\
  !*** ./components/javascript/zcat-keyvalue-pair.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatKeyvaluePair": () => (/* binding */ ZcatKeyvaluePair)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-input.js */ 9513644);
/* harmony import */ var _zcat_dropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-dropdown.js */ 71154528);
/* harmony import */ var _zcat_autocomplete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-autocomplete.js */ 41243170);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_plugins_lyte_sortable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/plugins/lyte-sortable.js */ 45109745);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_plugins_lyte_sortable_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_ui_component_plugins_lyte_sortable_js__WEBPACK_IMPORTED_MODULE_5__);










class ZcatKeyvaluePair extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_6__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { default: this }), 
      // zcatProp: prop('object', { default: {} }), 
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)("object", { watch: true }),
      userObjKeys: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { default: {} }),
      userObjValues: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { default: {} }),
      fieldList: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { default: [] }), 
      featureObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { default: [] }), 
			userObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { default: {} })	,
      rowList: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { default: [] }),
      rowCounter: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('number', {default: 0 }), 
      reconstructedErrorObject: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_7__.prop)('array')
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



ZcatKeyvaluePair.register("zcat-keyvalue-pair", {
  hash: "ZcatKeyvaluePair_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 45109745:
/*!***********************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/plugins/lyte-sortable.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
    if( true ) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! @zoho/lyte-dom */ 52000102) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
} )(function( $L ) {

	if( typeof $L != "undefined" ){
		$L.prototype.manageSortable = {
			
			keyPressed : false,
			keyValue : 0,
			countSortable : 0,
			init : false,
			prevSortable : false,
			mousedownTriggered : false,
			draggedEle : null,
			_ssData : {},
			measureQueue : [],
			mutateQueue : [],
			isEqual : function (value, other) {
				if(value.length != other.length){
					return false;
				}
				for(var i = 0 ; i < value.length ; i++){
					if(other.indexOf(value[i]) == -1){
						return false;
					}
				}
				// If nothing failed, return true
				return true;
			},

			convertToArrayOfItems : function(selector,context){
				if(typeof selector != "string" && selector.length > 0){
					return selector;
				}
				var selectorArray = selector.split(',');
				var retArray = [];
				selectorArray.forEach(function(item,indexVal){
					var items = $L(item.trim(),context);
					if(items.length){
						for(var i=0;i < items.length ;i++){
							if(retArray.indexOf(items[i]) == -1 && items[i].tagName != "TEMPLATE"){
								retArray.push(items[i]);
							}
						}
					}
					else{
						if(retArray.indexOf(items) == -1 && items.tagName != "TEMPLATE"){
							retArray.push(items);
						}
					}
				});
				return retArray;
			},

			destroy : function(element){

				if(!(element.classList.contains('sortable-parent'))){
					console.info("ALERT! - U have already destroyed its sortable behaviour.");
					return;
				}
				var childrens = Array.from(element.children).filter(function(node) { return node.tagName != 'TEMPLATE'});
				var sortableElemClass = element.getSortableClass();
				for(var i = 0; i<childrens.length; i++){
					childrens[i].classList.remove('sortable-element',sortableElemClass);
					if(childrens[i]._sortableChildData){
						childrens[i]._sortableChildData = null;
					}
				}
				if(element._mousedown){
					element.removeEventListener('mousedown',element.__mouseDownEvent);
					element.removeEventListener('touchstart',element.__mouseDownEvent, true);
					element._mousedown = false;
				}
				element.classList.remove('sortable-parent');
				// element._sortableParentData = null;
				if(element._sortableParentData.multiSortable) {
					element._sortableParentData.allSortableClass = null;
				}
				delete element._sortableParentData;
				delete element.getSortableClass;
			},

			cancel : function(element){
				if(!(element.classList.contains('sortable-parent'))){
					console.info("ALERT! - The element is not a sortable parent.");
					return;
				}
				var childrens = this.getChildElements(element) /*element.children*/;
				for(var i = childrens.length-1; i >= 0 ; i--){
					if(childrens[i]._pos != i){
						var elem = undefined;
						for(var j = i; j >= 0; j--){
							if(childrens[j]._pos == i){
								elem = childrens[j];
								break;
							}
						}
						if(elem){
							if(i == childrens.length-1){
								window._lyteUiUtils.appendChild(element,elem);
							}
							else{
								window._lyteUiUtils.insertBefore(childrens[i+1],elem);
							}
						}
						childrens = this.getChildElements(element);
					}
				}
			},

			getChildElements : function(parent){
				return Array.from(parent.children).filter(function(ele){ return ele.tagName != "TEMPLATE" });
			},

			disable : function(elements){
				for(var i = 0; i < elements.length; i++){
					var sortableElem = elements[i];
					if(!(sortableElem.classList.contains('sortable-element'))){
						console.info(sortableElem, " cannot be disabled as it is not a sortable element.");
					}
					else{
						var disabledData = {
												class : 'sortable-element',
												data : Object.assign({}, sortableElem._sortableChildData)
											};
						sortableElem.classList.add('sort-disabled-element');
						sortableElem.classList.remove('sortable-element', sortableElem._sortableChildData.sortableElemClass);
						sortableElem._disabledData = disabledData;
						sortableElem._sortableChildData = null;
					}
				}
			},

			enable : function(elements){
				for(var i = 0; i < elements.length; i++){
					var sortableElem = elements[i];
					if(!(sortableElem._disabledData || sortableElem.classList.contains('sort-disabled-element'))){
						console.info(sortableElem, " cannot be enabled as it is not a disabled sortable element.");
					}
					else{
						sortableElem._sortableChildData = Object.assign({}, sortableElem._disabledData.data);
						sortableElem.classList.remove('sort-disabled-element');
						sortableElem.classList.add('sortable-element', sortableElem._sortableChildData.sortableElemClass);
						delete sortableElem._disabledData;
					}
				}
			},

			alreadySortable : function(elements){
				for(var i = 0; i<elements.length; i++){
					if($L(elements[i]).hasClass('sortable-parent') && elements[i]._sortableParentData){
						return {found : true, class : elements[i]._sortableParentData.sortableElemClass}
					}
				}
				return {found : undefined};
			},

			isOver : function(event, data, fromDraggable){
				var manageSortable = $L.prototype.manageSortable;
				var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
				var clientY  = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
				if(fromDraggable){
					var prevOffset = manageSortable.prevSortable ? manageSortable.prevSortable.getBoundingClientRect() : null;
					if(prevOffset && (clientX < prevOffset.left || clientX > prevOffset.right || clientY < prevOffset.top || clientY > prevOffset.bottom)){
						if(manageSortable.prevSortable && manageSortable.prevSortable._sortableParentData && manageSortable.prevSortable._sortableParentData.onLeave){
							manageSortable.prevSortable._sortableParentData.onLeave(event,{element : data._element, sortable : manageSortable.prevSortable, placeholder : data._placeholder});
						}
						manageSortable.prevSortable = false;
					}
					else{

						var sortables = document.querySelectorAll(data.connectToSortable+".sortable-parent");
						if(sortables.length){
							for(var i = sortables.length-1; i >= 0; i--){
								var sortableOffset =  sortables[i].getBoundingClientRect();
								var enableEnterLeave = (sortables[i] && sortables[i]._sortableParentData) ? sortables[i]._sortableParentData.enableEnterLeave : false;
								if((sortables[i]._sortableParentData.droppable || enableEnterLeave) && (clientX >= sortableOffset.left) && (clientX <= sortableOffset.right) && (clientY >= sortableOffset.top) && (clientY <= sortableOffset.bottom)){
									// return sortables[i];
									if(!manageSortable.prevSortable || (manageSortable.prevSortable && manageSortable.prevSortable != sortables[i])){
										manageSortable.prevSortable = sortables[i];

										if(manageSortable.prevSortable._sortableParentData && manageSortable.prevSortable._sortableParentData.onEnter){
											data._toIndex = checkDroppedItemPosition(data, data._placeholder  ,findSortableChild(data));
											manageSortable.prevSortable._sortableParentData.onEnter(event,{element : data._element, sortable : manageSortable.prevSortable, placeholder : data._placeholder, toIndex : data._toIndex, fromIndex : data._fromIndex, source : data._source});
										}
									}
									break;
								}
							}
						}
					}
				}
				else{

					var prevOffset = manageSortable.prevSortable ? ( manageSortable.prevSortable.getBoundingClientRect() ) : null;
					if(prevOffset && (clientX < prevOffset.left || clientX > prevOffset.right || clientY < prevOffset.top || clientY > prevOffset.bottom)){
						// manageSortable.prevSortable.classList.remove('disableHover');
						if(manageSortable.prevSortable && manageSortable.prevSortable._sortableParentData && manageSortable.prevSortable._sortableParentData.onLeave){
							manageSortable.prevSortable._sortableParentData.onLeave(event,{element : data._div, sortable : manageSortable.prevSortable, placeholder : data._placeholder});
						}
						manageSortable.prevSortable = false;
					}
					else{

						var sortables = data.connectedWith.length ? data.connectedWith : [data._parentElem];
						if(sortables.length){
							for(var i = sortables.length-1; i >= 0; i--){
								

								var sortableOffset =   sortables[i].getBoundingClientRect();
								var enableEnterLeave = (sortables[i] && sortables[i]._sortableParentData) ? sortables[i]._sortableParentData.enableEnterLeave : false;
								if((sortables[i]._sortableParentData.droppable || enableEnterLeave) && (clientX >= sortableOffset.left) && (clientX <= sortableOffset.right) && (clientY >= sortableOffset.top) && (clientY <= sortableOffset.bottom)){
									// return sortables[i];

									if(!manageSortable.prevSortable || (manageSortable.prevSortable && manageSortable.prevSortable != sortables[i])){
										manageSortable.prevSortable = sortables[i];
										// manageSortable.prevSortable.classList.add('disableHover');
										if(manageSortable.prevSortable._sortableParentData && manageSortable.prevSortable._sortableParentData.onEnter){
											data._toIndex = checkDroppedItemPosition(data, data._placeholder  , findSortableChild(data));
											manageSortable.prevSortable._sortableParentData.onEnter(event,{element : data._div, sortable : manageSortable.prevSortable, placeholder : data._placeholder, toIndex : data._toIndex, fromIndex : data._fromIndex, source : data._source});
										}
									}
									break;
								}
							}
						}
					}
				}
			},
			

			getSortableClasses : function(elements, previousObject) {
				var object = previousObject || {};
				elements.forEach(function(element){
					if( element && element._sortableParentData){
						var classNameForSortable = element._sortableParentData.sortableElemClass;
						if(!object.hasOwnProperty(classNameForSortable)) {
							object[classNameForSortable] = element;
						}
					}
				});
				return object;
			},

			enableDroppable : function(element) {
				if($L(element).hasClass('sortable-parent')) {
					element[0]._sortableParentData.droppable = true;
				}
			},

			disableDroppable : function(element) {
				if($L(element).hasClass('sortable-parent')) {
					element[0]._sortableParentData.droppable = false;
				}
			}
		};
		function positionDropLine(data, position) {
			var orientation = data.orientation;
			if (orientation === "horizontal") {
				var positionNode = data._droppablePlace ? data._droppablePlace : data._placeholder;
				var dropLine = data._dropLine;
				var dropLineWidth = dropLine.offsetWidth;
				var placeHolderRect = positionNode.getBoundingClientRect();
				var parentRect = data._parentElem.getBoundingClientRect();

				if (position === "before") {
					dropLine.style.left = `${placeHolderRect.left - (dropLineWidth / 2)}px`;
					// dropLine.style.left = `${placeHolderRect.left - parentRect.left + marginLeft + paddingLeft + dropLineWidth/2}px`;
					dropLine.style.top = `${placeHolderRect.top}px`;
				}
				else if (position === "after") {
					dropLine.style.left = `${placeHolderRect.left + placeHolderRect.width - (dropLineWidth / 2)}px`;
					// dropLine.style.left = `${placeHolderRect.left - parentRect.left + placeHolderRect.width + marginLeft + paddingLeft + dropLineWidth/2}px`;
					dropLine.style.top = `${placeHolderRect.top}px`;
				}
				else {
					console.warn("Unsupported position: " + position);
				}
			} else {
				// Vertical orientation
				//This is fixed
				var positionNode = data._droppablePlace ? data._droppablePlace : data._placeholder;
				var dropLine = data._dropLine;
				var dropLineHeight = dropLine.offsetHeight;

				var placeHolderRect = positionNode.getBoundingClientRect();
				if (position === "before") {
					dropLine.style.top = `${placeHolderRect.top}px`;
					dropLine.style.left = `${placeHolderRect.left}px`;
				}
				else if (position === "after") {
					dropLine.style.top = `${placeHolderRect.top + placeHolderRect.height}px`;
					dropLine.style.left = `${placeHolderRect.left}px`;
				}
				else {
					console.warn("Unsupported position: " + position);
				}
			}
		}
		var checkDroppedItemPosition = function(data, ele,siblings){
			if(data.omitRestricted){
				for(var y = 0; y<siblings.length; y++){
					if(!isNotRestricted(data,siblings[y])){
						siblings.splice(y,1);
						--y;
					}
				}
			}
			for(var i = 0; i<siblings.length; i++){
				if(siblings[i].tagName != "TEMPLATE" && ele == siblings[i]){
					return i;
				}
			}
		};
		var findSortableChild = function(data){
			var childarray = [];
			Array.from(data._placeholder.parentElement.children).forEach(function(ele){
				if(ele.tagName != "TEMPLATE" && !($L(ele).hasClass('sortable-element-selected'))){
					childarray.push(ele);
				}
			})
			return childarray;
		}
		var isNotRestricted = function(data,targetElem){
			for(var i = 0; i<data.restrict.length ; i++){
				if(targetElem.matches(data.restrict[i])){
					return false;
				}
			}
			return true;
		};

		$L.prototype.sortable = function(object) {
			
			var manageSortable = $L.prototype.manageSortable;
			if(!manageSortable.init){
				if (!Element.prototype.matches) {
				    Element.prototype.matches =
				        Element.prototype.matchesSelector ||
				        Element.prototype.mozMatchesSelector ||
				        Element.prototype.msMatchesSelector ||
				        Element.prototype.oMatchesSelector ||
				        Element.prototype.webkitMatchesSelector ||
				        function(s) {
				            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				                i = matches.length - 1;
				            while (i >= 0 && matches.item(i) !== this){
				            	--i;
				            	//gets the index of the matched item
				            }
				            return i > -1;
				        };
				}
				if (!Array.from) {
				  Array.from = (function () {
				    var toStr = Object.prototype.toString;
				    var isCallable = function (fn) {
				      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
				    };
				    var toInteger = function (value) {
				      var number = Number(value);
				      if (isNaN(number)) { return 0; }
				      if (number === 0 || !window.isFinite(number)) { return number; }
				      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
				    };
				    var maxSafeInteger = Math.pow(2, 53) - 1;
				    var toLength = function (value) {
				      var len = toInteger(value);
				      return Math.min(Math.max(len, 0), maxSafeInteger);
				    };

				    // The length property of the from method is 1.
				    return function from(arrayLike/*, mapFn, thisArg */) {
				      // 1. Let C be the this value.
				      var C = this;

				      // 2. Let items be ToObject(arrayLike).
				      var items = Object(arrayLike);

				      // 3. ReturnIfAbrupt(items).
				      if (arrayLike == null) {
				        throw new TypeError('Array.from requires an array-like object - not null or undefined');
				      }

				      // 4. If mapfn is undefined, then let mapping be false.
				      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
				      var T;
				      if (typeof mapFn !== 'undefined') {
				        // 5. else
				        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
				        if (!isCallable(mapFn)) {
				          throw new TypeError('Array.from: when provided, the second argument must be a function');
				        }

				        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
				        if (arguments.length > 2) {
				          T = arguments[2];
				        }
				      }

				      // 10. Let lenValue be Get(items, "length").
				      // 11. Let len be ToLength(lenValue).
				      var len = toLength(items.length);

				      // 13. If IsConstructor(C) is true, then
				      // 13. a. Let A be the result of calling the [[Construct]] internal method
				      // of C with an argument list containing the single item len.
				      // 14. a. Else, Let A be ArrayCreate(len).
				      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

				      // 16. Let k be 0.
				      var k = 0;
				      // 17. Repeat, while k < len… (also steps a - h)
				      var kValue;
				      while (k < len) {
				        kValue = items[k];
				        if (mapFn) {
				          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				        } else {
				          A[k] = kValue;
				        }
				        k += 1;
				      }
				      // 18. Let putStatus be Put(A, "length", len, true).
				      A.length = len;
				      // 20. Return A.
				      return A;
				    };
				  }());
				}
				manageSortable.init = true;
			}

			if(typeof object === "string"){
				if(object === "destroy"){
					if(this.length > 1){
						var elemArray = this;
						for(var i = 0; i<elemArray.length; i++){
							manageSortable.destroy(elemArray[i]);
						}
					}
					else{
						manageSortable.destroy(this[0]);
					}
				}
				else if(object === "cancel"){
					if(this.length > 1){
						var elemArray = this;
						for(var i = 0; i<elemArray.length; i++){
							manageSortable.cancel(elemArray[i]);
						}
					}
					else{
						manageSortable.cancel(this[0]);
					}
				}
				else if(object === "disable"){
					manageSortable.disable(this);
				}
				else if(object === "enable"){
					manageSortable.enable(this);
				}
				else if(object === "disableDroppable"){
					manageSortable.disableDroppable(this);
				}
				else if(object === "enableDroppable"){
					manageSortable.enableDroppable(this);
				}
				return;
			}
			var data = object ? object : {};

			/* -------- BROWSER RELATED CHECKS -------- */
			var detectBrowser = function(){
				//Check if browser is IE11
			    if (window.navigator.userAgent.search("rv:11") >= 0) {
			        return "ie";
			    }
			    //Check if browser is Edge
			    if (window.navigator.userAgent.search("Edge") >= 0) {
			        return "edge";
			    }
			    //Check if browser is Chrome || Opera
			    else if (window.navigator.userAgent.search("Chrome") >= 0) {
			        return "chrome";
			    }
			    //Check if browser is Firefox
			    else if (window.navigator.userAgent.search("Firefox") >= 0) {
			        return "firefox";
			    }
			    //Check if browser is Safari
			    else if (window.navigator.userAgent.search("Safari") >= 0 && window.navigator.userAgent.search("Chrome") < 0) {
			        return "safari";
			    }
			};

			var getOS = function() {
				var userAgent = window.navigator.userAgent,
				    platform = window.navigator.platform,
				    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
				    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
				    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
				    os = null;

				if (macosPlatforms.indexOf(platform) !== -1) {
				    os = 'Mac OS';
				} else if (iosPlatforms.indexOf(platform) !== -1) {
				    os = 'iOS';
				} else if (windowsPlatforms.indexOf(platform) !== -1) {
				    os = 'Windows';
				} else if (/Android/.test(userAgent)) {
				    os = 'Android';
				} else if (!os && /Linux/.test(platform)) {
				    os = 'Linux';
				}

				return os;
			};

			var isMobileOrTabletCheck = function() {
				var check = false;
				(function(a){
					if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
						check = true;
					}
				})(window.navigator.userAgent||window.navigator.vendor||window.opera);
				return check;
			};

			if(this.length > 1){

				var elemArray = this;
				if(!data.changed){
					++manageSortable.countSortable;
					data.changed = true;
				}
				var check = manageSortable.alreadySortable(this);

				if(check.found){
					data.sortableElemClass = check.class;
				}
				for(var i = 0 ; i < elemArray.length ; i++){

					if(elemArray[i]._sortableParentData && data.isSameClass  ){
						if((elemArray[i]._sortableParentData.connectedWith.length !== $L(data.connectedWith,data.context).length)){
							data.connectedWith  = manageSortable.convertToArrayOfItems(data.connectedWith,data.context);
						}else {
							data.connectedWith = elemArray[i]._sortableParentData.connectedWith;
						}
					}
					$L(elemArray[i]).sortable(Object.assign({},data));


				};
				return;
			}


			var element = this.length == undefined ? this : this[0];


			if(element._sortableParentData){

				var _sortableData = element._sortableParentData;

				data._parentElem = data._parentElem == undefined ? _sortableData._parentElem : data._parentElem;

				//Data overriding
				data.containment = data.containment ? data.containment : _sortableData.containment;
				data.containmentBoundaries =  data.containmentBoundaries ?  data.containmentBoundaries : _sortableData.containmentBoundaries;
				data.connected = data.connectedWith ? manageSortable.isEqual(data.connectedWith, _sortableData.connectedWith) : _sortableData.connected;
				data.connectedWith = data.connectedWith ? data.connectedWith : _sortableData.connectedWith;
				data.orientation = data.orientation ? data.orientation : _sortableData.orientation;
				data.droppable = (data.droppable == undefined) ? _sortableData.droppable : data.droppable;
				data.enableEnterLeave = (data.enableEnterLeave == undefined) ? _sortableData.enableEnterLeave : data.enableEnterLeave;
				data.draggable = (data.draggable == undefined) ? _sortableData.draggable : data.draggable;
				data.sortableElemClass = data.sortableElemClass ? data.sortableElemClass : _sortableData.sortableElemClass;
				data.selectedClass = data.selectedClass ? data.selectedClass : _sortableData.selectedClass;
				data.placeholder = data.placeholder ? data.placeholder : _sortableData.placeholder;
				data.disabled = data.disabled ? data.disabled : _sortableData.disabled;
				data.onReady = data.onReady ? data.onReady : _sortableData.onReady;
				data.onSelect = data.onSelect ? data.onSelect : _sortableData.onSelect;
				data.onDragStart = data.onDragStart ? data.onDragStart : _sortableData.onDragStart;
				data.onDrag = data.onDrag ? data.onDrag : _sortableData.onDrag;
				data.onPlaceholder = data.onPlaceholder ? data.onPlaceholder : _sortableData.onPlaceholder;
				data.onBeforeDrop = data.onBeforeDrop ? data.onBeforeDrop : _sortableData.onBeforeDrop;
				data.onDrop = data.onDrop ? data.onDrop : _sortableData.onDrop;
				data.onAfterDrop = data.onAfterDrop ? data.onAfterDrop : _sortableData.onAfterDrop;
				data.cancel = data.cancel == undefined ? _sortableData.cancel : data.cancel instanceof Array ? data.cancel : data.cancel.split(",") ;
				data.cancelRemove = (_sortableData.cancelRemove || data.cancelRemove == true) ? true : false ;
				data.tolerance = data.tolerance ? data.tolerance : _sortableData.tolerance;
				data.items = data.items == undefined ? _sortableData.items : data.items instanceof Array ? data.items : data.items.split(",");
				data.cursorAt = data.cursorAt == undefined ? _sortableData.cursorAt : data.cursorAt;
				data.restrict = data.restrict == undefined ? _sortableData.restrict : data.restrict instanceof Array ? data.restrict : data.restrict.split(",");
				data.scrollDivX = data.scrollDivX == undefined ? _sortableData.scrollDivX : typeof data.scrollDivX === "string" ? document.querySelector(data.scrollDivX) : data.scrollDivX;
				data.scrollDivY = data.scrollDivY == undefined ? _sortableData.scrollDivY : typeof data.scrollDivY === "string" ? document.querySelector(data.scrollDivY) : data.scrollDivY;
				data.scrollSpeed = data.scrollSpeed ? data.scrollSpeed : _sortableData.scrollSpeed;
				data.scrollSpeedCondition = data.scrollSpeedCondition ? data.scrollSpeedCondition : data.scrollSpeed;
				data.scrollBoundaries = data.scrollBoundaries ? data.scrollBoundaries :_sortableData.scrollBoundaries;
				data.preventScrollY = data.preventScrollY == undefined ? _sortableData.preventScrollY : data.preventScrollY;
				data.omitRestricted = data.omitRestricted == undefined ? _sortableData.omitRestricted : data.omitRestricted;
				data.onEnter = data.onEnter ? data.onEnter : _sortableData.onEnter;
				data.onLeave = data.onLeave ? data.onLeave : _sortableData.onLeave;
				data.clone = data.clone ? data.clone : _sortableData.clone;
				data.preventDefault = data.preventDefault ? data.preventDefault : _sortableData.preventDefault;
				if( data.appendTo && data.appendTo.toLowerCase() == 'body'){
					data.appendTo = document.body;
				}
				data.appendTo = data.appendTo ? (data.appendTo != "parent" ? $L(data.appendTo)[0] : "parent") : _sortableData.appendTo;
				data.helper = data.helper ? data.helper : _sortableData.helper;
				data.preventDropAtEnd = data.preventDropAtEnd == undefined ? _sortableData.preventDropAtEnd : data.preventDropAtEnd;
				data.preventDropAtStart = data.preventDropAtStart == undefined ? _sortableData.preventDropAtStart : data.preventDropAtStart;
				data.onMultiSelectDrag = data.onMultiSelectDrag ? data.onMultiSelectDrag : _sortableData.onMultiSelectDrag;
				data.gridView = data.gridView ? data.gridView : _sortableData.gridView;
				data.multiSortable = data.multiSortable ? data.multiSortable : _sortableData.multiSortable;
				data.context = data.context ? data.context : _sortableData.context;
				data.isSameClass = data.isSameClass ? data.isSameClass : _sortableData.isSameClass;
				data.preventScroll = data.preventScroll ? data.preventScroll : _sortableData.preventScroll;
				data.threshold = data.threshold ? data.threshold : _sortableData.threshold;
				data.dblTouchEvent = data.dblTouchEvent ? data.dblTouchEvent : _sortableData.dblTouchEvent;
				data.placeholderAppendTo = data.placeholderAppendTo ? data.placeholderAppendTo : _sortableData.placeholderAppendTo;
				data.transitionEnabled = data.transitionEnabled ? data.transitionEnabled : _sortableData.transitionEnabled;
				data.transitionDuration = data.transitionDuration ? data.transitionDuration : _sortableData.transitionDuration;
				data.aria = data.aria ? data.aria : _sortableData.aria;
				data.updateOnDrop = data.updateOnDrop ? data.updateOnDrop : _sortableData.updateOnDrop;

				if (data.multiSortable && data.connectedWith) {
					data.allSortableClass = _sortableData.allSortableClass ? _sortableData.allSortableClass : manageSortable.getSortableClasses(data.connectedWith, _sortableData.allSortableClass);
				}
				if(!($L(element).hasClass('sortable-parent'))){
					$L(element).addClass('sortable-parent','lyteSortableParent')
				}
				if(data.executeOnReady){
					data._parentElem.executedOnReady = false;
				}
				if(data.aria){
					data._parentElem.setAttribute('tabIndex',0);
				}
			}
			else{

				if(!data.connected && !data.changed){
					++manageSortable.countSortable;
					data.changed = true;
				}
				//Parent Element
				data._parentElem = element;
				$L(data._parentElem).addClass('sortable-parent','lyteSortableParent');

				//Data initialization
				data.containment = data.containment;
				data.containmentBoundaries = data.containmentBoundaries ?   data.containmentBoundaries : {top: 0 ,left:0 ,right:0 ,bottom : 0};
				data.connectedWith = data.connectedWith ? data.connectedWith : [];
				data.orientation = data.orientation ? data.orientation : "default";
				data.selectedClass = data.selectedClass ? data.selectedClass : "";
				data.droppable = (data.droppable == undefined) ? true : data.droppable;
				data.enableEnterLeave = (data.enableEnterLeave == undefined) ? false : data.enableEnterLeave;
				data.draggable = (data.draggable == undefined) ? true : data.draggable;
				data.sortableElemClass = data.sortableElemClass ? data.sortableElemClass : element.parentElement && element.parentElement._sortableParentData ? element.parentElement._sortableParentData.sortableElemClass : (data.orientation === "horizontal") ? "sortable-element-h"+manageSortable.countSortable : (data.orientation === "vertical") ? "sortable-element-v"+manageSortable.countSortable : "sortable-element-d"+manageSortable.countSortable;
				data.placeholder = data.placeholder ? data.placeholder : "lyteSortablePlaceholder";
				data.disabled = data.disabled ? data.disabled : "lyteSortableDisabledPlaceholder";
				data.cancel = data.cancel == undefined ? [] : data.cancel instanceof Array ? data.cancel : data.cancel.split(",");
				data.tolerance = data.tolerance ? data.tolerance : "intersect";
				data.items = data.items == undefined ? [] : data.items instanceof Array ? data.items : data.items.split(",");
				data.cursorAt = data.cursorAt;
				data.restrict = data.restrict == undefined ? [] : data.restrict instanceof Array ? data.restrict : data.restrict.split(",");
				data.scrollDivX = data.scrollDivX ? ( typeof data.scrollDivX === "string" ? document.querySelector(data.scrollDivX) : data.scrollDivX) : undefined;
				data.scrollDivY = data.scrollDivY ? ( typeof data.scrollDivY === "string" ? document.querySelector(data.scrollDivY) : data.scrollDivY) : undefined;
				data.scrollSpeed = data.scrollSpeed ? data.scrollSpeed : 10;
				data.scrollSpeedCondition = data.scrollSpeedCondition ? data.scrollSpeedCondition : data.scrollSpeed;
				data.scrollBoundaries = data.scrollBoundaries ? data.scrollBoundaries : {top: 0 , left: 0 ,right: 0, bottom: 0}; 
				data.omitRestricted = data.omitRestricted == undefined ? false : data.omitRestricted;
				data.clone = data.clone ? true : false;
				data.context = data.context ? data.context : document.body;
				data.preventDefault = data.preventDefault == undefined ? { "mousedown" : isMobileOrTabletCheck() ? false : true, "mousemove" : true } : data.preventDefault;
				if(data.appendTo && data.appendTo.toLowerCase() == 'body'){
					data.appendTo = document.body;
				}
				data.appendTo = data.appendTo && data.appendTo != "parent" ? $L(data.appendTo)[0] : "parent";
				data.preventDropAtEnd = data.preventDropAtEnd == undefined ? true : data.preventDropAtEnd;
				data.preventDropAtStart = data.preventDropAtStart == undefined ? true : data.preventDropAtStart;
				data.gridView = data.gridView ? true : false;
				data.isSameClass = data.isSameClass ? data.isSameClass : false;
				data.preventScrollY = data.preventScrollY ? data.preventScrollY : false;
				data.preventScroll = data.preventScroll ? data.preventScroll : false;
				data.threshold = data.threshold ? data.threshold : 0;
				data.dblTouchEvent = data.dblTouchEvent ? data.dblTouchEvent : false;
				data.placeholderAppendTo = data.placeholderAppendTo ? data.placeholderAppendTo : 'null';
				data.transitionEnabled = data.transitionEnabled ? data.transitionEnabled : false;
				data.transitionDuration = data.transitionDuration !== undefined ? data.transitionDuration : 500;
				data.aria = data.aria ? data.aria : false;
				data.updateOnDrop = data.updateOnDrop ? data.updateOnDrop : false;
				if(data.aria){
					data._parentElem.setAttribute('tabIndex',0);
				}
			}


			var _offset = [0,0];
			var _initClientX;
			var _initClientY;
			var _isDown = false;
			var _isMoved = false;
			var _mousePosition;
			var _elemBelow;
			var _droppablePlace;
			var _marginTop = 0;
			var _marginLeft = 0;
			var _sortableElemClass;
			var _sortableElem;
			var _placeholder = "";
			var _div = "";
			var _scrollLeft = 0;
			var _scrollTop = 0;
			var _requestId1 = null;
			var _requestId2 = null;
			var _animationFrameFired1 = false;
			var _animationFrameFired2 = false;
			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
			var _maxScrollWidth = 0;
			var _maxScrollHeight = 0;
			var _prevMode = null;
			var prevTop = null;
			var _prevScrollDiv = null;
			var _prevData = null;
			if(data.containmentBoundaries){
				data.containmentBoundaries.top = data.containmentBoundaries.top ? data.containmentBoundaries.top : 0;
				data.containmentBoundaries.bottom = data.containmentBoundaries.bottom ? data.containmentBoundaries.bottom : 0;
				data.containmentBoundaries.left = data.containmentBoundaries.left ? data.containmentBoundaries.left : 0;
				data.containmentBoundaries.right = data.containmentBoundaries.right ? data.containmentBoundaries.right : 0;
			}
			if(data.scrollBoundaries){
				data.scrollBoundaries.top = data.scrollBoundaries.top ? data.scrollBoundaries.top : 0;
				data.scrollBoundaries.bottom = data.scrollBoundaries.bottom ? data.scrollBoundaries.bottom : 0;
				data.scrollBoundaries.left = data.scrollBoundaries.left ? data.scrollBoundaries.left : 0;
				data.scrollBoundaries.right = data.scrollBoundaries.right ? data.scrollBoundaries.right : 0;
			}
			var getSortableElem =  function(target){
				while(target){
					if($L(target).hasClass("sortable-element")){
						_sortableElem = target;
						break;
					}
					target = target.parentElement;
				}
				if(!target){
					_sortableElem = null;
					manageSortable.draggedEle = null;
				}
				return _sortableElem;
			}
			
			var createHelper = function(data){
				var helper = data.helper(_sortableElem);
				if(helper){
					helper._isHelper = true;
					helper.classList.add('sortable-helper');
					helper._sortableChildData = Object.assign({},_sortableElem._sortableChildData || _sortableElem.parentElement._sortableParentData);
					helper.classList.add(_sortableElem.parentElement._sortableParentData.sortableElemClass);
					helper._origin = _sortableElem;
					manageSortable.draggedEle = helper;
					if(data.appendTo == "parent"){
						window._lyteUiUtils.appendChild(_sortableElem.parentElement, helper);
					}
					else{
						window._lyteUiUtils.appendChild($L(data.appendTo)[0], helper);
					}
					data = helper._sortableChildData;
					helper.style.visibility = "hidden";
				}
				return data;
			}
			var bindMouseEvents = function( event, data, divOffset ){
				if(event.type == "mousedown"){
					_offset = [
						data.cursorAt && data.cursorAt.left || event.clientX - divOffset.left,
						data.cursorAt && data.cursorAt.top || event.clientY - divOffset.top
					];
					document.addEventListener('mousemove',mouseMoveEvent);
					document.addEventListener('mouseup',mouseUpEvent);
					manageSortable.mousedownTriggered = true;
					if(getOS() === "Windows"){	//Added check to restrict initial triggering of mousemove in windows as soon as the event is added
						manageSortable.mouseMoveTriggered = true;
					}
				}
				else if(event.type == "touchstart"){
					_offset = [
						data.cursorAt && data.cursorAt.left || event.touches[0].clientX - divOffset.left,
						data.cursorAt && data.cursorAt.top || event.touches[0].clientY - divOffset.top
					];

					//Binding eventlistener for touch
					document.addEventListener('touchmove',data._parentElem.__mouseMoveEvent, {capture : true, passive : false});
					document.addEventListener('touchend',data._parentElem.__mouseUpEvent, true);
				}
			}
			var isSortable = function( _sortableElem, target ){
				return _sortableElem && checkForSortable(_sortableElem._sortableChildData || _sortableElem.parentElement._sortableParentData, target) && checkForItems(_sortableElem._sortableChildData || _sortableElem.parentElement._sortableParentData, target);
			}
			function findNextSortElem(sortableElems,data,count,event){
				var currentEle = sortableElems[data.focusIndex];
				var prevfocusIndex = data.focusIndex;
				data.focusIndex += count;
				var SortableElem = sortableElems[data.focusIndex];
				while(SortableElem && !isNotRestricted(data,SortableElem) && data.focusIndex >= 0){
					SortableElem = sortableElems[data.focusIndex + count];
					data.focusIndex += count;
				}
				if(SortableElem && SortableElem !== currentEle ){
					if(count > 0){
						window._lyteUiUtils.insertAfter(SortableElem,currentEle);
					}else{
						window._lyteUiUtils.insertBefore(SortableElem,currentEle);
					}
					data._div = currentEle;
					data._fromIndex = prevfocusIndex;
					data._toIndex = data.focusIndex;
					data._returnElemBelow = SortableElem;
					data._source = data._div.parentElement;
					currentEle.focus();
				}else{
					data.focusIndex = prevfocusIndex;
				}
				return data;
			}
			function findNextFocusElem(sortableElems,data,count){
				sortableElems[data.focusIndex].tabIndex = -1;
				data.focusIndex += count;
				if(data.focusIndex < 0 ){
					data.focusIndex = sortableElems.length - 1;
				}
				if(data.focusIndex >= sortableElems.length ){
					data.focusIndex = 0;
				}
				sortableElems[data.focusIndex].tabIndex = 0;
				sortableElems[data.focusIndex].focus();
				return data;
			}
			function keyDownEvent( event ){
				var sortableClass = data.sortableElemClass;
				var targetElem = event.target;
				var sortableElems = data._parentElem.children;
				var isMetaPressed = getOS() == 'Mac OS' ? event.metaKey : event.ctrlKey;
				if(event.keyCode == 13 && targetElem.classList.contains('sortable-parent')){
					sortableElems[0].focus();
					data.focusIndex = 0;
					sortableElems[0].tabIndex = 0;
				}
				if(isMetaPressed && data._div){
					data._parentElem.__keydownEvent = function(event){
						document.removeEventListener('keyup',data._parentElem.__keydownEvent);
						let isMetaPressed = getOS() == 'Mac OS' ? event.metaKey : event.ctrlKey;
						if( !isMetaPressed && data._div){
							if(data.onDrop){
								onDrop(data,event)
							}
							data._div = null;
							data._fromIndex = null;
							data._toIndex = null;
						}
					}
					document.addEventListener('keyup',data._parentElem.__keydownEvent)
				}

				if(event.keyCode == 27){
					var closest_sortableElem = targetElem.closest('.'+sortableClass);
					var restrict = data.restrict;
					
					if(!closest_sortableElem && restrict.length){
						for(var index = 0; index < restrict.length; index++){
							closest_sortableElem = targetElem.closest(restrict[index]);
							if(closest_sortableElem){
								break;
							}
						}
					}
					if(closest_sortableElem){
						var prevIndex = sortableElems[data.focusIndex];
						if(prevIndex){
							sortableElems[0].tabIndex = -1;
						}
						var foucs_Index = Array.from(sortableElems).findIndex(function(elem){
							return elem == closest_sortableElem;
						});
						data.focusIndex = foucs_Index;
						closest_sortableElem.focus();
					}
				}
				var isNotRestrictElem = isNotRestricted(data,targetElem);
				if( (targetElem.classList.contains(sortableClass) || !isNotRestrictElem) ){
					if( (event.keyCode == 40 || event.keyCode == 39) ){
						if( isMetaPressed && isNotRestrictElem){
							data = findNextSortElem(sortableElems,data,1,event);
						}else{
							data = findNextFocusElem(sortableElems,data,1,event);
						}
						event.preventDefault();
					}else if( (event.keyCode == 38 ||  event.keyCode == 37)  ){
						if( isMetaPressed  && isNotRestrictElem){
							data = findNextSortElem(sortableElems,data,-1,event);					
						}else{	
							data = findNextFocusElem(sortableElems,data,-1,event);
						}
						event.preventDefault();
					}
					
				}
				
			}
		function mouseDownEvent( event ){
				//Disable right click on the sortable elements to avoid unwanted behaviour
				if(event.which == 3){
					return;
				}
				_initClientX = event.clientX
				_initClientY = event.clientY

				if(manageSortable.mousedownTriggered){
					manageSortable.mousedownTriggered = false;
					return;
				}
				var target = event.target;
				_sortableElem = getSortableElem(target);
				if( isSortable( _sortableElem, target ) ){
					manageSortable.draggedEle = _sortableElem;
					var data = _sortableElem._sortableChildData || _sortableElem.parentElement._sortableParentData;
					if(data.preventDefault.mousedown == undefined || data.preventDefault.mousedown){
						event.preventDefault();
					}
					if(_sortableElem.parentElement && !_sortableElem.classList.contains(_sortableElem.parentElement._sortableParentData.sortableElemClass)){
						_sortableElem.classList.add(_sortableElem.parentElement._sortableParentData.sortableElemClass)
					}
					if(typeof data.helper == "function"){
						data = createHelper(data);
					}
					_placeholder = getClone(manageSortable.draggedEle, data.clone);
					if (data.updateOnDrop) {
						if (data.orientation === "horizontal") {
							var sampleItem = _sortableElem;
							var sampleHeight = sampleItem.offsetHeight;

							var dropLine = document.createElement('div');
							dropLine.className = 'lyteSortableDropLine';
							dropLine.style.height = sampleHeight + 'px';

							// Create the <i> tag instead of pinHead and pinLine
							var icon = document.createElement('i');
							icon.className = 'lytePinIcon'; // Replace with appropriate class (e.g., for Font Awesome or your style)

							// Append the <i> tag to the dropLine
							dropLine.appendChild(icon);
						}
						else {
							var sampleItem = _sortableElem;
							var sampleWidth = sampleItem.offsetWidth;

							var dropLine = document.createElement('div');
							dropLine.className = 'lyteSortableDropLineVertical';
							dropLine.style.width = sampleWidth + 'px';

							// Create the <i> tag for the pin/indicator
							var icon = document.createElement('i');
							icon.className = 'lytePinIconVertical'; // You can define a different class if needed

							// Append the icon to the dropLine
							dropLine.appendChild(icon);

						}

						data._dropLine = dropLine;
					}
					data._div = _div = manageSortable.draggedEle;
					var returnVal = true;
					data._source = getSource(data);
					data._fromIndex = getFromIndex(data);
					//Callback fired
					if (data.onSelect) {
						returnVal = onSelect(data, event);
						data._oldInlineCss = _div.style.cssText;
					}
					if(returnVal){
						if(data.selectedClass){
							_sortableElem.classList.add(data.selectedClass);
						}
						
						_div.classList.add("sortable-element-selected");
						var sortableElemCS = window.getComputedStyle(_div/*_sortableElem*/);
						var divOffset = isHelper(_div) ? _div._origin.getBoundingClientRect() : _div.getBoundingClientRect();
						if(data.scrollDivX && window.getComputedStyle(data.scrollDivX).position == "relative"){
							data._isRelative = true;
						}
						else{
							data._isRelative = false;
						}

						if(sortableElemCS.marginTop){
							_marginTop = sortableElemCS.marginTop;
						}
						if(sortableElemCS.marginLeft){
							_marginLeft = sortableElemCS.marginLeft;
						}
						//Binding mousedown and mouseup event
						bindMouseEvents(event,data,divOffset);

						//Binding the values to the draggable element
						data._isDown = true;
						data._placeholder = _placeholder;
						data._offset = _offset;
						data._marginTop = _marginTop;
						data._marginLeft = _marginLeft;
						data._event = event;
						data._placedPlaceholder = false;

						if(!manageSortable.draggedEle._sortableChildData){
							manageSortable.draggedEle._sortableChildData = data;
						}
						_placeholder = null;
						_div = null;
						_sortableElem = null;
					}
					else{
						if(!data.cancelRemove){
							if(data.helper){
								manageSortable.draggedEle.remove();
							}
							manageSortable.draggedEle = null;
							_sortableElem = null;
						}
					}
				}
				else{
					_sortableElem = null;
				}
			}
			var isRelative = function( scrollDiv, _div ){
				return scrollDiv && (window.getComputedStyle(scrollDiv).position == "relative" || window.getComputedStyle(scrollDiv).position == "fixed" || window.getComputedStyle(scrollDiv).position == "absolute") && (!isHelper(_div) || (isHelper(_div) && scrollDiv.contains(_div)));
			}
			var createPlaceholder = function(  _placeholder, _div, width, height, data ){
				$L(_placeholder).attr('id','dummy');
				_placeholder.style.width = width + "px";
				_placeholder.style.height = height + "px";
				_div.classList.add('lyteSortableElem');
				_placeholder.style.padding = "0px";
				_placeholder.classList.add(data.placeholder);
				if (!data.updateOnDrop) {
					window._lyteUiUtils.insertBefore(isHelper(_div) ? _div._origin : _div, _placeholder);
				}
				_placeholder._origin = isHelper(_div) ? _div._origin.parentElement : _div.parentElement;
			}
			var isElementTopinBetween = function( topVal, parentOffset, data, divOffset, _scrollTop ){
				return topVal + parentOffset.top >= (data.containmentDimensions.top + _scrollTop) && topVal+parentOffset.top <= (data.containmentDimensions.top + (data.containmentDimensions.height - divOffset.height) + _scrollTop);
			}
			var verticalContainment =  function( topVal, parentOffset, data, divOffset, _scrollTop, _div, limit ){
				if( isElementTopinBetween( topVal, parentOffset, data, divOffset, _scrollTop ) ){
					_div.style.top = topVal + 'px';
				}else{
					var offset = { "top" : topVal + parentOffset.top  , "bottom" : topVal + parentOffset.top };
					
					if( !checkElemContainment(limit, offset, 'top', data.containment ) ){
						_div.style.top = (limit.top - parentOffset.top - _scrollTop) + 'px';
					}
					else if( !checkElemContainment(limit,offset,'bottom',data.containment) ){
						_div.style.top = (limit.bottom - parentOffset.top ) + 'px';
					}
				}
			}
			var horizontalContainment = function( leftVal, parentOffset, data, divOffset, scrollLeftValue, _div, limit ){
				if( ( leftVal + parentOffset.left ) >= data.containmentDimensions.left && ( leftVal + parentOffset.left ) <= (data.containmentDimensions.left + (data.containmentDimensions.width - divOffset.width) + scrollLeftValue)){
					_div.style.left = leftVal + 'px';
				}
				else{

					if( ( leftVal + parentOffset.left ) < limit.left) {
						_div.style.left = (limit.left - parentOffset.left) + 'px';
					}
					else if( ( leftVal + parentOffset.left ) > limit.right) {
						_div.style.left = (limit.right - parentOffset.left) + 'px';
					}
				}
			}
			var mouseMoveEvent = function(event){

				if(getOS() === "Windows" && manageSortable.mouseMoveTriggered){	
					//Added check to restrict initial triggering of mousemove in windows as soon as the event is added
					manageSortable.mouseMoveTriggered = false;
					return;
				}

				if(event.type == "touchmove"){
					event.preventDefault();
				}
				if(_animationFrameFired1 && _requestId1){
					cancelAnimationFrame(_requestId1);
					_animationFrameFired1 = false;
					_requestId1 = null;
				}
				if(_animationFrameFired2 && _requestId2){
					cancelAnimationFrame(_requestId2);
					_animationFrameFired2 = false;
					_requestId2 = null;
				}

				if(manageSortable.draggedEle && manageSortable.draggedEle.classList.contains("sortable-element-selected") && manageSortable.draggedEle._sortableChildData._isDown){
					_sortableElem = manageSortable.draggedEle;
				}
				else{
					_sortableElem = null;
					return;
				}
				if(_sortableElem){
					var data = _sortableElem._sortableChildData;
					
					if(((Math.abs(_initClientX - event.clientX)) <= data.threshold) && ((Math.abs(_initClientY - event.clientY)) <= data.threshold)){
						return
					}

					if(data && data._isDown){
						if(data.preventDefault.mousemove == undefined || data.preventDefault.mousemove){
							event.preventDefault();
						}
						if(data.selectedClass){
							$L('.'+data.selectedClass,data._parentElem).removeClass(data.selectedClass)
						}
						if(typeof document.body.style.MozUserSelect!="undefined"){
							document.body.style.MozUserSelect = "none";
						}
						_div = data._div;
						_placeholder = data._placeholder;
						_offset = data._offset;
						_marginTop = data._marginTop;
						_marginLeft = data._marginLeft;
						_sortableElemClass = data.sortableElemClass;
						var divOffset = _sortableElem.getBoundingClientRect();
						var scrollLeftValue = 0;
						//Find scroll div
						var scrollDiv;
						
						if(data.scrollDivY){
							scrollDiv = data.scrollDivY;
						}
						else if(!data.preventScrollY){
							scrollDiv = data.orientation != "horizontal" && findScrollDiv(data._placedPlaceholder ? _placeholder : _div);
						}
						if(scrollDiv && (!_prevScrollDiv || (_prevScrollDiv && _prevScrollDiv != scrollDiv))){
							_maxScrollHeight = scrollDiv.scrollHeight - scrollDiv.offsetHeight;
							_prevScrollDiv = scrollDiv;
						}

						//Find scrollDiv is relative or contains any relative parent and store scrollTop
						var isRelativeY = false;
						if(isRelative( scrollDiv,_div)){
							isRelativeY = true;
							_scrollTop = scrollDiv.scrollTop;
						}
						else{
							_scrollTop = 0;
						}

						if(!data._placedPlaceholder){
							if(data.scrollDivX){
								_maxScrollWidth = data.scrollDivX.scrollWidth - data.scrollDivX.clientWidth;
							}
							else{
								_maxScrollWidth = 0;
							}
							data._maxScrollWidth = _maxScrollWidth;
							//onDragStart
							if(data.onDragStart){
								onDragStart(data, event);
							}
							divOffset = isHelper(_sortableElem) ? _sortableElem._origin.getBoundingClientRect() : _sortableElem.getBoundingClientRect();

							//set containment properties
							if(data.containment) {
								data.containmentDimensions = setContainment(data,_sortableElem,data.containmentBoundaries);
							}else {
								data.containmentDimensions = null;
							}

							var width = divOffset.width;
							var height = divOffset.height;
							var cellSpacing = 0;
							var parent = _sortableElem.offsetParent;

							if(data._isRelative && data.scrollDivX.contains(_div)){
								scrollLeftValue = data.scrollDivX.scrollLeft;
							}
							if(!window._lyteUiUtils.isNegativeScroll() && window._lyteUiUtils.getRTL() && detectBrowser() == "chrome" && data._isRelative && data.scrollDivX.contains(_div)){
								scrollLeftValue = data.scrollDivX.scrollLeft - data._maxScrollWidth;
							}
							if(parent.tagName.toLowerCase() == "table"){
								cellSpacing = parent.cellSpacing;
								if(cellSpacing == ""){
									cellSpacing = 2;
								}
							}

							while((parent.tagName.toLowerCase() == "table" || parent.tagName.toLowerCase() == "lyte-table-structure") && parent.style.position == ""){
								parent = parent.offsetParent;
							}
							var relativeParent = getRelativeParent(_div);

							if(relativeParent && parent != relativeParent){
								parent = relativeParent;
							}
							if(!height){
								height = _sortableElem.getBoundingClientRect().height;
							}
							var parentOffset = parent.getBoundingClientRect();

							if(!data.cancelRemove){
								_div.style.top = divOffset.top - (parentOffset.top + parseInt(cellSpacing) + parseInt(_marginTop)) + _scrollTop + 'px';
							}
							_div.style.left = divOffset.left - (parentOffset.left + parseInt(_marginLeft)) + scrollLeftValue + 'px';
							_div.style.boxSizing = "border-box";
							_div.style.zIndex = 3001;
							_div.style.width = width + "px";
							_div.style.height = height + "px";
							if(isHelper(_div)){
								_div.style.visibility = "";
							}

							if(_sortableElem.tagName.toLowerCase() == "tr" || _sortableElem.tagName.toLowerCase() == "lyte-tr"){
								fixWidth(_sortableElem);
							}
							
							//Create placeholder and append it to the DOM
							createPlaceholder( _placeholder, _div, width, height, data );
							callPlaceholder(data, _div.parentElement);

							//Insert the placeholder in the DOM and make the selected element's position absolute                             
							_div.style.position = "absolute";
							_div.classList.add('lyteSortableDisablePE');
							data._placedPlaceholder = true;
							data._div = _div;
							data._placeholder = _placeholder;
							if (data.updateOnDrop) {
								_lyteUiUtils.insertBefore(isHelper(_div) ? _div._origin : _div, data._dropLine);
								positionDropLine(data, "after");
							}
							data._prevTop = event.clientY ;
							data._prevLeft = event.clientX ;
							if(data.onDrag){
								onDrag(data,event);
							}
							manageSortable.isOver(event,data);
							data._isMoved = true;
							return;
						}
						var measure1 = $L.fastdom.measure(function(){
							manageSortable.measureQueue.shift();
							if(!_sortableElem){
								return;
							}
							if(data.containment){
								data.containmentDimensions = setContainment(data,_sortableElem,data.containmentBoundaries);
							}

							if(event.type == "mousemove"){
								_mousePosition = {
									x : event.clientX,
									y : event.clientY
								};
							}
							else if(event.type == "touchmove"){
								_mousePosition = {
									x : event.touches[0].clientX,
									y : event.touches[0].clientY
								};
							}

							var parent = _div.offsetParent;
							var relativeParent = getRelativeParent(_div);
							if(relativeParent && parent != relativeParent){
								parent = relativeParent;
							}

							var parentOffset = parent.getBoundingClientRect();
							var leftVal;
							var topVal;
							if(data._isRelative && data.scrollDivX.contains(_div)){
								scrollLeftValue = data.scrollDivX.scrollLeft;
							}
							if(!window._lyteUiUtils.isNegativeScroll() && window._lyteUiUtils.getRTL() && detectBrowser() == "chrome" && data._isRelative && data.scrollDivX.contains(_div)){
								scrollLeftValue = data.scrollDivX.scrollLeft - data._maxScrollWidth;
							}
							divOffset = _div.getBoundingClientRect();
							var scrollDivOffset = scrollDiv ? scrollDiv.getBoundingClientRect() : 0,
							droppableOffset,droppablePlace;

							//Animation Frame fired for vertical scrolling
							if(scrollDiv && (divOffset.left <= scrollDivOffset.right) && (divOffset.right >= scrollDivOffset.left)){
								_requestId1 = requestAnimationFrame(callForScrollY.bind(this,data,scrollDiv,scrollDivOffset,_maxScrollHeight,null,isRelativeY,_mousePosition,_offset,parentOffset));
								_animationFrameFired1 = true;
							}

							//Animation Frame fired for horizontal scrolling
							if(data.scrollDivX){
								scrollDivOffset = data.scrollDivX.getBoundingClientRect();
								if(divOffset.left <= scrollDivOffset.left || divOffset.right >= (scrollDivOffset.right - 3)){
									var hasRelativeParent = data.scrollDivX.contains(data._div.offsetParent)
									_requestId2 = requestAnimationFrame(callForScrollX.bind(this,data,scrollDivOffset,_mousePosition,_offset,parentOffset,data._isRelative,hasRelativeParent));
									_animationFrameFired2 = true;
								}
							}

							var mutate1 = $L.fastdom.mutate(function(){
								manageSortable.mutateQueue.shift();
								if(!_sortableElem){
									return;
								}
								leftVal = _mousePosition.x - _offset[0] - parentOffset.left - parseInt(_marginLeft) + scrollLeftValue;
								topVal = _mousePosition.y - _offset[1] - parentOffset.top - parseInt(_marginTop) + _scrollTop;
								if(data.containment){
									var limit = {
											top : data.containmentDimensions.top + _scrollTop,
											bottom : (data.containmentDimensions.top + (data.containmentDimensions.height - divOffset.height) + _scrollTop),
											left : data.containmentDimensions.left,
											right : (data.containmentDimensions.left + (data.containmentDimensions.width - divOffset.width) + scrollLeftValue)
										};
									if(data.orientation == "vertical"){
										verticalContainment(topVal, parentOffset, data, divOffset, _scrollTop, _div, limit);
									}
									else{
										if (data.transitionEnabled) {
											_div.style.transition = 'left 0.1s ease';
											data._oldLeft = _div.getBoundingClientRect().left;
										}
										horizontalContainment(leftVal, parentOffset, data, divOffset, scrollLeftValue, _div, limit)
										verticalContainment(topVal, parentOffset, data, divOffset, _scrollTop, _div, limit);
									}
								}
								else{
									if(data.orientation == "vertical"){
										_div.style.top = topVal + 'px';
									}
									else if (data.orientation == 'horizontal') {
										if (data.transitionEnabled) {
											_div.style.transition = 'left 0.1s ease';
											data._oldLeft = _div.getBoundingClientRect().left;
										}
										_div.style.left = leftVal + 'px';
									}
									else {
										_div.style.left = leftVal + 'px';
										_div.style.top = topVal + 'px';
									}
								}

								divOffset = { left : parentOffset.left + (leftVal - scrollLeftValue), top : parentOffset.top + (topVal - _scrollTop), right : parentOffset.left + (leftVal - scrollLeftValue) + divOffset.width, bottom : parentOffset.top + (topVal - _scrollTop) + divOffset.height }; /*_div.getBoundingClientRect();*/

								if(data.onMultiSelectDrag){
									onMultiSelectDrag(data, event)
								}

								//Find the below element over which the sortable element is being dragged
								var measure2 = $L.fastdom.measure(function(){
									manageSortable.measureQueue.shift();
									if(!_sortableElem){
										return;
									}
									_elemBelow = document.elementFromPoint(_mousePosition.x,_mousePosition.y);
									if(data.multiSortable) {
										if(_elemBelow) {
											var sortableClasses = data.allSortableClass;
											for(var key in sortableClasses) {
												droppablePlace = $L(_elemBelow).closest('.'+key,sortableClasses[key])[0];
												if(droppablePlace) {
													break;
												}
											}
											if(!droppablePlace && $L(_elemBelow).hasClass('sortable-parent')){
												droppablePlace = _elemBelow;
											}
										}
										else {
											droppablePlace = null;
										}
									}
									else {
										droppablePlace = _elemBelow ? _elemBelow.closest('.'+_sortableElemClass) : null;
										if(_elemBelow && $L(_elemBelow).hasClass('sortable-parent')){
											droppablePlace = _elemBelow;
										}
										if(  droppablePlace && $L(droppablePlace).hasClass('sortable-parent') ){
											if(!droppablePlace._sortableParentData.droppable){
												droppablePlace = false;
											}												
										}else{
											if ( droppablePlace && droppablePlace.parentElement._sortableParentData && !droppablePlace.parentElement._sortableParentData.droppable){
												droppablePlace = false;
											}
										}
									}
									droppableOffset = droppablePlace ? droppablePlace.getBoundingClientRect() : {};
									if(!_elemBelow){
										return;
									}
									var mutate2 = $L.fastdom.mutate(function(){
										manageSortable.mutateQueue.shift();
										if(!_sortableElem){
											return;
										}
										AppendToDroppableParentCheck = function(){
											if($L(droppablePlace).hasClass('sortable-parent')){
												if(_placeholder.parentElement == droppablePlace){
													return data.droppable && droppablePlace.querySelectorAll('.'+_sortableElemClass).length === 0;
												}else{
													return data.droppable && data.connectedWith.indexOf(droppablePlace) !== -1;
												}
											} 
										}
										if(droppablePlace && AppendToDroppableParentCheck()){
											window._lyteUiUtils.appendChild(droppablePlace,_placeholder);
											callPlaceholder(data, _elemBelow, droppablePlace);
										}
										var clientX = event.clientX !== undefined ? event.clientX :  event.touches[0].clientX;
										var clientY = event.clientY  !== undefined ? event.clientY : event.touches[0].clientY;
										if(droppablePlace && checkDroppable(droppablePlace,_sortableElem.parentElement,_sortableElem,data.connectedWith,data.containmentDimensions,_mousePosition)){

											if($L(_elemBelow).hasClass('sortable-parent') && checkParentDroppable(_elemBelow,_sortableElem.parentElement,_sortableElem,data.connectedWith,data.containmentDimensions,_mousePosition) && checkForIntersect(_elemBelow,_mousePosition) && checkForBetween(_elemBelow,_mousePosition,_sortableElem/*,isRelativeY,scrollDiv*/)){
												window._lyteUiUtils.appendChild(_elemBelow,_placeholder);
												callPlaceholder(data, _elemBelow, droppablePlace);
											}
											else {
												if (data.tolerance == "pointer") {
													if (data.orientation === "horizontal") {
														if (clientX < data._prevLeft) {
															var oldPosition = droppableOffset.x;
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "before");
															} else {
																window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
																if (data.transitionEnabled) {
																	var droppablePlaceFinalRect = droppablePlace.getBoundingClientRect();
																	var deltaX = droppablePlaceFinalRect.x - oldPosition;
																	data._deltaX = deltaX;

																	if (deltaX !== 0) {
																		if (data._timeoutId) {
																			clearTimeout(data._timeoutId);
																			data._droppablePlace.style.transition = 'none';
																			data._droppablePlace.style.transform = 'translateX(0px)';
																			data._droppablePlace.offsetHeight;
																		}

																		data._droppablePlace = droppablePlace;
																		data._placeholder = _placeholder;

																		droppablePlace.style.transform = `translateX(-${data._deltaX}px)`;
																		droppablePlace.offsetHeight;
																		droppablePlace.style.transition = 'transform ease';
																		droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
																		droppablePlace.style.transform = `translateX(0px)`;
																		data._timeoutId = setTimeout(() => {
																			droppablePlace.style.transition = '';
																			droppablePlace = null;
																		}, data.transitionDuration);
																	}
																}
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														else if (clientX > data._prevLeft) {
															var oldPosition = droppableOffset.x;
															// Update the position of the placeholder instead of inserting it
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "after");
															} else {
																window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
																if (data.transitionEnabled) {
																	var droppablePlaceFinalRect = droppablePlace.getBoundingClientRect();
																	var deltaX = droppablePlaceFinalRect.x - oldPosition;
																	data._deltaX = deltaX;
																	if (deltaX !== 0) {
																		if (data._deltaX < 0) {
																			data._deltaX = -1 * data._deltaX;
																		}
																		if (data._timeoutId) {
																			clearTimeout(data._timeoutId);
																			data._droppablePlace.style.transition = 'none';
																			data._droppablePlace.style.transform = 'translateX(0px)';
																			data._droppablePlace.offsetHeight;
																		}

																		data._droppablePlace = droppablePlace;
																		data._placeholder = _placeholder;

																		droppablePlace.style.transform = `translateX(${data._deltaX}px)`;
																		droppablePlace.offsetHeight;
																		droppablePlace.style.transition = 'transform ease';
																		droppablePlace.style.transform = `translateX(0px)`;
																		droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
																		data._timeoutId = setTimeout(() => {
																			droppablePlace.style.transition = '';
																			droppablePlace = null;
																		}, data.transitionDuration);

																	}
																}
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														data._prevLeft = clientX;
													}
													else{
														if(((data.gridView && (clientX < data._prevLeft)) || (clientY < data._prevTop)) && (droppablePlace.previousElementSibling != _placeholder )){	
															// console.log("calling for droppable ele insertBefore => ",droppablePlace.textContent);
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "before");
															} else {
																window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														else if(((data.gridView && (clientX > data._prevLeft)) || (clientY > data._prevTop)) && (droppablePlace.nextElementSibling != _placeholder )){
															// console.log("calling for droppable ele insertAfter => ",droppablePlace.textContent);
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "after");
															} else {
																window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														data._prevTop = event.clientY;
													}
												}

												if (data.tolerance == "intersect") {
													data._newLeft = _div.getBoundingClientRect().left;
													if (data.orientation === "horizontal") {
														if (divOffset.left < (droppableOffset.left)) {
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "after");
															}
															else {
																if (data.transitionEnabled) {
																	if ((data._newLeft - data._oldLeft) < 0) {
																		var currentPosition = droppableOffset.x;
																		window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
																		var newPosition = droppablePlace.getBoundingClientRect().x;
																		// Calculate the difference in positions
																		var deltaX = newPosition - currentPosition;
																		data._deltaX = deltaX;

																		if (deltaX !== 0) {
																			if (data._timeoutId) {
																				clearTimeout(data._timeoutId);
																				data._droppablePlace.style.transition = 'none';
																				data._droppablePlace.style.transform = 'translateX(0px)';
																				data._droppablePlace.offsetHeight;
																			}

																			data._droppablePlace = droppablePlace;
																			data._placeholder = _placeholder;

																			droppablePlace.style.transform = `translateX(-${data._deltaX}px)`;
																			droppablePlace.offsetHeight;
																			droppablePlace.style.transition = 'transform ease';
																			droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
																			droppablePlace.style.transform = `translateX(0px)`;
																			data._timeoutId = setTimeout(() => {
																				droppablePlace.style.transition = '';
																				droppablePlace = null;
																			}, data.transitionDuration);
																		}

																	}
																	else {
																		window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
																	}
																} else {
																	window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
																}
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														else if (divOffset.right > (droppableOffset.right)) {
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "after");
															}
															else {
																if (data.transitionEnabled) {
																	if ((data._newLeft - data._oldLeft) > 0) {
																		var currentPosition = droppableOffset.x;
																		window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
																		var newPosition = droppablePlace.getBoundingClientRect().x;

																		// Calculate the difference in positions
																		var deltaX = newPosition - currentPosition;
																		data._deltaX = deltaX;
																		if (deltaX !== 0) {
																			if (data._deltaX < 0) {
																				data._deltaX = -1 * data._deltaX;
																			}
																			if (data._timeoutId) {
																				clearTimeout(data._timeoutId);
																				data._droppablePlace.style.transition = 'none';
																				data._droppablePlace.style.transform = 'translateX(0px)';
																				data._droppablePlace.offsetHeight;
																			}

																			data._droppablePlace = droppablePlace;
																			data._placeholder = _placeholder;

																			droppablePlace.style.transform = `translateX(${data._deltaX}px)`;
																			droppablePlace.offsetHeight;
																			droppablePlace.style.transition = 'transform ease';

																			droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
																			droppablePlace.style.transform = `translateX(0px)`;
																			data._timeoutId = setTimeout(() => {
																				droppablePlace.style.transition = '';
																				droppablePlace = null;
																			}, data.transitionDuration);
																		}
																	}
																	else {
																		window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
																	}
																}
																else {
																	window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
																}
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
													}
													else{
														if(((data.gridView && (divOffset.left < droppableOffset.left)) || (divOffset.top < droppableOffset.top)) && ( (droppablePlace.previousElementSibling != _placeholder) /*(_placeholder.nextElementSibling && _placeholder.nextElementSibling != droppablePlace) || (_placeholder.parentElement != droppablePlace.parentElement)*/)){
															// console.log("calling for droppable ele insertBefore => ",droppablePlace.textContent);
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "before");
															} else {
																window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
														else if(((data.gridView && (divOffset.right > droppableOffset.right)) || (divOffset.bottom > droppableOffset.bottom)) && ( (droppablePlace.nextElementSibling != _placeholder) /*(_placeholder.previousElementSibling && _placeholder.previousElementSibling != droppablePlace) || (_placeholder.parentElement != droppablePlace.parentElement)*/)){
															// console.log("calling for droppable ele insertAfter => ",droppablePlace.textContent);
															if (data.updateOnDrop) {
																data._droppablePlace = droppablePlace;
																positionDropLine(data, "after");
															} else {
																window._lyteUiUtils.insertAfter(droppablePlace,_placeholder);
															}
															callPlaceholder(data, _elemBelow, droppablePlace);
														}
													}
												}
												if(data.tolerance == 'halfIntersect'){
													var midpoint = droppableOffset.left+droppableOffset.width/2;
													if( midpoint > clientX ){
														if (data.updateOnDrop) {
															data._droppablePlace = droppablePlace;
															positionDropLine(data, "before");
														} else {
															window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
														}
														callPlaceholder(data, _elemBelow, droppablePlace);
													}else if ( midpoint < clientX ){
														if (data.updateOnDrop) {
															data._droppablePlace = droppablePlace;
															positionDropLine(data, "after");
														} else {
															window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
														}
														callPlaceholder(data, _elemBelow, droppablePlace);
													}
												}
											}
										}else{
											if(_elemBelow && !$L(_elemBelow).hasClass('sortable-parent') && !isNotRestricted(data,_elemBelow)){
												_elemBelow = _elemBelow.closest('.sortable-parent');
											}
											if(_elemBelow && ($L(_elemBelow).hasClass('sortable-parent')) && checkForIntersect(_elemBelow,_mousePosition) && checkParentDroppable(_elemBelow,_sortableElem.parentElement,_sortableElem,data.connectedWith,data.containmentDimensions,_mousePosition) && (!data.preventDropAtStart && !firstChildNotRestricted(data, _elemBelow) && iselemCanDropOnTop(data,_elemBelow,_sortableElem))){												
												window._lyteUiUtils.insertBefore(getChildren(data, _elemBelow)[0], _placeholder);
												callPlaceholder(data, _elemBelow, droppablePlace);
											}
											else if(_elemBelow && $L(_elemBelow).hasClass('sortable-parent') && checkParentDroppable(_elemBelow,_sortableElem.parentElement,_sortableElem,data.connectedWith,data.containmentDimensions,_mousePosition) && checkForIntersect(_elemBelow,_mousePosition) && checkForBetween(_elemBelow,_mousePosition,_sortableElem,isRelativeY,scrollDiv) && (!data.preventDropAtEnd || lastChildNotRestricted(data, _elemBelow))){
												window._lyteUiUtils.appendChild(_elemBelow,_placeholder);
												callPlaceholder(data, _elemBelow, droppablePlace);
											}
										} 
										data._belowElem = _elemBelow != null ? _elemBelow : data._belowElem;
										if(data.onDrag){
											onDrag(data,event);
										}
										manageSortable.isOver(event,data);
										data._isMoved = true;
										if(!data.transitionEnabled){
											droppablePlace = null;
										}
										_elemBelow = null;
									});
									manageSortable.mutateQueue.push(mutate2);
								});
								manageSortable.measureQueue.push(measure2);
							});
							manageSortable.mutateQueue.push(mutate1);
						});
						manageSortable.measureQueue.push(measure1);
					}
				}
			}
			
			var iselemCanDropOnTop =  function(data,_elemBelow,_sortableElem){
				var firstChild = getChildren(data, _elemBelow)[0];
				if(data.orientation == 'horizontal'){
					return ( firstChild && firstChild.getBoundingClientRect().left >= _sortableElem.getBoundingClientRect().left);
				}else if(data.orientation == 'vertical'){
					return ( firstChild && firstChild.getBoundingClientRect().top >= _sortableElem.getBoundingClientRect().top);
				}else{
					return firstChild && firstChild.getBoundingClientRect().top >= _sortableElem.getBoundingClientRect().top && firstChild.getBoundingClientRect().left >= _sortableElem.getBoundingClientRect().left;
				}
			}
			var mouseUpEvent = function(event){
				var target = event.target;
				if(_animationFrameFired1 && _requestId1){
					cancelAnimationFrame(_requestId1);
					_animationFrameFired1 = false;
					_requestId1 = null;
				}
				if(_animationFrameFired2 && _requestId2){
					cancelAnimationFrame(_requestId2);
					_animationFrameFired2 = false;
					_requestId2 = null;
				}
				if(manageSortable.measureQueue.length){
					while(manageSortable.measureQueue.length){
						$L.fastdom.clear(manageSortable.measureQueue.shift());
					}
				}
				if(manageSortable.mutateQueue.length){
					while(manageSortable.mutateQueue.length){
						$L.fastdom.clear(manageSortable.mutateQueue.shift());
					}
				}
				//UnBinding mousedown and mouseup event
				if(event.type == "mouseup"){
					document.removeEventListener('mousemove',mouseMoveEvent);
					document.removeEventListener('mouseup',mouseUpEvent);
				}
				if(event.type == "touchend"){
					document.removeEventListener('touchmove',mouseMoveEvent, {capture : true, passive : false});
					document.removeEventListener('touchend',mouseUpEvent, true);
				}

				if(manageSortable.prevSortable){
					manageSortable.prevSortable = false;
				}
				if(manageSortable.draggedEle && $L(manageSortable.draggedEle).hasClass("sortable-element-selected") && manageSortable.draggedEle._sortableChildData._isDown){
					_sortableElem = manageSortable.draggedEle;
					_sortableElem.classList.remove('lyteSortableDisablePE');
				}
				else{
					abnormalMC(event);
					_sortableElem = null;
					manageSortable.draggedEle = null;
					manageSortable.mousedownTriggered = false;
					return;
				}
				
				if(_sortableElem){
					var data = _sortableElem._sortableChildData;
					var prevParent = _sortableElem.parentElement;
					
					if(data._isDown){

						data._isDown = false;
						_div = data._div;
						_placeholder = document.querySelectorAll('#dummy').length == 1 ? document.querySelectorAll('#dummy')[0] : data._placeholder;
						var _placeholderParent = _placeholder.parentElement;

						if (data._isMoved) {
							if (data._droppablePlace && data.updateOnDrop) {
								var dropLineRect = data._dropLine.getBoundingClientRect();
								data._dropLine.remove();
								if (data.orientation === "horizontal") {
									var dropLineLeft = dropLineRect.left;
									var droppablePlace = data._droppablePlace;
									_placeholderParent = _placeholderParent ? _placeholderParent : droppablePlace.parentElement;

									var droppablePlaceLeft = droppablePlace.getBoundingClientRect().left;
									// var placeholderLeft = _placeholder.getBoundingClientRect().left;
									if (droppablePlaceLeft < dropLineLeft) {
										// if (droppablePlaceLeft > placeholderLeft) {
										// data._dropLine.remove();
										window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
										var droppablePlaceFinalRect = droppablePlace.getBoundingClientRect();
										if (data.transitionEnabled) {
											var deltaX = droppablePlaceFinalRect.x - droppablePlaceLeft;
											data._deltaX = deltaX;
											droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
											if (deltaX !== 0) {
												data._droppablePlace.style.transition = 'none';

												if (data._deltaX < 0) {
													data._deltaX = -1 * data._deltaX;
												}
												if (data._timeoutId) {
													clearTimeout(data._timeoutId);
													data._droppablePlace.style.transition = 'none';
													data._droppablePlace.style.transform = 'translateX(0px)';
													data._droppablePlace.offsetHeight;
												}

												data._droppablePlace = droppablePlace;
												data._placeholder = _placeholder;

												droppablePlace.style.transform = `translateX(${data._deltaX}px)`;
												droppablePlace.offsetHeight;
												droppablePlace.style.transition = 'transform ease';
												droppablePlace.style.transform = `translateX(0px)`;
												droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
												data._timeoutId = setTimeout(() => {
													droppablePlace.style.transition = '';
													droppablePlace = null;
												}, data.transitionDuration);

											}
										}
									}
									else if (droppablePlaceLeft === dropLineLeft) {
										window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
									}
									else {
										// data._dropLine.remove();
										window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
										if (data.transitionEnabled) {
											var droppablePlaceFinalRect = droppablePlace.getBoundingClientRect();
											var deltaX = droppablePlaceFinalRect.x - droppablePlaceLeft;
											data._deltaX = deltaX;
											if (deltaX !== 0) {
												droppablePlace.style.transform = `translateX(0px)`;
												droppablePlace.offsetHeight;
												if (data._timeoutId) {
													clearTimeout(data._timeoutId);
													data._droppablePlace.style.transition = 'none';
													data._droppablePlace.style.transform = 'translateX(0px)';
													data._droppablePlace.offsetHeight;
												}

												data._droppablePlace = droppablePlace;
												data._placeholder = _placeholder;

												droppablePlace.style.transform = `translateX(-${data._deltaX}px)`;
												droppablePlace.offsetHeight;
												droppablePlace.style.transition = 'transform ease';
												droppablePlace.style.transitionDuration = data.transitionDuration + 'ms';
												droppablePlace.style.transform = `translateX(0px)`;
												data._timeoutId = setTimeout(() => {
													droppablePlace.style.transition = '';
													droppablePlace = null;
												}, data.transitionDuration);
											}
										}
									}
								}
								else if (data.orientation === "vertical") {
									var dropLineTop = dropLineRect.top;
									var droppablePlace = data._droppablePlace;
									_placeholderParent = _placeholderParent ? _placeholderParent : droppablePlace.parentElement;

									var droppablePlaceTop = droppablePlace.getBoundingClientRect().top;
									// var placeholderTop = _placeholder.getBoundingClientRect().top;
									if (droppablePlaceTop < dropLineTop) {
										// if (droppablePlaceTop > placeholderTop) {
										// data._dropLine.remove();
										window._lyteUiUtils.insertAfter(droppablePlace, _placeholder);
									}
									else if (droppablePlaceTop === dropLineTop) {
										window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
									}
									else {
										// data._dropLine.remove();
										window._lyteUiUtils.insertBefore(droppablePlace, _placeholder);
									}
								}


							}
							data._isMoved = false;
							data._toIndex = checkDroppedItemPosition(data, _placeholder  ,Array.from(_placeholderParent.children).filter(function(ele){ return ele.tagName != "TEMPLATE" && !($L(ele).hasClass('sortable-element-selected')) }));
							var returnVal = true;

							//Callback fired
							if(data.onBeforeDrop){
								returnVal = onBeforeDrop(data,event,_placeholder,_placeholderParent);
							}

							if($L(_placeholder).hasClass(data.disabled)){
								callRevertBack(data);
								manageSortable.draggedEle = null;
								manageSortable.mousedownTriggered = false;
								return;
							}

							if(!returnVal){
								callRevertBack(data);
								if(isHelper(_div)){
									_div.remove();
								}
								if(_div.preventScrollX){
									delete _div.preventScrollX;
								}
								manageSortable.draggedEle = null;
								manageSortable.mousedownTriggered = false;
								return;
							}

							var sibling = (findPreviousElem(_placeholder) ? findPreviousElem(_placeholder) : findNextElem(_placeholder));
							var elementData = sibling && sibling._sortableChildData ? Object.assign({}, sibling._sortableChildData) : Object.assign({}, _placeholder.parentElement._sortableParentData);
							if((data._fromIndex == data._toIndex) && (data._parentElem == _placeholderParent)){
								_placeholder.remove();
							}
							else {
								if (!data.updateOnDrop) {
									window._lyteUiUtils.replaceWith(_placeholder, _div);
								}
							}
							
							removeStyle(_div);

							_placeholder = null;

							_div._sortableChildData = elementData;

							//Callback fired
							if(data.onDrop){
								onDrop(data,event);

							}
							if(isHelper(_div)){
								delete _div._origin;
							}
						}
						else{
							removeStyle(_div);
							if(isHelper(_div)){
								delete _div._origin;
								_div.remove();
							}
							if(_sortableElem.tagName.toLowerCase() == 'a'){
								window.location.href = _sortableElem.href;
							}
						}
						if(data._oldInlineCss){
							_div.style.cssText = data._oldInlineCss;
							data._oldInlineCss = null;
						}
						if(data.onAfterDrop){
							onAfterDrop(data,event);
						}
						data._div = null;
						data._placeholder = null;
						data._placedPlaceholder = false;
						data._returnElemBelow = null;
						data._belowElem = null;
						data._source = null;
						data._fromIndex = null;
					}
					if(data.selectedClass){
						$L('.'+data.selectedClass,data._parentElem).removeClass(data.selectedClass)
					}
					
					$L(_sortableElem).removeClass('sortable-element-selected');
					_offset = null;
					_isDown = null;
					_isMoved = null;
					_mousePosition = null;
					_elemBelow = null;
					_droppablePlace = null;
					_marginTop = null;
					_marginLeft = null;
					_sortableElemClass = null;
					_sortableElem = null;
					_placeholder = null;
					_div = null;
					_prevScrollDiv = null;
				}

				abnormalMC(event);

				manageSortable.draggedEle = null;
				manageSortable.mousedownTriggered = false;
			}

			var abnormalMC = function(event){
				//Check for abnormal mouse clicks
				var dummies = event.target.ownerDocument.querySelectorAll('.lyteSortablePlaceholder');
				for(var i = 0; i < dummies.length; i++){
					if(dummies[i]._callee){
						var elem = dummies[i]._callee;
						window._lyteUiUtils.replaceWith(dummies[i], elem);
						$L(elem).removeClass('sortable-element-selected');
						removeStyle(elem);
						if(isHelper(elem)){
							elem.remove();
						}
					}
					else{
						dummies[i].remove();
					}
				}
				var elements = event.target.ownerDocument.querySelectorAll('.sortable-element-selected');
				for(var i =0; i<elements.length; i++){
					$L(elements[i]).removeClass('sortable-element-selected');
					removeStyle(elements[i]);
					if(isHelper(elements[i])){
						elements[i].remove();
					}
				}
			};
			element.changeScrollBoundaries = function(scrollBoundaries){
				if(scrollBoundaries){
					scrollBoundaries.top = scrollBoundaries.top !== undefined ? scrollBoundaries.top : element._sortableParentData.scrollBoundaries.top;
					scrollBoundaries.bottom = scrollBoundaries.bottom  !== undefined? scrollBoundaries.bottom : element._sortableParentData.scrollBoundaries.bottom;
					scrollBoundaries.left = scrollBoundaries.left !== undefined ? scrollBoundaries.left : element._sortableParentData.scrollBoundaries.left;
					scrollBoundaries.right = scrollBoundaries.right !== undefined ? scrollBoundaries.right : element._sortableParentData.scrollBoundaries.right;
				}
				var drag_element = element.querySelector('.sortable-element-selected');
				if(drag_element){
					drag_element._sortableChildData.scrollBoundaries = scrollBoundaries; 
				}
				element._sortableParentData.scrollBoundaries = scrollBoundaries;
			}

			element.addToSortable = function(elem){
				elem._sortableChildData = element._sortableParentData;
				$L(elem).addClass("sortable-element "+element._sortableParentData.sortableElemClass);
			};

			element.getSortableClass = function(){
				return element._sortableParentData.sortableElemClass;
			};
			element.getConnectedWithArray = function(){
				return element._sortableParentData.connectedWith;
			};

			element.removeFromSortable = function(elem){
				delete elem._sortableChildData;
				$L(elem).removeClass("sortable-element "+element._sortableParentData.sortableElemClass);
			};
			element.removeFromConnectedWith = function(elemArray){
				var connectedWith = element._sortableParentData.connectedWith ? element._sortableParentData.connectedWith : [];
				elemArray.forEach(function(elem){
					var indexOf = connectedWith.indexOf(elem);
					if(!!~indexOf){
						elemArray.splice( indexOf, 1, elem );
					}
				})
			}
			element.addToConnectedWith = function(elem,elem_data){

				var connectedWith = element._sortableParentData.connectedWith ? element._sortableParentData.connectedWith : [];
				if(elem.length !== undefined){
					for(var elem_index = 0; elem_index < elem.length && connectedWith.indexOf(elem[elem_index]) === -1; elem_index++){
						connectedWith.push(elem[elem_index]);
					}
				}else{
					connectedWith.push(elem);
				}
				var index = connectedWith.indexOf(element);
				connectedWith.splice(index,1);
				connectedWith.push(element);
				element._sortableParentData.connectedWith = connectedWith;
				var drag_element = element.querySelector('.sortable-element-selected');
				var diff = 0;
				if( drag_element ){
					var scrollDivX = element._sortableParentData.scrollDivX;
					var child =  scrollDivX.children;
					diff=  drag_element.getBoundingClientRect().right - child[child.length - 1].getBoundingClientRect().right;
					diff = diff > 0 ? diff : 0;
					if(element._sortableParentData && scrollDivX){
						_maxScrollWidth = scrollDivX.scrollWidth - scrollDivX.clientWidth;
					}else{
						_maxScrollWidth = 0;
					}
					drag_element._sortableChildData.connectedWith = connectedWith;
					drag_element._sortableChildData._maxScrollWidth = _maxScrollWidth - diff;
					drag_element.parentElement._sortableParentData._maxScrollWidth = _maxScrollWidth - diff;
					element._sortableParentData._maxScrollWidth = _maxScrollWidth - diff;
				}

				var not_sortable = $L(elem).not('.sortable-parent');

				if(not_sortable.length){
					elem_data = elem_data ? elem_data : {};
					if(elem_data.isSameClass){
						elem_data.connectedWith = connectedWith;
						elem_data.connected = true;
					}
					elem_data.restrict = elem_data.restrict ? elem_data.restrict : data.restrict;
					elem_data.sortableElemClass = data.sortableElemClass;
					elem_data._parentElem = $L(elem)[0];

					$L(not_sortable).sortable(Object.assign({},elem_data));
				}
			};
			element.addScrollDivXY = function(scrollDivX,scrollDivY){
				var scrollDivX = scrollDivX ? (typeof scrollDivX == "string" ? document.querySelector(scrollDivX) : scrollDivX) : undefined;
				var scrollDivY = scrollDivY ? (typeof scrollDivY == "string" ? document.querySelector(scrollDivY) : scrollDivY) : undefined;
				if( scrollDivY && scrollDivY !== data.scrollDivY){
					data.scrollDivY = scrollDivY;
					element._sortableParentData.scrollDivY = data.scrollDivY;
				}
				if(scrollDivX && scrollDivX !== data.scrollDivX){
					data.scrollDivX = scrollDivX; 
					element._sortableParentData.scrollDivX = data.scrollDivX;
				}	
			}

			var callPlaceholder = function(data, _elemBelow, droppablePlace){
				if(!data.onPlaceholder || checkValidDroppable(data,_elemBelow || droppablePlace.parentElement)){
					if(_placeholder.classList.contains(data.disabled)){
						_placeholder.classList.remove(data.disabled);
					}
					_placeholder.classList.add(data.placeholder);
				}
				else{
					if(_placeholder.classList.contains(data.placeholder)){
						_placeholder.classList.remove(data.placeholder);
					}
					_placeholder.classList.add(data.disabled);
				}


				//Callback fired
				data._returnElemBelow = droppablePlace || _elemBelow;
			};

			var callForScrollX = function(data,parentOffset,_mousePosition,_offset,parent,isRelative,hasRelativeParent){
				if(!data._div ){
					return;
				}
				// console.log("Scroll X getting called");

				var divOffset = data._div.getBoundingClientRect();
				var width = data.scrollDivX  !== document.documentElement ? data.scrollDivX.offsetWidth : data.scrollDivX.clientWidth;

				_scrollLeft = data.scrollDivX.scrollLeft ;
				_maxScrollWidth =  data.scrollDivX.scrollWidth - width;
				if( !_lyteUiUtils.getRTL() || (!_lyteUiUtils.isNegativeScroll() && _lyteUiUtils.getRTL() && detectBrowser() == "chrome" && !isRelative)){
					if((divOffset.right >= parentOffset.right + data.scrollBoundaries.right) && (_scrollLeft < _maxScrollWidth)){

						if((_maxScrollWidth - _scrollLeft ) >= 5 ){
								data.scrollDivX.scrollLeft += 5;

							if(isRelative && data.scrollDivX.contains(data._div) ){
								data._div.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + _scrollLeft + "px";
							}else if(hasRelativeParent){
								data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
							}

						}
						else{

							data.scrollDivX.scrollLeft += ( (_maxScrollWidth - _scrollLeft) % 5);
							if(isRelative && data.scrollDivX.contains(data._div) ){
								data._div.style.left = _mousePosition.x - _offset[0] - parent.left + ( (_maxScrollWidth - _scrollLeft) % 5) + _scrollLeft + "px";
							}else if(hasRelativeParent){
								data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
							}
						}
					}
					else if((divOffset.left <= parentOffset.left - data.scrollBoundaries.left) && (_scrollLeft > 0)){
						if(isRelative && data.scrollDivX.contains(data._div) ){
							data._div.style.left = _mousePosition.x - _offset[0] - parent.left - ((_maxScrollWidth - _scrollLeft) > 5 ? 5 : (5 - (_maxScrollWidth - _scrollLeft))) + _scrollLeft + "px";
						}else if(hasRelativeParent){
							data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
						}
						data.scrollDivX.scrollLeft -= 5;
					}
					else{
						cancelAnimationFrame(_requestId2);
						_animationFrameFired2 = false;
						_requestId2 = null;
						return;
					}
				}
				else{
					if(!_lyteUiUtils.isNegativeScroll() && detectBrowser() == "chrome" && isRelative){
						if((divOffset.right >= parentOffset.right + data.scrollBoundaries.right) && (_scrollLeft < _maxScrollWidth)){
							if((_maxScrollWidth - _scrollLeft) >= 5){
								data.scrollDivX.scrollLeft += 5;
								if(isRelative && data.scrollDivX.contains(data._div)){
									data._div.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + (_scrollLeft - _maxScrollWidth) + "px";
								}else if(hasRelativeParent){
									data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
								}
							}
							else{
								data.scrollDivX.scrollLeft += (5 - (_maxScrollWidth - _scrollLeft));
								if(isRelative && data.scrollDivX.contains(data._div)){
									data._div.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth - _scrollLeft)) + _scrollLeft + "px";
								}else if(hasRelativeParent){
									data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
								}
							}
						}
						else if((divOffset.left <= parentOffset.left - data.scrollBoundaries.left) && (_scrollLeft > 0)){
							if(isRelative && data.scrollDivX.contains(data._div)){
								data._div.style.left = _mousePosition.x - _offset[0] - parent.left - ((_maxScrollWidth - _scrollLeft) + 5) + "px";
							}else if(hasRelativeParent){
								data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
							}
							data.scrollDivX.scrollLeft -= 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}
					else if((_lyteUiUtils.isNegativeScroll() && detectBrowser() == "chrome") || detectBrowser() == "firefox" || detectBrowser() == "safari"){

						if((divOffset.right >= parentOffset.right + data.scrollBoundaries.right) && (_scrollLeft < 0)){
							if((_maxScrollWidth + _scrollLeft) >= 5){
								data.scrollDivX.scrollLeft += 5;
								if(isRelative && data.scrollDivX.contains(data._div)){
									data._div.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + _scrollLeft + "px";
								}else if(hasRelativeParent){
									data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
								}
							}
							else{
								data.scrollDivX.scrollLeft += (5 - (_maxScrollWidth + _scrollLeft));
								if(isRelative && data.scrollDivX.contains(data._div)){
									data._div.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth + _scrollLeft)) + _scrollLeft + "px";
								}else if(hasRelativeParent){
									data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
								}
							}
						}
						else if((divOffset.left <= parentOffset.left - data.scrollBoundaries.left) && (_scrollLeft > -(_maxScrollWidth))){
							if(isRelative && data.scrollDivX.contains(data._div)){
								data._div.style.left = _mousePosition.x - _offset[0] - parent.left + (_scrollLeft - 5) + "px";
							}else if(hasRelativeParent){
								data._div.style.left = _mousePosition.x - _offset[0] - data._div.offsetParent.getBoundingClientRect().left + 'px';
							}
							data.scrollDivX.scrollLeft -= 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}
					else if(detectBrowser() == "ie" || detectBrowser() == "edge"){
						if((divOffset.right >= parentOffset.right) && (_scrollLeft > 0)){
							if(_scrollLeft >= 5){
								data.scrollDivX.scrollLeft -= 5;
							}
							else{
								data.scrollDivX.scrollLeft -= _scrollLeft;
							}
						}
						else if((divOffset.left <= parentOffset.left - data.scrollBoundaries.left) && (_scrollLeft < _maxScrollWidth)){
							if(isRelative && data.scrollDivX.contains(data._div)){
								data._div.style.left = _mousePosition.x - _offset[0] - parent.left + (-_scrollLeft) - 5 + "px";
							}
							data.scrollDivX.scrollLeft += 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}

				}

				_requestId2 = requestAnimationFrame(callForScrollX.bind(this,data,parentOffset,_mousePosition,_offset,parent,isRelative));
			};

			var callForScrollY = function(data,scrollDiv,parentOffset,_maxScrollHeight,topNBottom,isRelativeY,_mousePosition,_offset,parent){
				if(!data._div){
					return;
				}
				if(data.containment){
					data.containmentDimensions = setContainment(data,data._div,data.containmentBoundaries);
				}else{
					data.containmentDimensions = null;
				}
				// var scrollTop = scrollDiv.scrollTop;
				var isWindow = scrollDiv  === document.documentElement ? true : false;
				var scrollDivTop = (isWindow ? 0 : scrollDiv.getBoundingClientRect().top) - data.scrollBoundaries.top;
				var height = scrollDiv  !== document.documentElement ? scrollDiv.offsetHeight : scrollDiv.clientHeight;
				if( height <=  $L(data._placeholder)[0].parentElement.offsetHeight && !isWindow){
					var lastchild = $L(data._placeholder)[0].parentElement.querySelectorAll("."+data.sortableElemClass);
					lastchild = lastchild[lastchild.length - 1];
					var nolastchild = false;
				}else{
					var nolastchild = true;

				}
				_maxScrollHeight = scrollDiv.scrollHeight - height;
				var divOffset = data._div.getBoundingClientRect();
				var scrollTop = scrollDiv.scrollTop;
				if(!data._div){
					return;
				}
				if( isElementReachedTop( data,divOffset,scrollDivTop) && (scrollTop > 0 ) && ( checkElemContainment(data.containmentDimensions,divOffset,'top')  || !isSortableInViewPort(data,scrollDiv,isWindow,height,'top') ) ){
					if(isRelativeY && scrollDiv.contains(data._div)){
						if(checkElemContainment(data.containmentDimensions,divOffset,'top',data.containment)){
							data._div.style.top = _mousePosition.y - _offset[1] - parent.top - (_maxScrollHeight - scrollTop >= data.scrollSpeed ? data.scrollSpeed : _maxScrollHeight - scrollTop) + scrollTop + "px";
						}else{
							data._div.style.top = data.containmentDimensions.top - parent.top - (_maxScrollHeight - scrollTop >= data.scrollSpeed ? data.scrollSpeed : _maxScrollHeight - scrollTop) + scrollTop + 'px';
						}
					}else if(scrollDiv === document.documentElement && checkElemContainment(data.containmentDimensions,divOffset,'top',data.containment) ){
						data._div.style.top = data._div.offsetTop - (_maxScrollHeight - scrollTop >= data.scrollSpeed ? data.scrollSpeed : _maxScrollHeight - scrollTop) + 'px';
					}
					scrollDiv.scrollTop -= data.scrollSpeed;
				}
				else if( isElementReachedBottom( data, divOffset, scrollDivTop, height ) && (scrollTop < _maxScrollHeight) &&  ( checkElemContainment(data.containmentDimensions,divOffset,'bottom',data.containment) || !isSortableInViewPort(data,scrollDiv,isWindow,height,'bottom') )  && ( nolastchild || isReachedLastELem( data, height, lastchild, scrollDivTop ) )){
					if(_maxScrollHeight - scrollTop > data.scrollSpeedCondition){
						if(isRelativeY && scrollDiv.contains(data._div)){
							if(checkElemContainment(data.containmentDimensions,divOffset,'bottom',data.containment)){
								data._div.style.top =  data._div.offsetTop  + data.scrollSpeed + "px";
							}else{
								data._div.style.top =  data.containmentDimensions.bottom - data._div.offsetHeight - parent.top + (_maxScrollHeight - scrollTop >= data.scrollSpeed ? data.scrollSpeed : _maxScrollHeight ) + scrollTop +'px';
							}
						}else if(scrollDiv === document.documentElement &&  checkElemContainment(data.containmentDimensions,divOffset,'bottom',data.containment) ){
							data._div.style.top = data._div.offsetTop  + data.scrollSpeed + 'px';
						}
						scrollDiv.scrollTop += data.scrollSpeed;
					}
					else{
						if(isRelativeY && scrollDiv.contains(data._div)){
							data._div.style.top = _mousePosition.y - _offset[1] - parent.top + _maxScrollHeight - scrollTop + scrollTop + "px";
						}else if(scrollDiv === document.documentElement){
							data._div.style.top = data._div.offsetTop  + _maxScrollHeight - scrollTop + 'px';
						}
						scrollDiv.scrollTop += (_maxScrollHeight - scrollTop);
					}
				}
				else{
					
					if(isWindow){
						if(( !isFirstOrLastELement(data, "first")) && ((data.containmentDimensions  && (data.containmentDimensions.top >= divOffset.top)) || (divOffset.top - parseInt(data._marginTop) <= scrollDivTop) &&  (scrollTop == 0) )){
							appendPlaceholderAt(data, "first");

						}else if(!isFirstOrLastELement(data, "last") && ((data.containmentDimensions  && (data.containmentDimensions.bottom <= divOffset.bottom)) || (scrollTop == _maxScrollHeight) && (divOffset.bottom >= (scrollDivTop + data.scrollBoundaries.top + height + data.scrollBoundaries.bottom - 3))) ){
							appendPlaceholderAt(data, "last");
							scrollDiv.scrollTop = _maxScrollHeight;
						}
					}else{
						if((scrollTop == 0) && (divOffset.top - parseInt(data._marginTop) <= scrollDivTop ) && !isFirstOrLastELement(data, "first")){
							appendPlaceholderAt(data, "first");
						}
						else if((scrollTop >= _maxScrollHeight) && (divOffset.bottom >= (scrollDivTop + data.scrollBoundaries.top + height + data.scrollBoundaries.bottom - 3)) && !isFirstOrLastELement(data, "last")){
							appendPlaceholderAt(data, "last");
							scrollDiv.scrollTop = _maxScrollHeight;

						}
					}

					// if(data.scrollEnd){
					// 	data.scrollEnd();
					// }
					cancelAnimationFrame(_requestId1);
					_animationFrameFired1 = false;
					_requestId1 = null;
					return;
				}
				_requestId1 = requestAnimationFrame(callForScrollY.bind(this,data,scrollDiv,parentOffset,_maxScrollHeight,topNBottom,isRelativeY,_mousePosition,_offset,parent));		
			};
			var isReachedLastELem = function(data,height,lastchild,scrollDivTop){
				return lastchild.getBoundingClientRect().bottom >= (scrollDivTop  + data.scrollBoundaries.top + data.scrollBoundaries.bottom + height)
			}
			var isElementReachedBottom = function(data,divOffset,scrollDivTop,height,side){
				return (divOffset.bottom >= (scrollDivTop + height + data.scrollBoundaries.top + data.scrollBoundaries.bottom - 3));
			}
			var isSortableInViewPort = function(data,scrollDiv,isWindow,height,side){
				if(data.containment){
					var top = (isWindow ? 0 : scrollDiv.getBoundingClientRect().top) - data.scrollBoundaries.top;
					var parentOffset = data._div.parentElement.getBoundingClientRect();
					if(side == 'top'){
						return parentOffset.top > top;
					}else{
						return parentOffset.bottom < (top + height + data.scrollBoundaries.top - data.scrollBoundaries.bottom);
					}
				}
			}
			var checkElemContainment = function( limit, divOffset, side, containment ){

				if(containment){
					if(side == 'top' ){
						return (limit.top <= divOffset.top);	
					}else if (side == 'bottom'){
						return (limit.bottom >= divOffset.bottom);
					}
				   
				}
				return true;
			}
			var isElementReachedTop = function(data,divOffset,scrollDivTop){
				return divOffset.top - parseInt(data._marginTop) <= scrollDivTop;
			}
			var isFirstOrLastELement = function(data, pos){
				var placeholder = data._placeholder,
					parent = placeholder.parentElement,
					children = getChildren(data,parent);
				if(pos === "first"){
					return children[0] == placeholder;
				}
				return children[children.length - 1] == placeholder;	//incase of last
			};

			var getChildren = function(data, parent){
				if(data && data.omitRestricted){
					return Array.from(parent.children).filter( function(ele) { return (ele.tagName != "TEMPLATE" && isNotRestricted(data,ele))} );
				}
				return Array.from(parent.children).filter( function(ele) { return ele.tagName != "TEMPLATE" } );
			};

			var appendPlaceholderAt = function(data, pos){
				var placeholder = data._placeholder,
					parent = placeholder.parentElement,
					children = getChildren(data,parent);
					parent = parent ? parent : placeholder._origin;
				if(data.gridView){
					return;
				}
				if(pos === "first"){
					for(var i = 0; i < children.length; i++){
						if(!data.preventDropAtStart || (isNotRestricted(data, children[i]) && !(children[i].classList.contains('sort-disabled-element')))){
							window._lyteUiUtils.insertBefore(children[i], placeholder);
							break;
						}
					}
				}
				else{
					for(var i = children.length - 1; i >= 0; i--){
						if(!data.preventDropAtEnd || (isNotRestricted(data, children[i]) && !(children[i].classList.contains('sort-disabled-element')))){
							window._lyteUiUtils.insertAfter(children[i], placeholder);
							break;
						}
					}
				}
			};

			var lastChildNotRestricted = function(data, parent){
				var children = getChildren(null, parent);
				return children.length ? isNotRestricted(data, children[children.length - 1]) : true;
			};
			var firstChildNotRestricted = function(data, parent){
				var children = getChildren(null, parent);
				return children.length ? isNotRestricted(data, children[0]) : true;
			}
			var checkForSortable = function(data,targetElem){
				if(!data.draggable){
					return false;
				}
				for(var i = 0; i<data.cancel.length ; i++){
					var elem = targetElem;
					while(elem.parentElement){
						if(elem.matches(data.cancel[i])){
							return false;
						}
						if($L(elem).hasClass('sortable-element')){
							break;
						}
						elem = elem.parentElement;
					}
				}
				return true;
			};
			var getFromIndex = function(data){
				var element = isHelper(data._div) ? data._div._origin : data._div;
				if(data.omitRestricted){
					var siblings = Array.from(data._source.children).filter( function(ele) { return ele.tagName != "TEMPLATE" } );
					for(var y = 0; y<siblings.length; y++){
                        if(!isNotRestricted(data,siblings[y])){
                            siblings.splice(y,1);
                            --y;
                        }
                    }
                    return siblings.indexOf(element);
				}
				else{
					return Array.from(data._source.children).filter( function(ele) { return ele.tagName != "TEMPLATE" } ).indexOf(element);
				}
			}

			var getSource = function(data){
				var current = isHelper(data._div) ? data._div._origin : data._div;
				var parentElem = data._parentElem;
				if(current.classList.contains('sortable-parent') && current.parentElement.classList.contains('sortable-parent')){
					parentElem = current.parentElement;
				}
				return parentElem;
			}

			/*---------------Callbacks Start--------------*/
			var onReady = function(data){
				data.onReady(data._parentElem);
			}

			var onSelect = function(data,event){
				data._div.preventScrollX = function(prevScroll){
					data._div._sortableChildData.preventScroll = prevScroll;
					data._parentElem._sortableParentData.preventScroll = prevScroll;
				}
				var returnVal = data.onSelect(data._div, data._fromIndex, data._source,event);
				if(returnVal == undefined || returnVal == true){
					return true;
				}else{
					delete data._div.preventScrollX;
					return false;
				}
				//return ( returnVal == undefined) ? true : returnVal;
			}

			var onDragStart = function(data, event){
				data.onDragStart(data._div,data._source, event,data._div._origin);
			}

			var onDrag = function(data,event){
				var placeholder = document.querySelectorAll('#dummy').length == 1 ? document.querySelectorAll('#dummy')[0] : data._placeholder;
				data.onDrag(data._div,data._returnElemBelow,event,placeholder,data._belowElem);
			}

			var onBeforeDrop = function(data,event,placeholder){
				// var placeholder = document.querySelectorAll('#dummy').length == 1 ? document.querySelectorAll('#dummy')[0] : data._placeholder;
				var returnVal = data.onBeforeDrop(data._div,data._returnElemBelow,placeholder,data._fromIndex, data._toIndex /*checkDroppedItemPosition(data, placeholder,Array.from(placeholder.parentElement.children).filter(function(ele){ return ele.tagName != "TEMPLATE" && !($L(ele).hasClass('sortable-element-selected')) }))*/, data._source, placeholder ? placeholder.parentElement : null,event);
				return (returnVal == undefined) ? true : returnVal;
			}

			var onDrop = function(data,event){
				data.onDrop(data._div, data._div._sortableChildData._parentElem, data._returnElemBelow, data._fromIndex, data._toIndex /*checkDroppedItemPosition(data, data._div,Array.from(data._div._sortableChildData._parentElem.children).filter(function(ele){ return ele.tagName != "TEMPLATE" }))*/, data._source, event,data._div._origin);
			}

			var onMultiSelectDrag = function(data, event){
				var placeholder = document.querySelectorAll('#dummy').length == 1 ? document.querySelectorAll('#dummy')[0] : data._placeholder;
				data.onMultiSelectDrag(data._div,event,placeholder,placeholder.parentElement);
			}
			/*---------------Callbacks End--------------*/

			var checkValidDroppable = function(data,destination){
				if(destination.id && destination.id == "dummy"){
					destination = destination.parentElement;
				}
				else{
					while(destination){
						if($L(destination).hasClass('sortable-parent')){
							break;
						}
						destination = destination.parentElement;
					}
				}
				var placeholder = document.querySelectorAll('#dummy').length == 1 ? document.querySelectorAll('#dummy')[0] : data._placeholder;
				var returnVal = data.onPlaceholder(data._div,placeholder, data._parentElem, placeholder ? placeholder.parentElement : null);
				return (returnVal == undefined) ? true : returnVal;
			}


			//Bind events to the child elements that will be sortable
			var childrens = /*data._parentElem.children*/ getChildren(data, data._parentElem);
			
			if(data.dblTouchEvent){
				var prevClick = 0;
				
				data._parentElem.__mouseDownEvent = function(event) {
					if(event.type == 'mousedown'){
							mouseDownEvent(event);
					}else{
						var date = new Date();
					  var time = date.getTime();
					  var touches = event.touches;
					  var curtouchY = event.touches[0].clientY;
					  const time_between_taps = 200; 

					  if(touches.length == 1){
					  		if(checkForSortable(data._parentElem._sortableParentData,event.target)){
								  $L(	event.target  ).one('touchend',function(event){
								  		event.preventDefault();	  		
							  	})
								}
						  if (time - prevClick < time_between_taps &&  touches.length == 1 ) {
						  	prevClick = 0;
						  	event.preventDefault();
						  	mouseDownEvent(event);
						  	
						  }
						}
					  prevClick = time;
					}
				}
			}else{
				data._parentElem.__mouseDownEvent = mouseDownEvent;
			}
			data._parentElem.__mouseMoveEvent = mouseMoveEvent;
			data._parentElem.__mouseUpEvent = mouseUpEvent;
			data._parentElem.__keydownEvent = keyDownEvent;
			data._parentElem._sortableParentData = data;
			for(var i = 0 ; i < childrens.length ; i++){
				childrens[i]._pos = i;
				if(data.aria){
					$L(childrens[i]).attr('tabIndex',-1);
				}
				if(/*childrens[i].tagName != "TEMPLATE" &&*/ isNotRestricted(data,childrens[i]) && !(childrens[i].classList.contains('sortable-element-selected'))){
					childrens[i]._sortableChildData = data;
					$L(childrens[i]).addClass("sortable-element "+data.sortableElemClass);
				}
			}
			if(data.draggable && !data._parentElem._mousedown){
				if(data.aria){
					data._parentElem.addEventListener("keydown",data._parentElem.__keydownEvent);
				}
				data._parentElem.addEventListener("mousedown",data._parentElem.__mouseDownEvent);
				data._parentElem.addEventListener("touchstart",data._parentElem.__mouseDownEvent, true);
				data._parentElem._mousedown = true;
			}
			

			//Check whether the arrays are connected or not and has connectedWith
			if(!data.connected && data.connectedWith.length > 0){

				data.connectedWith = manageSortable.convertToArrayOfItems(data.connectedWith,data.context);
				data.connectedWith.forEach(function(id){

					var connectedWith = data.connectedWith.concat(),
					index = connectedWith.indexOf(id);
					connectedWith.splice(index,1);
					connectedWith.push(id);
					// connectedWith.push(data._parentElem);

					if(data.multiSortable && _sortableData &&  _sortableData.connectedWith) {
						data.connectedWith = _sortableData.connectedWith;
					}
					else {
						$L(id).sortable({
							_parentElem : $L(id)[0],
							connectedWith : connectedWith,
							connected : true,
							// droppable : data.droppable,
							// draggable : data.draggable,
							// placeholder : data.placeholder,
							// disabled : data.disabled,
							// orientation : data.orientation,
							// cancel : data.cancel,
							// items : data.items,
							// cursorAt : data.cursorAt,
							restrict : data.restrict,
							// scrollDivX : data.scrollDivX,
							// omitRestricted : data.omitRestricted,
							sortableElemClass : data.sortableElemClass,
							dblTouchEvent : data.dblTouchEvent
							// clone : data.clone
						});
					}
				});
			}

			if(data.onReady && !data._parentElem.executedOnReady){
				onReady(data);
				data._parentElem.executedOnReady = true;
			}

			var setContainment = function(data,sortableElem,containerdimensions){
				
				if(data.containment == "parent"){
					var dimensions = isHelper(sortableElem) ? sortableElem._origin.parentElement.getBoundingClientRect() : sortableElem.parentElement.getBoundingClientRect();
					return ({left : dimensions.left - containerdimensions.left,
							right : dimensions.right + containerdimensions.right,
							top : dimensions.top - containerdimensions.top,
							bottom : dimensions.bottom + containerdimensions.bottom,
							height : dimensions.height  + containerdimensions.top + containerdimensions.bottom,
							width : dimensions.width + containerdimensions.left + containerdimensions.right,
							offsetLeft : isHelper(sortableElem) ? sortableElem._origin.parentElement.offsetLeft - containerdimensions.left : sortableElem.parentElement.offsetLeft - containerdimensions.left,
							offsetTop : isHelper(sortableElem) ? sortableElem._origin.parentElement.offsetTop - containerdimensions.top : sortableElem.parentElement.offsetTop - containerdimensions.top});
				}
				else{
					var containment = $L(data.containment).length == undefined ? null : $L(data.containment)[0];
					var dimensions = containment.getBoundingClientRect();
					return ({left : dimensions.left - containerdimensions.left,
							right : dimensions.right + containerdimensions.right,
							top : dimensions.top - containerdimensions.top,
							bottom : dimensions.bottom + containerdimensions.bottom,
							height : dimensions.height + containerdimensions.top + containerdimensions.bottom,
							width : dimensions.width + containerdimensions.left + containerdimensions.right ,
							offsetLeft : containment.offsetLeft - containerdimensions.left, 
							offsetTop : containment.offsetTop - containerdimensions.top});
				}
			};

			/*----------------------- UTILITY FUNCTIONS FOR SORTABLE ---------------------*/

			var findScrollDiv = function(elem){
				var parent = elem.parentElement;
				while(elem.parentElement){
					elem = elem.parentElement;
					if((parent.scrollHeight > elem.clientHeight) && ((window.getComputedStyle(elem).overflowY != "hidden" && window.getComputedStyle(elem).overflow != "visible") || elem.matches('.lyteScrollBar')) /*!(elem.style.overflow && elem.style.overflow == 'hidden')*/){
						return elem;
					}
				}
				return null;
			};

			var fixWidth = function(element){
				var childrens = element.children,
				width = []
				for(var i = 0; i<childrens.length; i++){
					if(childrens[i].tagName.toLowerCase() == "td" || childrens[i].tagName.toLowerCase() == "lyte-td"){
						childrens[i].__prevWidth = childrens[i].style.width;
						width[ i ] = childrens[i].__prevWidth || ( childrens[i].getBoundingClientRect().width + 'px' ) ;
					}
				}
				for(var i = 0; i<childrens.length; i++){
					if(childrens[i].tagName.toLowerCase() == "td" || childrens[i].tagName.toLowerCase() == "lyte-td"){
						childrens[i].style.width = width[ i ];
					}
				}
			};

			var removefixedWidth = function(element){
				var childrens = element.children;
				for(var i = 0; i<childrens.length; i++){
					if(childrens[i].tagName.toLowerCase() == "td" || childrens[i].tagName.toLowerCase() == "lyte-td"){
						childrens[i].style.width = childrens[i].__prevWidth;
					}
				}
			};

			var calculateHeight = function(element) {
				var cs = getComputedStyle(element);

				var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

				var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

				// Element height minus padding and border
				var elementHeight = element.offsetHeight - paddingY - borderY;
				return elementHeight;
			};

			var calculateWidth = function(element) {
				var cs = getComputedStyle(element);

				var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

				var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

				// Element width minus padding and border
				var elementWidth = element.offsetWidth - paddingX - borderX;
				return elementWidth;
			};

			var getRelativeParent = function(element){

				while(element.parentElement){
					element = element.parentElement;
					var cs = getComputedStyle(element);
					if(cs.position == "relative" || cs.position == "absolute" ){
						return element;
					}
				}
				return null;
			};

			//Checks whether the element can be dropped or not
			var checkDroppable = function(element,parentElem,sortableElem,connectedWith,containmentDimensions,mP){
				if(element.id != "dummy"){
					// var sortableParentId = sortableElem.parentElement.id;
					// var droppableParentId = element.parentElement.id;
					if(containmentDimensions){
						if(mP.x < containmentDimensions.left || mP.x > containmentDimensions.right || mP.y < containmentDimensions.top || mP.y > containmentDimensions.bottom){
							return false;
						}
					}
					if(sortableElem.parentElement == element.parentElement || element.parentElement == sortableElem._sortableChildData._parentElem){
						return true;
					}
					if(((connectedWith).indexOf(element.parentElement) != -1) && ((element._sortableChildData && element._sortableChildData.droppable) || (element.parentElement._sortableParentData && element.parentElement._sortableParentData.droppable))){
						return true;
					}
				}
				return false;
			};

			//Checks whwther the element can be dropped or not
			var checkParentDroppable = function(element,parentElem,sortableElem,connectedWith,containmentDimensions,mP){
				// var sortableParentId = sortableElem.parentElement.id;
				if(containmentDimensions){
					if(mP.x < containmentDimensions.left || mP.x > containmentDimensions.right || mP.y < containmentDimensions.top || mP.y > containmentDimensions.bottom){
						return false;
					}
				}
				if(sortableElem.parentElement == element || element == parentElem){
					return true;
				}
				if(((connectedWith).indexOf(element) != -1) && checkDroppableValue(element)){
					return true;
				}
				return false;
			};

			var checkDroppableValue = function(element){
				var childrens = element.children;
				var childElem;
				for(var v= 0; v<childrens.length; v++){
					if(childrens[v] != element.querySelector("#dummy") && childrens[v].tagName != "TEMPLATE" && $L(childrens[v]).hasClass('sortable-element')){
						childElem = childrens[v];
						break;
					}
				}
				return (childElem && childElem._sortableChildData ? childElem._sortableChildData.droppable : element._sortableParentData.droppable);
			};

			//Checks for appending the sortable elements at the end of the div
			var checkPossiblePosition = function(element,sortableElem){
				if(element.childElementCount > 0){
					var lastChild = element.lastElementChild;
					if(sortableElem.getBoundingClientRect().top > lastChild.getBoundingClientRect().bottom){
						return true
					}
				}
				else{
					return true;
				}
				return false;
			};

			var checkIfDroppable = function(parentElem,ele){
				if(ele.parentElement === parentElem && parentElem.childElementCount === 1 && (((ele.getBoundingClientRect().right > (parentElem.getBoundingClientRect().left + ele.getBoundingClientRect().width / 2)) &&
					(ele.getBoundingClientRect().right <= parentElem.getBoundingClientRect().right)) || ((ele.getBoundingClientRect().left < (parentElem.getBoundingClientRect().right - ele.getBoundingClientRect().width / 2)) &&
					(ele.getBoundingClientRect().left >= parentElem.getBoundingClientRect().left)))){
					return true;
				}
				return false;
			};

			var checkForIntersect = function(parentElem,mP){
				var cs = window.getComputedStyle(parentElem);
				var offset = parentElem.getBoundingClientRect();
				
				if(mP.x > (offset.left + parseFloat(cs.paddingLeft || 0)) && mP.x < (offset.right - parseFloat(cs.paddingRight || 0)) && mP.y > (offset.top + parseFloat(cs.paddingTop || 0)) && mP.y < (offset.bottom - parseFloat(cs.paddingBottom || 0))){
					return true;
				}
				return false;
			};

			var checkForBetween = function(parentElem,mP,div,isRelativeY,scrollDiv){
				var childrens = parentElem.children;
				var templateTags = 0;
				var childElem = [];
				for(var i = 0;i<childrens.length;i++){
					if(childrens[i].tagName != "TEMPLATE" && childrens[i].id != "dummy" && isNotRestricted(parentElem._sortableParentData,childrens[i])){
						childElem.push(childrens[i]);
					}
					else{
						templateTags++;
					}
				}
				if(templateTags == childrens.length){
					return true;
				}
				else if((childElem.length == 1 && childElem[childElem.length - 1] == div) || (childElem.length > 1 && childElem[childElem.length - 1] == div && div.getBoundingClientRect().top > (childElem[childElem.length - 2].getBoundingClientRect().bottom + (isRelativeY ? scrollDiv.scrollTop : 0)))){
					return true;
				}
				else if(div.getBoundingClientRect().top > (childElem[childElem.length - 1].getBoundingClientRect().bottom + (isRelativeY ? scrollDiv.scrollTop : 0))){
					return true;
				}
				return false;
			};

			var callRevertBack = function(data) {
				$L(data._div).removeClass("sortable-element-selected");
				removeStyle(data._div);
				data._placeholder.remove();
			};

			var removeStyle = function (element) {
				if (data.transitionEnabled) {
					element.style.transition = '';
				}
				element.style.position = '';
				element.style.top = '';
				element.style.left = '';
				element.style.width = '';
				element.style.height = '';
				// element.style.display = '';
				element.style.zIndex = '';
				element.style.boxSizing = '';
				$L(element).removeClass('lyteSortableElem');
				$L(element).removeClass('lyteSortableDisablePE');
				if(isHelper(element)){
					$L(element).removeClass('sortable-helper');
				}
				if(element.tagName.toLowerCase() == "tr" || element.tagName.toLowerCase() == "lyte-tr"){
					removefixedWidth(element);
				}
			};

			var findPreviousElem = function(elem){
				while(elem.previousElementSibling){
					elem = elem.previousElementSibling;
					if(elem.tagName != "TEMPLATE" && $L(elem).hasClass('sortable-element')){
						return elem;
					}
				}
				return null;
			};

			var findNextElem = function(elem){
				while(elem.nextElementSibling){
					elem = elem.nextElementSibling;
					if(elem.tagName != "TEMPLATE" && $L(elem).hasClass('sortable-element')){
						return elem;
					}
				}
				return null;
			};

			var checkForItems = function(data,targetElem){
				if(data.items.length > 0){
					for(var i = 0 ; i<data.items.length ; i++){
						var elements = document.querySelectorAll(data.items[i]);
						for(var j = 0; j<elements.length; j++){
							if(elements[j] == targetElem){
								return true;
							}
						}
					}
				}
				else{
					return true;
				}
				return false;
			};

			var getClone = function(elem,deepCopy){
				var clone;
				if(deepCopy){
					clone = elem.cloneNode(deepCopy);
					var cloneChildren = clone.children;
					var elemChildren = elem.children;
					for(var i = 0; i<cloneChildren.length; i++){
						var childOffset = elemChildren[i].getBoundingClientRect();
						// cloneChildren[i].innerHTML = "";
						cloneChildren[i].style.width = childOffset.width + "px";
						cloneChildren[i].style.height = childOffset.height + "px";
						// cloneChildren[i].style.boxSizing = "border-box";
						cloneChildren[i].classList.add('lyteSortableDummyTr');
					}
				}
				else{
					clone = elem.cloneNode();
					clone.innerHTML = "";
					clone.style.boxSizing = "border-box";
				}
				clone._callee = elem;
				clone.classList.remove('sortable-element-selected','sortableElem');
				if(isHelper(elem)){
					clone.style.visibility = "";
				}
				return clone;
			};

			var isHelper = function(elem){
				return (elem.classList.contains('sortable-helper') || elem._isHelper);
			};

			return this;

		}

	}

});


/***/ })

}]);
//# sourceMappingURL=keyvalue-comp.js.map
"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/doublefield-comp"],{

/***/ 5313746:
/*!***************************************************!*\
  !*** ./components/javascript/doublefield-comp.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoublefieldComp": () => (/* binding */ DoublefieldComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_double_field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-double-field.js */ 87815276);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class DoublefieldComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('doublefieldObj') || {};

    let slyte_code = '<zcat-double-field\n  self="{{self}}"\n  zcat-prop="{{doublefieldObj}}"\n></zcat-double-field>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    doublefieldObj: prop("object", {\n      default: {\n        label: "Phone Number",\n        fields: [\n          { type: "dropdown", width: "100px", props: { placeholder: "+1", options: [...] } },\n          { type: "input", props: { placeholder: "Phone number" } }\n        ]\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-doublefield-wrapper">\n  <label class="zcat-doublefield-label">Phone Number</label>\n  <div class="zcat-doublefield-row">\n    <div class="zcat-doublefield-item zcat-field-first" style="width:100px">\n      <select>...</select>\n    </div>\n    <div class="zcat-doublefield-item zcat-field-last" style="flex:1">\n      <input type="text" placeholder="Phone number" />\n    </div>\n  </div>\n</div>';

    let css_code = '.zcat-doublefield-row { display: flex; }\n.zcat-field-first input { border-radius: 8px 0 0 8px; }\n.zcat-field-last input { border-radius: 0 8px 8px 0; }';

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
      doublefieldObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Phone Number',
          fields: [
            {
              type: 'dropdown',
              width: '110px',
              props: {
                placeholder: '+1',
                options: [
                  { name: '+1 US', value: '+1' },
                  { name: '+44 UK', value: '+44' },
                  { name: '+91 IN', value: '+91' },
                  { name: '+81 JP', value: '+81' }
                ]
              }
            },
            {
              type: 'input',
              props: {
                placeholder: 'Enter phone number'
              }
            }
          ]
        }
      }),
      doublefieldObj2: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Amount',
          fields: [
            {
              type: 'dropdown',
              width: '100px',
              props: {
                placeholder: 'USD',
                options: [
                  { name: 'USD', value: 'usd' },
                  { name: 'EUR', value: 'eur' },
                  { name: 'GBP', value: 'gbp' },
                  { name: 'INR', value: 'inr' }
                ]
              }
            },
            {
              type: 'input',
              props: {
                placeholder: 'Enter amount'
              }
            }
          ]
        }
      }),
      doublefieldObj3: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Date Range',
          fields: [
            {
              type: 'input',
              props: { placeholder: 'Start date' }
            },
            {
              type: 'input',
              props: { placeholder: 'End date' }
            }
          ]
        }
      }),
      toggleLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      toggleErrorObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleError' } }
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
      toggleLabel(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'label', val ? 'Phone Number' : '');
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      toggleError(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'errorMessage', val ? 'This field is required' : '');
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'label', 'Phone Number');
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'disabled', false);
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'errorMessage', '');
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

DoublefieldComp._template = "<template tag-name=\"doublefield-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Double Field</h1> <p class=\"zcat-page-desc\">Combines multiple input and dropdown fields side-by-side with shared label and error handling.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj}}\"></zcat-double-field> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Use Cases</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Phone Number</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Currency Amount</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj2}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Date Range (Input + Input)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj3}}\"></zcat-double-field> </div> </div> </div> </div></template></template> </div> </template><style>/* doublefield-comp demo styles are in utilities */\n</style>";;
DoublefieldComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

DoublefieldComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "doublefieldObj",
  "doublefieldObj2",
  "doublefieldObj3",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



DoublefieldComp.register("doublefield-comp", {
  hash: "DoublefieldComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 87815276:
/*!****************************************************!*\
  !*** ./components/javascript/zcat-double-field.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatDoubleField": () => (/* binding */ ZcatDoubleField)
/* harmony export */ });
/* harmony import */ var _zcat_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-input.js */ 9513644);
/* harmony import */ var _zcat_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-dropdown.js */ 71154528);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatDoubleField extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { default: {} }, { watch: true })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

ZcatDoubleField._template = "<template tag-name=\"zcat-double-field\"> <div class=\"zcat-doublefield-wrapper {{expHandlers(zcatProp.disabled,'?:','zcat-doublefield-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-doublefield-error','')}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-doublefield-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-doublefield-exsm',''))}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-doublefield-label-row\"> <label class=\"zcat-doublefield-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-doublefield-optional\">(Optional)</span> </template></template> </div> </template></template> <!-- Fields row --> <div class=\"zcat-doublefield-row\"> <template items=\"{{zcatProp.fields}}\" item=\"field\" index=\"fieldIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-doublefield-item {{expHandlers(expHandlers(fieldIdx,'===',0),'?:','zcat-field-first','')}} {{expHandlers(expHandlers(fieldIdx,'===',expHandlers(zcatProp.fields.length,'-',1)),'?:','zcat-field-last','')}} {{expHandlers(expHandlers(expHandlers(fieldIdx,'>',0),'&amp;&amp;',expHandlers(fieldIdx,'<',expHandlers(zcatProp.fields.length,'-',1))),'?:','zcat-field-mid','')}}\" style=\"{{expHandlers(field.width,'?:',expHandlers('width:','+',field.width),'flex:1')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(field.type,'===','input')}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{field.props}}\"></zcat-input> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(field.type,'===','dropdown')}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{field.props}}\"></zcat-dropdown> </template></template> </div> </template> </div> <!-- Error Message --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-doublefield-error-msg\">{{zcatProp.errorMessage}}</div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Double Field Component\n   ============================== */\n\nzcat-double-field * { box-sizing: border-box; }\n\n.zcat-doublefield-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Label */\n.zcat-doublefield-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-doublefield-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-doublefield-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* Fields row */\n.zcat-doublefield-row {\n  display: flex;\n  align-items: stretch;\n}\n\n/* Field items — override child component border-radius */\n.zcat-doublefield-item {\n  position: relative;\n}\n.zcat-doublefield-item + .zcat-doublefield-item {\n  margin-left: -1px;\n}\n\n/* First field: rounded left corners only */\n.zcat-field-first zcat-input .zcat-input-el,\n.zcat-field-first zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 6px 0 0 6px;\n}\n.zcat-field-first zcat-input .zcat-input-label-row,\n.zcat-field-first zcat-dropdown .zcat-dropdown-label-row {\n  display: none;\n}\n\n/* Middle fields: no border-radius */\n.zcat-field-mid zcat-input .zcat-input-el,\n.zcat-field-mid zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 0;\n}\n.zcat-field-mid zcat-input .zcat-input-label-row,\n.zcat-field-mid zcat-dropdown .zcat-dropdown-label-row {\n  display: none;\n}\n\n/* Last field: rounded right corners only */\n.zcat-field-last zcat-input .zcat-input-el,\n.zcat-field-last zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 0 6px 6px 0;\n}\n.zcat-field-last zcat-input .zcat-input-label-row,\n.zcat-field-last zcat-dropdown .zcat-dropdown-label-row {\n  display: none;\n}\n\n/* Hover z-index so border shows on top */\n.zcat-doublefield-item:hover {\n  z-index: 1;\n}\n.zcat-doublefield-item:focus-within {\n  z-index: 2;\n}\n\n/* Hide individual field error messages — show parent one */\n.zcat-doublefield-item zcat-input .zcat-input-error-msg,\n.zcat-doublefield-item zcat-dropdown .zcat-dropdown-error-msg {\n  display: none;\n}\n\n/* Error */\n.zcat-doublefield-error .zcat-doublefield-item zcat-input .zcat-input-el,\n.zcat-doublefield-error .zcat-doublefield-item zcat-dropdown .zcat-dropdown-trigger {\n  border-color: var(--zcat-inputField-border-error) !important;\n}\n.zcat-doublefield-error-msg {\n  position: relative;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--zcat-inputField-text-error);\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Disabled */\n.zcat-doublefield-disabled .zcat-doublefield-label {\n  color: var(--zcat-inputField-text-disabled);\n}\n\n/* Sizes */\n.zcat-doublefield-sm .zcat-field-first zcat-input .zcat-input-el,\n.zcat-doublefield-sm .zcat-field-first zcat-dropdown .zcat-dropdown-trigger,\n.zcat-doublefield-sm .zcat-field-last zcat-input .zcat-input-el,\n.zcat-doublefield-sm .zcat-field-last zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 6px 0 0 6px;\n}\n.zcat-doublefield-sm .zcat-field-last zcat-input .zcat-input-el,\n.zcat-doublefield-sm .zcat-field-last zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 0 6px 6px 0;\n}\n.zcat-doublefield-exsm .zcat-field-first zcat-input .zcat-input-el,\n.zcat-doublefield-exsm .zcat-field-first zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 6px 0 0 6px;\n}\n.zcat-doublefield-exsm .zcat-field-last zcat-input .zcat-input-el,\n.zcat-doublefield-exsm .zcat-field-last zcat-dropdown .zcat-dropdown-trigger {\n  border-radius: 0 6px 6px 0;\n}\n\n/* Make child wrappers full-width */\n.zcat-doublefield-item zcat-input,\n.zcat-doublefield-item zcat-dropdown {\n  display: block;\n  width: 100%;\n}\n.zcat-doublefield-item zcat-input .zcat-input-wrapper,\n.zcat-doublefield-item zcat-dropdown .zcat-dropdown-wrapper {\n  width: 100%;\n}\n</style>";;
ZcatDoubleField._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,7,1]},{"t":"f","p":[1,7,1],"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["field.width","'?:'",null,"'flex:1'"]}}}},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;
ZcatDoubleField._observedAttributes = ["self", "zcatProp"];

ZcatDoubleField.register("zcat-double-field", {
  hash: "ZcatDoubleField_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=doublefield-comp.js.map
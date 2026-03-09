"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/datepicker-comp"],{

/***/ 11931176:
/*!**************************************************!*\
  !*** ./components/javascript/datepicker-comp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-button.js */ 43360219);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-toggle.js */ 85465283);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-datepicker.js */ 78349032);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-icon.js */ 35554276);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class DatepickerComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('datepickerObj') || {};

    let slyte_code = '<zcat-datepicker\n  self="{{self}}"\n  zcat-prop="{{datepickerObj}}"\n></zcat-datepicker>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    datepickerObj: prop("object", {\n      default: ' + JSON.stringify({
      label: obj.label || 'Date',
      placeholder: obj.placeholder || 'Select date',
      format: obj.format || 'MM/DD/YYYY',
      showTime: obj.showTime || false
    }, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-datepicker-wrapper">\n  <label class="zcat-datepicker-label">' + (obj.label || 'Date') + '</label>\n  <div class="zcat-datepicker-trigger">\n    <span class="zcat-datepicker-display">' + (obj.placeholder || 'Select date') + '</span>\n    <span class="zcat-datepicker-icon">&#x1F4C5;</span>\n  </div>\n</div>';

    let css_code = '.zcat-datepicker-wrapper { position: relative; width: 260px; }\n.zcat-datepicker-trigger { display: flex; align-items: center; height: 36px; padding: 0 12px; border: 1px solid var(--zcat-inputField-border-default); border-radius: 8px; cursor: pointer; }';

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
      datepickerObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Date',
          placeholder: 'Select date',
          format: 'MM/DD/YYYY',
          callback: { name: 'onDateSelect' }
        }
      }),
      datepickerTimeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Date & Time',
          placeholder: 'Select date and time',
          format: 'MM/DD/YYYY',
          showTime: true,
          callback: { name: 'onDateSelect' }
        }
      }),
      datepickerMinMaxObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          label: 'Restricted Range',
          placeholder: 'Pick a date',
          format: 'MM/DD/YYYY',
          minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
          maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().split('T')[0],
          callback: { name: 'onDateSelect' }
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
      toggleShowTimeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleShowTime' } }
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
      onDateSelect(result) {
        console.log('Datepicker selected:', result);
      },
      toggleLabel(val) {
        if (val) {
          this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', 'Date');
        } else {
          this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      toggleError(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'errorMessage', val ? 'Please select a valid date' : '');
        this.constructCodeSnippet();
      },
      toggleShowTime(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'showTime', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', 'Date');
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'disabled', false);
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'errorMessage', '');
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'showTime', false);
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

DatepickerComp._template = "<template tag-name=\"datepicker-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Datepicker</h1> <p class=\"zcat-page-desc\">Calendar-based date selection with optional time picker, min/max range constraints, and formatted display.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerObj}}\"></zcat-datepicker> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Time</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleShowTimeObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Date Only</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: repeat(2, 1fr);\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerObj}}\"></zcat-datepicker> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Min/Max Range</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerMinMaxObj}}\"></zcat-datepicker> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">Date &amp; Time</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: 1fr;\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Time Picker</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerTimeObj}}\"></zcat-datepicker> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">States</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: repeat(2, 1fr);\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-datepicker-wrapper zcat-datepicker-disabled\"> <div class=\"zcat-datepicker-label-row\"><label class=\"zcat-datepicker-label\">Disabled Date</label></div> <div class=\"zcat-datepicker-trigger\"> <span class=\"zcat-datepicker-display zcat-datepicker-placeholder\">Select date</span> <span class=\"zcat-datepicker-icon\"> <zcat-icon name=\"calendar\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-datepicker-wrapper zcat-datepicker-error\"> <div class=\"zcat-datepicker-label-row\"><label class=\"zcat-datepicker-label\">Error Date</label></div> <div class=\"zcat-datepicker-trigger\"> <span class=\"zcat-datepicker-display zcat-datepicker-placeholder\">Select date</span> <span class=\"zcat-datepicker-icon\"> <zcat-icon name=\"calendar\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> <span class=\"zcat-datepicker-error-msg\">Please select a valid date</span> </div> </div> </div> </div> </div></template></template></div> </template><style>/* datepicker-comp demo styles are in utilities */\n</style>";;
DatepickerComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

DatepickerComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "datepickerObj",
  "datepickerTimeObj",
  "datepickerMinMaxObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "toggleShowTimeObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatepickerComp);

DatepickerComp.register("datepicker-comp", {
  hash: "DatepickerComp_6",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 70631464:
/*!****************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-time-picker.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteTimePickerComponent": () => (/* binding */ LyteTimePickerComponent)
/* harmony export */ });
/* harmony import */ var _lyte_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lyte-button.js */ 31055274);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _slyte_component_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@slyte/component/index.js */ 93132498);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_lyte_moment_basic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plugins/lyte-moment-basic.js */ 5588936);
/* harmony import */ var _plugins_lyte_moment_basic_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugins_lyte_moment_basic_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_lyte_moment_additional_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plugins/lyte-moment-additional.js */ 32915219);
/* harmony import */ var _plugins_lyte_moment_additional_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_lyte_moment_additional_js__WEBPACK_IMPORTED_MODULE_4__);







/* @Slicer.otherframeworkStart */




/*  @Slicer.otherframeworkEnd */



class LyteTimePickerComponent extends _component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    init() {
		var data = this.data,
			value = data.ltPropValue,
			timeFormat = data.ltPropTimeFormat,
			id = "time_picker" + Date.now() + parseInt(Math.random() * 1000),
			moment,
			time_to;
		switch (value) {
			case "now": {
				moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment();
			}
				break;
			case "startOfDay": {
				moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment().startOf('day');
			}
				break;
			default: {
				time_to = value;
			}
		}

		if (moment) {
			time_to = this.toOtherLang(moment, timeFormat);
		} else if (time_to) {
			time_to = this.toOtherLang(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(time_to, timeFormat), timeFormat), timeFormat);
		}
		this.setData("randId", id);
		this.setData("ltPropValue", time_to);
		data.ltPropValidateOn.init && this.validateRefresh();
	}

    data(arg1) {
		return Object.assign(super.data({
			ltPropValue: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropTimeFormat: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "hh:mm A" }),
			ltPropStartTime: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: undefined }),
			ltPropEndTime: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: undefined }),
			ltPropButton: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { default: [{ text: "Ok", purpose: "ok", properties: { appearance: "primary", ariaButton: {} } }] }),
			ltPropInterval: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: {} }),
			ltPropId: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropClass: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropName: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropPlaceholder: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropDisabled: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropReadonly: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropAllowDropdown: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropInline: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),
			ltPropBindToBody: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),
			ltPropBoundary: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: {} }),
			ltPropI18n: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropConvertNumbers: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropConvertedValue: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropFreeze: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropAriaAttributes: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: { input: "Time Picker", icon: "Choose Time", hour: "Select Hour", minute: "Select Minute", second: "Select Second", meridiem: "Select Meridiem", message: "Selected Time" } }),
			ltPropValidate: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropValidateType: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: { minmax: true, mandatory: true } }),
			ltPropValidateOn: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: { blur: true, init: false } }),
			ltPropValid: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),
			ltPropDropdownMinHeight: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("number"),
			ltPropDropdown: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),
			ltPropCounter: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropAllowCounter: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropInputInterval: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object", { default: {} }),
			ltPropInputIntervalSync: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: false }),
			ltPropDropdownClass: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "" }),
			ltPropDropdownAlignPosition: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string", { default: "left" }),
			ltPropPreventInvalid: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),

			hours: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { default: [] }),
			minutes: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { default: [] }),
			seconds: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { default: [] }),
			meridiems: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { default: [] }),
			minutesHide: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object"),
			hoursHide: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object"),
			secondsHide: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object"),
			curFormat: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("number"),
			randId: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string"),
			inBoundary: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true }),
			dropdownRefresh: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default: true })
		}), arg1);
	}

    static actions(arg1) {
        return Object.assign(super.actions({

			dropDownKeyDown: function (evt, _this) {
				this.dropDownKeys(evt, _this)
			},

			inputKeyDown: function (evt, _this) {

				if (this.getMethods("onBeforeInputKeydown") && this.executeMethod("onBeforeInputKeydown", evt, _this, this.$node) == false) {
					evt.preventDefault();
					return;
				}

				this.isValid() && this.inputKeys(evt);

			},

			inputFocus: function (focusIn) {
				var $node = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node);
				if (focusIn) {
					this.inputClick();
					$node.addClass('lyteTimePickerInputFocused');
				} else {
					if (this.data.ltPropValidateOn.blur) {
						this.validateRefresh();
					}
					$node.removeClass('lyteTimePickerInputFocused');
				}
			},

			dropDownValueFocus: function (evt, focusIn) {
				var item = evt.target,
					itemObj = this.data[item.getAttribute("data-unit")][item.getAttribute("data-index")],
					setVal;
				if (focusIn && itemObj.disabled == "false") {
					setVal = itemObj.class + " lyteTimePickerItemFocused";
				} else if (!focusIn) {
					setVal = itemObj.class.replace(" lyteTimePickerItemFocused", "");
				}
				setVal && this.alterObjUtils(itemObj, ["class"], [setVal]);
			},

			inputVal: function (evt) {
				this.setData("ltPropValue", evt.target.value);
			},

			customButtonFocus: function (evt, _this) {
				this.getMethods("onCustomButtonFocus") && this.executeMethod("onCustomButtonFocus", evt, _this, this.$node);
			},

			counterKeys: function (type, manual) {
				this.counterVal(type, manual);
			}

		}), arg1);
	}

    didConnect() {

		var $node = this.$node,
			data = this.data;

		this.dropDown = $node.getElementsByTagName("lyte-time-picker-dropdown")[0];
		this.inputField = $node.querySelector(".lyteTimePickerField");
		this.input = $node.querySelector(".lyteTimePickerInput");

		$node.open = function () {
			if (!data.ltPropDropdown || (data.ltPropReadonly && !data.ltPropAllowDropdown) || data.ltPropDisabled) {
				return;
			}
			if (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown).hasClass("lyteTimePickerDropdownNone")) {
				Array.from(document.getElementsByTagName('lyte-time-picker')).forEach(item => {
					item.close();
				});
				this.dropDownButtonClick();
			}
		}.bind(this);

		$node.close = function () {
			var inBound = data.inBoundary;
			if (data.ltPropDropdown && !_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown).hasClass("lyteTimePickerDropdownNone") || !inBound) {
				this.hideDropDownVal(true);
				if (!inBound) {
					this.setData("inBoundary", true);
				}
			}
		}.bind(this);

		$node.validate = this.validateRefresh.bind(this);

	}

    didDestroy() {
		var data = this.data;
		if (!data.ltPropInline) {
			if (data.ltPropBindToBody && this.dropDown) {
				this.dropDown.remove();
				delete this.dropDown.parent;
				delete this.dropDown;
			}
		}
	}

    disableElem(data, _class) {
		if (this.data[data]) {
			_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node).addClass(_class);
		} else {
			_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node).removeClass(_class);
		}
	}

    toOtherLang(moment, format) {
		var i18n = this.data.ltPropI18n,
			convertNumbers = this.data.ltPropConvertNumbers,
			ns = i18n ? 'i18N' : "format";
		return moment[ns](format, convertNumbers);
	}

    toEng(time, format) {
		if (time) {
			var data = this.data;
			return _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(time, format, { i18n: data.ltPropI18n, number_conversion: data.ltPropConvertNumbers }).format(format);
		}
	}

    alterObjUtils(obj, key, value) {
		key.forEach((item, index) => {
			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_6__.objectUtils)(obj, "add", item, value[index]);
		});
	}

    setAriaTime(time) {
		(this.data.ltPropButton || []).forEach(item => {
			if (item.purpose == "ok") {
				if (item.properties == undefined) {
					this.alterObjUtils(item, ["properties"], [{}])
				}
				time = time ? (" " + time) : time;
				this.alterObjUtils(item.properties, ["ariaButton"], [{ "aria-label": (this.data.ltPropAriaAttributes.message || "") + time }]);
			}
		})
	}

    refreshDropdown() {
		["hours", "minutes", "seconds", "meridiems", "minutesHide", "hoursHide", "secondsHide", "curFormat"].forEach((unit, index) => {
			this.setData(unit, index < 4 ? [] : undefined);
		});
		this.setData("dropdownRefresh", true);
	}

    hideDropDownVal(close, evt, buttonType, boundary) {
		var button, beforeClass, onClass, noneClass, openClass, ariaExpand, freeze;
		if (close) {
			beforeClass = "onBeforeClose";
			onClass = "onClose";
			noneClass = "addClass";
			openClass = "removeClass";
			ariaExpand = false;
			freeze == false;
			_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown).removeClass("lyteDropdownSizeChange", "lyteDropdownTopSide");
			this.data.ltPropValidateOn.blur && this.validateRefresh();
		} else {
			beforeClass = "onBeforeOpen";
			onClass = "onOpen";
			noneClass = "removeClass";
			openClass = "addClass";
			ariaExpand = true;
			freeze = true;
		}
		if (this.getMethods(beforeClass) && this.executeMethod(beforeClass, evt, this.$node) == false) {
			return;
		}
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown)[noneClass]("lyteTimePickerDropdownNone");
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node)[openClass]("lyteTimePickerDropdownOpened");
		button = this.$node.querySelector(".lytetimePickerButton");
		if (buttonType == "ok" || document.activeElement == document.body) {
			button.focus({ preventScroll: true });
		};
		button.setAttribute("aria-expanded", ariaExpand);
		!boundary && this.setAriaTime("");
		this.freezeLayer(freeze);
		this.getMethods(onClass) && this.executeMethod(onClass, evt, this.$node);
	}

    getItemWithClass(dataUnit, _class) {
		var data = this.data,
			retVal;
		data[dataUnit].every(item => {
			if (item.class.includes(_class)) {
				retVal = item;
				return false;
			}
			return true;
		})
		return retVal;
	}

    blurItems(hideArr, _class) {
		if (hideArr) {
			var listElem = this.data[_class];
			for (var i = 0; i < listElem.length && hideArr.length; i++) {
				var curObj = listElem[i],
					curInd = hideArr.indexOf(curObj.engVal);
				if (curInd != -1) {
					this.alterObjUtils(curObj, ["class", "disabled"], [curObj.class + " lyteTimePickerBlur", "true"]);
					hideArr.splice(curInd, 1);
				}
			}
		}
	}

    setDropVal(onlyInfo, evt) {//set drop val to input || ltPropValue
		var data = this.data,
			curSetVal = data.ltPropValue,
			timeForm = data.ltPropTimeFormat,
			moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment();
		["hours", "minutes", "seconds", "meridiems"].forEach(item => {
			var comp = this.getItemWithClass(item, "lyteTimePickerItemSelected"),
				compVal;
			if (comp) {
				compVal = comp.engVal;
				if (item == "meridiems") {
					curSetVal = (compVal.toLowerCase() != moment.format("A").toLowerCase()) ? moment.add(12, "hours").format(timeForm) : curSetVal;
				} else {
					curSetVal = moment.set(item, parseInt(compVal)).format(timeForm);
				}
			}
		});
		curSetVal = this.toOtherLang(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(curSetVal, timeForm), timeForm);
		if (onlyInfo) {
			return curSetVal;
		}
		this.setData("ltPropValue", curSetVal);
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
			this.hideDropDownVal(true, evt, "ok");
		}.bind(this));
	}

    updDropVal(selected, unit, updUnit) {//updates values on refresh others in dropDown
		if (this.dropDownChanges(selected, unit, undefined, "scroll")) {
			return updUnit.length && this.setValuesManually(updUnit, false, "scroll") && false;
		} else {
			return false;
		}
	}

    isValid(custFormat) {

		var data = this.data,
			invalid = true,
			value = data.ltPropValue,
			format = custFormat || data.ltPropTimeFormat,
			moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(value, format, { i18n: data.ltPropI18n, number_conversion: data.ltPropConvertNumbers });
		if (value && moment.validate() && (this.toOtherLang(moment, format) == value)) {
			invalid = false;
		}
		return !invalid;

	}

    validateRefresh() {

		var data = this.data,
			errorMsg = data.ltPropValidateType,
			val = data.ltPropValue,
			validate = false;

		if (!data.ltPropValidate) {
			return;
		}

		validate = !!((errorMsg.mandatory || val) && ((errorMsg.minmax && val && !this.validateTimeInterval(val)) || !this.isValid()));
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node)[validate ? 'addClass' : 'removeClass']("lyteTimePickerInvalidTime");
		this.setData('ltPropValid', !validate);

	}

    validateTimeInterval(curTime, getInfo) {
		var data = this.data,
			curFormat = data.ltPropTimeFormat,
			curTimeMoment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(curTime, curFormat), curFormat),
			startMoment = data.ltPropStartTime && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(data.ltPropStartTime, curFormat), curFormat),
			endMoment = data.ltPropEndTime && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(data.ltPropEndTime, curFormat), curFormat),
			startTime = startMoment && startMoment.fromNow(curTimeMoment),
			endTime = endMoment && endMoment.fromNow(curTimeMoment),
			ret;
		if (startMoment && endMoment && startMoment.fromNow(endMoment).past) {
			if ((!startTime.past || startTime.value == 0) || (endTime.past || endTime.value == 0)) {
				ret = true;
			} else if (getInfo) {
				ret = data.ltPropStartTime;
			}
		} else {
			if ((startTime ? !startTime.past : true) && (endTime ? (endTime.past || endTime.value == 0) : true)) {
				ret = true;
			} else if (getInfo) {
				var retVal;
				if (startTime && startTime.past) {
					retVal = data.ltPropStartTime;
				} else if (endTime && !endTime.past) {
					retVal = data.ltPropEndTime;
				}
				ret = retVal;
			}
		}
		return ret;
	}

    inputKeys(evt, fromCounter) {
		var activeElement = document.activeElement,
			__this = this,
			data = __this.data,
			inputElem = this.input,
			curFormat = data.ltPropTimeFormat,
			interval = data.ltPropInputInterval,
			curTime = this.toEng(data.ltPropValue, curFormat),
			moment = curTime && curFormat && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(curTime, curFormat),
			split = moment && moment.parseFormat(curFormat),
			selectionStart = inputElem.selectionStart,
			selectionEnd = inputElem.selectionEnd,
			isButton = activeElement.closest(".lytetimePickerButton"),
			isCounterButton = activeElement.closest(".lytetimePickerCounterButtons"),
			keycode = evt.keyCode, key = evt.key, meta = (evt.ctrlKey || evt.metaKey),
			nextSelectionStart, nextNotAvail, prevSelectionStart, prevNotAvil, selectedFormat,
			selectedVal, meriAvail, updatedTime, curFormatType, preventAdj, hh, formatLimit, prvEvt = false,
			getCustomTime = function (value, invalid) {
				var time = invalid ? data.ltPropValue : curTime;
				return time.slice(0, selectionStart) + value + time.slice(selectionEnd, time.length);
			},
			getUpdVal = function (func, val, nearest) {
				var tempUpdatedTime, chng = 1, intervalRet;
				if (func == "set") {
					tempUpdatedTime = getCustomTime(val, false);
					if (!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(tempUpdatedTime, curFormat).validate()) {
						return false;
					}
					tempUpdatedTime = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(tempUpdatedTime, curFormat).format(curFormat);
				} else if (func == "fullset") {
					tempUpdatedTime = val;
				} else {
					if (interval) {
						var curInterval = interval[selectedFormat.slice(0, -1)];
						nearest = true;
						if (curInterval) {
							if (data.ltPropInputIntervalSync) {
								var limitControl = function () {
									if (chng > formatLimit) {
										chng = formatLimit;
										return true;
									}
								},
									inc = func == "add";
								//finds diff for nearest multiple
								chng = Math.abs(((Math[inc ? 'floor' : 'ceil'](selectedVal / curInterval) + (inc ? 1 : -1)) * curInterval) - selectedVal);
								if (inc) {//after limit goes to start
									if (parseInt(selectedVal) + chng >= (hh ? 13 : formatLimit)) {
										chng = (hh && parseInt(selectedVal) == 12) ? curInterval : formatLimit - selectedVal;
									}
								} else {//before limit goes to end
									if (!limitControl() && (selectedVal - chng < 0)) {
										chng = parseInt(selectedVal) + Math.abs(((Math.ceil(formatLimit / curInterval) - 1) * curInterval) - formatLimit);
									}
								}
								limitControl();
							} else {
								chng = curInterval;
							}
						}
					}
					tempUpdatedTime = selectedFormat && moment[func](meriAvail ? 12 : chng, meriAvail ? "hours" : selectedFormat).format(curFormat)
				}
				intervalRet = __this.validateTimeInterval(tempUpdatedTime, nearest);
				if (intervalRet == true) {
					updatedTime = tempUpdatedTime;
					return true;
				} else {
					if (nearest) {
						intervalRet = __this.toEng(intervalRet, curFormat);
						if (!getUpdVal("set", intervalRet[selectionStart] + intervalRet[selectionEnd - 1])) {
							getUpdVal("fullset", intervalRet);
						}
					}
					return false;
				}
			};

		if ((data.ltPropReadonly && (!(fromCounter && data.ltPropAllowCounter) && [38, 40, 65, 80].includes(keycode))) || (isCounterButton && ![' ', 'Enter'].includes(key))) {
			return;
		}

		if (!isButton && (selectionStart == undefined || selectionStart == selectionEnd)) {
			selectionEnd = (selectionStart = this.fixSelection(selectionEnd, true).index) + 2;
			if ([37, 39, 9].includes(keycode)) {
				preventAdj = true;
				evt.preventDefault();
			}
		}

		for (var i = 0; split && (i < split.length); i++) {
			if (selectionStart == split[i].index && selectionEnd == (split[i].index + 2)) {
				curFormatType = split[i].format.val;
				selectedVal = moment.format(curFormatType);
				selectedFormat = split[i].format.type + "s";
				meriAvail = selectedFormat == "meridians";
				if (split[i + 1]) {
					nextSelectionStart = split[i + 1].index;
				} else {
					nextSelectionStart = split[0].index;
					nextNotAvail = true;
				}
				if (split[i - 1]) {
					prevSelectionStart = split[i - 1].index;
				} else {
					prevNotAvil = true;
					prevSelectionStart = split[split.length - 1].index;
				}
				break;
			}
		}

		hh = curFormatType == 'hh';
		formatLimit = ((curFormatType == 'mm' || curFormatType == 'ss') && 60) || (hh && 12) || (curFormatType == 'HH' && 24);

		if (!preventAdj) {
			switch (key) {
				case 'ArrowUp': {
					prvEvt = true;
					getUpdVal("add");
					break
				}
				case 'ArrowDown': {
					prvEvt = true;
					getUpdVal("subtract");
					break
				}
				case 'ArrowRight': {
					prvEvt = true;
					selectionStart = nextSelectionStart;
					selectionEnd = nextSelectionStart + 2;
					break;
				}
				case 'ArrowLeft': {
					prvEvt = true;
					selectionStart = prevSelectionStart;
					selectionEnd = prevSelectionStart + 2;
					break;
				}
				// case 8: {
				// 	prvEvt = true;
				// 	this.setData("subValueAdded", true);
				// 	this.setData("ltPropValue", getCustomTime(curFormatType == "A" ? "aa" : curFormatType, true));
				// 	break;
				// }
				case 'Tab': {
					if (evt.shiftKey) {
						if (isButton) {
							var cur = split[split.length - 1];
							prvEvt = true;
							inputElem.focus();
							selectionStart = cur.index;
							selectionEnd = cur.index + 2;
						} else if (prevNotAvil) {
							return;
						} else {
							prvEvt = true;
							selectionStart = prevSelectionStart;
							selectionEnd = prevSelectionStart + 2;
						}
					} else {
						if (isButton || nextNotAvail) {//isbutton //input to button
							return;
						} else {//on input, has next input
							prvEvt = true;
							selectionStart = nextSelectionStart;
							selectionEnd = nextSelectionStart + 2;
						}
					}
					break;
				}
				case ' ':
				case 'Enter': {
					if (isButton) {
						return;
					} else if (isCounterButton) {
						var unitInd = {}, selInd;
						split.forEach(function (item) {
							unitInd[item.format.val] = item.index;
						});
						selInd = unitInd.ss ? unitInd.ss : unitInd.mm ? unitInd.mm : unitInd.hh ? unitInd.hh : unitInd.A ? unitInd.A : unitInd.a;
						if (selInd) {
							inputElem.setSelectionRange(selInd, selInd + 2);
							inputElem.focus();
							this.inputKeys({ key: activeElement.closest(".lytetimePickerIncButton") ? 'ArrowUp' : 'ArrowDown', preventDefault: function () { } }, true);
							activeElement.focus();
						}
						prvEvt = true;
					}
					break;
				}
				case 'a':
				case 'p': {
					if (!meta && meriAvail) {
						var proc = keycode == 65 ? selectedVal != "AM" : selectedVal != "PM";
						proc && getUpdVal("add");
						prvEvt = true;
					}
					break;
				}
				case 'Home':
				case 'End': {
					prvEvt = true;
					if (curFormatType == 'A' || curFormatType == 'a') {
						getUpdVal("add");
					} else {
						getUpdVal("set", key == 'Home' ? (hh ? '12' : '00') : formatLimit - 1, true);
					}
				}
			}
		}
		if (!data.ltPropReadonly && ((keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 105))) {
			if (!getUpdVal("set", selectedVal[1] + key)) {
				if (!getUpdVal("set", selectedVal[0] + key)) {
					getUpdVal("set", 0 + key)
				}
			}
			prvEvt = true;
		}

		if (data.ltPropPreventInvalid && !prvEvt && this.isValid() && (/^[0-9]$/.test(key) || !(meta || [8, 9, 13, 27, 37, 39, 46, 36, 35].includes(keycode)))) {
			prvEvt = true;
		}

		prvEvt && evt.preventDefault();

		updatedTime && this.setData("ltPropValue", this.toOtherLang(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(updatedTime, curFormat), curFormat));

		inputElem.setSelectionRange(selectionStart, selectionEnd);
	}

    dropDownKeys(evt, dropDown) {
		if (!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dropDown).hasClass("lyteTimePickerDropdownNone")) {
			var selectedItem = evt.target,
				button = selectedItem.closest(".lyteTimePickerDropdownButton"),
				availableUnits = ["lyteTimePickerMeridiem", "lyteTimePickerHour", "lyteTimePickerMinute", "lyteTimePickerSecond"],
				setManArr = ["meridiems", "hours", "minutes", "seconds"],
				key = evt.key,
				data = this.data,
				selectedItemClass,
				curClassInd,
				setVertCorresValue = function (corres, atmost, onlyInfo) {
					var sib = selectedItem[corres];
					while (sib != selectedItem && !button) {
						if (!sib || sib && !_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(sib).hasClass(selectedItemClass)) {
							if (onlyInfo) {
								return true;
							}
							sib = selectedItem.parentNode[atmost];
						}
						if (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(sib).hasClass("lyteTimePickerBlur")) {
							sib = sib[corres];
						} else {
							evt.preventDefault();
							sib.focus();
							break;
						}
					}
				},
				setHoriCorresValue = function (key, onlyInfo) {
					var corresClassInd,
						checkValid = function (value) {
							corresClassInd = (key == 'ArrowRight') ? ((value + 1) < 4 ? (value + 1) : 0) : ((value - 1) >= 0 ? (value - 1) : 3);
							if (onlyInfo && (key == 'ArrowRight' ? corresClassInd == 1 : corresClassInd == 0)) {// see availableUnits array // in here 1 is start and 0 is end 
								return true;
							}
						};
					if (checkValid(curClassInd)) {
						return true;
					}
					while (availableUnits[corresClassInd] || corresClassInd != curClassInd) {//available || end the loop
						var corres = dropDown.querySelector(".lyteTimePickerItemSelected." + availableUnits[corresClassInd]);
						if (corres) {
							evt.preventDefault();
							this.moveTop(dropDown.querySelector(".lyteTimePickerItemSelected." + availableUnits[curClassInd]));
							this.moveTop(corres);
							corres.focus();
							break;
						} else {
							if (checkValid(corresClassInd)) {
								return true;
							}
						}
					}
				}.bind(this),
				setTabCorresVal = function (corres, atmost, key) {
					// if (button || setVertCorresValue(corres, atmost, true)) {
					if (button || setHoriCorresValue(key, true)) {
						var focusButton;
						if (!button) {
							focusButton = dropDown.querySelector(".lyteTimePickerDropdownButton")[atmost];
						} else {
							focusButton = selectedItem.closest(".lyteTimePickerDropdownButtonItem")[corres];
							if (!focusButton) {
								curClassInd = (key == 'ArrowLeft') ? 1 : 0;
								setHoriCorresValue(key);
							}
						}
						if (focusButton) {
							focusButton.focus();
						}
					}
					// }
				}.bind(this),
				nearestAvail = function (parent, toStart) {
					var ret;
					if ((toStart && data.ltPropStartTime) || (!toStart && data.ltPropEndTime)) {
						var arr = this.data[parent.getAttribute('data-unit')],
							start = 0,
							end = arr.length,
							chng = 1;
						(!toStart) && (start = end - 1, end = 0, chng = -1);
						while (toStart ? start < end : end <= start) {
							if (arr[start].disabled == 'false') {
								ret = start;
								break;
							}
							start += chng;
						}
					}
					return parent.children[ret];
				};

			availableUnits.forEach((item, index) => {
				if (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(selectedItem).hasClass(item)) {
					selectedItemClass = item;
					curClassInd = index;
				}
			});

			if (this.getMethods("onBeforeDropdownKeydown") && this.executeMethod("onBeforeDropdownKeydown", evt, dropDown, this.$node) == false) {
				evt.preventDefault();
				return;
			}

			switch (key) {
				case 'ArrowDown': {
					setVertCorresValue("nextElementSibling", "firstElementChild");
					break;
				}
				case 'ArrowUp': {
					setVertCorresValue("previousElementSibling", "lastElementChild");
					break;
				}
				case 'ArrowRight': {
					setHoriCorresValue('ArrowRight');
					break;
				}
				case 'ArrowLeft': {
					setHoriCorresValue('ArrowLeft');
					break;
				}
				case 'Enter':
				case ' ': {
					if (!button) {
						var selectedUnit = setManArr[curClassInd];
						this.updDropVal(this.data[selectedUnit][selectedItem.getAttribute("data-index")], selectedUnit, setManArr.slice(curClassInd + 1, setManArr.length));
						if (setHoriCorresValue('ArrowRight', true)) {//close drop on last
							evt.preventDefault();
							this.setDropVal(false, evt);
						};
					}
					break;
				}
				case 'Tab': {
					evt.preventDefault();
					if (evt.shiftKey) {
						setTabCorresVal("previousElementSibling", "lastElementChild", 'ArrowLeft');
					} else {
						setTabCorresVal("nextElementSibling", "firstElementChild", 'ArrowRight');
					}
					break;
				}
				case 'Escape': {
					this.hideDropDownVal(true, evt, "ok");
					break;
				}
				case 'End':
				case 'Home': {
					evt.preventDefault();
					var parent = selectedItem.parentElement,
						start = key == 'Home';
					this.moveTop(nearestAvail.call(this, parent, start) || (start ? parent.firstElementChild : parent.lastElementChild), "scroll", !start)
					break;
				}
				case 'PageDown':
				case 'PageUp': {
					evt.preventDefault();
					var parent = selectedItem.parentElement,
						chng = parent.clientHeight - 10;
					_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(parent).addClass('lyteTimePickerScrollBehavior');
					parent.scrollTop += key == 'PageDown' ? chng : -chng;
					setTimeout(function () {
						_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(parent).removeClass('lyteTimePickerScrollBehavior')
					}, 1000);
					break;
				}
			}
		}
	}

    moveTop(selectElem, from, down) {
		var parent = selectElem.parentElement,
			itemOffsetTop = selectElem.offsetTop,
			containerOffsetTop = parent.offsetTop,
			paddingTop = this.data.paddingTop,
			scrollPosition = itemOffsetTop - containerOffsetTop - paddingTop - (down ? parent.offsetHeight - selectElem.offsetHeight - (paddingTop * 2) : 0);
		if (Math.abs(parent.scrollTop - scrollPosition) >= 1) {
			if (from && from != "start") {
				_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(selectElem.parentElement).addClass('lyteTimePickerScrollBehavior');
			}
			parent.scrollTop = scrollPosition;
			setTimeout(function () {
				_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(selectElem.parentElement).removeClass('lyteTimePickerScrollBehavior')
			}, 1000);
		}
	}

    remSetSelected(curUnitObj, _class) {
		var prevUnitObj = this.getItemWithClass(_class, "lyteTimePickerItemSelected");
		if (curUnitObj == prevUnitObj || curUnitObj.disabled == "true") {
			return false
		}
		if (prevUnitObj) {
			this.alterObjUtils(prevUnitObj, ["class", "selected"], [prevUnitObj.class.replace(" lyteTimePickerItemSelected", ""), "false"]);
		}
		this.alterObjUtils(curUnitObj, ["class", "selected"], [curUnitObj.class + " lyteTimePickerItemSelected", "true"]);
		return true;
	}

    dropDownChanges(listComp, _class, overRide, from) {
		var retVal,
			_this = this;
		if ((listComp && !listComp.class.includes("lyteTimePickerBlur")) || overRide) {
			if (listComp) {
				retVal = _this.remSetSelected(listComp, _class);
				(from != "start") && this.setAriaTime(this.setDropVal(true));
				this.moveTop(_this.dropDown.getElementsByClassName(listComp.class)[0], from);
			}
			if (_class == "meridiems" || _class == "hours" || _class == "minutes") {//it is also used to hide min and sec (based on hour)
				var selectedMeridiem = _this.getItemWithClass("meridiems", "lyteTimePickerItemSelected"),
					selectedMeridiemVal = selectedMeridiem ? selectedMeridiem.engVal : undefined,
					selectedHour = _this.getItemWithClass("hours", "lyteTimePickerItemSelected"),
					selectedHourVal = selectedHour ? parseInt(selectedHour.engVal) : undefined,
					selectedMinute = _this.getItemWithClass("minutes", "lyteTimePickerItemSelected"),
					selectedMinuteVal = selectedMinute ? parseInt(selectedMinute.engVal) : undefined,
					value = listComp && parseInt(listComp.engVal),
					secVal = (_class == "minutes" && selectedHour) ? parseInt(selectedHour.engVal) : undefined,//only for setting seconds
					data = _this.data,
					minutesHide = data.minutesHide,
					secondsHide = data.secondsHide,
					hoursHide = data.hoursHide,
					timeFormat = data.ltPropTimeFormat,
					nextDay = data.ltPropStartTime && data.ltPropEndTime && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(data.ltPropStartTime, timeFormat), timeFormat).fromNow(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(data.ltPropEndTime, timeFormat), timeFormat)).past,
					hideDropdownValues = function (start, end, minClass, limit) {
						var hideArr = [],
							startTime = start.value,
							endTime = end.value,
							meriStart = start.meridiem,
							meriEnd = end.meridiem,
							isValid = function (value) {
								return (value != undefined && (typeof value == 'number' ? !isNaN(value) : true));
							},
							isNextDay = function (value, start, end) {
								return isValid(value) ? start == end && start == value : true;
							},
							checkOrder = function (index) {
								var value = [[selectedMeridiemVal, meriStart, meriEnd], [selectedHourVal, start.hour, end.hour], [selectedMinuteVal, start.min, end.min]];
								for (var i = 0; i <= index; i++) {
									var item = value[i];
									if (isValid(item[0])) {
										if (!isNextDay(item[0], item[1], item[2])) {
											return false;
										}
									}
								};
								return true;
							};

						if (data.ltPropStartTime && data.ltPropEndTime && nextDay && (_class == "meridiems" && checkOrder(0) || (_class == "hours" && checkOrder(1)) || (_class == "minutes" && checkOrder(2)))) {
							hideArr = _this.modifyVal(endTime, startTime);
						} else {
							if ((isValid(start.hour) ? start.hour == (isValid(secVal) ? secVal : value) : true) && (isValid(start.min) ? start.min == value : true) && (selectedMeridiemVal ? selectedMeridiemVal == meriStart : true)) {
								hideArr = _this.modifyVal(0, startTime);
								if (minClass == "hours" && hideArr.length) {
									hideArr.push("12");
								}
							}
							if ((isValid(end.hour) ? end.hour == (isValid(secVal) ? secVal : value) : true) && (isValid(end.min) ? end.min == value : true) && (selectedMeridiemVal ? selectedMeridiemVal == meriEnd : true)) {
								hideArr = hideArr.concat(_this.modifyVal(endTime, limit));
							}
						}
						data[minClass].forEach(item => {
							_this.alterObjUtils(item, ["class", "disabled"], [item.class.replace(" lyteTimePickerBlur", ""), "false"]);
						})
						_this.blurItems(hideArr, minClass);
					};
				hoursHide && _class == "meridiems" && hideDropdownValues(hoursHide.start, hoursHide.end, "hours", 11);
				minutesHide && _class == "hours" && hideDropdownValues(minutesHide.start, minutesHide.end, "minutes", 59);
				secondsHide && _class == "minutes" && hideDropdownValues(secondsHide.start, secondsHide.end, "seconds", 59);
			}
		}
		return retVal;
	}

    setValuesManually(activateUnits, overRide, from, manualValue) {
		var _this = this,
			data = _this.data,
			format = data.ltPropTimeFormat,
			time = manualValue || this.toEng(data.ltPropValue, format),
			moment = time ? _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(time, format)/*$L.moment(time, format, { i18n: data.ltPropI18n, number_conversion: data.ltPropConvertNumbers })*/ : _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment().startOf('day'),
			split = moment.parseFormat(format),
			curFormat = data.curFormat,
			dispHour, dispMin, dispSec, dispMeri, focusElem, change, hh,
			getAvailComp = function (__class, cmpVal) {//input or first available li in ul
				var curData = data[__class].filter(item => { return (item.disabled == "false") }),
					prevSelected = curData.filter(item => { return (item.selected == "true") }),
					retVal;
				if (curData.length == 0) {
					return false
				}
				if (!manualValue && prevSelected.length) {
					retVal = prevSelected[0];
				} else {
					var curObj,
						retDiff = function (a, s) {
							return Math.abs(parseInt(a) - parseInt(s));
						};
					curData.every(item => {
						var curval = item.engVal;
						if (curval == cmpVal) {
							curObj = item;
							return
						} else if (data.ltPropInterval[__class.replace('s', '')] && __class != "meridiems" && (!curObj || retDiff(curval, cmpVal) < retDiff(cmpVal, curObj.engVal))) {
							curObj = item;
						}
						return true;
					});
					if (!curObj) {
						var start = curData[0].engVal;
						if (((hh && start == '12') ? 0 : start) > ((hh && cmpVal == '12') ? 0 : cmpVal)) {
							curObj = curData[0];
						} else {
							curObj = curData[curData.length - 1];
						}
					}
					retVal = curObj;
				}
				return retVal;
			};
		split.forEach(item => {
			var curForm = item.format.val,
				val = moment.format(curForm);
			switch (curForm) {
				case "HH":
				case "hh": {
					dispHour = val;
					hh = curForm == 'hh';
					break;
				}
				case "mm": {
					dispMin = val;
					break
				}
				case "ss": {
					dispSec = val;
					break;
				}
				case "A":
				case "a": {
					dispMeri = val;
					break
				}
			}
		});
		var hideCall = {
			meridiems: { curComp: dispMeri, overRide: (curFormat == 12 && !dispMeri) },
			hours: { curComp: dispHour, overRide: (!curFormat && dispMin) },
			minutes: { curComp: dispMin, overRide: (!curFormat && !dispMin && dispSec) },
			seconds: { curComp: dispSec, overRide: undefined }
		}
		activateUnits.forEach(item => {
			var getVal = hideCall[item],
				avail = getAvailComp(item, getVal.curComp),
				curOverRide = overRide && getVal.overRide;
			if (avail || curOverRide) { // This is used when only minutes and seconds are available
				if (!this.dropDownChanges(avail, item, curOverRide, from)) {
					change = true;
				}
			}
		})
		focusElem = this.dropDown.querySelector(".lyteTimePickerItemSelected");
		(from == "start") && focusElem && focusElem.focus({ preventScroll: true });
		this.setAriaTime(this.setDropVal(true));
		return change;
	}

    dropDownValClick(button, curUnit, evt) {
		if (button) {
			this.getMethods("onCustomButtonClick") && this.executeMethod("onCustomButtonClick", evt, curUnit, this.$node);
			var purpose = curUnit.getAttribute("purpose");
			if (purpose == "ok") {
				this.setDropVal(false, evt);
			} else if (purpose == "cancel") {
				this.hideDropDownVal(true, evt, "ok");
			}
		} else {
			var setArr = ["meridiems", "hours", "minutes", "seconds"],
				_class = curUnit.getAttribute("data-unit"),
				selected = this.data[_class][curUnit.getAttribute("data-index")];
			setArr.splice(0, setArr.indexOf(_class) + 1);
			this.updDropVal(selected, _class, setArr);
			// this.dropDownChanges(selected, _class) && setArr.splice(0, setArr.indexOf(_class) + 1);
			// setArr.length != 4 && setArr.length != 0 && this.setValuesManually(setArr);
		}
	}

    fixSelection(start, return_field) {
		var _this = this,
			data = _this.data,
			format = data.ltPropTimeFormat,
			moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(data.ltPropValue, format), format),
			input = this.input,
			fn = function (moment, split) {
				var len = split.length,
					finished = 0,
					prev = 0;

				for (var i = 0; i < len; i++) {
					var cur = split[i],
						format = cur.format.val,
						// converted = moment[ns](format),
						__start = finished + cur.index - prev,
						__end = __start + /*converted.length*/2;

					if (__start <= start && start <= __end) {
						if (return_field) {
							return cur;
						}
						return {
							start: __start,
							end: __end
						}
					}

					finished = __end;
					prev = cur.index + format.length;
				}

			};

		// this.__start = this.__end = start;

		var split = moment.parseFormat(format),
			first_match = fn(moment, split);

		if (return_field) {
			return first_match;
		}

		if (first_match) {
			input.selectionStart = first_match.start;
			input.selectionEnd = first_match.end;
			return true;
		}

		return false;

	}

    freezeLayer(open) {
		if (this.data.ltPropFreeze) {
			var freezeElem = document.getElementById("lyteTimePickerFreezeLayer");
			if (!freezeElem) {
				freezeElem = document.createElement('div');
				freezeElem.setAttribute('id', 'lyteTimePickerFreezeLayer');
				window._lyteUiUtils.appendChild(document.body, freezeElem);
			}
			document.body.classList[open ? "add" : "remove"]("lyteTimePickerOpenFreeze");
		}
	}

    setBoundary(inputDim, windowHeight, windowWidth) {
		var boundary = this.data.ltPropBoundary,
			inBoundary = this.data.inBoundary,
			top = boundary.top || 0,
			bottom = boundary.bottom || windowHeight,
			left = boundary.left || 0,
			right = boundary.right || windowWidth;
		if (inputDim.bottom < top || inputDim.top > bottom || inputDim.right < left || inputDim.left > right) {
			if (inBoundary) {
				this.hideDropDownVal(true, undefined, "ok", true);
				this.setData("inBoundary", false);
			}
		} else if (!inBoundary) {
			this.hideDropDownVal(false, undefined, undefined, true);
			this.setData("inBoundary", true);
		}
	}

    setDropdownDim(evt, start) {
		var dropDown = this.dropDown,
			dropDownField = dropDown.querySelector(".lyteTimePickerDropdownValues"),
			fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom);
		if (evt && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(evt.target).closest(".lyteTimePickerUl").length) {
			return;
		}
		dropDown.style.bottom = "";
		dropDownField.style.height = "";
		fastdom.measure(function () {
			var scrolledY = window.pageYOffset || document.documentElement.scrollTop,
				scrolledX = window.pageXOffset || document.documentElement.scrollLeft,
				elementBCR = this.$node.getBoundingClientRect(),
				dropDownTransf = getComputedStyle(dropDown).transform.match(/matrix\((.+)\)/),
				dropDownBCR = dropDown.getBoundingClientRect(),
				dropDownHeight = dropDownBCR.height + (Array.isArray(dropDownTransf) ? Math.abs(dropDownTransf[1].split(', ')[5]) : 0),
				dropDownFeildsBcr = getComputedStyle(dropDownField),
				dropDownFeildsHeight = dropDownField.offsetHeight - parseInt(dropDownFeildsBcr.paddingTop) - parseInt(dropDownFeildsBcr.paddingBottom),
				windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
				windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
				inputDim = this.inputField.getBoundingClientRect(),
				bottomAvailHeight = windowHeight - inputDim.bottom,
				data = this.data,
				minFeildHeight = (data.ltPropDropdownMinHeight ? data.ltPropDropdownMinHeight : _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dropDown).find('li')[0].offsetHeight) + data.paddingTop,
				inline = data.ltPropInline,
				bToBody = !inline && data.ltPropBindToBody,
				dropdownPositionLeft = data.ltPropDropdownAlignPosition == 'left',
				$dropDown = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dropDown);
			!start && this.setBoundary(inputDim, windowHeight, windowWidth)
			fastdom.mutate(function () {
				if (data.inBoundary) {
					var setToTop = function () {
						dropDown.style.top = "";
						if (bToBody) {
							dropDown.style.bottom = windowHeight - (scrolledY + inputDim.top) + "px";
						} else {
							dropDown.style.bottom = inputDim.height + "px";
						}
						topSide = true;
					},
						valChange,
						topSide;

					if (inline && !dropdownPositionLeft) {
						dropDown.style.left = elementBCR.width - dropDownBCR.width + "px";
					}

					if (bToBody) {
						dropDown.style.top = scrolledY + elementBCR.top + elementBCR.height + "px";
						dropDown.style.left = scrolledX + elementBCR.left + (dropdownPositionLeft ? 0 : elementBCR.width - dropDownBCR.width) + "px";
						valChange = true;
					}

					if (bottomAvailHeight < dropDownHeight) {
						if (inputDim.top > dropDownHeight) {
							$dropDown.removeClass("lyteDropdownSizeChange");
							setToTop();
						} else {//>=
							$dropDown.addClass("lyteDropdownSizeChange");
							if (bottomAvailHeight > inputDim.top) {
								var val = dropDownFeildsHeight - (dropDownHeight - bottomAvailHeight);
							} else {
								setToTop();
								var val = dropDownFeildsHeight - (dropDownHeight - inputDim.top);
							}
							dropDownField.style.height = (val > minFeildHeight ? val : minFeildHeight) + "px";
						}
						valChange = true;
					} else {
						$dropDown.removeClass("lyteDropdownSizeChange");
					}
					topSide ? $dropDown.addClass("lyteDropdownTopSide") : $dropDown.removeClass("lyteDropdownTopSide");
				}
			}.bind(this));
		}.bind(this));

	}

    inputClick() {
		if (this.isValid()) {
			_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
				this.fixSelection(this.input.selectionStart);
			}.bind(this))
		}
	}

    counterVal(type, manual) {
		var data = this.data;
		if (this.isValid() && (manual ? event.touches.length == 1 : true) && (data.ltPropReadonly ? data.ltPropAllowCounter : true)) {
			var fn = function () {
				this.inputKeys({ key: type ? 'ArrowUp' : 'ArrowDown', preventDefault: function () { } }, true);
			}.bind(this);
			event.preventDefault();
			this.input.focus();
			this.inputClick();
			if (type == "stop") {
				clearInterval(this.counterTime);
				document.removeEventListener("mouseup", this.counterRef);
				delete this.counterRef;
				delete this.counterTime;
			} else {
				fn();
				if (!manual) {
					clearInterval(this.counterTime);
					document.removeEventListener("mouseup", this.counterRef);
					this.counterRef = this.counterVal.bind(this, "stop", false);
					document.addEventListener("mouseup", this.counterRef);
					this.counterTime = setInterval(fn, 500);
				}
			}
		}
	}

    modifyVal(start, end, range, type, __class, form, addUnit, ind) {
		var getConv = function (val) {
			var strVal = JSON.stringify(val);
			return (strVal.length == 1 ? "0" + strVal : strVal);
		},
			moment = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(getConv(start), form),
			retArr = [],
			inc = range ? range : 1;
		for (var i = start; i <= end; i += inc) {
			var cur_val = (type == "obj") ? this.toOtherLang(moment, form) : getConv(i),
				alt_val = (type == "obj") ? { index: ind++, value: cur_val, selected: "false", disabled: "false", class: __class, format: form, engVal: moment.format(form) } : cur_val;
			retArr.push(alt_val);
			moment.add(inc, addUnit);
		}
		return retArr;
	}

    setUnitValues() {
		var data = this.data,
			format = data.ltPropTimeFormat,
			curTime = this.toEng(data.ltPropValue, format),
			startTime = data.ltPropStartTime,
			endTime = data.ltPropEndTime,
			interval = data.ltPropInterval,
			i18n = data.ltPropI18n,
			refresh = data.dropdownRefresh,
			split = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(curTime, format).parseFormat(format),
			am = 'AM',
			pm = 'PM',
			startMoment,
			availTimeUnits = {},
			endMoment,
			hide = {},
			setHourData = function (curFormat, start, end, timeFormat, type) {
				startMoment = this.toEng(startTime, format) || _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(start, curFormat);
				endMoment = this.toEng(endTime, format) || _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(end, curFormat);
				startMoment = (typeof (startMoment) == "string") ? _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(startMoment, format) : startMoment;
				endMoment = (typeof (endMoment) == "string") ? _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(endMoment, format) : endMoment;
				availTimeUnits.hour = type;
				this.setData("curFormat", timeFormat);
			}.bind(this);
		if (refresh) {
			split.forEach(item => {
				var cur_form = item.format.val;
				switch (cur_form) {
					case "hh": {
						setHourData("hh:mm:ss A", "12:00:00 AM", "11:59:59 PM", 12, "hh");
						var tempArr = /*interval.hour ? (11 % interval.hour == 0) : true) ?*/ this.modifyVal(12, 12, interval.hour, "obj", "lyteTimePickerHour", "hh", "hours", 0) /*: []*/;
						this.setData("hours", tempArr.concat(this.modifyVal(interval.hour || 1, 11, interval.hour, "obj", "lyteTimePickerHour", "hh", "hours", tempArr.length ? 1 : 0)));
						break;
					}
					case "HH": {
						setHourData("HH:mm:ss", "00:00:00", "23:59:59", 24, "HH");
						this.setData("hours", this.modifyVal(0, 23, interval.hour, "obj", "lyteTimePickerHour", "HH", "hours", 0));
						break;
					}
					case "mm": {
						availTimeUnits.min = "mm";
						this.setData("minutes", this.modifyVal(0, 59, interval.minute, "obj", "lyteTimePickerMinute", "mm", "minutes", 0));
						break;
					}
					case "ss": {
						availTimeUnits.sec = "ss";
						this.setData("seconds", this.modifyVal(0, 59, interval.second, "obj", "lyteTimePickerSecond", "ss", "seconds", 0));
						break;
					}
					case "A": {
						availTimeUnits.meri = "A";
						break;
					}
					case "a": {
						availTimeUnits.meri = "a";
						am = 'am';
						pm = 'pm';
						break;
					}
				}
			});
			if (!availTimeUnits.hour) {
				availTimeUnits.meri ? setHourData("hh:mm:ss A", "12:00:00 AM", "11:59:59 PM", 12, "hh") : setHourData("HH:mm:ss", "00:00:00", "23:59:59", 24, "HH");
				availTimeUnits.special = availTimeUnits.hour;
				this.setData("curFormat", undefined);
				delete availTimeUnits.hour;
			}
			availTimeUnits.meri && (availTimeUnits.hour == "hh") && this.setData("meridiems", [{ index: 0, value: i18n ? window._lyteUiUtils.i18n(am) : am, selected: "false", disabled: "false", class: "lyteTimePickerMeridiem", format: availTimeUnits.meri, engVal: am }, { index: 1, value: i18n ? window._lyteUiUtils.i18n(pm) : pm, selected: "false", disabled: "false", class: "lyteTimePickerMeridiem", format: availTimeUnits.meri, engVal: pm }]);
			if (data.ltPropStartTime || data.ltPropEndTime) {
				var hourStart = availTimeUnits.hour && startMoment && parseInt(startMoment.format(availTimeUnits.hour)),
					minStart = availTimeUnits.min && startMoment && parseInt(startMoment.format("mm")),
					secStart = availTimeUnits.sec && startMoment && parseInt(startMoment.format("ss")),
					hourEnd = availTimeUnits.hour && endMoment && parseInt(endMoment.format(availTimeUnits.hour)),
					minEnd = availTimeUnits.min && endMoment && parseInt(endMoment.format("mm")),
					secEnd = availTimeUnits.sec && endMoment && parseInt(endMoment.format("ss")),
					minHideObj = { start: { hour: hourStart, value: minStart - 1 }, end: { hour: hourEnd, value: minEnd + 1 } },
					secHideObj = { start: { hour: hourStart, min: minStart, value: secStart - 1 }, end: { hour: hourEnd, min: minEnd, value: secEnd + 1 } },
					normRange = endMoment.fromNow(startMoment),
					hourHideObj;
				if (availTimeUnits.hour == "HH") {
					if (normRange.past || normRange.value == 0) {
						hide.arr = this.modifyVal(0, hourStart - 1).concat(this.modifyVal(hourEnd + 1, 23));
					} else if ((startMoment.fromNow(endMoment)).past) {
						hide.arr = this.modifyVal(hourEnd + 1, hourStart - 1);
					}
					hide.unit = "hours";
				} else if (availTimeUnits.hour == "hh") {
					var meriStart = startMoment.format(availTimeUnits.meri) || am,
						meriEnd = endMoment.format(availTimeUnits.meri) || am;
					secHideObj.start.meridiem = minHideObj.start.meridiem = meriStart;
					secHideObj.end.meridiem = minHideObj.end.meridiem = meriEnd;
					hourHideObj = { start: { meridiem: meriStart, value: (hourStart == 12) ? -1 : hourStart - 1 }, end: { meridiem: meriEnd, value: (hourEnd == 12) ? 1 : hourEnd + 1 } };
					if (meriStart == meriEnd && (normRange.past || normRange.value == 0)) {
						hide.arr = [(meriStart == am) ? pm : am];
					}
					hide.unit = "meridiems";
					availTimeUnits.hour && this.setData("hoursHide", hourHideObj);
				}
				availTimeUnits.min && this.setData("minutesHide", minHideObj)
				availTimeUnits.sec && this.setData("secondsHide", secHideObj)
				this.blurItems(hide.arr, hide.unit);//these are done here because these are not going to change until dropDown button is pressed// these are the start
			}
			this.setData("dropdownRefresh", false);
		} else {//unselect all item
			var unselect = function (obj) {
				obj.forEach(item => {
					item.selected = "false";
				});
			};
			["hours", "minutes", "seconds", "meridiems"].forEach(unit => {
				var unitData = this.data[unit];
				unitData.length && unselect(unitData);
			});
		}
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown).removeClass("lyteTimePickerDropdownNone");
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node).addClass("lyteTimePickerDropdownOpened");
		this.setDropdownDim(undefined, true);
		if (!data.paddingTop) {
			this.setData("paddingTop", parseFloat(getComputedStyle(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.dropDown).find('.lyteTimePickerUl')[0]).paddingTop));
		}
	}

    dropDownButtonClick(evt) {
		if (this.getMethods("onBeforeOpen") && this.executeMethod("onBeforeOpen", evt, this.$node) == false) {
			return;
		}
		this.setUnitValues();
		_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {//fastdom is because updtDropDownDim called after setValuesManually, so that if the values are 59 and the dropdown is short, it is not in view
			_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
				this.setValuesManually(["meridiems", "hours", "minutes", "seconds"], true, "start");
				this.$node.querySelector(".lytetimePickerButton").setAttribute("aria-expanded", true);
				this.freezeLayer(true);
				this.getMethods("onOpen") && this.executeMethod("onOpen", evt, this.$node);
			}.bind(this));
		}.bind(this));
	}

    static observers(arg1) {
        return Object.assign(super.observers({
			valueChange: function (arg) {
				this.setData("ltPropConvertedValue", this.toEng(this.data.ltPropValue, this.data.ltPropTimeFormat));
				arg && this.getMethods("onValueChange") && this.executeMethod("onValueChange", arg, this.$node);
			}.observes('ltPropValue').on('didConnect'),

			formatChange: function (arg) {
				var oldFormat = arg.oldValue,
					newFormat = arg.newValue,
					changeFormat = function (data) {
						var value = this.data[data];
						value && ((data != 'ltPropValue') || this.isValid(oldFormat)) && this.setData(data, this.toOtherLang(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment(this.toEng(value, oldFormat), oldFormat).format(newFormat), newFormat), newFormat));
					}.bind(this);
				changeFormat('ltPropValue');
				changeFormat('ltPropStartTime');
				changeFormat('ltPropEndTime');
				this.refreshDropdown();
			}.observes('ltPropTimeFormat'),

			rangeChange: function () {
				this.refreshDropdown();
				this.validateRefresh();
			}.observes('ltPropStartTime', 'ltPropEndTime'),

			disabled: function () {
				this.disableElem("ltPropDisabled", " lyteTimePickerDisabled")
			}.observes('ltPropDisabled').on('init'),

			readOnly: function () {
				this.disableElem("ltPropReadonly", " lyteTimePickerReadonly");
			}.observes('ltPropReadonly').on('init'),

			bindToBody: function () {
				var data = this.data;
				if (!data.ltPropInline) {//after setting inline to true it can't be set to false
					if (data.ltPropBindToBody) {
						var dropDown = this.dropDown;
						dropDown.parent = this.$node;
						this.dropDown = dropDown;
						window._lyteUiUtils.appendChild(document.body, dropDown);
					} else if (!data.ltPropBindToBody && this.dropDown) {
						document.body.removeChild(this.dropDown);
						delete this.dropDown.parent;
						delete this.dropDown;
					}
				}

			}.observes('ltPropInline', 'ltPropBindToBody').on('didConnect')
		}), arg1);
	}

    _() {
        _;
    }
}

LyteTimePickerComponent._template = "<template tag-name=\"lyte-time-picker\"> <div class=\"lyteTimePickerField\" onkeydown=\"{{action('inputKeyDown',event,this)}}\"> <input value=\"{{lbind(ltPropValue)}}\" placeholder=\"{{ltPropPlaceholder}}\" id=\"{{ltPropId}}\" class=\"lyteTimePickerInput {{ltPropClass}}\" name=\"{{ltPropName}}\" readonly=\"{{ltPropReadonly}}\" disabled=\"{{ltPropDisabled}}\" aria-label=\"{{ltPropAriaAttributes.input}}\" aria-invalid=\"{{invalidValue}}\" onfocus=\"{{action('inputFocus',event,this,true)}}\" onblur=\"{{action('inputFocus',false)}}\" oninput=\"{{action('inputVal',event)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropDropdown}}\" is=\"case\" lc-id=\"lc_id_0\"> <button class=\"lytetimePickerButton\" aria-label=\"{{ltPropAriaAttributes.icon}}\" disabled=\"{{ltPropDisabled}}\" aria-expanded=\"false\" aria-haspopup=\"true\" aria-controls=\"{{randId}}\" tabindex=\"0\"> <span class=\"lyteTimePickerBtnIcon\"></span> </button> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropCounter}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"lytetimePickerCounterButtons\"> <button class=\"lytetimePickerIncButton\" aria-label=\"{{ltPropAriaAttributes.inc}}\" disabled=\"{{ltPropDisabled}}\" onmousedown=\"{{action('counterKeys',true)}}\" ontouchstart=\"{{action('counterKeys',true,true)}}\" tabindex=\"0\" role=\"spinbutton\"> <span class=\"lyteTimePickerIncIcon\"></span> </button> <button class=\"lytetimePickerDecButton\" aria-label=\"{{ltPropAriaAttributes.dec}}\" disabled=\"{{ltPropDisabled}}\" onmousedown=\"{{action('counterKeys')}}\" ontouchstart=\"{{action('counterKeys',false,true)}}\" tabindex=\"0\" role=\"spinbutton\"> <span class=\"lyteTimePickerDecIcon\"></span> </button> </div> </template></template></div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropDropdown}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-time-picker-dropdown id=\"{{randId}}\" class=\"lyteTimePickerDropdownNone {{ltPropDropdownClass}}\" onkeydown=\"{{action('dropDownKeyDown',event,this)}}\"> <div class=\"lyteTimePickerDropdownValues\" onfocusin=\"{{action('dropDownValueFocus',event,true)}}\" onfocusout=\"{{action('dropDownValueFocus',event,false)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{hours.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <ul class=\"lyteTimePickerUl\" data-unit=\"hours\" aria-label=\"{{ltPropAriaAttributes.hour}}\"> <template items=\"{{hours}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <li class=\"{{item.class}}\" tabindex=\"0\" data-index=\"{{item.index}}\" data-unit=\"hours\" role=\"options\" aria-selected=\"{{item.selected}}\" aria-disabled=\"{{item.disabled}}\" aria-label=\"{{item.value}}\" data-value=\"{{item.value}}\">{{item.value}}</li> </template> </ul> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{minutes.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <ul class=\"lyteTimePickerUl\" data-unit=\"minutes\" aria-label=\"{{ltPropAriaAttributes.minute}}\"> <template items=\"{{minutes}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <li class=\"{{item.class}}\" tabindex=\"0\" data-index=\"{{item.index}}\" data-unit=\"minutes\" role=\"options\" aria-selected=\"{{item.selected}}\" aria-disabled=\"{{item.disabled}}\" aria-label=\"{{item.value}}\" data-value=\"{{item.value}}\">{{item.value}}</li> </template> </ul> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{seconds.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <ul class=\"lyteTimePickerUl\" data-unit=\"seconds\" aria-label=\"{{ltPropAriaAttributes.second}}\"> <template items=\"{{seconds}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <li class=\"{{item.class}}\" tabindex=\"0\" data-index=\"{{item.index}}\" data-unit=\"seconds\" role=\"options\" aria-selected=\"{{item.selected}}\" aria-disabled=\"{{item.disabled}}\" aria-label=\"{{item.value}}\" data-value=\"{{item.value}}\">{{item.value}}</li> </template> </ul> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{meridiems.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <ul class=\"lyteTimePickerUl\" data-unit=\"meridiems\" aria-label=\"{{ltPropAriaAttributes.meridiem}}\"> <template items=\"{{meridiems}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <li class=\"{{item.class}}\" tabindex=\"0\" data-index=\"{{item.index}}\" data-unit=\"meridiems\" role=\"options\" aria-selected=\"{{item.selected}}\" aria-disabled=\"{{item.disabled}}\" aria-label=\"{{item.value}}\" data-value=\"{{item.value}}\">{{item.value}}</li> </template> </ul> </template></template></div> <div class=\"lyteTimePickerDropdownButton\"> <template items=\"{{ltPropButton}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-button class=\"lyteTimePickerDropdownButtonItem\" purpose=\"{{item.purpose}}\" lt-prop=\"{{stringify(item.properties)}}\" lt-prop-aria-button=\"{{item.properties.ariaButton}}\" onfocus=\"{{action('customButtonFocus',event,this)}}\"> <template is=\"registerYield\" yield-name=\"text\"> {{item.text}} </template> </lyte-button> </template> </div> </lyte-time-picker-dropdown></template></template></template>";;
LyteTimePickerComponent._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,1],"cn":"lc_id_0"},{"t":"f","p":[0,3,1],"dN":[{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1]}],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteTimePickerComponent._observedAttributes = [
    "ltPropValue",
    "ltPropTimeFormat",
    "ltPropStartTime",
    "ltPropEndTime",
    "ltPropButton",
    "ltPropInterval",
    "ltPropId",
    "ltPropClass",
    "ltPropName",
    "ltPropPlaceholder",
    "ltPropDisabled",
    "ltPropReadonly",
    "ltPropAllowDropdown",
    "ltPropInline",
    "ltPropBindToBody",
    "ltPropBoundary",
    "ltPropI18n",
    "ltPropConvertNumbers",
    "ltPropConvertedValue",
    "ltPropFreeze",
    "ltPropAriaAttributes",
    "ltPropValidate",
    "ltPropValidateType",
    "ltPropValidateOn",
    "ltPropValid",
    "ltPropDropdownMinHeight",
    "ltPropDropdown",
    "ltPropCounter",
    "ltPropAllowCounter",
    "ltPropInputInterval",
    "ltPropInputIntervalSync",
    "ltPropDropdownClass",
    "ltPropDropdownAlignPosition",
    "ltPropPreventInvalid",
    "hours",
    "minutes",
    "seconds",
    "meridiems",
    "minutesHide",
    "hoursHide",
    "secondsHide",
    "curFormat",
    "randId",
    "inBoundary",
    "dropdownRefresh"
];

(function () {
	var updtDropDownDim = function (evt) {
		Array.from(document.getElementsByTagName("lyte-time-picker-dropdown")).forEach(dropItem => {
			var dropDown = (dropItem.closest("lyte-time-picker") || dropItem.parent).component;
			if ((!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dropItem).hasClass("lyteTimePickerDropdownNone")) || !dropDown.data.inBoundary) {
				dropDown.setDropdownDim(evt);
			}
		})
	};

	['scroll', 'resize', 'orientationchange'].forEach(item => {
		window._lyteUiUtils.addEvent(window, item, function (evt) {
			item == "orientationchange" ? setTimeout(updtDropDownDim(evt), 500) : updtDropDownDim(evt);
		})
	})

	window._lyteUiUtils.addEvent(document, 'click', function (evt) {
		var target = evt.target,
			retClosest = function (ref) {
				return target.closest(ref);
			},
			dropDown = retClosest("lyte-time-picker-dropdown"),
			mainComp = ((dropDown && dropDown.parent) || retClosest("lyte-time-picker") || {}).component,
			hideDropDown = function (type) {
				Array.from(document.getElementsByTagName('lyte-time-picker')).forEach(item => {
					item.close();
				});
			};
		if (retClosest(".lyteTimePickerInput")) {
			hideDropDown();
			mainComp.inputClick();
		} else if (retClosest(".lytetimePickerButton")) {//if hide DropDown is given out it makes first cond always true
			var data = mainComp.data;
			if ((data.ltPropReadonly && !data.ltPropAllowDropdown) || data.ltPropDisabled) {
				return;
			}
			if (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(mainComp.dropDown).hasClass("lyteTimePickerDropdownNone")) {
				hideDropDown();
				mainComp.dropDownButtonClick(evt);
			} else {
				hideDropDown();
			}
		} else if (dropDown) {
			[".lyteTimePickerDropdownButtonItem", ".lyteTimePickerMeridiem", ".lyteTimePickerHour", ".lyteTimePickerMinute", ".lyteTimePickerSecond"].every((item, index) => {
				var closest = retClosest(item);
				if (closest) {
					mainComp.dropDownValClick((index == 0) && true, closest, evt);
					return;
				}
				return true;
			});
		} else {
			hideDropDown();
		}
	})
})();



LyteTimePickerComponent.register("lyte-time-picker", {
    hash: "LyteTimePickerComponent_6",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_3"
});

/***/ }),

/***/ 78349032:
/*!***********************************************************************!*\
  !*** ./node_modules/zcat-ui/components/javascript/zcat-datepicker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatDatepicker": () => (/* binding */ ZcatDatepicker)
/* harmony export */ });
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-calendar.js */ 18949561);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_time_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-time-picker.js */ 70631464);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-button.js */ 31055274);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_popover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-popover.js */ 17517222);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-input.js */ 20794005);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component.js */ 62316197);








class ZcatDatepicker extends _component_js__WEBPACK_IMPORTED_MODULE_5__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatDatepicker._template = "<template tag-name=\"zcat-datepicker\"> <lyte-popover id=\"simpleDateTimePickerPopover\" lt-prop-content-padding=\"0px\" lt-prop-show-close-button=\"false\" lt-prop-wrapper-class=\"calendarPopover\" lt-prop-origin-elem=\"#calendarPopoverInput\" lt-prop-type=\"box\" lt-prop-close-on-escape=\"false\"> <template is=\"registerYield\" yield-name=\"popover\"> <lyte-popover-content style=\"padding: 0px\"> <h1 class=\"zcat-text-14 zcat-color-dark1 zcat-pt-10 zcat-pl-20\"> Select Date </h1> <lyte-calendar id=\"simpleDatePicker\" lt-prop-header-type=\"dropdown\" lt-prop-current-date=\"{{lbind(selectedDate)}}\" lt-prop-format=\"DD/MM/YYYY\" lt-prop-month-header-format=\"MMM YYYY\" lt-prop-fill-rows=\"false\"></lyte-calendar> <h1 class=\"zcat-text-14 zcat-color-dark1 zcat-pl-20 zcat-pb-10\"> Select Time </h1> <lyte-time-picker style=\"padding: 0 0 20px 20px\" lt-prop-value=\"{{lbind(selectedTime)}}\" lt-prop-time-format=\"hh:mm:ss A\" lt-prop-button=\"[{&quot;text&quot;:&quot;Apply&quot;,&quot;purpose&quot;:&quot;ok&quot;}]\" lt-prop-aria-attributes=\"{&quot;input&quot;:&quot;Time Picker&quot;}\" lt-prop-id=\"simpleTimePicker\" lt-prop-interval=\"{&quot;hour&quot;:1,&quot;minute&quot;:1}\"></lyte-time-picker> <div class=\"zcat-calendar-footer\"> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"\" lt-prop-class=\"lyteTertiaryBtn\" onclick=\"{{action('resetCalendarData')}}\"> <template is=\"registerYield\" yield-name=\"text\">Reset</template> </lyte-button> <div class=\"zcat-dF zcat-align-center zcat-gap-10\"> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"secondary\" onclick=\"{{action('closeCalendar')}}\"> <template is=\"registerYield\" yield-name=\"text\">Close</template> </lyte-button> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"primary\" onclick=\"{{action('applyCalendarData')}}\"> <template is=\"registerYield\" yield-name=\"text\">Apply</template> </lyte-button> </div> </div> </lyte-popover-content> </template> </lyte-popover> <lyte-input id=\"calendarPopoverInput\" class=\"date-input-field\" lt-prop-width=\"300px\" lt-prop-appearance=\"box\" lt-prop-label=\"Select Date and Time\" lt-prop-placeholder=\"DD/MM/YYYY\" lt-prop-readonly=\"true\" lt-prop-value=\"{{dateTimePickerValue}}\" onclick=\"{{action('openCalendar')}}\"></lyte-input> </template><style>\n\n/* === Global base styles from reference css/zcat-datepicker.css === */\n.lyteDateRangePickerRow {\n  border: none;\n  box-shadow: none;\n  background: var(--zcat-datePicker-bg-default);\n}\n.lyteCalendarPopup {\n  background: var(--zcat-datePicker-bg-default);\n  border-radius: 1px;\n  border: none;\n  box-shadow: none;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-active);\n  border: 1px solid var(--zcat-inputField-border-default);\n  padding: 2px 22px 2px 4px;\n}\n.lyteCalDateSpan {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n}\n.lyteDateRPTempSelected .lyteCalDateSpan {\n  color: var(--zcat-datePicker-text-active);\n  position: relative;\n  z-index: 5;\n}\n.lyteDateRPFirstDateSelected .lyteCalDateSpan{\n  color: var(--zcat-datePicker-text-selected);\n  position: relative;\n  z-index: 5;\n}\n.lyteCalToday {\n  background: var(--zcat-datePicker-bg-default);\n  color: var(--zcat-datePicker-text-default);\n  border: none;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button:hover,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button.lyteDropButtonDown,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button:hover {\n  color: var(--zcat-inputField-text-active);\n  border: 1px solid var(--zcat-inputField-border-hover) !important;\n  padding: 2px 22px 2px 4px;\n}\n.lyteDateRPFirstDateSelected,\n.lyteDateRPFirstDateSelected::before,\n.lyteDateRPTempFirstDateSelected::before,.lyteDateRPTempFirstDateSelected{\n  background: var(--zcat-datePicker-number-bg-selected);\n  border-radius: 50%;\n  z-index: 1;\n}\n.lyteDateRPTempFirstDateSelected .lyteCalDateSpan,\n.lyteDateRPTempLastDateSelected .lyteCalDateSpan {\n  color: var(--zcat-datePicker-text-selected) !important;\n  position: relative;\n  z-index: 5;\n}\n.lyteDateRPLastDateSelected,\n.lyteDateRPLastDateSelected::before,\n.lyteDateRPTempLastDateSelected::before,.lyteDateRPLastDateSelected.lyteCalTableCell,.lyteDateRPTempLastDateSelected{\n  background: var(--zcat-datePicker-number-bg-selected) !important;\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected,\n.lyteDateRPFirstDateSelected:hover,\n.lyteDateRPLastDateSelected,\n.lyteDateRPLastDateSelected:hover {\n  border-color: none !important;\n  border-radius: 0;\n}\n.lyteDateRPFirstDateSelected,.lyteDateRPLastDateSelected,.lyteDateRPLastDateSelected:hover{\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected::after,.lyteDateRPTempFirstDateSelected::after,.lyteCalTableCell.lyteCalToday.lyteDateRPTempSelected::after{\n  left: 50%;\n  top: 0;\n  height: 30px;\n}\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempSelected::after{\n  left: 100%\n}\n.lyteDateRPTempFirstDateSelected::after, \n.lyteDateRPFirstDateSelected::after, \n.lyteDateRPMonthStartDate::after, \n.lyteDateRPTempSelected::after{\n  height: 30px;\n  width: 38px;\n}\n.lyteDateRPTempSelected,\n.lyteDateRPTempFirstDateSelected::after,\n.lyteDateRPFirstDateSelected::after,\n.lyteDateRPMonthStartDate::after,\n.lyteDateRPTempSelected::after,\n.lyteCalTableCell:hover,\n.lyteCalToday:hover {\n  background: var(--zcat-datePicker-number-bg-active);\n}\n.lyteDateRPMonthStartDate,\n.lyteDateRPMonthEndDate,\n.lyteDateRPTempSelected,.lyteDateRPFirstDateSelected::after,.lyteDateRangePickerRow .lyteDateRPTempSelected,.lyteDateRPTempSelected::after{\n  color: var(--zcat-datePicker-text-active) !important;\n  background: var(--zcat-datePicker-number-bg-active);\n}\n.lyteCalNav,\n.lyteCalNav:hover {\n  border: none;\n}\n.lyteCalDisableNav,.lyteDateRPLeftNav[aria-disabled=\"true\"],.lyteDateRPRightNav[aria-disabled=\"true\"]{\n  opacity: 1;\n  cursor: not-allowed;\n}\n.lyteCaldLft::before,\n.lyteCaldRgt::before{\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23101F3E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 6px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%) rotate(180deg);\n  z-index: 2;\n  opacity: 1;\n}\n.lyteCaldRgt::before{\n  transform: translate(-50%,-50%);\n}\n\n/* Default (light) mode */\nhtml[data-user-color-scheme=\"dark\"] .lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23EEEEEE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n/* Disabled nav (light mode) */\n.lyteCalDisableNav.lyteCaldLft::before,\n.lyteDateRPLeftNav[aria-disabled=\"true\"] .lyteCaldLft::before,\n.lyteCalDisableNav.lyteCaldRgt::before,\n.lyteDateRPRightNav[aria-disabled=\"true\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23A6B1C9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n/* Disabled nav (dark mode) */\nhtml[data-user-color-scheme=\"dark\"] .lyteCalDisableNav.lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteCalDisableNav.lyteCaldRgt::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteDateRPLeftNav[aria-disabled=\"true\"] .lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteDateRPRightNav[aria-disabled=\"true\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n.lyteCaldLft::after,.lyteCaldRgt::after{\n  content: '';\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50% , -50%);\n  z-index: 1;\n}\n.lyteCalNav:hover.lyteCaldLft::after,.lyteCalNav:hover.lyteCaldRgt::after{\n  cursor: pointer;\n  background-color: var(--zcat-btn-grey-bg-hover);\n}\n.lyteCalTableCellHeader {\n  font: var(--zcat-font-regular) var(--zcat-font-10-12) var(--zcat-font-family-primary);\n  color: var(--zcat-datePicker-text-days);\n}\n.lyteCalTableCell {\n  color: var(--zcat-datePicker-text-default);\n}\n.lyteCalTableCell.lyteCalDisabled{\n  color: var(--zcat-datePicker-text-disabled);\n  opacity: 1;\n}\n\n.lyteCalTableCell.lyteCalToday {\n  position: relative;\n  /* background: var(--zcat-datePicker-number-bg-active); */\n  color: var(--zcat-datePicker-text-active);\n  border: none;\n}\n.lyteDateRPFirstDateSelected.lyteCalTableCell.lyteCalToday::before,.lyteDateRPLastDateSelected.lyteCalTableCell.lyteCalToday::before{\n  content: '';\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: var(--zcat-datePicker-text-active);\n  border-radius: 50%;\n}\n.lyteDateRPLastDateSelected.lyteCalTableCell.lyteCalToday .lyteCalDateSpan,.lyteDateRPFirstDateSelected.lyteCalTableCell.lyteCalToday .lyteCalDateSpan{\n  position: relative;\n  z-index: 2;\n}\n/* .lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected::before,\n.lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPFirstDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPLastDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempFirstDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempLastDateSelected::before {\n  display: none;\n} */\n.lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected {\n  background: var(--zcat-datePicker-number-bg-active);\n  border: none;\n  z-index: 5;\n}\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPFirstDateSelected,\n.lyteDateRPLastDateSelected {\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPFirstDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPFirstDateSelected:hover,.lyteDateRPFirstDateSelected.lyteCalTableCell{\n  background-color: var(--zcat-datePicker-number-bg-active) !important;\n  border: none !important;\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected,.lyteDateRPFirstDateSelected.lyteCalTableCell{\n  border-radius: 50% !important;\n}\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPLastDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPTempLastDateSelected:hover {\n  border-radius: 50% !important;\n}\n.lyteCalToday.lyteDateRPTempFirstDateSelected,\n.lyteCalToday.lyteDateRPTempLastDateSelected,\n.lyteCalToday.lyteDateRPTempFirstDateSelected:hover,\n.lyteCalToday.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPTempLastDateSelected:hover {\n  background-color: var(--zcat-datePicker-number-bg-active) !important;\n  border-color: none !important;\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n.lyteDateRPTempLastDateSelected.lyteDateRPTempFirstDateSelected::after{\n  display: none;\n}\n.lyteDateRPMonthEndDate:first-of-type {\n  border-radius: 50%;\n}\n\n.dRPCalendar2 .lyteCalTableContainer {\n  border: none;\n}\n.lyteCalTableCell.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPMonthEndDate,\n.lyteDateRPTempSelected:last-of-type,\n.lyteCalTableCell.lyteDateRPTempSelected:last-of-type:hover {\n  border-radius: 0 50% 50% 0;\n}\n.lyteDateRPMonthStartDate{\n  border-radius: 50% 0 0 50%;\n}\n.lyteCalDisabled.lyteCalTableCell.lyteCalSel,\n.lyteCalTableCell.lyteCalSel,\n.lyteCalTableCell.lyteCalSel:hover {\n  background: var(--zcat-datePicker-number-bg-active);\n  color: var(--zcat-datePicker-text-selected);\n  border: none;\n  /* border-radius: 3px; */\n}\n/* .lyteCalTableCell.lyteCalSel:hover {\n  background: var(--zcat-color-white);\n  color: var(--zcat-color-dark1);\n  border: none;\n  border-radius: 4px;\n} */\n.lyteCalendarNavigator {\n  justify-content: space-between;\n  padding: 14px 14px 16px;\n  gap: 14px;\n}\n.lyteCalNav.lyteCaldLft {\n  order: 1;\n}\n.lyteCalNav.lyteCaldRgt {\n  order: 3;\n  margin: 0;\n}\n.lyteCalsCalMon {\n  display: flex;\n  gap: 14px;\n  flex-grow: unset;\n  order: 2;\n  width: calc(100% - 60px);\n}\n.lyteCalMonthDD,.lyteCalYearDD{\n  max-width: 100%;\n  width: 50%;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button:hover,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button.lyteDropButtonDown,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button:hover {\n  min-height: 24px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-exsm) var(--zcat-font-family-primary);\n  padding: 2px 22px 2px 4px;\n  border-radius: 4px;\n}\n.lyteCalendarPopup lyte-dropdown lyte-icon.dropdown{\n  top: 50%;\n  height: 12px;\n  width: 12px;\n}\nhtml[data-user-color-scheme=\"dark\"] .lyteCalendarPopup lyte-dropdown lyte-icon.dropdown{\n	background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%237988A8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.date-input-field .lyteField {\n  position: relative;\n}\n.date-input-field .lyteField::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%237988a8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 16px;\n  height: 16px;\n  background-repeat: no-repeat;\n}\nhtml[data-user-color-scheme=\"dark\"] .date-input-field .lyteField::after{\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%23888888' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.date-input-field .lyteField::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 6px 6px 0;\n  /* background-color: var(--zcat-color-grey6); */\n}\n.zcat-calendar-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-top: 1px solid var(--zcat-datePicker-border-line);\n}\n\n.lyteInputBox .lyteInputCalendarIcon {\n  position: absolute;\n  right: 0;\n  top: calc(50%);\n  transform: translateY(-50%);\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  background-color: transparent;\n  cursor: pointer;\n  -webkit-mask-image: none;\n}\n.lyteInputBox .lyteInputCalendarIcon::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%237988a8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: 10px;\n  background-color: none;\n  border-radius: 0 5px 5px 0;\n  width: 34px;\n  height: 34px;\n}\nhtml[data-user-color-scheme=\"dark\"] .lyteInputBox .lyteInputCalendarIcon::before{\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%23888888' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.lyteInputCalendar {\n  border-radius: 6px;\n  border: 1px solid var(--zcat-datePicker-border-default);\n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n  overflow: hidden;\n}\n.calendarPopover lyte-popover-freeze {\n  background-color: transparent !important;\n  opacity: 1 !important;\n}\n.lyteCalCurrentDate {\n  display: none;\n}\n\n/* Time Picker Css */\n.lyteTimePickerField {\n  border: 1px solid var(--zcat-inputField-border-default);\n  background: var(--zcat-inputField-bg-default);\n  border-radius: 4px;\n  position: relative;\n  width: 200px;\n}\nlyte-time-picker:hover .lyteTimePickerField,\n.lyteTimePickerField:hover {\n  border-color: var(--zcat-inputField-border-hover);\n}\nlyte-time-picker.lyteTimePickerInputFocused .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerDropdownOpened .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerInputFocused:hover .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerDropdownOpened:hover .lyteTimePickerField,\n.lyteTimePickerInputFocused .lyteTimePickerField,\n.lyteTimePickerDropdownOpened .lyteTimePickerField,\n.lyteTimePickerInputFocused .lyteTimePickerField:focus-within,\n.lyteTimePickerDropdownOpened .lyteTimePickerField:focus-within {\n  border-color: var(--zcat-inputField-border-active);\n}\n.lyteTimePickerField:focus-within,.lyteTimePickerField:hover:focus-within{\n  border-color: var(--zcat-inputField-border-active);\n}\n.lyteTimePickerDropdownValues{\n  gap: 0 16px;\n  margin: 14px 14px 0;\n}\n.lyteTimePickerInput{\n  padding: 8px;\n  height: 36px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n  border-radius: 6px;\n  color: var(--zcat-datePicker-text-default) !important;\n  background: var(--zcat-datePicker-bg-default);\n}\n\n.lyteTimePickerInput:hover{\n  background: var(--zcat-inputField-bg-hover);\n}\n\n.lyteTimePickerDropdownValues li {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 0 0 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-datePicker-text-default);\n  background: var(--zcat-datePicker-bg-default);\n}\n\n.lyteTimePickerDropdownValues li:hover{\n  cursor: pointer;\n  background-color: var(--zcat-datePicker-number-bg-hover);\n}\n\n.lyteTimePickerInput::placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteTimePickerInput:-ms-input-placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteTimePickerInput::-ms-input-placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lytetimePickerButton {\n  border-radius: 0px 4px 4px 0px;\n  /* background-color: var(--zcat-datePicker-bg-secondary);\n  position: relative;\n  width: 24px;\n  height: 24px; */\n  background-color: transparent;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  height: 100%;\n  position: absolute;\n}\n.lytetimePickerButton::after {\n  content: '';\n  display: inline-block;\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%237988A8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n  background-repeat: no-repeat;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n}\nhtml[data-user-color-scheme=\"dark\"] .lytetimePickerButton::after{\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23888888\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n}\n/* .lyteTimePickerField:hover .lytetimePickerButton::after{\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%237DA2FB\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n.lyteTimePickerBtnIcon{\n  display: none;\n}\n/* .lyteTimePickerField:hover .lytetimePickerButton::after {\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23101f3e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n\n/* .lyteTimePickerDropdownOpened .lyteTimePickerField .lytetimePickerButton::after,\n.lyteTimePickerDropdownOpened\n  .lyteTimePickerField:hover\n  .lytetimePickerButton::after,\n.lyteTimePickerInputFocused .lyteTimePickerField .lytetimePickerButton::after,\n.lyteTimePickerInputFocused\n  .lyteTimePickerField:hover\n  .lytetimePickerButton::after {\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%232a65f0\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n.lytetimePickerButton svg {\n  display: none;\n}\nlyte-time-picker-dropdown {\n  background: var(--zcat-datePicker-bg-default);\n  border: 1px solid var(--zcat-datePicker-border-default);\n  border-radius: 6px;\n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n  transform: translateY(1px);\n}\nlyte-time-picker-dropdown.lyteDropdownTopSide{\n  transform: translateY(-1px);\n}\n.lyteTimePickerUl {\n  padding: 0;\n  border: 0;\n  width: 32px;\n}\n.lyteTimePickerUl:last-of-type{\n  width: 26px;\n  overflow-y: hidden;\n}\n.lyteTimePickerDropdownValues li.lyteTimePickerItemSelected {\n  color: var(--zcat-datePicker-text-selected) !important;\n  background-color: var(--zcat-datePicker-number-bg-selected);\n}\n.lyteTimePickerItemSelected {\n  background-color: var(--zcat-datePicker-number-bg-selected);\n}\n.lyteTimePickerDropdownButton {\n  padding: 10px 14px;\n  border-top: 1px solid var(--zcat-datePicker-border-line);\n}\n.lyteTimePickerDropdownButton lyte-button .lyte-button{\n  padding: 0 6px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-sm) var(--zcat-font-family-primary);\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  background: var(--zcat-btn-fill-bg-primary-default);\n  color: var(--zcat-btn-fill-text-default);\n  border: none;\n}\n.lyteTimePickerDropdownButton lyte-button .lyte-button.lyteDefaultBtn:hover{\n  background: var(--zcat-btn-fill-bg-primary-hover);\n  border: none;\n}\n.zcat-timepicker-splitter {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.91683 7H11.0835\" stroke=\"%23A6B1C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.00016 11.0846L11.0835 7.0013L7.00016 2.91797\" stroke=\"%23A6B1C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n}\n.lyteCalTableCell.lyteCalSel.lyteCalToday, .lyteCalTableCell.lyteCalToday.lyteCalSel:hover{\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n/* .lyteCalTableCell.lyteCalToday{\n  color: unset !important;\n }\n .lyteCalTableCell.lyteCalToday::before{\n  display: none !important;\n }  */\n\n .calendarPopover .lytePopover{\n  background: var(--zcat-datePicker-bg-default);\n  border-color: var(--zcat-datePicker-border-default);\n }\n\n lyte-drop-button.textDrpdwn:hover{\n  background-color: var(--zcat-inputField-bg-hover);\n  border-color: var(--zcat-inputField-border-hover)!important\n }\n\n .calendarPopover .zcat-color-dark1{\n  color: var(--zcat-datePicker-text-headings) !important;\n }\n\n .lyteCalTableContainer{\n  border-spacing: 20px 16px;\n  padding: 0 14px;\n }\n\n.lyteInputCalendar.lyteInputCalendarUp {\n  transform: translateY(-1px);\n}\n.lyteInputCalendar.lyteInputCalendarDown {\n  transform: translateY(1px);\n}\n\n.lyteSm.lyteTimePickerInput{\n  padding: 8px 6px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n  height: 28px;\n}\n.lyteExsm.lyteTimePickerInput{\n  padding: 8px 4px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-small) var(--zcat-font-family-primary);\n  height: 24px;\n  font-size: 12px;\n}\n\n.lyteDateRPLeftNav,.lyteDateRPRightNav{\n  top: 20px;\n  width: 20px;\n  height: 20px;\n}\n.lyteDateRangePickerCol1 .lyteDateRPMonthHeader,.lyteDateRangePickerCol2 .lyteDateRPMonthHeader{\n  padding: 18px 40px 16px 54px;\n  text-align: unset;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.lyteDateRangePickerCol2 .lyteDateRPMonthHeader{\n  padding: 18px 54px 16px 40px;\n}\n\n.monthDD,.yearDD{\n  max-width: 100%;\n  width: 50%;\n  margin: 0;\n}\n\n.lytePopRightToOrig,.lytePopLeftToOrig{\n  transform: translateX(3px);\n}\n.lytePopBottomToOrig,.lytePopTopToOrig{\n  transform: translateY(3px);\n}\n\n.lyteDateRPTempSelected:last-of-type::after, .lyteDateRPFirstDateSelected:last-of-type::after, .lyteDateRPTempFirstDateSelected:last-of-type::after, .lyteDateRPTempLastDateSelected::after, .lyteDateRPLastDateSelected::after{\n  display: none;\n}\n\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected, .lyteDateRPTempLastDateSelected.lyteCalTableCell, .lyteDateRPLastDateSelected.lyteCalTableCell, .lyteDateRPTempLastDateSelected:hover, .lyteDateRPLastDateSelected:hover{\n  z-index: 5;\n}\n\n.lyteDateRPFirstDateSelected:has(+ .lyteDateRPLastDateSelected)::after,.lyteDateRPTempFirstDateSelected:has(+ .lyteDateRPTempLastDateSelected)::after{\n  width: 50px;\n}\n\n/* === Global base styles from reference css/zcat-datepicker.css === */\n.lyteDateRangePickerRow {\n  border: none;\n  box-shadow: none;\n  background: var(--zcat-datePicker-bg-default);\n}\n.lyteCalendarPopup {\n  background: var(--zcat-datePicker-bg-default);\n  border-radius: 1px;\n  border: none;\n  box-shadow: none;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-active);\n  border: 1px solid var(--zcat-inputField-border-default);\n  padding: 2px 22px 2px 4px;\n}\n.lyteCalDateSpan {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n}\n.lyteDateRPTempSelected .lyteCalDateSpan {\n  color: var(--zcat-datePicker-text-active);\n  position: relative;\n  z-index: 5;\n}\n.lyteDateRPFirstDateSelected .lyteCalDateSpan{\n  color: var(--zcat-datePicker-text-selected);\n  position: relative;\n  z-index: 5;\n}\n.lyteCalToday {\n  background: var(--zcat-datePicker-bg-default);\n  color: var(--zcat-datePicker-text-default);\n  border: none;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button:hover,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button.lyteDropButtonDown,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button:hover {\n  color: var(--zcat-inputField-text-active);\n  border: 1px solid var(--zcat-inputField-border-hover) !important;\n  padding: 2px 22px 2px 4px;\n}\n.lyteDateRPFirstDateSelected,\n.lyteDateRPFirstDateSelected::before,\n.lyteDateRPTempFirstDateSelected::before,.lyteDateRPTempFirstDateSelected{\n  background: var(--zcat-datePicker-number-bg-selected);\n  border-radius: 50%;\n  z-index: 1;\n}\n.lyteDateRPTempFirstDateSelected .lyteCalDateSpan,\n.lyteDateRPTempLastDateSelected .lyteCalDateSpan {\n  color: var(--zcat-datePicker-text-selected) !important;\n  position: relative;\n  z-index: 5;\n}\n.lyteDateRPLastDateSelected,\n.lyteDateRPLastDateSelected::before,\n.lyteDateRPTempLastDateSelected::before,.lyteDateRPLastDateSelected.lyteCalTableCell,.lyteDateRPTempLastDateSelected{\n  background: var(--zcat-datePicker-number-bg-selected) !important;\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected,\n.lyteDateRPFirstDateSelected:hover,\n.lyteDateRPLastDateSelected,\n.lyteDateRPLastDateSelected:hover {\n  border-color: none !important;\n  border-radius: 0;\n}\n.lyteDateRPFirstDateSelected,.lyteDateRPLastDateSelected,.lyteDateRPLastDateSelected:hover{\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected::after,.lyteDateRPTempFirstDateSelected::after,.lyteCalTableCell.lyteCalToday.lyteDateRPTempSelected::after{\n  left: 50%;\n  top: 0;\n  height: 30px;\n}\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempSelected::after{\n  left: 100%\n}\n.lyteDateRPTempFirstDateSelected::after, \n.lyteDateRPFirstDateSelected::after, \n.lyteDateRPMonthStartDate::after, \n.lyteDateRPTempSelected::after{\n  height: 30px;\n  width: 38px;\n}\n.lyteDateRPTempSelected,\n.lyteDateRPTempFirstDateSelected::after,\n.lyteDateRPFirstDateSelected::after,\n.lyteDateRPMonthStartDate::after,\n.lyteDateRPTempSelected::after,\n.lyteCalTableCell:hover,\n.lyteCalToday:hover {\n  background: var(--zcat-datePicker-number-bg-active);\n}\n.lyteDateRPMonthStartDate,\n.lyteDateRPMonthEndDate,\n.lyteDateRPTempSelected,.lyteDateRPFirstDateSelected::after,.lyteDateRangePickerRow .lyteDateRPTempSelected,.lyteDateRPTempSelected::after{\n  color: var(--zcat-datePicker-text-active) !important;\n  background: var(--zcat-datePicker-number-bg-active);\n}\n.lyteCalNav,\n.lyteCalNav:hover {\n  border: none;\n}\n.lyteCalDisableNav,.lyteDateRPLeftNav[aria-disabled=\"true\"],.lyteDateRPRightNav[aria-disabled=\"true\"]{\n  opacity: 1;\n  cursor: not-allowed;\n}\n.lyteCaldLft::before,\n.lyteCaldRgt::before{\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23101F3E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 6px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%) rotate(180deg);\n  z-index: 2;\n  opacity: 1;\n}\n.lyteCaldRgt::before{\n  transform: translate(-50%,-50%);\n}\n\n/* Default (light) mode */\nhtml[data-user-color-scheme=\"dark\"] .lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23EEEEEE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n/* Disabled nav (light mode) */\n.lyteCalDisableNav.lyteCaldLft::before,\n.lyteDateRPLeftNav[aria-disabled=\"true\"] .lyteCaldLft::before,\n.lyteCalDisableNav.lyteCaldRgt::before,\n.lyteDateRPRightNav[aria-disabled=\"true\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23A6B1C9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n/* Disabled nav (dark mode) */\nhtml[data-user-color-scheme=\"dark\"] .lyteCalDisableNav.lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteCalDisableNav.lyteCaldRgt::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteDateRPLeftNav[aria-disabled=\"true\"] .lyteCaldLft::before,\nhtml[data-user-color-scheme=\"dark\"] .lyteDateRPRightNav[aria-disabled=\"true\"] .lyteCaldRgt::before {\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'%3E%3Cpath d='M1.25 1.5L4.75 5L1.25 8.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n.lyteCaldLft::after,.lyteCaldRgt::after{\n  content: '';\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50% , -50%);\n  z-index: 1;\n}\n.lyteCalNav:hover.lyteCaldLft::after,.lyteCalNav:hover.lyteCaldRgt::after{\n  cursor: pointer;\n  background-color: var(--zcat-btn-grey-bg-hover);\n}\n.lyteCalTableCellHeader {\n  font: var(--zcat-font-regular) var(--zcat-font-10-12) var(--zcat-font-family-primary);\n  color: var(--zcat-datePicker-text-days);\n}\n.lyteCalTableCell {\n  color: var(--zcat-datePicker-text-default);\n}\n.lyteCalTableCell.lyteCalDisabled{\n  color: var(--zcat-datePicker-text-disabled);\n  opacity: 1;\n}\n\n.lyteCalTableCell.lyteCalToday {\n  position: relative;\n  /* background: var(--zcat-datePicker-number-bg-active); */\n  color: var(--zcat-datePicker-text-active);\n  border: none;\n}\n.lyteDateRPFirstDateSelected.lyteCalTableCell.lyteCalToday::before,.lyteDateRPLastDateSelected.lyteCalTableCell.lyteCalToday::before{\n  content: '';\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: var(--zcat-datePicker-text-active);\n  border-radius: 50%;\n}\n.lyteDateRPLastDateSelected.lyteCalTableCell.lyteCalToday .lyteCalDateSpan,.lyteDateRPFirstDateSelected.lyteCalTableCell.lyteCalToday .lyteCalDateSpan{\n  position: relative;\n  z-index: 2;\n}\n/* .lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected::before,\n.lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPFirstDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPLastDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempFirstDateSelected::before,\n.lyteCalTableCell.lyteCalToday.lyteDateRPTempLastDateSelected::before {\n  display: none;\n} */\n.lyteCalToday.lyteCalTableCell.lyteDateRPTempSelected {\n  background: var(--zcat-datePicker-number-bg-active);\n  border: none;\n  z-index: 5;\n}\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPFirstDateSelected,\n.lyteDateRPLastDateSelected {\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPFirstDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPFirstDateSelected:hover,.lyteDateRPFirstDateSelected.lyteCalTableCell{\n  background-color: var(--zcat-datePicker-number-bg-active) !important;\n  border: none !important;\n  border-radius: 50% !important;\n}\n.lyteDateRPFirstDateSelected,.lyteDateRPFirstDateSelected.lyteCalTableCell{\n  border-radius: 50% !important;\n}\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPLastDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected,\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPTempLastDateSelected:hover {\n  border-radius: 50% !important;\n}\n.lyteCalToday.lyteDateRPTempFirstDateSelected,\n.lyteCalToday.lyteDateRPTempLastDateSelected,\n.lyteCalToday.lyteDateRPTempFirstDateSelected:hover,\n.lyteCalToday.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPTempFirstDateSelected,\n.lyteDateRPTempFirstDateSelected:hover,\n.lyteDateRPTempLastDateSelected,\n.lyteDateRPTempLastDateSelected:hover {\n  background-color: var(--zcat-datePicker-number-bg-active) !important;\n  border-color: none !important;\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n.lyteDateRPTempLastDateSelected.lyteDateRPTempFirstDateSelected::after{\n  display: none;\n}\n.lyteDateRPMonthEndDate:first-of-type {\n  border-radius: 50%;\n}\n\n.dRPCalendar2 .lyteCalTableContainer {\n  border: none;\n}\n.lyteCalTableCell.lyteDateRPTempLastDateSelected:hover,\n.lyteDateRPMonthEndDate,\n.lyteDateRPTempSelected:last-of-type,\n.lyteCalTableCell.lyteDateRPTempSelected:last-of-type:hover {\n  border-radius: 0 50% 50% 0;\n}\n.lyteDateRPMonthStartDate{\n  border-radius: 50% 0 0 50%;\n}\n.lyteCalDisabled.lyteCalTableCell.lyteCalSel,\n.lyteCalTableCell.lyteCalSel,\n.lyteCalTableCell.lyteCalSel:hover {\n  background: var(--zcat-datePicker-number-bg-active);\n  color: var(--zcat-datePicker-text-selected);\n  border: none;\n  /* border-radius: 3px; */\n}\n/* .lyteCalTableCell.lyteCalSel:hover {\n  background: var(--zcat-color-white);\n  color: var(--zcat-color-dark1);\n  border: none;\n  border-radius: 4px;\n} */\n.lyteCalendarNavigator {\n  justify-content: space-between;\n  padding: 14px 14px 16px;\n  gap: 14px;\n}\n.lyteCalNav.lyteCaldLft {\n  order: 1;\n}\n.lyteCalNav.lyteCaldRgt {\n  order: 3;\n  margin: 0;\n}\n.lyteCalsCalMon {\n  display: flex;\n  gap: 14px;\n  flex-grow: unset;\n  order: 2;\n  width: calc(100% - 60px);\n}\n.lyteCalMonthDD,.lyteCalYearDD{\n  max-width: 100%;\n  width: 50%;\n}\n.lyteCalendarPopup lyte-dropdown lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button:hover,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button,\n.lyteCalendarPopup lyte-dropdown lyte-drop-button.lyteDropButtonDown,\n.lyteCalendarPopup .lyteDummyEventContainer:focus lyte-drop-button:hover {\n  min-height: 24px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-exsm) var(--zcat-font-family-primary);\n  padding: 2px 22px 2px 4px;\n  border-radius: 4px;\n}\n.lyteCalendarPopup lyte-dropdown lyte-icon.dropdown{\n  top: 50%;\n  height: 12px;\n  width: 12px;\n}\nhtml[data-user-color-scheme=\"dark\"] .lyteCalendarPopup lyte-dropdown lyte-icon.dropdown{\n	background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%237988A8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.date-input-field .lyteField {\n  position: relative;\n}\n.date-input-field .lyteField::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%237988a8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 16px;\n  height: 16px;\n  background-repeat: no-repeat;\n}\nhtml[data-user-color-scheme=\"dark\"] .date-input-field .lyteField::after{\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%23888888' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.date-input-field .lyteField::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 6px 6px 0;\n  /* background-color: var(--zcat-color-grey6); */\n}\n.zcat-calendar-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-top: 1px solid var(--zcat-datePicker-border-line);\n}\n\n.lyteInputBox .lyteInputCalendarIcon {\n  position: absolute;\n  right: 0;\n  top: calc(50%);\n  transform: translateY(-50%);\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  background-color: transparent;\n  cursor: pointer;\n  -webkit-mask-image: none;\n}\n.lyteInputBox .lyteInputCalendarIcon::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%237988a8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: 10px;\n  background-color: none;\n  border-radius: 0 5px 5px 0;\n  width: 34px;\n  height: 34px;\n}\nhtml[data-user-color-scheme=\"dark\"] .lyteInputBox .lyteInputCalendarIcon::before{\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 6.66668H2M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M5.2 14.6667H10.8C11.9201 14.6667 12.4802 14.6667 12.908 14.4487C13.2843 14.2569 13.5903 13.951 13.782 13.5747C14 13.1468 14 12.5868 14 11.4667V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667Z' stroke='%23888888' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.lyteInputCalendar {\n  border-radius: 6px;\n  border: 1px solid var(--zcat-datePicker-border-default);\n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n  overflow: hidden;\n}\n.calendarPopover lyte-popover-freeze {\n  background-color: transparent !important;\n  opacity: 1 !important;\n}\n.lyteCalCurrentDate {\n  display: none;\n}\n\n/* Time Picker Css */\n.lyteTimePickerField {\n  border: 1px solid var(--zcat-inputField-border-default);\n  background: var(--zcat-inputField-bg-default);\n  border-radius: 4px;\n  position: relative;\n  width: 200px;\n}\nlyte-time-picker:hover .lyteTimePickerField,\n.lyteTimePickerField:hover {\n  border-color: var(--zcat-inputField-border-hover);\n}\nlyte-time-picker.lyteTimePickerInputFocused .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerDropdownOpened .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerInputFocused:hover .lyteTimePickerField,\nlyte-time-picker.lyteTimePickerDropdownOpened:hover .lyteTimePickerField,\n.lyteTimePickerInputFocused .lyteTimePickerField,\n.lyteTimePickerDropdownOpened .lyteTimePickerField,\n.lyteTimePickerInputFocused .lyteTimePickerField:focus-within,\n.lyteTimePickerDropdownOpened .lyteTimePickerField:focus-within {\n  border-color: var(--zcat-inputField-border-active);\n}\n.lyteTimePickerField:focus-within,.lyteTimePickerField:hover:focus-within{\n  border-color: var(--zcat-inputField-border-active);\n}\n.lyteTimePickerDropdownValues{\n  gap: 0 16px;\n  margin: 14px 14px 0;\n}\n.lyteTimePickerInput{\n  padding: 8px;\n  height: 36px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n  border-radius: 6px;\n  color: var(--zcat-datePicker-text-default) !important;\n  background: var(--zcat-datePicker-bg-default);\n}\n\n.lyteTimePickerInput:hover{\n  background: var(--zcat-inputField-bg-hover);\n}\n\n.lyteTimePickerDropdownValues li {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 0 0 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-datePicker-text-default);\n  background: var(--zcat-datePicker-bg-default);\n}\n\n.lyteTimePickerDropdownValues li:hover{\n  cursor: pointer;\n  background-color: var(--zcat-datePicker-number-bg-hover);\n}\n\n.lyteTimePickerInput::placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteTimePickerInput:-ms-input-placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteTimePickerInput::-ms-input-placeholder {\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lytetimePickerButton {\n  border-radius: 0px 4px 4px 0px;\n  /* background-color: var(--zcat-datePicker-bg-secondary);\n  position: relative;\n  width: 24px;\n  height: 24px; */\n  background-color: transparent;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  height: 100%;\n  position: absolute;\n}\n.lytetimePickerButton::after {\n  content: '';\n  display: inline-block;\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%237988A8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n  background-repeat: no-repeat;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n}\nhtml[data-user-color-scheme=\"dark\"] .lytetimePickerButton::after{\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23888888\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n}\n/* .lyteTimePickerField:hover .lytetimePickerButton::after{\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%237DA2FB\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n.lyteTimePickerBtnIcon{\n  display: none;\n}\n/* .lyteTimePickerField:hover .lytetimePickerButton::after {\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23101f3e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n\n/* .lyteTimePickerDropdownOpened .lyteTimePickerField .lytetimePickerButton::after,\n.lyteTimePickerDropdownOpened\n  .lyteTimePickerField:hover\n  .lytetimePickerButton::after,\n.lyteTimePickerInputFocused .lyteTimePickerField .lytetimePickerButton::after,\n.lyteTimePickerInputFocused\n  .lyteTimePickerField:hover\n  .lytetimePickerButton::after {\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%232a65f0\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>');\n} */\n.lytetimePickerButton svg {\n  display: none;\n}\nlyte-time-picker-dropdown {\n  background: var(--zcat-datePicker-bg-default);\n  border: 1px solid var(--zcat-datePicker-border-default);\n  border-radius: 6px;\n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n  transform: translateY(1px);\n}\nlyte-time-picker-dropdown.lyteDropdownTopSide{\n  transform: translateY(-1px);\n}\n.lyteTimePickerUl {\n  padding: 0;\n  border: 0;\n  width: 32px;\n}\n.lyteTimePickerUl:last-of-type{\n  width: 26px;\n  overflow-y: hidden;\n}\n.lyteTimePickerDropdownValues li.lyteTimePickerItemSelected {\n  color: var(--zcat-datePicker-text-selected) !important;\n  background-color: var(--zcat-datePicker-number-bg-selected);\n}\n.lyteTimePickerItemSelected {\n  background-color: var(--zcat-datePicker-number-bg-selected);\n}\n.lyteTimePickerDropdownButton {\n  padding: 10px 14px;\n  border-top: 1px solid var(--zcat-datePicker-border-line);\n}\n.lyteTimePickerDropdownButton lyte-button .lyte-button{\n  padding: 0 6px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-sm) var(--zcat-font-family-primary);\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  background: var(--zcat-btn-fill-bg-primary-default);\n  color: var(--zcat-btn-fill-text-default);\n  border: none;\n}\n.lyteTimePickerDropdownButton lyte-button .lyte-button.lyteDefaultBtn:hover{\n  background: var(--zcat-btn-fill-bg-primary-hover);\n  border: none;\n}\n.zcat-timepicker-splitter {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.91683 7H11.0835\" stroke=\"%23A6B1C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.00016 11.0846L11.0835 7.0013L7.00016 2.91797\" stroke=\"%23A6B1C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n}\n.lyteCalTableCell.lyteCalSel.lyteCalToday, .lyteCalTableCell.lyteCalToday.lyteCalSel:hover{\n  color: var(--zcat-datePicker-text-selected) !important;\n}\n/* .lyteCalTableCell.lyteCalToday{\n  color: unset !important;\n }\n .lyteCalTableCell.lyteCalToday::before{\n  display: none !important;\n }  */\n\n .calendarPopover .lytePopover{\n  background: var(--zcat-datePicker-bg-default);\n  border-color: var(--zcat-datePicker-border-default);\n }\n\n lyte-drop-button.textDrpdwn:hover{\n  background-color: var(--zcat-inputField-bg-hover);\n  border-color: var(--zcat-inputField-border-hover)!important\n }\n\n .calendarPopover .zcat-color-dark1{\n  color: var(--zcat-datePicker-text-headings) !important;\n }\n\n .lyteCalTableContainer{\n  border-spacing: 20px 16px;\n  padding: 0 14px;\n }\n\n.lyteInputCalendar.lyteInputCalendarUp {\n  transform: translateY(-1px);\n}\n.lyteInputCalendar.lyteInputCalendarDown {\n  transform: translateY(1px);\n}\n\n.lyteSm.lyteTimePickerInput{\n  padding: 8px 6px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n  height: 28px;\n}\n.lyteExsm.lyteTimePickerInput{\n  padding: 8px 4px;\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-small) var(--zcat-font-family-primary);\n  height: 24px;\n  font-size: 12px;\n}\n\n.lyteDateRPLeftNav,.lyteDateRPRightNav{\n  top: 20px;\n  width: 20px;\n  height: 20px;\n}\n.lyteDateRangePickerCol1 .lyteDateRPMonthHeader,.lyteDateRangePickerCol2 .lyteDateRPMonthHeader{\n  padding: 18px 40px 16px 54px;\n  text-align: unset;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.lyteDateRangePickerCol2 .lyteDateRPMonthHeader{\n  padding: 18px 54px 16px 40px;\n}\n\n.monthDD,.yearDD{\n  max-width: 100%;\n  width: 50%;\n  margin: 0;\n}\n\n.lytePopRightToOrig,.lytePopLeftToOrig{\n  transform: translateX(3px);\n}\n.lytePopBottomToOrig,.lytePopTopToOrig{\n  transform: translateY(3px);\n}\n\n.lyteDateRPTempSelected:last-of-type::after, .lyteDateRPFirstDateSelected:last-of-type::after, .lyteDateRPTempFirstDateSelected:last-of-type::after, .lyteDateRPTempLastDateSelected::after, .lyteDateRPLastDateSelected::after{\n  display: none;\n}\n\n.lyteDateRPTempSelected.lyteDateRPTempLastDateSelected, .lyteDateRPTempLastDateSelected.lyteCalTableCell, .lyteDateRPLastDateSelected.lyteCalTableCell, .lyteDateRPTempLastDateSelected:hover, .lyteDateRPLastDateSelected:hover{\n  z-index: 5;\n}\n\n.lyteDateRPFirstDateSelected:has(+ .lyteDateRPLastDateSelected)::after,.lyteDateRPTempFirstDateSelected:has(+ .lyteDateRPTempLastDateSelected)::after{\n  width: 50px;\n}</style>";;
ZcatDatepicker._dynamicNodes = [{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":8,"sibl":[7]},{"t":"a","p":[1,7]},{"t":"cD","p":[1,7],"in":7,"sibl":[6]},{"t":"a","p":[1,9,1]},{"t":"r","p":[1,9,1,1],"dN":[],"in":6,"sibl":[5]},{"t":"cD","p":[1,9,1],"in":5,"sibl":[4]},{"t":"a","p":[1,9,3,1]},{"t":"r","p":[1,9,3,1,1],"dN":[],"in":4,"sibl":[3]},{"t":"cD","p":[1,9,3,1],"in":3,"sibl":[2]},{"t":"a","p":[1,9,3,3]},{"t":"r","p":[1,9,3,3,1],"dN":[],"in":2,"sibl":[1]},{"t":"cD","p":[1,9,3,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[8,7,5,3,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatDatepicker._observedAttributes = [];

ZcatDatepicker.register("zcat-datepicker", {
    hash: "ZcatDatepicker_6",
    refHash: "C_zcat-ui_zcat-ui_2"
}); 


/***/ })

}]);
//# sourceMappingURL=datepicker-comp.js.map
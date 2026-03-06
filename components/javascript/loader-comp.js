"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/loader-comp"],{

/***/ 66675204:
/*!**********************************************!*\
  !*** ./components/javascript/loader-comp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComp": () => (/* binding */ LoaderComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-loader.js */ 83674599);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class LoaderComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  didConnect() {
    this._bindCustomiseEvents();
  }

  _bindCustomiseEvents() {
    let comp = this;
    let node = this.$node;

    let typeSelect = node.querySelector('[data-action="changeLoaderType"]');
    if (typeSelect) {
      typeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('loaderObj'), 'add', 'type', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let loaderObj = this.getData('loaderObj') || {};
    let type = loaderObj.type || 'progress';

    // --- sLyte tab ---
    let slyte_code = '<zcat-loader\n  self="{{self}}"\n  zcat-prop="{{loaderObj}}"\n></zcat-loader>';

    // --- JS tab ---
    let propObj = { type: type };
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    loaderObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyte_code = '// Template\n<zcat-loader\n  self="{{self}}"\n  zcat-prop-type="' + type + '"\n></zcat-loader>';

    // --- HTML tab ---
    let html_code = '';
    if (type === 'content') {
      html_code = '<div class="zcat-skeleton-loader">\n  <div class="zcat-skeleton-row">\n    <div class="zcat-skeleton-col"></div>\n    <div class="zcat-skeleton-col"></div>\n    <div class="zcat-skeleton-col"></div>\n    <div class="zcat-skeleton-col"></div>\n  </div>\n  <!-- repeat rows as needed -->\n</div>';
    } else if (type === 'spin') {
      html_code = '<div class="zcat-spin-loader"></div>';
    } else {
      html_code = '<div class="zcat-progress-loader"></div>';
    }

    // --- CSS tab ---
    let css_code = '';
    if (type === 'content') {
      css_code = '.zcat-skeleton-loader { width: 100%; }\n\n';
      css_code += '.zcat-skeleton-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n';
      css_code += '.zcat-skeleton-col {\n  animation: zcatShimmer 1.25s infinite linear;\n  background: linear-gradient(to right,\n    var(--zcat-loader-content-primary) 8%,\n    var(--zcat-loader-content-secondary) 18%,\n    var(--zcat-loader-content-primary) 33%);\n  background-size: 800px 104px;\n  height: 9px;\n  width: 23%;\n  border-radius: 50px;\n}\n\n';
      css_code += '@keyframes zcatShimmer {\n  0% { background-position: -468px 0; }\n  100% { background-position: 468px 0; }\n}';
    } else if (type === 'spin') {
      css_code = '.zcat-spin-loader {\n  width: 16px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: /* gradient spinner */;\n  animation: zcatSpin 1s infinite steps(12);\n}\n\n';
      css_code += '@keyframes zcatSpin {\n  100% { transform: rotate(1turn); }\n}';
    } else {
      css_code = '.zcat-progress-loader {\n  height: 4px;\n  width: 100%;\n  background: var(--zcat-loader-progress-secondary);\n  border-radius: 40px;\n  animation: zcatProgress 3s infinite;\n}\n\n';
      css_code += '@keyframes zcatProgress {\n  0%   { background-position: -150% 0, -150% 0; }\n  66%  { background-position: 250% 0, -150% 0; }\n  100% { background-position: 250% 0, 250% 0; }\n}';
    }

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('newSlyteCodeSnippet.code', newSlyte_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: this }),
      loaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'progress' }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      // --- All Variants objects ---
      variantProgressObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'progress' }
      }),
      variantSpinObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'spin' }
      }),
      variantContentObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'content' }
      }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      newSlyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('loaderObj', { type: 'progress' });
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showNewSlyteTab() { this.setData('activeTab', 'newslyte'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let code;
        if (tab === 'slyte') { code = this.getData('slyteCodeSnippet.code'); }
        else if (tab === 'js') { code = this.getData('jsCodeSnippet.code'); }
        else if (tab === 'newslyte') { code = this.getData('newSlyteCodeSnippet.code'); }
        else if (tab === 'html') { code = this.getData('htmlCodeSnippet.code'); }
        else if (tab === 'css') { code = this.getData('cssCodeSnippet.code'); }
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

LoaderComp._template = "<template tag-name=\"loader-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Loader</h1> <p class=\"zcat-page-desc\">Loaders indicate ongoing processes — skeleton shimmer for content loading, spinner for actions, or a progress bar for measurable operations.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px; min-height:120px; display:flex; align-items:center; justify-content:center;\"> <zcat-loader self=\"{{self}}\" zcat-prop=\"{{loaderObj}}\"></zcat-loader> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select data-action=\"changeLoaderType\" class=\"zcat-custom-select\"> <option value=\"progress\">Progress</option> <option value=\"spin\">Spin</option> <option value=\"content\">Content (Skeleton)</option> </select> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Loader Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Progress Bar</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:20px; display:flex; align-items:center;\"> <zcat-loader self=\"{{self}}\" zcat-prop=\"{{variantProgressObj}}\"></zcat-loader> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Spinner</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:20px; display:flex; align-items:center; justify-content:center;\"> <zcat-loader self=\"{{self}}\" zcat-prop=\"{{variantSpinObj}}\"></zcat-loader> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Content / Skeleton</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:20px;\"> <zcat-loader self=\"{{self}}\" zcat-prop=\"{{variantContentObj}}\"></zcat-loader> </div> </div> </div> </div></template></template> </div> </template><style>/* loader-comp doc page — no extra styles needed, uses layout-comp shared classes */\n</style>";;
LoaderComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[7,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LoaderComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "loaderObj",
  "resetButtonObj",
  "variantProgressObj",
  "variantSpinObj",
  "variantContentObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



LoaderComp.register("loader-comp", {
  hash: "LoaderComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 83674599:
/*!**********************************************!*\
  !*** ./components/javascript/zcat-loader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatLoader": () => (/* binding */ ZcatLoader)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);




class ZcatLoader extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object'),
     	zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object'),
      rows: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('number', { default: 12 }),
      type: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('string', { default: '' })
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

ZcatLoader._template = "<template tag-name=\"zcat-loader\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.loader_type,'===','content')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"skeleton-loader\"> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column float-right\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> </div></template><template case=\"{{expHandlers(zcatProp.loader_type,'===','spin')}}\" is=\"case\" lc-id=\"lc_id_1\"><div class=\"spin-loader\"></div></template><template default=\"\"><div class=\"progress-loader\"></div></template></template> </template><style>\n\n/* === Global base styles from reference css/zcat-loader.css === */\nlyte-loader * {\n  box-sizing: border-box;\n}\n/* spinner loader */\n.zcat-loader-spinner .ltexitdiv,\n.zcat-loader-spinner .ltLoaderProgressBar,\n.zcat-loader-spinner .lyteLoaderProgressMessage,\n.zcat-loader-spinner .lyteLoaderTimeoutMessage {\n  display: none;\n}\n.zcat-loader-spinner .ltLoaderSpin {\n  width: 40px;\n  height: 40px;\n  border-top: 3px solid var(--zcat-loader-content-primary);\n  border-right: 3px solid var(--zcat-loader-content-primary);\n  border-bottom: 3px solid var(--zcat-loader-progress-primary);\n  border-left: 3px solid var(--zcat-loader-progress-primary);\n}\n.lyteLoaderFreeze {\n  opacity: 0 !important;\n}\n\n/* progress loader */\n.zcat-loader-progress .ltexitdiv,\n.zcat-loader-progress .ltspindiv,\n.zcat-loader-progress .lyteLoaderProgressMessage,\n.zcat-loader-progress .lyteLoaderTimeoutMessage {\n  display: none;\n}\n.zcat-loader-progress .ltLoaderProgressBar.indefinite {\n  height: 4px;\n  background: linear-gradient(\n    to right,\n    var(--zcat-loader-progress-primary),\n    var(--zcat-loader-progress-primary)\n  );\n  background-color: var(--zcat-loader-progress-primary);\n  background-size: 20%;\n  background-repeat: repeat-y;\n  background-position: -25% 0;\n  border-radius: 10px;\n}\n.zcat-loader-progress .ltLoaderProgressBar.definite {\n  background-color: var(--zcat-loader-progress-primary);\n}\n\n.skeleton-loader {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n  }\n  .skeleton-loader-row {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n  .skeleton-loader-column {\n    animation: placeHolderShimmer 1.25s infinite linear forwards;\n    background: linear-gradient(to right, var(--zcat-loader-content-primary) 8%, var(--zcat-loader-content-secondary) 18%, var(--zcat-loader-content-primary) 33%);\n    background-size: 800px 104px;\n    position: relative;\n    height: 9px;\n    width: 23%;\n    margin: 0 1%;\n    border-radius: 50px;\n  }\n  .skeleton-loader-column:first-child {\n    margin-left: 0;\n  }\n  .skeleton-loader-column:last-child {\n    margin-right: 0;\n  }\n  @keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0;\n    }\n    100% {\n      background-position: 468px 0;\n    }\n  }\n\n  .spin-loader {\n  width: 16px;\n  aspect-ratio: 1;\n  display: grid;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      0deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 50%, transparent) 30%,\n      #0000 0 70%,\n      var(--zcat-loader-round-primary) 0\n    ) 50%/8% 100%,\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 25%, transparent) 30%,\n      #0000 0 70%,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 75%, transparent) 0\n    ) 50%/100% 8%;\n  background-repeat: no-repeat;\n  animation: spinanimation 1s infinite steps(12);\n}\n\n.spin-loader::before,\n.spin-loader::after {\n   content: \"\";\n   grid-area: 1/1;\n   border-radius: 50%;\n   background: inherit;\n   opacity: 0.915;\n   transform: rotate(30deg);\n}\n.spin-loader::after {\n   opacity: 0.83;\n   transform: rotate(60deg);\n}\n@keyframes spinanimation {\n  100% {transform: rotate(1turn)}\n}\n.progress-loader {\n  height: 4px;\n  width: 100%;\n  --c:no-repeat linear-gradient(var(--zcat-loader-progress-primary) 0 0);\n  background: var(--c),var(--c),var(--zcat-loader-progress-secondary);\n  background-size: 60% 100%;\n  animation: progressanimation 3s infinite;\n  border-radius: 40px;\n}\n@keyframes progressanimation {\n  0%   {background-position:-150% 0,-150% 0}\n  66%  {background-position: 250% 0,-150% 0}\n  100% {background-position: 250% 0, 250% 0}\n}\n\n/* === Global base styles from reference css/zcat-loader.css === */\nlyte-loader * {\n  box-sizing: border-box;\n}\n/* spinner loader */\n.zcat-loader-spinner .ltexitdiv,\n.zcat-loader-spinner .ltLoaderProgressBar,\n.zcat-loader-spinner .lyteLoaderProgressMessage,\n.zcat-loader-spinner .lyteLoaderTimeoutMessage {\n  display: none;\n}\n.zcat-loader-spinner .ltLoaderSpin {\n  width: 40px;\n  height: 40px;\n  border-top: 3px solid var(--zcat-loader-content-primary);\n  border-right: 3px solid var(--zcat-loader-content-primary);\n  border-bottom: 3px solid var(--zcat-loader-progress-primary);\n  border-left: 3px solid var(--zcat-loader-progress-primary);\n}\n.lyteLoaderFreeze {\n  opacity: 0 !important;\n}\n\n/* progress loader */\n.zcat-loader-progress .ltexitdiv,\n.zcat-loader-progress .ltspindiv,\n.zcat-loader-progress .lyteLoaderProgressMessage,\n.zcat-loader-progress .lyteLoaderTimeoutMessage {\n  display: none;\n}\n.zcat-loader-progress .ltLoaderProgressBar.indefinite {\n  height: 4px;\n  background: linear-gradient(\n    to right,\n    var(--zcat-loader-progress-primary),\n    var(--zcat-loader-progress-primary)\n  );\n  background-color: var(--zcat-loader-progress-primary);\n  background-size: 20%;\n  background-repeat: repeat-y;\n  background-position: -25% 0;\n  border-radius: 10px;\n}\n.zcat-loader-progress .ltLoaderProgressBar.definite {\n  background-color: var(--zcat-loader-progress-primary);\n}\n\n.skeleton-loader {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n  }\n  .skeleton-loader-row {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n  .skeleton-loader-column {\n    animation: placeHolderShimmer 1.25s infinite linear forwards;\n    background: linear-gradient(to right, var(--zcat-loader-content-primary) 8%, var(--zcat-loader-content-secondary) 18%, var(--zcat-loader-content-primary) 33%);\n    background-size: 800px 104px;\n    position: relative;\n    height: 9px;\n    width: 23%;\n    margin: 0 1%;\n    border-radius: 50px;\n  }\n  .skeleton-loader-column:first-child {\n    margin-left: 0;\n  }\n  .skeleton-loader-column:last-child {\n    margin-right: 0;\n  }\n  @keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0;\n    }\n    100% {\n      background-position: 468px 0;\n    }\n  }\n\n  .spin-loader {\n  width: 16px;\n  aspect-ratio: 1;\n  display: grid;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      0deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 50%, transparent) 30%,\n      #0000 0 70%,\n      var(--zcat-loader-round-primary) 0\n    ) 50%/8% 100%,\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 25%, transparent) 30%,\n      #0000 0 70%,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 75%, transparent) 0\n    ) 50%/100% 8%;\n  background-repeat: no-repeat;\n  animation: spinanimation 1s infinite steps(12);\n}\n\n.spin-loader::before,\n.spin-loader::after {\n   content: \"\";\n   grid-area: 1/1;\n   border-radius: 50%;\n   background: inherit;\n   opacity: 0.915;\n   transform: rotate(30deg);\n}\n.spin-loader::after {\n   opacity: 0.83;\n   transform: rotate(60deg);\n}\n@keyframes spinanimation {\n  100% {transform: rotate(1turn)}\n}\n.progress-loader {\n  height: 4px;\n  width: 100%;\n  --c:no-repeat linear-gradient(var(--zcat-loader-progress-primary) 0 0);\n  background: var(--c),var(--c),var(--zcat-loader-progress-secondary);\n  background-size: 60% 100%;\n  animation: progressanimation 3s infinite;\n  border-radius: 40px;\n}\n@keyframes progressanimation {\n  0%   {background-position:-150% 0,-150% 0}\n  66%  {background-position: 250% 0,-150% 0}\n  100% {background-position: 250% 0, 250% 0}\n}</style>";;
ZcatLoader._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{},"lc_id_1":{},"default":{}},"hd":true,"co":["lc_id_0","lc_id_1"]}];;
ZcatLoader._observedAttributes = ["self", "zcatProp", "rows", "type"];

ZcatLoader.register("zcat-loader", {
  hash: "ZcatLoader_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=loader-comp.js.map
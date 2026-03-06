"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/autocomplete-comp"],{

/***/ 39042520:
/*!****************************************************!*\
  !*** ./components/javascript/autocomplete-comp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComp": () => (/* binding */ AutocompleteComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_autocomplete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-autocomplete.js */ 41243170);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class AutocompleteComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let sizeSelect = node.querySelector('[data-action="changeSize"]');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('autocompleteObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let obj = this.getData('autocompleteObj') || {};

    let slyte_code = '<zcat-autocomplete\n  self="{{self}}"\n  zcat-prop="{{autocompleteObj}}"\n></zcat-autocomplete>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    autocompleteObj: prop("object", {\n      default: ' + JSON.stringify({
      placeholder: obj.placeholder || 'Search fruits...',
      label: obj.label || 'Autocomplete',
      options: (obj.options || []).slice(0, 3)
    }, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-autocomplete-wrapper">\n  <label class="zcat-autocomplete-label">' + (obj.label || 'Autocomplete') + '</label>\n  <input type="text" class="zcat-autocomplete-input" placeholder="' + (obj.placeholder || 'Search...') + '" />\n</div>';

    let css_code = '.zcat-autocomplete-wrapper { position: relative; width: 280px; }\n.zcat-autocomplete-input { width: 100%; height: 36px; padding: 0 32px; border: 1px solid var(--zcat-inputField-border-default); border-radius: 8px; }';

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
      autocompleteObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          placeholder: 'Search fruits...',
          label: 'Autocomplete',
          options: [
            { name: 'Apple', value: 'apple' },
            { name: 'Apricot', value: 'apricot' },
            { name: 'Banana', value: 'banana' },
            { name: 'Blueberry', value: 'blueberry' },
            { name: 'Cherry', value: 'cherry' },
            { name: 'Coconut', value: 'coconut' },
            { name: 'Dragon Fruit', value: 'dragonfruit' },
            { name: 'Grape', value: 'grape' },
            { name: 'Kiwi', value: 'kiwi' },
            { name: 'Mango', value: 'mango' },
            { name: 'Orange', value: 'orange' },
            { name: 'Peach', value: 'peach' },
            { name: 'Strawberry', value: 'strawberry' }
          ],
          callback: { name: 'onAutocompleteSelect' }
        }
      }),
      varDefaultObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search fruits...', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }, { name: 'Mango', value: 'mango' }] } }),
      varSmallObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search...', size: 'small', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }, { name: 'Mango', value: 'mango' }] } }),
      varExsmObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search...', size: 'extra-small', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }, { name: 'Mango', value: 'mango' }] } }),
      varLabelledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search fruits...', label: 'Fruit', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }, { name: 'Mango', value: 'mango' }] } }),
      varDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search...', label: 'Disabled', disabled: true, options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }] } }),
      varErrorObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search...', label: 'Fruit', errorMessage: 'Please select a fruit', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }] } }),
      varCreateNewObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { placeholder: 'Search or create...', label: 'Tag', createNew: true, createNewLabel: 'Create', options: [{ name: 'Apple', value: 'apple' }, { name: 'Banana', value: 'banana' }, { name: 'Cherry', value: 'cherry' }] } }),
      toggleLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      toggleErrorObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleError' } }
      }),
      toggleCreateNewObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleCreateNew' } }
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
      onAutocompleteSelect(item) {
        console.log('Autocomplete selected:', item);
      },
      toggleLabel(val) {
        if (val) {
          this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'label', 'Autocomplete');
        } else {
          this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      toggleError(val) {
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'errorMessage', val ? 'This field is required' : '');
        this.constructCodeSnippet();
      },
      toggleCreateNew(val) {
        if (val) {
          this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'createNewBtn', { label: 'Create New Fruit' });
        } else {
          this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'createNewBtn', undefined);
        }
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'label', 'Autocomplete');
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'disabled', false);
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'errorMessage', '');
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'size', 'default');
        this.$app.objectUtils(this.getData('autocompleteObj'), 'add', 'createNewBtn', undefined);
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

AutocompleteComp._template = "<template tag-name=\"autocomplete-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Autocomplete</h1> <p class=\"zcat-page-desc\">Searchable input field with filtered dropdown suggestions and highlight matching.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{autocompleteObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Create New Btn</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCreateNewObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varDefaultObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varSmallObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varExsmObj}}\"></zcat-autocomplete> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varLabelledObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varErrorObj}}\"></zcat-autocomplete> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Create New</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-autocomplete self=\"{{self}}\" zcat-prop=\"{{varCreateNewObj}}\"></zcat-autocomplete> </div> </div> </div> </div></template></template> </div> </template><style>/* autocomplete-comp demo styles are in utilities */\n</style>";;
AutocompleteComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,9,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,7,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

AutocompleteComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "autocompleteObj",
  "varDefaultObj",
  "varSmallObj",
  "varExsmObj",
  "varLabelledObj",
  "varDisabledObj",
  "varErrorObj",
  "varCreateNewObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "toggleCreateNewObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



AutocompleteComp.register("autocomplete-comp", {
  hash: "AutocompleteComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=autocomplete-comp.js.map
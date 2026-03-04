"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/tab-comp"],{

/***/ 72466107:
/*!*******************************************!*\
  !*** ./components/javascript/tab-comp.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabComp": () => (/* binding */ TabComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-tab.js */ 41582269);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class TabComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let variantSelect = node.querySelector('[data-action="changeTabVariant"]');
    let sizeSelect = node.querySelector('[data-action="changeTabSize"]');

    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('tabObj'), 'add', 'variant', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('tabObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let tabObj = this.getData('tabObj') || {};

    let slyte_code = '<zcat-tab\n  self="{{self}}"\n  zcat-prop="{{tabObj}}"\n></zcat-tab>';

    let propObj = {};
    propObj.variant = tabObj.variant || 'primary';
    if (tabObj.size) propObj.size = tabObj.size;
    propObj.list = [
      { id: 'tab1', title: { name: 'Tab 1' }, body: { content: 'Tab 1 content' } },
      { id: 'tab2', title: { name: 'Tab 2' }, body: { content: 'Tab 2 content' } },
      { id: 'tab3', title: { name: 'Tab 3' }, body: { content: 'Tab 3 content' } }
    ];

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    tabObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-tabs-wrapper zcat-tabs-' + (tabObj.variant || 'primary') + '">\n';
    html_code += '  <div class="zcat-tab-head">\n';
    html_code += '    <div class="zcat-tab-title zcat-tab-active">Tab 1</div>\n';
    html_code += '    <div class="zcat-tab-title">Tab 2</div>\n';
    html_code += '    <div class="zcat-tab-title">Tab 3</div>\n';
    html_code += '  </div>\n';
    html_code += '  <div class="zcat-tab-body">\n';
    html_code += '    <div class="zcat-tab-content zcat-tab-show">Tab 1 content</div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-tabs-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n';
    css_code += '.zcat-tab-head {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n\n';
    css_code += '.zcat-tab-title {\n  padding: 0 8px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  color: var(--zcat-tabs-primary-text-default);\n}\n\n';
    css_code += '.zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-primary-text-active);\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n  font-weight: 600;\n}';

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      tabObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'tab1', title: { name: 'General' }, body: { content: 'General settings go here.' } },
            { id: 'tab2', title: { name: 'Profile' }, body: { content: 'Profile configuration content.' } },
            { id: 'tab3', title: { name: 'Security' }, body: { content: 'Security and privacy settings.' } }
          ]
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleCloseObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleClose' } }
      }),
      toggleBadgeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleBadge' } }
      }),
      // Variant demos
      variantPrimaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'vp1', title: { name: 'Overview' }, body: { content: 'Primary tab body content.' } },
            { id: 'vp2', title: { name: 'Details' }, body: { content: 'Details content.' } },
            { id: 'vp3', title: { name: 'Settings' }, body: { content: 'Settings content.' } }
          ]
        }
      }),
      variantSecondaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'secondary',
          list: [
            { id: 'vs1', title: { name: 'All' }, body: { content: 'All items.' } },
            { id: 'vs2', title: { name: 'Active' }, body: { content: 'Active items.' } },
            { id: 'vs3', title: { name: 'Archived' }, body: { content: 'Archived items.' } }
          ]
        }
      }),
      variantCodeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'code', showBody: false,
          list: [
            { id: 'vc1', title: { name: 'index.html' } },
            { id: 'vc2', title: { name: 'style.css' } },
            { id: 'vc3', title: { name: 'app.js' } }
          ]
        }
      }),
      variantBadgeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'vb1', title: { name: 'Inbox', badge: '12' }, body: { content: 'You have 12 unread messages.' } },
            { id: 'vb2', title: { name: 'Drafts', badge: '3' }, body: { content: 'You have 3 drafts.' } },
            { id: 'vb3', title: { name: 'Sent' }, body: { content: 'Sent messages.' } }
          ]
        }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('tabObj', {
          variant: 'primary',
          list: [
            { id: 'tab1', title: { name: 'General' }, body: { content: 'General settings go here.' } },
            { id: 'tab2', title: { name: 'Profile' }, body: { content: 'Profile configuration content.' } },
            { id: 'tab3', title: { name: 'Security' }, body: { content: 'Security and privacy settings.' } }
          ]
        });
        this.$app.objectUtils(this.getData('toggleCloseObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleBadgeObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleClose(checked) {
        this.$app.objectUtils(this.getData('tabObj'), 'add', 'closeIcon', checked);
        this.constructCodeSnippet();
      },
      onToggleBadge(checked) {
        let tabObj = this.getData('tabObj');
        let list = tabObj.list;
        if (checked) {
          if (list[0]) this.$app.objectUtils(list[0].title, 'add', 'badge', '5');
          if (list[1]) this.$app.objectUtils(list[1].title, 'add', 'badge', '2');
        } else {
          if (list[0]) this.$app.objectUtils(list[0].title, 'add', 'badge', '');
          if (list[1]) this.$app.objectUtils(list[1].title, 'add', 'badge', '');
        }
        this.constructCodeSnippet();
      },
      onTabChange(item) {
        // demo callback
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let code;
        if (tab === 'slyte') code = this.getData('slyteCodeSnippet.code');
        else if (tab === 'js') code = this.getData('jsCodeSnippet.code');
        else if (tab === 'html') code = this.getData('htmlCodeSnippet.code');
        else if (tab === 'css') code = this.getData('cssCodeSnippet.code');
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

TabComp._template = "<template tag-name=\"tab-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Tabs</h1> <p class=\"zcat-page-desc\">Tabs organize content into separate views where only one view is visible at a time.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{tabObj}}\"></zcat-tab> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changeTabVariant\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> <option value=\"code\">Code</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeTabSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Close Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCloseObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Badge</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleBadgeObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Primary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary Tabs</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantPrimaryObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Secondary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Pill) Tabs</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantSecondaryObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Code Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Code Tabs (File Browser)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantCodeObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Badge</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Tabs with Badge Count</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantBadgeObj}}\"></zcat-tab> </div> </div> </div> </div></template></template> </div> </template><style>/* tab-comp specific overrides if needed */\n</style>";;
TabComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

TabComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "tabObj",
  "resetButtonObj",
  "toggleCloseObj",
  "toggleBadgeObj",
  "variantPrimaryObj",
  "variantSecondaryObj",
  "variantCodeObj",
  "variantBadgeObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



TabComp.register("tab-comp", {
  hash: "TabComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 41582269:
/*!*******************************************!*\
  !*** ./components/javascript/zcat-tab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatTab": () => (/* binding */ ZcatTab)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatTab extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }),
      activeTabId: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.activeTab) {
      this.setData('activeTabId', zcatProp.activeTab);
    } else if (zcatProp.list && zcatProp.list.length > 0) {
      this.setData('activeTabId', zcatProp.list[0].id);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      selectTab(item) {
        if (!item || item.disabled) return;
        this.setData('activeTabId', item.id);

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item, zcatProp);
        }
      },
      closeTab(item, event) {
        if (event) { event.stopPropagation(); }
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onClose) {
          self.executeMethod(zcatProp.onClose, item, zcatProp);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncState();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatTab._template = "<template tag-name=\"zcat-tab\"> <div class=\"zcat-tabs-wrapper {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-tabs-secondary',expHandlers(expHandlers(zcatProp.variant,'===','code'),'?:','zcat-tabs-code','zcat-tabs-primary'))}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-tabs-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-tabs-exsm',''))}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Tab Head --> <div class=\"zcat-tab-head\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-tab-title {{expHandlers(expHandlers(activeTabId,'===',item.id),'?:','zcat-tab-active','')}} {{expHandlers(item.disabled,'?:','zcat-tab-disabled','')}}\" onclick=\"{{action('selectTab',item)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon,'&amp;&amp;',item.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{item.icon.name}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-tab-icon\"></zcat-icon> </template></template> <span class=\"zcat-tab-label\">{{item.title.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.title.badge}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-tab-badge\">{{item.title.badge}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','code')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-tab-code-slide\"></div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.closeIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-tab-close\" onclick=\"{{action('closeTab',item,event)}}\"> <zcat-icon name=\"close\" width=\"10\" height=\"10\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </template></template> </div></template> </div> <!-- Tab Body --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.showBody,'!==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-tab-body\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-tab-content {{expHandlers(expHandlers(activeTabId,'===',item.id),'?:','zcat-tab-show','zcat-tab-hide')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.body,'&amp;&amp;',item.body.content)}}\" is=\"case\" lc-id=\"lc_id_0\"> {{item.body.content}} </template></template> </div></template> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Tab Component\n   Variants: primary, secondary, code\n   ============================== */\n\nzcat-tab * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-tabs-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* ===== TAB HEAD ===== */\n.zcat-tab-head {\n  display: flex;\n  align-items: stretch;\n  position: relative;\n}\n\n/* ===== TAB TITLE (shared) ===== */\n.zcat-tab-title {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color 0.15s, background 0.15s, border-color 0.15s;\n  outline: none;\n}\n.zcat-tab-title.zcat-tab-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* --- Tab label --- */\n.zcat-tab-label {\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.zcat-tab-active .zcat-tab-label {\n  font-weight: 600;\n}\n\n/* --- Tab badge --- */\n.zcat-tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 50%;\n  font: var(--zcat-font-10-12) var(--zcat-font-family-primary);\n  background: var(--zcat-btn-fill-bg-primary-default);\n  color: var(--zcat-white);\n}\n\n/* --- Tab close icon --- */\n.zcat-tab-close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  margin-left: 4px;\n  opacity: 0.5;\n  transition: opacity 0.15s, background 0.15s;\n}\n.zcat-tab-close:hover {\n  opacity: 1;\n  background: rgba(0,0,0,0.06);\n}\n\n/* --- Tab body --- */\n.zcat-tab-body {\n  display: block;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n.zcat-tab-show { display: block; }\n.zcat-tab-hide { display: none; }\n\n/* =========================================\n   PRIMARY VARIANT\n   ========================================= */\n.zcat-tabs-primary .zcat-tab-head {\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n.zcat-tabs-primary .zcat-tab-title {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-primary-text-default);\n  padding: 0 8px;\n  margin-right: 10px;\n  height: 32px;\n  border-bottom: 2px solid transparent;\n  border-radius: 4px 4px 0 0;\n  background: var(--zcat-tabs-primary-bg);\n}\n.zcat-tabs-primary .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-default);\n}\n/* Primary hover */\n.zcat-tabs-primary .zcat-tab-title:hover {\n  color: var(--zcat-tabs-primary-text-hover);\n  background: var(--zcat-tabs-primary-bg-hover);\n  border-bottom-color: var(--zcat-tabs-primary-border-hover);\n}\n.zcat-tabs-primary .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-hover);\n}\n/* Primary active */\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-primary-text-active);\n  font-weight: 600;\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n}\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-active);\n}\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active:hover {\n  background: transparent;\n  color: var(--zcat-tabs-primary-text-active);\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n}\n/* Primary body */\n.zcat-tabs-primary .zcat-tab-body {\n  border: 1px solid var(--zcat-tabs-primary-border-default);\n  border-top: none;\n  padding: 16px;\n}\n\n/* =========================================\n   SECONDARY VARIANT\n   ========================================= */\n.zcat-tabs-secondary .zcat-tab-head {\n  background: var(--zcat-tabs-secondary-bg-default);\n  border-radius: 6px;\n  padding: 4px;\n  gap: 4px;\n  border-bottom: none;\n}\n.zcat-tabs-secondary .zcat-tab-title {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-secondary-text-default);\n  padding: 0 8px;\n  height: 28px;\n  border-radius: 4px;\n  background: transparent;\n  border-bottom: none;\n}\n.zcat-tabs-secondary .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-default);\n}\n/* Secondary hover */\n.zcat-tabs-secondary .zcat-tab-title:hover {\n  color: var(--zcat-tabs-secondary-text-hover);\n  background: var(--zcat-tabs-secondary-bg-hover);\n}\n.zcat-tabs-secondary .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-hover);\n}\n/* Secondary active */\n.zcat-tabs-secondary .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-secondary-text-active);\n  background: var(--zcat-tabs-secondary-bg-active);\n  font-weight: 600;\n  box-shadow: var(--zcat-shadow-light-all);\n}\n.zcat-tabs-secondary .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-active);\n}\n/* Secondary body */\n.zcat-tabs-secondary .zcat-tab-body {\n  padding: 16px 0;\n}\n\n/* =========================================\n   CODE VARIANT\n   ========================================= */\n.zcat-tabs-code .zcat-tab-head {\n  border-bottom: none;\n}\n.zcat-tabs-code .zcat-tab-title {\n  position: relative;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-code-text-default);\n  padding: 0 16px;\n  margin-left: 0;\n  height: 36px;\n  border: 1px solid var(--zcat-tabs-code-border-default);\n  border-bottom: none;\n  border-radius: 6px 6px 0 0;\n  background: var(--zcat-tabs-code-bg-default);\n  overflow: visible;\n}\n.zcat-tabs-code .zcat-tab-title:first-child {\n  margin-left: 0;\n}\n.zcat-tabs-code .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-default);\n}\n/* Code tab slide (skewed right edge) */\n.zcat-tab-code-slide {\n  position: absolute;\n  top: -1px;\n  right: -10px;\n  width: 20px;\n  height: 36px;\n  transform: skew(26deg);\n  background: var(--zcat-tabs-code-bg-default);\n  border: 1px solid var(--zcat-tabs-code-border-default);\n  border-left: none;\n  border-radius: 0 4px 0 0;\n  z-index: 1;\n  border-bottom: none;\n}\n/* Code hover */\n.zcat-tabs-code .zcat-tab-title:hover {\n  color: var(--zcat-tabs-code-text-hover);\n}\n.zcat-tabs-code .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-hover);\n}\n/* Code active */\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-code-text-active);\n  background: var(--zcat-tabs-code-bg-active);\n  font-weight: 600;\n  z-index: 2;\n}\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active .zcat-tab-code-slide {\n  background: var(--zcat-tabs-code-bg-active);\n}\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-active);\n}\n/* Code body */\n.zcat-tabs-code .zcat-tab-body {\n  border: 1px solid var(--zcat-tabs-primary-border-default);\n  padding: 16px;\n  margin-top: -1px;\n}\n\n/* ===== SIZE VARIANTS ===== */\n.zcat-tabs-sm .zcat-tab-title {\n  height: 24px;\n  font-size: 13px;\n}\n.zcat-tabs-exsm .zcat-tab-title {\n  height: 20px;\n  font-size: 12px;\n}\n</style>";;
ZcatTab._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"tX","p":[0,3,0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[0,7],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[0,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[3,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;
ZcatTab._observedAttributes = ["self", "zcatProp", "activeTabId"];

ZcatTab.register("zcat-tab", {
  hash: "ZcatTab_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=tab-comp.js.map
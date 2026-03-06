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
  hash: "TabComp_4",
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
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js */ 33893575);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-tabs.js */ 80289381);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatTab extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
		super();
	}

    // TabDetails: prop('object',{default:{
    // 	variant: 'primary',
    // 	activeTab: 'lyteTabActive',
    // 	height: '200px',
    // 	closeIcon: 'false',
    // 	sizeClass:'default',
    // 	list: [
    // 		{	
    // 			id:'tab1',
    // 			icon:{
    // 				name: '',
    // 				class: 'zcat-w14 zcat-h14 zcat-tab-color zcat-flex-center'
    // 			},
    // 			title: {
    // 				name: 'Tab1',
    // 				badge: ''
    // 			},
    // 			body: {
    // 				yield: 'Tabbody1' //template name
    // 			}
    // 		},
    // 		{
    // 			id:'tab2',
    // 			icon:{
    // 				name: '',
    // 				class: 'zcat-w14 zcat-h14 zcat-tab-color zcat-flex-center'
    // 			},
    // 			title: {
    // 				name: 'Tab2',
    // 				badge: ''
    // 			},
    // 			body: {
    // 				yield: 'Tabbody2' //template name
    // 			}
    // 		}
    // 	]
    // 	}
    // })

    data(arg1) {
		return Object.assign(super.data({
			self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      		zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object')
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			async customLbindForTab(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
		
				// if (
				//   prop.variant == 'secondary' &&
				//   !event.target.closest('#zcatSecondaryAccordion')
				// ) {
				//   return false;
				// }
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			}
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

ZcatTab._template = "<template tag-name=\"zcat-tab\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-plus\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M6.99998 2.91675V11.0834M2.91665 7.00008H11.0833\" stroke=\"#101F3E\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-tabs class=\"{{expHandlers(zcatProp.variant,'?:',zcatProp.variant,'')}}-tabs lyteTabDefaultTop {{zcatProp.class}} {{zcatProp.sizeClass}}\" data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-hover=\"{{expHandlers(zcatProp.hover,'?:',zcatProp.hover,'')}}\" lt-prop-active-class=\"{{expHandlers(zcatProp.activeTab,'?:',zcatProp.activeTab,'lyteTabActive')}}\" lt-prop=\"{&quot;position&quot; : {&quot;pos&quot; : &quot;{{expHandlers(zcatProp.position,'?:',zcatProp.position,&quot;&quot;)}}&quot;, &quot;align&quot; : &quot;{{expHandlers(zcatProp.align,'?:',zcatProp.align,&quot;&quot;)}}&quot;,&quot;height&quot; : &quot;{{expHandlers(zcatProp.height,'?:',zcatProp.height,&quot;&quot;)}}&quot;,&quot;type&quot; : &quot;{{expHandlers(zcatProp.type,'?:',zcatProp.type,&quot;&quot;)}}&quot;,&quot;max-width&quot; : &quot;{{expHandlers(zcatProp.maxWidth,'?:',zcatProp.maxWidth,&quot;&quot;)}}&quot;,&quot;tabStyle&quot; : &quot;{{expHandlers(zcatProp.tabStyle,'?:',zcatProp.tabStyle,&quot;&quot;)}}&quot;,&quot;menuWrapperClass&quot; : &quot;{{expHandlers(zcatProp.menuWrapperClass,'?:',zcatProp.menuWrapperClass,&quot;&quot;)}}&quot;}}\" lt-prop-close-icon=\"{{expHandlers(zcatProp.closeIcon,'?:',zcatProp.closeIcon,'false')}}\" on-before-open=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onBeforeOpen)}}\" on-open=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onOpen)}}\" on-before-menu-open=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onBeforeMenuOpen)}}\" on-menu-open=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onMenuOpen)}}\" on-before-menu-close=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onBeforeMenuClose)}}\" on-menu-close=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onMenuClose)}}\" on-menu-click=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onMenuClick)}}\" on-before-menu-render=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onBeforeMenuRender)}}\" on-after-menu-render=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onAfterMenuRender)}}\" on-before-delete=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onBeforeDelete)}}\" on-delete=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onDelete)}}\" after-render=\"{{method(&quot;customLbindForTab&quot;,zcatProp.onAfterRender)}}\"> <template is=\"registerYield\" yield-name=\"tabYield\"> <lyte-tab-head style=\"{{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','width: fit-content;','')}}\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-tab-title lt-prop-id=\"{{item.id}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.icon.name}}\" lc-id=\"lc_id_0\"> <lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}}\"></lyte-svg> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.title.badge}}\" lc-id=\"lc_id_0\"> {{item.title.name}} </template><template default=\"\"> <p class=\"tab-title\">{{item.title.name}}</p> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','code')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"code-tab-slide\"></div></template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.title.badge}}\" lc-id=\"lc_id_0\"> <div class=\"zcat-tab-badge\">{{item.title.badge}}</div> </template></template> </lyte-tab-title></template> </lyte-tab-head> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','code')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-tab-body style=\"{{expHandlers(expHandlers(zcatProp.variant,'===','primary'),'?:','border: 1px solid var(--zcat-tabs-primary-border-default); border-top: 0px;','')}}\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-tab-content id=\"{{item.id}}\"> <lyte-yield yield-name=\"{{item.body.yield}}\"></lyte-yield> </lyte-tab-content></template> </lyte-tab-body></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','code')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-tab-body style=\"{{expHandlers(expHandlers(zcatProp.variant,'===','code'),'?:','border: 1px solid var(--zcat-tabs-primary-border-default) !important; margin-bottom: -1px;','')}}\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-tab-content id=\"{{item.id}}\"> <lyte-yield yield-name=\"{{item.body.yield}}\"></lyte-yield> </lyte-tab-content></template> </lyte-tab-body></template></template> </template> </lyte-tabs> </template><style>lyte-tabs * {\n    box-sizing: border-box;\n  }\n  lyte-tabs {\n    display: block;\n    background: var(--zcat-tabs-primary-bg);\n    position: relative;\n    width: 100%;\n    font-family: var(--zcat-font-family-primary);\n    font-weight: 400;\n  }\n  .primary-tabs lyte-tab-head {\n    display: flex;\n    border: none;\n    border-bottom: 1px solid var(--zcat-color-primarylight);\n    box-sizing: border-box;\n  }\n  .primary-tabs lyte-tab-title {\n    font-weight: 400;\n    font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-primary-text-default);\n    padding: 0 8px;\n    margin: 0 10px 0 0;\n    cursor: pointer;\n    box-sizing: border-box;\n    background: var(--zcat-tabs-primary-bg);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    border-bottom: 2px solid transparent;\n    height: 28px;\n    border-radius: 4px 4px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    position: relative;\n  }\n  .primary-tabs lyte-tab-title:last-child{\n    margin-right: 0;\n  }\n  .primary-tabs lyte-tab-title .zcat-tab-color{\n    stroke: var(--zcat-tabs-primary-icon-default);\n  }\n  .secondary-tabs lyte-tab-head,.secondary-tabs.small lyte-tab-head{\n    display: flex;\n    border: none;\n    background: var(--zcat-tabs-secondary-bg-default);\n    border-radius: 6px;\n    border-bottom: none;\n    padding: 4px;\n    gap: 4px;\n    box-sizing: border-box;\n  }\n  .secondary-tabs.Extsmall lyte-tab-head{\n    gap: 2px;\n  }\n  .secondary-tabs lyte-tab-title {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-secondary-text-default);\n    padding: 0 6px;\n    margin: 0;\n    cursor: pointer;\n    box-sizing: border-box;\n    background: transparent;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    border-radius: 4px;\n    height: 28px;\n    box-sizing: border-box;\n  }\n  .secondary-tabs lyte-tab-title .zcat-tab-color{\n    stroke: var(--zcat-tabs-secondary-icon-default);\n  }\n  .secondary-tabs.small lyte-tab-title,.secondary-tabs.Extsmall lyte-tab-title{\n    height: 20px;\n  }\n  .secondary-tabs.Extsmall lyte-tab-title{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  }\n  .code-tabs lyte-tab-head {\n    display: flex;\n    border: none;\n    border-radius: 6px;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .code-tabs lyte-tab-title {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    padding: 10px;\n    margin: 0 0 0 10px;\n    border: 1px solid var(--zcat-tabs-code-border-default);\n    cursor: pointer;\n    box-sizing: border-box;\n    background: var(--zcat-tabs-code-bg-default);\n    border-radius: 6px 6px 0 0;\n    overflow: visible;\n    height: 36px;\n    border-bottom: 0px;\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title:hove{\n    border-color: var(--zcat-tabs-code-border-default);\n    background: var(--zcat-tabs-code-bg-default);\n  }\n  .code-tabs lyte-tab-title:first-child {\n    margin: 0;\n  }\n  .code-tabs lyte-tab-title .zcat-tab-color{\n    stroke: var(--zcat-tabs-code-icon-default);\n  }\n  .code-tabs .code-tab-slide {\n    position: absolute;\n    top: -1px;\n    right: -10px;\n    width: 20px;\n    height: 36px;\n    transform: skew(26deg);\n    background: var(--zcat-tabs-code-bg-default);\n    border: 1px solid var(--zcat-tabs-code-border-default);\n    border-left: none;\n    border-radius: 0 4px 0 0;\n    z-index: 1;\n    border-bottom: 0;\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title:hover .code-tab-slide{\n    background: var(--zcat-tabs-code-bg-hover);\n  }\n  .code-tabs .lyteTabActive .code-tab-slide {\n    background: var(--zcat-tabs-code-bg-active);\n    border-bottom: none;\n  }\n  .code-tabs .tab-title {\n    font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-code-text-default);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 200px;\n    margin: 0 1px 0 0;\n  }\n  lyte-tab-title span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .primary-tabs lyte-tab-title.lyteTabActive {\n    font-family: var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-primary-text-active);\n    font-weight: 500;\n  }\n  .primary-tabs lyte-tab-title:hover,.primary-tabs lyte-tab-title.lyteTabActive:hover{\n    color: var(--zcat-tabs-primary-text-hover);\n  }\n  lyte-tab-body {\n    display: block;\n    border: none;\n    padding: 0;\n    font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n    text-align: left;\n    overflow: auto;\n    box-sizing: border-box;\n  }\n  lyte-tab-content {\n    color: var(--zcat-body-text-primary);\n  }\n  .lyteTabShow {\n    display: block;\n    flex-grow: 1;\n  }\n  .lyteTabHide {\n    display: none;\n  }\n  /*  Tab top starts */\n  .lyteTabDefaultTop lyte-tab-body {\n    border-top: 0;\n  }\n  .lyteTabDefaultTop lyte-tab-head {\n    border-bottom: 0;\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive {\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-active);\n    z-index: 1;\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive .zcat-tab-color{\n    stroke: var(--zcat-tabs-primary-icon-active);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive {\n    border-bottom: none;\n    background: var(--zcat-tabs-secondary-bg-active);\n    color: var(--zcat-tabs-secondary-text-active);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive .zcat-tab-color{\n    stroke: var(--zcat-tabs-secondary-icon-active);\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive {\n    border-bottom: none;\n    background: var(--zcat-tabs-code-bg-active);\n    color: var(--zcat-tabs-code-text-active);\n    z-index: 1;\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive .zcat-tab-color{\n    stroke: var(--zcat-tabs-code-icon-active);\n  }\n  lyte-tab-title,\n  lyte-tab-title.lyteTabActive {\n    outline: none !important;\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title:hover {\n    background: var(--zcat-tabs-primary-bg-hover);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-hover);\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title:hover .zcat-tab-color{\n    stroke: var(--zcat-tabs-primary-icon-hover);\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover {\n    background: var(--zcat-tabs-primary-bg-active);\n    color: var(--zcat-tabs-primary-text-active);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-active);\n  }\n  .primary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover .zcat-tab-color{\n    stroke: var(--zcat-tabs-primary-icon-active);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title:hover {\n    color: var(--zcat-tabs-secondary-text-hover);\n    background: var(--zcat-tabs-secondary-bg-hover);\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n  .code-tabs lyte-tab-title:hover .tab-title{\n    color: var(--zcat-tabs-code-text-hover);\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive .tab-title {\n    color: var(--zcat-tabs-code-text-active);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover {\n    border-bottom: none;\n    background: var(--zcat-tabs-secondary-bg-active);\n    color: var(--zcat-tabs-secondary-text-active);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title:hover .zcat-tab-color{\n    stroke: var(--zcat-tabs-secondary-text-hover);\n  }\n  .secondary-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover .zcat-tab-color{\n    stroke: var(--zcat-tabs-secondary-icon-active);\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title:hover {\n    /* border: 1px solid var(--zcat-color-grey2); */\n    color: var(--zcat-tabs-code-text-hover);\n    background: var(--zcat-tabs-code-bg-hover);\n    border-bottom: none;\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover {\n    border: 1px solid var(--zcat-tabs-code-border-default);\n    border-bottom: none;\n    background: var(--zcat-tabs-code-bg-hover);\n    color: var(--zcat-tabs-code-text-hover);\n    z-index: 1;\n  }\n  .code-tabs.lyteTabDefaultTop lyte-tab-title:hover .zcat-tab-color,.code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover .zcat-tab-color{\n    stroke: var(--zcat-tabs-code-text-hover);\n  }\n  /*  Tab top ends */\n  /*  Tab bottom starts */\n  .lyteTabDefaultBottom lyte-yield {\n    display: flex;\n    flex-direction: column;\n  }\n  .lyteTabDefaultBottom lyte-tab-head {\n    order: 2;\n    border-top-color: #e5e5e5;\n  }\n  .lyteTabDefaultBottom lyte-tab-body {\n    order: 1;\n    border-bottom: 0;\n  }\n  .lyteTabDefaultBottom lyte-tab-title {\n    border-top: 1px solid #e5e5e5;\n    margin-top: -1px;\n  }\n  .lyteTabDefaultBottom lyte-tab-title.lyteTabActive {\n    border-top: 1px solid #2c7bd0;\n  }\n  .lyteTabDefaultBottom lyte-tab-title:hover {\n    border-top-color: #666;\n  }\n  .lyteTabDefaultBottom lyte-tab-title.lyteTabActive:hover {\n    border-top-color: #2c7bd0;\n  }\n  /*  Tab bottom ends */\n  /*  Tab left and right starts */\n  .lyteTabDefaultLeft lyte-yield {\n    display: flex;\n  }\n  .lyteTabDefaultLeft lyte-tab-head,\n  .lyteTabDefaultRight lyte-tab-head {\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 10px 0;\n    width: 200px;\n    text-align: left;\n    overflow: auto;\n  }\n  .lyteTabDefaultLeft lyte-tab-head {\n    border-right: 0;\n  }\n  .lyteTabDefaultLeft lyte-tab-body,\n  .lyteTabDefaultRight lyte-tab-body {\n    flex-grow: 10;\n    width: calc(100% - 200px);\n    padding-top: 18px;\n  }\n  .lyteTabDefaultLeft lyte-tab-title.lyteTabActive,\n  .lyteTabDefaultLeft lyte-tab-title.lyteTabActive:hover,\n  .lyteTabDefaultRight lyte-tab-title.lyteTabActive,\n  .lyteTabDefaultRight lyte-tab-title.lyteTabActive:hover {\n    border-left: 1px solid #2c7bd0;\n    background: #f5f5f5;\n    position: relative;\n    z-index: 10;\n  }\n  .lyteTabDefaultRight lyte-yield {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .lyteTabDefaultRight lyte-tab-head {\n    border-left: 0;\n  }\n  .lyteTabDefaultLeft lyte-tab-title,\n  .lyteTabDefaultRight lyte-tab-title {\n    margin: 0;\n    padding: 10px 15px;\n    overflow: visible;\n  }\n  .lyteTabDefaultLeft lyte-tab-title:hover,\n  .lyteTabDefaultRight lyte-tab-title:hover {\n    background: #fafafa;\n  }\n  /*  Tab left and right ends */\n  .lyteTabCloseIcon {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M10.5 3.5L3.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 3.5L10.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-position: -2px;\n    width: 10px;\n    height: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 10px;\n    position: relative;\n    z-index: 1;\n    opacity: 0.7;\n  }\n  .lyteTabCloseIcon:hover {\n    opacity: 1;\n  }\n  .lyteTabAlignStart {\n    justify-content: flex-start;\n  }\n  .lyteTabAlignCenter {\n    justify-content: center;\n  }\n  .lyteTabAlignEnd {\n    justify-content: flex-end;\n  }\n  .lyteTabOverflowV lyte-tab-title {\n    overflow: visible;\n  }\n  .lyteTabForceHide {\n    display: none;\n  }\n  #moreMenu {\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.7;\n    padding: 10px;\n  }\n  #moreMenu.lyteMenuSelected,\n  #moreMenu:hover {\n    opacity: 1;\n  }\n  #moreMenu span {\n    background-image: url(../../images/sprite_lyte.svg);\n    background-position: -294px -165px;\n    width: 17px;\n    height: 5px;\n  }\n  .lyteTabRightCollapse {\n    flex-flow: row-reverse;\n    justify-content: flex-start;\n  }\n  .lyteTabVH lyte-tab-title,\n  .lyteTabVH .lyteMenuSelected {\n    visibility: hidden;\n  }\n  lyte-tab-title.lyteTabDisable {\n    pointer-events: none;\n    cursor: default;\n    opacity: 0.7;\n  }\n  /*  Lyte Nested Tabs CSS Begins */\n  .lyteNestedTab .lyteTabDefaultTop > lyte-yield {\n    display: block;\n  }\n  .lyteNestedTab .lyteTabDefaultTop > lyte-yield > lyte-tab-head {\n    flex-direction: row;\n    padding: 0;\n    width: auto;\n    border: 1px solid #ddd;\n    overflow: visible;\n  }\n  .lyteNestedTab .lyteTabDefaultTop > lyte-yield > lyte-tab-head lyte-tab-title {\n    margin: 0 10px;\n    padding: 10px 5px;\n    overflow: hidden;\n    margin-bottom: -1px;\n    border: 0;\n    border-bottom: 1px solid #e5e5e5;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultTop\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title:hover {\n    background: #fff;\n    border: 0;\n    border-bottom: 1px solid #666;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultTop\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title.lyteTabActive {\n    border: 0;\n    border-bottom: 1px solid #2c7bd0;\n    background: #fff;\n  }\n  .lyteNestedTab .lyteTabDefaultTop > lyte-yield > lyte-tab-body {\n    width: auto;\n    padding: 15px;\n    border: 1px solid #ddd;\n    border-top: 0;\n  }\n  .lyteNestedTab .lyteTabDefaultBottom > lyte-yield {\n    flex-direction: column;\n  }\n  .lyteNestedTab .lyteTabDefaultBottom > lyte-yield > lyte-tab-head {\n    flex-direction: row;\n    padding: 0;\n    width: auto;\n    border: 1px solid #ddd;\n    overflow: visible;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultBottom\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title {\n    margin: 0 10px;\n    padding: 10px 5px;\n    overflow: hidden;\n    margin-top: -1px;\n    border: 0;\n    border-top: 1px solid #e5e5e5;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultBottom\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title:hover {\n    background: #fff;\n    border: 0;\n    border-top: 1px solid #666;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultBottom\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title.lyteTabActive {\n    border: 0;\n    border-top: 1px solid #2c7bd0;\n    background: #fff;\n  }\n  .lyteNestedTab .lyteTabDefaultBottom > lyte-yield > lyte-tab-body {\n    width: auto;\n    padding: 15px;\n    border: 1px solid #ddd;\n    border-bottom: 0;\n  }\n  .lyteNestedTab .lyteTabDefaultLeft > lyte-yield {\n    flex-direction: row;\n  }\n  .lyteNestedTab .lyteTabDefaultLeft > lyte-yield > lyte-tab-head {\n    order: 0;\n    border: 1px solid #ddd;\n    border-right: 0;\n  }\n  .lyteNestedTab .lyteTabDefaultLeft > lyte-yield > lyte-tab-head lyte-tab-title {\n    border: 0;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultLeft\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title.lyteTabActive {\n    border-bottom: 0;\n    border-left: 1px solid #2c7bd0;\n  }\n  .lyteNestedTab .lyteTabDefaultLeft > lyte-yield > lyte-tab-body {\n    border: 1px solid #ddd;\n  }\n  .lyteNestedTab .lyteTabDefaultRight > lyte-yield {\n    flex-direction: row-reverse;\n  }\n  .lyteNestedTab .lyteTabDefaultRight > lyte-yield > lyte-tab-head {\n    border: 1px solid #ddd;\n    border-left: 0;\n    order: 0;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultRight\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title {\n    border: 0;\n  }\n  .lyteNestedTab\n    .lyteTabDefaultRight\n    > lyte-yield\n    > lyte-tab-head\n    lyte-tab-title.lyteTabActive {\n    border: 0;\n    border-left: 1px solid #2c7bd0;\n  }\n  .lyteNestedTab .lyteTabDefaultRight > lyte-yield > lyte-tab-body {\n    border: 1px solid #ddd;\n  }\n\n  .zcat-tab-badge{\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: var(--zcat-badge-secondary-bg-primary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font: var(--zcat-font-10-12) var(--zcat-font-family-primary);\n    color: var(--zcat-badge-secondary-text-primary);\n  }\n\n  .code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover .code-tab-slide {\n    background: var(--zcat-tabs-code-bg-hover);\n}\n\n.code-tabs.lyteTabDefaultTop lyte-tab-title.lyteTabActive:hover .code-tab-slide{\n  background: var(--zcat-tabs-code-bg-hover);\n}</style>";;
ZcatTab._dynamicNodes = [{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":[null,"'?:'","'width: fit-content;'","''"]}}}},{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":4,"sibl":[3]},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"tX","p":[1,0],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[0,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[4,0],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"cD","p":[1],"in":2,"sibl":[1]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":[null,"'?:'","'border: 1px solid var(--zcat-tabs-primary-border-default); border-top: 0px;'","''"]}}},"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"f","p":[0,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"i","p":[0,1],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":[null,"'?:'","'border: 1px solid var(--zcat-tabs-primary-border-default) !important; margin-bottom: -1px;'","''"]}}},"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"f","p":[0,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"i","p":[0,1],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatTab._observedAttributes = ["self", "zcatProp"];


ZcatTab.register("zcat-tab", {
    hash: "ZcatTab_4",
    refHash: "C_zcat-app_app_0"
}); 


/***/ }),

/***/ 80289381:
/*!*********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-tabs.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteTabsComponent": () => (/* binding */ LyteTabsComponent)
/* harmony export */ });
/* harmony import */ var _lyte_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lyte-menu.js */ 56289784);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@slyte/component/index.js */ 93132498);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__);







/**
 * Renders a tabs component
 * @component lyte-tabs
 * @version 1.0.0
 * @dependencies lyte-menu
 */

/**
 * @domEvents commonEvents keydown, keyup, focus, blur, focusin, focusout 
 */

class LyteTabsComponent extends _component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
        this._lyteUtilFunctions = [ 'addTab','deleteTab','openTab','enableTab','disableTab','addCloseIcon','resizeTab' ];
    }

    data(arg1) {
        return Object.assign(super.data({

          /**
             * @experimental ltPropYield
             */
          "ltPropYield": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean", { "default": true }),

          /**
           * @componentProperty {string} ltPropHover
           * @version 1.0.0
           * @default lyteTabHover 
           * @input
           */
          "ltPropHover": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'hover', 'lyteTabHover' ), 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropActiveClass
           * @version 1.0.0
           * @default lyteTabActive
           * @input
           */
          "ltPropActiveClass": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'activeClass', 'lyteTabActive' ), 'input' : 'true', 'output' : 'false' }),
          /**
           * @typedef {object} position
           * @property {top|bottom|left|right} pos
           * @property {top|bottom|left|right} align
           */
          /**
           * @componentProperty {object} ltPropPosition
           * @version 1.0.0
           * @default { "pos":"top","align":"left" }
           * @input
           */
          "ltPropPosition": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object", { "default":  { 'pos': 'top', 'align': 'left' }, 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {boolean} ltPropCloseIcon
           * @version 1.0.0
           * @default false
           * @input
           */
          "ltPropCloseIcon": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean", { "default": false, 'input' : 'true', 'output' : 'false' }),
          "prevTarget": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object", { "default": null }),

          /**
           * @componentProperty {string} ltPropHeight
           * @version 1.0.0
           * @default 400px
           * @suffix px,pt,cm,mm,vh,vm,em
           * @input
           */
          "ltPropHeight": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'height', "400px"),'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropType
           * @version 1.0.0
           * @options collapse
           * @input
           */
          "ltPropType": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string", { 'input' : 'true', 'output' : 'false' }), //options - collapse

          /**
           * @componentProperty {string} ltPropMaxWidth
           * @version 1.0.0
           * @default 90%
           * @condition ltPropType collapse
           * @suffix px,pt,cm,mm,vh,vm,em,%
           * @input
           */
          "ltPropMaxWidth": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'maxWidth', "90%"), 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropTabStyle
           * @version 2.2.7
           * @options nested
           * @input
           */
          "ltPropTabStyle": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{'input' : 'true', 'output' : 'false'}),     //nested

          /**
           * @componentProperty {string} ltPropMenuWrapperClass
           * @condition ltPropType collapse
           * @version 2.2.8
           * @input
           */
          "ltPropMenuWrapperClass": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{'input' : 'true', 'output' : 'false'}),
          /**
           * @typedef {object} currentTab 
           * @property {string} index
           * @property {string} name
           */
          /**
           * @componentProperty {currentTab} ltPropCurrentTab
           * @version 3.6.0
           * @output
           */
          "ltPropCurrentTab": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object",{'input' : 'false', 'output' : 'true'}),
           /**
           * @componentProperty {number} ltPropActiveTab
           * @version 3.110.0
           * @default 0
           * @minValue 0
           * @input 
           * @output 
           */
          "ltPropActiveTab": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('number',{ 'input' : 'true', 'output' : 'true'}),
          "ltPropAriaAutoActivation" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean',{ "default": false}),
          "ltPropHiddenTabs": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('array', { "default": [] }),
          "ltPropFireOnInit": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean',{"default": true }),
          "createTabMenu" :  (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)( 'boolean', { "default" : false } ),
          "ltPropMenuYield": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean',{ "default" : false}),
          "menuLabels": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("array", { "default": [] })
        }), arg1);
    }

    init() {
        /**
         * @utility addTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { object } newTab
         */
        this.$node.addTab = function (newTab) {
            this.component.constructTabs(this, newTab);
            this.component.collapseHeader(true);
        };
        /**
         * @utility deleteTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.deleteTab = function (tabId) {
            this.component.deleteTabContent(tabId, null);
        };
        /**
         * @utility openTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.openTab = function (tabId) {
            this.component.openTabContent(tabId, null);
        };
        /**
         * @utility enableTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.enableTab = function (tabId) {
            this.component.enableTab(tabId);
        };
        /**
         * @utility disableTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.disableTab = function (tabId) {
            this.component.disableTab(tabId);
        };
        /**
         * @utility addCloseIcon
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         */
        this.$node.addCloseIcon = function () {
            this.component.checkCloseIcon();
        };
        /**
         * @utility resizeTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         */
        this.$node.resizeTab = function(){
            this.component.collapseHeader(true);
            this.component.checkHeightOnResize();   
        }
        this.$node.reselectTab = function(){
            var title = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
            this.component.openTabContent(title[this.component.getData('ltPropActive').id].getAttribute('lt-prop-id'));
        }
        this.$node.hideTab = function(id){
            if(!Array.isArray(id)){
                id = [id];
            }
            var nextTab;
            var hiddenTab = this.component.getData('ltPropHiddenTabs');
            id.forEach(function(tab){
                if(hiddenTab.includes(tab)){
                    return;
                }
                hiddenTab.push(tab);
                var tab = this.querySelector('lyte-tab-title[lt-prop-id="'+tab+'"]');
                if(tab){
                    tab.classList.add('lyteTabTitleHide');
                    if(tab.classList.contains('lyteTabActive')){
                        nextTab = tab;
                    }
                }
            }.bind(this));
            var prevTab = tab;
            while(nextTab && nextTab.classList.contains('lyteTabTitleHide')){
                nextTab = nextTab.nextElementSibling;
            }
            if(!nextTab){
                while(prevTab && prevTab.classList.contains('lyteTabTitleHide')){
                    prevTab = prevTab.nextElementSibling;
                }
                nextTab = prevTab;
            }
            this.component.openTabContent(nextTab.getAttribute('lt-prop-id'));
            this.component.collapseHeader(true);
        }
        
        this.$node.showTab = function(id){
            if(!Array.isArray(id)){
                id = [id];
            }
            var hiddenTab = this.component.getData('ltPropHiddenTabs');
            id.forEach(function(tab){
                const index = hiddenTab.indexOf(tab);
                if (index < 0) { 
                   return;
                }
                hiddenTab.splice(index, 1); 
                var tab = this.querySelector('lyte-tab-title[lt-prop-id="'+tab+'"]');
                if(tab){
                    tab.classList.remove('lyteTabTitleHide');
                }
            }.bind(this))  
            this.component.collapseHeader(true);
        }
    }

    didConnect() {
        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('LYTE-TAB-HEAD',this.$node).attr('role','tablist');
        this.initialFunc(true);
        this.rendered = true;
    }

    didDestroy() {
        if (this.$node.checkTabs) {
            clearTimeout(this.$node.checkTabs);
            this.$node.checkTabs = false;
        }
    }

    /**
     * The method is going to perform the computations after the tabs component is rendered
     * @param {boolean} onRender - boolean value determines if afterRender method will be triggered or not
     *
     */
    initialFunc(onRender) {
        var _this = this;
        //Checking whether the lyte-tabs is having any content or not by counting its child element for avoiding unnecessary error
        if (this.$node.childElementCount > 1 || this.$node.children[0].tagName === "LYTE-TAB") {

            //Checking the format provided by user for lyte-tabs
            /* **-- NOT REQUIRED NOW --**   --   If the format is Format 2 then convert it to format 1 
            if(this.$node.firstElementChild.tagName === "LYTE-TAB"){
                var node = this.$node.cloneNode(true);
                this.$node.innerHTML = "";
                this.$node.append(document.createElement('lyte-tab-head'));
                this.$node.append(document.createElement('lyte-tab-body'));
                var childNodes = node.querySelectorAll('lyte-tab');
                for(var v=0; v<childNodes.length ; v++){
                    this.constructTabs(this.$node,childNodes[v]);
                }
            }
            **-- NOT REQUIRED NOW --** */
            
            this.checkTabStyle();
            this.$node.style.height = this.getData('ltPropHeight');
            var head = this.$node.querySelector('lyte-tab-head');
            head.classList.add('lyteTabNav');
            if (this.getData('ltPropType') == "collapse") {
                head.classList.add('lyteTabOverflowV');
            }
            var position = this.getData("ltPropPosition");
            var labels = this.getHeader(head.querySelectorAll('lyte-tab-title')); /*this.getHeader(head.children);*/
            // var contents = $L('lyte-tab-content',this.$node.querySelector('lyte-tab-body'));
            var contents = this.getContent( _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('lyte-tab-content',this.$node.querySelector('lyte-tab-body')) );
            var active = this.getData('ltPropActiveClass');
            var pos;
            var tabpanel = ['top','bottom'];
            if(!tabpanel.includes(position.pos)){
                head.setAttribute('aria-orientation','vertical')
            }
            this.setPosition(position);
            this.checkCloseIcon(head);

            var clickFn = function (event) { this.showTab(event) };
            var mouseoverFn = function (event) { this.mouseOver(event) };
            var mouseoutFn = function (event) { this.mouseOut(event) };
            var keydownFn = function (event) { this.keydown(event) }.bind(this);
            //Binds the events to tab-head
            var _this = this;
            head.addEventListener('click', clickFn.bind(this), true);
            head.addEventListener('mouseover', mouseoverFn.bind(this), true);
            head.addEventListener('mouseout', mouseoutFn.bind(this), true);

            this.$node.addEventListener('focusin',function(event){
                _this.$node.querySelector('lyte-tab-head').addEventListener('keydown', keydownFn, true);
            });
            this.$node.addEventListener('focusout',function(event){
                _this.$node.querySelector('lyte-tab-head').removeEventListener('keydown',keydownFn,true);
            });
            //To open a tab content
            var curr_tab = this.getData('ltPropActiveTab');
            if( curr_tab ){
                labels[curr_tab].classList.add(active)
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[curr_tab]).attr('tabindex',0);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[curr_tab]).attr('aria-selected','true');
                pos = curr_tab;
            }else{
                for (var i = 0; i < labels.length; i++) {
                    if (labels[i].classList.contains(active)) {
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[i]).attr('tabindex',0);
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[i]).attr('aria-selected','true');
                        pos = i;
                    }
                }
            }
           var initialTab = 0;
           var foundfirstTab = false;
           var activeTabHide = false;
           var hiddenTab = this.getData('ltPropHiddenTabs');
            for (var i = 0; i < labels.length; i++) {
                if(contents[i]){
                    if (pos && (pos === i || labels[pos].getAttribute('lt-prop-id') === contents[i].id)) {
                        this.executeOnBeforeOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, null);
                        contents[i].classList.remove('lyteTabHide');
                        contents[i].classList.add('lyteTabShow');
                        this.setData('ltPropCurrentTab', { 'index': pos, 'name': labels[pos].textContent.trim(),'id' : labels[pos].getAttribute('lt-prop-id') });
                        this.executeOnOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, onRender);
                    }
                    else {
                        contents[i].classList.remove('lyteTabShow');
                        contents[i].classList.add('lyteTabHide');
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[i]).attr('aria-selected',false);
                    }
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[i]).attr('aria-controls',contents[i].id);
                }
                if(hiddenTab.includes(labels[i].getAttribute('lt-prop-id'))){
                    labels[i].classList.add('lyteTabTitleHide');
                    if(i == 0 || pos == i){
                        activeTabHide = true;
                    }
                }else if(!foundfirstTab && activeTabHide){
                    foundfirstTab = true;
                    initialTab = i;
                }
            }
            if(!foundfirstTab && activeTabHide){
                initialTab = null
            }
            if (!pos && labels.length && initialTab !== null) {
                pos = initialTab ;
                this.executeOnBeforeOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, null,onRender);
                labels[pos].classList.add(active);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[pos]).attr('tabindex',0);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(labels[pos]).attr('aria-selected','true');
                if(contents[pos]){
                    contents[pos].classList.remove('lyteTabHide');
                    contents[pos].classList.add('lyteTabShow');
                }
                this.setData('ltPropCurrentTab', { 'index': pos, 'name': labels[pos].textContent.trim(),'id' : labels[0].getAttribute('lt-prop-id') });
                this.executeOnOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, onRender);
            }
            this.setData('prevTarget', labels[pos]);


            //dispatch Event
            
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {    //Sets the height and width of the tab label and content based on the given values and positions.
                if (this.getData('ltPropHeight') == "auto") {
                    if (position.pos === "left" || position.pos === "right") {
                        this.$node.querySelector('.lyteTabNav').style.height = "auto";
                        this.$node.querySelector('lyte-tab-body').style.height = "auto";
                    }
                    if (position.pos === "top" || position.pos === "bottom") {
                        this.$node.querySelector('lyte-tab-body').style.height = "auto";
                    }
                    this.makeAlignment(this.getData("ltPropPosition"));
                    if(onRender){
                        window._lyteUiUtils.dispatchEvent('lytetabafterrender', this.$node );
                    }
                    /**
                     * This method is invoked after a lyte-tabs component is rendered in the page.
                     * @method afterRender
                     * @author santhoshraj.s@zohocorp.com
                     * @param { object } component
                    */
                    onRender && this.getMethods('afterRender') && this.executeMethod('afterRender', this.$node);
                }
                else {
                    var cs = window.getComputedStyle(this.$node);
                    var borderDimensionY = ((cs.borderTop ? parseFloat(cs.borderTop) : 0) +
                        (cs.borderBottom ? parseFloat(cs.borderBottom) : 0));
                    var navHeight = this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height;
                    var thisHeight = parseInt(cs.height) - borderDimensionY;
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
                        if (position.pos === "left" || position.pos === "right") {
                            this.$node.querySelector('.lyteTabNav').style.height = thisHeight + "px";
                            this.$node.querySelector('lyte-tab-body').style.height = thisHeight + "px";
                        }
                        if (position.pos === "top" || position.pos === "bottom") {
                            this.$node.querySelector('lyte-tab-body').style.height = (thisHeight - navHeight) + "px";
                        }
                        this.makeAlignment(this.getData("ltPropPosition"));
                        if(onRender){
                           window._lyteUiUtils.dispatchEvent('lytetabafterrender', this.$node );
                        }
                        onRender && this.getMethods('afterRender') && this.executeMethod('afterRender', this.$node);
                    }, this);
                }
            }, this);
        }
        else {
            console.error("No content detected");
        }
    }

    checkTabStyle() {
        if (this.getData('ltPropTabStyle') === "nested") {
            this.$node.classList.add('lyteNestedTab');
        }
    }

    keydown(event) {
        var menu = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('#moreMenu',this.$node)[0];
        if((event.target.tagName !== 'LYTE-TAB-TITLE' && event.target.id !== "moreMenu") || (menu && menu.classList.contains('lyteMenuSelected'))){
            return;
        }
        var head = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('lyte-tab-head',this.$node);
        var tabs = head.find('lyte-tab-title').not('.lyteTabForceHide').toArray();
        menu && tabs.push(menu);
        var curr_tab = head.find('.lyteTabFocused');
        curr_tab = curr_tab.length === 0 ? head.find('.lyteTabActive') : curr_tab;
        var tabFocus = tabs.indexOf(curr_tab[0]),prevFocus;
        var tab_length = tabs.length;
        var isVertical = head[0].getAttribute('aria-orientation') == 'vertical';
        if( ( (event.keyCode === 39 || event.keyCode === 37) && !isVertical )  || (isVertical && ( event.keyCode == 40 || event.keyCode == 38 ) ) ){
            // tabs[tabFocus].setAttribute('tabindex', -1);
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).removeClass('lyteTabHover');
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).removeClass('lyteTabFocused');
            if( event.keyCode === 39  ||  event.keyCode === 40){
                tabFocus++;
                if( tabFocus >= tab_length ){
                    tabFocus = 0;
                }
            }else{
                tabFocus--;
                if(tabFocus < 0){
                    tabFocus = tab_length - 1;
                }
            }
            // tabs[tabFocus].setAttribute('tabindex', 0);
            tabs[tabFocus].classList.add('lyteTabFocused');
            if(tabs[tabFocus].id !== "moreMenu"){
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).addClass('lyteTabHover')
            }
            if( this.getData('ltPropAriaAutoActivation') ){
                if(tabs[tabFocus].id === "moreMenu"){
                    menu.click();
                }else{
                    this.openTabContent(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).attr('lt-prop-id'), event);
                }
            }
        }
        if(event.keyCode === 8 && this.getData('ltPropCloseIcon')){
            this.$node.deleteTab(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).attr('lt-prop-id'));
            var next_tab = tabFocus - 1;
            if( next_tab < 0 ){
                next_tab = tabFocus + 1;
            }
            if( tabs[ next_tab ] ){
                this.openTabContent( tabs[ next_tab ], null);
                tabs[ next_tab ].focus();
            }
            return;
        }
        if(event.keyCode === 13 && !this.getData('ltPropAriaAutoActivation')){
            if(tabs[tabFocus].id === "moreMenu"){
                menu.click();
            }else{
                this.openTabContent(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(tabs[tabFocus]).attr('lt-prop-id'), event);
            }
        }
        tabs[tabFocus].focus();  
    }

    showTab(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target || target.tagName != 'LYTE-TAB-TITLE') {
            return;
        }
        var id = target.getAttribute('lt-prop-id');

        //If user has clicked on the close icon
        if (event.target.classList.contains('lyteTabCloseIcon')) {
            var returnVal = this.deleteTabContent(id, event);
            if (!returnVal) {
                return;
            }
            this.makeAlignment(this.getData('ltPropPosition'));
            target = (this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title').length > 0) ? this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title')[0] : null;
            if (!target) {
                this.setData('prevTarget', null);
                return
            }
            id = target.getAttribute('lt-prop-id');
            this.openTabContent(target, null);
        }
        // this.executeOnBeforeOpen(id,this.getData('prevTarget').getAttribute('lt-prop-id'));
        this.openTabContent(target, event);
        // this.openTabContent(id);
        // this.executeOnOpen(id);
        // this.setData('prevTarget',target);
    }

    mouseOver(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target ) {
            return;
        }
        var hover = this.getData('ltPropHover');
        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(target).addClass(hover);
    }

    mouseOut(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target) {
            return;
        }
        var hover = this.getData('ltPropHover');
        // event.currentTarget.classList.remove(hover);
        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(target).removeClass(hover);
    }

    getContent(children) {
        var contents = [];
        for (var i = 0; i < children.length; i++) {
            if (this.$node == _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(children[i]).closest('LYTE-TABS')[0]) {
                contents.push(children[i]);
            }
        }
        return contents;
    }

    getHeader(children) {
        var headers = [];
        for (var i = 0; i < children.length; i++) {
            if (this.$node == _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(children[i]).closest('LYTE-TABS')[0]) {
                headers.push(children[i]);
            }
        }
        return headers;
    }

    //Changes tabs in Format 2 to Format 1 structure
    //Also creates new tab if called from the addTab function
    constructTabs(parentEle, node) {
        var title = "";
        var content = "";
        var id;
        var isObject = false;
        var titleEle = document.createElement('lyte-tab-title');
        var contentEle = document.createElement('lyte-tab-content');
        if (typeof node === "object" && node.tagName === "LYTE-TAB") {
            title = node.getAttribute("lt-prop-title");
            content = node.innerHTML;
            id = node.getAttribute("lt-prop-id");
        }
        else {
            title = node.title;
            content = node.content;
            id = node.id;
            isObject = true;
        }
        if (!id) {
            id = this.generateId(title);
        }
        content = content ? content : '';
        titleEle.innerHTML = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        contentEle.innerHTML = content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        titleEle.setAttribute('lt-prop-id', id);
        //aria-attribute
        titleEle.setAttribute('aria-controls', id);
        contentEle.id = id;
        contentEle.classList.add('lyteTabHide');
       // contentEle.setAttribute('hidden',true);
        var menu = parentEle.querySelector('#moreMenu');
        if(menu){
            var titles = parentEle.querySelector('lyte-tab-head');
            titles.insertBefore(titleEle,menu);
        }else{
            parentEle.querySelector('lyte-tab-head').append(titleEle);
        }
        parentEle.querySelector('lyte-tab-body').append(contentEle);

        //Checks whether the format is changed or a new tab is added
        //If a new tab is added it will execute the code inside this if-block
        if (isObject) {
            // var clickFn = function(event){this.showTab(event)};
            // var mouseoverFn = function(event){this.mouseOver(event)};
            // var mouseoutFn = function(event){this.mouseOut(event)};
            // titleEle.addEventListener('click',clickFn.bind(this));
            // titleEle.addEventListener('mouseover',mouseoverFn.bind(this));
            // titleEle.addEventListener('mouseout',mouseoutFn.bind(this));
            if (this.getData('ltPropCloseIcon')) {
                this.createCloseIcon(new Array(titleEle));
            }
            this.makeAlignment(this.getData('ltPropPosition'));
        }

    }

    deleteTabContent(tabId, event) {
        if (tabId) {
            var returnVal = true;
            if (this.getMethods('onBeforeDelete')) {
                /**
                 * This method is invoked whenever you try to delete a tab by clicking on the close icon or by invoking the deleteTab method. If returned false form the method the sepecified tab wont be deleted.
                 * @method onBeforeDelete
                 * @author santhoshraj.s@zohocorp.com
                 * @condition ltPropCloseIcon true
                 * @param { string } tabId
                 * @param { object } component
                */
                returnVal = this.executeMethod('onBeforeDelete', tabId, this.$node, event);
                returnVal = returnVal === undefined ? true : returnVal;
            }
            if (!returnVal) {
                return false;
            }
            var content = this.$node.querySelector('#' + tabId);
            var head = this.$node.querySelector('lyte-tab-head');
            var headers = head.querySelectorAll('lyte-tab-title');
            var isCustomized = false;
            for (var v = 0; v < headers.length; v++) {
                if (headers[v].getAttribute('lt-prop-id') === tabId) {
                    if (headers[v].classList.contains('lyteTabCustomTitleWidth')) {
                        isCustomized = true;
                    }
                    head.removeChild(headers[v]);
                    if (content) {
                        this.$node.querySelector('lyte-tab-body').removeChild(content);
                    }
                    break;
                }
            }
            if (this.getMethods('onDelete')) {
                /**
                 * This method is invoked after a tab is deleted either by clicking on the close icon or by invoking the deleteTab method
                 * @method onDelete
                 * @author santhoshraj.s@zohocorp.com
                 * @condition ltPropCloseIcon true
                 * @param { string } tabId
                 * @param { object } component
                */
                this.executeMethod('onDelete', tabId, this.$node, event);
            }

            return true;
            // if(isCustomized){
            //     this.customizeTitleTab("afterDelete");
            // }
        }
    }

    enableTab(tabId) {
        if (tabId) {
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (headers[v].classList.contains('lyteTabDisable')) {
                            headers[v].classList.remove('lyteTabDisable');
                            if (headers[v].classList.contains('lyteTabForceHide')) {
                                (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "push", this.getMenuLabel(headers[v])/*headers[v].textContent*/);
                            }
                        }
                        break;
                    }
                }
            }
            if (typeof tabId == "object" && tabId.classList.contains('lyteTabDisable')) {
                tabId.classList.remove('lyteTabDisable');
                if (tabId.classList.contains('lyteTabForceHide')) {
                    (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "push", this.getMenuLabel(tabId)/*tabId.textContent*/);
                }
            }
        }
    }

    disableTab(tabId) {
        
        if (tabId) {
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (!(headers[v].classList.contains('lyteTabDisable'))) {
                            headers[v].classList.add('lyteTabDisable');
                            if (headers[v].classList.contains('lyteTabForceHide')) {
                                var index = this.getData('menuLabels').indexOf(this.getMenuLabel(headers[v])/*headers[v].textContent*/);
                                if (index != -1) {
                                    (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "removeAt", index, 1);
                                }
                            }
                        }
                        break;
                    }
                }
            }
            if (typeof tabId == "object" && !(tabId.classList.contains('lyteTabDisable'))) {
                tabId.classList.add('lyteTabDisable');
                if (tabId.classList.contains('lyteTabForceHide')) {
                    var index = this.getData('menuLabels').indexOf(this.getMenuLabel(tabId)/*tabId.textContent*/);
                    if (index != -1) {
                        (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "removeAt", index, 1);
                    }
                }
            }
        }
    }

    openTabContent(tabId, event) {
        
        if (tabId) {
            var label;
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                var content = this.$node.querySelector('#' + tabId);
                var _this = this;
                var opentabfunc = function(){
                    _this.hideAll();
                    label.classList.add(_this.getData('ltPropActiveClass'));
                    if (content) {
                        content.classList.remove('lyteTabHide');
                        content.classList.add('lyteTabShow');
                    }
                    _this.setData('ltPropCurrentTab', { 'index': window.v, 'name': label.textContent.trim() , 'id' : tabId });
                    _this.executeOnOpen(label, tabId, event);
                    _this.setData('prevTarget', label);
                    
                }
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (headers[v].classList.contains(this.getData('ltPropActiveClass'))) {
                            return;
                        }
                        label = headers[v];
                        //$L(label).attr('tab-index',0);
                        var returnVal = this.executeOnBeforeOpen(label, tabId, this.getData('prevTarget') ? this.getData('prevTarget').getAttribute('lt-prop-id') : null, event);
                        if (!returnVal) {
                            return;
                        }else if( returnVal && returnVal.then){
                            returnVal.then(opentabfunc)
                        }else{
                            opentabfunc();
                        }
                        break;
                    }
                }
                if (this.getData('ltPropType') == "collapse" && this.getData('menuLabels').indexOf(this.getMenuLabel(label)/*label.textContent*/) > -1) {
                    this.collapseHeader(true);
                }

                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('tabindex',0);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('aria-selected','true');
            }
            if (typeof tabId == "object") {
                if (tabId.classList.contains(this.getData('ltPropActiveClass'))) {
                    return;
                }
                label = tabId;
                var id = tabId.getAttribute('lt-prop-id');
                var content = this.$node.querySelector('#' + id);
                var returnVal = this.executeOnBeforeOpen(tabId, id, this.getData('prevTarget') ? this.getData('prevTarget').getAttribute('lt-prop-id') : null, event);
                if (!returnVal) {
                    return;
                }else if( returnVal && returnVal.then){
                    var _this = this;
                    returnVal.then(function(){
                        _this.hideAll();
                        tabId.classList.add(_this.getData('ltPropActiveClass'));
                        if (content) {
                            content.classList.remove('lyteTabHide');
                            content.classList.add('lyteTabShow');
                        }
                        var headers =_this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title'), pos;
                        for (var v = 0; v < headers.length; v++) {
                            if (headers[v].isEqualNode(label) && headers[v].getAttribute('lt-prop-id') === id) {
                                pos = v;
                                break;
                            }
                        }
                        _this.setData('ltPropCurrentTab', { 'index': pos, 'name': label.textContent.trim(), 'id' : id });
                        _this.executeOnOpen(tabId, id, event);
                        _this.setData('prevTarget', tabId);
                        if (_this.getData('ltPropType') == "collapse" && _this.getData('menuLabels').indexOf(_this.getMenuLabel(label)/*label.textContent*/) > -1) {
                            _this.collapseHeader(true);
                        }

                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('tabindex',0);
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('aria-selected','true');
                    })
                }else{
                    this.hideAll();

                    tabId.classList.add(this.getData('ltPropActiveClass'));
                    if (content) {
                        content.classList.remove('lyteTabHide');
                        content.classList.add('lyteTabShow');
                    }
                    var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title'), pos;
                    for (var v = 0; v < headers.length; v++) {
                        if (headers[v].isEqualNode(label) && headers[v].getAttribute('lt-prop-id') === id) {
                            pos = v;
                            break;
                        }
                    }
                    if(headers[v]){
                        var tempid = headers[v].getAttribute('lt-prop-id');
                    }
                    this.setData('ltPropCurrentTab', { 'index': pos, 'name': label.textContent.trim(), 'id': tempid });
                    this.executeOnOpen(tabId, id, event);
                    this.setData('prevTarget', tabId);
                    if (this.getData('ltPropType') == "collapse" && this.getData('menuLabels').indexOf(this.getMenuLabel(label)/*label.textContent*/) > -1) {
                        this.collapseHeader(true);
                    }

                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('tabindex',0);
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(label).attr('aria-selected','true');
                }
            }
           
        }
       
    }

    checkCloseIcon(head) {
        head = head || this.$node.querySelector('lyte-tab-head');
        if (this.getData('ltPropCloseIcon')) {
            this.createCloseIcon(head.querySelectorAll('lyte-tab-title'));
        }else{
            this.destoryCloseIcon(head.querySelectorAll('lyte-tab-title'));
        }
    }

    destoryCloseIcon(head) {
        var closeIcon = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('.lyteTabCloseIcon',this.$node);
        for (var index = 0; index < closeIcon.length; index++) {
            closeIcon[index].remove();
            head[index].addedCloseIcon = false;
        }
    }

    createCloseIcon(headers) {
        for (var v = 0; v < headers.length; v++) {
            if (!headers[v].addedCloseIcon) { 
                var closeSpan = document.createElement('span');
                closeSpan.classList.add('lyteTabCloseIcon');
                headers[v].appendChild(closeSpan);
                headers[v].addedCloseIcon = true;
            }
        }
    }

    setPosition(position) {
        switch (position.pos) {
            case "left": this.$node.classList.add('lyteTabDefaultLeft');/*this.setHeight("left");*/break;
            case "right": this.$node.classList.add('lyteTabDefaultRight');/*this.setHeight("right");*/break;
            case "top": this.$node.classList.add('lyteTabDefaultTop');/*this.setHeight("top");*/break;
            case "bottom": this.$node.classList.add('lyteTabDefaultBottom');/*this.setHeight("bottom");*/break;
        }
        
    }

    checkHeightOnResize() {
        if (this.$node.getBoundingClientRect().height != (this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height + this.$node.querySelector('lyte-tab-body').getBoundingClientRect().height)) {
            this.setHeight(this.getData('ltPropPosition'));
        }
    }

    setHeight(position) {
        if (this.getData('ltPropHeight') == "auto") {
            if (position.pos === "left" || position.pos === "right") {
                this.$node.querySelector('.lyteTabNav').style.height = "auto";
                this.$node.querySelector('lyte-tab-body').style.height = "auto";
            }
            if (position.pos === "top" || position.pos === "bottom") {
                this.$node.querySelector('lyte-tab-body').style.height = "auto";
            }
            this.makeAlignment(this.getData("ltPropPosition"));
        }
        else {
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {
                var cs = window.getComputedStyle(this.$node);
                var borderDimensionY = ((cs.borderTop ? parseFloat(cs.borderTop) : 0) +
                    (cs.borderBottom ? parseFloat(cs.borderBottom) : 0));
                var navHeight = this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height;
                var thisHeight = parseInt(cs.height) - borderDimensionY;
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
                    // if(position.pos === "bottom"){
                    //     this.$node.querySelector('.lyteTabNav').style.top = (thisHeight - navHeight) + "px";
                    // }
                    if (position.pos === "left" || position.pos === "right") {
                        this.$node.querySelector('.lyteTabNav').style.height = thisHeight + "px";
                        this.$node.querySelector('lyte-tab-body').style.height = thisHeight + "px";
                    }
                    if (position.pos === "top" || position.pos === "bottom") {
                        this.$node.querySelector('lyte-tab-body').style.height = (thisHeight - navHeight) + "px";
                    }
                    this.makeAlignment(this.getData("ltPropPosition"));
                }, this);

            }, this);
        }
    }

    hideAll() {
        var labels = this.getHeader(this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title')); /*this.getHeader(this.$node.querySelector('lyte-tab-head').children);*/
        var contents = this.getContent(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('lyte-tab-content',this.$node.querySelector('lyte-tab-body'))); /*this.getContent(this.$node.querySelector('lyte-tab-body').children);*/
        var active = this.getData('ltPropActiveClass');
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].classList.contains(active)) {
                labels[i].setAttribute('aria-selected',false);
                labels[i].classList.remove(active);
                labels[i].setAttribute('tabIndex',-1);
            }
        }
        for (var v = 0; v < contents.length; v++) {
            //contents[v].setAttribute('hidden',true);
            if (contents[v].classList.contains('lyteTabShow')) {
                contents[v].classList.remove('lyteTabShow');
                contents[v].classList.add('lyteTabHide');
            }
            if (!contents[v].classList.contains('lyteTabHide')) {
                contents[v].classList.add('lyteTabHide');
            }
            if (!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(contents[v]).hasClass('lyteTabHide')) {
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(contents[v]).addClass('lyteTabHide');
            }
        }
    }

    customizeTitleTab(prop) {

        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {
            var head = this.$node.querySelector('lyte-tab-head');
            var compWidth = this.getWidth(head, false);
            if (prop === "top" || prop === "bottom") {
                var totalWidth = 0;
                var width = 0;
                var titles = head.querySelectorAll('lyte-tab-title');
                if (this.getData('ltPropType') == "collapse") {
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {
                        for (var i = 0; i < titles.length; i++) {
                            totalWidth = totalWidth + this.getWidth(titles[i], true, true);
                        }
                        if (totalWidth > compWidth) {
                            this.collapseHeader();
                        }
                    }, this);
                }

            }
            if (prop === "afterDelete") {
                var titles = head.querySelectorAll('lyte-tab-title');
                var width = compWidth / titles.length;
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function () {
                    for (var i = 0; i < titles.length; i++) {
                        titles[i].style.width = width + "px";
                    }
                });
            }
        }, this);
    }

    /**
     * The method is going to do the calculations for collapsible tab and construct the menu items
     *
     */
    collapseHeader(onResize) {
        var menu = this.$node.querySelector('#lyteTabMenu');
        var head = this.$node.querySelector('lyte-tab-head'),
            compOffset = {
                width: this.getWidth(head, false),
                height: head.offsetHeight
            },

            maxWidth = this.getData('ltPropMaxWidth').indexOf('%') != -1 ? (parseInt(this.getData('ltPropMaxWidth')) * compOffset.width) / 100 : parseFloat(this.getData('ltPropMaxWidth')),
            headers = head.querySelectorAll('lyte-tab-title'),
            totalWidth = 0, allowed = -1,
            _this = this,
            openedTab = Array.from(headers).findIndex(function (x) { return x.classList.contains(_this.getData('ltPropActiveClass')) }),
            menuLabels = [];
        if (onResize) {
            for (var i = 0; i < headers.length; i++) {
                if (headers[i].classList.contains('lyteTabForceHide')) {
                    headers[i].classList.remove('lyteTabForceHide');
                }
            }
        }
        if(menu && maxWidth == head.getBoundingClientRect().width){
            totalWidth += _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('#moreMenu',head)[0].getBoundingClientRect().width;
        }
        totalWidth += this.getWidth(headers[openedTab], true, true);
        for (var i = 0; i < headers.length; i++) {
            if (i != openedTab) {
                totalWidth += this.getWidth(headers[i], true, true);
                if (totalWidth > maxWidth) {
                    totalWidth -= this.getWidth(headers[i], true, true);
                    allowed = i;
                    break;
                }
            }
        }
        if (allowed > -1 && allowed < headers.length) {
            for (var i = allowed; i < headers.length; i++) {
                if (i == openedTab) {
                    if (openedTab > 0 && !(headers[i - 1].classList.contains('lyteTabForceHide') && !(headers[i - 1].classList.contains('lyteTabTitleHide'))) ){
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(headers[i - 1]).addClass('lyteTabForceHide');
                        if (!(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(headers[i - 1]).hasClass('lyteTabDisable'))) {
                            menuLabels.push(this.getMenuLabel(headers[i - 1])/*headers[i - 1].textContent*/);
                        }
                    }
                }
                else {
                    if(!(headers[i].classList.contains('lyteTabTitleHide'))){
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(headers[i]).addClass('lyteTabForceHide');
                        if (!(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(headers[i]).hasClass('lyteTabDisable'))) {
                            menuLabels.push(this.getMenuLabel(headers[i])/*headers[i].textContent*/);
                        }
                    }
                }
            }
            var menu = this.$node.querySelector('#lyteTabMenu');
            if (!menu) {
                var span = document.createElement('span');
                span.id = "moreMenu";
                span.tabIndex = '-1';
                var uniqueSel = this.createUniqueSlector();
                span.classList.add(uniqueSel);
                span.appendChild(document.createElement('span'));
                head.appendChild(span);
                if(totalWidth + span.getBoundingClientRect().width > maxWidth && maxWidth == head.getBoundingClientRect().width){
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(headers[allowed - 1]).addClass('lyteTabForceHide');
                    menuLabels.splice(0, 0,this.getMenuLabel(headers[allowed - 1]));
                }
                this.createMenu(menuLabels, uniqueSel, "init");
                if (!onResize) {
                    if (this.getData('ltPropPosition').pos === "bottom") {
                        head.style.top = (head.offsetTop + (Math.ceil(compOffset.height / 2) - 1)) + "px";
                    }
                }
            }
            else/*if(onResize)*/ {
                (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "removeAt", 0, this.getData('menuLabels').length);
                (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData('menuLabels'), "push", menuLabels);
            }
        }
        else {
            if (allowed == -1) {
                this.removeMenu();
            }
            // if(onResize){
            //     this.makeAlignment(this.getData('ltPropPosition'));
            // }
        }
    }

    createUniqueSlector() {
        var tabs = window._lyteUiUtils.querySelectorAll('lyte-tabs');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].isEqualNode(this.$node)) {
                return "menuSel_" + i;
            }
        }
    }

    getMenuLabel(item) {
        var labelItem = item.querySelector('.lyteTabTitleLabel');
        return labelItem ? labelItem.textContent : item.textContent;
    }

    /**
     * The method is going to create the menu and add listeners for the methods
     *
     */
    createMenu(menuLabels, sel, prop) {
        if (prop == "init") {
            this.setData('createTabMenu',true);
            var menu = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('#lyteTabMenu',this.$node)[0];
            // menu.id = 'lyteTabMenu';

            this.setData('menuLabels', menuLabels);

            menu.ltProp({
                content: menuLabels,
                query: "." + sel,
                event: "click",
                callout: true
            });
            // if (this.getData('ltPropMenuWrapperClass')) {
            //     menu.ltProp({
            //         wrapperClass: this.getData('ltPropMenuWrapperClass')
            //     });
            // }
        }
    }

    removeMenu() {
        // var menu = this.$node.querySelector('#lyteTabMenu');
        var head = this.$node.querySelector('lyte-tab-head');
        var menu_span = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('#moreMenu',head)[0];
        if (menu_span) {
            menu_span.remove();
        }
        this.setData('createTabMenu',false);
        this.setData('menuLabels', []);
    }

    onMenuLabelChange() {
        this.$node.querySelector('#lyteTabMenu').ltProp({
            content: this.getData('menuLabels')
        })
    }

    /*.observes('menuLabels.[]')*/

    makeAlignment(position) {
        var head = this.$node.querySelector('lyte-tab-head');
        if (position.align == "left" || position.align == "top") {
            head.classList.add('lyteTabAlignStart');
        }
        if (position.align == "right" || position.align == "bottom") {
            if (this.getData('ltPropType') == "collapse" && (position.pos == "top" || position.pos == "bottom")) {
                head.classList.add('lyteTabRightCollapse');
            }
            else {
                head.classList.add('lyteTabAlignEnd');
            }
        }
        if (position.align == "center") {
            head.classList.add('lyteTabAlignCenter');
        }
    }

    executeOnBeforeOpen(clickedItem, targetId, prevEleId, event, onRender) {
        var returnVal;
         if(this.getData('ltPropFireOnInit')){
            if (this.getMethods('onBeforeOpen')) {
                /**
                 * It is triggered when the user clicks on a tab but before it is opened.
                 * @method onBeforeOpen
                 * @author santhoshraj.s@zohocorp.com
                 * @param { object } currContent
                 * @param { object } prevContent
                 * @param { object } component
                 * @param { string } clickedTab 
                 * @param { string } PrevisousTab
                */
                returnVal = this.executeMethod('onBeforeOpen', this.$node.querySelector("#" + targetId), this.$node.querySelector("#" + prevEleId), this, clickedItem, this.getData('prevTarget') ? this.getData('prevTarget') : null, event);
            }
        }else{
           if (this.getMethods('onBeforeOpen') && !onRender) {
                returnVal = this.executeMethod('onBeforeOpen', this.$node.querySelector("#" + targetId), this.$node.querySelector("#" + prevEleId), this, clickedItem, this.getData('prevTarget') ? this.getData('prevTarget') : null, event);
            } 
        }

        return (returnVal === undefined ? true : returnVal);
    }

    executeOnOpen(clickedItem, targetId, event, onRender) {

        
        if(this.getData('ltPropFireOnInit')){
            if (this.getMethods('onOpen') ) {
                /**
                 * It is triggered when the clicked tab is opened.
                 * @method onOpen
                 * @author santhoshraj.s@zohocorp.com
                 * @param { object } currContent
                 * @param { object } component
                 * @param { string } clickedTab 
                */
                this.executeMethod('onOpen', this.$node.querySelector("#" + targetId), this, clickedItem, event, targetId);
            } 
        }else{
            if (this.getMethods('onOpen') && !onRender) {
                this.executeMethod('onOpen', this.$node.querySelector("#" + targetId), this, clickedItem, event, targetId);
            }
        }

        window._lyteUiUtils.dispatchEvent('lytetabopen', this.$node , { 'content' :  this.$node.querySelector("#" + targetId), 'component': this ,'tab': clickedItem });
    }

    generateId(text) {
        while (text.indexOf(" ") !== -1) {
            text = text.replace(" ", "_");
        }
        return text;
    }

    getWidth(ele, includePadding, includeMargin) {
        includePadding = includePadding == undefined ? true : includePadding;
        if(ele){
            var cs = window.getComputedStyle(ele),
                padding = parseInt(cs.paddingLeft) + parseInt(cs.paddingRight),
                margin = 0;
            if (includeMargin) {
                margin = parseInt(cs.marginLeft) + parseInt(cs.marginRight);
            }
            var width = parseFloat(cs.width) + (includePadding ? 0 : -padding) + margin;
            width = isNaN(width) ? 0 : width;
            return width;
        }else{
            return 0;
        }
        
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            onClick: function (value, event, menu, menuOriginElem, subMenu) {
                var labelText = arguments[0],
                    tab = arguments[2].parentElement.component,
                    head = arguments[3].parentElement,
                    headers = head.querySelectorAll('lyte-tab-title'),
                    label;
                for (var i = 0; i < headers.length; i++) {
                    if (tab.getMenuLabel(headers[i])/*headers[i].textContent*/ == labelText && headers[i].classList.contains('lyteTabForceHide')) {
                        label = headers[i];
                        break;
                    }
                }
                if (label) {
                    label.classList.remove('lyteTabForceHide');
                    tab.openTabContent(label, event);
                    // LyteComponent.insertBefore(headers[0],label);
                    // tab.collapseHeader(true);
                }
                if (tab.getMethods('onMenuClick')) {
                    /**
                     * This method is called whenever menu item is clicked
                     * @method onMenuClick
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { string } value
                     * @param { object } Event
                     * @param { object } lyteMenu
                     * @param { object } MenuOriginElement
                     * @param { object } ClickedItem
                     * @param { object } tabComponent
                     * @param { object } ClickedTabTitle
                    */
                    tab.executeMethod('onMenuClick', value, event, menu, menuOriginElem, subMenu, tab, label);
                }
            },
            onTabMenuBeforeOpen: function (menu, event, menuOriginElem) {
                if (this.getMethods('onBeforeMenuOpen')) {
                    /**
                     * This method is called before opening menu.
                     * @method onBeforeMenuOpen
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } MenuOriginElement
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuOpen', menu, event, menuOriginElem, this);
                }
            },
            onTabMenuOpen: function (menu, event, menuOriginElem) {
                if (this.getMethods('onMenuOpen')) {
                    /**
                     * This method is called when menu is opened.
                     * @method onMenuOpen
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } MenuOriginElement
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onMenuOpen', menu, event, menuOriginElem, this);
                }
            },
            onBeforeClose: function (menu, event) {
                if (this.getMethods('onBeforeMenuClose')) {
                    /**
                     * This method is called before closing menu.
                     * @method onBeforeMenuClose
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuClose', menu, event, this);
                }
            },
            onClose: function (menu, event) {
                if (this.getMethods('onMenuClose')) {
                    /**
                     * This method is called when menu is closed.
                     * @method onMenuClose
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onMenuClose', menu, event, this);
                }
            },
            MenubeforeRender: function (menu) {
                if (this.getMethods('onBeforeMenuRender')) {
                    /**
                     * This method is invoked before component is rendered
                     * @method onBeforeMenuRender
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuRender', menu, this);
                }
            },
            MenuafterRender: function (menu) {
                if (this.getMethods('onAfterMenuRender')) {
                    /**
                     * This method is invoked after component rendered
                     * @method onAfterMenuRender
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onAfterMenuRender', menu, this);
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            onPositionChange: function () {
                var comp = this.$node;
                comp.classList.remove('lyteTabDefaultLeft', 'lyteTabDefaultRight', 'lyteTabDefaultTop', 'lyteTabDefaultBottom');
                var compHead = comp.querySelector('lyte-tab-head');
                var compBody = comp.querySelector('lyte-tab-body');
                var compHeaders = comp.querySelectorAll('lyte-tab-title');
                compHead.classList.remove('lyteTabAlignStart', 'lyteTabAlignEnd', 'lyteTabAlignCenter');
                compHead.removeAttribute("style");
                compBody.removeAttribute("style");
                if(compHeaders.length){
                    compHeaders[0].style.marginLeft = "";
                    compHeaders[0].style.marginTop = "";
                    for (var i = 0; i < compHeaders.length; i++) {
                        compHeaders[i].style.float = "";
                    }
                }
                comp = null;
                compHeaders = null;
                compBody = null;
                var position = this.getData('ltPropPosition');
                var tabpanel = ['top','bottom'];
                if(!tabpanel.includes(position.pos)){
                    compHead.setAttribute('aria-orientation','vertical')
                }
                compHead = null;
                this.setPosition(position);
                this.setHeight(position);

                //this.initialFunc(false);
            }.observes('ltPropPosition'),

            onHeightChange: function () {
                this.$node.style.height = this.getData('ltPropHeight');
                this.setHeight(this.getData('ltPropPosition'));
            }.observes('ltPropHeight'),

            onTypeChange: function () {
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'));
                if(this.getData('ltPropType') !== "collapse"){
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(Tabtitles).removeClass('lyteTabForceHide');
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('#moreMenu',this.$node)[0].remove();
                    this.setData('createTabMenu', false);
                }else{
                    this.$node.resizeTab();
                }
            }.observes('ltPropType'),

            onHideListChange: function(){
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'))
                var hiddenTab = this.getData('ltPropHiddenTabs');
                var activeTabHide = false;
                var nextTab; 
                var firstVisibleTab;
                var notfound = true;
                Tabtitles.forEach(function(title){
                    if(hiddenTab.includes(title.getAttribute('lt-prop-id'))){
                        title.classList.add('lyteTabTitleHide');
                        if(title.classList.contains(this.getData('ltPropActiveClass'))){
                            activeTabHide = true;
                        }
                    }else{
                        if(activeTabHide && notfound){
                            notfound = false;
                            nextTab = title;
                        }
                        if(!firstVisibleTab){
                            firstVisibleTab = title;
                        }
                       
                        title.classList.remove('lyteTabTitleHide');
                    }
                }.bind(this))
                if(!nextTab && activeTabHide && firstVisibleTab){
                    nextTab = firstVisibleTab;
                }
                if(nextTab){
                    this.openTabContent(nextTab.getAttribute('lt-prop-id'));
                }
                this.collapseHeader(true);
            }.observes('ltPropHiddenTabs'),

            ChangeActiveTab: function () {
                var activeTab = this.getData('ltPropActiveTab');
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'))
                this.openTabContent(Tabtitles[activeTab].getAttribute('lt-prop-id'));
            }.observes('ltPropActiveTab'),

            onMaxWidthChange: function () {
                this.$node.resizeTab();
            }.observes('ltPropMaxWidth'),

            CloseIconObsever : function(){
                this.checkCloseIcon();
            }.observes('ltPropCloseIcon')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteTabsComponent._template = "<template tag-name=\"lyte-tabs\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"tabYield\"></lyte-yield> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{createTabMenu}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu id=\"lyteTabMenu\" on-before-open=\"{{method(&quot;onTabMenuBeforeOpen&quot;)}}\" on-open=\"{{method(&quot;onTabMenuOpen&quot;)}}\" on-before-close=\"{{method(&quot;onBeforeClose&quot;)}}\" on-close=\"{{method(&quot;onClose&quot;)}}\" on-menu-click=\"{{method(&quot;onClick&quot;)}}\" before-render=\"{{method('MenubeforeRender')}}\" after-render=\"{{method('MenuafterRender')}}\" lt-prop-yield=\"{{ltPropMenuYield}}\" lt-prop-wrapper-class=\"{{ltPropMenuWrapperClass}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-yield yield-name=\"tab-menu\" hidden-tabs=\"{{menuLabels}}\"></lyte-yield> </template> </lyte-menu> </template></template> </template>";;
LyteTabsComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LyteTabsComponent._observedAttributes = [
    "ltPropYield",
    "ltPropHover",
    "ltPropActiveClass",
    "ltPropPosition",
    "ltPropCloseIcon",
    "prevTarget",
    "ltPropHeight",
    "ltPropType",
    "ltPropMaxWidth",
    "ltPropTabStyle",
    "ltPropMenuWrapperClass",
    "ltPropCurrentTab",
    "ltPropActiveTab",
    "ltPropAriaAutoActivation",
    "ltPropHiddenTabs",
    "ltPropFireOnInit",
    "createTabMenu",
    "ltPropMenuYield",
    "menuLabels"
];

// var _lyteTab = {
//     _lyteTabTitleId : 0,

//     generateId : function(){
//         return 'lyte_tab_tile_' + _lyteTab._lyteTabTitleId++;
//     },
//     getgeneratedId : function(){
//         return 'lyte_tab_tile_' + _lyteTab._lyteTabTitleId;
//     }
// }

/**
 * @customElement lyte-tab-title
 */
/**
 * @customElement lyte-tab-head
 */
/**
 * @customElement lyte-tab-body
 */

/**
 * @customElement lyte-tab-content
 */
if (!window._lyteUiUtils.registeredCustomElements['lyte-tab-title']) {
    window._lyteUiUtils.registeredCustomElements['lyte-tab-title'] = true;

    class LyteTabTitleCustomElements extends _component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;

            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('role','tab');
            var compEle = lyteNode.closest('lyte-tabs');
            lyteNode._tabComp = compEle;
            if(lyteNode.classList.contains(compEle.getData('ltPropActiveClass'))){
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('tabindex',0);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('aria-selected','true');
            }else{
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('tabindex',-1);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('aria-selected','false');
            }
            if(compEle.getData('ltPropCloseIcon') && compEle.component.rendered){
                compEle.component.createCloseIcon([lyteNode]);
            }
            if (compEle && compEle.component  ) {

                if (compEle.checkTabs) {
                    clearTimeout(compEle.checkTabs);
                    compEle.checkTabs = false;
                }
                else {
                    lyteNode.closest('lyte-tab-head').classList.add('lyteTabVH');
                }
                compEle.checkTabs = setTimeout(function () {
                    var tab = lyteNode._tabComp;
                    if (tab) {
                        var comp = tab.component;
                        var head = lyteNode.closest('lyte-tab-head');
                        var compWidth = comp.getWidth(head, false);
                        var maxWidth = comp.getData('ltPropMaxWidth').indexOf('%') != -1 ? (parseInt(comp.getData('ltPropMaxWidth')) * compWidth) / 100 : parseFloat(comp.getData('ltPropMaxWidth'));

                        var totalWidth = 0;
                        var width = 0;
                        var titles = head.querySelectorAll('lyte-tab-title');
                        var activeTabIndex = -1;
                        for (var i = 0; i < titles.length; i++) {
                            totalWidth = totalWidth + comp.getWidth(titles[i], true, true);
                            if (titles[i].classList.contains(comp.getData('ltPropActiveClass'))) {
                                activeTabIndex = i;
                            }
                        }
                        if (activeTabIndex == -1 && !titles[0].classList.contains('lyteTabTitleHide') && comp.rendered) {
                            comp.openTabContent(titles[0], null);
                        }
                        if (totalWidth > compWidth || totalWidth > maxWidth) {

                            if (comp.$node.ltProp('type') == "collapse") {
                                comp.collapseHeader();
                            }
                        }
                        
                        lyteNode.closest('lyte-tab-head').classList.remove('lyteTabVH');
                    }
                    compEle.checkTabs = false;
                }.bind(lyteNode), 100);
            }
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            var compEle = lyteNode._tabComp;
            if (compEle && compEle.checkTabs) {
                clearTimeout(compEle.checkTabs);
                compEle.checkTabs = false;
                var tabHead = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('lyte-tab-head',compEle)[0];
                if(tabHead){
                    tabHead.classList.remove('lyteTabVH');
                }
            }
        }

        _() {
            _;
        }
    }

    LyteTabTitleCustomElements.options = {clone : {allCallbacks : false}};
    LyteTabTitleCustomElements.register("lyte-tab-title");
}

/*if (!_lyteUiUtils.registeredCustomElements['lyte-tab-content']) {

    _lyteUiUtils.registeredCustomElements['lyte-tab-content'] = true;

    Lyte.createCustomElement("lyte-tab-content", {
        static: {

        },
        connectedCallback: function () {
            if(!this.classList.contains('lyteTabShow')){
                this.classList.add('lyteTabHide')
            }
            
        }
        
    });
}*/
if (!window._lyteUiUtils.registeredCustomElements['lyte-tab-content']) {
    window._lyteUiUtils.registeredCustomElements['lyte-tab-content'] = true;

    class LyteTabContentCustomElements extends _component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var tab_id = lyteNode.getAttribute('id');
            var tab = lyteNode.closest('lyte-tabs');
            var tab_title = tab.querySelector('[lt-prop-id="' + tab_id + '"]');
            if(tab_title.classList.contains(tab.getData('ltPropActiveClass'))){
                lyteNode.classList.add('lyteTabShow');
            }else{
                lyteNode.classList.add('lyteTabHide');
            }
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(lyteNode).attr('role','tabpanel');
        }

        _() {
            _;
        }
    }

    LyteTabContentCustomElements.options = {clone : {allCallbacks : false}};
    LyteTabContentCustomElements.register("lyte-tab-content");
}

window.addEventListener('resize', function () {
    if (window._lyteUiUtils.tabResizeTriggered) {
        clearTimeout(window._lyteUiUtils.tabResizeTriggered);
        window._lyteUiUtils.tabResizeTriggered = false;
    }
    window._lyteUiUtils.tabResizeTriggered = setTimeout(function () {
        var tabs = _lyteUiUtils.querySelectorAll('lyte-tabs');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].component && tabs[i].component.getData('ltPropType') == "collapse") {
                tabs[i].component.collapseHeader(true);
            }
            tabs[i].component.checkHeightOnResize();
        }
        _lyteUiUtils.tabResizeTriggered = false;
    }, 50);
});

/**
 * @syntax yielded
 * <lyte-tabs>
 *     <template is = "registerYield" yield-name = "tabYield">
 *         <lyte-tab-head>
 *             <lyte-tab-title lt-prop-id = "tab1"> <span> Header 1 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab2"> <span> Header 2 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab3"> <span> Header 3 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab4"> <span> Header 4 </span> </lyte-tab-title>
 *         </lyte-tab-head>
 *         <lyte-tab-body>
 *             <lyte-tab-content id = "tab1"> <span> Content 1 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab2"> <span> Content 2 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab3"> <span> Content 3 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab4"> <span> Content 4 </span> </lyte-tab-content>
 *         </lyte-tab-body>
 *     </template>
 * </lyte-tabs>
 */


LyteTabsComponent.register("lyte-tabs", {
    hash: "LyteTabsComponent_4",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ })

}]);
//# sourceMappingURL=tab-comp.js.map
"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/popover-comp"],{

/***/ 63469485:
/*!***********************************************!*\
  !*** ./components/javascript/popover-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComp": () => (/* binding */ PopoverComp)
/* harmony export */ });
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-icon.js */ 35554276);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-button.js */ 43360219);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-toggle.js */ 85465283);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_popover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-popover.js */ 9430863);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class PopoverComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let popoverObj = this.getData('popoverObj') || {};

    let slyte_code = '<zcat-popover\n  self="{{self}}"\n  zcat-prop="{{popoverObj}}"\n></zcat-popover>';

    let propObj = {};
    propObj.position = popoverObj.position || 'bottom';
    if (popoverObj.isSearchable) propObj.isSearchable = true;
    if (popoverObj.heading) propObj.heading = popoverObj.heading;
    propObj.options = [
      { name: 'Edit', icon: 'edit' },
      { name: 'Duplicate', icon: 'copy' },
      { name: 'Delete', icon: 'trash' }
    ];
    propObj.callback = { name: 'onPopoverSelect' };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    popoverObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-popover-wrapper">\n';
    html_code += '  <div class="zcat-popover-trigger">\n';
    html_code += '    <button class="zcat-popover-default-trigger">⋮</button>\n';
    html_code += '  </div>\n';
    html_code += '  <div class="zcat-popover-menu zcat-popover-' + (popoverObj.position || 'bottom') + '">\n';
    html_code += '    <div class="zcat-popover-options">\n';
    html_code += '      <div class="zcat-popover-item">Edit</div>\n';
    html_code += '      <div class="zcat-popover-item">Duplicate</div>\n';
    html_code += '      <div class="zcat-popover-item">Delete</div>\n';
    html_code += '    </div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-popover-wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n';
    css_code += '.zcat-popover-menu {\n  position: absolute;\n  background: var(--zcat-popover-bg);\n  border: 1px solid var(--zcat-popover-border);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  padding: 4px 0;\n  min-width: 160px;\n  z-index: 100;\n}\n\n';
    css_code += '.zcat-popover-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n';
    css_code += '.zcat-popover-item:hover {\n  background: var(--zcat-popover-item-bg-hover);\n}';

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
      popoverObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          position: 'bottom',
          heading: 'Actions',
          isSearchable: false,
          trigger: { label: 'Open Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Edit', icon: 'edit' },
            { name: 'Duplicate', icon: 'copy' },
            { name: 'Share', icon: 'share' },
            { name: 'Archive', icon: 'archive' },
            { name: 'Delete', icon: 'trash' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleSearchObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleSearch' } }
      }),
      toggleHeadingObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleHeading' } }
      }),
      // Variant demos
      variantBasicObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          position: 'bottom',
          trigger: { label: 'Basic Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Option A' },
            { name: 'Option B' },
            { name: 'Option C' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantIconObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          position: 'bottom',
          heading: 'File Actions',
          trigger: { label: 'With Icons', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'New File', icon: 'file-plus' },
            { name: 'Open', icon: 'folder' },
            { name: 'Save', icon: 'save' },
            { name: 'Export', icon: 'download' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantSearchObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          position: 'bottom',
          isSearchable: true,
          heading: 'Assign To',
          width: '220px',
          trigger: { label: 'Searchable', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Alice Johnson', icon: 'user' },
            { name: 'Bob Smith', icon: 'user' },
            { name: 'Carol White', icon: 'user' },
            { name: 'Dave Brown', icon: 'user' },
            { name: 'Eve Davis', icon: 'user' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantNestedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          position: 'bottom',
          trigger: { label: 'Nested Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Cut', icon: 'scissors' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Paste', icon: 'clipboard' },
            { name: 'More', icon: 'chevron-right', nestedPopover: true, options: [
              { name: 'Import' },
              { name: 'Export' },
              { name: 'Print' }
            ]}
          ],
          callback: { name: 'onPopoverSelect' }
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
        this.setData('popoverObj', {
          position: 'bottom',
          heading: 'Actions',
          isSearchable: false,
          trigger: { label: 'Open Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Edit', icon: 'edit' },
            { name: 'Duplicate', icon: 'copy' },
            { name: 'Share', icon: 'share' },
            { name: 'Archive', icon: 'archive' },
            { name: 'Delete', icon: 'trash' }
          ],
          callback: { name: 'onPopoverSelect' }
        });
        this.$app.objectUtils(this.getData('toggleSearchObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleHeadingObj'), 'add', 'checked', true);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleSearch(checked) {
        this.$app.objectUtils(this.getData('popoverObj'), 'add', 'isSearchable', checked);
        this.constructCodeSnippet();
      },
      onToggleHeading(checked) {
        this.$app.objectUtils(this.getData('popoverObj'), 'add', 'heading', checked ? 'Actions' : '');
        this.constructCodeSnippet();
      },
      onPopoverSelect(item) {
        // demo callback
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changePopoverPosition(e) {
        this.$app.objectUtils(this.getData('popoverObj'), 'add', 'position', e.target.value);
        this.constructCodeSnippet();
      },
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

PopoverComp._template = "<template tag-name=\"popover-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Popover</h1> <p class=\"zcat-page-desc\">Popovers display contextual menus, action lists, or nested options triggered by user interaction.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"min-height:260px;display:flex;align-items:flex-start;justify-content:center;padding-top:20px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{popoverObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Position</span> <select onchange=\"{{action('changePopoverPosition',event)}}\" class=\"zcat-custom-select\"> <option value=\"bottom\">Bottom</option> <option value=\"top\">Top</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Searchable</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleSearchObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Heading</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleHeadingObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Basic</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Basic Menu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantBasicObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Icons</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantIconObj}}\"></zcat-popover> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Advanced</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Searchable</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantSearchObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Nested Submenu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantNestedObj}}\"></zcat-popover> </div> </div> </div> </div></template></template></div> </template><style>/* popover-comp specific overrides if needed */\n</style>";;
PopoverComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

PopoverComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "popoverObj",
  "resetButtonObj",
  "toggleSearchObj",
  "toggleHeadingObj",
  "variantBasicObj",
  "variantIconObj",
  "variantSearchObj",
  "variantNestedObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



PopoverComp.register("popover-comp", {
  hash: "PopoverComp_6",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 9430863:
/*!********************************************************************!*\
  !*** ./node_modules/zcat-ui/components/javascript/zcat-popover.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatPopover": () => (/* binding */ ZcatPopover)
/* harmony export */ });
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-search.js */ 98333762);
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-icon.js */ 35554276);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-button.js */ 43360219);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_popover_lyte_beta_popover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/popover/lyte-beta-popover.js */ 80935136);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component.js */ 62316197);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@slyte/core/index.js */ 60469700);








class ZcatPopover extends _component_js__WEBPACK_IMPORTED_MODULE_4__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
      		self: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object'),
			zcatProp: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default : {}}),
			errorProp: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { watch: true }),
			searchResultsFound: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { default: true })
		}), arg1);
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			async onDropdownSearch(methodName, results) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');

				if (results.length == 0) {
				this.setData('searchResultsFound', false);
				} else {
				this.setData('searchResultsFound', true);
				}

				if (methodName) {
				await self.executeMethod(
					methodName,
					prop,
					...Array.prototype.slice.call(arguments, 1)
				);
				}
			},
			onDefaultClose(id, a, b, c){
				const el = document.getElementById(id);
				const container =
					el?.closest('lyte-popover-content') ||
					el?.closest('.lyte-popover-wrapper, .lyte-popover-wrapper-1') ||
					document;

				const items = container.querySelectorAll('lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.removeAttribute('selected');              
					item.classList.remove('lyteDropdownSelection');
				});

				if (this.getMethods('onClose')) {
					this.executeMethod('onClose', a, b, c);
				}
			} 
			,defaultOnShow(a, b, c){
				if (this.getMethods('onShow')) {
				this.executeMethod('onShow', a, b, c);
				}				
			}
			
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			setHoverClass(id) {
				let el = document.getElementById(id);
				if(el) {
					el.classList.add("lyteDropdownSelection");
				}
			},
			removeHoverClass(id) {
				let el = document.getElementById(id);
				if(el) {
					el.classList.remove("lyteDropdownSelection");
				}
			},
			async handleDropItemClickkkk(id, value, methodName) {
				const items = document.querySelectorAll('.lyte-popover-wrapper lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.setAttribute('selected', 'false');
					item.classList.remove("lyteDropdownSelection");
				});

				let el = document.getElementById(id);
				if (el) {
					el.setAttribute('aria-selected', 'true');
					el.setAttribute('selected', 'true');
					el.classList.add("lyteDropdownSelection");
				}

				const self = this.getData('self');
        		const prop = this.getData('zcatProp');

				if (methodName) {
					await self.executeMethod(
						methodName,
						...Array.prototype.slice.call(arguments, 1)
					);
				}


			},
			async handleDropItemClick(id, value, methodName) {
				const el = document.getElementById(id);
				const container =
					el?.closest('lyte-popover-content') ||
					el?.closest('.lyte-popover-wrapper, .lyte-popover-wrapper-1') ||
					document;

				const items = container.querySelectorAll('lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.removeAttribute('selected');              
					item.classList.remove('lyteDropdownSelection');
				});

				if (el) {
					el.setAttribute('aria-selected', 'true');
					el.setAttribute('selected', 'true');
					el.classList.add('lyteDropdownSelection');
				}

				const self = this.getData('self');
				if (methodName) {
					await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1) 
					);
				}
			}


			
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

ZcatPopover._template = "<template tag-name=\"zcat-popover\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-edit\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"> <g clip-path=\"url(#clip0_1465_21523)\"> <path d=\"M7.33337 2.66666H4.53337C3.41327 2.66666 2.85322 2.66666 2.42539 2.88464C2.04907 3.07639 1.74311 3.38235 1.55136 3.75867C1.33337 4.1865 1.33337 4.74655 1.33337 5.86666V11.4667C1.33337 12.5868 1.33337 13.1468 1.55136 13.5746C1.74311 13.951 2.04907 14.2569 2.42539 14.4487C2.85322 14.6667 3.41327 14.6667 4.53337 14.6667H10.1334C11.2535 14.6667 11.8135 14.6667 12.2414 14.4487C12.6177 14.2569 12.9236 13.951 13.1154 13.5746C13.3334 13.1468 13.3334 12.5868 13.3334 11.4667V8.66666M5.33336 10.6667H6.44972C6.77584 10.6667 6.9389 10.6667 7.09235 10.6298C7.2284 10.5972 7.35846 10.5433 7.47775 10.4702C7.61231 10.3877 7.72761 10.2724 7.95821 10.0418L14.3334 3.66666C14.8857 3.11437 14.8857 2.21894 14.3334 1.66666C13.7811 1.11437 12.8857 1.11437 12.3334 1.66665L5.9582 8.04182C5.72759 8.27242 5.61229 8.38772 5.52984 8.52228C5.45673 8.64157 5.40286 8.77163 5.3702 8.90768C5.33336 9.06113 5.33336 9.22419 5.33336 9.55031V10.6667Z\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_1465_21523\"> <rect width=\"16\" height=\"16\" fill=\"white\"></rect> </clipPath> </defs> </svg> <svg id=\"zcat-icon-delete\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M10.6667 3.99998V3.46665C10.6667 2.71991 10.6667 2.34654 10.5213 2.06133C10.3935 1.81044 10.1895 1.60647 9.93865 1.47864C9.65344 1.33331 9.28007 1.33331 8.53333 1.33331H7.46667C6.71993 1.33331 6.34656 1.33331 6.06135 1.47864C5.81046 1.60647 5.60649 1.81044 5.47866 2.06133C5.33333 2.34654 5.33333 2.71991 5.33333 3.46665V3.99998M2 3.99998H14M12.6667 3.99998V11.4666C12.6667 12.5868 12.6667 13.1468 12.4487 13.5746C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6666 10.5868 14.6666 9.46667 14.6666H6.53333C5.41323 14.6666 4.85318 14.6666 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5746C3.33333 13.1468 3.33333 12.5868 3.33333 11.4666V3.99998\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg id=\"zcat-icon-download-cloud\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M2.66659 10.8282C1.86259 10.29 1.33325 9.37347 1.33325 8.33333C1.33325 6.77095 2.52759 5.48753 4.05308 5.34625C4.36513 3.44809 6.01341 2 7.99992 2C9.98642 2 11.6347 3.44809 11.9468 5.34625C13.4722 5.48753 14.6666 6.77095 14.6666 8.33333C14.6666 9.37347 14.1372 10.29 13.3333 10.8282M5.33325 11.3333L7.99992 14M7.99992 14L10.6666 11.3333M7.99992 14V8\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-beta-popover id=\"popover\" lt-prop-origin-elem=\"#{{zcatProp.id}}\" class=\"main-popover\" lt-prop-show-close-button=\"false\" lt-prop-type=\"box\" lt-prop-allow-multiple=\"true\" lt-prop-wrapper-class=\"lyte-popover-wrapper\" lt-prop-auto-show=\"true\" lt-prop-placement=\"bottomRight top\" on-close=\"{{method('onDefaultClose',expHandlers('lyte_popover_item_','+',data.id))}}\" on-show=\"{{method('defaultOnShow')}}\"> <template is=\"registerYield\" yield-name=\"popover\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isSearchable}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-popover-header> <div class=\"header-search-parent\"> <lyte-search data-zcqa=\"{{zcatProp.isSearchable.zcqa}}\" on-search=\"{{method('onDropdownSearch',zcatProp.onSearch)}}\" lt-prop-query-selector=\"{&quot;scope&quot; : &quot;lyte-drop-box.checkboxBoxClass&quot;, &quot;search&quot; : &quot;lyte-popover-item&quot;}\" lt-prop-placeholder=\"Search\" lt-prop=\"{&quot;closeIcon&quot; : true}\" class=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'==','extra-small')),'?:','lyteSm','')}}\"></lyte-search> </div> </lyte-popover-header></template></template><lyte-popover-content class=\"{{expHandlers(expHandlers(zcatProp.size,'==','small'),'?:','lyteSm',expHandlers(expHandlers(zcatProp.size,'==','extra-small'),'?:','lyteExsm',''))}} {{expHandlers(zcatProp.isSearchable,'?:','zcat-pt-6','')}} {{expHandlers(zcatProp.createNewBtn,'?:','zcat-pb-6','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.dropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"><h4 class=\"zcat-mb-6\">{{zcatProp.dropLabel}}</h4></template></template><template items=\"{{zcatProp.options}}\" item=\"data\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-dF zcat-align-item\"> <lyte-popover-item data-value=\"{{data.value}}\" data-zcqa=\"{{data.zcqa}}-{{index}}\" id=\"lyte_popover_item_{{data.id}}\" onmouseenter=\"{{action('setHoverClass',expHandlers('lyte_popover_item_','+',data.id))}}\" onmouseleave=\"{{action('removeHoverClass',expHandlers('lyte_popover_item_','+',data.id))}}\" aria-selected=\"{{expHandlers(data.selected,'?:','true','false')}}\" selected=\"{{expHandlers(data.selected,'?:','true','false')}}\" onclick=\"{{action('handleDropItemClick',expHandlers('lyte_popover_item_','+',data.id),data.value,data.itemOnClick)}}\" class=\"{{expHandlers(data.nestedPopover,'?:','nested-popover-item','')}} {{expHandlers(data.disabled,'?:','popover-item-disabled','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{data.icon}}\" is=\"case\" lc-id=\"lc_id_0\"><div> <div class=\"zcat-dF zcat-align-center zcat-gap-4\"> <!-- <lyte-svg lt-prop-path=\"#{{data.icon.name}}\" lt-prop-class=\"zcat-stroke-icon-active {{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? 'zcat-h12 zcat-w12' : 'zcat-h14 zcat-w14'}}\" class=\"menu-lyte-svg-class {{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? 'zcat-h12 zcat-w12' : 'zcat-h14 zcat-w14'}}\"> </lyte-svg> --> <zcat-icon class=\"menu-lyte-svg-class zcat-stroke-icon-active\" name=\"{{data.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" stroke=\"var(--zcat-menuList-icon-active)\" strokewidth=\"{{expHandlers(item.icon.strokeWidth,'||',1.3)}}\"> </zcat-icon> <p class=\"zcat-body1\">{{data.name}}</p> </div> </div></template><template default=\"\"><div class=\"zcat-body1\"> {{data.name}} </div></template></template><!-- <lyte-svg lyte-if=\"{{data.nestedPopover}}\" lt-prop-path=\"#zcat-icon-rightArrow\" lt-prop-class=\"zcat-h14 zcat-w14 zcat-stroke-icon-active\" class=\"zcat-w14 zcat-h14\" > </lyte-svg> --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{data.nestedPopover}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-icon class=\"zcat-stroke-icon-active\" name=\"arrow-right\" width=\"14\" height=\"14\" stroke=\"var(--zcat-menuList-icon-active)\" strokewidth=\"{{expHandlers(item.icon.strokeWidth,'||',1.3)}}\"> </zcat-icon></template></template></lyte-popover-item> <template is=\"yield\" yield-name=\"{{data.yield}}\"> <lyte-yield yield-name=\"{{data.yield}}\"></lyte-yield> </template> </div></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isLoading}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteDropdownText\"> Loading ... </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(searchResultsFound,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteDropdownText\"> {{expHandlers(zcatProp.noResult,'?:',zcatProp.noResult,'No Result Found')}} </div></template></template></lyte-popover-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn.label}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-popover-footer class=\"right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyte-drop-footer\" style=\"border-top: 1px solid var(--zcat-menuList-border-default);\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{ &quot;label&quot;: &quot;{{expHandlers(zcatProp.createNewBtn.label,'?:',zcatProp.createNewBtn.label,&quot;Create New&quot;)}}&quot;, &quot;variant&quot;: &quot;ghost&quot;, &quot;size&quot;: &quot;default&quot;, &quot;color&quot;: &quot;primary&quot;, &quot;icon&quot;: { &quot;position&quot;: &quot;left&quot;, &quot;name&quot;: &quot;zcat-icon-plus&quot;, &quot;class&quot;: &quot;zcat-w16 zcat-h16 zcat-stroke-ghost-primarybtn-icon&quot; }, &quot;width&quot;: &quot;zcat-w100p&quot;, &quot;ltPropClassCss&quot;: &quot;btn-radius-top0&quot;, &quot;callback&quot;: { &quot;name&quot;: &quot;{{zcatProp.createNewBtn.callback.name}}&quot; } }\"> </zcat-button> </div></template></template></lyte-popover-footer></template></template></template> </lyte-beta-popover> <template items=\"{{zcatProp.options}}\" item=\"eachOptionsData\" index=\"index\" is=\"for\" _new=\"true\"><div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData.nestedPopover}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-beta-popover id=\"popover-1\" lt-prop-origin-elem=\"#lyte_popover_item_{{eachOptionsData.id}}\" class=\"sub-popover-{{eachOptionsData.id}}\" lt-prop-show-close-button=\"false\" lt-prop-type=\"box\" lt-prop-allow-multiple=\"true\" lt-prop-wrapper-class=\"lyte-popover-wrapper-1\" lt-prop-auto-show=\"true\" lt-prop-placement=\"right left\"> <template is=\"registerYield\" yield-name=\"popover\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData.isSearchable}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-popover-header> <div class=\"header-search-parent\"> <lyte-search data-zcqa=\"{{eachOptionsData.isSearchable.zcqa}}\" on-search=\"{{method('onDropdownSearch',eachOptionsData.onSearch)}}\" lt-prop-query-selector=\"{&quot;scope&quot; : &quot;lyte-drop-box.checkboxBoxClass&quot;, &quot;search&quot; : &quot;lyte-popover-item&quot;}\" lt-prop-placeholder=\"Search\" lt-prop=\"{&quot;closeIcon&quot; : true}\" class=\"{{expHandlers(expHandlers(expHandlers(eachOptionsData.size,'===','small'),'||',expHandlers(eachOptionsData.size,'==','extra-small')),'?:','lyteSm','')}}\"></lyte-search> </div> </lyte-popover-header></template></template><lyte-popover-content class=\"{{expHandlers(expHandlers(eachOptionsData.size,'==','small'),'?:','lyteSm',expHandlers(expHandlers(eachOptionsData.size,'==','extra-small'),'?:','lyteExsm',''))}} {{expHandlers(eachOptionsData.isSearchable,'?:','zcat-pt-6','')}} {{expHandlers(eachOptionsData.createNewBtn,'?:','zcat-pb-6','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData.dropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"><h4 class=\"zcat-mb-6\">{{eachOptionsData.dropLabel}}</h4></template></template><template items=\"{{eachOptionsData.options}}\" item=\"eachOptionsData_data\" index=\"index\" is=\"for\" _new=\"true\"><div> <lyte-popover-item data-value=\"{{eachOptionsData_data.value}}\" data-zcqa=\"{{eachOptionsData_data.zcqa}}-{{index}}\" id=\"lyte_popover_item_{{eachOptionsData_data.id}}\" onmouseenter=\"{{action('setHoverClass',expHandlers('lyte_popover_item_','+',eachOptionsData_data.id))}}\" onmouseleave=\"{{action('removeHoverClass',expHandlers('lyte_popover_item_','+',eachOptionsData_data.id))}}\" aria-selected=\"{{expHandlers(eachOptionsData_data.selected,'?:','true','false')}}\" selected=\"{{expHandlers(eachOptionsData_data.selected,'?:','true','false')}}\" onclick=\"{{action('handleDropItemClick',expHandlers('lyte_popover_item_','+',eachOptionsData_data.id),eachOptionsData_data.value,eachOptionsData_data.itemOnClick)}}\" classss=\"{{expHandlers(data.nestedPopover,'?:','nested-popover-item','')}}\" class=\"{{expHandlers(eachOptionsData_data.nestedPopover,'?:','nested-popover-item','')}} {{expHandlers(data.disabled,'?:','popover-item-disabled','')}}\"> <!--the above class added sept6--> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData_data.icon}}\" is=\"case\" lc-id=\"lc_id_0\"><div> <div class=\"zcat-dF zcat-align-center zcat-gap-4\"> <!-- <lyte-svg lt-prop-path=\"#{{eachOptionsData_data.icon.name}}\" lt-prop-class=\"zcat-stroke-icon-active {{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? 'zcat-h12 zcat-w12' : 'zcat-h14 zcat-w14'}}\" class=\"menu-lyte-svg-class {{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? 'zcat-h12 zcat-w12' : 'zcat-h14 zcat-w14'}}\"> </lyte-svg> --> <zcat-icon class=\"menu-lyte-svg-class zcat-stroke-icon-active\" name=\"{{eachOptionsData_data.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" stroke=\"var(--zcat-menuList-icon-active)\" strokewidth=\"{{expHandlers(eachOptionsData_data.icon.strokeWidth,'||',1.3)}}\"> </zcat-icon> <p>{{eachOptionsData_data.name}}</p> </div> </div></template><template default=\"\"><div> {{eachOptionsData_data.name}} </div></template></template></lyte-popover-item> <template is=\"yield\" yield-name=\"{{eachOptionsData_data.yield}}\"> <lyte-yield yield-name=\"{{eachOptionsData_data.yield}}\"></lyte-yield> </template> <!-- <lyte-svg lyte-if=\"{{eachOptionsData_data.nestedPopover}}\" lt-prop-path=\"#zcat-icon-downArrow\" lt-prop-class=\"zcat-h14 zcat-w14\" class=\"zcat-w14 zcat-h14\" > </lyte-svg> --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData_data.nestedPopover}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-icon class=\"zcat-stroke-icon-active\" name=\"arrow-down\" width=\"14\" height=\"14\" stroke=\"var(--zcat-menuList-icon-active)\" strokewidth=\"1.3\"> </zcat-icon></template></template></div></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData.isLoading}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteDropdownText\"> Loading ... </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(searchResultsFound,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteDropdownText\"> {{expHandlers(eachOptionsData.noResult,'?:',eachOptionsData.noResult,'No Result Found')}} </div></template></template></lyte-popover-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn.label}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-popover-footer class=\"right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{eachOptionsData.createNewBtn.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyte-drop-footer\" style=\"border-top: 1px solid var(--zcat-menuList-border-default);\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{ &quot;label&quot;: &quot;{{expHandlers(eachOptionsData.createNewBtn.label,'?:',eachOptionsData.createNewBtn.label,&quot;Create New&quot;)}}&quot;, &quot;variant&quot;: &quot;ghost&quot;, &quot;size&quot;: &quot;default&quot;, &quot;color&quot;: &quot;primary&quot;, &quot;icon&quot;: { &quot;position&quot;: &quot;left&quot;, &quot;name&quot;: &quot;zcat-icon-plus&quot;, &quot;class&quot;: &quot;zcat-w16 zcat-h16 zcat-stroke-ghost-primarybtn-icon&quot; }, &quot;width&quot;: &quot;zcat-w100p&quot;, &quot;ltPropClassCss&quot;: &quot;btn-radius-top0&quot;, &quot;callback&quot;: { &quot;name&quot;: &quot;{{eachOptionsData.createNewBtn.callback.name}}&quot; } }\"> </zcat-button> </div></template></template></lyte-popover-footer></template></template></template> </lyte-beta-popover></template></template></div></template> </template><style>\n\n/* === Global base styles from reference css/zcat-popover.css === */\nlyte-popover-freeze {\n  opacity: 0 !important;\n}\n.lytePopover {\n  overflow: hidden;    \n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n    border-radius: 6px;\n    border: 1px solid var(--zcat-menuList-border-default);\n    overflow: hidden;\n    background: var(--zcat-menuList-bg-default);\n  transform: translate(1px, 1px);\n}\n.lyteHovercardPopover .lytePopover {\n  background: var(--zcat-tooltip-bg);\n  border-radius: 6px;\n  color: var(--zcat-tooltip-text-primary);\n  font-weight: 400;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  text-align: left;\n  box-shadow: var(--zcat-shadow-light-all);\n  word-break: break-word;\n  overflow: visible;\n  box-shadow: 2px 2px 10px 2px var(--zcat-shadow-bg-default);\n  border: 1px solid var(--zcat-tooltip-border);\n  transform: translateY(-5px);\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight {\n  box-shadow: 1px 1px 0 0 var(--zcat-tooltip-bg);\n}\n.lyteHovercardPopover .lytePopoverArrowIcon {\n  background: var(--zcat-tooltip-bg);\n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n}\nlyte-hovercard-content {\n  padding: 8px;\n}\n/* new for tooltip placement arrow  */\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop {     /* placement = bottom */\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-top: 1px solid var(--zcat-tooltip-border);\n  /* box-shadow: unset; */\n  border-bottom: transparent;\n  border-right: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom {    /* placement = top */  \n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n  box-shadow: none;   \n  border-left: transparent;\n  border-top: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft {    /* placement = right */  \n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-right: transparent;\n  border-top: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight {    /* placement = left */  \n  border-top: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n  border-left: transparent;\n  border-bottom: transparent;\n}\n\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight{\n  box-shadow: none;\n}\n\nlyte-hovercard-content{\n    background: var(--zcat-tooltip-bg);\n    border-radius: 6px;\n    /* box-shadow: 2px 2px 10px 12px var(--zcat-shadow-bg-default); */\n  /* border: 1px solid var(--zcat-tooltip-border); */\n}\n\n.nested-popover-item{\n    display: flex;\n    justify-content: space-between;\n    padding-right: 4px;\n    width: 100%;\n    gap: 6px;\n}\n.zcat-stroke-icon-active{\n  stroke: var(--zcat-menuList-icon-active);\n}\n\nlyte-popover-header, lyte-drop-header{\n    padding: 8px 8px 0;\n}\nlyte-popover-content ,lyte-drop-body {\n    padding: 8px;\n    display: block;\n    /* max-height: 210px; */\n    overflow-y: auto;\n    position: relative;\n}\nlyte-popover-content h4 ,lyte-drop-body h4 {\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    color: var(--zcat-menuList-text-heading);\n}\nlyte-popover-footer{\n    padding: 0;\n}\n\nlyte-drop-item[selected='true']::before{\n    content:unset;\n}\nlyte-popover-item{\n  padding: 8px 4px;\n  width: 100%;\n  cursor: pointer;\n}\n\nlyte-popover-item.popover-item-disabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\nlyte-popover-item.popover-item-disabled p{\n  color: var(--zcat-menuList-text-disabled);\n}\nlyte-popover-item.popover-item-disabled .menu-lyte-svg-class svg path[stroke]{\n  stroke: var(--zcat-menuList-icon-disabled)\n}\n\n\n\n\n/* === Global base styles from reference css/zcat-popover.css === */\nlyte-popover-freeze {\n  opacity: 0 !important;\n}\n.lytePopover {\n  overflow: hidden;    \n  box-shadow: 0px 4px 14px -4px var(--zcat-shadow-bg-default);\n    border-radius: 6px;\n    border: 1px solid var(--zcat-menuList-border-default);\n    overflow: hidden;\n    background: var(--zcat-menuList-bg-default);\n  transform: translate(1px, 1px);\n}\n.lyteHovercardPopover .lytePopover {\n  background: var(--zcat-tooltip-bg);\n  border-radius: 6px;\n  color: var(--zcat-tooltip-text-primary);\n  font-weight: 400;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  text-align: left;\n  box-shadow: var(--zcat-shadow-light-all);\n  word-break: break-word;\n  overflow: visible;\n  box-shadow: 2px 2px 10px 2px var(--zcat-shadow-bg-default);\n  border: 1px solid var(--zcat-tooltip-border);\n  transform: translateY(-5px);\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft,\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight {\n  box-shadow: 1px 1px 0 0 var(--zcat-tooltip-bg);\n}\n.lyteHovercardPopover .lytePopoverArrowIcon {\n  background: var(--zcat-tooltip-bg);\n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n}\nlyte-hovercard-content {\n  padding: 8px;\n}\n/* new for tooltip placement arrow  */\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop {     /* placement = bottom */\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-top: 1px solid var(--zcat-tooltip-border);\n  /* box-shadow: unset; */\n  border-bottom: transparent;\n  border-right: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom {    /* placement = top */  \n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n  box-shadow: none;   \n  border-left: transparent;\n  border-top: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft {    /* placement = right */  \n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-right: transparent;\n  border-top: transparent;\n}\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight {    /* placement = left */  \n  border-top: 1px solid var(--zcat-tooltip-border);\n  border-right: 1px solid var(--zcat-tooltip-border);\n  border-left: transparent;\n  border-bottom: transparent;\n}\n\n.lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowBottom, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowTop, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowLeft, .lyteHovercardPopover .lytePopoverArrowIcon.lytePopoverArrowRight{\n  box-shadow: none;\n}\n\nlyte-hovercard-content{\n    background: var(--zcat-tooltip-bg);\n    border-radius: 6px;\n    /* box-shadow: 2px 2px 10px 12px var(--zcat-shadow-bg-default); */\n  /* border: 1px solid var(--zcat-tooltip-border); */\n}\n\n.nested-popover-item{\n    display: flex;\n    justify-content: space-between;\n    padding-right: 4px;\n    width: 100%;\n    gap: 6px;\n}\n.zcat-stroke-icon-active{\n  stroke: var(--zcat-menuList-icon-active);\n}\n\nlyte-popover-header, lyte-drop-header{\n    padding: 8px 8px 0;\n}\nlyte-popover-content ,lyte-drop-body {\n    padding: 8px;\n    display: block;\n    /* max-height: 210px; */\n    overflow-y: auto;\n    position: relative;\n}\nlyte-popover-content h4 ,lyte-drop-body h4 {\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    color: var(--zcat-menuList-text-heading);\n}\nlyte-popover-footer{\n    padding: 0;\n}\n\nlyte-drop-item[selected='true']::before{\n    content:unset;\n}\nlyte-popover-item{\n  padding: 8px 4px;\n  width: 100%;\n  cursor: pointer;\n}\n\nlyte-popover-item.popover-item-disabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\nlyte-popover-item.popover-item-disabled p{\n  color: var(--zcat-menuList-text-disabled);\n}\nlyte-popover-item.popover-item-disabled .menu-lyte-svg-class svg path[stroke]{\n  stroke: var(--zcat-menuList-icon-disabled)\n}\n\n\n</style>";;
ZcatPopover._dynamicNodes = [{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"a","p":[2]},{"t":"s","p":[2,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"a","p":[2,2]},{"t":"f","p":[2,2],"dN":[{"t":"a","p":[0,1]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3],"in":0,"cn":"lc_id_0"},{"t":"tX","p":[0,1,5,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"tX","p":[0,1],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[0,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[0,1],"in":1,"sibl":[0]},{"t":"a","p":[0,3]},{"t":"r","p":[0,3],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":4,"sibl":[3]},{"t":"s","p":[2,4],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[2,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"cD","p":[2],"in":1,"sibl":[0]},{"t":"s","p":[4],"c":{"lc_id_0":{"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[6,4,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[3],"in":1,"sibl":[0]},{"t":"a","p":[5]},{"t":"f","p":[5],"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"a","p":[2]},{"t":"s","p":[2,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"a","p":[2,2]},{"t":"f","p":[2,2],"dN":[{"t":"a","p":[0,1]},{"t":"s","p":[0,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3],"in":0,"cn":"lc_id_0"},{"t":"tX","p":[0,1,5,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"tX","p":[0,1],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"cD","p":[0,1],"in":2,"sibl":[1]},{"t":"a","p":[0,3]},{"t":"r","p":[0,3],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[0,7],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":4,"sibl":[3]},{"t":"s","p":[2,4],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[2,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"cD","p":[2],"in":1,"sibl":[0]},{"t":"s","p":[4],"c":{"lc_id_0":{"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[6,4,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatPopover._observedAttributes = ["self", "zcatProp", "errorProp", "searchResultsFound"];


ZcatPopover.register("zcat-popover", {
    hash: "ZcatPopover_6",
    refHash: "C_zcat-ui_zcat-ui_2"
}); 


/***/ })

}]);
//# sourceMappingURL=popover-comp.js.map
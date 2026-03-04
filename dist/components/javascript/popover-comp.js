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
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_popover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-popover.js */ 56720538);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class PopoverComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let positionSelect = node.querySelector('[data-action="changePopoverPosition"]');
    if (positionSelect) {
      positionSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('popoverObj'), 'add', 'position', e.target.value);
        comp.constructCodeSnippet();
      });
    }
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

PopoverComp._template = "<template tag-name=\"popover-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Popover</h1> <p class=\"zcat-page-desc\">Popovers display contextual menus, action lists, or nested options triggered by user interaction.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"min-height:260px;display:flex;align-items:flex-start;justify-content:center;padding-top:20px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{popoverObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Position</span> <select data-action=\"changePopoverPosition\" class=\"zcat-custom-select\"> <option value=\"bottom\">Bottom</option> <option value=\"top\">Top</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Searchable</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleSearchObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Heading</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleHeadingObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Basic</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Basic Menu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantBasicObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Icons</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantIconObj}}\"></zcat-popover> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Advanced</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Searchable</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantSearchObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Nested Submenu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantNestedObj}}\"></zcat-popover> </div> </div> </div> </div></template></template> </div> </template><style>/* popover-comp specific overrides if needed */\n</style>";;
PopoverComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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
  hash: "PopoverComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 56720538:
/*!***********************************************!*\
  !*** ./components/javascript/zcat-popover.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatPopover": () => (/* binding */ ZcatPopover)
/* harmony export */ });
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatPopover extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { default: {} }),
      isOpen: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default: false }),
      searchQuery: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string', { default: '' }),
      activeNested: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('number', { default: -1 })
    }), arg1);
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function(e) {
      let node = comp.$node;
      if (node && !node.contains(e.target) && comp.getData('isOpen')) {
        comp.setData('isOpen', false);
        comp.setData('activeNested', -1);
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      togglePopover() {
        this.setData('isOpen', !this.getData('isOpen'));
        if (!this.getData('isOpen')) {
          this.setData('activeNested', -1);
          this.setData('searchQuery', '');
        }
      },
      selectItem(item) {
        if (item.disabled) return;
        if (item.nestedPopover) return; // handled by hover

        this.setData('isOpen', false);
        this.setData('activeNested', -1);
        this.setData('searchQuery', '');

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item, zcatProp);
        }
      },
      showNested(index) {
        this.setData('activeNested', index);
      },
      hideNested() {
        this.setData('activeNested', -1);
      },
      onSearchInput(event) {
        this.setData('searchQuery', event.target.value);
      },
      onCreateNew() {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onCreateNew) {
          self.executeMethod(zcatProp.onCreateNew, zcatProp);
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

ZcatPopover._template = "<template tag-name=\"zcat-popover\"> <div class=\"zcat-popover-wrapper {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Trigger --> <div class=\"zcat-popover-trigger\" onclick=\"{{action('togglePopover')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.trigger}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{zcatProp.trigger}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.trigger,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <button class=\"zcat-popover-default-trigger\"> <zcat-icon name=\"more-vertical\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </template></template> </div> <!-- Popover Menu --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{isOpen}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-menu {{expHandlers(expHandlers(zcatProp.position,'===','top'),'?:','zcat-popover-top',expHandlers(expHandlers(zcatProp.position,'===','left'),'?:','zcat-popover-left',expHandlers(expHandlers(zcatProp.position,'===','right'),'?:','zcat-popover-right','zcat-popover-bottom')))}}\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\"> <!-- Search --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isSearchable}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-search\"> <zcat-icon name=\"search\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\"></zcat-icon> <input type=\"text\" class=\"zcat-popover-search-input\" placeholder=\"Search...\" value=\"{{searchQuery}}\" oninput=\"{{action('onSearchInput',event)}}\"> </div> </template></template> <!-- Heading --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.heading}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-heading\">{{zcatProp.heading}}</div> </template></template> <!-- Options --> <div class=\"zcat-popover-options\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-popover-item {{expHandlers(item.disabled,'?:','zcat-popover-item-disabled','')}} {{expHandlers(item.selected,'?:','zcat-popover-item-selected','')}} {{expHandlers(item.nestedPopover,'?:','zcat-popover-item-nested','')}}\" onclick=\"{{action('selectItem',item)}}\" onmouseenter=\"{{action('showNested',index)}}\" onmouseleave=\"{{action('hideNested')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{item.icon}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-popover-item-icon\"></zcat-icon> </template></template> <span class=\"zcat-popover-item-label\">{{item.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.nestedPopover}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"chevron-right\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\" class=\"zcat-popover-item-arrow\"></zcat-icon> </template></template> <!-- Nested submenu --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.nestedPopover,'&amp;&amp;',expHandlers(activeNested,'===',index))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-submenu\"> <template items=\"{{item.options}}\" item=\"sub\" index=\"subIdx\" is=\"for\" _new=\"true\"><div class=\"zcat-popover-item {{expHandlers(sub.disabled,'?:','zcat-popover-item-disabled','')}}\" onclick=\"{{action('selectItem',sub)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{sub.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{sub.icon}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-popover-item-icon\"></zcat-icon> </template></template> <span class=\"zcat-popover-item-label\">{{sub.name}}</span> </div></template> </div> </template></template> </div></template> </div> <!-- Create New --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-create\" onclick=\"{{action('onCreateNew')}}\"> <zcat-icon name=\"plus\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> <span>Create New</span> </div> </template></template> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Popover Component\n   ============================== */\n\nzcat-popover * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-popover-wrapper {\n  position: relative;\n  display: inline-flex;\n}\n\n/* --- Default trigger --- */\n.zcat-popover-default-trigger {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: 1px solid var(--zcat-body-border);\n  background: var(--zcat-popup-bg);\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--zcat-body-text-secondary);\n  transition: background 0.15s, border-color 0.15s;\n}\n.zcat-popover-default-trigger:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Menu panel --- */\n.zcat-popover-menu {\n  position: absolute;\n  z-index: 500;\n  min-width: 180px;\n  max-width: 320px;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 8px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  padding: 4px;\n  animation: zcatPopoverFadeIn 0.15s ease;\n}\n\n@keyframes zcatPopoverFadeIn {\n  from { opacity: 0; transform: translateY(4px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Positions */\n.zcat-popover-bottom { top: calc(100% + 4px); left: 0; }\n.zcat-popover-top { bottom: calc(100% + 4px); left: 0; }\n.zcat-popover-left { right: calc(100% + 4px); top: 0; }\n.zcat-popover-right { left: calc(100% + 4px); top: 0; }\n\n/* --- Search --- */\n.zcat-popover-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--zcat-popup-border);\n  margin-bottom: 4px;\n  color: var(--zcat-body-text-grey);\n}\n.zcat-popover-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n.zcat-popover-search-input::placeholder {\n  color: var(--zcat-body-text-grey);\n}\n\n/* --- Heading --- */\n.zcat-popover-heading {\n  font: 500 11px/14px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-grey);\n  padding: 6px 8px 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n/* --- Options list --- */\n.zcat-popover-options {\n  max-height: 240px;\n  overflow-y: auto;\n}\n\n/* --- Menu item --- */\n.zcat-popover-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  transition: background 0.12s;\n  position: relative;\n}\n.zcat-popover-item:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n.zcat-popover-item-selected {\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n}\n.zcat-popover-item-selected .zcat-popover-item-icon {\n  color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-popover-item-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: default;\n}\n.zcat-popover-item-icon {\n  flex-shrink: 0;\n  color: var(--zcat-body-text-grey);\n}\n.zcat-popover-item-label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zcat-popover-item-arrow {\n  flex-shrink: 0;\n  margin-left: auto;\n  opacity: 0.5;\n}\n\n/* --- Nested submenu --- */\n.zcat-popover-submenu {\n  position: absolute;\n  left: calc(100% + 4px);\n  top: 0;\n  min-width: 160px;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 8px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  padding: 4px;\n  z-index: 501;\n}\n\n/* --- Create New button --- */\n.zcat-popover-create {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px;\n  border-top: 1px solid var(--zcat-popup-border);\n  margin-top: 4px;\n  cursor: pointer;\n  font: 500 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  border-radius: 0 0 4px 4px;\n  transition: background 0.12s;\n}\n.zcat-popover-create:hover {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n</style>";;
ZcatPopover._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}},"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,11,1],"cn":"lc_id_0"},{"t":"f","p":[1,11,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,3,0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[0,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"t":"tX","p":[0,3,0]}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatPopover._observedAttributes = ["self", "zcatProp", "isOpen", "searchQuery", "activeNested"];

ZcatPopover.register("zcat-popover", {
  hash: "ZcatPopover_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=popover-comp.js.map
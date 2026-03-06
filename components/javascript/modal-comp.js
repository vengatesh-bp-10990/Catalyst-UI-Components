"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/modal-comp"],{

/***/ 20415920:
/*!*********************************************!*\
  !*** ./components/javascript/modal-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComp": () => (/* binding */ ModalComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-modal.js */ 72564403);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class ModalComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let sizeSelect = node.querySelector('[data-action="changeModalSize"]');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('modalObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let modalObj = this.getData('modalObj') || {};

    let slyte_code = '<zcat-modal\n  self="{{self}}"\n  zcat-prop="{{modalObj}}"\n></zcat-modal>';

    let propObj = { header: { title: 'Modal Title', desc: 'An optional description.' } };
    if (modalObj.size) propObj.size = modalObj.size;
    propObj.footer = {
      right: [
        { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
        { label: 'Save', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
      ]
    };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    modalObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-modal-overlay">\n';
    html_code += '  <div class="zcat-modal-container">\n';
    html_code += '    <div class="zcat-modal-header">\n';
    html_code += '      <h2 class="zcat-modal-title">Modal Title</h2>\n';
    html_code += '      <button class="zcat-modal-close">&times;</button>\n';
    html_code += '    </div>\n';
    html_code += '    <div class="zcat-modal-body">Content goes here.</div>\n';
    html_code += '    <div class="zcat-modal-footer">\n';
    html_code += '      <button class="zcat-btn-outline">Cancel</button>\n';
    html_code += '      <button class="zcat-btn-primary">Save</button>\n';
    html_code += '    </div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-modal-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  display: flex; align-items: center; justify-content: center;\n}\n\n';
    css_code += '.zcat-modal-container {\n  width: 520px; max-width: 90vw;\n  background: var(--zcat-popup-bg);\n  border-radius: 12px;\n  box-shadow: var(--zcat-shadow-dark-all);\n}';

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
      demoModalOpen: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { default: false }),
      modalObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: {
            right: [
              { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
              { label: 'Confirm', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
            ]
          }
        }
      }),
      openBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Open Modal', variant: 'fill', color: 'primary', callback: { name: 'openDemoModal' } }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleDescObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleDesc' } }
      }),
      toggleBackObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleBack' } }
      }),
      // Variants
      variantDefaultObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Confirm', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantSmallObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          size: 'small',
          header: { title: 'File Deleted' },
          footer: { right: [{ label: 'OK', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantLargeObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          size: 'large',
          header: { title: 'Edit Profile' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Save', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantWithDescObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: { title: 'Delete Record', desc: 'This action cannot be undone.' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Delete', variant: 'fill', color: 'error' }] }
        }
      }),
      variantBackArrowObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: { title: 'Step 2 of 3', backArrow: true },
          footer: { right: [{ label: 'Back', variant: 'outline', color: 'primary' }, { label: 'Next', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantFooterActionsObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: { title: 'Settings' },
          footer: {
            left: [{ label: 'Reset', variant: 'ghost', color: 'default' }],
            right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Apply', variant: 'fill', color: 'primary' }]
          }
        }
      }),
      openVarDefaultBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Default', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarDefault' } } }),
      openVarSmallBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Small', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarSmall' } } }),
      openVarLargeBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Large', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarLarge' } } }),
      openVarWithDescBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarWithDesc' } } }),
      openVarBackBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarBack' } } }),
      openVarFooterBtnObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarFooter' } } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      openDemoModal() {
        let modalNode = this.$node.querySelector('zcat-modal');
        if (modalNode && modalNode.component) {
          modalNode.component.exec('openModal');
        }
      },
      openVarDefault() {
        let m = this.$node.querySelector('[data-modal-id="v-default"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarSmall() {
        let m = this.$node.querySelector('[data-modal-id="v-small"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarLarge() {
        let m = this.$node.querySelector('[data-modal-id="v-large"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarWithDesc() {
        let m = this.$node.querySelector('[data-modal-id="v-desc"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarBack() {
        let m = this.$node.querySelector('[data-modal-id="v-back"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarFooter() {
        let m = this.$node.querySelector('[data-modal-id="v-footer"]');
        if (m && m.component) m.component.exec('openModal');
      },
      onModalCancel() {
        // close handled automatically
      },
      onModalSave() {
        // demo save callback
      },
      resetCustomization() {
        this.setData('modalObj', {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: {
            right: [
              { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
              { label: 'Confirm', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
            ]
          }
        });
        this.$app.objectUtils(this.getData('toggleDescObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleBackObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleDesc(checked) {
        if (checked) {
          this.$app.objectUtils(this.getData('modalObj').header, 'add', 'desc', 'Are you sure you want to proceed?');
        } else {
          this.$app.objectUtils(this.getData('modalObj').header, 'add', 'desc', '');
        }
        this.constructCodeSnippet();
      },
      onToggleBack(checked) {
        this.$app.objectUtils(this.getData('modalObj').header, 'add', 'backArrow', checked);
        this.constructCodeSnippet();
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

ModalComp._template = "<template tag-name=\"modal-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Modal</h1> <p class=\"zcat-page-desc\">Modals display content in a focused overlay that requires user interaction before returning to the main view.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"display:flex;align-items:center;justify-content:center;min-height:120px;\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openBtnObj}}\"></zcat-button> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{modalObj}}\"></zcat-modal> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeModalSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default (520px)</option> <option value=\"small\">Small (400px)</option> <option value=\"large\">Large (720px)</option> <option value=\"full\">Full screen</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Description</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDescObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Back Arrow</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleBackObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (520px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\" data-modal-id=\"v-default\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarDefaultBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small (400px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantSmallObj}}\" data-modal-id=\"v-small\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarSmallBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large (720px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantLargeObj}}\" data-modal-id=\"v-large\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarLargeBtnObj}}\"></zcat-button> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Features</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantWithDescObj}}\" data-modal-id=\"v-desc\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarWithDescBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Back Arrow</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantBackArrowObj}}\" data-modal-id=\"v-back\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarBackBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Footer Actions</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantFooterActionsObj}}\" data-modal-id=\"v-footer\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarFooterBtnObj}}\"></zcat-button> </div> </div> </div> </div></template></template> </div> </template><style>/* modal-comp specific overrides if needed */\n</style>";;
ModalComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,3],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,3],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,10,9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

ModalComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "demoModalOpen",
  "modalObj",
  "openBtnObj",
  "resetButtonObj",
  "toggleDescObj",
  "toggleBackObj",
  "variantDefaultObj",
  "variantSmallObj",
  "variantLargeObj",
  "variantWithDescObj",
  "variantBackArrowObj",
  "variantFooterActionsObj",
  "openVarDefaultBtnObj",
  "openVarSmallBtnObj",
  "openVarLargeBtnObj",
  "openVarWithDescBtnObj",
  "openVarBackBtnObj",
  "openVarFooterBtnObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



ModalComp.register("modal-comp", {
  hash: "ModalComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 72564403:
/*!*********************************************!*\
  !*** ./components/javascript/zcat-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatModal": () => (/* binding */ ZcatModal)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatModal extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { default: {} }),
      isOpen: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default: false })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      openModal() {
        this.setData('isOpen', true);
        document.body.style.overflow = 'hidden';
      },
      closeModal() {
        this.setData('isOpen', false);
        document.body.style.overflow = '';
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onClose) {
          self.executeMethod(zcatProp.onClose, zcatProp);
        }
      },
      onOverlayClick(event) {
        if (event.target.classList.contains('zcat-modal-overlay')) {
          let zcatProp = this.getData('zcatProp');
          if (zcatProp.closeOnOverlay !== false) {
            this.exec('closeModal');
          }
        }
      },
      onFooterBtnClick(btn) {
        let self = this.getData('self');
        if (self && btn && btn.callback && btn.callback.name) {
          self.executeMethod(btn.callback.name, btn, this.getData('zcatProp'));
        }
        if (btn.closeOnClick !== false) {
          this.exec('closeModal');
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          let zcatProp = this.getData('zcatProp');
          if (zcatProp && zcatProp.open) {
            this.setData('isOpen', true);
            document.body.style.overflow = 'hidden';
          }
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatModal._template = "<template tag-name=\"zcat-modal\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{isOpen}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-modal-overlay {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-modal-sm',expHandlers(expHandlers(zcatProp.size,'===','large'),'?:','zcat-modal-lg',expHandlers(expHandlers(zcatProp.size,'===','full'),'?:','zcat-modal-full','')))}} {{expHandlers(zcatProp.classCss,'||','')}}\" onclick=\"{{action('onOverlayClick',event)}}\"> <div class=\"zcat-modal-container\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\"> <!-- Header --> <div class=\"zcat-modal-header\"> <div class=\"zcat-modal-header-left\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.header,'&amp;&amp;',zcatProp.header.backArrow)}}\" is=\"case\" lc-id=\"lc_id_0\"> <button class=\"zcat-modal-back\" onclick=\"{{action('closeModal')}}\"> <zcat-icon name=\"arrow-left\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </template></template> <div class=\"zcat-modal-header-text\"> <h2 class=\"zcat-modal-title\">{{expHandlers(zcatProp.header,'?:',zcatProp.header.title,'Modal')}}</h2> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.header,'&amp;&amp;',zcatProp.header.desc)}}\" is=\"case\" lc-id=\"lc_id_0\"> <p class=\"zcat-modal-desc\">{{zcatProp.header.desc}}</p> </template></template> </div> </div> <button class=\"zcat-modal-close\" onclick=\"{{action('closeModal')}}\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </div> <!-- Body --> <div class=\"zcat-modal-body\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.body,'&amp;&amp;',zcatProp.body.content)}}\" is=\"case\" lc-id=\"lc_id_0\"> {{zcatProp.body.content}} </template></template> </div> <!-- Footer --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-modal-footer\"> <div class=\"zcat-modal-footer-left\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer.left}}\" is=\"case\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.footer.left}}\" item=\"btn\" index=\"index\" is=\"for\" _new=\"true\"><zcat-button self=\"{{self}}\" zcat-prop=\"{{btn}}\"></zcat-button></template> </template></template> </div> <div class=\"zcat-modal-footer-right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer.right}}\" is=\"case\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.footer.right}}\" item=\"btn\" index=\"index\" is=\"for\" _new=\"true\"><zcat-button self=\"{{self}}\" zcat-prop=\"{{btn}}\"></zcat-button></template> </template></template> </div> </div> </template></template> </div> </div> </template></template> </template><style>/* ==============================\n   ZCAT Modal Component\n   ============================== */\n\nzcat-modal * {\n  box-sizing: border-box;\n}\nzcat-modal p {\n  margin: 0;\n}\n\n/* --- Overlay --- */\n.zcat-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--zcat-popup-bg-blur);\n  animation: zcatModalFadeIn 0.2s ease;\n}\n\n@keyframes zcatModalFadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n/* --- Container --- */\n.zcat-modal-container {\n  display: flex;\n  flex-direction: column;\n  width: 520px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 48px);\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 12px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  animation: zcatModalSlideIn 0.2s ease;\n  overflow: hidden;\n}\n\n@keyframes zcatModalSlideIn {\n  from { opacity: 0; transform: translateY(16px) scale(0.98); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n/* Size variants */\n.zcat-modal-sm .zcat-modal-container { width: 400px; }\n.zcat-modal-lg .zcat-modal-container { width: 720px; }\n.zcat-modal-full .zcat-modal-container {\n  width: calc(100vw - 48px);\n  height: calc(100vh - 48px);\n  max-width: none;\n  max-height: none;\n}\n\n/* --- Header --- */\n.zcat-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px 12px;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.zcat-modal-header-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.zcat-modal-header-text {\n  flex: 1;\n  min-width: 0;\n}\n.zcat-modal-title {\n  font: 600 var(--zcat-font-18-22) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  margin: 0;\n}\n.zcat-modal-desc {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-grey);\n  margin-top: 4px;\n}\n.zcat-modal-back {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: var(--zcat-body-text-primary);\n  transition: background 0.15s;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.zcat-modal-back:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n\n/* --- Close button --- */\n.zcat-modal-close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: var(--zcat-body-text-grey);\n  transition: background 0.15s, color 0.15s;\n  flex-shrink: 0;\n}\n.zcat-modal-close:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Body --- */\n.zcat-modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 24px 20px;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Footer --- */\n.zcat-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 24px 20px;\n  gap: 12px;\n  flex-shrink: 0;\n  border-top: 1px solid var(--zcat-popup-border);\n}\n.zcat-modal-footer-left,\n.zcat-modal-footer-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n</style>";;
ZcatModal._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}},"cn":"lc_id_0"},{"t":"s","p":[1,1,3,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"tX","p":[1,1,3,1,3,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,1,3,1,3,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[1,1,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,7,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,1,11],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,2,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatModal._observedAttributes = ["self", "zcatProp", "isOpen"];


ZcatModal.register("zcat-modal", {
  hash: "ZcatModal_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=modal-comp.js.map
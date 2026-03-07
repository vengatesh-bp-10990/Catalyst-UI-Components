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
      changeModalSize(e) {
        this.$app.objectUtils(this.getData('modalObj'), 'add', 'size', e.target.value);
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

ModalComp._template = "<template tag-name=\"modal-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Modal</h1> <p class=\"zcat-page-desc\">Modals display content in a focused overlay that requires user interaction before returning to the main view.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"display:flex;align-items:center;justify-content:center;min-height:120px;\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openBtnObj}}\"></zcat-button> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{modalObj}}\"></zcat-modal> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeModalSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default (520px)</option> <option value=\"small\">Small (400px)</option> <option value=\"large\">Large (720px)</option> <option value=\"full\">Full screen</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Description</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDescObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Back Arrow</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleBackObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (520px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\" data-modal-id=\"v-default\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarDefaultBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small (400px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantSmallObj}}\" data-modal-id=\"v-small\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarSmallBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large (720px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantLargeObj}}\" data-modal-id=\"v-large\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarLargeBtnObj}}\"></zcat-button> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Features</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantWithDescObj}}\" data-modal-id=\"v-desc\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarWithDescBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Back Arrow</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantBackArrowObj}}\" data-modal-id=\"v-back\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarBackBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Footer Actions</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantFooterActionsObj}}\" data-modal-id=\"v-footer\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarFooterBtnObj}}\"></zcat-button> </div> </div> </div> </div></template></template></div> </template><style>/* modal-comp specific overrides if needed */\n</style>";;
ModalComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,3],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,3],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,10,9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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
  hash: "ModalComp_4",
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
/* harmony import */ var _zcat_avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-avatar.js */ 26299788);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-modal.js */ 29375081);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class ZcatModal extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
      super();
  }

  // init(){
  //   if(!this.getData("featureObj")) {
  //       this.setData("featureObj", this.getData("featureObj"));
  //   }
  // }
  // init() {
  //   const data = this.getData('zcatProp.footer.right');
  //   const submitData = data.filter((item) => item.callback.type === 'submit');
  //   this.setData('submit', submitData[0]);
  // }

  data(arg1) {
    const defaultProp = {
      id: '',
      width: '',
      transition: '',
      isFormLoading: false,
      currentPage: 0,
      header: {
        left: {
          yield: '',
          title: {
            name: '',
            class: ''
          },
          desc: {
            name: '',
            class: ''
          }
        },
        right: {
          yield: '',
          list: []
        },
        tabs: {
          selectedTab: '',
          list: [
            {
              label: '',
              value: ''
            }
          ]
        }
      },
      body: [
        [
          {
            class: '',
            yield: '',
            title: {
              name: '',
              class: ''
            },
            desc: {
              name: '',
              class: ''
            },
            list: [
              {
                key_name: 'bucket_name',
                type: 'input',
                value: 'bucket_name',
                label: 'Bucket Name',
                placeholder: 'Enter Bucket Name',
                onValueChange: 'convertToLowerCase'
              }
            ]
          },
          {
            yield: 'bucket_configuration_details'
          }
        ]
      ],
      footer: {
        left: [
          {
            variant: 'secondary',
            label: 'CLI Deploy',
            callback: {
              name: 'openCliDeployModal'
            }
          }
        ],
        right: [
          {
            variant: 'secondary',
            label: 'Cancel',
            callback: {
              name: 'closeCliDeployModal'
            }
          },
          {
            variant: 'secondary',
            label: 'CLI Deploy',
            icon: {
              position: 'left',
              name: 'zcat-icon-clideploy',
              class: 'zcat-w14 zcat-h16'
            },
            callback: {
              type: 'submit',
              name: 'submitCliDeployModal'
            }
          }
        ]
      }
    };
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object'),
      // zcatProp: prop('object'),
      submit: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object'),
      hasPagination: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('boolean'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("object", { watch: true }),
      isPopUpOpen: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("boolean", false)
      // featureObj: prop("object", { watch: true }),
    }), arg1);
  }

  resetBoxShadow() {
    const zcatProp = this.getData('zcatProp');
    let modalBody = document.querySelector(
      `lyte-modal-content[data-name='${zcatProp.id}']`
    );

    if (modalBody) {
      const applyBoxShadow = () => {
        modalBody.previousElementSibling.style = '';
        modalBody.nextElementSibling.style = '';
        if (modalBody.scrollHeight > modalBody.clientHeight) {
          modalBody.nextElementSibling.style =
            'box-shadow: var(--zcat-shadow-dark-top)';
        }

        const id = this.getData('zcatProp.id');
        document.querySelector(`lyte-modal#${id}`).alignModal();
      };

      // Initial apply
      applyBoxShadow();

      // Scroll logic
      modalBody.onscroll = function () {
        if (modalBody.scrollHeight > modalBody.clientHeight) {
          modalBody.previousElementSibling.style =
            modalBody.scrollTop == 0
              ? ''
              : 'box-shadow: var(--zcat-shadow-dark-bottom)';
          modalBody.nextElementSibling.style =
            modalBody.scrollTop + modalBody.clientHeight ==
            modalBody.scrollHeight
              ? ''
              : 'box-shadow: var(--zcat-shadow-dark-top)';
        }
      };

      // Watch for height changes (accordion open/close, dynamic content)
      const resizeObserver = new ResizeObserver(() => {
        applyBoxShadow();
      });
      resizeObserver.observe(modalBody);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onAfterModalOpen() {
        this.setData('isPopUpOpen', true);
        this.resetBoxShadow();
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');

        const outletEl = document.getElementById('outlet');
        if (outletEl) {
          // outletEl.style.filter = 'blur(1px)';
        }

        const methodName = zcatProp?.callback?.onOpen;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }

      },
      onModalClose() {
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');

        const outletEl = document.getElementById('outlet');
        if (outletEl) {
          outletEl.style.filter = 'none';
        }

        const methodName = zcatProp?.callback?.onClose;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }

        this.setData('isPopUpOpen', false);
                
      },
      onBeforeModalClose(){
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');
        
        const outletEl = document.getElementById('outlet');
        if(outletEl){
          outletEl.style.filter = '';
        }

        const methodName = zcatProp?.callback?.onBeforeClose;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      routeChange(route) {

        const outletEl = document.getElementById('outlet');
          if (outletEl && outletEl.style.filter == 'blur(1px)') {
            outletEl.style.filter = 'none';
        }


        // this.setData('zcatProp.header.tabs.selectedTab', route);
        if(this.getData('zcatProp.header.tabsPrimary')){
          this.setData('zcatProp.header.tabsPrimary.selectedTab', route);
        }
        else if(this.getData('zcatProp.header.tabsSecondary')){
          this.setData('zcatProp.header.tabsSecondary.selectedTab', route);
        }
      },
      async submitForm(event) {
        console.log('async submitForm');
        event.preventDefault();
        event.stopPropagation();
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (this.getData('submit').callback.name) {
          await self.executeMethod(
            this.getData('submit').callback.name,
            prop.callback?.arguments
          );
        }
      },
      async customLbindForFormHeaderTab(item, index) {
        const self = this.getData('self');
        // this.tabSwitching(item, index);         


        if (item.callback.name) {
          await self.executeMethod(item.callback.name, item, index);
        }
      },
      async customLbindForSubHeaderMenu(methodName, item) {
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
    async function resetBoxShadow() {
      this.resetBoxShadow();
      const id = this.getData('zcatProp.id');
      document.querySelector(`lyte-modal#${id}`).alignModal();
    }

    return Object.assign(super.observers({
      // resetBoxShadow: resetBoxShadow.observes('zcatProp.currentPage') // No I18N
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatModal._template = "<template tag-name=\"zcat-modal\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-three-dots\" viewBox=\"0 0 14 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> <circle cx=\"7\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> <circle cx=\"12\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> </svg> <svg id=\"zcat-icon-avatar\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M13.3333 14C13.3333 13.0696 13.3333 12.6044 13.2185 12.2259C12.9599 11.3736 12.293 10.7067 11.4407 10.4482C11.0622 10.3333 10.597 10.3333 9.66662 10.3333H6.3333C5.40292 10.3333 4.93773 10.3333 4.5592 10.4482C3.70693 10.7067 3.03999 11.3736 2.78145 12.2259C2.66663 12.6044 2.66663 13.0696 2.66663 14M11 5C11 6.65685 9.65681 8 7.99996 8C6.3431 8 4.99996 6.65685 4.99996 5C4.99996 3.34315 6.3431 2 7.99996 2C9.65681 2 11 3.34315 11 5Z\" stroke=\"#4D618A\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-modal id=\"{{zcatProp.id}}\" lt-prop-show=\"false\" lt-prop-show-close-button=\"false\" lt-prop-width=\"{{expHandlers(zcatProp.width,'?:',zcatProp.width,'600px')}}\" lt-prop-close-on-escape=\"true\" lt-prop-transition=\"{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;duration&quot;:&quot;0.5&quot;}\" lt-prop-allow-multiple=\"true\" on-show=\"{{method('onAfterModalOpen')}}\" on-close=\"{{method('onModalClose')}}\" on-before-close=\"{{method('onBeforeModalClose')}}\" lt-prop-wrapper-class=\"{{expHandlers(zcatProp.deleteModalInput,'?:','delete-modal--input','')}} {{expHandlers(zcatProp.deleteModalNoInput,'?:','delete-modal--noinput','')}}\"> <template is=\"registerYield\" yield-name=\"modal\"> <form if=\"{{lbind(isPopUpOpen)}}\" class=\"{{expHandlers(zcatProp.isFormLoading,'?:','modal-loader','')}}\" onsubmit=\"{{action('submitForm',event)}}\"> <lyte-modal-header data-name=\"{{zcatProp.id}}\"> <div class=\"zcat-form-header\"> <div class=\"zcat-left-alignment\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.frontYield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{zcatProp.left.frontYield}}\"></lyte-yield> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.header.left.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div> <zcat-avatar zcat-prop=\"{{zcatProp.header.left.avatar}}\" self=\"{{self}}\"> </zcat-avatar> </div></template></template><h5> {{zcatProp.header.left.title.name}} </h5> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.badge}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{zcatProp.header.left.badge}}\"> </zcat-label> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{zcatProp.left.yield}}\"></lyte-yield> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.header.left.desc.name}}\" is=\"case\" lc-id=\"lc_id_0\"><p class=\"zcat-text-12 zcat-color-dark2 zcat-mt-4\">{{zcatProp.header.left.desc.name}}</p></template></template></div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.tabsSecondary}}\" lc-id=\"lc_id_0\"> <div class=\"zcat-subheader-tabs zcat-secondary-tab\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header.tabsSecondary.list}}\" item=\"item\" index=\"index\"> <go-to lt-prop-route=\"{{item.route}}\" lt-prop-dp=\"{{item.dynamicParams}}\" lt-prop-qp=\"{{item.queryParams}}\" lt-prop-class=\"zcat-link zcat-text-12\" lt-prop-custom=\"\" onclick=\"{{action('routeChange',item.route)}}\"> <a class=\"{{expHandlers(expHandlers(zcatProp.header.tabsSecondary.selectedTab,'==',item.route),'?:','active-tab','')}}\" data-zcqa=\"{{item.zcqa}}-{{index}}\">{{item.label}}</a> </go-to> </template> </div> </template></template> <div class=\"zcat-right-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.tabsPrimary}}\" lc-id=\"lc_id_0\"> <div class=\"zcat-subheader-tabs\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header.tabsPrimary.list}}\" item=\"item\" index=\"index\"> <go-to lt-prop-route=\"{{item.route}}\" lt-prop-dp=\"{{item.dynamicParams}}\" lt-prop-qp=\"{{item.queryParams}}\" lt-prop-class=\"zcat-link zcat-text-12\" lt-prop-custom=\"\" onclick=\"{{action('routeChange',item.route)}}\"> <a class=\"{{expHandlers(expHandlers(zcatProp.header.tabsPrimary.selectedTab,'==',item.route),'?:','active-tab','')}}\" data-zcqa=\"{{item.zcqa}}-{{index}}\">{{item.label}}</a> </go-to> </template> </div> </template></template> </lyte-modal-header> <lyte-modal-content data-name=\"{{zcatProp.id}}\"> <lyte-yield yield-name=\"modal_body\" error-prop=\"{{zcatProp.error}}\" self=\"{{self}}\" data=\"{{zcatProp.body}}\"> </lyte-yield> </lyte-modal-content> <lyte-modal-footer data-name=\"{{zcatProp.id}}\" class=\"zcat-form-footer\"> <div class=\"zcat-left-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.footer.left}}\" lc-id=\"lc_id_0\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.footer.left}}\" item=\"item\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.yield,'!')}}\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{item}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </template> </template></template> </div> <div class=\"zcat-right-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.footer.right}}\" lc-id=\"lc_id_0\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.footer.right}}\" item=\"item\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.yield,'!')}}\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{item}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </template> </template></template> </div> </lyte-modal-footer> </form> </template> </lyte-modal> </template><style>form lyte-modal-header .primary-tabs lyte-tab-title{\n    border-bottom: 1px solid var(--zcat-color-primarylight);\n}\n\n\n/* modal tab  */\n\n  .zcat-subheader-tabs {\n    width: 100%;\n    /* height: 48px; */\n    display: flex;\n    gap: 5px;\n    padding: 0 14px;\n    background: var(--zcat-tabs-primary-bg);\n    /* border-bottom: 1px solid var(--zcat-tabs-primary-border-default); */\n  }\n  .zcat-subheader-tabs a {\n    font-size: 14px;\n    font-family: var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-primary-text-default);\n    text-decoration: none;\n    /* padding: 15px 10px; */\n    padding: 0 8px;\n    cursor: pointer;\n    /* height: 48px; */\n    display: inline-flex;\n    font-weight: 400;\n    padding: 4px 8px;\n  }\n  .zcat-subheader-tabs a:hover {\n    cursor: pointer;\n    color: var(---zcat-tabs-primary-text-hover) !important;\n    background: var(--zcat-tabs-primary-bg-hover);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-hover);\n    border-radius: 4px 4px 0px 0px;\n  }\n  .zcat-subheader-tabs a.active-tab {\n    color: var(--zcat-tabs-primary-text-active) !important;\n    font-family: var(--zcat-font-family-primary);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-active);\n    font-weight: 500;\n    border-radius: 4px 4px 0px 0px;\n  }\n  \n.header-border{\n    border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n.zcat-subheader-tabs.zcat-secondary-tab{\n    width:fit-content;\n    padding: 4px;\n    border-radius: 6px;\n    background: var(--zcat-tabs-secondary-bg-default);\n    display: flex;\n    gap: 4px;\n}\n\n.zcat-subheader-tabs.zcat-secondary-tab a {\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 6px;\n    /* height: 20px; */\n  }\n  .zcat-subheader-tabs.zcat-secondary-tab a:hover {\n    cursor: pointer;\n    color: var(---zcat-tabs-secondary-text-hover) !important;\n    background: var(--zcat-tabs-secondary-bg-hover);\n    border-bottom: none;\n  }\n  .zcat-subheader-tabs.zcat-secondary-tab a.active-tab {\n    color: var(--zcat-tabs-secondary-text-active) !important;\n    font-family: var(--zcat-font-family-primary);\n    border-bottom: none;\n    font-weight: 500;\n    background-color: var(--zcat-tabs-secondary-bg-active);\n    border-radius: 4px;\n  }\n /* .zcat-primary-tab-present{\n    height: calc(100% - 79px);\n  } */\n  .secondary-tab-height{\n    height: 48px;\n  }\n\n\n.lyteModal lyte-modal-header .zcat-subheader-tabs{\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n\n.delete-modal--noinput .lyteModal{\n  width: 414px !important;\n}\n.delete-modal--input .lyteModal{\n  width: 548px !important;\n}\n\n  \n\n/* === Global base styles from reference css/zcat-modal.css === */\nlyte-wormhole * {\n  box-sizing: border-box;\n}\n.lyteModal {\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n  margin-top: -24px;\n  margin-left: -27px;\n}\nlyte-modal-header {\n  color: var(--zcat-body-text-primary);\n  font-family: var(--zcat-font-family-primary);\n  padding: 25px;\n  font-weight: 600;\n}\n/* lyte-modal-content {\n  padding: 8px 25px;\n} */\nlyte-modal-footer {\n  padding: 15px 25px 25px;\n}\nlyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\nlyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  opacity: unset !important;\n  transition: none;\n}\nlyte-modal-content {\n  padding: 8px 24px;\n  max-height: calc(100vh - 200px) !important;\n  overflow-y: auto;\n  color: var(--zcat-body-text-primary);\n}\nlyte-modal-content > * {\n  display: block;\n}\nform lyte-modal-footer {\n  padding: 0;\n}\nform lyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\n/* lyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  /* opacity: 0.3; \n  transition: none;\n} */\nform lyte-modal-header {\n  font-family: var(--zcat-font-family-primary);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\nform lyte-modal-header .zcat-form-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  width: 100%;\n  background: var(--zcat-popup-bg);\n  border-radius: 10px 10px 0 0;\n}\nform lyte-modal-header .zcat-form-header .zcat-left-alignment {\n  /* display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 10px; */\n}\nform lyte-modal-header .zcat-form-header .zcat-right-alignment {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 10px;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 28px;\n  background: var(--zcat-color-grey2);\n  border: 1px solid var(--zcat-color-grey1);\n  border-radius: 6px;\n  cursor: pointer;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn:hover {\n  background: var(--zcat-color-primarylight);\n  border-color: var(--zcat-color-grey1);\n}\nform lyte-modal-header .zcat-form-header-tabs {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  gap: 5px;\n  padding: 0 16px;\n  background: var(--zcat-color-white);\n  border-bottom: 1px solid var(--zcat-color-primarylight);\n}\nform lyte-modal-header .zcat-form-header-tabs div {\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-color-dark1);\n  padding: 0px 10px;\n  cursor: pointer;\n  display: inline-flex;\n}\nform lyte-modal-header .zcat-form-header-tabs div:hover {\n  cursor: pointer;\n  color: var(--zcat-color-primary) !important;\n}\nform lyte-modal-header .zcat-form-header-tabs div.active-tab {\n  color: var(--zcat-color-primary) !important;\n  font-family: var(--zcat-font-family-primary);\n  border-bottom: 2px solid var(--zcat-color-primary);\n  font-weight: 600;\n}\nform lyte-modal-footer.zcat-form-footer {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px 24px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-left-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 16px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-right-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 16px;\n}\n\n/* popup loader component */\n.modal-loader::before {\n  content: '';\n  position: absolute;\n  border: 3px solid var(--zcat-loader-content-primary);\n  border-radius: 50%;\n  border-top: 3px solid var(--zcat-loader-round-primary);\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n  z-index: 2;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n}\n.modal-loader::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--zcat-popup-bg-blur);\n  transition: none;\n  top: 0;\n  z-index: 1;\n}\n.modal-loader {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n.refreshing {\n  animation: rotate 1.5s linear infinite;\n}\n@keyframes rotate {\n  to {\n      transform: rotate(-360deg);\n  }\n}\n\n/* === Global base styles from reference css/zcat-modal.css === */\nlyte-wormhole * {\n  box-sizing: border-box;\n}\n.lyteModal {\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n  margin-top: -24px;\n  margin-left: -27px;\n}\nlyte-modal-header {\n  color: var(--zcat-body-text-primary);\n  font-family: var(--zcat-font-family-primary);\n  padding: 25px;\n  font-weight: 600;\n}\n/* lyte-modal-content {\n  padding: 8px 25px;\n} */\nlyte-modal-footer {\n  padding: 15px 25px 25px;\n}\nlyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\nlyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  opacity: unset !important;\n  transition: none;\n}\nlyte-modal-content {\n  padding: 8px 24px;\n  max-height: calc(100vh - 200px) !important;\n  overflow-y: auto;\n  color: var(--zcat-body-text-primary);\n}\nlyte-modal-content > * {\n  display: block;\n}\nform lyte-modal-footer {\n  padding: 0;\n}\nform lyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\n/* lyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  /* opacity: 0.3; \n  transition: none;\n} */\nform lyte-modal-header {\n  font-family: var(--zcat-font-family-primary);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\nform lyte-modal-header .zcat-form-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  width: 100%;\n  background: var(--zcat-popup-bg);\n  border-radius: 10px 10px 0 0;\n}\nform lyte-modal-header .zcat-form-header .zcat-left-alignment {\n  /* display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 10px; */\n}\nform lyte-modal-header .zcat-form-header .zcat-right-alignment {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 10px;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 28px;\n  background: var(--zcat-color-grey2);\n  border: 1px solid var(--zcat-color-grey1);\n  border-radius: 6px;\n  cursor: pointer;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn:hover {\n  background: var(--zcat-color-primarylight);\n  border-color: var(--zcat-color-grey1);\n}\nform lyte-modal-header .zcat-form-header-tabs {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  gap: 5px;\n  padding: 0 16px;\n  background: var(--zcat-color-white);\n  border-bottom: 1px solid var(--zcat-color-primarylight);\n}\nform lyte-modal-header .zcat-form-header-tabs div {\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-color-dark1);\n  padding: 0px 10px;\n  cursor: pointer;\n  display: inline-flex;\n}\nform lyte-modal-header .zcat-form-header-tabs div:hover {\n  cursor: pointer;\n  color: var(--zcat-color-primary) !important;\n}\nform lyte-modal-header .zcat-form-header-tabs div.active-tab {\n  color: var(--zcat-color-primary) !important;\n  font-family: var(--zcat-font-family-primary);\n  border-bottom: 2px solid var(--zcat-color-primary);\n  font-weight: 600;\n}\nform lyte-modal-footer.zcat-form-footer {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px 24px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-left-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 16px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-right-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 16px;\n}\n\n/* popup loader component */\n.modal-loader::before {\n  content: '';\n  position: absolute;\n  border: 3px solid var(--zcat-loader-content-primary);\n  border-radius: 50%;\n  border-top: 3px solid var(--zcat-loader-round-primary);\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n  z-index: 2;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n}\n.modal-loader::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--zcat-popup-bg-blur);\n  transition: none;\n  top: 0;\n  z-index: 1;\n}\n.modal-loader {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n.refreshing {\n  animation: rotate 1.5s linear infinite;\n}\n@keyframes rotate {\n  to {\n      transform: rotate(-360deg);\n  }\n}</style>";;
ZcatModal._dynamicNodes = [{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,1,1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":13,"sibl":[12]},{"t":"s","p":[1,1,1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":12,"sibl":[11]},{"t":"tX","p":[1,1,1,1,1,4,1]},{"t":"s","p":[1,1,1,1,1,6],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":11,"sibl":[10]},{"t":"s","p":[1,1,1,1,1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"s","p":[1,1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8]},{"t":"s","p":[1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"s","p":[1,1,1,5,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"cD","p":[1,1],"in":5,"sibl":[4]},{"t":"a","p":[1,3]},{"t":"a","p":[1,3,1]},{"t":"i","p":[1,3,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,3],"in":3,"sibl":[2]},{"t":"a","p":[1,5]},{"t":"s","p":[1,5,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,5,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,5],"in":0}],"dc":[13,12,11,10,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatModal._observedAttributes = ["self", "submit", "hasPagination", "zcatProp", "isPopUpOpen"];


ZcatModal.register("zcat-modal", {
  hash: "ZcatModal_4",
  refHash: "C_zcat-app_app_0"
}); 


/***/ }),

/***/ 29375081:
/*!**********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-modal.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteModalComponent": () => (/* binding */ LyteModalComponent)
/* harmony export */ });
/* harmony import */ var _lyte_wormhole_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lyte-wormhole.js */ 29612660);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@slyte/component/index.js */ 93132498);







/**
 * Renders a modal
 * @component lyte-modal
 * @version 1.0.0
 * @dependencies lyte-wormhole
 * @methods onBeforeShow,onShow,onBeforeClose,onClose,onResize
 * @utility alignModal,calculateOffset,trapFocus,reflectTransitionChange
 */

/**
 * @customElement lyte-modal-header
 */
/**
 * @customElement lyte-modal-content
 */
/**
 * @customElement  lyte-modal-footer
 */

class LyteModalComponent extends _component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
        this._lyteUtilFunctions = ['alignModal' , 'calculateOffset' , 'trapFocus'];
    }

    data(arg1) {
        return Object.assign(super.data({
            //config from callee

            /**
             * @componentProperty {boolean} ltPropShow
             * @version 1.0.0
             * @default false
             */
            "ltPropShow":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropFreeze
             * @version 1.0.0
             * @default true
             */
            "ltPropFreeze":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": true}),

            /**
             * @componentProperty {boolean} ltPropShowCloseButton
             * @version 1.0.0
             * @default true
             */
            "ltPropShowCloseButton":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": true}),

            /**
             * @componentProperty {boolean} ltPropCloseOnEscape
             * @version 1.0.0
             * @default true
             */
            "ltPropCloseOnEscape":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": true}),
            /**
             * @typedef {object} transition
             * @property {slideFromTop|slideFromBottom|slideFromLeft|slideFromRight|fadeIn|zoom} animation
             * @property {string} duration
             */
            /**
             * @componentProperty {transition} ltPropTransition
             * @version 1.0.0
             * @default { "animation" :"slideFromTop" , "duration":"0.5s"}
             */
            "ltPropTransition":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object",{"default":{"animation":"slideFromTop","duration":"0.5"}}),
            /**
             * @typedef {object} offset
             * @property {string} top
             * @property {string} left
             * @property {string} bottom
             * @property {string} right
             */
            /**
             * @componentProperty {offset} ltPropOffset
             * @version 1.0.0
             * @default { "top" :"center", "left" :"center"}
             */
            "ltPropOffset":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object",{"default":{"top":"center","left":"center"}}),
            /**
             * @typedef {object} dimmer
             * @property {colorstring} color
             * @property {string} opacity
             */
            /**
             * @componentProperty {dimmer} ltPropDimmer
             * @version 1.0.0
             */
            "ltPropDimmer":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("object"), //,{"default":{"color":"black","opacity":"0.4"}}

            /**
             * @componentProperty {boolean} ltPropDraggable
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropDraggable":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropAllowMultiple
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropAllowMultiple":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropScrollable
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropScrollable":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {string} ltPropMaxHeight
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropMaxHeight":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropMaxWidth
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropMaxWidth":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropWidth
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropWidth":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropHeight
             * @version 1.0.0
             * @default auto
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropHeight":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{"default":"auto"}),

            /**
             * @componentProperty {string} ltPropWrapperClass
             * @version 1.0.0
             */
            "ltPropWrapperClass":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("string",{"default":""}),

            /**
             * @componentProperty {boolean} ltPropBindToBody
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropBindToBody":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":false}),

            /**
             * @experimental ltPropShowCopy
             */
            "ltPropShowCopy":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropReRenderModal
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropReRenderModal":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":false}),

            /**
             * @componentProperty {boolean} ltPropOverlayClose
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropOverlayClose":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":false}),

            /**
             * @componentProperty {boolean} ltPropAria
             * @version 3.1.0
             * @default false
             *
             */
            "ltPropAria" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)( 'boolean', { default : false } ),

            /**
             * @componentProperty {object} ltPropAriaAttributes
             * @version 3.1.0
             */
            "ltPropAriaAttributes" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)( 'object', { default : {} } ),

            /**
             * @componentProperty {boolean} ltPropPreventFocus
             * @version 3.3.0
             * @default false
             *
             */
            "ltPropPreventFocus" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default : false } ),

            /**
             * @componentProperty {boolean} ltPropSetContentHeight
             * @version 3.9.0
             * @default false
             *
             */
            "ltPropSetContentHeight" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default : false } ),

            /**
             * @componentProperty {number} ltPropCloseDuration
             * @version 3.10.0
             * @default undefined
             */
            "ltPropCloseDuration" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("number",{"default" : undefined}),

            /**
             * @componentProperty {boolean} ltPropOverlapModal
             * @version 3.19.0
             * @default true
             *
             */
            "ltPropOverlapModal" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default : true } ),

            /**
             * @componentProperty {boolean} ltPropIgnoreInlineDirection
             * @version 3.19.0
             * @default true
             *
             */
            "ltPropIgnoreInlineDirection" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean', { default : false } ),

            /**
             * @componentProperty {boolean} ltPropAllowContainment
             * @version 3.68.0
             * @default false
             *
             */

             "ltPropAllowContainment" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {
                default : false
            }),
            "ltPropFocusOnClose" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {
                default : false
            }),
            "ltPropPadding" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string' , {
                default : ""
            }),
            "ltPropIgnoreZindex" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {
                default : false
            }),

            "ltPropDependentModalId": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string', {default: ''}),
            "ltPropParentModalId": (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string', {default: ''}),
            "ltPropShowWormhole" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {
                default : false
            }),

            "ltPropRenderHidden" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {
                default : false
            }),

            
            //local properties
            "first":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":true}),
            'resizeCalled' : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":false}),
            'initializedPosition' : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default":false}),
            "prevHeight" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("number"),
            "returnedFalse" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean",{"default" : false}),
            "prevModalHeight" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("number"),
            "prevModalWidth" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("number"),
            "calculateHW" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("boolean", {"default":false}),
            "checkAria" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)("number", {"default":0}),
            "beforeDragPosition" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object' , {default : {xPos:0,yPos:0}}),
            "resetTriggered" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('boolean' , {default : false})
            // "modalCreationOrder" : Lyte.attr('number' , {'default' : -1}),
        }), arg1);
    }

    addDragHandler() {
        var dragHeader = this.actualModalDiv.querySelector('lyte-modal-header');
        if(this.$node.ltProp("draggable")){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dragHeader).addClass('lyteModalDragRunning');
        }
        if(dragHeader){
            dragHeader.parentEle = this;
            if(this.$node.ltProp("draggable")){
                dragHeader.addEventListener('mousedown',this.handleMove,true);
                dragHeader.addEventListener('touchstart',this.handleMove,true);
                dragHeader.classList.add('lyteModalHeaderDraggable');
            }
            else{
                dragHeader.removeEventListener('mousedown',this.handleMove,true);
                dragHeader.removeEventListener('touchstart',this.handleMove,true);
                dragHeader.classList.remove('lyteModalHeaderDraggable');
            }
        }
        else{
            console.warn("This modal is not draggable because it has no header");
            this.$node.ltProp("draggable",false);
        }
    }

    handleMove(e) {
        if(e.button === 2){
            return
        }
        var comp = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(e.target).closest('lyte-wormhole')[0].component.parent.component
        var drag = e.currentTarget.parentEle.actualModalDiv, mouseOffset;
        window.LytePopup.node=drag;
        if(e.type == "mousedown"){
            mouseOffset = { x : e.clientX, y : e.clientY};
        }
        if(e.type == "touchstart"){
            mouseOffset = { x : e.touches[0].clientX, y : e.touches[0].clientY};
        }
        if(e.currentTarget.parentEle.getData('ltPropTransition').animation == "fadeIn"){
            LytePopup.xPos=mouseOffset.x-this.getBoundingClientRect().left;
            LytePopup.yPos=mouseOffset.y-this.getBoundingClientRect().top;
        }
        else{
            LytePopup.xPos=mouseOffset.x;
            LytePopup.yPos=mouseOffset.y;
        }
        var elePos = drag.getBoundingClientRect();
        drag.style.transitionDuration = "0s";
        if(comp.getMethods('onDragStart')){
            comp.executeMethod('onDragStart' , comp , comp.childComp , e)
        }

        if(e.type == "mousedown"){
            window._lyteUiUtils.addEventListenerGlobal('mousemove',e.currentTarget.parentEle.handleDrag,true);
            window._lyteUiUtils.addEventListenerGlobal('mouseup',e.currentTarget.parentEle.stopDrag,true);
        }
        if(e.type == "touchstart"){
            document.body.addEventListener('touchmove',e.currentTarget.parentEle.handleDrag,true);
            document.body.addEventListener('touchend',e.currentTarget.parentEle.stopDrag,true);
        }

    }

    handleDrag(e) {
        var drag = window.LytePopup.node;
        var curComp = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(drag).closest('lyte-wormhole')[0]._callee
        var dragBounding = drag.getBoundingClientRect()
        var compStyle = window.getComputedStyle(drag);
        if(!window.LytePopup.node){
            return;
        }
        var curleft = 0
        var curtop = 0
        var mouseOffset;
        if(e.type == "mousemove"){
            mouseOffset = { x : e.clientX, y : e.clientY};
        }
        if(e.type == "touchmove"){
            mouseOffset = { x : e.touches[0].clientX, y : e.touches[0].clientY};
        }
        if(window.LytePopup.node.closest('lyte-wormhole')._callee.component.getData('ltPropTransition').animation == "fadeIn"){
            curleft = (mouseOffset.x-window.LytePopup.xPos)
            curtop = (mouseOffset.y-window.LytePopup.yPos)
            if(!curComp.getData('ltPropAllowContainment')){
                drag.style.left = curleft+'px';
                drag.style.top = curtop+'px';
            } else {
                if(curleft + drag.getBoundingClientRect().width <= window.innerWidth && (curleft >= 0)){
                    drag.style.left = curleft + 'px';
                }else if(curleft < 0){
                    drag.style.left = "0px";
                } else {
                    drag.style.left = ( window.innerWidth - drag.getBoundingClientRect().width ) + 'px';
                }
        
                if(curtop + drag.getBoundingClientRect().height <= window.innerHeight && (curtop >= 0)){
                    drag.style.top = curtop + 'px';
                }else if(curtop < 0){
                    drag.style.top = "0px";
                } else {
                    drag.style.top = ( window.innerHeight - drag.getBoundingClientRect().height ) + 'px';
                }
            }

        }
        else{
          var matrix = window.LytePopup.node.closest('lyte-wormhole')._callee.component.transform
          if((window.LytePopup.node.closest('lyte-wormhole')._callee.component.getData('ltPropTransition').animation == "zoom") && !matrix){
            matrix = {}
            matrix.x = 0;
            matrix.y = 0
          } 
            var x = matrix.x+(mouseOffset.x-window.LytePopup.xPos),
                y = matrix.y+(mouseOffset.y-window.LytePopup.yPos);
                drag.style.transform = "translate("+x+"px, "+y+"px)";

                dragBounding = drag.getBoundingClientRect()

            if(curComp.getData('ltPropAllowContainment')){
                if(dragBounding.left + dragBounding.width > window.innerWidth && (dragBounding.left >= 0)){
                    x = (window.innerWidth - dragBounding.width) - parseFloat(compStyle.left)
                } else if(dragBounding.left<0){
                    x =  - parseFloat(compStyle.left)
                }
                if(dragBounding.top + dragBounding.height > window.innerHeight && (dragBounding.top >= 0)){
                    y = (window.innerHeight - dragBounding.height) - parseFloat(compStyle.top)
                } else if(dragBounding.top<0){
                    y = - parseFloat(compStyle.top)
                }
                drag.style.transform = "translate("+x+"px, "+y+"px)";
            }


        }
        window.getSelection().removeAllRanges();
    }

    stopDrag(e) {
        var targetElem = e.target;
        var comp = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(targetElem).closest('lyte-wormhole')[0].component.parent.component
        if(!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(targetElem).hasClass('lyteModalDragRunning')){
            targetElem = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()('.lyteModalDragRunning')[0]
        }
        while(targetElem && targetElem !== document){
            if(targetElem.parentEle){
                if(e.type == "mouseup"){
                    this.removeEventListener('mousemove',targetElem.parentEle.handleDrag,true);
                    this.removeEventListener('mouseup',targetElem.parentEle.stopDrag,true);
                }
                if(e.type == "touchend"){
                    this.removeEventListener('touchmove',targetElem.parentEle.handleDrag,true);
                    this.removeEventListener('touchend',targetElem.parentEle.stopDrag,true);
                }
                break;
            }
            targetElem = targetElem.parentElement ? targetElem.parentElement : document;
        }
        if(window.LytePopup.node){
            var comp = window.LytePopup.node.closest('lyte-wormhole')._callee.component;
            window.LytePopup.node.style.transitionDuration = comp.getData('ltPropTransition').duration;
            if(comp.getData('ltPropTransition').animation != "fadeIn"){
                var matrix = new window.WebKitCSSMatrix(window.getComputedStyle(comp.actualModalDiv).transform);
                comp.transform = {'x' : matrix.m41, 'y' : matrix.m42};
            }
            LytePopup.node = null;
        }

        if(comp.getMethods('onDragEnd')){
            comp.executeMethod('onDragEnd' , comp , comp.childComp , e)
        }

    }

    clearFastdomBatch() {
        if(this.fastdomfn1){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn1);
        }
        if(this.fastdomfn2){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn2);
        }
        if(this.fastdomfn3){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn3);
        }
        if(this.fastdomfn4){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn4);
        }
        if(this.fastdomfn5){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn5);
        }
        if(this.fastdomfn6){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn6);
        }
        if(this.fastdomfn7){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn7);
        }
        if(this.fastdomfn8){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.clear(this.fastdomfn8);
        }
        if(this.beforeShowId){
            clearTimeout(this.beforeShowId);
        }
    }

    /**
     * The method is going to set height and width of the modal
     *
     */
    updateScrollHandling() {    //It sets the height and width of the modal
        if(!this.$node.ltProp("freeze")){
            // this.$node.ltProp("scrollable",true);
            this.setData("calculateHW",true);
        }
        var modalElem = this.actualModalDiv;
        var oldHeight, oldWidth, newHeight, newWidth,
        w =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        contentNode = modalElem.querySelector("lyte-modal-content");
        // contentNode = contentNode ? contentNode : modalElem;
        modalElem.style.maxWidth = "";
        modalElem.style.maxHeight = "";
        modalElem.style.setProperty('--lyte-modal-max-width', '');
        modalElem.style.setProperty('--lyte-modal-max-height', '');
        modalElem.style.height = this.$node.ltProp("height")?this.$node.ltProp("height"):"auto";
        modalElem.style.width = this.$node.ltProp("width")?( (!(this.getData('ltPropOverlapModal')) && this.$node.ltProp("width").indexOf('%') != -1) ? ((parseFloat(this.$node.ltProp("width"))/100) * w) + "px" : this.$node.ltProp("width") ):"auto";
        // console.log(this.$node.ltProp("width"));
        /*------------------------------ MEASURE STARTS --------------------------*/
        this.fastdomfn2 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function() {    //Measures the initial height and width
            delete this.fastdomfn2;
            var modalElemOffset = modalElem.getBoundingClientRect();
            /*IF maxwidth or maxheigth given as a percentage then to calculate the actual width or height
                                we need the modalElements parent element's width and height*/
            var modalParentOff = modalElem.parentElement.getBoundingClientRect();
            var cs = getComputedStyle(modalElem);
            var borderDimensionY = ((cs.borderTopWidth ? parseFloat(cs.borderTopWidth) : 0) +
                                     (cs.borderBottomWidth ? parseFloat(cs.borderBottomWidth) : 0));
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - (this.getData('ltPropFreeze') ? parseInt(getComputedStyle(modalElem.parentElement).top) : 0);
            // console.log(modalElemOffset);
            /*------------------------------ MUTATE STARTS --------------------------*/
            this.fastdomfn3 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){    //Checks for the max height and width provided by the user and sets the modal height and width based on that
                delete this.fastdomfn3;
                if(this.$node.ltProp("maxWidth")){
                    // this.$node.ltProp("scrollable",true);
                    // this.setData("calculateHW",true);
                    // oldWidth = modalElemOffset.width /*- borderDimensionX*/;
                    newWidth = this.$node.ltProp("maxWidth").indexOf('%') != -1 ? ((parseFloat(this.$node.ltProp("maxWidth"))/100) * modalParentOff.width) : parseFloat(this.$node.ltProp("maxWidth"));
                    modalElem.style.maxWidth = newWidth + "px";
                    modalElem.style.setProperty('--lyte-modal-max-width', newWidth);
                    // if(oldWidth < newWidth){
                    //     modalElem.style.width = oldWidth+"px";
                    //     // newWidth = oldWidth;
                    // }
                    modalElem.style.overflowX = "auto";
                }
                else{
                    newWidth = modalElemOffset.width /*- borderDimensionX*/;
                }

                if(this.$node.ltProp("maxHeight")){
                    this.childComp.querySelector(".modalWrapper").classList.add("scrollable");
                    // this.$node.ltProp("scrollable",true);
                    this.setData("calculateHW",true);
                    oldHeight = modalElemOffset.height - borderDimensionY;
                    var newH = this.$node.ltProp("maxHeight").indexOf('%') != -1 ? ((parseFloat(this.$node.ltProp("maxHeight"))/100) * modalParentOff.height) : parseFloat(this.$node.ltProp("maxHeight"));
                    // modalElem.style.height = newH + "px";
                    modalElem.style.maxHeight = newH + "px";
                    modalElem.style.setProperty('--lyte-modal-max-height', newH);
                    newHeight = newH - borderDimensionY;
                }
                else{
                    /*  +1 is added here to the oldHeight as offsetHeights are rounded off values. ie. 5.5 => 6.
                        So, if 5.5 + 5.5 = 11. But offsetHeight will give 6 + 6 by rounding off 5.5 which is != 11.
                        So for safety we add extra 1 px to the total height.
                    */
                    oldHeight = modalElem.offsetHeight - borderDimensionY + 1;
                    //If height is provided in px or em then we dont compare if it is greater than window height as it is fixed
                    if(this.$node.ltProp('height') && this.$node.ltProp('height') != "auto"/* && ((this.$node.ltProp('height')).indexOf('px') != -1 || (this.$node.ltProp('height')).indexOf('em') != -1)*/){
                        newHeight = oldHeight;
                        this.setData("calculateHW",true);
                    }
                    else{
                        newHeight = oldHeight > h ? h-40 : oldHeight;
                    }
                    if(this.$node.ltProp("scrollable")){
                        if(!(this.$node.ltProp('height')) || this.$node.ltProp('height') == "auto"){
                            newHeight = h-40;
                        }
                        this.setData("calculateHW",true);
                    }
                    if(contentNode /*this.actualModalDiv.querySelector("lyte-modal-content")*/ && contentNode.offsetHeight /*this.actualModalDiv.querySelector("lyte-modal-content")*/ > oldHeight - ((this.actualModalDiv.querySelector("lyte-modal-header") ? this.actualModalDiv.querySelector("lyte-modal-header").offsetHeight : 0) + (this.actualModalDiv.querySelector("lyte-modal-footer") ? this.actualModalDiv.querySelector("lyte-modal-footer").offsetHeight : 0))){
                        // this.$node.ltProp("scrollable",true);
                        this.setData("calculateHW",true);
                    }
                }
                if(this.getData("calculateHW") && contentNode){
                    var modalheader = this.actualModalDiv.querySelector("lyte-modal-header"), modalFooter = this.actualModalDiv.querySelector("lyte-modal-footer");
                    var modalHOff = null,modalFOff = null;
                    /*------------------------------ MEASURE STARTS --------------------------*/
                    this.fastdomfn4 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function(){   //measures the content haeder, content and footer dimensions
                        delete this.fastdomfn4;
                        if(modalheader){
                            modalHOff = modalheader.offsetHeight;
                        }
                        if(modalFooter){
                            modalFOff = modalFooter.offsetHeight;
                        }
                        var diff = 0;
                        var modalHeight = modalElem.getBoundingClientRect().height;
                        // if(this.getData('resizeCalled')){
                        //     //to get the difference between previous height and current height
                        //     if(this.getData('prevHeight') < modalHeight){
                        //         diff = modalHeight - this.getData('prevHeight');
                        //     }
                        //     this.setData('resizeCalled',false);
                        // }
                        this.setData('prevHeight',modalHeight);
                        /*------------------------------ MUTATE STARTS --------------------------*/
                        this.fastdomfn5 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){   //Sets the final height and width of the modal
                            delete this.fastdomfn5;
                            var newH = (newHeight - ((modalHOff ? modalHOff : 0)+ (modalFOff ? modalFOff : 0)));
                            contentNode.style.maxHeight = (newH > 0 ? newH : 50) + diff +"px";
                            modalElem.style.setProperty('--lyte-modal-max-height', ((newH > 0 ? newH : 50) + diff));
                            contentNode.style.overflowY = "auto";
                            if(this.$node.ltProp('height') != "auto" && this.getData('ltPropSetContentHeight')){
                                contentNode.style.height = newH + "px";
                            }
                            // if(this.getData('first')){
                            //     contentNode.style.height = (oldHeight - ((modalHOff ? modalHOff.height : 0)+ (modalFOff ? modalFOff.height : 0))) +"px";
                            // }
                            // modalElem.style.width = this.$node.ltProp("width")?this.$node.ltProp("width"):"auto";
                            // this.actualModalDiv.style.maxWidth = newWidth > 0 ? (newWidth +"px"):("70%");
                            modalElem = null;
                            contentNode = null;
                            modalheader = null;
                            modalFooter = null;
                            if(!this.getData('initializedPosition')){
                                this.computeOffsetImpl();
                                this.setData('initializedPosition',true);
                            }
                            else if(this.getData('resizeCalled')){
                                this.computeOffsetImplOnResize();
                                this.setData('resizeCalled',false);
                            }
                        },this);
                        /*------------------------------ MUTATE ENDS --------------------------*/
                    },this);
                    /*------------------------------ MEASURE ENDS --------------------------*/
                }
                else{
                    this.childComp.querySelector(".modalWrapper").classList.remove("scrollable");
                    modalElem = null;
                    contentNode = null;
                    if(!this.getData('initializedPosition')){
                        this.computeOffsetImpl();
                        this.setData('initializedPosition',true);
                    }
                    else if(this.getData('resizeCalled')){
                        this.computeOffsetImplOnResize();
                        this.setData('resizeCalled',false);
                    }
                }

                if (!this.$node.ltProp("freeze")) {
                    this.childComp.querySelector(".modalWrapper").classList.add('noFreeze');
                    if(!this.renderSidewise){
                        this.actualModalDiv.style.position = "fixed";
                    }
                }
                // else{
                //     this.childComp.querySelector(".modalWrapper").style.position = "fixed";
                // }
            },this);
            /*------------------------------ MUTATE ENDS --------------------------*/
        },this);
        /*------------------------------ MEASURE ENDS --------------------------*/


    }

    callOnShow() {
        // if(this.getData('ltPropFreeze')){
        //     this.childComp.querySelector("lyte-modal-freeze").style.transitionDuration = this.getData('ltPropTransition').duration + "s";
        // }
        this.$node.classList.add('lyteModalOpened');
        var _this = this
        setTimeout(function(){
          var style = window.getComputedStyle(_this.actualModalDiv);
          var matrix = new window.WebKitCSSMatrix(style.transform);
          _this.setData('beforeDragPosition' , {
            xPos : matrix.m41,
            yPos : matrix.m42,
            scale : matrix.a
          })
          window._lyteUiUtils.dispatchEvent('lyteModalOpened' , _this.actualModalDiv)
        },(parseFloat(this.getData('ltPropTransition').duration)*1000+10))
        if(this.getMethods("onShow")){
            this.executeMethod("onShow",this);
        }
        if(this.addAriaValues){
            this.addAriaValues();
        }
    }

    callOnResize() {
        // this.updateScrollHandling();
        var dependentModalId = this.getData('ltPropDependentModalId');
        if(dependentModalId != '') {
            var dependentModalObj = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(dependentModalId)[0].component;
            dependentModalObj.updateScrollHandling();
        }
        // if(this.isResponsibleForSidewiseRender()){
        //     LytePopup.components[1].$node.component.updateScrollHandling();
        // }
        var style = window.getComputedStyle(this.actualModalDiv);
        var matrix = new window.WebKitCSSMatrix(style.transform);
        this.setData('beforeDragPosition' , {
          xPos : matrix.m41,
          yPos : matrix.m42,
          scale : matrix.a
        })
        if(this.getMethods("onResize")){
            this.executeMethod("onResize",this);
        }
    }

    enableTransform(val, pos, duration) {
        this.$node.ltProp('showCopy',true);
        var self = this;
        setTimeout(function(){
            if(pos == 'x'){
                self.actualModalDiv.style.transform = "translate("+val+"px,0px)";
                self.transform = {'x' : val, 'y' : 0};
            }
            if(pos == 'y'){
                self.actualModalDiv.style.transform = "translate(0px,"+val+"px)";
                self.transform = {'x' : 0, 'y' : val};
            }
        },(duration != undefined ? duration : undefined))

    }

    /**
     * The method is going to redo the left and top computation when the modal is opened and the window is resized
     *
     */
    computeOffsetImplOnResize() {
        /*------------------------------ MEASURE STARTS --------------------------*/
         _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function() {
            var modalEle = this.actualModalDiv,
                modalElePosition = modalEle.getBoundingClientRect(),
                parentStyle = getComputedStyle(modalEle.parentElement),
                parentTop = parseInt(parentStyle.top), //Takes the modalWrapper's top value and subtracts it from the modals top to nullify the parent's top
                parentLeft = parseInt(parentStyle.left),
                correctedTop = modalEle.offsetTop,
                w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - (this.getData('ltPropFreeze') ? parentLeft : 0),
                h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - (this.getData('ltPropFreeze') ? parentTop : 0),
                prevWinH = this.getData('prevWinH'),
                prevWinW = this.getData('prevWinW'),
                transform = this.transform /*new WebKitCSSMatrix(window.getComputedStyle(modalEle).transform)*/,
                newTop = null,
                newLeft = null,
                offsetObj = this.getData('ltPropOffset'),
                heightDiff = this.getData('prevModalHeight') - modalElePosition.height,
                widthDiff = this.getData('prevModalWidth') - modalElePosition.width,
                freezeLayer, wrapperDiv;
                this.calculateForSidewiseRender();
            if(this.renderSidewise){
                this.renderProps.windowWidth = w;
                w = this.getData('ltPropTransition').animation == 'slideFromRight' ? this.renderProps.left : (this.renderProps.windowWidth - this.renderProps.right);
                freezeLayer = this.childComp.querySelector('lyte-modal-freeze');
                wrapperDiv = this.actualModalDiv.parentElement;
            }
            if(this.getData('ltPropTransition').animation === "fadeIn" || this.getData('ltPropTransition').animation === "zoom"){
              
                if(w < prevWinW){
                    if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                        prevWinW = modalElePosition.width
                        newLeft = ((prevWinW - w) / 2);
                    }
                    else if(offsetObj.right){
                        newLeft = modalElePosition.left - (prevWinW - w);
                    }
                    else if(offsetObj.left){
                        newLeft = modalElePosition.left;
                    }
                }
                if(w > prevWinW){
                    if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                        prevWinW = modalElePosition.width
                        newLeft = ((w - prevWinW) / 2);
                    }
                    else if(offsetObj.right){
                        newLeft = modalElePosition.left + (w - prevWinW);
                    }
                    else if(offsetObj.left){
                        newLeft = modalElePosition.left;
                    }
                }
                if(h < prevWinH){
                    if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                        newTop = (h - modalElePosition.height)/2 /*correctedTop - ((prevWinH - h) / 2)*/;
                    }
                    else if(offsetObj.bottom){
                        newTop = correctedTop - (prevWinH - h);
                    }
                    else if(offsetObj.top){
                        newTop = correctedTop;
                    }
                }
                if(h > prevWinH){
                    if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                        newTop = (h - modalElePosition.height)/2 /*correctedTop + ((h - prevWinH) / 2)*/;
                    }
                    else if(offsetObj.bottom && offsetObj.bottom != "center"){
                        newTop = correctedTop + (h - prevWinH);
                    }
                    else if(offsetObj.top && offsetObj.top != "center"){
                        newTop = correctedTop;
                    }
                }
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function() {
                    if(newTop){
                        modalEle.style.top = newTop + "px";
                    }
                    if(newLeft){
                        modalEle.style.left = newLeft + "px";
                    }
                    this.callOnResize();
                },this);
            }
            else{
                if(w < prevWinW){
                    if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                        newLeft = transform.x - ((prevWinW - w) / 2) + (widthDiff / 2);
                    }
                    else if(offsetObj.right){
                        newLeft = transform.x - (prevWinW - w) + widthDiff;
                    }
                    else if(offsetObj.left){
                        newLeft = transform.x;
                    }
                    this.transform.x = newLeft;
                }
                if(w > prevWinW){
                    if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                        newLeft = transform.x + ((w - prevWinW) / 2) + (widthDiff / 2);
                    }
                    else if(offsetObj.right){
                        newLeft = transform.x + (w - prevWinW) + widthDiff;
                    }
                    else if(offsetObj.left){
                        newLeft = transform.x;
                    }
                    this.transform.x = newLeft;
                }
                if(h < prevWinH){
                    if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                        newTop = transform.y - ((prevWinH - h) / 2) + (heightDiff / 2);
                    }
                    else if(offsetObj.bottom){
                        newTop = transform.y - (modalElePosition.bottom - h + parseInt(offsetObj.bottom)) /*(prevWinH - h)*/;
                    }
                    else if(offsetObj.top){
                        newTop = transform.y;
                    }
                    this.transform.y = newTop;
                }
                if(h > prevWinH){
                    if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                        newTop = transform.y + ((h - prevWinH) / 2) + (heightDiff / 2);
                    }
                    else if(offsetObj.bottom && offsetObj.bottom != "center"){
                        newTop = transform.y + (h - modalElePosition.bottom - parseInt(offsetObj.bottom))/*(h - prevWinH)*/;
                    }
                    else if(offsetObj.top && offsetObj.top != "center"){
                        newTop = transform.y;
                    }
                    // console.log("prev top", this.transform.y);
                    // console.log("new top", newTop);
                    this.transform.y = newTop;
                }
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function() {
                    modalEle.style.transitionDuration = "0s";
                    if(this.getData('ltPropTransition').animation === "slideFromTop" || this.getData('ltPropTransition').animation === "slideFromBottom"){
                        if(w < prevWinW){
                            if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                                modalEle.style.left = modalElePosition.left - ((prevWinW - w) / 2) + (widthDiff/2) + "px";
                            }
                            else if(offsetObj.right){
                                modalEle.style.left = modalElePosition.left - (prevWinW - w) + widthDiff + "px";
                            }
                            else if(offsetObj.left){
                                modalEle.style.left = modalElePosition.left + "px";
                            }
                            // modalEle.style.left = modalElePosition.left - ((prevWinW - w)/2) + "px";
                        }
                        if(w > prevWinW){
                            if((offsetObj.left && offsetObj.left == "center") || (offsetObj.right && offsetObj.right == "center")){
                              modalEle.style.left = modalElePosition.left + ((w - prevWinW) / 2) + (widthDiff/2) + "px";
                            }
                            else if(offsetObj.right){
                                modalEle.style.left = modalElePosition.left + (w - prevWinW) + widthDiff + "px";
                            }
                            else if(offsetObj.left){
                                modalEle.style.left = modalElePosition.left + "px";
                            }
                            // modalEle.style.left = modalElePosition.left + ((w - prevWinW)/2) + "px";
                        }
                        modalEle.style.transform = "translate(0px,"+this.transform.y+"px)";
                    }
                    else if(this.getData('ltPropTransition').animation === "slideFromLeft" || this.getData('ltPropTransition').animation === "slideFromRight"){
                        if(h < prevWinH){
                            if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                                modalEle.style.top = correctedTop - ((prevWinH - h) / 2) + (heightDiff/2) + "px";
                            }
                            else if(offsetObj.bottom){
                                modalEle.style.top = correctedTop - (prevWinH - h) + "px";
                            }
                            else if(offsetObj.top){
                                modalEle.style.top = correctedTop + "px";
                            }
                            // modalEle.style.top = modalElePosition.top - ((prevWinH - h)/2) + "px";
                        }
                        if(h > prevWinH){
                            if((offsetObj.top && offsetObj.top == "center") || (offsetObj.bottom && offsetObj.bottom == "center")){
                                modalEle.style.top = correctedTop + ((h - prevWinH) / 2) + (heightDiff/2) + "px";
                            }
                            else if(offsetObj.bottom && offsetObj.bottom != "center"){
                                modalEle.style.top = correctedTop + (h - prevWinH) + "px";
                            }
                            else if(offsetObj.top && offsetObj.top != "center"){
                                modalEle.style.top = correctedTop + "px";
                            }
                            // modalEle.style.top = modalElePosition.top + ((h - prevWinH)/2) + "px";
                        }
                        modalEle.style.transform = "translate("+this.transform.x+"px,0px)";
                        if(this.renderSidewise){
                            if(this.getData('ltPropTransition').animation == 'slideFromRight'){
                                var rightValue = this.renderProps.windowWidth - this.renderProps.left;
                                if(freezeLayer){
                                    freezeLayer.style.right = rightValue + "px";
                                }
                                if(wrapperDiv){
                                    wrapperDiv.style.right = rightValue - 5 + "px";
                                }
                            }
                            if(this.getData('ltPropTransition').animation == 'slideFromLeft'){
                                if(freezeLayer){
                                    freezeLayer.style.left = this.renderProps.right + "px";
                                }
                                if(wrapperDiv){
                                    wrapperDiv.style.left = (this.renderProps.right + 1) + "px";
                                }
                            }
                        }
                    }
                    this.callOnResize();
                    // modalEle.style.transitionDuration = this.$node.ltProp("transition").duration+"s";
                },this);
            }
            this.setData('prevModalHeight',modalElePosition.height);
            this.setData('prevModalWidth',modalElePosition.width);
            this.setData('prevWinH',h);
            this.setData('prevWinW',w);
        },this);
        /*------------------------------ MEASURE ENDS --------------------------*/
        // modalEle = null;
    }

    isResponsibleForSidewiseRender() {
        var components = window.LytePopup.components;
        if(components.length > 1 && components[components.length - 2] === this && components[components.length - 1].renderSidewise){
            return true;
        }
        return false;
    }

    /**
     * The method is going to calculate the left and top value of the modal and perform the animation
     *
     */
    computeOffsetImpl(arg, triggeredFromTransChange) {
        var lyteSelf = this;
        //sets the left and top of the modal based on user provided values
        var _this = this.nodeName && this.nodeName === "LYTE-MODAL" ? this.component : this;
        /*------------------------------ MEASURE STARTS --------------------------*/
        _this.fastdomfn6 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function() {
           delete _this.fastdomfn6;
           if(!_this.actualModalDiv){
               return;
           }
           _this.calculateForSidewiseRender();
           var modalEle = _this.actualModalDiv;
           var freezeLayer, wrapperDiv;
           var offsetObj = lyteSelf.$addon.deepCopyObject(_this.$node.ltProp('offset'));
           var modalRect = modalEle.getBoundingClientRect();
           var modalElePosition = {top: modalRect.top,
                                   right: modalRect.right,
                                   bottom: modalRect.bottom,
                                   left: modalRect.left,
                                   width: modalRect.width,
                                   height: modalRect.height
                               };
           var parentLeft = 0, parentTop = 0;
           if(_this.getData('ltPropFreeze')){
               var parentStyle = window.getComputedStyle(modalEle.parentElement);
               parentLeft = parseInt(parentStyle.left);
               parentTop = parseInt(parentStyle.top);
           }
           var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - parentLeft;
           if(_this.renderSidewise){
               _this.renderProps.windowWidth = w;
               w = _this.getData('ltPropTransition').animation == 'slideFromRight' ? _this.renderProps.left : (_this.renderProps.windowWidth - _this.renderProps.right);
               freezeLayer = _this.childComp.querySelector('lyte-modal-freeze');
               wrapperDiv = _this.actualModalDiv.parentElement;
           }
           var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - parentTop;
            // $L.fastdom.mutate(() => {
               modalEle.style.transitionDuration = (arg != undefined ? arg : _this.$node.ltProp("transition").duration)+"s";
           // },this);
           _this.setData('prevWinH',h);
           _this.setData('prevWinW',w);
           _this.setData('prevModalHeight',modalElePosition.height);
           _this.setData('prevModalWidth',modalElePosition.width);
           if(offsetObj){
               if(offsetObj.left === "center" || offsetObj.right === "center"){
                   var offLeft = (w - modalElePosition.width)/2;
                   if(offLeft < 0){
                       offLeft = 20;
                   }
                   offsetObj.left = offLeft;
               }
               if(offsetObj.top === "center" || offsetObj.bottom === "center"){
                   var offTop = (h - modalElePosition.height)/2;
                   if(offTop < 0){
                       offTop = 20;
                   }
                   offsetObj.top = offTop;
               }
               if(offsetObj.right && offsetObj.right !== "center"){
                   if(offsetObj.right.indexOf("%") > -1){
                       offsetObj.left = w-(modalElePosition.width+(w/parseFloat(offsetObj.right)));
                   }
                   else{
                       offsetObj.left = w-(modalElePosition.width+parseFloat(offsetObj.right));
                   }
               }
               if(offsetObj.bottom && offsetObj.bottom !== "center"){
                   if(offsetObj.bottom.indexOf("%") > -1){
                       offsetObj.top = h-(modalElePosition.height+(h/parseFloat(offsetObj.bottom)));
                   }
                   else{
                       offsetObj.top = h-(modalElePosition.height+parseFloat(offsetObj.bottom));
                   }
               }
               if(offsetObj.left === "" || offsetObj.left == undefined){
                   _this.data.ltPropOffset.left = "center";
                   offsetObj.left = ((w - modalElePosition.width)/2);
               }
               if(offsetObj.top === "" || offsetObj.top == undefined){
                   _this.data.ltPropOffset.top = "center";
                   offsetObj.top = ((h - modalElePosition.height)/2);
               }
               if(_this.getData('ltPropTransition').originElement){
                   var ele = document.querySelector(_this.getData('ltPropTransition').originElement);
                   if(!ele){
                       console.error("The originElement provided does not exist. Kindly Check!");
                   }
                   else{
                       var eleOffset = ele.getBoundingClientRect();
                       offsetObj.originElementPos = {xDiff : (eleOffset.left + (eleOffset.width/2)) - (parseFloat(offsetObj.left) + (modalElePosition.width/2)),
                                                     yDiff : (eleOffset.top + (eleOffset.height/2)) - (parseFloat(offsetObj.top) + (modalElePosition.height/2)) };
                   }
               }
               /*------------------------------ MUTATE STARTS --------------------------*/
                _this.fastdomfn7 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function() {
                   delete _this.fastdomfn7;
                   if(_this.getData('first')){
                       window.LytePopup.bindTransitionEnd(_this.actualModalDiv);
                   }
                   if(_this.getData('ltPropTransition').animation == "slideFromTop"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = (-1 * modalElePosition.height) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate(0px,"+(parseInt(offsetObj.top)+modalElePosition.height)+"px)";
                           _this.transform = {'x' : 0, 'y' : (parseInt(offsetObj.top)+modalElePosition.height)};
                           return;
                       }
                       _this.enableTransform(parseInt(offsetObj.top)+modalElePosition.height,"y",arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromBottom"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = h+1 + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate(0px,"+(-1 * (h - parseInt(offsetObj.top) + 1))+"px)";
                           _this.transform = {'x': 0, 'y': (-1 * (h - parseInt(offsetObj.top) + 1))};
                           return;
                       }
                       _this.enableTransform(-1 * (h - parseInt(offsetObj.top) + 1),"y",arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromLeft"){
                       if(_this.renderSidewise){
                           if(freezeLayer){
                               freezeLayer.style.left = _this.renderProps.right + "px";
                           }
                           if(wrapperDiv){
                               wrapperDiv.style.left = _this.renderProps.right + "px";
                           }
                       }
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.left = (-1 * modalElePosition.width) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate("+(parseInt(offsetObj.left)+modalElePosition.width)+"px,0px)";
                           _this.transform = {'x' : (parseInt(offsetObj.left)+modalElePosition.width), 'y' : 0};
                           return;
                       }
                       _this.enableTransform(parseInt(offsetObj.left)+modalElePosition.width,'x',arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromRight"){
                       if(_this.renderSidewise){
                           var rightValue = _this.renderProps.windowWidth - _this.renderProps.left;
                           if(freezeLayer){
                               freezeLayer.style.right = rightValue + "px";
                           }
                           if(wrapperDiv){
                               wrapperDiv.style.right = rightValue - 5 + "px";
                           }
                       }
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.left = w + 1 + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate("+(-1 * (w - parseInt(offsetObj.left) + 1))+"px,0px)";
                           _this.transform = {'x' : (-1 * (w - parseInt(offsetObj.left) + 1)), 'y' : 0};
                           return;
                       }
                       _this.enableTransform(-1 * (w - parseInt(offsetObj.left) + 1),'x',arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "fadeIn"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "";
                           return;
                       }
                       _this.$node.ltProp('showCopy',true);
                       // setTimeout(function(){
                           modalEle.style.opacity = 1;
                       // },200);
                   }
                   else if(_this.getData('ltPropTransition').animation == "zoom"){
                       _this.$node.ltProp('showCopy',true);
                       var transform = "scale(0)";
                       if(offsetObj.originElementPos){
                           transform = "translateX( "+ offsetObj.originElementPos.xDiff + "px) translateY( "+ offsetObj.originElementPos.yDiff + "px) scale(0)";
                       }
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.transition = "none";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = offsetObj.originElementPos ? 'translateX(0) translateY(0) scale(1)' : 'scale(1)';
                           setTimeout(function(){
                               modalEle.style.transition = "";
                           },16)
                           return;
                       }
                       modalEle.style.transform = transform;
                       modalEle.style.opacity = 1;
                       setTimeout(function(){
                           modalEle.style.transition = "";
                           modalEle.style.transitionDuration = (arg != undefined ? arg : _this.$node.ltProp("transition").duration)+"s";
                           if(offsetObj.originElementPos){
                               modalEle.style.transform = 'translateX(0) translateY(0) scale(1)';
                           }
                           else{
                               modalEle.style.transform = 'scale(1)';
                           }
                       },50);
                   }

                   if(_this.$node.ltProp("freeze")){
                       document.body.classList.add('bodyWrapper');
                       // LytePopup.bodywrapperCount += 1;
                   }
                   if(_this.getData('first')){
                       // LytePopup.bindTransitionEnd(_this.actualModalDiv);
                       _this.callOnShow();
                       _this.setData("first",false);
                   }
               },_this);
               /*------------------------------ MUTATE ENDS --------------------------*/
           }
           else{
               _this.setData('ltPropOffset',{left:"center", top:"center"});
               // _this.data.ltPropOffset.left = "center";
               // _this.data.ltPropOffset.top = "center";
               offsetObj.left = ((w - modalElePosition.width)/2);
               offsetObj.top = ((h - modalElePosition.height)/2);
               if(!_this.$node.ltProp("scrollable")){
                   if(offsetObj.left < 0){
                       offsetObj.left = 20;
                   }
                   if(offsetObj.top < 0){
                       offsetObj.top = 20;
                   }
               }
               if(_this.getData('ltPropTransition').originElement){
                   var ele = document.querySelector(_this.getData('ltPropTransition').originElement);
                   if(!ele){
                       console.error("The originElement provided does not exist. Kindly Check!");
                   }
                   else{
                       var eleOffset = ele.getBoundingClientRect();
                       offsetObj.originElementPos = {xDiff : (eleOffset.left + (eleOffset.width/2)) - (offsetObj.left + (modalElePosition.width/2)),
                                                     yDiff : (eleOffset.top + (eleOffset.height/2)) - (offsetObj.top + (modalElePosition.height/2)) };
                   }
               }
               /*------------------------------ MUTATE STARTS --------------------------*/
               _this.fastdomfn8 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function() {
                   delete _this.fastdomfn8;
                   if(_this.getData('first')){
                       window.LytePopup.bindTransitionEnd(_this.actualModalDiv);
                   }
                   if(_this.getData('ltPropTransition').animation == "slideFromTop"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = (-1 * modalElePosition.height) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate(0px,"+(parseInt(offsetObj.top)+modalElePosition.height)+"px)";
                           _this.transform = {'x' : 0, 'y' : (parseInt(offsetObj.top)+modalElePosition.height)};
                           return;
                       }
                       _this.enableTransform(parseInt(offsetObj.top)+modalElePosition.height,"y",arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromBottom"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = h+1 + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate(0px,"+(-1 * (h - parseInt(offsetObj.top) + 1))+"px)";
                           _this.transform = {'x': 0, 'y': (-1 * (h - parseInt(offsetObj.top) + 1))};
                           return;
                       }
                       _this.enableTransform(-1 * (h - parseInt(offsetObj.top) + 1),"y",arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromLeft"){
                       if(_this.renderSidewise){
                           if(freezeLayer){
                               freezeLayer.style.left = _this.renderProps.right + "px";
                           }
                           if(wrapperDiv){
                               wrapperDiv.style.left = _this.renderProps.right + "px";
                           }
                       }
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.left = (-1 * modalElePosition.width) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate("+(parseInt(offsetObj.left)+modalElePosition.width)+"px,0px)";
                           _this.transform = {'x' : (parseInt(offsetObj.left)+modalElePosition.width), 'y' : 0};
                           return;
                       }
                       _this.enableTransform(parseInt(offsetObj.left)+modalElePosition.width,'x',arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "slideFromRight"){
                       if(_this.renderSidewise){
                           var rightValue = _this.renderProps.windowWidth - _this.renderProps.left;
                           if(freezeLayer){
                               freezeLayer.style.right = rightValue + "px";
                           }
                           if(wrapperDiv){
                               wrapperDiv.style.right = rightValue - 5 + "px";
                           }
                       }
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.left = w + 1 + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "translate("+(-1 * (w - parseInt(offsetObj.left) + 1))+"px,0px)";
                           _this.transform = {'x' : (-1 * (w - parseInt(offsetObj.left) + 1)), 'y' : 0};
                           return;
                       }
                       _this.enableTransform(-1 * (w - parseInt(offsetObj.left) + 1),'x',arg);
                   }
                   else if(_this.getData('ltPropTransition').animation == "fadeIn"){
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = "";
                           return;
                       }
                       _this.$node.ltProp('showCopy',true);
                       // setTimeout(function(){
                           modalEle.style.opacity = 1;
                       // },200);
                   }
                   else if(_this.getData('ltPropTransition').animation == "zoom"){
                       _this.$node.ltProp('showCopy',true);
                       var transform = "scale(0)";
                       if(offsetObj.originElementPos){
                           transform = "translateX( "+ offsetObj.originElementPos.xDiff + "px) translateY( "+ offsetObj.originElementPos.yDiff + "px) scale(0)";
                       }
                       modalEle.style.left = parseFloat(offsetObj.left) + "px";
                       modalEle.style.top = parseFloat(offsetObj.top) + "px";
                       modalEle.style.transition = "none";
                       if(triggeredFromTransChange){
                           modalEle.style.transform = offsetObj.originElementPos ? 'translateX(0) translateY(0) scale(1)' : 'scale(1)';
                           setTimeout(function(){
                               modalEle.style.transition = "";
                           },16)
                           return;
                       }
                       modalEle.style.transform = transform;
                       modalEle.style.opacity = 1;
                       setTimeout(function(){
                           modalEle.style.transition = "";
                           modalEle.style.transitionDuration = (arg != undefined ? arg : _this.$node.ltProp("transition").duration)+"s";
                           if(offsetObj.originElementPos){
                               modalEle.style.transform = 'translateX(0) translateY(0) scale(1)';
                           }
                           else{
                               modalEle.style.transform = 'scale(1)';
                           }
                       },50);
                   }
                   if(_this.$node.ltProp("freeze")){
                       document.body.classList.add('bodyWrapper');
                       // LytePopup.bodywrapperCount += 1;
                   }
                   if(_this.getData('first')){
                       _this.callOnShow();
                       _this.setData("first",false);
                   }
               },_this);
               /*------------------------------ MUTATE ENDS --------------------------*/
           }
       },_this);
        /*------------------------------ MEASURE ENDS --------------------------*/
        // modalEle = null;
    }

    /**
     * The method is going to check if sidewise render will be done and assigns the values that will be used for sidewise rendering of the modal
     *
     */
    calculateForSidewiseRender() {
        if(window.LytePopup.components.length > 1){
            var prevModal;
            // if(this.getData('modalCreationOrder') > 0) {
            // // if(LytePopup.components[LytePopup.components.length - 2].$node.tagName === "LYTE-MODAL"){
                // prevModal = LytePopup.components[this.getData('modalCreationOrder')-1];
            // }
            var parentModalId = this.getData('ltPropParentModalId');
            if( parentModalId != '') {
                prevModal = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(parentModalId)[0].component;
            }
            else if(parentModalId == '' && this.getData('ltPropDependentModalId') == '') {
                var curModalIndexInArray = window.LytePopup.components.indexOf(this);
				if((curModalIndexInArray > 0) && (window.LytePopup.components[curModalIndexInArray - 1].$node.tagName === "LYTE-MODAL")){
					prevModal = window.LytePopup.components[curModalIndexInArray - 1];
				}
            }
            if(!this.getData('ltPropOverlapModal') && prevModal && prevModal.getData('ltPropAllowMultiple') && ["slideFromLeft","slideFromRight"].indexOf(this.getData('ltPropTransition').animation) != -1){
                this.renderSidewise = true;
                var prevModalOffset = prevModal.actualModalDiv.getBoundingClientRect();
                this.renderProps = {
                    prevModal : prevModal,
                    left : Math.round(prevModalOffset.left),
                    right : Math.round(prevModalOffset.right),
                    width : Math.round(prevModalOffset.width)
                };
            }
        }
    }

    closeModal() {
        var freezeLayer = this.childComp.querySelector('lyte-modal-freeze');
		var animationType = this.getData('ltPropTransition').animation;
        if(!this.$node.ltProp('freeze')){
            this.childComp.querySelector(".modalWrapper").classList.remove('noFreeze');
        }
        this.$node.ltProp({"showCopy":false,"show":false});
        // LytePopup.closePopup(this);

        if(!this.$node.ltProp('freeze')){
			this.actualModalDiv.style.position = "";
        }

        if(animationType != 'zoom' && this.actualModalDiv){
            this.actualModalDiv.style.transform = "";
        }

		var transitionDuration = this.getData('ltPropTransition').duration;
		var closeDuration = this.getData('ltPropCloseDuration');
		if(closeDuration) {
			transitionDuration = (closeDuration / 1000);
		}
		var _this = this;
		setTimeout(function() {
			var modalElem = _this.$node;
            if(_this.renderSidewise){
                if(_this.getData('ltPropTransition').animation == "slideFromRight"){
                    if(freezeLayer){
                        freezeLayer.style.right = "";
                    }
                    _this.actualModalDiv.parentElement.style.right = "";
                }
                if(_this.getData('ltPropTransition').animation == "slideFromLeft"){
                    if(freezeLayer){
                        freezeLayer.style.left = "";
                    }
                    _this.actualModalDiv.parentElement.style.left = "";
                }
                delete _this.renderSidewise;
                delete _this.renderProps;
            }
    
            if(modalElem){
                modalElem.ltProp({"showCopy":false, "show": false});
                modalElem.classList.remove('lyteModalOpened');
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(_this.childComp).addClass('lyteModalHidden');
                if( _this.getData('ltPropTransition').animation == "zoom"){
                    _this.actualModalDiv.style.opacity = "0";
                    _this.actualModalDiv.style.transform = "";
                }
            }
            if(_this.getMethods("onClose")){
                _this.executeMethod("onClose",_this);
            }
            if(window._lyteUiUtils.getRTL()){
                if(!_this.getData('ltPropIgnoreInlineDirection')){
                  if(_this.getData('ltPropTransition').animation == "slideFromLeft"){
                    //   _this.getData('ltPropTransition').animation = "slideFromRight";
                      (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(_this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromRight')
                  }
                  else if(_this.getData('ltPropTransition').animation == "slideFromRight"){
                    //   _this.getData('ltPropTransition').animation = "slideFromLeft";
                      (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(_this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromLeft')
                  }
                var offset = _this.getData('ltPropOffset'),
                    newOffset = {};
                for(var key in offset){
                    if(key == "left" && offset[key] != "center"){
                        newOffset.right = offset[key];
                    }
                    else if(key == "right"){
                        newOffset.left = offset[key];
                    }
                    else{
                        newOffset[key] = offset[key];
                    }
                }
                _this.setData('ltPropOffset',newOffset);
              }
            }
		}, (transitionDuration * 1000));

        window._lyteUiUtils.dispatchEvent('lyteModalClosed' , this.actualModalDiv)
        if(window._lyteUiUtils.popupStack && window._lyteUiUtils.popupStack.modalStack.length < 1 ){
            document.body.classList.remove('bodyWrapper');
            document.body.classList.remove('lyteBodyWrapper');
        }
        this.setData('ltPropShowWormhole' , false);
        // if(this.getMethods("onClose")){
        //     this.executeMethod("onClose",this);
        // }
        window.LytePopup.checkAndRemoveWrapper();
    }

    onBeforeCloseHandling(event) {
        var result = true;
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if(this.actualModalDiv){
            window._lyteUiUtils.dispatchEvent('lyteModalBeforeClose' , this.actualModalDiv)
        }
        if(this.getMethods("onBeforeClose")){
            result = this.executeMethod("onBeforeClose",event,this);
        }
        if(result === undefined || result){
            if(this.actualModalDiv && this.childComp){
                if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                    window.LytePopup.hideOrShowFreeze("close",this);
                    delete this.addedFreezeDetails;
                }
                var animDur = parseFloat(this.$node.ltProp('transition').duration) * 1000;
                var self = this;
                // console.log("duration",animDur);
                // var t1 = performance.now();
                this.timeOutId = setTimeout(function(){
                    delete self.timeOutId;
                    // var t2 = performance.now();
                    // console.log(t2 -t1);
                },animDur);
                self.closeModal();
                var modalEle = this.actualModalDiv;
                if(this.getData('ltPropCloseDuration')){
                    modalEle.style.transitionDuration = (this.getData('ltPropCloseDuration') / 1000)+"s";
                }
                else{
                    modalEle.style.transitionDuration = (animDur / 1000)+"s";
                }
                // console.log("transitionDuration", modalEle.style.transitionDuration);
                var modalElemOffset;
                var transform = "scale(0)", transformVal;
                /*------------------------------ MEASURE STARTS --------------------------*/
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function(){
                    modalElemOffset = modalEle.getBoundingClientRect();
                    if(this.getData('ltPropTransition').animation == "zoom" && this.getData('ltPropTransition').originElement){
                        var ele = document.querySelector(this.getData('ltPropTransition').originElement);
                        if(!ele){
                            Console.error("The originElement provided does not exist. Kindly Check!");
                        }
                        else{
                            var eleOffset = ele.getBoundingClientRect();
                            var modalElePosition = {top: modalElemOffset.top,
                                                    right: modalElemOffset.right,
                                                    bottom: modalElemOffset.bottom,
                                                    left: modalElemOffset.left,
                                                    width: modalEle.offsetWidth,
                                                    height: modalEle.offsetHeight
                                                };
                            var originElementPos = {xDiff : (eleOffset.left + (eleOffset.width/2)) - (modalElePosition.left + (modalElePosition.width/2)),
                                                          yDiff : (eleOffset.top + (eleOffset.height/2)) - (modalElePosition.top + (modalElePosition.height/2)) };
                            transform = "translateX( "+ originElementPos.xDiff + "px) translateY( "+ originElementPos.yDiff + "px) scale(0)"
                        }
                    }
                },this);
                /*------------------------------ MEASURE ENDS --------------------------*/
                /*------------------------------ MUTATE STARTS --------------------------*/
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
                    if(this.getData('ltPropTransition').animation == "slideFromTop"){
                        // modalEle.style.transform = "translateY(-100%)";
                        transformVal = -(Math.ceil(modalElemOffset.height) + parseInt(modalEle.style.top) + 10) + "px";
                        modalEle.style.transform = "translateY("+transformVal+")";
                    }
                    else if(this.getData('ltPropTransition').animation == "slideFromBottom"){
                        // modalEle.style.transform = "translateY(100%)";
                        transformVal = (h - parseInt(modalEle.style.top) + 10) + "px";
                        modalEle.style.transform = "translateY("+transformVal+")";
                    }
                    else if(this.getData('ltPropTransition').animation == "slideFromLeft"){
                        // modalEle.style.transform = "translateX(-100%)";
                        transformVal = -(Math.ceil(modalElemOffset.width) + parseInt(modalEle.style.left) + 10) + "px";
                        modalEle.style.transform = "translateX("+transformVal+")";
                    }
                    else if(this.getData('ltPropTransition').animation == "slideFromRight"){
                        // modalEle.style.transform = "translateX(100%)";
                        transformVal = (((this.renderProps && this.renderProps.left) || w ) - parseInt(modalEle.style.left) + 10) + "px";
                        modalEle.style.transform = "translateX("+transformVal+")";
                    }
                    else if(this.getData('ltPropTransition').animation == "fadeIn"){
                        modalEle.style.opacity = 0;
                    }
                    else if(this.getData('ltPropTransition').animation == "zoom"){
                        modalEle.style.transform = transform;
                    }
                    delete this.transform;
                    if(!(this.$node.classList.contains('lyteModalOpened'))){
                        modalEle.style.transform = "";
                    }
                },this);
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
                    modalEle = null;
                });
                /*------------------------------ MUTATE ENDS --------------------------*/

                modalEle.classList.remove('lyteModalFromTop','lyteModalFromBottom','lyteModalFromLeft','lyteModalFromRight','lyteModalFadeIn','lyteZoom');
                if(this.$node.ltProp('freeze') && this.childComp.querySelector("lyte-modal-freeze")){
                    var freezeLayer = this.childComp.querySelector("lyte-modal-freeze");
                    setTimeout(function(){
                        freezeLayer.style.opacity = 0;
                        freezeLayer.style.visibility = "";
                    }.bind(this), 300);
                }
                window.LytePopup.closePopup(this);
                // LytePopup.bindTransitionEnd(this.actualModalDiv);
                this.setData("first",true);
                this.setData('initializedPosition',false);
                this.setData('calculateHW', false);
            }
            this.$node.alignModal = null;
            this.$node.resetPosition = null;
            this.$node.alignLyteModal = null;
            this.$node.calculateOffset = null;
            this.$node.reflectTransitionChange = null;
        }
        else{
            this.setData('returnedFalse',true);
            this.$node.ltProp('show',true);
        }
    }

    onBeforeShowHandling() {
        var result = true;
        if(this.getMethods("onBeforeShow")){
            result = this.executeMethod("onBeforeShow",this) ;
        }
        // if(!_lyteUiUtils.modalCreationOrder){
        //   _lyteUiUtils.modalCreationOrder = 0
        // }
        // _lyteUiUtils.modalCreationOrder += 1
        // this.setData('modalCreationOrder' , _lyteUiUtils.modalCreationOrder-1);
        if(result === undefined || result){
            this.setData('checkAria', this.getData('checkAria')+1);
            this.addDragHandler();
            this.updateScrollHandling();

            var modalEle = this.actualModalDiv;
            var val = "";
            modalEle.style.transitionDuration = this.$node.ltProp("transition").duration+"s";
            var classVal = "lyteModalFrom";
            var modalStyle = this.actualModalDiv.style;
            var modalElemOffset = this.actualModalDiv.getBoundingClientRect();
            var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            switch(this.$node.ltProp("transition").animation){
                case "slideFromTop":
                    classVal += "Top";
                    break;
                case "slideFromBottom":
                    classVal += "Bottom";
                    break;
                case "slideFromLeft":
                    classVal += "Left";
                    break;
                case "slideFromRight":
                    classVal += "Right";
                    break;
                case "fadeIn":
                    classVal = "lyteModalFadeIn";
                    break;
                case "zoom":
                    classVal = "lyteZoom";
                    break;
            }
            /*------------------------------ MUTATE STARTS --------------------------*/
            this.fastdomfn1 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
                delete this.fastdomfn1;
                this.actualModalDiv.classList.add(classVal);
                this.actualModalDiv.style.opacity = "";
                modalEle = null;
            },this);
            /*------------------------------ MUTATE ENDS --------------------------*/
            window.LytePopup.addPopup(this);
            this.calculateForSidewiseRender();
            if(this.$node.ltProp('freeze')){
                var freezeLayer = this.childComp.querySelector("lyte-modal-freeze");
                if(this.renderSidewise){
                    if(this.getData('ltPropTransition').animation == 'slideFromRight'){
                        freezeLayer.style.right = (windowWidth - this.renderProps.left) + "px";
                    }
                    if(this.getData('ltPropTransition').animation == 'slideFromLeft'){
                        freezeLayer.style.left = this.renderProps.right + "px";
                    }

                }
                var freezeStyle = freezeLayer.style;
                // freezeStyle.opacity = this.getData('ltPropDimmer').opacity;
                if(this.getData('ltPropDimmer') && this.getData('ltPropDimmer').color){
                    freezeStyle.background = this.getData('ltPropDimmer').color;
                }
                if(!this.addedFreezeDetails){
                    freezeStyle.opacity = this.getData('ltPropDimmer') && this.getData('ltPropDimmer').opacity ? this.getData('ltPropDimmer').opacity : "";
                }
            }
            this.$node.alignModal = this.computeOffsetImpl.bind(this, 0, true)
            this.$node.resetPosition = function(){
              window.LytePopup.x = this.getData('beforeDragPosition').xPos
              LytePopup.y = this.getData('beforeDragPosition').yPos
              LytePopup.xPos = this.getData('beforeDragPosition').xPos
              LytePopup.yPos = this.getData('beforeDragPosition').yPos
              this.component.transform.x = this.getData('beforeDragPosition').xPos
              this.component.transform.y = this.getData('beforeDragPosition').yPos
              if(this.getData('ltPropTransition').animation === "zoom"){
                this.component.actualModalDiv.style.transform = "translate("+this.getData('beforeDragPosition').xPos+"px ,"+this.getData('beforeDragPosition').yPos+"px) scale("+this.getData('beforeDragPosition').scale+")"
              } else {
                this.component.actualModalDiv.style.transform = "translate("+this.getData('beforeDragPosition').xPos+"px ,"+this.getData('beforeDragPosition').yPos+"px)"
              }
            }
            this.$node.alignLyteModal = function(){
              this.component.updateScrollHandling()
              this.component.computeOffsetImpl.bind(this.component, 0, true)
            }
            this.$node.calculateOffset = this.updateScrollHandling.bind(this);
            this.$node.reflectTransitionChange = this.reflectTransitionChange.bind(this);
        }
        else{
            if(window._lyteUiUtils.getRTL()){
                if(!this.getData('ltPropIgnoreInlineDirection')){
                  if(this.getData('ltPropTransition').animation == "slideFromLeft"){
                    //   this.getData('ltPropTransition').animation = "slideFromRight";
                      (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromRight')
                  }
                  else if(this.getData('ltPropTransition').animation == "slideFromRight"){
                    //   this.getData('ltPropTransition').animation = "slideFromLeft";
                      (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromLeft')
                  }
                var offset = this.getData('ltPropOffset'),
                    newOffset = {};
                for( var key in offset){
                    if(key == "left" && offset[key] != "center"){
                        newOffset.right = offset[key];
                    }
                    else if(key == "right"){
                        newOffset.left = offset[key];
                    }
                    else{
                        newOffset[key] = offset[key];
                    }
                }
                this.setData('ltPropOffset',newOffset);
              }
            }
            this.setData('returnedFalse',true);
            this.$node.ltProp({"showCopy":false,"show":false});
        }
    }

    /**
     * The method is going to change the transition property when the modal is opened with different animation and closed with different animation
     * This util function is required to be triggered by the developer after they change the ltPropTransition value
     * The function can be triggered in onShow inside a setTimeout of 500ms or before the ltPropShow of the modal is set to false
     *
     */
    reflectTransitionChange() {
        this.computeOffsetImpl(null, true);
    }

    didDestroy() {
        if(this.event){
            delete this.event
        }
        //   _lyteUiUtils.modalCreationOrder -= 1;
        window._lyteUiUtils.dispatchEvent('lyteModalDestroyed')
        this.setData('ltPropShowWormhole', false);
        this.$node.classList.remove('lyteModalOpened');
        if(this.timeOutId){
            clearTimeout(this.timeOutId);
            delete this.timeOutId;
        }
        if(this.beforeCloseId){
            clearTimeout(this.beforeCloseId);
            delete this.beforeCloseId;
        }
        if(this.renderSidewise){
            delete this.renderSidewise;
            delete this.renderProps;
        }
        if(this.childComp){
            this.clearFastdomBatch();
            if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                window.LytePopup.hideOrShowFreeze("close",this);
                delete this.addedFreezeDetails;
            }
            window.LytePopup.closePopup(this);
            this.childComp.remove();
            delete this.actualModalDiv;
            delete this.childComp;
            // if(this.$node.ltProp('freeze')){
            //     LytePopup.bodywrapperCount -= 1;
            //     if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
            //         document.body.classList.remove('bodyWrapper');
            //     }
            // }
            window.LytePopup.checkAndRemoveWrapper();
        }
        // LytePopup.components = [];
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            close : function(){
               this.$node.ltProp("show",false);
            }
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            beforeWormholeAppend : function(arg){
                if(this.childComp){
                    delete this.childComp;
                }
                if(this.actualModalDiv){
                    delete this.actualModalDiv;
                }
                this.childComp = arg;
                this.actualModalDiv = this.childComp.querySelector(".lyteModal");
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            showToggled : function(){

                var event = event || window.event;
                if(this.getData('returnedFalse')){
                    this.setData('returnedFalse',false);
                    return;
                }
                if(this.getData('ltPropMaxHeight') === 'auto'){
                    this.setData('ltPropMaxHeight' , '')
                }
                if(this.getData('ltPropMaxWidth') === 'auto'){
                    this.setData('ltPropMaxWidth' , '')
                }
                if(this.$node.ltProp("reRenderModal")){
                    if(this.$node.ltProp("show")){
                        this.$node.ltProp({"showCopy":false, "show":false});
                        window.LytePopup.closePopup(this);
                        this.setData("first",true);
                        this.setData('initializedPosition',false);
                    }
                    this.$node.ltProp("reRenderModal",false);
                }
                if(this.timeOutId){
                    delete this.timeOutId;
                    this.closeModal();
                    window.LytePopup.closePopup(this);
                }
                if(this.$node.ltProp("show") && !this.$node.ltProp("showCopy")){
                    this.setData('ltPropRenderHidden' , false)
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.childComp).removeClass('lyteModalHidden')
                    if(window._lyteUiUtils.getRTL()){
                      if(!this.getData('ltPropIgnoreInlineDirection')){
                        if(this.getData('ltPropTransition').animation == "slideFromLeft"){
                            // this.getData('ltPropTransition').animation = "slideFromRight";
                            (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromRight')
                        }
                        else if(this.getData('ltPropTransition').animation == "slideFromRight"){
                            // this.getData('ltPropTransition').animation = "slideFromLeft";
                            (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)(this.getData('ltPropTransition') , 'add' , 'animation' , 'slideFromLeft')
                        }
                        var offset = this.getData('ltPropOffset'),
                            newOffset = {};
                        for(var key in offset){
                            if(key == "left" && offset[key] != "center"){
                                newOffset.right = offset[key];
                            }
                            else if(key == "right"){
                                newOffset.left = offset[key];
                            }
                            else{
                                newOffset[key] = offset[key];
                            }
                        }
                        this.setData('ltPropOffset',newOffset);
                      }
                    }
                    if(window.LytePopup.components.indexOf(this) != -1){
                        window.LytePopup.closePopup(this);
                        this.setData("first",true);
                        this.setData('initializedPosition',false);
                    }
                    this.$node.ltProp("bindToBody",true);
                    window._lyteUiUtils.dispatchEvent('lyteModalBeforeOpen' , this.actualModalDiv)
                    this.setData('ltPropShowWormhole' , true)

                    if(this.getData('ltPropPadding') !== ''){
                        var modalYield = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.childComp).find('.lyteModalYield').eq(0)
                        modalYield.addClass('lyteModalYieldWithPadding')
                        modalYield[0].style.padding = this.getData('ltPropPadding')
                    }

                    var self = this;
                    this.beforeShowId = setTimeout(function(){
                        delete self.beforeShowId;
                        self.onBeforeShowHandling();
                    },0);

                }
                else{
                    this.setData('ltPropShowWormhole' , false)
                    if(this.transitionEndTimeout){
                        clearTimeout(this.transitionEndTimeout);
                        delete this.transitionEndTimeout;
                    }
                    this.clearFastdomBatch();
                    if(this.$node.ltProp("showCopy")){
                        var self = this;
                        this.beforeCloseId = setTimeout(function(){
                            delete self.beforeCloseId;
                            self.onBeforeCloseHandling(event);
                        },0);
                    }
                    else{
                        if(window.LytePopup.components.indexOf(this) != -1){
                            window.LytePopup.closePopup(this);
                            this.setData("first",true);
                            this.setData('initializedPosition',false);
                        }
                    }
                }
            }.observes("ltPropShow","ltPropReRenderModal").on('didConnect'),

            triggerDraggable : function(){
              this.addDragHandler();
            }.observes("ltPropDraggable"),

            changeBindToBody : function(){
                if(!this.getData('ltPropBindToBody')){
                    if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                        window.LytePopup.hideOrShowFreeze("close",this,true);
                        delete this.addedFreezeDetails;
                    }
                    window.LytePopup.closePopup(this);
                    if(this.renderSidewise){
                        delete this.renderSidewise;
                        delete this.renderProps;
                    }
                    this.actualModalDiv = null;
                    this.childComp = null;
                    if(this.getData('ltPropShow') ){
                        this.setData({'ltPropShowCopy':false,'ltPropShow':false});
                    }
                    else if(this.getData('ltPropShowCopy')){
                        this.setData('ltPropShowCopy', false);
                    }
                    this.setData("first",true);
                    this.setData('initializedPosition',false);
                    this.$node.classList.remove('lyteModalOpened');
                    // if(this.$node.ltProp('freeze')){
                    //     LytePopup.bodywrapperCount -= 1;
                    //     if(LytePopup.bodywrapperCount == 0){
                    //         document.body.classList.remove('bodyWrapper');
                    //     }
                    // }
                    window.LytePopup.checkAndRemoveWrapper();
                }
            }.observes("ltPropBindToBody"),

            addAriaValues : function( arg ) {
                if(this.getData('ltPropAria')){
                    var ariaProp = this.getData('ltPropAriaAttributes') || {};
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.actualModalDiv).attr('aria-modal' , true)
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.actualModalDiv).attr('aria-expanded' , this.getData('ltPropShow'))
                    window._lyteUiUtils.setAttribute( this.actualModalDiv, ariaProp, arg ? arg.oldValue : {} );
                    var closeIcon = this.actualModalDiv.querySelector('.lyteModalClose');
                    if(closeIcon){
                        closeIcon.setAttribute('aria-label', ariaProp['close-label'] || 'Close icon at top right position');
                    }
                }
            }.observes('ltPropAriaAttributes','ltPropAriaAttributes.{}','checkAria'),

            scrollHandling : function(){
                if(this.getData('ltPropMaxHeight') === 'auto'){
                    this.setData('ltPropMaxHeight' , '')
                }
                if(this.getData('ltPropMaxWidth') === 'auto'){
                    this.setData('ltPropMaxWidth' , '')
                }
                if(!this.getData('ltPropShow')){
                    return;
                }
                this.updateScrollHandling();
            }.observes("ltPropWidth","ltPropMaxWidth","ltPropHeight","ltPropMaxHeight")
        }), arg1);
    }

    _() {
        _;
    }
}

LyteModalComponent._template = "<template tag-name=\"lyte-modal\" role=\"dialog\" aria-label=\"lyte modal\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropBindToBody,'&amp;&amp;',expHandlers(ltPropReRenderModal,'!'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-wormhole case=\"true\" style=\"{{if(ltPropShowCopy,'visibility:visible','visibility:hidden')}}\" class=\"{{if(ltPropRenderHidden,'lyteModalDisplayNone','')}}\" lt-prop-focus-on-close=\"{{ltPropFocusOnClose}}\" on-before-append=\"{{method(&quot;beforeWormholeAppend&quot;)}}\" lt-prop-show=\"{{ltPropShowWormhole}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"modalWrapper {{ltPropWrapperClass}} lytePopupZI\"> <div class=\"lyteModal\" role=\"dialog\"> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{ltPropShowCloseButton}}\" lc-id=\"lc_id_0\"><span class=\"lyteModalClose\" onclick=\"{{action('close')}}\" tabindex=\"0\" role=\"button\"></span></template></template> <lyte-yield yield-name=\"modal\" class=\"lyteModalYield\"></lyte-yield> </div> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{ltPropFreeze}}\" lc-id=\"lc_id_0\"><lyte-modal-freeze></lyte-modal-freeze></template></template> </div> </template> </lyte-wormhole> </template></template></template>";;
LyteModalComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropShowCopy","'visibility:visible'","'visibility:hidden'"]}}},"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"i","p":[1,1,3],"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteModalComponent._observedAttributes = [
    "ltPropShow",
    "ltPropFreeze",
    "ltPropShowCloseButton",
    "ltPropCloseOnEscape",
    "ltPropTransition",
    "ltPropOffset",
    "ltPropDimmer",
    "ltPropDraggable",
    "ltPropAllowMultiple",
    "ltPropScrollable",
    "ltPropMaxHeight",
    "ltPropMaxWidth",
    "ltPropWidth",
    "ltPropHeight",
    "ltPropWrapperClass",
    "ltPropBindToBody",
    "ltPropShowCopy",
    "ltPropReRenderModal",
    "ltPropOverlayClose",
    "ltPropAria",
    "ltPropAriaAttributes",
    "ltPropPreventFocus",
    "ltPropSetContentHeight",
    "ltPropCloseDuration",
    "ltPropOverlapModal",
    "ltPropIgnoreInlineDirection",
    "ltPropAllowContainment",
    "ltPropFocusOnClose",
    "ltPropPadding",
    "ltPropIgnoreZindex",
    "ltPropDependentModalId",
    "ltPropParentModalId",
    "ltPropShowWormhole",
    "ltPropRenderHidden",
    "first",
    "resizeCalled",
    "initializedPosition",
    "prevHeight",
    "returnedFalse",
    "prevModalHeight",
    "prevModalWidth",
    "calculateHW",
    "checkAria",
    "beforeDragPosition",
    "resetTriggered"
];

window.addModalEvent = function(event){
    window.addEventListener('resize',function(event){
        // console.log(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
        if(window.LytePopup._lyteModalRTId){
            // console.log(window.LytePopup._lyteModalRTId);
            clearTimeout(window.LytePopup._lyteModalRTId);
            window.LytePopup._lyteModalRTId = false;
        }
        window.LytePopup._lyteModalRTId = setTimeout(function(){
            // for(var i = window.LytePopup.components.length - 1 ; i >= 0 ; i--){
            for(var i = 0  ; i < window.LytePopup.components.length ; i++){
            // console.log(window.LytePopup.components[i].$node);
                if(window.LytePopup.components[i].$node && window.LytePopup.components[i].$node.nodeName == "LYTE-MODAL" && window.LytePopup.components[i].childComp.style.visibility == "visible" && window.LytePopup.components[i].childComp.querySelector('.lyteModal')){
                    window.LytePopup.components[i].$node.component.setData('resizeCalled',true);
                    if(window.LytePopup.components[i].getData('ltPropParentModalId') == '' && window.LytePopup.components[i].getData('ltPropDependentModalId') != '') {
                        window.LytePopup.components[i].$node.component.updateScrollHandling();
                    }
                    else if(window.LytePopup.components[i].getData('ltPropParentModalId') == '' && window.LytePopup.components[i].getData('ltPropDependentModalId') == '') {
                        if((i == window.LytePopup.components.length - 1) && window.LytePopup.components[i].renderSidewise){
                            continue;
                        }
                        window.LytePopup.components[i].$node.component.updateScrollHandling();
                    }
                }
            }
            window.LytePopup._lyteModalRTId = false;
        },100);
    },true);

    window._lyteUiUtils.addEventListenerGlobal('click',function(event){
        var ele = event.target;
        var closeBoolen = false;
        if(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.lyteInputCalendar')[0] || _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.lyteCalendarView')[0]){
            closeBoolen = true
        }
        while(!_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(ele).hasClass('modalWrapper') && !_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(ele).hasClass('popoverWrapper') && ele.tagName != "LYTE-MODAL-FREEZE" && ele.tagName != 'LYTE-DROP-BOX' && ele.tagName != 'HTML' && !closeBoolen){
            ele = ele.parentElement;
            if(!ele){
                return
            }
        }
        if(ele.tagName == "HTML" || ele.tagName == "LYTE-MODAL-FREEZE"){
            for(var i = window.LytePopup.components.length -1 ; i>=0; i--){
                if(window.LytePopup.components[i].$node.tagName == "LYTE-MODAL" && window.LytePopup.components[i].childComp.style.visibility == "visible"){
                    var modal = window.LytePopup.components[i].$node;
                    var dontClose = true
                    if(modal.component.getData('ltPropAllowContainment') && ele.tagName === 'HTML'){
                        dontClose = false
                    }
                    if(modal && modal.component.getData('ltPropOverlayClose') && dontClose){
                        modal.ltProp('show',false);
                        break;
                    }
                }
            }
        }
        else{
            /*  If ele is having modalWrapper class ie. a modal and it is not the modal that is opened at last which is the current modal element in the page
            this means the click has happened outside the current modal
            so the current modal should be closed */
            if(ele.classList.contains('modalWrapper') && window.LytePopup.components.length > 1 && window.LytePopup.components[window.LytePopup.components.length -1].$node.tagName == "LYTE-MODAL"){
                var modal = window.LytePopup.components[window.LytePopup.components.length -1];
                var dontClose = true
                if(modal.getData('ltPropAllowContainment') && ele.tagName === 'HTML'){
                    dontClose = false
                }
                if(!(modal.childComp.contains(ele)) && modal.childComp.style.visibility == "visible" && modal.getData('ltPropOverlayClose') && dontClose){
                    modal.$node.ltProp('show',false);
                }
            }
        }
    },true);
}

if (document.readyState === "complete" || document.readyState === "interactive"){
    window.addModalEvent();
}
else{
    window._lyteUiUtils.addEventListenerGlobal("DOMContentLoaded", function(event){
        window.addModalEvent(event);
    });
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: window.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

/**
 * @syntax yielded
 * <lyte-modal>
 *     <template is = "registerYield" yield-name = "modal">
 *         <lyte-modal-header> Create Profile </lyte-modal-header>
 *         <lyte-modal-content>
 *             //Some Content
 *         </lyte-modal-content>
 *         <lyte-modal-footer class = "right">
 *             //Some button
 *         </lyte-modal-footer>
 *     </template>
 * </lyte-modal>
 */


LyteModalComponent.register("lyte-modal", {
    hash: "LyteModalComponent_4",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ })

}]);
//# sourceMappingURL=modal-comp.js.map
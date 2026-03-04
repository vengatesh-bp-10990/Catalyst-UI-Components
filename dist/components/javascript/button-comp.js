"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/button-comp"],{

/***/ 53742696:
/*!**********************************************!*\
  !*** ./components/javascript/button-comp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComp": () => (/* binding */ ButtonComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class ButtonComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
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

    // Bind select dropdowns
    let variantSelect = node.querySelector('[data-action="changeBtnVariant"]');
    let sizeSelect = node.querySelector('[data-action="changeBtnSize"]');
    let colorSelect = node.querySelector('[data-action="changeBtnColor"]');
    let stateSelect = node.querySelector('[data-action="changeBtnState"]');

    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        let val = e.target.value;
        comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'variant', val);
        if (val === 'grey') {
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'color', 'grey');
        }
        comp.constructCodeSnippet();
      });
    }
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (colorSelect) {
      colorSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'color', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (stateSelect) {
      stateSelect.addEventListener('change', function (e) {
        let val = e.target.value;
        if (val === 'disabled') {
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'disabled', true);
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'loading', false);
        } else if (val === 'loading') {
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'loading', true);
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'disabled', false);
        } else {
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'loading', false);
          comp.$app.objectUtils(comp.getData('btnStyles'), 'add', 'disabled', false);
        }
        comp.constructCodeSnippet();
      });
    }

  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: this }),
      btnStyles: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          "label": "Button Text",
          "variant": "fill",
          "color": "primary",
          "size": "default",
          "disabled": false,
          "loading": false,
          "type": "",
          "callback": { "name": "" }
        }
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
      toggleIconLeftObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleIconLeft' } }
      }),
      toggleIconRightObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleIconRight' } }
      }),
      toggleSplitObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleSplit' } }
      }),
      toggleOnlyIconObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleOnlyIcon' } }
      }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: "" } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: "" } }),
      newSlyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: "" } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: "" } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: "" } })
    }), arg1);
  }

  constructCodeSnippet() {
    let btnObj = this.getData('btnStyles') || {};
    let defaults = { label: 'Button Text', variant: 'fill', color: 'primary', size: 'default', disabled: false, loading: false, type: '' };

    // --- Build prop lines (shared) ---
    let propLines = [];
    if (btnObj.label) { propLines.push('    "label": "' + btnObj.label + '"'); }
    if (btnObj.variant && btnObj.variant !== defaults.variant) { propLines.push('    "variant": "' + btnObj.variant + '"'); }
    if (btnObj.color && btnObj.color !== defaults.color) { propLines.push('    "color": "' + btnObj.color + '"'); }
    if (btnObj.size && btnObj.size !== defaults.size) { propLines.push('    "size": "' + btnObj.size + '"'); }
    if (btnObj.disabled === true) { propLines.push('    "disabled": true'); }
    if (btnObj.loading === true) { propLines.push('    "loading": true'); }
    if (btnObj.type && btnObj.type !== defaults.type) { propLines.push('    "type": "' + btnObj.type + '"'); }
    if (btnObj.icon) { propLines.push('    "icon": { "position": "' + btnObj.icon.position + '", "name": "' + btnObj.icon.name + '" }'); }
    if (!btnObj.label && !propLines.length) { propLines.push('    "label": "' + defaults.label + '"'); }

    // 1. sLyte tab: template only
    let slyte_code = '<zcat-button\n  self="{{self}}"\n  zcat-prop="{{btnStyles}}"\n></zcat-button>';

    // 2. JS tab: data() code
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    btnStyles: prop(\'object\', {\n      default: {\n' + propLines.join(',\n') + '\n      }\n    })\n  };\n}';

    // 3. sLyte New tab: attributes + self + inline callback
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    if (btnObj.label) { newSlyteAttrs.push('  zcat-prop-label="' + btnObj.label + '"'); }
    else if (!btnObj.icon) { newSlyteAttrs.push('  zcat-prop-label="' + defaults.label + '"'); }
    if (btnObj.variant && btnObj.variant !== defaults.variant) { newSlyteAttrs.push('  zcat-prop-variant="' + btnObj.variant + '"'); }
    if (btnObj.color && btnObj.color !== defaults.color) { newSlyteAttrs.push('  zcat-prop-color="' + btnObj.color + '"'); }
    if (btnObj.size && btnObj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + btnObj.size + '"'); }
    if (btnObj.disabled === true) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    if (btnObj.loading === true) { newSlyteAttrs.push('  zcat-prop-loading="true"'); }
    if (btnObj.type && btnObj.type !== defaults.type) { newSlyteAttrs.push('  zcat-prop-type="' + btnObj.type + '"'); }
    if (btnObj.icon) { newSlyteAttrs.push('  zcat-prop-icon-position="' + btnObj.icon.position + '"'); newSlyteAttrs.push('  zcat-prop-icon-name="' + btnObj.icon.name + '"'); }
    newSlyteAttrs.push('  zcat-prop-callback-name="onBtnClick"');

    let newSlyte_code = '// Template\n<zcat-button\n' + newSlyteAttrs.join('\n') + '\n></zcat-button>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onBtnClick() {\n      console.log("Button clicked!");\n    }\n  };\n}';

    // 4. HTML tab: plain HTML
    let cssClasses = ['zcat-btn'];
    cssClasses.push(btnObj.variant || 'fill');
    cssClasses.push(btnObj.color || 'primary');
    let size = btnObj.size || 'default';
    if (size === 'small') { cssClasses.push('zcat-btn-sm'); }
    else if (size === 'extra-small') { cssClasses.push('zcat-btn-exsm'); }
    else if (size === 'large') { cssClasses.push('zcat-btn-lg'); }
    if (btnObj.loading) { cssClasses.push('loading'); }
    if (!btnObj.label && btnObj.icon) { cssClasses.push('icon-only'); }
    if (btnObj.type === 'split') { cssClasses.push('split-body'); }

    let htmlAttrs = '';
    if (btnObj.disabled) { htmlAttrs = ' disabled'; }

    let iconSvg = '';
    if (btnObj.icon) {
      iconSvg = '<svg class="zcat-btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
    }

    let inner = '';
    if (btnObj.icon && btnObj.icon.position === 'left') { inner += iconSvg; }
    if (btnObj.label) { inner += '<span class="zcat-btn-text">' + btnObj.label + '</span>'; }
    if (btnObj.icon && btnObj.icon.position === 'right') { inner += iconSvg; }
    if (btnObj.loading) {
      inner += '\n  <span class="zcat-btn-loader-wrap"><span class="zcat-btn-loader"></span></span>';
    }

    let html_code = '<button class="' + cssClasses.join(' ') + '"' + htmlAttrs + '>\n  ' + inner + '\n</button>';

    if (btnObj.type === 'split') {
      html_code = '<div class="zcat-split-group">\n  ' + html_code + '\n  <button class="zcat-btn ' + (btnObj.variant || 'fill') + ' ' + (btnObj.color || 'primary') + ' split-arrow"' + htmlAttrs + '>\n    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10"/></svg>\n  </button>\n</div>';
    }

    // 5. CSS tab: relevant CSS classes
    let css_code = '.zcat-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 0 14px;\n  height: 36px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n';
    let v = btnObj.variant || 'fill';
    let c = btnObj.color || 'primary';
    if (v === 'fill') {
      css_code += '.zcat-btn.fill.' + c + ' {\n  background: var(--zcat-btn-fill-bg-' + c + '-default);\n  color: var(--zcat-btn-fill-text-default);\n  border: none;\n}\n';
      css_code += '.zcat-btn.fill.' + c + ':hover {\n  background: var(--zcat-btn-fill-bg-' + c + '-hover);\n}';
    } else if (v === 'outline') {
      css_code += '.zcat-btn.outline.' + c + ' {\n  background: transparent;\n  color: var(--zcat-btn-outline-text-' + c + '-default);\n  border-color: var(--zcat-btn-outline-border-' + c + '-default);\n}\n';
      css_code += '.zcat-btn.outline.' + c + ':hover {\n  background: var(--zcat-btn-outline-bg-' + c + 'Hover);\n}';
    } else if (v === 'ghost') {
      css_code += '.zcat-btn.ghost.' + c + ' {\n  background: transparent;\n  border: none;\n  color: var(--zcat-btn-ghost-text-' + c + '-default);\n}\n';
      css_code += '.zcat-btn.ghost.' + c + ':hover {\n  background: var(--zcat-btn-ghost-bg-' + c + '-hover);\n}';
    } else if (v === 'grey') {
      css_code += '.zcat-btn.grey {\n  background: var(--zcat-btn-grey-bg-default);\n  color: var(--zcat-btn-grey-text-default);\n  border-color: var(--zcat-btn-grey-border-default);\n}\n';
      css_code += '.zcat-btn.grey:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}';
    }
    if (size !== 'default') {
      let sizeMap = { 'small': { cls: 'zcat-btn-sm', h: '28px', fs: '13px', p: '0 10px' }, 'extra-small': { cls: 'zcat-btn-exsm', h: '24px', fs: '12px', p: '0 8px' }, 'large': { cls: 'zcat-btn-lg', h: '50px', fs: '16px', p: '0 20px' } };
      let s = sizeMap[size];
      if (s) {
        css_code += '\n.' + s.cls + ' {\n  height: ' + s.h + ';\n  font-size: ' + s.fs + ';\n  padding: ' + s.p + ';\n}';
      }
    }

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('newSlyteCodeSnippet.code', newSlyte_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('btnStyles', {
          "label": "Button Text",
          "variant": "fill",
          "color": "primary",
          "size": "default",
          "disabled": false,
          "loading": false,
          "type": "",
          "callback": { "name": "" }
        });
        // Reset toggle prop objects
        this.$app.objectUtils(this.getData('toggleIconLeftObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleIconRightObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleSplitObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleOnlyIconObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function(s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleIconLeft(checked) {
        let btnObj = this.getData('btnStyles');
        if (checked) {
          this.$app.objectUtils(btnObj, 'add', 'icon', { position: 'left', name: 'plus', class: 'zcat-btn-icon' });
        } else {
          this.$app.objectUtils(btnObj, 'add', 'icon', null);
        }
        this.constructCodeSnippet();
      },
      onToggleIconRight(checked) {
        let btnObj = this.getData('btnStyles');
        if (checked) {
          this.$app.objectUtils(btnObj, 'add', 'icon', { position: 'right', name: 'plus', class: 'zcat-btn-icon' });
        } else {
          this.$app.objectUtils(btnObj, 'add', 'icon', null);
        }
        this.constructCodeSnippet();
      },
      onToggleSplit(checked) {
        let btnObj = this.getData('btnStyles');
        if (checked) {
          this.$app.objectUtils(btnObj, 'add', 'type', 'split');
        } else {
          this.$app.objectUtils(btnObj, 'add', 'type', '');
        }
        this.constructCodeSnippet();
      },
      onToggleOnlyIcon(checked) {
        let btnObj = this.getData('btnStyles');
        if (checked) {
          this.$app.objectUtils(btnObj, 'delete', 'label');
          this.$app.objectUtils(btnObj, 'add', 'icon', { position: 'right', name: 'plus', class: 'zcat-btn-icon' });
        } else {
          this.$app.objectUtils(btnObj, 'add', 'label', 'Button Text');
          this.$app.objectUtils(btnObj, 'add', 'icon', null);
        }
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
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code);
          if (window.__zcatToast) { window.__zcatToast('Copied to clipboard!', 'success'); }
        }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

ButtonComp._template = "<template tag-name=\"button-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Buttons</h1> <p class=\"zcat-page-desc\">A button triggers an event or action. They let users know what will happen next.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{btnStyles}}\"></zcat-button> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Variant --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changeBtnVariant\" class=\"zcat-custom-select\"> <option value=\"fill\">Fill</option> <option value=\"outline\">Outline</option> <option value=\"ghost\">Ghost</option> <option value=\"grey\">Grey</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeBtnSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> <option value=\"large\">Large</option> </select> </div> <!-- Color --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Color</span> <select data-action=\"changeBtnColor\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"success\">Success</option> <option value=\"danger\">Danger</option> </select> </div> <!-- State --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">State</span> <select data-action=\"changeBtnState\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"loading\">Loading</option> <option value=\"disabled\">Disabled</option> </select> </div> <!-- Icon Left toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Left</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleIconLeftObj}}\"></zcat-toggle> </div> <!-- Icon Right toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Right</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleIconRightObj}}\"></zcat-toggle> </div> <!-- Split Button toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Split Button</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleSplitObj}}\"></zcat-toggle> </div> <!-- Only Icon toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Only Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleOnlyIconObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Fill Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary\">Primary</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill success\">Success</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Danger</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill danger\">Danger</button></div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Outline Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn outline primary\">Primary</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn outline success\">Success</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Danger</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn outline danger\">Danger</button></div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Ghost Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn ghost primary\">Primary</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn ghost success\">Success</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Danger</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn ghost danger\">Danger</button></div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Grey &amp; Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Grey</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn grey grey\">Grey</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary zcat-btn-sm\">Small</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra Small</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary zcat-btn-exsm\">Extra Small</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary zcat-btn-lg\">Large</button></div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">States &amp; Special</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary\" disabled=\"\">Disabled</button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Loading</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary loading\"><span class=\"zcat-btn-text\">Loading</span><span class=\"zcat-btn-loader-wrap\"><span class=\"zcat-btn-loader\"></span></span></button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Icon Only</span></div> <div class=\"zcat-variant-card-preview\"><button class=\"zcat-btn fill primary icon-only\"><svg class=\"zcat-btn-icon\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></button></div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Split Button</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-split-group\"><button class=\"zcat-btn fill primary split-body\"><span class=\"zcat-btn-text\">Split</span></button><button class=\"zcat-btn fill primary split-arrow\"><svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"currentColor\"><polygon points=\"0,0 10,5 0,10\"></polygon></svg></button></div> </div> </div> </div> </div></template></template> </div> </template><style>/* button-comp demo styles are in utilities */\n</style>";;
ButtonComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,23,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,23,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,27,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,27,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,31,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,31,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;

ButtonComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "btnStyles",
  "resetButtonObj",
  "toggleIconLeftObj",
  "toggleIconRightObj",
  "toggleSplitObj",
  "toggleOnlyIconObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



ButtonComp.register("button-comp", {
  hash: "ButtonComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=button-comp.js.map
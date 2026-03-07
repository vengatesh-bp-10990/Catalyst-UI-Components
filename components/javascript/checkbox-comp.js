"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/checkbox-comp"],{

/***/ 29799315:
/*!************************************************!*\
  !*** ./components/javascript/checkbox-comp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComp": () => (/* binding */ CheckboxComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-checkbox.js */ 95754250);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class CheckboxComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('checkboxObj') || {};
    let defaults = { size: 'default' };

    // --- sLyte tab ---
    let slyte_code = '<zcat-checkbox\n  self="{{self}}"\n  zcat-prop="{{checkboxObj}}"\n></zcat-checkbox>';

    // --- JS tab ---
    let propObj = {};
    if (obj.label) { propObj.label = obj.label; }
    if (obj.size && obj.size !== defaults.size) { propObj.size = obj.size; }
    if (obj.checked) { propObj.checked = true; }
    if (obj.partial) { propObj.partial = true; }
    if (obj.disabled) { propObj.disabled = true; }
    propObj.callback = { name: 'onCheckboxChange' };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    checkboxObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    if (obj.label) { newSlyteAttrs.push('  zcat-prop-label="' + obj.label + '"'); }
    if (obj.size && obj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + obj.size + '"'); }
    if (obj.checked) { newSlyteAttrs.push('  zcat-prop-checked="true"'); }
    if (obj.partial) { newSlyteAttrs.push('  zcat-prop-partial="true"'); }
    if (obj.disabled) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    newSlyteAttrs.push('  zcat-prop-callback-name="onCheckboxChange"');

    let newSlyte_code = '// Template\n<zcat-checkbox\n' + newSlyteAttrs.join('\n') + '\n></zcat-checkbox>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onCheckboxChange(checked, prop) {\n      console.log("Checked:", checked);\n    }\n  };\n}';

    // --- HTML tab ---
    let size = obj.size || 'default';
    let wrapClasses = ['zcat-checkbox-wrap'];
    if (size === 'small') { wrapClasses.push('zcat-checkbox-sm'); }
    else if (size === 'extra-small') { wrapClasses.push('zcat-checkbox-exsm'); }
    if (obj.disabled) { wrapClasses.push('zcat-checkbox-disabled'); }

    let checked = obj.checked ? ' checked' : '';
    let disabled = obj.disabled ? ' disabled' : '';
    let boxChecked = (obj.checked || obj.partial) ? ' checked' : '';
    let boxPartial = obj.partial ? ' partial' : '';

    let html_code = '<label class="' + wrapClasses.join(' ') + '">\n';
    html_code += '  <input type="checkbox" class="zcat-checkbox-input"' + checked + disabled + '/>\n';
    html_code += '  <span class="zcat-checkbox-box' + boxChecked + boxPartial + '">\n';
    if (obj.checked && !obj.partial) {
      html_code += '    <svg class="zcat-checkbox-tick" width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="2.5"><polyline points="3.5 8 6.5 11 12.5 5"/></svg>\n';
    } else if (obj.partial) {
      html_code += '    <svg class="zcat-checkbox-partial" width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="2.5"><line x1="4" y1="8" x2="12" y2="8"/></svg>\n';
    }
    html_code += '  </span>\n';
    if (obj.label) {
      html_code += '  <span class="zcat-checkbox-label">' + obj.label + '</span>\n';
    }
    html_code += '</label>';

    // --- CSS tab ---
    let css_code = '.zcat-checkbox-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n}\n\n';
    css_code += '.zcat-checkbox-box {\n  width: 14px;\n  height: 14px;\n  border: 1px solid var(--zcat-checkbox-border-default);\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n';
    css_code += '.zcat-checkbox-box.checked {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n\n';
    css_code += '.zcat-checkbox-label {\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n}';

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('newSlyteCodeSnippet.code', newSlyte_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      checkboxObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          variant: 'primary',
          label: 'Accept terms & conditions',
          checked: false,
          size: 'default',
          callback: { name: 'onCheckboxChange' }
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      toggleLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleLabel' } }
      }),
      toggleCheckedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleChecked' } }
      }),
      togglePartialObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onTogglePartial' } }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDisabled' } }
      }),
      // All Variants tab objects
      varUncheckedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Unchecked option', checked: false }
      }),
      varCheckedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Checked option', checked: true }
      }),
      varPartialObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Partial selection', partial: true }
      }),
      varNoLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', checked: true }
      }),
      varSizeDefaultObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Default size', checked: true, size: 'default' }
      }),
      varSizeSmallObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Small size', checked: true, size: 'small' }
      }),
      varSizeExsmObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Extra-small', checked: true, size: 'extra-small' }
      }),
      varDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Disabled', disabled: true }
      }),
      varDisabledCheckedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Disabled checked', checked: true, disabled: true }
      }),
      varDisabledPartialObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { variant: 'primary', label: 'Disabled partial', partial: true, disabled: true }
      }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      newSlyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('checkboxObj', {
          variant: 'primary',
          label: 'Accept terms & conditions',
          checked: false,
          size: 'default',
          callback: { name: 'onCheckboxChange' }
        });
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleCheckedObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('togglePartialObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleDisabledObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleLabel(checked) {
        let obj = this.getData('checkboxObj');
        if (checked) {
          this.$app.objectUtils(obj, 'add', 'label', 'Accept terms & conditions');
        } else {
          this.$app.objectUtils(obj, 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      onToggleChecked(checked) {
        let obj = this.getData('checkboxObj');
        this.$app.objectUtils(obj, 'add', 'checked', checked);
        if (checked) {
          this.$app.objectUtils(obj, 'add', 'partial', false);
          this.$app.objectUtils(this.getData('togglePartialObj'), 'add', 'checked', false);
        }
        this.constructCodeSnippet();
      },
      onTogglePartial(checked) {
        let obj = this.getData('checkboxObj');
        this.$app.objectUtils(obj, 'add', 'partial', checked);
        if (checked) {
          this.$app.objectUtils(obj, 'add', 'checked', false);
          this.$app.objectUtils(this.getData('toggleCheckedObj'), 'add', 'checked', false);
        }
        this.constructCodeSnippet();
      },
      onToggleDisabled(checked) {
        let obj = this.getData('checkboxObj');
        this.$app.objectUtils(obj, 'add', 'disabled', checked);
        this.constructCodeSnippet();
      },
      onCheckboxChange(checked, prop) {
        // Demo callback
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeCheckboxSize(e) {
        this.$app.objectUtils(this.getData('checkboxObj'), 'add', 'size', e.target.value);
        this.constructCodeSnippet();
      },
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

CheckboxComp._template = "<template tag-name=\"checkbox-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Checkbox</h1> <p class=\"zcat-page-desc\">Checkboxes allow users to select one or more items from a list, or toggle a single option on/off.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{checkboxObj}}\"></zcat-checkbox> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeCheckboxSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Checked toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Checked</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCheckedObj}}\"></zcat-toggle> </div> <!-- Partial toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Partial</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{togglePartialObj}}\"></zcat-toggle> </div> <!-- Disabled toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Unchecked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varUncheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Checked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varCheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Partial</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varPartialObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Without Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varNoLabelObj}}\"></zcat-checkbox> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeDefaultObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeSmallObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeExsmObj}}\"></zcat-checkbox> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Disabled</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Unchecked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Checked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledCheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Partial</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledPartialObj}}\"></zcat-checkbox> </div> </div> </div> </div></template></template></div> </template><style>/* checkbox-comp specific overrides if needed */\n</style>";;
CheckboxComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,7,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

CheckboxComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "checkboxObj",
  "resetButtonObj",
  "toggleLabelObj",
  "toggleCheckedObj",
  "togglePartialObj",
  "toggleDisabledObj",
  "varUncheckedObj",
  "varCheckedObj",
  "varPartialObj",
  "varNoLabelObj",
  "varSizeDefaultObj",
  "varSizeSmallObj",
  "varSizeExsmObj",
  "varDisabledObj",
  "varDisabledCheckedObj",
  "varDisabledPartialObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



CheckboxComp.register("checkbox-comp", {
  hash: "CheckboxComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 95754250:
/*!************************************************!*\
  !*** ./components/javascript/zcat-checkbox.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatCheckbox": () => (/* binding */ ZcatCheckbox)
/* harmony export */ });
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js */ 53043315);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js */ 71989920);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatCheckbox extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object'),
      key: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string'),
      formData: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { watch: true })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      async customLbindForCheckbox(methodName, value, ...args) {
        try {
          const zcatProp = this.getData("zcatProp");
          const formData = this.getData("formData");
          const key = this.getData("key");

          // 1. Update zcatProp.selected when checkbox changes
          if (zcatProp) {
            this.$app.objectUtils(zcatProp, "add", "selected", !!value);
          }

          // 2. Sync zcatProp.selected → formData.key (if key exists)
          if (formData && key && zcatProp?.selected !== undefined) {
            this.setData(`formData.${key}`, zcatProp.selected);
          }

          // 3. Execute optional callback method asynchronously
          if (methodName && typeof this.executeMethod === "function") {
            await this.executeMethod(methodName, ...args);
          }
        } catch (err) {
          console.error("Error in customLbindForCheckbox:", err);
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatCheckbox._template = "<template tag-name=\"zcat-checkbox\"> <div class=\"zcat-dF zcat-direction-column zcat-gap-10 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','primary')}}\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-checkbox lt-prop-type=\"{{expHandlers(zcatProp.type,'?:',zcatProp.type,'default')}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-id=\"{{item.id}}\" lt-prop-disabled=\"{{expHandlers(item.disabled,'?:',item.disabled,'false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" lt-prop-tabindex=\"{{expHandlers(zcatProp.tabindex,'?:',zcatProp.tabindex,'0')}}\" lt-prop-label=\"{{item.label}}\" lt-prop-name=\"{{item.name}}\" lt-prop-value=\"{{item.value}}\" lt-prop-read-only=\"{{expHandlers(zcatProp.readOnly,'?:',zcatProp.readOnly,'false')}}\" lt-prop-fire-on-init=\"{{expHandlers(zcatProp.fireOnInit,'?:',zcatProp.fireOnInit,'false')}}\" class=\"{{expHandlers(zcatProp.class,'?:',zcatProp.class,'')}} {{expHandlers(item.label,'?:','','checkboxWutLabel')}}\" lt-prop-label-class=\"{{expHandlers(zcatProp.labelClass,'?:',zcatProp.labelClass,'')}}\" lt-prop-prevent-callback-observers=\"{{expHandlers(zcatProp.callbackObservers,'?:',zcatProp.callbackObservers,'false')}}\" lt-prop-focus=\"{{expHandlers(zcatProp.focus,'?:',zcatProp.focus,'false')}}\" lt-prop-aria-checkbox=\"{&quot;aria-checked&quot;: &quot;true&quot;}\" lt-prop-data-tabindex=\"group0-1\" lt-prop-show-tooltip=\"{{expHandlers(zcatProp.tooltip,'?:',zcatProp.tooltip,'false')}}\" lt-prop-tooltip-config=\"{&quot;position&quot;: &quot;bottom&quot;, &quot;appearance&quot;: &quot;box&quot;, &quot;margin&quot;: 15, &quot;keeptooltip&quot;: true}\" lt-prop-tooltip-class=\"{{expHandlers(zcatProp.tooltipClass,'?:',zcatProp.tooltipClass,'false')}}\" on-changed=\"{{method('customLbindForCheckbox',zcatProp.onChange,item.value)}}\" on-before-checked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeChecked)}}\" on-checked=\"{{method('customLbindForCheckbox',zcatProp.onChecked,item.value)}}\" on-before-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeUnChecked)}}\" on-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onUnChecked)}}\"></lyte-checkbox></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" lc-id=\"lc_id_1\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-checkbox lt-prop-yield=\"true\" lt-prop-type=\"{{expHandlers(zcatProp.type,'?:',zcatProp.type,'default')}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-id=\"{{item.id}}\" lt-prop-disabled=\"{{expHandlers(item.disabled,'?:',item.disabled,'false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" lt-prop-tabindex=\"{{expHandlers(zcatProp.tabindex,'?:',zcatProp.tabindex,'0')}}\" lt-prop-name=\"{{expHandlers(zcatProp.name,'?:',zcatProp.name,'')}}\" lt-prop-value=\"{{item.value}}\" lt-prop-read-only=\"{{expHandlers(zcatProp.readOnly,'?:',zcatProp.readOnly,'false')}}\" lt-prop-fire-on-init=\"{{expHandlers(zcatProp.fireOnInit,'?:',zcatProp.fireOnInit,'false')}}\" class=\"zcat-secondary-checkbox-button zcat-w100p primaryCheckBoxBtn {{expHandlers(item.desc,'?:','','checkboxWutSubtxt')}}\" lt-prop-label-class=\"{{expHandlers(zcatProp.labelClass,'?:',zcatProp.labelClass,'')}}\" lt-prop-prevent-callback-observers=\"{{expHandlers(zcatProp.callbackObservers,'?:',zcatProp.callbackObservers,'false')}}\" lt-prop-focus=\"{{expHandlers(zcatProp.focus,'?:',zcatProp.focus,'false')}}\" lt-prop-aria-checkbox=\"{&quot;aria-checked&quot;: &quot;true&quot;}\" lt-prop-data-tabindex=\"group0-1\" lt-prop-show-tooltip=\"{{expHandlers(zcatProp.tooltip,'?:',zcatProp.tooltip,'false')}}\" lt-prop-tooltip-config=\"{&quot;position&quot;: &quot;bottom&quot;, &quot;appearance&quot;: &quot;box&quot;, &quot;margin&quot;: 15, &quot;keeptooltip&quot;: true}\" lt-prop-tooltip-class=\"{{expHandlers(zcatProp.tooltipClass,'?:',zcatProp.tooltipClass,'false')}}\" on-changed=\"{{method('customLbindForCheckbox',zcatProp.onChange)}}\" on-before-checked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeChecked)}}\" on-checked=\"{{method('customLbindForCheckbox',zcatProp.onChecked)}}\" on-before-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeUnChecked)}}\" on-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onUnChecked)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <div class=\"{{expHandlers(expHandlers(zcatProp.type,'===','switch'),'?:','','zcat-ml-4')}} zcat-dF zcat-direction-column zcat-gap-2\"> <lyte-text class=\"zcat-text-14 {{expHandlers(item.desc,'?:','zcat-font-semibold','zcat-font-regular')}} zcat-color-dark1 zcat-w100p\" lt-prop-value=\"{{item.label}}\"> </lyte-text> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.desc}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-text class=\"zcat-text-12 zcat-color-dark2 zcat-w100p\" lt-prop-value=\"{{item.desc}}\"> </lyte-text></template></template></div> </template> </lyte-checkbox></template> </template></template> </div> </template><style>\n\n/* === Global base styles from reference css/zcat-checkbox.css === */\nlyte-checkbox * {\n  box-sizing: border-box;\n}\nlyte-checkbox.zcat-secondary-checkbox-button,.zcat-secondary-checkbox-button .lyteCheckBoxDefault{\n  width: 100%;\n}\nlyte-checkbox label{\n  width: 100%;\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n}\n.lyteCheckbox {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\nlyte-checkbox:hover span{\n  color: var(--zcat-body-text-primary);\n}\n.lyteCheckbox .lyteCheckBoxPrimary span,.lyteCheckbox .lyteCheckBoxDefault span{\n  width: calc(100% - 16px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.lyteCheckbox > input[type='checkbox'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n}\n.lyteCheckBoxDefault::before {\n  content: '';\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  border: 1px solid;\n  border-color: var(--zcat-checkbox-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  margin-right: 4px;\n  box-sizing: border-box;\n}\n.lyteCheckbox:hover .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-hover);\n  border: 1px solid var(--zcat-checkbox-border-hover);\n}\n.lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after,lyte-checkbox.minus-btn .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after,.lyteCheckbox.minus-btn > input[type='checkbox']:checked + .lyteCheckBoxDefault::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 1px;\n  bottom: 0;\n  left: 3.2px;\n  right: auto;\n  margin: auto;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\"><path d=\"M6.66667 2.15002L3 5.81669L1.33334 4.15002\" stroke=\"white\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\nlyte-checkbox.minus-btn .lyteCheckbox > input[type=checkbox] + .lyteCheckBoxDefault::after,.lyteCheckbox.minus-btn > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n  bottom: initial;\n}\n.lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n.lyteCheckbox:hover\n  > input[type='checkbox']:checked\n  + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-hover);\n}\n.lyteCheckbox > input[type='checkbox']:disabled + span {\n  opacity: 1;\n}\nlyte-checkbox[lt-prop-disabled='true'] {\n  opacity: 1;\n  cursor: not-allowed;\n}\n.lyteCheckbox\n  > input[type='checkbox']:checked:disabled\n  + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-disabled);\n  border-color: transparent;\n  opacity: 1;\n}\n.lyteCheckbox > input[type='checkbox']:disabled + .lyteCheckBoxDefault::before,\n.lyteCheckbox:hover > input[type='checkbox']:disabled {\n  background: var(--zcat-checkbox-bg-disabled);\n  border-color: var(--zcat-checkbox-border-disabled);\n  opacity: 1;\n}\n\n/*Switch Styles*/\n\n.lyteCheckSwitch {\n  border: 1px solid;\n  border-color: var(--zcat-checkbox-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: 28px;\n  height: 18px;\n  border-radius: 25px;\n  background-color: var(--zcat-toggle-bg-default);\n  position: relative;\n}\n\n.lyteCheckSwitch + span {\n  margin-left: 4px;\n  width: calc(100% - 28px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n}\n\n.zcat-secondary-checkbox-button[lt-prop-type=\"switch\"] .lyteCheckSwitch + span{\n  margin: 0;\n}\n\n.lyteCheckSwitch .on-btn {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-toggle-inner-default);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 1px;\n  transition: left 150ms ease-in-out;\n  will-change: left;\n}\n\n.lyteCheckSwitch .on-btn:hover{\n  background: var(--zcat-toggle-inner-hover);\n}\n\nlyte-checkbox:hover .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-hover);\n  border: 1px solid var(--zcat-toggle-border-hover);\n}\n\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n  box-shadow: none;\n}\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch:hover,\ninput[type='checkbox'].on-off-sw:checked:disabled + .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\ninput[type='checkbox'].on-off-sw:disabled + .lyteCheckSwitch {\n  border-color: var(--zcat-checkbox-border-default);\n  background-color: var(--zcat-checkbox-bg-hover);\n}\n\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch .on-btn {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-toggle-inner-active);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: calc(100% - 15px);\n}\n\n/*Keyboard Focus*/\ninput[type='checkbox'].on-off-sw:checked:focus + .lyteCheckSwitch,\ninput[type='checkbox'].on-off-sw:focus + .lyteCheckSwitch,\n.lyteCheckbox\n  > input[type='checkbox']:checked:focus\n  + .lyteCheckBoxDefault::before,\n.lyteCheckbox > input[type='checkbox']:focus + .lyteCheckBoxDefault::before {\n  box-shadow: none;\n}\n\nlyte-checkbox:hover .lyteCheckSwitch .on-btn{\n  background: var(--zcat-toggle-inner-hover);\n}\n\nlyte-checkbox:hover \ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch {\n  background: var(--zcat-toggle-bg-clicked-hover);\n}\n\n\n.zcat-secondary-checkbox-button.primaryCheckBoxBtn.selected,\n.zcat-secondary-checkbox-button.primaryCheckBoxBtn {\n  padding: 0;\n}\n.zcat-secondary-checkbox-button .lyteCheckbox {\n  width: 100%;\n  padding: 10px;\n}\n.zcat-secondary-checkbox-button.lyteCheckboxDisabled .lyteCheckbox,.primaryCheckBoxBtn.lyteCheckboxDisabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\nlyte-checkbox.zcat-secondary-checkbox-button label{\n  padding: 10px;\n  cursor: pointer;\n  flex-direction: row-reverse;\n}\n.primaryCheckBoxBtn{\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n}\n.primaryCheckBoxBtn:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.primaryCheckBoxBtn.selected {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-color-primary);\n  background: var(--zcat-color-grey7);\n}\n\n.lyteCheckbox.lyteDefault,.primaryCheckBoxBtn .lyteCheckbox.lyteDefault{\n  position: relative;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n.primaryCheckBoxBtn .lyteCheckbox.lyteDefault{\n  align-items: baseline;\n}\n\n.primaryCheckBoxBtn .lyteCheckBoxDefault{\n  display: flex;\n  gap: 4px;\n  position: relative;\n}\n\n.primaryCheckBoxBtn .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  top: -14px;\n}\n\n.primaryCheckBoxBtn.checkboxWutSubtxt .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  top: 1px;\n}\n\n.primaryCheckBoxBtn .lyteCheckBoxDefault::before {\n  align-items: baseline;\n  vertical-align: top;\n  margin-top: 4.5px;\n}\n\n.checkboxWutSubtxt.primaryCheckBoxBtn .lyteCheckBoxDefault{\n  align-items: center;\n}\n.primaryCheckBoxBtn.checkboxWutSubtxt .lyteCheckBoxDefault::before{\n  margin: 0;\n}\n\n.checkboxWutLabel .lyteCheckbox.lyteDefault{\n  width: fit-content;\n}\n\n.checkboxWutLabel .lyteCheckBoxDefault,lyte-checkbox[lt-prop-disabled='true'].checkboxWutLabel,lyte-checkbox[lt-prop-type=\"default\"].checkboxWutLabel{\n  width: 14px;\n  height: 14px;\n}\n\nlyte-checkbox[lt-prop-disabled='true'] .lyteCheckbox.lyteDefault{\n  cursor: not-allowed;\n}\n\n.checkboxWutLabel .lyteCheckBoxDefault::before{\n  position: absolute;\n  top: 0;\n}\n\nzcat-checkbox{\n  display: flex;\n}\n\n/* .lyteCheckBoxDefault, lyte-checkbox{\n  width: auto;\n} */\n\n/* === Global base styles from reference css/zcat-checkbox.css === */\nlyte-checkbox * {\n  box-sizing: border-box;\n}\nlyte-checkbox.zcat-secondary-checkbox-button,.zcat-secondary-checkbox-button .lyteCheckBoxDefault{\n  width: 100%;\n}\nlyte-checkbox label{\n  width: 100%;\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n}\n.lyteCheckbox {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\nlyte-checkbox:hover span{\n  color: var(--zcat-body-text-primary);\n}\n.lyteCheckbox .lyteCheckBoxPrimary span,.lyteCheckbox .lyteCheckBoxDefault span{\n  width: calc(100% - 16px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.lyteCheckbox > input[type='checkbox'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n}\n.lyteCheckBoxDefault::before {\n  content: '';\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  border: 1px solid;\n  border-color: var(--zcat-checkbox-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  margin-right: 4px;\n  box-sizing: border-box;\n}\n.lyteCheckbox:hover .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-hover);\n  border: 1px solid var(--zcat-checkbox-border-hover);\n}\n.lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after,lyte-checkbox.minus-btn .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after,.lyteCheckbox.minus-btn > input[type='checkbox']:checked + .lyteCheckBoxDefault::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 1px;\n  bottom: 0;\n  left: 3.2px;\n  right: auto;\n  margin: auto;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\"><path d=\"M6.66667 2.15002L3 5.81669L1.33334 4.15002\" stroke=\"white\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\nlyte-checkbox.minus-btn .lyteCheckbox > input[type=checkbox] + .lyteCheckBoxDefault::after,.lyteCheckbox.minus-btn > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n  bottom: initial;\n}\n.lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n.lyteCheckbox:hover\n  > input[type='checkbox']:checked\n  + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-hover);\n}\n.lyteCheckbox > input[type='checkbox']:disabled + span {\n  opacity: 1;\n}\nlyte-checkbox[lt-prop-disabled='true'] {\n  opacity: 1;\n  cursor: not-allowed;\n}\n.lyteCheckbox\n  > input[type='checkbox']:checked:disabled\n  + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-disabled);\n  border-color: transparent;\n  opacity: 1;\n}\n.lyteCheckbox > input[type='checkbox']:disabled + .lyteCheckBoxDefault::before,\n.lyteCheckbox:hover > input[type='checkbox']:disabled {\n  background: var(--zcat-checkbox-bg-disabled);\n  border-color: var(--zcat-checkbox-border-disabled);\n  opacity: 1;\n}\n\n/*Switch Styles*/\n\n.lyteCheckSwitch {\n  border: 1px solid;\n  border-color: var(--zcat-checkbox-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: 28px;\n  height: 18px;\n  border-radius: 25px;\n  background-color: var(--zcat-toggle-bg-default);\n  position: relative;\n}\n\n.lyteCheckSwitch + span {\n  margin-left: 4px;\n  width: calc(100% - 28px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n}\n\n.zcat-secondary-checkbox-button[lt-prop-type=\"switch\"] .lyteCheckSwitch + span{\n  margin: 0;\n}\n\n.lyteCheckSwitch .on-btn {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-toggle-inner-default);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 1px;\n  transition: left 150ms ease-in-out;\n  will-change: left;\n}\n\n.lyteCheckSwitch .on-btn:hover{\n  background: var(--zcat-toggle-inner-hover);\n}\n\nlyte-checkbox:hover .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-hover);\n  border: 1px solid var(--zcat-toggle-border-hover);\n}\n\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n  box-shadow: none;\n}\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch:hover,\ninput[type='checkbox'].on-off-sw:checked:disabled + .lyteCheckSwitch {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\ninput[type='checkbox'].on-off-sw:disabled + .lyteCheckSwitch {\n  border-color: var(--zcat-checkbox-border-default);\n  background-color: var(--zcat-checkbox-bg-hover);\n}\n\ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch .on-btn {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-toggle-inner-active);\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: calc(100% - 15px);\n}\n\n/*Keyboard Focus*/\ninput[type='checkbox'].on-off-sw:checked:focus + .lyteCheckSwitch,\ninput[type='checkbox'].on-off-sw:focus + .lyteCheckSwitch,\n.lyteCheckbox\n  > input[type='checkbox']:checked:focus\n  + .lyteCheckBoxDefault::before,\n.lyteCheckbox > input[type='checkbox']:focus + .lyteCheckBoxDefault::before {\n  box-shadow: none;\n}\n\nlyte-checkbox:hover .lyteCheckSwitch .on-btn{\n  background: var(--zcat-toggle-inner-hover);\n}\n\nlyte-checkbox:hover \ninput[type='checkbox'].on-off-sw:checked + .lyteCheckSwitch {\n  background: var(--zcat-toggle-bg-clicked-hover);\n}\n\n\n.zcat-secondary-checkbox-button.primaryCheckBoxBtn.selected,\n.zcat-secondary-checkbox-button.primaryCheckBoxBtn {\n  padding: 0;\n}\n.zcat-secondary-checkbox-button .lyteCheckbox {\n  width: 100%;\n  padding: 10px;\n}\n.zcat-secondary-checkbox-button.lyteCheckboxDisabled .lyteCheckbox,.primaryCheckBoxBtn.lyteCheckboxDisabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\nlyte-checkbox.zcat-secondary-checkbox-button label{\n  padding: 10px;\n  cursor: pointer;\n  flex-direction: row-reverse;\n}\n.primaryCheckBoxBtn{\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n}\n.primaryCheckBoxBtn:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.primaryCheckBoxBtn.selected {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-color-primary);\n  background: var(--zcat-color-grey7);\n}\n\n.lyteCheckbox.lyteDefault,.primaryCheckBoxBtn .lyteCheckbox.lyteDefault{\n  position: relative;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n.primaryCheckBoxBtn .lyteCheckbox.lyteDefault{\n  align-items: baseline;\n}\n\n.primaryCheckBoxBtn .lyteCheckBoxDefault{\n  display: flex;\n  gap: 4px;\n  position: relative;\n}\n\n.primaryCheckBoxBtn .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  top: -14px;\n}\n\n.primaryCheckBoxBtn.checkboxWutSubtxt .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after{\n  top: 1px;\n}\n\n.primaryCheckBoxBtn .lyteCheckBoxDefault::before {\n  align-items: baseline;\n  vertical-align: top;\n  margin-top: 4.5px;\n}\n\n.checkboxWutSubtxt.primaryCheckBoxBtn .lyteCheckBoxDefault{\n  align-items: center;\n}\n.primaryCheckBoxBtn.checkboxWutSubtxt .lyteCheckBoxDefault::before{\n  margin: 0;\n}\n\n.checkboxWutLabel .lyteCheckbox.lyteDefault{\n  width: fit-content;\n}\n\n.checkboxWutLabel .lyteCheckBoxDefault,lyte-checkbox[lt-prop-disabled='true'].checkboxWutLabel,lyte-checkbox[lt-prop-type=\"default\"].checkboxWutLabel{\n  width: 14px;\n  height: 14px;\n}\n\nlyte-checkbox[lt-prop-disabled='true'] .lyteCheckbox.lyteDefault{\n  cursor: not-allowed;\n}\n\n.checkboxWutLabel .lyteCheckBoxDefault::before{\n  position: absolute;\n  top: 0;\n}\n\nzcat-checkbox{\n  display: flex;\n}\n\n/* .lyteCheckBoxDefault, lyte-checkbox{\n  width: auto;\n} */</style>";;
ZcatCheckbox._dynamicNodes = [{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatCheckbox._observedAttributes = ["self", "zcatProp", "key", "formData"];

ZcatCheckbox.register("zcat-checkbox", {
  hash: "ZcatCheckbox_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=checkbox-comp.js.map
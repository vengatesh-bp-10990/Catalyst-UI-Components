import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-checkbox.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class CheckboxComp extends Component {
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

    let sizeSelect = node.querySelector('[data-action="changeCheckboxSize"]');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('checkboxObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
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
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      checkboxObj: prop('object', {
        default: {
          label: 'Accept terms & conditions',
          checked: false,
          size: 'default',
          callback: { name: 'onCheckboxChange' }
        }
      }),
      resetButtonObj: prop('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleLabel' } }
      }),
      toggleCheckedObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleChecked' } }
      }),
      togglePartialObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onTogglePartial' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDisabled' } }
      }),
      // All Variants tab objects
      varUncheckedObj: prop('object', {
        default: { label: 'Unchecked option', checked: false }
      }),
      varCheckedObj: prop('object', {
        default: { label: 'Checked option', checked: true }
      }),
      varPartialObj: prop('object', {
        default: { label: 'Partial selection', partial: true }
      }),
      varNoLabelObj: prop('object', {
        default: { checked: true }
      }),
      varSizeDefaultObj: prop('object', {
        default: { label: 'Default size', checked: true, size: 'default' }
      }),
      varSizeSmallObj: prop('object', {
        default: { label: 'Small size', checked: true, size: 'small' }
      }),
      varSizeExsmObj: prop('object', {
        default: { label: 'Extra-small', checked: true, size: 'extra-small' }
      }),
      varDisabledObj: prop('object', {
        default: { label: 'Disabled', disabled: true }
      }),
      varDisabledCheckedObj: prop('object', {
        default: { label: 'Disabled checked', checked: true, disabled: true }
      }),
      varDisabledPartialObj: prop('object', {
        default: { label: 'Disabled partial', partial: true, disabled: true }
      }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      newSlyteCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('checkboxObj', {
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

CheckboxComp._template = "<template tag-name=\"checkbox-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Checkbox</h1> <p class=\"zcat-page-desc\">Checkboxes allow users to select one or more items from a list, or toggle a single option on/off.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{checkboxObj}}\"></zcat-checkbox> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeCheckboxSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Checked toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Checked</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCheckedObj}}\"></zcat-toggle> </div> <!-- Partial toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Partial</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{togglePartialObj}}\"></zcat-toggle> </div> <!-- Disabled toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Unchecked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varUncheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Checked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varCheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Partial</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varPartialObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Without Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varNoLabelObj}}\"></zcat-checkbox> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeDefaultObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeSmallObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varSizeExsmObj}}\"></zcat-checkbox> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Disabled</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Unchecked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Checked</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledCheckedObj}}\"></zcat-checkbox> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Partial</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-checkbox self=\"{{self}}\" zcat-prop=\"{{varDisabledPartialObj}}\"></zcat-checkbox> </div> </div> </div> </div></template></template> </div> </template><style>/* checkbox-comp specific overrides if needed */\n</style>";;
CheckboxComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,7,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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

export { CheckboxComp };

CheckboxComp.register("checkbox-comp", {
  hash: "CheckboxComp_2",
  refHash: "C_zcat-app_app_0"
});

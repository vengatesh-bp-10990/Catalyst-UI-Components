import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-input.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class InputComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let inputObj = this.getData('inputObj') || {};
    let defaults = { id: 'input-id', type: 'text', width: '300px', size: 'default', placeholder: 'Enter a text', label: 'Label' };

    // --- sLyte tab: template + JS combined ---
    let inputData = {};
    inputData.id = inputObj.id || defaults.id;
    if (inputObj.type && inputObj.type !== defaults.type) { inputData.type = inputObj.type; }
    if (inputObj.width && inputObj.width !== defaults.width) { inputData.width = inputObj.width; }
    if (inputObj.size && inputObj.size !== defaults.size) { inputData.size = inputObj.size; }
    if (inputObj.placeholder && inputObj.placeholder !== defaults.placeholder) { inputData.placeholder = inputObj.placeholder; }
    if (inputObj.label) { inputData.label = inputObj.label; }
    if (inputObj.disabled) { inputData.disabled = true; }
    if (inputObj.errorMessage) { inputData.errorMessage = inputObj.errorMessage; }

    let slyte_code = '<zcat-input\n  self="{{self}}"\n  zcat-prop="{{inputObj}}"\n></zcat-input>';

    // 2. JS tab: data() code
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    inputObj: prop("object", {\n      default: ' + JSON.stringify(inputData, null, 6) + '\n    })\n  };\n}';

    // 3. sLyte New tab: attributes + self + inline callback
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    newSlyteAttrs.push('  zcat-prop-id="' + (inputObj.id || defaults.id) + '"');
    if (inputObj.label) { newSlyteAttrs.push('  zcat-prop-label="' + inputObj.label + '"'); }
    if (inputObj.type && inputObj.type !== defaults.type) { newSlyteAttrs.push('  zcat-prop-type="' + inputObj.type + '"'); }
    if (inputObj.placeholder) { newSlyteAttrs.push('  zcat-prop-placeholder="' + inputObj.placeholder + '"'); }
    if (inputObj.size && inputObj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + inputObj.size + '"'); }
    if (inputObj.width && inputObj.width !== defaults.width) { newSlyteAttrs.push('  zcat-prop-width="' + inputObj.width + '"'); }
    if (inputObj.disabled) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    if (inputObj.errorMessage) { newSlyteAttrs.push('  zcat-prop-errorMessage="' + inputObj.errorMessage + '"'); }
    newSlyteAttrs.push('  zcat-prop-callback-onValueChange="onInputChange"');

    let newSlyte_code = '// Template\n<zcat-input\n' + newSlyteAttrs.join('\n') + '\n></zcat-input>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onInputChange(value) {\n      console.log("Input changed:", value);\n    }\n  };\n}';

    // 4. HTML tab: plain HTML
    let isTextarea = (inputObj.type === 'textarea');
    let sizeClass = '';
    let size = inputObj.size || 'default';
    if (size === 'small') { sizeClass = ' zcat-input-sm'; }
    else if (size === 'extra-small') { sizeClass = ' zcat-input-exsm'; }

    let htmlParts = [];
    if (inputObj.label) {
      htmlParts.push('<label class="zcat-input-label">' + inputObj.label + '</label>');
    }
    let disabledAttr = inputObj.disabled ? ' disabled' : '';
    if (isTextarea) {
      htmlParts.push('<textarea class="zcat-input-el' + sizeClass + '"' +
        ' placeholder="' + (inputObj.placeholder || '') + '"' +
        ' style="width: ' + (inputObj.width || '300px') + '"' +
        disabledAttr + '></textarea>');
    } else {
      htmlParts.push('<input type="text" class="zcat-input-el' + sizeClass + '"' +
        ' placeholder="' + (inputObj.placeholder || '') + '"' +
        ' style="width: ' + (inputObj.width || '300px') + '"' +
        disabledAttr + ' />');
    }
    if (inputObj.errorMessage) {
      htmlParts.push('<span class="zcat-input-error">' + inputObj.errorMessage + '</span>');
    }
    let html_code = '<div class="zcat-input-wrapper">\n  ' + htmlParts.join('\n  ') + '\n</div>';

    // 5. CSS tab: relevant CSS classes
    let css_code = '.zcat-input-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n';
    if (inputObj.label) {
      css_code += '.zcat-input-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n  margin-bottom: 6px;\n}\n';
    }
    if (isTextarea) {
      css_code += 'textarea.zcat-input-el {\n  height: 80px;\n  padding: 10px 12px;\n  resize: vertical;\n  font-size: 14px;\n  background: var(--zcat-inputField-bg-default);\n  border: var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  color: var(--zcat-body-text-primary);\n}\n';
    } else {
      css_code += '.zcat-input-el {\n  height: 36px;\n  padding: 0 12px;\n  font-size: 14px;\n  background: var(--zcat-inputField-bg-default);\n  border: var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  color: var(--zcat-body-text-primary);\n}\n';
    }
    css_code += '.zcat-input-el:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: var(--zcat-inputField-border-hover);\n}\n';
    css_code += '.zcat-input-el:focus {\n  background: var(--zcat-inputField-bg-active);\n  border: var(--zcat-inputField-border-active);\n}\n';
    if (sizeClass) {
      let sizeMap = { ' zcat-input-sm': { h: '30px', fs: '13px', p: '0 10px' }, ' zcat-input-exsm': { h: '24px', fs: '12px', p: '0 8px' } };
      let s = sizeMap[sizeClass];
      if (s) { css_code += sizeClass.trim() + ' {\n  height: ' + s.h + ';\n  font-size: ' + s.fs + ';\n  padding: ' + s.p + ';\n}\n'; }
    }
    if (inputObj.errorMessage) {
      css_code += '.zcat-input-error-msg {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n  margin-top: 4px;\n}';
    }

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
      self: prop("object", { default: this }),
      inputObj: prop("object", { 
        default: {
          "id": "input-id", 
          "width": "300px",
          "label": "Label",
          "type": "text",
          "placeholder": "Enter a text",
          "size": "default"
        }
      }),
      varDefaultObj: prop('object', { default: { id: 'v-default', placeholder: 'Default size', width: '220px' } }),
      varSmallObj: prop('object', { default: { id: 'v-small', placeholder: 'Small size', size: 'small', width: '220px' } }),
      varExsmObj: prop('object', { default: { id: 'v-exsm', placeholder: 'Extra small', size: 'extra-small', width: '220px' } }),
      varLabelledObj: prop('object', { default: { id: 'v-labelled', label: 'Full Name', placeholder: 'Enter your name', width: '220px' } }),
      varTextareaObj: prop('object', { default: { id: 'v-textarea', label: 'Description', type: 'textarea', placeholder: 'Enter description', width: '220px' } }),
      varPasswordObj: prop('object', { default: { id: 'v-password', label: 'Password', type: 'password', placeholder: 'Enter password', width: '220px' } }),
      varDisabledObj: prop('object', { default: { id: 'v-disabled', label: 'Disabled Field', placeholder: 'Cannot edit', disabled: true, width: '220px' } }),
      varErrorObj: prop('object', { default: { id: 'v-error', label: 'Email', placeholder: 'Enter email', errorMessage: 'Invalid email address', width: '220px' } }),
      varReadonlyObj: prop('object', { default: { id: 'v-readonly', label: 'Username', value: 'john.doe', readonly: true, width: '220px' } }),
      resetButtonObj: prop('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetInputCustomization" }
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleLabel' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDisabled' } }
      }),
      toggleErrorObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleError' } }
      }),
      jsCodeSnippet: prop('object', { default: { code: "" } }),
      slyteCodeSnippet: prop('object', { default: { code: "" } }),
      newSlyteCodeSnippet: prop('object', { default: { code: "" } }),
      htmlCodeSnippet: prop('object', { default: { code: "" } }),
      cssCodeSnippet: prop('object', { default: { code: "" } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetInputCustomization() {
        this.setData('inputObj', {
          "id": "input-id",
          "width": "300px",
          "label": "Label",
          "type": "text",
          "placeholder": "Enter a text",
          "size": "default"
        });
        // Reset toggle prop objects
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleDisabledObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleErrorObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function(s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleLabel(checked) {
        let inputObj = this.getData('inputObj');
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'label', 'Label');
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'label');
        }
        this.constructCodeSnippet();
      },
      onToggleDisabled(checked) {
        let inputObj = this.getData('inputObj');
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'disabled', true);
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'disabled');
        }
        this.constructCodeSnippet();
      },
      onToggleError(checked) {
        let inputObj = this.getData('inputObj');
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'errorMessage', 'Sample error message');
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'errorMessage');
        }
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeInputType(e) {
        this.$app.objectUtils(this.getData('inputObj'), 'add', 'type', e.target.value);
        this.constructCodeSnippet();
      },
      changeInputSize(e) {
        this.$app.objectUtils(this.getData('inputObj'), 'add', 'size', e.target.value);
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

InputComp._template = "<template tag-name=\"input-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Text-box</h1> <p class=\"zcat-page-desc\">Text and TextArea input fields for collecting user data.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{inputObj}}\"></zcat-input> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select onchange=\"{{action('changeInputType',event)}}\" class=\"zcat-custom-select\"> <option value=\"text\">Text</option> <option value=\"textarea\">Textarea</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeInputSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Disabled toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <!-- Error toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varDefaultObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varSmallObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varExsmObj}}\"></zcat-input> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varLabelledObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Textarea</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varTextareaObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Password</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varPasswordObj}}\"></zcat-input> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varErrorObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Read-only</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varReadonlyObj}}\"></zcat-input> </div> </div> </div> </div></template></template></div> </template><style>/* input-comp demo styles are in utilities */\n</style>";;
InputComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

InputComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "inputObj",
  "varDefaultObj",
  "varSmallObj",
  "varExsmObj",
  "varLabelledObj",
  "varTextareaObj",
  "varPasswordObj",
  "varDisabledObj",
  "varErrorObj",
  "varReadonlyObj",
  "resetButtonObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { InputComp };

InputComp.register("input-comp", {
  hash: "InputComp_4",
  refHash: "C_zcat-app_app_0"
});
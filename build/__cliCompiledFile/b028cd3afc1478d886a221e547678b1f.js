import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-input.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

const ICON_OPTIONS = [
  'search','edit','plus','minus','close','tick','delete','copy',
  'eye-open','eye-close','upload-cloud','download-cloud','folder',
  'user','star','refresh','settings','notification','link','filter',
  'calendar','clock','phone','info','alert-circle','globe','edit-pencil'
];

class InputComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let inputObj = this.getData('inputObj') || {};

    // --- sLyte tab ---
    let slyte_code = '<zcat-input\n  self="{{self}}"\n  zcat-prop="{{inputObj}}"\n></zcat-input>';

    // --- JS tab: build minimal inputData showing only non-default values ---
    let inputData = { id: inputObj.id || 'input-id' };
    if (inputObj.type && inputObj.type !== 'text') { inputData.type = inputObj.type; }
    if (inputObj.size && inputObj.size !== 'default') { inputData.size = inputObj.size; }
    if (inputObj.placeholder) { inputData.placeholder = inputObj.placeholder; }
    if (inputObj.label) { inputData.label = inputObj.label; }
    if (inputObj.disabled) { inputData.disabled = true; }
    if (inputObj.readonly) { inputData.readonly = true; }
    if (inputObj.isOptional) { inputData.isOptional = true; }
    if (inputObj.errorMessage) { inputData.errorMessage = inputObj.errorMessage; }
    if (inputObj.iconLeft) { inputData.iconLeft = inputObj.iconLeft; }
    if (inputObj.iconRight) { inputData.iconRight = inputObj.iconRight; }
    if (inputObj.infoIcon) { inputData.infoIcon = inputObj.infoIcon; }

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    inputObj: prop("object", {\n      default: ' + JSON.stringify(inputData, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = ['  self="{{self}}"', '  zcat-prop-id="' + (inputObj.id || 'input-id') + '"'];
    if (inputObj.label) { newSlyteAttrs.push('  zcat-prop-label="' + inputObj.label + '"'); }
    if (inputObj.type && inputObj.type !== 'text') { newSlyteAttrs.push('  zcat-prop-type="' + inputObj.type + '"'); }
    if (inputObj.placeholder) { newSlyteAttrs.push('  zcat-prop-placeholder="' + inputObj.placeholder + '"'); }
    if (inputObj.size && inputObj.size !== 'default') { newSlyteAttrs.push('  zcat-prop-size="' + inputObj.size + '"'); }
    if (inputObj.disabled) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    if (inputObj.readonly) { newSlyteAttrs.push('  zcat-prop-readonly="true"'); }
    if (inputObj.isOptional) { newSlyteAttrs.push('  zcat-prop-is-optional="true"'); }
    if (inputObj.errorMessage) { newSlyteAttrs.push('  zcat-prop-error-message="' + inputObj.errorMessage + '"'); }
    if (inputObj.iconLeft) { newSlyteAttrs.push('  zcat-prop-icon-left-position="left"\n  zcat-prop-icon-left-name="' + inputObj.iconLeft.name + '"'); }
    if (inputObj.iconRight) { newSlyteAttrs.push('  zcat-prop-icon-right-position="right"\n  zcat-prop-icon-right-name="' + inputObj.iconRight.name + '"'); }
    newSlyteAttrs.push('  zcat-prop-callback-on-value-change="onInputChange"');
    let newSlyte_code = '// Template\n<zcat-input\n' + newSlyteAttrs.join('\n') + '\n></zcat-input>\n\n'
      + '// JS — callback\nstatic methods() {\n  return {\n    onInputChange(value) {\n      console.log("Input changed:", value);\n    }\n  };\n}';

    // --- HTML tab ---
    let isTextarea = (inputObj.type === 'textarea');
    let sizeClass = inputObj.size === 'small' ? ' zcat-input-sm' : inputObj.size === 'extra-small' ? ' zcat-input-exsm' : '';
    let disabledAttr = inputObj.disabled ? ' disabled' : '';
    let readonlyAttr = inputObj.readonly ? ' readonly' : '';
    let htmlParts = [];
    if (inputObj.label) {
      let optLabel = inputObj.isOptional ? ' <span class="optional-label">(Optional)</span>' : '';
      htmlParts.push('<label class="zcat-input-label">' + inputObj.label + optLabel + '</label>');
    }
    if (inputObj.iconLeft || inputObj.iconRight) {
      let iconLeftHtml = inputObj.iconLeft ? '\n  <span class="zcat-input-icon-left"><!-- ' + inputObj.iconLeft.name + ' icon --></span>' : '';
      let iconRightHtml = inputObj.iconRight ? '\n  <span class="zcat-input-icon-right"><!-- ' + inputObj.iconRight.name + ' icon --></span>' : '';
      if (isTextarea) {
        htmlParts.push('<div class="zcat-input-relative-wrapper">' + iconLeftHtml + '\n  <textarea class="zcat-input-el' + sizeClass + '" placeholder="' + (inputObj.placeholder || '') + '"' + disabledAttr + readonlyAttr + '></textarea>' + iconRightHtml + '\n</div>');
      } else {
        htmlParts.push('<div class="zcat-input-relative-wrapper">' + iconLeftHtml + '\n  <input type="' + (inputObj.type || 'text') + '" class="zcat-input-el' + sizeClass + '" placeholder="' + (inputObj.placeholder || '') + '"' + disabledAttr + readonlyAttr + ' />' + iconRightHtml + '\n</div>');
      }
    } else {
      if (isTextarea) {
        htmlParts.push('<textarea class="zcat-input-el' + sizeClass + '" placeholder="' + (inputObj.placeholder || '') + '"' + disabledAttr + readonlyAttr + '></textarea>');
      } else {
        htmlParts.push('<input type="' + (inputObj.type || 'text') + '" class="zcat-input-el' + sizeClass + '" placeholder="' + (inputObj.placeholder || '') + '"' + disabledAttr + readonlyAttr + ' />');
      }
    }
    if (inputObj.errorMessage) { htmlParts.push('<span class="zcat-input-error-msg">' + inputObj.errorMessage + '</span>'); }
    let html_code = '<div class="zcat-input-wrapper">\n  ' + htmlParts.join('\n  ') + '\n</div>';

    // --- CSS tab ---
    let css_code = '.zcat-input-wrapper { display: flex; flex-direction: column; gap: 4px; }\n';
    if (inputObj.label) { css_code += '.zcat-input-label { font-size: 13px; font-weight: 500; color: var(--zcat-inputField-text-label); }\n'; }
    css_code += '.zcat-input-el { height: 36px; padding: 0 12px; font-size: 14px;\n  background: var(--zcat-inputField-bg-default);\n  border: var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  color: var(--zcat-body-text-primary);\n}\n';
    css_code += '.zcat-input-el:hover { background: var(--zcat-inputField-bg-hover); border: var(--zcat-inputField-border-hover); }\n';
    css_code += '.zcat-input-el:focus { background: var(--zcat-inputField-bg-active); border: var(--zcat-inputField-border-active); }\n';
    if (inputObj.errorMessage) { css_code += '.zcat-input-error-msg { font-size: 12px; color: var(--zcat-inputField-text-error); }\n'; }

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
          "width": "100%",
          "label": "Label",
          "type": "text",
          "placeholder": "Enter a text",
          "size": "default"
        }
      }),
      iconOptions: prop('array', { default: ICON_OPTIONS }),
      showInfoIconRow: prop('boolean', { default: false }),
      showIconLeftRow: prop('boolean', { default: false }),
      showIconRightRow: prop('boolean', { default: false }),
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
      toggleInfoIconObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleInfoIcon' } }
      }),
      toggleIconLeftObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleIconLeft' } }
      }),
      toggleIconRightObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleIconRight' } }
      }),
      toggleOptionalObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleOptional' } }
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
          "width": "100%",
          "label": "Label",
          "type": "text",
          "placeholder": "Enter a text",
          "size": "default"
        });
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleInfoIconObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleIconLeftObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleIconRightObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleOptionalObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleErrorObj'), 'add', 'checked', false);
        this.setData('showInfoIconRow', false);
        this.setData('showIconLeftRow', false);
        this.setData('showIconRightRow', false);
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
      onToggleInfoIcon(checked) {
        let inputObj = this.getData('inputObj');
        this.setData('showInfoIconRow', checked);
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'infoIcon', {
            id: inputObj.id + '-info',
            value: 'Field information tooltip',
            placement: 'auto'
          });
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'infoIcon');
        }
        this.constructCodeSnippet();
      },
      onToggleIconLeft(checked) {
        let inputObj = this.getData('inputObj');
        this.setData('showIconLeftRow', checked);
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'iconLeft', { position: 'left', name: 'search', strokeWidth: 1.3 });
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'iconLeft');
        }
        this.constructCodeSnippet();
      },
      onToggleIconRight(checked) {
        let inputObj = this.getData('inputObj');
        this.setData('showIconRightRow', checked);
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'iconRight', { position: 'right', name: 'edit', strokeWidth: 1.3 });
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'iconRight');
        }
        this.constructCodeSnippet();
      },
      onToggleOptional(checked) {
        let inputObj = this.getData('inputObj');
        if (checked) {
          this.$app.objectUtils(inputObj, 'add', 'isOptional', true);
        } else {
          this.$app.objectUtils(inputObj, 'delete', 'isOptional');
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
      changeInputVariant(e) {
        this.$app.objectUtils(this.getData('inputObj'), 'add', 'type', e.target.value);
        this.constructCodeSnippet();
      },
      changeInputSize(e) {
        this.$app.objectUtils(this.getData('inputObj'), 'add', 'size', e.target.value);
        this.constructCodeSnippet();
      },
      changeTooltipPlacement(e) {
        let inputObj = this.getData('inputObj');
        if (inputObj.infoIcon) {
          this.$app.objectUtils(inputObj.infoIcon, 'add', 'placement', e.target.value);
        }
        this.constructCodeSnippet();
      },
      changeIconLeft(e) {
        let inputObj = this.getData('inputObj');
        if (inputObj.iconLeft) {
          this.$app.objectUtils(inputObj.iconLeft, 'add', 'name', e.target.value);
        }
        this.constructCodeSnippet();
      },
      changeIconRight(e) {
        let inputObj = this.getData('inputObj');
        if (inputObj.iconRight) {
          this.$app.objectUtils(inputObj.iconRight, 'add', 'name', e.target.value);
        }
        this.constructCodeSnippet();
      },
      changeInputState(e) {
        let inputObj = this.getData('inputObj');
        let state = e.target.value;
        this.$app.objectUtils(inputObj, 'delete', 'disabled');
        this.$app.objectUtils(inputObj, 'delete', 'readonly');
        if (state === 'disabled') { this.$app.objectUtils(inputObj, 'add', 'disabled', true); }
        else if (state === 'readonly') { this.$app.objectUtils(inputObj, 'add', 'readonly', true); }
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

InputComp._template = "<template tag-name=\"input-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Text-box</h1> <p class=\"zcat-page-desc\">Text and TextArea input fields for collecting user data.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{inputObj}}\"></zcat-input> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Variant (type) --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select onchange=\"{{action('changeInputVariant',event)}}\" class=\"zcat-custom-select\"> <option value=\"text\">Text</option> <option value=\"textarea\">Textarea</option> <option value=\"password\">Password</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeInputSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Label with Info Icon --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label with Info Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleInfoIconObj}}\"></zcat-toggle> </div> <!-- Tooltip Placement — shown only when Info Icon is ON --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{showInfoIconRow}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Tooltip Placement</span> <select onchange=\"{{action('changeTooltipPlacement',event)}}\" class=\"zcat-custom-select\"> <option value=\"auto\">Auto</option> <option value=\"top\">Top</option> <option value=\"bottom\">Bottom</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div></template></template><!-- Icon Left --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Left</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleIconLeftObj}}\"></zcat-toggle> </div> <!-- Change Icon Left — shown only when Icon Left is ON --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{showIconLeftRow}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Change Icon</span> <select onchange=\"{{action('changeIconLeft',event)}}\" class=\"zcat-custom-select\"> <option is=\"for\" lyte-for=\"true\" items=\"{{iconOptions}}\" item=\"icon\" index=\"index\" _new=\"true\"></option> </select> </div></template></template><!-- Icon Right --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Right</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleIconRightObj}}\"></zcat-toggle> </div> <!-- Change Icon Right — shown only when Icon Right is ON --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{showIconRightRow}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Change Icon</span> <select onchange=\"{{action('changeIconRight',event)}}\" class=\"zcat-custom-select\"> <option is=\"for\" lyte-for=\"true\" items=\"{{iconOptions}}\" item=\"icon\" index=\"index\" _new=\"true\"></option> </select> </div></template></template><!-- Optional --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Optional</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleOptionalObj}}\"></zcat-toggle> </div> <!-- Input State --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Input State</span> <select onchange=\"{{action('changeInputState',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"disabled\">Disabled</option> <option value=\"readonly\">Read-only</option> </select> </div> <!-- Show Error --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varDefaultObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varSmallObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varExsmObj}}\"></zcat-input> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varLabelledObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Textarea</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varTextareaObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Password</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varPasswordObj}}\"></zcat-input> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varErrorObj}}\"></zcat-input> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Read-only</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{varReadonlyObj}}\"></zcat-input> </div> </div> </div> </div></template></template></div> </template><style>/* input-comp demo styles are in utilities */\n</style>";;
InputComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":16,"sibl":[15],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":15,"sibl":[14],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":14,"sibl":[13],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":13,"sibl":[12],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":12,"sibl":[11],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,7,3,19],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,22,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,22,3],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,7,3,26],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1],"cn":"lc_id_0"},{"t":"f","p":[0,3,1],"dN":[{"t":"a","p":[0]},{"t":"tX","p":[0,0]}],"actualTemplate":"<template is=\"for\"><option value=\"{{icon}}\">{{icon}}</option></template>","cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,29,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,29,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,7,3,33],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1],"cn":"lc_id_0"},{"t":"f","p":[0,3,1],"dN":[{"t":"a","p":[0]},{"t":"tX","p":[0,0]}],"actualTemplate":"<template is=\"for\"><option value=\"{{icon}}\">{{icon}}</option></template>","cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,36,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,36,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,40,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,44,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,44,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[16,10,9,8,7,5,3,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

InputComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "inputObj",
  "iconOptions",
  "showInfoIconRow",
  "showIconLeftRow",
  "showIconRightRow",
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
  "toggleInfoIconObj",
  "toggleIconLeftObj",
  "toggleIconRightObj",
  "toggleOptionalObj",
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
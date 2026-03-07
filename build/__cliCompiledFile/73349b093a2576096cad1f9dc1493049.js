import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-radio.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class RadioComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let radioObj = this.getData('radioObj') || {};
    let defaults = { variant: 'primary', size: 'default', direction: 'vertical', name: 'demo-radio' };

    // --- sLyte tab ---
    let slyte_code = '<zcat-radio\n  self="{{self}}"\n  zcat-prop="{{radioObj}}"\n></zcat-radio>';

    // --- JS tab ---
    let propObj = {};
    propObj.name = radioObj.name || defaults.name;
    if (radioObj.variant && radioObj.variant !== defaults.variant) { propObj.variant = radioObj.variant; }
    if (radioObj.size && radioObj.size !== defaults.size) { propObj.size = radioObj.size; }
    if (radioObj.direction && radioObj.direction !== defaults.direction) { propObj.direction = radioObj.direction; }
    if (radioObj.label) { propObj.label = radioObj.label; }
    if (radioObj.disabled) { propObj.disabled = true; }
    if (radioObj.selected) { propObj.selected = radioObj.selected; }
    propObj.options = radioObj.options || [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' }
    ];

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    radioObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    if (radioObj.name) { newSlyteAttrs.push('  zcat-prop-name="' + radioObj.name + '"'); }
    if (radioObj.variant && radioObj.variant !== defaults.variant) { newSlyteAttrs.push('  zcat-prop-variant="' + radioObj.variant + '"'); }
    if (radioObj.size && radioObj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + radioObj.size + '"'); }
    if (radioObj.direction && radioObj.direction !== defaults.direction) { newSlyteAttrs.push('  zcat-prop-direction="' + radioObj.direction + '"'); }
    if (radioObj.label) { newSlyteAttrs.push('  zcat-prop-label="' + radioObj.label + '"'); }
    if (radioObj.disabled) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    newSlyteAttrs.push('  zcat-prop-callback-name="onRadioChange"');

    let newSlyte_code = '// Template\n<zcat-radio\n' + newSlyteAttrs.join('\n') + '\n></zcat-radio>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onRadioChange(value, prop) {\n      console.log("Selected:", value);\n    }\n  };\n}';

    // --- HTML tab ---
    let variant = radioObj.variant || 'primary';
    let size = radioObj.size || 'default';
    let direction = radioObj.direction || 'vertical';
    let options = radioObj.options || [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' }
    ];

    let groupClasses = ['zcat-radio-group', 'zcat-radio-' + variant];
    if (size === 'small') { groupClasses.push('zcat-radio-sm'); }
    else if (size === 'extra-small') { groupClasses.push('zcat-radio-exsm'); }
    if (direction === 'horizontal') { groupClasses.push('zcat-radio-horizontal'); }

    let labelHtml = '';
    if (radioObj.label) {
      labelHtml = '  <span class="zcat-radio-group-label">' + radioObj.label + '</span>\n';
    }

    let optionsHtml = options.map(function(opt) {
      let checked = radioObj.selected === opt.value ? ' checked' : '';
      let disabled = opt.disabled ? ' disabled' : '';
      let itemHtml = '    <label class="zcat-radio-wrap">\n';
      itemHtml += '      <input type="radio" name="' + (radioObj.name || 'demo-radio') + '" value="' + opt.value + '"' + checked + disabled + '/>\n';
      itemHtml += '      <span class="zcat-radio-circle"><span class="zcat-radio-dot"></span></span>\n';
      if (variant === 'secondary' && opt.desc) {
        itemHtml += '      <div class="zcat-radio-content">\n';
        itemHtml += '        <span class="zcat-radio-label">' + opt.label + '</span>\n';
        itemHtml += '        <span class="zcat-radio-desc">' + opt.desc + '</span>\n';
        itemHtml += '      </div>\n';
      } else {
        itemHtml += '      <span class="zcat-radio-label">' + opt.label + '</span>\n';
      }
      itemHtml += '    </label>';
      return itemHtml;
    }).join('\n');

    let html_code = '<div class="' + groupClasses.join(' ') + '">\n' + labelHtml + '  <div class="zcat-radio-options">\n' + optionsHtml + '\n  </div>\n</div>';

    // --- CSS tab ---
    let css_code = '.zcat-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n';
    css_code += '.zcat-radio-wrap {\n  display: inline-flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n}\n\n';
    css_code += '.zcat-radio-circle {\n  width: 18px;\n  height: 18px;\n  border: 1.5px solid var(--zcat-body-border);\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n';
    css_code += '.zcat-radio-circle.checked {\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n\n';
    css_code += '.zcat-radio-circle.checked .zcat-radio-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--zcat-btn-fill-bg-primary-default);\n}';

    if (variant === 'secondary') {
      css_code += '\n\n/* Secondary (card) variant */\n';
      css_code += '.zcat-radio-secondary .zcat-radio-wrap {\n  padding: 12px 14px;\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 8px;\n  background: var(--zcat-inputField-bg-default);\n}\n';
      css_code += '.zcat-radio-secondary .zcat-radio-wrap.zcat-radio-selected {\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n  box-shadow: 0 0 0 1px var(--zcat-btn-fill-bg-primary-default);\n}';
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
      self: prop('object', { default: this }),
      radioObj: prop('object', {
        default: {
          name: 'demo-radio',
          variant: 'primary',
          size: 'default',
          direction: 'vertical',
          selected: 'a',
          options: [
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' }
          ]
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
        default: { checked: false, size: 'small', callback: { name: 'onToggleLabel' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDisabled' } }
      }),
      // All Variants tab objects
      variantPrimaryObj: prop('object', {
        default: {
          name: 'v-primary', variant: 'primary', selected: 'a',
          options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }, { label: 'Option C', value: 'c' }]
        }
      }),
      variantHorizontalObj: prop('object', {
        default: {
          name: 'v-horizontal', variant: 'primary', direction: 'horizontal', selected: 'b',
          options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }, { label: 'Option C', value: 'c' }]
        }
      }),
      variantLabelObj: prop('object', {
        default: {
          name: 'v-label', variant: 'primary', label: 'Choose an option', selected: 'a',
          options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }, { label: 'Option C', value: 'c' }]
        }
      }),
      variantSecondaryObj: prop('object', {
        default: {
          name: 'v-secondary', variant: 'secondary', selected: 'basic',
          options: [{ label: 'Basic Plan', value: 'basic' }, { label: 'Pro Plan', value: 'pro' }, { label: 'Enterprise', value: 'enterprise' }]
        }
      }),
      variantSecondaryDescObj: prop('object', {
        default: {
          name: 'v-secondary-desc', variant: 'secondary', selected: 'standard',
          options: [
            { label: 'Standard', value: 'standard', desc: 'Best for small teams and startups' },
            { label: 'Professional', value: 'professional', desc: 'Advanced features for growing businesses' },
            { label: 'Enterprise', value: 'enterprise', desc: 'Custom solutions for large organizations' }
          ]
        }
      }),
      variantSizeDefaultObj: prop('object', {
        default: {
          name: 'v-size-default', selected: 'a',
          options: [{ label: 'Default size', value: 'a' }, { label: 'Option B', value: 'b' }]
        }
      }),
      variantSizeSmallObj: prop('object', {
        default: {
          name: 'v-size-sm', size: 'small', selected: 'a',
          options: [{ label: 'Small size', value: 'a' }, { label: 'Option B', value: 'b' }]
        }
      }),
      variantSizeExsmObj: prop('object', {
        default: {
          name: 'v-size-exsm', size: 'extra-small', selected: 'a',
          options: [{ label: 'Extra-small', value: 'a' }, { label: 'Option B', value: 'b' }]
        }
      }),
      variantDisabledObj: prop('object', {
        default: {
          name: 'v-disabled', disabled: true, selected: 'a',
          options: [{ label: 'Disabled A', value: 'a' }, { label: 'Disabled B', value: 'b' }]
        }
      }),
      variantPreselectedObj: prop('object', {
        default: {
          name: 'v-preselected', selected: 'b',
          options: [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }, { label: 'Option C', value: 'c' }]
        }
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
        this.setData('radioObj', {
          name: 'demo-radio',
          variant: 'primary',
          size: 'default',
          direction: 'vertical',
          selected: 'a',
          options: [
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' }
          ]
        });
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleDisabledObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleLabel(checked) {
        let radioObj = this.getData('radioObj');
        if (checked) {
          this.$app.objectUtils(radioObj, 'add', 'label', 'Choose an option');
        } else {
          this.$app.objectUtils(radioObj, 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      onToggleDisabled(checked) {
        let radioObj = this.getData('radioObj');
        this.$app.objectUtils(radioObj, 'add', 'disabled', checked);
        this.constructCodeSnippet();
      },
      onRadioChange(value, prop) {
        // Demo callback - no-op for docs
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeRadioVariant(e) {
        this.$app.objectUtils(this.getData('radioObj'), 'add', 'variant', e.target.value);
        this.constructCodeSnippet();
      },
      changeRadioSize(e) {
        this.$app.objectUtils(this.getData('radioObj'), 'add', 'size', e.target.value);
        this.constructCodeSnippet();
      },
      changeRadioDirection(e) {
        this.$app.objectUtils(this.getData('radioObj'), 'add', 'direction', e.target.value);
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

RadioComp._template = "<template tag-name=\"radio-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Radio</h1> <p class=\"zcat-page-desc\">Radio buttons let users choose exactly one option from a set of mutually exclusive choices.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{radioObj}}\"></zcat-radio> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Variant --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select onchange=\"{{action('changeRadioVariant',event)}}\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeRadioSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Direction --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Direction</span> <select onchange=\"{{action('changeRadioDirection',event)}}\" class=\"zcat-custom-select\"> <option value=\"vertical\">Vertical</option> <option value=\"horizontal\">Horizontal</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Group Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Disabled toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Primary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantPrimaryObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Horizontal</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantHorizontalObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantLabelObj}}\"></zcat-radio> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Secondary Variant (Card)</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Card Style</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantSecondaryObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantSecondaryDescObj}}\"></zcat-radio> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantSizeDefaultObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantSizeSmallObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantSizeExsmObj}}\"></zcat-radio> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantDisabledObj}}\"></zcat-radio> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Pre-selected</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-radio self=\"{{self}}\" zcat-prop=\"{{variantPreselectedObj}}\"></zcat-radio> </div> </div> </div> </div></template></template></div> </template><style>/* radio-comp specific overrides if needed */\n</style>";;
RadioComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,15,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

RadioComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "radioObj",
  "resetButtonObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "variantPrimaryObj",
  "variantHorizontalObj",
  "variantLabelObj",
  "variantSecondaryObj",
  "variantSecondaryDescObj",
  "variantSizeDefaultObj",
  "variantSizeSmallObj",
  "variantSizeExsmObj",
  "variantDisabledObj",
  "variantPreselectedObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { RadioComp };

RadioComp.register("radio-comp", {
  hash: "RadioComp_4",
  refHash: "C_zcat-app_app_0"
});

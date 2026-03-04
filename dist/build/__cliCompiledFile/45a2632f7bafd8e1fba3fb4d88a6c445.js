import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ToggleComp extends Component {
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

    let sizeSelect = node.querySelector('[data-action="changeToggleSize"]');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('toggleObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let obj = this.getData('toggleObj') || {};
    let defaults = { size: 'default' };

    // --- sLyte tab ---
    let slyte_code = '<zcat-toggle\n  self="{{self}}"\n  zcat-prop="{{toggleObj}}"\n></zcat-toggle>';

    // --- JS tab ---
    let propObj = {};
    if (obj.label) { propObj.label = obj.label; }
    if (obj.size && obj.size !== defaults.size) { propObj.size = obj.size; }
    if (obj.checked) { propObj.checked = true; }
    if (obj.disabled) { propObj.disabled = true; }
    propObj.callback = { name: 'onToggleChange' };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    toggleObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    if (obj.label) { newSlyteAttrs.push('  zcat-prop-label="' + obj.label + '"'); }
    if (obj.size && obj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + obj.size + '"'); }
    if (obj.checked) { newSlyteAttrs.push('  zcat-prop-checked="true"'); }
    if (obj.disabled) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    newSlyteAttrs.push('  zcat-prop-callback-name="onToggleChange"');

    let newSlyte_code = '// Template\n<zcat-toggle\n' + newSlyteAttrs.join('\n') + '\n></zcat-toggle>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onToggleChange(checked, prop) {\n      console.log("Toggled:", checked);\n    }\n  };\n}';

    // --- HTML tab ---
    let size = obj.size || 'default';
    let wrapClasses = ['zcat-toggle-wrap'];
    if (size === 'small') { wrapClasses.push('zcat-toggle-sm'); }
    else if (size === 'extra-small') { wrapClasses.push('zcat-toggle-exsm'); }
    if (obj.disabled) { wrapClasses.push('zcat-toggle-disabled'); }

    let trackChecked = obj.checked ? ' checked' : '';

    let html_code = '<label class="' + wrapClasses.join(' ') + '">\n';
    html_code += '  <span class="zcat-toggle-track' + trackChecked + '">\n';
    html_code += '    <span class="zcat-toggle-thumb"></span>\n';
    html_code += '  </span>\n';
    if (obj.label) {
      html_code += '  <span class="zcat-toggle-label">' + obj.label + '</span>\n';
    }
    html_code += '  <input type="checkbox" class="zcat-toggle-input"' + (obj.checked ? ' checked' : '') + (obj.disabled ? ' disabled' : '') + '/>\n';
    html_code += '</label>';

    // --- CSS tab ---
    let css_code = '.zcat-toggle-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n}\n\n';
    css_code += '.zcat-toggle-track {\n  width: 28px;\n  height: 18px;\n  border: 1px solid var(--zcat-checkbox-border-default);\n  border-radius: 25px;\n  background: var(--zcat-toggle-bg-default);\n  position: relative;\n}\n\n';
    css_code += '.zcat-toggle-thumb {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-toggle-inner-default);\n  position: absolute;\n  left: 1px;\n  top: 0; bottom: 0;\n  margin: auto;\n  transition: left 150ms ease-in-out;\n}\n\n';
    css_code += '.zcat-toggle-track.checked {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n\n';
    css_code += '.zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 15px);\n  background: var(--zcat-toggle-inner-active);\n}';

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
      toggleObj: prop('object', {
        default: {
          label: 'Enable notifications',
          checked: false,
          size: 'default',
          callback: { name: 'onToggleDemo' }
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
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDisabled' } }
      }),
      // All Variants tab objects
      varOffObj: prop('object', {
        default: { label: 'Off state', checked: false }
      }),
      varOnObj: prop('object', {
        default: { label: 'On state', checked: true }
      }),
      varLabelObj: prop('object', {
        default: { label: 'With label text', checked: true }
      }),
      varNoLabelObj: prop('object', {
        default: { checked: true }
      }),
      varSizeDefaultObj: prop('object', {
        default: { label: 'Default', checked: true, size: 'default' }
      }),
      varSizeSmallObj: prop('object', {
        default: { label: 'Small', checked: true, size: 'small' }
      }),
      varSizeExsmObj: prop('object', {
        default: { label: 'Extra-small', checked: true, size: 'extra-small' }
      }),
      varDisabledOffObj: prop('object', {
        default: { label: 'Disabled off', disabled: true }
      }),
      varDisabledOnObj: prop('object', {
        default: { label: 'Disabled on', checked: true, disabled: true }
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
        this.setData('toggleObj', {
          label: 'Enable notifications',
          checked: false,
          size: 'default',
          callback: { name: 'onToggleDemo' }
        });
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleDisabledObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleLabel(checked) {
        let obj = this.getData('toggleObj');
        if (checked) {
          this.$app.objectUtils(obj, 'add', 'label', 'Enable notifications');
        } else {
          this.$app.objectUtils(obj, 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      onToggleDisabled(checked) {
        let obj = this.getData('toggleObj');
        this.$app.objectUtils(obj, 'add', 'disabled', checked);
        this.constructCodeSnippet();
      },
      onToggleDemo(checked, prop) {
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

ToggleComp._template = "<template tag-name=\"toggle-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Toggle</h1> <p class=\"zcat-page-desc\">Toggle switches allow users to turn a single option on or off instantly, providing clear visual feedback of state.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleObj}}\"></zcat-toggle> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeToggleSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Disabled toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Off</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varOffObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">On</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varOnObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varLabelObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Without Label</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varNoLabelObj}}\"></zcat-toggle> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varSizeDefaultObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varSizeSmallObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varSizeExsmObj}}\"></zcat-toggle> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Disabled</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled Off</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varDisabledOffObj}}\"></zcat-toggle> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled On</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{varDisabledOnObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> </div> </template><style>/* toggle-comp specific overrides if needed */\n</style>";;
ToggleComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,7,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

ToggleComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "toggleObj",
  "resetButtonObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "varOffObj",
  "varOnObj",
  "varLabelObj",
  "varNoLabelObj",
  "varSizeDefaultObj",
  "varSizeSmallObj",
  "varSizeExsmObj",
  "varDisabledOffObj",
  "varDisabledOnObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { ToggleComp };

ToggleComp.register("toggle-comp", {
  hash: "ToggleComp_2",
  refHash: "C_zcat-app_app_0"
});

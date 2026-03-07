import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-attention.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class AttentionComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let attentionObj = this.getData('attentionObj') || {};
    let type = attentionObj.type || 'default';

    // --- sLyte tab ---
    let slyte_code = '<zcat-attention\n  self="{{self}}"\n  zcat-prop="{{attentionObj}}"\n></zcat-attention>';

    // --- JS tab ---
    let propObj = { name: attentionObj.name || 'Notice heading' };
    if (type !== 'default') { propObj.type = type; }
    if (attentionObj.desc) { propObj.desc = attentionObj.desc; }
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    attentionObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    newSlyteAttrs.push('  zcat-prop-name="' + (attentionObj.name || 'Notice heading') + '"');
    if (type !== 'default') { newSlyteAttrs.push('  zcat-prop-type="' + type + '"'); }
    if (attentionObj.desc) { newSlyteAttrs.push('  zcat-prop-desc="' + attentionObj.desc + '"'); }
    let newSlyte_code = '// Template\n<zcat-attention\n' + newSlyteAttrs.join('\n') + '\n></zcat-attention>';

    // --- HTML tab ---
    let containerClass = 'zcat-attention-container zcat-atten-' + type;
    let headClass = attentionObj.desc ? 'zcat-attention-head zcat-attention-head-bold' : 'zcat-attention-head';
    let descHtml = attentionObj.desc ? '\n    <span class="zcat-attention-desc">' + attentionObj.desc + '</span>' : '';

    let iconName = 'info';
    if (type === 'success') { iconName = 'alert-success'; }
    else if (type === 'danger') { iconName = 'alert-danger'; }
    else if (type === 'warning') { iconName = 'alert-warning'; }

    let html_code = '<div class="' + containerClass + '">\n'
      + '  <div class="zcat-attention-inner">\n'
      + '    <div class="zcat-attention-icon-wrap">\n'
      + '      <zcat-icon name="' + iconName + '" width="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n'
      + '    </div>\n'
      + '    <div class="zcat-attention-text">\n'
      + '      <span class="' + headClass + '">' + (attentionObj.name || 'Notice heading') + '</span>'
      + descHtml + '\n'
      + '    </div>\n'
      + '  </div>\n'
      + '</div>';

    // --- CSS tab ---
    let tokenPrefix = type === 'default' ? '--zcat-attention-default' : '--zcat-alerts-' + type;
    let css_code = '.' + containerClass.split(' ').pop() + ' {\n  border: 1px solid var(' + tokenPrefix + '-border);\n  background: var(' + tokenPrefix + '-bg);\n}\n\n';
    css_code += '.zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(' + tokenPrefix + '-text-primary);\n}\n\n';
    css_code += '.zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(' + tokenPrefix + '-text-secondary);\n}';

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
      attentionObj: prop('object', {
        default: {
          name: 'This field is required before submission.',
          type: 'default'
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
      toggleDescObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDesc' } }
      }),
      // --- Type Variant objects ---
      variantDefaultObj: prop('object', {
        default: { type: 'default', name: 'Default notice — general information.', desc: 'This is a neutral attention banner for general guidance.' }
      }),
      variantInfoObj: prop('object', {
        default: { type: 'info', name: 'Info notice — helpful tip.', desc: 'You can use keyboard shortcuts to speed up your workflow.' }
      }),
      variantSuccessObj: prop('object', {
        default: { type: 'success', name: 'Success notice — action completed.', desc: 'Your changes have been saved successfully.' }
      }),
      variantDangerObj: prop('object', {
        default: { type: 'danger', name: 'Danger notice — critical alert.', desc: 'This action is irreversible. Please proceed with caution.' }
      }),
      variantWarningObj: prop('object', {
        default: { type: 'warning', name: 'Warning notice — heads up.', desc: 'Your session will expire in 5 minutes. Save your work.' }
      }),
      // --- Content Variant objects ---
      variantHeadOnlyObj: prop('object', {
        default: { name: 'This field is required before submission.' }
      }),
      variantWithDescObj: prop('object', {
        default: { name: 'Important Notice', desc: 'Please review the changes carefully before saving. Unsaved progress will be lost.' }
      }),
      variantLongObj: prop('object', {
        default: { type: 'info', name: 'System Maintenance', desc: 'The platform will undergo scheduled maintenance on Saturday from 2:00 AM to 6:00 AM UTC. During this time, some features may be unavailable.' }
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
        this.setData('attentionObj', {
          name: 'This field is required before submission.',
          type: 'default'
        });
        this.$app.objectUtils(this.getData('toggleDescObj'), 'add', 'checked', false);
        let typeSelect = this.$node.querySelector('[data-action="changeAttentionType"]');
        if (typeSelect) { typeSelect.selectedIndex = 0; }
        let headingInput = this.$node.querySelector('[data-action="changeAttentionHeading"]');
        if (headingInput) { headingInput.value = 'This field is required before submission.'; }
        this.constructCodeSnippet();
      },
      onToggleDesc(checked) {
        let attentionObj = this.getData('attentionObj');
        if (checked) {
          this.$app.objectUtils(attentionObj, 'add', 'desc', 'Additional context or details about the notice go here.');
        } else {
          this.$app.objectUtils(attentionObj, 'add', 'desc', '');
        }
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeAttentionType(e) {
        this.$app.objectUtils(this.getData('attentionObj'), 'add', 'type', e.target.value);
        this.constructCodeSnippet();
      },
      changeAttentionHeading(e) {
        this.$app.objectUtils(this.getData('attentionObj'), 'add', 'name', e.target.value);
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
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

AttentionComp._template = "<template tag-name=\"attention-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Attention</h1> <p class=\"zcat-page-desc\">Attention banners are inline notices that provide contextual information, tips, or guidance within a page section. Available in Default, Info, Success, Danger and Warning types.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:20px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{attentionObj}}\"></zcat-attention> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select onchange=\"{{action('changeAttentionType',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"info\">Info</option> <option value=\"success\">Success</option> <option value=\"danger\">Danger</option> <option value=\"warning\">Warning</option> </select> </div> <!-- Heading Text --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Heading</span> <input type=\"text\" oninput=\"{{action('changeAttentionHeading',event)}}\" class=\"zcat-custom-input\" value=\"{{attentionObj.name}}\" placeholder=\"Heading text\"> </div> <!-- Description toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Description</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDescObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Type Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantInfoObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantSuccessObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Danger</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantDangerObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantWarningObj}}\"></zcat-attention> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Content Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Heading Only</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantHeadOnlyObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantWithDescObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Long Content</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantLongObj}}\"></zcat-attention> </div> </div> </div> </div></template></template></div> </template><style>/* attention-comp doc page — no extra styles needed, uses layout-comp shared classes */\n</style>";;
AttentionComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

AttentionComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "attentionObj",
  "resetButtonObj",
  "toggleDescObj",
  "variantDefaultObj",
  "variantInfoObj",
  "variantSuccessObj",
  "variantDangerObj",
  "variantWarningObj",
  "variantHeadOnlyObj",
  "variantWithDescObj",
  "variantLongObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { AttentionComp };

AttentionComp.register("attention-comp", {
  hash: "AttentionComp_4",
  refHash: "C_zcat-app_app_0"
});

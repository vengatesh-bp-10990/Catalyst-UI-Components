import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-double-field.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class DoublefieldComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('doublefieldObj') || {};

    let slyte_code = '<zcat-double-field\n  self="{{self}}"\n  zcat-prop="{{doublefieldObj}}"\n></zcat-double-field>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    doublefieldObj: prop("object", {\n      default: {\n        label: "Phone Number",\n        fields: [\n          { type: "dropdown", width: "100px", props: { placeholder: "+1", options: [...] } },\n          { type: "input", props: { placeholder: "Phone number" } }\n        ]\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-doublefield-wrapper">\n  <label class="zcat-doublefield-label">Phone Number</label>\n  <div class="zcat-doublefield-row">\n    <div class="zcat-doublefield-item zcat-field-first" style="width:100px">\n      <select>...</select>\n    </div>\n    <div class="zcat-doublefield-item zcat-field-last" style="flex:1">\n      <input type="text" placeholder="Phone number" />\n    </div>\n  </div>\n</div>';

    let css_code = '.zcat-doublefield-row { display: flex; }\n.zcat-field-first input { border-radius: 8px 0 0 8px; }\n.zcat-field-last input { border-radius: 0 8px 8px 0; }';

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
    this.setData('htmlCodeSnippet', { code: html_code });
    this.setData('cssCodeSnippet', { code: css_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object', { default: this }),
      pageTab: prop('string', { default: 'customize' }),
      activeTab: prop('string', { default: 'slyte' }),
      doublefieldObj: prop('object', {
        default: {
          label: 'Phone Number',
          fields: [
            {
              type: 'dropdown',
              width: '110px',
              props: {
                placeholder: '+1',
                options: [
                  { name: '+1 US', value: '+1' },
                  { name: '+44 UK', value: '+44' },
                  { name: '+91 IN', value: '+91' },
                  { name: '+81 JP', value: '+81' }
                ]
              }
            },
            {
              type: 'input',
              props: {
                placeholder: 'Enter phone number'
              }
            }
          ]
        }
      }),
      doublefieldObj2: prop('object', {
        default: {
          label: 'Amount',
          fields: [
            {
              type: 'dropdown',
              width: '100px',
              props: {
                placeholder: 'USD',
                options: [
                  { name: 'USD', value: 'usd' },
                  { name: 'EUR', value: 'eur' },
                  { name: 'GBP', value: 'gbp' },
                  { name: 'INR', value: 'inr' }
                ]
              }
            },
            {
              type: 'input',
              props: {
                placeholder: 'Enter amount'
              }
            }
          ]
        }
      }),
      doublefieldObj3: prop('object', {
        default: {
          label: 'Date Range',
          fields: [
            {
              type: 'input',
              props: { placeholder: 'Start date' }
            },
            {
              type: 'input',
              props: { placeholder: 'End date' }
            }
          ]
        }
      }),
      doublefieldDisabledObj: prop('object', {
        default: {
          label: 'Phone Number (Disabled)',
          disabled: true,
          fields: [
            {
              type: 'dropdown',
              width: '110px',
              props: {
                placeholder: '+1',
                options: [
                  { name: '+1 US', value: '+1' },
                  { name: '+44 UK', value: '+44' },
                  { name: '+91 IN', value: '+91' }
                ]
              }
            },
            {
              type: 'input',
              props: { placeholder: 'Enter phone number' }
            }
          ]
        }
      }),
      doublefieldErrorObj: prop('object', {
        default: {
          label: 'Amount',
          errorMessage: 'Please enter a valid amount',
          fields: [
            {
              type: 'dropdown',
              width: '100px',
              props: {
                placeholder: 'USD',
                options: [
                  { name: 'USD', value: 'usd' },
                  { name: 'EUR', value: 'eur' },
                  { name: 'GBP', value: 'gbp' }
                ]
              }
            },
            {
              type: 'input',
              props: { placeholder: 'Enter amount' }
            }
          ]
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      toggleErrorObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleError' } }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      toggleLabel(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'label', val ? 'Phone Number' : '');
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      toggleError(val) {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'errorMessage', val ? 'This field is required' : '');
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'label', 'Phone Number');
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'disabled', false);
        this.$app.objectUtils(this.getData('doublefieldObj'), 'add', 'errorMessage', '');
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let snippet = this.getData(tab + 'CodeSnippet') || {};
        if (snippet.code && navigator.clipboard) {
          navigator.clipboard.writeText(snippet.code);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

DoublefieldComp._template = "<template tag-name=\"doublefield-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Double Field</h1> <p class=\"zcat-page-desc\">Combines multiple input and dropdown fields side-by-side with shared label and error handling.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj}}\"></zcat-double-field> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Use Cases</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Phone Number</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Currency Amount</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj2}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Date Range (Input + Input)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldObj3}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldDisabledObj}}\"></zcat-double-field> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error State</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-double-field self=\"{{self}}\" zcat-prop=\"{{doublefieldErrorObj}}\"></zcat-double-field> </div> </div> </div> </div></template></template></div> </template><style>/* doublefield-comp demo styles are in utilities */\n</style>";;
DoublefieldComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

DoublefieldComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "doublefieldObj",
  "doublefieldObj2",
  "doublefieldObj3",
  "doublefieldDisabledObj",
  "doublefieldErrorObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { DoublefieldComp };

DoublefieldComp.register("doublefield-comp", {
  hash: "DoublefieldComp_4",
  refHash: "C_zcat-app_app_0"
});

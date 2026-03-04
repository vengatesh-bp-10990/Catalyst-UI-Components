import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-keyvalue-pair.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class KeyvalueComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('keyvalueObj') || {};

    let slyte_code = '<zcat-keyvalue-pair\n  self="{{self}}"\n  zcat-prop="{{keyvalueObj}}"\n></zcat-keyvalue-pair>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    keyvalueObj: prop("object", {\n      default: {\n        label: "Parameters",\n        fieldDefs: [\n          { key: "paramKey", label: "Key", placeholder: "Enter key" },\n          { key: "paramValue", label: "Value", placeholder: "Enter value" }\n        ],\n        rows: [\n          { paramKey: "host", paramValue: "localhost" }\n        ]\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-kvp-wrapper">\n  <div class="zcat-kvp-header">\n    <span class="zcat-kvp-header-cell">Key</span>\n    <span class="zcat-kvp-header-cell">Value</span>\n  </div>\n  <div class="zcat-kvp-row">\n    <input class="zcat-kvp-input" placeholder="Key" />\n    <input class="zcat-kvp-input" placeholder="Value" />\n    <span class="zcat-kvp-remove-btn">×</span>\n  </div>\n  <button class="zcat-kvp-add-btn">+ Add Row</button>\n</div>';

    let css_code = '.zcat-kvp-row { display: flex; gap: 8px; align-items: center; }\n.zcat-kvp-input { flex: 1; height: 34px; border: 1px solid var(--zcat-inputField-border-default); border-radius: 6px; }';

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
      keyvalueObj: prop('object', {
        default: {
          label: 'Parameters',
          fieldDefs: [
            { key: 'paramKey', label: 'Key', placeholder: 'Enter key' },
            { key: 'paramValue', label: 'Value', placeholder: 'Enter value' }
          ],
          rows: [
            { paramKey: 'host', paramValue: 'localhost', _id: 'row_1' },
            { paramKey: 'port', paramValue: '8080', _id: 'row_2' }
          ],
          addLabel: 'Add Parameter',
          callback: { name: 'onRowsChange' }
        }
      }),
      keyvalueObj2: prop('object', {
        default: {
          label: 'HTTP Headers',
          fieldDefs: [
            { key: 'headerName', label: 'Header', placeholder: 'Header name' },
            { key: 'headerValue', label: 'Value', placeholder: 'Header value' }
          ],
          rows: [
            { headerName: 'Content-Type', headerValue: 'application/json', _id: 'h_1' },
            { headerName: 'Authorization', headerValue: 'Bearer xxx', _id: 'h_2' }
          ],
          addLabel: 'Add Header'
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
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
      onRowsChange(rows) {
        console.log('Key-value rows changed:', rows);
      },
      toggleLabel(val) {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'label', val ? 'Parameters' : '');
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'label', 'Parameters');
        this.$app.objectUtils(this.getData('keyvalueObj'), 'add', 'disabled', false);
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

KeyvalueComp._template = "<template tag-name=\"keyvalue-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Key-Value Pair</h1> <p class=\"zcat-page-desc\">Dynamic key-value row editor with add/remove rows, supporting custom field definitions.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Use Cases</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: 1fr\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Parameters</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj}}\"></zcat-keyvalue-pair> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">HTTP Headers</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-keyvalue-pair self=\"{{self}}\" zcat-prop=\"{{keyvalueObj2}}\"></zcat-keyvalue-pair> </div> </div> </div> </div></template></template> </div> </template><style>/* keyvalue-comp demo styles are in utilities */\n</style>";;
KeyvalueComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

KeyvalueComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "keyvalueObj",
  "keyvalueObj2",
  "toggleLabelObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { KeyvalueComp };

KeyvalueComp.register("keyvalue-comp", {
  hash: "KeyvalueComp_2",
  refHash: "C_zcat-app_app_0"
});

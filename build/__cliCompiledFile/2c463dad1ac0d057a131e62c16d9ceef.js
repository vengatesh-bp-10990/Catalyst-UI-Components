import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-cards.js';
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class CardsComp extends Component {
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

    let typeSelect = node.querySelector('[data-action="changeType"]');
    let bgSelect = node.querySelector('[data-action="changeBg"]');

    if (typeSelect) {
      typeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('cardsObj'), 'add', 'type', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (bgSelect) {
      bgSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('cardsObj'), 'add', 'bgVariant', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let obj = this.getData('cardsObj') || {};

    let slyte_code = '<zcat-cards\n  self="{{self}}"\n  zcat-prop="{{cardsObj}}"\n></zcat-cards>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    cardsObj: prop("object", {\n      default: {\n        type: "' + (obj.type || 'default') + '",\n        bgVariant: "' + (obj.bgVariant || 'primary') + '",\n        cards: [\n          { title: "Option A", value: "a", description: "Description" },\n          { title: "Option B", value: "b", description: "Description" }\n        ]\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-cards-wrapper zcat-cards-horizontal">\n  <div class="zcat-card primary">\n    <div class="zcat-card-body">\n      <div class="zcat-card-title">Option A</div>\n      <div class="zcat-card-desc">Description text</div>\n    </div>\n  </div>\n</div>';

    let css_code = '.zcat-card { padding: 16px; border-radius: 10px; border: 1px solid var(--zcat-card-border-default); cursor: pointer; }\n.zcat-card:hover { border-color: var(--zcat-card-border-hover); box-shadow: 0 2px 8px rgba(0,0,0,0.06); }';

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
      cardsObj: prop('object', {
        default: {
          type: 'single_sel',
          bgVariant: 'primary',
          cards: [
            { title: 'Starter Plan', value: 'starter', description: 'For individuals getting started', icon: 'zap' },
            { title: 'Pro Plan', value: 'pro', description: 'For growing teams', icon: 'star' },
            { title: 'Enterprise', value: 'enterprise', description: 'For large organizations', icon: 'shield' }
          ],
          selected: 'pro',
          callback: { name: 'onCardSelect' }
        }
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
      onCardSelect(item) {
        console.log('Card selected:', item);
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('cardsObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('cardsObj'), 'add', 'type', 'single_sel');
        this.$app.objectUtils(this.getData('cardsObj'), 'add', 'bgVariant', 'primary');
        this.$app.objectUtils(this.getData('cardsObj'), 'add', 'disabled', false);
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

CardsComp._template = "<template tag-name=\"cards-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Cards</h1> <p class=\"zcat-page-desc\">Selection cards supporting display-only, single-select (radio), and multi-select (checkbox) modes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-cards self=\"{{self}}\" zcat-prop=\"{{cardsObj}}\"></zcat-cards> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Selection Type</span> <select data-action=\"changeType\" class=\"zcat-custom-select\"> <option value=\"default\">Default (Display)</option> <option value=\"single_sel\" selected=\"\">Single Select</option> <option value=\"multi_sel\">Multi Select</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Background</span> <select data-action=\"changeBg\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> <option value=\"tertiary\">Tertiary</option> <option value=\"quaternary\">Quaternary</option> <option value=\"bodyBg\">Body Background</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Selection Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (Display)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-default zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Option A</div></div> </div> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Option B</div></div> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Single Select</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-single zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Selected</div></div> </div> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Unselected</div></div> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Multi Select</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-multi zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Checked A</div></div> </div> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Checked B</div></div> </div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">Background Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);background:var(--zcat-card-bg-default)\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Primary Card</div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card secondary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);background:var(--zcat-card-bg-secondary)\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Secondary Card</div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card disabled\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-disabled);background:var(--zcat-card-bg-disabled);opacity:0.6\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Disabled Card</div></div> </div> </div> </div> </div> </div></template></template></div> </template><style>/* cards-comp demo styles are in utilities */\n</style>";;
CardsComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[7,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;

CardsComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "cardsObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { CardsComp };

CardsComp.register("cards-comp", {
  hash: "CardsComp_4",
  refHash: "C_zcat-app_app_0"
});

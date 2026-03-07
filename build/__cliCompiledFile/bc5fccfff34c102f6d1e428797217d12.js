import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-tab.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class TabComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let tabObj = this.getData('tabObj') || {};

    let slyte_code = '<zcat-tab\n  self="{{self}}"\n  zcat-prop="{{tabObj}}"\n></zcat-tab>';

    let propObj = {};
    propObj.variant = tabObj.variant || 'primary';
    if (tabObj.size) propObj.size = tabObj.size;
    propObj.list = [
      { id: 'tab1', title: { name: 'Tab 1' }, body: { content: 'Tab 1 content' } },
      { id: 'tab2', title: { name: 'Tab 2' }, body: { content: 'Tab 2 content' } },
      { id: 'tab3', title: { name: 'Tab 3' }, body: { content: 'Tab 3 content' } }
    ];

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    tabObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-tabs-wrapper zcat-tabs-' + (tabObj.variant || 'primary') + '">\n';
    html_code += '  <div class="zcat-tab-head">\n';
    html_code += '    <div class="zcat-tab-title zcat-tab-active">Tab 1</div>\n';
    html_code += '    <div class="zcat-tab-title">Tab 2</div>\n';
    html_code += '    <div class="zcat-tab-title">Tab 3</div>\n';
    html_code += '  </div>\n';
    html_code += '  <div class="zcat-tab-body">\n';
    html_code += '    <div class="zcat-tab-content zcat-tab-show">Tab 1 content</div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-tabs-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n';
    css_code += '.zcat-tab-head {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n\n';
    css_code += '.zcat-tab-title {\n  padding: 0 8px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  color: var(--zcat-tabs-primary-text-default);\n}\n\n';
    css_code += '.zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-primary-text-active);\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n  font-weight: 600;\n}';

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      tabObj: prop('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'tab1', title: { name: 'General' }, body: { content: 'General settings go here.' } },
            { id: 'tab2', title: { name: 'Profile' }, body: { content: 'Profile configuration content.' } },
            { id: 'tab3', title: { name: 'Security' }, body: { content: 'Security and privacy settings.' } }
          ]
        }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleCloseObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleClose' } }
      }),
      toggleBadgeObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleBadge' } }
      }),
      // Variant demos
      variantPrimaryObj: prop('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'vp1', title: { name: 'Overview' }, body: { content: 'Primary tab body content.' } },
            { id: 'vp2', title: { name: 'Details' }, body: { content: 'Details content.' } },
            { id: 'vp3', title: { name: 'Settings' }, body: { content: 'Settings content.' } }
          ]
        }
      }),
      variantSecondaryObj: prop('object', {
        default: {
          variant: 'secondary',
          list: [
            { id: 'vs1', title: { name: 'All' }, body: { content: 'All items.' } },
            { id: 'vs2', title: { name: 'Active' }, body: { content: 'Active items.' } },
            { id: 'vs3', title: { name: 'Archived' }, body: { content: 'Archived items.' } }
          ]
        }
      }),
      variantCodeObj: prop('object', {
        default: {
          variant: 'code', showBody: false,
          list: [
            { id: 'vc1', title: { name: 'index.html' } },
            { id: 'vc2', title: { name: 'style.css' } },
            { id: 'vc3', title: { name: 'app.js' } }
          ]
        }
      }),
      variantBadgeObj: prop('object', {
        default: {
          variant: 'primary',
          list: [
            { id: 'vb1', title: { name: 'Inbox', badge: '12' }, body: { content: 'You have 12 unread messages.' } },
            { id: 'vb2', title: { name: 'Drafts', badge: '3' }, body: { content: 'You have 3 drafts.' } },
            { id: 'vb3', title: { name: 'Sent' }, body: { content: 'Sent messages.' } }
          ]
        }
      }),
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('tabObj', {
          variant: 'primary',
          list: [
            { id: 'tab1', title: { name: 'General' }, body: { content: 'General settings go here.' } },
            { id: 'tab2', title: { name: 'Profile' }, body: { content: 'Profile configuration content.' } },
            { id: 'tab3', title: { name: 'Security' }, body: { content: 'Security and privacy settings.' } }
          ]
        });
        this.$app.objectUtils(this.getData('toggleCloseObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleBadgeObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleClose(checked) {
        this.$app.objectUtils(this.getData('tabObj'), 'add', 'closeIcon', checked);
        this.constructCodeSnippet();
      },
      onToggleBadge(checked) {
        let tabObj = this.getData('tabObj');
        let list = tabObj.list;
        if (checked) {
          if (list[0]) this.$app.objectUtils(list[0].title, 'add', 'badge', '5');
          if (list[1]) this.$app.objectUtils(list[1].title, 'add', 'badge', '2');
        } else {
          if (list[0]) this.$app.objectUtils(list[0].title, 'add', 'badge', '');
          if (list[1]) this.$app.objectUtils(list[1].title, 'add', 'badge', '');
        }
        this.constructCodeSnippet();
      },
      onTabChange(item) {
        // demo callback
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeTabVariant(e) {
        this.$app.objectUtils(this.getData('tabObj'), 'add', 'variant', e.target.value);
        this.constructCodeSnippet();
      },
      changeTabSize(e) {
        this.$app.objectUtils(this.getData('tabObj'), 'add', 'size', e.target.value);
        this.constructCodeSnippet();
      },
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let code;
        if (tab === 'slyte') code = this.getData('slyteCodeSnippet.code');
        else if (tab === 'js') code = this.getData('jsCodeSnippet.code');
        else if (tab === 'html') code = this.getData('htmlCodeSnippet.code');
        else if (tab === 'css') code = this.getData('cssCodeSnippet.code');
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

TabComp._template = "<template tag-name=\"tab-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Tabs</h1> <p class=\"zcat-page-desc\">Tabs organize content into separate views where only one view is visible at a time.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{tabObj}}\"></zcat-tab> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select onchange=\"{{action('changeTabVariant',event)}}\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> <option value=\"code\">Code</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeTabSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Close Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCloseObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Badge</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleBadgeObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Primary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary Tabs</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantPrimaryObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Secondary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Pill) Tabs</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantSecondaryObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Code Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Code Tabs (File Browser)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantCodeObj}}\"></zcat-tab> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Badge</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:360px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Tabs with Badge Count</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-tab self=\"{{self}}\" zcat-prop=\"{{variantBadgeObj}}\"></zcat-tab> </div> </div> </div> </div></template></template></div> </template><style>/* tab-comp specific overrides if needed */\n</style>";;
TabComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

TabComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "tabObj",
  "resetButtonObj",
  "toggleCloseObj",
  "toggleBadgeObj",
  "variantPrimaryObj",
  "variantSecondaryObj",
  "variantCodeObj",
  "variantBadgeObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { TabComp };

TabComp.register("tab-comp", {
  hash: "TabComp_4",
  refHash: "C_zcat-app_app_0"
});

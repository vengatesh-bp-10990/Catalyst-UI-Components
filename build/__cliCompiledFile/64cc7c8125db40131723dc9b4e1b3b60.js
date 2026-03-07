import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-toggle.js';
import './zcat-modal.js';
import './zcat-button.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ModalComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let modalObj = this.getData('modalObj') || {};

    let slyte_code = '<zcat-modal\n  self="{{self}}"\n  zcat-prop="{{modalObj}}"\n></zcat-modal>';

    let propObj = { header: { title: 'Modal Title', desc: 'An optional description.' } };
    if (modalObj.size) propObj.size = modalObj.size;
    propObj.footer = {
      right: [
        { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
        { label: 'Save', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
      ]
    };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    modalObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-modal-overlay">\n';
    html_code += '  <div class="zcat-modal-container">\n';
    html_code += '    <div class="zcat-modal-header">\n';
    html_code += '      <h2 class="zcat-modal-title">Modal Title</h2>\n';
    html_code += '      <button class="zcat-modal-close">&times;</button>\n';
    html_code += '    </div>\n';
    html_code += '    <div class="zcat-modal-body">Content goes here.</div>\n';
    html_code += '    <div class="zcat-modal-footer">\n';
    html_code += '      <button class="zcat-btn-outline">Cancel</button>\n';
    html_code += '      <button class="zcat-btn-primary">Save</button>\n';
    html_code += '    </div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-modal-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  display: flex; align-items: center; justify-content: center;\n}\n\n';
    css_code += '.zcat-modal-container {\n  width: 520px; max-width: 90vw;\n  background: var(--zcat-popup-bg);\n  border-radius: 12px;\n  box-shadow: var(--zcat-shadow-dark-all);\n}';

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
      demoModalOpen: prop('boolean', { default: false }),
      modalObj: prop('object', {
        default: {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: {
            right: [
              { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
              { label: 'Confirm', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
            ]
          }
        }
      }),
      openBtnObj: prop('object', {
        default: { label: 'Open Modal', variant: 'fill', color: 'primary', callback: { name: 'openDemoModal' } }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleDescObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleDesc' } }
      }),
      toggleBackObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleBack' } }
      }),
      // Variants
      variantDefaultObj: prop('object', {
        default: {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Confirm', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantSmallObj: prop('object', {
        default: {
          size: 'small',
          header: { title: 'File Deleted' },
          footer: { right: [{ label: 'OK', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantLargeObj: prop('object', {
        default: {
          size: 'large',
          header: { title: 'Edit Profile' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Save', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantWithDescObj: prop('object', {
        default: {
          header: { title: 'Delete Record', desc: 'This action cannot be undone.' },
          footer: { right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Delete', variant: 'fill', color: 'error' }] }
        }
      }),
      variantBackArrowObj: prop('object', {
        default: {
          header: { title: 'Step 2 of 3', backArrow: true },
          footer: { right: [{ label: 'Back', variant: 'outline', color: 'primary' }, { label: 'Next', variant: 'fill', color: 'primary' }] }
        }
      }),
      variantFooterActionsObj: prop('object', {
        default: {
          header: { title: 'Settings' },
          footer: {
            left: [{ label: 'Reset', variant: 'ghost', color: 'default' }],
            right: [{ label: 'Cancel', variant: 'outline', color: 'primary' }, { label: 'Apply', variant: 'fill', color: 'primary' }]
          }
        }
      }),
      openVarDefaultBtnObj: prop('object', { default: { label: 'Open Default', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarDefault' } } }),
      openVarSmallBtnObj: prop('object', { default: { label: 'Open Small', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarSmall' } } }),
      openVarLargeBtnObj: prop('object', { default: { label: 'Open Large', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarLarge' } } }),
      openVarWithDescBtnObj: prop('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarWithDesc' } } }),
      openVarBackBtnObj: prop('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarBack' } } }),
      openVarFooterBtnObj: prop('object', { default: { label: 'Open Modal', variant: 'fill', color: 'primary', size: 'small', callback: { name: 'openVarFooter' } } }),
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      openDemoModal() {
        let modalNode = this.$node.querySelector('zcat-modal');
        if (modalNode && modalNode.component) {
          modalNode.component.exec('openModal');
        }
      },
      openVarDefault() {
        let m = this.$node.querySelector('[data-modal-id="v-default"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarSmall() {
        let m = this.$node.querySelector('[data-modal-id="v-small"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarLarge() {
        let m = this.$node.querySelector('[data-modal-id="v-large"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarWithDesc() {
        let m = this.$node.querySelector('[data-modal-id="v-desc"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarBack() {
        let m = this.$node.querySelector('[data-modal-id="v-back"]');
        if (m && m.component) m.component.exec('openModal');
      },
      openVarFooter() {
        let m = this.$node.querySelector('[data-modal-id="v-footer"]');
        if (m && m.component) m.component.exec('openModal');
      },
      onModalCancel() {
        // close handled automatically
      },
      onModalSave() {
        // demo save callback
      },
      resetCustomization() {
        this.setData('modalObj', {
          header: { title: 'Confirm Action', desc: 'Are you sure you want to proceed?' },
          footer: {
            right: [
              { label: 'Cancel', variant: 'outline', color: 'primary', callback: { name: 'onModalCancel' } },
              { label: 'Confirm', variant: 'fill', color: 'primary', callback: { name: 'onModalSave' } }
            ]
          }
        });
        this.$app.objectUtils(this.getData('toggleDescObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleBackObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleDesc(checked) {
        if (checked) {
          this.$app.objectUtils(this.getData('modalObj').header, 'add', 'desc', 'Are you sure you want to proceed?');
        } else {
          this.$app.objectUtils(this.getData('modalObj').header, 'add', 'desc', '');
        }
        this.constructCodeSnippet();
      },
      onToggleBack(checked) {
        this.$app.objectUtils(this.getData('modalObj').header, 'add', 'backArrow', checked);
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      changeModalSize(e) {
        this.$app.objectUtils(this.getData('modalObj'), 'add', 'size', e.target.value);
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

ModalComp._template = "<template tag-name=\"modal-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Modal</h1> <p class=\"zcat-page-desc\">Modals display content in a focused overlay that requires user interaction before returning to the main view.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"display:flex;align-items:center;justify-content:center;min-height:120px;\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openBtnObj}}\"></zcat-button> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{modalObj}}\"></zcat-modal> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeModalSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default (520px)</option> <option value=\"small\">Small (400px)</option> <option value=\"large\">Large (720px)</option> <option value=\"full\">Full screen</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Description</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDescObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Back Arrow</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleBackObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (520px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\" data-modal-id=\"v-default\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarDefaultBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small (400px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantSmallObj}}\" data-modal-id=\"v-small\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarSmallBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large (720px)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantLargeObj}}\" data-modal-id=\"v-large\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarLargeBtnObj}}\"></zcat-button> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Features</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantWithDescObj}}\" data-modal-id=\"v-desc\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarWithDescBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Back Arrow</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantBackArrowObj}}\" data-modal-id=\"v-back\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarBackBtnObj}}\"></zcat-button> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Footer Actions</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px;text-align:center\"> <zcat-modal self=\"{{self}}\" zcat-prop=\"{{variantFooterActionsObj}}\" data-modal-id=\"v-footer\"></zcat-modal> <zcat-button self=\"{{self}}\" zcat-prop=\"{{openVarFooterBtnObj}}\"></zcat-button> </div> </div> </div> </div></template></template></div> </template><style>/* modal-comp specific overrides if needed */\n</style>";;
ModalComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,3],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,3],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[11,10,9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

ModalComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "demoModalOpen",
  "modalObj",
  "openBtnObj",
  "resetButtonObj",
  "toggleDescObj",
  "toggleBackObj",
  "variantDefaultObj",
  "variantSmallObj",
  "variantLargeObj",
  "variantWithDescObj",
  "variantBackArrowObj",
  "variantFooterActionsObj",
  "openVarDefaultBtnObj",
  "openVarSmallBtnObj",
  "openVarLargeBtnObj",
  "openVarWithDescBtnObj",
  "openVarBackBtnObj",
  "openVarFooterBtnObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { ModalComp };

ModalComp.register("modal-comp", {
  hash: "ModalComp_4",
  refHash: "C_zcat-app_app_0"
});

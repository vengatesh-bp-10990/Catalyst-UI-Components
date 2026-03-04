import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-alert.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class AlertComp extends Component {
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

    let typeSelect = node.querySelector('[data-action="changeAlertType"]');
    if (typeSelect) {
      typeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('alertObj'), 'add', 'type', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let alertObj = this.getData('alertObj') || {};
    let type = alertObj.type || 'info';

    // --- sLyte tab ---
    let slyte_code = '<zcat-alert\n  self="{{self}}"\n  zcat-prop="{{alertObj}}"\n></zcat-alert>';

    // --- JS tab ---
    let propObj = { type: type, desc: alertObj.desc || 'This is an alert message.' };
    if (alertObj.header) { propObj.header = alertObj.header; }
    if (alertObj.closable === false) { propObj.closable = false; }
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    alertObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    // --- sLyte New tab ---
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    newSlyteAttrs.push('  zcat-prop-type="' + type + '"');
    newSlyteAttrs.push('  zcat-prop-desc="' + (alertObj.desc || 'This is an alert message.') + '"');
    if (alertObj.header) { newSlyteAttrs.push('  zcat-prop-header="' + alertObj.header + '"'); }
    if (alertObj.closable === false) { newSlyteAttrs.push('  zcat-prop-closable="false"'); }

    let newSlyte_code = '// Template\n<zcat-alert\n' + newSlyteAttrs.join('\n') + '\n></zcat-alert>\n\n'
      + '// Inline JS — callback via self\nstatic methods() {\n  return {\n    onAlertClose(action, prop) {\n      console.log("Alert closed");\n    }\n  };\n}';

    // --- HTML tab ---
    let typeClass = type;
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--zcat-toast-icon-line-success)" stroke-width="1.3"><path d="M14 7.36V8a6 6 0 1 1-3.56-5.48"/><polyline points="14 2.5 8 8.5 6 6.5"/></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--zcat-toast-icon-line-danger)" stroke-width="1.3"><circle cx="8" cy="8" r="6"/><line x1="10" y1="6" x2="6" y2="10"/><line x1="6" y1="6" x2="10" y2="10"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--zcat-toast-icon-line-warning)" stroke-width="1.3"><path d="M6.86 2.57L1.21 12a1.33 1.33 0 0 0 1.15 2h11.28a1.33 1.33 0 0 0 1.15-2L9.14 2.57a1.33 1.33 0 0 0-2.28 0z"/><line x1="8" y1="6" x2="8" y2="9"/><line x1="8" y1="11" x2="8.01" y2="11"/></svg>';
    } else {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--zcat-toast-icon-line-info)" stroke-width="1.3"><circle cx="8" cy="8" r="6"/><line x1="8" y1="11" x2="8" y2="7"/><line x1="8" y1="5" x2="8.01" y2="5"/></svg>';
    }

    let headerHtml = alertObj.header ? '\n    <p class="zcat-alert-header">' + alertObj.header + '</p>' : '';
    let descClass = alertObj.header ? 'zcat-alert-desc' : 'zcat-alert-desc zcat-alert-desc-only';
    let closeHtml = alertObj.closable !== false ? '\n  <div class="zcat-alert-right">\n    <button class="zcat-alert-close">&times;</button>\n  </div>' : '';

    let html_code = '<div class="zcat-alert-banner ' + typeClass + (alertObj.header ? ' zcat-alert-has-header' : '') + '">\n'
      + '  <div class="zcat-alert-left">\n'
      + '    <div class="zcat-alert-icon-wrap">\n      ' + iconSvg + '\n    </div>\n'
      + '    <div class="zcat-alert-text">' + headerHtml + '\n'
      + '      <p class="' + descClass + '">' + (alertObj.desc || 'This is an alert message.') + '</p>\n'
      + '    </div>\n  </div>'
      + closeHtml + '\n</div>';

    // --- CSS tab ---
    let css_code = '.zcat-alert-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n}\n\n';
    css_code += '.zcat-alert-banner.' + type + ' {\n  background: var(--zcat-alerts-' + (type === 'error' ? 'danger' : type) + '-bg);\n  border-color: var(--zcat-alerts-' + (type === 'error' ? 'danger' : type) + '-border);\n}\n\n';
    css_code += '.zcat-alert-header {\n  font-weight: 600;\n  color: var(--zcat-alerts-' + (type === 'error' ? 'danger' : type) + '-text-primary);\n}\n\n';
    css_code += '.zcat-alert-desc {\n  color: var(--zcat-alerts-' + (type === 'error' ? 'danger' : type) + '-text-secondary);\n}';

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
      alertObj: prop('object', {
        default: {
          type: 'info',
          desc: 'This is an informational alert for the user.',
          closable: true
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
      toggleHeaderObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleHeader' } }
      }),
      toggleClosableObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleClosable' } }
      }),
      // --- All Variants objects ---
      variantInfoObj: prop('object', {
        default: { type: 'info', desc: 'This is an informational message.', closable: false }
      }),
      variantSuccessObj: prop('object', {
        default: { type: 'success', desc: 'Operation completed successfully.', closable: false }
      }),
      variantWarningObj: prop('object', {
        default: { type: 'warning', desc: 'Please review before proceeding.', closable: false }
      }),
      variantErrorObj: prop('object', {
        default: { type: 'error', desc: 'Something went wrong. Please try again.', closable: false }
      }),
      variantInfoHeaderObj: prop('object', {
        default: { type: 'info', header: 'Information', desc: 'This is an informational message with a header.', closable: false }
      }),
      variantSuccessHeaderObj: prop('object', {
        default: { type: 'success', header: 'Success', desc: 'Your changes have been saved successfully.', closable: false }
      }),
      variantWarningHeaderObj: prop('object', {
        default: { type: 'warning', header: 'Warning', desc: 'This action cannot be undone.', closable: false }
      }),
      variantErrorHeaderObj: prop('object', {
        default: { type: 'error', header: 'Error', desc: 'Failed to load the resource. Please try again later.', closable: false }
      }),
      variantNonClosableObj: prop('object', {
        default: { type: 'info', desc: 'This alert cannot be dismissed by the user.', closable: false }
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
        this.setData('alertObj', {
          type: 'info',
          desc: 'This is an informational alert for the user.',
          closable: true
        });
        this.$app.objectUtils(this.getData('toggleHeaderObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleClosableObj'), 'add', 'checked', true);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleHeader(checked) {
        let alertObj = this.getData('alertObj');
        if (checked) {
          this.$app.objectUtils(alertObj, 'add', 'header', 'Alert Header');
        } else {
          this.$app.objectUtils(alertObj, 'add', 'header', '');
        }
        this.constructCodeSnippet();
      },
      onToggleClosable(checked) {
        let alertObj = this.getData('alertObj');
        this.$app.objectUtils(alertObj, 'add', 'closable', checked);
        this.constructCodeSnippet();
      },
      onAlertClose() {
        // Demo callback — no-op for docs
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
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

AlertComp._template = "<template tag-name=\"alert-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Alert</h1> <p class=\"zcat-page-desc\">Alerts display contextual feedback messages for user actions — info, success, warning, or error.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:20px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{alertObj}}\"></zcat-alert> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select data-action=\"changeAlertType\" class=\"zcat-custom-select\"> <option value=\"info\">Info</option> <option value=\"success\">Success</option> <option value=\"warning\">Warning</option> <option value=\"error\">Error</option> </select> </div> <!-- Header toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Header</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleHeaderObj}}\"></zcat-toggle> </div> <!-- Closable toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Closable</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleClosableObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Alert Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantInfoObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantSuccessObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantWarningObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantErrorObj}}\"></zcat-alert> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Header</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantInfoHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantSuccessHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantWarningHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantErrorHeaderObj}}\"></zcat-alert> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Non-Closable</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info (no close)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantNonClosableObj}}\"></zcat-alert> </div> </div> </div> </div></template></template> </div> </template><style>/* alert-comp doc page — no extra styles needed, uses layout-comp shared classes */\n</style>";;
AlertComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,7,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

AlertComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "alertObj",
  "resetButtonObj",
  "toggleHeaderObj",
  "toggleClosableObj",
  "variantInfoObj",
  "variantSuccessObj",
  "variantWarningObj",
  "variantErrorObj",
  "variantInfoHeaderObj",
  "variantSuccessHeaderObj",
  "variantWarningHeaderObj",
  "variantErrorHeaderObj",
  "variantNonClosableObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { AlertComp };

AlertComp.register("alert-comp", {
  hash: "AlertComp_2",
  refHash: "C_zcat-app_app_0"
});

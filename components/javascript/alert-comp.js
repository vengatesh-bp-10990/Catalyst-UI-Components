"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/alert-comp"],{

/***/ 42938954:
/*!*********************************************!*\
  !*** ./components/javascript/alert-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComp": () => (/* binding */ AlertComp)
/* harmony export */ });
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-icon.js */ 35554276);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-button.js */ 43360219);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-toggle.js */ 85465283);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_alert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-alert.js */ 89136073);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class AlertComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
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
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      alertObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          type: 'info',
          desc: 'This is an informational alert for the user.',
          closable: true
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      toggleHeaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleHeader' } }
      }),
      toggleClosableObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleClosable' } }
      }),
      // --- All Variants objects ---
      variantInfoObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'info', desc: 'This is an informational message.', closable: false }
      }),
      variantSuccessObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'success', desc: 'Operation completed successfully.', closable: false }
      }),
      variantWarningObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'warning', desc: 'Please review before proceeding.', closable: false }
      }),
      variantErrorObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'error', desc: 'Something went wrong. Please try again.', closable: false }
      }),
      variantInfoHeaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'info', header: 'Information', desc: 'This is an informational message with a header.', closable: false }
      }),
      variantSuccessHeaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'success', header: 'Success', desc: 'Your changes have been saved successfully.', closable: false }
      }),
      variantWarningHeaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'warning', header: 'Warning', desc: 'This action cannot be undone.', closable: false }
      }),
      variantErrorHeaderObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'error', header: 'Error', desc: 'Failed to load the resource. Please try again later.', closable: false }
      }),
      variantNonClosableObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'info', desc: 'This alert cannot be dismissed by the user.', closable: false }
      }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      newSlyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
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
      changeAlertType(e) {
        this.$app.objectUtils(this.getData('alertObj'), 'add', 'type', e.target.value);
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

AlertComp._template = "<template tag-name=\"alert-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Alert</h1> <p class=\"zcat-page-desc\">Alerts display contextual feedback messages for user actions — info, success, warning, or error.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:20px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{alertObj}}\"></zcat-alert> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select onchange=\"{{action('changeAlertType',event)}}\" class=\"zcat-custom-select\"> <option value=\"info\">Info</option> <option value=\"success\">Success</option> <option value=\"warning\">Warning</option> <option value=\"error\">Error</option> </select> </div> <!-- Header toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Header</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleHeaderObj}}\"></zcat-toggle> </div> <!-- Closable toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Closable</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleClosableObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Alert Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantInfoObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantSuccessObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantWarningObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantErrorObj}}\"></zcat-alert> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Header</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantInfoHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantSuccessHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantWarningHeaderObj}}\"></zcat-alert> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error + Header</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantErrorHeaderObj}}\"></zcat-alert> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Non-Closable</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info (no close)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-alert self=\"{{self}}\" zcat-prop=\"{{variantNonClosableObj}}\"></zcat-alert> </div> </div> </div> </div></template></template></div> </template><style>/* alert-comp doc page — no extra styles needed, uses layout-comp shared classes */\n</style>";;
AlertComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,7,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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



AlertComp.register("alert-comp", {
  hash: "AlertComp_6",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 42957600:
/*!***************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-messagebox.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteMessageboxComponent": () => (/* binding */ LyteMessageboxComponent)
/* harmony export */ });
/* harmony import */ var _helpers_helpers_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers-dev.js */ 32124620);
/* harmony import */ var _lyte_wormhole_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lyte-wormhole.js */ 29612660);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3__);







/**
 * Renders a messagebox
 * @component lyte-messagebox
 * @version 1.0.0
 * @dependencies lyte-wormhole
 * @methods onClose
 */

class LyteMessageboxComponent extends _component_js__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
        super();
    }

    init() {
      var th = this;
      this.$node.alignMessageBox = function(){
        th.setData('onResizeBoolean' , true);
        th.computeOffsetImpl();
      }
    }

    data(arg1) {
        return Object.assign(super.data({

            /**
             * @componentProperty {success | error | warning | info} ltPropType
             * @version 1.0.0
             * @default success
             */
            "ltPropType":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("string",{"default":"success"}),

            /**
             * @componentProperty {boolean} ltPropShow
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropShow":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("boolean",{"default":false}),

            /**
             * @componentProperty {string} ltPropMessage
             * @version 1.0.0
             */
            "ltPropMessage":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropDuration
             * @version 1.0.0
             * @default 2000
             */
            "ltPropDuration":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("string",{"default":"2000"}),
            /**
             * @typedef {object} offset
             * @property {string} left="center"
             * @property {string} top="center"
             * @property {string} right
             * @property {string} bottom
             */
            /**
             * @componentProperty {offset} ltPropOffset
             * @version 1.0.0
             */
            "ltPropOffset":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("object",{"default":null}),

            /**
             * @typedef {object} transition
             * @property {slideFromTop | fadeIn} animation="fadeIn"
             * @property {string} duration
             */
            /**
             * @componentProperty {transition} ltPropTransition
             * @version 1.0.0
             * @default { "animation" : "fadeIn", "duration" :"0.2s"}
             */
            "ltPropTransition":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("object",{"default":{"animation" : "fadeIn","duration" : "0.2s"}}),

            /**
             * @componentProperty {boolean} ltPropYield
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropYield":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("boolean",{"default" : false}),

            /**
             * @componentProperty {string} ltPropClass
             * @version 1.0.0
             */
            "ltPropClass":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("string",{"default":""}),

            /**
             * @componentProperty {boolean} ltPropCloseManually
             * @version 3.0.X
             */
            "ltPropCloseManually":(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)("boolean",{"default": false}),
            "ltPropAriaRole" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string' , {
                default : 'status'
            }),

            "onResizeBoolean" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('boolean' , {
              'default' : false
            }),
            "ltPropShowCloseButton" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('boolean' , {
                default : true
            }),
            
            "ltPropFocusOnClose" : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('boolean' , {
                default : false
            })  
        }), arg1);
    }

    computeOffsetImpl() {
        var messageEle = this.actualMessageDiv;
        this.fastdomfn1 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.measure(function(){
            delete this.fastdomfn1;
            var messageElePosition = messageEle.getBoundingClientRect();
            // var offsetObj = this.$node.ltProp('offset');
            var offsetObj = Object.assign({},this.$node.ltProp('offset'));

            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            if(this.$node.ltProp('offset')){
                if(offsetObj.left === "center" || offsetObj.right === "center" || offsetObj.left == undefined || offsetObj.left == ""){
                    var offLeft = (w - messageElePosition.width)/2;
                    if(offLeft < 0){
                        offLeft = 20;
                    }
                    offsetObj.left = offLeft + "px";
                }
                if(offsetObj.top === "center" || offsetObj.bottom === "center"){
                    var offTop = (h - messageElePosition.height)/2;
                    if(offTop < 0){
                        offTop = 20;
                    }
                    offsetObj.top = offTop + "px";
                }
                if(offsetObj.right && offsetObj.right !== "center"){
                    if(offsetObj.right.indexOf("%") > -1){
                        offsetObj.left = w-(messageElePosition.width+(w/parseFloat(offsetObj.right)))+"px";
                    }
                    else{
                        offsetObj.left = w-(messageElePosition.width+parseFloat(offsetObj.right))+"px";
                    }
                }
                if(offsetObj.bottom && offsetObj.bottom !== "center"){
                    if(offsetObj.bottom.indexOf("%") > -1){
                        offsetObj.top = h-(messageElePosition.height+(h/parseFloat(offsetObj.bottom)))+"px";
                    }
                    else{
                        offsetObj.top = h-(messageElePosition.height+parseFloat(offsetObj.bottom))+"px";
                    }
                }
                if(!offsetObj.top){
                    offsetObj.top = 20;
                }
                this.fastdomfn2 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.mutate(function(){
                    delete this.fastdomfn2;
                    messageEle.style.left = parseFloat(offsetObj.left) + "px";
                    if(this.getData('ltPropTransition').animation === "slideFromTop"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = -1 * messageElePosition.height + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (parseFloat(offsetObj.top) + messageElePosition.height) +"px)";
                    } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = window.innerHeight + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (parseFloat(offsetObj.top) - window.innerHeight) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else {
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.top = parseFloat(offsetObj.top) + "px";
                    }
                    if(!this.getData('onResizeBoolean')){
                      this.showMessagebox();
                    }
                },this);
            }
            else{
                var offsetLeft="",offsetTop="";
                offsetLeft = (document.body.clientWidth - messageElePosition.width)/2;
                this.fastdomfn3 = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.mutate(function(){
                    delete this.fastdomfn3;
                    messageEle.style.left = parseFloat(offsetLeft)+"px";
                    if(this.getData('ltPropTransition').animation === "slideFromTop"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = -1 * messageElePosition.height + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (messageElePosition.height + 20) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = window.innerHeight + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (messageElePosition.height + 20 - window.innerHeight) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else {
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.top = "20px";
                    }
                    if(!this.getData('onResizeBoolean')){
                      this.showMessagebox();
                    }
                },this);
            }

        },this);
    }

    closeMessageBoxFn(checkWormhole) {
        this.setData('onResizeBoolean' , false);
        if(this.timeOutId){
            clearInterval(this.timeOutId);
            this.timeOutId = false;
        }
        if( this.childComp && document.contains( this.childComp ) ){
            this.childComp.remove();
        }
        delete this.actualMessageDiv;
        delete this.childComp;
        if(!checkWormhole && this.getMethods("onClose")){
            this.executeMethod("onClose",this);
        }
        window.removeEventListener('resize' , this.$node.alignMessageBox)
    }

    clearFastdom() {
        if(this.fastdomfn1){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.clear(this.fastdomfn1);
            delete this.fastdomfn1;
        }
        if(this.fastdomfn2){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.clear(this.fastdomfn2);
            delete this.fastdomfn2;
        }
        if(this.fastdomfn3){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().fastdom.clear(this.fastdomfn3);
            delete this.fastdomfn3;
        }
    }

    showMessagebox() {
        // start = new Date().getTime();
        var duration = parseInt(this.getData("ltPropDuration"));
        var self = this;
        // if(self.actualMessageDiv && !self.getData('ltPropShow')){
        //     _lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
        // }
        this.timeOutId = setInterval(function(){
            clearInterval(self.timeOutId);
            // end = new Date().getTime();
            if(!self.$node || self.getData('ltPropCloseManually')){
                return;
            }
            if(self.getData('ltPropTransition').animation === "slideFromTop"){
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.style.transform = "";
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            } else if(self.getData('ltPropTransition').animation === "slideFromBottom"){
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.style.transform = "";
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            } else {
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
                self.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            }
            self.timeOutId = false;
        },duration);
        window.addEventListener('resize' , this.$node.alignMessageBox)
    }

    didDestroy() {
        if(this.event){
            delete this.event
        }
        this.clearFastdom();
        if(this.actualMessageDiv){
            window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , this.actualMessageDiv)
        }
        if(this.timeOutId || this.getData('ltPropShow')){
            clearInterval(this.timeOutId);
            if(this.getData('ltPropTransition').animation === "slideFromTop" && this.actualMessageDiv){
                this.actualMessageDiv.style.transform = "";
	        	this.setData("ltPropShow",false);
        	} else if(this.getData('ltPropTransition').animation != "slideFromTop" && this.actualMessageDiv){
                this.actualMessageDiv.style.transform = "";
	        	this.setData("ltPropShow",false);
            } else { 
        		this.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
        		this.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
	        	this.setData("ltPropShow",false);
        	}
            this.timeOutId = false;
            this.closeMessageBoxFn(true);
        }
        window.removeEventListener('resize' , this.$node.alignMessageBox)
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            closeMessageBox : function(){
                clearInterval(this.timeOutId);
                this.timeOutId = false;
                var self = this;
                if(self.actualMessageDiv){
                    window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                }
                if(self.getData('ltPropTransition').animation === "slideFromTop"){
                    self.actualMessageDiv.style.transform = "";
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },200);
                } else if(self.getData('ltPropTransition').animation === "slideFromBottom"){
                    self.actualMessageDiv.style.transform = "";
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },200);
                } else {
                    self.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
                    self.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },500);
                }
                window.removeEventListener('resize' , this.$node.alignMessageBox)
            }
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            onBeforeShow : function(){},
            onShow:function(){},
            beforeWormholeAppend : function(arg){
                this.childComp = arg;
                this.actualMessageDiv = this.childComp.querySelector(".lyteMessageBox");
                this.actualMessageDiv.style.position = "fixed";
                // LyteComponent.appendChild(document.body,this.childComp);
            },
            afterWormholeAppend : function(arg){
                var dur = parseFloat(this.getData('ltPropTransition').duration)*100
                // if(this.getData('ltPropDuration')){
                //     dur = parseFloat(this.getData('ltPropDuration'))
                // }
                var _this = this;
                if(this.getData('ltPropTransition').animation === "slideFromTop"){
                    this.actualMessageDiv.classList.add('lyteMessageBoxSlideFromTop');
                    this.computeOffsetImpl();
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                    this.actualMessageDiv.classList.add('lyteMessageBoxSlideFromBottom');
                    this.computeOffsetImpl();
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                } else {
                    this.computeOffsetImpl();
                    this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                    // this.childComp.style.visibility = "visible";
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            setDuration : function(){
                var durationVal = this.$node.ltProp("duration");
                if(durationVal != ""){
                    this.setData("ltPropDuration",durationVal);
                }
                
            }.observes('ltPropDuration'),

            showToggled : function() {
                if(this.actualMessageDiv){
                    window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeOpen' , this.actualMessageDiv)
                }
                if(!(this.$node.ltProp("show"))){
                    this.closeMessageBoxFn();
                }
            }.observes('ltPropShow').on('didConnect')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteMessageboxComponent._template = "<template tag-name=\"lyte-messagebox\"> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{ltPropShow}}\" lc-id=\"lc_id_0\"><lyte-wormhole style=\"visibility: hidden\" on-before-append=\"{{method(&quot;beforeWormholeAppend&quot;)}}\" on-append=\"{{method(&quot;afterWormholeAppend&quot;)}}\" lt-prop-show=\"{{ltPropShow}}\" lt-prop-focus-on-close=\"{{ltPropFocusOnClose}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"{{lyteUiMsgBoxConcatClass(ltPropClass,ltPropType,'MessageIcon','lyteMessageBox')}} lytePopupZI\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropType}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteMessageBoxSymbol\"></span> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteMessageBoxContent\" aria-live=\"polite\" role=\"{{ltPropAriaRole}}\"> <lyte-yield yield-name=\"messageboxYield\"></lyte-yield> </span> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{lyteUiIfEquals(ltPropMessage,'')}}\" lc-id=\"lc_id_0\"></template><template default=\"\"><div> <span class=\"lyteMessageBoxContent\" aria-live=\"polite\" role=\"{{ltPropAriaRole}}\">{{ltPropMessage}}</span> </div></template></template> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropShowCloseButton}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"lyteMessageBoxClose\" onclick=\"{{action('closeMessageBox')}}\"></span></template></template></div> </template> </lyte-wormhole></template></template> </template>";;
LyteMessageboxComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0,1],"cn":"default"},{"t":"tX","p":[0,1,0],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0}],"dc":[1],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteMessageboxComponent._observedAttributes = [
    "ltPropType",
    "ltPropShow",
    "ltPropMessage",
    "ltPropDuration",
    "ltPropOffset",
    "ltPropTransition",
    "ltPropYield",
    "ltPropClass",
    "ltPropCloseManually",
    "ltPropAriaRole",
    "onResizeBoolean",
    "ltPropShowCloseButton",
    "ltPropFocusOnClose"
];

/**
 * @syntax nonYielded
 * <lyte-messagebox lt-prop-message = "This is a messagebox without yield.">
 * </lyte-messagebox>
 */

/**
* @syntax yielded
* <lyte-messagebox lt-prop-yield = true>
*     <template is = "registerYield" yield-name = "messageboxYield">
*         <span> Here is the text. </span>
*         <a href = "#"> Some link </a>
*     </template>
* </lyte-messagebox>
*/



LyteMessageboxComponent.register("lyte-messagebox", {
    hash: "LyteMessageboxComponent_6",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_3"
});


/***/ }),

/***/ 89136073:
/*!******************************************************************!*\
  !*** ./node_modules/zcat-ui/components/javascript/zcat-alert.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatAlert": () => (/* binding */ ZcatAlert)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 35554276);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 43360219);
/* harmony import */ var _zoho_lyte_ui_component_components_javascript_lyte_messagebox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@zoho/lyte-ui-component/components/javascript/lyte-messagebox.js */ 42957600);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component.js */ 62316197);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@slyte/core/index.js */ 60469700);







class ZcatAlert extends _component_js__WEBPACK_IMPORTED_MODULE_3__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
     		self: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object'),
			alertThis: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {default: this }),
			showAlert: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('boolean', {default: true })

		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({

			closeToaster(){
				this.setData('showAlert', false);
			}
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatAlert._template = "<template tag-name=\"zcat-alert\"> <lyte-messagebox id=\"showToast\" lt-prop-yield=\"true\" lt-prop-show=\"{{showAlert}}\" lt-prop-type=\"{{status}}\" lt-prop-offset=\"{&quot;top&quot;:&quot;0&quot;}\" lt-prop-duration=\"3000\" lt-prop-transition=\"{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;duration&quot;:&quot;0.2s&quot;}\"> <template is=\"registerYield\" yield-name=\"messageboxYield\"> <div class=\"alert-content-outer {{status}}\"> <div class=\"zcat-dF zcat-align-center {{expHandlers(header,'?:','zcat-gap-6','zcat-gap-4')}} left-alert-content\"> <div class=\"{{expHandlers(header,'?:','zcat-h20 zcat-w20 ','zcat-h16 zcat-w16 ')}}\"> <zcat-icon class=\"zcat-flex-center alert-icon-color\" name=\"{{expHandlers(expHandlers(status,'===','success'),'?:','alert-success',expHandlers(expHandlers(status,'===','info'),'?:','alert-info',expHandlers(expHandlers(status,'===','warning'),'?:','alert-warning',expHandlers(expHandlers(status,'===','error'),'?:','alert-danger',''))))}}\" width=\"{{expHandlers(header,'?:','20','16')}}\" height=\"{{expHandlers(header,'?:','20','16')}}\" stroke=\"{{expHandlers(expHandlers(status,'===','success'),'?:','var(--zcat-toast-icon-line-success)',expHandlers(expHandlers(status,'===','info'),'?:','var(--zcat-toast-icon-line-info)',expHandlers(expHandlers(status,'===','warning'),'?:','var(--zcat-toast-icon-line-warning)',expHandlers(expHandlers(status,'===','error'),'?:','var(--zcat-toast-icon-line-danger)',''))))}}\" strokewidth=\"{{expHandlers(zcatProp.header.left.logo.strokeWidth,'||',1.3)}}\"> </zcat-icon> </div> <div class=\"zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{header}}\" is=\"case\" lc-id=\"lc_id_0\"><p class=\"zcat-subtitle1 zcat-mb-2 alert-primary-text\">{{header}}</p></template></template><p class=\"{{expHandlers(header,'?:','zcat-body3','zcat-body1')}} zcat-body33 alert-secondary-text {{expHandlers(header,'?:','','no-header')}}\" style=\"white-space: pre-wrap; word-break: break-all; text-indent: -4px;\"> {{desc}} </p> </div> </div> <div class=\"zcat-dF zcat-align-center right-alert-content {{expHandlers(button,'?:','min-w25p','')}}\"> <!-- yet to give yield here - if needed --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{button}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-button zcat-prop=\"{{button}}\" self=\"{{self}}\"> </zcat-button></template></template><zcat-button self=\"{{alertThis}}\" zcat-prop=\"{ &quot;variant&quot;: &quot;ghost&quot;, &quot;size&quot;: &quot;small&quot;, &quot;color&quot;: &quot;grey&quot;, &quot;type&quot;: &quot;navigation&quot;, &quot;icon&quot;: {&quot;position&quot;: &quot;right&quot;, &quot;name&quot;: &quot;close&quot;, &quot;class&quot;: &quot;zcat-w16 zcat-h16 zcat-stroke-greybtn-icon&quot; }, &quot;callback&quot;: { &quot;name&quot;: &quot;closeToaster&quot; } }\"> </zcat-button> </div> </div> </template> </lyte-messagebox> </template><style>\n\n/* === Global base styles from reference css/zcat-alert.css === */\n.alert-content-outer{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n.successMessageIcon .alert-icon-color{\n    stroke: var(--zcat-toast-icon-line-success);\n}\n.errorMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-danger);\n}\n.warningMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-warning);\n}\n.infoMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-info);\n}\n\n\n.alert-content-outer.success .alert-primary-text{\n  color: var(--zcat-alerts-success-text-primary);\n}\n.alert-content-outer.success .alert-secondary-text{\n  color: var(--zcat-alerts-success-text-secondary)\n}\n.alert-content-outer.error .alert-primary-text{\n  color: var(--zcat-alerts-danger-text-primary);\n}\n.alert-content-outer.error .alert-secondary-text{\n  color: var(--zcat-alerts-danger-text-secondary)\n}\n.alert-content-outer.warning .alert-primary-text{\n  color: var(--zcat-alerts-warning-text-primary);\n}\n.alert-content-outer.warning .alert-secondary-text{\n  color: var(--zcat-alerts-warning-text-secondary)\n}\n.alert-content-outer.info .alert-primary-text{\n  color: var(--zcat-alerts-info-text-primary);\n}\n.alert-content-outer.info .alert-secondary-text{\n  color: var(--zcat-alerts-info-text-secondary)\n}\n/* no header  */\n.alert-content-outer.success .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-success-text-primary)\n}\n.alert-content-outer.error .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-danger-text-primary)\n}\n.alert-content-outer.warning .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-warning-text-primary)\n}\n.alert-content-outer.info .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-info-text-primary)\n}\n\n.lyteMessageBox.successMessageIcon, .lyteMessageBox.errorMessageIcon, .lyteMessageBox.warningMessageIcon, .lyteMessageBox.infoMessageIcon{\n    top: 10px !important\n}\n.right-alert-content{\n  justify-content: flex-end;\n}\n\n\n.lyte-svg {\n  display: none;\n}\nlyte-alert * {\n  box-sizing: border-box;\n}\nlyte-alert {\n  display: none;\n}\n.alertFreezeLayer {\n  background: var(--zcat-popup-bg-blur) !important;\n  /* opacity: 0.3 !important; */\n  opacity: unset !important;\n}\n.alertPopup {\n  padding: 0;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n}\n.alertPopup .alertHeader {\n  font: var(--zcat-font-18-22) var(--zcat-font-family-primary);\n  font-weight: 600;\n  color: var(--zcat-body-text-primary);\n}\n.alertPopup .alertPrimaryMsg {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n}\n.alertPopup.lyteAlertSlideDown {\n  transition-property: center;\n}\n\nlyte-alert-header, .alertHeader {        /* , .alertPrimaryMsg */\n    color: var(--zcat-body-text-primary);\n    padding: 24px 24px 16px;\n    background: var(--zcat-popup-bg);\n    border-radius: 10px 10px 0 0;\n    margin-bottom: 0;\n}\n.alertContent, lyte-alert-content {      /*  .alertSecondaryMsg, */\n    padding: 8px 24px;\n    max-height: calc(100vh - 200px) !important;\n    overflow-y: auto;\n    color: var(--zcat-body-text-primary);\n}\n.alertHeader .dBlock{\n    font: var(--zcat-heading-font-weight) var(--zcat-heading-font-h5) var(--zcat-font-family-primary);\n}\nlyte-alert-footer, .alertFooter {\n    padding: 16px 24px 24px;\n}\n\n/* === Global base styles from reference css/zcat-alert.css === */\n.alert-content-outer{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n.successMessageIcon .alert-icon-color{\n    stroke: var(--zcat-toast-icon-line-success);\n}\n.errorMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-danger);\n}\n.warningMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-warning);\n}\n.infoMessageIcon .alert-icon-color {\n    stroke: var(--zcat-toast-icon-line-info);\n}\n\n\n.alert-content-outer.success .alert-primary-text{\n  color: var(--zcat-alerts-success-text-primary);\n}\n.alert-content-outer.success .alert-secondary-text{\n  color: var(--zcat-alerts-success-text-secondary)\n}\n.alert-content-outer.error .alert-primary-text{\n  color: var(--zcat-alerts-danger-text-primary);\n}\n.alert-content-outer.error .alert-secondary-text{\n  color: var(--zcat-alerts-danger-text-secondary)\n}\n.alert-content-outer.warning .alert-primary-text{\n  color: var(--zcat-alerts-warning-text-primary);\n}\n.alert-content-outer.warning .alert-secondary-text{\n  color: var(--zcat-alerts-warning-text-secondary)\n}\n.alert-content-outer.info .alert-primary-text{\n  color: var(--zcat-alerts-info-text-primary);\n}\n.alert-content-outer.info .alert-secondary-text{\n  color: var(--zcat-alerts-info-text-secondary)\n}\n/* no header  */\n.alert-content-outer.success .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-success-text-primary)\n}\n.alert-content-outer.error .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-danger-text-primary)\n}\n.alert-content-outer.warning .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-warning-text-primary)\n}\n.alert-content-outer.info .alert-secondary-text.no-header{\n  color: var(--zcat-alerts-info-text-primary)\n}\n\n.lyteMessageBox.successMessageIcon, .lyteMessageBox.errorMessageIcon, .lyteMessageBox.warningMessageIcon, .lyteMessageBox.infoMessageIcon{\n    top: 10px !important\n}\n.right-alert-content{\n  justify-content: flex-end;\n}\n\n\n.lyte-svg {\n  display: none;\n}\nlyte-alert * {\n  box-sizing: border-box;\n}\nlyte-alert {\n  display: none;\n}\n.alertFreezeLayer {\n  background: var(--zcat-popup-bg-blur) !important;\n  /* opacity: 0.3 !important; */\n  opacity: unset !important;\n}\n.alertPopup {\n  padding: 0;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n}\n.alertPopup .alertHeader {\n  font: var(--zcat-font-18-22) var(--zcat-font-family-primary);\n  font-weight: 600;\n  color: var(--zcat-body-text-primary);\n}\n.alertPopup .alertPrimaryMsg {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n}\n.alertPopup.lyteAlertSlideDown {\n  transition-property: center;\n}\n\nlyte-alert-header, .alertHeader {        /* , .alertPrimaryMsg */\n    color: var(--zcat-body-text-primary);\n    padding: 24px 24px 16px;\n    background: var(--zcat-popup-bg);\n    border-radius: 10px 10px 0 0;\n    margin-bottom: 0;\n}\n.alertContent, lyte-alert-content {      /*  .alertSecondaryMsg, */\n    padding: 8px 24px;\n    max-height: calc(100vh - 200px) !important;\n    overflow-y: auto;\n    color: var(--zcat-body-text-primary);\n}\n.alertHeader .dBlock{\n    font: var(--zcat-heading-font-weight) var(--zcat-heading-font-h5) var(--zcat-font-family-primary);\n}\nlyte-alert-footer, .alertFooter {\n    padding: 16px 24px 24px;\n}</style>";;
ZcatAlert._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"a","p":[1,1,1,1]},{"t":"cD","p":[1,1,1,1],"in":3,"sibl":[2]},{"t":"s","p":[1,1,3,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,1,3,2]},{"t":"tX","p":[1,1,3,2,1]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[1,3,4]},{"t":"cD","p":[1,3,4],"in":0}],"dc":[3,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatAlert._observedAttributes = ["self", "alertThis", "showAlert"];

ZcatAlert.register("zcat-alert", {
    hash: "ZcatAlert_6",
    refHash: "C_zcat-ui_zcat-ui_2"
}); 


/***/ })

}]);
//# sourceMappingURL=alert-comp.js.map
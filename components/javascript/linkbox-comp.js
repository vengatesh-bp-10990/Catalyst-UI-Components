"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/linkbox-comp"],{

/***/ 36258940:
/*!***********************************************!*\
  !*** ./components/javascript/linkbox-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkboxComp": () => (/* binding */ LinkboxComp)
/* harmony export */ });
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class LinkboxComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('linkboxObj') || {};
    let labelPos = obj.labelPosition || 'top';
    let value = obj.value || 'https://console.catalyst.zoho.com/baas/project/dev';
    let label = obj.label || 'URL';
    let size = obj.size || 'default';
    let disabled = obj.disabled || false;

    let sizeClass = size === 'small' ? ' zcat-link-field-small' : '';
    let disabledClass = disabled ? ' input-field-disabled' : '';

    let topHtml = `<div class="zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2">\n  <p class="zcat-input-label">${label}</p>\n</div>`;
    let leftLabelHtml = `<p class="zcat-input-label" style="min-width:40px;margin-right:8px">${label}</p>`;
    let insideLabelHtml = `<span class="zcat-input-label" style="margin-right:4px;white-space:nowrap">${label}:</span>`;
    let copyBtn = `<button class="zcat-link-copy-btn" onclick="navigator.clipboard&&navigator.clipboard.writeText(this.closest('.zcat-link-field-box').querySelector('.zcat-link-text').textContent)" title="Copy">\n  <zcat-icon name="copy" width="14" height="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n</button>`;

    let inner = `<span class="zcat-link-text" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px">${value}</span>\n${copyBtn}`;

    let htmlParts = [];
    if (labelPos === 'top') {
      htmlParts = [topHtml, `<div class="zcat-link-field-box${sizeClass}${disabledClass}">\n  ${inner}\n</div>`];
    } else if (labelPos === 'left') {
      htmlParts = [`<div class="zcat-dF zcat-align-center">\n  ${leftLabelHtml}\n  <div class="zcat-link-field-box${sizeClass}${disabledClass}" style="flex:1">\n    ${inner}\n  </div>\n</div>`];
    } else if (labelPos === 'inside') {
      htmlParts = [`<div class="zcat-link-field-box${sizeClass}${disabledClass}">\n  ${insideLabelHtml}${inner}\n</div>`];
    } else {
      htmlParts = [`<div class="zcat-link-field-box${sizeClass}${disabledClass}">\n  ${inner}\n</div>`];
    }

    let slyte_code = `<div class="zcat-link-box-wrapper">\n  <!-- Label (${labelPos}) -->\n${htmlParts.join('\n')}\n</div>`;

    let js_code = `data() {\n  return {\n    linkUrl: '${value}'\n  };\n}`;

    let html_code = htmlParts.join('\n');

    let css_code = `.zcat-link-field-box {\n  border-radius: 6px;\n  border: 1px solid var(--zcat-inputField-border-default);\n  background: var(--zcat-inputField-bg-default);\n  font-family: var(--zcat-font-family-code);\n  padding: 8px 12px;\n  height: 36px;\n  box-sizing: border-box;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}`;

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
    this.setData('htmlCodeSnippet', { code: html_code });
    this.setData('cssCodeSnippet', { code: css_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'slyte' }),
      linkboxObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          labelPosition: 'top',
          label: 'URL',
          value: 'https://console.catalyst.zoho.com/baas/project/dev',
          size: 'default',
          disabled: false
        }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('linkboxObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        let obj = this.getData('linkboxObj');
        this.$app.objectUtils(obj, 'add', 'labelPosition', 'top');
        this.$app.objectUtils(obj, 'add', 'label', 'URL');
        this.$app.objectUtils(obj, 'add', 'value', 'https://console.catalyst.zoho.com/baas/project/dev');
        this.$app.objectUtils(obj, 'add', 'size', 'default');
        this.$app.objectUtils(obj, 'add', 'disabled', false);
        this.setData('toggleDisabledObj', { checked: false, size: 'small', callback: { name: 'toggleDisabled' } });
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
      },
      changeLabelPosition(e) {
        this.$app.objectUtils(this.getData('linkboxObj'), 'add', 'labelPosition', e.target.value);
        this.constructCodeSnippet();
      },
      changeSize(e) {
        this.$app.objectUtils(this.getData('linkboxObj'), 'add', 'size', e.target.value);
        this.constructCodeSnippet();
      },
      changeValue(e) {
        this.$app.objectUtils(this.getData('linkboxObj'), 'add', 'value', e.target.value);
        this.constructCodeSnippet();
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

LinkboxComp._template = "<template tag-name=\"linkbox-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Link Box</h1> <p class=\"zcat-page-desc\">A read-only field for displaying URLs or structured links with a one-click copy button. Supports top, left, inside, and no-label variants.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px;display:flex;align-items:center;justify-content:center\"> <!-- Label Top --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(linkboxObj.labelPosition,'===','top')}}\" is=\"case\" lc-id=\"lc_id_0\"><div style=\"width:100%\"> <div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\"> <p class=\"zcat-input-label\">{{linkboxObj.label}}</p> </div> <div class=\"zcat-link-field-box {{expHandlers(expHandlers(linkboxObj.size,'===','small'),'?:','zcat-link-field-small','')}} {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">{{linkboxObj.value}}</span> <button class=\"zcat-link-copy-btn\" onclick=\"navigator.clipboard&amp;&amp;navigator.clipboard.writeText('{{linkboxObj.value}}')\" title=\"Copy\" style=\"margin-left:8px;background:none;border:none;cursor:pointer;display:flex;align-items:center;padding:0\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </button> </div> </div></template></template><!-- Label Left --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(linkboxObj.labelPosition,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><div style=\"width:100%;display:flex;align-items:center\"> <p class=\"zcat-input-label {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\" style=\"min-width:40px;margin-right:8px;white-space:nowrap\">{{linkboxObj.label}}</p> <div class=\"zcat-link-field-box {{expHandlers(expHandlers(linkboxObj.size,'===','small'),'?:','zcat-link-field-small','')}} {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\" style=\"flex:1\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">{{linkboxObj.value}}</span> <button class=\"zcat-link-copy-btn\" onclick=\"navigator.clipboard&amp;&amp;navigator.clipboard.writeText('{{linkboxObj.value}}')\" title=\"Copy\" style=\"margin-left:8px;background:none;border:none;cursor:pointer;display:flex;align-items:center;padding:0\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </button> </div> </div></template></template><!-- Label Inside --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(linkboxObj.labelPosition,'===','inside')}}\" is=\"case\" lc-id=\"lc_id_0\"><div style=\"width:100%\"> <div class=\"zcat-link-field-box {{expHandlers(expHandlers(linkboxObj.size,'===','small'),'?:','zcat-link-field-small','')}} {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\"> <span class=\"zcat-input-label\" style=\"margin-right:4px;white-space:nowrap;font-size:12px\">{{linkboxObj.label}}:</span> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">{{linkboxObj.value}}</span> <button class=\"zcat-link-copy-btn\" onclick=\"navigator.clipboard&amp;&amp;navigator.clipboard.writeText('{{linkboxObj.value}}')\" title=\"Copy\" style=\"margin-left:8px;background:none;border:none;cursor:pointer;display:flex;align-items:center;padding:0\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </button> </div> </div></template></template><!-- No Label --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(linkboxObj.labelPosition,'===','none')}}\" is=\"case\" lc-id=\"lc_id_0\"><div style=\"width:100%\"> <div class=\"zcat-link-field-box {{expHandlers(expHandlers(linkboxObj.size,'===','small'),'?:','zcat-link-field-small','')}} {{expHandlers(linkboxObj.disabled,'?:','input-field-disabled','')}}\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">{{linkboxObj.value}}</span> <button class=\"zcat-link-copy-btn\" onclick=\"navigator.clipboard&amp;&amp;navigator.clipboard.writeText('{{linkboxObj.value}}')\" title=\"Copy\" style=\"margin-left:8px;background:none;border:none;cursor:pointer;display:flex;align-items:center;padding:0\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </button> </div> </div></template></template></div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Label Position --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label Position</span> <select onchange=\"{{action('changeLabelPosition',event)}}\" class=\"zcat-custom-select\"> <option value=\"top\">Top</option> <option value=\"left\">Left</option> <option value=\"inside\">Label Inside</option> <option value=\"none\">No Label</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select onchange=\"{{action('changeSize',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> </select> </div> <!-- Disabled --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Label Top</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2\"> <p class=\"zcat-input-label\">URL</p> </div> <div class=\"zcat-link-field-box\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Label Left</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div style=\"display:flex;align-items:center\"> <p class=\"zcat-input-label\" style=\"min-width:40px;margin-right:8px;white-space:nowrap\">URL</p> <div class=\"zcat-link-field-box\" style=\"flex:1\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Label Inside</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-link-field-box\"> <span class=\"zcat-input-label\" style=\"margin-right:4px;white-space:nowrap;font-size:12px\">URL:</span> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">No Label</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-link-field-box\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small Size</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2\"> <p class=\"zcat-input-label\">URL</p> </div> <div class=\"zcat-link-field-box zcat-link-field-small\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:11px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 input-field-disabled\"> <p class=\"zcat-input-label\">URL</p> </div> <div class=\"zcat-link-field-box input-field-disabled\"> <span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:12px\">https://console.catalyst.zoho.com/baas/project/dev</span> <span style=\"margin-left:8px;cursor:pointer;display:flex;align-items:center\"> <zcat-icon name=\"copy\" width=\"14\" height=\"14\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> </div> </div></template></template></div> </template>";;
LinkboxComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"s","p":[0,1,3,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"tX","p":[0,3,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"s","p":[0,1,3,1,6],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"tX","p":[0,3,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,1,3,1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1,0],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"a","p":[0,1,5],"cn":"lc_id_0"},{"t":"cD","p":[0,1,5,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,3,1,12],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,9,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,9,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,1,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,9,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,5,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,5,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,5,3,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,5,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,5,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,5,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,9,8,7,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0,3,1,3,3,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1,5,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,3,11,3,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LinkboxComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "linkboxObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



LinkboxComp.register("linkbox-comp", {
  hash: "LinkboxComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=linkbox-comp.js.map
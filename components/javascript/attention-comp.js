"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/attention-comp"],{

/***/ 23386810:
/*!*************************************************!*\
  !*** ./components/javascript/attention-comp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttentionComp": () => (/* binding */ AttentionComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_attention_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-attention.js */ 19968873);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class AttentionComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let typeSelect = node.querySelector('[data-action="changeAttentionType"]');
    if (typeSelect) {
      typeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('attentionObj'), 'add', 'type', e.target.value);
        comp.constructCodeSnippet();
      });
    }

    let headingInput = node.querySelector('[data-action="changeAttentionHeading"]');
    if (headingInput) {
      headingInput.addEventListener('input', function (e) {
        comp.$app.objectUtils(comp.getData('attentionObj'), 'add', 'name', e.target.value);
        comp.constructCodeSnippet();
      });
    }
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
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      attentionObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          name: 'This field is required before submission.',
          type: 'default'
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
      toggleDescObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleDesc' } }
      }),
      // --- Type Variant objects ---
      variantDefaultObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'default', name: 'Default notice — general information.', desc: 'This is a neutral attention banner for general guidance.' }
      }),
      variantInfoObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'info', name: 'Info notice — helpful tip.', desc: 'You can use keyboard shortcuts to speed up your workflow.' }
      }),
      variantSuccessObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'success', name: 'Success notice — action completed.', desc: 'Your changes have been saved successfully.' }
      }),
      variantDangerObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'danger', name: 'Danger notice — critical alert.', desc: 'This action is irreversible. Please proceed with caution.' }
      }),
      variantWarningObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'warning', name: 'Warning notice — heads up.', desc: 'Your session will expire in 5 minutes. Save your work.' }
      }),
      // --- Content Variant objects ---
      variantHeadOnlyObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { name: 'This field is required before submission.' }
      }),
      variantWithDescObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { name: 'Important Notice', desc: 'Please review the changes carefully before saving. Unsaved progress will be lost.' }
      }),
      variantLongObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { type: 'info', name: 'System Maintenance', desc: 'The platform will undergo scheduled maintenance on Saturday from 2:00 AM to 6:00 AM UTC. During this time, some features may be unavailable.' }
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

AttentionComp._template = "<template tag-name=\"attention-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Attention</h1> <p class=\"zcat-page-desc\">Attention banners are inline notices that provide contextual information, tips, or guidance within a page section. Available in Default, Info, Success, Danger and Warning types.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:20px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{attentionObj}}\"></zcat-attention> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Type --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select data-action=\"changeAttentionType\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"info\">Info</option> <option value=\"success\">Success</option> <option value=\"danger\">Danger</option> <option value=\"warning\">Warning</option> </select> </div> <!-- Heading Text --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Heading</span> <input type=\"text\" data-action=\"changeAttentionHeading\" class=\"zcat-custom-input\" value=\"{{attentionObj.name}}\" placeholder=\"Heading text\"> </div> <!-- Description toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Description</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDescObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Type Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Info</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantInfoObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Success</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantSuccessObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Danger</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantDangerObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Warning</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantWarningObj}}\"></zcat-attention> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Content Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Heading Only</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantHeadOnlyObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Description</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantWithDescObj}}\"></zcat-attention> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Long Content</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px;\"> <zcat-attention self=\"{{self}}\" zcat-prop=\"{{variantLongObj}}\"></zcat-attention> </div> </div> </div> </div></template></template> </div> </template><style>/* attention-comp doc page — no extra styles needed, uses layout-comp shared classes */\n</style>";;
AttentionComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,11,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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



AttentionComp.register("attention-comp", {
  hash: "AttentionComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 19968873:
/*!*************************************************!*\
  !*** ./components/javascript/zcat-attention.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatAttention": () => (/* binding */ ZcatAttention)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatAttention extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

ZcatAttention._template = "<template tag-name=\"zcat-attention\"> <div class=\"zcat-attention-container zcat-atten-{{expHandlers(zcatProp.type,'||','default')}}\"> <div class=\"zcat-attention-inner\"> <div class=\"zcat-attention-icon-wrap\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','success')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-icon name=\"alert-success\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template case=\"{{expHandlers(zcatProp.type,'===','danger')}}\" is=\"case\" lc-id=\"lc_id_1\"><zcat-icon name=\"alert-danger\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template case=\"{{expHandlers(zcatProp.type,'===','warning')}}\" is=\"case\" lc-id=\"lc_id_2\"><zcat-icon name=\"alert-warning\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template default=\"\"><zcat-icon name=\"info\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template></template> </div> <div class=\"zcat-attention-text\"> <span class=\"zcat-attention-head {{expHandlers(zcatProp.desc,'?:','zcat-attention-head-bold','')}}\">{{zcatProp.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.desc}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-attention-desc\">{{zcatProp.desc}}</span></template></template> </div> </div> </div> </template><style>/* ==============================\n   ZCAT Attention Component\n   Inline info/notice banner\n   Types: default, info, success, danger, warning\n   ============================== */\n\nzcat-attention * {\n  box-sizing: border-box;\n}\n\n.zcat-attention-container {\n  display: flex;\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* --- Type Variants --- */\n.zcat-atten-default {\n  background: var(--zcat-attention-default-bg);\n  border: 1px solid var(--zcat-attention-default-border);\n}\n.zcat-atten-info {\n  background: var(--zcat-alerts-info-bg);\n  border: 1px solid var(--zcat-alerts-info-border);\n}\n.zcat-atten-success {\n  background: var(--zcat-alerts-success-bg);\n  border: 1px solid var(--zcat-alerts-success-border);\n}\n.zcat-atten-danger {\n  background: var(--zcat-alerts-danger-bg);\n  border: 1px solid var(--zcat-alerts-danger-border);\n}\n.zcat-atten-warning {\n  background: var(--zcat-alerts-warning-bg);\n  border: 1px solid var(--zcat-alerts-warning-border);\n}\n\n.zcat-attention-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  width: 100%;\n}\n\n/* --- Icon --- */\n.zcat-attention-icon-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 14px;\n  height: 20px;\n}\n.zcat-attention-icon-wrap zcat-icon {\n  display: flex;\n}\n\n/* Icon color per type */\n.zcat-atten-default .zcat-attention-icon-wrap {\n  color: var(--zcat-attention-default-icon);\n}\n.zcat-atten-info .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-info-icon);\n}\n.zcat-atten-success .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-success-icon);\n}\n.zcat-atten-danger .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-danger-icon);\n}\n.zcat-atten-warning .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-warning-icon);\n}\n\n/* --- Text content --- */\n.zcat-attention-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n\n/* Heading color per type */\n.zcat-atten-default .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-attention-default-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-info .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-info-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-success .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-success-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-danger .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-danger-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-warning .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-warning-text-primary);\n  word-break: break-word;\n}\n\n.zcat-attention-head-bold {\n  font-weight: 600;\n}\n\n/* Description color per type */\n.zcat-atten-default .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-attention-default-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-info .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-info-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-success .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-success-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-danger .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-danger-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-warning .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-warning-text-secondary);\n  word-break: break-word;\n}\n</style>";;
ZcatAttention._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true}},"d":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[1,1,3,1]},{"t":"tX","p":[1,1,3,1,0]},{"t":"s","p":[1,1,3,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;
ZcatAttention._observedAttributes = ["self", "zcatProp"];

ZcatAttention.register("zcat-attention", {
  hash: "ZcatAttention_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=attention-comp.js.map
"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/cards-comp"],{

/***/ 54452207:
/*!*********************************************!*\
  !*** ./components/javascript/cards-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComp": () => (/* binding */ CardsComp)
/* harmony export */ });
/* harmony import */ var _zcat_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-cards.js */ 74525217);
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class CardsComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      cardsObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
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
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
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

CardsComp._template = "<template tag-name=\"cards-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Cards</h1> <p class=\"zcat-page-desc\">Selection cards supporting display-only, single-select (radio), and multi-select (checkbox) modes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-cards self=\"{{self}}\" zcat-prop=\"{{cardsObj}}\"></zcat-cards> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Selection Type</span> <select data-action=\"changeType\" class=\"zcat-custom-select\"> <option value=\"default\">Default (Display)</option> <option value=\"single_sel\" selected=\"\">Single Select</option> <option value=\"multi_sel\">Multi Select</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Background</span> <select data-action=\"changeBg\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> <option value=\"tertiary\">Tertiary</option> <option value=\"quaternary\">Quaternary</option> <option value=\"bodyBg\">Body Background</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Selection Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (Display)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-default zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Option A</div></div> </div> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Option B</div></div> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Single Select</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-single zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Selected</div></div> </div> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Unselected</div></div> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Multi Select</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div class=\"zcat-cards-wrapper zcat-cards-multi zcat-cards-horizontal\" style=\"gap:8px\"> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Checked A</div></div> </div> <div class=\"zcat-card primary selected\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-selected);flex:1\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Checked B</div></div> </div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">Background Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card primary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);background:var(--zcat-card-bg-default)\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Primary Card</div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card secondary\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-default);background:var(--zcat-card-bg-secondary)\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Secondary Card</div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:12px\"> <div class=\"zcat-card disabled\" style=\"padding:12px;border-radius:10px;border:1px solid var(--zcat-card-border-disabled);background:var(--zcat-card-bg-disabled);opacity:0.6\"> <div class=\"zcat-card-body\"><div class=\"zcat-card-title\" style=\"font-size:13px;font-weight:600\">Disabled Card</div></div> </div> </div> </div> </div> </div></template></template> </div> </template><style>/* cards-comp demo styles are in utilities */\n</style>";;
CardsComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[7,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;

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



CardsComp.register("cards-comp", {
  hash: "CardsComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 74525217:
/*!*********************************************!*\
  !*** ./components/javascript/zcat-cards.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatCards": () => (/* binding */ ZcatCards)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatCards extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }, { watch: true }),
      selectedValue: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' }),
      selectedValues: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] }),
      _renderCards: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] }),
      _wrapperTypeClass: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: 'zcat-cards-default' }),
      _wrapperLayoutClass: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: 'zcat-cards-horizontal' })
    }), arg1);
  }

  init() {
    this._syncSelection();
    this._buildRenderCards();
  }

  _syncSelection() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    let type = zcatProp.type || 'default';

    if (type === 'single_sel') {
      this.setData('selectedValue', zcatProp.selected || '');
      this.setData('selectedValues', []);
    } else if (type === 'multi_sel') {
      this.setData('selectedValues', (zcatProp.selected && Array.isArray(zcatProp.selected)) ? zcatProp.selected.slice() : []);
      this.setData('selectedValue', '');
    }
  }

  _buildRenderCards() {
    let zcatProp = this.getData('zcatProp') || {};
    let type = zcatProp.type || 'default';
    let selVal = this.getData('selectedValue');
    let selVals = this.getData('selectedValues') || [];
    let cards = zcatProp.cards || [];
    let bgVariant = zcatProp.bgVariant || 'primary';

    let rendered = [];
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let isSelected = false;
      if (type === 'single_sel') {
        isSelected = card.value === selVal;
      } else if (type === 'multi_sel') {
        isSelected = selVals.indexOf(card.value) !== -1;
      }
      rendered.push({
        title: card.title || '',
        description: card.description || '',
        icon: card.icon || '',
        value: card.value || '',
        disabled: card.disabled || false,
        _bgVariant: bgVariant,
        _isSelected: isSelected,
        _selectedClass: isSelected ? 'selected' : '',
        _radioCheckedClass: (type === 'single_sel' && isSelected) ? 'checked' : '',
        _checkboxCheckedClass: (type === 'multi_sel' && isSelected) ? 'checked' : ''
      });
    }
    this.setData('_renderCards', rendered);

    // Wrapper classes
    let typeClass = 'zcat-cards-default';
    if (type === 'single_sel') typeClass = 'zcat-cards-single';
    else if (type === 'multi_sel') typeClass = 'zcat-cards-multi';
    this.setData('_wrapperTypeClass', typeClass);
    this.setData('_wrapperLayoutClass', zcatProp.layout === 'vertical' ? 'zcat-cards-vertical' : 'zcat-cards-horizontal');
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      selectCard(card) {
        if (card.disabled) return;
        let zcatProp = this.getData('zcatProp');
        let type = (zcatProp && zcatProp.type) || 'default';

        if (type === 'default') {
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, card);
          }
          return;
        }

        if (type === 'single_sel') {
          this.setData('selectedValue', card.value);
          this._buildRenderCards();
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, card);
          }
        }

        if (type === 'multi_sel') {
          let vals = (this.getData('selectedValues') || []).slice();
          let idx = vals.indexOf(card.value);
          if (idx !== -1) {
            vals.splice(idx, 1);
          } else {
            vals.push(card.value);
          }
          this.setData('selectedValues', vals);
          this._buildRenderCards();
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, vals);
          }
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncSelection();
          this._buildRenderCards();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatCards._template = "<template tag-name=\"zcat-cards\"> <div class=\"zcat-cards-wrapper {{_wrapperTypeClass}} {{_wrapperLayoutClass}} {{expHandlers(zcatProp.disabled,'?:','zcat-cards-disabled','')}}\"> <template items=\"{{_renderCards}}\" item=\"card\" index=\"cardIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-card {{card._bgVariant}} {{expHandlers(card.disabled,'?:','disabled','')}} {{card._selectedClass}}\" onclick=\"{{action('selectCard',card)}}\"> <!-- Selection indicator --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','single_sel')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-radio {{card._radioCheckedClass}}\"> <span class=\"zcat-card-radio-dot\"></span> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','multi_sel')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-checkbox {{card._checkboxCheckedClass}}\"> <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg> </div> </template></template> <!-- Card icon --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-icon\"> <zcat-icon name=\"{{card.icon}}\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"1.5\"></zcat-icon> </div> </template></template> <!-- Card content --> <div class=\"zcat-card-body\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.title}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-title\">{{card.title}}</div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.description}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-desc\">{{card.description}}</div> </template></template> </div> <!-- Selected checkmark (corner) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card._isSelected}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-selected-mark\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg> </div> </template></template> </div> </template> </div> </template><style>/* ==============================\n   ZCAT Cards Component\n   ============================== */\n\nzcat-cards * { box-sizing: border-box; }\n\n.zcat-cards-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-cards-wrapper.zcat-cards-vertical {\n  flex-direction: column;\n}\n\n/* Card base */\n.zcat-card {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-card-border-default);\n  cursor: pointer;\n  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;\n  min-width: 180px;\n  overflow: hidden;\n}\n.zcat-cards-horizontal .zcat-card {\n  flex: 1;\n  min-width: 160px;\n}\n\n/* Background Variants */\n.zcat-card.primary { background: var(--zcat-card-bg-default); }\n.zcat-card.secondary { background: var(--zcat-card-bg-secondary); }\n.zcat-card.tertiary { background: var(--zcat-card-bg-tertiary); }\n.zcat-card.quaternary { background: var(--zcat-card-bg-quaternary); }\n.zcat-card.bodyBg { background: var(--zcat-card-bg-bodyBg); }\n\n/* Hover */\n.zcat-card:hover {\n  border-color: var(--zcat-card-border-hover);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n/* Selected */\n.zcat-card.selected {\n  border-color: var(--zcat-card-border-selected);\n  box-shadow: 0 0 0 1px var(--zcat-card-border-selected);\n}\n\n/* Disabled */\n.zcat-card.disabled {\n  background: var(--zcat-card-bg-disabled) !important;\n  border-color: var(--zcat-card-border-disabled) !important;\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.zcat-card.disabled:hover {\n  box-shadow: none;\n}\n\n/* === Radio indicator (single select) === */\n.zcat-card-radio {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid var(--zcat-inputField-border-default);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: border-color 0.15s;\n}\n.zcat-card-radio.checked {\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-card-radio-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: transparent;\n  transition: background 0.15s;\n}\n.zcat-card-radio.checked .zcat-card-radio-dot {\n  background: var(--zcat-btn-fill-bg-primary-default);\n}\n\n/* === Checkbox indicator (multi select) === */\n.zcat-card-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid var(--zcat-inputField-border-default);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.zcat-card-checkbox svg { opacity: 0; transition: opacity 0.12s; }\n.zcat-card-checkbox.checked {\n  background: var(--zcat-btn-fill-bg-primary-default);\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-card-checkbox.checked svg {\n  opacity: 1;\n  stroke: #fff;\n}\n\n/* Card icon */\n.zcat-card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  flex-shrink: 0;\n}\n\n/* Card body */\n.zcat-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.zcat-card-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--zcat-body-text-primary);\n  margin-bottom: 4px;\n}\n.zcat-card-desc {\n  font-size: 12px;\n  color: var(--zcat-body-text-secondary);\n  line-height: 1.4;\n}\n\n/* Selected corner mark */\n.zcat-card-selected-mark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 6px 0 6px;\n  background: var(--zcat-btn-fill-bg-primary-default);\n}\n\n/* === Disabled wrapper === */\n.zcat-cards-disabled .zcat-card {\n  background: var(--zcat-card-bg-disabled) !important;\n  border-color: var(--zcat-card-border-disabled) !important;\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n</style>";;
ZcatCards._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[1,13,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,13,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[1,17],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0}],"dc":[3],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

ZcatCards._observedAttributes = [
  "self",
  "zcatProp",
  "selectedValue",
  "selectedValues",
  "_renderCards",
  "_wrapperTypeClass",
  "_wrapperLayoutClass"
];



ZcatCards.register("zcat-cards", {
  hash: "ZcatCards_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=cards-comp.js.map
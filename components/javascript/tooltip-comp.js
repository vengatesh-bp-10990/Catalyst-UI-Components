"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/tooltip-comp"],{

/***/ 93359097:
/*!***********************************************!*\
  !*** ./components/javascript/tooltip-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComp": () => (/* binding */ TooltipComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-tooltip.js */ 83216215);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class TooltipComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let tooltipObj = this.getData('tooltipObj') || {};

    let slyte_code = '<zcat-tooltip\n  zcat-prop="{{tooltipObj}}"\n>\n  <template is="yield" yield-name="trigger">\n    <!-- your trigger element here -->\n  </template>\n</zcat-tooltip>';

    let js_code = 'tooltipObj: prop("object", {\n  default: {\n    "id": "' + (tooltipObj.id || 'my-tooltip') + '",\n    "value": "' + (tooltipObj.value || 'Tooltip text') + '",\n    "placement": "' + (tooltipObj.placement || 'auto') + '"\n  }\n})';

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'slyte' }),
      tooltipObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { id: 'demo-tooltip', value: 'This is a helpful tooltip', placement: 'auto' } }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      varTopObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { id: 'var-top-tip', value: 'Tooltip on top', placement: 'top' } }),
      varBottomObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { id: 'var-bottom-tip', value: 'Tooltip on bottom', placement: 'bottom' } }),
      varLeftObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { id: 'var-left-tip', value: 'Tooltip on left', placement: 'left' } }),
      varRightObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { id: 'var-right-tip', value: 'Tooltip on right', placement: 'right' } }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('tooltipObj', { id: 'demo-tooltip', value: 'This is a helpful tooltip', placement: 'auto' });
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
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
      changePlacement(event) {
        this.$app.objectUtils(this.getData('tooltipObj'), 'add', 'placement', event.target.value);
        this.constructCodeSnippet();
      },
      copyCode() {
        let activeTab = this.getData('activeTab');
        let key = activeTab + 'CodeSnippet';
        let code = (this.getData(key) || {}).code || '';
        navigator.clipboard.writeText(code);
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

TooltipComp._template = "<template tag-name=\"tooltip-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Tooltip</h1> <p class=\"zcat-page-desc\">Tooltips display contextual information when hovering over a trigger element. Ideal for labels, info icons, and truncated content.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:48px 24px; min-height:140px; display:flex; align-items:center; justify-content:center;\"> <zcat-tooltip zcat-prop=\"{{tooltipObj}}\"> <template is=\"yield\" yield-name=\"trigger\"> <div style=\"display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border:1px solid var(--zcat-border-1); border-radius:6px; cursor:default; font-size:13px; color:var(--zcat-text-primary);\"> <zcat-icon name=\"info\" width=\"14\" height=\"14\" stroke=\"var(--zcat-primary-1)\" strokewidth=\"1.5\"></zcat-icon> <span>Hover to see tooltip</span> </div> </template> </zcat-tooltip> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Placement</span> <select onchange=\"{{action('changePlacement',event)}}\" class=\"zcat-custom-select\"> <option value=\"auto\">Auto</option> <option value=\"top\">Top</option> <option value=\"bottom\">Bottom</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Placement Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Top</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <zcat-tooltip zcat-prop=\"{{varTopObj}}\"> <template is=\"yield\" yield-name=\"trigger\"> <span style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </template> </zcat-tooltip> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Bottom</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <zcat-tooltip zcat-prop=\"{{varBottomObj}}\"> <template is=\"yield\" yield-name=\"trigger\"> <span style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </template> </zcat-tooltip> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Left</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <zcat-tooltip zcat-prop=\"{{varLeftObj}}\"> <template is=\"yield\" yield-name=\"trigger\"> <span style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </template> </zcat-tooltip> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Right</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <zcat-tooltip zcat-prop=\"{{varRightObj}}\"> <template is=\"yield\" yield-name=\"trigger\"> <span style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </template> </zcat-tooltip> </div> </div> </div> </div></template></template></div> </template>";;
TooltipComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"r","p":[0,1,3,1,1,1],"dN":[{"t":"cD","p":[1,1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":0,"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[5,4,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"r","p":[0,3,1,3,1,1],"dN":[],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"r","p":[0,3,3,3,1,1],"dN":[],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"r","p":[0,3,5,3,1,1],"dN":[],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"r","p":[0,3,7,3,1,1],"dN":[],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,4,2,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

TooltipComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "tooltipObj",
  "resetButtonObj",
  "varTopObj",
  "varBottomObj",
  "varLeftObj",
  "varRightObj",
  "slyteCodeSnippet",
  "jsCodeSnippet"
];


TooltipComp.register("tooltip-comp", {
  hash: "TooltipComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=tooltip-comp.js.map
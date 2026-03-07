"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components_javascript_zcat-tooltip_js"],{

/***/ 83216215:
/*!***********************************************!*\
  !*** ./components/javascript/zcat-tooltip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatTooltip": () => (/* binding */ ZcatTooltip)
/* harmony export */ });
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_hovercard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-hovercard.js */ 57012611);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatTooltip extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
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

ZcatTooltip._template = "<template tag-name=\"zcat-tooltip\"> <div id=\"zcatTooltip{{zcatProp.id}}\" lyte-hovercard=\"true\" class=\"zcat-tooltip-trigger\"> <lyte-yield yield-name=\"trigger\"></lyte-yield> </div> <lyte-hovercard lt-prop-origin-elem=\"#zcatTooltip{{zcatProp.id}}\" lt-prop-auto-show=\"true\" lt-prop-keep-alive=\"true\" lt-prop-type=\"callout\" lt-prop-prevent-focus=\"true\" lt-prop-placement=\"{{expHandlers(zcatProp.placement,'?:',zcatProp.placement,'auto')}}\" lt-prop-width=\"{{expHandlers(zcatProp.width,'?:',zcatProp.width,'fit-content')}}\"> <template is=\"registerYield\" yield-name=\"hoverCardYield\"> <lyte-hovercard-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.yield}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-yield yield-name=\"{{zcatProp.yield}}\"></lyte-yield></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.value}}\" is=\"case\" lc-id=\"lc_id_0\"><p class=\"zcat-tooltip-text\">{{zcatProp.value}}</p></template></template></lyte-hovercard-content> </template> </lyte-hovercard> </template><style>/* zcat-tooltip.css\n   Styles the lyteTooltip callout popup produced by lyte-hovercard.\n   Tokens from catalyst-light/dark-mode.css:\n     --zcat-tooltip-bg, --zcat-tooltip-text-primary, --zcat-tooltip-border\n*/\n\n.lyteTooltip {\n  font-weight: 400;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  max-width: 300px;\n  padding: 10px;\n  background: var(--zcat-tooltip-bg) !important;\n  color: var(--zcat-tooltip-text-primary) !important;\n  text-align: left;\n  box-shadow: 2px 2px 10px 2px var(--zcat-shadow-bg-default);\n  border-radius: 6px;\n  word-break: break-word;\n  box-sizing: border-box;\n  border: 1px solid var(--zcat-tooltip-border);\n  z-index: 10000;\n}\n\n.lyteTooltip.lyteTooltipCallout .lyteTooltipInnerSpan,\n.lyteTooltip.lyteTooltipCallout::before {\n  width: 8px;\n  height: 8px;\n  border-right: 1px solid var(--zcat-tooltip-border);\n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-left: transparent;\n  border-top: transparent;\n}\n\n.lyteTooltip.lyteTooltipCallout.lyteBottom::before {\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-top: 1px solid var(--zcat-tooltip-border);\n  border-right: transparent;\n  border-bottom: transparent;\n}\n.lyteTooltip.lyteTooltipCallout.lyteLeft::before {\n  border-right: 1px solid var(--zcat-tooltip-border);\n  border-top: 1px solid var(--zcat-tooltip-border);\n  border-bottom: transparent;\n  border-left: transparent;\n}\n.lyteTooltip.lyteTooltipCallout.lyteRight::before {\n  border-bottom: 1px solid var(--zcat-tooltip-border);\n  border-left: 1px solid var(--zcat-tooltip-border);\n  border-top: transparent;\n  border-right: transparent;\n}\n\n/* Tooltip text inside the hovercard content */\n.zcat-tooltip-text {\n  margin: 0;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-tooltip-text-primary);\n}\n\n/* Trigger wrapper — inline-flex so it doesn't disrupt label layout */\n.zcat-tooltip-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n</style>";;
ZcatTooltip._dynamicNodes = [{"t":"a","p":[1]},{"t":"i","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"i","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatTooltip._observedAttributes = ["zcatProp"];

ZcatTooltip.register("zcat-tooltip", {
  hash: "ZcatTooltip_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=components_javascript_zcat-tooltip_js.js.map
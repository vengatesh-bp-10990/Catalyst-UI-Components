"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components_javascript_zcat-hovercard_js"],{

/***/ 61083875:
/*!*************************************************!*\
  !*** ./components/javascript/zcat-hovercard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatHovercard": () => (/* binding */ ZcatHovercard)
/* harmony export */ });
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_hovercard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-hovercard.js */ 57012611);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatHovercard extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
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

ZcatHovercard._template = "<template tag-name=\"zcat-hovercard\"> <lyte-hovercard lt-prop-width=\"{{expHandlers(zcatProp.width,'?:',zcatProp.width,'fit-content')}}\" lt-prop-auto-show=\"true\" lt-prop-keep-alive=\"true\" lt-prop-type=\"callout\" lt-prop-prevent-focus=\"true\" id=\"hovercard\" lt-prop-origin-elem=\"#tooltipInfoMsg{{zcatProp.id}}\" lt-prop-placement=\"{{expHandlers(zcatProp.placement,'?:',zcatProp.placement,'')}}\"> <template is=\"registerYield\" yield-name=\"hoverCardYield\"> <lyte-hovercard-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.yield}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-yield yield-name=\"{{zcatProp.yield}}\"></lyte-yield></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.value}}\" is=\"case\" lc-id=\"lc_id_0\"><p>{{zcatProp.value}}</p></template></template></lyte-hovercard-content> </template> </lyte-hovercard> </template>";;
ZcatHovercard._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"i","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatHovercard._observedAttributes = ["zcatProp"];

ZcatHovercard.register("zcat-hovercard", {
  hash: "ZcatHovercard_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=components_javascript_zcat-hovercard_js.js.map
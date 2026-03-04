"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components_javascript_zcat-toggle_js"],{

/***/ 21046360:
/*!**********************************************!*\
  !*** ./components/javascript/zcat-toggle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatToggle": () => (/* binding */ ZcatToggle)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);




class ZcatToggle extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object', { default: {} }, { watch: true }),
      isChecked: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('boolean', { default: false })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    this.setData('isChecked', !!zcatProp.checked);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onToggleChange(event) {
        if (event) { event.stopPropagation(); }
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }

        let newChecked = !this.getData('isChecked');
        this.setData('isChecked', newChecked);

        // Callback
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          if (zcatProp.callback.arguments && zcatProp.callback.arguments.length) {
            self.executeMethod(zcatProp.callback.name, newChecked, zcatProp.callback.arguments);
          } else {
            self.executeMethod(zcatProp.callback.name, newChecked, zcatProp);
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
          this._syncState();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatToggle._template = "<template tag-name=\"zcat-toggle\"> <label class=\"zcat-toggle-wrap {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-toggle-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-toggle-exsm',''))}} {{expHandlers(zcatProp.disabled,'?:','zcat-toggle-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <span class=\"zcat-toggle-track {{expHandlers(isChecked,'?:','checked','')}}\"> <span class=\"zcat-toggle-thumb\"></span> </span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-toggle-label\">{{zcatProp.label}}</span> </template></template> <input type=\"checkbox\" class=\"zcat-toggle-input\" checked=\"{{isChecked}}\" disabled=\"{{zcatProp.disabled}}\" onclick=\"{{action('onToggleChange')}}\"> </label> </template><style>/* ==============================\n   ZCAT Toggle (Switch) Component\n   Matches reference design exactly\n   ============================== */\n\nzcat-toggle * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-toggle-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  line-height: 1;\n}\n\n/* --- Hidden native input --- */\n.zcat-toggle-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n\n/* --- Track (pill) — 28×18 to match reference --- */\n.zcat-toggle-track {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 28px;\n  height: 18px;\n  border: 1px solid var(--zcat-toggle-border-default);\n  border-radius: 25px;\n  background-color: var(--zcat-toggle-bg-default);\n  flex-shrink: 0;\n  transition: background 0.15s, border-color 0.15s;\n}\n\n/* --- Thumb (circle) — 14×14 to match reference --- */\n.zcat-toggle-thumb {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 1px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: var(--zcat-toggle-inner-default);\n  border-radius: 50%;\n  transition: left 150ms ease-in-out, background 0.15s;\n  will-change: left;\n}\n\n/* --- Hover (unchecked) --- */\n.zcat-toggle-wrap:hover .zcat-toggle-track:not(.checked) {\n  background: var(--zcat-toggle-bg-hover);\n  border-color: var(--zcat-toggle-border-hover);\n}\n.zcat-toggle-wrap:hover .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-hover);\n}\n\n/* --- Checked state --- */\n.zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked);\n  border-color: transparent;\n}\n.zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 15px);\n  background: var(--zcat-toggle-inner-active);\n}\n\n/* --- Checked hover --- */\n.zcat-toggle-wrap:hover .zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked-hover);\n}\n\n/* --- Label --- */\n.zcat-toggle-label {\n  margin-left: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* ===========================\n   SIZES\n   =========================== */\n/* Small */\n.zcat-toggle-sm .zcat-toggle-track {\n  width: 24px;\n  height: 15px;\n}\n.zcat-toggle-sm .zcat-toggle-thumb {\n  width: 11px;\n  height: 11px;\n  left: 1px;\n}\n.zcat-toggle-sm .zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 12px);\n}\n.zcat-toggle-sm .zcat-toggle-label {\n  font-size: 13px;\n  line-height: 18px;\n}\n\n/* Extra-small */\n.zcat-toggle-exsm .zcat-toggle-track {\n  width: 20px;\n  height: 13px;\n}\n.zcat-toggle-exsm .zcat-toggle-thumb {\n  width: 9px;\n  height: 9px;\n  left: 1px;\n}\n.zcat-toggle-exsm .zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 10px);\n}\n.zcat-toggle-exsm .zcat-toggle-label {\n  font-size: 12px;\n  line-height: 16px;\n}\n\n/* ===========================\n   DISABLED STATE\n   =========================== */\n.zcat-toggle-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 1;\n}\n.zcat-toggle-disabled .zcat-toggle-track {\n  border-color: var(--zcat-toggle-border-disabled);\n  background-color: var(--zcat-toggle-bg-disabled);\n}\n.zcat-toggle-disabled .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-disabled);\n}\n.zcat-toggle-disabled .zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked-disabled);\n  border-color: transparent;\n}\n.zcat-toggle-disabled .zcat-toggle-track.checked .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-active-disabled);\n}\n\n/* ===========================\n   FOCUS VISIBLE\n   =========================== */\n.zcat-toggle-input:focus-visible ~ .zcat-toggle-track {\n  box-shadow: none;\n}\n</style>";;
ZcatToggle._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]},{"t":"a","p":[1,5]}];;
ZcatToggle._observedAttributes = ["self", "zcatProp", "isChecked"];

ZcatToggle.register("zcat-toggle", {
  hash: "ZcatToggle_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=components_javascript_zcat-toggle_js.js.map
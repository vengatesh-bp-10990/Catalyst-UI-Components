"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components_javascript_zcat-checkbox_js"],{

/***/ 95754250:
/*!************************************************!*\
  !*** ./components/javascript/zcat-checkbox.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatCheckbox": () => (/* binding */ ZcatCheckbox)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);




class ZcatCheckbox extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('object', { default: {} }, { watch: true }),
      isChecked: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('boolean', { default: false }),
      isPartial: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)('boolean', { default: false })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.partial) {
      this.setData('isPartial', true);
      this.setData('isChecked', true);
    } else {
      this.setData('isPartial', false);
      this.setData('isChecked', !!zcatProp.checked);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onCheckboxChange(event, lyteElement) {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }

        // Clear partial state on user interaction
        this.setData('isPartial', false);
        let newChecked = lyteElement
          ? !!lyteElement.getData('ltPropChecked')
          : !this.getData('isChecked');
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

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
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

ZcatCheckbox._template = "<template tag-name=\"zcat-checkbox\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-checkbox-secondary-card {{expHandlers(isChecked,'?:','zcat-checkbox-card-selected','')}} {{expHandlers(zcatProp.disabled,'?:','zcat-checkbox-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <lyte-checkbox class=\"zcat-checkbox-wrap {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-checkbox-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-checkbox-exsm',''))}}\" lt-prop-checked=\"{{isChecked}}\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\" lt-prop-label=\"{{expHandlers(zcatProp.label,'||','')}}\" lt-prop-type=\"default\" on-changed=\"{{method('onCheckboxChange')}}\"></lyte-checkbox> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.desc}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-checkbox-content\"> <span class=\"zcat-checkbox-desc\">{{zcatProp.desc}}</span> </div> </template></template> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-checkbox class=\"zcat-checkbox-wrap {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-checkbox-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-checkbox-exsm',''))}} {{expHandlers(zcatProp.disabled,'?:','zcat-checkbox-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\" lt-prop-checked=\"{{isChecked}}\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\" lt-prop-label=\"{{expHandlers(zcatProp.label,'||','')}}\" lt-prop-type=\"{{expHandlers(isPartial,'?:','indeterminate','default')}}\" on-changed=\"{{method('onCheckboxChange')}}\"></lyte-checkbox> </template></template> </template><style>/* ==============================\n   ZCAT Checkbox Component\n   Supports both legacy .zcat-checkbox-* classes and lyte-checkbox internals\n   ============================== */\n\nzcat-checkbox {\n  display: flex;\n}\nzcat-checkbox * {\n  box-sizing: border-box;\n}\nlyte-checkbox * {\n  box-sizing: border-box;\n}\n\n/* ─── lyte-checkbox outer wrapper ─── */\nlyte-checkbox.zcat-checkbox-wrap {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n\n/* ─── lyte-checkbox label container ─── */\nlyte-checkbox label,\nlyte-checkbox .lyteCheckbox {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  white-space: nowrap;\n  width: 100%;\n}\n\n/* ─── lyte-checkbox hidden native input ─── */\nlyte-checkbox > input[type='checkbox'],\nlyte-checkbox .lyteCheckbox > input[type='checkbox'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n  pointer-events: none;\n}\n\n/* ─── lyte-checkbox visual box (before pseudo on default span) ─── */\nlyte-checkbox .lyteCheckBoxDefault::before {\n  content: '';\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  border: 1px solid var(--zcat-checkbox-border-default);\n  flex-shrink: 0;\n  vertical-align: middle;\n  margin-right: 4px;\n  box-sizing: border-box;\n  transition: background 0.15s, border-color 0.15s;\n}\n\n/* ─── lyte-checkbox hover ─── */\nlyte-checkbox:hover .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-hover);\n  border-color: var(--zcat-checkbox-border-hover);\n}\n\n/* ─── lyte-checkbox checked state ─── */\nlyte-checkbox .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n/* ─── checkmark SVG via ::after ─── */\nlyte-checkbox .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 1px; bottom: 0; left: 3.2px;\n  margin: auto;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\"><path d=\"M6.66667 2.15002L3 5.81669L1.33334 4.15002\" stroke=\"white\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\n/* ─── checked hover ─── */\nlyte-checkbox:hover .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-hover);\n}\n\n/* ─── lyte-checkbox label text ─── */\nlyte-checkbox .lyteCheckBoxDefault span,\nlyte-checkbox .lyteCheckbox span:not(.lyteCheckBoxDefault) {\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* ─── SIZES ─── */\nlyte-checkbox.zcat-checkbox-sm .lyteCheckBoxDefault::before {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\nlyte-checkbox.zcat-checkbox-sm .lyteCheckbox span {\n  font-size: 13px;\n  line-height: 18px;\n}\nlyte-checkbox.zcat-checkbox-exsm .lyteCheckBoxDefault::before {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\nlyte-checkbox.zcat-checkbox-exsm .lyteCheckbox span {\n  font-size: 12px;\n  line-height: 16px;\n}\n\n/* ─── DISABLED ─── */\nlyte-checkbox.zcat-checkbox-disabled,\nlyte-checkbox.zcat-checkbox-disabled label {\n  cursor: not-allowed;\n  pointer-events: none;\n}\nlyte-checkbox.zcat-checkbox-disabled .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-disabled);\n  border-color: var(--zcat-checkbox-border-disabled);\n}\nlyte-checkbox.zcat-checkbox-disabled .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::before {\n  background: var(--zcat-checkbox-bg-clicked-disabled);\n  border-color: transparent;\n}\n\n/* ─── Secondary card variant ─── */\n.zcat-checkbox-secondary-card {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.2s;\n}\n.zcat-checkbox-secondary-card:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.zcat-checkbox-secondary-card.zcat-checkbox-card-selected {\n  border: 1px solid var(--zcat-color-primary);\n  background: var(--zcat-checkbox-bg-default);\n}\n.zcat-checkbox-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-left: 4px;\n}\n.zcat-checkbox-desc {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--zcat-body-text-grey);\n  line-height: 16px;\n}\n\n/* ─── Legacy selectors (kept for backward compatibility) ─── */\n.zcat-checkbox-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  white-space: nowrap;\n  width: 100%;\n}\n.zcat-checkbox-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.zcat-checkbox-box {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 1px solid var(--zcat-checkbox-border-default);\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  flex-shrink: 0;\n  vertical-align: middle;\n  transition: background 0.15s, border-color 0.15s;\n}\n.zcat-checkbox-label {\n  margin-left: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 16px);\n}\n</style>";;
ZcatCheckbox._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatCheckbox._observedAttributes = ["self", "zcatProp", "isChecked", "isPartial"];

ZcatCheckbox.register("zcat-checkbox", {
  hash: "ZcatCheckbox_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=components_javascript_zcat-checkbox_js.js.map
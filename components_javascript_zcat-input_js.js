"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components_javascript_zcat-input_js"],{

/***/ 9513644:
/*!*********************************************!*\
  !*** ./components/javascript/zcat-input.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatInput": () => (/* binding */ ZcatInput)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatInput extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  init() {
    let zcatProp = this.getData('zcatProp') || {};
    if (zcatProp.value !== undefined) {
      this.setData('value', zcatProp.value);
    }
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      value: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onValueChange(event, lyteElement) {
        let val = '';
        if (lyteElement && lyteElement.getData) {
          val = lyteElement.getData('ltPropValue') || '';
        } else if (event && event.target) {
          val = event.target.value;
        }
        this.setData('value', val);
        let zcatProp = this.getData('zcatProp') || {};
        if (zcatProp.callback && zcatProp.callback.name) {
          let parentSelf = this.getData('self');
          if (parentSelf && typeof parentSelf[zcatProp.callback.name] === 'function') {
            parentSelf[zcatProp.callback.name](val);
          }
        }
      },
      onInputFocus() {}
    }), arg1);
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

ZcatInput._template = "<template tag-name=\"zcat-input\"> <div class=\"zcat-input-wrapper {{expHandlers(zcatProp.disabled,'?:','zcat-input-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-input-error-state','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-input-label-row\"> <label class=\"zcat-input-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-input-optional\">(Optional)</span> </template></template> </div> </template></template> <div class=\"zcat-input-field-wrap {{expHandlers(zcatProp.iconLeft,'?:','has-icon-left','')}} {{expHandlers(zcatProp.iconRight,'?:','has-icon-right','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.iconLeft,'&amp;&amp;',zcatProp.iconLeft.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-input-icon-l\" name=\"{{zcatProp.iconLeft.name}}\" width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> </template></template> <lyte-input class=\"{{expHandlers(zcatProp.errorMessage,'?:','lyteInputBox vertical zcat-invalid','lyteInputBox vertical')}}\" lt-prop-id=\"{{expHandlers(zcatProp.id,'||','')}}\" lt-prop-type=\"{{expHandlers(zcatProp.type,'||','text')}}\" lt-prop-width=\"{{expHandlers(zcatProp.width,'||','')}}\" lt-prop-appearance=\"box\" lt-prop-class=\"{{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','lyteSm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','lyteExsm',''))}}\" lt-prop-placeholder=\"{{expHandlers(zcatProp.placeholder,'||','')}}\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\" lt-prop-readonly=\"{{expHandlers(zcatProp.readonly,'?:','true','false')}}\" lt-prop-value=\"{{lbind(value)}}\" lt-prop-auto-update=\"true\" lt-prop-autocomplete=\"off\" lt-prop-password-icon=\"true\" lt-prop-close-icon=\"false\" lt-prop-maxlength=\"{{expHandlers(zcatProp.maxLength,'||','')}}\" on-value-change=\"{{method('onValueChange')}}\" on-focus=\"{{method('onInputFocus')}}\"></lyte-input> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.iconRight,'&amp;&amp;',zcatProp.iconRight.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-input-icon-r\" name=\"{{zcatProp.iconRight.name}}\" width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-input-error-msg\">{{zcatProp.errorMessage}}</div> </template></template> </div> </template><style>zcat-input * { box-sizing: border-box; }\n\n.zcat-input-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Label */\n.zcat-input-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-input-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-input-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* Field wrapper */\n.zcat-input-field-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n/* Input element */\n.zcat-input-el {\n  width: 100%;\n  height: 36px;\n  padding: 0 12px;\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n}\ntextarea.zcat-input-el {\n  height: 80px;\n  padding: 10px 12px;\n  resize: vertical;\n  line-height: 1.5;\n}\n.zcat-input-el::placeholder { color: var(--zcat-inputField-text-placeholder); }\n.zcat-input-el:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px solid var(--zcat-inputField-border-hover);\n}\n.zcat-input-el:focus {\n  background: var(--zcat-inputField-bg-active);\n  border: 1px solid var(--zcat-inputField-border-active);\n  color: var(--zcat-inputField-text-active);\n}\n\n/* Sizes */\n.zcat-input-el.zcat-input-sm { height: 30px; font-size: 13px; padding: 0 10px; }\ntextarea.zcat-input-el.zcat-input-sm { height: 64px; padding: 8px 10px; }\n.zcat-input-el.zcat-input-exsm { height: 24px; font-size: 12px; padding: 0 8px; border-radius: 6px; }\ntextarea.zcat-input-el.zcat-input-exsm { height: 52px; padding: 6px 8px; }\n\n/* Disabled */\n.zcat-input-disabled .zcat-input-el {\n  background: var(--zcat-inputField-bg-disabled);\n  border: 1px solid var(--zcat-inputField-border-disabled);\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.zcat-input-disabled .zcat-input-label { color: var(--zcat-inputField-text-disabled); }\n\n/* Error */\n.zcat-input-error .zcat-input-el {\n  background: var(--zcat-inputField-bg-error) !important;\n  border-color: var(--zcat-inputField-border-error) !important;\n}\n.zcat-input-error-msg {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n}\n\n/* Icons */\n.zcat-input-icon-l,\n.zcat-input-icon-r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  pointer-events: none;\n}\n.zcat-input-icon-l { left: 10px; }\n.zcat-input-icon-r { right: 10px; }\n.has-icon-left .zcat-input-el { padding-left: 32px; }\n.has-icon-right .zcat-input-el { padding-right: 32px; }\n</style>";;
ZcatInput._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"a","p":[1,3,3]},{"t":"cD","p":[1,3,3],"in":2,"sibl":[1]},{"t":"s","p":[1,3,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[3,2,1]}];;
ZcatInput._observedAttributes = ["self", "zcatProp", "value"];

ZcatInput.register("zcat-input", {
  hash: "ZcatInput_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=components_javascript_zcat-input_js.js.map
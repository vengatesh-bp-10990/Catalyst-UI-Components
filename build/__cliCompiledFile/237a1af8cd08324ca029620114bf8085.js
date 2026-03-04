import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatCheckbox extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isChecked: prop('boolean', { default: false }),
      isPartial: prop('boolean', { default: false })
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
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onCheckboxChange(event) {
        if (event) { event.stopPropagation(); }
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }

        // Clear partial state on user interaction
        this.setData('isPartial', false);
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

ZcatCheckbox._template = "<template tag-name=\"zcat-checkbox\"> <label class=\"zcat-checkbox-wrap {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-checkbox-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-checkbox-exsm',''))}} {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-checkbox-secondary','zcat-checkbox-primary')}} {{expHandlers(zcatProp.disabled,'?:','zcat-checkbox-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <input type=\"checkbox\" class=\"zcat-checkbox-input\" checked=\"{{isChecked}}\" disabled=\"{{zcatProp.disabled}}\" onclick=\"{{action('onCheckboxChange')}}\"> <span class=\"zcat-checkbox-box {{expHandlers(isChecked,'?:','checked','')}} {{expHandlers(isPartial,'?:','partial','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(isChecked,'&amp;&amp;',expHandlers(isPartial,'!'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <svg class=\"zcat-checkbox-tick\" width=\"10\" height=\"10\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3.5 8 6.5 11 12.5 5\"></polyline></svg> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{isPartial}}\" is=\"case\" lc-id=\"lc_id_0\"> <svg class=\"zcat-checkbox-partial\" width=\"10\" height=\"10\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"4\" y1=\"8\" x2=\"12\" y2=\"8\"></line></svg> </template></template> </span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-checkbox-label\">{{zcatProp.label}}</span> </template></template> </label> </template><style>/* ==============================\n   ZCAT Checkbox Component\n   Matches reference design exactly\n   ============================== */\n\nzcat-checkbox {\n  display: flex;\n}\nzcat-checkbox * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-checkbox-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  white-space: nowrap;\n  width: 100%;\n}\n\n/* --- Hidden native input --- */\n.zcat-checkbox-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n\n/* --- Checkbox box (14px to match reference) --- */\n.zcat-checkbox-box {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 1px solid var(--zcat-checkbox-border-default);\n  border-radius: 4px;\n  background: var(--zcat-checkbox-bg-default);\n  flex-shrink: 0;\n  vertical-align: middle;\n  transition: background 0.15s, border-color 0.15s;\n}\n\n/* --- Hover (unchecked) --- */\n.zcat-checkbox-wrap:hover .zcat-checkbox-box:not(.checked):not(.partial) {\n  background: var(--zcat-checkbox-bg-hover);\n  border-color: var(--zcat-checkbox-border-hover);\n}\n\n/* --- Checked state — filled primary bg, transparent border --- */\n.zcat-checkbox-box.checked {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n.zcat-checkbox-box.partial {\n  background: var(--zcat-checkbox-bg-clicked);\n  border-color: transparent;\n}\n\n/* --- Checked hover --- */\n.zcat-checkbox-wrap:hover .zcat-checkbox-box.checked {\n  background: var(--zcat-checkbox-bg-clicked-hover);\n}\n.zcat-checkbox-wrap:hover .zcat-checkbox-box.partial {\n  background: var(--zcat-checkbox-bg-clicked-hover);\n}\n\n/* --- Label --- */\n.zcat-checkbox-label {\n  margin-left: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 16px);\n}\n\n/* --- Secondary variant (card style) --- */\n.zcat-checkbox-secondary-card {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.2s;\n}\n.zcat-checkbox-secondary-card:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.zcat-checkbox-secondary-card.zcat-checkbox-card-selected {\n  border: 1px solid var(--zcat-color-primary);\n  background: var(--zcat-checkbox-bg-default);\n}\n.zcat-checkbox-secondary-card .zcat-checkbox-wrap {\n  width: 100%;\n}\n.zcat-checkbox-secondary-card .zcat-checkbox-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-left: 4px;\n}\n.zcat-checkbox-secondary-card .zcat-checkbox-content .zcat-checkbox-label {\n  margin-left: 0;\n  font-weight: 600;\n}\n.zcat-checkbox-desc {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--zcat-body-text-grey);\n  line-height: 16px;\n}\n\n/* ===========================\n   SIZES\n   =========================== */\n/* Small */\n.zcat-checkbox-sm .zcat-checkbox-box {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\n.zcat-checkbox-sm .zcat-checkbox-label {\n  font-size: 13px;\n  line-height: 18px;\n}\n.zcat-checkbox-sm .zcat-checkbox-tick,\n.zcat-checkbox-sm .zcat-checkbox-partial {\n  width: 8px;\n  height: 8px;\n}\n\n/* Extra-small */\n.zcat-checkbox-exsm .zcat-checkbox-box {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\n.zcat-checkbox-exsm .zcat-checkbox-label {\n  font-size: 12px;\n  line-height: 16px;\n}\n.zcat-checkbox-exsm .zcat-checkbox-tick,\n.zcat-checkbox-exsm .zcat-checkbox-partial {\n  width: 7px;\n  height: 7px;\n}\n\n/* ===========================\n   DISABLED STATE\n   =========================== */\n.zcat-checkbox-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 1;\n}\n.zcat-checkbox-disabled .zcat-checkbox-box {\n  background: var(--zcat-checkbox-bg-disabled);\n  border-color: var(--zcat-checkbox-border-disabled);\n}\n.zcat-checkbox-disabled .zcat-checkbox-box.checked {\n  background: var(--zcat-checkbox-bg-clicked-disabled);\n  border-color: transparent;\n}\n.zcat-checkbox-disabled .zcat-checkbox-box.partial {\n  background: var(--zcat-checkbox-bg-clicked-disabled);\n  border-color: transparent;\n}\n\n/* ===========================\n   FOCUS VISIBLE\n   =========================== */\n.zcat-checkbox-input:focus-visible ~ .zcat-checkbox-box {\n  box-shadow: none;\n}\n\n/* --- SVG icons --- */\n.zcat-checkbox-tick,\n.zcat-checkbox-partial {\n  display: block;\n}\n</style>";;
ZcatCheckbox._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[1]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}];;
ZcatCheckbox._observedAttributes = ["self", "zcatProp", "isChecked", "isPartial"];
export { ZcatCheckbox };
ZcatCheckbox.register("zcat-checkbox", {
  hash: "ZcatCheckbox_2",
  refHash: "C_zcat-app_app_0"
});

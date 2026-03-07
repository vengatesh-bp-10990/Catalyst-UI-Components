import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatToggle extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isChecked: prop('boolean', { default: false })
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
    return Object.assign(super.methods({
      onToggleChecked() {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }
        this.setData('isChecked', true);
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, true, zcatProp);
        }
      },
      onToggleUnchecked() {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }
        this.setData('isChecked', false);
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, false, zcatProp);
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

ZcatToggle._template = "<template tag-name=\"zcat-toggle\"> <div class=\"zcat-toggle-wrap {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-toggle-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-toggle-exsm',''))}} {{expHandlers(zcatProp.disabled,'?:','zcat-toggle-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <lyte-checkbox lt-prop-type=\"switch\" lt-prop-checked=\"{{isChecked}}\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\" lt-prop-label=\"{{expHandlers(zcatProp.label,'||','')}}\" on-checked=\"{{method('onToggleChecked')}}\" on-unchecked=\"{{method('onToggleUnchecked')}}\"></lyte-checkbox> </div> </template><style>/* ==============================\n   ZCAT Toggle (Switch) Component\n   Matches reference design exactly\n   ============================== */\n\nzcat-toggle * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-toggle-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  line-height: 1;\n}\n\n/* --- Hidden native input --- */\n.zcat-toggle-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n\n/* --- Track (pill) — 28×18 to match reference --- */\n.zcat-toggle-track {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 28px;\n  height: 18px;\n  border: 1px solid var(--zcat-toggle-border-default);\n  border-radius: 25px;\n  background-color: var(--zcat-toggle-bg-default);\n  flex-shrink: 0;\n  transition: background 0.15s, border-color 0.15s;\n}\n\n/* --- Thumb (circle) — 14×14 to match reference --- */\n.zcat-toggle-thumb {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 1px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: var(--zcat-toggle-inner-default);\n  border-radius: 50%;\n  transition: left 150ms ease-in-out, background 0.15s;\n  will-change: left;\n}\n\n/* --- Hover (unchecked) --- */\n.zcat-toggle-wrap:hover .zcat-toggle-track:not(.checked) {\n  background: var(--zcat-toggle-bg-hover);\n  border-color: var(--zcat-toggle-border-hover);\n}\n.zcat-toggle-wrap:hover .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-hover);\n}\n\n/* --- Checked state --- */\n.zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked);\n  border-color: transparent;\n}\n.zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 15px);\n  background: var(--zcat-toggle-inner-active);\n}\n\n/* --- Checked hover --- */\n.zcat-toggle-wrap:hover .zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked-hover);\n}\n\n/* --- Label --- */\n.zcat-toggle-label {\n  margin-left: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* ===========================\n   SIZES\n   =========================== */\n/* Small */\n.zcat-toggle-sm .zcat-toggle-track {\n  width: 24px;\n  height: 15px;\n}\n.zcat-toggle-sm .zcat-toggle-thumb {\n  width: 11px;\n  height: 11px;\n  left: 1px;\n}\n.zcat-toggle-sm .zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 12px);\n}\n.zcat-toggle-sm .zcat-toggle-label {\n  font-size: 13px;\n  line-height: 18px;\n}\n\n/* Extra-small */\n.zcat-toggle-exsm .zcat-toggle-track {\n  width: 20px;\n  height: 13px;\n}\n.zcat-toggle-exsm .zcat-toggle-thumb {\n  width: 9px;\n  height: 9px;\n  left: 1px;\n}\n.zcat-toggle-exsm .zcat-toggle-track.checked .zcat-toggle-thumb {\n  left: calc(100% - 10px);\n}\n.zcat-toggle-exsm .zcat-toggle-label {\n  font-size: 12px;\n  line-height: 16px;\n}\n\n/* ===========================\n   DISABLED STATE\n   =========================== */\n.zcat-toggle-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 1;\n}\n.zcat-toggle-disabled .zcat-toggle-track {\n  border-color: var(--zcat-toggle-border-disabled);\n  background-color: var(--zcat-toggle-bg-disabled);\n}\n.zcat-toggle-disabled .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-disabled);\n}\n.zcat-toggle-disabled .zcat-toggle-track.checked {\n  background: var(--zcat-toggle-bg-clicked-disabled);\n  border-color: transparent;\n}\n.zcat-toggle-disabled .zcat-toggle-track.checked .zcat-toggle-thumb {\n  background: var(--zcat-toggle-inner-active-disabled);\n}\n\n/* ===========================\n   FOCUS VISIBLE\n   =========================== */\n.zcat-toggle-input:focus-visible ~ .zcat-toggle-track {\n  box-shadow: none;\n}\n</style>";;
ZcatToggle._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatToggle._observedAttributes = ["self", "zcatProp", "isChecked"];
export { ZcatToggle };
ZcatToggle.register("zcat-toggle", {
  hash: "ZcatToggle_4",
  refHash: "C_zcat-app_app_0"
});

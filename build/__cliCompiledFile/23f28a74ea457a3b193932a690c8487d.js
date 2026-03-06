import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatRadio extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      selectedValue: prop('string', { default: '' })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.selected) {
      this.setData('selectedValue', zcatProp.selected);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onRadioChange(event, lyteElement) {
        let zcatProp = this.getData('zcatProp');
        if (!zcatProp || zcatProp.disabled) return;

        let value = lyteElement
          ? (lyteElement.getData('ltPropValue') || '')
          : '';
        this.setData('selectedValue', value);

        // Callback
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          if (zcatProp.callback.arguments && zcatProp.callback.arguments.length) {
            self.executeMethod(zcatProp.callback.name, value, zcatProp.callback.arguments);
          } else {
            self.executeMethod(zcatProp.callback.name, value, zcatProp);
          }
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      // Secondary variant card click still uses action (no lyte-radiobutton click)
      onRadioSecondarySelect(item) {
        let zcatProp = this.getData('zcatProp');
        if (!zcatProp || zcatProp.disabled || (item && item.disabled)) return;
        let value = item.value;
        this.setData('selectedValue', value);
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          if (zcatProp.callback.arguments && zcatProp.callback.arguments.length) {
            self.executeMethod(zcatProp.callback.name, value, zcatProp.callback.arguments);
          } else {
            self.executeMethod(zcatProp.callback.name, value, zcatProp);
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

ZcatRadio._template = "<template tag-name=\"zcat-radio\"> <div class=\"zcat-radio-group {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-radio-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-radio-exsm',''))}} {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-radio-secondary','zcat-radio-primary')}} {{expHandlers(zcatProp.disabled,'?:','zcat-radio-disabled','')}} {{expHandlers(expHandlers(zcatProp.direction,'===','horizontal'),'?:','zcat-radio-horizontal','zcat-radio-vertical')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-radio-group-label\">{{zcatProp.label}}</span> </template></template> <div class=\"zcat-radio-options\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-radiobutton class=\"zcat-radio-wrap {{expHandlers(item.disabled,'?:','zcat-radio-item-disabled','')}} {{expHandlers(expHandlers(selectedValue,'===',item.value),'?:','zcat-radio-selected','')}} {{expHandlers(item.desc,'?:','zcat-radio-has-desc','')}}\" lt-prop-label=\"{{item.label}}\" lt-prop-value=\"{{item.value}}\" lt-prop-name=\"{{expHandlers(zcatProp.name,'||','zcat-radio-default')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(item.disabled,'||',zcatProp.disabled),'?:','true','false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(selectedValue,'===',item.value),'?:',true,false)}}\" on-changed=\"{{method('onRadioChange')}}\"></lyte-radiobutton></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-radio-secondary-items\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-radio-secondary-card {{expHandlers(expHandlers(selectedValue,'===',item.value),'?:','zcat-radio-card-selected','')}} {{expHandlers(expHandlers(item.disabled,'||',zcatProp.disabled),'?:','zcat-radio-item-disabled','')}}\" onclick=\"{{action('onRadioSecondarySelect',item)}}\"> <lyte-radiobutton lt-prop-label=\"{{item.label}}\" lt-prop-value=\"{{item.value}}\" lt-prop-name=\"{{expHandlers(expHandlers(zcatProp.name,'||','zcat-radio-default'),'+','-secondary')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(item.disabled,'||',zcatProp.disabled),'?:','true','false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(selectedValue,'===',item.value),'?:',true,false)}}\" on-changed=\"{{method('onRadioChange')}}\"></lyte-radiobutton> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.desc}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-radio-desc\">{{item.desc}}</span> </template></template> </div></template> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Radio Component — lyte-radiobutton support\n   ============================== */\n\nlyte-radiobutton * {\n  box-sizing: border-box;\n}\n\n/* ─── lyte-radiobutton outer wrapper ─── */\nlyte-radiobutton.zcat-radio-wrap {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n/* ─── lyte-radiobutton label container ─── */\nlyte-radiobutton label,\nlyte-radiobutton .lyteRadio {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  white-space: nowrap;\n  width: 100%;\n}\n\n/* ─── lyte-radiobutton hidden native input ─── */\nlyte-radiobutton .lyteRadio > input[type='radio'],\nlyte-radiobutton > input[type='radio'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n  pointer-events: none;\n}\n\n/* ─── lyte-radiobutton visual outer ring ─── */\nlyte-radiobutton .lyteRadioDefault::before {\n  content: '';\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--zcat-radio-inner-bg-default);\n  border: 1.5px solid var(--zcat-radio-inner-border-default);\n  flex-shrink: 0;\n  margin-right: 4px;\n  box-sizing: border-box;\n  transition: background 0.15s, border-color 0.15s;\n}\n\n/* ─── lyte-radiobutton hover ─── */\nlyte-radiobutton:hover .lyteRadioDefault::before {\n  background: var(--zcat-radio-inner-bg-hover);\n  border-color: var(--zcat-radio-inner-border-hover);\n}\n\n/* ─── lyte-radiobutton checked state ─── */\nlyte-radiobutton .lyteRadio > input[type='radio']:checked + .lyteRadioDefault::before {\n  background: var(--zcat-radio-inner-bg-clicked);\n  border-color: var(--zcat-radio-inner-border-clicked);\n}\n/* ─── inner dot via ::after ─── */\nlyte-radiobutton .lyteRadio > input[type='radio']:checked + .lyteRadioDefault::after {\n  content: '';\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--zcat-radio-dot-fill-default);\n  position: absolute;\n  top: 0; bottom: 0; left: 4px;\n  margin: auto;\n}\n\n/* ─── lyte-radiobutton disabled ─── */\nlyte-radiobutton.zcat-radio-item-disabled,\nlyte-radiobutton.zcat-radio-item-disabled label {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* ─── SIZES for lyte-radiobutton ─── */\n.zcat-radio-sm lyte-radiobutton .lyteRadioDefault::before {\n  width: 12px;\n  height: 12px;\n}\n.zcat-radio-exsm lyte-radiobutton .lyteRadioDefault::before {\n  width: 10px;\n  height: 10px;\n}\n\n/* ==============================\n   ZCAT Radio Component\n   Matches reference design exactly\n   ============================== */\n\nzcat-radio * {\n  box-sizing: border-box;\n}\nzcat-radio p {\n  margin: 0;\n}\n\n/* --- Group container --- */\n.zcat-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* --- Group label (matches input field label style) --- */\n.zcat-radio-group-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n  margin-bottom: 4px;\n}\n\n/* --- Options container --- */\n.zcat-radio-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.zcat-radio-horizontal .zcat-radio-options {\n  flex-direction: row;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n/* --- Individual radio wrapper --- */\n.zcat-radio-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 1;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  width: 100%;\n}\n\n/* --- Hidden native input --- */\n.zcat-radio-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n\n/* --- Radio circle (outer ring) — 14px to match reference --- */\n.zcat-radio-circle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 1px solid var(--zcat-radio-border-default);\n  border-radius: 50%;\n  background-color: var(--zcat-radio-bg-default);\n  flex-shrink: 0;\n  vertical-align: middle;\n  transition: background-color 0.15s, border-color 0.15s;\n}\n\n/* --- Radio dot (inner circle) — 6px, hidden by default --- */\n.zcat-radio-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: transparent;\n  transition: background-color 0.15s;\n}\n\n/*  Hover (unchecked) — light blue bg + primary border  */\n.zcat-radio-wrap:hover .zcat-radio-circle:not(.checked) {\n  background-color: var(--zcat-radio-bg-hover);\n  border-color: var(--zcat-radio-border-hover);\n}\n\n/*  Checked state — entire circle fills primary, white inner dot  */\n.zcat-radio-circle.checked {\n  background-color: var(--zcat-radio-bg-clicked);\n  border-color: var(--zcat-radio-bg-clicked);\n}\n.zcat-radio-circle.checked .zcat-radio-dot {\n  width: 6px;\n  height: 6px;\n  background-color: var(--zcat-radio-inner-default);\n}\n\n/*  Hover on checked — slightly darker primary  */\n.zcat-radio-wrap:hover .zcat-radio-circle.checked {\n  background-color: var(--zcat-radio-bg-clicked-hover);\n}\n\n/* --- Label --- */\n.zcat-radio-label {\n  margin-left: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* --- Secondary variant: description text --- */\n.zcat-radio-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-left: 4px;\n}\n.zcat-radio-content .zcat-radio-label {\n  margin-left: 0;\n  font-weight: 600;\n}\n.zcat-radio-desc {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--zcat-body-text-grey);\n  line-height: 16px;\n}\n\n/* ===============================\n   SECONDARY VARIANT (CARD STYLE)\n   =============================== */\n.zcat-radio-secondary .zcat-radio-wrap {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.2s;\n  align-items: baseline;\n}\n/* Secondary without desc — center align */\n.zcat-radio-secondary .zcat-radio-wrap:not(.zcat-radio-has-desc) {\n  align-items: center;\n}\n/* Secondary: hover — shadow */\n.zcat-radio-secondary .zcat-radio-wrap:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n/* Secondary: selected card — primary border + light bg */\n.zcat-radio-secondary .zcat-radio-wrap.zcat-radio-selected {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-border-default);\n  background: var(--zcat-radio-bg-default);\n}\n\n/* ===========================\n   SIZES\n   =========================== */\n/* Small */\n.zcat-radio-sm .zcat-radio-circle {\n  width: 12px;\n  height: 12px;\n}\n.zcat-radio-sm .zcat-radio-circle.checked .zcat-radio-dot {\n  width: 5px;\n  height: 5px;\n}\n.zcat-radio-sm .zcat-radio-label {\n  font-size: 13px;\n  line-height: 18px;\n}\n.zcat-radio-sm.zcat-radio-secondary .zcat-radio-wrap {\n  padding: 8px 10px;\n}\n\n/* Extra-small */\n.zcat-radio-exsm .zcat-radio-circle {\n  width: 10px;\n  height: 10px;\n}\n.zcat-radio-exsm .zcat-radio-circle.checked .zcat-radio-dot {\n  width: 4px;\n  height: 4px;\n}\n.zcat-radio-exsm .zcat-radio-label {\n  font-size: 12px;\n  line-height: 16px;\n}\n.zcat-radio-exsm.zcat-radio-secondary .zcat-radio-wrap {\n  padding: 6px 8px;\n}\n\n/* ===========================\n   DISABLED STATE\n   =========================== */\n/* Entire group disabled */\n.zcat-radio-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.zcat-radio-disabled .zcat-radio-circle {\n  background-color: var(--zcat-radio-bg-disabled);\n  border-color: var(--zcat-radio-border-disabled);\n  cursor: not-allowed;\n}\n.zcat-radio-disabled .zcat-radio-circle.checked {\n  background-color: var(--zcat-radio-bg-clicked-disabled);\n  border-color: var(--zcat-radio-bg-clicked-disabled);\n}\n.zcat-radio-disabled .zcat-radio-circle.checked .zcat-radio-dot {\n  background-color: var(--zcat-radio-inner-disabled);\n}\n\n/* Individual item disabled */\n.zcat-radio-item-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.zcat-radio-item-disabled .zcat-radio-circle {\n  background-color: var(--zcat-radio-bg-disabled);\n  border-color: var(--zcat-radio-border-disabled);\n}\n.zcat-radio-item-disabled .zcat-radio-circle.checked {\n  background-color: var(--zcat-radio-bg-clicked-disabled);\n  border-color: var(--zcat-radio-bg-clicked-disabled);\n}\n.zcat-radio-item-disabled .zcat-radio-circle.checked .zcat-radio-dot {\n  background-color: var(--zcat-radio-inner-disabled);\n}\n\n/* ===========================\n   FOCUS VISIBLE\n   =========================== */\n.zcat-radio-input:focus-visible ~ .zcat-radio-circle {\n  box-shadow: none;\n}\n</style>";;
ZcatRadio._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"cD","p":[0,1],"in":1,"sibl":[0]},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0}],"dc":[1],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatRadio._observedAttributes = ["self", "zcatProp", "selectedValue"];
export { ZcatRadio };
ZcatRadio.register("zcat-radio", {
  hash: "ZcatRadio_2",
  refHash: "C_zcat-app_app_0"
});

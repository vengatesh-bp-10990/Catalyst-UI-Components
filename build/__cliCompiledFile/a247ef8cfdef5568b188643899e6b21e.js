import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatInput extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object'),
      value: prop('string', { default: '' })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onInputChange(event) {
        this.setData('value', event.target.value);
      },
      onInputFocus() {}
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

ZcatInput._template = "<template tag-name=\"zcat-input\"> <div class=\"zcat-input-wrapper {{expHandlers(zcatProp.disabled,'?:','zcat-input-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-input-error','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-input-label-row\"> <label class=\"zcat-input-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-input-optional\">(Optional)</span> </template></template> </div> </template></template> <div class=\"zcat-input-field-wrap {{expHandlers(zcatProp.iconLeft,'?:','has-icon-left','')}} {{expHandlers(zcatProp.iconRight,'?:','has-icon-right','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.iconLeft,'&amp;&amp;',zcatProp.iconLeft.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-input-icon-l\" name=\"{{zcatProp.iconLeft.name}}\" width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','textarea')}}\" is=\"case\" lc-id=\"lc_id_0\"> <textarea class=\"zcat-input-el {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-input-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-input-exsm',''))}}\" disabled=\"{{expHandlers(zcatProp.disabled,'||',false)}}\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\" oninput=\"{{action('onInputChange')}}\" onfocus=\"{{action('onInputFocus')}}\"></textarea> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'!==','textarea')}}\" is=\"case\" lc-id=\"lc_id_0\"> <input type=\"text\" class=\"zcat-input-el {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-input-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-input-exsm',''))}}\" placeholder=\"{{expHandlers(zcatProp.placeholder,'||','')}}\" disabled=\"{{expHandlers(zcatProp.disabled,'||',false)}}\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\" oninput=\"{{action('onInputChange')}}\" onfocus=\"{{action('onInputFocus')}}\"> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.iconRight,'&amp;&amp;',zcatProp.iconRight.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-input-icon-r\" name=\"{{zcatProp.iconRight.name}}\" width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-input-error-msg\">{{zcatProp.errorMessage}}</div> </template></template> </div> </template><style>zcat-input * { box-sizing: border-box; }\n\n.zcat-input-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Label */\n.zcat-input-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-input-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-input-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* Field wrapper */\n.zcat-input-field-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n/* Input element */\n.zcat-input-el {\n  width: 100%;\n  height: 36px;\n  padding: 0 12px;\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n}\ntextarea.zcat-input-el {\n  height: 80px;\n  padding: 10px 12px;\n  resize: vertical;\n  line-height: 1.5;\n}\n.zcat-input-el::placeholder { color: var(--zcat-inputField-text-placeholder); }\n.zcat-input-el:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px solid var(--zcat-inputField-border-hover);\n}\n.zcat-input-el:focus {\n  background: var(--zcat-inputField-bg-active);\n  border: 1px solid var(--zcat-inputField-border-active);\n  color: var(--zcat-inputField-text-active);\n}\n\n/* Sizes */\n.zcat-input-el.zcat-input-sm { height: 30px; font-size: 13px; padding: 0 10px; }\ntextarea.zcat-input-el.zcat-input-sm { height: 64px; padding: 8px 10px; }\n.zcat-input-el.zcat-input-exsm { height: 24px; font-size: 12px; padding: 0 8px; border-radius: 6px; }\ntextarea.zcat-input-el.zcat-input-exsm { height: 52px; padding: 6px 8px; }\n\n/* Disabled */\n.zcat-input-disabled .zcat-input-el {\n  background: var(--zcat-inputField-bg-disabled);\n  border: 1px solid var(--zcat-inputField-border-disabled);\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.zcat-input-disabled .zcat-input-label { color: var(--zcat-inputField-text-disabled); }\n\n/* Error */\n.zcat-input-error .zcat-input-el {\n  background: var(--zcat-inputField-bg-error) !important;\n  border-color: var(--zcat-inputField-border-error) !important;\n}\n.zcat-input-error-msg {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n}\n\n/* Icons */\n.zcat-input-icon-l,\n.zcat-input-icon-r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  pointer-events: none;\n}\n.zcat-input-icon-l { left: 10px; }\n.zcat-input-icon-r { right: 10px; }\n.has-icon-left .zcat-input-el { padding-left: 32px; }\n.has-icon-right .zcat-input-el { padding-right: 32px; }\n</style>";;
ZcatInput._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":4,"sibl":[3]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}},"placeholder":{"name":"placeholder","helperInfo":{"name":"expHandlers","args":["zcatProp.placeholder","'||'","''"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,3,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,3,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[4,1]}];;
ZcatInput._observedAttributes = ["self", "zcatProp", "value"];
export { ZcatInput };
ZcatInput.register("zcat-input", {
  hash: "ZcatInput_2",
  refHash: "C_zcat-app_app_0"
});

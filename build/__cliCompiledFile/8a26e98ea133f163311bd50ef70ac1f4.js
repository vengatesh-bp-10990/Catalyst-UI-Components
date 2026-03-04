import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAttention extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} })
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

ZcatAttention._template = "<template tag-name=\"zcat-attention\"> <div class=\"zcat-attention-container zcat-atten-{{expHandlers(zcatProp.type,'||','default')}}\"> <div class=\"zcat-attention-inner\"> <div class=\"zcat-attention-icon-wrap\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','success')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-icon name=\"alert-success\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template case=\"{{expHandlers(zcatProp.type,'===','danger')}}\" is=\"case\" lc-id=\"lc_id_1\"><zcat-icon name=\"alert-danger\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template case=\"{{expHandlers(zcatProp.type,'===','warning')}}\" is=\"case\" lc-id=\"lc_id_2\"><zcat-icon name=\"alert-warning\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template><template default=\"\"><zcat-icon name=\"info\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon></template></template> </div> <div class=\"zcat-attention-text\"> <span class=\"zcat-attention-head {{expHandlers(zcatProp.desc,'?:','zcat-attention-head-bold','')}}\">{{zcatProp.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.desc}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-attention-desc\">{{zcatProp.desc}}</span></template></template> </div> </div> </div> </template><style>/* ==============================\n   ZCAT Attention Component\n   Inline info/notice banner\n   Types: default, info, success, danger, warning\n   ============================== */\n\nzcat-attention * {\n  box-sizing: border-box;\n}\n\n.zcat-attention-container {\n  display: flex;\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* --- Type Variants --- */\n.zcat-atten-default {\n  background: var(--zcat-attention-default-bg);\n  border: 1px solid var(--zcat-attention-default-border);\n}\n.zcat-atten-info {\n  background: var(--zcat-alerts-info-bg);\n  border: 1px solid var(--zcat-alerts-info-border);\n}\n.zcat-atten-success {\n  background: var(--zcat-alerts-success-bg);\n  border: 1px solid var(--zcat-alerts-success-border);\n}\n.zcat-atten-danger {\n  background: var(--zcat-alerts-danger-bg);\n  border: 1px solid var(--zcat-alerts-danger-border);\n}\n.zcat-atten-warning {\n  background: var(--zcat-alerts-warning-bg);\n  border: 1px solid var(--zcat-alerts-warning-border);\n}\n\n.zcat-attention-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  width: 100%;\n}\n\n/* --- Icon --- */\n.zcat-attention-icon-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 14px;\n  height: 20px;\n}\n.zcat-attention-icon-wrap zcat-icon {\n  display: flex;\n}\n\n/* Icon color per type */\n.zcat-atten-default .zcat-attention-icon-wrap {\n  color: var(--zcat-attention-default-icon);\n}\n.zcat-atten-info .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-info-icon);\n}\n.zcat-atten-success .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-success-icon);\n}\n.zcat-atten-danger .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-danger-icon);\n}\n.zcat-atten-warning .zcat-attention-icon-wrap {\n  color: var(--zcat-alerts-warning-icon);\n}\n\n/* --- Text content --- */\n.zcat-attention-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n\n/* Heading color per type */\n.zcat-atten-default .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-attention-default-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-info .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-info-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-success .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-success-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-danger .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-danger-text-primary);\n  word-break: break-word;\n}\n.zcat-atten-warning .zcat-attention-head {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-warning-text-primary);\n  word-break: break-word;\n}\n\n.zcat-attention-head-bold {\n  font-weight: 600;\n}\n\n/* Description color per type */\n.zcat-atten-default .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-attention-default-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-info .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-info-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-success .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-success-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-danger .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-danger-text-secondary);\n  word-break: break-word;\n}\n.zcat-atten-warning .zcat-attention-desc {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-alerts-warning-text-secondary);\n  word-break: break-word;\n}\n</style>";;
ZcatAttention._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true}},"d":{"dN":[{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[1,1,3,1]},{"t":"tX","p":[1,1,3,1,0]},{"t":"s","p":[1,1,3,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;
ZcatAttention._observedAttributes = ["self", "zcatProp"];
export { ZcatAttention };
ZcatAttention.register("zcat-attention", {
  hash: "ZcatAttention_2",
  refHash: "C_zcat-app_app_0"
});

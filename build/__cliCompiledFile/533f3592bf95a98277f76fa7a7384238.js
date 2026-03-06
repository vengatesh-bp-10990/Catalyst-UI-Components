import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatLoader extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
     	zcatProp: prop('object'),
      rows: prop('number', { default: 12 }),
      type: prop('string', { default: '' })
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

ZcatLoader._template = "<template tag-name=\"zcat-loader\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.loader_type,'===','content')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"skeleton-loader\"> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column float-right\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> <div class=\"skeleton-loader-row\"> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> <div class=\"skeleton-loader-column\"></div> </div> </div></template><template case=\"{{expHandlers(zcatProp.loader_type,'===','spin')}}\" is=\"case\" lc-id=\"lc_id_1\"><div class=\"spin-loader\"></div></template><template default=\"\"><div class=\"progress-loader\"></div></template></template> </template>";;
ZcatLoader._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{},"lc_id_1":{},"default":{}},"hd":true,"co":["lc_id_0","lc_id_1"]}];;
ZcatLoader._observedAttributes = ["self", "zcatProp", "rows", "type"];
export { ZcatLoader };
ZcatLoader.register("zcat-loader", {
  hash: "ZcatLoader_4",
  refHash: "C_zcat-app_app_0"
});

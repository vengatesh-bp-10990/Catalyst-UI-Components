import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-hovercard.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatHovercard extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
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

ZcatHovercard._template = "<template tag-name=\"zcat-hovercard\"> <lyte-hovercard lt-prop-width=\"{{expHandlers(zcatProp.width,'?:',zcatProp.width,'fit-content')}}\" lt-prop-auto-show=\"true\" lt-prop-keep-alive=\"true\" lt-prop-type=\"callout\" lt-prop-prevent-focus=\"true\" id=\"hovercard\" lt-prop-origin-elem=\"#tooltipInfoMsg{{zcatProp.id}}\" lt-prop-placement=\"{{expHandlers(zcatProp.placement,'?:',zcatProp.placement,'')}}\"> <template is=\"registerYield\" yield-name=\"hoverCardYield\"> <lyte-hovercard-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.yield}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-yield yield-name=\"{{zcatProp.yield}}\"></lyte-yield></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.value}}\" is=\"case\" lc-id=\"lc_id_0\"><p>{{zcatProp.value}}</p></template></template></lyte-hovercard-content> </template> </lyte-hovercard> </template><style>/* zcat-hovercard component styles\n   Popup styles (.lyteHovercardPopover) are defined globally in layout-comp.css\n   so they are available on every route regardless of lazy loading.\n*/\n\n/* Trigger wrapper */\n.zcat-tooltip-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n</style>";;
ZcatHovercard._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"i","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatHovercard._observedAttributes = ["zcatProp"];
export { ZcatHovercard };
ZcatHovercard.register("zcat-hovercard", {
  hash: "ZcatHovercard_4",
  refHash: "C_zcat-app_app_0"
});

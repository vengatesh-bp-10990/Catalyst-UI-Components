import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let AttentionComp;

class Attention extends Route {
  render() {
    return { outlet: "#page-outlet", component: AttentionComp }
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(import(/* webpackChunkName: "components/javascript/attention-comp" */
    "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/attention-comp.js").then(function(res) {
      AttentionComp = res.AttentionComp;
    }));

    "____dynamicImportsCode____";
  }
}

export { Attention };

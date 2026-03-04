import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let AlertComp;

class Alert extends Route {
  render() {
    return { outlet: "#page-outlet", component: AlertComp }
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(import(/* webpackChunkName: "components/javascript/alert-comp" */
    "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/alert-comp.js").then(function(res) {
      AlertComp = res.AlertComp;
    }));

    "____dynamicImportsCode____";
  }
}

export { Alert };

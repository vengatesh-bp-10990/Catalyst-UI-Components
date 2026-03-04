import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let IconComp;

class Icon extends Route {
  render() {
    return { outlet: "#page-outlet", component: IconComp }
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(import(/* webpackChunkName: "components/javascript/icon-comp" */
    "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/icon-comp.js").then(function(res) {
      IconComp = res.IconComp;
    }));

    "____dynamicImportsCode____";
  }
}

export { Icon };

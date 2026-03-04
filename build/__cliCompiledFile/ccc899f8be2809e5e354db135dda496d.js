import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let LoaderComp;

class Loader extends Route {
  render() {
    return { outlet: "#page-outlet", component: LoaderComp }
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(import(/* webpackChunkName: "components/javascript/loader-comp" */
    "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/loader-comp.js").then(function(res) {
      LoaderComp = res.LoaderComp;
    }));

    "____dynamicImportsCode____";
  }
}

export { Loader };

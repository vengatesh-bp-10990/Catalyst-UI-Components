import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let OverviewComp;

class Overview extends Route {
    render() {
		return { outlet: "#page-outlet", component: OverviewComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/overview-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/overview-comp.js").then(function(res) {
            OverviewComp = res.OverviewComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Overview };

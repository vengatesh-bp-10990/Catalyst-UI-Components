import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let DoublefieldComp;

class Doublefield extends Route {
    render() {
		return { outlet: "#page-outlet", component: DoublefieldComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/doublefield-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/doublefield-comp.js").then(function(res) {
            DoublefieldComp = res.DoublefieldComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Doublefield };

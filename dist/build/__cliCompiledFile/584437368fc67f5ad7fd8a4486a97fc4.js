import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let UsageComp;

class Usage extends Route {
    render() {
		return { outlet: "#page-outlet", component: UsageComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/usage-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/usage-comp.js").then(function(res) {
            UsageComp = res.UsageComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Usage };

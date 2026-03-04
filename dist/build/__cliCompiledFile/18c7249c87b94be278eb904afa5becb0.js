import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let ToggleComp;

class Toggle extends Route {
    render() {
		return { outlet: "#page-outlet", component: ToggleComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/toggle-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/toggle-comp.js").then(function(res) {
            ToggleComp = res.ToggleComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Toggle };

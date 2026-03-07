import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let TooltipComp;

class Tooltip extends Route {
    render() {
		return { outlet: "#page-outlet", component: TooltipComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/tooltip-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/tooltip-comp.js").then(function(res) {
            TooltipComp = res.TooltipComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Tooltip };

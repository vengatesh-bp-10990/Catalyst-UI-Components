import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let PopoverComp;

class Popover extends Route {
    render() {
		return { outlet: "#page-outlet", component: PopoverComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/popover-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/popover-comp.js").then(function(res) {
            PopoverComp = res.PopoverComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Popover };

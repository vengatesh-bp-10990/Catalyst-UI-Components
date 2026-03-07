import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let InlineeditComp;

class Inlineedit extends Route {
    render() {
		return { outlet: "#page-outlet", component: InlineeditComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/inlineedit-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/inlineedit-comp.js").then(function(res) {
            InlineeditComp = res.InlineeditComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Inlineedit };

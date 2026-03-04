import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let ButtonComp;

class Button extends Route {
    render() {
		return { outlet: "#page-outlet", component: ButtonComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/button-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/button-comp.js").then(function(res) {
            ButtonComp = res.ButtonComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Button };

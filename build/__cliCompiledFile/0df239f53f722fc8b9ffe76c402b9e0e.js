import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let CheckboxComp;

class Checkbox extends Route {
    render() {
		return { outlet: "#page-outlet", component: CheckboxComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/checkbox-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/checkbox-comp.js").then(function(res) {
            CheckboxComp = res.CheckboxComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Checkbox };

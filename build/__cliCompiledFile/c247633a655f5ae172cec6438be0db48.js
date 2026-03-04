import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let RadioComp;

class Radio extends Route {
    render() {
		return { outlet: "#page-outlet", component: RadioComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/radio-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/radio-comp.js").then(function(res) {
            RadioComp = res.RadioComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Radio };

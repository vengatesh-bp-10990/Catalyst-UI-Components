import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let KeyvalueComp;

class Keyvalue extends Route {
    render() {
		return { outlet: "#page-outlet", component: KeyvalueComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/keyvalue-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/keyvalue-comp.js").then(function(res) {
            KeyvalueComp = res.KeyvalueComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Keyvalue };

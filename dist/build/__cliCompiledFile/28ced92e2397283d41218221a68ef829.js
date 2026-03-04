import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let InstallationComp;

class Installation extends Route {
    render() {
		return { outlet: "#page-outlet", component: InstallationComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/installation-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/installation-comp.js").then(function(res) {
            InstallationComp = res.InstallationComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Installation };

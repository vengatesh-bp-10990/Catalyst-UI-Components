import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let TabComp;

class Tab extends Route {
    render() {
		return { outlet: "#page-outlet", component: TabComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/tab-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/tab-comp.js").then(function(res) {
            TabComp = res.TabComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Tab };

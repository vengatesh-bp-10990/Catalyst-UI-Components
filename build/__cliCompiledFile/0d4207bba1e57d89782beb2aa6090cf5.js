import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let DropdownComp;

class Dropdown extends Route {
    render() {
		return { outlet: "#page-outlet", component: DropdownComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/dropdown-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/dropdown-comp.js").then(function(res) {
            DropdownComp = res.DropdownComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Dropdown };

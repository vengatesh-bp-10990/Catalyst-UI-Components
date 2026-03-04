import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let TableComp;

class Table extends Route {
    render() {
		return { outlet: "#page-outlet", component: TableComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/table-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/table-comp.js").then(function(res) {
            TableComp = res.TableComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Table };

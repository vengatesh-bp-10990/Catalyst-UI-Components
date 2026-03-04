import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let PaginationComp;

class Pagination extends Route {
    render() {
		return { outlet: "#page-outlet", component: PaginationComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/pagination-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/pagination-comp.js").then(function(res) {
            PaginationComp = res.PaginationComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Pagination };

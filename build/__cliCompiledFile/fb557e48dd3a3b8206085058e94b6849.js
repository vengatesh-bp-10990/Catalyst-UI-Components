import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let LinkboxComp;

class Linkbox extends Route {
    render() {
		return { outlet: "#page-outlet", component: LinkboxComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/linkbox-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/linkbox-comp.js").then(function(res) {
            LinkboxComp = res.LinkboxComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Linkbox };

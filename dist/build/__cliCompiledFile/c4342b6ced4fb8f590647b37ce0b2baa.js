import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let DatepickerComp;

class Datepicker extends Route {
    render() {
		return { outlet: "#page-outlet", component: DatepickerComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/datepicker-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/datepicker-comp.js").then(function(res) {
            DatepickerComp = res.DatepickerComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Datepicker };

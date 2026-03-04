import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let AutocompleteComp;

class Autocomplete extends Route {
    render() {
		return { outlet: "#page-outlet", component: AutocompleteComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/autocomplete-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/autocomplete-comp.js").then(function(res) {
            AutocompleteComp = res.AutocompleteComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Autocomplete };

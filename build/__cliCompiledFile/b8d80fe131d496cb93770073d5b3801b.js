import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let ModalComp;

class Modal extends Route {
    render() {
		return { outlet: "#page-outlet", component: ModalComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/modal-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/modal-comp.js").then(function(res) {
            ModalComp = res.ModalComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Modal };

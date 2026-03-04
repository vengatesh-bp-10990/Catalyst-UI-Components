import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let AvatarComp;

class Avatar extends Route {
    render() {
		return { outlet: "#page-outlet", component: AvatarComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/avatar-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/avatar-comp.js").then(function(res) {
            AvatarComp = res.AvatarComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Avatar };

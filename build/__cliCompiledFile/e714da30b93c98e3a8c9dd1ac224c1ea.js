import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Route } from "../../../node_modules/@slyte/router/index.js";
let FileuploadComp;

class Fileupload extends Route {
    render() {
		return { outlet: "#page-outlet", component: FileuploadComp }
	}

    static actions(arg1) {
		return Object.assign(super.actions({}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/fileupload-comp" */
        "/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/javascript/fileupload-comp.js").then(function(res) {
            FileuploadComp = res.FileuploadComp;
        }));

        "____dynamicImportsCode____";
    }
}

export { Fileupload };

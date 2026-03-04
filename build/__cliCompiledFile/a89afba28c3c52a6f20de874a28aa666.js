import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { ComponentRegistry } from "../node_modules/@slyte/component/index.js";

class ZcatAppComponentRegistry extends ComponentRegistry{
    constructor(){
        super();
    }
    lookups(){
        return []
    }
    // addRegistries() {

    // }

    _() {
        _;
    }
}

ZcatAppComponentRegistry.register({
    hash: "C_zcat-app_app_0",
    refHash: "app_1",
    app: true
});

export {ZcatAppComponentRegistry}; 


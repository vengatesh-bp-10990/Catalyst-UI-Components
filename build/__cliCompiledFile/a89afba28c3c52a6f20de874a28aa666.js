import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { ComponentRegistry } from "../node_modules/@slyte/component/index.js";
import { LyteUiComponentComponentRegistry } from "../node_modules/@zoho/lyte-ui-component/components/component.js";

class ZcatAppComponentRegistry extends ComponentRegistry{
    constructor(){
        super();
        console.log('[ZCAT] ZcatAppComponentRegistry created. LyteUiComp._instanceList:', LyteUiComponentComponentRegistry._instanceList);
    }
    lookups(){
        return []
    }
    addRegistries() {
        console.log('[ZCAT] addRegistries called. LyteUiComp._instanceList:', LyteUiComponentComponentRegistry._instanceList);
        return LyteUiComponentComponentRegistry._instanceList;
    }

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


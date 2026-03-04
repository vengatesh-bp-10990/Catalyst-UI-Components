import { LyteAddon } from "@slyte/core";
import { ZcatUiComponentComponentRegistry }  from "./components/component";

class ZcatUiComponentAddon extends LyteAddon{
    constructor(){
        super();
    }
    lookups(){
        return [{ component: ZcatUiComponentComponentRegistry }];
    }
}
export { ZcatUiComponentAddon };


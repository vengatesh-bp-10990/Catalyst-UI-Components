import { LyteAddon } from "@slyte/core";
import { ZcatUiComponentRegistry } from "./components/component.js";

class ZcatUiAddon extends LyteAddon {

    static singleTon = true;

    lookups() {
        return [ { component: ZcatUiComponentRegistry } ];
    }
}

export { ZcatUiAddon };

import { ComponentRegistry } from "@slyte/component";

class CatalystUIComponentsComponentRegistry extends ComponentRegistry {
    constructor() {
        super();
    }
    lookups() {
        return [
            import("./javascript/zcat-button-comp.js")
        ];
    }
}

export { CatalystUIComponentsComponentRegistry };

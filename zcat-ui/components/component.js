import { ComponentRegistry } from "@slyte/component";

class ZcatUiComponentRegistry extends ComponentRegistry {
    constructor() {
        super();
    }
    lookups() {
        return [];
    }
}

class Component extends ZcatUiComponentRegistry.Component {
    lookups() {
        return [ { component: ZcatUiComponentRegistry } ];
    }
}

export { ZcatUiComponentRegistry, Component };

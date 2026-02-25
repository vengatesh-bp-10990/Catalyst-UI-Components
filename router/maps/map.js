import { RouterMap } from "@slyte/router";

class CatalystUIComponentsMap extends RouterMap {
    static path = '../routes';
    map() {
        this.route("index", { path: '/' });
    }
}

export { CatalystUIComponentsMap };

import { Router } from "@slyte/router";
import { CatalystUIComponentsMap } from "./maps/map";
import { CatalystUIComponentsComponentRegistry } from "../components/component";

class CatalystUIComponentsRouter extends Router {
    lookups() {
        return [{ component: CatalystUIComponentsComponentRegistry }];
    }

    getComponentRegistry() {
        return this.$component;
    }

    getConfig() {
        var config = {
            baseMap: CatalystUIComponentsMap
        };
        return config;
    }

    beforeRouteNavigation = function (prev, current) {
    }

    afterRouteNavigation = function (current) {
    }
}

export { CatalystUIComponentsRouter };

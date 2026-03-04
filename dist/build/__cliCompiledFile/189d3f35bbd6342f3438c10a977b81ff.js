import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Router } from "../node_modules/@slyte/router/index.js";
import  {ZcatAppMap}  from "./maps/map";
import {ZcatAppComponentRegistry}  from "../components/component";

class ZcatAppRouter extends Router {
    constructor() {
        super(...arguments);

        this.beforeRouteNavigation = function(prev,current) { 
            
        };

        this.afterRouteNavigation = function(current) {

        };
    }

    lookups(){
		return [{component : ZcatAppComponentRegistry}]
	}

    getComponentRegistry() {
		return this.$component;
	}

    getConfig() {
		var config = {
			baseMap : ZcatAppMap	
		}
		return config;
	}

    _() {
        _;
    }
}

export {ZcatAppRouter} ;


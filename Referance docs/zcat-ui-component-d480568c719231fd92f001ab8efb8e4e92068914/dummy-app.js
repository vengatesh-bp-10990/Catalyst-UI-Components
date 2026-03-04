import { Lyte } from "@slyte/core";

import {ZcatUiComponentAddon} from "./addon"; //import the addon.js and add that in lookup

class DummyApp extends Lyte{
    lookups(){
        return [ ZcatUiComponentAddon ];
    }
}
export {DummyApp};

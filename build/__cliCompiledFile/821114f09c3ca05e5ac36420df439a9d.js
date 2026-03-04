import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Lyte } from "./node_modules/@slyte/core/index.js";
import  {ZcatAppDb} from "./data-store/db";
import  {ZcatAppComponentRegistry}  from "./components/component";
import  {ZcatAppRouter}  from "./router/router";

class ZcatAppApp extends Lyte{
    lookups(){
        return [{component : ZcatAppComponentRegistry}, {router : ZcatAppRouter} , {db : ZcatAppDb}];
    }

    _() {
        _;
    }
}

export {ZcatAppApp};

ZcatAppApp.register({
    hash: "app_1",
    app: true
});


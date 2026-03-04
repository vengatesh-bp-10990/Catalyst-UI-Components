import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Db,RESTConnector,RESTSerializer } from "../node_modules/@slyte/data/index.js";

class ZcatAppDb extends Db{
    _() {
        _;
    }
}

ZcatAppDb.Connector = RESTConnector;ZcatAppDb.Serializer = RESTSerializer;

ZcatAppDb.register({
    hash: "db_zcat-app_app_0"
});

let Schema = ZcatAppDb.Schema;
export {ZcatAppDb,Schema};

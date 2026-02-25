import { Db, RESTConnector, RESTSerializer } from "@slyte/data";

class CatalystUIComponentsDb extends Db {
    static Connector = RESTConnector;
    static Serializer = RESTSerializer;
}

let Schema = CatalystUIComponentsDb.Schema;

export { CatalystUIComponentsDb, Schema };

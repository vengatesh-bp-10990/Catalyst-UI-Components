import { Logger } from "@slyte/core";

class Dberror extends Logger {
    constructor(){
        super(...arguments);
    }
}

Dberror.errorCodes = {
    LD01: "Primary key value might be missing in the response data that is received, {0}",
    LD02: "Not a valid {0}",
    LD03: "Cannot set the error {0} for {1}",
    LD04: "No such entity to merge, {0}",
    LD05: "Schema( {0} ) of related property - {1} not found in schema - {2}",
    LD06: "Backward relation not present in schema( {0} ), for the property {1} of schema( {2} )",
    LD07: "{0} type not handled in handleArrayOperations",
    LD08: "{0} {1} will be deprecated from next version {2}",
    LD09: "deserializeKey cannot be processed for payload with more than two keys. Please use payloadKey callback instead or try modifying the same in normalizeResponse callback",
    LD10: "Response data not in a format lyte data store expects",
    LD11: "Deprecation Warning! getEntity response payload will not accept an array. It will be deprecated from the next version",
    LD12: "Response ( {0} ) is not in a format, lyte data store expects",
    LD13: "Response processing failed in {0} for schema-{1} {2}, since invalid data is received in {1}(schemaName) key of response data. Data - {3}",
    LD14: "Cannot register {0} - {1}, as it already exists.",
    LD15: "Primary key value might be missing in the response data that is received, {0}",
    LD16: "Entity merge failed for the entity in schema - {0} with primaryKey value - {1}, since either the persisted(saved) primary key value for a newly created entity is not received from server or not in the proper structure to merge",
    LD17: "Entity with the primary key value already exists",
    LD18: "No { 0 } present",
    LD19: "Deprecation Warning! findAll will not accept response payload values other than an array or any empty value. Current implementation which allows this will be deprecated from the next version",
    LD20: "Entity cannot be saved as a state, when it is not either a new or a modified entity or in a error state.",
    LD21: "No such state ( {0} ) saved for the entity.",
    LD22: "For create / newEntity, response with a primary key value should be received",
    LD23: "PrimaryKey field {1} in {0} cannot have default value",
    LD24: "Response couldn't be parsed, {0}",
    LD25: "Cannot create entity for the data - {0}",
    LD26: "Only one baseKey is allowed for a schema",
    LD27: "Entity merge failed, since the data passed is invalid - {0}",
    LD28: "Entity merge failed for the schema - {0}, since a valid primary key value is not found in the data to be merged - {1}"   
};
Dberror.register();

export { Dberror };
import { Mixin } from "@slyte/core";
import { HelperUtils } from "./helperUtils";

class CommonFormHandlerMixin extends Mixin {
    static getRecordInstance(recordObject, key) {
        if(HelperUtils.isEmpty(recordObject) || HelperUtils.isEmpty(key)) {
            return;
        }
        const keys = key.split('.');
        let result = recordObject;

        for (const key of keys) {
            if (result && typeof result === 'object') {
            if (key.includes('[')) {
                // Handle array notation 
                const [arrayKey, index] = key.split('[');
                const arrayIndex = parseInt(index.replace(']', ''), 10);
                if (Array.isArray(result[arrayKey]) && !isNaN(arrayIndex)) {
                result = result[arrayKey][arrayIndex];
                } else {
                result = undefined;
                break;
                }
            } else if (result.hasOwnProperty(key)) {
                result = result[key];
            } else {
                result = undefined;
                break;
            }
            } else {
            result = undefined;
            break;
            }
        }
        return result;
    }
    
}
export {CommonFormHandlerMixin};

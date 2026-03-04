import {Component} from "@slyte/component";
import { prop } from "@slyte/core";

class ZcatTimePicker extends Component {
	constructor() {
		super();
	}


init() {
}

	data() {
		return {
			self: prop("object", {default: this }),
     		zcatProp: prop('object'),
			key: prop('string'),
      		formData: prop('object', { watch: true })
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			
		}
	}

	static observers() {
		async function zcatPropToUserObj() {
		debugger
		const zcatProp=this.getData('zcatProp');
		const formData=this.getData('formData');
		const key = this.getData('key');
		this.setData('formData.'+key, zcatProp.value)
		}
		async function userObjToZcatProp() {
		debugger
		const zcatProp=this.getData('zcatProp');
		const formData=this.getData('formData');
		const key = this.getData('key');
		this.$addon.objectUtils(zcatProp, 'add', 'value', formData[key])
		}
		return {
		userObjToZcatProp: userObjToZcatProp.observes('formData.*'), // No I18N
		zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.value') // No I18N
		};
	}

}

export {ZcatTimePicker}; 

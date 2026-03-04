import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatAttention extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			self: prop('object'),
      		zcatProp: prop('object')
		}	
	}

	static methods() {
		return {
			// async customLbindForAccordion(methodName) {
			// 	const self = this.getData('self');
			// 	const prop = this.getData('zcatProp');
			// 	if (methodName) {
			// 	  await self.executeMethod(
			// 		methodName,
			// 		...Array.prototype.slice.call(arguments, 1)
			// 	  );
			// 	}
			// }
		}
	}

	static actions() {
		return {
			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatAttention}; 

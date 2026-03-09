import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatTab extends Component {
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
			async customLbindForTab(methodName) {
				const self = this.getData('self');

				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			}
		};
	}

	static actions() {
		return {}
	}

	static observers() {
		return {}
	}

}

export {ZcatTab}; 

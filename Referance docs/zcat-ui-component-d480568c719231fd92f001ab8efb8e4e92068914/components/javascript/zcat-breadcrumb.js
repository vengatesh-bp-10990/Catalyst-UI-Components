import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatBreadcrumb extends Component {
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
	
			}
		}

	static actions() {
		return {
			async breadcrumbClick(item) {
				const self = this.getData('self');
				if(item.callback && item.callback.name) {
					if(item.callback.arguments && item.callback.arguments.length) {
					await self.executeMethod(item.callback.name, ...item.callback.arguments);
					} else {
					await self.executeMethod(item.callback.name);
					}
				} 
			}
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatBreadcrumb};

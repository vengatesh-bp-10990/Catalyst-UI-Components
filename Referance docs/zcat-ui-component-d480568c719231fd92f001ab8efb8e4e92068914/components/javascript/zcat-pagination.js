import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatPagination extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			self: prop('object'),
      		zcatProp: prop('object'),
			paginationDropdownStyles: prop( "object", {
				default: {
					"id": "dropdown-id",
					"placeholder": "Select Option",
					"size": "extra-small",
					"width": "zcat-w-fc",
					"variant": "ghost",
					"selected": "10",
					"onChange": "paginationChangeMethod",
					"options": [
						{
							"name": "10",
							"value": "10"
						},
						{
							"name": "25",
							"value": "25"
						},
						{
							"name": "50",
							"value": "50"
						},
						{
							"name": "100",
							"value": "100"
						}
					]
				}
			})	
		}	
	}

	static methods() {
		return {
			async customLbindForPagination(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			},
			async customLbindForDropdown(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
		
				if (prop.key) {
				  self.setData(prop.key, prop.selected);
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			}
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

export {ZcatPagination}; 

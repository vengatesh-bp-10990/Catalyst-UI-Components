import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatTab extends Component {
	constructor() {
		super();
	}
	// TabDetails: prop('object',{default:{
	// 	variant: 'primary',
	// 	activeTab: 'lyteTabActive',
	// 	height: '200px',
	// 	closeIcon: 'false',
	// 	sizeClass:'default',
	// 	list: [
	// 		{	
	// 			id:'tab1',
	// 			icon:{
	// 				name: '',
	// 				class: 'zcat-w14 zcat-h14 zcat-tab-color zcat-flex-center'
	// 			},
	// 			title: {
	// 				name: 'Tab1',
	// 				badge: ''
	// 			},
	// 			body: {
	// 				yield: 'Tabbody1' //template name
	// 			}
	// 		},
	// 		{
	// 			id:'tab2',
	// 			icon:{
	// 				name: '',
	// 				class: 'zcat-w14 zcat-h14 zcat-tab-color zcat-flex-center'
	// 			},
	// 			title: {
	// 				name: 'Tab2',
	// 				badge: ''
	// 			},
	// 			body: {
	// 				yield: 'Tabbody2' //template name
	// 			}
	// 		}
	// 	]
	// 	}
	// })

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
				const prop = this.getData('zcatProp');
		
				// if (
				//   prop.variant == 'secondary' &&
				//   !event.target.closest('#zcatSecondaryAccordion')
				// ) {
				//   return false;
				// }
		
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
		return {
			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatTab}; 

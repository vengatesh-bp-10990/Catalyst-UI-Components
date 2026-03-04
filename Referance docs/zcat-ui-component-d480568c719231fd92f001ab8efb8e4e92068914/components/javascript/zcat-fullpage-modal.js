import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatFullpageModal extends Component {
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
			// onBeforeModalClose(event, modalComp){
			// 	if(event.key === 'Escape' || event.keyCode === 27){
			// 		return false;
			// 	}
			// 	else{
			// 		return true;
			// 	}
			// }
		}
	}

	static actions() {
		function defaultOnTitleClick(arg) {
			if (this.getMethods('onTitleClick')) {
				this.executeMethod('onTitleClick', arg);
			}
		}

		return {
			defaultOnTitleClick			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatFullpageModal}; 

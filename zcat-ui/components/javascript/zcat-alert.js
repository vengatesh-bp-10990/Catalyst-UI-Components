import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatAlert extends Component {
	constructor() {
		super();
	}

	data() {
		return {
     		self: prop('object'),
			alertThis: prop('object', {default: this }),
			showAlert: prop('boolean', {default: true })

		}	
	}

	static methods() {
		return {

			closeToaster(){
				this.setData('showAlert', false);
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

export {ZcatAlert}; 

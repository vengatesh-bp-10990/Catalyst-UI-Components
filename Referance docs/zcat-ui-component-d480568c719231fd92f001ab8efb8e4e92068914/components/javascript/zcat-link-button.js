import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatLinkButton extends Component {
	constructor() {
		super();
	}
	didConnect(){
		const self = this.getData('self');
		const prop = this.getData('zcatProp');
		const routeFromZcat = prop.route;
		if(/^(https?:|mailto:|tel:|\/\/)/.test(routeFromZcat)){
			this.setData('isExternalLink', true);
		}
		else{
			this.setData('isExternalLink', false);
		}
	}

	data() {
		return {
			self: prop('object'),
			zcatProp: prop('object'),
			isExternalLink: prop('boolean', { default: true })
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
		return {
		}
	}

}

export {ZcatLinkButton}; 

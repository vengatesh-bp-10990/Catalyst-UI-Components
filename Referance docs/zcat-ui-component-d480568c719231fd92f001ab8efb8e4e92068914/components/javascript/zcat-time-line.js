import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatTimeLine extends Component {
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
			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatTimeLine}; 

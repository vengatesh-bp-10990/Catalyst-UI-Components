import {Component} from "@slyte/component";
import { prop } from "@slyte/core";

class ZcatTimerangepicker extends Component {
	constructor() {
		super();
	}
	init() {
		// Current time
		let now = new Date();

		// Start time = current time
		const startTime = now.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true
		}).toUpperCase();

		// End time = 12 hours later
		let end = new Date(now.getTime());
		end.setHours(end.getHours() + 12);

		const endTime = end.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true
		}).toUpperCase();

		// Assign into component data
		this.setData("startTime", startTime);
		this.setData("endTime", endTime);
	}


	data() {
		return {
			self: prop("object", {default: this }),
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

export {ZcatTimerangepicker}; 

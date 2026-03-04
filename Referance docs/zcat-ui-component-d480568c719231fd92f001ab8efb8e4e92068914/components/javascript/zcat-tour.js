import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatTour extends Component {
	constructor() {
		super();
	}

	didConnect() {
		this._tourInterval = setInterval(() => {
			let activeStep = document.querySelector('lyte-tour-step.lyteTourCStep');
			if (activeStep) {
				let is_index = activeStep.getAttribute("lt-prop-selector");
				let stepIndex = parseInt(is_index.replace(/\D/g, ""), 10);

				// 👇 subtract 1
				stepIndex = stepIndex - 1;

				this.setData("activeStepIndex", stepIndex);
			}
		}, 100);
	}

	didDestroy() {
		if (this._tourInterval) {
			clearInterval(this._tourInterval);
		}
	}





	init() {
		//set initial theme value
		const nextStepMethod = this.getData('zcatProp.tour_nextStep_method');
		this.setData("nextTourBtnDetails.callback.name", nextStepMethod);
		const endStepMethod = this.getData('zcatProp.tour_end_method');
		this.setData("endTourBtnDetails.callback.name", endStepMethod);
	}

	data() {
		return {
			activeStepIndex: prop('string',{default: '0'}),
     		zcatProp: prop('object'),
			self: prop('object', {default: this }),
			endTourBtnDetails: prop('object', {default: {"label": "End Tour",
			"variant": "grey",
			"size": "small",
			"disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
			"loading": false, "color": "primary",
			"type": "",
			"icon": {}, "menu": {}, "callback": {"name": ""}}}),
			nextTourBtnDetails: prop('object', {default: {"label": "Continue",
			"variant": "fill",
			"size": "small",
			"disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
			"loading": false, "color": "primary",
			"type": "", "menu": {}, "callback": {"name": ""}}})
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			// carousalClick(ele){
			// 	let value = ele.getAttribute("data-value");
			// 	$L('lyte-tour')[0].goToStep(value);
			// }
			carousalClick(ele) {
				let index = +ele.getAttribute("data-value");
				// this.setData("activeStepIndex", index);
				$L('lyte-tour')[0].goToStep(index);
			}
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatTour}; 

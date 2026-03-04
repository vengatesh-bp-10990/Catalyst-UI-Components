import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatLinkBox extends Component {
	constructor() {
		super();
	}

	didConnect() {
		this.actions.resetShadow.call(this);
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
			resetShadow() {
				const scrollDiv = document.querySelector('.zcat-link-box-container'); // NO I18N
				const copyDiv = document.querySelector('.zcat-link-box-copy-btn'); // NO I18N
				if (scrollDiv) {
					const atStart = scrollDiv.scrollLeft === 0;
					const atEnd = scrollDiv.scrollLeft + scrollDiv.clientWidth >= scrollDiv.scrollWidth;

					scrollDiv.classList.toggle('shadow-left', !atStart);  // NO I18N
					copyDiv.classList.toggle('shadow-right', !atEnd);   // NO I18N
				}
			},
			copyToClipboard(value) {
				const dummy = document.createElement('textarea');
				document.body.appendChild(dummy);
				dummy.value = value;
				dummy.select();
				document.execCommand('Copy'); //No I18N
				document.body.removeChild(dummy);
				// @ts-ignore
				document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
			}
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatLinkBox}; 

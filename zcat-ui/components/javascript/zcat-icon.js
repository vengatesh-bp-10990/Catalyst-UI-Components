import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatIcon extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			stroke: prop('string', { default: '' }),
			width: prop('string', { default: '14' }),
			height: prop('string', { default: '14' }),
			name: prop('string', { default: '' }),
			strokeWidth: prop('string', { default: '1.3' }),
			fill: prop('string', { default: '' })
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

export {ZcatIcon}; 

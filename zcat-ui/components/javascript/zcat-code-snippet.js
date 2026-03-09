import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatCodeSnippet extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			self: prop("object", {default: this }),
     		zcatProp: prop('object'),
			// in your component
			basePath:prop('string', { default : 'addons/@zoho/lyte-editor/dist' } ),
			language:prop('string', { default : 'javascript' }),
			value:prop('string', { default : `const sample = function(){
					console.log("example javascript code")
					}` }),
			toolbar:prop('array', { default : [
					{
						'fontSize': {
						'options': [
							'6px', '8px', '10px', '14px', '20px'
						],
						'default': '20px'
						}
					},
					'undo',
					'redo',
					'cut',
					'copy',
					'indent',
					'outdent',
					'duplicate',
					'comment',
					'delete',
					'find',
					'toggleWrap',
					'format',
					'formatOnType',
					'reset',
					'toggleDarkMode',
					'keyBindings',
					'help',
					{
						'help': {
						'throwEvent': true
						}
					},
					{
						'save': {
						'throwEvent': true,
						'align': 'right'
						}
					}
					] })
		}	
	}

	static methods() {
		return {
			copyToSnippet(codeSnippet){
				document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
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

export {ZcatCodeSnippet}; 

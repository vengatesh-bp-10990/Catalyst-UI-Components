import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class InputComp extends Component {
	constructor() {
		super();
	}

	init(){
		this.constructCodeSnippet();
		this.setData('labelInitialState', true);
		this.setData('isLabelEnabled', true) 

	}	

	// constructCodeSnippet(
	// 	{ 
	// 		inputType = this.getData('inputObj').type,
	// 		placeholder = this.getData('inputObj').placeholder ? this.getData('inputObj').placeholder : 'Enter a value',
	// 		inputSize = this.getData('inputObj').size,
	// 		labelContent = this.getData('inputObj').label ? this.getData('inputObj').label : '' ,
	// 		infoIcon = this.getData('inputObj').infoIcon ? this.getData('inputObj').infoIcon : '',
	// 		iconLeft = this.getData('inputObj').iconLeft,
	// 		iconLeftName = this.getData('inputObj').iconLeft ? this.getData('inputObj').iconLeft.name : "",
	// 		iconLeftClass =  this.getData('inputObj').iconLeft ? this.getData('inputObj').iconLeft.class : "",
	// 		iconRight = this.getData('inputObj').iconRight,
	// 		iconRightName = this.getData('inputObj').iconRight ? this.getData('inputObj').iconRight.name : "",
	// 		iconRightClass =  this.getData('inputObj').iconRight ? this.getData('inputObj').iconRight.class : "",
	// 		disabled = this.getData('inputObj').disabled ? this.getData('inputObj').disabled : '',
	// 		errorMessage = this.getData('inputObj').errorMessage ? this.getData('inputObj').errorMessage : ''
	// 	} = {}
	//   ) {

	// 	iconLeft = this.getData('inputObj').iconLeft,
	// 		iconLeftName = this.getData('inputObj').iconLeft ? this.getData('inputObj').iconLeft.name : "",
	// 		iconLeftClass =  this.getData('inputObj').iconLeft ? this.getData('inputObj').iconLeft.class : ""

	// 	let iconLeftCode = iconLeft
	// 	? `"iconLeft": { "name": "${iconLeftName}", "class": "${iconLeftClass}", "position": "${iconLeft.position}" }`
	// 	: `"iconLeft": {}`;
	
	// 	iconRight = this.getData('inputObj').iconRight,
	// 		iconRightName = this.getData('inputObj').iconRight ? this.getData('inputObj').iconRight.name : "",
	// 		iconRightClass =  this.getData('inputObj').iconRight ? this.getData('inputObj').iconRight.class : ""

	// 	let iconRightCode = iconRight
	// 	? `"iconRight": { "name": "${iconRightName}", "class": "${iconRightClass}", "position": "${iconRight.position}" }`
	// 	: `"iconRight": {}`;

	// 	let infoIconCode = infoIcon 
	// 		? `"infoIcon": {
	// 			"id": "infoId",
	// 			"value": "tooltip content............",
	// 			"placement": ""    
	// 		} 
	// 		  `
	// 		: `"infoIcon": {} `


	// 	let html_code = `
	// 	    <zcat-input
    //             self="{{self}}"       
    //             zcat-prop={{inputObj}}
    //         ></zcat-input>
	// 	`;
	// 	let js_code = `
	// 	  	self: prop('object', {default: this}),
	// 		inputObj: prop("object", { 
	// 			default:{
	// 				"id": "input-id", 
	// 				"placeholder": ${placeholder ? `"${placeholder}"` : ""},
	// 				"width": "300px",
	// 				"type": "${inputType}",          // number, text, time, date, textarea, datetime, password			
	// 				"size": "${inputSize}",
	// 				"label": "${labelContent}",
	// 				${iconLeftCode},
	// 				${iconRightCode},
	// 				"disabled": "${disabled}",
	// 				"errorMessage": "${errorMessage}",
	// 				${infoIconCode}
	// 			}
	// 		})		  
	// 	`;
	
	// 	this.setData('htmlCode', html_code)
	// 	this.setData('jsCode', js_code)
	// }

	constructCodeSnippet() {
		let inputObj = this.getData('inputObj') || {};
		let inputData = {};

		// Basic props
		inputData.id = inputObj.id || "input-id";
		inputData.type = inputObj.type || "text"; // text, number, time, date, textarea, datetime, password
		inputData.width = inputObj.width || "300px";
		inputData.size = inputObj.size || "default";
		if (inputObj.placeholder) { inputData.placeholder = inputObj.placeholder };
		if (inputObj.label) { inputData.label = inputObj.label };
		if (inputObj.disabled) { inputData.disabled = inputObj.disabled };
		if (inputObj.errorMessage) { inputData.errorMessage = inputObj.errorMessage };

		// Icons
		if (inputObj.iconLeft) {
			inputData.iconLeft = {
				name: inputObj.iconLeft.name || "",
				class: inputObj.iconLeft.class || "",
				position: inputObj.iconLeft.position || "left"
			};
		}

		if (inputObj.iconRight) {
			inputData.iconRight = {
				name: inputObj.iconRight.name || "",
				class: inputObj.iconRight.class || "",
				position: inputObj.iconRight.position || "right"
			};
		}

		// Info Icon
		if (inputObj.infoIcon) {
			inputData.infoIcon = {
				id: inputObj.infoIcon.id || "infoId",
				value: inputObj.infoIcon.value || "tooltip content............",
				placement: inputObj.infoIcon.placement || ""
			};
		}

		// JS code snippet
		let js_code = `
		self: prop('object', { default: this }),
		inputObj: prop("object", {
			default: ${JSON.stringify(inputData, null, 4)}
		})
		`;

		// HTML code snippet
		let html_code = `
		<zcat-input
			self="{{self}}"       
			zcat-prop="{{inputObj}}"
		></zcat-input>
		`;

		// this.setData('jsCode', js_code);
		// this.setData('htmlCode', html_code);
		this.setData('htmlCodeSnippet.code', html_code)
		this.setData('jsCodeSnippet.code', js_code)
	}


	data() {
		return {
			compHead: prop("string", { default: "Text-box" }),
			compDesc: prop("string", {
				default:
				"Text and TextArea description...",
			}),
			headTab: prop("array", {
				default: [
				{
					name: "Customize",
					id: "custom",
				},
				{
					name: "Change Logs",
					id: "change_logs",
				}
				]
			}),
			customDetailsHide: prop("boolean", { default: true }),

			// for label
			self: prop("object", { default: this }),
			inputObj: prop("object", { 
				default: {
					"id": "input-id", 
					"width": "300px",
					"label": "Label",
					"type": "text",          // number, text, time, date, textarea, datetime, password
					"placeholder": "Enter a text",
					"size": "default"					
				}
			}),

			// jsCode: prop('string', { default: '' }),
			// htmlCode: prop('string', { default: '' }),
			jsCodeSnippet: prop('object', {
				default: {
					variant: "code_snippet",
					type: "js"
				}
			}),
			htmlCodeSnippet: prop('object', {
				default: {
					variant: "code_snippet",
					type: "html"
				}
			}),

			//----------new------------------------------

			resetButtonObj: prop('object', {
				default:
				{
				  "label": "Reset",
				  "variant": "grey",
				  "color": "grey",
				  "size": "small",
				  "callback": {
					"name": "resetInputCustomization"
				  }
				}
			}),
			isLabelEnabled: prop('boolean', false),
			isIconLeftEnabled: prop('boolean', false),
			isIconRightEnabled: prop('boolean', false),
			isOptionalEnabled: prop('boolean', false),
			disabledOptionForShowError: prop('array', []),
			rightIconSwitchDisable: prop('boolean', false),
			disabledOptionForRightIcon: prop('array', []),
			isTooltipPlacementEnabled: prop('boolean', false), 

			// for reset 
			selectedVariant: prop('string', 'text'),
			selectedSize: prop('string', 'default'),
			labelInitialState: prop('boolean', false), 
			labelInfoIconInitialState: prop('boolean', false),
			iconLeftInitialState: prop('boolean', false),
			iconRightInitialState: prop('boolean', false), 
			// isOptionalEnabled
			selectedInitialState: prop('string', 'default'),
			showErrorInitialState: prop('boolean', false) 


		}		
		
	}

	setInputIconSize(){
		let inputIconClass;
		if(this.getData('inputObj').size === 'small'){
			inputIconClass = "zcat-w14 zcat-h14 zcat-stroke-input-icon"
		  	return inputIconClass;
		}
		else if(this.getData('inputObj').size === 'extra-small'){
			inputIconClass = "zcat-w12 zcat-h12 zcat-stroke-input-icon"
		  	return inputIconClass;
		}
		else{    // default
			inputIconClass = "zcat-w16 zcat-h16 zcat-stroke-input-icon"
		  	return inputIconClass;
		}		
	}

	static methods() {
		return {
			copyToSnippet(codeSnippet){
				document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
			},
			changeInputType(event, type){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "type", type);
				type === 'textarea' ? this.setData('rightIconSwitchDisable', true) : this.setData('rightIconSwitchDisable', false);

				this.constructCodeSnippet();
				this.setData('selectedVariant', type);
			},
			changeInputSize(event, inputSize){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "size", inputSize);

				// let inputIconClass;
				// inputIconClass = this.setInputIconSize()

				// if(this.getData('inputObj').iconLeft !== null && this.getData('inputObj').iconLeft !== undefined){
				// 	this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft.class", inputIconClass);
				// }
				// if(this.getData('inputObj').iconRight !== null && this.getData('inputObj').iconRight !== undefined){   // no else-if, if only
				// 	this.$app.objectUtils(this.getData('inputObj'), 'add', "iconRight.class", inputIconClass);
				// }
				this.constructCodeSnippet();
				this.setData('selectedSize', inputSize);
			},
			//   may 2 
			labelChecked(){
				this.setData('isLabelEnabled', true);
				this.$app.objectUtils(this.getData('inputObj'), 'add', "label", "Label");
				// for optional
				// let inputObj = this.getData('inputObj');
				// let updatedObj = { ...inputObj };

				// if(this.getData('isOptionalEnabled')){
				// 	updatedObj.label = inputObj.label + ' (Optional)';
				// }
				// if(updatedObj.placeholder && updatedObj.placeholder.includes(' (Optional)')){
				// 	updatedObj.placeholder = updatedObj.placeholder.replace(' (Optional)', '')
				// }
				// this.setData('inputObj', updatedObj);
				this.constructCodeSnippet();

				this.setData('labelInitialState', true);
			},
			labelUnchecked(){
				this.setData('isLabelEnabled', false)
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "label");
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "infoYield");
				// to remove the optional
				// let inputObj = this.getData('inputObj');
				// let updatedObj = { ...inputObj };

				// if(this.getData('isOptionalEnabled')){ // optional is checked
				// 	if(updatedObj.placeholder){
				// 		updatedObj.placeholder = updatedObj.placeholder +  ' (Optional)';
				// 	}
				// 	if(updatedObj.label && updatedObj.label.includes(' (Optional)')){
				// 		updatedObj.label = updatedObj.label.replace(' (Optional)', '')
				// 	}
				// }
				// else{  
				// 	if(updatedObj.label && updatedObj.label.includes(' (Optional)')){
				// 		updatedObj.label = updatedObj.label.replace(' (Optional)', '')
				// 	}
				// }
				// this.setData('inputObj', updatedObj);
				this.constructCodeSnippet();

				this.setData('labelInitialState', false);
			},
			labelInfoChecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "label", "Label");
				this.$app.objectUtils(this.getData('inputObj'), 'add', "infoIcon", {
					"id": "infoId",
					"value": "The tooltip The toolti The toolti The toolti The toolti The toolti"
				});

				this.setData('isTooltipPlacementEnabled', true);

				// for optional
				let inputObj = this.getData('inputObj');
				let updatedObj = { ...inputObj };

				if(this.getData('isOptionalEnabled')){
					updatedObj.label = inputObj.label + ' (Optional)';
				}
				if(updatedObj.placeholder && updatedObj.placeholder.includes(' (Optional)')){
					updatedObj.placeholder = updatedObj.placeholder.replace(' (Optional)', '')
				}
				this.setData('inputObj', updatedObj);

				this.constructCodeSnippet();

				this.setData('labelInfoIconInitialState', true);
			},
			labelInfoUnchecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "infoIcon");
				this.setData('isTooltipPlacementEnabled', false);
				this.constructCodeSnippet();
				this.setData('labelInfoIconInitialState', false);
			},
			changeTooltipPlacement(event, placement){
				if(placement === 'auto'){
					this.$app.objectUtils(this.getData('inputObj'), 'delete', "infoIcon.placement");
				}
				else{
					this.$app.objectUtils(this.getData('inputObj'), 'add', "infoIcon.placement", placement);
				}
				this.constructCodeSnippet();
				// this.setData('selectedTooltipPlacement', placement);
			},

			iconLeftChecked(){
				this.setData('isIconLeftEnabled', true)
				// let inputIconClass;
				// inputIconClass = this.setInputIconSize()

				// if(this.getData('inputObj').iconLeft !== null && this.getData('inputObj').iconLeft !== undefined){
				// 	this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft.class", inputIconClass);
				// }

				this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft", {
				"position": "left",
				"name":  this.getData('inputObj')?.iconLeft?.name ?? 'plus'
				}) 
				this.constructCodeSnippet(); 

				this.setData('iconLeftInitialState', true);
			},
			iconLeftUnchecked(){
				this.setData('isIconLeftEnabled', false)
				this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft", null);
				this.constructCodeSnippet(); 
				this.setData('iconLeftInitialState', false);
			},
			iconRightChecked(){
				this.setData('isIconRightEnabled', true)
				// let inputIconClass;
				// inputIconClass = this.setInputIconSize();

				// if(this.getData('inputObj').iconRight !== null && this.getData('inputObj').iconRight !== undefined){   // no else-if, if only
				// 	this.$app.objectUtils(this.getData('inputObj'), 'add', "iconRight.class", inputIconClass);
				// }

				this.setData('disabledOptionForRightIcon', ['textarea']);
				this.$app.objectUtils(this.getData('inputObj'), 'add', "iconRight", {
				"position": "right",
				"name":  this.getData('inputObj')?.iconRight?.name ?? 'plus'
				}) 
				this.constructCodeSnippet(); 
				this.setData('iconRightInitialState', true);
			},
			iconRightUnchecked(){
				this.setData('isIconRightEnabled', false)
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "iconRight");
				this.constructCodeSnippet(); 
				this.setData('disabledOptionForRightIcon', []);
				this.setData('iconRightInitialState', false);
			},
			optionalChecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "isOptional", true);
				this.setData('isOptionalEnabled', true);  
				this.constructCodeSnippet();
			},
			optionalUnchecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "isOptional", false);
				this.setData('isOptionalEnabled', false);  
				this.constructCodeSnippet();
			},
			selectInputIcon(event, iconName){
				// let inputIconClass = this.setInputIconSize();
				if(this.getData('inputObj').iconLeft !== null && this.getData('inputObj').iconLeft !== undefined){
					this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft.name", iconName);
					// this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft.size", iconName);
					// this.$app.objectUtils(this.getData('inputObj'), 'add', "iconLeft.class", inputIconClass);
				}
				else if(this.getData('inputObj').iconRight !== null && this.getData('inputObj').iconRight !== undefined){
					this.$app.objectUtils(this.getData('inputObj'), 'add', "iconRight.name", iconName);
					// this.$app.objectUtils(this.getData('inputObj'), 'add', "iconRight.class", inputIconClass);
				}
				this.constructCodeSnippet({ "iconName": iconName });
				
			},
			changeInputState(event, state){
				if(state === 'disabled'){
					this.$app.objectUtils(this.getData('inputObj'), 'add', "disabled", true);
					this.setData('showErrorSwitchDisable', true)
				}
				else{
					this.$app.objectUtils(this.getData('inputObj'), 'delete', "disabled");
					this.setData('showErrorSwitchDisable', false)
				}
				this.constructCodeSnippet();
				this.setData('selectedInitialState', state);
			},
			showErrorChecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'add', "errorMessage", "Sample error message");
				this.constructCodeSnippet();
				this.setData('disabledOptionForShowError', ['disabled']);
				this.setData('showErrorInitialState', true);
			},
			showErrorUnchecked(){
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "errorMessage");
				this.constructCodeSnippet();
				this.setData('disabledOptionForShowError', [])
				this.setData('showErrorInitialState', false);
			},			
			resetInputCustomization(){
				// for UI
				this.$app.objectUtils(this.getData('inputObj'), 'add', "type", 'text');
				this.$app.objectUtils(this.getData('inputObj'), 'add', "size", 'default');
				this.$app.objectUtils(this.getData('inputObj'), 'add', "label", "Label");
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "iconLeft");
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "iconRight");
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "disabled");        
				//  -------- optional ku podanum check
				this.$app.objectUtils(this.getData('inputObj'), 'delete', "errorMessage");

				setTimeout(() => {						
					this.setData('disabledOptionForShowError', []);
					this.setData('selectedSize', 'default')

					this.setData('selectedVariant', 'text');
					this.setData('labelInitialState', true);
					this.setData('labelInfoIconInitialState', false);
					this.setData('iconLeftInitialState', false);
					this.setData('iconRightInitialState', false);
					this.setData('rightIconSwitchDisable', false)
					this.setData('isOptionalEnabled', false);
					this.setData('selectedInitialState', 'default');
					this.setData('showErrorInitialState', false);
					// this.setData('labelInfoIconInitialState', false)
				  }, 0);

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

export {InputComp}; 

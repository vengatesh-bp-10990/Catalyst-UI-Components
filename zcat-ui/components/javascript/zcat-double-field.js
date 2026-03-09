import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatDoubleField extends Component {
	constructor() {
		super();
	}

	init(){
		const featureObj = this.getData('featureObj');
		const userObj = this.getData('userObj');
		this.setData('featureObj', userObj);

		// To set the size for the seperate inputs 
		const zcatProp = this.getData('zcatProp');
		this.$app.objectUtils(zcatProp, "add", "fieldList[0].fieldObj.size", zcatProp.size);
		this.$app.objectUtils(zcatProp, "add", "fieldList[1].fieldObj.size", zcatProp.size);
	}

	data() {
		const doubleField = prop("object", {
			default: {
				size: "default",
				label: "Field Label",
				fieldList: [
					{
						type: "textbox", 
						fieldObj: {
							id: "input-id",
							type: "text", 
							width: "200px",
							placeholder: "Enter a text"
						}
					}, 
					{
						type: "dropdown", 
						fieldObj: {
							id: "dropdown-id",
							placeholder: "Select Option", 
							width: "zcat-w400",
							options: [
								{
									name: "India", 
									value: "india"
								}, 
								{
									name: "Pakistan", 
									value: "pakistan"
								}, 
								{
									name: "Gujarat", 
									value: "gujarat"
								}
							]
							
						}

					}
					
				]
			}
		})

		return {
      		featureObj: prop("object", { watch: true }),
			zcatProp: prop("object", {default: {}}, { watch: true }),
			self: prop("object", { default: this }), 
			fieldClass: prop("string", {default: ""}),
			userObj: prop('object', { default: {} })			
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

	optionalHandling(){
		const zcatProp = this.getData('zcatProp');
			if(zcatProp.isOptional){
				if(!zcatProp.label){
					this.$app.objectUtils(zcatProp, "add", "fieldList[0].fieldObj.isOptional", true);
					this.$app.objectUtils(zcatProp, "add", "fieldList[1].fieldObj.isOptional", true);
				}
				else{
					this.$app.objectUtils(zcatProp, "delete", "fieldList[0].fieldObj.isOptional");
					this.$app.objectUtils(zcatProp, "delete", "fieldList[1].fieldObj.isOptional");
				}
		}
	}

	static observers() {
		async function optionalFields(){
			this.optionalHandling();
		}
		async function observeLabel(){
			this.optionalHandling();
		}

		return {
			optionalFields: optionalFields.observes('zcatProp.isOptional'),
			observeLabel: observeLabel.observes('zcatProp.label')
		}
	}

}

export {ZcatDoubleField}; 

import { Component } from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatSidemenu extends Component {
	constructor() {
		super();
	}

	data() {

		const sidebarComp = prop("object", {default: {}}) 
		
		// prop("object", {
		// 	default: {
		// 		title: {
		// 			label: "Serverless",
		// 			value: "serverless",
		// 			icon: {
		// 				name: "zcat-icon-cloudscale",
		// 				class: "zcat-w24 zcat-h24"
		// 			},
		// 			onclick: () => console.log("clicked")
		// 		},
		// 		group: [
		// 			{
		// 				label: "Faas",
		// 				value: "faas",
		// 				children: [
		// 					{
		// 						label: "Functions",
		// 						value: "functions",
		// 						leadingIcon: {
		// 							name: "zcat-icon-edit",
		// 							class: "zcat-h16 zcat-w16  zcat-stroke-greybtn-icon"
		// 						},
		// 						onclick: ""
		// 					},
		// 					{
		// 						label: "Security Rules",
		// 						value: "securityRules",
		// 						leadingIcon: {
		// 							name: "zcat-icon-edit",
		// 							class: "zcat-h16 zcat-w16  zcat-stroke-greybtn-icon"
		// 						},
		// 						onclick: ""
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// });


		return {
			sidebarComp,
			self: prop('object', { default: this }),
			isSidebarShrinked: prop('boolean', { default: false })
		}
	}

	static methods() { 
		function shrinkSidebar(a, b, c, d){
			this.setData('isSidebarShrinked', true)
		}
		function expandSidebar(){
			this.setData('isSidebarShrinked', false)
		}
		return{
			shrinkSidebar,
			expandSidebar
		}
		
	}

	static actions() {

		function defaultOnTitleClick(arg) {
			if (this.getMethods('onTitleClick')) {
				this.executeMethod('onTitleClick', arg);
			}
		}
		function onClickNavItem(childrenValue, itemValue, currentElement){
			const features = document.querySelectorAll('.zcat-feature');
			features.forEach(element => {
				element.classList.remove('active');				
			});
			currentElement.querySelector('a').classList.add('active');
			
			if (this.getMethods('onItemClick')) {
				this.executeMethod('onItemClick', childrenValue, itemValue, currentElement);
			}
		}
		
		return {
			defaultOnTitleClick,
			onClickNavItem
		}
		
	}

	static observers() {
		return {
		}
	}

}

export { ZcatSidemenu }; 

import {Component} from "@slyte/component";
import { prop } from '@slyte/core';
import { objectUtils } from "@slyte/core/src/lyte-utils";

class DropdownComp extends Component {
	constructor() {
		super();
	}

	init(){
		this.constructCodeSnippet();
		this.setData('labelInitialState', true);
		this.setData('isLabelEnabled', true); 
		this.setData('toRerenderComp', true);
	}	

	constructCodeSnippet() {
		let dropdownObj = this.getData('dropdownObj') || {};
		let dropdownData = {};
		dropdownData.id = "dropdown-id";
		dropdownData.placeholder = dropdownObj.placeholder || "Select Option";

		if (dropdownObj.dropdown_type) dropdownData.dropdown_type = dropdownObj.dropdown_type;
		if (dropdownObj.size) dropdownData.size = dropdownObj.size;
		if (dropdownObj.label) dropdownData.label = dropdownObj.label;
		if (dropdownObj.width) dropdownData.width = dropdownObj.width;
		if (dropdownObj.disabled) dropdownData.disabled = dropdownObj.disabled;
		if (dropdownObj.variant) dropdownData.variant = dropdownObj.variant;
		if (dropdownObj.errorMessage) dropdownData.errorMessage = dropdownObj.errorMessage;
		if (dropdownObj.selected) dropdownData.selected = dropdownObj.selected;
		if (dropdownObj.checkboxChips) dropdownData.checkboxChips = dropdownObj.checkboxChips;

		if (dropdownObj.isOptional === true) dropdownData.isOptional = true;

		// Options
		dropdownData.options = Array.isArray(dropdownObj.options) && dropdownObj.options.length
			? dropdownObj.options
			: [];

		// Info Icon
		if (dropdownObj.infoIcon && Object.keys(dropdownObj.infoIcon).length > 0) {
			dropdownData.infoIcon = {
				id: "infoId",
				value: "tooltip content............",
				placement: dropdownObj.infoIcon.placement || "top"
			};
		}

		// Searchable and dropLabel
		if (dropdownObj.isSearchable !== undefined) dropdownData.isSearchable = dropdownObj.isSearchable;
		if (dropdownObj.dropLabel) dropdownData.dropLabel = dropdownObj.dropLabel;

		// Icon
		if (dropdownObj.icon && dropdownObj.icon.name) {
			dropdownData.icon = {
				name: dropdownObj.icon.name,
				class: dropdownObj.icon.class || ""
			};
		}

		// Create New Button
		if (
			dropdownObj.createNewBtn &&
			dropdownObj.createNewBtn.label &&
			dropdownObj.createNewBtn.callback &&
			dropdownObj.createNewBtn.callback.name
		) {
			dropdownData.createNewBtn = {
				label: dropdownObj.createNewBtn.label,
				callback: {
					name: dropdownObj.createNewBtn.callback.name,
					arguments: dropdownObj.createNewBtn.callback.arguments || ""
				}
			};
		}

		let js_code = `
		self: prop('object', { default: this }),      
		dropdownObj: prop("object", {
			default: ${JSON.stringify(dropdownData, null, 4)}
		})
		`;

		let html_code = `
		<zcat-dropdown
			self="{{self}}"       
			zcat-prop="{{dropdownObj}}"
		></zcat-dropdown>
		`;
		
		this.setData('htmlCodeSnippet.code', html_code)
		this.setData('jsCodeSnippet.code', js_code)
	}

	data() {
		return {
			// x = {
			// 	naem : "",
			// 	age : "",
			// 	location : {
			// 		"district" : ""
			// 	}
			// };
			// x.location.district = "B";
			// objectUtils

			// profile: new Record("SchemaName", recordObj),
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
			profile: {
				name: "",
				age: ""
			},
			compHead: prop("string", { default: "Dropdown" }),
			compDesc: prop("string", {
				default:
				"Dropdown description......"
			}),
			headTab: prop("array", {
				default: [
				{
					name: "Customize",
					id: "custom"
				},
				{
					name: "Change Logs",
					id: "change_logs"
				}
				]
			}),
			// userTravelFormObj: prop('object', { default: {
			// 	'keyyy': 'india'
			// }}),
			
			customDetailsHide: prop("boolean", { default: true }),
			self: prop("object", { default: this }),			
			dropdownObj: prop("object", { 
				default: {
					"wrapperclass": "jjjjj", 
					"id": "dropdown-id",
					"size": "",
					"variant": "",        // secondary
					"dropdown_type": "",   // multiple, checkbox 
					"placeholder": "Select Option",
					"label": "Label",
					"selected": "india",
					"key": "keyyy",
					"options": [
						{
							"name": "India",
							"value": "india"
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat"
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						}
					],
					"width": "zcat-w200"				
				} 
			}),
			// multiple 
			// dropdownObj: prop("object", { 
			// 	default: {
			// 		"id": "dropdown-id",
			// 		"size": "",
			// 		"variant": "",        // secondary
			// 		"position": "",
			// 		"dropdown_type": "multiple",   // multiple, ___ 
			// 		"placeholder": "Select Option",
			// 		"label": "Label",
    		// 		"userValueKey": "name",          // <-- new key
    		// 		"systemValueKey": "value",
			// 		"showCount" : "true",
			// 		"options": [
			// 			{
			// 				"name": "India",
			// 				"value": "india" 
			// 			},
			// 			{
			// 				"name": "Pakistan",
			// 				"value": "pakistan" 
			// 			},
			// 			{
			// 				"name": "Gujarat",
			// 				"value": "gujarat" 
			// 			},
			// 			{
			// 				"name": "Mumbai",
			// 				"value": "mumbai" 
			// 			},
			// 			{
			// 				"name": "Jammu",
			// 				"value": "jammu" 
			// 			},
			// 			{
			// 				"name": "Delhi",
			// 				"value": "delhi" 
			// 			}
			// 		],
			// 		"width": "zcat-w200",
			// 		"height": "true/"
					
			// 	} 
			// }),

			// checkbox normal 
			// dropdownObj: prop("object", { 
			// 	default: {
			// 		"id": "dropdown-id",
			// 		"size": "",
			// 		"variant": "",        // secondary
			// 		"position": "",
			// 		"dropdown_type": "checkbox",   // multiple, ___ 
			// 		"placeholder": "Select Option",
			// 		"label": "Label",
    		// 		"userValueKey": "name",          // <-- new key
    		// 		"systemValueKey": "value",
			// 		"options": [
			// 			{
			// 				"name": "India",
			// 				"value": "india" 
			// 			},
			// 			{
			// 				"name": "Pakistan",
			// 				"value": "pakistan" 
			// 			},
			// 			{
			// 				"name": "Gujarat",
			// 				"value": "gujarat" 
			// 			},
			// 			{
			// 				"name": "Mumbai",
			// 				"value": "mumbai" 
			// 			},
			// 			{
			// 				"name": "Jammu",
			// 				"value": "jammu" 
			// 			},
			// 			{
			// 				"name": "Delhi",
			// 				"value": "delhi" 
			// 			}
			// 		],
			// 		"width": "zcat-w200"
					
			// 	} 
			// }),

			// checkbox with chips 
			// dropdownObj: prop("object", { 
			// 	default: {
			// 		"id": "dropdown-id",
			// 		"size": "",
			// 		"variant": "",        // secondary
			// 		"position": "",
			// 		"dropdown_type": "checkbox",   // multiple, ___ 
			// 		"placeholder": "Select Option",
			// 		"label": "Label",
    		// 		"userValueKey": "name",          // <-- new key
    		// 		"systemValueKey": "value",
			// 		"checkboxChips": "true",
			// 		"options": [
			// 			{
			// 				"name": "India",
			// 				"value": "india" 
			// 			},
			// 			{
			// 				"name": "Pakistan",
			// 				"value": "pakistan" 
			// 			},
			// 			{
			// 				"name": "Gujarat",
			// 				"value": "gujarat" 
			// 			},
			// 			{
			// 				"name": "Mumbai",
			// 				"value": "mumbai" 
			// 			},
			// 			{
			// 				"name": "Jammu",
			// 				"value": "jammu" 
			// 			},
			// 			{
			// 				"name": "Delhi",
			// 				"value": "delhi" 
			// 			}
			// 		],
			// 		"width": "zcat-w200/"
					
			// 	} 
			// }),

			// dropdown with heading 
			// dropdownObj: prop("object", { 
			// 	default: {
			// 		"id": "dropdown-id",
			// 		"size": "",
			// 		"variant": "",        // secondary
			// 		"position": "",
			// 		"dropdown_type": "heading",   // multiple, ___ 
			// 		"placeholder": "Select Option",
			// 		"label": "Label",
    		// 		"userValueKey": "name",          // <-- new key
    		// 		"systemValueKey": "value",				

			// 		"options": [ {
			// 			'Europe': [ {
			// 				'name': 'Germany',
			// 				'value': 'de'
			// 			}, {
			// 				'name': 'France',
			// 				'value': 'fr'
			// 			}, {
			// 				'name': 'Spain',
			// 				'value': 'es'
			// 			} ]
			// 		}, {
			// 			'Asia': [ {
			// 				'name': 'India',
			// 				'value': 'in'
			// 			}, {
			// 				'name': 'Singapore',
			// 				'value': 'sg'
			// 			}, {
			// 				'name': 'Japan',
			// 				'value': 'jp'
			// 			} ]
			// 		} ],

			// 		"width": "zcat-w200"
					
			// 	} 
			// }),

			jsCode: prop('string', { default: '' }),
			htmlCode: prop('string', { default: '' }),
			resetButtonObj: prop('object', {
				default:
				{
				  "label": "Reset",
				  "variant": "grey",
				  "color": "grey",
				  "size": "small",
				  "callback": {
					"name": "resetDropdownCustomization"
				  }
				}
			}),
			selectedSize: prop('string', {default: 'default'}),
			labelInitialState: prop('boolean', {default: false}), 
			labelInfoIconInitialState: prop('boolean', {default: false}),
			iconLeftInitialState: prop('boolean', {default: false}),
			isOptionalEnabled: prop('boolean', {default: false}),
			showErrorSwitchDisable: prop('boolean', {default: false}),
			selectedVariant: prop('string', {default: 'default'}),
			selectedTooltipPlacement: prop('string', {default: ''}),
			selectedInitialState: prop('string', {default: 'default'}),
			showErrorInitialState: prop('boolean', {default: false}),
			iconItemInMenuInitialState: prop('boolean', {default: false}),
			selectedWidth: prop('string', {default: '200px'}),
			toRerenderComp: prop('boolean', {default: true}),
			labelSwitchDisable: prop('boolean', {default: false}),
			labelInfoSwitchDisable: prop('boolean', {default: false}),
			isMultipleEnabled: prop('boolean', {default: false}),
			selectedMultipleType: prop('string', {default: 'default'}),
			optionalSwitchDisable: prop('boolean', {default: false}),
			optionalAlreadyCalled: prop('boolean', {default: false}),
			isLabelEnabled: prop('boolean', {default: false}) ,
			selectedMenuListOpt: prop('string', {default: 'checkbox'}),
			disabledMenuListOptForMultiDefault: prop('array', {default: []}),
			disabledMultipleTypeForMenuList: prop('array', {default: []}),
			disabledOptionForShowError: prop('array', {default: []})

			
		}	
	}

	setDropdownIconSize(){
		let inputIconClass;
		if(this.getData('dropdownObj').size === 'small' || this.getData('dropdownObj').size === 'extra-small'){
			inputIconClass = "zcat-w14 zcat-h14 zcat-stroke-icon-active"
		  	return inputIconClass;
		}
		else{    // default
			inputIconClass = "zcat-w16 zcat-h16 zcat-stroke-icon-active"
		  	return inputIconClass; 
		}		
	}

	static methods() {
		return {
			copyToSnippet(codeSnippet){
				document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
			},
			changeDropdownVariant(event, type){    
				this.setData('toRerenderComp', false);
				this.setData('selectedVariant', type);  
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", type);
				let inputObj = this.getData('dropdownObj'), updatedObj, dropdownData;
				if(this.getData('iconItemInMenuInitialState')){    // with icon in menulist
					dropdownData = [
						{
							"name": "India",
							"value": "india",
							"icon": {
								"name": "edit",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" ,
							"icon": {
								"name": "copy",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" ,
							"icon": {
								"name": "delete",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Mumbai",
							"value": "mumbai",
							"icon": {
								"name": "minus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}  
						},
						{
							"name": "Jammu",
							"value": "jammu",
							"icon": {
								"name": "plus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}   
						}
						//, {
						// 	"name": "Delhi",
						// 	"value": "delhi" 
						// }
					]
				}
				else{
					dropdownData = [
						{
							"name": "India",
							"value": "india" 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" 
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						},
						{
							"name": "Jammu",
							"value": "jammu" 
						},
						{
							"name": "Delhi",
							"value": "delhi" 
						}
					];
				}				
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);

				if(type=== 'multiple'){
					updatedObj = { ...inputObj, selected: [] };
				}
				else if(type=== 'ghost'){
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else{               // nrml - default- single dropdown
					updatedObj = { ...inputObj, selected: '' };
				}
				this.setData('dropdownObj', updatedObj);

				if(type === 'multiple'){
					this.setData('isMultipleEnabled', true);  // default, chips && default & checkbox dropdowns will open
					if(this.getData('selectedMultipleType') === 'chip'){
						this.setData('disabledMenuListOptForMultiDefault', []); 
						if(this.getData('selectedMenuListOpt') === 'checkbox'){
							this.setData('selectedMenuListOpt', 'checkbox');
							this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
							this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", true);
						}
						else{  // default
							this.setData('selectedMenuListOpt', 'default');
							this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'multiple'); 
							this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
						}
					}
					else{ // default
						this.setData('selectedMenuListOpt', 'checkbox');   
						this.setData('disabledMenuListOptForMultiDefault', ['default']); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
					}					
					// to remove ghost dropdown related things
					this.setData('selectedWidth', '200px'); 
						this.setData('disabledWidthForVariant', []); 
						this.setData('labelSwitchDisable', false);
						this.setData('labelInfoSwitchDisable', false);
						this.setData('showErrorSwitchDisable', false);
						this.setData('optionalSwitchDisable', false);
						this.setData('labelInitialState', true);
						this.setData('isLabelEnabled', true);
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");						
						this.getData('labelInitialState') 
							? this.$app.objectUtils(this.getData('dropdownObj'), 'add', "label", 'Label') 
							: this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "label");
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', 'variant');
						this.setData('disabledOptionForShowError', []);
				}
				else if(type=== 'ghost'){
					this.setData('isMultipleEnabled', false);
					this.setData('selectedMultipleType', 'default');
					this.setData('disabledMenuListOptForMultiDefault', ['default']); 
					this.setData('selectedMenuListOpt', 'checkbox');
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropdown_type"); 
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");
					// to remove ghost dropdown related things
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', 'checkboxChips', false);
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropdown_type");
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', 'variant', type);
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "optional");
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "label");
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "infoIcon");
						this.setData('selectedWidth', 'fit-content');
          				this.setData('disabledWidthForVariant', ['200px']); 							
						this.setData('labelInitialState', false);
						this.setData('labelInfoIconInitialState', false);
						this.setData('labelSwitchDisable', true);
						this.setData('labelInfoSwitchDisable', true);
						this.setData('showErrorSwitchDisable', true);
						this.setData('optionalSwitchDisable', true);
						this.setData('isOptionalEnabled', false);
						this.setData('isTooltipPlacementEnabled', false);
						this.setData('isLabelEnabled', false);  
						this.setData('labelInfoIconInitialState', false);
						this.setData('showErrorInitialState', false);
						this.setData('disabledOptionForShowError', ['error']);
				}
				else{               // nrml - default- single dropdown
					this.setData('isMultipleEnabled', false);
					this.setData('selectedMultipleType', 'default');
					this.setData('disabledMenuListOptForMultiDefault', ['default']); 
					this.setData('selectedMenuListOpt', 'checkbox');
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropdown_type"); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);

					// to remove ghost dropdown related things
					this.setData('selectedWidth', '200px'); 
						this.setData('disabledWidthForVariant', []); 
						this.setData('labelSwitchDisable', false);
						this.setData('labelInfoSwitchDisable', false);
						this.setData('showErrorSwitchDisable', false);
						this.setData('optionalSwitchDisable', false);
						this.setData('labelInitialState', true);
						this.setData('isLabelEnabled', true);
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', 'variant'); 
					this.getData('labelInitialState') 
						? this.$app.objectUtils(this.getData('dropdownObj'), 'add', "label", 'Label') 
						: this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "label");
					this.getData('showErrorInitialState') 
						? this.$app.objectUtils(this.getData('dropdownObj'), 'add', "errorMessage", 'Error message') 
						: this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");
					this.setData('disabledOptionForShowError', []);
				}
				this.constructCodeSnippet();  
				this.setData('toRerenderComp', true);
			},
			changeMultipleDropdownType(event, type){   // new --> type=default/chip     //multiple = default, checkbox, chipCheckbox 
				this.setData('toRerenderComp', false);
				this.setData('selectedMultipleType', type);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", type);
				let inputObj = this.getData('dropdownObj'), updatedObj, dropdownData;
				if(this.getData('iconItemInMenuInitialState')){    // with icon in menulist
					dropdownData = [
						{
							"name": "India",
							"value": "india",
							"icon": {
								"name": "edit",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" ,
							"icon": {
								"name": "copy",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" ,
							"icon": {
								"name": "delete",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Mumbai",
							"value": "mumbai",
							"icon": {
								"name": "minus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}  
						},
						{
							"name": "Jammu",
							"value": "jammu",
							"icon": {
								"name": "plus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}   
						}
						//, {
						// 	"name": "Delhi",
						// 	"value": "delhi" 
						// }
					]
				}
				else{
					dropdownData = [
						{
							"name": "India",
							"value": "india" 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" 
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						},
						{
							"name": "Jammu",
							"value": "jammu" 
						},
						{
							"name": "Delhi",
							"value": "delhi" 
						}
					];
				}
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);
				
				if(type === 'chip'){
					this.setData('disabledMenuListOptForMultiDefault', []); 
					if(this.getData('selectedMenuListOpt') === 'checkbox'){
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", true);							
					}
					else{   // default
						this.setData('selectedMenuListOpt', 'default');
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'multiple'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);	
					}
				}
				else{  // default
					this.setData('selectedMenuListOpt', 'checkbox'); 
					this.setData('disabledMenuListOptForMultiDefault', ['default']); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
				}

				if(type=== 'multiple'){
					updatedObj = { ...inputObj, selected: [] };
				}
				else if(type=== 'ghost'){
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else{               // nrml - default- single dropdown
					updatedObj = { ...inputObj, selected: '' };
				}
				this.setData('dropdownObj', updatedObj);
				this.constructCodeSnippet();  				
				this.setData('toRerenderComp', true);
			},
			setMultipleDropdownMenuList(event, menuOptType){
				this.setData('toRerenderComp', false);
				this.setData('selectedMenuListOpt', menuOptType);
				this.setData('disabledMultipleTypeForMenuList', []);				
				let inputObj = this.getData('dropdownObj'), updatedObj, dropdownData;
				if(this.getData('iconItemInMenuInitialState')){    // with icon in menulist
					dropdownData = [
						{
							"name": "India",
							"value": "india",
							"icon": {
								"name": "edit",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" ,
							"icon": {
								"name": "copy",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" ,
							"icon": {
								"name": "delete",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Mumbai",
							"value": "mumbai",
							"icon": {
								"name": "minus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}  
						},
						{
							"name": "Jammu",
							"value": "jammu",
							"icon": {
								"name": "plus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}   
						}
					]
				}
				else{
					dropdownData = [
						{
							"name": "India",
							"value": "india" 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" 
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						},
						{
							"name": "Jammu",
							"value": "jammu" 
						},
						{
							"name": "Delhi",
							"value": "delhi" 
						}
					];
				}
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);
						
				if(menuOptType === 'checkbox'){
					if(this.getData('selectedMultipleType') === 'chip'){
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", true);
					}
					else{   // default
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'checkbox'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
					}
				}
				else{  // default
					this.setData('selectedMultipleType', 'chip');   
					this.setData('disabledMultipleTypeForMenuList', ['default']);
					if(this.getData('selectedMultipleType') === 'chip'){
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", 'multiple'); 
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
					}
				}
				if(this.getData('dropdownObj').dropdown_type === 'multiple'){
					updatedObj = { ...inputObj, selected: [] };
				}
				else if(this.getData('dropdownObj').variant === 'ghost'){
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else if(this.getData('dropdownObj').variant != 'ghost' && this.getData('dropdownObj').dropdown_type != 'multiple'){               // nrml - default- single dropdown
					updatedObj = { ...inputObj, selected: '' };
				}
				else{}
				this.setData('dropdownObj', updatedObj);

				this.constructCodeSnippet();				
				this.setData('toRerenderComp', true);
			},
			changeDropdownSize(event, size){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "size", size);
				let inputIconClass;
				inputIconClass = this.setDropdownIconSize();
				if(this.getData('dropdownObj').icon !== null && this.getData('dropdownObj').icon !== undefined){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon.class", inputIconClass);
				}				
				this.constructCodeSnippet();
				this.setData('selectedSize', size);
				this.setData('toRerenderComp', true);
			},
			labelChecked(){    
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "label", "Label");
				this.constructCodeSnippet();
				this.setData('labelInitialState', true);
				this.setData('isLabelEnabled', true);
			},
			labelUnchecked(){    
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "label");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "infoIcon");
				this.constructCodeSnippet();
				this.setData('labelInitialState', false); 
				this.setData('isTooltipPlacementEnabled', false);
				this.setData('isLabelEnabled', false);  
				this.setData('labelInfoIconInitialState', false);
			},
			labelInfoChecked(){    
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "label", "Label");
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "infoIcon", {
					"id": "infoId",
					"value": "The tooltip"
				});
				this.setData('isTooltipPlacementEnabled', true);
				this.constructCodeSnippet();
				this.setData('labelInfoIconInitialState', true);  
				this.setData('isTooltipPlacementEnabled', true);
			},
			labelInfoUnchecked(){    
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "infoIcon");
				this.setData('isTooltipPlacementEnabled', false);
				this.constructCodeSnippet();
				this.setData('labelInfoIconInitialState', false); 
			},
			changeTooltipPlacement(event, placement){   
				if(placement === 'auto'){
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "infoIcon.placement");
				}
				else{
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "infoIcon.placement", placement);
				}
				this.constructCodeSnippet();
				this.setData('selectedTooltipPlacement', placement); 
			},
			optionalChecked(){    
				this.setData('toRerenderComp', false);
				if(this.getData('optionalAlreadyCalled')) return;
				this.setData('optionalAlreadyCalled', true);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "isOptional", true);
				this.setData('isOptionalEnabled', true);  
				this.constructCodeSnippet();
				this.setData('toRerenderComp', true);
			},
			optionalUnchecked(){    
				this.setData('toRerenderComp', false);
				this.setData('optionalAlreadyCalled', false);				
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "isOptional", false);
				this.setData('isOptionalEnabled', false);  
				this.constructCodeSnippet();
				this.setData('toRerenderComp', true);
			},
			changeInputState(event, state){    
				if(state === 'disabled'){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "disabled", true);
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");
				}
				else if(state === 'error'){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "errorMessage", "Error message");
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "disabled");
				}
				else{  // default
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "disabled");
					this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");
				}
				this.constructCodeSnippet();
				this.setData('selectedInitialState', state);    
			},
			iconLeftChecked(){    
				this.setData('toRerenderComp', false);
				this.setData('isIconLeftEnabled', true)
				let inputIconClass;
				inputIconClass = this.setDropdownIconSize()
				if(this.getData('dropdownObj').icon !== null && this.getData('dropdownObj').icon !== undefined){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon.class", inputIconClass);
				}
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon", {
				"position": "left",
				"name":  this.getData('dropdownObj')?.icon?.name ?? 'plus',
				"class": inputIconClass
				}) 

				if(this.getData('selectedVariant') === 'ghost'){
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', 'checkboxChips', false);
						this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropdown_type");
						this.$app.objectUtils(this.getData('dropdownObj'), 'add', 'variant', 'ghost');
						this.setData('selectedWidth', 'fit-content');
          				this.setData('disabledWidthForVariant', ['200px']); 
				}
				this.constructCodeSnippet();  
				this.setData('iconLeftInitialState', true);    
				this.setData('toRerenderComp', true);
			},
			iconLeftUnchecked(){    
				this.setData('toRerenderComp', false);
				this.setData('isIconLeftEnabled', false)
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon", null);
				this.constructCodeSnippet(); 
				this.setData('iconLeftInitialState', false);    
				this.setData('toRerenderComp', true);
			},
			selectDropdownIcon(event, iconName){    
				this.setData('toRerenderComp', false);
				let inputIconClass;
				inputIconClass = this.setDropdownIconSize();
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon.name", iconName);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "icon.class", inputIconClass);
				this.constructCodeSnippet();   
				this.setData('toRerenderComp', true);				
			},	
			changeDropdownWidth(event, width){    
				this.setData('toRerenderComp', false);
				if(width === '200px'){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "width", "zcat-w200");
				}
				else if(width === 'fit-content'){
					this.$app.objectUtils(this.getData('dropdownObj'), 'add', "width", "zcat-w-fc");
				}
				else{}    
				this.constructCodeSnippet();   
				this.setData('toRerenderComp', true);
			},		
			headerInMenuChecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropLabel", "Dropdown header");
				this.constructCodeSnippet(); 
				this.setData('headerInMenuInitialState', true);    
				this.setData('toRerenderComp', true);
			},
			headerInMenuUnchecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropLabel");
				this.constructCodeSnippet(); 
				this.setData('headerInMenuInitialState', false);    
				this.setData('toRerenderComp', true);
			},	
			searchInMenuChecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "isSearchable", true);
				this.constructCodeSnippet(); 
				this.setData('searchInMenuInitialState', true);    
				this.setData('toRerenderComp', true);
			},
			searchInMenuUnchecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "isSearchable", false);
				this.constructCodeSnippet(); 
				this.setData('searchInMenuInitialState', false);    
				this.setData('toRerenderComp', true);
			},
			createNewInMenuChecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "createNewBtn", {
						"label": "Create New",
						"callback": {
							"name": "dropdownCreateBtnClicked"
						}
					});
				this.constructCodeSnippet(); 
				this.setData('createNewInMenuInitialState', true);    
				this.setData('toRerenderComp', true);
			},
			createNewInMenuUnchecked(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "createNewBtn");
				this.constructCodeSnippet(); 
				this.setData('createNewInMenuInitialState', false);    
				this.setData('toRerenderComp', true);
			},
			dropdownCreateBtnClicked(){
				alert("Test function created");
			},
			iconItemInMenuChecked(){    
				this.setData('toRerenderComp', false);
				this.setData('iconItemInMenuInitialState', true);

				let dropdownData = [
						{
							"name": "India",
							"value": "india",
							"icon": {
								"name": "edit",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" ,
							"icon": {
								"name": "copy",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" ,
							"icon": {
								"name": "delete",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							} 
						},
						{
							"name": "Mumbai",
							"value": "mumbai",
							"icon": {
								"name": "minus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}  
						},
						{
							"name": "Jammu",
							"value": "jammu" ,
							"icon": {
								"name": "plus",
								"class": "zcat-w16 zcat-h16 zcat-stroke-icon-active"
							}
						}
				]
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);

				this.setData('iconLeftInitialState', false);
				this.setData('isIconLeftEnabled', false); 

				let inputObj = this.getData('dropdownObj'), updatedObj;
				if(this.getData('dropdownObj').type === 'multiple' || this.getData('dropdownObj').dropdown_type === 'checkbox' || this.getData('dropdownObj').dropdown_type === 'chipCheckbox' ){
					updatedObj = { ...inputObj, selected: [] };
				}
				else if(this.getData('dropdownObj').variant === 'ghost'){
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else{
					updatedObj = { ...inputObj, selected: '' };
				}
				this.setData('dropdownObj', updatedObj);
				this.constructCodeSnippet();   
				this.setData('toRerenderComp', true);
			},
			iconItemInMenuUnchecked(){    
				this.setData('toRerenderComp', false);
				this.setData('iconItemInMenuInitialState', false); 
				let dropdownData = [
						{
							"name": "India",
							"value": "india" 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" 
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						},
						{
							"name": "Jammu",
							"value": "jammu" 
						},
						{
							"name": "Delhi",
							"value": "delhi" 
						}
				];
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);   
				let inputObj = this.getData('dropdownObj'), updatedObj;
				if(this.getData('dropdownObj').type === 'multiple' || this.getData('dropdownObj').dropdown_type === 'checkbox' || this.getData('dropdownObj').dropdown_type === 'chipCheckbox' ){
					updatedObj = { ...inputObj, selected: [] };
				}
				else if(this.getData('dropdownObj').variant=== 'ghost'){
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else{
					updatedObj = { ...inputObj, selected: '' };
				} 
				this.setData('dropdownObj', updatedObj);  
				this.constructCodeSnippet();    
				this.setData('toRerenderComp', true);
			},
			resetDropdownCustomization(){    
				this.setData('toRerenderComp', false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "variant");				
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "dropdown_type", '');
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "checkboxChips", false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "size", 'default');
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "label", "Label");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "infoIcon");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "icon");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "errorMessage");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "disabled"); 
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "width", "zcat-w200");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "dropLabel");
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "isSearchable", false);
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', "createNewBtn");
				this.$app.objectUtils(this.getData('dropdownObj'), 'delete', 'isOptional');

				let dropdownData = [
						{
							"name": "India",
							"value": "india" 
						},
						{
							"name": "Pakistan",
							"value": "pakistan" 
						},
						{
							"name": "Gujarat",
							"value": "gujarat" 
						},
						{
							"name": "Mumbai",
							"value": "mumbai" 
						},
						{
							"name": "Jammu",
							"value": "jammu" 
						},
						{
							"name": "Delhi",
							"value": "delhi" 
						}
				];
				this.$app.objectUtils(this.getData('dropdownObj'), 'add', "options", dropdownData);    
				let dropdownObj = this.getData('dropdownObj'), updatedObj;
				if(this.getData('dropdownObj').type === 'multiple' || this.getData('dropdownObj').dropdown_type === 'checkbox' || this.getData('dropdownObj').dropdown_type === 'chipCheckbox' ){
					updatedObj = { ...dropdownObj, selected: [] };
				}
				else if(this.getData('dropdownObj').variant === 'ghost'){
					this.setData('isMultipleEnabled', false);
					updatedObj = { ...inputObj, selected: 'india'};
				}
				else{
					updatedObj = { ...dropdownObj, selected: '' };
				}
				this.setData('dropdownObj', updatedObj);
				setTimeout(() => {	
					this.setData('selectedVariant', 'default');
					this.setData('selectedMultipleType', 'default');
					this.setData('selectedMenuListOpt', 'checkbox');
					this.setData('selectedSize', 'default');
					this.setData('labelInitialState', true);
					this.setData('labelInfoIconInitialState', false);
					this.setData('selectedTooltipPlacement', 'auto');
					this.setData('iconLeftInitialState', false);
					this.setData('isOptionalEnabled', false);
					this.setData('showErrorInitialState', false);
					this.setData('selectedInitialState', 'default');
					this.setData('selectedWidth', 'zcat-w200');
					this.setData('headerInMenuInitialState', false);
					this.setData('searchInMenuInitialState', false);
					this.setData('createNewInMenuInitialState', false);
					this.setData('iconItemInMenuInitialState', false);
					this.setData('isMultipleEnabled', false);
					this.setData('labelSwitchDisable', false);
					this.setData('labelInfoSwitchDisable', false);
					this.setData('optionalSwitchDisable', false);
					this.setData('showErrorSwitchDisable', false);	
					this.setData('disabledWidthForVariant', []);
					this.setData('selectedWidth', '200px');
				  }, 0); 								  
				this.constructCodeSnippet();
				this.setData('toRerenderComp', true);
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

export {DropdownComp}; 

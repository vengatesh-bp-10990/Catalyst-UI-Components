import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatProfileMenu extends Component {
	constructor() {
		super();
	}

	init() {
		//set initial theme value
		const theme = this.getData('zcatProp.theme');
		this.setData("lightModeCardDetails.selected", theme);
	}

	data() {
		return {
			self: prop("object", {default: this }),
     		zcatProp: prop('object'),
			darwerBtnStyles: prop('object', {default: {"label": "Open Drawer",
			"variant": "fill",
			"size": "default",
			"disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
			"loading": false, "color": "primary",
			"type": "",
			"icon": {}, "menu": {}, "callback": {"name": "drawerAction"}}}),
			signoutBtnStyles: prop('object', {default: {"label": "Sign Out",
			"variant": "ghost",
			"size": "default",
			"disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
			"loading": false, "color": "danger",
			"type": "",
			"icon": {"position": "left",
			"name": "zcat-icon-logout",
			"class": "zcat-w16 zcat-h16 zcat-stroke-ghost-dangerbtn-icon"}, "menu": {}, "callback": {"name": ""}}}),
			profileMenulinkButtonObj: prop('object', {default: {"label": "My Account",
			"size": "default",
			"disabled": undefined, "icon": {}, "route": "https://www.google.com"}}),
			DocsLinkButtonObj: prop('object', {default: {"label": "Documentation",
			"size": "default",
			"disabled": undefined, "icon": {"position": "left",
			"name": "docs"}, "route": "https://docs.catalyst.zoho.com/en/"}}),
			contSuplinkButtonObj: prop('object', {default: {"label": "Contact Support",
			"size": "default",
			"disabled": undefined, "icon": {"position": "left",
			"name": "contact"}, "route": "mailto:support@zohocatalyst.com"}}),
			dropdownObj: prop("object", {default: {"id": "dropdown-id",
			"placeholder": "Select default Org",
			"size": "small",
			"width": "zcat-w200",
			"variant": "ghost",
			"selected": "india",
			"options": [{"name": "India",
			"value": "india"}, {"name": "Pakistan",
			"value": "pakistan"}, {"name": "Gujarat",
			"value": "gujarat"}, {"name": "Mumbai",
			"value": "mumbai"}, {"name": "Jammu",
			"value": "jammu"}, {"name": "Delhi",
			"value": "delhi"}]}}),
			lightModeCardDetails: prop('object', {
			default: {
				size: 'primary',
				class: 'zcat-profile-theme-card',
				variant: 'single_sel',
				name: 'radiobutton_1',
				selected: '',
				list: [
				{ label: 'Radio Button', value: 'light_mode', yield: 'light_mode_content', disabled: false },
				{ label: 'Radio Button', value: 'dark_mode', yield: 'dark_mode_content', disabled: false },
				{ label: 'Radio Button', value: 'auto_mode', yield: 'auto_mode_content', disabled: false }
				]
			}
			})
		}	
	}

	static methods() {
		return {
			async customLbindForRadioButton(methodName, value) {
				const self = this.getData('self');
				if (value) {
					const prop = this.getData('zcatProp');
					this.$addon.objectUtils(prop, 'add', 'selected', value);
					if (prop.key) {
					self.setData(prop.key, value);
					}
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 2)
				  );
				}
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

export {ZcatProfileMenu}; 

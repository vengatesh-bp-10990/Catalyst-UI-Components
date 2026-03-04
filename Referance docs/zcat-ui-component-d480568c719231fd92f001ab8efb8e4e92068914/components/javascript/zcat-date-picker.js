import {Component} from "@slyte/component";
import { prop } from '@slyte/core';
import "@zoho/lyte-ui-component/I18n/en_US"

class ZcatDatePicker extends Component {
	constructor() {
		super();
	}

	init(){
		// Get today's date
		const today = new Date();

		// Format as DD/MM/YYYY
		const formatDate = (date) => {
		const dd = String(date.getDate()).padStart(2, '0');
		const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
		const yyyy = date.getFullYear();
		return `${dd}/${mm}/${yyyy}`;
		};

		// Min Date = today
		const minDate = formatDate(today);

		// Max Date = last day of December (current year)
		const lastDayOfDec = new Date(today.getFullYear(), 11, 31);
		const maxDate = formatDate(lastDayOfDec);

		// Assign to your component data (zcatProp or directly)
		this.setData('zcatProp.min_date', minDate);
	}

	data() {
		return {
			self: prop("object", {default: this }),
     		zcatProp: prop('object'),
			key: prop('string'),
      		formData: prop('object', { watch: true })
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
		async function zcatPropToUserObj() {
		debugger
		const zcatProp=this.getData('zcatProp');
		const formData=this.getData('formData');
		const key = this.getData('key');
		this.setData('formData.'+key, zcatProp.value)
		}
		async function userObjToZcatProp() {
		debugger
		const zcatProp=this.getData('zcatProp');
		const formData=this.getData('formData');
		const key = this.getData('key');
		this.$addon.objectUtils(zcatProp, 'add', 'value', formData[key])    
		}
		return {
		userObjToZcatProp: userObjToZcatProp.observes('formData.*'), // No I18N
		zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.value') // No I18N
		};
	}

}

export {ZcatDatePicker}; 

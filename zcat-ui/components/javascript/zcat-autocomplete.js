import { Component } from '../component.js';
import { prop } from '@slyte/core';
class ZcatAutocomplete extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			self: prop("object", {default: this }),
     		zcatProp: prop("object", { watch: true }),
      		featureObj: prop("object", { watch: true }),
			errorMessage: prop("string")
			// autocompleteUserInput: prop('string', { default: '' }),
			// key: prop('string'),
      		// formData: prop('object', { watch: true })
		}	
	}

	static methods() {
		return {
			defaultOnValueChange(event, lyteElement, b, c) {
				if (this.getMethods("onSelect")) {
				this.executeMethod("onSelect", event, lyteElement);
				}
			},
			defaultOnSearch(results, param2, param3) {
				if (this.getMethods('onSearch')) {
					this.executeMethod('onSearch', results, param2, param3);
				}
			}
		}
	}

	static actions() {
		return {
			// createNew() {
			// 	//console.log(this.getData('autocompleteUserInput'));
			// }
		}
	}

	static observers() {
    async function errorMessage() {
      const errorMessage = this.getData("errorMessage");
      this.setData("zcatProp.errorMessage", errorMessage);
    }

    return {
      errorMessage: errorMessage.observes("errorMessage") 
    };
  }

}

export {ZcatAutocomplete}; 

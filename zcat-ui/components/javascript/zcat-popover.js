import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatPopover extends Component {
	constructor() {
		super();
	}

	data() {
		return {
      		self: prop('object'),
			zcatProp: prop('object', { default : {}}),
			errorProp: prop('object', { watch: true }),
			searchResultsFound: prop('boolean', { default: true })
		};
	}

	static methods() {
		return {
			async onDropdownSearch(methodName, results) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');

				if (results.length == 0) {
				this.setData('searchResultsFound', false);
				} else {
				this.setData('searchResultsFound', true);
				}

				if (methodName) {
				await self.executeMethod(
					methodName,
					prop,
					...Array.prototype.slice.call(arguments, 1)
				);
				}
			},
			onDefaultClose(id, a, b, c){
				const el = document.getElementById(id);
				const container =
					el?.closest('lyte-popover-content') ||
					el?.closest('.lyte-popover-wrapper, .lyte-popover-wrapper-1') ||
					document;

				const items = container.querySelectorAll('lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.removeAttribute('selected');              
					item.classList.remove('lyteDropdownSelection');
				});

				if (this.getMethods('onClose')) {
					this.executeMethod('onClose', a, b, c);
				}
			} 
			,defaultOnShow(a, b, c){
				if (this.getMethods('onShow')) {
				this.executeMethod('onShow', a, b, c);
				}				
			}
			
		}
	}

	static actions() {
		return {
			setHoverClass(id) {
				let el = document.getElementById(id);
				if(el) {
					el.classList.add("lyteDropdownSelection");
				}
			},
			removeHoverClass(id) {
				let el = document.getElementById(id);
				if(el) {
					el.classList.remove("lyteDropdownSelection");
				}
			},
			async handleDropItemClickkkk(id, value, methodName) {
				const items = document.querySelectorAll('.lyte-popover-wrapper lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.setAttribute('selected', 'false');
					item.classList.remove("lyteDropdownSelection");
				});

				let el = document.getElementById(id);
				if (el) {
					el.setAttribute('aria-selected', 'true');
					el.setAttribute('selected', 'true');
					el.classList.add("lyteDropdownSelection");
				}

				const self = this.getData('self');
        		const prop = this.getData('zcatProp');

				if (methodName) {
					await self.executeMethod(
						methodName,
						...Array.prototype.slice.call(arguments, 1)
					);
				}


			},
			async handleDropItemClick(id, value, methodName) {
				const el = document.getElementById(id);
				const container =
					el?.closest('lyte-popover-content') ||
					el?.closest('.lyte-popover-wrapper, .lyte-popover-wrapper-1') ||
					document;

				const items = container.querySelectorAll('lyte-popover-item');
				items.forEach(item => {
					item.setAttribute('aria-selected', 'false');
					item.removeAttribute('selected');              
					item.classList.remove('lyteDropdownSelection');
				});

				if (el) {
					el.setAttribute('aria-selected', 'true');
					el.setAttribute('selected', 'true');
					el.classList.add('lyteDropdownSelection');
				}

				const self = this.getData('self');
				if (methodName) {
					await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1) 
					);
				}
			}


			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ZcatPopover}; 

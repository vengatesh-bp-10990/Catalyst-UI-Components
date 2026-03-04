import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

document.addEventListener('click', (e) => {    
    //     e.target.closest('.exe-history-dropdown') ||
    //     e.target.closest('#zcat-daterangepicker-wrapper') ||
    //     e.target.closest('#showButton') ||
    //     e.target.closest('lyte-popover')
    if (
        e.target.closest('.filter-popover') ||
        e.target.closest('.calendarPopover .lytePopoverVisible') ||
        e.target.closest('.timezone-footer-dropbox')  ||
        e.target.closest('.timezone-daterange-dropbox')
		// e.target.closest('.zcat-dropbox')
		
    ) {
        return;
    }

    // Close BOTH always
    const filterBtn = document.querySelector('#showButton');
    const datePopover = document.querySelector('lyte-popover#zcat-daterangepicker');

    if (filterBtn) filterBtn.ltProp('show', false);
    if (datePopover) datePopover.ltProp('show', false);
});

class ZcatDateselect extends Component {
	constructor() {
		super();
	}

  	init() {
		const formatDate = d =>
		`${String(d.getDate()).padStart(2, '0')}/${String(
			d.getMonth() + 1
		).padStart(2, '0')}/${d.getFullYear()}`;

		const formatTime = d => {
		let h = d.getHours(),
			m = String(d.getMinutes()).padStart(2, '0'),
			s = String(d.getSeconds()).padStart(2, '0');
		const ampm = h >= 12 ? 'PM' : 'AM';
		h = h % 12 || 12;
		return `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;
		};

		const now = new Date();
		const startDate = formatDate(now);
		const startTime = formatTime(now);

		// end = +10 days + 8 hours (your existing logic)
		const endDateObj = new Date(
		now.getTime() + 10 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000
		);
		const endDate = formatDate(endDateObj);
		const endTime = formatTime(endDateObj);

		// ✅ minDate = today
		const minDate = formatDate(now);

		// ✅ maxDate = one month later
		const maxDateObj = new Date(now);
		maxDateObj.setMonth(now.getMonth() + 1);
		const maxDate = formatDate(maxDateObj);

		this.setData('minDate', minDate);
		this.setData('maxDate', maxDate);

		this.setData('initialStartDate', '');
		this.setData('initialEndDate', '');
		this.setData('initialStartTime', startTime);
		this.setData('initialEndTime', endTime);
		this.setData('initialTimezone', 'Etc/GMT+12');

		this.setData('selectedStartDate', '');
		this.setData('selectedEndDate', '');
		this.setData('selectedStartTime', startTime);
		this.setData('selectedEndTime', endTime);
		this.setData('selectedTimezone', 'Etc/GMT+12');				

		const selectedTimezone = this.getData('timezoneDocObj_dateRangePicker').selected
		this.setData('timezoneDocObj_dateRangePicker.selected', this.getData('selectedTimezone'));
		this.setData('timezoneDocObj1.selected', this.getData('selectedTimezone'));

		const zcatProp = this.getData('zcatProp');
		for (let item of zcatProp.options) {
			if (item.isSelected) {
				this.setData('initialFilterOption', item.name);       // this('initialFilterOption') is to store the data and use somewhere else
				this.setData('jobTimeFilterData', this.getData('initialFilterOption'));  // this('jobTimeFilterData') is for UI
				break; 
			}
		}

		// this.highlightFilterOption();

		const featureObj = this.getData('featureObj');
      	this.setData("featureObj.filterOption", this.getData('initialFilterOption'));   // this is for featureObj
      	this.setData("featureObj.timezone", this.getData('timezoneValue'));
		// document.addEventListener('click', this.autoCloseFunction());
		
	}
	
	data() {           
		return {
			timezone: prop('object', { default: {name: ''}}),
      		featureObj: prop("object", { watch: true }),

			startDate: prop('string'),
			startTime: prop('string'),
			endDate: prop('string'),
			endTime: prop('string'),
			minDate: prop('string'),
			maxDate: prop('string'),
			// ---------------------------------------------

			initialStartDate: prop('string'), 
			initialEndDate: prop('string'), 
			initialStartTime: prop('string'), 
			initialEndTime: prop('string'),
			initialTimezone: prop('string'),
			initialFilterOption: prop('string'),   // initial filter option

			selectedStartDate: prop('string'),
			selectedEndDate: prop('string'),
			selectedStartTime: prop('string'),
			selectedEndTime: prop('string'),
			selectedTimezone: prop('string'),
			// the below 2 is to show in ui
			jobTimeFilterData: prop('string', { default: "" }),
			// timezoneValue: prop('string', { default: "America/Los_Angeles"}),
			timezoneValue: prop('string', { default: "Etc/GMT+12"}),

			zcatProp: prop("object", {default: {}}),
			// jobTimeFilterArray: prop('array', { default: [
			// 	{
			// 	name: 'All Time',
			// 	value: 'all_time'
			// 	},{
			// 	name: 'Today',
			// 	value: 'today'
			// 	},{
			// 	name: 'Yesterday',
			// 	value: 'yesterday'
			// 	},{
			// 	name: 'Last 15 mins',
			// 	value: '15mins'
			// 	},{
			// 	name: 'Last 30 mins',
			// 	value: '30mins'
			// 	},{
			// 	name: 'Last 1 hour',
			// 	value: '1hr'
			// 	},{
			// 	name: 'Last 3 hours',
			// 	value: '3hrs'
			// 	},{
			// 	name: 'Last 12 hours',
			// 	value: '12hrs'
			// 	},{
			// 	name: 'Last 3 days',
			// 	value: '3days'
			// 	},{
			// 	name: 'Last 7 days',
			// 	value: '7days'
			// 	},{
			// 		name: 'Last 30 days',
			// 		value: '30days'
			// 	}
			// ]}),

			// date range picker ----
      		selectedTimezone: prop('string', { default: '' }),
      		showAllTimezones: prop('boolean', { default: false }),
      		dateTimePickerValue: prop('string', { default: '' }),			

			key: prop('string'),

			currentStartDate: prop('string'),
			currentStartTime: prop('string'),
			currentEndDate: prop('string'),
			currentEndTime: prop('string'),

			hasShowNoResult: prop('boolean', {default: false}),
			queryParam: prop('object', { default: {} }),
      // ---------------------------------
			self: prop("object", { default: this }),
			// timezoneDocObj1: prop("object", {default: 
			// 	{
			// 		"dropboxClass": "timezone-footer-dropbox",
			// 		"id": "1111",
            //                                                 "leadingIcon": true,
            //                                                 "selected": ""
            //                                             }			
			// }), 
			// timezoneDocObj_dateRangePicker: prop("object", {default: 
			// 	{
			// 		"dropboxClass": "timezone-daterange-dropbox",
			// 		"id": "2222",
            //                                                 "leadingIcon": false,
            //                                                 "selected": ""
            //                                             }
			// }),
			timezoneDocObj1: prop("object", {default: 
				{
					id: "timezoneFooter_id",
                            // width: "zcat-w100p",
                            variant: "ghost",
                            isSearchable: true,
                            // key: "selected_timezone_footer",
							key: "name",
							// onOptionSelected: "onTimezoneSelected",
                            reset: false, 
							icon: { 
								position: "left",
                                name: "clock",
                                size: "12",
								width: "12", 
								height: "12",
                                stroke: "var(--zcat-dropdown-ghost-icon-primary-default)"
                            }
				}																		
			}), 
			timezoneDocObj_dateRangePicker: prop("object", {default: 
				{
					id: "timezoneDRpicker_id",
                            // width: "zcat-w100p",
                            variant: "ghost",
                            isSearchable: true,
                            // key: "selected_timezone_daterange",
							key: "name",
                            // onOptionSelected: "onTimezoneSelected",
                            reset: false
				}
			})
			,exeHistoryLastMin: prop('string', {default: ''})
			, dateRangePickerTimezoneData: prop("object", { default: {} })
			, footerTimezoneData: prop("object", { default: {} })

		}	
	}

	highlightFilterOption(){
		let popoverContents = document.querySelectorAll('.exe-history-dropdown lyte-popover-content div');
		let jobFilterValue = this.getData('jobTimeFilterData')?.trim();

		popoverContents.forEach(content => {
			content.classList.remove('active-dropdown');
		});

		let matched = false;
		popoverContents.forEach(content => {
			if (content.innerText.trim() === jobFilterValue) {
				content.classList.add('active-dropdown');
				matched = true;
			}
		});
		if (!matched && jobFilterValue && jobFilterValue.includes("/")) {
			let customRangeDiv = document.getElementById("zcat-daterangepicker-wrapper");
			if (customRangeDiv) {
				customRangeDiv.classList.add("active-dropdown");
			}
		}
	}

	static methods() {
		return {
			onItemClickTimezone_Footer(a, selectedOpt, c, d){
				// this.setData(this.getData('timezoneDocObj1').selected, b);
				this.$addon.objectUtils(this.getData('timezoneDocObj1'), 'add', 'selected', selectedOpt);
				// this.$addon.objectUtils(this.getData('timezoneDocObj_dateRangePicker'), 'add', 'selected', selectedOpt);
				this.setData('selectedTimezone', this.getData('timezoneDocObj1').selected);
				this.setData('initialTimezone', this.getData('selectedTimezone'));
				// this.setData('timezoneDocObj_dateRangePicker.selected', this.getData('initialTimezone'));
				this.$addon.objectUtils(this.getData('timezoneDocObj_dateRangePicker'), 'add', 'selected', this.getData('initialTimezone'));
				this.setData('timezoneValue', this.getData('initialTimezone'));

				const featureObj = this.getData('featureObj');
				if(this.getData('featureObj.filterOption') !== ''){
					this.setData("featureObj.startDate", '');
					this.setData("featureObj.endDate", '');
					this.setData("featureObj.startTime", '');
					this.setData("featureObj.endTime", '');
      				this.setData("featureObj.filterOption", this.getData('initialFilterOption'));   // we have the value in 'initialFilterOption'. Transfer this value to UI variable and featureObj variable.
					this.setData('jobTimeFilterData', this.getData('initialFilterOption'));
				}
				else if(
					this.getData('featureObj.endDate') !== '' && 
					this.getData('featureObj.startDate') !== '' &&
					this.getData('featureObj.startTime') !== '' &&
					this.getData('featureObj.endTime') !== ''
				){
					this.setData("featureObj.filterOption", '');
					const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
					this.setData('jobTimeFilterData', dateTime);
				}				
			},
			onItemClickTimezone_DateRangePicker(a, selectedOpt, c, d) {
				this.$addon.objectUtils(this.getData('timezoneDocObj_dateRangePicker'), 'add', 'selected', selectedOpt);
				this.setData('selectedTimezone', this.getData('timezoneDocObj_dateRangePicker').selected);

				const featureObj = this.getData('featureObj');
				if(
					featureObj.startDate &&
					featureObj.endDate &&
					featureObj.startTime &&
					featureObj.endTime
				) {
					this.setData("featureObj.filterOption", ''); // clear filter option
					const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime')
						+ " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
					this.setData('jobTimeFilterData', dateTime);
				}
				// 2. Otherwise, fallback to filter option
				else if(featureObj.filterOption) {
					this.setData("featureObj.startDate", '');
					this.setData("featureObj.endDate", '');
					this.setData("featureObj.startTime", '');
					this.setData("featureObj.endTime", '');
					this.setData("featureObj.filterOption", this.getData('initialFilterOption'));
					this.setData('jobTimeFilterData', this.getData('initialFilterOption'));
				}
			}
			,
			closeWholePop(a, b, c) {
				const elem = document.querySelector('#datepicker-dropdown');
				if(this.getMethods('onClose')) {
					this.executeMethod('onClose', a, b, c);
				}
				// console.log("--- ", this.getData('featureObj'))
			},
			closepop(){   // closepop() in daterangepicker  --> closeDateRangePickerPop
				this.highlightFilterOption();
			},
			
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

			defaultOnShow(){
				this.highlightFilterOption();
				if (this.getMethods('onShow')) {
					this.executeMethod('onShow', arg);
				}
			}

		}
	}

	static actions() {
		return {
			applyDateRangePicker() {
				const featureObj = this.getData('featureObj');
				if(!this.getData('selectedStartDate') && !this.getData('selectedEndDate')){   // if not select any date and click on applyBtn
					this.setData('jobTimeFilterData', this.getData('initialFilterOption'));
      				this.setData("featureObj.filterOption", this.getData('initialFilterOption'));
					this.setData("featureObj.startDate", '');
					this.setData("featureObj.endDate", '');
					this.setData("featureObj.startTime", '');
					this.setData("featureObj.endTime", '');
					this.setData("jobTimeFilterData", this.getData('initialFilterOption'));
				}
				else{ // if selected any date and click on applyBtn
					this.setData('initialStartDate', this.getData('selectedStartDate'));
					this.setData('initialEndDate', this.getData('selectedEndDate'));
					this.setData('initialStartTime', this.getData('selectedStartTime'));
					this.setData('initialEndTime', this.getData('selectedEndTime'));

					const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
					this.setData('jobTimeFilterData', dateTime);

      				this.setData("featureObj.filterOption", '');
					this.setData("featureObj.startDate", this.getData('initialStartDate'));
					this.setData("featureObj.endDate", this.getData('initialEndDate'));
					this.setData("featureObj.startTime", this.getData('initialStartTime'));
					this.setData("featureObj.endTime", this.getData('initialEndTime'));
				}
				
				this.setData('initialTimezone', this.getData('selectedTimezone'));

				if($L('lyte-popover#zcat-daterangepicker')[0].ltProp('show')){
					this.setData('timezoneDocObj_dateRangePicker.selected', this.getData('selectedTimezone'));
				}
				// this.setData('timezoneDocObj1.selected', this.getData('initialTimezone'));

				this.$addon.objectUtils(this.getData('timezoneDocObj1'), 'add', 'selected', this.getData('initialTimezone'));

				this.setData('timezoneValue', this.getData('initialTimezone'))
      			this.setData("featureObj.timezone", this.getData('initialTimezone'));
				
				document.querySelector('lyte-popover#zcat-daterangepicker').ltProp('show', false);

				// let popoverContents = document.querySelectorAll('.exe-history-dropdown lyte-popover-content div');
				// popoverContents.forEach(content => {
				// 	if (content.classList.contains('active-dropdown')) {
				// 		content.classList.remove('active-dropdown');
				// 	}
				// });

				$L('#showButton')[0].ltProp('show', false);
			},
			closeDateRangePicker() {
				this.setData('initialFilterOption', this.getData('jobTimeFilterData'))
				this.setData('jobTimeFilterData', this.getData('jobTimeFilterData'));

				if(this.getData('initialStartDate') || this.getData('initialEndDate')
				 || this.getData('initialStartTime') || this.getData('initialEndTime')
				){
					this.setData('selectedStartDate', this.getData('initialStartDate'));
					this.setData('selectedEndDate', this.getData('initialEndDate'));
					this.setData('selectedStartTime', this.getData('initialStartTime'));
					this.setData('selectedEndTime', this.getData('initialEndTime'));
				}
				
				this.setData('selectedTimezone', this.getData('initialTimezone'));
				if($L('lyte-popover#zcat-daterangepicker')[0].ltProp('show')){
					this.setData('timezoneDocObj_dateRangePicker.selected', this.getData('initialTimezone'));
				}
				this.setData('timezoneDocObj1.selected', this.getData('initialTimezone'));

				this.setData('timezoneValue', this.getData('initialTimezone'))

				document.querySelector('lyte-popover#zcat-daterangepicker').ltProp('show', false);
				// document.querySelector('.zcat-dateranger-picker-wraper').classList.remove('active-dropdown');
			},	
			resetDateRangePicker() {
				this.setData('timezoneDocObj_dateRangePicker.reset', true);
				this.setData('selectedStartDate', this.getData('initialStartDate'));
					this.setData('selectedEndDate', this.getData('initialEndDate'));
					this.setData('selectedStartTime', this.getData('initialStartTime'));
					this.setData('selectedEndTime', this.getData('initialEndTime'));
					this.setData('selectedTimezone', this.getData('initialTimezone'));

				if($L('lyte-popover#zcat-daterangepicker')[0].ltProp('show')){
					this.setData('timezoneDocObj_dateRangePicker.selected', this.getData('initialTimezone'));
				}
				this.setData('timezoneDocObj1.selected', this.getData('initialTimezone'));

				this.setData('timezoneValue', this.getData('initialTimezone'));
			},
			openDateRangePicker(event, element) {	
   				event.stopPropagation();
				this.setData('selectedStartDate', this.getData('initialStartDate'));
				this.setData('selectedEndDate', this.getData('initialEndDate'));
				this.setData('selectedStartTime', this.getData('initialStartTime'));
				this.setData('selectedEndTime', this.getData('initialEndTime'));
				this.setData('selectedTimezone', this.getData('initialTimezone'));
				let popoverContents = document.querySelectorAll('.exe-history-dropdown lyte-popover-content div');
				popoverContents.forEach(content => {
					if (content.classList.contains('active-dropdown')) {
						content.classList.remove('active-dropdown');
					}
				});

				element.classList.add('active-dropdown');

				//  ------- to show the default time -----
				const formatTime = d => {
					let h = d.getHours(),
						m = String(d.getMinutes()).padStart(2, '0'),
						s = String(d.getSeconds()).padStart(2, '0');
					const ampm = h >= 12 ? 'PM' : 'AM';
					h = h % 12 || 12;
					return `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;
				};

				const now = new Date();
				const currentTime = formatTime(now);

				this.setData('selectedStartTime', currentTime);
				this.setData('selectedEndTime', currentTime);

				// this.setData('selectedStartTime', startTime);
				// this.setData('selectedEndTime', endTime);
				//------------end ---------------
				setTimeout(() => {
					let el = $L('#zcat-daterangepicker')[0];
					if (el) {
						el.ltProp('show', true);
					} 
					// else {
					// 	// console.warn("DateRangePicker not found in DOM");
					// }
				});
			},
			showpop(event, elem) {
   				event.stopPropagation();
				// let popoverContents = document.querySelectorAll('.exe-history-dropdown lyte-popover-content div');				
				// popoverContents.forEach(content => {
				// 	content.classList.remove('active-dropdown');
				// });
				// popoverContents.forEach(content => {
				// 	if (content.innerText === this.getData('jobTimeFilterData')) {
				// 		content.classList.add('active-dropdown');
				// 	}
				// });
				this.highlightFilterOption();

				

				$L('#showButton')[0].ltProp('show', true);
			},
			showpoptimezonedropdown(){
				$L('#timezonepicker-dropdown')[0].ltProp('show', true);
			},
			onClickFilterItem(item, value, element){
				this.setData('initialFilterOption', item.name)
				// this.setData('jobTimeFilterData', this.getData('initialFilterOption'));

				const featureObj = this.getData('featureObj');
				this.setData("featureObj.startDate", '');
				this.setData("featureObj.endDate", '');
				this.setData("featureObj.startTime", '');
				this.setData("featureObj.endTime", '');
      			this.setData("featureObj.filterOption", this.getData('initialFilterOption'));
      			this.setData("featureObj.timezone", this.getData('initialTimezone'));
				
				let popoverContents = document.querySelectorAll('.exe-history-dropdown lyte-popover-content div');
				popoverContents.forEach(content => {
					if (content.classList.contains('active-dropdown')) {
						content.classList.remove('active-dropdown');
					}
				});

				element.classList.add('active-dropdown');
				$L('#showButton')[0].ltProp('show', false);

				this.setData('jobTimeFilterData', this.getData('initialFilterOption'));

				if (this.getMethods('onItemClick')) {
					this.executeMethod('onItemClick', item, value);
				}
			}
		}
	}

	static observers() {
		async function featureObjFilterOption() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
      		this.setData("initialFilterOption", this.getData('featureObj.filterOption'));
			this.setData('jobTimeFilterData', this.getData('initialFilterOption'));
		}
		async function featureObjStartDate() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
			this.setData('initialStartDate', this.getData('featureObj.startDate'));

			const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
			this.setData('jobTimeFilterData', dateTime);
		}
		async function featureObjEndDate() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
			this.setData('initialEndDate', this.getData('featureObj.endDate'));

			const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
			this.setData('jobTimeFilterData', dateTime);
		}
		async function featureObjStartTime() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
			this.setData('initialStartTime', this.getData('featureObj.startTime'));

			const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
			this.setData('jobTimeFilterData', dateTime);
		}
		async function featureObjEndTime() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
			this.setData('initialEndTime', this.getData('featureObj.endTime'));

			const dateTime = this.getData('initialStartDate') + " " + this.getData('initialStartTime') + " - " + this.getData('initialEndDate') + " " + this.getData('initialEndTime');
			this.setData('jobTimeFilterData', dateTime);
		}
		async function featureObjTimezone() {
			const zcatProp = this.getData('zcatProp');
			const featureObj = this.getData('featureObj');
			this.setData('timezoneValue', this.getData('featureObj.timezone'));
		}

		return {
			featureObjFilterOption: featureObjFilterOption.observes('featureObj.filterOption'),
			featureObjStartDate: featureObjStartDate.observes('featureObj.startDate'),
			featureObjEndDate: featureObjEndDate.observes('featureObj.endDate'),
			featureObjStartTime: featureObjStartTime.observes('featureObj.startTime'),
			featureObjEndTime: featureObjEndTime.observes('featureObj.endTime'),
			featureObjTimezone: featureObjTimezone.observes('featureObj.timezone')
		};
	}


  
}

export { ZcatDateselect };

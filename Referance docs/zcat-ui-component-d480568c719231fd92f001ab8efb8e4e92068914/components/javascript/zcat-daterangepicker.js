import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
import "@zoho/lyte-ui-component/I18n/en_US"

class ZcatDaterangepicker extends Component {
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

    this.setData({
      startDate,
      startTime,
      endDate,
      endTime,
      currentStartDate: startDate,
      currentEndDate: endDate,
      currentStartTime: startTime,
      currentEndTime: endTime,
      selectedTimezone: 'Etc/GMT+12',
      minDate,
      maxDate
    });

    this.updateDateTimeValue();
  }


  data() {
    const PreferedTimezones = [
      { display_value: '(GMT -12:00) GMT-12:00 (Etc/GMT+12)', actual_value: 'Etc/GMT+12' },
      { display_value: '(GMT -11:00) Niue Time (Pacific/Niue)', actual_value: 'Pacific/Niue' },
      { display_value: '(GMT -11:00) Samoa Time (Pacific/Pago_Pago)', actual_value: 'Pacific/Pago_Pago' }
    ];

    const AllTimezones = [
      ...PreferedTimezones,
      { display_value: '(GMT -10:00) Hawaii Time (Pacific/Honolulu)', actual_value: 'Pacific/Honolulu' },
      { display_value: '(GMT -9:30) Marquesas Time (Pacific/Marquesas)', actual_value: 'Pacific/Marquesas' },
      { display_value: '(GMT -9:00) Alaska Daylight (America/Anchorage)', actual_value: 'America/Anchorage' }
    ];

    return {
      startDate: prop('string'),
      startTime: prop('string'),
      endDate: prop('string'),
      endTime: prop('string'),
      minDate: prop('string'),
      maxDate: prop('string'),
      key: prop('string'),
      formData: prop('object', { watch: true }),

      currentStartDate: prop('string'),
      currentStartTime: prop('string'),
      currentEndDate: prop('string'),
      currentEndTime: prop('string'),

      selectedTimezone: prop('string', { default: '' }),
      preferedTimezone: prop('array', { default: PreferedTimezones }),
      allTimezones: prop('array', { default: AllTimezones }),
      showAllTimezones: prop('boolean', { default: false }),
      dateTimePickerValue: prop('string', { default: '' })
    };
  }

  updateDateTimeValue() {
    this.setData(
      'dateTimePickerValue',
      `${this.getData('startDate')} ${this.getData('startTime')} - ${this.getData(
        'endDate'
      )} ${this.getData('endTime')} (${this.getData('selectedTimezone')})`
    );
  }

  static methods() {
    return {
      changeTimezone() {
        this.setData('showAllTimezones', false);
        const selectedTimezone = this.getData('selectedTimezone');
        const all = this.getData('allTimezones') || [];

        const idx = all.findIndex(tz => tz.actual_value === selectedTimezone);
        if (idx > -1) {
          const tz = all[idx];
          Lyte.arrayUtils(this.getData('preferedTimezone'), 'removeAt', 0, 1);
          Lyte.arrayUtils(this.getData('preferedTimezone'), 'insertAt', 0, tz);
        }

        document
          .querySelector('lyte-dropdown#dropdownTimezone')
          .ltProp('selected', selectedTimezone);

        this.updateDateTimeValue();
      },
      closepop(){
        document.querySelector('.zcat-dateranger-picker-wraper').classList.remove('active-dropdown');
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
      }
    };
  }

  static actions() {
    return {
      openDateRangePicker() {
        document.querySelector('lyte-popover#zcat-daterangepicker').ltProp('show', true);
        document.querySelector('.zcat-dateranger-picker-wraper').classList.add('active-dropdown');
      },
      resetDateRangePicker() {
        this.init(); // reset to initial
      },
      closeDateRangePicker() {
        document.querySelector('lyte-popover#zcat-daterangepicker').ltProp('show', false);
        document.querySelector('.zcat-dateranger-picker-wraper').classList.remove('active-dropdown');
      },
      applyDateRangePicker() {
        const dateSelectSelf = this.getData('dateSelectSelf');
        if (dateSelectSelf) {
          dateSelectSelf.setData('selectedDateRangePicker', {
            startDate: this.getData('startDate'),
            endDate: this.getData('endDate'),
            startTime: this.getData('startTime'),
            endTime: this.getData('endTime'),
            timezone: this.getData('selectedTimezone')
          });
        }
        this.updateDateTimeValue();
        document.querySelector('lyte-popover#zcat-daterangepicker').ltProp('show', false);
      },
      viewAllTimezones() {
        this.setData('showAllTimezones', true);
        const timeZone = this.getData('selectedTimezone');
        document
          .querySelector('lyte-dropdown#dropdownTimezone')
          .ltProp('selected', '');
        document
          .querySelector('lyte-dropdown#dropdownTimezone')
          .ltProp('selected', timeZone);
        //scroll into view
        $L('#timezoneSearch lyte-drop-body').scrollTo(
          document.querySelector('#timezoneSearch lyte-drop-item[selected=true]')
        );
      }
    };
  }

  static observers() {
		async function zcatPropToUserObj() {
		debugger
		const zcatProp=this.getData('zcatProp');
		const formData=this.getData('formData');
		const key = this.getData('key');
		this.setData('formData.'+key, dateTimePickerValue)
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
		zcatPropToUserObj: zcatPropToUserObj.observes('dateTimePickerValue') // No I18N
		};
	}

}

export { ZcatDaterangepicker };

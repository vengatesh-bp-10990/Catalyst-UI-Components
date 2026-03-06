import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatDatepicker extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isOpen: prop('boolean', { default: false }),
      selectedDate: prop('string', { default: '' }),
      displayValue: prop('string', { default: '' }),
      // Calendar state
      viewYear: prop('number', { default: new Date().getFullYear() }),
      viewMonth: prop('number', { default: new Date().getMonth() }),
      calendarDays: prop('array', { default: [] }),
      monthLabel: prop('string', { default: '' }),
      // Time state
      hours: prop('string', { default: '12' }),
      minutes: prop('string', { default: '00' }),
      seconds: prop('string', { default: '00' }),
      ampm: prop('string', { default: 'AM' }),
      // Temp selection (applied on Apply click)
      tempDate: prop('string', { default: '' })
    }), arg1);
  }

  init() {
    this._syncFromProp();
    this._buildCalendar();
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function(e) {
      let wrapper = comp.$node ? comp.$node.querySelector('.zcat-datepicker-wrapper') : null;
      if (wrapper && !wrapper.contains(e.target)) {
        comp.setData('isOpen', false);
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  _syncFromProp() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.value) {
      this.setData('selectedDate', zcatProp.value);
      this.setData('tempDate', zcatProp.value);
      this._updateDisplayValue(zcatProp.value);
      // Parse date to set view
      let d = new Date(zcatProp.value);
      if (!isNaN(d.getTime())) {
        this.setData('viewYear', d.getFullYear());
        this.setData('viewMonth', d.getMonth());
      }
    }
  }

  _updateDisplayValue(dateStr) {
    if (!dateStr) {
      this.setData('displayValue', '');
      return;
    }
    let zcatProp = this.getData('zcatProp');
    let format = (zcatProp && zcatProp.format) || 'MM/DD/YYYY';
    let d = new Date(dateStr);
    if (isNaN(d.getTime())) {
      this.setData('displayValue', dateStr);
      return;
    }
    let mm = String(d.getMonth() + 1).padStart(2, '0');
    let dd = String(d.getDate()).padStart(2, '0');
    let yyyy = d.getFullYear();
    let result = format
      .replace('YYYY', yyyy)
      .replace('MM', mm)
      .replace('DD', dd);
    if (zcatProp && zcatProp.showTime) {
      result += ' ' + this.getData('hours') + ':' + this.getData('minutes') + ':' + this.getData('seconds') + ' ' + this.getData('ampm');
    }
    this.setData('displayValue', result);
  }

  _buildCalendar() {
    let year = this.getData('viewYear');
    let month = this.getData('viewMonth');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.setData('monthLabel', months[month] + ' ' + year);

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();

    let days = [];
    let zcatProp = this.getData('zcatProp');
    let minDate = zcatProp && zcatProp.minDate ? new Date(zcatProp.minDate) : null;
    let maxDate = zcatProp && zcatProp.maxDate ? new Date(zcatProp.maxDate) : null;
    let tempDate = this.getData('tempDate');
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month fill
    for (let i = firstDay - 1; i >= 0; i--) {
      let dayNum = daysInPrevMonth - i;
      days.push({ day: dayNum, current: false, disabled: true, selected: false, today: false, _dateStr: '' });
    }

    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      let date = new Date(year, month, d);
      date.setHours(0, 0, 0, 0);
      let dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      let disabled = false;
      if (minDate && date < minDate) disabled = true;
      if (maxDate && date > maxDate) disabled = true;
      days.push({
        day: d,
        current: true,
        disabled: disabled,
        selected: tempDate === dateStr,
        today: date.getTime() === today.getTime(),
        _dateStr: dateStr
      });
    }

    // Next month fill (to complete 6 rows)
    let remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, current: false, disabled: true, selected: false, today: false, _dateStr: '' });
    }

    this.setData('calendarDays', days);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      togglePicker(event) {
        if (event) event.stopPropagation();
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        let isOpen = this.getData('isOpen');
        if (!isOpen) {
          // Opening — sync temp from selected
          let sel = this.getData('selectedDate');
          this.setData('tempDate', sel);
          if (sel) {
            let d = new Date(sel);
            if (!isNaN(d.getTime())) {
              this.setData('viewYear', d.getFullYear());
              this.setData('viewMonth', d.getMonth());
            }
          }
          this._buildCalendar();
        }
        this.setData('isOpen', !isOpen);
      },

      prevMonth() {
        let m = this.getData('viewMonth');
        let y = this.getData('viewYear');
        if (m === 0) { m = 11; y--; } else { m--; }
        this.setData('viewMonth', m);
        this.setData('viewYear', y);
        this._buildCalendar();
      },

      nextMonth() {
        let m = this.getData('viewMonth');
        let y = this.getData('viewYear');
        if (m === 11) { m = 0; y++; } else { m++; }
        this.setData('viewMonth', m);
        this.setData('viewYear', y);
        this._buildCalendar();
      },

      selectDay(dayObj) {
        if (dayObj.disabled || !dayObj.current) return;
        this.setData('tempDate', dayObj._dateStr);
        this._buildCalendar();
      },

      onHoursChange(event, lyteElement) {
        let rawVal = lyteElement ? lyteElement.getData('ltPropValue') : (event && event.target ? event.target.value : '');
        let v = (rawVal || '').replace(/[^0-9]/g, '').slice(0, 2);
        let num = parseInt(v, 10);
        if (num > 12) v = '12';
        if (num < 1 && v.length === 2) v = '01';
        this.setData('hours', v || '');
      },

      onMinutesChange(event, lyteElement) {
        let rawVal = lyteElement ? lyteElement.getData('ltPropValue') : (event && event.target ? event.target.value : '');
        let v = (rawVal || '').replace(/[^0-9]/g, '').slice(0, 2);
        let num = parseInt(v, 10);
        if (num > 59) v = '59';
        this.setData('minutes', v || '');
      },

      onSecondsChange(event, lyteElement) {
        let rawVal = lyteElement ? lyteElement.getData('ltPropValue') : (event && event.target ? event.target.value : '');
        let v = (rawVal || '').replace(/[^0-9]/g, '').slice(0, 2);
        let num = parseInt(v, 10);
        if (num > 59) v = '59';
        this.setData('seconds', v || '');
      },

      toggleAmPm() {
        this.setData('ampm', this.getData('ampm') === 'AM' ? 'PM' : 'AM');
      },

      applyDate() {
        let tempDate = this.getData('tempDate');
        this.setData('selectedDate', tempDate);
        this._updateDisplayValue(tempDate);
        this.setData('isOpen', false);

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          let result = { date: tempDate };
          if (zcatProp.showTime) {
            result.time = this.getData('hours') + ':' + this.getData('minutes') + ':' + this.getData('seconds') + ' ' + this.getData('ampm');
          }
          self.executeMethod(zcatProp.callback.name, result);
        }
      },

      resetDate() {
        this.setData('tempDate', '');
        this.setData('selectedDate', '');
        this.setData('displayValue', '');
        this.setData('hours', '12');
        this.setData('minutes', '00');
        this.setData('seconds', '00');
        this.setData('ampm', 'AM');
        let now = new Date();
        this.setData('viewYear', now.getFullYear());
        this.setData('viewMonth', now.getMonth());
        this._buildCalendar();
      },

      closePicker() {
        this.setData('isOpen', false);
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncFromProp();
          this._buildCalendar();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatDatepicker._template = "<template tag-name=\"zcat-datepicker\"> <div class=\"zcat-datepicker-wrapper {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-datepicker-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-datepicker-exsm',''))}} {{expHandlers(zcatProp.disabled,'?:','zcat-datepicker-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-datepicker-error','')}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-datepicker-label-row\"> <label class=\"zcat-datepicker-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-datepicker-optional\">(Optional)</span> </template></template> </div> </template></template> <!-- Input trigger using lyte-input --> <div class=\"zcat-datepicker-input-wrap\" onclick=\"{{action('togglePicker')}}\"> <zcat-icon class=\"zcat-datepicker-cal-icon\" name=\"calendar\" width=\"{{expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','12','14')}}\" height=\"{{expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','12','14')}}\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> <lyte-input class=\"zcat-datepicker-input\" lt-prop-placeholder=\"{{expHandlers(zcatProp.placeholder,'||','Select date')}}\" lt-prop-value=\"{{displayValue}}\" lt-prop-readonly=\"true\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\" lt-prop-appearance=\"box\" lt-prop-auto-update=\"true\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\"></lyte-input> <span class=\"zcat-datepicker-arrow\"></span> </div> <!-- Popover / Calendar Panel --> <div class=\"zcat-datepicker-popover {{expHandlers(isOpen,'?:','open','')}}\"> <!-- Calendar Header --> <div class=\"zcat-datepicker-cal-header\"> <span class=\"zcat-datepicker-nav-btn\" onclick=\"{{action('prevMonth')}}\"> <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg> </span> <span class=\"zcat-datepicker-month-label\">{{monthLabel}}</span> <span class=\"zcat-datepicker-nav-btn\" onclick=\"{{action('nextMonth')}}\"> <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 6 15 12 9 18\"></polyline></svg> </span> </div> <!-- Day Names --> <div class=\"zcat-datepicker-weekdays\"> <span class=\"zcat-datepicker-weekday\">Su</span> <span class=\"zcat-datepicker-weekday\">Mo</span> <span class=\"zcat-datepicker-weekday\">Tu</span> <span class=\"zcat-datepicker-weekday\">We</span> <span class=\"zcat-datepicker-weekday\">Th</span> <span class=\"zcat-datepicker-weekday\">Fr</span> <span class=\"zcat-datepicker-weekday\">Sa</span> </div> <!-- Calendar Grid --> <div class=\"zcat-datepicker-grid\"> <template items=\"{{calendarDays}}\" item=\"dayObj\" index=\"dayIdx\" is=\"for\" _new=\"true\"> <span class=\"zcat-datepicker-day {{expHandlers(dayObj.current,'?:','','other-month')}} {{expHandlers(dayObj.disabled,'?:','disabled','')}} {{expHandlers(dayObj.selected,'?:','selected','')}} {{expHandlers(dayObj.today,'?:','today','')}}\" onclick=\"{{action('selectDay',dayObj)}}\"> {{dayObj.day}} </span> </template> </div> <!-- Time Picker --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.showTime}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-datepicker-time\"> <span class=\"zcat-datepicker-time-label\">Time</span> <div class=\"zcat-datepicker-time-inputs\"> <lyte-input class=\"zcat-datepicker-time-input\" lt-prop-value=\"{{hours}}\" lt-prop-maxlength=\"2\" lt-prop-appearance=\"box\" lt-prop-auto-update=\"true\" on-value-change=\"{{method('onHoursChange')}}\"></lyte-input> <span class=\"zcat-datepicker-time-sep\">:</span> <lyte-input class=\"zcat-datepicker-time-input\" lt-prop-value=\"{{minutes}}\" lt-prop-maxlength=\"2\" lt-prop-appearance=\"box\" lt-prop-auto-update=\"true\" on-value-change=\"{{method('onMinutesChange')}}\"></lyte-input> <span class=\"zcat-datepicker-time-sep\">:</span> <lyte-input class=\"zcat-datepicker-time-input\" lt-prop-value=\"{{seconds}}\" lt-prop-maxlength=\"2\" lt-prop-appearance=\"box\" lt-prop-auto-update=\"true\" on-value-change=\"{{method('onSecondsChange')}}\"></lyte-input> <span class=\"zcat-datepicker-ampm\" onclick=\"{{action('toggleAmPm')}}\">{{ampm}}</span> </div> </div> </template></template> <!-- Footer --> <div class=\"zcat-datepicker-footer\"> <span class=\"zcat-datepicker-footer-link\" onclick=\"{{action('resetDate')}}\">Reset</span> <div class=\"zcat-datepicker-footer-right\"> <lyte-button class=\"zcat-datepicker-btn-cancel\" onclick=\"{{action('closePicker')}}\"> <template is=\"registerYield\" yield-name=\"text\">Close</template> </lyte-button> <lyte-button class=\"zcat-datepicker-btn-apply\" onclick=\"{{action('applyDate')}}\"> <template is=\"registerYield\" yield-name=\"text\">Apply</template> </lyte-button> </div> </div> </div> <!-- Error Message --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-datepicker-error-msg\">{{zcatProp.errorMessage}}</div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Datepicker Component\n   ============================== */\n\nzcat-datepicker * { box-sizing: border-box; }\n\n.zcat-datepicker-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 260px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Label */\n.zcat-datepicker-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-datepicker-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-datepicker-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* Input trigger */\n.zcat-datepicker-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.zcat-datepicker-cal-icon {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  z-index: 1;\n  color: var(--zcat-inputField-icon-placeholder);\n}\n.zcat-datepicker-input {\n  width: 100%;\n  height: 36px;\n  padding: 0 28px 0 30px;\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-active);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zcat-datepicker-input::placeholder { color: var(--zcat-inputField-text-placeholder); }\n.zcat-datepicker-input:hover,\n.zcat-datepicker-input-wrap:hover .zcat-datepicker-input {\n  border-color: var(--zcat-inputField-border-hover);\n}\n.zcat-datepicker-arrow {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  width: 16px;\n  height: 16px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%237988A8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: transform 0.15s ease;\n}\n\n/* Sizes */\n.zcat-datepicker-sm .zcat-datepicker-input {\n  height: 28px;\n  font-size: 13px;\n  padding: 2px 22px 2px 26px;\n  line-height: 18px;\n}\n.zcat-datepicker-sm .zcat-datepicker-arrow { width: 14px; height: 14px; background-size: 14px; }\n.zcat-datepicker-exsm .zcat-datepicker-input {\n  height: 24px;\n  font-size: 12px;\n  padding: 2px 22px 2px 22px;\n  border-radius: 6px;\n  line-height: 16px;\n}\n.zcat-datepicker-exsm .zcat-datepicker-arrow { width: 12px; height: 12px; background-size: 12px; right: 6px; }\n\n/* === Popover / Calendar Panel === */\n.zcat-datepicker-popover {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  width: 280px;\n  background: var(--zcat-body-bg);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 6px;\n  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  display: none;\n  overflow: hidden;\n  animation: zcatDatepickerFadeIn 0.12s ease-out;\n}\n.zcat-datepicker-popover.open {\n  display: block;\n}\n@keyframes zcatDatepickerFadeIn {\n  from { opacity: 0; transform: translateY(-4px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Calendar header */\n.zcat-datepicker-cal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 12px 8px;\n}\n.zcat-datepicker-nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--zcat-body-text-secondary);\n  transition: background 0.12s;\n}\n.zcat-datepicker-nav-btn:hover {\n  background: var(--zcat-inputField-bg-hover);\n}\n.zcat-datepicker-month-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--zcat-body-text-primary);\n}\n\n/* Weekday names */\n.zcat-datepicker-weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 4px 12px;\n}\n.zcat-datepicker-weekday {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--zcat-body-text-tertiary, var(--zcat-inputField-text-placeholder));\n  padding: 4px 0;\n}\n\n/* Calendar grid */\n.zcat-datepicker-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 0 12px 8px;\n  gap: 2px;\n}\n.zcat-datepicker-day {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  aspect-ratio: 1;\n  font-size: 13px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--zcat-body-text-primary);\n  transition: background 0.12s, color 0.12s;\n}\n.zcat-datepicker-day:hover {\n  background: var(--zcat-inputField-bg-hover);\n}\n.zcat-datepicker-day.other-month {\n  color: var(--zcat-inputField-text-placeholder);\n  cursor: default;\n}\n.zcat-datepicker-day.disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.zcat-datepicker-day.today {\n  font-weight: 700;\n  color: var(--zcat-primary-1);\n}\n.zcat-datepicker-day.selected {\n  background: var(--zcat-primary-1) !important;\n  color: #fff !important;\n  font-weight: 600;\n}\n\n/* === Time picker === */\n.zcat-datepicker-time {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-top: 1px solid var(--zcat-body-border);\n}\n.zcat-datepicker-time-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n  white-space: nowrap;\n}\n.zcat-datepicker-time-inputs {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.zcat-datepicker-time-input {\n  width: 30px;\n  height: 28px;\n  text-align: center;\n  font-size: 13px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 4px;\n  outline: none;\n}\n.zcat-datepicker-time-input:focus {\n  border-color: var(--zcat-inputField-border-active);\n}\n.zcat-datepicker-time-sep {\n  font-size: 13px;\n  color: var(--zcat-body-text-secondary);\n  padding: 0 1px;\n}\n.zcat-datepicker-ampm {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 28px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--zcat-primary-1);\n  background: var(--zcat-inputField-bg-hover);\n  border-radius: 4px;\n  cursor: pointer;\n  user-select: none;\n  margin-left: 4px;\n}\n.zcat-datepicker-ampm:hover {\n  background: var(--zcat-primary-5, rgba(0, 100, 255, 0.08));\n}\n\n/* === Footer === */\n.zcat-datepicker-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border-top: 1px solid var(--zcat-body-border);\n}\n.zcat-datepicker-footer-link {\n  font-size: 13px;\n  color: var(--zcat-btn-fill-bg-primary-default);\n  cursor: pointer;\n  font-weight: 500;\n}\n.zcat-datepicker-footer-link:hover {\n  text-decoration: underline;\n}\n.zcat-datepicker-footer-right {\n  display: flex;\n  gap: 6px;\n}\n.zcat-datepicker-btn-cancel {\n  padding: 4px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n  background: transparent;\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.zcat-datepicker-btn-cancel:hover {\n  background: var(--zcat-inputField-bg-hover);\n}\n.zcat-datepicker-btn-apply {\n  padding: 4px 12px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-btn-fill-text-default);\n  background: var(--zcat-btn-fill-bg-primary-default);\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.zcat-datepicker-btn-apply:hover {\n  background: var(--zcat-btn-fill-bg-primary-hover);\n}\n\n/* === Disabled === */\n.zcat-datepicker-disabled .zcat-datepicker-input {\n  background: var(--zcat-inputField-bg-disabled) !important;\n  border-color: var(--zcat-inputField-border-disabled) !important;\n  color: var(--zcat-inputField-text-disabled) !important;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.zcat-datepicker-disabled .zcat-datepicker-input-wrap { cursor: not-allowed; }\n.zcat-datepicker-disabled .zcat-datepicker-label { color: var(--zcat-inputField-text-disabled); }\n.zcat-datepicker-disabled .zcat-datepicker-arrow { opacity: 0.4; }\n\n/* === Error === */\n.zcat-datepicker-error .zcat-datepicker-input {\n  background: var(--zcat-inputField-bg-error) !important;\n  border-color: var(--zcat-inputField-border-error) !important;\n}\n.zcat-datepicker-error-msg {\n  position: relative;\n  margin-top: 2px;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n  line-height: 16px;\n  font-family: var(--zcat-font-family-primary);\n}\n</style>";;
ZcatDatepicker._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8]},{"t":"a","p":[1,7]},{"t":"a","p":[1,7,1]},{"t":"cD","p":[1,7,1],"in":8,"sibl":[7]},{"t":"a","p":[1,7,3],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}}},{"t":"cD","p":[1,7,3],"in":7,"sibl":[6]},{"t":"a","p":[1,11]},{"t":"a","p":[1,11,3,1]},{"t":"tX","p":[1,11,3,3,0]},{"t":"a","p":[1,11,3,5]},{"t":"a","p":[1,11,11,1]},{"t":"f","p":[1,11,11,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1]}],"in":6,"sibl":[5]},{"t":"s","p":[1,11,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,3,5],"cn":"lc_id_0"},{"t":"cD","p":[1,3,5],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[1,3,9],"cn":"lc_id_0"},{"t":"cD","p":[1,3,9],"in":0,"cn":"lc_id_0"},{"t":"a","p":[1,3,11],"cn":"lc_id_0"},{"t":"tX","p":[1,3,11,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"a","p":[1,11,19,1]},{"t":"a","p":[1,11,19,3,1]},{"t":"r","p":[1,11,19,3,1,1],"dN":[],"in":4,"sibl":[3]},{"t":"cD","p":[1,11,19,3,1],"in":3,"sibl":[2]},{"t":"a","p":[1,11,19,3,3]},{"t":"r","p":[1,11,19,3,3,1],"dN":[],"in":2,"sibl":[1]},{"t":"cD","p":[1,11,19,3,3],"in":1,"sibl":[0]},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[8,7,5,3,1]}];;

ZcatDatepicker._observedAttributes = [
  "self",
  "zcatProp",
  "isOpen",
  "selectedDate",
  "displayValue",
  "viewYear",
  "viewMonth",
  "calendarDays",
  "monthLabel",
  "hours",
  "minutes",
  "seconds",
  "ampm",
  "tempDate"
];

export { ZcatDatepicker };
ZcatDatepicker.register("zcat-datepicker", {
  hash: "ZcatDatepicker_2",
  refHash: "C_zcat-app_app_0"
});

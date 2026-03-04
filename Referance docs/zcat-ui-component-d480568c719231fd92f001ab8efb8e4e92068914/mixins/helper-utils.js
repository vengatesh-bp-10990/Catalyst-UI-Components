import { Mixin } from '@slyte/core';
import { ZcatAlert } from "../components/javascript/zcat-alert";

class HelperUtils extends Mixin {
  static copyToClipBoard(value) {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = value;
    dummy.select();
    document.execCommand('Copy'); //No I18N
    document.body.removeChild(dummy);
    // @ts-ignore
    document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
  }

  static showLoader(self, comp, outlet, option = {}) {
    Array.from(document.getElementById(outlet).children).forEach((item) => {
      if (item.classList.length > 0) {
        item.classList.add('hide'); //No I18N
      } else {
        item.className = 'hide';
      }
    });
    self.$component.render(comp, {}, `#${outlet}`);
  }

  static isEmpty(value, opts = { isTrim: true, isObjectCheck :true }) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'object' && opts.isObjectCheck) {
      if (Array.isArray(value)) {
        return value.length === 0;
      } else {
        return Object.keys(value).length === 0;
      }
    }

    if (typeof value === 'string') {
      if (opts.isTrim) {
        return value.trim().length === 0;
      } else {
        return value.length === 0;
      }
    }

    return false;
  }

  static isValidJson(json) {
    try {
      JSON.parse(json);
      return true;
    } catch (error) {
      return false;
    }
  }

  static timeFormater(time) {
    return time < 10 && time.toString().length === 1 ? '0' + time : time;
  }

  static getCurrentTime(format, timezone) {
    const currentTime = $L.moment();

    if (timezone) {
      return currentTime.timezone(timezone).format(format);
    }

    return currentTime.format(format);
  }

  static getFormattedDate(format, timezone, monthsOffset) {
    const currentDate = $L.moment();

    if (timezone) {
      currentDate.timezone(timezone);
    }

    if (monthsOffset) {
      currentDate.add(monthsOffset, 'months'); //No I18N
    }

    return currentDate.format(format);
  }

  static showAlert(self, msg){
    if(document.querySelector('.lyteMessageBox')){
      document.querySelector('.lyteMessageBox').remove();
    }
    self.$app.$component.render(ZcatAlert, msg, '#showalert');
  }




}
export { HelperUtils };

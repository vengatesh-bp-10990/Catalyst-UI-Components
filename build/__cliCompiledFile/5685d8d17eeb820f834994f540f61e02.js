import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-calendar.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-time-picker.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-popover.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js";
import { Component } from "../../node_modules/@slyte/component/index.js";

class ZcatDatepicker extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatDatepicker._template = "<template tag-name=\"zcat-datepicker\"> <lyte-popover id=\"simpleDateTimePickerPopover\" lt-prop-content-padding=\"0px\" lt-prop-show-close-button=\"false\" lt-prop-wrapper-class=\"calendarPopover\" lt-prop-origin-elem=\"#calendarPopoverInput\" lt-prop-type=\"box\" lt-prop-close-on-escape=\"false\"> <template is=\"registerYield\" yield-name=\"popover\"> <lyte-popover-content style=\"padding: 0px\"> <h1 class=\"zcat-text-14 zcat-color-dark1 zcat-pt-10 zcat-pl-20\"> Select Date </h1> <lyte-calendar id=\"simpleDatePicker\" lt-prop-header-type=\"dropdown\" lt-prop-current-date=\"{{lbind(selectedDate)}}\" lt-prop-format=\"DD/MM/YYYY\" lt-prop-month-header-format=\"MMM YYYY\" lt-prop-fill-rows=\"false\"></lyte-calendar> <h1 class=\"zcat-text-14 zcat-color-dark1 zcat-pl-20 zcat-pb-10\"> Select Time </h1> <lyte-time-picker style=\"padding: 0 0 20px 20px\" lt-prop-value=\"{{lbind(selectedTime)}}\" lt-prop-time-format=\"hh:mm:ss A\" lt-prop-button=\"[{&quot;text&quot;:&quot;Apply&quot;,&quot;purpose&quot;:&quot;ok&quot;}]\" lt-prop-aria-attributes=\"{&quot;input&quot;:&quot;Time Picker&quot;}\" lt-prop-id=\"simpleTimePicker\" lt-prop-interval=\"{&quot;hour&quot;:1,&quot;minute&quot;:1}\"></lyte-time-picker> <div class=\"zcat-calendar-footer\"> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"\" lt-prop-class=\"lyteTertiaryBtn\" onclick=\"{{action('resetCalendarData')}}\"> <template is=\"registerYield\" yield-name=\"text\">Reset</template> </lyte-button> <div class=\"zcat-dF zcat-align-center zcat-gap-10\"> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"secondary\" onclick=\"{{action('closeCalendar')}}\"> <template is=\"registerYield\" yield-name=\"text\">Close</template> </lyte-button> <lyte-button lt-prop-size=\"extra-small\" lt-prop-appearance=\"primary\" onclick=\"{{action('applyCalendarData')}}\"> <template is=\"registerYield\" yield-name=\"text\">Apply</template> </lyte-button> </div> </div> </lyte-popover-content> </template> </lyte-popover> <lyte-input id=\"calendarPopoverInput\" class=\"date-input-field\" lt-prop-width=\"300px\" lt-prop-appearance=\"box\" lt-prop-label=\"Select Date and Time\" lt-prop-placeholder=\"DD/MM/YYYY\" lt-prop-readonly=\"true\" lt-prop-value=\"{{dateTimePickerValue}}\" onclick=\"{{action('openCalendar')}}\"></lyte-input> </template>";;
ZcatDatepicker._dynamicNodes = [{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":8,"sibl":[7]},{"t":"a","p":[1,7]},{"t":"cD","p":[1,7],"in":7,"sibl":[6]},{"t":"a","p":[1,9,1]},{"t":"r","p":[1,9,1,1],"dN":[],"in":6,"sibl":[5]},{"t":"cD","p":[1,9,1],"in":5,"sibl":[4]},{"t":"a","p":[1,9,3,1]},{"t":"r","p":[1,9,3,1,1],"dN":[],"in":4,"sibl":[3]},{"t":"cD","p":[1,9,3,1],"in":3,"sibl":[2]},{"t":"a","p":[1,9,3,3]},{"t":"r","p":[1,9,3,3,1],"dN":[],"in":2,"sibl":[1]},{"t":"cD","p":[1,9,3,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[8,7,5,3,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatDatepicker._observedAttributes = [];
export {ZcatDatepicker};
ZcatDatepicker.register("zcat-datepicker", {
    hash: "ZcatDatepicker_4",
    refHash: "C_zcat-app_app_0"
}); 

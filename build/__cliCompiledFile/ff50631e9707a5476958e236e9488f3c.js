import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-messagebox.js";
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAlert extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
     		self: prop('object'),
			alertThis: prop('object', {default: this }),
			showAlert: prop('boolean', {default: true })

		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({

			closeToaster(){
				this.setData('showAlert', false);
			}
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

ZcatAlert._template = "<template tag-name=\"zcat-alert\"> <lyte-messagebox id=\"showToast\" lt-prop-yield=\"true\" lt-prop-show=\"{{showAlert}}\" lt-prop-type=\"{{status}}\" lt-prop-offset=\"{&quot;top&quot;:&quot;0&quot;}\" lt-prop-duration=\"3000\" lt-prop-transition=\"{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;duration&quot;:&quot;0.2s&quot;}\"> <template is=\"registerYield\" yield-name=\"messageboxYield\"> <div class=\"alert-content-outer {{status}}\"> <div class=\"zcat-dF zcat-align-center {{expHandlers(header,'?:','zcat-gap-6','zcat-gap-4')}} left-alert-content\"> <div class=\"{{expHandlers(header,'?:','zcat-h20 zcat-w20 ','zcat-h16 zcat-w16 ')}}\"> <zcat-icon class=\"zcat-flex-center alert-icon-color\" name=\"{{expHandlers(expHandlers(status,'===','success'),'?:','alert-success',expHandlers(expHandlers(status,'===','info'),'?:','alert-info',expHandlers(expHandlers(status,'===','warning'),'?:','alert-warning',expHandlers(expHandlers(status,'===','error'),'?:','alert-danger',''))))}}\" width=\"{{expHandlers(header,'?:','20','16')}}\" height=\"{{expHandlers(header,'?:','20','16')}}\" stroke=\"{{expHandlers(expHandlers(status,'===','success'),'?:','var(--zcat-toast-icon-line-success)',expHandlers(expHandlers(status,'===','info'),'?:','var(--zcat-toast-icon-line-info)',expHandlers(expHandlers(status,'===','warning'),'?:','var(--zcat-toast-icon-line-warning)',expHandlers(expHandlers(status,'===','error'),'?:','var(--zcat-toast-icon-line-danger)',''))))}}\" strokewidth=\"{{expHandlers(zcatProp.header.left.logo.strokeWidth,'||',1.3)}}\"> </zcat-icon> </div> <div class=\"zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{header}}\" is=\"case\" lc-id=\"lc_id_0\"><p class=\"zcat-subtitle1 zcat-mb-2 alert-primary-text\">{{header}}</p></template></template> <p class=\"{{expHandlers(header,'?:','zcat-body3','zcat-body1')}} zcat-body33 alert-secondary-text {{expHandlers(header,'?:','','no-header')}}\" style=\"white-space: pre-wrap; word-break: break-all; text-indent: -4px;\"> {{desc}} </p> </div> </div> <div class=\"zcat-dF zcat-align-center right-alert-content {{expHandlers(button,'?:','min-w25p','')}}\"> <!-- yet to give yield here - if needed --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{button}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-button zcat-prop=\"{{button}}\" self=\"{{self}}\"> </zcat-button></template></template> <zcat-button self=\"{{alertThis}}\" zcat-prop=\"{ &quot;variant&quot;: &quot;ghost&quot;, &quot;size&quot;: &quot;small&quot;, &quot;color&quot;: &quot;grey&quot;, &quot;type&quot;: &quot;navigation&quot;, &quot;icon&quot;: {&quot;position&quot;: &quot;right&quot;, &quot;name&quot;: &quot;close&quot;, &quot;class&quot;: &quot;zcat-w16 zcat-h16 zcat-stroke-greybtn-icon&quot; }, &quot;callback&quot;: { &quot;name&quot;: &quot;closeToaster&quot; } }\"> </zcat-button> </div> </div> </template> </lyte-messagebox> </template>";;
ZcatAlert._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"a","p":[1,1,1,1]},{"t":"cD","p":[1,1,1,1],"in":3,"sibl":[2]},{"t":"s","p":[1,1,3,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,1,3,3]},{"t":"tX","p":[1,1,3,3,1]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[1,3,5]},{"t":"cD","p":[1,3,5],"in":0}],"dc":[3,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatAlert._observedAttributes = ["self", "alertThis", "showAlert"];
export {ZcatAlert};
ZcatAlert.register("zcat-alert", {
    hash: "ZcatAlert_4",
    refHash: "C_zcat-app_app_0"
}); 

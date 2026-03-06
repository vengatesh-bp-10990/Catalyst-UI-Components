import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js";
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAttention extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			self: prop('object'),
      		zcatProp: prop('object')
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			// async customLbindForAccordion(methodName) {
			// 	const self = this.getData('self');
			// 	const prop = this.getData('zcatProp');
			// 	if (methodName) {
			// 	  await self.executeMethod(
			// 		methodName,
			// 		...Array.prototype.slice.call(arguments, 1)
			// 	  );
			// 	}
			// }
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

ZcatAttention._template = "<template tag-name=\"zcat-attention\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-info\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" fill=\"none\"> <g clip-path=\"url(#clip0_4609_722)\"> <path d=\"M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_4609_722\"> <rect width=\"12\" height=\"12\" fill=\"white\"></rect> </clipPath> </defs> </svg> </div> <div class=\"zcat-attention-container zcat-atten-{{zcatProp.type}}\"> <div class=\"zcat-dF zcat-direction-column zcat-gap-6 zcat-w100p\"> <div class=\"zcat-dF zcat-align-center zcat-gap-4\"> <lyte-svg lt-prop-path=\"#{{zcatProp.icon_name}}\" lt-prop-class=\"{{zcatProp.icon_class}}\"></lyte-svg> <lyte-text class=\"zcat-text-14 {{expHandlers(zcatProp.desc,'?:','zcat-font-semibold','zcat-font-regular')}} zcat-attention-head zcat-w100p\" lt-prop-value=\"{{zcatProp.name}}\"> </lyte-text> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.desc}}\" lc-id=\"lc_id_0\"> <lyte-text class=\"zcat-attention-desc zcat-w100p\" lt-prop-value=\"{{zcatProp.desc}}\"> </lyte-text> </template></template> </div> </div> </template><style>.zcat-attention-container{\n    padding: 10px;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n}\n.zcat-atten-info{\n    border: 1px solid var(--zcat-alerts-info-border);\n    background: var(--zcat-alerts-info-bg);\n}\n.zcat-atten-danger{\n    border: 1px solid var(--zcat-alerts-danger-border);\n    background: var(--zcat-alerts-danger-bg);\n}\n.zcat-atten-success{\n    border: 1px solid var(--zcat-alerts-success-border);\n    background: var(--zcat-alerts-success-bg);\n}\n.zcat-atten-warning{\n    border: 1px solid var(--zcat-alerts-warning-border);\n    background: var(--zcat-alerts-warning-bg);\n}\n.zcat-atten-default{\n    border: 1px solid var(--zcat-attention-default-border);\n    background: var(--zcat-attention-default-bg);\n}\n.zcat-atten-info .zcat-attention-head,.zcat-atten-danger .zcat-attention-head,.zcat-atten-success .zcat-attention-head,.zcat-atten-warning .zcat-attention-head,.zcat-atten-default .zcat-attention-head{\n    color: var(--zcat-alerts-info-text-primary);\n}\n.zcat-atten-info .zcat-attention-desc,.zcat-atten-danger .zcat-attention-desc,.zcat-atten-success .zcat-attention-desc,.zcat-atten-warning .zcat-attention-desc,.zcat-atten-default .zcat-attention-desc{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    color: var(--zcat-alerts-info-text-secondary);\n}\n.zcat-atten-info .zcat-stroke-color{\n    stroke: var(--zcat-alerts-info-icon);\n}\n.zcat-atten-danger .zcat-attention-head{\n    color: var(--zcat-alerts-danger-text-primary);\n}\n.zcat-atten-danger .zcat-attention-desc{\n    color: var(--zcat-alerts-danger-text-secondary);\n}\n.zcat-atten-danger .zcat-stroke-color{\n    stroke: var(--zcat-alerts-danger-icon);\n}\n.zcat-atten-success .zcat-attention-head{\n    color: var(--zcat-alerts-success-text-primary);\n}\n.zcat-atten-success .zcat-attention-desc{\n    color: var(--zcat-alerts-success-text-secondary);\n}\n.zcat-atten-success .zcat-stroke-color{\n    stroke: var(--zcat-alerts-success-icon);\n}\n.zcat-atten-warning .zcat-attention-head{\n    color: var(--zcat-alerts-warning-text-primary);\n}\n.zcat-atten-warning .zcat-attention-desc{\n    color: var(--zcat-alerts-warning-text-secondary);\n}\n.zcat-atten-warning .zcat-stroke-color{\n    stroke: var(--zcat-alerts-warning-icon);\n}\n.zcat-atten-default .zcat-attention-head{\n    color: var(--zcat-attention-default-text-primary);\n}\n.zcat-atten-default .zcat-attention-desc{\n    color: var(--zcat-attention-default-text-secondary);\n}\n.zcat-atten-default .zcat-stroke-color{\n    stroke: var(--zcat-attention-default-icon);\n}\n</style>";;
ZcatAttention._dynamicNodes = [{"t":"a","p":[3]},{"t":"a","p":[3,1,1,1]},{"t":"cD","p":[3,1,1,1],"in":2,"sibl":[1]},{"t":"a","p":[3,1,1,3]},{"t":"cD","p":[3,1,1,3],"in":1,"sibl":[0]},{"t":"s","p":[3,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatAttention._observedAttributes = ["self", "zcatProp"];
export {ZcatAttention};
ZcatAttention.register("zcat-attention", {
    hash: "ZcatAttention_4",
    refHash: "C_zcat-app_app_0"
}); 

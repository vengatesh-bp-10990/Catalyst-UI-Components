import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-hovercard.js";
import './zcat-icon.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-autocomplete.js";
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAutocomplete extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			self: prop("object", {default: this }),
     		zcatProp: prop("object", { watch: true }),
      		featureObj: prop("object", { watch: true }),
			errorMessage: prop("string")
			// autocompleteUserInput: prop('string', { default: '' }),
			// key: prop('string'),
      		// formData: prop('object', { watch: true })
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			defaultOnValueChange(event, lyteElement, b, c) {
				if (this.getMethods("onSelect")) {
				this.executeMethod("onSelect", event, lyteElement);
				}
			}
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			// createNew() {
			// 	//console.log(this.getData('autocompleteUserInput'));
			// }
		}), arg1);
	}

    static observers(arg1) {
    async function errorMessage() {
      const errorMessage = this.getData("errorMessage");
      this.setData("zcatProp.errorMessage", errorMessage);
    }

    return Object.assign(super.observers({
      errorMessage: errorMessage.observes("errorMessage") 
    }), arg1);
  }

    _() {
        _;
    }
}

ZcatAutocomplete._template = "<template tag-name=\"zcat-autocomplete\"> <div class=\"zcat-dF zcat-direction-column zcat-gap-2\"> <div class=\"zcat-dF zcat-gap-2\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-autocomplete-label\">{{zcatProp.label}}</div></template></template><lyte-hovercard lt-prop-width=\"{{expHandlers(zcatProp.tooltip_details.width,'?:',zcatProp.tooltip_details.width,'fit-content')}}\" lt-prop-auto-show=\"true\" lt-prop-keep-alive=\"true\" lt-prop-type=\"callout\" lt-prop-prevent-focus=\"true\" id=\"hovercard\" lt-prop-origin-elem=\"#tooltipInfoMsg{{zcatProp.tooltip_details.id}}\" lt-prop-placement=\"{{expHandlers(zcatProp.tooltip_details.placement,'?:',zcatProp.tooltip_details.placement,'')}}\"> <template is=\"registerYield\" yield-name=\"hoverCardYield\"> <lyte-hovercard-content> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.tooltip_details.yield}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-yield yield-name=\"{{zcatProp.tooltip_details.yield}}\"></lyte-yield></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.tooltip_details.value}}\" is=\"case\" lc-id=\"lc_id_0\"><p>{{zcatProp.tooltip_details.value}}</p></template></template></lyte-hovercard-content> </template> </lyte-hovercard> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.label_opt,'&amp;&amp;',zcatProp.label)}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-autocomplete-label-opt\">(Optional)</div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label_icon}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-flex-center zcat-cP\"> <!-- <lyte-svg lt-prop-path=\"#zcat-icon-info\" lt-prop-class=\"zcat-w12 zcat-h12 zcat-input-label-stroke zcat-dF\" id=\"tooltipInfoMsg{{zcatProp.tooltip_details.id}}\" lyte-hovercard=\"true\"></lyte-svg> --> <zcat-icon id=\"tooltipInfoMsg{{zcatProp.tooltip_details.id}}\" lyte-hovercard=\"true\" class=\"zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template></div> <lyte-autocomplete class=\"zcat-autocomplete {{zcatProp.size}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-invalid','')}} {{zcatProp.class}}\" data-zcqa=\"{{zcatProp.zcqa}}\" error-message=\"{{zcatProp.errorMessage}}\" lt-prop-appearance=\"box\" lt-prop-placeholder=\"{{zcatProp.placeholder}}{{expHandlers(expHandlers(zcatProp.label_opt,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',' (Optional)','')}}\" lt-prop-yield=\"true\" lt-prop-highlight=\"true\" lt-prop-value=\"{{lbind(featureObj[zcatProp.key])}}\" lt-prop-error-message=\"Key not found. Please Create new.\" lt-prop-update-delay=\"undefined\" on-search=\"{{method('defaultOnSearch')}}\" on-select=\"{{method('defaultOnValueChange')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box class=\"autocomplete-dropbox {{zcatProp.size}}\"> <lyte-drop-body class=\"{{zcatProp.size}}\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-drop-item data-value=\"{{item.index}}\"> <lyte-autocomplete-label keywords=\"{{item.keywords}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.menuList_icon}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-autocomplete-icon-warper\"> <lyte-svg lt-prop-path=\"#{{item.icon_name}}\" lt-prop-class=\"{{item.icon_class}} zcat-dF\"></lyte-svg> </div></template></template>{{item.name}} </lyte-autocomplete-label> <lyte-autocomplete-description> {{item.short}} </lyte-autocomplete-description> </lyte-drop-item></template> </lyte-drop-body> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteautocompleteNewBtn\" onclick=\"{{action('createNew')}}\"> Create New <span>\"{{featureObj[zcatProp.key]}}\"</span> </div></template></template></lyte-drop-box> </template> </lyte-autocomplete> </div> </template><style>.zcat-autocomplete.default,.zcat-autocomplete.lyteSm,.zcat-autocomplete.lyteExsm{\n    width: 100%;\n    padding: 0;\n}\n.zcat-autocomplete.lyteSm,lyte-autocomplete.lyteSm lyte-dropdown,lyte-autocomplete.lyteSm lyte-dropdown .lyteDummyEventContainer,.zcat-autocomplete.lyteSm lyte-dropdown lyte-drop-button{\n    height: 28px;\n    min-height: 30px;\n}\n.zcat-autocomplete.lyteExsm,lyte-autocomplete.lyteExsm lyte-dropdown,lyte-autocomplete.lyteExsm lyte-dropdown .lyteDummyEventContainer,.zcat-autocomplete.lyteExsm lyte-dropdown lyte-drop-button{\n    height: 24px;\n    min-height: 26px;\n}\n.zcat-autocomplete.lyteSm .lyteInputBox .lyteField input{\n    padding: 8px 6px;\n    font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n    height: 28px;\n}\n.zcat-autocomplete.lyteExsm .lyteInputBox .lyteField input{\n    padding: 8px 4px;\n    font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-small) var(--zcat-font-family-primary);\n    height: 24px;\n    font-size: 12px;\n}\n.zcat-autocomplete-label{\n    font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-small) var(--zcat-font-family-primary);\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--zcat-inputField-text-label);\n}\n.zcat-autocomplete-label-opt{\n  color: var(--zcat-inputField-text-optional);\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-small) var(--zcat-font-family-primary);\n  font-size: 12px;\n}\n\nlyte-autocomplete.zcat-invalid lyte-dropdown lyte-drop-button,\nlyte-autocomplete.zcat-invalid lyte-dropdown lyte-drop-button:hover,\nlyte-autocomplete.zcat-invalid lyte-dropdown .lyteDummyEventContainer:focus lyte-drop-button,\nlyte-autocomplete.zcat-invalid\n  .lyteDummyEventContainer:focus\n  lyte-drop-button:hover {\n  border-color: var(--zcat-inputField-border-error) !important;\n  background: var(--zcat-inputField-bg-error);\n}\nlyte-autocomplete.zcat-invalid lyte-dropdown.lyteDummyEventContainer lyte-drop-button::before {\n  background-color: var(--zcat-inputField-border-error);\n}\n\n.input-field-disabled .zcat-autocomplete-label{\n  color: var(--zcat-inputField-text-disabled);\n}\n.input-field-disabled .zcat-input-label-stroke{\n  stroke: var(--zcat-inputField-icon-disabled);\n}\n\n.zcat-autocomplete.lyteDropdownDisabled{\n    cursor: not-allowed;\n}\n.zcat-autocomplete.lyteDropdownDisabled lyte-dropdown{\n    pointer-events: none;\n}\n\n.zcat-autocomplete.lyteDropdownDisabled .lyteInputBox .lyteField,.zcat-autocomplete.lyteDropdownDisabled .lyteInputBox .lyteField input{\n  background: var(--zcat-inputField-bg-disabled) !important;\n  color: var(--zcat-inputField-text-disabled) !important;\n  cursor: not-allowed;\n  border-color: var(--zcat-inputField-border-disabled) !important;\n  box-shadow: none;\n}\n.zcat-autocomplete.lyteDropdownDisabled .lyteInputBox .lyteField:hover{\n  border-color: var(--zcat-inputField-border-disabled) !important;\n}\n.zcat-autocomplete.lyteDropdownDisabled lyte-drop-button:hover{\n    border: none;\n}</style>";;
ZcatAutocomplete._dynamicNodes = [{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5]},{"t":"a","p":[1,1,2]},{"t":"r","p":[1,1,2,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"i","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,0],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,1,2],"in":4,"sibl":[3]},{"t":"s","p":[1,1,4],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"a","p":[1,3]},{"t":"r","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"f","p":[1,1,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"tX","p":[0,1,2]},{"t":"cD","p":[0,1],"in":2,"sibl":[1]},{"t":"tX","p":[0,3,1]},{"t":"cD","p":[0,3],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[5,4,2,1,0]}];;
ZcatAutocomplete._observedAttributes = ["self", "zcatProp", "featureObj", "errorMessage"];
export {ZcatAutocomplete};
ZcatAutocomplete.register("zcat-autocomplete", {
    hash: "ZcatAutocomplete_4",
    refHash: "C_zcat-app_app_0"
}); 

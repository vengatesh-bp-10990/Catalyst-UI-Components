import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-hovercard.js';
import './zcat-icon.js';
import './zcat-input.js';
import './zcat-dropdown.js';
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatDoubleField extends Component {
    constructor() {
		super();
	}

    init(){
		const featureObj = this.getData('featureObj');
		const userObj = this.getData('userObj');
		this.setData('featureObj', userObj);

		// To set the size for the seperate inputs 
		const zcatProp = this.getData('zcatProp');
		this.$app.objectUtils(zcatProp, "add", "fieldList[0].fieldObj.size", zcatProp.size);
		this.$app.objectUtils(zcatProp, "add", "fieldList[1].fieldObj.size", zcatProp.size);
	}

    data(arg1) {
		const doubleField = prop("object", {
			default: {
				size: "default",
				label: "Field Label",
				fieldList: [
					{
						type: "textbox", 
						fieldObj: {
							id: "input-id",
							type: "text", 
							width: "200px",
							placeholder: "Enter a text"
						}
					}, 
					{
						type: "dropdown", 
						fieldObj: {
							id: "dropdown-id",
							placeholder: "Select Option", 
							width: "zcat-w400",
							options: [
								{
									name: "India", 
									value: "india"
								}, 
								{
									name: "Pakistan", 
									value: "pakistan"
								}, 
								{
									name: "Gujarat", 
									value: "gujarat"
								}
							]
							
						}

					}
					
				]
			}
		})

		return Object.assign(super.data({
      		featureObj: prop("object", { watch: true }),
			zcatProp: prop("object", {default: {}}, { watch: true }),
			self: prop("object", { default: this }), 
			fieldClass: prop("string", {default: ""}),
			userObj: prop('object', { default: {} })			
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

    optionalHandling(){
		const zcatProp = this.getData('zcatProp');
			if(zcatProp.isOptional){
				if(!zcatProp.label){
					this.$app.objectUtils(zcatProp, "add", "fieldList[0].fieldObj.isOptional", true);
					this.$app.objectUtils(zcatProp, "add", "fieldList[1].fieldObj.isOptional", true);
				}
				else{
					this.$app.objectUtils(zcatProp, "delete", "fieldList[0].fieldObj.isOptional");
					this.$app.objectUtils(zcatProp, "delete", "fieldList[1].fieldObj.isOptional");
				}
		}
	}

    static observers(arg1) {
		async function optionalFields(){
			this.optionalHandling();
		}
		async function observeLabel(){
			this.optionalHandling();
		}

		return Object.assign(super.observers({
			optionalFields: optionalFields.observes('zcatProp.isOptional'),
			observeLabel: observeLabel.observes('zcatProp.label')
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatDoubleField._template = "<template tag-name=\"zcat-double-field\" class=\"zcat-pR\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <!-- <lyte-svg lt-prop-path=\"#zcat-icon-info\" lt-prop-class=\"zcat-w12 zcat-h12 zcat-input-label-stroke \"></lyte-svg> --> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template></div></template></template><div class=\"zcat-dF double-field-outer {{expHandlers(zcatProp.errorMessage,'?:','zcat-invalid','')}}\" error-message=\"{{zcatProp.errorMessage}}\"> <template items=\"{{zcatProp.fieldList}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.type,'===','textbox')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-input self=\"{{self}}\" zcat-prop=\"{{item.fieldObj}}\" field-class=\"{{expHandlers(expHandlers(index,'===',0),'?:','zcat-field-first',expHandlers(expHandlers(index,'===',expHandlers(zcatProp.fieldList.length,'-',1)),'?:','zcat-field-last','zcat-field-mid'))}}\" feature-obj=\"{{lbind(userObj)}}\"> </zcat-input></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.type,'===','dropdown')}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{item.fieldObj}}\" field-class=\"{{expHandlers(expHandlers(index,'===',0),'?:','zcat-field-first',expHandlers(expHandlers(index,'===',expHandlers(zcatProp.fieldList.length,'-',1)),'?:','zcat-field-last','zcat-field-mid'))}}\" feature-obj=\"{{lbind(userObj)}}\"> </zcat-dropdown></template></template></template> </div> </template><style>.zcat-field-first.lyteInputBox .lyteField, .zcat-field-first lyte-drop-button {\n  border-radius: 6px 0 0 6px;\n  left: 1px;\n}\n.zcat-field-last.lyteInputBox .lyteField, .zcat-field-last lyte-drop-button {\n  border-radius: 0 6px 6px 0;\n}\n\n/* Hover & focus handling  */\n.zcat-field-first.lyteInputBox .lyteField:hover\n.zcat-field-first.lyteInputBox.lyteInputFocus .lyteField{\n  z-index: 2;\n}\n.zcat-field-first lyte-dropdown lyte-drop-button:hover,\n.zcat-field-first lyte-dropdown[lt-prop-type=\"multiple\"] lyte-drop-button:hover,\n.zcat-field-first lyte-dropdown .lyteDummyEventContainer:focus lyte-drop-button:hover,\n.zcat-field-first lyte-dropdown .lyteDummyEventContainer:focus lyte-drop-button,\n.zcat-field-first .lyteDropButtonDown,\n.zcat-field-first .lyteDropButtonDown:hover {\n  z-index: 2\n}\n\n.double-field-outer::after{\n    content: attr(error-message);\n    position: absolute;\n    top: 100%;\n    left: 0;\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-family: var(--zcat-font-family-primary);\n    color: var(--zcat-inputField-text-error);\n    padding-top: 2px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* More than 2 field handling  */\n/* .zcat-field-mid.lyteInputBox .lyteField, .zcat-field-mid lyte-drop-button {\n  border-radius: 0;\n  left: 1px;\n}\n.zcat-field-mid.lyteInputBox .lyteField:hover{\n  border-color: red;\n  z-index: 2;\n}\n.zcat-field-last.lyteInputBox .lyteField:hover{\n  border-color: black;\n} */\n\n</style>";;
ZcatDoubleField._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"a","p":[3,1]},{"t":"f","p":[3,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatDoubleField._observedAttributes = ["featureObj", "zcatProp", "self", "fieldClass", "userObj"];
export {ZcatDoubleField};
ZcatDoubleField.register("zcat-double-field", {
    hash: "ZcatDoubleField_4",
    refHash: "C_zcat-app_app_0"
}); 

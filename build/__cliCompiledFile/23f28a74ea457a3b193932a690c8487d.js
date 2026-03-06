import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-radiobutton.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatRadio extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    const defaultProp = {
      variant: '',
      options: [
        {
          label: '',
          value: '',
          desc: '', // for secondary variant && icon class only for variant card
          disabled: '',
        }
      ],
      selected: '',
      name: '',
    };
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object'),
      key: prop('string'),
      formData: prop('object', { watch: true })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      defaultOnChanged(param1, param2, param3, param4) {
        if (this.getMethods('onChanged')) {
          this.executeMethod('onChanged', param1, param2, param3, param4);
        }
      },
      async customLbindForRadioButton(methodName, value, ...args) {
        const zcatProp = this.getData('zcatProp');
        const formData = this.getData('formData');
        const key = this.getData('key');
        const self = this.getData('self');

        if (zcatProp && value) {
          // Update the zcatProp object when a value is selected
          this.$addon.objectUtils(zcatProp, 'add', 'selected', value);
        }

        if (zcatProp && key) {
          // Sync zcatProp.selected → formData.key
          this.setData(`formData.${key}`, zcatProp.selected);
        }

        // If a method name is passed, execute it asynchronously
        if (methodName && typeof this.executeMethod === 'function') {
          await self.executeMethod(methodName, ...args);
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  // static observers() {
  //   //  async function userObjToZcatProp() {
  //   //   debugger
  //   //   const zcatProp = this.getData('zcatProp');
  //   //   const formData = this.getData('formData');
  //   //   const key = this.getData('key');

  //   //   if (formData && key) {
  //   //     // Update zcatProp when user changes formData[key]
  //   //     this.$addon.objectUtils(zcatProp, 'add', 'selected', formData[key]);
  //   //   }
  //   // }

  //   async function zcatPropToUserObj() {
  //     debugger
  //     const zcatProp = this.getData('zcatProp');
  //     const formData = this.getData('formData');
  //     const key = this.getData('key');

  //     if (zcatProp && key) {
  //       // Update user formData when zcatProp.selected changes
  //       this.setData(`formData.${key}`, zcatProp.selected);
  //     }
  //   }

  //   return {
  //     // userObjToZcatProp: userObjToZcatProp.observes('formData.*'),        // user → zcatProp
  //     zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.selected') // zcatProp → user
  //   };
  // }

  _() {
    _;
  }
}

ZcatRadio._template = "<template tag-name=\"zcat-radio\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template> </div></template></template> <div class=\"zcat-dF zcat-direction-column zcat-gap-10 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','primary')}}\" lc-id=\"lc_id_0\"> <div class=\"{{zcatProp.class}} zcat-dF zcat-align-center zcat-gap-24\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-radiobutton id=\"{{item.value}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-label=\"{{item.label}}\" class=\"{{expHandlers(item.label,'?:','','checkboxWutLabel')}}\" lt-prop-value=\"{{item.value}}\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-type=\"default\" lt-prop-disabled=\"{{item.disabled}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" on-before-checked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeChecked,item.value)}}\" on-before-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeUnchecked,item.value)}}\" on-checked=\"{{method('customLbindForRadioButton',zcatProp.onChecked,item.value)}}\" on-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onUnchecked,item.value)}}\" on-changed=\"{{method('defaultOnChanged',item.value)}}\"></lyte-radiobutton></template> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" lc-id=\"lc_id_1\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-radiobutton lt-prop-yield=\"true\" id=\"{{item.value}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-value=\"{{item.value}}\" lt-prop-disabled=\"{{item.disabled}}\" class=\"zcat-secondary-radio-button zcat-w100p primaryRadioBtn {{expHandlers(item.desc,'?:','','checkboxWutSubtxt')}} {{item.class}} {{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:','selected','')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" on-before-checked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeChecked,item.value)}}\" on-before-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeUnchecked,item.value)}}\" on-checked=\"{{method('customLbindForRadioButton',zcatProp.onChecked,item.value)}}\" on-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onUnchecked,item.value)}}\" on-changed=\"{{method('defaultOnChanged',item.value)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <div class=\"zcat-ml-4 zcat-dF zcat-direction-column zcat-gap-2\"> <lyte-text class=\"zcat-text-14 {{expHandlers(item.desc,'?:','zcat-font-semibold','zcat-font-regular')}} zcat-color-dark1 zcat-w100p\" lt-prop-value=\"{{item.label}}\"> </lyte-text> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.desc}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-text class=\"zcat-text-12 zcat-color-dark2 zcat-w100p\" lt-prop-value=\"{{item.desc}}\"> </lyte-text></template></template> </div> </template> </lyte-radiobutton></template> </template></template> </div> </template><style>\n\n/* === Global base styles from reference css/zcat-radio.css === */\nlyte-radiobutton * {\n  box-sizing: border-box;\n}\nlyte-radiobutton {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  display: flex;\n}\nlyte-radiobutton input[type=\"radio\"]:focus ~ .lyteRadioLabel,lyte-radiobutton label:hover .lyteRadioLabel,.lyteRadioDisabled label:hover .lyteRadioLabel{\n  color: var(--zcat-body-text-primary);\n}\n.lyteRadioBtn.lyteDefault,.primaryRadioBtn .lyteRadioBtn.lyteDefault{\n  position: relative;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n.checkboxWutLabel.lyteRadioDisabled .lyteRadioBtn.lyteDefault,.lyteRadioDisabled .lyteRadioBtn.lyteDefault{\n  cursor: not-allowed;\n}\n.checkboxWutLabel .lyteRadioBtn.lyteDefault{\n  width: 14px;\n}\n.primaryRadioBtn .lyteRadioBtn.lyteDefault{\n  align-items: baseline;\n}\n.primaryRadioBtn.checkboxWutSubtxt .lyteRadioBtn.lyteDefault{\n  align-items: center;\n}\n.lyteRadioLabel {\n  margin-left: 4px;\n  width: calc(100% - 14px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n}\n.lyteRadioBtn.lyteDefault input[type='radio'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n}\n.lyteRadioLayer {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: var(--zcat-radio-bg-default);\n  border: 1px solid;\n  border-color: var(--zcat-radio-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  vertical-align: middle;\n  margin-right: 0;\n}\n.lyteRadioBtn:hover .lyteRadioLayer,\n.lyteRadioBtn input[type='radio']:active + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-hover);\n  border-color: var(--zcat-radio-border-hover);\n}\n\n.lyteRadioLayer .lyteRadioCheck {\n  width: 6px;\n  height: 6px;\n  transform: none;\n  position: static;\n  background: transparent;\n}\n\n.lyteRadioBtn.lyteDefault\n  input[type='radio']:checked\n  + .lyteRadioLayer\n  .lyteRadioCheck {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--zcat-radio-inner-default);\n}\n.lyteRadioBtn.lyteDefault input[type='radio']:checked + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked);\n  border-color: var(--zcat-radio-bg-clicked);\n}\n.lyteRadioBtn:hover input[type='radio']:checked + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked-hover);\n}\n\n.lyteRadioBtn.lyteDefault input[type='radio']:disabled + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-disabled);\n  border-color: var(--zcat-radio-border-disabled);\n  cursor: not-allowed;\n  opacity: 1;\n}\n.lyteRadioBtn.lyteDefault\n  input[type='radio']:checked:disabled\n  + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked-disabled);\n  border-color: var(--zcat-radio-bg-clicked-disabled);\n  cursor: not-allowed;\n  opacity: 1;\n}\n.lyteRadioBtn.lyteDefault input[type='radio']:checked:disabled + .lyteRadioLayer .lyteRadioCheck {\n  background-color: var(--zcat-radio-inner-disabled);\n}\n\n/*Keyboard Focus*/\n.lyteRadioBtn.lyteDefault input[type='radio']:checked:focus + .lyteRadioLayer,\n.lyteRadioBtn.lyteDefault input[type='radio']:focus + .lyteRadioLayer {\n  box-shadow: none;\n}\n.zcat-secondary-radio-button.primaryRadioBtn.selected,\n.zcat-secondary-radio-button.primaryRadioBtn {\n  padding: 0;\n}\n.zcat-secondary-radio-button .lyteRadioBtn {\n  width: 100%;\n  padding: 8px 12px;\n}\n.zcat-secondary-radio-button.lyteRadioDisabled .lyteRadioBtn,.primaryRadioBtn.lyteRadioDisabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.primaryRadioBtn {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n}\n.primaryRadioBtn:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.primaryRadioBtn.selected {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-border-default);\n  background: var(--zcat-radio-bg-default);\n}\nzcat-radio * {\n  box-sizing: border-box;\n}\nzcat-radio p {\n  margin: 0;\n}\nzcat-radio h1,\nzcat-radio h2,\nzcat-radio h3,\nzcat-radio h4,\nzcat-radio h5,\nzcat-radio h6 {\n  font-weight: 600 !important;\n  margin: 0;\n}\n\n\n/* === Global base styles from reference css/zcat-radio.css === */\nlyte-radiobutton * {\n  box-sizing: border-box;\n}\nlyte-radiobutton {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  display: flex;\n}\nlyte-radiobutton input[type=\"radio\"]:focus ~ .lyteRadioLabel,lyte-radiobutton label:hover .lyteRadioLabel,.lyteRadioDisabled label:hover .lyteRadioLabel{\n  color: var(--zcat-body-text-primary);\n}\n.lyteRadioBtn.lyteDefault,.primaryRadioBtn .lyteRadioBtn.lyteDefault{\n  position: relative;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n.checkboxWutLabel.lyteRadioDisabled .lyteRadioBtn.lyteDefault,.lyteRadioDisabled .lyteRadioBtn.lyteDefault{\n  cursor: not-allowed;\n}\n.checkboxWutLabel .lyteRadioBtn.lyteDefault{\n  width: 14px;\n}\n.primaryRadioBtn .lyteRadioBtn.lyteDefault{\n  align-items: baseline;\n}\n.primaryRadioBtn.checkboxWutSubtxt .lyteRadioBtn.lyteDefault{\n  align-items: center;\n}\n.lyteRadioLabel {\n  margin-left: 4px;\n  width: calc(100% - 14px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  font-weight: 400;\n}\n.lyteRadioBtn.lyteDefault input[type='radio'] {\n  opacity: 0;\n  position: absolute;\n  height: 0;\n  width: 0;\n}\n.lyteRadioLayer {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: var(--zcat-radio-bg-default);\n  border: 1px solid;\n  border-color: var(--zcat-radio-border-default);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  vertical-align: middle;\n  margin-right: 0;\n}\n.lyteRadioBtn:hover .lyteRadioLayer,\n.lyteRadioBtn input[type='radio']:active + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-hover);\n  border-color: var(--zcat-radio-border-hover);\n}\n\n.lyteRadioLayer .lyteRadioCheck {\n  width: 6px;\n  height: 6px;\n  transform: none;\n  position: static;\n  background: transparent;\n}\n\n.lyteRadioBtn.lyteDefault\n  input[type='radio']:checked\n  + .lyteRadioLayer\n  .lyteRadioCheck {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--zcat-radio-inner-default);\n}\n.lyteRadioBtn.lyteDefault input[type='radio']:checked + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked);\n  border-color: var(--zcat-radio-bg-clicked);\n}\n.lyteRadioBtn:hover input[type='radio']:checked + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked-hover);\n}\n\n.lyteRadioBtn.lyteDefault input[type='radio']:disabled + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-disabled);\n  border-color: var(--zcat-radio-border-disabled);\n  cursor: not-allowed;\n  opacity: 1;\n}\n.lyteRadioBtn.lyteDefault\n  input[type='radio']:checked:disabled\n  + .lyteRadioLayer {\n  background-color: var(--zcat-radio-bg-clicked-disabled);\n  border-color: var(--zcat-radio-bg-clicked-disabled);\n  cursor: not-allowed;\n  opacity: 1;\n}\n.lyteRadioBtn.lyteDefault input[type='radio']:checked:disabled + .lyteRadioLayer .lyteRadioCheck {\n  background-color: var(--zcat-radio-inner-disabled);\n}\n\n/*Keyboard Focus*/\n.lyteRadioBtn.lyteDefault input[type='radio']:checked:focus + .lyteRadioLayer,\n.lyteRadioBtn.lyteDefault input[type='radio']:focus + .lyteRadioLayer {\n  box-shadow: none;\n}\n.zcat-secondary-radio-button.primaryRadioBtn.selected,\n.zcat-secondary-radio-button.primaryRadioBtn {\n  padding: 0;\n}\n.zcat-secondary-radio-button .lyteRadioBtn {\n  width: 100%;\n  padding: 8px 12px;\n}\n.zcat-secondary-radio-button.lyteRadioDisabled .lyteRadioBtn,.primaryRadioBtn.lyteRadioDisabled{\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.primaryRadioBtn {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-outer-border-default);\n  background: var(--zcat-radio-outer-bg-default);\n  cursor: pointer;\n}\n.primaryRadioBtn:hover {\n  box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.primaryRadioBtn.selected {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-radio-border-default);\n  background: var(--zcat-radio-bg-default);\n}\nzcat-radio * {\n  box-sizing: border-box;\n}\nzcat-radio p {\n  margin: 0;\n}\nzcat-radio h1,\nzcat-radio h2,\nzcat-radio h3,\nzcat-radio h4,\nzcat-radio h5,\nzcat-radio h6 {\n  font-weight: 600 !important;\n  margin: 0;\n}\n</style>";;
ZcatRadio._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[5,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatRadio._observedAttributes = ["self", "zcatProp", "key", "formData"];
export { ZcatRadio };

ZcatRadio.register("zcat-radio", {
  hash: "ZcatRadio_4",
  refHash: "C_zcat-app_app_0"
});

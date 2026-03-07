import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-hovercard.js';
import './zcat-icon.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-radiobutton.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatCards extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object'),
      key: prop('string'),
      formData: prop('object')
    }), arg1);
  }

  didConnect() {
    const self = this.getData('self');
    const prop = this.getData('zcatProp');
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      async customLbindForRadioButton(methodName, value, ...args) {
        const zcatProp = this.getData('zcatProp');
        const formData = this.getData('formData');
        const key = this.getData('key');
        const self = this.getData('self');

        if (zcatProp && value) {
          // Update the zcatProp object when a value is selected
          this.$app.objectUtils(zcatProp, 'add', 'selected', value);
        }

        if (zcatProp && key) {
          // Sync zcatProp.selected → formData.key
          this.setData(`formData.${key}`, zcatProp.selected);
        }

        // If a method name is passed, execute it asynchronously
        if (methodName && typeof this.executeMethod === 'function') {
          await self.executeMethod(methodName, ...args);
        }
      },
      async customLbindForCheckbox(methodName, value, input) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');

        if (value) {
          const isChecked = input.checked;
          const selectedValue = isChecked ? value : '';
          const keyValue = isChecked ? value.checked : '';

          this.$app.objectUtils(prop, 'add', 'selected', selectedValue);
          //   self.setData(prop.key, keyValue);
        }

        if (methodName) {
          await self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 2)
          );
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    async function zcatPropToUserObj() {
      const zcatProp = this.getData('zcatProp');
      const formData = this.getData('formData');
      const key = this.getData('key');
      this.setData('formData.' + key, zcatProp.selected);
    }
    async function userObjToZcatProp() {
      const zcatProp = this.getData('zcatProp');
      const formData = this.getData('formData');
      const key = this.getData('key');
      this.$app.objectUtils(zcatProp, 'add', 'selected', formData[key]);
    }
    return Object.assign(super.observers({
      userObjToZcatProp: userObjToZcatProp.observes('formData.*'), // No I18N
      zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.selected') // No I18N
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatCards._template = "<template tag-name=\"zcat-cards\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template></div></template></template><div class=\"zcat-dF zcat-direction-column zcat-gap-10 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.type,'===','default')}}\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-dF zcat-align-center zcat-gap-20 zcat-card-radio-button {{zcatProp.variant}}-card {{zcatProp.class}} {{expHandlers(item.disabled,'?:','disabled','')}}\"> <div class=\"zcat-flex-center zcat-gap-6 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template><lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template></div> </div></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.type,'===','single_sel')}}\" lc-id=\"lc_id_1\"> <div class=\"zcat-dF zcat-align-center zcat-gap-20 {{zcatProp.class}}\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-radiobutton lt-prop-yield=\"true\" id=\"{{item.value}}\" data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-value=\"{{item.value}}\" lt-prop-disabled=\"{{item.disabled}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:','true','false')}}\" class=\"zcat-card-radio-button {{expHandlers(item.class,'?:',item.class,'')}} {{zcatProp.variant}}-card {{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:','selected','')}}\" on-before-checked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeChecked,item.value)}}\" on-before-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onBeforeUnchecked,item.value)}}\" on-checked=\"{{method('customLbindForRadioButton',zcatProp.onChecked,item.value)}}\" on-unchecked=\"{{method('customLbindForRadioButton',zcatProp.onUnchecked,item.value)}}\" on-changed=\"{{method('customLbindForRadioButton',zcatProp.onChanged,item.value)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <div class=\"zcat-flex-center zcat-gap-6 zcat-w100p\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </div> </template> </lyte-radiobutton></template> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.type,'===','multi_sel')}}\" lc-id=\"lc_id_2\"> <div class=\"zcat-dF zcat-align-center zcat-gap-20 {{zcatProp.class}}\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-checkbox lt-prop-yield=\"true\" data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-type=\"{{expHandlers(zcatProp.type,'?:',zcatProp.type,'default')}}\" lt-prop-id=\"{{item.value}}\" lt-prop-disabled=\"{{item.disabled}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:','true','false')}}\" lt-prop-tabindex=\"{{expHandlers(zcatProp.tabindex,'?:',zcatProp.tabindex,'0')}}\" lt-prop-name=\"{{expHandlers(zcatProp.name,'?:',zcatProp.name,'')}}\" lt-prop-value=\"{{item.value}}\" lt-prop-read-only=\"{{expHandlers(zcatProp.readOnly,'?:',zcatProp.readOnly,'false')}}\" lt-prop-fire-on-init=\"{{expHandlers(zcatProp.fireOnInit,'?:',zcatProp.fireOnInit,'false')}}\" class=\"zcat-card-radio-button {{expHandlers(item.class,'?:',item.class,'')}} {{expHandlers(expHandlers(zcatProp.selected,'===',item.value),'?:','selected','unselect')}} {{zcatProp.variant}}-card\" lt-prop-label-class=\"{{expHandlers(zcatProp.labelClass,'?:',zcatProp.labelClass,'')}}\" lt-prop-prevent-callback-observers=\"{{expHandlers(zcatProp.callbackObservers,'?:',zcatProp.callbackObservers,'false')}}\" lt-prop-focus=\"{{expHandlers(zcatProp.focus,'?:',zcatProp.focus,'false')}}\" lt-prop-aria-checkbox=\"{&quot;aria-checked&quot;: &quot;true&quot;}\" lt-prop-data-tabindex=\"group0-1\" lt-prop-show-tooltip=\"{{expHandlers(zcatProp.tooltip,'?:',zcatProp.tooltip,'false')}}\" lt-prop-tooltip-config=\"{&quot;position&quot;: &quot;bottom&quot;, &quot;appearance&quot;: &quot;box&quot;, &quot;margin&quot;: 15, &quot;keeptooltip&quot;: true}\" lt-prop-tooltip-class=\"{{expHandlers(zcatProp.tooltipClass,'?:',zcatProp.tooltipClass,'false')}}\" on-changed=\"{{method('customLbindForCheckbox',zcatProp.onChange,item.value)}}\" on-before-checked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeChecked,item.value)}}\" on-checked=\"{{method('customLbindForCheckbox',zcatProp.onChecked,'')}}\" on-before-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeUnChecked,'')}}\" on-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onUnChecked,'')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <div class=\"zcat-flex-center zcat-gap-6 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template><lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template></div> </template> </lyte-checkbox></template> </div> </template></template> </div> </template><style>.zcat-card-radio-button{\n    position: relative;\n    padding: 0;\n    border-radius: 6px;\n    cursor: pointer;\n    color: var(--zcat-body-text-primary);\n    border: 1px solid var(--zcat-card-border-default);\n}\n.zcat-card-radio-dimension{\n    width: 150px;\n    height: 100px;\n}\n.zcat-card-radio-button .lyteCheckbox.lyteDefault,.zcat-card-radio-button .lyteCheckbox{\n    height: 100%;\n}\n.zcat-card-radio-button .lyteCheckbox .lyteCheckBoxDefault span,.zcat-card-radio-button .lyteCheckbox .lyteCheckBoxPrimary span,.zcat-card-radio-button .lyteCheckbox .lyteCheckBoxDefault span,.zcat-card-radio-button .lyteCheckBoxPrimary{\n    width: 100%;\n}\n.zcat-card-radio-button .lyteRadioLabel{\n    width: 100%;\n    margin: 0;\n}\n.primary-card,.secondary-card,.tertiary-card,.quaternary-card,.bodyBg-card{\n    background: var(--zcat-card-bg-default);\n}\n.secondary-card{\n    background: var(--zcat-card-bg-secondary);\n}\n.tertiary-card{\n    background: var(--zcat-card-bg-tertiary);\n}\n.quaternary-card{\n    background: var(--zcat-card-bg-quaternary);\n}\n.bodyBg-card{\n    background: var(--zcat-card-bg-bodyBg);\n}\n.primary-card:hover,.secondary-card:hover,.tertiary-card:hover,.quaternary-card:hover,.bodyBg-card:hover{\n    border-color: var(--zcat-card-border-hover);\n    background: var(--zcat-card-bg-hover);\n    box-shadow: 0px 0px 6px 1px var(--zcat-shadow-bg-default);\n}\n.secondary-card:hover{\n    background: var(--zcat-card-bg-hover-secondary);\n}\n.tertiary-card:hover{\n    background: var(--zcat-card-bg-hover-tertiary);\n}\n.quaternary-card:hover{\n    background: var(--zcat-card-bg-hover-quaternary);\n}\n.bodyBg-card:hover{\n    background: var(--zcat-card-bg-hover-bodyBg);\n}\n.zcat-card-radio-button.selected,.zcat-card-radio-button.selected:hover{\n    border-color: var(--zcat-card-border-selected);\n    background: var(--zcat-card-bg-selected);\n}\n.zcat-card-radio-button.selected::after {\n    content: '';\n    position: absolute;\n    top: -0.5px;\n    right: 0;\n    background-image: url('data:image/svg+xml,<svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0.5H11C13.7614 0.5 16 2.73858 16 5.5V16.5C7.16344 16.5 0 9.33656 0 0.5Z\" fill=\"%232A65F0\"/><path d=\"M13.3337 4.5L8.75033 9.08333L6.66699 7\" stroke=\"white\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n    width: 16px;\n    height: 16px;\n}\n.zcat-card-radio-button .lyteRadioLayer,.zcat-card-radio-button .lyteCheckBoxDefault::before,.zcat-card-radio-button .lyteCheckbox > input[type='checkbox']:checked + .lyteCheckBoxDefault::after,\n.zcat-card-radio-button .lyteRadioLayer,.zcat-card-radio-button .lyteCheckBoxPrimary::before {\n    display: none;\n}\n\n.zcat-card-radio-button.disabled,.zcat-card-radio-button.lyteRadioDisabled,.zcat-card-radio-button.lyteCheckDisabled,.zcat-card-radio-button.disabled:hover,.zcat-card-radio-button.lyteRadioDisabled:hover,.zcat-card-radio-button.lyteCheckDisabled:hover{\n    background: var(--zcat-card-bg-disabled);\n    color: var(--zcat-body-text-disabled);\n    border: 1px solid var(--zcat-card-border-disabled);\n    cursor: not-allowed;\n    box-shadow: none;\n}\n</style>";;
ZcatCards._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"a","p":[0,1,2]},{"t":"i","p":[0,1,2],"in":1,"sibl":[0]},{"t":"s","p":[0,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"a","p":[1,1],"cn":"lc_id_1"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1,1]},{"t":"i","p":[1,1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"a","p":[1,1],"cn":"lc_id_2"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"a","p":[1,2]},{"t":"i","p":[1,2],"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatCards._observedAttributes = ["self", "zcatProp", "key", "formData"];
export { ZcatCards };
ZcatCards.register("zcat-cards", {
  hash: "ZcatCards_4",
  refHash: "C_zcat-app_app_0"
});

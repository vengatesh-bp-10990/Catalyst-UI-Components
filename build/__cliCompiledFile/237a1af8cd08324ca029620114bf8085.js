import { _defineProperty } from "@slyte/core/src/lyte-utils";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatCheckbox extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object'),
      key: prop('string'),
      formData: prop('object', { watch: true })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      // async customLbindForCheckbox(methodName, value, ...args) {
      //   debugger
      //   const zcatProp = this.getData('zcatProp');
      //   const formData = this.getData('formData');
      //   const key = this.getData('key');

      //   if (zcatProp && value) {
      //     // Update the zcatProp object when a value is selected
      //     this.$addon.objectUtils(zcatProp, 'add', 'selected', value);
      //   }

      //   if (zcatProp && key) {
      //     // Sync zcatProp.selected → formData.key
      //     this.setData(`formData.${key}`, zcatProp.selected);
      //   }

      //    // If a method name is passed, execute it asynchronously
      //   if (methodName && typeof this.executeMethod === 'function') {
      //     await this.executeMethod(methodName, ...args);
      //   }
      // }
      async customLbindForCheckbox(methodName, value, ...args) {
        try {
          const zcatProp = this.getData("zcatProp");
          const formData = this.getData("formData");
          const key = this.getData("key");

          // 1. Update zcatProp.selected when checkbox changes
          if (zcatProp) {
            this.$addon.objectUtils(zcatProp, "add", "selected", !!value);
          }

          // 2. Sync zcatProp.selected → formData.key (if key exists)
          if (formData && key && zcatProp?.selected !== undefined) {
            this.setData(`formData.${key}`, zcatProp.selected);
          }

          // 3. Execute optional callback method asynchronously
          if (methodName && typeof this.executeMethod === "function") {
            await this.executeMethod(methodName, ...args);
          }
        } catch (err) {
          console.error("Error in customLbindForCheckbox:", err);
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatCheckbox._template = "<template tag-name=\"zcat-checkbox\"> <div class=\"zcat-dF zcat-direction-column zcat-gap-10 zcat-w100p\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','primary')}}\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-checkbox lt-prop-type=\"{{expHandlers(zcatProp.type,'?:',zcatProp.type,'default')}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-id=\"{{item.id}}\" lt-prop-disabled=\"{{expHandlers(item.disabled,'?:',item.disabled,'false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" lt-prop-tabindex=\"{{expHandlers(zcatProp.tabindex,'?:',zcatProp.tabindex,'0')}}\" lt-prop-label=\"{{item.label}}\" lt-prop-name=\"{{item.name}}\" lt-prop-value=\"{{item.value}}\" lt-prop-read-only=\"{{expHandlers(zcatProp.readOnly,'?:',zcatProp.readOnly,'false')}}\" lt-prop-fire-on-init=\"{{expHandlers(zcatProp.fireOnInit,'?:',zcatProp.fireOnInit,'false')}}\" class=\"{{expHandlers(zcatProp.class,'?:',zcatProp.class,'')}} {{expHandlers(item.label,'?:','','checkboxWutLabel')}}\" lt-prop-label-class=\"{{expHandlers(zcatProp.labelClass,'?:',zcatProp.labelClass,'')}}\" lt-prop-prevent-callback-observers=\"{{expHandlers(zcatProp.callbackObservers,'?:',zcatProp.callbackObservers,'false')}}\" lt-prop-focus=\"{{expHandlers(zcatProp.focus,'?:',zcatProp.focus,'false')}}\" lt-prop-aria-checkbox=\"{&quot;aria-checked&quot;: &quot;true&quot;}\" lt-prop-data-tabindex=\"group0-1\" lt-prop-show-tooltip=\"{{expHandlers(zcatProp.tooltip,'?:',zcatProp.tooltip,'false')}}\" lt-prop-tooltip-config=\"{&quot;position&quot;: &quot;bottom&quot;, &quot;appearance&quot;: &quot;box&quot;, &quot;margin&quot;: 15, &quot;keeptooltip&quot;: true}\" lt-prop-tooltip-class=\"{{expHandlers(zcatProp.tooltipClass,'?:',zcatProp.tooltipClass,'false')}}\" on-changed=\"{{method('customLbindForCheckbox',zcatProp.onChange,item.value)}}\" on-before-checked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeChecked)}}\" on-checked=\"{{method('customLbindForCheckbox',zcatProp.onChecked,item.value)}}\" on-before-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeUnChecked)}}\" on-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onUnChecked)}}\"></lyte-checkbox></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" lc-id=\"lc_id_1\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-checkbox lt-prop-yield=\"true\" lt-prop-type=\"{{expHandlers(zcatProp.type,'?:',zcatProp.type,'default')}}\" data-zcqa=\"{{item.zcqa}}\" lt-prop-id=\"{{item.id}}\" lt-prop-disabled=\"{{expHandlers(item.disabled,'?:',item.disabled,'false')}}\" lt-prop-checked=\"{{expHandlers(expHandlers(formData[zcatProp.key],'===',item.value),'?:',true,false)}}\" lt-prop-tabindex=\"{{expHandlers(zcatProp.tabindex,'?:',zcatProp.tabindex,'0')}}\" lt-prop-name=\"{{expHandlers(zcatProp.name,'?:',zcatProp.name,'')}}\" lt-prop-value=\"{{item.value}}\" lt-prop-read-only=\"{{expHandlers(zcatProp.readOnly,'?:',zcatProp.readOnly,'false')}}\" lt-prop-fire-on-init=\"{{expHandlers(zcatProp.fireOnInit,'?:',zcatProp.fireOnInit,'false')}}\" class=\"zcat-secondary-checkbox-button zcat-w100p primaryCheckBoxBtn {{expHandlers(item.desc,'?:','','checkboxWutSubtxt')}}\" lt-prop-label-class=\"{{expHandlers(zcatProp.labelClass,'?:',zcatProp.labelClass,'')}}\" lt-prop-prevent-callback-observers=\"{{expHandlers(zcatProp.callbackObservers,'?:',zcatProp.callbackObservers,'false')}}\" lt-prop-focus=\"{{expHandlers(zcatProp.focus,'?:',zcatProp.focus,'false')}}\" lt-prop-aria-checkbox=\"{&quot;aria-checked&quot;: &quot;true&quot;}\" lt-prop-data-tabindex=\"group0-1\" lt-prop-show-tooltip=\"{{expHandlers(zcatProp.tooltip,'?:',zcatProp.tooltip,'false')}}\" lt-prop-tooltip-config=\"{&quot;position&quot;: &quot;bottom&quot;, &quot;appearance&quot;: &quot;box&quot;, &quot;margin&quot;: 15, &quot;keeptooltip&quot;: true}\" lt-prop-tooltip-class=\"{{expHandlers(zcatProp.tooltipClass,'?:',zcatProp.tooltipClass,'false')}}\" on-changed=\"{{method('customLbindForCheckbox',zcatProp.onChange)}}\" on-before-checked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeChecked)}}\" on-checked=\"{{method('customLbindForCheckbox',zcatProp.onChecked)}}\" on-before-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onBeforeUnChecked)}}\" on-unchecked=\"{{method('customLbindForCheckbox',zcatProp.onUnChecked)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <div class=\"{{expHandlers(expHandlers(zcatProp.type,'===','switch'),'?:','','zcat-ml-4')}} zcat-dF zcat-direction-column zcat-gap-2\"> <lyte-text class=\"zcat-text-14 {{expHandlers(item.desc,'?:','zcat-font-semibold','zcat-font-regular')}} zcat-color-dark1 zcat-w100p\" lt-prop-value=\"{{item.label}}\"> </lyte-text> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.desc}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-text class=\"zcat-text-12 zcat-color-dark2 zcat-w100p\" lt-prop-value=\"{{item.desc}}\"> </lyte-text></template></template> </div> </template> </lyte-checkbox></template> </template></template> </div> </template>";;
ZcatCheckbox._dynamicNodes = [{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatCheckbox._observedAttributes = ["self", "zcatProp", "key", "formData"];
export { ZcatCheckbox };
ZcatCheckbox.register("zcat-checkbox", {
  hash: "ZcatCheckbox_4",
  refHash: "C_zcat-app_app_0"
});

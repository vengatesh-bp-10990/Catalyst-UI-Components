import { Component } from '../component.js';
import { prop } from '@slyte/core';
class ZcatCheckbox extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object'),
      key: prop('string'),
      formData: prop('object', { watch: true })
    };
  }

  static methods() {
    return {
      onSimpleChecked() {
        let zcatProp = this.getData('zcatProp');
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, true, zcatProp);
        }
      },
      onSimpleUnchecked() {
        let zcatProp = this.getData('zcatProp');
        let self = this.getData('self');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, false, zcatProp);
        }
      },
      async customLbindForCheckbox(methodName, value, ...args) {
        try {
          const zcatProp = this.getData("zcatProp");
          const formData = this.getData("formData");
          const key = this.getData("key");

          // 1. Update zcatProp.selected when checkbox changes
          if (zcatProp) {
            this.$app.objectUtils(zcatProp, "add", "selected", !!value);
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
    };
  }

  static actions() {
    return {};
  }

  static observers() {
    return {
    };
  }
}

export { ZcatCheckbox };

import { Component } from '@slyte/component';
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

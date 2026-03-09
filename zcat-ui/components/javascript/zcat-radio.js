import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatRadio extends Component {
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
      }
    };
  }

  static actions() {
    return {};
  }

}

export { ZcatRadio };

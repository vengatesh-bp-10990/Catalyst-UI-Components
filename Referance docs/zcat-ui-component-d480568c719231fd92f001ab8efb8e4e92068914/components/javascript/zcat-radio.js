import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatRadio extends Component {
  constructor() {
    super();
  }

  data() {
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
    };
  }

  static actions() {
    return {};
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

}

export { ZcatRadio };

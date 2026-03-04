import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatInput extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      zcatProp: prop('object', { watch: true }),
      featureObj: prop('object', { watch: true }),
      errorMessage: prop('string'),
      errorObj: prop('object', { watch: true }),
      value: prop('string')
    };
  }

  static methods() {
    return {
      defaultOnValueChange(event, lyteElement, b, c) {
        const zcatProp = this.getData('zcatProp');
        if(this.$node.querySelector('lyte-input').getData('ltPropValue').length > 0){
          // this.$addon.objectUtils(zcatProp, "delete", "errorMessage");
          // this.setData('errorMessage', '');
          
          const errorObject = this.getData('errorObj');
          if(errorObject){
              this.$addon.objectUtils(errorObject, "delete", zcatProp.key);
          }
          else if(this.getData('errorMessage')){
              this.setData('errorMessage', '');
          }
        } 

        if (this.getMethods('onValueChange')) {
          this.executeMethod('onValueChange', event, lyteElement, b, c);
        }
      },
      defaultOnFocus(param1, param2, param3) {        
        if (this.getMethods('onFocus')) {
          this.executeMethod('onFocus', param1, param2, param3);
        }
      },
      defaultOnClear(param1, param2, param3) {        
        if (this.getMethods('onClear')) {
          this.executeMethod('onClear', param1, param2, param3);
        }
      },
      defaultBeforeRender(param1, param2, param3) {        
        if (this.getMethods('beforeRender')) {
          this.executeMethod('beforeRender', param1, param2, param3);
        }
      },
      defaultAfterRender(param1, param2, param3) {        
        if (this.getMethods('afterRender')) {
          this.executeMethod('afterRender', param1, param2, param3);
        }
      }, 
      defaultOnDateChange(param1, param2, param3) {        
        if (this.getMethods('onDateChange')) {
          this.executeMethod('onDateChange', param1, param2, param3);
        }
      }

    };
  }

  static actions() {
    return {};
  }

  static observers() {
    // async function errorMessage() {
    //   const errorMessage = this.getData('errorMessage');
    //   this.setData('zcatProp.errorMessage', errorMessage);
    // }

    return {
      // errorMessage: errorMessage.observes('errorMessage')
    };
  }
}

export { ZcatInput };

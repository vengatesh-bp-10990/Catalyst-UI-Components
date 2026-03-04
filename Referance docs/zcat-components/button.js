import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatButton extends Component {
  constructor() {
    super();
  }

  data() {
    // const defaultProp = {
    //   menu: {
    //     id: '',
    //     list: [
    //       {
    //         label: '',
    //         icon: {
    //           Position: '',
    //           name: '',
    //           class: ''
    //         }
    //       }
    //     ]
    //   },
    //   variant: 'primary',
    //   class: '',
    //   disabled: false,
    //   loading: false,
    //   size: '',
    //   label: '',
    //   icon: {
    //     Position: '',
    //     name: '',
    //     class: ''
    //   },
    //   callback: {
    //     name: '',
    //     arguments: []
    //   }
    // };

    const defaultProp = {
      menu: {
        id: '',
        list: [
          {
            label: '',
            icon: {
              Position: '',
              name: '',
              class: ''
            },
            callback: {
                name: '',
                arguments: []
              }
          }
        ]
      },
      variant: '',      // fill, outline, grey, ghost 
      color: '',
      disabled: false,      // true, false
      loading: false,      // true, false
      size: 'default',      // default, large, small, extra-small    
      label: 'SYNC NOW',
      type: '',         // navigation, split
      icon: {
        position: 'right',   // right, left     
        name: '',             // icon_name = zcat-icon-edit
        class: '' 
      },      
      callback: {
        name: '',
        arguments: []
      },
      ltPropClassCss: "",
      classCss: "",
      width: ""
    };

    return {
      self: prop('object'),
      zcatProp: prop('object')
    };
  }

  static methods() {
    return {
    };
  }

  static actions() {
    return {
      async customLbindForButtonClick(a, b, c, d) {
        console.log("zcat-button.js----------")
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (prop.callback.name && prop.callback.type !== 'submit') {
          if(prop.callback?.arguments?.length) {
            await self.executeMethod(prop.callback.name, prop.callback.arguments);
          } else {
            await self.executeMethod(prop.callback.name);
          }
        }
      },
      async customLbindForMenuClick(item) {
        const self = this.getData('self');
        if (item.callback.name) {
          await self.executeMethod(item.callback.name, item);
        }
      },

      buttonClick(a, b, c){
        this.executeMethod('clickAction', a, b, c);
      }
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatButton };

import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatSubHeader extends Component {
  constructor() {
    super();
  }

  // init() {
  //   // @ts-ignore
  //   const currentRoute = app.$router.getRouteInstance().navigation.target;
  
  //   const tabs = this.getData('zcatProp.tabs.list');
  //   if (!tabs) {return};
  
  //   const matchedTab = tabs.find(tab => currentRoute.startsWith(tab.route));
  
  //   if (matchedTab) {
  //     this.setData('zcatProp.tabs.selectedTab', matchedTab.route);
  //   }
  // }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object')
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      async tabClick(item, methodName,level) {
        if (methodName) {
          const self = this.getData('self');
          await self.executeMethod(
            methodName,
            item
          );
        }
        // if(level) {
        //   document.querySelector(`a[data-name="${item.value}"]`).classList.add('active-tab');
        // }
      },
      async customLbindForSubHeaderMenu(methodName, item) {
        const self = this.getData('self');

        if (methodName) {
          await self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 1)
          );
        }
      }
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatSubHeader };

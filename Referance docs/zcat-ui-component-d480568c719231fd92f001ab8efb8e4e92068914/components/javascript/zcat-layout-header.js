import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
class ZcatLayoutHeader extends Component {
  constructor() {
    super();
  }

  data() {
    const defaultProp = {
      left: {
        yield: '',
        search: {
          querySelector:
            '{"scope" : "lyte-tbody", "search" : "lyte-td:first-of-type", "target" : "lyte-tr"}',
          placeholder: 'Search',
          width: '250px',
          onSearch: 'onSearchEventListener'
        },
        title: {
          name: '',
          class: ''
        },
        desc: {
          name: '',
          class: ''
        }
      },
      center: {
        tabs: {
          selectedTab: '',
          list: [
            {
              label: '',
              value: ''
            }
          ]
        }
      },
      right: {
        yield: '',
        list: []
      }
    };

    return {
      self: prop('object'),
      zcatProp: prop('object')
    };
  }

  static methods() {
    return {
      async customLbindForSearch(methodName) {
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

  static actions() {
    return {
      async tabClick(item, methodName) {
        if (methodName) {
          const self = this.getData('self');
          await self.executeMethod(methodName, item);
        }
      },
      async setActiveTab(item) {
        const self = this.getData('self');
        if (this.getData('zcatProp.center.tabs.selectedTab') != item.value) {
          this.setData('zcatProp.center.tabs.selectedTab', item.value);
        }
        let methodName = item.callback.name;
        if (methodName) {
          await self.executeMethod(methodName, item);
        }
      }
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatLayoutHeader };

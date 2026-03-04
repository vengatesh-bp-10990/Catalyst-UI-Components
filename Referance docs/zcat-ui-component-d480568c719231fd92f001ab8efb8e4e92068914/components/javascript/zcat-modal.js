import {Component} from "@slyte/component";
import { prop } from '@slyte/core';

class ZcatModal extends Component {
	constructor() {
		super();
	}

  // init(){
  //   if(!this.getData("featureObj")) {
  //       this.setData("featureObj", this.getData("featureObj"));
  //   }
  // }
  // init() {
  //   const data = this.getData('zcatProp.footer.right');
  //   const submitData = data.filter((item) => item.callback.type === 'submit');
  //   this.setData('submit', submitData[0]);
  // }

  data() {
    const defaultProp = {
      id: '',
      width: '',
      transition: '',
      isFormLoading: false,
      currentPage: 0,
      header: {
        left: {
          yield: '',
          title: {
            name: '',
            class: ''
          },
          desc: {
            name: '',
            class: ''
          }
        },
        right: {
          yield: '',
          list: []
        },
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
      body: [
        [
          {
            class: '',
            yield: '',
            title: {
              name: '',
              class: ''
            },
            desc: {
              name: '',
              class: ''
            },
            list: [
              {
                key_name: 'bucket_name',
                type: 'input',
                value: 'bucket_name',
                label: 'Bucket Name',
                placeholder: 'Enter Bucket Name',
                onValueChange: 'convertToLowerCase'
              }
            ]
          },
          {
            yield: 'bucket_configuration_details'
          }
        ]
      ],
      footer: {
        left: [
          {
            variant: 'secondary',
            label: 'CLI Deploy',
            callback: {
              name: 'openCliDeployModal'
            }
          }
        ],
        right: [
          {
            variant: 'secondary',
            label: 'Cancel',
            callback: {
              name: 'closeCliDeployModal'
            }
          },
          {
            variant: 'secondary',
            label: 'CLI Deploy',
            icon: {
              position: 'left',
              name: 'zcat-icon-clideploy',
              class: 'zcat-w14 zcat-h16'
            },
            callback: {
              type: 'submit',
              name: 'submitCliDeployModal'
            }
          }
        ]
      }
    };
    return {
      self: prop('object'),
      // zcatProp: prop('object'),
      submit: prop('object'),
      hasPagination: prop('boolean'),
      zcatProp: prop("object", { watch: true }),
      isPopUpOpen: prop("boolean", false)
      // featureObj: prop("object", { watch: true }),
    };
  }

  resetBoxShadow() {
    const zcatProp = this.getData('zcatProp');
    let modalBody = document.querySelector(
      `lyte-modal-content[data-name='${zcatProp.id}']`
    );

    if (modalBody) {
      const applyBoxShadow = () => {
        modalBody.previousElementSibling.style = '';
        modalBody.nextElementSibling.style = '';
        if (modalBody.scrollHeight > modalBody.clientHeight) {
          modalBody.nextElementSibling.style =
            'box-shadow: var(--zcat-shadow-dark-top)';
        }

        const id = this.getData('zcatProp.id');
        document.querySelector(`lyte-modal#${id}`).alignModal();
      };

      // Initial apply
      applyBoxShadow();

      // Scroll logic
      modalBody.onscroll = function () {
        if (modalBody.scrollHeight > modalBody.clientHeight) {
          modalBody.previousElementSibling.style =
            modalBody.scrollTop == 0
              ? ''
              : 'box-shadow: var(--zcat-shadow-dark-bottom)';
          modalBody.nextElementSibling.style =
            modalBody.scrollTop + modalBody.clientHeight ==
            modalBody.scrollHeight
              ? ''
              : 'box-shadow: var(--zcat-shadow-dark-top)';
        }
      };

      // Watch for height changes (accordion open/close, dynamic content)
      const resizeObserver = new ResizeObserver(() => {
        applyBoxShadow();
      });
      resizeObserver.observe(modalBody);
    }
  }

  static methods() {
    return {
      onAfterModalOpen() {
        this.setData('isPopUpOpen', true);
        this.resetBoxShadow();
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');

        const outletEl = document.getElementById('outlet');
        if (outletEl) {
          // outletEl.style.filter = 'blur(1px)';
        }

        const methodName = zcatProp?.callback?.onOpen;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }

      },
      onModalClose() {
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');

        const outletEl = document.getElementById('outlet');
        if (outletEl) {
          outletEl.style.filter = 'none';
        }

        const methodName = zcatProp?.callback?.onClose;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }

        this.setData('isPopUpOpen', false);
                
      },
      onBeforeModalClose(){
        const self = this.getData('self');
        const zcatProp = this.getData('zcatProp');
        
        const outletEl = document.getElementById('outlet');
        if(outletEl){
          outletEl.style.filter = '';
        }

        const methodName = zcatProp?.callback?.onBeforeClose;
        if (methodName) {
          self.executeMethod(
            methodName,
            ...Array.prototype.slice.call(arguments, 0)
          );
        }
      }
    };
  }

  static actions() {
    return {
      routeChange(route) {

        const outletEl = document.getElementById('outlet');
          if (outletEl && outletEl.style.filter == 'blur(1px)') {
            outletEl.style.filter = 'none';
        }


        // this.setData('zcatProp.header.tabs.selectedTab', route);
        if(this.getData('zcatProp.header.tabsPrimary')){
          this.setData('zcatProp.header.tabsPrimary.selectedTab', route);
        }
        else if(this.getData('zcatProp.header.tabsSecondary')){
          this.setData('zcatProp.header.tabsSecondary.selectedTab', route);
        }
      },
      async submitForm(event) {
        console.log('async submitForm');
        event.preventDefault();
        event.stopPropagation();
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (this.getData('submit').callback.name) {
          await self.executeMethod(
            this.getData('submit').callback.name,
            prop.callback?.arguments
          );
        }
      },
      async customLbindForFormHeaderTab(item, index) {
        const self = this.getData('self');
        // this.tabSwitching(item, index);         


        if (item.callback.name) {
          await self.executeMethod(item.callback.name, item, index);
        }
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
    async function resetBoxShadow() {
      this.resetBoxShadow();
      const id = this.getData('zcatProp.id');
      document.querySelector(`lyte-modal#${id}`).alignModal();
    }

    return {
      // resetBoxShadow: resetBoxShadow.observes('zcatProp.currentPage') // No I18N
    };
  }

}

export {ZcatModal}; 

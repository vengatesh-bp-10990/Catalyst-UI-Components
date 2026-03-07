import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-avatar.js';
import './zcat-button.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-modal.js";
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

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

  data(arg1) {
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
    return Object.assign(super.data({
      self: prop('object'),
      // zcatProp: prop('object'),
      submit: prop('object'),
      hasPagination: prop('boolean'),
      zcatProp: prop("object", { watch: true }),
      isPopUpOpen: prop("boolean", false)
      // featureObj: prop("object", { watch: true }),
    }), arg1);
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

  static methods(arg1) {
    return Object.assign(super.methods({
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
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
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
    }), arg1);
  }

  static observers(arg1) {
    async function resetBoxShadow() {
      this.resetBoxShadow();
      const id = this.getData('zcatProp.id');
      document.querySelector(`lyte-modal#${id}`).alignModal();
    }

    return Object.assign(super.observers({
      // resetBoxShadow: resetBoxShadow.observes('zcatProp.currentPage') // No I18N
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatModal._template = "<template tag-name=\"zcat-modal\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-three-dots\" viewBox=\"0 0 14 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> <circle cx=\"7\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> <circle cx=\"12\" cy=\"2\" r=\"1\" fill=\"#101F3E\" stroke=\"#101F3E\"></circle> </svg> <svg id=\"zcat-icon-avatar\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M13.3333 14C13.3333 13.0696 13.3333 12.6044 13.2185 12.2259C12.9599 11.3736 12.293 10.7067 11.4407 10.4482C11.0622 10.3333 10.597 10.3333 9.66662 10.3333H6.3333C5.40292 10.3333 4.93773 10.3333 4.5592 10.4482C3.70693 10.7067 3.03999 11.3736 2.78145 12.2259C2.66663 12.6044 2.66663 13.0696 2.66663 14M11 5C11 6.65685 9.65681 8 7.99996 8C6.3431 8 4.99996 6.65685 4.99996 5C4.99996 3.34315 6.3431 2 7.99996 2C9.65681 2 11 3.34315 11 5Z\" stroke=\"#4D618A\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-modal id=\"{{zcatProp.id}}\" lt-prop-show=\"false\" lt-prop-show-close-button=\"false\" lt-prop-width=\"{{expHandlers(zcatProp.width,'?:',zcatProp.width,'600px')}}\" lt-prop-close-on-escape=\"true\" lt-prop-transition=\"{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;duration&quot;:&quot;0.5&quot;}\" lt-prop-allow-multiple=\"true\" on-show=\"{{method('onAfterModalOpen')}}\" on-close=\"{{method('onModalClose')}}\" on-before-close=\"{{method('onBeforeModalClose')}}\" lt-prop-wrapper-class=\"{{expHandlers(zcatProp.deleteModalInput,'?:','delete-modal--input','')}} {{expHandlers(zcatProp.deleteModalNoInput,'?:','delete-modal--noinput','')}}\"> <template is=\"registerYield\" yield-name=\"modal\"> <form if=\"{{lbind(isPopUpOpen)}}\" class=\"{{expHandlers(zcatProp.isFormLoading,'?:','modal-loader','')}}\" onsubmit=\"{{action('submitForm',event)}}\"> <lyte-modal-header data-name=\"{{zcatProp.id}}\"> <div class=\"zcat-form-header\"> <div class=\"zcat-left-alignment\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.frontYield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{zcatProp.left.frontYield}}\"></lyte-yield> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.header.left.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div> <zcat-avatar zcat-prop=\"{{zcatProp.header.left.avatar}}\" self=\"{{self}}\"> </zcat-avatar> </div></template></template><h5> {{zcatProp.header.left.title.name}} </h5> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.badge}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{zcatProp.header.left.badge}}\"> </zcat-label> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.left.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{zcatProp.left.yield}}\"></lyte-yield> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.header.left.desc.name}}\" is=\"case\" lc-id=\"lc_id_0\"><p class=\"zcat-text-12 zcat-color-dark2 zcat-mt-4\">{{zcatProp.header.left.desc.name}}</p></template></template></div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.tabsSecondary}}\" lc-id=\"lc_id_0\"> <div class=\"zcat-subheader-tabs zcat-secondary-tab\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header.tabsSecondary.list}}\" item=\"item\" index=\"index\"> <go-to lt-prop-route=\"{{item.route}}\" lt-prop-dp=\"{{item.dynamicParams}}\" lt-prop-qp=\"{{item.queryParams}}\" lt-prop-class=\"zcat-link zcat-text-12\" lt-prop-custom=\"\" onclick=\"{{action('routeChange',item.route)}}\"> <a class=\"{{expHandlers(expHandlers(zcatProp.header.tabsSecondary.selectedTab,'==',item.route),'?:','active-tab','')}}\" data-zcqa=\"{{item.zcqa}}-{{index}}\">{{item.label}}</a> </go-to> </template> </div> </template></template> <div class=\"zcat-right-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.header.tabsPrimary}}\" lc-id=\"lc_id_0\"> <div class=\"zcat-subheader-tabs\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header.tabsPrimary.list}}\" item=\"item\" index=\"index\"> <go-to lt-prop-route=\"{{item.route}}\" lt-prop-dp=\"{{item.dynamicParams}}\" lt-prop-qp=\"{{item.queryParams}}\" lt-prop-class=\"zcat-link zcat-text-12\" lt-prop-custom=\"\" onclick=\"{{action('routeChange',item.route)}}\"> <a class=\"{{expHandlers(expHandlers(zcatProp.header.tabsPrimary.selectedTab,'==',item.route),'?:','active-tab','')}}\" data-zcqa=\"{{item.zcqa}}-{{index}}\">{{item.label}}</a> </go-to> </template> </div> </template></template> </lyte-modal-header> <lyte-modal-content data-name=\"{{zcatProp.id}}\"> <lyte-yield yield-name=\"modal_body\" error-prop=\"{{zcatProp.error}}\" self=\"{{self}}\" data=\"{{zcatProp.body}}\"> </lyte-yield> </lyte-modal-content> <lyte-modal-footer data-name=\"{{zcatProp.id}}\" class=\"zcat-form-footer\"> <div class=\"zcat-left-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.footer.left}}\" lc-id=\"lc_id_0\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.footer.left}}\" item=\"item\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.yield,'!')}}\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{item}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </template> </template></template> </div> <div class=\"zcat-right-alignment\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.footer.right}}\" lc-id=\"lc_id_0\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.footer.right}}\" item=\"item\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.yield,'!')}}\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{item}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{item.yield}}\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"{{item.yield}}\"></lyte-yield> </template></template> </template> </template></template> </div> </lyte-modal-footer> </form> </template> </lyte-modal> </template><style>form lyte-modal-header .primary-tabs lyte-tab-title{\n    border-bottom: 1px solid var(--zcat-color-primarylight);\n}\n\n\n/* modal tab  */\n\n  .zcat-subheader-tabs {\n    width: 100%;\n    /* height: 48px; */\n    display: flex;\n    gap: 5px;\n    padding: 0 14px;\n    background: var(--zcat-tabs-primary-bg);\n    /* border-bottom: 1px solid var(--zcat-tabs-primary-border-default); */\n  }\n  .zcat-subheader-tabs a {\n    font-size: 14px;\n    font-family: var(--zcat-font-family-primary);\n    color: var(--zcat-tabs-primary-text-default);\n    text-decoration: none;\n    /* padding: 15px 10px; */\n    padding: 0 8px;\n    cursor: pointer;\n    /* height: 48px; */\n    display: inline-flex;\n    font-weight: 400;\n    padding: 4px 8px;\n  }\n  .zcat-subheader-tabs a:hover {\n    cursor: pointer;\n    color: var(---zcat-tabs-primary-text-hover) !important;\n    background: var(--zcat-tabs-primary-bg-hover);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-hover);\n    border-radius: 4px 4px 0px 0px;\n  }\n  .zcat-subheader-tabs a.active-tab {\n    color: var(--zcat-tabs-primary-text-active) !important;\n    font-family: var(--zcat-font-family-primary);\n    border-bottom: 2px solid var(--zcat-tabs-primary-border-active);\n    font-weight: 500;\n    border-radius: 4px 4px 0px 0px;\n  }\n  \n.header-border{\n    border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n.zcat-subheader-tabs.zcat-secondary-tab{\n    width:fit-content;\n    padding: 4px;\n    border-radius: 6px;\n    background: var(--zcat-tabs-secondary-bg-default);\n    display: flex;\n    gap: 4px;\n}\n\n.zcat-subheader-tabs.zcat-secondary-tab a {\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 6px;\n    /* height: 20px; */\n  }\n  .zcat-subheader-tabs.zcat-secondary-tab a:hover {\n    cursor: pointer;\n    color: var(---zcat-tabs-secondary-text-hover) !important;\n    background: var(--zcat-tabs-secondary-bg-hover);\n    border-bottom: none;\n  }\n  .zcat-subheader-tabs.zcat-secondary-tab a.active-tab {\n    color: var(--zcat-tabs-secondary-text-active) !important;\n    font-family: var(--zcat-font-family-primary);\n    border-bottom: none;\n    font-weight: 500;\n    background-color: var(--zcat-tabs-secondary-bg-active);\n    border-radius: 4px;\n  }\n /* .zcat-primary-tab-present{\n    height: calc(100% - 79px);\n  } */\n  .secondary-tab-height{\n    height: 48px;\n  }\n\n\n.lyteModal lyte-modal-header .zcat-subheader-tabs{\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n\n.delete-modal--noinput .lyteModal{\n  width: 414px !important;\n}\n.delete-modal--input .lyteModal{\n  width: 548px !important;\n}\n\n  \n\n/* === Global base styles from reference css/zcat-modal.css === */\nlyte-wormhole * {\n  box-sizing: border-box;\n}\n.lyteModal {\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n  margin-top: -24px;\n  margin-left: -27px;\n}\nlyte-modal-header {\n  color: var(--zcat-body-text-primary);\n  font-family: var(--zcat-font-family-primary);\n  padding: 25px;\n  font-weight: 600;\n}\n/* lyte-modal-content {\n  padding: 8px 25px;\n} */\nlyte-modal-footer {\n  padding: 15px 25px 25px;\n}\nlyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\nlyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  opacity: unset !important;\n  transition: none;\n}\nlyte-modal-content {\n  padding: 8px 24px;\n  max-height: calc(100vh - 200px) !important;\n  overflow-y: auto;\n  color: var(--zcat-body-text-primary);\n}\nlyte-modal-content > * {\n  display: block;\n}\nform lyte-modal-footer {\n  padding: 0;\n}\nform lyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\n/* lyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  /* opacity: 0.3; \n  transition: none;\n} */\nform lyte-modal-header {\n  font-family: var(--zcat-font-family-primary);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\nform lyte-modal-header .zcat-form-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  width: 100%;\n  background: var(--zcat-popup-bg);\n  border-radius: 10px 10px 0 0;\n}\nform lyte-modal-header .zcat-form-header .zcat-left-alignment {\n  /* display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 10px; */\n}\nform lyte-modal-header .zcat-form-header .zcat-right-alignment {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 10px;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 28px;\n  background: var(--zcat-color-grey2);\n  border: 1px solid var(--zcat-color-grey1);\n  border-radius: 6px;\n  cursor: pointer;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn:hover {\n  background: var(--zcat-color-primarylight);\n  border-color: var(--zcat-color-grey1);\n}\nform lyte-modal-header .zcat-form-header-tabs {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  gap: 5px;\n  padding: 0 16px;\n  background: var(--zcat-color-white);\n  border-bottom: 1px solid var(--zcat-color-primarylight);\n}\nform lyte-modal-header .zcat-form-header-tabs div {\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-color-dark1);\n  padding: 0px 10px;\n  cursor: pointer;\n  display: inline-flex;\n}\nform lyte-modal-header .zcat-form-header-tabs div:hover {\n  cursor: pointer;\n  color: var(--zcat-color-primary) !important;\n}\nform lyte-modal-header .zcat-form-header-tabs div.active-tab {\n  color: var(--zcat-color-primary) !important;\n  font-family: var(--zcat-font-family-primary);\n  border-bottom: 2px solid var(--zcat-color-primary);\n  font-weight: 600;\n}\nform lyte-modal-footer.zcat-form-footer {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px 24px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-left-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 16px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-right-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 16px;\n}\n\n/* popup loader component */\n.modal-loader::before {\n  content: '';\n  position: absolute;\n  border: 3px solid var(--zcat-loader-content-primary);\n  border-radius: 50%;\n  border-top: 3px solid var(--zcat-loader-round-primary);\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n  z-index: 2;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n}\n.modal-loader::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--zcat-popup-bg-blur);\n  transition: none;\n  top: 0;\n  z-index: 1;\n}\n.modal-loader {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n.refreshing {\n  animation: rotate 1.5s linear infinite;\n}\n@keyframes rotate {\n  to {\n      transform: rotate(-360deg);\n  }\n}\n\n/* === Global base styles from reference css/zcat-modal.css === */\nlyte-wormhole * {\n  box-sizing: border-box;\n}\n.lyteModal {\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  box-shadow: 0 0px 4px 0px var(--zcat-shadow-bg-default);\n  border-radius: 10px;\n  min-width: 450px;\n  margin-top: -24px;\n  margin-left: -27px;\n}\nlyte-modal-header {\n  color: var(--zcat-body-text-primary);\n  font-family: var(--zcat-font-family-primary);\n  padding: 25px;\n  font-weight: 600;\n}\n/* lyte-modal-content {\n  padding: 8px 25px;\n} */\nlyte-modal-footer {\n  padding: 15px 25px 25px;\n}\nlyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\nlyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  opacity: unset !important;\n  transition: none;\n}\nlyte-modal-content {\n  padding: 8px 24px;\n  max-height: calc(100vh - 200px) !important;\n  overflow-y: auto;\n  color: var(--zcat-body-text-primary);\n}\nlyte-modal-content > * {\n  display: block;\n}\nform lyte-modal-footer {\n  padding: 0;\n}\nform lyte-modal-footer lyte-button {\n  margin-left: 0px;\n}\n/* lyte-modal-freeze {\n  background: var(--zcat-popup-bg-blur);\n  /* opacity: 0.3; \n  transition: none;\n} */\nform lyte-modal-header {\n  font-family: var(--zcat-font-family-primary);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\nform lyte-modal-header .zcat-form-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  width: 100%;\n  background: var(--zcat-popup-bg);\n  border-radius: 10px 10px 0 0;\n}\nform lyte-modal-header .zcat-form-header .zcat-left-alignment {\n  /* display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 10px; */\n}\nform lyte-modal-header .zcat-form-header .zcat-right-alignment {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 10px;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 28px;\n  background: var(--zcat-color-grey2);\n  border: 1px solid var(--zcat-color-grey1);\n  border-radius: 6px;\n  cursor: pointer;\n}\nform lyte-modal-header .zcat-form-header .three-dots-btn:hover {\n  background: var(--zcat-color-primarylight);\n  border-color: var(--zcat-color-grey1);\n}\nform lyte-modal-header .zcat-form-header-tabs {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  gap: 5px;\n  padding: 0 16px;\n  background: var(--zcat-color-white);\n  border-bottom: 1px solid var(--zcat-color-primarylight);\n}\nform lyte-modal-header .zcat-form-header-tabs div {\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-color-dark1);\n  padding: 0px 10px;\n  cursor: pointer;\n  display: inline-flex;\n}\nform lyte-modal-header .zcat-form-header-tabs div:hover {\n  cursor: pointer;\n  color: var(--zcat-color-primary) !important;\n}\nform lyte-modal-header .zcat-form-header-tabs div.active-tab {\n  color: var(--zcat-color-primary) !important;\n  font-family: var(--zcat-font-family-primary);\n  border-bottom: 2px solid var(--zcat-color-primary);\n  font-weight: 600;\n}\nform lyte-modal-footer.zcat-form-footer {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px 24px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-left-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  gap: 16px;\n}\nform lyte-modal-footer.zcat-form-footer .zcat-right-alignment {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  gap: 16px;\n}\n\n/* popup loader component */\n.modal-loader::before {\n  content: '';\n  position: absolute;\n  border: 3px solid var(--zcat-loader-content-primary);\n  border-radius: 50%;\n  border-top: 3px solid var(--zcat-loader-round-primary);\n  width: 30px;\n  height: 30px;\n  animation: spin 1s linear infinite;\n  z-index: 2;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n}\n.modal-loader::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--zcat-popup-bg-blur);\n  transition: none;\n  top: 0;\n  z-index: 1;\n}\n.modal-loader {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes spin {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n}\n.refreshing {\n  animation: rotate 1.5s linear infinite;\n}\n@keyframes rotate {\n  to {\n      transform: rotate(-360deg);\n  }\n}</style>";;
ZcatModal._dynamicNodes = [{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,1,1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":13,"sibl":[12]},{"t":"s","p":[1,1,1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":12,"sibl":[11]},{"t":"tX","p":[1,1,1,1,1,4,1]},{"t":"s","p":[1,1,1,1,1,6],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":11,"sibl":[10]},{"t":"s","p":[1,1,1,1,1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"s","p":[1,1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8]},{"t":"s","p":[1,1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"s","p":[1,1,1,5,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"cD","p":[1,1],"in":5,"sibl":[4]},{"t":"a","p":[1,3]},{"t":"a","p":[1,3,1]},{"t":"i","p":[1,3,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,3],"in":3,"sibl":[2]},{"t":"a","p":[1,5]},{"t":"s","p":[1,5,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,5,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,5],"in":0}],"dc":[13,12,11,10,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatModal._observedAttributes = ["self", "submit", "hasPagination", "zcatProp", "isPopUpOpen"];
export {ZcatModal};

ZcatModal.register("zcat-modal", {
  hash: "ZcatModal_4",
  refHash: "C_zcat-app_app_0"
}); 

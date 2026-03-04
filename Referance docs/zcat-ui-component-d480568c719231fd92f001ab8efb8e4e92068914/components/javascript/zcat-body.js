import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatBody extends Component {
  constructor() {
    super();
  }

  init() {
    // @ts-ignore
    let selectedTab = app.$router.getRouteInstance().navigation.target;
    if (this.getData('zcatProp.tabs')) {
      this.setData('zcatProp.tabs.selectedTab', selectedTab);
    }
  }

  data() {
    let subheaderObj = {
            header: {
               left: {
                            title: {
                                name: 'Create Channel'
                            },
                            desc:{
                                name: 'popup description popup description popup description'
                            },
                            badge: {
                                label: "Status",
                                color: "blue",
                                size: "small",
                                varient: "primary"
                            },
                            backArrow: {
                                callback: "backArrowCallback"
                            } ,
                            avatar: {
                              avatar_img: "no_img",
                              avatar_size: "medium"
                            },
                            refresh: true,
                            info: true,
                            backArrow:{
                              callback: {
                                name: "backArrowCallback"
                              }
                            }
                        }
						,right: {
							help: true,
							defButton: true,
							moreButton: {
								id: "zcat_more_button_id",
								list: [
									{
										label: "Plus",
										icon: {
											position: "left",
											name: "zcat-icon-plus",
											class: "zcat-h14 zcat-w14 zcat-stroke-greybtn-icon"
										},
										callback: {
											name: "backArrowCallback"
										}
									},
									{
										label: "Minus",
										icon: {
											position: "left",
											name: "zcat-icon-minus",
											class: "zcat-h14 zcat-w14 zcat-stroke-greybtn-icon"
										},
										callback: {
											name: "backArrowCallback"
										}
									}
								]
							},
							yield: "rightButton"

						}	
            }			
				}

    return {
      self: prop('object'),
      selfButton: prop('object', {default: this}),
      zcatProp: prop('object')
    };
  }

  static methods() {

    function openPopover(){      
				$L('.main-popover')[0].setData('ltPropShow', true);
        if (this.getMethods('onShow')) {
          this.executeMethod('onShow');
        }

    }
    return {
      openPopover
    };
  }

  static actions() {
    function defaultOnTitleClick(arg) {
			if (this.getMethods('onTitleClick')) {
				this.executeMethod('onTitleClick', arg);
			}
		}
    function openPopover(){
      debugger

    }

    return {
      defaultOnTitleClick,
      openPopover,

      // routeChange(route) {
      //   // this.setData('zcatProp.header.tabs.selectedTab', route);
      //   if(this.getData('zcatProp.header.tabsPrimary')){
      //     this.setData('zcatProp.header.tabsPrimary.selectedTab', route);
      //   }
      //   else if(this.getData('zcatProp.header.tabsSecondary')){
      //     this.setData('zcatProp.header.tabsSecondary.selectedTab', route);
      //   }
      // },

      async tabClick(item, route, methodName,level) {
        if (methodName) {
          const self = this.getData('self');
          await self.executeMethod(
            methodName,
            item
          );
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
    return {};
  }
}

export { ZcatBody };

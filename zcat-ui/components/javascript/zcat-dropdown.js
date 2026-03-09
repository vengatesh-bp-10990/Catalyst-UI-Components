import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatDropdown extends Component {
  constructor() {
    super();
  }

  applyLyteDropdownShadow(dropboxElement) {
    if (!dropboxElement) {
      return;
    }

    const body = dropboxElement.querySelector('lyte-drop-body');
    const footer = dropboxElement.querySelector('.lyte-drop-footer');

    if (!body || !footer) {
      return;
    }

    footer.style.boxShadow = '';

    if (body.scrollHeight > body.clientHeight) {
      footer.style.boxShadow =
        '0px -2px 14px -6px var(--zcat-shadow-bg-default)';
    }
  }

  highLightFirstElement(dropdownElement) {
    if (!dropdownElement) {
      return;
    }
    if (
      !dropdownElement.classList.contains('zcat-chip-checkbox-dropdown') &&
      !dropdownElement.classList.contains('zcat-default-checkbox-dropdown') &&
      !dropdownElement.classList.contains('zcat-multiple-dropdown')
    ) {
      let dropItems = dropdownElement
        .getDropBox()
        .querySelectorAll('lyte-drop-item');
      if (dropItems.length > 0) {
        dropItems[0].classList.add('lyteDropdownSelection');
      }
    }
  }

  handleScrollForSelectedValue(dropdownElement) {
    const dropBody = dropdownElement
      .getDropBox()
      .querySelector('lyte-drop-body');
    const selectedItem = dropBody?.querySelector('[selected="true"]');

    if (!dropBody || !selectedItem) return;

    const itemTop = selectedItem.offsetTop;
    const itemBottom = itemTop + selectedItem.offsetHeight;
    const viewBottom = dropBody.clientHeight;

    if (itemBottom > viewBottom) {
      dropBody.scrollTop = itemBottom + viewBottom;
    } else {
      dropBody.scrollTop = 0;
    }
  }

  data() {
    return {
      self: prop('object'),
      key: prop('string'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      errorMessage: prop('string'),
      searchResultsFound: prop('boolean', { default: true }),
      suf: prop('string', {
        default: "<span class='count-highlight'> +{0} </span>"
      }),
      isFitContent: prop('boolean', { default: false }),
      featureObj: prop('object', { watch: true }),
      errorObj: prop('object', { watch: true })
    };
  }

  static methods() {
    return {
      defaultOnOptionSelected(event, lyteElement, b, c) {
        const zcatProp = this.getData('zcatProp');
          const errorObject = this.getData('errorObj');
        if(this.$node.querySelector('lyte-dropdown').getData('ltPropSelected').length > 0){
          // this.$app.objectUtils(zcatProp, "delete", "errorMessage");
          // this.setData('errorMessage', '');
          if(errorObject){
              this.$app.objectUtils(errorObject, "delete", zcatProp.key);
          }
          else if(this.getData('errorMessage')){
              this.setData('errorMessage', '');
          }
        }        

        if (this.getMethods('onOptionSelected')) {
          this.executeMethod('onOptionSelected', event, lyteElement, b, c);
        }
      },
      defaultOnChange(event, lyteElement, b, c) {
        const zcatProp = this.getData('zcatProp');
          const errorObject = this.getData('errorObj');
        if(this.$node.querySelector('lyte-dropdown').getData('ltPropSelectedList').length > 0){
          // this.$app.objectUtils(zcatProp, "delete", "errorMessage");
          // this.setData('errorMessage', '');
          if(errorObject){
              this.$app.objectUtils(errorObject, "delete", zcatProp.key);
          }
          else if(this.getData('errorMessage')){
              this.setData('errorMessage', '');
          }
        }        

        if (this.getMethods('onChange')) {
          this.executeMethod('onChange', event, lyteElement, b, c);
        }
      },
      defaultOnAdd(event, lyteElement, b, c) {
        const zcatProp = this.getData('zcatProp');
          const errorObject = this.getData('errorObj');
        if(this.$node.querySelector('lyte-dropdown').getData('ltPropSelectedList').length > 0){
          // this.$app.objectUtils(zcatProp, "delete", "errorMessage");
          // this.setData('errorMessage', '');
          if(errorObject){
              this.$app.objectUtils(errorObject, "delete", zcatProp.key);
          }
          else if(this.getData('errorMessage')){
              this.setData('errorMessage', '');
          }
        }

        if (this.getMethods('onAdd')) {
          this.executeMethod('onAdd', event, lyteElement, b, c);
        }
      },

      onAfterDropboxOpen(event, lyteElement, b, c) {
        this.applyLyteDropdownShadow(
          this.$node.querySelector('lyte-dropdown').getDropBox()
        );
        this.highLightFirstElement(this.$node.querySelector('lyte-dropdown'));
        this.handleScrollForSelectedValue(
          this.$node.querySelector('lyte-dropdown')
        );

        if (this.getMethods('onShow')) {
          this.executeMethod('onShow', event, lyteElement, b, c);
        }
      },      
      async onDropdownSearch(results, param2, param3) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');

        if (results.length == 0) {
          this.setData('searchResultsFound', false);
        } else {
          this.setData('searchResultsFound', true);
        }

        if (this.getMethods('onSearch')) {
          this.executeMethod('onSearch', results, param2, param3);
        }        
      }, 

      defaultOnBeforeShow(param1, param2, param3) {        
        if (this.getMethods('onBeforeShow')) {
          this.executeMethod('onBeforeShow', param1, param2, param3);
        }
      }, 
      defaultOnHide(param1, param2, param3) {        
        if (this.getMethods('onHide')) {
          this.executeMethod('onHide', param1, param2, param3);
        }
      }, 
      defaultOnBeforeHide(param1, param2, param3) {        
        if (this.getMethods('onBeforeHide')) {
          this.executeMethod('onBeforeHide', param1, param2, param3);
        }
      }, 
      defaultOnBeforeSelect(param1, param2, param3) {        
        if (this.getMethods('onBeforeSelect')) {
          this.executeMethod('onBeforeSelect', param1, param2, param3);
        }
      },
      defaultOnBeforeAdd(param1, param2, param3) {        
        if (this.getMethods('onBeforeAdd')) {
          this.executeMethod('onBeforeAdd', param1, param2, param3);
        }
      },
      defaultOnRemove(param1, param2, param3) {        
        if (this.getMethods('onRemove')) {
          this.executeMethod('onRemove', param1, param2, param3);
        }
      },
      defaultOnBeforeRemove(param1, param2, param3) {        
        if (this.getMethods('onBeforeRemove')) {
          this.executeMethod('onBeforeRemove', param1, param2, param3);
        }
      },
      defaultOnPositionChanged(param1, param2, param3) {        
        if (this.getMethods('onPositionChanged')) {
          this.executeMethod('onPositionChanged', param1, param2, param3);
        }
      },
      defaultOnScroll(param1, param2, param3) {        
        if (this.getMethods('onScroll')) {
          this.executeMethod('onScroll', param1, param2, param3);
        }
      }, 
      defaultBeforeSelect(param1, param2, param3) {        
        if (this.getMethods('beforeSelect')) {
          this.executeMethod('beforeSelect', param1, param2, param3);
        }
      }    

    };
  }

  static actions() {
    return {
      
    };
  }

  static observers() {    
    // async function errorMessage() {
    //   const errorMessage = this.getData('errorMessage');
    //   this.setData('zcatProp.errorMessage', errorMessage);
    // }
    return {
      // errorMessage: errorMessage.observes('errorMessage') // yet to do
    };
  }
}

export { ZcatDropdown };

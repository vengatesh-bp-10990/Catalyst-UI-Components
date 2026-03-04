import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
import '@zoho/lyte-ui-component/components/javascript/lyte-tooltip';
class ZcatLinkField extends Component {
  constructor() {
    super();
  }

  data() {
    const defaultProp = {
      url: '',
      width: ''
    }
    return {
      zcatProp: prop('object')
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      copyToClipboard(val) {
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = val;
        dummy.select();
        document.execCommand('Copy');
        document.body.removeChild(dummy);
        // @ts-ignore
        document.querySelector('.lyteTooltip').innerText = 'Copied';
      }
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatLinkField };

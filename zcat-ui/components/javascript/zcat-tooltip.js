import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatTooltip extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      zcatProp: prop('object'),
      tooltipConfig: prop('string', { default: '{}' })
    };
  }

  init() {
    this._buildConfig();
  }

  _buildConfig() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) { return; }
    let config = {};
    if (zcatProp.position) { config.position = zcatProp.position; }
    if (zcatProp.showDelay != null) { config.showDelay = zcatProp.showDelay; }
    if (zcatProp.hideDelay != null) { config.hideDelay = zcatProp.hideDelay; }
    if (zcatProp.callout === false) { config.callout = false; }
    this.setData('tooltipConfig', JSON.stringify(config));
  }

  static methods() {
    return {};
  }

  static actions() {
    return {};
  }

  static observers() {
    return {
      zcatPropChanged: {
        type: 'method',
        method() {
          this._buildConfig();
        },
        args: ['zcatProp']
      }
    };
  }
}

export { ZcatTooltip };

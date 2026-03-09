import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatHovercard extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      zcatProp: prop('object', { default: {} })
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {};
  }

  static observers() {
    return {};
  }
}

export { ZcatHovercard };

import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatHovercard extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      zcatProp: prop('object')
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

import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatLoader extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
     	zcatProp: prop('object'),
      rows: prop('number', { default: 12 }),
      type: prop('string', { default: '' })
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

export { ZcatLoader };

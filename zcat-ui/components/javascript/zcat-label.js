import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatLabel extends Component {
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

export { ZcatLabel };

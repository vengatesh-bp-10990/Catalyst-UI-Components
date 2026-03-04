import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
class ZcatLabel extends Component {
  constructor() {
    super();
  }

  data() {
    const defaultProp = {
      type: '',
      color: '',
      label: '',
      icon: {
        name: '',
        class: ''
      }
    };
    return {
      self: prop('object'),
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

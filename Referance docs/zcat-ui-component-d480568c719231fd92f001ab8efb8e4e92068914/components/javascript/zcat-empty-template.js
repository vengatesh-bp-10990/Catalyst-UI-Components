import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatEmptyTemplate extends Component {
  constructor() {
    super();
  }

  data() {
    const defaultProp = {
      style: '',
      svg: {
        id: '',
        class: ''
      },
      title: '',
      desc: '',
      button: {
        variant: '',
        label: '',
        icon: {
          position: '',
          name: '',
          class: ''
        },
        callback: {
          name: ''
        }
      },
      list: [
        {
          variant: '',
          label: '',
          icon: {
            position: '',
            name: '',
            class: ''
          },
          callback: {
            name: ''
          }
        },
        {
          variant: '',
          label: '',
          icon: {
            position: '',
            name: '',
            class: ''
          },
          callback: {
            name: ''
          }
        }
      ]
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

export { ZcatEmptyTemplate };

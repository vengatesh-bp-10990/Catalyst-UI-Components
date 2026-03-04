import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatLabelValuePairs extends Component {
  constructor() {
    super();
  }

  didConnect() {
    const data = this.getData('zcatProp.data');
    const recordperrow = this.getData('zcatProp.pairsPerRow');
    const output = [];
    const keys = Object.keys(this.getData('zcatProp.data'));
    for (let i = 0; i < keys.length; i += recordperrow) {
      const chunk = keys.slice(i, i + recordperrow);
      output.push(
        chunk.map((key) => ({
          key: data[key].key,
          value: data[key].value,
          yield: data[key].yield,
          class: data[key].class
        }))
      );
    }
    this.setData('record', output);
  }

  data() {
    const defaultProp = {
      data: [
        {
          key: '',
          value: '',
          yield: '',
          class: ''
        }
      ]
    };
    return {
      self: prop('object'),
      zcatProp: prop('object', {
        default: {
          data: {},
          pairsPerRow: 1
        }
      }),
      record: prop('array', { default: [] })
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

export { ZcatLabelValuePairs };

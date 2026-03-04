import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatCards extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      selectedValue: prop('string', { default: '' }),
      selectedValues: prop('array', { default: [] }),
      _renderCards: prop('array', { default: [] }),
      _wrapperTypeClass: prop('string', { default: 'zcat-cards-default' }),
      _wrapperLayoutClass: prop('string', { default: 'zcat-cards-horizontal' })
    }), arg1);
  }

  init() {
    this._syncSelection();
    this._buildRenderCards();
  }

  _syncSelection() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    let type = zcatProp.type || 'default';

    if (type === 'single_sel') {
      this.setData('selectedValue', zcatProp.selected || '');
      this.setData('selectedValues', []);
    } else if (type === 'multi_sel') {
      this.setData('selectedValues', (zcatProp.selected && Array.isArray(zcatProp.selected)) ? zcatProp.selected.slice() : []);
      this.setData('selectedValue', '');
    }
  }

  _buildRenderCards() {
    let zcatProp = this.getData('zcatProp') || {};
    let type = zcatProp.type || 'default';
    let selVal = this.getData('selectedValue');
    let selVals = this.getData('selectedValues') || [];
    let cards = zcatProp.cards || [];
    let bgVariant = zcatProp.bgVariant || 'primary';

    let rendered = [];
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let isSelected = false;
      if (type === 'single_sel') {
        isSelected = card.value === selVal;
      } else if (type === 'multi_sel') {
        isSelected = selVals.indexOf(card.value) !== -1;
      }
      rendered.push({
        title: card.title || '',
        description: card.description || '',
        icon: card.icon || '',
        value: card.value || '',
        disabled: card.disabled || false,
        _bgVariant: bgVariant,
        _isSelected: isSelected,
        _selectedClass: isSelected ? 'selected' : '',
        _radioCheckedClass: (type === 'single_sel' && isSelected) ? 'checked' : '',
        _checkboxCheckedClass: (type === 'multi_sel' && isSelected) ? 'checked' : ''
      });
    }
    this.setData('_renderCards', rendered);

    // Wrapper classes
    let typeClass = 'zcat-cards-default';
    if (type === 'single_sel') typeClass = 'zcat-cards-single';
    else if (type === 'multi_sel') typeClass = 'zcat-cards-multi';
    this.setData('_wrapperTypeClass', typeClass);
    this.setData('_wrapperLayoutClass', zcatProp.layout === 'vertical' ? 'zcat-cards-vertical' : 'zcat-cards-horizontal');
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      selectCard(card) {
        if (card.disabled) return;
        let zcatProp = this.getData('zcatProp');
        let type = (zcatProp && zcatProp.type) || 'default';

        if (type === 'default') {
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, card);
          }
          return;
        }

        if (type === 'single_sel') {
          this.setData('selectedValue', card.value);
          this._buildRenderCards();
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, card);
          }
        }

        if (type === 'multi_sel') {
          let vals = (this.getData('selectedValues') || []).slice();
          let idx = vals.indexOf(card.value);
          if (idx !== -1) {
            vals.splice(idx, 1);
          } else {
            vals.push(card.value);
          }
          this.setData('selectedValues', vals);
          this._buildRenderCards();
          let self = this.getData('self');
          if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
            self.executeMethod(zcatProp.callback.name, vals);
          }
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncSelection();
          this._buildRenderCards();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatCards._template = "<template tag-name=\"zcat-cards\"> <div class=\"zcat-cards-wrapper {{_wrapperTypeClass}} {{_wrapperLayoutClass}} {{expHandlers(zcatProp.disabled,'?:','zcat-cards-disabled','')}}\"> <template items=\"{{_renderCards}}\" item=\"card\" index=\"cardIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-card {{card._bgVariant}} {{expHandlers(card.disabled,'?:','disabled','')}} {{card._selectedClass}}\" onclick=\"{{action('selectCard',card)}}\"> <!-- Selection indicator --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','single_sel')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-radio {{card._radioCheckedClass}}\"> <span class=\"zcat-card-radio-dot\"></span> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','multi_sel')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-checkbox {{card._checkboxCheckedClass}}\"> <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg> </div> </template></template> <!-- Card icon --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-icon\"> <zcat-icon name=\"{{card.icon}}\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"1.5\"></zcat-icon> </div> </template></template> <!-- Card content --> <div class=\"zcat-card-body\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.title}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-title\">{{card.title}}</div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card.description}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-desc\">{{card.description}}</div> </template></template> </div> <!-- Selected checkmark (corner) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{card._isSelected}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-card-selected-mark\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg> </div> </template></template> </div> </template> </div> </template><style>/* ==============================\n   ZCAT Cards Component\n   ============================== */\n\nzcat-cards * { box-sizing: border-box; }\n\n.zcat-cards-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-cards-wrapper.zcat-cards-vertical {\n  flex-direction: column;\n}\n\n/* Card base */\n.zcat-card {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid var(--zcat-card-border-default);\n  cursor: pointer;\n  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;\n  min-width: 180px;\n  overflow: hidden;\n}\n.zcat-cards-horizontal .zcat-card {\n  flex: 1;\n  min-width: 160px;\n}\n\n/* Background Variants */\n.zcat-card.primary { background: var(--zcat-card-bg-default); }\n.zcat-card.secondary { background: var(--zcat-card-bg-secondary); }\n.zcat-card.tertiary { background: var(--zcat-card-bg-tertiary); }\n.zcat-card.quaternary { background: var(--zcat-card-bg-quaternary); }\n.zcat-card.bodyBg { background: var(--zcat-card-bg-bodyBg); }\n\n/* Hover */\n.zcat-card:hover {\n  border-color: var(--zcat-card-border-hover);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n/* Selected */\n.zcat-card.selected {\n  border-color: var(--zcat-card-border-selected);\n  box-shadow: 0 0 0 1px var(--zcat-card-border-selected);\n}\n\n/* Disabled */\n.zcat-card.disabled {\n  background: var(--zcat-card-bg-disabled) !important;\n  border-color: var(--zcat-card-border-disabled) !important;\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.zcat-card.disabled:hover {\n  box-shadow: none;\n}\n\n/* === Radio indicator (single select) === */\n.zcat-card-radio {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid var(--zcat-inputField-border-default);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: border-color 0.15s;\n}\n.zcat-card-radio.checked {\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-card-radio-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: transparent;\n  transition: background 0.15s;\n}\n.zcat-card-radio.checked .zcat-card-radio-dot {\n  background: var(--zcat-btn-fill-bg-primary-default);\n}\n\n/* === Checkbox indicator (multi select) === */\n.zcat-card-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid var(--zcat-inputField-border-default);\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.zcat-card-checkbox svg { opacity: 0; transition: opacity 0.12s; }\n.zcat-card-checkbox.checked {\n  background: var(--zcat-btn-fill-bg-primary-default);\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-card-checkbox.checked svg {\n  opacity: 1;\n  stroke: #fff;\n}\n\n/* Card icon */\n.zcat-card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  flex-shrink: 0;\n}\n\n/* Card body */\n.zcat-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.zcat-card-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--zcat-body-text-primary);\n  margin-bottom: 4px;\n}\n.zcat-card-desc {\n  font-size: 12px;\n  color: var(--zcat-body-text-secondary);\n  line-height: 1.4;\n}\n\n/* Selected corner mark */\n.zcat-card-selected-mark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 6px 0 6px;\n  background: var(--zcat-btn-fill-bg-primary-default);\n}\n\n/* === Disabled wrapper === */\n.zcat-cards-disabled .zcat-card {\n  background: var(--zcat-card-bg-disabled) !important;\n  border-color: var(--zcat-card-border-disabled) !important;\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n</style>";;
ZcatCards._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[1,13,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,13,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[1,17],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0}],"dc":[3],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

ZcatCards._observedAttributes = [
  "self",
  "zcatProp",
  "selectedValue",
  "selectedValues",
  "_renderCards",
  "_wrapperTypeClass",
  "_wrapperLayoutClass"
];

export { ZcatCards };

ZcatCards.register("zcat-cards", {
  hash: "ZcatCards_2",
  refHash: "C_zcat-app_app_0"
});

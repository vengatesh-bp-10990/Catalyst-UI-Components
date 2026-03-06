import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAutocomplete extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isOpen: prop('boolean', { default: false }),
      searchQuery: prop('string', { default: '' }),
      filteredOptions: prop('array', { default: [] }),
      selectedValue: prop('string', { default: '' }),
      selectedLabel: prop('string', { default: '' }),
      highlightIndex: prop('number', { default: -1 })
    }), arg1);
  }

  init() {
    this._syncSelection();
    this._syncFilteredOptions('');
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function (e) {
      let wrapper = comp.$node ? comp.$node.querySelector('.zcat-autocomplete-wrapper') : null;
      if (wrapper && !wrapper.contains(e.target)) {
        comp.setData('isOpen', false);
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  _syncSelection() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.selected) {
      let options = zcatProp.options || [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === zcatProp.selected) {
          this.setData('selectedValue', options[i].value);
          this.setData('selectedLabel', options[i].name);
          this.setData('searchQuery', options[i].name);
          return;
        }
      }
    }
    this.setData('selectedValue', '');
    this.setData('selectedLabel', '');
  }

  // query is passed explicitly to avoid relying on async setData flush
  _syncFilteredOptions(query) {
    let zcatProp = this.getData('zcatProp');
    let options = (zcatProp && zcatProp.options) ? zcatProp.options : [];
    if (query === undefined || query === null) {
      query = this.getData('searchQuery') || '';
    }
    let filtered;

    if (query) {
      let q = query.toLowerCase();
      filtered = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].name && options[i].name.toLowerCase().indexOf(q) !== -1) {
          let clone = {};
          for (let key in options[i]) {
            if (options[i].hasOwnProperty(key)) {
              clone[key] = options[i][key];
            }
          }
          let name = options[i].name;
          let lowerName = name.toLowerCase();
          let idx = lowerName.indexOf(q);
          if (idx !== -1) {
            clone._highlightBefore = name.substring(0, idx);
            clone._highlightMatch = name.substring(idx, idx + q.length);
            clone._highlightAfter = name.substring(idx + q.length);
          } else {
            clone._highlightBefore = name;
            clone._highlightMatch = '';
            clone._highlightAfter = '';
          }
          filtered.push(clone);
        }
      }
    } else {
      filtered = options.slice ? options.slice() : [];
      for (let i = 0; i < filtered.length; i++) {
        filtered[i] = Object.assign({}, filtered[i]);
        filtered[i]._highlightBefore = filtered[i].name;
        filtered[i]._highlightMatch = '';
        filtered[i]._highlightAfter = '';
      }
    }

    this.setData('filteredOptions', filtered);
    this.setData('highlightIndex', -1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onSearchInput(event) {
        let val = event.target.value;
        this.setData('searchQuery', val);
        this.setData('isOpen', true);
        // Pass val directly so filtering doesn't depend on async setData flush
        this._syncFilteredOptions(val);
        if (val !== this.getData('selectedLabel')) {
          this.setData('selectedValue', '');
          this.setData('selectedLabel', '');
        }
      },

      onSearchFocus() {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        this.setData('isOpen', true);
        let query = this.getData('searchQuery') || '';
        this._syncFilteredOptions(query);
      },

      onSearchKeydown(event) {
        let filteredOptions = this.getData('filteredOptions') || [];
        let highlightIndex = this.getData('highlightIndex');

        if (event.key === 'ArrowDown') {
          event.preventDefault();
          let next = highlightIndex + 1;
          if (next >= filteredOptions.length) next = 0;
          this.setData('highlightIndex', next);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          let prev = highlightIndex - 1;
          if (prev < 0) prev = filteredOptions.length - 1;
          this.setData('highlightIndex', prev);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          if (highlightIndex >= 0 && highlightIndex < filteredOptions.length) {
            this.exec('selectItem', filteredOptions[highlightIndex]);
          }
        } else if (event.key === 'Escape') {
          this.setData('isOpen', false);
        }
      },

      selectItem(item) {
        if (item && item.disabled) return;
        this.setData('selectedValue', item.value);
        this.setData('selectedLabel', item.name);
        this.setData('searchQuery', item.name);
        this.setData('isOpen', false);
        this.setData('highlightIndex', -1);

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item);
        }
      },

      clearSearch(event) {
        if (event) { event.stopPropagation(); }
        this.setData('searchQuery', '');
        this.setData('selectedValue', '');
        this.setData('selectedLabel', '');
        this.setData('isOpen', true);
        this._syncFilteredOptions('');

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, null);
        }
      },

      createNewClicked() {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.createNewBtn && zcatProp.createNewBtn.callback && zcatProp.createNewBtn.callback.name) {
          self.executeMethod(zcatProp.createNewBtn.callback.name);
        }
        this.setData('isOpen', false);
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncSelection();
          let query = this.getData('searchQuery') || '';
          this._syncFilteredOptions(query);
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatAutocomplete._template = "<template tag-name=\"zcat-autocomplete\"> <div class=\"zcat-autocomplete-wrapper {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-autocomplete-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-autocomplete-exsm',''))}} {{expHandlers(zcatProp.disabled,'?:','zcat-autocomplete-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-autocomplete-error','')}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-autocomplete-label-row\"> <label class=\"zcat-autocomplete-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-autocomplete-optional\">(Optional)</span> </template></template> </div> </template></template> <!-- Search Input --> <div class=\"zcat-autocomplete-input-wrap\"> <zcat-icon class=\"zcat-autocomplete-search-icon\" name=\"search\" width=\"{{expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','12','14')}}\" height=\"{{expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','12','14')}}\" stroke=\"var(--zcat-inputField-icon-placeholder)\" stroke-width=\"1.3\"></zcat-icon> <input type=\"text\" class=\"zcat-autocomplete-input\" placeholder=\"{{expHandlers(zcatProp.placeholder,'||','Search...')}}\" value=\"{{searchQuery}}\" disabled=\"{{expHandlers(zcatProp.disabled,'||',false)}}\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\" oninput=\"{{action('onSearchInput')}}\" onfocus=\"{{action('onSearchFocus')}}\" onclick=\"{{action('onSearchFocus')}}\" onkeydown=\"{{action('onSearchKeydown')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{searchQuery}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-autocomplete-clear\" onclick=\"{{action('clearSearch')}}\"> <zcat-icon name=\"close\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </template></template> </div> <!-- Dropdown Menu --> <div class=\"zcat-autocomplete-menu {{expHandlers(isOpen,'?:','open','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.dropLabel,'&amp;&amp;',filteredOptions.length)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-autocomplete-menu-header\">{{zcatProp.dropLabel}}</div> </template></template> <div class=\"zcat-autocomplete-menu-body\"> <template items=\"{{filteredOptions}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <div class=\"zcat-autocomplete-item {{expHandlers(expHandlers(item.value,'===',selectedValue),'?:','selected','')}} {{expHandlers(expHandlers(index,'===',highlightIndex),'?:','highlighted','')}} {{expHandlers(item.disabled,'?:','disabled','')}}\" onclick=\"{{action('selectItem',item)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-autocomplete-item-icon\" name=\"{{item.icon}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </template></template> <span class=\"zcat-autocomplete-item-text\"> <span>{{item._highlightBefore}}</span><strong class=\"zcat-autocomplete-highlight\">{{item._highlightMatch}}</strong><span>{{item._highlightAfter}}</span> </span> </div> </template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(isOpen,'&amp;&amp;',expHandlers(filteredOptions.length,'!'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-autocomplete-empty\">No results found</div> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-autocomplete-footer\" onclick=\"{{action('createNewClicked')}}\"> <zcat-icon name=\"plus\" width=\"14\" height=\"14\" stroke=\"var(--zcat-primary-1)\" stroke-width=\"2\"></zcat-icon> <span>{{expHandlers(zcatProp.createNewBtn.label,'||','Create New')}}</span> </div> </template></template> </div> <!-- Error Message --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-autocomplete-error-msg\">{{zcatProp.errorMessage}}</div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Autocomplete Component\n   ============================== */\n\nzcat-autocomplete * { box-sizing: border-box; }\n\n.zcat-autocomplete-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 280px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Label */\n.zcat-autocomplete-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-autocomplete-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-autocomplete-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* Input wrap */\n.zcat-autocomplete-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.zcat-autocomplete-search-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  z-index: 1;\n}\n.zcat-autocomplete-input {\n  width: 100%;\n  height: 36px;\n  padding: 0 32px 0 32px;\n  font-size: 14px;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n}\n.zcat-autocomplete-input::placeholder { color: var(--zcat-inputField-text-placeholder); }\n.zcat-autocomplete-input:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border-color: var(--zcat-inputField-border-hover);\n}\n.zcat-autocomplete-input:focus {\n  background: var(--zcat-inputField-bg-active);\n  border-color: var(--zcat-inputField-border-active);\n  color: var(--zcat-inputField-text-active);\n}\n\n/* Clear button */\n.zcat-autocomplete-clear {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: var(--zcat-inputField-icon-placeholder);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transition: background 0.15s;\n}\n.zcat-autocomplete-clear:hover {\n  background: var(--zcat-inputField-bg-hover);\n  color: var(--zcat-inputField-icon-active);\n}\n\n/* === Size: small === */\n.zcat-autocomplete-sm .zcat-autocomplete-input {\n  height: 30px;\n  font-size: 13px;\n  padding: 0 28px 0 30px;\n}\n.zcat-autocomplete-sm .zcat-autocomplete-search-icon { left: 8px; }\n\n/* === Size: extra-small === */\n.zcat-autocomplete-exsm .zcat-autocomplete-input {\n  height: 24px;\n  font-size: 12px;\n  padding: 0 26px 0 26px;\n  border-radius: 6px;\n}\n.zcat-autocomplete-exsm .zcat-autocomplete-search-icon { left: 6px; }\n\n/* === Dropdown Menu === */\n.zcat-autocomplete-menu {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--zcat-body-bg);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 6px;\n  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  display: none;\n  animation: zcatAutocompleteFadeIn 0.12s ease-out;\n}\n.zcat-autocomplete-menu.open {\n  display: block;\n}\n@keyframes zcatAutocompleteFadeIn {\n  from { opacity: 0; transform: translateY(-4px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.zcat-autocomplete-menu-header {\n  padding: 8px 8px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-autocomplete-menu-body {\n  padding: 8px;\n  overflow-y: auto;\n  max-height: 200px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--zcat-body-border) transparent;\n}\n.zcat-autocomplete-menu-body::-webkit-scrollbar { width: 4px; }\n.zcat-autocomplete-menu-body::-webkit-scrollbar-thumb {\n  background: var(--zcat-body-border);\n  border-radius: 4px;\n}\n\n/* Items */\n.zcat-autocomplete-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 28px 8px 4px;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--zcat-body-text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s;\n  position: relative;\n  margin-bottom: 2px;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-autocomplete-item:hover,\n.zcat-autocomplete-item.highlighted {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n.zcat-autocomplete-item.selected {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n}\n.zcat-autocomplete-item.disabled {\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.zcat-autocomplete-item-icon { flex-shrink: 0; }\n.zcat-autocomplete-item-text { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.zcat-autocomplete-highlight {\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 600;\n}\n\n/* Empty */\n.zcat-autocomplete-empty {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--zcat-body-text-grey);\n  text-align: center;\n}\n\n/* Footer (Create New) */\n.zcat-autocomplete-footer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border-top: 1px solid var(--zcat-body-border);\n}\n.zcat-autocomplete-footer-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 4px;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.12s;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-autocomplete-footer-btn:hover {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n\n/* === Disabled === */\n.zcat-autocomplete-disabled .zcat-autocomplete-input {\n  background: var(--zcat-inputField-bg-disabled) !important;\n  border-color: var(--zcat-inputField-border-disabled) !important;\n  color: var(--zcat-inputField-text-disabled) !important;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.zcat-autocomplete-disabled .zcat-autocomplete-label { color: var(--zcat-inputField-text-disabled); }\n.zcat-autocomplete-disabled .zcat-autocomplete-search-icon { opacity: 0.4; }\n\n/* === Error === */\n.zcat-autocomplete-error .zcat-autocomplete-input {\n  background: var(--zcat-inputField-bg-error) !important;\n  border-color: var(--zcat-inputField-border-error) !important;\n}\n.zcat-autocomplete-error-msg {\n  position: relative;\n  margin-top: 2px;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n  line-height: 16px;\n  font-family: var(--zcat-font-family-primary);\n}\n</style>";;
ZcatAutocomplete._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6]},{"t":"a","p":[1,7,1]},{"t":"cD","p":[1,7,1],"in":6,"sibl":[5]},{"t":"a","p":[1,7,3],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}}},{"t":"s","p":[1,7,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"a","p":[1,11]},{"t":"s","p":[1,11,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,11,3,1]},{"t":"f","p":[1,11,3,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"t":"tX","p":[1,3,1,0]},{"t":"tX","p":[1,3,2,0]},{"t":"tX","p":[1,3,3,0]}],"dc":[0],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[1,11,3,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,11,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"},{"t":"tX","p":[1,3,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[6,5,3,1]}];;

ZcatAutocomplete._observedAttributes = [
  "self",
  "zcatProp",
  "isOpen",
  "searchQuery",
  "filteredOptions",
  "selectedValue",
  "selectedLabel",
  "highlightIndex"
];

export { ZcatAutocomplete };
ZcatAutocomplete.register("zcat-autocomplete", {
  hash: "ZcatAutocomplete_2",
  refHash: "C_zcat-app_app_0"
});

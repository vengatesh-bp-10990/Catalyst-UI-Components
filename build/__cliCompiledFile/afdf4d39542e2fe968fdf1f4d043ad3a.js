import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-checkbox.js';
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatDropdown extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isOpen: prop('boolean', { default: false }),
      // Single select
      selectedValue: prop('string', { default: '' }),
      selectedLabel: prop('string', { default: '' }),
      // Multi select
      selectedValues: prop('array', { default: [] }),
      selectedItems: prop('array', { default: [] }),
      multiDisplayLabel: prop('string', { default: '' }),
      // Common
      searchQuery: prop('string', { default: '' }),
      filteredOptions: prop('array', { default: [] })
    }), arg1);
  }

  init() {
    this._syncSelection();
    this._syncFilteredOptions();
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function(e) {
      let wrapper = comp.$node ? comp.$node.querySelector('.zcat-dropdown-wrapper') : null;
      if (wrapper && !wrapper.contains(e.target)) {
        comp.setData('isOpen', false);
        comp.setData('searchQuery', '');
        comp._syncFilteredOptions();
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  _isMultiMode() {
    let zcatProp = this.getData('zcatProp');
    return zcatProp && zcatProp.variant === 'multiple';
  }

  _syncSelection() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;

    if (this._isMultiMode()) {
      // Multi-select mode
      let selected = zcatProp.selected;
      if (!selected || !Array.isArray(selected)) {
        selected = [];
      }
      let options = zcatProp.options || [];
      let items = [];
      let values = [];
      for (let i = 0; i < selected.length; i++) {
        for (let j = 0; j < options.length; j++) {
          if (options[j].value === selected[i]) {
            items.push(options[j]);
            values.push(options[j].value);
            break;
          }
        }
      }
      this.setData('selectedValues', values);
      this.setData('selectedItems', items);
      this._buildMultiDisplayLabel(items);
      this.setData('selectedValue', '');
      this.setData('selectedLabel', '');
    } else {
      // Single-select mode
      if (zcatProp.selected && typeof zcatProp.selected === 'string') {
        let options = zcatProp.options || [];
        let found = null;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === zcatProp.selected) {
            found = options[i];
            break;
          }
        }
        if (found) {
          this.setData('selectedValue', found.value);
          this.setData('selectedLabel', found.name);
        } else {
          this.setData('selectedValue', '');
          this.setData('selectedLabel', '');
        }
      } else {
        this.setData('selectedValue', '');
        this.setData('selectedLabel', '');
      }
      this.setData('selectedValues', []);
      this.setData('selectedItems', []);
      this.setData('multiDisplayLabel', '');
    }
  }

  _buildMultiDisplayLabel(items) {
    if (!items || items.length === 0) {
      this.setData('multiDisplayLabel', '');
      return;
    }
    let maxShow = 2;
    let names = [];
    for (let i = 0; i < Math.min(items.length, maxShow); i++) {
      names.push(items[i].name);
    }
    let label = names.join(', ');
    if (items.length > maxShow) {
      label += ' +' + (items.length - maxShow);
    }
    this.setData('multiDisplayLabel', label);
  }

  _syncFilteredOptions() {
    let zcatProp = this.getData('zcatProp');
    let options = (zcatProp && zcatProp.options) ? zcatProp.options : [];
    let query = this.getData('searchQuery') || '';
    let isMulti = this._isMultiMode();
    let selectedVals = isMulti ? (this.getData('selectedValues') || []) : [];

    let source;
    if (query) {
      let q = query.toLowerCase();
      source = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].name && options[i].name.toLowerCase().indexOf(q) !== -1) {
          source.push(options[i]);
        }
      }
    } else {
      source = options.slice ? options.slice() : [];
    }

    // For multi mode, clone items and mark _selected + build _checkboxProp
    if (isMulti) {
      let showCheckbox = zcatProp.menuListType === 'checkbox';
      let result = [];
      for (let i = 0; i < source.length; i++) {
        let clone = {};
        for (let key in source[i]) {
          if (source[i].hasOwnProperty(key)) {
            clone[key] = source[i][key];
          }
        }
        clone._selected = selectedVals.indexOf(source[i].value) !== -1;
        if (showCheckbox) {
          clone._checkboxProp = {
            checked: clone._selected,
            size: 'small',
            disabled: clone.disabled || false
          };
        }
        result.push(clone);
      }
      this.setData('filteredOptions', result);
    } else {
      this.setData('filteredOptions', source);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      toggleDropdown(event) {
        if (event) { event.stopPropagation(); }
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }
        let wasOpen = this.getData('isOpen');
        this.setData('isOpen', !wasOpen);
        if (wasOpen) {
          this.setData('searchQuery', '');
          this._syncFilteredOptions();
        } else {
          this._syncFilteredOptions();
          let comp = this;
          setTimeout(function() {
            let searchInput = comp.$node ? comp.$node.querySelector('.zcat-dropdown-search-input') : null;
            if (searchInput) { searchInput.focus(); }
          }, 50);
        }
      },

      // Single-select: select item and close
      selectItem(item) {
        if (item && item.disabled) { return; }
        this.setData('selectedValue', item.value);
        this.setData('selectedLabel', item.name);
        this.setData('isOpen', false);
        this.setData('searchQuery', '');
        this._syncFilteredOptions();
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item);
        }
      },

      // Multi-select: toggle item (don't close menu)
      toggleItem(item, event) {
        if (event) { event.stopPropagation(); }
        if (item && item.disabled) { return; }

        let selectedValues = (this.getData('selectedValues') || []).slice();
        let selectedItems = (this.getData('selectedItems') || []).slice();
        let idx = selectedValues.indexOf(item.value);

        if (idx !== -1) {
          // Remove
          selectedValues.splice(idx, 1);
          selectedItems = selectedItems.filter(function(i) { return i.value !== item.value; });
        } else {
          // Add — find original option (not clone)
          selectedValues.push(item.value);
          let zcatProp = this.getData('zcatProp');
          let options = (zcatProp && zcatProp.options) ? zcatProp.options : [];
          for (let i = 0; i < options.length; i++) {
            if (options[i].value === item.value) {
              selectedItems.push(options[i]);
              break;
            }
          }
        }

        this.setData('selectedValues', selectedValues);
        this.setData('selectedItems', selectedItems);
        this._buildMultiDisplayLabel(selectedItems);
        this._syncFilteredOptions();

        // Callback
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, selectedItems);
        }
      },

      // Remove chip in multi-chip mode
      removeChip(chip, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }

        let selectedValues = (this.getData('selectedValues') || []).filter(function(v) { return v !== chip.value; });
        let selectedItems = (this.getData('selectedItems') || []).filter(function(i) { return i.value !== chip.value; });

        this.setData('selectedValues', selectedValues);
        this.setData('selectedItems', selectedItems);
        this._buildMultiDisplayLabel(selectedItems);
        this._syncFilteredOptions();

        // Callback
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, selectedItems);
        }
      },

      onSearchInput(event) {
        this.setData('searchQuery', event.target.value);
        this._syncFilteredOptions();
      },

      onTriggerKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.exec('toggleDropdown', event);
        } else if (event.key === 'Escape') {
          this.setData('isOpen', false);
          this.setData('searchQuery', '');
          this._syncFilteredOptions();
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
          this._syncFilteredOptions();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatDropdown._template = "<template tag-name=\"zcat-dropdown\"> <div class=\"zcat-dropdown-wrapper {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-dropdown-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-dropdown-exsm',''))}} {{expHandlers(expHandlers(zcatProp.variant,'===','ghost'),'?:','zcat-dropdown-ghost','')}} {{expHandlers(zcatProp.disabled,'?:','zcat-dropdown-disabled','')}} {{expHandlers(zcatProp.errorMessage,'?:','zcat-dropdown-error','')}} {{expHandlers(expHandlers(zcatProp.width,'===','zcat-w-fc'),'?:','zcat-dropdown-fit-content',expHandlers(expHandlers(zcatProp.width,'===','zcat-w100p'),'?:','zcat-dropdown-fullwidth',expHandlers(expHandlers(zcatProp.width,'===','zcat-w300'),'?:','zcat-dropdown-w300','')))}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-label-row {{expHandlers(zcatProp.disabled,'?:','zcat-dropdown-label-disabled','')}}\"> <label class=\"zcat-dropdown-label\"> {{zcatProp.label}} <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-optional\">(Optional)</span></template></template> </label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-dropdown-info-icon\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </template></template> </div> </template></template> <div class=\"zcat-dropdown-trigger-wrap\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-dropdown-icon-left {{expHandlers(zcatProp.disabled,'?:','zcat-dropdown-icon-disabled','')}}\" name=\"{{expHandlers(zcatProp.icon.name,'||','search')}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"></zcat-icon> </template></template> <!-- === SINGLE SELECT TRIGGER === --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','multiple')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-trigger {{expHandlers(isOpen,'?:','active','')}} {{expHandlers(zcatProp.icon,'?:','has-icon-left','')}}\" onclick=\"{{action('toggleDropdown')}}\" tabindex=\"0\" onkeydown=\"{{action('onTriggerKeydown')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{selectedLabel}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-value\">{{selectedLabel}}</span></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(selectedLabel,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-placeholder\">{{expHandlers(zcatProp.placeholder,'||','Select Option')}}{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',' (Optional)','')}}</span></template></template> <span class=\"zcat-dropdown-arrow\"></span> </div> </template></template> <!-- === MULTI SELECT – CHIP MODE TRIGGER === --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','multiple'),'&amp;&amp;',expHandlers(zcatProp.multipleType,'===','chip'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-trigger zcat-dropdown-trigger-chips {{expHandlers(isOpen,'?:','active','')}} {{expHandlers(zcatProp.icon,'?:','has-icon-left','')}}\" onclick=\"{{action('toggleDropdown')}}\" tabindex=\"0\" onkeydown=\"{{action('onTriggerKeydown')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{selectedItems.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-chips-wrap\"> <template items=\"{{selectedItems}}\" item=\"chip\" index=\"chipIdx\" is=\"for\" _new=\"true\"> <span class=\"zcat-dropdown-chip\"> <span class=\"zcat-dropdown-chip-text\">{{chip.name}}</span> <span class=\"zcat-dropdown-chip-remove\" onclick=\"{{action('removeChip',chip)}}\"> <zcat-icon name=\"close\" width=\"10\" height=\"10\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </span> </template> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(selectedItems.length,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-placeholder\">{{expHandlers(zcatProp.placeholder,'||','Select Option')}}</span></template></template> <span class=\"zcat-dropdown-arrow\"></span> </div> </template></template> <!-- === MULTI SELECT – DEFAULT MODE TRIGGER === --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','multiple'),'&amp;&amp;',expHandlers(zcatProp.multipleType,'!==','chip'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-trigger {{expHandlers(isOpen,'?:','active','')}} {{expHandlers(zcatProp.icon,'?:','has-icon-left','')}}\" onclick=\"{{action('toggleDropdown')}}\" tabindex=\"0\" onkeydown=\"{{action('onTriggerKeydown')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{multiDisplayLabel}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-value\">{{multiDisplayLabel}}</span></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(multiDisplayLabel,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-placeholder\">{{expHandlers(zcatProp.placeholder,'||','Select Option')}}</span></template></template> <span class=\"zcat-dropdown-arrow\"></span> </div> </template></template> </div> <!-- === DROPDOWN MENU === --> <div class=\"zcat-dropdown-menu {{expHandlers(isOpen,'?:','open','')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isSearchable}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-search-wrap\"> <zcat-icon class=\"zcat-dropdown-search-icon\" name=\"search\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> <input type=\"text\" class=\"zcat-dropdown-search-input\" placeholder=\"Search\" oninput=\"{{action('onSearchInput')}}\"> </div> </template></template> <div class=\"zcat-dropdown-menu-body\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.dropLabel,'&amp;&amp;',filteredOptions.length)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-menu-header\">{{zcatProp.dropLabel}}</div> </template></template> <template items=\"{{filteredOptions}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <!-- Single Select Item --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','multiple')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-item {{expHandlers(expHandlers(item.value,'===',selectedValue),'?:','selected','')}} {{expHandlers(item.disabled,'?:','disabled','')}}\" onclick=\"{{action('selectItem',item)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-dropdown-item-icon\" name=\"{{item.icon}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','12','14')}}\" stroke=\"var(--zcat-menuList-icon-active)\" stroke-width=\"1.3\"></zcat-icon> </template></template> <span class=\"zcat-dropdown-item-text\">{{item.name}}</span> </div> </template></template> <!-- Multi Select Item --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','multiple')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-item zcat-dropdown-item-multi {{expHandlers(item._selected,'?:','selected','')}} {{expHandlers(item.disabled,'?:','disabled','')}}\" onclick=\"{{action('toggleItem',item)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.menuListType,'===','checkbox')}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-checkbox zcat-prop=\"{{item._checkboxProp}}\"></zcat-checkbox> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-dropdown-item-icon\" name=\"{{item.icon}}\" width=\"14\" height=\"14\" stroke=\"var(--zcat-menuList-icon-active)\" stroke-width=\"1.3\"></zcat-icon> </template></template> <span class=\"zcat-dropdown-item-text\">{{item.name}}</span> </div> </template></template> </template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(filteredOptions.length,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dropdown-no-result\">No results found</div></template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-dropdown-footer\"> <div class=\"zcat-dropdown-create-btn\" onclick=\"{{action('createNewClicked')}}\"> <zcat-icon name=\"plus\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> <span>{{expHandlers(zcatProp.createNewBtn.label,'||','Create New')}}</span> </div> </div> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-dropdown-error-msg\">{{zcatProp.errorMessage}}</span></template></template> </div> </template><style>/* ==============================\n   ZCAT Dropdown Component\n   Uses design token variables only\n   ============================== */\n\nzcat-dropdown * {\n  box-sizing: border-box;\n}\n\n/* --- Base --- */\n.zcat-dropdown-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-dropdown-wrapper.zcat-dropdown-fullwidth {\n  width: 100%;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-fit-content {\n  width: auto;\n  min-width: 80px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-w300 {\n  width: 300px;\n}\n\n/* --- Label Row --- */\n.zcat-dropdown-label-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.zcat-dropdown-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n  line-height: 18px;\n}\n.zcat-dropdown-label .zcat-dropdown-optional {\n  font-weight: 400;\n  color: var(--zcat-inputField-text-optional);\n  font-size: 13px;\n}\n.zcat-dropdown-label-disabled .zcat-dropdown-label {\n  color: var(--zcat-inputField-text-disabled);\n}\n.zcat-dropdown-info-icon {\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n/* --- Trigger Wrapper --- */\n.zcat-dropdown-trigger-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.zcat-dropdown-icon-left {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  pointer-events: none;\n  flex-shrink: 0;\n}\n.zcat-dropdown-icon-disabled {\n  opacity: 0.4;\n}\n\n/* --- Trigger Button --- */\n.zcat-dropdown-trigger {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 36px;\n  padding: 0 28px 0 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  color: var(--zcat-inputField-text-active);\n  font-size: 14px;\n  font-weight: 400;\n  font-family: var(--zcat-font-family-primary);\n  line-height: 20px;\n  cursor: pointer;\n  position: relative;\n  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;\n  outline: none;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zcat-dropdown-trigger.has-icon-left {\n  padding-left: 30px;\n}\n.zcat-dropdown-trigger:hover {\n  border: 1px solid var(--zcat-inputField-border-hover);\n}\n.zcat-dropdown-trigger:focus,\n.zcat-dropdown-trigger.active {\n  border: 1px solid var(--zcat-inputField-border-active);\n  box-shadow: none;\n}\n\n/* Arrow icon */\n.zcat-dropdown-arrow {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  pointer-events: none;\n  transition: transform 0.15s ease;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%237988A8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.zcat-dropdown-trigger.active .zcat-dropdown-arrow {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n/* Placeholder */\n.zcat-dropdown-trigger .zcat-dropdown-placeholder {\n  color: var(--zcat-inputField-text-placeholder);\n}\n\n/* --- Sizes --- */\n/* Small */\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-trigger {\n  min-height: 28px;\n  padding: 2px 22px 2px 6px;\n  font-size: 13px;\n  line-height: 18px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-trigger.has-icon-left {\n  padding-left: 26px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-arrow {\n  width: 14px;\n  height: 14px;\n  background-size: 14px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-item {\n  padding: 6px 28px 6px 4px;\n  font-size: 13px;\n  line-height: 18px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-label {\n  font-size: 13px;\n}\n\n/* Extra-small */\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-trigger {\n  min-height: 24px;\n  padding: 2px 22px 2px 4px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-trigger.has-icon-left {\n  padding-left: 22px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-arrow {\n  width: 12px;\n  height: 12px;\n  background-size: 12px;\n  right: 6px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-item {\n  padding: 4px 24px 4px 4px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-label {\n  font-size: 12px;\n}\n\n/* --- Menu (dropbox) --- */\n.zcat-dropdown-menu {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--zcat-body-bg);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 6px;\n  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  display: none;\n  animation: zcatDropFadeIn 0.12s ease-out;\n}\n.zcat-dropdown-menu.open {\n  display: block;\n}\n\n@keyframes zcatDropFadeIn {\n  from { opacity: 0; transform: translateY(-4px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* --- Search --- */\n.zcat-dropdown-search-wrap {\n  position: relative;\n  padding: 8px 8px 0;\n}\n.zcat-dropdown-search-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-30%);\n  color: var(--zcat-inputField-text-placeholder);\n  pointer-events: none;\n}\n.zcat-dropdown-search-input {\n  width: 100%;\n  height: 32px;\n  padding: 0 8px 0 30px;\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  background: var(--zcat-inputField-bg-default);\n  color: var(--zcat-body-text-primary);\n  font-size: 13px;\n  font-family: var(--zcat-font-family-primary);\n  outline: none;\n  transition: border-color 0.15s;\n}\n.zcat-dropdown-search-input:focus {\n  border: 1px solid var(--zcat-inputField-border-active);\n}\n.zcat-dropdown-search-input::placeholder {\n  color: var(--zcat-inputField-text-placeholder);\n}\n\n/* --- Menu header --- */\n.zcat-dropdown-menu-header {\n  padding: 0 0 6px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--zcat-inputField-text-label);\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* --- Menu body --- */\n.zcat-dropdown-menu-body {\n  padding: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--zcat-body-border) transparent;\n}\n.zcat-dropdown-menu-body::-webkit-scrollbar {\n  width: 4px;\n}\n.zcat-dropdown-menu-body::-webkit-scrollbar-thumb {\n  background: var(--zcat-body-border);\n  border-radius: 4px;\n}\n\n/* --- Menu items --- */\n.zcat-dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 28px 8px 4px;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  color: var(--zcat-body-text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.12s;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-dropdown-item:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n.zcat-dropdown-item.selected {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n}\n.zcat-dropdown-item.selected::after {\n  content: '';\n  position: absolute;\n  right: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M13.3334 4.29999L6.00002 11.6333L2.66669 8.29999\" stroke=\"%232A65F0\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>') no-repeat center;\n  background-size: contain;\n}\n.zcat-dropdown-item.disabled {\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.zcat-dropdown-item-icon {\n  flex-shrink: 0;\n}\n.zcat-dropdown-item-text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* --- No results --- */\n.zcat-dropdown-no-result {\n  padding: 10px 15px;\n  text-align: center;\n  color: var(--zcat-body-text-grey);\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n/* --- Footer / Create New --- */\n.zcat-dropdown-footer {\n  border-top: 1px solid var(--zcat-body-border);\n  padding: 6px 8px;\n}\n.zcat-dropdown-create-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 4px;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.12s;\n  font-family: var(--zcat-font-family-primary);\n}\n.zcat-dropdown-create-btn:hover {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n\n/* --- States --- */\n/* Error */\n.zcat-dropdown-wrapper.zcat-dropdown-error .zcat-dropdown-trigger {\n  border-color: var(--zcat-inputField-border-error) !important;\n  background: var(--zcat-inputField-bg-error);\n}\n.zcat-dropdown-error-msg {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n  padding-top: 2px;\n  line-height: 16px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* Disabled */\n.zcat-dropdown-wrapper.zcat-dropdown-disabled .zcat-dropdown-trigger {\n  background: var(--zcat-inputField-bg-disabled) !important;\n  color: var(--zcat-inputField-text-disabled) !important;\n  cursor: not-allowed;\n  border-color: var(--zcat-inputField-border-disabled) !important;\n  box-shadow: none;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-disabled .zcat-dropdown-arrow {\n  opacity: 0.4;\n}\n\n/* --- Ghost Variant --- */\n.zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-trigger {\n  background: transparent;\n  border-color: transparent;\n  color: var(--zcat-btn-ghost-text-primary-default);\n  padding-right: 24px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-trigger:hover {\n  background: var(--zcat-btn-ghost-bg-primary-hover);\n  border-color: transparent;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-arrow {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%232A65F0' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n.zcat-dropdown-wrapper.zcat-dropdown-ghost.zcat-dropdown-disabled .zcat-dropdown-trigger {\n  background: transparent !important;\n  border-color: transparent !important;\n  color: var(--zcat-btn-ghost-text-primary-disabled) !important;\n}\n\n/* --- Dark mode --- */\nhtml[data-user-color-scheme=\"dark\"] .zcat-dropdown-item.selected::after {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M13.3334 4.29999L6.00002 11.6333L2.66669 8.29999\" stroke=\"%23458BFF\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\nhtml[data-user-color-scheme=\"dark\"] .zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-arrow {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23458BFF' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n}\n\n/* ==============================\n   Multi-Select Styles\n   ============================== */\n\n/* --- Chip Trigger --- */\n.zcat-dropdown-trigger.zcat-dropdown-trigger-chips {\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 4px 28px 4px 6px;\n  white-space: normal;\n  height: auto;\n  min-height: 36px;\n}\n.zcat-dropdown-chips-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex: 1;\n  min-width: 0;\n}\n.zcat-dropdown-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 1px 4px 1px 8px;\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 4px;\n  font-size: 13px;\n  color: var(--zcat-body-text-primary);\n  line-height: 20px;\n  max-width: 120px;\n  white-space: nowrap;\n}\n.zcat-dropdown-chip-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.zcat-dropdown-chip-remove {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--zcat-body-text-grey);\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  transition: background 0.12s, color 0.12s;\n}\n.zcat-dropdown-chip-remove:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Multi-Select Menu Items --- */\n.zcat-dropdown-item-multi {\n  padding-right: 8px;\n}\n.zcat-dropdown-item-multi.selected {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n  color: var(--zcat-body-text-primary);\n  font-weight: 400;\n}\n.zcat-dropdown-item-multi.selected::after {\n  display: none;\n}\n\n/* --- Checkbox uses <zcat-checkbox> component now --- */\n.zcat-dropdown-item-multi zcat-checkbox {\n  pointer-events: none;\n}\n\n/* --- Multi-Select Size Adjustments --- */\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-trigger.zcat-dropdown-trigger-chips {\n  min-height: 28px;\n  padding: 2px 22px 2px 4px;\n  gap: 3px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-chip {\n  font-size: 12px;\n  line-height: 18px;\n  padding: 0 3px 0 6px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-trigger.zcat-dropdown-trigger-chips {\n  min-height: 24px;\n  padding: 2px 20px 2px 3px;\n  gap: 2px;\n}\n.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-chip {\n  font-size: 11px;\n  line-height: 16px;\n  padding: 0 2px 0 5px;\n}\n\n/* --- Dark Mode Multi-Select --- */\nhtml[data-user-color-scheme=\"dark\"] .zcat-dropdown-chip {\n  background: var(--zcat-btn-grey-bg-default);\n  border-color: var(--zcat-btn-grey-border-default);\n}\nhtml[data-user-color-scheme=\"dark\"] .zcat-dropdown-chip-remove:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: var(--zcat-body-text-primary);\n}\n</style>";;
ZcatDropdown._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"s","p":[1,5,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":9,"sibl":[8]},{"t":"s","p":[1,5,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"},{"t":"tX","p":[0,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7]},{"t":"s","p":[1,5,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"tX","p":[1,1,0]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3,1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"s","p":[1,5,13],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5]},{"t":"a","p":[1,9]},{"t":"s","p":[1,9,1],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"s","p":[1,9,3,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,9,3,3]},{"t":"f","p":[1,9,3,3],"dN":[{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"},{"t":"tX","p":[1,3,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"},{"t":"tX","p":[1,5,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[1,9,3,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,9,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"},{"t":"tX","p":[1,1,3,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[10,9,7,5,3,1]}];;

ZcatDropdown._observedAttributes = [
  "self",
  "zcatProp",
  "isOpen",
  "selectedValue",
  "selectedLabel",
  "selectedValues",
  "selectedItems",
  "multiDisplayLabel",
  "searchQuery",
  "filteredOptions"
];

export { ZcatDropdown };
ZcatDropdown.register("zcat-dropdown", {
  hash: "ZcatDropdown_2",
  refHash: "C_zcat-app_app_0"
});

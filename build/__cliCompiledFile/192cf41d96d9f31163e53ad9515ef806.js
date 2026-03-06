import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-dropdown.js';
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class DropdownComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  didConnect() {
    this._bindCustomiseEvents();
  }

  _getDefaultOptions(withIcons) {
    if (withIcons) {
      return [
        { "name": "India", "value": "india", "icon": true },
        { "name": "Pakistan", "value": "pakistan", "icon": true },
        { "name": "Gujarat", "value": "gujarat", "icon": true },
        { "name": "Mumbai", "value": "mumbai", "icon": true },
        { "name": "Jammu", "value": "jammu", "icon": true }
      ];
    }
    return [
      { "name": "India", "value": "india" },
      { "name": "Pakistan", "value": "pakistan" },
      { "name": "Gujarat", "value": "gujarat" },
      { "name": "Mumbai", "value": "mumbai" },
      { "name": "Jammu", "value": "jammu" }
    ];
  }

  _bindCustomiseEvents() {
    let comp = this;
    let node = this.$node;

    // Bind select dropdowns
    let variantSelect = node.querySelector('[data-action="changeDropdownVariant"]');
    let sizeSelect = node.querySelector('[data-action="changeDropdownSize"]');
    let stateSelect = node.querySelector('[data-action="changeDropdownState"]');
    let widthSelect = node.querySelector('[data-action="changeDropdownWidth"]');

    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        let ddObj = comp.getData('dropdownStyles');
        let val = e.target.value;
        if (val === 'multiple') {
          comp.$app.objectUtils(ddObj, 'add', 'variant', 'multiple');
          comp.$app.objectUtils(ddObj, 'add', 'selected', ['india', 'pakistan']);
          comp.$app.objectUtils(ddObj, 'add', 'multipleType', 'default');
          comp.$app.objectUtils(ddObj, 'add', 'menuListType', 'checkbox');
          comp._toggleMultiOptions(true);
        } else {
          comp.$app.objectUtils(ddObj, 'add', 'variant', val);
          comp.$app.objectUtils(ddObj, 'add', 'selected', 'india');
          comp.$app.objectUtils(ddObj, 'delete', 'multipleType');
          comp.$app.objectUtils(ddObj, 'delete', 'menuListType');
          comp._toggleMultiOptions(false);
        }
        comp.constructCodeSnippet();
      });
    }
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('dropdownStyles'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (stateSelect) {
      stateSelect.addEventListener('change', function (e) {
        let val = e.target.value;
        let ddObj = comp.getData('dropdownStyles');
        if (val === 'disabled') {
          comp.$app.objectUtils(ddObj, 'add', 'disabled', true);
          comp.$app.objectUtils(ddObj, 'add', 'errorMessage', '');
        } else if (val === 'error') {
          comp.$app.objectUtils(ddObj, 'add', 'disabled', false);
          comp.$app.objectUtils(ddObj, 'add', 'errorMessage', 'This field is required');
        } else {
          comp.$app.objectUtils(ddObj, 'add', 'disabled', false);
          comp.$app.objectUtils(ddObj, 'add', 'errorMessage', '');
        }
        comp.constructCodeSnippet();
      });
    }
    if (widthSelect) {
      widthSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('dropdownStyles'), 'add', 'width', e.target.value);
        comp.constructCodeSnippet();
      });
    }

    // Bind multi-select specific controls
    let multiTypeSelect = node.querySelector('[data-action="changeMultipleType"]');
    let menuListTypeSelect = node.querySelector('[data-action="changeMenuListType"]');

    if (multiTypeSelect) {
      multiTypeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('dropdownStyles'), 'add', 'multipleType', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (menuListTypeSelect) {
      menuListTypeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('dropdownStyles'), 'add', 'menuListType', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  _toggleMultiOptions(show) {
    let rows = this.$node.querySelectorAll('[data-section="multipleOptions"]');
    if (rows) {
      rows.forEach(function(r) { r.style.display = show ? '' : 'none'; });
    }
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      dropdownStyles: prop('object', {
        default: {
          "placeholder": "Select Option",
          "label": "Label",
          "selected": "india",
          "variant": "default",
          "size": "default",
          "disabled": false,
          "errorMessage": "",
          "isOptional": false,
          "width": "zcat-w200",
          "options": [
            { "name": "India", "value": "india" },
            { "name": "Pakistan", "value": "pakistan" },
            { "name": "Gujarat", "value": "gujarat" },
            { "name": "Mumbai", "value": "mumbai" },
            { "name": "Jammu", "value": "jammu" }
          ],
          "callback": { "name": "onDropdownSelect" }
        }
      }),
      resetButtonObj: prop('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleLabel' } }
      }),
      toggleLabelInfoIconObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleLabelInfoIcon' } }
      }),
      toggleOptionalObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleOptional' } }
      }),
      toggleIconLeftObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleIconLeft' } }
      }),
      toggleMenuHeaderObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleMenuHeader' } }
      }),
      toggleMenuSearchObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleMenuSearch' } }
      }),
      toggleCreateNewObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleCreateNew' } }
      }),
      toggleMenuIconObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleMenuIcon' } }
      }),
      jsCodeSnippet: prop('object', { default: { code: "" } }),
      slyteCodeSnippet: prop('object', { default: { code: "" } }),
      newSlyteCodeSnippet: prop('object', { default: { code: "" } }),
      htmlCodeSnippet: prop('object', { default: { code: "" } }),
      cssCodeSnippet: prop('object', { default: { code: "" } })
    }), arg1);
  }

  constructCodeSnippet() {
    let ddObj = this.getData('dropdownStyles') || {};
    let defaults = {
      placeholder: 'Select Option', label: 'Label', selected: 'india',
      variant: 'default', size: 'default', disabled: false,
      errorMessage: '', isOptional: false, width: 'zcat-w200'
    };
    let hasIcon = ddObj.options && ddObj.options.length > 0 && ddObj.options[0].icon;

    // --- Build prop lines ---
    let propLines = [];
    propLines.push('    "placeholder": "' + (ddObj.placeholder || defaults.placeholder) + '"');
    if (ddObj.label) { propLines.push('    "label": "' + ddObj.label + '"'); }
    if (ddObj.infoIcon) { propLines.push('    "infoIcon": true'); }
    if (ddObj.isOptional) { propLines.push('    "isOptional": true'); }
    if (ddObj.selected) { propLines.push('    "selected": "' + ddObj.selected + '"'); }
    if (ddObj.icon) { propLines.push('    "icon": true'); }
    if (ddObj.variant && ddObj.variant !== defaults.variant) { propLines.push('    "variant": "' + ddObj.variant + '"'); }
    if (ddObj.size && ddObj.size !== defaults.size) { propLines.push('    "size": "' + ddObj.size + '"'); }
    if (ddObj.disabled === true) { propLines.push('    "disabled": true'); }
    if (ddObj.errorMessage) { propLines.push('    "errorMessage": "' + ddObj.errorMessage + '"'); }
    if (ddObj.width && ddObj.width !== defaults.width) { propLines.push('    "width": "' + ddObj.width + '"'); }
    if (ddObj.dropLabel) { propLines.push('    "dropLabel": "' + ddObj.dropLabel + '"'); }
    if (ddObj.isSearchable) { propLines.push('    "isSearchable": true'); }
    if (ddObj.createNewBtn) {
      propLines.push('    "createNewBtn": {\n      "label": "Create New",\n      "callback": { "name": "onCreateNew" }\n    }');
    }

    // Options with or without icons
    let optStrs = [];
    let opts = ddObj.options || [];
    for (let i = 0; i < opts.length; i++) {
      let o = opts[i];
      if (o.icon) {
        optStrs.push('      { "name": "' + o.name + '", "value": "' + o.value + '", "icon": true }');
      } else {
        optStrs.push('      { "name": "' + o.name + '", "value": "' + o.value + '" }');
      }
    }
    propLines.push('    "options": [\n' + optStrs.join(',\n') + '\n    ]');
    propLines.push('    "callback": { "name": "onSelect" }');

    // 1. sLyte tab
    let slyte_code = '<zcat-dropdown\n  self="{{self}}"\n  zcat-prop="{{dropdownStyles}}"\n></zcat-dropdown>';

    // 2. JS tab
    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    dropdownStyles: prop(\'object\', {\n      default: {\n' + propLines.join(',\n') + '\n      }\n    })\n  };\n}';

    // 3. sLyte New tab
    let newSlyteAttrs = [];
    newSlyteAttrs.push('  self="{{self}}"');
    newSlyteAttrs.push('  zcat-prop-placeholder="' + (ddObj.placeholder || defaults.placeholder) + '"');
    if (ddObj.label) { newSlyteAttrs.push('  zcat-prop-label="' + ddObj.label + '"'); }
    if (ddObj.infoIcon) { newSlyteAttrs.push('  zcat-prop-info-icon="true"'); }
    if (ddObj.isOptional) { newSlyteAttrs.push('  zcat-prop-is-optional="true"'); }
    if (ddObj.selected) { newSlyteAttrs.push('  zcat-prop-selected="' + ddObj.selected + '"'); }
    if (ddObj.icon) { newSlyteAttrs.push('  zcat-prop-icon="true"'); }
    if (ddObj.variant && ddObj.variant !== defaults.variant) { newSlyteAttrs.push('  zcat-prop-variant="' + ddObj.variant + '"'); }
    if (ddObj.size && ddObj.size !== defaults.size) { newSlyteAttrs.push('  zcat-prop-size="' + ddObj.size + '"'); }
    if (ddObj.disabled === true) { newSlyteAttrs.push('  zcat-prop-disabled="true"'); }
    if (ddObj.errorMessage) { newSlyteAttrs.push('  zcat-prop-error-message="' + ddObj.errorMessage + '"'); }
    if (ddObj.dropLabel) { newSlyteAttrs.push('  zcat-prop-drop-label="' + ddObj.dropLabel + '"'); }
    if (ddObj.isSearchable) { newSlyteAttrs.push('  zcat-prop-is-searchable="true"'); }
    newSlyteAttrs.push('  zcat-prop-callback-name="onSelect"');

    let methodsStr = '// Inline JS — callbacks via self\nstatic methods() {\n  return {\n    onSelect(item) {\n      console.log("Selected:", item.name);\n    }';
    if (ddObj.createNewBtn) {
      methodsStr += ',\n    onCreateNew() {\n      console.log("Create new clicked");\n    }';
    }
    methodsStr += '\n  };\n}';

    let newSlyte_code = '// Template\n<zcat-dropdown\n' + newSlyteAttrs.join('\n') + '\n></zcat-dropdown>\n\n' + methodsStr;

    // 4. HTML tab
    let wrapperClasses = ['zcat-dropdown-wrapper'];
    let variant = ddObj.variant || 'default';
    let size = ddObj.size || 'default';
    if (variant === 'ghost') { wrapperClasses.push('zcat-dropdown-ghost'); }
    if (size === 'small') { wrapperClasses.push('zcat-dropdown-sm'); }
    else if (size === 'extra-small') { wrapperClasses.push('zcat-dropdown-exsm'); }
    if (ddObj.disabled) { wrapperClasses.push('zcat-dropdown-disabled'); }
    if (ddObj.errorMessage) { wrapperClasses.push('zcat-dropdown-error'); }

    let htmlInner = '';
    if (ddObj.label) {
      htmlInner += '  <div class="zcat-dropdown-label-row">\n';
      htmlInner += '    <label class="zcat-dropdown-label">' + ddObj.label;
      if (ddObj.isOptional) { htmlInner += ' <span class="zcat-dropdown-optional">(Optional)</span>'; }
      htmlInner += '</label>\n';
      if (ddObj.infoIcon) {
        htmlInner += '    <svg class="zcat-dropdown-info-icon" width="12" height="12">...</svg>\n';
      }
      htmlInner += '  </div>\n';
    }
    htmlInner += '  <div class="zcat-dropdown-trigger-wrap">\n';
    if (ddObj.icon) {
      htmlInner += '    <svg class="zcat-dropdown-icon-left" width="16" height="16">...</svg>\n';
    }
    let triggerCls = 'zcat-dropdown-trigger' + (ddObj.icon ? ' has-icon-left' : '');
    htmlInner += '    <div class="' + triggerCls + '">\n';
    let val = ddObj.selected ? 'India' : '';
    if (val) {
      htmlInner += '      <span class="zcat-dropdown-value">' + val + '</span>\n';
    } else {
      htmlInner += '      <span class="zcat-dropdown-placeholder">' + (ddObj.placeholder || defaults.placeholder) + '</span>\n';
    }
    htmlInner += '      <span class="zcat-dropdown-arrow"></span>\n';
    htmlInner += '    </div>\n';
    htmlInner += '  </div>\n';

    // Menu HTML
    htmlInner += '  <!-- Menu (opens on click) -->\n';
    htmlInner += '  <div class="zcat-dropdown-menu">\n';
    if (ddObj.isSearchable) {
      htmlInner += '    <div class="zcat-dropdown-search-wrap">\n      <input class="zcat-dropdown-search-input" placeholder="Search"/>\n    </div>\n';
    }
    htmlInner += '    <div class="zcat-dropdown-menu-body">\n';
    if (ddObj.dropLabel) {
      htmlInner += '      <div class="zcat-dropdown-menu-header">' + ddObj.dropLabel + '</div>\n';
    }
    for (let i = 0; i < opts.length; i++) {
      let iconStr = hasIcon ? '<svg class="zcat-dropdown-item-icon">...</svg> ' : '';
      htmlInner += '      <div class="zcat-dropdown-item">' + iconStr + '<span>' + opts[i].name + '</span></div>\n';
    }
    htmlInner += '    </div>\n';
    if (ddObj.createNewBtn) {
      htmlInner += '    <div class="zcat-dropdown-footer">\n      <div class="zcat-dropdown-create-btn">+ Create New</div>\n    </div>\n';
    }
    htmlInner += '  </div>\n';

    if (ddObj.errorMessage) {
      htmlInner += '  <span class="zcat-dropdown-error-msg">' + ddObj.errorMessage + '</span>\n';
    }

    let html_code = '<div class="' + wrapperClasses.join(' ') + '">\n' + htmlInner + '</div>';

    // 5. CSS tab
    let css_code = '/* Dropdown Wrapper */\n';
    css_code += '.zcat-dropdown-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  font-family: var(--zcat-font-family-primary);\n}\n\n';
    css_code += '/* Label */\n';
    css_code += '.zcat-dropdown-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n\n';
    css_code += '/* Trigger */\n';
    css_code += '.zcat-dropdown-trigger {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 36px;\n  padding: 0 28px 0 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  color: var(--zcat-inputField-text-active);\n  font-size: 14px;\n  cursor: pointer;\n}\n';
    css_code += '.zcat-dropdown-trigger:hover {\n  border: var(--zcat-inputField-border-hover);\n}\n';
    css_code += '.zcat-dropdown-trigger.active {\n  border: var(--zcat-inputField-border-active);\n}\n\n';

    if (variant === 'ghost') {
      css_code += '/* Ghost */\n';
      css_code += '.zcat-dropdown-ghost .zcat-dropdown-trigger {\n  background: transparent;\n  border-color: transparent;\n  color: var(--zcat-btn-ghost-text-primary-default);\n}\n';
      css_code += '.zcat-dropdown-ghost .zcat-dropdown-trigger:hover {\n  background: var(--zcat-btn-ghost-bg-primary-hover);\n}\n\n';
    }

    css_code += '/* Menu */\n';
    css_code += '.zcat-dropdown-menu {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0; right: 0;\n  background: var(--zcat-body-bg);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 6px;\n  box-shadow: 0 4px 14px -4px rgba(0,0,0,0.12);\n}\n\n';
    css_code += '/* Items */\n';
    css_code += '.zcat-dropdown-item {\n  padding: 8px 28px 8px 4px;\n  font-size: 14px;\n  color: var(--zcat-body-text-primary);\n  cursor: pointer;\n  border-radius: 6px;\n}\n';
    css_code += '.zcat-dropdown-item:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n';
    css_code += '.zcat-dropdown-item.selected {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n}\n';

    if (ddObj.isSearchable) {
      css_code += '\n/* Search */\n';
      css_code += '.zcat-dropdown-search-input {\n  width: 100%;\n  height: 32px;\n  padding: 0 8px 0 30px;\n  border: var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  font-size: 13px;\n}\n';
    }
    if (ddObj.createNewBtn) {
      css_code += '\n/* Create New Button */\n';
      css_code += '.zcat-dropdown-create-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 4px;\n  font-size: 14px;\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n  cursor: pointer;\n}\n';
    }

    if (size !== 'default') {
      let sizeMap = {
        'small': { cls: 'zcat-dropdown-sm', h: '28px', fs: '13px', p: '0 22px 0 6px' },
        'extra-small': { cls: 'zcat-dropdown-exsm', h: '24px', fs: '12px', p: '0 22px 0 4px' }
      };
      let s = sizeMap[size];
      if (s) {
        css_code += '\n/* Size: ' + size + ' */\n';
        css_code += '.' + s.cls + ' .zcat-dropdown-trigger {\n  min-height: ' + s.h + ';\n  font-size: ' + s.fs + ';\n  padding: ' + s.p + ';\n}\n';
      }
    }

    if (ddObj.disabled) {
      css_code += '\n/* Disabled */\n';
      css_code += '.zcat-dropdown-disabled .zcat-dropdown-trigger {\n  background: var(--zcat-inputField-bg-disabled);\n  color: var(--zcat-inputField-text-disabled);\n  cursor: not-allowed;\n}\n';
    }
    if (ddObj.errorMessage) {
      css_code += '\n/* Error */\n';
      css_code += '.zcat-dropdown-error .zcat-dropdown-trigger {\n  border-color: var(--zcat-inputField-border-error);\n  background: var(--zcat-inputField-bg-error);\n}\n';
      css_code += '.zcat-dropdown-error-msg {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n}\n';
    }

    if (ddObj.icon) {
      css_code += '\n/* Icon Left */\n';
      css_code += '.zcat-dropdown-icon-left {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n';
      css_code += '.zcat-dropdown-trigger.has-icon-left {\n  padding-left: 30px;\n}\n';
    }

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('newSlyteCodeSnippet.code', newSlyte_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('dropdownStyles', {
          "placeholder": "Select Option",
          "label": "Label",
          "selected": "india",
          "variant": "default",
          "size": "default",
          "disabled": false,
          "errorMessage": "",
          "isOptional": false,
          "width": "zcat-w200",
          "options": [
            { "name": "India", "value": "india" },
            { "name": "Pakistan", "value": "pakistan" },
            { "name": "Gujarat", "value": "gujarat" },
            { "name": "Mumbai", "value": "mumbai" },
            { "name": "Jammu", "value": "jammu" }
          ],
          "callback": { "name": "onDropdownSelect" }
        });
        this._toggleMultiOptions(false);
        // Reset toggle prop objects
        this.$app.objectUtils(this.getData('toggleLabelObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleLabelInfoIconObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleOptionalObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleIconLeftObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleMenuHeaderObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleMenuSearchObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleCreateNewObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleMenuIconObj'), 'add', 'checked', false);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function(s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleLabel(checked) {
        this.$app.objectUtils(this.getData('dropdownStyles'), 'add', 'label', checked ? 'Label' : '');
        this.constructCodeSnippet();
      },
      onToggleLabelInfoIcon(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'infoIcon', true);
        } else {
          this.$app.objectUtils(ddObj, 'delete', 'infoIcon');
        }
        this.constructCodeSnippet();
      },
      onToggleOptional(checked) {
        this.$app.objectUtils(this.getData('dropdownStyles'), 'add', 'isOptional', checked);
        this.constructCodeSnippet();
      },
      onToggleIconLeft(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'icon', true);
        } else {
          this.$app.objectUtils(ddObj, 'delete', 'icon');
        }
        this.constructCodeSnippet();
      },
      onToggleMenuHeader(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'dropLabel', 'Dropdown header');
        } else {
          this.$app.objectUtils(ddObj, 'delete', 'dropLabel');
        }
        this.constructCodeSnippet();
      },
      onToggleMenuSearch(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'isSearchable', true);
        } else {
          this.$app.objectUtils(ddObj, 'delete', 'isSearchable');
        }
        this.constructCodeSnippet();
      },
      onToggleCreateNew(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'createNewBtn', { label: 'Create New', callback: { name: 'dropdownCreateBtnClicked' } });
        } else {
          this.$app.objectUtils(ddObj, 'delete', 'createNewBtn');
        }
        this.constructCodeSnippet();
      },
      onToggleMenuIcon(checked) {
        let ddObj = this.getData('dropdownStyles');
        if (checked) {
          this.$app.objectUtils(ddObj, 'add', 'options', this._getDefaultOptions(true));
        } else {
          this.$app.objectUtils(ddObj, 'add', 'options', this._getDefaultOptions(false));
        }
        this.constructCodeSnippet();
      },
      onDropdownSelect(item) {
        console.log('Dropdown selected:', item);
        if (window.__zcatToast) {
          window.__zcatToast('Selected: ' + item.name, 'success');
        }
      },
      dropdownCreateBtnClicked() {
        console.log('Create new button clicked');
        if (window.__zcatToast) {
          window.__zcatToast('Create New clicked!', 'info');
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showNewSlyteTab() { this.setData('activeTab', 'newslyte'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let code;
        if (tab === 'slyte') { code = this.getData('slyteCodeSnippet.code'); }
        else if (tab === 'js') { code = this.getData('jsCodeSnippet.code'); }
        else if (tab === 'newslyte') { code = this.getData('newSlyteCodeSnippet.code'); }
        else if (tab === 'html') { code = this.getData('htmlCodeSnippet.code'); }
        else if (tab === 'css') { code = this.getData('cssCodeSnippet.code'); }
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code);
          if (window.__zcatToast) { window.__zcatToast('Copied to clipboard!', 'success'); }
        }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

DropdownComp._template = "<template tag-name=\"dropdown-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Dropdown</h1> <p class=\"zcat-page-desc\">A dropdown lets users choose one or more options from a collapsible list. Use it when the option set is too large for radio buttons or checkboxes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <!-- Left: Preview + Code --> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{dropdownStyles}}\"></zcat-dropdown> </div> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <!-- Variant --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changeDropdownVariant\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"ghost\">Ghost</option> <option value=\"multiple\">Multiple</option> </select> </div> <!-- Types of Multiple dropdown (shown when variant=multiple) --> <div class=\"zcat-custom-row\" data-section=\"multipleOptions\" style=\"display:none\"> <span class=\"zcat-custom-label\">Types of Multiple dropdown</span> <select data-action=\"changeMultipleType\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"chip\">Chip</option> </select> </div> <!-- Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeDropdownSize\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"small\">Small</option> <option value=\"extra-small\">Extra-small</option> </select> </div> <!-- Label toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <!-- Label with Info Icon toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label with Info Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelInfoIconObj}}\"></zcat-toggle> </div> <!-- Optional toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Optional</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleOptionalObj}}\"></zcat-toggle> </div> <!-- Icon Left toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Left</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleIconLeftObj}}\"></zcat-toggle> </div> <!-- Input State --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Input State</span> <select data-action=\"changeDropdownState\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"disabled\">Disabled</option> <option value=\"error\">Error</option> </select> </div> <!-- Dropdown Width --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Dropdown Width</span> <select data-action=\"changeDropdownWidth\" class=\"zcat-custom-select\"> <option value=\"zcat-w200\">200px</option> <option value=\"zcat-w300\">300px</option> <option value=\"zcat-w100p\">Full-width</option> <option value=\"zcat-w-fc\">Fit-content</option> </select> </div> <!-- MenuList Customization Section --> <div class=\"zcat-custom-section-title\" style=\"margin-top:16px;margin-bottom:8px;font-weight:600;font-size:13px;color:var(--zcat-body-text-primary)\">MenuList Customization</div> <!-- Types of Multiple MenuList (shown when variant=multiple) --> <div class=\"zcat-custom-row\" data-section=\"multipleOptions\" style=\"display:none\"> <span class=\"zcat-custom-label\">Types of Multiple MenuList</span> <select data-action=\"changeMenuListType\" class=\"zcat-custom-select\"> <option value=\"checkbox\">Checkbox</option> <option value=\"default\">Default</option> </select> </div> <!-- Header toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Header</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMenuHeaderObj}}\"></zcat-toggle> </div> <!-- SearchField toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">SearchField</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMenuSearchObj}}\"></zcat-toggle> </div> <!-- Include Button (Create New) toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Include Button</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCreateNewObj}}\"></zcat-toggle> </div> <!-- Show Icon toggle --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Icon</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMenuIconObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Default Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row\"><label class=\"zcat-dropdown-label\">Label</label></div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Placeholder</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row\"><label class=\"zcat-dropdown-label\">Label</label></div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-placeholder\">Select Option</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Optional</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row\"><label class=\"zcat-dropdown-label\">Label <span class=\"zcat-dropdown-optional\">(Optional)</span></label></div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Ghost Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Ghost</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-ghost\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Ghost Placeholder</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-ghost\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-placeholder\">Select Option</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default (36px)</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small (28px)</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-sm\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra-small (24px)</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-exsm\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-disabled\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row zcat-dropdown-label-disabled\"><label class=\"zcat-dropdown-label\">Label</label></div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-error\" style=\"width:180px;padding-bottom:20px\"> <div class=\"zcat-dropdown-label-row\"><label class=\"zcat-dropdown-label\">Label</label></div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> <span class=\"zcat-dropdown-error-msg\">This field is required</span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Ghost Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper zcat-dropdown-ghost zcat-dropdown-disabled\" style=\"width:180px\"> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Menu Features</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Icon Left</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row\"><label class=\"zcat-dropdown-label\">Label</label></div> <div class=\"zcat-dropdown-trigger-wrap\"> <svg class=\"zcat-dropdown-icon-left\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line></svg> <div class=\"zcat-dropdown-trigger has-icon-left\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Label Info</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-dropdown-wrapper\" style=\"width:180px\"> <div class=\"zcat-dropdown-label-row\"> <label class=\"zcat-dropdown-label\">Label</label> <svg class=\"zcat-dropdown-info-icon\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--zcat-inputField-icon-label)\" stroke-width=\"1.3\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line></svg> </div> <div class=\"zcat-dropdown-trigger-wrap\"><div class=\"zcat-dropdown-trigger\"> <span class=\"zcat-dropdown-value\">India</span> <span class=\"zcat-dropdown-arrow\"></span> </div></div> </div> </div> </div> </div> </div></template></template> </div> </template>";;
DropdownComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,1],"in":15,"sibl":[14],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,5],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,7],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,9],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":14,"sibl":[13],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":13,"sibl":[12],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":12,"sibl":[11],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":11,"sibl":[10],"cn":"lc_id_0"},{"t":"s","p":[0,3,9,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,15,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,15,3],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,19,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,19,3],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,23,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,23,3],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,27,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,27,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,47,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,47,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,51,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,51,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,55,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,55,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,59,3],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,59,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[15,9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;

DropdownComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "dropdownStyles",
  "resetButtonObj",
  "toggleLabelObj",
  "toggleLabelInfoIconObj",
  "toggleOptionalObj",
  "toggleIconLeftObj",
  "toggleMenuHeaderObj",
  "toggleMenuSearchObj",
  "toggleCreateNewObj",
  "toggleMenuIconObj",
  "jsCodeSnippet",
  "slyteCodeSnippet",
  "newSlyteCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { DropdownComp };

DropdownComp.register("dropdown-comp", {
  hash: "DropdownComp_4",
  refHash: "C_zcat-app_app_0"
});

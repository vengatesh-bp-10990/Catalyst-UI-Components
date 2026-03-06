"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/avatar-comp"],{

/***/ 35267499:
/*!**********************************************!*\
  !*** ./components/javascript/avatar-comp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComp": () => (/* binding */ AvatarComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_avatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-avatar.js */ 26299788);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class AvatarComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  didConnect() {
    this._bindCustomiseEvents();
  }

  _bindCustomiseEvents() {
    let comp = this;
    let node = this.$node;

    let typeSelect = node.querySelector('[data-action="changeAvatarType"]');
    let sizeSelect = node.querySelector('[data-action="changeAvatarSize"]');
    let statusSelect = node.querySelector('[data-action="changeAvatarStatus"]');

    if (typeSelect) {
      typeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('avatarObj'), 'add', 'type', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (sizeSelect) {
      sizeSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('avatarObj'), 'add', 'size', e.target.value);
        comp.constructCodeSnippet();
      });
    }
    if (statusSelect) {
      statusSelect.addEventListener('change', function (e) {
        let val = e.target.value;
        comp.$app.objectUtils(comp.getData('avatarObj'), 'add', 'status', val === 'none' ? '' : val);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let avatarObj = this.getData('avatarObj') || {};

    let slyte_code = '<zcat-avatar\n  self="{{self}}"\n  zcat-prop="{{avatarObj}}"\n></zcat-avatar>';

    let propObj = {};
    propObj.type = avatarObj.type || 'icon';
    if (avatarObj.size) propObj.size = avatarObj.size;
    if (avatarObj.name) propObj.name = avatarObj.name;
    if (avatarObj.status) propObj.status = avatarObj.status;
    if (avatarObj.type === 'img' && avatarObj.src) propObj.src = avatarObj.src;

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    avatarObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-avatar' + (avatarObj.size === 'small' ? ' zcat-avatar-sm' : avatarObj.size === 'large' ? ' zcat-avatar-lg' : avatarObj.size === 'extra-large' ? ' zcat-avatar-xl' : ' zcat-avatar-md') + '">\n';
    if (avatarObj.type === 'letter') {
      html_code += '  <span class="zcat-avatar-letter">A</span>\n';
    } else if (avatarObj.type === 'img') {
      html_code += '  <img class="zcat-avatar-img" src="..." alt="Avatar"/>\n';
    } else {
      html_code += '  <svg class="zcat-avatar-icon" viewBox="0 0 24 24" ...><!-- user icon --></svg>\n';
    }
    if (avatarObj.status) {
      html_code += '  <span class="zcat-avatar-status zcat-avatar-status-' + avatarObj.status + '"></span>\n';
    }
    html_code += '</div>';

    let css_code = '.zcat-avatar {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--zcat-avatar-bg);\n  color: var(--zcat-avatar-text);\n  overflow: hidden;\n}\n\n';
    css_code += '.zcat-avatar-sm { width: 24px; height: 24px; }\n';
    css_code += '.zcat-avatar-md { width: 32px; height: 32px; }\n';
    css_code += '.zcat-avatar-lg { width: 40px; height: 40px; }\n';
    css_code += '.zcat-avatar-xl { width: 56px; height: 56px; }\n\n';
    css_code += '.zcat-avatar-status {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n';
    css_code += '.zcat-avatar-status-online { background: #22c55e; }\n';
    css_code += '.zcat-avatar-status-busy { background: #ef4444; }\n';
    css_code += '.zcat-avatar-status-away { background: #f59e0b; }\n';
    css_code += '.zcat-avatar-status-offline { background: #9ca3af; }';

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: this }),
      avatarObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          type: 'letter',
          name: 'Alex Morgan',
          size: 'medium',
          status: 'online'
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      // Variant demos
      variantIconObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'icon', size: 'medium' }
      }),
      variantLetterObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'Jane Doe', size: 'medium' }
      }),
      variantImgObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'img', src: 'https://i.pravatar.cc/80?img=5', name: 'Profile', size: 'medium' }
      }),
      variantSmObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'SM', size: 'small' }
      }),
      variantMdObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'MD', size: 'medium' }
      }),
      variantLgObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'LG', size: 'large' }
      }),
      variantXlObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'XL', size: 'extra-large' }
      }),
      variantOnlineObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'ON', size: 'large', status: 'online' }
      }),
      variantBusyObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'BU', size: 'large', status: 'busy' }
      }),
      variantAwayObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'AW', size: 'large', status: 'away' }
      }),
      variantOfflineObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { type: 'letter', name: 'OF', size: 'large', status: 'offline' }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('avatarObj', {
          type: 'letter',
          name: 'Alex Morgan',
          size: 'medium',
          status: 'online'
        });
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onAvatarClick() {
        // demo callback
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let code;
        if (tab === 'slyte') code = this.getData('slyteCodeSnippet.code');
        else if (tab === 'js') code = this.getData('jsCodeSnippet.code');
        else if (tab === 'html') code = this.getData('htmlCodeSnippet.code');
        else if (tab === 'css') code = this.getData('cssCodeSnippet.code');
        if (navigator.clipboard) { navigator.clipboard.writeText(code); }
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

AvatarComp._template = "<template tag-name=\"avatar-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Avatar</h1> <p class=\"zcat-page-desc\">Avatars represent users or entities with images, initials, or icons in various sizes and states.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{avatarObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Type</span> <select data-action=\"changeAvatarType\" class=\"zcat-custom-select\"> <option value=\"letter\">Letter</option> <option value=\"icon\">Icon</option> <option value=\"img\">Image</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Size</span> <select data-action=\"changeAvatarSize\" class=\"zcat-custom-select\"> <option value=\"small\">Small</option> <option value=\"medium\" selected=\"\">Medium</option> <option value=\"large\">Large</option> <option value=\"extra-large\">Extra Large</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Status</span> <select data-action=\"changeAvatarStatus\" class=\"zcat-custom-select\"> <option value=\"online\">Online</option> <option value=\"busy\">Busy</option> <option value=\"away\">Away</option> <option value=\"offline\">Offline</option> <option value=\"none\">None</option> </select> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Types</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Icon</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantIconObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Letter</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantLetterObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Image</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantImgObj}}\"></zcat-avatar> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small (24px)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantSmObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Medium (32px)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantMdObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large (40px)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantLgObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Extra Large (56px)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantXlObj}}\"></zcat-avatar> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Status</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Online</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantOnlineObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Busy</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantBusyObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Away</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantAwayObj}}\"></zcat-avatar> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Offline</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-avatar self=\"{{self}}\" zcat-prop=\"{{variantOfflineObj}}\"></zcat-avatar> </div> </div> </div> </div></template></template> </div> </template><style>/* avatar-comp specific overrides if needed */\n</style>";;
AvatarComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,7,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,5,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,7,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,5,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,7,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,9,8,7,6,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

AvatarComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "avatarObj",
  "resetButtonObj",
  "variantIconObj",
  "variantLetterObj",
  "variantImgObj",
  "variantSmObj",
  "variantMdObj",
  "variantLgObj",
  "variantXlObj",
  "variantOnlineObj",
  "variantBusyObj",
  "variantAwayObj",
  "variantOfflineObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



AvatarComp.register("avatar-comp", {
  hash: "AvatarComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=avatar-comp.js.map
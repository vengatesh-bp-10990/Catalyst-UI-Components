"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/pagination-comp"],{

/***/ 93282883:
/*!**************************************************!*\
  !*** ./components/javascript/pagination-comp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComp": () => (/* binding */ PaginationComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_pagination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-pagination.js */ 35378205);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class PaginationComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
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

    let variantSelect = node.querySelector('[data-action="changePaginationVariant"]');
    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('paginationObj'), 'add', 'variant', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let paginationObj = this.getData('paginationObj') || {};

    let slyte_code = '<zcat-pagination\n  self="{{self}}"\n  zcat-prop="{{paginationObj}}"\n></zcat-pagination>';

    let propObj = {};
    propObj.variant = paginationObj.variant || 'primary';
    propObj.totalRecords = paginationObj.totalRecords || 150;
    propObj.rowsPerPage = paginationObj.rowsPerPage || 10;
    propObj.callback = { name: 'onPageChange' };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    paginationObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-pagination zcat-pagination-' + (paginationObj.variant || 'primary') + '">\n';
    if ((paginationObj.variant || 'primary') !== 'secondary') {
      html_code += '  <div class="zcat-pagination-left">\n';
      html_code += '    <span class="zcat-pagination-label">Rows per page:</span>\n';
      html_code += '    <select class="zcat-pagination-select">\n';
      html_code += '      <option>10</option><option>25</option><option>50</option>\n';
      html_code += '    </select>\n';
      html_code += '  </div>\n';
    }
    html_code += '  <div class="zcat-pagination-right">\n';
    html_code += '    <span class="zcat-pagination-info">1 – 10 of 150</span>\n';
    html_code += '    <div class="zcat-pagination-nav">\n';
    html_code += '      <button class="zcat-pagination-btn">«</button>\n';
    html_code += '      <button class="zcat-pagination-btn">‹</button>\n';
    html_code += '      <button class="zcat-pagination-btn">›</button>\n';
    html_code += '      <button class="zcat-pagination-btn">»</button>\n';
    html_code += '    </div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n\n';
    css_code += '.zcat-pagination-nav {\n  display: flex;\n  gap: 4px;\n}\n\n';
    css_code += '.zcat-pagination-btn {\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--zcat-pagination-border);\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}';

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
      paginationObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          variant: 'primary',
          totalRecords: 150,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      // Variant demos
      variantPrimaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          variant: 'primary',
          totalRecords: 248,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantSecondaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          variant: 'secondary',
          totalRecords: 85,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantSmallSetObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          variant: 'primary',
          totalRecords: 25,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantLargeSetObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object', {
        default: {
          variant: 'primary',
          totalRecords: 5000,
          rowsPerPage: 50,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
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
        this.setData('paginationObj', {
          variant: 'primary',
          totalRecords: 150,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        });
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onPageChange(page, rowsPerPage) {
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

PaginationComp._template = "<template tag-name=\"pagination-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Pagination</h1> <p class=\"zcat-page-desc\">Pagination lets users navigate through large sets of data by dividing content into discrete pages.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{paginationObj}}\"></zcat-pagination> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changePaginationVariant\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> </select> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Primary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary Pagination</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantPrimaryObj}}\"></zcat-pagination> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Secondary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Simple)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantSecondaryObj}}\"></zcat-pagination> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Data Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small Set (25 records)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantSmallSetObj}}\"></zcat-pagination> </div> </div> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large Set (5000 records)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantLargeSetObj}}\"></zcat-pagination> </div> </div> </div> </div></template></template> </div> </template><style>/* pagination-comp specific overrides if needed */\n</style>";;
PaginationComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

PaginationComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "paginationObj",
  "resetButtonObj",
  "variantPrimaryObj",
  "variantSecondaryObj",
  "variantSmallSetObj",
  "variantLargeSetObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



PaginationComp.register("pagination-comp", {
  hash: "PaginationComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 35378205:
/*!**************************************************!*\
  !*** ./components/javascript/zcat-pagination.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatPagination": () => (/* binding */ ZcatPagination)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatPagination extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }),
      currentPage: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('number', { default: 1 }),
      rowsPerPage: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('number', { default: 10 })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.currentPage) this.setData('currentPage', zcatProp.currentPage);
    if (zcatProp.rowsPerPage) this.setData('rowsPerPage', zcatProp.rowsPerPage);
  }

  _getTotalPages() {
    let zcatProp = this.getData('zcatProp');
    let total = zcatProp && zcatProp.totalRecords ? zcatProp.totalRecords : 0;
    let perPage = this.getData('rowsPerPage');
    return Math.max(1, Math.ceil(total / perPage));
  }

  _fireCallback(page) {
    let self = this.getData('self');
    let zcatProp = this.getData('zcatProp');
    if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
      self.executeMethod(zcatProp.callback.name, page, this.getData('rowsPerPage'), zcatProp);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      goToFirst() {
        this.setData('currentPage', 1);
        this._fireCallback(1);
      },
      goToPrev() {
        let page = Math.max(1, this.getData('currentPage') - 1);
        this.setData('currentPage', page);
        this._fireCallback(page);
      },
      goToNext() {
        let total = this._getTotalPages();
        let page = Math.min(total, this.getData('currentPage') + 1);
        this.setData('currentPage', page);
        this._fireCallback(page);
      },
      goToLast() {
        let total = this._getTotalPages();
        this.setData('currentPage', total);
        this._fireCallback(total);
      },
      changeRowsPerPage(event) {
        let val = parseInt(event.target.value, 10);
        this.setData('rowsPerPage', val);
        this.setData('currentPage', 1);
        this._fireCallback(1);
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncState();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatPagination._template = "<template tag-name=\"zcat-pagination\"> <div class=\"zcat-pagination {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-pagination-secondary','zcat-pagination-primary')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Left: Rows per page (primary variant) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-pagination-left\"> <span class=\"zcat-pagination-label\">Rows per page:</span> <select class=\"zcat-pagination-select\" onchange=\"{{action('changeRowsPerPage',event)}}\"> <option value=\"5\">5</option> <option value=\"10\" selected=\"{{expHandlers(rowsPerPage,'===',10)}}\">10</option> <option value=\"25\">25</option> <option value=\"50\">50</option> <option value=\"100\">100</option> </select> </div> </template></template> <!-- Center/Right: Page info + Navigation --> <div class=\"zcat-pagination-right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-pagination-info\">{{expHandlers(zcatProp.totalRecords,'||',0)}} total records</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-pagination-info\"> {{expHandlers(expHandlers(expHandlers(currentPage,'-',1),'*',rowsPerPage),'+',1)}} – {{expHandlers(expHandlers(expHandlers(currentPage,'*',rowsPerPage),'&gt;',expHandlers(zcatProp.totalRecords,'||',0)),'?:',expHandlers(zcatProp.totalRecords,'||',0),expHandlers(currentPage,'*',rowsPerPage))}} of {{expHandlers(zcatProp.totalRecords,'||',0)}} </span> </template></template> <div class=\"zcat-pagination-nav\"> <button class=\"zcat-pagination-btn\" onclick=\"{{action('goToFirst')}}\" disabled=\"{{expHandlers(currentPage,'<=',1)}}\"> <zcat-icon name=\"chevrons-left\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> <button class=\"zcat-pagination-btn\" onclick=\"{{action('goToPrev')}}\" disabled=\"{{expHandlers(currentPage,'<=',1)}}\"> <zcat-icon name=\"chevron-left\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> <button class=\"zcat-pagination-btn\" onclick=\"{{action('goToNext')}}\" disabled=\"{{expHandlers(expHandlers(currentPage,'*',rowsPerPage),'>=',expHandlers(zcatProp.totalRecords,'||',0))}}\"> <zcat-icon name=\"chevron-right\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> <button class=\"zcat-pagination-btn\" onclick=\"{{action('goToLast')}}\" disabled=\"{{expHandlers(expHandlers(currentPage,'*',rowsPerPage),'>=',expHandlers(zcatProp.totalRecords,'||',0))}}\"> <zcat-icon name=\"chevrons-right\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </div> </div> </div> </template><style>/* ==============================\n   ZCAT Pagination Component\n   ============================== */\n\nzcat-pagination * {\n  box-sizing: border-box;\n}\n\n/* --- Container --- */\n.zcat-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  font-family: var(--zcat-font-family-primary);\n  background: var(--zcat-pagination-bg);\n  border: 1px solid var(--zcat-pagination-divider);\n  border-radius: 8px;\n  gap: 16px;\n}\n\n/* --- Left section --- */\n.zcat-pagination-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.zcat-pagination-label {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-secondary);\n  white-space: nowrap;\n}\n.zcat-pagination-select {\n  padding: 4px 8px;\n  border: 1px solid var(--zcat-pagination-divider);\n  border-radius: 4px;\n  background: var(--zcat-pagination-bg);\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-primary);\n  cursor: pointer;\n  outline: none;\n}\n.zcat-pagination-select:focus {\n  border-color: var(--zcat-pagination-theme);\n}\n\n/* --- Right section --- */\n.zcat-pagination-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zcat-pagination-info {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-secondary);\n  white-space: nowrap;\n}\n\n/* --- Navigation buttons --- */\n.zcat-pagination-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.zcat-pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 1px solid var(--zcat-pagination-divider);\n  background: var(--zcat-pagination-bg);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--zcat-pagination-text-primary);\n  transition: background 0.12s, border-color 0.12s;\n}\n.zcat-pagination-btn:hover:not(:disabled) {\n  background: var(--zcat-btn-grey-bg-hover);\n  border-color: var(--zcat-pagination-theme);\n}\n.zcat-pagination-btn:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n\n/* --- Secondary variant (simple) --- */\n.zcat-pagination-secondary {\n  justify-content: flex-end;\n  border: none;\n  padding: 10px 0;\n  background: transparent;\n}\n</style>";;
ZcatPagination._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"a","p":[1,3,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5]},{"t":"s","p":[1,7,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"s","p":[1,7,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3],"cn":"lc_id_0"},{"t":"tX","p":[1,5],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,7,5,1]},{"t":"cD","p":[1,7,5,1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,7,5,3]},{"t":"cD","p":[1,7,5,3,1],"in":2,"sibl":[1]},{"t":"a","p":[1,7,5,5]},{"t":"cD","p":[1,7,5,5,1],"in":1,"sibl":[0]},{"t":"a","p":[1,7,5,7]},{"t":"cD","p":[1,7,5,7,1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[3,2,1,0]}];;
ZcatPagination._observedAttributes = ["self", "zcatProp", "currentPage", "rowsPerPage"];

ZcatPagination.register("zcat-pagination", {
  hash: "ZcatPagination_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=pagination-comp.js.map
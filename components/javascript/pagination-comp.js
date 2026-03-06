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
  hash: "PaginationComp_4",
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
/* harmony import */ var _zcat_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-dropdown.js */ 71154528);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js */ 33893575);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_navigator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-navigator.js */ 88837589);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);







class ZcatPagination extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_3__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object'),
      		zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)('object'),
			paginationDropdownStyles: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_4__.prop)( "object", {
				default: {
					"id": "dropdown-id",
					"placeholder": "Select Option",
					"size": "extra-small",
					"width": "zcat-w-fc",
					"variant": "ghost",
					"selected": "10",
					"onChange": "paginationChangeMethod",
					"options": [
						{
							"name": "10",
							"value": "10"
						},
						{
							"name": "25",
							"value": "25"
						},
						{
							"name": "50",
							"value": "50"
						},
						{
							"name": "100",
							"value": "100"
						}
					]
				}
			})	
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			async customLbindForPagination(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			},
			async customLbindForDropdown(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
		
				if (prop.key) {
				  self.setData(prop.key, prop.selected);
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			}
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatPagination._template = "<template tag-name=\"zcat-pagination\"> <div class=\"zcat-dN\"> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-left-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-right-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M5.25 10.5L8.75 7L5.25 3.5\" stroke=\"var(--zcat-body-icons-static-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','primary')}}\" lc-id=\"lc_id_0\"> <lyte-navigator lt-prop-yield=\"true\" lt-prop-value=\"{{zcatProp.value}}\" lt-prop-records=\"{{zcatProp.records}}\" lt-prop-perpage=\"{{zcatProp.perpage}}\" lt-prop-more-records=\"{{zcatProp.morerecords}}\" lt-prop-middle-text=\"{{zcatProp.middletext}}\" lt-prop-show-only-icon=\"{{zcatProp.showonlyicon}}\" lt-prop-show-text=\"{{zcatProp.showtext}}\" lt-prop-aria=\"{{zcatProp.aria}}\" lt-prop-aria-next=\"{{zcatProp.arianext}}\" lt-prop-aria-previous=\"{{zcatProp.ariaprevious}}\" lt-prop-aria-home=\"{{zcatProp.ariahome}}\" lt-prop-aria-end=\"{{zcatProp.ariaend}}\" lt-prop-type=\"{{expHandlers(zcatProp.type,'?:','zcatProp.type','default')}}\" on-next=\"{{method('customLbindForPagination',zcatProp.onNext,'')}}\" on-previous=\"{{method('customLbindForPagination',zcatProp.onPrevious,'')}}\" on-home=\"{{method('customLbindForPagination',zcatProp.onHome,'')}}\" on-end=\"{{method('customLbindForPagination',zcatProp.onEnd,'')}}\" on-select=\"{{method('customLbindForPagination',zcatProp.onSelect,'')}}\"> <template is=\"registerYield\" yield-name=\"navigatorYield\"> <div class=\"zcat-pagination-wraper\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Showing Results :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">{{zcatProp.startPage}} - {{zcatProp.endPage}}</div> <div class=\"zcat-pagination-result-total\">of {{zcatProp.records}}</div> </div> </div> <div class=\"zcat-flex-center zcat-gap-16\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center\"> <div class=\"zcat-pagination-dropdown-text\">Rows per page :</div> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{paginationDropdownStyles}}\"> </zcat-dropdown> </div> <div class=\"zcat-pagination-divider\"></div> <div class=\"zcat-flex-center zcat-gap-12\"> <div data-zcqa=\"{{zcatProp.zcqa}}-prev-btn\" class=\"lyteSingleBack zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-left-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center zcat-pagination-icon-disabled-color\"></lyte-svg> </div> <div class=\"zcat-pagination-page-list\"> {{zcatProp.startPage}} - {{zcatProp.endPage}} </div> <div data-zcqa=\"{{zcatProp.zcqa}}-next-btn\" class=\"lyteSingleFront zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-right-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center\"></lyte-svg> </div> </div> </div> </div> </template> </lyte-navigator> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" lc-id=\"lc_id_1\"> <div class=\"zcat-pagination-wraper\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Total Records :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">50</div> </div> </div> </div> </template></template> </template><style>\n\n/* === Global base styles from reference css/zcat-pagination.css === */\n.lyteNavigator lyte-yield{\n    width: 100%;\n}\n.zcat-pagination-wraper{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 30px;\n    padding: 6px 16px;\n    border-radius: 0px 0px 10px 10px;\n    border-top: 1px solid var(--zcat-pagination-divider);\n    background-color: var(--zcat-pagination-bg);\n    box-shadow: 0px -6px 16px 0px var(--zcat-shadow-bg-secondary);\n}\nzcat-table .zcat-pagination-wraper{\n    margin-top: -3px;\n    border: 1px solid var(--zcat-table-border-default);\n    position: relative;\n    z-index: 2;\n}\nzcat-table .zcat-pagination-wraper.borderless-table{\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n}\n.zcat-pagination-page-list{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-icon-wraper{\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.zcat-pagination-icon-wraper:hover{\n    cursor: pointer;\n    background: var(--zcat-btn-grey-bg-hover);\n}\n.lyteDisabled.zcat-pagination-icon-wraper{\n    cursor: not-allowed;\n    background: none;\n}\n.zcat-pagination-icon-color{\n  stroke: var(--zcat-body-icons-static-primary);\n}\n.lyteDisabled.zcat-pagination-icon-disabled-color{\n    stroke: var(--zcat-body-icons-static-disabled);\n}\n.zcat-pagination-result-wraper,.zcat-pagination-dropdown-text{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n}\n.zcat-pagination-result-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n.zcat-pagination-result-count{\n    color: var(--zcat-pagination-text-primary);\n}\n.zcat-pagination-result-total{\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-divider{\n    height: 20px;\n    width: 1px;\n    background: var(--zcat-pagination-divider);\n}\n.zcat-pagination-dropdown-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n\n/* === Global base styles from reference css/zcat-pagination.css === */\n.lyteNavigator lyte-yield{\n    width: 100%;\n}\n.zcat-pagination-wraper{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 30px;\n    padding: 6px 16px;\n    border-radius: 0px 0px 10px 10px;\n    border-top: 1px solid var(--zcat-pagination-divider);\n    background-color: var(--zcat-pagination-bg);\n    box-shadow: 0px -6px 16px 0px var(--zcat-shadow-bg-secondary);\n}\nzcat-table .zcat-pagination-wraper{\n    margin-top: -3px;\n    border: 1px solid var(--zcat-table-border-default);\n    position: relative;\n    z-index: 2;\n}\nzcat-table .zcat-pagination-wraper.borderless-table{\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n}\n.zcat-pagination-page-list{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-icon-wraper{\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.zcat-pagination-icon-wraper:hover{\n    cursor: pointer;\n    background: var(--zcat-btn-grey-bg-hover);\n}\n.lyteDisabled.zcat-pagination-icon-wraper{\n    cursor: not-allowed;\n    background: none;\n}\n.zcat-pagination-icon-color{\n  stroke: var(--zcat-body-icons-static-primary);\n}\n.lyteDisabled.zcat-pagination-icon-disabled-color{\n    stroke: var(--zcat-body-icons-static-disabled);\n}\n.zcat-pagination-result-wraper,.zcat-pagination-dropdown-text{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n}\n.zcat-pagination-result-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n.zcat-pagination-result-count{\n    color: var(--zcat-pagination-text-primary);\n}\n.zcat-pagination-result-total{\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-divider{\n    height: 20px;\n    width: 1px;\n    background: var(--zcat-pagination-divider);\n}\n.zcat-pagination-dropdown-text{\n    color: var(--zcat-pagination-text-tertiary);\n}</style>";;
ZcatPagination._dynamicNodes = [{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1,3,1,0]},{"t":"tX","p":[1,1,3,1,2]},{"t":"tX","p":[1,1,3,3,1]},{"t":"a","p":[1,3,1,3]},{"t":"cD","p":[1,3,1,3],"in":2,"sibl":[1]},{"t":"a","p":[1,3,5,1]},{"t":"cD","p":[1,3,5,1,1],"in":1,"sibl":[0]},{"t":"tX","p":[1,3,5,3,1]},{"t":"tX","p":[1,3,5,3,3]},{"t":"a","p":[1,3,5,5]},{"t":"cD","p":[1,3,5,5,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatPagination._observedAttributes = ["self", "zcatProp", "paginationDropdownStyles"];

ZcatPagination.register("zcat-pagination", {
    hash: "ZcatPagination_4",
    refHash: "C_zcat-app_app_0"
}); 


/***/ })

}]);
//# sourceMappingURL=pagination-comp.js.map
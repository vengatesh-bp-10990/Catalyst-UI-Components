"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/table-comp"],{

/***/ 99646535:
/*!*********************************************!*\
  !*** ./components/javascript/table-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComp": () => (/* binding */ TableComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-table.js */ 23725964);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class TableComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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

    let variantSelect = node.querySelector('[data-action="changeTableVariant"]');
    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        let val = e.target.value;
        let tableObj = comp.getData('tableObj');
        comp.$app.objectUtils(tableObj, 'add', 'striped', val === 'striped');
        comp.$app.objectUtils(tableObj, 'add', 'bordered', val === 'bordered');
        comp.$app.objectUtils(tableObj, 'add', 'compact', val === 'compact');
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let tableObj = this.getData('tableObj') || {};

    let slyte_code = '<zcat-table\n  self="{{self}}"\n  zcat-prop="{{tableObj}}"\n></zcat-table>';

    let propObj = {};
    if (tableObj.checkbox) propObj.checkbox = true;
    if (tableObj.striped) propObj.striped = true;
    if (tableObj.bordered) propObj.bordered = true;
    if (tableObj.compact) propObj.compact = true;
    if (tableObj.moreOptions) propObj.moreOptions = true;
    propObj.header = [
      { label: 'Name', value: 'name', sortable: true },
      { label: 'Email', value: 'email' },
      { label: 'Status', value: 'status', field_type: 'status' }
    ];
    propObj.body = [
      { name: 'John Doe', email: 'john@example.com', status: 'Active', status_status: 'success' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending', status_status: 'warning' }
    ];

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    tableObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-table-wrapper' + (tableObj.striped ? ' zcat-table-striped' : '') + (tableObj.bordered ? ' zcat-table-bordered' : '') + (tableObj.compact ? ' zcat-table-compact' : '') + '">\n';
    html_code += '  <table class="zcat-table">\n';
    html_code += '    <thead class="zcat-table-head">\n';
    html_code += '      <tr>\n';
    html_code += '        <th class="zcat-table-th">Name</th>\n';
    html_code += '        <th class="zcat-table-th">Email</th>\n';
    html_code += '        <th class="zcat-table-th">Status</th>\n';
    html_code += '      </tr>\n';
    html_code += '    </thead>\n';
    html_code += '    <tbody class="zcat-table-body">\n';
    html_code += '      <tr class="zcat-table-row">\n';
    html_code += '        <td class="zcat-table-td">John Doe</td>\n';
    html_code += '        <td class="zcat-table-td">john@example.com</td>\n';
    html_code += '        <td class="zcat-table-td"><span class="zcat-table-status zcat-table-status-success">Active</span></td>\n';
    html_code += '      </tr>\n';
    html_code += '    </tbody>\n';
    html_code += '  </table>\n';
    html_code += '</div>';

    let css_code = '.zcat-table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n}\n\n';
    css_code += '.zcat-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n';
    css_code += '.zcat-table-th,\n.zcat-table-td {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid var(--zcat-table-border-color);\n}\n\n';
    css_code += '.zcat-table-status {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n}';

    this.setData('slyteCodeSnippet.code', slyte_code);
    this.setData('jsCodeSnippet.code', js_code);
    this.setData('htmlCodeSnippet.code', html_code);
    this.setData('cssCodeSnippet.code', css_code);
  }

  data(arg1) {
    return Object.assign(super.data({
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      tableObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          checkbox: true,
          moreOptions: true,
          header: [
            { label: 'Name', value: 'name', sortable: true },
            { label: 'Role', value: 'role' },
            { label: 'Email', value: 'email' },
            { label: 'Status', value: 'status', field_type: 'status' }
          ],
          body: [
            { name: 'Alice Johnson', role: 'Designer', email: 'alice@example.com', status: 'Active', status_status: 'success' },
            { name: 'Bob Smith', role: 'Developer', email: 'bob@example.com', status: 'Active', status_status: 'success' },
            { name: 'Carol White', role: 'Manager', email: 'carol@example.com', status: 'Pending', status_status: 'warning' },
            { name: 'Dave Brown', role: 'QA Lead', email: 'dave@example.com', status: 'Inactive', status_status: 'danger' }
          ]
        }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleCheckboxObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleCheckbox' } }
      }),
      toggleMoreObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleMore' } }
      }),
      // Variant demos
      variantDefaultObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          header: [
            { label: 'Product', value: 'product' },
            { label: 'Price', value: 'price' },
            { label: 'Stock', value: 'stock' }
          ],
          body: [
            { product: 'Widget A', price: '$12.00', stock: '120' },
            { product: 'Widget B', price: '$25.50', stock: '85' },
            { product: 'Widget C', price: '$8.99', stock: '200' }
          ]
        }
      }),
      variantStripedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          striped: true,
          header: [
            { label: 'City', value: 'city' },
            { label: 'Country', value: 'country' },
            { label: 'Population', value: 'population' }
          ],
          body: [
            { city: 'Tokyo', country: 'Japan', population: '13.96M' },
            { city: 'Paris', country: 'France', population: '2.16M' },
            { city: 'London', country: 'UK', population: '8.98M' },
            { city: 'New York', country: 'USA', population: '8.34M' }
          ]
        }
      }),
      variantBorderedObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          bordered: true,
          header: [
            { label: 'Module', value: 'module' },
            { label: 'Version', value: 'version' },
            { label: 'License', value: 'license' }
          ],
          body: [
            { module: 'React', version: '18.2', license: 'MIT' },
            { module: 'Vue', version: '3.3', license: 'MIT' },
            { module: 'Angular', version: '17.0', license: 'MIT' }
          ]
        }
      }),
      variantCompactObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          compact: true,
          header: [
            { label: 'Key', value: 'key' },
            { label: 'Value', value: 'value' },
            { label: 'Type', value: 'type' }
          ],
          body: [
            { key: 'API_URL', value: 'https://api.example.com', type: 'String' },
            { key: 'DEBUG', value: 'true', type: 'Boolean' },
            { key: 'PORT', value: '3000', type: 'Number' },
            { key: 'ENV', value: 'production', type: 'String' }
          ]
        }
      }),
      variantCheckboxObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          checkbox: true,
          moreOptions: true,
          header: [
            { label: 'Employee', value: 'employee', sortable: true },
            { label: 'Department', value: 'department' },
            { label: 'Status', value: 'status', field_type: 'status' }
          ],
          body: [
            { employee: 'Sarah Connor', department: 'Engineering', status: 'Online', status_status: 'success' },
            { employee: 'John Wick', department: 'Operations', status: 'Away', status_status: 'warning' },
            { employee: 'Ellen Ripley', department: 'Research', status: 'Offline', status_status: 'danger' }
          ]
        }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('tableObj', {
          checkbox: true,
          moreOptions: true,
          header: [
            { label: 'Name', value: 'name', sortable: true },
            { label: 'Role', value: 'role' },
            { label: 'Email', value: 'email' },
            { label: 'Status', value: 'status', field_type: 'status' }
          ],
          body: [
            { name: 'Alice Johnson', role: 'Designer', email: 'alice@example.com', status: 'Active', status_status: 'success' },
            { name: 'Bob Smith', role: 'Developer', email: 'bob@example.com', status: 'Active', status_status: 'success' },
            { name: 'Carol White', role: 'Manager', email: 'carol@example.com', status: 'Pending', status_status: 'warning' },
            { name: 'Dave Brown', role: 'QA Lead', email: 'dave@example.com', status: 'Inactive', status_status: 'danger' }
          ]
        });
        this.$app.objectUtils(this.getData('toggleCheckboxObj'), 'add', 'checked', true);
        this.$app.objectUtils(this.getData('toggleMoreObj'), 'add', 'checked', true);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleCheckbox(checked) {
        this.$app.objectUtils(this.getData('tableObj'), 'add', 'checkbox', checked);
        this.constructCodeSnippet();
      },
      onToggleMore(checked) {
        this.$app.objectUtils(this.getData('tableObj'), 'add', 'moreOptions', checked);
        this.constructCodeSnippet();
      },
      onTableSort(column, direction) {
        // demo sort callback
      },
      onTableSelect(selected) {
        // demo select callback
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

TableComp._template = "<template tag-name=\"table-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Table</h1> <p class=\"zcat-page-desc\">Tables display structured data in rows and columns with sorting, selection, and action support.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{tableObj}}\"></zcat-table> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Style</span> <select data-action=\"changeTableVariant\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"striped\">Striped</option> <option value=\"bordered\">Bordered</option> <option value=\"compact\">Compact</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Checkbox</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCheckboxObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">More Options</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMoreObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Default</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Striped</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Striped Rows</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantStripedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Bordered</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Bordered Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantBorderedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Compact</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Compact Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCompactObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Checkbox &amp; Actions</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Selection &amp; More Options</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCheckboxObj}}\"></zcat-table> </div> </div> </div> </div></template></template> </div> </template><style>/* table-comp specific overrides if needed */\n</style>";;
TableComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,19,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,19,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

TableComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "tableObj",
  "resetButtonObj",
  "toggleCheckboxObj",
  "toggleMoreObj",
  "variantDefaultObj",
  "variantStripedObj",
  "variantBorderedObj",
  "variantCompactObj",
  "variantCheckboxObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];



TableComp.register("table-comp", {
  hash: "TableComp_2",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 23725964:
/*!*********************************************!*\
  !*** ./components/javascript/zcat-table.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatTable": () => (/* binding */ ZcatTable)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatTable extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }),
      selectedRows: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] }),
      selectAll: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('boolean', { default: false }),
      sortColumn: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' }),
      sortDirection: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: 'asc' }),
      _bodyRows: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] })
    }), arg1);
  }

  init() {
    this._buildBodyRows();
  }

  _buildBodyRows() {
    let zcatProp = this.getData('zcatProp') || {};
    let body = zcatProp.body || [];
    let selectedRows = this.getData('selectedRows') || [];
    let rows = [];
    for (let i = 0; i < body.length; i++) {
      let isSelected = selectedRows.indexOf(i) > -1;
      let rowObj = { _rowIdx: i, _selectedClass: isSelected ? 'zcat-table-row-selected' : '', _isChecked: isSelected };
      // Copy all original row data properties
      let keys = Object.keys(body[i]);
      for (let k = 0; k < keys.length; k++) {
        rowObj[keys[k]] = body[i][keys[k]];
      }
      rows.push(rowObj);
    }
    this.setData('_bodyRows', rows);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      toggleSelectAll(event, lyteElement) {
        let selectAll = lyteElement.getData('checked');
        this.setData('selectAll', selectAll);

        let zcatProp = this.getData('zcatProp');
        let body = zcatProp && zcatProp.body ? zcatProp.body : [];
        if (selectAll) {
          this.setData('selectedRows', body.map(function(_, i) { return i; }));
        } else {
          this.setData('selectedRows', []);
        }
        this._buildBodyRows();

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSelect) {
          self.executeMethod(zcatProp.onSelect, this.getData('selectedRows'), zcatProp);
        }
      },

      toggleRowSelect(event, lyteElement) {
        let rowIdx = parseInt(lyteElement.getAttribute('data-row-idx'), 10);
        let newChecked = lyteElement.getData('checked');
        let selected = this.getData('selectedRows').slice();
        if (newChecked) {
          if (selected.indexOf(rowIdx) === -1) selected.push(rowIdx);
        } else {
          let i = selected.indexOf(rowIdx);
          if (i > -1) selected.splice(i, 1);
        }
        this.setData('selectedRows', selected);

        let zcatProp = this.getData('zcatProp');
        let body = zcatProp && zcatProp.body ? zcatProp.body : [];
        this.setData('selectAll', selected.length === body.length);
        this._buildBodyRows();

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSelect) {
          self.executeMethod(zcatProp.onSelect, selected, zcatProp);
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      sortBy(col) {
        let zcatProp = this.getData('zcatProp');
        if (!col.sortable) return;

        let direction = this.getData('sortDirection');
        let currentCol = this.getData('sortColumn');

        if (currentCol === col.value) {
          direction = direction === 'asc' ? 'desc' : 'asc';
        } else {
          direction = 'asc';
        }

        this.setData('sortColumn', col.value);
        this.setData('sortDirection', direction);

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSort) {
          self.executeMethod(zcatProp.onSort, col.value, direction, zcatProp);
        }
      },

      onRowClick(row, index) {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onRowClick) {
          self.executeMethod(zcatProp.onRowClick, row, index, zcatProp);
        }
      },

      onMoreClick(row, index, event) {
        if (event) event.stopPropagation();
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onMoreClick) {
          self.executeMethod(zcatProp.onMoreClick, row, index, event, zcatProp);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

ZcatTable._template = "<template tag-name=\"zcat-table\"> <div class=\"zcat-table-wrapper {{expHandlers(zcatProp.bordered,'?:','zcat-table-bordered','')}} {{expHandlers(zcatProp.striped,'?:','zcat-table-striped','')}} {{expHandlers(zcatProp.compact,'?:','zcat-table-compact','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <table class=\"zcat-table\"> <!-- Table Head --> <thead class=\"zcat-table-head\"> <tr> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> <td is=\"for\" lyte-for=\"true\" items=\"{{zcatProp.header}}\" item=\"col\" index=\"colIdx\" _new=\"true\" depth=\"3\"></td> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> </tr> </thead> <!-- Table Body --> <tbody class=\"zcat-table-body\"> <tr is=\"for\" lyte-for=\"true\" items=\"{{_bodyRows}}\" item=\"row\" index=\"rowIdx\" _new=\"true\" depth=\"2\"></tr> </tbody> </table> <!-- Empty state --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.body,'!'),'||',expHandlers(zcatProp.body.length,'===',0))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-table-empty\"> <p>No data available</p> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Table Component\n   ============================== */\n\nzcat-table * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n  font-family: var(--zcat-font-family-primary);\n  border: 1px solid var(--zcat-table-border-default);\n  border-radius: 8px;\n}\n\n/* --- Table --- */\n.zcat-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: auto;\n}\n\n/* --- Table Head --- */\n.zcat-table-head {\n  background: var(--zcat-table-bg-header);\n}\n.zcat-table-th {\n  font: 600 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-secondary);\n  text-align: left;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  white-space: nowrap;\n  user-select: none;\n}\n.zcat-table-th-inner {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.zcat-table-th-label {\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\n\n/* --- Sortable columns --- */\n.zcat-table-sortable {\n  cursor: pointer;\n}\n.zcat-table-sortable:hover {\n  color: var(--zcat-table-text-primary);\n}\n.zcat-table-sort-icon {\n  display: inline-flex;\n  opacity: 0.4;\n  transition: opacity 0.15s, transform 0.15s;\n}\n.zcat-table-sorted .zcat-table-sort-icon {\n  opacity: 1;\n  color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-sort-desc {\n  transform: rotate(180deg);\n}\n\n/* --- Table Body --- */\n.zcat-table-row {\n  background: var(--zcat-table-bg-row);\n  transition: background 0.12s;\n  cursor: default;\n}\n.zcat-table-row:hover {\n  background: var(--zcat-table-bg-rowHover);\n}\n.zcat-table-row-selected {\n  background: var(--zcat-table-bg-rowSelected);\n}\n.zcat-table-row-selected:hover {\n  background: var(--zcat-table-bg-rowSelected);\n}\n.zcat-table-td {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-primary);\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  vertical-align: middle;\n}\n.zcat-table-row:last-child .zcat-table-td {\n  border-bottom: none;\n}\n\n/* --- Checkbox column --- */\n.zcat-table-th-check,\n.zcat-table-td-check {\n  text-align: center;\n}\n.zcat-table-check-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  width: 16px;\n  height: 16px;\n}\n.zcat-table-checkbox {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.zcat-table-checkmark {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 1.5px solid var(--zcat-table-border-default);\n  border-radius: 3px;\n  background: var(--zcat-table-bg-row);\n  transition: background 0.15s, border-color 0.15s;\n  position: relative;\n}\n.zcat-table-checkbox:checked + .zcat-table-checkmark {\n  background: var(--zcat-btn-fill-bg-primary-default);\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-table-checkbox:checked + .zcat-table-checkmark::after {\n  content: '';\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  width: 5px;\n  height: 9px;\n  border: solid var(--zcat-white);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n/* --- Status cells --- */\n.zcat-table-status {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n.zcat-table-status-success {\n  background: var(--zcat-green-4);\n  color: var(--zcat-green-1);\n}\n.zcat-table-status-warning {\n  background: var(--zcat-orange-4);\n  color: var(--zcat-orange-1);\n}\n.zcat-table-status-danger {\n  background: var(--zcat-red-4);\n  color: var(--zcat-red-1);\n}\n.zcat-table-status-info {\n  background: var(--zcat-blue-4);\n  color: var(--zcat-blue-1);\n}\n.zcat-table-status-default {\n  background: var(--zcat-grey-3);\n  color: var(--zcat-dark-2);\n}\n\n/* --- More options button --- */\n.zcat-table-td-more {\n  text-align: center;\n}\n.zcat-table-more-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: var(--zcat-table-threeDot-iconBg);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--zcat-table-threeDot-icon);\n  transition: background 0.15s;\n}\n.zcat-table-more-btn:hover {\n  background: var(--zcat-table-threeDot-iconBg-hover);\n}\n\n/* --- Empty state --- */\n.zcat-table-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--zcat-table-text-light);\n  font: 400 14px/20px var(--zcat-font-family-primary);\n}\n\n/* --- Bordered variant --- */\n.zcat-table-bordered .zcat-table-th,\n.zcat-table-bordered .zcat-table-td {\n  border-right: 1px solid var(--zcat-table-border-default);\n}\n.zcat-table-bordered .zcat-table-th:last-child,\n.zcat-table-bordered .zcat-table-td:last-child {\n  border-right: none;\n}\n\n/* --- Striped variant --- */\n.zcat-table-striped .zcat-table-row:nth-child(even) {\n  background: var(--zcat-table-bg-header);\n}\n.zcat-table-striped .zcat-table-row:nth-child(even):hover {\n  background: var(--zcat-table-bg-rowHover);\n}\n\n/* --- Compact variant --- */\n.zcat-table-compact .zcat-table-th { padding: 6px 10px; }\n.zcat-table-compact .zcat-table-td { padding: 6px 10px; font-size: 13px; }\n</style>";;
ZcatTable._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1,3,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.checkbox}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <th class=\"zcat-table-th zcat-table-th-check\" style=\"width:40px\"> <div class=\"zcat-table-check-wrap\"> <lyte-checkbox class=\"zcat-table-checkbox\" lt-prop-type=\"default\" lt-prop-checked=\"{{selectAll}}\" on-changed=\"{{method('toggleSelectAll')}}\"></lyte-checkbox> </div> </th> </tr></tbody></table></template></template>","in":4,"sibl":[3]},{"t":"a","p":[1,1,3,1,3]},{"t":"f","p":[1,1,3,1,3],"dN":[{"t":"a","p":[0],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["col.width","'?:'",null,"''"]}}}},{"t":"tX","p":[0,1,1,0]},{"t":"s","p":[0,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"actualTemplate":"<template is=\"for\" depth=\"3\"><table><tbody><tr><th class=\"zcat-table-th {{expHandlers(col.sortable,'?:','zcat-table-sortable','')}} {{expHandlers(expHandlers(sortColumn,'===',col.value),'?:','zcat-table-sorted','')}}\" onclick=\"{{action('sortBy',col)}}\" style=\"{{expHandlers(col.width,'?:',expHandlers('width:','+',col.width),'')}}\"> <div class=\"zcat-table-th-inner\"> <span class=\"zcat-table-th-label\">{{col.label}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{col.sortable}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-table-sort-icon {{expHandlers(expHandlers(expHandlers(sortColumn,'===',col.value),'&amp;&amp;',expHandlers(sortDirection,'===','desc')),'?:','zcat-sort-desc','')}}\"> <zcat-icon name=\"chevron-up\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </template></template> </div> </th></tr></tbody></table></template>","tagName":"TR","in":3,"sibl":[2]},{"t":"s","p":[1,1,3,1,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.moreOptions}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <th class=\"zcat-table-th\" style=\"width:48px\"></th> </tr></tbody></table></template></template>","in":2,"sibl":[1]},{"t":"a","p":[1,1,7,1]},{"t":"f","p":[1,1,7,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.checkbox}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <td class=\"zcat-table-td zcat-table-td-check\"> <div class=\"zcat-table-check-wrap\" onclick=\"event.stopPropagation()\"> <lyte-checkbox class=\"zcat-table-checkbox\" lt-prop-type=\"default\" lt-prop-checked=\"{{row._isChecked}}\" data-row-idx=\"{{row._rowIdx}}\" on-changed=\"{{method('toggleRowSelect')}}\"></lyte-checkbox> </div> </td> </tr></tbody></table></template></template>","in":2,"sibl":[1]},{"t":"a","p":[0,3]},{"t":"f","p":[0,3],"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0]},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}],"actualTemplate":"<template is=\"for\" depth=\"3\"><table><tbody><tr><td class=\"zcat-table-td\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(col.field_type,'===','status')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-table-status zcat-table-status-{{expHandlers(row[expHandlers(col.value,'+','_status')],'||','default')}}\">{{row[col.value]}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(col.field_type,'!==','status')}}\" is=\"case\" lc-id=\"lc_id_0\"> {{row[col.value]}} </template></template> </td></tr></tbody></table></template>","tagName":"TR","in":1,"sibl":[0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"r","p":[1,1,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.moreOptions}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <td class=\"zcat-table-td zcat-table-td-more\"> <lyte-button class=\"zcat-table-more-btn\" onclick=\"{{action('onMoreClick',row,rowIdx,event)}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"more-vertical\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> </td> </tr></tbody></table></template></template>","in":0}],"dc":[2,0],"hc":true,"trans":true,"actualTemplate":"<template is=\"for\" depth=\"2\"><table><tbody><tr class=\"zcat-table-row {{row._selectedClass}}\" onclick=\"{{action('onRowClick',row,row._rowIdx)}}\"> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> <td is=\"for\" lyte-for=\"true\" items=\"{{zcatProp.header}}\" item=\"col\" index=\"colIdx\" _new=\"true\" depth=\"3\"></td> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> </tr></tbody></table></template>","tagName":"TBODY","in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[4,3,1]}];;

ZcatTable._observedAttributes = [
  "self",
  "zcatProp",
  "selectedRows",
  "selectAll",
  "sortColumn",
  "sortDirection",
  "_bodyRows"
];


ZcatTable.register("zcat-table", {
  hash: "ZcatTable_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=table-comp.js.map
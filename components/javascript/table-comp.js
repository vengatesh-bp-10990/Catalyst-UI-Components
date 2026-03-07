(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/table-comp"],{

/***/ 99646535:
/*!*********************************************!*\
  !*** ./components/javascript/table-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      changeTableVariant(e) {
        let val = e.target.value;
        let tableObj = this.getData('tableObj');
        this.$app.objectUtils(tableObj, 'add', 'striped', val === 'striped');
        this.$app.objectUtils(tableObj, 'add', 'bordered', val === 'bordered');
        this.$app.objectUtils(tableObj, 'add', 'compact', val === 'compact');
        this.constructCodeSnippet();
      },
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

TableComp._template = "<template tag-name=\"table-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Table</h1> <p class=\"zcat-page-desc\">Tables display structured data in rows and columns with sorting, selection, and action support.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{tableObj}}\"></zcat-table> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Style</span> <select onchange=\"{{action('changeTableVariant',event)}}\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"striped\">Striped</option> <option value=\"bordered\">Bordered</option> <option value=\"compact\">Compact</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Checkbox</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCheckboxObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">More Options</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMoreObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Default</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Striped</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Striped Rows</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantStripedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Bordered</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Bordered Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantBorderedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Compact</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Compact Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCompactObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Checkbox &amp; Actions</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Selection &amp; More Options</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCheckboxObj}}\"></zcat-table> </div> </div> </div> </div></template></template></div> </template><style>/* table-comp specific overrides if needed */\n</style>";;
TableComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,19,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,19,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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
  hash: "TableComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 23725964:
/*!*********************************************!*\
  !*** ./components/javascript/zcat-table.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatTable": () => (/* binding */ ZcatTable)
/* harmony export */ });
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js */ 71989920);
/* harmony import */ var _zcat_radio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-radio.js */ 39999136);
/* harmony import */ var _zcat_avatar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-avatar.js */ 26299788);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js */ 53043315);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-menu.js */ 56289784);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_table_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-table.js */ 21600137);
/* harmony import */ var _zcat_dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zcat-dropdown.js */ 71154528);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_svg_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js */ 33893575);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_navigator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-navigator.js */ 88837589);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);














class ZcatTable extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_10__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    const tableHeader = [
      { label: 'Job Name', value: 'job_name'},
      { label: 'job Id', value: 'job_id' },
      { label: 'submitted time', value: 'submitted_time' },
      { label: 'dis', value: 'dispatch_delay'},
      { label: 'status', value: 'statusTd'},
      { label: 'source', value: 'source_type' },
      { label: 'source', value: 'source' },
      { label: 'jobpool', value: 'jobpool_name' }
    ];
    const tableBody = [
      {
        job_name: 'Dhinakar',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      }
    ];
    const defaultProp = {
      id: '',
      style: '',
      class: '',
      checkboxOptions: [
        {
          label: ''
        }
      ],
      isAllCheckboxSelected: false,
      selectedCheckboxRowList: [],
      moreOptions: {
        callback: {
          name: ''
        },
        list: [
          {
            label: '',
            callback: {
              name: '',
              arguments: []
            },
            icon: {
              position: '',
              name: '',
              class: ''
            }
          }
        ]
      },
      header: [],
      body: [],
      rowOnclick: {
        methodName: ''
      },
      pagination: {
        page: '1',
        perPage: '50',
        freeze: false,
        hasNext: false,
        totalCount: ''
      }
    };

    return Object.assign(super.data({
      // tablePaginationDropdownSelected:prop('number',{default: '10'}),
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object'),
      activeMenuIndex: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('number', { default: -1 }),
      checkedList: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('array',{default:[]}),
      isAllRowCheckBoxSelect: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('boolean'),
      isNotAllRowChecked: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('boolean'),
      tablePaginationDropdownStyles: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)( "object", {
				default: {
					"id": "dropdown-id",
					"placeholder": "Select Option",
					"size": "extra-small",
					"width": "zcat-w-fc",
					"variant": "ghost",
					"selected": "10",
					"onChange": "tablePaginationChangeMethod",
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
			}),

        tableBtnStyles:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object', {default: {"label": "Button",
        "variant": "ghost",
        "size": "default",
        "disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
        "loading": false, "color": "primary",
        "type": "",
        "icon": {}, "menu": {}, "callback": {"name": ""}}}),
        tableStatusObj:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)("object", {default: {"label": "Success",
        "color": "green",
        "size": "dot",
        "varient": "secondary"}}),
        tableLabelObj:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)("object",{default:{"label": "Success",
          "color": "green",
          "size": "default",
          "varient": "secondary"}}),
        tableLinkButtonObj:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object', {default: {"label": "Link",
        "size": "default",
        "disabled": undefined, "icon": {}, "route": "https://www.google.com"}}),
        tableToggleDetails:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default:{type: 'switch',
          checked: 'false',
          disabled: '',
          tabindex: '0',
          label: '',
          class: '',
          variant: 'primary',
          desc: ''}}),
        tableRadioDetails:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
            selected: '',
            name: 'radiobutton_1',
            list: [{label: 'Radio Button',
            value: 'radio_btn',
            desc: '',
            // for secondary variant && icon class only for variant card
            disabled: 'false'
            }]}}),
         tableRadioDetails1:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
            selected: '',
            name: 'radiobutton_2',
            list: [{label: 'Radio Button',
            value: 'radio_btn',
            desc: '',
            // for secondary variant && icon class only for variant card
            disabled: 'false'
            }]}}),
          tableRadioDetails2:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_3',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails3:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_4',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails4:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_5',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails5:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_6',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),

        tableinputObj:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)("object",{default: {"id": "input-id",
          "placeholder": "Enter a text",
          "width": "300px",
          "type": "text",
          // number, text, time, date, textarea, datetime, password			
          "size": "small",
          "label": "",
          "iconLeft": {}, "iconRight": {}, "disabled": "",
          "errorMessage": "",
          "infoIcon": {}
        }}),
        tableAvatarDetails:(0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_11__.prop)('object', {default: {avatar_img: "img",
          avatar_size: "medium",
          disabled: false
        }})
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      tablePaginationChangeMethod(value) {
        // update the selected value
        this.setData('tablePaginationDropdownSelected', value);

        // optional: sync with zcatProp if needed
        let zcatProp = this.getData('zcatProp');
        if (zcatProp) {
          zcatProp.paginationSize = value;
          this.setData('zcatProp', zcatProp);
        }
      },

      async onScrollEnd() {
        if (this._methods.onScrollEnd !== undefined) {
          const self = this.getData('self');
          const methodName = this.getData('zcatProp.onScrollEnd');
          if (methodName) {
            const list = await self.executeMethod(methodName).then((list) => {
              if (!list) {
                return list;
              }
            });
            return list;
          }
        }
      },
      tableToolkitClose() {
        this.setData('activeMenuIndex', -1);
      },

     selectAllOrUnSelectAllObjectRow(rowData, checkBox) {
        const isChecked = checkBox.checked;
        const testrowData = this.getData('zcatProp.body');

        if (isChecked) {
          // ✅ Select all rows
          testrowData.forEach(item => {
            item.isAllRowSelect = true;
          });

          this.setData({
            'checkedList': [...testrowData],
            'isAllRowCheckBoxSelect': true,
            'isNotAllRowChecked': false
          });

        } else {
          // ❌ Deselect all
          testrowData.forEach(item => {
            item.isAllRowSelect = false;
          });

          this.setData({
            'checkedList': [],
            'isAllRowCheckBoxSelect': false,
            'isNotAllRowChecked': false
          });
        }

        // reassign body so bindings update
        this.setData('zcatProp.body', [...testrowData]);
      },

      selectOrUnselectObjectRow(checkboxTableBody, checkBox) {
          const isChecked = checkBox.checked;
          const testrowData = this.getData('zcatProp.body');
          const testcheckedList = this.getData('checkedList');

          if (isChecked) {
            this.$addon.arrayUtils(testcheckedList, 'push', checkboxTableBody);
            checkboxTableBody.isAllRowSelect = true;
          } else {
            let itemIndex = testcheckedList.findIndex((item) => item.id === checkboxTableBody.id);
            this.$addon.arrayUtils(testcheckedList, 'removeAt', itemIndex, 1);
            checkboxTableBody.isAllRowSelect = false;
          }

          // update header checkbox state
          if (testrowData.length === testcheckedList.length) {
            this.setData({
              'isAllRowCheckBoxSelect': true,
              'isNotAllRowChecked': false
            });
          } else if (testcheckedList.length > 0) {
            this.setData({
              'isAllRowCheckBoxSelect': false,
              'isNotAllRowChecked': true
            });
          } else {
            this.setData({
              'checkedList': [],
              'isAllRowCheckBoxSelect': false,
              'isNotAllRowChecked': false
            });
          }

          // reassign body to refresh bindings
          this.setData('zcatProp.body', [...testrowData]);
        },




    //   selectOrUnselectObjectRow(checkboxTableBody,checkBox) {
    //     const isChecked = checkBox.checked;
    //     const testrowData = this.getData('zcatProp.body');
    //     const testcheckedList = this.getData('checkedList');
    //       if (isChecked) {
    //         this.$addon.arrayUtils(testcheckedList, 'push', checkboxTableBody);
    //       } else{
    //         let itemIndex = testcheckedList.findIndex((item) => item.id === checkboxTableBody.id);
    //         this.$addon.arrayUtils(testcheckedList, 'removeAt', itemIndex, 1)
    //       }
          
    //       // console.log(testcheckedList)

    //       if(testrowData.length === testcheckedList.length){
    //         this.setData({
    //             'isAllRowCheckBoxSelect': true,
    //             'isNotAllRowChecked': false
    //         })
    //       }else if (testcheckedList.length > 0){
    //         this.setData({
    //             'isAllRowCheckBoxSelect': false,
    //             'isNotAllRowChecked': true
    //         })
    //       }else{
    //         this.setData({
    //           'checkedList': [],
    //           'isAllRowCheckBoxSelect': false,
    //           'isNotAllRowChecked': false,
    //           'isAllRowSelect': false
    //         })
    //       }
    //   console.log("Checked List:", this.getData('checkedList'));
    // },
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
    },
    async customLbindForRadioButton(methodName, value) {
				const self = this.getData('self');
				if (value) {
					const prop = this.getData('zcatProp');
					this.$addon.objectUtils(prop, 'add', 'selected', value);
					if (prop.key) {
					self.setData(prop.key, value);
					}
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 2)
				  );
				}
			}
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      async tableRowOnClick(event, record) {
        const self = this.getData('self');
        const methodName = this.getData('zcatProp.rowOnclick.methodName');

        if (methodName) {
          await self.executeMethod(methodName, record, event);
        }
      },
      async tableToolkitOpen(index, tableData, zcatProp) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('activeMenuIndex', index);

        const methodName = this.getData('zcatProp.moreOptions.callback.name');
        if (methodName) {
          const self = this.getData('self');
          await self.executeMethod(methodName, tableData, zcatProp);
        }
      },
      async tableMoreOptionCallback(record, data) {
        const self = this.getData('self');
        const methodName = record.callback.name;

        if (methodName) {
          await self.executeMethod(methodName, data);
        }
      },
      sortColumn(columnKey) {
        let bodyData = [...this.getData('zcatProp.body')];
        const currentSort = this.getData('currentSort') || {};
      
        let direction = 'asc';
        if (currentSort.key === columnKey && currentSort.direction === 'asc') {
          direction = 'desc';
        }
      
        bodyData.sort((a, b) => {
          const valA = a[columnKey] || '';
          const valB = b[columnKey] || '';
          return direction === 'asc'
            ? valA.toString().localeCompare(valB.toString())
            : valB.toString().localeCompare(valA.toString());
        });
      
        // ✅ Use setData if $app is undefined
        this.setData('zcatProp.body', bodyData);
        this.setData('currentSort', { key: columnKey, direction });
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

ZcatTable._template = "<template tag-name=\"zcat-table\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-three-dots\" viewBox=\"0 0 14 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> <circle cx=\"7\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> <circle cx=\"12\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> </svg> <svg id=\"zcat-icon-edit\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"> <g clip-path=\"url(#clip0_1465_21523)\"> <path d=\"M7.33337 2.66666H4.53337C3.41327 2.66666 2.85322 2.66666 2.42539 2.88464C2.04907 3.07639 1.74311 3.38235 1.55136 3.75867C1.33337 4.1865 1.33337 4.74655 1.33337 5.86666V11.4667C1.33337 12.5868 1.33337 13.1468 1.55136 13.5746C1.74311 13.951 2.04907 14.2569 2.42539 14.4487C2.85322 14.6667 3.41327 14.6667 4.53337 14.6667H10.1334C11.2535 14.6667 11.8135 14.6667 12.2414 14.4487C12.6177 14.2569 12.9236 13.951 13.1154 13.5746C13.3334 13.1468 13.3334 12.5868 13.3334 11.4667V8.66666M5.33336 10.6667H6.44972C6.77584 10.6667 6.9389 10.6667 7.09235 10.6298C7.2284 10.5972 7.35846 10.5433 7.47775 10.4702C7.61231 10.3877 7.72761 10.2724 7.95821 10.0418L14.3334 3.66666C14.8857 3.11437 14.8857 2.21894 14.3334 1.66666C13.7811 1.11437 12.8857 1.11437 12.3334 1.66665L5.9582 8.04182C5.72759 8.27242 5.61229 8.38772 5.52984 8.52228C5.45673 8.64157 5.40286 8.77163 5.3702 8.90768C5.33336 9.06113 5.33336 9.22419 5.33336 9.55031V10.6667Z\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_1465_21523\"> <rect width=\"16\" height=\"16\" fill=\"white\"></rect> </clipPath> </defs> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-left-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-right-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M5.25 10.5L8.75 7L5.25 3.5\" stroke=\"var(--zcat-body-icons-static-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-sort\" viewBox=\"0 0 17 16\" fill=\"none\"> <path d=\"M8.16666 13.3333V2.66663M8.16666 2.66663L4.16666 6.66663M8.16666 2.66663L12.1667 6.66663\" stroke=\"var(--zcat-table-icon-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-sparcle\" viewBox=\"0 0 30 34\" fill=\"none\"> <path d=\"M6.11954 27.5616C5.94283 27.5616 5.77027 27.508 5.62463 27.4079C5.47899 27.3078 5.36709 27.1659 5.30369 27.001L4.0556 23.7567C4.03365 23.6995 3.99992 23.6476 3.95662 23.6043C3.91332 23.561 3.8614 23.5273 3.80423 23.5053L0.559957 22.2572C0.395133 22.1937 0.253411 22.0818 0.153456 21.9361C0.0535004 21.7905 0 21.618 0 21.4414C0 21.2647 0.0535004 21.0922 0.153456 20.9466C0.253411 20.801 0.395133 20.689 0.559957 20.6255L3.80423 19.3774C3.8614 19.3555 3.91332 19.3218 3.95662 19.2785C3.99992 19.2351 4.03365 19.1832 4.0556 19.1261L5.2944 15.9047C5.35096 15.7524 5.44774 15.6182 5.57447 15.5165C5.70119 15.4148 5.85312 15.3494 6.01408 15.3271C6.20749 15.3037 6.40318 15.3456 6.57009 15.4461C6.73701 15.5465 6.86557 15.6999 6.9354 15.8818L8.18349 19.1261C8.20544 19.1832 8.23917 19.2351 8.28247 19.2785C8.32577 19.3218 8.37769 19.3555 8.43486 19.3774L11.6791 20.6255C11.844 20.689 11.9857 20.801 12.0856 20.9466C12.1856 21.0922 12.2391 21.2647 12.2391 21.4414C12.2391 21.618 12.1856 21.7905 12.0856 21.9361C11.9857 22.0818 11.844 22.1937 11.6791 22.2572L8.43486 23.5053C8.37769 23.5273 8.32577 23.561 8.28247 23.6043C8.23917 23.6476 8.20544 23.6995 8.18349 23.7567L6.9354 27.001C6.872 27.1659 6.7601 27.3078 6.61446 27.4079C6.46882 27.508 6.29626 27.5616 6.11954 27.5616Z\" fill=\"var(--zcat-table-icon-primary)\"></path> <path d=\"M17.6235 20.986C17.3472 20.9874 17.0771 20.9044 16.8492 20.7482C16.6213 20.592 16.4465 20.3699 16.3481 20.1117L14.1711 14.4505C14.127 14.3364 14.0595 14.2328 13.973 14.1463C13.8866 14.0598 13.783 13.9924 13.6689 13.9483L8.00601 11.7696C7.74806 11.6706 7.52619 11.4957 7.36968 11.268C7.21318 11.0403 7.12939 10.7705 7.12939 10.4942C7.12939 10.2178 7.21318 9.94804 7.36968 9.72034C7.52619 9.49264 7.74806 9.31774 8.00601 9.21874L13.6672 7.04168C13.7813 6.99758 13.8849 6.93013 13.9714 6.84365C14.0579 6.75717 14.1253 6.65357 14.1694 6.53949L16.3481 0.87662C16.4471 0.618665 16.622 0.396792 16.8497 0.240287C17.0774 0.0837812 17.3472 0 17.6235 0C17.8998 0 18.1697 0.0837812 18.3974 0.240287C18.6251 0.396792 18.8 0.618665 18.899 0.87662L21.076 6.53785C21.1201 6.65193 21.1876 6.75553 21.274 6.84201C21.3605 6.92849 21.4641 6.99594 21.5782 7.04004L27.2066 9.20562C27.4751 9.30513 27.7064 9.48495 27.869 9.72059C28.0316 9.95624 28.1176 10.2363 28.1154 10.5226C28.1112 10.7941 28.0257 11.0581 27.8698 11.2804C27.7139 11.5027 27.4949 11.6731 27.2411 11.7696L21.5798 13.9466C21.4658 13.9907 21.3622 14.0582 21.2757 14.1447C21.1892 14.2311 21.1218 14.3347 21.0777 14.4488L18.899 20.1117C18.8006 20.3699 18.6258 20.592 18.3979 20.7482C18.17 20.9044 17.8999 20.9874 17.6235 20.986Z\" fill=\"var(--zcat-table-icon-primary)\"></path> <path d=\"M20.3316 33.0002C20.1696 33.0002 20.0114 32.9511 19.8779 32.8594C19.7443 32.7677 19.6417 32.6377 19.5835 32.4865L18.6622 30.0909C18.6422 30.0385 18.6114 29.9909 18.5718 29.9513C18.5321 29.9116 18.4845 29.8808 18.4321 29.8608L16.0365 28.9395C15.8853 28.8813 15.7554 28.7787 15.6637 28.6451C15.572 28.5116 15.5229 28.3534 15.5229 28.1914C15.5229 28.0294 15.572 27.8713 15.6637 27.7377C15.7554 27.6042 15.8853 27.5015 16.0365 27.4433L18.4321 26.522C18.4845 26.502 18.532 26.4711 18.5717 26.4315C18.6113 26.3918 18.6421 26.3443 18.6622 26.292L19.5753 23.9176C19.6268 23.7779 19.7154 23.6548 19.8316 23.5616C19.9479 23.4684 20.0873 23.4086 20.2349 23.3887C20.4121 23.3671 20.5915 23.4054 20.7445 23.4973C20.8976 23.5893 21.0155 23.7297 21.0797 23.8963L22.001 26.292C22.0211 26.3443 22.0519 26.3918 22.0916 26.4315C22.1312 26.4711 22.1787 26.502 22.2311 26.522L24.6267 27.4433C24.7779 27.5015 24.9079 27.6042 24.9995 27.7377C25.0912 27.8713 25.1403 28.0294 25.1403 28.1914C25.1403 28.3534 25.0912 28.5116 24.9995 28.6451C24.9079 28.7787 24.7779 28.8813 24.6267 28.9395L22.2311 29.8608C22.1787 29.8808 22.1311 29.9116 22.0915 29.9513C22.0518 29.9909 22.021 30.0385 22.001 30.0909L21.0797 32.4865C21.0215 32.6377 20.9189 32.7677 20.7853 32.8594C20.6518 32.9511 20.4936 33.0002 20.3316 33.0002Z\" fill=\"var(--zcat-table-icon-primary)\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-file\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M9.33329 1.51303V4.26673C9.33329 4.64009 9.33329 4.82678 9.40595 4.96938C9.46987 5.09483 9.57186 5.19681 9.6973 5.26073C9.83991 5.33339 10.0266 5.33339 10.4 5.33339H13.1537M9.33329 11.3333H5.33329M10.6666 8.66668H5.33329M13.3333 6.65883V11.4667C13.3333 12.5868 13.3333 13.1468 13.1153 13.5747C12.9236 13.951 12.6176 14.2569 12.2413 14.4487C11.8134 14.6667 11.2534 14.6667 10.1333 14.6667H5.86663C4.74652 14.6667 4.18647 14.6667 3.75864 14.4487C3.38232 14.2569 3.07636 13.951 2.88461 13.5747C2.66663 13.1468 2.66663 12.5868 2.66663 11.4667V4.53334C2.66663 3.41324 2.66663 2.85319 2.88461 2.42536C3.07636 2.04904 3.38232 1.74308 3.75864 1.55133C4.18647 1.33334 4.74652 1.33334 5.86663 1.33334H8.00781C8.49699 1.33334 8.74158 1.33334 8.97176 1.3886C9.17583 1.4376 9.37092 1.51841 9.54986 1.62806C9.7517 1.75175 9.92465 1.9247 10.2706 2.2706L12.396 4.39608C12.7419 4.74199 12.9149 4.91494 13.0386 5.11677C13.1482 5.29572 13.229 5.49081 13.278 5.69488C13.3333 5.92506 13.3333 6.16965 13.3333 6.65883Z\" stroke=\"var(--zcat-table-icon-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-table lt-prop-infinite-scroll=\"true\" scroll-end=\"{{method('onScrollEnd')}}\" lt-prop-content=\"{{zcatProp.body}}\" lt-prop-yield=\"true\" style=\"{{zcatProp.style}}\" class=\"{{expHandlers(zcatProp.rowOnclick.methodName,'?:','zcat-clickable-row','')}} {{zcatProp.class}} zcat-table\" lt-prop-scroll=\"{&quot;horizontal&quot;:{{zcatProp.scroll}},&quot;vertical&quot;:{{zcatProp.scroll}}}\" lt-prop-column-sortable=\"{{zcatProp.sorting}}\" lt-prop-prevent-table-modify=\"false\" lt-prop-prevent-scrollbar=\"false\" lt-prop-sticky-table=\"true\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-table-structure> <lyte-thead> <lyte-tr> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkbox}}\" lc-id=\"lc_id_0\"> <lyte-th> <div class=\"zcat-table-header-checkbox\"> <lyte-checkbox lt-prop-prevent-callback-observers=\"true\" lt-prop-checked=\"{{lbind(isAllRowCheckBoxSelect)}}\" class=\"{{expHandlers(isNotAllRowChecked,'?:','minus-btn','')}}\" on-changed=\"{{method('selectAllOrUnSelectAllObjectRow',zcatProp.body)}}\"> </lyte-checkbox> </div> </lyte-th> </template></template> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <lyte-th fixed=\"{{zcatProp.headerFixed}}\"> <div class=\"zcat-table-header-content\"> {{thead.label}} <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.table_sorting}}\" lc-id=\"lc_id_0\"> <lyte-svg onclick=\"{{action('sortColumn','channel_name')}}\" lt-prop-path=\"#zcat-icon-sort\" lt-prop-class=\"zcat-w20 zcat-h16 {{expHandlers(expHandlers(currentSort.key,'==','channel_name'),'?:',expHandlers(expHandlers(currentSort.direction,'==','asc'),'?:','sort-asc','sort-desc'),'sort-desc')}}\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </div> </lyte-th> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-th fixed=\"{{zcatProp.headerFixed}}\"> {{zcatProp.field_type_head}} </lyte-th> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-th class=\"zcat-table-head-moreOptions\" fixed=\"{{zcatProp.headerFixed}}\"> {{thead.label}} </lyte-th> </template></template> </lyte-tr> </lyte-thead> <lyte-tbody> <template is=\"for\" _jsp=\"true\" items=\"{{ltPropData}}\" item=\"row\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.rowOnclick.methodName}}\" lc-id=\"lc_id_0\"> <lyte-tr class=\"zcat-cP {{expHandlers(zcatProp.moreOptions.list.length,'?:','zcat-pR','')}} {{expHandlers(expHandlers(activeMenuIndex,'==',index),'?:','row-focused','')}}\" onclick=\"{{action('tableRowOnClick',event,row.body)}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkbox}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-checkbox lt-prop-prevent-callback-observers=\"true\" lt-prop-checked=\"{{lbind(row.body.isAllRowSelect)}}\" on-changed=\"{{method('selectOrUnselectObjectRow',row.body)}}\"> </lyte-checkbox> </div> </lyte-td> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template></div> </lyte-td> </template></template> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','status')}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableStatusObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','link')}}\" lc-id=\"lc_id_1\"> <zcat-link-button self=\"{{self}}\" zcat-prop=\"{{tableLinkButtonObj}}\"> </zcat-link-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','button')}}\" lc-id=\"lc_id_2\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{tableBtnStyles}}\"> </zcat-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','badge')}}\" lc-id=\"lc_id_3\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableLabelObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','toggle')}}\" lc-id=\"lc_id_4\"> <lyte-checkbox lt-prop-type=\"switch\" lt-prop-tabindex=\"0\" lt-prop-value=\"1\"></lyte-checkbox> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','radio')}}\" lc-id=\"lc_id_5\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(index,'===',0)}}\" lc-id=\"lc_id_0\"> <zcat-radio zcat-prop=\"{{tableRadioDetails}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',1)}}\" lc-id=\"lc_id_1\"> <zcat-radio zcat-prop=\"{{tableRadioDetails1}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',2)}}\" lc-id=\"lc_id_2\"> <zcat-radio zcat-prop=\"{{tableRadioDetails2}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',3)}}\" lc-id=\"lc_id_3\"> <zcat-radio zcat-prop=\"{{tableRadioDetails3}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',4)}}\" lc-id=\"lc_id_4\"> <zcat-radio zcat-prop=\"{{tableRadioDetails4}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',5)}}\" lc-id=\"lc_id_5\"> <zcat-radio zcat-prop=\"{{tableRadioDetails5}}\" self=\"{{self}}\"></zcat-radio> </template></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','icon_text')}}\" lc-id=\"lc_id_6\"> <div class=\"zcat-flex-center zcat-gap-6\"> <lyte-svg lt-prop-path=\"#zcat-icon-sparcle\" lt-prop-class=\"zcat-w14 zcat-h14\" class=\"zcat-flex-center\"></lyte-svg> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"Item Name\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','svg')}}\" lc-id=\"lc_id_7\"> <lyte-svg lt-prop-path=\"#zcat-icon-file\" lt-prop-class=\"zcat-w16 zcat-h16\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </lyte-yield> </div> </lyte-td> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-menu-item class=\"{{expHandlers(item.disabled,'?:','zcat-table-toolkit-disabled','')}}\" onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template><p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template></div> </lyte-menu-item></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </template><template default=\"\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template></div> </lyte-td> </template></template> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','status')}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableStatusObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','link')}}\" lc-id=\"lc_id_1\"> <zcat-link-button self=\"{{self}}\" zcat-prop=\"{{tableLinkButtonObj}}\"> </zcat-link-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','badge')}}\" lc-id=\"lc_id_2\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableLabelObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','button')}}\" lc-id=\"lc_id_3\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{tableBtnStyles}}\"> </zcat-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','toggle')}}\" lc-id=\"lc_id_4\"> <lyte-checkbox lt-prop-type=\"switch\" lt-prop-tabindex=\"0\" lt-prop-value=\"1\"></lyte-checkbox> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','radio')}}\" lc-id=\"lc_id_5\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(index,'===',0)}}\" lc-id=\"lc_id_0\"> <zcat-radio zcat-prop=\"{{tableRadioDetails}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',1)}}\" lc-id=\"lc_id_1\"> <zcat-radio zcat-prop=\"{{tableRadioDetails1}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',2)}}\" lc-id=\"lc_id_2\"> <zcat-radio zcat-prop=\"{{tableRadioDetails2}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',3)}}\" lc-id=\"lc_id_3\"> <zcat-radio zcat-prop=\"{{tableRadioDetails3}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',4)}}\" lc-id=\"lc_id_4\"> <zcat-radio zcat-prop=\"{{tableRadioDetails4}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',5)}}\" lc-id=\"lc_id_5\"> <zcat-radio zcat-prop=\"{{tableRadioDetails5}}\" self=\"{{self}}\"></zcat-radio> </template></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','icon_text')}}\" lc-id=\"lc_id_6\"> <div class=\"zcat-flex-center zcat-gap-6\"> <lyte-svg lt-prop-path=\"#zcat-icon-sparcle\" lt-prop-class=\"zcat-w14 zcat-h14\" class=\"zcat-flex-center\"></lyte-svg> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"Item Name\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','svg')}}\" lc-id=\"lc_id_7\"> <lyte-svg lt-prop-path=\"#zcat-icon-file\" lt-prop-class=\"zcat-w16 zcat-h16\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </lyte-yield> </div> </lyte-td> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"{{expHandlers(item.disabled,'?:','zcat-table-toolkit-disabled','')}}\"> <lyte-menu-item onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} {{expHandlers(item.disabled,'?:','zcat-icon-stroke-disabled','')}} zcat-flex-center\"></lyte-svg></template></template><p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} {{expHandlers(item.disabled,'?:','zcat-icon-stroke-disabled','')}} zcat-flex-center\"></lyte-svg></template></template></div> </lyte-menu-item> </div></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </template></template> </lyte-tr> </template><template default=\"\"> <lyte-tr class=\"{{expHandlers(zcatProp.moreOptions.list.length,'?:','zcat-pR','')}} {{expHandlers(expHandlers(activeMenuIndex,'==',index),'?:','row-focused','')}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkboxOptions.length}}\" lc-id=\"lc_id_0\"> </template><template default=\"\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template></div> </lyte-td> </template></template> </template> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-menu-item onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template><p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template></div> </lyte-menu-item></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </lyte-tr> </template></template> </template> </lyte-tbody> </lyte-table-structure> </template> </lyte-table> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.paginationDetails.list.length}}\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.paginationDetails.list}}\" item=\"data\" index=\"index\" is=\"for\" _new=\"true\"><lyte-navigator lt-prop-yield=\"true\" lt-prop-value=\"{{data.value}}\" lt-prop-records=\"{{data.records}}\" lt-prop-perpage=\"{{data.perpage}}\" lt-prop-more-records=\"{{data.morerecords}}\" lt-prop-middle-text=\"{{data.middletext}}\" lt-prop-show-only-icon=\"{{data.showonlyicon}}\" lt-prop-show-text=\"{{data.showtext}}\" lt-prop-aria=\"{{data.aria}}\" lt-prop-aria-next=\"{{data.arianext}}\" lt-prop-aria-previous=\"{{data.ariaprevious}}\" lt-prop-aria-home=\"{{data.ariahome}}\" lt-prop-aria-end=\"{{data.ariaend}}\" lt-prop-type=\"{{expHandlers(data.type,'?:','data.type','default')}}\" on-next=\"{{method('customLbindForPagination',data.onNext,'')}}\" on-previous=\"{{method('customLbindForPagination',data.onPrevious,'')}}\" on-home=\"{{method('customLbindForPagination',data.onHome,'')}}\" on-end=\"{{method('customLbindForPagination',data.onEnd,'')}}\" on-select=\"{{method('customLbindForPagination',data.onSelect,'')}}\"> <template is=\"registerYield\" yield-name=\"navigatorYield\"> <div class=\"zcat-pagination-wraper {{expHandlers(expHandlers(zcatProp.class,'===','borderless-table'),'?:','borderless-table','')}}\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Showing Results :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">{{data.startPage}} - {{data.endPage}}</div> <div class=\"zcat-pagination-result-total\">of {{data.records}}</div> </div> </div> <div class=\"zcat-flex-center zcat-gap-16\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center\"> <div class=\"zcat-pagination-dropdown-text\">Rows per page :</div> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{tablePaginationDropdownStyles}}\"> </zcat-dropdown> </div> <div class=\"zcat-pagination-divider\"></div> <div class=\"zcat-flex-center zcat-gap-12\"> <div class=\"lyteSingleBack zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-left-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center zcat-pagination-icon-disabled-color\"></lyte-svg> </div> <div class=\"zcat-pagination-page-list\"> {{data.startPage}} - {{data.endPage}} </div> <div class=\"lyteSingleFront zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-right-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center\"></lyte-svg> </div> </div> </div> </div> </template> </lyte-navigator></template> </template></template> </template><style>\n\n/* === Global base styles from reference css/zcat-table.css === */\nlyte-table * {\n  box-sizing: border-box;\n}\nlyte-table {\n  display: block;\n  width: 100%;\n  height: inherit;\n  font-family: var(--zcat-font-family-primary);\n  border-radius: 5px;\n  overflow: hidden;\n}\nlyte-table.borderless-table{\n  border-radius: 0;\n  border-right: none;\n  border-left: none;\n}\nlyte-table-structure {\n  display: table;\n  position: relative;\n  background: var(--zcat-table-bg-row);\n  box-sizing: border-box;\n}\nlyte-tr {\n  display: table-row;\n}\nlyte-tr.lyteTableToolkit,\nlyte-tr.lyteTableDummyRow {\n  position: relative;\n}\nlyte-col {\n  display: table-column;\n}\nlyte-colgroup {\n  display: table-column-group;\n}\nlyte-thead {\n  display: table-header-group;\n}\n.zcat-table lyte-th,lyte-th{\n  cursor: default;\n  background: var(--zcat-table-bg-header);\n  text-align: left;\n  color: var(--zcat-table-text-light);\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  font-weight: 600;\n  outline: none;\n  padding: 0 14px;\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  min-width: 44px;\n  height: 44px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-transform: capitalize;\n}\nlyte-th {\n  padding: 10px 14px;\n}\nlyte-th.tableRowFixed {\n  z-index: 6;\n}\n.lyteTableFixed {\n  z-index: 7;\n  box-shadow: var(--zcat-shadow-light-all);\n}\nlyte-th.tableRowFixed.lyteTableFixed {\n  z-index: 8;\n}\nlyte-th:last-of-type lyte-tablehead-resize {\n  cursor: default;\n  position: absolute;\n  right: 0;\n  height: 0px;\n  width: 0;\n  top: 0;\n  z-index: 0;\n  pointer-events: none;\n}\nlyte-tbody {\n  display: table-row-group;\n}\n.zcat-table lyte-td,lyte-td{\n  display: table-cell;\n  vertical-align: middle;\n  background: var(--zcat-color-white);\n  min-width: 44px;\n  max-width: 350px;\n  padding: 0;\n  box-sizing: border-box;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  white-space: initial;\n  color: var(--zcat-table-icon-primary);\n  position: relative;\n  z-index: 2;\n  border: none;\n}\nlyte-td{\n  padding: 14px;\n}\nlyte-tfoot {\n  display: table-footer-group;\n}\nlyte-table > .lyteTableScroll {\n  overflow: auto;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none;\n}\nlyte-table .lyteTableScroll {\n border: 1px solid var(--zcat-table-border-default);\n border-radius: 4px;\n}\nlyte-table > .lyteTableScroll > lyte-yield {\n  display: block;\n  width: 100%;\n}\nlyte-table lyte-tbody lyte-tr:last-child {\n  border-bottom: none;\n}\nlyte-table lyte-thead lyte-tr lyte-td:last-of-type,\nlyte-table lyte-tbody lyte-tr lyte-td:last-of-type {\n  border-right: 0;\n}\nlyte-table lyte-th {\n  border: none;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  /* border-bottom: none;\n  border-right: none; */\n}\nlyte-table lyte-th:last-of-type {\n  border-right: 0;\n}\nlyte-table lyte-td {\n  background: 0 0;\n  border: none;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize,\nlyte-tablehead-resize {\n  cursor: ew-resize;\n  height: 100%;\n  width: 21px;\n  top: 0;\n  z-index: 9;\n  right: -12px;\n  position: absolute;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize {\n  pointer-events: auto;\n  right: 0;\n}\nlyte-tablehead-resize::after {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 100%;\n  right: 10px;\n  background: transparent;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize::after {\n  right: 0;\n}\nlyte-th[resize='enable']:hover lyte-tablehead-resize::after {\n  background: #5ba1e5;\n  opacity: 0.7;\n}\nlyte-th[resize='enable'] lyte-tablehead-resize:hover::after,\nlyte-th[resize='enable'].resizeSelect lyte-tablehead-resize::after {\n  background: #5ba1e5;\n  opacity: 1;\n}\nlyte-table.resizing\n  lyte-th[resize='enable']:not(.resizeSelect):hover\n  lyte-tablehead-resize::after {\n  background: transparent;\n}\nlyte-table-resize {\n  width: 15px;\n  height: 15px;\n  bottom: 0;\n  cursor: se-resize;\n  z-index: 10;\n  right: 0;\n  position: absolute;\n}\nlyte-table-resize:hover {\n  border-bottom: 2px solid #5ba1e5;\n  border-right: 2px solid #5ba1e5;\n}\nlyte-table-horizontal-resize {\n  width: 15px;\n  height: 100%;\n  bottom: 0;\n  cursor: col-resize;\n  z-index: 9;\n  right: 0;\n  position: absolute;\n}\nlyte-table-horizontal-resize:hover {\n  border-right: 2px solid #5ba1e5;\n}\nlyte-table-vertical-resize {\n  width: 100%;\n  height: 15px;\n  bottom: 0;\n  cursor: row-resize;\n  z-index: 9;\n  right: 0;\n  position: absolute;\n}\nlyte-table-vertical-resize:hover {\n  border-bottom: 2px solid #5ba1e5;\n}\n.lyteTableSortHelper {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  position: absolute;\n  z-index: 10;\n  background: #fff;\n  border: 1px solid #5ba1e5;\n  padding: 12px 15px;\n  box-sizing: border-box;\n  cursor: move;\n}\n.sortableTable lyte-th {\n  cursor: move;\n}\nlyte-table.lyteStickyTable {\n  --lyte-table-intersection: 0px;\n}\n.lyteStickyTable .lyteFixedColumn {\n  position: sticky;\n}\n.lyteIntersectionDiv {\n  position: absolute;\n  width: 1px;\n  height: 10px;\n  top: var(--lyte-table-intersection);\n  opacity: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n.lyteStickyTable lyte-th {\n  top: 0;\n  position: sticky;\n  z-index: 6;\n}\n.lyteStickyTable lyte-th.lyteStickyTableColumnMoving{\n  z-index: 8;\n}\n.lyteStickyTable lyte-th.lyteTableFixed {\n  z-index: 6;\n}\n.lyteTableRightFixed {\n  box-shadow: var(--zcat-shadow-light-all);\n}\n\ntable.zcat-label-value-pairs {\n  width: 100%;\n  border: none;\n}\ntable.zcat-label-value-pairs td,\nth {\n  border: none;\n  text-align: left;\n}\ntable.zcat-label-value-pairs td:nth-child(2),\ntable.zcat-label-value-pairs td:nth-child(5),\ntable.zcat-label-value-pairs td:nth-child(8) {\n  width: 30px;\n  text-align: center;\n}\ntable.zcat-label-value-pairs td:nth-child(3),\ntable.zcat-label-value-pairs td:nth-child(6) {\n  padding-right: 20px;\n}\ntable.zcat-label-value-pairs .key {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-secondary);\n}\ntable.zcat-label-value-pairs .value {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-primary);\n}\nlyte-table.zcat-table-action-tool lyte-tbody lyte-tr {\n  position: relative;\n}\nlyte-table.zcat-table-action-tool lyte-tbody lyte-tr.row-focused {\n  background: var(--zcat-table-bg-rowHover);\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n}\nlyte-table.zcat-table-checkbox lyte-tbody lyte-tr lyte-td:first-child {\n  width: 65px;\n}\nlyte-table.zcat-table-checkbox lyte-checkbox {\n  margin-left: 13px;\n}\nlyte-checkbox.minus-btn .lyteCheckbox:hover .lyteCheckBoxDefault::before,\nlyte-checkbox.minus-btn .lyteCheckBoxDefault::before {\n  background-color: var(--zcat-color-primary);\n  border-color: transparent;\n}\nlyte-checkbox.minus-btn\n  .lyteCheckbox\n  > input[type='checkbox']\n  + .lyteCheckBoxDefault::after {\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n}\nlyte-table.zcat-table-checkbox lyte-th:first-child {\n  z-index: 10;\n}\n.zcat-table-pagination-block {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 30px;\n  border: 1px solid var(--zcat-body-border-outerdivider);\n  border-top: none;\n  box-shadow: 0px 0px 16px -4px var(--zcat-shadow-bg-default);\n  border-radius: 0 0 10px 10px;\n  padding: 0 16px;\n}\n.zcat-table-pagination-block .splitter {\n  width: 1.5px;\n  height: 16px;\n  background: var(--zcat-body-border-outerdivider-secondary);\n}\n.zcat-table-nav-block {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zcat-table-nav-block span {\n  color: var(--zcat-color-dark2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n}\n.zcat-table-nav-block span.pageno {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--zcat-color-dark2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.zcat-table-nav-block span.pageno:hover {\n  background-color: var(--zcat-color-primarylight);\n}\n.zcat-table-nav-block span.pageno.active {\n  background-color: var(--zcat-color-primarylight);\n  color: var(--zcat-color-primary);\n  font-weight: 600;\n}\n.zcat-tablenav-prev-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"%234D618A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.zcat-tablenav-next-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.25 3.5L8.75 7L5.25 10.5\" stroke=\"%234D618A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.zcat-tablenav-dots-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"10\" height=\"3\" viewBox=\"0 0 10 3\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.65341 2.06818C1.44318 2.06818 1.26278 1.9929 1.11222 1.84233C0.961648 1.69176 0.886364 1.51136 0.886364 1.30114C0.886364 1.09091 0.961648 0.910511 1.11222 0.759943C1.26278 0.609375 1.44318 0.534091 1.65341 0.534091C1.86364 0.534091 2.04403 0.609375 2.1946 0.759943C2.34517 0.910511 2.42045 1.09091 2.42045 1.30114C2.42045 1.44034 2.38494 1.56818 2.31392 1.68466C2.24574 1.80114 2.15341 1.89489 2.03693 1.96591C1.9233 2.03409 1.79545 2.06818 1.65341 2.06818ZM4.9581 2.06818C4.74787 2.06818 4.56747 1.9929 4.4169 1.84233C4.26634 1.69176 4.19105 1.51136 4.19105 1.30114C4.19105 1.09091 4.26634 0.910511 4.4169 0.759943C4.56747 0.609375 4.74787 0.534091 4.9581 0.534091C5.16832 0.534091 5.34872 0.609375 5.49929 0.759943C5.64986 0.910511 5.72514 1.09091 5.72514 1.30114C5.72514 1.44034 5.68963 1.56818 5.61861 1.68466C5.55043 1.80114 5.4581 1.89489 5.34162 1.96591C5.22798 2.03409 5.10014 2.06818 4.9581 2.06818ZM8.26278 2.06818C8.05256 2.06818 7.87216 1.9929 7.72159 1.84233C7.57102 1.69176 7.49574 1.51136 7.49574 1.30114C7.49574 1.09091 7.57102 0.910511 7.72159 0.759943C7.87216 0.609375 8.05256 0.534091 8.26278 0.534091C8.47301 0.534091 8.65341 0.609375 8.80398 0.759943C8.95455 0.910511 9.02983 1.09091 9.02983 1.30114C9.02983 1.44034 8.99432 1.56818 8.9233 1.68466C8.85511 1.80114 8.76278 1.89489 8.64631 1.96591C8.53267 2.03409 8.40483 2.06818 8.26278 2.06818Z\" fill=\"%234D618A\"/></svg>');\n  width: 10px;\n  height: 3px;\n  scale: 1.5;\n}\n.zcat-tablenav-prev-icon:hover,\n.zcat-tablenav-next-icon:hover {\n  background-color: var(--zcat-color-primarylight);\n  border-radius: 50%;\n}\n.zcat-tablenav-prev-icon.disabled,\n.zcat-tablenav-next-icon.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n  background-color: transparent !important;\n}\n.zcat-table-pagination-block.freeze {\n  pointer-events: none;\n  opacity: 0.7;\n}\nlyte-checkbox.minus-btn\n  .lyteCheckbox\n  > input[type='checkbox']\n  + .lyteCheckBoxDefault::after {\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n}\n.zcat-clickable-row lyte-tr {\n  cursor: pointer;\n}\nlyte-table lyte-tbody lyte-tr .table-toolkit-wraper{\n  position: sticky;\n  top: 0;\n  right: 0;\n  padding: 0;\n  display: flex;\n  max-width: 44px;\n}\nlyte-table lyte-tbody lyte-tr .table-toolkit {\n  width: 44px;\n  height: 43px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--zcat-table-threeDot-iconBg);\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.3s;\n  box-shadow: -8px 0px 6px -4px var(--zcat-shadow-bg-default);\n}\nlyte-table lyte-tbody lyte-tr:hover .table-toolkit {\n  opacity: 1;\n}\nlyte-table lyte-tbody lyte-tr.row-focused {\n  background: var(--zcat-table-bg-rowHover);\n  border-bottom: 1px solid var(--zcat-color-grey6);\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n}\nlyte-table lyte-tbody lyte-tr.row-focused .table-toolkit,\nlyte-table lyte-tbody lyte-tr:hover .table-toolkit {\n  opacity: 1;\n}\n.table-toolkit-three-dots {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table-toolkit-three-dots lyte-svg{\n  z-index: 1;\n}\n.table-toolkit-three-dots::after {\n  content: '';\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--zcat-table-threeDot-iconBg-hover);\n  inset: -1px 0 0 0;\n  margin: auto;\n  transform: scale(0);\n  transition: transform 0.2s ease;\n}\n.table-toolkit-three-dots:hover::after {\n  transform: scale(1);\n}\n\nlyte-table lyte-tbody lyte-tr{\n  background: var(--zcat-table-bg-row);\n}\n\nlyte-table lyte-tbody lyte-tr.row-focused .table-toolkit{\n  background: var(--zcat-table-threeDot-iconBg-active);\n}\n\n.table-toolkit:hover{\nbackground:var(--zcat-table-threeDot-iconBg-hover);\n}\n\n/* sorting css */\n\n.sort-icon {\n  margin-left: 8px;\n  font-size: 12px;\n  user-select: none;\n}\n\n/* For Checkbox Minus cion */\n\nlyte-checkbox.minus-btn .lyteCheckbox:hover .lyteCheckBoxDefault::before,\nlyte-checkbox.minus-btn .lyteCheckBoxDefault::before {\n    background-color: var(--zcat-color-primary);\n    border-color: transparent;\n}\nlyte-checkbox.minus-btn .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after {\n    content: '-';\n    font-weight: 500;\n    background: none;\n    color: var(--zcat-color-white);\n    font-size: 22px;\n    position: absolute;\n    top: 0;\n    left: 2px;\n}\nlyte-checkbox.minus-btn.checkboxWutLabel .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after{\n  top: -4.5px;\n}\n.zcat-stroke-dark1{\n  stroke: var(--zcat-table-icon-primary);\n}\n\n.sort-asc {\n  transform: rotate(0deg);\n  transition: transform 0.2s ease;\n}\n\n.sort-desc {\n  transform: rotate(180deg);\n  transition: transform 0.2s ease;\n}\n\n.zcat-table-body-content-wraper,.zcat-table-body-checkbox{\n  display: flex;\n  align-items: center;\n  height: 44px;\n  padding: 2px 14px;\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  background: var(--zcat-table-bg-row);\n}\n.zcat-table lyte-tr:last-child .zcat-table-body-content-wraper,.zcat-table lyte-tr:last-child .zcat-table-body-checkbox{\n  border-bottom: 0;\n}\n/* .zcat-table lyte-tr:first-child .zcat-table-body-content-wraper,.zcat-table lyte-tr:first-child .zcat-table-body-checkbox{\n  border-bottom: 1px solid var(--zcat-table-border-default);\n} */\n\n.zcat-table lyte-tbody lyte-tr:hover .zcat-table-body-content-wraper,.zcat-table lyte-tbody lyte-tr:hover,.zcat-table lyte-tbody lyte-tr:hover .zcat-table-body-checkbox{\n  background: var(--zcat-table-bg-rowHover);\n  /* border-bottom: 1px solid var(--zcat-table-border-default); */\n}\n.zcat-table lyte-tr .table-toolkit-wraper .zcat-table-body-content-wraper{\n  background-color: transparent;\n  padding: 0;\n  width: 44px;\n  /* right: -5.8px;\n  position: relative; */\n}\nlyte-tr lyte-td{\n  height: 44px;\n  padding: 2px 14px;\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  background: var(--zcat-table-bg-row);\n}\nlyte-tr lyte-td{\n  border-bottom: 1px solid var(--zcat-table-border-default);\n}\nlyte-tr:last-child lyte-td{\n  border-bottom: 0;\n}\nlyte-tr .table-toolkit-wraper{\n  background-color: transparent;\n}\n/* lyte-tr:first-child lyte-td{\n  border-bottom: 0;\n} */\nlyte-tbody lyte-tr:hover lyte-td{\n  background: var(--zcat-table-bg-rowHover);\n  /* border-bottom: 1px solid var(--zcat-table-border-default); */\n}\n\n/* lyte-table lyte-tr:hover .table-toolkit-wraper .zcat-table-body-content-wraper{\n  opacity: 1;\n} */\n\n.zcat-table-body-content-ellipsis{\n  /* display: -webkit-box;\n  -webkit-line-clamp: 2; /* Show max 2 lines\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: -webkit-fill-available;\n  width: max-content;\n  max-height: 100%;\n  position: relative;\n  cursor: pointer;\n  white-space: pre-wrap;\n  word-break: break-all;\n  text-indent: -4px; */\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  word-break: break-all;\n  overflow-wrap: normal;\n  max-width: -webkit-fill-available;\n  width: max-content;\n  max-height: 100%;\n}\n.zcat-table-body-content{\n  width: 100%;\n}\n.zcat-table-header-checkbox{\n  width: fit-content;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.zcat-stroke-dark1{\n  stroke: var(--zcat-table-icon-primary);\n}\n.zcat-table-header-content{\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  height: 43px;\n}\n.zcat-table-head-moreOptions{\n  width: 44px;\n}\n.zcat-table-toolkit-disabled{\n  cursor: not-allowed;\n}\n.zcat-table-toolkit-disabled lyte-menu-item{\n  pointer-events: none;\n}\n.zcat-table-toolkit-disabled lyte-menu-item.lyteMenuSelection{\n  background: transparent;\n}\n.zcat-table-toolkit-disabled lyte-menu-item p{\n  color: var(--zcat-table-text-disabled);\n}\n.zcat-table-toolkit-disabled lyte-menu-item .zcat-icon-stroke-disabled{\n  stroke: var(--zcat-table-icon-disabled);\n}\n\n/* === Global base styles from reference css/zcat-table.css === */\nlyte-table * {\n  box-sizing: border-box;\n}\nlyte-table {\n  display: block;\n  width: 100%;\n  height: inherit;\n  font-family: var(--zcat-font-family-primary);\n  border-radius: 5px;\n  overflow: hidden;\n}\nlyte-table.borderless-table{\n  border-radius: 0;\n  border-right: none;\n  border-left: none;\n}\nlyte-table-structure {\n  display: table;\n  position: relative;\n  background: var(--zcat-table-bg-row);\n  box-sizing: border-box;\n}\nlyte-tr {\n  display: table-row;\n}\nlyte-tr.lyteTableToolkit,\nlyte-tr.lyteTableDummyRow {\n  position: relative;\n}\nlyte-col {\n  display: table-column;\n}\nlyte-colgroup {\n  display: table-column-group;\n}\nlyte-thead {\n  display: table-header-group;\n}\n.zcat-table lyte-th,lyte-th{\n  cursor: default;\n  background: var(--zcat-table-bg-header);\n  text-align: left;\n  color: var(--zcat-table-text-light);\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  font-weight: 600;\n  outline: none;\n  padding: 0 14px;\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  min-width: 44px;\n  height: 44px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-transform: capitalize;\n}\nlyte-th {\n  padding: 10px 14px;\n}\nlyte-th.tableRowFixed {\n  z-index: 6;\n}\n.lyteTableFixed {\n  z-index: 7;\n  box-shadow: var(--zcat-shadow-light-all);\n}\nlyte-th.tableRowFixed.lyteTableFixed {\n  z-index: 8;\n}\nlyte-th:last-of-type lyte-tablehead-resize {\n  cursor: default;\n  position: absolute;\n  right: 0;\n  height: 0px;\n  width: 0;\n  top: 0;\n  z-index: 0;\n  pointer-events: none;\n}\nlyte-tbody {\n  display: table-row-group;\n}\n.zcat-table lyte-td,lyte-td{\n  display: table-cell;\n  vertical-align: middle;\n  background: var(--zcat-color-white);\n  min-width: 44px;\n  max-width: 350px;\n  padding: 0;\n  box-sizing: border-box;\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  white-space: initial;\n  color: var(--zcat-table-icon-primary);\n  position: relative;\n  z-index: 2;\n  border: none;\n}\nlyte-td{\n  padding: 14px;\n}\nlyte-tfoot {\n  display: table-footer-group;\n}\nlyte-table > .lyteTableScroll {\n  overflow: auto;\n  max-width: 100%;\n  max-height: 100%;\n  outline: none;\n}\nlyte-table .lyteTableScroll {\n border: 1px solid var(--zcat-table-border-default);\n border-radius: 4px;\n}\nlyte-table > .lyteTableScroll > lyte-yield {\n  display: block;\n  width: 100%;\n}\nlyte-table lyte-tbody lyte-tr:last-child {\n  border-bottom: none;\n}\nlyte-table lyte-thead lyte-tr lyte-td:last-of-type,\nlyte-table lyte-tbody lyte-tr lyte-td:last-of-type {\n  border-right: 0;\n}\nlyte-table lyte-th {\n  border: none;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  /* border-bottom: none;\n  border-right: none; */\n}\nlyte-table lyte-th:last-of-type {\n  border-right: 0;\n}\nlyte-table lyte-td {\n  background: 0 0;\n  border: none;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize,\nlyte-tablehead-resize {\n  cursor: ew-resize;\n  height: 100%;\n  width: 21px;\n  top: 0;\n  z-index: 9;\n  right: -12px;\n  position: absolute;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize {\n  pointer-events: auto;\n  right: 0;\n}\nlyte-tablehead-resize::after {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 100%;\n  right: 10px;\n  background: transparent;\n}\n.lyteDualResize lyte-th:last-of-type lyte-tablehead-resize::after {\n  right: 0;\n}\nlyte-th[resize='enable']:hover lyte-tablehead-resize::after {\n  background: #5ba1e5;\n  opacity: 0.7;\n}\nlyte-th[resize='enable'] lyte-tablehead-resize:hover::after,\nlyte-th[resize='enable'].resizeSelect lyte-tablehead-resize::after {\n  background: #5ba1e5;\n  opacity: 1;\n}\nlyte-table.resizing\n  lyte-th[resize='enable']:not(.resizeSelect):hover\n  lyte-tablehead-resize::after {\n  background: transparent;\n}\nlyte-table-resize {\n  width: 15px;\n  height: 15px;\n  bottom: 0;\n  cursor: se-resize;\n  z-index: 10;\n  right: 0;\n  position: absolute;\n}\nlyte-table-resize:hover {\n  border-bottom: 2px solid #5ba1e5;\n  border-right: 2px solid #5ba1e5;\n}\nlyte-table-horizontal-resize {\n  width: 15px;\n  height: 100%;\n  bottom: 0;\n  cursor: col-resize;\n  z-index: 9;\n  right: 0;\n  position: absolute;\n}\nlyte-table-horizontal-resize:hover {\n  border-right: 2px solid #5ba1e5;\n}\nlyte-table-vertical-resize {\n  width: 100%;\n  height: 15px;\n  bottom: 0;\n  cursor: row-resize;\n  z-index: 9;\n  right: 0;\n  position: absolute;\n}\nlyte-table-vertical-resize:hover {\n  border-bottom: 2px solid #5ba1e5;\n}\n.lyteTableSortHelper {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  position: absolute;\n  z-index: 10;\n  background: #fff;\n  border: 1px solid #5ba1e5;\n  padding: 12px 15px;\n  box-sizing: border-box;\n  cursor: move;\n}\n.sortableTable lyte-th {\n  cursor: move;\n}\nlyte-table.lyteStickyTable {\n  --lyte-table-intersection: 0px;\n}\n.lyteStickyTable .lyteFixedColumn {\n  position: sticky;\n}\n.lyteIntersectionDiv {\n  position: absolute;\n  width: 1px;\n  height: 10px;\n  top: var(--lyte-table-intersection);\n  opacity: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n.lyteStickyTable lyte-th {\n  top: 0;\n  position: sticky;\n  z-index: 6;\n}\n.lyteStickyTable lyte-th.lyteStickyTableColumnMoving{\n  z-index: 8;\n}\n.lyteStickyTable lyte-th.lyteTableFixed {\n  z-index: 6;\n}\n.lyteTableRightFixed {\n  box-shadow: var(--zcat-shadow-light-all);\n}\n\ntable.zcat-label-value-pairs {\n  width: 100%;\n  border: none;\n}\ntable.zcat-label-value-pairs td,\nth {\n  border: none;\n  text-align: left;\n}\ntable.zcat-label-value-pairs td:nth-child(2),\ntable.zcat-label-value-pairs td:nth-child(5),\ntable.zcat-label-value-pairs td:nth-child(8) {\n  width: 30px;\n  text-align: center;\n}\ntable.zcat-label-value-pairs td:nth-child(3),\ntable.zcat-label-value-pairs td:nth-child(6) {\n  padding-right: 20px;\n}\ntable.zcat-label-value-pairs .key {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-secondary);\n}\ntable.zcat-label-value-pairs .value {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-primary);\n}\nlyte-table.zcat-table-action-tool lyte-tbody lyte-tr {\n  position: relative;\n}\nlyte-table.zcat-table-action-tool lyte-tbody lyte-tr.row-focused {\n  background: var(--zcat-table-bg-rowHover);\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n}\nlyte-table.zcat-table-checkbox lyte-tbody lyte-tr lyte-td:first-child {\n  width: 65px;\n}\nlyte-table.zcat-table-checkbox lyte-checkbox {\n  margin-left: 13px;\n}\nlyte-checkbox.minus-btn .lyteCheckbox:hover .lyteCheckBoxDefault::before,\nlyte-checkbox.minus-btn .lyteCheckBoxDefault::before {\n  background-color: var(--zcat-color-primary);\n  border-color: transparent;\n}\nlyte-checkbox.minus-btn\n  .lyteCheckbox\n  > input[type='checkbox']\n  + .lyteCheckBoxDefault::after {\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n}\nlyte-table.zcat-table-checkbox lyte-th:first-child {\n  z-index: 10;\n}\n.zcat-table-pagination-block {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 30px;\n  border: 1px solid var(--zcat-body-border-outerdivider);\n  border-top: none;\n  box-shadow: 0px 0px 16px -4px var(--zcat-shadow-bg-default);\n  border-radius: 0 0 10px 10px;\n  padding: 0 16px;\n}\n.zcat-table-pagination-block .splitter {\n  width: 1.5px;\n  height: 16px;\n  background: var(--zcat-body-border-outerdivider-secondary);\n}\n.zcat-table-nav-block {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zcat-table-nav-block span {\n  color: var(--zcat-color-dark2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n}\n.zcat-table-nav-block span.pageno {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--zcat-color-dark2);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.zcat-table-nav-block span.pageno:hover {\n  background-color: var(--zcat-color-primarylight);\n}\n.zcat-table-nav-block span.pageno.active {\n  background-color: var(--zcat-color-primarylight);\n  color: var(--zcat-color-primary);\n  font-weight: 600;\n}\n.zcat-tablenav-prev-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"%234D618A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.zcat-tablenav-next-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.25 3.5L8.75 7L5.25 10.5\" stroke=\"%234D618A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.zcat-tablenav-dots-icon {\n  background-image: url('data:image/svg+xml,<svg width=\"10\" height=\"3\" viewBox=\"0 0 10 3\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.65341 2.06818C1.44318 2.06818 1.26278 1.9929 1.11222 1.84233C0.961648 1.69176 0.886364 1.51136 0.886364 1.30114C0.886364 1.09091 0.961648 0.910511 1.11222 0.759943C1.26278 0.609375 1.44318 0.534091 1.65341 0.534091C1.86364 0.534091 2.04403 0.609375 2.1946 0.759943C2.34517 0.910511 2.42045 1.09091 2.42045 1.30114C2.42045 1.44034 2.38494 1.56818 2.31392 1.68466C2.24574 1.80114 2.15341 1.89489 2.03693 1.96591C1.9233 2.03409 1.79545 2.06818 1.65341 2.06818ZM4.9581 2.06818C4.74787 2.06818 4.56747 1.9929 4.4169 1.84233C4.26634 1.69176 4.19105 1.51136 4.19105 1.30114C4.19105 1.09091 4.26634 0.910511 4.4169 0.759943C4.56747 0.609375 4.74787 0.534091 4.9581 0.534091C5.16832 0.534091 5.34872 0.609375 5.49929 0.759943C5.64986 0.910511 5.72514 1.09091 5.72514 1.30114C5.72514 1.44034 5.68963 1.56818 5.61861 1.68466C5.55043 1.80114 5.4581 1.89489 5.34162 1.96591C5.22798 2.03409 5.10014 2.06818 4.9581 2.06818ZM8.26278 2.06818C8.05256 2.06818 7.87216 1.9929 7.72159 1.84233C7.57102 1.69176 7.49574 1.51136 7.49574 1.30114C7.49574 1.09091 7.57102 0.910511 7.72159 0.759943C7.87216 0.609375 8.05256 0.534091 8.26278 0.534091C8.47301 0.534091 8.65341 0.609375 8.80398 0.759943C8.95455 0.910511 9.02983 1.09091 9.02983 1.30114C9.02983 1.44034 8.99432 1.56818 8.9233 1.68466C8.85511 1.80114 8.76278 1.89489 8.64631 1.96591C8.53267 2.03409 8.40483 2.06818 8.26278 2.06818Z\" fill=\"%234D618A\"/></svg>');\n  width: 10px;\n  height: 3px;\n  scale: 1.5;\n}\n.zcat-tablenav-prev-icon:hover,\n.zcat-tablenav-next-icon:hover {\n  background-color: var(--zcat-color-primarylight);\n  border-radius: 50%;\n}\n.zcat-tablenav-prev-icon.disabled,\n.zcat-tablenav-next-icon.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n  background-color: transparent !important;\n}\n.zcat-table-pagination-block.freeze {\n  pointer-events: none;\n  opacity: 0.7;\n}\nlyte-checkbox.minus-btn\n  .lyteCheckbox\n  > input[type='checkbox']\n  + .lyteCheckBoxDefault::after {\n  content: '-';\n  font-weight: 500;\n  background: none;\n  color: var(--zcat-color-white);\n  font-size: 22px;\n  position: absolute;\n  top: 0;\n  left: 3px;\n}\n.zcat-clickable-row lyte-tr {\n  cursor: pointer;\n}\nlyte-table lyte-tbody lyte-tr .table-toolkit-wraper{\n  position: sticky;\n  top: 0;\n  right: 0;\n  padding: 0;\n  display: flex;\n  max-width: 44px;\n}\nlyte-table lyte-tbody lyte-tr .table-toolkit {\n  width: 44px;\n  height: 43px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--zcat-table-threeDot-iconBg);\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.3s;\n  box-shadow: -8px 0px 6px -4px var(--zcat-shadow-bg-default);\n}\nlyte-table lyte-tbody lyte-tr:hover .table-toolkit {\n  opacity: 1;\n}\nlyte-table lyte-tbody lyte-tr.row-focused {\n  background: var(--zcat-table-bg-rowHover);\n  border-bottom: 1px solid var(--zcat-color-grey6);\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n}\nlyte-table lyte-tbody lyte-tr.row-focused .table-toolkit,\nlyte-table lyte-tbody lyte-tr:hover .table-toolkit {\n  opacity: 1;\n}\n.table-toolkit-three-dots {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table-toolkit-three-dots lyte-svg{\n  z-index: 1;\n}\n.table-toolkit-three-dots::after {\n  content: '';\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--zcat-table-threeDot-iconBg-hover);\n  inset: -1px 0 0 0;\n  margin: auto;\n  transform: scale(0);\n  transition: transform 0.2s ease;\n}\n.table-toolkit-three-dots:hover::after {\n  transform: scale(1);\n}\n\nlyte-table lyte-tbody lyte-tr{\n  background: var(--zcat-table-bg-row);\n}\n\nlyte-table lyte-tbody lyte-tr.row-focused .table-toolkit{\n  background: var(--zcat-table-threeDot-iconBg-active);\n}\n\n.table-toolkit:hover{\nbackground:var(--zcat-table-threeDot-iconBg-hover);\n}\n\n/* sorting css */\n\n.sort-icon {\n  margin-left: 8px;\n  font-size: 12px;\n  user-select: none;\n}\n\n/* For Checkbox Minus cion */\n\nlyte-checkbox.minus-btn .lyteCheckbox:hover .lyteCheckBoxDefault::before,\nlyte-checkbox.minus-btn .lyteCheckBoxDefault::before {\n    background-color: var(--zcat-color-primary);\n    border-color: transparent;\n}\nlyte-checkbox.minus-btn .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after {\n    content: '-';\n    font-weight: 500;\n    background: none;\n    color: var(--zcat-color-white);\n    font-size: 22px;\n    position: absolute;\n    top: 0;\n    left: 2px;\n}\nlyte-checkbox.minus-btn.checkboxWutLabel .lyteCheckbox>input[type=checkbox]+.lyteCheckBoxDefault::after{\n  top: -4.5px;\n}\n.zcat-stroke-dark1{\n  stroke: var(--zcat-table-icon-primary);\n}\n\n.sort-asc {\n  transform: rotate(0deg);\n  transition: transform 0.2s ease;\n}\n\n.sort-desc {\n  transform: rotate(180deg);\n  transition: transform 0.2s ease;\n}\n\n.zcat-table-body-content-wraper,.zcat-table-body-checkbox{\n  display: flex;\n  align-items: center;\n  height: 44px;\n  padding: 2px 14px;\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  background: var(--zcat-table-bg-row);\n}\n.zcat-table lyte-tr:last-child .zcat-table-body-content-wraper,.zcat-table lyte-tr:last-child .zcat-table-body-checkbox{\n  border-bottom: 0;\n}\n/* .zcat-table lyte-tr:first-child .zcat-table-body-content-wraper,.zcat-table lyte-tr:first-child .zcat-table-body-checkbox{\n  border-bottom: 1px solid var(--zcat-table-border-default);\n} */\n\n.zcat-table lyte-tbody lyte-tr:hover .zcat-table-body-content-wraper,.zcat-table lyte-tbody lyte-tr:hover,.zcat-table lyte-tbody lyte-tr:hover .zcat-table-body-checkbox{\n  background: var(--zcat-table-bg-rowHover);\n  /* border-bottom: 1px solid var(--zcat-table-border-default); */\n}\n.zcat-table lyte-tr .table-toolkit-wraper .zcat-table-body-content-wraper{\n  background-color: transparent;\n  padding: 0;\n  width: 44px;\n  /* right: -5.8px;\n  position: relative; */\n}\nlyte-tr lyte-td{\n  height: 44px;\n  padding: 2px 14px;\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  background: var(--zcat-table-bg-row);\n}\nlyte-tr lyte-td{\n  border-bottom: 1px solid var(--zcat-table-border-default);\n}\nlyte-tr:last-child lyte-td{\n  border-bottom: 0;\n}\nlyte-tr .table-toolkit-wraper{\n  background-color: transparent;\n}\n/* lyte-tr:first-child lyte-td{\n  border-bottom: 0;\n} */\nlyte-tbody lyte-tr:hover lyte-td{\n  background: var(--zcat-table-bg-rowHover);\n  /* border-bottom: 1px solid var(--zcat-table-border-default); */\n}\n\n/* lyte-table lyte-tr:hover .table-toolkit-wraper .zcat-table-body-content-wraper{\n  opacity: 1;\n} */\n\n.zcat-table-body-content-ellipsis{\n  /* display: -webkit-box;\n  -webkit-line-clamp: 2; /* Show max 2 lines\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: -webkit-fill-available;\n  width: max-content;\n  max-height: 100%;\n  position: relative;\n  cursor: pointer;\n  white-space: pre-wrap;\n  word-break: break-all;\n  text-indent: -4px; */\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  word-break: break-all;\n  overflow-wrap: normal;\n  max-width: -webkit-fill-available;\n  width: max-content;\n  max-height: 100%;\n}\n.zcat-table-body-content{\n  width: 100%;\n}\n.zcat-table-header-checkbox{\n  width: fit-content;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.zcat-stroke-dark1{\n  stroke: var(--zcat-table-icon-primary);\n}\n.zcat-table-header-content{\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  height: 43px;\n}\n.zcat-table-head-moreOptions{\n  width: 44px;\n}\n.zcat-table-toolkit-disabled{\n  cursor: not-allowed;\n}\n.zcat-table-toolkit-disabled lyte-menu-item{\n  pointer-events: none;\n}\n.zcat-table-toolkit-disabled lyte-menu-item.lyteMenuSelection{\n  background: transparent;\n}\n.zcat-table-toolkit-disabled lyte-menu-item p{\n  color: var(--zcat-table-text-disabled);\n}\n.zcat-table-toolkit-disabled lyte-menu-item .zcat-icon-stroke-disabled{\n  stroke: var(--zcat-table-icon-disabled);\n}</style>";;
ZcatTable._dynamicNodes = [{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"zcatProp.style"}}},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"a","p":[1,1,1,3]},{"t":"f","p":[1,1,1,3],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,1]},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"s","p":[1,1,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"s","p":[1,1,1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[3],"cn":"lc_id_0"},{"t":"f","p":[3],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"a","p":[1],"cn":"lc_id_4"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"a","p":[1],"cn":"lc_id_5"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5"],"hc":true,"trans":true,"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true},"lc_id_6":{"dN":[{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_6"},{"t":"cD","p":[1,3],"in":0,"cn":"lc_id_6"}],"cdp":{"t":"a","p":[6]},"dcn":true},"lc_id_7":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_7"}],"cdp":{"t":"a","p":[7]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true},"lc_id_6":{"dc":[1,0],"hc":true,"trans":true},"lc_id_7":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5","lc_id_6","lc_id_7"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,2,0]},{"t":"s","p":[0,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"a","p":[1],"cn":"lc_id_4"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"a","p":[1],"cn":"lc_id_5"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5"],"hc":true,"trans":true,"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true},"lc_id_6":{"dN":[{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_6"},{"t":"cD","p":[1,3],"in":0,"cn":"lc_id_6"}],"cdp":{"t":"a","p":[6]},"dcn":true},"lc_id_7":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_7"}],"cdp":{"t":"a","p":[7]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true},"lc_id_6":{"dc":[1,0],"hc":true,"trans":true},"lc_id_7":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5","lc_id_6","lc_id_7"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"s","p":[0,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,1,2,0]},{"t":"s","p":[0,1,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,2,0]},{"t":"s","p":[0,1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[3],"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,3,1,0]},{"t":"tX","p":[1,1,3,1,2]},{"t":"tX","p":[1,1,3,3,1]},{"t":"a","p":[1,3,1,3]},{"t":"cD","p":[1,3,1,3],"in":2,"sibl":[1]},{"t":"cD","p":[1,3,5,1,1],"in":1,"sibl":[0]},{"t":"tX","p":[1,3,5,3,1]},{"t":"tX","p":[1,3,5,3,3]},{"t":"cD","p":[1,3,5,5,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;

ZcatTable._observedAttributes = [
  "self",
  "zcatProp",
  "activeMenuIndex",
  "checkedList",
  "isAllRowCheckBoxSelect",
  "isNotAllRowChecked",
  "tablePaginationDropdownStyles",
  "tableBtnStyles",
  "tableStatusObj",
  "tableLabelObj",
  "tableLinkButtonObj",
  "tableToggleDetails",
  "tableRadioDetails",
  "tableRadioDetails1",
  "tableRadioDetails2",
  "tableRadioDetails3",
  "tableRadioDetails4",
  "tableRadioDetails5",
  "tableinputObj",
  "tableAvatarDetails"
];



ZcatTable.register("zcat-table", {
  hash: "ZcatTable_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 21600137:
/*!**********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-table.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteTableComponent": () => (/* binding */ LyteTableComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _helpers_helpers_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers-dev.js */ 32124620);
/* harmony import */ var _slyte_component_src_directives_lyte_turbo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@slyte/component/src/directives/lyte-turbo.js */ 60281999);
/* harmony import */ var _mixins_lyte_table_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/lyte-table-utils.js */ 20191488);
/* harmony import */ var _mixins_lyte_table_sortable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/lyte-table-sortable.js */ 95883235);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plugins_lyte_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plugins/lyte-scrollbar.js */ 16206309);
/* harmony import */ var _plugins_lyte_scrollbar_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plugins_lyte_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__);









/* @Slicer.otherframeworkStart */


class LyteTableComponent extends (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.includeMixins)([_mixins_lyte_table_utils_js__WEBPACK_IMPORTED_MODULE_2__.LyteTableUtilsMixin, _mixins_lyte_table_sortable_js__WEBPACK_IMPORTED_MODULE_3__.LyteTableSortableMixin], _component_js__WEBPACK_IMPORTED_MODULE_4__.Component) {
    constructor() {
        super();
        this._lyteUtilFunctions = [ "scrollTable", "updateCollapse", "toggleRows", /*"resetScrollbar",*/ "setValue", "removeRow", "ScrollToRecord", "insertRow"/*, "reset"*/ ];
    }

    init() {
        var uA = navigator.userAgent,
        cb = "beforeRender",
        __this = this,
        $node = __this.$node,
        __window = window,
        add = "addEventListener",
        ns = '_tableResize';
        
        __this._dir = window._lyteUiUtils.getRTL();
        __this.isIE11Lyte = /rv:11/ig.test( uA );
        __this.isEdgeLyte = /Edge/ig.test( uA );
        __this._browser = __this.isIE11Lyte || __this.isEdgeLyte || uA.match( 'Safari' );

        /**
         * @method beforeRender
         * @version 1.0.1
         */

        __this.getMethods( cb ) && __this.executeMethod( cb, $node );

        /**
         * @utility scrollTable
         * @version 1.0.4
         */

        $node.scrollTable = function( x, y ){
            var scrollElem = ( __this.scrollDiv = __this.scrollDiv || $node.querySelector( 'div.lyteTableScroll' ) ),
            undef = void 0,
            evt = new Event( 'scroll', { bubbles: true } );

            if( x != undef ){
                scrollElem.scrollLeft = x;
            }

            if( y != undef ){
                scrollElem.scrollTop = y;
            }

            evt._byFunc = true;
            scrollElem.dispatchEvent( evt );

            if( !__this.__from_collapse ){
                __this.update_collapse( true );
            }
        }
        /**
         * @utility updateCollapse
         * @version 3.92.0
         */
        $node.updateCollapse = __this.update_collapse.bind( __this );

        if( !__window[ ns ] ){
            __window[ ns ] = true;

            var fn = window.resizeTable;

            __window[ add ]( 'resize', fn, true );
            __window[ add ]( 'orientationchange', fn, true );
        }

        /**
         * @utility toggleRows
         * @version 1.0.3
         */

         $node.toggleRows = function( val ){
            var name = val ? 'remove' : "add",
            __tags = this.ltProp('tags');

            Array.from( this.querySelectorAll( __tags.tbody + ' ' + __tags.tr + '.lytePreventInfiniteScroll' ) ).forEach( function( item ){
                item.classList[ name ]( 'lyteHidden' );
            });
         }

        //  /**
        //   * @utility resetScrollbar
        //   * @condition ltPropPreventScrollbar false
        //   * @version 3.107.0
        //   */

         $node.resetScrollbar = function(event){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( this.scrollDiv ).resetScrollbar();
         }.bind(this)

         if( __this.data.ltPropCellIntersection ){
            this.reset_visible();
         }

        //  if( !__this.data.ltPropStickyTable ){
            this.__columns = [];
        //  }
    }

    rtlfunc(lft, bcr, ww) {
        if( this._dir && lft != 'top' && lft != 'clientY' ){
            if( bcr ){
                if( lft == 'right' ){
                    return ww - bcr.left;
                } else if( lft == 'clientX' ){
                    return ww - bcr[ lft ];
                }
                return ww - bcr.right;
            } else if( lft == 'left' ){
                return 'right';
            } else if( lft == "right" ){
                return "left";
            }
        }
        return bcr ? bcr[ lft ] : lft;
    }

    didDestroy() {
        var __this = this,
        __data = __this.data,
        scrolldiv = __this.scrollDiv,
        $node = __this.$node,
        _window = window,
        iso = __this._intersectionObs;

        if( _window._tableResize && document.body.getElementsByTagName( 'lyte-table' ).length == 0 ){
            var rel = "removeEventListener";

            _window[ rel ]( 'resize', window.resizeTable, true );
            _window[ rel ]( 'orientationchange', window.resizeTable, true );

            delete _window._tableResize;
        }

        if( __data.ltPropNavigation ){
           window._lyteUiUtils.tableNavigation( $node.getElementsByTagName( __data.ltPropTags.table )[ 0 ], 'unbind' );
        }

        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.clear( this.__collpse_fdom );
        delete this.__collpse_fdom;

        if( iso ){
            __this._setmeasure && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.clear( __this._setmeasure );
            iso.disconnect();

            delete __this.reset;
            delete __this._intersectionObs;
            delete __this._intersections;
        }

        if( __data.ltPropCellIntersection ){
            var ins = this.__cell_inter;
            
            if( ins ){
                ins.disconnect();
                delete this.__cell_inter;
            }
        }

        !__data.ltPropPreventScrollbar && scrolldiv && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( scrolldiv ).removeScroll();

        delete __this.scrollDiv; delete __this._dummy; delete __this._dummy1; delete __this.resizeComponent; delete __this.targetElem; delete __this._dummyTr;
        delete $node.setValue; delete $node.scrollTable;
        delete __this.__columns;
    }

    resize_key(evt) {
        var key = evt.key,
        x_fact = 0,
        target = evt.target,
        is_selection,
        __fn = function(){
            switch( key ){
                case "ArrowLeft" : {
                    x_fact = -1;
                }
                break;
                case "ArrowRight" : {
                    x_fact = 1;
                }
                break;
                case " " : 
                case "Enter" : {
                    is_selection = "select";
                }
                break;
                case "Escape" : {
                    is_selection = "unselect";
                }
                break;
            }
        };

        switch( target.tagName ){
            case "LYTE-TABLEHEAD-RESIZE" : {
                __fn();
    
                if( x_fact ){
                    var __this = evt.target,
                    table = this,
                    __bcr = __this.getBoundingClientRect(),
                    __mid = __bcr.left + __bcr.width / 2;
                   
                    if( !_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __this ).hasClass( "lyteTableFixed" ) ){
                        this.component.tableResize( { target : __this, clientX : __mid, clientY : 0 } )
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.measure( function(){
                            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.mutate( function(){
                                window.requestAnimationFrame( function(){
                                    table.component.resize_fun( { manual : true, clientX : __mid + x_fact * 10, clientY : 0 } );
                                    window.requestAnimationFrame( function(){
                                        window.requestAnimationFrame( function(){
                                            table.component.resize_up( {} );
                                        });
                                    });
                                });
                            });
                        });
                    } else{
                        x_fact = 0;
                    }
                }
            }
            break;
            case "LYTE-TH" : {
                __fn();
                
                var table_selection_cls = "lyteTableCellSelected",
                // as of now without selecting the cell interchange is possible
                is_cell_selected =  true || 0,
                unselect_cell = function(){
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( target.parentNode ).children().removeClass( table_selection_cls ).attr("aria-selected", "false");
                },
                select_cell = function( target ){
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( target ).addClass( table_selection_cls ).attr( "aria-selected", "true" );
                },
                comp = this.component;

                if( x_fact && is_cell_selected && comp.data.ltPropColumnSortable ){
                    var __row = target.parentNode,
                    cells = Array.from( __row.children )
                    __index = cells.indexOf( target ),
                    __next_index = __index + x_fact,
                    next_cell = cells[ __next_index ];

                    if( !next_cell ){
                        evt.stopPropagation();
                        return;
                    }

                    var bcr1 = target.getBoundingClientRect(),
                    bcr2 = next_cell.getBoundingClientRect(),
                    __mdown = "sortableColumns",
                    __mmove = "sortableMouseMove",
                    __mup = "sortableMouseup",
                    __obj = { target : next_cell, clientX : bcr2.left + bcr2.width / 2 };

                    if( comp.getData( 'ltPropStickyTable' ) ){
                        __mdown = "sortablemousedown";
                        __mmove = "sortmousemove";
                        __mup = "sortmouseup";
                    }

                    comp[ __mdown ]( { button : 0, target : target, clientX : bcr1.left + bcr1.width / 2 });
                    comp[ __mmove ]( __obj );
                    window.requestAnimationFrame( function(){
                        window.requestAnimationFrame( function(){
                            comp[ __mup ]( __obj );
                            select_cell( _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __row.children[ __next_index ] ).focus().attr( "aria-label", "Cell index : " + __next_index ).attr( comp.data.ltPropCellAria ) ); 
                        });
                    });
                    evt.stopPropagation();
                } else {
                    x_fact = 0;
                }

                switch( is_selection ){
                    case "select" : {
                        unselect_cell();
                        if( !is_cell_selected ){
                            select_cell( target );
                        }
                        x_fact = 1;
                    }
                    break;
                    case "unselect" : {
                        unselect_cell();
                        x_fact = 1;
                    }
                    break;
                }
            }
            break;
        }

        x_fact && evt.preventDefault();
        
    }

    didConnect() {
        var __data = this.data,
        ltPropInfiniteScroll = __data.ltPropInfiniteScroll, 
        secData = __data.secondaryData,
        // ltPropResize = __data.ltPropResize,
        $node = this.$node,
        __tags = __data.ltPropTags;

        // if( __data.ltPropYield && (ltPropResize.vertical || ltPropResize.horizontal)) {
        //     this.resizeComponentAppend();
        // }
        try {
            var scrollDiv = $node.querySelector('div.lyteTableScroll');
            // scrollDiv._overlay = scrollDiv.getElementsByTagName( 'lyte-overlaydiv' )[ 0 ];
            this.scrollDiv = scrollDiv;
            scrollDiv.comp = this;
            scrollDiv._infiniteScroll = ltPropInfiniteScroll;
            if ( !__data.ltPropPreventScrollbar && (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().prototype.scroll) ) {
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()(scrollDiv).scroll( __data.ltPropScrollbarOption);
                var scrollbar = $node.querySelector('.lyteScrollContainer.lyteScrollContainerY');
                var header = $node.getElementsByTagName( __tags.th )[ 0 ], hgt;
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.measure(function () {
                    var fg = this._dir;
                    // while applying scroll plugin vertical scrollbar needs some offset for enabling the virtual of only body part is scrolling. If it is zero we have to set height of the header as offset
                    if (header && scrollbar && scrollbar.offsetTop == 0) {
                        // hgt = header.getBoundingClientRect().height;
                        hgt = header.offsetHeight;
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.mutate(function () {
                            scrollbar.style.top = hgt + 'px';
                            $node.style.setProperty( '--lyte-listview-header-row-height', hgt + "px" );
                            if (fg) {
                                $node.classList.add('lyteRTL')
                            }
                        }.bind(this))
                    }
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.mutate(function () {
                        __data.ltPropDualResize && $node.classList.add('lyteDualResize')
                        if (this.getMethods('afterRender')) {
                            this.executeMethod('afterRender', this.$node);
                        }
                    }.bind(this))
                }.bind(this))
            } else {

                if( this.data.fromListView ){
                    // temp code. Merge both cases

                    var header = $node.getElementsByTagName( __tags.th )[ 0 ], 
                    hgt;
                    
                    header && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.measure(function () {
                        hgt = header.offsetHeight;
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.mutate(function () {
                            $node.style.setProperty( '--lyte-listview-header-row-height', hgt + "px" );
                        });
                    });
                }

                if (this.getMethods('afterRender')) {
                    /**
                     * @method afterRender
                     * @version 1.0.1
                     */
                    this.executeMethod('afterRender', this.$node);
                }
            }
        } catch (err) {
        }
        if (ltPropInfiniteScroll) {
            $node.classList.add('infinitescroll')
            /**
             * @utility setValue
             * @condition ltPropInfiniteScroll true
             * @version 1.0.2
             */
            $node.setValue = function (ret) {
                // if (this._stopScroll) {
                    this.appendAddData1.call(this, ret)
                // }
            }.bind(this)

            /**
             * @utility removeRow
             * @condition ltPropInfiniteScroll true
             * @version 2.2.17
             */

            $node.removeRow = function (row) {
                this.removeRow(row);
            }.bind(this);

            /**
             * @utility scrollToRecord
             * @condition ltPropInfiniteScroll true
             * @version 2.2.19
             */

            $node.scrollToRecord = this.scrollToRecord.bind(this);

            /**
             * @utility insertRow
             * @condition ltPropInfiniteScroll true
             * @version 2.2.19
             */

            $node.insertRow = this.insertRow.bind(this);

            // /**
            //  * @utility reset
            //  * @condition ltPropStickyTable true
            //  */
        }

        if( __data.ltPropNavigation ){
            window._lyteUiUtils.tableNavigation( $node.getElementsByTagName( __tags.table )[ 0 ] );
        }

        if( __data.ltPropRole ){
            this.$node.addEventListener( "keydown", this.resize_key, true );
        }

        if( __data.ltPropCellIntersection ){
            var scroll_elem = __data.ltPropScrollElement;
            this.__cell_inter = new IntersectionObserver( this.cell_intersection.bind( this ), { threshold : [ 0.01 ], root : scroll_elem ? document[  window._lyteUiUtils.isWidget ? "querySelectorGlobal" : 'querySelector' ]( scroll_elem ) : this.scrollDiv } );

            this.$node.removeCellIntersection = this.removeCellInter.bind( this );
        }

        if( __data.ltPropResizeFixedColumn ){
            this.$node.classList.add( 'lyteTableEnableResize' );
        }
    }

    // width calculation for positioning
    columnWidth(fixedColumn, i, j) {

        var width = 0;
        j = j || 0;

        for( ; j < i; j++ ){
            width += fixedColumn[ j ].property.width;
        }

        return width;
    }

    heightCalc(rows, upper, hgtLimit) {
        var hgt = 0, j = upper;
        for( ; j > 0; j-- ){
            hgt += rows[ j ];
            if( hgtLimit < hgt ){
                break;
            }
        }
        return [ hgt, j ];
    }

    topElem(elem) {
        var __final;

        if( this.isIE11Lyte || this.isEdgeLyte ){
            __final = elem.getElementsByTagName( this.data.ltPropTags.td )[ 0 ];
        } else {
            __final = elem;
        }
        return __final ? __final.getBoundingClientRect() : {};
    }

    cellSet(elem, value) {
        var __elem;
        if( this.isIE11Lyte || this.isEdgeLyte ){
            __elem = Array.from( elem.getElementsByTagName( this.data.ltPropTags.td ) );
        } else {
           __elem = [ elem ];
        }

        if( value ){
            __elem.forEach( function( item ){
                item.style.transform = value;
            });
        }
        return __elem[ 0 ].style.transform;
    }

    scrollTable(event, obj) {
        // fastdom has been removed here due to delay causes error in calculation of data in ie edge safari
        var b = event.yScroll, 
        __tags = this.data.ltPropTags,
        ltPropData = this.getData('ltPropData'), 
        ltPropContent = this.getData('ltPropContent'), 
        scrollDiv = this.scrollDiv, 
        divClientRect = obj.tbodyClient, 
        tableClient = obj.$nodeClient, 
        table = this.$node.querySelector( __tags.table ),
        head = this.$node.getElementsByTagName( __tags.th )[ 0 ], 
        neglected = obj.neglected, 
        compNeg = obj.compNeg;
        head = head ? (head.property ? head.property.height : head.getBoundingClientRect().height) : 0;
        var topElem = obj.topElem, 
        top1 = obj.topElemClient;

        this.$node.classList.add('lyteTableScrolling');

        clearTimeout( this._scrollTable );
        this._scrollTable = setTimeout( function(){
            this.$node.classList.remove('lyteTableScrolling');
        }.bind(this), 40 );

        if (table.style.height.indexOf('px') == -1) {
            table.style.height = divClientRect.height + 'px';
            this._rowHgt = parseInt(top1.height * 10) / 10;
            this._step = parseInt((divClientRect.height - this._rowHgt * neglected.length) * 10) / 10;
        }
        if( !this._dummy ){
            this.createDummy( obj.tbody );
        }
        if (b == undefined && !scrollDiv.classList.contains('eventBinded')) {
            var prevScroll = parseFloat(this._dummy.style.transform.match(/[\d|.]+/ig)[0]),
                currScroll = scrollDiv.scrollTop
            if (currScroll > prevScroll) {
                b = 1
            } else {
                b = -1
            }
        }

        var __boundary = this._boundary,
        __dummy = this._dummy.style,
        __dummy1 = ( this._dummy1 || {} ).style,
        __rowHgt = this._rowHgt;

        var calculateHeight = function(){
            __dummy.height = ( (ltPropContent.length - 1 - __boundary.bottom) * this._rowHgt ) + "px";
            __dummy.transform = 'translateY(' + ( __boundary.top * this._rowHgt ) + 'px)'
        }.bind(this);

        if (b > 0) {
            if (parseFloat(tableClient.top + head) >= parseFloat(top1.bottom)) {
                if( __boundary.bottom <= ltPropContent.length - 2 ) {
                    var diff = parseInt( Math.max((tableClient.top + head - top1.bottom) / __rowHgt , 1) );
                    if( __boundary.bottom + diff > ltPropContent.length - 1) {
                        diff = ltPropContent.length - 1 - __boundary.bottom
                    }
                    for (var i = 0; i < diff; i++) {
                        __boundary.bottom += 1;
                        if (i >= diff - ltPropData.length) {
                            this.$component.set(ltPropData[this._top], { body: ltPropContent[__boundary.bottom], index: __boundary.bottom })
                            topElem.dataOrder = __boundary.bottom;
                        }
                        __boundary.top = __boundary.bottom - ltPropData.length + 1;
                        if (this.cellSet(topElem)) {
                            this.regex(topElem)
                        } else {
                            this.cellSet(topElem, "translateY(" + (this._step) + 'px)')
                        }
                        __dummy.transform = 'translateY(' + (parseFloat( __dummy.transform.match(/[\d|.]+/ig)[0]) + __rowHgt ) + 'px)'
                        __dummy.height = Math.max(parseFloat( __dummy.height) - __rowHgt, 0) + 'px';
                        if (this._browser) {
                            __dummy1.transform = 'translateY(' + (parseFloat( __dummy1.transform.match(/[\d|.]+/ig)[0]) + __rowHgt ) + 'px)'
                        }
                        this._bottom = this._top;
                        this._top = (this._top + 1) % ltPropData.length;
                        if ( __boundary.bottom >= ltPropContent.length) {
                            __boundary.bottom = ltPropContent.length - 1;
                            this._top = (this._top + 1) % ltPropData.length;
                            break
                        }
                        topElem = this.nthoftype.call(this, obj.tbody, this._top + compNeg.length, true)
                    }
                }else if(__boundary.bottom == ltPropContent.length - 1 ){
                    this.scrollEndMethod1();
                    calculateHeight();       
                } else {
                    this.scrollEndMethod1();
                }
            }else{
                calculateHeight();
            }

        } else if (b < 0) {
            var bottmElem = obj.bottmElem, bottom = obj.bottmElemClient;
            if (tableClient.bottom <= bottom.top) {
                var mat = this.cellSet(bottmElem).match(/[\d|.]+/ig);
                
                if (!mat || (mat && mat[0] == '0')) {
                    if( obj.scrollTop == 0 ){
                        return this.scrollStartMethod(event);
                    }
                    return;
                }

                var diff = parseInt(Math.max(parseFloat((bottom.top - tableClient.bottom) / __rowHgt ), 0)),
                    minDiff = Math.max(diff - 1 - this._boundary.top, 0)
                for (var i = diff - 1; i >= 0 && diff != 0; i--) {
                    if ( __boundary.top == 0) {
                        break;
                    }
                    __boundary.top -= 1;
                    if (i <= ltPropData.length - 1 + minDiff) {
                        this.$component.set(ltPropData[this._bottom], { body: ltPropContent[ __boundary.top], index: __boundary.top })
                        bottmElem.dataOrder = __boundary.top;
                    }
                    __boundary.bottom = __boundary.top + ltPropData.length - 1;
                    if (this.cellSet(bottmElem)) {
                        this.regex(bottmElem, true)
                    }
                    __dummy.height = (parseFloat( __dummy.height) + __rowHgt ) + 'px';
                    __dummy.transform = 'translateY(' + (parseFloat( __dummy.transform.match(/[\d|.]+/ig)[0]) - __rowHgt ) + 'px)'
                    if (this._browser) {
                        __dummy1.transform = 'translateY(' + (parseFloat( __dummy1.transform.match(/[\d|.]+/ig)[0]) - __rowHgt ) + 'px)'
                    }
                    this._top = this._bottom;
                    this._bottom = (ltPropData.length + this._bottom - 1) % ltPropData.length;
                    if (__boundary.top == -1) {
                        __boundary.top = 0;
                        __boundary.bottom = __boundary.top + ltPropData.length - 1;
                        break
                    }
                    bottmElem = this.nthoftype.call(this, obj.tbody, this._bottom + compNeg.length, true)
                }

                if( obj.scrollTop == 0 ){
                    this.scrollStartMethod(event);
                }

            }
        }
    }

    createDummy(tbody) {
        var dummy = document.createElement( this.data.ltPropTags.tr );
        dummy.classList.add('dummy');
        tbody.appendChild(dummy)
        dummy.setAttribute('style', 'transform:translateY(0px);height:0px')
        this._dummy = dummy;
        if (this._browser) {
            var dummy1 = document.createElement('div');
            dummy1.classList.add('dummy');
            this.scrollDiv.appendChild(dummy1)
            dummy1.setAttribute('style', 'transform:translateY(0px);height:5px')
            this._dummy1 = dummy1;
        }
    }

    regex(elem, flag) {
        if( this.isIE11Lyte || this.isEdgeLyte ){
            var cells = elem.getElementsByTagName( this.data.ltPropTags.td ),
            __length = cells.length;

            for( var i = 0; i < __length; i++ ){
                this.regex1( cells[ i ], flag );
            }
        } else {
            this.regex1( elem, flag );
        }
    }

    regex1(elem, flag) {
        var __style = elem.style,
        __transform = __style.transform,
        rgx = /[\d|.]+/ig,
        __step = this._step;

        if( flag ) {
            __style.transform = __transform.replace( rgx, function( arg ) { return Math.max( parseFloat( arg ) - __step, 0 ).toFixed( 3 ) });
        } else {
            __style.transform = __transform.replace( rgx, function( arg ) { return ( parseFloat( arg ) + __step ).toFixed( 3 ) });
        }
    }

    scrollStartMethod(evt, frmScrollBar) {
        if( this._boundary.top === 0 ){
            if( this._stopScrollStart ){
                return;
            }

            this._stopScrollStart = true;
            if( this.getMethods( 'scrollStart' ) ){
                ret = this.executeMethod( 'scrollStart', evt, this.$node );

                var concat = function(arr){

                    arrayUtils( this.getData( 'ltPropContent' ), 'insertAt', 0, arr );

                    this.$node.scrollToRecord( arr.length );
                    this.$node.resetScrollbar();
                    delete this._stopScrollStart;
                }

                if (ret) {
                    if (ret.then) {
                        Promise.resolve(ret).then(function (arg) {
                            if (arg) {
                                concat.call(this, arg);
                            }
                        }.bind(this), function () {
                            console.log( 'error at scroll start promise' );
                        }.bind(this));
                    } else {
                        concat.call(this, ret);
                    }
                }
            }
        }
    }

    scrollEndMethod1() {
        if( this._stopScroll ) {
            return
        }
        this._stopScroll = true;
        if (this.getMethods('scrollEnd')) {
            /**
             * @method scrollEnd
             * @version 1.0.0
             */
            this.appendAddData1(this.executeMethod('scrollEnd'))
        }
    }

    appendAddData1(ret) {
        if (ret) {
            if (ret.then) {
                Promise.resolve(ret).then(function (arg) {
                    if (arg) {
                        this.apd1.call(this, arg);
                    }
                }.bind(this), function () {
                    console.log( 'error at scroll end promise' );
                }.bind(this));
            } else {
                this.apd1.call(this, ret)
            }
        }
    }

    apd1(ret) {
        var __data = this.data,
        ltPropContent = __data.ltPropContent, 
        ltPropData = __data.ltPropData,
        La = this.$addon.arrayUtils;

        this._prevent = true
        if( ret.constructor == Array ){
            La( ltPropContent, 'concat', ret );
        } else if( ret.constructor == Object ) {
            La( ltPropContent, 'push', ret );
        }
        delete this._prevent;
        delete this._stopScroll;
    }

    nthoftype(tbody, index, fg) {
        var arr = [],
        rows = tbody.getElementsByTagName( this.data.ltPropTags.tr );

        if( fg ){
            return rows[ index ];
        }

        var __length = rows.length;

        for( var i = 0; i < __length; i++ ) {
            var __cur = rows[ i ];
            if( !__cur.classList.contains('dummy')) {
                arr.push( this.get_children( __cur )[ index ] );
            }
        }
        return arr;
    }

    scroll(event) {

        // cant use fastdom because of jerk in ie edge safari browser
        var component = this.comp,
            // headerList =component.$node.querySelectorAll( 'lyte-th' ),
            // scrollleft and top are required for process like fixing columns and infinite scroll. If scroll is dispatched by plugin event object contains these properties or it is calculated
        obj = this._wheelObj || { bcr: {} };

        if( component.__ignore_scroll && component.__allow_scroll !== true ){
            return;
        }

        this._scrollLeft = obj.scrollLeft != undefined ? obj.scrollLeft : this.scrollLeft;
        this._scrollTop = obj.scrollTop != undefined ? obj.scrollTop : this.scrollTop;
        
        var direction = this._direction,
        __is_not_sticky = !component.data.ltPropStickyTable;

        __is_not_sticky && component.scrollCheck.call(this, event, obj);

        if (this._scrollLeft == 0 && direction != 'rtl' && component.getData('ltPropInfiniteScroll')) {
            var ary = component.__columns;
            component.$addon.arrayUtils(ary, 'remove', 0, ary.length);
            
            if( __is_not_sticky ){
                var fixedd = this.getElementsByClassName( 'lyteTableFixed' ),
                __length = fixedd.length;

                for( var i = 0; i < __length; i++ ) {
                    var __cur = fixedd[ i ];

                    __cur.style.left = '0px';
                    __cur.classList.remove('lyteTableFixed');
                }
            }
        }
        if (component.data.ltPropInfiniteScroll) {
            component.scrollTable.call(component, event, obj)
        }
        delete this._scrollLeft; delete this._scrollTop;
    }

    // fixed column checks and removals
    scrollCheck(event, obj) {
        var component = this.parentElement.component,
        __tags = component.data.ltPropTags,
        table = this.getElementsByTagName( __tags.table )[0], scrollDiv = this,
            scrollTop = this._scrollTop, scrollLeft = this._scrollLeft,
            scrollDir = component.getData('ltPropScroll'),
            direction = this._direction,
            tbody = table.getElementsByTagName( __tags.tbody )[0],
            thead = this.getElementsByTagName( __tags.thead )[0],
            ths = [],
            headerList = [],
            fixedColumn = [];

        if (thead) {
            ths = thead.getElementsByTagName( __tags.th );
        }

        if ((scrollTop != this.prevScollTop || event._byFunc) && scrollDir.vertical) {
            var colsNos = ths;
            if (colsNos.length) {
                for (var i = 0; i < colsNos.length; i++) {
                    colsNos[i].classList.add('tableRowFixed')
                    // colsNos[i].style.top = (scrollTop) + 'px';
                    component.transform(true, colsNos[i], scrollTop)
                }
                if (!scrollTop) {
                    for (var i = 0; i < colsNos.length; i++) {
                        colsNos[i].classList.remove('tableRowFixed');
                    }
                }
            }
        }
        // for horizontal scroll    
        if ((scrollLeft != this.prevScollLeft || event._byFunc) && scrollDir.horizontal) {
            var columns = component.__columns, head = [];
            if (thead) {
                var headRows = Array.apply(Array, thead.getElementsByTagName( __tags.tr )),
                    headRowCopy = Array.apply(Array, thead.getElementsByClassName('lyteRowCopy'));
                head = headRows.concat(headRowCopy);
            }

            var ltPropFixedColumnClass = component.data.ltPropFixedColumnClass || '';
            if (head.length) {
                headerList = head[0].getElementsByTagName( __tags.th );
                for (var n = 0; n < headerList.length; n++) {
                    headerList[n].classList.contains('lyteFixedColumn') && fixedColumn.push(headerList[n]);
                }
            }
            // fastdom removed due to jerk in ie edge chrome browser
            for (var i = columns.length; i < fixedColumn.length; i++) {
                if (((fixedColumn[i].property.right + component.columnWidth.call(component, fixedColumn, i) > (obj.scrollDivClient.bcr.right)) && direction == 'rtl') || ((fixedColumn[i].property.left < (obj.scrollDivClient.bcr.left + component.columnWidth.call(component, fixedColumn, i))) && direction != 'rtl')) {
                    var width = fixedColumn[i].property.width
                    var order = fixedColumn[i].order
                    if (order + 1 < headerList.length) {
                        !fixedColumn[i].classList.contains('lyteTableFixed') && fixedColumn[i].classList.add('lyteTableFixed')
                        columns.push(fixedColumn[i])
                        for (var zz = 1; zz < head.length; zz++) {
                            var colex = head[zz].getElementsByTagName( __tags.th )[order];
                            colex && !colex.classList.contains('lyteTableFixed') && colex.classList.add('lyteTableFixed')
                        }
                        var colls = /*component.isIE11Lyte ? */component.nthoftype.call(component, tbody, order) /*: this.querySelectorAll( 'lyte-tbody lyte-td:nth-of-type(' + (order + 1) + ')' )*/
                        for (var k = 0; k < colls.length; k++) {
                            !colls[k].classList.contains('lyteTableFixed') && colls[k].classList.add('lyteTableFixed')
                            if (ltPropFixedColumnClass) {
                                colls[k].classList.add(ltPropFixedColumnClass)
                            }
                        }
                    }
                }
            }
            for (var n = columns.length - 1; n >= 0; n--) {
                var j = columns.length - 1;
                if ((scrollLeft == 0 && !(window.chrome && direction == 'rtl')) || ((((parseFloat((headerList[columns[j].order + 1].property.right + columns[j].property.width + component.columnWidth.call(component, columns, columns.length - 1)).toFixed(2)) <= parseFloat(obj.scrollDivClient.bcr.right.toFixed(2))) || (headerList[columns[j].order + 1].property.right + 2 < columns[j].property.left)) && direction == 'rtl') || ((headerList[columns[j].order + 1].property.left >= (obj.scrollDivClient.bcr.left + columns[j].property.width + component.columnWidth.call(component, columns, columns.length - 1))) && (columns[j].property.left >= (obj.scrollDivClient.bcr.left + component.columnWidth.call(component, fixedColumn, columns.length - 1))) && direction != 'rtl'))) {
                    // var innerElem = headerList[columns[j].order].querySelector( 'lyte-th-data' );
                    headerList[columns[j].order].classList.contains('lyteTableFixed') && headerList[columns[j].order].classList.remove('lyteTableFixed');
                    if (ltPropFixedColumnClass) {
                        headerList[columns[j].order].classList.remove(ltPropFixedColumnClass)
                    }
                    // columns[j].style.removeProperty('left');
                    component.transform(false, columns[j], 0)
                    for (var zz = 0; zz < head.length; zz++) {
                        var colex = head[zz].getElementsByTagName( __tags.th )[columns[j].order];
                        if (colex) {
                            colex.classList.contains('lyteTableFixed') && colex.classList.remove('lyteTableFixed');
                            // colex.style.removeProperty('left');
                            component.transform(false, colex, 0)

                        }
                    }
                    var currCols = /*component.isIE11Lyte ?*/ component.nthoftype.call(component, tbody, columns[j].order) /*: this.querySelectorAll( 'lyte-tbody lyte-td:nth-of-type(' + (columns[j].order + 1) + ')' )*/;
                    for (var z = 0; z < currCols.length; z++) {
                        // currCols[z].style.removeProperty('left');
                        component.transform(false, currCols[z], 0)
                        currCols[z].classList.contains('lyteTableFixed') && currCols[z].classList.remove('lyteTableFixed')
                        if (ltPropFixedColumnClass) {
                            currCols[z].classList.remove(ltPropFixedColumnClass)
                        }
                    }
                    component.$addon.arrayUtils(columns, 'removeAt', j)
                }
                else {
                    break;
                }
            }
            for (var j = 0; j < columns.length; j++) {
                //positioning on scroll
                var left, cells = /*component.isIE11Lyte ? */component.nthoftype.call(component, tbody, columns[j].order) /*: this.querySelectorAll( 'lyte-tbody lyte-td:nth-of-type(' + (columns[j].order + 1) + ')' )*/,
                    uA = window.navigator.userAgent.toLowerCase();
                if (j == 0) {
                    if (direction == 'rtl') {
                        if (uA.indexOf('firefox') != -1 || (uA.indexOf('safari') != -1 && (window._lyteUiUtils.isNegativeScroll() || (!(uA.indexOf('chrome') != -1) && !(uA.indexOf('chromium') != -1))))) {
                            left = scrollLeft + (component.columnWidth.call(component, headerList, columns[j].order, 0))
                        }
                        else if (uA.indexOf('edge') != -1 || uA.indexOf('trident') != -1 || uA.indexOf('msie') != -1) {
                            left = -scrollLeft + (component.columnWidth.call(component, headerList, columns[j].order, 0))
                        }
                        else {
                            left = scrollLeft - 1 - (obj.scrollWidth) + obj.scrollDivClient.bcr.width + (component.columnWidth.call(component, headerList, columns[j].order, 0))
                        }
                    }
                    else {
                        left = scrollLeft - (component.columnWidth.call(component, headerList, columns[j].order, 0))
                    }
                }
                else {
                    if (direction == 'rtl') {
                        if (uA.indexOf('firefox') != -1 || (uA.indexOf('safari') != -1 && (window._lyteUiUtils.isNegativeScroll() || (!(uA.indexOf('chrome') != -1) && !(uA.indexOf('chromium') != -1))))) {
                            left = /*parseInt(columns[j - 1].style.left)*/ component.transform(!1, columns[j - 1]) + component.columnWidth.call(component, headerList, columns[j].order, columns[j - 1].order + 1)
                        }
                        else {
                            left = /*parseInt(columns[j - 1].style.left)*/ component.transform(!1, columns[j - 1]) + component.columnWidth.call(component, headerList, columns[j].order, columns[j - 1].order + 1);
                        }
                    }
                    else {
                        left = component.transform(!1, columns[j - 1]) /*parseInt(columns[j - 1].style.left)*/ - component.columnWidth.call(component, headerList, columns[j].order, columns[j - 1].order + 1)
                    }
                }
                for (var x = 0; x < cells.length; x++) {
                    !cells[x].classList.contains('lyteTableFixed') && cells[x].classList.add('lyteTableFixed');
                    //cells[x].style.left = left + 'px';
                    component.transform(false, cells[x], left)
                }
                // columns[j].style.left = left + 'px';
                component.transform(false, columns[j], left)
                for (var zz = 0; zz < head.length; zz++) {
                    var colex = head[zz].getElementsByTagName( __tags.th )[columns[j].order];
                    if (colex) {
                        !colex.classList.contains('lyteTableFixed') && colex.classList.add('lyteTableFixed');
                        // colex.style.left = left + 'px';
                        component.transform(false, colex, left)
                    }
                }
            }
        }
        this.prevScollLeft = scrollLeft;
        this.prevScollTop = scrollTop;
    }

    transform(flag, elem, value) {
        var transform = (elem.style.transform || 'translateX(0px) translateY(0px)'),
            transX = parseFloat(/translateX\((.+)/.exec(transform)[1]),
            transY = parseFloat(/translateY\((.+)/.exec(transform)[1]);

        if (value != undefined) {
            if (!flag) {
                elem.style.transform = "translateY(" + transY + 'px) ' + 'translateX(' + value + 'px)';
            } else {
                elem.style.transform = "translateY(" + value + 'px) ' + 'translateX(' + transX + 'px)';
            }
        } else {
            return parseFloat(flag ? transY : transX);
        }
    }

    borderChange() {
        if (this.data.ltPropBorder) {
            this.$node.classList.add('border');
        }
        else {
            this.$node.classList.remove('border');
        }
    }

    widthObs() {
        this.$node.querySelector( this.data.ltPropTags.table ).style.width = this.data.ltPropWidth;
    }

    heightObs() {
        this.$node.querySelector( this.data.ltPropTags.table ).style.height = this.data.ltPropHeight;
    }

    sortable() {
        var row = this.$node.getElementsByTagName( this.data.ltPropTags.thead )[ 0 ];
        if( row ){
            var ns = "remove";

            if( this.data.ltPropColumnSortable ){
                this.colSort = this.sortableColumns.bind( this );
                ns = "add";
            }

            if( ns ){
                var rel = ns + "EventListener",
                fn = this.colSort;

                row[ rel ]( "mousedown", fn );
                row[ rel ]( "touchstart", fn );
                row.parentNode.classList[ ns ]( 'sortableTable' );
            }
        }
    }

    composePath(event) {
        var arr = [], 
        __target = event.target,
        node = __target.correspondingElement || __target;
        while( node && node.tagName != 'HTML' ){
            arr.push( node );
            node = node.parentNode;
        }
        return arr;
    }

    sortableColumns(event) {
        var __tags = this.data.ltPropTags,
        target = event.target.closest( __tags.th + ':not(.lyteTableFixed)' ) || this.closestFind.call(this, event.path ? event.path : this.composePath.call(this, event), __tags.th + ':not(.lyteTableFixed)');
        if (target && this.$node.contains(target)) {
            var ret, isTch = event.type == "touchstart";
            if (this.getMethods('onBeforeSelect')) {
                /**
                 * @method onBeforeSelect
                 * @version 1.0.3
                 */
                ret = this.executeMethod('onBeforeSelect', target, event, this.$node)
            }
            if (ret != false) {
                var evt = isTch ? event.touches[0] : event
                this._ww = window.innerWidth;
                this.offLeft = this.rtlfunc.call(this, 'clientX', evt, this._ww) - this.rtlfunc.call(this, 'left', target.getBoundingClientRect(), this._ww);
                this.colHead = target;
                this._thisBccr = this.$node.getBoundingClientRect()
                target.classList.add('lyteStickyTableColumnSortSelect')
                if( event.type ){
                    var is_shadow = ( document != window.document ),
                    origin_elem = is_shadow ? document : document.documentElement,
                    ns = "addEventListener" + ( is_shadow ? "Global" : "" );

                    this.mousemove = this.sortableMouseMove.bind(this);
                    origin_elem[ ns ](isTch ? "touchmove" : 'mousemove', this.mousemove);
                    this.mouseup = this.sortableMouseup.bind(this);
                    origin_elem[ ns ](isTch ? "touchend" : 'mouseup', this.mouseup);
                    event.preventDefault();
                }
                this.flag = true;
                if (this.getMethods('onSelect')) {
                    /**
                     * @method onSelect
                     * @version 1.0.3
                     */
                    this.executeMethod('onSelect', target, event, this.$node)
                }
            }
        }
    }

    horiScroll(dummyDiv, ww) {
        var lt = this.rtlfunc.call(this, 'left'), IE = this.isIE11Lyte || this.isEdgeLyte,
            isEvt, check1, check2,
            scroll_amount = dummyDiv.manual ? 10 : 2;

        if (/mousemove|touchmove/i.test(dummyDiv.type) || dummyDiv.hasOwnProperty( "clientX" ) ) {
            isEvt = true;
        }
        if (isEvt) {
            if (this._reqId) {
                return;
            }

            var __bcr = this.__bcr;

            check1 = this.rtlfunc( 'clientX', dummyDiv, ww ) > Math.min( this.rtlfunc( 'right', __bcr, ww), ww - 2 );
            check2 = this.rtlfunc( 'clientX', dummyDiv, ww ) <= Math.max( 0, this.rtlfunc('left', __bcr, window.innerWidth ) );
        } else {
            check1 = (parseFloat(dummyDiv.style[lt]) - this._xxoff + parseFloat(dummyDiv.style.width)) >= this.rtlfunc('right', this._thisBccr, ww) - 1;
            check2 = (parseFloat(dummyDiv.style[lt]) - this._xxoff + parseFloat(dummyDiv.style.width)) >= this.rtlfunc('left', this._thisBccr, ww) - 1;
        }

        if (check1) {
            this.scrollDiv.scrollLeft += scroll_amount * (this._dir ? (-1 * (IE ? -1 : 1)) : 1)
            if (isEvt) {
                var __value = scroll_amount * ( this._dir ? -1 : 1 );
                this.__clientX -= __value;

                if( this.data.ltPropFixResizeCursor ){
                    this.__trans_value += __value
                }
            }
            this._reqId = window.requestAnimationFrame(function () {
                delete this._reqId;
                this.horiScroll(dummyDiv, ww)
            }.bind(this))
        } else if (check2) {
            if (isEvt) {
                var __value =  scroll_amount * ( this._dir ? -1 : 1 );
                this.__clientX += __value;
                
                if( this.data.ltPropFixResizeCursor ){
                    this.__trans_value -= __value
                }
            }
            this.scrollDiv.scrollLeft -= scroll_amount * (this._dir ? (-1 * (IE ? -1 : 1)) : 1)
            this._reqId = window.requestAnimationFrame(function () {
                delete this._reqId;
                this.horiScroll(dummyDiv, ww);
            }.bind(this))
        } else {
            window.cancelAnimationFrame(this._reqId);
            delete this._prevent;
        }
    }

    sortableMouseMove(event) {
        var isTch = event.type == "touchmove", evt = event;
        if (isTch && evt.touches.length != 1) {
            return
        } else if (isTch) {
            evt = evt.touches[0]
        }
        if (this.flag && this._timeout == undefined) {
            var target = this.colHead, xscroll;
            var clientRect = target.getBoundingClientRect();
            var div = document.createElement('div');
            div.classList.add('lyteTableSortHelper');
            div.innerText = this.colHead.innerText;
            this._xxoff = xscroll = (window.pageXOffset || document.documentElement.scrollLeft) * (this._dir ? -1 : 1);
            var yscroll = window.pageYOffset || document.documentElement.scrollTop
            div.style.height = clientRect.height + 'px';
            div.style.width = clientRect.width + 'px';
            div.style[this.rtlfunc.call(this, 'left')] = (xscroll + this.rtlfunc.call(this, 'left', clientRect, this._ww)) + 'px';
            div.style.top = (yscroll + clientRect.top) + 'px';
           
            if( event.type ){
                this._timeout = setTimeout(function () {
                    window._lyteUiUtils.appendChild( document.body, div );
                    this.flag = false;
                }.bind(this), 100);
            } else {
                div.style.opacity = 0;
                div.manual = true;
                window._lyteUiUtils.appendChild( document.body, div );
                this.flag = false;
            }
        }
        var dummyDiv = document.querySelector('div.lyteTableSortHelper')
        if (dummyDiv) {
            var lft = this._dir ? "right" : "left", ww = window.innerWidth;
            var newLeft = Math.max(Math.min((this.rtlfunc.call(this, 'clientX', evt, this._ww) - this.offLeft), this.rtlfunc.call(this, 'right', this._thisBccr, this._ww) - parseFloat(dummyDiv.style.width)), this.rtlfunc.call(this, 'left', this._thisBccr, this._ww));
            // if( ( newLeft > parseFloat( dummyDiv.style[ lft ] - this._xxoff ) ) || ( newLeft < parseFloat( dummyDiv.style[ lft ] ) - this._xxoff ) ){
            if ((parseFloat(newLeft) > this.rtlfunc('left', this._thisBccr, ww)) && ((parseFloat(newLeft) + parseFloat(dummyDiv.style.width)) < this.rtlfunc('right', this._thisBccr, ww))) {
                window.cancelAnimationFrame(this._reqId);
                delete this._prevent; delete this._scrollDir
            }
            if (this._prevent) {
                return
            }
            dummyDiv.style[lft] = (newLeft + this._xxoff) + 'px';
            
            this._prevent = true
            this.horiScroll(dummyDiv, ww);

            if (this.getMethods('onDrag')) {
                /**
                 * @method onDrag
                 * @version 1.0.3
                 */
                this.executeMethod('onDrag', this.colHead, dummyDiv, event, this.$node)
            }
        }
        if( event.type ){
            event.preventDefault();
            event.stopPropagation();
        }
    }

    check_prev_col(current_col, adjCol, dummyDiv) {
        var __prev = current_col.previousElementSibling,
        __next = current_col.nextElementSibling,
        cur_bcr = ( dummyDiv || current_col ).getBoundingClientRect(),
        is_fit = function( cell ){
            if( !cell ){
                return
            }
            var __bcr = cell.getBoundingClientRect();
            return __bcr.left >= cur_bcr.left && __bcr.right <= cur_bcr.right;
        };

        if( is_fit( __prev ) ){
            adjCol = __prev;
        } else if( is_fit( __next ) ){
            adjCol = __next;
        }

        return adjCol;
    }

    sortableMouseup(event) {
        var having_role = this.data.ltPropRole;

        if (!this.flag) {
            var __tags = this.data.ltPropTags,
            isTch = event.type == "touchend", dummyDiv = document.getElementsByClassName('lyteTableSortHelper')[0], clientRect = dummyDiv.getBoundingClientRect(), x = clientRect.left + clientRect.width / 2 + 2, y = clientRect.top + clientRect.height / 2,
                adjCol = this.closestFind.call(this, document.elementsFromPoint ? document.elementsFromPoint(x, y) : this.elementsFromPointCal.call(this, x, y), __tags.th + ':not(.lyteTableFixed)'),
                tbody = this.$node.getElementsByTagName( __tags.tbody )[0],
                current_col = this.colHead;
            
            if( dummyDiv && adjCol == current_col ){
                adjCol = this.check_prev_col( current_col, adjCol, dummyDiv );
            }    

            if (adjCol != this.colHead && adjCol) {
                var Heads = this.colHead.parentElement.getElementsByTagName( __tags.th ),
                    colOrder = Array.prototype.indexOf.call(Heads, this.colHead),
                    adjOrder = Array.prototype.indexOf.call(Heads, adjCol),
                    ltPropHeader = this.data.ltPropHeader, ret;
                if (this.getMethods('onBeforeDrop')) {
                    /**
                     * @method onBeforeDrop
                     * @version 1.0.3
                     */
                    ret = this.executeMethod('onBeforeDrop', this.colHead, adjCol, colOrder, adjOrder, ltPropHeader, event, this.$node)
                }
                if (ret != false) {
                    if (!ltPropHeader.length) {
                        var colGrp = /*this.isIE11Lyte ? */this.nthoftype.call(this, tbody, colOrder) /*: this.$node.querySelectorAll( 'lyte-tbody lyte-td:nth-of-type(' + ( colOrder + 1) +')' )*/;
                        var AdjColGrp = /*this.isIE11Lyte ?*/ this.nthoftype.call(this, tbody, adjOrder) /*: this.$node.querySelectorAll( 'lyte-tbody lyte-td:nth-of-type(' + ( adjOrder + 1) +')' )*/;

                        var __replace_dom = function( __adjColGrp, __colGrp ){
                            var __next_sib = __adjColGrp.nextElementSibling;

                            if( __next_sib ){
                                window._lyteUiUtils.insertBefore( adjOrder > colOrder ? __next_sib :__adjColGrp, __colGrp );
                            } else {
                                window._lyteUiUtils.insertAfter( __adjColGrp, __colGrp );
                            }
                        };

                        __replace_dom( adjCol, this.colHead );

                        for (var i = 0; i < colGrp.length; i++) {
                            __replace_dom( AdjColGrp[ i ], colGrp[ i ] );
                        }

                        having_role && this.colHead.focus();
                    }
                    else {
                        var flag = adjOrder > colOrder ? true : false;
                        var temp = this.$addon.arrayUtils(ltPropHeader, 'removeAt', colOrder), newOrder = Array.prototype.indexOf.call(adjCol.parentElement.getElementsByTagName( __tags.th ), adjCol);
                        this.$addon.arrayUtils(ltPropHeader, 'insertAt', colOrder < adjOrder ? (newOrder + 1) : newOrder, temp);
                        var newCol = adjCol.parentElement.getElementsByTagName( __tags.th, adjCol.parentElement)[colOrder < adjOrder ? (newOrder + 1) : newOrder];
                        if (adjCol.classList.contains('tableRowFixed')) {
                            newCol.classList.add('tableRowFixed');
                            newCol.style.top = adjCol.style.top;
                        }

                        if( having_role ){
                            newCol.focus();
                        }
                    }
                    if (this.getMethods('onDrop')) {
                        /**
                         * @method onDrop
                         * @version 1.0.3
                         */
                        this.executeMethod('onDrop', this.colHead, adjCol, colOrder, adjOrder, ltPropHeader, event, this.$node)
                    }
                }
            } else {
                having_role && this.colHead.focus();
                this.getMethods( 'onRelease' ) && this.executeMethod( 'onRelease', this.colHead, event, this.$node );
            }
            dummyDiv.remove();
        } else {
            clearTimeout(this._timeout)
            having_role && this.colHead.focus();
        }

        var is_shadow = ( document != window.document ),
        origin_elem = is_shadow ? document : document.documentElement,
        ns = "removeEventListener" + ( is_shadow ? "Global" : "" );

        origin_elem[ ns ](isTch ? "touchend" : 'mouseup', this.mouseup);
        origin_elem[ ns ](isTch ? "touchmove" : 'mousemove', this.mousemove);

        this.colHead.classList.remove('lyteStickyTableColumnSortSelect')
        window.cancelAnimationFrame(this._reqId)
        delete this.mouseup; delete this._xxoff;
        delete this.mousemove;
        delete this.offLeft;
        delete this.colHead;
        delete this.flag;
        delete this._timeout;
        delete this._thisBccr; delete this._ww;
        delete this._reqId; delete this._prevent; delete this._scrollDir
        
        if( event.type ){
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    }

    elementsFromPointCal(x, y) {
        var arr = [], element = document.elementFromPoint(x, y);
        while (element != document && element != document.documentElement && element != document.body && element != this.$node) {
            element.style.pointerEvents = 'none';
            arr.push(element);
            element = document.elementFromPoint(x, y);
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.pointerEvents = 'initial';
        }
        return arr;
    }

    // resizeComponentAppendObs: function () {
    //     if (this.data.ltPropYield) {
    //         this.resizeComponentAppend.call(this);
    //     }
    // }.observes('ltPropResize', 'ltPropResize.{}'),

    // resizeComponentAppend: function () {
    //     var ltPropResize = this.data.ltPropResize, scrdiv = this.$node.getElementsByTagName('lyte-table-structure')[0],
    //         tRz = scrdiv.getElementsByTagName('lyte-table-resize')[0], vrz = scrdiv.getElementsByTagName('lyte-table-vertical-resize')[0],
    //         hrz = scrdiv.getElementsByTagName('lyte-table-horizontal-resize')[0];
    //     if (ltPropResize.vertical || ltPropResize.horizontal) {
    //         if (!tRz) {
    //             var comp = document.createElement('lyte-table-resize')
    //             scrdiv.appendChild(comp)
    //             comp.addEventListener('mousedown', this.actions.tableResize.bind(this));
    //             comp.addEventListener('touchstart', this.actions.tableResize.bind(this));
    //         }
    //     } else if (tRz) {
    //         scrdiv.removeChild(tRz)
    //     }
    //     if (ltPropResize.vertical) {
    //         if (!vrz) {
    //             var comp = document.createElement('lyte-table-vertical-resize')
    //             scrdiv.appendChild(comp)
    //             comp.addEventListener('mousedown', this.actions.tableResize.bind(this))
    //             comp.addEventListener('touchstart', this.actions.tableResize.bind(this));
    //         }
    //     }
    //     else if (vrz) {
    //         scrdiv.removeChild(vrz)
    //     }
    //     if (ltPropResize.horizontal) {
    //         if (!hrz) {
    //             var comp = document.createElement('lyte-table-horizontal-resize')
    //             scrdiv.appendChild(comp)
    //             comp.addEventListener('mousedown', this.actions.tableResize.bind(this))
    //             comp.addEventListener('touchstart', this.actions.tableResize.bind(this));
    //         }
    //     }
    //     else if (hrz) {
    //         scrdiv.removeChild(hrz)
    //     }
    // },

    data(arg1) {
        
        var default_values = window._lyteUiUtils.getDefault( 'lyte-table' );

        return Object.assign(super.data({
            //user data
            /**
             * @componentProperty {object[]} ltPropContent
             * @version 1.0.0
             * @condition ltPropYield false
             * @default []
             */
            ltPropContent: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("array", { "default": [] }),
            /**
             * @componentProperty {object[]} ltPropHeader
             * @version 1.0.0
             * @default []
             */
            ltPropHeader: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("array", { "default": [] }),
            /**
             * @componentProperty {string} ltPropId=''
             * @condition ltPropYield false
             * @version 1.0.0
             */
            ltPropId: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("string", { "default": '' }),
            /**
             * @componentProperty {string} ltPropClass=''
             * @condition ltPropYield false
             * @version 1.0.0
             */
            ltPropClass: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("string", { "default": default_values.class || '' }),
            /**
             * @componentProperty {boolean} ltPropBorder=false
             * @version 1.0.0
             */
            ltPropBorder: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("boolean", { "default": default_values.border || false }),
            /**
             * @componentProperty {string} ltPropHeaderLabelKey=''
             * @condition ltPropYield false
             * @version 1.0.0
             */
            ltPropHeaderLabelKey: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("string", { "default": '' }),
            /**
             * @componentProperty {string} ltPropBodyLabelKey=''
             * @condition ltPropYield false
             * @version 1.0.0
             */
            ltPropBodyLabelKey: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("string", { "default": '' }),
            /**
             * @componentProperty {string} ltPropWidth=100%
             * @version 1.0.0
             */
            ltPropWidth: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { 'default': default_values.width || '100%' }),
            /**
             * @componentProperty {string} ltPropHeight=100%
             * @version 1.0.0
             */
            ltPropHeight: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { 'default': default_values.height || '100%' }),
            /**
             * @typedef {object} tableResize
             * @property {boolean} horizontal
             * @property {boolean} vertical
             */

            /**
             * @componentProperty {tableResize} ltPropResize
             * @version 1.0.0
             * @default {}
             */
            ltPropResize: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { 'default': default_values.resize || {} }),
            /**
             * @componentProperty {string} ltPropFixedColumnClass=''
             * @condition ltPropStickyTable false
             * @version 1.0.0
             */
            ltPropFixedColumnClass: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { 'default': default_values.fixedColumnClass || '' }),
            /**
             * @componentProperty {boolean} ltPropYield=false
             * @version 1.0.0
             */
            ltPropYield: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { 'default': default_values.yield || false }),
            /**
             * @typedef {object} tableScroll
             * @property {boolean} horizontal=true
             * @property {boolean} vertical=true
             */
            /**
             * @componentProperty {tableScroll} ltPropScroll
             * @default {"horizontal":true,"vertical":true}
             */
            ltPropScroll: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { 'default': default_values.scroll || { horizontal: true, vertical: true } }),
            /**
             * @componentProperty {boolean} ltPropColumnSortable=false
             * @version 1.0.0
             */
            ltPropColumnSortable: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { 'default': default_values.columnSortable || false }),
            /**
             * @typedef {object} tableScrollbar
             * @property {left | right} verticalPosition=left
             * @property {top | bottom} horizontalPosition=bottom
             * @property {string} containerClass
             * @property {string} handlerClass
             * @property {string} horizontalContainerClass
             * @property {string} horizontalHandlerClass
             * @property {string} verticalContainerClass
             * @property {string} verticalHandlerClass
             * @property {boolean} preventVertical
             * @property {boolean} preventHorizontal
             * @property {number} keyStep=30
             * @property {hover | always | scroll} showOn=scroll
             * @property {number} wheelSpeed=1
             * @property {boolean} preventOnEnd=true
             * @property {object} offset={"x":0,"y":0}
             * @property {boolean} nested
             * @property {number} max=Infinity
             * @property {number} min=-Infinity
             */
            /**
             * @componentProperty {tableScrollbar} ltPropScrollbarOption
             * @condition ltPropPreventScrollbar false
             * @version 1.0.0
             * @default {}
             */
            ltPropScrollbarOption: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { 'default': default_values.scrollbarOption || {} }),
            /**
             * @componentProperty {boolean} ltPropDualResize=false
             * @version 1.0.5
             */
            ltPropDualResize: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { default: default_values.dualResize || false }),

            // scroll table test data
            /**
             * @experimental ltPropData
             */
            ltPropData: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)("array", { "default": [] }),
            /**
             * @componentProperty {boolean} ltPropInfiniteScroll=false
             * @condition ltPropStickyTable false
             * @version 1.0.0
             */
            ltPropInfiniteScroll: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { 'default': default_values.infiniteScroll || false }),
            /**
             * @componentProperty {string} ltPropCellHeight=20px
             * @condition ltPropYield false
             * @condition ltPropInfiniteScroll true
             * @version 1.0.2
             */
            ltPropCellHeight: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { default: default_values.cellHeight || '20px' }),
            /**
             * @componentProperty {number} ltPropContentLength
             * @condition ltPropInfiniteScroll true
             * @version 1.0.2
             */
            ltPropContentLength: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('number', { default_values : default_values.contentLength || void 0 }),
            /**
             * @componentProperty {boolean} ltPropPreventScrollbar=false
             * @condition ltPropStickyTable false
             * @version 1.0.0
             */
            ltPropPreventScrollbar: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { default: default_values.preventScrollbar || false }),

            /**
             * @componentProperty {string} ltPropRole=""
             * @version 3.45.0
             */

            ltPropRole : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'string', { default : default_values.role || "" } ),

            // sticky table props
            /**
             * @componentProperty {boolean} ltPropStickyTable=false
             * @condition ltPropInfiniteScroll false
             * @version 3.53.0
             */
            ltPropStickyTable : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : default_values.stickyTable || false } ),
            /**
             * @componentProperty {number} ltPropScrollStep=2
             * @condition ltPropColumnSortable true
             * @condition ltPropStickyTable true
             * @version 3.53.0
             */
            ltPropScrollStep : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'number', { default : default_values.scrollStep || 2 } ),
            /**
             * @componentProperty {boolean} ltPropPreventTableModify=true
             * @condition ltPropColumnSortable true
             * @condition ltPropStickyTable true
             * @version 3.53.0
             */
            ltPropPreventTableModify : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : default_values.preventTableModify == false ? false : true } ),
            /**
             * @componentProperty {string} ltPropSortDummyColumnClass=""
             * @condition ltPropStickyTable true
             * @condition ltPropColumnSortable true
             * @version 3.53.0
             */
            ltPropSortDummyColumnClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'string', { default : default_values.sortDummyColumnClass || "" } ),

            /**
             * @componentProperty {boolean} ltPropNavigation=false
             * @version 3.51.2
             */
            ltPropNavigation : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : default_values.navigation || false } ),

            /**
             * @componentProperty {boolean} ltPropReset=false
             * @condition ltPropInfiniteScroll true
             * @version 3.53.0
             */

            ltPropReset : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : false } ),
            /**
             * @typedef {object} tableTags
             * @property {string} table="lyte-table-structure"
             * @property {string} thead="lyte-thead"
             * @property {string} tbody="lyte-tbody"
             * @property {string} tr="lyte-tr"
             * @property {string} td="lyte-td"
             * @property {string} th="lyte-th"
             */

            /**
             * @componentProperty {tableTags} ltPropTags
             * @condition ltPropYield true
             * @version 3.91.0 
             */

            ltPropTags : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object', { default : default_values.tags || { table : "lyte-table-structure", thead : "lyte-thead", tbody : "lyte-tbody", td : "lyte-td", th : "lyte-th", tr : "lyte-tr" } } ),

            ltPropSortable : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean' , { default : default_values.sortable || false }),

            ltPropContainment : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string' , { default : default_values.containment || '' }),

            lyteUnbound: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean', { default: false }),

            ltPropFromListview : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('boolean' , {default : false} ),
            /**
             * @componentProperty {boolean} ltPropFixResizeCursor=false
             * @version 3.95.0
             */

            ltPropFixResizeCursor : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : default_values.fixResizeCursor || false } ),
            /**
             * @typedef {object} resizeAria
             * @property {string} role="button"
             * @property {string} "aria-live"="polite"
             */

            /**
             * @componentProperty {resizeAria} ltPropResizeAria={}
             * @version 3.103.0
             */

            ltPropResizeAria : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object', { default : default_values.resizeAria || { "role" : "button", "aria-live" : "assertive" } } ),
            /**
             * @typedef {object} cellAria
             * @property {string} "aria-live"="polite"
             */

            /**
             * @componentProperty {cellAria} ltPropCellAria={}
             * @version 3.103.0
             */
            ltPropCellAria : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object', { default : default_values.cellAria || { "aria-live" : "assertive" } }  ),

            ltPropCellIntersection : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : false } ),
            ltPropScrollElement : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'string' ),
            ltPropSanitizer : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object', { default : { force : false } } ),
            ltPropResizeFixedColumn : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : false } ),

            ltPropCustomCopy : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : false } ),

            // system data
            minWidth1: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { 'default': '' }),
            minWidth2: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('string', { 'default': '' }),
            secondaryData: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { 'default': [] }),
            boundary: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('object', { 'default': {} }),
            rowHeights: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { 'default': [] }),
            columns: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { 'default': [] }),
            nonFixedColumn: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)('array', { 'default': [] }),
            fromListView : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'boolean', { default : false } ),

            visibleStatus : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object', { default : {} } ),
            fixedColumnLength : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'number', { default : 0 } ),
            fixedColumnStatus : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_7__.prop)( 'object' )
        }), arg1);
    }

    resize_fun(evt) {
        var isTch = evt.type == "touchstart",
        __evt = evt,
        touches = evt.touches;

        if( isTch ){
            if( touches.length > 1 ){
                return;
            }
            __evt = touches[ 0 ];
        }

        evt.type && evt.preventDefault();

        var __this = this,
        __bcr = __this.__bcr,
        __elem = __this.__elem,
        x_inc = ( __this.__clientX - ( __this.__clientX = __evt.clientX ) ) * ( __this._dir ? -1 : 1 ),
        y_inc = __this.__clientY - ( __this.__clientY = __evt.clientY ),
        original_x_inc = x_inc,
        __min1 = __this.__min1,
        __min2 = __this.__min2,
        __max1 = __this.__max1,
        __max2 = __this.__max2,
        __width = parseFloat( __elem.style.width ),
        new_width = __width - x_inc,
        new_height,
        __next = __elem.nextElementSibling,
        new_width2,
        cb = "onResizeMove",
        table = __this.__table,
        __resize = __this.data.ltPropResize,
        __dir = __this.__dir,
        is_hgt_modify = /vert|both/i.test( __dir || '' ),
        $node = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __this.$node ),
        preventHoriScroll = false;

        if( __dir ){
            if( !__resize.horizontal ){
                x_inc = 0;
            }

            if( !__resize.vertical ){
                y_inc = 0;
            }
        }

        if( __max1 && new_width > __max1 ){
            x_inc = __max1 - __width;
        } else if( __min1 && new_width < __min1 ){
            x_inc = __width - __min1;
        }

        if( this.data.ltPropResizeFixedColumn ){
            let totalLengh = this.data.fixedColumnLength;
            let tableOffsetWidth = this.$node.offsetWidth;
            
            if( !((totalLengh + 100 - x_inc) < tableOffsetWidth) ){ // exceed the 100px limit
                preventHoriScroll = true;
                x_inc = totalLengh - (tableOffsetWidth - 100) ;
            }
        }

        if( !is_hgt_modify && __min2 != void 0 ){
            var __width2 = parseFloat( __next.style.width ),

            new_width2 = __width2 + x_inc;

            if( __max2 && new_width2 > __max2 ){
                x_inc = __width2 - __max2;
            } else if( __min2 && new_width2 < __min2 ){
                x_inc = __min2 - __width2;
            }

            new_width2 = __width2 + x_inc;
        } else {
            __next = void 0;
        }

        if( is_hgt_modify ){
            var __height = parseFloat( __elem.style.height );
            new_height = __height - y_inc;

            if( __max2 && new_height > __max2 ){
                y_inc = __max1 - __height;
            } else if( __min2 && new_height < __min2 ){
                y_inc = __height - __min2;
            }

            new_height = __height - y_inc;
        }

        if( original_x_inc && __this.data.ltPropFixResizeCursor && /lyte-th/i.test( __elem.tagName ) ){
            var __diff = original_x_inc - x_inc,
            trans_value = __this.__trans_value;

            if( __diff ){
                __this.__trans_value += __diff;
            } else if( trans_value ) {
                if( ( trans_value > 0 && x_inc < 0 ) || ( trans_value < 0 &&  x_inc > 0 ) ){
                    if( __next ){
                        new_width2 -= x_inc;
                    }

                    if( Math.abs( trans_value ) < Math.abs( x_inc ) ){
                        x_inc += trans_value;
                        __this.__trans_value = 0;
                    } else {
                        __this.__trans_value += x_inc;
                        x_inc = 0;
                    }
                }
            }
        }

        new_width = __width - x_inc;
        this.data.fixedColumnLength = this.data.fixedColumnLength - x_inc;

        if( table ){
           _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( table ).css( 'width', ( parseFloat( table.style.width ) - x_inc ) + 'px' );

        } 

        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem ).css( 'width', new_width + 'px' );
        __next && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __next ).css( 'width', new_width2 + 'px' );

        if( __dir ){
            var ret = $node.css( 'maxWidth', new_width + 'px' );
            if( new_height ){
                ret.css( 'maxHeight', new_height + 'px' );
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem ).css( 'height', new_height + 'px' );
            }
        }

        window.cancelAnimationFrame( __this._reqId );
        delete __this._reqId;

        !preventHoriScroll && __this.horiScroll( evt, __this.__ww );

        __this.data.ltPropStickyTable && __this._setLeftForInterSection();

        if( this.data.ltPropRole ){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem.getElementsByTagName( "lyte-tablehead-resize" ) ).attr( "aria-label", "Width : " + new_width );
        }

        __this.getMethods( cb ) && __this.executeMethod( cb, __elem, evt, __this.$node );
    }

    resize_up(evt) {
        var isTch = evt.touches,
        __doc = document,
        __fn = 'removeEventListener',
        cb = 'onResizeEnd',
        __elem = this.__elem;

        if( window._lyteUiUtils.isWidget ){
            __fn += "Global";
        }

        if( evt.type ){
            __doc[ __fn ]( isTch ? 'touchmove' : 'mousemove', this.__mmove, true );
            __doc[ __fn ]( isTch ? 'touchend' : 'mouseup', this.__mup, true );
        }

        [ '__dir', '__ww', '__min2', '__min1', '__max1', '__max2', '__clientX', '__clientY', '__elem', '__bcr', '__table' ].forEach( function( item ){
            delete this[ item ];
        }.bind( this ) );

        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( this.$node ).removeClass( 'resizing lyteTableResizing' );
        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem ).removeClass( 'resizeSelect lyteTableResizeSelect' );

        this.clearfdm();

        /**
         * @method onResizeEnd
         * @version 1.0.3
         */

        this.getMethods( cb ) && this.executeMethod( cb, __elem, this.$node, evt );
    }

    tableResize(evt, from) {
        var isTch = evt.type == "touchstart",
        __evt = evt,
        touches = evt.touches;

        if( isTch ){
            if( touches.length > 1 ){
                return
            }
            __evt = touches[ 0 ];
        }

        var  __this = this,
        __data = __this.data,
        __tags = __data.ltPropTags,
        table = __this.$node.getElementsByTagName( __tags.table )[ 0 ],
        __elem = from ? table : evt.target.parentNode,
        cb = "onBeforeResizeSelect";

        if( __this.getMethods( cb ) && __this.executeMethod( cb, __elem, evt, __this.$node ) == false ){
            return;
        }

        var tag = __elem.tagName,
        is_dual = __data.ltPropDualResize,
        fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom),
        __maxwidth = table.style.maxWidth,
        __minWidth = table.style.minWidth,
        __maxheight = table.style.maxHeight,
        __layout = table.style.tableLayout,
        $table = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( table ),
        __width = __elem.offsetWidth,
        is_cell = tag.toLowerCase() == __tags.th,
        nextelem = is_cell ? __elem.nextElementSibling : void 0,
        __next_width = nextelem ? nextelem.offsetWidth : 0,
        table_width = table.offsetWidth,
        scroll_elem = __this.scrollDiv,
        sL = scroll_elem.scrollLeft,
        is_vert = /vert|both/i.test( from || '' ),
        inline_hgt = table.style.height,
        table_height = is_vert ? ( /px$/i.test( inline_hgt ) ? inline_hgt : ( table.offsetHeight + 'px' ) ) : inline_hgt,
        $$node = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __this.$node ),
        table_style = window.getComputedStyle( table ),
        is_fixed = table_style.tableLayout == "fixed",
        read_value = table_style.getPropertyValue( 'max-width' ),
        max_width_read = is_cell || (  /px/i.test( read_value ) ? parseFloat( read_value ) : Infinity );

        __this.__ignore_scroll = true;

        __this.__bcr = __this.$node.getBoundingClientRect();
        __this.__ww = window.innerWidth;
        __this.__dir = from;

        __this.__trans_value = 0;

        if( is_cell && /%|px/i.test( table_style.minWidth ) ){
            var __arr = [];

            Array.from( __this.get_children( __elem.parentNode ) ).forEach( function( item ){
                __arr.push({
                    node : item,
                    width : item.style.width || ( item.offsetWidth + 'px' )
                });
            });

            __arr.forEach( function( item ){
                item.node.style.width = item.width;
            });
        }

        $table.css( {
            maxWidth :  '0px',
            tableLayout : "auto",
            minWidth : "auto"
        });

        if( is_vert ){
            $table.css( 'maxHeight', '0px' );
        }

        $$node.addClass( 'lyteTableInitialResize' );

        __this.__fd1 = fastdom.measure( function(){
            var __style = window.getComputedStyle( __elem ),
            actual_min = parseFloat( __style.getPropertyValue( 'min-width' ) ),
            minWidth1 = Math.min( __width, Math.max( __elem.offsetWidth, actual_min ) ),
            maxWidth1 = is_cell ? parseFloat( __style.getPropertyValue( 'max-width' ) ) : max_width_read,
            minWidth2,
            maxWidth2;

            __this.data.fixedColumnLength = 0;

            if( __this.data.ltPropResizeFixedColumn ){
                Array.from( _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()(table).find( __tags.thead ).find('.lyteFixedColumn') ).forEach( function( item ){
                    __this.data.fixedColumnLength += ( item.style.width ? (parseInt( item.style.width )) : item.offsetWidth);
                } )
            }

            if( minWidth1 == 0 ){
                minWidth1 = 50;
            }

            if( is_cell && is_fixed ){
                minWidth1 = Math.min( minWidth1, actual_min );
            }

            if( maxWidth1 < minWidth1 ){
                maxWidth1 = minWidth1;
            }

            if( is_cell ){
                if( !is_dual ){
                    if( nextelem ){
                        var next_style = window.getComputedStyle( nextelem ),
                        actual_min_next = parseFloat( next_style.getPropertyValue( 'min-width' ) );

                        minWidth2 = Math.min( __next_width, Math.max( nextelem.offsetWidth, actual_min_next ) );
                        maxWidth2 = parseFloat( next_style.getPropertyValue( 'max-width' ) );

                        if( minWidth2 == 0 ){
                            minWidth2 = 50;
                        }

                        if( is_fixed ){
                            minWidth2 = Math.min( minWidth2, actual_min_next );
                        }

                        if( maxWidth2 < minWidth2 ){
                            maxWidth2 = minWidth2;
                        }
                    }
                } else {
                    __this.__table = table;
                }
            } else if( is_vert ){
                maxWidth2 = parseFloat( __style.getPropertyValue( 'max-height' ) );
                minWidth2 = parseFloat( __style.getPropertyValue( 'min-height' ) );
            }

            __this.__fd2 = fastdom.mutate( function(){
                __this.__min1 = minWidth1;
                __this.__min2 = minWidth2;
                __this.__max1 = maxWidth1;
                __this.__max2 = maxWidth2;

                __this.__clientX = __evt.clientX;
                __this.__clientY = __evt.clientY;

                __this.__elem = __elem;

                $table.css( {
                    maxWidth : __maxwidth,
                    width : table_width + 'px',
                    maxHeight : __maxheight,
                    height : table_height,
                    tableLayout : __layout,
                    minWidth : __minWidth
                });

                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem ).addClass( 'resizeSelect lyteTableResizeSelect' ).css( 'width', __width + 'px' );
                nextelem && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( nextelem ).css( 'width', __next_width + 'px' );

                delete __this.__ignore_scroll;
                scroll_elem.scrollLeft = sL;

                if( evt.type ){
                    var __doc = document,
                    __fn = "addEventListener";

                    if( window._lyteUiUtils.isWidget ){
                        __fn += "Global";
                    }

                    __doc[ __fn ]( isTch ? 'touchmove' : "mousemove", __this.__mmove = __this.resize_fun.bind( __this ), true );
                    __doc[ __fn ]( isTch ? 'touchend' : "mouseup", __this.__mup = __this.resize_up.bind( __this ), true );
                }

                $$node.addClass( 'resizing lyteTableResizing' ).removeClass( 'lyteTableInitialResize' );

                __this.getMethods( cb = "onResizeSelect" ) && __this.executeMethod( cb, __elem, evt, __this.$node );
            });
        });

        if( evt.type ){
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();
        }
    }

    static actions(arg1) {
        return Object.assign(super.actions({

            copy : function( evt ){
                var __util;
                if( this.data.ltPropCustomCopy && ( __util = window._lyteUiUtils.copyTable ) && __util( evt, true ) ){
                    evt.preventDefault();
                }
            },

            keydown : function( evt ){
                var __util,
                uA = navigator.userAgent;
                
                if( this.data.ltPropCustomCopy && ( __util = window._lyteUiUtils.copyTable ) && /firefox/i.test( uA ) && /linux/i.test( uA ) ){
                    var __key = evt.key,
                    mac = /Macintosh/i.test( navigator.userAgent ),
                    is_meta = ( !mac && evt.ctrlKey ) || ( mac && evt.metaKey );

                    if( is_meta && /^(x|c)$/i.test( __key ) && __util( evt, true ) ){
                        evt.preventDefault();
                    }
                }
            },

            tableResize : function( evt, from ){
                this.tableResize( evt, from );
            },

            rowMouseDown : function( evt ){
                if( this.data.ltPropSortable && (evt.button == 0 || (evt.touches && evt.touches.length==1) ) ){      
                    this.rowMouseDown( evt );
                }
            }
            
        }), arg1);
    }

    clearfdm() {
        var __fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom);

        [ '__fd1', '__fd2' ].forEach( function( item ){
            var __cur = this[ item ];

            if( __cur ){
                __fastdom.clear( __cur );
                delete this[ item ];
            }
        }.bind( this ) );
    }

    arrayFrom(nodeList) {
        if (Array.from) {
            return Array.from(nodeList)
        }
        return Array.apply(Array, nodeList);
    }

    closestFind(path, query) {
        // var elements = this.arrayFrom.call(this, document[  window._lyteUiUtils.isWidget ? "querySelectorAllGlobal" : 'querySelectorAll' ](query));
        for (var i = 0; i < path.length; i++) {
            // if (Array.prototype.indexOf.call(elements, path[i]) != -1) {
            //     return path[i];
            // }
            var __cur = path[ i ];
            if( __cur.matches && __cur.matches( query ) ){
                return __cur;
            }
        }
        return null;
    }

    findDomIndex(order) {
        var data = this.data.ltPropData;
        for (var i = 0; i < data.length; i++) {
            if (data[i].index == order) {
                return i;
            }
        }
        return -1;
    }

    insertRow(index, insertData) {
        var boundary = this._boundary,
            top = boundary.top,
            bottom = boundary.bottom,
            content = this.data.ltPropContent,
            data = this.data.ltPropData,
            _contentLength = this.data.ltPropContentLength;

        this._prevent = true;

        this.$addon.arrayUtils(content, 'insertAt', index, insertData);

        if (index <= bottom) {
            var start = Math.max(top, index);

            for (var i = start; i <= bottom; i++) {
                var domIndex = this.findDomIndex(i);
                this.$component.set(data[domIndex], { index: data[domIndex].index, body: content[i] });
            }
        }

        if( this.data.ltPropContentLength > content.length || this.data.ltPropContentLength > data.length ) {
            var _length = data.length;

            this.$addon.arrayUtils( data, 'push', {
                index : _length,
                body : content[ _length ],
                checked : false
            });

            boundary.bottom++;
            this._bottom++;

            if( this._rowHgt ){
                this._step = this._rowHgt * data.length;
            }
        }

        delete this._prevent;
    }

    removeRow(dataIndex) {
        var tags = this.data.ltPropTags,
        rows = this.arrayFrom(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( tags.tbody + ' ' + tags.tr + ':not(.dummy)', this.$node));

        if (dataIndex.constructor != Number) {
            dataIndex = dataIndex.dataOrder || rows.indexOf(dataIndex);
        }

        var domIndex = this.findDomIndex(dataIndex),
            boundary = this._boundary,
            top = boundary.top,
            bottom = boundary.bottom,
            content = this.data.ltPropContent,
            data = this.data.ltPropData,
            removed = false;

        this._prevent = true;

        if (domIndex != -1) {
            if (bottom == content.length - 1) {
                for (var i = dataIndex; i <= bottom; i++) {
                    var cIndex = (domIndex + (i - dataIndex) + data.length) % data.length;
                    if (i + 1 == content.length) {
                        this.regex(rows[cIndex], true);

                        if ( this._dummy ) {
                            var _style = this._dummy.style;
                            _style.transform = 'translateY(' + ( parseFloat( _style.transform.match( /[\d|.]+/ig)[ 0 ] ) - this._rowHgt ) + 'px)';
                            
                            if ( this._dummy1 ) {
                                var _style1 = this._dummy1.style;
                                _style1.transform = 'translateY(' + ( parseFloat( _style1.transform.match( /[\d|.]+/ig)[ 0 ] ) - this._rowHgt ) + 'px)';
                            }
                        }
                        if( content[ top - 1 ] ){
                            this.$component.set(data[cIndex], { index: data[cIndex].index, body: content[top - 1] });
                            rows[ cIndex ].dataOrder = top - 1;
                        }
                    } else {
                        this.$component.set(data[cIndex], { index: data[cIndex].index, body: content[i + 1] });
                        rows[cIndex].dataOrder--;
                    }
                }
                if( content.length - 1 == data.length - 1 ){
                    this.$addon.arrayUtils( data , 'pop' );
                    removed = true;
                    this._bottom = (this._bottom - 1 + data.length) % data.length;
                }else if( boundary.top > dataIndex){
                    boundary.top--;
                } 
                
                if(this._top != 0){
                    this._top = (this._top -1 + data.length) % data.length;
                }
                this._bottom = (this._bottom - 1 + data.length) % data.length;
                boundary.bottom--;
                boundary.top!=0 && boundary.top--;
 
            } else {
                for (var i = dataIndex; i <= bottom; i++) {
                    var cIndex = (domIndex + (i - dataIndex) + data.length) % data.length;
                    this.$component.set(data[cIndex], { index: data[cIndex].index, body: content[i + 1] });
                }
                if (this._dummy) {
                    var _style = this._dummy.style;
                    _style.height = Math.max( 0, parseFloat( _style.height ) - this._rowHgt ) + 'px';
                }
            }
            this.$addon.arrayUtils(content, 'removeAt', dataIndex);
        } else {
            this.$addon.arrayUtils(content, 'removeAt', dataIndex);
            if (dataIndex < top) {

                for (var i = top; i <= bottom; i++) {
                    var cIndex = (this._top + i - top + rows.length) % rows.length;
                    set(data[cIndex], { index: data[cIndex].index, body: content[i == content.length ? (top - 1) : i] });
                    
                    // if (i == bottom) {
                        // this.regex(rows[cIndex], true);
                        // this._bottom = (this._bottom - 1 + data.length) % data.length;
                        // this._top = (this._top - 1 + data.length) % data.length;
                    // }
                }

                // boundary.bottom--;
                // boundary.top--;

                var _style = this._dummy.style;
                _style.transform = 'translateY(' + Math.max( 0, ( parseFloat( _style.transform.match(/[\d|.]+/ig)[ 0 ] ) - this._rowHgt ) ) + 'px)';
                if (this._dummy1) {

                    var _style1 = this._dummy1.style;
                    _style1.transform = 'translateY(' + Math.max( 0, ( parseFloat( _style1.transform.match( /[\d|.]+/ig )[ 0 ] ) - this._rowHgt ) ) + 'px)';
                }

            } else if (dataIndex > bottom) {
                if (this._dummy) {
                    this._dummy.style.height = Math.max(0, parseFloat(this._dummy.style.height) - this._rowHgt) + 'px';
                }
            }

            if( content.length < this.data.ltPropContentLength && !removed ){
                    Lyte.arrayUtils( data, 'pop' );
            }
        }

        delete this._prevent;
    }

    scrollToRecord(rowIndex, isImmediate, scrollTop) {
        var content = this.data.ltPropContent,
            contentLength = content.length;

        this._stopScrollStart = true;

        if (rowIndex == undefined || rowIndex < 0 || rowIndex >= contentLength) {
            return;
        }

        if (!this._rowHgt) {
            this.$node.scrollTable();
        }

        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.clear(this._scrollToRecord);

        isImmediate ? this.processScrollToRecord( rowIndex , scrollTop ) : this._scrollToRecord = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.measure(this.processScrollToRecord.bind(this, rowIndex));

        // this.processScrollToRecord( rowIndex );
    }

    processScrollToRecord(rowIndex, _scrollTop) {
        var boundary = this._boundary,
        top = boundary.top,
        bottom = boundary.bottom,
        content = this.data.ltPropContent,
        data = this.data.ltPropData,
        contentLength = data.length,
        __length = content.length,
        step = this._step,
        rowHeight = this._rowHgt,
        scrollDiv = this.scrollDiv,
        offsetHeight = scrollDiv.offsetHeight,
        scrollHeight = scrollDiv.scrollHeight,
        scrollTop = scrollDiv.scrollTop,
        possible_per_view = Math.floor( offsetHeight / rowHeight ),
        scrollPosition = Math.max(0, Math.min(rowIndex, __length - Math.min( contentLength, possible_per_view ) ) ),
        newScrollTop = scrollPosition * rowHeight,
        scrollToSet,
        __tags = this.data.ltPropTags;

        if( content.length <= contentLength ){
            scrollToSet = Math.max( 0, Math.min( scrollHeight - offsetHeight, rowIndex * rowHeight ) );
        } else if( bottom - possible_per_view >= rowIndex ) {
            scrollToSet = newScrollTop;
        } else {
            if (scrollPosition != rowIndex) {
                newScrollTop += (step - offsetHeight);
                var thead = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __tags.thead, this.$node).get(0);
                if (thead) {
                    newScrollTop += thead.offsetHeight;
                }
            }

            var scrollHeight = scrollDiv.scrollHeight,
            maxScrollTop = scrollHeight - offsetHeight,
            diff = step - offsetHeight,
            rows = this.arrayFrom(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __tags.tbody + ' ' + __tags.tr + ':not(.dummy)', this.$node)),
            fact = Math.floor(scrollPosition / contentLength),
            newscrollPosition = scrollPosition % contentLength;

            for (var i = 0; i < contentLength; i++) {
                var cIndex = scrollPosition + i,
                domIndex = cIndex % contentLength,
                dom = rows[ domIndex ],
                iteration = fact /*+ (i < newscrollPosition ? 1 : 0)*/;

                if( cIndex >= __length ){
                    if( scrollPosition % contentLength < domIndex ){
                        iteration--;
                    }
                    cIndex -= contentLength;
                } else {
                    if( scrollPosition % contentLength > domIndex ){
                        iteration++;
                    }
                }

                this.$component.set(data[domIndex], { index: cIndex, body: content[cIndex] });

                this.cellSet(dom, "translateY(0px)")
                for (var j = 0; j < iteration; j++) {
                    this.regex(dom);
                }
            }

            if( !this._dummy ){
                this.createDummy( this.$node.querySelector( __tags.tbody ) );
            }

            var boundary_top = Math.min( scrollPosition, __length - contentLength );

            this._dummy.style.transform = 'translateY(' + ( boundary_top * rowHeight ) + 'px)';
            if (this._dummy1) {
                this._dummy1.style.transform = 'translateY(' + ( boundary_top * rowHeight) + 'px)';
            }
            scrollToSet = newScrollTop;
            boundary.top = boundary_top;
            boundary.bottom = boundary_top + contentLength - 1;
            this._top = boundary_top % contentLength;
            this._bottom = ( boundary_top + contentLength - 1) % contentLength;
        }

        var scrollFn = function (  ) {
            scrollDiv.querySelector( 'lyte-table-structure' ).style.height = ( contentLength * rowHeight ) + 'px';
            scrollDiv.scrollTop = scrollToSet;

           window.requestAnimationFrame( function(){
                delete this._stopScrollStart;
            }.bind( this ) );
        }.bind( this );
        if( _scrollTop != void 0 ){
            scrollToSet = _scrollTop;
            scrollFn();
        }else{
            window.requestAnimationFrame( scrollFn );
        }

    }

    calculateRowHeight() {
        let tbody = this.$node.getElementsByTagName( this.data.ltPropTags.tbody );
        let tr = tbody[0].children[0];
        let rowHeight = tr && tr.getBoundingClientRect().height;

        return this._rowHgt = rowHeight;
    }

    update_aria(cell) {
        var row = cell.parentNode,
        index = this.get_children( row ).indexOf( cell ),
        table = row.parentNode.parentNode,
        sA = "setAttribute",
        role = "role",
        __tags = this.data.ltPropTags;

        table[ sA ]( role, this.data.ltPropRole );
        
        Array.from( this.get_children( table ) ).forEach( function( item ){

            if( /^div$/i.test( item.tagName || "" ) ){
                return;
            }

            item[ sA ]( role, "rowgroup" );

            var name = item.tagName.toLowerCase() == __tags.thead ? 'columnheader' : 'cell';

            Array.from( this.get_children( item ) ).forEach( function( row ){
                row[ sA ]( role, 'row' );

                var __cell = this.get_children( row )[ index ];

                if( __cell ){
                    __cell[ sA ]( role, name );
                }
            }.bind( this ) );
        }.bind( this ) );
    }

    get_children(__elem) {
        var elems = __elem.length != void 0 ? __elem : [ __elem ],
        ret = [],
        __len = elems.length;

        for( var i = 0; i < __len; i++ ){
            var item = elems[ i ],
            __children = item.children,
            child_len = __children.length;
            
            for( var j = 0; j < child_len; j++ ){
                var __item = __children[ j ];
                if( !/template/i.test( __item.tagName ) ){
                    ret.push( __item );
                }
            }
        }

        return ret;
    }

    get_nth_cell(row, index) {
        var children = this.get_children( row ),
        __len = children.length,
        __count = 0;

        if( this.data.ltPropFromListview ){
            return children[ index ];
        }
        for( var i = 0; i < __len; i++ ){
            var __cell = children[ i ];
            if( __count == index ){
                return __cell;
            } else if( __count > index ){
                break;
            }

            __count += ( __cell.colSpan || 1 );
        }
    }

    update_collapse(frm_update) {
        if( this.__from_collapse ){
            return;
        }
        var cells = Array.from( this.$node.getElementsByClassName( 'lyteHeaderCellCollapsed' ) );
        cells.forEach( function( item ){
            this.toggle_column( item, true, frm_update );
        });
    }

    toggle_column(__cell, to_collapse, frm_update) {
        var __index = Array.from( __cell.parentNode.children ).indexOf( __cell ),
        header_cls = "lyteHeaderCellCollapsed",
        body_cls = "lyteCellCollapsed",
        tbody = this.$node.getElementsByTagName( this.data.ltPropTags.tbody ),
        rows = this.get_children( tbody ),
        __is_sticky = this.data.ltPropStickyTable;

        __cell.classList[ to_collapse ? 'add' : "remove" ]( header_cls );

        rows.forEach( function( item, index ){
            var __elem = this.get_nth_cell( item, __index );

            if( __elem ){
                if( !index ){
                    if( to_collapse ){
                        __elem.rowSpan = rows.length;
                    } else {
                        __elem.rowSpan = 1;
                    }
                    __elem.classList[ to_collapse ? "add" : "remove" ]( "lyteCollapseFirstCell" );
                }

                __elem.classList[ to_collapse ? "add" : "remove" ]( body_cls );
            }
        }.bind( this ) );

        if( !this.__from_collapse && !frm_update && ( __is_sticky || __cell.classList.contains( 'lyteTableFixed' ) ) ){
            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.clear( this.__collpse_fdom );
            this.__from_collapse = true;
            this.__collpse_fdom = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default().fastdom.measure( function(){
                delete this.__collpse_fdom;
                this.$node[ __is_sticky ? "reset" : "scrollTable" ]();
                delete this.__from_collapse;
            }.bind( this ) );
        }
    }

    collapse_column(__cell) {
        this.toggle_column( __cell, true );
    }

    expand_column(__cell) {
        this.toggle_column( __cell );
    }

    bindIntersection(cell) {
        window.requestAnimationFrame( function(){
            var observer =  this.__cell_inter,
            __index = Array.from( cell.parentNode.children ).indexOf( cell ),
            rows = Array.from( cell.parentNode.parentNode.nextElementSibling.children );

            rows.forEach( function( __row ){
                var cell =  __row.children[ __index ];
                cell && observer.observe( cell );
            } );
        }.bind( this ) );
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            initProcess1 : function( arg ){
                var __this = this,
                __data = __this.data,
                is_reset = arg && arg.item == "ltPropReset";

                if( __this._prevent ){
                    return
                }

                if( is_reset && arg.newValue == false ){
                    return;
                }

                if( __data.ltPropInfiniteScroll ){
                    var table = __this.$node.getElementsByTagName( __data.ltPropTags.table )[ 0 ],
                    content = __data.ltPropContent || [],
                    __length = content.length,
                    len = Math.min( __data.ltPropContentLength || __length, __length ),
                    data = [];

                    if( __length == 0 && !arg ){
                        return;
                    }

                    if( table ){
                        table.style.height = "auto";
                    }

                    for( var i = 0; i < len; i++ ){
                        data[ i ] = {
                            body : content[ i ],
                            checked : false,
                            index : i
                        };
                    }

                    if( __data.fromListView ){
                        var act_data = __data.ltPropData,
                        arr_util = this.$addon.arrayUtils,
                        obj_util = this.$addon.objectUtils;

                        data.forEach( function( item, index ){
                            var __cur = act_data[ index ];

                            if( __cur ){
                                obj_util( __cur, 'add', 'body', item.body );
                                obj_util( __cur, 'add', 'index', item.index );
                                obj_util( __cur, 'add', 'checked', item.checked );
                            }else {
                                arr_util( act_data, 'insertAt', item.index, item );
                            }
                        });

                        arr_util( act_data, 'splice', data.length, act_data.length - data.length );

                    } else {
                        this.setData( 'ltPropData', data );
                    }

                    var __dummy = __this._dummy,
                    __dummy1 = __this._dummy1,
                    __scrolldiv = __this.scrollDiv,
                    __translate = "translateY(0px)";

                    delete __this._stopScroll;
                    delete __this._stopScrollStart;

                    if( arg ){
                        __dummy && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __dummy ).css({
                            height : 0,
                            transform : __translate
                        });

                        __dummy1 && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __dummy1 ).css( 'transform', __translate );

                        __scrolldiv.scrollTop = 0;
                        __scrolldiv.scrollLeft = 0;
                    }

                    __this._boundary = {
                        top : __this._top = 0,
                        bottom : __this._bottom = Math.max( len - 1, 0 )
                    };
                } else if( arg && arg.item == "ltPropContent" && __data.ltPropCellIntersection ){
                    this.visible_obs( arg );
                }

                if( is_reset ){
                    this.setData( arg.item, false );
                }
            }.observes( 'ltPropContent.[]', 'ltPropReset' ).on( 'init' ),

            // border 

            borderChangeObs: function () {
                this.borderChange.call(this);
            }.observes('ltPropBorder').on('didConnect'),

            widthObsObs: function () {
                this.widthObs.call(this);
            }.observes('ltPropWidth').on('didConnect'),

            heightObsObs: function () {
                this.heightObs.call(this);
            }.observes('ltPropHeight').on('didConnect'),

            sortableObs: function () {
                !this.data.ltPropStickyTable && this.sortable();
            }.observes('ltPropColumnSortable').on('didConnect')
        }), arg1);
    }

    includes() {
        return [_mixins_lyte_table_utils_js__WEBPACK_IMPORTED_MODULE_2__.LyteTableUtilsMixin, _mixins_lyte_table_sortable_js__WEBPACK_IMPORTED_MODULE_3__.LyteTableSortableMixin];
    }

    _() {
        _;
    }
}

LyteTableComponent._template = "<template tag-name=\"lyte-table\" @turbo-supported=\"\" @unbound=\"{{lyteUnbound}}\"> <div class=\"lyteTableScroll\" onmousedown=\"{{action('rowMouseDown',event)}}\" ontouchstart=\"{{action('rowMouseDown',event)}}\" oncut=\"{{action('copy',event)}}\" oncopy=\"{{action('copy',event)}}\" onkeydown=\"{{action('keydown',event)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropSortable,'&amp;&amp;',ltPropInfiniteScroll)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"lyteTableSortablePlaceholder lyteTableSortablePlaceholderHidden\"></div> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropYield,'==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-table-structure id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" role=\"{{ltPropRole}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropHeaderLabelKey}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-colgroup> <template items=\"{{ltPropHeader}}\" item=\"list\" index=\"indexVal\" is=\"for\" _new=\"true\"> <lyte-col></lyte-col> </template> </lyte-colgroup> <lyte-thead role=\"rowgroup\"> <lyte-tr role=\"row\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropHeader.length}}\" is=\"case\" lc-id=\"lc_id_0\"><template items=\"{{ltPropHeader}}\" item=\"list\" index=\"indexVal\" is=\"for\" _new=\"true\"> <lyte-th id=\"{{list.id}}\" class=\"{{list.class}}\" index=\"{{indexVal}}\" resize=\"{{list.resize}}\" fixed=\"{{list.fixed}}\" icon=\"{{list.icon}}\" role=\"columnheader\"> {{unescape(list[ltPropHeaderLabelKey],undefined,undefined,ltPropSanitizer)}} </lyte-th> </template> </template></template></lyte-tr> </lyte-thead> </template></template><lyte-tbody role=\"rowgroup\" class=\"{{if(ltPropSortable,'lyteTableWithSortableRow')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropInfiniteScroll}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"for\" items=\"{{ltPropData}}\" item=\"list\" index=\"indexVal\"> <lyte-tr id=\"{{list.body.id}}\" class=\"{{list.body.class}}\" role=\"row\" aria-rowindex=\"{{expHandlers(list.index,'+',1)}}\" aria-posinset=\"{{expHandlers(list.index,'+',1)}}\"> <template is=\"for\" items=\"{{ltPropHeader}}\" item=\"header\" index=\"index\"> <lyte-td role=\"cell\" aria-colindex=\"{{expHandlers(index,'+',1)}}\"> <div style=\"height: {{ltPropCellHeight}}\"> {{unescape(lyteUiGetValue(list.body,header[ltPropBodyLabelKey]),undefined,undefined,ltPropSanitizer)}} </div> </lyte-td> </template> </lyte-tr> </template> </template><template default=\"\"> <template is=\"for\" items=\"{{ltPropContent}}\" item=\"list\" index=\"indexVal\"> <lyte-tr id=\"{{list.id}}\" class=\"{{list.class}}\" role=\"row\"> <template is=\"for\" items=\"{{ltPropHeader}}\" item=\"header\" index=\"index\"> <lyte-td role=\"cell\" aria-colindex=\"{{expHandlers(index,'+',1)}}\">{{unescape(lyteUiGetValue(list,header[ltPropBodyLabelKey]),undefined,undefined,ltPropSanitizer)}}</lyte-td> </template> </lyte-tr> </template> </template></template></lyte-tbody> </lyte-table-structure> </template><template case=\"{{ltPropInfiniteScroll}}\" is=\"case\" lc-id=\"lc_id_1\"> <lyte-yield yield-name=\"yield\" lt-prop-data=\"{{ltPropData}}\"></lyte-yield> </template><template default=\"\"> <lyte-yield yield-name=\"yield\" visible-status=\"{{visibleStatus}}\"></lyte-yield> </template></template></div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropResize.vertical,'||',ltPropResize.horizontal)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-table-resize ontouchstart=\"{{action('tableResize',event,'both')}}\" onmousedown=\"{{action('tableResize',event,'both')}}\"></lyte-table-resize> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropResize.vertical}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-table-vertical-resize ontouchstart=\"{{action('tableResize',event,'vert')}}\" onmousedown=\"{{action('tableResize',event,'vert')}}\"></lyte-table-vertical-resize> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropResize.horizontal}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-table-horizontal-resize ontouchstart=\"{{action('tableResize',event,'hori')}}\" onmousedown=\"{{action('tableResize',event,'hori')}}\"></lyte-table-horizontal-resize> </template></template></template></template></template>";;
LyteTableComponent._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[3,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,2],"cn":"lc_id_0"},{"t":"s","p":[1,2,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1],"a":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'height: '","ltPropCellHeight"]}}}},{"t":"tX","p":[1,1,1]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,2],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"i","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"i","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LyteTableComponent._observedAttributes = [
    "ltPropContent",
    "ltPropHeader",
    "ltPropId",
    "ltPropClass",
    "ltPropBorder",
    "ltPropHeaderLabelKey",
    "ltPropBodyLabelKey",
    "ltPropWidth",
    "ltPropHeight",
    "ltPropResize",
    "ltPropFixedColumnClass",
    "ltPropYield",
    "ltPropScroll",
    "ltPropColumnSortable",
    "ltPropScrollbarOption",
    "ltPropDualResize",
    "ltPropData",
    "ltPropInfiniteScroll",
    "ltPropCellHeight",
    "ltPropContentLength",
    "ltPropPreventScrollbar",
    "ltPropRole",
    "ltPropStickyTable",
    "ltPropScrollStep",
    "ltPropPreventTableModify",
    "ltPropSortDummyColumnClass",
    "ltPropNavigation",
    "ltPropReset",
    "ltPropTags",
    "ltPropSortable",
    "ltPropContainment",
    "lyteUnbound",
    "ltPropFromListview",
    "ltPropFixResizeCursor",
    "ltPropResizeAria",
    "ltPropCellAria",
    "ltPropCellIntersection",
    "ltPropScrollElement",
    "ltPropSanitizer",
    "ltPropResizeFixedColumn",
    "ltPropCustomCopy",
    "minWidth1",
    "minWidth2",
    "secondaryData",
    "boundary",
    "rowHeights",
    "columns",
    "nonFixedColumn",
    "fromListView",
    "visibleStatus",
    "fixedColumnLength",
    "fixedColumnStatus"
];

if (!window._lyteUiUtils.registeredCustomElements['lyte-th']) {
    window._lyteUiUtils.registeredCustomElements['lyte-th'] = true;

    /**
     * @customElement lyte-th,lyte-td
     */
    class LyteThCustomElements extends _component_js__WEBPACK_IMPORTED_MODULE_4__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _component_js__WEBPACK_IMPORTED_MODULE_4__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [ 'fixed', 'resize', 'icon', 'sticky-position', "collapse" ];
        }

        getTable() {
            var lyteNode = this.$node;
            var query = "lyte-table";
            return (lyteNode.__table || (lyteNode.__table = lyteNode.closest ? lyteNode.closest( query ) : _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( lyteNode ).closest( query ).get( 0 )));
        }

        getSticky() {
            var lyteNode = this;
            var __sticky = lyteNode.__is_sticky;
            return __sticky == void 0 ? ( lyteNode.__is_sticky = lyteNode.getTable().ltProp( 'stickyTable' ) ) : __sticky;
        }

        connectedCallback() {
            var lyteNode = this;
            var table = lyteNode.getTable(),
            $node = lyteNode.$node;

            if( table && table.ltProp( 'role' ) && table.ltProp( 'yield' ) ){
                table.component.update_aria( $node );
            }

            if( $node.parentNode.previousElementSibling ){
                lyteNode.$node.classList.add( "lyteTableSecondaryHeader" );
            }
        }

        attributeChangedCallback(attr, oldVal, newVal) {
            var lyteNode = this.$node;

            var $node = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( lyteNode );

            switch (attr) {
                case 'fixed': {
                    var is_enable = newVal == "enable";

                    $node[ ( is_enable ? 'add' : "remove" ) + 'Class' ]( 'lyteFixedColumn' );
                    if( this.getSticky() ){
                        lyteNode.__table.component.checkIntersection.call( lyteNode, is_enable );
                    }
                }
                    break;
                case 'resize': {
                    var ns = 'lyte-tablehead-resize';
                    if( newVal == "enable" ){
                        var thead = document.createElement( ns ),
                        __add = "addEventListener",
                        fn = this.resize;

                        thead[__add]('mousedown', fn);
                        thead[__add]('touchstart', fn);

                        lyteNode.appendChild( thead );
                    } else {
                        var thead = lyteNode.getElementsByTagName( ns )[ 0 ];
                        if( thead ){
                            lyteNode.removeChild( thead );
                        }
                    }
                }
                break;
                case 'icon' : {
                    $node[ ( newVal == "disable" ? 'add' : "remove" ) + 'Class' ]( 'lytePreventIcon' );
                }
                break;
                case 'sticky-position' : {
                    if( $node.attr( 'fixed' ) == "enable" && this.getSticky() ){
                        var is_enable = newVal == "right",
                        __table = lyteNode.__table.component,
                        fn = is_enable ? 'add' : "remove",
                        __class = 'lyteTableRightFixed';

                        if( !is_enable && !$node.hasClass( __class ) ){
                            return;
                        }   

                        __table.stickyFunction( lyteNode, false, fn + 'Class', __class );
                        __table.checkIntersection.call( lyteNode, is_enable, true );
                    }
                }
                break;
                case 'collapse' : {
                    var __table = this.getTable();

                    if( __table ){
                        if( newVal == "true" ){
                            __table.component.collapse_column( lyteNode );
                        } else if( oldVal == "true" ){
                            __table.component.expand_column( lyteNode );
                        }
                    }
                }
                break;
            }
        }

        resize(event) {
            var lyteNode = this;
            if (lyteNode.parentNode.classList.contains('lyteTableFixed')) {
                return;
            }
            var table = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()(event.target).closest('lyte-table')[0];
            table.component.getActions("tableResize").call(table.component, event);
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            if( lyteNode.__is_sticky ){
                lyteNode.__table.component.disconnectedCallback.call( lyteNode );
            }
            delete lyteNode.__table;
        }

        _() {
            _;
        }
    }

    LyteThCustomElements.options = {clone : {allCallbacks : false}};
    LyteThCustomElements.register("lyte-th");

    window.resizeTable = function(evt) {
        if (evt && evt.type == 'resize' && window._lyteUiUtils.isMobile) {
            return;
        }

        var fn = function( item ){
            var __elem = item.component.scrollDiv,
            $elem = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_5___default()( __elem );
            __elem && $elem.resetScrollbar && $elem.resetScrollbar();
        },
        is_orient = evt && evt.type == "orientationchange";

        Array.from(document.body.getElementsByTagName('lyte-table')).forEach(function (item) {
            if (is_orient) {
                setTimeout(fn.bind(this, item), 500);
            } else {
                fn(item);
            }
        });
    };
}

/**
 * @syntax nonYielded
 * @dollar 0 [{"cityName" : "Agra","serialNo" : "1"},{"cityName" : "Mysore", "serialNo" : "2"}]
 * @dollar 1 [{"data" : "From", "bodyData" : "cityName"},{"data" : "No", "bodyData" : "serialNo"}]
 *   <lyte-table  lt-prop-content='{{$0}}' lt-prop-header='{{$1}}' lt-prop-header-label-key='data' lt-prop-body-label-key='bodyData' >
 *   </lyte-table>
 */

/**
 * @syntax yielded
 * @attribute ltPropYield=true
 * <lyte-table lt-prop-yield="true">
 *      <template is="registerYield" yield-name="yield">
 *          <lyte-table-structure>
 *             <lyte-thead>
 *                <lyte-tr>
 *                   <lyte-th>From</lyte-th>
 *                   <lyte-th>No</lyte-th>
 *                   <lyte-th>Name</lyte-th>
 *                </lyte-tr>
 *             </lyte-thead>
 *             <lyte-tbody>
 *                <lyte-tr>
 *                   <lyte-td>Agra</lyte-td>
 *                   <lyte-td>1</lyte-td>
 *                   <lyte-td>Tajmahal</lyte-td>
 *                </lyte-tr>
 *                <lyte-tr>
 *                   <lyte-td>Mysore</lyte-td>
 *                   <lyte-td>2</lyte-td>
 *                   <lyte-td>Mysorepalace</lyte-td>
 *                </lyte-tr>
 *             </lyte-tbody>
 *          </lyte-table-structure>
 *      </template>
 *  </lyte-table>
 */

/**
 * @syntax Infinite scroll
 * @attribute ltPropYield=true
 * @attribute ltPropInfiniteScroll=true
 *  <lyte-table style = 'height: 350px;' lt-prop-infinite-scroll = true lt-prop-yield = true lt-prop-content = {{contentJSON}} scroll-end = {{method('someMethod')}}>
 *   <template is = 'registerYield' yield-name = 'yield'>
 *       <lyte-table-structure>
 *           <lyte-thead>
 *               <lyte-tr>
*                  <lyte-th> From </lyte-th>
*                  <lyte-th> No </lyte-th>
*                  <lyte-th> Name </lyte-th>
 *              </lyte-tr>
 *           </lyte-thead>
 *           <lyte-tbody>
 *             <lyte-tr>
 *               <lyte-td> Agra </lyte-td>
 *               <lyte-td> 1 </lyte-td>
 *               <lyte-td> Taj Mahal </lyte-td>
 *             </lyte-tr>
 *              <lyte-tr>
 *               <lyte-td> Mysore </lyte-td>
 *               <lyte-td> 2 </lyte-td>
 *               <lyte-td> Mysore palace </lyte-td>
 *             </lyte-tr>
 *           </lyte-tbody>
 *       </lyte-table-structure>
 *   </template>
 *  </lyte-table>
 */


LyteTableComponent.register("lyte-table", {
    hash: "LyteTableComponent_4",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});
 


/***/ }),

/***/ 95883235:
/*!****************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/mixins/lyte-table-sortable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteTableSortableMixin": () => (/* binding */ LyteTableSortableMixin)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 60469700);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@slyte/core/index.js */ 53625190);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__);




let LyteTableSortableMixin = (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__.createCustomClass)(function(arg1, overrides, LyteTableSortableMixin) {
    class _LyteTableSortableMixin extends (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__.getClass)([_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.Mixin], arg1, LyteTableSortableMixin) {
        rowMouseDown(evt) {
                     
               var _this = this ,
                   tags = _this.data.ltPropTags,
                   tr = evt.target.closest(tags.tr) , 
                   tbody = tr.closest(tags.tbody);
               if( tbody != void 0 ){
                   var table = tbody.closest('lyte-table'),
                       index = Array.from( tr.parentElement.children ).indexOf( tr ),
                       actual_index = index ,
                       cur_index = actual_index  ,
                       data = _this.data.ltPropData , 
                       isFirst = true , 
                       trTransform = tr.style.transform ,
                       content = _this.data.ltPropContent ,
                       boundary = _this._boundary , 
                       isTouch = Boolean(evt.touches),
                       hasContainment = Boolean(_this.data.ltPropContainment) ,
                       containElem = hasContainment ? _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(_this.$node).find(_this.data.ltPropContainment)[0] : undefined,
                       containElemClient = containElem != void 0 ? containElem.getBoundingClientRect() : undefined , 
                       placeholder = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(this.$node).find( '.lyteTableSortablePlaceholder' ).get(0),
                       outOfBound = false, yRelatedToElement , reachedTop , reachedEnd , diff = void 0;

                   if(tr.parentElement.tagName.toLowerCase() == _this.data.ltPropTags.tbody){
                       if( this.getMethods( 'onRowSelect' ) ){
                           let ret = this.executeMethod( 'onRowSelect' , evt  , data[actual_index].index  , actual_index , _this.$node );
                           if( ret === false ){
                               return;
                           }
                       } 

                       evt.preventDefault();

                       placeholder.classList.remove( 'lyteTableSortablePlaceholderHidden' );
                   
                       var findElement = function ( isPrev , isMouseUp ){
                           if( isMouseUp ){
                               let arr = Array.from(tbody.children);
                               for( let i = 0 ; i < arr.length ; i++ ){
                                   let cur = arr[i];
                                   if( cur.classList.contains('lyteTableRowSorting') ){
                                       return i;
                                   }
                               }
                           }else{
                               let curIndex =_this.data.ltPropData[cur_index].index ,
                                   findIndex = isPrev ? getIndex(  curIndex == 0 ? data.length-1 : curIndex - 1 ) :
                                                        curIndex == data.length-1 ? curIndex == content.length-1 ? undefined : 0 : getIndex(curIndex + 1 ),
                                   arr = Array.from( tbody.children );
                               if(findIndex == undefined){
                                   return;
                               }
                               for( let i = 0, j = 0 ; i < arr.length ; i ++ ){
                                   let cur = arr[i];
                                   if( !(cur.classList.contains('dummy')) ){
                                       if( j == findIndex ){
                                           return arr[i];
                                       }
                                       j++
                                   }
                               }
                           }
                       },
                       makeElementDraggable = function(){
                           var width = []
                           Array.from( tr.children ).forEach( function(td){
                               width.push( window.getComputedStyle(td).width );
                           }); 
                           tr.classList.add('lyteTableRowSorting'); 
                       },
                       getIndex = function( index ){
                           var find = function(obj){
                               return obj.index === index;
                           }
                           return _this.data.ltPropData.findIndex(  find );
                       },
                       checkLimit = function (num){
                           return 0 <= num && num < _this.data.ltPropData.length ;
                       },
                       changePlaceHolder = function( _tr ){
                           placeholder.style.transform = "";
                           if( _tr.style.transform ){
                               placeholder.style.transform = _tr.style.transform;
                           }
                           placeholder.style.top = _tr.offsetTop + "px";
                           placeholder.style.left = _tr.offsetLeft + "px";
                           placeholder.style.width = _tr.offsetWidth + "px";
                           placeholder.style.height = _tr.offsetHeight + "px";
                       };
                   
                       changePlaceHolder( tr );
                       makeElementDraggable();
                   
                       var initialY = isTouch ? evt.touches[0].clientY : evt.clientY;
                            
                       var mouseup = function(event){
                           let currentIndex = findElement( false , true ) ,
                           scrollTop = _this.scrollDiv.scrollTop;
                           evt.preventDefault();

                           placeholder.classList.add( 'lyteTableSortablePlaceholderHidden' );
                       
                               if(_this.getMethods( 'onBeforeRowDrop' )){
                                   var ret = _this.executeMethod( 'onBeforeRowDrop' , event , currentIndex , data[currentIndex].index , _this.$node  );
                               } 

                               if(ret === false){
                                   let removeIndex = cur_index , 
                                       cur_data = Object.assign( {} , data[removeIndex] );

                                   _this.removeRow(data[removeIndex].index);
                                   _this.insertRow(data[actual_index].index , cur_data.body);

                                   if( _this.data.ltPropContent.length - 2 == _this._boundary.bottom ){
                                       _this.scrollToRecord( data[removeIndex].index , true , scrollTop );
                                   }
                               }
                               tr.style.transform = trTransform;
                               tr.classList.remove('lyteTableRowSorting')

                               _this.getMethods( 'onRowDrop' ) && _this.executeMethod( 'onRowDrop' , event , currentIndex , data[currentIndex].index , _this.$node );
                           
                               let elem = tbody.children[getIndex(actual_index)];
                               if(elem){
                                   elem.style.top = ""; elem.style.right = "";
                               }
                           
                           
                           document.removeEventListener( isTouch ? 'touchmove' : 'mousemove', mousemove)
                           document.removeEventListener( isTouch ? 'touchend' : 'mouseup', mouseup);
                       },

                       parseNum = function (number){
                           let match = number.match(/-?\d+(\.\d+)?/);
                           return match ? parseFloat(match[0]) : 0
                       },
                       isInRange = function( tr , y , isUp){
                           let client = tr.getBoundingClientRect() ,
                               topCheck = containElemClient.top < client.top ,
                               bottomCheck = ( client.top + client.height ) < (containElemClient.top + containElemClient.height );

                           if( isUp == void 0 ){ return topCheck && bottomCheck }

                           reachedTop = false; reachedEnd = false;

                           if( !topCheck ) { 
                                reachedTop = true; }
                           else if( !bottomCheck ) { reachedEnd = true; }

                           if( reachedTop ){ 
                               topCheck = !isUp && ( ( containElemClient.top < y ) && ( y < containElemClient.top + containElemClient.height-diff ) ) && diff >= 0;
                           }else if( reachedEnd ){
                               bottomCheck = isUp && ( containElemClient.top < y && y < (containElemClient.top + containElemClient.height ) ) && diff <= 0
                           }
                            return topCheck && bottomCheck 

                       },
                       fixTop = function ( isUp , returnBoundElem , getDiff){
                           var trClient = tr.getBoundingClientRect(),
                               _diff , transformY ,
                               top = _this._top , bottom = _this._bottom , 
                               contentLength = data.length;

                       
                           _diff = isUp ? containElemClient.top - trClient.top : 
                                        (containElemClient.top + containElemClient.height) - (trClient.top + trClient.height);
                           if( getDiff === true ){ 
                               diff = -_diff;
                               return;
                           };
                           transformY = parseNum( tr.style.transform );
                           tr.style.transform = ""; _this.transform( true , tr , transformY + _diff );
                           trClient = tr.getBoundingClientRect();


                           if( !returnBoundElem ) { return; }

                           let reachedEnd = false;

                           for (let i = isUp ? top : bottom ; isUp ? i < (top+contentLength) : (reachedEnd ? i > bottom + 1 : i >= 0) ; isUp ? i++ : i--) {
                               i = isUp ? i%contentLength : i;
                               const element = tbody.children[i] ,
                                     elemClient = element.getBoundingClientRect();

                               if(isUp ? ( elemClient.top >= ( containElemClient.top ) ) : (elemClient.top < (containElemClient.top+containElemClient.height))){
                                   if( isUp ? trClient.top <= elemClient.top : trClient.top >= elemClient.top ){
                                       if(cur_index != i){
                                           return i;
                                       }
                                       return;
                                    }
                               }


                               if( !isUp && i == 0 ){
                                   reachedEnd = true;
                                   i = contentLength;
                               }
                           }
                       
                       }
                   
                       var mousemove = function( event ){
                           isTouch ? null : event.preventDefault();
                           var y = isTouch ? event.touches[0].clientY : event.clientY ;

                           y = (y < 0) ? 0 : y;

                           var isUp = ( initialY > y) , isDown = ( initialY < y ),
                               isRange , targetIndex , 
                               neighbour = isDown ? findElement( false ) : isUp ? (cur_index == 0 && boundary.top == 0) ? undefined : findElement( true ) : undefined ,
                               check = false;
                           
                           
                           
                           if(isUp || isDown) {

                               let _transform = tr.style.transform;
                               tr.style.transform = "translateY(" + (parseNum(tr.style.transform || "") + ( diff != void 0 ? diff : 0 )- (initialY - y)) + "px)";

                               if(hasContainment){
                                   diff = diff != void 0 ? diff - (initialY - y) : void 0;
                                   isRange = isInRange( tr , y , isUp );
                                   if(!isRange && !outOfBound){
                                       fixTop( isUp , false , true );
                                       check = true ;
                                   }
                               }

                               tr.style.transform = _transform;


                              if( isFirst && _this.getMethods('onRowDragStart') ){
                                  _this.executeMethod( 'onRowDragStart' , event , data[cur_index].index , cur_index , _this.$node );
                              }


                          
                              if( hasContainment && isRange){
                                  if(  outOfBound ){
                                      tr.style.transform = "translateY(" + (parseNum(tr.style.transform || "") + ( diff )) + "px)";
                                      diff = void 0;
                                      outOfBound = false;
                                  }else{
                                      tr.style.transform = "translateY(" + (parseNum(tr.style.transform || "") - (initialY - y)) + "px)";
                                      outOfBound = false;
                                  }
                              }else if( hasContainment && !outOfBound) {
                                  outOfBound = true ;
                                  targetIndex = fixTop( isUp , true );
                              }else if(!hasContainment){
                                  tr.style.transform = "translateY(" + (parseNum(tr.style.transform || "") - (initialY - y)) + "px)";
                              }

                              isFirst = false;  
                              var trClient = tr.getBoundingClientRect();

                              if( (neighbour != void 0 && !outOfBound) || (targetIndex != void 0) ){
                                   let isExceeds = targetIndex == void 0 ? isDown ? ( neighbour.getBoundingClientRect().top < trClient.top ) :
                                                   isUp ?   ( neighbour.getBoundingClientRect().top > trClient.top ) : false : false;

                                   if( (neighbour != void 0 && isExceeds) || (targetIndex != void 0)){
                                       let curData = Object.assign( {} , _this.data.ltPropData[cur_index] ) , 
                                           heightDiff = parseNum(tr.style.transform) - parseNum(trTransform) + ( (isDown ? -1 : 1 ) * tr.offsetHeight ) ,
                                           _curIndex = data[cur_index].index, 
                                           hasTarget = targetIndex != void 0;

                                       tr.style.setProperty('transform' , trTransform ) ;
                                       let scrollTop = _this.scrollDiv.scrollTop;

                                       clearTimeout(_this._ignoreTimeout)
                                       _this.__ignore_scroll = true;

                                       let insertIndex = ( targetIndex != void 0 ? data[targetIndex].index : isDown ? _curIndex+1 : _curIndex-1  ),
                                           removeIndex = _curIndex!=void 0 ? _curIndex : cur_index;

                                       _this.removeRow( removeIndex );
                                       _this.insertRow( insertIndex , curData.body );


                                       if( _this.data.ltPropContent.length - 2 == _this._boundary.bottom ){
                                           if( _this._rowHgt == undefined ){
                                               _this.__allow_scroll = true;
                                           }
                                           _this.scrollToRecord( _curIndex, true , scrollTop );
                                           _this.__allow_scroll = false;
                                       }

                                       if( hasTarget ){
                                           tr.classList.remove('lyteTableRowSorting');
                                           tr = tbody.children[targetIndex];

                                           changePlaceHolder( tr );

                                           trTransform = tr.style.transform;
                                           tr.classList.add('lyteTableRowSorting');
                                           fixTop(isUp);
                                           cur_index = targetIndex;
                                       }else{
                                           tr = tbody.children[getIndex(removeIndex)] ; neighbour = tbody.children[getIndex(insertIndex)];

                                           changePlaceHolder( neighbour );

                                           tr.classList.remove('lyteTableRowSorting');
                                           neighbour.classList.add('lyteTableRowSorting');
                                           trTransform = neighbour.style.transform;
                                           cur_index = isDown ? checkLimit( cur_index + 1 ) ? cur_index + 1 : 0 : checkLimit( cur_index - 1 ) ? cur_index - 1 : data.length-1;
                                           neighbour.style.transform = "translateY(" + ( ( isDown ? ( cur_index == 0 ) : ( cur_index == data.length - 1 ) ) ?  (parseNum(neighbour.style.transform) + heightDiff ) : heightDiff + parseNum(trTransform) ) + "px)";
                                           tr = neighbour; 
                                       }


                                       index = isDown ? (index + 1) : (index - 1);

                                       _this._ignoreTimeout = setTimeout(() => {
                                           _this.__ignore_scroll = false;
                                       }, 100);
                                   }

                              }
                           }                   
                       
                        initialY =  y;
                       }
                   
                       document.addEventListener( 'mousemove' , mousemove , evt );
                       document.addEventListener( 'mouseup' , mouseup , evt);

                       document.addEventListener( 'touchmove' , mousemove , false );
                       document.addEventListener( 'touchend' , mouseup , false);
                   }   
               }
     
       }

        _() {
            _;
        }
    }

    return overrides(_LyteTableSortableMixin);
});

LyteTableSortableMixin.register({
    hash: "LyteTableSortableMixin_5",
    refHash: "@zoho/lyte-ui-component_3"
});





/***/ }),

/***/ 20191488:
/*!*************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/mixins/lyte-table-utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteTableUtilsMixin": () => (/* binding */ LyteTableUtilsMixin)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 60469700);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@slyte/core/index.js */ 53625190);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__);




let LyteTableUtilsMixin = (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__.createCustomClass)(function(arg1, overrides, LyteTableUtilsMixin) {
    class _LyteTableUtilsMixin extends (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_1__.getClass)([_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.Mixin], arg1, LyteTableUtilsMixin) {
        getScrollDiv() {
            return this.$node.getElementsByClassName( 'lyteTableScroll' )[ 0 ];
        }

        registerInterSection(scrollDiv) {
             this._intersectionObs = new IntersectionObserver( this.intersection.bind( this ), { threshold : [ 1 ], root : scrollDiv } )
        }

        detectBrowsers() {
            var userAgent = navigator.userAgent
            this._isSafari = /safari/ig.test( userAgent );
            this._FF = /firefox/ig.test( userAgent );
            this._chrome = /Chrome/i.test( userAgent ) && /Google Inc/i.test( navigator.vendor );
        }

        getHeaderWidths(headerCells) {
            return headerCells.map( function( cell ){
                return cell.offsetWidth;
            });
        }

        getTbody() {
            return this._tbody || this.$node.getElementsByTagName( this.data.ltPropTags.tbody );
        }

        getThead() {
            return this.$node.getElementsByTagName( this.data.ltPropTags.thead )[ 0 ];
        }

        getRows() {
            return this.$node.getElementsByTagName( this.data.ltPropTags.tr );
        }

        makeFixedColumn(rows, index, left, value) {

            rows.forEach( function( row ){
                var _$L = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( row );
                if( !_$L.hasClass( 'dummy' ) ) {
                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( this.get_nth_cell( row, index ) ).css( left, value ).addClass( 'lyteFixedColumn' );
                }
            }.bind( this ) );
        }

        observe(intersection) {
            if( !intersection._observed ){
                this._intersectionObs.observe( intersection );
                intersection._observed = true;
            }
        }

        _setLeftForInterSection(reset) {

            var fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom),
            __this = this;


            fastdom.clear( __this._setmeasure );

            __this._setmeasure = fastdom.measure( function(){

                var __tags = __this.data.ltPropTags,
                th_rows = Array.from( __this.$node.querySelectorAll( __tags.thead + ' ' + __tags.tr ) ),
                accumulatedTop = 0;

                th_rows.forEach( function( row, ___index ){
                    if( row.closest( 'lyte-table' ) != __this.$node ){
                        return;
                    }

                    var headerCells = __this.get_children( row ),
                    __length = headerCells.length - 1;

                    if( __length + 1 ){
                        var width = __this.getHeaderWidths( headerCells ),
                        top_to_set = accumulatedTop,
                        check_right = true,
                        left = __this.rtlfunc( 'left' ),
                        right = __this.rtlfunc( 'right' );

                        accumulatedTop += row.offsetHeight;

                        fastdom.mutate( function(){
                            var tbody = __this.getTbody(),
                            rows = ___index ? [] : __this.get_children( tbody ),
                            intersectionDivs = [],
                            accumulatedWidth = 0,
                            accumulatedLeft = 0,
                            fn = function( cell, index ){
                                var intersection = cell._horizontalIntersectionDiv,
                                __index = check_right ? index : ( __length - index );

                                if( intersection ){
                                    var _hasClass = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( cell ).hasClass( 'lyteTableRightFixed' );
                                    if( ( check_right && _hasClass ) || ( !check_right && !_hasClass ) ){
                                        intersection = void 0;
                                    }
                                }

                                if( intersection ){
                                    intersectionDivs.push( intersection );
                                    intersection.style[ left ] = accumulatedLeft + 'px';
                                    cell.style[ left ] = accumulatedWidth + 'px';
                                    intersection.style[ right ] = cell.style[ right ] = "";

                                    __this.throwEvent( "intersectionSet", cell, left, accumulatedWidth );

                                    __this.makeFixedColumn( rows, __index, left, accumulatedWidth );
                                    __this.makeFixedColumn( rows, __index, right, "" );

                                    accumulatedWidth += width[ __index ];

                                    __this.observe( intersection );

                                    if( intersection._sticked && reset ){
                                        __this.addFixedClass( cell );
                                    }
                                } else {
                                    accumulatedLeft +=  width[ __index ];
                                }

                                if( ___index ){
                                    cell.style.setProperty( '--listviewcelltop', cell.style.top = top_to_set + 'px' );
                                }
                            };

                            headerCells.forEach( fn );
                            check_right = false;
                            left = __this.rtlfunc( 'right' );
                            right = __this.rtlfunc( 'left' );
                            accumulatedLeft = 0;
                            accumulatedWidth = 0;

                            headerCells.reverse().forEach( fn );

                             ___index ? void 0 : ( __this._intersections = intersectionDivs );
                        });
                    }
                }); 
            });
        }

        intersection(intersections) {
            
            intersections.forEach( function( intersection ){
                this.singleIntersection( intersection );
            }.bind( this ) );
        }

        singleIntersection(intersection) {
            var cell = intersection.target._cell,
            __this = this,
            ns = intersection.intersectionRatio ? 'processUnfix' : 'processFix';

            __this._fixedWidth = __this._fixedWidth || 0;
            __this._rightFixedWidth = __this._rightFixedWidth || 0;
            __this[ ns ]( cell, intersection );
        }

        common_fn(cell, intersection, __remove) {
            var __this = this;

            __this[ __remove ? 'removeFixedClass' : 'addFixedClass' ]( cell );
            intersection.target._sticked = !__remove;
            __this[ __remove ? 'callUnfix' : "callFix" ]( cell );

            if( cell.parentNode.previousElementSibling ){
                return;
            }

            __this.data.ltPropColumnSortable && _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom.measure( function(){
                var bcr = cell._bcr || cell.getBoundingClientRect(),
                ns = cell.classList.contains( 'lyteTableRightFixed' ) ? '_rightFixedWidth' : "_fixedWidth";

                if( ( __this[ ns ] += ( bcr.width * ( __remove ? -1 : 1 ) ) ) < 0 && __remove ){
                    __this[ ns ] = 0;
                }
            });
        }

        processUnfix(cell, intersection) {
            this.common_fn( cell, intersection, true );
        }

        processFix(cell, intersection) {
            this.common_fn( cell, intersection );
        }

        execute(cb) {
            return this.getMethods( cb ) && this.executeMethod.apply( this, arguments );
        }

        callUnfix(cell) {
            this.execute( 'onUnFix', cell, this.$node );
        }

        callFix(cell) {
            this.execute( 'onFix', cell, this.$node );
        }

        callDrop(selectedCell, next, startIndex, endIndex, header, evt) {
            this.execute( 'onDrop', selectedCell, next, startIndex, endIndex, header, evt, this.$node );
        }

        callRelease(evt, selectedCell) {
           this.execute( 'onRelease', evt, selectedCell, this.$node );
        }

        callOnBeforeSelect(selectedCell, ev, index) {
            return this.execute( 'onBeforeSelect', selectedCell, ev, this.$node, index ) == false;
        }

        callOnSelect(selectedCell, ev, index) {
            return this.execute('onSelect', selectedCell, ev, this.$node, index ) === false;
        }

        stickyFunction(cell, isCss, property, value) {
            var index = this.getIndex( cell ),
            tbody = this.getTbody(),
            rows = cell.parentNode.previousElementSibling ? [] : this.get_children( tbody ),
            fnName = isCss ? 'css' : property,
            fnValue = value;

            if( isCss ){
                fnValue = {};
                fnValue[ property ] = value;
            }

            _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( cell )[ fnName ]( fnValue );

            rows.forEach( row => {
                _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( this.get_nth_cell( row, index ) )[ fnName ]( fnValue );
            });
        }

        removeFixedClass(cell) {
            this.stickyFunction( cell, false, 'removeClass', 'lyteTableFixed' );
        }

        addFixedClass(cell) {
            this.stickyFunction( cell, false, 'addClass', 'lyteTableFixed' );
        }

        removeSticky(cell) {
            var is_right = cell.classList.contains( 'lyteTableRightFixed' );

            this.stickyFunction( cell, true, this.rtlfunc( is_right ? 'right' : 'left' ), '' );
            this.stickyFunction( cell, false, 'removeClass', 'lyteFixedColumn' );
        }

        makeSticky(cell) {
            var __left = this.rtlfunc( 'left' );

            this.stickyFunction( cell, true, __left, cell.style[ __left ] );
        }

        stickyScroll(evt) {
            var __target = evt.target;

            if( __target == this.scrollDiv ){
                var __intersections = this._intersections || [];

                if( __intersections.length  ){
                    var __table = this.$node,
                    // is_intersection = this.data.ltPropCellIntersection,
                    is_listview = this.data.fromListView;

                    _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom.measure( function(){
                        var scrollTop = __target.scrollTop,
                        scrollLeft = __target.scrollLeft;
                        
                        _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom.mutate( function(){
                          if( is_listview ){
                                __table.style.setProperty( '--lyte-table-intersection', scrollTop + 'px' );
                                __table.style.setProperty( '--lyte-table-intersection-left', scrollLeft + 'px' );
                          } else {
                             __intersections.forEach( function( item ){
                                item.style.top = scrollTop + 'px';
                             });
                          }
                        });
                    });
                }
            }
        }

        sortablemousedown(ev) {
            var evt = ev,
            isTch,
            __target = ev.target;

            if( /lyte-tablehead-resize/i.test( __target.tagName ) || ev.button != 0 ){
                return
            }

            if( /touch/i.test( ev.type ) ){
                if( ev.touches.length > 1 ){
                    return;
                }
                isTch = true;
                evt = ev.touches[ 0 ];
            }
            var target = __target,
            selectedCell = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( target ).closest( this.data.ltPropTags.th ).get( 0 );

            if( !selectedCell || _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( selectedCell ).hasClass( 'lyteTableFixed' ) ){
                return;
            }

            var index = this.getIndex( selectedCell );

            if( this.callOnBeforeSelect( selectedCell, ev, index ) ){
                return;
            }

            this._ww = window.innerWidth;

            // no need to pass this._ww inside rtlfunc. its already available inside it == > here only its available in this. In other places i am passing. So i need to pass here too. Here i am storing because of window dimension wont change during mousemove. So no need to measure that in mousemove
            var clientX = this.rtlfunc( 'clientX', evt, this._ww ),
            offleft = 0,
            tbody = this.getTbody(),
            thead = this.getThead(),
            cells = [],
            rows = this.get_children( tbody ),
            scrollDiv = this.getScrollDiv(),
            scrollTop = scrollDiv.scrollTop;

            if( this.data.fromListView ){
                var listview = this.$node.closest( 'lyte-listview1' );
                if( listview && listview.ltProp( 'nestedGrouping' ) ){
                    rows.push.apply( rows, Array.from( _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( tbody ).find( 'tr' ) ) );
                }
            }

            this._elem = selectedCell;

            this._originalIndex = index;
            this._sortmousemove = this.sortmousemove.bind( this );
            this._sortmouseup = this.sortmouseup.bind( this );
            this._currentIndex = index;
            this._tbody = tbody;
            this._cells = cells;
            this._affectedIndex = [];

            this._scrolldivBcr = scrollDiv.getBoundingClientRect();
            this._scrollwidth = scrollDiv.scrollWidth;

            this._prevx = clientX;
            this._originalDiv = scrollDiv;
            this._originalDiv._sL = scrollDiv.scrollLeft;

            var headerCells = Array.from( this.get_children( selectedCell.parentNode ) ),
            rowBcr = selectedCell.parentNode.getBoundingClientRect(),
            __dir = this._dir;

            headerCells.forEach( function( cell, index, originalArray ){
                var previousCell = ( originalArray[ index - 1 ] || {} )._bcr,
                cellBcr = cell.getBoundingClientRect(),
                __width = cellBcr.width;

                // Feels like this calculation might not be needed. ===> Actual position( If not sticked ) and sticked positions will be different. here i am calculating Actual position. getBounding will give sticked position

                if( index == 0 ){
                    if( __dir ){
                        var __right = rowBcr.right;
                        cell._bcr = { left : __right - __width, right : __right, width : __width };
                    } else {
                        var __left = rowBcr.left;
                        cell._bcr = { left : __left, right : __left + __width, width : __width };
                    }
                } else {
                    if( __dir ){
                        var __left = previousCell.left;
                        cell._bcr = { left : __left - __width, right : __left, width : __width };
                    } else {
                        var __right = previousCell.right;
                        cell._bcr = { left : __right, right : __right + __width, width : __width };
                    }
                }
            });

            // don't understand this part either ==> converting event client value with respect to right( in rtl )
            
            this._xoffset = clientX - this.rtlfunc( 'right', selectedCell._bcr, this._ww );

            if( !this.data.ltPropPreventTableModify ){
                var height = 0;

                rows.every( function( row ){
                    var cell = this.get_nth_cell( row, index );

                    if( !cell ){
                        return true;
                    }

                    var cellHeight = cell.getBoundingClientRect().height;
                    height += cellHeight;

                    if( height < scrollTop - rowBcr.height ){
                        return true;
                    }

                     cell._translateX = 0;
                     cells.push( cell );
                     // may this can be this._currentEndIndex ===> its just virtual movement. So i named this as transformed index
                     cell._transformedindex = index;
                     cell.classList.add( 'lyteStickyTableColumnSortSelect' );

                     if( height >= this._scrolldivBcr.height + scrollTop ){
                        return false;
                    }
                    return true;
                }.bind( this ) );

                selectedCell._translateX = offleft;
                cells.push( selectedCell );
                selectedCell._transformedindex = index;
            } else {
                selectedCell._transformedindex = index;
            }

            if( ev.type ){
                document.addEventListener( isTch ? 'touchmove' : 'mousemove', this._sortmousemove, true );
                document.addEventListener( isTch ? 'touchend' : 'mouseup', this._sortmouseup, true );
                ev.preventDefault();
            }

            this.$node.classList.add( 'lyteTableSortSelected' );
            selectedCell.classList.add( 'lyteStickyTableColumnSortSelect' );

            this.callOnSelect( selectedCell, ev, index );
        }

        isIncrement(increment, isRightEdge) {
            return increment > 0 || ( increment == 0 && isRightEdge );
        }

        isDecrement(increment, isRightEdge) {
            return increment < 0 || ( increment == 0 && isRightEdge === false );
        }

        getTd(cell, increment, isRightEdge) {
            // what is transformedindex ==> while moving columns are interchanged. here transformed index is virtual new index
            var transindex = cell._transformedindex,
            __index = -1,
            ori_index = this._originalIndex;

            if( this.isIncrement( increment, isRightEdge ) ){
                if( ori_index <= transindex ){
                    __index = transindex + 1;
                } else{
                    __index = transindex;
                }
            } else if( this.isDecrement( increment, isRightEdge ) ) {
                if( ori_index < transindex ){
                    __index = transindex;
                } else {
                    __index = transindex - 1;
                }
            }

            return this.get_nth_cell( cell.parentNode, __index );

        }

        findFromClosest(evt, cell) {
            var __tags = this.data.ltPropTags,
            closestCell = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( evt.target ).closest( __tags.th + ', ' + __tags.td ).get( 0 );
            if( this.isHeader( closestCell ) ){
                var index = this.getIndex( closestCell );
                closestCell = this.get_nth_cell( cell.parentNode, index );
            }
            return this.$node.contains( closestCell ) ?  closestCell : undefined;
        }

        isHeader(cell) {
            return cell && ( cell.tagName.toLowerCase() == this.data.ltPropTags.td );
        }

        isSortEnabled() {
            return this._elem;
        }

        isMoved() {
            return this._moved;
        }

        getIndex(cell) {
            return Array.from( this.get_children( cell.parentNode ) ).indexOf( cell );
        }

        getClassForFake() {
            return 'lyteTableSortHelper ' + ( this.data.ltPropSortDummyColumClass || this.data.ltPropSortDummyColumnClass );
        }

        createFakeColum(cell) {
            var __doc = document,
            __element = __doc.documentElement,
            originaldiv = __doc.createElement( 'div' ),
            div = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( originaldiv ),
            cellObj = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( cell ),
            bcr = cell.getBoundingClientRect(),
            xscroll = __element.scrollLeft,
            yscroll = __element.scrollTop,
            cb = "onFakeColumnCreate";

            cellObj.data( 'sortElement', originaldiv );
            originaldiv._bcr = { left : bcr.left, right : bcr.right, width : bcr.width };
            originaldiv._translateX = bcr.left;
            originaldiv._translateY = bcr.top;

            div.attr( 'style', cellObj.attr( 'style' ) );
            div.text( cell.textContent )
                .addClass( this.getClassForFake() )
                .data( 'relatedElement', cell )
                .css({ 
                        height : bcr.height, 
                        width : bcr.width,
                        left : xscroll * ( this._dir ? -1 : 1 ),
                        top : yscroll,
                        pointerEvents : "none",
                        transform : 'translate(' + originaldiv._translateX + 'px,' + originaldiv._translateY + 'px)'
                    });


            this.getMethods( cb ) && this.executeMethod( cb, originaldiv, cell, this.$node );

            window._lyteUiUtils.appendChild( __doc.body, originaldiv, { referenceNode : this.$node } );
            this._moved = true;
        }

        sortmousemove(ev, allowAtSame, isRightEdge) {
            if( !this.isSortEnabled() ){
                return;
            }

            var evt = ev,
            ww = this._ww,
            // maybe the rtlfunc needs a better name ==> its a old function can't change its name right now
            clientX = this.rtlfunc( 'clientX', evt, ww ),
            left = this.rtlfunc( 'left' ),
            selectedCell = this._elem,
            tbody = this.getTbody(),
            cells = this._cells,

            // don't understand the xoffset == > initial mouse position during mousedown. Increment calculated based on this
            xoffset = this._xoffset,
            preventable = this.data.ltPropPreventTableModify;

            // evt = this.getProperEvent() ==> if touch length is more than one i need to stop the function. if i write this as additional function it again leads to write one more function. Right now i can't write this as a fucntion
            if( /touch/i.test( ev.type ) ){
                if( ev.touches.length > 1 ){
                    return;
                }
                evt = ev.touches[ 0 ];
            }

            if( preventable && !this.isMoved() ){
                this.createFakeColum( selectedCell );
                if( ev.type ){
                    return;
                }
            }

            if( this._prevx == evt.clientX && !allowAtSame ){
                return;
            }

            window.$selectedCell = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( selectedCell );

            if( this.getMethods( 'onBeforeDrag' ) && this.executeMethod( 'onBeforeDrag', selectedCell, $selectedCell.data( 'sortElement' ), ev, this.$node, this._originalIndex, selectedCell._transformedindex ) === false ){
                return;
            }

            this._prevx = evt.clientX;

            var fakeCell = $selectedCell.data( 'sortElement' ),
            // won't div._bcr be present? In one type it wont present
            bcr = preventable ? fakeCell._bcr : selectedCell._bcr,
            increment = ( clientX - this.rtlfunc( 'right', bcr, ww ) - xoffset ),
            is_increment = this.isIncrement( increment, isRightEdge ),
            is_decrement = this.isDecrement( increment, isRightEdge ),

            closestCell = preventable ? this.findFromClosest( evt, selectedCell ) : this.getTd( selectedCell, increment, isRightEdge ),

            closestbcr = closestCell ? closestCell._bcr : {},

            newone, closestCellIndex, 

            scrollLeft = this._originalDiv._sL,

            fact = this._dir ? -1 : 1,

            interchangeprevent, 
            offLeft = 0,
            cb = 'onBeforeInterChange',
            __affectedIndex = this._affectedIndex;

            if( selectedCell == closestCell && !fakeCell ){
                closestCell = undefined;
            }

            if( closestCell && this.isSortEnabled() ){
                closestCellIndex = this.getIndex( closestCell );

                if( closestCellIndex != this._originalIndex || preventable ){
                    var allow = false,
                    close_index = closestCell._transformedindex,
                    transindex = !isNaN( close_index ) ? close_index : closestCellIndex,
                    __limit = this.rtlfunc( 'left', closestbcr, ww ) + closestbcr.width * 0.5,
                    __transformedindex = selectedCell._transformedindex;

                    if( fakeCell && selectedCell == closestCell ){
                        transindex = closestCellIndex;
                    } 
                    
                    if( is_increment ) {
                        if( this.rtlfunc( 'right', bcr, ww ) + increment > __limit ){
                            allow = transindex > __transformedindex;
                        }
                    } else if( is_decrement ){
                        if( this.rtlfunc( 'left', bcr, ww ) + increment < __limit ){
                            allow = transindex < __transformedindex;
                            if( allow && ( closestCell._horizontalIntersectionDiv || {} )._sticked ){
                                allow = false;
                            }
                        }
                    }
                    if( allow ){
                        if( !preventable ){
                            newone = __affectedIndex.indexOf( closestCellIndex ) == -1;
                            if( newone ){
                                offLeft = 0;
                                __affectedIndex.push( closestCellIndex );
                            }
                        }
                    } else {
                        closestCell = undefined;
                    }
                }
            } else {
                closestCell = undefined;
            }
            if( closestCell && this.getMethods( cb ) ){
                interchangeprevent = this.executeMethod( cb, ev, selectedCell, closestCell, this.$node ) === false;
                if( interchangeprevent && newone ){
                    this.$addon.arrayUtils( __affectedIndex, 'removeAt', __affectedIndex.indexOf( closestCellIndex ) );
                }
            }

            if( preventable ){
                ev.type ? ( fakeCell.style.transform = 'translate( ' + ( fakeCell._translateX += ( increment * fact ) ) + 'px,' + fakeCell._translateY + 'px)' ) : void 0;
                if( closestCell && !interchangeprevent ){
                    if( closestCell != selectedCell ){
                       var __fact = 0;
                       if( is_decrement ){
                         __fact = -1;
                       } else if( is_increment ){
                         __fact = 1;
                       }
                       selectedCell._transformedindex += __fact;
                    }
                }
            } else {
                cells.forEach( function( cell, indexVal ){
                    ev.type ? ( cell.style.transform = "translateX(" + ( cell._translateX += ( increment * fact ) ) + "px)" ) : void 0;
                    // if( !this.isSortEnabled() ){
                        cell.classList.add( 'lyteStickyTableColumnMoving' );
                    // }
                    if( closestCell && !interchangeprevent ){
                        var newcell = this.get_nth_cell( cell.parentNode, closestCellIndex ),
                        __fact = 0,
                        ___ns = '_transformedindex';

                        if( newone ){
                            newcell.classList.add( 'lyteStickyTableColumnSortAnimate' );
                            newcell._translateX = 0;
                        }
                        ev.type ? ( newcell.style.transform = "translateX(" + ( newcell._translateX += ( bcr.width * ( this.isIncrement( increment, isRightEdge ) ? -1 : 1 ) * fact ) ) + "px)" ) : void 0;

                        if( newcell[ ___ns ] == undefined ){
                            newcell[ ___ns ] = closestCellIndex;
                        }

                        if( is_decrement ){
                            __fact = 1;
                        } else if( is_increment ){
                            __fact = -1;
                        }

                        newcell[ ___ns ] += __fact;
                        cell[ ___ns ] -= __fact
                    }
                }.bind( this ));
            }

            if( fakeCell ){
                var __fakecell = fakeCell._bcr;

                __fakecell.left += ( increment* fact );
                __fakecell.right += ( increment * fact );
            } else {
                var __selected_bcr = selectedCell._bcr;

                __selected_bcr.left += ( increment * fact );
                __selected_bcr.right += ( increment * fact );
                if( closestCell && !interchangeprevent ){
                    var close_bcr = closestCell._bcr;

                    close_bcr.left += ( bcr.width * ( is_increment ? -1 : 1 ) * fact );
                    close_bcr.right += ( bcr.width * ( is_decrement ? -1 : 1 ) * fact );
                }
            }
            this.clearFastdom();

            this.sorthorizontalscroll( { left : bcr.left, width : bcr.width, right :  bcr.right }, scrollLeft, is_increment );

            if( closestCell ){
                this.callInterChange( ev, selectedCell, closestCell );
            }
            this.callDrag( selectedCell, ev );
            this._moved = true;
        }

        callInterChange(ev, selectedCell, closestCell) {
            this.execute( 'onInterChange', ev, selectedCell, closestCell, this.$node );
        }

        callDrag(selectedCell, ev) {
            this.execute( 'onDrag', selectedCell, _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( selectedCell ).data( 'sortElement' ), ev, this.$node, this._originalIndex, selectedCell._transformedindex );
        }

        clearFastdom() {
            var fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom);
            fastdom.clear( this._reqId );
            fastdom.clear( this._measure );
            delete this._measure;
            delete this._reqId;
        }

        sorthorizontalscroll(bcr, scrollLeft, isIncrement) {
            var left = this.rtlfunc( 'left' ),
            ww = this._ww,
            _scrolldivBcr = this._scrolldivBcr,
            _scrollwidth = this._scrollwidth,
            _thisBccr = this._thisBccr,
            _originalDiv = this._originalDiv,
            _FF = this._FF,
            _dir = this._dir,
            _chrome = this._chrome,
            _isSafari = this._isSafari,
            isLeft = !isIncrement && ( this.rtlfunc( 'left', bcr, ww ) < Math.max( this._fixedWidth + this.rtlfunc( 'left', _scrolldivBcr, ww ), 0 ) ),
            isRight = isIncrement && ( ( this.rtlfunc( 'left', bcr, ww ) + bcr.width ) > Math.min( this.rtlfunc( 'right', _scrolldivBcr, ww ), ww ) ),
            selectedCell = this._elem;

            if( _FF && isRight ){
                // is this like checking if currentEndIndex is on the last node? == > firefox behaves weirdly. If we keep moving scrollwidth gradully increases. So if it reaches its end i am returning false

                if( selectedCell._transformedindex == this.get_children( selectedCell.parentNode ).length - 1 ){
                    if( _dir ){
                         // why scrollwidth + scrollleft <= widthofscrolldiv? - Firefox rtl behaviour
                         if( _scrollwidth + window.sL <= _thisBccr.width ){
                            return;
                        }
                    } if( window.sL + _thisBccr.width >= _scrollwidth ){
                        return;
                    }
                }
            }

            var value;

            if( isLeft ){
                value = scrollLeft - this.getCrctScrollValue();
                if( _dir ){
                    if( _chrome ){
                        // why does this Math.min need to be taken ==> In Rtl scrollLeft value will be lower than initial value. Setting Higher value change its scroll width value automatically in rtl
                        value = Math.min( value, _scrollwidth - _scrolldivBcr.width );
                    } else if( _FF || _isSafari ){
                        value = Math.min( value, 0 );
                    }
                } else {
                    value = Math.max( value, 0 );
                }
            } else if( isRight ){
                value = scrollLeft + this.getCrctScrollValue();
                if( _dir ){
                    if( _chrome ){
                        value = Math.max( value, 0 );
                        isRight = value != 0;
                    } else if( _FF || _isSafari ){
                        value = Math.max( value, _scrolldivBcr.width - _scrollwidth );
                        isRight = value != _scrolldivBcr.width - _scrollwidth;
                    } else {
                        value = Math.min( value, _scrollwidth - _scrolldivBcr.width ); 
                        isRight = value != _scrollwidth - _scrolldivBcr.width;
                    }
                } else {
                    value = Math.min( value, _scrollwidth - _scrolldivBcr.width );
                }
            } else {
                this.clearFastdom();
            } 
            if( isLeft || isRight ){
                _originalDiv.scrollLeft = value;
                var headerCells = Array.from( this.get_children( selectedCell.parentNode ) ),
                scrollIncrement = value - scrollLeft

                if( scrollIncrement ){

                    // why (value - sL) === > Updating my reference value without dom measure
                    _originalDiv._sL += scrollIncrement;

                    headerCells.forEach( cell => {
                        cell._bcr.left -= scrollIncrement;
                        cell._bcr.right -= scrollIncrement;
                    });

                    var fastdom = (_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default().fastdom);

                    this._measure = fastdom.measure( () => {
                        delete this._measure;
                        this._reqId = fastdom.mutate( () => {
                            delete this._reqId;
                            this.sortmousemove( { clientX : this._prevx }, true, isRight );
                        });
                    });
                }
             }
        }

        getCrctScrollValue() {
            return this.data.ltPropScrollStep * ( this._dir ? -1 : 1 );
        }

        swapColumnsInData(header, startIndex, endIndex) {
            var La = this.$addon.arrayUtils,
            current = La( header, 'removeAt', startIndex );
            La( header, 'insertAt', endIndex, current );
        }

        swapColumnsInDom(startIndex, endIndex) {
            this._preventCustomdelete = true;

            var rows = Array.from( this.getRows() );

            rows.forEach( row => {
                this.$component[ startIndex < endIndex ? 'insertAfter' : 'insertBefore' ]( this.get_nth_cell( row, endIndex ), this.get_nth_cell( row, startIndex ) );
            });
            delete this._preventCustomdelete;
        }

        removeEvents(evt) {
            var isTch = /touch/i.test( evt.type ),
            rel = 'removeEventListener',
            __doc = document;

            __doc[ rel ]( isTch ? 'touchmove' : 'mousemove', this._sortmousemove, true );
            __doc[ rel ]( isTch ? 'touchend' : 'mouseup', this._sortmouseup, true );

            delete this._sortmouseup; 
            delete this._sortmousemove; 
        }

        clearVariables() {
            delete this._elem; 
            delete this._xoffset; 
            delete this._originalIndex; 
            delete this._moved;
            delete this._affectedIndex; 
            delete this._tbody;
            delete this._cells; 
            delete this._prevx; 
            delete this._scrolldivBcr; 
            delete this._ww; 
            delete this._scrollwidth;
            delete this._originalDiv;
        }

        sortmouseup(evt) {
            var startIndex = this._originalIndex,
            selectedCell = this._elem,
            endIndex = selectedCell._transformedindex;

            this.resetcells();
            if( this.isSortEnabled() ){
                var failed,
                header = this.getData( 'ltPropHeader' ),
                __row = selectedCell.parentNode,
                next = this.get_nth_cell( __row, endIndex ),
                cb = "onBeforeDrop",
                failed = this.getMethods( cb ) && this.executeMethod( cb, selectedCell, next, startIndex, endIndex, header, evt ) == false;

                if( !failed && startIndex != endIndex ){
                    if( header.length ){
                        this.swapColumnsInData( header, startIndex, endIndex );
                    } else {
                        this.swapColumnsInDom( startIndex, endIndex );
                    }
                }
                this._setLeftForInterSection();

                if( this.data.ltPropRole ){
                    var __cur_cell = this.get_nth_cell( __row, endIndex );
                    if( __cur_cell ){
                        __cur_cell.focus();
                    }
                }

                !failed && this.callDrop( selectedCell, next, startIndex, endIndex, header, evt )
            } else {
                // Is onRelease a callback which gets fired when the element has not been moved? This sounds like a very special case callback. I want to know more about the use case of this

                // Generally all are adding some class to selected element in mousedown and want to remove the same in mouseup. If its not moved those classes will not be removed( or they have to write that in first mousemove ). In my case too i need to call reset cells. Thats why i here provided one extra callback
                this.callRelease( evt, selectedCell )
                this.data.ltPropRole && selectedCell.focus({
                    preventScroll : true
                });
            }

            this.removeEvents( evt );
            this.clearFastdom();
            this.clearVariables();

            this.$node.classList.remove( 'lyteTableSortSelected' );
        }

        removeFakeCell(selectedCell) {
            var $node = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( selectedCell ),
            ns = 'sortElement',
            div = $node.data( ns );
            if( div ){
              div.remove();
              _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( div ).data( 'relatedElement', void 0 );
            }
            $node.data( ns, void 0 );
        }

        resetcells(cells) {
            var affected = this._affectedIndex,
            cells = this._cells,
            selectedCell = this._elem;

            if( this.data.ltPropPreventTableModify ){
                this.removeFakeCell( selectedCell );
                this.resetSingleCell( selectedCell );
            } else {
                cells.forEach( function( cell ){
                    var rowChildren = this.get_children( cell.parentNode );
                    this.resetSingleCell( cell );
                     affected.forEach( function( affIndex ){
                        this.resetSingleCell( rowChildren[ affIndex ] );
                    }.bind( this ) );
                }.bind( this ) );
            }
        }

        resetSingleCell(cell) {                
            cell.style.transform = "";
            cell.classList.remove( 'lyteStickyTableColumnSortSelect', 'lyteStickyTableColumnMoving', 'lyteStickyTableColumnSortAnimate' );
            delete cell._transformedindex;
            delete cell._translateX;
        }

        checkIntersection(arg, ignore_removal) {
            var table = this.__table,
            __this = table.component;

            if( table.ltProp( 'stickyTable' ) && __this.data.ltPropScroll.horizontal ){
                var __elem = this._horizontalIntersectionDiv;
                if( arg && !__elem ){
                    __this.createIntersection.call( this, table );
                } else if( !arg && __elem ){
                    var intersection = __elem;
                    __this.removeIntersection.call( this, intersection, table );
                    __this.removeSticky( this );
                    __this.removeFixedClass( this );

                    if( ignore_removal ){
                        __this.createIntersection.call( this, table );
                    }
                }
            }
        }

        createIntersection(table) {
            var div = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( document.createElement( 'div' ) ).addClass( 'lyteIntersectionDiv' ).get( 0 );
            table.getElementsByTagName( table.ltProp( 'tags' ).table )[ 0 ].appendChild( div );
            this._horizontalIntersectionDiv = div;
            div._cell = this;
            table.component._setLeftForInterSection();
        }

        disconnectedCallback() {
            var intersection = this._horizontalIntersectionDiv;
            if( intersection ){
                var table = this.__table,
                __this = table.component;

                if( table && __this._preventCustomdelete ){
                    return;
                }
                delete this.__table;
                __this.removeIntersection.call( this, intersection, table );
            }
        }

        removeIntersection(intersection, table) {
            if( table ){
                var ins = table.component._intersectionObs;
                if( ins ){
                    ins.unobserve( intersection );
                }
            }
            intersection.remove();

            if( table && table.getData( 'fromListView' ) ){
                var status = table.getData( 'fixedColumnStatus' );
                objectUtils( status, 'delete', parseInt( intersection._cell.getAttribute( 'index' ) ) );
            }

            delete intersection._cell;
            delete this._horizontalIntersectionDiv;
        }

        cell_intersection(ints) {
            var comp_data = this.data,
            visibleStatus = comp_data.visibleStatus;

            this.$registry.ignoreDisconnect = true;

            ints.forEach( function( item ){
                var cell = item.target, 
                is_visible = !!item.intersectionRatio,
                row = cell.parentNode;

                if( !row ){
                    return;
                }

                var cell_index = Array.from( row.children ).indexOf( cell ),
                row_index = Array.from( row.parentNode.children ).indexOf( row ),
                row_visible = visibleStatus[ row_index ];
                
                cell.__inter_time && clearTimeout( cell.__inter_time );
                if( is_visible ){
                    if( cell.__children ){
                        ( cell.__dummy || [] ).forEach( function( item ){
                            item.remove();
                        });

                        var __frag = new DocumentFragment();

                        cell.__children.forEach( function( item ){
                            __frag.appendChild( item );
                        });
                        cell.appendChild( __frag );
                        delete cell.__children;
                    } else {
                        cell.__dummy = Array.from( cell.childNodes );
                        objectUtils( row_visible, 'add', cell_index, is_visible );
                    }
                } else {
                    if( row_visible[ cell_index ] ){
                        ( cell.__children = Array.from( cell.childNodes ) ).forEach( function( item ){
                            item.remove();
                        });

                        var __frag = new DocumentFragment();
                        ( cell.__dummy || [] ).forEach( function( item ){
                            __frag.appendChild( item );
                        });
                        cell.appendChild( __frag );
                    } 
                }
            }); 
            this.$registry.ignoreDisconnect = false;
        }

        reset_visible() {
            var __obj = {},
            __data = this.data;

            __data.visibleStatus =  __obj;

            __data.ltPropContent.forEach( function( _, index ){
                __obj[ index ] = {};
            } );
        }

        visible_obs(arg) {
            var __index = arg.index,
            __data = this.data,
            removed_items = arg.removedItems || [],
            removed_len = removed_items.length,
            visibleStatus = __data.visibleStatus,
            inserted_items = arg.insertedItems || [],
            inserted_len = inserted_items.length,
            len = Object.keys( visibleStatus ).length;

            /**
             * This point may fail for others. as of now for crm split listview its not needed.
             */

            if( removed_len ){
                for( var i = removed_len - 1; i >= 0; i-- ){
                    var cur_index = __index + i;
                    objectUtils( visibleStatus, 'delete', cur_index );
                    
                    for( var j = cur_index; j < len; j++ ){
                        objectUtils( visibleStatus, 'add', j, visibleStatus[ j + 1 ] );
                    }
                    objectUtils( visibleStatus, 'delete', len - 1 );
                }
            }

            if( inserted_len ){
                for( var i = 0; i < inserted_len; i++ ){
                    var cur_index = __index + i;
                    for( var j = cur_index; j < len; j++ ){
                        objectUtils( visibleStatus, 'add', j + 1, visibleStatus[ j ] );
                    }
                    objectUtils( visibleStatus, 'add', cur_index, {} );
                }
            }

            if( arg.type == "change" ){
                this.reset_visible();
            }
        }

        removeCellInter(index) {
            var rows = Array.from( this.$node.getElementsByTagName( 'lyte-tr' ) );

            rows.forEach( function( row ){
                var cell = this.get_nth_cell( row, index );
                cell && this.__cell_inter.unobserve( cell );
            }.bind( this ) ); 
        }

        static observers(arg1) {
            return Object.assign(super.observers(Object.assign(super.observers({
                stickyTable : function(){
                    var __this = this,
                    __data = __this.data;

                    if( __data.ltPropStickyTable ){
                        var $node = __this.$node,
                        scroll = __data.ltPropScroll,
                        scrollDiv = __this.getScrollDiv();

                        __this.__mixinAdded = true;
                        $node.classList.add( 'lyteStickyTable' );

                        if( scroll.horizontal ){
                            __this.registerInterSection( scrollDiv );
                            scrollDiv.addEventListener( 'scroll', __this.stickyScroll.bind( __this ), true );
                        }

                       $node.reset = function(){
                            __this._setLeftForInterSection( true );
                            if( !__this.__from_collapse ){
                                __this.update_collapse( true );
                            }
                       }.bind( __this );

                        __this.detectBrowsers();
                    }
                }.on( 'didConnect' ),

                setLeftForInterSection : function(){
                    if( this.data.ltPropStickyTable ){ 
                        this.$node.reset();
                    }
                }.observes( 'ltPropContent.[]', 'ltPropHeader.[]', 'ltPropContent', 'ltPropHeader' ).on( 'didConnect' ),

                bindingEvts : function(){
                   var data = this.data;

                   if( !data.ltPropStickyTable ){
                       return;
                   }

                   var header = this.getThead();
                   if( header ){
                       var fn,
                       ns = "addEventListener";
                       if( data.ltPropColumnSortable ){
                           fn = ( this._sortmousedown = this.sortablemousedown.bind( this ) );
                       } else {
                            if( fn = this._sortmousedown ){
                               ns = "removeEventListener";
                               delete this._sortmousedown;
                           }
                       }
                       if( fn ){
                           header[ ns ]( 'mousedown', fn, true );
                           header[ ns ]( 'touchstart', fn, true );
                       }
                   }

               }.observes( 'ltPropColumnSortable' ).on( 'didConnect' )
            }), arg1)), arg1);
        }

        _() {
            _;
        }
    }

    return overrides(_LyteTableUtilsMixin);
});

LyteTableUtilsMixin.register({
    hash: "LyteTableUtilsMixin_4",
    refHash: "@zoho/lyte-ui-component_3"
});




/***/ }),

/***/ 16206309:
/*!************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/plugins/lyte-scrollbar.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;( function( cb ){
	if( true ){
		  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! @zoho/lyte-dom */ 52000102) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (cb),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {}
} )( function( $L ){
   if( $L ) {
        var uA = navigator.userAgent, isSaf =  { uA : uA, isUbuntu : /ubuntu/ig.test( uA ), isIpad : /ipad/ig.test( uA ) , safari : /safari/ig.test( uA ), isIE11Lyte : /rv:11/ig.test( uA ), isEdgeLyte : /Edge/ig.test( uA ),  mode : {}, chrome  : !!window.chrome , firefox : /firefox/ig.test( uA ) };
        function appendDiv( className, obj, dir, is_parent ) {
            var div = document.createElement( 'div' ), 
            innerDiv,
            wrap = this;

            div.className = className;
            div._scrolldiv = this;
            div.style.visibility = 'hidden';
            innerDiv = document.createElement( 'div' );
            innerDiv.classList.add( 'lyteScrollDiv' );
            if( obj.handlerClass ) {
                innerDiv.classList.add( obj.handlerClass );
            }
            if( obj.containerClass ) {
                div.classList.add( obj.containerClass )
            }

            if( obj.aria ){
                $L( div ).attr({
                    role : "scrollbar",
                    "aria-orientation" : dir ? "horizontal" : "vertical",
                    "aria-controls" : this.id,
                    "aria-live" : "assertive",
                    tabindex : Math.max( this.tabIndex, obj.tabIndex || 0 )
                }).on( "blur", function( evt ){
                    var rel = evt.relatedTarget;

                    if( document.activeElement == document.body && !rel && !$L( this ).hasClass( "visible" ) ){
                        wrap.focus({
                            preventScroll : true
                        });
                    }
                });
            }

            div.appendChild(innerDiv);
            if( dir ) {
                innerDiv._direction = dir;
                if( obj.horizontalContainerClass ){
                    div.classList.add( obj.horizontalContainerClass );
                }
                if( obj.horizontalHandlerClass ) {
                    innerDiv.classList.add( obj.horizontalHandlerClass );
                }
                this._horiDiv = div;
            } else {
                if( obj.verticalContainerClass  ) {
                    div.classList.add( obj.verticalContainerClass );
                }
                if( obj.verticalHandlerClass ){
                    innerDiv.classList.add( obj.verticalHandlerClass );
                }
                this._vertDiv = div;
            }

            ( is_parent ? this.parentElement : this ).appendChild( div )
            
            div.addEventListener( 'click', outerDivClick, true );
            innerDiv.addEventListener( 'mousedown', innerDivClick );
            if( !this._infiniteScroll ){        
                innerDiv.addEventListener( 'touchstart', innerDivClick );       
            }
            return div;
        }   

        function bcr_cal( elem ){
            var bcr = elem.getBoundingClientRect(),
            off_wid = elem.offsetWidth,
            off_height = elem.offsetHeight,
            measured_width = bcr.width,
            measured_height = bcr.height,
            net_width_diff = off_wid - Math.round( measured_width ),
            net_height_diff = off_height - Math.round( measured_height ),
            scale_x = measured_width / off_wid,
            scale_y = measured_height / off_height;

            var obj =  {
                left : bcr.left - net_width_diff,
                right : bcr.right + net_width_diff,
                top : bcr.top - net_height_diff,
                bottom : bcr.bottom + net_height_diff,
                width : off_wid,
                height : off_height,
                measuredWidth : measured_width,
                measuredHeight : measured_height,
                scaleX : scale_x,
                scaleY : scale_y,
                bcr : bcr
            };

            obj.x = obj.left;
            obj.y = obj.top;

            return obj;
        }

        function set( elem, prop, val ) {
            if( elem.style[ prop ] != val ){
                elem.style[ prop ] = val
            }
        }

        function checkscrollable( evt ){
            evt = evt || { target : this };
            var target = evt.target.correspondingElement || evt.target, ret;

            if( target.closest( '.lyteConnectWrapper.preventWheel' ) ){
                return true;
            }
            
            while( target && target != this ) {
                if( target.classList.contains( 'preventWheel' ) ) {
                    ret = true;
                    break;
                }
                target = target.parentElement
            }
            return ret
        }

        function check( flag, elem, obj, mode, evt ){
            var fg;
            evt = evt || {};

            var fn = function( elem ){
                set( elem, 'visibility', 'hidden' );
                elem.classList.remove( 'visible' );
            };

            if( !flag.scroll ) {
                var is_showon_scroll = this._scrollData.showOn == 'scroll';
                if( !( [ 'mouseenter', 'touchstart' ].indexOf( evt.type ) != -1 && is_showon_scroll ) ){
                    var from_reset = ( this._enableScroll = !flag.frm_reset ),
                    is_event_added = $L( this ).hasClass( "eventBinded" );

                    if( elem && ( !is_showon_scroll || !flag.frm_reset ) ) {
                        clearTimeout( elem._entertimeout );
                        clearTimeout( elem._leavetimeout );
                        delete elem._entertimeout; delete elem._leavetimeout;
                        if( !flag.scrollbar ){

                            if( !from_reset && !is_event_added ){
                                return;
                            }

                            if( evt.type == "touchstart" ){
                                elem._entertimeout = setTimeout( set.bind( this, elem, 'visibility', 'visible' ), 150 );
                            } else {
                                set( elem, 'visibility', 'visible' );
                            }
                            elem.classList.add( 'visible' );
                            updatePos.call( this, mode, undefined, {}, obj );
                        } else{
                            fn( elem );
                        }
                    }
                }
                fg = true
            } else {
                if( elem ) {
                   fn( elem );
                }
            }
            return fg
        }

        function initialWheel( evt ){
            this.removeEventListener( 'wheel', initialWheel, true )
            if( !this.classList.contains( 'eventBinded' ) ){
                var close_connect = this.closest( "lyte-connect" );
                if( !close_connect ){
                    mouseenter.call( this, { type : 'mouseenter' } );
                }
            }
            evt.preventDefault()
        }

        function format_bcr( bcr ){
            var obj = {};
            [ 'x', 'y', 'bottom', 'height', 'top', 'width', 'left', 'right' ].forEach( function( item ){
                obj[ item ] = Math.round( bcr[ item ] );
            });
            return obj;
        }

        function mouseenter( evt, frm_reset ) {
            // console.log( evt.target, evt.type, evt.currentTarget );
            if( this.classList.contains( 'eventBinded' ) && evt != true ){
                return
            }
            if( evt.type == 'mouseenter' && this._prtmseenr ){
                return;
            }
            var flag, 
            obj = { scrollLeft : Math.round( this.scrollLeft ), scrollTop : Math.round( this.scrollTop ), scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : format_bcr( bcr_cal( this ) ) },
            scrolldata = this._scrollData;

            this._wheelObj = obj
            if( this.classList.contains( 'lyteTableScroll' ) ){
                forTable.call( this, obj )
            }
            this._direction = getComputedStyle(  this ).direction;
            obj.vertbcr = this._vertDiv ?  bcr_cal( this._vertDiv ) : {}
            obj.horbcr = this._horiDiv ?  bcr_cal( this._horiDiv ) : {}
            flag = check.call( this, fitForScroll.call( this, true, obj, frm_reset ), this._vertDiv, obj, true, evt )
            flag = check.call( this, fitForScroll.call( this, false, obj, frm_reset ), this._horiDiv, obj, false, evt ) || flag
            if( flag && evt ) {
                this._mouseleave = this._mouseleave || mouseleave.bind( scrolldata.appendTo == "parent" ? this.parentElement : this );
                if( evt.type == "touchstart" ) {
                   if( evt.touches.length == 1 ){
                        clearTimeout( this._tchtime );
                        document[ "addEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" ) ]( 'touchcancel', this._mouseleave, true )
                    } else {
                        return;
                    }
                } else {
                    this.addEventListener( 'wheel', wheelEvent, true );
                    this.addEventListener('keydown', keydownFunc, true);
                    if( this._scrollData.showOn == 'scroll' ){
                        this.addEventListener( 'mousemove', hideScrollbar, true );
                    }
                }
                this._allowTouch = true;
                document[ "addEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" ) ]( 'touchend', this._mouseleave, true )
                this.classList.add( 'eventBinded' )
                this._tabindex = this._tabindex == undefined ? this.tabIndex : this._tabindex;
                if(this.tabIndex == -1){
                    this.tabIndex = scrolldata.tabIndex || 0;
                }
            }
        } 

        function keydownFunc( evt ) {
            var __target = evt.target,
            $target = $L( __target ),
            is_bar = $target.hasClass( "lyteScrollContainer" ),
            is_vertical = is_bar ? $target.hasClass( 'lyteScrollContainerY' ) : void 0;

            if( !( __target == this || is_bar ) ){
                return
            }

            var key = evt.key,
            elem = this,
            sL =  Math.round( elem.scrollLeft ),
            sT = Math.round( elem.scrollTop ),
            wd = elem.offsetWidth,
            hgt = elem.offsetHeight,
            s_wd = elem.scrollWidth,
            s_hgt = elem.scrollHeight,
            obj = { 
                scrollLeft : sL, 
                scrollTop : sT, 
                scrollWidth : s_wd, 
                scrollHeight : s_hgt, 
                bcr : bcr_cal( elem ) 
            },
            step = this._scrollData.keyStep,
            dir = this._direction == 'rtl',
            pos,
            mode,
            __new,
            is_negative = dir && ( !_lyteUiUtils || _lyteUiUtils.isNegativeScroll() ),
            meta = evt.metaKey || evt.ctrlKey;

            switch( key ){
                case "ArrowLeft" : {
                    mode = false;

                    if( meta ){
                        if( dir ){
                            if( is_negative ){
                                __new = wd - s_wd;
                            } else {
                                __new = s_wd - wd;
                            }
                        } else {
                            __new = 0;
                        }
                    } else {
                        if( dir && is_negative ){
                            dir = false;
                        }
                        __new = sL - step * ( dir ? -1 : 1 );
                    }

                    if( is_bar && is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "ArrowRight" : {
                    mode = false;
                    
                    if( meta ){
                        if( dir ){
                            if( is_negative ){
                                __new = 0;
                            } else {
                                __new = wd - s_wd;
                            }
                        } else {
                            __new = s_wd - wd;
                        }
                    } else {
                        if( dir && is_negative ){
                            dir = false;
                        }
                        __new = sL + step * ( dir ? -1 : 1 );
                    }
                    if( is_bar && is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "ArrowDown" : {
                    __new = Math.min( sT + step, s_hgt - hgt );
                    mode = true;

                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "ArrowUp" : {
                    __new = Math.max( 0, sT - step );
                    mode = true;
                    
                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "PageDown" : {
                    __new = Math.min( sT + hgt, s_hgt - hgt );
                    mode = true;

                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "PageUp" : {
                    __new = Math.max( sT - hgt, 0 );
                    mode = true;

                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "Home" : {
                    __new = 0;
                    mode = true;
                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
                case "End" : {
                    __new = s_hgt - hgt;
                    mode = true;
                    if( is_bar && !is_vertical ){
                        mode = void 0;
                    }
                }
                break;
            }

            if( mode != void 0 && shouldPrevent.call( elem, obj, mode, __new - ( mode ? sT : sL ) ) ){
                elem[ mode ? 'scrollTop' : 'scrollLeft' ] = __new;
                scroll.call( elem, evt )
                evt.preventDefault();
            }
        }

        function mouseleave( evt ){
            evt = evt || {};
            if( ( evt.relatedTarget && this.contains( evt.relatedTarget ) ) || _lyteUiUtils._scrollmouseup ){
                return
            }
            if( evt.type == 'touchend' ) {     
                var tar = evt.target.correspondingElement || evt.target;        
                if( tar && tar.classList.contains( 'lyteScrollContainer' ) ) {      
                    return;     
                }       
            }
            var bars = $L( this ).children( '.lyteScrollContainer' ), scrlDiv = this._scrolldiv || this;
            if( bars.length ) {
                for(  var i = 0; i < bars.length; i++ ) {
                    var __cur_bar = bars[ i ];

                    clearTimeout( __cur_bar._entertimeout );
                    clearTimeout( __cur_bar._leavetimeout );
                    delete __cur_bar._entertimeout;
                    delete __cur_bar._leavetimeout;

                    __cur_bar.classList.remove( 'visible' )
                    if( evt.type == 'touchend' ){
                        __cur_bar._leavetimeout = setTimeout( set.bind( this, __cur_bar, 'visibility', 'hidden'), 150 )
                    } else {
                        __cur_bar.style.visibility = 'hidden';
                    }
                }
                if( evt.type == 'mouseleave' ) {
                    scrlDiv.removeEventListener('wheel', wheelEvent, true);
                    scrlDiv.removeEventListener('keydown', keydownFunc, true);
                    scrlDiv.removeEventListener( 'mousemove', hideScrollbar, true );
                    scrlDiv.addEventListener( 'wheel', initialWheel, true );
                } else if( evt.type == 'touchend' || evt.type == "touchcancel" ) {
                    scrlDiv._prtmseenr = true;
                    scrlDiv._tchtime = setTimeout( function(){
                        delete scrlDiv._prtmseenr;
                    }, 500 )
                    document[ "removeEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" ) ]( 'touchcancel', scrlDiv._mouseleave, true )
                }
                if( evt.type ){
                    document[ "removeEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" ) ]( 'touchend', scrlDiv._mouseleave, true )
                    delete scrlDiv._allowTouch;
                    scrlDiv.classList.remove( 'eventBinded' );
                    // scrlDiv.tabIndex = this._scrolldiv._tabindex;
                    // delete scrlDiv._tabindex;
                     delete scrlDiv._wheelObj;
                    delete scrlDiv._prevPosY; delete scrlDiv._mouseleave;
                    delete scrlDiv._prevPosX; delete scrlDiv._wheelEvt;
                }
                delete scrlDiv._enableScroll;
            }
        }

        function outerDivClick( evt ) {
            if( !this.classList.contains( 'visible' ) ){
                return
            }
            var isTch = evt.type == "touchmove";       
            if( isTch ) {       
                if( evt.touches.length > 1 ){       
                    return;     
                } else {        
                    evt.preventDefault();       
                    evt = evt.touches[ 0 ]      
                }       
            }       
            var elem = this._scrolldiv, mode, inn = this.children[ 0 ], outBcr = bcr_cal( this ), inBcr = bcr_cal( inn ),
            obj = { scrollLeft : Math.round( elem.scrollLeft ), scrollTop : Math.round( elem.scrollTop ), scrollWidth : elem.scrollWidth, scrollHeight : elem.scrollHeight, bcr : bcr_cal( elem ) },
            hgt = 'width', top1 = 'left', sT = 'scrollLeft', sH = 'scrollWidth', bt = 'right', cY = 'clientX';
            if( this.classList.contains( 'lyteTableScroll' ) && !obj.$nodeClient ){
                forTable.call( this, obj )
            }
            obj.vertbcr = this._vertDiv ?  bcr_cal( this._vertDiv ) : {}
            obj.horbcr = this._vertDiv ?  bcr_cal( this._horiDiv ) : {}
            if(!inn._direction){
                mode = true;
                hgt = 'height', top1 = 'top', sT = 'scrollTop', sH = 'scrollHeight', bt = 'bottom', cY = 'clientY';
            }
            var scramt = evt.type != 'click' ? ( evt[ cY ] - ( this.prev || evt[ cY ] ) ) : ( evt[ cY ] - ( inBcr[ top1 ] + inBcr[ hgt ] / 2 ) ), newsL;
            newsL = ( scramt / ( obj.bcr[ hgt ] + obj.bcr[ top1 ] - outBcr[ top1 ] ) * obj[ sH ] )
            elem[ sT ] += ( newsL ) ;
            scroll.call( elem, evt );
            this.prev = evt[ cY ];
        }

        function innerDivClick( evt ) {

           if( evt.button == 2 ){
              return;
           }

           var isTch = evt.type == "touchstart",
           __parentNode = this.parentNode,
           __document = document,
           ael = 'addEventListener';

           if( _lyteUiUtils.isWidget ){
                ael += "Global";
           }

            __document[ ael ]( isTch ? 'touchmove' : 'mousemove', _lyteUiUtils._scrollmousemove = outerDivClick.bind( __parentNode ), true );
            __document[ ael ]( isTch ? 'touchend' : 'mouseup', _lyteUiUtils._scrollmouseup = mouseup.bind( __parentNode ), true );

            evt.preventDefault();
            evt.stopPropagation();
        }

        function mouseup( evt ) {
            var isTch = evt.type == "touchend",
            __document = document,
            rel = "removeEventListener",
            scroll_elem = this._scrolldiv || this,
            target = evt.target,
            scrolldata = scroll_elem._scrollData;

            if( _lyteUiUtils.isWidget ){
                rel += "Global";
            }

            __document[ rel ]( isTch ? 'touchmove' : 'mousemove', _lyteUiUtils._scrollmousemove, true );
            __document[ rel ]( isTch ? 'touchend' : 'mouseup', _lyteUiUtils._scrollmouseup, true );

            delete _lyteUiUtils._scrollmousemove;
            delete _lyteUiUtils._scrollmouseup; 
            delete this.prev;

            if( !scroll_elem.contains( target.correspondingElement || target ) && scrolldata.showOn != 'always' ){
                mouseleave.call( scrolldata.appendTo == "parent" ? scroll_elem.parentNode : scroll_elem , { type : 'mouseleave' } );
            }
        }

        function mousedown( evt ) {

            if( evt.button == 2 ){
                return;
            }

            var scrolldata = this._scrollData,
            __document = document;

            if( _lyteUiUtils._scrollmouseup ) {
                return
            }
            __document[ "addEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" ) ]( 'mouseup', _lyteUiUtils._scrollmouseup = mouseup.bind( scrolldata.appendTo == "parent" ? this.parentElement : this ), true )
        }

        function fitForScroll( mode, obj, frm_reset ) {
            var sL = 'scrollTop', sW = 'scrollHeight', wd = 'height', elem = mode ? this._vertDiv : this._horiDiv,
            scrolldata = this._scrollData,
            margin = scrolldata.scrollYMarginOffset;

            if( !mode ) {
                sL = 'scrollLeft', sW = 'scrollWidth', wd = 'width';
                margin = scrolldata.scrollXMarginOffset;
            }
            if( obj[ sL ] + obj.bcr[ wd ] >= obj[ sW ] && obj[ sL ] == 0 ){
                if( elem && elem.classList.contains( 'visible' ) ) {
                    check.call( this, { scroll : true, scrollbar : true }, elem )
                }
                return {
                    scroll : true,
                    scrollbar : true,
                    frm_reset : frm_reset
                }
            }

            return{
                scroll : false,
                scrollbar : ( obj[ sW ] - obj.bcr[ wd ] ) <= margin,
                frm_reset : frm_reset
            }
        }

        function wheelEvent( evt ){
            if( evt.ctrlKey ){
                return;
            }

            if( checkscrollable.call( this, evt ) ) {
                return;
            }

            if( evt.type == 'touchmove' ) { 
                if( this._allowTouch && evt.touches.length == 1 ) {
                    var curr = evt.touches[ 0 ];
                    wheelEvent1.call( this, evt, [ (this._prevPosX || curr.clientX ) - curr.clientX,  ( this._prevPosY || curr.clientY ) - curr.clientY ] )
                    this._prevPosY = curr.clientY;
                    this._prevPosX = curr.clientX;
                }
            } else {   
                wheelEvent1.call( this, evt )
            }
        }

        function shouldPrevent( obj, mode, val ){
            var sL = 'scrollTop', sW = 'scrollHeight', wd = 'height', elem = mode ? this._vertDiv : this._horiDiv;
            if( !mode ) {
                sL = 'scrollLeft';
                sW = 'scrollWidth';
                wd = 'width';
            }

            if( mode ){
                if( ( val > 0 && Math.round( obj[ sL ] + obj.bcr[ wd ] ) >= obj[ sW ] ) || ( val < 0 && obj[ sL ] == 0 ) ){
                    return false
                }
            } else {
                if( ( val > 0 && Math.round( obj[ sL ] + obj.bcr[ wd ] ) >= obj[ sW ] ) || ( val < 0 && Math.round( -obj[ sL ] + obj.bcr[ wd ] ) >= obj[ sW ] ) ){
                    return false
                } else if( !mode && isSaf.firefox && this._direction == 'rtl' && ( val < 0 && obj[ sL ] == 0 ) ){
                    return true
                } else if( ( val < 0 && obj[ sL ] == 0 ) && !( val < 0 && isSaf.safari && this._direction == 'rtl' && obj[ sL ] == 0 ) ){
                    return false;
                }
            }
            return true
        }

        function getWheel( evt ) {
            var data = this._scrollData, min = data.min, max = data.max,
            fact1 = data.wheelSpeed, fact = fact1, uA = isSaf.uA.toLowerCase(), inf = this._infiniteScroll, ie = isSaf.isIE11Lyte;
            if( ( uA.indexOf('edge') != -1 || (( uA.indexOf('trident') != -1 || uA.indexOf('msie') != -1)) ) && this._direction == 'rtl' ){
                fact1 *= -1
            }
            // if( evt.shiftKey ) {
            //     fact1 *= -1; fact *= -1; 
            // }
            var x, 
            y, 
            delta = evt.deltaMode && evt.deltaMode == 1,
            __deltaX = evt.deltaX,
            __deltaY = evt.deltaY;

            if( evt.shiftKey ){
                var __temp = __deltaX;
                __deltaX = __deltaY;
                __deltaY = __temp;
            }

            if( __deltaX > 0 ) {
                x = Math.max( delta ? ( __deltaX * 6 ) :  __deltaX, (inf ? 0 : 4 ) )
            } else if( __deltaX < 0 ) {
                x = Math.min( inf ? 0 : -4, delta ? ( __deltaX * 6 ) : __deltaX )
            }
            if( __deltaY > 0 ) {
                y = Math.min( max, Math.max( delta ? ( __deltaY * 6 ) : __deltaY, inf ? 0 : 4 ), ie ? 20 : Infinity );
            } else if( __deltaY < 0 ) {
                y = Math.max( min, Math.min( inf ? 0 : -4, delta ? ( __deltaY * 6 ) : __deltaY ), ie ? -20 : -Infinity );
            }
            return [ x * fact1, y * fact ]
        }

        function nestedScroll( evt, ret ){  
            var target = evt.target;
            while( target != this ) {
                var sT = Math.round( target.scrollTop ),
                sH = target.scrollHeight,
                oH = target.offsetHeight,
                compsty = getComputedStyle( target ),
                isMatch = ( /scroll|auto/i.test( compsty.overflowY ) || ( target.classList.contains( 'lyteScrollBar' ) && /hidden/i.test( compsty.overflowY  ) ) );


                if( oH < sH  ){
                    if( ret ){
                        if( oH + sT < sH && isMatch ){
                            return true;
                        }
                    } else {
                        if( sT && isMatch ){
                            return true;
                        }
                    }
                }
                target = target.parentNode;
            }
        }

        function wheelEvent1( evt, tch ) {            
            var ret = tch || getWheel.call( this, evt );
            var a = ret[ 0 ] || 0, 
            b = ret[ 1 ] || 0, 
            mode = false, 
            obj = this._wheelObj || {} , 
            fit, 
            stpre, 
            isTable = this.classList.contains( 'lyteTableScroll' ),
            __deltaX = evt.deltaX,
            __deltaY = evt.deltaY,
            scrolldata = this._scrollData;

            if( evt.shiftKey ){
                var __temp = __deltaX;
                __deltaX = __deltaY;
                __deltaY = __temp;
            }

            if( Math.abs( tch ? a : ( __deltaX || 0 ) ) <= Math.abs( tch ? b : ( __deltaY || 0 ) ) ) {
                mode = true
            }
            if( scrolldata.nested && mode && nestedScroll.call( this, evt, b > 0 ) ){
                return;
            }

            if( scrolldata.showOn == 'scroll' ){
                if( !this._enableScroll ){
                    mouseenter.call( this, true )
                    evt.preventDefault();
                    return
                }
                clearTimeout( this._scrollplugin )  
                this._scrollplugin = setTimeout(mouseleave.bind( scrolldata.appendTo == "parent" ? this.parentElement : this, {} ), scrolldata.tOut )
            }

            if( this._scrollEnd ) {
                obj= { scrollLeft : Math.round( this.scrollLeft ), scrollTop : Math.round( this.scrollTop ), scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : format_bcr( bcr_cal( this ) ) };
                this._wheelObj = obj
                if( this.classList.contains( 'lyteTableScroll' ) ){
                    forTable.call( this, obj )
                }
            }
            if( this._wheelObj ){
                fit = fitForScroll.call( this, mode, obj );
                if(( fit.scroll && mode /*&& b > 0*/ && (  !this._vertDiv || ( this._vertDiv && !this._vertDiv.classList.contains( 'visible' ) ) ) ) || ( fit.scroll && !mode /*&& a < 0*/ && ( !this._horiDiv || ( this._horiDiv && !this._horiDiv.classList.contains( 'visible' ) ) ) ) ){
                    return
                }
                stpre = shouldPrevent.call( this, obj, mode, mode ? b : a ); 


                var is_inf = this._infiniteScroll && !$L( this ).data( 'noMoreTableData' );

                if( ( is_inf && b > 0 ) || stpre ){
                     evt.preventDefault();
                    if( !stpre && isTable && mode ) {
                        this.comp.scrollTable.call( this.comp, { yScroll : b }, this._wheelObj )
                    }
                } else if( is_inf && !stpre && !fit.scroll && obj.scrollTop == 0 && isTable && mode ){
                    $L.fastdom.clear( this._fdm );
                    this._fdm = $L.fastdom.mutate( function(){
                        this.comp.scrollStartMethod( evt, true );
                    }.bind( this ) );
                }else{
                    if( scrolldata.preventOnEnd ){
                        evt.preventDefault();
                    }
                    return
                }
            }
            if( mode ) {
                if( isSaf.isIE11Lyte ) {
                    if( this._wheelObj ){
                        this._wheelObj.scrollTop = Math.max( Math.min( this._wheelObj.scrollTop + b, this._wheelObj.scrollHeight - this._wheelObj.bcr.height ), 0 )
                        if(  isTable ) {
                            evt.yScroll = b;
                            this.comp.scroll.call( this, evt )
                        }
                        this.scrollTop += b;
                    } 
                } else if( !isSaf.isIE11Lyte ) {
                    this.scrollTop += b;
                }
            } else {
                 if( isSaf.isIE11Lyte ) {
                    if( this._wheelObj ) {
                        this._wheelObj.scrollLeft = Math.max( Math.min( this._wheelObj.scrollLeft + a, this._wheelObj.scrollWidth - this._wheelObj.bcr.width ), 0 )
                        if(  isTable ) {
                            evt.xScroll = a;
                            this.comp.scroll.call( this, evt )
                        }
                        this.scrollLeft += a;
                    }
                } else {
                   this.scrollLeft += a; 
                }
             }   
            if( isSaf.safari || isSaf.isIE11Lyte || isSaf.isIpad ) {
                    this._alive = true;
                    clearTimeout( this._alivetime )
                    this._alivetime = setTimeout( function(){
                       delete this._alive; delete this._alivetime; 
                    }.bind( this ), 16 )
                this._scrollFun.call( this, evt )
            }


            // if( this.comp ){
            //     clearTimeout( this._overlay.time );
            //     !this._overlay.classList.contains( 'lytescrolling' ) && this._overlay.classList.add( 'lytescrolling' );
            //     this._overlay.time = setTimeout( function(){
            //         this._overlay.classList.remove( 'lytescrolling' );
            //         delete this._overlay.time;
            //     }.bind( this ), 250 ) 
            // }
        }

        function scroll( evt ) {
            var a, b, issafIE = isSaf.isIE11Lyte || isSaf.safari || isSaf.isIpad, isIe = isSaf.isIE11Lyte ;
            if( issafIE && evt && evt.type == 'scroll' && ( this._alive && !evt._byFunc ) ) {
                trigEvt.call( this, isSaf.mode.a, isSaf.mode.b, this._wheelObj || { bcr : {} }, evt )
            } else{
                var obj= { scrollLeft : Math.round( this.scrollLeft ), scrollTop : Math.round( this.scrollTop ), scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : bcr_cal( this ) };
                this._wheelObj = obj
                if( this.classList.contains( 'lyteTableScroll' ) ){
                    forTable.call( this, obj )
                }
                if( this.prevScrlLeft != obj.scrollLeft ) {
                    a = obj.scrollLeft - ( this.prevScrlLeft || 0 );
                    b = 0;
                    updatePos.call( this, false, a , evt, obj )
                } 
                if( this.prevScrlTop!= obj.scrollTop ) {
                    b = obj.scrollTop - ( this.prevScrlTop || 0 );
                    a = 0;
                    updatePos.call( this, true, b , evt, obj )
                }
                isSaf.mode.b = b; isSaf.mode.a = a;
                if( !isIe || ( issafIE && ( !this._alive || evt._byFunc ) ) ) {
                   if(  this.classList.contains( 'lyteTableScroll' ) ) {
                        this.comp.scroll.call( this, evt )
                    }
                }
            }
        }

         function hideScrollbar( evt ) {
            clearTimeout( this._scrollplugin );  
            this._scrollplugin = setTimeout( mouseleave.bind( this._scrollData.appendTo == "parent" ? this.parentElement : this ), 500 );
        }

        function forTable( obj ) {
            var component =  this.comp, headerList = component.$node.getElementsByTagName( 'lyte-th' )
            if( this._infiniteScroll ){
                obj.$nodeClient = this.parentElement.getBoundingClientRect();
                var dummy =  this.getElementsByClassName( 'lytePreventInfiniteScroll' );
                obj.neglected = [];
                for( var m = 0; m < dummy.length; m++ ) {
                    if( /*isVisible( dummy[ m ] )*/ !dummy[ m ].classList.contains( 'lyteHidden' ) ) {
                        obj.neglected.push( dummy[ m ] );
                    }
                }

                obj.compNeg = dummy;
                if( this.comp._top != undefined ) {
                    obj.topElem = [];
                    var body = this.getElementsByTagName( 'lyte-tbody' )[ 0 ],
                    another = body.getElementsByTagName( 'lyte-tr' );
                    for( var n = 0; n < another.length; n++ ) {
                        if( !another[ n ].classList.contains( 'dummy' ) ) {
                            obj.topElem.push( another[ n ] );
                        }
                    }
                    obj.topElem = obj.topElem[ this.comp._top + obj.compNeg.length ]
                    obj.topElemClient = obj.topElem ? this.comp.topElem( obj.topElem ) : {};
                    obj.bottmElem = body.querySelector( 'lyte-tr:nth-of-type(' + ( ( this.comp._bottom + 1 + obj.compNeg.length ) ) + ')' );
                    obj.bottmElemClient = obj.bottmElem ? this.comp.topElem( obj.bottmElem ) : {}
                    obj.tbody = body
                    obj.tbodyClient = obj.tbody ? obj.tbody.getBoundingClientRect() : {};
                }
            }
            obj.scrollDivClient = obj.bcr;
            for(var k = 0; k < headerList.length; k++)
                {
                    headerList[k].property = headerList[k].getBoundingClientRect();
                    headerList[k].order = k
                }
            obj.calculated = true;  
        }

        function trigEvt( a, b, obj, evt ) {
            delete this._scrollEnd; 

            var offset = this._scrollData.offset,
            __direction = this._direction == "rtl";

            if( ( ( Math.ceil( obj.scrollLeft + obj.bcr.width + offset.x ) >= obj.scrollWidth ) && !( __direction && isSaf.chrome ) ) || ( ( isSaf.firefox || isSaf.safari ) && __direction && ( Math.ceil( -obj.scrollLeft + obj.bcr.width + offset.x ) >= obj.scrollWidth ) ) || ( __direction && isSaf.chrome &&  obj.scrollLeft == offset.x ) ) {
                evt.horiScrollEnd = true;
            }
            if( Math.ceil( obj.scrollTop + obj.bcr.height + offset.y ) >= obj.scrollHeight ) {
                this._scrollEnd = evt.vertScrollEnd = true;
            }
            evt.yScroll = b; evt.xScroll = a;
            evt._byPlugin = true;
            this._wheelObj = obj;
        }

        function updatePos( mode, a, evt, obj ){
            var __this = this,
            __vert = __this._vertDiv,
            __hori = __this._horiDiv;

            if( parseInt( Math.abs( a ) ) == 0 || ( mode && !__vert ) ||( !mode && !__hori ) ){
                return;
            }

            var __out = mode ? __vert : __hori,
            rail_bcr = obj[ ( mode ? 'vert' : 'hori' ) + 'bcr' ] || bcr_cal( __out ),
            __inn = __out.children[ 0 ],
            sL = "scrollTop",
            sW = "scrollHeight",
            wd = "height",
            lt = "top",
            direction = __this._direction == "rtl",
            btm = "bottom",
            __scrolldata = __this._scrollData,
            __bcr = obj.bcr,
            is_container = __scrolldata.appendTo != "parent",
            top_offset = mode ? ( __scrolldata.topOffset || 0 ) : 0;

            if( is_container ){
                rail_bcr = __bcr;
            }

            if( !mode ){
                sL = "scrollLeft";
                sW = "scrollWidth";
                wd = "width";
                lt = "left";
            }

            var __width = __bcr[ wd ],
            rail_bcr_lt = rail_bcr[ lt ],
            __rt = ( __width - ( rail_bcr_lt + top_offset - __bcr[ lt ] ) ) / obj[ sW ],
            trt = obj[ sL ] / obj[ sW ],
            mL = __scrolldata.minLength,
            minLength = mL ? ( mL != "auto" ? mL : 0 ) : 0.1 * __width,
            __final,
            __attr = {
                "aria-valuenow" : obj[ sL ],
                "aria-valuemax" : obj[ sW ] - __width,
                "aira-valuemin" : 0
            };

            set( __inn, wd, Math.max( __rt * __width, minLength ).toFixed( 3 ) + 'px' );

            if( direction && __inn._direction ){
                if( ( isSaf.safari && (  _lyteUiUtils.isNegativeScroll() || !window.chrome ) ) || isSaf.firefox ) {
                    __final =  ( ( obj[ sL ] / obj[ sW ] * 100 )  * obj.bcr[ wd ] / parseFloat( Math.max( __rt * __width, minLength ).toFixed( 3 ) ) );;
                } else {
                    __final =  ( ( -( obj[ sW ] - __width - obj[ sL ] ) / obj[ sW ] * 100 ) * __width / parseFloat( Math.max( __rt * __width, minLength ).toFixed( 3 ) ) );
                }
                __final = 'translateX(' + __final + '%)';
            } else {
                __final = ( mode ? 'translateY' : 'translateX' ) + '(' + trt * ( __width - ( rail_bcr_lt - __bcr[ lt ] ) - ( Math.max( 0, minLength - __rt * __width ) ) ) + 'px)';
            }

            $L( __out ).attr( __attr );

            set( __inn, 'transform', __final );

            if( is_container ){
                set( __out, wd, __width + 'px' );

                var __other_elem = mode ? __hori : __vert,
                __to_set = 'translate' + '(' + obj.scrollLeft + 'px,' + obj.scrollTop + 'px)';

                set( __other_elem, 'transform', __to_set );
                set( __out, 'transform', __to_set );
            }

            __this.prevScrlLeft = obj.scrollLeft; 
            __this.prevScrlTop = obj.scrollTop;

            if( evt.type ){
                trigEvt.call( __this, mode ? 0 : a, mode ? a : 0, obj, evt );
            }
        }

        function removeScroll(){
            var elements = this;
            for( var i = 0; i < elements.length; i++ ) {
                var elem = elements[ i ], wrap = elem.parentElement;
                if( !wrap ){
                    continue;
                }

                var scrolldata = elem._scrollData;

                if( scrolldata ) {

                    if( scrolldata.appendTo != "parent" ){
                        wrap = elem;
                    }

                    delete elem._scrollData;
                }
                var scrollDivs = wrap.querySelectorAll( 'div.lyteScrollContainer' );
                for(var k = 0; k < scrollDivs.length; k++){
                    if( scrollDivs[k].parentElement == wrap ) {
                        delete scrollDivs[ k ]._entertimeout;
                        delete scrollDivs[ k ]._leavetimeout;
                        wrap.removeChild(scrollDivs[k]);
                    }
                }
                elem.classList.remove( 'lyteScrollBar' );
                elem.removeEventListener( 'mouseenter', mouseenter, true );
                elem.removeEventListener( 'wheel', initialWheel, true );
                elem.removeEventListener( 'touchstart', mouseenter, true )
                wrap.removeEventListener( 'mouseleave', mouseleave, true );
                elem.removeEventListener( 'mousedown', mousedown );
                elem.removeEventListener( 'touchmove', wheelEvent, { passive : false } )
                elem.removeEventListener( 'scroll', scroll, true );
                clearTimeout( elem._tchtime );
                if( elem._mouseleave ){

                    var ns = "removeEventListener" + ( _lyteUiUtils.isWidget ? "Global" : "" );

                    document[ ns ]( 'touchcancel', elem._mouseleave, true );
                    document[ ns ]( 'touchend', elem._mouseleave, true );
                }

                if( _lyteUiUtils.isWidget ){
                    elem.removeEventListener( 'scroll', globalscroll, true );
                }

                delete elem._wheelObj; delete elem._vertDiv; delete elem._horiDiv;
                delete elem._scrollFun; delete elem._alivetime; delete elem._alive; delete elem._wheelObj;
                delete elem.resetScrollbar; delete wrap._scrolldiv; delete elem._tchtime;
                delete elem._allowTouch;
                if( elem.classList.contains( 'eventBinded' ) ){
                    elem.classList.remove( 'eventBinded' );
                    elem.removeEventListener('wheel', wheelEvent, true);
                    elem.removeEventListener('keydown', keydownFunc, true);
                    elem.removeEventListener( 'mousemove', hideScrollbar, true );   
                }
                elem.tabIndex = elem._tabindex;
                delete elem._tabindex; delete elem._wheelObj;
                delete elem._prevPosY; delete elem._mouseleave;
                delete elem._prevPosX; delete elem._wheelEvt;
            }
            return this;
        }

        function destroy(){
            $L( '.lyteScrollBar' ).scroll( 'destroy' );
            !_lyteUiUtils.isWidget && window.removeEventListener('scroll', globalscroll, true ); 
            return this; 
        }

        function reset(){
            var elements = this;
            for( var i = 0; i < elements.length; i++ ){
                var __elems = elements[ i ],
                data = __elems._scrollData;

                if( data ){
                    if( data.appendTo != "parent" ){
                        var obj = {
                            transform : "",
                            width : "",
                            height : ""
                        };
                        
                        $L( __elems._horiDiv ).css( obj );
                        $L( __elems._vertDiv ).css( obj );
                    }
                   __elems.resetScrollbar( true, true );
                }
            }
            return this;
        }

        $L.prototype.removeScroll = function(){
            // console.warn( 'removeScroll deprecated. Use scroll("destroy") instead' );
            return removeScroll.call( this );
        }

       $L.prototype.scroll = function( obj ) {
            if( obj && obj.constructor == String ){
                if( obj == "destroy" ){
                    return removeScroll.call( this );
                } else if( obj == "destroyScroll" ){
                    destroy.call( this );
                } else if( obj == "reset" ){
                    reset.call( this );
                }
                return;
            }

            var fn = function( obj, name, _default ){
                var value = obj[ name ];
                if( value == void 0 ){
                    value = _default;
                }
                obj[ name ] = value;
            },
            default_values = _lyteUiUtils.getDefault( 'lyte-scrollbar' );

            obj = obj || {};
            obj.showOn = obj.showOn || default_values.showOn || 'hover';
            obj.keyStep = obj.keyStep || default_values.keyStep || 30;
            obj.wheelSpeed = obj.wheelSpeed || default_values.wheelSpeed || 1;
            // its a major change. to ensure same behaviour of normal scroll and to overcome issue in browser zoomed state changed this to false
            fn( obj, 'preventOnEnd', default_values.preventOnEnd || false );
            obj.offset = obj.offset || default_values.offset || { x : 0, y : 0 };
            obj.tOut = obj.scrollTimeout || default_values.scrollTimeout || 500;
            obj.nested = obj.nested || default_values.nested || false;
            obj.min = obj.min || default_values.min || -Infinity;
            obj.max = obj.max || default_values.max || Infinity;
            obj.aria = obj.aria || default_values.aria || false;

            obj.appendTo = obj.appendTo || default_values.appendTo || "parent";

            fn( obj, 'scrollYMarginOffset', default_values.scrollYMarginOffset || 5 );
            fn( obj, 'scrollXMarginOffset', default_values.scrollXMarginOffset || 5 );
            if( obj.preventXScroll || default_values.preventXScroll ){
                obj.preventHorizontal = true; 
            }
            if( obj.preventYScroll || default_values.preventYScroll ){
                obj.preventVertical = true;
            }
            var elements = this,
            is_parent = obj.appendTo == "parent";

            for( var i = 0; i < elements.length; i++ ) {
                var elem =  elements[ i ], 
                vertDiv, 
                horiDiv, 
                wrp = elem.parentElement,
                id = elem.id;

                if( !id ){
                    elem.id = id = "LyteScrollbar_" + Date.now();
                }

                is_parent && set( wrp, 'position', 'relative' );
                if( elem._scrollData ) {
                    $L( elem ).removeScroll()
                }
                elem.resetScrollbar = mouseenter.bind( elements[ i ] );
                is_parent && ( wrp._scrolldiv = elem );


                elem._scrollData = obj;
                if( !obj.preventVertical ) {
                    vertDiv = appendDiv.call( elem, 'lyteScrollContainer lyteScrollContainerY', obj, void 0, is_parent );
                    if(obj.verticalPosition == 'left'){
                        vertDiv.classList.add('left');
                    }
                }
                if( !obj.preventHorizontal ) {
                    vertDiv = appendDiv.call( elem, 'lyteScrollContainer lyteScrollContainerX', obj, true, is_parent );
                    if(obj.horizontalPosition == 'top'){
                        vertDiv.classList.add('top');
                    }
                }
                if(isSaf.firefox ){
                    elem.scrollLeft = 0;
                    elem.scrollTop = 0;
                } 
                elem.addEventListener( 'mouseenter', mouseenter, true )
                elem.addEventListener( 'touchstart', mouseenter, true )
                elem.addEventListener( 'touchmove', wheelEvent, { passive : false } )
                elem.addEventListener( 'mousedown', mousedown );
                elem.addEventListener( 'wheel', initialWheel, true );

                if( _lyteUiUtils.isWidget ){
                    elem.addEventListener( 'scroll', globalscroll, true );
                }
                
                if( obj.showOn != 'always' ){
                    ( is_parent ? wrp : elem ).addEventListener( 'mouseleave', mouseleave, true )
                } else {
                    setTimeout( mouseenter.bind( elem ), 100, {} )
                }

                elem.classList.add( 'lyteScrollBar' )
                elem._scrollFun = scroll;
            }
          return this;
        }

        $L.prototype.destroyLyteScroll = function(){
            // console.warn( 'destroyLyteScroll deprecated. Use scroll("destroyScroll") instead' );
            return destroy.call( this );  
        }

        $L.prototype.resetScrollbar = function(){
            // console.warn( 'resetScrollbar deprecated. Use scroll("reset") instead' );
            return reset.call( this );
        }

        function globalscroll( evt ){
            var el = evt.target.correspondingElement || evt.target;

            if( !document.contains( el ) ){
                return;
            }

            if( el != document && el != document.body && el._scrollFun ) {
                el._scrollFun.call( el, evt );
            }
            if( evt._byFunc ) {
                evt.preventDefault();
                evt.stopPropagation();
                evt.stopImmediatePropagation();
            }
        }
        !_lyteUiUtils.isWidget && window.addEventListener('scroll', globalscroll, true ); 
    }
} );

/***/ })

}]);
//# sourceMappingURL=table-comp.js.map
import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-table.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class TableComp extends Component {
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
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      tableObj: prop('object', {
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
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleCheckboxObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleCheckbox' } }
      }),
      toggleMoreObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleMore' } }
      }),
      // Variant demos
      variantDefaultObj: prop('object', {
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
      variantStripedObj: prop('object', {
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
      variantBorderedObj: prop('object', {
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
      variantCompactObj: prop('object', {
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
      variantCheckboxObj: prop('object', {
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
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
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

TableComp._template = "<template tag-name=\"table-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Table</h1> <p class=\"zcat-page-desc\">Tables display structured data in rows and columns with sorting, selection, and action support.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{tableObj}}\"></zcat-table> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Style</span> <select data-action=\"changeTableVariant\" class=\"zcat-custom-select\"> <option value=\"default\">Default</option> <option value=\"striped\">Striped</option> <option value=\"bordered\">Bordered</option> <option value=\"compact\">Compact</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Checkbox</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleCheckboxObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">More Options</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMoreObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Default</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantDefaultObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Striped</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Striped Rows</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantStripedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Bordered</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Bordered Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantBorderedObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Compact</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Compact Table</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCompactObj}}\"></zcat-table> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">With Checkbox &amp; Actions</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Selection &amp; More Options</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:0;overflow-x:auto\"> <zcat-table self=\"{{self}}\" zcat-prop=\"{{variantCheckboxObj}}\"></zcat-table> </div> </div> </div> </div></template></template></div> </template><style>/* table-comp specific overrides if needed */\n</style>";;
TableComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,15,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,15,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,19,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,19,1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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

export { TableComp };

TableComp.register("table-comp", {
  hash: "TableComp_4",
  refHash: "C_zcat-app_app_0"
});

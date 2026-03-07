import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-pagination.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class PaginationComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
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
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      paginationObj: prop('object', {
        default: {
          variant: 'primary',
          totalRecords: 150,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      // Variant demos
      variantPrimaryObj: prop('object', {
        default: {
          variant: 'primary',
          totalRecords: 248,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantSecondaryObj: prop('object', {
        default: {
          variant: 'secondary',
          totalRecords: 85,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantSmallSetObj: prop('object', {
        default: {
          variant: 'primary',
          totalRecords: 25,
          rowsPerPage: 10,
          currentPage: 1,
          callback: { name: 'onPageChange' }
        }
      }),
      variantLargeSetObj: prop('object', {
        default: {
          variant: 'primary',
          totalRecords: 5000,
          rowsPerPage: 50,
          currentPage: 1,
          callback: { name: 'onPageChange' }
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
      changePaginationVariant(e) {
        this.$app.objectUtils(this.getData('paginationObj'), 'add', 'variant', e.target.value);
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

PaginationComp._template = "<template tag-name=\"pagination-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Pagination</h1> <p class=\"zcat-page-desc\">Pagination lets users navigate through large sets of data by dividing content into discrete pages.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{paginationObj}}\"></zcat-pagination> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select onchange=\"{{action('changePaginationVariant',event)}}\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary</option> <option value=\"secondary\">Secondary</option> </select> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Primary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary Pagination</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantPrimaryObj}}\"></zcat-pagination> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Secondary Variant</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Simple)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantSecondaryObj}}\"></zcat-pagination> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Data Sizes</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Small Set (25 records)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantSmallSetObj}}\"></zcat-pagination> </div> </div> <div class=\"zcat-variant-card\" style=\"min-width:480px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Large Set (5000 records)</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-pagination self=\"{{self}}\" zcat-prop=\"{{variantLargeSetObj}}\"></zcat-pagination> </div> </div> </div> </div></template></template></div> </template><style>/* pagination-comp specific overrides if needed */\n</style>";;
PaginationComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":0,"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,11,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,11,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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

export { PaginationComp };

PaginationComp.register("pagination-comp", {
  hash: "PaginationComp_4",
  refHash: "C_zcat-app_app_0"
});

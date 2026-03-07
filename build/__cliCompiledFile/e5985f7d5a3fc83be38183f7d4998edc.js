import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-datepicker.js';
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class DatepickerComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('datepickerObj') || {};

    let slyte_code = '<zcat-datepicker\n  self="{{self}}"\n  zcat-prop="{{datepickerObj}}"\n></zcat-datepicker>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    datepickerObj: prop("object", {\n      default: ' + JSON.stringify({
      label: obj.label || 'Date',
      placeholder: obj.placeholder || 'Select date',
      format: obj.format || 'MM/DD/YYYY',
      showTime: obj.showTime || false
    }, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-datepicker-wrapper">\n  <label class="zcat-datepicker-label">' + (obj.label || 'Date') + '</label>\n  <div class="zcat-datepicker-trigger">\n    <span class="zcat-datepicker-display">' + (obj.placeholder || 'Select date') + '</span>\n    <span class="zcat-datepicker-icon">&#x1F4C5;</span>\n  </div>\n</div>';

    let css_code = '.zcat-datepicker-wrapper { position: relative; width: 260px; }\n.zcat-datepicker-trigger { display: flex; align-items: center; height: 36px; padding: 0 12px; border: 1px solid var(--zcat-inputField-border-default); border-radius: 8px; cursor: pointer; }';

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
    this.setData('htmlCodeSnippet', { code: html_code });
    this.setData('cssCodeSnippet', { code: css_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object', { default: this }),
      pageTab: prop('string', { default: 'customize' }),
      activeTab: prop('string', { default: 'slyte' }),
      datepickerObj: prop('object', {
        default: {
          label: 'Date',
          placeholder: 'Select date',
          format: 'MM/DD/YYYY',
          callback: { name: 'onDateSelect' }
        }
      }),
      datepickerTimeObj: prop('object', {
        default: {
          label: 'Date & Time',
          placeholder: 'Select date and time',
          format: 'MM/DD/YYYY',
          showTime: true,
          callback: { name: 'onDateSelect' }
        }
      }),
      datepickerMinMaxObj: prop('object', {
        default: {
          label: 'Restricted Range',
          placeholder: 'Pick a date',
          format: 'MM/DD/YYYY',
          minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
          maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().split('T')[0],
          callback: { name: 'onDateSelect' }
        }
      }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      toggleErrorObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleError' } }
      }),
      toggleShowTimeObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleShowTime' } }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: prop('object', { default: { code: '' } }),
      jsCodeSnippet: prop('object', { default: { code: '' } }),
      htmlCodeSnippet: prop('object', { default: { code: '' } }),
      cssCodeSnippet: prop('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      onDateSelect(result) {
        console.log('Datepicker selected:', result);
      },
      toggleLabel(val) {
        if (val) {
          this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', 'Date');
        } else {
          this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', '');
        }
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      toggleError(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'errorMessage', val ? 'Please select a valid date' : '');
        this.constructCodeSnippet();
      },
      toggleShowTime(val) {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'showTime', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'label', 'Date');
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'disabled', false);
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'errorMessage', '');
        this.$app.objectUtils(this.getData('datepickerObj'), 'add', 'showTime', false);
        this.constructCodeSnippet();
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      showCustomizeTab() { this.setData('pageTab', 'customize'); },
      showVariantsTab() { this.setData('pageTab', 'variants'); },
      showSlyteTab() { this.setData('activeTab', 'slyte'); },
      showJsTab() { this.setData('activeTab', 'js'); },
      showHtmlTab() { this.setData('activeTab', 'html'); },
      showCssTab() { this.setData('activeTab', 'css'); },
      copyCode() {
        let tab = this.getData('activeTab');
        let snippet = this.getData(tab + 'CodeSnippet') || {};
        if (snippet.code && navigator.clipboard) {
          navigator.clipboard.writeText(snippet.code);
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

DatepickerComp._template = "<template tag-name=\"datepicker-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Datepicker</h1> <p class=\"zcat-page-desc\">Calendar-based date selection with optional time picker, min/max range constraints, and formatted display.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Body: Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerObj}}\"></zcat-datepicker> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Error</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleErrorObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Show Time</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleShowTimeObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><!-- Body: All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Date Only</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: repeat(2, 1fr);\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerObj}}\"></zcat-datepicker> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Min/Max Range</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerMinMaxObj}}\"></zcat-datepicker> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">Date &amp; Time</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: 1fr;\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Time Picker</span></div> <div class=\"zcat-variant-card-preview\"> <zcat-datepicker self=\"{{self}}\" zcat-prop=\"{{datepickerTimeObj}}\"></zcat-datepicker> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:20px\">States</h3> <div class=\"zcat-variants-grid\" style=\"grid-template-columns: repeat(2, 1fr);\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-datepicker-wrapper zcat-datepicker-disabled\"> <div class=\"zcat-datepicker-label-row\"><label class=\"zcat-datepicker-label\">Disabled Date</label></div> <div class=\"zcat-datepicker-trigger\"> <span class=\"zcat-datepicker-display zcat-datepicker-placeholder\">Select date</span> <span class=\"zcat-datepicker-icon\"> <zcat-icon name=\"calendar\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Error</span></div> <div class=\"zcat-variant-card-preview\"> <div class=\"zcat-datepicker-wrapper zcat-datepicker-error\"> <div class=\"zcat-datepicker-label-row\"><label class=\"zcat-datepicker-label\">Error Date</label></div> <div class=\"zcat-datepicker-trigger\"> <span class=\"zcat-datepicker-display zcat-datepicker-placeholder\">Select date</span> <span class=\"zcat-datepicker-icon\"> <zcat-icon name=\"calendar\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> <span class=\"zcat-datepicker-error-msg\">Please select a valid date</span> </div> </div> </div> </div> </div></template></template></div> </template><style>/* datepicker-comp demo styles are in utilities */\n</style>";;
DatepickerComp._dynamicNodes = [{"t":"a","p":[1,3,5,1]},{"t":"a","p":[1,3,5,3]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":10,"sibl":[9],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[10,5,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[0,11,1,3,1,3,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,11,3,3,1,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

DatepickerComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "datepickerObj",
  "datepickerTimeObj",
  "datepickerMinMaxObj",
  "toggleLabelObj",
  "toggleDisabledObj",
  "toggleErrorObj",
  "toggleShowTimeObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export default DatepickerComp;

DatepickerComp.register("datepicker-comp", {
  hash: "DatepickerComp_4",
  refHash: "C_zcat-app_app_0"
});

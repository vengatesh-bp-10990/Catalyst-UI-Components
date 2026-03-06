import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-fileupload.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class FileuploadComp extends Component {
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

    let variantSelect = node.querySelector('[data-action="changeVariant"]');
    if (variantSelect) {
      variantSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('fileuploadObj'), 'add', 'variant', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let obj = this.getData('fileuploadObj') || {};

    let slyte_code = '<zcat-fileupload\n  self="{{self}}"\n  zcat-prop="{{fileuploadObj}}"\n></zcat-fileupload>';

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    fileuploadObj: prop("object", {\n      default: {\n        variant: "' + (obj.variant || 'primary') + '",\n        multiple: ' + (obj.multiple || false) + ',\n        label: "' + (obj.label || 'Upload Files') + '",\n        hint: "' + (obj.hint || 'PNG, JPG up to 5MB') + '"\n      }\n    })\n  };\n}';

    let html_code = '<div class="zcat-fileupload-wrapper">\n  <div class="zcat-fileupload-dropzone">\n    <p>Click to upload or drag and drop</p>\n  </div>\n</div>';

    let css_code = '.zcat-fileupload-dropzone { min-height: 140px; border: 2px dashed var(--zcat-inputField-border-default); border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer; }';

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
      fileuploadObj: prop('object', {
        default: {
          variant: 'primary',
          multiple: true,
          label: 'Upload Files',
          hint: 'PNG, JPG, PDF up to 5MB',
          accept: '.png,.jpg,.jpeg,.pdf',
          maxFileSize: 5242880,
          callback: { name: 'onFilesChange' }
        }
      }),
      varPrimaryObj: prop('object', { default: { variant: 'primary', label: 'Upload Files', hint: 'PNG, JPG up to 5MB', accept: '.png,.jpg', multiple: true } }),
      varSecondaryObj: prop('object', { default: { variant: 'secondary', label: 'Attach Document', hint: 'PDF, DOCX up to 10MB', accept: '.pdf,.docx', multiple: false } }),
      varMultipleObj: prop('object', { default: { variant: 'primary', label: 'Upload Images', hint: 'Select multiple PNG, JPG files', accept: '.png,.jpg', multiple: true } }),
      varSingleObj: prop('object', { default: { variant: 'primary', label: 'Upload Avatar', hint: 'One image only, up to 2MB', accept: '.png,.jpg', multiple: false } }),
      varDisabledObj: prop('object', { default: { variant: 'primary', label: 'Upload (Disabled)', hint: 'Uploading is disabled', multiple: true, disabled: true } }),
      toggleLabelObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleMultipleObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleMultiple' } }
      }),
      toggleDisabledObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
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
      onFilesChange(files) {
        console.log('Files changed:', files);
      },
      toggleLabel(val) {
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'label', val ? 'Upload Files' : '');
        this.constructCodeSnippet();
      },
      toggleMultiple(val) {
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'multiple', val);
        this.constructCodeSnippet();
      },
      toggleDisabled(val) {
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'disabled', val);
        this.constructCodeSnippet();
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'variant', 'primary');
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'label', 'Upload Files');
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'multiple', true);
        this.$app.objectUtils(this.getData('fileuploadObj'), 'add', 'disabled', false);
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

FileuploadComp._template = "<template tag-name=\"fileupload-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">File Upload</h1> <p class=\"zcat-page-desc\">Drag-and-drop or click-to-browse file upload component with single and multiple modes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{fileuploadObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changeVariant\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary (Dropzone)</option> <option value=\"secondary\">Secondary (Button)</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Multiple</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMultipleObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary (Dropzone)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varPrimaryObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Button)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varSecondaryObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Multiple Files</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varMultipleObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Single File</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varSingleObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-fileupload> </div> </div> </div> </div></template></template> </div> </template><style>/* fileupload-comp demo styles are in utilities */\n</style>";;
FileuploadComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

FileuploadComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "fileuploadObj",
  "varPrimaryObj",
  "varSecondaryObj",
  "varMultipleObj",
  "varSingleObj",
  "varDisabledObj",
  "toggleLabelObj",
  "toggleMultipleObj",
  "toggleDisabledObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { FileuploadComp };

FileuploadComp.register("fileupload-comp", {
  hash: "FileuploadComp_4",
  refHash: "C_zcat-app_app_0"
});

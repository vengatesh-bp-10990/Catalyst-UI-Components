"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/fileupload-comp"],{

/***/ 29485816:
/*!**************************************************!*\
  !*** ./components/javascript/fileupload-comp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileuploadComp": () => (/* binding */ FileuploadComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zcat-button.js */ 28020792);
/* harmony import */ var _zcat_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zcat-toggle.js */ 21046360);
/* harmony import */ var _zcat_fileupload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zcat-fileupload.js */ 58799510);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);








class FileuploadComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
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
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      fileuploadObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
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
      varPrimaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { variant: 'primary', label: 'Upload Files', hint: 'PNG, JPG up to 5MB', accept: '.png,.jpg', multiple: true } }),
      varSecondaryObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { variant: 'secondary', label: 'Attach Document', hint: 'PDF, DOCX up to 10MB', accept: '.pdf,.docx', multiple: false } }),
      varMultipleObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { variant: 'primary', label: 'Upload Images', hint: 'Select multiple PNG, JPG files', accept: '.png,.jpg', multiple: true } }),
      varSingleObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { variant: 'primary', label: 'Upload Avatar', hint: 'One image only, up to 2MB', accept: '.png,.jpg', multiple: false } }),
      varDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { variant: 'primary', label: 'Upload (Disabled)', hint: 'Uploading is disabled', multiple: true, disabled: true } }),
      toggleLabelObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleLabel' } }
      }),
      toggleMultipleObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: true, size: 'small', callback: { name: 'toggleMultiple' } }
      }),
      toggleDisabledObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { checked: false, size: 'small', callback: { name: 'toggleDisabled' } }
      }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'small', callback: { name: 'resetCustomise' } }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
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

FileuploadComp._template = "<template tag-name=\"fileupload-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">File Upload</h1> <p class=\"zcat-page-desc\">Drag-and-drop or click-to-browse file upload component with single and multiple modes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{fileuploadObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Variant</span> <select data-action=\"changeVariant\" class=\"zcat-custom-select\"> <option value=\"primary\">Primary (Dropzone)</option> <option value=\"secondary\">Secondary (Button)</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Label</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleLabelObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Multiple</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleMultipleObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Disabled</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleDisabledObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Primary (Dropzone)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varPrimaryObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Secondary (Button)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varSecondaryObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Multiple Files</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varMultipleObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Single File</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varSingleObj}}\"></zcat-fileupload> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Disabled</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <zcat-fileupload self=\"{{self}}\" zcat-prop=\"{{varDisabledObj}}\"></zcat-fileupload> </div> </div> </div> </div></template></template></div> </template><style>/* fileupload-comp demo styles are in utilities */\n</style>";;
FileuploadComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":9,"sibl":[8],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,7,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[9,4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,7,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,9,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,9,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

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



FileuploadComp.register("fileupload-comp", {
  hash: "FileuploadComp_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 58799510:
/*!**************************************************!*\
  !*** ./components/javascript/zcat-fileupload.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZcatFileupload": () => (/* binding */ ZcatFileupload)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_fileupload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-fileupload.js */ 2899494);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);






class ZcatFileupload extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    const defaultProp = {
      name: 'file',
      multiple: true,
      accept: '',
      id: '',
      class: '',
      uploadMultiple: true,
      uploadMultipleCount: Infinity,
      fileLimit: 20000000,
      minimumFileSize: 0,
      totalFilesSize: '',
      parallel: 2,
      autoUpload: true,
      triggerUpload: false,
      paramName: 'files',
      thumb: false,
      tabindex: 1,
      retry: 2,
      files: [],
      folder: false,
      fileUnit: '',
      digits: 0,
      message: 'Drag file here or browse to upload',
      chunk: false,
      chunkSize: 2000000,
      parallelChunkUpload: false,
      parallelChunkCount: Infinity,
      chunkRetry: 2,
      ajax: '',
      appearance: 'box',
      disabled: false,
      failureMessage: 'failed',
      retryText: 'retry',
      allowReplace: false,
      filesCount: Infinity
    };
    return Object.assign(super.data({
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { watch: true }),
      featureObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { watch: true }),
      errorMessage: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string'),
      uploadedIcon: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('string', { default: 'folder' }),
      errorObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.prop)('object', { watch: true })
    }), arg1);
  }

  getFileIcon(file) {
    if (!file) return 'file';

    // Detect folder upload
    if (file.length > 1 && file[0].webkitRelativePath !== '') {
      return 'folder';
    }

    if (file[0].webkitRelativePath !== '') {
      return 'folder';
    }

    const mime = file[0].type?.toLowerCase() || '';
    const name = file[0].name?.toLowerCase() || '';

    // ZIP (application/zip etc.)
    if (mime.includes('zip') || /\.(zip|rar|7z|tar|gz)$/i.test(name)) {
      return 'file'; //zip
    }

    // Images
    if (
      mime.startsWith('image/') ||
      /\.(png|jpg|jpeg|gif|bmp|webp|svg)$/i.test(name)
    ) {
      return 'image';
    }

    // PDF
    if (mime === 'application/pdf' || name.endsWith('.pdf')) {
      return 'file';
    }

    // Word
    if (/\.docx?$/.test(name)) return 'file';

    // Excel
    if (/\.xlsx?$/.test(name)) return 'file';

    // PPT
    if (/\.pptx?$/.test(name)) return 'file';

    // Default
    return 'file';
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      defaultOnReject(param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        let defaultErrMsg = '';
        if (type.totalSize === 'Exceeds') {
          defaultErrMsg = 'Accepted file size is ' + zcatProp.totalFilesSize;
        } else if (type.type === 'Invalid_Type') {
          defaultErrMsg = type.type;
        }

        this.$addon.objectUtils(zcatProp, 'add', 'errorMessage', defaultErrMsg);

        if (this.getMethods('onReject')) {
          this.executeMethod('onReject', param1, param2, param3);
        }
      },
      defaultOnSelect(fileObj, param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        // if (zcatProp.errorMessage) {
        //   // this.$addon.objectUtils(zcatProp, 'delete', 'errorMessage');
        //   // this.setData('errorMessage', '');          
        // }
        const errorObject = this.getData('errorObj');
        if(errorObject){
            this.$addon.objectUtils(errorObject, "delete", zcatProp.key);
        }
        else if(this.getData('errorMessage')){
            this.setData('errorMessage', '');
        }

        const iconName = this.getFileIcon(fileObj);
        this.setData('uploadedIcon', iconName);

        if (this.getMethods('onSelect')) {
          this.executeMethod('onSelect', fileObj, param1, param2, param3);
        }
      },
      defaultOnAdd(file, element, fileInfo) {
        if (this.getMethods('onAdd')) {
          this.executeMethod('onAdd', file, element, fileInfo);
        }
      },
      defaultOnDrop(param1, param2, param3) {
        if (this.getMethods('onDrop')) {
          this.executeMethod('onDrop', param1, param2, param3);
        }
      }, 
      defaultOnRemove(param1, param2, param3) {
        if (this.getMethods('onRemove')) {
          this.executeMethod('onRemove', param1, param2, param3);
        }
      },
      defaultBeforeRender(param1, param2, param3) {        
        if (this.getMethods('beforeRender')) {
          this.executeMethod('beforeRender', param1, param2, param3);
        }
      },
      defaultAfterRender(param1, param2, param3) {        
        if (this.getMethods('afterRender')) {
          this.executeMethod('afterRender', param1, param2, param3);
        }
      },
      defaultOnBeforeRemove(param1, param2, param3) {        
        if (this.getMethods('onBeforeRemove')) {
          this.executeMethod('onBeforeRemove', param1, param2, param3);
        }
      },
      defaultOnSuccess(param1, param2, param3) {        
        if (this.getMethods('onSuccess')) {
          this.executeMethod('onSuccess', param1, param2, param3);
        }
      },
      defaultOnFailure(param1, param2, param3) {        
        if (this.getMethods('onFailure')) {
          this.executeMethod('onFailure', param1, param2, param3);
        }
      },
      defaultOnRequestSuccess(param1, param2, param3) {        
        if (this.getMethods('onRequestSuccess')) {
          this.executeMethod('onRequestSuccess', param1, param2, param3);
        }
      },
      defaultOnRequestFailure(param1, param2, param3) {        
        if (this.getMethods('onRequestFailure')) {
          this.executeMethod('onRequestFailure', param1, param2, param3);
        }
      },
      defaultOnFileSuccess(param1, param2, param3) {        
        if (this.getMethods('onFileSuccess')) {
          this.executeMethod('onFileSuccess', param1, param2, param3);
        }
      },
      defaultOnFileFailure(param1, param2, param3) {        
        if (this.getMethods('onFileFailure')) {
          this.executeMethod('onFileFailure', param1, param2, param3);
        }
      },
      defaultOnProgress(param1, param2, param3) {        
        if (this.getMethods('onProgress')) {
          this.executeMethod('onProgress', param1, param2, param3);
        }
      },
      defaultOnRetry(param1, param2, param3) {        
        if (this.getMethods('onRetry')) {
          this.executeMethod('onRetry', param1, param2, param3);
        }
      },
      defaultOnChunkSuccess(param1, param2, param3) {        
        if (this.getMethods('onChunkSuccess')) {
          this.executeMethod('onChunkSuccess', param1, param2, param3);
        }
      },
      defaultOnChunkError(param1, param2, param3) {        
        if (this.getMethods('onChunkError')) {
          this.executeMethod('onChunkError', param1, param2, param3);
        }
      },
      defaultOnBeforeSend(param1, param2, param3) {        
        if (this.getMethods('onBeforeSend')) {
          this.executeMethod('onBeforeSend', param1, param2, param3);
        }
      },
      defaultOnSend(param1, param2, param3) {        
        if (this.getMethods('onSend')) {
          this.executeMethod('onSend', param1, param2, param3);
        }
      },
      defaultOnDragEnter(param1, param2, param3) {        
        if (this.getMethods('onDragEnter')) {
          this.executeMethod('onDragEnter', param1, param2, param3);
        }
      },
      defaultOnDragOver(param1, param2, param3) {        
        if (this.getMethods('onDragOver')) {
          this.executeMethod('onDragOver', param1, param2, param3);
        }
      },
      defaultOnDragLeave(param1, param2, param3) {        
        if (this.getMethods('onDragLeave')) {
          this.executeMethod('onDragLeave', param1, param2, param3);
        }
      }, 
      defaultOnBeforeDrop(param1, param2, param3) {        
        if (this.getMethods('onBeforeDrop')) {
          this.executeMethod('onBeforeDrop', param1, param2, param3);
        }
      },
      defaultOnBeforePaste(param1, param2, param3) {        
        if (this.getMethods('onBeforePaste')) {
          this.executeMethod('onBeforePaste', param1, param2, param3);
        }
      },
      defaultOnPaste(param1, param2, param3) {        
        if (this.getMethods('onPaste')) {
          this.executeMethod('onPaste', param1, param2, param3);
        }
      },
      defaultOnBeforeOpen(param1, param2, param3) {        
        if (this.getMethods('onBeforeOpen')) {
          this.executeMethod('onBeforeOpen', param1, param2, param3);
        }
      }

    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }
}

ZcatFileupload._template = "<template tag-name=\"zcat-fileupload\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template></div></template></template><template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','primary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','single'))}}\" lc-id=\"lc_id_0\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area> <lyte-file-message class=\"lyteInputFileUpd {{if(queueList.length,'lyteHide','')}}\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'?:',expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")),\"Drag and drop, or browse to upload your file\"))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','primary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','multiple'))}}\" lc-id=\"lc_id_1\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{expHandlers(expHandlers(zcatProp.type,'===','multiple'),'?:','multi-file-upload','')}} {{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area class=\"{{if(queueList.length,'fileUploaded','')}}\"> <lyte-file-message class=\"lyteInputFileUpd {{if(queueList.length,'fileUploaded','')}}\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','single'))}}\" lc-id=\"lc_id_2\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area> <lyte-file-message class=\"lyteFileUpd {{if(queueList.length,'lyteHide','')}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteFileUploadedList {{item.status}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <div class=\"zcat-dF zcat-align-center zcat-gap-4\"> <span class=\"lyteuploadedfilename\"> {{item.name}} </span> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','multiple'))}}\" lc-id=\"lc_id_3\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{expHandlers(expHandlers(zcatProp.type,'===','multiple'),'?:','multi-file-upload','')}} {{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area class=\"{{if(queueList.length,'fileUploaded','')}}\"> <lyte-file-message class=\"lyteFileUpd {{if(queueList.length,'fileUploaded','')}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template></template> </template><style>\n\n/* === Global base styles from reference css/zcat-fileupload.css === */\nlyte-fileupload * {\n  box-sizing: border-box;\n}\nlyte-file-message,\nlyte-fileupload,\nlyte-file-select-area {\n  position: relative;\n  font-family: var(--zcat-font-family-primary);\n  font-weight: 400;\n  display: block;\n}\nlyte-fileupload::after {\n  content: attr(error-message);\n  position: absolute;\n  top: 100%;\n  left: 0;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-error);\n  padding-top: 1px;\n}\n\nzcat-fileupload .lyteInputFileUpd, .lyteInputFileUpd {\n  display: flex;\n  align-items: center;\n  /* justify-content: space-between; */\n  gap: 4px;\n  height: 36px;\n  min-width: 300px;\n  padding-left: 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 8px;\n}\n.lyteInputFileUpd {\n  justify-content: space-between;\n}\nzcat-fileupload .lyteInputFileUpd {\n  justify-content: flex-start; /* or unset */\n}\n\n\n.lyteInputFileUpd:hover {\n  border: 1px solid var(--zcat-inputField-border-hover);\n  background: var(--zcat-inputField-bg-hover);\n}\n.lyteInputFileUpd:hover .sm-upload-icon {\n  /* background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.91671 4.66667L7.00004 1.75L4.08337 4.66667\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7 1.75V8.75\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>'); */\n  width: 14px;\n  height: 14px;\n}\n.lyteFileUpdMsgWrap {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  box-sizing: border-box;\n  cursor: pointer;\n  outline: none;\n  background: var(--zcat-inputField-bg-default);\n  text-align: center;\n  color: var(--zcat-inputField-text-active);\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  /* border-radius: 10px; */\n  /* padding: 30px; */\n  /* border: 1px dashed #b8bdbe; */\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap:hover {\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.fileDragEnter.lyteFileUpdInputType .lyteFileUpdMsgWrap,\n.fileDragEnter.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  border: 1px dashed var(--zcat-inputField-border-active);\n  background: var(--zcat-inputField-bg-active);\n}\n.lyteFileUpdMsg {\n  position: relative;\n  line-height: 21px;\n}\n.fileDragEnter .lyteFileUpdMsg {\n  opacity: 0.7;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg {\n  padding-left: 0px;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg::before {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  background-position: -155px -203px;\n  width: 30px;\n  height: 21px;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n}\n.lyteFileUpdThumb {\n  display: block;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  border: 1px solid var(--zcat-inputField-border-default);\n}\n\n.multiFileupload .lyteFileUpdList {\n  /* margin-top: 15px; */\n}\n.multiFileupload .lyteFileUpdListFile {\n  margin-bottom: 10px;\n}\n.lyteFileUpdListFile {\n  position: relative;\n  display: flex;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 0;\n  align-items: center;\n}\n.lyteFileUpdListFile.error {\n  background: var(--zcat-inputField-bg-error);\n  border: 1px solid var(--zcat-inputField-border-error);\n}\n.lyteFileUpdTypePreview {\n  margin-right: 10px;\n}\n.lyteFileUpdTypeIcon::after {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  display: block;\n  background-position: -117px -198px;\n  width: 21px;\n  height: 26px;\n}\n.lyteFileUpdTypeIcon.pdf::after {\n  background-position: -8px -198px;\n}\n.lyteFileUpdTypeIcon.video::after {\n  background-position: -35px -198px;\n}\n.lyteFileUpdTypeIcon.image::after {\n  background-position: -63px -198px;\n}\n.lyteFileUpdTypeIcon.zip::after {\n  background-position: -90px -198px;\n}\n.lyteFileUpdFileName {\n  color: var(--zcat-inputField-text-active);\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  margin-right: 10px;\n  max-width: calc(100% - 300px);\n  white-space: nowrap;\n}\n.lyteFileUpdFileSize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n  margin-right: auto;\n  white-space: nowrap;\n}\n.lyteFileUpdFileStatus {\n  display: flex;\n  margin-right: 10px;\n}\n.lyteFileUpdProgressBar {\n  height: 5px;\n  width: 140px;\n  background: var(--zcat-card-bg-secondary);\n  flex-grow: 1;\n  border-radius: 5px;\n}\n.lyteFileUpdProgressFill {\n  height: 5px;\n  background: var(--zcat-primary-10);\n  width: 0;\n  border-radius: 5px;\n  transition: width 0.1s linear;\n}\nlyte-file-retry {\n  display: inline-flex;\n  margin-right: 10px;\n}\n.lyteFileUpdFailMsg {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-error);\n  margin-right: 10px;\n  text-transform: capitalize;\n  cursor: default;\n}\n.lyteFileUpdRetryMsg {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n  text-transform: capitalize;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.lyteFileUpdRetryMsg:hover {\n  color: var(--zcat-inputField-text-active);\n}\n/* lyte-file-close {\n  cursor: pointer;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M10.5 3.5L3.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 3.5L10.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-position: -2px;\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n} */\n\n.lyteFileUpdListFile.success lyte-file-close {\n  visibility: hidden;\n}\n.lyteFileUpdListFile.success:hover lyte-file-close {\n  visibility: visible;\n}\nlyte-file-close:hover {\n  opacity: 1;\n}\n.lyteFileUpdBoxType #lyteFileUpdSelectedFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n}\n.lyteFileUpdInputType .lyteFileUpdMsgWrap {\n  padding: 7px 10px;\n  border-radius: 3px;\n  border: 1px dashed var(--zcat-inputField-border-default);\n  background: var(--zcat-inputField-bg-default);\n  text-align: left;\n}\n.lyteFileUpdInputType .lyteFileUpdMsgWrap:hover {\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.lyteFileUpdInputType .lyteFileUpdListFile {\n  padding: 7px 10px;\n  border: 1px dashed var(--zcat-inputField-border-default);\n  border-radius: 3px;\n  background: var(--zcat-inputField-bg-default);\n}\n.lyteFileUpdInputType .lyteFileUpdListFile.error {\n  background: var(--zcat-inputField-bg-error);\n  border: 1px dashed var(--zcat-inputField-border-error);\n}\n.lyteFileUpdInputType .lyteFileUpdFileName {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  max-width: calc(100% - 250px);\n}\n.lyteFileUpdFileName {\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n  max-width: calc(100% - 30px);\n}\n.lyteFileUpdFileName::before {\n  content: ' File Name : ';\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdFileSize::before {\n  content: ' File Size : ';\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdFileSize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdInputType lyte-file-close {\n  background-position: -324px -162px;\n  width: 10px;\n  height: 10px;\n}\n.lyteFileUpdBtnType .lyteFileUpdMsgWrap {\n  width: 30px;\n  height: 30px;\n  background: var(--zcat-primary-10);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lyteFileUpdBtnType .lyteFileUpdMsgWrap::after {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  background-position: -197px -205px;\n  width: 15px;\n  height: 19px;\n  display: block;\n}\n.lyteFileUpdListFile.error .lyteFileUpdFileStatus,\n.lyteFileUpdListFile.success .lyteFileUpdFileStatus,\n.lyteFileUpdBtnType .lyteFileUpdMsg,\n.fileuploadInput,\n.lyteFileUpdInputType .lyteFileUpdTypePreview,\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap.lyteHide,\nlyte-fileupload .lyteHide {\n  display: none;\n}\n.lyteFileUpdDisabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n/* file upload */\n.lyteuploadedfilename {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-active);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: calc(100% - 20px);\n}\n.lyteuploadedfilesize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n  padding-top: 5px;\n}\n\n.lg-upload-icon {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.8334 9.33333L14 3.5L8.16669 9.33333' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 3.5V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 28px;\n  height: 28px;\n}\nzcat-fileupload .lg-upload-icon{\n  background-image: none;\n  width: 0;\n  height: 0;\n}\n.sm-upload-icon {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.91671 4.66667L7.00004 1.75L4.08337 4.66667\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7 1.75V8.75\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n}\n.sm-upload-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 100%;\n  /* background-color: var(--zcat-card-bg-secondary); */\n  border-radius: 0px 5px 5px 0px;\n}\n.zcat-invalid .lyteInputFileUpd,\n.zcat-invalid .lyteInputFileUpd:hover,\n.zcat-invalid .lyteFileUpd,\n.zcat-invalid .lyteFileUpd:hover {\n  border-color: var(--zcat-inputField-border-error);\n  background: var(--zcat-inputField-bg-error) !important;\n}\n\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  background: var(--zcat-linkbox-bg-default);\n  border: 1px solid var(--zcat-linkbox-border-default);\n  padding: 48px 30px 20px 30px;\n  border-radius: 6px;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg::before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.8334 9.33333L14 3.5L8.16669 9.33333' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 3.5V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 28px;\n  height: 23px;\n  background-position: center;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -30px;\n}\n.lyteFileUpdMsg {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteFileUpdBoxType #lyteFileUpdSelectedFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n}\n.lyteFileUpdListFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n  padding: 15px;\n  border-radius: 6px;\n}\n.lyteFileUpdTypePreview {\n  display: none;\n}\n.lyteFileUpdListFile.success lyte-file-close {\n  visibility: visible;\n}\n.lyteFileUpdListFile {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n.lyteFileUpdFileSize + lyte-file-close,\n.lyteFileUpdFileStatus + lyte-file-close {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n\n\n\n/* Sept 3 */\n/* old  */\n.lyteFileUploadedList {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid var(--zcat-card-border-default);\n  padding: 15px;\n  border-radius: 6px;\n  /* flex-direction: column; */\n}\nzcat-fileupload .lyteFileUploadedList{\n  flex-direction: column;\n}\n.lyteFileUpd {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  padding: 20px 30px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.lyteFileUpd:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px solid var(--zcat-inputField-border-hover);\n}\n\n/* new  */\n.lyteInputFileUpd .placeholder, .lyteFileUpd .placeholder{\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n    color: var(--zcat-inputField-text-placeholder);\n}\n.lyteFileUpdList .lyteInputFileUpd{\n  justify-content: space-between;\n}\n\n.lyteFileUploadedList .lyteuploadedfilename{\n  max-width: unset;\n}\n\nlyte-file-close {\n    background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M9 3L3 9M3 3L9 9\" stroke=\"%23101F3E\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n    width: 12px;\n    height: 12px;\n    background-repeat: no-repeat;\n    background-position: unset;\n}\n\nhtml[data-user-color-scheme=dark] lyte-file-close {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5\" stroke=\"%23EEEEEE\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\n\n.multi-file-upload .multiFileupload .lyteFileUpdList {\n    margin-top: 6px;\n}\n.multi-file-upload .lyteFileUpdList{\n  display: flex;\n  flex-direction: column;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList{\n    border: 1px solid var(--zcat-inputField-border-default);\n    border-radius: 6px;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd {\n  justify-content: space-between;\n  border: none;\n  border-bottom: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 0;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:only-child {\n  border-radius: 6px;\n  border-bottom: none;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:first-child:not(:only-child) {\n  border-radius: 6px 6px 0 0;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:last-child:not(:only-child) {\n  border-bottom: none;\n  border-radius: 0 0 6px 6px;\n}\n\n\n\n\n\n\n\n\n/* === Global base styles from reference css/zcat-fileupload.css === */\nlyte-fileupload * {\n  box-sizing: border-box;\n}\nlyte-file-message,\nlyte-fileupload,\nlyte-file-select-area {\n  position: relative;\n  font-family: var(--zcat-font-family-primary);\n  font-weight: 400;\n  display: block;\n}\nlyte-fileupload::after {\n  content: attr(error-message);\n  position: absolute;\n  top: 100%;\n  left: 0;\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-error);\n  padding-top: 1px;\n}\n\nzcat-fileupload .lyteInputFileUpd, .lyteInputFileUpd {\n  display: flex;\n  align-items: center;\n  /* justify-content: space-between; */\n  gap: 4px;\n  height: 36px;\n  min-width: 300px;\n  padding-left: 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 8px;\n}\n.lyteInputFileUpd {\n  justify-content: space-between;\n}\nzcat-fileupload .lyteInputFileUpd {\n  justify-content: flex-start; /* or unset */\n}\n\n\n.lyteInputFileUpd:hover {\n  border: 1px solid var(--zcat-inputField-border-hover);\n  background: var(--zcat-inputField-bg-hover);\n}\n.lyteInputFileUpd:hover .sm-upload-icon {\n  /* background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.91671 4.66667L7.00004 1.75L4.08337 4.66667\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7 1.75V8.75\" stroke=\"%23101f3e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>'); */\n  width: 14px;\n  height: 14px;\n}\n.lyteFileUpdMsgWrap {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  box-sizing: border-box;\n  cursor: pointer;\n  outline: none;\n  background: var(--zcat-inputField-bg-default);\n  text-align: center;\n  color: var(--zcat-inputField-text-active);\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  /* border-radius: 10px; */\n  /* padding: 30px; */\n  /* border: 1px dashed #b8bdbe; */\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap:hover {\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.fileDragEnter.lyteFileUpdInputType .lyteFileUpdMsgWrap,\n.fileDragEnter.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  border: 1px dashed var(--zcat-inputField-border-active);\n  background: var(--zcat-inputField-bg-active);\n}\n.lyteFileUpdMsg {\n  position: relative;\n  line-height: 21px;\n}\n.fileDragEnter .lyteFileUpdMsg {\n  opacity: 0.7;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg {\n  padding-left: 0px;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg::before {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  background-position: -155px -203px;\n  width: 30px;\n  height: 21px;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n}\n.lyteFileUpdThumb {\n  display: block;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  border: 1px solid var(--zcat-inputField-border-default);\n}\n\n.multiFileupload .lyteFileUpdList {\n  /* margin-top: 15px; */\n}\n.multiFileupload .lyteFileUpdListFile {\n  margin-bottom: 10px;\n}\n.lyteFileUpdListFile {\n  position: relative;\n  display: flex;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 0;\n  align-items: center;\n}\n.lyteFileUpdListFile.error {\n  background: var(--zcat-inputField-bg-error);\n  border: 1px solid var(--zcat-inputField-border-error);\n}\n.lyteFileUpdTypePreview {\n  margin-right: 10px;\n}\n.lyteFileUpdTypeIcon::after {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  display: block;\n  background-position: -117px -198px;\n  width: 21px;\n  height: 26px;\n}\n.lyteFileUpdTypeIcon.pdf::after {\n  background-position: -8px -198px;\n}\n.lyteFileUpdTypeIcon.video::after {\n  background-position: -35px -198px;\n}\n.lyteFileUpdTypeIcon.image::after {\n  background-position: -63px -198px;\n}\n.lyteFileUpdTypeIcon.zip::after {\n  background-position: -90px -198px;\n}\n.lyteFileUpdFileName {\n  color: var(--zcat-inputField-text-active);\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  margin-right: 10px;\n  max-width: calc(100% - 300px);\n  white-space: nowrap;\n}\n.lyteFileUpdFileSize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n  margin-right: auto;\n  white-space: nowrap;\n}\n.lyteFileUpdFileStatus {\n  display: flex;\n  margin-right: 10px;\n}\n.lyteFileUpdProgressBar {\n  height: 5px;\n  width: 140px;\n  background: var(--zcat-card-bg-secondary);\n  flex-grow: 1;\n  border-radius: 5px;\n}\n.lyteFileUpdProgressFill {\n  height: 5px;\n  background: var(--zcat-primary-10);\n  width: 0;\n  border-radius: 5px;\n  transition: width 0.1s linear;\n}\nlyte-file-retry {\n  display: inline-flex;\n  margin-right: 10px;\n}\n.lyteFileUpdFailMsg {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-error);\n  margin-right: 10px;\n  text-transform: capitalize;\n  cursor: default;\n}\n.lyteFileUpdRetryMsg {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n  text-transform: capitalize;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.lyteFileUpdRetryMsg:hover {\n  color: var(--zcat-inputField-text-active);\n}\n/* lyte-file-close {\n  cursor: pointer;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M10.5 3.5L3.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.5 3.5L10.5 10.5' stroke='%234D618A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  background-position: -2px;\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n} */\n\n.lyteFileUpdListFile.success lyte-file-close {\n  visibility: hidden;\n}\n.lyteFileUpdListFile.success:hover lyte-file-close {\n  visibility: visible;\n}\nlyte-file-close:hover {\n  opacity: 1;\n}\n.lyteFileUpdBoxType #lyteFileUpdSelectedFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n}\n.lyteFileUpdInputType .lyteFileUpdMsgWrap {\n  padding: 7px 10px;\n  border-radius: 3px;\n  border: 1px dashed var(--zcat-inputField-border-default);\n  background: var(--zcat-inputField-bg-default);\n  text-align: left;\n}\n.lyteFileUpdInputType .lyteFileUpdMsgWrap:hover {\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.lyteFileUpdInputType .lyteFileUpdListFile {\n  padding: 7px 10px;\n  border: 1px dashed var(--zcat-inputField-border-default);\n  border-radius: 3px;\n  background: var(--zcat-inputField-bg-default);\n}\n.lyteFileUpdInputType .lyteFileUpdListFile.error {\n  background: var(--zcat-inputField-bg-error);\n  border: 1px dashed var(--zcat-inputField-border-error);\n}\n.lyteFileUpdInputType .lyteFileUpdFileName {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  max-width: calc(100% - 250px);\n}\n.lyteFileUpdFileName {\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n  max-width: calc(100% - 30px);\n}\n.lyteFileUpdFileName::before {\n  content: ' File Name : ';\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdFileSize::before {\n  content: ' File Size : ';\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdFileSize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-label);\n}\n.lyteFileUpdInputType lyte-file-close {\n  background-position: -324px -162px;\n  width: 10px;\n  height: 10px;\n}\n.lyteFileUpdBtnType .lyteFileUpdMsgWrap {\n  width: 30px;\n  height: 30px;\n  background: var(--zcat-primary-10);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lyteFileUpdBtnType .lyteFileUpdMsgWrap::after {\n  content: '';\n  background-image: url(../../images/sprite_lyte.svg);\n  background-position: -197px -205px;\n  width: 15px;\n  height: 19px;\n  display: block;\n}\n.lyteFileUpdListFile.error .lyteFileUpdFileStatus,\n.lyteFileUpdListFile.success .lyteFileUpdFileStatus,\n.lyteFileUpdBtnType .lyteFileUpdMsg,\n.fileuploadInput,\n.lyteFileUpdInputType .lyteFileUpdTypePreview,\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap.lyteHide,\nlyte-fileupload .lyteHide {\n  display: none;\n}\n.lyteFileUpdDisabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n/* file upload */\n.lyteuploadedfilename {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-active);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: calc(100% - 20px);\n}\n.lyteuploadedfilesize {\n  font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-secondary);\n  padding-top: 5px;\n}\n\n.lg-upload-icon {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.8334 9.33333L14 3.5L8.16669 9.33333' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 3.5V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 28px;\n  height: 28px;\n}\nzcat-fileupload .lg-upload-icon{\n  background-image: none;\n  width: 0;\n  height: 0;\n}\n.sm-upload-icon {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.91671 4.66667L7.00004 1.75L4.08337 4.66667\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7 1.75V8.75\" stroke=\"%237988a8\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n  width: 14px;\n  height: 14px;\n}\n.sm-upload-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 100%;\n  /* background-color: var(--zcat-card-bg-secondary); */\n  border-radius: 0px 5px 5px 0px;\n}\n.zcat-invalid .lyteInputFileUpd,\n.zcat-invalid .lyteInputFileUpd:hover,\n.zcat-invalid .lyteFileUpd,\n.zcat-invalid .lyteFileUpd:hover {\n  border-color: var(--zcat-inputField-border-error);\n  background: var(--zcat-inputField-bg-error) !important;\n}\n\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap {\n  background: var(--zcat-linkbox-bg-default);\n  border: 1px solid var(--zcat-linkbox-border-default);\n  padding: 48px 30px 20px 30px;\n  border-radius: 6px;\n}\n.lyteFileUpdBoxType .lyteFileUpdMsgWrap:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px dashed var(--zcat-inputField-border-hover);\n}\n.lyteFileUpdBoxType .lyteFileUpdMsg::before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cpath d='M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.8334 9.33333L14 3.5L8.16669 9.33333' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 3.5V17.5' stroke='%234D618A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  width: 28px;\n  height: 23px;\n  background-position: center;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -30px;\n}\n.lyteFileUpdMsg {\n  font: var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-inputField-text-placeholder);\n}\n.lyteFileUpdBoxType #lyteFileUpdSelectedFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n}\n.lyteFileUpdListFile {\n  background: var(--zcat-card-bg-secondary);\n  border: 1px solid var(--zcat-card-border-default);\n  padding: 15px;\n  border-radius: 6px;\n}\n.lyteFileUpdTypePreview {\n  display: none;\n}\n.lyteFileUpdListFile.success lyte-file-close {\n  visibility: visible;\n}\n.lyteFileUpdListFile {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n.lyteFileUpdFileSize + lyte-file-close,\n.lyteFileUpdFileStatus + lyte-file-close {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n\n\n\n/* Sept 3 */\n/* old  */\n.lyteFileUploadedList {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid var(--zcat-card-border-default);\n  padding: 15px;\n  border-radius: 6px;\n  /* flex-direction: column; */\n}\nzcat-fileupload .lyteFileUploadedList{\n  flex-direction: column;\n}\n.lyteFileUpd {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-inputField-border-default);\n  padding: 20px 30px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.lyteFileUpd:hover {\n  background: var(--zcat-inputField-bg-hover);\n  border: 1px solid var(--zcat-inputField-border-hover);\n}\n\n/* new  */\n.lyteInputFileUpd .placeholder, .lyteFileUpd .placeholder{\n  font: var(--zcat-input-text-font-weight) var(--zcat-input-text-font-default) var(--zcat-font-family-primary);\n    color: var(--zcat-inputField-text-placeholder);\n}\n.lyteFileUpdList .lyteInputFileUpd{\n  justify-content: space-between;\n}\n\n.lyteFileUploadedList .lyteuploadedfilename{\n  max-width: unset;\n}\n\nlyte-file-close {\n    background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M9 3L3 9M3 3L9 9\" stroke=\"%23101F3E\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n    width: 12px;\n    height: 12px;\n    background-repeat: no-repeat;\n    background-position: unset;\n}\n\nhtml[data-user-color-scheme=dark] lyte-file-close {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5\" stroke=\"%23EEEEEE\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>');\n}\n\n.multi-file-upload .multiFileupload .lyteFileUpdList {\n    margin-top: 6px;\n}\n.multi-file-upload .lyteFileUpdList{\n  display: flex;\n  flex-direction: column;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList{\n    border: 1px solid var(--zcat-inputField-border-default);\n    border-radius: 6px;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd {\n  justify-content: space-between;\n  border: none;\n  border-bottom: 1px solid var(--zcat-inputField-border-default);\n  border-radius: 0;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:only-child {\n  border-radius: 6px;\n  border-bottom: none;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:first-child:not(:only-child) {\n  border-radius: 6px 6px 0 0;\n}\n\n.multi-file-upload .fileUploaded .lyteFileUpdList .lyteInputFileUpd:last-child:not(:only-child) {\n  border-bottom: none;\n  border-radius: 0 0 6px 6px;\n}\n\n\n\n\n\n\n</style>";;
ZcatFileupload._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,3,1,1]},{"t":"a","p":[1,3,3]},{"t":"cD","p":[1,3,3],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"lc_id_1":{"dc":[1,0],"hc":true,"trans":true},"lc_id_2":{"dc":[1,0],"hc":true,"trans":true},"lc_id_3":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatFileupload._observedAttributes = ["zcatProp", "featureObj", "errorMessage", "uploadedIcon", "errorObj"];


ZcatFileupload.register("zcat-fileupload", {
  hash: "ZcatFileupload_4",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 2899494:
/*!***************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-fileupload.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteFileuploadComponent": () => (/* binding */ LyteFileuploadComponent)
/* harmony export */ });
/* harmony import */ var _helpers_helpers_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers-dev.js */ 32124620);
/* harmony import */ var _lyte_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lyte-text.js */ 53043315);
/* harmony import */ var _slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@slyte/core/index.js */ 60469700);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component.js */ 98708570);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lyte-dom/modules/lyte-dom-utils.js */ 52000102);
/* harmony import */ var _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@slyte/component/index.js */ 93132498);








/**
 * Renders a fileupload
 * @component lyte-fileupload
 * @dependency lyte-text, lyte-tooltip
 * @version 2.2.9
 * @utility upload,removeUpload,addFiles,predefined,openSelection
 * @methods beforeRender,afterRender,onBeforeAdd,onAdd,onBeforeRemove,onRemove,onBeforeSend,onSend,onFileSuccess,onFileRemove,onRequestSuccess,onRequestFailure,onSuccess,onFailure,
 * onProgress,onRetry,onReject,onChunkSuccess,onChunkError,onBeforeOpen,onDragEnter,onDragOver,onDragLeave,onBeforeDrop,onDrop,onBeforePaste,onPaste
 */
class LyteFileuploadComponent extends _component_js__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
        super();
        this._lyteUtilFunctions = [ 'upload', 'removeUpload', 'addFiles', 'predefined', 'openSelection' ];
    }

    init() {
		this.getMethods( 'beforeRender' ) && this.executeMethod( 'beforeRender', this.$node )
	}

    didConnect() {
		this._file = this.$node.querySelector( 'input.fileuploadInput' );
		this.$node.upload = this.processqueue.bind( this );
		this.$node.removeUpload = function( id ){
			if( id ) {
				this.removeFrmUpload( id, 'queueList' );
			} else {
				this.removeFrmUpload(this.data.queueList, 'queueList', true);
			}
			this._file.value = "";
		}.bind(this)
		this.$node.predefined = function (files) {
			if (!Array.isArray(files)) {
				files = [files]
			}
			for(var index=0;index<files.length;index++){
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.data.predefinedList,"push",files[index]);
			}
		}.bind(this);
        /**
		* @utility addFiles
		* @version 2.2.15
		*/
		this.$node.addFiles = function (files) {
			if (!Array.isArray(files)) {
				files = [files]
			}
			this.validate(files);
		}.bind(this);
		this.folderUpload();
		this.getMethods( 'afterRender' ) && this.executeMethod( 'afterRender', this.$node );
	}

    didDestroy() {
		this.$node.removeUpload();
		if (this._triggerId) {
			clearTimeout(this._triggerId);
			delete this._triggerId;
		}
		if (this._resetId) {
			clearTimeout(this._resetId);
			delete this._resetId;
		}
		delete this._file;
		delete this.$node.upload;
		delete this.$node.removeUpload;
		delete this.$node.predefined;
		delete this.$node.addFiles;
		delete this.$node.openSelection;
	}

    addAriaForButton(aria, key, dataName, defaultValue) {
		if(aria.hasOwnProperty(key)) {
			defaultValue = aria[key];
			delete aria[key];
		}
		this.setData(dataName,defaultValue);
	}

    addAriaValues(newAria) {
		var oldAria = this.data.commonAriaLabel;
		var fileUploadWrapper = this.$node.querySelector(".fileUploadWrapper");
		newAria = Object.assign({}, newAria);
		this.addAriaForButton(newAria, "close-label", "ariaCloseLabel", "remove");
		window._lyteUiUtils.setAttribute(fileUploadWrapper, newAria, oldAria);
		this.setData("commonAriaLabel", newAria);
	}

    data(arg1) {
		return Object.assign(super.data({
			// file input property
			/**
			 * @componentProperty {string} ltPropName=file
			 */
			ltPropName: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { "default": "file" }),
			/**
			 * @componentProperty {boolean} ltPropMultiple=true
			 */
			ltPropMultiple: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { "default": true }),
			/**
			 * @componentProperty {string} ltPropAccept
			 */
			ltPropAccept: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { "default": '' }),
			/**
			 * @componentProperty {string} ltPropId
			*/
			ltPropId: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { "default": '' }),
			/**
			 * @componentProperty {string} ltPropClass
			 */
			ltPropClass: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { "default": '' }),
			/**
			 * @componentProperty {Box | Btn | Input} ltPropAppearance=Box
			 */
			ltPropAppearance: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', {
				"default": window._lyteUiUtils.resolveDefaultValue('lyte-fileupload', 'appearance', "Box")
			}),
			/**
			 * @componentProperty {boolean} ltPropDisabled=false
			 */
			ltPropDisabled: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { "default": false }),
			// file uploader data
			/**
			 * @componentProperty {boolean} ltPropYield=false
			 */
			ltPropYield : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'boolean', { "default" : false } ),
			// ltPropMultipleUpload : Lyte.attr( 'boolean', { default : true } ),
			/**
			 * @componentProperty {number} ltPropFileLimit
			*/
			ltPropFileLimit : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number', { "default" : window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'fileLimit', undefined ) } ),
			/** 
			 * @componentProperty {number} ltPropMinimumFileSize=0
			 * @version 2.2.11
			*/
			ltPropMinimumFileSize : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number',{"default": window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'minimumFileSize', 0 ) } ),
			/** 
			 * @componentProperty {number} ltPropTotalFilesSize
			 * @version 3.2.1
			*/
			ltPropTotalFilesSize : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string'),
			/** 
			 * @componentProperty {number} ltPropParallel=2
			*/
			ltPropParallel : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number', { "default" : 2 } ),
			/** 
			 * @componentProperty {boolean} ltPropAutoUpload=true
			*/
			ltPropAutoUpload : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'boolean', { "default" : true } ),
			/** 
			 * @componentProperty {boolean} ltPropTriggerUpload=false
			*/
			ltPropTriggerUpload : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'boolean', { "default" : false } ),
			/** 
			 * @componentProperty {string} ltPropParamName=file
			 */
			ltPropParamName : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'string', { 
				"default" : window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'paramName', 'file' ) 
			} ),
			/** 
			 * @componentProperty {boolean} ltPropThumb=false
			 */
			ltPropThumb : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'boolean', { "default" : false } ),
			/** 
			 * @componentProperty {number} ltPropTabindex=0
			 */
			ltPropTabindex : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number', { "default" : 0 } ),
			/** 
			 * @componentProperty {number} ltPropRetry=2
			 */
			ltPropRetry : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number', { 
				"default" : window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'retry', 2 )
			} ),
			/** 
			 * @componentProperty {Bytes | KB | MB | GB | TB | PB | EB | ZB | YB} ltPropFileUnit
			 */
			ltPropFileUnit : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'string', { "default" : '' } ),
			/**
			 * @componentProperty {number} ltPropDigits=1
			 */
			ltPropDigits : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'number', { 
				"default" : window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'digits', 1 ) 
			} ),
			/**
			 * @componentProperty {string} ltPropMessage
			 * @default Drag file here or browse to upload
			 */
			ltPropMessage: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', {
				"default": window._lyteUiUtils.resolveDefaultValue('lyte-fileupload', 'message', "Drag file here or browse to upload")
			}),
			/**
			 * @componentProperty {string} ltPropFailureMessage
			 * @default Attachment failed
			 */
			ltPropFailureMessage: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', {
				"default": window._lyteUiUtils.resolveDefaultValue('lyte-fileupload', 'failureMessage', "Attachment failed")
			}),
			/**
			 * @componentProperty {string} ltPropRetryText=Retry
			 */
			ltPropRetryText: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', {
				"default": window._lyteUiUtils.resolveDefaultValue('lyte-fileupload', 'retryText', "Retry")
			}),
			ltPropFiles: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array", { "default": [] }),
			/**
			 * @componentProperty {boolean} ltPropChunk=false
			 */
			ltPropFolder: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { "default": false }),
			// chunking
			/**
			 * @componentProperty {boolean} ltPropChunk=false
			 */
			ltPropChunk: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { "default": false }),
			/**
			 * @componentProperty {number} ltPropChunkSize=2000000
			 */
			ltPropChunkSize: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number', { "default": 2000000 }),
			/**
			 * @componentProperty {boolean} ltPropParallelChunkUpload=false
			 */
			ltPropParallelChunkUpload: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { "default": false }),
			/**
			 * @componentProperty {number} ltPropParallelChunkCount=Infinity
			 */
			ltPropParallelChunkCount: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number', { "default": Infinity }),
			/**
			 * @componentProperty {number} ltPropChunkRetry=2
			 */
			ltPropChunkRetry: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number', { "default": 2 }),

			// preventing multiple upload
			/**
			 * @componentProperty {boolean} ltPropUploadMultiple=false
			 */
			ltPropUploadMultiple: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean', { "default": false }),
			/**
			 * @componentProperty {number} ltPropUploadMultipleCount=Infinity
			 */
			ltPropUploadMultipleCount: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number', { "default": Infinity }),
			/**
				 * @typedef {Object} ajaxConfig
			 * @property {string} url=''
			 */
			/**
			 * @componentProperty {ajaxConfig} ltPropAjax
			 */
			ltPropAjax: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { "default": { url: '' } }),
			/**
			 * @componentProperty {boolean} ltPropAllowReplace=false
			 */
			ltPropAllowReplace: (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { "default": false }),
			/**
			 * @componentProperty {number} ltPropFilesCount=Infinity
			 * @version 3.25.0
			 */
			ltPropFilesCount : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("number",{"default" : Infinity}),
			/**
            * @componentProperty {object} ltPropAriaAttributes
            * @version 3.1.0
            * @default {}
            */
 			ltPropAriaAttributes : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'object', { default : window._lyteUiUtils.resolveDefaultValue( 'lyte-fileupload', 'ariaAttributes', {
				role : "button",
				'aria-roledescription' : "fileupload"
			}), watch : true }),
			/**
            * @componentProperty {boolean} ltPropReset=false
            * @version 3.59.0
			*/
			ltPropReset : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ default : false}),
			/**
			* @componentProperty {boolean} ltPropReset=false
			* @version 3.59.0
			*/
			ltPropPreventDuplicate : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ default : false}),
			ltPropListErrorFiles : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default : false}),

			ltPropResetFileValue : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean", { default : false}),
			ltPropAria : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{default : false}),
			ltPropDataTabindex : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string",{ default : ""}),
			ltPropValidateByExt : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ default : false}),
			ltPropRenameDuplicateFile : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ default : false}),
			ltPropActiveElement : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ default : false}),
			// system data
			queueList : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'array', { "default" : [] } ),
			predefinedList : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('array',{ "default" : []}),
			currentUpload : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'array', { "default" : [] } ),
			chunkUpload : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('array',{ "default" : []}),
			fileClass : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)( 'string', { "default" : '' } ),
			chunkCount : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number', { "default" : 0}),
			abort : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("boolean",{ "default" : false}),
			lxhrs : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array",{"default" : []}),
			uploadedFiles : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array",{"default" :[]}),
			manualUpdFiles : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("array",{"default" :[]}),
			uploadMultipleRetry : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number',{"default":0}),
			retryFiles : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('array',{"default" : []}),
			retry : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean',{"default" : false}),
			manualUpload : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('boolean',{"default" : false}),
			totalFilesSize : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number'),
			curTotFilesSize : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('number',{"default":0}),
			ariaCloseLabel : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string"),
			commonAriaLabel : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("object",{"default": {}}),
			ariaSelectedFiles : (0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string",{"default": "0"}),
			randomAriaId:(0,_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)("string")
		}), arg1);		
	}

    getFileDataAsString(array) {
		var string = "";
		var sizeHelper = this.$component.registeredHelpers.lyteUiFileSize;
		var ltPropFileUnit = this.data.ltPropFileUnit;
		var ltPropDigits = this.data.ltPropDigits;
		array.forEach(function (item) {
			string += ("name " + item.name + " size " + sizeHelper(item.size, ltPropFileUnit, ltPropDigits)) + " "
		});
		return string;
	}

    constructAriaString() {
		if(this.data.ltPropAria) {
			var selectFiles = this.getFileDataAsString( this.data.predefinedList);
			selectFiles = this.getFileDataAsString( this.data.queueList);
			if(selectFiles) {
				this.setData("ariaSelectedFiles", selectFiles);
			}
			else {
				this.setData("ariaSelectedFiles", "0");
			}
		}
	}

    constructReasonAsStr(object) {
		var str = "";
		if(object.fileCount) {
			str = "Allowed File Count " + this.data.ltPropFilesCount;
		}
		else if(object.duplicate) {
			str = "The file name already exist";
		}
		else if(object.type) {
			str = "Invalid file type";
		}
		if(object.size) {
			str = (str ? str +" and " : "") + "Invalid file size";
		}
		else if(object.totalSize) {
			str = (str ? str +" and " : "") + "Exceeds total file size";
		}
		return str;
	}

    exceedTotalCount() {
		var fileCount =  this.data.ltPropFilesCount;
		if(fileCount !== Infinity)  {
			var predefinedList = this.data.predefinedList || [];
			var noOfFiles = predefinedList.length + this.getValidQueueListCount();
			if(noOfFiles < fileCount) {
				return false;
			}
			return true;
 		}
		return false;
	}

    folderUpload() {
		var folder =  this.data.ltPropFolder
		if(folder){
			this._file.setAttribute("webkitdirectory",true);
		}
		else {
			this._file.removeAttribute("webkitdirectory");
		}
	}

    validateAndGetType(fileName, fileType, reason) {
		var acceptRegex = new RegExp( this.data.ltPropAccept.replace(/\s+/g,"").split(",").join("|"));
		var extension="", type, extensionWithDot;
		if(fileName){
			extension = fileName.substring(fileName.lastIndexOf('.')+1, fileName.length);
			extensionWithDot = "."+extension;
		}
		if(!this.data.ltPropValidateByExt && acceptRegex.test(fileType)){
			type = fileType.match(/(video|image|pdf|zip)/ig);
			type = type && type[0] ? type[0] : extension;
		}
		else if (acceptRegex.test(extension) || acceptRegex.test(extensionWithDot)) {
			type = extension;
		}
		else {
			reason.type = "Invalid_Type";
		}
		return type;
	}

    validateSize(file, reason) {
		if(file.size < this.data.ltPropMinimumFileSize){
			reason.size = "Lower_Size";
		}
		else if (file.size > this.data.ltPropFileLimit) {
			reason.size = "Higher_Size";
		}
		else if (this.checkTotalFilessize(file.size)) {
			reason.totalSize = "Exceeds";
		}
	}

    checkFileName(fileName, fileObject) {
		return fileName === fileObject.name;
	}

    findDuplicateInArray(array, fileName) {
		var index = this.findIndex(array, this.checkFileName.bind( this, fileName ))
		return index > -1;
	}

    validateDuplicateFile(fileObject, reason) {
		if(this.data.ltPropPreventDuplicate) {
			var predefinedList =  this.data.predefinedList;
			var queueList =  this.data.queueList;
			var fileName = fileObject.name;
			var duplicate = this.findDuplicateInArray(predefinedList, fileName);
			duplicate = duplicate || this.findDuplicateInArray(queueList, fileName);
			if (duplicate) {
				reason.duplicate = true;
				return false;
			}
		}
		return true;
	}

    validate(files) { 
		var promises = [],clearflag=false, listErrorFiles = this.data.ltPropListErrorFiles;
		for( var j = 0; j < files.length; j++ ) {
			var reason = {}, isChunk=this.data.ltPropChunk,
			fileName=files[ j ].name,fileType=files[ j ].type,
			type;
			if(this.exceedTotalCount())  {
				reason.fileCount = "Exceeds"; 
				type = fileType ? fileType : fileName.substring(fileName.lastIndexOf('.')+1, fileName.length);
			}
			else if(this.validateDuplicateFile(files[ j ], reason)){
				type = this.validateAndGetType(fileName, fileType, reason);
				this.validateSize(files[ j ], reason);
			}
			if ( Object.keys(reason).length > 0 ){ 
				var rejectedFile =  files[ j ],
				fileObject = listErrorFiles ? this.constructFileObject(rejectedFile, isChunk, type, this.constructReasonAsStr(reason)) : void 0;
				clearflag = true;
				this.getMethods( 'onReject' ) && this.executeMethod( 'onReject', rejectedFile, reason, this.$node, fileObject);
				if(listErrorFiles) { 
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.queueList, 'push', fileObject );
				}
				else if(reason.fileCount) {
					break;
				}
			} else {
				var ret, fileObject = this.constructFileObject(files[ j ], isChunk, type);
				if( this.getMethods( 'onBeforeAdd' ) ) {
					ret = this.executeMethod( 'onBeforeAdd', files[ j ], this.$node, fileObject);
				}
				if (ret == false) {
					clearflag = true;
					if(listErrorFiles) { 
						fileObject.lyteErrorMsg = fileObject.lyteErrorMsg || "Invalid File"
						;(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.queueList, 'push', fileObject );
					}
					continue;
				} else if (ret && ret.then) {
					promises.push(ret);
					var cur = files[j];
					Promise.resolve(ret).then(this.add.bind(this, cur, isChunk, type))
				} else {
					this.add(files[ j ], fileObject);
				}
				if (!this.data.ltPropMultiple) {
					break;
				}
			}
		}
		if (clearflag || this.data.ltPropResetFileValue) {
			this._file.value = "";
		}
		if( this.data.ltPropAutoUpload ){
			promises.length ? this.$addon.resolvePromises( promises ).then( this.processqueue.bind( this ) ) : this.processqueue();
		} 
		this.constructAriaString();
 	}

    getValidQueueListCount() {
		var queueList = this.data.queueList;
		var ltPropListErrorFiles =  this.data.ltPropListErrorFiles;
		if(ltPropListErrorFiles) {
			var array = queueList.filter(function(item){
				return !item.lyteErrorMsg;
			});
			return array.length;
		}
		return queueList.length;
	}

    changeFileName(fileObject) {
		if(this.data.ltPropRenameDuplicateFile) {
			var fileNames = [];
			var predefined = this.data.predefinedList;
			var queueList = this.data.queueList;
			var fileName = fileObject.name;
			predefined.reduce(function(fileNames, file){
				fileNames.push(file.name);
				return fileNames;
			},fileNames);
			queueList.reduce(function(fileNames, file){
				fileNames.push(file.name);
				return fileNames;
			},fileNames);
			if(fileNames.indexOf(fileName) > -1) {
				var lastDot =  fileName.lastIndexOf('.');
				var tempName = fileName.substring(0, lastDot);
				var extension = fileName.substring(lastDot+1, fileName.length);
				var postSpace = "", number = "", openBracket,
				closeMatached, completeMatch, newName = "";
				for(var index=tempName.length - 1; index > 0; index--){
					var text = tempName[index];
					if(closeMatached) {
						if(text === "(") {
							completeMatch = true;
							openBracket = index;
							break;
						}
						else if(text.match(/[0-9]/)) {
							number =  text + number;
						}
						else {
							break;
						}
					}
					else if(text === ")") {
						closeMatached = true;
					}
					else if(text.match(/\s/)) {
						postSpace = text + postSpace;
					}
				}
				if(completeMatch && number) {
					number = parseInt(number) + 1;
				}
				else {
					number = 1;
				}
				newName = (completeMatch ? tempName.substring(0, openBracket)+"("+number+")"+postSpace : tempName+"("+number+")")+"."+extension;
				while(fileNames.indexOf(newName) > -1) {
					++number;
					newName = (completeMatch ? tempName.substring(0, openBracket)+"("+number+")"+postSpace : tempName+"("+number+")")+"."+extension;
				}
				fileObject.name = newName
			}
		}
	}

    constructFileObject(file, isChunk, fileType, errorMsg) {
		var fileObject = { id : 'lyte' + new Date().getTime() + parseInt( Math.random() * 10E10 ), file : file, size : file.size, name : file.name, isChunk: isChunk, retry : 0, fileType : ( fileType? fileType:'document') };
 		if( this.data.ltPropThumb && /image/i.test( file.type ) ) {
 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( fileObject, 'src', URL.createObjectURL( file ) );
		}
		if(errorMsg) {
			fileObject.lyteErrorMsg =  errorMsg;
		}
		else {
			this.changeFileName(fileObject);
		}
		return fileObject;
	}

    add(file, fileObject) { //fileobject => file info,  file =>File Constructor
		(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.queueList, 'push', fileObject );
		this.addToTotalFilesSize(file.size);
		(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.uploadedFiles, 'push', fileObject );
		(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.ltPropFiles, 'push' , file);
		this.getMethods( 'onAdd' ) && this.executeMethod( 'onAdd', file, this.$node, fileObject );
 	}

    chkId(id, obj) {
 		 return obj.id == id;
 	}

    SendingFile() {
		var data = this.data, 
		manualUpdFiles = data.manualUpdFiles;
		for(var index =0 ; index < manualUpdFiles.length ;){
			var current = manualUpdFiles[index];
			if (!current.status || (current.isChunk && current.status == "uploading")) {
				if (current.isChunk) {
					if (!current.status) {
						this.setData("manualUpload", true);
						this.uploadFile(current);
						break;
					}
					else if (current.finished + current.currentUploadingChunks < current.chunks.length) {
						this.setData("manualUpload", true);
						this.uploadFile(current);
						break;
					}
					else {
						index++;
					}
				}
				else{
					if(data.currentUpload.length < data.ltPropParallel){
						this.setData("manualUpload",true);
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( data.currentUpload, 'push', current );
						this.uploadFile( current );
						index++;
					}
					else {
						break;
					}
				}
			}
			else {
				index++;
			}
		}
		if (index === manualUpdFiles.length) {
			this.finishcallback(manualUpdFiles);
		}
	}

    processqueue(id, check, frmRetry) {
 		var data = this.data, idx = 0,
		 multiple = [];
		 if(id && !frmRetry){
			if(!Array.isArray(id)) {
				id = [ id ];
			}
			for( var i = 0; i < id.length; i++ ) {
				var fileId =  id[ i ].id || id[ i ];
				var file = data.queueList[ this.findIndex( data.queueList, this.chkId.bind( this, fileId ) ) ];
				if(file){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.manualUpdFiles, 'push', file );
				}
			}
			if (this.data.manualUpdFiles.length) {
				this.SendingFile();
				return;
			}
		}
		if (data.manualUpload) {
			this.SendingFile();
			return;
		}
 		while( ( ((data.currentUpload.length < data.ltPropParallel) || (data.ltPropUploadMultiple && data.currentUpload.length < data.ltPropUploadMultipleCount)) /*|| ( !data.ltPropMultipleUpload && !data.currentUpload.length ) */) || frmRetry && data.queueList.length  ) {
 			var current = data.queueList[ idx ];
 			if( id ) {
 				id = typeof id === 'object' ? id.id : id;
				current = data.queueList[ this.findIndex( data.queueList, this.chkId.bind( this, id ) ) ]
				if(frmRetry && current){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.retryFiles, 'push', current );
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( current, 'status', 'reloading' );
					if(data.uploadedFiles.indexOf(current) < 0){
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.uploadedFiles, 'push', current );
						this.retrySendingFile();
					}
					return;
				}
			}
			if (current) {
				if (/uploading|success/.test(current.status)) {
					if (id) {
						break;
					}
					if (/uploading/.test(current.status) && current.isChunk && current.finished + current.currentUploadingChunks < current.chunks.length) {
						this.processChunkQueue(current.chunks);
						break;
					}
					else {
						idx++;
						continue;
					}
				} else if (current.status == 'error' && (this.data.ltPropUploadMultiple || (current.retry >= (data.ltPropRetry - 1) || current.isChunk)) && !id) {
					idx++;
					continue;
				} else if (current.status == 'reloading') {
					idx++;
					continue;
				} else if (current.lyteErrorMsg) {
					idx++;
					continue;
				}
 				if( !current.isChunk ){
		 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( data.currentUpload, 'push', current );
				}
				if (!this.data.ltPropUploadMultiple) {
					this.uploadFile(current)
					if (id || current.isChunk) {
						break;
					}
				} else {
					multiple.push(current);
				}
				idx++;
			} else {
				this.data.retryFiles.length && this.retrySendingFile();
				if (check) {
					this.finishcallback();
				}
				break;
			}
		}

		if (this.data.ltPropUploadMultiple && multiple.length) {
			this.uploadFile(multiple);
		}

 	}

    retrySendingFile() {
       var data = this.data, 
       retryFiles = data.retryFiles;
       for(var index =0 ; index < retryFiles.length ;){
           var current = retryFiles[index];
           if(current.status == "reloading"|| current.status == "uploading"){
               if(current.isChunk){
                   if(current.finished + current.currentUploadingChunks < current.chunks.length){
                       this.setData("retry",true);
                       this.processChunkQueue(current.chunks);
                       break;
                   }
                   else{
                       index++;
                   }
               }
               else{
                   if(data.currentUpload.length < data.ltPropParallel){
                       this.setData("retry",true);
                       (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(retryFiles,"removeAt",index);
                       (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( data.currentUpload, 'push', current );
                       this.getMethods( 'onRetry' ) && this.executeMethod( 'onRetry', {}, current, this.$node );
                       this.uploadFile( current );
                   }
                   else{
                       break;
                   }
               }
           }
           else{
               (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(retryFiles,"removeAt",index);
           }
       }
       if(!retryFiles.length){
           this.setData("retry",false);
           this.processqueue(undefined,true);
       }
    }

    findIndex(array, condition) {
	    if( typeof condition == 'function' ) {
	        for( var i = 0; i < array.length; i++ ) {
	            var ret = condition.call( array[ i ], array[ i ] );
	            if( ret ) {
	                return i;
	            }
	        }
	    } else {
	       return array.indexOf( condition );
	    }    
	}

    abortChunksFrmUpload(id) {
		var data = this.data,chunkUpload = data.chunkUpload;
		for(var index = 0;index <chunkUpload.length;){
			var chunk = chunkUpload[index];
			if (chunk.chunkProp.origin.id === id && chunk.xhr) {
				this.setData("abort", true);
				chunk.xhr.ret.abort();
			}
			else {
				index++;
			}
		}
	}

    removeFrmUpload(idd, arrnme, prevent, check) {//need to be checked
 		if( !Array.isArray(idd)) {
 			idd = [ idd ];
 		}
 		for( var i = 0; i < idd.length; i++ ) {
	 		var id = idd[ i ].id || idd[ i ];
			 var arr = this.data[ arrnme ], crct = this.findIndex( arr,  this.chkId.bind( this, id ) ) , flag ,cur ;
			 if(crct === undefined || crct < 0){
				arr = this.data.predefinedList;
				crct = this.findIndex(arr, this.chkId.bind(this, id));
				if (crct > -1) {
					arrnme = "predefinedList";
				}
			}
			if (crct >= 0) {
				if (!prevent && this.getMethods('onBeforeRemove') && this.executeMethod('onBeforeRemove', arrnme, arr[crct], this.$node) == false) {
					continue;
				}
				cur = arr[crct];
				if (arrnme === "queueList") {
					this.removeFromTotalFileSize(cur.size)
				}
				if (cur.status == 'uploading') {
					flag = true;
					if (cur.xhr) {
						this.setData("abort", true);
						cur.xhr.ret.abort();
					}
					if (cur.isChunk) {
						this.abortChunksFrmUpload(cur.id);
					}
	 			}
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( arr, 'removeAt', crct );
				if(arrnme === "queueList"){
					var lxhrs = this.getData("lxhrs");
					var lxhr = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().search(lxhrs, "fileId", cur.id)[0], index;
					if (cur.isChunk && flag) {
						this.getMethods("onFileFailure") && this.executeMethod('onFileFailure', lxhr, cur, this.$node, true);
					}
					if(!cur.lyteErrorMsg) {
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( this.data.ltPropFiles, 'removeAt', crct );
						this.removeFromTotalFileSize(cur.size)
					}
					var temparray=this.data.uploadedFiles,tempId = this.findIndex( temparray,  this.chkId.bind( this, id ) )
					if( tempId >= 0 ) {
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( temparray, 'removeAt', tempId );
					}
					var temparray=this.data.retryFiles,tempId = this.findIndex( temparray,  this.chkId.bind( this, id ) )
					if( tempId >= 0 ) {
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( temparray, 'removeAt', tempId );
					}
					index = lxhrs.indexOf(lxhr);
					index > -1 && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(lxhrs,'removeAt',index);
					if( crct <= i ) {
						i--;
					}
				}
				!prevent && this.getMethods('onRemove') && this.executeMethod('onRemove', arrnme, cur, this.$node);
			}
		}
		if (!this.data.ltPropUploadMultiple && ((arrnme == "queueList" && flag) || check)) {
			//check is a flag to used to trigger the finishcallback
			this.data.retry ? this.retrySendingFile() : this.processqueue(undefined, true);
		}
		if (arrnme === "queueList" || arrnme === "predefinedList") {
			this.constructAriaString();
		}
 	}

    uploadFile(file) {
		var props = this.$addon.deepCopyObject( this.data.ltPropAjax );
		file.isChunk ? this.proceedChunk( file, props ) : this.proceedUpload( file, props, false );
		//comments may be need in future please check git 
		// if( this.getMethods( 'onBeforeUpload' ) ) {
		// 	ret = this.executeMethod( 'onBeforeUpload', file, props, this.$node );
		// }
		// if( ret && ret.then ) {
		// 	Promise.resolve( ret ).then( function(){
		// 		file.isChunk ? this.proceedChunk( file, props ) : this.proceedUpload( file, props );
		// 	}.bind( this ))
		// } else if( ret != false ) {

		// } else {
		// 	if( file.constructor != Array ){
		// 		file = [ file ];
		// 	}
		// 	for( var i = 0; i < file.length; i++ ){
		// 		//this.removeFrmUpload( file[ i ].id, 'queueList' );
		// 		this.removeFrmUpload( file[ i ].id, 'currentUpload',true);//need to be checked
		// 	}
		// }
 	}

    succFunc(evt) {
		if(this.$node){
			var file = arguments[ 2 ].xhr.file,ret = arguments[2].xhr.ret,tempRet = [],duplicate;
			file.xhr && delete file.xhr;
			this.getMethods( 'onRequestSuccess' ) && this.executeMethod( 'onRequestSuccess', ret, file, this.$node );
			if( !Array.isArray(file) ){
				file = [ file ];
			}
			for( var i = 0; i < file.length; i++ ){
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file[ i ], 'status', 'success' );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( file[ i ], 'delete', 'xhr' );
				if(!this.data.ltPropUploadMultiple){
					var lxhrs =this.getData("lxhrs");
					duplicate = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().search(lxhrs,"fileId",file[i].id);
					duplicate.length  && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(lxhrs,'removeAt',lxhrs.indexOf(duplicate[0]));
					ret.fileId = file[i].id;
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
					this.getMethods( 'onFileSuccess' ) && this.executeMethod( 'onFileSuccess', ret, file[ i ], this.$node );
					this.removeFrmUpload( file[ i ].id, 'currentUpload' , true, true ); //need to be checked
				}
				else {
					tempRet.push(file[i].id);
					this.removeFrmUpload(file[i].id, 'currentUpload', true); //need to be checked
				}
			}
			if (this.data.ltPropUploadMultiple) {
				ret.fileId = tempRet;
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
				this.setData("uploadMultipleRetry",0);
				this.processqueue(undefined,true);
			}
			delete arguments[2].xhr.file;
		}
 	}

    reject(evt) {
		if(this.$node){
			var file = evt.xhr.file,ret=evt.xhr.ret,retry = file.retry,tempRet = [],duplicate;
			if(this.data.abort || retry >= this.data.ltPropRetry  || (this.data.ltPropUploadMultiple && this.data.uploadMultipleRetry  >= this.data.ltPropRetry) ) {
				file.xhr && delete file.xhr;
				this.getMethods( 'onRequestFailure' ) && this.executeMethod( 'onRequestFailure', ret, file, this.$node,this.data.abort );
				if( !Array.isArray(file) ){
					file = [ file ];
				}
				for( var i = 0; i < file.length; i++ ){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file[ i ], 'status', 'error' );
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( file[ i ], 'delete', 'xhr' );
					if(! this.data.ltPropUploadMultiple){
						var lxhrs =this.getData("lxhrs");
						duplicate = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().search(lxhrs,"fileId",file[i].id);
						duplicate.length  && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(lxhrs,'removeAt',lxhrs.indexOf(duplicate[0]));
						ret.fileId = file[i].id;
						this.getMethods("onFileFailure") && this.executeMethod('onFileFailure',ret,file[i],this.$node,this.data.abort);
						!this.data.abort  && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
					}
					else {
						tempRet.push(file[i].id);
					}
					this.removeFrmUpload(file[i].id, 'currentUpload', true, !this.data.abort); //need to be checked

				}
				if (this.data.ltPropUploadMultiple) {
					ret.fileId = tempRet;
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
					this.setData("uploadMultipleRetry",0);
					this.processqueue(undefined,true);
				}
				if(this.data.abort){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( evt.xhr.file, 'add', 'retry', this.data.ltPropRetry );
					this.setData("abort",false);
				}
				delete evt.xhr.file;
			} else {
				if(!this.data.ltPropUploadMultiple){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( evt.xhr.file, 'status', 'retrying' );
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( evt.xhr.file, 'add', 'retry', retry + 1 );
					this.getMethods( 'onRetry' ) && this.executeMethod( 'onRetry', ret, file, this.$node );
					this.uploadFile( file );
				}
				else {
					delete file.xhr;
					for( var i = 0; i < file.length; i++ ){
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( evt.xhr.file[i], 'status', 'retrying' );
						(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( evt.xhr.file[i], 'retry', evt.xhr.file[i].retry +1 );
					}
					this.setData("uploadMultipleRetry", this.data.uploadMultipleRetry + 1);
					this.getMethods('onRetry') && this.executeMethod('onRetry', ret, file, this.$node);
					this.uploadFile(file);
				}
			}
		}
 	}

    progress(evt) {
 		if( evt.lengthComputable ) {
	 		var total = evt.total, upload = evt.loaded, xhr = evt.target.xhr,
	 		file = xhr.file;

	 		if( !Array.isArray(file) ){
	 			file = [ file ];
	 		}
	 		for( var i = 0; i < file.length; i++ ){ 
				if(this.data.ltPropUploadMultiple){
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file[ i ] , { loaded : file[i].size, percentage : 100 } );
				}
				else{
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file[ i ] , { loaded : upload, percentage : Math.round( upload * 100 / total ) } );
				}
	 			this.getMethods( 'onProgress' ) && this.executeMethod( 'onProgress', evt, xhr, file[ i ], this.$node );
	 		}
	 	}
 	}

    removeChunk(id, origin, prevent) {
 		var arr = this.data.chunkUpload, cur = this.findIndex( arr, function( obj ){
 			return obj.chunkProp.chunkId == id
 		} )
 		if( cur > -1 ) {
 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( arr, 'removeAt', cur );
 			!prevent && this.processChunkQueue( origin.chunks )
 		}
 	}

    chunkReject(evt) {
		if(this.$node){
			var file = evt.xhr.file, origin = file.chunkProp.origin,ret = arguments[0].xhr.ret;
			if( !this.data.abort && file.retry < this.data.ltPropChunkRetry) {
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, 'status', 'retrying' );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( file, 'add', 'retry', file.retry + 1 );
				this.removeChunk( file.chunkProp.chunkId, origin, true );
				this.getMethods( 'onRetry' ) && this.executeMethod( 'onRetry',ret, file, this.$node );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'currentUploadingChunks', origin.currentUploadingChunks - 1 );
				this.processChunkQueue( file, true );
			} else {
				this.getMethods( 'onRequestFailure' ) && this.executeMethod( 'onRequestFailure', ret, file, this.$node,this.data.abort );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, 'status', 'error' );
				this.removeChunk( file.chunkProp.chunkId, origin, true );
				this.getMethods( 'onChunkError' ) && this.executeMethod( 'onChunkError', ret, file, origin, this.$node,this.data.abort );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( file, 'delete', 'xhr' );
				delete evt.xhr.file; 	
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'currentUploadingChunks', origin.currentUploadingChunks - 1 );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'error', origin.error + 1 );
				if( origin.status != 'error' ) {
					var lxhrs =this.getData("lxhrs"),duplicate;
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'status', 'error' );
					//Lyte.Component.set( this.getData("lxhrs"), origin.id, ret );
					duplicate = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().search(lxhrs,"fileId",origin.id);
					duplicate.length  && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(lxhrs,'removeAt',lxhrs.indexOf(duplicate[0]));
					ret.fileId = origin.id;
					(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
				}
				if (!this.data.abort) {
					this.abortChunksFrmUpload(origin.id);
					this.getMethods("onFileFailure") && this.executeMethod('onFileFailure', ret, origin, this.$node, this.data.abort);
					this.data.retry ? this.retrySendingFile()
						: this.processqueue(undefined, true);
				}
				else {
					this.setData("abort", false);
				}
			}
		}
 	}

    chunkSuccess(evt) {
		if(this.$node){
			var file = arguments[ 2 ].xhr.file, origin = file.chunkProp.origin,ret = arguments[ 2 ].xhr.ret;
			this.getMethods( 'onRequestSuccess' ) && this.executeMethod( 'onRequestSuccess', ret, file, this.$node );
			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, 'status', 'success' );
			this.removeChunk( file.chunkProp.chunkId, origin,true );
			this.getMethods( 'onChunkSuccess' ) && this.executeMethod( 'onChunkSuccess', ret, file, origin, this.$node );
			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.objectUtils)( file, 'delete', 'xhr' );
			delete arguments[ 2 ].xhr.file;
			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'finished', origin.finished + 1 );
			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'currentUploadingChunks', origin.currentUploadingChunks - 1 );
			if( origin.finished == origin.total ) {
				var lxhrs =this.getData("lxhrs"),duplicate;
			   	(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, 'status', 'success' );
				duplicate = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().search(lxhrs,"fileId",origin.id);
				duplicate.length  && (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(lxhrs,'removeAt',lxhrs.indexOf(duplicate[0]));
				ret.fileId = origin.id;
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)(this.getData("lxhrs"),'push',ret);
				this.getMethods( 'onFileSuccess' ) && this.executeMethod( 'onFileSuccess', ret, origin, this.$node );
				this.data.retry ? this.retrySendingFile()
					: this.processqueue(undefined, true);
			}
			else {
				this.processChunkQueue(origin.chunks, true);
			}
		}
		
 	}

    chunkProgress(evt) {
 		if( evt.lengthComputable ) {
 			var total = evt.total, upload = evt.loaded, file = evt.target.xhr.file, origin = file.chunkProp.origin, diff = upload - file.loaded;
 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, 'loaded', upload );
 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( origin, { loaded : Math.min( origin.loaded + diff, origin.size ), percentage : Math.min( Math.round( ( origin.loaded + diff ) * 100 / origin.size ), 100 ) } );
 			this.getMethods( 'onProgress' ) && this.executeMethod( 'onProgress', evt, evt.target.xhr, origin, this.$node )
 		}
 	}

    proceedChunk(files, props) {
 		var data = this.data, chunkSize = data.ltPropChunkSize, oriSize = files.size, size = 0, blobs = [];
 		while( size <= oriSize ){
			var start = size, end =  Math.min( oriSize, size += chunkSize ),totalChunkSize = end - start;
 			blobs.push( { file : files.file.slice( start, end ), chunkProp : {
 			  chunkOffset : start, 
			  chunkEnd : end, 
			  chunkSize : totalChunkSize,
 			  chunkId : "lyteChunk" + new Date().getTime() + parseInt( Math.random() * 10E10 ), 
 			  chunkIndex : blobs.length, 
 			  origin : files,
 			  chunkCount : Math.ceil( files.size / chunkSize ),
 			  totalSize : files.size 
 			}, name : files.file.name, loaded : 0, retry : 0 });
 		}
		 (0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( files, { chunks : blobs, error : 0, finished : 0, total : blobs.length } );
		 if(data.ltPropParallelChunkCount === Infinity){
			 this.setData("chunkCount", blobs.length);
		 }
 		this.processChunkQueue( blobs )
 	}

    processChunkQueue(blobs, frmFail) {
 		var data = this.data, idx = 0;
		if( !Array.isArray(blobs) ) {
			blobs = [ blobs ];
		} 
		while( (!data.ltPropParallelChunkUpload && data.chunkUpload.length < 1) || ((data.ltPropParallelChunkUpload && (data.ltPropParallelChunkCount === Infinity ) || (data.ltPropParallelChunkCount != Infinity && /*data.ltPropMultipleUpload &&*/ data.chunkUpload.length < data.ltPropParallelChunkCount)) /*|| ( !data.ltPropMultipleUpload && !data.currentUpload.length )*/ ) ) {
			var bb = blobs[ idx ];
			if( !bb ) {
				if(data.retry){
					this.retrySendingFile();
				}
				else if (data.ltPropParallelChunkUpload) {
					data.ltPropParallelChunkCount != Infinity && data.chunkUpload.length < data.ltPropParallelChunkCount && this.processqueue();
					data.ltPropParallelChunkCount == Infinity && this.processqueue();
				}
				break;
			}
			if (!/success|uploading/.test(bb.status) && (!frmFail || (frmFail && !/error/.test(bb.status)))) {
				var file = bb.chunkProp.origin;
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, { status : 'uploading', percentage : file.percentage || 0, loaded : file.loaded || 0, size : file.size , currentUploadingChunks : file.currentUploadingChunks+1 || 1 } )
				this.proceedUpload( bb, this.$addon.deepCopyObject( data.ltPropAjax ), true );
				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.arrayUtils)( data.chunkUpload, 'push', bb );
				idx++;
			} else {
				idx++;
				continue;
			}
		}
 	}

    getRelativePath(fileInfo) {
		var file = fileInfo.file;
		return file.webkitRelativePath || file.relativePath;
	}

    proceedUpload(file, props, isChunk) {
 		if( /success|uploading/.test( ( file[ 0 ] && file[ 0 ].status ) || file.status ) ){
 			return;
 		}
		var formdata = new FormData(), callback,keys=["chunkOffset","chunkSize","chunkIndex","chunkCount","totalSize"],fileName;
 		if( Array.isArray(file) ){
 			for( var j = 0; j < file.length; j++ ){
				fileName = this.data.ltPropFolder ?this.getRelativePath(file[ j ]):file[ j ].name;
 				formdata.append( this.data.ltPropParamName + '[' + j + ']', file[ j ].file, fileName );
 			}
 		} else {
			fileName = this.data.ltPropFolder && !isChunk ?this.getRelativePath(file):file.name;
			formdata.append(this.data.ltPropParamName, file.file, fileName );
		 }
		 if(isChunk){
			 for(var index=0;index<keys.length;index++){
				formdata.append(keys[index],file.chunkProp[keys[index]]);
			 }
			 var origin = file.chunkProp.origin;
			 formdata.append("fileId",origin.id);
			 fileName = this.data.ltPropFolder ?this.getRelativePath(origin):origin.name;
			 formdata.append("fileName",fileName);
		}
		var formdata = new FormData(), callback, keys = ["chunkOffset", "chunkSize", "chunkIndex", "chunkCount", "totalSize"], fileName;
		if (file.constructor == Array) {
			for (var j = 0; j < file.length; j++) {
				fileName = this.data.ltPropFolder ? this.getRelativePath(file[j]) : file[j].name;
				formdata.append(this.data.ltPropParamName + '[' + j + ']', file[j].file, fileName);
			}
		} else {
			fileName = this.data.ltPropFolder && !isChunk ? this.getRelativePath(file) : file.name;
			formdata.append(this.data.ltPropParamName, file.file, fileName);
		}
		if (isChunk) {
			for (var index = 0; index < keys.length; index++) {
				formdata.append(keys[index], file.chunkProp[keys[index]]);
			}
			var origin = file.chunkProp.origin;
			formdata.append("fileId", origin.id);
			fileName = this.data.ltPropFolder ? this.getRelativePath(origin) : origin.name;
			formdata.append("fileName", fileName);
		}
		props.success = isChunk ? this.chunkSuccess.bind(this) : this.succFunc.bind(this);
		props.error = isChunk ? this.chunkReject.bind(this) : this.reject.bind(this);
		var xhr = new window.XMLHttpRequest();
		props.type = 'POST';
		file.xhr = xhr;
		xhr.file = file;
		xhr.upload.xhr = xhr;
		xhr.upload.addEventListener('progress', isChunk ? this.chunkProgress.bind(this) : this.progress.bind(this), false);
		props.xhr = xhr;
		props.data = formdata;
		props.processData = false;
		// set content-type false and make sure browser
 		props.contentType = false;
 		if( this.getMethods( 'onBeforeSend' ) ) {
 			callback = this.executeMethod( 'onBeforeSend', xhr, file, isChunk, this.$node, formdata, props );
 		}
 		if( callback && callback.then ) {
 			Promise.resolve( callback ).then( function(){
 				this.finishSend( props, xhr, file );
 			}.bind( this ) )
 		} else if( callback == false ) {
 			if( !Array.isArray(file) ){
 				file = [ file ];
 			}
 			for( var i = 0; i < file.length; i++ ){
 				//this.removeFrmUpload( file[ i ].id, 'queueList' );
				this.removeFrmUpload( file[ i ].id, 'currentUpload',true); //need to be checked
 			}
 			return
 		} else {
 			if( callback && callback instanceof FormData ){
	 			props.data = callback;
	 		}
 			this.finishSend( props, xhr, file, isChunk )
 		}
 		
 	}

    finishSend(props, xhr, file, isChunk) {
 		if( Array.isArray(file) ){
 			for( var i = 0; i < file.length; i++ ){
 				(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file[ i ], 'status', 'uploading' );
 			}
 		} else {
 			(0,_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.set)( file, 'status', 'uploading' );
 		}
 		var ret = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default().ajax( props );
 		ret.xhr = xhr;
 		xhr.ret = ret;
 		this.getMethods( 'onSend' ) && this.executeMethod( 'onSend', xhr, ret, file, !!isChunk, this.$node, props );
	}

    finishcallback(files) {
		var currentFiles = files || this.data.uploadedFiles, chunk = this.data.chunkUpload, lxhr = this.data.lxhrs, flag;
		if (!currentFiles.length) {
			return;
		}
		for (var index = 0; index < currentFiles.length; index++) {
			if (!currentFiles[index].status || currentFiles[index].status == "uploading") {
				return;
			}
			else if (currentFiles[index].status == "error") {
				flag = true;
			}
		}
		for (var index = 0; index < chunk.length; index++) {
			if (chunk[index].status == "uploading") {
				return;
			}
			else if (chunk[index].status == "error") {
				flag = true;
			}
		}
		if (!this.data.ltPropMultiple) {
			currentFiles = currentFiles[0];
			lxhr = lxhr[0];
		}
		if (flag) {
			this.getMethods('onFailure') && this.executeMethod('onFailure', currentFiles, this.$node, lxhr);
			this.setData("uploadedFiles", []);
			this.setData("lxhrs", []);
		}
		else {
			this.getMethods("onSuccess") && this.executeMethod('onSuccess', currentFiles, this.$node, lxhr);
			this.setData("uploadedFiles", []);
			this.setData("lxhrs", []);
		}
		if (this.data.manualUpload == true) {
			this.setData("manualUpdFiles", []);
			this.setData("manualUpload", false);
		}
	 }

    getTotalFileSize(array) {
       var fileSize = 0;
       array.forEach(function(file){
           var size = file.size; 
           if(typeof size === "number") {
               fileSize += size;
           }
       });
       return fileSize;
    }

    addPredefinedListSize(array) {
       var totalListSize = this.getTotalFileSize(array);
       this.addToTotalFilesSize(totalListSize);
    }

    removePredefindListSize(array) {
       var totalListSize = this.getTotalFileSize(array);
       this.removeFromTotalFileSize(totalListSize);
    }

    checkTotalFilessize(fileSize) {
       var size = this.getData("totalFilesSize"),
       totalSize  = this.getData("curTotFilesSize");
       if(size && (totalSize+fileSize) > size){
           return true;
       }
       return false;
    }

    addToTotalFilesSize(fileSize) {
       var size = this.getData("totalFilesSize");
       if(size){
           var total =  this.getData("curTotFilesSize");
           this.setData("curTotFilesSize",total+fileSize);
       }
    }

    removeFromTotalFileSize(fileSize) {
       var size = this.getData("totalFilesSize");
       if(size){
           var total =  this.getData("curTotFilesSize");
           this.setData("curTotFilesSize",total-fileSize);
       }
    }

    openFileWindow(evt, fromEnter) {
       if( !this.data.ltPropYield  && this.data.ltPropMultiple ) {
           if( !evt.shiftKey ){
               _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( '#lyteFileUpdSelectedFile.lyteFileUpdListFile', this.$node ).removeAttr( 'id' );
           } else{
               evt.preventDefault();
           }
           if(evt.target.className != "lyteFileUpdRetryMsg"){
               _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( evt.target ).closest( '.lyteFileUpdListFile' ).attr( 'id', 'lyteFileUpdSelectedFile' );
           }
       }
       if( evt.ctrlKey || evt.shiftKey || evt.metaKey ){
           return
       }
       var isSelectArea, close = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( evt.target ).closest( 'lyte-file-close' );
       if( close.length ) {
           this.$node.removeUpload( close.eq( 0 ).attr( 'data-value' ) )
           return;
       }
       var retry = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( evt.target ).closest( 'lyte-file-retry' );
       if( retry.length ) {
           var fileId = retry.eq( 0 ).attr( 'data-value' );
           this.$node.upload( fileId,undefined,true );
           return;
       }
       isSelectArea = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( evt.target ).closest( 'lyte-file-select-area' ).length || fromEnter || evt.target.classList.contains("fileUploadWrapper");
       if( isSelectArea && ( (this.data.ltPropMultiple && !this.exceedTotalCount()) || (this.data.queueList.length == 0 && this.data.predefinedList.length == 0) || this.data.ltPropAllowReplace ) ){
           if( this.getMethods( 'onBeforeOpen' ) && this.executeMethod( 'onBeforeOpen', evt, this.$node ) == false ) {
               return
           }
           this._file.click();
       }
   }

    getFilesFromEntry(entry, fileList, path) {
		return  new Promise(function(resolve){
			entry.file(function(file) {
				if (file.name.substring(0, 1) !== '.') { // will not read hidden files
					file.relativePath = path + "/" + file.name;
					fileList.push(file);
				}
				resolve();
			}, function (error) {
				console.warn(error);
				resolve();
			});
		})
	}

    getFilesFromDirectory(directory, path, fileList) {
		var self = this;
		var dirReader = directory.createReader(), promises = [];
		return new Promise(function (resolve) {
			dirReader.readEntries(function (entries) {
				var length = entries.length;
				if (length > 0) {
					var entry;
					for (var index = 0; index < length; index++) {
						entry = entries[index];
						if(entry) {
							if (entry.isFile) {
								promises.push(self.getFilesFromEntry(entry, fileList, path));
							} else if (entry.isDirectory) {
								promises.push(self.getFilesFromDirectory(entry, path + "/" + entry.name, fileList));
							}
						}
					}
					if (promises.length) {
						Promise.all(promises).then(function () {
							resolve();
						});
					}
					else {
						resolve();
					}
				}
			}, function (error) {
				console.warn(error);
				resolve();
			});
		});
	}

    filterDropItems(items) {
		var self = this;
		var fileList = [], promises = [];;
		return new Promise(function (resolve) {
			var item;
			for (let index = 0; index < items.length; index++) {
				var item = items[index];
				if (item.webkitGetAsEntry != null) {
					var entry = item.webkitGetAsEntry();
					if(entry) {
						if (entry.isFile) {
							fileList.push(item.getAsFile());
						} else if (entry.isDirectory && self.data.ltPropFolder) {
							promises.push(self.getFilesFromDirectory(entry, entry.name, fileList));
						}
					}
				}
				else if (item.getAsFile != null && (item.kind == null || item.kind === "file")) {// firefox android
					fileList.push(item.getAsFile());
				}
			}
			if (promises.length) {
				Promise.all(promises).then(function () {
					resolve(fileList);
				});
			}
			else {
				resolve(fileList);
			}
		});
	}

    getValidDroppedItems(dataTransfer, event) { // Valid file and folder
		var self = this;
		var files = dataTransfer.files;
		return new Promise(function (resolve) {
			var items = dataTransfer.items;
			if (items && items.length && (items[0].webkitGetAsEntry !== null)) {
				self.filterDropItems(items).then(function (validFiles) {
					resolve(validFiles);
				});
			} else {
				resolve(files);
			}
		});
	}

    pasteFunction(evt) {
		var clip = evt.clipboardData || window.clipboardData, items = clip.items, files = [];
		for( var i = 0; i < items.length; i++ ) {
			var file = items[ i ].getAsFile();
			if( file ) {
				files.push( file )
			}
		}
		if( files.length ) {
			if( this.getMethods( 'onBeforePaste' ) && this.executeMethod( 'onBeforePaste', evt, files, this.$node ) == false ) {
				return;
			}
			if( !this.data.ltPropMultiple ) {
				this.$node.removeUpload();
			}
			this.validate( files );
			this.getMethods( 'onPaste' ) && this.executeMethod( 'onPaste', evt, files, this.$node );
			evt.preventDefault();
		}
	}

    static actions(arg1) {
        return Object.assign(super.actions({
            change : function( evt, _this ){
                if(_this.files.length){
                    if(!this.data.ltPropMultiple &&this.data.ltPropAllowReplace){
                        this.removeFrmUpload( this.data.queueList, 'queueList', true );
                        this.data.predefinedList.length && this.removeFrmUpload( this.data.predefinedList, 'predefinedList', true );
                    }
                    var files = Array.from(_this.files);
                    if(this.getMethods("onSelect") && this.executeMethod("onSelect",files, evt) === false){
                        this._file.value = "";
                        return;
                    }
                    this.validate( files );
                }
            },

            cancel : function(event) {
                this.getMethods("onCancel") && this.executeMethod("onCancel", event);
            },

            drag : function( evt ){
                var type = evt.type, nwStr = "onDrag", match = type.match(/drag(.+)/ );
                if( match && match[ 1 ] ) {
                    nwStr += match[ 1 ].slice( 0, 1 ).toUpperCase() + match[ 1 ].slice( 1 );
                    if( /enter|over/.test( evt.type ) ) {
                        if( evt.type == 'dragover' ) {
                            var tran = evt.dataTransfer;
                            if( tran ) {
                                var effect = tran.effectAllowed;
                                tran.dropEffect = 'move' === effect || 'linkMove' === effect ? 'move' : 'copy';
                            }
                        }
                        evt.preventDefault();
                    }
                }
                if( type == "dragenter" ){
                    this.setData( 'fileClass', 'fileDragEnter' );
                } else if( type == "dragleave" ){
                     this.setData( 'fileClass', '' );
                }
                this.getMethods( nwStr ) && this.executeMethod( nwStr, evt, this.$node );
            },

            drop : function( evt ){
                this.setData( 'fileClass', '' );
                var dT = evt.dataTransfer;
                if (dT.files.length)  {
                    var self = this;
                    evt.preventDefault();
                    this.getValidDroppedItems(dT).then(function(validList){
                        if( validList.length ) {
                            if( self.getMethods( 'onBeforeDrop' ) && self.executeMethod( 'onBeforeDrop', evt, self.$node, validList ) == false ) {
                                return;
                            }
                            evt.preventDefault();
                            if( !self.data.ltPropMultiple ) {
                                self.$node.removeUpload();
                            }
                            self.validate( validList );
                            self.getMethods( 'onDrop' ) && self.executeMethod( 'onDrop', evt, self.$node, validList );
                        }
                    })
                }	
            },

            click : function( evt ) {
                this.openFileWindow(evt);
            },

            paste : function( evt ){
                this.pasteFunction(evt);
                return false;
            },

            keydown : function( evt ){
                if( evt.which == 8 ){
                    var elem = _lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_3___default()( "#lyteFileUpdSelectedFile lyte-file-close", this.$node )
                    for( var i = 0; i < elem.length; i++ ) {
                       this.$node.removeUpload( elem.eq( i ).attr( 'data-value' ) );
                    }
                    elem.length && evt.preventDefault();
                }
                else if(evt.which === 13 ) {
                    this.openFileWindow(evt, true);
                    evt.preventDefault();
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            ariaObserver: function( change ) {
                var newAria = this.data.ltPropAriaAttributes;
                if(this.data.ltPropAria) {
                    if(!change) {
                        this.setData("randomAriaId", "file" + new Date().getTime() + parseInt( Math.random() * 10E10 ));
                    }
                    this.addAriaValues( newAria );
                }
            }.observes( 'ltPropAriaAttributes.*' ).on('didConnect'),

            disableDataObserver: function(){
                var ltPropDisabled = this.data.ltPropDisabled;
                var fileUploadWrapper = this.$node.querySelector(".fileUploadWrapper");
                if(ltPropDisabled){
                    fileUploadWrapper.setAttribute("aria-disabled",true);
                }
                else {
                    fileUploadWrapper.removeAttribute("aria-disabled");
                }

            }.observes( 'ltPropDisabled' ).on('didConnect'),

            folderUploadObserver : function(){
                this.folderUpload();
            }.observes('ltPropFolder'),

            trigUpl : function( arg ){
                if( arg.newValue ) {
                    this.processqueue();
                    var compRef = this;
                    this._triggerId = setTimeout(function(){
                        compRef.setData( 'ltPropTriggerUpload', false );
                        delete compRef._triggerId;
                    }, 0);
                }
            }.observes( 'ltPropTriggerUpload' ),

            resetObserver : function(changeObject) {
                if(changeObject.newValue) {
                    this.$node.removeUpload();
                    var compRef = this;
                    this._resetId = setTimeout(function(){
                        compRef.setData("ltPropReset", false);
                        delete compRef._resetId;
                    }, 0);
                }
            }.observes('ltPropReset'),

            convertToBytes : function(){
               var size = this.getData("ltPropTotalFilesSize");
               if(size){
                   var fileUnit =  size.substring(size.length-2),
                   totalSize  = parseInt(size.substring(0,size.length-2)),
                   validFormat = ["KB","MB","GB"],
                   indexOf = validFormat.indexOf(fileUnit);
                   var predefinedList = this.data.predefinedList;
                   if(indexOf > -1){
                       this.setData("totalFilesSize",totalSize*(Math.pow(1000,indexOf+1)))
                   }
                   if(Array.isArray(predefinedList)) {
                       this.addPredefinedListSize(predefinedList);
                   }
               }
            }.observes("ltPropTotalFilesSize").on("init"),

            predefinedListObserver : function(changeObject) {
               var size = this.getData("totalFilesSize");
               if(size) {
                   var oldValue = changeObject.oldValue;
                   var newValue = changeObject.newValue;
                   if(Array.isArray(oldValue)) {
                       this.removePredefindListSize(oldValue);
                   }
                   if(Array.isArray(newValue)) {
                       this.addPredefinedListSize(newValue);
                   }
               }
            }.observes('predefinedList'),

            predefinedArrayListObserver : function(changeObject) {
               var size = this.getData("totalFilesSize");
               if(size) {
                   var oldValue = changeObject.removedItems;
                   var newValue = changeObject.insertedItems;
                   if(Array.isArray(oldValue)) {
                       this.removePredefindListSize(oldValue);
                   }
                   if(Array.isArray(newValue)) {
                       this.addPredefinedListSize(newValue);
                   }
               }
            }.observes('predefinedList.[]')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteFileuploadComponent._template = "<template tag-name=\"lyte-fileupload\"> <input class=\"fileuploadInput {{ltPropClass}}\" id=\"{{ltPropId}}\" type=\"file\" name=\"{{ltPropName}}\" onchange=\"{{action('change',event,this)}}\" oncancel=\"{{action('cancel',event,this)}}\" multiple=\"{{ltPropMultiple}}\" accept=\"{{ltPropAccept}}\"> <div tabindex=\"{{ltPropTabindex}}\" class=\"fileUploadWrapper {{fileClass}} {{if(ltPropMultiple,'multiFileupload','singleFileUpload')}} lyteFileUpd{{ltPropAppearance}}Type {{if(ltPropDisabled,'lyteFileUpdDisabled')}} {{maxFileClass}}\" ondragenter=\"{{action('drag',event)}}\" ondragover=\"{{action('drag',event)}}\" ondrop=\"{{action('drop',event)}}\" onclick=\"{{action('click',event)}}\" style=\"outline: none;position: relative;\" onpaste=\"{{action('paste',event)}}\" onkeydown=\"{{action('keydown',event)}}\" aria-labelledby=\"{{randomAriaId}}\" data-tabindex=\"{{ltPropDataTabindex}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"file\" queue-list=\"{{queueList}}\" predefined-list=\"{{predefinedList}}\"></lyte-yield> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropMultiple}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-file-select-area aria-hidden=\"true\"> <lyte-file-message class=\"lyteFileUpdMsgWrap\"> <span class=\"lyteFileUpdMsg\">{{lyteUiI18n(ltPropMessage,\"fileupload\")}}</span> </lyte-file-message> </lyte-file-select-area> <div class=\"lyteFileUpdList\"> <template items=\"{{predefinedList}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <div class=\"lyteFileUpdListFile\"> <div class=\"lyteFileUpdTypePreview\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiImageFile(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <img class=\"lyteFileUpdThumb\" src=\"{{item.src}}\"> </template><template default=\"\"> <span class=\"lyteFileUpdTypeIcon {{item.fileType}}\"></span> </template></template></div> <lyte-text class=\"lyteFileUpdFileName\" lt-prop-value=\"{{item.name}}\"></lyte-text> <span class=\"lyteFileUpdFileSize\">( {{lyteUiFileSize(item.size,ltPropFileUnit,ltPropDigits)}} )</span> <lyte-file-close data-value=\"{{item.id}}\" role=\"button\" aria-label=\"{{ariaCloseLabel}} selected {{item.name}} file\"> </lyte-file-close> </div> </template> <template items=\"{{queueList}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <div class=\"lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}\"> <div class=\"lyteFileUpdTypePreview\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiImageFile(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <img class=\"lyteFileUpdThumb\" src=\"{{item.src}}\"> </template><template default=\"\"> <span class=\"lyteFileUpdTypeIcon {{item.fileType}}\"></span> </template></template></div> <lyte-text class=\"lyteFileUpdFileName\" lt-prop-value=\"{{item.name}}\"></lyte-text> <span class=\"lyteFileUpdFileSize\">( {{lyteUiFileSize(item.size,ltPropFileUnit,ltPropDigits)}} )</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.percentage,'!=',undefined)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"lyteFileUpdFileStatus\" data-completed=\"{{item.percentage}}\"> <div class=\"lyteFileUpdProgressBar\"> <div class=\"lyteFileUpdProgressFill\" style=\"width: {{item.percentage}}%\"></div> </div> </div> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\" role=\"button\"> <span class=\"lyteFileUpdFailMsg\">{{lyteUiI18n(ltPropFailureMessage,\"fileupload\")}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropUploadMultiple,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteFileUpdRetryMsg\">{{lyteUiI18n(ltPropRetryText,\"fileupload\")}}</span> </template></template></lyte-file-retry> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.lyteErrorMsg}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"lyteFileUpdFailMsg\"> {{item.lyteErrorMsg}} </span></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(ltPropUploadMultiple,'!'),'||',expHandlers(expHandlers(expHandlers(item.status,'!'),'||',expHandlers(item.status,'==',&quot;error&quot;)),'||',expHandlers(item.status,'==',&quot;success&quot;)))}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-file-close aria-level=\"2\" tabindex=\"0\" aria-label=\"{{ariaCloseLabel}} selected {{item.name}} file\" role=\"button\" data-value=\"{{item.id}}\"> </lyte-file-close> </template></template></div> </template> </div> </template><template default=\"\"> <lyte-file-select-area aria-hidden=\"true\"> <lyte-file-message class=\"lyteFileUpdMsgWrap {{if(expHandlers(queueList.length,'||',predefinedList.length),'lyteHide','')}}\"> <span class=\"lyteFileUpdMsg\"> {{lyteUiI18n(ltPropMessage,\"fileupload\")}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\" tabindex=\"0\" aria-level=\"2\" aria-label=\"SelectedFile:{{ariaSelectedFiles}}\"> <template items=\"{{predefinedList}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <div class=\"lyteFileUpdListFile\"> <div class=\"lyteFileUpdTypePreview\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiImageFile(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <img class=\"lyteFileUpdThumb\" src=\"{{item.src}}\"> </template><template default=\"\"> <span class=\"lyteFileUpdTypeIcon {{item.fileType}}\"></span> </template></template></div> <lyte-text class=\"lyteFileUpdFileName\" lt-prop-value=\"{{item.name}}\"></lyte-text> <span class=\"lyteFileUpdFileSize\">( {{lyteUiFileSize(item.size,ltPropFileUnit,ltPropDigits)}} )</span> <lyte-file-close data-value=\"{{item.id}}\" aria-label=\"{{ariaCloseLabel}} selected {{item.name}} file\" role=\"button\"> </lyte-file-close> </div> </template> <template items=\"{{queueList}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <div class=\"lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}\"> <div class=\"lyteFileUpdTypePreview\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiImageFile(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <img class=\"lyteFileUpdThumb\" src=\"{{item.src}}\"> </template><template default=\"\"> <span class=\"lyteFileUpdTypeIcon {{item.fileType}}\"></span> </template></template></div> <lyte-text class=\"lyteFileUpdFileName\" lt-prop-value=\"{{item.name}}\"></lyte-text> <span class=\"lyteFileUpdFileSize\">( {{lyteUiFileSize(item.size,ltPropFileUnit,ltPropDigits)}} )</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.percentage,'!=',undefined)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"lyteFileUpdFileStatus\" data-completed=\"{{item.percentage}}\"> <div class=\"lyteFileUpdProgressBar\"> <div class=\"lyteFileUpdProgressFill\" style=\"width: {{item.percentage}}%\"> </div> </div> </div> </template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\" role=\"button\"> <span class=\"lyteFileUpdFailMsg\">{{lyteUiI18n(ltPropFailureMessage,\"fileupload\")}}</span> <span class=\"lyteFileUpdRetryMsg\"> {{lyteUiI18n(ltPropRetryText,\"fileupload\")}} </span> </lyte-file-retry> </template></template><lyte-file-close data-value=\"{{item.id}}\" tabindex=\"0\" aria-label=\"{{ariaCloseLabel}} selected {{item.name}} file\" role=\"button\"> </lyte-file-close> </div> </template> </div> </lyte-file-select-area> </template></template></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{fileClass}}\" is=\"case\" lc-id=\"lc_id_0\"><div ondragleave=\"{{action('drag',event)}}\" class=\"lyteFileDragWrapper\"> </div></template></template></div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropAria}}\" is=\"case\" lc-id=\"lc_id_0\"><span id=\"{{randomAriaId}}\" style=\"display: none;\"> SelectedFiles:{{ariaSelectedFiles}} </span></template></template></template>";;
LyteFileuploadComponent._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[3]},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,1,0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[3,1],"cn":"lc_id_0"},{"t":"f","p":[3,1],"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"tX","p":[1,5,1]},{"t":"a","p":[1,7]},{"t":"cD","p":[1,7],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[3,3],"cn":"lc_id_0"},{"t":"f","p":[3,3],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":4,"sibl":[3]},{"t":"tX","p":[1,5,1]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1],"a":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width: '","item.percentage","'%'"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[1,10],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[4,2,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1,1],"cn":"default"},{"t":"tX","p":[1,1,1,1],"cn":"default"},{"t":"cD","p":[1,1],"in":3,"sibl":[2],"cn":"default"},{"t":"a","p":[1,3],"cn":"default"},{"t":"a","p":[1,3,1],"cn":"default"},{"t":"f","p":[1,3,1],"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"tX","p":[1,5,1]},{"t":"a","p":[1,7]},{"t":"cD","p":[1,7],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"default"},{"t":"a","p":[1,3,3],"cn":"default"},{"t":"f","p":[1,3,3],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":3,"sibl":[2]},{"t":"tX","p":[1,5,1]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1],"a":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width: '","item.percentage","'%'"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[1,9]},{"t":"cD","p":[1,9],"in":0}],"dc":[3,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true},"default":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[3,2],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"tX","p":[0,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2]}];;

LyteFileuploadComponent._observedAttributes = [
    "ltPropName",
    "ltPropMultiple",
    "ltPropAccept",
    "ltPropId",
    "ltPropClass",
    "ltPropAppearance",
    "ltPropDisabled",
    "ltPropYield",
    "ltPropFileLimit",
    "ltPropMinimumFileSize",
    "ltPropTotalFilesSize",
    "ltPropParallel",
    "ltPropAutoUpload",
    "ltPropTriggerUpload",
    "ltPropParamName",
    "ltPropThumb",
    "ltPropTabindex",
    "ltPropRetry",
    "ltPropFileUnit",
    "ltPropDigits",
    "ltPropMessage",
    "ltPropFailureMessage",
    "ltPropRetryText",
    "ltPropFiles",
    "ltPropFolder",
    "ltPropChunk",
    "ltPropChunkSize",
    "ltPropParallelChunkUpload",
    "ltPropParallelChunkCount",
    "ltPropChunkRetry",
    "ltPropUploadMultiple",
    "ltPropUploadMultipleCount",
    "ltPropAjax",
    "ltPropAllowReplace",
    "ltPropFilesCount",
    "ltPropAriaAttributes",
    "ltPropReset",
    "ltPropPreventDuplicate",
    "ltPropListErrorFiles",
    "ltPropResetFileValue",
    "ltPropAria",
    "ltPropDataTabindex",
    "ltPropValidateByExt",
    "ltPropRenameDuplicateFile",
    "ltPropActiveElement",
    "queueList",
    "predefinedList",
    "currentUpload",
    "chunkUpload",
    "fileClass",
    "chunkCount",
    "abort",
    "lxhrs",
    "uploadedFiles",
    "manualUpdFiles",
    "uploadMultipleRetry",
    "retryFiles",
    "retry",
    "manualUpload",
    "totalFilesSize",
    "curTotFilesSize",
    "ariaCloseLabel",
    "commonAriaLabel",
    "ariaSelectedFiles",
    "randomAriaId"
];

window._lyteUiUtils.addGlobalEventListener( 'paste', function( event ) {

	if( document.contains( event.target ) ) {
		var lyteFileupload = document.querySelector("lyte-fileupload[lt-prop-active-element='true']");
		if(lyteFileupload) {
			lyteFileupload.component.pasteFunction(event);
		}
	}

}, true );

/**
 * @syntax nonYielded
 * <lyte-fileupload></lyte-fileupload>
 */
/**
 * @syntax
 * @attribute ltPropYield=true
 * @attribute ltPropMultiple=true
 *	<lyte-fileupload lt-prop-yield=true lt-prop-multiple = true>
 *  	<template is = "registerYield" yield-name = "file">
 *	 	<lyte-file-select-area>
 *	  	 	<lyte-file-message class="lyteFileUpdMsgWrap"> <span class="lyteFileUpdMsg"> Drag file here or browse to upload </span> </lyte-file-message>
 *	 	</lyte-file-select-area>
 *		<div class="lyteFileUpdList">
 *			<template lyte-for="{{predefinedList}} as item index">
 *				<div class="lyteFileUpdListFile">
 *					<div class="lyteFileUpdTypePreview">
 *						<template lyte-if="{{item.src}}">
 *								<img class="lyteFileUpdThumb" src={{item.src}}>
 *						</template>
 *						<template lyte-else>
 *							<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
 *						</template>
 *					</div>
 *					<lyte-text class = "lyteFileUpdFileName" lt-prop-value = {{item.name}}></lyte-text>
 *					<span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>
 *					<lyte-file-close data-value = {{item.id}} class = {{item.status}}></lyte-file-close>
 *				</div>
 *			</template>
 *	  	  	<template lyte-for="{{queueList}} as item index">
 *	  	  		<div class="lyteFileUpdListFile {{item.status}}">
 *	  				<div class="lyteFileUpdTypePreview">
 *	  	  	  	 		<template lyte-if="{{item.src}}">
 *	  	  	  	  	  		<img class="lyteFileUpdThumb" src={{item.src}}>
 * 						</template>
 *	  	  	  	  	  	<template lyte-else>
 *	  	  	  	  	  		<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
 *	  	  	  	  	  	</template>
 *	  	  	  	  	</div>
 *	  	  	  	  	<lyte-text class = "lyteFileUpdFileName" lt-prop-value = {{item.name}}> </lyte-text>
 *	  	  	  	  	<span class="lyteFileUpdFileSize"> ( {{lyteUiFileSize(item.size, 'KB', 2)}} ) </span>
 *	  	  	  	  	<template lyte-if="{{!ltPropUploadMultiple && item.percentage != undefined}}">
 *	  	  	  	  		<div class="lyteFileUpdFileStatus" data-completed = {{item.percentage}}>
 *	  	  	  	  	  		<div class="lyteFileUpdProgressBar {{item.status}}">
 *	  	  	  	  	  	  		<div class="lyteFileUpdProgressFill" style="width: {{item.percentage}}%"> </div>
 *	  	  	  	  	  		</div>
 *	  	  	  	  		</div>
 *					</template>
 * 					<template lyte-if='{{item.status=="error"}}'>
 *	  	  	  	  		<lyte-file-retry data-value = {{item.id}}>
 *	  	  	  	  	  		<span class="lyteFileUpdFailMsg">Attachment failed </span>
 *	  	  	  	  	  		<template lyte-if="{{!ltPropUploadMultiple}}">
 *	  	  	  	  	  			<span class="lyteFileUpdRetryMsg"> Retry </span>
 *	  	  	  	  	  		</template>
 *	  	  	  	  		</lyte-file-retry>
 *	  	  	  	  	</template>
 *               	<template lyte-if='{{(!ltPropUploadMultiple)||(!item.status||item.status=="error"||item.status=="success")}}'>
 *	  	  	  	  		<lyte-file-close data-value = {{item.id}} class = {{item.status}}> </lyte-file-close>
 *	  	  	  	  	</template>
 *	  	  	  	</div>
 *	  		</template>
 *	 	</div>
 *		</template>
 *	</lyte-fileupload>
 */
/**
 * @syntax
 * @attribute ltPropYield=true
 * @attribute ltPropMultiple=false
 *	<lyte-fileupload lt-prop-yield = true lt-prop-multiple = false>
 *		<template is = "registerYield" yield-name = "file">
 *	  		<lyte-file-select-area>
 *	  	  		<lyte-file-message class="lyteFileUpdMsgWrap{{if(queueList.length, 'lyteHide', '')}}">
 *	  	  	  		<span class="lyteFileUpdMsg"> Drag file here or browse to upload </span>
 *	  	  	  	</lyte-file-message>
 *	  	  	  	<div class="lyteFileUpdList">
 *					<template lyte-for="{{predefinedList}} as item index">
 *						<div class="lyteFileUpdListFile">
 *							<div class="lyteFileUpdTypePreview">
 *								<template lyte-if="{{item.src}}">
 *										<img class="lyteFileUpdThumb" src={{item.src}}>
 *								</template>
 * 								<template lyte-else>
 *									<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
 *								</template>
 *							</div>
 *							<lyte-text class = "lyteFileUpdFileName" lt-prop-value = {{item.name}}></lyte-text>
 *							<span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>
 *							<lyte-file-close data-value = {{item.id}} class = {{item.status}}></lyte-file-close>
 *						</div>
 *					</template>
 *					<template lyte-for="{{queueList}} as item index">
 *	  	  	  	  		<div class="lyteFileUpdListFile {{item.status}}">
 *	  	  	  	  	 		<div class="lyteFileUpdTypePreview">
 *	  	  	  	  	  	  		<template lyte-if="{{item.src}}">
 *	  	  	  	  	  	  			<img class="lyteFileUpdThumb" src={{item.src}}>
 *	  	  	  	  	  	  		</template>
 *								<template lyte-else>
 *	  	  	  	  	  	  			<span class="lyteFileUpdTypeIcon {{item.fileType}}"> </span>
 *	  	  	  	  	  	  		</template>
 *	  	  	  	  	  		</div>
 *	  	  	  	  	  		<lyte-text class = "lyteFileUpdFileName" lt-prop-value = {{item.name}}> </lyte-text>
 *	  	  	  	  	  		<span class="lyteFileUpdFileSize"> ( {{lyteUiFileSize(item.size, 'KB', 2)}} ) </span>
 *	  	  	  	  	  		<div lyte-if="{{item.percentage != undefined}}" class="lyteFileUpdFileStatus" data-completed = {{item.percentage}}>
 *	  	  	  	  	  	 		<div class="lyteFileUpdProgressBar {{item.status}}">
 *	  	  	  	  	  	  			<div class="lyteFileUpdProgressFill" style="width: %"> </div>
 *	  	  	  	  	  	 		</div>
 *	  	  	  	  	  		</div>
 *	  	  	  	  	  		<lyte-file-retry lyte-if='{{item.status=="error"}}' data-value = {{item.id}}>
 *	  	  	  	  	  	  		<span class="lyteFileUpdFailMsg"> Attachment failed </span>
 *	  	  	  	  	  	  		<span class="lyteFileUpdRetryMsg"> Retry </span>
 *	  	  	  	  	  		</lyte-file-retry>
 *	  	  	  	  	  		<lyte-file-close data-value = {{item.id}} class = {{item.status}}> </lyte-file-close>
 *	  	  	  	 		</div>
 *	  	  	  		</template>
 *	 			</div> 
 *	  		</lyte-file-select-area> 
 *		</template> 
 *	</lyte-fileupload>  
 */


LyteFileuploadComponent.register("lyte-fileupload", {
    hash: "LyteFileuploadComponent_4",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});

/***/ })

}]);
//# sourceMappingURL=fileupload-comp.js.map
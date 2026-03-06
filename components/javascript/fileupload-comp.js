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



FileuploadComp.register("fileupload-comp", {
  hash: "FileuploadComp_2",
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
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





class ZcatFileupload extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object'),
      zcatProp: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: {} }, { watch: true }),
      files: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] }),
      isDragging: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('boolean', { default: false }),
      errorMessage: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' })
    }), arg1);
  }

  _getAcceptTypes() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.accept) return zcatProp.accept;
    return '';
  }

  _getMaxSize() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.maxFileSize) return zcatProp.maxFileSize;
    return 0; // 0 = no limit
  }

  _isMultiple() {
    let zcatProp = this.getData('zcatProp');
    return zcatProp && zcatProp.multiple === true;
  }

  _getMaxFiles() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.maxFiles) return zcatProp.maxFiles;
    return 0; // 0 = no limit
  }

  _validateFile(file) {
    let accept = this._getAcceptTypes();
    if (accept) {
      let types = accept.split(',').map(function(t) { return t.trim().toLowerCase(); });
      let ext = '.' + file.name.split('.').pop().toLowerCase();
      let mime = file.type.toLowerCase();
      let valid = false;
      for (let i = 0; i < types.length; i++) {
        if (types[i] === ext || types[i] === mime || (types[i].endsWith('/*') && mime.startsWith(types[i].replace('/*', '/')))) {
          valid = true;
          break;
        }
      }
      if (!valid) return 'File type not allowed: ' + file.name;
    }
    let maxSize = this._getMaxSize();
    if (maxSize && file.size > maxSize) {
      return 'File too large: ' + file.name + ' (max ' + this._formatSize(maxSize) + ')';
    }
    return null;
  }

  _formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  _getFileIcon(file) {
    let ext = file.name.split('.').pop().toLowerCase();
    let iconMap = {
      pdf: 'file-text', doc: 'file-text', docx: 'file-text', txt: 'file-text',
      xls: 'file-text', xlsx: 'file-text', csv: 'file-text',
      png: 'image', jpg: 'image', jpeg: 'image', gif: 'image', svg: 'image', webp: 'image',
      zip: 'archive', rar: 'archive', '7z': 'archive',
      mp4: 'video', mov: 'video', avi: 'video',
      mp3: 'music', wav: 'music'
    };
    return iconMap[ext] || 'file';
  }

  _addFiles(fileList) {
    let files = (this.getData('files') || []).slice();
    let isMulti = this._isMultiple();
    let maxFiles = this._getMaxFiles();
    let errors = [];

    for (let i = 0; i < fileList.length; i++) {
      let file = fileList[i];
      let err = this._validateFile(file);
      if (err) {
        errors.push(err);
        continue;
      }
      if (!isMulti) {
        files = [];
      }
      if (maxFiles && files.length >= maxFiles) {
        errors.push('Maximum ' + maxFiles + ' files allowed');
        break;
      }
      files.push({
        id: Date.now() + '_' + i,
        name: file.name,
        size: file.size,
        _sizeLabel: this._formatSize(file.size),
        type: file.type,
        icon: this._getFileIcon(file),
        status: 'complete',
        _raw: file
      });
    }

    this.setData('files', files);
    this.setData('errorMessage', errors.length ? errors.join('; ') : '');

    let self = this.getData('self');
    let zcatProp = this.getData('zcatProp');
    if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
      self.executeMethod(zcatProp.callback.name, files);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onFileInputChange(event) {
        let input = event.target;
        if (input.files && input.files.length) {
          this._addFiles(input.files);
        }
        input.value = '';
      },

      triggerFileInput(event) {
        if (event) event.stopPropagation();
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        let input = this.$node ? this.$node.querySelector('.zcat-fileupload-hidden-input') : null;
        if (input) input.click();
      },

      onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('isDragging', true);
      },

      onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('isDragging', true);
      },

      onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('isDragging', false);
      },

      onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('isDragging', false);
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length) {
          this._addFiles(event.dataTransfer.files);
        }
      },

      removeFile(file, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }
        let files = (this.getData('files') || []).filter(function(f) { return f.id !== file.id; });
        this.setData('files', files);
        this.setData('errorMessage', '');

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onRemove && zcatProp.onRemove.name) {
          self.executeMethod(zcatProp.onRemove.name, file, files);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          // reset if prop changes entirely
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatFileupload._template = "<template tag-name=\"zcat-fileupload\"> <div class=\"zcat-fileupload-wrapper {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-fileupload-secondary','zcat-fileupload-primary')}} {{expHandlers(zcatProp.disabled,'?:','zcat-fileupload-disabled','')}}\"> <!-- Label Row --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-fileupload-label-row\"> <label class=\"zcat-fileupload-label\">{{zcatProp.label}}</label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isOptional}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-fileupload-optional\">(Optional)</span> </template></template> </div> </template></template> <!-- Hidden File Input --> <input type=\"file\" class=\"zcat-fileupload-hidden-input\" style=\"display:none\" multiple=\"{{expHandlers(zcatProp.multiple,'||',false)}}\" accept=\"{{expHandlers(zcatProp.accept,'||','')}}\" onchange=\"{{action('onFileInputChange')}}\"> <!-- === PRIMARY: Drop Zone === --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-fileupload-dropzone {{expHandlers(isDragging,'?:','dragging','')}}\" ondragenter=\"{{action('onDragEnter')}}\" ondragover=\"{{action('onDragOver')}}\" ondragleave=\"{{action('onDragLeave')}}\" ondrop=\"{{action('onDrop')}}\" onclick=\"{{action('triggerFileInput')}}\"> <div class=\"zcat-fileupload-dropzone-content\"> <svg class=\"zcat-fileupload-upload-icon\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4\"></path> <polyline points=\"17 8 12 3 7 8\"></polyline> <line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line> </svg> <p class=\"zcat-fileupload-dropzone-text\"> <span class=\"zcat-fileupload-browse-link\">Click to upload</span> or drag and drop </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.hint}}\" is=\"case\" lc-id=\"lc_id_0\"> <p class=\"zcat-fileupload-dropzone-hint\">{{zcatProp.hint}}</p> </template></template> </div> </div> </template></template> <!-- === SECONDARY: Button trigger === --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-fileupload-btn-wrap\"> <lyte-button class=\"zcat-fileupload-btn\" onclick=\"{{action('triggerFileInput')}}\" lt-prop-disabled=\"{{expHandlers(zcatProp.disabled,'?:','true','false')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4\"></path> <polyline points=\"17 8 12 3 7 8\"></polyline> <line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line> </svg> <span>{{expHandlers(zcatProp.buttonLabel,'||','Choose File')}}</span> </template> </lyte-button> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.hint}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-fileupload-btn-hint\">{{zcatProp.hint}}</span> </template></template> </div> </template></template> <!-- File List --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{files.length}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-fileupload-list\"> <template items=\"{{files}}\" item=\"file\" index=\"fileIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-fileupload-file\"> <div class=\"zcat-fileupload-file-icon\"> <zcat-icon name=\"{{expHandlers(file.icon,'||','file')}}\" width=\"18\" height=\"18\" stroke=\"currentColor\" stroke-width=\"1.5\"></zcat-icon> </div> <div class=\"zcat-fileupload-file-info\"> <span class=\"zcat-fileupload-file-name\">{{file.name}}</span> <span class=\"zcat-fileupload-file-size\">{{file._sizeLabel}}</span> </div> <span class=\"zcat-fileupload-file-remove\" onclick=\"{{action('removeFile',file)}}\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </div> </template> </div> </template></template> <!-- Error Message --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{errorMessage}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-fileupload-error-msg\">{{errorMessage}}</div> </template></template> </div> </template><style>/* ==============================\n   ZCAT File Upload Component\n   ============================== */\n\nzcat-fileupload * { box-sizing: border-box; }\n\n.zcat-fileupload-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--zcat-font-family-primary);\n  width: 100%;\n}\n\n/* Label */\n.zcat-fileupload-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.zcat-fileupload-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-inputField-text-label);\n}\n.zcat-fileupload-optional {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-optional);\n}\n\n/* === PRIMARY: Drop Zone === */\n.zcat-fileupload-dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 140px;\n  padding: 24px;\n  border: 2px dashed var(--zcat-body-border);\n  border-radius: 6px;\n  background: var(--zcat-inputField-bg-default);\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.zcat-fileupload-dropzone:hover {\n  border-color: var(--zcat-inputField-border-hover);\n  background: var(--zcat-inputField-bg-hover);\n}\n.zcat-fileupload-dropzone.dragging {\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n.zcat-fileupload-dropzone-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n}\n.zcat-fileupload-upload-icon {\n  color: var(--zcat-inputField-icon-placeholder);\n}\n.zcat-fileupload-dropzone.dragging .zcat-fileupload-upload-icon {\n  color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-fileupload-dropzone-text {\n  margin: 0;\n  font-size: 14px;\n  color: var(--zcat-body-text-secondary);\n}\n.zcat-fileupload-browse-link {\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n  cursor: pointer;\n}\n.zcat-fileupload-browse-link:hover {\n  text-decoration: underline;\n}\n.zcat-fileupload-dropzone-hint {\n  margin: 0;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-placeholder);\n}\n\n/* === SECONDARY: Button Mode === */\n.zcat-fileupload-btn-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.zcat-fileupload-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 14px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: var(--zcat-font-family-primary);\n  color: var(--zcat-btn-outline-text-primary-default);\n  background: transparent;\n  border: 1px solid var(--zcat-btn-outline-border-primary-default);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s, border-color 0.15s;\n}\n.zcat-fileupload-btn:hover {\n  color: var(--zcat-btn-outline-text-primary-hover);\n  border-color: var(--zcat-btn-outline-border-primary-hover);\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n.zcat-fileupload-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.zcat-fileupload-btn svg { stroke: currentColor; }\n.zcat-fileupload-btn-hint {\n  font-size: 12px;\n  color: var(--zcat-inputField-text-placeholder);\n}\n\n/* === File List === */\n.zcat-fileupload-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 10px;\n}\n.zcat-fileupload-file {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: var(--zcat-inputField-bg-default);\n  border: 1px solid var(--zcat-body-border);\n  border-radius: 6px;\n  transition: background 0.12s;\n}\n.zcat-fileupload-file:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n.zcat-fileupload-file-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-inputField-icon-active);\n  flex-shrink: 0;\n}\n.zcat-fileupload-file-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.zcat-fileupload-file-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--zcat-body-text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.zcat-fileupload-file-size {\n  font-size: 11px;\n  color: var(--zcat-inputField-text-placeholder);\n}\n.zcat-fileupload-file-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--zcat-inputField-icon-placeholder);\n  transition: background 0.12s, color 0.12s;\n  flex-shrink: 0;\n}\n.zcat-fileupload-file-remove:hover {\n  background: var(--zcat-inputField-bg-error, rgba(255, 0, 0, 0.06));\n  color: var(--zcat-inputField-text-error);\n}\n\n/* === Disabled === */\n.zcat-fileupload-disabled .zcat-fileupload-dropzone {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.zcat-fileupload-disabled .zcat-fileupload-label {\n  color: var(--zcat-inputField-text-disabled);\n}\n\n/* Error */\n.zcat-fileupload-error-msg {\n  position: relative;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--zcat-inputField-text-error);\n  line-height: 16px;\n  font-family: var(--zcat-font-family-primary);\n}\n</style>";;
ZcatFileupload._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"a","p":[1,7]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"r","p":[1,1,1],"dN":[{"t":"tX","p":[3,0]}],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,19],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":1,"sibl":[0]},{"t":"tX","p":[1,3,1,0]},{"t":"tX","p":[1,3,3,0]},{"t":"a","p":[1,5]},{"t":"cD","p":[1,5,1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,23],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1]}];;
ZcatFileupload._observedAttributes = ["self", "zcatProp", "files", "isDragging", "errorMessage"];

ZcatFileupload.register("zcat-fileupload", {
  hash: "ZcatFileupload_2",
  refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=fileupload-comp.js.map
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/tooltip-comp"],{

/***/ 93359097:
/*!***********************************************!*\
  !*** ./components/javascript/tooltip-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComp": () => (/* binding */ TooltipComp)
/* harmony export */ });
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-icon.js */ 35554276);
/* harmony import */ var _node_modules_zcat_ui_components_javascript_zcat_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/zcat-ui/components/javascript/zcat-button.js */ 43360219);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-tooltip.js */ 64071189);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_I18n_en_US_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@zoho/lyte-ui-component/I18n/en_US.js */ 42625529);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_I18n_en_US_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_ui_component_I18n_en_US_js__WEBPACK_IMPORTED_MODULE_3__);








class TooltipComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let placement = this.getData('placement') || '';
    let text = this.getData('tooltipText') || 'Tooltip text';

    let configAttr = placement ? ` lt-prop-tooltip-config='{"position":"${placement}"}'` : '';
    let slyte_code = `<div lt-prop-title="${text}"${configAttr}>\n  <!-- trigger element -->\n</div>`;

    let js_code = `// Import lyte-tooltip once in your app:\nimport '@zoho/lyte-ui-component/components/javascript/lyte-tooltip';\n\n// Then any element with lt-prop-title will show a tooltip on hover.\n// Use lt-prop-tooltip-config='{"position":"top"}' to control placement.`;

    this.setData('slyteCodeSnippet', { code: slyte_code });
    this.setData('jsCodeSnippet', { code: js_code });
  }

  data(arg1) {
    return Object.assign(super.data({
      self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: this }),
      pageTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'customize' }),
      activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'slyte' }),
      placement: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: '' }),
      tooltipText: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: 'This is a helpful tooltip' }),
      demoTooltipConfig: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('string', { default: '{}' }),
      resetButtonObj: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', {
        default: {
          "label": "Reset",
          "variant": "outline",
          "color": "primary",
          "size": "extra-small",
          "callback": { "name": "resetCustomization" }
        }
      }),
      slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } }),
      jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_5__.prop)('object', { default: { code: '' } })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      resetCustomization() {
        this.setData('placement', '');
        this.setData('tooltipText', 'This is a helpful tooltip');
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
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
      changePlacement(event) {
        let val = event.target.value;
        this.setData('placement', val);
        this.setData('demoTooltipConfig', val ? JSON.stringify({position: val}) : '{}');
        this.constructCodeSnippet();
      },
      copyCode() {
        let activeTab = this.getData('activeTab');
        let key = activeTab + 'CodeSnippet';
        let code = (this.getData(key) || {}).code || '';
        navigator.clipboard.writeText(code);
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

TooltipComp._template = "<template tag-name=\"tooltip-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Tooltip</h1> <p class=\"zcat-page-desc\">Tooltips display contextual information when hovering over a trigger element. Ideal for labels, info icons, and truncated content.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:48px 24px; min-height:140px; display:flex; align-items:center; justify-content:center;\"> <div lt-prop-title=\"{{tooltipText}}\" lt-prop-tooltip-config=\"{{demoTooltipConfig}}\" class=\"zcat-tooltip-trigger\" style=\"display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border:1px solid var(--zcat-border-1); border-radius:6px; cursor:default; font-size:13px; color:var(--zcat-text-primary);\"> <zcat-icon name=\"info\" width=\"14\" height=\"14\" stroke=\"var(--zcat-primary-1)\" strokewidth=\"1.5\"></zcat-icon> <span>Hover to see tooltip</span> </div> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Placement</span> <select onchange=\"{{action('changePlacement',event)}}\" class=\"zcat-custom-select\"> <option value=\"\">Auto</option> <option value=\"top\">Top</option> <option value=\"bottom\">Bottom</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div> </div> </div> </div></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Placement Variants</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Top</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <span lt-prop-title=\"Tooltip on top\" lt-prop-tooltip-config=\"{&quot;position&quot;:&quot;top&quot;}\" class=\"zcat-tooltip-trigger\" style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Bottom</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <span lt-prop-title=\"Tooltip on bottom\" lt-prop-tooltip-config=\"{&quot;position&quot;:&quot;bottom&quot;}\" class=\"zcat-tooltip-trigger\" style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Left</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <span lt-prop-title=\"Tooltip on left\" lt-prop-tooltip-config=\"{&quot;position&quot;:&quot;left&quot;}\" class=\"zcat-tooltip-trigger\" style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Right</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px; display:flex; align-items:center; justify-content:center;\"> <span lt-prop-title=\"Tooltip on right\" lt-prop-tooltip-config=\"{&quot;position&quot;:&quot;right&quot;}\" class=\"zcat-tooltip-trigger\" style=\"padding:6px 14px; border:1px solid var(--zcat-border-1); border-radius:4px; cursor:default; font-size:12px; color:var(--zcat-text-primary);\">Hover me</span> </div> </div> </div> </div></template></template></div> </template>";;
TooltipComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":0,"cn":"lc_id_0"},{"t":"a","p":[0,3,3,1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[4,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,4],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;

TooltipComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "placement",
  "tooltipText",
  "demoTooltipConfig",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet"
];


TooltipComp.register("tooltip-comp", {
  hash: "TooltipComp_6",
  refHash: "C_zcat-app_app_0"
});


/***/ }),

/***/ 42625529:
/*!************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/I18n/en_US.js ***!
  \************************************************************/
/***/ (() => {

window._lyteUiComponentsLocale = {
	"lyte.calendar.previous.month": "Previous Month",
	"lyte.calendar.previous.year": "Previous Year",
	"lyte.calendar.next.month": "Next Month",
	"lyte.calendar.next.year": "Next Year",
	"lyte.calendar.choose.month": "Choose Month",
	"lyte.calendar.choose.year": "Choose Year",
	"lyte.calendar.monthview.drilldown.button": "Open a list of navigatable months",
	"lyte.calendar.decadeview.drilldown.button": "Open a list of navigatable years",
  "short.week": "W",
  "lyte.colorpicker.back": "back",
	"lyte.colorpicker.apply": "apply",
	"lyte.colorpicker.cancel": "cancel",
	"lyte.colorpicker.done": "done",
	"January": "January",
	"February": "February",
	"March": "March",
	"April": "April",
	"May": "May",
	"June": "June",
	"July": "July",
	"August": "August",
	"September": "September",
	"October": "October",
	"November":"November",
	"December":"December",
	"Jan": "Jan",
	"Feb": "Feb",
	"Mar": "Mar",
	"Apr": "Apr",
	"short.may": "May",
	"Jun": "Jun",
	"Jul": "Jul",
	"Aug": "Aug",
	"Sep": "Sep",
	"Oct": "Oct",
	"Nov": "Nov",
	"Dec": "Dec",
	"Mon": "Mon",
	"Tue": "Tue",
	"Wed": "Wed",
	"Thu": "Thu",
	"Fri": "Fri",
	"Sat": "Sat",
	"Sun": "Sun",
	"today": "Today",
  "monday": "Monday",
  "tuesday": "Tuesday",
  "wednesday": "Wednesday",
  "thursday": "Thursday",
  "friday": "Friday",
  "saturday": "Saturday",
  "sunday": "Sunday",
  "all-day": "All-Day",
  "day": "Day",
  "week": "Week",
  "month": "Month",
	"PM" : "PM",
  	"AM" : "AM",
  	"hour" : "hrs",
  	"min" : "mins",
  	"no.results.found": "No Results Found",
  	"Recently.Used.Colors": "Recently Used Colours",
	"Theme.Colors" : "Theme Colours",
	"Standard.Colors" : "Standard Colours",
	"Advanced.Colors" : "Advanced Colours",
	"Back.to.Basic.Colors" : "Back to Basic Colours",
	"Close" : "Close",
	"Available" : "Available",
 	"Selected" : "Selected",
 	"No.Fill" : "No Fill",
	"Choose.Color" : "Choose Colour",
	"Copy.Color.value.to.Clipboard" : "Copy the colour value to the clipboard",
	"yesterday" : 'Yesterday',
	"thisWeek" : 'This week',
	"thisMonth" : 'This month',
	"last7days" : "Last 7 days",
	"last30days" : "Last 30 days",
	"specificDate" : "Specific date",
	"customRange" : "Custom Range",
  "before" : "Before",
  "after" : "After",
	"Select" : 'Select',
	"lyte.fileupload.Drag file here or browse to upload": "Drag file here or browse to upload",
	"lyte.fileupload.Attachment failed": "Attachment failed",
	"lyte.fileupload.Retry": "Retry",
	"HEX" : "HEX",
	"RGB" : "RGB",
	"HSV" : "HSV",
	"CMYK" : "CMYK",
	"Alpha" : "Alpha",
  	"Color.value.copied" : "Colour value copied",
  	"lyte.nav.more.options": "More Options",
  	"lyte.avatar.navigator.previous.nav.button": "You are currently navigating a list of images. Previous Navigation.",
  	"lyte.avatar.navigator.next.nav.button": "You are currently navigating a list of images. Next Navigation.",
  	"lyte.avatar.navigator.previous.nav.description": "Press this to navigate to previous set of images",
  	"lyte.avatar.navigator.next.nav.description": "Press this to navigate to next set of images",
  	"lyte.avatar.navigator.description": "This has a set of images with navigatable buttons",
  	"lyte.avatar.navigator.images.shown": "Images $0 to $1 shown",
		"lyte.dual.listbox.no.results.found": "No Results Found",    
    "lyte.listview.true": "true",
    "lyte.listview.false": "false",
    "lyte.listview.search.placeholder": "Search here",
    "lyte.listview.filter": "Filter",
    "lyte.listview.filter.reset": "Reset",
    "lyte.listview.column.chooser": "Choose Columns",
    "lyte.listview.filter.not.selected": "Not Selected",
    "lyte.listview.filter.today": "Today",
    "lyte.listview.filter.till.yesterday": "Till Yesterday",
    "lyte.listview.filter.tomorrow": "Tomorrow",
    "lyte.listview.filter.next.7.days": "Next 7 Days",
    "lyte.listview.filter.last.week": "Last Week",
    "lyte.listview.filter.last.month": "Last Month",
    "lyte.listview.filter.is": "Is",
    "lyte.listview.filter.not.is": "Is not",
    "lyte.listview.filter.between": "Between",
    "lyte.listview.filter.less.than": "Less than",
    "lyte.listview.filter.greater.than": "Greater than",
    "lyte.listview.filter.less.than.or.equal": "Greater than",
    "lyte.listview.filter.greater.than.or.equal": "Greater than",
    "lyte.listview.filter.not.between": "Not between",
    "lyte.listview.filter.is.empty": "Is empty",
    "lyte.listview.filter.is.not.empty": "Is not empty",
    "lyte.listview.filter.set": "Set",
    "lyte.listview.filter.not.set": "Not set",
    "lyte.listview.filter.bigins": "Starts with",
    "lyte.listview.filter.contains": "Contains",
    "lyte.note.upload.file": "File Upload",
    "lyte.note.storage": "Storage",
    "lyte.note.more": "More",
    "lyte.note.add.note": "Add a note",
    "lyte.note.attach.files": "Attach Files",
    "lyte.note.all": "All",
    "lyte.note.discard": "Discard",
    "lyte.note.delete": "Delete",
    "lyte.listview.true": "true",
    "lyte.listview.false": "false",
    "lyte.listview.search.placeholder": "Search here",
    "lyte.listview.filter": "Filter",
    "lyte.listview.filter.reset": "Reset",
    "lyte.listview.column.chooser": "Choose Columns",
    "lyte.listview.filter.not.selected": "Not Selected",
    "lyte.listview.filter.today": "Today",
    "lyte.listview.filter.till.yesterday": "Till Yesterday",
    "lyte.listview.filter.tomorrow": "Tomorrow",
    "lyte.listview.filter.next.7.days": "Next 7 Days",
    "lyte.listview.filter.last.week": "Last Week",
    "lyte.listview.filter.last.month": "Last Month",
    "lyte.listview.filter.is": "Is",
    "lyte.listview.filter.not.is": "Is not",
    "lyte.listview.filter.between": "Between",
    "lyte.listview.filter.less.than": "Less than",
    "lyte.listview.filter.greater.than": "Greater than",
    "lyte.listview.filter.less.than.or.equal": "Greater than",
    "lyte.listview.filter.greater.than.or.equal": "Greater than",
    "lyte.listview.filter.not.between": "Not between",
    "lyte.listview.filter.is.empty": "Is empty",
    "lyte.listview.filter.is.not.empty": "Is not empty",
    "lyte.listview.filter.set": "Set",
    "lyte.listview.filter.not.set": "Not set",
    "lyte.listview.filter.bigins": "Starts with",
    "lyte.listview.filter.contains": "Contains",
    "lyte.note.upload.file": "File Upload",
    "lyte.note.storage": "Storage",
    "lyte.note.more": "More",
    "lyte.note.add.note": "Add a note",
    "lyte.note.attach.files": "Attach Files",
    "lyte.note.all": "All",
    "lyte.note.discard": "Discard",
    "lyte.note.delete": "Delete",
    "lyte.listview.true": "true",
    "lyte.listview.false": "false",
    "lyte.listview.search.placeholder": "Search here",
    "lyte.listview.filter": "Filter",
    "lyte.listview.filter.reset": "Reset",
    "lyte.listview.column.chooser": "Choose Columns",
    "lyte.listview.filter.not.selected": "Not Selected",
    "lyte.listview.filter.today": "Today",
    "lyte.listview.filter.till.yesterday": "Till Yesterday",
    "lyte.listview.filter.tomorrow": "Tomorrow",
    "lyte.listview.filter.next.7.days": "Next 7 Days",
    "lyte.listview.filter.last.week": "Last Week",
    "lyte.listview.filter.last.month": "Last Month",
    "lyte.listview.filter.is": "Is",
    "lyte.listview.filter.not.is": "Is not",
    "lyte.listview.filter.between": "Between",
    "lyte.listview.filter.less.than": "Less than",
    "lyte.listview.filter.greater.than": "Greater than",
    "lyte.listview.filter.less.than.or.equal": "Greater than",
    "lyte.listview.filter.greater.than.or.equal": "Greater than",
    "lyte.listview.filter.not.between": "Not between",
    "lyte.listview.filter.is.empty": "Is empty",
    "lyte.listview.filter.is.not.empty": "Is not empty",
    "lyte.listview.filter.set": "Set",
    "lyte.listview.filter.not.set": "Not set",
    "lyte.listview.filter.bigins": "Starts with",
    "lyte.listview.filter.contains": "Contains",
    "lyte.note.upload.file": "File Upload",
    "lyte.note.storage": "Storage",
    "lyte.note.more": "More",
    "lyte.note.add.note": "Add a note",
    "lyte.note.attach.files": "Attach Files",
    "lyte.note.all": "All",
    "lyte.note.discard": "Discard",
    "lyte.note.delete": "Delete",
    "lyte.listview.filter.greater.than.or.equal": "Greater than or equal to",
    "lyte.listview.filter.less.than.or.equal": "Less than or equal to",
    "lyte.codesnippet.copy": "Copy",
    "lyte.codesnippet.failure.message": "Unable to copy",
    "lyte.codesnippet.success.message": "Copied",
    "lyte.video.play" : "Play",
    "lyte.video.pause" : "Pause",
    "lyte.video.skip.forward" : "Forward",
    "lyte.video.skip.backward" : "Backward",
    "lyte.video.volume.mute" : "Mute",
    "lyte.video.volume.unmute" : "Unmute",
    "lyte.video.settings" : "Settings",
    "lyte.video.mode.pip" : "Play Picture in Picture",
    "lyte.video.mode.fullScreen" : "Full Screen",
    "lyte.video.menu.subtitles.off" : "off",
    "lyte.video.menu.subtitles" : "Subtitles/CC",
    "lyte.video.menu.playBackSpeed" : "Playback Speed",
    "lyte.video.menu.qualityOption" : "Quality",
    "lyte.video.menu.qualityOption.auto" : "auto",
    "lyte.checkbox.on": "on",
	  "lyte.checkbox.off": "off"
};


/***/ })

}]);
//# sourceMappingURL=tooltip-comp.js.map
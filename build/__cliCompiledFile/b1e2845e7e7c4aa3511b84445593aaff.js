import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import './zcat-toggle.js';
import './zcat-popover.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class PopoverComp extends Component {
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

    let positionSelect = node.querySelector('[data-action="changePopoverPosition"]');
    if (positionSelect) {
      positionSelect.addEventListener('change', function (e) {
        comp.$app.objectUtils(comp.getData('popoverObj'), 'add', 'position', e.target.value);
        comp.constructCodeSnippet();
      });
    }
  }

  constructCodeSnippet() {
    let popoverObj = this.getData('popoverObj') || {};

    let slyte_code = '<zcat-popover\n  self="{{self}}"\n  zcat-prop="{{popoverObj}}"\n></zcat-popover>';

    let propObj = {};
    propObj.position = popoverObj.position || 'bottom';
    if (popoverObj.isSearchable) propObj.isSearchable = true;
    if (popoverObj.heading) propObj.heading = popoverObj.heading;
    propObj.options = [
      { name: 'Edit', icon: 'edit' },
      { name: 'Duplicate', icon: 'copy' },
      { name: 'Delete', icon: 'trash' }
    ];
    propObj.callback = { name: 'onPopoverSelect' };

    let js_code = 'data() {\n  return {\n    self: prop(\'object\', { default: this }),\n    popoverObj: prop(\'object\', {\n      default: ' + JSON.stringify(propObj, null, 6) + '\n    })\n  };\n}';

    let html_code = '<div class="zcat-popover-wrapper">\n';
    html_code += '  <div class="zcat-popover-trigger">\n';
    html_code += '    <button class="zcat-popover-default-trigger">⋮</button>\n';
    html_code += '  </div>\n';
    html_code += '  <div class="zcat-popover-menu zcat-popover-' + (popoverObj.position || 'bottom') + '">\n';
    html_code += '    <div class="zcat-popover-options">\n';
    html_code += '      <div class="zcat-popover-item">Edit</div>\n';
    html_code += '      <div class="zcat-popover-item">Duplicate</div>\n';
    html_code += '      <div class="zcat-popover-item">Delete</div>\n';
    html_code += '    </div>\n';
    html_code += '  </div>\n';
    html_code += '</div>';

    let css_code = '.zcat-popover-wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n';
    css_code += '.zcat-popover-menu {\n  position: absolute;\n  background: var(--zcat-popover-bg);\n  border: 1px solid var(--zcat-popover-border);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  padding: 4px 0;\n  min-width: 160px;\n  z-index: 100;\n}\n\n';
    css_code += '.zcat-popover-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n';
    css_code += '.zcat-popover-item:hover {\n  background: var(--zcat-popover-item-bg-hover);\n}';

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
      popoverObj: prop('object', {
        default: {
          position: 'bottom',
          heading: 'Actions',
          isSearchable: false,
          trigger: { label: 'Open Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Edit', icon: 'edit' },
            { name: 'Duplicate', icon: 'copy' },
            { name: 'Share', icon: 'share' },
            { name: 'Archive', icon: 'archive' },
            { name: 'Delete', icon: 'trash' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      resetButtonObj: prop('object', {
        default: { label: 'Reset', variant: 'outline', color: 'primary', size: 'extra-small', callback: { name: 'resetCustomization' } }
      }),
      toggleSearchObj: prop('object', {
        default: { checked: false, size: 'small', callback: { name: 'onToggleSearch' } }
      }),
      toggleHeadingObj: prop('object', {
        default: { checked: true, size: 'small', callback: { name: 'onToggleHeading' } }
      }),
      // Variant demos
      variantBasicObj: prop('object', {
        default: {
          position: 'bottom',
          trigger: { label: 'Basic Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Option A' },
            { name: 'Option B' },
            { name: 'Option C' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantIconObj: prop('object', {
        default: {
          position: 'bottom',
          heading: 'File Actions',
          trigger: { label: 'With Icons', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'New File', icon: 'file-plus' },
            { name: 'Open', icon: 'folder' },
            { name: 'Save', icon: 'save' },
            { name: 'Export', icon: 'download' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantSearchObj: prop('object', {
        default: {
          position: 'bottom',
          isSearchable: true,
          heading: 'Assign To',
          width: '220px',
          trigger: { label: 'Searchable', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Alice Johnson', icon: 'user' },
            { name: 'Bob Smith', icon: 'user' },
            { name: 'Carol White', icon: 'user' },
            { name: 'Dave Brown', icon: 'user' },
            { name: 'Eve Davis', icon: 'user' }
          ],
          callback: { name: 'onPopoverSelect' }
        }
      }),
      variantNestedObj: prop('object', {
        default: {
          position: 'bottom',
          trigger: { label: 'Nested Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Cut', icon: 'scissors' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Paste', icon: 'clipboard' },
            { name: 'More', icon: 'chevron-right', nestedPopover: true, options: [
              { name: 'Import' },
              { name: 'Export' },
              { name: 'Print' }
            ]}
          ],
          callback: { name: 'onPopoverSelect' }
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
        this.setData('popoverObj', {
          position: 'bottom',
          heading: 'Actions',
          isSearchable: false,
          trigger: { label: 'Open Menu', variant: 'outline', color: 'primary', size: 'small' },
          options: [
            { name: 'Edit', icon: 'edit' },
            { name: 'Duplicate', icon: 'copy' },
            { name: 'Share', icon: 'share' },
            { name: 'Archive', icon: 'archive' },
            { name: 'Delete', icon: 'trash' }
          ],
          callback: { name: 'onPopoverSelect' }
        });
        this.$app.objectUtils(this.getData('toggleSearchObj'), 'add', 'checked', false);
        this.$app.objectUtils(this.getData('toggleHeadingObj'), 'add', 'checked', true);
        let selects = this.$node.querySelectorAll('.zcat-custom-select');
        if (selects) { selects.forEach(function (s) { s.selectedIndex = 0; }); }
        this.constructCodeSnippet();
      },
      onToggleSearch(checked) {
        this.$app.objectUtils(this.getData('popoverObj'), 'add', 'isSearchable', checked);
        this.constructCodeSnippet();
      },
      onToggleHeading(checked) {
        this.$app.objectUtils(this.getData('popoverObj'), 'add', 'heading', checked ? 'Actions' : '');
        this.constructCodeSnippet();
      },
      onPopoverSelect(item) {
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

PopoverComp._template = "<template tag-name=\"popover-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Popover</h1> <p class=\"zcat-page-desc\">Popovers display contextual menus, action lists, or nested options triggered by user interaction.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"min-height:260px;display:flex;align-items:flex-start;justify-content:center;padding-top:20px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{popoverObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Position</span> <select data-action=\"changePopoverPosition\" class=\"zcat-custom-select\"> <option value=\"bottom\">Bottom</option> <option value=\"top\">Top</option> <option value=\"left\">Left</option> <option value=\"right\">Right</option> </select> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Searchable</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleSearchObj}}\"></zcat-toggle> </div> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Heading</span> <zcat-toggle self=\"{{self}}\" zcat-prop=\"{{toggleHeadingObj}}\"></zcat-toggle> </div> </div> </div> </div></template></template> <!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">Basic</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Basic Menu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantBasicObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:240px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">With Icons</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantIconObj}}\"></zcat-popover> </div> </div> </div> <h3 class=\"zcat-section-label\" style=\"margin-top:24px\">Advanced</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Searchable</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantSearchObj}}\"></zcat-popover> </div> </div> <div class=\"zcat-variant-card\" style=\"min-height:280px\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Nested Submenu</span></div> <div class=\"zcat-variant-card-preview\" style=\"display:flex;align-items:flex-start;justify-content:center;padding-top:12px\"> <zcat-popover self=\"{{self}}\" zcat-prop=\"{{variantNestedObj}}\"></zcat-popover> </div> </div> </div> </div></template></template> </div> </template><style>/* popover-comp specific overrides if needed */\n</style>";;
PopoverComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1,3,1,1],"in":8,"sibl":[7],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,5,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":7,"sibl":[6],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,7,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[0,1,7,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,7,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,5,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,5,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[8,3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,3,3,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,7,1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,7,3,3,1],"cn":"lc_id_0"},{"t":"cD","p":[0,7,3,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

PopoverComp._observedAttributes = [
  "activeTab",
  "pageTab",
  "self",
  "popoverObj",
  "resetButtonObj",
  "toggleSearchObj",
  "toggleHeadingObj",
  "variantBasicObj",
  "variantIconObj",
  "variantSearchObj",
  "variantNestedObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { PopoverComp };

PopoverComp.register("popover-comp", {
  hash: "PopoverComp_2",
  refHash: "C_zcat-app_app_0"
});

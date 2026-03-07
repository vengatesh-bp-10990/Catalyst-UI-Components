import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-button.js';
import './zcat-input.js';
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class InlineeditComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet();
  }

  constructCodeSnippet() {
    let obj = this.getData('inlineeditObj') || {};
    let value = obj.value || 'Rename Headings & Text';

    let slyte_code = `<!-- Inline Edit -->\n<div class="zcat-inline-edit-wrapper">\n  <span class="zcat-inline-edit-text">{{value}}</span>\n  <button class="zcat-inline-edit-trigger" onclick="{{action('startEdit')}}">\n    <zcat-icon name="edit-pencil" width="14" height="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n  </button>\n</div>`;

    let js_code = `data() {\n  return {\n    value: '${value}',\n    isEditing: false,\n    editValue: '${value}'\n  };\n}\n\nstatic methods() {\n  return {\n    startEdit() {\n      this.setData('editValue', this.getData('value'));\n      this.setData('isEditing', true);\n    },\n    confirmEdit() {\n      this.setData('value', this.getData('editValue'));\n      this.setData('isEditing', false);\n    },\n    cancelEdit() {\n      this.setData('isEditing', false);\n    }\n  };\n}`;

    let html_code = `<div class="zcat-inline-edit-wrapper">\n  <!-- Display Mode -->\n  <div lyte-if="{{!isEditing}}" class="zcat-inline-display">\n    <span class="zcat-inline-text">{{value}}</span>\n    <button class="zcat-inline-edit-btn" onclick="{{method('startEdit')}}">\n      <zcat-icon name="edit-pencil" width="14" height="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n    </button>\n  </div>\n  <!-- Edit Mode -->\n  <div lyte-else class="zcat-inline-editing">\n    <zcat-input zcat-prop="{{editInputObj}}"></zcat-input>\n    <button class="zcat-inline-confirm-btn" onclick="{{method('confirmEdit')}}">\n      <zcat-icon name="tick" width="14" height="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n    </button>\n    <button class="zcat-inline-cancel-btn" onclick="{{method('cancelEdit')}}">\n      <zcat-icon name="close" width="14" height="14" stroke="currentColor" stroke-width="1.3"></zcat-icon>\n    </button>\n  </div>\n</div>`;

    let css_code = `.zcat-inline-display { display: flex; align-items: center; gap: 6px; }\n.zcat-inline-edit-btn { background: none; border: none; cursor: pointer; padding: 2px; opacity: 0; transition: opacity 0.15s; }\n.zcat-inline-display:hover .zcat-inline-edit-btn { opacity: 1; }\n.zcat-inline-editing { display: flex; align-items: center; gap: 6px; }\n.zcat-inline-confirm-btn, .zcat-inline-cancel-btn { background: none; border: 1px solid var(--zcat-inputField-border-default); border-radius: 4px; cursor: pointer; padding: 4px; display: flex; align-items: center; }\n.zcat-inline-confirm-btn:hover { background: var(--zcat-btn-primary-bg-default); }\n.zcat-inline-cancel-btn:hover { background: var(--zcat-inputField-bg-hover); }`;

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
      isEditing: prop('boolean', { default: false }),
      editValue: prop('string', { default: 'Rename Headings & Text' }),
      inlineeditObj: prop('object', {
        default: {
          value: 'Rename Headings & Text'
        }
      }),
      editInputObj: prop('object', {
        default: {
          placeholder: 'Enter text...',
          size: 'extra-small',
          width: '220px',
          key: 'inlineEditVal',
          callback: { name: 'onEditChange' }
        }
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
      startEdit() {
        this.setData('editValue', this.getData('inlineeditObj').value || '');
        this.setData('isEditing', true);
      },
      confirmEdit() {
        let newVal = this.getData('editValue');
        this.$app.objectUtils(this.getData('inlineeditObj'), 'add', 'value', newVal);
        this.setData('isEditing', false);
        this.constructCodeSnippet();
      },
      cancelEdit() {
        this.setData('isEditing', false);
      },
      onEditChange(val) {
        this.setData('editValue', val);
      },
      resetCustomise() {
        this.$app.objectUtils(this.getData('inlineeditObj'), 'add', 'value', 'Rename Headings & Text');
        this.setData('editValue', 'Rename Headings & Text');
        this.setData('isEditing', false);
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

InlineeditComp._template = "<template tag-name=\"inlineedit-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Inline Edit</h1> <p class=\"zcat-page-desc\">An inline text field that transitions between display and edit modes directly in context — no modal or separate form needed.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','customize'),'?:','active','')}}\" onclick=\"{{action('showCustomizeTab')}}\">Customize</span> <span class=\"zcat-page-tab {{expHandlers(expHandlers(pageTab,'===','variants'),'?:','active','')}}\" onclick=\"{{action('showVariantsTab')}}\">All Variants</span> <span class=\"zcat-page-tab\">Change Logs</span> </div> </div> <!-- Customize Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','customize')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-body\"> <div class=\"zcat-page-left\"> <h3 class=\"zcat-section-label\">preview</h3> <div class=\"zcat-preview-box\"> <div class=\"zcat-preview-area\" style=\"padding:24px;display:flex;align-items:center;justify-content:center\"> <!-- Display mode --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(isEditing,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"><div style=\"display:inline-flex;align-items:center;gap:6px;cursor:default\" class=\"zcat-inline-display-group\"> <span style=\"font-size:14px;color:var(--zcat-body-text-primary)\">{{inlineeditObj.value}}</span> <button onclick=\"{{method('startEdit')}}\" title=\"Edit\" style=\"background:none;border:none;cursor:pointer;padding:2px;display:flex;align-items:center;opacity:0;transition:opacity 0.15s\" class=\"zcat-inline-edit-icon-btn\"> <zcat-icon name=\"edit-pencil\" width=\"14\" height=\"14\" stroke=\"var(--zcat-body-text-secondary)\" stroke-width=\"1.3\"></zcat-icon> </button> </div></template><template default=\"\"><div style=\"display:inline-flex;align-items:center;gap:6px\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{editInputObj}}\"></zcat-input> <button onclick=\"{{method('confirmEdit')}}\" title=\"Confirm\" style=\"background:none;border:1px solid var(--zcat-inputField-border-default);border-radius:4px;cursor:pointer;padding:4px;display:flex;align-items:center\"> <zcat-icon name=\"tick\" width=\"14\" height=\"14\" stroke=\"var(--zcat-status-success)\" stroke-width=\"1.3\"></zcat-icon> </button> <button onclick=\"{{method('cancelEdit')}}\" title=\"Cancel\" style=\"background:none;border:1px solid var(--zcat-inputField-border-default);border-radius:4px;cursor:pointer;padding:4px;display:flex;align-items:center\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"var(--zcat-body-text-secondary)\" stroke-width=\"1.3\"></zcat-icon> </button> </div></template></template><!-- Edit mode --> </div> </div> <style> .zcat-inline-display-group:hover .zcat-inline-edit-icon-btn { opacity: 1 !important; } </style> <!-- Code Tabs --> <div class=\"zcat-code-tabs\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template></div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> <zcat-button self=\"{{self}}\" zcat-prop=\"{{resetButtonObj}}\"></zcat-button> </div> <div class=\"zcat-custom-body\"> <div class=\"zcat-custom-row\" style=\"flex-direction:column;align-items:flex-start;gap:6px\"> <span class=\"zcat-custom-label\">State</span> <p style=\"font-size:12px;color:var(--zcat-body-text-secondary);margin:0\">Hover the preview text to see the edit icon (Hover state). Click the icon to enter Active (edit) state.</p> </div> <div class=\"zcat-custom-row\" style=\"flex-direction:column;align-items:flex-start;gap:6px;margin-top:4px\"> <span class=\"zcat-custom-label\" style=\"font-size:11px;text-transform:uppercase;letter-spacing:0.5px\">States</span> <div style=\"display:flex;flex-direction:column;gap:4px;width:100%\"> <div style=\"display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;background:var(--zcat-inputField-bg-default);border:1px solid var(--zcat-inputField-border-default)\"> <span style=\"font-size:11px;font-weight:600;color:var(--zcat-body-text-secondary);min-width:70px\">Default</span> <span style=\"font-size:12px;color:var(--zcat-body-text-primary)\">Text visible, no controls</span> </div> <div style=\"display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;background:var(--zcat-inputField-bg-default);border:1px solid var(--zcat-inputField-border-default)\"> <span style=\"font-size:11px;font-weight:600;color:var(--zcat-body-text-secondary);min-width:70px\">Hover</span> <span style=\"font-size:12px;color:var(--zcat-body-text-primary)\">Edit pencil icon appears</span> </div> <div style=\"display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;background:var(--zcat-inputField-bg-default);border:1px solid var(--zcat-inputField-border-default)\"> <span style=\"font-size:11px;font-weight:600;color:var(--zcat-body-text-secondary);min-width:70px\">Active</span> <span style=\"font-size:12px;color:var(--zcat-body-text-primary)\">Input + tick/cancel shown</span> </div> </div> </div> </div> </div> </div></template></template><!-- All Variants Tab --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(pageTab,'===','variants')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-page-left\" style=\"flex:1\"> <h3 class=\"zcat-section-label\" style=\"margin-top:4px\">States</h3> <div class=\"zcat-variants-grid\"> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Default</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px\"> <span style=\"font-size:14px;color:var(--zcat-body-text-primary)\">Rename Headings &amp; Text</span> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Hover (Edit icon visible)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:24px\"> <div style=\"display:inline-flex;align-items:center;gap:6px\"> <span style=\"font-size:14px;color:var(--zcat-body-text-primary)\">Rename Headings &amp; Text</span> <span style=\"display:flex;align-items:center;padding:2px\"> <zcat-icon name=\"edit-pencil\" width=\"14\" height=\"14\" stroke=\"var(--zcat-body-text-secondary)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> <div class=\"zcat-variant-card\"> <div class=\"zcat-variant-card-head\"><span class=\"zcat-variant-card-title\">Active (Edit mode)</span></div> <div class=\"zcat-variant-card-preview\" style=\"padding:16px\"> <div style=\"display:inline-flex;align-items:center;gap:6px\"> <zcat-input self=\"{{self}}\" zcat-prop=\"{{editInputObj}}\"></zcat-input> <span style=\"border:1px solid var(--zcat-inputField-border-default);border-radius:4px;padding:4px;display:flex;align-items:center\"> <zcat-icon name=\"tick\" width=\"14\" height=\"14\" stroke=\"var(--zcat-status-success)\" stroke-width=\"1.3\"></zcat-icon> </span> <span style=\"border:1px solid var(--zcat-inputField-border-default);border-radius:4px;padding:4px;display:flex;align-items:center\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"var(--zcat-body-text-secondary)\" stroke-width=\"1.3\"></zcat-icon> </span> </div> </div> </div> </div> </div></template></template></div> </template>";;
InlineeditComp._dynamicNodes = [{"t":"a","p":[1,1,5,1]},{"t":"a","p":[1,1,5,3]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"s","p":[0,1,3,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,1,0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0,1],"cn":"default"},{"t":"cD","p":[0,1],"in":2,"sibl":[1],"cn":"default"},{"t":"a","p":[0,3],"cn":"default"},{"t":"cD","p":[0,3,1],"in":1,"sibl":[0],"cn":"default"},{"t":"a","p":[0,5],"cn":"default"},{"t":"cD","p":[0,5,1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5],"cn":"lc_id_0"},{"t":"a","p":[0,1,9,1],"cn":"lc_id_0"},{"t":"a","p":[0,1,9,3],"cn":"lc_id_0"},{"t":"a","p":[0,1,9,5],"cn":"lc_id_0"},{"t":"a","p":[0,1,9,7],"cn":"lc_id_0"},{"t":"s","p":[0,1,11,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"s","p":[0,1,11,1,2],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"s","p":[0,1,11,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[0,1,11,1,4],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[0,1,11,3],"cn":"lc_id_0"},{"t":"cD","p":[0,1,11,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,5,1,3],"cn":"lc_id_0"},{"t":"cD","p":[0,5,1,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[6,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,8],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[0,3,3,3,1,3,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[0,3,5,3,1,1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1,3,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,3,5,3,1,5,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

InlineeditComp._observedAttributes = [
  "self",
  "pageTab",
  "activeTab",
  "isEditing",
  "editValue",
  "inlineeditObj",
  "editInputObj",
  "resetButtonObj",
  "slyteCodeSnippet",
  "jsCodeSnippet",
  "htmlCodeSnippet",
  "cssCodeSnippet"
];

export { InlineeditComp };

InlineeditComp.register("inlineedit-comp", {
  hash: "InlineeditComp_4",
  refHash: "C_zcat-app_app_0"
});

import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatButton extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    const defaultProp = {
      menu: {
        id: '',
        list: [
          {
            label: '',
            icon: {
              Position: '',
              name: '',
              class: ''
            },
            callback: {
                name: '',
                arguments: []
              }
          }
        ]
      },
      variant: '',
      color: '',
      disabled: false,
      loading: false,
      size: 'default',
      label: 'SYNC NOW',
      type: '',
      icon: {
        position: 'right',
        name: '',
        class: '' 
      },      
      callback: {
        name: '',
        arguments: []
      },
      ltPropClassCss: "",
      classCss: "",
      width: ""
    };

    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object')
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      async customLbindForButtonClick(a, b, c, d) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (prop.callback.name && prop.callback.type !== 'submit') {
          if(prop.callback?.arguments?.length) {
            await self.executeMethod(prop.callback.name, prop.callback.arguments);
          } else {
            await self.executeMethod(prop.callback.name);
          }
        }
      },
      async customLbindForMenuClick(item) {
        const self = this.getData('self');
        if (item.callback.name) {
          await self.executeMethod(item.callback.name, item);
        }
      },
      buttonClick(a, b, c){
        this.executeMethod('clickAction', a, b, c);
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

ZcatButton._template = "<template tag-name=\"zcat-button\"> <!-- Normal button (non-split) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'!==','split')}}\" is=\"case\" lc-id=\"lc_id_0\"> <button class=\"zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-btn-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-btn-exsm',expHandlers(expHandlers(zcatProp.size,'===','large'),'?:','zcat-btn-lg','')))}} {{expHandlers(expHandlers(expHandlers(zcatProp.label,'===',undefined),'||',expHandlers(zcatProp.label,'===',null)),'?:','icon-only','')}} {{expHandlers(zcatProp.loading,'?:','loading','')}} {{zcatProp.classCss}}\" onclick=\"{{action('customLbindForButtonClick')}}\" disabled=\"{{zcatProp.disabled}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.icon,'&amp;&amp;',expHandlers(zcatProp.icon.position,'===','left')),'&amp;&amp;',zcatProp.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-btn-icon\" name=\"{{zcatProp.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.label,'!==',undefined),'&amp;&amp;',expHandlers(zcatProp.label,'!==',null))}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-btn-text\">{{zcatProp.label}}</span></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.icon,'&amp;&amp;',expHandlers(zcatProp.icon.position,'===','right')),'&amp;&amp;',zcatProp.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-btn-icon\" name=\"{{zcatProp.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </template></template> <div class=\"zcat-btn-loader-wrap\"> <div class=\"zcat-btn-loader\"></div> </div> </button> </template></template> <!-- Split button --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','split')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-split-group\"> <button class=\"zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-btn-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-btn-exsm',expHandlers(expHandlers(zcatProp.size,'===','large'),'?:','zcat-btn-lg','')))}} split-body {{expHandlers(zcatProp.loading,'?:','loading','')}}\" onclick=\"{{action('customLbindForButtonClick')}}\" disabled=\"{{zcatProp.disabled}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.icon,'&amp;&amp;',expHandlers(zcatProp.icon.position,'===','left')),'&amp;&amp;',zcatProp.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-btn-icon\" name=\"{{zcatProp.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.label,'!==',undefined),'&amp;&amp;',expHandlers(zcatProp.label,'!==',null))}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"zcat-btn-text\">{{zcatProp.label}}</span></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.icon,'&amp;&amp;',expHandlers(zcatProp.icon.position,'===','right')),'&amp;&amp;',zcatProp.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon class=\"zcat-btn-icon\" name=\"{{zcatProp.icon.name}}\" width=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" height=\"{{expHandlers(expHandlers(expHandlers(zcatProp.size,'===','small'),'||',expHandlers(zcatProp.size,'===','extra-small')),'?:','14','16')}}\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </template></template> <div class=\"zcat-btn-loader-wrap\"> <div class=\"zcat-btn-loader\"></div> </div> </button> <button class=\"zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-btn-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-btn-exsm',expHandlers(expHandlers(zcatProp.size,'===','large'),'?:','zcat-btn-lg','')))}} split-arrow\" onclick=\"{{action('buttonClick')}}\" disabled=\"{{zcatProp.disabled}}\"> <zcat-icon name=\"arrow-downward\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </div> </template></template> </template><style>zcat-button * {\n  box-sizing: border-box;\n}\n\n/* Base button */\n.zcat-btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-default) var(--zcat-font-family-primary);\n  padding: 0 14px;\n  width: auto;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  user-select: none;\n  cursor: pointer;\n  height: 36px;\n  white-space: nowrap;\n  outline: none;\n  transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.zcat-btn-text { margin: 0; pointer-events: none; }\n.zcat-btn-icon { flex-shrink: 0; pointer-events: none; }\n\n/* Sizes */\n.zcat-btn.zcat-btn-sm {\n  padding: 0 10px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-sm) var(--zcat-font-family-primary);\n  height: 28px;\n  border-radius: 6px;\n  gap: 4px;\n}\n.zcat-btn.zcat-btn-exsm {\n  padding: 0 8px;\n  height: 24px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-exsm) var(--zcat-font-family-primary);\n  border-radius: 6px;\n  gap: 4px;\n}\n.zcat-btn.zcat-btn-lg {\n  height: 50px;\n  padding: 0 20px;\n  font: var(--zcat-button-font-weight) var(--zcat-button-font-lg) var(--zcat-font-family-primary);\n  gap: 8px;\n}\n\n/* ---- Fill Variant ---- */\n.zcat-btn.fill { color: var(--zcat-btn-fill-text-default) !important; border: none; }\n.zcat-btn.fill.primary { background: var(--zcat-btn-fill-bg-primary-default); }\n.zcat-btn.fill.success { background: var(--zcat-btn-fill-bg-success-default); }\n.zcat-btn.fill.danger  { background: var(--zcat-btn-fill-bg-danger-default); }\n.zcat-btn.fill.primary:hover { background: var(--zcat-btn-fill-bg-primary-hover); }\n.zcat-btn.fill.success:hover { background: var(--zcat-btn-fill-bg-success-hover); }\n.zcat-btn.fill.danger:hover  { background: var(--zcat-btn-fill-bg-danger-hover); }\n.zcat-btn.fill:active { color: var(--zcat-btn-fill-text-click) !important; }\n.zcat-btn.fill.primary:active { background: var(--zcat-btn-fill-bg-primary-click); }\n.zcat-btn.fill.success:active { background: var(--zcat-btn-fill-bg-success-click); }\n.zcat-btn.fill.danger:active  { background: var(--zcat-btn-fill-bg-danger-click); }\n.zcat-btn.fill:disabled { color: var(--zcat-btn-fill-text-disabled) !important; opacity: 0.5; pointer-events: none; cursor: default; }\n.zcat-btn.fill.primary:disabled { background: var(--zcat-btn-fill-bg-primary-disabled); }\n.zcat-btn.fill.success:disabled { background: var(--zcat-btn-fill-bg-success-disabled); }\n.zcat-btn.fill.danger:disabled  { background: var(--zcat-btn-fill-bg-danger-disabled); }\n.zcat-btn.fill svg { stroke: var(--zcat-btn-fill-icon-default); }\n\n/* ---- Outline Variant ---- */\n.zcat-btn.outline { background: transparent; }\n.zcat-btn.outline.primary { color: var(--zcat-btn-outline-text-primary-default); border-color: var(--zcat-btn-outline-border-primary-default); }\n.zcat-btn.outline.success { color: var(--zcat-btn-outline-text-success-default); border-color: var(--zcat-btn-outline-border-success-default); }\n.zcat-btn.outline.danger  { color: var(--zcat-btn-outline-text-danger-default); border-color: var(--zcat-btn-outline-border-danger-default); }\n.zcat-btn.outline.primary:hover { color: var(--zcat-btn-outline-text-primary-hover); border-color: var(--zcat-btn-outline-border-primary-hover); background: var(--zcat-btn-outline-bg-primaryHover); }\n.zcat-btn.outline.success:hover { color: var(--zcat-btn-outline-text-success-hover); border-color: var(--zcat-btn-outline-border-success-hover); background: var(--zcat-btn-outline-bg-successHover); }\n.zcat-btn.outline.danger:hover  { color: var(--zcat-btn-outline-text-danger-hover); border-color: var(--zcat-btn-outline-border-danger-hover); background: var(--zcat-btn-outline-bg-dangerHover); }\n.zcat-btn.outline:active { background: transparent; }\n.zcat-btn.outline:disabled { opacity: 0.5; pointer-events: none; cursor: default; }\n.zcat-btn.outline.primary svg { stroke: var(--zcat-btn-outline-icon-primary-default); }\n.zcat-btn.outline.success svg { stroke: var(--zcat-btn-outline-icon-success-default); }\n.zcat-btn.outline.danger svg  { stroke: var(--zcat-btn-outline-icon-danger-default); }\n\n/* ---- Grey Variant ---- */\n.zcat-btn.grey {\n  background: var(--zcat-btn-grey-bg-default);\n  color: var(--zcat-btn-grey-text-default);\n  border-color: var(--zcat-btn-grey-border-default);\n}\n.zcat-btn.grey:hover { background: var(--zcat-btn-grey-bg-hover); border-color: var(--zcat-btn-grey-border-hover); color: var(--zcat-btn-grey-text-hover); }\n.zcat-btn.grey:active { background: var(--zcat-btn-grey-bg-click); color: var(--zcat-btn-grey-text-click); border-color: var(--zcat-btn-grey-border-click); }\n.zcat-btn.grey:disabled { background: var(--zcat-btn-grey-bg-disabled); opacity: 0.5; pointer-events: none; cursor: default; }\n.zcat-btn.grey svg { stroke: var(--zcat-btn-grey-icon-default); }\n\n/* ---- Ghost Variant ---- */\n.zcat-btn.ghost { border-color: transparent; background: transparent; }\n.zcat-btn.ghost.primary { color: var(--zcat-btn-ghost-text-primary-default); }\n.zcat-btn.ghost.success { color: var(--zcat-btn-ghost-text-success-default); }\n.zcat-btn.ghost.danger  { color: var(--zcat-btn-ghost-text-danger-default); }\n.zcat-btn.ghost.primary:hover { background: var(--zcat-btn-ghost-bg-primary-hover); }\n.zcat-btn.ghost.success:hover { background: var(--zcat-btn-ghost-bg-success-hover); }\n.zcat-btn.ghost.danger:hover  { background: var(--zcat-btn-ghost-bg-danger-hover); }\n.zcat-btn.ghost:disabled { opacity: 0.5; pointer-events: none; cursor: default; }\n.zcat-btn.ghost.primary svg { stroke: var(--zcat-btn-ghost-icon-primary-default); }\n.zcat-btn.ghost.success svg { stroke: var(--zcat-btn-ghost-icon-success-default); }\n.zcat-btn.ghost.danger svg  { stroke: var(--zcat-btn-ghost-icon-danger-default); }\n\n/* ---- Icon Only ---- */\n.zcat-btn.icon-only { padding: 0; width: 36px; }\n.zcat-btn.zcat-btn-sm.icon-only { width: 28px; }\n.zcat-btn.zcat-btn-exsm.icon-only { width: 24px; }\n.zcat-btn.zcat-btn-lg.icon-only { width: 50px; }\n\n/* ---- Split ---- */\n.zcat-split-group { display: inline-flex; }\n.zcat-btn.split-body { border-radius: 6px 0 0 6px; }\n.zcat-btn.fill.split-body { border-right: 1px solid var(--zcat-btn-fill-splitLine-default) !important; }\n.zcat-btn.split-arrow { border-radius: 0 6px 6px 0; padding: 0 8px; min-width: auto; }\n\n/* ---- Loader ---- */\n.zcat-btn-loader-wrap {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n}\n.zcat-btn-loader {\n  border: 1.5px solid currentColor;\n  border-top-color: transparent;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  animation: zcat-btn-spin 1s linear infinite;\n}\n.zcat-btn.loading .zcat-btn-text,\n.zcat-btn.loading .zcat-btn-icon { opacity: 0; }\n.zcat-btn.loading .zcat-btn-loader-wrap { opacity: 1; }\n.zcat-btn.loading { pointer-events: none; }\n\n@keyframes zcat-btn-spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Width full */\n.zcat-btn.zcat-w100p { width: 100%; }\n</style>";;
ZcatButton._dynamicNodes = [{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"cD","p":[1,3,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ZcatButton._observedAttributes = ["self", "zcatProp"];
export { ZcatButton };

ZcatButton.register("zcat-button", {
  hash: "ZcatButton_2",
  refHash: "C_zcat-app_app_0"
});

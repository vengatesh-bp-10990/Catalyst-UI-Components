import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatTab extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }),
      activeTabId: prop('string', { default: '' })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.activeTab) {
      this.setData('activeTabId', zcatProp.activeTab);
    } else if (zcatProp.list && zcatProp.list.length > 0) {
      this.setData('activeTabId', zcatProp.list[0].id);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      selectTab(item) {
        if (!item || item.disabled) return;
        this.setData('activeTabId', item.id);

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item, zcatProp);
        }
      },
      closeTab(item, event) {
        if (event) { event.stopPropagation(); }
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onClose) {
          self.executeMethod(zcatProp.onClose, item, zcatProp);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncState();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatTab._template = "<template tag-name=\"zcat-tab\"> <div class=\"zcat-tabs-wrapper {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-tabs-secondary',expHandlers(expHandlers(zcatProp.variant,'===','code'),'?:','zcat-tabs-code','zcat-tabs-primary'))}} {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-tabs-sm',expHandlers(expHandlers(zcatProp.size,'===','extra-small'),'?:','zcat-tabs-exsm',''))}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Tab Head --> <div class=\"zcat-tab-head\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-tab-title {{expHandlers(expHandlers(activeTabId,'===',item.id),'?:','zcat-tab-active','')}} {{expHandlers(item.disabled,'?:','zcat-tab-disabled','')}}\" onclick=\"{{action('selectTab',item)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon,'&amp;&amp;',item.icon.name)}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{item.icon.name}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-tab-icon\"></zcat-icon> </template></template> <span class=\"zcat-tab-label\">{{item.title.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.title.badge}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-tab-badge\">{{item.title.badge}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','code')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-tab-code-slide\"></div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.closeIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-tab-close\" onclick=\"{{action('closeTab',item,event)}}\"> <zcat-icon name=\"close\" width=\"10\" height=\"10\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </template></template> </div></template> </div> <!-- Tab Body --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.showBody,'!==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-tab-body\"> <template items=\"{{zcatProp.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-tab-content {{expHandlers(expHandlers(activeTabId,'===',item.id),'?:','zcat-tab-show','zcat-tab-hide')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.body,'&amp;&amp;',item.body.content)}}\" is=\"case\" lc-id=\"lc_id_0\"> {{item.body.content}} </template></template> </div></template> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Tab Component\n   Variants: primary, secondary, code\n   ============================== */\n\nzcat-tab * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-tabs-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* ===== TAB HEAD ===== */\n.zcat-tab-head {\n  display: flex;\n  align-items: stretch;\n  position: relative;\n}\n\n/* ===== TAB TITLE (shared) ===== */\n.zcat-tab-title {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color 0.15s, background 0.15s, border-color 0.15s;\n  outline: none;\n}\n.zcat-tab-title.zcat-tab-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* --- Tab label --- */\n.zcat-tab-label {\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.zcat-tab-active .zcat-tab-label {\n  font-weight: 600;\n}\n\n/* --- Tab badge --- */\n.zcat-tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 50%;\n  font: var(--zcat-font-10-12) var(--zcat-font-family-primary);\n  background: var(--zcat-btn-fill-bg-primary-default);\n  color: var(--zcat-white);\n}\n\n/* --- Tab close icon --- */\n.zcat-tab-close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  margin-left: 4px;\n  opacity: 0.5;\n  transition: opacity 0.15s, background 0.15s;\n}\n.zcat-tab-close:hover {\n  opacity: 1;\n  background: rgba(0,0,0,0.06);\n}\n\n/* --- Tab body --- */\n.zcat-tab-body {\n  display: block;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n.zcat-tab-show { display: block; }\n.zcat-tab-hide { display: none; }\n\n/* =========================================\n   PRIMARY VARIANT\n   ========================================= */\n.zcat-tabs-primary .zcat-tab-head {\n  border-bottom: 1px solid var(--zcat-tabs-primary-border-default);\n}\n.zcat-tabs-primary .zcat-tab-title {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-primary-text-default);\n  padding: 0 8px;\n  margin-right: 10px;\n  height: 32px;\n  border-bottom: 2px solid transparent;\n  border-radius: 4px 4px 0 0;\n  background: var(--zcat-tabs-primary-bg);\n}\n.zcat-tabs-primary .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-default);\n}\n/* Primary hover */\n.zcat-tabs-primary .zcat-tab-title:hover {\n  color: var(--zcat-tabs-primary-text-hover);\n  background: var(--zcat-tabs-primary-bg-hover);\n  border-bottom-color: var(--zcat-tabs-primary-border-hover);\n}\n.zcat-tabs-primary .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-hover);\n}\n/* Primary active */\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-primary-text-active);\n  font-weight: 600;\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n}\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-primary-icon-active);\n}\n.zcat-tabs-primary .zcat-tab-title.zcat-tab-active:hover {\n  background: transparent;\n  color: var(--zcat-tabs-primary-text-active);\n  border-bottom-color: var(--zcat-tabs-primary-border-active);\n}\n/* Primary body */\n.zcat-tabs-primary .zcat-tab-body {\n  border: 1px solid var(--zcat-tabs-primary-border-default);\n  border-top: none;\n  padding: 16px;\n}\n\n/* =========================================\n   SECONDARY VARIANT\n   ========================================= */\n.zcat-tabs-secondary .zcat-tab-head {\n  background: var(--zcat-tabs-secondary-bg-default);\n  border-radius: 6px;\n  padding: 4px;\n  gap: 4px;\n  border-bottom: none;\n}\n.zcat-tabs-secondary .zcat-tab-title {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-secondary-text-default);\n  padding: 0 8px;\n  height: 28px;\n  border-radius: 4px;\n  background: transparent;\n  border-bottom: none;\n}\n.zcat-tabs-secondary .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-default);\n}\n/* Secondary hover */\n.zcat-tabs-secondary .zcat-tab-title:hover {\n  color: var(--zcat-tabs-secondary-text-hover);\n  background: var(--zcat-tabs-secondary-bg-hover);\n}\n.zcat-tabs-secondary .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-hover);\n}\n/* Secondary active */\n.zcat-tabs-secondary .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-secondary-text-active);\n  background: var(--zcat-tabs-secondary-bg-active);\n  font-weight: 600;\n  box-shadow: var(--zcat-shadow-light-all);\n}\n.zcat-tabs-secondary .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-secondary-icon-active);\n}\n/* Secondary body */\n.zcat-tabs-secondary .zcat-tab-body {\n  padding: 16px 0;\n}\n\n/* =========================================\n   CODE VARIANT\n   ========================================= */\n.zcat-tabs-code .zcat-tab-head {\n  border-bottom: none;\n}\n.zcat-tabs-code .zcat-tab-title {\n  position: relative;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-tabs-code-text-default);\n  padding: 0 16px;\n  margin-left: 0;\n  height: 36px;\n  border: 1px solid var(--zcat-tabs-code-border-default);\n  border-bottom: none;\n  border-radius: 6px 6px 0 0;\n  background: var(--zcat-tabs-code-bg-default);\n  overflow: visible;\n}\n.zcat-tabs-code .zcat-tab-title:first-child {\n  margin-left: 0;\n}\n.zcat-tabs-code .zcat-tab-title .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-default);\n}\n/* Code tab slide (skewed right edge) */\n.zcat-tab-code-slide {\n  position: absolute;\n  top: -1px;\n  right: -10px;\n  width: 20px;\n  height: 36px;\n  transform: skew(26deg);\n  background: var(--zcat-tabs-code-bg-default);\n  border: 1px solid var(--zcat-tabs-code-border-default);\n  border-left: none;\n  border-radius: 0 4px 0 0;\n  z-index: 1;\n  border-bottom: none;\n}\n/* Code hover */\n.zcat-tabs-code .zcat-tab-title:hover {\n  color: var(--zcat-tabs-code-text-hover);\n}\n.zcat-tabs-code .zcat-tab-title:hover .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-hover);\n}\n/* Code active */\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active {\n  color: var(--zcat-tabs-code-text-active);\n  background: var(--zcat-tabs-code-bg-active);\n  font-weight: 600;\n  z-index: 2;\n}\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active .zcat-tab-code-slide {\n  background: var(--zcat-tabs-code-bg-active);\n}\n.zcat-tabs-code .zcat-tab-title.zcat-tab-active .zcat-tab-icon {\n  color: var(--zcat-tabs-code-icon-active);\n}\n/* Code body */\n.zcat-tabs-code .zcat-tab-body {\n  border: 1px solid var(--zcat-tabs-primary-border-default);\n  padding: 16px;\n  margin-top: -1px;\n}\n\n/* ===== SIZE VARIANTS ===== */\n.zcat-tabs-sm .zcat-tab-title {\n  height: 24px;\n  font-size: 13px;\n}\n.zcat-tabs-exsm .zcat-tab-title {\n  height: 20px;\n  font-size: 12px;\n}\n</style>";;
ZcatTab._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"tX","p":[0,3,0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[0,7],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0]},{"t":"s","p":[0,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[3,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1]}];;
ZcatTab._observedAttributes = ["self", "zcatProp", "activeTabId"];
export { ZcatTab };
ZcatTab.register("zcat-tab", {
  hash: "ZcatTab_2",
  refHash: "C_zcat-app_app_0"
});

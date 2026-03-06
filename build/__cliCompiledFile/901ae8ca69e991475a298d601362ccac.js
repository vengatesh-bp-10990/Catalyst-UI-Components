import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import './zcat-button.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatModal extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }),
      isOpen: prop('boolean', { default: false })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      openModal() {
        this.setData('isOpen', true);
        document.body.style.overflow = 'hidden';
      },
      closeModal() {
        this.setData('isOpen', false);
        document.body.style.overflow = '';
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onClose) {
          self.executeMethod(zcatProp.onClose, zcatProp);
        }
      },
      onOverlayClick(event) {
        if (event.target.classList.contains('zcat-modal-overlay')) {
          let zcatProp = this.getData('zcatProp');
          if (zcatProp.closeOnOverlay !== false) {
            this.exec('closeModal');
          }
        }
      },
      onFooterBtnClick(btn) {
        let self = this.getData('self');
        if (self && btn && btn.callback && btn.callback.name) {
          self.executeMethod(btn.callback.name, btn, this.getData('zcatProp'));
        }
        if (btn.closeOnClick !== false) {
          this.exec('closeModal');
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          let zcatProp = this.getData('zcatProp');
          if (zcatProp && zcatProp.open) {
            this.setData('isOpen', true);
            document.body.style.overflow = 'hidden';
          }
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatModal._template = "<template tag-name=\"zcat-modal\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{isOpen}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-modal-overlay {{expHandlers(expHandlers(zcatProp.size,'===','small'),'?:','zcat-modal-sm',expHandlers(expHandlers(zcatProp.size,'===','large'),'?:','zcat-modal-lg',expHandlers(expHandlers(zcatProp.size,'===','full'),'?:','zcat-modal-full','')))}} {{expHandlers(zcatProp.classCss,'||','')}}\" onclick=\"{{action('onOverlayClick',event)}}\"> <div class=\"zcat-modal-container\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\"> <!-- Header --> <div class=\"zcat-modal-header\"> <div class=\"zcat-modal-header-left\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.header,'&amp;&amp;',zcatProp.header.backArrow)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-button class=\"zcat-modal-back\" onclick=\"{{action('closeModal')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"arrow-left\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> </template></template> <div class=\"zcat-modal-header-text\"> <h2 class=\"zcat-modal-title\">{{expHandlers(zcatProp.header,'?:',zcatProp.header.title,'Modal')}}</h2> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.header,'&amp;&amp;',zcatProp.header.desc)}}\" is=\"case\" lc-id=\"lc_id_0\"> <p class=\"zcat-modal-desc\">{{zcatProp.header.desc}}</p> </template></template> </div> </div> <lyte-button class=\"zcat-modal-close\" onclick=\"{{action('closeModal')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"close\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> </div> <!-- Body --> <div class=\"zcat-modal-body\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.body,'&amp;&amp;',zcatProp.body.content)}}\" is=\"case\" lc-id=\"lc_id_0\"> {{zcatProp.body.content}} </template></template> </div> <!-- Footer --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-modal-footer\"> <div class=\"zcat-modal-footer-left\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer.left}}\" is=\"case\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.footer.left}}\" item=\"btn\" index=\"index\" is=\"for\" _new=\"true\"><zcat-button self=\"{{self}}\" zcat-prop=\"{{btn}}\"></zcat-button></template> </template></template> </div> <div class=\"zcat-modal-footer-right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.footer.right}}\" is=\"case\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.footer.right}}\" item=\"btn\" index=\"index\" is=\"for\" _new=\"true\"><zcat-button self=\"{{self}}\" zcat-prop=\"{{btn}}\"></zcat-button></template> </template></template> </div> </div> </template></template> </div> </div> </template></template> </template><style>/* ==============================\n   ZCAT Modal Component\n   ============================== */\n\nzcat-modal * {\n  box-sizing: border-box;\n}\nzcat-modal p {\n  margin: 0;\n}\n\n/* --- Overlay --- */\n.zcat-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--zcat-popup-bg-blur);\n  animation: zcatModalFadeIn 0.2s ease;\n}\n\n@keyframes zcatModalFadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n/* --- Container --- */\n.zcat-modal-container {\n  display: flex;\n  flex-direction: column;\n  width: 520px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 48px);\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 12px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  animation: zcatModalSlideIn 0.2s ease;\n  overflow: hidden;\n}\n\n@keyframes zcatModalSlideIn {\n  from { opacity: 0; transform: translateY(16px) scale(0.98); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n/* Size variants */\n.zcat-modal-sm .zcat-modal-container { width: 400px; }\n.zcat-modal-lg .zcat-modal-container { width: 720px; }\n.zcat-modal-full .zcat-modal-container {\n  width: calc(100vw - 48px);\n  height: calc(100vh - 48px);\n  max-width: none;\n  max-height: none;\n}\n\n/* --- Header --- */\n.zcat-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px 12px;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.zcat-modal-header-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.zcat-modal-header-text {\n  flex: 1;\n  min-width: 0;\n}\n.zcat-modal-title {\n  font: 600 var(--zcat-font-18-22) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  margin: 0;\n}\n.zcat-modal-desc {\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-grey);\n  margin-top: 4px;\n}\n.zcat-modal-back {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: var(--zcat-body-text-primary);\n  transition: background 0.15s;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.zcat-modal-back:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n\n/* --- Close button --- */\n.zcat-modal-close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: var(--zcat-body-text-grey);\n  transition: background 0.15s, color 0.15s;\n  flex-shrink: 0;\n}\n.zcat-modal-close:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Body --- */\n.zcat-modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 24px 20px;\n  font: 400 var(--zcat-font-14-20) var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Footer --- */\n.zcat-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 24px 20px;\n  gap: 12px;\n  flex-shrink: 0;\n  border-top: 1px solid var(--zcat-popup-border);\n}\n.zcat-modal-footer-left,\n.zcat-modal-footer-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n</style>";;
ZcatModal._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}},"cn":"lc_id_0"},{"t":"s","p":[1,1,3,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4],"cn":"lc_id_0"},{"t":"tX","p":[1,1,3,1,3,1,0],"cn":"lc_id_0"},{"t":"s","p":[1,1,3,1,3,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[1,1,3,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,3,3,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"cD","p":[1,1,3,3],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,7,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,1,11],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"cD","p":[0],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[5,3,2,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatModal._observedAttributes = ["self", "zcatProp", "isOpen"];
export { ZcatModal };

ZcatModal.register("zcat-modal", {
  hash: "ZcatModal_2",
  refHash: "C_zcat-app_app_0"
});

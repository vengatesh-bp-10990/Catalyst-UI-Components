import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-button.js';
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatPopover extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }),
      isOpen: prop('boolean', { default: false }),
      searchQuery: prop('string', { default: '' }),
      activeNested: prop('number', { default: -1 })
    }), arg1);
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function(e) {
      let node = comp.$node;
      if (node && !node.contains(e.target) && comp.getData('isOpen')) {
        comp.setData('isOpen', false);
        comp.setData('activeNested', -1);
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      togglePopover() {
        this.setData('isOpen', !this.getData('isOpen'));
        if (!this.getData('isOpen')) {
          this.setData('activeNested', -1);
          this.setData('searchQuery', '');
        }
      },
      selectItem(item) {
        if (item.disabled) return;
        if (item.nestedPopover) return; // handled by hover

        this.setData('isOpen', false);
        this.setData('activeNested', -1);
        this.setData('searchQuery', '');

        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item, zcatProp);
        }
      },
      showNested(index) {
        this.setData('activeNested', index);
      },
      hideNested() {
        this.setData('activeNested', -1);
      },
      onSearchInput(event) {
        this.setData('searchQuery', event.target.value);
      },
      onCreateNew() {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onCreateNew) {
          self.executeMethod(zcatProp.onCreateNew, zcatProp);
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

ZcatPopover._template = "<template tag-name=\"zcat-popover\"> <div class=\"zcat-popover-wrapper {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Trigger --> <div class=\"zcat-popover-trigger\" onclick=\"{{action('togglePopover')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.trigger}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{zcatProp.trigger}}\"></zcat-button> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.trigger,'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <button class=\"zcat-popover-default-trigger\"> <zcat-icon name=\"more-vertical\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </button> </template></template> </div> <!-- Popover Menu --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{isOpen}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-menu {{expHandlers(expHandlers(zcatProp.position,'===','top'),'?:','zcat-popover-top',expHandlers(expHandlers(zcatProp.position,'===','left'),'?:','zcat-popover-left',expHandlers(expHandlers(zcatProp.position,'===','right'),'?:','zcat-popover-right','zcat-popover-bottom')))}}\" style=\"{{expHandlers(zcatProp.width,'?:',expHandlers('width:','+',zcatProp.width),'')}}\"> <!-- Search --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.isSearchable}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-search\"> <zcat-icon name=\"search\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\"></zcat-icon> <input type=\"text\" class=\"zcat-popover-search-input\" placeholder=\"Search...\" value=\"{{searchQuery}}\" oninput=\"{{action('onSearchInput',event)}}\"> </div> </template></template> <!-- Heading --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.heading}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-heading\">{{zcatProp.heading}}</div> </template></template> <!-- Options --> <div class=\"zcat-popover-options\"> <template items=\"{{zcatProp.options}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"zcat-popover-item {{expHandlers(item.disabled,'?:','zcat-popover-item-disabled','')}} {{expHandlers(item.selected,'?:','zcat-popover-item-selected','')}} {{expHandlers(item.nestedPopover,'?:','zcat-popover-item-nested','')}}\" onclick=\"{{action('selectItem',item)}}\" onmouseenter=\"{{action('showNested',index)}}\" onmouseleave=\"{{action('hideNested')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{item.icon}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-popover-item-icon\"></zcat-icon> </template></template> <span class=\"zcat-popover-item-label\">{{item.name}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item.nestedPopover}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"chevron-right\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\" class=\"zcat-popover-item-arrow\"></zcat-icon> </template></template> <!-- Nested submenu --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.nestedPopover,'&amp;&amp;',expHandlers(activeNested,'===',index))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-submenu\"> <template items=\"{{item.options}}\" item=\"sub\" index=\"subIdx\" is=\"for\" _new=\"true\"><div class=\"zcat-popover-item {{expHandlers(sub.disabled,'?:','zcat-popover-item-disabled','')}}\" onclick=\"{{action('selectItem',sub)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{sub.icon}}\" is=\"case\" lc-id=\"lc_id_0\"> <zcat-icon name=\"{{sub.icon}}\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"zcat-popover-item-icon\"></zcat-icon> </template></template> <span class=\"zcat-popover-item-label\">{{sub.name}}</span> </div></template> </div> </template></template> </div></template> </div> <!-- Create New --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.createNewBtn}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-popover-create\" onclick=\"{{action('onCreateNew')}}\"> <zcat-icon name=\"plus\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> <span>Create New</span> </div> </template></template> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Popover Component\n   ============================== */\n\nzcat-popover * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-popover-wrapper {\n  position: relative;\n  display: inline-flex;\n}\n\n/* --- Default trigger --- */\n.zcat-popover-default-trigger {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: 1px solid var(--zcat-body-border);\n  background: var(--zcat-popup-bg);\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--zcat-body-text-secondary);\n  transition: background 0.15s, border-color 0.15s;\n}\n.zcat-popover-default-trigger:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n  color: var(--zcat-body-text-primary);\n}\n\n/* --- Menu panel --- */\n.zcat-popover-menu {\n  position: absolute;\n  z-index: 500;\n  min-width: 180px;\n  max-width: 320px;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 8px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  padding: 4px;\n  animation: zcatPopoverFadeIn 0.15s ease;\n}\n\n@keyframes zcatPopoverFadeIn {\n  from { opacity: 0; transform: translateY(4px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Positions */\n.zcat-popover-bottom { top: calc(100% + 4px); left: 0; }\n.zcat-popover-top { bottom: calc(100% + 4px); left: 0; }\n.zcat-popover-left { right: calc(100% + 4px); top: 0; }\n.zcat-popover-right { left: calc(100% + 4px); top: 0; }\n\n/* --- Search --- */\n.zcat-popover-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--zcat-popup-border);\n  margin-bottom: 4px;\n  color: var(--zcat-body-text-grey);\n}\n.zcat-popover-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n}\n.zcat-popover-search-input::placeholder {\n  color: var(--zcat-body-text-grey);\n}\n\n/* --- Heading --- */\n.zcat-popover-heading {\n  font: 500 11px/14px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-grey);\n  padding: 6px 8px 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n/* --- Options list --- */\n.zcat-popover-options {\n  max-height: 240px;\n  overflow-y: auto;\n}\n\n/* --- Menu item --- */\n.zcat-popover-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-body-text-primary);\n  transition: background 0.12s;\n  position: relative;\n}\n.zcat-popover-item:hover {\n  background: var(--zcat-btn-grey-bg-hover);\n}\n.zcat-popover-item-selected {\n  color: var(--zcat-btn-fill-bg-primary-default);\n  font-weight: 500;\n}\n.zcat-popover-item-selected .zcat-popover-item-icon {\n  color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-popover-item-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: default;\n}\n.zcat-popover-item-icon {\n  flex-shrink: 0;\n  color: var(--zcat-body-text-grey);\n}\n.zcat-popover-item-label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zcat-popover-item-arrow {\n  flex-shrink: 0;\n  margin-left: auto;\n  opacity: 0.5;\n}\n\n/* --- Nested submenu --- */\n.zcat-popover-submenu {\n  position: absolute;\n  left: calc(100% + 4px);\n  top: 0;\n  min-width: 160px;\n  background: var(--zcat-popup-bg);\n  border: 1px solid var(--zcat-popup-border);\n  border-radius: 8px;\n  box-shadow: var(--zcat-shadow-dark-all);\n  padding: 4px;\n  z-index: 501;\n}\n\n/* --- Create New button --- */\n.zcat-popover-create {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px;\n  border-top: 1px solid var(--zcat-popup-border);\n  margin-top: 4px;\n  cursor: pointer;\n  font: 500 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-btn-fill-bg-primary-default);\n  border-radius: 0 0 4px 4px;\n  transition: background 0.12s;\n}\n.zcat-popover-create:hover {\n  background: var(--zcat-btn-outline-bg-primaryHover);\n}\n</style>";;
ZcatPopover._dynamicNodes = [{"t":"a","p":[1]},{"t":"a","p":[1,3]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["zcatProp.width","'?:'",null,"''"]}}},"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,11,1],"cn":"lc_id_0"},{"t":"f","p":[1,11,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,3,0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[0,9],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"t":"tX","p":[0,3,0]}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatPopover._observedAttributes = ["self", "zcatProp", "isOpen", "searchQuery", "activeNested"];
export { ZcatPopover };
ZcatPopover.register("zcat-popover", {
  hash: "ZcatPopover_2",
  refHash: "C_zcat-app_app_0"
});

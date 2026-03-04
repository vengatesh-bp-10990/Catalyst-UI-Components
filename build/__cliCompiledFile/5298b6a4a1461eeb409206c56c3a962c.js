import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatAvatar extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      _initial: prop('string', { default: '?' }),
      _sizeClass: prop('string', { default: 'zcat-avatar-md' })
    }), arg1);
  }

  init() {
    this._computeAvatar();
  }

  _computeAvatar() {
    let zcatProp = this.getData('zcatProp');
    // Compute initial
    let initial = '?';
    if (zcatProp && zcatProp.name && zcatProp.name.length > 0) {
      let parts = zcatProp.name.trim().split(/\s+/);
      if (parts.length >= 2) {
        initial = (parts[0][0] + parts[1][0]).toUpperCase();
      } else {
        initial = parts[0][0].toUpperCase();
      }
    }
    this.setData('_initial', initial);
    // Compute size class
    let size = (zcatProp && zcatProp.size) || '';
    let sizeClass = 'zcat-avatar-md';
    if (size === 'small') sizeClass = 'zcat-avatar-sm';
    else if (size === 'large') sizeClass = 'zcat-avatar-lg';
    else if (size === 'extra-large') sizeClass = 'zcat-avatar-xl';
    this.setData('_sizeClass', sizeClass);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      onAvatarClick() {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, zcatProp);
        }
      }
    }), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._computeAvatar();
        }
      }
    }), arg1);
  }

  _() {
    _;
  }
}

ZcatAvatar._template = "<template tag-name=\"zcat-avatar\"> <div class=\"zcat-avatar {{_sizeClass}} {{expHandlers(zcatProp.disabled,'?:','zcat-avatar-disabled','')}} {{expHandlers(zcatProp.classCss,'||','')}}\" onclick=\"{{action('onAvatarClick')}}\"> <!-- Image avatar --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','img')}}\" is=\"case\" lc-id=\"lc_id_0\"> <img class=\"zcat-avatar-img\" src=\"{{zcatProp.src}}\" alt=\"{{expHandlers(zcatProp.name,'||','Avatar')}}\"> </template></template> <!-- Letter avatar --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','letter')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-avatar-letter\">{{_initial}}</span> </template></template> <!-- Icon avatar (default) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','icon')}}\" is=\"case\" lc-id=\"lc_id_0\"> <svg class=\"zcat-avatar-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> </svg> </template></template> <!-- Status badge --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.status}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-avatar-status zcat-avatar-status-{{zcatProp.status}}\"></span> </template></template> </div> </template><style>/* ==============================\n   ZCAT Avatar Component\n   ============================== */\n\nzcat-avatar * {\n  box-sizing: border-box;\n}\n\n/* --- Base --- */\n.zcat-avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--zcat-avatar-bg-default);\n  border: 1px solid var(--zcat-avatar-border-default);\n  color: var(--zcat-avatar-icon-default);\n  overflow: hidden;\n  flex-shrink: 0;\n  position: relative;\n  cursor: default;\n  user-select: none;\n  font-family: var(--zcat-font-family-primary);\n}\n\n/* --- Sizes --- */\n.zcat-avatar-sm {\n  width: 24px;\n  height: 24px;\n}\n.zcat-avatar-md {\n  width: 32px;\n  height: 32px;\n}\n.zcat-avatar-lg {\n  width: 40px;\n  height: 40px;\n}\n.zcat-avatar-xl {\n  width: 56px;\n  height: 56px;\n}\n\n/* --- Image --- */\n.zcat-avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n/* --- Letter --- */\n.zcat-avatar-letter {\n  font-weight: 600;\n  color: var(--zcat-avatar-text-default);\n  line-height: 1;\n}\n.zcat-avatar-sm .zcat-avatar-letter { font-size: 10px; }\n.zcat-avatar-md .zcat-avatar-letter { font-size: 13px; }\n.zcat-avatar-lg .zcat-avatar-letter { font-size: 16px; }\n.zcat-avatar-xl .zcat-avatar-letter { font-size: 22px; }\n\n/* --- Icon (SVG) --- */\n.zcat-avatar-icon {\n  color: var(--zcat-avatar-icon-default);\n}\n.zcat-avatar-sm .zcat-avatar-icon { width: 14px; height: 14px; }\n.zcat-avatar-md .zcat-avatar-icon { width: 18px; height: 18px; }\n.zcat-avatar-lg .zcat-avatar-icon { width: 22px; height: 22px; }\n.zcat-avatar-xl .zcat-avatar-icon { width: 30px; height: 30px; }\n\n/* --- Status badge --- */\n.zcat-avatar-status {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid var(--zcat-popup-bg);\n}\n.zcat-avatar-sm .zcat-avatar-status { width: 6px; height: 6px; border-width: 1.5px; }\n.zcat-avatar-xl .zcat-avatar-status { width: 12px; height: 12px; border-width: 2px; }\n\n.zcat-avatar-status-online { background: var(--zcat-green-1); }\n.zcat-avatar-status-offline { background: var(--zcat-dark-4); }\n.zcat-avatar-status-busy { background: var(--zcat-red-1); }\n.zcat-avatar-status-away { background: var(--zcat-orange-1); }\n\n/* --- Disabled --- */\n.zcat-avatar-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n</style>";;
ZcatAvatar._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[2]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[1]},{"t":"s","p":[1,11],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0]},{"t":"s","p":[1,15],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}];;
ZcatAvatar._observedAttributes = ["self", "zcatProp", "_initial", "_sizeClass"];
export { ZcatAvatar };

ZcatAvatar.register("zcat-avatar", {
  hash: "ZcatAvatar_2",
  refHash: "C_zcat-app_app_0"
});

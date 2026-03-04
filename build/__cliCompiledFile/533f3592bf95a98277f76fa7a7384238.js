import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatLoader extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} })
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  static observers(arg1) {
    return Object.assign(super.observers({}), arg1);
  }

  _() {
    _;
  }
}

ZcatLoader._template = "<template tag-name=\"zcat-loader\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.type,'===','content')}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-skeleton-loader\"> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col zcat-skeleton-float-right\"></div> </div> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> </div> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> </div> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> </div> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> </div> <div class=\"zcat-skeleton-row\"> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> <div class=\"zcat-skeleton-col\"></div> </div> </div></template><template case=\"{{expHandlers(zcatProp.type,'===','spin')}}\" is=\"case\" lc-id=\"lc_id_1\"><div class=\"zcat-spin-loader\"></div></template><template default=\"\"><div class=\"zcat-progress-loader\"></div></template></template> </template><style>/* ==============================\n   ZCAT Loader Component\n   3 types: content (skeleton), spin, progress\n   ============================== */\n\nzcat-loader {\n  display: block;\n  width: 100%;\n}\n\nzcat-loader * {\n  box-sizing: border-box;\n}\n\n/* ============================\n   SKELETON / CONTENT LOADER\n   ============================ */\n.zcat-skeleton-loader {\n  width: 100%;\n  height: 100%;\n}\n.zcat-skeleton-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.zcat-skeleton-col {\n  animation: zcatShimmer 1.25s infinite linear forwards;\n  background: linear-gradient(\n    to right,\n    var(--zcat-loader-content-primary) 8%,\n    var(--zcat-loader-content-secondary) 18%,\n    var(--zcat-loader-content-primary) 33%\n  );\n  background-size: 800px 104px;\n  position: relative;\n  height: 9px;\n  width: 23%;\n  margin: 0 1%;\n  border-radius: 50px;\n}\n.zcat-skeleton-col:first-child {\n  margin-left: 0;\n}\n.zcat-skeleton-col:last-child {\n  margin-right: 0;\n}\n.zcat-skeleton-float-right {\n  margin-left: auto;\n}\n\n@keyframes zcatShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n/* ============================\n   SPIN LOADER\n   ============================ */\n.zcat-spin-loader {\n  width: 16px;\n  aspect-ratio: 1;\n  display: grid;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      0deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 50%, transparent) 30%,\n      #0000 0 70%,\n      var(--zcat-loader-round-primary) 0\n    ) 50%/8% 100%,\n    linear-gradient(\n      90deg,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 25%, transparent) 30%,\n      #0000 0 70%,\n      color-mix(in srgb, var(--zcat-loader-round-primary) 75%, transparent) 0\n    ) 50%/100% 8%;\n  background-repeat: no-repeat;\n  animation: zcatSpin 1s infinite steps(12);\n}\n.zcat-spin-loader::before,\n.zcat-spin-loader::after {\n  content: \"\";\n  grid-area: 1/1;\n  border-radius: 50%;\n  background: inherit;\n  opacity: 0.915;\n  transform: rotate(30deg);\n}\n.zcat-spin-loader::after {\n  opacity: 0.83;\n  transform: rotate(60deg);\n}\n\n@keyframes zcatSpin {\n  100% { transform: rotate(1turn); }\n}\n\n/* ============================\n   PROGRESS LOADER\n   ============================ */\n.zcat-progress-loader {\n  height: 4px;\n  width: 100%;\n  --c: no-repeat linear-gradient(var(--zcat-loader-progress-primary) 0 0);\n  background: var(--c), var(--c), var(--zcat-loader-progress-secondary);\n  background-size: 60% 100%;\n  animation: zcatProgress 3s infinite;\n  border-radius: 40px;\n}\n\n@keyframes zcatProgress {\n  0%   { background-position: -150% 0, -150% 0; }\n  66%  { background-position: 250% 0, -150% 0; }\n  100% { background-position: 250% 0, 250% 0; }\n}\n</style>";;
ZcatLoader._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{},"lc_id_1":{},"default":{}},"hd":true,"co":["lc_id_0","lc_id_1"]}];;
ZcatLoader._observedAttributes = ["self", "zcatProp"];
export { ZcatLoader };
ZcatLoader.register("zcat-loader", {
  hash: "ZcatLoader_2",
  refHash: "C_zcat-app_app_0"
});

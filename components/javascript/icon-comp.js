"use strict";
(self["webpackChunkzcat_app"] = self["webpackChunkzcat_app"] || []).push([["components/javascript/icon-comp"],{

/***/ 37817974:
/*!********************************************!*\
  !*** ./components/javascript/icon-comp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComp": () => (/* binding */ IconComp)
/* harmony export */ });
/* harmony import */ var _zcat_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zcat-icon.js */ 122993);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 93132498);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 60469700);





var allIcons = [
    'plus','minus','arrow-right','arrow-left','arrow-up','arrow-down',
    'arrow-forward','arrow-backward','arrow-upward','arrow-downward',
    'alert-triangle','alert-circle','loading-sun','three-dots','tick',
    'external-link','rocket','info','close','search','question-round',
    'home','file','eye-open','eye-close','upload-cloud','download-cloud',
    'folder','user','star','nine-dots','refresh','edit','delete','copy',
    'globe','clock','tick-circle','settings','notification','edit-pencil',
    'moon','sun','calendar','logout','phone','expand-collapse','filter',
    'link','help','image','alert-success','alert-info','alert-danger','alert-warning'
];

class IconComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    init() {
        var iconList = [];
        for (var i = 0; i < allIcons.length; i++) {
            iconList.push({ name: allIcons[i], hidden: false });
        }
        this.setData('iconList', iconList);
        this.setData('filteredCount', allIcons.length);
        this.constructCodeSnippet();
    }

    didConnect() {
        this._bindEvents();
    }

    constructCodeSnippet() {
        // sLyte tab
        var slyte_code = '<zcat-icon\n  name="icon-name"\n  width="16"\n  height="16"\n  stroke="var(--token)"\n  stroke-width="1.3"\n></zcat-icon>';

        // JS tab — props table
        var js_code = '// Props\n// name       : string  (default: \'\')\n// width      : string  (default: \'14\')\n// height     : string  (default: \'14\')\n// stroke     : string  (default: \'\')\n// strokeWidth: string  (default: \'1.3\')\n// fill       : string  (default: \'\')';

        // sLyte New tab
        var newSlyte_code = '<zcat-icon\n  name="icon-name"\n  zcat-prop-width="16"\n  zcat-prop-height="16"\n  zcat-prop-stroke="var(--token)"\n  zcat-prop-stroke-width="1.3"\n></zcat-icon>';

        // HTML tab
        var html_code = '<!-- Using the zcat-icon component -->\n<zcat-icon name="search" width="16" height="16"\n  stroke="currentColor" stroke-width="1.3">\n</zcat-icon>\n\n<!-- Available Icons (' + allIcons.length + ') -->\n' + allIcons.join(', ');

        // CSS tab
        var css_code = '/* Icon component has no required CSS.\n   Use stroke/fill props or CSS tokens to control color. */\n\nzcat-icon svg {\n  display: block;\n}';

        this.setData('slyteCodeSnippet.code', slyte_code);
        this.setData('jsCodeSnippet.code', js_code);
        this.setData('newSlyteCodeSnippet.code', newSlyte_code);
        this.setData('htmlCodeSnippet.code', html_code);
        this.setData('cssCodeSnippet.code', css_code);
    }

    _bindEvents() {
        var comp = this;
        var node = this.$node;

        // Search
        var searchInput = node.querySelector('[data-action="searchIcons"]');
        if (searchInput) {
            searchInput.addEventListener('input', function (e) {
                comp._filterIcons(e.target.value.toLowerCase().trim());
            });
        }

        // Icon Size
        var sizeSelect = node.querySelector('[data-action="changeIconSize"]');
        if (sizeSelect) {
            sizeSelect.addEventListener('change', function (e) {
                comp.setData('iconSize', e.target.value);
            });
        }

        // Stroke Width — range slider
        var strokeSlider = node.querySelector('[data-action="changeStrokeWidth"]');
        if (strokeSlider) {
            strokeSlider.addEventListener('input', function (e) {
                comp.setData('iconStrokeWidth', e.target.value);
            });
        }

        // Color picker
        var colorPicker = node.querySelector('[data-action="changeIconColor"]');
        if (colorPicker) {
            colorPicker.addEventListener('input', function (e) {
                comp.setData('iconColor', e.target.value);
                var textInput = node.querySelector('[data-action="changeIconColorText"]');
                if (textInput) { textInput.value = e.target.value; }
            });
        }

        // Color text input
        var colorText = node.querySelector('[data-action="changeIconColorText"]');
        if (colorText) {
            colorText.addEventListener('change', function (e) {
                comp.setData('iconColor', e.target.value);
                if (colorPicker) { colorPicker.value = e.target.value; }
            });
        }
    }

    _filterIcons(query) {
        var iconList = this.getData('iconList');
        var count = 0;
        for (var i = 0; i < iconList.length; i++) {
            var hidden = query ? iconList[i].name.indexOf(query) === -1 : false;
            this.$app.objectUtils(iconList[i], 'add', 'hidden', hidden);
            if (!hidden) { count++; }
        }
        this.setData('filteredCount', count);
    }

    data(arg1) {
        return Object.assign(super.data({
            self: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: this }),
            iconList: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('array', { default: [] }),
            filteredCount: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('number', { default: 0 }),
            iconSize: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '16' }),
            iconStrokeWidth: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '1.3' }),
            iconColor: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '#555555' }),
            showCopied: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('boolean', { default: false }),
            copiedText: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: '' }),
            activeTab: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('string', { default: 'slyte' }),
            slyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: { code: '' } }),
            jsCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: { code: '' } }),
            newSlyteCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: { code: '' } }),
            htmlCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: { code: '' } }),
            cssCodeSnippet: (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_2__.prop)('object', { default: { code: '' } })
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({}), arg1);
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            showSlyteTab() { this.setData('activeTab', 'slyte'); },
            showJsTab() { this.setData('activeTab', 'js'); },
            showNewSlyteTab() { this.setData('activeTab', 'newslyte'); },
            showHtmlTab() { this.setData('activeTab', 'html'); },
            showCssTab() { this.setData('activeTab', 'css'); },
            copyCode() {
                var tab = this.getData('activeTab');
                var code;
                if (tab === 'slyte') { code = this.getData('slyteCodeSnippet.code'); }
                else if (tab === 'js') { code = this.getData('jsCodeSnippet.code'); }
                else if (tab === 'newslyte') { code = this.getData('newSlyteCodeSnippet.code'); }
                else if (tab === 'html') { code = this.getData('htmlCodeSnippet.code'); }
                else if (tab === 'css') { code = this.getData('cssCodeSnippet.code'); }
                if (navigator.clipboard) { navigator.clipboard.writeText(code); }
            },
            copyIconTag(iconItem) {
                var name = iconItem.name;
                var tag = '<zcat-icon name="' + name + '" width="16" height="16" stroke="currentColor" stroke-width="1.3"></zcat-icon>';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(tag);
                }
                this.setData('copiedText', 'Copied: ' + name);
                this.setData('showCopied', true);
                var comp = this;
                setTimeout(function () {
                    comp.setData('showCopied', false);
                }, 1800);
            }
        }), arg1);
    }

    static observers(arg1) { return Object.assign(super.observers({}), arg1); }

    _() {
        _;
    }
}

IconComp._template = "<template tag-name=\"icon-comp\"> <div class=\"zcat-page-wrapper\"> <!-- Header --> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Icon</h1> <p class=\"zcat-page-desc\">A unified icon library for the ZCAT Design System. Click any icon to copy its component tag.</p> </div> <!-- Body --> <div class=\"zcat-page-body\" style=\"flex-direction:row; gap:24px;\"> <!-- Left: Icon Grid --> <div class=\"zcat-page-left\" style=\"flex:1;\"> <!-- Search --> <div class=\"zcat-icon-search-wrap\"> <zcat-icon name=\"search\" width=\"14\" height=\"14\" stroke=\"var(--zcat-text-tertiary)\"></zcat-icon> <input type=\"text\" class=\"zcat-icon-search-input\" placeholder=\"Search icons...\" data-action=\"searchIcons\"> </div> <!-- Icon Count --> <div class=\"zcat-icon-meta\"> <span class=\"zcat-icon-meta-count\">{{filteredCount}} icons</span> </div> <!-- Icon Grid --> <div class=\"zcat-icon-grid\"> <template items=\"{{iconList}}\" item=\"iconItem\" index=\"iconIdx\" is=\"for\" _new=\"true\"> <div class=\"zcat-icon-card {{expHandlers(iconItem.hidden,'?:','zcat-icon-hidden','')}}\" onclick=\"{{action('copyIconTag',iconItem)}}\" title=\"Click to copy: {{iconItem.name}}\"> <div class=\"zcat-icon-card-preview\"> <zcat-icon name=\"{{iconItem.name}}\" width=\"{{iconSize}}\" height=\"{{iconSize}}\" stroke=\"{{iconColor}}\" stroke-width=\"{{iconStrokeWidth}}\"></zcat-icon> </div> <span class=\"zcat-icon-card-label\">{{iconItem.name}}</span> </div> </template> </div> <!-- Code Tabs --> <div class=\"zcat-code-tabs\" style=\"margin-top:24px;\"> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','slyte'),'?:','active','')}}\" onclick=\"{{action('showSlyteTab')}}\">sLyte</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','js'),'?:','active','')}}\" onclick=\"{{action('showJsTab')}}\">JS</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','newslyte'),'?:','active','')}}\" onclick=\"{{action('showNewSlyteTab')}}\">sLyte New</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','html'),'?:','active','')}}\" onclick=\"{{action('showHtmlTab')}}\">HTML</span> <span class=\"zcat-code-tab {{expHandlers(expHandlers(activeTab,'===','css'),'?:','active','')}}\" onclick=\"{{action('showCssTab')}}\">CSS</span> </div> <div class=\"zcat-code-panel\"> <div class=\"zcat-code-lines\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','slyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{slyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','js')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{jsCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','newslyte')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{newSlyteCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','html')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{htmlCodeSnippet.code}}</pre></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(activeTab,'===','css')}}\" is=\"case\" lc-id=\"lc_id_0\"><pre>{{cssCodeSnippet.code}}</pre></template></template> </div> <span class=\"zcat-code-copy\" onclick=\"{{action('copyCode')}}\" title=\"Copy code\"> <zcat-icon name=\"copy\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"1.3\"></zcat-icon> </span> </div> <!-- Copied Toast --> <div class=\"zcat-icon-copied-toast {{expHandlers(showCopied,'?:','zcat-icon-copied-show','')}}\"> <zcat-icon name=\"tick-circle\" width=\"14\" height=\"14\" stroke=\"var(--zcat-alerts-success-text-primary)\"></zcat-icon> <span>{{copiedText}}</span> </div> </div> <!-- Right: Customise --> <div class=\"zcat-page-right\"> <div class=\"zcat-custom-header\"> <h3 class=\"zcat-custom-title\">Customise</h3> </div> <div class=\"zcat-custom-body\"> <!-- Icon Size --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Size</span> <select data-action=\"changeIconSize\" class=\"zcat-custom-select\"> <option value=\"12\">12px</option> <option value=\"14\">14px</option> <option value=\"16\" selected=\"\">16px</option> <option value=\"20\">20px</option> <option value=\"24\">24px</option> <option value=\"32\">32px</option> <option value=\"48\">48px</option> </select> </div> <!-- Stroke Width --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Stroke Width</span> <div class=\"zcat-icon-slider-row\"> <input type=\"range\" class=\"zcat-icon-slider\" data-action=\"changeStrokeWidth\" min=\"0.5\" max=\"3\" step=\"0.1\" value=\"1.3\"> <span class=\"zcat-icon-slider-value\">{{iconStrokeWidth}}</span> </div> </div> <!-- Static Icon Color --> <div class=\"zcat-custom-row\"> <span class=\"zcat-custom-label\">Icon Color</span> <div class=\"zcat-icon-color-row\"> <input type=\"color\" class=\"zcat-icon-color-picker\" data-action=\"changeIconColor\" value=\"#555555\"> <input type=\"text\" class=\"zcat-icon-color-text\" data-action=\"changeIconColorText\" value=\"#555555\" placeholder=\"#555555\"> </div> </div> </div> </div> </div> </div> </template><style>/* icon-comp doc page styles */\n\n/* Search */\n.zcat-icon-search-wrap {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    border-radius: 8px;\n    border: 1px solid var(--zcat-border-default);\n    background: var(--zcat-surface-primary);\n    margin-bottom: 12px;\n}\n.zcat-icon-search-input {\n    flex: 1;\n    border: none;\n    outline: none;\n    background: transparent;\n    font-size: 13px;\n    color: var(--zcat-text-primary);\n    font-family: inherit;\n}\n.zcat-icon-search-input::placeholder {\n    color: var(--zcat-text-tertiary);\n}\n\n/* Meta */\n.zcat-icon-meta {\n    margin-bottom: 16px;\n}\n.zcat-icon-meta-count {\n    font-size: 12px;\n    color: var(--zcat-text-tertiary);\n    font-weight: 500;\n}\n\n/* Grid */\n.zcat-icon-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));\n    gap: 8px;\n}\n.zcat-icon-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    padding: 14px 8px 10px;\n    border-radius: 8px;\n    border: 1px solid var(--zcat-border-default);\n    background: var(--zcat-surface-primary);\n    cursor: pointer;\n    transition: all 0.15s ease;\n    user-select: none;\n}\n.zcat-icon-card:hover {\n    border-color: var(--zcat-border-active);\n    background: var(--zcat-surface-hover);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n}\n.zcat-icon-card:active {\n    transform: scale(0.96);\n}\n.zcat-icon-card-preview {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 32px;\n}\n.zcat-icon-card-label {\n    font-size: 10px;\n    color: var(--zcat-text-secondary);\n    text-align: center;\n    word-break: break-word;\n    line-height: 1.3;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.zcat-icon-hidden {\n    display: none !important;\n}\n\n/* Copied Toast */\n.zcat-icon-copied-toast {\n    position: fixed;\n    bottom: 24px;\n    left: 50%;\n    transform: translateX(-50%) translateY(20px);\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 16px;\n    border-radius: 8px;\n    background: var(--zcat-surface-primary);\n    border: 1px solid var(--zcat-alerts-success-border);\n    box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--zcat-alerts-success-text-primary);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.25s ease;\n    z-index: 9999;\n}\n.zcat-icon-copied-show {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n}\n\n/* Color row */\n.zcat-icon-color-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n.zcat-icon-color-picker {\n    width: 28px;\n    height: 28px;\n    border: 1px solid var(--zcat-border-default);\n    border-radius: 6px;\n    padding: 2px;\n    cursor: pointer;\n    background: transparent;\n}\n.zcat-icon-color-text {\n    flex: 1;\n    height: 28px;\n    border: 1px solid var(--zcat-border-default);\n    border-radius: 6px;\n    padding: 0 8px;\n    font-size: 12px;\n    font-family: 'Zoho Puvi', monospace;\n    color: var(--zcat-text-primary);\n    background: var(--zcat-surface-primary);\n    outline: none;\n    max-width: 100px;\n}\n\n/* Slider row */\n.zcat-icon-slider-row {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n}\n.zcat-icon-slider {\n    flex: 1;\n    -webkit-appearance: none;\n    appearance: none;\n    height: 4px;\n    border-radius: 4px;\n    background: var(--zcat-border-default);\n    outline: none;\n    cursor: pointer;\n}\n.zcat-icon-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: var(--zcat-primary-1, #2A65F0);\n    border: 2px solid var(--zcat-surface-primary);\n    box-shadow: 0 0 0 1px var(--zcat-primary-1, #2A65F0);\n    cursor: pointer;\n}\n.zcat-icon-slider::-moz-range-thumb {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: var(--zcat-primary-1, #2A65F0);\n    border: 2px solid var(--zcat-surface-primary);\n    box-shadow: 0 0 0 1px var(--zcat-primary-1, #2A65F0);\n    cursor: pointer;\n}\n.zcat-icon-slider-value {\n    font-size: 12px;\n    font-weight: 600;\n    color: var(--zcat-text-primary);\n    min-width: 24px;\n    text-align: center;\n}\n</style>";;
IconComp._dynamicNodes = [{"t":"cD","p":[1,7,3,3,1],"in":8,"sibl":[7]},{"t":"tX","p":[1,7,3,7,1,0]},{"t":"a","p":[1,7,3,11,1]},{"t":"f","p":[1,7,3,11,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":0},{"t":"tX","p":[1,3,0]}],"dc":[0],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"a","p":[1,7,3,15,1]},{"t":"a","p":[1,7,3,15,3]},{"t":"a","p":[1,7,3,15,5]},{"t":"a","p":[1,7,3,15,7]},{"t":"a","p":[1,7,3,15,9]},{"t":"s","p":[1,7,3,17,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":6,"sibl":[5]},{"t":"s","p":[1,7,3,17,1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4]},{"t":"s","p":[1,7,3,17,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3]},{"t":"s","p":[1,7,3,17,1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2]},{"t":"s","p":[1,7,3,17,1,9],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,7,3,17,3]},{"t":"cD","p":[1,7,3,17,3,1],"in":1,"sibl":[0]},{"t":"a","p":[1,7,3,21]},{"t":"cD","p":[1,7,3,21,1],"in":0},{"t":"tX","p":[1,7,3,21,3,0]},{"t":"tX","p":[1,7,7,3,7,3,3,0]},{"type":"dc","trans":true,"hc":true,"p":[8,7,1,0]}];;

IconComp._observedAttributes = [
    "self",
    "iconList",
    "filteredCount",
    "iconSize",
    "iconStrokeWidth",
    "iconColor",
    "showCopied",
    "copiedText",
    "activeTab",
    "slyteCodeSnippet",
    "jsCodeSnippet",
    "newSlyteCodeSnippet",
    "htmlCodeSnippet",
    "cssCodeSnippet"
];


IconComp.register("icon-comp", {
    hash: "IconComp_4",
    refHash: "C_zcat-app_app_0"
});


/***/ })

}]);
//# sourceMappingURL=icon-comp.js.map
import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './lyte-menu.js';
import { LyteUiComponentComponentRegistry, Component } from "../component.js";
import { prop } from "../../../../@slyte/core/index.js";
import { arrayUtils, RawComponent } from "../../../../@slyte/component/index.js";
import $L from "../../../lyte-dom/modules/lyte-dom-utils.js";

/**
 * Renders a tabs component
 * @component lyte-tabs
 * @version 1.0.0
 * @dependencies lyte-menu
 */

/**
 * @domEvents commonEvents keydown, keyup, focus, blur, focusin, focusout 
 */

class LyteTabsComponent extends Component {
    constructor() {
        super();
        this._lyteUtilFunctions = [ 'addTab','deleteTab','openTab','enableTab','disableTab','addCloseIcon','resizeTab' ];
    }

    data(arg1) {
        return Object.assign(super.data({

          /**
             * @experimental ltPropYield
             */
          "ltPropYield": prop("boolean", { "default": true }),

          /**
           * @componentProperty {string} ltPropHover
           * @version 1.0.0
           * @default lyteTabHover 
           * @input
           */
          "ltPropHover": prop("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'hover', 'lyteTabHover' ), 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropActiveClass
           * @version 1.0.0
           * @default lyteTabActive
           * @input
           */
          "ltPropActiveClass": prop("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'activeClass', 'lyteTabActive' ), 'input' : 'true', 'output' : 'false' }),
          /**
           * @typedef {object} position
           * @property {top|bottom|left|right} pos
           * @property {top|bottom|left|right} align
           */
          /**
           * @componentProperty {object} ltPropPosition
           * @version 1.0.0
           * @default { "pos":"top","align":"left" }
           * @input
           */
          "ltPropPosition": prop("object", { "default":  { 'pos': 'top', 'align': 'left' }, 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {boolean} ltPropCloseIcon
           * @version 1.0.0
           * @default false
           * @input
           */
          "ltPropCloseIcon": prop("boolean", { "default": false, 'input' : 'true', 'output' : 'false' }),
          "prevTarget": prop("object", { "default": null }),

          /**
           * @componentProperty {string} ltPropHeight
           * @version 1.0.0
           * @default 400px
           * @suffix px,pt,cm,mm,vh,vm,em
           * @input
           */
          "ltPropHeight": prop("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'height', "400px"),'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropType
           * @version 1.0.0
           * @options collapse
           * @input
           */
          "ltPropType": prop("string", { 'input' : 'true', 'output' : 'false' }), //options - collapse

          /**
           * @componentProperty {string} ltPropMaxWidth
           * @version 1.0.0
           * @default 90%
           * @condition ltPropType collapse
           * @suffix px,pt,cm,mm,vh,vm,em,%
           * @input
           */
          "ltPropMaxWidth": prop("string", { "default": window._lyteUiUtils.resolveDefaultValue( 'lyte-tabs', 'maxWidth', "90%"), 'input' : 'true', 'output' : 'false' }),

          /**
           * @componentProperty {string} ltPropTabStyle
           * @version 2.2.7
           * @options nested
           * @input
           */
          "ltPropTabStyle": prop("string",{'input' : 'true', 'output' : 'false'}),     //nested

          /**
           * @componentProperty {string} ltPropMenuWrapperClass
           * @condition ltPropType collapse
           * @version 2.2.8
           * @input
           */
          "ltPropMenuWrapperClass": prop("string",{'input' : 'true', 'output' : 'false'}),
          /**
           * @typedef {object} currentTab 
           * @property {string} index
           * @property {string} name
           */
          /**
           * @componentProperty {currentTab} ltPropCurrentTab
           * @version 3.6.0
           * @output
           */
          "ltPropCurrentTab": prop("object",{'input' : 'false', 'output' : 'true'}),
           /**
           * @componentProperty {number} ltPropActiveTab
           * @version 3.110.0
           * @default 0
           * @minValue 0
           * @input 
           * @output 
           */
          "ltPropActiveTab": prop('number',{ 'input' : 'true', 'output' : 'true'}),
          "ltPropAriaAutoActivation" : prop('boolean',{ "default": false}),
          "ltPropHiddenTabs": prop('array', { "default": [] }),
          "ltPropFireOnInit": prop('boolean',{"default": true }),
          "createTabMenu" :  prop( 'boolean', { "default" : false } ),
          "ltPropMenuYield": prop('boolean',{ "default" : false}),
          "menuLabels": prop("array", { "default": [] })
        }), arg1);
    }

    init() {
        /**
         * @utility addTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { object } newTab
         */
        this.$node.addTab = function (newTab) {
            this.component.constructTabs(this, newTab);
            this.component.collapseHeader(true);
        };
        /**
         * @utility deleteTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.deleteTab = function (tabId) {
            this.component.deleteTabContent(tabId, null);
        };
        /**
         * @utility openTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.openTab = function (tabId) {
            this.component.openTabContent(tabId, null);
        };
        /**
         * @utility enableTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.enableTab = function (tabId) {
            this.component.enableTab(tabId);
        };
        /**
         * @utility disableTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         * @param { string } tabId
         */
        this.$node.disableTab = function (tabId) {
            this.component.disableTab(tabId);
        };
        /**
         * @utility addCloseIcon
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         */
        this.$node.addCloseIcon = function () {
            this.component.checkCloseIcon();
        };
        /**
         * @utility resizeTab
         * @author santhoshraj.s <santhoshraj.s@zohocorp.com>
         * @version 1.0.0
         */
        this.$node.resizeTab = function(){
            this.component.collapseHeader(true);
            this.component.checkHeightOnResize();   
        }
        this.$node.reselectTab = function(){
            var title = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
            this.component.openTabContent(title[this.component.getData('ltPropActive').id].getAttribute('lt-prop-id'));
        }
        this.$node.hideTab = function(id){
            if(!Array.isArray(id)){
                id = [id];
            }
            var nextTab;
            var hiddenTab = this.component.getData('ltPropHiddenTabs');
            id.forEach(function(tab){
                if(hiddenTab.includes(tab)){
                    return;
                }
                hiddenTab.push(tab);
                var tab = this.querySelector('lyte-tab-title[lt-prop-id="'+tab+'"]');
                if(tab){
                    tab.classList.add('lyteTabTitleHide');
                    if(tab.classList.contains('lyteTabActive')){
                        nextTab = tab;
                    }
                }
            }.bind(this));
            var prevTab = tab;
            while(nextTab && nextTab.classList.contains('lyteTabTitleHide')){
                nextTab = nextTab.nextElementSibling;
            }
            if(!nextTab){
                while(prevTab && prevTab.classList.contains('lyteTabTitleHide')){
                    prevTab = prevTab.nextElementSibling;
                }
                nextTab = prevTab;
            }
            this.component.openTabContent(nextTab.getAttribute('lt-prop-id'));
            this.component.collapseHeader(true);
        }
        
        this.$node.showTab = function(id){
            if(!Array.isArray(id)){
                id = [id];
            }
            var hiddenTab = this.component.getData('ltPropHiddenTabs');
            id.forEach(function(tab){
                const index = hiddenTab.indexOf(tab);
                if (index < 0) { 
                   return;
                }
                hiddenTab.splice(index, 1); 
                var tab = this.querySelector('lyte-tab-title[lt-prop-id="'+tab+'"]');
                if(tab){
                    tab.classList.remove('lyteTabTitleHide');
                }
            }.bind(this))  
            this.component.collapseHeader(true);
        }
    }

    didConnect() {
        $L('LYTE-TAB-HEAD',this.$node).attr('role','tablist');
        this.initialFunc(true);
        this.rendered = true;
    }

    didDestroy() {
        if (this.$node.checkTabs) {
            clearTimeout(this.$node.checkTabs);
            this.$node.checkTabs = false;
        }
    }

    /**
     * The method is going to perform the computations after the tabs component is rendered
     * @param {boolean} onRender - boolean value determines if afterRender method will be triggered or not
     *
     */
    initialFunc(onRender) {
        var _this = this;
        //Checking whether the lyte-tabs is having any content or not by counting its child element for avoiding unnecessary error
        if (this.$node.childElementCount > 1 || this.$node.children[0].tagName === "LYTE-TAB") {

            //Checking the format provided by user for lyte-tabs
            /* **-- NOT REQUIRED NOW --**   --   If the format is Format 2 then convert it to format 1 
            if(this.$node.firstElementChild.tagName === "LYTE-TAB"){
                var node = this.$node.cloneNode(true);
                this.$node.innerHTML = "";
                this.$node.append(document.createElement('lyte-tab-head'));
                this.$node.append(document.createElement('lyte-tab-body'));
                var childNodes = node.querySelectorAll('lyte-tab');
                for(var v=0; v<childNodes.length ; v++){
                    this.constructTabs(this.$node,childNodes[v]);
                }
            }
            **-- NOT REQUIRED NOW --** */
            
            this.checkTabStyle();
            this.$node.style.height = this.getData('ltPropHeight');
            var head = this.$node.querySelector('lyte-tab-head');
            head.classList.add('lyteTabNav');
            if (this.getData('ltPropType') == "collapse") {
                head.classList.add('lyteTabOverflowV');
            }
            var position = this.getData("ltPropPosition");
            var labels = this.getHeader(head.querySelectorAll('lyte-tab-title')); /*this.getHeader(head.children);*/
            // var contents = $L('lyte-tab-content',this.$node.querySelector('lyte-tab-body'));
            var contents = this.getContent( $L('lyte-tab-content',this.$node.querySelector('lyte-tab-body')) );
            var active = this.getData('ltPropActiveClass');
            var pos;
            var tabpanel = ['top','bottom'];
            if(!tabpanel.includes(position.pos)){
                head.setAttribute('aria-orientation','vertical')
            }
            this.setPosition(position);
            this.checkCloseIcon(head);

            var clickFn = function (event) { this.showTab(event) };
            var mouseoverFn = function (event) { this.mouseOver(event) };
            var mouseoutFn = function (event) { this.mouseOut(event) };
            var keydownFn = function (event) { this.keydown(event) }.bind(this);
            //Binds the events to tab-head
            var _this = this;
            head.addEventListener('click', clickFn.bind(this), true);
            head.addEventListener('mouseover', mouseoverFn.bind(this), true);
            head.addEventListener('mouseout', mouseoutFn.bind(this), true);

            this.$node.addEventListener('focusin',function(event){
                _this.$node.querySelector('lyte-tab-head').addEventListener('keydown', keydownFn, true);
            });
            this.$node.addEventListener('focusout',function(event){
                _this.$node.querySelector('lyte-tab-head').removeEventListener('keydown',keydownFn,true);
            });
            //To open a tab content
            var curr_tab = this.getData('ltPropActiveTab');
            if( curr_tab ){
                labels[curr_tab].classList.add(active)
                $L(labels[curr_tab]).attr('tabindex',0);
                $L(labels[curr_tab]).attr('aria-selected','true');
                pos = curr_tab;
            }else{
                for (var i = 0; i < labels.length; i++) {
                    if (labels[i].classList.contains(active)) {
                        $L(labels[i]).attr('tabindex',0);
                        $L(labels[i]).attr('aria-selected','true');
                        pos = i;
                    }
                }
            }
           var initialTab = 0;
           var foundfirstTab = false;
           var activeTabHide = false;
           var hiddenTab = this.getData('ltPropHiddenTabs');
            for (var i = 0; i < labels.length; i++) {
                if(contents[i]){
                    if (pos && (pos === i || labels[pos].getAttribute('lt-prop-id') === contents[i].id)) {
                        this.executeOnBeforeOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, null);
                        contents[i].classList.remove('lyteTabHide');
                        contents[i].classList.add('lyteTabShow');
                        this.setData('ltPropCurrentTab', { 'index': pos, 'name': labels[pos].textContent.trim(),'id' : labels[pos].getAttribute('lt-prop-id') });
                        this.executeOnOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, onRender);
                    }
                    else {
                        contents[i].classList.remove('lyteTabShow');
                        contents[i].classList.add('lyteTabHide');
                        $L(labels[i]).attr('aria-selected',false);
                    }
                    $L(labels[i]).attr('aria-controls',contents[i].id);
                }
                if(hiddenTab.includes(labels[i].getAttribute('lt-prop-id'))){
                    labels[i].classList.add('lyteTabTitleHide');
                    if(i == 0 || pos == i){
                        activeTabHide = true;
                    }
                }else if(!foundfirstTab && activeTabHide){
                    foundfirstTab = true;
                    initialTab = i;
                }
            }
            if(!foundfirstTab && activeTabHide){
                initialTab = null
            }
            if (!pos && labels.length && initialTab !== null) {
                pos = initialTab ;
                this.executeOnBeforeOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, null,onRender);
                labels[pos].classList.add(active);
                $L(labels[pos]).attr('tabindex',0);
                $L(labels[pos]).attr('aria-selected','true');
                if(contents[pos]){
                    contents[pos].classList.remove('lyteTabHide');
                    contents[pos].classList.add('lyteTabShow');
                }
                this.setData('ltPropCurrentTab', { 'index': pos, 'name': labels[pos].textContent.trim(),'id' : labels[0].getAttribute('lt-prop-id') });
                this.executeOnOpen(labels[pos], labels[pos].getAttribute('lt-prop-id'), null, onRender);
            }
            this.setData('prevTarget', labels[pos]);


            //dispatch Event
            
            $L.fastdom.measure(function () {    //Sets the height and width of the tab label and content based on the given values and positions.
                if (this.getData('ltPropHeight') == "auto") {
                    if (position.pos === "left" || position.pos === "right") {
                        this.$node.querySelector('.lyteTabNav').style.height = "auto";
                        this.$node.querySelector('lyte-tab-body').style.height = "auto";
                    }
                    if (position.pos === "top" || position.pos === "bottom") {
                        this.$node.querySelector('lyte-tab-body').style.height = "auto";
                    }
                    this.makeAlignment(this.getData("ltPropPosition"));
                    if(onRender){
                        window._lyteUiUtils.dispatchEvent('lytetabafterrender', this.$node );
                    }
                    /**
                     * This method is invoked after a lyte-tabs component is rendered in the page.
                     * @method afterRender
                     * @author santhoshraj.s@zohocorp.com
                     * @param { object } component
                    */
                    onRender && this.getMethods('afterRender') && this.executeMethod('afterRender', this.$node);
                }
                else {
                    var cs = window.getComputedStyle(this.$node);
                    var borderDimensionY = ((cs.borderTop ? parseFloat(cs.borderTop) : 0) +
                        (cs.borderBottom ? parseFloat(cs.borderBottom) : 0));
                    var navHeight = this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height;
                    var thisHeight = parseInt(cs.height) - borderDimensionY;
                    $L.fastdom.mutate(function () {
                        if (position.pos === "left" || position.pos === "right") {
                            this.$node.querySelector('.lyteTabNav').style.height = thisHeight + "px";
                            this.$node.querySelector('lyte-tab-body').style.height = thisHeight + "px";
                        }
                        if (position.pos === "top" || position.pos === "bottom") {
                            this.$node.querySelector('lyte-tab-body').style.height = (thisHeight - navHeight) + "px";
                        }
                        this.makeAlignment(this.getData("ltPropPosition"));
                        if(onRender){
                           window._lyteUiUtils.dispatchEvent('lytetabafterrender', this.$node );
                        }
                        onRender && this.getMethods('afterRender') && this.executeMethod('afterRender', this.$node);
                    }, this);
                }
            }, this);
        }
        else {
            console.error("No content detected");
        }
    }

    checkTabStyle() {
        if (this.getData('ltPropTabStyle') === "nested") {
            this.$node.classList.add('lyteNestedTab');
        }
    }

    keydown(event) {
        var menu = $L('#moreMenu',this.$node)[0];
        if((event.target.tagName !== 'LYTE-TAB-TITLE' && event.target.id !== "moreMenu") || (menu && menu.classList.contains('lyteMenuSelected'))){
            return;
        }
        var head = $L('lyte-tab-head',this.$node);
        var tabs = head.find('lyte-tab-title').not('.lyteTabForceHide').toArray();
        menu && tabs.push(menu);
        var curr_tab = head.find('.lyteTabFocused');
        curr_tab = curr_tab.length === 0 ? head.find('.lyteTabActive') : curr_tab;
        var tabFocus = tabs.indexOf(curr_tab[0]),prevFocus;
        var tab_length = tabs.length;
        var isVertical = head[0].getAttribute('aria-orientation') == 'vertical';
        if( ( (event.keyCode === 39 || event.keyCode === 37) && !isVertical )  || (isVertical && ( event.keyCode == 40 || event.keyCode == 38 ) ) ){
            // tabs[tabFocus].setAttribute('tabindex', -1);
            $L(tabs[tabFocus]).removeClass('lyteTabHover');
            $L(tabs[tabFocus]).removeClass('lyteTabFocused');
            if( event.keyCode === 39  ||  event.keyCode === 40){
                tabFocus++;
                if( tabFocus >= tab_length ){
                    tabFocus = 0;
                }
            }else{
                tabFocus--;
                if(tabFocus < 0){
                    tabFocus = tab_length - 1;
                }
            }
            // tabs[tabFocus].setAttribute('tabindex', 0);
            tabs[tabFocus].classList.add('lyteTabFocused');
            if(tabs[tabFocus].id !== "moreMenu"){
                $L(tabs[tabFocus]).addClass('lyteTabHover')
            }
            if( this.getData('ltPropAriaAutoActivation') ){
                if(tabs[tabFocus].id === "moreMenu"){
                    menu.click();
                }else{
                    this.openTabContent($L(tabs[tabFocus]).attr('lt-prop-id'), event);
                }
            }
        }
        if(event.keyCode === 8 && this.getData('ltPropCloseIcon')){
            this.$node.deleteTab($L(tabs[tabFocus]).attr('lt-prop-id'));
            var next_tab = tabFocus - 1;
            if( next_tab < 0 ){
                next_tab = tabFocus + 1;
            }
            if( tabs[ next_tab ] ){
                this.openTabContent( tabs[ next_tab ], null);
                tabs[ next_tab ].focus();
            }
            return;
        }
        if(event.keyCode === 13 && !this.getData('ltPropAriaAutoActivation')){
            if(tabs[tabFocus].id === "moreMenu"){
                menu.click();
            }else{
                this.openTabContent($L(tabs[tabFocus]).attr('lt-prop-id'), event);
            }
        }
        tabs[tabFocus].focus();  
    }

    showTab(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target || target.tagName != 'LYTE-TAB-TITLE') {
            return;
        }
        var id = target.getAttribute('lt-prop-id');

        //If user has clicked on the close icon
        if (event.target.classList.contains('lyteTabCloseIcon')) {
            var returnVal = this.deleteTabContent(id, event);
            if (!returnVal) {
                return;
            }
            this.makeAlignment(this.getData('ltPropPosition'));
            target = (this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title').length > 0) ? this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title')[0] : null;
            if (!target) {
                this.setData('prevTarget', null);
                return
            }
            id = target.getAttribute('lt-prop-id');
            this.openTabContent(target, null);
        }
        // this.executeOnBeforeOpen(id,this.getData('prevTarget').getAttribute('lt-prop-id'));
        this.openTabContent(target, event);
        // this.openTabContent(id);
        // this.executeOnOpen(id);
        // this.setData('prevTarget',target);
    }

    mouseOver(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target ) {
            return;
        }
        var hover = this.getData('ltPropHover');
        $L(target).addClass(hover);
    }

    mouseOut(event) {
        var target = event.target.correspondingElement || event.target;
        while (target && target.parentNode && target.tagName != 'LYTE-TAB-TITLE') {
            target = target.parentNode;
        }
        if (!target) {
            return;
        }
        var hover = this.getData('ltPropHover');
        // event.currentTarget.classList.remove(hover);
        $L(target).removeClass(hover);
    }

    getContent(children) {
        var contents = [];
        for (var i = 0; i < children.length; i++) {
            if (this.$node == $L(children[i]).closest('LYTE-TABS')[0]) {
                contents.push(children[i]);
            }
        }
        return contents;
    }

    getHeader(children) {
        var headers = [];
        for (var i = 0; i < children.length; i++) {
            if (this.$node == $L(children[i]).closest('LYTE-TABS')[0]) {
                headers.push(children[i]);
            }
        }
        return headers;
    }

    //Changes tabs in Format 2 to Format 1 structure
    //Also creates new tab if called from the addTab function
    constructTabs(parentEle, node) {
        var title = "";
        var content = "";
        var id;
        var isObject = false;
        var titleEle = document.createElement('lyte-tab-title');
        var contentEle = document.createElement('lyte-tab-content');
        if (typeof node === "object" && node.tagName === "LYTE-TAB") {
            title = node.getAttribute("lt-prop-title");
            content = node.innerHTML;
            id = node.getAttribute("lt-prop-id");
        }
        else {
            title = node.title;
            content = node.content;
            id = node.id;
            isObject = true;
        }
        if (!id) {
            id = this.generateId(title);
        }
        content = content ? content : '';
        titleEle.innerHTML = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        contentEle.innerHTML = content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        titleEle.setAttribute('lt-prop-id', id);
        //aria-attribute
        titleEle.setAttribute('aria-controls', id);
        contentEle.id = id;
        contentEle.classList.add('lyteTabHide');
       // contentEle.setAttribute('hidden',true);
        var menu = parentEle.querySelector('#moreMenu');
        if(menu){
            var titles = parentEle.querySelector('lyte-tab-head');
            titles.insertBefore(titleEle,menu);
        }else{
            parentEle.querySelector('lyte-tab-head').append(titleEle);
        }
        parentEle.querySelector('lyte-tab-body').append(contentEle);

        //Checks whether the format is changed or a new tab is added
        //If a new tab is added it will execute the code inside this if-block
        if (isObject) {
            // var clickFn = function(event){this.showTab(event)};
            // var mouseoverFn = function(event){this.mouseOver(event)};
            // var mouseoutFn = function(event){this.mouseOut(event)};
            // titleEle.addEventListener('click',clickFn.bind(this));
            // titleEle.addEventListener('mouseover',mouseoverFn.bind(this));
            // titleEle.addEventListener('mouseout',mouseoutFn.bind(this));
            if (this.getData('ltPropCloseIcon')) {
                this.createCloseIcon(new Array(titleEle));
            }
            this.makeAlignment(this.getData('ltPropPosition'));
        }

    }

    deleteTabContent(tabId, event) {
        if (tabId) {
            var returnVal = true;
            if (this.getMethods('onBeforeDelete')) {
                /**
                 * This method is invoked whenever you try to delete a tab by clicking on the close icon or by invoking the deleteTab method. If returned false form the method the sepecified tab wont be deleted.
                 * @method onBeforeDelete
                 * @author santhoshraj.s@zohocorp.com
                 * @condition ltPropCloseIcon true
                 * @param { string } tabId
                 * @param { object } component
                */
                returnVal = this.executeMethod('onBeforeDelete', tabId, this.$node, event);
                returnVal = returnVal === undefined ? true : returnVal;
            }
            if (!returnVal) {
                return false;
            }
            var content = this.$node.querySelector('#' + tabId);
            var head = this.$node.querySelector('lyte-tab-head');
            var headers = head.querySelectorAll('lyte-tab-title');
            var isCustomized = false;
            for (var v = 0; v < headers.length; v++) {
                if (headers[v].getAttribute('lt-prop-id') === tabId) {
                    if (headers[v].classList.contains('lyteTabCustomTitleWidth')) {
                        isCustomized = true;
                    }
                    head.removeChild(headers[v]);
                    if (content) {
                        this.$node.querySelector('lyte-tab-body').removeChild(content);
                    }
                    break;
                }
            }
            if (this.getMethods('onDelete')) {
                /**
                 * This method is invoked after a tab is deleted either by clicking on the close icon or by invoking the deleteTab method
                 * @method onDelete
                 * @author santhoshraj.s@zohocorp.com
                 * @condition ltPropCloseIcon true
                 * @param { string } tabId
                 * @param { object } component
                */
                this.executeMethod('onDelete', tabId, this.$node, event);
            }

            return true;
            // if(isCustomized){
            //     this.customizeTitleTab("afterDelete");
            // }
        }
    }

    enableTab(tabId) {
        if (tabId) {
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (headers[v].classList.contains('lyteTabDisable')) {
                            headers[v].classList.remove('lyteTabDisable');
                            if (headers[v].classList.contains('lyteTabForceHide')) {
                                arrayUtils(this.getData('menuLabels'), "push", this.getMenuLabel(headers[v])/*headers[v].textContent*/);
                            }
                        }
                        break;
                    }
                }
            }
            if (typeof tabId == "object" && tabId.classList.contains('lyteTabDisable')) {
                tabId.classList.remove('lyteTabDisable');
                if (tabId.classList.contains('lyteTabForceHide')) {
                    arrayUtils(this.getData('menuLabels'), "push", this.getMenuLabel(tabId)/*tabId.textContent*/);
                }
            }
        }
    }

    disableTab(tabId) {
        
        if (tabId) {
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (!(headers[v].classList.contains('lyteTabDisable'))) {
                            headers[v].classList.add('lyteTabDisable');
                            if (headers[v].classList.contains('lyteTabForceHide')) {
                                var index = this.getData('menuLabels').indexOf(this.getMenuLabel(headers[v])/*headers[v].textContent*/);
                                if (index != -1) {
                                    arrayUtils(this.getData('menuLabels'), "removeAt", index, 1);
                                }
                            }
                        }
                        break;
                    }
                }
            }
            if (typeof tabId == "object" && !(tabId.classList.contains('lyteTabDisable'))) {
                tabId.classList.add('lyteTabDisable');
                if (tabId.classList.contains('lyteTabForceHide')) {
                    var index = this.getData('menuLabels').indexOf(this.getMenuLabel(tabId)/*tabId.textContent*/);
                    if (index != -1) {
                        arrayUtils(this.getData('menuLabels'), "removeAt", index, 1);
                    }
                }
            }
        }
    }

    openTabContent(tabId, event) {
        
        if (tabId) {
            var label;
            if (typeof tabId == "string") {
                var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title');
                var content = this.$node.querySelector('#' + tabId);
                var _this = this;
                var opentabfunc = function(){
                    _this.hideAll();
                    label.classList.add(_this.getData('ltPropActiveClass'));
                    if (content) {
                        content.classList.remove('lyteTabHide');
                        content.classList.add('lyteTabShow');
                    }
                    _this.setData('ltPropCurrentTab', { 'index': window.v, 'name': label.textContent.trim() , 'id' : tabId });
                    _this.executeOnOpen(label, tabId, event);
                    _this.setData('prevTarget', label);
                    
                }
                for (var v = 0; v < headers.length; v++) {
                    if (headers[v].getAttribute('lt-prop-id') === tabId) {
                        if (headers[v].classList.contains(this.getData('ltPropActiveClass'))) {
                            return;
                        }
                        label = headers[v];
                        //$L(label).attr('tab-index',0);
                        var returnVal = this.executeOnBeforeOpen(label, tabId, this.getData('prevTarget') ? this.getData('prevTarget').getAttribute('lt-prop-id') : null, event);
                        if (!returnVal) {
                            return;
                        }else if( returnVal && returnVal.then){
                            returnVal.then(opentabfunc)
                        }else{
                            opentabfunc();
                        }
                        break;
                    }
                }
                if (this.getData('ltPropType') == "collapse" && this.getData('menuLabels').indexOf(this.getMenuLabel(label)/*label.textContent*/) > -1) {
                    this.collapseHeader(true);
                }

                $L(label).attr('tabindex',0);
                $L(label).attr('aria-selected','true');
            }
            if (typeof tabId == "object") {
                if (tabId.classList.contains(this.getData('ltPropActiveClass'))) {
                    return;
                }
                label = tabId;
                var id = tabId.getAttribute('lt-prop-id');
                var content = this.$node.querySelector('#' + id);
                var returnVal = this.executeOnBeforeOpen(tabId, id, this.getData('prevTarget') ? this.getData('prevTarget').getAttribute('lt-prop-id') : null, event);
                if (!returnVal) {
                    return;
                }else if( returnVal && returnVal.then){
                    var _this = this;
                    returnVal.then(function(){
                        _this.hideAll();
                        tabId.classList.add(_this.getData('ltPropActiveClass'));
                        if (content) {
                            content.classList.remove('lyteTabHide');
                            content.classList.add('lyteTabShow');
                        }
                        var headers =_this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title'), pos;
                        for (var v = 0; v < headers.length; v++) {
                            if (headers[v].isEqualNode(label) && headers[v].getAttribute('lt-prop-id') === id) {
                                pos = v;
                                break;
                            }
                        }
                        _this.setData('ltPropCurrentTab', { 'index': pos, 'name': label.textContent.trim(), 'id' : id });
                        _this.executeOnOpen(tabId, id, event);
                        _this.setData('prevTarget', tabId);
                        if (_this.getData('ltPropType') == "collapse" && _this.getData('menuLabels').indexOf(_this.getMenuLabel(label)/*label.textContent*/) > -1) {
                            _this.collapseHeader(true);
                        }

                        $L(label).attr('tabindex',0);
                        $L(label).attr('aria-selected','true');
                    })
                }else{
                    this.hideAll();

                    tabId.classList.add(this.getData('ltPropActiveClass'));
                    if (content) {
                        content.classList.remove('lyteTabHide');
                        content.classList.add('lyteTabShow');
                    }
                    var headers = this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title'), pos;
                    for (var v = 0; v < headers.length; v++) {
                        if (headers[v].isEqualNode(label) && headers[v].getAttribute('lt-prop-id') === id) {
                            pos = v;
                            break;
                        }
                    }
                    if(headers[v]){
                        var tempid = headers[v].getAttribute('lt-prop-id');
                    }
                    this.setData('ltPropCurrentTab', { 'index': pos, 'name': label.textContent.trim(), 'id': tempid });
                    this.executeOnOpen(tabId, id, event);
                    this.setData('prevTarget', tabId);
                    if (this.getData('ltPropType') == "collapse" && this.getData('menuLabels').indexOf(this.getMenuLabel(label)/*label.textContent*/) > -1) {
                        this.collapseHeader(true);
                    }

                    $L(label).attr('tabindex',0);
                    $L(label).attr('aria-selected','true');
                }
            }
           
        }
       
    }

    checkCloseIcon(head) {
        head = head || this.$node.querySelector('lyte-tab-head');
        if (this.getData('ltPropCloseIcon')) {
            this.createCloseIcon(head.querySelectorAll('lyte-tab-title'));
        }else{
            this.destoryCloseIcon(head.querySelectorAll('lyte-tab-title'));
        }
    }

    destoryCloseIcon(head) {
        var closeIcon = $L('.lyteTabCloseIcon',this.$node);
        for (var index = 0; index < closeIcon.length; index++) {
            closeIcon[index].remove();
            head[index].addedCloseIcon = false;
        }
    }

    createCloseIcon(headers) {
        for (var v = 0; v < headers.length; v++) {
            if (!headers[v].addedCloseIcon) { 
                var closeSpan = document.createElement('span');
                closeSpan.classList.add('lyteTabCloseIcon');
                headers[v].appendChild(closeSpan);
                headers[v].addedCloseIcon = true;
            }
        }
    }

    setPosition(position) {
        switch (position.pos) {
            case "left": this.$node.classList.add('lyteTabDefaultLeft');/*this.setHeight("left");*/break;
            case "right": this.$node.classList.add('lyteTabDefaultRight');/*this.setHeight("right");*/break;
            case "top": this.$node.classList.add('lyteTabDefaultTop');/*this.setHeight("top");*/break;
            case "bottom": this.$node.classList.add('lyteTabDefaultBottom');/*this.setHeight("bottom");*/break;
        }
        
    }

    checkHeightOnResize() {
        if (this.$node.getBoundingClientRect().height != (this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height + this.$node.querySelector('lyte-tab-body').getBoundingClientRect().height)) {
            this.setHeight(this.getData('ltPropPosition'));
        }
    }

    setHeight(position) {
        if (this.getData('ltPropHeight') == "auto") {
            if (position.pos === "left" || position.pos === "right") {
                this.$node.querySelector('.lyteTabNav').style.height = "auto";
                this.$node.querySelector('lyte-tab-body').style.height = "auto";
            }
            if (position.pos === "top" || position.pos === "bottom") {
                this.$node.querySelector('lyte-tab-body').style.height = "auto";
            }
            this.makeAlignment(this.getData("ltPropPosition"));
        }
        else {
            $L.fastdom.measure(function () {
                var cs = window.getComputedStyle(this.$node);
                var borderDimensionY = ((cs.borderTop ? parseFloat(cs.borderTop) : 0) +
                    (cs.borderBottom ? parseFloat(cs.borderBottom) : 0));
                var navHeight = this.$node.querySelector('.lyteTabNav').getBoundingClientRect().height;
                var thisHeight = parseInt(cs.height) - borderDimensionY;
                $L.fastdom.mutate(function () {
                    // if(position.pos === "bottom"){
                    //     this.$node.querySelector('.lyteTabNav').style.top = (thisHeight - navHeight) + "px";
                    // }
                    if (position.pos === "left" || position.pos === "right") {
                        this.$node.querySelector('.lyteTabNav').style.height = thisHeight + "px";
                        this.$node.querySelector('lyte-tab-body').style.height = thisHeight + "px";
                    }
                    if (position.pos === "top" || position.pos === "bottom") {
                        this.$node.querySelector('lyte-tab-body').style.height = (thisHeight - navHeight) + "px";
                    }
                    this.makeAlignment(this.getData("ltPropPosition"));
                }, this);

            }, this);
        }
    }

    hideAll() {
        var labels = this.getHeader(this.$node.querySelector('lyte-tab-head').querySelectorAll('lyte-tab-title')); /*this.getHeader(this.$node.querySelector('lyte-tab-head').children);*/
        var contents = this.getContent($L('lyte-tab-content',this.$node.querySelector('lyte-tab-body'))); /*this.getContent(this.$node.querySelector('lyte-tab-body').children);*/
        var active = this.getData('ltPropActiveClass');
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].classList.contains(active)) {
                labels[i].setAttribute('aria-selected',false);
                labels[i].classList.remove(active);
                labels[i].setAttribute('tabIndex',-1);
            }
        }
        for (var v = 0; v < contents.length; v++) {
            //contents[v].setAttribute('hidden',true);
            if (contents[v].classList.contains('lyteTabShow')) {
                contents[v].classList.remove('lyteTabShow');
                contents[v].classList.add('lyteTabHide');
            }
            if (!contents[v].classList.contains('lyteTabHide')) {
                contents[v].classList.add('lyteTabHide');
            }
            if (!$L(contents[v]).hasClass('lyteTabHide')) {
                $L(contents[v]).addClass('lyteTabHide');
            }
        }
    }

    customizeTitleTab(prop) {

        $L.fastdom.measure(function () {
            var head = this.$node.querySelector('lyte-tab-head');
            var compWidth = this.getWidth(head, false);
            if (prop === "top" || prop === "bottom") {
                var totalWidth = 0;
                var width = 0;
                var titles = head.querySelectorAll('lyte-tab-title');
                if (this.getData('ltPropType') == "collapse") {
                    $L.fastdom.measure(function () {
                        for (var i = 0; i < titles.length; i++) {
                            totalWidth = totalWidth + this.getWidth(titles[i], true, true);
                        }
                        if (totalWidth > compWidth) {
                            this.collapseHeader();
                        }
                    }, this);
                }

            }
            if (prop === "afterDelete") {
                var titles = head.querySelectorAll('lyte-tab-title');
                var width = compWidth / titles.length;
                $L.fastdom.mutate(function () {
                    for (var i = 0; i < titles.length; i++) {
                        titles[i].style.width = width + "px";
                    }
                });
            }
        }, this);
    }

    /**
     * The method is going to do the calculations for collapsible tab and construct the menu items
     *
     */
    collapseHeader(onResize) {
        var menu = this.$node.querySelector('#lyteTabMenu');
        var head = this.$node.querySelector('lyte-tab-head'),
            compOffset = {
                width: this.getWidth(head, false),
                height: head.offsetHeight
            },

            maxWidth = this.getData('ltPropMaxWidth').indexOf('%') != -1 ? (parseInt(this.getData('ltPropMaxWidth')) * compOffset.width) / 100 : parseFloat(this.getData('ltPropMaxWidth')),
            headers = head.querySelectorAll('lyte-tab-title'),
            totalWidth = 0, allowed = -1,
            _this = this,
            openedTab = Array.from(headers).findIndex(function (x) { return x.classList.contains(_this.getData('ltPropActiveClass')) }),
            menuLabels = [];
        if (onResize) {
            for (var i = 0; i < headers.length; i++) {
                if (headers[i].classList.contains('lyteTabForceHide')) {
                    headers[i].classList.remove('lyteTabForceHide');
                }
            }
        }
        if(menu && maxWidth == head.getBoundingClientRect().width){
            totalWidth += $L('#moreMenu',head)[0].getBoundingClientRect().width;
        }
        totalWidth += this.getWidth(headers[openedTab], true, true);
        for (var i = 0; i < headers.length; i++) {
            if (i != openedTab) {
                totalWidth += this.getWidth(headers[i], true, true);
                if (totalWidth > maxWidth) {
                    totalWidth -= this.getWidth(headers[i], true, true);
                    allowed = i;
                    break;
                }
            }
        }
        if (allowed > -1 && allowed < headers.length) {
            for (var i = allowed; i < headers.length; i++) {
                if (i == openedTab) {
                    if (openedTab > 0 && !(headers[i - 1].classList.contains('lyteTabForceHide') && !(headers[i - 1].classList.contains('lyteTabTitleHide'))) ){
                        $L(headers[i - 1]).addClass('lyteTabForceHide');
                        if (!($L(headers[i - 1]).hasClass('lyteTabDisable'))) {
                            menuLabels.push(this.getMenuLabel(headers[i - 1])/*headers[i - 1].textContent*/);
                        }
                    }
                }
                else {
                    if(!(headers[i].classList.contains('lyteTabTitleHide'))){
                        $L(headers[i]).addClass('lyteTabForceHide');
                        if (!($L(headers[i]).hasClass('lyteTabDisable'))) {
                            menuLabels.push(this.getMenuLabel(headers[i])/*headers[i].textContent*/);
                        }
                    }
                }
            }
            var menu = this.$node.querySelector('#lyteTabMenu');
            if (!menu) {
                var span = document.createElement('span');
                span.id = "moreMenu";
                span.tabIndex = '-1';
                var uniqueSel = this.createUniqueSlector();
                span.classList.add(uniqueSel);
                span.appendChild(document.createElement('span'));
                head.appendChild(span);
                if(totalWidth + span.getBoundingClientRect().width > maxWidth && maxWidth == head.getBoundingClientRect().width){
                    $L(headers[allowed - 1]).addClass('lyteTabForceHide');
                    menuLabels.splice(0, 0,this.getMenuLabel(headers[allowed - 1]));
                }
                this.createMenu(menuLabels, uniqueSel, "init");
                if (!onResize) {
                    if (this.getData('ltPropPosition').pos === "bottom") {
                        head.style.top = (head.offsetTop + (Math.ceil(compOffset.height / 2) - 1)) + "px";
                    }
                }
            }
            else/*if(onResize)*/ {
                arrayUtils(this.getData('menuLabels'), "removeAt", 0, this.getData('menuLabels').length);
                arrayUtils(this.getData('menuLabels'), "push", menuLabels);
            }
        }
        else {
            if (allowed == -1) {
                this.removeMenu();
            }
            // if(onResize){
            //     this.makeAlignment(this.getData('ltPropPosition'));
            // }
        }
    }

    createUniqueSlector() {
        var tabs = window._lyteUiUtils.querySelectorAll('lyte-tabs');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].isEqualNode(this.$node)) {
                return "menuSel_" + i;
            }
        }
    }

    getMenuLabel(item) {
        var labelItem = item.querySelector('.lyteTabTitleLabel');
        return labelItem ? labelItem.textContent : item.textContent;
    }

    /**
     * The method is going to create the menu and add listeners for the methods
     *
     */
    createMenu(menuLabels, sel, prop) {
        if (prop == "init") {
            this.setData('createTabMenu',true);
            var menu = $L('#lyteTabMenu',this.$node)[0];
            // menu.id = 'lyteTabMenu';

            this.setData('menuLabels', menuLabels);

            menu.ltProp({
                content: menuLabels,
                query: "." + sel,
                event: "click",
                callout: true
            });
            // if (this.getData('ltPropMenuWrapperClass')) {
            //     menu.ltProp({
            //         wrapperClass: this.getData('ltPropMenuWrapperClass')
            //     });
            // }
        }
    }

    removeMenu() {
        // var menu = this.$node.querySelector('#lyteTabMenu');
        var head = this.$node.querySelector('lyte-tab-head');
        var menu_span = $L('#moreMenu',head)[0];
        if (menu_span) {
            menu_span.remove();
        }
        this.setData('createTabMenu',false);
        this.setData('menuLabels', []);
    }

    onMenuLabelChange() {
        this.$node.querySelector('#lyteTabMenu').ltProp({
            content: this.getData('menuLabels')
        })
    }

    /*.observes('menuLabels.[]')*/

    makeAlignment(position) {
        var head = this.$node.querySelector('lyte-tab-head');
        if (position.align == "left" || position.align == "top") {
            head.classList.add('lyteTabAlignStart');
        }
        if (position.align == "right" || position.align == "bottom") {
            if (this.getData('ltPropType') == "collapse" && (position.pos == "top" || position.pos == "bottom")) {
                head.classList.add('lyteTabRightCollapse');
            }
            else {
                head.classList.add('lyteTabAlignEnd');
            }
        }
        if (position.align == "center") {
            head.classList.add('lyteTabAlignCenter');
        }
    }

    executeOnBeforeOpen(clickedItem, targetId, prevEleId, event, onRender) {
        var returnVal;
         if(this.getData('ltPropFireOnInit')){
            if (this.getMethods('onBeforeOpen')) {
                /**
                 * It is triggered when the user clicks on a tab but before it is opened.
                 * @method onBeforeOpen
                 * @author santhoshraj.s@zohocorp.com
                 * @param { object } currContent
                 * @param { object } prevContent
                 * @param { object } component
                 * @param { string } clickedTab 
                 * @param { string } PrevisousTab
                */
                returnVal = this.executeMethod('onBeforeOpen', this.$node.querySelector("#" + targetId), this.$node.querySelector("#" + prevEleId), this, clickedItem, this.getData('prevTarget') ? this.getData('prevTarget') : null, event);
            }
        }else{
           if (this.getMethods('onBeforeOpen') && !onRender) {
                returnVal = this.executeMethod('onBeforeOpen', this.$node.querySelector("#" + targetId), this.$node.querySelector("#" + prevEleId), this, clickedItem, this.getData('prevTarget') ? this.getData('prevTarget') : null, event);
            } 
        }

        return (returnVal === undefined ? true : returnVal);
    }

    executeOnOpen(clickedItem, targetId, event, onRender) {

        
        if(this.getData('ltPropFireOnInit')){
            if (this.getMethods('onOpen') ) {
                /**
                 * It is triggered when the clicked tab is opened.
                 * @method onOpen
                 * @author santhoshraj.s@zohocorp.com
                 * @param { object } currContent
                 * @param { object } component
                 * @param { string } clickedTab 
                */
                this.executeMethod('onOpen', this.$node.querySelector("#" + targetId), this, clickedItem, event, targetId);
            } 
        }else{
            if (this.getMethods('onOpen') && !onRender) {
                this.executeMethod('onOpen', this.$node.querySelector("#" + targetId), this, clickedItem, event, targetId);
            }
        }

        window._lyteUiUtils.dispatchEvent('lytetabopen', this.$node , { 'content' :  this.$node.querySelector("#" + targetId), 'component': this ,'tab': clickedItem });
    }

    generateId(text) {
        while (text.indexOf(" ") !== -1) {
            text = text.replace(" ", "_");
        }
        return text;
    }

    getWidth(ele, includePadding, includeMargin) {
        includePadding = includePadding == undefined ? true : includePadding;
        if(ele){
            var cs = window.getComputedStyle(ele),
                padding = parseInt(cs.paddingLeft) + parseInt(cs.paddingRight),
                margin = 0;
            if (includeMargin) {
                margin = parseInt(cs.marginLeft) + parseInt(cs.marginRight);
            }
            var width = parseFloat(cs.width) + (includePadding ? 0 : -padding) + margin;
            width = isNaN(width) ? 0 : width;
            return width;
        }else{
            return 0;
        }
        
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            onClick: function (value, event, menu, menuOriginElem, subMenu) {
                var labelText = arguments[0],
                    tab = arguments[2].parentElement.component,
                    head = arguments[3].parentElement,
                    headers = head.querySelectorAll('lyte-tab-title'),
                    label;
                for (var i = 0; i < headers.length; i++) {
                    if (tab.getMenuLabel(headers[i])/*headers[i].textContent*/ == labelText && headers[i].classList.contains('lyteTabForceHide')) {
                        label = headers[i];
                        break;
                    }
                }
                if (label) {
                    label.classList.remove('lyteTabForceHide');
                    tab.openTabContent(label, event);
                    // LyteComponent.insertBefore(headers[0],label);
                    // tab.collapseHeader(true);
                }
                if (tab.getMethods('onMenuClick')) {
                    /**
                     * This method is called whenever menu item is clicked
                     * @method onMenuClick
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { string } value
                     * @param { object } Event
                     * @param { object } lyteMenu
                     * @param { object } MenuOriginElement
                     * @param { object } ClickedItem
                     * @param { object } tabComponent
                     * @param { object } ClickedTabTitle
                    */
                    tab.executeMethod('onMenuClick', value, event, menu, menuOriginElem, subMenu, tab, label);
                }
            },
            onTabMenuBeforeOpen: function (menu, event, menuOriginElem) {
                if (this.getMethods('onBeforeMenuOpen')) {
                    /**
                     * This method is called before opening menu.
                     * @method onBeforeMenuOpen
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } MenuOriginElement
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuOpen', menu, event, menuOriginElem, this);
                }
            },
            onTabMenuOpen: function (menu, event, menuOriginElem) {
                if (this.getMethods('onMenuOpen')) {
                    /**
                     * This method is called when menu is opened.
                     * @method onMenuOpen
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } MenuOriginElement
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onMenuOpen', menu, event, menuOriginElem, this);
                }
            },
            onBeforeClose: function (menu, event) {
                if (this.getMethods('onBeforeMenuClose')) {
                    /**
                     * This method is called before closing menu.
                     * @method onBeforeMenuClose
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuClose', menu, event, this);
                }
            },
            onClose: function (menu, event) {
                if (this.getMethods('onMenuClose')) {
                    /**
                     * This method is called when menu is closed.
                     * @method onMenuClose
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } Event
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onMenuClose', menu, event, this);
                }
            },
            MenubeforeRender: function (menu) {
                if (this.getMethods('onBeforeMenuRender')) {
                    /**
                     * This method is invoked before component is rendered
                     * @method onBeforeMenuRender
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onBeforeMenuRender', menu, this);
                }
            },
            MenuafterRender: function (menu) {
                if (this.getMethods('onAfterMenuRender')) {
                    /**
                     * This method is invoked after component rendered
                     * @method onAfterMenuRender
                     * @author santhoshraj.s@zohocorp.com
                     * @condition ltPropType collapse
                     * @param { object } lyteMenu
                     * @param { object } tabComponent
                    */
                    this.executeMethod('onAfterMenuRender', menu, this);
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            onPositionChange: function () {
                var comp = this.$node;
                comp.classList.remove('lyteTabDefaultLeft', 'lyteTabDefaultRight', 'lyteTabDefaultTop', 'lyteTabDefaultBottom');
                var compHead = comp.querySelector('lyte-tab-head');
                var compBody = comp.querySelector('lyte-tab-body');
                var compHeaders = comp.querySelectorAll('lyte-tab-title');
                compHead.classList.remove('lyteTabAlignStart', 'lyteTabAlignEnd', 'lyteTabAlignCenter');
                compHead.removeAttribute("style");
                compBody.removeAttribute("style");
                if(compHeaders.length){
                    compHeaders[0].style.marginLeft = "";
                    compHeaders[0].style.marginTop = "";
                    for (var i = 0; i < compHeaders.length; i++) {
                        compHeaders[i].style.float = "";
                    }
                }
                comp = null;
                compHeaders = null;
                compBody = null;
                var position = this.getData('ltPropPosition');
                var tabpanel = ['top','bottom'];
                if(!tabpanel.includes(position.pos)){
                    compHead.setAttribute('aria-orientation','vertical')
                }
                compHead = null;
                this.setPosition(position);
                this.setHeight(position);

                //this.initialFunc(false);
            }.observes('ltPropPosition'),

            onHeightChange: function () {
                this.$node.style.height = this.getData('ltPropHeight');
                this.setHeight(this.getData('ltPropPosition'));
            }.observes('ltPropHeight'),

            onTypeChange: function () {
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'));
                if(this.getData('ltPropType') !== "collapse"){
                    $L(Tabtitles).removeClass('lyteTabForceHide');
                    $L('#moreMenu',this.$node)[0].remove();
                    this.setData('createTabMenu', false);
                }else{
                    this.$node.resizeTab();
                }
            }.observes('ltPropType'),

            onHideListChange: function(){
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'))
                var hiddenTab = this.getData('ltPropHiddenTabs');
                var activeTabHide = false;
                var nextTab; 
                var firstVisibleTab;
                var notfound = true;
                Tabtitles.forEach(function(title){
                    if(hiddenTab.includes(title.getAttribute('lt-prop-id'))){
                        title.classList.add('lyteTabTitleHide');
                        if(title.classList.contains(this.getData('ltPropActiveClass'))){
                            activeTabHide = true;
                        }
                    }else{
                        if(activeTabHide && notfound){
                            notfound = false;
                            nextTab = title;
                        }
                        if(!firstVisibleTab){
                            firstVisibleTab = title;
                        }
                       
                        title.classList.remove('lyteTabTitleHide');
                    }
                }.bind(this))
                if(!nextTab && activeTabHide && firstVisibleTab){
                    nextTab = firstVisibleTab;
                }
                if(nextTab){
                    this.openTabContent(nextTab.getAttribute('lt-prop-id'));
                }
                this.collapseHeader(true);
            }.observes('ltPropHiddenTabs'),

            ChangeActiveTab: function () {
                var activeTab = this.getData('ltPropActiveTab');
                var head = this.$node.querySelector('lyte-tab-head');
                var Tabtitles = this.getHeader(head.querySelectorAll('lyte-tab-title'))
                this.openTabContent(Tabtitles[activeTab].getAttribute('lt-prop-id'));
            }.observes('ltPropActiveTab'),

            onMaxWidthChange: function () {
                this.$node.resizeTab();
            }.observes('ltPropMaxWidth'),

            CloseIconObsever : function(){
                this.checkCloseIcon();
            }.observes('ltPropCloseIcon')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteTabsComponent._template = "<template tag-name=\"lyte-tabs\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"tabYield\"></lyte-yield> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{createTabMenu}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu id=\"lyteTabMenu\" on-before-open=\"{{method(&quot;onTabMenuBeforeOpen&quot;)}}\" on-open=\"{{method(&quot;onTabMenuOpen&quot;)}}\" on-before-close=\"{{method(&quot;onBeforeClose&quot;)}}\" on-close=\"{{method(&quot;onClose&quot;)}}\" on-menu-click=\"{{method(&quot;onClick&quot;)}}\" before-render=\"{{method('MenubeforeRender')}}\" after-render=\"{{method('MenuafterRender')}}\" lt-prop-yield=\"{{ltPropMenuYield}}\" lt-prop-wrapper-class=\"{{ltPropMenuWrapperClass}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-yield yield-name=\"tab-menu\" hidden-tabs=\"{{menuLabels}}\"></lyte-yield> </template> </lyte-menu> </template></template> </template>";;
LyteTabsComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LyteTabsComponent._observedAttributes = [
    "ltPropYield",
    "ltPropHover",
    "ltPropActiveClass",
    "ltPropPosition",
    "ltPropCloseIcon",
    "prevTarget",
    "ltPropHeight",
    "ltPropType",
    "ltPropMaxWidth",
    "ltPropTabStyle",
    "ltPropMenuWrapperClass",
    "ltPropCurrentTab",
    "ltPropActiveTab",
    "ltPropAriaAutoActivation",
    "ltPropHiddenTabs",
    "ltPropFireOnInit",
    "createTabMenu",
    "ltPropMenuYield",
    "menuLabels"
];

// var _lyteTab = {
//     _lyteTabTitleId : 0,

//     generateId : function(){
//         return 'lyte_tab_tile_' + _lyteTab._lyteTabTitleId++;
//     },
//     getgeneratedId : function(){
//         return 'lyte_tab_tile_' + _lyteTab._lyteTabTitleId;
//     }
// }

/**
 * @customElement lyte-tab-title
 */
/**
 * @customElement lyte-tab-head
 */
/**
 * @customElement lyte-tab-body
 */

/**
 * @customElement lyte-tab-content
 */
if (!window._lyteUiUtils.registeredCustomElements['lyte-tab-title']) {
    window._lyteUiUtils.registeredCustomElements['lyte-tab-title'] = true;

    class LyteTabTitleCustomElements extends LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;

            $L(lyteNode).attr('role','tab');
            var compEle = lyteNode.closest('lyte-tabs');
            lyteNode._tabComp = compEle;
            if(lyteNode.classList.contains(compEle.getData('ltPropActiveClass'))){
                $L(lyteNode).attr('tabindex',0);
                $L(lyteNode).attr('aria-selected','true');
            }else{
                $L(lyteNode).attr('tabindex',-1);
                $L(lyteNode).attr('aria-selected','false');
            }
            if(compEle.getData('ltPropCloseIcon') && compEle.component.rendered){
                compEle.component.createCloseIcon([lyteNode]);
            }
            if (compEle && compEle.component  ) {

                if (compEle.checkTabs) {
                    clearTimeout(compEle.checkTabs);
                    compEle.checkTabs = false;
                }
                else {
                    lyteNode.closest('lyte-tab-head').classList.add('lyteTabVH');
                }
                compEle.checkTabs = setTimeout(function () {
                    var tab = lyteNode._tabComp;
                    if (tab) {
                        var comp = tab.component;
                        var head = lyteNode.closest('lyte-tab-head');
                        var compWidth = comp.getWidth(head, false);
                        var maxWidth = comp.getData('ltPropMaxWidth').indexOf('%') != -1 ? (parseInt(comp.getData('ltPropMaxWidth')) * compWidth) / 100 : parseFloat(comp.getData('ltPropMaxWidth'));

                        var totalWidth = 0;
                        var width = 0;
                        var titles = head.querySelectorAll('lyte-tab-title');
                        var activeTabIndex = -1;
                        for (var i = 0; i < titles.length; i++) {
                            totalWidth = totalWidth + comp.getWidth(titles[i], true, true);
                            if (titles[i].classList.contains(comp.getData('ltPropActiveClass'))) {
                                activeTabIndex = i;
                            }
                        }
                        if (activeTabIndex == -1 && !titles[0].classList.contains('lyteTabTitleHide') && comp.rendered) {
                            comp.openTabContent(titles[0], null);
                        }
                        if (totalWidth > compWidth || totalWidth > maxWidth) {

                            if (comp.$node.ltProp('type') == "collapse") {
                                comp.collapseHeader();
                            }
                        }
                        
                        lyteNode.closest('lyte-tab-head').classList.remove('lyteTabVH');
                    }
                    compEle.checkTabs = false;
                }.bind(lyteNode), 100);
            }
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            var compEle = lyteNode._tabComp;
            if (compEle && compEle.checkTabs) {
                clearTimeout(compEle.checkTabs);
                compEle.checkTabs = false;
                var tabHead = $L('lyte-tab-head',compEle)[0];
                if(tabHead){
                    tabHead.classList.remove('lyteTabVH');
                }
            }
        }

        _() {
            _;
        }
    }

    LyteTabTitleCustomElements.options = {clone : {allCallbacks : false}};
    LyteTabTitleCustomElements.register("lyte-tab-title");
}

/*if (!_lyteUiUtils.registeredCustomElements['lyte-tab-content']) {

    _lyteUiUtils.registeredCustomElements['lyte-tab-content'] = true;

    Lyte.createCustomElement("lyte-tab-content", {
        static: {

        },
        connectedCallback: function () {
            if(!this.classList.contains('lyteTabShow')){
                this.classList.add('lyteTabHide')
            }
            
        }
        
    });
}*/
if (!window._lyteUiUtils.registeredCustomElements['lyte-tab-content']) {
    window._lyteUiUtils.registeredCustomElements['lyte-tab-content'] = true;

    class LyteTabContentCustomElements extends LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var tab_id = lyteNode.getAttribute('id');
            var tab = lyteNode.closest('lyte-tabs');
            var tab_title = tab.querySelector('[lt-prop-id="' + tab_id + '"]');
            if(tab_title.classList.contains(tab.getData('ltPropActiveClass'))){
                lyteNode.classList.add('lyteTabShow');
            }else{
                lyteNode.classList.add('lyteTabHide');
            }
            $L(lyteNode).attr('role','tabpanel');
        }

        _() {
            _;
        }
    }

    LyteTabContentCustomElements.options = {clone : {allCallbacks : false}};
    LyteTabContentCustomElements.register("lyte-tab-content");
}

window.addEventListener('resize', function () {
    if (window._lyteUiUtils.tabResizeTriggered) {
        clearTimeout(window._lyteUiUtils.tabResizeTriggered);
        window._lyteUiUtils.tabResizeTriggered = false;
    }
    window._lyteUiUtils.tabResizeTriggered = setTimeout(function () {
        var tabs = _lyteUiUtils.querySelectorAll('lyte-tabs');
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].component && tabs[i].component.getData('ltPropType') == "collapse") {
                tabs[i].component.collapseHeader(true);
            }
            tabs[i].component.checkHeightOnResize();
        }
        _lyteUiUtils.tabResizeTriggered = false;
    }, 50);
});

/**
 * @syntax yielded
 * <lyte-tabs>
 *     <template is = "registerYield" yield-name = "tabYield">
 *         <lyte-tab-head>
 *             <lyte-tab-title lt-prop-id = "tab1"> <span> Header 1 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab2"> <span> Header 2 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab3"> <span> Header 3 </span> </lyte-tab-title>
 *             <lyte-tab-title lt-prop-id = "tab4"> <span> Header 4 </span> </lyte-tab-title>
 *         </lyte-tab-head>
 *         <lyte-tab-body>
 *             <lyte-tab-content id = "tab1"> <span> Content 1 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab2"> <span> Content 2 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab3"> <span> Content 3 </span> </lyte-tab-content>
 *             <lyte-tab-content id = "tab4"> <span> Content 4 </span> </lyte-tab-content>
 *         </lyte-tab-body>
 *     </template>
 * </lyte-tabs>
 */
export { LyteTabsComponent };

LyteTabsComponent.register("lyte-tabs", {
    hash: "LyteTabsComponent_4",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});

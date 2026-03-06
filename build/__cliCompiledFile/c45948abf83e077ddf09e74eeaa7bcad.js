import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-dropdown.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-navigator.js";
import {Component} from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatPagination extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			self: prop('object'),
      		zcatProp: prop('object'),
			paginationDropdownStyles: prop( "object", {
				default: {
					"id": "dropdown-id",
					"placeholder": "Select Option",
					"size": "extra-small",
					"width": "zcat-w-fc",
					"variant": "ghost",
					"selected": "10",
					"onChange": "paginationChangeMethod",
					"options": [
						{
							"name": "10",
							"value": "10"
						},
						{
							"name": "25",
							"value": "25"
						},
						{
							"name": "50",
							"value": "50"
						},
						{
							"name": "100",
							"value": "100"
						}
					]
				}
			})	
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
			async customLbindForPagination(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			},
			async customLbindForDropdown(methodName) {
				const self = this.getData('self');
				const prop = this.getData('zcatProp');
		
				if (prop.key) {
				  self.setData(prop.key, prop.selected);
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 1)
				  );
				}
			}
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ZcatPagination._template = "<template tag-name=\"zcat-pagination\"> <div class=\"zcat-dN\"> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-left-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-right-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M5.25 10.5L8.75 7L5.25 3.5\" stroke=\"var(--zcat-body-icons-static-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','primary')}}\" lc-id=\"lc_id_0\"> <lyte-navigator lt-prop-yield=\"true\" lt-prop-value=\"{{zcatProp.value}}\" lt-prop-records=\"{{zcatProp.records}}\" lt-prop-perpage=\"{{zcatProp.perpage}}\" lt-prop-more-records=\"{{zcatProp.morerecords}}\" lt-prop-middle-text=\"{{zcatProp.middletext}}\" lt-prop-show-only-icon=\"{{zcatProp.showonlyicon}}\" lt-prop-show-text=\"{{zcatProp.showtext}}\" lt-prop-aria=\"{{zcatProp.aria}}\" lt-prop-aria-next=\"{{zcatProp.arianext}}\" lt-prop-aria-previous=\"{{zcatProp.ariaprevious}}\" lt-prop-aria-home=\"{{zcatProp.ariahome}}\" lt-prop-aria-end=\"{{zcatProp.ariaend}}\" lt-prop-type=\"{{expHandlers(zcatProp.type,'?:','zcatProp.type','default')}}\" on-next=\"{{method('customLbindForPagination',zcatProp.onNext,'')}}\" on-previous=\"{{method('customLbindForPagination',zcatProp.onPrevious,'')}}\" on-home=\"{{method('customLbindForPagination',zcatProp.onHome,'')}}\" on-end=\"{{method('customLbindForPagination',zcatProp.onEnd,'')}}\" on-select=\"{{method('customLbindForPagination',zcatProp.onSelect,'')}}\"> <template is=\"registerYield\" yield-name=\"navigatorYield\"> <div class=\"zcat-pagination-wraper\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Showing Results :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">{{zcatProp.startPage}} - {{zcatProp.endPage}}</div> <div class=\"zcat-pagination-result-total\">of {{zcatProp.records}}</div> </div> </div> <div class=\"zcat-flex-center zcat-gap-16\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center\"> <div class=\"zcat-pagination-dropdown-text\">Rows per page :</div> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{paginationDropdownStyles}}\"> </zcat-dropdown> </div> <div class=\"zcat-pagination-divider\"></div> <div class=\"zcat-flex-center zcat-gap-12\"> <div data-zcqa=\"{{zcatProp.zcqa}}-prev-btn\" class=\"lyteSingleBack zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-left-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center zcat-pagination-icon-disabled-color\"></lyte-svg> </div> <div class=\"zcat-pagination-page-list\"> {{zcatProp.startPage}} - {{zcatProp.endPage}} </div> <div data-zcqa=\"{{zcatProp.zcqa}}-next-btn\" class=\"lyteSingleFront zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-right-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center\"></lyte-svg> </div> </div> </div> </div> </template> </lyte-navigator> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" lc-id=\"lc_id_1\"> <div class=\"zcat-pagination-wraper\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Total Records :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">50</div> </div> </div> </div> </template></template> </template><style>\n\n/* === Global base styles from reference css/zcat-pagination.css === */\n.lyteNavigator lyte-yield{\n    width: 100%;\n}\n.zcat-pagination-wraper{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 30px;\n    padding: 6px 16px;\n    border-radius: 0px 0px 10px 10px;\n    border-top: 1px solid var(--zcat-pagination-divider);\n    background-color: var(--zcat-pagination-bg);\n    box-shadow: 0px -6px 16px 0px var(--zcat-shadow-bg-secondary);\n}\nzcat-table .zcat-pagination-wraper{\n    margin-top: -3px;\n    border: 1px solid var(--zcat-table-border-default);\n    position: relative;\n    z-index: 2;\n}\nzcat-table .zcat-pagination-wraper.borderless-table{\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n}\n.zcat-pagination-page-list{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-icon-wraper{\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.zcat-pagination-icon-wraper:hover{\n    cursor: pointer;\n    background: var(--zcat-btn-grey-bg-hover);\n}\n.lyteDisabled.zcat-pagination-icon-wraper{\n    cursor: not-allowed;\n    background: none;\n}\n.zcat-pagination-icon-color{\n  stroke: var(--zcat-body-icons-static-primary);\n}\n.lyteDisabled.zcat-pagination-icon-disabled-color{\n    stroke: var(--zcat-body-icons-static-disabled);\n}\n.zcat-pagination-result-wraper,.zcat-pagination-dropdown-text{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n}\n.zcat-pagination-result-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n.zcat-pagination-result-count{\n    color: var(--zcat-pagination-text-primary);\n}\n.zcat-pagination-result-total{\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-divider{\n    height: 20px;\n    width: 1px;\n    background: var(--zcat-pagination-divider);\n}\n.zcat-pagination-dropdown-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n\n/* === Global base styles from reference css/zcat-pagination.css === */\n.lyteNavigator lyte-yield{\n    width: 100%;\n}\n.zcat-pagination-wraper{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 30px;\n    padding: 6px 16px;\n    border-radius: 0px 0px 10px 10px;\n    border-top: 1px solid var(--zcat-pagination-divider);\n    background-color: var(--zcat-pagination-bg);\n    box-shadow: 0px -6px 16px 0px var(--zcat-shadow-bg-secondary);\n}\nzcat-table .zcat-pagination-wraper{\n    margin-top: -3px;\n    border: 1px solid var(--zcat-table-border-default);\n    position: relative;\n    z-index: 2;\n}\nzcat-table .zcat-pagination-wraper.borderless-table{\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n}\n.zcat-pagination-page-list{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-icon-wraper{\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.zcat-pagination-icon-wraper:hover{\n    cursor: pointer;\n    background: var(--zcat-btn-grey-bg-hover);\n}\n.lyteDisabled.zcat-pagination-icon-wraper{\n    cursor: not-allowed;\n    background: none;\n}\n.zcat-pagination-icon-color{\n  stroke: var(--zcat-body-icons-static-primary);\n}\n.lyteDisabled.zcat-pagination-icon-disabled-color{\n    stroke: var(--zcat-body-icons-static-disabled);\n}\n.zcat-pagination-result-wraper,.zcat-pagination-dropdown-text{\n    font: var(--zcat-font-12-16) var(--zcat-font-family-primary);\n    font-weight: 400;\n}\n.zcat-pagination-result-text{\n    color: var(--zcat-pagination-text-tertiary);\n}\n.zcat-pagination-result-count{\n    color: var(--zcat-pagination-text-primary);\n}\n.zcat-pagination-result-total{\n    color: var(--zcat-pagination-text-secondary);\n}\n.zcat-pagination-divider{\n    height: 20px;\n    width: 1px;\n    background: var(--zcat-pagination-divider);\n}\n.zcat-pagination-dropdown-text{\n    color: var(--zcat-pagination-text-tertiary);\n}</style>";;
ZcatPagination._dynamicNodes = [{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1,3,1,0]},{"t":"tX","p":[1,1,3,1,2]},{"t":"tX","p":[1,1,3,3,1]},{"t":"a","p":[1,3,1,3]},{"t":"cD","p":[1,3,1,3],"in":2,"sibl":[1]},{"t":"a","p":[1,3,5,1]},{"t":"cD","p":[1,3,5,1,1],"in":1,"sibl":[0]},{"t":"tX","p":[1,3,5,3,1]},{"t":"tX","p":[1,3,5,3,3]},{"t":"a","p":[1,3,5,5]},{"t":"cD","p":[1,3,5,5,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ZcatPagination._observedAttributes = ["self", "zcatProp", "paginationDropdownStyles"];
export {ZcatPagination};
ZcatPagination.register("zcat-pagination", {
    hash: "ZcatPagination_4",
    refHash: "C_zcat-app_app_0"
}); 

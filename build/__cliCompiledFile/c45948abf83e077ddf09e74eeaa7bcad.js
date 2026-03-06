import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-dropdown.js';
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatPagination extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }),
      currentPage: prop('number', { default: 1 }),
      rowsPerPage: prop('number', { default: 10 }),
      rowsDropdownProp: prop('object', { default: {} })
    }), arg1);
  }

  init() {
    this._syncState();
  }

  _syncState() {
    let zcatProp = this.getData('zcatProp');
    if (!zcatProp) return;
    if (zcatProp.currentPage) this.setData('currentPage', zcatProp.currentPage);
    if (zcatProp.rowsPerPage) this.setData('rowsPerPage', zcatProp.rowsPerPage);
    this._buildRowsDropdown();
  }

  _buildRowsDropdown() {
    let rpp = this.getData('rowsPerPage');
    let options = [5, 10, 25, 50, 100].map(n => ({
      name: String(n), value: String(n), selected: n === rpp
    }));
    this.setData('rowsDropdownProp', {
      options: options,
      selected: String(rpp),
      size: 'small',
      callback: { name: 'onRowsPerPageChange' }
    });
  }

  _getTotalPages() {
    let zcatProp = this.getData('zcatProp');
    let total = zcatProp && zcatProp.totalRecords ? zcatProp.totalRecords : 0;
    let perPage = this.getData('rowsPerPage');
    return Math.max(1, Math.ceil(total / perPage));
  }

  _fireCallback(page) {
    let self = this.getData('self');
    let zcatProp = this.getData('zcatProp');
    if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
      self.executeMethod(zcatProp.callback.name, page, this.getData('rowsPerPage'), zcatProp);
    }
  }

  static methods(arg1) {
    return Object.assign(super.methods({}), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      goToFirst() {
        this.setData('currentPage', 1);
        this._fireCallback(1);
      },
      goToPrev() {
        let page = Math.max(1, this.getData('currentPage') - 1);
        this.setData('currentPage', page);
        this._fireCallback(page);
      },
      goToNext() {
        let total = this._getTotalPages();
        let page = Math.min(total, this.getData('currentPage') + 1);
        this.setData('currentPage', page);
        this._fireCallback(page);
      },
      goToLast() {
        let total = this._getTotalPages();
        this.setData('currentPage', total);
        this._fireCallback(total);
      },
      changeRowsPerPage(event) {
        let val = parseInt(event && event.target ? event.target.value : '10', 10);
        this.setData('rowsPerPage', val);
        this.setData('currentPage', 1);
        this._buildRowsDropdown();
        this._fireCallback(1);
      },
      onRowsPerPageChange(val) {
        let numVal = parseInt(val, 10);
        if (!isNaN(numVal)) {
          this.setData('rowsPerPage', numVal);
          this.setData('currentPage', 1);
          this._buildRowsDropdown();
          this._fireCallback(1);
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

ZcatPagination._template = "<template tag-name=\"zcat-pagination\"> <div class=\"zcat-pagination {{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'?:','zcat-pagination-secondary','zcat-pagination-primary')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <!-- Left: Rows per page (primary variant) --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-pagination-left\"> <span class=\"zcat-pagination-label\">Rows per page:</span> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{rowsDropdownProp}}\"></zcat-dropdown> </div> </template></template> <!-- Center/Right: Page info + Navigation --> <div class=\"zcat-pagination-right\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'===','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-pagination-info\">{{expHandlers(zcatProp.totalRecords,'||',0)}} total records</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.variant,'!==','secondary')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-pagination-info\"> {{expHandlers(expHandlers(expHandlers(currentPage,'-',1),'*',rowsPerPage),'+',1)}} – {{expHandlers(expHandlers(expHandlers(currentPage,'*',rowsPerPage),'&gt;',expHandlers(zcatProp.totalRecords,'||',0)),'?:',expHandlers(zcatProp.totalRecords,'||',0),expHandlers(currentPage,'*',rowsPerPage))}} of {{expHandlers(zcatProp.totalRecords,'||',0)}} </span> </template></template> <div class=\"zcat-pagination-nav\"> <lyte-button class=\"zcat-pagination-btn\" onclick=\"{{action('goToFirst')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(currentPage,'<=',1),'?:','true','false')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"chevrons-left\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> <lyte-button class=\"zcat-pagination-btn\" onclick=\"{{action('goToPrev')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(currentPage,'<=',1),'?:','true','false')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"chevron-left\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> <lyte-button class=\"zcat-pagination-btn\" onclick=\"{{action('goToNext')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(expHandlers(currentPage,'*',rowsPerPage),'>=',expHandlers(zcatProp.totalRecords,'||',0)),'?:','true','false')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"chevron-right\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> <lyte-button class=\"zcat-pagination-btn\" onclick=\"{{action('goToLast')}}\" lt-prop-disabled=\"{{expHandlers(expHandlers(expHandlers(currentPage,'*',rowsPerPage),'>=',expHandlers(zcatProp.totalRecords,'||',0)),'?:','true','false')}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"chevrons-right\" width=\"14\" height=\"14\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> </div> </div> </div> </template><style>/* ==============================\n   ZCAT Pagination Component\n   ============================== */\n\nzcat-pagination * {\n  box-sizing: border-box;\n}\n\n/* --- Container --- */\n.zcat-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  font-family: var(--zcat-font-family-primary);\n  background: var(--zcat-pagination-bg);\n  border: 1px solid var(--zcat-pagination-divider);\n  border-radius: 8px;\n  gap: 16px;\n}\n\n/* --- Left section --- */\n.zcat-pagination-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.zcat-pagination-label {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-secondary);\n  white-space: nowrap;\n}\n.zcat-pagination-select {\n  padding: 4px 8px;\n  border: 1px solid var(--zcat-pagination-divider);\n  border-radius: 4px;\n  background: var(--zcat-pagination-bg);\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-primary);\n  cursor: pointer;\n  outline: none;\n}\n.zcat-pagination-select:focus {\n  border-color: var(--zcat-pagination-theme);\n}\n\n/* --- Right section --- */\n.zcat-pagination-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.zcat-pagination-info {\n  font: 400 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-pagination-text-secondary);\n  white-space: nowrap;\n}\n\n/* --- Navigation buttons --- */\n.zcat-pagination-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.zcat-pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 1px solid var(--zcat-pagination-divider);\n  background: var(--zcat-pagination-bg);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--zcat-pagination-text-primary);\n  transition: background 0.12s, border-color 0.12s;\n}\n.zcat-pagination-btn:hover:not(:disabled) {\n  background: var(--zcat-btn-grey-bg-hover);\n  border-color: var(--zcat-pagination-theme);\n}\n.zcat-pagination-btn:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n\n/* --- Secondary variant (simple) --- */\n.zcat-pagination-secondary {\n  justify-content: flex-end;\n  border: none;\n  padding: 10px 0;\n  background: transparent;\n}\n</style>";;
ZcatPagination._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"cD","p":[1,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"s","p":[1,7,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":9,"sibl":[8]},{"t":"s","p":[1,7,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3],"cn":"lc_id_0"},{"t":"tX","p":[1,5],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":8,"sibl":[7]},{"t":"a","p":[1,7,5,1]},{"t":"r","p":[1,7,5,1,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"cD","p":[1,7,5,1],"in":6,"sibl":[5]},{"t":"a","p":[1,7,5,3]},{"t":"r","p":[1,7,5,3,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,7,5,3],"in":4,"sibl":[3]},{"t":"a","p":[1,7,5,5]},{"t":"r","p":[1,7,5,5,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"cD","p":[1,7,5,5],"in":2,"sibl":[1]},{"t":"a","p":[1,7,5,7]},{"t":"r","p":[1,7,5,7,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,7,5,7],"in":0},{"type":"dc","trans":true,"hc":true,"p":[10,7,6,5,4,3,2,1,0]}];;
ZcatPagination._observedAttributes = ["self", "zcatProp", "currentPage", "rowsPerPage", "rowsDropdownProp"];
export { ZcatPagination };
ZcatPagination.register("zcat-pagination", {
  hash: "ZcatPagination_2",
  refHash: "C_zcat-app_app_0"
});

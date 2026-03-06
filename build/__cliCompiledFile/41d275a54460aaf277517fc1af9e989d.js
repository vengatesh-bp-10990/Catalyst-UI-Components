import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatTable extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({
      self: prop('object'),
      zcatProp: prop('object', { default: {} }),
      selectedRows: prop('array', { default: [] }),
      selectAll: prop('boolean', { default: false }),
      sortColumn: prop('string', { default: '' }),
      sortDirection: prop('string', { default: 'asc' }),
      _bodyRows: prop('array', { default: [] })
    }), arg1);
  }

  init() {
    this._buildBodyRows();
  }

  _buildBodyRows() {
    let zcatProp = this.getData('zcatProp') || {};
    let body = zcatProp.body || [];
    let selectedRows = this.getData('selectedRows') || [];
    let rows = [];
    for (let i = 0; i < body.length; i++) {
      let isSelected = selectedRows.indexOf(i) > -1;
      let rowObj = { _rowIdx: i, _selectedClass: isSelected ? 'zcat-table-row-selected' : '', _isChecked: isSelected };
      // Copy all original row data properties
      let keys = Object.keys(body[i]);
      for (let k = 0; k < keys.length; k++) {
        rowObj[keys[k]] = body[i][keys[k]];
      }
      rows.push(rowObj);
    }
    this.setData('_bodyRows', rows);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      toggleSelectAll(event, lyteElement) {
        let selectAll = lyteElement.getData('checked');
        this.setData('selectAll', selectAll);

        let zcatProp = this.getData('zcatProp');
        let body = zcatProp && zcatProp.body ? zcatProp.body : [];
        if (selectAll) {
          this.setData('selectedRows', body.map(function(_, i) { return i; }));
        } else {
          this.setData('selectedRows', []);
        }
        this._buildBodyRows();

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSelect) {
          self.executeMethod(zcatProp.onSelect, this.getData('selectedRows'), zcatProp);
        }
      },

      toggleRowSelect(event, lyteElement) {
        let rowIdx = parseInt(lyteElement.getAttribute('data-row-idx'), 10);
        let newChecked = lyteElement.getData('checked');
        let selected = this.getData('selectedRows').slice();
        if (newChecked) {
          if (selected.indexOf(rowIdx) === -1) selected.push(rowIdx);
        } else {
          let i = selected.indexOf(rowIdx);
          if (i > -1) selected.splice(i, 1);
        }
        this.setData('selectedRows', selected);

        let zcatProp = this.getData('zcatProp');
        let body = zcatProp && zcatProp.body ? zcatProp.body : [];
        this.setData('selectAll', selected.length === body.length);
        this._buildBodyRows();

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSelect) {
          self.executeMethod(zcatProp.onSelect, selected, zcatProp);
        }
      }
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      sortBy(col) {
        let zcatProp = this.getData('zcatProp');
        if (!col.sortable) return;

        let direction = this.getData('sortDirection');
        let currentCol = this.getData('sortColumn');

        if (currentCol === col.value) {
          direction = direction === 'asc' ? 'desc' : 'asc';
        } else {
          direction = 'asc';
        }

        this.setData('sortColumn', col.value);
        this.setData('sortDirection', direction);

        let self = this.getData('self');
        if (self && zcatProp && zcatProp.onSort) {
          self.executeMethod(zcatProp.onSort, col.value, direction, zcatProp);
        }
      },

      onRowClick(row, index) {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onRowClick) {
          self.executeMethod(zcatProp.onRowClick, row, index, zcatProp);
        }
      },

      onMoreClick(row, index, event) {
        if (event) event.stopPropagation();
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.onMoreClick) {
          self.executeMethod(zcatProp.onMoreClick, row, index, event, zcatProp);
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

ZcatTable._template = "<template tag-name=\"zcat-table\"> <div class=\"zcat-table-wrapper {{expHandlers(zcatProp.bordered,'?:','zcat-table-bordered','')}} {{expHandlers(zcatProp.striped,'?:','zcat-table-striped','')}} {{expHandlers(zcatProp.compact,'?:','zcat-table-compact','')}} {{expHandlers(zcatProp.classCss,'||','')}}\"> <table class=\"zcat-table\"> <!-- Table Head --> <thead class=\"zcat-table-head\"> <tr> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> <td is=\"for\" lyte-for=\"true\" items=\"{{zcatProp.header}}\" item=\"col\" index=\"colIdx\" _new=\"true\" depth=\"3\"></td> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> </tr> </thead> <!-- Table Body --> <tbody class=\"zcat-table-body\"> <tr is=\"for\" lyte-for=\"true\" items=\"{{_bodyRows}}\" item=\"row\" index=\"rowIdx\" _new=\"true\" depth=\"2\"></tr> </tbody> </table> <!-- Empty state --> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(zcatProp.body,'!'),'||',expHandlers(zcatProp.body.length,'===',0))}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"zcat-table-empty\"> <p>No data available</p> </div> </template></template> </div> </template><style>/* ==============================\n   ZCAT Table Component\n   ============================== */\n\nzcat-table * {\n  box-sizing: border-box;\n}\n\n/* --- Wrapper --- */\n.zcat-table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n  font-family: var(--zcat-font-family-primary);\n  border: 1px solid var(--zcat-table-border-default);\n  border-radius: 8px;\n}\n\n/* --- Table --- */\n.zcat-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: auto;\n}\n\n/* --- Table Head --- */\n.zcat-table-head {\n  background: var(--zcat-table-bg-header);\n}\n.zcat-table-th {\n  font: 600 13px/18px var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-secondary);\n  text-align: left;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  white-space: nowrap;\n  user-select: none;\n}\n.zcat-table-th-inner {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.zcat-table-th-label {\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\n\n/* --- Sortable columns --- */\n.zcat-table-sortable {\n  cursor: pointer;\n}\n.zcat-table-sortable:hover {\n  color: var(--zcat-table-text-primary);\n}\n.zcat-table-sort-icon {\n  display: inline-flex;\n  opacity: 0.4;\n  transition: opacity 0.15s, transform 0.15s;\n}\n.zcat-table-sorted .zcat-table-sort-icon {\n  opacity: 1;\n  color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-sort-desc {\n  transform: rotate(180deg);\n}\n\n/* --- Table Body --- */\n.zcat-table-row {\n  background: var(--zcat-table-bg-row);\n  transition: background 0.12s;\n  cursor: default;\n}\n.zcat-table-row:hover {\n  background: var(--zcat-table-bg-rowHover);\n}\n.zcat-table-row-selected {\n  background: var(--zcat-table-bg-rowSelected);\n}\n.zcat-table-row-selected:hover {\n  background: var(--zcat-table-bg-rowSelected);\n}\n.zcat-table-td {\n  font: 400 14px/20px var(--zcat-font-family-primary);\n  color: var(--zcat-table-text-primary);\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--zcat-table-border-default);\n  vertical-align: middle;\n}\n.zcat-table-row:last-child .zcat-table-td {\n  border-bottom: none;\n}\n\n/* --- Checkbox column --- */\n.zcat-table-th-check,\n.zcat-table-td-check {\n  text-align: center;\n}\n.zcat-table-check-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  width: 16px;\n  height: 16px;\n}\n.zcat-table-checkbox {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.zcat-table-checkmark {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 1.5px solid var(--zcat-table-border-default);\n  border-radius: 3px;\n  background: var(--zcat-table-bg-row);\n  transition: background 0.15s, border-color 0.15s;\n  position: relative;\n}\n.zcat-table-checkbox:checked + .zcat-table-checkmark {\n  background: var(--zcat-btn-fill-bg-primary-default);\n  border-color: var(--zcat-btn-fill-bg-primary-default);\n}\n.zcat-table-checkbox:checked + .zcat-table-checkmark::after {\n  content: '';\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  width: 5px;\n  height: 9px;\n  border: solid var(--zcat-white);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n/* --- Status cells --- */\n.zcat-table-status {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n.zcat-table-status-success {\n  background: var(--zcat-green-4);\n  color: var(--zcat-green-1);\n}\n.zcat-table-status-warning {\n  background: var(--zcat-orange-4);\n  color: var(--zcat-orange-1);\n}\n.zcat-table-status-danger {\n  background: var(--zcat-red-4);\n  color: var(--zcat-red-1);\n}\n.zcat-table-status-info {\n  background: var(--zcat-blue-4);\n  color: var(--zcat-blue-1);\n}\n.zcat-table-status-default {\n  background: var(--zcat-grey-3);\n  color: var(--zcat-dark-2);\n}\n\n/* --- More options button --- */\n.zcat-table-td-more {\n  text-align: center;\n}\n.zcat-table-more-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  background: var(--zcat-table-threeDot-iconBg);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--zcat-table-threeDot-icon);\n  transition: background 0.15s;\n}\n.zcat-table-more-btn:hover {\n  background: var(--zcat-table-threeDot-iconBg-hover);\n}\n\n/* --- Empty state --- */\n.zcat-table-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--zcat-table-text-light);\n  font: 400 14px/20px var(--zcat-font-family-primary);\n}\n\n/* --- Bordered variant --- */\n.zcat-table-bordered .zcat-table-th,\n.zcat-table-bordered .zcat-table-td {\n  border-right: 1px solid var(--zcat-table-border-default);\n}\n.zcat-table-bordered .zcat-table-th:last-child,\n.zcat-table-bordered .zcat-table-td:last-child {\n  border-right: none;\n}\n\n/* --- Striped variant --- */\n.zcat-table-striped .zcat-table-row:nth-child(even) {\n  background: var(--zcat-table-bg-header);\n}\n.zcat-table-striped .zcat-table-row:nth-child(even):hover {\n  background: var(--zcat-table-bg-rowHover);\n}\n\n/* --- Compact variant --- */\n.zcat-table-compact .zcat-table-th { padding: 6px 10px; }\n.zcat-table-compact .zcat-table-td { padding: 6px 10px; font-size: 13px; }\n</style>";;
ZcatTable._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1,3,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.checkbox}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <th class=\"zcat-table-th zcat-table-th-check\" style=\"width:40px\"> <div class=\"zcat-table-check-wrap\"> <lyte-checkbox class=\"zcat-table-checkbox\" lt-prop-type=\"default\" lt-prop-checked=\"{{selectAll}}\" on-changed=\"{{method('toggleSelectAll')}}\"></lyte-checkbox> </div> </th> </tr></tbody></table></template></template>","in":4,"sibl":[3]},{"t":"a","p":[1,1,3,1,3]},{"t":"f","p":[1,1,3,1,3],"dN":[{"t":"a","p":[0],"a":{"style":{"name":"style","helperInfo":{"name":"expHandlers","args":["col.width","'?:'",null,"''"]}}}},{"t":"tX","p":[0,1,1,0]},{"t":"s","p":[0,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"actualTemplate":"<template is=\"for\" depth=\"3\"><table><tbody><tr><th class=\"zcat-table-th {{expHandlers(col.sortable,'?:','zcat-table-sortable','')}} {{expHandlers(expHandlers(sortColumn,'===',col.value),'?:','zcat-table-sorted','')}}\" onclick=\"{{action('sortBy',col)}}\" style=\"{{expHandlers(col.width,'?:',expHandlers('width:','+',col.width),'')}}\"> <div class=\"zcat-table-th-inner\"> <span class=\"zcat-table-th-label\">{{col.label}}</span> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{col.sortable}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-table-sort-icon {{expHandlers(expHandlers(expHandlers(sortColumn,'===',col.value),'&amp;&amp;',expHandlers(sortDirection,'===','desc')),'?:','zcat-sort-desc','')}}\"> <zcat-icon name=\"chevron-up\" width=\"12\" height=\"12\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </span> </template></template> </div> </th></tr></tbody></table></template>","tagName":"TR","in":3,"sibl":[2]},{"t":"s","p":[1,1,3,1,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.moreOptions}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <th class=\"zcat-table-th\" style=\"width:48px\"></th> </tr></tbody></table></template></template>","in":2,"sibl":[1]},{"t":"a","p":[1,1,7,1]},{"t":"f","p":[1,1,7,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.checkbox}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <td class=\"zcat-table-td zcat-table-td-check\"> <div class=\"zcat-table-check-wrap\" onclick=\"event.stopPropagation()\"> <lyte-checkbox class=\"zcat-table-checkbox\" lt-prop-type=\"default\" lt-prop-checked=\"{{row._isChecked}}\" data-row-idx=\"{{row._rowIdx}}\" on-changed=\"{{method('toggleRowSelect')}}\"></lyte-checkbox> </div> </td> </tr></tbody></table></template></template>","in":2,"sibl":[1]},{"t":"a","p":[0,3]},{"t":"f","p":[0,3],"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0]},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}],"actualTemplate":"<template is=\"for\" depth=\"3\"><table><tbody><tr><td class=\"zcat-table-td\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(col.field_type,'===','status')}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"zcat-table-status zcat-table-status-{{expHandlers(row[expHandlers(col.value,'+','_status')],'||','default')}}\">{{row[col.value]}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(col.field_type,'!==','status')}}\" is=\"case\" lc-id=\"lc_id_0\"> {{row[col.value]}} </template></template> </td></tr></tbody></table></template>","tagName":"TR","in":1,"sibl":[0]},{"t":"s","p":[0,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"r","p":[1,1,1],"dN":[{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"actualTemplate":"<template is=\"switch\"><template case=\"{{zcatProp.moreOptions}}\" is=\"case\" lc-id=\"lc_id_0\" depth=\"3\"><table><tbody><tr> <td class=\"zcat-table-td zcat-table-td-more\"> <lyte-button class=\"zcat-table-more-btn\" onclick=\"{{action('onMoreClick',row,rowIdx,event)}}\"> <template is=\"registerYield\" yield-name=\"text\"> <zcat-icon name=\"more-vertical\" width=\"16\" height=\"16\" stroke=\"currentColor\" stroke-width=\"2\"></zcat-icon> </template> </lyte-button> </td> </tr></tbody></table></template></template>","in":0}],"dc":[2,0],"hc":true,"trans":true,"actualTemplate":"<template is=\"for\" depth=\"2\"><table><tbody><tr class=\"zcat-table-row {{row._selectedClass}}\" onclick=\"{{action('onRowClick',row,row._rowIdx)}}\"> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> <td is=\"for\" lyte-for=\"true\" items=\"{{zcatProp.header}}\" item=\"col\" index=\"colIdx\" _new=\"true\" depth=\"3\"></td> <td is=\"switch\" lyte-switch=\"true\" l-c=\"true\" _new=\"true\"></td> </tr></tbody></table></template>","tagName":"TBODY","in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0},{"type":"dc","trans":true,"hc":true,"p":[4,3,1]}];;

ZcatTable._observedAttributes = [
  "self",
  "zcatProp",
  "selectedRows",
  "selectAll",
  "sortColumn",
  "sortDirection",
  "_bodyRows"
];

export { ZcatTable };
ZcatTable.register("zcat-table", {
  hash: "ZcatTable_2",
  refHash: "C_zcat-app_app_0"
});

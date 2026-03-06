import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-button.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-checkbox.js";
import './zcat-radio.js';
import './zcat-avatar.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-text.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-menu.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-table.js";
import './zcat-dropdown.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-svg.js";
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-navigator.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatTable extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    const tableHeader = [
      { label: 'Job Name', value: 'job_name'},
      { label: 'job Id', value: 'job_id' },
      { label: 'submitted time', value: 'submitted_time' },
      { label: 'dis', value: 'dispatch_delay'},
      { label: 'status', value: 'statusTd'},
      { label: 'source', value: 'source_type' },
      { label: 'source', value: 'source' },
      { label: 'jobpool', value: 'jobpool_name' }
    ];
    const tableBody = [
      {
        job_name: 'Dhinakar',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      },
      {
        job_name: 'fdvfd',
        job_id: '16650000000105006',
        submitted_time: 'Jul 01, 2024 03:42 PM IST',
        dispatch_delay: '78 ms',
        statusTd: 'success',
        source_type: 'API',
        source: 'API',
        jobpool_name: 'web'
      }
    ];
    const defaultProp = {
      id: '',
      style: '',
      class: '',
      checkboxOptions: [
        {
          label: ''
        }
      ],
      isAllCheckboxSelected: false,
      selectedCheckboxRowList: [],
      moreOptions: {
        callback: {
          name: ''
        },
        list: [
          {
            label: '',
            callback: {
              name: '',
              arguments: []
            },
            icon: {
              position: '',
              name: '',
              class: ''
            }
          }
        ]
      },
      header: [],
      body: [],
      rowOnclick: {
        methodName: ''
      },
      pagination: {
        page: '1',
        perPage: '50',
        freeze: false,
        hasNext: false,
        totalCount: ''
      }
    };

    return Object.assign(super.data({
      // tablePaginationDropdownSelected:prop('number',{default: '10'}),
      self: prop('object'),
      zcatProp: prop('object'),
      activeMenuIndex: prop('number', { default: -1 }),
      checkedList: prop('array',{default:[]}),
      isAllRowCheckBoxSelect: prop('boolean'),
      isNotAllRowChecked: prop('boolean'),
      tablePaginationDropdownStyles: prop( "object", {
				default: {
					"id": "dropdown-id",
					"placeholder": "Select Option",
					"size": "extra-small",
					"width": "zcat-w-fc",
					"variant": "ghost",
					"selected": "10",
					"onChange": "tablePaginationChangeMethod",
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
			}),

        tableBtnStyles:prop('object', {default: {"label": "Button",
        "variant": "ghost",
        "size": "default",
        "disabled": false, "splitdisabled": undefined, "arrowdisabled": "",
        "loading": false, "color": "primary",
        "type": "",
        "icon": {}, "menu": {}, "callback": {"name": ""}}}),
        tableStatusObj:prop("object", {default: {"label": "Success",
        "color": "green",
        "size": "dot",
        "varient": "secondary"}}),
        tableLabelObj:prop("object",{default:{"label": "Success",
          "color": "green",
          "size": "default",
          "varient": "secondary"}}),
        tableLinkButtonObj:prop('object', {default: {"label": "Link",
        "size": "default",
        "disabled": undefined, "icon": {}, "route": "https://www.google.com"}}),
        tableToggleDetails:prop('object',{default:{type: 'switch',
          checked: 'false',
          disabled: '',
          tabindex: '0',
          label: '',
          class: '',
          variant: 'primary',
          desc: ''}}),
        tableRadioDetails:prop('object',{default: {variant: 'primary',
            selected: '',
            name: 'radiobutton_1',
            list: [{label: 'Radio Button',
            value: 'radio_btn',
            desc: '',
            // for secondary variant && icon class only for variant card
            disabled: 'false'
            }]}}),
         tableRadioDetails1:prop('object',{default: {variant: 'primary',
            selected: '',
            name: 'radiobutton_2',
            list: [{label: 'Radio Button',
            value: 'radio_btn',
            desc: '',
            // for secondary variant && icon class only for variant card
            disabled: 'false'
            }]}}),
          tableRadioDetails2:prop('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_3',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails3:prop('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_4',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails4:prop('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_5',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),
          tableRadioDetails5:prop('object',{default: {variant: 'primary',
          selected: '',
          name: 'radiobutton_6',
          list: [{label: 'Radio Button',
          value: 'radio_btn',
          desc: '',
          // for secondary variant && icon class only for variant card
          disabled: 'false'
          }]}}),

        tableinputObj:prop("object",{default: {"id": "input-id",
          "placeholder": "Enter a text",
          "width": "300px",
          "type": "text",
          // number, text, time, date, textarea, datetime, password			
          "size": "small",
          "label": "",
          "iconLeft": {}, "iconRight": {}, "disabled": "",
          "errorMessage": "",
          "infoIcon": {}
        }}),
        tableAvatarDetails:prop('object', {default: {avatar_img: "img",
          avatar_size: "medium",
          disabled: false
        }})
    }), arg1);
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      tablePaginationChangeMethod(value) {
        // update the selected value
        this.setData('tablePaginationDropdownSelected', value);

        // optional: sync with zcatProp if needed
        let zcatProp = this.getData('zcatProp');
        if (zcatProp) {
          zcatProp.paginationSize = value;
          this.setData('zcatProp', zcatProp);
        }
      },

      async onScrollEnd() {
        if (this._methods.onScrollEnd !== undefined) {
          const self = this.getData('self');
          const methodName = this.getData('zcatProp.onScrollEnd');
          if (methodName) {
            const list = await self.executeMethod(methodName).then((list) => {
              if (!list) {
                return list;
              }
            });
            return list;
          }
        }
      },
      tableToolkitClose() {
        this.setData('activeMenuIndex', -1);
      },

     selectAllOrUnSelectAllObjectRow(rowData, checkBox) {
        const isChecked = checkBox.checked;
        const testrowData = this.getData('zcatProp.body');

        if (isChecked) {
          // ✅ Select all rows
          testrowData.forEach(item => {
            item.isAllRowSelect = true;
          });

          this.setData({
            'checkedList': [...testrowData],
            'isAllRowCheckBoxSelect': true,
            'isNotAllRowChecked': false
          });

        } else {
          // ❌ Deselect all
          testrowData.forEach(item => {
            item.isAllRowSelect = false;
          });

          this.setData({
            'checkedList': [],
            'isAllRowCheckBoxSelect': false,
            'isNotAllRowChecked': false
          });
        }

        // reassign body so bindings update
        this.setData('zcatProp.body', [...testrowData]);
      },

      selectOrUnselectObjectRow(checkboxTableBody, checkBox) {
          const isChecked = checkBox.checked;
          const testrowData = this.getData('zcatProp.body');
          const testcheckedList = this.getData('checkedList');

          if (isChecked) {
            this.$addon.arrayUtils(testcheckedList, 'push', checkboxTableBody);
            checkboxTableBody.isAllRowSelect = true;
          } else {
            let itemIndex = testcheckedList.findIndex((item) => item.id === checkboxTableBody.id);
            this.$addon.arrayUtils(testcheckedList, 'removeAt', itemIndex, 1);
            checkboxTableBody.isAllRowSelect = false;
          }

          // update header checkbox state
          if (testrowData.length === testcheckedList.length) {
            this.setData({
              'isAllRowCheckBoxSelect': true,
              'isNotAllRowChecked': false
            });
          } else if (testcheckedList.length > 0) {
            this.setData({
              'isAllRowCheckBoxSelect': false,
              'isNotAllRowChecked': true
            });
          } else {
            this.setData({
              'checkedList': [],
              'isAllRowCheckBoxSelect': false,
              'isNotAllRowChecked': false
            });
          }

          // reassign body to refresh bindings
          this.setData('zcatProp.body', [...testrowData]);
        },




    //   selectOrUnselectObjectRow(checkboxTableBody,checkBox) {
    //     const isChecked = checkBox.checked;
    //     const testrowData = this.getData('zcatProp.body');
    //     const testcheckedList = this.getData('checkedList');
    //       if (isChecked) {
    //         this.$addon.arrayUtils(testcheckedList, 'push', checkboxTableBody);
    //       } else{
    //         let itemIndex = testcheckedList.findIndex((item) => item.id === checkboxTableBody.id);
    //         this.$addon.arrayUtils(testcheckedList, 'removeAt', itemIndex, 1)
    //       }
          
    //       // console.log(testcheckedList)

    //       if(testrowData.length === testcheckedList.length){
    //         this.setData({
    //             'isAllRowCheckBoxSelect': true,
    //             'isNotAllRowChecked': false
    //         })
    //       }else if (testcheckedList.length > 0){
    //         this.setData({
    //             'isAllRowCheckBoxSelect': false,
    //             'isNotAllRowChecked': true
    //         })
    //       }else{
    //         this.setData({
    //           'checkedList': [],
    //           'isAllRowCheckBoxSelect': false,
    //           'isNotAllRowChecked': false,
    //           'isAllRowSelect': false
    //         })
    //       }
    //   console.log("Checked List:", this.getData('checkedList'));
    // },
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
    },
    async customLbindForRadioButton(methodName, value) {
				const self = this.getData('self');
				if (value) {
					const prop = this.getData('zcatProp');
					this.$addon.objectUtils(prop, 'add', 'selected', value);
					if (prop.key) {
					self.setData(prop.key, value);
					}
				}
		
				if (methodName) {
				  await self.executeMethod(
					methodName,
					...Array.prototype.slice.call(arguments, 2)
				  );
				}
			}
    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({
      async tableRowOnClick(event, record) {
        const self = this.getData('self');
        const methodName = this.getData('zcatProp.rowOnclick.methodName');

        if (methodName) {
          await self.executeMethod(methodName, record, event);
        }
      },
      async tableToolkitOpen(index, tableData, zcatProp) {
        event.preventDefault();
        event.stopPropagation();
        this.setData('activeMenuIndex', index);

        const methodName = this.getData('zcatProp.moreOptions.callback.name');
        if (methodName) {
          const self = this.getData('self');
          await self.executeMethod(methodName, tableData, zcatProp);
        }
      },
      async tableMoreOptionCallback(record, data) {
        const self = this.getData('self');
        const methodName = record.callback.name;

        if (methodName) {
          await self.executeMethod(methodName, data);
        }
      },
      sortColumn(columnKey) {
        let bodyData = [...this.getData('zcatProp.body')];
        const currentSort = this.getData('currentSort') || {};
      
        let direction = 'asc';
        if (currentSort.key === columnKey && currentSort.direction === 'asc') {
          direction = 'desc';
        }
      
        bodyData.sort((a, b) => {
          const valA = a[columnKey] || '';
          const valB = b[columnKey] || '';
          return direction === 'asc'
            ? valA.toString().localeCompare(valB.toString())
            : valB.toString().localeCompare(valA.toString());
        });
      
        // ✅ Use setData if $app is undefined
        this.setData('zcatProp.body', bodyData);
        this.setData('currentSort', { key: columnKey, direction });
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

ZcatTable._template = "<template tag-name=\"zcat-table\"> <div class=\"zcat-dN\"> <svg id=\"zcat-icon-three-dots\" viewBox=\"0 0 14 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> <circle cx=\"7\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> <circle cx=\"12\" cy=\"2\" r=\"1\" fill=\"var(--zcat-table-threeDot-icon)\" stroke=\"var(--zcat-table-threeDot-icon)\"></circle> </svg> <svg id=\"zcat-icon-edit\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"none\"> <g clip-path=\"url(#clip0_1465_21523)\"> <path d=\"M7.33337 2.66666H4.53337C3.41327 2.66666 2.85322 2.66666 2.42539 2.88464C2.04907 3.07639 1.74311 3.38235 1.55136 3.75867C1.33337 4.1865 1.33337 4.74655 1.33337 5.86666V11.4667C1.33337 12.5868 1.33337 13.1468 1.55136 13.5746C1.74311 13.951 2.04907 14.2569 2.42539 14.4487C2.85322 14.6667 3.41327 14.6667 4.53337 14.6667H10.1334C11.2535 14.6667 11.8135 14.6667 12.2414 14.4487C12.6177 14.2569 12.9236 13.951 13.1154 13.5746C13.3334 13.1468 13.3334 12.5868 13.3334 11.4667V8.66666M5.33336 10.6667H6.44972C6.77584 10.6667 6.9389 10.6667 7.09235 10.6298C7.2284 10.5972 7.35846 10.5433 7.47775 10.4702C7.61231 10.3877 7.72761 10.2724 7.95821 10.0418L14.3334 3.66666C14.8857 3.11437 14.8857 2.21894 14.3334 1.66666C13.7811 1.11437 12.8857 1.11437 12.3334 1.66665L5.9582 8.04182C5.72759 8.27242 5.61229 8.38772 5.52984 8.52228C5.45673 8.64157 5.40286 8.77163 5.3702 8.90768C5.33336 9.06113 5.33336 9.22419 5.33336 9.55031V10.6667Z\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_1465_21523\"> <rect width=\"16\" height=\"16\" fill=\"white\"></rect> </clipPath> </defs> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-left-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M8.75 10.5L5.25 7L8.75 3.5\" stroke=\"inherit\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-right-arrow\" viewBox=\"0 0 14 14\" fill=\"none\"> <path d=\"M5.25 10.5L8.75 7L5.25 3.5\" stroke=\"var(--zcat-body-icons-static-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-sort\" viewBox=\"0 0 17 16\" fill=\"none\"> <path d=\"M8.16666 13.3333V2.66663M8.16666 2.66663L4.16666 6.66663M8.16666 2.66663L12.1667 6.66663\" stroke=\"var(--zcat-table-icon-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-sparcle\" viewBox=\"0 0 30 34\" fill=\"none\"> <path d=\"M6.11954 27.5616C5.94283 27.5616 5.77027 27.508 5.62463 27.4079C5.47899 27.3078 5.36709 27.1659 5.30369 27.001L4.0556 23.7567C4.03365 23.6995 3.99992 23.6476 3.95662 23.6043C3.91332 23.561 3.8614 23.5273 3.80423 23.5053L0.559957 22.2572C0.395133 22.1937 0.253411 22.0818 0.153456 21.9361C0.0535004 21.7905 0 21.618 0 21.4414C0 21.2647 0.0535004 21.0922 0.153456 20.9466C0.253411 20.801 0.395133 20.689 0.559957 20.6255L3.80423 19.3774C3.8614 19.3555 3.91332 19.3218 3.95662 19.2785C3.99992 19.2351 4.03365 19.1832 4.0556 19.1261L5.2944 15.9047C5.35096 15.7524 5.44774 15.6182 5.57447 15.5165C5.70119 15.4148 5.85312 15.3494 6.01408 15.3271C6.20749 15.3037 6.40318 15.3456 6.57009 15.4461C6.73701 15.5465 6.86557 15.6999 6.9354 15.8818L8.18349 19.1261C8.20544 19.1832 8.23917 19.2351 8.28247 19.2785C8.32577 19.3218 8.37769 19.3555 8.43486 19.3774L11.6791 20.6255C11.844 20.689 11.9857 20.801 12.0856 20.9466C12.1856 21.0922 12.2391 21.2647 12.2391 21.4414C12.2391 21.618 12.1856 21.7905 12.0856 21.9361C11.9857 22.0818 11.844 22.1937 11.6791 22.2572L8.43486 23.5053C8.37769 23.5273 8.32577 23.561 8.28247 23.6043C8.23917 23.6476 8.20544 23.6995 8.18349 23.7567L6.9354 27.001C6.872 27.1659 6.7601 27.3078 6.61446 27.4079C6.46882 27.508 6.29626 27.5616 6.11954 27.5616Z\" fill=\"var(--zcat-table-icon-primary)\"></path> <path d=\"M17.6235 20.986C17.3472 20.9874 17.0771 20.9044 16.8492 20.7482C16.6213 20.592 16.4465 20.3699 16.3481 20.1117L14.1711 14.4505C14.127 14.3364 14.0595 14.2328 13.973 14.1463C13.8866 14.0598 13.783 13.9924 13.6689 13.9483L8.00601 11.7696C7.74806 11.6706 7.52619 11.4957 7.36968 11.268C7.21318 11.0403 7.12939 10.7705 7.12939 10.4942C7.12939 10.2178 7.21318 9.94804 7.36968 9.72034C7.52619 9.49264 7.74806 9.31774 8.00601 9.21874L13.6672 7.04168C13.7813 6.99758 13.8849 6.93013 13.9714 6.84365C14.0579 6.75717 14.1253 6.65357 14.1694 6.53949L16.3481 0.87662C16.4471 0.618665 16.622 0.396792 16.8497 0.240287C17.0774 0.0837812 17.3472 0 17.6235 0C17.8998 0 18.1697 0.0837812 18.3974 0.240287C18.6251 0.396792 18.8 0.618665 18.899 0.87662L21.076 6.53785C21.1201 6.65193 21.1876 6.75553 21.274 6.84201C21.3605 6.92849 21.4641 6.99594 21.5782 7.04004L27.2066 9.20562C27.4751 9.30513 27.7064 9.48495 27.869 9.72059C28.0316 9.95624 28.1176 10.2363 28.1154 10.5226C28.1112 10.7941 28.0257 11.0581 27.8698 11.2804C27.7139 11.5027 27.4949 11.6731 27.2411 11.7696L21.5798 13.9466C21.4658 13.9907 21.3622 14.0582 21.2757 14.1447C21.1892 14.2311 21.1218 14.3347 21.0777 14.4488L18.899 20.1117C18.8006 20.3699 18.6258 20.592 18.3979 20.7482C18.17 20.9044 17.8999 20.9874 17.6235 20.986Z\" fill=\"var(--zcat-table-icon-primary)\"></path> <path d=\"M20.3316 33.0002C20.1696 33.0002 20.0114 32.9511 19.8779 32.8594C19.7443 32.7677 19.6417 32.6377 19.5835 32.4865L18.6622 30.0909C18.6422 30.0385 18.6114 29.9909 18.5718 29.9513C18.5321 29.9116 18.4845 29.8808 18.4321 29.8608L16.0365 28.9395C15.8853 28.8813 15.7554 28.7787 15.6637 28.6451C15.572 28.5116 15.5229 28.3534 15.5229 28.1914C15.5229 28.0294 15.572 27.8713 15.6637 27.7377C15.7554 27.6042 15.8853 27.5015 16.0365 27.4433L18.4321 26.522C18.4845 26.502 18.532 26.4711 18.5717 26.4315C18.6113 26.3918 18.6421 26.3443 18.6622 26.292L19.5753 23.9176C19.6268 23.7779 19.7154 23.6548 19.8316 23.5616C19.9479 23.4684 20.0873 23.4086 20.2349 23.3887C20.4121 23.3671 20.5915 23.4054 20.7445 23.4973C20.8976 23.5893 21.0155 23.7297 21.0797 23.8963L22.001 26.292C22.0211 26.3443 22.0519 26.3918 22.0916 26.4315C22.1312 26.4711 22.1787 26.502 22.2311 26.522L24.6267 27.4433C24.7779 27.5015 24.9079 27.6042 24.9995 27.7377C25.0912 27.8713 25.1403 28.0294 25.1403 28.1914C25.1403 28.3534 25.0912 28.5116 24.9995 28.6451C24.9079 28.7787 24.7779 28.8813 24.6267 28.9395L22.2311 29.8608C22.1787 29.8808 22.1311 29.9116 22.0915 29.9513C22.0518 29.9909 22.021 30.0385 22.001 30.0909L21.0797 32.4865C21.0215 32.6377 20.9189 32.7677 20.7853 32.8594C20.6518 32.9511 20.4936 33.0002 20.3316 33.0002Z\" fill=\"var(--zcat-table-icon-primary)\"></path> </svg> <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"zcat-icon-file\" viewBox=\"0 0 16 16\" fill=\"none\"> <path d=\"M9.33329 1.51303V4.26673C9.33329 4.64009 9.33329 4.82678 9.40595 4.96938C9.46987 5.09483 9.57186 5.19681 9.6973 5.26073C9.83991 5.33339 10.0266 5.33339 10.4 5.33339H13.1537M9.33329 11.3333H5.33329M10.6666 8.66668H5.33329M13.3333 6.65883V11.4667C13.3333 12.5868 13.3333 13.1468 13.1153 13.5747C12.9236 13.951 12.6176 14.2569 12.2413 14.4487C11.8134 14.6667 11.2534 14.6667 10.1333 14.6667H5.86663C4.74652 14.6667 4.18647 14.6667 3.75864 14.4487C3.38232 14.2569 3.07636 13.951 2.88461 13.5747C2.66663 13.1468 2.66663 12.5868 2.66663 11.4667V4.53334C2.66663 3.41324 2.66663 2.85319 2.88461 2.42536C3.07636 2.04904 3.38232 1.74308 3.75864 1.55133C4.18647 1.33334 4.74652 1.33334 5.86663 1.33334H8.00781C8.49699 1.33334 8.74158 1.33334 8.97176 1.3886C9.17583 1.4376 9.37092 1.51841 9.54986 1.62806C9.7517 1.75175 9.92465 1.9247 10.2706 2.2706L12.396 4.39608C12.7419 4.74199 12.9149 4.91494 13.0386 5.11677C13.1482 5.29572 13.229 5.49081 13.278 5.69488C13.3333 5.92506 13.3333 6.16965 13.3333 6.65883Z\" stroke=\"var(--zcat-table-icon-primary)\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg> </div> <lyte-table lt-prop-infinite-scroll=\"true\" scroll-end=\"{{method('onScrollEnd')}}\" lt-prop-content=\"{{zcatProp.body}}\" lt-prop-yield=\"true\" style=\"{{zcatProp.style}}\" class=\"{{expHandlers(zcatProp.rowOnclick.methodName,'?:','zcat-clickable-row','')}} {{zcatProp.class}} zcat-table\" lt-prop-scroll=\"{&quot;horizontal&quot;:{{zcatProp.scroll}},&quot;vertical&quot;:{{zcatProp.scroll}}}\" lt-prop-column-sortable=\"{{zcatProp.sorting}}\" lt-prop-prevent-table-modify=\"false\" lt-prop-prevent-scrollbar=\"false\" lt-prop-sticky-table=\"true\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-table-structure> <lyte-thead> <lyte-tr> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkbox}}\" lc-id=\"lc_id_0\"> <lyte-th> <div class=\"zcat-table-header-checkbox\"> <lyte-checkbox lt-prop-prevent-callback-observers=\"true\" lt-prop-checked=\"{{lbind(isAllRowCheckBoxSelect)}}\" class=\"{{expHandlers(isNotAllRowChecked,'?:','minus-btn','')}}\" on-changed=\"{{method('selectAllOrUnSelectAllObjectRow',zcatProp.body)}}\"> </lyte-checkbox> </div> </lyte-th> </template></template> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <lyte-th fixed=\"{{zcatProp.headerFixed}}\"> <div class=\"zcat-table-header-content\"> {{thead.label}} <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.table_sorting}}\" lc-id=\"lc_id_0\"> <lyte-svg onclick=\"{{action('sortColumn','channel_name')}}\" lt-prop-path=\"#zcat-icon-sort\" lt-prop-class=\"zcat-w20 zcat-h16 {{expHandlers(expHandlers(currentSort.key,'==','channel_name'),'?:',expHandlers(expHandlers(currentSort.direction,'==','asc'),'?:','sort-asc','sort-desc'),'sort-desc')}}\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </div> </lyte-th> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-th fixed=\"{{zcatProp.headerFixed}}\"> {{zcatProp.field_type_head}} </lyte-th> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-th class=\"zcat-table-head-moreOptions\" fixed=\"{{zcatProp.headerFixed}}\"> {{thead.label}} </lyte-th> </template></template> </lyte-tr> </lyte-thead> <lyte-tbody> <template is=\"for\" _jsp=\"true\" items=\"{{ltPropData}}\" item=\"row\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.rowOnclick.methodName}}\" lc-id=\"lc_id_0\"> <lyte-tr class=\"zcat-cP {{expHandlers(zcatProp.moreOptions.list.length,'?:','zcat-pR','')}} {{expHandlers(expHandlers(activeMenuIndex,'==',index),'?:','row-focused','')}}\" onclick=\"{{action('tableRowOnClick',event,row.body)}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkbox}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-checkbox lt-prop-prevent-callback-observers=\"true\" lt-prop-checked=\"{{lbind(row.body.isAllRowSelect)}}\" on-changed=\"{{method('selectOrUnselectObjectRow',row.body)}}\"> </lyte-checkbox> </div> </lyte-td> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template> </div> </lyte-td> </template></template> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','status')}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableStatusObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','link')}}\" lc-id=\"lc_id_1\"> <zcat-link-button self=\"{{self}}\" zcat-prop=\"{{tableLinkButtonObj}}\"> </zcat-link-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','button')}}\" lc-id=\"lc_id_2\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{tableBtnStyles}}\"> </zcat-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','badge')}}\" lc-id=\"lc_id_3\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableLabelObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','toggle')}}\" lc-id=\"lc_id_4\"> <lyte-checkbox lt-prop-type=\"switch\" lt-prop-tabindex=\"0\" lt-prop-value=\"1\"></lyte-checkbox> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','radio')}}\" lc-id=\"lc_id_5\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(index,'===',0)}}\" lc-id=\"lc_id_0\"> <zcat-radio zcat-prop=\"{{tableRadioDetails}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',1)}}\" lc-id=\"lc_id_1\"> <zcat-radio zcat-prop=\"{{tableRadioDetails1}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',2)}}\" lc-id=\"lc_id_2\"> <zcat-radio zcat-prop=\"{{tableRadioDetails2}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',3)}}\" lc-id=\"lc_id_3\"> <zcat-radio zcat-prop=\"{{tableRadioDetails3}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',4)}}\" lc-id=\"lc_id_4\"> <zcat-radio zcat-prop=\"{{tableRadioDetails4}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',5)}}\" lc-id=\"lc_id_5\"> <zcat-radio zcat-prop=\"{{tableRadioDetails5}}\" self=\"{{self}}\"></zcat-radio> </template></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','icon_text')}}\" lc-id=\"lc_id_6\"> <div class=\"zcat-flex-center zcat-gap-6\"> <lyte-svg lt-prop-path=\"#zcat-icon-sparcle\" lt-prop-class=\"zcat-w14 zcat-h14\" class=\"zcat-flex-center\"></lyte-svg> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"Item Name\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','svg')}}\" lc-id=\"lc_id_7\"> <lyte-svg lt-prop-path=\"#zcat-icon-file\" lt-prop-class=\"zcat-w16 zcat-h16\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </lyte-yield> </div> </lyte-td> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-menu-item class=\"{{expHandlers(item.disabled,'?:','zcat-table-toolkit-disabled','')}}\" onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template> <p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template> </div> </lyte-menu-item></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </template><template default=\"\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template> </div> </lyte-td> </template></template> </template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.field_type}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','status')}}\" lc-id=\"lc_id_0\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableStatusObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','link')}}\" lc-id=\"lc_id_1\"> <zcat-link-button self=\"{{self}}\" zcat-prop=\"{{tableLinkButtonObj}}\"> </zcat-link-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','badge')}}\" lc-id=\"lc_id_2\"> <zcat-label self=\"{{self}}\" zcat-prop=\"{{tableLabelObj}}\"> </zcat-label> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','button')}}\" lc-id=\"lc_id_3\"> <zcat-button self=\"{{self}}\" zcat-prop=\"{{tableBtnStyles}}\"> </zcat-button> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','toggle')}}\" lc-id=\"lc_id_4\"> <lyte-checkbox lt-prop-type=\"switch\" lt-prop-tabindex=\"0\" lt-prop-value=\"1\"></lyte-checkbox> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','radio')}}\" lc-id=\"lc_id_5\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(index,'===',0)}}\" lc-id=\"lc_id_0\"> <zcat-radio zcat-prop=\"{{tableRadioDetails}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',1)}}\" lc-id=\"lc_id_1\"> <zcat-radio zcat-prop=\"{{tableRadioDetails1}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',2)}}\" lc-id=\"lc_id_2\"> <zcat-radio zcat-prop=\"{{tableRadioDetails2}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',3)}}\" lc-id=\"lc_id_3\"> <zcat-radio zcat-prop=\"{{tableRadioDetails3}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',4)}}\" lc-id=\"lc_id_4\"> <zcat-radio zcat-prop=\"{{tableRadioDetails4}}\" self=\"{{self}}\"></zcat-radio> </template><template is=\"case\" case=\"{{expHandlers(index,'===',5)}}\" lc-id=\"lc_id_5\"> <zcat-radio zcat-prop=\"{{tableRadioDetails5}}\" self=\"{{self}}\"></zcat-radio> </template></template> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','icon_text')}}\" lc-id=\"lc_id_6\"> <div class=\"zcat-flex-center zcat-gap-6\"> <lyte-svg lt-prop-path=\"#zcat-icon-sparcle\" lt-prop-class=\"zcat-w14 zcat-h14\" class=\"zcat-flex-center\"></lyte-svg> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"Item Name\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div> </template><template is=\"case\" case=\"{{expHandlers(zcatProp.field_type,'===','svg')}}\" lc-id=\"lc_id_7\"> <lyte-svg lt-prop-path=\"#zcat-icon-file\" lt-prop-class=\"zcat-w16 zcat-h16\" class=\"zcat-flex-center\"></lyte-svg> </template></template> </lyte-yield> </div> </lyte-td> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><div class=\"{{expHandlers(item.disabled,'?:','zcat-table-toolkit-disabled','')}}\"> <lyte-menu-item onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} {{expHandlers(item.disabled,'?:','zcat-icon-stroke-disabled','')}} zcat-flex-center\"></lyte-svg></template></template> <p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} {{expHandlers(item.disabled,'?:','zcat-icon-stroke-disabled','')}} zcat-flex-center\"></lyte-svg></template></template> </div> </lyte-menu-item> </div></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </template></template> </lyte-tr> </template><template default=\"\"> <lyte-tr class=\"{{expHandlers(zcatProp.moreOptions.list.length,'?:','zcat-pR','')}} {{expHandlers(expHandlers(activeMenuIndex,'==',index),'?:','row-focused','')}}\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.checkboxOptions.length}}\" lc-id=\"lc_id_0\"> </template><template default=\"\"> <template is=\"for\" _jsp=\"true\" items=\"{{zcatProp.header}}\" item=\"thead\" index=\"index\"> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{thead.yield}}\" lc-id=\"lc_id_0\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <lyte-yield yield-name=\"{{thead.yield}}\" row-data=\"{{row.body}}\"> </lyte-yield> </div> </lyte-td> </template><template default=\"\"> <lyte-td> <div class=\"zcat-table-body-content-wraper\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{thead.avatar}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <zcat-avatar zcat-prop=\"{{tableAvatarDetails}}\" self=\"{{self}}\"> </zcat-avatar> <lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text> </div></template><template default=\"\"><lyte-text class=\"zcat-table-body-content-ellipsis\" lt-prop-value=\"{{getNestedValue(row.body,thead.value)}}\" lt-prop-tooltip-config=\"{ &quot;position&quot; : &quot;bottom&quot; }\"> </lyte-text></template></template> </div> </lyte-td> </template></template> </template> </template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.moreOptions.list.length}}\" lc-id=\"lc_id_0\"> <lyte-td class=\"table-toolkit-wraper\"> <div class=\"zcat-table-body-content-wraper\"> <div class=\"table-toolkit {{expHandlers(zcatProp.moreOptions.list.disabled,'?:','zcat-table-toolki-wraper-disabled','')}}\" id=\"zcat_open_menu_{{zcatProp.id}}_{{index}}\" onclick=\"{{action('tableToolkitOpen',index,row.body,zcatProp)}}\"> <div class=\"table-toolkit-three-dots\"> <lyte-svg lt-prop-path=\"#zcat-icon-three-dots\" lt-prop-class=\"zcat-w20 zcat-h16 zcat-stroke-dark1\" class=\"zcat-flex-center\"></lyte-svg> </div> <lyte-menu on-close=\"{{method('tableToolkitClose')}}\" lt-prop-yield=\"true\" lt-prop-position=\"downAlignLeft\" lt-prop-query=\"#zcat_open_menu_{{zcatProp.id}}_{{index}}\" ltproppreventdefaultselection=\"false\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template items=\"{{zcatProp.moreOptions.list}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><lyte-menu-item onclick=\"{{action('tableMoreOptionCallback',item,row.body)}}\"> <div class=\"zcat-dF zcat-align-center zcat-gap-6\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','left')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template> <p class=\"zcat-text-14 zcat-color-dark1\">{{item.label}}</p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item.icon.position,'===','right')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-svg lt-prop-path=\"#{{item.icon.name}}\" lt-prop-class=\"{{item.icon.class}} zcat-flex-center\"></lyte-svg></template></template> </div> </lyte-menu-item></template> </lyte-menu-body> </template> </lyte-menu> </div> </div> </lyte-td> </template></template> </lyte-tr> </template></template> </template> </lyte-tbody> </lyte-table-structure> </template> </lyte-table> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{zcatProp.paginationDetails.list.length}}\" lc-id=\"lc_id_0\"> <template items=\"{{zcatProp.paginationDetails.list}}\" item=\"data\" index=\"index\" is=\"for\" _new=\"true\"><lyte-navigator lt-prop-yield=\"true\" lt-prop-value=\"{{data.value}}\" lt-prop-records=\"{{data.records}}\" lt-prop-perpage=\"{{data.perpage}}\" lt-prop-more-records=\"{{data.morerecords}}\" lt-prop-middle-text=\"{{data.middletext}}\" lt-prop-show-only-icon=\"{{data.showonlyicon}}\" lt-prop-show-text=\"{{data.showtext}}\" lt-prop-aria=\"{{data.aria}}\" lt-prop-aria-next=\"{{data.arianext}}\" lt-prop-aria-previous=\"{{data.ariaprevious}}\" lt-prop-aria-home=\"{{data.ariahome}}\" lt-prop-aria-end=\"{{data.ariaend}}\" lt-prop-type=\"{{expHandlers(data.type,'?:','data.type','default')}}\" on-next=\"{{method('customLbindForPagination',data.onNext,'')}}\" on-previous=\"{{method('customLbindForPagination',data.onPrevious,'')}}\" on-home=\"{{method('customLbindForPagination',data.onHome,'')}}\" on-end=\"{{method('customLbindForPagination',data.onEnd,'')}}\" on-select=\"{{method('customLbindForPagination',data.onSelect,'')}}\"> <template is=\"registerYield\" yield-name=\"navigatorYield\"> <div class=\"zcat-pagination-wraper {{expHandlers(expHandlers(zcatProp.class,'===','borderless-table'),'?:','borderless-table','')}}\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center zcat-pagination-result-wraper\"> <div class=\"zcat-pagination-result-text\">Showing Results :</div> <div class=\"zcat-flex-center zcat-gap-4\"> <div class=\"zcat-pagination-result-count\">{{data.startPage}} - {{data.endPage}}</div> <div class=\"zcat-pagination-result-total\">of {{data.records}}</div> </div> </div> <div class=\"zcat-flex-center zcat-gap-16\"> <div class=\"zcat-dF zcat-gap-6 zcat-align-center\"> <div class=\"zcat-pagination-dropdown-text\">Rows per page :</div> <zcat-dropdown self=\"{{self}}\" zcat-prop=\"{{tablePaginationDropdownStyles}}\"> </zcat-dropdown> </div> <div class=\"zcat-pagination-divider\"></div> <div class=\"zcat-flex-center zcat-gap-12\"> <div class=\"lyteSingleBack zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-left-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center zcat-pagination-icon-disabled-color\"></lyte-svg> </div> <div class=\"zcat-pagination-page-list\"> {{data.startPage}} - {{data.endPage}} </div> <div class=\"lyteSingleFront zcat-pagination-icon-wraper zcat-pagination-icon-color zcat-pagination-icon-disabled-color\"> <lyte-svg lt-prop-path=\"#zcat-icon-right-arrow\" lt-prop-class=\"zcat-w14 zcat-h14 zcat-flex-center\"></lyte-svg> </div> </div> </div> </div> </template> </lyte-navigator></template> </template></template> </template>";;
ZcatTable._dynamicNodes = [{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"zcatProp.style"}}},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"a","p":[1,1,1,3]},{"t":"f","p":[1,1,1,3],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,1]},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":7,"sibl":[6]},{"t":"s","p":[1,1,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":6,"sibl":[5]},{"t":"s","p":[1,1,1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[3],"cn":"lc_id_0"},{"t":"f","p":[3],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"a","p":[1],"cn":"lc_id_4"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"a","p":[1],"cn":"lc_id_5"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5"],"hc":true,"trans":true,"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true},"lc_id_6":{"dN":[{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_6"},{"t":"cD","p":[1,3],"in":0,"cn":"lc_id_6"}],"cdp":{"t":"a","p":[6]},"dcn":true},"lc_id_7":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_7"}],"cdp":{"t":"a","p":[7]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true},"lc_id_6":{"dc":[1,0],"hc":true,"trans":true},"lc_id_7":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5","lc_id_6","lc_id_7"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,3,0]},{"t":"s","p":[0,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true},"lc_id_4":{"dN":[{"t":"a","p":[1],"cn":"lc_id_4"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_4"}],"cdp":{"t":"a","p":[4]},"dcn":true},"lc_id_5":{"dN":[{"t":"a","p":[1],"cn":"lc_id_5"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5"],"hc":true,"trans":true,"in":0,"cn":"lc_id_5"}],"cdp":{"t":"a","p":[5]},"dcn":true},"lc_id_6":{"dN":[{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_6"},{"t":"cD","p":[1,3],"in":0,"cn":"lc_id_6"}],"cdp":{"t":"a","p":[6]},"dcn":true},"lc_id_7":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_7"}],"cdp":{"t":"a","p":[7]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"lc_id_2":{"dc":[0],"hc":true,"trans":true},"lc_id_3":{"dc":[0],"hc":true,"trans":true},"lc_id_4":{"dc":[0],"hc":true,"trans":true},"lc_id_5":{"dc":[0],"hc":true,"trans":true},"lc_id_6":{"dc":[1,0],"hc":true,"trans":true},"lc_id_7":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3","lc_id_4","lc_id_5","lc_id_6","lc_id_7"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"a","p":[0,1]},{"t":"s","p":[0,1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,1,3,0]},{"t":"s","p":[0,1,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[4,3,2,1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"i","p":[1,1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"a","p":[0,3],"cn":"lc_id_0"},{"t":"cD","p":[0,3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"cD","p":[0],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,1,1],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3],"cn":"lc_id_0"},{"t":"r","p":[1,1,1,3,1],"dN":[{"t":"a","p":[1,1]},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[0]},{"t":"s","p":[0,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"tX","p":[0,1,3,0]},{"t":"s","p":[0,1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1,1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[3,2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[8,7,6,5,4,3,2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[3],"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"f","p":[1],"dN":[{"t":"a","p":[0]},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,3,1,0]},{"t":"tX","p":[1,1,3,1,2]},{"t":"tX","p":[1,1,3,3,1]},{"t":"a","p":[1,3,1,3]},{"t":"cD","p":[1,3,1,3],"in":2,"sibl":[1]},{"t":"cD","p":[1,3,5,1,1],"in":1,"sibl":[0]},{"t":"tX","p":[1,3,5,3,1]},{"t":"tX","p":[1,3,5,3,3]},{"t":"cD","p":[1,3,5,5,1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;

ZcatTable._observedAttributes = [
  "self",
  "zcatProp",
  "activeMenuIndex",
  "checkedList",
  "isAllRowCheckBoxSelect",
  "isNotAllRowChecked",
  "tablePaginationDropdownStyles",
  "tableBtnStyles",
  "tableStatusObj",
  "tableLabelObj",
  "tableLinkButtonObj",
  "tableToggleDetails",
  "tableRadioDetails",
  "tableRadioDetails1",
  "tableRadioDetails2",
  "tableRadioDetails3",
  "tableRadioDetails4",
  "tableRadioDetails5",
  "tableinputObj",
  "tableAvatarDetails"
];

export { ZcatTable };

ZcatTable.register("zcat-table", {
  hash: "ZcatTable_4",
  refHash: "C_zcat-app_app_0"
});

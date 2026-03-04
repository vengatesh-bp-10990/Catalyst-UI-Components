import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
class ZcatTable extends Component {
  constructor() {
    super();
  }
  
  data() {
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

    return {
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
    };
  }
  

  
  static methods() {
    return {
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
    };
  }

  static actions() {
    return {
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
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatTable };

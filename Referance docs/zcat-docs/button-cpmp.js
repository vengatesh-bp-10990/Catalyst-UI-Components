import { Component, render } from '@slyte/component';
import { prop } from '@slyte/core';

class ButtonComp extends Component {
  constructor() {
    super();
  }

  init() {
    this.constructCodeSnippet()
  }


  data() {
    return {
      btnHead: prop('string', { default: 'Buttons' }),
      btnDesc: prop('string', { default: 'A button triggers an event or action. They let users know what will happen next.' }),
      headTab: prop('array', {
        default: [
          {
            name: 'Customize',
            id: 'custom'
          },
          {
            name: 'Change Logs',
            id: 'change_logs'
          }
        ]
      }),
      customDetailsHide: prop('boolean', { default: true }),

      // for showing button 
      self: prop('object', { default: this }),
      btnStyles: prop('object', {
        default:
        {
          "label": "Button Text",
          "variant": "fill",
          "color": "primary",
          "size": "default",
          "disabled": false,
          "loading": false,
          "callback": {
            "name": ""
          }
        }
      }),

      resetButtonObj: prop('object', {
        default:
        {
          "label": "Reset",
          "variant": "grey",
          "color": "grey",
          "size": "small",
          "callback": {
            "name": "resetCustomization"
          }
        }
      }),

      //code snippet 
      // jsCode: prop('string', { default: '' }),
      // htmlCode: prop('string', { default: '' }),
      jsCodeSnippet: prop('object', {
				default: {
					variant: "code_snippet",
					type: "js"
				}
			}),
			htmlCodeSnippet: prop('object', {
				default: {
					variant: "code_snippet",
					type: "html"
				}
			}),
      // custom properties - rightPanel
      customProperties: prop('array', { default: [] }),
      selectedBtnVariant: prop('string', { default: 'fill' }),
      selectedIconVisibility: prop('string', { default: false }),
      splitBtnArrowDisable: prop('string', { default: '' }),
      selectedBtnShape: prop('string', {default: 'rectangle'}),
      selectedColorInDropdown: prop('string', {default: 'blue' }),

      // new  - Apr 19, 2025
      isIconLeftEnabled: prop('boolean', {default: false}),
      isIconRightEnabled: prop('boolean', {default: false}),
      isIconLeftCheckedVar: prop('boolean', {default: false}),
      isIconRightCheckedVar: prop('boolean', {default: false}),
      isSplitBtnCheckedVar: prop('boolean', {default: false}),
      isDropBtnCheckedVar: prop('boolean', {default: false}),
      onlyIconEnabled: prop('boolean', {default: false}),
      disabledOptionsForOnlyIcon: prop('array', { default: [] }),
      disabledBtnColorsForVariant: prop('array', { default: ['grey'] }),
      disabledArrowForBtnType: prop('array', {default: ['arrowdisabled']}),
      isSplitArrowDisabledVar: prop('boolean', {default: false}),
      disabledVariantForNavigationBtn: prop('array', {default: []}),
      disabledColorForNavigationBtn: prop('array', {default: []}),
      disabledStateForNavigation: prop('array', {default: []}),
      selectBtnState: prop('string', {default: ''}),
      selectedType: prop('string', {default: ''}),
      selectedSize: prop('string', {default: ''}),
 


    };
  }

  constructCodeSnippet(
    { variantType = this.getData('btnStyles').variant,
      componentSize = this.getData('btnStyles').size,
      btnDisableState = this.getData('btnStyles').disabled,
      btnLoadingState = this.getData('btnStyles').loading,
      btColor = this.getData('btnStyles').color,
      icon = this.getData('btnStyles').icon,
      iconPosition = this.getData('btnStyles').icon ? this.getData('btnStyles').icon.position : "",
      iconName = this.getData('btnStyles').icon ? this.getData('btnStyles').icon.name : "",
      iconClass =  this.getData('btnStyles').icon ? this.getData('btnStyles').icon.class : "",
      menu = this.getData('btnStyles').menu,
      btnId = this.getData('btnStyles').id,
      callback = this.getData('btnStyles').callback,
      splitBtnArrow = this.getData('btnStyles').arrowdisabled ? this.getData('btnStyles').arrowdisabled : '',
      btnLabel = this.getData('btnStyles').label === null ? this.getData('btnStyles').label : 'Button Text',
      btnType = this.getData('btnStyles').type === undefined ? '' : this.getData('btnStyles').type,
      splitDisabledState = this.getData('btnStyles').splitdisabled


    } = {}
  ) {

    btnLabel = this.getData('btnStyles').label === null ? this.getData('btnStyles').label = '' : 'Button Text';
    let iconCode = icon
    ? `"icon": { "position": "${icon.position}", "name": "${icon.name}", "class": "${iconClass}" }`
    : `"icon": {}`;


    let menuCode = menu
      ? `
        "id": "${btnId}",
        "menu":
        {
              "list": [
                {
                "label": "plus",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                  }
                },
                {
                "label": "delete",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                  }
                }
              ]
            }
        `
      : `"menu": {}`;

    let callbackCode = callback
      ? `"callback": ${JSON.stringify(callback, null, 2)}`
      : '';


    let html_code = `
      <zcat-button
        self="{{self}}"
        zcat-prop={{btnStyles}}
      ></zcat-button>
    `;
    let js_code = `
      self: prop('object', {default: this}),

      // For a basic button, you can remove the empty or default property.. like icon:{}, shape: "square"...
      btnStyles: prop('object', {default: {
        "label": "${btnLabel}",
        "variant": "${variantType}",
        "size": "${componentSize}",        
        "disabled": ${btnDisableState},
        "splitdisabled": ${splitDisabledState},           
        "arrowdisabled": "${splitBtnArrow}",
        "loading": ${btnLoadingState},
        "color": "${btColor}",
        "type": "${btnType}",
        ${iconCode},       
        ${menuCode},        
        ${callbackCode}
        
      }})
    `;

    // this.setData('htmlCode', html_code)
    // this.setData('jsCode', js_code)

		this.setData('htmlCodeSnippet.code', html_code)
		this.setData('jsCodeSnippet.code', js_code)
  }

  // constructCodeSnippet() {
  //     let btnObj = this.getData('btnStyles') || {};

  //     // Cleaned up label
  //     let btnLabel = btnObj.label !== null && btnObj.label !== undefined
  //         ? btnObj.label
  //         : "Button Text";

  //     // Build safe object with fallbacks
  //     let safeBtnObj = {
  //         size: btnObj.size || "default",
  //         variant: btnObj.variant || "fill",
  //         color: btnObj.color || "primary",
  //         shape: btnObj.shape || "default",
  //         label: btnLabel,
  //         // Only include iconLeft if it exists
  //         ...(btnObj.iconLeft ? {
  //             iconLeft: {
  //                 name: btnObj.iconLeft.name || "",
  //                 class: btnObj.iconLeft.class || "",
  //                 position: btnObj.iconLeft.position || "left"
  //             }
  //         } : {}),
  //         // Only include iconRight if it exists
  //         ...(btnObj.iconRight ? {
  //             iconRight: {
  //                 name: btnObj.iconRight.name || "",
  //                 class: btnObj.iconRight.class || "",
  //                 position: btnObj.iconRight.position || "right"
  //             }
  //         } : {})
  //     };

  //     // JS Code
  //     let js_code = `
  //     btnStyles: prop("object", {
  //         default: ${JSON.stringify(safeBtnObj, null, 4)}
  //     })
  //     `;

  //     // HTML Code
  //     let html_code = `
  //     <zcat-button
  //         zcat-prop="{{btnStyles}}"
  //     ></zcat-button>
  //     `;

  //     this.setData("jsCode", js_code);
  //     this.setData("htmlCode", html_code);
  // }


  setBtnIconColor(){
    let btnIconClass;
    if(this.getData('btnStyles').size === 'small'){
      if(this.getData('btnStyles').variant === 'fill'){
        btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-fillbtn-icon"
      }
      else if(this.getData('btnStyles').variant === 'outline'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-outline-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-outline-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-outline-dangerbtn-icon" : 
        ''
      }
      else if(this.getData('btnStyles').variant === 'ghost'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-ghost-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-ghost-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-ghost-dangerbtn-icon" :
        ''

        if(this.getData('btnStyles').color === 'grey' && this.getData('btnStyles').type === 'navigation'){
          btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-greybtn-icon"
        }
      }
      else if(this.getData('btnStyles').variant === 'grey'){
        btnIconClass = "zcat-w14 zcat-h14 " + "zcat-stroke-greybtn-icon"
      }
      else{}
      return btnIconClass;
    }
    else if(this.getData('btnStyles').size === 'extra-small'){
      if(this.getData('btnStyles').variant === 'fill'){
        btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-fillbtn-icon"
      }
      else if(this.getData('btnStyles').variant === 'outline'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-outline-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-outline-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-outline-dangerbtn-icon" : 
        ''
      }
      else if(this.getData('btnStyles').variant === 'ghost'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-ghost-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-ghost-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-ghost-dangerbtn-icon" :
        ''

        if(this.getData('btnStyles').color === 'grey' && this.getData('btnStyles').type === 'navigation'){
          btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-greybtn-icon"
        }
      }
      else if(this.getData('btnStyles').variant === 'grey'){
        btnIconClass = "zcat-w12 zcat-h12 " + "zcat-stroke-greybtn-icon"
      }
      else{}
      return btnIconClass;
    }
    else if(this.getData('btnStyles').size === 'large'){
      if(this.getData('btnStyles').variant === 'fill'){
        btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-fillbtn-icon"
      }
      else if(this.getData('btnStyles').variant === 'outline'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-outline-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-outline-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-outline-dangerbtn-icon" : 
        ''
      }
      else if(this.getData('btnStyles').variant === 'ghost'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-ghost-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-ghost-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-ghost-dangerbtn-icon" :
        ''

        if(this.getData('btnStyles').color === 'grey' && this.getData('btnStyles').type === 'navigation'){
          btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-greybtn-icon"
        }
      }
      else if(this.getData('btnStyles').variant === 'grey'){
        btnIconClass = "zcat-w22 zcat-h22 " + "zcat-stroke-greybtn-icon"
      }
      else{}
      return btnIconClass;
    }
    else{    // default
      if(this.getData('btnStyles').variant === 'fill'){
        btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-fillbtn-icon"
      }
      else if(this.getData('btnStyles').variant === 'outline'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-outline-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-outline-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-outline-dangerbtn-icon" : 
        ''
      }
      else if(this.getData('btnStyles').variant === 'ghost'){
        this.getData('btnStyles').color === 'primary' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-ghost-primarybtn-icon" :
        this.getData('btnStyles').color === 'success' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-ghost-successbtn-icon" :
        this.getData('btnStyles').color === 'danger' ? btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-ghost-dangerbtn-icon" :
        ''

        if(this.getData('btnStyles').color === 'grey' && this.getData('btnStyles').type === 'navigation'){
          btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-greybtn-icon"
        }
      }
      else if(this.getData('btnStyles').variant === 'grey'){
        btnIconClass = "zcat-w16 zcat-h16 " + "zcat-stroke-greybtn-icon"
      }
      else{}
      return btnIconClass;
    }

    
  }

  static methods() {
    return {
      copyToSnippet(codeSnippet){
				document.querySelector('.lyteTooltip').innerText = 'Copied'; //No I18N
			},
      changeBtnVariant(event, variantValue) {
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", variantValue);
        this.constructCodeSnippet({ "variantType": variantValue })
        this.setData('selectedBtnVariant', variantValue)
        let btnIconClass;
        if(variantValue === 'grey'){
          this.setData('disabledBtnColorsForVariant', ['primary', 'danger', 'success']);  
          this.setData('selectedBtnColor', 'grey')
        }else{
          this.setData('disabledBtnColorsForVariant', ['grey']);  
          this.setData('selectedBtnColor', this.getData('btnStyles').color)
        }
        if(this.getData('isSplitBtnCheckedVar')){
          this.setData('disabledVariantsForSplitBtn', ['ghost'])  /// instead of this, tried to use "disabledVariantForNavigationBtn" - removable line if below is working fine..
          this.setData('disabledVariantForNavigationBtn', ['ghost'])
        }
        if(variantValue === 'ghost'){  // for navigation - ghost
          if(this.getData('btnStyles').type === 'navigation'){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", variantValue)
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'primary')
            this.setData('selectedBtnColor', 'primary')
            this.setData('disabledBtnColorsForVariant', ['danger', 'success']);  
            let btnIconClass;
              btnIconClass = this.setBtnIconColor()
              this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
            if(this.getData('btnStyles').dropdownArrow !== undefined){
              this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
            }
          }
          else{   // default
            this.setData('disabledBtnColorsForVariant', ['grey']);  
            this.setData('selectedBtnColor', this.getData('btnStyles').color)
          }
        }
        // Apr 22, 2025 - kamali  
        if(variantValue !== 'grey'){
          if(this.getData('btnStyles').color === 'grey'){
            this.setData('selectedBtnColor', 'primary')
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'primary')
          }
        }
        if(this.getData('btnStyles').icon !== undefined && this.getData('btnStyles').icon !== null){
          btnIconClass = this.setBtnIconColor()
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
          if(this.getData('btnStyles').dropdownArrow !== undefined){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
          }
        }

        if(this.getData('isSplitBtnCheckedVar') || this.getData('isDropBtnCheckedVar')){
          let dropdownIcon = this.setBtnIconColor()
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", dropdownIcon)
        }

        this.constructCodeSnippet()
      },
      setBtnColor(event, selectedColor){
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", selectedColor)
        this.constructCodeSnippet({ "btColor": selectedColor })

        if(this.getData('btnStyles').variant === 'ghost' && this.getData('btnStyles').type === 'navigation'
          && this.getData('btnStyles').color === 'grey'
        ){
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", this.getData('btnStyles').variant)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", selectedColor)
          // this.setData('selectedBtnColor', 'grey')
        }
        if(this.getData('isSplitBtnCheckedVar') || this.getData('isDropBtnCheckedVar') ){
          let dropdownIcon = this.setBtnIconColor()
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", dropdownIcon)
        }
        
        let btnIconClass;
        if(this.getData('btnStyles').icon !== undefined && this.getData('btnStyles').icon !== null ){
        // if(this.getData('btnStyles').icon !== undefined || this.getData('btnStyles').icon !== null){

          btnIconClass = this.setBtnIconColor();
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
          // if(this.getData('btnStyles').dropdownArrow !== undefined){
          //   this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
          // }
          this.constructCodeSnippet({ "iconClass": btnIconClass })
        }  
        this.setData('selectedBtnColor', this.getData('btnStyles'))

        
        this.constructCodeSnippet()
      
      },
      changeBtnSize(event, size) {        
        let btnIconClass;
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "size", size)
        if(this.getData('btnStyles').icon !== undefined && this.getData('btnStyles').icon !== null){
          btnIconClass = this.setBtnIconColor()
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
          if(this.getData('btnStyles').dropdownArrow !== undefined){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
          }
        }
        if(this.getData('isSplitBtnCheckedVar') || this.getData('isDropBtnCheckedVar')){
          let dropdownIcon = this.setBtnIconColor()
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", dropdownIcon)
        }
        this.constructCodeSnippet({ "componentSize": size })
      },
            
      selectBtnIcon(event, iconName){
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.name", iconName);
        this.constructCodeSnippet({ "iconName": iconName });
        
      }
      // new    -- Apr 19 
      ,
      iconLeftChecked(){
        this.setData('isIconLeftEnabled', true);     // for dropdownHandling
        this.setData('isIconRightEnabled', false);    // for dropdownHandling
        this.setData('isIconLeftCheckedVar', true)    // for checkboxHandling
        this.setData('isIconRightCheckedVar', false)      // for checkboxHandling  
        this.setData('isOnlyIconCheckedVar', false)
        this.setData('selectedType', 'default')
        this.setData('onlyIconEnabled', false)
        this.setData('disabledVariantForNavigationBtn', [])
        // this.setData('isDropBtnCheckedVar', false)

        let btnIconClass = this.setBtnIconColor();

        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", {
          "position": "left",
          "name":  this.getData('btnStyles')?.icon?.name ?? 'plus',
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)",
          "class": btnIconClass
        }) 
        this.constructCodeSnippet();        

      },
      iconLeftUnchecked() {
        this.setData('isIconLeftEnabled', false);        // for dropdownHandling
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", null)
        this.constructCodeSnippet();
      },
      iconRightChecked(){
        this.setData('isIconRightEnabled', true);            // for dropdownHandling
        this.setData('isIconLeftEnabled', false);           // for dropdownHandling
        this.setData('isIconRightCheckedVar', true)         // for checkboxHandling
        this.setData('isIconLeftCheckedVar', false)       // for checkboxHandling
        this.setData('isOnlyIconCheckedVar', false)
        this.setData('selectedType', 'default')
        this.setData('onlyIconEnabled', false)
        this.setData('disabledVariantForNavigationBtn', [])
        // this.setData('isDropBtnCheckedVar', false)

        let btnIconClass = this.setBtnIconColor();

        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", {
          "position": "right",
          "name":  this.getData('btnStyles')?.icon?.name ?? 'plus',
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)",
          "class": btnIconClass
        })  
        this.constructCodeSnippet();
      },
      iconRightUnchecked() {
        this.setData('isIconRightEnabled', false);        // for dropdownHandling 
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", null)
        this.constructCodeSnippet();
      },
      splitBtnChecked(){

        let dropdownIcon = this.setBtnIconColor()
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", dropdownIcon)

        this.setData('isSplitBtnCheckedVar', true)
        this.setData('isDropBtnCheckedVar', false)
        // this.setData('isOnlyIconCheckedVar', false)
        // this.setData('isIconRightCheckedVar', false)         // for checkboxHandling
        // this.setData('isIconLeftCheckedVar', false)       // for checkboxHandling
        
        this.setData('disabledVariantsForSplitBtn', ['ghost'])  // apr 25
        this.setData('disabledVariantForNavigationBtn', ['ghost'])
        this.setData('disabledArrowForBtnType', [])

        let btnObj = this.getData('btnStyles')
        this.$app.objectUtils(btnObj, 'add', "menu",
          {
            "list": [
              {
                "label": "edit",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                }
              },
              {
                "label": "delete",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                }
              }
            ]
          });
        this.$app.objectUtils(btnObj, 'add', "id", "splitDrop_content");
        this.$app.objectUtils(btnObj, 'add', "type", "split");
        this.$app.objectUtils(btnObj, 'add', "callback",
          {
            "name": "",
            "arguments": []
          }
        )

        if(this.getData('onlyIconEnabled')){
          this.setData('disabledOptionsForOnlyIcon', ['navigation']);    // need to add the disabled in navigation option
          this.$app.objectUtils(this.getData('btnStyles'), 'delete', "label")
          document.querySelector('.lyte-button p').style.display = 'none';
        }
        // this.constructCodeSnippet();


        this.setData('isSplitArrowDisabledVar', true)
        this.setData('isSplitBtnCheckedVar', true)

        if(this.getData('btnStyles').variant === 'ghost'){
          this.$app.objectUtils(btnObj, 'add', "variant", "fill");
          this.$app.objectUtils(btnObj, 'add', "btcolot", "primary");
          this.setData('selectedBtnVariant', this.getData('btnStyles').variant)
          this.setData('selectedBtnColor', this.getData('btnStyles').color)
          this.setData('disabledVariantsForSplitBtn', ['ghost'])    // removable apr 25
          this.setData('disabledVariantForNavigationBtn', ['ghost'])
          let btnIconClass;
          if(this.getData('btnStyles').icon !== undefined && this.getData('btnStyles').icon !== null){
            btnIconClass = this.setBtnIconColor()
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
            if(this.getData('btnStyles').dropdownArrow !== undefined){
              this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
            }
          }
        }

        // apr 25
        if(this.getData('onlyIconEnabled') && this.getData('isOnlyIconCheckedVar') && this.getData('selectedType') === 'navigation'){
          // this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", '')
          this.setData('selectedType', 'default')

        }

        this.setData('disabledVariantsForSplitBtn', ['ghost'])  // removable apr 25
        this.setData('disabledVariantForNavigationBtn', ['ghost'])

        // if(this.getData('selectBtnState') === 'disabled'){
        //   this.$app.objectUtils(btnObj, 'add', "splitdisabled", true);
        //   this.$app.objectUtils(btnObj, 'add', "disabled", false);
        // }

        if(this.getData('selectBtnState') === 'disabled' ){
          this.$app.objectUtils(btnObj, 'add', "splitdisabled", true);
          this.$app.objectUtils(btnObj, 'add', "disabled", false);
        }
        this.constructCodeSnippet();


        



      }, 
      splitBtnUnchecked(){
        this.setData('isSplitBtnCheckedVar', false)
        // this.setData('disabledVariantsForSplitBtn', ['ghost'])   // removable apr 25
        // this.setData('disabledVariantForNavigationBtn', ['ghost'])
        this.setData('disabledArrowForBtnType', ['arrowdisabled'])

        let btnObj = this.getData('btnStyles')

        this.$app.objectUtils(btnObj, 'add', "menu", null);
        this.$app.objectUtils(btnObj, 'add', "id", null);
          this.$app.objectUtils(btnObj, 'add', "type", null);
          this.$app.objectUtils(btnObj, 'add', "callback",
            {
              "name": "",
              "arguments": []
            }
          )

        this.setData('isSplitArrowDisabledVar', false)
        this.setData('isSplitBtnCheckedVar', false)

          // Apr 22, 2025 - kamali
        if(this.getData('onlyIconEnabled')){
          this.setData('disabledOptionsForOnlyIcon', []);    // need to add the disabled in navigation option
          this.$app.objectUtils(this.getData('btnStyles'), 'delete', "label")
          document.querySelector('.lyte-button p').style.display = 'none';
        }
        if(this.getData('selectBtnState') === 'disabled'){
          this.$app.objectUtils(btnObj, 'add', "splitdisabled", false);
          this.$app.objectUtils(btnObj, 'add', "disabled", true);

        }


        this.constructCodeSnippet();
        this.setData('disabledVariantsForSplitBtn', [])   // removable apr 25
        this.setData('disabledVariantForNavigationBtn', [])
      },
      dropBtnChecked(){
        let dropdownIcon = this.setBtnIconColor()
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", dropdownIcon)
        this.setData('isDropBtnCheckedVar', true)
        this.setData('isSplitBtnCheckedVar', false)
        // the below 2 are needed to off the onlyIcon's work
        this.setData('onlyIconEnabled', false)
        this.setData('isOnlyIconCheckedVar', false)
        this.setData('selectedType', 'default')
        // this.setData('isIconLeftCheckedVar', false)       // for checkboxHandling
        // this.setData('isIconRightCheckedVar', false)       // for checkboxHandling

        this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", false)
        // this.setData('isSplitArrowDisableVar', false)
        this.setData('disabledVariantForNavigationBtn', [])

        let btnObj = this.getData('btnStyles')
        this.$app.objectUtils(btnObj, 'add', "menu",
          {
            "list": [
              {
                "label": "edit",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                }
              },
              {
                "label": "delete",
                "icon": {
                  "position": "left",
                  "name": "plus",
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)"
                },
                "callback": {
                  "name": "",
                  "arguments": []
                }
              }
            ]
          });
        this.$app.objectUtils(btnObj, 'add', "id", "drop_content");
        this.$app.objectUtils(btnObj, 'delete', "type");
        this.$app.objectUtils(btnObj, 'delete', "callback");
        if(this.getData('selectBtnState') === 'disabled'){
          this.$app.objectUtils(btnObj, 'add', "splitdisabled", false);
          this.$app.objectUtils(btnObj, 'add', "disabled", true);

        }
        this.constructCodeSnippet()
      },
      dropBtnUnchecked(){
        this.setData('isDropBtnCheckedVar', false)
        let btnObj = this.getData('btnStyles')

        this.$app.objectUtils(btnObj, 'add', "menu", null);
        this.$app.objectUtils(btnObj, 'add', "id", null);
          this.$app.objectUtils(btnObj, 'add', "type", null);
          this.$app.objectUtils(btnObj, 'add', "callback",
            {
              "name": "",
              "arguments": []
            }
          )
          if(this.getData('selectBtnState') === 'disabled'){
            this.$app.objectUtils(btnObj, 'add', "splitdisabled", false);
            this.$app.objectUtils(btnObj, 'add', "disabled", true);
  
          }
          this.constructCodeSnippet()
      },
      onlyIconChecked(){
        this.setData('onlyIconEnabled', true)
        this.setData('isIconLeftCheckedVar', false)       // for checkboxHandling
        this.setData('isIconRightCheckedVar', false)
        this.setData('isIconLeftEnabled', false);           // for dropdownHandling
        this.setData('isIconRightEnabled', false);           // for dropdownHandling
        // this.setData('isSplitBtnCheckedVar', false)
        if(this.getData('isSplitBtnCheckedVar')){
          this.setData('disabledOptionsForOnlyIcon', ['navigation']);
        }
        this.setData('isOnlyIconCheckedVar', true)
        this.setData('isDropBtnCheckedVar', false)

        this.setData('disabledStateForNavigation', ['loading'])

        let btnObj = this.getData('btnStyles'), btnIconClass;
        // this.$app.objectUtils(btnObj, 'add', "shape", shape);
          this.$app.objectUtils(btnObj, 'delete', "label");

          btnIconClass = this.setBtnIconColor();
          this.$app.objectUtils(btnObj, 'add', "icon", {
            "position": "right",
            "name":  this.getData('btnStyles')?.icon?.name ?? 'plus',
                  "size": "14",
                  "stroke": "var(--zcat-btn-grey-icon-default)",
            "class": btnIconClass
          })
          document.querySelector('.lyte-button p').style.display = 'none';

          this.constructCodeSnippet();


      },
      onlyIconUnchecked(){
        this.setData('onlyIconEnabled', false)
        this.setData('disabledStateForNavigation', [])
        document.querySelector('.lyte-button p').style.display === 'none' ? document.querySelector('.lyte-button p').style.display = '' : ''

          // this.$app.objectUtils(btnObj, 'add', "shape", shape);
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "label", "Button Text");
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", null);
          if(this.getData('btnStyles').type === 'navigation'){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", null)
          }
          // if i off the onlyIcon, if the variant is grey, colour remains grey.. if the variant is ghost, the color should primary (and variant will be ghost== already achieved the variabt)
          // apr 22, 2025
          if(this.getData('btnStyles').variant === 'ghost' && (this.getData('btnStyles').color === 'grey' || this.getData('btnStyles').color === 'primary')){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', 'color', 'primary')
            this.setData('selectedBtnColor', 'primary')
            this.setData('disabledBtnColorsForVariant', ['grey']);  
            this.setData('disabledVariantForNavigationBtn', [])
          }

          // if(this.getData('btnStyles').type === 'navigation'){
            this.setData('selectedType', 'default');
            this.getData('btnStyles').type === 'navigation' ? this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", null) : ''
          // }

          this.constructCodeSnippet();
        

      },
      changeBtnState(event, state){
        if(state === 'disabled'){
          // this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", true)
          // this.$app.objectUtils(this.getData('btnStyles'), 'add', "loading", false)
          // this.setData('disabledOptionsForOnlyIcon', []);

          // new 
          if(this.getData('isSplitBtnCheckedVar')){   // 
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "splitdisabled", true)
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", false)
          }
          else{    // dropdownBtn
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", true)
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "splitdisabled", false)

          }
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "loading", false)
          this.setData('disabledOptionsForOnlyIcon', []);

        }
        else if(state === 'loading'){
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "loading", true)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", false)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "splitdisabled", false)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", false)
          this.setData('disabledOptionsForOnlyIcon', ['navigation']);

        }
        else{
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "loading", false)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", false)
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "splitdisabled", false)
          // this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", false)
          this.setData('disabledOptionsForOnlyIcon', []);

        }
        this.setData('selectBtnState', state)
        this.constructCodeSnippet()
      },
      changeNavigation(event, btnType){
        if(btnType === 'navigation'){
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", btnType); 
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", 'grey'); 
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'grey'); 

          this.setData('disabledVariantForNavigationBtn', ['fill', 'outline'])
          this.setData('selectedBtnVariant', 'grey')
          this.setData('disabledStateForNavigation', ['loading'])
          this.setData('selectBtnState', 'default')

          if(this.getData('btnStyles').variant === 'grey'){
            this.setData('disabledBtnColorsForVariant', ['primary', 'danger', 'success']);  
            this.setData('selectedBtnColor', 'grey')

            this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'grey')

          }
          else if(this.getData('btnStyles').variant === 'ghost'){
            this.setData('disabledBtnColorsForVariant', ['success', 'danger']);  
            this.setData('selectedBtnColor', 'grey')
          }

          let btnIconClass;
          if(this.getData('btnStyles').icon !== undefined && this.getData('btnStyles').icon !== null){
            btnIconClass = this.setBtnIconColor()
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon.class", btnIconClass)
            if(this.getData('btnStyles').dropdownArrow !== undefined){
              this.$app.objectUtils(this.getData('btnStyles'), 'add', "dropdownArrow", btnIconClass)
            }
          }
          // apr 24 

          this.setData('selectedType', btnType)
          this.setData('disabledVariantForNavigationBtn', ['fill', 'outline'])
          // this.setData('disabledVariantsForSplitBtn', [])    // removable apr 25  -- second variable iruka apa, naandha summa add pannunae this line
          // this.setData('disabledVariantForNavigationBtn', [])
          this.setData('selectedBtnVariant', 'grey')
        }
        else{   //default - onlyicon ENabled
          this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", null)         
          if(this.getData('selectedBtnVariant') === 'ghost'){
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", 'ghost'); 
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'primary'); 
            this.setData('selectedBtnColor', 'primary')
            this.setData('disabledVariantForNavigationBtn', [])
            this.setData('disabledBtnColorsForVariant', ['grey']);  
            this.setData('disabledStateForNavigation', [])
            this.setData('selectBtnState', 'default')
          }
          else{
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", 'grey'); 
            this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'grey'); 
            this.setData('disabledVariantForNavigationBtn', [])
            this.setData('selectedBtnColor', 'grey')
            // apr 23
            this.setData('disabledStateForNavigation', [])
            this.setData('selectBtnState', 'default')
          }
        }
        this.setData('selectedType', btnType)
        this.constructCodeSnippet()
      },
      splitArrowDisableChecked(){
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", true)
        this.constructCodeSnippet()
      },
      splitArrowDisableUnchecked(){
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", false)
        this.constructCodeSnippet()
        this.setData('isSplitArrowDisableVar', false)
      },
      resetCustomization(){
        // console.log("resetCustomization")
        // location.reload();
        this.setData('selectedBtnVariant', 'fill')
        this.setData('selectedSize', 'default')
        this.setData('selectedBtnColor', 'primary')
        this.setData('selectBtnState', 'default')
        this.setData('isIconLeftCheckedVar', false)
        this.setData('isIconRightCheckedVar', false)
        this.setData('isSplitBtnCheckedVar', false)
        this.setData('isSplitArrowDisableVar', false)
        this.setData('isDropBtnCheckedVar', false)
        this.setData('isOnlyIconCheckedVar', false)
        this.setData('selectedType', 'default')


        this.$app.objectUtils(this.getData('btnStyles'), 'add', "variant", 'fill')
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "size", 'default')
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "color", 'primary')
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "loading", false)       // button state default
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "disabled", false)      // button state default      // button state default
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "arrowdisabled", false)     // button state default      // button state default
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "splitdisabled", false) 
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "icon", null)
        this.$app.objectUtils(this.getData('btnStyles'), 'delete', "id")
        this.$app.objectUtils(this.getData('btnStyles'), 'add', "type", null)

      }


    };
  }

  static actions() {
    return {};
  }

  static observers() {
    return {};
  }
}

export { ButtonComp };
































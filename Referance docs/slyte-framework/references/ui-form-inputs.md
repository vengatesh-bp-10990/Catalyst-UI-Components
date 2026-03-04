# sLyte Form & Input Components

## Table of Contents

- [autocomplete](#autocomplete)
- [calculator](#calculator)
- [calendar](#calendar)
- [Calendar](#Calendar)
- [calender](#calender)
- [checkbox](#checkbox)
- [checkboxgroup](#checkboxgroup)
- [clock](#clock)
- [colorbox](#colorbox)
- [colorpicker](#colorpicker)
- [combobox](#combobox)
- [counter](#counter)
- [datemultiselect](#datemultiselect)
- [daterangepicker](#daterangepicker)
- [dateselect](#dateselect)
- [datetimeinput](#datetimeinput)
- [dropdown](#dropdown)
- [Dropdown](#Dropdown)
- [fileupload](#fileupload)
- [input](#input)
- [listbox](#listbox)
- [mentionsinput](#mentionsinput)
- [multidropdown](#multidropdown)
- [multislider](#multislider)
- [number](#number)
- [radiobutton](#radiobutton)
- [radiobutton-group](#radiobutton-group)
- [rating](#rating)
- [search](#search)
- [selector](#selector)
- [signature](#signature)
- [slider](#slider)
- [tags](#tags)
- [text](#text)

## autocomplete

### autocomplete - overview

Autocomplete

An autocomplete, from the family of UI components, is a dropdown element which is used to search and display data from the set of available records. It can render data using an array or array of objects. It supports both yield and non yield.

Dependencies
```javascript
<!-- Individual component files -->

<link rel="stylesheet" href= "node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-autocomplete.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

 The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-dropdown.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-autocomplete.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-input.js" ></script>

<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-dropdown.css"> </link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-autocomplete.css"> </link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-input.css"> </link>


also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of an autocomplete is shown below.

Simple structure

Let us see the structure of lyte-autocomplete

Tags Used

Use the following tags to get a simple structure of an autocomplete

lyte-drop-box - container which is to be positioned
lyte-drop-body - Renders the dropdown body that shows the filtered suggestions.
lyte-drop-item - each list item
lyte-autocomplete-label - main display value
lyte-autocomplete-description - The The main wrapper tag for the autocomplete component.
Semantic structure
```javascript
<lyte-autocomplete >

</lyte-autocomplete>
```
```javascript
<lyte-autocomplete lt-prop-yield="true">
   <template is="registerYield" yield-name="rateIcon" >
    <lyte-drop-box>
      <lyte-drop-body>
          <template lyte-for={{someArray}} as item index>
             <lyte-drop-item data-value = {{index}}>
                 <lyte-autocomplete-label keywords={{item.keywords}}>
                     {{item.name}}
                 </lyte-autocomplete-label>
                 <lyte-autocomplete-description>
                    {{item.short}}
                 </lyte-autocomplete-description>
             </lyte-drop-item>
           </template>
       <lyte-drop-box>
     <lyte-drop-body>
  </template>
</lyte-autocomplete>
```
Autocomplete syntax - with and without yield
```javascript
<lyte-autocomplete lt-prop-highlight = true lt-prop-content = {{someArray}} lt-prop-label = 'name' lt-prop-description = 'key' >

</lyte-autocomplete>
```
```javascript
<lyte-autocomplete lt-prop-yield="true">
   <template is="registerYield" yield-name="rateIcon" >
    <lyte-drop-box>
      <lyte-drop-body>
          <template lyte-for={{someArray}} as item index>
             <lyte-drop-item data-value = {{index}}>
                 <lyte-autocomplete-label keywords={{item.keywords}}>
                     {{item.name}}
                 </lyte-autocomplete-label>
                 <lyte-autocomplete-description>
                    {{item.short}}
                 </lyte-autocomplete-description>
             </lyte-drop-item>
           </template>
       <lyte-drop-box>
     <lyte-drop-body>
  </template>
</lyte-autocomplete>
```
Default Autocomplete

Autocomplete can also be rendered using Array of strings . Here each string will be the display value and the key value for search. You can also customize your own autocomplete with yield.

```html
<lyte-autocomplete lt-prop-content = {{someArray}} lt-prop-yield = true lt-prop-highlight = true on-search = {{method('error')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
            <template lyte-for="{{someArray}} as item index">
                    <lyte-drop-item data-value = {{index}}>
                        <lyte-autocomplete-label>
                            {{item}}
                        </lyte-autocomplete-label>
                    </lyte-drop-item>
               </template>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
```html
<lyte-autocomplete lt-prop-content = {{someArray}} lt-prop-highlight = true on-search = {{method('error')}}>
</lyte-autocomplete>
```
```javascript
import { prop } from "@slyte/core";
// in your component

data (){
  return{
      someArray : prop ( 'array', { default : [
          "New file" , "open file" , "close file"
         ]
     } )
  }
}
static methods() {
  return{
    error : function ( visibleList , errorDiv , autocompleElem , inputValue , inputEvent ) {
        if ( visibleList.length == 0 ) {
            errorDiv.innerText = "Some error message"
        }
    }
  }
}
```
```html
<lyte-autocomplete>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
Features
Autocomplete with array of objects

Autocomplete can be rendered by using Array of objects with the ltpropcontent. Your main display value will be ltPropLabel key and ltPropDescription key will be your additional display value. Text search will be based on ltPropLabel value. If ltPropKeywords option is provided search will be based on provided key words. It should be in a array of strings format

```html
<lyte-autocomplete lt-prop-placeholder = 'Enter something' lt-prop-content = {{someArray}} lt-prop-yield = true lt-prop-highlight = true on-search = {{method('error')}}>
     <template is="registerYield" yield-name="yield">
         <lyte-drop-box>
             <lyte-drop-body>
             <template lyte-for={{someArray}}as item index ">
                     <lyte-drop-item data-value = {{index}}>
                         <lyte-autocomplete-label keywords={{item.keywords}}>
                             {{item.name}}
                         </lyte-autocomplete-label>
                         <lyte-autocomplete-description>
                             {{item.short}}
                         </lyte-autocomplete-description>
                     </lyte-drop-item>
                   </template>
             </lyte-drop-body>
         </lyte-drop-box>
     </template>
 </lyte-autocomplete>
```
```html
<lyte-autocomplete lt-prop-highlight = true lt-prop-content = {{someArray}} lt-prop-label = 'name' lt-prop-description = 'key' on-search = {{method('error')}}>
</lyte-autocomplete>
```
```javascript
import { prop } from "@slyte/core";
// in your component
data() {
  return {
      someArray : prop ( 'array' , { default : [
          {
              "name" : "File",
              "short" : "Ctrl+N",
              "keywords" : [ "create" , "file" , "new" ]
          },
          {
              "name" : "Save",
              "short" : "Ctrl+S",
              "keywords" : [ "save", "file" ]
          },
          {
              "name" : "Save as",
              "short" : "Ctrl+Shift+S",
              "keywords" : [ "Save" , "save as" , "file" ]
          }
        ]
      }),
      ltPropLabel : prop ( 'string' , { default : 'name' } ),
      ltPropDescription : prop ( 'string' , { default : 'short' } ),
      ltPropKeyWords : prop ( 'string' , { default : 'keywords' } )
  }
}
static methods(){
  return{
    error : function ( visibleList , errorDiv , autocompleElem , inputValue , inputEvent ) {
        if ( visibleList.length == 0 ) {
            errorDiv.innerText = "Some error message"
    }
  }
}}
```
```html
<lyte-autocomplete>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
Autocomplete with Grouping

Autocomplete list items can be grouped. Each Object in the given array will be the data for each group to be listed.

```html
<lyte-autocomplete lt-prop-yield = true lt-prop-content = {{someArray}} lt-prop-highlight = true on-search = {{method('error')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
            <template lyte-for='{{someArray}} as item index'>
                <lyte-drop-group>
                <template lyte-for-in="{{item}} as value key">
                      <lyte-drop-label>{{key}}</lyte-drop-label>
                      <template lyte-for="{{value}} as item index">
                            <lyte-drop-item>
                                <lyte-autocomplete-label>
                                    {{item.book}}
                                </lyte-autocomplete-label>
                                <lyte-autocomplete-description>
                                    {{item.short}}
                                </lyte-autocomplete-description>
                            </lyte-drop-item>
                        </template>
                    </template>
                  </lyte-drop-group>
                </template>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
```html
<lyte-autocomplete lt-prop-content = {{someArray}} lt-prop-highlight = true on-search = {{method('error')}} lt-prop-label = "name" lt-prop-description = 'author'>
</lyte-autocomplete>
```
```javascript
import { prop } from "@slyte/core";
// in your component


data(){
  return {
      someArray : prop ( 'array' , { default : [
                {
                 "History" : [
                      {
                          "book" : "Ponniyin selvan" , "short" : "kalki" , "keywords" : [ "history", "kalki" , "Ponniyin selvan" ]
                      },
                      {
                          "book" : "Kadal pura" , "short" : "Sandilyan" , "keywords" : [ "sandilyan" , "history" ]
                      },
                      {
                          "book" : "Veera pandian manaivi" , "short" : "Ramanathan" , "keywords" : [ "History" , "ramanathan" , "pandian" ]
                      }
                  ]
              },
              {
                  "Social" : [
                      {
                          "book" : "Ponniyin selvan" , "short" : "kalki" , "keywords" : [ "history", "kalki" , "Ponniyin selvan" ]
                      },
                      {
                          "book" : "Kadal pura" , "short" : "Sandilyan" , "keywords" : [ "sandilyan" , "history" ]
                      },
                      {
                          "book" : "Veera pandian manaivi" , "short" : "Ramanathan" , "keywords" : [ "History" , "ramanathan" , "pandian" ]
                      }
                  ]
              }
            ]
          })
  }
}
static methods() {
  return{
    error : function ( visibleList , errorDiv , autocompleElem , inputValue , inputEvent ) {
        if( visibleList.length == 0 ) {
            errorDiv.innerText = "Some error message"
        }
    }
  }
}
```
```html
<lyte-autocomplete>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-group>
                    <lyte-drop-label></lyte-drop-label>
                    <lyte-drop-item></lyte-drop-item>
                    <lyte-drop-item></lyte-drop-item>
                    <lyte-drop-item></lyte-drop-item>
                </lyte-drop-group>
                <lyte-drop-group>
                    <lyte-drop-label></lyte-drop-label>
                    <lyte-drop-item></lyte-drop-item>
                    <lyte-drop-item></lyte-drop-item>
                    <lyte-drop-item></lyte-drop-item>
                </lyte-drop-group>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
Autocomplete with external search

Autocomplete triggers a callback on keyup( via onExtSearch callback ). You can do some process and set correct data to autocomplete component. Based on your response results will be displayed.

```html
<lyte-autocomplete lt-prop-yield = true lt-prop-placeholder = 'Enter Something' lt-prop-content = {{someArray}} lt-prop-type = 'search' lt-prop-key-words ='keyword' lt-prop-highlight = 'true' lt-prop-label="name" lt-prop-external-search='true' lt-prop-description="author" lt-prop-appearance="box" on-ext-search = {{method('addData')}}>
     <template is="registerYield" yield-name="yield">
         <lyte-drop-box>
             <lyte-drop-body>
             <template lyte-for-in="{{someArray}} as value key ">
                     <lyte-drop-group>
                         <lyte-drop-label> {{useSomeHelpersToGetYourTitle}} </lyte-drop-label>
                         <template lyte-for=" {{value}} as item index ">
                             <lyte-drop-item>
                                 <lyte-autocomplete-label>
                                     {{item.book}}
                                 </lyte-autocomplete-label>
                                 <lyte-autocomplete-description>
                                     {{item.short}}
                                 </lyte-autocomplete-description>
                             <lyte-drop-item>
                             < /template>
                     </lyte-drop-group>
                     </template>
             </lyte-drop-body>
         </lyte-drop-box>
     </template>
 </lyte-autocomplete>
```
```html
<lyte-autocomplete lt-prop-placeholder = 'Enter Something' lt-prop-content = {{someArray}} lt-prop-type = 'search' lt-prop-key-words ='keyword' lt-prop-highlight = 'true' lt-prop-label="book" lt-prop-external-search='true' lt-prop-description="author" lt-prop-appearance="box" on-ext-search = {{method('addData')}}>
</lyte-autocomplete>
```
```javascript
import { prop } from "@slyte/core";
// in your component
data(){
  return {
      someArray : prop ( 'array' , { default : [
          "History" : {
              {
                  "book" : "Ponniyin selvan" , "short" : "kalki" , "keywords" : [ "history", "kalki" , "Ponniyin selvan" ]
              },
              {
                  "book" : "Kadal pura" , "short" : "Sandilyan" , "keywords" : [ "sandilyan" , "history" ]
              },
              {
                  "book" : "Veera pandian manaivi" , "short" : "Ramanathan" , "keywords" : [ "History" , "ramanathan" , "pandian" ]
              }
          },
          "Social" :{
              {
                  "book" : "Ponniyin selvan" , "short" : "kalki" , "keywords" : [ "history", "kalki" , "Ponniyin selvan" ]
              },
              {
                  "book" : "Kadal pura" , "short" : "Sandilyan" , "keywords" : [ "sandilyan" , "history" ]
              },
              {
                  "book" : "Veera pandian manaivi" , "short" : "Ramanathan" , "keywords" : [ "History" , "ramanathan" , "pandian" ]
              }
          }
      ] } )
  }
}
static methods() {
  return{
    error : function ( visibleList , errorDiv , autocompleElem , inputValue , inputEvent ) {
        if( visibleList.length == 0 ) {
            errorDiv.innerText = "Some error message"
        }
    },
    addData : function( inputValue, autocomplete, event ){
        autocomplete.ltProp( 'content' , [someNewdata] )
    }
  }
}
```
```html
<lyte-autocomplete>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
                <lyte-drop-item></lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-autocomplete>
```
Enabling Accessibilty

By default, aria attributes relay on Input and dropdown component.

### autocomplete - api

Properties

All properties should be prefixed with lt-prop. For more properties refer lyte-dropdown and lyte-input.

yield
DataType	:	Boolean
Default	:	false
Description	:	To render your own DOM, use 'yield'
content( data )
DataType	:	Array
Default	:	[ ] (empty array )
Description	:	Array of data available for constructing auto complete items. This should be in the 'array' or 'array of objects' format. For array of objects you need to specify 'label', 'description', 'keyword' keys.
key-words
DataType	:	Array
Default	:	-
Description	:	The key which contains list of associated keywords in ' content' array (for array of objects). Search will be based on given keywords. It should set as attribute for 'lyte-autocomplete-label'. By default textcontent of autocomplete will be used for search.
label
DataType	:	String
Default	:	-
Description	:	Key which specifies the main display value in the ' content' array (for array of objects);
description
DataType	:	String
Default	:	-
Description	:	Key which specifies the sub display value to be displayed along with 'label' in given 'content' (for array of objects)
dropdown-height
DataType	:	String
Default	:	-
Description	:	Sets max. height for the visible drop body.
dropdown-width
DataType	:	String
Default	:	auto
Description	:	Sets max.width for the visible drop body.
external-search
DataType	:	Boolean
Default	:	false
Description	:	It allows user to set data on every keyup. lyte-autocomplete triggers configured callback function('on-ext-search') . Based on the given data new results will be displayed.
highlight
DataType	:	Boolean
Default	:	false
Description	:	It will construct a span around matched texts of ' lyte-autocomplete-label ' and sets background color for highlight.
highlight-class
DataType	:	String
Default	:	lightAutocompleteHighlight (yellow color background)
Description	:	This class will be applied for highlighted span.
dropdown-class
DataType	:	String
Default	:	-
Description	:	Same class will be applied for autocomplete dropdown body.
min-length
DataType	:	Number
Default	:	1
Description	:	It defines the minimum letters required to enable autocomplete search. Dropdown opens after input value reaches given minimum length. If it is set to 0 dropdown will be opened on initial click.
method
DataType	:	String
Default	:	contains
Description	:	It specifies the method of text searching.
value-set
DataType	:	Boolean
Default	:	true
Description	:	If this is set to true, selected option text will be set as input value.
prevent-inside-click
DataType	:	Boolean
Default	:	false
Description	:	If this is set to true, dropdown will not be closed while clicking the input.
ext-search-open
DataType	:	Boolean
Default	:	false
Description	:	If this is set to true, dropdown will be opened before giving callback in external search.
error-message
DataType	:	String
Default	:	-
Description	:	This will set as innerText for error block. If you want to customize error message with your own HTML set it in search callback.
error-class
DataType	:	String
Default	:	-
Description	:	This will be added to error div's classList
type
DataType	:	String
Default	:	text
Description	:	Search and close icon is only visible for lt-prop-type = 'text'
trim
DataType	:	Boolean
Default	:	false
Description	:	It will trim input value before performing search.
diacritic
DataType	:	Boolean
Default	:	false
Description	:	It will convert diacritic letters to normal alphapet before performing search.
input
DataType	:	object
Default	:	{}
Description	:	You can give all the basic properties of lyte-input as single object.
dropdown
DataType	:	object
Default	:	{}
Description	:	You can give all the basic properties of lyte-dropdown as single object.
active-element
DataType	:	string
Default	:	input,textarea
Description	:	Given element will be marked as active element by lyte-dropdown.
data-tabindex
DataType	:	string
Default	:	0
Description	:	Given value will be set to inner input elements data-tabindex attribute.
focus-on-open
DataType	:	boolean
Default	:	false
Description	:	Autocomplete dropdown will be automatically opened in focus ( if min length is satisfied ).
Methods

You can provide the methods to lyte-autocomplete either via script or HTML. For more methods refer lyte-input and lyte-dropdown

on-select
Description	:	This method is called whenever an item is selected.
on-search
Description	:	This method is called on every keyup.
ReturnValue	:	If this method returns false, mismatched items will not be hidden.
on-ext-search
Description	:	This method is called on every keyup. You can make request and render your suggestions based on your response.
before-render
Description	:	This method is invoked before component is rendered.
after-render
Description	:	This method is invoked after rendering the component.
on-focus
Description	:	This method is called whenever the input is focused.
on-blur
Description	:	This method is called whenever the input is blured.
Functions

You can call this function anywhere after lyte-autocomplete is rendered

setValue
Description	:	This function should be called with one param * value => it will replace the current input value with given value
focus
Description	:	It will call inputs focus function. This will focus input field.
toggle
Description	:	It will call lyte-dropdown's toggle function.
blur
Description	:	You can call this function for triggering manual blur on input.
click
Description	:	You can call this function for triggering manual click on input.
select
Description	:	You can call this function for triggering manual select on input
Yields

You can render your own drop items by using yield

yield ( description )
Description	:	All the elements given inside the yield template will be rendered instead of default DOM.

---

## calculator

### calculator - overview

Calculator

The calculator is an UI component which is similar to a small handheld calculator. It is a non-yielded component.

Dependencies
```javascript
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calculator.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-scrollbar.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-calculator.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-scrollbar.css" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-calculator.css"> </link>


also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Simple structure

Let us see the structure of lyte-calculator

Tags Used

Use the following tags to get a simple structure of a calculator

lyte-calculator - The wrapper tag of the calculator component.
Semantic structure
```html
<lyte-calculator></lyte-calculator>
```
Syntax
```html
<lyte-calculator></lyte-calculator>
```
Default Calculator

The lyte-calculator by default renders a simple calculator with basic operations like addition, subtraction, multiplication, division and percentage. You can use both ordinary numeric buttons on the keyboard and seperate numeric buttons on the screen.

AC
 Used to reset the calculator
 Used to delete the last entered value
 Used to toggle between basic and scientific calculator

Scientific calculator support calculations of trigonometric and hypotenuse functions such as sine, cosine, tangent and their inverse. Using this calculator you can find the logarithm of a number, raise to a power, square root and n th root.

```html
<lyte-calculator> </lyte-calculator>
```
Editable Calculator

A calculator can be made editable which allows you to add or erase some calculations by setting the property lt-prop-editable as true. You can operate this calculator directly from your keyboard, so you can add or delete a part of calculations at any place in the mathematical expression and the result will be calculated according to that.

```html
<lyte-calculator lt-prop-editable=true> </lyte-calculator>
```

### calculator - api

Properties
The following are the properties of calculator. The properties of calculator must be prefixed with ltProp
editable
Name	:	editable(lt-prop-editable)
Description	:	On setting true makes the calculator editable
Datatype	:	boolean
Default	:	false
auto focus
Name	:	auto-focus(lt-prop-auto-focus)
Description	:	Set true to make the calculator focus automatically
Datatype	:	boolean
Default	:	false
aria
Name	:	aria(lt-prop-aria)
Description	:	Set it true to enable aria attributes for the calculator
Datatype	:	boolean
Default	:	false
aria attributes
Name	:	aria-attributes(lt-prop-aria-attributes)
Description	:	Used to set the ARIA attributes to the calculator element.
Datatype	:	object
Default	:	{}
DataTabindex
Name	:	Datatabindex(lt-prop-data-Tabindex)
Description	:	This is an attribute to set tabindex.
Datatype	:	Number
Default	:	0

---

## calendar

### calendar - overview

Calendar

Calender component renders a calendar widget allowing the user to pick a date and navigate through the calendar.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calendar.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of the calendar can be seen below.




Basic Calendar

The lyte-calendar renders the entire month of today's date by default. If lt-prop-current-date is set then the calendar renders the current date. Whenever the calendar is navigated out of today's date, a today button is rendered at the bottom. On clicking it, you are navigated back to today's date. In the example below, a basic calendar that renders today's month is shown.

```html
<lyte-calendar></lyte-calendar>
```

All dates passed to the calendar need to follow the standard lt-prop-format property. For example, if the lt-prop-format="DD/MM/YYYY", then the lt-prop-current-date property passed to the calendar should have the same format.
Valid value for lt-prop-current-date - 22/04/2022
Invalid value for lt-prop-current-date - 22/Apr/2022


Similarly, trying to retrieve the lt-prop-current-date after selecting a date in the calendar will yield a date in the same format as lt-prop-format.

There are few properties which follow the lt-prop-format are:
lt-prop-current-date
lt-prop-min-date
lt-prop-max-date


Each of the dates in the calendar have a data-date attribute which contains the full date(The full date is calculated according to the lt-prop-format passed). You can inspect the individual dates in the calendar to find the data-date property.

The lyte-calendar uses lyte-moment underneath, so all date manipulation functionalities are derived from it. All formats supported from lyte-calendar are derived from it as well. So visit the help doc of lyte-moment plugin to understand the different formats supported in lyte-calendar.

Calendar With Specified Date

As mentioned above, the calendar can also render the month of a selected date. This is achieved using the lt-prop-current-date attribute. Make sure the value passed to the current date attribute is same as the lt-prop-format. Default format is MM/DD/YYYY.

```html
<lyte-calendar lt-prop-current-date="03/03/2018"></lyte-calendar>
```
Calendar With Footer

The calendar can also take in a footer through yield. Use the lt-prop-yield attribute to achieve this.

```html
<lyte-calendar lt-prop-yield="true">
    <template is="registerYield" yield-name="footer">
        <div style="padding: 5px 0px 15px 15px;">
            <a>Day</a>
            <a>Week</a>
            <a>Month</a>
        </div>
    </template>
</lyte-calendar>
```
Range Calendar

You can also specify boundaries for your calendar. Any dates outside the boundaries are not selectable and are not highlighted. You can set the boundaries using the lt-prop-min-date and the lt-prop-max-date attributes. You can set either one of them as well and the calendar will be rendered accordingly. The format of the lt-prop-min-date and lt-prop-max-date should be same as the lt-prop-format .

```html
<lyte-calendar lt-prop-current-date="11/15/2018" lt-prop-min-date="11/11/2018" lt-prop-max-date="12/11/2018"></lyte-calendar>
```
```html
<lyte-calendar lt-prop-current-date="11/15/2018" lt-prop-min-date="11/11/2018"></lyte-calendar>
```
Calendar With Different Navigation Bar

The lyte-calendar can also use a dropdown to navigate through dates. This is achieved using the lt-prop-header-type attribute. You can set it to dropdown to render a dropdown.

```html
<lyte-calendar lt-prop-header-type="dropdown"></lyte-calendar>
```
Drilldown Calendar

You can render a drilldown calendar by setting the lt-prop-header-type attribute to drilldown.

```html
<lyte-calendar lt-prop-header-type="drilldown"></lyte-calendar>
```
Classes Used

Every date in the lyte-calendar is wrapped inside a div. And this div has the following classes depending on the date.

```javascript
lyteCalDiffMonth - When the date is not part of the current viewed month
lyteCalWeekend - To represent weekends(For now these are just saturday and sunday)
lyteCalToday - Today's date
lyteCalSel - Current Selected Date
lyteCalDisabled - When the date is out of range(lt-prop-min-date and lt-prop-max-date)
lyteCalCDate and lyteCalTableCell - added to every date
```
Interaction With Other Components

The lyte-calendar can be combined with other components to build complex ui-elements. The example below demonstrates a lyte-calendar in a lyte-popover opened by clicking on a lyte-button.

```html
<lyte-popover lt-prop-content-padding="0px" lt-prop-show-close-button="false" id="calendarPopover" lt-prop-origin-elem="#popoverExample">
    <template is="registerYield" yield-name="popover">
        <lyte-popover-content style="padding: 0px;">
            <lyte-calendar></lyte-calendar>
        </lyte-popover-content>
    </template>
</lyte-popover>

<lyte-button id="popoverExample" onclick={{action("openCalendar")}}>
    <template is="registerYield" yield-name="text">
        Open
    </template>
</lyte-button>
```
```javascript
actions: {
    openCalendar: function () {
        document.querySelector( 'lyte-popover' ).ltProp( 'show' , true );
    }
}
```
Foot Notes

Use the on-date-selected callback to perform operations when a particular date is selected. The callback returns the current selected date as an argument. The format of this argument is same as the lt-prop-format.

```html
<lyte-calendar on-date-selected={{method("doStuff")}}></lyte-calendar>
```
```javascript
methods : {
    doStuff : function () {
        // Work with the arguments.
    }
}
```

Set different formats for your calendar using the lt-prop-format attribute. Head to lt-prop-format to know more about the supported formats.

```html
<lyte-calendar lt-prop-format="MM/DD/YYYY" on-date-selected={{method("doStuff")}}></lyte-calendar>
```
```javascript
methods : {
    doStuff : function () {
        // Work with the arguments.
    }
}
```

You can revert the calendar back to today's month by making use of the .revertToToday() utility provided in lyte-calendar. Simply query select the calendar and call the function on it. This is same as clicking on the today button of the calendar. The on-navigate callback does get fired when .revertToToday() is called.

```javascript
document.querySelector( 'lyte-calendar' ).revertToToday();
```

You can get the current selected date in lyte-calendar by making use of .ltProp( 'currentDate' ) . Simply querySelect the calendar and invoke the function on it.

```javascript
var a = document.querySelector( 'lyte-calendar' ).ltProp( 'currentDate' );
```

You can also set the current selected date in lyte-calendar by making use of .ltProp() . Query select your calendar and invoke the function.

```javascript
document.querySelector( 'lyte-calendar' ).ltProp( 'currentDate', '5/5/2012' ) ;
```

### calendar - api

Properties

All properties must be prefixed with lt-prop.

current-date(lt-prop-current-date)
Description	:	Set the current selected date in the calendar. When lt-prop-current-date is set during render, then the rendered month is the month of the current selected date. You can also get it using the .ltProp() function.
Datatype	:	string
format(lt-prop-format)
Description	:	Set the format for the calendar. When the format is set, then lt-prop-current-date, lt-prop-min-date and lt-prop-max-date should be passed according to the format.
Datatype	:	string
Default	:	MM/DD/YYYY
year(lt-prop-year)
Description	:	Whether to display the year navigation or not.
Datatype	:	boolean
Default	:	true
month-header-format(lt-prop-month-header-format)
Description	:	Set the format of the month header.
Datatype	:	string
Default	:	MMM YYYY
yield(lt-prop-yield)
Description	:	Set it to true to set the footer yield of the calendar.
Datatype	:	boolean
Default	:	false
min-date(lt-prop-min-date)
Description	:	The minimum boundary or date from which, it is selectable. All dates behind this date are greyed out and are not selectabled. This should adhere to lt-prop-format. It can also be combined with lt-prop-max-date.
Datatype	:	string
max-date(lt-prop-max-date)
Description	:	The maximum boundary or date beyond which it is not selectable. All dates beyond this date are greyed out and are not selectabled. It should adhere to lt-prop-format. It can also be combined with lt-prop-min-date.
Datatype	:	string
start-week-day(lt-prop-start-week-day)
Description	:	This is used to specify the first day of each row(start day of the week). Meaning whether the calendar should render from sunday, monday, etc.
Datatype	:	number
Default	:	1
fill-rows(lt-prop-fill-rows)
Description	:	This is used to decide whether to fill the previous and next month dates or to just leave them blank.
Datatype	:	boolean
Default	:	true
number-of-rows(lt-prop-number-of-rows)
Description	:	This is used to specify the number of rows to be rendered in the calendar. Each row has 7 dates and can extend beyond the current month. The minimum value for this attribute is 5.
Datatype	:	number
Default	:	6
header-type(lt-prop-header-type)
Description	:	This is used to set the header type of the navigation bar. It can either be a set of normal nav buttons or a dropdown or drilldown.
Datatype	:	string
Default	:	default
dropdown(lt-prop-dropdown)
Description	:	This is an object with which you can pass properties of the dropdown in lt-prop-header-type=dropdown type calendar(change properties of the dropdown in the calendar navigation bar). The key in the object is the property name and the value is the property value. There is no need to provide the ltProp prefix. You can find all the properties supported by the dropdown in the dropdown's documentation.
Datatype	:	object
Default	:	{ callout: true }
show-today(lt-prop-show-today)
Description	:	Set it to false to not show the today button in the calendar
Datatype	:	boolean
Default	:	true
i18n(lt-prop-i18n)
Description	:	Set this property to true, if you want to return the dates of the calendar in internationalized format. If you want to use the ui-components in your app, you need to bring in an I18n file(which determines the language in which the ui-components are be rendered). And if you want the dates returned to be in the same language as ui-components' language then set this property to true.
Datatype	:	boolean
Default	:	false
body-yield(lt-prop-body-yield)
Description	:	Set it to true to add your own customized calendar dates.
Datatype	:	boolean
Default	:	false
Methods

The following are the methods of lyte-calendar

on-date-selected
Description	:	Invoked when a date is selected in the calendar.
on-view-change
Description	:	Invoked when the drilldown calendar moves from one view to another(date to month or month to decade, etc).
on-navigate
Description	:	Fired when you navigate from one month to another( or one year to another). It is also fired when today button is clicked. It is not fired when you set currentDate through .ltProp().
Utilities

Utility functions available in lyte-calendar.

.revertToToday()
Description	:	If your calendar has navigated out of current months date and you want to reset it back to todays date, then you can use this function.
.revertToSelected()
Description	:	If you want to navigate the calendar back to the current selected date's month, then use this util.

---

## Calendar

### Calendar - api

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## calender

### calender - overview

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## checkbox

### checkbox - overview

Checkbox

A checkbox is an ui-element that helps the user make a binary choice.

```javascript
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>
```
Default Checkbox

Calling the lyte-checkbox without setting the lt-prop-type attribute creates a default checkbox. You can set the name, value and id attribute for the input rendered inside the lyte-checkbox by making use of the lt-prop-name, lt-prop-value, and lt-prop-id attribute. If you want the checkbox to be checked when it is rendered, use the lt-prop-checked, attribute. You can set the label for the checkbox using the lt-prop-label, attribute.

```html
<lyte-checkbox lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```
Primary Checkbox

To render a primary checkbox simply set the lt-prop-type attribute to primary .

```html
<lyte-checkbox lt-prop-type="primary" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```
Switch Checkbox

To render a switch checkbox simply set the lt-prop-type attribute to switch.

```html
<lyte-checkbox lt-prop-type="switch" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```
Slider

To render a slider, simply set the lt-prop-type attribute to slider .

```html
<lyte-checkbox lt-prop-type="slider" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```
Disabled Checkbox

You can disable any of the above types by making use of the lt-prop-disabled attribute. Set it to true to disable them.

```html
<lyte-checkbox lt-prop-disabled="true" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box">
</lyte-checkbox>
<lyte-checkbox lt-prop-disabled="true" lt-prop-type="switch" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box">
</lyte-checkbox>
<lyte-checkbox lt-prop-disabled="true" lt-prop-type="slider" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box">
</lyte-checkbox>
```
Native Events Of Checkbox

The lyte-checkbox tag supports click, focus and blur functions. You can simply querySelect a lyte-checkbox from the DOM and call the necessary function. The click event changes the state of the checkbox, whereas the focus event can be used to focus it. After it has been focused, you can press spacebar or enter to change the state of the checkbox. Similarly, the blur event is used to remove focus from the checkbox.

```javascript
document.querySelector( 'lyte-checkbox' ).click();
```
```javascript
document.querySelector( 'lyte-checkbox' ).focus();
```
```javascript
document.querySelector( 'lyte-checkbox' ).blur();
```
Foot Notes

The lyte-checkbox provides a number of callbacks for you to work with and do actions according to the change in state. The callbacks are on-changed, , on-checked, on-unchecked, on-before-checked, and on-before-unchecked. When the checkbox is checked, the order in which the callbacks are fired are on-before-checked > on-checked > on-changed . When the checkbox is unchecked, the order in which the callbacks are fired are on-before-unchecked > on-unchecked > on-changed . You can return false in either the on-before-checked or the on-before-unchecked to prevent the checkbox from changing state. By default, when a checkbox is checked on render, its callbacks are not fired. To fire these callbacks on render, set the lt-prop-fire-on-init to true .

```html
<lyte-checkbox on-before-unchecked={{method("preventUncheck")}} lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```
```javascript
static methods () {
    return{
       preventUncheck : function () {
        // do stuff
       return false ;
       }
    }
}
```

You can change the state of the checkbox through script by making use of the .ltProp() function. Changing the state of the checkbox through script causes callbacks to fire. When a checkbox is checked, then the on-before-checked , on-checked and on-changed callbacks are fired. When a checkbox is unchecked, then the on-before-unchecked , on-unchecked and on-changed callbacks are fired.

```javascript
document.querySelector ( 'lyte-checkbox' ).ltProp( 'checked' , true );
```

You can get the state of the checkbox through script using the .ltProp() function.

```javascript
document.querySelector ( 'lyte-checkbox' ).ltProp( 'checked' );
```

You can set a class to the label of the checkbox by setting the lt-prop-label-class .
```html
<lyte-checkbox lt-prop-label-class="checkbox-red" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```

It should be noted that the checkbox icon rendered in lyte-checkbox is derived from an svg file. This is attached to a span by using the background property. So you can create a custom checkbox by changing the background property of this span and appending your own svg icons. This is achieved using the lt-prop-class attribute which sets a class directly on the span.
```html
<lyte-checkbox lt-prop-class="checkbox-green" lt-prop-name='checkbox' lt-prop-checked="true" lt-prop-value='val' lt-prop-id="checkbox" lt-prop-label="Check Box"></lyte-checkbox>
```

### checkbox - api

Properties

All properties must be prefixed with lt-prop.

type(lt-prop-type)
Description	:	This is used to render different types of checkboxes available in lyte-ui-components.
Datatype	:	string
Default	:	default
id(lt-prop-id)
Description	:	This is used to set the id attribute of the input[type="checkbox"] rendered inside the checkbox
Datatype	:	string
disabled(lt-prop-disabled)
Description	:	This is used to disable the checkbox.
Datatype	:	boolean
Default	:	false
checked(lt-prop-checked)
Description	:	This is used to check or uncheck the checkbox. Set it to true to check it and false to uncheck it. The value of lt-prop-checked changes when the checkbox is toggled through a click. When lt-prop-checked changes the corresponding callbacks are fired.
Datatype	:	boolean
Default	:	false
label(lt-prop-label)
Description	:	This is used to set the label for the checkbox.
Datatype	:	string
name(lt-prop-name)
Description	:	This is used to set the name attribute of the input rendered inside the checkbox.
Datatype	:	string
value(lt-prop-value)
Description	:	This is used to set the value attribute of the input rendered inside the checkbox.
Datatype	:	string
read-only(lt-prop-read-only)
Description	:	This is used to set the readonly attribute of the input rendered inside the component. The state of the checkbox cannot be changed when this is set to true.
Datatype	:	boolean
Default	:	false
fire-on-init(lt-prop-fire-on-init)
Description	:	This is used to decide whether to fire the callbacks on render of the checkbox( only when it is checked ).
Datatype	:	boolean
Default	:	false
class(lt-prop-class)
Description	:	This is used to set the class attribute of the span which renders as the checkbox icon.
Datatype	:	string
label-class(lt-prop-label-class)
Description	:	This is used to set a class for the label of the checkbox.
Datatype	:	string
yield(lt-prop-yield)
Description	:	This allows you to yield the text label of the checkbox. The content you provide in the yield replaces the text inside a span in the checkbox. Using this property prevents you from using lt-prop-label.
Datatype	:	boolean
Default	:	false
prevent-callback-observers(lt-prop-prevent-callback-observers)
Description	:	Set this to false to prevent callbacks from firing when changing lt-prop-checked through script
Default	:	false
Datatype	:	boolean
focus(lt-prop-focus)
Description	:	Set this to true if you want to focus the checkbox. lt-prop-auto-focus only focuses on initial render. This focuses the checkbox even after it is rendered.
Datatype	:	boolean
Default	:	false
aria-checkbox(lt-prop-aria-checkbox)
Description	:	This is used to set ARIA attributes to the input rendered inside the checkbox.
Datatype	:	object
Default	:	{}
focus(lt-prop-focus)
Description	:	Set this to true if you want to focus the checkbox. lt-prop-auto-focus only focuses on initial render. This focuses the checkbox even after it is rendered.
Datatype	:	boolean
Default	:	false
Version	:	From V3.2.0
prevent-callback-observers(lt-prop-prevent-callback-observers)
Description	:	Set this to false to prevent callbacks from firing when changing lt-prop-checked through script
Default	:	false
Datatype	:	boolean
Version	:	From V4.0.0
data-tabindex(lt-prop-data-tabindex)
Description	:	Sets the data tabindex on the input rendered inside the lyte checkbox. Refer the focus stack documentation to learn more about data tabindex.
Default	:	
Datatype	:	string
Version	:	From V3.92.0
show-tooltip(lt-prop-show-tooltip)
Description	:	Sets a tooltip on the label of the checkbox if the text of the label forms a ellipsis.
Default	:	false
Datatype	:	boolean
Version	:	From V3.94.0
tooltip-config(lt-prop-tooltip-config)
Description	:	Sets the configuration of the tooltip shown on the label. Refer lyte-tooltip to learn more about the configuration object.
Default	:	
Datatype	:	Object
Version	:	From V3.94.0
tooltip-class(lt-prop-tooltip-class)
Description	:	Sets the class of the tooltip shown on the label
Default	:	
Datatype	:	string
Version	:	From V3.94.0
Aria(lt-prop-aria)
Description	:	Shows an on/off text inside the switch checkbox to help visually impaired users.
Default	:	false
Datatype	:	boolean
Version	:	From V3.95.0
Methods

The following are the methods of lyte-checkbox.

on-changed
Description	:	Fired when the state of the checkbox is changed (checked or unchecked).
on-before-checked
Description	:	Fired before the checkbox is checked.

Returning false on render in on-before-checked(lt-prop-fire-on-init=true) does not prevent the checkbox from getting checked

on-checked
Description	:	Fired when the checkbox is checked.
on-before-unchecked
Description	:	Fired before the checkbox is unchecked.
on-unchecked
Description	:	Fired when the checkbox is unchecked.
Utilities

Utility Functions of lyte-checkbox

.click()
Description	:	This invokes a click function on the lyte-checkbox. This changes the state of the checkbox.
.focus()
Description	:	This focuses the checkbox after which we can press the spacebar or the enter key to change its state.
.blur()
Description	:	This removes focus from a checkbox.

---

## checkboxgroup

### checkboxgroup - overview

Checkbox Group

Checkbox group, a component helping you to create a group of checkboxes.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-checkbox-group.css"></link>
```
Basic Example

The lyte checkbox group allows you to render a group of checkboxes.

```html
<lyte-checkbox-group lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-checkbox-group>
```
```javascript
data() {
prop("array",{
default:[ {
        'name': 'label 1',
        'value': '1'
    }, {
        'name': 'label 2',
        'value': '2'
    }, {
        'name': 'label 3',
        'value': '3'
    } ]
})}
```

In the above example, you can see that an array of objects is passed to the lyte-checkbox-group element through the lt-prop-options attribute.

Each object in the array must contain the label for each checkbox and a value to uniquely identify it.

The keys for these values must be passed to the lt-prop-user-value and lt-prop-system-value. In the above example, the name key referenced by lt-prop-user-value contains the label of the checkbox and the value key referenced by lt-prop-system-value contains the unique value to identify each checkbox. These values are passed to the lt-prop-label and lt-prop-value properties of the lyte-checkbox rendered inside the group.

Alignment

You can align the checkboxes either horizontally or vertically using the lt-prop-alignment property.

```html
<lyte-checkbox-group lt-prop-alignment="vertical" lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-checkbox-group>
```
Selected Values

To get the selected values of the checkbox group, use the lt-prop-selected attribute. The lt-prop-selected will be an array of objects and these objects are nothing but the objects inside the lt-prop-options.

Similarly, to render a group with initial selected values pass an array of objects to the lt-prop-selected attribute.

```html
<lyte-checkbox-group lt-prop-selected={{selected}} lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-checkbox-group>
```
```javascript
data()
{
    prop("array",{
    default:[ {
        'name': 'label 1',
        'value': '1'
    }, {
        'name': 'label 2',
        'value': '2'
    }, {
        'name': 'label 3',
        'value': '3'
    } ]
    selected: [ {
        'name': 'label 2',
        'value': '2'
    } ]
})
}
```

You can get/set the selected array in javascript using the .ltProp() function.

```javascript
// Getter
var group = document.querySelector( 'lyte-checkbox-group' );
var selectedArray = group.ltProp( 'selected' );

// Setter

group.ltProp( 'selected', myNewArray );
```
Yielded Group

You can also yield the lyte-checkbox-group using the lt-prop-yield attribute. The lt-prop-yield allows you to pass in your own label for each of the checkboxes rendered inside the group.

```html
<lyte-checkbox-group lt-prop-yield="true" lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value">
    <template is="registerYield" yield-name="yield">
        <b>{{lyteItem.name}}</b>
    </template>
</lyte-checkbox-group>
```

In the above example, the content inside the yield will be used for every checkbox rendered inside the group.

The lyteItem variable that is used inside the yield is a variable which is passed to the yield from within the lyte-checkbox-group. It is nothing but the individual object in the lt-prop-options array.

### checkboxgroup - api

Properties

All properties must be prefixed with lt-prop.

Type(lt-prop-type)
Description	:	This is used to render the different types of checkboxes. This will be applied to all the checkboxes rendered inside the group.
Datatype	:	string
Default	:	default
Name(lt-prop-name)
Description	:	This is used to set the name attribute of the input rendered inside the lyte-checkboxes rendered inside the group. All checkboxes will take in the same name value.
Datatype	:	string
User value(lt-prop-user-value)
Description	:	This represents the key in each object of lt-prop-options array which holds the label for each checkbox.
Datatype	:	string
Default	:	name
System value(lt-prop-system-value)
Description	:	This represents the key in each object of lt-prop-options array which holds the value that uniquely identifies the checkboxes.
Datatype	:	string
Default	:	value
fire-on-init(lt-prop-fire-on-init)
Description	:	This is used to decide whether to fire the callbacks on render of the checkbox group(only when some of the checkboxes are checked).
Datatype	:	boolean
Default	:	false
class(lt-prop-class)
Description	:	This is used to set the class attribute of the span which renders as the checkbox icon. This applies to all checkboxes in the group.
Datatype	:	string
options(lt-prop-options)
Description	:	This is the array of objects that needs to be passed to the checkbox group where each object represents a checkbox.
Datatype	:	array
selected(lt-prop-selected)
Description	:	This represents the checked checkboxes of the group. It is in the form of an array of objects where each object is nothing but the object in the lt-prop-options array.
Datatype	:	array
alignment(lt-prop-alignment)
Description	:	Use this to align the checkboxes horizontally or vertically.
Datatype	:	string
Default	:	horizontal
focus(lt-prop-focus)
Description	:	Set this true, if you want to focus the first checkbox rendered in the group.
Datatype	:	boolean
Default	:	false
disabled-list(lt-prop-disabled-list)
Description	:	This is used to disable some of the checkboxes rendered inside the group. It is in the form of an array of objects where each object is nothing but the object in the lt-prop-options array.
Datatype	:	array
yield(lt-prop-yield)
Description	:	This allows you to yield the text label of each of the checkbox in the group. The content you provide in the yield replaces the text inside a span in each of the checkbox. The lyteItem variable available inside the yield is passed from within the checkbox group and is nothing but the object in the lt-prop-options array.
Datatype	:	boolean
Default	:	false
MaxCount(lt-prop-max-count)
Description	:	With this property, you can set the maximum limit of options that can be selected.
Datatype	:	Number
Default	:	0
ShowMessage(lt-prop-show-message)
Description	:	With this property, you can set the message to be displayed, if the max count exceeds. This property, being boolean in nature, on setting false will not display the desired message.
Datatype	:	Boolean
Default	:	true
Message(lt-prop-message)
Description	:	With this property, you can display the desired msg to get displayed while using 'ShowMessage' property.
Datatype	:	String
Default	:	Maximum number of options selected.
Methods

THe following are the methods of lyte-checkbox.

on-changed
Description	:	Fired when the state of any of the checkboxes in the group is changed.
on-before-checked
Description	:	Fired before any checkbox is checked in the group.
on-checked
Description	:	Fired when any of the checkboxes is checked in the group.
on-before-unchecked
Description	:	Fired before any of the checkbox is unchecked in the group.
on-unchecked
Description	:	Fired when any of the checkbox is unchecked in the group.

---

## clock

### clock - overview

Clock

Lyte-clock from the family of UI component, is a floating clock can also be widely used as stopwatch and timer.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-clock.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Clock

Here is a sample for your reference. To set an analog clock use the property lt-prop-type as analog.



03
:
03
:
39
PM
 
```html
<lyte-clock> </lyte-clock>
<lyte-clock lt-prop-type="analog"> </lyte-clock>
```
Stopwatch

A virtual timepiece designed to measure the amount of time that elapses between its activation and deactivation. To avail this, set the property lt-prop-mode as stopwatch



00 : 00 .00
Start
```html
<lyte-clock lt-prop-mode="stopWatch"> </lyte-clock>
```
Timer

A virtual timer is a specialized type of clock used for measuring specific time intervals. Set the property lt-prop-mode as timer.



00
Hrs
:
02
Mins
:
00
Secs
Duration Time
```html
<lyte-clock lt-prop-mode="timer" lt-prop-duration="00:03:00"> </lyte-clock>
```

### clock - api

Properties

All the properties are prefixed with lt-prop.

lt-prop-appearance
Description	:	The "lt-prop-appearance" is used for the appearance of the virtual clock component where by default the user can customize their own style. sLyte has given a circular frame style.
Value Type	:	String
lt-prop-type
Description	:	The "lt-prop-type" is used to specify whether the lyte-clock should be used as a digital clock or analog clock.
Value Type	:	String
lt-prop-format
Description	:	The "lt-prop-format" is used to specify the format (24hrs or 12 hrs) to be used.
Value Type	:	String
lt-prop-mode
Description	:	The "lt-prop-mode" is used to change the mode of the lyte-clock from clock to either stopwatch or timer.
Data Type	:	String
lt-prop-alarm
Description	:	The "lt-prop-alarm" is used to act as an alarm or to alert the remaining time in case of timer. This property will work with corresponding to lt-prop-mode
Data Type	:	String
lt-prop-duration
Description	:	The "lt-prop-duration" is the remaining time given to the timer to run.
Data Type	:	String
lt-prop-end-time
Description	:	The "lt-prop-end-time" is used to specify the end time from the point it has been triggered. It works only on timer mode.
Data Type	:	String
lt-prop-end-date
Description	:	The "lt-prop-end-date" is used to specify the end date until which the timer should run from the point it has been triggered, this will take 12:00:00 am as the end time, user can give a specify time too by using the lt-prop-end-time property along with this.
Data Type	:	String
lt-prop-start-time
Description	:	With this property, you can set the timer to get triggered at a particular time.
Data Type	:	String
lt-prop-unit-label
Description	:	With this property, you can customise the unit label which is getting rendered.
Data Type	:	Object
Methods

The following are the methods of clock.

on-timer-start
Description	:	The "on-timer-start" is the callback function provided by the component to the user. This callback function will be executed when the timer is started.
Method Name	:	on-timer-start
on-timer-end
Description	:	The "on-timer-end" is the callback function provided by the component to the user. This callback function will be executed when the timer has ended.
Method Name	:	on-timer-end
on-time-reached
Description	:	The "on-time-reached" is the callback function provided by the component to the user. This callback function will be called when the timer or clock reaches the user specified time.
Method Name	:	on-time-reached

---

## colorbox

### colorbox - overview

Colorbox

Colorbox is a customizable UI component, used to display images in an overlay above the current page.

Dependencies

```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-colorbox.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

You can choose to use the default colorbox or create your own colorbox ie. customize it using yield and provide some specific classes so that the fuctionalites can be handled by this component.
For customized colorbox, it is required to provide the below mentioned classes:

lyteCBox - This class identifies the entire colorbox div.
lyteCBoxTitle - This class identifies the section where the title of the image will be dispalyed.
lyteCBoxOverlay - This class identifies the section within which the div containing the image will reside.
lyteCBoxContent - This class identifies the section which contains the image.
lyteCBoxPrevious - This identifies the section having previous icon if provided.
lyteCBoxNext - This identifies the section having next icon if provided.
lyteCBoxDownload - This identifies the section or icon on clicking which we can download the currently viewed image. NOTE : The default download function is supported only in modern browsers that supports download property in anchor element. In browsers where it is not supported like IE, use onDownload method to provide your own code to download the file.
lyteCBoxClose - This identifies the section or icon on clicking which the colorbox will be closed.
Colorbox - With And Without Yield

Here is a sample code given for your reference. You can choose the from the option and see the howw it reflects in any of the examples below.

 Default Colorbox - Without Yield

 Customized Colorbox - With Yield

```html
<lyte-colorbox lt-prop = '{"selectors":["selector1","selector2"]}' > </lyte-colorbox>
```
```html
<lyte-colorbox lt-prop = '{"selectors" : ["selector1"]}' lt-prop-yield = "true">
    <template is = "registerYield" yield-name = "colorBoxYield">
        <div class = "lyteCBoxOverlay"> </div>
        <div class = "lyteCBoxContent customColorpickerContent"> </div>
        <div class = "lyteCBoxClose">
            <svg viewport = "0 0 28 28" version = "1.1" xmlns = "http://www.w3.org/2000/svg">
                <line x1 = "1" y1 = "27" x2 = "27" y2 = "1" stroke = "white" stroke-width = "2"> </line>
                <line x1 = "1" y1 = "1" x2 = "27" y2 = "27" stroke = "white" stroke-width = "2"> </line>
            </svg>
        </div>
        <div class = "customHeaderBlock">
                <div class = "customHeader">
                    <span>
                        <img src = "custom-pic.png" width = "40px" height = "40px">
                    </span>
                <span> Custom ColorBox </span>
            </div>
            <div class = "lyteCBoxTitle customTitle"> Title Here! </div>
            <div class = "lyteCBoxDownload">
                <img src = "download-arrow.svg">
            </div>
        </div>
    </template>
</lyte-colorbox>
```
Animation

Two values can be defined for ltPropAnimation. By default, the colorbox renders without animaiton.

```html
<!-- Using img tag : -->
<img class = "image1" src = "../images/someImage1.jpg" data-lytecbox-title = "This is an image in img tag" data-lytecbox-href = "../images/someImage1.jpg" data-lytecbox-zoomBy = "100%">

<!-- Using a tag : -->
<a class = "image2" href = "../images/someImage2.jpg" data-lytecbox-title = "This is an image in anchor tag" data-lytecbox-href = "../images/someImage2.jpg"> Some Image </a>

<lyte-colorbox lt-prop = '{"selectors":[".image1",".image2"] , "animation":"slide"}'> </lyte-colorbox>
```
Single Image

Single image can be displayed using colorbox, if the unique selector is provided to the colorbox via ltPropSelectors property.

```html
<lyte-colorbox lt-prop = '{"selectors":["#singleImg"]}' > </lyte-colorbox>
```
Group Images

Provide a common selector to all the images in a group and pass that selector as a value to the ltPropSelectors property.

```html
<lyte-colorbox lt-prop = '{"selectors":[".groupImg"]}' > </lyte-colorbox>
```
Multiple Linked Images Using push()

We can add more images anytime after the colorbox is opened. To add more images we use the push utility function which takes an object or array of objects as argument where obects contains the properties and their respective values required for rendering the files.

```html
<lyte-colorbox id = "clrbx" lt-prop = '{"selectors":[".multiImg"]}' on-before-open = {{method("onBeforeOpen")}} > </lyte-colorbox>
```
```javascript
static methods() {
    return{
     onBeforeOpen : function( imgArray , comp ){
        document.getElementById("clrbx").push( moreImageObjects );
    }
  }
}

 // Here, moreImageObjects is an array of other image objects.
 eg. moreImageObjects = [ { lytecboxHref : "../images/colorbox_pic/collage_1.jpg" , lytecboxTitle : "Superman" } ,
 { lytecboxHref : "../images/colorbox_pic/collage_2.jpg" , lytecboxTitle : "Green Lantern" } ,
 { lytecboxHref : "../images/colorbox_pic/collage_3.jpg" , lytecboxTitle : "Captain America" } ]
```
Data Attributes

Below are the list of data attributes that should be used to provide data for the files(images or web pages or files like js, css, html) that will be rendered in the colobox. These data attributes should be added to the individual elements that will be opened in colorbox when clicked on. For example check the below code snippet.

data-lytecbox-type - This property tells the type of the file to be rendered in colorbox. It can have any any of the below given values based on the file type to be rendered.
"photo" - Used for images. This is also the default value. Example - data-lytecbox-type = "photo".
"iframe" - Used for files that will be rendered using an iframe in the colorbox for preview. Like - webpages, different types of files like pdf, js, html, css, text, doc etc. Along with iframe you can specify the format of the file seperated by a "/", which will be used to display in the thumbnail. Example - "iframe/js", "iframe/css", "iframe/pdf". If no format is specified, then the default format is "webpage".
"custom" - Used for file to be opened using editors like ace, CodeMirror etc in the colorbox. You can also specify the format of the file which will be used to display in the thumbnail. Example - data-lytecbox-type = "custom/js"
data-lytecbox-href - This property is used to get the source link of the file to be rendered in colorbox. For elements like < a > or < img >, if the this data property is not available then the source link will be fetched form the href or src attibutes of these respective elements.
data-lytecbox-title - This property is used to display the title or name of the files.
data-lytecbox-dlink - For files having data-lytecbox-type value as "iframe" or "custom", their download links should be provided using this property.
data-lytecbox-thumbnail - For files other than images, you can provide their custom thumbnails using this property. Otherwise default icons will be used as their thumbnail. The list of thumbnails will appear at the bottom of the page which are also clickable item.
data-lytecbox-thumbnail - For files other than images, you can provide their custom thumbnails using this property. Otherwise default icons will be used as their thumbnail. The list of thumbnails will appear at the bottom of the page which are also clickable item.
data-lytecbox-preview - For files other than images, which dont have any preview images, set this property as none. For example if you want to open a zip file in a colorbox you might not want to show any preview image for that zip folder. In that case you can use this feature to show the zip icon or any icon of your choice. Along with this porperty you also need to set data-lytecbox-type as custom.

Click here to see an example

```html
<a data-lytecbox-type="custom/zip" class="custom" href="#"  data-lytecbox-title="Zip Element" data-lytecbox-dlink="http://build/zoho/lyte_ui_component/webhost/V3_0_X/Sep_27_2021_3/Lyte_ui_component.zip" data-lytecbox-preview="none" data-lytecbox-icon="../images/zip-folder.png" data-lytecbox-alt="This file cannot be previewed." >Click here to see an example</a>
```
data-lytecbox-alt - For files whose data-lytecbox-preview is set to none, use this property to show the text that will be visible below the icon. The default text shown is - "Sorry, no preview is available for this file format". The example shown up also contains custom text that is shown below the preview icon.
```html
<!-- Using img tag : -->
<img class = "image1" src = "../images/someImage1.jpg" data-lytecbox-title = "This is an image in img tag" data-lytecbox-href = "../images/someImage1.jpg" data-lytecbox-zoomBy = "100%">

<!-- Using a tag : -->
<a class = "image2" href = "../images/someImage2.jpg" data-lytecbox-title = "This is an image in anchor tag" data-lytecbox-href = "../images/someImage2.jpg"> Some Image </a>

<!-- Rendering a web page : -->\
<a data-lytecbox-type = "iframe/html" class = "ifCon" href = "https://www.wikipedia.org/" data-lytecbox-title = "Wikipedia Page" data-lytecbox-thumbnail = "https://www.wikipedia.org/static/favicon/wikipedia.ico"> Iframe Content </a>

<lyte-colorbox lt-prop = '{"selectors":[".image1",".image2",".ifCon"]}'> </lyte-colorbox>
```
data-lytecbox-type - iframe

Files like pdf, js, webpages are rendered in colorbox using this type.

```html
<a data-lytecbox-type = "iframe/pdf" class = "ifCon" href = "#"  data-lytecbox-href = "https://www.ijmter.com/papers/volume-3/issue-8/steganography-using-aes.pdf" data-lytecbox-title = "Steganography Using AES"> Pdf file </a>
<a data-lytecbox-type = "iframe/webpage" class = "ifCon" href = "https://www.wikipedia.org/" data-lytecbox-title="wikipedia.org" data-lytecbox-thumbnail = "https://www.wikipedia.org/static/favicon/wikipedia.ico"> Wikipedia Page </a>
<a data-lytecbox-type = "iframe/js" class = "ifCon" href = "#"  data-lytecbox-href = "https://zmdownload.zoho.com/view?attachId=137868807700180000&entityType=1&entityId=1567587976186100001&accId=4326472000000008001&isRebrandUser=false" data-lytecbox-title = "JS File"> JS File </a>

<lyte-colorbox lt-prop = '{"selectors":[".ifCon"]}'> </lyte-colorbox>
```
data-lytecbox-type - custom

Example of files rendered in colorbox using this type.

```html
<a data-lytecbox-type = "custom/js" class = "custom" href = "#" data-lytecbox-title = "JS file opened using ace editor"> JavaScript file </a>
<a data-lytecbox-type = "custom/css" class = "custom" href = "#" data-lytecbox-title = "CSS file opened using ace editor"> CSS file </a>
<a data-lytecbox-type = "custom/html" class = "custom" href = "#" data-lytecbox-title = "How to embed ACE editor"> HTML File </a>

<lyte-colorbox lt-prop = '{"selectors":[".custom"]}'> </lyte-colorbox>
```
Colorbox Type - image

This type of colorbox can be used to preview images only. It can be yielded or non-yielded. Tags are provided to carry out specific functionalities which are described below.

lyte-colorbox-container - this tag identifies the entire colorbox div.
lyte-colorbox-header - this tag specifies the header section.
lyte-colorbox-title - this tag specifies where to include the title of the image.
lyte-colorbox-download - this tag sepcifies the section which contains the downloadable image on clicking. NOTE : The default download function is supported only in modern browsers that support download property in anchor element. In browsers where it is not supported like IE, use onDownload method to provide your own code to download the file.
lyte-colorbox-close - On the cases of Yield, you can use this close tag, to close the color box.
lyte-colorbox-content - this tag sepcifies the section inside which the image will be rendered.
lyte-colorbox-previous - On using yield, you can use this tag to specify the section to get rendered with the previous image.
lyte-colorbox-next - On using yield, you can use this tag to specify the section to get rendered with the next image.
lyte-colorbox-description - this tag specifies where to include the description.
lyte-colorbox-zoomin - this tag specifies the section on clicking which image will be zoomed in.
lyte-colorbox-zoomout - this tag specifies the section on clicking which image will be zoomed out.
lyte-colorbox-reset - this tag specifies the section on clicking which image will be reset.
```html
<lyte-colorbox lt-prop = '{"type" : "image" , "selectors":[".imageType"], "animation" : "slide"}' > </lyte-colorbox>
```
```html
<lyte-colorbox lt-prop-type="image" lt-prop-selectors='[".imageClick"]' lt-prop-yield="true">
    <template is = "registerYield" yield-name = "colorBoxYield">
        <lyte-colorbox-container>
            <lyte-colorbox-header>
                <lyte-colorbox-title>
                    This is a title
                </lyte-colorbox-title>
            </lyte-colorbox-header>
            <lyte-colorbox-content>
                    <lyte-colorbox-previous>
                    </lyte-colorbox-previous>
                    <lyte-colorbox-next>
                    </lyte-colorbox-next>

                    <lyte-colorbox-zoomin></lyte-colorbox-zoomin>
                    <lyte-colorbox-reset></lyte-colorbox-reset>
                    <lyte-colorbox-zoomout></lyte-colorbox-zoomout>
                </lyte-colorbox-content>
        </lyte-colorbox-container>
    </template>
</lyte-colorbox >
```

### colorbox - api

Properties

All properties should be prefixed with lt-prop.

Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	
Description	:	Used to set the height of the image.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	
Description	:	Used to set the width of the image.
Overlay Close
Name	:	overlay-close( lt-prop-overlay-close )
DataType	:	boolean
Default	:	true
Description	:	If set to true, closes the colorbox on clicking on the background overlay.
Yield
Name	:	yield( lt-prop-yield )
DataType	:	boolean
Default	:	false
Description	:	To render your own colorbox design use yield.
Selectors
Name	:	selectors( lt-prop-selectors )
DataType	:	array
Default	:	
Description	:	It is an array of selectors that represents the images to be displayed in the colorbox. The selectors should be either a class or an id.
Loop
Name	:	loop( lt-prop-loop )
DataType	:	boolean
Default	:	true
Description	:	If false, will disable the ability to loop back to the beginning of the group when on the last element.
Arrow Key
Name	:	arrow-key( lt-prop-arrow-key )
DataType	:	boolean
Default	:	true
Description	:	If false, will disable the left and right arrow keys from navigating between the items in a group.
Zoom By
Name	:	zoom-by( lt-prop-zoom-by )
DataType	:	string
Default	:	25%
Description	:	Specifies the amount by which the images's size will increase on zoom.
Esc Key
Name	:	esc-key( lt-prop-esc-key )
DataType	:	boolean
Default	:	true
Description	:	If false, will disable closing colorbox on 'esc' key press.
Img Error
Name	:	img-error( lt-prop-img-error )
DataType	:	string
Default	:	This image failed to load.
Description	:	Error message is shown when a link to an image fails to load.
Animation
Name	:	animation( lt-prop-animation )
DataType	:	string
Default	:	default
Description	:	Specifies the animation to be shown while moving from one image to another. If "default" is set as the value then no animation would be visible. If the animation value is set to "silde", then sliding effect will be visible.
Thumbnail
Name	:	thumbnail( lt-prop-thumbnail )
DataType	:	boolean
Default	:	true
Description	:	If set to true, renders a container below the image which shows small images of the images that can be viewed in the colorbox. It's similar to the preview of all the available images. This property is available only for default colorbox.
Thumbnail Number
Name	:	thumbnail-number( lt-prop-thumbnail-number )
DataType	:	number
Default	:	7
Description	:	Specified number of images will be available for preview in the thumbnail container at a time. This property is available only for default colorbox.
Zoom Click Number
Name	:	zoom-click-number( lt-prop-zoom-click-number )
DataType	:	number
Default	:	5
Description	:	Specifies the number of times the zoom buttons can be clicked to zoom in and zoom out. This property is available only for default colorbox.
Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	custom
Description	:	Specifies the type of colorbox. Image type colorbox can be used if the items to be displayed are only images. Custom type colorbox can display any type of item which can be image or pdf or any file.
Min Scale
Name	:	min-scale( lt-prop-min-scale )
DataType	:	number
Default	:	0.1
Description	:	Specifies the minimum scale to be allowed if zooming the image on scrolling is enabled.
Max Scale
Name	:	max-scale( lt-prop-max-scale )
DataType	:	number
Default	:	infinity
Description	:	Specifies the maximum scale to be allowed if zooming the image on scrolling is enabled.
Wheel Zoom
Name	:	wheel-zoom( lt-prop-wheel-zoom )
DataType	:	boolean
Default	:	false
Description	:	If set to true, the image gets zoomed if scrolled keeping the mouse cursor over image.
Zoom Position
Name	:	zoom-position( lt-prop-zoom-position )
DataType	:	string
Default	:	center
Description	:	It determines the position from where the zooming will happen. If set to center, the zooming will be visible form the image's parent's center irrsepective of the image's center. If set to imageCenter then the zooming will always happen from the image's center. If nothing is provided then either it will take default value or the co-ordinate provided.
Add Orientation
Name	:	add-orientation( lt-prop-add-orientation )
DataType	:	boolean
Default	:	false
Description	:	Based on the image's orientation property, an image generally gets rendered differently in older and newer version of browsers as the newer versions would handle it and render the image properly and the older versions wouldn't care about it. If this property is set to true then the orientation will be handled by lyte-colorbox and the image will be rendered same in all the browsers whether its new or old. Also you need to include lyte-exif plugin if you are setting this property to true.
Methods

The following are the methods of lyte-colorbox .

on-before-open
Name	:	on-before-open
Description	:	It is invoked before the colorbox is going to open. It can return true or false or nothing ie. undefined. If false is returned then the colorbox won't open.
on-open
Name	:	on-open
Description	:	It is invoked when the colorbox is opened but before the picture is loaded.
on-before-close
Name	:	on-before-close
Description	:	It is invoked when the colorbox is going to get closed. If false is returned then the colorbox won't be closed.
on-close
Name	:	on-close
Description	:	It is invoked when the colorbox is closed.
on-load
Name	:	on-load
Description	:	It is invoked when the image or the file to be displayed in the colorbox is loaded.
on-complete
Name	:	on-complete
Description	:	It is invoked when all the calcultaions and styling is completed and the image or file is appended to the colorbox.
on-failure
Name	:	on-failure
Description	:	It will be triggered when the image fails to load.
on-navigate
Name	:	on-navigate
Description	:	It is triggered when navigate from one file to another file.
on-zoomin
Name	:	on-zoomin
Description	:	It is triggered when we zoom the image.
on-zoomout
Name	:	on-zoomout
Description	:	It is triggered when the image is zoomed out.
on-reset
Name	:	on-reset
Description	:	It is triggered when we reset the image.
on-download
Name	:	on-download
Description	:	It is triggered when the download icon is clicked. This callback is provided to override the internal script that is executed for downloading the image or file. Using this callback the user can write their own script to download the file. Return false if you want to stop the execution of the internal script. If nothing or true is returned then the internal script will be executed to download the file. NOTE : THE DEFAULT DOWNLOAD FUNCTION IS SUPPORTED ONLY IN MODERN BROWSERS THAT SUPPORT DOWNLOAD PROPERTY IN ANCHOR ELEMENT. IN BROWSERS WHERE IT IS NOT SUPPORTED LIKE IE, USE THIS HANDLE TO PROVIDE YOUR OWN CODE TO DOWNLOAD THE FILE.
Utility Functions

Utility function for lyte-colorbox .

launch
Name	:	launch
Description	:	This function helps in opening the colorbox without clicking on any image. You can pass image related properties like href and title to this function as an object to open the specified image. If noting is passed you can specify the image details using on-before-open callback.
push
Name	:	push
Description	:	This function helps to add more files to the existing list of files.
open
Name	:	open
Description	:	This function helps to open a different image from the list of images currently shown without closing the colorbox. The index of the image needs to be passed as argument. Index value starts from 1. That is 1 for first image, 2 for second image and so on.
zoomBy
Name	:	zoomBy
Description	:	This function helps to zoom the currently displayed image by the given percentage. The height and width will be calculated based on the percentage passed and the image's natural height and width.
replace
Name	:	replace
Description	:	This function helps to change the properties of a particular image that is displayed in colorbox without closing the colorbox. Index value starts from 1. That is 1 for first image, 2 for second image and so on.
close
Name	:	close
Description	:	This function is used to close the colorbox.
delete
Name	:	delete
Description	:	This function is used to delete particular image by providing it's index value. Index value starts from 1. That is 1 for first image, 2 for second image and so on.

---

## colorpicker

### colorpicker - overview

Colorpicker

Colorpicker component makes it easy to create, adjust, and experiment with custom colors for the web. It is a non yielding component.

NOTE : To open the colorpicker you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values of all other properties you have used for popup type colorpicker. This will make sure that the values passed by you are considered while opening the colorpicker.

Colorpicker can be used in 2 ways - either as an inline element or as a popup.
As inline : To use it as an inline element, just include the colorpicker element in your html and set ltPropInline to true.
As popup : To use it as a popup, we need an origin element based on which the colorpicker will be positioned. Pass the CSS selector of the origin element as a value to the ltPropOriginElement property of the colorpicker. Set ltPropInline to false. Check the below example for more details.


Dependencies
```javascript
<!-- Individual component file -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-colorpicker.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-popover.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-table.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"> </link>

<!-- Draggable component file -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-draggable.css" > </link>

 The js file is included in app.js
```
```javascript
<!-- individual components -->
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-colorpicker.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-colorpicker.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-table.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-table.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-input.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-input.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-button.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-button.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-popover.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-popover.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-wormhole.js" ></script>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-draggable.js" ></script>

 also requires a sprite file - ui-components/theme/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Simple structure


Let us see the structure of color picker

Tags Used

Have a look at the tags of color picker Component

lyte-colorpicker - This tag is used to render the color picker component.
Semantic structure
```javascript
<lyte-colorpicker>
</lyte-colorpicker>
```
Color picker syntax - without yield
```javascript
<button id = "btn" onclick = "openColorpicker()"> </button>
<lyte-colorpicker lt-prop-origin-element = "#btn" > </lyte-colorpicker>
```
Basic Color Picker

Used to select a color from the sets of predefined colors.

```html
<lyte-colorpicker lt-prop-basic-color-picker = "true"></lyte-colorpicker>
```
Features of Color Picker
Advanced Color Picker

Used to select a color from the color gradient.

```html
<lyte-colorpicker lt-prop-basic-color-picker = "false" lt-prop-advanced-color-picker="true" ></lyte-colorpicker>
```
Inline Color Picker

Colorpicker as an inline HTML element.

```html
<lyte-colorpicker lt-prop-inline = true ></lyte-colorpicker>
```
Enabling Accessibilty

By default, aria attributes are enabled.

A working sample

Check or uncheck the properties to set the value of the properties true or false.

```html
For Basic / Advanced Color Picker :
    <lyte-colorpicker lt-prop-basic-color-picker = "true"> </lyte-colorpicker>

For Draggable Color Picker :
    <lyte-colorpicker lt-prop-draggable = "true"> </lyte-colorpicker>

For closing the Color Picker on selecting a color :
    <lyte-colorpicker lt-prop-close-on-selection = "true"> </lyte-colorpicker>

For no-fill button in Color Picker :
    <lyte-colorpicker lt-prop-no-fill-button = "true"> </lyte-colorpicker>

For advaced color button in Color Picker :
    <lyte-colorpicker lt-prop-advanced-color-button = "true"> </lyte-colorpicker>

For showing standard colors in Color Picker :
    <lyte-colorpicker lt-prop-standard-colors = "true"> </lyte-colorpicker>

For viewing used colors in Color Picker :
    <lyte-colorpicker lt-prop-used-colors = "true"> </lyte-colorpicker>

For box style Color Picker :
    <lyte-colorpicker lt-prop-appearance = "box"> </lyte-colorpicker>

For callout style Color Picker :
    <lyte-colorpicker lt-prop-appearance = "callout"> </lyte-colorpicker>
```

### colorpicker - api

Properties

All properties should be prefixed with lt-prop.

Show
Name	:	show( lt-prop-show )
DataType	:	boolean
Default	:	false
Description	:	Set this property to show the color picker. If false, the color picker will be closed.
Draggable
Name	:	draggable( lt-prop-draggable )
DataType	:	boolean
Default	:	false
Description	:	If true, the colorpicker can be dragged.
Close On Body Click
Name	:	close-on-body-click( lt-prop-close-on-body-click )
DataType	:	boolean
Default	:	true
Description	:	Used to close the colorpicker on clicking anywhere else on the body other than the colorpicker.
Close On Selection
Name	:	close-on-selection( lt-prop-close-on-selection )
DataType	:	boolean
Default	:	true
Description	:	If set to true, closes the colorpicker on selecting a color.
Advanced Color Button
Name	:	advanced-color-button( lt-prop-advanced-color-button )
DataType	:	boolean
Default	:	true
Description	:	If true, the advanced color button option gets displayed. And on clicking it, the advanced colorpicker gets opened.
Appearance
Name	:	appearance( lt-prop-appearance )
DataType	:	string
Default	:	callout
Description	:	Color Picker can be shown with an arrow pointing the origin element(callout) or just a box adjacent to the origin element.
Standard Colors
Name	:	standard-colors( lt-prop-standard-colors )
DataType	:	boolean
Default	:	true
Description	:	Shows predefined set of standard colors.
Used Colors
Name	:	used-colors( lt-prop-used-colors )
DataType	:	string
Default	:	true
Description	:	If set to true, shows the section containing recently used colors.
Basic Color Picker
Name	:	basic-color-picker( lt-prop-basic-color-picker )
DataType	:	boolean
Default	:	true
Description	:	Determines the type of color picker - basic or advanced. If false, it's advanced color picker. This is a readonly property. Dont use this property to set any value.
Origin Element
Name	:	origin-element( lt-prop-origin-element )
DataType	:	string
Default	:	" "
Description	:	Color Picker is attached to the origin element. Color Picker will be shown, related to the origin element. Note: This property is mandatory for color picker component.
Wrapper Class
Name	:	wrapper-class( lt-prop-wrapper-class )
DataType	:	string
Default	:	
Description	:	This property sets given class to wrapper div to the color picker. This helps you to identify your color picker and also to make style changes to that.
Boundary
Name	:	boundary( lt-prop-boundary )
DataType	:	object
Default	:	
Description	:	This property is inherited from popover UI component. This property helps you to set the dimensions or the boundary. On crossing the boundary, the colorpicker gets closed automatically.
Scrollable
Name	:	scrollable( lt-prop-scrollable )
DataType	:	boolean
Default	:	true
Description	:	It makes the popover scroll along the origin element.
No Fill Button
Name	:	no-fill-button( lt-prop-no-fill-button )
DataType	:	boolean
Default	:	false
Description	:	If true, shows the no fill button.
No Fill Label
Name	:	no-fill-label( lt-prop-no-fill-label )
DataType	:	string
Default	:	No Fill
Description	:	Sets the text of the no fill button.
Palette Label
Name	:	palette-label( lt-prop-palette-label )
DataType	:	string
Default	:	Theme Colors
Description	:	Sets the label for the predefined sets of colors.
Inline
Name	:	inline( lt-prop-inline )
DataType	:	boolean
Default	:	false
Description	:	Depending on whether it is true or false the colorpicker will be rendered either as an inline element or inside a popover.
Color Formats
Name	:	color-formats( lt-prop-color-formats )
DataType	:	array
Default	:	["HEX","RGB","HSV","CMYK"]
Description	:	Sets the color formats that will be available in advanced colorpicker dropdown.
Done Btn Text
Name	:	done-btn-text( lt-prop-done-btn-text )
DataType	:	string
Default	:	Done
Description	:	Sets the text for done button.
Cancel Btn Text
Name	:	cancel-btn-text( lt-prop-cancel-btn-text )
DataType	:	string
Default	:	Cancel
Description	:	Sets the text for cancel button.
Back Btn Text
Name	:	back-btn-text( lt-prop-back-btn-text )
DataType	:	string
Default	:	Back
Description	:	Sets the text for back button.
Apply Btn Text
Name	:	apply-btn-text( lt-prop-apply-btn-text )
DataType	:	string
Default	:	Apply
Description	:	Sets the text for apply button.
Standard Color Array
Name	:	standard-color-array( lt-prop-standard-color-array )
DataType	:	object
Default	:	['rgb(192, 0, 0)','rgb(255, 0, 0)','rgb(255, 192, 0)','rgb(255, 255, 0)','rgb(146, 208, 80)','rgb(0, 176, 80)','rgb(0, 176, 240)','rgb(0, 112, 192)','rgb(0, 32, 96)','rgb(112, 48, 160)']
Description	:	Set of 10 colors that will be shown in the Standard Color section.
Duration
Name	:	duration( lt-prop-duration )
DataType	:	number
Default	:	600
Description	:	Sets the transition time for the colorpicker popover.
Board Color
Name	:	board-color( lt-prop-board-color )
DataType	:	string
Default	:	#90c3d4
Description	:	This value is used to set the color of the palette in advanced colorpicker.
Opacity Label
Name	:	opacity-label( lt-prop-opacity-label )
DataType	:	string
Default	:	Alpha
Description	:	This property is used to set the label for opacity input in advanced colorpicker.
Popover
Name	:	popover( lt-prop-popover )
DataType	:	object
Description	:	The popup type colorpicker is rendered inside a lyte-popover. So it supports all the properties that are available for lyte-popover. This property is used to provide values to those properties of lyte-popover that are not mentioned as separate property for colorpicker.
Used Colors Number
Name	:	used-colors-number( lt-prop-used-colors-number )
DataType	:	number
Default	:	10
Description	:	It specifies the number of recently used colour that will be shown in the colorpicker.
Used Colors List
Name	:	used-colors-list( lt-prop-used-colors-list )
DataType	:	array
Default	:	[]
Description	:	This property helps to add colors to the array which keeps a track of the colours that are recently used.
Opacity
Name	:	opacity( lt-prop-opacity )
DataType	:	number
Default	:	100
Description	:	This property helps to change the opacity value in advanced colorpicker.
Freeze
Name	:	opacity( lt-prop-freeze )
DataType	:	boolean
Default	:	false
Description	:	With this property, you can set the freeze layer when opacity is enabled.
Accent
Name	:	Accent(ltPropAccent )
DataType	:	boolean
Default	:	false
Description	:	With this property, you can set the AccentColor array to render the theme colors with different shades. On setting this property as false, the basic color renders.
Accentcolor
Name	:	AccentColor(ltPropAccentColor )
DataType	:	array
Default	:	[]
Description	:	With this property, you can set the AccentColor array to render the theme colors with different shades.
Dropboxclass
Name	:	DropBoxClass(lt-prop-drop-box-class )
DataType	:	string
Default	:	" "
Description	:	With this property you can attach a class for the dropdown containing the color formats.
Focusonclose
Name	:	ltPropFocusOnClose(lt-prop-focus-on-close)
DataType	:	boolean
Default	:	false
Description	:	With this property you can change the focus to the origin element while using close button.
Methods

The following are the methods of lyte-colorpicker .

on-before-open
Name	:	on-before-open
Description	:	Triggered before the color picker is opened.
on-open
Name	:	on-open
Description	:	Triggered when the color picker is opened.
on-select
Name	:	on-select
Description	:	Triggered when the user selects a color.
on-close
Name	:	on-close
Description	:	It is invoked when the colorpicker is closed.
on-change
Name	:	on-change
Description	:	Triggered when the user moves the pointer on advanced colorpicker palette to change from one color to another.
on-input-error
Name	:	on-input-error
Description	:	Triggered when the user enters invalid value in any of the color input fields in advanced colorpicker. This method can be utilised by the developer to show an error message for invalid value entered by the user.
Utility Functions

Utility function for lyte-colorpicker are designed to perform specific task.

SelectColor
Name	:	SelectColor
Description	:	This util is used to select a color from the colorpicker. If the value is not provided, the picker assumes "no fill".

---

## combobox

### combobox - overview

Combobox

Combobox is a combination of dropdown and input components . Combobox allows the user to type a value and select a value from the list based on the result.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-combobox.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-search.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

There are two types of combobox, namely button search and box search.

Basic Combobox

The default combobox is a box search combobox. Here the search will be rendered inside the drop-box.

```html
<lyte-combobox lt-prop-min-search-value=1 lt-prop-dropdown={{dropdownValue}} lt-prop-options={{yourOption}} > </lyte-combobox>
```
```html
<lyte-combobox lt-prop-dropdown={{dropdownValue}} lt-prop-yield ="true" lt-prop-min-search-value=1 lt-prop-options={{yourOption}} lt-prop-dropdown-selected={{selectValue}}>
                                                        <template is = 'registerYield'  yield-name = 'headerYield'>
                                                          <span>  {{initialValue}}   </span>
                                                          <lyte-icon class="dropdown">  </lyte-icon>
                                                        </template>
                                                        <template is = 'registerYield' yield-name = 'bodyYield'>
                                                            <lyte-drop-body>
                                                                <lyte-drop-item data-value="js"> Javascript </lyte-drop-item>
                                                                <lyte-drop-item data-value="html"> HTML </lyte-drop-item>
                                                                <lyte-drop-item data-value="css"> CSS </lyte-drop-item>
                                                            </lyte-drop-body >
                                                        </template >
</lyte-combobox>
```
```javascript
// in your component
  data() {
    return{
    yourOption : prop ( 'array' , {  default : [ {  'name' : 'Volvo XC40' ,  'value' : 'Volvo'  } , {  'name' : 'Audi R8' ,  'value' : 'Audi'  } ] } ) ,
    dropdownValue : prop ( 'object' , {  default : {  'systemValue' : 'value', 'userValue' : 'name',  'placeholder' : 'select'  }  } )
    }
}
```
select

In the above example lt-prop-dropdown attribute is used to set dropdown properties. Here systemValue, userValue and placeholder represents lt-prop-system-value, lt-prop-user-value and lt-prop-placeholder in lyte-dropdown

Each lyte-drop-item must have a data-value attribute.
The lt-prop-dropdown-selected attribute is used to specify the current selected value in the dropdown. The lt-prop-dropdown-selected should be equal to the data-value of the item to be selected.
You need to specify userValue, systemValue , placeholder, and all the attributes related to dropdown in lt-prop-dropdown except options, selectedValue and disabledList
If no lt-prop-dropdown-selected, placeholder or displayValue is provided, then the first item is the selected value of the dropdown.
You can get/set the selected value by using the .ltProp() function.
Button Search Combobox

You can also use a combobox with search in lyte-dropdown-button. For using a combobox with search in button set ltPropType as buttonSearch

```html
<lyte-combobox lt-prop-dropdown={{dropdownValue}} lt-prop-options={{yourOption}} lt-prop-dropdown-selected={{selectValue}} lt-prop-type="buttonSearch"> </lyte-combobox>
```
```html
<lyte-combobox lt-prop-dropdown={{dropdownValue}} lt-prop-options={{yourOption}} lt-prop-dropdown-selected={{selectValue}} lt-prop-type="buttonSearch">
    <template is = 'registerYield'  yield-name = 'headerYield'>
        <span>  {{initialValue}}   </span>
        <lyte-icon class="dropdown">  </lyte-icon>
    </template>
    <template is = 'registerYield' yield-name = 'bodyYield'>
        <lyte-drop-body>
          <lyte-drop-item data-value="js"> Javascript </lyte-drop-item>
          <lyte-drop-item data-value="html"> HTML </lyte-drop-item>
          <lyte-drop-item data-value="css"> CSS </lyte-drop-item>
        </lyte-drop-body >
    </template >
</lyte-combobox>
```
```javascript
// in your component
                                                   data() {
                                                   yourOption : prop ( 'array' , {  default : [ {  'name' : 'Volvo XC40' ,  'value' : 'Volvo'  } , {  'name' : 'Audi R8' ,  'value' : 'Audi'  } ] } ) ,
                                                   dropdownValue : prop ( 'object' , {  default : {  'systemValue' : 'value', 'userValue' : 'name',  'placeholder' : 'select'  }  } )
                                                   }
```
select

Note : Search box will be displayed in combobox only if lt-prop-min-search-value is greater than lt-prop-option length.

There are some cases where you have only two drop items. In such cases, search box is not necessary. This cases will be handled by setting lt-prop-min-search-value=3 here if lt-prop-options length is less than 3 then search will not be displayed. If lt-prop-options length is greater than or equal to 3 search will be displayed.

Combobox Without Search
```html
<lyte-combobox lt-prop-dropdown={{dropdownValue}} lt-prop-options={{yourOption}} lt-prop-dropdown-selected={{selectValue}} lt-prop-type="buttonSearch" lt-prop-min-search-value = 0> </lyte-combobox>
```
```html
<lyte-combobox lt-prop-dropdown={{dropdownValue}} lt-prop-options={{yourOption}} lt-prop-dropdown-selected={{selectValue}} lt-prop-type="buttonSearch" lt-prop-min-search-value = 0>
    <template is = 'registerYield'  yield-name = 'headerYield'>
      <span>  {{initialValue}}   </span>  <lyte-icon class="dropdown">  </lyte-icon>
    </template>
    <template is = 'registerYield' yield-name = 'bodyYield'>
        <lyte-drop-body>
             <lyte-drop-item data-value="js"> Javascript </lyte-drop-item>  <lyte-drop-item data-value="html"> HTML </lyte-drop-item>  <lyte-drop-item data-value="css"> CSS </lyte-drop-item>
        </lyte-drop-body >
    </template >
</lyte-combobox>
```
```javascript
// in your component
data() {
  yourOption : prop ( 'array' , {  default : [ {
      'name': 'Volvo XC40',
      'value': 'Volvo'
  }, {
      'name': 'Audi R8',
      'value': 'Audi'
  }, {
      'name': 'Benz SLR McLaren',
      'value': 'Benz'
  }, {
      'name': 'Fiat Punto',
      'value': 'Fiat'
  }, {
      'name': 'Ford Mustang',
      'value': 'Ford'
  }, {
      'name': 'Nissan Titan',
      'value': 'Nissan'
  }, {
      'name': 'Skoda Octavia',
      'value': 'Skoda'
  }, {
      'name': 'Ferrari F40',
      'value': 'Ferrari'
  }, {
      'name': 'Chrysler 300',
      'value': 'Chrysler'
  } ]  } ) ,
  dropdownValue : prop ( 'object' , {  default : {  'systemValue' : 'value', 'userValue' : 'name',  'placeholder' : 'select'  }  } )
  }
```
select

In the above example search box is not displaed because lt-prop-min-search value is greater than lt-prop-options length. A combobox can also be rendered without search by setting ltPropMinSearchValue as 0

### combobox - api

Element Properties

All properties should be prefixed with lt-prop. .It should be given as attribute of element which needs combobox.

dropdown
DataType	:	object
Default	:	{}
Description	:	It is used to give data for dropdown.
options
DataType	:	array
Default	:	[]
Description	:	This is used to pass an array of values to the combobox to be rendered. It can be an array of strings or an array of objects.
dropdown-selected
DataType	:	string
Default	:	-
Description	:	It is used to set the lt-prop-selected value of the dropdown.
no-result-message
DataType	:	string
Default	:	-
Description	:	It is used to set the no result message for combobox
disabled-list
DataType	:	array
Default	:	-
Description	:	It is used to set the disabled list for dropdown.
data-tab-index
DataType	:	number
Default	:	0
Description	:	It is used to set the tab index.
show-remove-icon
DataType	:	boolean
Default	:	false
Description	:	It is used to display the remove icon in the search bar of the combo box.
yield
DataType	:	boolean
Default	:	false
Description	:	To render your own combobox use yield
type
DataType	:	String
Default	:	boxSearch
Description	:	Set the type attribute of the combobox.
dropbox-search-appearance
DataType	:	String
Default	:	flat
Description	:	It defines the appearance of the lyte-input.
searchplaceholder
DataType	:	String
Default	:	-
Description	:	Sets the placeholder for the input field.
min-search-value
DataType	:	Number
Default	:	-
Description	:	Search box will appear only if the option length is greater than or equal to minimum search value
tooltip
DataType	:	object
Default	:	{ "position": "bottom", "appearance": "box","margin": 5,"keeptooltip": true }
Description	:	This is used to configure the properties of the tooltip that gets displayed when the width of the selected content exceeds the width of the drop-button.
box-class
DataType	:	String
Default	:	-
Description	:	This is used to set the class of the dropbox that is opened. This property is only applicable when the drop-box is not yielded.
dropdown-class
DataType	:	String
Default	:	-
Description	:	This is used to set the class of the dropdown.
aria
DataType	:	Boolean
Default	:	-
Description	:	This is used to enable the aria for combobox.
Methods

You can provide the methods to lyte-combobox either via script or HTML.

on-option-select
Description	:	It is invoked when a combobox item is selected.
on-show
Description	:	It is invoked when a combobox is opened.
on-before-show
Description	:	It is invoked just before a combobox is about to open.
on-hide
Description	:	It is invoked when a combobox is about to be closed.
on-before-hide
Description	:	It is invoked just before a combobox is closed.
on-user-scroll
Description	:	This is invoked when the combobox is scrolled up or down.
on-clear
Description	:	This is invoked when the user clicks the clear button in search.
on-search
Description	:	This method is triggered on every keyup with 100ms delay
Utils

You can provide the utils to lyte-combobox either via script or HTML.

.toggle()
Description	:	This is used to either open or close the combobox.
.open()
Description	:	This is used to open the combobox.
.close()
Description	:	This is used to close the combobox.

---

## counter

### counter - overview

Counter

Counter, an UI component, is used to create animations that display numerical data from an initial value to a final value.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-counter.css"></link>
```
Counter

The lyte-counter by default renders a simple lyte-counter. You can initialize a counter by providing the startValue using lt-prop-start and endValue using lt-prop-end.

It is mandatory to specify the end value for counter during initialization.

```html
<lyte-counter lt-prop-start=0 lt-prop-end=120 lt-prop-duration=4 lt-prop-prefix="$"  lt-prop-suffix="sec"> </lyte-counter>
```

lt-prop-state property is used to change the state of a counter as start, pause, resume and reset.
If lt-prop-state is set to start, the counter will start animation from start value to end value.
If lt-prop-state is set to pause the counter will stop the animation
If lt-prop-state is set to resume the counter will start the animation from the last value where the counter state is paused and animate till the end value
If lt-prop-state is set to reset the counter will reset to the start value
Custom Easing

You can also customize the easing functions of the counter. You can give your customised method using easingFunction and set lt-prop-use-easing value as true


```javascript
function easeOutExpo(t, b, c, d) {
   return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
}
```
Where,
t: current time/current step
b: starting position
c: amount of change (end - start)
d: total animation time/steps

### counter - api

Properties

All properties should be prefixed with lt-prop. . All properties should be given as object.

Start
Name	:	start
Description	:	Start value of a counter
Datatype	:	Number


End
Name	:	end
Description	:	End value of a counter
Datatype	:	Number


Decimals
Name	:	decimals
Description	:	Number of decimal places
Datatype	:	Number
Default	:	


Duration
Name	:	duration
Description	:	Animation duration of counter in seconds
Datatype	:	Number
Default	:	2


Prefix
Name	:	prefix
Description	:	optional text before the result
Datatype	:	String


Suffix
Name	:	suffix
Description	:	optional text after the result
Datatype	:	String


Use Easing
Name	:	useEasing
Description	:	The default value is true. Set to false it increments/decrements in linear
Default	:	true
Datatype	:	Boolean


Use Grouping
Name	:	useGrouping
Description	:	The default value is true. You can set this to false if you want the counter to increment/decrement as a whole number
Default	:	true
Datatype	:	Boolean


Separator
Name	:	separator
Description	:	character to use as a digit separator
Default	:	,
Datatype	:	String


Decimal Separator
Name	:	decimalSeparator
Description	:	character to use as a decimal separator
Default	:	,
Datatype	:	String


State
Name	:	state
Description	:	It is used to specify state of the counter
Default	:	-
Datatype	:	String


Class
Name	:	class
Description	:	This is used to set the class attribute of the counter
Datatype	:	String


Aria
Name	:	aria
Description	:	This is used to enable aria attributes
Datatype	:	Boolean


Aria Attributes
Name	:	ariaAttributes
Description	:	This is used to set the aria attribute for the counter
Datatype	:	Object


Tab Index
Name	:	tabIndex
Description	:	This is used to set tab index for the counter
Datatype	:	Number


Data Tab Index
Name	:	DatatabIndex
Description	:	This is used to set tab index for the counter
Datatype	:	Number


Methods

You have to provide the methods to lyte-counter during initialization.

onComplete
Name	:	onComplete
Description	:	This event is triggered when the counter reaches the targeted end value


easingFunction
Name	:	easingFunction
Description	:	This method is used to provide customised easing functions


onValueChange
Name	:	easingFunction
Description	:	This method is invoked before value change

---

## datemultiselect

### datemultiselect - overview

Date Multiselect

The DateMultiSelect component allows users to pick multiple dates from a calendar, displays the selected count, and provides a button to show the total selected days.

Default DateMultiselect

The lyte-datemultiselect allows users to pick multiple dates from a calendar, displays a count of selected days, provides an option to unselect them, and features a button to show the total count of selected days with the ability to clear all selections.

NOTES : All dates selected in the calendar need to obey the lt-prop-format property. For example, if the lt-prop-format="DD/MM/YYYY", then the selected dates will displayed in that format. Default date format will be "MM/DD/YYYY"
You can also give date format as "DD/Month/YYYY" this will be shown as 12 Sep, 2004

NOTES : The Default DateMultiselect is a Popup DateMultiSelect. The Default type of the date Multiselect is Popup.

```html
<lyte-datemultiselect></lyte-datemultiselect>
```
Inline DateMultiselect

The lyte- Inline Datemultiselect component includes a default calendar that seamlessly integrates with the interface.

```html
<lyte-datemultiselect lt-prop-type = "inline"></lyte-datemultiselect>
```

---

## daterangepicker

### daterangepicker - overview

Date Range Picker

Date range picker is UI component, used to select a range of dates. It can be used directly or inside a popover.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-daterangepicker.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calendar.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Basic Date Range Picker

This is a default daterange picker. It will render calendar with today's date. It supports all the formats supported in lyte-moment plugin.

```html
<lyte-daterangepicker > </lyte-daterangepicker>
```
Date Range Picker Selection Type

You can set this, using a property lt-prop-selection-type. Currently lyte-daterangepicker supports two type of date selections. continuous and separate.

In continuous type it will highlight intermediate dates while selecting the dates. Always adjacent months will be displayed in calendars. You can select start and end date in any of these calendars. View changes happended in one calendar will also affect other calendar's view.

In separate type both of the calendars are not connected. You can navigate to different dates in different calendars. Here one calendar's view change won't affect other calendar's view. First calendar should be used for selecting the start date and the second one should be used for selecting the end date.

```html
For continuous type -
<lyte-daterangepicker lt-prop-selection-type = "continuous" > </lyte-daterangepicker>
For separate type -
<lyte-daterangepicker lt-prop-selection-type = "separate" > </lyte-daterangepicker>
```
Date Range Picker With Start Year And End Year

The range of years can be customized using the property lt-prop-start-year and lt-prop-end-year by the user.

```html
<lyte-daterangepicker lt-prop-start-year = "2010" lt-prop-end-year = "2020" > </lyte-daterangepicker>
```
Date Range Picker With Min-Date And Max-Date

The range of days can be customized by the user by providing min-date and max-date.

```html
<lyte-daterangepicker lt-prop-min-date = "09/09/2025" lt-prop-max-date = "10/21/2025" > </lyte-daterangepicker>
```
Date Range Picker With Disabled Dates

One or more dates can be disabled by the users using lt-prop-disabled-dates. Have a look at the below code snippet to see how it is done.

```html
<lyte-daterangepicker lt-prop = '{"disabledDates" : ["^08\/25", "^09\/10"]}' > </lyte-daterangepicker>
```

### daterangepicker - api

Properties

All properties should be prefixed with lt-prop.

Current Date
Name	:	current-date( lt-prop-current-date )
DataType	:	string
Default	:	By default, the daterangepicker renders today's date.
Description	:	It renders the entire month of the current date and the date of the current-date is the selected date.
Format
Name	:	format( lt-prop-format )
DataType	:	string
Default	:	MM/DD/YYYY
Description	:	This is used to specify the format of the date. Specifying the format changes the date's format in the callback. Also, all dates supplied to the daterangepicker (current-date/min-date/...) should adhere to the format. It also changes the format of the data-date attribute rendered inside the calendar for each day.
Month Header Format
Name	:	month-header-format( lt-prop-month-header-format )
DataType	:	string
Default	:	MMM YYYY
Description	:	Specifies the format of the month displayed at the top of the calendar.
Start Year
Name	:	start-year( lt-prop-start-year )
DataType	:	number
Default	:	1900
Description	:	Used to specify the starting year.
End Year
Name	:	end-year( lt-prop-end-year )
DataType	:	number
Default	:	2100
Description	:	Used to specify the ending year.
Start Date
Name	:	start-date( lt-prop-start-date )
DataType	:	string
Default	:	
Description	:	Specifies the starting date of the selected dates. The date provided should match the format of calendar.
End Date
Name	:	end-date( lt-prop-end-date )
DataType	:	string
Default	:	
Description	:	Specifies the last date of the selected dates. The date provided should match the format of calendar.
Disabled Dates
Name	:	disabled-dates( lt-prop-disabled-dates )
DataType	:	
Default	:	array
Description	:	Array of regex expressions. Dates matching to the regex expressions are disabled and hence cannot be selected.
Min Date
Name	:	min-date( lt-prop-min-date )
DataType	:	string
Default	:	Everything is selectable by default
Description	:	Minimum date boundary of the calendar in daterangepicker. Any date before this date is not selectable.
Max Date
Name	:	max-date( lt-prop-max-date )
DataType	:	string
Default	:	Everything is selectable by default
Description	:	Maximum date boundary of the calendar in daterangepicker. Any date beyond this date is not selectable.
Selection Type
Name	:	selection-type( lt-prop-selection-type )
DataType	:	string
Default	:	continuous
Description	:	If the value is continuous, selection will be shown for the selected range. If the value is separate, two pickers will be shown where one is used to select the start date and the other is use to select the end date.
Position
Name	:	position( lt-prop-position )
DataType	:	string
Default	:	left
Description	:	For continuous selection-type daterangepicker, position value determines in which side the current month will be rendered. By default, the current month is shown in the left side i.e. the left calendar. Changing the value to right will make the calender on the right side to show the current month.
Header Type
Name	:	header-type( lt-prop-header-type )
DataType	:	string
Default	:	dropdown
Description	:	It determines the type of header.
Fill Rows
Name	:	fill-rows( lt-prop-fill-rows )
DataType	:	boolean
Default	:	false
Description	:	This is used to decide whether to fill the previous and next month dates or to just leave them blank.
Dropdown
Name	:	dropdown ( lt-prop-dropdown )
DataType	:	string ( Stringified JSON )
Default	:	{}
Description	:	This will be set to all the dropdown being rendered in daterangepicker.
Maxdiff
Name	:	maxDiff ( lt-prop-max-diff )
DataType	:	Number
Default	:	undefined
Description	:	Max difference between range to be selected.
Navigation
Name	:	navigation ( lt-prop-navigation )
DataType	:	Boolean
Default	:	false
Description	:	This will enable keyboard navigations.
Activate-navigation
Name	:	actiateNavigation ( lt-prop-activate-navigation )
DataType	:	Boolean
Default	:	false
Description	:	This will initiate the navigation focus.
Tabindex
Name	:	tabindex ( lt-prop-tabindex )
DataType	:	number
Default	:	2
Description	:	This property sets the tabIndex for all dates.
Disable-check
Name	:	disableCheck ( lt-prop-disable-check )
DataType	:	Boolean
Default	:	false
Description	:	This will disable month navigations based on the min & max dates.
Methods

The following are the methods for the lyte-daterangepicker.

on-date-selected
Name	:	on-date-selected
Description	:	It is invoked when a range of date is selected.
on-navigation
Name	:	on-navigation
Description	:	It is invoked when a user tries to navigate to other dates by clicking on the navigation icons.
on-start-date-changed
Name	:	on-start-date-changed
Description	:	This method is invoked whenever start date is changed.
Utility Functions

You can call this function anywhere after lyte-daterangepicker is rendered.

revertToSelected
Description	:	If your daterangepicker has moved out of the selected range view, then use this function to return back to the month date from which the selected range starts.
revertToToday
Description	:	If your calendar has navigated out of the current month's date and you want to reset it back to today's date, then you can use this function.

---

## dateselect

### dateselect - overview

Dateselect

Dateselect is a component used to select a date or a range of dates from the given options. Dateselect will render with the default options. Today will be the default selected value.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calendar.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-daterangepicker.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dateselect.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Default dateselect

This is the default dateselect rendered with predefined options

```html
<lyte-dateselect></lyte-dateselect>
```
Custom dateselect

Date select options can be altered by lt-prop-options. If boolean true is passed lyte-ui-component's I18n will be used for corresponding keys ( if keys are already used in lyte-ui-component ).

lyte-calendar and lyte-daterangepicker will be rendered for specificDate and customRange keys in lt-prop-options.

```html
<lyte-dateselect lt-prop-selected = "option1" lt-prop-options = '{"option 1":true,"option 2":true,"option 3":true,"option 4":true,"option 5":true,"customRange":true}'></lyte-dateselect>
```
Custom display value

You can provide custom display values for each drop items. If values are provided instead of boolean value, the given values will be displayed without doing any i18n conversions.

```html
<lyte-dateselect lt-prop-selected = "option1" lt-prop-options = '{"option1":"custom 1","custom 2":"option 2","custom 3":"option 3","custom 4":"option 4","custom 5":"option 5","custom 6":"option 6","custom 7":"option 7","custom 8":"option 8","custom 9":"option 9","custom 10":"option 10","customRange":"Range calendar"}'></lyte-dateselect>
```
Animations

By default dropdown, calendar and daterangepicker opens with fade animation. You can also use slide and scale animation

```html
<lyte-dateselect lt-prop-animation = '{"dropdown" : "Scale", "calendar" : "Slide"}' ></lyte-dateselect>
```
Max diff property

By passing max diff property you can limit the end date ( to be selected ) with respect to the currently selected start date. In the given example dateselect only allows 10 dates from the selected start date.

```html
<lyte-dateselect lt-prop-date-range-picker = '{"maxDiff" : 10}' ></lyte-dateselect>
```
Keyboard navigation

Now you can move and select dates / range of dates through keyboard interactions

```html
<lyte-dateselect lt-prop-navigation = true ></lyte-dateselect>
```

### dateselect - api

Properties

All the properties should be prefixed with lt-prop. For more properties refer lyte-dropdown, lyte-calendar, lyte-daterangepicker.

You can provide all those properties as a single object.

options ( lt-prop-options )
DataType	:	Object
Default	:	{ today : true, yesterday : true, last7days : true, last30days : true, thisWeek : true, thisMonth : true, specificDate : true, customRange : true }
Description	:	List of available date options. If particular option is not given it will not be rendered.
selected ( lt-prop-selected )
DataType	:	string
Default	:	today
Description	:	selected value in dateselect.
button-yield ( lt-prop-button-yield )
DataType	:	Boolean
Default	:	false
Description	:	To customize lyte drop button use button yield.
calendar-yield ( lt-prop-calendar-yield )
DataType	:	Boolean
Default	:	false
Description	:	To customize calendar use calendar yield. Refer footer yield of lyte-calendar.
start-date ( lt-prop-start-date )
DataType	:	String
Default	:	-
Description	:	Start date of the date range in the date range picker.
end-date ( lt-prop-end-date )
DataType	:	String
Default	:	-
Description	:	End date of the date range in the date range picker.
current-date ( lt-prop-current-date )
DataType	:	String
Default	:	-
Description	:	selected date in lyte calendar.
dropdown-wrapper-class ( lt-prop-dropdown-wrapper-class )
DataType	:	String
Default	:	-
Description	:	Given class will be added to lyte-drop-box.
calendar-wrapper-class ( lt-prop-calendar-wrapper-class )
DataType	:	String
Default	:	-
Description	:	Given class will be added to calendar wrapper div.
dropdown ( lt-prop-dropdown )
DataType	:	Object
Default	:	{ }
Description	:	All the dropdown properties can be given as single object.
calendar ( lt-prop-calendar )
DataType	:	Object
Default	:	{ headerType : "dropdown", fillRows : false }
Description	:	All the calendar properties can be given as single object.
date-range-picker ( lt-prop-date-range-picker )
DataType	:	Object
Default	:	{ monthHeaderFormat : "MMMM YYYY" }
Description	:	All the date rangepicker properties can be given as single object.
item-yield ( lt-prop-item-yield )
DataType	:	Boolean
Default	:	false
Description	:	Each drop item will be constructed based on the yield. You can take each item data as 'itemValue.'
i18n ( lt-prop-i18n )
DataType	:	Boolean
Default	:	false
Description	:	It will convert date string from English language to selected languages for displaying selected values. ( Dateselect will use lyte-ui-component's i18n for conversion. )
footer-yield ( lt-prop-footer-yield )
DataType	:	Boolean
Default	:	false
Description	:	It will render a footer below calendar and daterangepicker.
animation ( lt-prop-animation )
DataType	:	Object
Default	:	Fade
Description	:	Type of animation to be performed during open and close of the calendar/daterangepicker and dropdown.
navigation ( lt-prop-navigation )
DataType	:	Boolean
Default	:	false
Description	:	It will enable keyboard navigation for specificDate, customRange calendars.
Methods

You can provide the methods to lyte-dateselect either via script or HTML. For more methods refer lyte-dropdown, lyte-daterangepicker.

on-select
Description	:	This method is invoked whenever a value is selected in the list.
before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after the rendering the component.
on-i18n
Description	:	This method is invoked during language conversion.
ReturnValue	:	Returned value will be used for conversion
on-change
Description	:	This method is invoked whenever currently selected value is changed.
Functions

You can call this function anywhere after the rendering of dateselect.

toggle
Description	:	To show / hide dropdown manually ( refer lyte-dropdown ).
Yields

You can render your own drop items by using yield.

buttonYield
Name	:	buttonYield
Description	:	To customize your own drop buttons, use yield. Given content will be placed inside lyte-drop-button.
calendarYield
Name	:	footer ( calendarYield )
Description	:	To add a footer to a component - refer 'lyte-calendar'.
itemYield
Name	:	item
Description	:	To customize each drop item in the date select dropdown, use this. You can take each item data as 'itemValue'.
calendar, daterangepicker footer yield
Name	:	dateselect-footer
Description	:	It will render a yielded contents below calendar and daterangepicker elements. You can use ltPropSelected ( as selected ), ltPropStartDate( as startDate ), ltPropEndDate( as endDate ) and ltPropCurrentDate( as currentDate ) in yield.

---

## datetimeinput

### datetimeinput - overview

Date time input

Datetime input component is mainly written for handling DST( Daylight saving time ) changes in various timezones. Most of the functionalities of this component are depend on the lyte-moment plugin and browser's toLocaleString property. When the clock is turned backwards in DST this component will render extra time options with its old timezone. For DST handling examples this page is set to Australia/Sydney ( +11:00 ) timezone ( $L.moment.setTimezone( "Australia/Sydney" ) )

Dependencies
```html
<!-- Individual component css files -->

 <link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calendar.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-datetime-input.css"></link>

<!-- also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS. -->
```
Default component

By default this component renders two inputs for date and time. In ltPropValue you can pass the actual date and time values as string. It should be readable in new Date() function.
You can also provide now and startOfDay options to ltPropValue. It will be converted internally.

```html
<lyte-datetime-input lt-prop-value = "now"></lyte-datetime-input>
```
DST date

Here DST changing date is set as current date.

```html
<lyte-datetime-input lt-prop-dropdown = true lt-prop-value = "2022-04-03T00:00:00+10:00"></lyte-datetime-input>
```
Readonly input

Here you can't edit values manually. You can modify only through calendar, dropdown or up/down keys

```html
<lyte-datetime-input lt-prop-dropdown = true lt-prop-value = "startOfDay" lt-prop-time-properties = '{"readonly" : true}' lt-prop-date-properties = '{"readonly" : true}'></lyte-datetime-input>
```

### datetimeinput - api

Properties

All the properties should be prefixed with lt-prop.

value
DateType	:	string
Default	:	""
Description	:	Value represented by both date and time input.
date-format
DateType	:	string
Default	:	MM/DD/YYYY
Description	:	Date format to be displayed in date input.
time-format
DateType	:	string
Default	:	hh:mm
Description	:	time format to be displayed in time input.
max-date
DateType	:	string
Default	:	""
Description	:	Maximum value to be selected.
min-date
DateType	:	string
Default	:	""
Description	:	Minimum value to be selected.
date-properties
DateType	:	object
Default	:	{}
Description	:	Given values will be set as attributes of date input.
time-properties
DateType	:	object
Default	:	{}
Description	:	Given values will be set as attributes of time input.
calendar-properties
DateType	:	String ( Stringified object )
Default	:	{}
Description	:	Given values will be set to the calendar to be rendered.
dropdown-properties
DateType	:	String ( Stringified object )
Default	:	{"freeze" : false}
Description	:	The values to be rendered will be set to the dropdown.
dropdown
DateType	:	boolean
Default	:	false
Description	:	This will render time input inside a dropdown.
calendar-yield
DateType	:	boolean
Default	:	false
Description	:	This will render calendar footer yield.
time-yield
DateType	:	boolean
Default	:	false
Description	:	Time options will be rendered through the provided yield.
header-yield
DateType	:	boolean
Default	:	false
Description	:	This will render time dropdown header yield.
boundary
DateType	:	object
Default	:	{}
Description	:	If the calendar origin element crosses the given boundary during scroll, it will hide the calendar.
offset
DateType	:	object
Default	:	{}
Description	:	window top and bottom positions will be altered with given value before positioning the calendar.
interval
DateType	:	number
Default	:	30 ( mins )
Description	:	Time dropdown options increment value.
position
DateType	:	string
Default	:	bottom
Description	:	Position of calendar with respect to the time input.
prevent-empty
DateType	:	boolean
Default	:	true
Description	:	Empty values will be converted to some other valid values in input blur.
allow-keys
DateType	:	boolean
Default	:	true
Description	:	In readonly mode, this property will allow to change the values of the input value through keyboard navigations, calendar select and dropdown select.
i18n
DateType	:	boolean
Default	:	false
Description	:	This will display i18ned values in display. It will use lyte ui component's default i18n.
appearance
DateType	:	string
Default	:	box
Description	:	Sets the appearance of the input.
readonly
DateType	:	boolean
Default	:	false
Description	:	It will make both date and time input as readonly input.
disabled
DateType	:	boolean
Default	:	false
Description	:	It will make both date and time input as disabled input.
aria
DateType	:	boolean
Default	:	false
Description	:	It will add aria attributes.
date-aria-attributes
DateType	:	object
Default	:	{}
Description	:	It will add aria attributes to date input.
time-aria-attributes
DateType	:	object
Default	:	{}
Description	:	It will add aria attributes to time input.
aria-label
DateType	:	object
Default	:	{}
Description	:	It will set the label to the time input.
tabindex
DateType	:	number
Default	:	0
Description	:	With this property, you can set the tab index.
data-tabindex
DateType	:	string
Default	:	
Description	:	With this property, you can set the data-tabindex attribute.
time-zone
DateType	:	string
Default	:	
Description	:	With this property, you can set the time zone for the date time picker. The default time zone will be ignored and the time zone set using this property will be considered.
Methods

You can provide the methods to lyte-datetime-input either via script or HTML.

on-date-chage
Description	:	This method is invoked whenever date value gets changed.
on-calendar-open
Description	:	This method is invoked whenever calendar is opened.
on-before-calendar-open
Description	:	This method is invoked before opening the calendar
ReturnValue	:	Return false will prevent calendar from opening.
on-position
Description	:	This method is used after positioning the calendar.
on-calendar-close
Description	:	This method is invoked whenever the calendar is closed.
on-before-calendar-close
Description	:	This method is invoked before closing the calendar.
ReturnValue	:	Returning false will prevent calendar from closing.
on-focus
Description	:	This method is invoked whenever the input gets focused.
on-blur
Description	:	This method is invoked whenever the input gets blured.
on-view-change
Description	:	This method is invoked whenever calendar view is changed.
on-navigate
Description	:	This method is invoked whenever navigation is happened in calendar.
before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after rendering the component
on-before-validate
Description	:	This method is invoked before doing validation and setting new value to input
ReturnValue	:	Returned value will be set in input
on-drop-options-construct
Description	:	This method is invoked before constructing dropdown options
ReturnValue	:	You can return your time dropdown options
Functions

You can call these function anywhere after the lyte-datetime-input is rendered

focus
Description	:	This helps to focus the input.
blur
Description	:	This function blurs the input.
setCss
Description	:	With this function you can reposition the calendar.
Yields

You can render your custom html contents by using yield

footer yield
Description	:	This renders a footer yield in calendar
Property	:	ltPropCalendarYield
time yield
Description	:	It allows you to render the contents inside the drop item. You can take each dropitem data as 'itemValue'. It will be passed through the yield.
Property	:	ltPropTimeYield
header yield
Description	:	This renders a drop header with yielded contents.
Property	:	ltPropHeaderYield

---

## dropdown

### dropdown - overview

Dropdown

A Dropdown, an UI element, allows you to select a value from a list of values.

There is a subtle difference between a dropdown and a menu in lyte-ui-components. For example, when you want to choose a country from a list of countries, you would use a dropdown. This is different from a menu which represents a list of commands. A menu has a list of commands like Create, Edit, Save, etc. whereas a dropdown is used to make a choice from a list of choices. Menus execute a command in the current context. Menus are only scrollable when they occupy most of the layout port.

Dependencies
```javascript
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"></link>
```
Anatomy

The image below describes the anatomy of the dropdown.

Tags of the dropdown.



lyte-drop-button - The button which opens the dropdown list on clicking it.
lyte-drop-box - The outer container of the dropdown list.
lyte-drop-body - The body of the dropdown list. This part is scrollable by default.
lyte-drop-item - Each individual item of the dropdown list. Each item has a data-value attribute that uniquely identifies it.
Basic Dropdown

A basic dropdown is rendered below.

```html
<lyte-dropdown lt-prop-selected="supplier">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="prospect">Prospects Found</lyte-drop-item>
                <lyte-drop-item data-value="supplier">Suppliers Found</lyte-drop-item>
                <lyte-drop-item data-value="vendor">Vendors Found</lyte-drop-item>
                <lyte-drop-item data-value="influencer">Influencers Found</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
Each lyte-drop-item must have a data-value attribute.
The lt-prop-selected attribute is used to specify the current selected value in the dropdown. The lt-prop-selected should be equal to the data-value of the item to be selected.
There are three ways to yield the dropdown. One is using only the lyte-drop-button, the second is using only the lyte-drop-box and the third is using both the lyte-drop-button and the lyte-drop-box. Everything inside the yield follows the anatomy of the dropdown. The above example has only yielded the lyte-drop-box .
If you are using the lyte-drop-box , the lyte-drop-body is mandatory but the lyte-drop-header and the lyte-drop-footer are not.
If no lyte-drop-button is specified by the user, lyte-dropdown attempts to get the textContent of the item and place it at the top when it is selected. If a lyte-drop-button is specified, then it is the job of the user to place the textConent above. More on this later.
If no lt-prop-selected, lt-prop-placeholder, or lt-prop-display-value is provided, then the first item is the selected value of the dropdown.
You can get/set the selected value by using the .ltProp() function.
```javascript
var selected = document.querySelector( "lyte-dropdown" ).ltProp( "selected" );
```
```javascript
var selected = document.querySelector( "lyte-dropdown" ).ltProp( "selected", "vendor" );
```
Dropdown Rendered With Arrays

Dropdowns can be rendered with an array as well. This involves not using a yield and simply passing data to the lt-prop-options attribute.

```html
<lyte-dropdown lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-dropdown>
```

You can pass the following data formats to the dropdown.

```javascript
[ {
    "name": "Volvo XC40",
    "value": "Volvo"
}, {
    "name": "Audi R8",
    "value": "Audi"
} ]
```
```javascript
[ {
    "Europe": [ {
        "name": "Germany",
        "value": "de"
    }, {
        "name": "France",
        "value": "fr"
    }, {
        "name": "Spain",
        "value": "es"
    } ]
}, {
    "Asia": [ {
        "name": "India",
        "value": "in"
    }, {
        "name": "Singapore",
        "value": "sg"
    }, {
        "name": "Japan",
        "value": "jp"
    } ]
} ]
```

Array of Objects

Opt Groups


Each object in the array that is passed to the lt-prop-options attribute should hold the user-value and the system-value.
The system-value is the value appended to the data-value attribute of the lyte-drop-item and the user-value is the textContent of each item.
The lt-prop-user-value specifies the key in the object which holds the user-value . In the above example, the name key holds the textContent of each item.
The lt-prop-system-value specifies the key in the object which holds the system-value . In the above example, the value key holds the data-value attribute's value.

You can also pass array of strings to the dropdown. In this case, lt-prop-user-value and lt-prop-system-value need not be specified as each value in the array is assumed to be both the system and user value.

```html
<lyte-dropdown lt-prop-options={{data}}></lyte-dropdown>
```

The data format is as follows

```javascript
[ "Volvo XC40", "Audi R8", "Benz SLR McLaren", "Fiat Punto" ]
```
```javascript
[ {
    "Europe": [
        "Germany",
        "France",
        "Spain"
    ]
},
{
    "Asia": [
        "India",
        "Singapore",
        "Japan"
    ]
} ]
```

Array Of Strings:

Opt Group with Strings:



You can also pass the content as a mix of array of strings or objects. This obviously needs a lt-prop-user-value and the lt-prop-system-value. Each string is treated as the user-value and system-value.

```html
<lyte-dropdown lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-options={{data}}></lyte-dropdown>
```

The data format is as follows

```javascript
[
    "United States Of America",
    {
        "name": "Canada",
        "value": "cn"
    },
    {
        "Europe": [ {
            "name": "Germany",
            "value": "de"
        },
        {
            "name": "France",
            "value": "fr"
        },
        {
            "name": "Spain",
            "value": "es"
        }
    ] },
    {
        "Asia": [ "India",
        "Singapore",
        "Japan" ]
    }
]
```

Mixed

Freeze Dropdown

When a dropdown is opened, its background is frozen by default. To prevent this, you can use the lt-prop-freeze attribute. Set it to false to prevent freezing.

```html
<lyte-dropdown lt-prop-freeze="false">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="google">Google</lyte-drop-item>
                <lyte-drop-item data-value="baidu">Baidu</lyte-drop-item>
                <lyte-drop-item data-value="ddg">DuckDuckGo</lyte-drop-item>
                <lyte-drop-item data-value="yahoo">Yahoo!</lyte-drop-item>
                <lyte-drop-item data-value="bing">Bing</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```

In a dropdown with a freeze layer, when it is opened, it caches the current value of the overflow property of the body and adds its own new value (hidden). When it is closed, it adds back the cached value.

When the lyte-drop-button moves out of the window boundary, the dropdown automatically closes.

Disabled Dropdown

The dropdown can also be disabled. Just set the lt-prop-disabled attribute to true.
```html
<lyte-dropdown lt-prop-disabled="true">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="select">Select a value</lyte-drop-item>
                <lyte-drop-item data-value="qualification">Qualification</lyte-drop-item>
                <lyte-drop-item data-value="needsanalysis">Needs Analysis</lyte-drop-item>
                <lyte-drop-item data-value="valueprop">Value Proposition</lyte-drop-item>
                <lyte-drop-item data-value="decisionmakers">Id. Decision Makers</lyte-drop-item>
                <lyte-drop-item data-value="pricequote">Price Quote</lyte-drop-item>
                <lyte-drop-item data-value="review">Review</lyte-drop-item>
                <lyte-drop-item data-value="closedwon">Closed Won</lyte-drop-item>
                <lyte-drop-item data-value="closedlost">closed Lost</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```

Setting Own Display Value

You can use the lt-prop-display-value to set the textContent of the lyte-drop-button . This works only when you don't yield the lyte-drop-button . The example below, sets the textContent of the lyte-drop-button when an option is selected.

```javascript
<lyte-dropdown lt-prop-place-holder="select a value" on-option-selected={{method('setContent')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="Existing Business">Existing Business</lyte-drop-item>
                <lyte-drop-item data-value="New Business">New Business</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
methods: {
    setContent: function( ev, sel, comp, drop ) {
        document.querySelector( "lyte-dropdown" ).ltProp ( "displayValue", "Roger:" + sel );
    }
}
```

Setting lt-prop-display-value at the start prevents the dropdown from setting the lt-prop-selected value to the first element.

The on-option-selected is invoked when one of the options is selected.

Placeholder For Dropdown

You can set a placeholder for the dropdown by using the lt-prop-placeholder attribute. When a placeholder is set, lt-prop-selected is not set.

```html
<lyte-dropdown lt-prop-placeholder="select a value">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="exist">Existing Business</lyte-drop-item>
                <lyte-drop-item data-value="new">New Business</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
Yielded Dropdown

So far we have seen the lyte-drop-box being yielded in some of our examples. In the start, we talked about how yielding the lyte-drop-button requires the user to place the textContent of the selected content inside the lyte-drop-button (or one of the DOM elements inside of the lyte-drop-button). We will see an example of this.

```html
<lyte-dropdown on-option-selected={{method('setText')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button style="border:none;border-bottom: solid 1px #d6d6d6;">
            <span>
                {{initial}}
            </span>
            <lyte-icon class="dropdown"></lyte-icon>
        </lyte-drop-button>
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value="js">Javascript</lyte-drop-item>
                <lyte-drop-item data-value="html">HTML</lyte-drop-item>
                <lyte-drop-item data-value="css">CSS</lyte-drop-item>
                <lyte-drop-item data-value="wasm">Web Assembly</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
static methods() {
  return{
    setText: function( ev, sel, comp, drop ) {
        this.setData ( "initial", drop.textContent.trim () );
    }
  }
}
```
There is a variable called initial defined in the span in the lyte-drop-button .
Every time a value is selected in the dropdown, the on-option-selected callback gets fired.
Inside the on-option-selected callback, the textContent of the selected node is acquired and set to the dropdown.
This causes a re-render and the dropdown is updated with the selected value.

You can create an opt group through the yield as well. Here's an example.

```html
<lyte-dropdown on-option-selected={{method('setText')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button style="border:none;border-bottom: solid 1px #d6d6d6;">
            <span>
                {{initial}}
            </span>
            <lyte-icon class="dropdown"></lyte-icon>
        </lyte-drop-button>
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-group label="Front-End">
                    <lyte-drop-item data-value="js">Javascript</lyte-drop-item>
                    <lyte-drop-item data-value="html">HTML</lyte-drop-item>
                    <lyte-drop-item data-value="css">CSS</lyte-drop-item>
                </lyte-drop-group>
                <lyte-drop-group>
                    <lyte-drop-label>Back-End</lyte-drop-label>
                    <lyte-drop-item data-value="java">Java</lyte-drop-item>
                    <lyte-drop-item data-value="sql">SQL</lyte-drop-item>
                    <lyte-drop-item data-value="python">Python</lyte-drop-item>
                </lyte-drop-group>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
static methods() {
  return{
    setText: function( ev, sel, comp, drop ) {
        this.setData ( "initial" , drop.textContent.trim () )
    }
  }
}
```
This dropdown follows the same principles as the previous dropdown.
A callback is fired everytime an option is selected and inside the callback, the textContent of the node is fetched and placed at top.
Inside the on-option-selected callback, the textContent of the selected node is acquired and set to the dropdown.
This causes a re-render and the dropdown is updated with the selected value.
In the above example, the lyte-drop-group is going to group lyte-drop-items together. If a label attribute is provided, then a lyte-drop-label element is appended as the first child of the group. Users can also forego this and provide the lyte-drop-label manually in their HTML.
Interaction With Other Components

The lyte-dropdown can interact with other components as well. It can interact with a lyte-search component or plugin to produce a search dropdown. Here's an example demonstrating it.

```html
<lyte-dropdown>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box class="countriesDropdown">
            <lyte-drop-body>
                <lyte-drop-header>
                    <lyte-search on-search={{method("showNoResult")}} lt-prop-query-selector='{"scope":".countriesDropdown","search":"lyte-drop-item"}'></lyte-search>
                </lyte-drop-header>
                <lyte-drop-body>
                    <%countries.forEach(function(item,index){%>
                        <lyte-drop-item data-value=></lyte-drop-item>
                    <%})%>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
static methods() {
   return{
    showNoResult: function ( result ) {
        if( result.length == 0 ) {
            if ( document.querySelector( '.noresultstyle' ) ) {
                return ;
            }

            var container = document.querySelector( '.countriesDropdown' );
            var div = document.createElement( "div" );

            div.setAttribute( "class", "noresultstyle" );
            div.textContent = "No Results Found";
            container.appendChild( div );
        }
        else {
            var noresultdiv = document.querySelector( '.noresultstyle' );

            if( noresultdiv ) {
                noresultdiv.remove()
            }
        }
    }
  }
}
```
Multiselect Dropdown

A multiselect dropdown allows you to select multiple values from the dropdown list. To render a multiselect you need to use the lt-prop-type attribute and set it to multiple . Here's an example of a multiselect.

```html
<lyte-dropdown lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-selected={{selected}} lt-prop-options={{data}} lt-prop-type='multiple'></lyte-dropdown>
```
```javascript
[ {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Apples",
    "value": "apples"
}, {
    "name": "Berries",
    "value": "berries"
} ]
```
```javascript
'[ "oranges", "apples" ]'
```
The data that is passed to the multiselect adheres to all the formats that were described in the Dropdown rendered with arrays section.
The lt-prop-selected is a variable of string datatype. Hence the value passed to the multiselect as lt-prop-selected must be string. It is an array which is represented as a string. Eg: '[ "apples", "oranges" ]'. Check out the Using Selected List section to use the lt-prop-selected-list property, which is an array of objects representing the selected values.
Setting lt-prop-selected hides the corresponding items in the dropdown list(whether its yielded or not yielded) and places those elements in the drop-button, albeit the lyte-drop-button is not yielded. Further down this doc you will find information about yielded multiselects.
Adding or removing an item invokes the on-add and on-remove callback but not the on-option-selected callback.
You can set/get the lt-prop-selected with the .ltProp() function. Setting it through .ltProp() does not invoke the on-add and on-remove function.
```javascript
var sel = document.querySelector( "lyte-dropdown" ).ltProp( "selected" );
```
```javascript
document.querySelector( "lyte-dropdown" ).ltProp( "selected", '[ "apples", "oranges" ]' );
```

The lt-prop-selected should adhere to JSON formats as it is ran through a JSON.parse function. Just make sure you use double quotes to encapsulate each of the values.

The on-option-selected callback is not invoked in multiselect/multisearch dropdown. Use the on-add and the on-remove callbacks instead.

It is better to use lt-prop-selected-list instead of lt-prop-selected for multiselects. Check the Using Selected List section.

Yielded Multiselect Dropdown

Just like normal dropdowns, multiselects can be yielded as well. Here's a multiselect with only the lyte-drop-box yielded. It more or less works the same as a multiselect with lt-prop-options passed in.

```javascript
<lyte-dropdown lt-prop-type="multiple" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value='apples'>Apples</lyte-drop-item>
                <lyte-drop-item data-value='oranges'>Oranges</lyte-drop-item>
                <lyte-drop-item data-value='bananas'>Bananas</lyte-drop-item>
                <lyte-drop-item data-value='grapes'>Grapes</lyte-drop-item>
                <lyte-drop-item data-value='tomatos'>Tomatos</lyte-drop-item>
                <lyte-drop-item data-value='berries'>Berries</lyte-drop-item>
                <lyte-drop-item data-value='papaya'>Papaya</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```

Trying to yield a multiselect with the lyte-drop-button is the place where things get a little tricky. As you read from the above section, selecting values when the lyte-drop-button is yielded does not place the selected value inside the lyte-drop-button . It is the job of the developer to achieve this functionality. Here's an example.

```html
<lyte-dropdown on-remove={{method("removeFromList")}} on-add={{method("addToList")}} lt-prop-options={{data}} lt-prop-type="multiple" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button class="removeBorders">
            <%selectedObj.forEach(function(item,index){%>
                <span class="multi-item" data-value={{item.value}}>
                    {{item.name}}
                    <lyte-drop-remove class="close-button"></lyte-drop-remove>
                </span>

            <%})%>
        </lyte-drop-button>
    </template>
</lyte-dropdown>
```
```javascript
import { arrayUtils } from "@slyte/component";
 // Just as we used the on-option-selected to populate the lyte-drop-button in normal dropdowns, we will be using
 // on-add and on-remove callbacks to achieve a similar result in multiselects
 static methods() {
     // on-add is called when an item is selected. Use it to populate the selected values of the multiselect.
     return{
     "addToList": function ( event, current, total ) {
         // Get all the data of the dropdown
         var allItems = this.getData( "data" );

         for ( var i = 0; i < allItems.length; i++ ) {

             // Find the appropriate item
             if ( allItems[ i ] . value == src ) {
                 break;
             }
         }

         // Push it into the array of selected items
         arrayUtils( this.getData( "selectedObj" ), "push", allItems[ i ] );
     },

     // on-remove is called when an item is removed from the selected list(clicking the close icon). Use it to remove the item from the selected list.
     removeFromList: function ( event, current, data ) {
         // Get all selected items
         for ( var i = 0; i < this.getData( "selectedObj" ); i++ ) {

             // Remove the deselected item from the list of selected values
             if ( this.getData( "selectedObj" )[ i ].value == src ) {
                 arrayUtils( this.getData( "selectedObj" ), "removeAt", i, 1 );
             }
         }
     }
   }
 }
```
```javascript
selectedObj = [ {
    "name": "Oranges",
    "value": "oranges"
},
{
"name": "Apples",
"value": "apples"
} ];

data = [ {
    "name": "Apples",
    "value": "apples"
},
{
    "name": "Oranges",
    "value": "oranges"
},
{
    "name": "Bananas",
    "value": "bananas"
},
{
    "name": "Grapes",
    "value": "grapes"
},
{
    "name": "Berries",
    "value": "berries"
},
{
    "name": "Tomatos",
    "value": "tomatos"
},
{
    "name": "Papaya",
    "value": "papaya"
} ];

selected = '[ "oranges", "apples" ]'
```




Variables

selectedObj - Initial selected values that needs to be rendered at the top.
data - All the items to be rendered in the dropdown
selected - Your selected list/Array of data-value values that are going to be used to hide the lyte-drop-item .(Remember lt-prop-selected is a string.)
What's Happening?!


You've decided to yield the lyte-drop-button so you are making sure that you render the selected items by yourself. This is shown in the above code.
You run a for loop on selectedObj to render the selected values. The name key contains the display value and the value key contains the system value.
on-add gets called whenever an item is selected. Inside on-add , you get the list of all values in the dropdown and find the item which match the selected item and push it inside selectedObj which forces a render. Visually this feels like an item was added to the selected list when an item is selected from the dropdown.
on-remove gets called whenever an item is removed. An item is considered to be removed when the user clicks on the lyte-drop-remove tag. So make sure this tag renders like a close icon. Inside the on-remove callback, you get the selected items and remove the currently removed item from the list. This forces a render and visually feels like the item whose close button was clicked was removed.
You pass lt-prop-selected at the start so you hide the already selected items in the dropdown list.
Make sure you add a data-value to the top level DOM of each item in the selected item list. In the above example its added to the span .

Similarly, we can yield both the head and the body at the same time. Here's an example.

```html
<lyte-dropdown on-remove={{method("removeFromList")}} on-add={{method("addToList")}} lt-prop-type="multiple" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button>
            <%selectedObj.forEach(function(item,index){%>
                <span class="multi-item" data-value={{item.value}}>
                    {{item.name}}
                    <lyte-drop-remove class="close-button"></lyte-drop-remove>
                </span>

            <%})%>
        </lyte-drop-button>
        <lyte-drop-box>
            <lyte-drop-body>
                <%data.forEach(function(item,index){%>
                    <lyte-drop-item data-value={{item.value}}>{{item.name}}</lyte-drop-item>
                <%})%>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
// Just as we used the on-option-selected to populate the lyte-drop-button in normal dropdowns, we will be using
// on-add and on-remove callbacks to achieve a similar result in multiselects
static methods() {
  return{
    // on-add is called when an item is selected. Use it to populate the selected values of the multiselect.
    "addToList": function( event, current, total ) {
        // Get all items of the dropdown
        var allItems = this.getData( "data" );

        for( var i = 0; i < allItems.length; i++ ) {
            // Find the current selected item in the data list
            if( allItems [ i ]. value == src ) {
                break;
            }
        }

        // Push it into the array of selected items
        arrayUtils( this.getData( "selectedObj" ), "push", allItems[ i ] );
    },

    // on-remove is called when an item is removed from the selected list(clicking the close icon). Use it to remove the item from the selected list.
    removeFromList: function( event, current, data ) {
        // Get all selected items
        for( var i = 0; i < this.getData( "selectedObj" ); i++ ) {
            // Find the current deselected item and remove it
            if( this.getData( "selectedObj" )[ i ]. value == src ) {
                arrayUtils( this.getData( "selectedObj" ), "removeAt", i, 1 );
            }
        }
    }
  }
}
```
```javascript
selectedObj = [ {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Apples",
    "value": "apples"
} ];

data = [ {
    "name": "Apples",
    "value": "apples"
}, {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Bananas",
    "value": "bananas"
}, {
    "name": "Grapes",
    "value": "grapes"
}, {
    "name": "Berries",
    "value": "berries"
}, {
    "name": "Tomatos",
    "value": "tomatos"
}, {
    "name": "Papaya",
    "value": "papaya"
} ]
selected = '[ "oranges", "apples" ]'
```
Multiselects With Search

This is same as the multiselect dropdown but with a search box provided. You can render this by setting the lt-prop-type attribute to multisearch . Here's an example.

```html
<lyte-dropdown lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-selected={{selected}} lt-prop-options={{data}} lt-prop-type='multisearch'></lyte-dropdown>
```
```javascript
[ {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Apples",
    "value": "apples"
}, {
    "name": "Berries",
    "value": "berries"
} ]
```
```javascript
'[ "oranges", "apples" ]'
```
The data that is passed to the multiselect with search adheres to all the formats that were described in the Dropdown rendered with arrays section.
The lt-prop-selected is a variable of string datatype. Hence the value passed to the multiselect with search as lt-prop-selected must be string. It is an array which is represented as a string. Eg: '[ "apples", "oranges" ]'. Check out the Using Selected List section to use the lt-prop-selected-list property, which is an array of objects representing the selected values.
Setting lt-prop-selected hides the corresponding items in the dropdown list(whether its yielded or not yielded) and places those elements in the drop-button, albeit the lyte-drop-button is not yielded. Further down this doc you will find information about yielded multiselects with search.
Adding or removing an item invokes the on-add and on-remove callback but not the on-option-selected callback.
You can set/get the lt-prop-selected with the .ltProp() function. Setting it through .ltProp() does not invoke the on-add and on-remove function.
```javascript
var sel = document.querySelector( "lyte-dropdown" ).ltProp( "selected" );
```
```javascript
document.querySelector( "lyte-dropdown" ).ltProp( "selected", '[ "apples", "oranges" ]' );
```

The lt-prop-selected should adhere to JSON formats as it is ran through a JSON.parse function. Just make sure you use double quotes.

It is better to use lt-prop-selected-list instead of lt-prop-selected for multiselects. Check the Using Selected List section.

Yielded Multiselects With Search

Multiselects with searches can also be yielded just like multiselects. They follow the same principle except that you need to either initialize the lyte-search plugin or component on the lyte-drop-box if you are yielding the lyte-drop-button . Here's an example where only the lyte-drop-box is yielded.

```html
<lyte-dropdown lt-prop-type="multisearch" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value='apples'>Apples</lyte-drop-item>
                <lyte-drop-item data-value='oranges'>Oranges</lyte-drop-item>
                <lyte-drop-item data-value='bananas'>Bananas</lyte-drop-item>
                <lyte-drop-item data-value='grapes'>Grapes</lyte-drop-item>
                <lyte-drop-item data-value='tomatos'>Tomatos</lyte-drop-item>
                <lyte-drop-item data-value='berries'>Berries</lyte-drop-item>
                <lyte-drop-item data-value='papaya'>Papaya</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```

Yielding the lyte-drop-button of the multisearch is same as yielding the lyte-drop-button of the multiselect. Only difference is you have initialize the search box yourself.

```html
<lyte-dropdown lt-prop-options={{data}} lt-prop-type="multisearch" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button>
            <ul>
                <%selectedObj.forEach(function(item,index){%>
                    <li data-value={{item.value}}>
                        {{item.name}}
                        <lyte-drop-remove class="close-button"></lyte-drop-remove>
                    </li>
                <%})%>
                <input type="text" class="multi_input" />
            </ul>
        </lyte-drop-button>
    </template>
</lyte-dropdown>
```
```javascript
import { arrayUtils } from "@slyte/component";
 // Initialize the search plugin on the input
 $L( '.multi_input' ) . search( {
     "scope": "lyte-drop-box",
     "search": "lyte-drop-item"
 } );

 // Just as we used the on-option-selected to populate the lyte-drop-button in normal dropdowns, we will be using
 // on-add and on-remove callbacks to achieve a similar result in multiselects
 static methods() {
   return{
     // on-add is called when an item is selected. Use it to populate the selected values of the multiselect.
     "addToList": function( event, current, total ) {
         // Get the list of all items
         var allItems = this.getData( "data" );

         for( var i = 0; i < allItems.length; i++ ) {
             // Find the current selected item in the dropdown's data
             if( allItems [ i ]. value == src ) {
                 break;
             }
         }

         // Push it into the array of selected items
         arrayUtils( this.getData( "selectedObj" ), "push", allItems [ i ] );
     },

     // on-remove is called when an item is removed from the selected list(clicking the close icon). Use it to remove the item from the selected list.
         removeFromList: function( event, current, data ) {
             // Get the list of all selected items
             for( var i = 0; i < this.getData( "selectedObj" ); i++ ) {
                 // Remove the current deselected item from the list
                 if( this.getData( "selectedObj" )[ i ]. value == src ) {
                   arrayUtils( this.getData( "selectedObj" ), "removeAt", i, 1 );
                 }
             }
         }
     }
 }
```
```javascript
selectedObj = [ {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Apples",
    "value": "apples"
} ]

data = [ {
    "name": "Apples",
    "value": "apples"
}, {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Bananas",
    "value": "bananas"
}, {
    "name": "Grapes",
    "value": "grapes"
}, {
    "name": "Berries",
    "value": "berries"
}, {
    "name": "Tomatos",
    "value": "tomatos"
}, {
    "name": "Papaya",
    "value": "papaya"
} ]

selected = '[ "oranges", "apples" ]'
```




Variables

selectedObj - Initially selected values that needs to be rendered at the top.
data - All the items to be rendered in the dropdown
selected - Your selected list/Array of data-value values that are going to be used to hide the lyte-drop-item .(Remember lt-prop-selected is a string.)

What's Happening?!

Nothing really. You've decided to yield the lyte-drop-button so you are making sure that you render the selected items by yourself. This is shown in the above code.
You run a for loop on selectedObj to render the selected values. The name key contains the display value and the value key contains the system value.
on-add gets called whenever an item is selected. Inside on-add , you get the list of all values in the dropdown and find the item which match the selected item and push it inside selectedObj which forces a render. Visually this feels like an item was added to the selected list when an item is selected from the dropdown.
on-remove gets called whenever an item is removed. An item is considered to be removed when the user clicks on the lyte-drop-remove tag. So make sure this tag renders like a close icon. Inside the on-remove callback, you get the selected items and remove the currently removed item from the list. This forces a render and visually feels like the item whose close button was clicked was removed.
You pass lt-prop-selected at the start so you hide the already selected items in the dropdown list.
Make sure you add a data-value to the top level DOM of each item in the selected item list. In the above example its added to the span .

Since you have initialized the search plugin yourself. You have to create the no results found div yourself in the on-search callback. This also means that you need to show the no results found div on selecting all the items.

Similarly, we can yield both the head and the body at the same time. Here's an example.

```html
<lyte-dropdown lt-prop-type="multisearch" lt-prop-selected={{selected}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button>
            <ul>
                <%selectedObj.forEach(function(item,index){%>
                    <li data-value={{item.value}}>
                        {{item.name}}
                        <lyte-drop-remove class="close-button"></lyte-drop-remove>
                    </li>
                <%})%>
                <input type="text" class="multi_input" />
            </ul>
        </lyte-drop-button>
        <lyte-drop-box>
            <lyte-drop-body>
                <%data.forEach(function(item,index){%>
                    <lyte-drop-item data-value={{item.value}}>{{item.name}}</lyte-drop-item>
                <%})%>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
// Initialize the search plugin on the input
$L( '.multi_input' ). search( {
    "scope": '.multi_input',
    "search": "lyte-drop-item"
} );

// Just as we used the on-option-selected to populate the lyte-drop-button in normal dropdowns, we will be using
// on-add and on-remove callbacks to achieve a similar result in multiselects
static methods() {
  return{
    // on-add is called when an item is selected. Use it to populate the selected values of the multiselect.
    "addToList": function( event, current, total ) {
        // Get the list of all items in the dropdown
        var allItems = this.getData( "data" );

        for( var i = 0; i < allItems.length; i++ ) {
            // Find the current selected item in the list
            if( allItems [ i ]. value == src ) {
                break;
            }
        }

        // Push it into the array of selected items
        arrayUtils( this.getData( "selectedObj" ), "push", allItems [ i ] );
    },

    // on-remove is called when an item is removed from the selected list(clicking the close icon). Use it to remove the item from the selected list.
    removeFromList: function( event, current, data ) {
        // Get the list of all selected items
        for( var i = 0; i < this.getData( "selectedObj" ); i++ ) {
            // Remove the current deselected item from the list
            if( this.getData( "selectedObj" )[ i ]. value == src ) {
                arrayUtils( this.getData( "selectedObj" ), "removeAt", i, 1 );
            }
        }
      }
    }
}
```
```javascript
selectedObj = [ {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Apples",
    "value": "apples"
} ];

data = [ {
    "name": "Apples",
    "value": "apples"
}, {
    "name": "Oranges",
    "value": "oranges"
}, {
    "name": "Bananas",
    "value": "bananas"
}, {
    "name": "Grapes",
    "value": "grapes"
}, {
    "name": "Berries",
    "value": "berries"
}, {
    "name": "Tomatos",
    "value": "tomatos"
}, {
    "name": "Papaya",
    "value": "papaya"
} ];

selected = '[ "oranges", "apples" ]'
```

The no results found option will be displayed everytime the number of visible lyte-drop-items are zero except for multiselects with search when the lyte-drop-button is yielded. In this case, the developer has to do it.

Using Selected List

To process the selected values, a new property lt-prop-selected-list has been introduced which makes it more easier to process selected values. The lt-prop-selected-list is an array of objects which are selected in a multiselect or a multisearch. The object here represents the particular object in lt-prop-options which corresponds to the selected value. An example is shown below

```html
<lyte-dropdown lt-prop-type="multiple" lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-options={{basicdata}} lt-prop-selected-list={{selList}}>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <% basicdata.forEach(function(item,index) { %>
                     <lyte-drop-item data-value={{item.value}}>{{item.name}} </lyte-drop-item>
                 <% } ) %>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
basicdata: [ {
    "name": "Volvo XC40",
    "value": "Volvo"
}, {
    "name": "Audi R8",
    "value": "Audi"
}, {
    "name": "Benz SLR McLaren",
    "value": "Benz"
}, {
    "name": "Fiat Punto",
    "value": "Fiat"
}, {
    "name": "Ford Mustang",
    "value": "Ford"
}, {
    "name": "Nissan Titan",
    "value": "Nissan"
}, {
    "name": "Skoda Octavia",
    "value": "Skoda"
}, {
    "name": "Ferrari F40",
    "value": "Ferrari"
}, {
    "name": "Chrysler 300",
    "value": "Chrysler"
} ]

selList:[ {
    "name": "Volvo XC40",
    "value": "Volvo"
}, {
    "name": "Audi R8",
    "value": "Audi"
} ]
```

In the above example, it can be seen that basicdata is both passed to the lyte-dropdown and also used to iterate in the yield. This is necessary. You can also see that lt-prop-user-value and lt-prop-system-value is also passed to the dropdown. The selList is the set of selected values that the dropdown must render with. You can lbind it. The lt-prop-selected-list holds the current selected values in the dropdown.

Avoid passing lt-prop-user-value or lt-prop-system-value when lt-prop-options is not passed to the dropdown. This can break the dropdown.

You can also try the same dropdown without yield

```html
<lyte-dropdown lt-prop-type="multiple" lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-options={{basicdata}} lt-prop-selected-list={{selList}}>

</lyte-dropdown>
```
```javascript
basicdata: [ {
    "name": "Volvo XC40",
    "value": "Volvo"
}, {
    "name": "Audi R8",
    "value": "Audi"
}, {
    "name": "Benz SLR McLaren",
    "value": "Benz"
}, {
    "name": "Fiat Punto",
    "value": "Fiat"
}, {
    "name": "Ford Mustang",
    "value": "Ford"
}, {
    "name": "Nissan Titan",
    "value": "Nissan"
}, {
    "name": "Skoda Octavia",
    "value": "Skoda"
}, {
    "name": "Ferrari F40",
    "value": "Ferrari"
}, {
    "name": "Chrysler 300",
    "value": "Chrysler"
} ]

selList:[ {
    "name": "Volvo XC40",
    "value": "Volvo"
}, {
    "name": "Audi R8",
    "value": "Audi"
} ]
```
Dropdown With Callout

Dropdowns can have callouts as well. You just have to set the lt-prop-callout attribute to true .

```html
<lyte-dropdown lt-prop-callout="true">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value='acquired'>Acquired</lyte-drop-item>
                <lyte-drop-item data-value='active'>Active</lyte-drop-item>
                <lyte-drop-item data-value='marketfailed'>Market Failed</lyte-drop-item>
                <lyte-drop-item data-value='projectcancelled'>Project Cancelled</lyte-drop-item>
                <lyte-drop-item data-value='shutdown'>Shutdown</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
Hover Dropdown

Dropdowns can be opened on hover as well. You just have to set the lt-prop-hover attribute to true .

```html
<lyte-dropdown lt-prop-hover="true">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value='other'>Other</lyte-drop-item>
                <lyte-drop-item data-value='private'>Private</lyte-drop-item>
                <lyte-drop-item data-value='public'>Public</lyte-drop-item>
                <lyte-drop-item data-value='subsidiary'>Subsidiary</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
Positioned Dropdown

You can position the dropdown in any of the four directions - up, down, left, right. Use the lt-prop-position attribute to position the dropdown in a particular direction.

```html
<lyte-dropdown lt-prop-position="right">
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-body>
                <lyte-drop-item data-value='edit'>Edit</lyte-drop-item>
                <lyte-drop-item data-value='delete'>Delete</lyte-drop-item>
                <lyte-drop-item data-value='rename'>Rename</lyte-drop-item>
                <lyte-drop-item data-value='modified'>Modified</lyte-drop-item>
                <lyte-drop-item data-value='setperm'>Set permission language related data</lyte-drop-item>
                <lyte-drop-item data-value='editprop'>Edit Properties</lyte-drop-item>
                <lyte-drop-item data-value='create'>Create</lyte-drop-item>
                <lyte-drop-item data-value='save'>Save</lyte-drop-item>
                <lyte-drop-item data-value='update'>Update</lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```

### dropdown - api

Properties

All properties must be prefixed with lt-prop.

remove-multiple(lt-prop-remove-multiple)
Description	:	In multiselects, you can remove multiple elements at the same time. You can press the command/ctrl key and select multiple selected values and press delete to remove them. Or you can use the shift key to select a continuum of elements and press delete to remove
Datatype	:	boolean
Default	:	false
type(lt-prop-type)
Description	:	This is used to set the type of the dropdown. Apart from the normal dropdown, multiselects and multisearch can be created with lyte-dropdown as well.
Datatype	:	string
tabindex(lt-prop-tabindex)
Description	:	This sets the tab index for the dropdown. This sets it to the input in multisearchs and to the .lyteDummyEventContainer ( This gets rendered inside the dropdown just before the lyte-drop-button ) for the other dropdowns.
Datatype	:	Number
Default	:	0
show(lt-prop-show)
Name	:	show (lt-prop-show)
Description	:	Open the dropdown when it is renderd.
Datatype	:	boolean
Default	:	false
freeze(lt-prop-freeze)
Description	:	This is used to decide whether to apply or not apply the freeze layer. By default, the freeze layer is applied when a dropdown is opened except for multiselects. Set it to false, to prevent this behaviour.
Datatype	:	boolean
Default	:	true
options(lt-prop-options)
Description	:	This is used to pass an array of values to the dropdown to be rendered. It can be an array of strings or an array of objects. Check the overview section on how to pass data to the dropdown.
Datatype	:	Array
user-value(lt-prop-user-value)
Description	:	The lt-prop-user-value represents the key which contains the display value/text content of each lyte-drop-item in the array of objects passed to the dropdown as lt-prop-options. Avoid passing this value when lt-prop-options is not passed in.
Datatype	:	string
system-value(lt-prop-system-value)
Description	:	The lt-prop-system-value represents the key which contains the value of the data-value attribute of each lyte-drop-item in the array of objects passed to the dropdown as lt-prop-options. Avoid passing this value when lt-prop-options is not passed in.
Datatype	:	string
position(lt-prop-position)
Description	:	The direction in which the dropdown should open in. If there is place to open in that particular direction, the dropdown complies by opening in that particular direction. If there is no place, then the dropdown opens in the opposite direction. If there is no place in the opposite direction either, then the dropdown opens in the original direction passed in as argument.
Datatype	:	string
Default	:	down
icon-class(lt-prop-icon-class)
Description	:	Set a class for the down arrow rendered inside the lyte-drop-button.
Datatype	:	string
Default	:	dropdown
selected(lt-prop-selected)
Description	:	Get the lt-prop-selected value of the dropdown. If it is a normal dropdown, then it is a string. If it is a multiselect or a multisearch, then it is an array. For normal dropdowns, the lt-prop-selected value is set at the start if no lt-prop-placeholder or lt-prop-display-value is provided. Changing lt-prop-selected through script, does not invoke on-option-selected, on-add or on-remove.
Datatype	:	string
Default	:	first value of the dropdown list
callout(lt-prop-callout)
Description	:	Adds a callout or an arrow to the dropdown.
Datatype	:	boolean
Default	:	false
placeholder(lt-prop-placeholder)
Description	:	Set a placeholder for your dropdown when nothing is selected. When lt-prop-placeholder is set to the dropdown on render, then the first item is not chosen as the selected value.
Datatype	:	string
disabled(lt-prop-disabled)
Description	:	Set this to true, to disable the dropdown. Disabled dropdowns do not open when they are toggled with the .toggle() function.
Datatype	:	boolean
Default	:	false
hover(lt-prop-hover)
Description	:	Set this to true, to open the dropdown when it is hovered instead of a click.
Datatype	:	boolean
Default	:	false
no-result(lt-prop-no-result)
Description	:	This is used to set the text which gets displayed when there are no results to be shown. Make sure to internationalize it when you have provided your own value.
Datatype	:	string
Default	:	No results found
max-count(lt-prop-max-count)
Description	:	The maximum number of elements that can be selected in a multiselect dropdown.
Datatype	:	number
boundary(lt-prop-boundary)
Description	:	It represents a rectangular area(dimensions calculated from the window) beyond which the dropdown closes. When the lyte-drop-button crosses this boundary(by scrolling), it automatically closes the dropdown.
Datatype	:	object
display-value(lt-prop-display-value)
Description	:	Set a display-value or the content to be displayed as selected.
Datatype	:	string
disabled-list(lt-prop-disabled-list)
Description	:	This is used to display some of the items in the dropdown. You have to pass an array of system values of items that you want to disable.
Datatype	:	array
animate(lt-prop-animate)
Description	:	Whether to slide up/down the dropdown on opening it or not.
Datatype	:	boolean
Default	:	false
tooltip(lt-prop-tooltip)
Description	:	This is used to configure the properties of the tooltip that gets displayed when the width of the selected content exceeds the width of the drop-button.
Datatype	:	object
Default	:	{ "position": "bottom", "appearance": "box","margin": 5,"keeptooltip": true }
box-class(lt-prop-box-class)
Description	:	This is used to set the class of the dropbox that is opened. This property is only applicable when the drop-box is not yielded.
Datatype	:	string
is-open(lt-prop-is-open)
Description	:	This property is used to tell you if the dropdown is in open state or is in close state.
Datatype	:	boolean
Default	:	false
fix-position-on-open(lt-prop-fix-position-on-open)
Description	:	If you do not want the dropdown to change positions after it has opened, use this property.
Datatype	:	boolean
Default	:	false
focus(lt-prop-focus)
Description	:	Focuses the dropdown after it is rendered.
Datatype	:	boolean
Default	:	false
animate-box(lt-prop-animate-box)
Description	:	It will animate drop box instead of dropbody.
Datatype	:	boolean
Default	:	false
focus-on-close(lt-prop-focus-on-close)
Description	:	Set this property to false if you want to prevent the dropdown from focusing itself when it is closed.
Datatype	:	boolean
Default	:	true
selected-list(lt-prop-selected-list)
Description	:	This property is for multiselect and multisearch dropdowns, it represents the list of selected values.
Datatype	:	array
Default	:	[]
tooltip-class(lt-prop-tooltip-class)
Description	:	Used to set a class to the tooltip which appears when the selected item label is too long in the drop-button.
Datatype	:	string
scope(lt-prop-scope)
Description	:	This represents the dom element within which the lyte-drop-box must be contained. The lyte-drop-box never leaves the boundary of its scope element. Used in dropdowns inside modals.
Datatype	:	string
prevent-scroll(lt-prop-prevent-scroll)
Description	:	This is used to control the behaviour of the freezelayer. Set it to body to allow all scrolls(except body) and allow interaction with other items when dropdown is opened.
Datatype	:	string
Default	:	all
box-button-width(lt-prop-box-button-width)
Description	:	This is used to control the width of the lyte-drop-box with respect to the button.
Datatype	:	string
Default	:	same
show-empty-message(lt-prop-show-empty-message)
Description	:	Used to show no results found div in normal dropdowns when there are no items. You can also use this to control the showing and hiding of the div.
Datatype	:	boolean
Default	:	false
force-placeholder(lt-prop-force-placeholder)
Description	:	In multiselect dropdowns(not multisearch), placeholders appear only when no item is selected. To show the placeholder even when items are selected, set this to true.
Datatype	:	boolean
Default	:	false
button-class(lt-prop-button-class)
Description	:	This property adds a class to the lyte-drop-button tag of the dropdown.
Datatype	:	string
Default	:	
disable-item-tooltip(lt-prop-disable-item-tooltip)
Description	:	When set to true, this disables the tooltip on all lyte-drop-items of the dropbox.
Datatype	:	boolean
Default	:	false
prevent-parent-scroll(lt-prop-prevent-parent-scroll)
Description	:	Disables scroll of all scrollable parents of the dropdown(only parents). This is generally used for multiselects since they don't support lt-prop-freeze.
Datatype	:	boolean
Default	:	false
show-remove-icon(lt-prop-show-remove-icon)
Description	:	This is for single select dropdowns without yielded drop-button. Setting this to true renders a remove icon next to the selected value of the dropdown. Clicking on the remove icon, removes the currently selected value. That is, it sets lt-prop-selected to empty string.
Datatype	:	boolean
Default	:	false
aria-button(lt-prop-aria-button)
Description	:	This is used to set aria attributes on the button element of the dropdown. The button element is the element with the role attribute set to combobox.
Datatype	:	object
Default	:	{}
aria-body(lt-prop-aria-body)
Description	:	This adds ARIA attributes to the lyte-drop-body of the dropdown which has the role listbox.
Datatype	:	object
Default	:	{}
item-search-type(lt-prop-item-search-type)
Description	:	When opening a multiselect or a single select dropdown, pressing on characters will help search through the list of items(it navigates to the search result). This is used to decide the type of search to be used when searching through the list of drop items.
Datatype	:	string
Default	:	contains
read-only(lt-prop-read-only)
Description	:	This makes the dropdown readonly when set to true.
Datatype	:	boolean
Default	:	false
Methods

These are the callbacks of lyte-dropdown

on-option-selected
Description	:	This is fired when one of the options of the dropdown is selected. This is not fired for a multiselect. Use on-add or on-remove if you the want relevant callbacks.
on-show
Description	:	This callback is fired when the dropdown is opened.
on-before-show
Description	:	This is fired just before the dropdown is opened. You can decide whether to show or to not show the dropdown in this callback by returning values.
ReturnValue	:	Boolean or Promise
on-hide
Description	:	This callback is fired when the dropdown is hidden.
on-before-hide
Description	:	This is fired just before the dropdown is about to be hidden. You can return values from this callback to prevent the dropdown from closing.
ReturnValue	:	Boolean or Promise
on-add
Description	:	This callback is fired when an item is selected in the dropdown. This callback is applicable to multiselect or multisearch.
on-before-add
Description	:	Fired just before an item is added into the list of selected values in a multiselect.
on-remove
Description	:	This callback is fired when one of the items is removed from the selected values.
on-before-remove
Description	:	Fired just before an item is removed from a list of selected values in a multiselect.
on-position-changed
Description	:	This is fired when the direction in which the dropdown is opened is changed( either left, right, up or down ). This is also fired when the dropdown is opened. Use this callback to add styles to your dropdown according to the direction in which it opens.
before-select
Description	:	This callback is fired before the on-option-selected or the on-change callback. It is only applicable for single select dropdowns.
on-change
Description	:	This callback is fired only when the value of lt-prop-selected is changed. It will also be fired if the selected value ordering in multiselects changes as well. This will not be fired when the dropdown's lt-prop-selected is set through script.
on-scroll
Description	:	This is fired when the lyte-drop-body is scrolled.
on-search
Description	:	This is for multisearch dropdowns(only when drop-button is not yielded) which is fired when the drop down list is searched using the search input inside the lyte-drop-button.
on-remove-icon-clicked
Description	:	It gets fired when the remove icon is clicked for single select dropdown when lt-prop-show-remove-icon is true.
on-scroll-end
Description	:	This method is fired when the dropbody is scrolled to the end.
Utility functions
.toggle()
Description	:	This is used to either open or close the dropdown.
.open()
Description	:	This is used to open the dropdown if it is closed.
.close()
Description	:	This is used to close the dropdown if it is opened.
.resetPosition()
Description	:	If the dropdown doesn't reset the position of the dropbox properly, when there is change in dimensions of the dropbox or the dropbutton, then use this function to properly align the dropbox.
.getDisplayValue()
Description	:	Used to get the current display value in a normal dropdown.
.closeError()
Description	:	Used to hide the no results found div in multiselects.
.getDropBox()
Description	:	Used to get the drop box of the dropdown.
.updateButtonAria()
Description	:	Used to add ARIA attribute to the button element of the dropdown. The element with role combobox is the element for which it will add the attribute.
.updateBodyAria()
Description	:	Used to add ARIA attribute to the lyte-drop-body of the dropdown which has the role listbox attribute.
.setValue()
Description	:	This is used to set the value of the input inside multisearch thereby changing the search results based on the value set.

---

## Dropdown

### Dropdown - api

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

### Dropdown - overview

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## fileupload

### fileupload - overview

File upload

Fileupload is used to upload files to the server. The file uploader UI component, uses the input type file for selecting files. You can also drag and paste files for uploading.
```html
<!-- Individual component css files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-fileupload.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-text.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```

Anatomy

The anatomy of a fileuploader is as shown below.

The tags of the lyte-fileupload are as follows

lyte-file-select-area -On clicking the lyte-file-select-area, select window will open.
lyte-file-message - Placeholder for lyte-fileupload.
fileBucket - List of currently selected files.
lyte-file-close - file will be removed from fileBucket.
lyte-file-retry - failed files will be uploaded again.
Default Fileuploader

A simple example for lyte-fileupload is given below. You can also customize lyte-fileupload by using yield. The single fileupload will hide the file select area, once the file is selected from file window. So we have provided multiple and single fileupload as differnet snippets for yielded syntax.

Note : lt-prop-multiple as true allows you to choose multiple files. lt-prop-ajax is used to make a XMLHttpRequest to the server and it is an object, which is similar to $L.ajax first argument. To know more about $L.ajax, click here.

```html
<lyte-fileupload lt-prop-ajax='{"url":"/Fileupload"}'>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-multiple=false
lt-prop-ajax='{"url":"/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message
class="lyteFileUpdMsgWrap {{if(queueList.length, 'lyteHide', '')}}">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload</span>
</lyte-file-message>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
							    <!-- Thumbnail image -->
							    <img class="lyteFileUpdThumb" src={{item.src}}>
</template>
                                <template lyte-else>
                                <!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
							    <span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span >
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar">
<!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
</div>
<template lyte-if="{{item.status=='error'}}">
<lyte-file-retry data-value = {{item.id}}>
<span class="lyteFileUpdFailMsg">
Failed <!-- failure message -->
</span>
<span class="lyteFileUpdRetryMsg">
Retry <!-- retry message -->
</span>
</lyte-file-retry>
</template>
<!-- close icon -->
<lyte-file-close data-value={{item.id}}>
</lyte-file-close>
</div>
</template>
</div>
</lyte-file-select-area>
</template>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-multiple="true" lt-prop-ajax='{"url" : "/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
							    <!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload </span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
</template>
<template lyte-else>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
 </span>
<template lyte-if='{{item.percentage}}'>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar">
							    <!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
</div>
</template>
<template lyte-if="{{item.status=='error'}}">
<lyte-file-retry data-value={{item.id}}>
<span class="lyteFileUpdFailMsg">
Failed<!-- failure message -->
</span>
<template lyte-if='{{!ltPropUploadMultiple}}'>
<span class="lyteFileUpdRetryMsg">
Retry<!-- retry message -->
</span>
</template>
</lyte-file-retry>
</template>
<template lyte-if="{{ !ltPropUploadMultiple || item.status !== 'uploading'}}">
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}>
</lyte-file-close>
</template>
</div>
</template>
</div>
</template>
</lyte-fileupload>
```



Note : Folder can be uploaded in lyte-fileupload using lt-prop-folder as true.

Queue List:

Queuelist is an array of object which is used to iterate the selected files in yielded syntax.

The keys available in queuelist data are listed below.



id - Unique identifier.
name - File name.
fileType - Type of the file like js or html.
size - Size of the file in Bytes.
isChunk - To identify whether it's chuck file or not.
status - To know whether the file is successfully uploaded or not (success/uploading/error).
percentage- Upload progress of the file to the server. (numeric value from 0 to 100)
Example :
Multiple Files in Single Request

Multiple files can be uploaded in a single request using the lt-prop-upload-multiple attribute.You can also specify the number of files you want to upload in a single request using lt-prop-upload-multiple-count.

Note : There is difference between lt-prop-upload-multiple and lt-prop-multiple is that the lt-prop-multiple. allows to select multiple files, where as the lt-prop-upload-multiple is used to send multiple files in one request to the server.

```html
<lyte-fileupload lt-prop-upload-multiple=true lt-prop-upload-multiple-count=3
lt-prop-multiple=true lt-prop-ajax='{"url":"/Fileupload"}'>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-upload-multiple=true
lt-prop-upload-multiple-count=3 lt-prop-multiple=true lt-prop-ajax='{"url":"/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload </span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
</template>
<template lyte-else>
<!-- file icon -->
							                <span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
										    </div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<template lyte-if='{{item.percentage}}'>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar">
                                            <!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
								            </div>
									        </div>
</div>
</template>
<template lyte-if="{{item.status=='error'}}">
										    <lyte-file-retry data-value={{item.id}}>
										    <span class="lyteFileUpdFailMsg">
Failed<!-- failure message -->
						                    </span>
		                                    <template lyte-if='{{!ltPropUploadMultiple}}'>
			                                <span class="lyteFileUpdRetryMsg">
				                            Retry<!-- retry message -->
		                                    </span>
                                            </template>
</lyte-file-retry>
</template>
<template lyte-if="{{ !ltPropUploadMultiple || item.status !== 'uploading'}}">
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}>
</lyte-file-close>
</template>
</div>
</template>
</div>
										    </template>
</lyte-fileupload>
```
Example :
FileUpload Inside Form

Lyte-fileupload can also be used inside forms, when you want to upload files along with the field values to the server then you have to create FormData. FormData is a web API, click here to know more. In the FormData, you can append the field values along with the selected files which you can get as an array using lt-prop-files API. Then you can create an XMLHttpRequest to send the FormData. An example is shown below.

```html
<form-comp>
<form onsubmit="{{action('returningFalse')}}">
Name :
<lyte-input lt-prop-id="name" lt-prop-placeholder="Enter your name"
lt-prop-name="name" lt-prop-value="lbind(formFields.name)">
</lyte-input>
Id :
<lyte-input lt-prop-id="id" lt-prop-name="id" lt-prop-placeholder="Enter your id"
lt-prop-value="lbind(formFields.id)">
</lyte-input>
<lyte-fileupload lt-prop-appearance="Btn" lt-prop-multiple=true lt-prop-files="{{lbind(Files)}}"
lt-prop-auto-upload=false>
</lyte-fileupload>
<lyte-button onclick={{action('click')}} lt-prop-type="submit">
<template is="registerYield" yield-name="text">
Submit
</template>
</lyte-button>
</form>
</form-comp>
```
```javascript
class FormComp extends Component {
data(){
return {
formFields : prop('object', {"default" : {
name : '',
id : ''
}}),
files : prop('array', { "default" : []})
}
},
static actions() {
return {
returningFalse:function(){
event.preventDefault();
},
click1:function(){
/* retrieve the files and formFields */
var files = this.getData("files");
var formFields = this.getData("formFields");
var formdata = new FormData();
for(const key in formFields) {
formdata.append(key,formFields[key]);
}
for(var i=0;i < files.length;i++){
formdata.append("file"+i,files[i]);
}
$L.ajax({
processData: false,
contentType: false,
url:'/Fileupload',
type:'POST',
data:formdata,
success:function(){
console.log( 'succeeded' );
}
});
}
}
										    }
}
```

Example :

Predefined Files

If some files are already uploaded in the server and if you want to display those files in the client side, then you can use predefinedList as follow.

```html
<lyte-fileupload  predefined-list={{sampleData}} lt-prop-ajax='{"url":"/Fileupload"}'>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true  predefined-list={{sampleData}}
lt-prop-ajax='{"url" : "/Fileupload"}' >
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
<span class="lyteFileUpdMsg">
<!-- placeholder for lyte-fileupload -->
Drag file here or browse to upload
</span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<template lyte-for="{{predefinedList}} as item index">
<div class="lyteFileUpdListFile">
<div class="lyteFileUpdTypePreview">
<template lyte-if='{{item.src}}'>
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}}>
</template>
<template lyte-else>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}">
</span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<!-- close icon -->
<lyte-file-close data-value={{item.id}}>
</lyte-file-close>
< /div >
</template>
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
</template>
<template lyte-else>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<template lyte-if='{{item.percentage}}'>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar"gt;
<!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
</div>
</template>
<template lyte-if="{{item.status=='error'}}">
<lyte-file-retry data-value={{item.id}}>
<span class="lyteFileUpdFailMsg">
Failed<!-- failure message -->
</span>
<template lyte-if='{{!ltPropUploadMultiple}}'>
<span class="lyteFileUpdRetryMsg">
Retry<!-- retry message -->
</span>
</template>
</lyte-file-retry>
</template>
<template lyte-if="{{ !ltPropUploadMultiple || item.status !== 'uploading'}}">
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}>
</lyte-file-close>
</template>
</div>
</template>
</div>
</template>
</lyte-fileupload>
```
```javascript
data() {
return{
sampleData: prop("array",{default:[
{name:"sample.png",size:23000,id:1},
{name:"sample.doc",size:2100,id:2}
]})
}
}
```

Example :
Chunk uploader with server
Client Side:

The default file uploader won't process files in which the fileSize exceeds the lt-prop-file-limit. If chunking is enabled large files are divided into chunks and chunks are uploaded.

```html
<lyte-fileupload lt-prop-chunk=true lt-prop-chunk-size=200000
lt-prop-ajax='{"url":"/Fileupload"}'>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-multiple=false
lt-prop-chunk = true lt-prop-chunk-size = 200000
lt-prop-ajax='{"url":"/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message
class="lyteFileUpdMsgWrap {{if(queueList.length, 'lyteHide', '')}}">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload</span>
</lyte-file-message>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}}>
</template>
<template lyte-else>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span >
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar">
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
</div>
<template lyte-if="{{item.status=='error'}}">
<lyte-file-retry data-value = {{item.id}}>
<span class="lyteFileUpdFailMsg">
Failed <!-- failure message -->
</span>
<span class="lyteFileUpdRetryMsg">
Retry <!-- retry message -->
</span>
</lyte-file-retry>
</template>
<!-- close icon -->
<lyte-file-close data-value={{item.id}}>
</lyte-file-close>
</div>
</template>
</div>
</lyte-file-select-area>
</template>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-multiple=true
lt-prop-chunk = true lt-prop-chunk-size = 200000
lt-prop-ajax='{"url" : "/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload </span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<template lyte-for="{{queueList}} as item index">
<div class="lyteFileUpdListFile {{concat('lyteFile',lyteUiCapitalizeName(item.status))}}">
<div class="lyteFileUpdTypePreview">
<template lyte-if="{{item.src}}">
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
</template>
<template lyte-else>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
</template>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<template lyte-if='{{item.percentage}}'>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar">
<!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
</div>
</template>
<template lyte-if="{{item.status=='error'}}">
<lyte-file-retry data-value={{item.id}}>
<span class="lyteFileUpdFailMsg">
Failed< ;!-- failure message -->
</span>
<template lyte-if='{{!ltPropUploadMultiple}}'>
<span class="lyteFileUpdRetryMsg">
Retry<!-- retry message -->
</span>
</template>
</lyte-file-retry>
</template>
<template lyte-if="{{ !ltPropUploadMultiple || item.status !== 'uploading'}}">
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}& gt;
</lyte-file-close>
</template>
</div>
</template>
</div>
</template>
</lyte-fileupload>
```

Example :
Server Side:

The server-side code for handling chunk files is given below. In the node server, all the chunks of the files are stored as a temporary files in some folder. Once all the chunks of the individual file are uploaded successfully, the on-file-success method will be executed. In this method, XMLHttpRequest is triggered to merge the chunks of the individual file to get the original file.

```javascript
const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var FileReader = require('filereader');
var upload = multer({ dest: 'uploads/' });
/*uploads is a name of the folder. ChunkFile file will be
automatically stored in upload folder.*/
var no_of_chunk=0; /*To check the total count of the chunks*/
var file={}; /*mapping the chunk reference to its original file.*/
var buffers=[]; /* For storing chunk as Arraybuffer */ \n
app.post('/chunkUpload',upload.single('file'),function(req,res){
														  mappingChunkWithFile(req.body,req.file);
														  setTimeout(function(){
															  res.send('uploaded');
														  } ,2000);
});
app.post("/mergingChunks",upload.single('file'),function(req ,res){
														  let fileId = req.body.fileId,fileName  = req.body.fileName,chunkCount;
														  if(file[fileId]){
															  chunkCount = file[fileId][0].chunkCount;
														  }
														  var index=0;
														  for(index=0;index < chunkCount;index++){
															  mergingChunksTogether(index,fileId,chunkCount,fileName);
														  }
														  setTimeout(function(){
															  res.send('uploaded');
														  },2000);
});
function mappingChunkWithFile(data,chunkFile){
														  var chunkCount = parseInt(data.chunkCount),chunkIndex = parseInt(data.chunkIndex);
														  file[data.fileId] = file[data.fileId] || [{chunkCount:chunkCount}];
														  chunkFile.name = chunkFile.originalname;
														  file[data.fileId][chunkIndex+1] = chunkFile;
}
function arrayBufferToFile(fileName){
														  var byteLength = 0;
														  buffers.forEach(function(buffer){
															  byteLength += buffer.byteLength;
														  });
														  var tmp = new Uint16Array(byteLength),originalFile;
														  var lastOffset = 0;
														  buffers.forEach(function(buffer){
															  /*BYTES_PER_ELEMENT == 2 for Uint16Array */
															  var reusableByteLength = buffer.byteLength;
															  if (reusableByteLength % 2 != 0){
																  buffer = buffer.slice(0, reusableByteLength - 1)
															  }
															  tmp.set(new Uint16Array(buffer), lastOffset);
															  lastOffset += reusableByteLength;
														  });
														  tmp = new Uint8Array(tmp);
														  originalFile= fs.createWriteStream(fileName);
														  var buffer = new Buffer( tmp.buffer );
														  originalFile.end(buffer);
														  buffers = [],no_of_chunk = 0;/* resetting the values */
} \n
function mergingChunksTogether(index,fileId,chunkCount,fileName){
														  let reader = new FileReader();
														  reader.readAsArrayBuffer(file[fileId][index+1]);
														  reader.onload = function(){
															  no_of_chunk++;
															  buffers[index]=reader.result;
															  if(chunkCount  == no_of_chunk) {
																  arrayBufferToFile(fileName);
															  }
														  }
}
/* For serving other Files */
app.get('*',function(req,res){
														  var diffPath = req.path.replace( '%20', '\ ');
														  res.sendFile(path.join(__dirname,diffPath));
});
/* For serving index.html */
app.get('/', function(req,res){
														  res.sendFile(path.join(__dirname,'/index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
```javascript
static methods() {
		filesuccess : function(event,fileDetail,element){
		var formdata = new FormData();
		formdata.append("fileId",fileDetail.id);
		formdata.append("fileName",fileDetail.name);
		$L.ajax({
		url:"/mergingChunks",
		type:'POST',
		data:formdata,
		processData: false,
		contentType:false
		});
	}
}
```

Note : The following npm packages express, path, fs, multer and filereader are need to be installed.

Callbacks

To implement fileuploader, callbacks are higly desirable.

Callbacks before sending the request to the server
onBeforeAdd
onBeforeAdd is called before adding the file to the file bucket.
onAdd
onAdd is called after adding the file to the file bucket.
onBeforeSend
onBeforeSend is called before constructing the Ajax request.
onSend
onSend is called after sending the request to the server.


Callbacks to send and receive the request to/from the server
onRequestSuccess
onRequestSuccess is called when all the files gets succeded on an individual request.
onRequestFailure
onRequestFailure gets called when even a single file gets aborted or failed on an individual request.
onFileSuccess
onFileSuccess gets called when all the files and not chunks are uploaded successfully. individual request.
onFileFailure
onFilefailure gets called when even a single file and not chunks gets aborted or failed
onChunkSuccess
onChunkSuccess gets called when the files are being sent as chunks and when all such chunks gets uploaded successfully.
onChunkFailure
onChunkfailure gets called when the files are being sent as chunks and when even a single chunk fails to gets uploaded.


Callbacks after completing all requests
onSuccess
onSuccess gets called when all the files gets uploaded successfully.This would be the final callback after completing all the request.
onFailure
onfailure gets called even if a single file fails to upload. This would be the final callback after completing all the request.

Note : When you set ltPropUploadMultiple as true, onFileSuccess and onFileFailure method will not be called.

Example :

Retrying After Failure

When an individual file is failed, then the file will be retrying to upload based on the count of ltPropRetry or ltPropChunkRetry. By default, the value of ltPropRetry or ltPropChunkRetry is 2. While retrying on-retry method will be triggered. After the completion of on-retry method, success or failure method will be called. You can also resend the file, by clicking the retry button.

Note : While clicking the retry button, on-retry method won't be fired.

```html
<lyte-fileupload lt-prop-retry=1 lt-prop-ajax = '{"url" : "/Fileupload"}'>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-retry=1
lt-prop-ajax='{"url" : "/Fileupload"}'>
<template is="registerYield" yield-name="file">
									            <lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload </span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<%queueList.forEach(function(item,index){%>
<div class="lyteFileUpdListFile {{item.status}}">
<div class="lyteFileUpdTypePreview">
<%if(item.src){%>
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
<%}else{%>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
<%}%>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<%if(!ltPropUploadMultiple){%>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar {{item.status}}">
<!-- file progress bar -->
<divclass="lyteFileUpdProgressFill"
										        style="width:{{item.percentage}}%">
	                                            </div>
</div>
</div>
<}%if(item.status=="error"){%>
<lyte-file-retry data-value={{item.id}}>
<span class="lyteFileUpdFailMsg">
			                                    Failed<!-- failure message -->
</span>
<%if(!ltPropUploadMultiple){%>
<span class="lyteFileUpdRetryMsg">
Retry<!-- retry message -->
</span>
<%}%>
</lyte-file-retry>
<%}%>
<%if((!ltPropUploadMultiple)||
(!item.status||item.status=="error"||item.status=="success")){%>
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}>
</lyte-file-close>
<%}%>
</div>
<%})%>
</div>
</template>
</lyte-fileupload>
```
```html
<lyte-fileupload lt-prop-yield=true lt-prop-chunk-retry=1
lt-prop-chunk = true lt-prop-chunk-size = 200000 lt-prop-ajax='{"url":"/Fileupload"}'>
<template is="registerYield" yield-name="file">
<lyte-file-select-area>
<lyte-file-message class="lyteFileUpdMsgWrap">
<!-- placeholder for lyte-fileupload -->
<span class="lyteFileUpdMsg">Drag file here or browse to upload </span>
</lyte-file-message>
</lyte-file-select-area>
<div class="lyteFileUpdList">
<!-- queueList contains a list of currently selected files -->
<%queueList.forEach(function(item,index){%>
<div class="lyteFileUpdListFile {{item.status}}">
<div class="lyteFileUpdTypePreview">
<%if(item.src){%>
<!-- Thumbnail image -->
<img class="lyteFileUpdThumb" src={{item.src}} >
										    <%}else{%>
<!-- file icon -->
<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>
<%}%>
</div>
<!-- file name -->
<lyte-text class="lyteFileUpdFileName" lt-prop-value={{item.name}}>
</lyte-text>
<!-- file size -->
<span class="lyteFileUpdFileSize">
({{lyteUiFileSize(item.size, 'KB', 2)}})
</span>
<%if(!ltPropUploadMultiple){%>
<div class="lyteFileUpdFileStatus" data-completed={{item.percentage}}>
<div class="lyteFileUpdProgressBar {{item.status}}">
<!-- file progress bar -->
<div class="lyteFileUpdProgressFill"
style="width:{{item.percentage}}%">
</div>
</div>
										    </div>
									        <}%if(item.status=="error"){%>
										    <lyte-file-retry data-value={{item.id}}>
<span class="lyteFileUpdFailMsg">
	                                        Failed<!-- failure message -->
</span>
<%if(!ltPropUploadMultiple){%>
<span class="lyteFileUpdRetryMsg">
Retry<!-- retry message -->
				                            </span>
<%}%>
</lyte-file-retry>
<%}%>
<%if((!ltPropUploadMultiple)||
(!item.status||item.status=="error"||item.status=="success")){%>
<!-- close icon -->
<lyte-file-close data-value = {{item.id}} class = {{item.status}}>
</lyte-file-close>
										    <%}%>
</div>
<%})%>
</div>
</template>
</lyte-fileupload>
```
Example :

### fileupload - api

Properties

All properties should be prefixed with lt-prop. .

name
DataType	:	String
Default	:	file
Description	:	It will be set for inner input
multiple
DataType	:	Boolean
Default	:	true
Description	:	It allows to select multiple files
accept
DataType	:	String
Default	:	-
Description	:	It allows to select files with given types. If the select file does not match the given type, then the file will be rejected and onReject method will be triggered.
id
DataType	:	String
Default	:	-
Description	:	It will be set for inner file type input.
class
DataType	:	String
Default	:	-
Description	:	It will be set for inner file type input.
yield
DataType	:	Boolean
Default	:	true
Description	:	It allows to construct custom DOM.
upload-multiple
DataType	:	Boolean
Default	:	true
Description	:	It allows to upload multiple files in a single request.
upload-multiple-count
DataType	:	Number
Default	:	Infinity
Description	:	Given number of files will be uploaded in a single request.
file-limit
DataType	:	Number
Default	:	undefined
Description	:	Files exceeding given size will be rejected. The value should be in bytes. The onReject method will be triggered if the file size exceeds.
minimum-file-size
DataType	:	Number
Default	:	0
Description	:	Files less than given size will be rejected. The value should be in bytes. The onReject method will be triggered if the file size is less.
total-files-size
DataType	:	String
Default	:	undefined
Description	:	If the selected files exceeds the given total files size, then the files will be rejected. The onReject method will be triggered.
parallel
DataType	:	Number
Default	:	2
Description	:	Given number of files will be uploaded parallelly.
auto-upload
DataType	:	Boolean
Default	:	true
Description	:	Queued files will be uploaded automatically.
trigger-upload
DataType	:	Boolean
Default	:	false
Description	:	Queued files will be uploaded when it set to true.
param-name
DataType	:	String
Default	:	file
Description	:	Files are added to form data in the given param key.
thumb
DataType	:	Boolean
Default	:	false
Description	:	It will create thumb for images.
tabindex
DataType	:	Number
Default	:	1
Description	:	It will be added to .fileUploadWrapper div.
retry
DataType	:	Number
Default	:	2
Description	:	If file upload fails, it will be uploaded automatically in the given number of times.
files
DataType	:	Array
Default	:	[ ]
Description	:	All the selected files can be read using this property.
folder
DataType	:	Boolean
Default	:	false
Description	:	If set to true, you can upload a folder in lyte-fileupload.
file-unit
DataType	:	String
Default	:	""
Description	:	Based on the size units will be created if units are not provided. Use lyteUiFileSize( currentSize, unit, digits ) helper for returning correct file size.
digits
DataType	:	Number
Default	:	0
Description	:	lyteUiFileSize helper returns file size with given digits accuracy after decimal point.
message
DataType	:	String
Default	:	Drag file here or browse to upload
Description	:	Given string will be shown as placeholder.
Chunk
DataType	:	Boolean
Default	:	false
Description	:	If file exceeds file-limit it is sliced into small parts and uploaded.
chunk-size
DataType	:	Number
Default	:	2000000( bytes )
Description	:	Files are sliced into given chunk size. The value should be in bytes.
parallel-chunk-upload
DataType	:	Boolean
Default	:	false
Description	:	To upload chunks parallelly.
parallel-chunk-count
DataType	:	Number
Default	:	Infinity
Description	:	Given number of chunks will be uploaded parallelly.
chunk-retry
DataType	:	Number
Default	:	2
Description	:	If a chunk upload fails, it will be uploaded automatically in given number of times.
ajax
DataType	:	Object
Default	:	{ url : ' ' }
Description	:	lt-prop-ajax is an object used to make a XMLHttpRequest to a server, which is similar to $L.ajax first argument.
appearance
DataType	:	String
Default	:	box
Description	:	It will affect the appearance of the file select area.
disabled
DataType	:	Boolean
Default	:	false
Description	:	This is used to disable the lyte-fileupload.
failure-message
DataType	:	String
Default	:	attachment failed
Description	:	It will be displayed when upload fails.
retry-text
DataType	:	String
Default	:	retry
Description	:	It will be displayed when upload fails.
allow-replace
DataType	:	Boolean
Default	:	false
Description	:	It helps to replace the previously selected file by current selected file in single fileupload.
files-count
DataType	:	Number
Default	:	Infinity
Description	:	It's used to handle the number of files allowed in lyte-fileupload.
reset
DataType	:	boolean
Default	:	false
Description	:	This is used to reset the file bucket.
prevent-duplicate
DataType	:	Boolean
Default	:	false
Description	:	This property prevents the duplicate file to get listed in the file bucket.
list-error-files
DataType	:	Boolean
Default	:	false
Description	:	By setting this property as true, in spite of the files violating the properties of count, size, type and name, gets listed in the file bucket.
reset-file-value
DataType	:	Boolean
Default	:	false
Description	:	On setting the reset-file-value as true, allows even the duplicate files to get uploaded in the file bucket.
data-tab-index
DataType	:	String
Default	:	
Description	:	With this property, you can set the order of the multiple group items in a linked list by using the focus stack component. Based on the given order, on pressing the tab key, the file upload will get focused.
ValidateByExt
DataType	:	Boolean
Default	:	false
Description	:	While uploading a file, you get a file object from the browser. The file type present in the file object might not be similar to that of the extension of your file. To overcome this, ValidateByExt property helps you to validate based on the file extension.
rename duplicate file
DataType	:	Boolean
Default	:	False
Description	:	While uploading the files, the duplicate files gets renamed with this property.
aria
DataType	:	Boolean
Default	:	false
Description	:	This property helps you to enable the aria features.
aria-attribute
DataType	:	Object
Default	:	{ role : "button","aria-roledescription" : "fileupload"}
Description	:	Given attributes will be set to file upload component.
Methods

You can provide the methods to lyte-fileupload either via script or HTML.

before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after rendering the component.
on-reject
Description	:	This method is called when a file is rejected due to size / type(format).
on-before-add
Description	:	When the file is selected and before adding a file to fileBucket, this method gets called.
ReturnValue	:	You can return false or a promise.
on-add
Description	:	When the file is selected and after adding a file to fileBucket, this method gets called .
on-before-remove
Description	:	This method is invoked before removing a file from fileBucket.
ReturnValue	:	If its false, file will not be added.
on-remove
Description	:	This method is invoked after removing a file from fileBucket.
ReturnValue	:	If its false, file will not be added
on-success
Description	:	This method is called when all the files are uploaded successfully.(overall success callback)
on-failure
Description	:	This method is called when either one of the file gets failed to upload.(overall failure callback)
on-request-success
Description	:	This method is called when an individual request is succeed.
on-request-failure
Description	:	This method is called when an individual request is failed or aborted.
on-file-success
Description	:	This method is called when an individual file is uploaded successfully in the server.
on-file-failure
Description	:	This method is called when an individual file is failed or aborted after uploaded to the server.
on-progress
Description	:	This method is called when file is in progress.
on-retry
Description	:	This method will be called automatically in given number of retrying times(lt-prop-retry or lt-prop-chunk-retry), when file upload fails.
on-chunk-success
Description	:	This method is called when file chunk is uploaded successfully.
on-chunk-error
Description	:	This method is called when file chunk is failed or aborted.
on-before-send
Description	:	This method is called before sending xhr request.
on-send
Description	:	This method is called after sending xhr request.
on-drag-enter
Description	:	This method is called when files enters file upload area (.fileUploadWrapper )
on-drag-over
Description	:	This method is called when files dragged over file upload area. (.fileUploadWrapper )
on-drag-leave
Description	:	This method is called when the files exits the file upload area. ( .fileUploadWrapper )
on-before-drop
Description	:	This method is called before dropping the files
ReturnValue	:	If this method returns false files will not dropped
on-drop
Description	:	This method is called after dropping the files
on-before-paste
Description	:	This method is called before pasting the files.
ReturnValue	:	If this method returns false, files will not be pasted.
on-paste
Description	:	This method is called after pasting the files.
on-before-open
Description	:	This method is called before opening file selection window.
ReturnValue	:	If this method returns false, file window will not be opened.
on-select
Description	:	This method is called after selecting the files from file selection window.
ReturnValue	:	If this method returns false, files will not be added.
Functions

You can call this function anywhere after lyte-fileupload is rendered.

removeUpload
Description	:	This will remove a particular file / all files from fileBucket.
upload
Description	:	This will upload a particular file / queued files from fileBucket.
addFiles
Description	:	This will add a single file / array of files into fileBucket.
Yields

You can render your own drop items by using yield.

yield ( description )
Description	:	All the elements given inside the yield template will be rendered instead of default DOM.

---

## input

### input - overview

Input

Input is a form element from the family of UI components which is used to get responses from the user. lyteInputFocus class will be added to lyte-input tag on focus. Input and its label will be either in horizontal(input will take 60% width) or vertical (default, input takes 100% width) direction. Default appearance of input will be 'flat'. If lt-prop-label provided, label tag will be rendered.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-calendar.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of an input is as shown below.

Default input

Lyte-input renders text type input if type is not specified.

```html
<lyte-input lt-prop-placeholder = "Enter some text"> </lyte-input>
```
Box input

Box like border will be applied for lt-prop-appearance as 'box'.

```html
<lyte-input lt-prop-appearance = 'box' lt-prop-placeholder = "Enter some text"> </lyte-input>
```
Input with label

Label will be created for input if label provided. Default direction is vertical.

```html
<lyte-input lt-prop-label = 'Some label' lt-prop-placeholder = "Enter some text"> </lyte-input>
```
Horizontal labeled input

Input and label will take 60% and 40% of its total width.

```html
<lyte-input lt-prop-label = 'Some label' lt-prop-direction = "horizontal" lt-prop-placeholder = "Enter some text"> </lyte-input>
```
Number type input

It will render number type input. lt-prop-max and lt-prop-min properties indicates max and min values to be set to the input.

Value provided in step will be used for incremental / decremental of input value in up / down key events.

lyte-input type = 'number' uses native input type 'number'. It's behaviour differs across the browsers. Some browsers may allow to type non number characters. These things are handled in lyte-number component. Use that instead of lyte-input type 'number'.

```html
<lyte-input lt-prop-type = 'number' lt-prop-value = 500 lt-prop-max = 1000 lt-prop-min = 0 lt-prop-step = 5></lyte-input>
```
Time type input

It will render time type input without dropdown. Use ltPropDefaultTime for binding and getting input value. Default time format is 12.

```html
<lyte-input lt-prop-type = 'time' lt-prop-default-time = "11:00 PM"></lyte-input>
```
Time type input with dropdown

Time options will be displayed as dropdown . Use ltPropDefaultTime for binding and getting input value.

```html
<lyte-input lt-prop-type = 'time' lt-prop-dropdown = true lt-prop-time-format = 24></lyte-input>
```
Time type input with wheel event

Time value will change on mousewheel over the input field on setting ltPropWheel as true.

```html
<lyte-input lt-prop-type='time' lt-prop-wheel = true lt-prop-time-format = 24></lyte-input>
```
Date type input

It will open a calendar on input focus. Use lt-prop-current-date for binding and getting input value. Refer lyte-calender for more properties

```html
<lyte-input lt-prop-type='date' lt-prop-current-date = "05/25/2018"></lyte-input>
```
Date type input with wheel event

Date value will change on mousewheel over the input field.

```html
<lyte-input lt-prop-type='date' lt-prop-current-date = "05/25/2018" lt-prop-wheel = true></lyte-input>
```
Textarea

It will render a textarea element instead of input.

```html
<lyte-input lt-prop-type='textarea' lt-prop-text-area-resize = '{"horizontal" : true, "vertical" : false }'></lyte-input>
```
Datetime

This will render both date type input and time type input simultaneously. All the properties are same as date type and time type input.

```html
<lyte-input lt-prop-type='datetime' lt-prop-format = "MM/DD/YYYY" lt-prop-current-date = "05/05/2020" lt-prop-default-time = "05:30 PM" lt-prop-dropdown = true></lyte-input>
```
Password

By default input won't be rendered with password show icon. You can configure icon and their tooltips.

```html
<lyte-input lt-prop-type = 'password' lt-prop-password-icon = true></lyte-input>
```
Calendar icon

Default date input opens calendar pop on focus event. When aria property is enabled, for handling better accessibility things, calendar will be opened through the icon instead of focus.
In this focus will be trapped through the lyte-trapFocus.js plugin when calendar is opened.

```html
<lyte-input lt-prop-type = 'date' lt-prop-aria = true></lyte-input>
```

### input - api

Properties

All properties should be prefixed with lt-prop. It is common for all type of input.

id
DataType	:	String
Default	:	-
Description	:	It is used to specify the Id for input / textarea element.
type
DataType	:	String
Default	:	text
Description	:	It specifies the type of input to be used.
width
DataType	:	String
Default	:	-
Description	:	Sets the width of the lyte-input.
label
DataType	:	String
Default	:	-
Description	:	Sets label for input.
appearance
DataType	:	String
Default	:	flat
Description	:	It defines the appearance of the lyte-input.
direction
DataType	:	String
Default	:	vertical
Description	:	It defines how label and input field placed.
wrapper-style
DataType	:	String
Default	:	-
Description	:	It sets inline style for '.lyteField' div inside lyte-input.
tab-index
DataType	:	String
Default	:	0
Description	:	It sets tab index for input/ textarea.
class
DataType	:	String
Default	:	-
Description	:	Sets class for input.
autofocus
DataType	:	Boolean
Default	:	false
Description	:	Sets autofocus value for input. Browser will focus input when entire page got loaded. Refer lt-prop-focus property.
maxlength
DataType	:	Number
Default	:	-
Description	:	Sets maximum length for input field.
value
DataType	:	String
Default	:	-
Description	:	Sets value for input field. For input type 'time' and 'date' use 'lt-prop-default-time' && 'lt-prop-current-date.'
placeholder
DataType	:	String
Default	:	-
Description	:	Sets placeholder for input field. For time type input set lt-prop-value as undefined ( along with empty lt-prop-default-time + moment plugin ) for setting placeholder.
autocomplete
DataType	:	String
Default	:	off
Description	:	Enables native autocomplete property for input.
name
DataType	:	String
Default	:	-
Description	:	Sets name for input field.
readonly
DataType	:	Boolean
Default	:	false
Description	:	It makes the input field as readonly. lyteInputReadonly class will be added to the lyte-input.
disabled
DataType	:	Boolean
Default	:	false
Description	:	This property disables the input. lyteInputDisabled class will be added to the lyte-input.
style
DataType	:	String
Default	:	-
Description	:	It will be set as style attribute.
pattern
DataType	:	String
Default	:	.+
Description	:	It sets pattern for input value.
input-title
DataType	:	String
Default	:	-
Description	:	It sets title for input field.
auto-update
DataType	:	Boolean
Default	:	true
Description	:	If its true 'lt-prop-value' will be updated on every input with 250ms debounce( In this case you can take current value from inner 'input' tag ) or else it will get updated in blur event.
update-delay
DataType	:	Number
Default	:	250
Description	:	Input value will be updated with 250 ms debounce. If its set to undefined it will be updated immediately after value change.
close-icon
DataType	:	Boolean
Default	:	false
Description	:	If it is true, close icon will be constructed. It will throw on-ip-clear action on clearing input.
callback-delay
DataType	:	Number
Default	:	0
Description	:	Value change callback will be invoked after given delay. Set this to undefined for immediate callback.
aria
DataType	:	Boolean
Default	:	false
Description	:	With this, you can enable the aria property. Not for datetime type.
aria-attributes
DataType	:	Object
Default	:	{}
Description	:	With this, you can set the custom attributes to input/textarea. Not for datetime type.
focus( prop )
DataType	:	Boolean
Default	:	false
Description	:	It will make input focus on its didConnect. Use this instead of lt-prop-autofocus property.
focus-at-end
DataType	:	Boolean
Default	:	false
Description	:	This will place cursor at the end of the text when input is focused through lt-prop-focus.
password-icon
DataType	:	Boolean
Default	:	false
Description	:	This will render a password show / hide icon in password type input.
password-visibility
DataType	:	Boolean
Default	:	false
Description	:	Status of the password icons is updated here.
password-tooltip
DataType	:	object
Default	:	{ show : "Show password", hide : "Hide password" }
Description	:	Tooltip messages to be shown on password icon.
tooltip-config
DataType	:	stringified object
Default	:	'{"position" : "bottom"}'
Description	:	With this, you can enable the tooltip configurations. Refer lyte-tooltip.
aria-label
DataType	:	Object
Default	:	{ modal : "Choose date", button : "Change date" }
Description	:	Given values will be set as labels for calendar pop and icons in data & datetime input.
data-tabindex
DataType	:	number
Default	:	0
Description	:	Given value will be updated as data-tabindex attribute.
Properties - time

All properties should be prefixed with lt-prop . It is for time type input. For more dropdown properties refer lyte-dropdown.

hour-interval
DataType	:	Number
Default	:	1
Description	:	Increment / decrement value for hour on key events.
minute-interval
DataType	:	Number
Default	:	1
Description	:	Increment / decrement value for a minute on key events.
default-time
DataType	:	String
Default	:	current time
Description	:	Use this property instead of lt-prop-value in input type time to provide a default time.
time-format
DataType	:	Number
Default	:	12
Description	:	Time format to be used.
start-time
DataType	:	String
Default	:	default-time
Description	:	Its the lower limit of time.
end-time
DataType	:	String
Default	:	24 hrs from start-time
Description	:	Its the upper limit of time.
dropdown
DataType	:	Boolean
Default	:	false
Description	:	It will construct dropdown for time values.
show-interval
DataType	:	boolean
Default	:	false
Description	:	To show time interval in time dropdown.
wheel( time )
DataType	:	Boolean
Default	:	false
Description	:	It will increase / decrease the time value on wheeling over input.
yield
DataType	:	Boolean
Default	:	false
Description	:	It will allows you to construct your own drop item styles. You can take all values as 'itemValue'.
dropdown-disabled
DataType	:	Boolean
Default	:	false
Description	:	Set this to true, to disable the dropdown.
dropdown-show
DataType	:	Boolean
Default	:	false
Description	:	If set true, dropdown will be rendered as open.
dropdown-callout
DataType	:	Boolean
Default	:	false
Description	:	If set true, dropdown will be opened with callout arrow.
dropdown-freeze
DataType	:	Boolean
Default	:	false
Description	:	If set true, dropdown will be opened with the freeze layer.
dropdown-id
DataType	:	String
Default	:	-
Description	:	Same id will be set for dropdown box associated with lyte-input.
dropdown-class
DataType	:	String
Default	:	
Description	:	Same class will be set for dropdown box associated with lyte-input.
validate-on-blur
DataType	:	Boolean
Default	:	false
Description	:	Input time value will be validated only on blur with start time and end time values provided. It will not be validated on typing.
convert-to-nearest
DataType	:	Boolean
Default	:	false
Description	:	When input value is greater or lesser than start and endTime value then the nearest value will be set as input value.
dropdown-properties
DataType	:	Object
Default	:	{}
Description	:	You can provide any basic lyte-dropdown properties with respect to time and datetime.
common-placeholder( for datetime )
DataType	:	String
Default	:	-
Description	:	To set common placeholder for datetime input. Both the input values should be empty for displaying placeholder content.
header-yield
DataType	:	boolean
Default	:	false
Description	:	It will render a drop-head yield in time dropdown.
converted-time
DataType	:	String
Default	:	-
Description	:	The ltPropDefaultValue of any i18 language will be converted to English and gets stored in this variable. Its a readonly property.
prevent-dropdown-navigation
DataType	:	Boolean
Default	:	false
Description	:	It will prevent dropdown navigation.
wrapper-class
DataType	:	String
Default	:	-
Description	:	It will be added to the wrapper div element over the input.
input-wrapper-class
DataType	:	String
Default	:	-
Description	:	It will be added to lyte-input element. Instead of giving directly to class attribute you can give your value in this and it will not affect other classes added to the input.
time-aria-attributes
DataType	:	Object
Default	:	{}
Description	:	Given values will be set as attributes for time input value.
Properties - Textarea

All properties should be prefixed with lt-prop. It is for input type textarea.

rows
DataType	:	Number
Default	:	-
Description	:	Sets the number of row for textarea.
cols
DataType	:	Number
Default	:	-
Description	:	Sets the number of column for textarea.
text-area-resize
DataType	:	Object
Default	:	{vertical : true, horizontal : true}
Description	:	It defines the textarea resize directions.
Properties - calendar

All properties should be prefixed with lt-prop. It is for input type date. For more properties refer lyte-calendar.

boundary
DataType	:	Object
Default	:	{}
Description	:	Whenever the calendar exceeds the given boundary value, it will be closed.
wheel
DataType	:	boolean
Default	:	false
Description	:	It will increase / decrease the value on wheeling over input.
yield
DataType	:	boolean
Default	:	false
Description	:	With this property, you can yield the footer of the calendar. // refer lyte-calendar
position
DataType	:	string
Default	:	down
Description	:	It defines the position of calendar.
current-date
DataType	:	string
Default	:	-
Description	:	default selected date in input // use this property instead of lt-prop-value in input type date.
calendar-class
DataType	:	string
Default	:	-
Description	:	Same class will be added for calendar div.
bind-to-body
DataType	:	Boolean
Default	:	true
Description	:	If it set to false calendar will be rendered while opening the calendar( first time ).
prevent-selection
DataType	:	Boolean
Default	:	false
Description	:	It won't select text in the calendar input.
prevent-keys
DataType	:	Boolean
Default	:	false
Description	:	It won't allow to type letters. Use this along with ltPropReadonly.
calendar-properties
DataType	:	Object
Default	:	{}
Description	:	You can give any basic lyte-calendar properties in this as a single object.( for date and datetime )
scope
DataType	:	string
Default	:	-
Description	:	Selector of the closest element of input. Calendar will be positioned within scope element ( for date and datetime )
converted-date
DataType	:	String
Default	:	-
Description	:	I18ned ltPropCurrenentDate will be converted to English language and stored in this variable. Its a readonly property
Properties - Number

All properties should be prefixed with lt-prop. It is for input type number

max
DataType	:	Number
Default	:	-
Description	:	It is the maximum range of number for the input field.
min
DataType	:	Number
Default	:	-
Description	:	It is the minimum range of number for the input field. Lyte-input will not do min validation while typing. It will do validation on blur.
step
DataType	:	Number
Default	:	1
Description	:	Incremental / decremental value for input on key events.
Methods

You can provide the methods to lyte-input either via script or HTML. For input type time with dropdown refer lyte-dropdown methods (onShow, onBeforeShow, onHide, onBeforeHide, onScroll)

before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after rendering the component.
on-date-change
Description	:	This method is invoked whenever the date value is changed.
on-time-change
Description	:	This method is invoked whenever the time value changes in the input.
on-value-change
Description	:	This method is invoked whenever value changes in the input // not for input type time and date.
on-calendar-open
Description	:	This method is invoked after opening the calendar.
on-calendar-close
Description	:	This method is invoked after closing the calendar.
on-position-changed
Description	:	This method is called whenever calender/ dropdown( time dropdown) position is changed.
on-focus
Description	:	This method is called whenever input is focused.
on-blur
Description	:	This method is called whenever input is blured.
on-clear
Description	:	This method is called whenever input is cleared via close icon.
on-before-open
Description	:	This method is invoked before opening calendar in input type date and date time
ReturnValue	:	If this method returns false, calendar will not be opened.
on-before-calendar-close
Description	:	This method is called before closing a calendar. It will accept promise.
ReturnValue	:	If this method returns false, calendar will not be closed.
on-resize-start
Description	:	This method is invoked while starting to resize the textarea.
ReturnValue	:	Returning false will not allow to resize.
on-resize-end
Description	:	This method is invoked after releasing the resize handler of the textarea.
Yields

You can render your own content by using yield.

yield ( for time)
Description	:	All the elements given inside the yield template will be rendered instead of default DOM. You can take each data as "itemValue."
yield ( for date)
Name	:	yield ( for date)
Description	:	To add a footer to a component.
timeheader( for datetime and time )
Name	:	timeheader
Description	:	To add a drop header to a time dropdown, use this yield
Functions

You can call this functions from anywhere if lyte-input is rendered.

focus
Description	:	You can call this function for triggering manual focus on input. Use focus function with 100 ms settimeout delay on animations.
blur
Description	:	You can call this function for triggering manual blur on input.
click
Description	:	You can call this function for triggering manual click on input.
select
Description	:	You can call this function for triggering manual select on input.

---

## listbox

### listbox - overview

Dual Listbox

The Listbox is a dual column UI component, where the left column contains all the available datas and the right column contains all the user selected datas in it, which is two separate arrays.

User can select single element and also multiple elements by holding cmd/ctrl or shift keys.

On hovering the element user can see a +/- icon which also can be used to move the datas.

Drag and drop functionality is also available to move the datas.

Dependencies
```html
<!-- CSS files required -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-duallistbox.css"> </link>
<!-- Main component file -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-sortable.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-badge.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
With toolbar

This type of listbox is one with the toolbar in middle of the left and right columns, that has functional buttons that can be used when elements on either side are selected.

The data of dual listbox can have a property named required which is a boolean property, when it has be made true the listbox by default treats the element as a mandatory field and wont allow the user to select or do any futher changes.

```html
<lyte-dual-listbox lt-prop-left-data={{leftPanelData}} lt-prop-right-data={{rightPanelData}} lt-prop-show-toolbar=true lt-prop-associate-parent="uniqueKey">
  <div class="lyteLBLeftWidgets">
    <template is="registerYield" yield-name="leftWidget">
      <div class="wrap">
        <span class="lyteLBMandatory">{{leftWidgetValue.name}}</span>
      </div>
    </template>
    <template is="registerYield" yield-name="rightWidget">
      <div class="wrap">
        <span class="lyteLBMandatory">{{rightWidgetValue.name}}</span>
      </div>
    </template>
  </div>
</lyte-dual-listbox>
```
```javascript
leftPanelData : prop('array' , {
  default : [{
    'name' : 'Surya Kumar Yadav'
  },{
    'name' : 'Shubman Gill',
    required : 'true'
  },{
    'name' : 'Cheteshwar Pujara'
  },{
    'name' : 'Wicket Keepers'
  },{
    'name' : 'Rahul Chahar'
  },{
    'name' : 'Mohammad Siraj'
  },{
    'name' : 'Umesh Yadav'
  },{
    'name' : 'All Rounders'
  },{
    'name' : 'MS Dhoni'
  },{
    'name' : 'Sachin Tendulkar'
  },{
    'name' : 'Sehwag'
  },{
    'name' : 'R Dravid'
  },{
    'name' : 'S Ganguly'
  },{
    'name' : 'Irfan Pathan'
  },{
    'name' : 'Zaheer Khan'
  },{
    'name' : 'Jawagal Srinath'
  },{
    'name' : 'Anil Kumble'
  }]
})
```
```javascript
rightPanelData : prop('array' , {
  default : [
    {
      'name' : 'Shikar Dhawan',
    },{
      'name' : 'Rohit Sharma'
      'required' : 'true'
    },{
      'name' : 'Virat Kohli'
    },{
      'name' : 'WK KL Rahul'
    },{
      'name' : 'Shreyas Iyer'
    },{
      'name' : 'Al Jadeja'
    },{
      'name' : 'Al Hardik Pandiya'
    },{
      'name' : 'Bhuvaneshwar Kumar'
    },{
      'name' : 'Shardul Thakur'
    },{
      'name' : 'Y Chahal'
    },{
      'name' : 'Jasprit Bumrah'
    }
  ]
})
```
Surya Kumar Yadav
Shubman Gill
Cheteshwar Pujara
Rahul Chahar
Mohammad Siraj
Umesh Yadav
MS Dhoni
Sachin Tendulkar
Sehwag
R Dravid
S Ganguly
Irfan Pathan
Zaheer Khan
Jawagal Srinath
Anil Kumble
ar
al
Shikar Dhawan
Rohit Sharma
Virat Kohli
WK KL Rahul
Shreyas Iyer
Al Jadeja
Al Hardik Pandiya
Bhuvaneshwar Kumar
Shardul Thakur
Y Chahal
Jasprit Bumrah
Without toolbar

In this type of listbox the user can disable the toolbar in center, but for moving the data from one side to another side users are suggested to enable either the sortable functionality or shortcut for the listbox component.

```html
<lyte-dual-listbox lt-prop-left-data={{leftPanelData}} lt-prop-right-data={{rightPanelData}} lt-prop-show-toolbar=false lt-prop-sortable=true lt-prop-associate-parent="uniqueKey">
  <div class="lyteLBLeftWidgets">
    <template is="registerYield" yield-name="leftWidget">
      <div class="wrap">
        <span class="lyteLBMandatory">{{leftWidgetValue.name}}</span>
      </div>
    </template>
    <template is="registerYield" yield-name="rightWidget">
      <div class="wrap">
        <span class="lyteLBMandatory">{{rightWidgetValue.name}}</span>
      </div>
    </template>
  </div>
</lyte-dual-listbox>
```
```javascript
leftPanelData : prop('array' , {
  default : [{
    'name' : 'Surya Kumar Yadav'
  },{
    'name' : 'Shubman Gill'
  },{
    'name' : 'Cheteshwar Pujara'
  },{
    'name' : 'Wicket Keepers'
  },{
    'name' : 'Rahul Chahar'
  },{
    'name' : 'Mohammad Siraj'
  },{
    'name' : 'Umesh Yadav'
  },{
    'name' : 'All Rounders'
  },{
    'name' : 'MS Dhoni'
  },{
    'name' : 'Sachin Tendulkar'
  },{
    'name' : 'Sehwag'
  },{
    'name' : 'R Dravid'
  },{
    'name' : 'S Ganguly'
  },{
    'name' : 'Irfan Pathan'
  },{
    'name' : 'Zaheer Khan'
  },{
    'name' : 'Jawagal Srinath'
  },{
    'name' : 'Anil Kumble'
  }]
})
```
```javascript
rightPanelData : prop('array' , {
  default : [
    {
      'name' : 'Shikar Dhawan',
    },{
      'name' : 'Rohit Sharma'
    },{
      'name' : 'Virat Kohli'
    },{
      'name' : 'WK KL Rahul'
    },{
      'name' : 'Shreyas Iyer'
    },{
      'name' : 'Al Jadeja'
    },{
      'name' : 'Al Hardik Pandiya'
    },{
      'name' : 'Bhuvaneshwar Kumar'
    },{
      'name' : 'Shardul Thakur'
    },{
      'name' : 'Y Chahal'
    },{
      'name' : 'Jasprit Bumrah'
    }
  ]
})
```
Surya Kumar Yadav
Shubman Gill
Cheteshwar Pujara
Rahul Chahar
Mohammad Siraj
Umesh Yadav
MS Dhoni
Sachin Tendulkar
Sehwag
R Dravid
S Ganguly
Irfan Pathan
Zaheer Khan
Jawagal Srinath
Anil Kumble
Shikar Dhawan
Rohit Sharma
Virat Kohli
WK KL Rahul
Shreyas Iyer
Al Jadeja
Al Hardik Pandiya
Bhuvaneshwar Kumar
Shardul Thakur
Y Chahal
Jasprit Bumrah

### listbox - api

Properties

All properties should be prefixed with lt-prop.

ltPropLeftData
Description	:	The "lt-prop-left-data" is the attribute used to set data for the listbox's left panel. The structure of this data should be like given below.
Datatype	:	array

The left panel data can have a parent level and only one child level array.

ltPropRightData
Description	:	The "lt-prop-right-data" is the attribute used to set data for the listbox's right panel. The structure of this data should be like given below.
Datatype	:	array

The right panel data should a single level array, it cannot have children level in it.

ltPropSortable
Description	:	The "lt-prop-sortable" is a boolean attribute used to either enable or disable the drag and drop functionality in lyte-dual-listbox.
Datatype	:	boolean
ltPropShortcut
Description	:	The "lt-prop-shortcut" is a boolean attribute used to either enable or disable the shortcut using keyboard functionality in lyte-dual-listbox.
Datatype	:	boolean
ltPropShowToolbar
Description	:	The "lt-prop-show-toolbar" is a boolean attribute used to either enable or disable the toolbar column in lyte-dual-listbox.
Datatype	:	boolean
ltPropMaxCount
Description	:	The "lt-prop-max-count" attribute is used for fixing the maximum number of fields to be allowed in right panel of the dual listbox.
Datatype	:	number
ltPropDoubleClick
Description	:	The "lt-prop-double-click" is a boolean attribute that when set false the add or remove operation on double clicking on the field will be stopped.
Datatype	:	boolean
ltPropNoResultMessage
Description	:	The "lt-prop-no-result-message" is a property which takes a string value that will show the message to be displayed when no items is present during search.
Datatype	:	string
ltPropMandateKey
Description	:	The "lt-prop-mandate-key" is the required or the mandate property's key which has string datatype based on which the list element is treated as a mandatory or a required item.
Datatype	:	string
ltPropMinimumRequiredCount
Description	:	The "lt-prop-minimum-required-count" takes a number input and restricts the given number of required elements from moving from right to left if the number of required elements is more than the given count then the required elements will be treated as a normal element that can be moved to left from right.
Datatype	:	number
ltPropIgnoreSorting
Description	:	The "lt-prop-ignore-sorting" ignores the element from sorting. With the provided class, you can add the css properties.
Datatype	:	string
ltPropDisplayKey
Description	:	The "lt-prop-display-key" is used to display the given key of an object in non-yielded listbox
Datatype	:	string
ltPropHasPinOption
Description	:	The "lt-prop-pin-option"only on setting this property as true, ltpropPinnedData property works.
Datatype	:	boolean
ltPropPinnedData
Description	:	The "lt-prop-pinned-data" allows you to pin the data so that it gets listed on the top of the selected column
Datatype	:	array
ltPropShowIcon
Description	:	With "lt-prop-show-icon" you can show/hide the add/remove icons.
Datatype	:	boolean
ltPropToolbarItems ltPropSearch
Description	:	With "lt-prop-search" you can show/hide the search bar.
Datatype	:	boolean
ltPropKeepOriginal
Description	:	On setting true and while dragging, "lt-prop-keep-original" clones the dragged item.
Datatype	:	boolean
ltPropRestrictMandatoryElement
Description	:	On setting true, with "lt-prop-restrict-mandatory-element" the required item gets restricted from dragging and dropping.
Datatype	:	boolean
ltPropIgnoreSorting
Description	:	The "lt-prop-ignore-sorting" ignores the element from sorting. With the provided class, you can add the css properties.
Datatype	:	string
ltPropTooltipMessage
Description	:	With "lt-prop-tooltip-message" displays the tooltip message on hovering the items while reaching the max count for dragging.
Datatype	:	string
ltPropAllowMandateSortable
Description	:	With "lt-prop-allow-mandate-sortable" allows the sorting of the mandate items in the right panel.
Datatype	:	boolean
Methods

The following are the methods of listbox.

onBeforeDrop
Description	:	The "on-before-drop" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas before dropping it on the other side.
Function Name	:	on-before-drop
onDrop
Description	:	The "on-drop" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas after dropping it on the other side.
Function Name	:	on-drop
onBeforeRight
Description	:	The "on-before-right" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas before moving it to the right side using the toolbar buttons.
Function Name	:	on-before-right
onMoveRight
Description	:	The "on-move-right" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas after moving it to the right side using the toolbar buttons.
Function Name	:	on-move-right
onBeforeLeft
Description	:	The "on-before-left" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas before moving it to the left side using the toolbar buttons.
Function Name	:	on-before-left
onMoveLeft
Description	:	The "on-move-left" is the callback function provided by the component to the user. Using this callback function the user can make changes on the selected datas after moving it to the left side using the toolbar buttons.
Function Name	:	on-move-left
onDeleteElement
Description	:	The "on-delete-element" is the callback function provided by the component to the user which gets be called when a selected element(s) is deleted.
Function Name	:	on-delete-element

---

## mentionsinput

### mentionsinput - overview

MentionsInput

A plugin that let's you mention people in a textarea like you do on Facebook or Twitter. It pops-up a dropdown list containing suggestions while you start typing some alphabet followed by an ' @ ' in the textarea.
It can be used with both html textarea as well as lyte-input textarea.
The objects in the array provided as data to the plugin on calling onDataRequest should have the following structure :

```javascript
{
    'id' : 1 ,
    'name' : 'Samrat' ,
    'avatar' : '../images/someImage.jpg' ,
    'type' : 'contact'
}
```

"avatar" property is a URL used for image avatars when "avatars"-option is enabled.
"id" and the key name provided in searchBy property are the mandatory properties that should be present in the objects. For example, the searchBy property specifies "name" as the default value. Hence users are expected to have "id" and "name" properties in their objects. While filtering the data returned from onDataRequest method, their "name" property values will be checked against the query(user given input).

To destroy the mentions-input behaviour of the textarea, call the mentionsInput method with "destroy" as the arguement passed to the method.

eg:  

```javascript
$L("#selector").mentionsInput( "destory" );
OR
$L(".selector").mentionsInput( "destory" );
```
Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-mentionsinput.css"> </link>

<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-mentionsInput.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>

          ---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-mentionsInput.js"
import $L from "@zoho/lyte-dom";
```
Basic example

In this example, data is passed as an array of objects. The objects matching the query will be shown in the list.

```html
<lyte-input id = "selector1" lt-prop-placeholder = "Try to mention by typing @l" lt-prop-direction = 'vertical' lt-prop-type = "textarea"> </lyte-input>
<textarea class = "selector2" placeholder = "Try to mention by typing @l"> </textarea>
```
```javascript
$L('#selector1').mentionsInput({
    onDataRequest : function( query ){
        // return some data
    }
});
$L ('.selector2').mentionsInput({
    onDataRequest : function( query ){
        // return some data
    }
});
```
onDataRequest

This method is used by the users to return the data that will be used to construct the dropdown list. This list will be having the users whose property value mentioned by searchBy attribute matches the query. The query is passed to this method as an arguement. This data can be returned in 2 ways -

as plain data i.e., array of objects
as promise object, which returns array of objects on being resolved .


As Plain Data

A simple array of objects is returned as data. This data is then filtered based on the query and the dropdown list is constructed which shows the users.

```html
<lyte-input id = "selector1" lt-prop-placeholder = "Try to mention by typing @l" lt-prop-direction = 'vertical' lt-prop-type = "textarea" > </lyte-input>
```
```javascript
$L('#selector1').mentionsInput({
    onDataRequest : function( query ){
        var data = [
            { 'id' : 1 ,'name' : 'Kiara' , 'avatar' : '/images/female_img.png' , 'type' : 'contact' } ,
            { 'id' : 2 ,'name' : 'Kabir' , 'avatar' : '/images/male_img.png' , 'type' : 'contact' } ,
            { 'id' : 3 ,'name' : 'Karan' , 'avatar' : '/images/male_img.png' , 'type' : 'contact' } ,
            { 'id' : 4 ,'name' : 'Leo' , 'avatar' : '/images/male_img.png' , 'type' : 'contact' } ,
            { 'id' : 5 ,'name' : 'Simar' , 'avatar' : '/images/female_img.png' , 'type' : 'contact' } ,
            { 'id' : 6 ,'name' : 'Rizwan' , 'avatar' : '/images/male_img.png' , 'type' : 'contact' } ,
            { 'id' : 7 ,'name' : 'Suzan@45' , 'avatar' : '/images/female_img.png' , 'type' : 'contact' } ] ;

        return data ;
    }
});
```
As Promise object

A promise object is returned as data. This object is then resolved and the dropdown list of the users id constructed from the data received as response. In this case the data is not filtered as it is expected that the user will provide the filtered data in response.
If you are going to do any xhttp request then wrap that request inside a promise object and retun the object from onDataRequest method.

```html
<lyte-input class = "selector1" lt-prop-placeholder = "Try to mention by typing @l" lt-prop-direction = 'vertical' lt-prop-type = "textarea" > </lyte-input>
```
```javascript
$L('.selector1').mentionsInput({
    onDataRequest : function( query ){
        var data = new Promise(function( resolve , reject ){
            // xhttp request to be made from here
        });
        return data ;
    }
});
```

---

## multidropdown

### multidropdown - overview

MultiDropdown

MultiDropdown, is UI component, is used to select multiple values from a list of values.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-multi-dropdown.css"></link>

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-text.css"></link>

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-hovercard.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Default Multidropdown

A default multidropdown is rendered below.

MultiDropdown is rendered with an array where the data could be either array of objects or optgroups provided to lt-prop-data and keys must be provided in lt-prop-user-value and lt-prop-system-value

```html
<lyte-multi-dropdown lt-prop-data="{{dropData}}" lt-prop-user-value="name" lt-prop-system-value="value"  >
</lyte-multi-dropdown >
```

You can pass the following data formats to the dropdown.

```javascript
[ {
    'name': 'Tamilnadu',
    'value': 'TN'
}, {
    'name': 'Kerala',
    'value': 'KL'
} ]
```
```javascript
[ {
    'South': [ {
        'name': 'Tamilnadu',
        'value': 'TN'
    }, {
        'name': 'Kerala',
        'value': 'KL'
    }, {
        'name': 'Karnataka',
        'value': 'KA'
    } ]
}, {
    'North': [ {
        'name': 'Delhi',
        'value': 'DL'
    }, {
        'name': 'Punjab',
        'value': 'PB'
    }, {
        'name': 'UttarPradesh',
        'value': 'UP'
    } ]
} ]
```
Array Of Objects:

Optgroup:



On selecting multiple elements from the the dropdown, the text gets ellapsed in the display region. You can also view all the selected item as a hovercard appers with the selected items on clicking the display region.

In the second example,the value of show-count property is set to true which shows the count of selected values. And on hovering it, you can view those selected items.

Checkbox dropdown

Checkbox can be rendered in the options by providing lt-prop-type as checkbox.

```html
<lyte-multi-dropdown lt-prop-data="{{dropData}}" lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-type="checkbox" >
</lyte-multi-dropdown >
```
Yielded dropdown

The lyte-drop-button can be yielded through HTML, but yielding the lyte-drop-button also requires the user to place the textContent of the selected content inside the lyte-drop-button and removing the contents. Also make sure to provide the lt-prop-yield value as true while using the yield.

```html
<lyte-multi-dropdown lt-prop-data="{{dropData}}" lt-prop-user-value="name" lt-prop-system-value="value"  lt-prop-yield="true" lt-prop-selected="{{selData}}" on-add="{{method("add")}}" on-remove="{{method("remove")}}" >
    <template is="registerYield" yield-name="yield">
        <lyte-drop-button >
            <%selectedList.forEach(function(item,index){%>
                <span data-value={{item}}>
                    {{item}}
                </span>
            <%})%>
        </lyte-drop-button>
    </template>
</lyte-multi-dropdown >
```
```javascript
data(){
          'selData': prop('array',{ "default":[{'name':'one','value':'on'},{'name':'two','value':'tw'}]}),
          'selectedList': prop('array',{'default':['one','two']})
  },
  static methods() {
    return{
      remove: function(event,curr,ltSelected,comp,method,item){
          for(var i=0;i < this.getData('dropData1').length;i++){
              if(this.getData("dropData1")[i].value==curr){
                  var valueToRemove=this.getData('dropData1')[i].name;
                  break;
              }
          }
          arrayUtils( this.getData( 'selectedList' ), 'removeObjects', valueToRemove);
      },
      add: function(event,curr,ltSelected,comp,method,item){
          for(var i=0;i < this.getData('dropData1').length;i++){
              if(this.getData('dropData1')[i].value==curr){
                  var valueToAdd=this.getData('dropData1')[i].name;
                  break;
              }
          }
          arrayUtils(this.getData('selectedList'),'push',valueToAdd);
      }
  }
}
```

In the above example, the values provided in lt-prop-selected are selected by default in the multi-dropdown, but also user should make sure to render these default values in button to avoid conflict while selecting those values. These values also should have same keys as provided in lt-prop-user-value and lt-prop-system-value
The selData array is provided to lt-prop-selected and selectedList array is used in yield to render the values in lyte-drop-button.

The lyte-dropbox can also be yielded as example below. To yield lyte-dropbox make sure to provide lt-prop-data-yield value to true. Here, the text content inside the lyte-drop-item can only be yielded.

To yield the dropbox, ltPropData should also be provided by the user.

```html
<lyte-multi-dropdown lt-prop-data-yield="true"  lt-prop-data="{{dropData}}" lt-prop-type="checkbox" lt-prop-user-value="name" lt-prop-system-value="value"   >
    <template is="registerYield" yield-name="lytedropboxyield">
    <% if( dropItem.name == "one" ) { %>
        {{dropItem.name}}
    <% } %>

    <% if( dropItem.name == "two" ) { %>
        {{dropItem.name}}
    <% } %>

    <% if( dropItem.name == "three" ) { %>
        {{dropItem.name}}
    <% } %>
    </template>
</lyte-multi-dropdown >
```

In the above example, 'dropItem' is given to user from the component and 'name' property is lt-prop-user-value set by the user.

---

## multislider

### multislider - overview

Multi slider

Multi slider from the family of UI component, is used to select one or more ranges between the given minimum and maximum values.

You can provide values as numbers or Array of strings

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-slider.css"> </link>
```
Anatomy

The anatomy of a multi slider is as shown below.

Default multi slider

This is a default multi slider. You need to provide max value. It renders in horizontal direction.

```html
<lyte-multislider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-color = '[ "red", "green", "yellow" ]' lt-prop-scale-interval = 10></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-handler = "lyteSquare" lt-prop-scale-interval = 10 lt-prop-direction = "lyteVertical" lt-prop-height = "300px" lt-prop-color = '[ "red", "green", "yellow" ]'></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-scale-interval = 10 lt-prop-handler = "lyteCircle" lt-prop-color = '[ "red", "green", "yellow" ]'></lyte-multislider>
```
Discrete multi slider

Multislider can be discrete type. It allows to select particular values.

```html
<lyte-multislider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-color = '[ "red", "green", "yellow" ]' lt-prop-discrete = 10></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-handler = "lyteSquare" lt-prop-discrete = 10 lt-prop-direction = "lyteVertical" lt-prop-height = "300px" lt-prop-color = '[ "red", "green", "yellow" ]'></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '[ { "value" : 30, "min" : 20, "max" : 40 }, { "value" : 50, "min" : 40, "max" : 60 }, { "value" : 80, "min" : 70} ]' lt-prop-discrete = 10 lt-prop-handler = "lyteCircle" lt-prop-color = '[ "red", "green", "yellow" ]'></lyte-multislider>
```
Multislider with custom options

Multi slider can be rendered with the user given scale values

```html
<lyte-multislider lt-prop-width='600px' lt-prop-content = '[ "small", "medium", "large", "extra-large", "XXL" ]' lt-prop-value = '[ { "value" : "medium", "max" : "large" }, { "value" : "extra-large", "min" : "large", "max" : "XXL" } ]' lt-prop-color = '[ "red", "green" ]'></lyte-multislider>
```
```html
<lyte-multislider lt-prop-handler = "lyteSquare" lt-prop-direction = "lyteVertical" lt-prop-height = "300px" lt-prop-content = '[ "small", "medium", "large", "extra-large", "XXL" ]' lt-prop-value = '[ { "value" : "medium", "max" : "large" }, { "value" : "extra-large", "min" : "large", "max" : "XXL" } ]' lt-prop-color = '[ "red", "green" ]'></lyte-multislider>
```
```html
<lyte-multislider lt-prop-width='600px' lt-prop-handler = "lyteCircle" lt-prop-content = '[ "small", "medium", "large", "extra-large", "XXL" ]' lt-prop-value = '[ { "value" : "medium", "max" : "large" }, { "value" : "extra-large", "min" : "large", "max" : "XXL" } ]' lt-prop-color = '[ "red", "green" ]'></lyte-multislider>
```
Multislider with mindiff

Multi slider maintains minimum difference between the handlers if minDiff is provided. Default min diff is 0. In this case, handlers can be moved upto the other adjacent handlers. If it is set to undefined handlers can be moved throughout the slider.

```html
<lyte-multislider lt-prop-width='600px' lt-prop-content = '[ "small", "medium", "large", "extra-large", "XXL" ]' lt-prop-value = '[ { "value" : "medium", "class" : "fill1" }, { "value" : "extra-large", "class" : "fill2"} ]' lt-prop-color = '[ "red", "green" ]' lt-prop-min-diff = 2></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-value = '[ { "value" : 30, "class" : "hand1"}, { "value" : 50, "class" : "hand2" }, { "value" : 80, "class" : "hand3"} ]' lt-prop-width = "600px" lt-prop-color = '[ "red", "green", "yellow" ]' lt-prop-min-diff = {{someVariableWithUndefinedValue}}></lyte-multislider>
```
```html
<lyte-multislider lt-prop-max = '100' lt-prop-value = '[ { "value" : 30, "class" : "hand1"}, { "value" : 50, "class" : "hand2" }, { "value" : 80, "class" : "hand3"} ]' lt-prop-width = "600px" lt-prop-color = '[ "red", "green", "yellow" ]' lt-prop-min-diff = 5></lyte-multislider>
```
Yielded multislider

You can construct your own scale values by providing yield.

```html
<lyte-multislider lt-prop-yield = true lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '[ { "value" : 30, "class" : "class1" }, { "value" : 50, "class" : "class2"}, { "value" : 80, "class" : "class3" } ]' lt-prop-color = '[ "red", "green", "yellow" ]'>
  <template is = "registerYield" yield-name = "lyteMultiSlider">
      <div class="lyteScaleOption">
        <span class="lyteScaleLine" style="left: 0">
          <span> </span>
          <span class="lyteScalLable"> 0 </span>
        </span>
      <span class="lyteScaleLine" style="left: 50%">
        <span> </span>
        <span class="lyteScalLable"> 50 </span>
      </span>
      <span class="lyteScaleLine" style="left: 100%">
        <span> </span>
        <span class="lyteScalLable"> 100 </span>
      </span>
    </div>
  </template>
</lyte-multislider>
```

### multislider - api

Properties

All properties should be prefixed with lt-prop.

min
DataType	:	Number
Default	:	0
Description	:	It is the lower limit for multislider. If ltPropContent is provided the first value will be min value.
max
DataType	:	Number
Default	:	-
Description	:	It is the upper limit for multislider. If ltPropContent is provided the last value will be max value.
content
DataType	:	Array of strings
Default	:	-
Description	:	To render custom scale values use lt-prop-content. Slider will be discrete type for given ltPropContent.
value
DataType	:	Array of objects
Default	:	-
Description	:	It contains the value, min value, max value, id and class of range divs for each handlers.
direction
DataType	:	String
Default	:	lyteHorizontal
Description	:	With this property you can set the direction of the slider.
handler
DataType	:	String
Default	:	lyteArrow
Description	:	Type of handler to be used for the multislider.
width
DataType	:	String
Default	:	200px for horizontal and 30px for vertical.
Description	:	Width of the slider.
height
DataType	:	String
Default	:	30px for horizontal and 200px for vertical
Description	:	Height of the slider.
fill-color
DataType	:	String
Default	:	#5ba1e5
Description	:	default background color of all range elements. The end range will always use lt-prop-fill-color.
color
DataType	:	Array
Default	:	[ ]
Description	:	background color for all range elements except the end element.
discrete
DataType	:	Number
Default	:	for ltPropContent it will be a span. For other types it will be undefined
Description	:	It will allows to select the values in Arithmetic progression of min.
yield
DataType	:	Boolean
Default	:	false
Description	:	To construct custom scale values in the slider.
scale-interval
DataType	:	Number
Default	:	10% of difference between max and min or ltPropDiscrete value. For lt-prop-content it will be divided into equal spaces.
Description	:	Interval between successive scales.
scale-preprend
DataType	:	String
Default	:	' '
Description	:	Given string gets preprended to the constructed scale value.
scale-append
DataType	:	String
Default	:	' '
Description	:	Given string gets appended to the constructed scale value.
digits
DataType	:	Number
Default	:	2
Description	:	It will give the values with given precision.
min-diff
DataType	:	Number
Default	:	0
Description	:	It will maintain given value difference between handlers. If it is set to undefined a handler can move all over the slider.
tooltip
DataType	:	Boolean
Default	:	false
Description	:	It will show tooltip while hovering each handler.
tooltip-style
DataType	:	String
Default	:	' '
Description	:	It will set inline style for tooltip.
tooltip-config
DataType	:	objects
Default	:	{ margin : 5, position : "top" }
Description	:	It will set the configurations for the tooltip. Refer lyte-tooltip.
aria
DataType	:	Boolean
Default	:	false
Description	:	With this you can set the aria attributes.
tab-index
DataType	:	number
Default	:	0
Description	:	This value will be set as slider tabIndex.
rerender
DataType	:	Boolean
Default	:	false
Description	:	It will refersh the multislider if it is set to true.
css-direction
DataType	:	string
Default	:	ltr
Description	:	The slider will be rendered in the given direction even entire document is in other direction.
promise-handling
DataType	:	Boolean
Default	:	false
Description	:	This will wait for the promise while selecting the handler to move.
disabled
DataType	:	Boolean
Default	:	false
Description	:	This will disable the slider.
data-tabindex
DataType	:	String
Default	:	0
Description	:	This will be set as data-tabindex attribute.
Methods

You can provide the methods to lyte-slider either via script or HTML.

on-select
Description	:	This method will be triggered whenever the slider value is selected via click, key events, end of mousemove.
on-change
Description	:	This method will be trigger whenever the slider value is changed.
on-before-select
Description	:	This method will be triggered before the selecting the slider handler.
ReturnValue	:	If this method returns false handler will not be selected for move.
before-render
Description	:	This method will be invoked before rendering the slider.
after-render
Description	:	This method will be invoked after rendering the slider.
Functions

You can call this function anywhere after lyte-multislider is rendered.

reRender
Description	:	To reset slider values.
Yields

You can render your own drop items by using yield

yield( description )
Description	:	All the elements given inside the yield template will be rendered as given instead of default slider scales.

---

## number

### number - overview

Number

Lyte-number is a component written with input type text in order to overcome the issues of number type input and to provide uniform behaviour across the browsers.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-number.css"> </link>
```
Default umber

Default lyte-number is shown below

```html
<lyte-number> </lyte-number>
```
Min max validation number

By default lyte-number only does min validation( if provided ) on blur of the input. You can use ltPropValidateOnInput for instant validation. If ltPropValidateOnEmpty is set to false it will not check for max, min value on empty value.

```html
<lyte-number lt-prop-min = 5 lt-prop-max = 11> </lyte-number>
```
Max length checking

Max length checking can be done using lt-prop-maxlength. Default number will not consider .( dot ) for maxLength. 1.1111 will be considered as string having the length of 5.
It will take its original value other than its string for max length validation. 1e4 will be taken as 10000

```html
<lyte-number lt-prop-maxlength = 5> </lyte-number>
```
Ignore symbols

If the ignore symbols is enabled using the property lt-prop-ignore-symbols as true, .( dot ) and e/E will be taken into considered for max length validation.

```html
<lyte-number lt-prop-maxlength = 5 lt-prop-ignore-symbols = true> </lyte-number>
```
Validation

By default lyte-number corrects the wrong input ( min, max, maxlength ) after they have been entered or in input blur.

With input validation property you can show error messages when wrong value is entered in the number field. This validation can be configured in input,blur or custom events.

For Custom validation you need to make lt-prop-trigger-validation as true for enabling validation. Error messages can be configured for different cases.

Currently min-max, maxlength, mandatory and pattern can be checked with input value.

Refer the following example. It will validate input on blur event. This won't change the value in input field

```html
<lyte-number lt-prop-placeholder = "Enter value" lt-prop-maxlength = 4 lt-prop-min = 0 lt-prop-validate-on-empty = false lt-prop-validation = "blur" lt-prop-error-message = '{"minmax":"Value should be in between 0 to 50000","maxlength":"Length should not exceed 4","mandatory":"Value cannot be empty","pattern":"Value should match the pattern /^[1-5]+$/"}' lt-prop-max = 50000 lt-prop-mandatory = true lt-prop-pattern = "^[1-5]+$"></lyte-number>
```
Controls

This will render the increment and decrement handlers in the input box by setting lt-prop-control as true.

```html
<lyte-number lt-prop-controls = true lt-prop-min = 0 lt-prop-max = 10></lyte-number>
```

### number - api

Properties

All properties should be prefixed with lt-prop.

value
DataType	:	String
Default	:	
Description	:	Used to provide the value of the input.
name
DataType	:	String
Default	:	undefined
Description	:	Sets the name of the input field.
class
DataType	:	String
Default	:	undefined
Description	:	Sets the class for the input field.
id
DataType	:	String
Default	:	undefined
Description	:	Sets the id for the input field.
placeholder
DataType	:	String
Default	:	
Description	:	Sets placeholder for the input field.
maxlength
DataType	:	number
Default	:	undefined
Description	:	Sets the max length for the input.
ignore-symbols
DataType	:	Boolean
Default	:	false
Description	:	If it sets to true, characters like .( dot ) and 'e' are taken as a part of the value. Else Value will be converted into numbers for validation( Ex. 10e3 will be converted as 10000 - length of 5 )
step
DataType	:	number
Default	:	1
Description	:	It will be the incremental / decremental value on keydown and wheel event.
inverse
DataType	:	Boolean
Default	:	false
Description	:	If its true increment and decrement behaviour will be changed to decrement and increment in wheel and keydown events.
wheel
DataType	:	Boolean
Default	:	true
Description	:	It will prevent increment / decrement of the value in the wheel event.
max
DataType	:	number
Default	:	undefined
Description	:	It sets the maximum limit for input value.
min
DataType	:	number
Default	:	undefined
Description	:	It sets the minimum limit for input value
autofocus
DataType	:	Boolean
Default	:	false
Description	:	It will automatically focus the input when it is rendered.
disabled
DataType	:	Boolean
Default	:	false
Description	:	It will disable the input. lyteNumberDisabled class will be added to lyte-number
readonly
DataType	:	Boolean
Default	:	false
Description	:	It will make the input as readonly. lyteNumberReadonly class will be added to lyte-number.
style
DataType	:	String
Default	:	
Description	:	It will set inline style to input.
input-title
DataType	:	String
Default	:	-
Description	:	It will set title attribute to input.
update-delay
DataType	:	number
Default	:	250
Description	:	Input value will be updated to lt-prop-value within the given delay.
pattern
DataType	:	String
Default	:	.+
Description	:	It will be set as pattern attribute of input.
label
DataType	:	String
Default	:	
Description	:	Label will be constructed with given string.
autocomplete
DataType	:	String
Default	:	off
Description	:	It will enable/disable browser's autocomplete.
appearance
DataType	:	String
Default	:	flat
Description	:	It will change the appearance of the input.
direction
DataType	:	String
Default	:	vertical
Description	:	It will change the direction of the input.
validate-on-input
DataType	:	Boolean
Default	:	false
Description	:	If set to true, the value will be checked for min value on every input event.
auto-update
DataType	:	Boolean
Default	:	true
Description	:	On enabling it, the value will be updated with the given input delay.
fire-on-init
DataType	:	Boolean
Default	:	false
Description	:	If the value is changed on init, it will trigger the value change callback on init.
validate-on-empty
DataType	:	Boolean
Default	:	true
Description	:	Min and max validation will be checked on empty value.
decimal
DataType	:	String
Default	:	.
Description	:	Given string will be used for decimal place separation.
increment
DataType	:	Boolean
Default	:	true
Description	:	On setting it to false, value increment/decrement on up down/key will be prevented.
remove-at-cursor
DataType	:	Boolean
Default	:	false
Description	:	This will remove excess characters at cursor position instead of last character when length exceeds the given max length.
aria
DataType	:	Boolean
Default	:	false
Description	:	This will add aria attributes to the input.
aria-attributes
DataType	:	Object
Default	:	{}
Description	:	Given attributes will be added to the input.
restrict
DataType	:	String
Default	:	
Description	:	Given value will be constructed as a string. Matched values will not be allowed in inputs.
input-wrapper-class
DataType	:	String
Default	:	
Description	:	Given class will be added to lyte-number element.
tabindex
DataType	:	number
Default	:	0
Description	:	It enables the tab index to be set to the input element.
validation
DataType	:	String
Default	:	-
Description	:	lyte-number will validate input values in the given event.
mandatory
DataType	:	Boolean
Default	:	false
Description	:	It will be considered as a mandatory input while validating the input value
trigger-validation
DataType	:	Boolean
Default	:	false
Description	:	It will trigger the input validation manually when it is being set to true.
error-message
DataType	:	Object
Default	:	{}
Description	:	Enables error message to be displayed on every case.
default-error-message
DataType	:	String
Default	:	{}
Description	:	Default message to be displayed on all the cases.
error
DataType	:	Boolean
Default	:	false
Description	:	Readonly property to indicate the error status of the input.
clear-validation
DataType	:	Boolean
Default	:	false
Description	:	It will remove the current validation state when its being set to true.
data-tabindex
DataType	:	String
Default	:	0
Description	:	It will be set as data-tabindex attribute to the input.
controls
DataType	:	Boolean
Default	:	false
Description	:	It will render increment & decrement handlers.
Cyclic
DataType	:	Boolean
Default	:	false
Description	:	With this property, the value after reaching the max-value, again goes back to the min value and gets incremented. Vice versa is also possible.
Units
DataType	:	string
Default	:	undefined
Description	:	With this property, the units can be set.
Methods

You can provide the methods to lyte-number either via script or HTML

on-value-change
Description	:	This method is triggered on every value change.
before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after the component gets rendered.
on-focus
Description	:	This method is called whenever the input gets its focus.
on-blur
Description	:	This method is called whenever the input is blured.
on-before-paste
Description	:	This method is called before paste.
ReturnValue	:	ReturnValue will be set to input after min, max validation. If it returns false paste wont happen.
on-before-max-min-validation
Description	:	This method is called before every min max validation.
ReturnValue	:	ReturnValue will be set to the input.
on-before-value-update
Description	:	This method is invoked before modifying the value in the input.
ReturnValue	:	Returned string value will be set to the input.
on-error
Description	:	This method is invoked on input validation error.
on-valid-input
Description	:	This method is invoked on successfull input validation.
Functions

You can call these function anywhere after lyte-search rendered

blur
Description	:	You can call this function for triggering manual blur on input.
click
Description	:	You can call this function for triggering manual click on the input.
select
Description	:	You can call this function for triggering manual select on input.
focus
Description	:	You can call this function for triggering manual focus on the input.

---

## radiobutton

### radiobutton - overview

Radio Button

A radiobutton, from the family of UI component allows a user to select an exclusive value from a list of values.

Dependencies
```javascript
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-radiobutton.css"> </link>
```
Default Radio Button

To render a default radiobutton either set the value of lt-prop-type to default or don't set it at all. Similar to input[type='radio'] needing a name attribute, lyte-radiobuttons will need a lt-prop-name attribute to group similar radios together. Apart from this, each radio-button needs a unique lt-prop-value. You can set a label for the lyte-radiobutton using the lt-prop-label attribute. Pass the lt-prop-checked attribute to the radiobutton that needs to be checked at the start. Only one radiobutton can be checked at a time.

```html
<lyte-radiobutton lt-prop-checked="true" lt-prop-name="default" lt-prop-value="1" lt-prop-label="$1000 - $2000"></lyte-radiobutton>
<lyte-radiobutton lt-prop-name="default" lt-prop-value="2" lt-prop-label="$2000 - $5000"></lyte-radiobutton>
<lyte-radiobutton lt-prop-name="default" lt-prop-value="3" lt-prop-label="Above $5000"></lyte-radiobutton>
```
Primary Radio Button
You can render a primary radio button by setting the lt-prop-type attribute to primary.
```html
<lyte-radiobutton lt-prop-type="primary" lt-prop-checked="true" lt-prop-name="primary" lt-prop-value="1" lt-prop-label="IOS"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="primary" lt-prop-name="primary" lt-prop-value="2" lt-prop-label="Android"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="primary" lt-prop-name="primary" lt-prop-value="3" lt-prop-label="Windows"></lyte-radiobutton>
```
Secondary Radio Button
You can render a secondary radio button by setting the lt-prop-type attribute to secondary.
```html
<lyte-radiobutton lt-prop-type="secondary" lt-prop-checked="true" lt-prop-name="secondary" lt-prop-value="1" lt-prop-label="Low"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="secondary" lt-prop-name="secondary" lt-prop-value="2" lt-prop-label="Medium"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="secondary" lt-prop-name="secondary" lt-prop-value="3" lt-prop-label="High></lyte-radiobutton>
```
Switches
You can also render a radiobutton as a switch. Set the lt-prop-type attribute as switch.
```html
<lyte-radiobutton lt-prop-type="switch" lt-prop-checked="true" lt-prop-name="switch" lt-prop-value="1" lt-prop-label="Upper Channel"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="switch" lt-prop-name="switch" lt-prop-value="2" lt-prop-label="Middle Channel"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="switch" lt-prop-name="switch" lt-prop-value="3" lt-prop-label="Lower Channel"></lyte-radiobutton>
```
Sliders
You can also render a radiobutton as a slider. Set the lt-prop-type attribute as slider.
```html
<lyte-radiobutton lt-prop-type="slider" lt-prop-checked="true" lt-prop-name="slider" lt-prop-value="1" lt-prop-label="2x Slowdown"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="slider" lt-prop-name="slider" lt-prop-value="2" lt-prop-label="4x Slowdown"></lyte-radiobutton>
<lyte-radiobutton lt-prop-type="slider" lt-prop-name="slider" lt-prop-value="3" lt-prop-label="6x Slowdown"></lyte-radiobutton>
```
Native Events Of Radiobutton

The lyte-radiobutton tag supports click, focus and blur functions. You can simply querySelect a lyte-radiobutton from the DOM and call the necessary function. The click event changes the state of the radiobutton but only when it is unchecked. It does not change the state when it is checked. Whereas the focus event can be used to focus it. After it has been focused, you can press spacebar or enter to change the state of the radiobutton. This works similar to the click event where the state of the radiobutton is changed only when it is unchecked. Similarly, the blur event is used to remove focus from the radiobutton.

```html
document.querySelector( 'lyte-radiobutton' ).click();
```
```html
document.querySelector( 'lyte-radiobutton' ).focus();
```
```html
document.querySelector( 'lyte-radiobutton' ).blur();
```
Foot Notes

The lyte-radiobutton provides a number of callbacks for you to work with when the state of a radiobutton changes. The callbacks are on-changed, on-before-checked, on-before-unchecked, on-checked, and on-unchecked. Initially when none of the radiobuttons are checked the order in which the callbacks are fired when the first radiobutton is checked is on-before-checked > on-checked > on-changed . When a radiobutton is already checked and a different radiobutton in the same group is checked, then the callback fire order is on-before-unchecked > on-before-checked > on-unchecked > on-checked > on-changed . When a radiobutton is checked on render, none of the callbacks are called by default. If you want to fire the callbacks at the start, then set lt-prop-fire-on-init to true .

Developers should note that they must pass the callbacks to all the radiobuttons. The example below demonstrates a radiobutton with callbacks passed in.

```html
<lyte-radiobutton on-changed={{method("changed")}} lt-prop-checked="true" lt-prop-name="callback" lt-prop-value="1" lt-prop-label="Option 1"></lyte-radiobutton>
<lyte-radiobutton on-changed={{method("changed")}} lt-prop-name="callback" lt-prop-value="2" lt-prop-label="Option 2"></lyte-radiobutton>
```
```javascript
static methods() {
    return{
       changed: function() {
        // do stuff
       }
    }
}
```

You could return false from either the on-before-checked or on-before-unchecked callback to prevent the radio button from getting checked or unchecked.

The return false from one of the before callbacks feature is also available.

```html
<lyte-radiobutton on-before-checked={{method("returnFalse")}} lt-prop-checked="true" lt-prop-name="callback" lt-prop-value="1" lt-prop-label="Option 1"></lyte-radiobutton>
<lyte-radiobutton on-before-checked={{method("returnFalse")}} lt-prop-name="callback" lt-prop-value="2" lt-prop-label="Option 2"></lyte-radiobutton>
```
```javascript
static methods() {
    return{
        returnFalse: function() {
        // do stuff
        return false;
       }
    }
}
```

You can also change the state of the radiobutton through script by setting the lt-prop-checked attribute. When no radiobuttons are checked and you set lt-prop-checked to one of the radiobuttons then on-before-checked , on-checked and on-changed are fired. When a radiobutton is already checked and you check another radiobutton in the same group through script, then on-before-unchecked , on-before-checked , on-unchecked , on-checked and on-changed are fired. When you uncheck a radiobutton through script, then on-before-unchecked , on-unchecked and on-changed are fired.

```javascript
document.querySelector( 'lyte-radiobutton' ).ltProp( 'checked' , true );
```

You can get the state of the radio-button through script using the .ltProp() function.

```javascript
document.querySelector( 'lyte-radiobutton' ).ltProp( 'checked' );
```

You can set a class to the label of the radiobutton through the lt-prop-label-class .

```html
<lyte-radiobutton lt-prop-label-class="radio-red" lt-prop-name="label-example" lt-prop-value="1" lt-prop-label="Check Me"></lyte-radiobutton>
```

Similar to checkbox, the lyte-radiobutton has a span which is used to render the radio icon. You can customize the radiobutton icon by passing the lt-prop-class attribute and setting your own css to that class.

```html
<lyte-radiobutton lt-prop-class="radio-green" lt-prop-name="class-example" lt-prop-value="1" lt-prop-label="Check Me"></lyte-radiobutton>
```

### radiobutton - api

Properties

All properties must be prefixed with lt-prop.

type(lt-prop-type)
Description	:	This is used to render different types of radiobuttons available in lyte-ui-components.
Datatype	:	string
Default	:	default
name(lt-prop-name)
Description	:	This is used to set the name attribute of the input rendered inside the component. This attribute is mandatory and should be provided for the lyte-radiobutton to work. A group of radiobuttons share the same lt-prop-name attribute just like the input[type="radio"].
Datatype	:	string
disabled(lt-prop-disabled)
Description	:	This is used to disable the lyte-radiobutton.
Datatype	:	boolean
Default	:	false
checked(lt-prop-checked)
Description	:	This is used to check or uncheck that particular radiobutton. Only one radiobutton can be checked at any given point of time but all radiobuttons can also be unchecked. You can get the current lt-prop-checked value using the .ltProp() function. Setting the lt-prop-checked does call the callbacks
Datatype	:	boolean
Default	:	false
label(lt-prop-label)
Description	:	This is used to set a label for the radiobutton.
Datatype	:	string
value(lt-prop-value)
Description	:	This is used to set the value attribute of the input rendered inside the component. This is a mandatory field for the lyte-radiobutton to work. Each radiobutton in the same group should have unique lt-prop-value attribute.
Datatype	:	string
fire-on-init(lt-prop-fire-on-init)
Description	:	The callbacks of the radiobuttons are not fired on render when a radiobutton is checked. If you want the on-before-checked, on-checked and on-changed to fire on render( when the particular radiobutton is checked ), then set this attribute to true.
Datatype	:	boolean
label-class(lt-prop-label-class)
Description	:	This is used to set the class for the span containing the label of the radiobutton.
Datatype	:	string
class(lt-prop-class)
Description	:	This is used to set the class attribute for the span that renders the radiobutton-icon. Use this attribute to customize the radiobutton icon the way you want.
Datatype	:	string
yield(lt-prop-yield)
Description	:	This allows you to yield the text label of the radiobutton. The content you provide in the yield replaces a text inside a span in the radiobutton. Using this prevents you from using lt-prop-label.
Datatype	:	boolean
Default	:	false
focus(lt-prop-focus)
Description	:	Set this to true to focus the radiobutton. This is different from the lt-prop-auto-focus attribute which only focuses the radiobutton during render.
Datatype	:	boolean
Default	:	false
aria-radio(lt-prop-aria-radio)
Description	:	Use this to set aria attributes for the input rendered inside the lyte-radiobutton tag.
Datatype	:	object
Default	:	{}
focus(lt-prop-focus)
Description	:	Set this to true to focus the radiobutton. This is different from the lt-prop-auto-focus attribute which only focuses the radiobutton during render.
Datatype	:	boolean
Default	:	false
Version	:	From V3.2.0
prevent-focus(lt-prop-prevent-focus)
Description	:	Stops the radiobutton from getting focused when its lt-prop-checked is set through script.
Datatype	:	boolean
Default	:	false
Version	:	From V3.67.0
unbound(lyte-unbound)
Description	:	Setting this to true will decrease the rendering time of the radiobutton but it will also stop the bindings from working. It is not prefixed with lt-prop. Refer the lyte documentation to learn more about unbound.
Datatype	:	boolean
Default	:	false
Version	:	From V3.13.0
read-only(lt-prop-read-only)
Description	:	Makes the radiobutton readonly.
Datatype	:	boolean
Default	:	false
Version	:	From V3.55.0
data-tabindex(lt-prop-data-tabindex)
Description	:	Sets the data tabindex of the input rendered inside the radiobutton. To learn more about data tabindex property refer the focus stack documentation.
Datatype	:	string
Default	:	
Version	:	From V3.65.0
Methods

The following are the methods of lyte-radiobutton.

on-changed
Description	:	Fired when the state of the radiobutton is changed (checked or unchecked). To invoke this method when a radiobutton is checked on render, just set the lt-prop-fire-on-init to true.
on-before-checked
Description	:	Fired just before the radiobutton is checked. To invoke this method when a radiobutton is checked on render, just set the lt-prop-fire-on-init to true.
on-checked
Description	:	Fired when the radiobutton is checked. To invoke this method when a radiobutton is checked on render, just set the lt-prop-fire-on-init to true to fire the callbacks.
on-before-unchecked
Description	:	Fired just before radiobutton is unchecked.
on-unchecked
Name	:	on-unchecked
Description	:	Fired when the radiobutton is unchecked.
Utilities

The following are the utility functions of lyte-radiobutton.

.click()
Description	:	This invokes a click function on the lyte-radiobutton. It changes its state only when it is unchecked.
.focus()
Description	:	This focuses the radiobutton after which you can press the spacebar or the enter key to change its state. Only changes the state when the radiobutton is unchecked.
.blur()
Description	:	This removes focus from a radiobutton.

---

## radiobutton-group

### radiobutton-group - overview

Radio Button Group

Lyte radiobutton group helps to group lyte-radiobutton component. This component is quite distinct from the regular radio- button as it allows you to collectively gather the selected data using the 'selected' property. This component also provides with the horizontal alignment with 'alignment' property.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-radiobutton.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-radiobutton-group.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Basic

The lyte-radiobutton-group component is used to group the lyte-radiobutton component. Similar to input[type='radio'], lyte-radiobutton-group mandates to define the 'lt-prop-name' attribute and it can be rendered with an array, by simply passing the data to the 'lt-prop-options-attribute.' Have a look at the below code snippet to see how it is done.

```html
<lyte-radiobutton-group lt-prop-name="OS"
lt-prop-options="{{options}}"
lt-prop-user-value="name"
lt-prop-system-value="value">
</lyte-radiobutton-group>
```
```javascript
/* In your component */
data(){
    return {
        options : prop ( 'array' , { default : [ {
                "name": "IOS",
                "value": "apple"
            }, {
                "name": "Android",
                "value": "google"
            }, {
                "name": "Window",
                "value": "mircosoft"
            } ]
        })
    }
}
```
Each object in the array which is passed to the lt-prop-options should have the user-value and the system-value. In the above example the user-value is name and the system-value is value .
The system-value is the value given to the value attribute (lt-prop-value) of the lyte-radiobutton.
The user-value is the value given to the label attribute (lt-prop-label) of the lyte-radiobutton.
The lt-prop-system-value specifies the property name for the system-value in the object. In the above example, the value property access the value of each item.
The lt-prop-user-value specifies the property name for the user-value in the object. In the above example, the name property access the label of each item.
Type
The 'lt-prop-type' is used to render different types of radiobutton-group such us default, primary, secondary, switch and slider.
```html
<lyte-radiobutton-group lt-prop-name="sports"
lt-prop-options="{{options}}"
lt-prop-user-value="name"
lt-prop-system-value="association">
</lyte-radiobutton-group>
```
```javascript
/* In your component */
data() {
    return {
        options : prop ( 'array' , { default : [ {
                "name": "Football",
                "association": "FIFA"
            }, {
                "name": "Cricket",
                "association": "ICC"
            }, {
                "name": "Hockey",
                "association": "FIH"
            } ]
        })
    }
}
```
Alignment

The 'lt-prop-alignment' is used to align the lyte-radiobutton-group in horizontal or in vertical direction.

```html
<lyte-radiobutton-group lt-prop-name="products"
lt-prop-options="{{options}}"
lt-prop-user-value="productName"
lt-prop-system-value="productCode">
</lyte-radiobutton-group>
```
```javascript
/* In your component */
data() {
    return {
        options : prop ( 'array' , { default : [ {
                "productName": "CRM",
                "productCode": "Z001"
            }, {
                "productName": "CREATORS",
                "productCode": "Z012"
            }, {
                "productName": "BOOKS",
                "productCode": "Z007"
            },
            {
                "productName": "MAIL",
                "productCode": "Z041"
            }]
        })
    }
}
```
Yielded Syntax

The 'lt-prop-yield' allows to yield the text label of the lyte-radiobutton. The content you provide in the yield replaces a text inside a span in the lyte-radiobutton. With the yield syntax, lt-prop-label is not required. The ltItem contains the value of each item given in lt-prop-options.

Note : The ltItem value will be set by the lyte-radiobutton-group component from the 'lt-prop-options'. You no need to define ltItem in the your component's data.

```html
<lyte-radiobutton-group
lt-prop-direction="Vertical"
lt-prop-name="zohoProducts"
lt-prop-options="{{options}}"
lt-prop-system-value="productCode"
lt-prop-yield=true>
    <template is="registerYield" yield-name="yield">
        {{ltItem.productName}}
        <span class="{{ltItem.iconClass}}">
        </span>
    </template>
</lyte-radiobutton-group>
```
```javascript
/* In your component */
data() {
    return {
        options : prop ( 'array' , { default : [ {
                "productName": "Cliq",
                "iconClass": "cliq_icon",
                "productCode": "Z001"
            }, {
                "productName": "connect",
                "iconClass": "connect_icon",
                "productCode": "Z002"
            },
            {
                "productName": "MAIL",
                "iconClass": "zmail_icon",
                "productCode": "Z003"
            }]
        })
    }
}
```

### radiobutton-group - api

Properties

All properties should be prefixed with lt-prop.

Type
Name	:	Type( lt-prop-type )
DataType	:	string
Default	:	default
Description	:	The lt-prop-type is used to render different types of radiobutton-group.
Name (mandatory)
Name	:	Name ( lt-prop-name )
DataType	:	string
Default	:	""
Description	:	The lt-prop-name is used to set the name attribute of the input which is rendered inside the lyte-radiobutton component. This attribute is mandatory. A group of radiobuttons share the same lt-prop-name attribute just like the input[type="radio"]. Two or more radiobutton-group should not share the same lt-prop-name, as it might result as if they are grouped together as a single radio button group.
Options(mandatory)
Name	:	Options ( lt-prop-options )
DataType	:	Array
Default	:	[ ]
Description	:	The lt-prop-options is used to pass an array of values to the radiobutton group. It can be an array of objects.
User value (mandatory)
Name	:	User value (lt-prop-user-value)
DataType	:	string
Default	:	"name"
Description	:	The lt-prop-user-value represents the key which contains the display label of lyte-radiobutton in the array of objects which is passed to the lyte-radiobutton-group as lt-prop-options.
System value (mandatory)
Name	:	System value (lt-prop-system-value)
DataType	:	string
Default	:	"value"
Description	:	The lt-prop-system-value represents the key which contains the value of the data-value attribute of each radio-button in the array of objects passed to the radio button group as lt-prop-options.
Selected
Name	:	selected( lt-prop-selected )
DataType	:	object
Default	:	{ }
Description	:	The lt-prop-selected is used to set/get the selected value for the radiobutton group. By changing lt-prop-selected through script, does not invoke any methods.
Disabled List
Name	:	selected( lt-prop-disabled-list )
DataType	:	array
Default	:	[ ]
Description	:	The lt-prop-disabled-list is used to disable the radiobuttons inside the radiobutton group. You have to pass an array of system values to disable it.
Label Class
Name	:	Label Class ( lt-prop-label-class )
DataType	:	string
Default	:	""
Description	:	The lt-prop-label-class is used to set the class attribute for the span element which renders the label of the lyte-radiobutton component.
Class
Name	:	Class ( lt-prop-class )
DataType	:	string
Default	:	""
Description	:	The lt-prop-class is used to set the class attribute for the span element which renders the radiobutton-icon. Use this attribute to customize the lyte-radiobutton icon as desired.
Alignment
Name	:	Alignment ( lt-prop-alignment )
DataType	:	string
Default	:	vertical
Description	:	The lt-prop-alignment is used to align the lyte-radiobutton-group in horizontal or in vertical direction.
Fire On Init
Name	:	fire-on-init( lt-prop-fire-on-init )
DataType	:	boolean
Default	:	false
Description	:	When the lt-prop-selected is passed in the initial render, the callbacks of the radiobuttons will not be fired. If you want the on-before-checked, on-checked and on-changed methods to be fired on render, then set this attribute to true.
Focus
Name	:	focus( lt-prop-focus )
DataType	:	boolean
Default	:	false
Description	:	Set lt-prop-focus as true to focus the first active radiobutton.
preventFocus
Name	:	preventFocus( lt-prop-prevent-focus )
DataType	:	boolean
Default	:	false
Description	:	Prevents the focus of the radio botton during the intial render.
readOnly
Name	:	readOnly( lt-prop-read-only )
DataType	:	boolean
Default	:	false
Description	:	This property allows you to read but not select the value of the radio buttons.
RadiobtnClass
Name	:	radio btn Class( lt-prop-radio-btn-class )
DataType	:	string
Default	:	
Description	:	This property enables you to add this class to the lyte-radio button.
selectedValue
Name	:	selected value( lt-prop-selected-value )
DataType	:	string
Default	:	
Description	:	With this property, you can select a button with the string value. This property helps you to use lbind helper and bind the selected value to the component's data.
SelectedClass
Name	:	selected Class( lt-prop-selected-class )
DataType	:	string
Default	:	
Description	:	With this property, you can set the class for the selected button.
Aria Attributes
Name	:	aria attribute( lt-prop-aria-attributes )
DataType	:	array
Default	:	[ ]
Description	:	lt-prop-aria-attributes can be used to give the aria attributes for the lyte-radiobutton. Pass an array of object for the radiobuttons.
Yield
Name	:	Yield( lt-prop-yield )
DataType	:	boolean
Default	:	false
Description	:	lt-prop-yield allows you to yield the text label of the radiobutton. The content you provide in the yield replaces a text inside a span element in the lyte-radiobutton. Using this, prevents the overriding of lt-prop-label attribute.
Methods

The methods for lyte-radiobutton-group .

on-before-unchecked
Name	:	on-before-unchecked
Description	:	This method will be executed before the lyte-radiobutton is being unchecked.
on-unchecked
Name	:	on-unchecked
Description	:	This method will be executed when the lyte-radiobutton is unchecked.
on-before-checked
Name	:	on-before-checked
Description	:	This method will be executed before the lyte-radiobutton is being checked.
on-checked
Name	:	on-checked
Description	:	This method will be executed when the lyte-radiobutton is checked.
on-changed
Name	:	on-changed
Description	:	This will be executed when the state(checked or unchecked) of the lyte-radiobutton-group is changed.

---

## rating

### rating - overview

Rating

In general, a rating UI component, is used as a parameter for evaluation or assessment of someone or something. The rating component supports both yield and non-yield content.


Dependencies
```javascript
<!-- Individual component files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-rating.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-rating.js" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-rating.css"> </link>
also requires a sprite file - ui-components/theme/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of a table is as shown below.

Simple structure


Let us see the structure of lyte-table

Tags Used
lyte-rating - Tag used for the rating component
lyte-rate-icon - Tag used for the rating icon while yielding the component.
Classes Used

Customisation can be done with these classes.

lt-prop-empty-icon - Used for define a rating icon in an inactive state.
lt-prop-half-icon - Used for define a rating icon in an partial state. Mainly used if lt-prop-half-increment is set as true
lt-prop-full-icon - Used for define a rating icon in an active state.
lt-prop-hover-full-icon - Used for define a rating icon while hovering.
lt-prop-hover-half-icon - Used for define a rating icon while hovering in partial state.
Semantic structure
```javascript
<lyte-rating >

</lyte-rating>
```
```javascript
<lyte-rating lt-prop-yield="true">
   <template is="registerYield" yield-name="rateIcon" >
       <lyte-rate-icon></lyte-rate-icon>
       <lyte-rate-icon></lyte-rate-icon>
       <lyte-rate-icon></lyte-rate-icon>
  </template>
</lyte-rating>
```
Rating syntax - with and without yield
```javascript
<lyte-rating lt-prop-type = "svg" lt-prop-appearance = "star >

</lyte-rating>
```
```javascript
<lyte-rating lt-prop-yield="true" lt-prop-type="class"  lt-prop-empty-icon = "lRCustomRatingEmpty" lt-prop-full-icon = "lRCustomRating" lt-prop-hover-full-icon = "lRCustomRatingHover">
   <template is="registerYield" yield-name="rateIcon" >
       <lyte-rate-icon></lyte-rate-icon>
       <lyte-rate-icon></lyte-rate-icon>
       <lyte-rate-icon></lyte-rate-icon>
  </template>
</lyte-rating>
```
Default Rating


The default rating component is set with lt-prop-type = "svg". It has 4 types of appearances based on the types of icons.

star : A rating component using a set of filled star icons.
lineStar : A rating component using a set of bordered star icons.
heart : A rating component using a set of filled heart icons.
lineHeart : A rating component using a set of bordered heart icons.
```html
<lyte-rating lt-prop-type = "svg" lt-prop-appearance = "star" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "svg" lt-prop-appearance = "lineStar" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "svg" lt-prop-appearance = "heart" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "svg" lt-prop-appearance = "lineHeart" > </lyte-rating>
```


Type

A rating component is divided into different types based on their behaviour which futher has different set of appearances. For example, a rating component with ltPropType multiple can have any of the two appearances such as smiley(Pre defined rating) or custom(User defined).

```html
For ltPropType svg, there are 4 appearances -

1. star (default appearance) - <lyte-rating lt-prop-type = "svg" lt-prop-appearance = "star"> </lyte-rating>

2. lineStar - <lyte-rating lt-prop-type = "svg" lt-prop-appearance = "lineStar"> </lyte-rating>

3. heart - <lyte-rating lt-prop-type = "svg" lt-prop-appearance = "heart"> </lyte-rating>

4. lineHeart - <lyte-rating lt-prop-type = "svg" lt-prop-appearance = "lineHeart"> </lyte-rating>
```
```html
For ltPropType multiple, there are 2 appearances -

1. smiley (default appearance) - <lyte-rating lt-prop-type = "multiple" lt-prop-appearance = "smiley"> </lyte-rating>

2. custom - <lyte-rating lt-prop-type = "multiple" lt-prop-appearance = "custom"> </lyte-rating >
```
```html
For ltPropType switch, there are 2 appearances -

1. likeDislike (default appearance) - <lyte-rating lt-prop-type = "switch" lt-prop-appearance = "likeDislike"> </lyte-rating>

2. custom - <lyte-rating lt-prop-type = "switch" lt-prop-appearance = "custom"> </lyte-rating>;
```
```html
For ltPropType toggle, there are 2 appearances -

1. smiley (default appearance) - <lyte-rating lt-prop-type = "toggle" lt-prop-appearance = "heart"> </lyte-rating>

2. custom - <lyte-rating lt-prop-type = "toggle" lt-prop-appearance = "custom"> </lyte-rating>;
```
```html
For ltPropType class, there is no particular appearance -
<lyte-rating lt-prop-type = "class" > </lyte-rating>
```


Type-multiple

In this rating component, different icons are used for each rating icon. In customize type the icon classes are passed as string of comma seperated values. The ith position class is applied to the ith position icon, where i > 0 and i is equal to ltPropCount. eg - lt-prop-empty-icon = " emptyIcon1 , emptyIcon2 , emptyIcon3 , emptyIcon4 "

custom : A rating component using a set icons customized by the users. To customize the icons, user can provide the respective icon classes using properties like ltPropEmptyIcon, ltPropFullIcon, ltPropHalfIcon, ltPropHoverFullIcon, ltPropHoverHalfIcon.
lt-prop-full-icon : This property sets the given class to rating icons when they are rated full.
lt-prop-half-icon : This property sets the given class to rating icons when they are rated half.
lt-prop-hover-full-icon : This property sets the given class to rating icons when hovering over the rating icons.
lt-prop-hover-half-icon : This property sets the given class to rating icons when hovering over the rating icons and ltPropHalfIncrement is true.
lt-prop-empty-icon : This property sets the given class to rating icons when they are empty.
smiley : A rating component using a set of differnt smiley icons. It has 2 variants based on the ltPropCount value - component with 3 smiley icons and component with 5 smiley icons.
```html
<lyte-rating lt-prop-type = "multiple" lt-prop-appearance = "smiley" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "multiple" lt-prop-appearance = "custom" lt-prop-empty-icon = "empty1,empty2,empty3,empty4,empty5" lt-prop-full-icon = "full1,full2,full3,full4,full5" lt-prop-hover-full-icon = "hoverFull1,hoverFull2,hoverFull3,hoverFull4,hoverFull5" > </lyte-rating>
```


Type - switch

This component consists of only 2 icons. On selecting one icon the other icon if already selected, is deselected. The icon classes are passed a string of comma seperated values. The ith position class is applied to the ith position icon, where i > 0 and i is equal to ltPropCount. The ltPropCount value is fixed to 2. eg - lt-prop-empty-icon = "emptyIcon1,emptyIcon2"

likeDislike : A rating component consist of a like icon and a dislike icon.
custom : A rating component using a set icons customized by the users. To customize the icons, user can provide the respective icon classes using properties like ltPropEmptyIcon, ltPropFullIcon, ltPropHalfIcon, ltPropHoverFullIcon, ltPropHoverHalfIcon.
```html
<lyte-rating lt-prop-type = "switch" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "switch" lt-prop-appearance = "custom" lt-prop-empty-icon = "empty1,empty2" lt-prop-full-icon = "full1,full2" lt-prop-hover-full-icon = "hoverFull1,hoverFull2" > </lyte-rating>
```


Type - toggle

This component consists of only 1 icon. It is clearable by default and has the toggle effect like on and off.

heart : A rating component with a heart icon.
custom : A rating component using an icon provided by the users. To customize the icon, user can provide the respective icon classes using properties like ltPropEmptyIcon, ltPropFullIcon, ltPropHalfIcon, ltPropHoverFullIcon, ltPropHoverHalfIcon.
```html
<lyte-rating lt-prop-type = "toggle" > </lyte-rating>
```
```html
<lyte-rating lt-prop-type = "toggle" lt-prop-appearance = "custom" lt-prop-empty-icon = "empty1" lt-prop-full-icon = "full1" > </lyte-rating>
```


Type - class

For this type, classes are used to provide the icons. For different stages in rating like empty, fill, hover specific properties are used to provide the respective class names which will be used then. Custom ratings can be created using class type rating.

```html
<lyte-rating lt-prop-type = "class" lt-prop-empty-icon = "lRCustomRatingEmpty" lt-prop-full-icon = "lRCustomRating" lt-prop-hover-full-icon = "lRCustomRatingHover"> </lyte-rating>

With half increment enabled : <lyte-rating lt-prop-type = "class" lt-prop-empty-icon = "emptyIcon" lt-prop-full-icon = "fullIcon" lt-prop-hover-full-icon = "hoverFullIcon" lt-prop-half-increment = "true" lt-prop-half-icon = "halfIcon" lt-prop-hover-half-icon = "hoverHalfIcon"> </lyte-rating>
```
```html
// This is the customised CSS for the below rating component.
.lRCustomRating{
    background: url(star.png);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 1;
}
.lRCustomRatingEmpty{
    opacity: 0.5;
}
.lRCustomRatingHover{
    opacity: 1;
}
.lRCustomRatingEmpty,
.lRCustomRatingHover{
    background: url(circle-outline.png);
    background-repeat: no-repeat;
    background-size: contain;
}
```


Features of Lyte rating
Rating Precision

For ratings with type svg, a new property is defined ltPropPrecision, which will accept values between 0 to 1. Based on this value the rating will be incremented or decremented on hover. "lt-prop-half-increment" need to be set true. By default lt-prop-precision is set to be '0.5'.

```html
<lyte-rating lt-prop-half-increment = true > </lyte-rating>
```
Readonly Rating

Ratings with ltPropReadOnly as true prevents all activities between the user and rating component. It restricts mouseover and click events.

```html
<lyte-rating lt-prop-read-only = true > </lyte-rating>
```
Clearable Rating

Setting to true/false will allow or disallow a user to clear their rating.

```html
<lyte-rating lt-prop-clearable = true > </lyte-rating>
```
Rating With Customized Icon

Users can use their customized icons in rating component. The properties like ltPropEmptyIcon, ltPropFullIcon, ltPropHoverFullIcon should be provided proper class names to show the custom icons. If ltPropHalfIncrement is true, ltPropHalfIcon and ltPropHoverHalfIcon should also have proper class values.

```html
<lyte-rating lt-prop-value = "3" lt-prop-empty-icon = "lRCustomRatingEmpty" lt-prop-full-icon = "lRCustomRating" lt-prop-hover-full-icon = "lRCustomRatingHover" > </lyte-rating>
```
Yield

On setting lt-prop-type lt-prop-yield as true, you can achieve the yield functionality for the rating component. While using yield, you should also set the lt-prop-type as class. It is also mandatory to define the lyte-rate-icon.Have a look at the below code snippet to see how it can be implemented.

```html
<lyte-rating lt-prop-yield="true" lt-prop-type="class"  lt-prop-empty-icon = "lRCustomRatingEmpty" lt-prop-full-icon = "lRCustomRating" lt-prop-hover-full-icon = "lRCustomRatingHover">
   <template is="registerYield" yield-name="rateIcon" >
   <lyte-rate-icon></lyte-rate-icon>
   <lyte-rate-icon></lyte-rate-icon>
   <lyte-rate-icon></lyte-rate-icon>
   <lyte-rate-icon></lyte-rate-icon>
   <lyte-rate-icon></lyte-rate-icon>
   </template>
</lyte-rating>
```
Enabling Accessibilty

By default, aria attributes are enabled.

### rating - api

Properties

All properties should be prefixed with lt-prop.

Value
Name	:	value( lt-prop-value )
DataType	:	number
Default	:	0
Description	:	Specifies the rating value.
Count
Name	:	count( lt-prop-count )
DataType	:	number
Default	:	5
Description	:	Specifies the number of rating icons to be shown.
Wrapper Class
Name	:	wrapper-class( lt-prop-wrapper-class )
DataType	:	string
Default	:	" "
Description	:	This property sets given class to wrapper div of rating icons. This helps you to identify your rating component and also to make style changes to that.
Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	svg
Description	:	Specifies the type of icons to be shown in the rating component based on their behaviour which further has different appearances. The default value is set to default.
Appearance
Name	:	type( lt-prop-appearance )
DataType	:	string
Default	:	star
Description	:	Specifies the icons to be shown based on both appearance and type. By default stars are shown.
Read Only
Name	:	read-only( lt-prop-read-only )
DataType	:	boolean
Default	:	false
Description	:	Set it to true to stop the interaction between the users and the component. Events like mouseover and click are disabled.
Clearable
Name	:	clearable( lt-prop-clearable )
DataType	:	boolean
Default	:	false
Description	:	Set it to true/false to allow or disallow a user to clear their rating.
Half Increment
Name	:	half-increment( lt-prop-half-increment )
DataType	:	boolean
Default	:	false
Description	:	Set the value to true or false to enable or disable half increments.
Empty Icon
Name	:	empty-icon( lt-prop-empty-icon )
DataType	:	string
Default	:	
Description	:	This property sets given class to rating icons when they are empty.
Full Icon
Name	:	full-icon( lt-prop-full-icon )
DataType	:	string
Default	:	" "
Description	:	This property sets given class to rating icons when they are rated full.
Half Icon
Name	:	half-icon( lt-prop-half-icon )
DataType	:	string
Default	:	" "
Description	:	This property sets given class to rating icons when they are rated half.
Hover Full Icon
Name	:	Hover-full-icon( lt-prop-hover-full-icon )
DataType	:	string
Default	:	" "
Description	:	This property sets given class to rating icons when hovering over the rating icons.
Hover Half Icon
Name	:	Hover-half-icon( lt-prop-Hover-half-icon )
DataType	:	string
Default	:	" "
Description	:	This property sets given class to rating icons when hovering over the rating icons and ltPropHalfIncrement is true.
Yield
Name	:	yield( lt-prop-yield )
DataType	:	boolean
Default	:	false
Description	:	Use this property to provide your own custom icon using lyte-rate-icon tag to lyte-rating component.
Empty Color
Name	:	empty-color( lt-prop-empty-color )
DataType	:	string
Default	:	#c7c7c7
Description	:	This property is used in the case of svg type rating to show empty rating icons.
Fill Color
Name	:	fill-color( lt-prop-fill-color )
DataType	:	string
Default	:	#f00
Description	:	This property is used in case of svg type rating to show selected or filled rating icons.
Hover Color
Name	:	hover-color( lt-prop-hover-color )
DataType	:	string
Default	:	#FF7778
Description	:	This property is used in case of svg type rating to show rating icons when mouse is hovered over them.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	22px
Description	:	Use this property to set width of the rating icons.Set the default Width(22px) if ltPropType specified as toogle,multiple and switch. Apart from default value, ltPropAppearance should be custom.
Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	22px
Description	:	Use this property to set height of the rating icons.Set the default height(22px) if ltPropType specified as toogle,multiple and switch. Apart from default value, ltPropAppearance should be custom.
Precision
Name	:	precision( lt-prop-precision )
DataType	:	number
Default	:	0.5
Description	:	This property is used to set the precision value which will be used for calculation on hovering over the icons.
Stroke
Name	:	Stroke( lt-prop-Stroke )
DataType	:	string
Default	:	" "
Description	:	This property is used to provide some colored border to the icons in case of svg type ratings.
Methods

The following are the methods of lyte-rating.

on-render
Name	:	on-render
Description	:	This will be executed once the rating component is rendered.
on-click
Name	:	on-click
Description	:	This will be executed once a rating icon is clicked.
on-hover
Name	:	on-hover
Description	:	This will be executed when the mouse is over a rating icon.
on-out
Name	:	on-out
Description	:	This will be executed after the mouse moves out of a rating icon.

---

## search

### search - overview

Search

Search component, from the family of UI components, is used to search and filter from the existing rendered DOM. This search component does not help for making any network request search.

```html
<!-- Individual component files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-search.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Lyte-Search

Generally lyte-search performs search in the DOM element available in document. Search target container and searchable elements should be mentioned in lt-prop-query-selector property.


```html
<lyte-search lt-prop-query-selector = '{"scope" : "lyte-tbody", "search" : "lyte-td:first-of-type", "target" : "lyte-tr"}' on-search = "\{\{method('error')\}\}"></lyte-search>
```
```javascript
// in your component
static methods() {
 return{
error : function ( visibleList , searchElem, inputEvent, inputValue, hiddenList ) {
 if ( visibleList.length == 0 ) {
 // show some error message
  }
  }
 }
 }
```
scope - This key indicates the selector of the container which contains all the searchable elements. First matched element in the document will be associated to the corresponding search element.

search - This key indicates the selector of elements to be searched. Text content of these element will be checked with typed value.

target - This key indicates the selector of the element to be hidden based on the search results.

In the following example search is based on the text content of first lyte-td element (selector - lyte-td:first-of-type). Based on the result, target element row ( selector - tr ) will be hidden.

Giving lt-prop-type = 'text' to lyte-search will hide the search icon.

```html
<lyte-search lt-prop-query-selector = '{"scope" : "lyte-tbody", "search" : "lyte-td:first-of-type", "target" : "lyte-tr"}' on-search = "\{\{method('error')\}\}"></lyte-search>
```
```javascript
// in your component
methods : {
    error : function ( visibleList , searchElem, inputEvent, inputValue, hiddenList ) {
        if ( visibleList.length == 0 ) {
        // show some error message
        }
    }
}
```
Related

Sometimes search may be performed in grouped elements. Normal search won't hide group name even if all of its searchable contents are hidden.

In this case if the selector of the group is provided in related key search will automatically show / hide group based on the result.

```html
<lyte-search lt-prop-query-selector = '{"scope" : "lyte-drop-body", "search" : "lyte-drop-item", "related" : "lyte-drop-group"}' on-search = {{method('error')}}></lyte-search>
```
```javascript
// in your component
static methods() {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
    }
  }
}
```
Search in Tree

You can also search inside a tree. It will open the tree if the matched element is in the closed part of the tree. Scope value should be the top most lyte-tree element. Set the lt-prop-component as tree

```html
<lyte-search lt-prop-query-selector = '{"scope" : "lyte-tree.someclass", "search" : "p.value", "target" : ".lyteTreeBodyDiv" }' lt-prop-component = "tree" on-search = {{method('error')}}> </lyte-search>

<lyte-tree class = 'someclass' lt-prop-data = {{treedata}}>
      <template is="registerYield" yield-name="content">
          <lyte-tree-content>
              <lyte-tree-icon> </lyte-tree-icon>
              <p class="value"> {{listValue.name}} </p>
           </lyte-tree-content>
      </template>
</lyte-tree>
```
```javascript
// in your component
static methods()  {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
    }
  }
}
```
Search in Accordion

You can also search inside the accordion component. It will open the particular accordion if it is hidden. To search inside the accordian component use lt-prop-component as accordian.

```html
<lyte-search lt-prop-component = "accordion" lt-prop-query-selector = '{"scope" : "lyte-accordion", "search" : "li"}' on-search = {{method('error')}}> </lyte-search>

<lyte-accordion>
  <template is="registerYield" yield-name="yield">
      <lyte-accordion-item>
            <lyte-accordion-header> Tirunelveli </lyte-accordion-header>
            <lyte-accordion-body>
                <li> Tenkasi </li>
                <li> Ambasamuthiram </li>
                <li> Alangulam </li>
                <li> Palayamkottai </li>
            </lyte-accordion-body>
      </lyte-accordion-item >
      <lyte-accordion-item >
            <lyte-accordion-header> Kanchipuram </lyte-accordion-header >
            <lyte-accordion-body>
                <li>Chingelpet </li >
                <li>Tambaram </li >
                <li>Madhuranthagam </li >
            </lyte-accordion-body >
     </lyte-accordion-item >
      <lyte-accordion-item >
            <lyte-accordion-header> Madurai </lyte-accordion-header >
            <lyte-accordion-body >
                <li > Melur </li >
                <li> Tirumangalam </li>
                <li > Usilampatti </li >
            </lyte-accordion-body >
     </lyte-accordion-item >
  </template >
 </lyte-accordion >
```
```javascript
// in your component
static methods()  {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
    }
  }
}
```
Search in Dropdown

You can also search inside a closed dropdown. To search inside the Dropdown component use lt-prop-component as dropdown. If it matches any, lyte-search will open the dropdown.

```html
<lyte-dropdown>
<template is = "registerYield" yield-name = "yield">
    <lyte-drop-button>
        <lyte-search
          lt-prop-component = "dropdown"
          lt-prop-query-selector = '{"scope" : "lyte-drop-box", "search" : "lyte-drop-item"}'
          lt-prop-appearance="box"
          on-search = {{method('error')}}>
        </lyte-search>
    </lyte-drop-button>
    <lyte-drop-box>
        <lyte-drop-body>
            <lyte-drop-item> Chennai </lyte-drop-item>
            <lyte-drop-item> Mumbai </lyte-drop-item>
            <lyte-drop-item> Calcutta </lyte-drop-item>
            <lyte-drop-item> Delhi </lyte-drop-item>
        </lyte-drop-body>
    </lyte-drop-box>
</template>
</lyte-dropdown>
```
```javascript
// in your component
static methods() {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
    }
  }
}
```
Search in Listbox

You can also search inside a listbox. Set the property lt-prop-component as listbox.

```html
<lyte-search lt-prop-component = "listbox" lt-prop-query-selector = '{"scope" : ".lyteListboxLeftPanel", "search" : ".lyteLBMandatory", "target" : ".lyteListBoxLeftWrap"}' on-search = {{method('error')}}>  </lyte-search>

<lyte-dual-listbox lt-prop-left-data={{leftPanelData}} lt-prop-right-data={{rightPanelData}} lt-prop-show-toolbar=true lt-prop-associate-parent="uniqueKey">
        <div class="lyteLBLeftWidgets">
            <template is="registerYield" yield-name="leftWidget">
              <div class="wrap">
                <span class="lyteLBMandatory">{{leftWidgetValue.name}}</span>
              </div>
            </template>
            <template is="registerYield" yield-name="rightWidget">
              <div class="wrap">
               <span class="lyteLBMandatory">{{rightWidgetValue.name}}</span>
              </div>
            </template>
        </div>
</lyte-dual-listbox>
```
```javascript
// in your component
static methods() {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
      }
    }
 }
```
Label search

This is for performing search in grouped elements of lyte-dropdown and lyte-menu. While searching for a group label, search will also provide its group contents eventhough they are not matched in search. Similarly while searching any element inside any group content, the result will be displayed along the group label even if it is not matched in the search.

```html
<lyte-dropdown>
    <template is = "registerYield" yield-name = "yield">
        <lyte-drop-button>
            <lyte-search lt-prop-query-selector = '{"scope" : "lyte-drop-box.labelSearch", "search" : "lyte-drop-item,lyte-drop-title", "related" : "lyte-drop-group", "label" : "lyte-drop-title" }'></lyte-search>
        </lyte-drop-button>
        <lyte-drop-box class = "labelSearch">
            <lyte-drop-body>
                <lyte-drop-group>
                    <lyte-drop-title>Royal dukedom</lyte-drop-title>
                    <lyte-drop-item>York</lyte-drop-item>
                    <lyte-drop-item>Cambridge</lyte-drop-item>
                    <lyte-drop-item>Kent</lyte-drop-item>
                </lyte-drop-group>
                <lyte-drop-group>
                    <lyte-drop-title>Non royal lords</lyte-drop-title>
                    <lyte-drop-item>Wellington</lyte-drop-item>
                    <lyte-drop-item>Somerset</lyte-drop-item>
                    <lyte-drop-item>Richmond</lyte-drop-item>
                </lyte-drop-group>
                <lyte-drop-group>
                    <lyte-drop-title>Earldom</lyte-drop-title>
                    <lyte-drop-item>Essex</lyte-drop-item>
                    <lyte-drop-item>Huntingdon</lyte-drop-item>
                    <lyte-drop-item>Berkshire</lyte-drop-item>
                </lyte-drop-group>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
// in your component
static methods()  {
  return{
    error : function ( visibleList , searchElem , inputValue , inputEvent, hiddenList ) {
        if ( visibleList.length == 0 ) {
            // show some error message
        }
    }
  }
}
```

### search - api

Properties

All properties should be prefixed with lt-prop. For more properties refer lyte-input(text type).

query-selector
DataType	:	Object
Default	:	{ } empty object
Description	:	It should be an object containing 'scope','search','target','related' keys. You need to provide proper selectors for all these keys.
query-selector ==> scope
DataType	:	Element or String
Description	:	It is a key which contains the selector of the scope elements where you are going to perform the DOM search. In the give example lyte-search considers the first matched tbody.
query-selector ==> search
DataType	:	String
Description	:	It is a key which contains the selector of all the elements whose innerText is used for the filtering process. In the given example lyte-search takes all the matched 'td : first-of-type' elements within the tbody.
query-selector ==> target
DataType	:	String
Description	:	It is a key which contains the selector of all the elements which will be hidden on mismatching. In the given example, lyte-search hides all the matched 'tr' on every mismatching of 'td : first-of-type's text content.
query-selector ==> related
DataType	:	String
Description	:	If search is performed on the grouped elements, you can provide selector of groups as related value.
query-selector ==> label
DataType	:	String
Description	:	This will enable label search in dropdown and menu groups. Refer label search example.
min-length
DataType	:	Number
Default	:	1
Description	:	Minimum length required to perform search.
maxlength
DataType	:	Number
Default	:	25
Description	:	Maximum number of letters can be typed in input. You can set it to undefined for typing without maxlength.
method
DataType	:	String
Default	:	contains
Description	:	It specifies the method of text searching.
search-delay
DataType	:	Number
Default	:	100
Description	:	Search will be processed after the given time delay. If it is set to undefined, search will be processed immediately.
component
DataType	:	String
Default	:	100
Description	:	Name of the special component where search is going to be performed.
closeIcon
DataType	:	Boolean
Default	:	false
Description	:	It displays the close icon.
trim
DataType	:	Boolean
Default	:	false
Description	:	It trims the input value before performing search.
case-sensitive
DataType	:	Boolean
Default	:	false
Description	:	It performs case sensitive search.
diacritic
DataType	:	Boolean
Default	:	false
Description	:	It converts all the diacritic letters to the normal alphapet before performing search.
prevent-empty-keys
DataType	:	Boolean
Default	:	false
Description	:	It performs search in keyup only if that event creates any actual inputs.
multiple-search
DataType	:	Boolean
Default	:	false
Description	:	This performs search in multiple search elements. By default single search element requires a target element. This is not supported for tree/accordion. Ex. Now you can search in multiple cells for hiding a single row.
ignore-children
DataType	:	Boolean
Default	:	false
Description	:	This is used to perform search in lyte-tree. If this enabled while searching a parent, it will show all its matched and non matched children.
input
DataType	:	String
Default	:	'{}'
Description	:	You can give all the newer properties of input as a single object.
dont-hide-on-empty
DataType	:	Boolean
Default	:	false
Description	:	This is for tree search. If this is provided it won't hide all the sub elements when input is having empty value.
Methods

You can provide the following methods to lyte-search either via script or HTML. For more methods refer lyte-input(text type).

on-search
Description	:	This method is triggered on every keyup with 100ms debounce.
before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after rendering the component.
on-focus
Description	:	This method is called whenever input is focused.
on-blur
Description	:	This method is called whenever the input is blured.
on-clear
Description	:	This method is called whenever the input is cleared by clicking close icon.
on-after-search
Description	:	This method is called after performing the search.
on-before-search
Description	:	This method is called befdore searching
Return Value	:	On returning 'false', search is not performed.
Functions

You can call these function anywhere after the lyte-search is rendered

setValue
Description	:	To change the input value and its filtered results use this function. Passed argument will be set as input value and the results are displayed for the new value.
blur
Description	:	You can call this function for triggering manual blur on input.
click
Description	:	You can call this function for triggering manual click on input.
select
Description	:	You can call this function for triggering manual select on input.
focus
Description	:	You can call this function for triggering manual focus on input

---

## selector

### selector - overview

Selector

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-selector.css"> </link>

<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-selector.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>

----or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-selector"
import $L from "@zoho/lyte-dom";
```
Default Selector

This plugin allows you to select multiple parts of an image and obtain the dimensions of the selected parts.

```javascript
//initiating a selector
$L(".yourImageClass").selector();
```
```html
<div>
   <img class="yourImageClass" src="yourImageUrl">
</div>
```
pre selected areas

To pre select areas in the selector, you can pass in the selections key whose value is an array of objects. Each object contains the dimensions of the area to be selected in the image.

```javascript
//initiating a Selector with data
$L(".yourImageClass").selector({
  selections : [{
    width : 100,
    height : 100,
    top : 50,
    left : 50
  }]
});
```
```html
<div>
   <img class="yourImageClass" src="yourImageUrl">
</div>
```
Sample Selector
getData deleteAll

---

## signature

### signature - overview

Signature

Signature component from the family of UI components, is used to get user inputs and convert that to image. The same image can be rendered again in the signature component using the edit mode.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-signature.css"> </link>
```
Basic signature

This component draws user inputs in a canvas element. Line color and line width are configurable. Rendered canvas can be downloaded as an image.

```html
<lyte-signature style = "width:100%;height:300px;"> </lyte-signature>
```
Undo redo

Undo redo options are configurable by setting lt-prop-undo-redo as true. By default this component will be in edit mode. It can be switched to erase mode.

```html
<lyte-signature lt-prop-undo-redo = true lt-prop-mode = "Insert" style = "width:100%;height:300px;"> </lyte-signature>
```
Edit mode

This component can render an already downloaded image to canvas element. Pass the of image using imageUrl to this component.

```html
<lyte-signature lt-prop-image-url = '/images/sample_sign.png' style = "width:100%;height:300px;"> </lyte-signature>
```

### signature - api

Properties

All properties should be prefixed with lt-prop.

mode
DataType	:	String
Default	:	Insert
Description	:	With this property, you can provide the mode of input.
insertStroke
DataType	:	String
Default	:	#000000
Description	:	With this property, you can provide the color of stroke during insert mode.
insertLineWidth
DataType	:	String
Default	:	1
Description	:	With this, you can set the width of line in Insert mode.
eraseStroke
DataType	:	String
Default	:	white
Description	:	With this, you can set the color of stroke during erase mode
eraseLineWidth
DataType	:	String
Default	:	5
Description	:	With this, you can set the width of line in erase mode.
fileName
DataType	:	String
Default	:	sample_sign
Description	:	With this prop, you can provide the name of the image to be downloaded
imageUrl
DataType	:	String
Default	:	
Description	:	With this prop, you can include already available image to Component. Rendered image will be drawn in canvas.
undoRedo
DataType	:	Boolean
Default	:	false
Description	:	On setting true, with this property you can maintain the changes for undo and redo operations.
Methods

You can provide the methods to lyte-signature either via script or HTML.

on-before-draw-select
Description	:	This method is invoked before selecting to draw.
ReturnValue	:	Returning false will prevent drawing action.
on-draw-select
Description	:	This method is invoked after selecting to draw.
on-draw-move
Description	:	This method is invoked after each movement while drawing.
on-draw-end
Description	:	This method is invoked after releasing the mouse.
on-before-download
Description	:	This method is invoked before downloading the canvas as image.
ReturnValue	:	Returning false will prevent downloading
on-undo-redo-queue-update
Description	:	This method is invoked after updating undo redo queue.
Functions

You can call this function from anywhere

clear
Description	:	This clears the canvas.
downloadAsImage
Description	:	It will download the current input as image.
reset
Description	:	It will reset the canvas element along with the undo redo queues.
resetQueue
Description	:	It will reset the undo,redo queues.

---

## slider

### slider - overview

Slider

Slider is a prominent UI component, which is used to select a value or range in the given interval. By default all the slider handlers will show their value in tooltip on hover.

Dependencies
```html
<!-- Individual css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-slider.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"> </link>
```
Anatomy

The anatomy of a slider is as shown below.

Default slider

This is a default slider. You need to provide a max value to the default slider. Default min value will be 0.

Default slider will be in horizontal direction. Handler will be in callout type. Slider will be rendered in the provided width.

```html
<lyte-slider lt-prop-max = '100' lt-prop-value = '40' lt-prop-width='600px' lt-prop-scale-interval = 20></lyte-slider>
```
```html
<lyte-slider lt-prop-direction = "lyteVertical" lt-prop-handler = "lyteSquare" lt-prop-max = '100' lt-prop-value = '50' lt-prop-scale-interval = 20></lyte-slider>
```
```html
<lyte-slider lt-prop-direction = "lyteVertical" lt-prop-handler = "lyteCircle" lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '40' lt-prop-scale-interval = 20></lyte-slider>
```
Range slider

Range slider allows the user to select a range within the given values by setting lt-prop-range-handler as true.

```html
<lyte-slider lt-prop-range-handler="true" lt-prop-max = '100' lt-prop-width='600px' lt-prop-min-value = '20' lt-prop-max-value = '80' lt-prop-scale-interval = 20></lyte-slider>
```
```html
<lyte-slider lt-prop-range-handler="true" lt-prop-direction = "lyteVertical" lt-prop-handler = "lyteSquare" lt-prop-max = '100' lt-prop-min-value = '20' lt-prop-max-value = '80' lt-prop-scale-interval = 20></lyte-slider>
```
```html
<lyte-slider lt-prop-range-handler="true" lt-prop-direction = "lyteVertical" lt-prop-handler = "lyteCircle" lt-prop-max = '100' lt-prop-width='600px' lt-prop-min-value = '20' lt-prop-max-value = '80' lt-prop-scale-interval = 20></lyte-slider>
```
Discrete slider

Discrete slider allows to select particular values in the range. Discrete value will act as scale interval.

```html
<lyte-slider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '50'></lyte-slider>
```
```html
<lyte-slider lt-prop-max = '100' lt-prop-width='600px' lt-prop-range-handler="true" lt-prop-min-value = '20' lt-prop-max-value = '80' lt-prop-discrete = 20></lyte-slider>
```
Custom scale options

Custom scale options can be rendered with ltPropContent.

```html
<lyte-slider lt-prop-content = '[ "small", "medium", "large", "extra-large" ]' lt-prop-value = 'medium' lt-prop-width='600px' lt-prop-discrete = 20></lyte-slider>
```
```html
<lyte-slider lt-prop-content = '[ "small", "medium", "large", "extra-large" ]' lt-prop-range-handler="true" lt-prop-min-value = 'medium' lt-prop-width='600px' lt-prop-max-value = 'large'></lyte-slider>
```
Disabled slider

You can disable a slider with lt-prop-disabled.

```html
<lyte-slider lt-prop-max = '100' lt-prop-width='600px' lt-prop-value = '50' lt-prop-min = '0' lt-prop-disabled = true> \n </lyte-slider>
```
Yielded slider

By passing lt-prop-yield as true, you can construct your own custom scale values.( or ignore scale construction ).
In the below code snippet, the default scale html of lyte-slider is used in yield.

```html
<lyte-slider lt-prop-yield="true" lt-prop-min="0" lt-prop-max="100" lt-prop-width="600px" lt-prop-height="30px" lt-prop-value="50" lt-prop-direction="lyteHorizontal" lt-prop-handler="lyteArrow">
   <template is = "registerYield" yield-name = "yield">
       <div class="lyteScaleOption">
           <span class="lyteScaleLine" style="left : 0%">
              <span> </span>
              <span class="lyteScaleLabel"> 0 </span>
           </span>
           <span class="lyteScaleLine" style="left : 50%">
              <span> </span>
              <span class="lyteScaleLabel"> 50 </span>
          </span>
          <span class="lyteScaleLine" style="left : 100%">
              <span> </span>
              <span class="lyteScaleLabel"> 100 </span>
          </span>
      </div>
  </template>
</lyte-slider>
```

### slider - api

Properties

All properties should be prefixed with lt-prop.

min
DataType	:	String
Default	:	0
Description	:	It is the lower limit for lyte-slider value.
max
DataType	:	String
Default	:	-
Description	:	It is the upper limit for lyte-slider value.
content( data )
DataType	:	Array
Default	:	-
Description	:	With this property, you can scale the values in array format. Slider will be divided into equal parts based on the content length.
discrete
DataType	:	String
Default	:	-
Description	:	This property allows you to select only particular value from slider.
step
DataType	:	String
Default	:	1
Description	:	Increment and decrement values on key events. For discrete type it will take the value of 'lt-prop-step.'
disabled
DataType	:	Boolean
Default	:	false
Description	:	On setting true, you can disable the slider.
value
DataType	:	String
Default	:	By default it will be 'lt-prop-min' or 'lt-prop-content[0]'
Description	:	With this you can provide the initial selected value in the slider.
max-value
DataType	:	String
Default	:	By default it will be 'lt-prop-max-value' or last value of 'lt-prop-content'
Description	:	It is the maximum selected value for range slider.
min-value
DataType	:	String
Default	:	By default it will be 'lt-prop-min-value' or last value of 'lt-prop-content'
Description	:	It is the minimum selected value for range slider.
direction
DataType	:	String
Default	:	lyteHorizontal
Description	:	With this property, you can set the direction of the slider
handler
DataType	:	String
Default	:	lyteArrow
Description	:	With this you can set the type of handler to be used for slider handler.
scale-interval
DataType	:	String
Default	:	For discrete type it will be 'lt-prop-discrete' and for others it will be 10% of max value. For 'lt-prop-content' scales are divided according to the content length.
Description	:	Interval between slider scale value
range-handler
DataType	:	Boolean
Default	:	false
Description	:	On setting true, you create a range handler slider.
height
DataType	:	String
Default	:	30px - for horizontal 200px - for vertical
Description	:	With this property, you can set the height of lyte-slider.
width
DataType	:	String
Default	:	30px - for vertical 200px - for horizontal
Description	:	With this property, you can set the width of lyte-slider.
fill-color
DataType	:	String
Default	:	#61A6E8
Description	:	With this property, you set the background color for slider selected area.
non-fill-color
DataType	:	String
Default	:	#fff
Description	:	With this property, you set the background color for slider portion.
yield
DataType	:	Boolean
Default	:	false
Description	:	To construct your own scale values use yield. User given elements will be rendered instead of default scale values.
tooltip
DataType	:	Boolean
Default	:	true
Description	:	On setting true, tooltip will be created for the slider.
tooltip-style
DataType	:	Boolean
Default	:	background-color : #61A6E8;
Description	:	Given style will be added for tooltip. // Refer lyte-tooltip
tooltip-config
DataType	:	Object
Default	:	undefined
Description	:	Given properties will be set for tooltip.// Refer lyte-tooltip.
tooltip-class
DataType	:	String
Default	:	-
Description	:	Given class will be added for the created tooltip.
scale-unit
DataType	:	String
Default	:	-
Description	:	Given string will be suffixed for each scale value.
digits
DataType	:	Number
Default	:	0
Description	:	It will give results with given digit precision.
min-diff
DataType	:	number
Default	:	0
Description	:	This property is used to set the minimum difference between two range values.
min-discrete
DataType	:	number
Default	:	0.1
Description	:	This property is used to set the minimum discrete value. This is applicable only for discrete slider. Given value multiplied by the difference between the min and max value will be used as min discrete
aria
DataType	:	boolean
Default	:	false
Description	:	On setting true, aria attributes will be added for slider.
aria-label
DataType	:	string
Default	:	-
Description	:	This property is used to set the aria-label for slider handler.
Methods

You can provide the methods to lyte-slider either via script or HTML.

on-select
Description	:	This method is trigger whenever the slider value is selected
on-change
Description	:	This method is triggered whenever the slider value is changed on handler dragging.
before-render
Description	:	This method is invoked before rendering the component.
after-render
Description	:	This method is invoked after rendering the component.
Yields

You can render your own drop items by using yield

yield( description )
Description	:	All the elements given inside the yield template will be rendered instead of default slider scales.

---

## tags

### tags - overview

Tag

Tag UI component, helps the user select values from a list of values on typing into a text element. When the element is not present in the search result a new element is created.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tag.css"></link>
also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Basic Example

The example below shows the basic implementation of the lyte-tag component.

```javascript
<lyte-tag lt-prop-options={{items}} lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-placeholder="select a value"></lyte-tag>
```
```javascript
items: [ {
    'name': 'Volvo XC40',
    'value': 'Volvo',
}, {
    'name': 'Audi R8',
    'value': 'Audi'
}, {
    'name': 'Benz SLR McLaren',
    'value': 'Benz'
}, {
    'name': 'Fiat Punto',
    'value': 'Fiat'
}, {
    'name': 'Ford Mustang',
    'value': 'Ford'
}, {
    'name': 'Nissan Titan',
    'value': 'Nissan'
}, {
    'name': 'Skoda Octavia',
    'value': 'Skoda'
}, {
    'name': 'Ferrari F40',
    'value': 'Ferrari'
}, {
    'name': 'Chrysler 300',
    'value': 'Chrysler'
} ]
```

The tag component starts displaying results as soon as the user types in the text field.

When the Enter key or the comma key is pressed, the current item which has navigation is selected. The comma and enter key are the delimiters. When there are no items present, a new tag is created and added.

Items are searched based on the lt-prop-user-value key of each item. This can be changed to search based on other keys in the object usiing lt-prop-search-keys.

The datastructure of lt-prop-options follow a similar pattern to dropdown. Like dropdown you will need to pass a lt-prop-user-value and lt-prop-system-value which corresponds to the label of each item and a unique value to identify each individual item.

The lt-prop-selected-list contains the list of all selected values. It is an array of objects. You can also pass lt-prop-selected-list to the component to display an initial list of values.

This component uses the lyte-dropdown component inside it

Use the updateList and updateOptions utils to update the lt-prop-selected-list and lt-prop-options property.

Using Other Search Keys

You can use the lt-prop-search-keys attribute to search based on other keys in each object of lt-prop-options array. The lt-prop-search-keys is an array of strings.

```javascript
<lyte-tag lt-prop-search-keys='["name","type"]' lt-prop-options={{items}} lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-placeholder="select a value"></lyte-tag>
```
```javascript
items: [ {
    'name': 'Volvo XC40',
    'value': 'Volvo',
    'type': 'suv'
}, {
    'name': 'Audi R8',
    'value': 'Audi',
    'type': 'sports'
}, {
    'name': 'Benz SLR McLaren',
    'value': 'Benz',
    'type': 'coupe'
}, {
    'name': 'Fiat Punto',
    'value': 'Fiat',
    'type': 'hatchback'

}, {
    'name': 'Ford Mustang',
    'value': 'Ford',
    'type': 'coupe'
}, {
    'name': 'Nissan Titan',
    'value': 'Nissan',
    'type': 'truck'
}, {
    'name': 'Skoda Octavia',
    'value': 'Skoda',
    'type': 'sedan'
}, {
    'name': 'Ferrari F40',
    'value': 'Ferrari',
    'type': 'sports'
}, {
    'name': 'Chrysler 300',
    'value': 'Chrysler',
    'type': 'sedan'
} ]
```
Delimiters

Apart from the enter key and comma key that are normally used to create a tag, you can also use your own delimiters. In the example below, the space is used as a delimiter to the component.

```html
<lyte-tag lt-prop-delimiters='[" "]' lt-prop-search-keys='["name","type"]' lt-prop-options={{items}} lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-placeholder="select a value"></lyte-tag>
```
Descriptions

Each item appearing in the result after searching a text can also have a description attached to them. To set a description, you need to pass the lt-prop-description-value property which corresponds to a key in the object containing the description.

```javascript
<lyte-tag lt-prop-description-value="type" lt-prop-options={{items}} lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-placeholder="select a value"></lyte-tag>
```
```javascript
items: [ {
    'name': 'Volvo XC40',
    'value': 'Volvo',
    'type': 'suv'
}, {
    'name': 'Audi R8',
    'value': 'Audi',
    'type': 'sports'
}, {
    'name': 'Benz SLR McLaren',
    'value': 'Benz',
    'type': 'coupe'
}, {
    'name': 'Fiat Punto',
    'value': 'Fiat',
    'type': 'hatchback'

}, {
    'name': 'Ford Mustang',
    'value': 'Ford',
    'type': 'coupe'
}, {
    'name': 'Nissan Titan',
    'value': 'Nissan',
    'type': 'truck'
}, {
    'name': 'Skoda Octavia',
    'value': 'Skoda',
    'type': 'sedan'
}, {
    'name': 'Ferrari F40',
    'value': 'Ferrari',
    'type': 'sports'
}, {
    'name': 'Chrysler 300',
    'value': 'Chrysler',
    'type': 'sedan'
} ]
```

### tags - api

Properties

All properties must be prefixed with lt-prop.

options(lt-prop-options)
Description	:	This is an array of objects where each object represents a single item. Depending on the search text, this array is filtered and shown as a result in a dropbox to the user. You will also have to supply a lt-prop-user-value and lt-prop-system-value which correspond to the label and value to uniquely identify the item.
Datatype	:	array
user-value(lt-prop-user-value)
Description	:	This corresponds to the key in each object of the lt-prop-options array which will be used as the label to represent the item in the dropbox after filtering.
Datatype	:	string
system-value(lt-prop-system-value)
Description	:	This represents the key in each object of the lt-prop-options array which uniquely identifies the item.
Datatype	:	string
description-value(lt-prop-description-value)
Description	:	Apart from displaying a label for each item, you can also display a description for each item in the result dropbox. This represents the key in each object of lt-prop-options array which holds the description for that particular item.
Datatype	:	string
search-keys(lt-prop-search-keys)
Description	:	This represents the keys in each object of lt-prop-options array whose value will be used against the search text to decide whether they need to be shown in the resultant dropbox or not.
Default	:	lt-prop-user-value is used to filter the array
Datatype	:	array
selected-list(lt-prop-selected-list)
Description	:	This represents the selected values.
Datatype	:	array
delimiters(lt-prop-delimiters)
Description	:	The keys which when pressed will cause an item to be selected from the resulting dropbox or create a new tag when none exist in the resulting dropbox.
Datatype	:	array
Default	:	[',','Enter']
no-result(lt-prop-no-result)
Description	:	The text to be displayed incase of no item being present in the resulting dropbox.
Datatype	:	string
Default	:	No Results Found
dropdown(lt-prop-dropdown)
Description	:	Use this to pass attributes to the dropdown that is rendered inside the tag component. Refer the dropdown help documentation for the list of attributes that can be passed.
Datatype	:	object
Default	:	{}
placeholder(lt-prop-placeholder)
Description	:	This is used to set the placeholder string for the input rendered inside the tag component.
Datatype	:	string
event(lt-prop-event)
Description	:	This tells the event on which the dropbox must open. It can either be input or click.
Datatype	:	string
Default	:	input
case-sensitive(lt-prop-case-sensitive)
Description	:	This is used to tell the component to perform the search taking the case of the characters into account.
Datatype	:	boolean
Default	:	true
add-new-items(lt-prop-add-new-items)
Description	:	If this is set to true, then typing delimiters will create new items when no items are present in the search list. If it is set to false, then new items are not created when delimiters are typed.
Datatype	:	boolean
Default	:	true
box-yield(lt-prop-box-yield)
Description	:	Set this to true to yield the box of the lyte-dropdown inside the lyte-tag which is the list of items that get displayed when it is opened.
Datatype	:	boolean
Default	:	false
button-yield(lt-prop-button-yield)
Description	:	Set this to true to yield the button of the lyte-dropdown inside the lyte-tag which is the list of selected values.
Datatype	:	boolean
Default	:	false
external-search(lt-prop-external-search)
Description	:	Set this to true if you want to make an api call and set the result of the api call as the result of the tag's search.
Datatype	:	boolean
Default	:	false
prevent-duplicate(lt-prop-prevent-duplicate)
Description	:	This property prevents the tag from adding duplucate items into the selected list of the tag component.
Datatype	:	boolean
Default	:	false
type(lt-prop-type)
Description	:	The lt-prop-type specifies whether the tag component behaves like a dropdown or if it behaves like an input. If it behaves like an input, you cannot pass any items through lt-prop-options and you can only create new items.
Datatype	:	string
Default	:	dropdown
disabled(lt-prop-disabled)
Description	:	This is used to disable the lyte-tag component.
Datatype	:	boolean
Default	:	false
autocomplete(lt-prop-autocomplete)
Description	:	Say the search text in the input of the tag is bask and the first option shown in the resultant dropdown list is basket. Pressing delimeter key will select the basket item from the dropdown list. But instead if you want to select bask and not autocomplete the search text when the delimeter is pressed, you can set lt-prop-autocomplete to false.
Datatype	:	boolean
Default	:	true
duplicate-class(lt-prop-duplicate-class)
Description	:	Adds a class to the duplicate selected item
Datatype	:	string
open-when-empty(lt-prop-open-when-empty)
Description	:	Opens the dropdown list even if there is no search text
Datatype	:	boolean
Default	:	false
Methods

These are the methods of lyte-tag.

on-tag-creation
Description	:	This callback is fired when a new item is not present in the list of options passed through lt-prop-options is created. You can return your own object from here to add that to the selected list.
on-input
Description	:	This callback is fired everytime the user types in value into the search field.
on-before-add
Description	:	This callback is fired just before an item is added. Return false to stop the item from getting added.
on-item-rejected
Description	:	When an item is not added to the selected list because duplicates are prevented or the user returned false in onBeforeAdd, this callback is fired.
on-add
Description	:	Fired after an item is added to the selected list.
on-remove
Description	:	Fired when an element is removed from the selected list.
on-before-show
Description	:	This is fired when the tag is about to be opened. Return false to prevent the tag from being opened
Utility functions
.updateOptions()
Description	:	Use this util to update the lt-prop-options property of the tag.
.updateList()
Description	:	Use this util to update the lt-prop-selected-list property of the tag.
.reset()
Description	:	Use this util to reset the lt-prop-selected-list of the lyte-tag.

---

## text

### text - overview

Text
Introduction

Lyte-text, from the family of UI components, is used to show tooltip when the text content exceeds its container width. Lyte-text uses lyte-tooltip for showing tooltip.

Dependencies
```html
<!-- Individual css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-text.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-tooltip.css"> </link>

// For array of strings displaying
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-popover.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-hovercard.css"> </link>
```

The input content can be a string or an array of strings

String
Text overflow

Lyte-text will check its content on mouseenter and sets title for lyte-text tag if its content exceeds its container.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text"> </lyte-text>
```
Tooltip properties

You can directly set lt-prop-tooltip-config to lyte-text.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text" lt-prop-tooltip-config = '{ "position" : "bottom" }'> </lyte-text>
```
Prevent tooltip

You can prevent tooltip show even when text overflow ellipsis is applied to lyte-text by setting lt-prop-show as false.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text" lt-prop-show = false> </lyte-text>
```
Yielded text

You can provide yield to lyte-text by setting lt-prop-yield as true.

```html
<lyte-text lt-prop-yield = true lt-prop-value = "Showing long text using lyte-text">
<template is = "registerYield" yield-name = "lyte-text">
    <span> Showing long text using lyte-text  </span>
</template>
</lyte-text>
```
Array of strings
Displaying array of strings

In this you can render array of strings with lt-prop-array through lyte-text. If string contents exceeds its width remaining contents will be shown using a hovercard element.

Yield is not supported if array of strings is passed. By default hover card will be shown on hovering prefix element.

```html
<lyte-text lt-prop-array = '["Leads","Contacts","Deals","Reports","Mails","Accounts","Documents","Campaigns","Visits","Projects"]' style = "width:500px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;" lt-prop-width = 375>
				</lyte-text>
```
Min count

If none of the strings in the provided array is not fitting within component's available width, in such case you can display minimum number of strings by setting lt-prop-min-count

Displayed text will be shown in tooltip( when it gets hovered ) and the remaining items will be displayed in a hovercard.

```html
<lyte-text lt-prop-array = '["Some long text having Leads Contacts Deals Reports Mails","Accounts","Documents","Campaigns","Visits","Projects"]' style = "width:300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;" lt-prop-min-count = 1></lyte-text>
```
Tail text

With the tail support you can now show ellipsis at the middle of the text. Fixed tail content will be displayed after that. Regex matching the provided value will be consided as the tail text

```html
<lyte-text lt-prop-tail = "\..+$" lt-prop-value = "Some long file name.png" lt-prop-aria = true style = "width: 150px"></lyte-text>
```
Fill available

In array of strings if space is available one extra content will be rendered with ellipsis even if that particular item does not fit in that space

```html
<lyte-text lt-prop-fill-available = true lt-prop-array = '[ "Long content", "Short content", "Very short content" ]' style = "width: 300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;"></lyte-text>
```

Let us also see the result where lt-prop-fill-available is declared as false.

```html
<lyte-text lt-prop-fill-available = false lt-prop-array = '[ "Long content", "Short content", "Very short content" ]' style = "width: 300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;"></lyte-text>
```
Tag rendering

In this array of strings provided will be rendered as tags

```html
<lyte-text lt-prop-tag = true lt-prop-array = '[ "Lead", "Contacts", "Accounts", "Deals", "Reports", "Mails", "Campaign", "Visits", "Projects" ]' style="width: 400px;" lt-prop-suffix = " and &lt;span class ='prefixClass' tabindex = 0&gt;{0} others&lt;/span&gt;"  lt-prop-show-hovercard-on-click = true></lyte-text>
```
Ellipsis in non lyte-text

You can use ellipsis & hover tooltip in non lyte-text elements also. Render your text content with 'lyteTextEllipsisNode' class.

```html
<span class = "lyteTextEllipsisNode" style = "width:150px">Some long text having long value</span>
```

### text - api

Text
Introduction

Lyte-text, from the family of UI components, is used to show tooltip when the text content exceeds its container width. Lyte-text uses lyte-tooltip for showing tooltip.

Dependencies
```html
<!-- Individual css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-text.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-tooltip.css"> </link>

// For array of strings displaying
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-popover.css"> </link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/css-variables/ltr/lyte-ui-hovercard.css"> </link>
```

The input content can be a string or an array of strings

String
Text overflow

Lyte-text will check its content on mouseenter and sets title for lyte-text tag if its content exceeds its container.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text"> </lyte-text>
```
Tooltip properties

You can directly set lt-prop-tooltip-config to lyte-text.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text" lt-prop-tooltip-config = '{ "position" : "bottom" }'> </lyte-text>
```
Prevent tooltip

You can prevent tooltip show even when text overflow ellipsis is applied to lyte-text by setting lt-prop-show as false.

```html
<lyte-text lt-prop-value = "Showing long text using lyte-text" lt-prop-show = false> </lyte-text>
```
Yielded text

You can provide yield to lyte-text by setting lt-prop-yield as true.

```html
<lyte-text lt-prop-yield = true lt-prop-value = "Showing long text using lyte-text">
<template is = "registerYield" yield-name = "lyte-text">
    <span> Showing long text using lyte-text  </span>
</template>
</lyte-text>
```
Array of strings
Displaying array of strings

In this you can render array of strings with lt-prop-array through lyte-text. If string contents exceeds its width remaining contents will be shown using a hovercard element.

Yield is not supported if array of strings is passed. By default hover card will be shown on hovering prefix element.

```html
<lyte-text lt-prop-array = '["Leads","Contacts","Deals","Reports","Mails","Accounts","Documents","Campaigns","Visits","Projects"]' style = "width:500px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;" lt-prop-width = 375>
				</lyte-text>
```
Min count

If none of the strings in the provided array is not fitting within component's available width, in such case you can display minimum number of strings by setting lt-prop-min-count

Displayed text will be shown in tooltip( when it gets hovered ) and the remaining items will be displayed in a hovercard.

```html
<lyte-text lt-prop-array = '["Some long text having Leads Contacts Deals Reports Mails","Accounts","Documents","Campaigns","Visits","Projects"]' style = "width:300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;" lt-prop-min-count = 1></lyte-text>
```
Tail text

With the tail support you can now show ellipsis at the middle of the text. Fixed tail content will be displayed after that. Regex matching the provided value will be consided as the tail text

```html
<lyte-text lt-prop-tail = "\..+$" lt-prop-value = "Some long file name.png" lt-prop-aria = true style = "width: 150px"></lyte-text>
```
Fill available

In array of strings if space is available one extra content will be rendered with ellipsis even if that particular item does not fit in that space

```html
<lyte-text lt-prop-fill-available = true lt-prop-array = '[ "Long content", "Short content", "Very short content" ]' style = "width: 300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;"></lyte-text>
```

Let us also see the result where lt-prop-fill-available is declared as false.

```html
<lyte-text lt-prop-fill-available = false lt-prop-array = '[ "Long content", "Short content", "Very short content" ]' style = "width: 300px" lt-prop-suffix = " and &lt;span class ='prefixClass'&gt;{0} others&lt;/span&gt;"></lyte-text>
```
Tag rendering

In this array of strings provided will be rendered as tags

```html
<lyte-text lt-prop-tag = true lt-prop-array = '[ "Lead", "Contacts", "Accounts", "Deals", "Reports", "Mails", "Campaign", "Visits", "Projects" ]' style="width: 400px;" lt-prop-suffix = " and &lt;span class ='prefixClass' tabindex = 0&gt;{0} others&lt;/span&gt;"  lt-prop-show-hovercard-on-click = true></lyte-text>
```
Ellipsis in non lyte-text

You can use ellipsis & hover tooltip in non lyte-text elements also. Render your text content with 'lyteTextEllipsisNode' class.

```html
<span class = "lyteTextEllipsisNode" style = "width:150px">Some long text having long value</span>
```
Properties

All properties should be prefixed with lt-prop.

value
DataType	:	String
Default	:	
Description	:	Given value will be set as text content.
show
DataType	:	Boolean
Default	:	true
Description	:	If it is set to false, tooltip will not be shown even text overflow ellipsis is applied.
yield
DataType	:	Boolean
Default	:	false
Description	:	If it is set to true, yielded contents will be rendered.
array
DataType	:	Array of strings
Default	:	undefined
Description	:	If this property is given, the text that overflows from an array will be shown in a hovercard element.
suffix
DataType	:	String
Default	:	' '
Description	:	If the text overflows, the given suffix will be displayed along with the available text content. {0} will be replaced by hidden elements count.
hovercard
DataType	:	Stringified JSON
Default	:	{}
Description	:	All the properties of hovercard can be given as a single object.
separator
DataType	:	String
Default	:	,
Description	:	separator to be added while displaying array of strings.
width
DataType	:	String
Default	:	-
Description	:	Given value will be considered as component width. If width is not provided 'lyte-text' element's rendered width will be taken for calculation.
min-count
DataType	:	number
Default	:	0
Description	:	Given number of strings will be displayed even if they have exceeded actual component's width.
tooltip-config
DataType	:	Stringified JSON
Default	:	{}
Description	:	It will be set as tooltip config if displayed content from lt-prop-array is not fitted in component.
rerender
DataType	:	Boolean
Default	:	false
Description	:	When this property is set to true, given array will be rerendered again.
tail
DataType	:	String
Default	:	
Description	:	Regex matched string will be consided as tail string. Ellipsis will be applied for remaining string.
fill-available
DataType	:	Boolean
Default	:	false
Description	:	It will render one extra item from ltPropArray with ellipsis even if the space is not available.
show-hovercard-on-click
DataType	:	Boolean
Default	:	false
Description	:	Hovercard content's will be displayed in click event instead of hover.
hovercard-key
DataType	:	String
Default	:	
Description	:	With this property, you can provide valid JS key names. Hovercard will be opened in the provided keys. You can provide multiple keys.
tag
DataType	:	Boolean
Default	:	false
Description	:	Contents provided in ltPropArray will be rendered as a separate tags.
tabindex
DataType	:	String
Default	:	-1
Description	:	Given value will be set for tags and hovercard contents.
multi-line
DataType	:	Boolean
Default	:	false
Description	:	If this property is set to true, text will be displayed in multiple lines with ellipsis.
multi-line-count
DataType	:	Number
Default	:	
Description	:	This property will be used to set the number of lines to be displayed.
additional-space
DataType	:	number
Default	:	0
Description	:	This is for tag rendering . Provided additional space will be added for the each tags rendered.
Yields

You can render your own content by using yield.

yield ( description )
Description	:	All the elements given inside the yield template will be rendered instead of default DOM.

---

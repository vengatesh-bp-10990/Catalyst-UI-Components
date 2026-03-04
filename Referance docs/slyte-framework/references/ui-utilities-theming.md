# sLyte Utilities, Plugins & Theming

## Table of Contents

- [animate](#animate)
- [ariakeydown](#ariakeydown)
- [basictheme](#basictheme)
- [button](#button)
- [button-group](#button-group)
- [caret](#caret)
- [compiletheme](#compiletheme)
- [draggable](#draggable)
- [droppable](#droppable)
- [find](#find)
- [focusstack](#focusstack)
- [forslyteapp](#forslyteapp)
- [fullscreen](#fullscreen)
- [infinitescroll](#infinitescroll)
- [internationalization](#internationalization)
- [introduction](#introduction)
- [jwalk](#jwalk)
- [keyboardnavigator](#keyboardnavigator)
- [keynavigator](#keynavigator)
- [landmark](#landmark)
- [lazyload](#lazyload)
- [lazyrender](#lazyrender)
- [listselection](#listselection)
- [moment](#moment)
- [multiplethemes](#multiplethemes)
- [plugins](#plugins)
- [popularcallbacks](#popularcallbacks)
- [preferinglyteuicomponents](#preferinglyteuicomponents)
- [readingmask](#readingmask)
- [requestqueue](#requestqueue)
- [resize](#resize)
- [scrollbar](#scrollbar)
- [scrollspy](#scrollspy)
- [scrollto](#scrollto)
- [searchplugin](#searchplugin)
- [shortcut](#shortcut)
- [sortable](#sortable)
- [sticky](#sticky)
- [stylesandvariables](#stylesandvariables)
- [tablenavigator](#tablenavigator)
- [themeinguicomponents](#themeinguicomponents)
- [themes](#themes)
- [thingstoknow](#thingstoknow)
- [trapfocus](#trapfocus)
- [utilyte](#utilyte)
- [workingwithuicomponents](#workingwithuicomponents)

## animate

### animate - overview

Animate

Lyte animate is plugin used to perform animation on HTML elements. Lyte animate uses CSS transition property for animation.

Default animation duration is 400ms, default timing function is 'ease'. If Multiple animations are used for same elements, all are pushed into a queue and executed after previous one's success.

Dependencies
```html
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-animate"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
----or----
<!-- Importing files -->
import "node_modules/@zoho/lyte-ui-component/plugins/lyte-animate.js"
import $L from "@zoho/lyte-dom";
```
Slide animation

Slide animation is used to show / hide element with slide effect( height ). You can use slideDown for showing an element, slideUp for hiding and element and slideToggle for toggling between two states

```javascript
$L ( someSelector ) . slideDown ( duration , timingFunction , callbackFunction )
```
```javascript
$L ( someSelector ) . slideUp ( duration , timingFunction , callbackFunction )
```
```javascript
$L ( someSelector ) . slideToggle ( duration , ease , callbackFunction )
```
Fade animation

Fade animation is used to show / hide element with fade effect ( opacity ). You can use fadeIn for showing an element, fadeOut for hiding and element and fadeToggle for toggling between two states. you can use fadeTo property for fading to a particular opacity value

```javascript
$L ( someSelector ) .fadeOut ( duration , timingFunction , callbackFunction )
```
```javascript
$L ( someSelector ) . fadeIn ( duration , ease , callbackFunction )
```
```javascript
$L ( someSelector ) . fadeToggle ( duration , ease , callbackFunction )
```
```javascript
$L ( someSelector ) . fadeTo ( value , duration , ease , callbackFunction )
```
Show hide animation

This is used for showing / hiding elements. It will use margin, padding, height, width for animation. if duration is not provided it will perform show/hide without animation effects

```javascript
$L ( someSelector ) . show ( duration , timingFunction , callbackFunction ) // for normal Show $L ( someSelector ) . show ( )
```
```javascript
$L ( someSelector ) . hide ( duration , timingFunction , callbackFunction ) // for normal hide $L ( someSelector ) . hide ( )
```
```javascript
$L ( someSelector ) . toggle ( duration , ease , callbackFunction ) // for normal toggle $L(someSelector).toggle()
```
Custom animation

This is used for performing custom animation. you can provide all animation properties in a single object. You can also perform chain animation.

Element should have some positions for positioning property animations

```javascript
$L ( someSelector ) . animate ( { left : 300 , transform : 'scale(0.5)' } , 400 , callback )
```
```javascript
$L ( someSelector ) . animate ( { left : '+=100%' } , 1000 , callback )
```
```javascript
$L ( someSelector ) . animate( { left : '+=100%' } , 500 ) . animate( { left : 0 } , 500 , callback )
```
Animation finish

This is used for finishing current running animation and all the queued animations

```javascript
$L( someSelector ).finish()
```

---

## ariakeydown

### ariakeydown - overview

AriaKeyDown

Dependencies
```html
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-ariaKeyDown"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
----or----
<!-- Importing files -->
import node_modules/@zoho/lyte-ui-component/plugins/lyte-ariaKeyDown.js
import $L from "@zoho/lyte-dom";
```
ARIA roles - Keyboard Interactions

NOTE: Only by assigning / setting the value of 'lt-prop-aria-keydown' attribute to "true" enables the keyboard interactions for the element.




    This plugin is used to add keydown interactions for Non native HTML elements mimicking native HTML elements. An example would be a div which is styled like a button. The div will not fire click events when it is focussed with tab key and enter/space key is pressed. By using this plugin, and adding the role attribute, tab index and lt-prop-aria-keydown= "true", the div will now behave like a native button.


NOTE: Note that it is mandatory to provide the click and mouse event functions so that it can be activated on keyboard interations. For non-focusable HTML elements(div/span) it is necessary to add the tabindex attribute to the respective element.

Button

For the "button" role, Enter and Spacebar keys are enabled, which activate the onclick function or trigger the click event when the corresponding element is the activeElement.

Button
Checkbox

The Spacebar key checks and unchecks the checkbox when the role of the ARIA element is set to "checkbox".

 Check the box
```html
<span id="chk" role="checkbox" aria-checked= "false" lt-prop-aria-keydown = "true" tabindex="1" aria-labelledby="chk1-label" onclick="{{action("checkboxFn")}}"> </span>
<label id="chk1-label"> Check the box </label>
```
```javascript
function checkboxFn(e) {
  let ariaCheckedVal = $L("#chk").attr("aria-checked");
  if (ariaCheckedVal === "true") {
    $L("#chk").attr("aria-checked", "false");
  } else {
    $L("#chk").attr("aria-checked", "true");
  }
}
```
```CSS
#chk,#chk1-label {
    user-select: none;
    font-size: 16px;
}
#chk:focus {
    border: 0.2px solid #0198e1;
  }
[aria-checked="true"]::before{
    content: "[x]";
  }

[aria-checked="false"]::before {
    content: "[ ]";
}
```
Link

Pressing the enter key when the ARIA role is "link", enables the following up of the corresponding hyperlink. "data-href" attribute is mandatory for the "link" role.

Lyte
Radio Group

In ARIA role "radiogroup", the Spacebar checks the radio box. The Arrow Up and Arrow Right keys checks the previous radio box, while the Arrow Down and Arrow Left keys checks the next radio box.

Note: The individual radio boxes should contain the role as "radio" [i.e., role = "radio"] also containing the aria-attribute, "aria-checked" is mandatory. The element containing all the individual radio boxes should have role as "radiogroup".

Choose a color:

 Purple

 Aqua

 Magenta

 Cyan

Switch

The Enter and Space key toggles the "aria-checked" attribute of the element between "true" and "false". The CSS must be done in order to get the appearance and functionality of a switch. "aria-checked" attribute is mandatory.

 off on

---

## basictheme

### basictheme - overview

Basic Setup

The following series of documentations will be a step by step explanation of how to do theming in lyte and lyte-ui-components.

Requirements

Before proceeding further, it is important to know lessjs, slyte-cli and your way around a basic command line shell(this documentation uses terminal commands) to have an understanding of what is happening. These documents will try to explain functionalities of less/slyte-cli but it would be better to read about them before proceeding further. The document also assumes that you have nodejs and slyte-cli installed.

Creating an App

To be able to use themeing in slyte, you will need a slyte app. To create one use the following example command in your terminal:

```javascript
slyte new blog-app
```

Running the above command, will create a folder called blog-app. Move into the newly created folder.

```html
cd blog-app
```
Setting Up An Environment

First create a directory inside the blog-app directory.

```javascript
mkdir css
```

This directory will contain the less files required for themeing. You can also have your own name for the directoy. To give your own name, open build.js file in build/ folder and in the setCustomConfiguration function, change the argument of path.join() for themes key. (The build/ folder will be found inside the blog-app folder that you moved into)

```javascript
setCustomConfiguration : function(options) {
   // other code
    var folders = {
        // other code
        themes : path.join('css'), // Change the argument to css to something you want.
        // other code
    };
    // other code
}
```

After creating the themeing folder(css/), it is required to add the less configuration file. The name of the file is less-min-conf.json and should be created inside the build/ folder which can be found inside the blog-app folder created at the start.

Move into the build folder and create the file

```javascript
cd build/
touch less-min-conf.json
```

In the next section, we will see how to add a less file for our component and how to compile it to get an output.

---

## button

### button - overview

Button

A button, being a basic UI component, is a control element that can be used to trigger an event.

Dependencies
```javascript
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-button.js" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-button.css"> </link>
also requires a sprite file - ui-components/theme/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of a button is shown below.

Anything added to the text yield of the button is added as the button's innerHTML.

Simple structure

Let us see the structure of lyte-button

Tags Used

Use the following tags to get a simple structure of a button

lyte-button - Tag for the button component
Semantic structure
```javascript
<lyte-button >

</lyte-button>
```
```javascript
<lyte-button >
   <template is="registerYield" yield-name="text" >
      Primary
  </template>
</lyte-button>
```
Button syntax - with and without yield
```javascript
<lyte-button>

</lyte-button>
```
```javascript
<lyte-button >
   <template is="registerYield" yield-name="text" >
      Primary
  </template>
</lyte-button>
```
Default Button

A default button.

```html
<lyte-button>
    <template is="registerYield" yield-name="text">
        Default
    </template>
</lyte-button>
```
Default
Features
Different Apperance

Let us see the different apperances of lyte-button

Primary Button

To render a primary button make use of the lt-prop-appearance attribute and set it to primary .

```html
<lyte-button lt-prop-appearance="primary">
    <template is="registerYield" yield-name="text">
        Primary
    </template>
</lyte-button>
```
Primary
Secondary Button

You can render a secondary button by setting the lt-prop-appearance attribute to secondary .

```html
<lyte-button lt-prop-appearance="secondary">
    <template is="registerYield" yield-name="text">
        Secondary
    </template>
</lyte-button>
```
Secondary
Failure Button

You can set lt-prop-appearance to failure to render a failure button.

```html
<lyte-button lt-prop-appearance="failure">
    <template is="registerYield" yield-name="text">
        Failure
    </template>
</lyte-button>
```
Failure
Success Button

You can set lt-prop-appearance to success to render a success button.

```html
<lyte-button lt-prop-appearance="success">
    <template is="registerYield" yield-name="text">
        Success
    </template>
</lyte-button>
```
Success
Filled Button

A button can take in a lt-prop-background-color as an attribute to create filled buttons. It can be any valid color value - named/rgb/hsl/hex/global. Lyte-button attempts to set the style attribute with the background property and the border property. It should be noted that the lt-prop-style takes higher precedence over the lt-prop-background-color property. So a background-color set through lt-prop-style will be the final style of the button.

```html
<lyte-button lt-prop-background-color="#42A5F5">
    <template is="registerYield" yield-name="text">
        Blue
    </template>
</lyte-button>
```
Blue Cyan Teal Amber Orange Brown Grey Black
Outlined Buttons

A button can also take in a lt-prop-color attribute. This is used to create outlined buttons. It can be any valid color value - named/rgb/hsl/hex/global. Lyte-button attempts to set the style attribute with the border property and the color property. It should be noted that the lt-prop-style attribute takes higher precedence over the lt-prop-color attribute. So a color set through lt-prop-style takes higher precedence over the lt-prop-color attribute.

```html
<lyte-button lt-prop-color="#AA00FF">
    <template is="registerYield" yield-name="text">
        Purple
    </template>
</lyte-button>
```
Purple Indigo Blue Cyan Teal Violet Amber Orange
Brown Grey Black
Buttons Of Different Sizes

You can also set render buttons of different sizes using the lt-prop-size attribute.

```html
<lyte-button lt-prop-size="small">
    <template is="registerYield" yield-name="text">
        small
    </template>
</lyte-button>
```
Extra small Small Regular Large
Customizability
Customized Buttons

You can customize lyte-button the way you want by making use of the lt-prop-appearance, lt-prop-color, and lt-prop-background-color attributes and the text yield.

Your class can have some css which you can add to the lyte-button by making use of the lt-prop-class attribute.

The lt-prop-style attribute appends your styles to the style attribute of the button element created inside.

The lt-prop-color adds a color and a border to the style attribute of the button element created inside.

The lt-prop-background-color adds a background and a border to the style attribute of the button element created inside.

The styles provided through lt-prop-style are appended after the styles generated by lt-prop-color or lt-prop-background-color attribute. So the lt-prop-style takes precedance over the other styles.

```html
<lyte-button lt-prop-style="border-radius: 3px;background-color: #3152a4; color: white; border: solid 1px #3152a4;">
    <template is="registerYield" yield-name="text" >
        <div>
            <i class="fab fa-facebook-square" style="top: 2px; left: -1px; position: relative;"></i>
            <span class="fbButtonSpan">
                Facebook
            </span>
        </div>
    </template>
</lyte-button>
```
```html
<lyte-button lt-prop-background-color="#1b9de8">
    <template is="registerYield" yield-name="text">
        <i class="fas fa-upload" style="left: -3px; position: relative;"></i>
        <span class="borderLeftUpload"> Upload </span>
    </template>
</lyte-button>
```
```html
<lyte-button lt-prop-background-color="#03c300">
    <template is="registerYield" yield-name="text">
        <i class="fas fa-download" style="left: -3px; position: relative;"></i>
        <span class="borderLeftUpload">Download</span>
    </template>
</lyte-button>
```
```html
<lyte-button lt-prop-background-color="#ed4843">
    <template is="registerYield" yield-name="text">
        <i class="fas fa-trash" style="top: 2px; left: -2px; position: relative;"></i>
        <span class="borderLeftUpload">Trash</span>
    </template>
</lyte-button>
```
```html
<lyte-button lt-prop-background-color="black">
    <template is="registerYield" yield-name="text">
        <i class="fas fa-archive" style="top: 2px; left: -2px; position: relative;"></i>
        <span class="borderLeftUpload"> Archive </span>
    </template>
</lyte-button>
```
 Facebook
  Upload  Download  Trash  Archive
Native Events of Button

The lyte-button tag supports click, focus and blur functions. You can querySelect a lyte-button from the DOM and call the necessary function. The click function fires a click event, the focus focuses the button and the blur removes focus from the button.

```javascript
document.querySelector( 'lyte-button' ).click();
```
```javascript
document.querySelector( 'lyte-button' ).focus();
```
```javascript
document.querySelector( 'lyte-button' ).blur();
```
Foot Notes

You can bind events to the button by simply attaching it to the lyte-button tag.

```html
<lyte-button onclick="{{action('clickHandler')}}">
    <template is="registerYield" yield-name="text">
        Fire Action
    </template>
</lyte-button>
```
```javascript
static actions()  {
    return{
       clickHandler : function () {
        // Do your Stuff
       }
    }
}
```
Fire Action

### button - api

Properties

All the properties must be prefixed with lt-prop.

name(lt-prop-name)
Description	:	This is used to set the name attribute of the button that is rendered inside.
Datatype	:	string
disabled(lt-prop-disabled)
Description	:	This is used to disable the lyte-button.
Datatype	:	boolean
Default	:	false
auto-focus(lt-prop-autofocus)
Description	:	This is used to autofocus the button when the page gets rendered or refreshed at the start. And lt-prop-focus comes into the picture while rendering a particular component.
Datatype	:	boolean
Default	:	false
appearance(lt-prop-appearance)
Description	:	This is used to render different emotive buttons. A primary button for an action or a success button for a positive response.
Datatype	:	string
Default	:	default
Id(lt-prop-id)
Description	:	This is used to set the id attribute of the button.
Datatype	:	string
type(lt-prop-type)
Description	:	Set the type attribute of the button.
Datatype	:	string
Default	:	button
value(lt-prop-value)
Description	:	This is used to set the value attribute of the button.
Datatype	:	string
tabindex(lt-prop-tabindex)
Description	:	This is used to set the tabindex attribute of the button.
Datatype	:	string
style(lt-prop-style)
Description	:	This appends styles to the style attribute of the button. The style attribute is appended only after the styles generated from the lt-prop-color and lt-prop-background-color attribute gets appended.
Datatype	:	string
size(lt-prop-size)
Description	:	This is used to specify the size of the rendered button.
Datatype	:	string
Default	:	default
background-color(lt-prop-background-color)
Description	:	This is used to set the background-color and the border of the button.
Datatype	:	string
color(lt-prop-color)
Description	:	This is used to set the color and the border of the button. If the lt-prop-background-color property is also specified, then the background and border is set as the lt-prop-background-color attribute and the color property is set as the lt-prop-color attribute.
Datatype	:	string
class(lt-prop-class)
Description	:	This is used to set the class attribute of the button.
Datatype	:	string
lyte-shortcut(lyte-shortcut)

This property of lyte-button does not require lt-prop as prefix. Rather, it can just be used as lyte-shortcut.

Description	:	This is used to set a shortcut which clicks this button when shortcut keys are pressed. You can also set multiple shortcuts for the button. In the first example, control + a, clicks the button and in the second example, either control + a or control + b opens the button.
Datatype	:	string




To learn more about shortcuts, visit the help doc of shortcut plugin.

aria-button(lt-prop-aria-button)
Description	:	The aria-button attribute is used to set the ARIA attributes to button element rendered inside the lyte-button component.
Datatype	:	object
Utilities

The following are the Utility functions of lyte-button.

.click()
Description	:	This invokes a click function on the lyte-button.
.focus()
Description	:	This focuses the button.
.blur()
Description	:	This removes focus from a button.

---

## button-group

### button-group - overview

Button Group

Button Group, from the list of UI components helps to group the lyte-buttons.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-buttongroup.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-grouper.css"> </link>
```
Basic

Simple button-group component can be defined as below. You should define lyte-button within the lyte yield.

Note : In lyte-button-group, lt-prop-value is a mandatory attribute in lyte-button.

```html
<lyte-button-group>
    <template is="registerYield" yield-name="yield">
        <lyte-button lt-prop-value="button1">
            <template is="registerYield" yield-name="text">
                Button1
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button2">
            <template is="registerYield" yield-name="text">
                Button2
            </template>
        </lyte-button>
    </template>
</lyte-button-group>
```


Checkbox

lt-prop-type can be defined as checkbox, so that lyte-button-group can act as checkbox(i.e multiple buttons can be selected at a time). By default, the value of lt-prop-type is checkbox.


```html
<lyte-button-group lt-prop-type="checkbox">
    <template is="registerYield" yield-name="yield">
        <lyte-button lt-prop-value="button1">
            <template is="registerYield" yield-name="text">
                Button1
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button2">
            <template is="registerYield" yield-name="text">
                Button2
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button3">
            <template is="registerYield" yield-name="text">
                Button3
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button4">
            <template is="registerYield" yield-name="text">
                Button4
            </template>
        </lyte-button>
    </template>
</lyte-button-group>
```

Note : lt-prop-selected-values is used to set the array of values for the checkbox buttongroup. This property will not work for radio buttongroup(type as radio).

Radiobutton

lt-prop-type can be defined as radiobutton, so that lyte-button-group can be act as radiobutton(i.e single button can be selected at a time).


```html
<lyte-button-group lt-prop-type="radiobutton">
    <template is="registerYield" yield-name="yield">
        <lyte-button lt-prop-value="button1">
            <template is="registerYield" yield-name="text">
                Button1
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button2">
            <template is="registerYield" yield-name="text">
                Button2
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button3">
            <template is="registerYield" yield-name="text">
                Button3
            </template>
        </lyte-button>
    </template>
</lyte-button-group>
```



Note : lt-prop-selected is used to set the value for the radio buttongroup. Only one radio button can be selected at a time. This property will not work for checkbox buttongroup(type as checkbox).

Alignment

lt-prop-alignment is used to decide, whether the lyte-button-group to be displayed in Horizontal or Vertical manner.

```html
<lyte-button-group lt-prop-alignment="Horizontal">
    <template is="registerYield" yield-name="yield">
        <lyte-button lt-prop-value="button1">
            <template is="registerYield" yield-name="text">
                Button1
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button2">
            <template is="registerYield" yield-name="text">
                Button2
            </template>
        </lyte-button>
        <lyte-button lt-prop-value="button3">
            <template is="registerYield" yield-name="text">
                Button3
            </template>
        </lyte-button>
    </template>
</lyte-button-group>
```

### button-group - api

Properties

All properties should be prefixed with lt-prop.

Type
Name	:	Type( lt-prop-type )
DataType	:	string
Default	:	checkbox
Description	:	lt-prop-type can be defined as checkbox or radiobutton, so that lyte-button-group can act as checkbox or radiobutton.
Alignment
Name	:	alignment( lt-prop-alignment )
DataType	:	string
Default	:	Horizontal
Description	:	With this property, you can choose to display the lyte-button-group either in horizontal or in vertical manner.
Appearance
Name	:	appearance( lt-prop-appearance )
DataType	:	string
Default	:	line
Description	:	This property is used to change the appearance of lyte-button-group.
Selected values
Name	:	selected-values( lt-prop-selected-values )
DataType	:	array
Default	:	[ ]
Description	:	This property is used to set the array of values for the checkbox buttongroup. Changing lt-prop-selected-values through script, does not invoke any methods.
Selected
Name	:	selected( lt-prop-selected )
DataType	:	string
Default	:	""
Description	:	This property is used to set value for the radio buttongroup. Changing lt-prop-selected through script, does not invoke any methods.
Selected class
Name	:	selected-class( lt-prop-selected-class )
DataType	:	string
Default	:	lyteBtnSelected
Description	:	This property is used to overwrite the default class for the selected button.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	auto
Description	:	This property helps you to define width of the button group.
Fire On Init
Name	:	fire-on-init( lt-prop-fire-on-init )
DataType	:	boolean
Default	:	false
Description	:	It fires callbacks when the buttongroup is rendered. This happens only when the ltPropSelcted or ltPropSelectedValues is given.
Methods

The following are the provided methods of lyte-button-group.

on-before-select
Name	:	on-before-select
Description	:	This gets executed before the button is selected.
ReturnValue	:	Returning false from this callback will prevent lyte-button-group from selecting the button.
on-select
Name	:	on-select
Description	:	This gets executed when the button is selected.
on-before-unselect
Name	:	on-before-unselect
Description	:	This gets executed before the button is unselected.
ReturnValue	:	Returning false from this callback will prevent lyte-button-group from unselecting the button.
on-unselect
Name	:	on-unselect
Description	:	This gets executed when the button is unselected.
on-changed
Name	:	on-changed
Description	:	This gets executed when the state(selected or unselected) of the lyte-button-group is changed.

---

## caret

### caret - overview

Caret

A plugin that gives you the position of the caret inside an <input> or <textearea> or content editable element.

Dependencies
```html
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-caret.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "node_modules/@zoho/lyte-ui-component/plugins/lyte-caret.js"
import $L from "@zoho/lyte-dom";
```
Parameters

Caret have three parametes -

query - the query determines the calculation to performed and the value to be returned from that calculation. Query can be any one of the 3 pre-defined values - pos, position, offset.
value - it specifies the caret position. It accepts integer value. It is optional.
iframe - if the input is inside an iframe then this parameter specifies that iframe. It accepts object as value which has iframe key where the user have to pass the iframe DOM element. It is optional. eg : {iframe : iframeElement}
```html
<textarea class = "selector" > </textarea>
```
```Javascript
$L('.selector').caret(query [, value, iframe ]);
$L('.selector').caret(query [, value ]);
$L('.selector').caret(query [, iframe ]);
```
Query

The value provided to the query parameter determines the action to be performed. Query can be 3 types - pos, position and offset. User can provide any one of these to the query parameter.

pos - It will either set or return the caret positon. If some valid integer value is passed along with the pos query, then the caret position will be changed to the given value else it will return the current caret position.
position - It returns the left, top and height of the caret based on the input's left and top values that is relative to the input. For input or textarea, if some integer value is passed along with the position query then, the caret will be set to the given value position and then its left, top and height will be calculated or else the left and top values will be calculated based on the caret's current position. For content editable, position will always return left and top value relative to the element based on the current caret position irrespective of any integer value passed or not.
offset - It returns the left, top and height of the caret based on the viewport's left and top values that is it's position relative to the viewport. For input or textarea, if some integer value is passed along with the offset query then, the caret will be set to the given value position and then its left, top and height will be calculated or else the left and top values will be calculated based on the caret's current position. For content editable, offset will always return left and top value relative to the viewport based on the current caret position irrespective of any integer value passed or not.
```javascript
$L("selector").caret("pos"); //Returns caret position
$L("selector").caret("pos" , 20); //Sets caret position
$L("selector").caret("pos" , 10 , {iframe : iframeDOMObject}); //Sets caret position in input or textarea in the sepcified iframe DOM element.
```
```javascript
$L("selector").caret("position"); //Returns left, top and height of the caret relative to input
$L("selector").caret("position" , 20); //Sets caret to given integer value(only for input and textearea) and returns it's left, top and height relative to input
$L("selector").caret("position" , 10 , {iframe : iframeDOMObject}); //Sets caret to given integer value(only for input and textearea) and returns it's left, top and height relative to input.
```
```javascript
$L("selector").caret("offset"); //Returns left, top and height of the caret relative to viewport
$L("selector").caret("offset" , 20); //Sets caret to given integer value(only for input and textearea) and returns it's left, top and height relative to viewport
$L("selector").caret("offset" , 10 , {iframe : iframeDOMObject}); //Sets caret to given integer value(only for input and textearea) and returns it's left, top and height relative to viewport.
```
Example - Textarea

An example showing use of caret in textarea.

```html
<textarea id = "ltarea" value = "Type something to get the caret position!!"> </textarea>
<lyte-input id = "ltarea" lt-prop-value = "Type something to get the caret position!!" lt-prop-direction = 'vertical' lt-prop-type = "textarea"> </lyte-input>
```
```javascript
Gives left and top relative to the textarea -
$L('#ltarea').caret('position');

Gives left and top relative to the viewport -
$L('#ltarea').caret('offset');
```
Example - Content Editable

An example showing use of caret in content editable <div>.

```html
<div class = "selector1" contentEditable="true">
    Type <b> something </b> to get the <i> caret </i> position.
</div>
```
```javascript
Gives left and top relative to the div -
$L('.selector1').caret('position');

Gives left and top relative to the viewport -
$L('.selector1').caret('offset');
```
Example - iframe

An example showing use of caret in content editable <div>.

```html
<iframe id = "iframe1" src = "" class = "inputor" > </iframe>
```
```javascript
var iframeObj = document.querySelector("#iframe1");

Gives left and top relative to the div -
$L('.selector1').caret('position' , { "iframe" : iframeObj });

Gives left and top relative to the viewport -
$L('.selector1').caret('offset' , { "iframe" : iframeObj });
```

---

## compiletheme

### compiletheme - overview

Compiling a Less file
Creating the File

First we need to create the less file we need to compile. Since we already have a welcome-comp in our app(you can check this by opening the components/ folder), we will create a corresponding less file for this component.

To do this, move into the css folder we created in the previous section and create a folder called styles/ inside it(The styles/ folder is created to separate the styles and variables - more on this later).

Move into the styles folder and create a less file called welcome-comp.less

```javascript
cd css
mkdir styles
cd styles
touch welcome-comp.less
```
Adding Styles

Open the less file that you have created and add styles inside it. Since our welcome-comp has a h1 tag inside it, we will add it a color

```javascript
h1 {
    color: blue;
}
```
Configuring Build

Once you have added the styles into the file, then go back to the root directory of your app. There you will find a build/ folder. Move into the build folder and open build.js with your favourite editor. Try searching for options.theming. Initially, this key would be set to false. Make it true.

```javascript
cd ../../ //Move to the root folder
cd build/
open build.js
```
```javascript
// other code
build: async function (options) {
  /* watcher */
  buildOptions = options;
  options.theming = true; // Change this to true
  options.sourceMap = false;
}
```

Now inside the same build/ folder, open the less-min-conf.json file. We created this file at the end of the last section and we called it the configuration file. This file helps converting the less file we created into css files. This conversion happens during lyte build(it even watches the files and compiles files on the fly). Add the following:

```javascript
{
    "welcome-comp.css": [ "styles/welcome-comp.less" ]
}
```

In the above example, it can be seen that the welcome-comp.less we created is compiled to the welcome-comp.css file. You can have multiple less files in the right hand side and when any one of them change the css file is generated.

It can be seen that the path of the files is relative to css/ folder that we have created.

Add the following code to compile the Less file to CSS file.

```javascript
var json, data;
try {
  data = fs.readFileSync(path.join(options.root, 'build/less-min-conf.json'), 'utf-8');
  json = JSON.parse(data);

    for (key in json) {
        await buildUtils.compileThemes({
          src: json[key],
          dist: 'compiledCSS/' + key
        });
  }
} catch (e) {
  options.log.user({
    msg: e.message,
    color: 'red'
  })
  // To stop the build process incase of any error
  // process.exit()

}
```

This reads the less min-config.js file and creates the corresponding CSS file from the Less file.

Here, src points the Less file that has to be compiled and the dist points the location where the CSS file will reside.

Compile

Once done, then it is time to compile. Move to the root folder and run slyte build.

```javascript
cd..
slyte build
```

Now if you open the dist/ folder that is created and open the complied css/ folder inside it you will see the welcome-comp.css file. Again it can be seen that the output path is relative to the css folder.

Structure

This is the final folder structure.

build/

build.js

less-min-conf.json

components/

javascript/

welcome-comp.js

templates/

welcome-comp.html

dist/

css/

styles/

welcome-comp.less

welcome-comp.css

css/

styles/

welcome-comp.less

Result

Get the created compiled css file into your index.html file using a link tag and then you should be able to see the text color of the h1 tag turn to blue after running slyte serve.

```html
<link rel="stylesheet" href="dist/css/welcome-comp.css" />
```
```javascript
slyte serve // To see the output in localhost:3000
```

---

## draggable

### draggable - overview

Draggable

Draggable allows any DOM element to be moved using the mouse pointer.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-draggable.css"> </link>
<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-draggable.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-droppable.js"> </script>

<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-draggable.js";
import "@zoho/lyte-ui-plugins/plugins/lyte-droppable.js"
import $L from "@zoho/lyte-dom";
```
Basic Draggable

A basic draggable helps in dragging the draggable object within the viewport by clicking on it.

```javascript
$L("#selector").draggable();
```
Vertical Draggable

If "vertical" is provided as the value of the orientation property then the draggable object can be moved vertically only.

```javascript
$L("#selector").draggable({
    orientation : "vertical"
});
```
Horizontal Draggable

If "horizontal" is provided as the value of the orientation property then the draggable object can be moved horizontally only.

```javascript
$L("#selector").draggable({
    orientation : "horizontal"
});
```
Revert Draggable

It returns the draggable object to its initial position when false is returned from the onStop callback.

```javascript
$L("#selector").draggable({
    onStop : function(){
        return false;
    }
});
```
Destroy

To destroy the draggable behaviour of the elements, call the draggable method with "destroy" as the arguement passed to the method.

eg:  

```javascript
$L("#selector").draggable( "destory" );
OR
$L(".selector").draggable( "destory" );
```
Draggable - Using Handle

It allows dragging only when the cursor is over specific elements which are mentioned in the array passed to the handle property.

```javascript
$L("#selector").draggable({
    handle : [ "#element1" , "#element2" ]
});
```
Draggable Along With Sortable

Draggable elements can be sorted with the elements of sortable list. To enable this, provide the selector of the sortable list as a value to the connectToSortableproperty. Consider the below example, where the helper property is used to return a clone of the draggable element which can be then dragged and dropped in the sortable list. Once dropped in the sortable list, it turns into a sortable item.

Other properties that can be used for making a draggable item work with sortable are placeholder and disabled property. Specific method like onPlaceholder is provided to work with sortable elements.


```javascript
$L("#selector").draggable({
    connectToSortable : ".sortableElem",
    helper : function(elem){
        return elem.cloneNode(true) ;
    }
});
```
Callbacks - usage

The example below provides an idea about when the callbacks are invoked. Drag the below element to check how it works. For more details about the callbacks or methods, head to the API section.

```javascript
$L("#selector").draggable({
    onReady : function(arguments){
        \\Do Something
    },
    onStart : function(arguments){
        \\Do Something
    },
    onDragStart : function(arguments){
        \\Do Something
    },
    onDrag : function(arguments){
        \\Do Something
    },
    onBeforeStop : function(arguments){
        \\Do Something
    },
    onStop : function(arguments){
        \\Do Something
    }
});
```

### draggable - api

Properties

The following are the properties of draggable component that has to be provided during initialization.

Handle
Name	:	handle
DataType	:	array
Default	:	[ ]
Description	:	An array of selector(s) to whom the dragging properry is confined to.
Orientation
Name	:	orientation
DataType	:	string
Default	:	default
Description	:	This property defines axis in which the items can be dragged i.e., vertically or horizontally or both.
Restrict
Name	:	restrict
DataType	:	string
Description	:	Restricts the element(s) matching the selector(s) from being draggable. For more than one selector, they should be comma seperated.
Helper
Name	:	helper
DataType	:	string / function
Default	:	string - original
Description	:	It allows the helper element to determine what has to be displayed while dragging.
Value types supported :
String : If set to "original", then the element on which mousedown happened will be dragged. This is the default value. And it also lets you to provide clone with which the clone of the element on which mousedown happens, will be dragged.
Function : A function that will return a DOM element while dragging.
Connect to sortable
Name	:	connectToSortable
DataType	:	string
Description	:	It allows the draggable element to be dropped into the specified sortables. Using this option a draggable can be dropped onto a sortable list and then becomes part of it.
Note : Requires the lyte-sortable plugin to be included.
Cursor at
Name	:	cursorAt
DataType	:	object
Description	:	Moves the draggable element, so that the cursor always appears to drag from the given position.
Note :Object value consists of either left or top attribute or both.
Placeholder
Name	:	placeholder
DataType	:	string
Description	:	It specifies the class which will be bound to the placeholder element. This placeholder element is useful when the draggable can be dropped into the specified sortable list. It helps you to overide the class which is bound to placeholder element.
Disabled
Name	:	disabled
DataType	:	string
Description	:	It specifies the class that will be bound to the placeholder whenever false is returned from the onPlaceholder callback. It also helps you to overide the class which is bound to placeholder element on returning false.
Append to
Name	:	appendTo
DataType	:	string
Default	:	parent
Description	:	It specifies the element to which the draggable element will be appended while dragging.
Bubbles
Name	:	bubbles
DataType	:	boolean
Default	:	true
Description	:	It specifies if the mousedown happening on a draggable element while selecting it, will propagate to its parent or not.
ScrollDivX
Name	:	scrollDivX
DataType	:	string / object
Default	:	undefined
Description	:	It specifies the element which has horizontal scroll enabled and will be scrolled while dragging the draggable element.
ScrollDivY
Name	:	scrollDivY
DataType	:	string / object
Default	:	undefined
Description	:	It specifies the element which has vertical scroll enabled and will be scrolled while dragging the draggable element.
Scroll speed
Name	:	scrollSpeed
DataType	:	number
Default	:	10
Description	:	It specifies the value by which the elements metioned in scrollDivX and scrollDivY will be scrolled while dragging the draggable element. Note : scrollSpeed cannot be negative or zero.
Threshold
Name	:	Threshold
DataType	:	number
Default	:	0
Description	:	Only after reaching this threshold limit,you can drag it.
Containment
Name	:	containment
DataType	:	string
Default	:	
Description	:	Any valid selector which uniquely identifies the element containing the draggable elements outside of which the draggable elements cannot be moved.
Note : The element specified for containment must have a calculated width and height.
Methods

The following methods of lyte-draggable must be provided during theinitialization.

onReady
Name	:	onReady
Description	:	Triggered when the draggable is created.
onStart
Name	:	onStart
Description	:	This event is triggered whenever the user selects the element to drag.
Note : If the callback returns false then the element cannot be dragged.
onDragStart
Name	:	onDragStart
Description	:	Triggered when the selected element is starting to get dragged.
Note : By default both draggableElement and handleElement arguments will be same if the handle property is not defined explicitly while creating draggable element.
onDrag
Name	:	onDrag
Description	:	Triggered when the selected element is being dragged.
Note : By default both draggableElement and handleElement arguments will be same if the handle property is not defined explicitly while creating draggable element.
onPlaceholder
Name	:	onPlaceholder
Description	:	Triggered during dragging an item to check whether its placeholders position is valid or not. It is used to provide custom validation rules. Should return true if the position is valid, else false.
Note: Callback should return either true or false.This function will be triggered only when the draggable item is moved over a sortable list which is mentioned in its connectToSortable property.
onBeforeStop
Name	:	onBeforeStop
Description	:	This event is triggered when the user drops the item but the placeholder is still available (in case the draggable item is dropped over a sortable list).
Note : If the callback returns false then the element will return back to its initial position.
onStop
Name	:	onStop
Description	:	This event is triggered when the user releases the element i.e., dragging is stopped.
Note : If the function returns false then the draggable object is returned to its initial position.
Utility Functions

Utility function for lyte-draggable is as follows.

destroy
Name	:	destroy
Description	:	To destroy the draggable behaviour of the elements, call the draggable method with "destroy" as the arguement passed to the method.

---

## droppable

### droppable - overview

Droppable

Droppable allows any DOM elements to be a target for draggable element(s).

Dependencies
```html
<!-- Individual plugin file -->
<script type="text/javascript" src="dist/node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-droppable.js"> </script>
<script type="text/javascript" src="dist/node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-draggable.js"> </script>

<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-droppable.js";
import "@zoho/lyte-ui-plugins/plugins/lyte-draggable.js"
import $L from "@zoho/lyte-dom";
```
Basic Droppable

A basic droppable creates target for draggable element(s). This also requires a draggable element.

```javascript
$L("#selector").droppable();
```
Accept

An array of id selectors which specifies the draggable elements acceptable by the droppable.

```javascript
$L("#selector").droppable({
    accept : [ "#element1" , "#element2" ]
});
```
Tolerance

This property specifies the way to determine whether the acceptable draggable element is hovering over the droppable or not.

```javascript
$L("#selector").droppable({
    tolerance : "fit"
});
```
Destroy

To destroy the droppable behaviour of the elements, call the droppable method with "destroy" as the arguement passed to the method.

eg:  

```javascript
$L("#selector").droppable( "destory" );
OR
$L(".selector").droppable( "destory" );
```

---

## find

### find - overview

Find

Lyte - find is used to search and highlight text in dom elements. It will hide the original element in dom and creates a fake element with lyteHighlightdiv class.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-find.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-search.css"></link>
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-find.js"
import $L from "@zoho/lyte-dom";
---or----
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-find.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
```

The anatomy of a Find is as shown below.

Default find

You need to bind this plugin to an input element. Based on that element's input search will be performed.

Here you need to pass scope and search keys.

scope - selector of the element which contains all the searchable elements. Try to provide a unique selector. always first matched element in document will be used.

search - selector of the searchable elements inside scope.

You can remove already added find plugin removeFind function.

```javascript
$L( 'input.default' ).lytefind({ scope : "div.outer", search : "lyte-menu-item" })

// for removing

$L( 'input.default' ).removeFind();
```
Find in tree

You can use lyte-find in lyte-tree. It will open lyte-tree if tree element is closed. To use find in tree all the tree elements should be rendered in the dom

```javascript
$L( 'lyte-input').lytefind({"scope" : "lyte-tree", "search" : "p.treeValue", component : 'tree' })
```
Find in accordion

You can use lyte-find in lyte-accordion. It will open lyte-accordion if accordion item is closed.

```javascript
$L( 'lyte-input' ).lytefind( { scope : "lyte-accordion", "search" : "div", component : "accordion" })
```

---

## focusstack

### focusstack - overview

FocusStack

Focus stack is used to establish relationship between two elements on the Dom tree which are not related locally(that is one does not follow the other). Relationship established by focus stack is the tab focusing order of two unrelated elements(focusing element 2 after tab is pressed when element 1 is focussed).

Dependencies
```html
<!-- Individual plugin files -->
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-focusStack.js"> </script>
 <script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
 ---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-focusStack.js"
import $L from "@zoho/lyte-dom";
```

Call this plugin only once as it is common to the entire dom, and callbacks can be included in the object which is given as argument to the plugin provided lyte-is-callback property in the element.

```javascript
$L.focusStack({
    onBeforeChange : function ( ) {
        console.log ( 'before change' )
    }
});
```
Default focusStack

The focus stack attempts to build a linked list(singly/doubly depending on whether lyte-nfocus-name or lyte-bfocus-name) is passed. Not all elements in the DOM tree are part of the linked list. Only specific elements which has above mentioned attributes are included in the focus stack. The last element in the linked list is synchronized with the next element in the DOM tree to be focused. This means that when the tab key is pressed on last element of linked list, the focus automatically shifts to the local next element in the DOM tree. And the first element in this linked list will be focused after a tab is pressed on the local dom tree element before head of the linked list. When the tab key is pressed on the last element locally near the head of the linked list, the first element in the linked list becomes the focused element.

Here you need to pass lyte-focus-name, lyte-bfocus-name and lyte-nfocus-name keys.

lyte-focus-name This is used to uniquely identify the element on the linked list
lyte-bfocus-name This represents the lyte-focus-name of the previous node in the linked list to connect to. So pressing shift tab will change focus from current node to this previous node.
lyte-nfocus-name This represents the lyte-focus-name of the next node in the linked list to connect to. So pressing tab will change focus from current node to this next node.


```html
<input lyte-focus-name="inp1" lyte-nfocus-name="inp4" ></input>
<input lyte-focus-name="inp2" lyte-bfocus-name="inp1" lyte-nfocus-name="inp3" ></input>
<input lyte-focus-name="inp3" lyte-bfocus-name="inp2" lyte-nfocus-name="inp4" ></input>
<input lyte-focus-name="inp4" lyte-bfocus-name="inp3" ></input>
```
```javascript
$L.focusStack();
```
FocusStack with data-tabindex

The focus stack plugin can also be used to create several linked lists for multiple group of elements. It can be done by using data-tabindex attribute.
The values should be given in the format "groupX-Y"
Xindicates to which linked list is the element associated and Y indicates the index of the element in the linked list.
In a group, if there is no next element, then focus will be done based on default browser dom order, otherwise the element in next index in that group will be focused.

Using same values for data-tabindex in dom for different groups can be avoided. Duplicate values for lyte-focus-name and data-tabindex can lead to unwanted behaviour of the plugin.

```html
<input data-tabindex="group0-0"><input>
<input data-tabindex="group0-1" ><input>
<input data-tabindex="group0-2" ><input>
<input data-tabindex="group0-3" ><input>

<input data-tabindex="group1-0"><input>
<input data-tabindex="group1-2" ><input>
<input data-tabindex="group1-1" ><input>
<input data-tabindex="group1-3" ><input>
```
```javascript
$L.focusStack();
```

If an index value in between a sequence of numbers is not provided, then focus will shift to the next local dom order element.
In the above eg, consider the element with data-tabindex value of group0-2 is missing and when the tab key is pressed from element group0-1, focus will shift to next local dom order element (i.e) group0-3 in this case.

FocusStack with lyte-focus-name and tabindex

If we use both lyte-focus-name and data-tabindex attributes, then the first preference will be given to lyte-focus-name attributes, if none of lyte-bfocus-name or lyte-nfocus-name is found, then element in data-tabindex is focused.
If none of those attributes are provided then default browser action is done.

```html
<input lyte-focus-name="inp1" lyte-nfocus-name="inp3" data-tabindex="group0-0"> </input>
<input lyte-focus-name="inp2" lyte-nfocus-name="inp4" data-tabindex="group0-1"  > </input>
<input lyte-focus-name="inp3"  data-tabindex="group0-2"> </input>
<input lyte-focus-name="inp4"  > </input>
<input lyte-focus-name="inp5"  data-tabindex="group0-3"> </input>
<input lyte-focus-name="inp6"  data-tabindex="group0-4"> </input>
```
```javascript
$L.focusStack();
```

Tabbing from elements with lyte-focus-name will always try to use the lyte-nfocus-name or lyte-bfocus-name. In case these attributes not not available data-tabindex will be considered.


FocusStack with lyte-focus-after

To make use of this property, provide ltPropChangeFocus value to true in the object parameter while calling the plugin. This property can be used when a user want to change focus to a particular element at the end of a group, but unsure of number of group elements.

```html
<input lyte-focus-after="1">  </input>
<input lyte-focus-name="inp1"  data-tabindex="group1-0"> </input>
<input lyte-focus-name="inp2"  data-tabindex="group1-1"  > </input>
```
```javascript
$L.focusStack({ltPropChangeFocus : 'true'});
```

In the above example, we can see that after we press tab on the last element in the group, focus is shifted to the input element with lyte-focus-after="1" attribute. Here, 1 represent group 1 and the property can have comma seperated values of multiple groups. For eg.lyte-focus-after="1,4,6"

---

## forslyteapp

### forslyteapp - overview

Installing UI Components for sLyte Application

Intergrating UI components to your sLyte application is just a step away. Follow the below steps and get it installed in a jiffy.

Prerequisities

It is vital to install CLI, Node.js and npm in your machine. Before proceeding further, we assume that you are acquainted with HTML, CSS, JS and sLyte

These are the neceessary dependency versions you want to install before using UI Components

@slyte/cli : 1.0.0

@slyte/core : 1.0.0

@zoho/lyte-dom : 2.0.225

@zoho/lyte-ui-component: 4.1.13

Creating an app in sLyte

Let us first create an app to test our components inside it. The installation of UI Components follows a similar pattern in case you are trying to install it in your main project.

```html
lyte new dummy-app
```

Running the above command creates a sLyte-app named as dummy-app in the place where you ran it. Move into the newly created sLyte-app.

```html
cd dummy-app
```

Now open the package.json file inside the app. You will find something similar to the below image.

Installing Addons

The following command will help you to install addons to your existing sLyte application. Only through the addons, UI components can be installed in your application.

```html
lyte install <package> <options> --registry
```

In the package field, provide the package you wish to install and in the options field, mention the version you wish to install and in the registry field, specify the registry you wish to install just like the below code.
```html
lyte install @zoho/lyte-ui-component@4.1.13 --registry http://cm-npmregistry
```
Here are few more examples.

Now, after intergrating the UI Components as addons, you can find the following changes in the package.json.

By default, on executing the above command, you can find LyteUiComponentAddon as lookups, being added in app.js just like the below image.

You can also find the instance of UI Components in component.js just like the below image.

Including CSS Dependencies

If you are using a particular component then you need to include the css dependency for that particular component in index.html of your application.

For clear understanding refer the snippet given below.

```html
<script type="text/javascript" src="lyte.js"></script>
<script type="text/javascript" src="app-init.js"></script>

<!-- lyte button css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css" />
<!-- Each component usually has an associated CSS file-->
<!-- files end-->
```

If you are using more components in your application. It is very hard for the developer to include the css dependency of the each and every file.

Instead of including each component's dependency seperately, you can include lyte-ui-components.css which includes all the css dependencies of the UI components.

```html
<!-- All css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-components.css" />
<!-- files end-->
```
Including i18n Dependencies

Get the text provided by the UI components internationalized with the help of i18n files.

To do so include the following dependencies.

```html
<!-- i18n files -->
<script src="/node_modules/@zoho/lyte-ui-component/dist/I18n/en_US.js"></script>
<!-- files end-->
```

Now, let's navigate to learn about passing the properties and callbacks to UI components

Previous
Next

---

## fullscreen

### fullscreen - overview

Fullscreen

When an element enters fullscreen mode, the other associated elements rendered outside of the fullscreen element become invisible. Most of the lyte ui components( mostly wormhole based components ) append their contents to the body element for consistent positioning ( This prevents the popup contents from being hidden by the "overflow: hidden" property ).

To address this problem, utilize this plugin to request fullscreen instead of directly invoking the fullscreen function. This approach can be used for any custom popups, modals, or tooltips.

This plugin changes the body element to the full screen mode and shows only the required elements in the entire dom tree.

You may need css adjustment while switching to the full screen mode. In full screen mode this plugin will add classes to the all the parent elements in the dom tree. You can use this for css customization.

```html
<!-- css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-fullscreen.css"></link>
<!-- plugin files -->
<script type="text/javascript" src = "node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-fullscreen.js"></script>
&lt;script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"&gt; &lt;/script&gt;

---or----
-- Importing files --;
    import "@zoho/lyte-ui-plugins/plugins/lyte-fullscreen.js"
    import $L from "@zoho/lyte-dom";
```
Classes used

The following classes are used in the fullscreen plugin. You can use them for css customization.


lyteFullScreenElement	Will be added to the element requested for full screen
lyteFullScreenActive	Will be added to the body element when any element is in fullscreenmode
lyteFullScreenTraverse	Will be added to all the intermediate parent elements between fullscreen element and body element

Example

In this example A menu, dropdown, popover, tooltip are used inside the full screen element. Check the behaviours of these elements in browser full screen mode and lyte full screenmode.

You can call $L( ".fullscreenElement" ).fullscreen( "exit" ) or Browser's API( document.exitFullscreen ) to exit fullscreen mode

$L().fullscreen( "element" ) ==> this will return current active fullscreen element

```javascript
$L( ".fullscreenElement" ).fullscreen( options );
```

---

## infinitescroll

### infinitescroll - overview

Infinite Scroll

Dependencies
```html
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-infiniteScroll.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
 <!-- Importing files -->
 import "@zoho/lyte-ui-plugins/plugins/lyte-infiniteScroll.js"
 import $L from "@zoho/lyte-dom";
```
Skeleton

This plugin allows the user to utilize the infinite scroll functionality for an HTML table. Here, the tableWrapper is the DIV element enclosing the TABLE component.

```javascript
//initiating infiniteScroll
 $L('yourTableWrapper').infiniteScroll({
    dataArray : /* yourDataArray */ ,
    populateObject : /* empty object to populate */ ,
    displayElem : /* Number of rows to display */
})
```
```html
<div class="yourTableWrapper">
    <table cellspacing="0" cellpadding="0">
        <tbody>
            <% populateObject.forIn (function(val,key) { %>
                <tr>
                    <td>{{val.key1}}</td>
                    <td>{{val.key2}}</td>
                    <td>{{val.key3}}</td>
                </tr>
            <% }) %>
        </tbody>
    </table>
</div>
```
Requisites

    The pre-requisites for this plugin includes setting the cellspacing and cellpadding values to zero(0). The required data to display is set in the dataArray. The populateObject gets the data from the dataArray and renders the received data in the DOM.
     The displayElem is the number of elements the user wishes to display in the table body. It is advisible that the use should calculate and set the height of the table rows and the table accordingly, in order to display the required number of rows (displayElem), seamlessly.

Sample Infinite Scroll

---

## internationalization

Internationalization

Some of the UI components require i18n files to work. The default text provided by the UI components can be internationalized by importing the i18n files of the language currently being used in the website.

Only the text used by UI components by default can be internationalized. It should be noted that if you are using your own text in UI components, such texts can't be internationalized.

```html
<lyte-button>
   <template is="registerYield" yield-name="text">
     Perform An Action
   </template>
</lyte-button>
```

In the above example the "Perform an action" does not get internationalized. It is the job of the developer to internationalize it. On the other hand, the month names rendered in lyte-calendar do get internationalized because they are the default part of UI components.

Components requiring i18n are:

lyte-calendar
lyte-dropdown
lyte-daterangepicker
lyte-colorpicker
lyte-dragdrop
lyte-input

The following languages are supported by UI components.

Bulgarian	Chinese	Chinese-Taiwan	Croatian	Czech
Danish	English-UK	English-US	French	German
Hungarian	Italian	Japanese	Hebrew	Hindi
Netherlands	Polish	Portuguese-brazil	Portuguese-portugal	Korean
Russian	Spanish	Swedish	Turkish	Vietnamese

Include the following dependencies

```html
<!-- i18n files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/I18n" />
<!-- files end-->
```

When you are changing the language in your application make sure to import the appropriate i18n file for the UI components as well. The i18n file is in the form of JSON, so bringing in a different language file replaces the old one.

For example: Lets say initially, the website renders in English and the en_US.js file is loaded for UI components. Later on, when the user switches from English to French, simply bringing in the fr_FR.js file will change the language of UI components.

### internationalization - overview

Internationalization

Some of the UI components require i18n files to work. The default text provided by the UI components can be internationalized by importing the i18n files of the language currently being used in the website.

Only the text used by UI components by default can be internationalized. It should be noted that if you are using your own text in UI components, such texts can't be internationalized.

```html
<lyte-button>
   <template is="registerYield" yield-name="text">
     Perform An Action
   </template>
</lyte-button>
```

In the above example the "Perform an action" does not get internationalized. It is the job of the developer to internationalize it. On the other hand, the month names rendered in lyte-calendar do get internationalized because they are the default part of UI components.

Components requiring i18n are:

lyte-calendar
lyte-dropdown
lyte-daterangepicker
lyte-colorpicker
lyte-dragdrop
lyte-input

The following languages are supported by UI components.

Bulgarian	Chinese	Chinese-Taiwan	Croatian	Czech
Danish	English-UK	English-US	French	German
Hungarian	Italian	Japanese	Hebrew	Hindi
Netherlands	Polish	Portuguese-brazil	Portuguese-portugal	Korean
Russian	Spanish	Swedish	Turkish	Vietnamese

Include the following dependencies

```html
<!-- i18n files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/I18n" />
<!-- files end-->
```

When you are changing the language in your application make sure to import the appropriate i18n file for the UI components as well. The i18n file is in the form of JSON, so bringing in a different language file replaces the old one.

For example: Lets say initially, the website renders in English and the en_US.js file is loaded for UI components. Later on, when the user switches from English to French, simply bringing in the fr_FR.js file will change the language of UI components.

---

## introduction

The UI Components
Introduction

The sLyte framework proudly presents an armada of UI components, tailored to suit every need of your products. With the premade, customizable, readily available UI components and plugins, prototyping or building production ready websites and products is just a click away.

Our UI components comes with an array of customisation to uplift the style and design to enrich and engage the user experience.

Why Choose Us
Personalized customisation
Readily available.
Maintaining a consistent style across.
Easy to build and deploy.
Can build in minutes.
Less effort.
Play with the varied themes of UI components

You are not left alone here, throughtout we extend our support as you walk in the royal road of sLyte. Drench your hands in the upcoming docs to witness how to UI components is going to make your product, a forefront player.

Navigate, to learn about installing UI

Next

---

## jwalk

### jwalk - overview

Jwalk
Introduction

Jwalk, from the family of sLyte plugins, helps you to get the data from the provided JSON with the help of Json path. Keep reading to know more about it.

How it works

Let us see how to add and use Jwalk.

Dependencies

Install the following dependencies.

```html
<!-- Individual plugin  file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/Json-walker/jsonPathfinder.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/Json-walker/jsonPathfinder.js""
import $L from "@zoho/lyte-dom";
```
How to use

In the terminal, you can provide the following syntax.

$L.Jwalk( Object , path )

Here,

--- $L stands for document.querySelector.

--- Jwalk being the keyword

--- Object - Any object.

--- path - Provide the path. Have a look at the below tabular column.

Json Path

JSON path will be identified with the $ sign. You can provide the path containing these elements.

JSONPATH IDENTIFIERS	DESCRIPITION
$	Foundation/origin of the JSON
.	Child elements of the JSON
*	Matches all elements of the JSON
..	Recrussive colletion of elements
[]	matches the index/key in JSON
$..*	All the elements in JSON
Sample syntax
```javascript
vehicles = {
        cars : [
            {
                name : "city",
                price : "18.L",
                Brand : "HONDA",
                year :2020
            },
            {
                name : "Amaze",
                price : "9L",
                Brand : "HONDA",
                year :2021
            },
            {
                name : "Altroz",
                price : "11.5L",
                Brand : "TATA",
                year :2022
            },
            {
                name : "Tiago",
                price : "8.5L",
                Brand : "TATA",
                year :2023
            },
        ],
        bikes : [
            "HERO",
            "HONDA",
            "TVS"
        ]
    }
```
EXAMPLES	DESCRIPITION
$.vehicles.*	All the elements in the vehicles
$.vehicles.cars	Cars key in the vehicles
$.vehicles.car..brand	All the brands in the cars
$.vehicles..brand	All the brands in the vehicles scope
$.vehicles..*	Each and every elements in the vehicles scope

For the above sample object, you can get the data with any of the above mentioned path in this manner.
$L.Jwalk( vechiles , ' $ . vechiles.car')

---

## keyboardnavigator

### keyboardnavigator - overview

KeyboardNavigator

The keyboard navigator is used to navigate through a list of items using your keyboard/mouse. This plugin also provides ARIA support for your list.

Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-keyboard-navigator.js"></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-keyboard-navigator.js"
import $L from "@zoho/lyte-dom";
```
Focusable Element

For the list to be navigable through the keyboard, the parent element/scope needs to receive focus. The parent element could be a button or it could be an input or any element for that matter. Once the parent element receives focus, using the arrows keys will navigate through the list. If the parent element is non-focusable by default, then we can use tabindex property to make it focus.



Default keyboardNavigator

The user will be required to bind this plugin to a wrapper element with a configuration object. Based on the values in object provided, navigation will be done. The parent element needs to be query selected through lyte Dom scope.

The Configuration object can take following values:

scope The child are querySelected inside the mentioned element. This can be useful when parent and scope are different. For example, a button which opens a popover might need focus as long as the popover is open but the list of items will not be inside the button but it will be inside the popover's body.
child It denotes the child elements which should be considered for navigation.
selectedClass This particular class which contains css property will be added to the highlighted element.
These three values must be provided in the object while calling the plugin.

The keys supported for navigation through keyboard are ArrowUp, ArrowDown, ArrowLeft and ArrowRight for respective operations. Home and End keys can be used to navigate to first and last elements respectively. PageUp and PageDown keys also supported for navigation.

```html
<div  id="parent"  >
    <span>first</span>
        <span class="dropitems "  id="car" >Car</span>
        <span class="dropitems "  id="bike">Bike</span>
        <span class="dropitems "  id="cycle">Cycle</span>
    <span>second</span>
        <span class="dropitems "  id="scooter">Scooter</span>
        <span class="dropitems "  id="truck">Truck</span>
    <span>third</span>
        <span class="dropitems "  id="van">Van</span>
        <span class="dropitems "  id="cycle">Cycle</span>
</div>
```
```javascript
let obj={
    scope: "#parent",
    child: "span.dropitems",
    selectedClass: "selected",
};
$L('div#parent').keyboardNavigator(obj);
```
```css
.selected {
    background-color:lightgray;
}
```

In the above example only span elements with class 'dropitems' is considered for navigation since 'dropitems' only provided in the configuration object.
Also car is highlighted by default since it is mentioned in the configuration object.

skip elements

If we want certain child elements to be skipped during navigation, then skip selectors can be provide to configuration object which won't be considered for navigation.

```html
<div  id="parent"  >
    <span>first</span>
        <span class="dropitems "  id="car" >Car</span>
        <span class="dropitems disabled"  id="bike">Bike</span>
        <span class="dropitems "  id="cycle">Cycle</span>
    <span>second</span>
        <span class="dropitems "  id="scooter">Scooter</span>
        <span class="dropitems disabled"  id="truck">Truck</span>
    <span>third</span>
        <span class="dropitems "  id="van">Van</span>
        <span class="dropitems "  id="cycle">Cycle</span>
</div>
```
```javascript
let obj={
    scope: "#parent",
    highlightValue: "#cycle"
    child: "span.dropitems",
    selectedClass: "selected",
    skipElements: ".disabled"
};
$L('div#parent').keyboardNavigator(obj);
```
```css
.selected {
    background-color:lightgray;
}
```

Bike and Truck are not highlighted since they are skipped for navigation

---

## keynavigator

### keynavigator - overview

KeyboardNavigator

The Keyboard Navigator, a UI component, is used to highlight a particular element in a dropdown or menu component or a similar one. Using various keyboard navigation events the highlighted element can be changed.

Dependencies
```html
<!-- lyte files -->
 <script type="text/javascript" src="lyte/polyfill-bundle.js"> </script>
 <script type="text/javascript" src="lyte/custom-elements-es5-adapter.js"> </script>
 <script type="text/javascript" src="lyte/lyte-es5.js"> </script>

 <!-- common ui-component files -->
 <script type="text/javascript" src="lyte-dom/lyte-dom.js"> </script>
 <script type="text/javascript" src="ui-components/I18n/en_US.js"> </script>
 <script type="text/javascript" src="ui-components/components/helpers/helpers.js"> </script>

<!-- Individual component files -->
<script type="text/javascript" src="ui-components/components/lyte-keyboard-navigator.js"></script>
<script type="text/javascript" src="ui-components/plugins/lyte-keyboard-navigator.js"></script>
```
Default Keyboard Navigator

The component has to be rendered in a popover/dropdown items which are rendered with an origin element. It is required to prevent the focus from entering into the dropbox / popover-content elements. For eg., by using lt-prop-prevent-focus in popover.

For implementing the keyboard navigation functionality the following mandatory values are to be provided.
* Parent - the element upon which the keyboard navigator is called, in other words the element to which the focus has to be given,
* Scope - the wrapper div / element enclosing the elements to be highlighted,
* Children - the selector (className) of the elements to be highlighted,
* Highlighted - the default element to be highlighted when the component is rendered,
* Selected - the className which is to be added to the selected element.

```html
<lyte-popover lt-prop-origin-elem = "#popover" lt-prop-prevent-focus = "true">
    <template is = "registerYield" yield-name = "popover">
        <lyte-popover-content>
            <lyte-keyboard-navigator
                lt-prop-parent = "#popover"
                lt-prop-scope = "#scope"
                lt-prop-children=".child"
                lt-prop-highlighted=".highlight"
                lt-prop-selected="selected">
                    <template is="yield" yield-name="keyboard-navigator-content">
                        <ul id="scope">
                            <li>Item 1
                                <ul>
                                    <li class="child sub highlight">Sub Item 1</li>
                                    <li class="child sub">Sub Item 2</li>
                                    <li class="child sub">Sub Item 3</li>
                                </ul>
                            </li>
                            <li>Item 2
                                <ul>
                                    <li class="child sub">Sub Item 4</li>
                                    <li class="child sub">Sub Item 5</li>
                                    <li class="child sub">Sub Item 6</li>
                                </ul>
                            </li>
                            <li>Item 3
                                <ul>
                                    <li class="child sub">Sub Item 7</li>
                                    <li class="child sub">Sub Item 8</li>
                                    <li class="child sub">Sub Item 9</li>
                                </ul>
                            </li>
                        </ul>
                    </template>
            </lyte-keyboard-navigator>
        </lyte-popover-content>
    </template>
</lyte-popover>
```

    => In the above example the button with the id "popover" is the parent upon which the keyboard navigator functionality will be called and will be given focus.
    => The scope is the DOM tree element whose children are considered for navigation. Here it is the ul with the id "scope".
    => The list items (li) with class name 'child' is considered for highlighting,as '.child' is only given in lt-prop-children.
    => Also 'sub item 1' is highlighted by default since it is mentioned in lt-prop-highlighted.

Skip elements

    To skip certain elements while navigating, the specific selctor for those elements has to be provided in lt-prop-skip-elements. By doing so, the respective elements will be skipped and won't be highlighted while navigating.

```html
<lyte-popover lt-prop-origin-elem = "#popover" lt-prop-prevent-focus = "true">
    <template is = "registerYield" yield-name = "popover">
        <lyte-popover-content>
            <lyte-keyboard-navigator
                lt-prop-parent = "#popover"
                lt-prop-scope = "#scope"
                lt-prop-children=".child"
                lt-prop-highlighted=".highlight"
                lt-prop-selected="selected">
                    <template is="yield" yield-name="keyboard-navigator-content">
                        <ul id="scope">
                            <li>Item 1
                                <ul>
                                    <li class="child sub highlight">Sub Item 1</li>
                                    <li class="child sub skip">Sub Item 2</li>
                                    <li class="child sub">Sub Item 3</li>
                                </ul>
                            </li>
                            <li>Item 2
                                <ul>
                                    <li class="child sub">Sub Item 4</li>
                                    <li class="child sub">Sub Item 5</li>
                                    <li class="child sub skip">Sub Item 6</li>
                                </ul>
                            </li>
                            <li>Item 3
                                <ul>
                                    <li class="child sub">Sub Item 7</li>
                                    <li class="child sub skip">Sub Item 8</li>
                                    <li class="child sub">Sub Item 9</li>
                                </ul>
                            </li>
                        </ul>
                    </template>
            </lyte-keyboard-navigator>
        </lyte-popover-content>
    </template>
</lyte-popover>
```

Here the elements, Sub Item 2, 6, 8, with the class "skip" are not highlighted and skipped during navigation.

Orientation

    The 'vertical' (Up and Down arrow keys) movements can be changed to 'horizontal' (Right and Left keys) movements by changing lt-prop-orientation.


```html
<lyte-popover lt-prop-origin-elem = "#popover" lt-prop-prevent-focus = "true">
    <template is = "registerYield" yield-name = "popover">
        <lyte-popover-content>
            <lyte-keyboard-navigator
                lt-prop-parent = "#popover"
                lt-prop-scope = "#scope"
                lt-prop-children=".child"
                lt-prop-highlighted=".highlight"
                lt-prop-selected="selected"
                lt-prop-orientation = "horizontal">
                    <template is="yield" yield-name="keyboard-navigator-content">
                        <ul id="scope">
                            <li>Item 1
                                <ul>
                                    <li class="child sub highlight">Sub Item 1</li>
                                    <li class="child sub">Sub Item 2</li>
                                    <li class="child sub">Sub Item 3</li>
                                </ul>
                            </li>
                            <li>Item 2
                                <ul>
                                    <li class="child sub">Sub Item 4</li>
                                    <li class="child sub">Sub Item 5</li>
                                    <li class="child sub">Sub Item 6</li>
                                </ul>
                            </li>
                            <li>Item 3
                                <ul>
                                    <li class="child sub">Sub Item 7</li>
                                    <li class="child sub">Sub Item 8</li>
                                    <li class="child sub">Sub Item 9</li>
                                </ul>
                            </li>
                        </ul>
                    </template>
            </lyte-keyboard-navigator>
        </lyte-popover-content>
    </template>
</lyte-popover>
```

Also, to limit the keys for navigation in lt-prop-options to [ArrowLeft, ArrowRight] keys, it is mandatory to set the orientation to 'horizontal'.

---

## landmark

### landmark - overview

LandMark

Landmark is used to highlight the important parts of a page.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-landmark.css"> </link>

 <!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-plugins/plugins/lyte-landmark.js"></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "node_modules/@zoho/lyte-ui-plugins/plugins/lyte-landmark.js"
import $L from "@zoho/lyte-dom";
```
DefaultLandmark

Lyte-landmark plugin can be used to identify the primary contents of the page. Enabling the plugin leads to highlighting those primary contents in the page and also focus the first focusable element.

aria-role attribute shoud be provided to those elements you wish to highlight.

aria-roles which are supported in this plugin are listed below:


banner
complementary
contentinfo
form
main
navigation
region
search

```html
<button onclick="enable()"> Show landmarks</button>
<button onclick="disable()"> Hide landmarks</button>
```
```javascript
enable: function(){
    $L.landmark.enable();
},
disable: function(){
    $L.landmark.disable();
}
```
FocusableElement

A dropdown will be rendered in the page containing elements with aria-role attribute. Upon selecting a value, the first focusable element inside the parent will be focused.

---

## lazyload

### lazyload - overview

Lazyload

A plugin that speeds up your web application by delaying the loading of the images, videos and iframes to when they will enter the viewport. It optimizes the loading of web pages.

To utilize the lazyloading behaviour, you need to use some properties instead of actual properties.

Dependencies

```html
<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-lazyload.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
----or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-lazyload.js"
import $L from "@zoho/lyte-dom";
```

If you want to use this plugin without including the core lyte files, just include the below 2 files and you are good to go.

```html
<!-- dependent lyte-dom file -->
<script type="text/javascript" src="lyte-dom/modules/lyte-dom-utils.min.js"> </script>


<!-- Plugin file -->
<script type="text/javascript" src="ui-components/plugins/lyte-lazyload.js"> </script>
```
Example using image

This example depicts the lazyload behaviour of the images inside the scrollable div.

```html
<table width="600px">
    <tr>
        <td>
            <div class="results" id="container1">
                <ul>
                    <li lyte-for="{{imgDetails}} as item index" >
                        <img class="lyteLazyload" alt="{{item.name}}" data-src="{{item.src}}" width="{{item.width}}" height="{{item.height}}"/>
                    </li>
                </ul>
            </div>
        </td>
        <td>
            <div class="results">
                <div lyte-for="{{logs1}} as item index" class="log">
                    <span class="logTitle">LOG </span><span class="logBody">{{item}}</span>
                </div>
            </div>
        </td>
    </tr>
</table>
```
```javascript
$L.lazyload({
    container : '#container1',
    appliedClass : 'lyte-applied',
    loadingClass : 'lyte-loading',
    loadedClass : 'lyte-loaded',
    errorClass : 'lyte-error',
    enteredClass : 'lyte-entered',
    exitedClass : 'lyte-exited',
    onEnter : function( element ){
        console.log("ENTERED", element.getAttribute("alt"));
    },
    onExit : function( element ){
        console.log("EXITED", element.getAttribute("alt"));
    },
    onCancel : function( element ){
        console.log("CANCEL", element.getAttribute("alt"));
    },
    onLoading : function( element ){
        console.log("LOADING", element.getAttribute("alt"));
    },
    afterLoading : function( element ){
        console.log("LOADED", element.getAttribute("alt"));
    },
    onError : function( element ){
        console.log("ERROR", element.getAttribute("alt"));
    },
    onComplete : function( element ){
        console.log("COMPLETE", element.getAttribute("alt"));
    }
});
```
Example using image inside a modal

This example depicts the use of the plugin inside a modal.

```html
<lyte-modal id="modal" on-show='{{method('showModal')}}' on-close='{{method('closeModal')}}'>
	<template is='registerYield' yield-name='modal'>
	 	<lyte-modal-header>Modal acting as container</lyte-modal-header>
	    <lyte-modal-content>
	        <table width="600px">
	            <tr>
	                <td>
	                    <div class="results" id="container2">
	                        <ul>
	                            <li lyte-for="{{imgDetails}} as item index" >
	                                <img class="lazyModal" alt="{{item.name}}" data-src="{{item.src}}" width="{{item.width}}" height="{{item.height}}"/>
	                            </li>
	                        </ul>
	                    </div>
	                </td>
	                <td>
	                    <div class="results">
	                        <div lyte-for="{{logs2}} as item index" class="log">
	                            <span class="logTitle">LOG </span><span class="logBody">{{item}}</span>
	                        </div>
	                    </div>
	                </td>
	            </tr>
	        </table>
	    </lyte-modal-content>
	</template>
</lyte-modal>
```
```javascript
static methods(){
   return{
	showModal : function(){
	    $L.lazyload({
            container : '#container2',
            selector : '.modalLazy',
            onEnter : function( element ){
                console.log("ENTERED", element.getAttribute("alt"));
            },
            onExit : function( element ){
                console.log("EXITED", element.getAttribute("alt"));
            },
            onCancel : function( element ){
                console.log("CANCEL", element.getAttribute("alt"));
            },
            onLoading : function( element ){
                console.log("LOADING", element.getAttribute("alt"));
            },
            afterLoading : function( element ){
                console.log("LOADED", element.getAttribute("alt"));
            },
            onError : function( element ){
                console.log("ERROR", element.getAttribute("alt"));
            },
            onComplete : function( element ){
                console.log("COMPLETE", element.getAttribute("alt"));
            }
        });
    },
    closeModal : function(modal){
		modal.$node.ltProp('bindToBody', false);
	}
}
}
```
Destroy

This example depicts how to "destroy" the lazyload behaviour.

```html
<lyte-button lt-prop-appearance="failure" id="destroyBtn">
    <template is="registerYield" yield-name="text">
        Destroy Behaviour
    </template>
</lyte-button>
<table width="600px">
    <tr>
        <td>
            <div class="results" id="container3">
                <ul>
                    <li lyte-for="{{imgDetails}} as item index" >
                        <img class="lyteLazyload" alt="{{item.name}}" data-src="{{item.src}}" width="{{item.width}}" height="{{item.height}}"/>
                    </li>
                </ul>
            </div>
        </td>
        <td>
            <div class="results">
                <div lyte-for="{{logs3}} as item index" class="log">
                    <span class="logTitle">LOG </span><span class="logBody">{{item}}</span>
                </div>
            </div>
        </td>
    </tr>
</table>
```
```javascript
didConnect : function(){
	this.instantiateAndDestroy();
},
instantiateAndDestroy : function(){
    var instance = $L.lazyload({
        container : '#container3',
        selector : '.modalLazy',
        onEnter : function( element ){
            console.log("ENTERED", element.getAttribute("alt"));
        },
        onExit : function( element ){
            console.log("EXITED", element.getAttribute("alt"));
        },
        onCancel : function( element ){
            console.log("CANCEL", element.getAttribute("alt"));
        },
        onLoading : function( element ){
            console.log("LOADING", element.getAttribute("alt"));
        },
        afterLoading : function( element ){
            console.log("LOADED", element.getAttribute("alt"));
        },
        onError : function( element ){
            console.log("ERROR", element.getAttribute("alt"));
        },
        onComplete : function( element ){
            console.log("COMPLETE", element.getAttribute("alt"));
        }
    });
    var destroyButton = $L('#destroyBtn button')[0];
    destroyButton.addEventListener("click", function () {
        destroyButton.disabled = true;
        destroyButton.innerText = "Destroying ...";
        var destroyInterval = setInterval(function () {
            if (instance._count.loading > 0) {
            	return; // EXIT CONDITION
            }
            clearInterval(destroyInterval);
            $L.lazyload('destroy', instance);
            instance = null;
            destroyButton.innerText = "Destroyed";
        }, 250);
    });
}
```
Update

This example depicts how to "update" the lazyload behaviour.

```html
<lyte-button lt-prop-appearance="primary" onclick='{{action('addContent')}}'>
    <template is="registerYield" yield-name="text">
        Add Contents
    </template>
</lyte-button>
<lyte-button lt-prop-appearance="failure" onclick='{{action('removeContent')}}'>
    <template is="registerYield" yield-name="text">
        Remove Contents
    </template>
</lyte-button>
<table width="600px">
    <tr>
        <td>
            <div class="results" id="container3">
                <ul>
                    <li lyte-for="{{imgDetails}} as item index" >
                        <img class="lyteLazyload" alt="{{item.name}}" data-src="{{item.src}}" width="{{item.width}}" height="{{item.height}}"/>
                    </li>
                </ul>
            </div>
        </td>
        <td>
            <div class="results">
                <div lyte-for="{{logs3}} as item index" class="log">
                    <span class="logTitle">LOG </span><span class="logBody">{{item}}</span>
                </div>
            </div>
        </td>
    </tr>
</table>
```
```javascript
didConnect : function(){
	this.instantiateAndDestroy();
},

instantiateAndDestroy : function(){
    var instance = $L.lazyload({
        container : '#container4',
        onEnter: function( element ){
        	var log = "ENTERED "+ element.getAttribute("alt");
        	console.log(Date.now(), "ENTERED", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        onExit: function( element ){
        	var log = "EXITED "+ element.getAttribute("alt");
        	console.log(Date.now(), "EXITED", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        onCancel: function( element ){
        	var log = "CANCEL "+ element.getAttribute("alt");
        	console.log(Date.now(), "CANCEL", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        onLoading: function( element ){
        	var log = "LOADING "+ element.getAttribute("alt");
        	console.log(Date.now(), "LOADING", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        afterLoading: function( element ){
        	var log = "LOADED "+ element.getAttribute("alt");
        	console.log(Date.now(), "LOADED", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        onError: function( element ){
        	var log = "ERROR "+ element.getAttribute("alt");
        	console.log(Date.now(), "ERROR", element.getAttribute("alt"));
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this),
        onComplete: function( element ){
        	var log = "COMPLETE ";
        	console.log(Date.now(), "COMPLETE");
        	Lyte.arrayUtils(this.getData('logs4'), 'push', log);
        }.bind(this)
    });

    this.setData('dynamicLazyObj', instance);
},

static actions() {
    return{
	    addContent : function(){
		var count = this.getData('contentCount');
		for(var i = count + 1; i <= count + 4; i++){
			var imgObj = {}, imgDetails;
			imgObj.name = "Sample Image "+i;
			if(i % 4 == 1){
				imgObj.src = "https://via.placeholder.com/440x560/ef2043/ffffff?text=Sample+Image+"+i;
			}
			else if(i % 4 == 2){
				imgObj.src = "https://via.placeholder.com/440x560/35a243/ffffff?text=Sample+Image+"+i;
			}
			else if(i % 4 == 3){
				imgObj.src = "https://via.placeholder.com/440x560/158dbd/ffffff?text=Sample+Image+"+i;
			}
			else{
				imgObj.src = "https://via.placeholder.com/440x560/fcda41/ffffff?text=Sample+Image+"+i;
			}
			imgObj.width = 220;
			imgObj.height = 280;
			Lyte.arrayUtils(this.getData('dynamicContent'), 'push', imgObj);
		}
		this.setData('contentCount', count + 4);
		Lyte.arrayUtils(this.getData('logs4'), 'push', "ADDED 4 new image contents.");
		$L.lazyload('update', this.getData('dynamicLazyObj'));
	},
	removeContent : function(){
		var i = 0, dynamicContent = this.getData('dynamicContent');
		while(i < 4 && dynamicContent.length > 0 ){
			Lyte.arrayUtils( dynamicContent , 'removeAt' , 0 , 1 );
			i++;
		}
		Lyte.arrayUtils(this.getData('logs4'), 'push', "REMOVED "+i+" image contents from the top.");
		$L.lazyload('update', this.getData('dynamicLazyObj'));
	}
  }
}
```

---

## lazyrender

### lazyrender - overview

Lazy Render
Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-lazyRender.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
           ---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-lazyRender.js"
import $L from "@zoho/lyte-dom";
```
Lazy Render

This plugin is used to render a table or a array of HTML elements in DOM when it is scrolled, this plugin has few configurations where the initial render count, scroll render counts are given based on that the plugin will render the elements every time the scroll reaches its end.

```javascript
$L('.scrollWrap').lazyRender({
  entireData : this.data.scrollData,
  dataToRender : this.data.scrollPopulateData,
  renderConfig : this.data.loadingConfig,
  startLoader : function(){
    console.log('start loader');
  },
  endLoader : function(){
    console.log('end loader');
  },
  onEnd : function(){
    Lyte.arrayUtils( this.entireData , 'push' , this.entireData)
  }
})
```
```html
<div class="scrollWrap">
   ...
</div>
```
NAME	REG	FROM	ID	CLASS	ARCHITECTURE	KING	DYNASTY
Taj mahal	1	Agra	17	1648	Mughal	Shajahan	Moghul
Mysore palace	2	Mysore	20	1912	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
Brihadheeswara temple	3	Tanjore	11	1010	dravidian	Raja raja chola	Chozha
Hawa mahal	4	Jaipur	18	1799	Rajput - Islamic	Sawai Pratap Singh	Rajput
Bahai temple	5	Delhi	20	1986	Expressionist	Fariborz Sahba	-
Victoria memorial	6	Kolkatta	20	1906	Indo-Saracenic Revival	Lord curzon	British Governor general
Qutub minar	7	Delhi	13	1206	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
Sanchi stupa	8	Sanchi	BC 3	261	Buddhist	Asoka	Mauriya
Shore temple	9	Mamallapuram	8	728	dravidian	Raja simha	Pallava
Meenakshi Sundareshwarar temple	10	Madurai	1	-	dravidian	-	Pandia

---

## listselection

### listselection - overview

List Selection

Dependencies
```html
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-listSelection.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
         ---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-listSelection.js"
import $L from "@zoho/lyte-dom";
```
Default List Selection

This plugin allows the user to apply a desired CSS class to the selected HTML DOM element which is preferably rendered in a list view. By default, toggleSingleSelction will be false, setting which to true will enable toggling between selection and deselection of the DOM element.

```javascript
//initiating listSelection
 $L('.yourWrapperClass').listSelection({
    toAppendClass: 'yourAppendingClass',
    toggleSingleSelction : true
})
```
```html
<div class="yourWrapperClass" >
<% dataArray.forEach(function(item, index){ %>
    <div>{{item}}</div>
    <% }) %>
</div>
```
Meta Key / Control Key

Pressing the Meta Key (command in Mac) / Control key (in Windows) while selecting multiple elements, adds the class to all the elements selected while pressing the key.

Shift Key

Pressing the Shift Key after selecting an element and then selecting another element adds the class to all the elements in between the two elements while keeping the first element as reference.

Combined Operations

The plugin provides combined Single Selection, Meta/Control key and Shift key operations when pressed alternatively.

Sample List Selection
Chennai
Bangalore
Mumbai
Kolkata
Delhi
Madurai
Pune
Trivandrum
Ahmedabad
Hyderabad
Kochi
Agra
Jaipur
Vishakapatnam
Pondicherry

---

## moment

### moment - overview

Moment

Lyte-moment used to Parse, Manipulate, convert date and time.

It contains two files lyte-moment-basic.js and lyte-moment-additional.js .

Basic properties, validation and format conversion are defined in basic moment file. Format construction for given input string, difference between two times, getting and setting date time properties are defined in additional moment file.


Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-moment-additional.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-moment-basic.js"> </script>

<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>

     ---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-moment-additional.js";
import "@zoho/lyte-ui-plugins/plugins/lyte-moment-basic.js"
import $L from "@zoho/lyte-dom";
```
$L.moment function returns a moment object if given arguments are valid. Calling moment without any arguments return moment object for current time.
Arguments
Date object
String ( second argument will be format )
Array ( Date will be constructed by calling new Date( given array ) )
Number
Format tokens

The following tokens can be used in formats for both validating and formatting strings. If you want to escape format tokens in your string wrap that token with {{}}.
For YY format given value will be considered as a year between 80 years before current year to 19 years after current year. Selecting a future date with high difference is not a reliable one

No.	Token	Type	Expected Output
1	YYYY	Year	1996, 1997.... 2019, 2020
2	GGGG	Year ( ISO )	1996, 1997.... 2019, 2020
3	gggg	Year ( local )	1996, 1997.... 2019, 2020
4	YY	Year	96, 97.. 19, 20
5	GG	Year ( ISO )	96, 97.. 19, 20
6	gg	Year ( local )	96, 97.. 19, 20
7	MMMM	Long month	January, February ...
8	MMM	Short month	Jan, Feb ...
9	Mo	Month in number	1st, 2nd ...
10	MM	Month in number.( for validation it will behave like 'M' format )	01, 02 ...
11	M	Month in number	1, 2 ... 11, 12
12	DDDD	Day of the year	001, 002, 003.... 365
13	DDDo	Day of the year	1st, 2nd, 3rd.... 365th
14	DDD	Day of the year	1, 2, 3.... 365
15	Do	Date of the month	1st, 2nd ... 12th
16	DD	Date of the month.( for validation it will behave like 'D' format )	01, 02 ... 12
17	D	Date of the month	1, 2 .. 12
18	[W]Wo, [W]wo	Week of the year	W1st, W2nd ...W52nd
19	[W]WW, [W]ww	Week of the year	W01, W02 ... W52
20	[W]W, [W]w	Week of the year	W1, W2 ... W52
21	E	Day of the week. Default monday will be start of week	1,2 ... 7
22	e	Day of the week ( local ). Default monday will be start of week	0,1 ... 6
23	A	Meridian	AM or PM
24	a	Meridian local	am or pm
25	ZZ	Time zone	0530, 0500....
26	Z	Time zone	05:30, 05:00...
27	zz, z	Time zone	UT,GMT,EDT,EST,CDT,CST,MDT,MST,PDT,PST
28	HH	Hour in 24 hour format	00, 01 ... 23
29	H	Hour in 24 hour format	0,1 ... 23
30	hh	Hour in 12 hour format	00, 01 .. 12
31	h	Hour in 12 hour format	0, 1, .. 12
32	kk	Hour in local format	01, 02, .. 24
33	k	Hour in local format	1, 2, .. 24
34	mm	Minutes	00, 01, .. 59
35	m	Minutes	0, 1, .. 59
36	ss	Seconds	00, 01, .. 59
37	s	Seconds	0, 1, .. 59
38	S	Milli Seconds	123
39	X	Timestamp ( 10 digits )	1234567891
40	x	Timestamp in milli ( 13 digits )	1234567891234
41	dddd	Long date	Sunday, Monday....
42	ddd	long date	Sun, Mon, Tue
43	dd	long date	Su, Mo, Tu
44	do	day of the week	0th, 1st, 2nd, 3rd ...
45	d	day of the week	0, 1, 2, 3 ...
46	Qo	Quarter of the year	1st, 2nd ...
47	Q	Quarter of the year	1, 2 ...
Available formats

You can simply pass the name of the formats. You need to include lyte-moment-additional.js for these formats

Name	Format
localDatetime	YYYY-MM-DDTHH:mm
localSecondDatetime	YYYY-MM-DDTHH:mm:ss
localMillisecondDatetime	YYYY-MM-DDTHH:mm:ss.SSS
defaultDate	YYYY-MM-DD
defaultTime	HH:mm
defaultTimeSecond	HH:mm:ss
defaultTimeMillisecond	HH:mm:ss.SSS
defaultWeek	GGGG-[W]WW
defaultMonth	YYYY-MM
Moment argument as string

While invoking lyte moment second argument will be pattern where the first argument is a string. When pattern is not provided moment itself construct suitable pattern( additional-moment.js ).

You can convert a valid moment object into any suitable formats using format() . Default format will be YYYY-MM-DDTHH:mm:ssZ . You can also use already available standard formats / your custom format

```javascript
$L.moment( string, format )
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).format() // output will be "1996-04-28T00:00:00+05:30"
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).format( 'localMillisecondDatetime' ) // output will be "1996-04-28T00:00:00.000"
$L.moment( '28.04.1996', 'DD.MM.YYYY' ).format( "MM-DD-YYYY" ) // output will be Corresponding date for MM.DD.YYYY is 04-28-1996
```
Supported time zones ( from 3.20.0 )

You can change the timezone after moment instace creation.
Timezone can also be configured globally by $L.moment.setTimezone( timezoneName ) function.
Moment internally uses toLocaleString api provided by the date object for converting timezone. It is not supported in IE browser( Timezone convertions in IE browser won't be accurate ).

Output of the toLocaleString depends on the browser. Some newly added timezones and modified DST timings won't work in old browsers.

```javascript
/* Converting to utc format */
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).utc().format(); // "1996-04-27T18:30:00+00:00"

/* Converting to default format*/
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).local().format() // "1996-04-28T00:00:00+05:30"

/* Converting to random format - This will read the string in local format then it will convert the time to given timezone */
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).timezone( "Australia/Victoria" ).format(); // "1996-04-28T04:30:00+10:00"

/* To read a string in particular timezone - This will read the string in given timezone*/
$L.moment( '28/04/1996', 'DD/MM/YYYY', { timezone : "Australia/Victoria" } ).format(); // "1996-04-28T00:00:00+10:00"

/* To set the timezone globally - It will be applied to all the moment instances created*/
$L.moment.setTimezone( "Australia/Victoria" );
$L.moment( '28/04/1996', 'DD/MM/YYYY' ).format(); // "1996-04-28T00:00:00+10:00"

/*Ignoring global timezone for a particular instance*/
$L.moment.setTimezone( "Australia/Victoria" );
$L.moment( '28/04/1996', 'DD/MM/YYYY', { ignore_timezone : true } ).format(); // "1996-04-28T00:00:00+05:30"
```
Difference between two dates

You can find the difference between two dates using fromNow utility. Output data will be like this. Default and accurate conversion values used in lyte-moment are given below

No.	Property	Default	Accurate
1	years	320 * 24 * 60 * 60	365 * 24 * 60 * 60
2	months	26 * 24 * 60 * 60	30 * 24 * 60 * 60
3	days	22 * 60 * 60	24 * 60 * 60
4	hours	45 * 60	60 * 60
5	minutes	44	60
6	seconds	0	1
```javascript
$L.moment( '28-04-1996', 'DD-MM-YYYY' ).fromNow( $L.moment( "2021-07-12T20:51:49+05:30", true ) );  // second argument is to indicate accurate conversion

// output format
{
past:false, // To indicate the given date is past / future
timestamp:795473509000, // total timestamp difference
seconds:{
  value:49
},
minutes:{
  value:51
},
hours:{
  value:20
},
days:{
  value:21
},
months:{
  value:2
},
years:{
  value:25
},
property:"years", // Maximum property name
value:25 // maximum property value
}
```
I18n conversion

Moment can read and convert the date from other languages. By default it will use ui-component's default i18n conversion. You can change the converted value by returning new value in i18n callback.

```javascript
// To convert a date to other languages

callback_function = function( value, converted, format ){
  return converted;
}

$L.moment('28/04/1996','DD/MM/YYYY').i18N( "DD-MMM-YY", callback_function );

// To read an i18ned date string

callback_function = function( str, value, i18ned ){
return convert argument 'value' to i18n; // returned value will be used for replacement check.
}

$L.moment( i18ned date,'DD-MMM-YY', { i18n : true, i18n_callback : callback_function })

'callback_function' is optional

// To convert Numbers to other languages - both will work
$L.moment('28/04/1996','DD/MM/YYYY').i18N( "DD-MMM-YY", callback_function, true );
$L.moment('28/04/1996','DD/MM/YYYY').i18N( "DD-MMM-YY", true );

// To read i18ned Numbers
$L.moment( i18ned date,'DD-MMM-YY', { i18n : true, number_conversion : true });
```

---

## multiplethemes

### multiplethemes - overview

Multiple Themes

Implementing Multiple Themes

In the last section, we talked about the philosophy of themeing in lyte. We talked about how the styles and variables are separated and how different variables(corresponding to different themes) are applied to the same styles to create new themes. In this section, we will try to implement an example of light/dark mode themes to get a better understanding of the lyte themeing engine.

Creating the files

In the last section, we created the myVariables.less file inside the themes/ folder. Let us remove this file. From the project root, run the following commands.

```html
cd css/themes/
rm myVariables.less
```

Once done, let us add the two themes - light and dark inside the themes/ folder. Run the following commands.

```html
mkdir light
mkdir dark
```

The two folders created will hold variable values for the light theme and the dark theme. Move into the folders and create a variables file for the welcome-comp.less. We recommend you create a style file and variable file for each individual component in your app the same way you would maintain a css file for each individual component. We already have a style file inside styles/ folder called welcome-comp.less. Similarly, create variables inside the themes/light and themes/dark as follows.

```css
cd light
touch welcome-comp.variables.less
cd ..
cd dark
touch welcome-comp.variables.less
```

In the above commands, you can see that we have added a .variables suffix. This is just a convention. You can name the variable file the way you want but we recommend the above. Now lets add some variables to the light and dark themes.

```css
@headerTextColor: black;
@headerPadding: 20px;
@headerMargin: 20px;
@headerBorder: solid 1px black;
@background: white;
```
```css
@headerTextColor: white;
@headerBorder: solid 1px white;
@background: black;
```

Change your styles file into something like this(styles/welcome-comp.less).

```css
@import (multiple,optional) "../themes/light/welcome-comp.variables.less";
@import (multiple,optional) "../themes/@{theme}/welcome-comp.variables.less";

h1 {
    color: @headerTextColor;
    padding: @headerPadding;
    margin: @headerMargin;
    border: @headerBorder;
    background: @background;
}
```
Explaining The Three Files Created

Now in the previous section, we created three files - 1 style file and 2 variables. Let us look at the variable files first. In the light theme's variable file(themes/light/welcome-comp.variables.less), we have created five variables - headerTextColor, headerPadding, headerMargin, headerBorder and background. But in the dark theme's variable file(themes/dark/welcome-comp.variables.less), we have only used three variables - headerTextColor, headerBorder and background. The reason for only creating three variables in the dark variables file is because we want to change only the properties that are going to change across themes and not create an entire new set of variables. Think of it this way. The light theme is the base theme - the values of properties(variables) inside it is going to be shared by multiple themes. Except for a few properties like background color, textcolor or border color most of the properties across themes remain the same and we don't want to spend time putting those variable values in our new themes(instead reuse them). So we add only the variables that need to change in the dark theme.

And this is reflected in our implementation of styles files. You can see that the first imported file is the light variables file(which acts as a base theme). After which we import the variable file of a particular theme.(@{theme} in the example above in the import statement is a variable which can take the values light or dark. When it takes the value light the statement becomes - @import "../themes/light/welcome-comp.variables.less" and when it takes dark it becomes - @import "../themes/dark/welcome-comp.variables.less").

Final Configuration

To get the ball rolling we need to do one final configuration. Go the project root directory and move into the build/ folder and open the build.js file and add the following code snippet.

```css
build: async function(options, dependencies) {
    // ...
    // ...
    // ...
    await buildUtils.init(options); /* Provides options to buildUtils.*/


    // Snippet Begins here

    var json, data;
    try {
        data = fs.readFileSync('build/less-min-conf.json', 'utf-8');
        json = JSON.parse(data);
        var themes = [ 'light', 'dark' ], key;

        themes.forEach( async function( theme ) {
            for (key in json) {
                options.themeOptions = {
                    globalVars: {
                        theme: theme
                    }
                }

                await buildUtils.compileThemes({
                    src: json[key],
                    dist: 'compiledCSS/' + theme + '/' + key
                });
            }
        } );
    } catch (e) {
        options.log.user({
            msg: e,
            color: 'red'
        })

    }

    // Snippet ends here


    /* Building of modules starts. Custom modules can be added in build function.*/
    await buildUtils.build(['copyAppDir', 'routes', 'components', 'models', 'helpers', 'mixins']);
    // ...
    // ...
    // ...
}
```

The snippet might look complex but its really simple. It first declares two themes - light and dark referenced by the themes array. It then reads the less-min-conf.json that we created in the first section. Then for each theme we've declared and for each entry in less-min-conf.json, we manually compile the less file into the css file which is what the await buildUtils.compileThemes(); function does. The src key is the source path and the dist key is the destination(Again destination can be configured the way you want it). One more thing is the options.themeOptions = {}; line. Remember that we declared a @{theme} variable in our import statement and that variable is still undefined(we never really defined the variable anywhere although it is being used). The value of this variable is passed from over here through options.themeOptions - light and dark.

So if you want to add a new theme, create the folders like you did above and declare a new string in the themes array above.(lets say our new theme's name is summer. Then the themes array is [ 'light', 'dark', 'summer' ]).

Also one more thing to note here is the destination path. The dist key is declared in such a way that the output will be present inside dist/compiledCSS/light/welcome-comp.css and dist/compiledCSS/dark/welcome-comp.css.

Move to the root folder and run slyte build to see the result

```html
cd ..
slyte build
```

Import the built css file in your index.html file and run your app to see how it works. All you need to do is bring in either the dist/css/compiledCSS/light/welcome-comp.css for light theme or the dist/css/compiledCSS/dark/welcome-comp.css for dark theme.

```html
<link rel="stylesheet" href="dist/css/compiledCSS/light/welcome-comp.css" />
```
Final Folder Structure

The final folder structure can be summed up as follows.

build/

build.js

less-min-conf.json

components/

javascript/

welcome-comp.js

templates/

welcome-comp.html

dist/

css/

themes/

dark

welcome-comp.variables.less

light

welcome-comp.variables.less

styles/

welcome-comp.less

compiledCSS

dark

welcome-comp.css

light

welcome-comp.css

css/

styles/

welcome-comp.less

themes/

dark

welcome-comp.variables.less

light

welcome-comp.variables.less

---

## plugins

### plugins - overview

Plugins

Plugins are set of javascript libraries which impart behaviour to your components. While lyte-ui-components are a set of components which create visual elements on the screen, plugins impart behaviour to these visual elements. Behaviours can be sortable, draggable, droppable, etc.

Getting Started

To use plugins in your app, all you need is the lyte-ui-components and the lyte-dom package. Open the package.json file in your app and add lyte-ui-components as a dependency as follows.

```javascript
{
    "name": "my-app",
    "version": "1.0.0",
    "description": "Description for my-app goes here",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@zoho/lyte-dom": "2.0.23",
        "@zoho/lyte-ui-component": "4.0.0"
    },
    "devDependencies": {},
    "addons": [
        "slyte-ui-component"
    ]
}
```

Once done, fire up the terminal and run the following command in same directory as your package.json.

```javascript
npm install --registry http://cm-npmregistry
```

This will install the lyte-ui-components and the lyte-dom package in your node_modules/@zoho/ folder. Now inside the node_modules/@zoho/lyte-ui-components folder, there is a plugins folder available. This contains all the plugins that you might need.

To import a plugin, simply add the path to the particular plugin in your index.html(or wherever you want to load it)

```html
<!-- Importing files -->
import "node_modules/@zoho/lyte-ui-component/plugins/lyte-requestqueue.js"
```

The above snippet will register the requestqueue plugin into your app.

The plugins are written on top of lyte-dom which is registered globally. So to use request queue you would use $L.requestQueue(...)

Plugins are also available as a separate package from lyte-ui-components. To install plugins without lyte-ui-components, follow the below steps

Open package.json of your app and add the following dependencies

```javascript
{
    "name": "my-app",
    "version": "1.0.0",
    "description": "Description for my-app goes here",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@zoho/lyte-dom": "2.0.23",
        "@zoho/lyte-ui-plugins": "2.0.0-beta-5"
    },
    "devDependencies": {},
    "addons": [
        "lyte-ui-plugins"
    ]
}
```

After you are done, run the following command in the terminal

```html
npm install --registry http://cm-npmregistry
```

Once done, open the node_modules/@zoho folder that was created. Inside it you will find the lyte-ui-plugins package and inside the package there is a plugins folder which hosts the plugins that you want. You can then import the plugins into your app to use them.

```html
<!-- lyte dom is required -->
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js></script>

<script type="text/javascript" src="node_modules/@zoho/lyte-ui-plugins/plugins/lyte-requestqueue.js></script>
```
Usage

Once you have imported the plugins into your app, their use is pretty straightforward. For example, to make an element with id something draggable, all you have to do is invoke the following snippet.

```html
<div id="something"></div>


<script>
    $L( '#something' ).draggable();
</script>
```

Invoking the snippet inside the script tag makes the div with id something draggable. The $L() is the lyte-dom library and most plugins are written on top of it(except for a few).

Apart from this, plugins can take in configuration as well. Usually, the configuration is passed in as an object when invoking the plugin. The object can be used to modify the behaviour of the plugin, pass callbacks, etc.

```javascript
$L.lazyload({
    container : '#container3',
    selector : '.modalLazy',
    onEnter : function( element ){
        console.log("ENTERED", element.getAttribute("alt"));
    },
    onExit : function( element ){
        console.log("EXITED", element.getAttribute("alt"));
    },
    onCancel : function( element ){
        console.log("CANCEL", element.getAttribute("alt"));
    },
    onLoading : function( element ){
        console.log("LOADING", element.getAttribute("alt"));
    },
    afterLoading : function( element ){
        console.log("LOADED", element.getAttribute("alt"));
    },
    onError : function( element ){
        console.log("ERROR", element.getAttribute("alt"));
    },
    onComplete : function( element ){
        console.log("COMPLETE", element.getAttribute("alt"));
    }
});
```

Sometimes plugins need to be destroyed as well. Plugins are destroyed when their associated visual elements are removed from the DOM. When a plugin is not destroyed, some of the DOM it holds onto lingers in the memory leading to increased memory usage(detached DOM). This isn't true for all plugins and it would be better to read the docs of the individual plugin to understand which plugins need to be destroyed.

```javascript
$L("#selector").draggable( "destory" );
```

---

## popularcallbacks

Popular Callbacks
onShow or onOpen

onShow or onOpen is popular callback,being widely used across many UI Components. This callback comes into picture when a component shows or opens. One popular UI Component that uses onShow callback is modal.

onHide or onClose

onHide or onClose callback, plays a vital role in dropDown component. This callback gets executed when a component hides or closes.

onSelect or onChanged

onSelect or onChanged, runs when a value in a menu or dropdown is selected or when a checkbox or radio button is changed or a nav item is selected.

Before Callback

You will find that some of the UI Components in sLyte will have a callback which is prefixed with on-before or before. You can return false from these callbacks to prevent the component from completing an action it would otherwise normally complete.

Returning false from on-before-open in accordion will prevent the accordion from opening.

```javascript
static methods() {
     onBeforeOpen: function() {
         return false; // prevents accordion from opening.
     }
}
```

Let's navigate to learn about layouts.

Previous
Next

### popularcallbacks - overview

Popular Callbacks
onShow or onOpen

onShow or onOpen is popular callback,being widely used across many UI Components. This callback comes into picture when a component shows or opens. One popular UI Component that uses onShow callback is modal.

onHide or onClose

onHide or onClose callback, plays a vital role in dropDown component. This callback gets executed when a component hides or closes.

onSelect or onChanged

onSelect or onChanged, runs when a value in a menu or dropdown is selected or when a checkbox or radio button is changed or a nav item is selected.

Before Callback

You will find that some of the UI Components in sLyte will have a callback which is prefixed with on-before or before. You can return false from these callbacks to prevent the component from completing an action it would otherwise normally complete.

Returning false from on-before-open in accordion will prevent the accordion from opening.

```javascript
static methods() {
     onBeforeOpen: function() {
         return false; // prevents accordion from opening.
     }
}
```

Let's navigate to learn about layouts.

Previous
Next

---

## preferinglyteuicomponents

Lyte UI Components: A Smarter Alternative to Other Popular UI Libraries
Introduction

In the pursuit of meeting the demands of design elements and their performances, Lyte UI is exploring cutting-edge features to build foundational elements to advanced widgets where each component is thoughtfully crafted to align with best practices in usability, scalability, and responsiveness.

Here, in this document a detail analysis is eloborated to highlight how Lyte UI components distinguishes itself from other design libraries.

A comparison at a gist
Feature	Lyte UI	Material UI	Bootstrap	Ant Design
Other framework compatability	✅ Yes	❌ React-only	✅ Yes	✅ Yes
Multi-version support	✅ Yes	⚠️ Limited	⚠️ Limited	❌ Not recommended
Theming	✅ Advanced	✅ Available	✅ Available	✅ Available
Accessibility	✅ Built-in	✅ Yes	⚠️ Varies	✅ Yes
Support	✅ Advanced	❌ No	❌ No	❌ No
The striking features

Here is a list of features that makes Lyte UI component stand taller in the crowd of other UI libraries.

Ensuring Accessibility

Lyte UI is thoughtfully designed to support WCAG compliance through a suite of accessible components and specialized plugins. It offers built-in features such as semantic markup, ARIA integration, keyboard navigation, and screen reader compatibility—enabling developers to create inclusive, user-centric applications with minimal additional effort.

Breadth of components

Lyte UI offers an extensive range of pre-built, customizable UI components designed to meet the diverse needs of modern web applications. From basic elements like buttons, forms, and tables to advanced components such as modals, accordions, charts on integrating with zoho-charts, and dynamic lists, Lyte UI provides the building blocks necessary for both simple interfaces and enterprise-grade solutions. Each component is built for performance, accessibility, and responsiveness—ensuring consistency and scalability across your entire application.

Unbeatable support

Lyte UI components is backed by a dedicated support team committed to ensuring a smooth development experience. Whether you need help troubleshooting an issue, integrating components, or customizing functionality, expert assistance is available on demand. With responsive communication channels—including cliq, dedicated support channels—developers can get quick, informed solutions with just a ping, helping teams stay on schedule and focused on delivery.

Lyte also has trained LLM's to answer your queries at lightning speed and accuracy.

Providing a solution for enterprises

Lyte UI is designed with enterprise flexibility in mind, offering support for multiple versions to accommodate diverse project timelines and integration needs. On upgrading your products to the latest release, Lyte ensures continued compatibility and critical updates across supported versions. This approach minimizes disruption, and empowers development teams to adopt new features at their own pace without compromising stability.

Adhering to Zoho UI principles

Lyte UI is built on a foundation of well-established design principles, including clarity, consistency, efficiency, and user-centricity. Lyte UI components has a seperate module, crafted to align with Zoho design standards, ensuring intuitive interaction patterns, visual harmony, and functional precision. By adhering to these principles, Lyte UI empowers teams to create interfaces that are not only visually appealing but also accessible, maintainable, and aligned with Zoho's best design practices.

Exploring web assembly

As part of its commitment to innovation and performance, Lyte UI components explores the integration of WebAssembly (Wasm) to push the boundaries of what's possible on the web. WebAssembly enables near-native execution speeds for critical workloads, making it ideal for performance-intensive features such as data visualization, real-time processing, and dynamic UI rendering. By leveraging Wasm, Lyte aims to enhance application responsiveness, reduce load times, and unlock new capabilities within the browser environment—all while maintaining a seamless developer experience.

Final word

On reading this, you would have understood how Lyte UI components would be a game changer move in the era of fast paced technology. Let's walk a mile ahead with Lyte UI components.

---

## readingmask

### readingmask - overview

Reading Mask

Dependencies
```html
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-readingMask.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-readingMask"
import $L from "@zoho/lyte-dom";
```
About

    The plugin allows the user to mask / highlight a specific region in the document, enhancing the readabilty of the content.

```javascript
//initiating readingMask
$L('yourDOMelement').readingMask()
```
Usage

     The plugin enables user to move the masking layer with the mouse movement on the document. Also, it is advisable, to call the plugin with the body (or full screen) element for seamless performance of the plugin.

Tab Focus

     Pressing the Tab key changes the dimensions of the reading mask to the dimensions of the active element of the document and highlights the respective element. Pressing the Escape key escapes from tab focus and enables the reading mask on mouse movement.

Sample Reading Mask

    Edit the height and width of the mask and then click the below generate button to enable a reading mask, and click the destroy button to remove it.

Width


Height


FreezeLayer Color


FreezeLayer Opacity


Generate Destroy

---

## requestqueue

### requestqueue - overview

Request Queue

A small plugin to batch multiple requests together.

Dependencies
```javascript
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-requestqueue.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-requestqueue"
import $L from "@zoho/lyte-dom";
```
Introduction

The request queue plugin allows you to make multiple requests together and then handle them at a single point. The callbacks for each request can be executed sequential or the callback of the first request to complete can also be executed. The request queue uses lyte-dom underneath and takes in all the properties of lyte-dom's ajax. The following example demonstrates making multiple requests with request queue.

```javascript
/* Create a request queue */
var queue = $L.reqQueue();

/* Add a request inside it */
queue.add( [ {
    url: '/comments',
    success: function() {
        /* Executed first */
        /* process data */
    }
}, {
    url: '/profile',
    success: function() {
        /* Executed second */
        /* process data */
    }
} ] );

/* Initiate the request */
queue.initiate();
```

In the above example, we created a new request queue and added two requests into the queue. The requests are passed in as an array of objects. Note that the format of each of object is similar to the objects we pass to the $L.ajax function. Each of the objects in the array follow the same API as that of the $L.ajax function. The .initiate() will make the request and success callbacks of the corresponding requests are ran sequentially.

Each of the objects passed to the .add() follows the same format as $L.ajax's API.

Batching All Requests Together

Lyte-requestqueue provides callbacks when the requests are completed as well. The .initiate() function returns a callback which resolves when all the requests are successful and fails when atleast one request fails. The example below demonstrates it.

```javascript
/* Create a request queue */
var queue = $L.reqQueue();

/* Add a request inside it */
queue.add( [ {
    url: '/comments',
    success: function() {
        /* Executed first */
        /* process data */
    }
}, {
    url: '/profile',
    success: function() {
        /* Executed second */
        /* process data */
    }
} ] );

/* Initiate the request */
var prom = queue.initiate();

/* Handle promise */
prom.then( function ( res ) {
    /* Resolves when every request is successful */
    /* res contains information about the requests that succeeded */
}, function( res ) {
    /* Rejects when some of the requests reject */
    /* res contains information about the requests that succeeded and failed */
} );
```

In the above example, the promise's .then() function can be leveraged to handle cases when all the requests are resolved and when atleast one of them fail.

Non Sequential Requests

All the requests that we've seen till now have been executed sequentially, that is the order in which they were pushed in the queue. If you want to execute a request as soon as it resolves, then you set the sequential flag to false when creating the request queue.

```javascript
/* Create a request queue with sequential false */
var queue = $L.reqQueue( { sequential: false } );

/* Add a request inside it */
queue.add( [ {
    url: '/comments',
    success: function() {
        /* Executed as soon as it completes */
        /* process data */
    }
}, {
    url: '/profile',
    success: function() {
        /* Executed as soon as it completes */
        /* process data */
    }
} ] );

/* Initiate the request */
var prom = queue.initiate();

/* Handle promise */
prom.then( function( res ) {
    /* Resolves when every request is successful */
    /* res contains information about the requests that succeeded */
}, function( res ) {
    /* Rejects when some of the requests reject */
    /* res contains information about the requests that succeeded and failed */
} );
```
Promises

Request queue is no longer limited to using only ajax objects. You can pass a promise as a parameter to the .add(). A consequence of this is that, you can now pass the promise returned by store.findAll() or store.findRecord() to the .add(). The overall promise returned by the .initiate() resolves only when all the promises resolve.

When a promise is passed to the .add(), the sequential flag is set to false and cannot be set to true.

This is available only from v2.2.8

```javascript
/* Create a request queue with sequential false */
var queue = $L.reqQueue();

var dummyPromise = new Promise( function( resolve, reject ) {
    resolve( data );
} );

dummyPromise.then( function() {
    // on resolve
}, function() {
    // on reject
} );

var userPromise = store.findAll( 'user' );

userPromise.then( function() {
    // Do something on success
}, function() {
    // Do something on failure
} );

/* Add promises inside it */
queue.add( [ dummyPromise, userPromise ] );

/* Initiate the request */
var prom = queue.initiate();

/* Handle promise */
prom.then( function( res ) {
    /* Resolves when every promise resolves */
    /* res contains information about the requests that succeeded */
}, function( res ) {
    /* Rejects atleast one promises reject */
    /* res contains information about the requests that succeeded and failed */
} );
```

You can also pass ajax requests along with promises. The request queue processes them and fires the overall callback only when all the requests and promises resolve. As mentioned above, the request queue will not call the responses sequentially even when the sequential flag is set to true.

```javascript
/* Create a request queue with sequential false */
var queue = $L.reqQueue();

var userPromise = store.findAll( 'user' );

userPromise.then( function() {
    // Do something on success
}, function() {
    // Do something on failure
} );

/* Add promises inside it */
queue.add( [ {
    url: '/profile',
    success: function() {
        // do stuff on success
    }
},
userPromise ] );

/* Initiate the request */
var prom = queue.initiate();

/* Handle promise */
prom.then( function( res ) {
    /* Resolves when every promise resolves */
    /* res contains information about the requests that succeeded */
}, function( res ) {
    /* Rejects atleast one promises reject */
    /* res contains information about the requests that succeeded and failed */
} );
```

---

## resize

### resize - overview

Resize

Lyte-resize can be used for resizing elements. It can also be used for resizing table cells. You can remove this plugin any time by calling $L( dom ).enableResize('destroy')

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/  dist/themes/compiledCSS/default/ltr/lyte-ui-resize.css"></link>
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-resize.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-resize"
import $L from "@zoho/lyte-dom";
```

The anatomy of a resize is as shown below.

Default resize

Here resize is applied for a div. By default all the resize elements will be constructed.

```javascript
$L( '.someexample' ).enableResize({ showInfo : true })
```
Resize on table

Resize can be applied for table cells. This will be width and height adjust of each cells.

This plugin also supports dynamically added cells. No need to call it again. In default table resize table width won't be adjusted based on cell width change.

Here no resize handlers will be created for resizing. Cursor will be automatically changed into resize handler while reaching resize point.

```javascript
$L( 'lyte-table-structure.tableresize' ).enableResize( { directions : [], component : "table", tags : { td : "lyte-td", th : "lyte-th", tr : "lyte-tr", table : "lyte-table-structure", thead : "lyte-thead", tbody : "lyte-tbody" } } )
```
Resize on table cells

In this resize width adjustment won't affect original table's width. Adjacent table's width will be adjusted based on currently selected cell's width.

JS
$L('lyte-table-structure.tableresizeonly').enableResize({ directions  : [],component  : "table", tags : { td : "lyte-td", th : "lyte-th", tr : "lyte-tr", table : "lyte-table-structure", thead : "lyte-thead", tbody : "lyte-tbody"},preventTable  : true  })

---

## scrollbar

### scrollbar - overview

Scrollbar

Lyte scrollbar provides a cross browser compatible and customizable scrollbar to a scrollable element.

Wrap your scrollable div over an wrapper div for positioning scrollbars through css.

To listen scroll events always use onscroll action or bind ur scroll event in capturing phase. Because continuous wheel event in scrollbar plugin prevent all the bubbling phase scroll events.

Scrollbars will be visible if its scrollable in particular direction.

You can remove already applied scrollbar at anytime by calling $L( elem ).removeScroll()

If the contents of the scrollbar dynamically changed at any time you can call $L( elem ).resetScrollbar() to update scrollbar positions.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-scrollbar.css"> </link>

<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-scrollbar.js; </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-scrollbar"
import $L from "@zoho/lyte-dom";
```

The anatomy of a scrollbar is as shown below.

Default scrollbar

Default scrollbars become visible on mouseenter event. Horizontal scrollbar placed in bottom and vertical scrollbar placed in right side.

```javascript
$L( '.defaultScrollbar' ).scroll();

// binding scroll event listener in addEventListener

$L( '.defaultScrollbar' ).get( 0 ).addEventListener( 'scroll', function(){
// scroll handler
}, true );
```
```html
<div style="width: 350px;height: 200px" class = "wrapperElement" onscroll = "{{action('scroll',event)}}"> // onscroll ==> scroll action binding
               <div class="defaultScrollbar">
                   <div style="width: 500px;">
                       Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus. Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
                   </div>
               </div>
           </div>
```
Scrollbar visible on scroll

Scrollbar will become visible only on content scroll if showOn property set as 'scroll'

```javascript
$L( '.defaultScrollbar1' ).scroll({ showOn : "scroll" })
```
```html
<div style="width: 350px;height: 200px">
                       <div class="defaultScrollbar1">
                           <div style="width: 500px;">
                             Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus. Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
                           </div>
                       </div>
                   </div>
```
Scrolling without scrollbar

You can scroll without scrollbar by preventing scrollbar creation

```javascript
$L ( '.defaultScrollbar2' ) . scroll ( { preventVertical : true , preventHorizontal : true } )
```
```html
<div style="width: 350px;height: 200px;">
                       <div class="defaultScrollbar2">
                           <div style="width: 500px;"> Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus. Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus. </div>
                       </div>
                   </div>
```

---

## scrollspy

### scrollspy - overview

Scrollspy

Scrollspy is used to spy the elements of the given selectors on scroll if they are in the visible area or not. It will invoke a callback on every change in the visible area. lyteSpyActive class will be added for active elements. you can use $L(spiedDiv).removeScrollspy() for removing scrollspy
For better performance use scrollspy plugin along with the lyte-scrollbar.

Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-scrollspy.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-scrollspy"
import $L from "@zoho/lyte-dom";
```
Default scrollspy

Scrollspy uses top as default position. All element matches( * ) inside the scrollable Element are spied. Whenever an element's top position is in the visible part is considered as an active element

```javascript
$L( 'lyte-menu-body' ).scroll().scrollspy();
```
```html
<lyte-menu-box>
    <lyte-menu-body>
        <lyte-menu-group style = " display : block" >
            <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 1 </lyte-menu-label>
            <lyte-menu-item> Accordion </lyte-menu-item>
            <lyte-menu-item> Autocomplete </lyte-menu-item>
            <lyte-menu-item> Breadcrumb </lyte-menu-item>
            <lyte-menu-item> Button </lyte-menu-item>
            <lyte-menu-item> Calculator </lyte-menu-item>
        </lyte-menu-group>
        <lyte-menu-group style = " display : block ">
            <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 2 </lyte-menu-label>
            <lyte-menu-item> Calendar </lyte-menu-item>
            <lyte-menu-item> Checkbox </lyte-menu-item>
            <lyte-menu-item> Colorbox </lyte-menu-item>
            <lyte-menu-item> Color picker </lyte-menu-item>
            <lyte-menu-item> Date range picker </lyte-menu-item>
        </lyte-menu-group>
    </lyte-menu-body>
</lyte-menu-box>
```
Scrollspy for bottom

Whenever the spied element's bottom crosses the scrollable element's bottom, it is marked as active

```javascript
$L( '.outFlex' ).scroll().scrollspy( { position : "bottom", query : "h3" } );
```
```html
<div class = "outFlex">
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 1 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 2 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 3 </h3>
    </div>
</div>
```
Component 1
Component 2
Component 3
Component 4
Component 5
Component 6
Scrollspy for spying multiple elements

You can spy multiple elements while scrolling. Elements which are in the visible region are considered as active elements

```javascript
$L( '.outFlex' ).scroll().scrollspy( { position : "all", query : "h3" } );
```
```html
<div class = "outFlex">
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 1 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 2 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 3 </h3>
    </div>
</div>
```
Component 1
Component 2
Component 3
Component 4
Component 5
Component 6

---

## scrollto

### scrollto - overview

ScrollTo

A plugin to animate scrolling and manipulate scroll positions of a container.

Dependencies
```javascript
<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-scrollTo.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
     ---or----
 <!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-scrollTo"
import $L from "@zoho/lyte-dom";
```
Introduction

You can change and animate the scroll positions of an element by using the $L().scrollTo function.

```javascript
$L( '#introContainer' ).scrollTo( 200, { duration: 2000 } );
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
scroll

The first argument corresponds to the scrollTop and scrollLeft position the div scroll to. Apart from a number, the first argument can take in an object, DOM Node, LyteDOM Object and percentage.

The second argument is an options parameter, taking in the duration, onAfter callback, the queue parameter, easing function etc.

By default, the easing function is ease-in-out

By default, the duration will be 0 and durations are calculated in ms

Scrolling To Elements

The example demonstrates scrolling to an element with scrollTo plugin.

```javascript
$L( '#diffDiv' ).scrollTo( $L( '#end' ), { duration: 2000 } ); // Passing a lyte-dom object
$L( '#diffDiv' ).scrollTo( document.getElementById( 'end' ), { duration: 2000 } ); // Passing a DOM

// You can also pass in objects and percentages
$L( '#diffDiv' ).scrollTo( { left: 100, top: 100 }, { duration: 2000 } );
$L( '#diffDiv' ).scrollTo( '30%', { duration: 2000 } );
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
This is the span we are trying to scroll to
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
scroll

The percentage corresponds to the amount of scrollable area available( scrollHeight - height of the container )

Queued Animation

Animations in scrollTo can be queued as well. When it is queued, the first axis gets scrolled to in half the time(duration) after which the other axis starts scrolling completing its animation during the remaining time.

```javascript
$L( '#queuedContainer' ).scrollTo( 200, { duration: 3000, queue: true } );
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
scroll

In the above example, the element gets scrolled to the x axis in 1.5 seconds and takes the remaining 1.5 seconds to scroll to the y axis.

Callbacks

There are two callbacks for the scrollTo plugin. The onAfter callback and the onAfterFirst callback. The onAfterFirst callback is available only when the queue option is set to true and when the first axis completes its scroll. The onAfter callback is fired when the scroll animation fully completes.

```javascript
$L( '#callbackDiv' ).scrollTo( 200 , { duration: 3000,
    queue: true,
    onAfterFirst: function () {
        // do stuff
    },
    onAfter: function() {
        // do more stuff
    }
} );
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
scroll

---

## searchplugin

### searchplugin - overview

Search

Search plugin is used to search and filter from the existing rendered DOM. You can bind search plugin for lyte-input or input element. Use $L(selector).removeSearch() for removing searchplugin.

```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-search.css"> </link>

<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-search.js">
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-search"
import $L from "@zoho/lyte-dom";
```
Search

You need to pass selectors of searchable elements and their parent container selectors

scope - this key indicates the selector of the container which contains all the searchabe elements. First matched element in the document will be associated to the corresponding search element.

search - this key indicates the selector of elements to be searched. Text content of these element will be checked with typed value.

target - this key indicates the selector of the element to be hidden based on the search results.



```javascript
$L ( your Element ) . search ( { "scope" : "lyte-tbody" , "search" : "lyte-td:first-of-type" , "target" : "lyte-tr" } )
```
Search

Sometimes search may be performed in grouped elements. Normal search won't hide group name even all of its searchable contents are hidden. In this case if the selector of the group is provided in related key search will automatically show / hide group based on the result.

```javascript
$L ( your Element ) . search ( { "scope" : "lyte-drop-body" , "search" : "lyte-drop-item" , "related" : "lyte-drop-group" } )
```
Related to tree

You can also search inside tree. It will open the tree if the matched element is in the closed part of tree. Scope value should be the top most lyte-tree

```html
<lyte-input> </lyte-input>

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
$L ( 'lyte-input' ) . search ( { "scope" : "lyte-tree.sampleclass" , "search" : "p.value" , "related" : ".lyteTreeBodyDiv", "component" : "tree" } )
```
Related to accordion

You can also search inside accordion component. It will open particular accordion if its not opened

```html
<lyte-input> </lyte-input>

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

$L( 'lyte-input' ).search( { "scope" : "lyte-accordion", "search" : "li", "component" : "accordion"} )
```
Related to dropdown

You can also search inside a closed dropdown. If it matches any lyte-search will open dropdown

```html
<lyte-dropdown>
	<template is = "registerYield" yield-name = "yield">
	<lyte-drop-button>
		<lyte-input> </lyte-input>
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

$L( 'lyte-input' ).search( { "scope" : "lyte-drop-body", "search" : "lyte-drop-item", "component" : "dropdown"} )
```

---

## shortcut

### shortcut - overview

Shortcut

A light weight plugin that allows you to define shortcuts for your website.

Dependencies
```javascript
<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-shortcut.js"> </script>
<script type="text/javascript" src="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-shortcut"
import $L from "@zoho/lyte-dom";
```
Registering Keys

Shortcut allows you to register keys as shortcuts and bind callbacks to them.
The examples below show us how to register keys in lyte-shortcut.

Press control + c for default behaviour.
Press a c for gmail style sequences.
Press a b a b for konami code.
Press any digits to test a regex bound to shortcut.
Press Meta and l or Control and m or n to test the shortcuts that are registered using an array.

Press Alt key once/twice to test the wait attribute. The wait attribute takes a number in milliseconds and only executes the current command if no other keys are matched within the wait period.
Press command/windows key and s to test the preventDefault attribute. The preventDefault attribute takes a boolean value and prevents the default browser behaviour. By default preventDefault is set to false.

```javascript
shortcut.registerKey( 'control+c' , function() {
    console.log( ' Default: control + c clicked! ' );
} );
```
```javascript
shortcut.registerKey( ' a c ' , function() {
    console.log( 'Gmail Style Sequence: a c clicked!' );
} );
```
```javascript
shortcut.registerKey( 'a b a b' , function() {
    console.log( 'Konami Code: a b a b!' );
} );
```
```javascript
shortcut.registerKey( ' /\\d/i ' , function() {
    console.log( 'Regex: Some number clicked!' );
} , {
    type: 'regex'
} );
```
```javascript
shortcut.registerKey(["Meta+l", "Control+m", "n"], function () {
    console.log( 'Array: Meta+L OR Control+m OR n pressed!' );
})
```
```javascript
shortcut.registerKey( '#' , function() {
    console.log( '# pressed!' );})
shortcut.registerKey( 'z+?' , function() {
    console.log( 'z+? pressed!' );
} );
```
```javascript
shortcut.registerKey( 'alt' , function() {
    console.log( 'Alt key pressed once!' );
}, {
    wait : 400
} );
shortcut.registerKey( 'alt alt' , function() {
    console.log( 'Alt key pressed twice!' );
} );
```
```javascript
shortcut.registerKey( 'meta+s' , function() {
    console.log( ' meta+s! ' );
}, {
    preventDefault : True
} );
```

Registering shortcuts with the registerKey() function requires that the key pairs used must be similar to those found in the KeyboardEvent.key API.
The key names contained in KeyboardEvent.key should be used to register and unregister shortcut combinations.
So that the shortcut can be added for any of the keys directly using the key names given by KeyboardEvent.key.
Let us consider few examples in which we need to add a shortcuts including the keys $ or Command/Windows Key, so we can do so as follows:
```javascript
shortcut.registerKey( '$' , function() {
    console.log( '$ pressed!' );
} );

shortcut.registerKey( 'Meta + h' , function() {
    console.log( 'Meta + h pressed!' );
} );
```

You cannot register multiple callbacks to the same key combination . If you try to register a new callback to an existing shortcut, the existing callback will be replaced by the new callback.

Interaction With Ui Components

A menu is a list of commands available to the user in the current context.

To invoke a command in the menu by using a shortcut, you have to pass an attribute to the lyte-menu-item tag. The lyte-shortcut attribute passed to the lyte-menu-item tag is an object. It can accept the following keys.



key - The keys that need to be pressed to invoke this command.
type - Whether it is a regex or not.
wait - The amount of time to wait in milliseconds before executing the command.


Note: The lyte-shortcut is ran through a JSON.parse function so it should be a proper JSON object. An Example is shown below

```html
<lyte-menu on-menu-click={{method("process")}} lt-prop-event="click" lt-prop-query=".file-menu" lt-prop-yield="true">
    <template is="registerYield" yield-name="yield">
        <lyte-menu-body class="menuBody">
            <lyte-menu-group>
                <lyte-menu-item data-value="New File Created" lyte-shortcut='{"key":"control+n"}'>
                    <lyte-menu-label>New File</lyte-menu-label>
                    <lyte-menu-description>Control+N</lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item data-value="Open File..." lyte-shortcut='{"key":"control+o"}'>
                    <lyte-menu-label>Open File...</lyte-menu-label>
                    <lyte-menu-description>Control+O</lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item data-value="Open Folder...">
                    <lyte-menu-label>Open Folder...</lyte-menu-label>
                </lyte-menu-item>
                <lyte-menu-item data-value="File Saved!" lyte-shortcut='{"key":"control+s"}'>
                    <lyte-menu-label>Save</lyte-menu-label>
                    <lyte-menu-description>Control+S</lyte-menu-description>
                </lyte-menu-item>
                    <lyte-menu-item data-value="Save As..." lyte-shortcut='{"key":"control+shift+s"}'>
                    <lyte-menu-label>Save As...</lyte-menu-label>
                    <lyte-menu-description>Control+Shift+S</lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item data-value="Save All">
                    <lyte-menu-label>Save All</lyte-menu-label>
                </lyte-menu-item>
            </lyte-menu-group>
            <lyte-menu-group>
                <lyte-menu-item data-value="New Window Opened" lyte-shortcut='{"key":"control+shift+n"}'>
                    <lyte-menu-label>New Window</lyte-menu-label>
                    <lyte-menu-description>Control+Shift+N</lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item data-value="Window Closed" lyte-shortcut='{"key":"control+shift+w"}'>
                    <lyte-menu-label>Close Window</lyte-menu-label>
                    <lyte-menu-description>Control+Shift+W</lyte-menu-description>
                </lyte-menu-item>
            </lyte-menu-group>
            <lyte-menu-group>
                <lyte-menu-item data-value="File Closed" lyte-shortcut='{"key":"control+w"}'>
                    <lyte-menu-label>Close File</lyte-menu-label>
                    <lyte-menu-description>Control+W</lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item data-value="revert file">
                    <lyte-menu-label>Revert File</lyte-menu-label>
                </lyte-menu-item>
                <lyte-menu-item data-value="close all files">
                    <lyte-menu-label>Close All Files</lyte-menu-label>
                </lyte-menu-item>
            </lyte-menu-group>
            <lyte-menu-group>
                <lyte-menu-item data-value="exit">
                    <lyte-menu-label>Exit</lyte-menu-label>
                </lyte-menu-item>
            </lyte-menu-group>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Shortcuts On Inputs

By default, lyte-shortcut does not fire when an input/text-area/select/<<element>>[contenteditable="true"] is focused.
By default, lyte-shortcut does not fire if classList of active element contain lyteDummyEventContainer.
To fire callbacks, simply add the lyte-shortcut class to the corresponding element.

Unregistering Keys

Registered shortcuts can be unregistered.

unregisterKey() can be used to unregister a particular shortcut.
unregisterAll() can be used to unregister all the registered shortcuts.


```javascript
shortcut.unregisterKey('control+a');
```
```javascript
shortcut.unregister(["control+e", "f", "meta+k"])
```
```javascript
shortcut.unregisterAll();
```

---

## sortable

### sortable - overview

Sortable

A Sortable plugin provides reorderable drag-and-drop lists to the user.

This plugin can be called with any valid CSS selector ie., id or class. When called with id selector, the callbacks will be available only for first element with that id. But when called with class selector, all the elements having that class will share the same callbacks. Have a look at the below code snippet for better understanding.

```javascript
$L("#selector").sortable();
OR
$L(".selector").sortable();
```
Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-sortable.css" > </link>

<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-sortable.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>

---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-sortable"

import "$L from "@zoho/lyte-dom"
```
Add Dynamic Elements

There are two ways to make dynamically created elements sortable

Method 1:

Call the addToSortable method. Example
```javascript
var parentElement = $L("#selector")[0];
parentElement.addToSortable(newChild);
```

Method 2:

Get the class from the parent by calling an utility function getSortableClass and add it to the newly created element along with "sortable-element" class. Example

```javascript
var className = $L( "#selector" )[0].getSortableClass ();
$L( newChild ).addClass( "sortable-element " + className );
```

Any one of the above mentioned ways can be used to make the element sortable.

Destroy

To destroy the sortable behaviour of the elements, call the sortable method with "destroy" as the arguement passed to the method.

```javascript
$L("#selector").sortable( "destroy" );
OR
$L(".selector").sortable( "destroy" );
```
Basic Sortable

A basic sortable allows reordering of the items from the list.

```javascript
$L("#selector").sortable();
```
Connected Lists

Sort items from one list into another and vice versa, by passing a selector into the connectedWith option. The simpliest way is to provide id to the lists and then pass the ids to the sortable function (i.e., connectedWith : "#id1,#id2" )

```javascript
$L("#connectedList1").sortable({
    connectedWith : "#connectedList2"
});
```
Properties

Below explained are some of the properties which helps in customizing the sortable functionality based on your needs. Have a look at the API page for all the properties.

cancel

Cancel property is helpful when you want to restrict dragging of the sortable element on clicking on some element(s) which are inside the sortable element. Suppose you have an input field inside a sortable element and you dont want the sortable element to be dragged by holding the input field. So you can provide a selector to the input field and provide that selector as a value to the cancel property. So this will enable us to move the sortable element by holding anywhere else other than the input field inside the sortable element.

```javascript
$L("#connectedList1").sortable({
    cancel : "input"
});
```
restrict

Restrict propety restricts one or more element(s) from being sortable in a group of elements. For example, you dont want the 3rd and the 5th element to be sortable in the below given example. So provide a unique selector to those elements and pass that selector value to restrict property. So all the other elements leaving the 3rd and 5th element will be sortable.
Here, we have provided restrictItem class to the 3rd and 5th element.

```javascript
$L("#connectedList1").sortable({
    restrict : ".restrictItem"
});
```
items

The sortable element can be dragged or sorted if the mousedown happens on the element matching the selector value passed to the item property. It is similar to handle. If specified, sortable happens only on clicking the matching selector items.

Although, both items and cancel helps in restricting sortable of an element, but there is a major difference on its usage. You wont be able to drag any sortable element if the mousedown happens on the specified cancel element where as in case of items, the sortable element can be moved only when mousedown happens on the specified item.

In the below example, the elements can be dragged only by holding the hamburger button.

```javascript
$L("#connectedList1").sortable({
    items : ".ham-menu"
});
```
containment

It specifies the element containing the sortable element, outside of which the sortable element cannot be dragged. Containment can take "parent" as a value or other valid selector. If "parent" is provided as the value then the sortable elements cannot be moved out of its parent container.
In the below example, the sortable elements cannot be moved out of the green bordered area.

```javascript
$L("#connectedList1").sortable({
    containment : ".outerDiv"
});
```
scrollDivX

scrollDivX property specifies the div with the following properties i) overflow-x: scrollable and ii) scrollDiv X must be sortable element's parent.

This property accepts valid css selector which can uniquely identify the scrollable container.

```javascript
$L("#connectedList1").sortable({
    scrollDivX : "#scrollDiv" ,
    connectedWith : ".nestedSortable"
});
```
droppable

Setting the value of the droppable property true will enable the list to accept items from other lists it is connected to, else it won't aceept. By default it is set to true.

This property accepts boolean value ie. true or false

```javascript
$L("#connectedList1").sortable({
    connctedWith : ["#connectedList2"],
    droppable : true or false
});
```
draggable

Draggable property when set to true makes the items from the specified list draggable. By default the value is set to true.

This property accepts boolean value ie. true or false

```javascript
$L("#connectedList1").sortable({
    draggable : true or false
});
```
Callbacks - usage

The example below provides an idea about when the callbacks are invoked. Drag the below element to check. For more details about the callbacks, dive into methods in the API section.

```javascript
$L("#connectedList1").sortable({
    onReady : function( arguments ){
        \\Do Something
    },
    onSelect : function( arguments ){
        \\Do Something
    },
    onDragStart : function(){
        \\Do Something
    },
    onDrag : function( arguments ){
        \\Do Something
    },
    onPlaceholder : function( arguments ){
        \\Do Something
    },
    onBeforeDrop : function( arguments ){
        \\Do Something
    },
    onDrop : function( arguments ){
        \\Do Something
    }
});
```

### sortable - api

Properties

The properties should be provided during initialization.

Cancel

This property prevents sorting of an element on the occurance of mouse down.

Name	:	cancel
DataType	:	String
Description	:	Prevents sorting if mousedown happens on the elements matching the selectors. For more than one selectors, they should be comma seperated in a single string.
Connected with

This is a property where items of different list can be connected with each other. Mention the selectors of the different lists with the comma so that it can be connected seemlessly.

Name	:	connectedWith
DataType	:	String
Description	:	This is a two-way relationship which connects the items in both directions making them sortable by default. For more than one selectors, they should be comma seperated in a single string.
Containment

This property helps you to construct a cointainer, outside which the items remain immovable.

Name	:	containment
DataType	:	string
Description	:	Any valid selector which uniquely identifies the element containing the sortable elements outside of which the sortable elements cannot be moved. If provided "parent", then the elements will be movable inside their parent container only. Note : The element specified for containment must have a calculated width and height.
Cursor at

This property lets you to define the position, in which you wish to move the sorting element from.

Name	:	cursorAt
DataType	:	object
Description	:	Moves the sorting element so that the cursor always appears to drag from the same position.
Note : Object value consists of either left or top attribute or both.
Disabled
Name	:	disabled
DataType	:	string
Description	:	A class name that gets applied to the placeholder if its position is not valid.
Draggable
Name	:	draggable
DataType	:	boolean
Default	:	true
Description	:	Makes the items from the specified list draggable.
Droppable
Name	:	droppable
DataType	:	boolean
Default	:	true
Description	:	When set to true, it enables the list to accept items from other sortable lists to which it is connected.
Items
Name	:	items
DataType	:	string
Description	:	Enables sorting if mousedown happens on the items matching the selectors. If specified, then sortable happens only on clicking the matching selector items.
Placeholder
Name	:	placeholder
DataType	:	string
Description	:	A class name that gets applied to the placeholder.
Restrict
Name	:	restrict
DataType	:	string
Description	:	Restricts the elements matching the selectors from being sortable.
Tolerance
Name	:	tolerance
DataType	:	string
Default	:	intersect
Description	:	It specifies the mode of calculation for movement when a sortable item hovers over another sortable item.
"intersect" : The item overlaps other item fully.
"pointer" : The mouse pointer overlaps other item.
scrollDivX
Name	:	scrollDivX
DataType	:	string
Default	:	undefined
Description	:	Specifies the div which contains the sortable elements and whose overflow-x is scrollable.
scrollDivY
Name	:	scrollDivY
DataType	:	string
Default	:	undefined
Description	:	Specifies the div which contains the sortable elements and whose overflow-y is scrollable.
Omit restricted
Name	:	omitRestricted
DataType	:	boolean
Default	:	false
Description	:	If true, removes the restricted items from the list while calculating initial and final index position of the item which is dragged.
Clone
Name	:	clone
DataType	:	boolean
Default	:	false
Description	:	If true, performs deep cloning of the element to be dragged.
Orientation

It determines the axis along which the sortable elements can be dragged and sorted.

Name	:	orientation
DataType	:	string
Default	:	default
Description	:	By default, the sortable element can be dragged in any direction and the sorting will be done based on the draggable element's top and bottom value, that is sortable places will be on either up or down. If orientation is horizontal, then the elements can be dragged in any direction but the sorting will happen based on the draggable element's left and right position, that is sortable position will appear either on the left or on the right. If orientation is vertical, then the sortable element can only be moved vertically and the sortable position will appear either on the top or at bottom.
Prevent Default
Name	:	preventDefault
DataType	:	object
Default	:	{ "mousedown" : true, "mousemove" : true }
Description	:	If true, preventDefault will be triggered from the particular event.
Append to
Name	:	appendTo
DataType	:	string
Default	:	parent
Description	:	This property is used when you use helper method to return a helper element that will be dragged to sort with other sortable elements. The draggable helper element will be appended the element that matches with this given value. By default it's the parent element.
Prevent Drop At End
Name	:	preventDropAtEnd
DataType	:	boolean
Default	:	true
Description	:	Setting this property value as true will restrict dropping sortable elements at the end of the list if there is any restricted item at the end. Setting it to false will allow the drop to happen.
Prevent Drop At Start
Name	:	preventDropAtStart
DataType	:	boolean
Default	:	true
Description	:	Setting this property value as true will restrict dropping sortable elements at the beginning of the list if there is any restricted item at the beginning. Setting it to false will allow the drop to happen.
Methods

Lyte-sortable provides the following methods.

onReady
Name	:	onReady
Description	:	Triggered when the sortable is created.
onSelect
Name	:	onSelect
Description	:	This event is triggered whenever the user selects the item to drag.
Note : By default it returns true. If it returns false then the selected item cannot be dragged.
onDragStart
Name	:	onDragStart
Description	:	Triggered once, but everytime while starting to drag the element.
onDrag
Name	:	onDrag
Description	:	Triggered when the selected item is being dragged.
onPlaceholder
Name	:	onPlaceholder
Description	:	Triggered during dragging an item to check whether its placeholders position is valid or not. It is used to provide custom validation rules. Should return true if the position is valid, else false.
Note: Callback should return either true or false.
onBeforeDrop
Name	:	onBeforeDrop
Description	:	This event is triggered when the user drops the item but the placeholder is still available.
Note: If the callback returns false then the element will return back to its initial position.
onDrop
Name	:	onDrop
Description	:	This event is triggered when the user have dropped the item and the DOM position has changed.
onEnter
Name	:	onEnter
Description	:	This event is triggered when a sortable item is moved into a sortable list.
onLeave
Name	:	onLeave
Description	:	This event is triggered when a sortable item is moved away from a sortable list.
helper
Name	:	helper
Description	:	This function will be triggered as soon as a sortable element is selected for dragging.On passing the return element to the DOM, this element acts as a substitute element to the dragElement
Utility Functions

The following contains the Utility function of lyte-sortable .

destroy
Name	:	destroy
Description	:	To destroy the sortable behaviour of the elements, call the sortable method with "destroy" as the arguement passed to the method.
cancel
Name	:	cancel
Description	:	Cancels the changes in the current sortable and reverts it to the state prior to when the current sort was started.
enable
Name	:	enable
Description	:	Enables sortable functionality of element(s) whose sortable functionality was disabled by calling the disable function on them.
disable
Name	:	disable
Description	:	Disables the sortable functionality of item(s). The item(s) on which disable is called should be sortable item(s)
enableDroppable
Name	:	enableDroppable
Description	:	Enables droppable functionality of sortable parent whose droppable functionality was disabled by calling the disableDroppbale function.
disableDroppable
Name	:	disableDroppable
Description	:	Disables droppable functionality of sortable parent.
getSortableClass
Name	:	getSortableClass
Description	:	Provides the child's class for the sortable element.
addToSortable
Name	:	addToSortable
Description	:	Add the sortable feature to the child element.

---

## sticky

### sticky - overview

Sticky

Sticky plugin provides sticky positioning for the given elements( not for table elements ). Whenever the element is scrolled it will be positioned in the visible region until its parent crosses the visible portion. You can use left, right, top, bottom positions for sticky. For bottom and right position sticky elements should be placed at bottom in the DOM tree. you can use $L( stickyElem ).removeSticky() for removing sticky
For better performance use sticky plugin along with lyte-scrollbar

Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-sticky.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>

---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-sticky.js"
import $L from "@zoho/lyte-dom";
```

The anatomy of a sticky is as shown below.

Default sticky

Sticky uses top as default position. By default all the first child of children of scrollble element ( element matches *>*:first-child selector ) are considered as sticky elements.

In this example lyte-menu-body is a scrollable element. All the lyte-menu-label elements inside lyte-menu-group are need to be sticked.

```html
<lyte-menu-box>
<lyte-menu-body>
<lyte-menu-group style = " display : block ">
    <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 1 </lyte-menu-label>
    <lyte-menu-item> Accordion </lyte-menu-item>
    <lyte-menu-item> Autocomplete </lyte-menu-item>
    <lyte-menu-item> Breadcrumb </lyte-menu-item>
    <lyte-menu-item> Button </lyte-menu-item>
    <lyte-menu-item> Calculator </lyte-menu-item>
</lyte-menu-group>
<lyte-menu-group style = " display : block ">
    <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 2 </lyte-menu-label>
    <lyte-menu-item> Calendar </lyte-menu-item>
    <lyte-menu-item> Checkbox </lyte-menu-item>
    <lyte-menu-item> Colorbox </lyte-menu-item>
    <lyte-menu-item> Color picker </lyte-menu-item>
    <lyte-menu-item> Date range picker </lyte-menu-item>
</lyte-menu-group>
</lyte-menu-body>
</lyte-menu-box>
```
```javascript
$L( 'lyte-menu-body' ).scroll().sticky( { query : "lyte-menu-label" } );
```
Sticky at bottom

Sticky elements can be placed at bottom position

```html
<div class = "outFlex">
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 1 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 2 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 3 </h3>
    </div>
</div>
```
```javascript
$L( '.outFlex' ).scroll().sticky( { position : "bottom", query : "h3" } );
```
Sticky at left

Sticky elements can be placed at left position

```html
<div class = "someScrollableDiv">
    <div>
        <h3> Component 1 </h3>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
    </div>
    <div>
        <h3> Component 2 </h3>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
    </div>
    <div>
        <h3> Component 3 </h3>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
    </div>
</div>
```
```javascript
$L( '.someScrollableDiv' ).scroll().sticky( { position : "left" } );
```
Sticky at right

Sticky elements can be placed at right position

```html
<div class = "someScrollableDiv">
    <div>
         Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
         <h3> Component 1 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 2 </h3>
    </div>
    <div>
        Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
        <h3> Component 3 </h3>
    </div>
</div>
```
```javascript
$L( '.someScrollableDiv' ).scroll().sticky( { position : "right" } );
```
Top and bottom

You can stick elements at both top and bottom. Elements corresponding to the sections not visible in the view will be sticked at either top or bottom.

In this position absolute will be used ( insteadof sticky ) for sticking elements. lyteStickyActive class will be added for top, bottom sticked elements.

If non fixed area is less than provided minHeight( default 100px ) remaining elements will not be fixed. If fixed element count exceeds provided maxCount remaining elements will not be fixed.

```html
<lyte-menu-box>
<lyte-menu-body>
<lyte-menu-group style = " display : block ">
    <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 1 </lyte-menu-label>
    <lyte-menu-item> Accordion </lyte-menu-item>
    <lyte-menu-item> Autocomplete </lyte-menu-item>
    <lyte-menu-item> Breadcrumb </lyte-menu-item>
    <lyte-menu-item> Button </lyte-menu-item>
    <lyte-menu-item> Calculator </lyte-menu-item>
</lyte-menu-group>
<lyte-menu-group style = " display : block ">
    <lyte-menu-label style = " background : yellow ; z - index : 10 "> Component 2 </lyte-menu-label>
    <lyte-menu-item> Calendar </lyte-menu-item>
    <lyte-menu-item> Checkbox </lyte-menu-item>
    <lyte-menu-item> Colorbox </lyte-menu-item>
    <lyte-menu-item> Color picker </lyte-menu-item>
    <lyte-menu-item> Date range picker </lyte-menu-item>
</lyte-menu-group>
</lyte-menu-body>
</lyte-menu-box>
```
```javascript
$L( 'lyte-menu-body' ).scroll().sticky( { query : "lyte-menu-label", position : "topbottom" } );
```

---

## stylesandvariables

### stylesandvariables - overview

Styles and variables

Separating Styles And Variables

In the last document, we created a styles/ folder and we mentioned about the separation of styles and variables. This separation is important for themeing in lyte especially when you are trying to create multiple themes. Lets take an example of a light mode/dark mode theme that you might need in your web app.

But First

What do we mean by styles and variables? Well the styles represent the actual css rules used on your elements and the variables are the values of the css properties used in the rules.

```css
@import "../themes/myVariables.less";

h1 {
	color: @headerTextColor;
	padding: @headerPadding;
	border: @headerBorder;
}
```

In the above example, the h1 css rule is what we call the style and the @headerTextColor, @headerPadding and @headerBorder are what we call the variables. The h1 css rule is defined in styles/ whereas the @headerTextColor, @headerPadding and @headerBorder are defined inside another folder(called themes/). These variables are then imported into the styles file and then used which can be seen in the first line.

Let us try to style our h1 tag in our welcome-comp.html. First open the styles/welcome-comp.less file that you created in the last section and add the snippet you see above.

Next we will create the variables folder. From the root directory of your project(blog-app/), move into the css/ folder. Then run the following commands

```html
cd css/
mkdir themes
cd themes/
touch myVariables.less
```

The above will create a myVariables.less file in your newly created themes/ folder. Open the file in any text editor and add the follow lines

```css
@headerTextColor: blue;
@headerPadding: 20px;
@headerBorder: solid 1px brown;
```

Now navigate back to the root directory and run slyte serve and open your app.

```html
cd ../../
slyte serve
```

When you open the app, you will find that the styles defined above were applied to the element.

Philosophy Of Themeing in Lyte

Lets say your company decides to build two themes, light mode and dark mode for your webapp. The designers come with up their mockups and prototypes for how the app should look for the two different modes. You look at the mocks and try to come up with ways to maintain the css files for the two different themes. What you realize is, although there are two modes which are visually distinctive, the things that changed are not the css rules themselves but the values of the properties of the css rules. Now there are various ways to go about achieving this. You may decide to add a class to body tag to distinguish the mode and change the values of properties from the class or you might bring in a new css file for the dark mode that overrides some of the values of properties of light mode css. But in lyte, we separate the styles and the variables(values of properties) for the above reason. When we want to create a new theme, we simply change the variables and apply it on the same styles. This allows us to make new themes without a big hassle since the CLI essentially takes care of the build step. Now it is a bit more complicated than this but this is the general gist of it.

---

## tablenavigator

### tablenavigator - overview

Table Navigator

Dependencies
```html
<!-- Individual plugin files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-tableNavigator.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-tableNavigator.js"
import $L from "@zoho/lyte-dom";
```
About

    The plugin allows the user to navigate through a table and its cells (htmlTable/ lyteTable/ expressTable). It is called with the Table element. The focus is also transferred to the focusable elements inside a cell.

```javascript
//initiating tableNavigator
$L('#tableElement').tableNavigator()
```
```html
<table  id="tableElement">
     <tbody">
        <% populateObject.forIn (function(val,key) { %>
        <tr>
            <td>{{val.key1}}</td>
            <td>{{val.key2}}</td>
            <td>{{val.key3}}</td>
        </tr>
        <% }) %>
    </tbody>
</table>
```
Navigation

    => Navigating inside a table is the same as navigating in an excel sheet. The Arrow Keys move the focus Up, DOWN, RIGHT and LEFT respectively.
    => Pressing the SHIFT key with the right or left arrow key skips the other focusable elements in the current TD(Table Data) and moves the focus to the adjacent TD/Cell.
    => When the HOME or END key is pressed the focus is transferred to the first or the last element in the Table Row respectively.
    => When the META key is pressed along with the Home/ End key the First and the Last element in the table are focused.
    =>If an element has an attribute "disabled / lt-prop-disabled" the element will not be given focus rather the TD containing the element or next focusable element is focused.

Sample Table Navigator

Head 0	Head 1	Head 2	Head 3	Head 4	Head 5	Head 6
	00	Click	
Chennai
Mumbai
Delhi
Kolkata
	Click  
Chennai
Mumbai
Delhi
Kolkata
	Agra	
	10	
Chennai
Mumbai
Delhi
Kolkata
	Click   Click 	Click	Madurai	
	20	Click	22	
Chennai
Mumbai
Delhi
Kolkata
	Banglore	
	30	
Chennai
Mumbai
Delhi
Kolkata
	Click   Click	Click	Coimbatore	
	40	Click	42	
Chennai
Mumbai
Delhi
Kolkata
	Pune	
	50	
Chennai
Mumbai
Delhi
Kolkata
	Click   Click	Click	Ahmedabad

---

## themeinguicomponents

### themeinguicomponents - overview

Themeing UI Components
Introduction

So far we have looked at how to theme our app components. In this section, we will look at how to theme the ui-components that are present in lyte. But before proceeding, make sure you have a npm or bower version of ui-components installed in your app. For this example, we will be using version 3.35.0 as it was the latest during the time of writing this documentation. This might be different from the version that you are using but the steps remain the same.

If you have already installed lyte-ui-components, skip to the next section.

Open the package.json in the project root directory of your blog-app and add lyte-ui-component and lyte-dom entry in dependencies

```javascript
{
    "name": "blog-app",
    "version": "1.0.0",
    "description": "Description for blog-app goes here",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@zoho/lyte-ui-component": "3.35.0",
        "@zoho/lyte-dom": "2.0.10"
    },
    "devDependencies": {},
    "addons": [
        "lyte-ui-component"
    ]
}
```

Once done, run the following command

```html
npm install --registry http://integ-docker:4873
```

This will create a node_modules/@zoho folder with lyte-ui-component and lyte-dom as packages inside it.

Changing the button styles

Let us try to change the style of lyte-button component as a simple example. To do this, you need to create a lyte-button.less(or a file name of your choice) style file in the styles/ folder. Run the following commands to do this.

```html
cd css
cd styles
touch lyte-button.less
```

Similarly, create a variables file for lyte-button for both light and dark theme.

```html
cd ..
cd themes/dark
touch lyte-button.variables.less
cd ..
cd light
touch lyte-button.variables.less
```
Adding Styles

Now its time to change the styles of lyte-button. Open the lyte-button.less styles file and add the following snippet inside it.

```css
@import "../../node_modules/@zoho/lyte-ui-component/theme/styles/button.less";

@import "../themes/@{theme}/lyte-button.variables.less";
```

We will explain the snippets and what the paths in the import statements mean. Similarly, open the lyte-button.variables.less file for both light and dark themes and add the following snippets. In our example, we are going to change the color of the default button for both the light and dark themes(We will explain the weird looking syntax in the below variable files as well).

```javascript
.defaultBtn() {
     @bg: dodgerblue;
}
```
```javascript
.defaultBtn() {
     @bg: black;
}
```
Explaining Everything

Now the first thing to know is that the lyte-ui-component package is itself a lyte-app and it follows a similar themeing folder structure to the one we saw in the previous section. If you were to open node_modules/@zoho/lyte-ui-component, you might come across a folder called theme/ and if you were to open that you will find that it has a folder structure similar to the one that we created. It has a styles/ folder which harbors all the styles of the components and it has a themes/ folder which has the variables for the different themes. And if you were to open the node_modules/@zoho/lyte-ui-component/theme/styles/button.less you would see that it imports these variables the same way we imported the variables in our app.

So the first import statement in our example(css/styles/lyte-button.less), brings in this styles file (@import "../../node_modules/@zoho/lyte-ui-component/theme/styles/button.less"). Because to be able to change the styles of the button you need to bring in its styles. Similarly, if you want to change the styles of the accordion, you bring in "../../node_modules/@zoho/lyte-ui-component/theme/styles/accordion.less".

The next import in the styles file is self explanatory. We bring the variables for each of the themes.

Now to explaining the variable files that we have created. Before explaining the code, open the node_modules/@zoho/lyte-ui-component/themes/default/ui-elements/button/button.variables.less. As we said before, the themes/ folder holds in the variables and the file we are trying to open right now is the variables file for the lyte-button created in ui-components. Opening this file, you might find a bunch of code that looks like css rules but these are called mixins. Mixins are created to reuse a piece of code over and over again. But in our case we are using it for namespacing purposes. If every variable were to be in the global namespace, it would cause variable name conflicts or variables with long names. To prevent this, we wrap the variables inside mixins. The mixins have a name like .defaultBtn() and the variables defined inside do not leak into the outer scope. We then import these mixins inside the css rules and use them. You can open the node_modules/@zoho/lyte-ui-component/theme/styles/button.less and see how these mixins are used. They are declared at the top of each css rule as follows. There are other ways to namespace your variables as well. To learn more about mixins and namespacing in general, visit lessjs docs.

```css
.lyteDefaultBtn {
    .DefaultBtn(); // Mixin used here and the values inside the mixin like @bg, @color and @border are available inside only this style
    background: @bg;
    color: @color;
    border: @border;
}
```

So in our variable files, we are changing the value of the @bg variable of the .defaultBtn() mixin which is used inside the lyteDefaultBtn class. It should be noted that knowing which mixin(the variable) to change will require the developer to inspect the ui-component under question using chrome web dev tools/firefox developer tools/etc to find out which css rule is being applied to the element. Then search for that css rule inside the node_modules/lyte_ui_component/theme/styles/component.less to find the mixin. From there you can change it in your variables. We have tried to name the mixins in a reasonable way to give hints about their use but it would be in the best interest of the developer to make sure they are changing the proper mixin.

Final Configuration

Before compiling, there is one final thing configuration left to do. That is the developer must choose which theme of lyte-ui-components must be used to build the styles/lyte-button.less. The styles/lyte-button.less in our blog-app imports the styles/button.less from lyte-ui-components and there are multiple themes in lyte-ui-components(To find the themes available in lyte-ui-component open theme/themes/ folder). We need to tell the compiler to choose a particular theme from these set of themes. To do this open the build.js file and add the following changes.

```css
build: async function(options, dependencies) {
    // ...
    // ...
    // ...
    await buildUtils.init(options); /* Provides options to buildUtils.*/


    // Snippet Begins here

    var json, data;
    try {
        data = fs.readFileSync('build/less-min-conf.json', 'utf-8');
        json = JSON.parse(data);
        var themes = [ 'light', 'dark' ], key;

        themes.forEach( async function( theme ) {
            for (key in json) {
                options.themeOptions = {
                    globalVars: {
                        theme: theme,
                        themeName: 'default', // We are choosing the default theme from ui-components
                        direction: 'ltr' // This is added so that we use the ltr direction less variables
                    }
                }

                await buildUtils.compileThemes({
                    src: json[key],
                    dist: 'compiledCSS/' + theme + '/' + key
                });
            }
        } );
    } catch (e) {
        options.log.user({
            msg: e,
            color: 'red'
        })

    }

    // Snippet ends here


    /* Building of modules starts. Custom modules can be added in build function.*/
    await buildUtils.build(['copyAppDir', 'routes', 'components', 'models', 'helpers', 'mixins']);
    // ...
    // ...
    // ...
}
```

In the above snippet, it can be seen that we have made two changes and both of them to the options.themeOptions object. We have added a new key called themeName with value default and another key called direction with value ltr. The themeName key tells the compiler to use the default theme of lyte-ui-components and similarly the direction keys tells the compiler to use the left to right less variables. After this now we are ready to compile.

The themeName and direction variable are reserved variable names for lyte-ui-components.

Note when you import styles from lyte-ui-components, you also import variables and there can be clash in variable names. So make sure to namespace your variables.

Compile

Once you are done adding all the snippets, add an entry in less-min-conf.json as follows and run lyte build/serve and add a lyte-button example inside welcome-comp.html to see the result.

```css
{
    "welcome-comp.css": [ "styles/welcome-comp.less" ],
    "lyte-button.css": [ "styles/lyte-button.less" ]
}
```
```css
<lyte-button>
    <template is="registerYield" yield-name="text">
        click me
    </template>
</lyte-button>
```

Make sure to bring in the lyte-button dependencies. But this time, you don't have to bring in the node_modules/@zoho/lyte-ui-component/theme/compiledCSS/default/ltr/lyte-ui-button.css as this file is built by our blog-app during lyte serve.(Remember we import the entire styles file of lyte-button in our app's style file).

```html
lyte serve
```

Don't forget to import the css file

```html
<link rel="stylesheet" href="dist/css/compiledCSS/light/lyte-button.css" />
```

The variables in lyte-ui-components are present inside theme/themes/@{themeName}/ui-elements

The theme/themes/@{themeName}/global represents the global variables used inside lyte-ui-components. This can be things like font-size, primary color, primary text color, header colors, border-radius, etc.

The theme/overrides is deprecated.

---

## themes

Theme

Lyte-UI-Components comes with an inbuilt themeing framework. Working with themes in lyte-ui-components requires knowledge in less css preprocessor. Creating new themes or customizing existing ones invovles changing variables and compiling the resultant less files to obtain an output CSS file.

Check out Lyte-Ui-Components' themes in action!

Themeing Example
Getting Started

To get started with lyte-ui-components' themeing interface, you first need to install less.

npm install -g less

Make sure you read the documentation of less before continuing further.

To compile a less file into a css file you can use the following command.

lessc styles.less styles.css
Directory Structure

Get familiar with the directory structure as well.

theme/

overrides/

global/

global.variables.less

global.styles.less

ui-elements/

accordion.overrides.less

accordion.variables.less

alert.overrides.less

alert.variables.less

( Other variables and overrides files )

styles/

accordion.less

alert.less

autocomplete.less

breadcrumb.less

( Other component less files )

themes/

default/

global/

global.styles.less

global.variables.less

ui-elements/

accordion/

accordion.styles.less

accordion.variables.less

alert/

alert.styles.less

alert.variables.less

autocomplete/

autocomplete.styles.less

autocomplete.variables.less

breadcrumb/

breadcrumb.styles.less

breadcrumb.variables.less

(Other component theme files)

night/

global/

global.styles.less

global.variables.less

ui-elements/

accordion/

accordion.styles.less

accordion.variables.less

alert/

alert.styles.less

alert.variables.less

autocomplete/

autocomplete.styles.less

autocomplete.variables.less

breadcrumb/

breadcrumb.styles.less

breadcrumb.variables.less

(Other component theme files)

Two Levels Of Inheritance

To achieve themeing, lyte-ui-components uses three levels of inheritance.

Default Theme
Custom Theme or User-defined theme

	The default theme contains basic styles in the form of variables and mixins which are used to set the styles of the components. The default theme is inherited at the start and its variable values are applied to the different styles in the styles/{component.less} file.
	The next level of inheritance is the Custom theme level. Any matching variables/mixins between the default and packaged theme are overriden by the Custom theme variables. These overriden variable values are then applied to the different styles in the styles/{component.less} file. Custom themes are generally created for entire products. These themes can then be reused by another product by simply adding it to their themeing interface.


So the theme inheritance order is:

Default theme's variables/mixins are inherited
Custom theme's variables/mixins are inherited and they replace default theme's variables/mixins
The resulting variables/mixins are then applied to the styles/{component}.less file.
Baseline Theme

The default theme contains baseline values which are required for the ui-components to function properly. The values of these variables can be found in the css/themes/default/{ui-elements or globals}/{component-name}.variables.less .

Creating A Custom Theme

To create your own custom theme, create a new folder under css/themes/ with the name of the theme as the folder name and add your component files.

To make changes to variables/mixins of the default theme when creating a packaged theme, make changes to the css/themes/{theme-name}/{ui-elements or global}/{component-name}/{component-name}.variables.less

To add new styles to your theme, add them in the css/themes/{theme-name}/{ui-elements or global}/{component-name}/{component-name}.styles.less



Set the component variable name to the name of the custom theme created in the config.less file to use it. For eg, if you created new styles for your accordion, change the @accordion variable to name of the new theme.

/* global */   

   

@themeName: 'vibrant';    // Using your theme     

   

@global: @themeName;   

   

/* components */   

   

@accordion: @themeName;     

@autocomplete :  @themeName;   

@breadcrumb :  @themeName;   

@button:  @themeName;   

@nav:  @themeName;   

@checkbox:  @themeName;   

@calendar:  @themeName;   

@gridstack :  @themeName;   

@menu :  @themeName;   

@navigator :  @themeName;   

@radiobutton:  @themeName;   

@slider :  @themeName;   

@search :  @themeName;   

@step :  @themeName;   

@table :  @themeName;   

@tooltip :  @themeName;   

@scrollbar :  @themeName;   

@dropdown:  @themeName;   

@input:  @themeName;   

@popover:  @themeName;   

@alert:  @themeName;   

@messagebox:  @themeName;   

@dragdrop:  @themeName;   

@tabs:  @themeName;   

@colorpicker:  @themeName;   

@progressbar:  @themeName;   

						



You can now compile to obtain the output.

lessc compiler.less output.css

When you are compiling compiler.less, make sure the @themeName variable is set. Set it to a theme name and then compile it.

The compiler.less contains all the component less files(styles/{component.less}) that are going to be compiled. If you don't want any file in the result you can remove its entry from this file.

Making Changes To Variables

Say we want to make a theme and in that theme we want to change the padding of lyte-accordion-header tag. Open the styles/accordion.less and scroll down to find the style of the lyte-accordion-header-tag.



/* LYTE-ACCORDION-HEADER TAG STYLES */   

   

lyte-accordion-header{   

       .lyteAccordionHeader();        // Mixin of lyte-accordion-header     

    display: block;   

       padding: @padding;        // Variable we want to change     

    cursor: pointer;   

    background-color: @background-color;   

    box-sizing: @boxSizing;   

    color: @color;   

    height: @height;   

}   

   

   

   

   


					

As you can tell, lyte-accordion-header's style definition has a mixin in the name of lyteAccordionHeader . The @padding variable which we want to change can be found in the theme/themes/default/ui-elements/accordion.variables.less under the same mixin name.

/* LYTE-ACCORDION-HEADER */   

   

.lyteAccordionHeader(){      // The mixin definition     

	@padding : 1em;       Its padding value     

	@boxSizing: content-box;   

	@background-color : @lightGrey;   

	@color : #333;   

	@height : 2em;   

}   

   

   

   

   


					

Change its value in your variables file of your theme which is located in theme/themes/{custom-theme-name}/ui-elements/accordion.variables.less .(Don't change it in the default theme)

.lyteAccordionHeader() {   

	@padding: 1.5em; // This value replaces the value in the default variables file.   

}   

					

Compiling again will yield you the necessary CSS changes. Similarly to add new styles apart from the ones provided in the styles/ directory use the overrides file of the component for the custom file that you have created. For eg, if you are writing a new custom theme, then write your new styles in css/themes/{theme-name}/{global or ui-elements}/{component-name}/{component-name}.styles.less

### themes - overview

Theme

Lyte-UI-Components comes with an inbuilt themeing framework. Working with themes in lyte-ui-components requires knowledge in less css preprocessor. Creating new themes or customizing existing ones invovles changing variables and compiling the resultant less files to obtain an output CSS file.

Check out Lyte-Ui-Components' themes in action!

Themeing Example
Getting Started

To get started with lyte-ui-components' themeing interface, you first need to install less.

npm install -g less

Make sure you read the documentation of less before continuing further.

To compile a less file into a css file you can use the following command.

lessc styles.less styles.css
Directory Structure

Get familiar with the directory structure as well.

theme/

overrides/

global/

global.variables.less

global.styles.less

ui-elements/

accordion.overrides.less

accordion.variables.less

alert.overrides.less

alert.variables.less

( Other variables and overrides files )

styles/

accordion.less

alert.less

autocomplete.less

breadcrumb.less

( Other component less files )

themes/

default/

global/

global.styles.less

global.variables.less

ui-elements/

accordion/

accordion.styles.less

accordion.variables.less

alert/

alert.styles.less

alert.variables.less

autocomplete/

autocomplete.styles.less

autocomplete.variables.less

breadcrumb/

breadcrumb.styles.less

breadcrumb.variables.less

(Other component theme files)

night/

global/

global.styles.less

global.variables.less

ui-elements/

accordion/

accordion.styles.less

accordion.variables.less

alert/

alert.styles.less

alert.variables.less

autocomplete/

autocomplete.styles.less

autocomplete.variables.less

breadcrumb/

breadcrumb.styles.less

breadcrumb.variables.less

(Other component theme files)

Two Levels Of Inheritance

To achieve themeing, lyte-ui-components uses three levels of inheritance.

Default Theme
Custom Theme or User-defined theme

	The default theme contains basic styles in the form of variables and mixins which are used to set the styles of the components. The default theme is inherited at the start and its variable values are applied to the different styles in the styles/{component.less} file.
	The next level of inheritance is the Custom theme level. Any matching variables/mixins between the default and packaged theme are overriden by the Custom theme variables. These overriden variable values are then applied to the different styles in the styles/{component.less} file. Custom themes are generally created for entire products. These themes can then be reused by another product by simply adding it to their themeing interface.


So the theme inheritance order is:

Default theme's variables/mixins are inherited
Custom theme's variables/mixins are inherited and they replace default theme's variables/mixins
The resulting variables/mixins are then applied to the styles/{component}.less file.
Baseline Theme

The default theme contains baseline values which are required for the ui-components to function properly. The values of these variables can be found in the css/themes/default/{ui-elements or globals}/{component-name}.variables.less .

Creating A Custom Theme

To create your own custom theme, create a new folder under css/themes/ with the name of the theme as the folder name and add your component files.

To make changes to variables/mixins of the default theme when creating a packaged theme, make changes to the css/themes/{theme-name}/{ui-elements or global}/{component-name}/{component-name}.variables.less

To add new styles to your theme, add them in the css/themes/{theme-name}/{ui-elements or global}/{component-name}/{component-name}.styles.less



Set the component variable name to the name of the custom theme created in the config.less file to use it. For eg, if you created new styles for your accordion, change the @accordion variable to name of the new theme.

/* global */   

   

@themeName: 'vibrant';    // Using your theme     

   

@global: @themeName;   

   

/* components */   

   

@accordion: @themeName;     

@autocomplete :  @themeName;   

@breadcrumb :  @themeName;   

@button:  @themeName;   

@nav:  @themeName;   

@checkbox:  @themeName;   

@calendar:  @themeName;   

@gridstack :  @themeName;   

@menu :  @themeName;   

@navigator :  @themeName;   

@radiobutton:  @themeName;   

@slider :  @themeName;   

@search :  @themeName;   

@step :  @themeName;   

@table :  @themeName;   

@tooltip :  @themeName;   

@scrollbar :  @themeName;   

@dropdown:  @themeName;   

@input:  @themeName;   

@popover:  @themeName;   

@alert:  @themeName;   

@messagebox:  @themeName;   

@dragdrop:  @themeName;   

@tabs:  @themeName;   

@colorpicker:  @themeName;   

@progressbar:  @themeName;   

						



You can now compile to obtain the output.

lessc compiler.less output.css

When you are compiling compiler.less, make sure the @themeName variable is set. Set it to a theme name and then compile it.

The compiler.less contains all the component less files(styles/{component.less}) that are going to be compiled. If you don't want any file in the result you can remove its entry from this file.

Making Changes To Variables

Say we want to make a theme and in that theme we want to change the padding of lyte-accordion-header tag. Open the styles/accordion.less and scroll down to find the style of the lyte-accordion-header-tag.



/* LYTE-ACCORDION-HEADER TAG STYLES */   

   

lyte-accordion-header{   

       .lyteAccordionHeader();        // Mixin of lyte-accordion-header     

    display: block;   

       padding: @padding;        // Variable we want to change     

    cursor: pointer;   

    background-color: @background-color;   

    box-sizing: @boxSizing;   

    color: @color;   

    height: @height;   

}   

   

   

   

   


					

As you can tell, lyte-accordion-header's style definition has a mixin in the name of lyteAccordionHeader . The @padding variable which we want to change can be found in the theme/themes/default/ui-elements/accordion.variables.less under the same mixin name.

/* LYTE-ACCORDION-HEADER */   

   

.lyteAccordionHeader(){      // The mixin definition     

	@padding : 1em;       Its padding value     

	@boxSizing: content-box;   

	@background-color : @lightGrey;   

	@color : #333;   

	@height : 2em;   

}   

   

   

   

   


					

Change its value in your variables file of your theme which is located in theme/themes/{custom-theme-name}/ui-elements/accordion.variables.less .(Don't change it in the default theme)

.lyteAccordionHeader() {   

	@padding: 1.5em; // This value replaces the value in the default variables file.   

}   

					

Compiling again will yield you the necessary CSS changes. Similarly to add new styles apart from the ones provided in the styles/ directory use the overrides file of the component for the custom file that you have created. For eg, if you are writing a new custom theme, then write your new styles in css/themes/{theme-name}/{global or ui-elements}/{component-name}/{component-name}.styles.less

---

## thingstoknow

Things To know
Properties and Configuration

Properties in UI Components are prefixed with lt-prop. For example, the value property in a radiobutton is lt-prop-value. Here's how you pass properties to UI components.

```html
<lyte-radiobutton lt-prop-name="radio-group" lt-prop-value="shipping" lt-prop-label="Shipping"></lyte-radiobutton>
```

You can also get and set lt-prop attributes in UI Components through your javascript. You need to querySelect your component and invoke the .ltProp() function on them.

This demonstrates a getter function.

```javascript
var value = document.querySelector('lyte-radiobutton').ltProp('value');
```

This demonstrates a setter function.

```javascript
document.querySelector('lyte-radiobutton').ltProp('value' , 'COD');
```
Callbacks

UI Components provides callbacks for you to work with. They are usually invoked in response to an action performed on a component. These callbacks depends on the method behaviour of the sLyte component. For example, the 'on-before-checked' callback of a checkbox is invoked everytime when a checkbox moves to before checked state.

You can also use the callback to set data, make a XMLHttpRequest, trigger an animation, etc. Apart from that there are many other callbacks to make your process easier. This callback is usually written in the js file of the component inside which you have invoked the UI Component. For example, if you have used lyte-checkbox in your welcome-comp.html then the definition of the callback is written in the welcome-comp.js file. Here's an example.

```html
<lyte-checkbox on-checked={{method("makeRequest")}} lt-prop-appearance="failure"></lyte-checkbox>
```
```javascript
import { Component } from "@slyte/component";
class UserComp extends Component {
constructor() {
    super();
}
data() {
    return {

    }
}
static methods() {
    return{
        makeRequest : function(){
            // Make a request
        }
    }
 }
}
export { UserComp };
```

In the cases were the methods could not be statically defined in the conponent's js, you can use the .setMethods() to register callbacks dynamically.

```javascript
document.querySelector( 'lyte-checkbox' ).setMethods({
    onChecked : function(){
        // Do stuff
    }
});
```

Developers generally use .setMethods() when they are not using slyte's templating system or when they have rendered the component through script( registry.render or document.createElement to create the component).

As you can tell, the callbacks in UI Components are methods. To get an elaborate overview of methods, visit the following link.

Yield

By far, Yield is the most important concept of UI Components. It is highly recommended to learn about yield before trying to use UI Component's yield.

Here's a quick overview of what it is. Suppose you want to create a button component for your app. Now on taking a note on the visual for buttons in your app, you find that there are 15 variations of buttons in all. Now, you as a developer, need to come up with a way to create a button component that encompasses all these 15 variations.

One way to do it is to create a type attribute in your button component and based on the value of the type you render different buttons by making use of a switch. This doesn't help because new buttons types will come further down the road and this forces you to keep increasing the size of your button component. In the end, you ship a massive button component at the start of your app and most of the button types might be used in some corner of the website which the user might not even visit.

In such cases, you can create a button component just to cover the cases that occurs the most and achieve other customizations through yield. In the above example, you achieve the first 4 types by making use of a type attribute and you achieve the icon types through yield. Here's a definition of your button component.

```html
<template tag-name="button-comp">
    <% if( type == 'default' ){ %>
        <button class="default">
            {{content}}
        </button>
    <% }elseif(type=='primary'){ %>
        <button class="primary">
            {{content}}
        </button>
    <% } else if( type == 'success' ){ %>
        <button class="success">
            {{content}}
        </button>
    <% } else if( type == 'success-outlined' ){ %>
        <button class="success-outlined">
            {{content}}
        </button>
    <% } else if( type == 'yield' ) { %>
        <button class={{classVal}} style={{styleVal}}>
            <lyte-yield yield-name="yield"> </lyte-yield>
        </button>
    <% } %>
</template>
```

To create the archive button using yield, you would invoke the component as follows.

```html
<button-comp type='yield' style-val='background-color: black;'>
    <template is="registerYield" yield-name="yield">
        <i class="mR3 fas fa-archive"> </i>
        <span class="borderLeft"> Archive </span>
    </template>
</button-comp>
```

When the button-comp is invoked as above, the content inside the template tag in the invocation is appended to the lyte-yield tag in the button-comp.html file and rendered. With the style-val attribute set to background-color black, you can achieve an archive button.

The yield is at the core of most UI Components. Most UI Components define a skeletal outer layer and allows you to input your own DOM content into it. The lyte-modal allows you to add DOM content to its body, the lyte-button allows you to add content to a button's innerHTML, etc.

Here's a simple example of a lyte-calender using an yield. The lyte-calendar renders a calendar widget, but also allows you to add your own DOM content to its footer. Here's how its achieved.

```html
<lyte-calendar>
    <template is="registerYield" yield-name="footer">
        <div style="padding: 5px 0px 5px 15px;">
            <a> Day </a>
            <a> Week </a>
            <a> Month </a>
        </div>
    </template>
</lyte-calendar>
```

Remember you can add your own DOM elements, styles and bind functions to the yielded content. Here's an example demonstrating binding a function to the lyte-dropdown's header tag.

```html
<lyte-dropdown>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-header>
                <span class="content" onclick={{action('doStuff')}}>
                    Add More
                </span>
            </lyte-drop-header>
            <lyte-drop-body>
                <lyte-drop-item data-value='1'> Option 1 </lyte-drop-item>
                <lyte-drop-item data-value='2'> Option 2 </lyte-drop-item>
                <lyte-drop-item data-value='3'> Option 3 </lyte-drop-item>
                <lyte-drop-item data-value='4'> Option 4 </lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
static actions() {
    return{
       doStuff : function(){
          // Make a request
       }
    }
}
```

In the above example, everything inside the yield is the container which opens when a dropdown is clicked. An action is bound to the header and it can be handled in the parent component.

Themeing

The themeing module in UI Components uses the Less framework. The css is defined as variables or as mixins. sLyte application can customize the Less variables or mixins to make the UI component's visual to sync with your app's visual. More on themeing over here.

Some of the UI components require i18n files to work. The default text provided by the UI components can be internationalized by importing the i18n files of the language currently being used in the website. It is also important to note that Only the text used by UI components by default can be internationalized. It should be noted that if you are using your own text in UI components, such texts can't be internationalized. You can learn more about Internationalization here

Now let's navigate to learn about how to work with the UI components in general.

Previous
Next

### thingstoknow - overview

Things To know
Properties and Configuration

Properties in UI Components are prefixed with lt-prop. For example, the value property in a radiobutton is lt-prop-value. Here's how you pass properties to UI components.

```html
<lyte-radiobutton lt-prop-name="radio-group" lt-prop-value="shipping" lt-prop-label="Shipping"></lyte-radiobutton>
```

You can also get and set lt-prop attributes in UI Components through your javascript. You need to querySelect your component and invoke the .ltProp() function on them.

This demonstrates a getter function.

```javascript
var value = document.querySelector('lyte-radiobutton').ltProp('value');
```

This demonstrates a setter function.

```javascript
document.querySelector('lyte-radiobutton').ltProp('value' , 'COD');
```
Callbacks

UI Components provides callbacks for you to work with. They are usually invoked in response to an action performed on a component. These callbacks depends on the method behaviour of the sLyte component. For example, the 'on-before-checked' callback of a checkbox is invoked everytime when a checkbox moves to before checked state.

You can also use the callback to set data, make a XMLHttpRequest, trigger an animation, etc. Apart from that there are many other callbacks to make your process easier. This callback is usually written in the js file of the component inside which you have invoked the UI Component. For example, if you have used lyte-checkbox in your welcome-comp.html then the definition of the callback is written in the welcome-comp.js file. Here's an example.

```html
<lyte-checkbox on-checked={{method("makeRequest")}} lt-prop-appearance="failure"></lyte-checkbox>
```
```javascript
import { Component } from "@slyte/component";
class UserComp extends Component {
constructor() {
    super();
}
data() {
    return {

    }
}
static methods() {
    return{
        makeRequest : function(){
            // Make a request
        }
    }
 }
}
export { UserComp };
```

In the cases were the methods could not be statically defined in the conponent's js, you can use the .setMethods() to register callbacks dynamically.

```javascript
document.querySelector( 'lyte-checkbox' ).setMethods({
    onChecked : function(){
        // Do stuff
    }
});
```

Developers generally use .setMethods() when they are not using slyte's templating system or when they have rendered the component through script( registry.render or document.createElement to create the component).

As you can tell, the callbacks in UI Components are methods. To get an elaborate overview of methods, visit the following link.

Yield

By far, Yield is the most important concept of UI Components. It is highly recommended to learn about yield before trying to use UI Component's yield.

Here's a quick overview of what it is. Suppose you want to create a button component for your app. Now on taking a note on the visual for buttons in your app, you find that there are 15 variations of buttons in all. Now, you as a developer, need to come up with a way to create a button component that encompasses all these 15 variations.

One way to do it is to create a type attribute in your button component and based on the value of the type you render different buttons by making use of a switch. This doesn't help because new buttons types will come further down the road and this forces you to keep increasing the size of your button component. In the end, you ship a massive button component at the start of your app and most of the button types might be used in some corner of the website which the user might not even visit.

In such cases, you can create a button component just to cover the cases that occurs the most and achieve other customizations through yield. In the above example, you achieve the first 4 types by making use of a type attribute and you achieve the icon types through yield. Here's a definition of your button component.

```html
<template tag-name="button-comp">
    <% if( type == 'default' ){ %>
        <button class="default">
            {{content}}
        </button>
    <% }elseif(type=='primary'){ %>
        <button class="primary">
            {{content}}
        </button>
    <% } else if( type == 'success' ){ %>
        <button class="success">
            {{content}}
        </button>
    <% } else if( type == 'success-outlined' ){ %>
        <button class="success-outlined">
            {{content}}
        </button>
    <% } else if( type == 'yield' ) { %>
        <button class={{classVal}} style={{styleVal}}>
            <lyte-yield yield-name="yield"> </lyte-yield>
        </button>
    <% } %>
</template>
```

To create the archive button using yield, you would invoke the component as follows.

```html
<button-comp type='yield' style-val='background-color: black;'>
    <template is="registerYield" yield-name="yield">
        <i class="mR3 fas fa-archive"> </i>
        <span class="borderLeft"> Archive </span>
    </template>
</button-comp>
```

When the button-comp is invoked as above, the content inside the template tag in the invocation is appended to the lyte-yield tag in the button-comp.html file and rendered. With the style-val attribute set to background-color black, you can achieve an archive button.

The yield is at the core of most UI Components. Most UI Components define a skeletal outer layer and allows you to input your own DOM content into it. The lyte-modal allows you to add DOM content to its body, the lyte-button allows you to add content to a button's innerHTML, etc.

Here's a simple example of a lyte-calender using an yield. The lyte-calendar renders a calendar widget, but also allows you to add your own DOM content to its footer. Here's how its achieved.

```html
<lyte-calendar>
    <template is="registerYield" yield-name="footer">
        <div style="padding: 5px 0px 5px 15px;">
            <a> Day </a>
            <a> Week </a>
            <a> Month </a>
        </div>
    </template>
</lyte-calendar>
```

Remember you can add your own DOM elements, styles and bind functions to the yielded content. Here's an example demonstrating binding a function to the lyte-dropdown's header tag.

```html
<lyte-dropdown>
    <template is="registerYield" yield-name="yield">
        <lyte-drop-box>
            <lyte-drop-header>
                <span class="content" onclick={{action('doStuff')}}>
                    Add More
                </span>
            </lyte-drop-header>
            <lyte-drop-body>
                <lyte-drop-item data-value='1'> Option 1 </lyte-drop-item>
                <lyte-drop-item data-value='2'> Option 2 </lyte-drop-item>
                <lyte-drop-item data-value='3'> Option 3 </lyte-drop-item>
                <lyte-drop-item data-value='4'> Option 4 </lyte-drop-item>
            </lyte-drop-body>
        </lyte-drop-box>
    </template>
</lyte-dropdown>
```
```javascript
static actions() {
    return{
       doStuff : function(){
          // Make a request
       }
    }
}
```

In the above example, everything inside the yield is the container which opens when a dropdown is clicked. An action is bound to the header and it can be handled in the parent component.

Themeing

The themeing module in UI Components uses the Less framework. The css is defined as variables or as mixins. sLyte application can customize the Less variables or mixins to make the UI component's visual to sync with your app's visual. More on themeing over here.

Some of the UI components require i18n files to work. The default text provided by the UI components can be internationalized by importing the i18n files of the language currently being used in the website. It is also important to note that Only the text used by UI components by default can be internationalized. It should be noted that if you are using your own text in UI components, such texts can't be internationalized. You can learn more about Internationalization here

Now let's navigate to learn about how to work with the UI components in general.

Previous
Next

---

## trapfocus

### trapfocus - overview

Trap Focus
Dependencies
```html
<!-- Individual component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-trapFocus.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-trapFocus.js"
import $L from "@zoho/lyte-dom";
```
Focus Trap

This plugin will keep the focus trapped inside a given wrapper when pressing the tab continously.

```html
<div class="trapFocusWrapper">
   <div class="trapFocusHeader">
       <H4>Non Lyte Popup</H4>
       <span tabindex="0" class="lyteModalClose"></span>
   </div>
   <div class="trapFocusBody">
       <lyte-input lt-prop-direction="horizontal" lt-prop-appearance="box" lt-prop-label="Name"> </lyte-input>
       <lyte-input lt-prop-direction="horizontal" lt-prop-appearance="box" lt-prop-label="Mail"> </lyte-input>
       <lyte-input lt-prop-direction="horizontal" lt-prop-appearance="box" lt-prop-label="Phone no."> </lyte-input>
       <lyte-input lt-prop-direction="horizontal" lt-prop-appearance="box" lt-prop-label="Address"> </lyte-input>
   </div>
   <div class="trapFocusFooter">
       <lyte-button class="mR10">
           <template is="registerYield" yield-name="text">
               Cancel
           </template>
       </lyte-button>
       <lyte-button lt-prop-appearance="success">
           <template is="registerYield" yield-name="text">
               Submit
           </template>
       </lyte-button>
   </div>
 </div>
```
```javascript
$L('.trapFocusWrapper').trapFocus();
```
Start trapping
Destroy trapping
Non Lyte Popup
Name
Mail
Phone no.
Address
Cancel
Submit

---

## utilyte

### utilyte - overview

Utilyte

utilyte function makes easier to work with arrays, objects and collections. It can be called with $u.

Dependencies
```html
<!-- Individual plugin  file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-utilyte.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-utilyte.js"
import $L from "@zoho/lyte-dom";
```
Calling style

utilyte functions can be called by any of the following two styles namely, object-oriented style or functional style.

```javascript
$u([1,2,3,4,5,6,7]).contains(7);    //returns : true
$u.contains([1,2,3,5,6,7],7);   //returns : true

$u([1,2,3,4,5,6,7]).contains(8);    //returns : false
$u.contains([1,2,3,5,6,7],8);   //returns : false
```

---

## workingwithuicomponents

Working with UI components

This documentation will detail some of the things that developers need to remember while using UI components.

Inspect the component

Whatever component you are using, it is always a good idea to open the inspector panel to find out what elements are getting rendered when the component renders. This will help you understand some of the attributes associated with the UI Components and also give you an idea about what CSS rule to change when you want to style the component according to your needs.

Changing CSS

Almost all the time, people using UI Components would want to style the components in a way that fits their app. There are a number of ways to style UI Components in sLyte and let us have a look at them.

Lets take the example of lyte-button, which requires the border-radius of lyte-button to be 3px. This is how we would do it.

First inspect lyte-button and find out which style is being applied for the border-radius property of the button element rendered inside. In our case, it is the following style.

```css
lyte-button button {
    border-radius: 2px;
    font-size: 15px;
    padding: 5px 15px;
    font-family: 'LatoRegular', 'Open Sans', sans-serif;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border-width: 1px;
    border-style: solid;
}
```

The above style can be found inside the dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css

To change the border-radius of the button, just use the same CSS rule and add your new border radius.

```css
lyte-button button {
    border-radius: 3px;
}
```

Now this style will be contained in another CSS file. Just make sure this file is loaded after the ui-components/themes/compiledCSS/default/ltr/lyte-ui-button.css file. Since the browser follows source order when deciding the styles for an element, the style added last(which is the new style we created) will be used as the border-radius for the button.

Another way to change the style of the button is by writing styles with more specific CSS selectors. In the example above, we could add a class to the lyte button element and write a CSS rule based on that class.

```html
<lyte-button class="some-class">
    <template is="registerYield" yield-name="text">
        Secondary
    </template>
</lyte-button>
```
```css
.some-class button {
    border-radius: 3px;
}
```

A third way to do this is using UI Components themeing system. This will be explained in the Themes section.

Setting Attributes

You can set the usual HTML attributes on UI Components that you would normally set on other HTML elements.

```html
<lyte-button id="someid" lt-prop-appearance="secondary">
    <template is="registerYield" yield-name="text">
        Secondary
    </template>
</lyte-button>
```

You can later query these elements in your javascript code as follows.

```javascript
var button = document.querySelector( '#someid' );
```
Common Utils

A common utility function that is available on all UI Components is the .ltProp() function. You can use this function to either get or set an attribute as follows. To use this util, you need a reference to the component element.

```html
<lyte-button id="someid" lt-prop-appearance="failure">
    <template is="registerYield" yield-name="text">
        Failure
    </template>
</lyte-button>
```

For the above button, you can get or set the lt-prop-background-color attribute using .ltProp() function as follows.

```javascript
var button = document.getElementById( 'someid' );
var color = button.ltProp( 'backgroundColor' ); // Getter
button.ltProp( 'backgroundColor', 'red' ); // Setter
```

It can be seen that the background-color is passed in the camel case form: backgroundColor

Registering Defaults

Lets say, your team decides that every lyte-button rendered in your app must render as a primary button. One way to do this is to pass the lt-prop-apperance attribute of the button as primary. While this can be done, developers might sometimes find themselves missing the attribute. In complex examples where 4-5 attributes have to be passed, then it could lead to inconsistencies in the UI.

A way around this is to use the registerDefaultValues util. The example below demonstrates the use of registerDefaultValues on lyte-button.

```javascript
_lyteUiUtils.registerDefaultValues( {
    'lyte-button': {
    'size': 'large',
    'backgroundColor': 'red',
    'appearance': 'primary'
    }
} );
```

Now lyte-buttons rendered by default will have lt-prop-size as large, lt-prop-background-color as red and lt-prop-type as primary.

Sprites

UI Components uses a sprite file to display icons in some of the components. The sprite file can be found under the node_modules/@zoho/lyte-ui-component/theme/images/ folder and is used in CSS properties like background-image. Make sure the path used in the CSS points to location of the sprite resource.

Let's navigate to learn about the popular callbacks

Previous
Next

### workingwithuicomponents - overview

Working with UI components

This documentation will detail some of the things that developers need to remember while using UI components.

Inspect the component

Whatever component you are using, it is always a good idea to open the inspector panel to find out what elements are getting rendered when the component renders. This will help you understand some of the attributes associated with the UI Components and also give you an idea about what CSS rule to change when you want to style the component according to your needs.

Changing CSS

Almost all the time, people using UI Components would want to style the components in a way that fits their app. There are a number of ways to style UI Components in sLyte and let us have a look at them.

Lets take the example of lyte-button, which requires the border-radius of lyte-button to be 3px. This is how we would do it.

First inspect lyte-button and find out which style is being applied for the border-radius property of the button element rendered inside. In our case, it is the following style.

```css
lyte-button button {
    border-radius: 2px;
    font-size: 15px;
    padding: 5px 15px;
    font-family: 'LatoRegular', 'Open Sans', sans-serif;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border-width: 1px;
    border-style: solid;
}
```

The above style can be found inside the dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css

To change the border-radius of the button, just use the same CSS rule and add your new border radius.

```css
lyte-button button {
    border-radius: 3px;
}
```

Now this style will be contained in another CSS file. Just make sure this file is loaded after the ui-components/themes/compiledCSS/default/ltr/lyte-ui-button.css file. Since the browser follows source order when deciding the styles for an element, the style added last(which is the new style we created) will be used as the border-radius for the button.

Another way to change the style of the button is by writing styles with more specific CSS selectors. In the example above, we could add a class to the lyte button element and write a CSS rule based on that class.

```html
<lyte-button class="some-class">
    <template is="registerYield" yield-name="text">
        Secondary
    </template>
</lyte-button>
```
```css
.some-class button {
    border-radius: 3px;
}
```

A third way to do this is using UI Components themeing system. This will be explained in the Themes section.

Setting Attributes

You can set the usual HTML attributes on UI Components that you would normally set on other HTML elements.

```html
<lyte-button id="someid" lt-prop-appearance="secondary">
    <template is="registerYield" yield-name="text">
        Secondary
    </template>
</lyte-button>
```

You can later query these elements in your javascript code as follows.

```javascript
var button = document.querySelector( '#someid' );
```
Common Utils

A common utility function that is available on all UI Components is the .ltProp() function. You can use this function to either get or set an attribute as follows. To use this util, you need a reference to the component element.

```html
<lyte-button id="someid" lt-prop-appearance="failure">
    <template is="registerYield" yield-name="text">
        Failure
    </template>
</lyte-button>
```

For the above button, you can get or set the lt-prop-background-color attribute using .ltProp() function as follows.

```javascript
var button = document.getElementById( 'someid' );
var color = button.ltProp( 'backgroundColor' ); // Getter
button.ltProp( 'backgroundColor', 'red' ); // Setter
```

It can be seen that the background-color is passed in the camel case form: backgroundColor

Registering Defaults

Lets say, your team decides that every lyte-button rendered in your app must render as a primary button. One way to do this is to pass the lt-prop-apperance attribute of the button as primary. While this can be done, developers might sometimes find themselves missing the attribute. In complex examples where 4-5 attributes have to be passed, then it could lead to inconsistencies in the UI.

A way around this is to use the registerDefaultValues util. The example below demonstrates the use of registerDefaultValues on lyte-button.

```javascript
_lyteUiUtils.registerDefaultValues( {
    'lyte-button': {
    'size': 'large',
    'backgroundColor': 'red',
    'appearance': 'primary'
    }
} );
```

Now lyte-buttons rendered by default will have lt-prop-size as large, lt-prop-background-color as red and lt-prop-type as primary.

Sprites

UI Components uses a sprite file to display icons in some of the components. The sprite file can be found under the node_modules/@zoho/lyte-ui-component/theme/images/ folder and is used in CSS properties like background-image. Make sure the path used in the CSS points to location of the sprite resource.

Let's navigate to learn about the popular callbacks

Previous
Next

---

# sLyte Overlays, Navigation & Layout Components

## Table of Contents

- [accordion](#accordion)
- [alert](#alert)
- [avatarnavigator](#avatarnavigator)
- [banner](#banner)
- [breadcrumb](#breadcrumb)
- [carousel](#carousel)
- [drawer](#drawer)
- [gridstack](#gridstack)
- [hovercard](#hovercard)
- [layout](#layout)
- [menu](#menu)
- [messagebox](#messagebox)
- [modal](#modal)
- [nav](#nav)
- [navigator](#navigator)
- [popover](#popover)
- [splitter](#splitter)
- [step](#step)
- [tabs](#tabs)
- [tooltip](#tooltip)
- [tour](#tour)
- [tree](#tree)
- [wormhole](#wormhole)

## accordion

### accordion - overview

Accordion

The accordion, a prominent UI components is an UI element that consists of a list of items stacked togther. The items can be expanded to reveal the content inside them. It supports only yielded contents.

Dependencies
```javascript
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-accordion.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-accordion.js" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-accordion.css"> </link>


also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of an accordion is as shown below.

Simple structure

Let us see the structure of lyte-table

Tags Used

Use the following tags to get a simple structure of an accordion

lyte-accordion - The wrapper for the accordion
lyte-accordion-item - Each content panel of the accordion.
lyte-accordion-header - The header of each accordion item.
lyte-accordion-body - The body of the accordion item that slides in and out.
Semantic structure
```html
<lyte-accordion>
                                <template is = 'registerYield' yield-name = 'yield'>
  <lyte-accordion-item>
    <lyte-accordion-header>
      Section Title 1
    </lyte-accordion-header>
    <lyte-accordion-body>
      <p>Content for section 1 goes here.</p>
    </lyte-accordion-body>
  </lyte-accordion-item>

  <lyte-accordion-item>
    <lyte-accordion-header>
      Section Title 2
    </lyte-accordion-header>
    <lyte-accordion-body>
      <p>Content for section 2 goes here.</p>
    </lyte-accordion-body>
  </lyte-accordion-item>
  </template>

  <!-- Repeat as needed -->
</lyte-accordion>
```
Accordion syntax - with yield
```html
<lyte-accordion>
 <template is="registerYield" yield-name="yield">
  <lyte-accordion-item class="lyteAccordionActive">
   <lyte-accordion-header>Accordion 1<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
       <lyte-accordion-body>
           <pre>
              Lorem ipsum dolor sit amet,consectetur
           </pre>
       </lyte-accordion-body>
   </lyte-accordion-item>
   <lyte-accordion-item>
   <lyte-accordion-header>Accordion 2<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
        <lyte-accordion-body>
            <pre>
               Lorem ipsum dolor sit amet,consectetur
             </pre>
        </lyte-accordion-body>
   </lyte-accordion-item>
  </template>
</lyte-accordion>
```
Default Accordion
```html
<lyte-accordion>
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item class="lyteAccordionActive">
      <lyte-accordion-header>Accordion 1<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
      <lyte-accordion-body>
        <pre>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </pre>
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>Accordion 2<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
      <lyte-accordion-body>
        <pre>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </pre>
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>Accordion 3<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
      <lyte-accordion-body>
        <pre>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
        </pre>
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>Accordion 4<lyte-icon class="lyteAccordionArrow"></lyte-icon></lyte-accordion-header>
      <lyte-accordion-body>
        <pre>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
        </pre>
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```

An accordion is a list of collapsible panels. Each panel consists of the lyte-accordion-item, lyte-accordion-header and lyte-accordion-body. The lyte-accordion-header is used to specify the header content of the accordion and the lyte-accordion-body is used to specify the body content. Adding the lyteAccordionActive class to the lyte-accordion-item renders that particular panel in an open state. In the above example, the first item has the lyteAccordionActive class.

Features

Have a look at the standout features of Lyte Accordion.

Configurable Accordion
```html
<lyte-accordion lt-prop-duration="1s" lt-prop-height="80px">
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item class="lyteAccordionActive">
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body style="height: 40px;"> <!-- set inline height for the accordion. This takes higher precedence over lt-prop-height -->
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```

An accordion can take in lt-prop attributes. The lt-prop-height attribute sets the height of each lyte-accordion-body when it is opened and the lt-prop-duration sets the duration to open or close the panel. Setting any inline height to the lyte-accordion-body overrides the lt-prop-height attribute and the content panel opens only to that particular height. If the lt-prop-height and the inline height are not provided, then the accordion calculates the height of its content on render and uses that height to open the accordion.

In the above example, the lyte-accordion-body of the first lyte-accordion-item has style of height 40px. So this panel opens to 40px whereas the others open to the full 80px.

You can also force the accordion to calculate the height of the body each time it is opened by setting the lt-prop-dynamic attribute to true.

Custom Accordion
```html
<lyte-accordion>
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header class="blockStyle">
        Accordion 1
      </lyte-accordion-header>
      <lyte-accordion-body class="panel">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header class="blockStyle">
        Accordion 2
      </lyte-accordion-header>
      <lyte-accordion-body class="panel">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header class="blockStyle">
        Accordion 3
      </lyte-accordion-header>
      <lyte-accordion-body class="panel">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header class="blockStyle">
        Accordion 4
      </lyte-accordion-header>
      <lyte-accordion-body class="panel">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
```CSS
.blockStyle lyte-accordion-header {
    background-color: #4285f4;
    color: #fff;
    cursor: pointer;
    text-align: left;
    outline: none;
    font-size: 15px;
}

.panel {
    background-color: white;
}

.blockStyle .lyteAccordionArrow {
    border-bottom-color: white;
    border-right-color: white;
}
```

A custom accordion renders with its own styles. The classes blockStyle and panel are used to change the styles of the accordion.

Open Accordion

A content panel can also be opened when the accordion renders by adding a class (lyteAccordionActive) to the lyte-accordion-item. Content panels that are open have the lyteAccordionActive class set to them.

```html
<lyte-accordion>
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item class="lyteAccordionActive">
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
Non Exclusive Accordion

A non-exclusive accordion is one where multiple content panels can be opened at the same time. It is achieved by setting the lt-prop-exclusive attribute to false . You can add lyteAccordionActive to multiple lyte-accordion-item tags to open multiple content panels on render.

```html
<lyte-accordion lt-prop-exclusive="false">
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
Preventing An Accordion From Opening Or Closing

You can prevent an accordion from opening or closing by returning false from either the onBeforeOpen or the onBeforeClose method.

```html
<lyte-accordion on-before-open={{method("preventOpen")}}>
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
```javascript
static methods()  {
  return{
    preventOpen : function(){
    // do stuff
    return false;
    }
  }
}
```
Preventing An Accordion From Opening Or Closing

You can prevent an accordion from opening or closing by returning false from either the onBeforeOpen or the onBeforeClose method.

```html
<lyte-accordion on-before-open={{method("preventOpen")}}>
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
```javascript
static methods()  {
  return{
    preventOpen : function(){
    // do stuff
    return false;
    }
  }
}
```
Accordion Scrolling To Reveal Content

The lyte-accordion has the ability to reveal overflowed content by scrolling to it when an item is opened. This is only possible when the lyte-accordion tag has a height set to it(with overflow and position css properties like the example), preventing the content from being displayed.

```html
<lyte-accordion style="position: relative; height: 200px; overflow: scroll;" lt-prop-exclusive="false">
  <template is="registerYield" yield-name="yield">
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 1
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 2
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 3
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
    <lyte-accordion-item>
      <lyte-accordion-header>
        Accordion 4
        <lyte-icon class="lyteAccordionArrow"></lyte-icon>
      </lyte-accordion-header>
      <lyte-accordion-body>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat.
      </lyte-accordion-body>
    </lyte-accordion-item>
  </template>
</lyte-accordion>
```
Adding/Removing New Items

You can also add/remove new items into the accordion after the accordion is rendered. Add/remove items into the items(in the above example) array to add/remove accordion items.

```html
<lyte-accordion>
    <template is="registerYield" yield-name="yield">
        <% items.forEach(function(item,index){ %>
            <lyte-accordion-item>
                <lyte-accordion-header>
                    Accordion Header
                    <lyte-icon class="lyteAccordionArrow"></lyte-icon>
                </lyte-accordion-header>
                <lyte-accordion-body>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </lyte-accordion-body>
            </lyte-accordion-item>
        <% } ) %>
    </template>
</lyte-accordion>
<lyte-button onclick={{action("addItem")}}>
    <template is="registerYield" yield-name="text">
        Add Item
    </template>
</lyte-button>
```
```javascript
import { arrayUtils } from "@slyte/component";
static actions() {
  return{
      addItem: function() {
          arrayUtils( this.getData( 'items' ), 'push', data );
      }
  }
}
```
Foot Notes

If you want to open one of the accordion items through script after it is rendered, just query select the accordion item and invoke the click function on it. Doing this does execute the callbacks of the accordion.Utils can be used to achieve this.

```javascript
document.querySelector( 'lyte-accordion-item' ).click();
```
```javascript
document.querySelector( 'lyte-accordion-item' ).open(); // Open the particular item
document.querySelector( 'lyte-accordion-item' ).close(); // Close the particular item
```

Make sure the lyte-accordion and its items are not hidden when the accordion is rendered. The lyte-accordion tries to calculate the heights of its elements so hidden elements don't yield a result. If your accordion is hidden, then set the lt-prop-dynamic property to true so that it can calculate heights on opening.

When the accordion renders, it tries to calculate the height of each individual item so that it can use it later. So make sure that the accordion has a layout and has all the required styles loaded when it is about to be rendered. If you want the accordion to calculate on open then set the lt-prop-dynamic property to true.

### accordion - api

Properties

All properties must be prefixed with lt-prop.

duration(lt-prop-duration)
Description	:	With this, you can set the duration to open or close each of the accordion items. Make sure you give a valid CSS time unit for it.
Datatype	:	string
Default	:	0.2s
height(lt-prop-height)
Description	:	The property represents the height of accordion-body when opened. This property has lower precedence than the inline height set to the lyte-accordion-body. If a lt-prop-height or an inline height is not provided, then the height of the accordion body on render is used as the height. If any content is added after the initial render and if that changes the height of the accordion body, then that height is not calculated. This is done to improve performance. You can use the lt-prop-dynamic property to forego this optimization and make the accordion calculate the height of the body each time it is opened or closed.
Datatype	:	string
exclusive(lt-prop-exclusive)
Description	:	Set it to false to open multiple lyte-accordion-items at the same time.
Datatype	:	boolean
Default	:	true
dynamic(lt-prop-dynamic)
Description	:	Accordion by default calculates the height of the items when it initially renders and reuses those heights when one of the body is opened or closed. So if the content of one accordion-item's body changes, the accordion will not open to the new height. For the accordion to calculate heights dynamically at run time, set the lt-prop-dynamic to true.
Datatype	:	boolean
Default	:	false
nested(lt-prop-nested)
Description	:	To add an accordion inside an accordion's body use the lt-prop-nested property.
Datatype	:	boolean
Default	:	false
Methods

Methods of lyte-accordion are as follows:

on-changed
Description	:	Executed after one of the accordion-items is either opened or closed.
on-close
Description	:	on-close executes before the accordion is closed. This callback is subject to change.
on-after-close
Description	:	Executed after the accordion is completely closed.
on-open
Description	:	Executed before the accordion is opened. This callback is subject to change.
on-after-open
Description	:	Executed after the accordion is completely opened.
on-before-close
Description	:	Executed just before one of the accordion items is closed.
on-before-open
Description	:	Executed just before one of the accordion items is opened.
after-render
Description	:	If you are trying to get the dimensions of the accordion, use the after-render callback of the accordion instead of the didConnect callback of the parent component. All accordion dimensions are only available in the after-render method.
Utils

Utils of lyte-accordion-item

open
Description	:	Used to open a particular item.
close
Description	:	Used to close a particular item.

---

## alert

### alert - overview

Alert

Alert, an UI element which is used to notify the users about a particular event occurred in the system that requires immediate attention from the user.


NOTE : To open the alert you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values for all other properties you have used. This will make sure that the values passed by you are considered while opening the alert.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-alert.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy 

Alert can be rendered in two ways - with yield and without yield.

Tags of the alert - with yield.

lyte-alert-header - The header of the alert.
lyte-alert-content - The content of the alert.
lyte-alert-footer - The footer of the alert.
Alert-With and Without Yield

With Yield : Users can provide their own content in the alert using yield. To use yield set ltPropYield value as true and provide the content inside yield. Provide the heading of the alert inside lyte-alert-header tag and the contents inside lyte-alert-content tag. For yield type alert, properties like ltPropType, ltPropHeading, ltPropPrimaryMessage, ltPropSecondaryMessage are not required.

Without Yield : Users can also use the alert without yield by setting the ltPropYield value as false . To provide the messages and heading use the properties like ltPropPrimaryMessage, ltPropSecondaryMessage, ltPropHeading. Users can also set the type of alert using ltPropType property.

```html
<lyte-alert lt-prop-wrapper-class = "sampleAlert" lt-prop-yield = "true">
    <template is = "registerYield" yield-name = "alert">
        <lyte-alert-header>
            Delete Profile
        </lyte-alert-header>
        <lyte-alert-content>
            Are you sure want to delete this profile?
        </lyte-alert-content>
    </template>
</lyte-alert>
```
```html
<lyte-alert lt-prop-heading = "Delete Profile" lt-prop-primary-message = "Confirm Delete" lt-prop-secondary-message = "Are you sure want to delete this profile?"></lyte-alert>
```
Type

The following are the five types of alerts

```html
<lyte-alert lt-prop-type="success"></lyte-alert>
```
```html
<lyte-alert lt-prop-type="error"></lyte-alert>
```
```html
<lyte-alert  lt-prop-type="warning"></lyte-alert>
```
```html
<lyte-alert lt-prop-type="info"></lyte-alert>
```
```html
<lyte-alert  lt-prop-type="confirm"></lyte-alert>
```


Animation

This propery specifies the animation which will be shown when the alert is opened. There are 2 types of animation -

slideDown : By setting this value, alert when opened, slides from top and gets fixed at the top position specified by the user through ltPropTop property. When closed, it slides upwards and disappears.
zoomIn : By setting this value, alert when opened appears in the window showing some zoom effect.

```html
<lyte-alert lt-prop-animation = "zoomIn" ></lyte-alert>
```
```html
<lyte-alert  lt-prop-top="100px" lt-prop-animation = "slideDown" ></lyte-alert>
```
Heading

You can specify Heading for the alert with heading property. It is optional.

```html
<lyte-alert  lt-prop-heading = "This is the title of alert"></lyte-alert>
```
```html
<lyte-alert lt-prop-heading = "" ></lyte-alert>
```


Primary Message

You can set the primary message in the alert box with this property. It is optional.

```html
<lyte-alert lt-prop-primary-message = "Primary Message"></lyte-alert>
```
```html
<lyte-alert lt-prop-primary-message = "" ></lyte-alert>
```


Secondary Message

You can also set your secondary message. It is optional. It is ethical to provide either a primary message or secondary message, else alert will not be meaningful.

```html
<lyte-alert lt-prop-secondary-message = "Secondary Message Text"></lyte-alert>
```
```html
<lyte-alert lt-prop-secondary-message = "" ></lyte-alert>
```


Buttons

You can configure your own buttons in the alert with lt-prop-buttons or you can choose not to show any.

```html
<lyte-alert lt-prop = '{"buttons" : [{"type":"accept","text":"Ok","appearance":"primary"}]}' ></lyte-alert>
```
```html
<lyte-alert lt-prop = '{"buttons" : [{"type":"accept","text":"Ok","appearance":"success"},{"type":"reject","text":"Cancel","appearance":"failure"}]}' ></lyte-alert>
```
```html
<lyte-alert lt-prop = '{"buttons" : [{"type":"accept","text":"Yes","appearance":"primary"},{"type":"reject","text":"No","appearance":"failure"},{"type":"reject","text":"Cancel","appearance":"default"}]}' ></lyte-alert>
```


Button Position

Even the position of the buttons can be configured for an Alert instance with lt-prop-button-position.

```html
<lyte-alert lt-prop-button-position = 'left' ></lyte-alert>
```
```html
<lyte-alert lt-prop-button-position = 'right' ></lyte-alert>
```
```html
<lyte-alert lt-prop-button-position = 'center' ></lyte-alert>
```


Dimmer

Alert's dimmer color and dimmer opacity can be modified with lt-prop-dimmer . By default, dimmer color is black(#000) and opacity is 0.4.

```html
<lyte-alert  lt-prop = '{"dimmer":{"color":"#2451a4","opacity":"0.4"}}' ></lyte-alert>
```
```html
<lyte-alert lt-prop = '{"dimmer":{"color":"#000","opacity":"0.8"}}' ></lyte-alert>
```


Show Close Button

Close icon in alert is optional. You can choose to show or hide the icon. This property's value should be given as boolean. You can use method 'ltProp()' or attribute lt-prop-show-close-button.

```html
<lyte-alert lt-prop = '{"showCloseButton":true}' ></lyte-alert>
```
```html
<lyte-alert lt-prop = '{"showCloseButton":false}' ></lyte-alert>
```

### alert - api

Properties

All properties should be prefixed with lt-prop.

type (lt-prop-type)
Name	:	type (lt-prop-type)
Description	:	This specifies the type of the alert.
Datatype	:	string
show (lt-prop-show)
Name	:	show (lt-prop-show)
Description	:	Set this property true to show the alert, false to hide. Note: Boolean values cannot be set using element attributes. Use ltProp() method of the element.
Datatype	:	boolean
Default	:	false
wrapper-class (lt-prop-wrapper-class)
Name	:	wrapper-class (lt-prop-wrapper-class)
Description	:	This property sets given class to wrapper div of Alert. This helps you to identify your Alert and also to make style changes to that.
Datatype	:	string
allow-multiple (lt-prop-allow-multiple)
Name	:	allow-multiple (lt-prop-allow-multiple)
Description	:	This property helps you to open another modal/alert/popover without closing current alert.
Datatype	:	boolean
Default	:	false
heading (lt-prop-heading)
Name	:	heading (lt-prop-heading)
Description	:	Text to be rendered as Heading of the alert.
Datatype	:	string
primary-message (lt-prop-primary-message)
Name	:	primary-message (lt-prop-primary-message)
Description	:	Text to be rendered as primary message of the alert.
Datatype	:	string
secondary-message (lt-prop-secondary-message)
Name	:	secondary-message (lt-prop-secondary-message)
Description	:	Text to be rendered as secondary message of the alert.
Datatype	:	string
top (lt-prop-top)
Name	:	top (lt-prop-top)
Description	:	This property helps you to set the top property of the alert.
Datatype	:	CSS value
Default	:	40px
buttons (lt-prop-buttons)
Name	:	buttons (lt-prop-buttons)
Description	:	A JSON string, consists of buttons information to be rendered in the alert. The string can consist of all the properties supported by lyte-button. Two types of buttons are supported: accept and reject.
Datatype	:	array of object(s)
Default	:	[{type:"accept", text:"Ok"}]
button-position (lt-prop-button-position)
Name	:	button-position (lt-prop-button-position)
Description	:	Position of the buttons.
Datatype	:	string
Default	:	right
show-close-button (lt-prop-show-close-button)
Name	:	show-close-button (lt-prop-show-close-button)
Description	:	Set this property to true to show close button on the alert.
Datatype	:	boolean
Default	:	true
close-on-escape (lt-prop-close-on-escape)
Name	:	close-on-escape (lt-prop-close-on-escape)
Description	:	Set this property to true to close the alert on escape keypress
Datatype	:	boolean
Default	:	true
dimmer (lt-prop-dimmer)
Name	:	dimmer (lt-prop-dimmer)
Description	:	This property helps you to set the dimmer color and opacity.
Datatype	:	object
Default	:	{color:black,opacity:0.4}
yield (lt-prop-yield)
Name	:	yield (lt-prop-yield)
Description	:	Set this property to true to provide the content of the alert using yield.
Datatype	:	boolean
Default	:	false
animation (lt-prop-animation)
Name	:	animation (lt-prop-animation)
Description	:	Sets the animation for the alert which will be shown while it opens.
Datatype	:	string
Default	:	slideDown
content-align (lt-prop-content-align)
Name	:	content-align (lt-prop-content-align)
Description	:	Set this property to align the content of the alert
Datatype	:	string
Default	:	left
aria (lt-prop-aria)
Name	:	aria (lt-prop-aria)
Description	:	This is a boolean property that indicates if aria attributes are provided using lt-prop-aria-attributes property or not. Setting it to true indicates that some aria attributes are provided and those properties will be added to the alert element.
Datatype	:	boolean
Default	:	false
aria-attributes (lt-prop-aria-attributes)
Name	:	aria-attributes (lt-prop-aria-attributes)
Description	:	This property is used to get the aria properties that will be added to the alert element. For example if role property is provided then it is added to the div having class alertPopup. aria-labelledby is added to the header div of the alert and aria-describedby is added to the content div of the alert.
Datatype	:	object
prevent-focus (lt-prop-prevent-focus)
Name	:	prevent-focus (lt-prop-prevent-focus)
Description	:	If set to true, it will prevent intial focus on elements inside the alert that is set by the alert. It is useful in those scenarios where any element rendered inside the alert have ltPropAutoFocus as true.
Datatype	:	boolean
Default	:	false
Methods

The following are the methodsof lyte-alert.

on-show
Name	:	on-show
Description	:	It is called, whenever alert is opened.
on-accept
Name	:	on-accept
Description	:	It is called, on click of button with type accept.
on-reject
Name	:	on-reject
Description	:	It is called, on click of button with type reject. It also checks for the return value. If false is returned then the alert won't be closed.
on-close
Name	:	on-close
Description	:	It is called, whenever alert is closed. Alert can be closed on click of close button and escape key pressed. It is called after onAccept and onReject too.

---

## avatarnavigator

### avatarnavigator - overview

Avatar Navigator

An UI component to navigate a list of avatars.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-avatarnavigator.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
A Basic Example
```HTML
<lyte-avatar-navigator lt-prop-images={{images}} lt-prop-url-value="name" lt-prop-system-value="value">

</lyte-avatar-navigator>
```
```javascript
images: [ {
    'name': '/images/avatar/1.jpg',
    'value': '1'
},
 {
    'name': '/images/avatar/2.jpg',
    'value': '2'
},
 {
    'name': '/images/avatar/3.jpg',
    'value': '3'
},
 {
    'name': '/images/avatar/4.jpg',
    'value': '4'
},
 {
    'name': '/images/avatar/5.jpg',
    'value': '5'
},
 {
    'name': '/images/avatar/6.jpg',
    'value': '6'
},
 {
    'name': '/images/avatar/7.jpg',
    'value': '7'
},
 {
    'name': '/images/avatar/8.jpg',
    'value': '8'
},
 {
    'name': '/images/avatar/9.jpg',
    'value': '9'
},
 {
    'name': '/images/avatar/10.jpg',
    'value': '10'
},
 {
    'name': '/images/avatar/11.jpg',
    'value': '11'
},
 {
    'name': '/images/avatar/12.jpg',
    'value': '12'
},
 {
    'name': '/images/avatar/13.jpg',
    'value': '13'
},
 {
    'name': '/images/avatar/14.jpg',
    'value': '14'
},
 {
    'name': '/images/avatar/15.jpg',
    'value': '15'
},
 {
    'name': '/images/avatar/16.jpg',
    'value': '16'
},
 {
    'name': '/images/avatar/17.jpg',
    'value': '17'
},
 {
    'name': '/images/avatar/18.jpg',
    'value': '18'
},
 {
    'name': '/images/avatar/19.jpg',
    'value': '19'
}, {
    'name': '/images/avatar/20.jpg',
    'value': '20'
},
 {
    'name': '/images/avatar/21.jpg',
    'value': '21'
},
{
    'name': '/images/avatar/22.jpg',
    'value': '22'
},
{
    'name': '/images/avatar/23.jpg',
    'value': '23'
},
{
    'name': '/images/avatar/24.jpg',
    'value': '24'
},
{
    'name': '/images/avatar/25.jpg',
    'value': '25'
},
{
    'name': '/images/avatar/26.jpg',
    'value': '26'
},
{
    'name': '/images/avatar/27.jpg',
    'value': '27'
},
{
    'name': '/images/avatar/28.jpg',
    'value': '28'
},
{
    'name': '/images/avatar/29.jpg',
    'value': '29'
},
{
    'name': '/images/avatar/30.jpg',
    'value': '30'
} ]
```

The avatar navigator renders a list of avatars which are selectable. Usually it is used to represent a list of users(in chat rooms or in other social media applications).

It requires you to pass an array of objects. The lt-prop-url-value represents the key in each object which represents the image url and the lt-prop-system-value represents the key in the object which uniquely identifies the avatar.

Images are rendered in the same order as their order in the array.

The value of the lt-prop-url-value key in each object is added to the src attribute of an img tag which ends up loading the image. So make sure the url points to the image resource.

The arrows on the left end and the right end are used to navigate to the previous or next set of images. Images are loaded on demand(only when they slide into view).

When the navigator renders, it uses the dimensions of the parent and the width of each image to determine the number of images that can be displayed at once.

The avatar navigator will try to fill the width of its parent container. It also requires the width of each image in the navigator to be the same. Unequal image widths will break the UI.

The avatar navigator will try to read the width of each image. Conversely, you can also pass in the image width with lt-prop-image-width property to prevent it from reading it from the DOM(for performance). But the avatar navigator makes no effort in setting width of the image. The lt-prop-image-width is simply an optimization.

Yielded Example
```HTML
<lyte-avatar-navigator lt-prop-avatar-yield="true" lt-prop-images={{images}} lt-prop-url-value="name" lt-prop-system-value="value">
    <template is="registerYield" yield-name="avatarYield">
        <lyte-avatar-navigator-item lt-prop-image={{lyteImage}}></lyte-avatar-navigator-item>
    </template>
</lyte-avatar-navigator>
```
```javascript
images: [ {
    'name': '/images/avatar/1.jpg',
    'value': '1'
},
 {
    'name': '/images/avatar/2.jpg',
    'value': '2'
},
 {
    'name': '/images/avatar/3.jpg',
    'value': '3'
},
 {
    'name': '/images/avatar/4.jpg',
    'value': '4'
},
 {
    'name': '/images/avatar/5.jpg',
    'value': '5'
},
 {
    'name': '/images/avatar/6.jpg',
    'value': '6'
},
 {
    'name': '/images/avatar/7.jpg',
    'value': '7'
},
 {
    'name': '/images/avatar/8.jpg',
    'value': '8'
},
 {
    'name': '/images/avatar/9.jpg',
    'value': '9'
},
 {
    'name': '/images/avatar/10.jpg',
    'value': '10'
},
 {
    'name': '/images/avatar/11.jpg',
    'value': '11'
},
 {
    'name': '/images/avatar/12.jpg',
    'value': '12'
},
 {
    'name': '/images/avatar/13.jpg',
    'value': '13'
},
 {
    'name': '/images/avatar/14.jpg',
    'value': '14'
},
 {
    'name': '/images/avatar/15.jpg',
    'value': '15'
},
 {
    'name': '/images/avatar/16.jpg',
    'value': '16'
},
 {
    'name': '/images/avatar/17.jpg',
    'value': '17'
},
 {
    'name': '/images/avatar/18.jpg',
    'value': '18'
},
 {
    'name': '/images/avatar/19.jpg',
    'value': '19'
}, {
    'name': '/images/avatar/20.jpg',
    'value': '20'
},
 {
    'name': '/images/avatar/21.jpg',
    'value': '21'
},
{
    'name': '/images/avatar/22.jpg',
    'value': '22'
},
{
    'name': '/images/avatar/23.jpg',
    'value': '23'
},
{
    'name': '/images/avatar/24.jpg',
    'value': '24'
},
{
    'name': '/images/avatar/25.jpg',
    'value': '25'
},
{
    'name': '/images/avatar/26.jpg',
    'value': '26'
},
{
    'name': '/images/avatar/27.jpg',
    'value': '27'
},
{
    'name': '/images/avatar/28.jpg',
    'value': '28'
},
{
    'name': '/images/avatar/29.jpg',
    'value': '29'
},
{
    'name': '/images/avatar/30.jpg',
    'value': '30'
} ]
```

You can pass in yielded content by setting the lt-prop-avatar-yield to true. The yield is invoked for each image in the navigator.

The lyte-avatar-navigator-item tag here represents each individual image in the avatar navigator and needs to be used in the avatarYield

The lt-prop-image={{lyteImage}} is required and must be given when using the yielded avatar navigator. The {{lyteImage}} is an object passed from inside the lyte-avatar-navigator. This object must be passed to lt-prop-image attribute of the lyte-avatar-navigator-item.

Selecting Values
```HTML
<lyte-avatar-navigator lt-prop-selected={{selectedObj}} lt-prop-images={{images}} lt-prop-url-value="name" lt-prop-system-value="value">

</lyte-avatar-navigator>
```
```javascript
selectedObj: {
    'name': '/images/avatar/13.jpg',
    'value': '13'
}
images: [ {
    'name': '/images/avatar/1.jpg',
    'value': '1'
},
 {
    'name': '/images/avatar/2.jpg',
    'value': '2'
},
 {
    'name': '/images/avatar/3.jpg',
    'value': '3'
},
 {
    'name': '/images/avatar/4.jpg',
    'value': '4'
},
 {
    'name': '/images/avatar/5.jpg',
    'value': '5'
},
 {
    'name': '/images/avatar/6.jpg',
    'value': '6'
},
 {
    'name': '/images/avatar/7.jpg',
    'value': '7'
},
 {
    'name': '/images/avatar/8.jpg',
    'value': '8'
},
 {
    'name': '/images/avatar/9.jpg',
    'value': '9'
},
 {
    'name': '/images/avatar/10.jpg',
    'value': '10'
},
 {
    'name': '/images/avatar/11.jpg',
    'value': '11'
},
 {
    'name': '/images/avatar/12.jpg',
    'value': '12'
},
 {
    'name': '/images/avatar/13.jpg',
    'value': '13'
},
 {
    'name': '/images/avatar/14.jpg',
    'value': '14'
},
 {
    'name': '/images/avatar/15.jpg',
    'value': '15'
},
 {
    'name': '/images/avatar/16.jpg',
    'value': '16'
},
 {
    'name': '/images/avatar/17.jpg',
    'value': '17'
},
 {
    'name': '/images/avatar/18.jpg',
    'value': '18'
},
 {
    'name': '/images/avatar/19.jpg',
    'value': '19'
}, {
    'name': '/images/avatar/20.jpg',
    'value': '20'
},
 {
    'name': '/images/avatar/21.jpg',
    'value': '21'
},
{
    'name': '/images/avatar/22.jpg',
    'value': '22'
},
{
    'name': '/images/avatar/23.jpg',
    'value': '23'
},
{
    'name': '/images/avatar/24.jpg',
    'value': '24'
},
{
    'name': '/images/avatar/25.jpg',
    'value': '25'
},
{
    'name': '/images/avatar/26.jpg',
    'value': '26'
},
{
    'name': '/images/avatar/27.jpg',
    'value': '27'
},
{
    'name': '/images/avatar/28.jpg',
    'value': '28'
},
{
    'name': '/images/avatar/29.jpg',
    'value': '29'
},
{
    'name': '/images/avatar/30.jpg',
    'value': '30'
} ]
```

You can set the lt-prop-selected attribute of the avatar navigator to select a particular image. Similarly, to get the current selected item, you can use the lt-prop-selected attribute(.ltProp( 'selected' )). Setting lt-prop-selected will position that particular item in the middle.

Preventing Cyclic Navigation
```HTML
<lyte-avatar-navigator lt-prop-cyclic="false" lt-prop-images={{images}} lt-prop-url-value="name" lt-prop-system-value="value">

</lyte-avatar-navigator>
```
```javascript
images: [ {
    'name': '/images/avatar/1.jpg',
    'value': '1'
},
 {
    'name': '/images/avatar/2.jpg',
    'value': '2'
},
 {
    'name': '/images/avatar/3.jpg',
    'value': '3'
},
 {
    'name': '/images/avatar/4.jpg',
    'value': '4'
},
 {
    'name': '/images/avatar/5.jpg',
    'value': '5'
},
 {
    'name': '/images/avatar/6.jpg',
    'value': '6'
},
 {
    'name': '/images/avatar/7.jpg',
    'value': '7'
},
 {
    'name': '/images/avatar/8.jpg',
    'value': '8'
},
 {
    'name': '/images/avatar/9.jpg',
    'value': '9'
},
 {
    'name': '/images/avatar/10.jpg',
    'value': '10'
},
 {
    'name': '/images/avatar/11.jpg',
    'value': '11'
},
 {
    'name': '/images/avatar/12.jpg',
    'value': '12'
},
 {
    'name': '/images/avatar/13.jpg',
    'value': '13'
},
 {
    'name': '/images/avatar/14.jpg',
    'value': '14'
},
 {
    'name': '/images/avatar/15.jpg',
    'value': '15'
},
 {
    'name': '/images/avatar/16.jpg',
    'value': '16'
},
 {
    'name': '/images/avatar/17.jpg',
    'value': '17'
},
 {
    'name': '/images/avatar/18.jpg',
    'value': '18'
},
 {
    'name': '/images/avatar/19.jpg',
    'value': '19'
}, {
    'name': '/images/avatar/20.jpg',
    'value': '20'
},
 {
    'name': '/images/avatar/21.jpg',
    'value': '21'
},
{
    'name': '/images/avatar/22.jpg',
    'value': '22'
},
{
    'name': '/images/avatar/23.jpg',
    'value': '23'
},
{
    'name': '/images/avatar/24.jpg',
    'value': '24'
},
{
    'name': '/images/avatar/25.jpg',
    'value': '25'
},
{
    'name': '/images/avatar/26.jpg',
    'value': '26'
},
{
    'name': '/images/avatar/27.jpg',
    'value': '27'
},
{
    'name': '/images/avatar/28.jpg',
    'value': '28'
},
{
    'name': '/images/avatar/29.jpg',
    'value': '29'
},
{
    'name': '/images/avatar/30.jpg',
    'value': '30'
} ]
```

Setting lt-prop-cyclic as false prevents cyclic navigation.

Showing Tooltip
```HTML
<lyte-avatar-navigator lt-prop-tooltip-value="tooltip" lt-prop-images={{images}} lt-prop-url-value="name" lt-prop-system-value="value">

</lyte-avatar-navigator>
```
```javascript
images: [ {
    'name': '/images/avatar/1.jpg',
    'value': '1',
    'tooltip': '1'
},
 {
    'name': '/images/avatar/2.jpg',
    'value': '2',
    'tooltip': '2'
},
 {
    'name': '/images/avatar/3.jpg',
    'value': '3',
    'tooltip': '3'
},
 {
    'name': '/images/avatar/4.jpg',
    'value': '4',
    'tooltip': '4'
},
 {
    'name': '/images/avatar/5.jpg',
    'value': '5',
    'tooltip': '5'
},
 {
    'name': '/images/avatar/6.jpg',
    'value': '6',
    'tooltip': '6'
},
 {
    'name': '/images/avatar/7.jpg',
    'value': '7',
    'tooltip': '7'
},
 {
    'name': '/images/avatar/8.jpg',
    'value': '8',
    'tooltip': '8'
},
 {
    'name': '/images/avatar/9.jpg',
    'value': '9',
    'tooltip': '9'
},
 {
    'name': '/images/avatar/10.jpg',
    'value': '10',
    'tooltip': '10'
},
 {
    'name': '/images/avatar/11.jpg',
    'value': '11',
    'tooltip': '11'
},
 {
    'name': '/images/avatar/12.jpg',
    'value': '12',
    'tooltip': '12'
},
 {
    'name': '/images/avatar/13.jpg',
    'value': '13',
    'tooltip': '13'
},
 {
    'name': '/images/avatar/14.jpg',
    'value': '14',
    'tooltip': '14'
},
 {
    'name': '/images/avatar/15.jpg',
    'value': '15',
    'tooltip': '15'
},
 {
    'name': '/images/avatar/16.jpg',
    'value': '16',
    'tooltip': '16'
},
 {
    'name': '/images/avatar/17.jpg',
    'value': '17',
    'tooltip': '17'
},
 {
    'name': '/images/avatar/18.jpg',
    'value': '18',
    'tooltip': '18'
},
 {
    'name': '/images/avatar/19.jpg',
    'value': '19',
    'tooltip': '19'
}, {
    'name': '/images/avatar/20.jpg',
    'value': '20',
    'tooltip': '20'
},
 {
    'name': '/images/avatar/21.jpg',
    'value': '21',
    'tooltip': '21'
},
{
    'name': '/images/avatar/22.jpg',
    'value': '22',
    'tooltip': '22'
},
{
    'name': '/images/avatar/23.jpg',
    'value': '23',
    'tooltip': '23'
},
{
    'name': '/images/avatar/24.jpg',
    'value': '24',
    'tooltip': '24'
},
{
    'name': '/images/avatar/25.jpg',
    'value': '25',
    'tooltip': '25'
},
{
    'name': '/images/avatar/26.jpg',
    'value': '26',
    'tooltip': '26'
},
{
    'name': '/images/avatar/27.jpg',
    'value': '27',
    'tooltip': '27'
},
{
    'name': '/images/avatar/28.jpg',
    'value': '28',
    'tooltip': '28'
},
{
    'name': '/images/avatar/29.jpg',
    'value': '29',
    'tooltip': '29'
},
{
    'name': '/images/avatar/30.jpg',
    'value': '30',
    'tooltip': '30'
} ]
```

Set the lt-prop-tooltip-value to show tooltips. The lt-prop-tooltip-value represents the key in the object which has the tooltip label. Hovering over the image shows the tooptip.

### avatarnavigator - api

Properties

All properties must be prefixed with lt-prop.

images(lt-prop-images)
Description	:	This is an array of objects where each object represents an avatar in the avatar navigator.
Datatype	:	array
Default	:	[]
url-value(lt-prop-url-value)
Description	:	The url-value represents the key in the object which has the url of the image.
Datatype	:	string
Default	:	image
avatar-yield(lt-prop-avatar-yield)
Description	:	Set it to true to yield each avatar item.
Datatype	:	boolean
Default	:	false

The lyteItem must be passed to the lt-prop-image attribute of the lyte-avatar-navigator-item. The lyteItem is an object constructed inside lyte-avatar-navigator and passed to the yield.

icon-yield(lt-prop-icon-yield)
Description	:	Set it to true to yield each of the navigation icons.
Datatype	:	boolean
Default	:	false
image-width(lt-prop-image-width)
Description	:	Set the lt-prop-image-width to prevent the calculation of width of each image. This property will not set the width of the image rendered inside the navigator. Its used to tell the avatar navigator about the width of each image. Its simply a performance optimization
Datatype	:	string
Default	:	calculated by rendering a dummy image

Width of each image in the avatar navigator must be the same.

system-value(lt-prop-system-value)
Description	:	It represents the key in the object which unqiuely identifies each avatar.
Datatype	:	string
Default	:	value
selected(lt-prop-selected)
Description	:	It represents the current selected value in the avatar navigator.
Datatype	:	object
selected-class(lt-prop-selected-class)
Description	:	It represents the class to add to the currently selected avatar item.
Datatype	:	string
Default	:	lyteAvatarSelectedItem
previous-icon-class(lt-prop-previous-icon-class)
Description	:	Use this to set the class of the previous icon(navigation icon).
Datatype	:	string
Default	:	lyteAvatarPrevIcon
next-icon-class(lt-prop-next-icon-class)
Description	:	Use this to set the class of the next icon(navigation icon).
Datatype	:	string
Default	:	lyteAvatarNextIcon
alt-value(lt-prop-alt-value)
Description	:	It represents the key in the object which specifies the alt attribute of the img tag rendered inside each avatar.
Datatype	:	string
Default	:	
alt(lt-prop-alt)
Description	:	Set the alt attribute of all img tags rendered to this value. This takes lower precedence than alt-value in the object.
Datatype	:	string
Default	:	
cyclic(lt-prop-cyclic)
Description	:	This prevents cyclic navigation. Meaning the navigator will not render the next icon when viewing the last set of images or the navigator will not render the previous set of icons when viewing the first set of images.
Datatype	:	boolean
Default	:	false
disabled-list(lt-prop-disabled-list)
Description	:	Array of objects which represent the avatars that must not be selectable or is disabled. onSelect callback will not be fired for when clicking on a disabled avatar.
Datatype	:	array
Default	:	[]
tooltip-value(lt-prop-tooltip-value)
Description	:	It represents the key in the object that has the tooltip label for each avatar.
Datatype	:	string
tooltip(lt-prop-tooltip)
Description	:	Configurations for the tooltip used. Refer tooltip documentation to know more.
Datatype	:	object
Default	:	{'position': 'bottom', 'appearance': 'box','margin': 5, 'keeptooltip': true}
preload(lt-prop-preload)
Description	:	With this property, you can preload the next set of images to get rendered.
Datatype	:	boolean
Default	:	false
aria-label-value(lt-prop-aria-label-value)
Description	:	It represents the key in the object that has the aria label for each item. The aria-label attribute will be set on the lyte-avatar-navigator-item.
Datatype	:	string
Methods

The fo llowing are the methods of lyte-avatar-navigator

on-select(on-select)
Description	:	Executed when an avatar item is selected. Does not fire for disabled items.
on-previous(on-previous)
Description	:	Executed when the previous navigation arrow is pressed.
on-next(on-next)
Description	:	Executed when the next navigation arrow is pressed.
Utility functions
.reset()
Description	:	This is used to recalculate the layout of the lyte-avatar-navigator(Usually done when the dimensions of the parent changes so the avatar navigator needs to calculate the number of images it can display at a time with respect to the changed dimensions).
lyte-avatar-navigator-item
.reset()
Description	:	A special tag which represents each individual avatar item in the navigator. This takes in one attribute the lt-prop-image whose value should be assigned to the lyteImage variable which is passed to the yield from the avatar navigator.

---

## banner

### banner - overview

Banner

Banner, an UI element which is used to display information about the app state. Banner doesn't interrupt the user and can be dismissed by the user.

NOTE : Set the ltPropShow value as true only after all other properties are set to open the banner.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-modal.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-banner.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```

Simple banner component can be defined as below. By default, lyte-banner takes the full width. You can define your own content within the lyte yield.

```html
<lyte-banner>
    <template is="registerYield" yield-name="yield">
        <div>
            Use lyte for speed rendering and for high performance
        </div>
    </template>
</lyte-banner>
```



Floating banner :

Banner will be shown in overlayed manner like a modal. The floating banner inherits the lyte-modal component.

Non-floating banner :

Banner will be rendered as a inline element.

NOTE :If lt-prop-floating is set as false, then it is an non-floating banner. Else it is a floating banner. By default, lt-prop-floating is true.

```html
<lyte-banner lt-prop-floating="true">
    <template is="registerYield" yield-name="yield">
        <div>
            Your feedbacks are welcomed. Give your feedback. Feedback is present in right side panel.
        </div>
    </template>
</lyte-banner>
```





This property will help you to align the banner either at the top or bottom. By default, position is top and lt-prop-position must be set before opening the banner.

```html
<lyte-banner lt-prop-position="bottom">
    <template is = "registerYield" yield-name = "yield">
        <div>
            For quick and efficient performance use lyte-ui components
        </div>
    </template>
</lyte-banner>
```



The properties in lyte-modal can be given in banner using lt-prop-modal. To know about lyte-modal Click here.


Note : The lt-prop-modal property is applicable only for the floating banner. In floating banner by default, lt-prop-freeze is false, lt-prop-close-on-escape is false and lt-prop-overlay-close is false. If you change these properties, it will break the basic usecase of banner.



```html
<lyte-banner lt-prop-modal='{"wrapperClass":"sample","offset":{"top":"400px"}}'>
    <template is="registerYield" yield-name="yield">
        <div>
            For any queries, give your opinion or comments in feedback.
        </div>
    </template>
</lyte-banner>
```
```javascript
var bannerElement = document.getElementById("bannerElement");
bannerElement.ltProp("modal",{"wrapperClass":"sample","offset":{ "top":"200px"}});
```



Note : If offset is given in lt-prop-modal property for banner, then lt-prop-position will be ignored.

Initial spacing: A space difference between the window boundary and banner. This property will be applied for the first banner, which is placed either at the top or bottom.

Banner spacing: A space difference between the two or more banners.

Anatomy for spacing difference is shown below :

 
```html
<lyte-banner lt-prop-initial-spacing = "10px">
    <template is = "registerYield" yield-name = "yield">
        <div>
          Use lyte for speed rendering and for high performance(banner1)
        </div>
    </template>
</lyte-banner>
<lyte-banner  lt-prop-initial-spacing = "15px" lt-prop-banner-spacing = "5px">
    <template is = "registerYield" yield-name = "yield">
        <div>
            Use for creating optimized  application(banner2)
        </div>
    </template>
</lyte-banner>
```

---

## breadcrumb

### breadcrumb - overview

Breadcrumb

Breadcrumb, from the family of UI components, is an indicator used to locate the current position inside a navigational hierarchy. It supports yield and non yield.

Dependencies
```javascript
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-breadcrumb.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-breadcrumb.js" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-breadcrumb.css"> </link>
also requires a sprite file - ui-components/theme/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of a breadcrumb is as shown below.

Simple structure


Let us see the structure of lyte-table

Tags Used
lyte-breadcrumb -A wrapper for bread crumb component.
lyte-breadcrumb-structure - outer container
lyte-breadcrumb-item - each list item
Semantic structure
```javascript
<lyte-breadcrumb >

</lyte-breadcrumb>
```
```javascript
<lyte-breadcrum lt-prop-yield="true">
   <template is="registerYield" yield-name="rateIcon" >
       <lyte-breadcrumb-structure>
           <%someArray.forEach( function( item, index){%>
               <lyte-breadcrumb-item data-value = {{item.order}}>
                   <lyte-breadcrumb-body>
                      {{item.name}}
                   </lyte-breadcrumb-body>
               </lyte-breadcrumb-item>
           <%})%>
       </lyte-breadcrumb-structure>
  </template>
</lyte-breadcrumb>
```
Bellcrumb syntax - with and without yield
```javascript
<lyte-breadcrumb lt-prop-label = 'name' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}>
</lyte-breadcrumb>
```
```javascript
<lyte-breadcrumb lt-prop-yield = true on-click = {{method('someMethod')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-breadcrumb-structure>
            <%someArray.forEach( function( item, index ){%>
                <lyte-breadcrumb-item data-value = {{item.order}}>
                    <lyte-breadcrumb-body>
                        {{item.name}}
                    </lyte-breadcrumb-body>
                </lyte-breadcrumb-item>
            <%})%>
        </lyte-breadcrumb-structure>
    </template>
</lyte-breadcrumb>
```
Default breadcrumb

This is the default type breadcrumb. Each breadcrumb items are separated by an Arrow. You can customize it by adding lt-prop-class to lyte-breadcrumb element. It will render both array of strings and array of objects

```html
<lyte-breadcrumb lt-prop-yield = true on-click = {{method('someMethod')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-breadcrumb-structure>
            <%someArray.forEach( function( item, index ){%>
                <lyte-breadcrumb-item data-value = {{item.order}}>
                    <lyte-breadcrumb-body>
                        {{item.name}}
                    </lyte-breadcrumb-body>
                </lyte-breadcrumb-item>
            <%})%>
        </lyte-breadcrumb-structure>
    </template>
</lyte-breadcrumb>
```
```html
<lyte-breadcrumb lt-prop-label = 'name' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}>
</lyte-breadcrumb>
```
```javascript
// in your component Js file
data(){
  return {
      someArray : prop ( 'array' , { default : [
          { "name" : "home" , "order" : 1 } ,
          { "name" : "new" , "order" : 2 } ,
          { "name" : "edit" , "order" : 3 } ,
          { "name" : "save" , "order" : 4 } ]
      } )
  }
}
static methods() {
  return{
    someMethod : function ( clickedItem , breadcrumb , event , data ) {
        // your operations
    }
  }
}
```
```html
<lyte-breadcrumb>
    <template is="registerYield" yield-name="yield">
        <lyte-breadcrumb-structure>
            <lyte-breadcrumb-item>
                <lyte-breadcrumb-body></lyte-breadcrumb-body>
            </lyte-breadcrumb-item>
            <lyte-breadcrumb-item>
                <lyte-breadcrumb-body></lyte-breadcrumb-body>
            </lyte-breadcrumb-item>
            <lyte-breadcrumb-item>
                <lyte-breadcrumb-body></lyte-breadcrumb-body>
            </lyte-breadcrumb-item>
        </lyte-breadcrumb-structure>
    </template>
</lyte-breadcrumb>
```
Advanced breadcrumb

The lyte-breadcrumb component supports an advanced responsive type, which automatically adjusts to the available width. When the number of breadcrumb items exceeds the visible space, the extra items gets collapsed into a dropdown menu, keeping the breadcrumb clean and user-friendly across all screen sizes.

It supports only the yield type for customization.

```html
<lyte-breadcrumb lt-prop-yield = true lt-prop-type = "advanced" lt-prop-data = {{someArray}}>
    <template is="registerYield" yield-name="yield">
        <template if="{{ltPropDropdown}}">
            <lyte-breadcrumb-item data-value =
            {{ltPropContent.order}} >
                <lyte-breadcrumb-body>
                    {{ltPropContent.name}}
                </lyte-breadcrumb-body>
            </lyte-breadcrumb-item>
        </template>
        <template lyte-else>
            <%ltPropContent.forEach( function( item, index ){%>
                <lyte-breadcrumb-item data-value =  {{item.order}}>
                    <lyte-breadcrumb-body>
                        <a> {{item.name}}</a>
                    </lyte-breadcrumb-body>
                </lyte-breadcrumb-item>
            <%})%>
        </template>
    </template>
</lyte-breadcrumb>
```
```javascript
import { prop } from "@slyte/core";
 // in your component
 data() {
   return {
       someArray : prop( 'array' , { default : [
       { "name" : "one" , "order" : 1 } ,
       { "name" : "two" , "order" : 2 } ,
       { "name" : "three" , "order" : 3 } ,
       { "name" : "four" , "order" : 4 } ,
       { "name" : "five" , "order" : 5 } ,
       { "name" : "six" , "order" : 6 } ,
       { "name" : "seven" , "order" : 7 } ,
       { "name" : "eight" , "order" : 8 },
       { "name" : "nine" , "order" : 9 } ,
       { "name" : "ten" , "order" : 10 } ,
       { "name" : "eleven" , "order" : 11 }
     ]
     } ),
   }}
```

### breadcrumb - api

Properties

All properties should be prefixed with lt-prop.

class ( lt-prop-class )
DataType	:	String
Default	:	lyteBreadcrumbSlash
Description	:	Given class will be added to the rendered lyte-breadcrumb-structure
yield ( lt-prop-yield )
DataType	:	Boolean
Default	:	false
Description	:	To render your own HTML element use 'yield'
data( breadcrumb data ) ( lt-prop-data( breadcrumb data ) )
DataType	:	Array
Default	:	[ ] (empty array)
Description	:	Array of data used for the construction of the breadcrumb. It should be in 'array' or 'array of objects' format. For 'array of objects' you need to specify 'label' and 'options' keys
label ( lt-prop-label )
DataType	:	String
Default	:	-
Description	:	Key which contains the each breadcrumb body value in 'content' array (for array of objects)
active-class ( lt-prop-active-class )
DataType	:	String
Default	:	-
Description	:	It specifies the class to be added for active breadcrumb item. Always last breadcrumb item will be in active state
type ( lt-prop-type )
DataType	:	String
Default	:	default
Description	:	It is used define the type of the breadcrumb.
buttonDisplay ( lt-prop-buttonDisplay )
DataType	:	String
Default	:	
Description	:	It is used to provide custom button for the dropdown (lyte-drop-button).
dropdown ( lt-prop-dropdown )
DataType	:	object
Default	:	
Description	:	It is used to provide dropdown properties for advanced type.
completed-class ( lt-prop-completed-class )
DataType	:	String
Default	:	lyteCompleted
Description	:	It specifies the class to be added for the breadcrumb items which are marked as 'completed'
aria ( lt-prop-aria )
DataType	:	Boolean
Default	:	false
Description	:	It will add aria attributes to the lyte-breadcrumb-item
aria-value ( lt-prop-aria-value )
DataType	:	String
Default	:	page
Description	:	Given value will be added to the active breadcrumb item
Methods

You can provide the methods to lyte-breadcrumb either via script or HTML

on-click
Description	:	This method is triggered whenever an item is clicked
before-render
Description	:	This method is invoked before rendering the component
after-render
Description	:	This method is invoked after rendering the component
Functions

You can call these functions from anywhere when lyte-breadcrumb is rendered.

modifyCrumbItems
Description	:	You can 'add' or 'remove' or 'modify' your breadcrumb data using this function. It can be used only when 'lt-prop-yield' is set to false. Refer 'arrayUtils' for more details. For yielded cases you need to perform array operations in your array
refreshBreadcrumbSize
Description	:	Used to call custom refresh for advanced type.
Yields

You can render your own drop items by using yield

yield ( Description )
Description	:	All the elements given inside the yield template will be rendered inside breadcrumb instead of default breadcrumb rendering

---

## carousel

### carousel - overview

Carousel

Carousel being a promonent UI component, cycles through a series of elements one by one. It works with a series of images, text, or custom markup. It is a yielded component.

Dependencies
```javascript
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-carousel.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

 The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-carousel.js" ></script>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy 
Carousel With Slide

The lyte-carousel by default renders a simple carousel with slide animation. This component is fully customizeable. It also includes support for previous/next controls and indicators

By default, lt-prop-auto-play is set false. Setting to true will play the automatic cycling through slides.

```html
<lyte-carousel lt-prop-active-index="0" lt-prop-data={{yourData}} lt-prop-records="2">
    <template is="registerYield" yield-name="carouselBoxYield">
        <lyte-carousel-prev> </lyte-carousel-prev>
        <lyte-carousel-content>
            <lyte-carousel-item> Content 1 </lyte-carousel-item>
            <lyte-carousel-item> Content 2 </lyte-carousel-item>
        </lyte-carousel-content>
        <lyte-carousel-indicator>
            <lyte-carousel-indicator-item data-value="0"> 1 </lyte-carousel-indicator-item>
            <lyte-carousel-indicator-item data-value="1"> 2 </lyte-carousel-indicator-item>
        </lyte-carousel-indicator>
        <lyte-carousel-next> </lyte-carousel-next>
    </template>
</lyte-carousel>
```
 Vertical Orientation

Set your predefined data for carousel using lt-prop-data. You can also provide the total number of slides using lt-prop-records. The current active slide or the slide which should be displayed is set using lt-prop-active-index.

Carousel With Fade

You can render a carousel with fade animation. For this you need to set ltPropEffect attribute to fade . You can also add the indicators to the carousel along with previous and next icon.

```html
<lyte-carousel lt-prop-active-index="0" lt-prop-data={{yourData}} lt-prop-effect="fade" lt-prop-records="2">
    <template is="registerYield" yield-name="carouselBoxYield">
        <lyte-carousel-prev> </lyte-carousel-prev>
        <lyte-carousel-content>
            <lyte-carousel-item> <img src="/images/carousel_pic/landscape_1.jpeg"> </lyte-carousel-item>
            <lyte-carousel-item> <img src="/images/carousel_pic/landscape_2.jpeg"> </lyte-carousel-item>
        </lyte-carousel-content>
        <lyte-carousel-indicator>
            <lyte-indicator-item data-value="0"> 1 </lyte-indicator-item>
            <lyte-indicator-item data-value="1"> 2 </lyte-indicator-item>
        </lyte-carousel-indicator>
        <lyte-carousel-next> </lyte-carousel-next>
    </template>
</lyte-carousel>
```
 Vertical Orientation
Carousel With Sub Item

You can render a carousel with more than a single image in each slide. For this you need to use lyte-carousel-sub-itemtag inside lyte-carousel-item tag.

```html
<lyte-carousel lt-prop-active-index="0" lt-prop-data={{yourData}} lt-prop-effect="fade" lt-prop-records="2">
    <template is="registerYield" yield-name="carouselBoxYield">
        <lyte-carousel-prev> </lyte-carousel-prev>
        <lyte-carousel-content>
            <lyte-carousel-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_1.jpeg"> </lyte-carousel-sub-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_2.jpeg"> </lyte-carousel-sub-item>
            </lyte-carousel-item>
            <lyte-carousel-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_3.jpeg"> </lyte-carousel-sub-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_4.jpeg"> </lyte-carousel-sub-item>
            </lyte-carousel-item>
        </lyte-carousel-content>
        <lyte-carousel-indicator>
            <lyte-indicator-item data-value="0"> 1 </lyte-indicator-item>
            <lyte-indicator-item data-value="1"> 2 </lyte-indicator-item>
        </lyte-carousel-indicator>
        <lyte-carousel-next> </lyte-carousel-next>
    </template>
</lyte-carousel>
```
 Vertical Orientation
Sub Item With Frames

You can render a carousel image using frames by adding lyteCarouselFrames class.

```html
<lyte-carousel lt-prop-active-index="0" lt-prop-data={{yourData}} lt-prop-effect="fade" lt-prop-records="2" class="lyteCarouselFrames">
    <template is="registerYield" yield-name="carouselBoxYield">
        <lyte-carousel-prev> </lyte-carousel-prev>
        <lyte-carousel-content>
            <lyte-carousel-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_1.jpeg"> </lyte-carousel-sub-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_2.jpeg"> </lyte-carousel-sub-item>
            </lyte-carousel-item>
            <lyte-carousel-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_3.jpeg"> </lyte-carousel-sub-item>
                <lyte-carousel-sub-item> <img src="/images/carousel_pic/landscape_4.jpeg"> </lyte-carousel-sub-item>
            </lyte-carousel-item>
        </lyte-carousel-content>
        <lyte-carousel-indicator>
            <lyte-indicator-item data-value="0"> 1 </lyte-indicator-item>
            <lyte-indicator-item data-value="1"> 2 </lyte-indicator-item>
        </lyte-carousel-indicator>
        <lyte-carousel-next> </lyte-carousel-next>
    </template>
</lyte-carousel>
```
 Vertical Orientation
Carousel With Custom Slides

Apart from the image, you can render any html, text, etc just like the below example. The given will get rendered in the form of slides.

 Vertical Orientation
Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus

### carousel - api

Properties

All properties should be prefixed with lt-prop. It should be given as attribute of element which needs carousel.

AutoPlay
Name	:	autoPlay
Description	:	Set it true for automatic cycling to the next item
Datatype	:	Boolean


Data
Name	:	data
Description	:	Array which contains the data for carousel.
Datatype	:	Array


Effect
Name	:	effect
Description	:	Specifies the animation to be shown while moving from one image to another.
Datatype	:	String
Default	:	slide


Orientation
Name	:	orientation
Description	:	Specifies the orientation (horizontal / vertical) for the carousel to get rendered.
Datatype	:	String
Default	:	horizontal


ActiveIndex
Name	:	activeIndex
Description	:	With this, you can set the index of the slide to be shown.
Datatype	:	Number
Default	:	0


MoreRecords
Name	:	moreRecords
Description	:	Set it true to add more records.
Datatype	:	Boolean
Default	:	false


Records
Name	:	records
Description	:	With this property, you can provide the total number of records.
Datatype	:	Number


Auto Play Duration
Name	:	autoPlayDuration
Description	:	The amount of time to delay between the automatically cycling of an item.
Datatype	:	Number


Auto Play Pause
Name	:	autoPlayPause
Description	:	Set it true to pause the automatic cycling of the slides.
Datatype	:	Boolean


Aria
Name	:	aria
Description	:	Set it true to enable aria attributes.
Datatype	:	Boolean


Aria Attributes
Name	:	ariaAttributes
Description	:	Used to set the ARIA attributes to the carousel element.
Datatype	:	Object


TabIndex
Name	:	TabIndex
Description	:	With this property, you can provide the tab index.
Datatype	:	Number


ArrowKey
Name	:	ArrowKey
Description	:	With this property, you can enable the arrow keys.
Datatype	:	boolean
Default	:	false


Methods

The following are the methods of lyte-carousel which has to be provided during initialization.

onBeforeNext
Name	:	onBeforeNext
Description	:	This event is triggered before the current slide gets changed to the next slide.


onAfterNext
Name	:	onAfterNext
Description	:	This event is triggered after the current slide changes to next slide


onBeforePrev
Name	:	onBeforePrev
Description	:	This event is triggered before the current slide changes to prev slide.


onAfterPrev
Name	:	onAfterPrev
Description	:	This event is triggered after the current slide changes to prev slide.


Utils

The following are the utils of lyte-carousel.

moveSlideByIndex
Name	:	moveSlideByIndex
Description	:	With this you can pass the index to change the active slide.


reset
Name	:	reset
Description	:	With this you can reset the carousal navigation. After resetting, the navigation starts from active index(ltPropActiveIndex).


getActiveSlideIndex
Name	:	getActiveSlideIndex
Description	:	On calling this util, you get to know the current active index .


focus
Name	:	focus
Description	:	With this you get the focus on the slide.

---

## drawer

### drawer - overview

Drawer

The lyte-drawer as a component, can host contents to rest above the existing content. It can easily slide in/out of view or be pinned to expand/collapse within content.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-modal.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-drawer.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Basic Drawer

A basic drawer is rendered below.

```html
<lyte-drawer lt-prop-yield=true>
    <template is = "registerYield" yield-name = "drawerPanel">
        <lyte-drawer-body>
            <lyte-drawer-label> Email</lyte-drawer-label>
            <lyte-drawer-item data-value="inbox"> Inbox  </lyte-drawer-item>
            <lyte-drawer-item data-value="sent"> Outbox  </lyte-drawer-item>
            <lyte-drawer-item data-value="draft"> Draft  </lyte-drawer-item>
            <lyte-drawer-item data-value="spam"> Spam  </lyte-drawer-item>
        </lyte-drawer-body>
    </template>
</lyte-drawer>
```
Example
Click the open icon to open the drawer
Options Property

Drawer can be rendered with an array as well. This involves not using a yield and simply passing data to the lt-prop-options attribute.

```html
<lyte-drawer lt-prop-options={{data}} lt-prop-user-value="name" lt-prop-system-value="value">
</lyte-drawer>
```

You can pass the following data formats to the drawer.

```javascript
[
    {
        "name"  : "Iphone Xs",
        "value" : "apple"
    },
    {
        "name"  : "Samsung a50",
        "value" : "samsung"
    },
    {
        "name"  : "Redmi note 7 pro",
        "value" : "mi"
    },
    {
        "name"  : "Oppo f11",
        "value" : "oppo"
    },
    {
        "name"  : "Vivo s1",
        "value" : "vivo"
    },
    {
        "name" : "One plus 7T pro",
        "value" : "oneplus"
    }
]
```
```javascript
[{
    "India": [
        {
            "name"  : "TamilNadu",
            "value" : "tn"
        },
        {
            "name"  : "Kerala",
            "value" : "kl"
        },
        {
            "name" : "Karnataka",
            "value" : "ka"
        }
    ]
},{
    "Asia": [
        {
            "name"  : "India",
            "value" : "in"
        },
        {
            "name"  : "Singapore",
            "value" : "sg"
        },
        {
            "name"  : "Japan",
            "value" : "jp"
        }
    ]
}]
```
Array of Objects
Click the open icon to open the drawer
Opt Groups
Click the open icon to open the drawer
Each object in the array that is passed to the lt-prop-options attribute should hold the user-value and the system-value.
The system-value is the value appended to the data-value attribute of the lyte-drawer-item and the user-value is the textContent of each item.
The lt-prop-user-value specifies the key in the object which holds the user-value . In the above example, the name key holds the textContent of each item.
The lt-prop-system-value specifies the key in the object which holds the system-value . In the above example, the value key holds the data-value attribute's value.

You can also pass array of strings to the drawer. In this case, lt-prop-user-value and lt-prop-system-value need not be specified as each value in the array is assumed to be both the system and user value.

```html
<lyte-drawer lt-prop-layout="overlay" lt-prop-options={{data}}>
</lyte-drawer>
```

The data format is as follows

```javascript
[
    "Dell",
    "Lenovo",
    "Apple",
    "Hp",
    "Asus",
    "Acer"
]
```
```javascript
[{
    "Europe" : [
        "Germany",
        "France",
        "Spain"
    ]
},{
    "Asia" : [
        "India",
        "Singapore",
        "Japan"
    ]
}]
```
Array Of Strings:
Click the open icon to open the drawer
Opt Group with Strings:
Click the open icon to open the drawer with the option group.

You can also pass the content as a mix of array of strings or objects. This obviously needs a lt-prop-user-value and the lt-prop-system-value. Each string is treated as the user-value and system-value.

```html
<lyte-drawer lt-prop-layout="overlay" lt-prop-options={{data}}>
</lyte-drawer>
```

The data format is as follows

```javascript
[
    "Africa",
    {
        "name"  : "SouthAfrica",
        "value" : "rsa"
    },
    {
        "India" : [
            {
                "name"  : "TamilNadu",
                "value" : "tn"
            },
            {
                "name"  : "Kerala" ,
                "value" : "kl"
            },
            {
                "name" : "Karnataka",
                "value" : "ka"
            }
        ]
    },
    { "Asia" :
        [
            "India",
            "Singapore",
            "Japan"
        ]
    }
]
```
Mixed Example:
Click the open icon to open the drawer
Position

This property will help you to align the drawer at the right or left. By default, lt-prop-position will be left and set lt-prop-position before opening the drawer.

Note : lt-prop-position changes won't be reflected after opening the drawer.

```html
<lyte-drawer lt-prop-position="right" lt-prop-options={{data}}>
</lyte-drawer>
```
Example :
Click the open icon to open the drawer
Overlay Drawer

The drawer sits over the top of page content. In simple words the drawer slide in and out without distrubing the content of the page. You can use the property lt-prop-layout. and set it as overlay to render a overlay drawer.

```html
<lyte-drawer lt-prop-layout="overlay" lt-prop-options={{options}} lt-prop-system-value="name" lt-prop-user-value="value">
</lyte-drawer>
```
```html
<lyte-drawer lt-prop-layout="overlay" lt-prop-yield=true>
    <template is="registerYield" yield-name="drawerPanel">
        <lyte-drawer-body>
                <lyte-drawer-label>Zoho product</lyte-drawer-label>
                <lyte-drawer-item data-value="crm"> CRM </lyte-drawer-item>
                <lyte-drawer-item data-value="cliq"> Cliq </lyte-drawer-item>
                <lyte-drawer-item data-value="mail"> Mail </lyte-drawer-item>
                <lyte-drawer-item data-value="desk"> Desk </lyte-drawer-item>
        </lyte-drawer-body>
    </template>
</lyte-drawer>
```
```javascript
[
    {
        "name"  : "Iphone Xs",
        "value" : "apple"
    },
    {
        "name"  : "Samsung a50",
        "value" : "samsung"
    },
    {
        "name"  : "Redmi note 7 pro",
        "value" : "mi"
    },
    {
        "name"  : "Oppo f11",
        "value" : "oppo"
    },
    {
        "name"  : "Vivo s1",
        "value" : "vivo"
    },
    {
        "name"  : "One plus 7T pro",
        "value" : "oneplus"
    }
]
```
Example :
Here non-yielded lyte-drawer rendered below.

---

## gridstack

### gridstack - overview

Gridstack

Gridstack is an UI component, used to create draggable and resizable grids with responsive actions

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-gridstack.css"></link>
```
Anatomy

The anatomy of a gridstack is as shown below.

Default gridstack

This is a sample gridstack. Here grids are arranged according to the given position and dimensions.

Element matches lt-prop-scope selector will be considered as grid container element. Every elements matching lt-prop-handler selector will be considered as grid elements.



Individual grid positions and dimensions are defined in attributes.

lyte-grid-x will take x units in horizontal direction.

lyte-grid-y will take y units in vertical direction.

lyte-grid-length will take given units as length.

lyte-grid-height will take given units as height.

Some properties of gridstack are as follows


Float - By default, grids will be moved upwards if it has enough spaces at top to occupy. If float is enabled grids will be placed at its dropped position. It won't move upwards on drop.
Undo - This property allows undo and redo handlings.
Horizontal - It defines grid movement direction. Generally during grid overlap other grids will be adjusted vertically. If this is enabled grids will be repositioned in horizontal direction.
Bestfit - This is to indicate the final position of a moving grid element when it is released at any time. Best fit will not be shown if multiple grids are selected for moving.
FreezeMode - It will not allow grids to select and drag
ColumnMode - It will create column like grids. You can specify column count. Given grid positions and dimensions are ignored if it is enabled.

 Float 
 Bestfit 
 Undo 
 Horizontal 
 Freeze mode 
 Column mode Create Grid

On observing the below code snippet, you can find that lt-prop-grid-length is set as 11 . Here the main gridstack container area will be converted to 11 parts in horizontal direction.

addGrid - This util is used to add a new grid to already rendered gridstack element.

setProperty - This util is used to update length, height, resize, x, y propeties of a individual grid

reRender - This util will refresh entire gridstack. In any case if width of gridstack area is changed or any grid modification you can call this util.

removeGrid - This will remove a individual grid reference from gridstack

```html
<lyte-gridstack style = "height: 400px" lt-prop-bestfit-type = 'grid' lt-prop-grid-length = 11 lt-prop-scope="div.lyteGridStack" lt-prop-handler=".lyteGridStackItem">
<template is="registerYield" yield-name="lyteGridStack">
     <div class="lyteGridStack">
        <div class="lyteGridStackItem grid" lyte-grid-length=3 lyte-grid-height=3 style="background: green;color : white;">
            <lyte-grid-content>1 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=3 lyte-grid-height=3 lyte-grid-resize="disabled">
            <lyte-grid-content style="background: green;color : white;">2 U can't change my size </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=3 lyte-grid-height=3 style="background: green;color : white;">
            <lyte-grid-content>3 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=1 lyte-grid-height=2 style="background: green;color : white;">
            <lyte-grid-content>4 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=2 lyte-grid-height=3 style="background: green;color : white;">
            <lyte-grid-content>5 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-y=0 lyte-grid-length=3 lyte-grid-height=3>
             <lyte-grid-content style="background: green;color : white;">6 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=2 lyte-grid-height=3>
            <lyte-grid-content style="background: green;color : white;">7 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=2 lyte-grid-height=3>
            <lyte-grid-content style="background: green;color : white;">8 </lyte-grid-content>
        </div>
        <div class="lyteGridStackItem grid" lyte-grid-length=2 lyte-grid-height=3>
            <lyte-grid-content style="background: green;color : white;">9 </lyte-grid-content>
        </div>
    </div>
</template>
</lyte-gridstack>
```
```javascript
// for adding a new grid

document.querySelector( "lyte-gridstack" ).addGrid( newGrid , { x : 0 , y : 0 , length : 2 , height : 2 , minLength : 2 , maxLength : 4 , minHeight : 2 , maxHeight : 4 , resize : 'disabled' } )
```
```javascript
// for changing existing property

document.querySelector ( "lyte-gridstack" ). setProperty ( targetDiv , 'length' , 3 )
```
```javascript
// for refreshing entire gridstack positions
document.querySelector( "lyte-gridstack" ).reRender()
```
```javascript
// for removing existing grids
document.querySelector( "lyte-gridstack" ).removeGrid( existingGrid )
```
Placeholder

You can show a placeholder while dragging an external element ( drag and drop ) or a gridstack grid from another lyte-gridstack element.

Calling a placeholder will create an empty placeholder grid. You can update the placeholder position based on your drag / mousemove event. You can also remove the placeholder. To do so, the dragging element should not receive any pointer events. Refer the below code snippet to see how drag and drop functionalities are handled between two gridstacks.

```html
<div class="example_container pR oAuto">
  <style type="text/css">
    .dragGrid .lyteGridstackScope{
      overflow: visible;
      min-height: unset;
    }

    .dragGrid .gridMovePE{
      pointer-events: none;
    }

    .dragGrid .lyteGridStackPlaceholder{
      visibility: hidden;
    }
  </style>

    <div class="gridWrapper" style="border: 1px solid #5ba1e5;">
        <lyte-gridstack class = "dragGrid" lt-prop-bestfit-type = 'grid' lt-prop-scope="div.lyteGridStackDrag1" lt-prop-handler=".lyteGridStackItemDrag" lt-prop-max-grid-height = {{inf}} lt-prop-scroll-element = "body" lt-prop-unit-x = 100 on-drag = "{{method('drag')}}" on-drop = "{{method('drop')}}" on-drag-start = '{{method("dragStart")}}'>
              <template is="registerYield" yield-name="lyteGridStack">
                   <div class="lyteGridStackDrag1">
                      <div class="lyteGridStackItemDrag grid" lyte-grid-length=3 lyte-grid-height=2 lyte-grid-x = 0 lyte-grid-y = 0>
                          <lyte-grid-content>1 </lyte-grid-content>
                      </div>
                      <div class="lyteGridStackItemDrag grid" lyte-grid-length=6 lyte-grid-height=2 lyte-grid-resize="disabled">
                          <lyte-grid-content>2 U can't change my size </lyte-grid-content>
                      </div>
                      <div class="lyteGridStackItemDrag grid" lyte-grid-length=3 lyte-grid-height=2>
                          <lyte-grid-content>3 </lyte-grid-content>
                      </div>
                  </div>
              </template>
          </lyte-gridstack>
    </div>
    <div class="gridWrapper" style="border: 1px solid #5ba1e5;transform: translateY(20px);">
          <lyte-gridstack class = "dragGrid" lt-prop-bestfit-type = 'grid' lt-prop-scope="div.lyteGridStack" lt-prop-handler=".lyteGridStackItemDrag" lt-prop-max-grid-height = {{inf}} lt-prop-scroll-element = "body" lt-prop-unit-x = 100 on-drag = "{{method('drag')}}" on-drop = "{{method('drop')}}" on-drag-start = '{{method("dragStart")}}'>
                <template is="registerYield" yield-name="lyteGridStack">
                     <div class="lyteGridStack">
                        <div class="lyteGridStackItemDrag grid" lyte-grid-length=3 lyte-grid-height=2 lyte-grid-x = 0 lyte-grid-y = 0>
                            <lyte-grid-content>1 </lyte-grid-content>
                        </div>
                        <div class="lyteGridStackItemDrag grid" lyte-grid-length=6 lyte-grid-height=2 lyte-grid-resize="disabled">
                            <lyte-grid-content>2 U can't change my size </lyte-grid-content>
                        </div>
                        <div class="lyteGridStackItemDrag grid" lyte-grid-length=3 lyte-grid-height=2>
                            <lyte-grid-content>3 </lyte-grid-content>
                        </div>
                    </div>
                </template>
            </lyte-gridstack>
    </div>
</div>
```
```javascript
mousemove : function( evt ){


    var elem = this.__elem,
     __style = elem.style,
    __left = parseFloat( __style.left ),
    __top = parseFloat( __style.top ),
    target = evt.target,
    grid = target.closest( 'lyte-gridstack.dragGrid' );

    if( grid ){
        // grid placeholder update function. it will internally create a placeholder if its not available.
        var ret = grid.placeholder( 'update', evt, { length : parseInt( elem.getAttribute( "lyte-grid-length" ) ), height :  parseInt( elem.getAttribute( "lyte-grid-height" ) ) }, elem );
        if( ret == false ){
            // it means that particular gridstack reached its max height. there is no available space to place it
            return
        }
    }

    // removing placeholder in other grids if placeholder is enabled already

    this.mouseup( grid );
},

mouseup : function( grid ){
    Array.from( this.$node.getElementsByClassName( 'dragGrid' ) ).forEach( function( item ){
        if( item == grid ){
            return;
        }
        item.placeholder( 'remove' );
    })
}

static methods(){
   return{
     dragStart : function( nodes ){
        /* drag and drop between grids is not supported when multiple grids are selected*/
        if( this.__allow_drag = nodes.length == 1 ){
            nodes[ 0 ].nodeName.classList.add( 'gridMovePE' );
        }
      }


    drag : function( elem, evt, grid ){

        if( elem.classList.contains( 'lyteGridStackPlaceholder' ) || !this.__allow_drag ){
            return;
        }

        if( !grid.contains( evt.target ) ){
            /*
             * If grid is dragged out of its parent gridstack movements inside gridstack will be prevented.
             */
            grid.ltProp( 'ignoreDrag', true );
            this.__elem = elem;
            /*
             * Calling placeholder creation
             */
            this.mousemove( evt );
        } else {
            /*
             * If grid is dragged inside of gridstack actual grid movement inside gridstack is enabled
             */
            grid.ltProp( 'ignoreDrag', false );
            if( this.__elem ){
                /*
                 * destroying previously created placeholder in that page
                 */
                this.mouseup();
            }
        }
    },

    drop : function( selected, evt, grid ){

        delete this.__allow_drag;

        grid.ltProp( 'ignoreDrag', false );

        var elem = this.__elem;

        Array.from( selected ).forEach( function( item ){
            $L( item.nodeName ).removeClass( 'gridMovePE' );
        });

        if( elem ){
            var target = evt.target,
            close = target.closest( 'lyte-gridstack.dragGrid' );

            if( close && close != grid ){
                /*
                 * If grid is dropped on an another gridstack current grid is removed from its parent and inserted in to dropped gridstack.
                 * You can write your own code here
                 */
                var placeholder = close.placeholder( 'get' ),
                __ns = "lyte-grid-",
                bestfit = close.getElementsByClassName( 'lyteBestFit' )[ 0 ];

                if( !placeholder ){
                    return;
                }

                // removing created placeholder element.
                close.removeGrid( placeholder );
                // removing grid from source gridstack element
                grid.removeGrid( elem );

                /*
                 * New positions of grid to be insered.
                 */

                [ 'x', 'y', 'length', 'height' ].forEach( function( item ){
                    var __attr = __ns + item;
                    elem.setAttribute( __attr, placeholder.getAttribute( __attr ) );
                });

                if( bestfit ){
                    elem.setAttribute( __ns + "y", bestfit.getAttribute( __ns + 'y' ) );
                }

                // setting left and top value as auto for preventing animation
                elem.style.top = elem.style.left = "auto";

                // inserting new grid
                close.addGrid( elem );
            }

            // removing fake elements
            this.mouseup();
        }}
    }
}
```

### gridstack - api

Properties

All properties should be prefixed with lt-prop.

scope
DataType	:	String
Default	:	-
Description	:	Selector of the wrapper element which contains all the grids.
handler
DataType	:	String
Default	:	-
Description	:	Selector of the grid elements inside the given scope. All the matching elements with the given selector will be considered as grids.
unit-x
DataType	:	Number
Default	:	50
Description	:	Size of base unit in x direction. Grid length, x values will be the multiples of unit-x value in 'px'
min-unit-x
DataType	:	Number
Default	:	0
Description	:	It is the minimum unit-x value to be used on window resizing. Generally grids are resized according to the window width. To prevent grids resizing provide appropriate minUnitX
unit-y
DataType	:	Number
Default	:	50
Description	:	Size of base unit in y direction. Grid height,y values will be the multiples of unit-y value in 'px'
direction
DataType	:	String
Default	:	vertical
Description	:	It defines the movement direction of adjacent grids during drag
float
DataType	:	Boolean
Default	:	false
Description	:	By default grids will try to move upwards on drop if there is any empty space available over them. If this property is enabled grids won't be moved towards empty spaces.
bestfit
DataType	:	Boolean
Default	:	true
Description	:	It is the final positional representation of grid when it is released at any point
undo
DataType	:	Boolean
Default	:	true
Description	:	To enable undo and redo operations
margin-left
DataType	:	Number
Default	:	20
Description	:	Horizontal space between the grids ( px value )
min-margin-left
DataType	:	Number
Default	:	20
Description	:	It is the minimum horizontal margin value to be used on window resizing
margin-top
DataType	:	String
Default	:	20
Description	:	This adds vertical space between the grids.
resize-direction
DataType	:	Array
Default	:	['left','bottomLeft','bottomRight','bottom','right']
Description	:	Rendered grids are resizable in given directions
freeze-mode
DataType	:	Boolean
Default	:	false
Description	:	Freeze mode enables/ disables the movement and selection of grids
bestfit-class
DataType	:	String
Default	:	-
Description	:	This class will be added to the bestfit element
default-length
DataType	:	Number or percentage String
Default	:	2
Description	:	It is the default length to be given for newly created grid if length is not specified
default-height
DataType	:	Number or percentage String
Default	:	2
Description	:	It is the default height to be given for newly created grid if height is not specified
default-min-length
DataType	:	Number or percentage String
Default	:	1
Description	:	Minimum length of the grids. Grids can't be resized below this length
default-min-height
DataType	:	Number or percentage String
Default	:	1
Description	:	Minimum height of the grids. Grids can't be resized below this height
default-max-length
DataType	:	Number or percentage String
Default	:	-
Description	:	Maximum length of the grids. Grids can't be resized above this length
default-max-height
DataType	:	Number or percentage String
Default	:	-
Description	:	Maximum height of the grids. Grids can't be resized above this height
column-mode
DataType	:	Boolean
Default	:	false
Description	:	It will create columnar view for grids with default column value
column
DataType	:	Number
Default	:	3
Description	:	Number of columns to be displayed in a row
forced-reposition
DataType	:	Boolean
Default	:	false
Description	:	Grids are placed in random available positions instead of given positions
grid-length
DataType	:	Number
Default	:	-
Description	:	lyte-gridstack will be divided into given number of equal grids. If it is not provided grid length will be calculated based on provided unit x value
bestfit-type
DataType	:	String
Default	:	default
Description	:	It defines the background of the gridstack element
prevent
DataType	:	Object
Default	:	{"horizontal" : false, "vertical" : false}
Description	:	It will prevent grid movement and resize behaviours in the given direction
square-grid
DataType	:	Boolean
Default	:	false
Description	:	Unit x value will be used for both unit x and unit y. So all the grid units will become perfect square
grid-space-color
DataType	:	String
Default	:	#f5f5f5
Description	:	It will set as bestfit background color and spacing color
grid-selection-class
DataType	:	String
Default	:	lyteGridFocused
Description	:	Given class will be added to each selected
visible
DataType	:	Array
Default	:	[ ]
Description	:	Elements which are in visible portion while scrolling are updated in this variable. Its a readonly property
visible-boundary
DataType	:	Object
Default	:	{ }
Description	:	Left, right, top, bottom values of visible portion in grid units. Its a readonly property
check-current-position
DataType	:	Boolean
Default	:	false
Description	:	While dragging, lyte-gridstack uses moved position of a selected grid for checking overlap. If this property is enabled gridstack will check current position instead of moved position
containment
DataType	:	Boolean
Default	:	false
Description	:	If it is set to true grids can't be moved outside of its container
max-grid-height
DataType	:	Number
Default	:	Infinity
Description	:	Maximum bottom value of all the grids. Grids will not be moved below if it is reached the given max height
scroll-element
DataType	:	String
Default	:	-
Description	:	Selector matches with the closest element to lyte-gridstack element will be considered as the scrollable element. it will be scrolled based on selected grid movement.
ignore-drag
DataType	:	Boolean
Default	:	false
Description	:	If this property is enabled grid movement will happen while dragging. But grid's current positions won't be changed.
maintain-order
DataType	:	Boolean
Default	:	false
Description	:	Whenever window is resized grids will be arranged in the same DOM order inspite of free spaces available in top.
scroll-value
DataType	:	Number
Default	:	10
Description	:	The amount of scroll incremental value to be used when a grid is dragged in the edges.
Grid properties

These properties defines grid position and dimension. It should be prefixed with lyte-grid.

x
Default	:	+ve integer value
Description	:	Horizontal position of grid in term of unit x. It should be an integer.
y
Default	:	+ve integer value
Description	:	Vertical position of grid in term of unit y. It should be an integer.
length
Default	:	-
Description	:	Length of the grid. It should be an integer. It will take ( length * 50px + ( length - 1 ) * marginLeft) as length.
min-length
Default	:	-
Description	:	Minimum length of the grid. Grids can't be resized below min length.
max-length
Default	:	-
Description	:	Maximum length of the grid. Grids can't be resized above max length.
height
Default	:	-
Description	:	Height of grid. It should be an integer. It will take ( height * 50px + ( height - 1 ) * marginTop) as height.
min-height
Default	:	-
Description	:	Minimum height of the grid. Grids can't be resized below min height.
max-height
Default	:	-
Description	:	Maximum height of the grid. Grids can't be resized above max height
resize
Default	:	-
Description	:	If set to disabled, particular grid can't be resized
Methods

You can provide the methods to lyte-gridstack either via script or HTML.

on-before-select
Description	:	The method is invoked before selecting a grid
ReturnValue	:	If this method returns false grid will not be selected
on-select
Description	:	The method is invoked after selecting a grid.
on-before-drop
Description	:	The method is invoked before dropping the selected grids.
ReturnValue	:	If this method returns false grids will be placed to its previous position.
on-drop
Description	:	The method is invoked after dropping selected grids.
on-drag
Description	:	The method is invoked while dragging the grids.
on-window-resize
Description	:	This method is invoked on window resizing.
before-render
Description	:	This method is invoked before the gridstack is rendered.
after-render
Description	:	This method is invoked after the gridstack is rendered.
on-item-add
Description	:	This method is invoked whenever a new grid is added via addGrid utility function.
on-property-change
Description	:	This method is invoked whenever a new grid property is changed via setProperty utility function.
on-resize
Description	:	This method is invoked after resizing a grid. This will be called during the cursor release.
Functions

These functions are defined in lyte-gridstack element.

addGrid
Description	:	You can add grids to an already rendered gridstack element by this function. Generally grids will be added and positioned with a fastdom delay. you can make it synchronous by passing "sync" : true to the grid details object.
removeGrid
Description	:	You can remove any grid from lyte-gridstack by this function.
reRender
Description	:	It will refresh the positions and dimensions of the entire grids.
setProperty
Description	:	You can alter dimensions and positions of any grid by using this function
updateValue
Description	:	You can update all the properties of a single grid using this util. min - max of width and height are not supported in setProperty util. You can use this instead. Passing boolean true as a third argument will adjust other grids position if it is overlapped with other grids after changing the passed values.
getGridPositions
Description	:	This util will return position and dimensions of all the available grids.
getEmptyPos
Description	:	This will return a freely available position for passed length and height value.
topMove
Description	:	This function will move all the grids to top if it has enough space to move up.
placeholder
Description	:	This function can be used for creating, updating, getting and deleting placeholder grid
Yields

You can render your own Gridstack grids by using yield.

lyteGridStack
Description	:	All the grids should be rendered inside this yield.

---

## hovercard

### hovercard - overview

Hovercard

A hovercard, is an UI element, is useful for displaying additional information or any content associated to an element when hovered.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-hovercard.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-popover.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Hovercard

Hovercard will be created with callout arrow.

Note : To render a hovercard you need to set ltPropShow attribute as true on mouseenter of the origin element.

```html
<lyte-hovercard  lt-prop-origin-elem="lyte-button#tooltip">
  <template is = "registerYield" yield-name = "hoverCardYield">
    <lyte-hovercard-content>
     <p>  A hovercard is useful for displaying additional info/content associated to an element  </p>
    </lyte-hovercard-content>
   </template>
</lyte-hovercard>
<lyte-button id="button" lyte-hovercard=true >
<template is="registerYield" yield-name="text">Default </template>
</lyte-button>
```
```javascript
// in your component
didConnect(){
var button = this.$node.querySelector('#button')
button.addEventListener('mouseenter',this.mouseEnter.bind(this))
}
mouseEnter(){
document.getElementById('hovercard').ltProp('show',true);
}
```

The element to which the hovercard element is attached is set using lt-prop-origin-elem property.

Note : If the origin element's selector is provided in the initial rendering of the hover card component, then make sure that the node is also available in the initial rendering.

Hover card component will query the origin element with the valid selector passed to the property ltPropOriginElem. If in case, the element is yet to render or is currently unavailable, kindly ensure to pass " " or 'undefined' instead of "#undefined" .

On using hover card on multiple nodes, make sure that you have unique selector for each node.

Hovercard With Auto Show

You can also show a hovercard automatically on mouse enter of the origin element without adding event handler by setting ltPropAutoShow as true and add lyte-hovercard attribute as true in origin element. If auto-show is set to false you need to handle the display of hovercard by setting lt-prop-show as true on mouse enter

Note : It is mandatory to add lyte-hovercard attribute as true in origin element

```html
<lyte-hovercard  lt-prop-auto-show = true id ="hovercard" lt-prop-origin-elem="lyte-button#button">
  <template is = "registerYield" yield-name = "hoverCardYield">
    <lyte-hovercard-content>
     <p>  A hovercard is useful for displaying additional info/content associated to an element  </p>
    </lyte-hovercard-content>
   </template>
</lyte-hovercard>
<lyte-button id="button" lyte-hovercard=true>
  <template is="registerYield" yield-name="text">Default </template>
  </lyte-button>
```

### hovercard - api

Element Properties

All properties should be prefixed with lt-prop. It should be given as attribute of element which needs hovercard.

class
DataType	:	String
Description	:	This property sets the given class to wrapper div of hovercard. This helps you to identify your hovercard and also to make style changes to it.
id
DataType	:	String
Description	:	This property sets given id to wrapper div of hovercard. This helps you to identify your hovercard and also to make style changes to it.
show
DataType	:	Boolean
Default	:	false
Description	:	Set it true to get the hover card displayed.
originElem
DataType	:	String
Description	:	Hovercard is attached to the origin element. Hovercard will be shown, related to the origin element. This property is mandatory for Hovercard component.
maxHeight
DataType	:	String
Description	:	This property helps you to define max-height of the hovercard.
maxWidth
DataType	:	String
Description	:	This property helps you to define max-width of the hovercard.
height
DataType	:	String
Description	:	This property helps you to define the height of the hovercard.
width
DataType	:	String
Description	:	This property helps you to define the width of the hovercard.
placement
DataType	:	String
Default	:	By default it depends on the available space.
Description	:	This property helps to position the hovercard. Make sure the width and height of the hovercard is less than the place available when you use this option, else it can lead to abnormal positioning of the hovercard.
showDelay
DataType	:	number
Default	:	0
Description	:	Hovercard will be displayed immediated on mouse over. If you need to delay the display, you can do so using this property.
hideDelay
DataType	:	number
Default	:	0
Description	:	On mouse out the hovercard will be removed immediately, if needed, we can persist longer using hide delay property.
maxDisplayTime
DataType	:	number
Default	:	5000
Description	:	The tooltip will be visible for 5 seconds, if needed the display time can be extended.
keepAlive
DataType	:	Boolean
Default	:	false
Description	:	max display time will not be taken into consideration on setting keepAlive.
popoverWrapperClass
DataType	:	String
Description	:	This property sets given class to wrapper div of the popover. This helps you to identify your popover and also to make style changes to it.
offset
DataType	:	object
Default	:	{}
Description	:	This property is an alternative for lt-prop-origin-elem when you dont have any origin element. When you provide origin element, it's clientRect object is calculated and the hovercard is positioned based on that. By using lt-prop-offset you provide the an object containing the values that will be available in clientRect object and those values will be used to position the hovercard. This property can be used in both the cases either you have an origin element or not. When you provide value for both lt-prop-origin-elem and lt-prop-offset, the lt-prop-offset values will be considered and used for positioning the hovercard. In case you haven't provided value for both lt-prop-origin-elem and lt-prop-offset, an error will be thrown. The width and height must be given in the lt-prop-offset.
closeOnEscape
DataType	:	Boolean
Default	:	true
Description	:	Set this property to true to close the popover on escape keypress.
autoShow
DataType	:	Boolean
Default	:	false
Description	:	Set this property to true to auto open hovercard on mouseenter.
aria
DataType	:	Boolean
Default	:	false
Description	:	This is used to enable aria attributes.
ariaAttributes
DataType	:	boolean
Default	:	false
Description	:	This is used to set the aria attribute for the hovercard.
hideOnClick
DataType	:	boolean
Default	:	false
Description	:	This is used to hide hovercard on click.
preventFocus
DataType	:	Boolean
Default	:	false
Description	:	If set to true, it will prevent intial focus on elements inside the hovercard that is set by the hovercard. It is useful in the scenarios where any element rendered inside the hovercard has ltPropAutoFocus as true.
type
DataType	:	string
Default	:	callout
Description	:	Hovercard can be shown with an arrow pointing the origin element(callout) or just a box adjacent to the origin element.
dimmer
DataType	:	object
Default	:	{'color':'black','opacity':'0.4'}
Description	:	With this property, you can set the opacity.
animation
DataType	:	string
Default	:	fade
Description	:	With this property, you can set the animation for the hover card.
autoAlign
DataType	:	boolean
Default	:	false
Description	:	With this property, you can the hover card align itself.
popover
DataType	:	object
Default	:	{}
Description	:	With this property, you set or pass the properties of a popover if used in a hovercard .
closeOnScroll
DataType	:	boolean
Default	:	true
Description	:	With this property, you can close the hover card component on scrolling.
useBetaPopover
DataType	:	boolean
Default	:	false
Description	:	With this property, on choosing true, you get the wrapper component as lyte-beta-popover component and on choosing false, you get the wrapper component as lyte-popover component.
addFocusAndBlur
DataType	:	boolean
Default	:	false
Description	:	On setting this property as true, the hover card gets displayed on originElement focus and gets hide on originElement blur.
keepHovercardDom
DataType	:	boolean
Default	:	false
Description	:	With this property, on choosing true, the worm-hole element will not get destroyed on hoverCardhide.
Methods

You can provide the methods to lyte-hovercard either via script or HTML.

before-render
Description	:	This method is invoked before the component being rendered.
after-render
Description	:	This method is invoked after the component gets rendered.
on-hovercard-show
Description	:	This method is invoked after displaying the hovercard.
on-hovercard-hide
Description	:	This method is invoked after destroying the hovercard.
on-before-hovercard-show
Description	:	This method is invoked before hovercard show.
on-hovercard-before-hide
Description	:	This method is invoked before hovercard hide.
Utils

You can provide the methods to lyte-hovercard either via script or HTML.

alignHovercard
Description	:	With this you can reset the hovercard position. This works only after rendering the contents of hovercard.
calculateOffset
Description	:	On opening the hovercard, the height and width of the hovercard is calculated. If the content of the hovercard is changed, using this util, you can let the hovercard know that the height and width has to be recalculated again.

---

## layout

Responsive Layout

Dive into this page to know how to make your webapps responsive.

Include the below link in index.html. By doing this, you are including the lyte-responsive-layout.css file.

```html
<!-- Individual Style file -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/css/layout/lyte-responsive-layout.css"></link>
```
Wrapper

sLyte responsive layout 'wrapper' are the predefined CSS classes that can be used as the outer most element of a HTML page or section,

sLyte responsive layout comes with three different container,

.lyte-container
.lyte-container-fuild
.lyte-container-(breakpoint)
Container

The .lyte-container class contains some fixed max-width.

Fluid

The .lyte-container-fluid class always takes full width of the parent.

Container Breakpoints

Have a look at the below table to view the .lyte-container-(breakpoint) class which contains the max-width based on the break point value given. Based on your requirements, you can choose the class.

CLASS	XS - <576PX	SM - >=576PX	MD - >=768PX	LG - >=992PX	XL - >=1200PX
.lyte-container	100%	540px	720px	960px	1140px
.lyte-container-sm	100%	540px	720px	960px	1140px
.lyte-container-md	100%	100%	720px	960px	1140px
.lyte-container-lg	100%	100%	100%	960px	1140px
.lyte-container-xl	100%	100%	100%	100%	1140px
.lyte-container-fluid	100%	100%	100%	100%	100%
```html
<div class="lyte-container"> This is a container </div>
<div class="lyte-container-sm"> This is a small container </div>
<div class="lyte-container-md"> This is a medium container </div>
<div class="lyte-container-lg"> This is a large container </div>
<div class="lyte-container-xl"> This is a extra large container </div>
<div class="lyte-container-fluid"> This is a container fluid </div>
```
Responsive Breakpoints

sLyte responsive layout has 4 layout break points, these break points are created by css media queries which will dynamically change based on the screen size. The layout aligns itself to the size of device such as mobile or tablet or monitor.

```javascript
// For small screen devices (moblie)
@media( min-width : 576px ){ ... }

// For Medium screen devices (tablets)
@media( min-width : 768px ){ ... }

// For Large screen devices (desktops)
@media( min-width : 992px ){ ... }

// For Extra large screen devices (large desktops)
@media( min-width : 1200px ){ ... }
```
Grid Layout

sLyte responsive layout contains row and columns, the row is a vertical sections where n number of rows can be created by the user which holds a display:flex; value and Lyte responsive layout has a 12 columns grid layout

Row

Row 1 :

Column

Column

Column

Row 2 :

Column

Column

```html
<div class="lyte-row">
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
</div>
<div class="lyte-row">
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
</div>
```
Column

Row 1 :

Column-2

Column-4

Column-6

Row 2 :

Column-4

Column-8

```html
<div class="lyte-row">
  <div class="lyte-col-2"> Column-2 </div>
  <div class="lyte-col-4"> Column-4 </div>
  <div class="lyte-col-6"> Column-6 </div>
</div>
<div class="lyte-row">
  <div class="lyte-col-4"> Column-4 </div>
  <div class="lyte-col-8"> Column-8 </div>
</div>
```
CLASS NAME	VALUE (X)	EXAMPLE
.lyte-row	-	.lyte-row
.lyte-col-x	1-12	.lyte-col-3
.lyte-smcol-x	1-12	.lyte-smcol-2
.lyte-mdcol-x	1-12	.lyte-mdcol-6
.lyte-lgcol-x	1-12	.lyte-lgcol-4
.lyte-xlcol-x	1-12	.lyte-xlcol-8

The sum of the column grid numbers in a row must not exceed '12'.

### layout - overview

Responsive Layout

Dive into this page to know how to make your webapps responsive.

Include the below link in index.html. By doing this, you are including the lyte-responsive-layout.css file.

```html
<!-- Individual Style file -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/css/layout/lyte-responsive-layout.css"></link>
```
Wrapper

sLyte responsive layout 'wrapper' are the predefined CSS classes that can be used as the outer most element of a HTML page or section,

sLyte responsive layout comes with three different container,

.lyte-container
.lyte-container-fuild
.lyte-container-(breakpoint)
Container

The .lyte-container class contains some fixed max-width.

Fluid

The .lyte-container-fluid class always takes full width of the parent.

Container Breakpoints

Have a look at the below table to view the .lyte-container-(breakpoint) class which contains the max-width based on the break point value given. Based on your requirements, you can choose the class.

CLASS	XS - <576PX	SM - >=576PX	MD - >=768PX	LG - >=992PX	XL - >=1200PX
.lyte-container	100%	540px	720px	960px	1140px
.lyte-container-sm	100%	540px	720px	960px	1140px
.lyte-container-md	100%	100%	720px	960px	1140px
.lyte-container-lg	100%	100%	100%	960px	1140px
.lyte-container-xl	100%	100%	100%	100%	1140px
.lyte-container-fluid	100%	100%	100%	100%	100%
```html
<div class="lyte-container"> This is a container </div>
<div class="lyte-container-sm"> This is a small container </div>
<div class="lyte-container-md"> This is a medium container </div>
<div class="lyte-container-lg"> This is a large container </div>
<div class="lyte-container-xl"> This is a extra large container </div>
<div class="lyte-container-fluid"> This is a container fluid </div>
```
Responsive Breakpoints

sLyte responsive layout has 4 layout break points, these break points are created by css media queries which will dynamically change based on the screen size. The layout aligns itself to the size of device such as mobile or tablet or monitor.

```javascript
// For small screen devices (moblie)
@media( min-width : 576px ){ ... }

// For Medium screen devices (tablets)
@media( min-width : 768px ){ ... }

// For Large screen devices (desktops)
@media( min-width : 992px ){ ... }

// For Extra large screen devices (large desktops)
@media( min-width : 1200px ){ ... }
```
Grid Layout

sLyte responsive layout contains row and columns, the row is a vertical sections where n number of rows can be created by the user which holds a display:flex; value and Lyte responsive layout has a 12 columns grid layout

Row

Row 1 :

Column

Column

Column

Row 2 :

Column

Column

```html
<div class="lyte-row">
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
</div>
<div class="lyte-row">
  <div class="lyte-col"> Column </div>
  <div class="lyte-col"> Column </div>
</div>
```
Column

Row 1 :

Column-2

Column-4

Column-6

Row 2 :

Column-4

Column-8

```html
<div class="lyte-row">
  <div class="lyte-col-2"> Column-2 </div>
  <div class="lyte-col-4"> Column-4 </div>
  <div class="lyte-col-6"> Column-6 </div>
</div>
<div class="lyte-row">
  <div class="lyte-col-4"> Column-4 </div>
  <div class="lyte-col-8"> Column-8 </div>
</div>
```
CLASS NAME	VALUE (X)	EXAMPLE
.lyte-row	-	.lyte-row
.lyte-col-x	1-12	.lyte-col-3
.lyte-smcol-x	1-12	.lyte-smcol-2
.lyte-mdcol-x	1-12	.lyte-mdcol-6
.lyte-lgcol-x	1-12	.lyte-lgcol-4
.lyte-xlcol-x	1-12	.lyte-xlcol-8

The sum of the column grid numbers in a row must not exceed '12'.

---

## menu

### menu - overview

Menu

A menu, an UI element, is a group of options available to perform some reasonable actions in the page. You can use event such as click, mouse enter, dbclick, context menu and define them using lt-prop-event.

A menu component is different from the Dropdown. If you intend to select an option from group of options use dropdown.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-menu.css"></link>
```
Anatomy

The anatomy of a menu is as shown below.

Tags of the menu.



lyte-menu-body - outer container
lyte-menu-item - each list item
lyte-menu-description - sub display value
lyte-menu-label - main display value
lyte-menu-group - separator of each menu group
lyte-menu-header - header of menu group
Default menu

Default menu opens on click event. It can be opened on valid javascript events like click, dblclick, mouseenter, contextmenu.

No need to make ltPropShow as true in lyte-menu. Lyte menu itself opens menu based on the triggered event. If the event's traverse path matches with lt-prop-query (valid dom selector) menu will be opened.

You can pass array of strings or array of objects for non yielded menu. In array of objects you need to specify which key contains main display value using lt-prop-user-value and additional information to be displayed using lt-prop-description.

In yielded menu all the contents of the menu will be rendered in parent component's scope. Elements rendered inside the yield will be used as menu content.

To disable a particular menu item you can set lt-prop-disabled = "true" to that particular menu item. It is not supported in non yielded menu.

```html
<lyte-button id = 'demo'>
    <template is = 'registerYield' yield-name = 'text'>
       click here
   </template>
</lyte-button>

<lyte-menu lt-prop-yield = true lt-prop-event = 'click' lt-prop-query = 'lyte-button#demo'>
 <template is = "registerYield" yield-name = "yield">
    <lyte-menu-body>
         <% someArray.forEach( function( item, index ){ %>
            <lyte-menu-item data-value = {{item.name}}>
                <lyte-menu-label>{{item.name}} </lyte-menu-label>
                <lyte-menu-description>{{item.key}} </lyte-menu-description>
            </lyte-menu-item>
         <% }) %>
    </lyte-menu-body>
  </template>
 </lyte-menu>
```
```html
<lyte-button id = 'demo'>
<template is = 'registerYield' yield-name = 'text'>
    Click here
</template>
</lyte-button>

<lyte-menu lt-prop-description = 'key' lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-event = 'click' lt-prop-query = 'lyte-button#demo'>
</lyte-menu>
```
```javascript
// in your component JS

 data() {
  return {
      someArray : prop ( 'array' , { default : [
          { "name" : "New File ..." , "key" : "Ctrl + N" },
          { "name" : "Open File...." , "key" : "Ctrl + O" }
      ]
    })
  }
}
```
```html
<lyte-menu>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
            <lyte-menu-item>
            <lyte-menu-label></lyte-menu-label>
            <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Menu for multiple elements

You can bind a single lyte-menu for multiple elements. All of your menu origin elements should match with lt-prop-query.

lt-prop-query-class ( default = 'lyteMenuSelected' ) will be added to the menu's current origin element when menu is opened. The same will be removed when menu is closed.

```html
<lyte-button class = 'someClass'>
<template is = 'registerYield' yield-name = 'text'>
Element1
</template>
</lyte-button>

<span class = "someClass">
Element2
</span>

<lyte-menu lt-prop-yield = true lt-prop-event = 'click' lt-prop-query = '.someClass'>
<template is = "registerYield" yield-name = "yield">
<lyte-menu-body>
    <% someArray.forEach( function( item, index ){ %>
         <lyte-menu-item data-value = {{item.name}}>
            {{item.name}}
         <lyte-menu-description>
            {{item.key}}
         </lyte-menu-description>
    </lyte-menu-item>
<%})%>
</lyte-menu-body>
</template>
</lyte-menu>
```
```html
<lyte-button class = 'someClass'>
<template is = 'registerYield' yield-name = 'text'>
Element1
</template>
</lyte-button>

<span class = "someClass">
Element2
</span>

<lyte-menu lt-prop-freeze = false lt-prop-description = 'key' lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-event = 'click' lt-prop-query = '.someClass'></lyte-menu>
```
```javascript
// in your component JS

data() {
  return {
    someArray : prop ( 'array' : { default : [
        { "name" : "New File ..." , "key" : "Ctrl + N" },
        { "name" : "Open File...." , "key" : "Ctrl + O" }
      ]
    })
  }
}
```
```html
<lyte-menu>
<template is = "registerYield" yield-name = "yield">
<lyte-menu-body>
    <lyte-menu-item></lyte-menu-item>
    <lyte-menu-item></lyte-menu-item>
    </lyte-menu-body>
</template>
</lyte-menu>
```
Menu with grouping

Menu items can be grouped. Each menu group should be rendered inside a lyte-menu-group tag. Group label shall be rendered inside of a lyte-menu-header tag.

```html
<lyte-menu lt-prop-yield = true lt-prop-query = '.someClass' lt-prop-freeze = false>
   <template is="registerYield" yield-name="yield">
     <lyte-menu-body>
       <% someArray.forEach(function(value, key){ %>
           <lyte-menu-group>
               <lyte-menu-header>
                   {{useSomeHelpersToGetYourTitle}}
               </lyte-menu-header>
               <% value.forEach( function( item , index ){ %>
                   <lyte-menu-item>
                       {{item.name}}
                       <lyte-menu-description>{{item.key}} </lyte-menu-description>
                   </lyte-menu-item>
               <% }) %>
           </lyte-menu-group>
       <% }) %>
   </lyte-menu-body>
</template>
</lyte-menu>
```
```html
<lyte-menu lt-prop-freeze = false lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-description = "key" lt-prop-query = '.someClass'></lyte-menu>
```
```javascript
// in your component

 data() {
  return {
     someArray : prop ( 'array' , { default : [
          [
              {
                "Open" : {
                  "name" : "New file" , "key" : "Ctrl + N" ,
                  "name" : "Open file" , "key" : "Ctrl + O" ,
                  "name" : "Open folder" , "key" : "Ctrl + N"
                }
              }
          ]
      ]
    })
  }
}
```
```html
<lyte-menu>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <lyte-menu-group>
                <lyte-menu-header></lyte-menu-header>
                <lyte-menu-item>
                    <lyte-menu-description></lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item>
                    <lyte-menu-description></lyte-menu-description>
                </lyte-menu-item>
            </lyte-menu-group>
            <lyte-menu-group>
                <lyte-menu-header></lyte-menu-header>
                <lyte-menu-item>
                    <lyte-menu-description></lyte-menu-description>
                </lyte-menu-item>
                <lyte-menu-item>
                    <lyte-menu-description></lyte-menu-description>
                </lyte-menu-item>
            </lyte-menu-group>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Callout Menu

Menu can be opened with callout by providing lt-prop-callout as true to lyte-menu.(Callout is not supported for contextmenu event )

```html
<lyte-button id = 'demo'>
    <template is = 'registerYield' yield-name = 'text'>
        click here
    </template>
</lyte-button>

<lyte-menu lt-prop-yield = true lt-prop-callout = true lt-prop-query = 'lyte-button#demo'>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <% someArray.forEach( function( item, index ){ %>
                <lyte-menu-item data-value = {{item.name}}>
                    <lyte-menu-label>{{item.name}} </lyte-menu-label>
                    <lyte-menu-description>{{item.key}} </lyte-menu-description>
                </lyte-menu-item>
            <% }) %>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
```html
<lyte-button class = 'someClass'>
<template is = 'registerYield' yield-name = 'text'>
Element1
</template>
</lyte-button>

<lyte-menu lt-prop-callout = true lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-query = '.someClass'></lyte-menu>
```
```javascript
// in your component JS

data() {
  return {
      someArray : prop ( 'array' : { default : [
          { "name" : "New File ...", "key" : "Ctrl + N"},
          { "name" : "Open File....", "key" : "Ctrl + O" }
      ]
    })
  }
}
```
```html
<lyte-menu>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                 <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Slide animate menu

Menu can be opened / closed with slide animation by providing lt-prop-animate as true to lyte-menu element.

```html
<lyte-button id = 'demo'>
    <template is = 'registerYield' yield-name = 'text'>
        click here
    </template>
</lyte-button>

<lyte-menu lt-prop-yield = true lt-prop-animate = true lt-prop-callout = true lt-prop-query = 'lyte-button#demo'>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <% someArray.forEach( function( item, index ){ %>
                 <lyte-menu-item data-value = {{item.name}}>
                    <lyte-menu-label>{{item.name}} </lyte-menu-label>
                    <lyte-menu-description>{{item.key}} </lyte-menu-description>
                 </lyte-menu-item>
            <% }) %>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
```html
<lyte-button class = 'someClass'>
  <template is = 'registerYield' yield-name = 'text'>
    Element1
  </template>
</lyte-button>

<lyte-menu lt-prop-callout = true lt-prop-animate = true lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-query = '.someClass'></lyte-menu>
```
```javascript
// in your component JS

data() {
  return {
      someArray : prop ( 'array' : { default : [
          { "name" : "New File ...", "key" : "Ctrl + N"},
          { "name" : "Open File....", "key" : "Ctrl + O" }
      ]
    })
  }
}
```
```html
<lyte-menu>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                 <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Sub menus

You can open a sub menu for an already opened menu. Menu having origin element matches lyte-menu-item will be considered as sub menu.

For aria keyboard navigation provide selector of sub menu element in parent origin element's lyte-sub-menu attribute.

```html
<lyte-button id = 'sub'>
    <template is = 'registerYield' yield-name = 'text'>
        click here
    </template>
</lyte-button>

<lyte-menu lt-prop-yield = true lt-prop-callout = true lt-prop-query = 'lyte-button#sub'>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body class = "someArray">
            <% someArray.forEach( function( item, index ){ %>
                <lyte-menu-item data-value = {{item.name}}>
                    <lyte-menu-label>{{item.name}} </lyte-menu-label>
                    <lyte-menu-description>{{item.key}} </lyte-menu-description>
                </lyte-menu-item>
            <% }) %>
        </lyte-menu-body>
    </template>
</lyte-menu>

<lyte-menu id = "submenu" lt-prop-position = "right" lt-prop-event = "mouseenter" lt-prop-yield = true lt-prop-callout = true lt-prop-query = '.someArray lyte-menu-item:nth-of-type(3)'>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body class = "someClass">
            <% someArray.forEach( function( item, index ){ %>
                <lyte-menu-item data-value = {{item.name}}>
                    <lyte-menu-label>{{item.name}} </lyte-menu-label>
                    <lyte-menu-description>{{item.key}} </lyte-menu-description>
                </lyte-menu-item>
            <% }) %>
        </lyte-menu-body>
    </template>
</lyte-menu>

// sub menu attribute for aria
<lyte-menu-item lyte-sub-menu = "#submenu"></lyte-menu-item>
```
```html
<lyte-button id = 'demo'>
    <template is = 'registerYield' yield-name = 'text'>
        click here
    </template>
</lyte-button>

<lyte-menu lt-prop-wrapper-class = "menuBoxClass" lt-prop-content = {{someArray}} lt-prop-user-value = 'name' lt-prop-query = '.someClass'></lyte-menu>

<lyte-menu lt-prop-position = "right" lt-prop-event = "mouseenter" lt-prop-callout = true lt-prop-position = 'right' lt-prop-content = {{someArray1}} lt-prop-user-value = 'name' lt-prop-query = '.menuBoxClass lyte-menu-item:nth-of-type(3)'></lyte-menu>
```
```javascript
// in your component JS

 data() {
    return {
      someArray : prop ( 'array' : { default : [
          { "name" : "New File ...", "key" : "Ctrl + N" },
          { "name" : "Open File....", "key" : "Ctrl + O" }
      ] } ),

      someArray1 : prop( 'array' : { default : [
          { "name" : "New File ...", "key" : "Ctrl + N" },
          { "name" : "Open File....", "key" : "Ctrl + O" }
       ] } )
    }
}
```
```html
<lyte-menu>
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                 <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
            <lyte-menu-item>
                <lyte-menu-label></lyte-menu-label>
                <lyte-menu-description></lyte-menu-description>
            </lyte-menu-item>
        </lyte-menu-body>
    </template>
</lyte-menu>
```
Accordion menu

By using the class 'lyteMenuAccordionItem', you can set the menu items like an accordion . In other words, you can render the menu items in the corresponding node with the 'lyteMenuAccordionItem' class just like the below code.

```html
<lyte-menu lt-prop-class="menuBoxClass" lt-prop-yield = true lt-prop-event = 'click' lt-prop-query = 'lyte-button#demo' >
    <template is = "registerYield" yield-name = "yield">
        <lyte-menu-body>
            <% data.forEach( function( item, index ){ %>
                <%if(!item.group){%>
                    <lyte-menu-item data-value = {{item.name}} tabindex="0">
                        <lyte-menu-label>{{item.name}} </lyte-menu-label>
                        <lyte-menu-description>{{item.key}} </lyte-menu-description>
                    </lyte-menu-item>
                <%}else{%>
                    <lyte-menu-item data-value = {{item.name}}class="lyteMenuAccordionContainer lyteMenuAccordionClosed" tabindex="0" data-associate-click=".inputCheck" >
                        <lyte-menu-label>{{item.name}}</lyte-menu-label>
                        <div class="lyteMenuAccordionItem">
                            <%item.group.forEach( function(item){%>
                                <lyte-menu-item data-value = {{item.name}} tabindex="0">
                                    <lyte-menu-label>{{item.name}}</lyte-menu-label>
                                    <lyte-menu-description>{{item.key}} </lyte-menu-description>
                                </lyte-menu-item>
                            <%})%>
                            </div>
                    </lyte-menu-item>
                <%}%>
            <% }) %>
        </lyte-menu-body>
        </template>
    </lyte-menu>
```
```javascript
// in your component

 data() {
    return {
        data : Lyte.attr ( 'array' , { default : [
            { "name" : "New File...", "key": "Ctrl + N" },
            { "name" : "Open File...", "key": "Ctrl + O" },
            { "name" : "Open Folder...", "key": "Ctrl + N" },
            { "name" : "Save" , "group" : [
                { "name" : "Save As", "key": "Ctrl + Shift + N" },
                { "name" : "Save All", "key": "" },
                { "name" : "Save Selection" },
                { "name" : "Save as New File" }
             ] },
            { "name" : "Close File", "key": "Ctrl + W" }
            ]
        })
    }
}
```

### menu - api

Properties

All properties should be prefixed with lt-prop.

yield
DataType	:	Boolean
Default	:	false
Description	:	To render your own DOM use 'yield.'
content ( data )
DataType	:	Array
Default	:	[ ] (empty array )
Description	:	Array of data available for constructing menu items. This should be in array or array of objects format. For array of objects you need to specify userValue, systemValue, description keys.
user-value
DataType	:	String
Default	:	-
Description	:	Key which specifies the main display value in the 'content'.(for array of objects)
system-value
DataType	:	String
Default	:	-
Description	:	Key which specifies the data-value in the 'content'. (for array of objects)
description
DataType	:	String
Default	:	-
Description	:	Key which specifies the sub display value to be displayed along with 'user-value' in given 'content'.(For array of objects)
query
DataType	:	String
Default	:	-
Description	:	Selector of the element for which the menu has to be binded. Menu will be binded for all the matched element. (including dynamically created elements)
event
DataType	:	String
Default	:	click
Description	:	Events to be used for opening menu.
id
DataType	:	String
Default	:	-
Description	:	Sets the id for menu body.(non yield)
class
DataType	:	String
Default	:	-
Description	:	Given class will be added for menu body.( non yielded )
position
DataType	:	String
Default	:	down
Description	:	Position of menu box around menu element.
width
DataType	:	String
Default	:	auto
Description	:	It sets the width for menu box.
height
DataType	:	String
Default	:	auto
Description	:	It sets the height for menu box.
callout
DataType	:	Boolean
Default	:	false
Description	:	With this you can create the menu with callout.
freeze
DataType	:	Boolean
Default	:	true
Description	:	With this, you can create a freeze layer while opening the menu.
query-class
DataType	:	String
Default	:	lyteMenuSelected
Description	:	Given class will be added to the query element when menu is opened.
boundary
DataType	:	Object
Default	:	{ }
Description	:	Right, left, top, bottom limits for query element while scrolling. If it exceeds menu will be closed.
scope
DataType	:	String
Default	:	-
Description	:	Selector of the element where menu is to be placed. Menu element will be placed inside scope element. The menu element will be positioned inside the dimension of the element.
show
DataType	:	Boolean
Default	:	false
Description	:	To open/close a menu via script without any events. If it sets to true, menu will be opened for the first matched query element.
prevent-inside-click
DataType	:	Boolean
Default	:	false
Description	:	Generally after clicking a non lyte-menu-item( inside lyte-menu-box ), menu will not be closed. You can alter this behaviour by this property.
animate
DataType	:	Boolean
Default	:	false
Description	:	If it sets to true, menu will be opened and closed with slide animation.
setCss
DataType	:	Boolean
Default	:	true
Description	:	If it sets to false,lyte-menu will not position menu box while opening.
wrapper-class
DataType	:	String
Default	:	-
Description	:	Given class will be added to lyte-menu-box.
wrapper-id
DataType	:	String
Default	:	-
Description	:	Given id will be added to lyte-menu-box.
bind-to-body
DataType	:	Boolean
Default	:	true
Description	:	If it set to false, menu body will be constructed while opening for the first time.
offset
DataType	:	Object
Default	:	{}
Description	:	Menu will be positioned with the given offset values from window.
aria
DataType	:	Boolean
Default	:	false
Description	:	It will set aria attributes and keyboard navigations to menu box.
aria-attributes
DataType	:	Object
Default	:	{ role : 'menu'}
Description	:	Given attributes will be set to lyte-menu-box.
Methods

You can provide the methods to lyte-menu either via script or HTML.

on-before-open
Description	:	This method is called before opening the menu.
ReturnValue	:	If this method returns false, menu will not be opened.
on-open
Description	:	This method is called when menu is opened
on-before-close
Description	:	This method is called before closing the menu.
ReturnValue	:	If this method returns false, menu will not be closed.
on-close
Description	:	This method is called after closing the menu.
on-menu-click
Description	:	This method is called whenever menu item is clicked.
before-render
Description	:	This method is invoked before rendering the menu
after-render
Description	:	This method is invoked after rendering the menu
on-navigation
Description	:	This method is invoked when the menu item is highlighted through the keyboard.
on-before-submenu-open
Description	:	This method is invoked before opening a sub menu through keyboard.
Return Value	:	Returning false will not open menu. You can return promise here
Yields

You can render your own Menu items by using yield

yield ( description )
Description	:	All the elements given inside the yield template will be rendered instead of default menu body.

---

## messagebox

### messagebox - overview

MessageBox

A message box component is used to show a quick message to the user.


NOTE : To open the messagebox you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values for all other properties you have used. This will make sure that the values passed by you are considered while opening the messagebox.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-messagebox.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Messagebox - With and Without Yield

With Yield : To use messagebox with yield you need to provide ltPropYield value as true and your message inside the yield.
Without Yield : From messagebox without yield provide ltPropYield value as false. To show some message in messagebox, pass the message in string format to the ltPropMessage property.

```html
<lyte-messagebox lt-prop-yield = true >
    <template is = "registerYield" yield-name = "messageboxYield">
        <span> Here is the text. </span>
        <a href = "#"> Some link </a>
    </template>
</lyte-messagebox>
```
```html
<lyte-messagebox lt-prop-message = "This is a messagebox without yield." > </lyte-messagebox>
```


Transition

This property will help you to define the animation style and animation duration. By default animation is fadeIn and duration is 0.2s

```javascript
var messageElement = document.getElementById("messageElem");
messageElement.ltProp('transition',{animation: "slideFromTop",duration: "0.2s"});
```
Type - success

This messagebox is used to show success message.

```html
<lyte-messagebox lt-prop-type = "success" lt-prop-message = "You have successfully created the account." > </lyte-messagebox>
```
Type - error

This messagebox is used to show error message.

```html
<lyte-messagebox lt-prop-type = "error" lt-prop-message = "Login credentials does not match." > </lyte-messagebox>
```
Type - warning

This messagebox is used to show warning message.

```html
<lyte-messagebox lt-prop-type = "warning" lt-prop-message = "You are trying to access restricted documents." > </lyte-messagebox>
```
Type - info

This messagebox is used to show information.

```html
<lyte-messagebox lt-prop-type = "info" lt-prop-message = "Hey! Its a sunny day." > </lyte-messagebox>
```
Transition

This property will help you to define the animation style and animation duration. By default animation is fadeIn and duration is 0.2s

```javascript
var messageElement = document.getElementById("messageElem");
messageElement.ltProp('transition',{animation: "slideFromTop",duration: "0.2s"});
```

### messagebox - api

Properties

All properties should be prefixed with lt-prop.

Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	success
Description	:	This specifies the type of the message box.
Show
Name	:	show( lt-prop-show )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to show the message box, false to hide.
Message
Name	:	message( lt-prop-message )
DataType	:	string
Description	:	Text to be rendered as message of the message box.
Duration
Name	:	duration( lt-prop-duration )
DataType	:	string
Default	:	2000
Description	:	Amount of time (in milliseconds) for which the message box will be displayed. 2000 is passed as a string value.
Offset
Name	:	offset( lt-prop-offset )
DataType	:	object
Description	:	You can define the message box's position using this property. Any valid css values can be given as top and left values. Along with that, we provide 'center' as a value. If top/left value is 'center', we will position the message box vertically/horizontally.
Transition
Name	:	transition( lt-prop-transition )
DataType	:	string
Default	:	fadeIn
Description	:	This object specifies the animation to be used. This consists of animation property whose value can either be 'fadeIn' or 'slideFromTop'. example : ltPropTransition = {'animation':'slideFromTop'}
Close Manually
Name	:	CloseManually(lt-prop-close-manually)
DataType	:	boolean
Default	:	false
Description	:	This property gives an option to the user to close the message box manually. This property does not takes duration into account.
Show Closebutton
Name	:	ShowCloseButton(lt-prop-show-close-button)
DataType	:	boolean
Default	:	true
Description	:	This property helps to display the close icon. If set false, the close icon does not gets displayed.
Yield
Name	:	yield( lt-prop-yield )
DataType	:	boolean
Default	:	false
Description	:	Set to true to provide a message for the messagebox.
Class
Name	:	class( lt-prop-class )
DataType	:	string
Description	:	It acts as a wrapper class for the messagebox, using which the messagebox can be customized.
Methods

The following are the methods for lyte-messagebox .

on-close
Name	:	on-close
Description	:	It is called, whenever the message box is closed. Message Box can be closed on click of close button or once the time set by duration property completes.

---

## modal

### modal - overview

Modal

A modal an UI component, helps to display content in an overlayed block, leaving the main view of a site undisturbed.


NOTE : To open the modal you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values for all other properties you have used. This will make sure that the values passed by you are considered while opening the modal.

NOTE : If you are using ltPropReRenderModal, then set this property value from the script while doing some action or from inside the methods.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-modal.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Description

Simple modal component looks like below. You can define your own modal's header, content, and footer using custom tags provided. Otherwise, you can give your own modal content.

```html
<lyte-modal>
    <template is = "registerYield" yield-name = "modal">
        <lyte-modal-header> Create Profile </lyte-modal-header>
        <lyte-modal-content>
            <table cellpadding="0" cellspacing="0" class="w100per modalTable">
                <tbody>
                    <tr>
                        <td class="pB10 pR30 alignRight"> Profile name </td>
                        <td class="pB10 mymodalinput">
                            <lyte-input lt-prop-type="text" lt-prop-placeholder="" lt-prop-appearance="box"> </lyte-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="pB10 pR30 alignRight"> Clone profile </td>
                        <td class="pB10 mymodaldropdown">
                            <lyte-dropdown lt-prop-freeze="false" lt-prop-tabindex="2">
                                <template is="registerYield" yield-name="yield">
                                    <lyte-drop-box>
                                        <span class="lyteArrow"> </span>
                                        <lyte-drop-body>
                                            <lyte-drop-item data-value="0"> Administrator </lyte-drop-item>
                                            <lyte-drop-item data-value="1"> Standard </lyte-drop-item>
                                        </lyte-drop-body>
                                    </lyte-drop-box>
                                </template>
                            </lyte-dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td class="pR30 alignRight vat pT7"> Description </td>
                        <td class="mymodaltextarea">
                            <lyte-input lt-prop-type="textarea" lt-prop-appearance="box" lt-prop-id="lyteinput" lt-prop-rows="2" lt-prop-cols="60" lt-prop-placeholder="Description" lt-prop-text-area-resize = '{"horizontal" : false, "vertical" : true }'> </lyte-input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </lyte-modal-content>
        <lyte-modal-footer class = "right">
            <lyte-button lt-prop-appearance = "primary" onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Create </template>
            </lyte-button>
            <lyte-button onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Cancel </template>
            </lyte-button>
        </lyte-modal-footer>
    </template>
</lyte-modal>
```
```html
<lyte-modal>
    <template is = "registerYield" yield-name = "modal">
        <h1> Give us your feedback </h1>
        <section>
            <div> Feedback : </div>
            <div> <textarea style = "width:100%;height:100px"> </textarea> </div>
        </section>
        <section>
            <lyte-button lt-prop-appearance = "primary" onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Submit </template>
            </lyte-button>
            <lyte-button onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Cancel </template>
            </lyte-button>
        </section>
    </template>
</lyte-modal>
```


Transition

This property helps you to define the animation style and animation duration. By default animation is set to slide from top and duration is 0.5s.
The options provided for animation property are -

slideFromTop : By setting this value, the modal when opened, slides down from the top of the window and gets fixed to a position provided by the user through ltPropOffset property. And when closed, the modal starts sliding upwards from that position and disappears.
slideFromBottom : By setting this value, the modal when opened, slides up from the bottom of the window and gets fixed to a position provided by the user through ltPropOffset property. Similarly when closed, the modal starts sliding downwards and disappears.
slideFromLeft : By setting this value, the modal when opened, appears sliding from the left side of the window and gets fixed to a position provided by the user through ltPropOffset property. Similarly when closed, the modal starts sliding sidewise towards left and disappears.
slideFromRight : By setting this value, the modal when opened, appears sliding from the right side of the window and gets fixed to a position provided by the user through ltPropOffset property.Similarly when closed, the modal starts sliding sidewise towards right and disappears.
fadeIn : By setting this value, the modal when opened, fades in at the position provided by the user through ltPropOffset property. Similarly when closed, the modal fades out and disappears.
zoom : By setting this value, the modal opens with zoom in animation and closes, with zoom out animation. If originElement is provided then the animation will happen based on the originElement's position. originElement is optional.
```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("transition",{"animation":"slideFromRight","duration":"0.6"});

For zoom with originElement -
modalElement.ltProp("transition",{"animation":"zoom","duration":"0.6","originElement":"#selector"});

For zoom without originElement -
modalElement.ltProp("transition",{"animation":"zoom","duration":"0.6"});
```
Freeze

Setting freeze false, will open a modaless modal. Dimmer will not be applied and backround view will be accessible. By default freeze will be true.
Note : By default non-freezed modal will have inner scroll in the content area, if the modal's height/width exceeds the document's height/width.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("freeze",true);
modalElement.ltProp("freeze",false);
```
Offset

Offset property will help you to position the modal relative to the body. You can specify top and left offset for the modal using this property. "%" and "px" units are supported and you can also give 'center' if you want to position it in the center.
NOTE: If Right and Bottom values present, it will override Left and Top values.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("offset",{"top":"20px","left":"center"});
```
Draggable - Scrollable

Check the below checkboxes to make the modal draggable or scrollable.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("draggable",true);
modalElement.ltProp("scrollable",true);
```
Set Content Height

ltPropSetContentHeight is a boolean property which determines if the content of the modal will have some fixed height or not. This property is helpful when you have set some height for the modal component. Toggle the below true/false value to check the difference.

```html
<lyte-modal lt-prop-set-content-height="true" ></lyte-modal>
```
Overlap Modal

ltPropOverlapModal is a boolean property that determines if the incoming modal will be rendered sidewise or it will overlap the existing modal.

```html
<lyte-modal lt-prop-overlap-modal="true" ></lyte-modal>
```

### modal - api

Properties

All properties should be prefixed with lt-prop.

Show
Name	:	show( lt-prop-show )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to show the modal, false to close.
Freeze
Name	:	freeze( lt-prop-freeze )
DataType	:	boolean
Default	:	true
Description	:	You can choose to freeze or not to freeze the background using this property. When you set it to false, background view will be accessible to the user.
Show Close Button
Name	:	show-close-button( lt-prop-show-close-button )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to display the close icon on the modal.
Close On Escape
Name	:	close-on-escape( lt-prop-close-on-escape )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to close the modal on escape keypress.
Transition
Name	:	transition( lt-prop-transition )
DataType	:	object
Default	:	{animation:"slideFromTop",duration:"0.5"}
Description	:	Transition property helps you to define the animation and animation's duration. Duration should be given in seconds.
Offset
Name	:	offset( lt-prop-offset )
DataType	:	object
Default	:	{top:"10px",left:"center"}
Description	:	You can define the modal's position using this property. Any valid css values can be given as top and left values. Along with that, sLyte provides 'center' as a value. If top/left value is 'center', it will position the modal vertically/horizontally.
Dimmer
Name	:	dimmer( lt-prop-dimmer )
DataType	:	object
Default	:	{"color":"#000","opacity":"0.4"}
Description	:	This property helps you to set the dimmer color and opacity for the freeze layer.
Draggable
Name	:	draggable( lt-prop-draggable )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to make the modal draggable.
Allow Multiple
Name	:	allow-multiple( lt-prop-allow-multiple )
DataType	:	boolean
Default	:	false
Description	:	This property helps you to open any other modal/alert/popover over them. Setting this true will prevent closing of modal on opening other modal.
Scrollable
Name	:	scrollable( lt-prop-scrollable )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to make the modal content scrollable. By default modal will be of its full height, so it may exceed the viewport. Setting scrollable true will define a max-height for the modal content with inner scroll, hence it prevents the modal's height exceeding the viewport.
Max Height
Name	:	max-height( lt-prop-max-height )
DataType	:	string
Default	:	70% of body
Description	:	This property helps you to define max-height of the modal.
Max Width
Name	:	max-width( lt-prop-max-width )
DataType	:	string
Default	:	50% of body
Description	:	This property helps you to define max-width of the modal.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	40% of the body
Description	:	This property helps you to define width of the modal.
Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	auto
Description	:	This property helps you to define height of the modal.
Wrapper Class
Name	:	wrapper-class( lt-prop-wrapper-class )
DataType	:	string
Description	:	This property sets the given class to wrapper div of modal. This helps you to identify your modal and also to make style changes to that.
Bind To Body
Name	:	bind-to-body( lt-prop-bind-to-body )
DataType	:	boolean
Default	:	false
Description	:	If set to true, renders the modal while loading the content of the page else the modal will be rendered when it's show value is set to true. Users can also set this value to false to remove the rendered modal from the DOM. NOTE : This value is required to be set from script when doing some action or it can be set using the methods provided by modal like on-close or on-before-close. Setting this value from html won't do the changes as expected.
Re Render Modal
Name	:	re-render-modal( lt-prop-re-render-modal )
DataType	:	boolean
Default	:	false
Description	:	Set the value to true to re-render the modal. To display the modal before rerendering, you would provide ltprop show as true. But before doing so, make sure lt-prop-rerender is set as true. NOTE : This value is required to be set from script when doing some action or it can be set using the methods provided by modal like on-close or on-before-close. Setting this value from html won't do the changes as expected.
Overlay Close
Name	:	overlay-close( lt-prop-overlay-close )
DataType	:	boolean
Default	:	false
Description	:	Set the value to true to close the modal on clicking outside the modal.
Aria
Name	:	aria( lt-prop-aria )
DataType	:	boolean
Default	:	false
Description	:	Setting this true indicates that aria properties are provided and the same will be added to the modal element.
Aria Attributes
Name	:	aria-attributes( lt-prop-aria-attributes )
DataType	:	object
Description	:	The aria properties to be provided to the modal element are provided using this property.
Prevent Focus
Name	:	prevent-focus( lt-prop-prevent-focus )
DataType	:	boolean
Default	:	false
Description	:	If set to true, it will prevent intial focus on elements inside the modal that is set by the modal. It is useful in those scenarios where any element rendered inside the modal have ltPropAutoFocus as true.
Set Content Height
Name	:	set-content-height( lt-prop-set-content-height )
DataType	:	boolean
Default	:	false
Description	:	Set this property to true if you want the lyte-modal-content element to take some fixed height so that the footer is properly positioned at the bottom of the modal or else the footer element will move up after the content and there might be some blank space visible after the footer.
Close Duration
Name	:	close-duration( lt-prop-close-duration )
DataType	:	number
Default	:	undefined
Description	:	If some number is set for this property then, it will be considered as the duration for closing the popover.
Overlap Modal
Name	:	overlap-modal( lt-prop-overlap-modal )
DataType	:	boolean
Default	:	true
Description	:	This property determines whether the incoming modal will be rendered over the existing modal or will appear sidewise. Set this property to false if you want to render the modal sidewise.
Ignoreinlinedirection
Name	:	ltPropIgnoreInlineDirection
DataType	:	boolean
Default	:	false
Description	:	This property helps to position the modal. Even on changing the direction(ltr,rtr) of the modal, the position remains unchanged.
Allowcontainment
Name	:	ltPropAllowContainment
DataType	:	boolean
Default	:	false
Description	:	This property makes the modal stay within the containment while using the draggable property of the modal.
Renderhidden
Name	:	ltPropRenderHidden
DataType	:	boolean
Default	:	false
Description	:	On setting this property along with bindtobody property as true, the wormhole in DOM get a 'display-none' class added to it.
Ignorezindex
Name	:	ltPropIgnoreZindex
DataType	:	boolean
Default	:	false
Description	:	On setting this property to a modal, then the new popover rendering above the modal does not considers the Zindex of the current modal.
Padding
Name	:	ltPropPadding
DataType	:	string
Default	:	
Description	:	With this property, you can set the padding of the modal element.
Methods

The following are the methods for lyte-modal .

on-before-show
Name	:	on-before-show
Description	:	This will be executed before the modal is shown. Returning false from this callback will prevent modal from showing. By default, returned value is true.
on-show
Name	:	on-show
Description	:	This will be executed after the modal is shown.
on-before-close
Name	:	on-before-close
Description	:	This will be executed before the modal close. Returning false from this callback will prevent modal from closing. By default, returned value is true.
on-close
Name	:	on-close
Description	:	This will be executed once the modal is closed.
on-resize
Name	:	on-resize
Description	:	This will be executed when the document view containing the modal has been resized.
on-drag-start
Name	:	on-drag-start
Description	:	This will be executed when you are starting to drag the modal.
on-drag-stop
Name	:	on-drag-stop
Description	:	This will be executed when you are stop dragging the modal.
on-transition-end
Name	:	on-transition-end
Description	:	This will be executed at the end of the transition.
Utility Functions

You can call this function anywhere after the lyte-modal is rendered.

alignModal
Description	:	The left and top positions of the modal is calculated and assigned when the modal is opened based on it's content at that time. Hence, after the modal is opened if its content is changed then the modal's position won't change. So if you want to change the modal's position based on your updated content then call this function after your content is updated.
calculateOffset
Description	:	The height and width of the modal is calculated while opening the modal based on its content at that time. So after opening the modal if the content is changed then there might not be any changes in the modal. Use this function if you want the modal reflect the changes in the content on its height and width too. Call this function after your content is updated.
trapFocus
Description	:	It will trap the focus inside the modal.
reflectTransitionChange
Description	:	This utility function is used to trigger the computation changes after the ltPropTransition property is changed. Suppose you want to open the modal by using animation slideFromRight and close the modal using zoom animation. This function is helpful in such scenario. NOTE : This function should be triggered after the modal is opened and much before the ltPropShow of the modal is set to false for closing the modal as the internal computation will take time to perform the changes. So a suitable place for using this function is inside onShow of the modal by wrapping it inside a setTimeout so that the opening animation of the modal is not affected.
Events

The following are the events of lyte-modal.

BeforeOpen
Description	:	This event is triggered before opening the modal.
Opened
Description	:	This event is triggered after opening the modal.
ModalClosed
Description	:	This event is triggered after closing the modal.
BeforeClose
Description	:	This event is triggered before closing the modal.

Modal

A modal an UI component, helps to display content in an overlayed block, leaving the main view of a site undisturbed.


NOTE : To open the modal you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values for all other properties you have used. This will make sure that the values passed by you are considered while opening the modal.

NOTE : If you are using ltPropReRenderModal, then set this property value from the script while doing some action or from inside the methods.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-modal.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Description

Simple modal component looks like below. You can define your own modal's header, content, and footer using custom tags provided. Otherwise, you can give your own modal content.

```html
<lyte-modal>
    <template is = "registerYield" yield-name = "modal">
        <lyte-modal-header> Create Profile </lyte-modal-header>
        <lyte-modal-content>
            <table cellpadding="0" cellspacing="0" class="w100per modalTable">
                <tbody>
                    <tr>
                        <td class="pB10 pR30 alignRight"> Profile name </td>
                        <td class="pB10 mymodalinput">
                            <lyte-input lt-prop-type="text" lt-prop-placeholder="" lt-prop-appearance="box"> </lyte-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="pB10 pR30 alignRight"> Clone profile </td>
                        <td class="pB10 mymodaldropdown">
                            <lyte-dropdown lt-prop-freeze="false" lt-prop-tabindex="2">
                                <template is="registerYield" yield-name="yield">
                                    <lyte-drop-box>
                                        <span class="lyteArrow"> </span>
                                        <lyte-drop-body>
                                            <lyte-drop-item data-value="0"> Administrator </lyte-drop-item>
                                            <lyte-drop-item data-value="1"> Standard </lyte-drop-item>
                                        </lyte-drop-body>
                                    </lyte-drop-box>
                                </template>
                            </lyte-dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td class="pR30 alignRight vat pT7"> Description </td>
                        <td class="mymodaltextarea">
                            <lyte-input lt-prop-type="textarea" lt-prop-appearance="box" lt-prop-id="lyteinput" lt-prop-rows="2" lt-prop-cols="60" lt-prop-placeholder="Description" lt-prop-text-area-resize = '{"horizontal" : false, "vertical" : true }'> </lyte-input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </lyte-modal-content>
        <lyte-modal-footer class = "right">
            <lyte-button lt-prop-appearance = "primary" onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Create </template>
            </lyte-button>
            <lyte-button onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Cancel </template>
            </lyte-button>
        </lyte-modal-footer>
    </template>
</lyte-modal>
```
```html
<lyte-modal>
    <template is = "registerYield" yield-name = "modal">
        <h1> Give us your feedback </h1>
        <section>
            <div> Feedback : </div>
            <div> <textarea style = "width:100%;height:100px"> </textarea> </div>
        </section>
        <section>
            <lyte-button lt-prop-appearance = "primary" onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Submit </template>
            </lyte-button>
            <lyte-button onclick = {{action("closeModal")}}>
                <template is = "registerYield" yield-name = "text"> Cancel </template>
            </lyte-button>
        </section>
    </template>
</lyte-modal>
```


Transition

This property helps you to define the animation style and animation duration. By default animation is set to slide from top and duration is 0.5s.
The options provided for animation property are -

slideFromTop : By setting this value, the modal when opened, slides down from the top of the window and gets fixed to a position provided by the user through ltPropOffset property. And when closed, the modal starts sliding upwards from that position and disappears.
slideFromBottom : By setting this value, the modal when opened, slides up from the bottom of the window and gets fixed to a position provided by the user through ltPropOffset property. Similarly when closed, the modal starts sliding downwards and disappears.
slideFromLeft : By setting this value, the modal when opened, appears sliding from the left side of the window and gets fixed to a position provided by the user through ltPropOffset property. Similarly when closed, the modal starts sliding sidewise towards left and disappears.
slideFromRight : By setting this value, the modal when opened, appears sliding from the right side of the window and gets fixed to a position provided by the user through ltPropOffset property.Similarly when closed, the modal starts sliding sidewise towards right and disappears.
fadeIn : By setting this value, the modal when opened, fades in at the position provided by the user through ltPropOffset property. Similarly when closed, the modal fades out and disappears.
zoom : By setting this value, the modal opens with zoom in animation and closes, with zoom out animation. If originElement is provided then the animation will happen based on the originElement's position. originElement is optional.
```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("transition",{"animation":"slideFromRight","duration":"0.6"});

For zoom with originElement -
modalElement.ltProp("transition",{"animation":"zoom","duration":"0.6","originElement":"#selector"});

For zoom without originElement -
modalElement.ltProp("transition",{"animation":"zoom","duration":"0.6"});
```
Freeze

Setting freeze false, will open a modaless modal. Dimmer will not be applied and backround view will be accessible. By default freeze will be true.
Note : By default non-freezed modal will have inner scroll in the content area, if the modal's height/width exceeds the document's height/width.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("freeze",true);
modalElement.ltProp("freeze",false);
```
Offset

Offset property will help you to position the modal relative to the body. You can specify top and left offset for the modal using this property. "%" and "px" units are supported and you can also give 'center' if you want to position it in the center.
NOTE: If Right and Bottom values present, it will override Left and Top values.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("offset",{"top":"20px","left":"center"});
```
Draggable - Scrollable

Check the below checkboxes to make the modal draggable or scrollable.

```javascript
var modalElement = document.getElementById("modalElem");
modalElement.ltProp("draggable",true);
modalElement.ltProp("scrollable",true);
```
Set Content Height

ltPropSetContentHeight is a boolean property which determines if the content of the modal will have some fixed height or not. This property is helpful when you have set some height for the modal component. Toggle the below true/false value to check the difference.

```html
<lyte-modal lt-prop-set-content-height="true" ></lyte-modal>
```
Overlap Modal

ltPropOverlapModal is a boolean property that determines if the incoming modal will be rendered sidewise or it will overlap the existing modal.

```html
<lyte-modal lt-prop-overlap-modal="true" ></lyte-modal>
```

---

## nav

### nav - overview

Nav

This is similar to the nav tag of HTML. This UI component creates a group of navigation links.

This is used in conjuction with menus to create a horizontal nav bar. Vertical nav bars are used as side panels to navigate out to different links.

Dependencies
```javascript
<-- individual components -->
<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-nav.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Horizontal Nav

You can create a horizontal nav by simply passing in an array of objects along with the lt-prop-user-value and the lt-prop-system-value . The lt-prop-user-value represents the key in the object that is going to be used as the display label whereas the lt-prop-system-value represents the key in the object which represents the data-value attribute. Here's an example.

```html
<lyte-nav lt-prop-items={{navItems}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-nav>
```
```javascript
[ {
    "name": "Module 1",
    "value": "mod1"
}, {
    "name": "Module 2",
    "value": "mod2"
}, {
    "name": "Module 3",
    "value": "mod3"
}, {
    "name": "Module 4",
    "value": "mod4"
} ]
```
Collapsible Nav

Navs are also collapsible. Simply setting lt-prop-type to collapse, collapses the nav into a menu when the width of the rendered items goes beyond a percentage of the width of the lyte-nav tag. This percentage is given by the lt-prop-max-width attribute.

```html
<lyte-nav lt-prop-max-width="80%" lt-prop-type="collapse" lt-prop-items={{navItems}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-nav>
```
```javascript
[ {
    "name": "Module 1",
    "value": "mod1"
}, {
    "name": "Module 2",
    "value": "mod2"
}, {
    "name": "Module 3",
    "value": "mod3"
}, {
    "name": "Module 4",
    "value": "mod4"
} ]
```

It is also possible to set a selected value to the nav using the lt-prop-selected attribute. An example is shown below

```html
<lyte-nav lt-prop-selected={{selected}} lt-prop-max-width="80%" lt-prop-type="collapse" lt-prop-items={{navItems}} lt-prop-user-value="name" lt-prop-system-value="value"></lyte-nav>
```
```javascript
navItems: [ {
    "name": "Module 1",
    "value": "mod1"
}, {
    "name": "Module 2",
    "value": "mod2"
}, {
    "name": "Module 3",
    "value": "mod3"
}, {
    "name": "Module 4",
    "value": "mod4"
} ]

selected: "mod1"
```
Completely Yielded Horizontal Nav

The horizontal nav can also be yielded. This includes the menu that is opened when the kebab icon is clicked. Set the lt-prop-nav-yield to true and the lt-prop-menu-yield to true .

```html
<lyte-nav lt-prop-type= "collapse" lt-prop-user-value="name" lt-prop-system-value="value" lt-prop-nav-yield="true" lt-prop-menu-yield="true" lt-prop-items={{navItems}} lt-prop-max-width="80%">
    <template is="registerYield" yield-name="nav">
        <% items.forEach(function(item,index){ %>
            <lyte-nav-item data-value={{item.value}}>{{item.name}}</lyte-nav-item>
        <% }) %>
    </template>
    <template is="registerYield" yield-name="menu">
        <lyte-menu-body>
            <% items.forEach(function(item,index){ %>
                <lyte-menu-item data-value={{item.value}}>{{item.name}}</lyte-menu-item>
            <% }) %>
        </lyte-menu-body>
    </template>
</lyte-nav>
```
```javascript
[ {
    "name": "Module 1",
    "value": "mod1"
}, {
    "name": "Module 2",
    "value": "mod2"
}, {
    "name": "Module 3",
    "value": "mod3"
}, {
    "name": "Module 4",
    "value": "mod4"
} ]
```
Vertical Nav

You can create a vertical nav by setting the lt-prop-alignment attribute to vertical . The following example demonstrates a vertical nav. The vertical nav renders with two arrows at the top and bottom. The nav is scrolled up or down by moving your mouse over them or by normally scrolling through your mouse wheel. Similar to the horizontal nav, one of the items of the vertical nav can be selected by setting the selected attribute to true in the lyte-nav-item tag. This scrolls the item into view.

```html
<lyte-nav lt-prop-alignment="vertical">
    <lyte-nav-item>Home</lyte-nav-item>
    <lyte-nav-item>Activities</lyte-nav-item>
    <lyte-nav-item>Feeds</lyte-nav-item>
    <lyte-nav-item>Leads</lyte-nav-item>
    <lyte-nav-item>Contacts</lyte-nav-item>
    <lyte-nav-item selected="true">Visits</lyte-nav-item>
    <lyte-nav-item>SalesInBox</lyte-nav-item>
    <lyte-nav-item>Documents</lyte-nav-item>
    <lyte-nav-item>Deals</lyte-nav-item>
    <lyte-nav-item>Products</lyte-nav-item>
    <lyte-nav-item>Quotes</lyte-nav-item>
    <lyte-nav-item>Solutions</lyte-nav-item>
    <lyte-nav-item>Campaigns</lyte-nav-item>
</lyte-nav>
```
Custom Nav

You can create your custom navs by simply changing the CSS of custom elements. For vertical navs, you can create your own arrows by using the lyte-arrow tag. You have to set them as the first and last child of the lyte-nav component.

```html
<lyte-nav class="cyanNav">
    <lyte-nav-item selected="true">Overview</lyte-nav-item>
    <lyte-nav-item>Products</lyte-nav-item>
    <lyte-nav-item>Get started</lyte-nav-item>
    <lyte-nav-item>Sign in</lyte-nav-item>
    <lyte-nav-item style="margin-right: auto;">Support</lyte-nav-item>
    <lyte-dropdown class="noAnim" style="float:right">
        <template is="registerYield" yield-name="yield">
            <lyte-drop-button class="dropButtonClass">
                <span class="lyteMarginRight">Settings</span>
                <i class="fas fa-arrow-down"></i>
            </lyte-drop-button>
            <lyte-drop-box class="cyanNavBody">
                <lyte-drop-body>
                    <lyte-drop-item data-value="option0">Get notifications</lyte-drop-item>
                    <lyte-drop-item data-value="option1">Themes</lyte-drop-item>
                    <lyte-drop-item data-value="option2">Plugins</lyte-drop-item>
                    <lyte-drop-item data-value="option3">Favourites</lyte-drop-item>
                    <lyte-drop-item data-value="option4">Exit</lyte-drop-item>
                </lyte-drop-body>
            </lyte-drop-box>
        </template>
    </lyte-dropdown>
</lyte-nav>
```
```html
<lyte-nav class="greenNav">
    <lyte-nav-item selected="true">Overview</lyte-nav-item>
    <lyte-nav-item>Products</lyte-nav-item>
    <lyte-nav-item>Get started</lyte-nav-item>
    <lyte-nav-item>Sign in</lyte-nav-item>
    <lyte-nav-item style="margin-right: auto;">Support</lyte-nav-item>
    <lyte-dropdown class="noAnim" style="float:right">
        <template is="registerYield" yield-name="yield">
            <lyte-drop-button class="dropButtonClass">
                <span class="lyteMarginRight">Settings</span>
                <i class="fas fa-arrow-down"></i>
            </lyte-drop-button>
            <lyte-drop-box class="greenNavBody">
                <lyte-drop-body>
                    <lyte-drop-item data-value="option0">Get notifications</lyte-drop-item>
                    <lyte-drop-item data-value="option1">Themes</lyte-drop-item>
                    <lyte-drop-item data-value="option2">Plugins</lyte-drop-item>
                    <lyte-drop-item data-value="option3">Favourites</lyte-drop-item>
                    <lyte-drop-item data-value="option4">Exit</lyte-drop-item>
                </lyte-drop-body>
            </lyte-drop-box>
        </template>
    </lyte-dropdown>
</lyte-nav>
```
```html
<lyte-nav class="blackNav">
    <lyte-nav-item selected="true">Overview</lyte-nav-item>
    <lyte-nav-item>Products</lyte-nav-item>
    <lyte-nav-item>Get started</lyte-nav-item>
    <lyte-nav-item>Sign in</lyte-nav-item>
    <lyte-nav-item style="margin-right: auto;">Support</lyte-nav-item>
    <lyte-dropdown class="noAnim" style="float:right">
        <template is="registerYield" yield-name="yield">
            <lyte-drop-button class="dropButtonClass">
                <span class="lyteMarginRight">Settings</span>
                <i class="fas fa-arrow-down"></i>
            </lyte-drop-button>
            <lyte-drop-box class="blackNavBody">
                <lyte-drop-body>
                    <lyte-drop-item data-value="option0">Get notifications</lyte-drop-item>
                    <lyte-drop-item data-value="option1">Themes</lyte-drop-item>
                    <lyte-drop-item data-value="option2">Plugins</lyte-drop-item>
                    <lyte-drop-item data-value="option3">Favourites</lyte-drop-item>
                    <lyte-drop-item data-value="option4">Exit</lyte-drop-item>
                </lyte-drop-body>
            </lyte-drop-box>
        </template>
    </lyte-dropdown>
</lyte-nav>
```
```html
<lyte-nav lt-prop-click="active" class="musicNav" lt-prop-alignment="vertical">
    <lyte-arrow>
        <i class="newArrowUp"></i>
    </lyte-arrow>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicPlayIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicPauseIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicStopIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicVolumeUpIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicVolumeDown dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicFastForwardIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite musicRewindIcon dIB"></span></lyte-nav-item>
    <lyte-nav-item class="newstyleMusic"><span class="docSvgSprite headPhonesIcon dIB"></span></lyte-nav-item>
    <lyte-arrow>
        <i class="newArrowDown"></i>
    </lyte-arrow>
</lyte-nav>
```
```html
<lyte-nav lt-prop-click="active" class="blueNav" lt-prop-alignment="vertical">
    <lyte-arrow>
        <i class="newArrowUp"></i>
    </lyte-arrow>
    <lyte-nav-item class="newstyle">Home</lyte-nav-item>
    <lyte-nav-item class="newstyle">Activities</lyte-nav-item>
    <lyte-nav-item class="newstyle">Feeds</lyte-nav-item>
    <lyte-nav-item class="newstyle">Leads</lyte-nav-item>
    <lyte-nav-item class="newstyle">Contacts</lyte-nav-item>
    <lyte-nav-item selected="true" class="newstyle">Visits</lyte-nav-item>
    <lyte-nav-item class="newstyle">SalesInBox</lyte-nav-item>
    <lyte-nav-item class="newstyle">Documents</lyte-nav-item>
    <lyte-nav-item class="newstyle">Deals</lyte-nav-item>
    <lyte-nav-item class="newstyle">Products</lyte-nav-item>
    <lyte-nav-item class="newstyle">Quotes</lyte-nav-item>
    <lyte-nav-item class="newstyle">Solutions</lyte-nav-item>
    <lyte-nav-item class="newstyle">Campaigns</lyte-nav-item>
    <lyte-arrow>
        <i class="newArrowDown"></i>
    </lyte-arrow>
</lyte-nav>
```

### nav - api

Properties

All properties must be prefixed with lt-prop.

menu(lt-prop-menu)
Description	:	This is an object which can be used to set all the properties of menu. The key is the menu attribute and the value is the value of the attribute. You are not allowed to set lt-prop-query of the menu.
Datatype	:	object
Default	:	{"query": ".lyteNavIconContainer", "yield":"true"}
nav-yield(lt-prop-nav-yield)
Description	:	This is used to yield the nav part of the lyte-nav component.
Datatype	:	boolean
Default	:	false
menu-yield(lt-prop-menu-yield)
Description	:	This is used to yield the menu part of the lyte-nav component.
Datatype	:	boolean
Default	:	false
items(lt-prop-items)
Description	:	The data to be rendered as the nav items.
Datatype	:	array
Default	:	[]
user-value(lt-prop-user-value)
Description	:	The key in the object to be used as the display label.
Datatype	:	string
Default	:	
system-value(lt-prop-system-value)
Description	:	The key in the object to be used as the data-value attribute.
Datatype	:	string
Default	:	
max-width(lt-prop-max-width)
Description	:	Percentage of the lyte-nav that can be occupied by the nav items. Beyond this, it is collapsed into a menu. It should be a percentage.
Datatype	:	String
Default	:	90%
type(lt-prop-type)
Description	:	This is used to determine whether the nav should collapse or not.
Datatype	:	String
Default	:	
nav-menu-class(lt-prop-nav-menu-class)
Description	:	This sets the class for the menu body.
Datatype	:	String
Default	:	lyteNavMenuClass
menu-icon(lt-prop-menu-icon)
Description	:	This is used to set the class of the kebab menu icon.
Datatype	:	String
Default	:	lyteNavKebabMenu
container-class(lt-prop-menu-icon)
Description	:	This is used to set the class of the container to which the dropdown menu(more options) is bound. So setting this also sets the lt-prop-query of the lyte-menu.
Datatype	:	String
Default	:	lyteNavIconContainer
click(lt-prop-click)
Description	:	Set a class to the lyte-nav-item when they are clicked.
Datatype	:	string
Default	:	lyteNavActive
alignment(lt-prop-alignment)
Description	:	This decides whether the nav should align horizontally or vertically.
Datatype	:	string
Default	:	horizontal
arrow(lt-prop-arrow)
Description	:	Set this to false to not render arrows in vertical lyte-nav.
Datatype	:	boolean
Default	:	true
selected(lt-prop-selected)
Description	:	Only available in collapsable nav. This represents the current selected item. It is the data-value of that particular item that is selected.
Datatype	:	string
Default	:	
container-id(lt-prop-container-id)
Description	:	This is used to set the id of the container to which the dropdown menu(more options) is bound. So setting this also sets the lt-prop-query of the lyte-menu.
Datatype	:	String
Default	:	
Methods

The following are the methods of lyte-nav:

on-item-selected
Description	:	Fired when one of the lyte-nav-item is clicked. It is also fired when you set the selected attribute of one of the lyte-nav-items to true. It is also fired initially when one of the items is selected.
after-render(after-render)
Description	:	Fired when the lyte-nav component has rendered. You should avoid getting the dimensions of the nav in the didConnect of the parent component and instead use this method to get its dimensions. The nav is not completely rendered in the didConnect of the parent component.
on-menu-click(on-menu-click)
Description	:	Fired when a collapsable menu item is selected.
on-before-open(on-before-open)
Description	:	Fired just before the menu is about to be opened.
on-open(on-open)
Description	:	Fired when the menu is opened.
on-before-close(on-before-close)
Description	:	Fired when the menu is about to be closed.
on-close(on-close)
Description	:	Fired when the menu is closed.
before-menu-render(before-menu-render)
Description	:	Fired just before the menu is rendered.
after-menu-render(after-menu-render)
Description	:	Fired after the menu is rendered.
Utilities of lyte-nav

The following are the utils of lyte-nav:

.recalculate()
Description	:	Used to recalculate the layout of the collapsable nav.(deciding the nav items and menu items)

---

## navigator

### navigator - overview

Navigator

A navigator, a prominent UI component, is used to perform navigation on given list of records.

You can provide methods for each button. If methods are not provided corresponding buttons will not be displayed.

Each button calls a configured function on click action.

By default lyte-navigator shows 10 records per page. You can alter it by using lt-prop-perpage.

```javascript
<-- individual components -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-navigator.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Default Navigator

With Yield : To use navigator with yield, you need to provide ltPropYield value as true. It is mandatory to use appropiate class to differentiate icons for home, prev, next and end. You also need to provide {{startRecord}} for starting record value and {{endRecord}} for ending record value.
Without Yield : To use navigator without yield, provide ltPropYield value as false. While navigating lt-prop-value will not change. You need to set your desired ltPropValue in the callbacks.

```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} lt-prop-yield=true lt-prop-value="0" lt-prop-records="12" lt-prop-perpage="10">
      <template is = "registerYield" yield-name = "navigatorYield">
        <div class="lyteDoubleBack"> Home </div>
        <div class="lyteSingleBack"> Prev </div>
        <div> {{startRecord}} to {{endRecord}} </div>
        <div class="lyteSingleFront"> Next </div>
        <div class="lyteDoubleFront"> End </div>
     </template>
</lyte-navigator>
```
```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} lt-prop-yield=false lt-prop-value="0" lt-prop-records="12" lt-prop-perpage="10">
</lyte-navigator>
```



Here list of rows inside the lyte-table are controlled by navigator. Select perpage record value from the dropdown.

Simple Navigator

This is a paginator with ltPropType simple.
With Yield : To use navigator with yield you need to provide ltPropYield value as true. Use appropiate class to differentiate icons for home, prev, next, end and use paginationRange .
Without Yield : To use navigator without yield provide ltPropYield value as false.

```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} lt-prop-yield=true lt-prop-value="0" lt-prop-records="12" lt-prop-perpage="10" lt-prop-type="simple">
    <template is = "registerYield" yield-name = "navigatorYield">
        <div class="lyteDoubleBack"> Home </div>
        <div class="lyteSingleBack"> Prev </div>
        <% paginationRange.forEach(function(column, index){ %>
            <div data-value={{column}}> {{column}} </div>
        <% }) %>
        <div class="lyteSingleFront"> Next </div>
        <div class="lyteDoubleFront"> End </div>
    </template>
</lyte-navigator>
```
```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} on-select = {{method('select')}} lt-prop-value="0" lt-prop-type="simple" lt-prop-records="12" lt-prop-perpage="10" lt-prop-yield=false>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
</lyte-navigator>
```
Border Navigator

This is a paginator with type border ltPropType ="border".

```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} lt-prop-yield=true lt-prop-value="0" lt-prop-records="12" lt-prop-perpage="10" lt-prop-type="border">
    <template is = "registerYield" yield-name = "navigatorYield">
        <div class="lyteDoubleBack"> Home </div>
        <div class="lyteSingleBack"> Prev </div>
        <% paginationRange.forEach(function(column, index){ %>
            <div data-value={{column}}> {{column}} </div>
        <% }) %>
        <div class="lyteSingleFront"> Next </div>
        <div class="lyteDoubleFront"> End </div>
    </template>
</lyte-navigator>
```
```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} on-select = {{method('select')}} lt-prop-value="0" lt-prop-type="border" lt-prop-records="12" lt-prop-perpage="10" lt-prop-yield=false>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
    <lyte-nav-arrow> </lyte-nav-arrow>
</lyte-navigator>
```
Navigator With Icons

You can also implement a paginator only with the icons. For this you can specify ltPropShowOnlyIcon as true.

```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} on-select = {{method('select')}} lt-prop-value="0" lt-prop-type="border" lt-prop-records="12" lt-prop-perpage="10" lt-prop-show-only-icon=true>
      <lyte-nav-arrow> </lyte-nav-arrow>
      <lyte-nav-arrow> </lyte-nav-arrow>
      <lyte-nav-arrow> </lyte-nav-arrow>
      <lyte-nav-arrow> </lyte-nav-arrow>
</lyte-navigator>
```
Customized Navigator

You can customize the lyte-navigator-icons with ltPropShowText as true and also you can give two icons, one for previous navigation and other icon for the next navigation.

```html
<lyte-navigator on-next = {{method('next')}} on-previous = {{method('previous')}} on-home = {{method('home')}} on-end = {{method('end')}} on-select = {{method('select')}} lt-prop-value="0" lt-prop-type="border" lt-prop-records="12" lt-prop-perpage="10" lt-prop-show-only-icon=true lt-prop-show-text=true>
     <lyte-nav-arrow>Prev </lyte-nav-arrow>
     <lyte-nav-arrow>Next </lyte-nav-arrow>
</lyte-navigator>
```

### navigator - api

Properties

All properties should be prefixed with lt-prop.

Perpage
Name	:	perpage(lt-prop-perpage)
Description	:	Number of records to be displayed in a page.
Datatype	:	Number
Default	:	10
Value
Name	:	value(lt-prop-value)
Description	:	It is the index value of first record in the current page.
Datatype	:	Number
Default	:	
Records
Name	:	records(lt-prop-records)
Description	:	Total number of records.
Datatype	:	Number
More records
Name	:	more-records(lt-prop-more-records)
Description	:	It prevents the next icon from disabling.
Datatype	:	Boolean
Default	:	false
Middle text
Name	:	middle-text(lt-prop-middle-text)
Description	:	String to be placed between numbers in navigator. It is used only in default type.
Datatype	:	String
Default	:	to
Type
Name	:	type(lt-prop-type)
Description	:	It is the type of the pagination.
Datatype	:	String
Default	:	default
Show only icon
Name	:	show-only-icon(lt-prop-show-only-icon)
Description	:	If set true, only the icons will be displayed.
Datatype	:	Boolean
Default	:	false
Show text
Name	:	show-text(lt-prop-show-text)
Description	:	If set to true, you can display a text instead of icons. It is not used in default type.
Datatype	:	Boolean
Default	:	false
Yield
Name	:	yield(lt-prop-yield)
Description	:	To render your own DOM use yield.
Datatype	:	Boolean
Default	:	false
Aria
Name	:	aria(lt-prop-aria)
Description	:	On setting true, will enable aria attributes
Datatype	:	Boolean
Default	:	false
Aria Navigator
Name	:	aria-navigator(lt-prop-aria-navigator)
Description	:	This property is used to set aria attributes for navigator wrapper
Datatype	:	Object
Default	:	{}
Aria Next
Name	:	aria-next(lt-prop-aria-next)
Description	:	This property is used to set aria attributes for navigator next icon
Datatype	:	Object
Default	:	{}
Aria Prev
Name	:	aria-prev(lt-prop-aria-prev)
Description	:	This property is used to set aria attributes for navigator previous icon.
Datatype	:	Object
Default	:	{}
Aria Home
Name	:	aria-home(lt-prop-aria-home)
Description	:	This property is used to set aria attributes for navigator home icon.
Datatype	:	Object
Default	:	{}
Aria End
Name	:	aria-end(lt-prop-aria-end)
Description	:	This property is used to set aria attributes for navigator end icon.
Datatype	:	Object
Default	:	{}
Methods

You can provide the methods to lyte-navigator either via script or HTML before it is rendered.

on-next
Name	:	on-next
Description	:	This method is triggered whenever the next icon is clicked
on-previous
Name	:	on-previous
Description	:	This method is triggered whenever the previous icon is clicked.
on-home
Name	:	on-home
Description	:	This method is triggered whenever the home icon is clicked
on-end
Name	:	on-end
Description	:	This method is triggered whenever the end icon is clicked
on-select
Name	:	on-select
Description	:	This method is triggered when a any page number is clicked. It is not used in default type

---

## popover

### popover - overview

Popover

Popover, an UI component, is useful for displaying additional information or content associated to an element. It is an advanced version of tooltip.


NOTE : To open the popover you need to set the value of ltPropShow as true. Set the value of ltPropShow as true only after setting the values for all other properties you have used. This will make sure that the values passed by you are considered while opening the popover.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-popover.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

Anatomy of the popover is shown as below :

Tags of the popover.



lyte-popover-header - The header of the popover.
lyte-popover-content - The content of the popover.
lyte-popover-footer - The footer of the popover.
Description

Popover is modified version of Modal. Only the position and the appearance of the modal will be different and is tightly coupled to originated element.

```html
<lyte-button id='btn' onclick={{action('perform')}}>
    <template is="registerYield" yield-name="text">
        Default
    </template>
</lyte-button>
<lyte-popover class="openpop" lt-prop-origin-elem="#btn">
    <template is="registerYield" yield-name="popover">
        <lyte-popover-header> Create Post : </lyte-popover-header>
        <lyte-popover-content>
            <table cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                    <td style="text-align: right; padding: 0 20px 10px 0;"> Title </td>
                    <td style="padding-bottom: 10px;">
                        <lyte-input lt-prop-type="text" lt-prop-appearance="box"> </lyte-input>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right; padding-right: 20px;"> Subject </td>
                    <td>
                        <lyte-input lt-prop-type="text" lt-prop-appearance="box"> </lyte-input>
                    </td>
                </tr>
            </table>
        </lyte-popover-content>
        <lyte-popover-footer style="padding: 10px 25px 25px;">
            <lyte-button>
                <template is="registerYield" yield-name="text"> Cancel </template>
            </lyte-button>
            <lyte-button lt-prop-appearance="primary">
                <template is="registerYield" yield-name="text"> Post </template>
            </lyte-button>
        </lyte-popover-footer>
    </template>
</lyte-popover>
```
```javascript
perform: function () {
    $L('.openpop')[0].component.setData('ltPropShow', true)
},
```

NOTE : To open the popover you need to set the value of lt-prop-origin-elem

Animation

This property helps you to define the animation style. By default, the animation style is fade.
The options provided for the animation property are -

fade : By setting this value, the popover fades in and fades out while opening and closing.
zoom : By setting this value, the popover shows a zoom in animation origination from the origin element and will zoom out while getting closed.
```javascript
var popup = document.getElementById("popoverElem");
popup.ltProp("animation","zoom");
```
Freeze

Setting freeze false, opens a modelless popover. Dimmer will not be applied and backround view will be accessible. By default freeze will be true.
Note : By default non-freezed popover will have inner scroll in the content area, if the popover's height/width exceeds the document's height/width.

```javascript
var popoverElement = document.getElementById("popoverElem");
popoverElement.ltProp("freeze",true);
popoverElement.ltProp("freeze",false);
```
Draggable

Setting draggable true, enables you to drag the popup inside the viewport.

```javascript
popoverElement.ltProp("draggable",true);
popoverElement.ltProp("draggable",false);
```
maxWidth - maxHeight

Max width and Max height of popup can be configured. If the popup's height exceeds the maxHeight or viewport's height, inner scroll will be applied.

```javascript
popoverElement.ltProp("maxHeight","100px");
```

### popover - api

Properties

All properties should be prefixed with lt-prop.

Show
Name	:	show( lt-prop-show )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to show the popover, false to close.
Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	callout
Description	:	Popover can be shown with an arrow pointing the origin element(callout) or just a box adjacent to the origin element.
Freeze
Name	:	freeze( lt-prop-freeze )
DataType	:	boolean
Default	:	true
Description	:	You can choose to freeze or not to freeze the background using this property. When you set it to false, background view will be accessible to the user.
Show Close Button
Name	:	show-close-button( lt-prop-show-close-button )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to show close button on the popover.
Close On Escape
Name	:	close-on-escape( lt-prop-close-on-escape )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to close the popover on escape keypress.
Origin Elem
Name	:	origin-elem( lt-prop-origin-elem )
DataType	:	string
Description	:	Popover is attached to the origin element. Popover will be displayed based on the origin element. This property is mandatory for popover component.
Placement
Name	:	placement( lt-prop-placement )
DataType	:	string
Default	:	By default it depends on the available space.
Description	:	This property helps to position the popover. Make sure the width and height of the popover is less than the place available when you use this option else it can lead to abnormal positioning of the popover. New values are added such as leftCenter, leftBottom, rightCenter, rightBottom. You can also provide different values in the following format, Eg - lt-prop-placement="left topRight". So in this case first the popover will be positioned at the left of the origin element. If the popover cannot be placed there then it will try for the next position i.e. topRight.
Dimmer
Name	:	dimmer( lt-prop-dimmer )
DataType	:	object
Default	:	{"color":"#000","opacity":"0.4"}
Description	:	This property helps you to set the dimmer color and opacity for the freeze layer.
Draggable
Name	:	draggable( lt-prop-draggable )
DataType	:	boolean
Default	:	false
Description	:	Set this property true to make the popover draggable.
Allow Multiple
Name	:	allow-multiple( lt-prop-allow-multiple )
DataType	:	boolean
Default	:	false
Description	:	This property helps you to open any other popover/alert/popover over them. Setting this true will prevent closing of popover on opening other popover.
Scrollable
Name	:	scrollable( lt-prop-scrollable )
DataType	:	boolean
Default	:	false
Description	:	You can choose to scroll or not scroll the popover along with it's origin element when the freeze is false. Setting it true will scroll the popover up and down along with its origin element when the freeze is false.
Max Height
Name	:	max-height( lt-prop-max-height )
DataType	:	string
Default	:	70% of body
Description	:	This property helps you to define max-height of the popover.
Max Width
Name	:	max-width( lt-prop-max-width )
DataType	:	string
Default	:	50% of body
Description	:	This property helps you to define max-width of the popover.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	40% of the body
Description	:	This property helps you to define width of the popover.
Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	auto
Description	:	This property helps you to define height of the popover.
Wrapper Class
Name	:	wrapper-class( lt-prop-wrapper-class )
DataType	:	string
Description	:	This property sets the given class to wrapper div of popover. This helps you to identify your popover and also to make style changes to that.
Boundary
Name	:	boundary( lt-prop-boundary )
DataType	:	object
Default	:	
Description	:	This property helps you to set the dimensions. If the target element crosses the given dimension, the popover gets closed.
Note: It is an object having any of the four attributes - top,bottom,left and right. eg : lt-prop-boundary = {"top" : "120px","bottom" : "800px", "left" : "10px", "right" : "1000px"}
Close On Body Click
Name	:	close-on-body-click( lt-prop-close-on-body-click )
DataType	:	boolean
Default	:	true
Description	:	On setting true, this property closes the popover on clicking anywhere outside the popover. To stop closing, set the value to false.
Duration
Name	:	duration( lt-prop-duration )
DataType	:	number
Default	:	800
Description	:	Sets the transition time of the popover.
Offset
Name	:	offset( lt-prop-offset )
DataType	:	object
Default	:	
Description	:	This property is an alternative for lt-prop-origin-elem when you dont have any origin element. When you provide origin element, it's clientRect object is calculated and the popover is positioned based on that. But if you don't have an origin element, based on the given offset value, the imaginary origin element will be calculated and the popover will be displayed. This offset value is not set to the popover. In case you haven't provided value for both lt-prop-origin-elem and lt-prop-offset, an error will be thrown. The width and height must be given in the lt-prop-offset.
Bind To Body
Name	:	bind-to-body( lt-prop-bind-to-body )
DataType	:	boolean
Default	:	false
Description	:	If set to true, renders the popover while loading the content of the page else the popover will be rendered when it's show value is set to true. Users can also set this value to false to remove the rendered popover from the DOM. NOTE : This value is required to be set from script when doing some action or it can be set using the methods provided by popover like on-close or on-before-close. Setting this value from html won't do the changes as expected.
Header Padding
Name	:	header-padding( lt-prop-header-padding )
DataType	:	string
Default	:	15px 30px
Description	:	Sets padding for the header.
Content Padding
Name	:	content-padding( lt-prop-content-padding )
DataType	:	string
Default	:	15px 30px
Description	:	Sets padding for the content.
Footer Padding
Name	:	footer-padding( lt-prop-footer-padding )
DataType	:	string
Default	:	15px 30px
Description	:	Sets padding for the footer.
Animation
Name	:	animation( lt-prop-animation )
DataType	:	string
Default	:	fade
Description	:	Sets animation to be shown while opening and closing the popover.
Window Spacing
Name	:	window-spacing( lt-prop-window-spacing )
DataType	:	object
Default	:	{left : 30, right : 30, top : 30, bottom : 30}
Description	:	Sets the gap that will be maintained between the popover and the browser's viewport. The values provided should be greater than 0(zero).
Force Scroll
Name	:	force-scroll( lt-prop-force-scroll )
DataType	:	boolean
Default	:	false
Description	:	Generally when the origin element goes out of the viewport the popover is either closed or it does not get scrolled further and remains inside the viewport. But setting this property to true will not close the popover and will keep the popover scrolling with the orign element in the webpage.
Auto Align
Name	:	auto-align( lt-prop-auto-align )
DataType	:	boolean
Default	:	false
Description	:	If set to true it will observe the changes in height and width of the popover and will position it accordingly.
Aria
Name	:	aria( lt-prop-aria )
DataType	:	boolean
Default	:	false
Description	:	Setting this to true indicates that aria properties are provided and the same will be added to the popover element.
Aria Attributes
Name	:	aria-attributes( lt-prop-aria-attributes )
DataType	:	object
Description	:	The aria properties to be provided to the popover element are provided using this property.
Prevent Focus
Name	:	prevent-focus( lt-prop-prevent-focus )
DataType	:	boolean
Default	:	false
Description	:	If set to true, it will prevent intial focus on elements inside the popover that is set by the popover. It is useful in those scenarios where any element rendered inside the popover has ltPropAutoFocus as true.
Stop Click
Name	:	stop-click( lt-prop-stop-click )
DataType	:	boolean
Default	:	false
Description	:	Setting this to true indicates that the popover's click event handler should not perform any calculation. This is helpful when we are having some draggable item(s) inside the popover and the mouse pointer goes outside the popover's body while dragging an item. So in that position where the cursor is outside, if mouse up happens, the click function is also triggered. And as the click seems to happen outside the popover's body, so the popover gets closed(if it has lt-prop-close-on-body-click = true). This scenario can be prevented using ltPropStopClick property.
Margin
Name	:	margin( lt-prop-margin )
DataType	:	object
Default	:	
Description	:	We can specify the offset distance between the popover and the origin element using this property. The property should have margin specified by keys like top, left, right and bottom. Example : lt-prop-margin = '{top:20, left:20, right:20, bottom:20}'
Allowcontainment
Name	:	AllowContainment( lt-prop-allow-containment )
DataType	:	boolean
Default	:	false
Description	:	This property makes the popover stay within the containment.
Ignoreinput
Name	:	IgnoreInput( lt-prop-ignore-input )
DataType	:	Boolean
Default	:	false
Description	:	This property plays a vital role to prevent the popover from closing (due to ltpropCloseOnBody) when an input is clicked outside the popover.
Host Element
Name	:	Host Element( lt-prop-host-element )
DataType	:	string
Default	:	
Description	:	With this property, you can provide the shadow DOM as the host element with the origin element residing in the Shodow DOM
Methods

The following are the methods of lyte-popover .

on-before-show
Name	:	on-before-show
Description	:	This will be executed before the popover is shown. Returning false from this callback will prevent popover from showing. By default, returned value is true.
on-show
Name	:	on-show
Description	:	This will be executed after the popover is shown.
on-before-close
Name	:	on-before-close
Description	:	This will be executed before the popover closes. Returning false from this callback will prevent popover from closing. By default, returned value is true.
on-close
Name	:	on-close
Description	:	This will be executed once the popover is closed.
on-resize
Name	:	on-resize
Description	:	This will be executed when the document view containing the popover has been resized.
on-scroll
Name	:	on-scroll
Description	:	This will be executed when the document view containing the popover has been scrolled.
on-position-change
Name	:	on-position-change
Description	:	This will be executed if the ltPropAutoAlign property of the popover is set to true and the popover's position is changed due to changes in the popover's height and width after it is opened.
Utility Functions

You can call this function anywhere after lyte-popover is rendered.

alignPopover
Description	:	The left and top positions of the popover is calculated and assigned when the popover is opened based on it's content at that time. Hence, after the popover is opened and if its content is changed then the popover's position won't change. So if you want to change the popover's position based on your updated content then call this function after your content is updated.
calculateOffset
Description	:	The height and width of the popover is calculated while opening the popover based on its content at that time. So after opening the popover if the content is changed then there might not be any changes in the popover. Use this function if you want the popover reflect the changes in the content on its height and width too. Call this function after your content is updated.
trapFocus
Description	:	It will trap the focus inside the popover.
Events

The following are the events of popover.

BeforeOpen
Description	:	This event is triggered before opening the popover.
BeforeClose
Description	:	This event is triggered before closing the popover.

---

## splitter

### splitter - overview

Splitter

The Splitter as an UI component, is used to show splitted areas which can be adjusted and resized by the user.

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-splitter.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy 
lyte-splitter

lyte-splitter is the main splitter container that wraps both column splitter and row splitter.

lyte-column-splitter

lyte-column-splitter is the wrapper container for column elements and acts as a flex.

lyte-column-element

lyte-column-element(s) are the visual area aligned in columns.

lyte-row-splitter

lyte-row-splitter is the wrapper container for row elements and acts as a flex.

lyte-row-element

lyte-row-element(s) are the visual area aligned in rows.

User can give columns inside a row and vice versa

Lyte-splitter

Lyte splitter is the main outermost container that has two major children namely lyte-splitter-column and lyte-splitter-row.

lyte-splitter-column

The Lyte column splitter is a wrapper of the column elements, the column splitter has a display value of 'flex' and flex-direction value of 'row' in order to arrange the children in column. It may have 'n' number of children ie., lyte-column-element which will be aligned and constructed based on flex-basis and flex-grow options.

lyte-splitter-row

The Lyte row splitter is a wrapper of the row elements, the row splitter has a display value of 'flex' and flex-direction value of 'column' in order to arrange the children in row. It may have 'n' number of children ie., lyte-row-element which will be aligned and constructed based on flex-basis and flex-grow options.

```html
<lyte-splitter style="height:300px">
  <template is="registerYield" yield-name="splitter">
    <lyte-column-splitter>
      <lyte-column-element>
        <lyte-row-splitter>
          <lyte-row-element lt-size="60%"> Your Content </lyte-row-element>
          <lyte-row-element> Your Content </lyte-row-element>
        </lyte-row-splitter>
      </lyte-column-element>
      <lyte-column-element>
        <lyte-row-splitter>
          <lyte-row-element> Your Content </lyte-row-element>
          <lyte-row-element lt-size="60%">
            <lyte-column-splitter>
              <lyte-column-element> Your Content </lyte-column-element>
              <lyte-column-element> Your Content </lyte-column-element>
            </lyte-column-splitter>
          </lyte-row-element>
        </lyte-row-splitter>
      </lyte-column-element>
    </lyte-column-splitter>
  </template>
</lyte-splitter>
```

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

Contrary to popular belief, Lorem Ipsum is not simply random text.

---

## step

### step - overview

Step

Step, an UI component, , indicates the stage or phase of a work within a navigational hierarchy and automatically adds separators between them. Different types of steps are rendered based on the provided ltPropClass.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-step.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of a step is as shown below.

Tags of the step.



lyte-step-structure - outer container
lyte-step-item - each list item
lyte-step-head - sub display value
lyte-step-body - main display value
Default( slash ) step

This is the default type step. Each step items are separated by a slash. You can pass array of strings or array of objects to lyte-step.

For array of objects you need to mention lt-prop-label ( key which contains the display value for each item ) value in non yieled case.

You can render lyte-step content's in parent component's scope by using yield

In onClick callback you can change the selected state

```html
<lyte-step lt-prop-yield = true on-click = {{method('someMethod')}}>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <% someArray.forEach( function( item, index ){ %>
                <lyte-step-item data-value = {{item.order}}>
                    <lyte-step-body> {{item.name}} </lyte-step-body>
                </lyte-step-item>
            <% } ) %>
        </lyte-step-structure>
    </template>
</lyte-step>
```
```html
<lyte-step lt-prop-label = 'name' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}> </lyte-step>
```
```javascript
// in your component

data(){
    return  {
     someArray : prop( 'array' , {
        default : [
            { "name" : "home" , "order" : 1 },
            { "name" : "new" , "order" : 2 },
            { "name" : "edit" , "order" : 3 },
            { "name" : "save" , "order" : 4 }
        ]
     })
    }
}

static methods() {
  return{
    someMethod : function ( clickedItem , step , event , data ) {
        step.goto ( desiredIndex , 'completed' )
    }
  }
}
```
```html
<lyte-step>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
        </lyte-step-structure>
    </template>
</lyte-step>
```
Arrow step

In this type each step items are separated by an arrow . You can pass Array of strings or array of objects

```html
<lyte-step lt-prop-yield = true on-click = {{method('someMethod')}} lt-prop-class = 'lyteStepArrow'>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <% someArray.forEach( function( item, index ){ %>
                <lyte-step-item data-value = {{item}}>
                    <lyte-step-body> {{item}} </lyte-step-body>
                </lyte-step-item>
            <% } ) %>
        </lyte-step-structure>
    </template>
</lyte-step>
```
```html
<lyte-step lt-prop-class = 'lyteStepArrow' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}> </lyte-step>
```
```javascript
// in your component's JS file

data (){
    return {
      someArray : prop( 'array' , { default : [ "home" , "new" , "edit" , "save" ] } )
    }
}
static methods() {
  return{
    someMethod : function ( clickedItem , step , event , data ) {
        step.goto ( desiredIndex , 'completed' )
    }
  }
}
```
```html
<lyte-step>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
        </lyte-step-structure>
    </template>
</lyte-step>
```
Bullet step

This is bullet type step. You can define bullets and its index by lyte-step-head and lyte-step-body tags. If anything needs to be shown inside lyte-step-head use lt-prop-option. ( For array of options for non yielded step rendering )

```html
<lyte-step lt-prop-yield = true on-click = {{method('someMethod')}} lt-prop-class = 'lyteStepBullet'>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <% someArray.forEach( function( item, index ){ %>
                <lyte-step-item data-value = {{item.order}}>
                    <lyte-step-head></lyte-step-head>
                    <lyte-step-body> {{item.name}} </lyte-step-body>
                </lyte-step-item>
            <% } ) %>
        </lyte-step-structure>
    </template>
</lyte-step>
```
```html
<lyte-step lt-prop-label = "name" lt-prop-option = "order" lt-prop-class = 'lyteStepBullet' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}> </lyte-step>
```
```javascript
// in your component



data(){
    return {
      someArray : prop( 'array', { default : [
       { "name" : "home" , "order" : 1 },
       { "name" : "new" , "order" : 2 },
       { "name" : "edit" , "order" : 3 },
       { "name" : "save" , "order" : 4 }
    ] } )
  }
}

static methods() {
  return{
    someMethod : function ( clickedItem , step , event , data ) {
        step.goto ( desiredIndex , 'completed' )
    }
  }
}
```
```html
<lyte-step>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-item>
                <lyte-step-head> </lyte-step-head>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-head> </lyte-step-head>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-head> </lyte-step-head>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
        </lyte-step-structure>
    </template>
</lyte-step>
```
Flat step

This is flat type step which is set using ltPropClass.

```html
<lyte-step lt-prop-yield = true on-click = {{method('someMethod')}} lt-prop-class = "lyteStepFlat">
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <% someArray.forEach( function( item, index ){ %>
                <lyte-step-item data-value = {{item.order}}>
                    <lyte-step-body> {{item.name}} </lyte-step-body>
                </lyte-step-item>
            <% }) %>
        </lyte-step-structure>
    </template>
</lyte-step>
```
```html
<lyte-step lt-prop-label = "name" lt-prop-class = 'lyteStepFlat' lt-prop-data = {{someArray}} on-click = {{method('someMethod')}}> </lyte-step>
```
```javascript
// in your component JS file

  data(){
    return {
      someArray : prop ( 'array' , { default : [
          { "name" : "home" , "order" : 1 },
          { "name" : "new" , "order" : 2 },
          { "name" : "edit" , "order" : 3 },
          { "name" : "save" , "order" : 4 }
      ] } )
    }
}

static methods() {
  return{
    someMethod : function ( clickedItem , step , event , data ) {
        step.goto ( desiredIndex , 'completed' )
    }
  }
}
```
```html
<lyte-step>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
             </lyte-step-item>
             <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
             </lyte-step-item>
             <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
        </lyte-step-structure>
    </template>
</lyte-step>
```
Advance type

Whenever the content exceeds the width of step container lyte-step only renders the elements which are fit to its container. You can also provide forward and backward navigations. This type is only available on yield.

Bind your data to lt-prop-data of lyte-step. Use ltPropContent provided by lyte-yield to render your data. ltPropContent will be in same data structure of lt-prop-data provided.

```html
<lyte-step lt-prop-yield = true lt-prop-type = "advanced" lt-prop-class = "lyteStepFlat" lt-prop-data = {{someArr}}>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-backward> backward </lyte-step-backward>
            <% ltPropContent.forEach( function( item, index ){ %>
                <lyte-step-item data-value = {{item.order}}>
                    <lyte-step-body> {{item.name}} </lyte-step-body>
                </lyte-step-item>
            <% }) %>
            <lyte-step-forward>forward </lyte-step-forward>
        </lyte-step-structure>
    </template>
</lyte-step>
```
```javascript
// in your component JS file

data(){
    return {
      someArray : prop ( 'array' , { default : [
          { "name" : "home" , "order" : 1 },
          { "name" : "new" , "order" : 2 },
          { "name" : "edit" , "order" : 3 },
          { "name" : "save" , "order" : 4 }
      ] } )
    }
}
static methods() {
    return{
      someMethod : function ( clickedItem , step , event , data ) {
        step.goto ( desiredIndex , 'completed' )
     }
  }
}
```
```html
<lyte-step>
    <template is="registerYield" yield-name="yield">
        <lyte-step-structure>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
            <lyte-step-item>
                <lyte-step-body> </lyte-step-body>
            </lyte-step-item>
        </lyte-step-structure>
    </template>
</lyte-step>
```

### step - api

Properties

All properties should be prefixed with lt-prop.

class
DataType	:	String
Default	:	lyteStepSlash
Description	:	We have different types of steps based on the 'separators' used.
yield
DataType	:	Boolean
Default	:	false
Description	:	To render your own DOM use 'yield'
data
DataType	:	Array
Default	:	[ ] (empty array)
Description	:	Array of data required for the construction of step. It should be in ' array ' or ' array of objects' format. For ' array of objects ' you need to specify ' label' and ' options' key
label
DataType	:	String
Default	:	-
Description	:	Key which contains the step body display value in 'content' array (for array of objects)
option
DataType	:	String
Default	:	-
Description	:	You can also provide headers along with body in ' bullet ' type. For that you need to specify key which contains step header data
selected
DataType	:	Number
Default	:	0
Description	:	Order of step item to be marked as active step element.
skip
DataType	:	Boolean
Default	:	true
Description	:	It allows / prevents the movement to other steps by skipping nearby steps. If a process contains five phases and you are in the third phase. You can directly move to the fifth phase by skipping the forth one
keep-marked
DataType	:	Boolean
Default	:	false
Description	:	By default while moving to a lower step intermediate step's status( active / incomplete ) will be removed. To prevent this behaviour use this property
active-class
DataType	:	String
Default	:	lyteActive
Description	:	It specifies the class to be added for an active step item.
completed-class
DataType	:	String
Default	:	lyteCompleted
Description	:	It specifies the class to be added for the step items which marked as 'completed'.
warning-class
DataType	:	String
Default	:	lyteWarning
Description	:	It specifies the class to be added for the step items which marked as 'warning'.
type
DataType	:	String
Default	:	-
Description	:	It will render contents based on its width. Remaining elements will be rendered on next navigation
offset
DataType	:	Number
Default	:	0
Description	:	This is for advanced type step. Given offset elements of previous set will be rendered with next elements
index
DataType	:	Number
Default	:	0
Description	:	This is for advanced type step. It indicates the index of first rendered element
aria
DataType	:	Boolean
Default	:	false
Description	:	It will set aria attributes to step items
aria-value
DataType	:	String
Default	:	Page
Description	:	It will set as aria-current attribute to anchor tags inside step items
Methods

You can provide the methods to lyte-step either via script or HTML.

on-click
Description	:	This method is trigger whenever an item is clicked
before-render
Description	:	This method is invoked before rendering the component
after-render
Description	:	This method is invoked after rendering the component
on-before-navigate
Description	:	This method is invoked before the navigation in advanced type step
ReturnValue	:	If this method returns false additional items won't be rendered
on-navigate
Description	:	This method is invoked after the navigation in advanced type step
Functions

You can call this functions from anywhere when lyte-step is rendered

next
Description	:	It will mark the current phase as completed / incomplete and moves to next phase. Moved phase will be marked as active
previous
Description	:	It will mark the current phase as completed / incomplete (if keep-marked true) and moves to previous phase. Moved phase will be marked as active
goto
Description	:	This function may be called with the following arguments * Selected element index * currentState ('completed' or 'incomplete') It marks all intermediate phases while moving to higher order and unmarks (if keep-marked false) all intermediate phases while moving to lower order.
Yields

You can render your own drop items by using yield

yield ( description )
Description	:	All the elements given inside the yield template will be rendered as given

---

## tabs

### tabs - overview

Tab

Tab, a member from the family of UI components, is a content area associated with a header in a list. On clicking each header, the content associated with it is displayed. It is a block level element which supports only yield.


Dependencies
```javascript
<!-- Individual component files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tabs.css">
</link>
<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-menu.css">
</link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

The js file is included in app.js
```
```javascript
<!-- individual components -->
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-tabs.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-tabs.css"> </link>
 <script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-menu.js" ></script>
 <link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-menu.css"> </link>

 also requires a sprite file - ui-components/theme/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

Anatomy of the tab is shown as below :

Simple structure


Let us see the structure of lyte-tabs

Tags Used

Have a look at the tags of Tag Component

lyte-tab-head - The header of the tab which holds all the tab titles or labels.
lyte-tab-title - The title or labels of the tab.
lyte-tab-body - The body of the tab which will show the content specific to the selected tab label.
lyte-tab-content - The content of the tab.
Semantic structure
```javascript
<lyte-tabs lt-prop-yield="true">
  <template is="registerYield" yield-name="rateIcon" >
        <lyte-tab-head>
        <lyte-tab-title lt-prop-id = "tabs1"> </lyte-tab-title>
        <lyte-tab-title lt-prop-id = "tabs4">  </lyte-tab-title>
    </lyte-tab-head>
    <lyte-tab-body>
        <lyte-tab-content id = "tabs1"> </lyte-tab-content>
        <lyte-tab-content id = "tabs4"> </lyte-tab-content>
    </lyte-tab-body>
  </template>
</lyte-tabs>
```
Tabs syntax - with yield
```javascript
<lyte-tabs lt-prop-yield="true" lt-prop-type="class"  lt-prop-empty-icon = "lRCustomRatingEmpty" lt-prop-full-icon = "lRCustomRating" lt-prop-hover-full-icon = "lRCustomRatingHover">
   <template is="registerYield" yield-name="rateIcon" >
      <lyte-tab-head>
     <lyte-tab-title lt-prop-id = "tabs1"> Header 1 </lyte-tab-title>
     <lyte-tab-title lt-prop-id = "tabs2"> Header 2 </lyte-tab-title>
 </lyte-tab-head>
 <lyte-tab-body>
     <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
     <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
 </lyte-tab-body>
  </template>
</lyte-tabs>
```
Default Tabs

The lyte-tab-content should contain an id which corresponds to the lt-prop-id in the lyte-tab-title element of the associated tab.

```html
<lyte-tabs>
    <template is = "registerYield" yield-name = "tabYield">
        <lyte-tab-head>
            <lyte-tab-title lt-prop-id = "tabs1"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs2"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs3"> Header 3 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs4"> Header 4 </lyte-tab-title>
        </lyte-tab-head>
        <lyte-tab-body>
            <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs3"> Content 3 </lyte-tab-content>
            <lyte-tab-content id = "tabs4"> Content 4 </lyte-tab-content>
        </lyte-tab-body>
    </template>
</lyte-tabs>
```

On executing the above, you will get the following result.

Types
Collapsible Tab

Tabs are also collapsible. Just set lt-prop-type to collapse, which collapses the tab headers into a menu when the width of the rendered lyte-tab-title(s) goes beyond a percentage of the width of the lyte-tab-head tag. This percentage is given by the lt-prop-max-width attribute.

```html
<lyte-tabs lt-prop = '{"type" : "collapse"}'>
    <template is = "registerYield" yield-name = "tabYield">
        <lyte-tab-head>
            <lyte-tab-title lt-prop-id = "tabs1"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs2"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs3"> Header 3 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs4"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs5"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs6"> Header 3 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs7"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs8"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs9"> Header 3 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs10"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs11"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs12"> Header 3 </lyte-tab-title>
        </lyte-tab-head>
        <lyte-tab-body>
            <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs3"> Content 3 </lyte-tab-content>
            <lyte-tab-content id = "tabs4"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs5"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs6"> Content 3 </lyte-tab-content>
            <lyte-tab-content id = "tabs7"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs8"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs9"> Content 3 </lyte-tab-content>
            <lyte-tab-content id = "tabs10"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs11"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs12"> Content 3 </lyte-tab-content>
        </lyte-tab-body>
    </template>
</lyte-tabs>
```
Features of Lyte tabs
Tab With Icons

With this, you can add an icon with the tab.

```html
<lyte-tabs>
    <template is = "registerYield" yield-name = "tabYield">
        <lyte-tab-head>
            <lyte-tab-title lt-prop-id = "tabs1"> <icon> </icon> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs2"> <icon> </icon> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs3"> <icon> </icon> Header 3 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs4"> <icon> </icon> Header 4 </lyte-tab-title>
        </lyte-tab-head>
        <lyte-tab-body>
            <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs3"> Content 3 </lyte-tab-content>
            <lyte-tab-content id = "tabs4"> Content 4 </lyte-tab-content>
        </lyte-tab-body>
    </template>
</lyte-tabs>
```
Tab With Close Icon

Show 'Close icon' with the header of the tab by setting ltPropCloseIcon as true.

```html
<lyte-tabs lt-prop = '{"closeIcon" : true}'>
    <template is = "registerYield" yield-name = "tabYield">
        <lyte-tab-head>
            <lyte-tab-title lt-prop-id = "tabs1"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs2"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs3"> Header 3 </lyte-tab-title>
        </lyte-tab-head>
        <lyte-tab-body>
            <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs3"> Content 3 </lyte-tab-content>
        </lyte-tab-body>
    </template>
</lyte-tabs>
```
Nested Tabs

To use nested tabs with different position and alignment set the value of the ltPropTabStyle property as nested. If this property is not set then the inner tabs might have some css value overridden and its appearance might get affected.

View Code
View code
Customized Tab Positions

Change the position and alignment to view the changes in the structure of the tab.

```html
<lyte-tabs lt-prop = ' { "position" : { "pos" : "left" , "align" : "center" } } '>
    <template is = "registerYield" yield-name = "tabYield">
        <lyte-tab-head>
            <lyte-tab-title lt-prop-id = "tabs1"> Header 1 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs2"> Header 2 </lyte-tab-title>
            <lyte-tab-title lt-prop-id = "tabs3"> Header 3 </lyte-tab-title>
        </lyte-tab-head>
        <lyte-tab-body>
            <lyte-tab-content id = "tabs1"> Content 1 </lyte-tab-content>
            <lyte-tab-content id = "tabs2"> Content 2 </lyte-tab-content>
            <lyte-tab-content id = "tabs3"> Content 3 </lyte-tab-content>
        </lyte-tab-body>
    </template>
</lyte-tabs>
```
Enabling Accessibilty

By default, aria attributes are enabled.

Properties
Name	Datatype	Default value	Description
lt-prop-hover	String	lyteTabHover	It specifies the name of the class that is bound to it when the mouse hovers over the header.
lt-prop-active-class	String	lyteTabActive	It specifies the class which is bound when the header is active.
lt-prop-position	Object	{'pos' : 'left', 'align' : 'top'}	It is an object which helps in positioning and aligning the tab headers with respect to its content.
lt-prop-close-icon	Boolean	false	If set to true, displays the close icon associated with each tab title.
lt-prop-height	String	400px	Sets the minimum height of the tab component.
lt-prop-type	String	' '	It specifies how the tab will manage its headers when they grow more than the width of the tab.
lt-prop-max-width	String	90%	With this, set the percentage of the lyte-tab-head that can be occupied by the tab headers.
lt-prop-tab-style	String	' '	It is mandatory to set this property value as nested if a tab contains another tab.
lt-prop-menu-wrapper-class	String	' '	This is the class provided to the menu, in case of tabs with ltPropType as collapse.
lt-prop-current-tab	Object	' '	This is a readonly property that provides information regarding the current tab that is opened.
lt-prop-active-tab	number	0	It allows you to set an active Tab by setting the index of the tab.
Methods
Name	Description
on-before-open	It is triggered when the user clicks on a tab but before it is opened.
on-open	It is triggered when the clicked tab is opened.
on-before-menu-open	If this method returns false, menu will not be opened
on-menu-open	This method is called when the menu is opened.
on-before-menu-close	This method is called before closing the menu.
on-menu-close	This method is called when the menu is closed.
on-menu-click	This method is called whenever the menu item is clicked.
on-before-menu-render	This method is invoked before the menu is rendered.
on-after-menu-render	This method is invoked after rendering the menu.
on-before-delete	This method is invoked whenever you try to delete a tab by clicking on the close icon or by invoking the deleteTab method.
on-delete	This method is invoked after a tab is deleted either by clicking on the close icon or by invoking the deleteTab method.
Methods
Name	Description
addTab	This util is used to create a new tab.
deleteTab	This util is used to delete an existing tab.
openTab	This util is used to open an existing tab.
enableTab	This util is used to enable a disabled tab.
disableTab	This util is used to disable a tab.
addCloseIcon	This util is used to add the close icon dynamically.
resizeTab	This util is used to resize the tab component.

### tabs - api

Properties

All properties should be prefixed with lt-prop.

Hover
Name	:	hover( lt-prop-hover )
DataType	:	string
Default	:	lyteTabHover
Description	:	It specifies the name of the class that is bound to it when the mouse hovers over the header.
Active Class
Name	:	active-class( lt-prop-active-class )
DataType	:	string
Default	:	lyteTabActive
Description	:	It specifies the class which is bound when the header is active.
Position
Name	:	position( lt-prop-position )
DataType	:	object
Default	:	{"pos" : "left", "align" : "top"}
Description	:	It is an object which helps in positioning and aligning the tab headers with respect to its content. For "pos" value "top" and "bottom" the available "align" options are "left", "right" and "center".
For "pos" value "left" and "right", available "align" options are "top", "bottom" and "center".
Close Icon
Name	:	close-icon( lt-prop-close-icon )
DataType	:	boolean
Default	:	false
Description	:	If set to true, displays the close icon associated with each tab title.
Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	400px
Description	:	Sets the minimum height of the tab component.
Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	" "
Description	:	It specifies how the tab will manage its headers when they grow more than the width of the tab. By default its value is empty which means that the headers will be shrinked and adjusted to fit within the width of the tab. If collapse is provided as its value then, only those headers fitting within the width of the tab will be visible and a horizontal menu icon will be visible on clicking which other headers will be appearing within a list, similar to the menu-items in a list.
Max Width
Name	:	max-width( lt-prop-max-width )
DataType	:	string
Default	:	90%
Description	:	With this, set the percentage of the lyte-tab-head that can be occupied by the tab headers. Beyond this, it is collapsed into a menu. This value should always be a percentage.
Tab Style
Name	:	tab-style( lt-prop-tab-style )
DataType	:	string
Default	:	" "
Description	:	It is mandatory to set this property value as nested if a tab contains another tab. The parent tab needs to have this property value as nested.
Menu Wrapper Class
Name	:	menu-wrapper-class( lt-prop-menu-wrapper-class )
DataType	:	string
Default	:	" "
Description	:	This is the class provided to the menu, in case of tabs with ltPropType as collapse. This class helps to manipulate the style of the menu.
Current Tab
Name	:	current-tab( lt-prop-current-tab )
DataType	:	object
Default	:	" "
Description	:	This is a readonly property that provides information regarding the current tab that is opened. It contains two keys namely index and name, which contains the index position and name of the opened tab.
Active Tab
Name	:	active-tab( lt-prop-active-tab )
DataType	:	number
Default	:	" "
Description	:	It allows you to set an active Tab by setting the index of the tab.
Methods

The methods of lyte-tabs are as follows.

on-before-open
Name	:	on-before-open
Description	:	It is triggered when the user clicks on a tab but before it is opened.
ReturnValue	:	boolean - true or false
on-open
Name	:	on-open
Description	:	It is triggered when the clicked tab is opened.
on-before-delete
Description	:	This method is invoked whenever you try to delete a tab by clicking on the close icon or by invoking the deleteTab method. If returned false from the method the sepecified tab wont be deleted.
on-delete
Description	:	This method is invoked after a tab is deleted either by clicking on the close icon or by invoking the deleteTab method.
on-before-menu-open
Description	:	This method is called before opening menu.
ReturnValue	:	If this method returns false, menu will not be opened
on-menu-open
Description	:	This method is called when the menu is opened.
on-before-menu-close
Description	:	This method is called before closing the menu.
ReturnValue	:	If this method returns false menu will not be closed.
on-menu-close
Description	:	This method is called when the menu is closed.
on-menu-click
Description	:	This method is called whenever the menu item is clicked.
on-before-menu-render
Description	:	This method is invoked before the menu is rendered.
on-after-menu-render
Description	:	This method is invoked after rendering the menu.
after-render
Description	:	This method is invoked after the lyte-tab component is rendered on the page.
Utility Functions

Utility function for lyte-tabs are designed to perform specific task.

addTab
Name	:	addTab
Description	:	This util is used to create a new tab.
deleteTab
Name	:	deleteTab
Description	:	This util is used to delete an existing tab.
openTab
Name	:	openTab
Description	:	This util is used to open an existing tab.
enableTab
Name	:	enableTab
Description	:	This util is used to enable a disabled tab.
disableTab
Name	:	disableTab
Description	:	This util is used to disable a tab.
addCloseIcon
Name	:	addCloseIcon
Description	:	This util is used to add the close icon dynamically.
resizeTab
Name	:	resizeTab
Description	:	This util is used to resize the tab component.

---

## tooltip

### tooltip - overview

Tooltip

A tooltip, is an UI component, is a message which appears when a cursor is positioned over an icon, image, hyperlink, or other element. If an element contains lt-prop-title attribute, on mouse over the content will be displayed as tooltip.

Lyte-tooltip component will be added when DOM content is loaded.

It will support only text if HTML content display is needed use hovercard

By default lyte-tooltip component itself add one lyte-tooltip tag to the document body. If already a tooltip tag exists in document while "DOMContentLoaded" event it won't create a new tooltip element. This can be used for showing tooltip in the entire document.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="dist/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tooltip.css"> </link>
```
Anatomy

The anatomy of a tooltip is as shown below.

Callout tooltip

Tooltip will be created with callout arrow. Lyte tooltip uses lt-prop-title attribute value of the element to show the tooltip message. Position and durations of a particular tooltip can be given in lt-prop-tooltip-config attribute
Tooltip can be moved along with the cursor. It can be achieved by followcursor position

```html
<lyte-button lt-prop-title = "Default" lt-prop-tooltip-config = '{"position" : "somePositions"}'>
    <template is = "registerYield" yield-name = "yield">
        Default
    </template>
    </lyte-button>

<!-- somePositions = position can be either "left/right/top/bottom/topleft/topright/bottomleft/bottomright/followcursor" -->
```
Box tooltip

tooltip will be created without callout arrow.

```html
<lyte-button lt-prop-title = "Default" lt-prop-tooltip-config = '{"position" : "somePositions", "appearance" : "box"}'>
    <template is = "registerYield" yield-name = "yield">
        Default
    </template>
    </lyte-button>

<!-- somePositions = position can be either "left/right/top/bottom/topleft/topright/bottomleft/bottomright" -->
```
Quick demo

You can control tooltip show delay, hide delay and display time. By default tooltip will be opened without any timedelay.

Show delay - Tooltip will be shown after the given delay duration( in hover )
Hide delay - Tooltip will be removed after the given delay duration( in mouse leave )
Max display time - Even if mouseleave is not happened tooltip will be shown only for the given display time duration. This behaviour can be prevented by 'keepalive' property

---

## tour

### tour - overview

Tour

A site tour(Take a tour) UI component, is a component used to explain the features of the application.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tour.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Lyte Tour

Before starting have a look at our doc's tour by clicking the button given below.

Start Tour

Before using the lyte-tour component, a few things need to be done. As you saw the example in the doc, starting the tour creates a dimmed overlay with some elements promoted above the overlay. It is the responsibility of the user to create these elements and promote them above the overlay. So on clicking the tour start, make sure you render these promoted elements.

The lyte-tour component is the outer component and holds all the hints of the tour. As we said before a hint is used to explain a particular feature.

The lyte-tour component mainly consists of 2 sub level components, each component has seperate properties and callbacks. So in total there are three components - the main component and the two sub level component.

Main Tour

The "lyte-tour" is the main parent or wrapper component that, which comes only one time and holds all our hints inside it. Before calling the start tour function you have to do some steps.

Step 1: Create a dummy div in your index.html file or your global html file, which will be holding all your dummy targets inside it.

Step 2: Using CSS 'display' property or Lyte-if make your dummy div not available visually.

Step 3: On starting your site tour make sure that you bring the dummy div into visual and then call the '.startLyteTour()' function.

```html
<lyte-tour class="yourTourClass">
  <!--  Inside this you will be having the lyte-tour-hint(s) -->
</lyte-tour>
```
```html
<div class="yourAppDummyTargets">
  <!--  Inside this you will be having your dummy hints -->
</div>
```
```javascript
static actions() {
  return{
    startTour : function(){
    // Your code for getting your dummy targets inside the dom or visual.
    $L( 'lyte-tour' )[0].component.startLyteTour()
    }
  }
}
```
Tour Hint

The "lyte-tour-hint" is the child of the main lyte-tour component. A hint is used to explain particular feature of the app and The explanation is divided into a set of steps. There can be any number of lyte-tour-hint(s) inside the lyte-tour component.

Step 4: Inside your main dummy div create some 1st level wrapper div(s), these div will be your hints.

Step 5: Like parent, hint div(s) must also be controlled with CSS 'display' property. And make sure that the first hint div alone is available visually and the remaining are hidden.

Step 6: There is a property in lyte-tour-hint component which will take your hint-div's class name as the selector, which will help the tour component to navigate to the target Hint.

```html
<lyte-tour class="yourTourClass">
  <lyte-tour-hint lt-prop-selector=".myHint1">
    <!--  Inside this you will be having the lyte-tour-step(s) -->
  </lyte-tour-hint>
</lyte-tour>
```
```html
<div class="yourAppDummyTargets">
  <div class="myHint1">
    <!--  Inside this you will be having your dummy hints -->
  </div>
</div>
```
Tour Step

The "lyte-tour-step" is the last level child of the lyte-tour component which comes inside lyte-tour-hint and cannot be given as a child to main lyte-tour component and there can be any number of lyte-tour-step inside the hints.

Step 7: Inside the hint div create your dummy target element with the exact same position of the original target element that you need to explain.

Step 8: Give a new class name for the dummy targets, so that it won't cause problem on taking a site tour. For eg: step1, step2, etc.

Step 9: Lyte-tour-step component also has the same property name 'lt-prop-selector', where you will be giving all those dummy target's new class names, here step1, step2, etc.

Custom elements: Lyte-tour-step takes yield inside it where you can give your own style and content to the tour steps.

There are two custom elements available in tour 'lyte-tour-next-button' and 'lyte-tour-prev-button' which can be helpful for the user to navigate back and forth between the steps.

```html
<lyte-tour class="yourTourClass">
  <lyte-tour-hint lt-prop-selector=".myHint1">
    <lyte-tour-step lt-prop-selector=".myStep1">
      <template is="registerYield" yield-name="lyteTourStep">
        <!-- Here goes you contents part -->
        <lyte-tour-next-button> Next </lyte-tour-next-button>
        <lyte-tour-prev-button> Previous </lyte-tour-prev-button>
      </template>
    </lyte-tour-step>
  </lyte-tour-hint>
</lyte-tour>
```
```html
<div class="yourAppDummyTargets">
  <div class="myHint1">
    <div class="myStep1"> </div> <!--  This is your target div -->
  </div>
</div>
```

---

## tree

### tree - overview

Tree

The tree is an UI element that gets an array of objects, containing children in it which is also an array of objects and displays these data in a tree (OR) in a folder structure.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-tree.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
With tree-icon

The tree icon is a custom element that has been created to perform the toggle operation in the tree component.

```html
<lyte-tree lt-prop-data={{treeData}} lt-prop-open-class="open" lt-prop-close-class="close">
  <template is="registerYield" yield-name="content">
    <lyte-tree-content>
      <lyte-tree-icon lyte-custom-icon="true">
        <div class="collapseBox">
          <div class="arrow"> </div>
        </div>
        <p class="treeValue"> {{listValue.Name}} </p>
      </lyte-tree-icon >
    </lyte-tree-content>
  </template>
</lyte-tree>
```
 

Car

 

SKODA

Rapid

Fabia

 

AUDI

A3

A4

A6

Q7

 

Bike

 

KTM

RC 390

RC 200

 

Bajaj

 

Pulsar

RS 200

AS 200

Without tree-icon

Without using the "lyte-tree-icon" component, one cannot perform the toggle operation in the tree component. By default all the tree elements will be in open state.

```html
<lyte-tree lt-prop-data={{treeData}} lt-prop-open-class="open" lt-prop-close-class="close">
  <template is="registerYield" yield-name="content">
    <lyte-tree-content>
      <p class="treeValue"> {{listValue.Name}} </p>
    </lyte-tree-content>
  </template>
</lyte-tree>
```

Car

SKODA

Rapid

Fabia

AUDI

A3

A4

A6

Q7

Bike

KTM

RC 390

RC 200

Bajaj

Pulsar

RS 200

AS 200

Sortable tree

For tree with sortable property as true we have introduced a new wrapper div for every node kindly check your CSS after enabling sortable for your tree.!

Tree with sortable support is where you can drag a tree node and drop anywhere either as a child or as a sibling for a node.

```html
<lyte-tree lt-prop-data={{treeData}} lt-prop-open-class="open" lt-prop-close-class="close" lt-prop-sortable=true>
  <template is="registerYield" yield-name="content">
  <lyte-tree-content>
    <lyte-tree-icon lyte-custom-icon=true>
      <div class="collapseBox">
        <i class="arrow up"></i>
      </div>
      <p class="treeValue"> {{listValue.Name}} </p>
    </lyte-tree-icon>
  </lyte-tree-content>
  </template>
</lyte-tree>
```
 ui-components/
 components/
 helpers/
helpers.js
 images/
lyte_ui_sprite.svg
clipboard.png
 styles/
lyte-ui-accordion.css
lyte-ui-alert.css
lyte-ui-autocomplete.css
lyte-ui-breadcrumb.css
(other css files)
lyte-accordion.js
lyte-alert.js
lyte-autocomplete.js
lyte-breadcrumb.js
(other js files)
 plugins/
lyte-animate.js
lyte-draggable.js
lyte-droppable.js
lyte-mentionsInput.js
(other plugins)
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
(other theme files)
 styles/
accordion.less
alert.less
autocomplete.less
breadcrumb.less
(other style files)
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
(other theme files)
 vibrant/
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
(other theme files)
compiler.less
config.less
 I18n/ (Only available from V1_0_2)
bg_BG.js
cs_CZ.js
da_DKjs
de_DE.js
(other I18n files)
Horizontal tree

Horizontal tree structure is where the tree is used as a horizontal flowchart. It takes the data as a mentioned in api section. In horizontal tree the lyte-tree-icon is madate.

```html
<lyte-tree lt-prop-data={{treeData}} lt-prop-structure-type="hierarchy" lt-prop-open-class="open" lt-prop-close-class="close">
  <template is="registerYield" yield-name="content">
    <lyte-tree-icon lyte-custom-icon=true>
      <div class="collapseBox">
        <i class="arrow up"></i>
      </div>
      <p class="treeValue"> {{listValue.Name}} </p>
    </lyte-tree-icon>
  </template>
</lyte-tree>
```
 Automobiles
Console tree

Console tree is a tree representation of the data as it appears in the developer console.

Array Structure
```html
<lyte-tree class="dataTree" lt-prop-structure-type="data" lt-prop-array-data="one,two,three,[object Object],[object Object],[object Object],eleven,twelve"></lyte-tree>
```
[ 'one' , 'two' , Array(2) , {...} , {...} , 'eleven' , 'twelve' ]
Json Structure
```html
<lyte-tree class="dataTree" lt-prop-structure-type="data" lt-prop-array-data="one,two,three,[object Object],[object Object],[object Object],eleven,twelve"></lyte-tree>
```
{ one: Array(3) , six: 7 , eight: Array(2) }

Styles used for tree in "Tree Documentation" is not mentioned in Example snippet.

### tree - api

Properties

All properties should be prefixed with lt-prop.

Data
Description	:	The data must be an array of objects that contains a property called "children" in it. To get a closed tree element by default have a boolean property called "collapsed", by giving true the tree element will be closed by default.
Datatype	:	array
Children Value
Description	:	This property is used to mention the name that has been used as a children of a tree. Default will be 'children' and if user has the children array in some other name then this property can be used.
Open Class
Description	:	The "lt-prop-open-class" is the attribute that gets a string value as input. The given string will be set to the "lyte-tree-icon" button as a class for "CSS." styling
Datatype	:	string
Close Class
Description	:	The "lt-prop-close-class" is the attribute that gets a string value as input. The given string will be set to the "lyte-tree-icon" button as a class for "CSS" styling
Datatype	:	string

"lt-prop-open-class" and "lt-prop-close-class" both can be given at the same time.

Leaf Node Class
Description	:	The "lt-prop-leaf-node-class" is the attribute that gets a string value as input. The given string will be set to the "lyte-tree-icon" button as a class for "CSS" styling. This leaf node class will be set to the last leaf element of the tree where it has no children in it.
Datatype	:	string
Sortable
Description	:	Setting this property to true will enable the drag and drop functionality in lyte tree.
Default	:	false
Scroll Speed
Description	:	This is a number property where you can give on what speed the tree should scroll when dragging an element outside the tree's boundary.
Default	:	5
Structure Type
Description	:	Structure type is the property which specifies which type of tree visual must be shown. Default will be file structure.
Types	:	File , Horizontal , Data
Array Data
Description	:	The lt-prop-array-data is used to give the data for the tree type data, which will be of datatype array that can contain object structure inside it but should be enclosed in an array
Json Data
Description	:	The lt-prop-json-data is used to give the data for the tree type data, which will be of datatype object that can contain array structure inside it but should be enclosed in an Object
Data Properties
collapsed
Description	:	This is a property that has to be added in the tree data as a boolean value that with key "collapsed", when given "true" the tree will skip the rendering of the children tree of that node. The default value is false when the user has not mentioned any boolean and the tree will render all the children tree nodes.
hasChild
Description	:	This is a property that has to be added in the tree data as a boolean value that with key "hasChild", when given "true" the tree will take the current node as a parent node and the tree icons will be appended in a closed state so that this node may have children inside it in future.

"lt-prop-open-class" and "lt-prop-close-class" both can be given at the same time.

Methods

The following are the methods of tree.

on-toggle
Description	:	The "on-toggle" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, using the index value provided by the component you can directly take the specific object in the tree data
Function Name	:	on-toggle
Index Name	:	listIndex
on-toggle-end
Description	:	The "on-toggle-end" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, using the index value provided by the component you can directly take the specific object in the tree data. This function will be called at the end of the tree open/close animation.
Function Name	:	on-toggle-end
Index Name	:	listIndex
on-before-open
Description	:	The "on-before-open" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, before the tree is been opened.
Function Name	:	on-before-open
on-open
Description	:	The "on-open" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, after the tree is been opened.
Function Name	:	on-open
on-before-close
Description	:	The "on-before-close" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, before the tree is been closed.
Function Name	:	on-before-close
on-close
Description	:	The "on-close" is the callback function provided by the component to the user. Using this callback function the user can make changes in the tree data like adding or removing the record, after the tree is been closed.
Function Name	:	on-close
on-drag-start
Description	:	The "on-drag-start" callback is triggered when a tree node is being clicked and started to drag
Function Name	:	on-drag-start
on-before-drag
Description	:	The "on-before-drag" callback is triggered when a tree node is being dragged and before the top and left value of the dragged element is being applied.
Function Name	:	on-before-drag
on-drag
Description	:	The "on-drag" callback is triggered when a tree node is being dragged and after the top and left value of the dragged element is being applied.
Function Name	:	on-drag
on-before-drop
Description	:	The "on-before-drop" callback will be executed before the tree node is being dropped
Function Name	:	on-before-drop
on-drop
Description	:	The "on-drop" callback will be executed after the tree node is being dropped and the data is changed
Function Name	:	on-drop
Utils
closeIcon
Description	:	This util is used to change the class list of the lyte-tree-icon from opened state to closed state without triggering click and callbacks corresponding to toggle action. This util takes an argument which would be the icon that has to be closed. This util affects only the style of the icon not the function of the tree.
openIcon
Description	:	This util is used to change the class list of the lyte-tree-icon from closed state to opened state without triggering click and callbacks corresponding to toggle action. This util takes an argument which would be the icon that has to be opened. This util affects only the style of the icon not the function of the tree.
showIcon
Description	:	This util is used to show the hidden lyte-tree-icon visually, the first parameter should be the body tag of the lyte-tree-icon which you wish to show, and the second param is optional which is a boolean param when setting it to true the icon will be rendered in opened state and the default will be the icon in closed state.
removeIcon
Description	:	This util is used to hide the visible lyte-tree-icon.
closeTree
Description	:	This util is used to close a tree from javascript without triggering the click action and the callbacks corresponding to that. This util takes the 'lyte-tree-body' tag as the argument of the parent tree node that has to be closed.
openTree
Description	:	This util is used to open a tree from javascript without triggering the click action and the callbacks corresponding to that. This util takes the 'lyte-tree-body' tag as the argument of the parent tree node that has to be opened.
expandAll
Description	:	This util is used to open all the tree nodes that has been rendered in the dom without triggering click action and callbacks corresponding to that.
collapseAll
Description	:	This util is used to close all the tree nodes that has been rendered in the dom without triggering click action and callbacks corresponding to that.

---

## wormhole

### wormhole - overview

Wormhole

Lyte-wormhole, is an UI element used to append already rendered DOM element into anywhere in the document without losing its binding. It also regulates action navigation when the DOM is appended outside its parent component. Lyte-input, Lyte-messagebox,lyte-modal,lyte-popover internally uses lyte-wormhole for appending their contents to body



Dependencies
```html
<!-- Individual component files -->
import "@zoho/lyte-ui-components/components/lyte-svg.js"
```
Wormhole

Lyte wormhole appends itself( lyte-wormhole tag ) to the given matched query ( default body ).

```html
<lyte-wormhole lt-prop-query = ".wormholeList1">
	 <template is = "registerYield" yield-name = "lyte-content">
	 		component / plain text
	 <template>
</lyte-wormhole>
```
This is first container
Wormhole content. Now appended to container 1
This is second container
This is third container
Container 1

In this example, while changing ltPropQuery( dropdown options ) lyte-wormhole is appended to corresponding element.

---

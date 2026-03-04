# sLyte DOM API Reference ($L)

Complete reference for lyte-dom, a lightweight jQuery-like DOM manipulation library.

Use `$L()` as the selector function (equivalent to jQuery's `$()`).

## Table of Contents

- [Category Overviews](#category-overviews)
- [Individual API Methods](#individual-api-methods)

## Category Overviews

### intro

Introduction
Introduction

Lyte-dom is an extremely light weight javascript library which provides utilities for DOM traversal, event handling and ajax requests. Lyte-dom comes in modules split according to the tasks they achieve, so developers can import their module of choice and leave the others out allowing you to ship an extremely light weight third party to your production site.

Getting started

You can download the latest lyte-dom zip from here. If you use bower, add it to the dependency list as follows. Example:

router.js
{ 

		...

		"dependencies" : { 

				"@zoho/lyte-dom" : '2.0.23',

				...

		 }

		...

 }

As mentioned above, you can import the module of your choice into your app and get started. There are 4 modules in lyte-dom. They are

utils.js
This registers lyte-dom to your app and provides query selecting and basic functions like each, grep, map, merge, fastdom, etc. This file needs to be added to your app for the other modules to work.( Mandatory ) - 6 kb
traversal.js
Provides functionalities for advanced traversal like parentsUntil, siblings, etc. ( Optional ) - 6 kb
events.js
Provides functionalities for event handling, event delegation, etc. ( Optional ) - 6 kb
ajax.js
Provides functionalities to make an ajax request ( Optional ) - 6 kb

Only the utils.js is mandatory which makes basic registration. Other modules can be added based on user preference.
The folder structure of lyte-ui-components is as follows:




lyte-DOM/

lyte-dom-migrate.js

lyte-dom-migrate.min.js

lyte-dom.js

lyte-dom.min.js

modules/

lyte-dom-ajax.js

lyte-dom-events.js

lyte-dom-traversal.js

lyte-dom-utils.js

lyte-dom-ajax.min.js

lyte-dom-events.min.js

lyte-dom-traversal.min.js

lyte-dom-utils.min.js

Simple overview

Query select any element in the DOM by making use of the lyte-dom's query selector syntax. The following example retrieves all inputs of type checkbox which are checked.

$L('input[type="checkbox"]:checked');

Make use of chaining to perform dom traversals and write less verbose code. The following example demonstrates chaining where all checkboxes which are checked are queried and the closest parent tag of type lyte-checkbox is selected. From there all next siblings until lyte-checkbox are retrieved.

$L('input[type="checkbox"]:checked').closest ('lyte-checkbox').nextUntil ('lyte-checkbox');

Register events with lyte-dom with ease. In the following example, a click event is bound to all elements with class clickable.

$L('.clickable').on ('click',function (){ 

		 // Perform your operation over here

 });

Perform ajax requests. Following example makes an ajax request to /users and converts the response to type json and is further processed in the success callback.

$L.ajax({ 

		'url' : '/users',

		'dataType' : 'json',

		'success' : function (res ){ 

				 // work with response

		 }

 });

Click this link to download the latest version of Lyte-DOM and check out the release notes before using it

---

### Selectors

Selectors
$L( "*" )

selects all elements

:checked

selects elements that are checked

$L("parent > child")

selects specified child from specified parent

$L( ".class" )

get elements with specified class

Contains selector [name *= "value"]

get the elements with attribute 'name' that contains the substring 'value'

Contains prefix selector [name |= "value"]

get the elements with attribute 'name' that contains the substring 'value' at the prefix followed by a hyphen

Contains word selector [name ~= "value"]

get the elements with attribute 'name' that contains the substring 'value' separated by spaces

$L( "ancestor descendant" )

selects all descendants from specified ancestor.

:disabled

selects elements that are disabled

$L( "element" )

selects elements with tagName element

:empty

select nodes that are empty without any content

:enabled

selects elements that are enabled

Equal selector [name = "value"]

get the elements with attribute 'name' that is exactly equal to the 'value'

:first-child

from set of matched elements get the elements that are first child to their parents

:first-of-type

from the siblings having same name selects the first element

:focus

selects focused element

Has selector [name]

get the elements that has specified attribute

$L( "#id" )

get elements with specified id.

:lang()

selects elements with specified language.

:last-child

from set of matched elements get the elements that are last child to their parents

:last-of-type

From the siblings having same name selects the last element

Multiple selector [name1 = "value1"] [name2 = "value2"]

get the elements that matches all specified filter

$L.( "prev + next" )

select the sibling element immediately preceeded by 'prev' element

$L.( "prev ~ siblings" )

select the sibling elements preceeded by 'prev' element

:not()

get the set of matched elements except the specified selector

:nth-child()

from set of matched elements get the indexed child element

:nth-last-child()

from set of matched elements selects the nth child of each element from last

:nth-last-of-type()

from the siblings having same name selects the nth element from last

:nth-of-type()

from the siblings having same name selects the nth element

:only-child()

from set of matched elements the child element with no siblings are selected

:only-of-type()

selects elements that has no sibling of same type

:root

selects the root element of the document which is the HTML node.

$L( "selector1,selector2,selectorN")

selects elements that matches each selector.

Starts with selector [name ^= "value"]

selects elements with attributes whose value begin with a specified string.

:target

select the element indicated by the fragment identifier of the document's URI.

:visible

returns the elements which are visible.

---

### Selectors - attributes

Selectors
Category : Attribute selectors
Contains selector [name *= "value"]

get the elements with attribute 'name' that contains the substring 'value'

Contains prefix selector [name |= "value"]

get the elements with attribute 'name' that contains the substring 'value' at the prefix followed by a hyphen

Contains word selector [name ~= "value"]

get the elements with attribute 'name' that contains the substring 'value' separated by spaces

Equal selector [name = "value"]

get the elements with attribute 'name' that is exactly equal to the 'value'

Has selector [name]

get the elements that has specified attribute

Multiple selector [name1 = "value1"] [name2 = "value2"]

get the elements that matches all specified filter

Starts with selector [name ^= "value"]

selects elements with attributes whose value begin with a specified string.

---

### Selectors - basic

Selectors
Category : Basic selectors
$L( "*" )

selects all elements

$L( ".class" )

get elements with specified class

$L( "element" )

selects elements with tagName element

$L( "#id" )

get elements with specified id.

$L( "selector1,selector2,selectorN")

selects elements that matches each selector.

---

### Selectors - filters

Selectors
Category : Filter selectors
:empty

select nodes that are empty without any content

:first-child

from set of matched elements get the elements that are first child to their parents

:first-of-type

from the siblings having same name selects the first element

:focus

selects focused element

:lang()

selects elements with specified language.

:last-child

from set of matched elements get the elements that are last child to their parents

:last-of-type

From the siblings having same name selects the last element

:not()

get the set of matched elements except the specified selector

:nth-child()

from set of matched elements get the indexed child element

:nth-last-child()

from set of matched elements selects the nth child of each element from last

:nth-last-of-type()

from the siblings having same name selects the nth element from last

:nth-of-type()

from the siblings having same name selects the nth element

:only-child()

from set of matched elements the child element with no siblings are selected

:only-of-type()

selects elements that has no sibling of same type

:root

selects the root element of the document which is the HTML node.

:target

select the element indicated by the fragment identifier of the document's URI.

:visible

returns the elements which are visible.

---

### Selectors - forms

Selectors
Category : Form selectors
:checked

selects elements that are checked

:disabled

selects elements that are disabled

:enabled

selects elements that are enabled

:focus

selects focused element

---

### Selectors - hierarchy

Selectors
Category : Hierarchy selectors
$L("parent > child")

selects specified child from specified parent

$L( "ancestor descendant" )

selects all descendants from specified ancestor.

$L.( "prev + next" )

select the sibling element immediately preceeded by 'prev' element

$L.( "prev ~ siblings" )

select the sibling elements preceeded by 'prev' element

---

### Attributes

Attributes
.addClass()

adds one or more class to the set of matched elements

.attr()

get attribute value of first matched element or set attribute value to the set of matched elements

.hasClass()

says set of the matched elements that has specified class or not

.prop()

gets the property value of the first element in a set of matched elements or set the property value in a set of matched elements.

.removeAttr()

removes the attribute of each element in the set of matched elements.

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.removeProp()

removes a property in each element in the set of matched elements.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

---

### CSS

CSS
.addClass()

adds one or more class to the set of matched elements

.css()

get CSS property of first matched element or set CSS property to the matched elements.

.hasClass()

says set of the matched elements that has specified class or not

.height()

get the height of the first matched element or it sets the height to the set of all matched elements

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.offset()

for the first matched element get or set the left and top co-ordinates (relative to the document)

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.position()

returns the coordinates relative to the offset parent.

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### Dimensions

Dimensions
.height()

get the height of the first matched element or it sets the height to the set of all matched elements

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### Events

Events
.blur()

trigger the binded handler when the element lost its focus

.change()

trigger the binded handler when the value of the element is changed

.click()

trigger the binded handler when the element is clicked

.contextmenu()

trigger the binded handler when the element is right clicked

.dblclick()

trigger the binded handler when the element is clicked twice

event.data

data in the event object that is passed to event handler

event.delegateTarget

gives the element to which event handler is attached

event.isDefaultPrevented

returns true if default is prevented

event.isImmediatePropagationStopped

says immediate propagation is stopped or not

event.isPropagationStopped

says propagation is stopped or not

event.preventDefault()

prevents default actions

event.result

among all handlers triggered by an event the last value returned will be in event.result. And will be undefined if nothing is returned

event.stopImmediatePropagation()

stops execution of other handlers binded with the same event and and prevents event bubbling

event.stopPropagation()

prevents event bubbling

.focus()

trigger the binded handler when the element is focused

.focusin()

trigger the binded handler when the element is focused in

.focusout()

trigger the binded handler when the element is focused out

.keydown()

trigger the binded handler when 'keydown' event occurs

.keypress()

trigger the binded handler when 'keypress' event occurs

.keyup()

trigger the binded handler when 'keyup' event occurs

.mousedown()

trigger the binded handler when 'mousedown' event occurs

.mouseenter()

trigger the binded handler when 'mouseenter' event occurs

.mouseleave()

trigger the binded handler when 'mouseleave' event occurs

.mousemove()

trigger the binded handler when 'mousemove' event occurs

.mouseout()

trigger the binded handler when 'mouseout' event occurs

.mouseover()

trigger the binded handler when 'mouseover' event occurs

.mouseup()

trigger the binded handler when 'mouseup' event occurs

.off()

unbinds data and handler for the events mentioned

.on()

binds data and handler for the events mentioned

.one()

binds data and handler for the events mentioned which can be triggered once only

.ready()

registers a handler to be executed as soon as the DOM is safe to manipulate.

.resize()

registers a handler which is called when a resize event is fired or to fire the resize event manually.

.scroll()

binds the scroll event or trigger a scroll event to each element in the set of matched elements.

.select()

registers a select event or trigger a select in each element of matched set.

.submit()

registers a handler or trigger a submit event in each element in the matched set.

.trigger()

executes all events of a particular type attached to each element of the matched set.

.triggerHandler()

executes all events of particular type on the element.

---

### Events - browserevents

Events
Category : Browser events
.resize()

registers a handler which is called when a resize event is fired or to fire the resize event manually.

.scroll()

binds the scroll event or trigger a scroll event to each element in the set of matched elements.

---

### Events - eventhandler

Events
Category : Event Handlers
.off()

unbinds data and handler for the events mentioned

.on()

binds data and handler for the events mentioned

.one()

binds data and handler for the events mentioned which can be triggered once only

.trigger()

executes all events of a particular type attached to each element of the matched set.

.triggerHandler()

executes all events of particular type on the element.

---

### Events - eventobject

Events
Category : Event Object
event.data

data in the event object that is passed to event handler

event.delegateTarget

gives the element to which event handler is attached

event.isDefaultPrevented

returns true if default is prevented

event.isImmediatePropagationStopped

says immediate propagation is stopped or not

event.isPropagationStopped

says propagation is stopped or not

event.preventDefault()

prevents default actions

event.result

among all handlers triggered by an event the last value returned will be in event.result. And will be undefined if nothing is returned

event.stopImmediatePropagation()

stops execution of other handlers binded with the same event and and prevents event bubbling

event.stopPropagation()

prevents event bubbling

---

### Events - formevents

Events
Category : Form events
.blur()

trigger the binded handler when the element lost its focus

.change()

trigger the binded handler when the value of the element is changed

.focus()

trigger the binded handler when the element is focused

.focusin()

trigger the binded handler when the element is focused in

.focusout()

trigger the binded handler when the element is focused out

.select()

registers a select event or trigger a select in each element of matched set.

.submit()

registers a handler or trigger a submit event in each element in the matched set.

---

### Events - keyboardevents

Events
Category : Keyboard events
.keydown()

trigger the binded handler when 'keydown' event occurs

.keypress()

trigger the binded handler when 'keypress' event occurs

.keyup()

trigger the binded handler when 'keyup' event occurs

---

### Events - loadingrevents

Events
Category : Loading events
.ready()

registers a handler to be executed as soon as the DOM is safe to manipulate.

---

### Events - mouseevents

Events
Category : Mouse Events
.click()

trigger the binded handler when the element is clicked

.contextmenu()

trigger the binded handler when the element is right clicked

.dblclick()

trigger the binded handler when the element is clicked twice

.hover()

trigger handlers when hovered in or out

.mousedown()

trigger the binded handler when 'mousedown' event occurs

.mouseenter()

trigger the binded handler when 'mouseenter' event occurs

.mouseleave()

trigger the binded handler when 'mouseleave' event occurs

.mousemove()

trigger the binded handler when 'mousemove' event occurs

.mouseout()

trigger the binded handler when 'mouseout' event occurs

.mouseover()

trigger the binded handler when 'mouseover' event occurs

.mouseup()

trigger the binded handler when 'mouseup' event occurs

---

### Forms

Forms
.blur()

trigger the binded handler when the element lost its focus

.change()

trigger the binded handler when the value of the element is changed

.focus()

trigger the binded handler when the element is focused

.focusin()

trigger the binded handler when the element is focused in

.focusout()

trigger the binded handler when the element is focused out

.select()

registers a select event or trigger a select in each element of matched set.

.submit()

registers a handler or trigger a submit event in each element in the matched set.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

---

### Manipulation

DOM Manipulation
.addClass()

adds one or more class to the set of matched elements

.attr()

get attribute value of first matched element or set attribute value to the set of matched elements

.css()

get CSS property of first matched element or set CSS property to the matched elements.

.hasClass()

says set of the matched elements that has specified class or not

.height()

get the height of the first matched element or it sets the height to the set of all matched elements

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.position()

returns the coordinates relative to the offset parent.

.prop()

gets the property value of the first element in a set of matched elements or set the property value in a set of matched elements.

.removeAttr()

removes the attribute of each element in the set of matched elements.

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.removeProp()

removes a property in each element in the set of matched elements.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

.text()

gets the text content of each element and its descendants or sets the text of each element in the matced element.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### Manipulation - class

DOM Manipulation
Category : Class attributes
.addClass()

adds one or more class to the set of matched elements

.hasClass()

says set of the matched elements that has specified class or not

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

---

### Manipulation - common

DOM Manipulation
Category : Common attributes
.attr()

get attribute value of first matched element or set attribute value to the set of matched elements

.prop()

gets the property value of the first element in a set of matched elements or set the property value in a set of matched elements.

.removeAttr()

removes the attribute of each element in the set of matched elements.

.removeProp()

removes a property in each element in the set of matched elements.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

---

### Manipulation - style

DOM Manipulation
Category : Style attributes
.css()

get CSS property of first matched element or set CSS property to the matched elements.

.height()

get the height of the first matched element or it sets the height to the set of all matched elements

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.position()

returns the coordinates relative to the offset parent.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

.text()

gets the text content of each element and its descendants or sets the text of each element in the matced element.

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### Traverse

Traverse
.add()

add the arugument elements to the set of matched elements lyteDomObj

.addBack()

add the previous set of matched elements to the current returned elements

.children()

get chidren of the matched selectors

.closest()

traverse through the ancestors and selects first element matches the selector. The traversal begins with the element itself

.contents()

get the children of matched elements including text and comments

.each()

iterate through matched elements, and execute function for each element until false is returned

.end()

at the end of filtering in current chain returns the previous set of matched elements

.eq()

get matched element at specified index

.find()

from each matched element get the specified descendants.

.first()

from set of matched elements get the first element

.is()

from the set of matched elements checks atleast one of the elements match with the argument

.last()

from set of matched elements get the last element

.map()

iterate through matched elements, and execute the function for each element then return as lyteDomObj

.next()

returns the immediate next sibling in the set of all matched elements.

.nextAll()

returns all the next element siblings for each element in the set of matched elements.

.nextUntil()

return all the next siblings of each element in the set of matched elements until a particular element.

.not()

from the set of matched elements and removes the element matches selector

.offsetParent()

get the first positioned ancestor element

.parent()

returns the immediate parent of the set of all matched elements.

.parents()

returns all the parents in the set of the matched elements.

.parentsUntil()

traverses the dom until it reaches an element matching the selector and stops as soon as the first matching element is found.

.prev()

returns the immediate previous sibling in the set of all matched elements.

.prevAll()

returns all the previous element siblings for each element in the set of matched elements.

.prevUntil()

returns all the previous siblings of each element in the set of matched elements until a particular element.

.siblings()

Get the siblings of the set matched elements.

---

### Traverse - filter

Traverse
Category : Filtering traversal
.add()

add the arugument elements to the set of matched elements lyteDomObj

.addBack()

add the previous set of matched elements to the current returned elements

.eq()

get matched element at specified index

.first()

from set of matched elements get the first element

.is()

from the set of matched elements checks atleast one of the elements match with the argument

.last()

from set of matched elements get the last element

.map()

iterate through matched elements, and execute the function for each element then return as lyteDomObj

.not()

from the set of matched elements and removes the element matches selector

---

### Traverse - misc

Traverse
Category : Miscellaneous traversal
.add()

add the arugument elements to the set of matched elements lyteDomObj

.addBack()

add the previous set of matched elements to the current returned elements

.contents()

get the children of matched elements including text and comments

.end()

at the end of filtering in current chain returns the previous set of matched elements

.not()

from the set of matched elements and removes the element matches selector

---

### Traverse - tree

Traverse
Category : Tree traversal
.children()

get chidren of the matched selectors

.closest()

traverse through the ancestors and selects first element matches the selector. The traversal begins with the element itself

.find()

from each matched element get the specified descendants.

.next()

returns the immediate next sibling in the set of all matched elements.

.nextAll()

returns all the next element siblings for each element in the set of matched elements.

.nextUntil()

return all the next siblings of each element in the set of matched elements until a particular element.

.offsetParent()

get the first positioned ancestor element

.parent()

returns the immediate parent of the set of all matched elements.

.parents()

returns all the parents in the set of the matched elements.

.parentsUntil()

traverses the dom until it reaches an element matching the selector and stops as soon as the first matching element is found.

.prev()

returns the immediate previous sibling in the set of all matched elements.

.prevAll()

returns all the previous element siblings for each element in the set of matched elements.

.prevUntil()

returns all the previous siblings of each element in the set of matched elements until a particular element.

.siblings()

Get the siblings of the set matched elements.

---

### Offset

Offset
.offset()

for the first matched element get or set the left and top co-ordinates (relative to the document)

.offsetParent()

get the first positioned ancestor element

.position()

returns the coordinates relative to the offset parent.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

---

### Data

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

### Miscellaneous

Miscellaneous
.data()

get and set arbitrary data to the first element in the set of matched elements

.each()

iterate through matched elements, and execute function for each element until false is returned

.get()

get matched element at specified index

.removeData()

removes arbitrary data from the first element in the set of matched elements.

.toArray()

converts the lyteDomObj to an array of dom elements.

---

### Utilities

Utilities
$L.each()

iterate through the array or object, and execute callback for each element until false is returned

$L.extend()

receives two or more objects and merge to the first object

$L.grep()

filter the array elements based on the boolean value returned

$L.map()

iterate through an array or object and returns a new one with function returned value

$L.merge()

merge two arrays into the first array

$L.parse()

returns a object from valid a stringified object

$L.search()

returns a array from searched array

$L.fastdom.measure()

batch of read operations in dom

$L.fastdom.mutate()

batch of write operations in dom

$L.fastdom.clear()

To remove the callback of measure and mutate from fastdom

$L.rtlScrollType

For Rtl, horizontal scrollbar has different implementations in different browsers. $L.rtlScrollType is used to detect scroll type of the particular browser

.indexOf()

return the first index at which a given element can be found in the array, or -1 if it is not present.

---

### API

API Documentation
.add()

add the arugument elements to the set of matched elements lyteDomObj

.addBack()

add the previous set of matched elements to the current returned elements

.addClass()

adds one or more class to the set of matched elements

.ajaxComplete()

a handler is registered and triggered when an ajax request is completed

.ajaxError()

a handler is registered and triggered when an ajax request is failed

.ajaxSend()

a handler is registered and triggered before an ajax request is sent

.ajaxStart()

a handler is registered and triggered when the first ajax request is started

.ajaxStop()

a handler is registered and triggered when all the ajax requests are done.

.ajaxSuccess()

a handler is registered and triggered when an ajax request is successfully completed

$L( "*" )

selects all elements

.attr()

get attribute value of first matched element or set attribute value to the set of matched elements

.blur()

trigger the binded handler when the element lost its focus

.change()

trigger the binded handler when the value of the element is changed

:checked

selects elements that are checked

$L("parent > child")

selects specified child from specified parent

.children()

get chidren of the matched selectors

$L( ".class" )

get elements with specified class

.click()

trigger the binded handler when the element is clicked

.closest()

traverse through the ancestors and selects first element matches the selector. The traversal begins with the element itself

Contains selector [name *= "value"]

get the elements with attribute 'name' that contains the substring 'value'

Contains prefix selector [name |= "value"]

get the elements with attribute 'name' that contains the substring 'value' at the prefix followed by a hyphen

Contains word selector [name ~= "value"]

get the elements with attribute 'name' that contains the substring 'value' separated by spaces

.contents()

get the children of matched elements including text and comments

.contextmenu()

trigger the binded handler when the element is right clicked

.css()

get CSS property of first matched element or set CSS property to the matched elements.

.data()

get and set arbitrary data to the first element in the set of matched elements

.dblclick()

trigger the binded handler when the element is clicked twice

$L( "ancestor descendant" )

selects all descendants from specified ancestor.

:disabled

selects elements that are disabled

.each()

iterate through matched elements, and execute function for each element until false is returned

$L( "element" )

selects elements with tagName element

.empty()

empties the contents and child nodes inside the matched element

:empty

select nodes that are empty without any content

:enabled

selects elements that are enabled

.end()

at the end of filtering in current chain returns the previous set of matched elements

.eq()

get matched element at specified index

Equal selector [name = "value"]

get the elements with attribute 'name' that is exactly equal to the 'value'

event.data

data in the event object that is passed to event handler

event.delegateTarget

gives the element to which event handler is attached

event.isDefaultPrevented

returns true if default is prevented

event.isImmediatePropagationStopped

says immediate propagation is stopped or not

event.isPropagationStopped

says propagation is stopped or not

event.preventDefault()

prevents default actions

event.result

among all handlers triggered by an event the last value returned will be in event.result. And will be undefined if nothing is returned

event.stopImmediatePropagation()

stops execution of other handlers binded with the same event and and prevents event bubbling

event.stopPropagation()

prevents event bubbling

.find()

from each matched element get the specified descendants.

.first()

from set of matched elements get the first element

:first-child

from set of matched elements get the elements that are first child to their parents

:first-of-type

from the siblings having same name selects the first element

:focus

selects focused element

.focus()

trigger the binded handler when the element is focused

.focusin()

trigger the binded handler when the element is focused in

.focusout()

trigger the binded handler when the element is focused out

.get()

get matched element at specified index

.has()

get the elements that has specified descendant.

Has selector [name]

get the elements that has specified attribute

.hasClass()

says set of the matched elements that has specified class or not

.height()

get the height of the first matched element or it sets the height to the set of all matched elements

$L( "#id" )

get elements with specified id.

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.is()

from the set of matched elements checks atleast one of the elements match with the argument

.keydown()

trigger the binded handler when 'keydown' event occurs

.keypress()

trigger the binded handler when 'keypress' event occurs

.keyup()

trigger the binded handler when 'keyup' event occurs

$L.ajax()

used to make a XMLHttpRequest to a server.

$L.each()

iterate through the array or object, and execute callback for each element until false is returned

$L.extend()

receives two or more objects and merge to the first object

$L.get()

data from the server is loaded using HTTP GET method

$L.getJSON()

JSON encoded object from the server is loaded using HTTP GET method

$L.getScript()

javascript from the server is loaded using HTTP GET method

$L.grep()

filter the array elements based on the boolean value returned

$L.map()

iterate through an array or object and returns a new one with function returned value

$L.merge()

merge two arrays into the first array

$L.parse()

returns a object from valid a stringified object

$L.search()

returns a array from searched array

$L.fastdom.measure()

batch of read operations in dom

$L.fastdom.mutate()

batch of write operations in dom

$L.fastdom.clear()

To remove the callback of measure and mutate from fastdom

$L.post()

data from the server is loaded using HTTP POST method

:lang()

selects elements with specified language.

.last()

from set of matched elements get the last element

:last-child

from set of matched elements get the elements that are last child to their parents

:last-of-type

From the siblings having same name selects the last element

.map()

iterate through matched elements, and execute the function for each element then return as lyteDomObj

.mousedown()

trigger the binded handler when 'mousedown' event occurs

.mouseenter()

trigger the binded handler when 'mouseenter' event occurs

.mouseleave()

trigger the binded handler when 'mouseleave' event occurs

.mousemove()

trigger the binded handler when 'mousemove' event occurs

.mouseout()

trigger the binded handler when 'mouseout' event occurs

.mouseover()

trigger the binded handler when 'mouseover' event occurs

.mouseup()

trigger the binded handler when 'mouseup' event occurs

Multiple selector [name1 = "value1"] [name2 = "value2"]

get the elements that matches all specified filter

.next()

returns the immediate next sibling in the set of all matched elements.

.nextAll()

returns all the next element siblings for each element in the set of matched elements.

.nextUntil()

return all the next siblings of each element in the set of matched elements until a particular element.

$L.( "prev + next" )

select the sibling element immediately preceeded by 'prev' element

$L.( "prev ~ siblings" )

select the sibling elements preceeded by 'prev' element

.not()

from the set of matched elements and removes the element matches selector

:not()

get the set of matched elements except the specified selector

:nth-child()

from set of matched elements get the indexed child element

:nth-last-child()

from set of matched elements selects the nth child of each element from last

:nth-last-of-type()

from the siblings having same name selects the nth element from last

:nth-of-type()

from the siblings having same name selects the nth element

.off()

unbinds data and handler for the events mentioned

.offset()

for the first matched element get or set the left and top co-ordinates (relative to the document)

.offsetParent()

get the first positioned ancestor element

.on()

binds data and handler for the events mentioned

.one()

binds data and handler for the events mentioned which can be triggered once only

:only-child()

from set of matched elements the child element with no siblings are selected

:only-of-type()

selects elements that has no sibling of same type

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.parent()

returns the immediate parent of the set of all matched elements.

.parents()

returns all the parents in the set of the matched elements.

.parentsUntil()

traverses the dom until it reaches an element matching the selector and stops as soon as the first matching element is found.

.position()

returns the coordinates relative to the offset parent.

.prev()

returns the immediate previous sibling in the set of all matched elements.

.prevAll()

returns all the previous element siblings for each element in the set of matched elements.

.prevUntil()

returns all the previous siblings of each element in the set of matched elements until a particular element.

.prop()

gets the property value of the first element in a set of matched elements or set the property value in a set of matched elements.

.ready()

registers a handler to be executed as soon as the DOM is safe to manipulate.

.removeAttr()

removes the attribute of each element in the set of matched elements.

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.removeData()

removes arbitrary data from the first element in the set of matched elements.

.removeProp()

removes a property in each element in the set of matched elements.

.resize()

registers a handler which is called when a resize event is fired or to fire the resize event manually.

:root

selects the root element of the document which is the HTML node.

.scroll()

binds the scroll event or trigger a scroll event to each element in the set of matched elements.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

.select()

registers a select event or trigger a select in each element of matched set.

.siblings()

Get the siblings of the set matched elements.

$L( "selector1,selector2,selectorN")

selects elements that matches each selector.

Starts with selector [name ^= "value"]

selects elements with attributes whose value begin with a specified string.

.submit()

registers a handler or trigger a submit event in each element in the matched set.

:target

select the element indicated by the fragment identifier of the document's URI.

.text()

gets the text content of each element and its descendants or sets the text of each element in the matced element.

.toArray()

converts the lyteDomObj to an array of dom elements.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

.trigger()

executes all events of a particular type attached to each element of the matched set.

.triggerHandler()

executes all events of particular type on the element.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

:visible

returns the elements which are visible.

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### API - ajax

Ajax
$L.ajax()

used to make a XMLHttpRequest to a server.

$L.get()

data from the server is loaded using HTTP GET method

$L.getJSON()

JSON encoded object from the server is loaded using HTTP GET method

$L.getScript()

javascript from the server is loaded using HTTP GET method

$L.post()

data from the server is loaded using HTTP POST method

---

### API - events

Events
.ajaxComplete()

a handler is registered and triggered when an ajax request is completed

.ajaxError()

a handler is registered and triggered when an ajax request is failed

.ajaxSend()

a handler is registered and triggered before an ajax request is sent

.ajaxStart()

a handler is registered and triggered when the first ajax request is started

.ajaxStop()

a handler is registered and triggered when all the ajax requests are done.

.ajaxSuccess()

a handler is registered and triggered when an ajax request is successfully completed

.blur()

trigger the binded handler when the element lost its focus

.change()

trigger the binded handler when the value of the element is changed

.click()

trigger the binded handler when the element is clicked

.contextmenu()

trigger the binded handler when the element is right clicked

.dblclick()

trigger the binded handler when the element is clicked twice

event.data

data in the event object that is passed to event handler

event.delegateTarget

gives the element to which event handler is attached

event.isDefaultPrevented

returns true if default is prevented

event.isImmediatePropagationStopped

says immediate propagation is stopped or not

event.isPropagationStopped

says propagation is stopped or not

event.preventDefault()

prevents default actions

event.result

among all handlers triggered by an event the last value returned will be in event.result. And will be undefined if nothing is returned

event.stopImmediatePropagation()

stops execution of other handlers binded with the same event and and prevents event bubbling

event.stopPropagation()

prevents event bubbling

.focus()

trigger the binded handler when the element is focused

.focusin()

trigger the binded handler when the element is focused in

.focusout()

trigger the binded handler when the element is focused out

.keydown()

trigger the binded handler when 'keydown' event occurs

.keypress()

trigger the binded handler when 'keypress' event occurs

.keyup()

trigger the binded handler when 'keyup' event occurs

.mousedown()

trigger the binded handler when 'mousedown' event occurs

.mouseenter()

trigger the binded handler when 'mouseenter' event occurs

.mouseleave()

trigger the binded handler when 'mouseleave' event occurs

.mousemove()

trigger the binded handler when 'mousemove' event occurs

.mouseout()

trigger the binded handler when 'mouseout' event occurs

.mouseover()

trigger the binded handler when 'mouseover' event occurs

.mouseup()

trigger the binded handler when 'mouseup' event occurs

.off()

unbinds data and handler for the events mentioned

.on()

binds data and handler for the events mentioned

.one()

binds data and handler for the events mentioned which can be triggered once only

.ready()

registers a handler to be executed as soon as the DOM is safe to manipulate.

.resize()

registers a handler which is called when a resize event is fired or to fire the resize event manually.

.scroll()

binds the scroll event or trigger a scroll event to each element in the set of matched elements.

.select()

registers a select event or trigger a select in each element of matched set.

.submit()

registers a handler or trigger a submit event in each element in the matched set.

.trigger()

executes all events of a particular type attached to each element of the matched set.

.triggerHandler()

executes all events of particular type on the element.

---

### API - traversal

Traverse
.addClass()

adds one or more class to the set of matched elements

.attr()

get attribute value of first matched element or set attribute value to the set of matched elements

.children()

get chidren of the matched selectors

.closest()

traverse through the ancestors and selects first element matches the selector. The traversal begins with the element itself

.contents()

get the children of matched elements including text and comments

.css()

get CSS property of first matched element or set CSS property to the matched elements.

.hasClass()

says set of the matched elements that has specified class or not

.height()

get the height of the first matched element or it sets the height to the set of all matched elements

.innerHeight()

get the inner height of the first matched element or it sets the inner height to the set of all matched elements.

.innerWidth()

get the inner width of the first matched element or it sets the inner width to the set of all matched elements.

.next()

returns the immediate next sibling in the set of all matched elements.

.nextAll()

returns all the next element siblings for each element in the set of matched elements.

.nextUntil()

return all the next siblings of each element in the set of matched elements until a particular element.

.offset()

for the first matched element get or set the left and top co-ordinates (relative to the document)

.offsetParent()

get the first positioned ancestor element

.outerHeight()

gets the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements

.outerWidth()

gets the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements

.parent()

returns the immediate parent of the set of all matched elements.

.parents()

returns all the parents in the set of the matched elements.

.parentsUntil()

traverses the dom until it reaches an element matching the selector and stops as soon as the first matching element is found.

.position()

returns the coordinates relative to the offset parent.

.prev()

returns the immediate previous sibling in the set of all matched elements.

.prevAll()

returns all the previous element siblings for each element in the set of matched elements.

.prevUntil()

returns all the previous siblings of each element in the set of matched elements until a particular element.

.prop()

gets the property value of the first element in a set of matched elements or set the property value in a set of matched elements.

.removeAttr()

removes the attribute of each element in the set of matched elements.

.removeClass()

removes either a single or multiple classes or all classes in each element of the set of matched element.

.removeProp()

removes a property in each element in the set of matched elements.

.siblings()

Get the siblings of the set matched elements.

.toggleClass()

either remove or add classes to each element in the matched set based on their presence or absence.

.width()

gets the width of the first element from the set of matched elements or sets the width to the set of all matched elements.

---

### API - utils

Utilities
.add()

add the arugument elements to the set of matched elements lyteDomObj

.addBack()

add the previous set of matched elements to the current returned elements

$L( "*" )

selects all elements

:checked

selects elements that are checked

$L("parent > child")

selects specified child from specified parent

$L( ".class" )

get elements with specified class

Contains selector [name *= "value"]

get the elements with attribute 'name' that contains the substring 'value'

Contains prefix selector [name |= "value"]

get the elements with attribute 'name' that contains the substring 'value' at the prefix followed by a hyphen

Contains word selector [name ~= "value"]

get the elements with attribute 'name' that contains the substring 'value' separated by spaces

.data()

get and set arbitrary data to the first element in the set of matched elements

$L( "ancestor descendant" )

selects all descendants from specified ancestor.

:disabled

selects elements that are disabled

.each()

iterate through matched elements, and execute function for each element until false is returned

$L( "element" )

selects elements with tagName element

.empty()

empties the contents and child nodes inside the matched element

:empty

select nodes that are empty without any content

:enabled

selects elements that are enabled

.end()

at the end of filtering in current chain returns the previous set of matched elements

.eq()

get matched element at specified index

Equal selector [name = "value"]

get the elements with attribute 'name' that is exactly equal to the 'value'

.find()

from each matched element get the specified descendants.

.first()

from set of matched elements get the first element

:first-child

from set of matched elements get the elements that are first child to their parents

:first-of-type

from the siblings having same name selects the first element

:focus

selects focused element

.get()

get matched element at specified index

.has()

get the elements that has specified descendant.

Has selector [name]

get the elements that has specified attribute

$L( "#id" )

get elements with specified id.

.is()

from the set of matched elements checks atleast one of the elements match with the argument

$L.each()

iterate through the array or object, and execute callback for each element until false is returned

$L.extend()

receives two or more objects and merge to the first object

$L.grep()

filter the array elements based on the boolean value returned

$L.map()

iterate through an array or object and returns a new one with function returned value

$L.merge()

merge two arrays into the first array

$L.parse()

returns a object from valid a stringified object

$L.search()

returns a array from searched array

$L.fastdom.measure()

batch of read operations in dom

$L.fastdom.mutate()

batch of write operations in dom

$L.fastdom.clear()

To remove the callback of measure and mutate from fastdom

$L.rtlScrollType

For Rtl, horizontal scrollbar has different implementations in different browsers. $L.rtlScrollType is used to detect scroll type of the particular browser

.indexOf()

return the first index at which a given element can be found in the array, or -1 if it is not present.

:lang()

selects elements with specified language.

.last()

from set of matched elements get the last element

:last-child

from set of matched elements get the elements that are last child to their parents

:last-of-type

From the siblings having same name selects the last element

.map()

iterate through matched elements, and execute the function for each element then return as lyteDomObj

Multiple selector [name1 = "value1"] [name2 = "value2"]

get the elements that matches all specified filter

$L.( "prev + next" )

select the sibling element immediately preceeded by 'prev' element

$L.( "prev ~ siblings" )

select the sibling elements preceeded by 'prev' element

.not()

from the set of matched elements and removes the element matches selector

:not()

get the set of matched elements except the specified selector

:nth-child()

from set of matched elements get the indexed child element

:nth-last-child()

from set of matched elements selects the nth child of each element from last

:nth-last-of-type()

from the siblings having same name selects the nth element from last

:nth-of-type()

from the siblings having same name selects the nth element

:only-child()

from set of matched elements the child element with no siblings are selected

:only-of-type()

selects elements that has no sibling of same type

.removeData()

removes arbitrary data from the first element in the set of matched elements.

:root

selects the root element of the document which is the HTML node.

$L( "selector1,selector2,selectorN")

selects elements that matches each selector.

Starts with selector [name ^= "value"]

selects elements with attributes whose value begin with a specified string.

.scrollLeft()

gives the number of pixels the first element in the set of matched elements scrolled horizontally.

.scrollTop()

gives the number of pixels the first element in the set of matched elements scrolled vertically.

:target

select the element indicated by the fragment identifier of the document's URI.

.text()

gets the text content of each element and its descendants or sets the text of each element in the matced element.

.toArray()

converts the lyteDomObj to an array of dom elements.

.val()

gets the value of the first matched element or sets the value to all the set of matched elements.

:visible

returns the elements which are visible.

---

## Individual API Methods

### ajax

Ajax
.ajaxComplete()

a handler is registered and triggered when an ajax request is completed

.ajaxError()

a handler is registered and triggered when an ajax request is failed

.ajaxSend()

a handler is registered and triggered before an ajax request is sent

.ajaxStart()

a handler is registered and triggered when the first ajax request is started

.ajaxStop()

a handler is registered and triggered when all the ajax requests are done.

.ajaxSuccess()

a handler is registered and triggered when an ajax request is successfully completed

$L.ajax()

used to make a XMLHttpRequest to a server.

$L.get()

data from the server is loaded using HTTP GET method

$L.getJSON()

JSON encoded object from the server is loaded using HTTP GET method

$L.getScript()

javascript from the server is loaded using HTTP GET method

$L.post()

data from the server is loaded using HTTP POST method

---

### ajax

Ajax
Category : Global Events handlers
.ajaxComplete()

a handler is registered and triggered when an ajax request is completed

.ajaxError()

a handler is registered and triggered when an ajax request is failed

.ajaxSend()

a handler is registered and triggered before an ajax request is sent

.ajaxStart()

a handler is registered and triggered when the first ajax request is started

.ajaxStop()

a handler is registered and triggered when all the ajax requests are done.

.ajaxSuccess()

a handler is registered and triggered when an ajax request is successfully completed

---

### ajax

Ajax
Category : Low-level interface
$L.ajax()

used to make a XMLHttpRequest to a server.

---

### ajax

Ajax
Category : Shorthand methods
$L.get()

data from the server is loaded using HTTP GET method

$L.getJSON()

JSON encoded object from the server is loaded using HTTP GET method

$L.getScript()

javascript from the server is loaded using HTTP GET method

$L.post()

data from the server is loaded using HTTP POST method

---

### ajaxComplete

.ajaxComplete( )
This .ajaxComplete() method registers and triggers a handler when an ajax request is completed
API Module : Events
$L.ajaxComplete( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when the request is completed
Examples:
In the example below, when the ajax request is completed the url of the request is placed inside the span by the handler registered with .ajaxComplete(). If the request is done with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ajaxError

.ajaxError( )
This .ajaxError() method registers and triggers a handler when an ajax request is failed
API Module : Events
$L.ajaxError( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when the request is completed with error
Examples:
In the example below, if the ajax request is failed the url of the request is placed inside the span by the handler registered with .ajaxError(). If the request is made with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ajaxSend

.ajaxSend( )
This .ajaxSend() method registers and triggers a handler before an ajax request is sent
API Module : Events
$L.ajaxComplete( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when the request is about to sent
Examples:
In the example below, before an ajax request is sent the url of the request is placed inside the span by the handler registered with .ajaxSend(). If the request is done with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ajaxStart

.ajaxStart( )
This .ajaxStart() method registers and triggers a handler when the first ajax request is started
API Module : Events
$L.ajaxStart( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when the first ajax request is started
Examples:
In the example below, when the first ajax request is started the handler registered with .ajaxStart(). If the request is done with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ajaxStop

.ajaxStop( )
This .ajaxStop() method registers and triggers a handler is when all the ajax requests are done.
API Module : Events
$L.ajaxStop( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when all the ajax requests are done.
Examples:
In the example below, when all the ajax requests are done the handler registered with .ajaxStop(). If the request is done with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ajaxSuccess

.ajaxSuccess( )
This .ajaxSuccess() method registers and triggers a handler is when an ajax request is successfully completed
API Module : Events
$L.ajaxSuccess( handler )
Type : handler( function )
Arguments : event( object ), lXHR( lXHR ) , settings ( object )
Returns : lyteDomObj
the defined handler is binded and triggered when the request is successfully completed
Examples:
In the example below, when the ajax request is successfully completed the url of the request is placed inside the span by the handler registered with .ajaxSuccess(). If the request is done with global setting is false then the registered handler will not be triggered.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-ajax

$L.ajax()

This is used to make a XMLHttpRequest to a server.

API
$L.ajax( url [,options] )
Type: url( String ), options( Object )
Returns: lXHR object
Make a XMLHttpRequest. This function takes a url as parameter which indicates the location of the resource. It can optionally take an object as a parameter which contains various information about request/response like headers, datatype, etc.
Options:
url
Type:
String
Desc:
The location/url where your resource/server is located. An XMLHttpRequest object is created and sent to this URL.


type
Type:
String
Default:
GET
Desc:
This is used to specify the HTTP method type. This can be GET,PUT,POST,PATCH,etc.


headers
Type:
Object
Desc:
This is used to set headers for request. It is an object whose key is the request header name and value is the header value. This sets the X-Requested-With header by default with the value of XmlHttpRequest.


data
Type:
PlainObject or String or Array
Desc:
The data to be sent to the server. It is converted to a query string and is appended to the end of the URL in get requests. It is sent as form parameters in a POST request.


dataType
Type:
String
Desc:
The datatype to which the response needs to be converted to. If no dataType is provided, lyte-dom will try to infer the dataType from the response mime type. These are the dataTypes that are available in lyte-dom - text, html, xml, json, script.


success
Type:
Function
Desc:
The success callback is called when the request succeeds. It gets passed 3 parameters - the data from the server formatted according to the dataType parameter, the statusText of the response and the lXHR object.


error
Type:
Function
Desc:
The error callback is called when the request fails. It gets passed 3 arguments - the lXHR object, the type of error( "error","timeout" or "abort") and optional exception object.


complete
Type:
Function
Desc:
The complete callback is called when the request completes. It is passed in two arguments - the lXHR object and the status of the request


mimeType
Type:
String
Desc:
This is used to override the XHR mime type.


timeout
Type:
Number
Desc:
It is used to set a timeout for the request made. This takes in a value in milliseconds and waits for that specified time for the request to complete. If the request is not completed, then the request is timed out by lyte-dom. Timeout of 0 means no timeout.


contentType
Type:
String
Default:
application/x-www-form-urlencoded; charset=UTF-8
Desc:
This is used to set the content-type header of the request. By default, application/x-www-form-urlencoded; charset=UTF-8 is set as the content-type.


contents
Type:
Object
Desc:
This is used to map the content-type of the response to one of available data type converters. The user can pass his own custom dataType to ajax and can write his own text to dataType converter. The mimeType of the response needs to be mapped to this converter. This is achieved using the contents object. Key is the custom dataType name and value is a regular expression to test the mimeType against.


async
Type:
Boolean
Default:
true
Desc:
The async attribute defines whether the request should be made synchronous or asynchronous. When it is set to false, the request is made synchronous, meaning all execution of javascript is stopped until the response is obtained. For these reasons, its generally better to use async true.


global
Type:
Boolean
Default:
true
Desc:
This is used to fire the global event handlers registered through lyte-dom. The global events here are the ajaxStart, ajaxSend, ajaxSuccess, ajaxComplete, ajaxStop and ajaxError. Set to false to prevent these events from getting triggered.


converters
Type:
Object
Desc:
This is used to convert text data to other forms of data. It is an object whose key is the dataType to dataType map( Eg: "text html" ) and value is the function to achieve the conversion. Currently, only text to other format converter is available.


context
Type:
Object
Default:
Options object which contains information about the request
Desc:
This is the context of the ajax related callbacks in lyte-dom.


xhrFields
Type:
Object
Desc:
A key-value pair mapping where the key represents the properties of the XHR object so that the user can set his desired value. Use this to set the withCredentials field in XHR object.


processData
Type:
Boolean
Default:
true
Desc:
By default the data sent to the server is made to a query string matching the application/x-www-form-urlencoded content-type. If you want to pass in any other content to the server like a DOMDocument, set this parameter to false.


beforeSend
Type:
Function
Desc:
The beforeSend callback is fired just before the ajax request is being made. Use this to prevent the ajax request by returning false. You can also use this to attach headers to the request.


cache
Type:
Boolean
Default:
true
Desc:
This is used to cache data of your HEAD and GET requests. By default, cache is set to true and browser caches your results. But when it is set to false, lyte-dom appends the _={timestamp} to the request url and forces the request to not be cached.
LHXR Object properties
The lXHR object returned in the success/failure/complete callbacks has the following properties
statusText
The status text of the response ( OK, No Content, etc )
status
The statusCode of the response( 200 - OK, 404 - Not Found, etc )
setRequestHeader( key, value )
Set the request header for the XMLHttpRequest where the key is the request header name and value is header value.
responseText
The response of the request in the form of text.
readyState
The readyState value of the XmlHttpRequest.
overrideMimeType( type )
Used to override the mimeType of the request.
getResponseHeader( key )
Get the response header value of that particular key.
getAllResponseHeaders()
Get all the response headers from the response
abort( statusText )
Used to abort the request by passing a relevant statusText.
done( onSuccess )
This is fired when the request succeeds.
fail( onFailure )
This is fired when the request fails.
always( onComplete )
This is fired when the request is complete.
then( onSuccess, onFailure )
The then function can take in the success and failure callbacks and execute them based on the request's status
Ajax Events
Lyte-Dom provides a set of handlers that are executed when they are registered and a request is made. The order of execution of these events are as follows
ajaxStart
This is fired when the first ajax request is fired.
ajaxSend
This is fired just before an ajax request is sent.
ajaxSuccess
This is fired when an ajax request succeeds.
ajaxError
This is fired when an ajax request fails.
ajaxComplete
This is fired when an ajax request completes.
ajaxStop
This is fired when all ajax requests are completed.
Simple Overview:
Requests by default in lyte-dom are sent as GET requests. If you want to send them as POST request specify the type attribute as POST. The object passed to a GET requested to converted to a query string and appended to the URL.Similarly, the object passed to the post request is attached to the request body after being converted to a query string. To prevent this from happening, use processData as false. Requests are also cached by default by the brower, set cache to false to prevent this from happening. Lyte-dom appends a _={timestamp} to the request which prevents it from getting cached. The dataType attribute is used to convert the response to the type specified. Use the callbacks( success, error and complete ) to handle the response sent from the server. The global attribute is used fire events during different stages of the events and the async attribute is used to determine whether the request should be synchronous or asynchronous. Request headers can be passed to the request using the headers option. You can also timeout requests by making use of the timeout attribute.
Examples:
The example below demonstrates how an ajax request is made in lyte-dom. It makes a request to /users and gets a JSON response which is passed as a dataType. The success callback handles the request when it succeeds and the failure callback handles it when it fails. The complete callback is called either way.
Code:
Snippet
It is also possible to send data to the server in ajax by making use of the data parameter. This is demonstrated below
Code:
Snippet

---

### lyte-get

$L.get()
Data from the server is loaded using HTTP GET method by $L.get()
API Module : Ajax
$L.get(url [, data ] [, success ] [, dataType ] )
Type : url( string ), data( object ), success( function ), dataType( string )
Returns : lXHR object
make an HTTP request with GET method for the given url and send the given data with it. If the request is succesfully completed success function is executed. Data from the server must be on the dataType mentioned
$L.get([settings] )
Type : settings( object )
Returns : lXHR object
make an HTTP request with GET method and settings which is an object that configure AJAX request
Examples:
For more details about url, data, success, dataType and settings refer $L.ajax() . The below example shows how to make an get request. This makes an GET request with the url and data given then execute success function in case of success else fail function is executed.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-getJSON

$L.getJSON()
JSON encoded object from the server is loaded using HTTP GET method by $L.getJSON()
API Module : Ajax
$L.getJSON(url [, data ], [, success ] )
Type : url( string ), data( object ), success( function )
Returns : lXHR object
make an HTTP request with GET method for the given url and send the given data with it . If the request is succesfully completed success function is executed.
Examples:
For more details about url, success refer $L.ajax() . The below example shows how to make an get request. This makes an GET request and gets JSON object as response then execute success function in case of success else fail function is executed.Here the dataType of the AJAX request is set to JSON object by default.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-getScript

$L.getScript()
javascript from the server is loaded using HTTP GET method by $L.getScript()
API Module : Ajax
$L.getScript(url [, success ] )
Type : url( string ), success( function )
Returns : lXHR object
make an HTTP request with GET method for the given url. If the request is succesfully completed success function is executed.
Examples:
For more details about url, success refer $L.ajax() . The below example shows how to make an get request. This makes an GET request and gets java script file as response then execute success function in case of success else fail function is executed. Here the dataType of the AJAX request is set to script by default.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-post

$L.post()
Data from the server is loaded using HTTP POST method by $L.post()
API Module : Ajax
$L.post(url [, data ] [, success ] [, dataType ] )
Type : url( string ), data( object ), success( function ), dataType( string )
Returns : lXHR object
make an HTTP request with POST method for the given url and send the given data with it. If the request is succesfully completed success function is executed. Data from the server must be on the dataType mentioned
$L.post([settings] )
Type : settings( object )
Returns : lXHR object
make an HTTP request with POST method and settings which is an object that configure AJAX request
Examples:
For more details about url, data, success, dataType and settings refer $L.ajax() . The below example shows how to make an get request. This makes an GET request with the url and data given then execute success function in case of success else fail function is executed.
Code:
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### addClass

.addClass()
This .addClass() method adds one or more class to the set of matched elements. The classes that are previously added are retained and not replaced.
API Module : Traversal
.addClass( className )
Type : string
Returns : lyteDomObj
Name of the class or classes to be added (classes should be separated by white spaces not comma or other)
.addClass( function )
Type : function
Arguments : index (number) , currentClass (string)
Returns : lyteDomObj
Can be a function which can return className
Examples:
In the below example, two classes are added to the matched element
Code:
Output:
Reload code
Here the class name returned by the defined function is added to the matched element
Code:
Output:
Reload code
In the function, 'index' represents current element index in the set of matched element and its className in currentClass
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### attr

.attr()
This .attr() method gets attribute value of first matched element or set attribute value to the set of matched elements

If only attribute name is given as argument then attribute value is returned. If a value or function that returns a value is also provided then the value is set to the attribute for the set of matched elements
API Module : Traversal
.attr( attributeName )
Type : attributeName( string )
Returns : lyteDomObj
get the value of attribute specified of the first matched element if the attribute available
.attr( attributeName , value )
Type : attributeName( string ) , value( string )
Returns : lyteDomObj
set the value in the attribute specified to the matched elements if the attribute available
.attr( attributeName , function )
Type : attributeName( string ) , function( function )
Arguments : index ( number ) , attribute ( string )
Returns : lyteDomObj
set the value returned from function in the attribute specified to the matched elements if the attribute available
Examples:
Here, .attr() gets id, title, and alt attributes of 'p' tag.
Code:
Output:
Reload code
Now .attr() sets attribute value to the matched element. And the value can be string or object or a function that returns attribute value
Code:
Output:
Reload code
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### hasclass

.hasClass()
The .hasClass() method says set of the matched elements that has specified class or not.

If the matched set of elements has the given class the method returns true else returns false
API Module : Traversal
.hasClass( className )
Type : string
Returns : Boolean
checks any of the matched element has the class mentioned
Examples:
Here all elements are selected and background-color of the elements with classname 'bgColor' is changed
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### prop

.prop()
The .prop() allows us to either get the property value of the first element in a set of matched elements or set the property value in a set of matched elements.
API Module : Traversal
.prop( name )
Type : String
Returns : Depends on the property
This returns the property value of the first element in the set of matched elements.
.prop( name, value )
Type : name( String ), value( depends )
Returns : lyteDomObj
This is used to set the property value in the set of matched elements.
.prop( name, func )
Type : name( String ), func( function )
Returns : lyteDomObj
It can also take in a function as an argument. The function is passed two arguments the index and the value of the property. The return value in the function should be the new value of the property.
.prop( properties )
Type : Object( key value pairs where the key is the property name and the value is the property value )
Returns : lyteDomObj
It can also take an object as an argument. In the object, each key is the name of the property to set and the value is the value of the property.
Examples:
This is going to get the checked property of the checkbox.
Code:
Output:
Reload code
This is going to set the checked property of the checkbox based on its state.
Code:
Output:
Reload code
This is going to demonstrate the .prop() when it takes a function as an argument. The function is passed two parameters, the index of the element in the set of matched elements and the current value of the property. The return value is set as the new value of the property.
Code:
Output:
Reload code
In this example, the argument is passed as an object where is the key is the property name and the value is the property value.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### removeAttr

.removeAttr()
This is used to remove the attribute of each element in the set of matched elements. It makes use of the removeAttribute function of javascript to achieve this.
API Module : Traversal
removeAttr( name )
Type : String
Returns : lyteDomObj
Remove the attribute supplied as the argument to the function.
Examples:
The following example is going to remove the checked attribute of an input of type checkbox.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### removeClass

.removeClass()
The .removeClass() is used to remove either a single or multiple classes or all classes in each element of the set of matched element.

If no attribute is provided to the function, then all the classes are removed from the element.

It can also take a function as an argument. The index of the element and the current class are passed as parameters to the function. The function must return one or more space separated class names that need to be removed.
API Module : Traversal
.removeClass( [selector] )
Type : String( either a single class or multiple classes separated by spaces )
Returns : lyteDomObj
Used to remove one or more space separated class names. If no selector is provided then all the classes are removed.
.removeClass( func )
Type : function
Arguments : index( index of the element in the set), class ( the current class of the element )
Returns : lyteDomObj
The function should return a string of either a single class or multiple classes separated by spaces.
Examples:
The following examples demonstrates the .removeClass(). On clicking, the two of the three classes from the span are going to be removed.
Code:
Output:
Reload code
This is going to accept a function as argument and the function is going to return two classes that are going to be removed from the span.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### removeProp

.removeProp()
The .removeProp() is used to remove a property in each element in the set of matched elements.

Use .removeProp() to remove custom properties because trying to remove browser defined properties might throw errors.
API Module : Traversal
.removeProp( name )
Type : String
Returns : lyteDomObj
Used to remove one of the properties of each element in the set of matched elements.
Examples:
The example below demonstrates .removeProp(). It is going to remove a custom property called customkey.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### toggleClass

.toggleClass()
This is used to either remove or add classes to each element in the matched set based on their presence or absence.

The function accepts a set of classes to be toggled. The classes can be passed as a string separated by spaces or an array.

The .toggleClass() can also take in a state variable which toggles the classes accordingly. When the state is passed as true, then a class is added. If it is passed as false, then a class is removed.

When .toggleClass() is called on an element for the first time and no parameter is passed, then all class names in each element of the matched set are toggled.

It can also take in a function as a parameter and the value returned from the function is used to toggle the classes.
API Module : Traversal
.toggleClass()
Type : None
Returns : lyteDomObj
This is used to toggle the classes present in each element of the matched set.
.toggleClass( class [,state] )
Type : class( String ), state( Boolean )
Returns : lyteDomObj
This is used to toggle the classes passed as arguments. It can optionally also take in a state param which adds the class if true is passed or removes them if false is passed.
.toggleClass( function [,state] )
Type : function( Function ), state( Boolean )
Arguments : Current element index( Integer ), Current Class ( String ), State ( Boolean )
Returns : lyteDomObj
The .toggleClass() can also take in a function. The return value of the function is the classes that need to be toggled. Additionally, it can also take in a state variable and toggle classes depending on the value of the state variable.
Examples:
The following example demonstrates the toggling of classes. Clicking on the button is either going to add or remove the red class.
Code:
Output:
Reload code
The example below describes the use of a function as an argument and passing a state variable. The state variable is set to true so the class is added to the element when the button is clicked everytime.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### val

.val()
The .val() method gets the value of the first matched element or sets the value to all the set of matched elements.

When no argument is given the current value of the first matched element is returned. An argument can be either a value or a function that returns a value is set to the set of matched elements.
API Module : Utilities
.val( value )
Type : value( String or Number or Array )
Returns : lyteDomObj
set the given value to the matched element
.val( function )
Type : event( function )
Arguments : index ( number ), currentValue ( string )
Returns : lyteDomObj
set the value that the function returns to the matched elements
.val( )
Returns : lyteDomObj
get the value of first matched element
Examples:
The following example demonstrates the .val() is used to get value from first input and changes the value in the next 2 inputs when the button is clicked
Code:
Output:
Reload code
The following example demonstrates the .val() is used to get value from first input and changes the value in the next 2 inputs when the button is clicked
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### css

.css()
The .css() method gets CSS property of first matched element or set CSS property to the matched elements.

If only property name is given as argument then property value is returned. If a value or function that returns a value is also provided then the value is set to the property for the set of matched elements. Property can also be an object with property name as key and its value to be set
API Module : Traversal
.css( propertyName )
Type : propertyName(string)
Returns : string
get the value of CSS property specified of the first matched element if available
.css( propertyName , value )
Type : propertyName(string) , value(string)
Returns : lyteDomObj
set the value to the CSS property specified to the matched elements if available
.css( propertyName , function )
Type : propertyName(string) , function
Arguments : index ( number ) , value ( string )
Returns : lyteDomObj
set the value returned from function to the CSS property specified to the matched elements if available
.css( properties )
Type : properties(object)
Returns : lyteDomObj
object will be a list of propertyName with respective value to be set(can also be a function)
Examples:
Here the method returns value of the specified propertyName of the first matched element. Also sets value to CSS property to the matched elements.
Code:
Output:
Reload code
The current font-size value is increased by 50 on mouseover and decreased by 50 when mouse leave
Code:
Output:
Reload code
The argument can be an object with set of propetyName and value for it to the set of matched element
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### height

.height()
This calculates the height of the first element from the set of matched elements or it sets the height to the set of all matched elements.

The height of the element does not include the padding, border or the margin. It is calculated as illustrated below
API Module : Traversal
.height( value )
Type : number
Returns : lyteDomObj
Sets the height for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid height value.
.height( function )
Type : function
Arguments : index ( number ) , currentHeight ( number )
Returns : lyteDomObj
The function passed as a parameter is invoked and the value returned from the function is set as the height of the element. The function takes the index and the current height of the element as arguments. It can return a Number or a String
.height( )
Returns : number
Returns the height of the first matched element from the set of matched elements
Examples:
Here, Intial height of each div element is set to 20px. When the div element is clicked a handler binded which increases the height by 20px
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### innerHeight

.innerHeight()
This calculates the inner height of the first element from the set of matched elements or it sets the inner height to the set of all matched elements.

The inner height of the element includes the padding but does not include the border or the margin. It is calculated as illustrated below
API Module : Traversal
.innerHeight( value )
Type : number
Returns : number
Sets the inner height for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid inner height value.
.innerHeight( function )
Type : function
Arguments : index ( number ) , currentHeight ( number )
Returns : number
The function passed as a parameter is invoked and the value returned from the function is set as the inner height of the element. The function takes the index and the current height of the element as arguments. It can return a Number or a String
.innerHeight( )
Returns : number
Returns the inner height of the first matched element from the set of matched elements
Examples:
Here, the user entered value is set as the padding and height of the div element and the new innerHeight and height is displayed
Code:
Output:
Reload code
Left click increases the innerHeight of the div element by 20px and right click will reset to initial size
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### innerWidth

.innerWidth()
This calculates the inner width of the first element from the set of matched elements or it sets the inner width to the set of all matched elements.

The inner width of the element includes the padding but does not include the border or the margin. It is calculated as illustrated below
API Module : Traversal
.innerWidth( value )
Type : number
Returns : number
Sets the inner width for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid inner width value.
.innerWidth( function )
Type : function
Returns : number
The function passed as a parameter is invoked and the value returned from the function is set as the inner width of the element. The function takes the index and the current width of the element as arguments. It can return a Number or a String
.innerWidth( )
Returns : number
Returns the width of the first matched element from the set of matched elements
Examples:
Here, the user entered value is set as the padding and width of the div element and the new innerWidth and width is displayed
Code:
Output:
Reload code
Left click increases the innerWidth of the div element by 20px and right click will reset to default size
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### offset

.offset()
For the first matched element .offset() gets or sets the left and top co-ordinates (relative to the document). If the selected element's position is static will be set to relative to reposition it.

Co-ordinates can be mentiones as an object with top and left values or function that returns co-ordinates. When no argument is given the current co-ordinates is returned.
API Module : Traversal
.offset( co-ordinates )
Type : co-ordinates( object )
Returns : lyteDomObj
set the top and left value to the first matched element.
.offset( function )
Type : function
Returns : lyteDomObj
set the function returned top and left value to the first matched element
.offset( )
Type : 
Returns : object
get the top and left value of the first matched element
Examples:
In the example, 'move forward' button gets the current offset( i.e.,top and left position ) and increases it by 10px. Similarly 'move backward' button gets the current offset( i.e.,top and left position ) and decreases it by 10px but it uses a function instead
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### outerHeight

.outerHeight()
This calculates the outer height of the first element from the set of matched elements or it sets the outer height to the set of all matched elements.

The outer height of the element includes the padding and border. Also includes margin when the includeMargin is true. It is calculated as illustrated below
API Module : Traversal
.outerHeight( value )
Type : number
Returns : number
Sets the outer height for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid outer height value.
.outerHeight( function )
Type : function
Returns : number
The function passed as a parameter is invoked and the value returned from the function is set as the outer height of the element. The function takes the index and the current height of the element as arguments. It can return a Number or a String
.outerHeight( includeMargin )
Type : includeMargin ( Boolean )
Returns : number
Returns the outer height of the first matched element from the set of matched elements, includes margins if includeMargin is true else doesn't
Examples:
Here, the user entered value is set as the padding, border, margin and height of the div element and the new outerHeight and height is displayed
Code:
Output:
Reload code
Left click increases the outerHeight of the div element by 20px and right click will reset to initial size
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### outerWidth

.outerWidth()
This calculates the outer width of the first element from the set of matched elements or it sets the outer width to the set of all matched elements.

The outer width of the element includes the padding and border. Also includes margin when the includeMargin is true. It is calculated as illustrated below
API Module : Traversal
.outerWidth( value )
Type : number
Returns : number
Sets the outer width for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid outer width value.
.outerWidth( function )
Type : function
Returns : number
The function passed as a parameter is invoked and the value returned from the function is set as the outer width of the element. The function takes the index and the current width of the element as arguments. It can return a Number or a String
.outerWidth( includeMargin )
Type : includeMargin ( Boolean )
Returns : number
Returns the outer width of the first matched element from the set of matched elements, includes margins if includeMargin is true else doesn't
Examples:
Here, the user entered value is set as the padding, border, margin and width of the div element and the new outerWidth and width is displayed
Code:
Output:
Reload code
Left click increases the outerWidth of the div element by 20px and right click will reset to initial size
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### position

.position()
The .position() is used to return the coordinates relative to the offset parent. This applies only to the first element to the set of matched elements.

It calculates it relative to the padding box of the parent and the margin box of the element whose position is needed.

This is different from the .offset() which returns it relative to the document element.
API Module : Traversal
.position()
Type : None
Returns : Object( containing left and top )
Returns the coordinates relative to the offset parent for the first element in the set of matched elements.
Examples:
The following example is going to print the left and top of the element relative to its offset parent.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### scrollLeft

.scrollLeft()
The .scrollLeft() gives the number of pixels the first element in the set of matched elements scrolled horizontally.

It is also used to set the horizontal position of the scrollbar in the set of matched elements.
API Module : Utilities
.scrollLeft()
Type : None
Returns : Number
This returns the number of pixels the element scrolled horizontally.
.scrollLeft( value )
Type : Number
Returns : lyteDomObj
Set the horizontal scroll position for the all the matched elements.
Examples:
This demonstrates the working of the .scrollLeft() function to get the horizontal scroll position.
Code:
Output:
Reload code
When the .scrollLeft() function takes in an argument, it sets the scrollLeft of the set of all matched elements.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### scrollTop

.scrollTop()
The .scrollTop() gives the number of pixels the first element in the set of matched elements scrolled vertically.

It is also used to set the vertical position of the scrollbar in the set of matched elements.
API Module : Utilities
.scrollTop()
Type : None
Returns : Number
This returns the number of pixels the element scrolled vertically.
.scrollTop( value )
Type : Number
Returns : lyteDomObj
Set the vertical scroll position for the all the matched elements.
Examples:
This demonstrates the working of the .scrollTop() function to get the vertical scroll position.
Code:
Output:
Reload code
When the .scrollTop() function takes in an argument, it sets the scrollTop of the set of all matched elements.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### width

.width()
This calculates the width of the first element from the set of matched elements or it sets the width to the set of all matched elements.

The width of the element does not include the padding, border or the margin. It is calculated as illustrated below
API Module : Traversal
.width()
Type : None
Returns : width( Number )
Returns the width of the first matched element from the set of matched elements.
.width( value )
Type : String or Number
Returns : lyteDomObj
Sets the width for the set of all matched elements. If a number is provided, a pixel unit is assumed. A string can assume any valid width value.
.width( func )
Type : function
Arguments : index( Number ), value( Number )
Returns : lyteDomObj
The function passed as a parameter is invoked and the value returned from the function is set as the width of the element. The function takes the index and the current width of the element as arguments. It can return a Number or a String.
Examples:
The .width() returns the width of the element when no arguments are passed to it. This is demonstrated as shown below.
Code:
Output:
Reload code
You can set the width of an element by passing a Number or a String to the width function. If no unit is provided, then lyte-dom assumes that its a pixel value.

The width function can also take a function as an argument. It is passed two arguments, the index and the current width of the element. The value returned from this function is then set as the width of the element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### blur

.blur()
The .blur() triggers the binded handler when the element lost its focus

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.blur( handler )
Type : handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element lost its focus
.blur( [eventData] , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element lost its focus, also binds event data
.blur( )
Returns : lyteDomObj
triggers the event
Examples:
Triggers the binded handler when input fields lost its focus
Code:
Output:
Reload code
Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### change

.change()
The .change() triggers the binded handler when the value of the element is changed

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.change( handler )
Type : handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the value of the element is changed
.change( [eventData] , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the value of the element is changed, also binds event data
.change( )
Returns : lyteDomObj
triggers the event
Examples:
Triggers the binded handler when value of input or select fields changed
Code:
Output:
Reload code
Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### click

.click()
The .click() triggers the binded handler when the element is clicked

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.click( handler )
Type : handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked
.click( [eventData] , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked, also binds event data
.click( )
Returns : lyteDomObj
triggers the event
Examples:
When mouse button is pressed and released inside the element click event is triggered. Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### contextmenu

.contextmenu()
The .contextmenu() triggers the binded handler when the element is right clicked

If only a function is given then it is binded and tiggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.contextmenu( handler )
Type : handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked with mouse's right button
.contextmenu( [eventData] , handler )
Type : eventData ( anything ) , handler (function )
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked with mouse's right button, also binds event data
.contextmenu( )
Returns : lyteDomObj
triggers the event
Examples:
When mouse right button is pressed inside the element contextmenu event is triggered. Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### dblclick

.dblclick()
The .dblclick() triggers the binded handler when the element is clicked twice

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.dblclick( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked twice
.dblclick( [eventData] , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when the element is clicked twice, also binds event data
.dblclick( )
Returns : lyteDomObj
triggers the event
Examples:
When mouse button is pressed and released twice inside the element double click event is triggered. Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-data

event.data
event.data is the data in the event object that is passed to event handler
API Module : Events
event.data
Returns : lyteDomObj
Examples:
Here below, ' Hello world!! ' is the data passed to the handler and can be get from event.data
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-delegateTarget

event.delegateTarget
the delegateTarget gives the element to which event handler is attached
API Module : Events
event.delegateTarget
Returns : DOM element
Examples:
In the example below, div element is the delegateTarget and the button clicked is the currentTarget
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-isDefaultPrevented

event.isDefaultPrevented()
The event.isDefaultPrevented() returns true if default is prevented for current event object
API Module : Events
event.isDefaultPrevented()
Returns : Boolean
Examples:
Here below, when the event is triggered event.preventDefault() is called. Then event.isDefaultPrevented() returns true.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-isImmediatePropagationStopped

event.isImmediatePropagationStopped()
The event.isImmediatePropagationStopped() says immediate propagation is stopped or not
API Module : Events
event.isImmediatePropagationStopped()
Returns : Boolean
Examples:
Here below, when the event is triggered event.stopImmediatePropagation() is called. Then event.isImmediatePropagationStopped() returns true.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-isPropagationStopped

event.isPropagationStopped
The event.isPropagationStopped() says propagation is stopped or not
API Module : Events
event.isPropagationStopped
Returns : Boolean
Examples:
Here below, when the event is triggered event.stopPropagation() is called. Then event.isPropagationStopped() returns true.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-preventDefault

event.preventDefault()
The event.preventDefault() prevents default actions of an event
API Module : Events
event.preventDefault()
Returns : undefined
Examples:
For example, when event.preventDefault() is called <a> tag will not take to the given URL, right click button will not show menu etc.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-result

event.result
Among all handlers triggered by an event the last value returned will be in event.result. And will be undefined if nothing is returned
API Module : Events
event.result
Returns : Boolean
Examples:
Here event.result is updated with recently returned value. Then placed at the p element at last.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-stopImmediatePropagation

event.stopImmediatePropagation()
.stopImmediatePropagation() stops execution of other handlers binded with the same event and and prevents event bubbling

When an event happens on an element, it first runs the handlers on that element, then on all of its ancestors. The scenario is known as event bubbling.
API Module : Events
event.stopImmediatePropagation()
Returns : undefined
Examples:
Here five different handlers are binded with the event. But when the third handler executes .stopImmediatePropagation() other two handlers are not executed
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### event-stopPropagation

event.stopPropagation()
.stopPropagation() prevents event bubbling

When an event happens on an element, it first runs the handlers on that element, then on all of its ancestors. The scenario is known as event bubbling.
API Module : Events
event.stopPropagation()
Returns : undefined
Examples:
Here when the innermost DIV is clicked in case(i) all outer DIVs are affected i.e., event bubbling. But in case(ii) when event.stopPropagation() is called the outer DIVs are not affected
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### focus

.focus()
The .focus() triggers the binded handler when the element is focused

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.focus( handler )
Type : handler( function )
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is focused
.focus( eventData , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is focused, also binds event data
.focus( )
Returns : lyteDomObj
triggers the event
Examples:
Triggers the binded handler when input fields is focused
Code:
Output:
Reload code
Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### focusin

.focusin()
The .focus() triggers the binded handler when the element is focused in

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.focusin( handler )
Type : handler( function )
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is focused in
.focusin( eventData , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when the element is focused in, also binds event data
.focusin( )
Returns : lyteDomObj
triggers the event
Examples:
It differs from .focus() that it supports event bubbling. In the below example, the handler is binded with div element and the handlre triggers when child input elements are focused.
Code:
Output:
Reload code
Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### focusout

.focusout()
The .focus() triggers the binded handler when the element is focused out.

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.focusout( handler )
Type : handler( function )
Returns : lyteDomObj
binds the handler to be triggered when the element is focused out
.focusout( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when the element is focused out, also binds event data
.focusout( )
Returns : lyteDomObj
triggers the event
Examples:
It supports event bubbling. In the below example, the handler is binded with div element and the handlre triggers when child input elements are focused.
Code:
Output:
Reload code
Event data 'hello' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### keydown

.keydown()
The .keydown() triggers the binded handler when keydown event occurs i.e., continuosly triggered when key is pressed until it is released

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.keydown( handler )
Type : handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when keydown event occur
.keydown( eventData , handler )
Type : eventData ( anything ) , handler (function)
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when keydown event occur, also binds event data
.keydown( )
Returns : lyteDomObj
triggers the event
Examples:
Event data 'triggered' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### keypress

.keypress()
The .keypress() triggers the binded handler when keypress event occurs i.e., triggered when key is pressed and triggered again when pressed after released

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.keypress( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when keypress event occur
.keypress( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when keypress event occur, also binds event data
.keypress( )
Returns : lyteDomObj
triggers the event
Examples:
Event data 'triggered' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### keyup

.keyup()
The .keyup() triggers the binded handler when keyup event occurs i.e., triggered when key released

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.keyup( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when keyup event occur
.keyup( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when keyup event occur, also binds event data
.keyup( )
Returns : lyteDomObj
triggers the event
Examples:
Event data 'triggered' is binded along with the handler and the data will be in event.data . The event can also be triggered programmatically when it is called without argument
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mousedown

.mousedown()
The .mousedown() triggers the binded handler when mousedown event occurs i.e., triggers when mouse button pressed inside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mousedown( handler )
Type : handler ( function )
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when mouse button is pressed on the element
.mousedown( eventData , handler )
Type : eventData ( anything ) , handler ( function )
Arguments : event( object )
Returns : lyteDomObj
binds the handler to be triggered when mouse button is pressed on the element, also binds event data
.mousedown( )
Returns : lyteDomObj
triggers the event
Examples:
In the example, when the mouse button is pressed inside the div element background color changed to 'cyan' and event.data is appended.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mouseenter

.mouseenter()
The .mouseenter() triggers the binded handler when mouseenter event occurs i.e., triggers when mouse cursor enters inside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mouseenter( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor enters the element
.mouseenter( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor enters the element, also binds event data
.mouseenter( )
Returns : lyteDomObj
triggers the event
Examples:
This doesn't support event bubbling. That is the child elements are not affected. Here in the example, the event is binded with the parent div element. So the event is not triggered while the mouse is entering and leaving child element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mouseleave

.mouseleave()
The .mouseenter() triggers the binded event when mouseleave event occurs i.e., triggers when mouse cursor leaves outside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mouseleave( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor leaves the element
.mouseleave( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor leaves the element, also binds event data
.mouseleave( )
Returns : lyteDomObj
triggers the event
Examples:
This doesn't support event bubbling. That is the child elements are not affected. Here in the example, the event is binded with the parent div element. So the event is not triggered while the mouse is entering and leaving the child element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mousemove

.mousemove()
The .mousemove() triggers the binded event when mousemove event occurs i.e., triggered when the mouse cursor moves inside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mousemove( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor moves over the element
.mousemove( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor moves over the element, also binds event data
.mousemove( )
Returns : lyteDomObj
triggers the event
Examples:
Here in the example, the event is triggered when mouse moves inside the div element. Based on the current position( pageX , pageY coordinates) the background color is changed. This shows when mouse oves from one pixel to another the event is triggered.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mouseout

.mouseout()
The .mouseout() triggers the binded event when mouseout event occurs. i.e., triggers when mouse cursor leaves outside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mouseout( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor comes over the element
.mouseout( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor comes over the element, also binds event data
.mouseout( )
Returns : lyteDomObj
triggers the event
Examples:
It differs from 'mouseleave' that it supports event bubbling. The event is also triggered when the mouse comes out of the the child elements too. Here below, the event is binded with the parent div element but also triggered when the mouse enters and leaves the child element too.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mouseover

.mouseover()
The .mouseover() triggers the binded event when mouseover event occurs i.e., triggers when mouse cursor enters inside the element

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mouseover( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor comes over the element
.mouseover( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when cursor comes over the element, also binds event data
.mouseover( )
Returns : lyteDomObj
triggers the event
Examples:
It differs from 'mouseenter' that it supports event bubbling. The event is also triggered when the mouse comes over the the child elements too. The event is also triggered when the mouse comes out of the the child elements too. Here below, the event is binded with the parent div element but also triggered when the mouse enters and leaves the child element too.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### mouseup

.mouseup()
The .mouseup() triggers the binded event when mouseup event occurs i.e., triggers when mouse button released inside the element.

If only a function is given then it is binded and triggered when the event occurs. If eventData is also provided that will be binded too and can be retrieved from event object. When no arguments are given the event is triggered.
API Module : Events
.mouseup( handler )
Type : handler (function)
Returns : lyteDomObj
binds the handler to be triggered when mouse button is released on the element
.mouseup( eventData , handler )
Type : eventData ( anything ) , handler (function)
Returns : lyteDomObj
binds the handler to be triggered when mouse button is released on the element, also binds event data
.mouseup( )
Returns : lyteDomObj
triggers the event
Examples:
In the example, when the mouse button is released inside the div element background color changed to 'yellow' and event.data is appended.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### off

.off()
The .off() method unbinds data and handler for the events mentioned from the matched elements.
API Module : Events
.off( events [, selector] [, handler] )
Type : events( one or more events ) , selector ( selector to be filtered ) , handler ( function )
Returns : lyteDomObj
To the set of matched elements unbinds already binded data and handler from the events mentioned. The selectors denotes the descendant of the selected element, the event to be unbinded from.
Examples:
In the example, .on() binds fun1 with contextmenu event in div elements and fun2 with mouseover, mouseout events in p element. Then .off() un binds those functions
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### on

.on()
The .on() binds data and handler for the events mentioned to the set of matched element. The selector argument represents the descendant elements to be selected to which the events to be binded.
API Module : Events
.on( events , selector , data , handler )
Type : events( one or more events ) , selector ( selector to be filtered ) , data ( string ) , handler ( function )
Returns : lyteDomObj
To the set of matched elements binds data and handler for the events and only to the descendant selectors filtered if mentioned
Examples:
In the example, .on() binds click, contextmenu event in div elements and mouseover, mouseout events in p element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### one

.one()
The .one() binds data and handler for the events mentioned which can be triggered once only. The selector argument represents the descendant elements to be selected to which the events to be binded.
API Module : Events
.one( events , selector , data , handler )
Type : events( one or more events ) , selector ( selector to be filtered ) , data ( string ) , handler ( function )
Returns : lyteDomObj
To the set of matched elements binds data and handler for the events and only to the selectors filtered if mentioned
Examples:
In the example, .one() binds click, contextmenu event in div elements and mouseover, mouseout events in p element. But the events can be triggered only once.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### ready

.ready()
The .ready() allows us to register a handler to be executed as soon as the DOM is safe to manipulate.

This is similar to the DOMContentLoaded event provided by the browser but differs in a way that the handler registered by the .ready() will be called even if it is registered after the DOMContentLoaded event has been fired.

So if you register the ready handler after the DOMContentLoaded, the function will still fire.
API Module : Events
.ready( func )
Type : Function
Returns : lyteDOMObj
Fire the function provided as argument when the DOM is safe to manipulate.
Examples:
The following example demonstrates the .ready(). It is going to append a text in a span when the DOM is ready to be manipulated
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### resize

.resize()
The .resize() is used to register a handler which is called when a resize event is fired or it is used to fire the resize event manually.

The .resize() can also take in eventData as argument which is set in the event object passed to the handler.

.resize() is bound to the window object which is fired when the browser is resized. So any changes to be made when the browser resizes can be added inside this handler.
API Module : Events
.resize( [eventData], handler )
Arguments : eventData( anytype ), handler( function )
Returns : lyteDomObj
Register a handler to be called when the resize event is fired. Optionally, pass a eventData param which is set in the event object passed to the function.
.resize()
Arguments : None
Returns : lyteDomObj
This is used to trigger a resize event
Examples:
The example below demonstrates .resize() being used to fire a resize event. There is also a handler register by .resize() which appends text to a span.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### scroll

.scroll()
The .scroll() is used to bind the scroll event or trigger a scroll event to each element in the set of matched elements.

If .scroll() is called without an argument, then a scroll event is triggered on each of the elements in the set.

If it is called with a handler, then the .scroll() registers a scroll event which gets fired whenever the element is scrolled.

Optionally, it can take in a eventData param which sets the data property in the event object in the handler.
API Module : Events
.scroll( [eventData], handler )
Type : eventData( anytype ), handler( function )
Returns : lyteDomObj
This registers a scroll event to each element in the matched set. It can optionally also pass a eventData param which is added to the event object passed to the handler function.
.scroll()
Type : None
Returns : lyteDomObj
Used to trigger a scroll event on each element of the matched set.
Examples:
This demonstrates the working of .scroll(). A scroll event is registered on the div and the position of the vertical scrollbar is printed when the user scrolls inside.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### select

.select()
The .select() is used to register a select event or trigger a select in each element of matched set.

If .select() takes no argument, then a select event is triggered.

If it accepts a handler as an argument, it registers a select event for each of the elements.

It can optionally also accept a eventData param which is set in the data property of the event object passed to the handler.
API Module : Events
.select( [eventData], handler )
Type : eventData( anytype ), handler( function )
Returns : lyteDomObj
Used to register a select event in each element of the matched set. It can also be passed a eventData param which is added to the event object(event.data) passed to the handler.
.select()
Type : None
Returns : lyteDomObj
Used to trigger a select in each element of the matched set.
Examples:
The following example demonstrates .select().
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### submit

.submit()
The .submit() is used to register a handler or trigger a submit event in each element in the matched set.

If no arguments are passed to the function ,then the submit event is triggered.

If a handler is passed as a parameter, then a submit event is registered to each of the elements in the matched set.

It can optionally also take in a eventData param which sets the data property in the event object passed to the handler.

The .submit() is usually attached to a form element and is triggered when a form is submitted ( pressing enter, clicking input[type="submit"],etc.
API Module :
.submit( [eventData], handler )
Type : eventData( anytype ), handler( function )
Returns : lyteDomObj
This is used to register a handler to the form element which gets triggered when a submit event is fired. Optionally, it can also pass a eventData param which is set to the data property of the event object.
.submit()
Type : None
Returns : lyteDomObj
The .submit() when called without any argument just triggers the submit event.
Examples:
This example below is going to register a submit event and the handler is going to validate the input.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### trigger

.trigger()
The .trigger() is used to execute all events of a particular type attached to each element of the matched set.

The .trigger() takes in the event type as the argument and executes any lyte-dom handler bound to the element. The order of execution is same as the order if the event were naturally triggered by the user. It should be noted that it bubbles up the dom and executes any handlers on its path as well. To prevent this, either return false or use event.stopPropagation().

The .trigger() also executes any property in the element whose name is same as the event name in the event propagation path. For example, if a click event is triggered, then the .click() function of each element is executed along the event propagation path. If this behaviour is not desired use .triggerHandler()

Similarly, a property prefixed by on followed by the name of the event is also executed. Eg, the onclick function of the element on which the .trigger() is called is executed.

Additionally, it can take in extraParameters as an argument which gets passed to the event hander. This is different from eventData which is set to the data property of the event object.
API Module : Events
.trigger( eventName [,extraParameters] )
Type : eventName( String ), extraParameters( Array )
Returns : lyteDomObj
Trigger the event on each element of the matched set. Additionally, pass arguments to the event handler by passing in the extra parameters argument
.trigger( event [,extraParameters] )
Type : event( event or $L.Event ), extraParameters( Array )
Returns : lyteDomObj
Pass an event to the function which is then used to trigger the handlers along the event propagation path.
Examples:
The following example demonstrates the .trigger() which triggers a click event and executes all the handlers along the way.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### triggerHandler

.triggerHandler()
The .triggerHandler() is used to execute all events of particular type on the element.

This differs from .trigger() which bubbles the event up the dom tree.

The .triggerHandler() also does not execute the property whose name is same as the event name. For eg, the .click() will not get invoked when a click event is invoked using the .triggerHandler().

It does on the other hand execute the property with the name same as the event name but prefixed with on. For eg, it will execute the onclick property attached to the element.

It also only affects the first matched element.
API Module : Events
.triggerHandler( eventName [, extraParameters] )
Type : eventName( String ), extraParameters( Array )
Returns : lyteDomObj
Used to trigger the event passed in as parameter. Additionally, it can also pass in extra parameters as an option which gets passed as arguments to the event handler.
.triggerHandler( event [, extraParameters] )
Type : event( event or $L.Event ), extraParameters( Array )
Returns : lyteDomObj
Pass an event to the function which is then used to trigger the handler.
Examples:
The following example demonstrates the working of the .triggerHandler(). None of the parent handlers are executed in the below example.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### text

.text()
The .text() is used to return the text content of each element and its descendants or it is used to set the text of each element in the matced element.

When no argument is passed, then the text content of the element and its descendants is returned as a string.

The argument to the .text() can either be a String, Number, Boolean or Function. When it is a String or a Number or a Boolean then it simply sets it the each of the elements in the matched set.

If it is a function, then the function is passed two arguments the index of the element in the matched set and the current text value. The function expects a return value which is set as the text.
API Module : Utilities
.text()
Type : None
Returns : String
This is used to return the text content of each element in the matched set.
.text( value )
Type : String or Number or Boolean
Returns : lyteDomObj
This is used to set the text of each element in the matched set.
.text( function )
Type : function
Returns : lyteDomObj
The .text() can also pass a function. The return value of the function is set to each element in the matched set as the text content. The arguments passed to the function are the index of the element and its current text content.
Examples:
This is going to get the text content of an element and set it in a different node after making a change to it.
Code:
Output:
Reload code
This example demonstrates the use of function as an argument to .text(). The text returned from the function is set as the textContent of the element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### data

.data()
The .data() gets or sets arbitrary data to the first element in the set of matched elements

When a value is given it is set to the first matched element, if key is also provided the value is set with it to the first matched element.

If no argument is provided the data stored in the matched element are returned if key is given only the data with key is returned.
API Module : Utilities
.data( value )
Type : value( string or number )
Returns : lyteDomObj
set the arbitrary data to the first element in the set matched elements
.data( key , value )
Type : key( string ) ,value( string or number )
Returns : lyteDomObj
set the arbitrary data to the first element in the set matched elements ine the name of 'key'
.data( key )
Type : key( string )
Returns : Object
get the arbitrary data stored in the name of 'key' from the matched element
.data( )
Returns : Object
get the arbitrary data stored from the matched element
Examples:
Data can be attached to the DOM element inside the html tag also ( data-dataName='value' )
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### each

.each()
This .each() method iterates through matched elements, and execute function for each element until false is returned.

The function provided is executed for each matched element and its arguments will be each element and its index. When the function returns false the iteration will be stopped.
API Module : Utilities
.each( function )
Type : function
Arguments : index ( number ), element ( string )
Returns : lyteDomObj
the function defined is executed for each element until false is returned
Examples:
In the below example, the function defined is executed for each DIV element and stops iterating when false returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### get

.get()
This .get() method gets matched element at specified index

When the given index is positive, the element with the index counted from 0th element. If it is negative then counting will be from last element
API Module : Utilities
.get( index )
Type : index (positive integer)
Returns : element
counts to index from 0th match
.get( negIndex )
Type : negIndex (negative integer)
Returns : element
count for the index from last matched element
.get( )
Returns : array
get all matched element
Examples:
From the lyteDomObj with set of matched elements (by $L('div')), the method returns as elements or array of elements
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### removeData

.removeData()
This is going to remove any value store using the .data().

This can be called with a key or without any arguments. When called with a key, the value for the key is removed.

When called without any arguments, it removes all the values previously stored with the .data().

It should be noted that .removeData() will only remove the value from the internal cache but not any data- attributes bound to the element. To remove the data- attributes, one must use .removeAttr().
API Module : Utilities
.removeData( [name] )
Type : None or String( either a single key or keys separated by spaces ) or Array
Returns : lyteDomObj
Remove the value of the particular key in the internal cache of each element in the set of matched elements.
Examples:
An example showing how data is removed from the internal cache of an element.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### toArray

.toArray()
This function converts the lyteDomObj to an array of dom elements.
API Module : Utilities
.toArray()
Type : None
Returns : Array
Returns an array of values
Examples:
The .toArray() is used to convert it into an array, after which the array function available can used. The example below demonstrates it.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### offsetParent

.offsetParent()
The .offsetParent() gets the first positioned ancestor element. The elements with position property relative,fixed and absolute are considered as positioned.
API Module : Traversal
.offsetParent( )
Returns : lyteDomObj
Examples:
Here when the span element is clicked the div element with position property is returned by the .offsetParent() function
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### allselector

$L( '*' )
selects all elements.
API Module : Utilities
$L( '*' )
Type : none
Returns : lyteDomObj
'*' represents selecting all elements
Examples:
In the below example all the elements are selected and a css function is applied on it.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### checked

:checked
The :checked selector returns elements that are checked.

It works on input fields such as check boxes, radio buttons and select elements.
API Module : Utilities
$L( ':checked' )
Type : string
Returns : lyteDomObj
':checked' represents inputs that are checked
Examples:
In the below example, when any of the input field is checked, all checked elements are selected and listed.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### childselector

$L( 'parent > child' )
The parent > child selector returns specified child from specified parent. It checks for 'child' element from first level of descendant
API Module : Utilities
$L( 'parent > child' )
Returns : lyteDomObj
parent can be any valid selector and child is element to be filtered
Examples:
This method traverse and get child elements only from the first level of DOM tree(i.e., only direct children). Here the DIV element has no direct LI child but has one direct UL child and the UL element has four direct LI child
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### classselector

$L( '.class' )
The $L( '.class' ) selector gets elements with specified class
API Module : Utilities
$L( '.class' )
Returns : lyteDomObj
className of the elements to be matched
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### contains-selector

contains selector [name *= 'value']
The [name *= 'value'] selector get the elements with attribute 'name' that contains the substring 'value'
API Module : Utilities
$L( "[name *= 'value']" )
Returns : lyteDomObj
get elements with attribute 'name' contains 'value' as substring
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### containsprefix-selector

contains selector [name |= 'value']
The [name |= 'value'] selector gets the elements with attribute 'name' that contains the substring 'value' at the prefix followed by a hyphen
API Module : Utilities
$L( "[name |= 'value']" )
Returns : lyteDomObj
get elements with attribute 'name' contains 'value' as substring at prefix followed by a hyphen
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### containsword-selector

contains selector [name ~= 'value']
The [name ~= 'value'] selector gets the elements with attribute 'name' that contains the substring 'value' separated by spaces
API Module : Utilities
$L( "[name ~= 'value']" )
Returns : lyteDomObj
get elements with attribute 'name' contains 'value' as a word separated by spaces
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### descendant

$L( 'ancestor descendant' )
The 'ancestor descendant' selector selects all descendants from specified ancestor.
API Module : Utilities
$L( 'ancestor descendant' )
Returns : lyteDomObj
A descendant can be the child or grand child or etc
Examples:
Here DIV element has two LI descendants and UL element has four LI descendants
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### disabled

disabled
The :disabled selector selects elements that are disabled
API Module : Utilities
$L( ':disabled' )
Returns : lyteDomObj
':disabled' supports button, input, optgroup, option, select, textarea, menuitem, and fieldset elements
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### elementselector

L( 'element' )
The $L( 'element' ) returns elements with tagName specified
API Module : Utilities
$L( 'element' )
Returns : lyteDomObj
'element' represents tagName of elements to be selected
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### empty-selector

:empty
The :empty selector selects nodes that are empty without any content
API Module : Utilities
$L( ':empty' )
Returns : lyteDomObj
Examples:
Here 5 elements are empty at first. :empty selector selects elements without any descendants or texts when the button is clicked empty elements are selected and set with a text "This was empty . . "
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### enabled

:enabled
The :enabled selector selects elements that are enabled. This selector supports supports button, input, optgroup, option, select, textarea elements
API Module : Utilities
$L( ':enabled' )
Returns : lyteDomObj
':enabled' results inputs that are enabled
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### equal-selector

Equal selector [name *= 'value']
get the elements with attribute 'name' that is exactly equal to the 'value'
API Module : Utilities
$L( "[name = 'value']" )
Returns : lyteDomObj
get elements with attribute 'name' which is equal to 'value'
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### first-child

:first-child
From set of matched elements the :first-child selector gets the elements that are first child to their parents.
API Module : Utilities
:first-child
Returns : lyteDomObj
Examples:
Here, among the four p elements the first child elements to the parent div element are returned. Similarly among the six span elements the first child elements to the parent p element are returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### first-of-type

:first-of-type
From the siblings having same name the :first-of-type selector selects the first element
API Module : Utilities
:first-of-type
Returns : lyteDomObj
Examples:
The example shows that the first element is selected among the siblings( first p element in two div elements and first span element in four p elements)
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### focus-selector

:focus
The :focus selector selects focused element.
API Module : Utilities
$L( ':focus' )
Returns : lyteDomObj
Examples:
In the example, the current focused element is selected
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### has-attribute-selector

Has attribute selector [name]
The [name] selector gets the elements that has specified attribute
API Module : Utilities
$L( '[name]' )
Returns : lyteDomObj
represents attribute name
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### id

$L( '#id' )
get elements with specified id
API Module : Utilities
$L( '#id' )
Returns : lyteDomObj
id of the elements to be matched
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lang

:lang()
selects elements with specified language.
API Module : Utilities
$L( ':lang( language )' )
Type : language code
Returns : lyteDomObj
Element with lang attribute value 'language'
Examples:
The lang code value can be specified as prefix (i.e., code before '-'). For example 'en' for 'en-us'
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### last-child

:last-child
From set of matched elements the :last-child selector get the elements that are last child to their parents
API Module : Utilities
:last-child
Returns : lyteDomObj
Examples:
Here, among the four p elements the last child elements to the parent div element are returned. Similarly among the six span elements the last child elements to the parent p element are returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### last-of-type

:last-of-type
From the siblings having same name the :last-of-type selector selects the last element
API Module : Utilities
:last-of-type
Returns : lyteDomObj
Examples:
The example shows that the last element is selected among the siblings( first p element in two div elements and first span element in four p elements)
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### multipleattribute-selector

Multiple attribute selector [filter1] [filter2] [filterN]
get the elements that matches all specified filter
API Module : Utilities
$L( "[filter1] [filter2] [filterN]" )
Type : filter( attribute )
Returns : lyteDomObj
get elements with attribute(s) filtered
Examples:
Here the element is filtered with title, id, class filters and selects a single div element that matches all filters.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nextadjacent

$L( 'prev + next' )
select the sibling element immediately preceeded by 'prev' element
API Module : Utilities
$L( 'prev + next' )
Type : prev( selector ), next( selector )
Returns : lyteDomObj
select element that is immediatedly next to 'prev'
Examples:
Here in the example, the element div.next1 which is immediately next to div.prev1 is selected and the css function is applied. But not on the second because div.next2 is not immediate next sibling of div.prev2. ( div.next1 represents div element with class name next1 and so on )
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nextsibling

$L( 'prev ~ next' )
select the sibling elements preceeded by 'prev' element
API Module : Utilities
$L( 'prev ~ next' )
Type : prev( selector ), next( selector )
Returns : lyteDomObj
select elements that are next to 'prev'
Examples:
In this example all the sibling elements with class name 'next' that are next to the element with class name 'prev' are selected.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### not-selector

:not()
The :not selector gets the set of matched elements except the specified selector
API Module : Utilities
$L(':not( selector )')
Type : selector( selector )
Returns : lyteDomObj
get the elements except the selector specified
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nth-child

:nth-child()
From set of matched elements the :nth-child selector gets the indexed child element
API Module : Utilities
$L.( :nth-child( index ) )
Type : index( number or even or odd or equation )
Returns : lyteDomObj
get the indexed child element.
Examples:
In the below example, even indexed child elements are selected and the background color is changed to yellow. Similarly odd indexed child elements are selected and the background color is changed to cyan. Child element whose index 2 is selected and the color is changed to red. Child element with index 3n+2 are selected and the width is changed to 300px (n is the number of child elements).
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nth-last-child

:nth-last-child()
From set of matched elements the :nth-last-child selector selects the nth child of each element from last
API Module : Utilities
$L.( :nth-last-child( index ) )
Type : index( number or even or odd or equation )
Returns : lyteDomObj
get the indexed child element, counting from the last
Examples:
In the below example, even indexed child elements counted from the last element are selected and the background color is changed to yellow. Similarly odd indexed child elements counted from the last element are selected and the background color is changed to cyan. Child element whose index 2 counted from the last element is selected and the color is changed to red. Child element with index 3n+2 counted from the last element are selected and the width is changed to 300px (n is the number of child elements).
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nth-last-of-type

:nth-last-of-type
From the siblings having same name the :nth-last-of-type selector selects the nth element from last
API Module : Utilities
$L.( :nth-last-of-type( index ) )
Type : index( number or even or odd or equation )
Returns : lyteDomObj
get the nth indexed sibling element of same type from last
Examples:
Here below based on the index given, nth element that is counted from last of same type among the siblings is/are returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nth-of-type

:nth-of-type
From the siblings having same name the :nth-of-type selector selects the nth element
API Module : Utilities
$L.( :nth-of-type( index ) )
Type : index( number or even or odd or equation )
Returns : lyteDomObj
get the nth indexed sibling element of same type
Examples:
Here below based on the index given, nth element of same type among the siblings is/are returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### only-child

:only-child
From set of matched elements, the child element with no siblings are selected by :only-child selector
API Module : Utilities
$L( ' :only-child ' )
Returns : lyteDomObj
get the elements without siblings
Examples:
Here among all span and p element, the ones without any siblings are selected and .css() is applied. But div element is not selected since it has a sibling.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### only-of-type

:only-of-type
The :only-of-type selector selects elements that has no sibling of same type
API Module : Utilities
$L( ":only-of-type" )
Returns : lyteDomObj
get the elements without same type sibling
Examples:
Here below div, p and span elements having no sibling of its type are selected and .css() function is applied.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### root

:root
The :root selector is used to select the root element of the document which is the HTML node.
Examples:
The following example demonstrates the working of the :root selector which is used to append a text to body.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### multiple-selector

$L( 'selector1, selector2, selectorN' )
selects elements that matches each selector.
API Module : Utilities
$L('selector1,selector2,selectorN')
Returns : lyteDomObj
get elements with specified selectors
Examples:
In the example, three different selectors are specified in a single query selector and results three different elements. The selectors are separated bu comma.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### startwith-selector

.startsWith - [name^='value']
This is used to select elements with attributes whose value begin with a specified string.
Examples:
This is going to apply border to those elements whose data-custom attribute begins with the string border
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### target

:target
This is used to select the element indicated by the fragment identifier of the document's URI.

For eg, if the URI is https://someweb.com/#elem then the result of $L( ':target' ) will return the element with the id is equal to elem.
API Module : Utilities
$L( ":target" )
Returns : lyteDomObj
It is used to return the element according to the fragment identifier of the document's URI.
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### visible

:visible
The visible selector returns the elements which are visible.

An element is considered visible in lyte-dom, if it has a width, height or a layout box. This means elements which have visibility: hidden are returned by this selector. Inline elements with no content have a CSS border box, so these are also returned as visible elements.

The visibile selector for now only works if you specify it as the last value of your query selector. Eg: div:first-child:visible works but div:visible:first-child doesn't work.The selector cannot be paired with the :not selector.These features are part of the lyte-dom roadmap and will be available in the future.

The :visible selector is not part of the browser spec. It is provided on top of the already available CSS selectors.
API Module : Utilities
$L( ":visible" )
Returns : lyteDomObj
returns visible elements.
Examples:
The following example demonstrates the working of the :visible selector. All the visible elements, are made to have visibility: visible.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### add

.add()
This .add() method adds the arugument elements to the set of matched elements lyteDomObj

The 'selector' which can be an element or selector or lyteDomObj represents element to be added to the set of matched elements

API Module : Utilities
.add( selector )
Type : selector( selector or element or html or lyteDomObj )
Returns : lyteDomObj
to the matched elements add 'selector' elements
.add( selector [, context] )
Type : selector( selector or element or html or lyteDomObj ) , context( element )
Returns : lyteDomObj
represents the element from which matching should begin from
Examples:
In the below example initially div elements are selected. Then span, p elements are added to the previously selected div elements and css is applied for all.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### addBack

.addBack()
This .addBack() method adds the previous set of matched elements to the current returned elements. If 'selector' argument is provided then the elements matches selector are only added to the result
API Module : Utilities
.addBack( [selector] )
Type : selector( selector )
Returns : lyteDomObj
to the matched elements add 'selector' that are previously matched set
Examples:
In the below example, the nextAll and prevAll selects next and previous sibling div elements of '.select'. But when the same function is called with addBack(), '.select' is also returned(i.e., previously matched). Since the second addBack() has selector argument 'p' div.select is not added back
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### children

.children()
This .children() method gets chidren of the matched selectors

If filter selector is provided filters and selects the children elements matches it
API Module : Traversal
.children( )
Returns : lyteDomObj
get all the children of the selectors that are matched
.children( [filterSelector] )
Type : filterSelector ( selector string )
Returns : lyteDomObj
from the children of the matched selectors get elements that are matched with filterSelector
Examples:
The functions traverse and get children from first level of DOM tree. If the argument filterSelector is provided, then it gets only the matched child elements. This method does not includes text and comment nodes.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### closest

.closest()
This .closest() method traverse through the ancestors and selects first element matches the selector. The traversal begins with the element itself

The 'selector' which can be an element or selector or lyteDomObj represents element to be added to the set of matched elements
API Module : Traversal
.closest( selector )
Type : selector or element or lyteDomObj
Returns : lyteDomObj
gets the first ancestor element matches the selector
.closest( selector [, context] )
Type : selector ( selector or element or lyteDomObj ) , context ( element )
Returns : lyteDomObj
gets the first ancestor element matches the selector that is found within the context element
Examples:
In the below example, the method is called for LI element with closest UL element that is to be found within level3 element first matched UL ancestor is returned. But when called for level1 selector that is to be found within level3 element nothing is returned.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### contents

.contents()
The .contents() method gets the children of matched elements including text and comments
API Module : Traversal
.contents( )
Returns : lyteDomObj
Examples:
From the example below, it can be observed that .contents() considers spaces, texts, newline, comment and nodes as children. And those children are from first level of the DOM tree from the selector.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### end

.end( )
The .end() method at the end of filtering in current chain returns the previous set of matched elements
API Module : Utilities
.end( )
Returns : lyteDomObj
returns set of matched elements in previous state
Examples:
In the below example, when .end() is not called .find() returns SPAN element as current chain result. But when .end() is called with it the previous result of $L('div') is returnted(i.e., DIV element)
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### eq

.eq()
This .eq() method get matched element at specified index

When the given index is positive, the element with the index counted from 0th element. If it is negative then counting will be from last element
API Module : Utilities
.eq( index )
Type : index (positive integer)
Returns : lyteDomObj
counts to index from 0th match
.eq( negIndex )
Type : negIndex (negative integer)
Returns : lyteDomObj
counts to index from last match
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### find

.find()
This .find() method from each matched element get the specified descendants. The descendants can be child or grand child or great grand child or so on.

The selector argument represents a descendant element of the matched set of element that is to be returned
API Module : Utilities
.find( selector )
Type : selector( selector or element )
Returns : lyteDomObj
gets the descendant with specified selector
Examples:
In the below example, the method returns p,span and i elements that are div element's descendant
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### first

.first()
From set of matched elements the .first() method gets the first element
API Module : Utilities
.first( )
Returns : lyteDomObj
Examples:
In the below example, among the matched div elements first element is returned
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### is

.is()
From the set of matched elements .is() method checks atleast one of the elements match with the argument. The argument can be a selector or a function which can return an element.
API Module : Utilities
.is( selector )
Type : selector or element or lyteDomObj
Returns : Boolean
says atleast one element from selected set of elements matches the specified selector
.is( function )
Type : function
Arguments : index ( number ), element ( string )
Returns : Boolean
says atleast one element from selected set of elements matches the element returned by the function
Examples:
In the below example, if any element is clicked its CSS property is changed as defined
Code:
Output:
Reload code
Here if any element is clicked, changes its CSS property if it is DIV element
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### last

.last()
From set of matched elements .last() method gets the last element
API Module : Utilities
.last( )
Returns : lyteDomObj
Examples:
In the below example, among the matched div elements last element is returned
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### map

.map()
.map() iterates through matched elements, and execute the function for each element then return as lyteDomObj
API Module : Utilities
.map( callback )
Type : callback ( function )
Arguments : index( number ) , element( string )
Returns : lyteDomObj
the function defined is executed for each selected element
Examples:
In the example, function executed for each div element then returned to mapElem as lyteDomObj and backgroundColor of each element is changed
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### next

.next()
The .next() returns the immediate next sibling in the set of all matched elements.

This function can also optionally take in a selector and only those next siblings matching the selector are returned.
API Module : Traversal
.next( [selector] )
Type : selector( string )
Returns : lyteDomObj
This is used to return the immediate previous sibling in the set of all matched elements. Optionally, it also accepts a selector an argument and only those elements matching the selector will returned by the function.
Examples:
In the below example, the elements next to the div elements with class name 'next' is selected and background color is changed to yellow. Then element with class name 'select' which is next to the element with class name 'next' is selected and color is changed to red
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nextAll

.nextAll()
The .nextAll() returns all the next element siblings for each element in the set of matched elements.

The function also additionally takes in a selector as an argument and only returns those siblings that match the selector.
API Module : Traversal
.nextAll( [selector] )
Type : selector( string )
Returns : lyteDomObj
The .nextAll() returns the all the next element siblings. It additionally can also take in a selector and filter siblings based on whether they matched the selector or not.
Examples:
In the below example, all elements that are next to the div element with class name 'next' returned and background color changed to yellow. Then all elements with class name 'select' that are next to the div element with class name 'next' returned and color changed to red
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### nextUntil

.nextUntil()
The .nextUntil() is used to return all the next siblings of each element in the set of matched elements until a particular element.

This function accepts a selector as first argument and keeps matching elements until it finds an element that matches the selector and terminates the search.

The .nextUntil() behaves like the .nextAll() when the selector is not provided.

Optionally, it can also take in a filter and only return those elements matching the filter.
API Module : Traversal
.nextUntil( [selector] [, filter] )
Type : selector( selector or element ) , selector( selector or element )
Returns : lyteDomObj
Returns the all the next siblings until the selector is matched. It also takes in a filter param as an argument and only returns those elements that match the filter.
Examples:
Here below, at first selects all elements next to the element with class name 'next' until the element with class name 'stop' and change background color of those elements. Then again it does the same but selects only the element with class name 'select' and changes its font color.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### not

.not()
From the set of matched elements $L.not() method removes the element matches selector. The argument can be a selector or a function that returns an element.
API Module : Utilities
.not( selector )
Type : seletor or element
Returns : lyteDomObj
get the elements except the selector specified
.not( function )
Type : function
Returns : lyteDomObj
set the value returned from function to the CSS property specified to the matched elements if available
Examples:
In the below example, all elements except elements with class name 'not' are selected and css property is changed.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### parent

.parent()
The .parent() returns the immediate parent of the set of all matched elements.

This function can optionally take a selector and matches the immediate parents which matches the selector.
API Module : Traversal
.parent()
Type : None
Returns : lyteDomObj
The .parent() is used to return the immediate parent of the set of all matched elements.
.parent( sel )
Type : String
Returns : lyteDomObj
The .parent() also takes in a selector, which only matches the immediate parents matching the selector.
Examples:
The following example demonstrates the working of the .parent(). It sets the background-color of the parent of the matched elements.
Code:
Output:
Reload code
This demonstrates the working of the .parent() with a selector. It is going to set the background-color of those elements which match the particular selector.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### parents

.parents()
The .parents() returns all the parents in the set of the matched elements.

The elements are ordered from the closest parent to the topmost ancestor. When there are multiple elements in the initial set, then the elements matched by the .parents() will be in the reverse order.

This is different from the .parent() which returns only the immediate parent. The .parents() traverses to the top level of the DOM( HTML Element ).

The .parents() can also take in a selector and return the parents matching the selector.
API Module : Traversal
.parents()
Type : None
Returns : lyteDomObj
Returns the set of all ancestor elements of the original set.
.parents( selector )
Type : String
Returns : lyteDomObj
Returns the set of all ancestor elements matching the selector provided as argument to the function.
Examples:
This demonstrates the usage of the .parents(). It is going to color the border of all the parents matched by the function.
Code:
Output:
Reload code
This demonstrates the usage of the .parents() with a selector. It only matches the elements matched by the selector provided to the function.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### parentsUntil

.parentsUntil()
The .parentsUntil() traverses the dom until it reaches an element matching the selector. The traversal stops as soon as the first matching element is found.

The .parentsUntil() is similar to the .parents() when the selector is not supplied as an argument.

Additionally, .parentsUntil() can also take in a filter argument which returns only the elements matched by the filter.
API Module : Traversal
.parentsUntil( [ selector ] )
Type : selector( can be Element, lyteDomObj or String )
Returns : lyteDomObj
The .parentsUntil() traverses up the dom till it reaches an element matching the selector. The selector is optional. If it is not supplied, then the function behaves like .parents().
.parentsUntil( selector, filter )
Type : selector( can be Element, lyteDomObj or String ), filter ( String )
Returns : lyteDomObj
The .parentsUntil() can also take in an additional filter param which is a string and match only the elements matching the filter param.
Examples:
This demonstrates the working of the .parentsUntil() with the selector passed in as an argument. It sets border for all the ancestors until the element matched by the selector.
Code:
Output:
Reload code
This demonstrates the working of .parentsUntil() which takes the filter parameter. Only the elements matching the filter selector have their border changed.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### prev

.prev()
The .prev() returns the immediate previous sibling in the set of all matched elements.

This function can also optionally take in a selector and only those previous siblings matching the selector are returned.
API Module : Traversal
.prev( [selector] )
Type : None or String
Returns : lyteDomObj
This is used to return the immediate previous sibling in the set of all matched elements. Optionally, it also accepts a selector an argument and only those elements matching the selector will returned by the function.
Examples:
This demonstrates the use of the .prev(). It is going to apply background color to its immediate previous sibling.
Code:
Output:
Reload code
In this example only the elements matched by the selector are going to be colored.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### prevAll

.prevAll()
The .prevAll() returns all the previous element siblings for each element in the set of matched elements.

The function also additionally takes in a selector as an argument and only returns those siblings that match the selector.
API Module : Traversal
.prevAll( [selector] )
Type : None or String
Returns : lyteDomObj
The .prevAll() returns the all the previous element siblings. It additionally can also take in a selector and filter siblings based on whether they matched the selector or not.
Examples:
This is going to highlight all the previous siblings of the selected li.
Code:
Output:
Reload code
This is only going to highlight those siblings that match the selector provided in as argument.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### prevUntil

.prevUntil()
The .prevUntil() is used to return all the previous siblings of each element in the set of matched elements until a particular element.

This function accepts a selector as first argument and keeps matching elements until it finds an element that matches the selector and terminates the search.

The .prevUntil() behaves like the .prevAll() when the selector is not provided.

Optionally, it can also take in a filter and only return those elements matching the filter.
API Module : Traversal
.prevUntil( [selector] [, filter] )
Type : selector( String, Element, lyteDomObj), filter( String )
Returns : lyteDomObj
Returns the all the previous siblings until the selector is matched. It also takes in a filter param as an argument and only returns those elements that match the filter.
Examples:
The example below demonstrates the .prevUntil() which colors only the second and third li in the ul block.
Code:
Output:
Reload code
The example below demonstrates the .prevUntil() which colors only the second li in the ul block because the filter is supplied as an argument.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### siblings

.siblings()
Get the siblings of the set matched elements. The function additionally takes a selector and only matches the elements matching the selector.
API Module : Traversal
.siblings()
Type : None
Returns : lyteDomObj
Returns the siblings of the set of matched elements.
.siblings( selector )
Type : String
Returns : lyteDomObj
This takes a valid lyte-dom selector and returns only the siblings matching the selector.
Examples:
The example below sets the background color of the siblings of the elements
Code:
Output:
Reload code
The below example demonstrates the use of selectors in the siblings function. It applies background color only to the siblings that match the selector.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-each

$L.each()
$L.each() iterates through the array or object, and execute callback for each element until false is returned
API Module : Utilities
$L.each( object , callback )
Type : object( object or lyteDomObj or array) , callback ( function )
Arguments : index ( number ) , element ( string )
Returns : lyteDomObj
the function defined is executed for each array element until false is returned
Examples:
In the below example, the background color of the selected set of div elements are changed until false is returned
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-extend

$L.extend()
$L.extend() receives two or more objects and merge to the first object.
API Module : Utilities
$L.extend( object1 , object2 , objectN )
Type : object( object or lyteDomObj or array)
Returns : lyteDomObj
merges the passed objects, but it overwrites the reoccured keys (not a deep copy)
$L.extend( deep , object1 , object2 , objectN )
Type : deep( Boolean ), object( object or lyteDomObj or array)
Returns : lyteDomObj
merges the passed objects, but instead of overwriting merges the reoccured keys also(deep copy). 'deep' can be true but in case of false should not be mentioned
Examples:
Here below, without deep copy y value is replaced and with deep copy values are merged/updated
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-grep

$L.grep()
$L.grep() filters the array elements based on the boolean value returned
API Module : Utilities
$L.grep( array , callback , invert )
Type : array( array of elements ) , callback( function ) , invert( boolean )
Arguments : element( string ), index( number )
Returns : array
If invert is true, then elements returns true are retained. If invert is false, then elements returns false are retained. By default invert is false
Examples:
In the below example, if invert is false elements for which the function returns true is retained thus we get even numbers. if invert is true elements for which the functions returns false are retained thus we get odd numbers
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-map

$L.map()
$L.map() iterates through an array or object and returns a new one with function returned value
API Module : Utilities
$L.map( object , callback )
Type : object( object or lyteDomObj or array) , callback ( function )
Arguments : index( number ) , element( string )
Returns : lyteDomObj
the function defined is executed for each array element and new array is returned
Examples:
For each element in the array the function is executed and then set of value is returned to x. Similarly key values of object is returned to y
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-merge

$L.merge()
$L.merge() merges two arrays into the first array
API Module : Utilities
$L.merge( array1 , array2 )
Type : array( array of elements )
Returns : array
merges the arrays
Examples:
merges two arrays and returns to x. Then [7,8,9] merged with x.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-parse

$L.parse()
$L.parse() returns a object from valid a stringified object
API Module : Utilities
$L.parse( string )
Type : string( a valid JSON string )
Returns : Object
returns a JSON object
Examples:
In the below example, stringified JSON object is parsed into an JSON object
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### lyte-search

$L.search()
$L.search() is used to search the values in the given array which may consist of array of objects or strings, the result will be returned as an array.
API Module : Utilities
$L.search(value, searchKey, searchValue, searchCondition, options)
Arguments : value (array/object), searchKey (string), searchValue (string), searchCondition(string), options(object)
Returns : array
First Argument - Array or Object to be search.


Second Argument - (searchKey) The key is used to specify the value to be searched.


Third Argument - (searchValue) The value is to be search in array/object.


Fourth Argument - (searchCondition) The list of available conditions are startsWith , endsWith, includes , equals, notEquals, any and empty. (By default, includes is the searchCondition)


Fifth Argument - (options) In options, you can specify flag values for trim and caseSensitive (By default trim is false and caseSensitive is true.).
trim - removes whitespace from both ends of a string.
caseSensitive - differentiating between upperCase and lowerCase.
Examples:
In below example, search is done in a given array and returns the result in an array.
Code:
Output:
Reload code
In below example,search is done in an array which may consist of array of nested object.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### fastdom-measure

$L.fastdom.measure()
$L.fastdom.measure() is used to read the dom before the animation frame execution.
API Module : Utilities
$L.fastdom.measure( callback, context )
Returns : callback
The callback to be executed in the animation frame.
Examples:
In the below example, execution order is pointed out.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### fastdom-mutate

$L.fastdom.mutate()
$L.fastdom.mutate() is used to write the dom before the animation frame execution.
API Module : Utilities
$L.fastdom.mutate( callback, context )
Returns : callback
The callback to be executed in the animation frame.
Examples:
In the below example, execution order is pointed out.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### fastdom-clear

$L.fastdom.clear()
$L.fastdom.clear() is used to clear the callback of mutate and measure.
API Module : Utilities
$L.fastdom.clear(callback)
Returns : boolean
true indicates that the callback is exist and it is cleared false indicates that the callback is not exist.
Examples:
Example for clear operations.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### rtlScrollType

$L.rtlScrollType
For Rtl, horizontal scrollbar has different implementations in different browsers. $L.rtlScrollType is used to detect scroll type of the particular browser.
API Module : Utilities
$L.rtlScrollType
3 Types of scrollLeft (scrollWidth = 200)
Browser	Type	Most Left	Most Right	Initial
Chrome/Opera(Blink)/Edge(Blink)/IE6	default	0	200	200
Standard/Firefox/Safari/Opera(Presto)	negative	-200	0	0
IE8 and later	reverse	200	0	0
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### indexOf

indexOf()
This .indexOf() return the first index at which a given element can be found in the array, or -1 if it is not present.
API Module : Utilities
.indexOf(searchElement, fromIndex)
Arguments : searchElement (any value), fromIndex(number)
Returns : number
Examples:
In below example, search is done in a given array and returns the index.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### empty

.empty( )
This .empty() method empties the contents and child nodes inside the matched element
API Module : Utilities
.empty( )
Returns : lyteDomObj
it removes texts, child, descendant nodes along with handlers and data
Examples:
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

### has

.has( )
This .has() method gets the elements that has specified descendant. The descendant can be direct child or grand child or so on.

The selector argument represents a descendant element of the matched set of element that is to be returned
API Module : Utilities
.has( selector )
Type : selector( selector or element )
Returns : lyteDomObj
check for descendant with selector specified
Examples:
Here, the div elements with specified selector element are returned by the .has() method and css method is applied.
Code:
Output:
Reload code
 Feedback
Report a Problem
Suggest a Feature
Ask a Question
Appreciate
Choose a type
 
Choose Severity



 Send Anonymously
Submit Cancel

---

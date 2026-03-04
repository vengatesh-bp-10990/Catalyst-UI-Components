# sLyte Data Display & Media Components

## Table of Contents

- [audio](#audio)
- [badge](#badge)
- [codesnippet](#codesnippet)
- [connect](#connect)
- [connection](#connection)
- [connectshape](#connectshape)
- [cropper](#cropper)
- [editorpanel](#editorpanel)
- [emoji](#emoji)
- [expresstable](#expresstable)
- [kanbanview](#kanbanview)
- [listview](#listview)
- [loader](#loader)
- [lyte-editor](#lyte-editor)
- [notes](#notes)
- [progressbar](#progressbar)
- [qr](#qr)
- [screengrab](#screengrab)
- [slytechart](#slytechart)
- [svg](#svg)
- [table](#table)
- [texteditor](#texteditor)
- [video](#video)
- [voicenote](#voicenote)
- [watermark](#watermark)

## audio

### audio - overview

Audio

This plugin is used to record audio and create audio files from it.

Dependencies
```html
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-audio-thumb.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-audio.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
-----or---
 <!-- Importing files -->
 import "node_modules/@zoho/lyte-ui-component/plugins/lyte-audio-thumb.js"
 import "node_modules/@zoho/lyte-ui-component/plugins/lyte-audio.js"
 import $L from "@zoho/lyte-dom";
```
How To Use

To record an audio with the plugin, include the lyte-audio.js file and call the following code.

```js
$L.media.record( {
    workletBasePath: 'bower_components/localbuild/plugins/lyteAudioWorkers/',
    workerBasePath: 'bower_components/localbuild/plugins/lyteAudioWorkers/',
    onStop: function() {
        console.log( arguments );
    }
} );
```

In the above code, the workerBasePath and workletBasePath correspond to the folder inside which the wavProcessor worker and the audioSampleSender audio worklet are present. Calling the above will start recording audio from the user. To stop the recording, call the following code.

```js
$L.media.stop();
```

Once the recording stops, the onStop function passed to the $L.media.record gets called. The recorded audio is sent as an argument in the form of a blob(in audio/wav format).

Hit the record button below to start recording. Pressing the stop button will download a wav file of the recorded audio.

record stop
Timeslices

If you want to record the audio as set of timeslices, set the timeslice option(in ms). This will fire the onEnd(different from the onStop seen above) callback every x ms with the recorded audio.

```js
$L.media.record( {
    workletBasePath: 'bower_components/localbuild/plugins/lyteAudioWorkers/',
    workerBasePath: 'bower_components/localbuild/plugins/lyteAudioWorkers/',
    timeslice: 1000,
    // Fires the onEnd callback every 1 second(1000ms) with the recorded audio.
    onEnd: function() {
        console.log( arguments );
    }
} );
```

The following example downloads the blob every 1 second once record is pressed.

record stop

---

## badge

### badge - overview

Badge

Badges being a UI component, are small status or notification descriptors for UI elements. Badge component can have a small dot, a number, a string or even a icon in it.

For a perfect result the badge component must be a immediate child of the target component.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-badge.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Default Badge

Lyte Yielded Badgedge is nothing but a notification circle in default red color, user can have 'lyte-if' check for the badge to enable and to remove.

Default
```html
<lyte-button class="btn">
    <lyte-badge class="testBadge" lyte-if={{yourBoolean}}> </lyte-badge>
    <template is="registerYield" yield-name="text">
        Custom Badge
    </template>
</lyte-button>
```
Custom Badge

This is a user custom badge where the user can set data that has to be shown or can have a custom style for the badge.

The custom style input must be a javascript object, example style object is given in API section.

99
Custom Badge
```html
<lyte-button class="btn">
    <lyte-badge class="testBadge" lyte-if={{yourBoolean}} lt-prop-data=99 lt-prop-badge-style={{yourBadgeCSS}}> </lyte-badge>
    <template is="registerYield" yield-name="text">
        Default
    </template>
</lyte-button>
```
Yielded Badge

If the user wants to give any image or icon in a badge, they can use the yielded badge.

Yielded Badge
```html
<lyte-button class="btn">
    <lyte-badge class="testBadge" lyte-if={{yourBoolean}}>
        <template is="registerYield" yield-name='lyteBadgeYield'>
            <div style="width:4px;height:4px;background:#fff;"> </div>
        </template>
    </lyte-badge>
    <template is="registerYield" yield-name="text">
      Yielded Badge
    </template>
</lyte-button>
```

---

## codesnippet

### codesnippet - overview

Code Snippet

A component to highlight code snippets in your application that is also easily extendable to support your languages.

Dependencies
```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-code-snippet.css"></link>
```
Basic Example

To render the code snippet component pass in the code you want to highlight and specify the language(type) of the code being passed in.

Copy
1
<lyte-code-snippet lt-prop-code="{{basicExample}}" lt-prop-type="html"></lyte-code-snippet>
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
<html>
	<head>
		<title>
			hello
		</title>
		<link rel = "stylesheet" href = "somefile.css"/>
	</head>
	<body>
		<script>
			var a = 5;
			var b = 10;
			var c = a + b;
			var str = 'hello world';
		</script>
		<style>
			div [data-attr = "red"]{
				color: blue;
				width: 100%;
				height: 20px;
			}
			h2 {
				color: green;
				font-weight: bold;
			}
			div ~span {
				outline: none;
			}
		</style>
		<script>
			(function (){$L.snippets = {getBuilder: function (language, str ){return new builder (language, str );
			}};
			var builder = function (language, str ){this.tokenizer = $L.snippets.getTokenizer (language, str );
			}builder.prototype.buildSnippets = function (tokens ){var result = document.createDocumentFragment ();
			tokens.forEach (function (token ){var value = token.value, tokenObject = token.tokenInfo, cls = tokenObject.class, span = document.createElement ('span');
			span.setAttribute ('class', cls );
			span.textContent = value;
			result.appendChild (span );
			});
			return result;
			}builder.prototype.build = function (){var tokens = this.tokenizer.build ();
			return this.buildSnippets (tokens );
			}})();
		</script>
		<!-- This is some funny comment here 
                This is another comment which is here -->
		<welcome-comp some-attribute = "This is an attribute">
			Component content &nbsp;
		</welcome-comp>
		
                This is a div
            
	</body>
</html>

Here the code being passed in(basicExample) is rendered below. All white spaces are preserved, and relevant syntax in the language is highlighted appropriately.

Right now the code snippet component supports the following 6 languages. More languages will be supported down the line: html, css, js, xml, json and slyte.

Passing the appropriate lt-prop-type(from one of the 6 previous values) with the appropriate lt-prop-code will render the highlighted code.

This plugin does not support syntax checking. It only does syntax highlighting. So any malformed code will lead to undefined behaviour.

Extending To Support Your Own Language

You can also extend the plugin to support your own language. For this you need to use the $L.snippets.registerLanguage global util to register your own language.

Here is an example of how the code snippet plugin implements CSS with $L.snippets.registerLanguage util

Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
(function (){$L.snippets.registerLanguage ('css', {tokenConfig: [{'token': 'comment',
'class': 'lyteCSSComment',
'regex': /\/ * ([sS ] *? ) *\
//
}, {'group': 'ruleset',
'regex': /.+?(?={){[sS]*?(?=})}/, 'matched-elements': [{'group': 'selector',
'regex': /.+?(?={)/, 'matched-elements': [{'token': 'combinator',
'class': 'lyteCSSCombinator',
'regex': /[+>~]/
                        }, {'group': 'attribute-selector',
'regex': /[.+?(?=])]/, 'matched-elements': [{'token': 'punctuation',
'class': 'lyteCSSPunctuation',
'regex': /[[]]/
                                }, {'token': 'attribute-name',
'class': 'lyteCSSAttributeName',
'regex': /[^[]=]+?(?==)/
                                }, {'group': 'attribute-value',
'regex': /=.*?(?=])]/, 'matched-elements': [{'token': 'punctuation',
'class': 'lyteCSSPunctuation',
'regex': /[=]]/
                                        }, {'token': 'attribute-value',
'regex': /[^=]*?(?=])/, 'class': 'lyteCSSAttributeValue'}]}]}, {'token': 'selector',
'class': 'lyteCSSSelector',
'regex': /[^+>~[]*/
                        }]}, {'group': 'rulebody',
'regex': /{[sS]*?(?=})}/, 'matched-elements': [{'class': 'lyteCSSPunctuation',
'token': 'punctuation',
'regex': /[{}]/
                        }, {'group': 'declaration',
'regex': /[^{}]+?(?=[;}]);?/, 'matched-elements': [{'token': 'rule-name',
'regex': /[S]+?(?=:)/, 'class': 'lyteCSSRuleName'}, {'group': 'rule-value',
'regex': /:[sS]+?(?=[;}]);?/, 'matched-elements': [{'group': 'rule-value',
'regex': /[^:;][^;}]*/, 'matched-elements': [{'token': 'color-value',
'regex': /s*#.*/, 'class': 'lyteCSSColorValue'}, {'token': 'rule-value',
'regex': 'remaining',
'class': 'lyteCSSRuleValue'}]}, {'token': 'punctuation',
'regex': /[:;]/, 'class': 'lyteCSSPunctuation'}]}]}]}]}]});
})();

Here the $L.snippets.registerLanguage will take in a tokenConfig key which will contain the information about the tokens in the language.

A language can be broken down into a stream of tokens and each token can be represented by a regular expression. In our example, the first token is the comment token which is represented by the corresponding regular expression. The class attribute corresponds to the class to be added to the matched string when rendering the element. By adding color css properties to this class, you can highlight the token.

Another concept available in the code-snippet plugin is the concept of groups. Groups can be broken further down into groups or tokens. Groups makes it easier to reason about the structure of the language. In our example, the ruleset group which represents a particular CSS rule, is broken down into the selector group and the rulebody group which are further broken down into other groups and tokens. The broken down groups and tokens are represented through the matched-elements key. The file bottom most elements in this hierarchy are tokens which are again represented by a regular expression.

Workings Of The Tokenizing Engine

When an input string is fed into the component along with the language, the tokenizing engine starts walking through the text and applies each of the regular expressions in the tokenConfig.

When matching the text, it will try to select the best token(regular expression) from the list of available tokens in tokenConfig. The best token to select is based on maximal munch rule where the longest matched string best represents the proper syntax or the rule to select (For eg, lets say the string passed is ifvar and lets say there are two rules, one for if and another for identifiers(string of characters). The second rule is matched because it is the longest match even though the first rule also matches). Once the token is matched, the class for the token is applied after creating an element for it.

Tokens are always matched from the start of the string. If the start of the string does not match any token in the tokenConfig, then it called an unmatched token. The unmatched token has a lyteCSUnmatchedToken class added to it. After matching an unmatched token, the next index from which a token matches is used to continue the tokenizing phase. white spaces that are matched have a lyteCSWhiteSpace class added to them. Once the entire string is consumed, the classes are added to the tokens by creating a span tag and putting the token's string as the span's textContent and this constructed document fragment is displayed as the result.

---

## connect

### connect - overview

Connect

Lyte Connect is a simple, yet powerful tool that helps you to build highly customizable component for creating flow charts.

On receiving the basic element, being in a rectangle shape, you can easily customize the CSS properties and change it into any desired shape as per your wish.

Connectors like curve, line, elbow, advanced_curve, curvyLine are also supported in this component.

Lyte Connect component internally uses Lyte-connection plugin for creating connections.

As Lyte Connect is built on the top of Lyte framework, it is good to have a better understanding of the Lyte Framework.

On installing the dependencies, you can easily install Lyte Connect and start working with it.



Dependencies
```html
<!-- ui-component css files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-sortable.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-connect-item.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-connect.css"></link>
```

The anatomy of a connect element is as shown below.

Tags used

The following custom tags are used in Lyte Connect.

lyte-connect-item	Individual element
lyte-connect-header	Header part of connect item
lyte-connect-footer	Footer part of connect item
lyte-connection-content	Scrollable element which contains all inner list
lyte-suggestion-element	Suggestion icon part of connect item

Data structure

Each element's data should be defined in lt-prop-data ( Array ).

Lyte-connect component internally iterates this data and creates lyte-connect-item elements.

Contents of each individual element can be rendered through yield.

After the initial render, elements should be rendered / removed through the utils provided by the connect component.



```javascript
{

    fields: [ // It should be rendered inside lyte-connect-content( for handling lazy loading )
        // repeated fields -  data for individual field item
    ],
    "position": { // Position data. Particular element will be rendered in given position. If its not provided it will be placed in random place.
        "left": 40, // px value
        "top": 40
    },
    "id": "random_comment_1", // will be set as id for lyte-connect-item. It should be unique
    class : "some_class" // will be added as class to lyte-connect-item element
}
```
```javascript
{
  id : "random_group_id",
  position : {
    left : 0,
    top : 0
  },
  children : [
    // same structure of individual element data
  ]
}
```
Elbow example

An elbow connnector is made of series of connected lines. Generally they are termed as one way, two way, three way, ... N way connectors.

Generally Lyte Connect creates one, two, three, four, five way connectors and on enabling Line break it can go upto N ways.

Connection arc is supported only in elbow connectors. When two connector lines orthogonal intersects, an arc gets created in horizontal line in overlapping point. And the arcs won't be created while dragging.

Connection avoidance is supported only in elbow connectors. When two horizontal lines from different elements overlap, the new line position automatically moves to a different free position within the available space. Avoidance won't be checked while dragging

Line marker is also supported in elbow connectors. If it is enabled, a marker element is created on the center point of the line. While dragging, line marker is not created. Marker element should be mentioned as array of points. ( In this example it is given as [ [ 0,-5 ], [ 10, 0 ], [ 0, 5 ] ] )



For rendering connection you need to specify src and target positions.( refer js sample ). If you don't have any positional details of shapes and connectors use Lyte-shape-wrap component.

```html
<lyte-connect lt-prop-data = {{elbowFields}} lt-prop-line-marker = '[[0,-5],[10,0],[0,5]]' lt-prop-elbow-arc = true lt-prop-avoid-line = true lt-prop-text-box = true lt-prop-undo = true lt-prop-arrange-type = "siblingtree" lt-prop-connection-type = "elbow" lt-prop-check-line-break = true lt-prop-selectors = '{"selector":".lyteConnectAnchorPoint","markerEnd":"url(#lyteConnectionTailMarker)","markerStart":"url(#lyteConnectionHeadMarker)"}' lt-prop-query = "#elbow_preview" lt-prop-render-connectors-in-preview = true lt-prop-animation-duration = "0.4s" lt-prop-reconnect-handling = true lt-prop-default-anchors = [] style = "width: 100%;height: 1000px;border: 1px solid" on-connect = "{{method('connectCreate1')}}" on-reconnect = "{{method('reconnect1')}}">
	  <template is = "registerYield" yield-name = "connection">
	      <lyte-text lt-prop-value = {{connection.text}}></lyte-text>
	  </template>
	  <template is = "registerYield" yield-name = "preview">
	      <lyte-text lt-prop-value = {{data.text}}></lyte-text>
	  </template>
	  <template is = "registerYield" yield-name = "textbox">
	      <%ltPropItem.text.forEach( function( item ){%>
	        <span class="lyteConnectInnerSpan {{item.class}}" id = {{item.id}}>
	          <span class = 'lyteInnerText'>{{item.text}}</span>
	        </span>
	      <%})%>
	  </template>
</lyte-connect>
```
```javascript
elbowFields ==> [{
        "id": "state_0",
        "text": "Start"
    },
    {
        "id": "state_1562470000005128563",
        "text": "signup"
    }, .....
]


	// connection creation part
	[ {
	        "options": {
	            "id": "id21", // will be set to connector created
	            "src_position": {
	                "x": 0.5714285714285714, // in term of width of the shape
	                "y": 1 // in term of height of the shape
	            },
	            "target_position": {
	                "x": 0.5714285714285714,
	                "y": 0
	            }
	        },
	        "src": "#state_0", // src element selector
	        "target": "#state_1562470000005128563" // target element selector
	    },
	    .......
	].forEach( function( item ){
		$L('lyte-connect')[ 0 ].connect( item.src, item.target, item.options );
	});



	static methods() {
	  return{
		connectCreate1 : function( src, target, connect, evt, pos ){

			var evt_target = evt.target;

			if( !$L( evt_target ).hasClass( 'lyteConnectAnchorPoint' ) ){
				return;
			}

			connect.connect( '#' + src.parentNode.id, '#' + target.id, {
				id : "connection" + parseInt( Math.random() * 10000 ),
				src_position : pos,
				target_position : {
					x : parseFloat( evt_target.getAttribute( 'left' ) ),
					y : parseFloat( evt_target.getAttribute( 'top' ) )
				}
			});
		},

		reconnect1 : function(){
			var evt = arguments[ 4 ];

			return evt.target.closest( 'lyte-connect-item' );
		}
          }
	}
```
Curve example

The connecting lines can also take the shape of a curve. While implementing the curves, line breaks, arc and line markers are not supported.

But you can render connector text box in this connector type.

Lyte Connect supports lazy loading for rendering each connect item's contents. Define your contents in fields key. You can use renderData key to iterate your contents. Each connect item data must be passed through the yield.

When a connector's source or the target element is not rendered in DOM due to lazy loading or hidden during scroll, you can show alternate active source or target element. In such a case, provide a source or the target query like the below example.



```html
<lyte-connect lt-prop-query = "#preview" lt-prop-preview = true lt-prop-data = {{fields}} on-select = "{{method('select')}}" on-connect = "{{method('connectCreate')}}" on-reconnect = "{{method('reconnect')}}" lt-prop-select-mode = {{select}} lt-prop-group-arrange = {{group_arrange}}>
	<template is = "registerYield" yield-name = "connection">
			<lyte-connection-header>{{connection.name}}</lyte-connection-header>
			<lyte-connection-content>
				<%connection.renderData.forEach( function( row ){%>
					<lyte-connection-module id = {{row.id}}>
						<%connection.header.forEach(function(cell){%>
							{{row[ cell.key ]}}
				   		<%})%>
					</lyte-connection-module>
				<%},{unbound:true})%>
			</lyte-connection-content>
			<lyte-connection-footer id = "footer_{{connection.id}}">Some footer</lyte-connection-footer>
	</template>
	<template is = "registerYield" yield-name = "preview">
		<span>{{module_id}}</span>
	</template>
	</lyte-connect>
</div>
```
```javascript
didConnect : function(){
		var elem = $L( 'lyte-connect', this.$node ),
		fields = this.data.fields,
		len = fields.length;

		// random connection generation code

		fields.forEach( function( item, index ){

			var count = 0;

			while( count < 3 ){
				var random_field_index = 0 | Math.random() * len,
				other_data = fields[ random_field_index ];

				if( index == random_field_index ){
					continue;
				}

				var src_index = 0 | Math.random() * 100,
				target_index = 0 | Math.random() * 100,
				src = '#' + item.fields[ src_index ].id + ',#' + item.id + ' lyte-connection-footer', // if corresponding module is not rendered in dom due to lazy loading footer element will be considered as src/target element
				target = '#' + other_data.fields[ target_index ].id + ',#' + other_data.id + ' lyte-connection-footer';
￼    padding-bottom: 25px;
				if( !elem.connection( 'hasConnected', src, target ) ){
					elem.connection( 'create', src, target, {
						id : "connection" + parseInt( Math.random() * 10000 ),
						src_position : {
							y : 0.5
						},
						target_position : {
							y : 0.5
						}
					});
					count++;
				}
			}
		});

	},

	data (){
		return {
			fields : prop( 'array', { default : __someDefaultShapeData } ),
			select : prop( 'boolean' ),
			contextual : prop( 'string', { default : "100" } ),
			group_arrange : prop( 'boolean' )
		}
	},

	obs : function( arg ){
		this.$node.querySelector( 'lyte-connect' ).ltProp( 'contextualZoomLevel', Number( arg.newValue ) );
	}.observes( 'contextual' ),

	static actions() {
		// arrange code
		arrange : function(){
			$L( 'lyte-connect', this.$node ).get( 0 ).arrange();
		},

		// grouping code

		group : function(){
			this.$node.querySelector( 'lyte-connect' ).groupSelected();
		},

		// switching between select mode and drag mode

		select : function(){
			this.setData( 'select', !this.getData( 'select' ) );
		},

		group_arrange : function(){
			this.setData( 'group_arrange', !this.getData( 'group_arrange' ) );
		}
	  }
	},

	static methods() {
	    return{

		zoom : function( arg ){
			this.$node.querySelector( 'lyte-connect' ).ltProp( 'contextualZoomLevel', arg );
		},
		select : function( evt ){
			if( evt.target.closest( 'lyte-connection-footer' ) ){
				return false;
			}
		},

		reconnect : function(){
			var evt = arguments[ 4 ];

			return evt.target.closest( 'lyte-connection-module' );
		},

		// this will be called when a connector is to be created by click and drag.

		connectCreate : function( src, target, wrapper, evt ){
			var elem = evt.target.closest( 'lyte-connection-module' );

			if( elem && !wrapper.hasConnected( src, elem ) ){
				wrapper.connect( '#' + src.id, '#' + elem.id, {
					id : "connection" + parseInt( Math.random() * 10000 ),
					src_position : {
						y : 0.5
					},
					target_position : {
						y : 0.5
					}
				});
			}
		}
	}
	}
```
Classes used

The following classes are used in this component.

These classes can be added and it can be customized as per your needs.

Based on the source and target elements tagname different source and target classes will be added to the .lyteConnectionContainer connector element



lyteConnectGroupShape	It will be added for group shape
lyteConnectInnerItem	It will be added for all the children of a group shape
lyteConnectionSelected	It will be added when an element is selected to drag
lyteShapeHover	It will be added to an element and its all the src/target/connector elements when that element is hovered
lyteConnectionHover	It will be added to an element and its all the src/target/connector elements when a particular connector element is hovered
lyteConnectionSrcElement	It will be added to all the connector source elements
lyteConnectionTargetElement	It will be added to all the connector target elements
lyteConnectSelection	This class will be added when an element is selected by click
lyteDragSelection	This will be added to lyte-connect element when mouse is down for entire area drag
lyteClickSelection	This will be added to lyte-connect element when mouse is down for click and drag selection
lyteConnectSelectionElement	This class will be added to div element created for selecting shapes in select mode
lyteConnectContextualLevel<zoom_level>	This class will be added to the lyte-connect element based on the contextual zoom level
lyteContextualAnimation	This class will be added before performing contextual zoom animation. You can define all kind of transition properties in this class
lyteTextboxHover	This will be added to shapes and connector when its textbox got focused
lyteConnectionCreateMousedown	This will be added to the lyte-connect element when a new connector is created through mouse actions
lyteConnectorReconnect	This will be added to the lyte-connect element when a connector is dragged for reconnection in lt-prop-reconnection-handling
lyteElementSuggestedDisplay	This will be added to the lyte-suggestion-element when the suggestion is possible
lyteElementSuggestedHover	This will be added to the lyte-suggestion-element when it is hovered
lyteConnectSuggestedItem	This will be added to the lyte-connect-item element when it is created by suggestion, while hovering
Undo

Lyte-connect supports undo and redo operations. To enable this provide lt-prop-undo as true to lyte-connect element.

Shape creation, delete, connection creation, delete, textBox creation, delete, adding, removing textbox values, shape movement, contextual zoom are supported in undo and redo.

You can also push your custom undo, redo operations in lyte-connect component. In this case while calling undo and redo operation onCustomUndo method gets called. You can perform your custom operations inside this.

Undo value should be a strigified array / object.

```javascript
$L( 'lyte-connect' ).get( 0 ).pushToQueue({
	type : "custom",
	sub_type : "insert_anchor",
	value : JSON.stringify({
		index : 1,
		main_index : 1,
		pt : {
			x : 0,
			y : 0.5
		},
		id : 'shape_id'
	})
})
```
Contextual zoom

Although scale zooming is supported in connect element it is recommended to use contextual zoom.

Whenever user wants to see all the available shapes and connectors in the single page it is hard to read the contents of the shapes in lower scale levels.

Instead of scaling, you can go with contextual zoom. based on the zoom level different classes and --contextualLevel css variable will be updated. You can modify font size, width, height properties based on the css classes and variable. You can also hide unnescessary elements in lower zoom levels. Modifications in left, top values should be defined in contextual zoom data. You can even hide connectors in lower zoom levels

Default contextual zoom value is 100( which is equivalent to scale 1 );

Magnetiser

To avoid shape overlaps, magnetiser is used.With magnitiser, on moving a shape, all the other nearby shapes gets adjusted based on the current moving shape's position.



```javascript
<lyte-connect lt-prop-magnetiser = true lt-prop-data = {{elbowFieldsCopy}} lt-prop-avoid-line = true lt-prop-arrange-type = "siblingtree" lt-prop-connection-type = "elbow" lt-prop-check-line-break = true lt-prop-selectors = '{"selector":".lyteConnectAnchorPoint","markerEnd":"url(#lyteConnectionTailMarker)","markerStart":"url(#lyteConnectionHeadMarker)"}' lt-prop-preview = false lt-prop-default-anchors = [] style = "width: 100%;height: 1000px;border: 1px solid">
                       <template is = "registerYield" yield-name = "connection">
                           <lyte-text lt-prop-value = {{connection.text}}></lyte-text>
                       </template>
                   </lyte-connect>
```
Group arrange

You can render connect items inside a connect items. This is termed as group shape. You cannot drag child element alone.

When group arrange property is enabled you can reposition group items, add and remove elements in group. You can also create new groups

```html
<lyte-connect lt-prop-data = {{groupfields}} lt-prop-preview = false lt-prop-connection-type = "advanced_curve" lt-prop-contextual-zoom = false lt-prop-arrange-type = "siblingtree" lt-prop-group-arrange = true>
             <template is = "registerYield" yield-name = "connection">
               <%if( connection.sub ){%>
                 <div class="listwrapper">
                   <%connection.sub.forEach( function( item, index ){%>
                     <div id = {{item.id}}>{{item.text}}</div>
                   <%})%>
                 </div>
               <% } else {%>
                 <div class="textWrapper">{{connection.text}}</div>
               <%}%>
             </template>
           </lyte-connect>
```
```javascript
// in component js

	groupfields : prop( 'array', { default : [
	{
		id : "group",
		children : [
			{
				id : "calls",
				text : "Calls"
			},
			{
				id : "subject",
				text : "Subject"
			},
			{
				id : "general",
				text : "General"
			}
		]
	},
	{
		id : "meeting",
		text : "Meeting"
	},
	{
		id : "feeds",
		text : "Feeds"
	},
	{
		id : "tasks",
		text : "Tasks"
	},
	{
		id : "reports",
		text : "Reports"
	},
	{
		id : "news",
		text : "News"
	}
] } )


// connection rendering

[
	{
		src : "calls",
		target : "subject",
		options : {
			src_position : {
				x : 1,
				y : 0.5
			},
			target_position : {
				x : 0,
				y : 0.5
			}
		}
	},
	{
		src : "subject",
		target : "general",
		options : {
			src_position : {
				x : 1,
				y : 0.5
			},
			target_position : {
				x : 0,
				y : 0.5
			}
		}
	},
	{
		src : "calls",
		target : "meeting",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "calls",
		target : "feeds",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "calls",
		target : "tasks",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "subject",
		target : "feeds",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "general",
		target : "tasks",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "meeting",
		target : "reports",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	},
	{
		src : "feeds",
		target : "news",
		options : {
			src_position : {
				x : 0.5,
				y : 1
			},
			target_position : {
				x : 0.5,
				y : 0
			}
		}
	}
].forEach( function( item ){
	lyteConnectElement.connect( "#" + item.src, "#" + item.target, item.options );
});
```
Suggestion

You can easily create any elements using the given suggestion and it also establishes connection between the elements.

This features plays a significant role in arranging the elements as per your wish.



```html
<lyte-connect style="width: 100%;" lt-prop-data = {{elbowSuggestData}}  lt-prop-connection-type = "elbow" lt-prop-avoid-line = true lt-prop-query = "#preview" lt-prop-preview = true lt-prop-suggestion= true lt-prop-suggestion-dimensions='{"height":24,"width":140,"left":5,"top":10,"right":5,"bottom":10}'>
	<template is = "registerYield" yield-name = "suggest_icon">
		<span class="lyteConnectSuggestionAddIcon"></span>
	</template>
	<template is = "registerYield" yield-name = "connection">
		<lyte-text lt-prop-value = {{connection.text}}></lyte-text>
	</template>
	<template is = "registerYield" yield-name = "preview">
		<span>{{module_id}}</span>
	</template>
</lyte-connect>
```
```javascript
// in component js

elbowSuggestData : prop( 'array', { default : [
	{
		"id": "state_0",
		"text": "Start"
	},
	{
		"id": "state_1562470000005128563",
		"text": "signup"
	},
	{
		"id": "state_1562470000005128583",
		"text": "company"
	},
	{
		"id": "state_1562470000005128603",
		"text": "other module access"
	},
	{
		"id": "state_1562470000005128631",
		"text": "setup"
	}
] } )

 // connection rendering

 [
	{
		src : "#state_1562470000005128583",
		target : "#state_0"
	},
	{
		src : "#state_1562470000005128583",
		target : "#state_1562470000005128563"
	},
	{
		src : "#state_1562470000005128583",
		target : "#state_1562470000005128603"
	},
	{
		src : "#state_1562470000005128583",
		target : "#state_1562470000005128631"
	}
].forEach(function(item){
	elem.connect( item.src, item.target, {
		src_position : {
			x:0.5,y :1
		},
		target_position : {
			x:0.5,y : 0
		}
	})
});
```
Path Tracing

Path Tracing is used to highlight the accessible and shortest path, whereas animation takes place only in the shortest path.



Note : If a new animation or highlight is requested when another animation or highlight is already happening, the ongoing animation or highlight will be stopped, and instead the latest one will be performed.

```javascript
pathTraceData : prop( 'array', { default : [
	{
		"id": "state_0",
		"text": "Start"
	},
	{
		"id": "state_1562470000005128563",
		"text": "signup"
	},...
]});


// connection creation part
[ {
		"options": {
			"id": "id21", // will be set to connector created
			"src_position": {
				"x": 0.5714285714285714, // in term of width of the shape
				"y": 1 // in term of height of the shape
			},
			"target_position": {
				"x": 0.5714285714285714,
				"y": 0
			}
		},
		"src": "#state_0", // src element selector
		"target": "#state_1562470000005128563" // target element selector
	},
	.......
].forEach( function( item ){
	$L('lyte-connect')[ 0 ].connect( item.src, item.target, item.options );
});


static actions(){
return{
	animate : function(){  //used to animate the shortest path
		$L( 'lyte-connect', this.$node ).tracePath("#src_id", "#trg_id", "animation");
	},

	remove_animate : function(){  //used to remove the animation
		$L( 'lyte-connect', this.$node ).tracePath("removeAnimation");
	},

	highlight : function(){  //used to highlight shortest and longest path
		$L( 'lyte-connect', this.$node ).tracePath("#src_id", "#trg_id", "highlight");
	},

	remove_highlight : function(){ //used to remove the highlight
		$L( 'lyte-connect', this.$node ).tracePath("removeHighlight");
	}
}
}
```

---

## connection

### connection - overview

Connection

Lyte-connection is a plugin used to create connections between two dom elements.

Connection lines can be elbow, curved and straight lines. These are created in svg elements.

You can define suitable marker elements for lines created inside svg element. You need to render a svg element inside your element. Connection lines are created inside in this svg element.

Whenever your element dimension and position are changed you can call update util for refreshing the connectors.

Source and target position of a connector element will be based on src_position and target_position( { y : 0.5, x : 1 } ). x times of width and y times of height will be used for positioning.

Dependencies
```html
<!-- common ui-component files -->
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"></script>;
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/connect/lyte-connection.js"></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/connect/lyte-connection.elbow.js"></script> // for elbow connections
```
Anatomy

The anatomy of a connection is as shown below.

Css used

Add the following css while using the connection plugin

```css
.lyteConnectionPath{
	stroke: blue;
	stroke-width: 2;
	fill: none;
}

.lyteConnectionFakePath{
	stroke: transparent;
	stroke-width:5;
	fill: none;
}

.lyteConnectionFakeContainer, .lyteConnectionContainer{
	pointer-events: none;
	/*will-change: transform;*/
}

.lyteConnectionContainer path{
	pointer-events: auto;
	/*will-change: d*/
}

.connectionExampleMarker {
	pointer-events: none;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
```
Elbow connections

This will create elbow connections between provided source and target elements. You can provide elbow corner radius for the connectors.

Also you can provide modifier values for elbow connectors. Generally for a 3 way elbow connector mid line will pass through mid point of width / height based on the start position. by passing modifier you can define the mid line position in 3 way connector. it will be px value from start point of the connector

```javascript
var $node = $L( '.exampleElbow', this.$node ).connection({
	wrapperElement : $L( this.$node ).find( '.exampleElbow .connectionExampleMarker' ).get( 0 ), // svg element inside wrapper. here all the connections will be created
	connector_radius : 0,
	connection_type : "elbow",
	markerEnd : "url(#lyteConnectionTailMarker)", // will be set for all the connections created
	markerStart : "url(#lyteConnectionHeadMarker)"
});

[ [ "#pk1", "#pk2" ], [ "#pk1", "#pk3" ], [ "#pk2", "#pk4" ], [ "#pk4", "#pk5" ], [ "#pk4", "#pk6" ], [ "#pk2", "#dummy", 33 ] ].forEach( function( item ){
	$node.connection( 'create', item[ 0 ], item[ 1 ], {
		id : "connection" + parseInt( Math.random() * 10000 ),
		// for rtl give src position as target and target as src
		src_position : {
			y : 0.5,
			x : 1
		},
		target_position : {
			y : 0.5,
			x : 0
		},
		modifiers : item[ 2 ] ? [ item[ 2 ] ] : void 0,
		markerEnd : item[ 2 ]/*, // will be set for particular connection
		 class : "pk" */
	});
});
```
```html
<div class="exampleElbow">
	<div class="connectionElbowExampleWrap" style="position: relative;">
		<div class="srsSection w300 mR30 dIB" id = "email1">
			<div class="srsSectionHead">
				<span>Follow-up 1</span>
			</div>
			<div class="srsSectionCont p15">
				<div class="srsSectionInnerCont whiteBg">
					<div class="srsInnerHead p10" id = "pk1">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Email</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>

						<p class="color_5 pT15 pB7">Template</p>
						<p class="pB5">Greetings template</p>

						<p class="color_5 pT15 pB7">From</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>

						<p class="color_5 pT15 pB7">Reply to</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>
					</div>
				</div>
			</div>
		</div>
		<div class="srsSection w300 mR30 dIB" id = "email2">
			<div class="srsSectionHead">
				<span>Follow-up 2</span>
			</div>
			<div class="srsSectionCont p15">
				<div class="srsSectionInnerCont whiteBg">
					<div class="srsInnerHead p10" id = "pk2">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Email</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>

						<p class="color_5 pT15 pB7">Template</p>
						<p class="pB5">Greetings template</p>

						<p class="color_5 pT15 pB7">From</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>

						<p class="color_5 pT15 pB7">Reply to</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>
					</div>
				</div>

				<div class="srsSectionInnerCont whiteBg mT20">
					<div class="srsInnerHead p10" id = "pk3">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Tasks</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>

						<p class="color_5 pT15 pB7">Template</p>
						<p class="pB5">Greetings template</p>
					</div>
				</div>
			</div>
		</div>
		<div class="srsSection w300 mR30 dIB" id = "email3">
			<div class="srsSectionHead">
				<span>Follow-up 3</span>
			</div>
			<div class="srsSectionCont p15">
				<div class="srsSectionInnerCont whiteBg" id = "dummy" style="display: inline-block;padding: 10px;transform: translate(100px, 200px);">dummy</div>
				<div class="srsSectionInnerCont whiteBg" style="margin-top: 400px;">
					<div class="srsInnerHead p10" id = "pk4">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Email</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>

						<p class="color_5 pT15 pB7">Template</p>
						<p class="pB5">Greetings template</p>

					</div>
				</div>
			</div>
		</div>
		<div class="srsSection w300 mR30 dIB" id = "email4">
			<div class="srsSectionHead">
				<span>Follow-up 4</span>
			</div>
			<div class="srsSectionCont p15">
				<div class="srsSectionInnerCont whiteBg">
					<div class="srsInnerHead p10" id = "pk5">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Email</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>

						<p class="color_5 pT15 pB7">Template</p>
						<p class="pB5">Greetings template</p>

						<p class="color_5 pT15 pB7">From</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>

						<p class="color_5 pT15 pB7">Reply to</p>
						<p class="pB5">ponkarthikeyan.t@zohocorp.com</p>
					</div>
				</div>

				<div class="srsSectionInnerCont whiteBg mT20">
					<div class="srsInnerHead p10" id = "pk6">
						<span class="zcrm_SvgIcons dIB"></span>
						<span> Calls</span>
					</div>
					<div class="srsInnerCont pL30 pR30 pB20">
						<p class="color_5 pT15 pB7">Name</p>
						<p class="pB5">Welcoming Email</p>

						<p class="color_5 pT15 pB7">When to send</p>
						<p class="pB5">1 Day(s) after enrollment</p>
					</div>
				</div>
			</div>
		</div>
		// svg wrapper and marker definition
		<svg xmlns="http://www.w3.org/2000/svg" class = "connectionExampleMarker">
			  <defs>
			  	<marker id = "lyteConnectionHeadMarker" markerUnits = "strokeWidth" markerWidth = 12 markerHeight = 12 refX = 6 refY = 6 orient = "auto">
			  		<ellipse cx = 6 cy = 6 rx = 2 ry = 2></ellipse>
			  	</marker>
			  	<marker id = "lyteConnectionTailMarker" markerUnits = "strokeWidth" markerWidth = 12 markerHeight = 12 refX = 6 refY = 3 orient = "auto">
			  		<path d = "M 6 3 L 0 6 0 0 z"></path>
			  	</marker>
			  </defs>
		</svg>
	</div>
            	</div>
```
Curved connections

This will create curved connections between provided source and target elements.

In this a scroll event is bound to the scrollable element. whenever that element is scrolled all the connectors associated with that element are refreshed through update util.

Passing module data while initializing plugin will enable connection creation by click and drag.

```javascript
var element = $L( '.connectionExampleOuter' );
element.connection({
	wrapperElement : $L( '.curveExample .connectionExampleMarker' ).get( 0 ), // svg element inside wrapper. here all the connections will be created
	connection_type : "curve",
	markerEnd : "url(#lyteConnectionTailMarker)", // will be set for all the connections created
	markerStart : "url(#lyteConnectionHeadMarker)"
});

[ '#module3', '#module4' ].forEach( function( item ){
	element.connection( 'create', '#parent .anchorPoint', item + ' .anchorPoint', { // creating a connection
		id : "connection" + parseInt( Math.random() * 10000 ), // id of the connector
		// for rtl give src position as target and target as src
		src_position : {
			y : 0.5,
			x : 1
		},
		target_position : {
			y : 0.5,
			x : 0
		},
		class : "some_random_class" // class to be added for the connection
	});
});

$L( '.connectionExampleInnerContent' ).bindScroll( function(){
	Array.from( $L( this ).find( '.lyteConnectionTargetElement,.lyteConnectionSrcElement' ) ).forEach( function( item ){
		element.connection( 'update', item );
	});
})
```
```html
<div class="connectionExampleOuter curveExample" style="width: 100%;">
						<div class="connectionExampleHeader">
							<span class="connectionExampleTitle">Source</span>
							<span class="connectionExampleTitle">Destination</span>
						</div>
						<div class="connectionExampleContent">
							<div class="connectionExampleInnerContent">
								<span class="innerChild">
									<span class="child" id = "parent">
										Parent module
										<span class="anchorPoint"></span>
									</span>
								</span>
							</div>
							<div class="connectionExampleInnerContent">
								<span class="innerChild" id="module1">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 1
									</span>
								</span>
								<span class="innerChild" id="module2">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 2
									</span>
								</span>
								<span class="innerChild" id="module3">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 3
									</span>
								</span>
								<span class="innerChild" id="module4">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 4
									</span>
								</span>
								<span class="innerChild" id="module5">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 5
									</span>
								</span>
								<span class="innerChild" id="module6">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 6
									</span>
								</span>
								<span class="innerChild" id="module7">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 7
									</span>
								</span>
								<span class="innerChild" id="module8">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 8
									</span>
								</span>
								<span class="innerChild" id="module9">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 9
									</span>
								</span>
								<span class="innerChild" id="module10">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 10
									</span>
								</span>
								<span class="innerChild" id="module11">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 11
									</span>
								</span>
								<span class="innerChild" id="module12">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 12
									</span>
								</span>
								<span class="innerChild" id="module13">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 13
									</span>
								</span>
								<span class="innerChild" id="module14">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 14
									</span>
								</span>
								<span class="innerChild" id="module15">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 15
									</span>
								</span>
								<span class="innerChild" id="module16">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 16
									</span>
								</span>
								<span class="innerChild" id="module17">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 17
									</span>
								</span>
								<span class="innerChild" id="module18">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 18
									</span>
								</span>
								<span class="innerChild" id="module19">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 19
									</span>
								</span>
								<span class="innerChild" id="module20">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 20
									</span>
								</span>
								<span class="innerChild" id="module21">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 21
									</span>
								</span>
								<span class="innerChild" id="module22">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 22
									</span>
								</span>
								<span class="innerChild" id="module23">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 23
									</span>
								</span>
								<span class="innerChild" id="module24">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 24
									</span>
								</span>
								<span class="innerChild" id="module25">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 25
									</span>
								</span>
								<span class="innerChild" id="module26">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 26
									</span>
								</span>
								<span class="innerChild" id="module27">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 27
									</span>
								</span>
								<span class="innerChild" id="module28">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 28
									</span>
								</span>
								<span class="innerChild" id="module29">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 29
									</span>
								</span>
								<span class="innerChild" id="module30">
									<span class="child">
										<span class="anchorPoint"></span>
										Child Module 30
									</span>
								</span>
							</div>
						</div>
							<svg xmlns="http://www.w3.org/2000/svg" class = "connectionExampleMarker">
							  <defs>
							  	<!-- marker element -->
							  	<marker id = "lyteConnectionHeadMarker" markerUnits = "strokeWidth" markerWidth = 12 markerHeight = 12 refX = 6 refY = 6 orient = "auto">
							  		<ellipse cx = 6 cy = 6 rx = 2 ry = 2></ellipse>
							  	</marker>
							  	<marker id = "lyteConnectionTailMarker" markerUnits = "strokeWidth" markerWidth = 12 markerHeight = 12 refX = 6 refY = 3 orient = "auto">
							  		<path d = "M 6 3 L 0 6 0 0 z"></path>
							  	</marker>
							  </defs>
						</svg>
					</div>
```
Line connections

This will create Line connections between provided source and target elements.

```javascript
var element = $L( '.connectionExampleOuter' );
		element.connection({
			wrapperElement : $L( '.curveExample .connectionExampleMarker' ).get( 0 ), // svg element inside wrapper. here all the connections will be created
			connection_type : "line",
			markerEnd : "url(#lyteConnectionTailMarker)", // will be set for all the connections created
			markerStart : "url(#lyteConnectionHeadMarker)"
		});

		[ '#module3', '#module4' ].forEach( function( item ){
			element.connection( 'create', '#parent .anchorPoint', item + ' .anchorPoint', { // creating a connection
				id : "connection" + parseInt( Math.random() * 10000 ), // id of the connector
				// for rtl give src position as target and target as src
				src_position : {
					y : 0.5,
					x : 1
				},
				target_position : {
					y : 0.5,
					x : 0
				},
				class : "some_random_class" // class to be added for the connection
			});
		});

		$L( '.connectionExampleInnerContent' ).bindScroll( function(){
			Array.from( $L( this ).find( '.lyteConnectionTargetElement,.lyteConnectionSrcElement' ) ).forEach( function( item ){
				element.connection( 'update', item );
			});
		})
```

---

## connectshape

### connectshape - overview

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## cropper

### cropper - overview

Cropper

Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-cropper.css"> </link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
<!-- Importing files -->
import "node_modules/@zoho/lyte-ui-component/plugins/lyte-cropper.js"
import $L from "@zoho/lyte-dom";
---or----
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-cropper.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
```
Default Cropper

This is the basic image cropping plugin where your can initiate the cropper by just calling the .cropper() function to you image tag. Here in this cropper there are some options available like "Rotate Image" , "Move Cropper" , "Resize Cropper" and multiple Aspect ratios.

```javascript
//initiating a cropper
$L(".yourImageClass").cropper();
//Obtaining the cropper data
var cropperData = $L(".yourImageClass").data('cropper');
```
```html
<div>
  <img class="yourImageClass" src="yourImageUrl">
</div>
```
Cropper with data
Sample Cropper
Aspect ratio: 
n:n
 Get Cropped Image

---

## editorpanel

### editorpanel - overview

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## emoji

### emoji - overview

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

## expresstable

### expresstable - overview

Expresstable

ExpressTable is a sortabletable UI component, used to display data in rows and columns. You can use these table to sort table columns. sLyte expresstable uses browser scrollbar for fixed header, fixed column( It will be applied internally ).


Strictly follow lyte-expresstable's given structure or else it will break entire table and add all the classes properly. Rowspan and colspan are not supported in lyte-expresstable( display : table doesn't support rowspan and colspan )

```html
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-expresstable.css"></link>
```

The anatomy of a expresstable is as shown below.

Tags of the table.



lyte-exptable-tr - it will act as table row
lyte-exptable-th - it will act as table header cell
lyte-exptable-td - it will act as table body cell
Default table

This is default table. You can either pass data to lyte-expresstable or render your own table by yield

```html
<lyte-expresstable lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="height: 150px"> </lyte-expresstable>
```
```html
<lyte-expresstable  lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="height: 150px" >
    <template is = 'registerYield' yield-name = 'headerYield'>
        <lyte-exptable-tr class="originalColumn lyteExpTableRow">
            <% ltPropTableHeader.forEach(function(list,index){ %>
                <lyte-exptable-th id={{list.id}} class = "lyteExpTableHead " index = {{indexVal}} %>
                    {{unescape(list[tableProperties.headerKey])}}
                </lyte-exptable-th>
            <%})%>
        </lyte-exptable-tr>
    </template>
    <template is = 'registerYield' yield-name = 'contentYield'>
        <template is="for" items={{tableProperties.content}} item="list" index="indexVal">
            <lyte-exptable-tr class="lyteExpTableRow">
                <template is="for" items={{ltPropTableHeader}}  item="header">
                    <lyte-exptable-td class="lyteExpTableCell">
                        {{unescape(lyteUiGetValue(list,header[tableProperties.bodyKey]))}}
                    </lyte-exptable-td>
                 </template>
            </lyte-exptable-tr>
        </template>
    </template>
</lyte-expresstable>
```
```javascript
// in your component
  data() {
    return {
  headerJSON : prop( 'array' , { default : [
{ "name": "From", "body": "place" },
{ "name": "No", "body": "serial" },
{ "name": "From", "body": "place" },
{ "name": "Name", "body": "name" }
]} ),
   contentJSON : prop ( 'array' , { default : [
{ "place": "Agra", "serial": 1, "name": "Taj mahal" },
{ "place": "Mysore", "serial": 2, "name": "Mysore palace" },
{ "place": "Tanjore", "serial": 3, "name": "Brihadheeswara temple" }
] }  )
 }
 }
```
From
	Name	No
	Year
	Century
	Architecture
	King
	Dyansty

Agra	Taj mahal	1	1648	17	Mughal	Shajahan	Moghul
Mysore	Mysore palace	2	1912	20	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
Tanjore	Brihadheeswara temple	3	1010	11	dravidian	Raja raja chola	Chozha
Jaipur	Hawa mahal	4	1799	18	Rajput - Islamic	Sawai Pratap Singh	Rajput
Delhi	Bahai temple	5	1986	20	Expressionist	Fariborz Sahba	-
Kolkatta	Victoria memorial	6	1906	20	Indo-Saracenic Revival	Lord curzon	British Governor general
Delhi	Qutub minar	7	1206	13	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
Sanchi	Sanchi stupa	8	261	BC 3	Buddhist	Asoka	Mauriya
Mamallapuram	Shore temple	9	728	8	dravidian	Raja simha	Pallava
Madurai Madurai Madurai	Meenakshi Sundareshwarar temple	10	-	1	dravidian	-	Pandia
Madurai	Meenakshi temple	11	-	11	dravidian	-	Pandia
Madurai	Meenakshi Sundareshwarar temple	12	-	123	dravidian	-	Pandia
America	cupcake	13	-	1	dravidian	Amelia Simms	Pandia
Fixed table

Whenever lyte-expresstable become scrollable you can prevent some columns from hiding by marking them as fixed column.
Set fixed attribute value of head as 'enable' to make that column as fixed column.

```html
<lyte-expresstable lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="height: 150px"> </lyte-expresstable>
```
```html
<lyte-expresstable  lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="height: 150px" >
    <template is = 'registerYield' yield-name = 'headerYield'>
        <lyte-exptable-tr class="originalColumn lyteExpTableRow">
            <% ltPropTableHeader.forEach(function(list,index){ %>
                <lyte-exptable-th id={{list.id}} class = "lyteExpTableHead " index = {{indexVal}} %>
                    {{unescape(list[tableProperties.headerKey])}}
                </lyte-exptable-th>
            <%})%>
        </lyte-exptable-tr>
    </template>
    <template is = 'registerYield' yield-name = 'contentYield'>
        <template is="for" items={{contentJSON}} item="list" index="indexVal">
            <lyte-exptable-tr class="lyteExpTableRow">
                <template is="for" items={{ltPropTableHeader}}  item="header">
                    <lyte-exptable-td class="lyteExpTableCell">
                        {{unescape(lyteUiGetValue(list,header[tableProperties.bodyKey]))}}
                    </lyte-exptable-td>
                 </template>
            </lyte-exptable-tr>
        </template>
    </template>
</lyte-expresstable>
```
```javascript
// in your component
    data() {
        return{

    headerJSON : prop( 'array' , { default : [
    { "name": "From", "body": "place" },
    { "name": "No", "body": "serial" },
    { "name": "From", "body": "place" },
    { "name": "Name", "body": "name" }
    ]} ),
    contentJSON : prop ( 'array' , { default : [
    { "place": "Agra", "serial": 1, "name": "Taj mahal" },
    { "place": "Mysore", "serial": 2, "name": "Mysore palace" },
    { "place": "Tanjore", "serial": 3, "name": "Brihadheeswara temple" }
    ] } )
 }
}
```
From
	Name	No
	Year
	Century
	Architecture
	King
	Dyansty

Agra	Taj mahal	1	1648	17	Mughal	Shajahan	Moghul
Mysore	Mysore palace	2	1912	20	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
Tanjore	Brihadheeswara temple	3	1010	11	dravidian	Raja raja chola	Chozha
Jaipur	Hawa mahal	4	1799	18	Rajput - Islamic	Sawai Pratap Singh	Rajput
Delhi	Bahai temple	5	1986	20	Expressionist	Fariborz Sahba	-
Kolkatta	Victoria memorial	6	1906	20	Indo-Saracenic Revival	Lord curzon	British Governor general
Delhi	Qutub minar	7	1206	13	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
Sanchi	Sanchi stupa	8	261	BC 3	Buddhist	Asoka	Mauriya
Mamallapuram	Shore temple	9	728	8	dravidian	Raja simha	Pallava
Madurai Madurai Madurai	Meenakshi Sundareshwarar temple	10	-	1	dravidian	-	Pandia
Madurai	Meenakshi temple	11	-	11	dravidian	-	Pandia
Madurai	Meenakshi Sundareshwarar temple	12	-	123	dravidian	-	Pandia
America	cupcake	13	-	1	dravidian	Amelia Simms	Pandia

Column interchanging

Column interchanging enables us to reorder columns. In this type while arranging the columns entire body cells along with its header cell will be moved.
It could be a heavy operation in pages with huge number of elements. Also we can't select already fixed column for interchanging. We recommand this to use for smaller pages
lyteTableSortSelected class will be added to lyte-expresstable tag when a cell is selected. Same will be removed when the element is dropped. lyteExpSortSelected class will be added for selected cells( th and td ). lyteExpTablePe class will be added to selected cells during first mousemove. lyteExpTableAnimate class will be added for adjacent modified cells

```html
<lyte-expresstable lt-prop-header = {{headerJSON}}
  lt-prop-content = {{contentJSON}}
  lt-prop-header-label-key = "name" lt-prop-body-label-key =
  "body" style="height: 150px" lt-prop-column-sortable = true >
</lyte-expresstable>
```
```html
<lyte-expresstable lt-prop-column-sortable=true lt-prop-fixed-table-scroll=true
	lt-prop-yield=true lt-prop-header = {{headerJSON}}
	lt-prop-content = {{contentJSON}}
	lt-prop-header-label-key = "name"
	lt-prop-body-label-key = "body">
    <template is = 'registerYield' yield-name = 'headerYield'>
        <lyte-exptable-tr class="originalColumn lyteExpTableRow">
            <% ltPropTableHeader.forEach(function(list,index){ %>
                <lyte-exptable-th id={{list.id}} class = "lyteExpTableHead " index = {{indexVal}} %>
                    {{list[tableProperties.headerKey]}}
                </lyte-exptable-th>
            <%})%>
        </lyte-exptable-tr>
    </template>
    <template is = 'registerYield' yield-name = 'contentYield'>
        <template is="for" items={{contentJSON}} item="list" index="indexVal">
            <lyte-exptable-tr class="lyteExpTableRow">
                <template is="for" items={{ltPropTableHeader}}  item="header">
                    <lyte-exptable-td class="lyteExpTableCell">
                    {{list[header.body]}}
                    </lyte-exptable-td>
                 </template>
            </lyte-exptable-tr>
        </template>
    </template>
</lyte-expresstable>
```
```javascript
data : {
    headerJSON : prop( 'array' , { default : [
    { "name": "From", "body": "place" },
    { "name": "No", "body": "serial" },
    { "name": "From", "body": "place" },
    { "name": "Name", "body": "name" }
    ]} ),
    contentJSON : prop ( 'array' , { default : [
    { "place": "Agra", "serial": 1, "name": "Taj mahal" },
    { "place": "Mysore", "serial": 2, "name": "Mysore palace" },
    { "place": "Tanjore", "serial": 3, "name": "Brihadheeswara temple" }
    ] } )
}
```
Year
	Century
	Architecture
	King
	Dyansty

1648	17	Mughal	Shajahan	Moghul
1912	20	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
1010	11	dravidian	Raja raja chola	Chozha
1799	18	Rajput - Islamic	Sawai Pratap Singh	Rajput
1986	20	Expressionist	Fariborz Sahba	-
1906	20	Indo-Saracenic Revival	Lord curzon	British Governor general
1206	13	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
261	BC 3	Buddhist	Asoka	Mauriya
728	8	dravidian	Raja simha	Pallava
-	1	dravidian	-	Pandia
-	11	dravidian	-	Pandia
-	123	dravidian	-	Pandia
-	1	dravidian	Amelia Simms	Pandia
Column interchanging - interchanging header only

In this type only headers of express table will be moved.

```html
<lyte-expresstable lt-prop-header = {{headerJSON}}
lt-prop-content = {{contentJSON}}
lt-prop-header-label-key = "name" lt-prop-body-label-key =
"body" style="height: 150px" lt-prop-column-sortable = true
lt-prop-header-only = true > </lyte-expresstable>
```
```html
<lyte-expresstable lt-prop-column-sortable=true lt-prop-header-only=true
	lt-prop-fixed-table-scroll=true lt-prop-yield=true
	lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}}
	lt-prop-header-label-key = "name"
	lt-prop-body-label-key = "body">
	<template is='registerYield' yield-name='headerYield'>
		<lyte-exptable-tr class="originalColumn lyteExpTableRow">
			<template lyte-for="{{ltPropTableHeader}} as list index ">
				<lyte-exptable-th id={{list.id}}
					class="lyteExpTableHead {{if(ifEquals(list.fixed,'enable'),list.class+ ' lyteFixedColumn', list.class)}}"
					index={{indexVal}} resize={{list.resize}} fixed={{list.fixed}}
					icon={{list.icon}}>
					{{unescape(list[table3Prop.headerKey])}}
				</lyte-exptable-th>
			</template>
		</lyte-exptable-tr>
	</template>
	<template is='registerYield' yield-name='contentYield'>
		<template lyte-for="{{table3Prop.content}} as list indexVal"> <lyte-exptable-tr
				id={{list.id}} class="lyteExpTableRow {{list.class}}">
				<template lyte-for="{{ltPropTableHeader}} as header">
					<lyte-exptable-td
						class="lyteExpTableCell">{{unescape(lyteUiGetValue(list,header[table3Prop.bodyKey]))}}</lyte-exptable-td>
				</template>
			</lyte-exptable-tr>
		</template>
	</template>
</lyte-expresstable>
```
```javascript
// in your component

   data : {
   headerJSON : prop( 'array' , { default : [
   { "name": "From", "body": "place" },
   { "name": "No", "body": "serial" },
   { "name": "From", "body": "place" },
   { "name": "Name", "body": "name" }
   ]} ),
   contentJSON : prop ( 'array' , { default : [
   { "place": "Agra", "serial": 1, "name": "Taj mahal" },
   { "place": "Mysore", "serial": 2, "name": "Mysore palace" },
   { "place": "Tanjore", "serial": 3, "name": "Brihadheeswara temple" }
   ] } )
}
```
Year
	Century
	Architecture
	King
	Dyansty

1648	17	Mughal	Shajahan	Moghul
1912	20	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
1010	11	dravidian	Raja raja chola	Chozha
1799	18	Rajput - Islamic	Sawai Pratap Singh	Rajput
1986	20	Expressionist	Fariborz Sahba	-
1906	20	Indo-Saracenic Revival	Lord curzon	British Governor general
1206	13	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
261	BC 3	Buddhist	Asoka	Mauriya
728	8	dravidian	Raja simha	Pallava
-	1	dravidian	-	Pandia
-	11	dravidian	-	Pandia
-	123	dravidian	-	Pandia
-	1	dravidian	Amelia Simms	Pandia
Column interchanging - with fake header

In this method a fake header is created with 'lyteExpTableDummyColumn' class ( appended to body ) will be move insteadof table elements.

```html
<lyte-expresstable lt-prop-header = {{headerJSON}}
lt-prop-content = {{contentJSON}}
lt-prop-header-label-key = "name" lt-prop-body-label-key =
"body" style="height: 150px" lt-prop-column-sortable = true
lt-prop-header-only = true lt-prop-prevent-table-modify = true
> </lyte-expresstable>
```
```html
<lyte-expresstable lt-prop-prevent-table-modify=true lt-prop-column-sortable=true
lt-prop-header-only=true lt-prop-fixed-table-scroll=true lt-prop-yield=true
lt-prop-header="{{table4Prop.header}}" lt-prop-content="{{table4Prop.content}}"
lt-prop-header-label-key="{{table4Prop.headerKey}}"
lt-prop-body-label-key="{{table4Prop.bodyKey}}">
	<template is='registerYield' yield-name='headerYield'>
		<lyte-exptable-tr class="originalColumn lyteExpTableRow">
		<template lyte-for="{{ltPropTableHeader}} as list index ">
				<lyte-exptable-th id={{list.id}}
					class="lyteExpTableHead {{if(ifEquals(list.fixed,'enable'),list.class+ ' lyteFixedColumn', list.class)}}"
					index={{indexVal}} resize={{list.resize}} fixed={{list.fixed}}
					icon={{list.icon}}>
					{{unescape(list[table4Prop.headerKey])}}
				</lyte-exptable-th>
			</template>
		</lyte-exptable-tr>
	</template>
	<template is='registerYield' yield-name='contentYield'>
		<template lyte-for="{{table4Prop.content}} as list indexVal"> <lyte-exptable-tr
				id={{list.id}} class="lyteExpTableRow {{list.class}}">
				<template lyte-for="{{ltPropTableHeader}} as header">
					<lyte-exptable-td
						class="lyteExpTableCell">{{unescape(lyteUiGetValue(list,header[table4Prop.bodyKey]))}}</lyte-exptable-td>
				</template>
			</lyte-exptable-tr>
		</template>
	</template>
</lyte-expresstable>
```
```javascript
// in your component

   data : {
   headerJSON : prop( 'array' , { default : [
   { "name": "From", "body": "place" },
   { "name": "No", "body": "serial" },
   { "name": "From", "body": "place" },
   { "name": "Name", "body": "name" }
   ]} ),
   contentJSON : prop ( 'array' , { default : [
   { "place": "Agra", "serial": 1, "name": "Taj mahal" },
   { "place": "Mysore", "serial": 2, "name": "Mysore palace" },
   { "place": "Tanjore", "serial": 3, "name": "Brihadheeswara temple" }
   ] } )
}
```
Year
	Century
	Architecture
	King
	Dyansty

1648	17	Mughal	Shajahan	Moghul
1912	20	Indo-Saracenic Revival	Krishnaraja udaiyar	Wadiyar
1010	11	dravidian	Raja raja chola	Chozha
1799	18	Rajput - Islamic	Sawai Pratap Singh	Rajput
1986	20	Expressionist	Fariborz Sahba	-
1906	20	Indo-Saracenic Revival	Lord curzon	British Governor general
1206	13	Indo-Islamic	Qutab Ud-Din-Aibak	Sultan - Mamluk
261	BC 3	Buddhist	Asoka	Mauriya
728	8	dravidian	Raja simha	Pallava
-	1	dravidian	-	Pandia
-	11	dravidian	-	Pandia
-	123	dravidian	-	Pandia
-	1	dravidian	Amelia Simms	Pandia

---

## kanbanview

### kanbanview - overview

Kanban View
Introduction

Kanban view, a performance based visual UI component, helping to organise the work-items, tasks, products, records etc in swimlines. This component helps to visually manage and organise a process. It also lets to sort the records and define your own stages to ideally map your records.

How it Works

Let us see the working of Kanban view comoponent.

Dependencies
```html
<script type="text/javascript" src="lyte/polyfill-bundle.js"> </script>
<script type="text/javascript" src="lyte/custom-elements-es5-adapter.js"> </script>
<script type="text/javascript" src="lyte/lyte-es5.js"> </script>
<script type="text/javascript" src="lyte-dom/lyte-dom.js"> </script>

<script type="text/javascript" src="ui-components/plugins/lyte-sortable.js"> </script>
<link rel="stylesheet" href="ui-components/components/styles/lyte-ui-sortable.css"> </link>


<script type="text/javascript" src="ui-components/components/lyte-kanban.js"> </script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-kanban.css"> </link>
<script type="text/javascript" src="ui-components/components/lyte-card.js"> </script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-card.css"> </link>
```
Anatomy  Working in detail

As shown in the anatomy, a Kanban view has three parts namely lyte-kanbanView, lyte-board, lyte-card.

lyte-kanbanView

lyte-kanbanView is the outermost layer. Here you have to pass the list of all boards and cards using the property ltPropBoardDetails.

lyte-board

ltPropBoardDetail is a collection of lyte board items. And each board item is a collection of card items. lyte-board serves as a collection of lyte-cards. To pass the lyte-board, mandatory properties like ltPropBoardDetail, ltPropKanbanId, ltPropIndex is required.

Here ltPropBoardDetail corresponds to lyteBoardItem. ltPropKanbanId corresponds to a dummy Id and ltPropIndex corresponds to the position of the board. All properties are available in 'ltBoardItem', 'ltKanbanId' and 'lyteIndex' variables.

lyte-card

lyte-cards corresponds to the individual card on the board. The variable 'lytecardItem' contains the information about the individual card.

The ltPropBoardDetails is an array of objects. Each object corresponds to a board. And each board has a list of cards which is also an array of objects. Here ltBoardItem corresponds to the top most item and ltCardItem corresponds to the object inside the lyteBoardItem.

It is manadatory for lyteBoardItem to have a key named as 'cards'. This cards must be an array of objects containing all cards.

Features

Have a look at the standout features of Kanban View.

KanbanView Without Sortable

By default, you can see that the lyte-card and lyte-board being sortable. You can also set them as unsortable using the property ltPropSortable to '{"board":false,"card":false}'.

```html
<lyte-kanbanview lt-prop-board-details = {{details}}  lt-prop-sortable = '{"board":false,"card":false}'>
    <template is="registerYield" yield-name="kanbanYield">
        <lyte-board lt-prop-board-detail={{lyteBoardItem}} lt-prop-kanban-id={{lyteKanbanId}} lt-prop-index={{lyteIndex}} lt-prop-board-sortable=true >
            <template is="registerYield" yield-name="headerItem">
            {{boardDetails.id}}
            </template>
            <template is="registerYield" yield-name="contentItem">
                <lyte-card >
                    <template is="registerYield" yield-name="yield">
                       <lyte-card-body>
                        <pre>
                            Full name {{lyteCardItem.full_name}}
                        </pre>
                        </lyte-card-body>
                    </template>

                </lyte-card>
            </template>
            <template is="registerYield" yield-name="loading">
                your loading content
            </template>
        </lyte-board>
    </template>
</lyte-kanbanview>
```
KanbanView With Lazy Loading

In Kanbanview you can also load the board and cards with lazy loading functionalities using onBodyScroll and onBoardScroll method for kanbanview and board.

Note : To load more records in scroll and to trigger onBoardScroll and onBodyScroll, you need to set ltPropMoreStageRecord as true for kanbanview and board component.

```html
<lyte-kanbanview lt-prop-board-details = {{details}}  on-body-scroll = {{method('bodyscroll')}} >
    <template is="registerYield" yield-name="kanbanYield">
        <lyte-board lt-prop-board-detail={{lyteKanbanItem}} lt-prop-kanban-id={{lyteKanbanId}}  lt-prop-index= {{lyteIndex}} on-board-scroll = {{method('boardscroll')}}>
            <template is="registerYield" yield-name="headerItem">
            {{boardDetails.id}}
            </template>
            <template is="registerYield" yield-name="contentItem">
                <lyte-card >
                    <template is="registerYield" yield-name="yield">
                        <lyte-card-body>
                        <pre>
                            Full name {{lyteCardItem.full_name}}
                        </pre>
                        </lyte-card-body>
                    </template>

                </lyte-card>
            </template>
            <template is="registerYield" yield-name="loading">
                your loading content
            </template>
        </lyte-board>
    </template>
</lyte-kanbanview>
```
Viewport enabled KanbanView

You can enable the viewport setting for the lyte-board and lyte-card with the property ltPropViewPort. You can learn more about viewport here.

Expand and Collapse

Using the util expand and collapse, you can expand and collapse the lyte-board.

### kanbanview - api

Kanban View
Properties

All properties should be prefixed with lt-prop.

id
DataType	:	string
Default	:	-
Description	:	This property is used to specify id for kanbanview
boardDetails
DataType	:	Array
Default	:	[ ] (empty array )
Description	:	This property is used to specify the data for kanbanview
sortable
DataType	:	object
Default	:	{"board" : true, "card" : true }
Description	:	It defines the sortable for board and card
moreStageRecord
DataType	:	Boolean
Default	:	false
Description	:	Set to true if there is more data for kanbanview
preventBoardDetailObserver
DataType	:	Boolean
Default	:	false
Description	:	Set to true will prevent board details observer in lyte-kanbanview
viewPort
DataType	:	Boolean
Default	:	true
Description	:	Set to false indicates that lyteViewPort is not enabled in lyte-board
boardScrollStopDuration
DataType	:	Number
Default	:	false
Description	:	This property is used to change the debounce timeout of scroll in lyte-kanbanview
aria
DataType	:	boolean
Default	:	false
Description	:	This is used to enable aria attributes
ariaAttributes
DataType	:	boolean
Default	:	false
Description	:	This is used to set the aria attribute for the kanbanview
moreStageRecord
DataType	:	Boolean
Default	:	false
Description	:	Set to true if there is more data for board
boardDetail
DataType	:	object
Default	:	{}
Description	:	This property is used to specify the data for board
index
DataType	:	number
Default	:	-
Description	:	This property is used to specify index of the board
boardSortable
DataType	:	Boolean
Default	:	true
Description	:	The sortable value of card in lyte-kanbanview should be set here
kanbanId
DataType	:	String
Default	:	-
Description	:	This property is used to specify id of kanbanview. lyteKanbanId should be set here
class
DataType	:	String
Default	:	-
Description	:	This property is used to set class for board.
noResultMessage
DataType	:	String
Default	:	-
Description	:	This property is used to set no result message if card length is zero.
cardClassName
DataType	:	String
Default	:	-
Description	:	This property is used to set class name for card.
lyteViewPort
DataType	:	Boolean
Default	:	true
Description	:	This property is used to show loading inside board. Set to true will display loading. This should not be prefixed with lt-prop
loadingYield
DataType	:	Boolean
Default	:	true
Description	:	To render your own loading inside board use loadingYield
Methods

You can provide the methods to lyte-kanbanview either via script or HTML.

on-drag-select-for-board
Description	:	This event is triggered whenever the user selects the board to drag. If it returns false then the selected item cannot be dragged.
on-drag-for-board
Description	:	This event is triggered whenever the user drag a board.
on-body-scroll
Description	:	This method is invoked whenever horizontal scroll reaches scroll end
on-drag-select-for-card
Description	:	This event is triggered whenever the user selects a card to drag. If it returns false then the selected item cannot be dragged.
on-record-drop-for-board
Description	:	This event is triggered when the user dropped the board and dom position has changed.
on-record-drop
Description	:	This event is triggered when the user dropped the board and dom position has changed.
on-drag-for-card
Description	:	This event is triggered whenever the user drag a card.
on-body-scroll-stop
Description	:	This method is invoked whenever a scroll is stopped in kanbanview
on-enter-for-board
Description	:	This method is invoked when a sortable item is moved into a sortable list
on-leave-for-board
Description	:	This method is invoked when a sortable item is moved away from a sortable list
on-enter-for-card
Description	:	This method is invoked when a sortable item is moved into a card sortable list
on-leave-for-card
Description	:	This method is invoked when a sortable item is moved away from a sortable list
on-board-scroll
Description	:	This method is invoked whenever a particular board reaches scroll end
on-board-scroll-stop
Description	:	This method is invoked whenever a particular board scroll stopped
on-board-visible
Description	:	This method is invoked whenever a particular board is visible in view port
Utils

You can provide the utils to lyte-kanbanview

Lyte Kanbanview
getVisibleBoard
Description	:	This util is used to get all visible Board
Lyte Board
getVisibleCard
Description	:	This util is used to get all visible card in that particular board
expand
Description	:	This util is used to expand a board when it is collapsed
collapse
Description	:	This util is used to collapse a board

---

## listview

### listview - overview

Introduction

ListView component enables the user to view and interact with the list of data presented in a structured manner. This component renders the list of record with features like editing each fields, filtering and editing based on Data type, infinite scroll, search and many other features.

How it works
Dependencies

Add the following depencies in your index file.

```html
<!-- Lyte files -->
 <script script type="text/javascript" src="lyte/polyfill-bundle.js"></script>
 <script script type="text/javascript" src="lyte/custom-elements-es5-adapter.js"></script>
 <script script type="text/javascript" src="lyte/lyte-es5.js"></script>

				<!-- common ui-component files -->
<script script type="text/javascript" src="lyte-dom/lyte-dom.js"></script>
<script script type="text/javascript" src="ui-components/I18n/en_US.js"></script>
<script script type="text/javascript" src="ui-components/components/helpers/helpers.js"></script>

					<!-- Individual component files -->
<script type="text/javascript" src="ui-components/components/lyte-table.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-number.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-button.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-search.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-accordion.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-checkbox.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-radiobutton.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-modal.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-popover.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-dropdown.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-input.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-calendar.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-wormhole.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-datetime-input.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-column-chooser.js"></script>

<script type="text/javascript" src="ui-components/plugins/lyte-animate.js"></script>
<script type="text/javascript" src="ui-components/plugins/lyte-scrollto.js"></script>
<script type="text/javascript" src="ui-components/plugins/lyte-moment.js"></script>
<script type="text/javascript" src="ui-components/plugins/lyte-scrollbar.js"></script>

<script type="text/javascript" src="ui-components/helpers/eventListeners.js"></script>

<script type="text/javascript" src="ui-components/mixins/lyte-table-utils.js"></script>

<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-date-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-number-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-text-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-boolean-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-custom-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/filters/lyte-multiselect-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/lyte-listview1.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/lyte-list-filter.js"></script>
<script type="text/javascript" src="ui-components/components/view/listview/lyte-edit-element.js"></script>

					<!-- CSS files -->
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-table.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-number.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-button.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-search.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-accordion.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-radiobutton.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-modal.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-popover.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-dropdown.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-input.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-calendar.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-datetime-input.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-scrollbar.css"></link>
```
Anatomy

The anatomy of a listview is shown below.

Working in detail

Let us see the working of the listview in detail. To render a list view, mandatory property like ltPropContent and ltProphaeder has to be given.

All the cell contents can be rendered through yield. By default lyte-yield having name "yield" will be rendered for all the cells. You can also specify yield name for a particular column in that column data(lt-prop-header). Row and column data will be passed to the yield. You can use that as rowData and columnData just like the below code snippet.

```html
<lyte-button onclick="{{action('showFilter')}}">
		<template is = "registerYield" yield-name = "text">
			Show filters
		</template>
	</lyte-button>
	<lyte-listview1 lt-prop-header = {{header}} lt-prop-content = {{content}} style = "height: calc( 100vh - 120px );" lt-prop-sub-headers = true lt-prop-column-chooser = true lt-prop-edit = true lt-prop-filters = true lt-prop-show-filters = {{lbind(showFilter)}} lt-prop-search = true lt-prop-display-filters = true on-edit-blur = "{{method('blur')}}" on-before-edit = "{{method('beforeEdit')}}" on-edit = "{{method('onEdit')}}" on-cell-delete = "{{method('cellDelete')}}" on-data-conversion = "{{method('dataConversion')}}" on-picklist-construct = "{{method('picklistData')}}" fetch-more-data = "{{method('fetchMoreData')}}" on-before-filter-open = "{{method('beforeOpen')}}" on-before-filter-close = "{{method('beforeClose')}}" on-custom-filter-validation = "{{method('customValidation')}}" on-row-click = "{{method('rowclick')}}">
		<template is = "registerYield" yield-name = "yield">
			<span>{{rowData[ cellData.prop ]}}</span> <!-- Default yield for rendering cell contents-->
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-filter"> <!-- Custom data type filter value yield-->
			<input value="{{lbind(customInputValue)}}" onblur="{{action('blur')}}">
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-edit-yield"> <!-- Custom data field inline edit yield-->
			<lyte-input class="lyteCustomEditElement lyteListviewEditElement" lt-prop-value="{{lbind(ltPropValue)}}"></lyte-input>
		</template>
	</lyte-listview1>
```
```javascript
init : function(){
		var moment = $L.moment(),
		rowData = [ // sample row data
		    {
		        "base_version": 1,
		        "product": "MickeyLite",
		        "applicable_edition": [
		            {}
		        ],
		        "patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
		        "patch_id": 1,
		        "availability": "Staged",
		        "patch_validity": "",
		        "From": "",
		        "delete": "",
		        "is_stop_ppm": false,
		        "associate": "",
		        "mode": "production",
		        "key-1": "value-1",
		        "uploaded_by": "690805728",
		        "patch_filename": "AU_5260.ppm",
		        "product_id": "1",
		        "key-2": "value-2",
		        "checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
		        "patch_type": "Feature",
		        "To": "",
		        "patch_version": "4270",
		        created_time : moment.format(),
		        boolean_field : false,
		        created_by : "ponkarthikeyan.t@zohocorp.com",
		        custom_field : "some_value"
		    }
		],
		columnData = [ // sample column data
		    {
		        "children": [ // sub column data
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "availability",
		                "name": "availability",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "availability",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "created_by",
		                "name": "Created by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "created_by",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "custom_field",
		                "name": "Custom field",
		                resizable : true,
		                dataType : "custom"
		            }
		        ],
		        "prop": "custom_field",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "boolean_field",
		    			name : "Boolean field",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "boolean"
		    		}
		    	],
		    	prop : "boolean_field",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "created_time",
		    			name : "Created time",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "date"
		    		}
		    	],
		    	prop : "created_time",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_filename",
		                "name": "patch_filename",
		                resizable : true,
		                sortable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_filename",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "base_version",
		                "name": "base_version",
		                resizable : true,
		                sortable : true,
		                dataType : "number"
		            }
		        ],
		        "prop": "base_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_version",
		                "name": "patch_version",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "From",
		                "name": "From",
		                resizable : true,
		                dataType : "text"
		            },
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "To",
		                "name": "To",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_version",
		        "name": "applicable_version",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "applicable_edition",
		                "name": "applicable_edition",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_edition",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_id",
		                "name": "patch_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_validity",
		                "name": "patch_validity",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_validity",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "is_stop_ppm",
		                "name": "is_stop_ppm",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "is_stop_ppm",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "mode",
		                "name": "mode",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "mode",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_url",
		                "name": "patch_url",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_url",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "product_id",
		                "name": "product_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "product_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "checksum",
		                "name": "checksum",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "checksum",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_type",
		                "name": "patch_type",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_type",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "uploaded_by",
		                "name": "uploaded_by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "uploaded_by",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		    	children : [
		    		{
		    			width : 200,
		    			minWidth : 50,
		    			prop : "",
		    			name : "",
		    			pin : "enable",
		    			position : "right"
		    		},
		    	],
		    	name : "",
		   		prop : "edit"
		    }
		];

		// Constructing 10000 rows

		var __users = [ "afzal.mm@zohocorp.com", "anuja.manoharan@zohocorp.com", "thangagiriarasan.m@zohocorp.com", "ananthapadmanaban.n@zohocorp.com", "hari.haran@zohocorp.com", "santhoshraj.s@zohocorp.com", "surendran.m@zohocorp.com", "varun.a@zohocorp.com", "vidhya.d@zohocorp.com", "ponkarthikeyan.t@zohocorp.com" ];

		for( var i = 0; i < 9999; i++ ){
			var copy = JSON.parse( JSON.stringify( rowData[ 0 ] ) );

			copy.base_version += ( i + 1 );

			copy.patch_id += ( i + 1 );

			copy.patch_filename = String.fromCharCode( 65 + i % 26 ) + copy.patch_filename;
			copy.created_time = moment.subtract( 1, 'day' ).format();
			copy.boolean_field = i % 2 == 0;
			copy.created_by = __users[ i % __users.length ];
			copy.custom_field = "some_value";

			rowData.push( copy );
		}

		this.setData({
			content : rowData,
			header : columnData
		})
	},

	data : function(){
		return {
			header : prop( "array", { default : [] } ),
			content : prop( "array", { default : [] } ),

			value : prop( 'string', { default : "" } ),

			showFilter : prop( 'boolean', { default : false } ),

			customInputValue : prop( 'string', { default : "" } ),

			customCondition : prop( 'object', { default : {} } )
		}
	},

	actions : {
		showFilter : function(){
			this.setData( 'showFilter', true );
		},

		blur : function(){
			this.update_value( this.data.customCondition );
		}
	},

	update_value : function( elem ){
		var value = this.data.customInputValue,
		Lc = Lyte.objectUtils,
		condition = elem.ltProp( 'condition' );

		Lc( condition, 'add', 'value', value );
		Lc( condition, 'add', 'label', 'Some name' );
		Lc( condition, 'add', 'isValid', !!value );
	},

	methods : {

		rowclick : function( data, elem, $node ){
			console.log( "row clicked " + elem.getAttribute( 'actual_index' ) );
		},

		customValidation : function( __cur, modified, fieldName ){
			// you can do ur validation based on ur fieldName
			return modified.indexOf( __cur.value ) != -1;
		},

		beforeOpen : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.setData( 'customInputValue', '' );
				this.setData( 'customCondition', node );
			}
			// you can do focus kind of things here
		},

		beforeClose : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.update_value( node );
			}
		},

		fetchMoreData : function(){

		},

		picklistData : function( value, cellData, exst_value ){
			var content = this.data.content,
			arr = [],
			obj = {};

			content.forEach( function( item ){
				var __value = item[ cellData.prop ];

				if( !obj.hasOwnProperty( __value ) ){
					obj[ __value ] = true;
					if( __value.toLowerCase().indexOf( value.toLowerCase() ) != -1 ){
						arr.push({
							value : __value,
							label : __value.replace( '@zohocorp.com', '' ),
							email : __value
						});
					}
				}
			});

			return arr;
		},

		dataConversion : function( row_datas, header_data ){
			var final =  [];

			row_datas.forEach( function( row_data ){
				var obj = {};

				// you can convert your row data to plain string for searching and filtering purpose

				header_data.forEach( function( item ){
					var prop = item.prop,
					to_set = row_data[ prop ];

					// you can pass plain string or array of strings here for text and multiple types

					if( prop == "applicable_edition" ){
						var str = "";
						if( typeof to_set == "object" ){
							to_set.forEach( function( item ){
								str += ( item.someData || "" );
							});
						}

						to_set = str;
					}
					obj[ prop ] = to_set;
				});

				final.push( obj );
			});

			return final;
		},

		beforeEdit : function( col_index, row_index, cellData, rowData ){
			// this.setData( 'value', rowData[ cellData.prop ] );
			if( cellData.dataType == "custom" ){
				this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value', rowData[ cellData.prop ] );
			}
		},

		onEdit : function(){
			// var input = this.$node.querySelector( '.editInput' );
			// input.focus();
			// input.selectionStart = input.selectionEnd = input.value.length;
		},

		blur : function( cellIndex, rowIndex, cellData, rowData, __value ){
			// do save

			// how to edit multiple data type?
			var __value = __value || this.data.value;

			switch( cellData.dataType ){
				case 'boolean' : {
					__value = __value == "true";
				}
				break;
				case "date" : {

				}
				break;
				case "number" : {
					__value = parseFloat( __value );

					if( isNaN( __value ) ){
						return;
					}
				}
				break;
				case 'custom' : {
					__value = this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value' );
				}
				break;
			}


			Lyte.objectUtils( rowData, 'add', cellData.prop, __value );
		},

		cellDelete : function( cellIndex, rowIndex, cellData, rowData ){
			// do save
			Lyte.objectUtils( rowData, 'add', cellData.prop, "" );
		}
	}
```
```javascript
{ // column data
		        "children": [ // inner cells data
		            {
		                "pin": "enable", // fixes the column
		                position : "left", // position of the fixed column. default position is left
		                "width": 150, // width of that column
		                minWidth : 50, // min width of that column. will be used in resize
		                "prop": "base_version", // system value. This key value will be used in row data
		                "name": "base_version", // Name to be displayed in header cell
		                resizable : true, // makes the column as resizable
		                dataType : "number" // type of the column. text, number, multiselect, custom, date, boolean types are currently supported
		            }
		        ],
		        "prop": "base_version",
		        "name": "", // String to be displayed in outer column
		        columnChooser : { // column chooser property
		        	selected : true, // indicates the column is selected for display
		        	disabled : true // indicates the column can't be unselected
		        }
		    }
```

In the above code snippet, properties like ltPropHeader, ltPropContent, ltPropSubHeaders, ltPropColumnChooser, ltPropEdit, ltPropFilters, ltPropSearch, ltPropDisplayFilters are used.

Show filters
Choose column
applicable_version
Availability
	Created By
	Custom Field
	Boolean Field
	Created Time
	Patch_filename
	Base_version
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	

Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-11T15:06:53+05:30
	
AU_5260.ppm
	
1
	
4270
	
	
	
[object Object]
	
1
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-09-10T15:06:53+05:30
	
AAU_5260.ppm
	
2
	
4270
	
	
	
[object Object]
	
2
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-09-09T15:06:53+05:30
	
BAU_5260.ppm
	
3
	
4270
	
	
	
[object Object]
	
3
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-09-08T15:06:53+05:30
	
CAU_5260.ppm
	
4
	
4270
	
	
	
[object Object]
	
4
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-09-07T15:06:53+05:30
	
DAU_5260.ppm
	
5
	
4270
	
	
	
[object Object]
	
5
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-09-06T15:06:53+05:30
	
EAU_5260.ppm
	
6
	
4270
	
	
	
[object Object]
	
6
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-09-05T15:06:53+05:30
	
FAU_5260.ppm
	
7
	
4270
	
	
	
[object Object]
	
7
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-09-04T15:06:53+05:30
	
GAU_5260.ppm
	
8
	
4270
	
	
	
[object Object]
	
8
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-09-03T15:06:53+05:30
	
HAU_5260.ppm
	
9
	
4270
	
	
	
[object Object]
	
9
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-09-02T15:06:53+05:30
	
IAU_5260.ppm
	
10
	
4270
	
	
	
[object Object]
	
10
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-01T15:06:53+05:30
	
JAU_5260.ppm
	
11
	
4270
	
	
	
[object Object]
	
11
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-08-31T15:06:53+05:30
	
KAU_5260.ppm
	
12
	
4270
	
	
	
[object Object]
	
12
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-08-30T15:06:53+05:30
	
LAU_5260.ppm
	
13
	
4270
	
	
	
[object Object]
	
13
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-08-29T15:06:53+05:30
	
MAU_5260.ppm
	
14
	
4270
	
	
	
[object Object]
	
14
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-08-28T15:06:53+05:30
	
NAU_5260.ppm
	
15
	
4270
	
	
	
[object Object]
	
15
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-08-27T15:06:53+05:30
	
OAU_5260.ppm
	
16
	
4270
	
	
	
[object Object]
	
16
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-08-26T15:06:53+05:30
	
PAU_5260.ppm
	
17
	
4270
	
	
	
[object Object]
	
17
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-08-25T15:06:53+05:30
	
QAU_5260.ppm
	
18
	
4270
	
	
	
[object Object]
	
18
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-08-24T15:06:53+05:30
	
RAU_5260.ppm
	
19
	
4270
	
	
	
[object Object]
	
19
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-08-23T15:06:53+05:30
	
SAU_5260.ppm
	
20
	
4270
	
	
	
[object Object]
	
20
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-08-22T15:06:53+05:30
	
TAU_5260.ppm
	
21
	
4270
	
	
	
[object Object]
	
21
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-08-21T15:06:53+05:30
	
UAU_5260.ppm
	
22
	
4270
	
	
	
[object Object]
	
22
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-08-20T15:06:53+05:30
	
VAU_5260.ppm
	
23
	
4270
	
	
	
[object Object]
	
23
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-08-19T15:06:53+05:30
	
WAU_5260.ppm
	
24
	
4270
	
	
	
[object Object]
	
24
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-08-18T15:06:53+05:30
	
XAU_5260.ppm
	
25
	
4270
	
	
	
[object Object]
	
25
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	



Here is a sample list view rendered with 10000 data.

Features
Row Grouping

Enabling ltPropGroupedRow will help you to group the rows. The grouped content has to be given with ltPropContent as array of objects just like the below code snippet.
```html
<lyte-listview1
	class="lyteListviewNewUI"
	lt-prop-table={{tableData}}
	lt-prop-header = {{header}}
	lt-prop-content = {{groupedContent}}
	lt-prop-grouped-row= true
	lt-prop-group-initially-closed = true
	lt-prop-multiple-filter=true
	lt-prop-sub-headers = true
	lt-prop-column-chooser = true
	lt-prop-edit = false
	lt-prop-filters = true
	lt-prop-search = true
	lt-prop-display-filters = true
	on-edit-blur = "{{method('blur')}}"
	on-before-edit = "{{method('beforeEdit')}}"
	on-edit = "{{method('onEdit')}}"
	on-cell-delete = "{{method('cellDelete')}}"
	on-data-conversion = "{{method('dataConversion')}}"
	on-picklist-construct = "{{method('picklistData')}}"
	fetch-more-data = "{{method('fetchMoreData')}}"
	on-before-filter-open = "{{method('beforeOpen')}}"
	on-before-filter-close = "{{method('beforeClose')}}"
	on-custom-filter-validation = "{{method('customValidation')}}"
	on-row-click = "{{method('rowclick')}}">
		<template is = "registerYield" yield-name = "yield">
			<span>{{rowData[ cellData.prop ]}}</span>
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-filter">
			<input value="{{lbind(customInputValue)}}" onblur="{{('blur')}}">
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-edit-yield">
			<lyte-input class="lyteCustomEditElement lyteListviewEditElement" lt-prop-value="{{lbind(ltPropValue)}}"></lyte-input>
		</template>
</lyte-listview1>
```
```javascript
init : function() {
			var moment = $L.moment(),
			groupData = rowData = [ // sample row data
		{
			name: "one",
			rows: [
				{ data : {
					"base_version": 1,
					"product": "MickeyLite",
					"applicable_edition": [
						{ "new": 1 }
					],
					"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
					"patch_id": 1,
					"availability": "Staged",
					"patch_validity": "",
					"From": "",
					"delete": "",
					"is_stop_ppm": false,
					"associate": "",
					"mode": "production",
					"key-1": "value-1",
					"uploaded_by": "690805728",
					"patch_filename": "AU_5260.ppm",
					"product_id": "1",
					"key-2": "value-2",
					"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
					"patch_type": "Feature",
					"To": "",
					"patch_version": "4270",
					created_time: moment.format(),
					boolean_field: false,
					created_by: "ponkarthikeyan.t@zohocorp.com",
					custom_field: "some_value"
				},
				index : 0  },

			{
				data : { "base_version": 2,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value" },
				index : 1
			},
			{
				data : { "base_version": 3,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 2
			},
			{
				data : { "base_version": 4,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 3
			}]
		},
		{
			name: "two",
			rows: [

			{
				data : { "base_version": 5,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 0
			},
			{
				data : { "base_version": 6,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			}
				]
		},
		{
			name: "three",
			rows: [
				{
				data : { "base_version": 7,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 0
			},
			{
				data : { "base_version": 8,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			},
			{
				data : { "base_version": 9,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 2
			},
			{
				data : { "base_version": 10,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 3
			}]
		},
		{
			name: "four",
			rows: [
				{
					data : { "base_version": 11,
					"product": "MickeyLite",
					"applicable_edition": [
						{"new":1}
					],
					"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
					"patch_id": 2,
					"availability": "Staged",
					"patch_validity": "",
					"From": "",
					"delete": "",
					"is_stop_ppm": false,
					"associate": "",
					"mode": "production",
					"key-1": "value-1",
					"uploaded_by": "690805728",
					"patch_filename": "AU_5260.ppm",
					"product_id": "1",
					"key-2": "value-2",
					"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
					"patch_type": "Feature",
					"To": "",
					"patch_version": "4270",
					created_time : moment.format(),
					boolean_field : false,
					created_by : "ponkarthikeyan.t@zohocorp.com",
					custom_field : "some_value"},
					index : 0
				},
			{
				data : { "base_version": 12,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			}
				]
		},
		{
			name: "five",
			rows: [
				{
				data : { "base_version": 13,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 0
			},
			{
				data : { "base_version": 14,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			},
			{
				data : { "base_version": 15,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 2
			}
				]
		},
		{
			name: "six",
			rows: [
				{
				data : { "base_version": 16,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 0
			},
			{
				data : { "base_version": 17,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			},
			{
				data : { "base_version": 18,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 2
			}
				]
		},
		{
			name: "seven",
			rows: [
				{
				data : { "base_version": 19,
				"product": "MickeyLite",
				"applicable_edition": [
					{ "new": 1 }
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time: moment.format(),
				boolean_field: false,
				created_by: "ponkarthikeyan.t@zohocorp.com",
				custom_field: "some_value"},
				index : 0
			},
			{
				data : { "base_version": 20,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 2,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 1
			},
			{
				data : { "base_version": 21,
				"product": "MickeyLite",
				"applicable_edition": [
					{"new":1}
				],
				"patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
				"patch_id": 1,
				"availability": "Staged",
				"patch_validity": "",
				"From": "",
				"delete": "",
				"is_stop_ppm": false,
				"associate": "",
				"mode": "production",
				"key-1": "value-1",
				"uploaded_by": "690805728",
				"patch_filename": "AU_5260.ppm",
				"product_id": "1",
				"key-2": "value-2",
				"checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
				"patch_type": "Feature",
				"To": "",
				"patch_version": "4270",
				created_time : moment.format(),
				boolean_field : false,
				created_by : "ponkarthikeyan.t@zohocorp.com",
				custom_field : "some_value"},
				index : 2
			}]
		}],
			columnData = [ // sample column data
				{
					"children": [ // sub column data
						{
							"pin": "enable",
							position : "left",
							"width": 150,
							minWidth : 50,
							"prop": "availability",
							"name": "availability",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "availability",
					"name": "",
					 columnChooser : {
						 selected : true,
						 disabled : true
					 }
				},
				{
					"children": [
						{
							"pin": "enable",
							position : "left",
							"width": 150,
							minWidth : 50,
							"prop": "created_by",
							"name": "Created by",
							resizable : true,
							dataType : "multiselect"
						}
					],
					"prop": "created_by",
					"name": "",
					 columnChooser : {
						 selected : true,
						 disabled : true
					 }
				},
				{
					"children": [
						{
							"pin": "enable",
							position : "left",
							"width": 150,
							minWidth : 50,
							"prop": "custom_field",
							"name": "Custom field",
							resizable : true,
							dataType : "custom"
						}
					],
					"prop": "custom_field",
					"name": "",
					 columnChooser : {
						 selected : true,
						 disabled : true
					 }
				},
				{
					children : [
						{
							width : 150,
							minWidth : 50,
							prop : "boolean_field",
							name : "Boolean field",
							resizable : true,
							sortable : true,
							dataType : "boolean"
						}
					],
					prop : "boolean_field",
					name : "",
					columnChooser : {
						selected : true
					}
				},
				{
					children : [
						{
							width : 150,
							minWidth : 50,
							prop : "created_time",
							name : "Created time",
							resizable : true,
							sortable : true,
							dataType : "date"
						}
					],
					prop : "created_time",
					name : "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_filename",
							"name": "patch_filename",
							resizable : true,
							sortable : true,
							dataType : "text"
						}
					],
					"prop": "patch_filename",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "base_version",
							"name": "base_version",
							resizable : true,
							sortable : true,
							dataType : "number"
						}
					],
					"prop": "base_version",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_version",
							"name": "patch_version",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "patch_version",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 100,
							minWidth : 50,
							"prop": "From",
							"name": "From",
							resizable : true,
							dataType : "text"
						},
						{
							"width": 100,
							minWidth : 50,
							"prop": "To",
							"name": "To",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "applicable_version",
					"name": "applicable_version",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "applicable_edition",
							"name": "applicable_edition",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "applicable_edition",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_id",
							"name": "patch_id",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "patch_id",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_validity",
							"name": "patch_validity",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "patch_validity",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "is_stop_ppm",
							"name": "is_stop_ppm",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "is_stop_ppm",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "mode",
							"name": "mode",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "mode",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_url",
							"name": "patch_url",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "patch_url",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "product_id",
							"name": "product_id",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "product_id",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "checksum",
							"name": "checksum",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "checksum",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "patch_type",
							"name": "patch_type",
							resizable : true,
							dataType : "text"
						}
					],
					"prop": "patch_type",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					"children": [
						{
							"width": 150,
							minWidth : 50,
							"prop": "uploaded_by",
							"name": "uploaded_by",
							resizable : true,
							dataType : "multiselect"
						}
					],
					"prop": "uploaded_by",
					"name": "",
					columnChooser : {
						selected : true
					}
				},
				{
					children : [
						{
							width : 200,
							minWidth : 50,
							prop : "",
							name : "",
							pin : "enable",
							position : "right"
						},
					],
					name : "",
					   prop : "edit"
				}
			];

			var __users = [ "afzal.mm@zohocorp.com", "anuja.manoharan@zohocorp.com", "thangagiriarasan.m@zohocorp.com", "ananthapadmanaban.n@zohocorp.com", "hari.haran@zohocorp.com", "santhoshraj.s@zohocorp.com", "surendran.m@zohocorp.com", "varun.a@zohocorp.com", "vidhya.d@zohocorp.com", "ponkarthikeyan.t@zohocorp.com" ];

			for( var i = 0; i < 98; i++ ){
				var copy = JSON.parse( JSON.stringify( rowData[ 0 ] ) );

				copy.base_version += ( i + 1 );
				copy.patch_id += ( i + 1 );
				copy.patch_filename = String.fromCharCode( 65 + i % 26 ) + copy.patch_filename;
				copy.created_time = moment.subtract( 1, 'day' ).format();
				copy.boolean_field = i % 2 == 0;
				copy.created_by = __users[ i % __users.length ];
				copy.custom_field = "some_value";

				rowData.push( copy );
			}

			// for row span col span
			// let colspan = { availability : 2 }, rowspan = { availability : 2 } , style = { created_by : 'display:none;' };
			// let _style = { availability : 'display:none;' , created_by : 'display:none;' }
			// rowData[0].colspan = colspan;
			// rowData[0].rowspan = rowspan;
			// rowData[0].style = style;
			// rowData[1].style = _style;



			this.setData({
				content : rowData,
				groupedContent : groupData,
				header : columnData
			});
		},

		data : function(){
			return {
				tableData : Lyte.attr( 'object', { default : {
					infiniteScroll : false,
					preventScrollbar : true,
					contentLength : 25,
					stickyTable : true,
					columnSortable : true
				}})
			}
		},
		actions : {
			// Functions for event handling
		},
		methods : {
			// Functions which can be used as callback in the component.

			rowclick : function( data, elem, $node ){
				console.log( "row clicked " + elem.getAttribute( 'actual_index' ) );
			},

			customValidation : function( __cur, modified, fieldName ){
				// you can do ur validation based on ur fieldName
				return modified.indexOf( __cur.value ) != -1;
			},

			beforeOpen : function( data, condition, node ){
				if( data.dataType == "custom" ){
					this.setData( 'customInputValue', '' );
					this.setData( 'customCondition', node );
				}
				// you can do focus kind of things here
			},

			beforeClose : function( data, condition, node ){
				if( data.dataType == "custom" ){
					this.update_value( node );
				}
			},

			fetchMoreData : function(){
				debugger
			},

			picklistData : function( value, cellData, exst_value ){
				var content = this.data.content,
				arr = [],
				obj = {};

				content.forEach( function( item ){
					var __value = item[ cellData.prop ];

					if( !obj.hasOwnProperty( __value ) ){
						obj[ __value ] = true;
						if( __value.toLowerCase().indexOf( value.toLowerCase() ) != -1 ){
							arr.push({
								value : __value,
								label : __value.replace( '@zohocorp.com', '' ),
								email : __value
							});
						}
					}
				});

				return arr;
			},

			dataConversion : function( row_datas, header_data ){
				// var final =  [];

				// row_datas.forEach( function( row_data ){
				// 	var obj = {};

				// 	// you can convert your row data to plain string for searching and filtering purpose

				// 	header_data.forEach( function( item ){
				// 		var prop = item.prop,
				// 		to_set = row_data[ prop ];

				// 		// you can pass plain string or array of strings here for text and multiple types

				// 		if( prop == "applicable_edition" ){
				// 			var str = "";
				// 			if( typeof to_set == "object" ){
				// 				to_set.forEach( function( item ){
				// 					str += ( item.someData || "" );
				// 				});
				// 			}

				// 			to_set = str;
				// 		}
				// 		obj[ prop ] = to_set;
				// 	});

				// 	final.push( obj );
				// });

				// return final;
			},

			beforeEdit : function( col_index, row_index, cellData, rowData ){
				// this.setData( 'value', rowData[ cellData.prop ] );
				if( cellData.dataType == "custom" ){
					this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value', rowData[ cellData.prop ] );
				}
			},

			onEdit : function(){
				// var input = this.$node.querySelector( '.editInput' );
				// input.focus();
				// input.selectionStart = input.selectionEnd = input.value.length;
			},

			blur : function( cellIndex, rowIndex, cellData, rowData, __value ){
				// do save

				// how to edit multiple data type?
				var __value = __value || this.data.value;

				switch( cellData.dataType ){
					case 'boolean' : {
						__value = __value == "true";
					}
					break;
					case "date" : {

					}
					break;
					case "number" : {
						__value = parseFloat( __value );

						if( isNaN( __value ) ){
							return;
						}
					}
					break;
					case 'custom' : {
						__value = this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value' );
					}
					break;
				}


				Lyte.objectUtils( rowData, 'add', cellData.prop, __value );
			},

			cellDelete : function( cellIndex, rowIndex, cellData, rowData ){
				// do save
				Lyte.objectUtils( rowData, 'add', cellData.prop, "" );
			}
		},


		update_value : function( elem ){
			var value = this.data.customInputValue,
			Lc = Lyte.objectUtils,
			condition = elem.ltProp( 'condition' );

			Lc( condition, 'add', 'value', value );
			Lc( condition, 'add', 'label', 'Some name' );
			Lc( condition, 'add', 'isValid', !!value );
		}
```
```javascript
{
			name : < group - name > ,
			rows : [
				{ <row-data> },
				{ <row-data> }
			],
			name : < group - name > ,
			rows : [
				{ <row-data> },
				{ <row-data> }
			]
}
```
Show filters
Choose column
applicable_version
Availability
	Created By
	Custom Field
	Boolean Field
	Created Time
	Patch_filename
	Base_version
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	
 one	
 two	
 three	
 four	
 five	
 six	
 seven	


Navigator

The navigator with ltPropNavigator enables users to move through the records and access different sections or pages of the list. To enable this feature, mandatory property like ltPropPerPage, ltPropRecord, ltPropValue, has to be given.
```html
<lyte-listview1
	class="lyteListviewNewUI"
	lt-prop-table={{tableData}}
	lt-prop-header = {{header}}
	lt-prop-content = {{navContent}}
	lt-prop-grouped-row= false
	lt-prop-multiple-filter=false
	lt-prop-sub-headers = true
	lt-prop-column-chooser = true
	lt-prop-edit = true
	lt-prop-filters = true
	lt-prop-navigator=true
	lt-prop-per-page=10
	lt-prop-records=100
	lt-prop-nav-position="bottom"
	lt-prop-search = true
	lt-prop-display-filters = true
	on-edit-blur = "{{method('blur')}}"
	on-before-edit = "{{method('beforeEdit')}}"
	on-edit = "{{method('onEdit')}}"
	on-cell-delete = "{{method('cellDelete')}}"
	on-data-conversion = "{{method('dataConversion')}}"
	on-picklist-construct = "{{method('picklistData')}}"
	fetch-more-data = "{{method('fetchMoreData')}}"
	on-before-filter-open = "{{method('beforeOpen')}}"
	on-before-filter-close = "{{method('beforeClose')}}"
	on-custom-filter-validation = "{{method('customValidation')}}"
	on-row-click = "{{method('rowclick')}}">
		<template is = "registerYield" yield-name = "yield">
			<span>{{rowData[ cellData.prop ]}}</span>
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-filter">
			<input value="{{lbind(customInputValue)}}" onblur="{{('blur')}}">
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-edit-yield">
			<lyte-input class="lyteCustomEditElement lyteListviewEditElement" lt-prop-value="{{lbind(ltPropValue)}}"></lyte-input>
		</template>
</lyte-listview1>
```
```javascript
init : function(){
		var moment = $L.moment(),
		rowData = [ // sample row data
		    {
		        "base_version": 1,
		        "product": "MickeyLite",
		        "applicable_edition": [
		            {}
		        ],
		        "patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
		        "patch_id": 1,
		        "availability": "Staged",
		        "patch_validity": "",
		        "From": "",
		        "delete": "",
		        "is_stop_ppm": false,
		        "associate": "",
		        "mode": "production",
		        "key-1": "value-1",
		        "uploaded_by": "690805728",
		        "patch_filename": "AU_5260.ppm",
		        "product_id": "1",
		        "key-2": "value-2",
		        "checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
		        "patch_type": "Feature",
		        "To": "",
		        "patch_version": "4270",
		        created_time : moment.format(),
		        boolean_field : false,
		        created_by : "ponkarthikeyan.t@zohocorp.com",
		        custom_field : "some_value"
		    }
		],
		columnData = [ // sample column data
		    {
		        "children": [ // sub column data
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "availability",
		                "name": "availability",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "availability",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "created_by",
		                "name": "Created by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "created_by",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "custom_field",
		                "name": "Custom field",
		                resizable : true,
		                dataType : "custom"
		            }
		        ],
		        "prop": "custom_field",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "boolean_field",
		    			name : "Boolean field",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "boolean"
		    		}
		    	],
		    	prop : "boolean_field",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "created_time",
		    			name : "Created time",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "date"
		    		}
		    	],
		    	prop : "created_time",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_filename",
		                "name": "patch_filename",
		                resizable : true,
		                sortable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_filename",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "base_version",
		                "name": "base_version",
		                resizable : true,
		                sortable : true,
		                dataType : "number"
		            }
		        ],
		        "prop": "base_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_version",
		                "name": "patch_version",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "From",
		                "name": "From",
		                resizable : true,
		                dataType : "text"
		            },
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "To",
		                "name": "To",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_version",
		        "name": "applicable_version",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "applicable_edition",
		                "name": "applicable_edition",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_edition",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_id",
		                "name": "patch_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_validity",
		                "name": "patch_validity",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_validity",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "is_stop_ppm",
		                "name": "is_stop_ppm",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "is_stop_ppm",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "mode",
		                "name": "mode",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "mode",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_url",
		                "name": "patch_url",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_url",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "product_id",
		                "name": "product_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "product_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "checksum",
		                "name": "checksum",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "checksum",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_type",
		                "name": "patch_type",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_type",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "uploaded_by",
		                "name": "uploaded_by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "uploaded_by",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		    	children : [
		    		{
		    			width : 200,
		    			minWidth : 50,
		    			prop : "",
		    			name : "",
		    			pin : "enable",
		    			position : "right"
		    		},
		    	],
		    	name : "",
		   		prop : "edit"
		    }
		];

		// Constructing 10000 rows

		var __users = [ "afzal.mm@zohocorp.com", "anuja.manoharan@zohocorp.com", "thangagiriarasan.m@zohocorp.com", "ananthapadmanaban.n@zohocorp.com", "hari.haran@zohocorp.com", "santhoshraj.s@zohocorp.com", "surendran.m@zohocorp.com", "varun.a@zohocorp.com", "vidhya.d@zohocorp.com", "ponkarthikeyan.t@zohocorp.com" ];

		for( var i = 0; i < 9999; i++ ){
			var copy = JSON.parse( JSON.stringify( rowData[ 0 ] ) );

			copy.base_version += ( i + 1 );

			copy.patch_id += ( i + 1 );

			copy.patch_filename = String.fromCharCode( 65 + i % 26 ) + copy.patch_filename;
			copy.created_time = moment.subtract( 1, 'day' ).format();
			copy.boolean_field = i % 2 == 0;
			copy.created_by = __users[ i % __users.length ];
			copy.custom_field = "some_value";

			rowData.push( copy );
		}

		this.setData({
			content : rowData,
			header : columnData
		})
	},

	data : function(){
		return {
			header : prop( "array", { default : [] } ),
			content : prop( "array", { default : [] } ),

			value : prop( 'string', { default : "" } ),

			showFilter : prop( 'boolean', { default : false } ),

			customInputValue : prop( 'string', { default : "" } ),

			customCondition : prop( 'object', { default : {} } )
		}
	},

	actions : {
		showFilter : function(){
			this.setData( 'showFilter', true );
		},

		blur : function(){
			this.update_value( this.data.customCondition );
		}
	},

	update_value : function( elem ){
		var value = this.data.customInputValue,
		Lc = Lyte.objectUtils,
		condition = elem.ltProp( 'condition' );

		Lc( condition, 'add', 'value', value );
		Lc( condition, 'add', 'label', 'Some name' );
		Lc( condition, 'add', 'isValid', !!value );
	},

	methods : {

		rowclick : function( data, elem, $node ){
			console.log( "row clicked " + elem.getAttribute( 'actual_index' ) );
		},

		customValidation : function( __cur, modified, fieldName ){
			// you can do ur validation based on ur fieldName
			return modified.indexOf( __cur.value ) != -1;
		},

		beforeOpen : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.setData( 'customInputValue', '' );
				this.setData( 'customCondition', node );
			}
			// you can do focus kind of things here
		},

		beforeClose : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.update_value( node );
			}
		},

		fetchMoreData : function(){

		},

		picklistData : function( value, cellData, exst_value ){
			var content = this.data.content,
			arr = [],
			obj = {};

			content.forEach( function( item ){
				var __value = item[ cellData.prop ];

				if( !obj.hasOwnProperty( __value ) ){
					obj[ __value ] = true;
					if( __value.toLowerCase().indexOf( value.toLowerCase() ) != -1 ){
						arr.push({
							value : __value,
							label : __value.replace( '@zohocorp.com', '' ),
							email : __value
						});
					}
				}
			});

			return arr;
		},

		dataConversion : function( row_datas, header_data ){
			var final =  [];

			row_datas.forEach( function( row_data ){
				var obj = {};

				// you can convert your row data to plain string for searching and filtering purpose

				header_data.forEach( function( item ){
					var prop = item.prop,
					to_set = row_data[ prop ];

					// you can pass plain string or array of strings here for text and multiple types

					if( prop == "applicable_edition" ){
						var str = "";
						if( typeof to_set == "object" ){
							to_set.forEach( function( item ){
								str += ( item.someData || "" );
							});
						}

						to_set = str;
					}
					obj[ prop ] = to_set;
				});

				final.push( obj );
			});

			return final;
		},

		beforeEdit : function( col_index, row_index, cellData, rowData ){
			// this.setData( 'value', rowData[ cellData.prop ] );
			if( cellData.dataType == "custom" ){
				this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value', rowData[ cellData.prop ] );
			}
		},

		onEdit : function(){
			// var input = this.$node.querySelector( '.editInput' );
			// input.focus();
			// input.selectionStart = input.selectionEnd = input.value.length;
		},

		blur : function( cellIndex, rowIndex, cellData, rowData, __value ){
			// do save

			// how to edit multiple data type?
			var __value = __value || this.data.value;

			switch( cellData.dataType ){
				case 'boolean' : {
					__value = __value == "true";
				}
				break;
				case "date" : {

				}
				break;
				case "number" : {
					__value = parseFloat( __value );

					if( isNaN( __value ) ){
						return;
					}
				}
				break;
				case 'custom' : {
					__value = this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value' );
				}
				break;
			}


			Lyte.objectUtils( rowData, 'add', cellData.prop, __value );
		},

		cellDelete : function( cellIndex, rowIndex, cellData, rowData ){
			// do save
			Lyte.objectUtils( rowData, 'add', cellData.prop, "" );
		}
	}
```
Show filters
Choose column
applicable_version
Base_version
	Created By
	Custom Field
	Boolean Field
	Created Time
	Availability
	Patch_filename
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	

1
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-11T15:06:53+05:30
	
Staged
	
AU_5260.ppm
	
4270
	
	
	
[object Object]
	
1
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


2
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-09-10T15:06:53+05:30
	
Staged
	
AAU_5260.ppm
	
4270
	
	
	
[object Object]
	
2
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


3
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-09-09T15:06:53+05:30
	
Staged
	
BAU_5260.ppm
	
4270
	
	
	
[object Object]
	
3
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


4
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-09-08T15:06:53+05:30
	
Staged
	
CAU_5260.ppm
	
4270
	
	
	
[object Object]
	
4
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


5
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-09-07T15:06:53+05:30
	
Staged
	
DAU_5260.ppm
	
4270
	
	
	
[object Object]
	
5
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


6
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-09-06T15:06:53+05:30
	
Staged
	
EAU_5260.ppm
	
4270
	
	
	
[object Object]
	
6
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


7
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-09-05T15:06:53+05:30
	
Staged
	
FAU_5260.ppm
	
4270
	
	
	
[object Object]
	
7
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


8
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-09-04T15:06:53+05:30
	
Staged
	
GAU_5260.ppm
	
4270
	
	
	
[object Object]
	
8
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


9
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-09-03T15:06:53+05:30
	
Staged
	
HAU_5260.ppm
	
4270
	
	
	
[object Object]
	
9
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


10
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-09-02T15:06:53+05:30
	
Staged
	
IAU_5260.ppm
	
4270
	
	
	
[object Object]
	
10
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	



Records per page :

10
1 to 10

Filters

You can set the filters with ltPropFilter. There are two types of filters namely modal based filter and inline based filter. You can use as desired.

```html
<lyte-listview1
	class="lyteListviewNewUI"
	lt-prop-table={{tableData}}
	lt-prop-header = {{header}}
	lt-prop-content = {{filterContent}}
	lt-prop-grouped-row= false
	lt-prop-multiple-filter=false
	lt-prop-sub-headers = true
	lt-prop-column-chooser = true
	lt-prop-edit = true
	lt-prop-filter = true
	lt-prop-navigator=false
	lt-prop-search = true
	lt-prop-display-filters = true
	on-edit-blur = "{{method('blur')}}"
	on-before-edit = "{{method('beforeEdit')}}"
	on-edit = "{{method('onEdit')}}"
	on-cell-delete = "{{method('cellDelete')}}"
	on-data-conversion = "{{method('dataConversion')}}"
	on-picklist-construct = "{{method('picklistData')}}"
	fetch-more-data = "{{method('fetchMoreData')}}"
	on-before-filter-open = "{{method('beforeOpen')}}"
	on-before-filter-close = "{{method('beforeClose')}}"
	on-custom-filter-validation = "{{method('customValidation')}}"
	on-row-click = "{{method('rowclick')}}" >

		<template is = "registerYield" yield-name = "yield">
			<span>{{rowData[ cellData.prop ]}}</span>
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-filter">
			<input value="{{lbind(customInputValue)}}" onblur="{{('blur')}}">
		</template>
		<template is = "registerYield" yield-name = "lyte-custom-edit-yield">
			<lyte-input class="lyteCustomEditElement lyteListviewEditElement" lt-prop-value="{{lbind(ltPropValue)}}"></lyte-input>
		</template>
	</lyte-listview1>
```
```javascript
init : function(){
		var moment = $L.moment(),
		rowData = [ // sample row data
		    {
		        "base_version": 1,
		        "product": "MickeyLite",
		        "applicable_edition": [
		            {}
		        ],
		        "patch_stratus_url": "https://patch-db-2.zohostratus.com/delta/MickeyLite/patches/1/AU_5260.ppm",
		        "patch_id": 1,
		        "availability": "Staged",
		        "patch_validity": "",
		        "From": "",
		        "delete": "",
		        "is_stop_ppm": false,
		        "associate": "",
		        "mode": "production",
		        "key-1": "value-1",
		        "uploaded_by": "690805728",
		        "patch_filename": "AU_5260.ppm",
		        "product_id": "1",
		        "key-2": "value-2",
		        "checksum": "f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433",
		        "patch_type": "Feature",
		        "To": "",
		        "patch_version": "4270",
		        created_time : moment.format(),
		        boolean_field : false,
		        created_by : "ponkarthikeyan.t@zohocorp.com",
		        custom_field : "some_value"
		    }
		],
		columnData = [ // sample column data
		    {
		        "children": [ // sub column data
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "availability",
		                "name": "availability",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "availability",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "created_by",
		                "name": "Created by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "created_by",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		        "children": [
		            {
		                "pin": "enable",
		                position : "left",
		                "width": 150,
		                minWidth : 50,
		                "prop": "custom_field",
		                "name": "Custom field",
		                resizable : true,
		                dataType : "custom"
		            }
		        ],
		        "prop": "custom_field",
		        "name": "",
		         columnChooser : {
		         	selected : true,
		         	disabled : true
		         }
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "boolean_field",
		    			name : "Boolean field",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "boolean"
		    		}
		    	],
		    	prop : "boolean_field",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		    	children : [
		    		{
		    			width : 150,
		    			minWidth : 50,
		    			prop : "created_time",
		    			name : "Created time",
		    			resizable : true,
		    			sortable : true,
		    			dataType : "date"
		    		}
		    	],
		    	prop : "created_time",
		    	name : "",
		    	columnChooser : {
		    		selected : true
		    	}
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_filename",
		                "name": "patch_filename",
		                resizable : true,
		                sortable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_filename",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "base_version",
		                "name": "base_version",
		                resizable : true,
		                sortable : true,
		                dataType : "number"
		            }
		        ],
		        "prop": "base_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_version",
		                "name": "patch_version",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_version",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "From",
		                "name": "From",
		                resizable : true,
		                dataType : "text"
		            },
		            {
		                "width": 100,
		                minWidth : 50,
		                "prop": "To",
		                "name": "To",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_version",
		        "name": "applicable_version",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "applicable_edition",
		                "name": "applicable_edition",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "applicable_edition",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_id",
		                "name": "patch_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_validity",
		                "name": "patch_validity",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_validity",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "is_stop_ppm",
		                "name": "is_stop_ppm",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "is_stop_ppm",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "mode",
		                "name": "mode",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "mode",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_url",
		                "name": "patch_url",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_url",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "product_id",
		                "name": "product_id",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "product_id",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "checksum",
		                "name": "checksum",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "checksum",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "patch_type",
		                "name": "patch_type",
		                resizable : true,
		                dataType : "text"
		            }
		        ],
		        "prop": "patch_type",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		        "children": [
		            {
		                "width": 150,
		                minWidth : 50,
		                "prop": "uploaded_by",
		                "name": "uploaded_by",
		                resizable : true,
		                dataType : "multiselect"
		            }
		        ],
		        "prop": "uploaded_by",
		        "name": "",
		        columnChooser : {
		        	selected : true
		        }
		    },
		    {
		    	children : [
		    		{
		    			width : 200,
		    			minWidth : 50,
		    			prop : "",
		    			name : "",
		    			pin : "enable",
		    			position : "right"
		    		},
		    	],
		    	name : "",
		   		prop : "edit"
		    }
		];

		// Constructing 10000 rows

		var __users = [ "afzal.mm@zohocorp.com", "anuja.manoharan@zohocorp.com", "thangagiriarasan.m@zohocorp.com", "ananthapadmanaban.n@zohocorp.com", "hari.haran@zohocorp.com", "santhoshraj.s@zohocorp.com", "surendran.m@zohocorp.com", "varun.a@zohocorp.com", "vidhya.d@zohocorp.com", "ponkarthikeyan.t@zohocorp.com" ];

		for( var i = 0; i < 9999; i++ ){
			var copy = JSON.parse( JSON.stringify( rowData[ 0 ] ) );

			copy.base_version += ( i + 1 );

			copy.patch_id += ( i + 1 );

			copy.patch_filename = String.fromCharCode( 65 + i % 26 ) + copy.patch_filename;
			copy.created_time = moment.subtract( 1, 'day' ).format();
			copy.boolean_field = i % 2 == 0;
			copy.created_by = __users[ i % __users.length ];
			copy.custom_field = "some_value";

			rowData.push( copy );
		}

		this.setData({
			content : rowData,
			header : columnData
		})
	},

	data : function(){
		return {
			header : prop( "array", { default : [] } ),
			content : prop( "array", { default : [] } ),

			value : prop( 'string', { default : "" } ),

			showFilter : prop( 'boolean', { default : false } ),

			customInputValue : prop( 'string', { default : "" } ),

			customCondition : prop( 'object', { default : {} } )
		}
	},

	actions : {
		showFilter : function(){
			this.setData( 'showFilter', true );
		},

		blur : function(){
			this.update_value( this.data.customCondition );
		}
	},

	update_value : function( elem ){
		var value = this.data.customInputValue,
		Lc = Lyte.objectUtils,
		condition = elem.ltProp( 'condition' );

		Lc( condition, 'add', 'value', value );
		Lc( condition, 'add', 'label', 'Some name' );
		Lc( condition, 'add', 'isValid', !!value );
	},

	methods : {

		rowclick : function( data, elem, $node ){
			console.log( "row clicked " + elem.getAttribute( 'actual_index' ) );
		},

		customValidation : function( __cur, modified, fieldName ){
			// you can do ur validation based on ur fieldName
			return modified.indexOf( __cur.value ) != -1;
		},

		beforeOpen : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.setData( 'customInputValue', '' );
				this.setData( 'customCondition', node );
			}
			// you can do focus kind of things here
		},

		beforeClose : function( data, condition, node ){
			if( data.dataType == "custom" ){
				this.update_value( node );
			}
		},

		fetchMoreData : function(){

		},

		picklistData : function( value, cellData, exst_value ){
			var content = this.data.content,
			arr = [],
			obj = {};

			content.forEach( function( item ){
				var __value = item[ cellData.prop ];

				if( !obj.hasOwnProperty( __value ) ){
					obj[ __value ] = true;
					if( __value.toLowerCase().indexOf( value.toLowerCase() ) != -1 ){
						arr.push({
							value : __value,
							label : __value.replace( '@zohocorp.com', '' ),
							email : __value
						});
					}
				}
			});

			return arr;
		},

		dataConversion : function( row_datas, header_data ){
			var final =  [];

			row_datas.forEach( function( row_data ){
				var obj = {};

				// you can convert your row data to plain string for searching and filtering purpose

				header_data.forEach( function( item ){
					var prop = item.prop,
					to_set = row_data[ prop ];

					// you can pass plain string or array of strings here for text and multiple types

					if( prop == "applicable_edition" ){
						var str = "";
						if( typeof to_set == "object" ){
							to_set.forEach( function( item ){
								str += ( item.someData || "" );
							});
						}

						to_set = str;
					}
					obj[ prop ] = to_set;
				});

				final.push( obj );
			});

			return final;
		},

		beforeEdit : function( col_index, row_index, cellData, rowData ){
			// this.setData( 'value', rowData[ cellData.prop ] );
			if( cellData.dataType == "custom" ){
				this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value', rowData[ cellData.prop ] );
			}
		},

		onEdit : function(){
			// var input = this.$node.querySelector( '.editInput' );
			// input.focus();
			// input.selectionStart = input.selectionEnd = input.value.length;
		},

		blur : function( cellIndex, rowIndex, cellData, rowData, __value ){
			// do save

			// how to edit multiple data type?
			var __value = __value || this.data.value;

			switch( cellData.dataType ){
				case 'boolean' : {
					__value = __value == "true";
				}
				break;
				case "date" : {

				}
				break;
				case "number" : {
					__value = parseFloat( __value );

					if( isNaN( __value ) ){
						return;
					}
				}
				break;
				case 'custom' : {
					__value = this.$node.getElementsByClassName( 'lyteCustomEditElement' )[ 0 ].ltProp( 'value' );
				}
				break;
			}


			Lyte.objectUtils( rowData, 'add', cellData.prop, __value );
		},

		cellDelete : function( cellIndex, rowIndex, cellData, rowData ){
			// do save
			Lyte.objectUtils( rowData, 'add', cellData.prop, "" );
		}
	}
```

Modal based filter: This filter type, renders a modal to filter the given options. To enable the modal-based filter, set the lt-prop-filters property to true.


Show filters
Choose column
applicable_version
Availability
	Created By
	Custom Field
	Boolean Field
	Created Time
	Patch_filename
	Base_version
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	

Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-11T15:06:53+05:30
	
AU_5260.ppm
	
1
	
4270
	
	
	
[object Object]
	
1
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-09-10T15:06:53+05:30
	
AAU_5260.ppm
	
2
	
4270
	
	
	
[object Object]
	
2
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-09-09T15:06:53+05:30
	
BAU_5260.ppm
	
3
	
4270
	
	
	
[object Object]
	
3
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-09-08T15:06:53+05:30
	
CAU_5260.ppm
	
4
	
4270
	
	
	
[object Object]
	
4
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-09-07T15:06:53+05:30
	
DAU_5260.ppm
	
5
	
4270
	
	
	
[object Object]
	
5
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-09-06T15:06:53+05:30
	
EAU_5260.ppm
	
6
	
4270
	
	
	
[object Object]
	
6
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-09-05T15:06:53+05:30
	
FAU_5260.ppm
	
7
	
4270
	
	
	
[object Object]
	
7
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-09-04T15:06:53+05:30
	
GAU_5260.ppm
	
8
	
4270
	
	
	
[object Object]
	
8
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-09-03T15:06:53+05:30
	
HAU_5260.ppm
	
9
	
4270
	
	
	
[object Object]
	
9
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-09-02T15:06:53+05:30
	
IAU_5260.ppm
	
10
	
4270
	
	
	
[object Object]
	
10
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	



Inline filter: This filter type, renders an inline filter. To enable the inline filter, set the lt-prop-inline-filter property to true.


Choose column
applicable_version
Availability
	Created By
	Custom Field
	Boolean Field
	Created Time
	Patch_filename
	Base_version
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	

Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-11T15:06:53+05:30
	
AU_5260.ppm
	
1
	
4270
	
	
	
[object Object]
	
1
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-09-10T15:06:53+05:30
	
AAU_5260.ppm
	
2
	
4270
	
	
	
[object Object]
	
2
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-09-09T15:06:53+05:30
	
BAU_5260.ppm
	
3
	
4270
	
	
	
[object Object]
	
3
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-09-08T15:06:53+05:30
	
CAU_5260.ppm
	
4
	
4270
	
	
	
[object Object]
	
4
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-09-07T15:06:53+05:30
	
DAU_5260.ppm
	
5
	
4270
	
	
	
[object Object]
	
5
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-09-06T15:06:53+05:30
	
EAU_5260.ppm
	
6
	
4270
	
	
	
[object Object]
	
6
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-09-05T15:06:53+05:30
	
FAU_5260.ppm
	
7
	
4270
	
	
	
[object Object]
	
7
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-09-04T15:06:53+05:30
	
GAU_5260.ppm
	
8
	
4270
	
	
	
[object Object]
	
8
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-09-03T15:06:53+05:30
	
HAU_5260.ppm
	
9
	
4270
	
	
	
[object Object]
	
9
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-09-02T15:06:53+05:30
	
IAU_5260.ppm
	
10
	
4270
	
	
	
[object Object]
	
10
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	



Column Chooser

You can choose columns to be displayed in the view by column chooser checkbox with ltPropColumnChooser property. You can also define mandatory columns which can't be removed from view. These properties should be given in column data.

Sorting Rows
To enable sorting, set the ltPropRowSortable property to true.
applicable_version
Availability
	Created By
	Custom Field
	Boolean Field
	Created Time
	Patch_filename
	Base_version
	Patch_version
	From
	To
	Applicable_edition
	Patch_id
	Patch_validity
	Is_stop_ppm
	Mode
	Patch_url
	Product_id
	Checksum
	Patch_type
	Uploaded_by
	

Staged
	
ponkarthikeyan.t@zohocorp.com
	
some_value
	
false
	
2025-09-11T15:06:53+05:30
	
AU_5260.ppm
	
1
	
4270
	
	
	
[object Object]
	
1
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
afzal.mm@zohocorp.com
	
some_value
	
true
	
2025-09-10T15:06:53+05:30
	
AAU_5260.ppm
	
2
	
4270
	
	
	
[object Object]
	
2
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
anuja.manoharan@zohocorp.com
	
some_value
	
false
	
2025-09-09T15:06:53+05:30
	
BAU_5260.ppm
	
3
	
4270
	
	
	
[object Object]
	
3
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
thangagiriarasan.m@zohocorp.com
	
some_value
	
true
	
2025-09-08T15:06:53+05:30
	
CAU_5260.ppm
	
4
	
4270
	
	
	
[object Object]
	
4
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
ananthapadmanaban.n@zohocorp.com
	
some_value
	
false
	
2025-09-07T15:06:53+05:30
	
DAU_5260.ppm
	
5
	
4270
	
	
	
[object Object]
	
5
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
hari.haran@zohocorp.com
	
some_value
	
true
	
2025-09-06T15:06:53+05:30
	
EAU_5260.ppm
	
6
	
4270
	
	
	
[object Object]
	
6
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
santhoshraj.s@zohocorp.com
	
some_value
	
false
	
2025-09-05T15:06:53+05:30
	
FAU_5260.ppm
	
7
	
4270
	
	
	
[object Object]
	
7
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
surendran.m@zohocorp.com
	
some_value
	
true
	
2025-09-04T15:06:53+05:30
	
GAU_5260.ppm
	
8
	
4270
	
	
	
[object Object]
	
8
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
varun.a@zohocorp.com
	
some_value
	
false
	
2025-09-03T15:06:53+05:30
	
HAU_5260.ppm
	
9
	
4270
	
	
	
[object Object]
	
9
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Staged
	
vidhya.d@zohocorp.com
	
some_value
	
true
	
2025-09-02T15:06:53+05:30
	
IAU_5260.ppm
	
10
	
4270
	
	
	
[object Object]
	
10
	
	
false
	
production
	
	
1
	
f6dcd13d392496a2580aa424464a86e895bd30a94e93305a8967399435b3bd7689e57be700dd7021f3e8454c54f8fc0fcd5ee8b638302ec04933040537d49433
	
Feature
	
690805728
	


Search

You can perform a global search in your displayed data. Typed string will be checked with row data if it is matched with any of the cell string it will be displayed. onDataConversion method will be trigged before searching. You have to return row data in an object ( key - column name, value - String to be used for search )

Inline Edit

You can also edit individual fields. double clicking on the field switches the field to the edit mode( Based on the ui type ). In blur it will throw onEditBlur method. You can do your save and modifications in that callback.

Fixed Column

In the list view component, you can fix both columns at both left and right sides. You need to mention the pinned position in that particular column data.

Header resize

You can render headers with ltPropHeader ltPropHeader and its ltPropSubHeader in table. You can make header cells as resizable.

### listview - api

Properties

All properties should be prefixed with lt-prop

content
DataType	:	Array of objects
Default	:	[]
Description	:	Table data to be displayed
header
DataType	:	Array of objects
Default	:	[]
Description	:	Available table header data - refer overview section example
table
DataType	:	object
Default	:	{ infiniteScroll : true, preventScrollbar : false, contentLength : 25, stickyTable : true }
Description	:	Properties to be set for lyte-table to be rendered. refer lyte-table Properties
sub-headers
DataType	:	Boolean
Default	:	false
Description	:	It will render one fake outer header over lyte-th elements
column-chooser
DataType	:	Boolean
Default	:	false
Description	:	It will enable column chooser feature
popover
DataType	:	Stringified object
Default	:	{}
Description	:	This will be set to column chooser popover
filter
DataType	:	Stringified object
Default	:	{}
Description	:	This will be set to rendered filter element
format
DataType	:	String
Default	:	MM-DD-YYYY
Description	:	This will be used in date type filters and inline edit
edit
DataType	:	Boolean
Default	:	false
Description	:	This will enable inline edit
edit-yield
DataType	:	Boolean
Default	:	false
Description	:	This will render a fully yielded edit element
sort-property
DataType	:	String
Default	:	name
Description	:	Value of the given key field will be used for sorting column
filters
DataType	:	Boolean
Default	:	false
Description	:	This will render filters
show-filters
DataType	:	Boolean
Default	:	false
Description	:	This will show filters in a modal
display-filters
DataType	:	Boolean
Default	:	false
Description	:	This will show applied filters in the view
case-sensitive
DataType	:	Boolean
Default	:	false
Description	:	Uppper / lower case conversions on search will be done based on this property
search
DataType	:	Boolean
Default	:	false
Description	:	It will enable global search
input
DataType	:	Stringified JSON
Default	:	{"placeholder" : "Search", "closeIcon" : true, "appearance": "box"}
Description	:	This will be set to global search input
minlength
DataType	:	Number
Default	:	0
Description	:	Minimum number of characters required for global search
method
DataType	:	String
Default	:	contains
Description	:	Method of text searching
Methods

You can provide the methods to lyte-listview1 either via script or HTML.

on-before-filter-open
Description	:	This method is invoked before opening the filter accordion element
on-before-filter-close
Description	:	This method is invoked before closing the filter accordion element
on-custom-filter-reset
Description	:	This method is invoked before resetting the custom filter element
on-edit-blur
Description	:	This method is invoked on blur of inline edit element. You can do your data save here.
on-before-edit
Description	:	This method is invoked before editing a field
on-cell-delete
Description	:	This method is invoked on when delete key is pressed on a cell with edit element. You can do your modifications in that callback
on-picklist-construct
Description	:	This method is used for getting data in multiselect type filter
ReturnValue	:	multiselect picklist data
fetch-more-data
Description	:	This method is invoked when a multiselect filter contents reaches its scrollend
ReturnValue	:	You can render new array of data or a promise. Your promise should be resolved with new data
on-scroll-end
Description	:	This method is invoked when all the data is displayed in the main table
ReturnValue	:	You can render new array of data or a promise. Your promise should be resolved with new data
on-checked
Description	:	This method is invoked when a column is selected in the column chooser
on-unchecked
Description	:	This method is invoked when a column is unselected in the column chooser
on-row-click
Description	:	This method is invoked on clicking on the row
Yields

You can render your own dynamic html element through yield

yield
Description	:	You can render all the contents of the cells in this yield
<<custom_yield>>
Description	:	You can use specific yield for a specific column. Mention the yield name in the column data
lyte-custom-filter
Description	:	Elements to be rendered for custom data type filter
lyte-custom-edit-yield
Description	:	Elements to be rendered for custom data field for inline edit
Functions

You can call this function from anywhere in the js

---

## loader

### loader - overview

Loader

Loader is an UI component indicatior, which shows the loading process. In simple words. it is a progress status that displays before rendering. sLyte provides two different types of loader namely, Definite and Indefinite Loader.


Dependencies
```html
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-loader.css"> </link>
```
Definite Loader

The Definite loader shows progress completion along with the required message at each stage of the progress.

```html
<lyte-loader  lt-prop-progress-bar='{"mode": "definite","displayMsg": {"10" : "Initial Loading is completed","20" : "Rendering the component","100" : "Almost Complete Please wait for sometime"},"value" : 10}' lt-prop-selector='#selector' lt-prop-on-timeout='{"errorMsg":"404"}'> </lyte-loader >
```
open loader
InDefinite Loader

Indefinite loader also shows the progress completion. But it doesn't shows the progress state. The value for Indefinite loader is set to be -1.

```html
<lyte-loader  lt-prop-progress-bar='{"mode": "indefinite"}' lt-prop-selector='#selector' lt-prop-on-timeout='{"errorMsg":"404"}' > </lyte-loader >
```
open loader
Inline Property

In general, the loader has the inline property. It appends the loader component to the loader's parent.

```html
<lyte-loader lt-prop-in-line=true  lt-prop-progress-bar='{"mode": "indefinite"}' lt-prop-selector='#selector' lt-prop-on-timeout='{"errorMsg":"404"}'> </lyte-loader >
```
open loader

Error message will be displayed after delayTime. By default, the delayTime is set to be 5 seconds. It can be changed using lt-prop-on-timeout property.

### loader - api

Properties

All properties must be prefixed with lt-prop.

Show(lt-prop-show)
Description	:	show property is used to show and hide the loader components.
Datatype	:	boolean.
Default	:	false.
Selector(lt-prop-selector)
Description	:	By default, the loader gets appended to body. Using the selector property you can denote the element in which loader component needs to get appended.
Datatype	:	string
Default	:	body
ProgressBar(lt-prop-progress-bar)
Description	:	It contains the message in object format.
Datatype	:	object
Default	:	{}
ProgressBar ==> mode
Description	:	defines the mode of the loader(definite or indefinite)
Datatype	:	string
Default	:	indefinite
progressBar ==> value
Description	:	For Definite loader, the value varies between 0 to 100 and for InDefinite loader, the value will be -1. The values can be set using ltProp() method
Datatype	:	Number
Default	:	definite:0, indefinite:-1
progressBar ==> show
Description	:	used to show and hide the progressBar.
Datatype	:	boolean
Default	:	true
progressBar ==> class
Description	:	Class name can be added to the progress bar.
Datatype	:	string
Default	:	
progressBar ==> displayMsg
Description	:	used to display message during progress
Datatype	:	object
Default	:	{}
ShowClass(lt-prop-show-class)
Description	:	Class will be added to the rendered loader
Datatype	:	string
Default	:	' '
OnTimeout(lt-prop-on-Timeout)
Description	:	Object which provides data for TimeOut(delayTime,errorMsg)
Datatype	:	Object
Default	:	{}
OnTimeout ==> DelayTime
Description	:	DelayTime for the loader component.
Datatype	:	Number
Default	:	5000
OnTimeout ==> errorMsg
Description	:	This enables the message to be displayed after the DelayTime.
Datatype	:	string
Default	:	'Some unknown error has occured'
CloseOnEscape(lt-prop-close-on-escape)
Description	:	Closes the loader while pressing escape key.
Datatype	:	Boolean
Default	:	true
Dimmer(lt-prop-dimmer)
Description	:	This property helps you to set the dimmer color and opacity
Datatype	:	object
Default	:	{color:black,opacity:0.4}
CloseIcon(lt-prop-close-icon)
Description	:	This property helps you to render the close icon
Datatype	:	Boolean
Default	:	true
Methods

Methods for lyte-loader are as follows.

onBeforeShow(on-before-show)
Description	:	Triggered before the loader is opened
onShow(on-show)
Description	:	Triggered when the loader is opened
onBeforeHide(on-before-Hide)
Description	:	Triggered before the loader is closed.
onHide(on-hide)
Description	:	Triggered when the loader is closed.
onTimeout(on-timeout)
Description	:	Triggered when delay time exceed.
onCancel(on-cancel)
Description	:	Triggered When loader is closed using close icon or Escape key.

---

## lyte-editor

### lyte-editor - overview

Lyte Editor

Lyte Editor is a wrapper component over Monaco editor (the code editor that powers VS Code). It is an online code editor like Code Mirror and Ace Editor

Steps

Step 1:Do the following changes in package.json
```javascript
"addons" : [ "@slyte/lyte-editor" ],
"dependencies": {
  "@slyte/lyte-editor": "^1.0.4-beta"
    "@slyte/lyte-editor" : "http://build/zoho/lyte_editor/webhost/import_branch/Feb_27_2024/slyte-lyte-editor-1.0.4-beta.tgz" // webhost build version
 }

 // then
  npm install --registry http://cm-npmregistry
```

Step 2: Install the lyte editor as addons. To do so execute the following command.
lyte install <package> <options> --registry

Here is an example for you

lyte install @slyte/lyte-editor@1.0.4-beta --registry http://cm-npmregistry

By default, on executing the above command, you can find texteditor as lookups, being added in app.js.

Sample Syntax
```html
<!-- Sample Syntax -->
<lyte-editor lt-prop-base-path="{ Output Directory }/addons/lyte-editor/dist"> </lyte-editor>
```
Sample Lyte Editor
Standalone Version

For Non Lyte Applications, Lyte Editor natively supports standalone version ( use lyte-editor@1.0.3 or above ). This means, lyte editor will take care of the installation and loading of its dependencies. Installation of the dependencies will happen in the post-install of the lyte-editor package. After installation, Lyte Editor is builded in production mode and stored in this location
/node_modules/lyte-editor/addons/lyte-editor/dist/
For proper working of the lyte-editor, copy the complete folder into your deployment folder structure (or) use it as such inside the node_modules folder

For now, this auto installation of dependencies feature will not work inside a lyte application, This feature is for non-lyte applications Therefore,all the dependencies has to be installed manually.

Bundling of files (or) changing the directory structure inside the /node_modules/lyte-editor/addons/lyte-editor/dist/ folder will result in unexpected behavior of the lyte-editor

Fingerprint URL Mappings

In standalone version, as lyte-editor takes care of loading the dependencies, the relative file paths of the dependencies are hard-coded into lyte editor (this is the reason why bundling (or) altering the file structure inside the dist folder may break the code)
Incase your application is using fingerprinted urls to load the files, you might expect the same from lyte-editor.
For this use case, it is required to pass the url mappings object into lyte-editor.

```javascript
// After adding the lyte-editor.js script, loadDependencies API should be called
// (e.g) lyteEditor.loadDependencies( path_to_dist_of_lyte_editor,  url_mappings_object )
// Sample Mappings Object
var urlMappings = {
"/path/to/a/js/file.js" : "/path/to/a/js/file_260d6_.js"
}
lyteEditor.loadDependencies("/node_modules/lyte-editor/addons/lyte-editor/dist/",urlMappings)
```

---

## notes

### notes - overview

Note/Comment view

This component is used to create, edit and view comments in note view. Each comments may contains multiple attachments, voice notes, checkins, plain text. We can also add nested replies for each comments

```html
<!-- lyte framework files -->
<script type="text/javascript" src="lyte/polyfill-bundle.js"></script>
<script type="text/javascript" src="lyte/custom-elements-es5-adapter.js"></script>
<script type="text/javascript" src="lyte/lyte-es5.js"></script>

							<!-- common ui-component files -->
<script type="text/javascript" src="lyte-dom/lyte-dom.js"></script>
<script type="text/javascript" src="ui-components/I18n/en_US.js"></script>
<script type="text/javascript" src="ui-components/components/helpers/helpers.js"></script>

<script type="text/javascript" src="ui-components/components/lyte-popover.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-button.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-checkbox.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-input.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-menu.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-colorpicker.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-colorbox.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-fileupload.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-messagebox.js"></script>
<script type="text/javascript" src="ui-components/plugins/lyte-resize.js"></script>

							<!-- ui-component css files -->
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-popover.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-button.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-input.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-menu.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-colorpicker.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-colorbox.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-fileupload.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-messagebox.css"></link>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-resize.css"></link>

                            <!-- texteditor js files -->
<script type="text/javascript" src="lyte-texteditor/components/helpers/helpers.js"></script>
<script type="text/javascript" src="lyte-texteditor/components/javascript/lyte-texteditor.js"></script>
<script type="text/javascript" src="lyte-texteditor/components/javascript/lyte-editorpanel.js"></script>

                           <!-- texteditor css files -->
<link rel="stylesheet" href="lyte-texteditor/components/styles/lyte-ui-texteditor.css"></link>
<link rel="stylesheet" href="lyte-texteditor/components/styles/lyte-ui-editorpanel.css"></link>

						   <!-- note js files -->
<script type="text/javascript" src="ui-components/components/lyte-note/lyte-notecomp.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-note/lyte-voicenote.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-note/lyte-comment.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-note/lyte-note-editor.js"></script>
<script type="text/javascript" src="ui-components/components/lyte-note/lyte-emoji.js"></script>
```

The anatomy of a texteditor is as shown below.

Lyte-notecomp uses the following components for creating note view

lyte-comment
lyte-note-editor
lyte-emoji
lyte-voicenote
Data of comment

Each comment data should be defined in an object. It will contain comment rendering details, styling details and reply list.
Data given in header and footer section will be rendered in given order. You can specify callbacks for each footer section in its data.
Sample comment data is given below

```javascript
{
           // If image provided profile image will be renderd
           image : '/docApp/images/Developers/sangeetha.jpg',
           // Data need to be shown in header of the comment. If method name is provided given method will be called on clicking that element
           header : [
               {
                   name : "user_name", // will be set as class
                   value : "Sangeetha J." // will be displayed
               },
               {
                   name : "role",
                   value : "MLS"
               },
               {
                   name : "topic",
                   value : "Some random topic"
               }
           ],

           /*
               Set of available emojis --> will be displayed in the footer
           */

           emoji : [
               { // emoji panel will open for first element
                   value : "",
                   count : 0,
                   class : "lyteNoteLikeReaction",
                   name : "Like",
                   reacted : [
                   ]
               },
               {
                   value : "&#128077;", // will be displayed
                   name : "Thumbs up",
                   count : 2,
                   reacted : [
                         {
                           "id": "0849",
                           "name": "Sangeetha J.",
                           "avatar": "/docApp/images/Developers/sangeetha.jpg",
                           "email": "sangeethaj@zohocorp.com",
                           "createdTime": "2021-10-04T11:27:13+05:30"
                         },
                         {
                           "id": "7133",
                           "name": "Suren M.",
                           "avatar": "/docApp/images/Developers/suren.jpg",
                           "email": "surenm@zohocorp.com",
                           "createdTime": "2021-10-03T11:27:13+05:30"
                         }
                       ]
                   //, class : 'some_class' ---> will be set as class
                   //, selected : true ---> considered as liked emoji
               }
           ],
           id : "comment_1",
           attachments : [],
           createdTime : "2020-09-29T11:27:13+05:30", // if provided time will be displayed. 'onTimeConversion' method will be triggered. returned value will be displayed
           footer : [ // will be rendered in footer
               {
                   name : "add_reply", // will be set as class
                   value : 'Add a reply' // display value
               }
           ],
           style : {
               background : "yellow" // will be set as background color for comment / texteditor
           },
           reply : [], // available replies. It should follow the same data structure of comment
           value : '&lt;p&gt;Some test comment by &lt;b&gt;Sangeetha J.&lt;/b&gt;&lt;/p&gt;', // comment to be displayed. You can provide HTML string or Data returned by lyte-texteditor
           checkIn : { // for checkin type comment
               latitude : '12.920950',
               longitude : '80.184980'
           },
           voiceNote : { // for voicenote type comment
               id : "some_id", // will be set as id
               name : "Sample_voice_note.wav",
               src : "dist/Sample_voice_note.wav"
           }
       }
```
Sample note

Sample note component is given below. If a comment content is exceeds 250 characters it will only show 250 charaters along with 'more' button.

```html
<lyte-notecomp lt-prop-comments = {{comments}} lt-prop-edit-mode = {{lbind(editMode)}} on-emoji-select = {{method('emojiselect')}} on-time-conversion = {{method('timeConversion')}} on-trigger = {{method('onTrigger')}} lt-prop-avatar = 'images/pk.jpg' lt-prop-upload-info-message = "Attachment upload in progress. Please Save the Note after upload completed" lt-prop-empty-info-message = "Please Enter Note" on-before-send = {{method('beforeSend')}} on-success = {{method('success')}} on-failure = {{method('failure')}} on-remove = {{method('removal')}} on-before-remove = {{method('beforeRemoval')}} on-comment-edit = {{method('commentEdit')}} on-comment-delete = {{method('commentDelete')}} on-comment-emoji = {{method('commentEmoji')}} on-main-comment-cancel = {{method('mainCommentCancel')}} on-main-comment-save = {{method('mainCommentSave')}} on-comment-save = {{method('commentSave')}} on-comment-cancel = {{method('commentCancel')}} on-editor-paste={{method('editorPaste')}} on-header-click = {{method('onHeaderClick')}} on-footer-click = {{method('onFooterClick')}}>
       // yield for checkin comment
       <template is = 'registerYield' yield-name = 'lyte-note-checkin'>
           <div class='some_random_location' onclick="{{action('mapClick', ltPropCheckIn)}}">
               {{ltPropCheckIn.latitude}} and {{ltPropCheckIn.longitude}}
           </div>
       </template>
       // yield for pinned comment
       <template is = "registerYield" yield-name = "lyte-pinned-note">
           <div class="notePinMessage"></div>
       </template>
   </lyte-notecomp>
```
```javascript
didDestroy : function(){
           // wrote this for removing stored files in client( My local example )
           $L.ajax( {
               url : "removeall"
           });
       },

       didConnect : function(){
           this._notecomp = $L( this.$node ).children().get( 0 );
       },

       data : function(){
           return{

               sanitizer : prop( 'object', {
                   default : {
                       attr : Lyte.Security.createSanitizer( { ADD_URI_SAFE_ATTR : [ "style" ], ALLOWED_STYLE : "ALL", STYLE_VALIDATION : false })
                   }
               }),

               pinnedComments : prop( 'array', { default : [] } ),

               /*
                   Already available comment
               */

               comments : prop( 'array', { default : [
                   {
                       // If image provided profile image will be renderd
                       image : '/docApp/images/Developers/sangeetha.jpg',
                       // Data need to be shown in header of the comment. If method name is provided given method will be called on clicking that element
                       header : [
                           {
                               name : "user_name", // will be set as class
                               value : "Sangeetha J." // will be displayed
                           },
                           {
                               name : "role",
                               value : "MLS"
                           },
                           {
                               name : "topic",
                               value : "Some random topic"
                           }
                       ],

                       /*
                           Set of available emojis --> will be displayed in the footer
                       */

                       emoji : [
                           { // emoji panel will open for first element
                               value : "",
                               count : 0,
                               class : "lyteNoteLikeReaction",
                               name : "Like",
                               reacted : [
                               ]
                           },
                           {
                               value : "&#128077;", // will be displayed
                               name : "Thumbs up",
                               count : 15,
                               reacted : [
                                     {
                                       "id": "0849",
                                       "name": "Sangeetha J.",
                                       "avatar": "/docApp/images/Developers/sangeetha.jpg",
                                       "email": "sangeethaj@zohocorp.com",
                                       "createdTime": "2021-10-04T11:27:13+05:30"
                                     },
                                     {
                                       "id": "7133",
                                       "name": "Suren M.",
                                       "avatar": "/docApp/images/Developers/suren.jpg",
                                       "email": "surenm@zohocorp.com",
                                       "createdTime": "2021-10-03T11:27:13+05:30"
                                     },
                                     {
                                       "id": "3477",
                                       "name": "Christopher",
                                       "avatar": "/docApp/images/Developers/christo.jpg",
                                       "email": "christopher@zohocorp.com",
                                       "createdTime": "2021-10-01T11:27:13+05:30"
                                     },
                                     {
                                       "id": "4293",
                                       "name": "Anantha padmanaban",
                                       "avatar": "/docApp/images/Developers/ananthaSnr.jpg",
                                       "email": "anantha_padmanaban@zohocorp.com",
                                       "createdTime": "2021-09-30T11:27:13+05:30"
                                     },
                                     {
                                       "id": "7273",
                                       "name": "Anantha padmanaban",
                                       "avatar": "/docApp/images/Developers/ananthaJnr.jpg",
                                       "email": "anantha_padmanaban@zohocorp.com",
                                       "createdTime": "2021-09-29T11:27:13+05:30"
                                     },
                                     {
                                       "id": "8396",
                                       "name": "Afzal",
                                       "avatar": "/docApp/images/Developers/af.jpg",
                                       "email": "afzal@zohocorp.com",
                                       "createdTime": "2021-09-28T11:27:13+05:30"
                                     },
                                     {
                                       "id": "5219",
                                       "name": "Iswarya",
                                       "avatar": "/docApp/images/Developers/isw.jpg",
                                       "email": "iswarya@zohocorp.com",
                                       "createdTime": "2021-09-27T11:27:13+05:30"
                                     },
                                     {
                                       "id": "3456",
                                       "name": "Aravindan",
                                       "avatar": "/docApp/images/Developers/ln.jpg",
                                       "email": "aravindan@zohocorp.com",
                                       "createdTime": "2021-09-26T11:27:13+05:30"
                                     },
                                     {
                                       "id": "5776",
                                       "name": "Samrat bose",
                                       "avatar": "/docApp/images/Developers/samrot.jpg",
                                       "email": "samrat_bose@zohocorp.com",
                                       "createdTime": "2021-09-25T11:27:13+05:30"
                                     },
                                     {
                                       "id": "5819",
                                       "name": "Sonu bhati",
                                       "avatar": "/docApp/images/Developers/sonu.jpg",
                                       "email": "sonu_bhati@zohocorp.com",
                                       "createdTime": "2021-09-24T11:27:13+05:30"
                                     },
                                     {
                                       "id": "8756",
                                       "name": "Subiksha",
                                       "avatar": "/docApp/images/Developers/subiksha.jpg",
                                       "email": "subiksha@zohocorp.com",
                                       "createdTime": "2021-09-23T11:27:13+05:30"
                                     },
                                     {
                                       "id": "3324",
                                       "name": "Thangagiri Arasan",
                                       "avatar": "/docApp/images/Developers/thangam.jpg",
                                       "email": "thangagiri_arasan@zohocorp.com",
                                       "createdTime": "2021-09-22T11:27:13+05:30"
                                     },
                                     {
                                       "id": "8368",
                                       "name": "Varun",
                                       "avatar": "/docApp/images/Developers/varun.jpg",
                                       "email": "varun@zohocorp.com",
                                       "createdTime": "2021-09-21T11:27:13+05:30"
                                     },
                                     {
                                       "id": "6595",
                                       "name": "Vidya",
                                       "avatar": "/docApp/images/Developers/vidhya.jpg",
                                       "email": "vidya@zohocorp.com",
                                       "createdTime": "2021-09-20T11:27:13+05:30"
                                     },
                                     {
                                       "id": "6596",
                                       "name": "Vignesh",
                                       "avatar": "/docApp/images/Developers/vignesh.jpg",
                                       "email": "vignesh@zohocorp.com",
                                       "createdTime": "2021-09-19T11:27:13+05:30"
                                     }
                                   ]
                               //, class : 'some_class' ---> will be set as class
                               //, selected : true ---> considered as liked emoji
                           }
                       ],
                       id : "comment_1",
                       attachments : [],
                       createdTime : "2020-09-29T11:27:13+05:30", // if provided time will be displayed. 'onTimeConversion' method will be triggered. returned value will be displayed
                       footer : [ // will be rendered in footer
                           {
                               name : "add_reply", // will be set as class
                               value : 'Add a reply' // display value
                           }
                       ],
                       style : {
                           background : "yellow" // will be set as background color for comment / texteditor
                       },
                       reply : [], // available replies. It should follow the same data structure of comment
                       value : '<p>Some test comment by <b>Sangeetha J.</b></p>' // comment to be displayed. You can provide HTML string or Data returned by lyte-texteditor
                   },
                   {
                       image : '/docApp/images/Developers/suren.jpg',
                       header : [
                           {
                               name : "user_name",
                               value : "Suren M."
                           },
                           {
                               name : "role",
                               value : "MTS"
                           },
                           {
                               name : "topic",
                               value : "Some random topic"
                           }
                       ],
                       emoji : [
                           {
                               value : "",
                               count : 0,
                               class : "lyteNoteLikeReaction",
                               reacted : [],
                               name : "Like"
                           },
                           {
                               value : "&#128077;",
                               name : "Thumbs up",
                               count : 1,
                               reacted : [
                                   {
                                       name : "Christopher",
                                       avatar : '/docApp/images/Developers/christo.jpg',
                                       id : "3477",
                                       email : "christopher.l@zohocorp.com",
                                       createdTime : $L.moment().startOf( 'day' ).format()
                                   }
                               ]
                           }
                       ],
                       createdTime : "2021-07-29T11:27:13+05:30",
                       footer : [
                           {
                               name : "add_reply",
                               value : 'Add a reply'
                           }
                       ],
                       id : "comment_2",
                       attachments : [],
                       reply : [
                           {
                               image : '/docApp/images/Developers/sangeetha.jpg',
                               header : [
                                   {
                                       name : "user_name",
                                       value : "Sangeetha J."
                                   },
                                   {
                                       name : "role",
                                       value : "MLS"
                                   },
                                   {
                                       name : "topic",
                                       value : "Some random topic reply"
                                   }
                               ],
                               emoji : [
                                   {
                                       value : "",
                                       count : 0,
                                       name : "Like",
                                       class : "lyteNoteLikeReaction",
                                       reacted : []
                                   },
                                   {
                                       value : "&#128077;",
                                       name : "Thumbs up",
                                       count : 1,
                                       reacted : [
                                           {
                                               name : "Christopher",
                                               avatar : '/docApp/images/Developers/christo.jpg',
                                               id : "3477",
                                               email : "christopher.l@zohocorp.com",
                                               createdTime : $L.moment().startOf( 'day' ).format()
                                           }
                                       ]
                                   }
                               ],
                               createdTime : $L.moment().subtract( 1, 'day' ).format(),
                               footer : [
                                   {
                                       name : "add_reply",
                                       value : 'Add a reply'
                                   }
                               ],
                               id : "comment_3",
                               attachments : [],
                               reply : [],
                               value : '<p>Some test reply by <b>Sangeetha J.</b></p>'
                           }
                       ],
                       value : '<p>Some test comment by <b>Suren M.</b></p>'
                   },
                   {
                       image : '/docApp/images/Developers/thangam.jpg',
                       header : [
                           {
                               name : "user_name",
                               value : "Thangagiri"
                           },
                           {
                               name : "role",
                               value : "MTS"
                           },
                           {
                               name : "topic",
                               value : "Some random note"
                           }
                       ],
                       emoji : [
                           {
                               value : "",
                               count : 0,
                               class : "lyteNoteLikeReaction",
                               reacted : []
                           }
                       ],
                       edit : true, // will enable edit icon
                       delete : true, // will enable delete icon
                       pin : true,
                       createdTime : $L.moment().subtract( 6, 'hours' ).format(),
                       footer : [
                           {
                               name : "add_reply",
                               value : 'Add a reply'
                           }
                       ],
                       reply : [],
                       id : "comment_5",
                       attachments : [],
                       voiceNote : {
                            name : "Sample_voice_note.wav",
                           src : "dist/Sample_voice_note.wav"
                       },
                       value : '<p><b>Sample_voice_note.wav</b></p><p>Some test voiceNote by <b>Thangagiri</b></p>'
                   },
                   {
                       image : '/docApp/images/Developers/varun.jpg',
                       header : [
                           {
                               name : "checked_text",
                               value : "Checked In"
                           },
                           {
                               name : "checkedin_location",
                               value : "@Medavakkam, Chennai"
                           }
                       ],
                       emoji : [
                           {
                               value : "",
                               count : 0,
                               class : "lyteNoteLikeReaction",
                               reacted : []
                           }
                       ],
                       delete : true, // will enable delete icon
                       createdTime : $L.moment().subtract( 6, 'hours' ).format(),
                       footer : [
                           {
                               name : "add_reply",
                               value : 'Add a reply'
                           }
                       ],
                       reply : [],
                       id : "comment_5",
                       attachments : [],
                       checkIn : {
                           latitude : '12.920950',
                           longitude : '80.184980'
                       },
                       value : ''
                   }
               ] } ),

               /*
                   Will switch between edit and normal mode for main comment
               */

               editMode : prop( 'boolean', { default : false } ),

               localDelete : prop( 'object', { default : {} } )
           }
       },

       // while pressing cancel uploaded files needs to be removed in component

       remove_files_from_fileupload : function( comment_id, ignore ){
           this._ignore = ignore;
           this._frmcancel = true;

           this._notecomp.removeAllFiles( comment_id );

           delete this._frmcancel;
           delete this._ignore;
       },

       actions : {
           mapClick : function( checkIn ){
               window.open( "https://maps.google.com/maps?q=" + checkIn.latitude + ',' + checkIn.longitude );
           }
       },

       mapClick : function(){
           var index = arguments[ 3 ],
           data = index.sectionArray[ index.sectionIndex ],
           checkIn = data.checkIn;

           window.open( "https://maps.google.com/maps?q=" + checkIn.latitude + ',' + checkIn.longitude );
       },

       /*
           Whenever a reply button is pressed this will be called
       */

       commentReply : function(){
           var final = arguments[ 3 ],
           __data = final.sectionArray[ final.sectionIndex ],
           first = $L( __data.reply ).get( -1 );

           if( first && first.firsttime ){ // to prevent adding reply for multiple times
               return;
           }

           Lyte.arrayUtils( __data.reply, 'insertAt', 0, {
               image : '/docApp/images/Developers/pk.jpg',
               header : [
                   {
                       name : "user_name",
                       value : "Pon karthikeyan"
                   },
                   {
                       name : "role",
                       value : "MTS"
                   },
                   {
                       name : "topic",
                       value : "Some random topic"
                   }
               ],
               emoji : [
                   {
                       value : "",
                       count : 0,
                       name : "Like",
                       class : "lyteNoteLikeReaction",
                       reacted : []
                   }
               ],
               editmode : true,
               firsttime : true,
               createdTime : $L.moment().format(),
               footer : [
                   {
                       name : "add_reply",
                       value : 'Add a reply'
                   }
               ],
               reply : [],
               value : '',
               edit : true,
               delete : true,
               attachments : [],
               id : ( 'LyteComment' + parseInt( Math.random() * 1000000 ) )
           });
       },

       unselect_emoji : function( emoji_data, emoji_index ){
           emoji_data.every( function( item, index ){
               if( index == emoji_index || !item.selected ){
                   return true;
               }

               Lyte.objectUtils( item, 'add', 'selected', false );
               Lyte.objectUtils( item, 'add', 'count', item.count - 1 );

               if( item.count == 0 && index != 0 ){
                   Lyte.arrayUtils( emoji_data, 'removeAt', index );
               }

               return false;
           });
       },

       methods : {

           commentUnpin : function(){
               var arr = this.data.pinnedComments,
               id = arguments[ 2 ].id.replace( 'pinned_', '' ),
               index = arr.findIndex( function( item ){
                   return item.id == id;
               });

               Lyte.objectUtils( arr[ index ], 'delete', 'pinnedBy' );
               Lyte.arrayUtils( arr, 'removeAt', index );
           },

           commentPin : function(){

               var index = arguments[ 3 ],
               obj = index.sectionArray[ index.sectionIndex ];

               Lyte.objectUtils( obj, 'add', 'pinnedBy', {
                   name : "Pon karthikeyan",
                   avatar : '/docApp/images/Developers/pk.jpg',
                   id : "5216",
                   email : "ponkarthikeyan.t@zohocorp.com",
                   pinnedTime : $L.moment().format()
               });

               Lyte.arrayUtils( this.data.pinnedComments, 'push', obj );
           },

           reactionView : function(){
               var index = arguments[ 3 ];
               this._notecomp.viewReactions( index.sectionArray[ index.sectionIndex ] );
           },

           onHeaderClick : function(){
               if( $L( arguments[ 1 ] ).hasClass( 'checkedin_location' ) ){
                   this.mapClick.apply( this, arguments );
               }
           },

           onFooterClick : function(){
               if( $L( arguments[ 1 ] ).hasClass( 'add_reply' ) ){
                   this.commentReply.apply( this, arguments );
               }
           },

           commentEdit : function(){

               var data = arguments[ 3 ];

               Lyte.objectUtils( data.sectionArray[ data.sectionIndex ], 'add', 'editmode', true );
           },

           /*
               Will be triggered for clicking delete icon. You can make ur delete request here */

           commentDelete : function(){
               var data = arguments[ 3 ],
               id = arguments[ 2 ].id,
               pins = this.data.pinnedComments,
               pinnedIndex = pins.findIndex( function( item ){
                   return id == item.id;
               });

               if( pinnedIndex != -1 ){
                   Lyte.arrayUtils( pins, 'removeAt', pinnedIndex );
               }

               $L.ajax( {
                   url : 'removecomment',
                   data : {
                       comment_id : id
                   }
               });

               // deleting from the particular index

               Lyte.arrayUtils( data.sectionArray, 'removeAt', data.sectionIndex );
           },

           /*
               Called whenever emoji( reaction ) is clicked make emoji request here
           */

           commentEmoji : function( evt, emoji, comment, index ){
               var __data = index.sectionArray[ index.sectionIndex ],
               emoji_index = parseInt( $L( emoji ).attr( 'data-index' ) ),
               emoji_data = __data.emoji[ emoji_index ],
               current = emoji_data.count || 0,
               new_count;

               this.unselect_emoji( __data.emoji, emoji_index );

               Lyte.objectUtils( emoji_data, 'add', 'selected', !emoji_data.selected );

               if( emoji_data.selected ){
                   Lyte.arrayUtils( emoji_data.reacted, 'push', {
                       name : "Pon karthikeyan",
                       avatar : '/docApp/images/Developers/pk.jpg',
                       id : "5216",
                       email : "ponkarthikeyan.t@zohocorp.com",
                       createdTime : $L.moment().format()
                   });
               } else {
                   Lyte.arrayUtils( emoji_data.reacted, 'removeAt', emoji_data.reacted.findIndex( function( item ){
                       return item.id == '5216';
                   } ) )
               }

               new_count = current + 1 * ( emoji_data.selected ? 1 : -1 );

               if( !new_count ){
                   if( emoji_index ){
                       Lyte.arrayUtils( __data.emoji, 'removeAt', emoji_index );
                       return;
                   }
                   // new_count = '';
               }

               Lyte.objectUtils( emoji_data, 'add', 'count', new_count );

           },

           /*
               called while clicking cancel button of a comment
           */

           mainCommentCancel : function( editor, note ){
               note.ltProp( 'editMode', false );

               // uploaded files needs to be removed here

               $L.ajax( {
                   url : "removecomment",
                   data : {
                       comment_id : this._randomId
                   }
               } );

               delete this._randomId;

               this.remove_files_from_fileupload();

           },

           /*
               Adding a new comment. Make request here
           */

           mainCommentSave : function( editor, note, success, uploading, failure ){

               var html = editor.getHTML() || '',
               ret = this._notecomp.getBackground( editor );

               var obj = {
                   image : '/docApp/images/Developers/pk.jpg',
                   header : [
                       {
                           name : "user_name",
                           value : "Pon karthikeyan"
                       },
                       {
                           name : "role",
                           value : "MTS"
                       },
                       {
                           name : "topic",
                           value : "Some random topic"
                       }
                   ],
                   emoji : [
                       {
                           value : "",
                           count : 0,
                           class : "lyteNoteLikeReaction",
                           name : "Like",
                           reacted : []
                       }
                   ],
                   edit : true,
                   delete : true,
                   pin : true,
                   createdTime : $L.moment().format(),
                   footer : [
                       {
                           name : "add_reply",
                           value : 'Add a reply'
                       }
                   ],
                   reply : [],
                   value : editor.getJSON(),
                   style : ret,
                   attachments : success.map( function( item ){
                       return{
                           name : decodeURI( item.name ),
                           fileType : item.fileType,
                           size : item.size,
                           id : item.id,
                           src : "/images/" + this._randomId + '/' + item.id + '/' + item.name,
                           createdTime : $L.moment().format()
                       }
                   }.bind( this )),
                   id : this._randomId || ( 'LyteComment' + parseInt( Math.random() * 1000000 ) )
               };

               this.remove_files_from_fileupload( "", true );

               Lyte.arrayUtils( this.data.comments, 'push', obj );
               this.setData( 'editMode', false );

               delete this._randomId;
           },

           /*
               While clicking save for an edited comment. make save request here
           */

           commentSave : function( editor, index, success, uploading ){

               var ret = this._notecomp.getBackground( editor ),
               __data = index.sectionArray[ index.sectionIndex ],
               html = editor.getHTML() || '',
               no_change = html == __data.value && ret.background == __data.background,
               __local = this.data.localDelete,
               localDelete = __local[ __data.id ] || [];
               delete __local[ __data.id ];

               this.remove_files_from_fileupload( __data.id, true );

               if( success.length ){
                   no_change = false;

                   Lyte.arrayUtils( __data.attachments, 'push',
                     success.map( function( item ){
                       return{
                           name : decodeURI( item.name ),
                           fileType : item.fileType,
                           size : item.size,
                           id : item.id,
                           src : "/images/" + __data.id + '/' + item.id + '/' + item.name
                       }
                   }.bind( this )) );
               }

               // remove removed files( client ) in server

               if( localDelete.length ){
                   no_change = false;
                   localDelete.forEach( function( item ){
                       $L.ajax( {
                           url : "removefile",
                           data : {
                               comment_id : __data.id,
                               file_id : item.value.id
                           }
                       });
                   });
               }

               if( !no_change ){
                   Lyte.objectUtils( __data, 'add', 'value', editor.getJSON() );
               }
               if( __data.firsttime ){
                   Lyte.objectUtils( __data, 'delete', 'firsttime' );
               } else if( !no_change ) {
                   var footer = __data.footer.filter( function( item ){
                       return item.name == 'LyteNoteEditedLabel';
                   })[ 0 ];

                   if( !footer ){
                       /*
                           Adding edited span to footer
                       */
                       Lyte.arrayUtils( __data.footer, 'insertAt', 0, {
                           name : "LyteNoteEditedLabel",
                           value : "(edited)"
                       });
                   }
               }

               Lyte.objectUtils( __data, 'add', 'style', ret );
               Lyte.objectUtils( __data, 'add', 'editmode', false );

               // save request
           },

           /*
               While clicking cancel button of comment
           */

           commentCancel : function( editor, index ){
               var __data = index.sectionArray[ index.sectionIndex ];


               // for reply add it needs to be deleted from its reply list
               if( __data.firsttime ){
                   $L.ajax( {
                       url : 'removecomment',
                       data : {
                           comment_id : __data.id
                       }
                   });
                   Lyte.arrayUtils( index.sectionArray, 'removeAt', index.sectionIndex );
               } else {
                   this.remove_files_from_fileupload( __data.id );

                   // while pressing cancel in edit case removed files needs to be restored

                   var __local = this.data.localDelete,
                   localDelete = __local[ __data.id ] || [];

                   delete __local[ __data.id ];

                   localDelete.reverse().forEach( function( item ){
                       Lyte.arrayUtils( __data.attachments, 'insertAt', item.index, item.value );
                   });

                   Lyte.objectUtils( __data, 'add', 'editmode', false );

                   this._notecomp.setBackground( editor, __data.style );
               }
           },

           /*
               While pasting something to an editor it will be called. You can modify pasted content here

               contents of parsed element will be added to texteditor
           */

           editorPaste: function( parsedElement, clipboard, editor ){
               Array.from( parsedElement.querySelectorAll( '*' ) ).forEach( function( elem ){
                   [ 'fontSize', 'fontFamily' ].forEach( function( item ){
                       elem.style[ item ] = '';
                   });

                   if( /^(img|video|audio|table|iframe)$/i.test( elem.tagName || '' ) ){
                       elem.remove();
                   }
               });
           },

           /*
               You can change time's display format here
           */

           timeConversion : function( str, frm ){

               var moment = $L.moment( str ),
               today = $L.moment();

               if( moment.format( 'YYYY' ) == today.format( 'YYYY' ) ){

                   if( frm == 'reaction' || frm == 'pin' ){
                       return{
                           tooltip : "",
                           display : moment.format( "MMM DD hh:mm A" )
                       }
                   }

                   var display,
                   start_of_day = $L.moment( today ).startOf( 'day' ),
                   diff = start_of_day.fromNow( moment );

                   if( diff.past ){
                       start_of_day.subtract( 1, 'day' );
                       diff = start_of_day.fromNow( moment );

                       if( diff.past ){
                           display = moment.format( 'MMM DD' );
                       } else {
                           display = "Yesterday";
                       }

                   } else {
                       diff = moment.fromNow( today );
                       if( diff.property == 'hours' ){
                           display = "Today";
                       } else {
                           display = diff.value + " " + diff.property + " ago";
                       }
                   }

                   return {
                       display : display,
                       tooltip : moment.format( "MMM DD hh:mm A" )
                   }
               } else {
                   if( frm == 'reaction' || frm == 'pin' ){
                       return{
                           tooltip : "",
                           display : moment.format( "MMM DD,YYYY hh:mm A" )
                       };
                   }
                   return{
                       display : moment.format( 'MMM DD,YYYY' ),
                       tooltip : moment.format( "MMM DD,YYYY hh:mm A" )
                   }
               }
           },

           /*
               Called whenever emoji is selected from emoji panel. Make emoji addition request here
           */

           emojiselect : function( __emoji, index ){

              var __data = index.sectionArray[ index.sectionIndex ],
               emoji = __data.emoji,
               name = __emoji.name,
               value = __emoji.value,
               encode = __emoji.encode,
               match = emoji.filter( function( item ){
                   return item.value == encode;
               })[ 0 ];

               if( match ){
                   // for already available emoji list
                   if( match.selected ){
                       Lyte.objectUtils( match, 'delete', 'selected' );
                       Lyte.objectUtils( match, 'add', 'count', match.count - 1 );

                       var emoji_index = emoji.indexOf( match );

                       this.unselect_emoji( emoji, emoji_index );

                       if( match.count == 0 && emoji_index ){
                           Lyte.arrayUtils( emoji, 'removeAt', emoji_index );
                       }

                       var index = match.reacted.findIndex( function( item ){
                           return item.id == '5216';
                       });

                       Lyte.arrayUtils( match.reacted, 'removeAt', index );

                       return;
                   }
                   Lyte.objectUtils( match, 'add', 'count', match.count + 1 );
                   Lyte.objectUtils( match, 'add', 'selected', true );
                   Lyte.arrayUtils( match.reacted, 'push', {
                       name : "Pon karthikeyan",
                       avatar : '/docApp/images/Developers/pk.jpg',
                       id : "5216",
                       email : "ponkarthikeyan.t@zohocorp.com",
                       createdTime : $L.moment().format()
                   });
               } else {
                   this.unselect_emoji( emoji );
                   // for selecting a new emoji it needs to be pushed to emoji list
                   Lyte.arrayUtils( emoji, 'push', {
                       value : encode,
                       count : 1,
                       selected : true,
                       name : name,
                       reacted : [
                           {
                               name : "Pon karthikeyan",
                               avatar : '/docApp/images/Developers/pk.jpg',
                               id : "5216",
                               email : "ponkarthikeyan.t@zohocorp.com",
                               createdTime : $L.moment().format()
                           }
                       ]
                   });
               }
           },

           // It will be called before sending a upload request. here i am adding comment id as extra param in form data

           beforeSend : function(){
               var arg = arguments,
               index = arg[ 6 ],
               formdata = arg[ 4 ],
               randomId;

               if( index ){
                   var __data = index.sectionArray[ index.sectionIndex ];

                   randomId = __data.id;
               } else {
                   this._randomId = randomId = this._randomId || ( 'LyteComment' + parseInt( Math.random() * 1000000 ) );
               }

               formdata.append( 'comment_id', randomId );

               formdata.append( 'file_id', arg[ 1 ].id );
           },

           success : function( files ){
               // var index = arguments[ 4 ];

               // if( index ){

               // } else{
               //  Lyte.arrayUtils( 'push',  )
               // }


           },

           failure : function(){

               // delete this._randomId;
           },

           // handle file removal here

           removal : function(){
               var detail = arguments[ 1 ],
               index = arguments[ 3 ],
               __data;

               if( this._ignore ){
                   return;
               }

               if( index ){
                   if( !this._frmcancel ){
                       return;
                   }
                   var __data = index.sectionArray[ index.sectionIndex ]
               } else if( !this._randomId ){
                   return;
               }

               // make delete request for uploaded file here

               $L.ajax( {
                   url : "removefile",
                   data : {
                       comment_id : index ? __data.id : this._randomId,
                       file_id : detail.id
                   }
               });
           },

           // while removing files in edit case they needs to be maintained as client. delete request should not be send until save

           beforeRemoval : function(){
               var arg = arguments,
               detail = arg[ 1 ],
               index = arg[ 3 ];

               if( index && !this._frmcancel ){
                   var __data = index.sectionArray[ index.sectionIndex ];
                   if( arg[ 0 ] == 'predefinedList' ){
                       var __local = this.data.localDelete,
                       localDelete = __local[ __data.id ];
                       if( !localDelete ){
                           localDelete = __local[ __data.id ] = [];
                       }

                       localDelete.push( {
                           value : detail,
                           index : arg[ 2 ].component.data.predefinedList.indexOf( detail )
                       });
                   }
               }
           },

           /*
               called for requesting mentions input data

               You can return data or promise here( Promise should be resolved with mentions data array )
           */

           onTrigger : function( value, editor ){

               if( value.length == 0 ){
                   return false;
               }

               var arr = [
                   {
                       id : "0849",
                       name : "Sangeetha J.",
                       avatar : "/docApp/images/Developers/sangeetha.jpg"
                   },
                   {
                       id : "7133",
                       name : "Suren M.",
                       avatar : "/docApp/images/Developers/suren.jpg"
                   },
                   {
                       id : "5216",
                       name : "Pon karthikeyan",
                       avatar : "/docApp/images/Developers/pk.jpg"
                   },
                   {
                       id : "3477",
                       name : "Christopher",
                       avatar : "/docApp/images/Developers/christo.jpg"
                   },
                   {
                       id : "4293",
                       name : "Anantha padmanaban",
                       avatar : "/docApp/images/Developers/ananthaSnr.jpg"
                   },
                   {
                       id : "7273",
                       name : "Anantha padmanaban",
                       avatar : "/docApp/images/Developers/ananthaJnr.jpg"
                   },
                   {
                       id : "8396",
                       name : "Afzal",
                       avatar : "/docApp/images/Developers/af.jpg"
                   },
                   {
                       id : "5219",
                       name : "Iswarya",
                       avatar : "/docApp/images/Developers/isw.jpg"
                   },
                   {
                       id : "3456",
                       name : "Aravindan",
                       avatar : "/docApp/images/Developers/ln.jpg"
                   },
                   {
                       id : "5776",
                       name : "Samrat bose",
                       avatar : "/docApp/images/Developers/samrot.jpg"
                   },
                   {
                       id : "5819",
                       name : "Sonu bhati",
                       avatar : "/docApp/images/Developers/sonu.jpg"
                   },
                   {
                       id : "8756",
                       name : "Subiksha",
                       avatar : "/docApp/images/Developers/subiksha.jpg"
                   },
                   {
                       id : "3324",
                       name : "Thangagiri Arasan",
                       avatar : "/docApp/images/Developers/thangam.jpg"
                   },
                   {
                       id : "8368",
                       name : "Varun",
                       avatar : "/docApp/images/Developers/varun.jpg"
                   },
                   {
                       id : "6595",
                       name : "Vidya",
                       avatar : "/docApp/images/Developers/vidhya.jpg"
                   },
                   {
                       id : "6596",
                       name : "Vignesh",
                       avatar : "/docApp/images/Developers/vignesh.jpg"
                   }
               ];
               return arr.filter( function( item ){
                   var txt = item.name,
                   ret,
                   __index = txt.toLowerCase().indexOf( value.toLowerCase() );

                   // switch( '' ){
                   //  case 'startsWith' : {
                   //      ret = __index == 0;
                   //  }
                   //  break;
                   //  case 'endsWith' : {
                   //      ret = ( __index + value.length == txt.length );
                   //  }
                   //  break;
                   //  default : {
                           ret = __index != -1;
                       // }
                   // }

                   var mentions = editor.getMentions(),
                   is_present = mentions.filter( function( __item ){
                       return item.id ==  __item;
                   })[ 0 ];

                   return ret && !is_present;

               });
           }
       }
```

---

## progressbar

### progressbar - overview

Progress Bar

Progress bar from the family of UI component, is used to show the progress of any task, work or any status. It is a non yielded component.

Dependencies
```javascript
<!-- individual components -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-progressbar.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.

The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-progressbar.js" ></script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-progressbar.css"> </link>


also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```
Anatomy

The anatomy of an accordion is as shown below.

Simple structure

Let us see the structure of lyte-table

Tags Used

Use the following tags to get a simple structure of an accordion

lyte-progressbar - The is used for the progress bar componenr.
Semantic structure
```html
<lyte-progressbar>
</lyte-progressbar>
```
Progressbar syntax - without yield
```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89"}}' >
</lyte-progressbar>
```
Default Progress bar

Change the value of the progrssbar by using the slider to see the changes in it.

Types

Have a look at the standout features of Lyte Progress bar.

Circle Progress Bar Sample

Set 'ltProptype' property value as 'circle' to render circle progress bar.

```html
<lyte-progressbar lt-prop = '{"type":"circle","stroke":"10","radius":"80","progressProperty" : {"value": "20"}}' > </lyte-progressbar>
```
Stacked Progress Bar

Set ltProptype property value as'stacked' to render stacked progress bar. The values for the stacks or chunks is provided using the property ltPropStack. ltPropStack is an array of objects where each object contains the properties along with their values for each chunks. Below are the properties whose values are required for rendering the chunks.

value - It is a numberical value that determines the value by which the progress will happen.
color - It determines the color property of the pregress segment.
animated - Set this property true to show the animation effect for the progress segment.
label - This property specifies the string that will be shown in the progressbar.
labelColor - This property specifies the color of the text/label that indicates the progress made.

The sum of the value property from all the chunks should not exceed 100. For n number of chunks, obj1.value + obj2.value + ... + objn.value <= 100

```html
<lyte-progressbar lt-prop = '{"type":"stacked","stack":[{"value":"15", "color":"yellow", "labelColor":"black"},{"value":"40", "color":"violet", "animated" : true},{"value":"25", "color":"blue", "label" : "25/100"}]}' > </lyte-progressbar>
```
```html
<lyte-progressbar lt-prop = '{"type":"stacked","stack":[{"value":"18", "color":"red", "label":"Critical"},{"value":"12", "color":"#f0ad4e", "label":"High"},{"value":"15", "color":"#5bc0de", "label":"Medium"},{"value":"10", "color":"yellow", "label":"Low", "labelColor":"black"},{"value":"45", "color":"#5cb85c", "label":"Resolved"}]}' > </lyte-progressbar>
```
Vertical Progress Bar

Set ltProptype value to vertical to render vertical progress bar. ltPropDirection value determines if the progress will happen upward or downward. By default, the progress will happen upward. For vertical type progress bar, the default values for ltPropWidth and ltPropHeight are 20px and 200px respectively. These values can be changed using the respective properties.

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "40", "duration" : "0.6s"}, "type" : "vertical", "percentage" : "false"}' > </lyte-progressbar>
```
Features
Progress Bar Model With Animation

Use the 'ltPropProgressProperty' to set the progress value that will be shown in the progressbar. Set ltPropAnimated as true to show the animation effect.

By default it is set to true.

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89", "duration" : "2s"}, "animated" : true}' > </lyte-progressbar>
```
Progress Bar Model Without Animation

Set 'ltPropAnimated' false to hide the animation effect.

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "50", "duration" : "2s"}, "animated" : false}' > </lyte-progressbar>
```
Enabling Accessibilty

You can pass the aria attributes to progressbar

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89"
}}' ltPropAriaLabel='status Tracker' > </lyte-progressbar>
```
Features
Progress Bar Model With Animation

Use the 'ltPropProgressProperty' to set the progress value that will be shown in the progressbar. Set ltPropAnimated as true to show the animation effect.

By default it is set to true.

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89", "duration" : "2s"}, "animated" : true}' > </lyte-progressbar>
```
Progress Bar Model Without Animation

Set 'ltPropAnimated' false to hide the animation effect.

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "50", "duration" : "2s"}, "animated" : false}' > </lyte-progressbar>
```
Enabling Accessibilty

You can pass the aria attributes to progressbar

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89"
}}' ltPropAriaLabel='status Tracker' > </lyte-progressbar>
```
Enabling Accessibilty

You can pass the aria attributes to progressbar

```html
<lyte-progressbar lt-prop = '{"progressProperty" : {"value": "25.89"
}}' ltPropAriaLabel='status Tracker' > </lyte-progressbar>
```
Properties
Methods

### progressbar - api

Properties

All properties should be prefixed with lt-prop.

Type
Name	:	type( lt-prop-type )
DataType	:	string
Default	:	bar
Description	:	With this property, you can provide the type of progress indicator.
Progress Fill Color
Name	:	progress-fill-color( lt-prop-progress-fill-color )
DataType	:	string
Default	:	#42a2eb
Description	:	With this, you can provide the color of progress segment.
Completed Fill Color
Name	:	completed-fill-color( lt-prop-completed-fill-color )
DataType	:	string
Default	:	#3fbd5f
Description	:	With this, you can provide the color of progress segment on completion.
Width
Name	:	width( lt-prop-width )
DataType	:	string
Default	:	100%
Description	:	This property helps you to provide the width of progress indicator of type bar.
Height
Name	:	height( lt-prop-height )
DataType	:	string
Default	:	12px
Description	:	This property helps you to provide the height of progress indicator of type bar.
Radius
Name	:	radius( lt-prop-radius )
DataType	:	number
Default	:	50
Description	:	With this, you can provide the radius of progress indicator of type "circle". It should be valid number.
Stroke
Name	:	stroke( lt-prop-stroke )
DataType	:	number
Default	:	5
Description	:	It indicates stroke-width of circle progress indicator. It should be valid number.
Animated
Name	:	animated( lt-prop-animated )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to show the animation effect for the progress segment.
Show Percentage
Name	:	show-percentage( lt-prop-show-percentage )
DataType	:	boolean
Default	:	true
Description	:	Set this property true to show the percentage text of progress.
Progress Property
Name	:	progress-property( lt-prop-progress-property )
DataType	:	object
Default	:	
Description	:	This object contains 3 properties namely value, duration and timingfn. Value : Determines how much to progress. Duration : Determines the time within which it will progress ie., transition-duration. timingfn : Determines the transition-timing-function property.
Label
Name	:	label( lt-prop-label )
DataType	:	string
Default	:	
Description	:	This property specifies the string that will be shown in the progressbar.
Label Color
Name	:	label-color( lt-prop-label-color )
DataType	:	string
Default	:	
Description	:	This property specifies the color of the text/label that indicates the progress made.
Font Size
Name	:	font-size( lt-prop-font-size )
DataType	:	string
Default	:	
Description	:	This property specifies the font size of the label.
Stack
Name	:	stack( lt-prop-stack )
DataType	:	array of objects
Default	:	[ ]
Description	:	This property contains an array objects. Each object specifies the values for each chunk/stack. The number of objects determines the number of chunks or stacks to be shown in the progressbar. Each object can have properties like value, color, animated, label, labelColor. NOTE : The sum of the values from all the object should not exceed 100. ie. (obj1.value + obj2.value + ... + objn) <= 100
Direction
Name	:	direction( lt-prop-direction )
DataType	:	string
Default	:	up
Description	:	This property specifies the direction in which the progress will happen in vertical type lyte-progressbar.
Percentage
Name	:	percentage( lt-prop-percentage )
DataType	:	boolean
Default	:	true
Description	:	This property will decide if the % sign will be shown or not after the progress value when lt-prop-label is not used. Setting it false will not show the percentage sign.
Utility Functions

Utility function of the Progress bar are designed to perform specific task.

value
Name	:	value
Description	:	This util is used to set the value of the progress bar.

---

## qr

### qr - overview

QR generator

This plugin is used to generate quick response ( QR ) codes from the provided string. It will provide output as canvas element( You can pass an existing canvas element orelse this plugin will provide a detached canvas element ). You can use this canvas for post processing of your QR code

You can customize qr code colors & sizes. This plugin can be used without any lyte dependencies.

```html
<script type="text/javascript" src = "node_modules/@zoho/lyte-ui-component/dist/plugins/qr/lyte-qr.js"></script>,
<script type="text/javascript" src = "node_modules/@zoho/lyte-dom/lyte-dom.js"></script>
---or----
-- Importing files --
import "@zoho/lyte-ui-plugins/plugins/qr/lyte-qr.js"
import $L from "@zoho/lyte-dom";
```
Encoding and error correction

This plugin supports four error correction methods. Each methods has their own error correction modules. Based on the error corrections QR codes will be generated


L ( 7% recovery )
M ( 15% recovery )
H ( 25% recovery )
Q ( 30% recovery )

When a Qr code is damaged or partially hidden, scanner reading will be depend on the Error correction mode used in the QR generation.

Use higher error correction mode for QR codes covered with logo or some other texts

Encoding

Four type of encodings are supported in this plugin. Based on the input text Encoding mode will be decided
Encoding Name	Description	Character Limits In Different Error Corrections
numeric	Only for encoding numbers	
L - 7089
M - 5596
H - 3393
Q - 3057

alphanumeric	Only for encoding numbers, uppercase characters and some basic symbols	
L - 4296
M - 3391
H - 2420
Q - 1852

byte	It can encode all the characters( UTF-8 encoding ).
Multi byte characters will be broken into smaller characters in this encoding.	
L - 2953
M - 2331
H - 1663
Q - 1273

kanji	Its only for japanese characters. By default byte mode will be used for japanese encoding. If you prefer Shift jis encoding include plugins/qr/lyte-qr.kanji.js file after lyte-qr.js file	
L - 1817
M - 1435
H - 1024
Q - 784

Sample Qr codes

You can create a Qr code by simply passing the String input to this plugin. Output will be in canvas element.

In Lyte-dom environment you can invoke this by calling $L.qr( options ). In Standalone environment call new LyteQr( options )

Some basic Qr creation examples. Encode input string if needed
Name	Input Format	Qr Code
Text	Stay lyte. Run fase. Live long	       Generate    
Url( if needed encode url )	https://lyte.csez.zohocorpin.com/3.80.0/uiComponents/qr/overview#Encoding	       Generate    
Contact information	BEGIN:VCARD
VERSION:3.93.0
N:Lyte Ui Comp;Lyte Qr
TEL:9876543210
EMAIL:lyte-team@zohocorp.com
END:VCARD	       Generate    
Phone number	tel:9876543210	       Generate    
Sms	SMSTO:9876543210:Hello Lyte team	       Generate    
Mail( if needed encode mail )	mailto:lyte-team@zohocorp.com?subject=Hello%20team	       Generate    
Location	geo:12.8291018,80.0502697	       Generate    
Event	BEGIN:VEVENT
SUMMARY:Lyte discussion
DTSTART:20250911T150000Z
DTEND:20250911T160000Z
LOCATION:North plaza, East wing
END:VEVENT
	       Generate    

```javascript
// if lyte-dom.js is present in ur application
			$L.qr({
				canvas : document.querySelector( "canvas" ), // your canvas element
				text : encodeURI( "https://lyte.csez.zohocorpin.com/3.80.0/uiComponents/qr/overview#Encoding" )
			});

// if lyte-dom.js is not present in ur application
			new LyteQr({
				canvas : document.querySelector( "canvas" ), // your canvas element
				text : encodeURI( "https://lyte.csez.zohocorpin.com/3.80.0/uiComponents/qr/overview#Encoding" )
			});
```
Generate QR code

Here Error correction mode "M" is used. Generate your Qr code and download it here.

Generally QR code area is surrounded by a 4 unit empty space. This is called Quiet zone. You can configure the quiet zone size.

Download
```javascript
// QR creation & download
var result = $L.qr({
	text : "Some text",
	canvas : <your canvas element>
});

if( result.canvas ){
	// download code
	var canvas = <your canvas element>,
	a = document.createElement( 'a' );

	a.download = 'my_qr';
	a.href = canvas.toDataURL( "image/png" );
	document.body.appendChild( a );

	a.click();
	a.remove();
} else {
	// handle error
}
```
Complex Qr code

Qr code will be bigger in size based on the input length.

In this 2515 characters are passed to the qr code generation. So Lower error correction mode is used here

Generate
```javascript
$L.qr({
	canvas : this.$node.querySelector( 'canvas' ), // your canvas element
	error_correction : "L", // Lower error correction mode is selected
	text : `Arthur Wellesley, 1st Duke of Wellington, KG, GCB, GCH, PC, FRS (1 May 1769 – 14 September 1852) was an Anglo-Irish statesman, soldier, and Tory politician who was one of the leading military and political figures of 19th-century Britain, serving twice as prime minister of the United Kingdom. He is among the commanders who won and ended the Napoleonic Wars when the Seventh Coalition defeated Napoleon at the Battle of Waterloo in 1815.

	Wellesley was born in Dublin into the Protestant Ascendancy in Ireland. He was commissioned as an ensign in the British Army in 1787, serving in Ireland as aide-de-camp to two successive lords lieutenant of Ireland. He was also elected as a member of Parliament in the Irish House of Commons. He was a colonel by 1796 and saw action in the Netherlands and in India, where he fought in the Fourth Anglo-Mysore War at the Battle of Seringapatam. He was appointed governor of Seringapatam and Mysore in 1799 and, as a newly appointed major-general, won a decisive victory over the Maratha Confederacy at the Battle of Assaye in 1803.

	Wellesley rose to prominence as a general during the Peninsular campaign of the Napoleonic Wars, and was promoted to the rank of field marshal after leading the allied forces to victory against the French Empire at the Battle of Vitoria in 1813. Following Napoleon's exile in 1814, he served as the ambassador to France and was made Duke of Wellington. During the Hundred Days in 1815, he commanded the allied army which, together with a Prussian Army under Field Marshal Gebhard von Blücher, defeated Napoleon at Waterloo. Wellington's battle record is exemplary; he ultimately participated in some 60 battles during the course of his military career.

	Wellington is famous for his adaptive defensive style of warfare, resulting in several victories against numerically superior forces while minimising his own losses. He is regarded as one of the greatest defensive commanders of all time, and many of his tactics and battle plans are still studied in military academies around the world. After the end of his active military career, he returned to politics. He was twice British prime minister as a member of the Tory party from 1828 to 1830 and for a little less than a month in 1834. He oversaw the passage of the Roman Catholic Relief Act 1829, while he opposed the Reform Act 1832. He continued as one of the leading figures in the House of Lords until his retirement and remained Commander-in-Chief of the British Army until his death.`
});
```
Qr with custom images

You can hide part of a QR code with custom Logos or text. With the help of error correction still we can read the actual contents in the qr code.

Always use higer error correction modes( H or Q) in this case

Generate
```javascript
var canvas = <Your canvas element>,
image = new Image();
$L.qr({
	canvas : canvas,
	error_correction : "H", // higher error correction mode
	text : encodeURI( "https://lyte.csez.zohocorpin.com/3.80.0/uiComponents/introduction" )
});

image.onload = function(){
	var image_width = this.width,
	image_height = this.height,
	canvas_width = canvas.width,
	canvas_height = canvas.height,
	ctx = canvas.getContext( "2d" ),
	x = ( canvas_width - image_width ) / 2,
	y = ( canvas_height - image_height ) / 2,
	radius = image_width / 2 + 30;

	// clearing the circular area

	ctx.fillStyle = "white";
	ctx.arc( canvas_width / 2, canvas_height / 2, radius, 0, 2 * Math.PI );
	ctx.fill();

	ctx.save();

	// placing text

	ctx.fillStyle = "black";
	ctx.font = '700 28px / 43px PuviRegular, sans-serif';
	ctx.fillText( "Lyte QR", x + 20, canvas_height / 2 + radius - 35 );
	ctx.save();

	// drawing the image in canvas

	ctx.drawImage( this, 0, 0, image_width, image_height, x, y - 20, image_width, image_height );

};
image.src = "/images/lyte.png";
```

---

## screengrab

### screengrab - overview

Screengrab

Lyte screengrab is mainly written for converting 'LyteShape' rendered svg elements to image files. It can be used for html elements too( not perfectly finished ).
It will download all the fonts and images required.Cross origin images are not supported. This plugin is written in ES6

Dependencies
```html
<!-- Plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-screengrab.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-scrollbar"
import $L from "@zoho/lyte-dom";
```
Example

Lyte screengrab will construct html with inline style( will construct separate style tag for pseudo elements ) in javascript. It will use svg foreignobject for converting html elements.
Its output will be an object. It will contain output as image, canvas, svg, html string. Success promise will be resolved with output.

```javascript
$L.screengrab( { dom : "#some_div" } ).then( function( result ){ // it will return a Promise
 document.body.appendChild( result.image ); // You can write image download part here
})

// For LyteShape image conversion

var render_container = LyteShape.container.find( 'svg' ).get( 0 ),
bcr = render_container.getBoundingClientRect(),
boundary = LyteShape.boundary,
offset = LyteShape.preview_offset,
_left = Math.min( 0, boundary.left - offset ),
_right = Math.max( bcr.width, boundary.right + offset ),
_top = Math.min( 0, boundary.top - offset ),
_bottom = Math.max( bcr.height, boundary.bottom + offset ),
width = _right - _left,
height = _bottom - _top;

_left += LyteShape.scrollLeft;
_top += LyteShape.scrollTop;

$L.screenGrab({
 getDimension : function(){
     return {
         width : width,
         height : height
     }
 },
 dom : render_container,
 background : "white",
 attributes : ['viewbox', 'viewBox'],
 attributes_replace : [ _left + ' ' + _top + ' ' + width + ' ' + height, _left + ' ' + _top + ' ' + width + ' ' + height ],
 styles : ['width','height'],
 styles_replace : [ width + 'px', height + 'px']
}).then( function(arg){
 document.body.appendChild(arg.image)
});

// Downloading as image
$L.screenGrab( { dom : '#body' } ).then( ( result ) =>{
 var a = document.createElement( 'a' );
 a.download = 'sample_screen'; // file name
 a.href = result.canvas.toDataURL( "image/png" );
 document.body.appendChild( a );
 a.click();
 a.remove();
});
```
download screen as image

---

## slytechart

### slytechart - overview

Chart
Introduction

This UI component, represents the given data in the form of a bar chart, pie chart, line chart, column chart, donut chart, area chart, radar chart, sunburst chart, funnel chart, pyramid chart and so on.

Dependencies
```javascript
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-chart.css"></link>
The js file is included in app.js
```
```javascript
<!-- individual components -->

<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-chart.js"> </script>
<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-chart.css"> </link>
```
Anatomy

Have a look at the below image.

Chart Structure

1. Canvas: Canvas is the main object which holds all the properties and configuration to draw the chart. Canvas area is the bounded box which holds title, legend, chart and credits.

2. Chart: Chart is the main object which hold properties and configuration for axis,plots. Chart area is the bounded box that contains axis area and plot area.

3. Credits: Credits in a chart refer to a small text or label that acknowledges the source of the data, the software/library used to generate the chart, or the creator of the visualization.

4. Legend: Legend object holds properties and configuration options for legend. Legend area is the box containing symbols and name for each series or items in the chart.

5. Loader: Options to show loader message. This loader is used to inform the user that something is processing behind the screen.

6. noDataHandler: Options for noData message, when there is no data available to draw the chart.

7. Notes: Annotations are the sticky text notes or custom notes that can be attached to any particular series data or anywhere in the chart area.

8. Tooltip: Options for the tooltip that appears when the users hovers over the plot.

9. MetaData: Defines the meta information of the columns and the axes.

10. SeriesData: The raw data from which the chart can be generated. It is mandatory to create a chart.

Working

Lyte charts is developed based on the zoho charts where Zoho Charts is an advanced Javascript Charting library manipulating data with d3.js utility including a stack of charts like column, bar, pie, donut, line, area, radar, sunburst, funnel, pyramid and more

Sample data

In your file, render the following code.

```html
<lyte-chart
lt-prop-type="bar"
lt-prop-canvas-title="customTitle goes here"
lt-prop-subtitle ="customTitle"
lt-prop-series-data={{seriesData}}
lt-prop-meta-data-axes ={{metaDataAxes}}
lt-prop-meta-data-columns ={{metaDataColumns}}
></lyte-chart>
```
```javascript
seriesData: prop('object', {
       'default': {
           "chartdata": [{
               "yaxiscolumnorder": [0, 0],
               "data": [
                   [
                       // dataindex in the metadata.columns refers this index of the array
                       ["P1", 495881.0458],
                       ["P2", 605881.2843],
                       ["P3", 721588.2343],
                       ["P4", 835881.5723],
                       ["P5", 1000000.9223]
                   ]
               ]
           }]
       }
   }),
   metaDataAxes: prop('object', {
       'default': {
           "x": [0],
           "y": [
               [1]
           ],
           "tooltip": [0, 1]
       }
   }),
   metaDataColumns: prop('array', {
       'default': [{
               "dataindex": 0, // array position of the data given in seriesdata.(Ex: index of P1)
               "columnname": "Products",
               "datatype": "ordinal"
           },

           {
               "dataindex": 1, // array position of the data given in seriesdata.(Ex: index of 495881.0458)
               "columnname": "Total Sales",
               "datatype": "numeric",
               "numeric": {
                   "format": {
                       "thousandSeperator": ",",
                       "decimalPlaces": 2,
                       "signEnabled": false,
                       "prefix": "$"
                   }
               }
           }
       ]
})
```

Mandatory property like ltPropType, ltPropSeriesData, ltPropMetaDataAxes, ltPropMetaDataColumns must be given.

---

## svg

### svg - overview

SVG

In some browsers(chrome), when SVG elements are cloned the href attribute of the <use> tag malfunctions. To circumvent the problem, UI components, has provided a cross browser compatible svg element.

Dependencies
```html
<!-- Individual component files -->

import "@zoho/lyte-ui-components/components/lyte-svg.js"
```
Introduction

To provide a path for the svg simply set the lt-prop-path attribute. The lt-prop-path attribute is set to the path attribute of the use tag. The lt-prop-class attribute is set to the class attribute of the svg. The lt-prop-view-box attribute is set to the viewBox attribute of the svg. The lt-prop-id is set to the id attribute of the use tag.

```html
<lyte-svg lt-prop-path="images/svgexm.svg#feather"></lyte-svg>
```

---

## table

### table - overview

Table

Table is an UI component which is used to display data in rows and columns. Lyte table uses lyte-scrollbar for fixed header, fixed column and infinite scroll table (It will be applied internally by lyte table ).

Always use onscroll action or capturing phase events for listening scroll event because of scrollbar prevents bubbling phase of scroll event.

Strictly follow lyte-table's given structure or else it will break entire table.

Rowspan and colspan are not supported in lyte-table( display : table doesn't support rowspan and colspan ). Use normal table in these cases.

Reset scroll to zero before changing the contents of the table.

Dependencies
```javascript
<!-- individual components -->


<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-table.css"> </link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-scrollbar.css"> </link>


<!-- for table navigation -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/components/helpers/tableNavigation.js"> </script>

The js file is included in app.js
```
```javascript
<!-- individual components -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/dummy-app-init-for-non-lyte-app.js" ></script>
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/components/javascript/lyte-table.js" ></script>
<script type="text" src="node_modules/@zoho/lyte-ui-plugins/plugins/lyte-scrollbar.js"> </script>

<link rel="stylesheet" href="ui-components/theme/compiledCSS/default/ltr/lyte-ui-table.css"> </link>
```
Anatomy

The anatomy of a table is as shown below.

Simple structure


Let us see the structure of lyte-table

Tags Used
lyte-table - A wrapper for the table content
lyte-table-structure - It will act as table
lyte-thead - It will act as table header
lyte-th - It will act as table header cell
lyte-tbody - It will act as table body
lyte-tr - It will act as table row
lyte-td - it will act as table body cell
Semantic structure
```html
<lyte-table lt-prop-yield = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th>Item</lyte-th>
                    <lyte-th>Quantity</lyte-th>
                    <lyte-th>Price</lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                    <lyte-td>Notebook</lyte-td>
                    <lyte-td>2</lyte-td>
                    <lyte-td>5.00</lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td>Pen</lyte-td>
                    <lyte-td>5</lyte-td>
                    <lyte-td>$1.00</lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Table syntax - with and without yield
```javascript
<lyte-table lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body"> </lyte-table>
```
```javascript
<lyte-table lt-prop-yield = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                 <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Default table

This is default table. You can either pass data to lyte-table or render your own table by yield.

For non yielded table you need to pass lt-prop-header and lt-prop-content to lyte-table. Both should be in array of objects format.

lt-prop-header should contain text to be displayed in lyte-th element ( You need to pass the key name in lt-prop-header-label-key ) and the key which should be used for displaying text in table body cell data ( You need to pass the key name in lt-prop-body-label-key ).

In the following example header label key is mentioned as 'name'. So it will display value corresponding to 'name' key will be displayed in header cells. Body label key is mentioned as 'body'. So value mentioned in body key will be used as key for displaying data in table body cells.

```html
<lyte-table lt-prop-yield = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                 <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body"> </lyte-table>
```
```javascript
// in your component

data() {
    return {
        headerJSON : prop ( 'array' , { default : [
            { name : 'From' , body : 'place' }, // 'name' is headerLabelKey and 'body' is bodyLabelKey
            { name : 'No' , body : 'serial' },
            { name : 'From' , body : 'place' },
            { name : 'Name' , body : 'name' }
        ] } ),
        contentJSON : prop ( 'array' , { default : [
                { place : 'Agra' , serial : 1 , name : 'Taj mahal' },
                { place : 'Mysore' , serial : 2 , name : 'Mysore palace' },
                { place : 'Tanjore' , serial : 3 , name : 'Brihadheeswara temple' }
        ] } )
      }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Features

Have a look at the standout features of Lyte table.

Fixed column table

Whenever lyte-table-structure becomes scrollable horizontally you can prevent some columns from hiding by marking them as fixed column.
Set fixed attribute value of lyte-th as 'enable' to make that column as fixed column.

```html
<lyte-table lt-prop-yield = true style="width:500px">
     <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th fixed = {{list.fixed}}> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="width:500px"> </lyte-table>
```
```javascript
// in your component

data(){
    return {
        headerJSON : prop( 'array', { default : [
             {name : 'From' , body : 'place', fixed : 'enable'},
             {name : 'No' , body : 'serial'},
             {name : 'From' , body : 'place'},
             {name : 'Name', body : 'name', fixed : 'enable'}
        ]} ),
        contentJSON : prop( 'array' , { default : [
              { place : 'Agra', serial : 1, name : 'Taj mahal' },
              { place : 'Mysore', serial : 2, name : 'Mysore palace' },
              { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' } ]
      } )
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                  <lyte-td> </lyte-td>
                  <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                  <lyte-td> </lyte-td>
                  <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Column sorting

You can interchange columns if table is sortable. sortSelect class will be added for column being selected for sort.

For this header cells and body rows should be created by an array data. Same data should be provided to the lyte-table's lt-prop-header property.

```html
<lyte-table lt-prop-column-sortable = true lt-prop-header = {{headerJSON}} lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                     <%headerJSON.forEach(function(list , indexVal){ %>
                            <lyte-th> {{list.name}} </lyte-th>
                        <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-column-sortable = true lt-prop-header = {{headerJSON}} lt-prop-content = {{lbind(contentJSON)}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" lt-prop-border = true> </lyte-table>
```
```javascript
// in your component

data(){
    return {
        headerJSON : prop( 'array', { default : [
            {name : 'From' , body : 'place', fixed : 'enable'},
            {name : 'No' , body : 'serial'},
            {name : 'From' , body : 'place'},
            {name : 'Name', body : 'name', fixed : 'enable'}
        ]} ),
        contentJSON : prop( 'array' , { default : [
            { place : 'Agra', serial : 1, name : 'Taj mahal' },
            { place : 'Mysore', serial : 2, name : 'Mysore palace' },
            { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
        ] } )
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                 <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
             </lyte-thead>
             <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
             </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Resizable columns

You can resize your columns. Adjacent cells were adjusted depending upon selected cell's width. Cell resize will not affect table width. Provide resize attribute of lyte-th as 'enable' to make that cell resizable.

If resize is enabled, a resize handler will be created inside the lyte-th element.

In this type of resize while resizing changing table cell width won't affect the outer table's width. Based on the current cell's width adjacent cell width will be adjusted.

```html
<lyte-table lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th resize = 'enable'> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td>
                                {{list[header.body]}}
                                \\ use some helpers
                            </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-header = {{lbind(headerJSON)}} lt-prop-content = {{lbind(contentJSON)}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" lt-prop-border = true> </lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
  </template>
</lyte-table>
```

In this type of resize changing a column width won't affect adjacent column 's width. But it will increase / decrease table's width.

Provide lt-prop-dual-resize as true to lyte-table for enable this type of resize.

```html
<lyte-table lt-prop-yield = true lt-prop-border = true lt-prop-dual-resize=true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th resize = "enable"> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td>
                                {{list[header.body]}}
                                \\ use some helpers
                            </lyte-td>
                        <% }) %>
                     </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-border = true lt-prop-body-label-key = "body" lt-prop-dual-resize=true> </lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
  </template>
</lyte-table>
```
Table resize

You can resize entire table in both direction. If resize is enabled respective resize handlers will be created inside lyte-table-structure element.

```html
<lyte-table lt-prop-resize='{"horizontal": true, "vertical" : true}' lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-resize='{"horizontal": true, "vertical" : true}' lt-prop-header = {{lbind(headerJSON)}} lt-prop-content = {{lbind(contentJSON)}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" lt-prop-border = true> </lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
  </template>
</lyte-table>
```
Table navigation

This will allow to navigate through table cells through keyboard shortcuts. Set some suitable tab index for all the cells.

```html
<lyte-table lt-prop-navigation = true lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th tabindex = 0> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td tabindex = 0> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
Sticky table

Sticky table property creates fixed columns through position sticky. It internally uses intersection observer for fixing and unfixing columns. Currently this is not supported for infinite scroll table.

```html
<lyte-table lt-prop-sticky-table = true lt-prop-prevent-scrollbar = true lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
Full column interchange

This type of column sort moves entire column instead of single header cell. Use this with sticky table.

```html
<lyte-table lt-prop-sticky-table = true lt-prop-column-sortable = true lt-prop-prevent-table-modify = false lt-prop-prevent-scrollbar = true lt-prop-yield = true lt-prop-border = true>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% contentJSON.forEach(function(list , indexVal) { %>
                    <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list[header.body]}} </lyte-td>
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , body : 'place', resize : 'enable'},
          {name : 'No' , body : 'serial'},
          {name : 'From' , body : 'place'},
          {name : 'Name', body : 'name', resize : 'enable'}
      ]} ),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}
```
Row & Column Span

You can't implement rowspan and colspan directly in lyte-table. In display : table rowspan and colspan are not supported.

Lyte-table introduces a new feature named tags support( from 3.91.1 ). In this you can render any custom tags for rendering contents. With this you can render actual td insteadof lyte-td.

When td is rendered instead of lyte-td, render this inside a template. do not render it directly. It is not supported in non yieled table. This support is only added in sticky table

```html
<lyte-table lt-prop-sticky-table = true lt-prop-yield = true>
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure>
          <lyte-thead>
            <lyte-tr>
              <lyte-th>No.</lyte-th>
              <lyte-th>Name</lyte-th>
            </lyte-tr>
          </lyte-thead>
          <lyte-tbody>
            <lyte-tr>
              <template lyte-if = true>
                <td colspan="2" style="font-weight: bold;text-align: center;">Lyte</td>
                <td style="display: none;"></td>
              </template>
            </lyte-tr>
            <lyte-tr>
               <template lyte-if = true>
                  <td>1</td>
                  <td>Christopher</td>
               </template>
            </lyte-tr>
             <lyte-tr>
               <template lyte-if = true>
                  <td>2</td>
                  <td>Iswarya</td>
               </template>
            </lyte-tr>
             <lyte-tr>
              <template lyte-if = true>
                <td colspan="2" style="font-weight: bold;text-align: center;">Lyte UI</td>
                <td style="display: none;"></td>
              </template>
            </lyte-tr>
            <lyte-tr>
               <template lyte-if = true>
                  <td>1</td>
                  <td>Anantha</td>
               </template>
            </lyte-tr>
             <lyte-tr>
               <template lyte-if = true>
                  <td>2</td>
                  <td>Suren</td>
               </template>
            </lyte-tr>
             <lyte-tr>
              <template lyte-if = true>
                <td colspan="2" style="font-weight: bold;text-align: center;">CRM Client</td>
                <td style="display: none;"></td>
              </template>
            </lyte-tr>
            <lyte-tr>
               <template lyte-if = true>
                  <td>1</td>
                  <td>Anuja</td>
               </template>
            </lyte-tr>
             <lyte-tr>
               <template lyte-if = true>
                  <td>2</td>
                  <td>Silambarasan</td>
               </template>
            </lyte-tr>
          </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
No.	Name
Lyte
1	Christopher
2	Iswarya
Lyte UI
1	Anantha
2	Suren
CRM Client
1	Anuja
2	Silambarasan
Infinite scroll table

Infinite scroll table provides virtual endless scrolling to the user. Initially minimum number of rows are rendered in the dom( row count is configurable ) and the same set of rows are used for displaying next set of data. So whenever scroll happens it will just update the data for each rows. It won't render the rows again.

Note : Lyte table maitains same rows by controlling ltPropData. ltPropData is passed from the lyte-table to yield. ltPropData represents the current visible rows. Bind your data to lt-prop-content. Use ltPropData for iterating rows in table yield.

Each row data will be wrapped in an object. You can access row data by using 'body' key. ltPropData will look like this [ { body : actual row data }, { body : actual row data },.... ]

Your body rows should be iterated only with ltPropData. Don't introduce any other template loops for iterating rows.

Note : Dynamic row heights are not supported in lyte-table's Infinite scroll. So all rows should be rendered with same height( If not it will break the table UI ).

When all the data are displayed it will trigger scrollEnd callback. You can return additional data in that callback ( or use setValue utility function ).

Any modification done in ltPropContent will reset the table.

If you want to use some static rows along with infinite scroll table construct your table with lytePreventInfiniteScroll class. Use lyteHidden class for displaying and hiding those filters

```html
<lyte-table lt-prop-border="true" lt-prop-infinite-scroll = true lt-prop-yield = true lt-prop-content = {{contentJSON}} scroll-end = {{method('someMethod')}}>
    <template is = 'registerYield' yield-name = 'yield'>
        <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <%headerJSON.forEach(function(list , indexVal){ %>
                        <lyte-th fixed = {{list.fixed}}> {{list.name}} </lyte-th>
                    <% }) %>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody>
                <% ltPropData.forEach(function(list , indexVal) { %>
                     <lyte-tr>
                        <% headerJSON.forEach(function(header , indexVal){ %>
                            <lyte-td> {{list.body[header.data]}} </lyte-td>
                            \\use some helpers
                        <% }) %>
                    </lyte-tr>
                <% }) %>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
```html
<lyte-table lt-prop-infinite-scroll = true lt-prop-header = {{headerJSON}} lt-prop-border="true" lt-prop-content = {{lbind(contentJSON)}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "data" scroll-end = {{method('someMethod')}}> </lyte-table>
```
```javascript
// in your component

data(){
    return {
      headerJSON : prop( 'array', { default : [
          {name : 'From' , data : 'place'},
          {name : 'No' , data : 'serial'},
          {name : 'From' , data : 'place'},
          {name : 'Name', data : 'name'}
      ]}),
      contentJSON : prop( 'array' , { default : [
          { place : 'Agra', serial : 1, name : 'Taj mahal' },
          { place : 'Mysore', serial : 2, name : 'Mysore palace' },
          { place : 'Tanjore', serial : 3, name : 'Brihadheeswara temple' }
      ] } )
    }
}

static methods() {
    return{
      someMethod : function(){
        return [some row data]
      }
    }
}
```
```html
<lyte-table>
    <template is = "registerYield" yield-name = "yield">
         <lyte-table-structure>
            <lyte-thead>
                <lyte-tr>
                    <lyte-th> </lyte-th>
                    <lyte-th> </lyte-th>
                </lyte-tr>
             </lyte-thead>
             <lyte-tbody>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
                <lyte-tr>
                    <lyte-td> </lyte-td>
                    <lyte-td> </lyte-td>
                </lyte-tr>
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Features of Infinite scroll table
Fixed column table

Row sorting

Enabling Accessibilty

Lyte table will set basic role attributes to table elements if ltPropRole is provided. You can use yielded table to set suitable roles and descriptions from your side.

Check the below code snippet

```html
<lyte-table lt-prop-role = "table" lt-prop-header-label-key = "some key" lt-prop-body-label-key = "some key" lt-prop-header = {{someData}} lt-prop-content = {{someBodyData}}></lyte-table>
```
```html
<p id = "someid">Some example table for showing aria setup</p>

<lyte-table lt-prop-yield = true aria-describedby = "someid">
    <template is = "registerYield" yield-name = "yield">
        <lyte-table-structure role = "table" aria-rowcount = {{rowData.length}} aria-colcount = {{colData.length}}>
            <lyte-thead role = "rowgroup">
                <lyte-tr role = "row">
                    <%colData.forEach( function( item, index ){%>
                        <lyte-th aria-colindex = {{index}} role = "columnheader">Some header to display</lyte-th>
                    <%})%>
                </lyte-tr>
            </lyte-thead>
            <lyte-tbody role = "rowgroup">

                <!-- For normal table -->

                <%rowData.forEach( function( row, rowIndex ){%>
                    <lyte-tr role = "row" aria-rowindex = {{rowIndex}}>
                        <%colData.forEach( function( item, index ){%>
                            <lyte-td aria-colindex = {{index}} role = "column">Some data to display</lyte-td>
                        <%})%>
                    </lyte-tr>
                <%})%>

                <!-- For normal table -->

                <!-- For infinite scroll table -->

                <%ltPropData.forEach( function( row ){%>
                    <lyte-tr role = "row" aria-rowindex = {{row.index}}>
                        <%colData.forEach( function( item, index ){%>
                            <lyte-td aria-colindex = {{index}} role = "column">Some data to display</lyte-td>
                        <%})%>
                    </lyte-tr>
                <%})%>

                <!-- For infinite scroll table -->
            </lyte-tbody>
        </lyte-table-structure>
    </template>
</lyte-table>
```
Properties
Name	Datatype	Default value	Description	Example
lt-prop-header	[]	-	Array of object which contains the data with key 'id','class', 'fixed','resize' for each header cells.	http://slyte/1.0.0/uiComponents/table/api#header
lt-prop-header-label-key	string	-	It is the key which will be the header's(lyte-th) display value in each 'header' objects.	http://slyte/1.0.0/uiComponents/table/api#header-label-key
lt-prop-body-label-key	String	-	Key which contains the main display value key in 'content' array.	http://slyte/1.0.0/uiComponents/table/api#body-label-key
lt-prop-content	Array	[]	Array of object which contains the data with key 'id','class'for each body rows.	http://slyte/1.0.0/uiComponents/table/api#propContent
lt-prop-border	boolean	false	It sets outer border for lyte-table.	
lt-prop-resize	Object	{'horizontal' : false, 'vertical' : false}	It defines the table resize directions.	
lt-prop-yield	boolean	false	To render your own table use yield.	
lt-prop-infinite-scroll	boolean	false	It enables the infinite scroll table.	
lt-prop-column-sortable	boolean	false	It allows to interchange columns.	
lt-prop-fixed-column-class	String		This class will be added when a column is fixed while scrolling.	
lt-prop-scroll	Object	{'horizontal':true, 'vertical' : true}	Setting true prevents the default scroll behaviour in the given directions and allows fixed header support( vertical ) and fixed column support( horizontal ) in table.	
lt-prop-scrollbar-option	Object	{ } (empty object)	Properties of scrollbar added.	
lt-prop-cell-height	String	20px	It is for non - yielded type table with infinite-scroll. Each row will be in given height.	
lt-prop-content-length	Number	lt-prop-content array's length	It is for infinite-scroll table.	
lt-prop-prevent-scrollbar	Boolean	false	If this property sets true, scroll bar plugin will not applied to lyte-table by default.	
lt-prop-dual-resize	Boolean	false	If this is enabled, resizing cells also affect entire table's width.	
lt-prop-sticky-table	Boolean	false	This will render a new version of table which uses sticky positioning and intersection observer for fixed header and fixed columns.	
lt-prop-scroll-step	Number	2	Incremental / decremental value of scroll during column sorting ( in px ) for sticky table.	
lt-prop-prevent-table-modify	Boolean	true	It will construct a external div for column sorting.	
lt-prop-sort-dummy-column-class	String		Given class will be added to fake div created.	
lt-prop-role	String		If role provided for table it will be set to lyte-table-structure element.	
lt-prop-navigation	Boolean	false	It will enable table keyboard navigation.	
lt-prop-reset	Boolean	false	It will reset the infinite scroll table to its initial position.	
lt-prop-tags	Object	{ table : 'lyte-table-structure', thead : 'lyte-thead', tbody : 'lyte-tbody', tr : 'lyte-tr', th : 'lyte-th', td : 'lyte-td' }	You can render other tags instead of lyte-table's default tags inside lyte table.	
lt-prop-fix-resize-cursor	Boolean	false	While resizing the column, resize handler will move based on the cursor's current position.	
lt-prop-sortable	Boolean	false	Enable row sorting for infinite-scroll table.	
lt-prop-role	String		If role provided for table it will be set to lyte-table-structure element.	
lt-prop-containment	String	false	The sorting will be restricted inside the containment element.	
lt-prop-resize-aria	Object	{ 'role' : 'button'', 'aria-live' : 'assertive' }	Same will be added to the resize handlers of the cells.	
lt-prop-cell-aria	Object	{ 'aria-live' : 'assertive' }	Same will be set to the header cells.	
Methods
Name	Description
scroll-end	This method is associated with infinite-scroll table.
before-render	This method is invoked before rendering the component.
after-render	This method is invoked after rendering component.
on-before-select	This method is invoked before selecting a column for sorting.
on-select	This method is invoked after selecting a column for sorting.
on-before-drag	This methods is invoked before dragging a selected column for sorting
on-drag	This methods is invoked on dragging a selected column for sorting.
on-before-inter-change	This methods is invoked before column interchange in column sorting.
on-inter-change	This methods is invoked after column interchange in column sorting.
on-before-drop	This method is invoked before droping a column.
on-drop	This method is invoked after droping a column.
on-release	This method is invoked after releasing a column without moving.
on-resize-end	This method is invoked after resizing column.
on-un-fix	This method is invoked after a column is removed from fixing.
on-fix	This method is invoked after a column is fixed (for sticky table).
on-row-select	This method is invoked on row select in an infinte-table sorting.
on-before-row-drop	This method is invoked before row drop in an infinte-table sorting.
on-row-drop	This method is invoked after row drop in an infinte-table sorting.
on-row-drag-start	This method is invoked on initial row drag in an infinte-table sorting.

### table - api

Properties

All properties should be prefixed with lt-prop.

header
DataType	:	Array
Default	:	[ ] (empty array)
Description	:	Array of object which contains the data for each header cells.
header ==> id
DataType	:	String
Default	:	-
Description	:	It will set id for each header cells.
header ==> class
DataType	:	String
Default	:	-
Description	:	It will set class for each header cells.
header ==> fixed
DataType	:	String
Default	:	disabled
Description	:	To fix a particular column. It will be marked as fixed column cell.
header ==> resize
DataType	:	String
Default	:	disabled
Description	:	It allows to resize individual columns.
header-label-key
DataType	:	String
Default	:	-
Description	:	It is the key which will be the header's(lyte-th) display value in each 'header' objects.
body-label-key
DataType	:	String
Default	:	-
Description	:	Key which contains the main display value key in 'content' array.
content
DataType	:	Array
Default	:	[ ] (empty array)
Description	:	Array of object which contains the data for each body rows.
content ==> id
DataType	:	String
Default	:	-
Description	:	It will set id for table body rows.
content ==> class
DataType	:	String
Default	:	-
Description	:	It will set class for table body rows.
border
DataType	:	Boolean
Default	:	false
Description	:	It sets outer border for lyte-table.
resize
DataType	:	Object
Default	:	{"horizontal" : false, "vertical" : false}
Description	:	It defines the table resize directions
yield
DataType	:	Boolean
Default	:	false
Description	:	To render your own table use yield.
infinite-scroll
DataType	:	Boolean
Default	:	false
Description	:	It enables the infinite scroll table. It will render only minimum number of rows. You should bind your table data to lyte-table.
column-sortable
DataType	:	Boolean
Default	:	false
Description	:	It allows to interchange columns. For that you should render your table from array and bind that data to lyte-table.
fixed-column-class
DataType	:	String
Default	:	-
Description	:	This class will be added when a column is fixed while scrolling.
scroll
DataType	:	Object
Default	:	{"horizontal":true, "vertical" : true}
Description	:	Setting true prevents the default scroll behaviour in the given directions and allows fixed header support( vertical ) and fixed column support( horizontal ) in table.
scrollbar-option
DataType	:	Object
Default	:	{ } (empty object)
Description	:	Properties of scrollbar added. Refer 'scrollbar plugin.'
cell-height
DataType	:	String
Default	:	20px
Description	:	It is for non - yielded type table with infinite-scroll. Each row will be in given height.
content-length
DataType	:	Number
Default	:	lt-prop-content array's length
Description	:	It is for infinite-scroll table. Given number of rows will be generated for displaying all the data.
prevent-scrollbar
DataType	:	Boolean
Default	:	false
Description	:	If this property sets true, scroll bar plugin will not applied to lyte-table by default.
dual-resize
DataType	:	Boolean
Default	:	false
Description	:	If this is enabled, resizing cells also affect entire table's width.
sticky-table
DataType	:	Boolean
Default	:	false
Description	:	This will render a new version of table which uses sticky positioning and intersection observer for fixed header and fixed columns. Only supported for( chrome 51+, Edge 15+, Firefox 60+, safari 13+ )
scroll-step
DataType	:	Number
Default	:	2
Description	:	Incremental / decremental value of scroll during column sorting ( in px ) for sticky table.
prevent-table-modify
DataType	:	Boolean
Default	:	true
Description	:	It will construct a external div for column sorting. If it is false, entire cells and header will be moved on column sorting.
sort-dummy-column-class
DataType	:	String
Default	:	-
Description	:	Given class will be added to fake div created.
role
DataType	:	String
Default	:	''
Description	:	If role provided for table it will be set to lyte-table-structure element. Roles for the other table element will also be set.
navigation
DataType	:	Boolean
Default	:	false
Description	:	It will enable table keyboard navigation.
reset
DataType	:	Boolean
Default	:	false
Description	:	It will reset the infinite scroll table to its initial position.
tags
DataType	:	Object
Default	:	{ table : "lyte-table-structure", thead : "lyte-thead", tbody : "lyte-tbody", tr : "lyte-tr", th : "lyte-th", td : "lyte-td" }
Description	:	You can render other tags instead of lyte-table's default tags inside lyte table. This will be helpfull for achieving fixed column in row/colspanned tables.
fix-resize-cursor
DataType	:	Boolean
Default	:	false
Description	:	While resizing the column, resize handler will move based on the cursor's current position.
sortable
DataType	:	Boolean
Default	:	false
Description	:	Enable row sorting for infinite-scroll table.
containment
DataType	:	String
Default	:	false
Description	:	The sorting will be restricted inside the containment element.
resize-aria
DataType	:	Object
Default	:	{ "role" : "button", "aria-live" : "assertive" }
Description	:	Same will be added to the resize handlers of the cells.
cell-aria
DataType	:	Object
Default	:	{ "aria-live" : "assertive" }
Description	:	Same will be set to the header cells. This will be used in column interchange.
Methods

You can provide the methods to lyte-table either via script or HTML.

scroll-end
Description	:	This method is associated with infinite-scroll table. whenever the table displays all of its data it will trigger this callback. You can return data for one or more rows in this callback.
ReturnValue	:	Here you can return data for one or more rows (Object or array of objects)
before-render
Description	:	This method is invoked before rendering the component
after-render
Description	:	This method is invoked after rendering component
on-before-select
Description	:	This method is invoked before selecting a column for sorting
ReturnValue	:	If this method returns false, particular column will not be selected
on-select
Description	:	This method is invoked after selecting a column for sorting.
on-before-drag
Description	:	This methods is invoked before dragging a selected column for sorting.
ReturnValue	:	If this method returns false, particular column will not be moved.
on-drag
Description	:	This methods is invoked on dragging a selected column for sorting
on-before-inter-change
Description	:	This methods is invoked before column interchange in column sorting
ReturnValue	:	If this method returns false, particular column will not be interchanged
on-inter-change
Description	:	This methods is invoked after column interchange in column sorting
on-before-drop
Description	:	This method is invoked before droping a column.
ReturnValue	:	If this method returns false column will not be dropped into new position.
on-drop
Description	:	This method is invoked after droping a column.
on-release
Description	:	This method is invoked after releasing a column without moving.
on-resize-end
Description	:	This method is invoked after resizing column
on-un-fix
Description	:	This method is invoked after a column is removed from fixing( for sticky table )
on-fix
Description	:	This method is invoked after a column is fixed( for sticky table )
on-row-select
Description	:	This method is invoked on row select in an infinte-table sorting.
on-before-row-drop
Description	:	This method is invoked before row drop in an infinte-table sorting.
on-row-drop
Description	:	This method is invoked after row drop in an infinte-table sorting.
on-row-drag-start
Description	:	This method is invoked on initial row drag in an infinte-table sorting.
Functions

You can call this function from anywhere in JS.

setValue
Description	:	You can call this function with object or array of objects to lyte-table when it reaches its scroll end.
scrollTable
Description	:	To set required scrollLeft and scrollTop to the table use this function.
toggleRows
Description	:	To show and hide static rows( Ex. filter rows ) in infinite scroll table.
removeRow
Description	:	This function may called with the following arguments. * Row data index or row DOM element * number of rows to be removed ( optional ) * true ( To remove the row from the table data ) * false ( To remove the row from the table DOM )
insertRow
Description	:	To insert a row in Infinite scroll table without changing its scroll positions.
scrollToRecord
Description	:	It will scroll to the given row index in infinite scroll.
updateCollapse
Description	:	This will refresh collapsed column styles.
Yields

You can render your own drop items by using yield.

yield( description )
Description	:	All the elements given inside the yield template will be rendered as given instead of default table.

---

## texteditor

### texteditor - overview

Texteditor

Text editor is a Lyte rendered component used to compose and edit formatted texts in client. It will provide output in JSON or HTML format. Same output can be given back to the texteditor for edit cases.
Texteditor won't generate icon panel. It can be configured by using lyte-editorpanel component.

Step 1:Do the following changes in package.json
```javascript
"addons" : [ "@zoho/lyte-ui-editor" ],
"dependencies": {
  "@zoho/lyte-ui-editor": "2.0.0"
    "@zoho/lyte-ui-editor" : "http://build/zoho/lyte-ui-editor/webhost/master/Feb_27_2024/zoho-lyte-ui-editor-1.9.2.tgz" // webhost build version
 }

 // then
  npm install --registry http://cm-npmregistry
```

Step 2: Install the texteditor as addons. To do so execute the following command.
lyte install <package> <options> --registry

Here is an example for you

npm install @zoho/lyte-ui-editor@2.0.0 --registry http://cm-npmregistry

By default, on executing the above command, you can find texteditor as lookups, being added in app.js.

Step 3: Include the following CSS dependencies
```html
<!-- ui-component css files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-popover.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-checkbox.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-menu.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-colorpicker.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-resize.css"></link>

                           <!-- texteditor css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-editor/dist/theme/compiledCSS/default/ltr/lyte-ui-editorpanel.css"></link>
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-editor/dist/theme/compiledCSS/default/ltr/lyte-ui-texteditor.css"></link>
```

The anatomy of a texteditor is as shown below.

Tags of the texteditor.

lyte-paragraph = Paragraph
lyte-word = word
lyte-overlay = text selection
lyte-handle = Handlers added to text selection overlay in touch machines
lyte-find = find and replace overlay element

Classes used in texteditor

lyteTextSelected = It will be added to the editor when a text is selected in editor contents
lyteEditorAnchor = It will be added for anchor words
lyteCurrentNode = It will be added for current active word
lyteEditorFirst = It will be added for first overlay element
lyteEditorLast = It will be added for last overlay element
lyteEditorFindSeleced = It will be added for current active find element
Data structure

Each element in the texteditor component will be maintained as data. Basic data structure of element is given below.
```javascript
{
   text : 'some_text', // Text content of the element,
   attr : { some_attr : 'some_attr_value' }, // Special attributes of the element
   style : { fontWeight : "bold" }, // style value of the element in object format
   classList : [ "tabClass" ], // classlist of the element in array format,
   data : [], // Data of all the children of the element,
   details : {}, // Special data about the element
   tag : "lyte-paragraph", // tag of the element
   randomId : "some_random_id" // elements holdling list of paragraphs
}
```

Keyboard shortcuts

Keyboard shortcuts for various operations can be configured in texteditor component. Keydown event for given shortcuts will be prevented.
Shortcuts should be registed as object format. Each key value should be the corresponding keycode for the keyboard operation.
Each shortcut will be toggle its operation in editor elements based on its selection General structure of shortcut

```javascript
66 : [  // keycode value for 'B' key
    {
        value : 'fontWeight',
        ctrl : true,
        scope : "Word",
        css : 'bold'
    }
]
```
Key Name	Value For The Key	Description
value	String. Ex. 'fontWeight'	In the particular operation its going to change fontWeight property of texteditor elements
css	String. Ex. 'bold'	value to be set during the particular operation. If its not provided 'value' will be added as class
ctrl	Boolean.	To perform the operation ctrl key needs to be pressed.( In mac machine it will be considered as meta key )
shift	Boolean.	To perform the operation shift key needs to be pressed
alt	Boolean.	To perform the operation alt key needs to be pressed
any	Boolean.	It won't consider ctrl, shift, alt keys for performing the operation
scope	String. Ex. "Word/Para"	Scope of the particular shortcut. Changes will be applied for either paragraph element or word element

You can register multiple shortcuts for single keycode. First matched operation will be performed for that particular keycode. Default shortcut of lyte-texteditor is given below.

```html
<lyte-texteditor lt-prop-shortcuts = {{shortCuts}}></lyte-texteditor>
```
```javascript
// shortCuts in data
 {
    66 : [  // B
        { value : 'fontWeight', ctrl : true, scope : "Word", css : 'bold' }
    ],
    73 : [  // I
        { value : "fontStyle", ctrl : true, scope : "Word", css : 'italic' }
    ],
    85 : [                    // U
        { value : "textDecoration", ctrl : true, scope : "Word", css : 'underline' },
        { value : "list", ctrl : true, shift : true, scope : "Para" }
    ],
    79 : [
          { value : "ordered", ctrl : true, shift : true, scope : "Para" }
    ],
    187 : [
        { value : "verticalAlign", ctrl : true, scope : "Word", css : "sub" },
        { value : 'verticalAlign', shift : true, ctrl : true, scope : "Word", css : 'super' }
    ],
    90 : [                      // Z
        { value : "undo", ctrl : true },
        { value : "redo", ctrl : true, shift : true }
    ],
    53 : [ // 5 --> for paragraph
        { value : "lyteEditorBlockquote", alt : true, ctrl : true, scope : "Para" }
    ],
    75 : [
        { value : "link", ctrl : true } // K
    ],
    13 : [
         { value : "openAnchor", alt : true },
         { value : "splitPara", any : true }
    ],
    8 : [  // Backspace
        { value : "backspaceLine", ctrl : true, scope : "Word" },
        { value : "backspaceWord", alt : true, scope : "Word" },
        { value : "backspace", scope : "Word" }
    ],
    46 : [  // Delete
      { value : "deleteLine", ctrl : true, scope : "Word" },
      { value : "deleteWord", alt : true, scope : "Word" },
      { value : "delete", scope : "Word" }
    ],
    9 : [ // tab
        { value : "tab", any : true }
    ],
    65 : [ // A
      { value : "selectAll", ctrl : true },
      { value : "toggleUpperCase", ctrl : true, shift : true }
    ],
    67 : [ // C
      { value : "toggleCaptilize", ctrl : true, shift : true }
    ],
    37 : [ // left
      { value : "moveLeft", any : true }
    ],
    39 : [ // right
      { value : "moveRight", any : true }
    ],
    38 : [ // top
      { value : "moveTop", any : true }
    ],
    40 : [ // bottom
      { value : "moveBottom", any : true }
    ],
    76 : [ // L
      { value : "AlignLeft", ctrl : true, shift : true },
      { value : "toggleLowerCase", ctrl : true }
    ],
    74 : [ // J
      { value : "AlignJustify", ctrl : true, shift : true }
    ],
    82 : [ // R
      { value : "alignRight", ctrl : true, shift : true }
    ],
    70 : [ // E
      { value : "alignCenter", ctrl : true, shift : true }
    ],
    188 : [ //
      { value : "fontDecrease", shift : true, ctrl : true }
    ],
    190 : [ // >
      { value : "fontIncrease", shift : true, ctrl : true }
    ],
    219 : [
      { value : "textIndentDecrease", ctrl : true }
    ],
    221 : [
      { value : 'textIndentIncrease', ctrl : true }
    ]
}
```
Undo redo queue

Lyte texteditor maintains all the modifications done in the editor area in a queue. Same queue will be used for reverting modifications done in the editor.
It will execute onUndoRedoQueueUpdate method on every queue modifications. You can use this callback for doing external operations
It will be called on manual content changes, undo operation, redo operations, queue clear.
Types of queue values.
Queue operations will indicate exact modification of properties and element from top level element
```javascript
Position updating. scope - words

{
   type : "meta",
   operations : "arr:0.data:arr:0", // exact element modified. Ex. topelement.children[ 0 ].children[ 0 ]
   value : '{"index":{"wordIndex":0,"position":0}}'  // stringified_value
}
```
```javascript
Text content change. scope - words

{
   type : "update",
   operations : "arr:0.data:arr:0.text", // exact element modified. Ex. topelement.children[ 0 ].children[ 0 ]
   value : '{"oldValue":"Po","newValue":"Pon"}'  // stringified_value
}
```
```javascript
Paragraph creation. scope - paragraph
{
   type : "paragraphCreate",
   operations : "arr:0", // exact element modified. Ex. topelement.children[ 0 ]
   value : "{...}"  // stringified_value of paragraph data
}
```
```javascript
Paragraph removal. scope - paragraph
{
   type : "paragraphRemove",
   operations : "arr:0", // exact element modified. Ex. topelement.children[ 0 ]
   value : "{...}"  // stringified_value of paragraph data
}
```
```javascript
Word creation. scope - word
{
   type : "wordInsert",
   operations : "arr:0.data:arr:0", // exact element modified. Ex. topelement.children[ 0 ].children[ 0 ]
   value : "{...}"  // stringified_value of word data
}
```
```javascript
Word removal. scope - paragraph
{
   type : "wordDelete",
   operations : "arr:0.data:arr:0", // exact element modified. Ex. topelement.children[ 0 ].children[ 0 ]
   value : "{...}"  // stringified_value of word data
}
```
```javascript
Style change. scope - any element
{
   type : "styleSet",
   operations : "arr:0.data:arr:0.style.display", // exact element modified. Ex. topelement.children[ 0 ].children[ 0 ]
   value : '{"oldValue" : "", newValue : "none" }'  // stringified_value
}
```
```javascript
li elements tab order changes. scope - paragraph
{
   type : "tablevelUpdate",
   operations : "arr:0.data.details.tab.order", // property modified
   value : '{"oldValue":3,"newValue":2}'  // stringified_value
}
```
```javascript
class add. scope - any
{
   type : "addClass",
   operations : "arr:0", // exact element modified. Ex. topelement.children[ 0 ]
   value : "class_value"
}
```
```javascript
class removal. scope - any
{
   type : "removeClass",
   operations : "arr:0", // exact element modified. Ex. topelement.children[ 0 ]
   value : "class_value"
}
```
```javascript
attribute modification. scope - any
{
   type : "attribute",
   operations : "arr:0.attr.tablevel", // exact element modified. Ex. topelement.children[ 0 ]
   value : '{"oldValue" : 1,"newValue": 2}' // stringified value
}
```
```javascript
details modification. scope - any
{
   type : "properties",
   operations : "arr:0.details.tab", // exact element modified. Ex. topelement.children[ 0 ]
   value : '{"oldValue":{"name":"disc","lower":false,"conversionName":"disc","suffix":"","type":"UL","order":2}}' // stringified value
}
```
```javascript
row creation. scope - row
{
   type : "rowCreate",
   operations : "arr:1.data.arr:0.data.arr:0.data.arr:1.data.arr:2", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ].children[ 0 ].children[ 1 ].children[ 2 ]
   value : '{"data":[{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"174px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"td","randomId":"LyteEditor4PB0N3WXNL70HQ8LMUTC"},{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"174px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"td","randomId":"LyteEditor6R0DM9L1SMWPPWLTQ6J8"}],"style":{},"details":{},"tag":"tr"}' // stringified row data
}
```
```javascript
row delete. scope - row
{
   type : "rowDelete",
   operations : "arr:1.data.arr:0.data.arr:0.data.arr:1.data.arr:2", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ].children[ 0 ].children[ 1 ].children[ 2 ]
   value : '{"data":[{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"174px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"td","randomId":"LyteEditor4PB0N3WXNL70HQ8LMUTC"},{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"174px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"td","randomId":"LyteEditor6R0DM9L1SMWPPWLTQ6J8"}],"style":{},"details":{},"tag":"tr"}' // stringified row data
}
```
```javascript
cell insert. scope - cell
{
   type : "cellInsert",
   operations : "arr:1.data.arr:0.data.arr:0.data.arr:1.data.arr:2.data.arr:1", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ].children[ 0 ].children[ 1 ].children[ 2 ].children[ 1 ]
   value : '{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"121px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"th","randomId":"LyteEditorE156XOCPIM032G5OOMU8"}' // stringified cell data
}
```
```javascript
cell delete. scope - cell
{
   type : "cellDelete",
   operations : "arr:1.data.arr:0.data.arr:0.data.arr:1.data.arr:2.data.arr:1", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ].children[ 0 ].children[ 1 ].children[ 2 ].children[ 1 ]
   value : '{"data":[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces"},"classList":[],"text":"","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}],"style":{"width":"121px","overflow":"hidden","position":"relative","minWidth":"50px","border":"1px solid black","padding":"2px","whiteSpace":"pre-line"},"details":{"rowSpan":1,"colSpan":1},"tag":"th","randomId":"LyteEditorE156XOCPIM032G5OOMU8"}' // stringified cell data
}
```
```javascript
rowspan, colspan set. scope - cell
{
   type : "spanSet",
   operations : "arr:1.data.arr:0.data.arr:0.data.arr:1.data.arr:1.data.arr:1.details.colSpan", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ].children[ 0 ].children[ 1 ].children[ 2 ].children[ 1 ]
   value : '{"oldValue":1,"newValue":2}' // stringified value
}
```
```javascript
mention. scope - word
{
   type : "mention",
   operations : "arr:0.data.arr:0.details", // exact element modified. Ex. topelement.children[ 1 ].children[ 0 ]
   value : '{"name":"Pon karthikeyan","id":"5216"}' // stringified value
}
```

UL / OL list

You can configure different ul / ol types in lyte-texteditor. It will affect paragraphs
```javascript
// For custom ( name : "custom" ) type icons background image will be converted to base 64 image url and set as list-style-type icons

[
    {
      name : "disc", // This will be set as tabValue attribute of paragraph
      lower : false,
      conversionName : "disc", // It will be set as 'list-style-type' style value of ul element
      suffix : "",
      type : "UL"
    },
    {
      name : "circle",
      lower : false,
      conversionName : "circle",
      suffix : "",
      type : "UL"
    },
    {
      name : "square",
      lower : false,
      conversionName : "square",
      suffix : "",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulVolume",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulSquareOutline",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulDisclosureClosed",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulLineBall",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulDiamond",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulTick",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulFingerPointer",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulPencil",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulOutlineStar",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulFilledHeart",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulRightArrow",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulBallThreeDots",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulPlus",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulRightPointer",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulCrossPlus",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulFolder",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulClock",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulSideCube",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulSmiley",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulGlobe",
      type : "UL"
    },
    {
      name : "custom",
      conversionName : "ulDocument",
      type : "UL"
    }
]
```
```javascript
[
    {
      name : "roman",
      lower : true,
      conversionName : "lower-roman",  // It will be set as 'list-style-type' style value of ol element
      suffix : ".",
      type : "OL"
    },
    {
      name : "roman",
      lower : false,
      conversionName : "upper-roman",
      suffix : ".",
      type : "OL"
    },
    {
      name : "number",
      lower : false,
      conversionName : "decimal",
      suffix : ".",
      type : "OL"
    },
    {
      name : "zeronumber",
      lower : false,
      conversionName : "decimal-leading-zero",
      suffix : ".",
      type : "OL"
    },
    {
      name : "alphabet",
      lower : true,
      conversionName : "lower-alpha",
      suffix : ".",
      type : "OL"
    },
    {
      name : "alphabet",
      lower : false,
      conversionName : "upper-alpha",
      suffix : ".",
      type : "OL"
    }
]
```

Default texteditor

A texteditor can be rendered with empty text or predefined text contents. Text editor creates custom elements for rendering its contents instead of conventional contenteditable elements.
By default properties like bold, italic are applied via css instead of using <b>,<i>,<strong> tags.
In this example existing HTML / JSON content is rendered by using texteditor.
User mention will be looks like this in output @[<name>:<id>]

```html
<lyte-texteditor></lyte-texteditor>
```
```javascript
var str = '<h1 style="display:block;max-width:100%;min-height:14px;position:relative;box-sizing:border-box;padding:0;margin:0;line-height:1.5;overflow-wrap:break-word;text-align:center;"><span style="">Gadi Sagar Lake</span></h1><p style="display:block;max-width:100%;min-height:14px;position:relative;box-sizing:border-box;padding:0;margin:0;line-height:1.5;overflow-wrap:break-word;"><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">One of the most well-known tourist attractions in</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;"> Jaisalmer,</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);"> Gadi Sagar Lake originally was a man-made reservoir that was founded to provide a source of water to the people of Jaisalmer. Founded in </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">1367</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);"> by the first ruler of the city </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">Maharawal Jaisal</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">, this reservoir was revamped by </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">Maharawal Garsi Singh</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">. The banks of the Lake consist of </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">shrines, temples, ghats and Chattris</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">. Placed southwards of the city, this Lake has an entry archway in </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-style:italic;">yellow sandstone, </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;font-style:italic;">Telia-Pol</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">, which was made by </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-style:italic;text-decoration:underline;">Telia, a royal courtesan</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">. One can indulge in boat riding here or simply enjoy a leisure walk. </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">The Jaisalmer fort</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);"> in the backdrop, offers an amazing view. This Lake is largely visited during the yearly celebrations of </span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);font-weight:700;">Gangaur festival</span><span style="display:inline;height:100%;white-space:break-spaces;margin:0;font-family:Times;font-weight:400;font-variant:normal;font-style:normal;font-size:16px;letter-spacing:0px;word-spacing:0px;color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);">.</span></p><img style="" src="/images/colorbox_pic/imgType/image3.jpg" alt="Image may contain: 1 person, outdoor">';
$L( "lyte-texteditor" ).get( 0 ).insertHTML( str );

var json = [{"data":[{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline"},"classList":[],"text":"Gadi Sagar Lake","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":"1.5","overflowWrap":"break-word","display":"block","minHeight":"14px","position":"relative","boxSizing":"border-box","padding":"0","margin":"0","textAlign":"center"},"classList":["lyteEditorh1"],"attr":{},"tag":"lyte-paragraph"},{"data":[{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"One of the most well-known tourist attractions in","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" Jaisalmer,","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" Gadi Sagar Lake originally was a man-made reservoir that was founded to provide a source of water to the people of Jaisalmer. Founded in ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"1367","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" by the first ruler of the city ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Maharawal Jaisal","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":", this reservoir was revamped by ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Maharawal Garsi Singh","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". The banks of the Lake consist of ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"shrines, temples, ghats and Chattris","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". Placed southwards of the city, this Lake has an entry archway in ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"yellow sandstone, ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Telia-Pol","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":", which was made by ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)","textDecoration":"underline"},"classList":[],"text":"Telia, a royal courtesan","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". One can indulge in boat riding here or simply enjoy a leisure walk. ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"The Jaisalmer fort","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" in the backdrop, offers an amazing view. This Lake is largely visited during the yearly celebrations of ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Gangaur festival","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":".","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":"1.5","overflowWrap":"break-word","display":"block","minHeight":"14px","position":"relative","boxSizing":"border-box","padding":"0","margin":"0"},"classList":[],"attr":{},"tag":"lyte-paragraph"},{"data":[{"details":{"type":"image","tag":"img","resize":true,"arguments":{"boundary":"lyte-texteditor, th, td","minWidth":50,"minHeight":50,"clonedShape":true}},"style":{"whiteSpace":"break-spaces","display":"inline-block","margin":"10px"},"classList":["lyteEditorImage"],"text":"","tag":"lyte-word","data":[{"details":{},"data":[{"tag":"img","details":{"src":"http://localhost:8080/images/colorbox_pic/imgType/image3.jpg","alt":"Image may contain: 1 person, outdoor"},"style":{"margin":0}}],"classList":["lyteEditorImageWrapper"],"style":{"width":"100%","height":"100%","overflow":"auto"},"tag":"div"},{"data":[],"style":{"pointerEvents":"none","width":"100%"},"details":{"type":"captionWrapper"},"randomId":"LyteEditorR1ONOM6NORNXO5PLNJL5","tag":"div"}]}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}];[{"data":[{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline"},"classList":[],"text":"Gadi Sagar Lake","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":"1.5","overflowWrap":"break-word","display":"block","minHeight":"14px","position":"relative","boxSizing":"border-box","padding":"0","margin":"0","textAlign":"center"},"classList":["lyteEditorh1"],"attr":{},"tag":"lyte-paragraph"},{"data":[{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"One of the most well-known tourist attractions in","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" Jaisalmer,","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" Gadi Sagar Lake originally was a man-made reservoir that was founded to provide a source of water to the people of Jaisalmer. Founded in ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"1367","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" by the first ruler of the city ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Maharawal Jaisal","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":", this reservoir was revamped by ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Maharawal Garsi Singh","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". The banks of the Lake consist of ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"shrines, temples, ghats and Chattris","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". Placed southwards of the city, this Lake has an entry archway in ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"yellow sandstone, ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Telia-Pol","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":", which was made by ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"italic","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)","textDecoration":"underline"},"classList":[],"text":"Telia, a royal courtesan","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":". One can indulge in boat riding here or simply enjoy a leisure walk. ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"The Jaisalmer fort","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":" in the backdrop, offers an amazing view. This Lake is largely visited during the yearly celebrations of ","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"bold","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":"Gangaur festival","tag":"lyte-word"},{"details":{},"style":{"whiteSpace":"break-spaces","display":"inline","height":"100%","margin":"0","fontFamily":"Times","fontWeight":"400","fontVariant":"normal","fontStyle":"normal","fontSize":"16px","letterSpacing":"0px","wordSpacing":"0px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 255, 255)"},"classList":[],"text":".","tag":"lyte-word"}],"details":{},"style":{"maxWidth":"100%","lineHeight":"1.5","overflowWrap":"break-word","display":"block","minHeight":"14px","position":"relative","boxSizing":"border-box","padding":"0","margin":"0"},"classList":[],"attr":{},"tag":"lyte-paragraph"},{"data":[{"details":{"type":"image","tag":"img","resize":true,"arguments":{"boundary":"lyte-texteditor, th, td","minWidth":50,"minHeight":50,"clonedShape":true}},"style":{"whiteSpace":"break-spaces","display":"inline-block","margin":"10px"},"classList":["lyteEditorImage"],"text":"","tag":"lyte-word","data":[{"details":{},"data":[{"tag":"img","details":{"src":"http://localhost:8080/images/colorbox_pic/imgType/image3.jpg","alt":"Image may contain: 1 person, outdoor"},"style":{"margin":0}}],"classList":["lyteEditorImageWrapper"],"style":{"width":"100%","height":"100%","overflow":"auto"},"tag":"div"},{"data":[],"style":{"pointerEvents":"none","width":"100%"},"details":{"type":"captionWrapper"},"randomId":"LyteEditorR1ONOM6NORNXO5PLNJL5","tag":"div"}]}],"details":{},"style":{"maxWidth":"100%","lineHeight":1.25,"overflowWrap":"break-word"},"classList":[],"attr":{},"tag":"lyte-paragraph"}]

$L( "lyte-texteditor" ).get( 0 ).insertJSON( json );
```
Editor panel

You can bind lyte-editorpanel component with lyte-texteditor component. Provide unique selector of lyte-texteditor component to lyte editor panel component. One text editor can have only one editor panel component.

```html
<lyte-editorpanel lt-prop-editor = "lyte-texteditor.iconEditor" ></lyte-editorpanel>
<lyte-texteditor class = 'iconEditor'></lyte-texteditor>
```
JSON to html string

You can convert texteditor's JSON output as html at anytime. For Server side conversion you can use this Jar. For client side conversion you can use lyte-texteditor's jsonToString util defined in _lyteUiEditor global variable

```javascript
_lyteUiEditor.jsonToString( JsonArray, config ); // it will return html string

JsonArray => Should be in the same format of lyte-texteditor's output

config ( optional ) => configurations of texteditor. If not provided default values will be used for conversion.
```
```javascript
import lyte.utils.lytetexteditor.LyteConvertor;

/* In your code */

LyteConvertor convertor = new LyteConvertor(); // it will return html string

String html = convertor.convert2html( Json_Array, config );

/* Notes */

JsonArray => Should be in the same format of lyte-texteditor's output

config ( optional ) => configurations of texteditor. If not provided default values defined in the jar will be used for conversion.

/*Dependencies*/

json-simple-1.1.jar
```
Updating output

You can update output html on each modifications happens in the texteditor component. In this texteditor rerenders modified word or paragraph alone in the output element.

<script type="text/javascript" src="lyte-texteditor/components/helpers/editor-update-html.js"></script> file.
Call _lyteUiEditor.updateHtml in on-queue-push method

```html
<lyte-editorpanel lt-prop-editor = ".queuePush"></lyte-editorpanel>
<lyte-texteditor lt-prop-word-attributes = true lt-prop-generate-id = true class = "queuePush" on-queue-push = "{{method('queuePush')}}"></lyte-texteditor>

<div class = "queuePushOutput"></div>
```
```javascript
methods : {

	queuepush : function( item, frm, $node ){
		var container = $L( '.queuePushOutput', this.$node ).get( 0 );
		_lyteUiEditor.updateHtml( container, item, frm, $node );
	}
}
```

---

## video

### video - overview

Video

Lyte-video renders a simple video component and its handles.

Dependencies
```html
<!-- Individual component files -->

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-slider.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-video.css"></link>

also requires a sprite file - node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/images/lyte_ui_sprite.svg - loaded automatically from CSS.
```

For Chrome to support video seeking, server have to respond with status code 206 for range request.

It is also to be noted that on using the ltPropPrefetchOptions with the mode:'no-cors' comes with the limitation of unable to access the response's body, status code, or headers. Thereby resulting in opaque response

To support prefetch, server have to respond with 'Access-Control-Allow-Origin' header on the requested resource.

Default video

Lyte-video creates a video component on passing the video source url with lt-prop-source.

```html
<lyte-video lt-prop-source = {{source}} ></lyte-video>
```
```javascript
// in your component
  source : [
  {
	"src" : "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
	"type" : "video/mp4",
	"size" : "576p"
  },
  {
	"src" : "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
	"type" : "video/mp4",
	"size" : "720p"
  },
  {
	"src" : "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
	"type" : "video/mp4",
	"size" : "1080p"
  },
]
```
00:00 / 03:03
Video with chapters

Chapters can be added to lyte-video with lt-prop-chapters.

```html
<lyte-video lt-prop-chapters = {{chapters}}></lyte-video>
```
```javascript
// in your component
	chapters : [
	{ "title" : "Intro", "startTime" : "00:00:00", "endTime" : "00:00:10" },
	{ "title" : "Island", "startTime" : "00:00:10", "endTime" : "00:01:00" },
	{ "title" : "Story", "startTime" : "00:01:00", "endTime" : "00:02:40" },
	{ "title" : "End", "startTime" : "00:02:40", "endTime" : "00:03:03" }
]
```
00:00 / 03:03
Video with subtitles

You can add subtitles to lyte-video with lt-prop-tracks.

```html
<lyte-video lt-prop-tracks = {{subtitles}}></lyte-video>
```
```javascript
// in your component
												  subtitles : [
{"label" : "English", "lang" : "en", "kind" : "captions", "texts" : [
	{"startTime": 12.01, "endTime" : 16.5, "text" : "of what people call, the seven mile miracle",},
	{"startTime": 25.5, "endTime" : 28, "text" : "What would it be like to be born on this island?"},
	{"startTime": 32.5, "endTime" : 34.5, "text" : "To grow up on these shores"},
	{"startTime": 37.5, "endTime" : 40, "text" : "To witness this water, every day"},
	{"startTime": 43.5, "endTime" : 46, "text" : "You're about to meet someone, who did"},
	{"startTime": 165.5, "endTime" : 169, "text" : "This is a film about John John Florence"}
  ]}]
									 (or)
												  tracks : [
{
	"src" : "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
	"label" : "English",
	"lang" : "en",
	"kind" : "captions"
},
{
	"src" : "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
	"label" : "Français",
	"lang" : "fr",
	"kind" : "captions"
},
												  ]
```
00:00 / 03:03
Video with thumbnail

You can provide either a custom image or a timestamp to display the thumbnail with lt-prop-poster.

```html
<lyte-video lt-prop-poster = "10" ></lyte-video>
```
00:00 / 03:03
```html
<lyte-video lt-prop-poster = "/assets/thumbnail.png" ></lyte-video>
```
00:00 / 03:03

### video - api

Properties

All the properties should be prefixed with lt-prop.

source ( lt-prop-source )
DataType	:	Array
Description	:	Array of available sources. If more than one source is given, the first source will be applied by default
tracks ( lt-prop-tracks )
DataType	:	array
Description	:	Array of available subtitles/captions.
chapters ( lt-prop-chapters )
DataType	:	array
Description	:	To add info and context to each portion of the video.
volume ( lt-prop-volume )
DataType	:	number
Default	:	1
Description	:	Video volume level.
play-rate ( lt-prop-play-rate )
DataType	:	number
Default	:	1.0
Description	:	sets the current playback speed of the video.
current-time ( lt-prop-current-time )
DataType	:	number
Default	:	0
Description	:	sets the current playback time.
cross-origin ( lt-prop-cross-origin )
DataType	:	String
Default	:	-
Description	:	To define how the crossorigin requests handled.
loop ( lt-prop-loop )
DataType	:	Boolean
Default	:	false
Description	:	To start over again, every time the video is finished:
pre-load ( lt-prop-pre-load )
DataType	:	String
Default	:	metadata
Description	:	To specify how the video should be loaded when the page loads.
auto-play ( lt-prop-auto-play )
DataType	:	Boolean
Default	:	false
Description	:	To let the video start playing automatically
poster ( lt-prop-poster )
DataType	:	String
Description	:	To specify an image to be shown while the video is downloading, or until the user hits the play button
caption ( lt-prop-caption )
DataType	:	String
Default	:	off
Description	:	To select the default subtitles/caption.
quality ( lt-prop-quality )
DataType	:	String
Default	:	auto
Description	:	To select a default video quality to play.
options ( lt-prop-options )
DataType	:	Object
Default	:	{}
Description	:	To choose which icons are to be shown in video.By default all icons are shown
prefetch ( lt-prop-prefetch )
DataType	:	Boolean
Default	:	false
Description	:	It will prefetch the entire video component through fetch api while clicking the play icon.
prefetch-options ( lt-prop-prefetch-options )
DataType	:	Object
Default	:	{ "method":"GET", "mode":"cors" }
Description	:	options to be provided for fetch api. It is to be noted that on using mode :'no-cors', comes with the few limitation thereby resulting in opaque response.
muted ( lt-prop-muted )
DataType	:	boolean
Default	:	false
Description	:	to initially mute the video.
Methods

You can provide the methods to lyte-video either via script or HTML.

on-menu-click
Description	:	This method is invoked whenever a menu item is selected. If returned false, selected option won't apply.
on-play
Description	:	This method is invoked once while the video is getting started to play.
on-pause
Description	:	This method is invoked when the video is paused.
on-progress
Description	:	This method is invoked continously when the video is playing.
on-before-prefetch
Description	:	This method is invoked before fetching an video file.
ReturnValue	:	Returing false wont fetch that file.
on-prefetch-success
Description	:	This method is invoked after fetching an video file
on-prefetch-error
Description	:	This method is invoked if prefetch is failed.
on-ended
Description	:	This method is invoked after the video has ended.
Functions

You can call this function anywhere after the rendering lyte-video component.

play
Description	:	To play the video.
pause
Description	:	To pause the video.

---

## voicenote

### voicenote - overview

Voicenote

Lyte-voicenote renders a simple audio component and its handles.

Dependencies
```html
<!-- ui-component css files -->
<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-voicenote.css"></link>

<link rel="stylesheet" href="node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-slider.css"></link>
```
Default component

Lyte-voicenote creates a audio component with passed audio source url.

```html
<lyte-voicenote lt-prop-src = '[{"src" : "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"}]'></lyte-voicenote>
```
Prefetch

If prefetch is enabled it will download the entire audio file initially. After succesfully fetching that file audio blob will be converted into a url.

If audio file prefetch fails then the audio component will be rendered in usual flow( prefetch false ).

```html
<lyte-voicenote lt-prop-prefetch = true lt-prop-vol-ctrl-enabled = true lt-prop-src = '[{"src" : "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"}]'></lyte-voicenote>
```

### voicenote - api

Properties

All properties should be prefixed with lt-prop.

src
DataType	:	String
Default	:	-
Description	:	Source url of audio to be played
```html
<lyte-voicenote lt-prop-src='some_audio.mp3'></lyte-voicenote>
```
```javascript
-
```
vol-ctrl-enabled
DataType	:	Boolean
Default	:	false
Description	:	This will enable voice controll slider
```html
<lyte-voicenote lt-prop-vol-ctrl-enabled=true></lyte-voicenote>
```
```javascript
true
false
```
volume
DataType	:	number
Default	:	1
Description	:	With this property, you can provide the audio volume level.
```html
<lyte-voicenote lt-prop-volume=0.5></lyte-voicenote>
```
```javascript
valid number between 0 - 1
```
preload
DataType	:	String
Default	:	metadata
Description	:	Type of preload property to be set.
```html
<lyte-voicenote lt-prop-preload=none></lyte-voicenote>
```
```javascript
valid audio preload options
```
popover
DataType	:	Stringified json
Default	:	'{"freeze" : false, "showCloseButton" : false}'
Description	:	It will be set to volume control popover.
```html
<lyte-voicenote lt-prop-popover='{"freeze" : false, "showCloseButton" : true}'></lyte-voicenote>
```
```javascript
valid popover options
```
playback-rate
DataType	:	Number
Default	:	1
Description	:	It will control the audio speed.
```html
<lyte-voicenote lt-prop-playback-rate=1.5></lyte-voicenote>
```
```javascript
valid value
```
playback-options
DataType	:	Array
Default	:	[
				{
					"label" : "0.25x",
					"value" : 0.25
				},
				{
					"label" : "0.5x",
					"value" : 0.5
				},
				{
					"label" : "0.75x",
					"value" : 0.75
				},
				{
					"label" : "1x",
					"value" : 1
				},
				{
					"label" : "1.25x",
					"value" : 1.25
				},
				{
					"label" : "1.5x",
					"value" : 1.5
				},
				{
					"label" : "1.75x",
					"value" : 1.75
				}
			]
Description	:	Speed options to be displayed
```html
<lyte-voicenote lt-prop-playback-options={{valid array}}></lyte-voicenote>
```
```javascript
-
```
prefetch
DataType	:	Boolean
Default	:	false
Description	:	It will prefetch the entire audio component through fetch api while clicking the play icon.
```html
<lyte-voicenote lt-prop-prefetch=true></lyte-voicenote>
```
```javascript
true
false
```
prefetch-options
DataType	:	Object
Default	:	{
					"method": "GET",
					"mode": "cors",
					"credentials": "include"
				}
Description	:	options to be provided for fetch api
```html
<lyte-voicenote lt-prop-prefetch-options=true></lyte-voicenote>
```
```javascript
valid options
```
refresh
DataType	:	Boolean
Default	:	false
Description	:	It will prefetch the audio again, if it has failed.
```html
<lyte-voicenote lt-prop-refresh=true></lyte-voicenote>
```
```javascript
true
false
```
loading-message
DataType	:	String
Default	:	-
Description	:	If message is provided it will be displayed while prefetch loading.
```html
<lyte-voicenote lt-prop-loading-message=Loading....></lyte-voicenote>
```
```javascript
valid string
```
duration-handling
DataType	:	boolean
Default	:	true
Description	:	In chrome browsers meta loaded event gives audio duration as Infinity for some audio files. This property allows the component to find the original duration by playing it without any sound.
```html
<lyte-voicenote lt-prop-duration-handling=false></lyte-voicenote>
```
```javascript
true
false
```
volume-control
DataType	:	boolean
Default	:	true
Description	:	This property will enable volume control slider in the component.
```html
<lyte-voicenote lt-prop-volume-control=false></lyte-voicenote>
```
```javascript
true
false
```
Methods

You can provide the methods to lyte-voicenote either via script or HTML.

on-volume-change
Description	:	This method is invoked whenever the volume of audio component is changed.
on-progress
Description	:	This method is invoked on audio progress.
on-pause
Description	:	This method is invoked whenever audio element is paused from play state.
on-play
Description	:	This method is invoked whenever audio element is played from pause state.
on-before-prefetch
Description	:	This method is invoked before fetching an audio file.
ReturnValue	:	Returing false wont fetch that file
on-prefetch-success
Description	:	This method is invoked after fetching an audio file.
on-prefetch-error
Description	:	This method is invoked if prefetch is failed.
on-error
Description	:	This method is invoked if audio component is failed.

---

## watermark

### watermark - overview

Watermark

It is a plugin that helps to add a watermark to an image.

There are some important properties that the user has to provide for this. Those are -

target - The image on which you will be adding the watermark. This porperty can contain the image link or the image object as the value.
watermark - This is the element that will be added as an watermark to the target image. It can be the link of an image or the image object or a text.
style - This property tells the type of watermark provided to mark the image. That is whether it is an image or text. By default it is expected to be a text value.

Include the below dependency in the required component's js file.

Dependencies
```html
<!-- Individual plugin file -->
<script type="text/javascript" src="node_modules/@zoho/lyte-ui-component/dist/plugins/lyte-watermark.js"> </script>
<script type="text/javascript" src="node_modules/@zoho/lyte-dom/lyte-dom.js"> </script>
---or----
<!-- Importing files -->
import "@zoho/lyte-ui-plugins/plugins/lyte-watermark.js"
import $L from "@zoho/lyte-dom";
```
Using image as watermark

This example depicts the use of an image to watermark an image.

```javascript
$L("#selector").watermark({
    target : 'image.jpg',
    watermark : 'watermark.png',
    style : 'image',
    onComplete : function( img ){
        document.body.append(img);
    }
});
```
Using text as watermark

This example depicts the use of a text as a watermark to mark an image.

```javascript
$L("#selector").watermark({
    target : 'image.jpg' ,
    watermark : 'lyte-watermark.js' ,
    style : 'text' ,
    position : 'center' ,
    font : '50px sans-serif' ,
    alpha : 0.5 ,
    onComplete : function( img ){
        document.body.append(img) ;
    }
});
```
load()

This example depicts the use of load function. It is useful for writting additional text or adding another watermark image to the watermarked image. We can also use more than one load function to add more watermarks to an image by chaining them one after another. Remember to add the onComplete callback to the last load function to get the final watermarked image.

```javascript
$L("#selector").watermark({
    target : 'image.jpg',
    watermark : 'watermark.png',
    style : 'image'
}).load({
    watermark : 'SAMPLE',
    style : 'text',
    onComplete : function( img ){
        document.body.append(img) ;
    }
});
```
Callback - onLoad

Callback onload should be used to customize the position of the watermark in the image. To use it, the value of the position property should be given as custom. The target image and the watermark image(optional - provided only incase an image is used as watermark) are the arguments provided. The function should return the target image after customization.


If position value is given as custom but onLoad is not mentioned, then an error will be thrown.

```javascript
$L("#selector").watermark({
    target : 'image.jpg',
    watermark : 'SAMPLE',
    style : 'text',
    onLoad : function ( img ) {
        var context = target.getContext('2d');
        var text = 'SAMPLE';
        var metrics = context.measureText(text);
        var x = ( target.width / 2 ) - ( metrics.width + 24 );
        var y = ( target.height / 2 ) + 48 * 2;
        context.translate( x, y );
        context.globalAlpha = 0.6;
        context.fillStyle = 'yellow';
        context.font = '60px Arial Black';
        context.rotate ( -45 * Math.PI / 180 );
        context.fillText ( text, 0, 0 );
        return target;
    },
    onComplete : function ( img ) {
        document.body.append(img);
    }
});
```
Properties - Usage

Example depicting the usage of properties for watermark.

### watermark - api

Properties

The properties should be provided during initialization.

Target
Name	:	target
DataType	:	string or HTML image element
Description	:	This property specifies the image that will be marked. It can accept the image source link or the image element.
Watermark
Name	:	watermark
DataType	:	string or HTML image element
Description	:	This property specifies the image or the text that will be used to mark the target image. It can accept the image source link or the image element or the text.
Style
Name	:	style
DataType	:	string
Default	:	text
Description	:	This property specifies the type of the watermark used to mark the target image. It can be either an image or a text. By default the watermark is considered to be a text.
Position
Name	:	position
DataType	:	string
Default	:	lowerRight
Description	:	This property specifies the position at which the watermark will be added to the target image. By default the watermark will be added at the lowerRight position. If position is mentioned as atPos then we need to provide the posX and posY property values or else it will throw error. For custom positon it is required to provide the onLoad callback which will be called for positioning the watermark on the target image. onLoad callback will have the target image and watermark(incase of image provided as a watermark) as argument(s) and it should return the target image back.
PosX
Name	:	posX
DataType	:	number or function
Default	:	40
Description	:	This property specifies the left value for the watermark incase the position property value is specified as atPos.
PosY
Name	:	posY
DataType	:	number or function
Default	:	40
Description	:	This property specifies the top value for the watermark incase the position property value is specified as atPos.
Alpha
Name	:	alpha
DataType	:	number
Default	:	1
Description	:	This property specifies the opacity of the watermark. Default value is 1.
Font
Name	:	font
DataType	:	string
Default	:	20px Josefin Slab
Description	:	This property specifies font property of the text used as watermark.
Fill Style
Name	:	fillStyle
DataType	:	string
Default	:	#fff
Description	:	This property specifies font color property for the text used as watermark.
Size
Name	:	size
DataType	:	number
Description	:	This property specifies height of the text used as watermark. This property value is very helpful when you have provided position as upperLeft or upperRight for text watermark.

Due to browser limitations TextMetrics objects do not support font height very well. So provide this value to have proper calculation.

Init
Name	:	init
DataType	:	function
Description	:	This property specifies initialization function using which the image will be initialized.
Methods

You have to provide the methods to lyte-watermark during initialization.

onLoad
Name	:	onLoad
Description	:	This function will be triggered if you have provided position value as custom.
onComplete
Name	:	onComplete
Description	:	This callback is triggered once the image is watermarked. Incase you are using load function to add more watermarks to the image, add this onComplete callback to the last load function to get the final watermarked image.
Utility Functions

Utility function for lyte-watermark .

destroy
Name	:	destroy
Description	:	To destory canvas elements which will be left as detached DOM element.
load
Name	:	load
Description	:	This is a function returned by $L.watermark to add additional watermark to watermarked image. Add the onComplete to the last load function to get the final watermarked image.

---

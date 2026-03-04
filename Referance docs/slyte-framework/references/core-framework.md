# sLyte Core Framework Reference

Complete reference for sLyte's core framework: components, data layer, routing, and APIs.

## Table of Contents

- [introduction](#introduction)
- [getting-started](#getting-started)
- [components](#components)
- [data](#data)
- [route](#route)
- [api](#api)
- [services](#services)
- [globals](#globals)

## introduction

Introduction
The sLyte Framework

sLyte framework is a modern, versatile in-house front-end framework that helps you build powerful, interactive web pages and web applications. sLyte, being built on top of HTML, CSS, and Javascript, stands tall with its integrated libraries and components.

This framework saves plenty of your time and effort, as developing reusable UI components is easier than before. The flexible nature of sLyte enables easy navigation and state maintenance in your application. It also helps to communicate better with the backend.

Being light in weight, sLyte plays a pivotal role in the fast rendering of your application. It also extends its support to provide incremental adaptation while moving an application from any existing framework to sLyte. In terms of memory too, sLyte stays true to its name.

How does sLyte Work?

To empower the web applications, the sLyte framework is composed of three independent layers namely router, components, and data

Router

The router lets the browser navigate to have multiple views. The router helps to split your entire application and loads them separately concerning the routes. The router takes up the responsibility of path navigation and renders it.

Components

Components define the appearance and the behavior of the view in your application. This serves as the base layer, to build various UI components. Being power-packed, it employs several distinctive features that are combined to make your application stand apart. The component layer bundles the visual behavior and the style of the elements in your application.

Data

The Data layer eases the interaction with the server and it enables caching and data maintenance. In simple terms, it acts as a client database to hold the data that is being used by the application. It also bridges the data to DOM, and the client to the server.

The Best Of All

The most striking feature of the sLyte framework is that the layers of sLyte can be made to work independently or conjointly.

It might be overwhelming, but stick with us as we will cover all the details. For now, keep reading to understand how sLyte is going to bring in the change.

The Versatile Framework

sLyte being a versatile framework, helps in creating your application from the start to the end. Be it a component, or to define a route, or to establish a connection with the backend, the framework serves as a promising launch pad for the developers. sLyte does not stop here, it also empowers you to do the following.

Builds and governs the user view
Flexible to work independently or conjointly
Paves the navigation
Governs the user's view
Preprocess and post-process the data
Maintains the state
The sLyte Ecosystem

sLyte is light in weight but not in extended support. sLyte framework comes with a solid ecosystem comprising CLI, UI components, sLyte DOM, lytmus, sLyte IDE, sLyte Inspector, and sLyte Eclipse Plugins.

CLI receives your commands gracefully and lets you create, manage, build, and run applications.

sLyte DOM, being a lightweight Javascript library, helps in DOM traversal, event handling, and Ajax requests.

sLyte Inspector is a simple yet powerful Chrome extension that lets you debug your sLyte application with great ease.

sLyte understands the needs of every developer, and so a designated sLyte plugin is provided for the Eclipse IDE.

To propel forward, the sLyte framework provides a designated VS code extension for every developer to have a cakewalk.

This is just a gist of what we do. You can learn more about it in the dedicated sections.

Why sLyte Framework?
Flexibility

The layers of the sLyte framework are not dependent on each other and each layer is made to perform specific functions. Based on your choices, the layers can be selected. The best out of it can be achieved when clubbed with each other.

Modularised Approach

sLyte exhibits modularisation thereby achieving code segregation. As the codes are readily segregatable, it is easier to debug, and it enhances readability. sLyte also lets you reuse the components. This reduces the time and effort taken by the developers and lets the developers focus more on the business logic.

Scalability

The scalability of an application built on sLyte would be fairly high as it efficiently handles the size and the memory. sLyte also provides seamless transition while moving an existing application from any framework to sLyte.

Customization

Based on the needs of the teams, sLyte has evolved over the years and it promises the same to suit the needs of every other team. As sLyte gives you complete control of the compiler, maintaining backward compatibility and easy migration is achieved with the fullest support, working in your favor at a solid pace.

Size of framework

Another major advantage of using sLyte is its light-weighted framework, which impacts the initial application load positively. Here's a size comparison of the core framework sizes (minified and zipped) for several popular JavaScript frameworks as of the latest versions available:

Angular-Approximately 200-600 KB

Angular's core framework size varies based on the specific modules and features included.

React: Approximately 45-50 KB

React's core library is relatively small because it focuses on UI rendering and component logic.

Vue.js: Approximately 80-100 KB

Vue.js includes the core library size along with the runtime and essential features like Vue Router and Vuex.

Ember.js: Approximately 800 KB to 1 MB

Ember.js includes the core framework along with additional utilities and modules.

Svelte: Approximately 10-15 KB

Svelte's framework size is exceptionally small due to its compilation approach that shifts much of the framework code to compile-time.

sLyte (Lyte.js): Approximately 100-150 KB

As stated above, sLyte is comparatively lighter when comapred to other frameworks.

How to Use sLyte

sLyte lets you create and manage your applications using Slyte CLI, an integrated development toolkit, and plugins.

You don't have to commit yourself to sLyte. We make you fall in love with it. The rest of the documentation provides every single detail to make you feel so. Just stay in light with sLyte.

Next

---

## getting-started

### getting-started - quick-start

QUICK START
Get Started

To relish the taste of sLyte, some basic knowledge of JavaScript is suggested. Even without it, things are gonna be extremely easy.

Installing Dependencies

Before you begin creating an application, you need to install the dependencies to work with CLI(An intuitive command line interface). The dependencies include

Node.js and npm

CLI is built with JavaScript and therefore requires Node.js version 14.18.0 or above to be installed in your system. sLyte also requires dependencies fetched via npm.

Because npm is a package in Node.js, you need to install Node.js to use it. If you have Node.js installed in your system, you can skip this step. Otherwise, refer to the installation procedures available in Node.js documentation to install Node.js and npm.

To ensure that Node.js and npm are properly installed in your system, execute the following commands in your terminal:

node --version
npm --version
Installing CLI

After installing the dependencies, CLI has to be installed. The Command Line Interface(CLI) provides easier and faster access to sLyte, where you can develop and deploy your application from your local machine.

To install CLI, execute the following commands in your terminal:

npm install -g @slyte/cli@1.0.5 --registry http://cm-npmregistry

If there are any permission issues, include '--unsafe-perm' along with the above command

For more details on the released version, refer to our download resources

Quick Check

Using the following command, you can easily check if sLyte is successfully installed.

lyte --v

With this command, you will also get to know the version of CLI being used.

Creating an Application

Now that you have installed the CLI globally, you will have access to the Lyte command in your terminal without any difficulty.

To create a new application, navigate to the required folder in your terminal and execute the following lyte new command:

lyte new lyteblog

This command will create a new directory called lyteblog, and it will set up a new sLyte application.

To start the server in a different port, execute the following command

lyte server --port <<port_no>>

If not, the application gets automatically loaded http://localhost:3000/#/ in the browser, and you will be able to see the Welcome page.

Congratulations. With this, you have now successfully created your first sLyte application.

Watch a video on creating a sLyte application here . Navigate here to understand the core concepts of sLyte

Previous
Next

---

### getting-started - core-concepts

Things to Know Before We Start

On reading the introduction, you might have understood that the sLyte framework consists of three independent decoupled layers namely the router layer, components layer, and data layer. Every layer has its own function.

Router

As the name suggests, the Router layer is responsible for the navigation across the pages to present different views to the users. It intercepts any change in the URL and renders the corresponding view. The router layer plays a significant role in achieving modularity as the application can be divided into various routes. Each route can be rendered when the user desires to navigate it.

Any given URL is made of different segments or routes. On receiving a hit in the URL, the corresponding route gets rendered. The route handler, maps the URL to the route segment. In short, the router being the skeleton of every application helps in segregating the application into routes and renders it incrementally, and offers quick loading.

Components

sLyte Components define the appearance and behaviour of the user view in your application. In simple terms, it is the visual layer of your application. To present the user view, the component layer gets split into three parts to handle the HTML, styling, and behaviour. The template engine steps in to handle the HTML. The styling is taken care of by CSS, and the behavioural part is driven by Javascript.

These three files -the HTML, CSS, and JavaScript files are compiled and bundled together as a single JS file. If sLyte router is employed, it takes up the responsibility to fetch and render them appropriately. The striking feature of these components is that they are highly reusable.

Data

The Data layer helps in establishing a strong connection between the server and the client. Apart from this, it connects the data to the DOM. The data layer also performs the following distinctive functions.

In a client-server model, on using the APIs, the importance lies on the data as it requires preprocessing and post-processing at both ends. The data layer plays a significant role in bridging the data between the client and the server. It not only bridges but also caches the data and maintains it. It also provides you with the same while receiving a request.

Navigate here to learn about app creation.

Previous
Next

---

### getting-started - createApp

Creating an Application
Create an Application in sLyte

Creating an application in sLyte is gonna be exciting and super easy. Just follow the steps to see the magic unveil.

Creating an Application

Now that you have installed the CLI globally, you will have access to the sLyte command in your terminal without any difficulty.

To create a new application, navigate to the required folder in your terminal and execute the following lyte new command:

lyte new lyteblog

This command will create a new directory called lyteblog, and it will set up a new sLyte application.

To start the server in a different port, execute the following command

lyte server --port <<port_no>>

If not, the application gets automatically loaded http://localhost:3000/#/ in the browser, and you will be able to see the Welcome page.

Congratulations. With this, you have now successfully created your first sLyte application.

By default, an index route and a welcome component gets created. The index route is available under 'router/routes' as index.js and is mapped to / (slash) path. When you access the application http://localhost:3000/, the welcome-comp gets appended to the element that matches the given CSS selector.

Defining Route

Now that your application is ready, you can navigate to various pages of your application by defining a route. The syntax for defining a route is:

lyte generate route <route_name> </route/path>

For example, let's create a route called users . To do so, execute the following command:

lyte generate route users /users

Now, a new file named users.js gets created under router/routes folder and the mapping details can be found in router/maps/map.js. Dive into the router section of docs to know more about it.

Creating a Component

Components are the building blocks of sLyte framework that let you to create the elements of your choice. It contains HTML files, JavaScript files, and CSS files bundled together as a single element.

You can create a component by executing the following command in your terminal:

lyte generate component componentName

For instance, you can execute this command

lyte generate component blogger-comp
lyte generate component blogger-comp -d blogFolder

This command creates a component named blogger-comp.

The name of the component must be hyphenated

The component files are available as follows:

HTML file -> components/templates
JavaScript file -> components/javascript
CSS file -> components/styles

Inside the template file, you will have a template tag with blogger-comp as the tag name. Your template content, i.e. the HTML content resides inside the template tag.

The Javascript section of the component typically contains a data block, an action block, and a method block.

You can learn more about this in the components section.

Likewise, the styles associated with the component are included in a CSS file. Once we render the component and build the application, the compiled component will be available under dist/components/javascript.

Creating a Schema

Schemas are objects that represent the underlying data presented to the users by the application. In sLyte, you can define attributes in a schema. You can specify the data type of an attribute, and set constraints to it based on its type.

You can create a schema by executing the following lyte generate commands in your terminal:

lyte generate schema bloggerList
lyte generate schema bloggerList -d blogger

The above command will create a schema named bloggerList

You can learn more about data store here.

Rendering a Component

Now that the route and the component have been successfully created and are ready to be used, you can link them together. To do so, you need to render the component.

On creating a app, the sLyte framework, by default renders the 'welcome component'.

The HTML content gets rendered inside the given outlet. You can get it rendered in the route http://localhost:3000

You can also get any component of yours rendered. Just provide the name of the component in the render function and get it rendered.

If you need to reuse this component in other components, you can use it like any other HTML tag, such as:

<blogger-comp> </blogger-comp>
Capturing User Events

You can capture user interaction using events handling. These user events include mouse clicks, page scrolls, mouse hovers, and more. You can also define your own custom events in sLyte.

Building the Application

Now that you have created your first sLyte application, you will need to build it before you can run it. You can build your application by using the lyte build command. This will compile the routes, schemas, and components, and compress them.

To build your application automatically, execute the following command in your terminal:

lyte build --watch

Once the application is built, the compiled files will be available under the default output folder dist. The path of the file is dist/components/javascript..

Now that you have built an application in sLyte, irt is also important to understand the core of sLyte. Navigate here to learn about it.

Previous
Next

---

## components

### components - introduction

Component
Introduction

The charming factor of the sLyte framework is its components. Before diving into what a component is?, let us first understand what a component does?

Every application needs a visual layer and it captivates the attention of the users. The component layer of sLyte takes the complete charge of it and it does not desist only with visual layer. It also plays a significant role in data binding.

The data between the DOM and the HTML gets binded with each other with the help of sLyte. It also takes charge of the behavior by combining the data with its corresponding actions.

sLyte eases every tasks of yours by providing the components as tags, with which you can built any web application on the go. These components, serves as a simple reusable user interface that helps you to build your apps quick and fast.

Technically, these components encapsulate the functionalities and UI into a single entity. This feature makes the components reusable across the application.

In sLyte, components are built using the web components spec contains the custom elements, HTML templates, Shadow DOM.

Let's navigate to learn about components.

Next

---

### components - lyte-component

Component

Components in sLyte are created by executing the following command in the terminal

lyte generate component user-component

Here, a component named user-component is created. And the name of the component must always be hyphenated(-).

A component consists of three files.

Template
Javascript
CSS

The template contains HTML, JavaScript, and CSS. HTML decides the layout and rendering logic. Javascript handles the behaviour and user interaction of the component. CSS file contain the needed style elements of the components.

Template

With sLyte you can use the HTML tags and build your own components. Here, you can provide both the static and dynamic values and get it rendered.

To render static content, make full use of HTML tags just like the below code snippet

```html
<template tag-name="user-component">
	<p> Hello,Glad that you are here. I would like to share my hobbies with you. They are </p>
	<ul>
		<li> Reading </li>
		<li> Playing and </li>
		<li> Sleeping </li>
	</ul>
</template>
```

To render dynamic values use double curly braces ( {{ }} ) which is called a mustache.

Here is a sample template file for your reference

```html
<template tag-name="user-component">
	<p> {{name}} </p>
	<p> {{age}} </p>
</template>
```

Head to know more about rendering the dynamic values.

Javascript

The Javascript file of the component registers the component and provides data definition, action and methods associated with the component.

```javascript
import { Component } from "@slyte/component";
              import { prop } from "@slyte/core"
class UserComp extends Component {
	constructor() {
		super();
	}
	data() {
		return {
			name: prop("string", { default: "Ram" }),
			age: prop("number", { default: 25 }),
		}
	}
	static methods() {
		return {
		}
	}
	static actions() {
		return {
		}
	}
	static observers() {
		return {
		}
	}
}
export { UserComp };
```

In the above example, the UserComp class specifies the data, actions, and methods of the user component. You can observe here that the UserComp class extends the Component class. This component serves as a container/scope within which a set of components gets registered.

Style

By default the component in a vault will be rendered in a shadow and hence the styling associated with the component will only be applied to that particular component. You can learn more about it here.

During the build time, CLI combines the HTML, JavaScript, and CSS into a single JS file.

Let's navigate to learn about component registry.

Previous
Next

---

### components - component-registry

Component Registry

As the name suggests, the component registry serves as a register to hold all the components. It acts as a scope under which the components get registered. The best part is that you can have multiple component registries for an app.

Creating a Registry

By default, while creating an app, the component registry gets created. You can also create additional registries.

This is how the component registry looks like.

```javascript
import { ComponentRegistry } from "@slyte/component";
class AppComponentRegistry extends ComponentRegistry {
    lookups() {
        return []
    }
}
export {AppComponentRegistry};
```
Component Class

The component class is available in "@slyte/component". Component registry class should be defined in the "component.js" file and so components inside the same folder will be associated with the registry mentioned in "component.js".

Let us look at the following code

```javascript
import { Component } from "@slyte/component";
class UserComp extends Component {
  constructor() {
    super();
  }
  data() {
    return {
      name: this.$app.prop("string", { default: "Ram" }),
      age: this.$app.prop("number", { default: 25 }),
    }
  }
  static methods() {
    return {
    }
  }
  static actions() {
    return {

    }
  }
  static observers() {
    return {
    }
  }
}
export { UserComp };
```
```javascript
import { ComponentRegistry } from "@slyte/component";
class AppComponentRegistry extends ComponentRegistry {
    lookups() {
        return []
    }
}
export {AppComponentRegistry};
```

On having a look at the above code snippets, you can clearly figure out that welcomeComp is associated with AppComponentRegistry and so welcomeComp is scoped inside AppComponentRegistry registry. We can also create another registry with same component name (welcome-comp) and so it will be associated with its own registry. While rendering welcome-comp, we have to render via registryInstance and so appropriate welcome-comp will be rendered.

Instantiating the Registry

Instantiating the registry takes place by placing it as a lookup in the App class.

In the above example, the AppComponentRegistry gets instantiated when the App gets instantiated and it will be placed as a lookup (service) in the app instance.

```javascript
import {Lyte} from "@slyte/core/src/lyte";
import {AppComponentRegistry} from "components/component.js";
class App extends Lyte {
  lookups() {
    return [AppComponentRegistry];
  }
}
```
Go Extramile
get Default Registry

sLyte framework by default, takes the registry of the baseApp. You are also given an option to override the registry and provide a registry of your choice as a default registry using the method getDefaultRegistry.

```javascript
class crmApp extends Lyte {
  lookups() {
        return [{component : CrmComponentRegistry}];
  }
    getDefaultRegistry() {
       return this.$component;
  }
}
```

If the component is rendered without any scope then the framework will look into default registry and renders it.

Associate Registry

Let us consider a scenario, where you are wanting to use UI components as addons to our base app. Even on adding the UI components in lookups you will have two seperate registries, a baseapp registry and an uicomponent registry. Now, with the associate registry feature, you can associate uicomponent registry with the baseapp registry. With this, you communicate to the framework that on rendering a component on base app registry, it has lo look both the baseapp registry and uicomponent registry.

```javascript
class crmApp extends Lyte {
  lookups() {
        return [{component : CrmComponentRegistry}, UiComponentAddon];
  }
    addRegistries() {
   return [this.$uiComponentAddon.$component];
  }
}
```

addRegistries api can be used in app.js or component.js or any component js files.

Passing Registry for the Components

You can also pass the registry for the components with the help of 'lyte-registry'. If all component in the html are in same registry, then there is no need to use lyte-registry. Lyte-registry comes in to picture if you use multiple registries in your app.

'lyte-registry' is a special attribute, which can get the registry class or registry name or registry instance. So that the lyte-registry will set the registry scope to render the component.

Let us see an example where 'RecruitRegistry' being a sample registry.

```html
<child-comp lyte-registry="RecruitRegistry"></child-comp>
```

Here, RecruitRegistry is the class name of recruit registry. Since you have passed only the registry name, the first instance of the recruit registry will be associated to the child Component. i.e it is the way to tell the framework that the child component is from recruit registry so render the child comp with this recruitRegistry scope.

Let us consider another example where a registry class named as RecruitRegistryClass is passed to lyte-registry.

```html
<child-comp lyte-registry="{{RecruitRegistryClass }}" ></child-comp>
```
```javascript
import {ChildComp} from "./child-comp.js"
data(){
   ChildComp : prop("object",{default : ChildComp}),
   RecruitRegistryClass : prop("object",{default : this.$app.$recruit}),
}
```

In this example, RecruitRegistryClass is the class of recruit registry, so that the first instance of the recruit registry will be associated to the child component. Thereby the child component renders with the recruitRegistry scope.

While providing the class for lyte-registry, it is advised to import the class and use it in the data block.

```html
<template tag-name="welcome-comp">
<child-comp lyte-registry="{{recruitRegistryInstance }}"></child-comp>
</template>
```
```javascript
import {ChildComp} from "./child-comp.js"
data(){
   ChildComp : prop("object",{default : ChildComp}),
   recruitRegistryInstance : prop("object",{default : this.$app.$recruit}),
}
```
```javascript
import RecruitRegistry from "recruit/compoennt.js"
class blogApp extends Lyte
lookups(){
return [RecruitRegistry]
}
```

Here, the recruit registry instance is saved in the component's data and passed to lyte-registry attribute, which tells the framework to render the child-comp from recruit registry using recruitRegistryInstance instance.

Let's navigate to learn about templates.

Previous
Next

---

### components - templates

Templates
Getting to Know Templates

In simple words, the template contains the HTML layout of the component. The needed HTML tags are enclosed in the template. This template file plays a significant role in data binding. It also helps in adding the event listener and binding it with the functionalities. Here is a sample code for you to have a look at it.

<template tag-name='blog-post' ></template >

The tag name should be hyphenated. It is always a must to use the component name as the tag name.

Basic Syntax

sLyte supports rendering both static and dynamic data.

Here is an example of rendering static data. Through this sample code, you can render the given HTML.

```html
<template tag-name="user-comp">
<p>Hi, I am John and I would like to </p>
<ul>
   <li> Play </li>
   <li> Read and</li>
   <li> Dance </li>
 </ul>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComp extends Component {
  data() {
    return {
      // Data that is processed in template.
    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {UserComp};
```
Rendering Dynamic Data

Through this code snippet, you can dynamically get the data(name and age) from the user.

```html
<template tag-name="user-comp">
    <p> Hello,Welcome. Glad that you are here. I would like to sharemy hobbies with you. They are </p>
    <ul>
      <li> Reading </li>
      <li> Playing and </li>
      <li> Sleeping </li>
    </ul>
    <p> I know, you are curious enough to know who I am </p>
    <p>I am {{name}} and I am {{age}} years old.</p>
</template>
```
```javascript
import { Component } from "@slyte/component";
class UserComp extends Component {
  constructor() {
    super();
  }
  data() {
    return {
      name: prop("string", { default: "Ram" }),
      age: prop("number", { default: 25 }),
    }
  }
  static methods() {
    return {
    }
  }
  static actions() {
    return {

    }
  }
  static observers() {
    return {
    }
  }
}
export { UserComp };
```

Anything that is enclosed in {{ }} is considered as dynamic data. {{ }} is generally called a mustache. The components not only renders the dynamic data, it also establishes a link between the data and the DOM. sLyte goes a step ahead and whenever there is a change in the data, the component re-renders the corresponding DOM nodes.

Rendering Mixed Data

You can also club the string and the dynamic values and get it rendered just like the below code.
```javascript
<template tag-name="user-comp">
   <p> Hi there </p>
   <div class="abc{{dynamicdata}}abc"></div>
<template>
```

Rendering Complex Data

You can also pass an array in an array, a helper in an array and other complex dynamic values just like the below code snippet.

Passing an array in an array:

```html
<template tag-name="user-comp">
  <p> Hi there </p>
  <div class="{{array[newArray[key.a]]}}"></div>
<template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComp extends Component {
  data() {
    return {
      array:prop("array",{default:["one","two"]}),
      newarray:prop("array",{default:[1,2,3]}),
      key:prop("object",{default : {a:0}})

    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {UserComp};
```

Passing a helper in an array:

Helpers are simple functions that can be called from a template. You can learn more about it here..

```html
<template tag-name="user-comp">
  <p> Hi there </p>
  <div class="{{array[newArray[returnZeroHelper()]]}}"></div>
<template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComp extends Component {
  data() {
    return {
      array : prop("array",{default : ["one","two"]}),
      newArray : prop("array",{default : [1,2,3]})

    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {UserComp};
```

Passing complex dynamic values:

```html
<template tag-name="user-comp">
  <p> Hi there </p>
  <div class="{{array[newArray[returnZeroHelper(someNewArray[someNewObj['a']])]]}}"></div>
<template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComp extends Component {
  data() {
    return {
      array : prop("array",{default : ["one","two"]}),
      newArray : prop("array",{default : [1,2,3]}),
      someNewArray : prop("array",{default : [1,2,3]})
      someNewObj : prop("object",{default : {a:0}})
    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {UserComp};
```
Expressions Evaluation

sLyte supports logical operations, ternary operations, arithmetic operations, comparison operators, and assignment operators.

Have a look at how you can use these expressions in sLyte

```html
<template tag-name="user-comp">
    <span> Blog 1 </span>
    <span case="{{(a=='two'&&b=='one')||(c=='three')}}"> logical operations </span>
    <span case="{{num1>num2?num1:num2}}"> ternary operations </span>
    <span case="{{++num1 + ++num2}}"> Arithmetic operations </span>
    <span lyte-if="{{num1 >num2}}"> Comparison Operators </span>
    <span case="{{num1+=20}}"> Assignment Operators </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComp extends Component {
  data() {
    return {
      // Data that is processed in template.
      num1 : this.$app.prop( "number" , { default:5 }),
      num2 : this.$app.prop( "number" , { default:6 }),
      a    : this.$app.prop( "string" , { default:"two" }),
      b    : this.$app.prop( "string" , { default:"one" }),
      c    : this.$app.prop( "string" , { default:"three" })
    }
  }
}
export {UserComp};
```
Go Extramile
Quotes Handling

At times, you may use the quotes symbol (') in your content. In such cases, sLyte can handle both single and double quotes inside a {{ }}


HTML context :

In HTML content, quotes can be used with their entity name. Entity name like &quot for double quotes(") and &apos for a single quote(') is used.

```html
<template tag-name="blog-post">
    <div class = "{{string2 == 'sister&quot;s'}}"> single quotes </div>
    <div class = '{{string1 == "sister&apos;s"}}'>  double quotes </div>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class BlogPost extends Component {
  data() {
    return {
      string1 : prop( "string", { default:"sister's" }),
      string2 : prop( "string", { default:'sister"s' })
    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {BlogPost};
```

String context:

While using a string content inside the mustache, it is advisable to use it with a ('\')sign. It can be used like this,

```html
<template tag-name="blog-post">
    <div class = "{{string1 == 'sister\'s'}}"> single quotes  </div>
    <div class = '{{string2 == "sister\"s"}}'> double quotes  </div>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class BlogPost extends Component {
  data() {
    return {
      string1 : prop( "string", { default:"sister's" }),
      string2 : prop( "string", { default:'sister"s' })
    }
  }
}
export {BlogPost};
```

Note: Mustache must be enclosed inside the double quotes/single quotes when you add spaces inside it (which is the default HTML behaviour).

eg : <p onclick = "{{action('actionName','args')}}"> </p>

Providing Common Attributes for the Component

While creating a component you may at times require an ID or a class to define the component.

```html
<template tag-name="some-component" style={{someStyle}} class="staticClass" id=gen-{{id}}></template>
```

As seen in the above example, you can provide static as well as dynamic values for these attributes. Whenever you use this component, these attributes will be populated for that component instance.

Let's navigate to learn about actions and methods.

Previous
Next

---

### components - javascript

Javascript
Basic Syntax

The action time begins. As the template gets ready, it gets registered to make it available as a custom element. The component class contains the list of data properties, actions, and methods for the component. And this is how it looks like:

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
    return {
    }
  }
  static actions() {
    return {

    }
  }
  static observers() {
    return {
    }
  }
}
export { UserComp };
```

Note: Only the "data" block can be accessed from the template directly, "actions" and "methods" blocks must be accessed via actions and methods helper.

Data Block

The data block contains the data needed for the components. The 'data' function contains the variable definition and initialization for the properties to be used in the component. It can contain strings, integers, arrays, and objects. In this data block, the data given dynamically in the template file gets rendered. There are multiple ways to render the data dynamically. Let us have a look at it.

Before declaring the variables, it is good to import the prop just like the below code snippet.

Here is a sample data block for your reference:

```html
<template tag-name="UserComp">
  <span> My name is {{Name}} </span>
  <span>and I am {{Age}}. </span>
  <span> You can stay in touch with me via  {{email}} </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class BlogPost extends Component {
data() {
return {
   Name: prop( "string" , { default : "Ram" }),
   Age: prop("number", { default: 10 }),
   email: prop( "string" , { default : "abc@gmail.com" })
       }
    }
    static actions() {
    return {
          // Functions for event handling
        }
    }
    static methods() {
    return {
          // Functions which can be used as callback in the component.
        }
      }
    }
export {UserComp};
```

If you have not provided the default value, you can also pass it through the init(). In general, init() gets rendered before the rendering of the component. Here is an example of how you can do it. In this example, with the help of init(), the value of the name, age, and data are set.

```html
<template tag-name="UserComp">
<span> My name is {{Name}} and </span>
<span>I am {{Age}}. </span>
<span> You can stay in touch with me via{{email}} </span>
</template>
```
```javascript
import { Component } from "@slyte/component";
import { prop } from "@slyte/core";
class UserComp extends Component {
  constructor() {
    super();
  }
  init() {
    this.setData("Name", "Sam");
    this.setData("Age", 25);
    this.setData("email", "sam@gmail.com");
  }

  data() {
    return {
      Name:prop("string"),
      Age: prop("number"),
      email:prop("string")
    }
  }
  static methods() {
    return {
    }
  }
  static actions() {
    return {
    }
  }
  static observers() {
    return {
    }
  }
}
export { UserComp };
```
Actions Block

So far, you have rendered a component with dynamic data. Now it is time to add some user interaction to the component and action block helps you to do so.

Let us see an example.

```html
<template tag-name="user-comp">
   <span> {{title}} </span>
   <span onclick="{{action('perform')}}"> Click Me </span>
</template>
```
```javascript
import { Component } from "@slyte/component";
import { prop } from "@slyte/core";
class UserComp extends Component {
  constructor() {
    super();
  }
  data() {
    return{

    }
  }
  static methods() {
    return {
    }
  }
  static actions() {
    return {
      perform: function () {
      alert("Hello, How are you?")
      }
    }
  }
  static observers() {
    return {
    }
  }
}
export { UserComp };
```

In the above example, you have added a click function that listens to click action. Default action helper is used to bind events to a node.




Let us consider another example

```html
<template tag-name="blog-Post">
   <span> {{title}} </span>
   <span onclick="{{action('clicked','You have Clicked:' , content)}}"> {{content}} </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class BlogPost extends Component {
  data() {
    return {
      title : prop( "string" , { "default" : "Blog title" }),
      content : prop( "string" , { "default" : "Blog Content" })
    }
  }
  static actions() {
    return {
      clicked : function( str , blogContent ){
      alert( str + blogContent ); // will alert => You have Clicked:Blog Content
      }
    }
  }
}
export {BlogPost};
```
Methods Block

It contains functions associated with the component. Only functions within this block can be passed from a parent component to a child component.

Let's take this example. Here, you have a component called lyte-menu which displays the list of items. Lyte-menu expects a callback function, which gets called before a menu is rendered. Here the function onBeforeShow is passed from the user component to the lyte-menu component using the method helper. Dwell to know what methods block can do for you

```html
<template tag-name="user-component">
   <lyte-menu on-before-show={{method('onBeforeShow')}}></lyte-menu>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class UserComponent extends Component {
  static methods() {
    return {
      "onBeforeShow" : function(){
        console.log( this );
      }
    }
  }
}
export {UserComponent};
```

Let's navigate to learn about basic declarations.

Previous
Next

---

### components - yield

Yield - Rendering Dynamic HTML
Yield - Rendering Dynamic HTML

While building an application, you might be using the same component across the application at different places and it might have its own disadvantages. You may want to reuse the component again but not always require it to look similar or to have the same functionality across the application.

To avoid the rigidity of the component while reusing it, the sLyte framework has come up with Yield.

With yield, you can customize the same component as per your wish and reuse it across the application. Yield lets you pass dynamic HTML from the parent to the child component.

The Role of Yield

Use case 1

The first use case where yield can help you out is that you can pass the HTML content from the parent component to the child component.

Let us consider an example in which we use the lyte button.

```html
<template tag-name='welcome-comp'>
    <p>Let us try yield</p>
    <user1-component>
        <template is="yield" yield-name="content">
            <button>Click Me</button>
        </template>
    </user1-component>
</template>
```
```html
<template tag-name="user1-component">
   <p>Hello World</p>
   <lyte-yield yield-name="content">

   </lyte-yield>
 </template>
```

From the above code, you infer that the same button can be used in multiple places with customization. And it is achieved with yield.

Use case 2

Let us discuss the second use case where yield can be used effectively.

With yield, passing and rendering the data from the child component(user-comp) to the parent component(yieldtry-comp) is also possible. Let us consider an example.

```html
<template tag-name="yieldtry-comp">
<p>Here is an example for yield</p>
     <user-comp>
         <template is="yield" yield-name="content">
             <div>{{Name}}</div>
             <b> Id Number - {{idValue}} </b>
             <b> Email - {{emailValue}}  </b>
         </template>
     </user-comp>
 </template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";

class YieldtryComp extends Component {
    constructor() {
        super();
    }

    data() {
        return {
            Name : prop("string", {"default" : "Rakesh"}),

        }
    }

    static methods() {
        return {
        }
    }

    static actions() {
        return {

        }
    }

    static observers() {
        return {
        }
    }

}

export { YieldtryComp };
```
```html
<template tag-name="user-comp">
    <lyte-yield yield-name="content" id-value={{idno}} email-value={{email}} >  </lyte-yield>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";

class UserComp extends Component {
    constructor() {
        super();
    }

    data() {
        return {
            idno : prop('string',{default: '022'}),
            email : prop('string',{default: 'abc@email.com'})


        }
    }

    static methods() {
        return {
        }
    }

    static actions() {
        return {

        }
    }

    static observers() {
        return {
        }
    }

}

export { UserComp };
```
```html

                                        

                                        
```

From the above code, you can infer,that with yield the data passing is easily feasible.

Here, in this example, using the 'template yield' in the parent component(yieldtry-comp), we dynamically set the values for the child component.

Now in the child component(user-comp) with Lyte-yield, we call the dynamically set values from the parent component.

With yield, it is possible to render the data present in the parent component(if needed).

To overcome the rigidity, if needed you can also add actions inside the yield of the parent component.

```html
<template tag-name="yieldtry-comp">
  <p>Here is an example for yield</p>
  <user-comp>
     <template is="yield" yield-name="content">
     <div>{{Name}}</div>
     <div> Id Number - {{idValue}}" </div>
     <div> Email - {{emailValue}}  </div>
     <button onclick={{action('perform')}} >Click Me</button>
     </template>
  </user-comp>
</template>
```
```javascript
import {Component} from "@slyte/component";
import { prop } from "@slyte/core";

class YieldtryComp extends Component {
    constructor() {
        super();
    }

    data() {
        return {
            Name: prop("string", { "default": "Rakesh" })
        }
    }

    static methods() {
        return {
        }
    }

    static actions() {
        return {
            perform: function () {
                alert("Hello, I am Rakesh.")
            }
        }
    }

    static observers() {
        return {
        }
    }

}

export {YieldtryComp};
```
```html

                                        
  
                                    
```
An example of yield in UI components

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

Let's navigate to learn about helpers.

Previous
Next

---

### components - helpers

Helpers
What are helpers

Helpers are simple functions that can be called from a template. Helpers can be used to compute values and handle minimum logic in the templates. A helper should be registered before using it. After registering the helper, it can be used in all components.

On viewing the below code snippet you can clearly figure out how the concat and prefix helpers are registered.

```javascript
import {Helper} from "@slyte/component";
Helper.register( "concat" , function( firstName , lastName ){
	return firstName + lastName ;
});
```
```javascript
import {Helper} from "@slyte/component";
Helper.register( "prefix" , function( prefix , name ){
	return prefix + name ;
});
```

Now that the helpers are registered, they can be used in any component. As shown in the below example:

```html
<template tag-name="user-comp">
	<div>  {{concat(firstName , secondName)}}  </div>
</template>
```

Additionally, a helper can be called as nested helper. In this example, the concatenated value is passed to the prefix helper

```html
<template tag-name="user-comp">
	<div> {{prefix( 'Mr' , concat(firstName , secondName) )}} </div>
</template>
```

A helper can take both static and dynamic values as input. In the above prefix example, Mr is a static value, and firstName and secondName are dynamic values.

Note: Hyphens are not allowed in helper names. You can use "camelCase" for multi-word helper names.

sLyte framework provides a rich set of default helpers, which is used to handle actions, methods and, log function in the template. Keep reading to learn more about it.

Default Helpers
Action

This helper is used to handle both default and custom events in a component. The first argument is the function name followed by the arguments to be passed.

Let us see a sample code. Here, the function editBlog is called which sends an alert message with ID and content.

```html
<template tag-name="blog-Post">
	<span> {{title}} </span>
	<span onclick="{{action('editBlog',id, content)}}"> Edit </span>
	<span> {{content}} </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
	data() {
		return {
			id : prop( "string" , { "default" : "1233" }),
			title :  prop( "string" , { "default" : "Blog title" }),
			content :  prop( "string" , { "default" : "Blog Content" })
		}
	}
	static actions() {
		return {
			editBlog : function( blogId , blogContent ){
				console.log( event ); // Event Object
				alert( "Blog:" + blogId + "With content" + blogContent + "is Edited." );
			}
		}
	}
}
export {BlogPost};
```
Method

This helper is used to pass a method from the parent component to the child component. Similar to action helper, method helper takes the function name as the first argument followed by arguments to be passed.

```html
<template tag-name="user-component">
	<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComponent extends Component {
	static methods() {
		return {
			"onBeforeShow" : function(){
				console.log( this );
			}
		}
	}
}
export {UserComponent};
```
Unbound

By default, the Component establishes a link between data and DOM. Any changes in data gets immediately rendered in the DOM. At times, this linking is not preferred. In such cases, the Unbound option is used.

```html
<template tag-name="blog-Post">
	<span> {{unbound(title)}} </span>
	<span onclick="{{action('editBlog', id , content)}}"> Edit </span>
	<span> {{content}} </span>
</template>
```
Unbound a Component

sLyte achieves data binding between the data of the component and the rendered DOM. Any changes made in the data automatically get reflected in the DOM. If you wish to avoid this behavior of sLyte, you can very well use @unbound or @unbound="true".

In cases where you want to avoid this behavior, you can resort to Unbound for "for" helper. But if you want to avoid binding the entire component, you can set a property "@unbound" for the component, which will make this component unreactive to any data changes. The child component should however support lyteUnbound by defining it as a property in it's data scope.

```html
<template tag-name="main-component">
	<child-component @unbound="true" ></child-component>
</template>
```
```html
<template tag-name="child-component">
	<template lyte-if="{{show}}">
		The content is visible
	</template>
	<template lyte-else>
		The content should not be visible.
	</template>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class ChildComponent extends Component {
data() {
	return {
		lyteUnbound : prop( "boolean" , { "default" : false })
		show : prop( "boolean" , { "default" : true })
	}
	}
}
export {ChildComponent};
```

In the above example, any changes in the data of "some-component" will not affect the DOM. For example, if the value of the "show" property of "some-component" changes, the DOM will not be updated.

The child component can also define the default value of lyteUnbound as true, making it unbound by default.

Note: The child component should have a property "lyteUnbound" of boolean type.

Unescape

The Component renders the dynamic values (values provided within mustache {{ }}) as a text value. Lets take an example here.

```html
<div> {{unescape(appValue)}} </div>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComponent extends Component {
	data() {
		return {
			appValue : prop( "string" , { "default" : "< b > Render this bold < \b >" })
		}
	}
}
export {UserComponent};
```
```html
<b> Render this bold <\b>
```

In this case , the value of appValue property in the component is rendered as text content as "<b> Render this bold <\b>". There might be the cases where you might have to print the dynamic value as HTML content. In such cases, 'unescape'helper comes handy.

By default, Zoho's Security Sanitizer is used for sanitizing the content along with the Unescape helper, in order to prevent XSS from any malicious content. You can find more details about the sanitizer in Client Side Sanitizing.

The unescape helper takes four arguments.

First Argument:

The actual content to be unescaped

Here, is an example.

```html
<div> {{unescape(appValue)}} </div>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComponent extends Component {
	data() {
		return {
			appValue : prop( "string" , { "default" : "< b > Render this bold < \b >" })
		}
	}
}
export {UserComponent};
```
```html
<b> Render this bold </b>
```
Second Argument [Optional] :

Additional configuration to be provided to the Sanitizer. The sanitizer has a default white-list containing the list of allowed tags and attributes. Apart from the default white-listed tags and attributes, the others are removed during sanitization to prevent XSS. You may use this option to specify other HTML tags and attributes, which the sanitizer has to preserve during the process of sanitization.

Example for passing additional configuration object as second argument for unescape helper.

```html
<template tag-name="blog-Post">
	<span> {{title}} </span>
	<span> {{unescape(content,additionalConfig)}} </span>
</template>
<!-- content   and  local   config   was   given   in   blog-Post.js -->
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
	data() {
		return {
			appValue : prop( "string" , { "default" : "< b > Render this bold < \b >" })
			content : prop( "string" , {
				   default : "< lyte-comp obj='test' > this is lyte component < /lyte-comp > < custom-comp compvalue='test'  > this is custom component < /custom-comp >"
			}),
			additionalConfig : prop( "object" , {
				default : { 'GLOBAL_TAGS' : [ 'lyte-comp' , 'custom-comp'] , 'GLOBAL_ATTRIBUTES' : [ 'compvalue' ] , 'FORBID_TAGS' : [ 'input' ] , 'FORBID_ATTR' : [ 'value' ] }
			   })
			// localconfig need to be a object
		}
	}
}
export {BlogPost};
```
Third Argument [Optional] :

Sanitizer Instance: By default, we will use the global Sanitizer instance. However you can also create a local sanitizer with custom configuration specific to your needs and make Lyte to use your custom sanitizer.

Note : Additional object can support only GLOBAL_TAGS, GLOBAL_ATTRIBUTES, FORBID_TAGS and FORBID_ATTR configurations. If you want to add additonal other sanitizer flag configuration, then you have to create custom sanitizer as discussed below.

Note : If the html content contains lyte components, then you have to add the component's name in "GLOBAL_TAGS" whereas the attributes associated with component will be preserved .

Example for creating custom sanitizer and passing as third argument for unescape helper.

```html
<template tag-name="blog-Post">
	<span> {{unescape(content_with_style_tag,undefined,instance_style.obj)}} </span>
	<span> {{unescape(content_with_onevents,undefined,instance_onevents.obj)}} </span>
	<span> {{unescape(content_with_src,undefined,instance_src.obj)}} </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component, Sanitizer } from "@slyte/component";
class BlogPost extends Component {
	data(){
		return {
			content_with_style_tag : prop( "string" , { default : "<head> <style>p{color:red} </style> </head><p>this is ptag </p><p style='color:green'>this is ptag with inline style </p> <my-comp>this is new custom tag </my-comp>" });
			content_with_onevents : prop( "string" , { default : "<div onclick = 'myfn()'> this is div  </div>" });
			content_with_src : prop( "string" , { default : "<lyte-comp> <p>this is lyte component</p>  <img class="ZCrmImage" src="https://cdn.mos.cms.futurecdn.net/i26qpaxZhVC28XRTJWafQS.jpeg" width="100%" height="100%"/> </lyte-comp>" });
			instance_style : prop( "object" , { default : { "obj" : {} }});
			instance_onevents : prop( "object" , { default : { "obj" : {} }});
			instance_src : prop( "object" , { default : { "obj" : {} }});
		}
	}
	init(){
		this.setData( "instance_style.obj" , new Sanitizer ( { GLOBAL_TAGS : [ "my-comp" ] , "GLOBAL_ATTRIBUTES" : [ "some-attr" ] ,"ALLOWED_STYLE" : "ALL" ,"STYLE_VALIDATION" : false}));
		this.setData( "instance_onevents.obj" , new Sanitizer ( {"GLOBAL_ATTRIBUTES" : [ "onclick" ],'REMOVE_ONEVENTS':false}));
		this.setData( "instance_src.obj" , new Sanitizer ( { GLOBAL_TAGS : [ "lyte-comp" ] ,"ADD_URI_SAFE_ATTR" : [ "src" ] }));
	}
}
export {BlogPost};
```

We can also pass both additional object in second param and instance in third param of unescape helper. Click here to know more.

Note : We have shown few sample configurations with custom sanitizer instance in the above example, such as preserving dom events, style and src attributes etc. Please check the security documentation for more custom configurations supported by sanitizer.

Fourth Argument:[Options]

With this argument, you can pass an option which gives you the complete freedom to ignore or choose to use the sanitizer.

The Synatx and an example is given below.

```html
<template tag-name="blog-Post">
	<span> {{unescape(html, additional object,userInstance,options)}} </span>
</template>
```

Note: In the options, you can set the flag 'ignoreSanitizer' as true or false. On setting true, the sanitizer will not be enabled, thereby XSS attack from any malicious content will not be prevented from our end. On setting 'ignoreSanitizer' as false, the sanitizer will be enabled.

Have a look at the below code snippet.

```html
<template tag-name="blog-Post">
	<span> {{unescape(content_with_style_tag,undefined,instance_style.obj,{ignoreSanitizer : true})}} </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
	data(){
		return {
			content_with_style_tag : prop( "string" , { default : "<head> <style>p{color:red} </style> </head><p>this is ptag </p><p style='color:green'>this is ptag with inline style </p> <my-comp>this is new custom tag </my-comp>" });
			content_with_onevents : prop( "string" , { default : "<div onclick = 'myfn()'> this is div  </div>" });
			content_with_src : prop( "string" , { default : "<lyte-comp> <p>this is lyte component</p>  <img class="ZCrmImage" src="https://cdn.mos.cms.futurecdn.net/i26qpaxZhVC28XRTJWafQS.jpeg" width="100%" height="100%"/> </lyte-comp>" });
			instance_style : prop( "object" , { default : { "obj" : {} }});
			instance_onevents : prop( "object" , { default : { "obj" : {} }});
			instance_src : prop( "object" , { default : { "obj" : {} }});
		}
	}
	init(){
		this.setData( "instance_style.obj" , this.$app.Security.createSanitizer ( { GLOBAL_TAGS : [ "my-comp" ] , "GLOBAL_ATTRIBUTES" : [ "some-attr" ] ,"ALLOWED_STYLE" : "ALL" ,"STYLE_VALIDATION" : false}));
	}
}
export {BlogPost};
```
Escape

There are places where the framework uses innerHTML such as TURBO rendering where the framework will escape the dynamic values and renders in DOM with escape helper.

```html
<template tag-name="user-component">
  <div class="{{escape(value,type)}}">
  </div>
</template>
```

Based on the 'type', the corresponding ZOHO security API's are used.

If the 'type' is url when concerned about images or any HTML then Encoder.encodeForHtmlAttribute(value) is used.

```html
<template tag-name="user-component">
   <div class="{{escape( Encoder.encodeForHtmlAttribute,url)}}">
  </div>
</template>
```

If the type is javascript, then Encoder.encodeForJavascript(value) is used.

```html
<template tag-name="user-component">
   <div class="{{escape( Encoder.encodeForJavascript,js)}}">
  </div>
</template>
```

If the type is css, then Encoder.encodeForCSS(value) is used.

```html
<template tag-name="user-component">
   <div class="{{escape( Encoder.encodeForCSS,css)}}">
  </div>
</template>
```
If helper

If helper does the same function, just like the regular 'if'. It checks the condition and returns accordingly. If the condition is true, the "true case" gets rendered and if the condition is false the "false case" gets rendered.

Syntax : {{if(condition/testValue, trueCase, falseCase)}}

```html
<template tag-name="user-component">
	<div class="{{if(multiple,'multiple','single')}}">
		<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
	</div>
</template>
```
If equals

This helper function is used to check if two values are equal. It returns true if both the values are equal and it returns false if the values are not equal

Syntax : {{ifEquals(value1, value2)}}

```html
<template tag-name="user-component">
	<div class="{{if(ifEquals(company,'zoho'),'own','others')}}">
		<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
	</div>
</template>
```
If not equals

This helper function is used to check if two values are unequal. This helper function returns true if both the values are not equal and if both the values are equal, it returns false.

Syntax : {{ifNotEquals(value1, value2)}}

```html
<template tag-name="user-component">
  <div class="{{if(ifNotEquals(company,'zoho'),'others','own')}}">
	 <lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
  </div>
</template>
```
Negate

It works similarly to that of Logical Not operation. It reverses the logical value of a boolean expression or value, thereby helping to negate the value. It returns either a true or false value.

Syntax : {{negate(valueToNegate)}}

```html
<template tag-name="user-component">
  <div class={{if(invert,negate(someValue),someValue)}}>
	<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
  </div>
</template>
```
Concat

This helper function is used to concat two or more values. You can use this concat function with the following syntax,

Syntax : {{concat(value1,value2,...valueN)}}

```html
<template tag-name="user-component">
  <div class="{{if(full,concat(firstName,'-',lastName),lastName)}}">
	<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
  </div>
</template>
```
Log

This helper class supports the logging function from the templates. With this helper class, you can log anything to the console.

```html
<template tag-name="user-component">
   {{log("user Name :" , name)}}
	<lyte-menu on-before-show="{{method('onBeforeShow')}}">
	</lyte-menu>
</template>
```
Debugger

This helper function is used to provide debugging facility from the templates.

```html
<template tag-name="user-component">
  {{debugger()}}
	<lyte-menu on-before-show="{{method('onBeforeShow')}}"></lyte-menu>
</template>
```
Lbind

This helper function is used to support DOM for any changes in the data.

(i) In cases of input form elements, you might need to bind the input value to a variable in the component (DOM to data). In those cases, you can use 'lbind' helper to bind DOM to component data.

```html
<input type="text" value="{{lbind(a.b)}}"/>
```

Whenever the value of the input field changes, the same gets reflected in variable "a.b" of the component

Note: For the checkbox, it will be a checked attribute instead of the value attribute. For other input types such as textarea and select, it would still be the 'value' attribute on which we use the 'lbind' helper.

```html
<input type="checkbox" checked="{{lbind(a.b)}}"/>
```
```html
<textarea value="{{lbind(a.b)}}"></textarea>
```
```html
<select value="{{lbind(a.b)}}"></select>
```

(ii) In cases of parent-child components, when we need changes to be reflected in the parent component when the change has occurred in the child, we can use 'lbind' to bind the child component data to the parent component.

```html
<test-component2 message="{{lbind(hello)}}"></test-component2>
```

Here when the "message" property of the child component (test-component2) changes, the value of the "hello" property of the parent component (test-component1) also changes.

Custom Helpers

Apart from the default helpers, you can also register any helper of your choice. This can be done by using the following command in the terminal.

lyte generate helper helperName

You can find the helpers inside the components just like the below image.

Let us consider an example where isArray is defined as a custom helper.

```html
<div lyte-if="{{isArray(serverData)}}">
	<div> this is array data type</div>
<div>
```
```javascript
import { Helper } from "@slyte/component";
Helper.register("isArray", function (item) {
if (Array.isArray() && item instanceof Array) {
	return true;
 }
return false;
});
```
Importing Custom Helpers

By default, the framework bundles the helper function written in the template file. But if the helper is not written in the template file, you can import the helper with lyte-import and get it bundled.

```html
<lyte-import>
    <import-helper name="binding-check-helpers"></import-helper>
</lyte-import>
```
Execution order of the helpers
In older version

The helpers can be combined with 'And' operator and executed. Let us consider a scenario.

```html
<div>
{{helper1() && helper2()}}
</div>
```

Here, let us consider, helper1() returns false and the helper2() returns true. In the previous versions, the helper1() will be executed and then the helper2() will be exected. Only after the execution, the 'And' operation is performed which would return false based on the given scenario.

In newer version

In the newer version, if the helper1() return false, the helper2() will not be executed. By default, on performing 'And' operation if one returns false then the result would be false.

Recommended suggestion for older versions

If you are using the older version, set the flag 'lyteSequence' as true. Have a look at the below code snippet to see how it works. You can add the code snippet in the registry or in app.js.

From

1.0.2

```html
class CrmComponentRegistry extends ComponentRegistry
{
	static lyteSequence = true;
}
```
```html
class crmapp extends lyte
{
  static lyteSequence = true;
}
```
```html
<select value="{{lbind(a.b)}}"></select>
```

Let's navigate to learn about action handling.

Previous
Next

---

### components - action-handling

Action Handling

In this section you shall get to know about handling and how an event gets bubbled up from the child component to the parent component.

Introduction

In general, actions are the mechanism for wiring UI events (like clicks, input changes, and menu closes) to component logic. They let you keep your templates declarative while still responding to user interactions. The events can be catagorised as DOM event handling and Custom event handling.

The prime difference in DOM event handling and Custom Event handling is that

For native HTML elements (like <span>), sLyte uses the standard DOM event attributes, such as onclick, onchange, oninput, etc. These are not hyphenated because they match how the browser expects event attributes to be named.
And if the user wishes to throw any custom events other than the DOM events, the framework uses custom event binding with hyphenated names, such as on-close, on-select, etc. These are not native DOM events, they are the custom events of the components.

Note: The framework to differentiate a custom event to a DOM event, it uses 'on-' prefixed with a descriptive event name to make it clear that this is a custom event.

DOM events handling

As discussed above, for native HTML elements (like <span>), sLyte uses the standard DOM event attributes, such as onclick, onchange, oninput, etc. These are not hyphenated because they match how the browser expects event attributes to be named.

```html
<template tag-name="blog-post">
   <span> {{title}} </span>
   <span onclick="{{action('editBlog')}}"> Edit </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
      title : prop( "string" , { "default" : "Blog title" })
    }
  }
  static actions() {
    return {
      editBlog : function{
             console.log("Hello world");
      }
    }
  }
}
export {BlogPost};
```
Passing event as argument

You can pass the native event object(event) and the component instance (this) to an action in the template file just like the below code snippet

```html
<template tag-name="blog-post">
   <button onclick="{{action('handleClick',event,this)}}"> Edit </button>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
    }
  }
  static actions() {
    return {
      handleClick(event, compRef)  : function{
            console.log("The Event object is:", event);  // native click event
            console.log("The Component instance is:", compRef);   // this component instance
      }
    }
  }
}
export {BlogPost};
```

It is to be noted that the 'event' attribute always refers to the DOM event object (e.g., MouseEvent, KeyboardEvent, etc.). and 'this' refers to the current component instance, so you can access the properties and methods on it.

Passing the component data as arguments

You can pass the data from the component as arguments just like the below code snippet.

```html
<template tag-name="blog-post">
   <button onclick="{{action('handleClick',id,title,content)}}"> Edit </button>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
       id : prop( "string" , { "default" : "1233" }),
       title : prop( "string" , { "default" : "Blog title" }),
       content : prop( "string" , { "default" : " A massive earthquake hit US" })
    }
  }
  static actions() {
    return {
            handleClick  : function(blogId ,blogTitle, blogContent ){
            alert( "Blog:" + blogId +"and the title is" + blogTitle + "With content" + blogContent + "is Edited." );
      }
    }
  }
}
export {BlogPost};
```

Here the data 'id','title' and 'content' is passed from the component.

Preventing event bubbling

Note: In general, events bubbling happens within related components(Child -> Parent). It is also possible to pass the events across the non-related components with Global events.

Have a look at the below code snippet to see, how the event propogation is prevented.

```html
<template tag-name="blog-post">
   <span> {{title}} </span>
   <span onclick="{{action('editBlog',id, content,event,this)}}"> Edit </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
      id : prop( "string" , { "default" : "1233" }),
      title : prop( "string" , { "default" : "Blog title" }),
      content : prop( "string" , { "default" : " A massive earthquake hit US" })
    }
  }
  static actions() {
    return {
      editBlog : function( blogId , blogContent , event , target ){
      console.log( event );    // Event Object
      console.log( target );   // target element
      alert( "Blog:" + blogId + "With content" + blogContent + "is Edited." );
      return false;            // Will stop event bubbling.
      }
    }
  }
}
export {BlogPost};
```

In general, event bubbling happens from the child to the parent component. To stop the event bubbling in the above code snippet, the action 'edit-blog' is made to return false.

Custom events handling

Custom events help you to carry out any functionality of your choice to the custom elements. Custom events are usually defined with a hyphen in it. For example, onClose is defined as on-close. While using in a template the camel case must be represented as hyphen values.

Custom events should contain at least one hyphen(-) in the name say, onClose is valid (whereas close is not valid). While using in a template the camel case will be represented as hyphen values. Say onClose will be used as on-close

```html
<template tag-name="blog-post">
   <span> {{title}} </span>
   <span onclick="{{action('editBlog',id, content)}}"> Edit </span>
   <span> {{content}} </span>
   <menu-bar on-close="{{action('onMenuClose')}}"> </menu-bar>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
      id : prop( "string" , { "default" : "1233" }),
      title : prop( "string" , { "default" : "Blog title" }),
      content : prop( "string" , { "default" : "Blog Content" })
    }
  }
  static actions() {
    return {
      onMenuClose : function(){
        return false; // will stop onClose event bubbling
      }
    }
  }
}
export {BlogPost};
```
```javascript
<template tag-name="menu-bar">
   <ul>
     <template lyte-for="{{menuItems}} as menuItem index">
         <li onclick="{{action("closeMenu")}}"> {{menuItem}} </li>
     </template>
   </ul>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class MenuBar extends Component {
  static actions() {
    return {
      closeMenu : function() {
        this.throwEvent( "on-close" ); // Throws onClose event
        return false;
      }
    }
  }
}
export {MenuBar};
```

Let's check how to throw a custom event (onClose) is thrown from menu-bar (childcomponent) to the parent component(blogPost).

In the above code snippet, on clicking the <li> element, the closeMenu action gets triggered. Inside the closeMenu, 'this.throwEvent' propogates the method 'on-close' to the parent(blog-post) component. And so the method 'onMenuClose' in the parent componet(blog-post) gets triggered. You can learn more about this.throwEvent here.

On using this.throwEvent and if false is returned in action, the propogation stops.

It is not mandated to explicitly specify listeners for custom events. If the parent contains onClose action and if the event is not stopped explicitly the same gets invoked.



Component - Router Action Handling

As shown above, the event bubbles from the child to all its parents. While using with lyte-router the custom events also pass through Slyte-routes.

For example: A route say route1 renders component tc-1 and a sub-route route2 (route1/route2) renders tc-2 , and another nested route route3 (route1/route2/route3) renders tc-3, which contains sub components tc-4 and tc-5. Now a close event is thrown from tc-5. The event bubbles as shown in the below diagram:

The event bubbles from tc-5 -> tc-4 -> tc3 -> route3 -> tc2 -> route2 -> tc1 -> route1.

Previous
Next

---

### components - component-events

Global Events

Global events are used to handle events between unrelated components and across the application(widgets). Let us consider an example where you need to notify a call creation to other widgets. You can do it with global events. It follows the pub-sub(publish-subscribe) pattern, where an n number of subscribers can listen to an event and react to the same.

Add Event Listener

You can add the listeners in two ways.

Method 1

You can add listeners to an event using the addEventListener function in app instance scope or addon instance scope. This function returns a unique listenerId, which can be used to remove the subscribed listener from the app or addon instance scope.

```javascript
var listenerId = this.$app.addEventListener( "callCreated" , function(){
   // Handles call creation
 });
 var listenerId2 = this.$addon.addEventListener( "callCreated" , function(){
  // Handles call creation
});
```

You can add listeners to an event using the addEventListener app scope. This function returns a unique listenerId, which can be used to remove the subscribed listener from the app or addon instance scope.

```javascript
import { TestApp } from "../app.js"
import { TestAddon } from "../addon.js"
  var listenerId = TestApp.addEventListener( "callCreated" , function(){
    // Handles call creation
  });
  var listenerId2 = TestAddon.addEventListener( "callCreated" , function(){
  // Handles call creation
});
```

Method 2

You can also add listeners in the template using lyte-event-listener element. The element takes two attributes, event-name and on-fire.

```html
<template tag-name="blog-post">
   <button onclick={{action('perform')}}>Submit</button>
   <lyte-event-listener event-name="callCreated" on-fire="{{ action('handleCallCreation')}}"/>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class TestComponent extends Component {
  static actions() {
    return {
      handleCallCreation : function(){
        alert("hello,how are you");
      },
      perform: function () {
        this.$app.triggerEvent("callCreated");
      }
      }
    }
  }
export {TestComponent};
```

When the callCreated event is triggered, the Component invokes handleCallCreation function.

Note: Listeners added in the template will be removed once the DOM node is removed from the document



Trigger Event

The triggerEvent function can be used to trigger a registered event in the app instance or addon instance scope. It takes the event name, followed by the arguments to be passed to the listener function in the app instance or addon instance scope

```javascript
this.$app.triggerEvent( "callCreated" , {
  "id" : 12334,
  "name" : "CustomerCall"
});
this.$addon.triggerEvent( "callCreated" , {
  "id" : 12334,
  "name" : "CustomerCall"
});
```

The triggerEvent function can be used to trigger a registered event in the app class or addon class scope. It takes the event name, followed by the arguments to be passed to the listener function in the app class or addon class scope

```javascript
import { TestApp } from "../app.js";
import { TestAddon } from "../addon.js";
TestApp.triggerEvent( "callCreated" , {
  "id" : 12334,
  "name" : "CustomerCall"
});
TestAddon.triggerEvent( "callCreated" , {
  "id" : 12334,
  "name" : "CustomerCall"
});
```
Remove Event Listener

The subscribed event can be removed using the removeEventListener function in the app instance or addon instance scope, it takes the listenerId as the argument.

```javascript
this.$app.removeEventListener( listenerId );
this.$addon.removeEventListener( listenerId );
```

The subscribed event can be removed using the removeEventListener function in the app class or addon class scope, it takes the listenerId as the argument.

```javascript
import { TestApp } from "../app.js";
import { TestAddon } from "../addon.js";
TestApp.removeEventListener( listenerId );
TestAddon.removeEventListener( listenerId );
```

Let's navigate to learn about life cycle hook..

Previous
Next

---

### components - life-cycle

Component Life Cycle

An added advantage of Components is that it comes with its own lifecycle with which you can attach the needed behavior to the life cycle. For example, certain behavior can be attached, when the element is inserted into the DOM didConnect is used, and a different behavior can be attached when it is removed from the DOM (didDestroy).

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComponent extends Component {
  constructor() {
    super();
  }
  init() {
    // Before the rendering process takes place
  }
  didConnect() {
    // After the rendering process is completed
  }
  didDestroy() {
    // After the component is destroyed / removed from the DOM
  }
}
export {UserComponent};
```
constructor

This constructor hook gets called before initializing the component.

init

This is called before the component is rendered. Any initialization-related design can be handled here.

didConnect

This is called after the component has been rendered completely and placed in the DOM

didDestroy

didDestroy hook gets called when the component is removed from the DOM.

onError

Whenever you set an erroneous value to a property of the component, the "onError" hook gets called.

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class SomeComponent extends Component {
  data() {
    return {
      Id : prop("number")
    }
  }
  onError() {
    // Handle error
  }
}
export {SomeComponent};
```

On the event of error occurance while setting the data in a component with setData(E.g. this.setData("someNumber", "someString") ), the "onError" hook of the component gets called.

Let's navigate to learn about observers..

Previous
Next

---

### components - observers

Observers

Observers are used to observe specific data properties of the component and to execute a function only whenever there is a change in the property. sLyte allows the Observers to get invoked when the value is set explicitly using any sLyte set methods and it will not be called when the data is loaded. If needed, the observer can be invoked during load using the "init" function.

single data

To observe a single property, the property name should be given in the observers hook as an argument as shown below in the example.

```html
<template tag-name="UserComp">
<p> Welcome to sLyte </p>
 <lyte-button onclick='{{action("perform")}}' >
   <template is="registerYield" yield-name="text">
    click to observer
   </template>
  </lyte-button>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
data() {
  return {
	firstName : prop("string")
   }
}
static actions() {
	return {
		perform: function () {
			debugger
			console.log("hello, WELCOME")
			this.setData('firstName', 'Rahul')
			this.setData("firstName", 'Nisha')
		}
	}
}
static observers() {
return {
	nameObserver : function(change){
	// Functionality to be executed when 'firstName' gets changed.
	// change is a object {type:"change",oldValue:"..",newValue:"..",item:".."}
	}.observes('firstName')
  }
 }
}
export {UserComp};
```

An object with the following keys will be received as an argument by the observer.

type - "change"
oldValue - contains the old value of the property before set
newValue -contains the new value that is being set
item - property name that is observed

multiple

To observe multiple properties, pass the property names with a comma separating them in the observers hook as shown below in the example. The observer gets called if any value of the given property changes.

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
	data() {
		return {
			firstName : prop("string"),
			lastName : prop("string")
		}
	}
	static observers() {
		return {
			nameObserver : function(change) {
				// Functionality to be executed when 'firstName' or 'lastName' gets changed.
				// change is a object {type:"change",oldValue:"..",newValue:"..",item:".."}.
			}.observes('firstName','lastName')
		}
	}
}
export {UserComp};
```

An object with the following keys will be received as an argument in the observer

type - "change"
oldValue - contains the old value of the property before set
newValue - contains the new value that is being set
item - property name that is observed

with init

The observers hook can also be set for the init callback, and it has to be set after the observe call as shown in the below code snippet. The variable being set in init and for the same variable if observe function is being set, no arguments can be obtained.

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
	init() {
		this.setData('firstName', 'Micheal')
	}
	data() {
		return {
			firstName : prop("string"),
			lastName : prop("string")
		}
	}
	static observers() {
		return {
			nameObserver:function(change) {
				// Functionality to be executed when 'firstName'or 'lastName' gets changed or during the init of the component.
				// change is a object {type:"change",oldValue:"..",newValue:"..",item:".."} called for observer.
				// change will be undefined for init
			}.observes('firstName','lastName').on('init')
		}
	}
}
export {UserComp};
```
nested property

By default, any array / object observer will be called only when the entire object / array property is changed. It will not be called for any nested data changes. To observe nested property changes, we can pass the nested property directly to the observes hook as shown in the example.

```html
<template tag-name="UserComp">
<p> Welcome to sLyte </p>
 <lyte-button onclick='{{action("perform")}}' >
   <template is="registerYield" yield-name="text">
    click to observer
   </template>
  </lyte-button>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
	data() {
	return {
	firstName: prop("string"),
    user: prop("object",{ "default": { "name": "ABC",   "id": "one" } })
	 }
	}
	static actions() {
		return {
		perform: function () {
			console.log("hello, WELCOME")
			this.$app.objectUtils(this.getData('user'), 'add', 'name', 'xyz')
			this.$app.objectUtils(this.getData('user'), 'add', 'id', 'four')
			}

		}
	}
	static observers() {
		return {
			nameObserver:function(change) {
				// Functionality  will get changed when user.name or user.id gets changed.
				// change is an object {type:"change",oldValue:"..",newValue:"..",item:".."} called for observer.

			}.observes('user.name','user.id')
		}
	}
}
export {UserComp};
```
```html

													   

													  
```

You can find the following fields

type - "change"
oldValue - old value of the property before set
newValue - new value that is being set
item - nested property name that is observed

array

To observe any changes that are made to the array via arrayUtils ( like push / pop / splice / insertAt / removeAt etc), we can pass the array notation along with the specific property name as shown below in the example

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
	data() {
		return {
			arr : prop("array"),
			obj : prop("object", {"default" : {
				"key1" : {
					"key2" : []
				}
			}})
		}
	}
	static observers() {
		return {
			arrObserver:function(change) {
					// Functionality to be executed when there is any change in array arr.
					// For array observer, change is a object
					// { type : "array" , insertedItems : [] , removedItems : [] , index : ".." , item : ".." }
			}.observes('arr.[]'),
				anotherObserver:function(change) {
					// Functionality to be executed when there is any change in array arr in obj.key1.key2.
					// For array observer, change is a object
					// { type : "array" , insertedItems : [] , removedItems : [] , index : ".." , item : ".." }
			}.observes('obj.key1.key2.[]')
		}
	}
}
export {UserComp};
```

You can find the following fields.

type - "array"
insertedItems - [ values that are inserted ]
removedItems - [ values that are removed ]
index - index number where the changes are happening
item - property name

array length

Array Length will observe changes only when there is a change in the length of the array that are made via arrayUtils ( like push / pop / splice / insertAt / removeAt etc), we can pass as ".length" along with the specific property name as shown below in the example

type - "change"
oldValue - [ length of the array before updation]
newValue - [ length of the array after updation ]
item - property name

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {

	static observers() {
		return {
			arrObserver:function(change) {
				// Functionality to be executed when there is any change in the length of the array arr.
				// For array observer, change is a object
				// { type : "change" , oldValue : old array length , newValue : new array length , item : ".." }
			}.observes('arr.length'),
			anotherObserver:function(change) {
				// Functionality to be executed when there is any change in the length of the array arr in obj.key1.key2.
				// For array observer, change is a object
				// { type : "change" , oldValue : old array length , removedItems : new array length , item : ".." }
			}.observes('obj.key1.key2.length'),
		}

	}
}
export {UserComp};
```
deep

For any array/object property defined with the watch option, deep observer (.*) can be defined. It will be called for any nested property value change using set/ arrayUtils.

For any nested property change using set

type - "deepChange"
oldValue - old value of the property before set
newValue - new value that is being set
item - nested property name that is observed
path - path of the property that is changed
data - data of the property

For changes in array using arrayUtils

type - "deepChange"
insertedItems - [ values that are inserted ]
removedItems - [ values that are removed ]
index - index number where the changes are happening
path - path of the property that is changed
data - data of the property

```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {

	static observers() {
		return {
			data:function() {
				obj:prop("object", {watch:true})
			},
			arrObserver:function(change) {
				// Functionality to be executed when there is any deep change in obj.
			}.observes('obj.*')
		};

	}
}
```
JsonPath

With the JsonPath support, you can observe the given path of the object or an array in component's data or in model records. And the syntax to do so is

'$' - The root object/element
'.' - child keys
'*' - all objects/elements
'..' - Recursive operator / nested level of objects
'[]' - item of the array

Here is a sample data from which you can use the syntax to obtain the following.

"$.store.books" - With this, you get the list of books
"$.store..author" - With this, you get the list of authors for all the nested level objects.
"$.store.*" - With this, you get the details of all objects/ arrays used in the below code.
"$.store.books[0] - With this, you get the particular array details."
```javascript
store = {
	"books": [
	{
		"category": "reference",
		"author": "Nigel Rees",
		"title": "Sayings of the Century",
		"price": 8.95
	}, {
		"category": "fiction",
		"author": "Evelyn Waugh",
		"title": "Sword of Honour",
		"price": 12.99
	}, {
		"category": "fiction",
		"author": "Herman Melville",
		"title": "Moby Dick",
		"isbn": "0-553-21311-3",
		"price": 8.99
	}, {
		"category": "fiction",
		"author": "J. R. R. Tolkien",
		"title": "The Lord of the Rings",
		"isbn": "0-395-19395-8",
		"price": 22.99
	}
	],
	"bicycle": {
	"color": "red",
	"price": 19.95
	}
}
```

On looking at the below code, you can understand how a JsonPath is implemented in a component.

```javascript
import {Component} from "@slyte/component";
import { prop } from "@slyte/core";
import { Schema } from "@slyte/data";
import { crmDb } from "/data-store/db";


class ObserversWatch extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			obj1 : prop("object" ), //linear level deepObserver
			arr1 : prop("array" ),
			obj2 : prop("object"),//nested level deepObserver
			arr2 : prop("array"),
			obj3 : prop("object" ),// nested all scope
			arr3 : prop("array" )
		}
	}
	init(){
		//sample data for watch
		this.setData("obj1",{ str : "string" , obj : { a: "string" , b: "string" , c : [0,1,2,3] } , arr : ["string1" , "string2" , "string2" , "string3"]});
		this.setData("arr1",[{obj:{a: 1 , b : 2 , c:[1,2,3]}},{obj:{a: 1 , b : 2 , c:[1,2,3]}},{obj:{a: 1 , b : 2 , c:[1,2,3]}}])
		this.setData("obj2" ,{ str : "string" , obj : { a : "string" , b : "string" , c:{ c1 : "string" , c2 : "string" , c3 : [ {a : "string1" } , {a :"string2"} , {a : "string3"}, {a : "string4"} ]}}})
		this.setData("arr2" , ["string" , {a : { a1 : { a2 : "string"} , a : {a : "string"} } } , {a1 : [ { a: "string"} , {a : "string"}]} ] ),
		this.setData("obj3" ,{obj : { obj1  : { obj2 : {obj3 : "string"} , obj3 : { obj3 : "string" }}}})
		this.setData("arr3" ,[{obj : { obj1  : { obj2 : {obj3 : "string"} , obj3 : { obj3 : "string" }}}},{obj : { obj1  : { obj2 : {obj3 : "string"} , obj3 : { obj3 : "string" }}}},{obj : { obj1  : { obj2 : {obj3 : "string"} , obj3 : { obj3 : "string" }}}},{obj : { obj1  : { obj2 : {obj3 : "string"} , obj3 : { obj3 : "string" }}}}]);
		this.setData("nowatch1",{ a : { b : {c1 : "test" , c2 : "test" , c3 : { check : "test" } } } } );
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {

		}
	}

	static observers() {
		return {
			obs1 : function(){


			}.observes("$.obj1.str" , "$.obj1.obj.a" , "$.obj1.arr"),
			obs2 : function(){


			}.observes("$.arr1[0].obj.b" , "$.arr1[2].obj.c"),
			obs3 : function(){


			}.observes('$.obj2..a'),
			obs4 : function(){


			}.observes('$.arr2..a'),
			obs5 : function(){

			}.observes('$.obj3.obj..*'),
			obs6 : function(){

			}.observes("$.arr3[0]..*","$.arr3[2]..*","$.arr3[5]"),
		}
	}

}

export {ObserversWatch};



//schema definition

class ObserversWatch extends crmDb.Schema{
				props(){
				  return {
						id : prop("string"),
						obj1 : prop("object"),
						obj2 : prop("object"),
						obj3 : prop("object"),
						// Array data definition
						arr1 : prop("array"),
						arr2 : prop("array"),
						arr3 : prop("array"),
						str : prop("string")
					  }
				}
				static observers(){
					return {
						obs_obj1 :function(){
							console.log(arguments)
						}.observes("$.obj1.obj1_a.obj_a_a.obj_a_a_a[0].a" , "$.obj1.obj1_a.obj_a_a.obj_a_a_a[1].c.*" , "$.obj1.obj1_a.obj_a_b.obj_a_b_a[0].b.*" , "$.obj1.obj1_a.obj_a_c..*" , "$.obj1..obj1_b..a"),

						obs_obj2 : function(){
							console.log(arguments)
						}.observes("$.obj2.obj2_a..obj_a_1" , "$.obj2.obj2_b..a" , "$.obj2.obj2_b.a[2]" , "$.obj2.obj2_b.a[1].a.*"),

						obs_obj3 : function(){
							console.log(arguments)
						}.observes("$.obj3..obj3"),

						obs_arr : function(){
							console.log(arguments);
						}.observes("$.arr1[0]","$.arr1[1].[0].[0].[2]","$.arr1[1].[0]","$.arr1[1].[2]","$.arr2..[0]","$.arr3[0]","$.arr3[1]" ,"$.arr3[3]")

					}
				}
			}
```

Let's navigate to learn about directives.

Previous
Next

---

### components - directives

Custom Directives
Introduction

Directives are used to create your own custom Attribute Directives for any desired functionality and styling of element as desired. sLyte provides callback during various stages of the element like before-append, on-append, after-append ,before-remove, on-remove, after-remove. So whenever the element is removed or appended on the DOM using framework, the respective callbacks will be triggered. To specify a custom directive , you need to start the attribute name with "@" followed by attribute value which will be passed as argument to callbacks.

Directive can be created with CLI command
lyte generate directive directiveName
And the file gets generated at the path "\components\directives\directiveName".

Example
```javascript
import { Directive } from "@slyte/component";
class Fade extends Directive {
	beforeAppend({node,dependentPromises,initial,state}){
		console.log("beforeappend",node)
		node.setAttribute('class','fade2');
	}
	onAppend({node,dependentPromises,initial,state}){
		console.log("onappend",node)
		var timeoutId = setTimeout(function(){
			node.classList.add('in')
			clearTimeout(timeoutId);
		}.bind(node), 2000);
	}
	afterAppend({node,dependentPromises,initial,state}){
		console.log("afterAppend",node)
	}
	beforeRemove({node,childPromise,previousSiblingPromise,state}){
		let node = event.node;
		console.log("beforeRemove",node)
	}
	onRemove({node,childPromise,previousSiblingPromise,done,state}){
		var ev = event;
		var node = ev.node;
		node.setAttribute('class','fade5s away');
		var timeoutId = setTimeout(function(){
			clearTimeout(timeoutId);
			done();
		},2000)
	}
	afterRemove({node,childPromise,previousSiblingPromise,state}){
		let node = event.node;
		console.log("afterRemove",node)
	}
}
export {Fade};
```
```html
<template tag-name="welcome-comp">
	<span @fade> fading content </span>
</template>
```

So whenever the element is appended or removed from the DOM , the respective callbacks gets called.

Directive Hooks
beforeAppend

This is called before appending the directive element to the DOM.

onAppend

This is called immediately after appending the directive element on the dom.

afterAppend

This is called after appending the directive element on the DOM and after all other's onAppend hooks execution.

beforeRemove

This hook can be used before removing the element from the DOM.

onRemove

This is called before removing the element from the DOM and promise will be passed as argument. Only after resolving the promise the element will get removed from DOM (if resolving takes time more than 5secs or resolve is not called, then sLyte will resolve it by default)

afterRemove

This hook can be called after removing the element from DOM.

Promises

Promises are provided for the element removal to achieve transition and animations through it. So while resolving promise, "on-before" hook will trigger node removal and then "after-remove" hook will be called . When there is nested and sibling directives those promise will be passed as argument in order to hold and resolve promises based on user requirement. Parent directive node removal will never wait for child directives promise for removing node so user must handle with childPromises whether to wait or resolve earlier.

Arguments

Custom attribute's value is passed as argument for callbacks , the argument value can be string or dynamic data or helper value. In the below example, a directive is configured to a span node which is passed with static and dynamic arguments which will be invoked from "this.config" when the hooks executed.

```html
<template tag-name="welcome-comp">
	<span @fade=1000> fading content </span>
	<span @fade={{dynamicValue}}> fading content </span>
	<span @fade={{helperValue()}}> fading content </span>
</template>
```
```javascript
import { Directive } from "@slyte/component";
class Fade extends Directive {
	beforeAppend({node,dependentPromises,initial,state}){
		console.log("beforeappend",node,this.config)
		node.setAttribute('class','fade2');
	}
	onAppend({node,dependentPromises,initial,state}){
		console.log("onappend",node)
		var timeoutId = setTimeout(function(){
			node.classList.add('in')
			clearTimeout(timeoutId);
		}.bind(node), this.config);
	}
	afterAppend({node,dependentPromises,initial,state}){
		console.log("afterAppend",node,this.config)
	}
	beforeRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("beforeRemove",node,this.config)
	}
	onRemove({node,childPromise,previousSiblingPromise,done,state}){
		node.setAttribute('class','fade5s away');
		var timeoutId = setTimeout(function(){
			clearTimeout(timeoutId);
			done();
		},this.config)
	}
	afterRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("afterRemove",node,this.config)
	}
}
export {Fade};
```
Params

Params in the hook methods will contain several informations as follows.

state :
returns the state of the node
node :
returns the directive element
initial :
returns true whenever a component is newly rendered in DOM for the first time.
dependentPromises :
On toggling an'if check' the list of removing directives promises are passed to appending callbacks.
childPromise :
If a directive is added to a node which might have childnodes with other directive attributes, On toggling the parent dynamic content, the promises of the child content will be returned as array of direct childPromise (child's child promise will not be available).
previousSiblingPromise :
If a directive is added to a node which might have childnodes with other directive attributes, On toggling the parent dynamic content, the callback will be called for every directive node. In that case, the promise of previously removing directive will be returned here.
Hooks order

The order in which the hooks are called is explained with an example below.

Example
```html
<template tag-name="welcome-comp">
	<div lyte-if="{{truedata}}">
		<div id="red" @"my-transition-red" = "500">
		  promise resolved in 500ms
		</div>
	<div id="blue" @"my-transition-blue" = "2000">
		promise resolved in 2000ms
	</div>
	<div id="green" @"my-transition-green" = "1000">
		promise resolved in 1000ms
	</div>
	</div>
</template>
```
```javascript
import { Directive } from "@slyte/component";
class MyTransitionRed extends Directive {
	beforeAppend({node,dependentPromises,initial,state}){
		console.log("beforeappend",node)
		node.setAttribute('class','fade2');
	}
	onAppend({node,dependentPromises,initial,state}){
		console.log("onappend",node)
		var timeoutId = setTimeout(function(){
			node.classList.add('in')
			clearTimeout(timeoutId);
		}.bind(node), this.config);
	}
	afterAppend({node,dependentPromises,initial,state}){
		console.log("afterAppend",node)
	}
	beforeRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("beforeRemove",node)
	}
	onRemove({node,childPromise,previousSiblingPromise,done,state}){
		node.setAttribute('class','fade5s away');
		var timeoutId = setTimeout(function(){
			clearTimeout(timeoutId);
			done();
		},this.config)
	}
	afterRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("afterRemove",node)
	}
}
export {MyTransitionRed};
```
```javascript
import { Directive } from "@slyte/component";
class MyTransitionBlue extends Directive {
	beforeAppend({node,dependentPromises,initial,state}){
		console.log("beforeappend",node)
		node.setAttribute('class','fade2');
	}
	onAppend({node,dependentPromises,initial,state}){
		console.log("onappend",node)
		var timeoutId = setTimeout(function(){
			node.classList.add('in')
			clearTimeout(timeoutId);
		}.bind(node), this.config);
	}
	afterAppend({node,dependentPromises,initial,state}){
		console.log("afterAppend",node)
	}
	beforeRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("beforeRemove",node)
	}
	onRemove({node,childPromise,previousSiblingPromise,done,state}){
		node.setAttribute('class','fade5s away');
		var timeoutId = setTimeout(function(){
			clearTimeout(timeoutId);
			ev.done();
		},this.config)
	}
	afterRemove({node,childPromise,previousSiblingPromise,state}){
		let node = event.node;
		console.log("afterRemove",node)
	}
}
export {MyTransitionBlue};
```
```javascript
import { Directive } from "@slyte/component";
class MyTransitionGreen extends Directive {
	beforeAppend({node,dependentPromises,initial,state}){
		console.log("beforeappend",node)
		node.setAttribute('class','fade2');
	}
	onAppend({node,dependentPromises,initial,state}){
		console.log("onappend",node)
		var timeoutId = setTimeout(function(){
			node.classList.add('in')
			clearTimeout(timeoutId);
		}.bind(node), this.config);
	}
	afterAppend({node,dependentPromises,initial,state}){
		console.log("afterAppend",node)
	}
	beforeRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("beforeRemove",node)
	}
	onRemove({node,childPromise,previousSiblingPromise,done,state}){
		node.setAttribute('class','fade5s away');
		var timeoutId = setTimeout(function(){
			clearTimeout(timeoutId);
			ev.done();
		},this.config)
	}
	afterRemove({node,childPromise,previousSiblingPromise,state}){
		console.log("afterRemove",node)
	}
}
export {MyTransitionGreen};
```
Append order

On rendering a component with directive elements , "before-append" callback of all directive elements will be called and followed by "on-append" and then "after-append".

"before-append" of "my-transition-red" will be called first followed by
"before-append" of "my-transition-blue" will be called next followed by
"before-append" of "my-transition-green" will be called next followed by
"on-append" of "my-transition-red" will be called next followed by
"on-append" of "my-transition-blue" will be called next followed by
"on-append" of "my-transition-green" will be called next followed by
"after-append" of "my-transition-red" will be called next followed by
"after-append" of "my-transition-blue" will be called next followed by
"after-append" of "my-transition-green" will be called next.


Have a look at the below image for better understanding 

"Append-order" with child components and yield: "before-append" of parent directive will be called first followed by "before-append" child directive (inside lyte-yield) will be called next followed by "on-append" of child directive (inside lyte-yield) will be called next followed by "after-append" of child directive (inside lyte-yield) will be called next followed by "on-append" of parent directive will be called next followed by "after-append" of parent directive will be called.

Removal order

On removing the directive element from DOM , the removal order takes place from bottom to top order. On toggling truedata the flow is as follows.

"before-remove" of "my-transition-green" will be called first followed by
"on-remove" of "my-transition-green" will be called next followed by
"before-remove" of "my-transition-blue" will be called next followed by
"on-remove" of "my-transition-blue" will be called next followed by
"before-remove" of "my-transition-red" will be called next followed by
"on-remove" of "my-transition-red" will be called next followed by
"after-remove" of "my-transition-red" will be called next followed by
"after-remove" of "my-transition-green" will be called next followed by
"after-remove" of "my-transition-blue" will be called.


Have a look at the below image for better understanding 

Previous
Next

---

### components - shadow-dom

Shadow DOM

An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page. This is acheived with Shadow DOM. Shadow DOM also helps to keep the code clean and nice.

sLyte shadow

You have the fullest ability to define a component with Shadow DOM through directives. Have a look at the below code snippet to see how it is done.

```html
<template tag-name="welcome-comp">
	<user-comp @shadow> </user-comp>
	<user-comp @shadow={{value}}> </user-comp>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class WelcomeComp extends Component {
	data() {
		return {
			value : prop("boolean")
		}
	}
}
export {WelcomeComp};
```
```html
<template tag-name="user-comp" @shadow-supported>
	<div> content inside shadow DOM</div>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComp extends Component {
	data() {
		return {
			value : prop("boolean")
		}
	}
}
export {UserComp};
```

The component (user-comp) to which the shadow is being applied, should allow the shadow implementation by adding "@shadow-supported" attribute in the template tag of its html file (user-comp.html).

directiveName - "@shadow"
dataType - boolean
true data - applies shadow DOM and scope its style inside it
false/undefined data - dont applies any shadowDOM and its style will be applied in document.head

Making a component as shadow component, can be achieved through instance's directive attribute. We can also pass dynamic value as argument to the shadow directive. You can check if the component has used Shadow DOM, only in the didconnect callback of sLyte. This is because it gets applied to a component only after init callback. The components inside shadow component, may or may not be shadow component, depending on its "@shadow" directive attributes. Suppose if the child component is a non shadow component, then its style will be appended on its shadow parent component (whereas the style will be applied to entire shadow boundary).


Style handling

In V3, usually the component styles will be appended to the head during component registration, but the framework knows whether the component is shadow or not in instance level, so based on lyte shadow data, the style will be either appended on head or will be appended inside the shadow component.

If a non shadow component comes inside a shadow component then its style will be inside its shadow parent's component.

If repeated nonshadow component comes inside shadow component, then multiple style will not be appended in parent shadow component. Rather only one time the style of repeated nonshadow component will be appended.

If multiple non shadow component comes inside non shadow component without any parent shadow component, then non shadow component's style will be appended only onetime on the head of the document.

sLyte shadow style

There is a provision for shadow component where we can pass their style to shadow DOM as @shadow-style="css" from attribute or data where the framework will create style tag and append it inside shadow component.

```html
<template tag-name="welcome-comp" >
	<user-comp @shadow=true @shadow-style="p{color:red}"> </user-comp>
</template>
```
```html
<welcome-comp >
	<user-comp>
	  <style>
	   p {color : red}
	  <div> content </div>
	</user-comp>
</welcome-comp>
```

directiveName - "@shadow-style"
dataType - string
desc - creates style tag with passed content and append it inside a shadow component

Yield handling

When a yield content is inserted in a shadow component, then the lyte-yield will be placed as a shadow component along with its yield styles (style of the component, where the template is="registeryield" is present).

There is a provision for lyte yield shadow component where they can pass their style to shadow DOM as @shadow-style="css" using attribute or data. Consider the following example.

```html
<template tag-name="shadow-yield1">
	<shadow-yield2 @shadow=true>
		<template is="yield" yield-name="name">
			<p id="sd22"class="sd1">this is header1</p>
			<p>this is header2</p>
		</template>
	</shadow-yield2>
</template>
```
```html
<template tag-name="shadow-yield2">
	<div> shadow-yield2 content</div>
	<lyte-yield yield-name="name" @shadow-style="p{color:red}">
	</lyte-yield>
</template>
```
```html
<shadow-yield1>
	<shadow-yield2 @shadow=true>
		// shadow
			<div> shadow-yield2 content</div>
			<lyte-yield yield-name="sd3" @shadow-style="p{color:red}">
				// shadow
				<style> // style of shadow-yield1 </style>
				<style> p{color:red} </style>
				<p id="sd22"class="sd1">this is header1</p>
					<p>this is header2</p>
			</lyte-yield>
	</shadow-yield2>
</shadow-yield1>
```
Access shadow

The content of a shadow component can't be queryselected directly, instead you need to queryselect the shadow component and then access its shadowRoot using element.shadowRoot and then queryselect the required element. For Example: document.querySelector("welcome-comp").shadowRoot.querySelector("welcome-child-comp") So this will return the welcome-child-comp element. If we need the host element then do "element.getRootNode()" , which will return its parent shadowRoot and then you can access the component tag using "shadowRoot.host".

Best practices

Applying shadow DOM for nested micro level components, like lyte-button, lyte-text is not recommended.

Shadow DOM must be used for widget like components (Scoping for bunch of components together as a substitute for iframe)

When an external script, library or extension are used to parse lyte shadow content then we have to make sure it supports shadow content. There are many 3rd party libraries (or extensions) that won't work with Shadow DOM content because they were not designed to deal with it, or need some additional configuration to work with Shadow DOM.

Let's navigate to learn about Server side rendering.

Previous
Next

---

### components - viewport

Viewport
What is a viewport

Viewport rendering is a process where the framework will render the actual content only when the content came in to the view port (display). Assume we are rendering huge number of heavy components at once which may takes some time. sLyte allows you to make use of the view port activation of components, so user can define a placeholder content and actual content in the component. Onscrolling, the view will update the placeholder content and will render the actual content. Viewport can be implemented in two ways, Viewport can be applied to entire component or Viewport can be applied to set of html contents inside a component.

Note:

Viewport will work based on browser's getBoundRectClient and so placeholder content should have the same height and width of the actual content.

viewport for elements

Viewport can be implemented to set of elements using @view-in directive. To the actual content of the element inside the component's html file as shown in example, add @view-in and to the loading content, add @view-out. By default, if no configs are provided, the viewport will be enabled for those elements. If we want to disable viewPort for the elements based on some condition , then we can pass the boolean value. These boolean value will be considered as a flag for disabling it. On passing true, the viewport gets disabled.

```html
<template tag-name="welcome-comp"></template>
  <lyte-table lt-prop-yield = true>
    <template is = 'registerYield' yield-name = 'yield'>
      <lyte-table-structure>
        <lyte-thead>
          <lyte-tr>
            <template lyte-for="{{headerJSON}} as list,indexVal" >
              <lyte-th>{{list.name}} </lyte-th>
            </template>
          </lyte-tr>
        </lyte-thead>
        <lyte-tbody>
          <template lyte-for="{{contentJSON}} as list,indexVal" >
              <lyte-tr @view-in style="width: 1554.91px; height: 48.1818px;">
              <!-- actual content , assuming "lyte-td" as heavy component -->
                <template lyte-for="{{headerJSON}} as header,indexVal" >
                  <lyte-td>
                      {{list[header.body]}}
                  </lyte-td>
                </template>
              </lyte-tr>
              <lyte-tr @view-out>
              <!-- loading content or place holder content -->
                <template lyte-for="{{headerJSON}} as header,indexVal" >
                  <lyte-td style="padding: 5px;">
                    <div style="background-color: #f7f7f7; height: 25px;"></div>
                  </lyte-td>
                </template>
              </lyte-tr>
            </template>
        </lyte-tbody>
      </lyte-table-structure>
    </template>
  </lyte-table>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class WelcomeComp extends Component {
  data() {
    return return {
      headerJSON : prop ( 'array' , { default : [
        { name : 'No' , body : 'serial' },
        { name : 'Place' , body : 'place' }, // 'name' is headerLabelKey and 'body' is bodyLabelKey
        { name : 'Famous' , body : 'name' },
        { name : 'Architecture' , body : 'Architecture' },
        { name : 'King' , body : 'King' }
      ] } ),
      contentJSON : prop ( 'array' , { default : [{
        name: "Taj mahal",
        serial: '1',
        place: 'Agra',
        id: '17',
        class: '1648',
        Architecture: 'Mughal',
        King: 'Shajahan',
        Dyansty: 'Moghul'
        }, {
        name: "Mysore palace",
        serial: '2',
        place: 'Mysore',
        id: '20',
        class: '1912',
        Architecture: 'Indo-Saracenic Revival ',
        King: 'Krishnaraja udaiyar',
        Dyansty: 'Wadiyar'
        }, {
        name: "Brihadheeswara temple",
        serial: '3',
        place: 'Tanjore',
        id: '11',
        class: '1010',
        Architecture: 'dravidian',
        King: 'Raja raja chola',
        Dyansty: 'Chozha'
        }, {
        name: "Hawa mahal",
        serial: '4',
        place: 'Jaipur',
        id: '18',
        class: '1799',
        Architecture: 'Rajput - Islamic',
        King: ' Sawai Pratap Singh',
        Dyansty: 'Rajput'
        }, {
        name: "Bahai temple",
        serial: '5',
        place: 'Delhi',
        id: '20',
        class: '1986',
        Architecture: 'Expressionist',
        King: 'Fariborz Sahba',
        Dyansty: '-'
        }, {
        name: "Victoria memorial",
        serial: '6',
        place: 'Kolkatta',
        id: '20',
        class: '1906',
        Architecture: 'Indo-Saracenic Revival',
        King: 'Lord curzon',
        Dyansty: 'British Governor general'
        }, {
        name: "Qutub minar",
        serial: '7',
        place: 'Delhi',
        id: '13',
        class: '1206',
        Architecture: 'Indo-Islamic',
        King: 'Qutab Ud-Din-Aibak',
        Dyansty: 'Sultan - Mamluk'
        }, {
        name: "Sanchi stupa",
        serial: '8',
        place: 'Sanchi',
        id: 'BC 3',
        class: '261',
        Architecture: 'Buddhist',
        King: 'Asoka',
        Dyansty: 'Mauriya'
        }, {
        name: "Shore temple",
        serial: '9',
        place: 'Mamallapuram',
        id: '8',
        class: '728',
        Architecture: 'dravidian',
        King: 'Raja simha',
        Dyansty: 'Pallava'
        }, {
        name: "Meenakshi Sundareshwarar temple",
        serial: '10',
        place: 'Madurai',
        id: '1',
        class: '-',
        Architecture: 'dravidian',
        King: '-',
        Dyansty: 'Pandia'
        }, {
        name: "Taj mahal",
        serial: '11',
        place: 'Agra',
        id: '17',
        class: '1648',
        Architecture: 'Mughal',
        King: 'Shajahan',
        Dyansty: 'Moghul'
        }, {
        name: "Mysore palace",
        serial: '12',
        place: 'Mysore',
        id: '20',
        class: '1912',
        Architecture: 'Indo-Saracenic Revival ',
        King: 'Krishnaraja udaiyar',
        Dyansty: 'Wadiyar'
        }, {
        name: "Brihadheeswara temple",
        serial: '13',
        place: 'Tanjore',
        id: '11',
        class: '1010',
        Architecture: 'dravidian',
        King: 'Raja raja chola',
        Dyansty: 'Chozha'
        }, {
        name: "Hawa mahal",
        serial: '14',
        place: 'Jaipur',
        id: '18',
        class: '1799',
        Architecture: 'Rajput - Islamic',
        King: ' Sawai Pratap Singh',
        Dyansty: 'Rajput'
        }, {
        name: "Bahai temple",
        serial: '15',
        place: 'Delhi',
        id: '20',
        class: '1986',
        Architecture: 'Expressionist',
        King: 'Fariborz Sahba',
        Dyansty: '-'
        }, {
        name: "Victoria memorial",
        serial: '16',
        place: 'Kolkatta',
        id: '20',
        class: '1906',
        Architecture: 'Indo-Saracenic Revival',
        King: 'Lord curzon',
        Dyansty: 'British Governor general'
        }, {
        name: "Qutub minar",
        serial: '17',
        place: 'Delhi',
        id: '13',
        class: '1206',
        Architecture: 'Indo-Islamic',
        King: 'Qutab Ud-Din-Aibak',
        Dyansty: 'Sultan - Mamluk'
        }, {
        name: "Sanchi stupa",
        serial: '18',
        place: 'Sanchi',
        id: 'BC 3',
        class: '261',
        Architecture: 'Buddhist',
        King: 'Asoka',
        Dyansty: 'Mauriya'
        }, {
        name: "Shore temple",
        serial: '19',
        place: 'Mamallapuram',
        id: '8',
        class: '728',
        Architecture: 'dravidian',
        King: 'Raja simha',
        Dyansty: 'Pallava'
        }, {
        name: "Meenakshi Sundareshwarar temple",
        serial: '20',
        place: 'Madurai',
        id: '1',
        class: '-',
        Architecture: 'dravidian',
        King: '-',
        Dyansty: 'Pandia'
        }, {
        name: "Taj mahal",
        serial: '21',
        place: 'Agra',
        id: '17',
        class: '1648',
        Architecture: 'Mughal',
        King: 'Shajahan',
        Dyansty: 'Moghul'
        }, {
        name: "Mysore palace",
        serial: '22',
        place: 'Mysore',
        id: '20',
        class: '1912',
        Architecture: 'Indo-Saracenic Revival ',
        King: 'Krishnaraja udaiyar',
        Dyansty: 'Wadiyar'
        }, {
        name: "Brihadheeswara temple",
        serial: '23',
        place: 'Tanjore',
        id: '11',
        class: '1010',
        Architecture: 'dravidian',
        King: 'Raja raja chola',
        Dyansty: 'Chozha'
        }, {
        name: "Hawa mahal",
        serial: '24',
        place: 'Jaipur',
        id: '18',
        class: '1799',
        Architecture: 'Rajput - Islamic',
        King: ' Sawai Pratap Singh',
        Dyansty: 'Rajput'
        }, {
        name: "Bahai temple",
        serial: '25',
        place: 'Delhi',
        id: '20',
        class: '1986',
        Architecture: 'Expressionist',
        King: 'Fariborz Sahba',
        Dyansty: '-'
        }, {
        name: "Victoria memorial",
        serial: '26',
        place: 'Kolkatta',
        id: '20',
        class: '1906',
        Architecture: 'Indo-Saracenic Revival',
        King: 'Lord curzon',
        Dyansty: 'British Governor general'
        }, {
        name: "Qutub minar",
        serial: '27',
        place: 'Delhi',
        id: '13',
        class: '1206',
        Architecture: 'Indo-Islamic',
        King: 'Qutab Ud-Din-Aibak',
        Dyansty: 'Sultan - Mamluk'
        }, {
        name: "Sanchi stupa",
        serial: '28',
        place: 'Sanchi',
        id: 'BC 3',
        class: '261',
        Architecture: 'Buddhist',
        King: 'Asoka',
        Dyansty: 'Mauriya'
        }, {
        name: "Shore temple",
        serial: '29',
        place: 'Mamallapuram',
        id: '8',
        class: '728',
        Architecture: 'dravidian',
        King: 'Raja simha',
        Dyansty: 'Pallava'
        }, {
        name: "Meenakshi Sundareshwarar temple",
        serial: '30',
        place: 'Madurai',
        id: '1',
        class: '-',
        Architecture: 'dravidian',
        King: '-',
        Dyansty: 'Pandia'
        }, {
        name: "Taj mahal",
        serial: '31',
        place: 'Agra',
        id: '17',
        class: '1648',
        Architecture: 'Mughal',
        King: 'Shajahan',
        Dyansty: 'Moghul'
        }, {
        name: "Mysore palace",
        serial: '32',
        place: 'Mysore',
        id: '20',
        class: '1912',
        Architecture: 'Indo-Saracenic Revival ',
        King: 'Krishnaraja udaiyar',
        Dyansty: 'Wadiyar'
        }, {
        name: "Brihadheeswara temple",
        serial: '33',
        place: 'Tanjore',
        id: '11',
        class: '1010',
        Architecture: 'dravidian',
        King: 'Raja raja chola',
        Dyansty: 'Chozha'
        }, {
        name: "Hawa mahal",
        serial: '34',
        place: 'Jaipur',
        id: '18',
        class: '1799',
        Architecture: 'Rajput - Islamic',
        King: ' Sawai Pratap Singh',
        Dyansty: 'Rajput'
        }, {
        name: "Bahai temple",
        serial: '35',
        place: 'Delhi',
        id: '20',
        class: '1986',
        Architecture: 'Expressionist',
        King: 'Fariborz Sahba',
        Dyansty: '-'
        }, {
        name: "Victoria memorial",
        serial: '36',
        place: 'Kolkatta',
        id: '20',
        class: '1906',
        Architecture: 'Indo-Saracenic Revival',
        King: 'Lord curzon',
        Dyansty: 'British Governor general'
        }, {
        name: "Qutub minar",
        serial: '37',
        place: 'Delhi',
        id: '13',
        class: '1206',
        Architecture: 'Indo-Islamic',
        King: 'Qutab Ud-Din-Aibak',
        Dyansty: 'Sultan - Mamluk'
        }, {
        name: "Sanchi stupa",
        serial: '38',
        place: 'Sanchi',
        id: 'BC 3',
        class: '261',
        Architecture: 'Buddhist',
        King: 'Asoka',
        Dyansty: 'Mauriya'
        }, {
        name: "Shore temple",
        serial: '39',
        place: 'Mamallapuram',
        id: '8',
        class: '728',
        Architecture: 'dravidian',
        King: 'Raja simha',
        Dyansty: 'Pallava'
        }, {
        name: "Meenakshi Sundareshwarar temple",
        serial: '40',
        place: 'Madurai',
        id: '1',
        class: '-',
        Architecture: 'dravidian',
        King: '-',
        Dyansty: 'Pandia'
        }, {
        name: "Taj mahal",
        serial: '41',
        place: 'Agra',
        id: '17',
        class: '1648',
        Architecture: 'Mughal',
        King: 'Shajahan',
        Dyansty: 'Moghul'
        }, {
        name: "Mysore palace",
        serial: '42',
        place: 'Mysore',
        id: '20',
        class: '1912',
        Architecture: 'Indo-Saracenic Revival ',
        King: 'Krishnaraja udaiyar',
        Dyansty: 'Wadiyar'
        }, {
        name: "Brihadheeswara temple",
        serial: '43',
        place: 'Tanjore',
        id: '11',
        class: '1010',
        Architecture: 'dravidian',
        King: 'Raja raja chola',
        Dyansty: 'Chozha'
        }, {
        name: "Hawa mahal",
        serial: '44',
        place: 'Jaipur',
        id: '18',
        class: '1799',
        Architecture: 'Rajput - Islamic',
        King: ' Sawai Pratap Singh',
        Dyansty: 'Rajput'
        }, {
        name: "Bahai temple",
        serial: '45',
        place: 'Delhi',
        id: '20',
        class: '1986',
        Architecture: 'Expressionist',
        King: 'Fariborz Sahba',
        Dyansty: '-'
        }, {
        name: "Victoria memorial",
        serial: '46',
        place: 'Kolkatta',
        id: '20',
        class: '1906',
        Architecture: 'Indo-Saracenic Revival',
        King: 'Lord curzon',
        Dyansty: 'British Governor general'
        }, {
        name: "Qutub minar",
        serial: '47',
        place: 'Delhi',
        id: '13',
        class: '1206',
        Architecture: 'Indo-Islamic',
        King: 'Qutab Ud-Din-Aibak',
        Dyansty: 'Sultan - Mamluk'
        }, {
        name: "Sanchi stupa",
        serial: '48',
        place: 'Sanchi',
        id: 'BC 3',
        class: '261',
        Architecture: 'Buddhist',
        King: 'Asoka',
        Dyansty: 'Mauriya'
        }, {
        name: "Shore temple",
        serial: '49',
        place: 'Mamallapuram',
        id: '8',
        class: '728',
        Architecture: 'dravidian',
        King: 'Raja simha',
        Dyansty: 'Pallava'
        }, {
        name: "Meenakshi Sundareshwarar temple",
        serial: '50',
        place: 'Madurai',
        id: '1',
        class: '-',
        Architecture: 'dravidian',
        King: '-',
        Dyansty: 'Pandia'
        }]
      } )
     }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {WelcomeComp};
```



Viewport can be enabled by setting @view-in and to disable it pass the config as false. The config can be passed just like the below

CONFIG	EXAMPLE	VIEWPORT FEATURE
-	@view-in	enabled
undefined	@view-in=undefined	enabled
false	@view-in="false"	enabled
true	@view-in="true"	disabled
true	@view-in="{{trueData}}"	disabled

Once a viewport is enabled and then the actual content gets rendered, but if you change the condition passed, in such cases the element will not be rerendered.

viewport for components

Viewport can also be enabled to the components. To do so, add @view-in to the template tag of the actual content. Now for the loading content, open another template tag and add @view-out just like the below code snippet.

Viewport can be enabled by setting @view-in and to disable it pass the config as false. The config can be passed just like the below

CONFIG	EXAMPLE	VIEWPORT FEATURE
-	@view-in	enabled
undefined	@view-in=undefined	enabled
false	@view-in="false"	enabled
true	@view-in="true"	disabled
true	@view-in="{{trueData}}"	disabled
```html
<template tag-name="fields-comp">
  <div lyte-for="{{fields}} as field index">
     <field-comp field-name1="{{field.name1}}" field-name2="{{field.name2}}" field-type1="{{field.type1}}" field-type2="{{field.type2}}" >
     </field-comp>
 </div>
</template>
```
```javascript
import Component from "@slyte/component";
import prop from "@slyte/core";
Class FieldsComp extends Component{
  data(){
    return {
      fields : prop("array",{default : window.fieldArr})
    }
  }
}
```
```html
<template tag-name="field-comp" @view-in>
<!-- assuming the actual content is a heavy component -->
   <span class="bg">
    {{fieldName1}}
   </span>
   <span class="ct">
   -
   </span>
   <span>
     <input type={{fieldType1}} />
   </span>
   <span class="seperator">
   </span>
   <span class="bg">

   </span>
   <span class="ct">
  -
 </span>
 <span>
  <input type={{fieldType2}} />
 </span>
</template>

<template @view-out>
 <span class="bg-loading">

 </span>
 <span class="loading-input">

 </span>
 <span class="seperator-loading">

 </span>

 <span class="bg-loading">

 </span>
 <span class="loading-input">

 </span>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class FieldComp extends Component {
  data() {
    return {
      lyteViewPort : prop("boolean"),
      fieldName1 : prop("string"),
      fieldType1 : prop("string"),
      fieldName2 : prop("string"),
      fieldType2 : prop("string"),
    }
  }
  static actions() {
    return {
      // Functions for event handling
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {FieldComp};
```

In the above example, until the component "field-comp" gets into the view port, we will place the template as specified in the loading content, in the component's place and then when it comes into the view port, we will replace the actual content with the original content of the component.

debounce

sLyte listens to scroll and resize events to determine whether the component has entered the view port or not. By default, lyte don't debounce it, but we can provide debounce value by configuring the "this.$registry.viewPortSettings.debounce" property. The value should be the type number which will be considered as milliseconds.

```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class WelcomeComp extends Component {
  data() {
    return {
    }
  }
  init(){
    this.$registry.viewPortSettings.debounce = 50; //debouncing for 50ms.
  }
}
export {WelcomeComp};
```
viewport toggling

Assuming the cases, where the viewport enabled elements came into the view without scrolling / resizing. For example if we delete some other normal content which is rendered already in view and so viewPort enable element may come in to the view, inorder to fill the empty place. sLyte rely only on scroll / resize events for determination of view port changes. so you can make use of the "this.$registry.viewPortSettings.executePendingViewPortElements()" to render the contents.

```javascript
import { prop } from "@slyte/core";
import { Component } from "slyte/component";
class WelcomeComp extends Component {
  data() {
    return {
    }
  }
  changesFunc(){
    this.$registry.viewPortSettings.executePendingViewPortElements();
  }
}
export {WelcomeComp};
```

Let's navigate to learn about form-handling.

Previous
Next

---

### components - form-handling

Form handling
Creating a component

Let's take a look at an example of how to handle a simple form submission using components. Initially, you need to create a component named "create-user", which will encapsulate the creation of "user".

```html
<form>
   First name:
   <input type="text" name="firstname" value="{{lbind(firstName)}}">
   Last name:
   <input type="text" name="lastname" value="{{lbind(lastName)}}">
   User Id:
   <input type="text" name="userId" value="{{lbind(userId)}}">
   <button onclick={{action('submit',event)}}> Submit </button>
</form>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class CreateUser extends Component {
  data() {
    return {
      firstName : prop( "string" ),
      lastName : prop( "string" ),
      userId : prop( "number" )
    }
  }
  static actions() {
    submit : function(event) {
      var users = this.getData("user");
      if(Object.keys(this.getData("errors") === 0)){
        // send a post request to save the user
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }
  static methods() {
    return {
      // Functions which can be used as callback in the component.
    }
  }
}
export {CreateUser};
```

In the above example, you have used lbind for binding the input value to the respective data (firstName, lastName and userId ). So the value in the input fields will be in sync with the data of the component.

Handling Errors

Now try adding some error handling function to the form. The userId, is provided as type "number" and hence the value entered in the input must be a numerical value. If not, an error message must be displayed

```html
User Id:
<input type="text" name="userId" value="{{lbind(userId)}}">
<template lyte-if="{{errors.userId}}">
   <span> userId is not valid. Please check. </span>
</template>
```

On entering a value other than a number in the userId field, error will be set in the "errors" object of the component. You can use the errors object in the template to know if the error has been set or not.

Handling Submit

Now, it is time to handle the form submission. In most cases, you would be handling form submission by first validating the object to be sent and subsequently sending a request to the server. In this case, you can handle the same in the "submit" action of the component.

```javascript
static actions() {
  submit : function(event){
    var users = this.getData("user");
    if(Object.keys(this.getData("errors") === 0)){
    // send a post request to save the user
    }
    event.preventDefault();
  }
}
```

The above code checks, if the errors object of the component is empty. After which you can send the request to the server for saving the created user. Note that "preventDefault" method of event object is used to prevent the form from submitting.

Let's navigate to learn about raw components.

Previous
Next

---

## data

### data - introduction

DATA
Introduction

The Data Store is an integral component of the sLyte framework, designed to handle the storage, manipulation, validation, and access of data efficiently. Its primary function is to act as a bridge between the client (the front-end of the application) and the server (back-end), facilitating seamless communication and data transfer. By serving as this intermediary, the Data Store simplifies how data is handled throughout the application.

Key Responsibilities of the Data Store
Data Fetching

One of the central tasks of the Data Store is to fetch data from server-side API endpoints. Whether these endpoints are RESTful services or GraphQL queries, the Data Store ensures that the correct data is retrieved and made available for use on the client side.

Instead of requiring multiple requests or complex code to fetch data from different parts of the system, the Data Store provides a unified interface for data retrieval, greatly simplifying how applications interact with their back-end services.

Caching

Caching plays a vital role here. By temporarily storing data, the Data Store reduces the need for redundant network requests, thus optimizing performance and improving response times. Users experience faster interactions since data can be retrieved from the cache rather than repeatedly querying the server.

Data Manipulation & Validation

The Data Store doesn't merely act as a passive data handler—it actively manages and validates the data it stores. When an application modifies data (e.g., when a user updates their profile or submits a form), the Data Store ensures that these changes are validated before they are sent back to the server.

This layer of validation is crucial because it ensures data integrity, preventing malformed or incomplete data from being sent to the server. The Data Store checks the data against predefined rules and conditions, maintaining consistency in the application.

Saving Data to the Server

When changes are made to data on the client side, the Data Store streamlines the process of syncing these changes back to the server. It ensures that updates, new entries, or deletions are transmitted with minimal effort on the developer's part.

The Data Store provides developers with callbacks and lifecycle events, making it easier to trigger actions at specific points during the data transaction process, such as before or after sending data to the server.

Single Point of Communication

In traditional systems, client-server communication might be scattered throughout the application, making it harder to manage and debug. With the sLyte Data Store, all communication happens through a single point, making it easier to maintain, monitor, and optimize.

This centralized communication pattern significantly reduces the complexity of building and maintaining a robust application, as all data-related interactions are channeled through a well-defined interface.

Elevating the Application with REST & GraphQL Support

One of the key advantages of the sLyte Data Store is its flexibility in handling different types of API protocols. By supporting both REST and GraphQL endpoints, the Data Store empowers developers to choose the best communication strategy for their specific needs.

REST

REST is a widely-used protocol for interacting with resources in a simple and stateless manner. The Data Store’s ability to handle REST endpoints means that it can easily fetch or update resources using HTTP methods like GET, POST, PUT, and DELETE.

GraphQL

GraphQL provides more flexibility in querying data by allowing clients to specify exactly what data they need in a single request, as opposed to REST, where endpoints return predefined sets of data.

By integrating GraphQL, the Data Store enhances the efficiency of data transfer, reducing the number of requests and the amount of data being sent back and forth between the client and server.

Unified Callbacks for Seamless Control

Another standout feature of the Data Store is its use of callbacks at every step of the data-handling process. These callbacks are defined in a centralized location, providing developers with full control over how data is fetched, manipulated, validated, and stored.

For instance:

A callback can be triggered before sending a request to the server to validate the data.
Another callback might fire after a successful data retrieval to process or format the data.
Callbacks can also be used to handle errors gracefully, ensuring that the application behaves predictably even when things go wrong.

By having these callbacks consolidated into a single system, developers don’t need to chase down functions scattered across the codebase. Everything is managed in one place, which reduces complexity and makes the development process much smoother.

Data Flow Architecture

Have a look at the below image to visualize the working of data store

Benefits of Using the sLyte Data Store

In summary, the Data Store provides numerous benefits that elevate the sLyte framework’s capabilities:

Efficiency: Reduces the number of network requests by caching and storing data locally.
Simplified Communication: Acts as a single, central point for client-server interaction, reducing complexity in application architecture.
Flexibility: Supports both REST and GraphQL protocols, offering developers the freedom to choose the best data-fetching method.
Robust Data Handling: Manages data manipulation, validation, and syncing with the server, ensuring the integrity and consistency of data.
Extensibility: With centralized callbacks, developers can easily extend the functionality of the Data Store without modifying core logic.
Final thoughts

By incorporating the Data Store into your application, you can ensure that your data flows smoothly between the client and server, while also providing a scalable and maintainable solution for managing the application’s data requirements.

In short, the Data Store serves as the backbone for handling data in your application, providing a reliable, efficient, and flexible approach to managing the complex interactions between client-side components and server-side APIs.

---

### data - registrydb

Data store

As the name suggests, this registry serves as a register to hold all the schema related definition for the particular db. The best part is that it can have multiple db registries for an app.

Base db Class

On default, while creating an app, the db registry gets created in datastore/db.js. With this you create a base db class from data store.

This is how the db registry file looks like.

```javascript
import { Db, RESTConnector, RESTSerializer } from "@slyte/data";
class AppDb extends Db{
  static Connector = RESTConnector;
  static Serializer = RESTSerializer;
}
export { AppDb };
```

Base connector and serializer of the app has to be given in Connector and Serializer static property in base Db class.

If there is any applicationConnector / applicationSerializer, it can be defined in Connector and Serialzer static property in the base Db class as follows

```javascript
import { Db } from "@slyte/data/src/Db";
import { ApplicationSerializer } from "./serializers/application";
import { ApplicationConnector } from "./connectors/application";
class AppDb extends Db{
  static Connector = ApplicationConnector;
  static Serializer = ApplicationSerializer;
}
export { AppDb };
```
db Instantiation

Data store instance can be created through lookups in base application class.

```javascript
import { Lyte } from "@slyte/core";
import { AppDb } from "data/db";
class App extends Lyte{
  lookups(){
    return [{db:AppDb}];
  }
}
export { App }
```

Note: Across this document, in the places where db instance utils has to be used, it will be refered as "this.$db", considering db is the name of the base class db lookup given.

Using db Instance

Since appDb is included as a lookup, it can be accessed in this context of component and the route provided that it is included as lookups in their base class such as ComponentRegistry and the Router class as follows.

```javascript
import { ComponentRegistry } from "@slyte/component";
import {AppDb} from "../data/db.js";
class AppComponentRegistry extends ComponentRegistry {
  lookups() {
    return [{db:AppDb}];
  }
}
export { AppComponentRegistry };
```
```javascript
import { Router } from "@slyte/router";
class AppRouter extends Router {
    lookups(){
                                return [{db:AppDb}];
    }
}
export { AppRouter }
```

This "db" lookup can be used in the "this" context of component, route, connector, serializer with property "$db" as follows:

```javascript
import { Component } from "@slyte/component";
import { User } from "../../data-store/schemas/user";
class BlogList extends Component {
  data() {
    return {
      // Data that is processed in template.
    }
  }
  init(){
	this.$db.cache.get({schema:User});
  }
}
export {BlogList};
```
```javascript
import { Route } from "@slyte/router";
import { User } from "../../data-store/schemas/user";
class Home extends Route {
  static queryParams = ["page"];
  model(){
	return this.$db.cache.get({schema:User});
  }
}
export { Home };
```

---

### data - slyte-datastore

Data store
Defining a Schema

Schema is the blueprint of the data and it defines the data's properties and relations, similar to defining a table in MySQL. Schema, plays a major role while creating a db. A schema can easily be created with the help of CLI.

lyte generate schema schemaName

Here is a sample schema created for your reference

lyte generate schema User

Note: It is always recommended to start the schema name with a capital letter.

CLI will automatically add Schema.register() during the compilation. For any dynamic schema registration, register schema like below

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
    props(){
    }
}
```

Jump into schema to know more about it.

Defining Props in a Schema

prop is an util which can be imported from @slyte/core package. The syntax of using it is as follows

propName : prop( type , { options });

Following are the supported primitive data types,

string
number
boolean
object
array

```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
    props(){
        name: prop("string"),
        number: prop("number"),
        isRegistered: prop("boolean"),
        info: prop("object")
    }
}
```
Primary Key

Primary key is the unique identifier of schema. By default, the 'id' prop will be considered as the primary key. Other properties can also be configured as primary key of the schema, like below.

propName : prop( type , { primaryKey: true });
```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
    props(){
        return {
            uid : prop( "string", { primaryKey : true } ),
            name : prop( "string" )
        }
    }
}
export { User };
```
Composite Key

Composite key is combination of two or more keys that can uniquely identity an entity in the schema. Defining a composite key is quite similar to that of defining a primary key but here the primaryKey option can be given in more than one attribute. Here is a sample code for your reference.

```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      email : prop( "string", { primaryKey : true } ),
      id : prop("string", { primaryKey : true, baseKey : true}),
      name : prop( "string" )
    }
  }
}
export { User };
```
Connector

By supporting both REST and GraphQL endpoints, the Data Store empowers developers to choose the best communication strategy for their specific needs.

A connector is a callback layer provided by sLyte. This comes in your help, when you are in need to set or modify URL formats, headers, method,queryParams etc. Being a single point contact between the db and the server, you can easily configure and modify the request related information with several call backs.

Structuring a connector

Before structuring a connector, it is vital to define the base connector from which you can extend the schema connector. Learn from here to define a base connector.

Let us see how a connector can be structured with REST and GraphQL

```javascript
import { RESTConnector } from "@slyte/data";
class ApplicationConnector extends RESTConnector{
    host = "https://crm.zoho.com";
    namespace = "/crm/v1";
}
export { ApplicationConnector };
```
```javascript
import { ApplicationConnector } from "./application";
class UserConnector extends ApplicationConnector{
    requestURL({url}){
        return url;
    }
}
export { UserConnector };
```

Have a look at the detailed section about connectors for better understanding.

Serializer

By supporting both REST and GraphQL endpoints, the Data Store empowers developers to choose the best communication strategy for their specific needs.

Serializer is also a callback layer where the request or the response can be either formatted or modified before being sent or received from the server.

Structuring a serializer

Before structuring a serializer, it is vital to define the base serializer from which you can extend the schema serializer. Learn from here to define a base serializer.

Let us see how a serializer can be structured with REST and GraphQL.

```javascript
import { RESTSerializer } from "@slyte/data";
class ApplicationSerializer extends RESTSerializer{
    normalizePayload({payLoad}){
        return payLoad;
    }
}
export { ApplicationSerializer };
```
```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
    normalizePayload({payLoad}){
        payLoad = super.normalizePayload(...arguments);
        return payLoad;
    }
}
export { UserSerializer };
```

Have a look at the detailed section about serializer for better understanding.

Configure Schema Specific Connector/Serializer

A connector / serializer can easily be created with the help of CLI as below,

```javascript
lyte generate connector user; //extends RESTConnector
lyte generate serializer user; //extends RESTSerializer
```
```javascript
lyte generate connector user --type="gql"; //extends GqlConnector
lyte generate serializer user --type="gql"; //extends GqlSerializer
```

Following is the example of REST specific user connector and serializer,

```javascript
import { RESTConnector } from "@slyte/data";
class UserConnector extends RESTConnector{
}
export { UserConnector };
```
```javascript
import { RESTSerializer } from "@slyte/data";
class UserSerializer extends RESTSerializer{
}
export { UserSerializer };
```

This connector / serializer has to be added to Connector / Serializer static property of that particular schema as below

```javascript
import { Schema } from "@slyte/data";
import { prop, many, one } from "@slyte/core";
import { UserConnector } from "../connectors/user";
import { UserSerializer } from "../serializer/user";
class User extends Schema{
    static Connector = UserConnector;
    static Serializer = UserSerializer;
}
export { User };
```
Entity

While the table being considered as a schema, each record inside the table is considered to be an entity. This entity serves to be the instance of the schema. You can create a new entity in the existing db. Data store gives you the particular entity's states and methods in $ property inside the entity object. So with entity.$ you can set and get the properties and methods.

$entity

All properties and methods provided by data store will be available in entity.$ scope. Since entity holds all the properties of a schema, all the entity properties and methods are defined under entity.$, in order to not pollute the entity namespace.

Entity States

There are four states to determine the current state of an entity

IsNew

When an entity is newly created, this property must be set true.

IsModified

IsModified must be set true, if a change has to be made to an entity.

IsDeleted

When an entity is deleted, its isDeleted property must be set true.

IsError

This property has to be set true, if there are any validation errors.

Validation

If a persistent data is being added to Data store via push or getAll or getEntity methods in db, data will not be validated by default. Any persistent data from the server will not be validated.

Any change made to the entity will be validated, only if the data is being set via data set utils or entity's data set utils.

With respect to non-persistent data entity creation data will be validated upon create itself.

Data caching

Data caching is a technique which is used to store or cache the entity's data in the browser's cache to improve performance and reduce latency. Additionaly, datastore lets you cache the data with query parameters,with custom cacheQuery,cacheData option

IndexedDB

It is a centralised web storage solution provided by the browser to store significant amounts of data with a same origin policy. Data store provides an option to store the db data in the indexedDB. You can learn more about it here.

---

### data - relationships

Relationships

Data store includes several built-in relationship types to help you define your schemas and their relationship with other schemas. These relationships help to establish connections between the schemas in your application and can be used to pass the data between their entities.

To define the relationship between the models, export the methods("one","many") from @slyte/core package has to be used.

One-way-relation

To declare an one way relationship between two schemas, relation can be defined in any one of the schema. It is not needed to define the relation in both schemas. Let us consider two schema namely 'user' and 'profile'. Now that user schema is in relation with the profile schema and it can be defined as follows.

```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { User } from "../user.js";
class Profile extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      user : one( User )
    }
  }
}
export { Profile };
```
```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" )
    }
  }
}
export { User };
```
One-to-One

In an one-to-one relationship, one entity in a schema can be associated with just one entity in another schema. To declare an one-to-one relationship between two schemas, use "one" method, followed by the schema with which it has one-to-one relationship with. Have a look at the below code snippet to understand better. Here, the two schemas, user and profile are being in one-to-one relationship and they can be defined as follows.

```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Profile } from "../profile.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      activeProfile : one( Profile )
    }
  }
}
export { User };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { User } from "../user.js";
class Profile extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
       currentUser: one( User )
    }
  }
}
export { Profile };
```
One-to-Many

In an one-to-many relationship, a entity of a schema can be associated with multiple entities in another schema. Let us consider an example of a blog. The blog also has many comments and they belong to a particular blog post.

To declare an one-to-many relationship between two schemas, use one method in combination with many method. Let us consider a model 'blog' and a model 'comment' with a one-to-many relationship, where one instance of 'blog' is connected to multiple instances of 'comment'. They can be defined as follows:

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      userComment : many( Comment )
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { Comment };
```
Many-to-Many

In a many-to-many relationship, multiple entities in a schema can be associated with multiple entities in another schema. For example, a blog post can have many tags and a tag can be used in many blog posts. To declare a many-to-many relationship between two models, use many method. Let's define a model 'blog' and a model 'tag' with a many-to-many relationship, where multiple instances of 'blog' are connected to multiple instances of 'tag'. They can be defined as follows:

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Tag } from "../tag.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      tags : many( Tag )
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Blog } from "../blog.js";
class Tag extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      blogs : many( Blog )
    }
  }
}
export { Tag };
```
Reflexive Relations

A reflexive relationship is when a schema has a relationship with itself. You can define a reflexive relationship by specifying the schema's own name in one / many method. For example, let's define a model 'User' with a reflexive relationship:

```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      bestFriend : one( User, { inverse: "bestFriend"} )
    }
  }
}
export { User };
```
Polymorphism

Polymorphism allows you to inherit the functionalities of a base model into a derived model. Polymorphism is highly beneficial when you require the attributes of a model to be extended to another model, where they can be used by the derived model directly. This is done by using the keyword extends, followed by the name of the base model

Have a look at the below code snippet to understand how polymorphism works. Here the model,'User', being the base model which is in relationship with the model'blog'. The other two models 'employee' and 'admin' gets extended from the base model 'User'.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      reviewer : many( User , {polymorphic:true}),
      collaborator : many ( User, {polymorphic:true})
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      "_type" : prop( "string" ), // This is a mandate attribute whose value will be either admin | employee
      id : prop( "string" ),
      name : prop( "string" ),
      phone : prop( "string" ),
      blogs : many( Blog )
    }
  }
}
export { User };
```
```javascript
import { prop } from "@slyte/core";
import { User } from "../user.js";
class Employee extends User{
  props(){
    return {
      designation: prop("string")
    }
  }
}
export { Employee };
```
```javascript
import { prop } from "@slyte/core";
import { User } from "../user.js";
class Admin extends User{
  props(){
    return {
      permission: prop("string")
    }
  }
}
export { Admin };
```
Explicit Inverses

If two schemas are related to each other more than once, you need to explicitly specify the attribute based on which they are related. For example, a blog can have both reviewers and collaborators as users. The schema 'blog' therefore has an explicit inverse relationship with the schema 'users' in this context. To define an explicit inverse relationship between two schemas, you can use the 'inverse' option in many. Let's define the schema 'user' and the schema 'blog' with an explicit inverse relationship as follows:

A blog has many users as reviewers.
A blog has many users as collaborators

Note: An explicit inverse relationship between two schemas can be specified in either of the schemas.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      reviewed_blogs : many( Blog , { inverse : "reviewer" }),
      edited_blogs : many( Blog , { inverse : "collaborator" })
    }
  }
}
export { User };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { User } from "../blog.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      reviewer : many( User),
      collaborator : many( User)
    }
  }
}
export { Blog };
```

The api response for blog api should be like this

```javascript
{
  blogs : [{
    id : "8675309",
    name : "Blog Title",
    reviewer : [{
      id : "user1",
      name : "userName",
      phone : "12345",
      _ type : "admin",   // This value will be received from the server OR computed in the serializer
      permission : "ALL"
    }],
    collaborator : [{
      id : "user2",
      name : "userName1",
      phone : "123457",
      _ type : "employee",
      designation : "MTS"
    }]
  }]
}
```

Now that you have seen the relationship, it is high time to see how the entities can be related to each other.

Relate the Entities
using object

An object can be passed in the relation key as a data in db's push/newEntity or entity.$.set to relate it.

For push, passed object will either be created as a new persisted entity or merged with the existing entity(if that entity is already present) and related
For newEntity / entity.$.set,it will either try to create a new entity & relate or it will set an error in entity saying the entity with primaryKey values already present
```javascript
this.$db.push({schema:User, data:{ id:'1', profile:{id:'1'} }});
```
```javascript
this.$db.newEntity({schema:User, data:{ id:'1', profile:{id:'1'}}});
```
```javascript
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set("profile", {id:'1'});
```
using primaryKey value

PrimaryKey values can be passed in the relation key as a data in db's push, newEntity / entity.$.set. If that record is present in store, it will be related. Following are the ways to use it,

```javascript
this.$db.push({schema:User, data:{ id:'1', profile:"1" }});
```
```javascript
this.$db.newEntity({schema:User, data:{ id:'1', profile:"1" }});
```
```javascript
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set("profile", "1");
```
using entity instance

Entity instances can be passed in the relation key as a data in db's push, newEntity / entity.$.set. to relate it. Following are the ways to use it,

```javascript
import { Profile } from "../profile.js";
import { User } from "../user.js";
var profileRecord = this.$db.cache.getEntity({schema:Profile, pK:"1"});
this.$db.push({schema:User, data:{ id:'1', profile:profileRecord }});
```
```javascript
import { Profile } from "../profile.js";
import { User } from "../user.js";
var profileRecord = this.$db.cache.getEntity({schema:Profile, pK:"1"});
this.$db.newEntity({schema:User, data:{ id:'1', profile:profileRecord }});
```
```javascript
import { Profile } from "../profile.js";
import { User } from "../user.js";
var profileRecord = this.$db.cache.getEntity({schema:Profile, pK:"1"});
var userRecord = this.$db.cache.getEntity({schema:User, pK:"1"});
userRecord.$.set("profile", profileRecord);
```
Relation Array Utils
add

To add a new relation data to a Many relation, add method over that particular Many relation array can be used as shown in the example below,

```javascript
import { Blog } from "../../data-store/schemas/blog.js";
var blog = this.$db.cache.getEntity({schema:Blog, pK:"1"});
blog.tags.add("2");
```
```javascript
import { Blog } from "../../data-store/schemas/blog.js";
var blog = this.$db.cache.getEntity({schema:Blog, pK:"1"});
blog.tags.add({id:'3'});
```
```javascript
import { Blog } from "../../data-store/schemas/blog.js";
import { Tag } from "../../data-store/schemas/tag.js";
var blog = this.$db.cache.getEntity({schema:Blog, pK:"1"});
var tagRecord = this.$db.cache.getEntity({Tag, pK:"1"});
blog.tags.add(tagRecord);
```
remove

To remove a related entity from a Many relation, remove method over that particular Many relation array can be used as shown in the example below,

```javascript
import { Blog } from "../../data-store/schemas/blog.js";
var blog = this.$db.cache.getEntity({schema:Blog, pK:"1"});
blog.tags.remove("2");
```
```javascript
import { Blog } from "../../data-store/schemas/blog.js";
import { Tag } from "../../data-store/schemas/tag.js";
var blog = this.$db.cache.getEntity({schema:Blog, pK:"1"});
var tagRecord = this.$db.cache.getEntity({Tag, pK:"4"});
blog.tags.remove(tagRecord);
```

Note : this.$app.arrayUtils is not synced with store's Many relation array. If it is used in a entity, entity will not be get dirty.

---

### data - manipulating-data

Manipulating Data
Fetch Data

To fetch data from the server, getAll / getEntity method of db can be used. This will make an API request based on the connecter configuration defined in the db. Once the request is successful and data will be cached as entity objects in that specific schema.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({schema:User}).then( function(data){
  console.log( data );
},function(){
    console.log("failure callback");
});  // => GET '/user'
```
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getEntity({schema:User, pK:"1"}).then( function(data){
  console.log( data );
},function(){
    console.log("failure callback");
});  // => GET '/user/1' return Promise
```

To know more about it, please visit querying data.

Create Data

Creating a data in a schema is nothing but creating an entity. Data can be of two types namely persistent data and non-persistant data. Let us see the ways to create them.

Creating persistant data

In simple terms, persistent data is the data present in the server. This data can be fetched using the utils like getEntity and getAll. Creating a persistent data can be done using the method push

Push

Entity data from the server can be pushed as a persisted entity in schema.

```javascript
this.$db.push({ schema:User , data:{ id : "1" , name : "john" , mail : "a@a.com" }});
```

Creating non persistant data

Create newEntity

New entity can be created using newEntity method. Data object can be passed to it, else an empty entity object will be created. Entity will be validated by default during this method. State of this entity will be Isnew.

```javascript
import { User } from "../../schemas/user";
this.$db.newEntity({ schema:User , data:{ id : "1" , name : "john" , mail : "a@a.com" }});
```

Now let us see how to create a non-persistent data with skipValidation.

newEntity with skipValidation

New entity can be created with skipValidation option. Just set the skipValidation property as true. You can provide validation while saving the entity.

```javascript
import { User } from "../../schemas/user";
this.$db.newEntity({ schema:User , data:{ id : "1" , name : "john" , mail : "a@a.com" }, skipValidation: true});
```
Get Data from Cached Data Store
cache.getAll

You can use cache.getAll to fetch all the data of a specified schema. It returns an array of entity in the schema.

For example, you can fetch data from the 'user' model using cache.getAll as follows:

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.getAll({ schema:User });
```

Note: This will have a live reference to the user schema's data. Any changes done to the user schema will also be reflected in the respective entity.

To filter the entities with some values, the array's filter method can be used.

```javascript
import { User } from "../../data-store/schemas/user";
var data = this.$db.cache.getAll({ schema:User }).filter( function( itm ){
    return itm.company == "zoho";
});
```
cache.getEntity

You can use cache.getEntity to get a cached entity of the specified schema. However, this will not send any requests to the server.

For example, you can use this.$db.cache.getEntity to fetch a cached entity from the 'user' schema as follows:

primaryKey

For primaryKey, pK value can be passed as string / number in the specific pK key of the getEntity.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.getEntity({ schema:User , pK:'1' });
```
compositeKey

For compositeKey, pK value can be passed as an object, with specific composite key values in it.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.getEntity({ schema:User , pK: {id:'1', type:'admin'} });
```
Updating an Entity

Entity's properties can be updated using set method of entity.$. During this set, the value will be validated. If the validation fails, the error data will be set in entity.$.error with entity.$.isError set to true.

Head to error handling section to learn more about it.

single data set

To set a single property in a entity, pass prop name as the first param and value as second param to entity.$.set.

```javascript
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set( "name" , "max" );
```
multiple data set

Multiple properties can also be set to a entity, when it is passed as an object to entity.$.set.

```javascript
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set({ name : "max" , mail : "b@b.com" });
```

Note: If a property of a entity is set without using entity.$.set, then entity's state or DOM bindings will not be affected. Always use any data set utils to set a value

Deleting an Entity

Entity can be deleted using entity.$.delete method. This will delete the entity from the schema. In order to make the entity data persistent, by sending a request to the server, that entity has to be saved.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema: User, pK:"1"});
entity.$.delete();
```
destroy

entity.$.destroy can be used to delete a entity from the db and make a request for the same.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema: User, pK:"1"});
entity.$.destroy().then( function(){
  //Success callback
},function(){
  // Failure callback
});
```
with delayPersistence

When deleting a entity with delayPersistence as true, that entity will be removed from the schema's data/relation's data only when that entity's delete is persisted(saved successfully) to the server. Below are the ways in which delayPersistence can be used,

To enable delayPersistence for all the entity in db, provide the following option in the application connector,

```javascript
import { RESTConnector } from "@slyte/data";
class ApplicationConnector extends RESTConnector{
  delayPersistence = {delete: true};
}
export { ApplicationConnector };
```

To enable delayPersistence for all the model records, please provide the following option in the specific adapter,

```javascript
import { ApplicationConnector } from "./application";
class UserConnector extends ApplicationConnector{
    delayPersistence = {delete: true};
}
export { UserConnector };
```

To enable delayPersistence for a particular entity, please provide the following option in the entity's delete / destroy,

```javascript
entity.$.delete(true);
```
```javascript
entity.$.destroy({},{},true);
```
Revert

Entity's properties values can be reverted to its initial values using revert method in entity.

revert an entity

While doing the revert, only the particular entity's change that is done via the entity will be reverted and the related entity's remains unaffected for the revert.

Let us see the following methods to be implemented while reverting an entity

NewEntity(Entity.$.IsNew)

If the state of entity that is being reverted is IsNew, then the entity gets dropped from the db's schema data.

DeletedEntity(Entity.$.IsDeleted)

If the state of entity that is being reverted is IsDeleted,then the entity gets added back to db's schema data.

Modified Entity

If the state of the entity that is being reverted is IsModified, then the entity's changed properties will be reverted to its intial value.

You can also change the entity's changed properties to be reverted to its initial value. Have a look at the below code snippet to understand how it is done.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.revert();
```
revert a prop

A specific prop value can be reverted using entity.$.revertProps()

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.revertProps( "name" );
```

Note: By passing array of attributes, you can revert more than one attribute too.

To revert all the entity in a schema, revert method in the db can be used.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.revert({schema:User});
```
revert all entity in a schema

To revert all the entity in a schema, revert method in the db can be used.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.revert({schema:User});
```
revert to a state

In order to revert the entity to a specific state of the entity, this option can be used. A state can be saved to a entity at a specific point, which can be used to revert the entity to that specific state.

Consider the following changes done to the entity initially,

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema: User, pK:"1"});
entity.$.set ( "username" , "changed1" );
entity.$.set ( "email" , "test@mail.com" );
entity.$.set ( "phone" , "1111111111" );
```

State of the entity can be saved as follows.

```javascript
entity.$.saveState ( "test" );
//[ OR ]
entity.$.saveState (); // Which returns a state name.
```

Then considering the following changes are done to the entity,

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set ( "username" , "changed2" );
entity.$.set ( "email" , "nottest@mail.com" );
entity.$.set ( "phone" , "2222222222" );
```

To revert to the specific state of the entity, state name can be passed to revert method as follows

```javascript
entity.$.revert ( "test" );
// now entity will have values { username : 'changed1' , email : 'test@mail.com' , phone : '1111111111' }
```
Drop
drop an entity

To remove a entity of the schema from db, dropEntity method can be used.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.dropEntity({schema:User, pK:"1"});
```
drop all entity

To remove all entity of the schema from store, dropAll can be used.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.dropAll({schema:User, pK:"1"});
```
drop array of entity

To remove an array of entity from the schema, pass the array of entity to dropAll method in store.

```javascript
import { User } from "../../data-store/schemas/user";
var data = this.$db.cache.getAll({schema:User}).filter( function( itm ){
  return itm.company == "zoho";
});
this.$db.dropAll({schema: User, data:data});
```
Undo or Redo

The changes that are made to the entity can be undone/redone using the method undo/redo in the entity respectively.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema: User, pK:"1"});
entity.$.set ( "username" , "peter" );
entity.$.undo(); // Now the username value will be john
entity.$.redo(); // Now the username value will be peter
entity.$.set ({ "username" : "albert" , "phone" : "333" });
entity.$.undo(); // Now the username will be peter and phone will be 111
```

Note: Last operation that is done on the particular record will only be undone / redone

Undo or Redo Props

To undo/redo a specific prop of entity, pass the props name to the undo/redo method of the entity.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema: User, pK:"1"});
entity.$.set ( { "username" : "peter" , "phone" : "222" } );
entity.$.undo("username"); // Now the username value will be john
// [ OR ]
entity.$.undo ( [ "username" , "phone" ] ); // Now the username value will be john and phone will be 111
entity.$.redo(); // Now the username value will be peter
// [ OR ]
entity.$.undo ( [ "username" , "phone" ] ); //Now the username will be peter and phone will be 222
```

---

### data - query-data

Querying Data

sLyte lets you to perform query actions on the entity in your application with much ease. Besides,you can also fetch data from the server, get the cached data from the db, sort entities based on a given property, and more.

Note: When the data is inserted to db via get / push, validation won't happen. Since the data is fetched from the server it will be considered as a persisted data. Validation will happen only when the data is changed in the client through entity.$.set

Fetching Data from Server
getAll

With getALL, a GET request will be sent to the server to fetch data for the specified entity. This returns a promise object which is used to handle both success and failure callback. In short, getAll is used to retrieve all the entities of the specified schema.

For example, you can obtain all the entities of the user schema from the server in the following way:

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({schema:User}).then( function(data){
  console.log( data );
},function(){
    console.log("failure callback");
});  // => GET '/user'
// Note: this doesn't have a live reference to user schema. Any changes done to user schema will not be reflected to this array. To obtain live reference use this.$db.cache.getAll as shown below.
```
get an entity

To get a specific entity, you can use getEntity request. It lets you to retrieve the data of the specified schema for the primary key. You can use this.$db.getEntity with pK value option. This also returns a promise object which is used to handle both the success and the failure functions.
For example, you can retrieve the entity of a single user with a specific pK in the following manner:

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getEntity({schema:User, pK:"1"}).then( function(data){
  console.log( data );
},function(){
    console.log("failure callback");
});  // => GET '/user/1' return Promise
```
with queryParams

sLyte also lets you pass the query params for each request. You can use this.$db.get with query parameters for each request. You can pass these query parameters, in the qP option of the respective request, which will be sent as the GET request's parameters.

Have a look at the below code to see how it works.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({schema:User, qP:{ name : "test" , email : "test@zohocorp.com" }});
```
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getEntity({schema:User, pK:"1", qP:{ name : "test" , email : "test@zohocorp.com" }});
```
Handling Metadata

Any additional information regarding the request will be received as metadata.
Pagination is a common example of using metadata. Imagine a blog with far more posts than you can display at once. You might query it like the below code snippet.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({schema: User, qP: {
  "limit" : 10,
  pageNo : 1
}});   // => GET '/user?limit=10&pageNo=1'
```

To get different pages of data, you'd simply change your pageNo in increments of 10. Similarly server can also send meta information for a particular request, example total record count can be received from the server.

```javascript
{
  "post" : {
    "id" : '1',
    "title" : "Test blog",
    "comments" : [ "1" , "2" ]
  },
  "meta" : {
    "total" : 100
  }
}
```

This meta information can be retrieved like this:

```javascript
import { PostSchema } from "../../data-store/schemas/user";
this.$db.getAll({schema: PostSchema}).then( function(data ){
  console.log( data.$.meta );
});
this.$db.getEntity({schema: PostSchema, pK: "1"}).then( function( data )){
  console.log( data.$.meta );
});
```

Note: For single entity get, the entity object will hold the recent meta information that is received from the server in entity.$.meta . However for multiple data get, the meta data will be available only in the data that is received in success callback.

Caching and Preventing Duplicate Request
caching with queryParams

db lets you cache the data with its corresponding query parameters. Once a query parameter is cached, consecutive requests with the same query parameters will not be sent to the server. To fetch data from the server forcefully with the same query parameters, you should clear the cache just like the below code snippet

Note: To cache the data of the requests which don't have query parameters, you can use refetchAll and refetchEntity connector callback for this.$db.get and this.$db.get a entity queries respectively.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({ schema:User , qP:{ name : "test" }, cacheQuery:true});
this.$db.getAll({ schema:User , qP:{ name : "test" }});                  // No request will be sent
this.$db.clearCachedQuery({ schema:User , qP:{ name : "test" }});         // Will clear the cache
this.$db.getAll({ schema:User , qP:{ name : "test" } , cacheQuery:true});            // => GET '/user?name=test'
this.$db.getAll({ schema:User , qP:{ name : "test" } , cacheQuery:false ,cacheData:false }); // => GET '/user?name=test' Note: The retrieved data will not be saved in this.$db.
```

Note: To clear the cached queries, use clearCachedQuery as shown above in the example.

with custom cacheQuery

db lets you cache the data with its corresponding cacheQuery param. Once a valid cacheQuery is passed, consecutive requests with the same cacheQuery will not be sent to the server. To fetch data from the server forcefully with the same query parameters, you should clear the cache in the following manner and make the request.

Note: queryParams will not be checked, if a custom cacheQuery is passed.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({ schema:User, qP:{}, cacheQuery:"test"}); // => GET '/user?name=test'
this.$db.getAll({ schema:User, qP:{}, cacheQuery:"test"}); // No request will be sent
this.$db.getAll({ schema:User, qP:{test:'test'}, cacheQuery:"test"}); // No request will be sent
this.$db.clearCachedQuery({ schema:User , cacheQuery:"test"}); // Will clear the cache
```

Note: To clear the cached queries, use clearCachedQuery as shown above in the example.

cacheData option

By default, all the data received from the getAll / getEntity requests will be saved in the data store. In case you don't want to store the data, set the cacheData param as 'false' as shown.

```javascript
this.$db.getAll({ schema:User , qP:{ name : "test" } , cacheQuery:false ,cacheData:false }); // => GET '/user?name=test' Note: The retrieved data will not be saved in this.$db.
```
true (default)

By default, cacheData will be true. In that case, all the data received from the getAll / getEntity requests will be saved in the db as entities

```javascript
this.$db.getAll({schema: User});
```
```javascript
this.$db.getEntity({schema: User, pK: "1"});
```
false

In case you don't want to store the data in the db, set the cacheData param as 'false' as shown. During this option, normalize callbacks in serializer( normalizePayload, processEntity, normalizeEntity, normalizeKey ) will also be called.

```javascript
this.$db.getAll({schema: User, cacheData: false});
```
```javascript
this.$db.getEntity({schema: User, pK: "1", cacheData: false});
```
optional normalize

In case you don't want the normalize callbacks to be called during caching of data, pass normalize as 'false' to cacheData param as shown in the example. During this option with noramlize as false, normalize callbacks in serializer( normalizePayload, processEntity, normalizeEntity, normalizeKey ) will not be called during getAll / getEntity.

```javascript
this.$db.getAll({schema: User, cacheData: { cache:false, normalize:false }});
```
```javascript
this.$db.getEntity({schema: User, pK: "1", cacheData: { cache:false, normalize:false}});
```
return cachedData on subsequent getAll/getEntity using refetch callback

refetchAll and refetchEntity connector callbacks can be used to return cachedData by returning false. By returning true, request will be made to fetch the data.

```javascript
refetchAll({ cachedData }){
  if( cachedData.length == 100 ){
    return false;
  }
  return true;
}
```
```javascript
refetchEntity({ cachedData, queryParams }){
  if( cachedData.isUptoDate ){
    return false;
  }
  return true ;
}
```
mapBy

The mapBy method retrieves the specified property from all the entity in the schema data array, and returns a new entity array. This can be used only for a entity array, such as with cache.getAll or related hasMany array. And it follows this syntax, RecordsArray.mapBy(<<field>>)


```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.getAll({ schema:User }).mapBy( "username" );
this.$db.cache.getEntity({ schema:User, pK: "1" }).blog.mapBy( "blog-name" );
```
sortBy

The sortBy method sorts the entity array based on the specified property and returns a new entity array. This can also be used only in the entity array, such as with cache.getAll or hasMany record. And it has the following syntax, RecordsArray.sortBy(<<field>>,<<order>>)


By default, it sorts the entity in an ascending order. To sort them in a descending order, set the value of order as 'desc'.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.getAll({ schema:User }).sortBy( "username" );
this.$db.cache.getAll({ schema:User }).sortBy( "username" , "desc" );
this.$db.cache.getEntity({ schema:User, pK:"1" }).blog.sortBy( "blog-name" );
```

---

### data - handling-meta

Saving the Data
Saving a Non-Persisted Entity

If the Entity with state isNew is saved, temporary primaryKey value which was created for it, will be removed in payload and a POST request will be sent to the server along with this payload.

```javascript
var rec = this.$db.newEntity({schema: User});
rec.$.set("name", "steve");
```
```javascript
entity.$.save().then(function(){
  //success callback
}, function(){
  //failure callback
});
```
Saving a Persisted Entity

If the peristed data with changes is being saved, a PATCH request will be sent to the server along with this payload.

```javascript
var rec = this.$db.cache.getEntity({schema: User, pK: "122"});
rec.$.set("name", "steve");
rec.$.set("phone", "123123123123");
```
```javascript
rec.$.save().then(function(){
  //success callback
}, function(){
  //failure callback
});
```
Persisting a Deleted Entity

If an entity is deleted and saved, a DELETE request will be sent to the server with id added to the URL.

```javascript
var rec = this.$db.cache.getEntity({schema: User, pK: "122"});
rec.$.delete();
rec.$.save().then(function(){
  //success callback
}, function(){
  //failure callback
});
```
Saving an Entity with Relation
serialize

Serialize is an option in the related attribute of the model definition. It defines how the related records should be sent to the server in the request. You have multiple options like null, partial, id, record to make it more interesting. Have a look at the below code snippet to get a better understanding of it.

null

This is the default option for serialize. No data will be sent for the relation.

id

Only the primary key value of the related record will be sent to server.

partial

For the above two cases, either the array of primary key values or array of record objects will be sent to server, irrespective of any changes that you have made to the records. Data store goes a step ahead and gives you an option, named as partial where you can send only the changed data to the server.

For Many relation, only the added/removed/modified related data will be sent to server instead of its entire data.
For one relation, if the record is modified, only the modified related data will be sent to server.

For every object in many/one partial related payload, there will be a property '$' which can have the below values depending on the case

Partial has the following values in it.

added - contains the details of newly created record.
modified - any properties changes to the already related record
removed - related record is removed
related - saved record is related
polymorphicType - model name of the polymorphic record in relation
pk - primary key value of the record
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      comments : many( Comment, { serialize: "record"}),
      user: one( User, { serialize: "record"})
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { User };
```

For the above model definition, consider a blog record with 10 comments and a user, below is how the related data will be sent for partial changes when the serialize is partial,

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ schema: Blog, pK:"1" });
blog.comments.add({ desc : "comment11" }); // adding a new comment
blog.comments.remove( "1" );              // removing a comment from blog
blog.user.$.set( "name" , "john" );
blog.$.save();
```
```javascript
{
  blog:{
    id : "1",
    user:{
      id : "1",
      name : "john "
    },
    comments:[{
      desc : "comment11",
      $:{
        partialType : "added"
      }
    },
    {
      id : "2",
      $:{
        partialType : "removed"
      }
    }]
  }
}
```
```javascript
{
  blog : {
    id : "1",
    comments : [{
      id : "11",
    }]
  }
}
```

Note: '$' key given in the payload(request data) will not be sent to server. It is an additional information for the partial records. It can be used in serializer callbacks to check and add/remove any keys as expected by the server.

Note: Primary key value will be expected for newly created records. It should be in the same order as in payload (like it is sent to server). Additional data can also be given in the response, which will be merged with the record.

record

The entire related record object will be sent to server.
With many, an array of related record will be sent with the payload and with one, related record object will be sent with the payload

```javascript
import { Schema } from "@slyte/data";
import { prop, one, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      comments : many( Comment, {serializer: "record"} ),
      user : one( User, {serialize:"record"})
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";

import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      desc : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      email : prop( "string" ),
      phone : prop( "number" ),
      blog : one(blog)
    }
  }
}
export { User };
```

For the above model definition, consider a blog record with 10 comments and a user, below is how the related data will be sent for partial changes when the serialize is record,

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ schema:Blog, pK:"1" });
blog.comments.add({ desc : "comment11" }); // adding a new comment
blog.comments.remove( "1" );               // removing a comment from blog
blog.user.$.set( "name" , "john" );
blog.$.save();
```
```javascript
{
  blog : {
    id : "1",
    user : {
      id : "1",
      name : "john "
    },
    comments : [
    {
      id : "2",
      desc : "comment2",
    },
    {
      id : "3",
      desc : "comment3",
    },
    {
      id : "4",
      desc : "comment4",
    },
    {
      id : "5",
      desc : "comment5",
    },
    {
      id : "6",
      desc : "comment6",
    },
    {
      id : "7",
      desc : "comment7",
    },
    {
      id : "8",
      desc : "comment8",
    },
    {
      id : "9",
      desc : "comment9",
    },
    {
      id : "10",
      desc : "comment10",
    },
    {
      desc : "comment11"
    }
    ]
  }
}
```
```javascript
{
  blog : {
    id : "1",
    comments : [
    { id : "2" },
    { id : "3" },
    { id : "4" },
    { id : "5" },
    { id : "6" },
    { id : "7" },
    { id : "8" },
    { id : "9" },
    { id : "10" },
    { id : "11" }
    ]
  }
}
```
deepNest

By default, data store, only tracks the changes made to that particular record using record.$.set / relation.add / relation.remove. For tracking any changes made to the related record directly or if n level of relations has to be listened, "deepNest" options has to be given to all those levels of relation.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      comments : many( Comment, {serialize: "partial", deepNest : true} ),
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one, many } from "@slyte/core";
import { Blog } from "../blog.js";
import { Tag } from "../tag.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      desc : prop( "string" ),
      tags : many( Tag, { serialize: "partial", deepNest: true}),
      blog: one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../blog.js";
class Tag extends Schema{
  props(){
    return {
      id : prop( "string" ),
      tagName : prop( "string" ),
      comment : one(Comment)
    }
  }
}
export { Tag };
```

As per the above example, If there is any change in tag record, on saving blog record, tag data will be sent to server. Following will be the payload structure that will be sent to server.

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ Schema:Blog, pK:"1" });
var comment = blog.comments[0];
var tag = comment.tags[0];
tag.$.set( "tagName" , "tag11" );
blog.$.save();
```
```javascript
{
  blog : {
    id : "1",
    comments : [{
      id : "1",
      tags : [{
        id : "1",
        tagName : "tag11",
        $ : {
          type : "modified"
        }
      }]
    }]
  }
}
```

In the above payLoad, '$' property in the comments object will not be sent to the server ( since it is a non-iteratable property). It can be used to find the specific case and add / modify anything that is required by the server.

This will be received in serializer callbacks,which can be altered to meet the expectations of the server.

Note: Partial success of the request is not supported. Response and record state will not be changed properly in that case.

Batch Requests

A batch request consists of multiple API calls bundled into one request. It is as simple as encapsulating your requests within a function call, and db takes care of bundling the requests and resolving the responses properly.

```javascript
this.$db.batch( function(){
  this.$db.getAll({schema:LeadsSchema});
  var entity = this.$db.cache.getEntity({schema:"Accounts" , pK:"1"});
  entity.$.set( "email" , "test@zoho.com" );
  entity.$.save();
  entity.$.triggerAction( "sendEmail" );
});
```

By default, the request will be sent to /batch/ url. Request data will be sent as an object by default with key as "batch_requests", with value as an array of all the requests made inside batch. Each request will have method, uri, content, parameters (queryParams) depends on the request.
The response will be expected as an object with key batch_request and value as the array of responses respective to each request sent.
Check the sample request and response below.

```javascript
{
  batch_requests : [{
    uri : "v2/leads",
    method : "GET"
  },
  {
    uri : "v2/Accounts/1",
    method : "PATCH",
    content : {
      Accounts : {
        id : '1',
        email : 'test@zoho.com'
      }
    }
  },
  {
    uri : "v2/Accounts/1/action/sendEmail",
    method : "POST"
  }]
}
```
```javascript
// response with success code 2**
{
  batch_requests : [{
    leads : [{
      id : '1',
      name : 'test1'
    },
    {
      id : '2',
      name : 'test2'
    }]
  },
  {
    Accounts : {
      id : '1',
    }
  }]
}
```
Saving Multiple Entities

Multiple created records/deleted records/modified records can be sent to server in a single request via following.

create

To send a request for all created records, db.create method is used. This will send a POST request, with all created records payload in the request data.

```javascript
import { User } from "../../data-store/schema/user";
this.$db.create({schema:User}).then(function(){
  // Success callback
},function(){
  // Failure callback
});
```

Note: Response data should be in the same order as the request data, in order for the store to merge it with model's data.

update

To send a request for all modified records, db.update method is used. This will send a PATCH request, with all updated records payload in the request data.

```javascript
import { User } from "../../data-store/schema/user";
this.$db.update({schema:User}).then(function(){
  // Success callback
},function(){
  // Failure callback
});
```
delete

To send a request for all deleted records, db.delete method is used. This will send a DELETE request, with all deleted records id in the request data.

```javascript
import { User } from "../../data-store/schema/user";
this.$db.delete({schema:User}).then(function(){
  // Success callback
},function(){
  // Failure callback
});
```

---

### data - defining-schemas

Schemas
Schema

As mentioned in the datastore, schema is the blueprint of the data and it defines the data's properties and relations, similar to defining a table in MySQL.


You can define and register a schema just like the below code snippet.

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
  props(app){
    return{

    }
  }
}
export { User };
```
Skeleton

A sample schema is being presented here for your reference.

```javascript
import { Schema } from "@slyte/data";
import { prop, many, one } from "@slyte/core";
import { UserConnector } from "../connectors/user";
import { UserSerializer } from "../serializer/user";
import { Profile } from "./profile";
import { TestValidator } from "../../validators/custom";
import { email } from "../data-types/email";
class User extends Schema{
    static Connector = UserConnector;
    static Serializer = UserSerializer;
	props(app){
		return {
			str: prop("string"),
			custom: prop(email),
			validate: prop("string", {validation: TestValidator}),
			profiles: many(Profile),
			currentProfile: one(Profile)
		}
	}
	didLoad(){
	}
	actions(){
		return {
			"convert" : { endPoint: "crmConvert" }
		}
	}
	static observers(){
		return { obs1:function(){}.observes("str") }
   	}
}
export { User };
```
Naming

Valid class name can be a schema name. It is recommended to start the name of the schema in capital letter.

Here is a list of few component names for your reference.

Valid schema names.
User
Profile_User
Blog

Invalid schema names.
profile-user
1user
profile#user

Generate using CLI

To generate a schema using CLI, use the following command. It will create schema file under data-store/schemas folder.

```javascript
lyte generate schema User
```

The CLI will automatically add Schema.register() during the compilation. For any dynamic schema registration, register schema just like the below code snippet.

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
	props(){
	}
}
User.register();
```
Defining Props

Props is a method in schema which should return a list of all the properties of the schema in an object structure. Defined props will be validated whenever the data is set / changed in the entity. Entity can hold the properties that are not defined in schema too. When the entity is serialized, only the defined properties will be serialized and sent as payload by default.

Note: During the getAll/ getEntity/ push, props will not validated, since the data will be considered as a proper data from the server. So it is recommended to have the props in sync with your API structure.

App instance will be passed as an argument to props method as below,

```javascript
props(app){
  return {

  }
}
```

Following are the different props that can be defined.

Static Props

Attributes represent the properties of a schema, similar to how fields represent the columns of a table. You can create an attribute by defining the Attribute name, Data type, and optional constraints called Options.

The syntax for defining an attribute is:

```javascript
//import prop from lyte-util.js
AttributeName : prop( dataType , { options });
```

Primitive data types:

string
number
boolean
object
array

Dynamic Props

Other than the schema definition, field can also be added dynamically.
```javascript
db.addField({schema, key, prop, skipValidation, deserialize});
(or)
db.addField({schema, key, type, options, skipValidation, deserialize})
```
By default, the added property will be validated with the added field configurations in all the entities of the schema. However, you can ignore the validation during addField, by specifying ignoreValidation option as true.

To call deserialize for customDataType, pass deserialize option as true in the syntax as below

```javascript
this.$db.addField({schema:User, key:"username", type:"string", options:{ mandatory : true });
this.$db.addField({schema:User, key:"username", prop:prop("string",{ mandatory : true }));
this.$db.addField({schema:User, key:"username",  type:"string", options:{ mandatory : true }, skipValidation:true});
```

Note: If a prop is added again, it will replace the old prop definition.

Custom Data Type

To create custom data type using CLI, use the following command. It will create file under data-store/data-types folder.

```javascript
lyte generate data-type dollars
```

In addition to the primitive data types, you can define a custom data type and use it in a schema as shown below in the example. This custom data type should be the extended one of the predefined primitive data types.

A custom data type has two methods:

Serialize and
Deserialize

Serialize can be used to serialize the value of a prop to the format expected by the server arguments - data, key, record

Deserialize can be used to deserialize the value of a prop to a format that the client expects. arguments - data, key, model, pkVal

For example, you can define a custom data type 'dollars' as an extension of the primitive data type 'number' as follows:

```javascript
import { DataType } from "@slyte/core";
class Dollars extends DataType{
  static type = "string"
  static serialize(deserialized, key, record){
      return deserialized * 70 ;
  }
  static deserialize(serialized, key, modelName, pkVal){
      return serialized / 70 ;
  }
}
export { Dollars };
```

Custom data type can be imported and used in the schema like below,

```javascript
import { AppDb  } from "../db";
 import { prop } from "@slyte/core";
 import { Dollars } from "../data-types/dollars";
 class User extends Schema{
   props(){
     return {
       spent: prop(Dollars)
     }
   }
 }
 export { User };
```

Before setting a value, it will be validated against the specified constraints.
If satisfied the data will be stored, otherwise an error object will be returned. Apart from the available constraints, custom validators can also be added.
Note: The datas received from the server will be inserted without validating.

Note: For primitive or custom data types, data received from the server will be inserted without any validation.

nested property definition
object

The data type can also be customised even for the nested object. It can be defined as follows.

```javascript
Lyte.registerDataType("newobj" , {
  extends : "object",
  properties : {
      obj1: Lyte.attr("object" , {
          properties : {
              a : Lyte.attr("string"),
              b : Lyte.attr("number"),
              c : Lyte.attr("string")
          }
      }),
      arr1 : Lyte.attr("array",{
          items : Lyte.attr("string")
      })
  }
})
```

In the above code, 'obj1' is nested inside the object 'newobj'. And the datatypes for the key 'a', 'b' and 'c' is defined as string, number and string.

array

The datatype can also be customised for the nested arrays and it can be defined as follows.

```javascript
Lyte.registerDataType("newArr", {
    extends : "array",
    items:Lyte.attr("object",{
        properties : {
            a: Lyte.attr("string")
        }
    })
})
```
Relationships

You can also define how a schema is related to another through relationships. Below are the supported relationships in db.


one to one
one to many
many to one
many to many

Note: By default, relationships can either be one-way or two-way. It can be defined alteast in anyone of the schemas.

```javascript
import { Schema } from "@slyte/data";
import { prop, many, one } from "@slyte/core";
import { User } from "./user.js";
class Blog extends Schema{
  props(){
    return {
      id: prop("string"),
      description: prop("string"),
      bloggers: many(User)
    };
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many, one } from "@slyte/core";
import { Blog } from "./blog.js";
class User extends Schema{
  props(){
    return {
        id : prop( "string" ),
        journal : one( Blog )
    };
  }
}
export { User };
```

Note: Relationship attribute name need not be same as that of the related schema.

Prop Options

prop is a util from "@slyte/core" package, which can be used to define a static prop for a schema. Syntax of prop is,

```javascript
prop(type, options)
```

In the above syntax, options is an object. Following are the different options that can be used in props util

Primary key

Primary key is the unique identifier of schema. By default, the 'id' prop will be considered as the primary key. Other property can also be made as a primary key, by giving primaryKey as true in options while defining attribute.

```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      hashKey : prop( "string", { primaryKey : true } ),
      name : prop( "string" )
    }
  }
}
export { User };
```

Note: Only the attribute of type 'string' or 'number' can be made as primary key.

Composite key

Composite key is the combination of two or more keys that can uniquely identify an entity in the schema. Definition is more like the primary key, where here the primaryKey option can be given in more than one attribute.

```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      email : prop( "string", { primaryKey : true } ),
      id : prop("string", { primaryKey : true, baseKey : true}),
      name : prop( "string" )
    }
  }
}
export { User };
```

Note: In case of composite keys, the property with baseKey option will be used as the primary key value in the url, when a entity is being saved or deleted. It can be added as shown above in the example. In the absence of baseKey, the composite key values will be given in the request data.

Default Patterns

A pattern is a type of option that is used to perform validation checks for an attribute. It specifies the characters that are allowed to be used in the value of an attribute that is assigned to that particular pattern.

For example, an email pattern specifies the characters that are permitted to be used for an email address attribute, and defines the standard format of an email address. If a value for the attribute does not satisfy this constraint, an error message will appear. There are two kinds of patterns:

There are some default patterns that are available in sLyte. It is available in the "patterns" property in the app / addon instance. The permitted characters and the standard format for each default pattern are specified below:

email - /^([A-Za-z0-9._%\-\'\+\/]+@[A-Za-z0-9.\-]+\.[a-zA-Z]{2,22})$|[\s]+$/
url - /(^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z][-.\w]*(:[0-9])*(\/?)([a-zA-Z0-9\-\.\?\,\:\'\/\\\+=&%\$#_\[\]@!\(\)\*;~]*)?$)/
am pm - /^(AM|PM|am|pm)$/
hour - /^(0?[0-9]|1[0-9]|2[0-4])$/
minute - /^(0?[0-9]|[1-5][0-9]|60)$/
boolean - /^(true|false|TRUE|FALSE)$/
alphaNumeric - /([a-zA-Z0-9])+/
alphabetsOnly - /([a-zA-Z])+/
numeric - /([0-9])+/
phoneNo - /^[0-9a-zA-Z\+\.\(\)\-\;\s]+$/

```javascript
prop( "string" , { pattern: "email" });
```

Let's add another attribute 'email' for the schema 'user'. The 'email' attribute is defined with an option which specifies that the value for the email must follow the constraints of the email default pattern. This can be defined as follows:

```javascript
import { AppDb } from "../db";
import { prop } from "@slyte/core";
class User extends Schema{
  props(app){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      phone : prop( "number" , { minimum : 10 }),
      email : prop( "string" , { pattern : "email" }),
    }
  }
}
export { User };
```
Custom Pattern

Apart from the default patterns, custom patterns can also be registered and used. A custom pattern is registered using registerPattern method in sLyte app instance. The syntax for defining a pattern is as follows:

```javascript
appInstance.registerPattern( "moduleName" , /CustomModule[1-5]/ );
```
```javascript
import { AppDb } from "../db";
import { prop } from "@slyte/core";
class User extends Schema{
  props(app){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      phone : prop( "number" , { minimum : 10 }),
      email : prop( "string" , { pattern : "email" }),
      module : prop( "string", { pattern : "moduleName"} )
    }
  }
}
export { User };
```
Custom Validator

Sometimes, a pattern or other default validators may not be sufficient to validate an attribute. In such case, a custom validator can be registered and used. A custom validator can be registered as follows,

```javascript
import { CustomValidator } from "@slyte/core/customValidator";
class CheckLanguage extends CustomValidator{
  validate(fieldName, fieldValue){
    if( fieldValue.indexOf([ "English" , "Tamil" ]) != -1 ){
      return true;
    } else {
      return { message : "Unsupported Language" }; // returning an object with key message would align with the default error message of the data store.
    }
  }
}
export { customValidator };
```

Now, let's use the custom validator checkLanguage in the schema 'user' for an prop 'language' which is of the data type 'string'. This can be done as follows:

```javascript
import { AppDb } from "../db";
import { prop } from "@slyte/core";
import { CheckLanguage } from "../../validators/checkLanguage";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      language : prop( "string" , { validation : CheckLanguage })
    }
  }
}
export { User };
```

Note: In case of validation failure, either an object or a string can be returned. It is suggested to return the error message in an object with key message, so that it would align with the default error message of the data store.

watch

With the option watch as true in the object / array attribute, any changes made to any level in the object / array which are done using data set utils will be listened and the respective field will be made dirty in the record. Record's rollback / undo / redo can be done for these changes.

If a deepObserver ( field.* ) is given for the such attribute, the observer will be called for any deepChange in the array/object.

Considering a model with watch option as follows

```javascript
import { AppDb } from "../db";
import { prop } from "@slyte/core";
class User extends Schema{
  props(){
    return {
      obj : prop ( "object" , { watch: true } ) ,
      arr : prop ( "array" , { watch: true } ) ,
    }
  }
  static observers(){
    return {
      obs1 : function(){

      }.observes("obj.*", "arr.*");
    }
  }
}
export { User };
```

Setting a deep property in an object

```javascript
import { Component } from "../../components/component.js";
Component.set ( rec.obj.obj1 , "attr2" , "test2" );
```

Setting a deep property in an array,

```javascript
import { Component } from "../../components/component.js";
Component.set ( rec.arr[0].obj1 , "attr2" , "test11" );
```

Using arrayUtils,

```javascript
import { testApp } from "../../app.js";
testApp.arrayUtils ( rec.arr[0].obj1.arr1 , "push" , 4 );
```

After any one of the above cases, entity will be dirty. If a deep observer is defined, it will be called for the above statements.

Note: Upon a entity save, if the object / array is dirty, the entire data of the object / array will only be sent in the request payLoad.

Other Validation options

Optional constraints called options can be set for an attribute based on its data type. The available options for an attribute are:


	STRING	NUMBER	BOOLEAN	ARRAY	OBJECT
primaryKey					
default					
mandatory					
maximum					
minimum					
maxLength					
minLength					
maxItems					
minItems					
uniqueItems					
pattern					
items					
watch					
instanceof					

When you define options for an attribute, the value of the attribute will be validated against the specified constraints. The validation check will take place when you assign a value for the attribute. If the constraints are fulfilled, the data will be stored in the db. Otherwise, an error object will be returned. In addition to the available options, custom validators can also be added.

Relation Options

"one" and "many" are the utils from "@slyte/core" class. Following is the syntax of those,

```javascript
one(SchemaClass, options)
```
```javascript
many(SchemaClass, options)
```

In the above syntax, options is an object. Following are the different options that can be used in one / many util,

inverse

If two schemas are related to each other more than once, you need to explicitly specify the attribute based on which they are related. For example, a blog can have both reviewers and collaborators as users. The schema 'blog' therefore has an explicit inverse relationship with the schema 'users' in this context. To define an explicit inverse relationship between two schemas, you can use the 'inverse' option in Many. Let's define the schema 'user' and the schema 'blog' with an explicit inverse relationship as follows:

A blog has many users as reviewers.
A blog has many users as collaborators

Note: An explicit inverse relationship between two schemas can be specified in either of the schemas.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      reviewed_blogs : many( Blog , { inverse : "reviewer" }),
      edited_blogs : many( Blog , { inverse : "collaborator" })
    }
  }
}
export { User };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { User } from "../blog.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      reviewer : many( User),
      collaborator : many( User)
    }
  }
}
export { Blog };
```

The api response for blog api should be like this

```javascript
{
  blogs : [{
    id : "8675309",
    name : "Blog Title",
    reviewer : [{
      id : "user1",
      name : "userName",
      phone : "12345",
      _ type : "admin",   // This value will be recieved from the server OR computed in the serializer
      permission : "ALL"
    }],
    collaborator : [{
      id : "user2",
      name : "userName1",
      phone : "123457",
      _ type : "employee",
      designation : "MTS"
    }]
  }]
}
```
serialize

serialize is an option in the related attribute of the schema definition, to define how the related entity should be sent to the server in the request. It has the following options,

null

This is the default option for serialize. No data will be sent for the relation.

id

Only the primary key value of the related entity will be sent to server.

record

The entire related entity object will be sent to server.
Many: array of related entity will be sent with the payload,
one: related entity object will be sent with the payload

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      comments : many( Comment, {serialize: "record"} ),
      user : one( User, {serialize:"record"})
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      desc : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      email : prop( "string" ),
      phone : prop( "number" ),
      blog : one(blogSchema)
    }
  }
}
export { User };
```

For the above model definition, consider a blog entity with 10 comments and 1 user, below is how the related data will be sent for partial changes when the serialize is record,

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ schema:Blog, pK:"1" });
blog.comments.add({ desc : "comment11" }); // adding a new comment
blog.comments.remove( "1" );               // removing a comment from blog
blog.user.$.set( "name" , "john" );
blog.$.save();
```
```javascript
{
  blog : {
    id : "1",
    user : {
      id : "1",
      name : "john "
    },
    comments : [
    {
      id : "2",
      desc : "comment2",
    },
    {
      id : "3",
      desc : "comment3",
    },
    {
      id : "4",
      desc : "comment4",
    },
    {
      id : "5",
      desc : "comment5",
    },
    {
      id : "6",
      desc : "comment6",
    },
    {
      id : "7",
      desc : "comment7",
    },
    {
      id : "8",
      desc : "comment8",
    },
    {
      id : "9",
      desc : "comment9",
    },
    {
      id : "10",
      desc : "comment10",
    },
    {
      desc : "comment11"
    }
    ]
  }
}
```
```javascript
{
  blog : {
    id : "1",
    comments : [
    { id : "2" },
    { id : "3" },
    { id : "4" },
    { id : "5" },
    { id : "6" },
    { id : "7" },
    { id : "8" },
    { id : "9" },
    { id : "10" },
    { id : "11" }
    ]
  }
}
```
partial

For the above two cases, either the array of primary key values or array of entity objects will be sent to server, irrespective of the changes to only one or few of the entity. db provides an option called partial to send only the changed data to the server.

For many relation, only the added/removed/modified related data will be sent to server instead of its entire data.
For one relation, if the entity is modified, only the modified relation data will be sent to server.

For every object in many/one partial related payload, there will be a property '$' which can have the below values depending on the case

partialType - it can have the following values.
added - newly created entity is related
modified - any properties changes to the already related entity
removed - related entity is removed
related - saved entity is related
polymorphicType - schema name of the polymorphic entity in relation.
pk - primary key value of the entity.
```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      comments : many( Comment, {serialize: "partial"} ),
      user : one( User, {serialize:"partial"})
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      desc : prop( "string" ),
      blog : one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
import { Blog } from "../blog.js";
class User extends Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      email : prop( "string" ),
      phone : prop( "number" ),
      blog : one(blogSchema)
    }
  }
}
export { User };
```

For the above model definition, consider a blog entity with 10 comments and 1 user, below is how the related data will be sent for partial changes when the serialize is partial,

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ schema:Blog, pK:"1" });
blog.comments.add({ desc : "comment11" }); // adding a new comment
blog.comments.remove( "1" );              // removing a comment from blog
blog.user.$.set( "name" , "john" );
blog.$.save();
```
```javascript
{
  blog:{
    id : "1",
    user:{
      id : "1",
      name : "john "
    },
    comments:[{
      desc : "comment11",
      $:{
        partialType : "added"
      }
    },
    {
      id : "2",
      $:{
        partialType : "removed"
      }
    }]
  }
}
```
```javascript
{
  blog : {
    id : "1",
    comments : [{
      id : "11",
    }]
  }
}
```

Note: '$' key given in the data. And this data is passed as an argument to the connector and the serializer. Have a look at the request data of the above code snippet to get a better understanding of it. This data will not be sent to server. It is an additional information for the partial entity. It can be used in serializer callbacks to check and add/remove any keys as expected by the server.

Note: Primary key value will be expected for newly created records. It should be in the same order as in payload (like it is sent to server). Additional data can also be given in the response, which will be merged with the entity.

deepNest

By default, db only tracks the changes made to that particular entity using entity.$.set / relation.add / relation.remove. For tracking any changes made to the related entity directly or if n level of relations has to be listened, "deepNest" options has to be given to all those levels of relation.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
import { User } from "../user.js";
class Blog extends Schema{
  props(){
    return {
      id : prop( "string" ),
      comments : many( Comment, {serialize: "partial", deepNest : true} ),
    }
  }
}
export { Blog };
```
```javascript
import { Schema } from "@slyte/data";
import { prop, one } from "@slyte/core";
import { Blog } from "../blog.js";
import { Tag } from "../tag.js";
class Comment extends Schema{
  props(){
    return {
      id : prop( "string" ),
      desc : prop( "string" ),
      tags : many( Tag, { serialize: "partial", deepNest: true}),
      blog: one( Blog )
    }
  }
}
export { Comment };
```
```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
import { Comment } from "../blog.js";
class Tag extends Schema{
  props(){
    return {
      id : prop( "string" ),
      tagName : prop( "string" ),
      comment : one(Comment)
    }
  }
}
export { Tag };
```

As per the above example, If there is any change in tag entity, on saving blog entity, tag data will be sent to server. Following will be the payload structure (db property argument in the connector/ serilizer callback) that will be sent to server.

```javascript
import { Blog } from "../blog.js";
var blog = this.$db.cache.getEntity({ schema:Blog, pK:"1" });
var comment = blog.comments[0];
var tag = comment.tags[0];
tag.$.set( "tagName" , "tag11" );
blog.$.save();
```
```javascript
{
  blog : {
    id : "1",
    comments : [{
      id : "1",
      tags : [{
        id : "1",
        tagName : "tag11",
        $ : {
          type : "modified"
        }
      }]
    }]
  }
}
```

In the above payLoad, '$' property in the comments object will not be sent to the server ( since it is a non-iteratable property). It can be used to find the specific case and add / modify anything that is required by the server.

This will be received in serializer callbacks, where it can be changed to how the server expects.

Note: partial success of the request is not supported. Response and entity state will not be changed properly in that case.

inherit

Whenever an action such as toJSON / revert / drop is performed over an record, action won't be passed on to the relation / related records. With this inherit option as true, those actions can be inherited to the related records too.

```javascript
import { appStore } from "../store.js";
import { prop, many, one } from "@slyte/core";
import { UserModel } from "../user.js";
class ProfileModel extends appDb.Model{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      user : one(UserModel, { inherit: true })
    }
  }
}
export { ProfileModel };
```
```javascript
import { appStore } from "../store.js";
import { attr } from "@lyte/core/lyte-utils";
class UserModel extends appDb.Model{
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
    }
  }
}
export { UserModel };
```
didLoad

By default, datastore provides a didLoad callback, which will be called when a entity is inserted into the schema.

```javascript
import { Schema } from "@slyte/data";
import { prop } from "@slyte/core";
class User extends Schema{
 props(){
    return {
      id : prop( "string" ),
      name : prop( "string" )
    }
  }
  didLoad(){

  }
}
export { User };
```

Note: 'this' context inside the didLoad callback will be the entity

EndPoint

EndPoint is the suffix to URI which will be added to the URL instead of Schema name. It will be declared in the schema definition as given below.

```javascript
import { Schema } from "@slyte/data";
  class User extends Schema{
    static endPoint = "userDetails";
    props(){
      // prop definitions
    }
  }
User.register();
```
Observers

An observer is a listener that watches a property for the occurence of a specified event and performs the required actions when the event occurs. The actions to be performed when the event occurs are defined in the form of a function in the observer's definition. Whenever the specified event occurs, the observer is automatically invoked and the defined actions are executed.


Do check, for the types of observers. Instead of the component's data properties, properties defined in the model has to be used.

Let's create the attributes 'firstname', 'lastname', 'amount', 'amountInDollar', and 'fullname' in the schema 'user'. The attribute 'fullname' is computed from 'first name' and 'last name', and the attribute 'amountInDollar' is computed from 'amount' using the observes function. Here, the attribute 'inDollar' will be invoked when the data is loaded from the server. We therefore use the on("init") function. This can be done as follows:

```javascript
import { AppDb } from "../db";
import { prop } from "@slyte/core";
import { Dollars } from "../data-types/dollars";
class User extends Schema{
	props(){
		return {
			id : prop( "string" ),
			firstname : prop( "string" ),
			lastname : prop( "string" ),
			amount : prop( "number" ),
			amountInDollar : prop( "number" ),
			fullname : prop( "string" )
		}
	}
	static observers(){
		return {
			obs1: function(){
				this.$.set( "fullname" , this.firstname + " " + this.lastname ); // this represents record instance.
			}.observes("firstname", "lastname"),
			obs2: function(){
				this.$.set( "currency" , this.amount * 60 );
			}.observes("amount")
		}
	}
}
export { User };
```

Note: Observers will be invoked when the values are set explicitly. By default, they will not be called if the data is loaded from the server. If you require an observer to be invoked when the data is loaded from the server, you should use the "init" function.

deprecateProps

Schema props can be deprecated by defining those props like given below. To enable the deprecate option set deprecateModelFields as true

```javascript
//db.js
 class AppDb extends Db{
    static deprecateProps = true; // deprecate option enalbled
    lookups() {
      return []
  }
}
```

deprecateProps can be defined just like the below code snippet.

```javascript
class user extends Schema{
    static deprecateProps = ["name"];
      props(){
          return {
              id: prop("string"),
              name : prop("string")
          }
      }
}
```
Action Handling

In some cases, you might need to accomplish certain tasks in your application, such as triggering an action on a entity. You can define custom actions and invoke them using the triggerAction method. Action will be configured as shown below.

Defining action

Let's define the actions 'sendMail' and 'convert' in the schema 'user'. They can be defined as follows:

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
	actions(){
		return {
			sendMail: { endPoint: "send" },
			convert : {}
		}
	}
}
export { User };
```
triggerAction in entity

Once the actions have been configured, you can use the triggerAction method to trigger the action, which will in turn instantiate a POST request to the server. The sendMail action is triggered as follows:

```javascript
import { User } from "../../data-store/schemas/user";
var user = this.$db.getEntity({schema:User, pK:"123"});
user.$.triggerAction( "sendMail" , { "version" : "1.2" });           // => POST '/user/123/action/sendMail'
```
triggerAction in schema
```javascript
this.$db.triggerAction({schema:User , action:"sendMail" , qP:{ "version" : "1.2" });   => POST '/user/action/sendMail'
```

Along with the Request Method, data for an action can also be passed as show in the example below.

```javascript
import { User } from "../../data-store/schemas/user";
var user = this.$db.getEntity({schema: User, pK:"123"});
user.$.triggerAction( "sendMail" , { "version" : "1.2" }, {} , "POST" , { mailContent : 'hi, this is from sLyte team' });          // => POST '/user/123/action/sendMail'
// OR
this.$db.triggerAction({schema:User , action:"sendMail" , qP:{ "version" : "1.2" }, method:"POST", data:{ mailContent : 'hi, this is from sLyte team' }});   => POST '/user/action/sendMail'
```
Add a Prop Dynamically

Other than the schema definition, field can also be added dynamically and the syntax is as follows:

db.addField({schema, key, prop, skipValidation, deserialize});

You can also use the following syntax.

db.addField({schema, key, type, options, skipValidation, deserialize});

To call deserialize for customDataType, pass deserialize option as true in the above syntax.

By default, the added property will be validated with the added field configurations in all the entities of the schema. However, you can ignore the validation during addField, by specifying ignoreValidation option as true.

Have a look at the below code snippet, where a prop named as 'username' is added dynamically.

```javascript
this.$db.addField({schema:User, key:"username", type:"string", options:{ mandatory : true });
this.$db.addField({schema:User, key:"username", prop:prop("string",{ mandatory : true }));
this.$db.addField({schema:User, key:"username",  type:"string", options:{ mandatory : true }, skipValidation:true});
```

Note: If a prop is added again, it will replace the old prop definition.

Unregistering Schema

If you are looking for an option to unregister a schema, here it is. With this, one or arrays of schemas can be unregistered using unregisterSchema method in db Instance. And here is the syntax for it.
db.unregisterSchema(name / [name]);

```javascript
this.$db.unregisterSchema( "user" );
(OR)
this.$db.unregisterSchema([ "user" , "profile" ]);
```

Note: Upon unregistering a schema, all the entities in that specific schema will only be dropped. The related data of the unloaded records will not be dropped.

---

### data - connectors

Customizing Connector
Connector

A Connector is a callback layer, which can be used to set/modify URL format, headers, method, queryParams etc. Data store extends its support to both RESTConnector and GraphqlConnector, which support REST and Graphql standards respectively.

Generate Using CLI

To generate a connector using CLI, use the following command.

```javascript
lyte generate connector user
```
Skeleton

On creating a connector, you can find the connector class. Have a look at the below code snippet to find out the available call backs. You can pass the required arguments based on your needs. Keep reading to understand the needs and importance of these callbacks.

```javascript
import { RESTConnector } from "@slyte/data";
class UserConnector extends RESTConnector{
  host = "https://crm.zoho.com";
  namespace = "/crm";
  actionNamespace = "/actions";
  withCredentials = true;
  requestURL({schemaName, type, queryParams, payLoad, url, actionName, customData, key}){
  }

  requestMethod({method, type , queryParams , customData, actionName, key}){
  }

  requestHeaders({type, queryParams , customData, actionName, key}){
  }

  refetch({cachedData, queryParams}){
  }

  refetchAll({cachedData, queryParams}){
  }

  processRequest({type , schemeName , payLoad , cachedData , customData , queryParams , key, url, actionName, method, headers}){
  }

  parseResponse({type , schemaName , xhrObj , payLoad , queryParams, key, actionName}){
  }

  parseRequest({type , schemaName , xhr , queryParams , key , customData }){
  }
}
export { UserConnector };
```
```javascript
import { GraphqlConnector } from "@slyte/data";
class UserConnector extends GraphqlConnector{
    host = "https://crm.zoho.com";
    namespace = "/crm";
    withCredentials = true;
    gql = {
      query : {
        user : `userProperties(id ID) { id name zuid }`
      },
      mutation : {
        create:`createUser(user Object){
            id
            profile{
              id
            }
        }`
      }
    }
    buildGqlQuery({gqlObj}){

    }
    requestURL({schemaName, type, queryParams, payLoad, url, actionName, customData, key}){
    }

    requestMethod({method, type , queryParams , customData, actionName, key}){
    }

    requestHeaders({type, queryParams , customData, actionName, key}){
    }

    refetch({cachedData, queryParams}){
    }

    refetchAll({cachedData, queryParams}){
    }

    processRequest({type , schemeName , payLoad , cachedData , customData , queryParams , key, url, actionName, method, headers}){
    }

    parseResponse({type , schemaName , xhrObj , payLoad , queryParams, key, actionName}){
    }

    parseRequest({type , schemaName , xhr , queryParams , key , customData }){
    }
  }
  export { UserConnector };
```
Adding to Schema

You can easily add the connector to the schema in two ways. You can either declare the connector as a variable or you can add it as a function and get it returned in the static connector just like the below code snippet.

```javascript
import { AppDb } from "../db";
import { UserConnector } from "../connectors/user";
class User extends AppDb.Schema{
  static Connector = UserConnector;
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
```javascript
import { AppDb } from "../db";
import { UserConnector } from "../connectors/user";
import { UserGqlConnector } from "../connectors/user"
class User extends AppDb.Schema{
  static Connector({type}){
    if(type == "getAll"){
      return UserGqlConnector;
    }
    return UserConnector;
  }
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
Callback Arguments

As mentioned above, you can pass the required arguments inside the object notation of the callbacks. Below is the list of arguments along with its properties.

Properties and its details
REST
Graphql
type - type of method, which triggered the request( possible values - get / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / action )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object

If just one or two properties alone is required for a callback only that can be passed. Observe the below code to find out that only two arguments(type, url) is passed in the requestURL callback.

```javascript
import { ApplicationConnector } from "./application";
class UserConnector extends ApplicationConnector{
  requestURL({type, url}){
    if(type == "get"){
      return "/users"
    }
    return url;
  }
}
export { UserConnector };
```
Structuring a Connector

Ideal way is to have an application connector as the base connector for the db. It is good to mention the same in the db. This should extend either RESTConnector or GraphqlConnector. All the schema specific connectors, should extend this application connector.

```javascript
import { Db, GraphQLConnector } from "@slyte/data";
class AppDb extends Db{
static Connector = GraphQLConnector;
}
export { AppDb };
```

Below is an example for RESTConnector.

```javascript
import { RESTConnector } from "@slyte/data";
class ApplicationConnector extends RESTConnector{
  requestURL({type, queryParams, url}){
        return url;
      }
}
export { ApplicationConnector };
```
```javascript
import { ApplicationConnector } from "./application";
class UserConnector extends ApplicationConnector{
  requestURL({type, queryParams, url}){
    if( type == "get" && queryParams.email ){
        queryParams.default = true;
    }
    return url;
  }
}
export { UserConnector };
```
Common Usage
Modify the URL

URL can be modified in requestURL. callback of the adapter. This callback will be called before data store makes a API request, where you can modify the URL if needed.

```javascript
requestURL({schemaName, type, queryParams, payLoad, url, actionName, customData}){
  // Any Modification to URL
  return url;
}
```
Modify the queryParams

Query params can be set or modified in the requestURL / requestMethod / requestHeaders connector callbacks, where the queryParams object is passed. You can set / modify the queryParams in that object, which is passed.

```javascript
requestURL({ schemaName , type , queryParams , url }){
  if( type == "get" && queryParams.email ){
    queryParams.default = true;
  }
  return url;
}
```
```javascript
requestHeaders({ type , queryParams}){
  if( type == "FINDALL" && queryParams.email ){
    queryParams.default = true;
  }
  return {};
}
```
```javascript
requestMethod({ method }){
  if( method == "PATCH" ){
    return "PUT";
  }
  return method;
}
```

Note: queryParams object passed is a reference object. Do no set any new object to it. Set or modify in the same object that is passed to the callbacks.

Set the headers of request

Headers can be set for the request that are made via db. This callback will be called before any request that is made via db.

```javascript
requestHeaders(){
  return {
    'API_KEY' : 'secret key',
    'ANOTHER_HEADER' : 'Some header value'
  };
}
```
Modify the method of request

By REST API standard, following methods will be added based on the specific use case.

POST - new record creation
PATCH - any record changes
DELETE - record deletion
GET - get record details

If the method has to be changed for any of the use case, it can be done via requestMethod callback.

```javascript
requestMethod({method}){
  if( method == "PATCH" ){
    return "PUT";
  }
  return method;
}
```
Replace the request layer

By default, db will make request via javascript's default XHR methods. It can be replaced here, with a promise, which should be resolved on success and rejected on failure.

```javascript
processRequest({type}){
  var prm;
  if( type === "findAll" ){
    prm = new Promise( function( resolve , reject ){
      resolve( JSON.stringify({
        todo : Object.keys( TODO ).map(function( k ){
          return TODO[k]
        })
      }))
    });
  } else {
    return undefined;
  }
  return prm;  // Promise
}
```
Common error handling for all the schema request

parseResponse is the only adapter callback, which will be called after the response is received. XHR will be passed as a argument to this callback. It can be used to check, if the request is successful or not. Based on it, you can throw error messages, if needed.

By default, Data store expects response code to be 2xx for success and 3xx or 4xx for failure. Consider the case, where the server fails for particular API request, yet sends a success code. To handle such cases, use promise like the below code snippet to get it resolved for success or to reject it for failure.

```javascript
parseResponse({ type, XHR, payLoad}){
  if( XHR.status == 400 ){
    alert( "Request failure" );
  }
  return payLoad;
}
```
```javascript
parseResponse({ type , XHR , payLoad }}){
  return new Promise( function(resolve,reject){
    if( xhrObj.status == 200 ){
      resolve(payLoad);
    } else {
      reject(payLoad);
    }
  });
}
```
Calling parent connector

Using super, parent connector callbacks can be called. Arguments can also be called just like below.

```javascript
requestURL(){
    return super.requestURL(...arguments);
}
```
Initialize customData

customData can only be passed via some db / entity methods. You can also initialize customData in connector.

```javascript
import { ApplicationConnector } from "./application";
class testConnector extends applicationConnector{
  customData = {};
  requestURL({customData, url}){
    customData.processData = true;
    return url;
  }
}
export { testConnector };
```
Customizing GraphqlConnector
Configure / Modify gql query

To modify / configure the query name / variables, "buildGqlQuery" callback can be used. It should return an object with properties such as query and variables.

```javascript
buildGqlQuery({type, gqlObj}){
  if(gqlObj.queryName == "user1"){
    gqlObj.variables = ["id"];
  }
  return gqlObj;
}
```
Modify the method of gql request

By Graphql API standard, all the cases are handled via POST method.

If the method has to be changed for any of the use case, it can be done via requestMethod callback.

```javascript
requestMethod({type, method}){
  if( type == "updateEntity" ){
    return "PUT";
  }
  return method;
}
```

---

### data - serializers

Customizing Serializer
Serializer

Serializer is a callback layer where the request and the response data can be modified and configured before being sent and received from the server. By default Data store supports RESTSerializer and GraphqlSerializer, which support REST and Graphql standards respectively.

Generate Using CLI

To generate a serializer using CLI, use the following command.

```javascript
lyte generate serializer user
```
Skeleton

On creating a serializer, you can find the class serializer. Have a look at the below code snippet to find out the available call backs. You can pass the required arguments based on your needs. Keep reading to understand the needs and importance of these callbacks..

```javascript
import { RESTSerializer } from "@slyte/data";
class UserSerializer extends RESTSerializer{
  normalizePayload({schemaName, type, payLoad, key, status, headers, queryParams, customData, opts }){
    return payLoad;
  }
  serializePayload({type , data ,cachedData, customData, schemaName, queryParams, actionName}){
    return data;
  }
  serializeKey({schemaName, type, customData, queryParams}){
  }
  getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  }
  normalizeKey({schemaName, type, key, queryParams, customData, opts}){
  }
  serializeEntity({entityData, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityData;
  }
  normalizeEntity({entityPayload, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityPayload;
  }
}
export { UserSerializer };
```
```javascript
import { GraphqlSerializer } from "@slyte/data";
class UserSerializer extends GraphqlSerializer{
  serializeGqlQuery({gqlObj}){
    return gqlObj
  }
  serializeSelfQuery({selfGqlObj}){
    return selfGqlObj;
  }
  normalizePayload({schemaName, type, payLoad, key, status, headers, queryParams, customData, opts }){
    return payLoad;
  }
  serializePayload({type , data ,cachedData, customData, schemaName, queryParams, actionName}){
    return data;
  }
  serializeKey({schemaName, type, customData, queryParams}){
  }
  getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  }
  normalizeKey({schemaName, type, key, queryParams, customData, opts}){
  }
  serializeEntity({entityData, cachedData, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityData;
  }
  normalizeEntity({entityPayload, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityPayload;
  }
}
export { UserSerializer };
```
Adding to Schema

In the schema class, the serializer class can be added either in the static Serializer variable or can be returned in static Serializer method as below.

```javascript
import { Schema } from "@slyte/data";
import { UserSerializer } from "../serializers/user";
class User extends Schema{
  static Serializer = UserSerializer;
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
```javascript
import { Schema } from "@slyte/data";
import { UserSerializer } from "../serializers/user";
import { UserGqlSerializer } from "../serializers/gql/user";
class User extends Schema{
  static Serializer({type}){
    if(type == "updateEntity"){
      return UserGqlSerializer;
    }
    return UserSerializer;
  }
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
Callback Arguments

As mentioned above, you can pass the required arguments inside the object notation of the callbacks. Below is list of arguments along with its properties.

Properties and its details
REST
Graphql
type - type of method, which triggered the request( possible values - get / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / action )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object

If just one property is required for a callback, it can be destructured like below

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return payLoad;
  }
}
export { UserSerializer };
```
Expected Response Structure

For all types of request, datastore will expect the response in a specific format. It should be an object which can have two keys, one with schemaName value as the key which has the payload data as value and other with meta key which has the meta information of the request.

[schemaName] : [Response data]
"meta" : [meta information]

Consider for the schema with name "user", following structure will be expected.

```javascript
{
        "user" : { } /  [  ] ,
        "meta" : Some meta information which can be of any type ( Optional )
}
```
Structuring a Serializer

Ideal way is to have an application serializer as the base serializer for the db. It is good to mention the same in the db. This should extend either RESTSerializer / GraphqlSerializer. All the schema specific connectors, should extend this application connector.

```javascript
import { Db, RESTConnector, RESTSerializer } from "@slyte/data";
class AppDb extends Db{
static Serializer = GraphQL;
}
export { AppDb };
```

Below is an example for RESTSerializer.

```javascript
import { RESTSerializer } from "@slyte/data";
class ApplicationSerializer extends RESTSerializer{
  normalizePayload({type, queryParams, payLoad}){
        return payLoad;
      }
}
export { ApplicationSerializer };
```
```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return payLoad;
  }
}
export { UserSerializer };
```
Usage
Modify the response - from server

Response received from the server, will be expected in some format by the data store. Check expected response structure before it is given to data store, if it is not in the format as the data store expects, then it can be modified in normalizePayload or normalizeEntity callbacks as per the needs.

First entire response will be received in normalizePayload callback. And you can use normalizeEntity callback to call each data entity object.

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizeEntity({schemaName, type, entityPayload, customData, opts}){
    entityPayload.fromServer = true;
    return entityPayload;
  }
  normalizePayload({schemaName, type, payLoad, key, xhr, headers, queryParams, customData, opts}){
    payLoad[ schemaName ].sort( function( a , b ){ return a.id > b.id })
    return payLoad;
  }
});
export { UserSerializer };
```
Modify the payload - to server

Before a request data is sent to server, serializeEntity callback will be called for each entity object that is being sent to server. Then the entire payload will be recevied in serialize callback, where the request serializePayload structure can be modified, if needed.

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  serializeEntity({schemaName, type, entityData, customData, opts}){
    return entityData;
  }
  serializePayload({schemaName, type, data, key, xhr, headers, queryParams, customData, opts}){
    return data;
  }
});
export { UserSerializer };
```
Determine the payLoad data key

If the schema data is received in some other key other than its schemaName key, then you can specify the key for which the schema data is received, in normalizeKey callback in the serializer.

```javascript
normalizeKey({schemaName , type , key , queryParams , customData, opts}){
  return "data";
}
```
Determine the metadata for the request

In simple terms, Metadata is some additional information about the request.
such pageno, perpage etc.,

Metadata can be returned for a request in the serializer callback getMeta .

```javascript
getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  return payLoad.meta;
}
```
Method for calling parent serializer callbacks

Using super, parent serializer callbacks can be called. Arguments can be called like below

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return super.normalizePayload(..arguments);
  }
}
export { UserSerializer };
```
Customizing GraphqSerializer
Configure / modify the base graphql query

The query which is sent to the server can be configured or customized in serializeGqlQuery. In serializeGqlQuery, entire query with its variables will be received as an argument in gqlObj, which can be modified if required and returned.

```javascript
serializeGqlQuery({type, gqlObj}){
  if(type !== "deleteEntity" || type !== "delete"){
      gqlObj.variables={insert_Data:gqlObj.data}
  }
  else{
      gqlObj.variables={delete_data:gqlObj.data}
  }
  return gqlObj;
}
```

Here, in this query gglObj and in its callback, an object gets returned with the following keys,

type - Query or Mutation
query - query in object structure
mutation - query in object structure
variables - variables of query
queryType - default or namedQuery or query
queryName - query name (for namedQuery)
mutationType - default or namedMutation or customMutation
mutationName - mutation name (for namedMutation)
Configure / modify any self graphql query

To serialize any query either for the parent schema or relation schema, serializeSelfQuery callback can be used. In simple terms, this can be used for the nested or the parent model.

Example: If we make a query for user(parent) and the profile as child, then for user, user serializer's serializeSelfQuery gets called and for profile, the profile serializer's serializeSelfQuery get called.

```javascript
serializeSelfQuery({type, selfGqlObj}){
  return selfGqlObj.query;
}
```

Here, in this query selfGqlobj and in its callback an object gets returned with the following keys,

query - properties of that schema in array structure
variables - variables of the query as object

Here, It returns the subfields(array) for the given call backs.

---

### data - error-handling

Error Handling

Proper handling of errors makes the application clean. Have a glimpse on the below document to figure out the ways to handle the error. But where to find the errors?

You can find the error details in entity.$.error as an object with the key containing the error codes, error messages.

Validation Error

Entity will only hold the successfully validated value. If there is any validation error while setting / creating, the value will not be set and the error will be thrown. Error details will be available in entity.$.error and the entity.$.isError will be set to true.

entity.$.error is an object with property name as the key and error object as the value. Check here to know about the structure of error object.

newEntity
```javascript
var entity = this.$db.newEntity({ schema:Profile, data:{ name:"john", phone:12344 }});
if(entity.$.isError){
   // error handling
   console.log(entity.$.error);
   // error details
}
```

Note: In case of newEntity, for any validation failures, error object will be returned. Entity object will not be created in such cases.

set
```javascript
var entity = this.$db.cache.getEntity({ schema:Profile, pK:"1" });
entity.$.set("name", 123);
if(entity.$.isError){
  // error handling
  console.log ( entity.$.error ) ; // error details
}
```
Error Object

Error object has the following keys:

code - Error code
message - Error message
expected - Expected type
value - value that was set

Error Codes

If entity's value did not match the given validation rules, the following error codes and error messages will be set in the error object.

S.NO	ERROR CODE	REASON
1	ERR01	When a primary key is being modified.
2	ERR02	When mandate field is set to empty.
3	ERR03	Type of value does not match the specified data type","expected":"string.
4	ERR04	When the given value is greater than the specified maximum limit (maximum check fails).
5	ERR05	When the given value is less than the specified minimum limit (minimum check fails)
6	ERR06	When the length of a given string/array is greater than the specified value (maxLength/maxItems check fails)
7	ERR07	When the length of the given string/array is less than the specified value (minLength/minItems check fails)
8	ERR08	When the given string does not match the specified regex (pattern check fails)
9	ERR09	When the values in the given array are not unique (unique check fails)
10	ERR10	When the given value is not equal to the specified constant (constant check fails)
11	ERR11	When the model of a related field is not defined.
12	ERR12	When the model of the backward relation field is not defined.
13	ERR13	When an empty record is set for a relation.
14	ERR14	This error gets thrown if the related field model and the specified model does not match
15	ERR15	While creating a new record, if an object has been passed as a related field value, and if that object fails in creating a record.
16	ERR16	This gets thrown, while trying to create a new record with a primary key value of an exisiting record.
17	ERR17	Trying to change a value of a record which has been deleted.
18	ERR18	Action not defined
19	ERR19	Model not defined while trying to perform CRUD operations.
20	ERR20	Key for findRecord not specified.
21	ERR21	Expecting a single object or id, instead of an array.
22	ERR22	Type not specified for a polymorphic relation
23	ERR23	Primary Key value not present
24	ERR24	Error while relating record
25	ERR25	Backward relation not present
26	ERR26	Primary key value cannot be undefined or null
26	ERR26	Observer can observe only string data type value

The error messages can be modified using setErrorMessages method in store. Ex: store.setErrorMessages({ERRO1:I18n.getMessage("isEmpty")}); .

Request Error
In API request

In case of any request related failures (like response code 4** or 5**), XHR object will be given in the failure callbacks of any store related requests.

```javascript
import { Blog } from "../../data-store/schemas/blog";
this.$db.getAll({ schema:Blog }).then(
function( data ){
// success function
},
function( xhr ){
// failure function
}
);
```
```javascript
import { Blog } from "../../data-store/schemas/blog";
var entity = this.$db.cache.getEntity({ schema:Blog, pK:"1"});
entity.$.save().then(
function( data ){
  // success function
},
function( xhr ){
  // failure function
}
);
```
Partial Success handling

At times while dealing with multiple create, update and delete you may face partial success. The term partial success refers that not all entities gets successfully created, updated or deleted. Few errors may occur. And to handle such error, return the response payload of the failed entity in the following structure

```javascript
{
  $ : {
    isError : true
  }
}
```

Let us consider a schema named as user in which you can expect the partial success response as follows while creating the entity.

```javascript
{
  user: [{
      id:"1"
    },
    {
      id:"2"
    },
    {
      $: {
        isError: true
      }
    },
    {
      id:"4"
    },
    {
      $: {
        isError: true
        }
    }]
}
```

In the above example, three entities are successfully created and two entities are not created. In such responses, changes will be persisted according to the response.

Merge server error with entity error

Server validation error for attributes can be merged with the entity, when the entity payload is in the following structure,

```javascript
{
  error: {
    name : { code: "ERR03", message: "test"}
  },
  $ : {
    isError : true
  }
}
```

Let us consider a schema named as 'user',handling multiple create, response payload would be expected as follows

```javascript
{
user: [{
    id:"1"
  },
  {
    id:"2"
  },
  {
    error:{
      name: { code: "ERR03", message: "invalid data"}
    },
    $:{
      isError: true
    }
  },
  {
    id:"4"
  },
  {
    error:{
      phone : { code: "ERR03", message: "invalid data" }
    },
    $: {
      isError : true
    }
  }]
}
```

---

### data - events

Event & Callbacks
Events Handling

For an event, one or more event listeners can be created. All the listeners will be called one by one, when that specific event occurs. Below are the list of possible events thrown at different scopes.

For an entity events like change, error, set can be thrown.

For a Schema, events like add,remove,change can be thrown.

For a db Instance, events like add,remove,change,beforeRequest, afterRequest can be thrown.

Keep reading the following sections to see how the events can be handled with much ease.

Hooks

In simple words, hooks are nothing but methods,helping you out with adding,removing and emiting the event listeners at different scopes.

addEventListener:

This helps you to add event listeners while you add, remove or make any change to target(entity.$/schema/db). With this hook, you get an 'id' in return. Have a look at the below code snippet to see how it works.

The syntax is as follows:

target.addEventListener(type,function(){..});
```javascript
var entity = this.$db.cache.getEntity({schema: TodoSchema, pK:"1"});
var id = entity.$.addEventListener( "change" , function(data , attr ){
  console.log( "changes in entity-" , data );
});
var eid = entity.$.addEventListener( "error" , function( data , attr , errorObj ){
  console.log( "validation error in attr" , attr , "for" , data );
));
```
```javascript
var schema = this.$db.getSchema("todo");
var id_1 = schema.addEventListener( "add" , function( data ){
console.log( data , "is added" );
});
var id_2 = schema.addEventListener( "change" , function( data , attr ){
// attr - an array of attributes
console.log( "changes in record-" , data , "for attr" , attr );
});
var id_3 = schema.addEventListener( "remove" , function( data ){
console.log(data , "is removed" );
});
```
```javascript
var id_4 = this.$db.addEventListener( "add" , function ( schemaName , entity ){
  console.log( entity , "is added to schema-" , schemaName );
});
var id_5 = this.$db.addEventListener( "change" , function ( schemaName , entity , attr ){
  console.log( "changes in entity-" , entity , "for attr" , attr , "for schema-" , schemaName );
});
var id_6 = this.$db.addEventListener( "remove" , function ( schemaName , entity ){
  console.log( entity , "is removed from schema-" , schemaName );
});
var id_7 = this.$db.addEventListener( "beforeRequest" , function ( XHR , schemaName , type , key, queryParams ){

});
var id_8 = this.$db.addEventListener( "afterRequest" , function ( XHR , modelName , type , key, queryParams ){

});
```
removeEventListener:

This hook helps you to remove event listeners from the target. It helps you out to remove single listener with respect to id, specific type like add,remove and change. It also lets you to remove all listeners.

To remove the event with respect to id and type, both the id and type has to be passed as an argument to removeEventListener.

The syntax is as follows:

target.removeEventListener(id/type);
```javascript
import { TodoSchema } from "../../data-store/schemas/todo";
var entity = this.$db.cache.getEntity({schema: TodoSchema, pK:"1"});
// Using id
entity.$.removeEventListener( id );
// Using type
entity.$.removeEventListener( "change" );
// To remove all
entity.$.removeEventListener();
```
```javascript
var schema = this.$db.getSchema( "blog" );
// Using id
schema.removeEventListener( id_1 );
// Using type
schema.removeEventListener( "add" ); // removes all add event listeners
// To remove all
schema.removeEventListener();        // removes all(add/remove/change) listeners registered to schema
```
```javascript
// Using id
this.$db.removeEventListener(id_4 );
// Using type
this.$db.removeEventListener("change" );
// To remove all
this.$db.removeEventListener(); // removes all(add/remove/change) listeners registered to store
```
emit:

You can also add custom event listeners other than add/change/remove. Use emit to call such listeners whenever necessary.

The syntax is as follows:

target.emit ( type ,[ args ] );,where args is an array of arguments
```javascript
import { TodoSchema } from "../../data-store/schemas/todo";
var entity = this.$db.cache.getEntity({schema: TodoSchema, pK:"1"});
entity.$.addEventListener( "custom" , function( args ){
  // custom listener function
});
// Call emit to throw this event
entity.$.emit( "custom" , [ "arguments" ]);
```
```javascript
var schema = this.$db.getSchema( "blog" );
schema.addEventListener( "custom" , function( args ){
  // custom listener function
});
// Call emit to throw this event
schema.emit( "custom" , [ "arguments" ]);
```
```javascript
this.$db.addEventListener( "custom" , function ( args ){
  // custom listener function
});
// Call emit to throw this event
this.$db.emit( "custom" , [ "arguments" ]);
```

Note: These listeners will be invoked in the order of schema,entity,db.

Events
Entity:

Below are the events that are thrown to the entity.

change:

Whenever there is a change in the value of any defined attribute in a entity(through any data set utils ), change event will be thrown to that specific entity scope. Event listener can be added to it to listen to it as below. And while passing it, the listener arguments would be the entity and the attr.

```javascript
import { TodoSchema } from "../../data-store/schemas/todo";
var entity = this.$db.cache.getEntity({schema:TodoSchema, pK:"1"});
var id = entity.$.addEventListener( "change" , function(data , attr ){
  console.log( "changes in entity-" , data );
});
```
```javascript
entity.$.removeEventListener(id);
```
error:

During any entity's set, if the validation fails, error will be set in that entity. In such cases, error event will be triggered over the entity's scope. And while passing it the listener's arguments would be entity, attr, errorObj.

```javascript
import { TodoSchema } from "../../data-store/schemas/todo";
var entity = this.$db.cache.getEntity({schema:TodoSchema, pK:"1"});
var id = entity.$.addEventListener( "error" , function(data , attr, errorObj ){
console.log( "error in entity-" , data );
});
```
```javascript
entity.$.removeEventListener(id);
```
set:

Whenever a value is being set to any defined attribute in an entity(through any data set utils, set event will be thrown to that entity's scope. Event listener can be added to it as shown below. And while passing it, the listener arguments would be the entity and the attr.

```javascript
import { TodoSchema } from "../../data-store/schemas/todo";
var entity = this.$db.cache.getEntity({schema:TodoSchema, pK:"1"});
var id = entity.$.addEventListener( "set" , function(data , attr ){
console.log( "changes in entity-" , data );
});
```
```javascript
entity.$.removeEventListener(id);
```
Schema:
add:

Whenever any new entity gets added to the schema, add event will be thrown to that specific schema scope. Event listener can be added to it as shown below. In such cases the Listener arguments would be an entity.

```javascript
var schema = this.$db.getSchema( "todo" );
var id = schema.addEventListener( "add" , function( entity ){
  console.log( entity, "added" );
});
```
```javascript
schema.removeEventListener(id);
```
remove:

Whenever any entity gets removed from the schema, remove event will be thrown and an event listener can also be added to it. In such cases the arguments for the listener would be an entity.

```javascript
var schema = this.$db.getSchema( "todo" );
var id = schema.addEventListener( "remove" , function( data ){
  console.log( data , "is removed" );
});
```
```javascript
schema.removeEventListener(id);
```
change:

Whenever there is a change in the value of any defined attribute in a entity(through any data set utils), change event will be thrown to that schema scope. Event listener can be added to it as shown below. And the arguments for the listener would be the entity and attr.

```javascript
var schema = this.$db.getSchema( "todo" );
var id = schema.addEventListener( "change" , function(data , attr ){
  console.log( "changes in entity-" , data );
});
```
```javascript
schema.removeEventListener(id);
```
Db:
add:

Whenever any new entity gets added to the schema, add event will be thrown to the schema scope. Event listener can be added as shown below. And the listener's argument would be schemaName, entity.

```javascript
var id = this.$db.addEventListener( "add" , function( schemaName, entity ){
  console.log( entity, "added in ", schemaName);
});
```
```javascript
this.$db.removeEventListener(id);
```
remove:

Whenever any entity gets removed from the schema, remove event will be thrown to the schema scope. Event listener can be added to it as shown below. And the Listener arguments would be schemaName and entity for such cases.

```javascript
var id = this.$db.addEventListener( "remove" , function( schemaName, entity ){
  console.log( entity , "is removed from schema ", schemaName );
});
```
```javascript
this.$db.removeEventListener(id);
```
change:

Whenever there is a change in the value of any defined attribute in a entity(through any data set utils, change event will be thrown to the db scope. Event listener can be added to it as shown below. And the listener arguments would be schemaName, entity,and attr.

```javascript
var id = this.$db.addEventListener( "change" , function( schemaName, entity, attr ){
  console.log( "changes in entity-" , entity );
});
```
```javascript
this.$db.removeEventListener(id);
```
beforeRequest:

Before a request is initiated via Data store, beforeRequest event will be thrown to the db scope. Event listener can be added to it as shown below. And the listener arguments would be XHR, schemaName, type ,key,and queryParams.

```javascript
var id = this.$db.addEventListener( "beforeRequest" , function ( XHR , schemaName , type , key, queryParams ){
  console.log( "beforeRequest event" );
});
```
```javascript
this.$db.removeEventListener(id);
```
afterRequest:

Once a response is received for a request that is initiated via Data store, afterRequest event will be thrown to the store scope before processing the response. Event listener can be added to it as shown below. And the listener arguments would be XHR, modelName,type key,and queryParams.

```javascript
var id = this.$db.addEventListener( "afterRequest" , function ( XHR , schemaName , type , key, queryParams ){
  console.log("afterRequest event");
});
```
```javascript
this.$db.removeEventListener(id);
```
Schema Hooks
didLoad:

This hook is invoked whenever a data is fetched(GET Request) from the server. This will be called for all the newly added entity instance.

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
props(){
return {
id : prop( "string" ),
username : prop( "string" ),
phone : prop( "number" , { minimum : 10 }),
email : prop( "string" , { pattern : this.$app.patterns.email })
}
								    }
didLoad(){
console.log( "Newly loaded entityInstance :" , this );
}
}
export { User };
```

'didload' can also be invoked using on('init') in any property functions as follows

```javascript
import { Schema } from "@slyte/data";
class User extends Schema{
props(){
return {
id : prop( "string" ),
username : prop( "string" ) ,
phone : prop( "number" , { minimum : 10 }),
email : prop( "string" , { pattern : this.$app.patterns.email })
}
}
didLoad(){
console.log( "Newly loaded entityInstance :" , this );
}.on ( "add" , "change" )
}
export { User };
```

The above didLoad function will also be called when a entity is getting added or merged in the schema.

---

### data - schemaless

Schemeless
Introduction

Data store gives you an option to initiate request without defining the schema. You can enable schemaless in db's base connector just as the below code snippet.

```javascript
import { RESTConnector } from "@slyte/data";
class ApplicationConnector extends RESTConnector {
    schemaless = true;
}
```
getAll

With schemaless option enabled, getAll request can be made to the server to get the required data. While doing so, you need to provide the endpoint. Here, the value or the string that is being passed to the 'scheme' is considered as endpoint. In the below code snippet, 'user' is considered as the endpoint.

```javascript
this.$db.getAll({schema:"user"});
```

With this, you can cache the data and cache the data with customindex.

cacheData

To cache the data, you need to set the property 'cacheData' as true. On doing so, you get the data as array of objects. Since there is no schema involved, the data does not get stored in the db, rather you get the data in the JSON format.

```javascript
db.getAll({schema:"user", cacheData:true})
```
cacheData with customindex

Apart from the id, if you have any value to be passed in the 'index' key, you can do it just like the below code snippet.

```javascript
db.getAll({schema:"user", cacheData:true, index:"name"})
```
data retrieval

You can also retrive the cached data. To do so, you need to provide the endpoint. Have a look at the below code to see how it is done.

```javascript
db.cache.getAll({schema: "user"})
```
getEntity

With schemaless option enabled, getEntity request can be made to the server to get the required data. While doing so, you need to provide the endpoint and the primary key value.

```javascript
this.$db.getEntity({schema:"user", pK:"1"});
```

With this, you get an option to cache the data and cache the Data with customindex

cacheData

To cache the data, you need to set the property 'cacheData' as true. Here, the primary key value and the id which is being passed to the 'index' key would be the same by default. The primary key value would be taken as the id by default.

```javascript
db.getEntity({schema:"user",  pK:"1", cacheData:true})
```
cacheData with customindex

If the primary key value and the id is not same, then in such case, you can pass the custom index key(here it is,'name') to the 'index' key. Have a look at the below code for better understanding.

```javascript
db.getEntity({schema:"user", pK:"1", cacheData:true, index:"name"})
```
data retrieval

You can also retrive the cached data. To do so, you need to provide the endpoint along with its primary key. Have a look at the below code to see how it is done.

```javascript
db.cache.getEntity({schema: "user", pK:"1"})
```
push

With schemaless option enabled, you can push the data to db, with schema option as the endpoint name. Have a look at the below code to understand how it is done.

```javascript
this.$db.push({schema:"user", data:[{id:'4'}, {id:'5'}]})
```
ajax

With schemaless option enabled, apart from getEntity and getAll, for any other request to the server can be made with ajax request, with schema option as the endpoint name. Have a look at the below code snippet for better understanding.

```javascript
this.$db.ajax({schema:"user", type:"GET"})
```

---

### data - indexeddb

IndexedDB
(From 1.0.3-beta5)
Introduction

It is a web storage solution used to store significant amounts of data with a same origin policy. Lyte data store provides an option to store the db data in the indexedDB (either db data can be cached directly in indexedDB or with the queryParams that is used to fetch the data from the server).

Advantages:

If the same subsequent request is made(either from the current tab or another tab of same domain), it will fetch the data from indexedDB (if the option is given to cache data in IDB). This will save a significant amount of time to fetch the data from the server, which in turn makes the page load faster.

init

To init the indexeddb, create a LyteIDB lookup like below.

db - db instance
url - path of the lyte-idb-worker js file
name - name of the idb instance
restoreData - boolean, to restore the current data in , so. Default - false
```javascript
import { Db } from "@slyte/data";
import { LyteIDB } from "@slyte/data";
import { applicationConnector } from "./connectors/application";
import { application } from "./serializers/application";
class crmDb extends Db{
    static Connector = applicationConnector; // or RESTConnector
    static Serializer = application; // or RESTSerializer
    lookups() {
        return [
          {
            idb: new LyteIDB({db: this, name:"crm", url:location.origin+"/node_modules/@slyte/data/src/lyte-idb-worker.js"})
          }
        ];
    }
}
export { crmDb }
```
restoreData

restoreData is an boolean variable. If it returns true ,data will be restored even when the last tab is closed else the data will be removed on the closing of last tab , By default it will be false

idb option
QueryCache

if queryCache is true , then the request will be cached with its respective queryParams along with its data.
if queryCache is false , then the data will be cached in IndexedDB

DeserializeKeys

It is used to specify the relationships which are to be saved in IDB along with the actual schema data. If it is not specified, all the relationships will be saved by default.

cache
with queryParams

If a data store's GET request is made with queryParams, this option can be used to cache the data in the indexedDB with its queryParams. When the request is made with the same queryParams, then the cached data from the indexeddb will be returned.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Blog } from "./blog";
import { Tag } from "./tag";
import { Organization } from "./organization";
class User extends Schema{
  idb(){
    return {
      queryCache : true,
      deserializeKeys : [ "blogs" ]
    }
  }
  props(){
    return {
      id : prop( "string" ),
      username : prop( "string" ),
      blogs : many( Blog ),
      tags : many( Tag ),
      org : many( Organization )
    }
  }
}
export { User };
```

db.getAll({schema: user, qP: {org: ["1", "2"]}});

For the above request, the response data will be cached with the above queryParams. ( {org:['1', '2']}) Now if the "user" schema data is requested with the same queryParams, then the data will be returned from indexedDB, else a request will be made to server to fetch data.

without queryParams

Data can also be saved without queryParams. In this case, all the cached data will be returned on subsequent request.

```javascript
import { Schema } from "@slyte/data";
import { prop, many } from "@slyte/core";
import { Tag } from "./tag";
class Blog extends Schema{
  idb(){
    return {
      queryCache : false
    }
  }
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      description : prop( "string" ),
      tags : many( Tag )
    }
  }
}
export { Blog };
```
Callbacks
idbBeforeOpen

This is a application connector callback.By default objectStores are created in indexeddb only while opening/registering indexeddb. Lyte data store will open/register indexeddb with the schema's loaded initially. If some schema is being loaded later, it should be added initially in the idbBeforeOpen callback.

idbBeforeOpen callback will be called before schemas are registered to indexedDB. You can add the schema name with its primary keys in this callback.

```javascript
class ApplicationConnector extends RESTConnector{
  idbBeforeOpen({models}){
    models.push({ modelName : "territory" , pK : "id" });
    return models;
  }
}
```
idbResponse

This is a serializer callback. It can be specified either in schema specific or application serializer. It can be used to determine whether the data is correct. On returning false, a server request will be made to fetch data.

```javascript
class ApplicationSerializer extends RESTSerializer{
  idbResponse({schemaName:modelName , type , queryParams , key , payLoad}){
    if( payLoad.length == 10 ){
      return payLoad;
    }
    return false;
  }
}
```

On returning false, it will make a XHR request and fetch the data from server.

This is a serializer callback. It can be specified either in schema specific or application serializer. beforeIDBGet callback will be responsible for the GET operation to be done in the IDB

```javascript
class UserSerializer extends RESTSerializer{
  beforeIDBGet({idbObj}){
    // obj.name = "some";
    return idbObj
  }
}
```
beforeIDBGet

This is a serializer callback. It can be specified either in schema specific or application serializer. beforeIDBGet callback will be responsible for the GET operation to be done in the IDB

```javascript
class UserSerializer extends RESTSerializer{
  beforeIDBGet({idbObj}){
    // obj.name = "some";
    return idbObj
  }
}
```
beforeIDBCrud

This is a serializer callback. It can be specified either in schema specific or application serializer. beforeIDBCrud callback will be responsible for the CRUD operations to be done in the IDB

```javascript
class UserSerializer extends RESTSerializer{
  beforeIDBCrud({idbObj}){
    // obj.name = "some";
    return idbObj
  }
}
```

Either the data received in the beforeIDBGet / beforeIDBCrud can be modified or if they return undefined / false it will ignore that particular operation to IDB.

triggerIDBInsertion

This is used to initialize indexeddb operations. By default, this method will be called by lyte data store.

This function can be manually triggered, by specifying the option differIDBAction in application connector to true

removeIDBDatabase

This is used to remove the indexeddb database whenever necessary.

```javascript
this.$db.$idb.removeIDBDatabase();
```

---

## route

### route - introduction

ROUTER
Introduction

A clean, well-structured web app always has a structured route. But this property is often overlooked. To make your web application stand out, sLyte has brought up the Router layer.

What is a router layer?

Well, the router layer is responsible for maintaining the navigation across different pages and views of the application. It intercepts any change in the URL and helps in rendering the corresponding view.

In an application, the navigation occurs in the following scenario:

On receiving a URL in the address bar(Initial load)
When the user clicks on the hyperlink provided on any webpage or web application.
When the user generates any actionable events which invoke a change in URL (Javascript triggered URL change)

Before diving into how sLyte handles these navigation, let's see how modularity in the router layer works.

Each page or a view in the applications is to be visualized as a set of routes (segments), with each Route taking care of a particular part of the view while data loading. This segregation or modularisation helps in managing resource downloads needed at each route, along with proper code maintenance and greater control of things when navigating from one sub-view of the application to another sub-view.

As the unwanted downloads and the unwanted rendering gets eliminated, the initial load of the application gets speeded up.

And now back to how the navigation is being handled, sLyte tries to map the URL in the browser to a set of routes with the help of the map(router/maps/map.js) created in the router which will host the mapping between the routes and their corresponding URLs.

So, a single URL gets mapped to one or more routes, and each Route is then executed to construct the entire page or view.

Whenever any subsequent change in the URL occurs, sLyte creates a difference between the current URL with the previous URL and then makes sure that only the changed part of the URL (Route) gets executed and the corresponding changes are being done on the page. This ensures that you don't make unnecessary re-rendering when nothing in the parent part of the view (Route) has been changed.

It provides means, by which you can perform navigation from HTML as well as from JS perspective by using appropriate HTML Tags and JS functions, so that the navigation can be handled smoothly across the application.

It helps the developers to visualize a page or a view as different routes or segments and helps in building each segment. By doing this, it maintains a clear segregation of resources (components), behavior, and data required by each segment, ultimately speeding up the first paint of the application on initial load. More on this later!!!

The Router layer takes care of all these and a lot more. It provides you with a whole lot of callbacks and functions and incorporates a lot of best practices out of the box. A proper design of a web app starts from designing your router properly. And the router takes care of it.

---

### route - the-router

THE ROUTER
Introduction

The "Router" file is the core of sLyte Router. It is where you provide the mapping between your application and browser URL. The entire design of your web app with respect to state maintenance in URL relies on this. Apart from mapping, it also provides you with options for configuring your router. You can find the router file in router/router.js. This is how it looks likes:

```javascript
import { AppMap } from "./maps/map";
class AppRouter extends Router {
  lookups(){
      return [];
  }
  getConfig() {
    return {
      baseURL : '',
      history : "html5"
      baseMap : AppMap
    };
  }
  beforeRouteNavigation(prevNav, currentNav, historyObj) {
  }
  afterRouteNavigation(currentNav) {
  }
}
export default AppRouter;
```
Instantiating a Router

Instance for the Router is created automatically while creating an app in sLyte.

```javascript
import {Lyte} from "@slyte/core/src/lyte";
import {AppRouter} from "router/app-router";
class App extends Lyte {
  lookups() {
    return [{router : AppRouter}];
  }
}
```

When the above App gets instantiated, AppRouter will be instantiated as a service and injected into the app and you can find it in app.js.

History

Before diving further, let us have a look at different types of history. Knowing the history shapes your product better.

Hash history
HTML5 history

Let us now see an example

HTML5 History - https://abc.com/org/users/1

Hash History - https://abc.com/org#users/1

On viewing it, you can clearly figure out, that hash history differs from HTML5 history. The hash history uses the hash symbol in the URL to set and read location.

The difference doesn't stop there. There are a few other things that you may need to consider before you conclude on which history to use for your web app.

When you hit the above-mentioned hash history URL in the browser, the request URL would be only until before the "#" (https://abc.com/org). It will not send the entire URL to the server. So in cases where your server requires the full URL, it is advisable to use HTML5 history.

But in cases where your web app is like a SPA, wherein you need to return a single HTML irrespective of your URL, hash history makes it easier, since you only need to configure a single URL mapping on your server-side instead of defining all the URL's.

So which history to go for, relies completely on your app's use case. With sLyte, support is guaranteed for both types.

The default one is the "hash" history. You can, however, override the defaults as shown below. You can change it in router.js

```javascript
getConfig() {
  return {
    history : "html5"
  }
}
```
Base URL

Consider a case where your application has a constant base path that needs to be appended to all your URLs. In such scenario's, configuring the base URL makes your job easy.

For example,

http://abc.com/org/users/list

http://abc.com/org/settings

In the above case, "org" is the base URL that needs to be added to all the URL's in the application. The Router allows you to configure it in router.js

```javascript
getConfig() {
  return {
    baseURL : '/org'
  }
}
```

Base URL is applicaple only for HTML5 history.

Router Map

Next up to the most significant part of the router, the mappings. Here mapping of routes to the corresponding URL is done. A Route is an entity, which bundles the application logic that needs to be done whenever the mapped URL is accessed. You can find it in router/maps/map.js. As soon as you generate the route, it automatically gets mapped. Have a look at the below image to understand how a router map functons.

With the route being generated, the map.js makes the entry of the route. You can also hit it as a URL. You can find map.js in router/maps/map.js

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users")
  }
}
export default AppMap;
```

That is it, you have mapped your first route in the router. Wait, where is the browser URL? sLyte by default maps the route "users" with the URL "/users". But if you want to have a different path name, then you need to specify your browser URL and you can do the same by having a look at the below code snippet

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'})
  }
}
export default AppMap;
```

In the above code, the mapping of the route, "users" is done with the URL "/orgUsers" instead of the default "/users".

Generating additional map

Apart from the map.js file, you can also create additional map files. The command to generate an additional map file is:

lyte generate map mapname

You can learn more about it here.

Including the additional map

The created additional maps has to be clubbed with the parent map. And to do so you can use, this.include method. Here is an sample code for your reference.

```javascript
import { RouterMap } from "@slyte/router";
import {UserMap} from "./usermap";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'})
      this.include(UserMap);
  }
}
export default AppMap;
```

In the above code snippet,'UserMap' is the additional map file which is getting included to the parent map.

While including the additional map file to the parent map, you need to import the additional map file.

Add maps dynamically

You can add maps dynamically with addMap api. You can leran more about it here.

Lazy route download

This involves in downloading only the route on demand based on the request URL. This plays a vital role in reducing the page load time.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.lazyRoute("booknow")
  }
}
export default AppMap;
```

By default, during the initial download, all routes gets download. But only on landing the 'booknow' page (as per the given example) the booknow route gets downloaded. This clearly states that a route mentioned 'this.lazyRoute' gets downloaded on demand.

Nested Routes

Planning to achieve modularisation in your app? Nested routes can do it. It also helps to organize your web apps in a structured manner. You can generate your nested route and define it like the below code snippet.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'}, () => {
        this.route( "list" );
      })
  }
}
export default AppMap;
```

Here "list" route is nested under the "users" route. The nested route will take the URL "/orgUsers/list".

Here is an example for you to have a look at how nested routes look. To create a route with the following structure router/routes/menu/submenu/subMenu1/user.js we use the command, lyte generate route menu.submenu.subMenu1.user Here, the route, 'user' is nested inside 'subMenu1' which again is nested inside 'subMenu' which again is nested inside 'menu'.

Dynamic params and wildcard handling

Dynamic params are used to handle the dynamic segments of a route's URL. Let's take the case of our "users" route. If you require to get the details of a particular user, the URL changes like this

http://abc.com/orgUsers/2 - gives the detail page of the user with id "2"

http://abc.com/orgUsers/1 - gives the detail page of the user with id "1"

Now, the "userId" is a dynamic part that can take any value. You can handle such scenarios with dynamic params. Take a look at the below code, to see how dynamic params are handled.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'}, () => {
        this.route( "list" );
        this.route( "detail" , { path : "/:userId" });
      })
  }
}
export default AppMap;
```

Now whenever the URL is "orgUsers/1" or "orgUsers/2", it gets mapped to the "users.detail" route, and the dynamic param would be "1" or "2" respectively.

Straight to the point, just add ':' while mentioning the path, to initialize it as a dynamic param. Head to upcoming section to learn more about it.

Wildcard Handling :

Wildcard entries can be handled at any level of the route by using the wildcard entry symbol "*" in the route's path.

Have a look at the below code snippet to see how it works.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'}, () => {
        this.route( "list" );
        this.route( "detail" , { path : "/:userId" });
      })
      this.route( "wildcard" , { path : "/*wildcard" } ) ;
  }
}
export default AppMap;
```

Wildcard route will be called when none of the routes matches with the provided URL.

You can also specify wildcards at any level of nesting. The appropriate wildcard route will be called depending on the level of nesting.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
      this.route("users",{path:'/orgUsers'}, () => {
        this.route( "list" );
        this.route( "detail" , { path : "/:userId" });
      })
      this.route( "module" , () => {
        this.route( "module-wildcard" , { path : "/*moduleWildcard" });
      });
      this.route( "wildcard" , { path : "/*wildcard" } ) ;
  }
}
export default AppMap;
```

Following is how the nested wildcards get called

/module/wildcardString => module.module-wildcard

/wildcardString => wildcard

However, there can't be more than one wildcard at a particular level.

Regex In Dynamic Param:

Let us consider an example

```javascript
this.route("module",{ path : ":module" , regex : /\b(d1|d2|dp1|dp2|contacts|reports|leads)\b/ })
```

Here, 'module' being the dynamic param gets passed, only if the regex condition is satisfied. If the regex condition fails, the route transists to wild card route if it is provided.

Index Route

An Index route is nothing but a route with "/" as the path name. One of the reasons that make this significant is that it gets executed by default whenever the base route is called. Consider the following example.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
    this.route( "users" , () => {
      this.route( "list" );
    })
  }
}
export default AppMap;
```

Here, if you want to execute the "list" route by default whenever the URL "users" is hit, you can have the configuration as follows.

```javascript
this.route( "users" , () => {
  this.route( "list" , { "path" : "/" });
});
```

By this, "/users" will display the list of all users and you can easily switch to the detailed user page by having it as a parallel route.

```javascript
import { RouterMap } from "@slyte/router";
class AppMap extends RouterMap {
  map() {
    this.route( "users" , () => {
      this.route( "list" , { "path" : "/" });
      this.route( "detail" , { "path" : "/:userId" });
    });
  }
}
export default AppMap;
```

When navigation is made programatically (route API's/go-to),the index route should be mentioned.

---

### route - the-route

THE ROUTE
Introduction

Route deals with navigation handling. But how to create a route?.

To create a route, use the following command in the terminal
lyte generate route <route_name> </route/path>

Lyte also allows you to create a nested route. You can create it with the following syntax
lyte generate route <parent_route_name.child_route_name> </route/path>

After creating a route, when a URL is hit, the router, maps the URL with the corresponding route. It will now invoke the routes, where you can handle the actions to be performed for that URL / route.

With route, you can perform a host of actions such as requirement fetch, data fetch, permissions check, view rendering and post rendering. It is mandatory to define route handler for each route by extending Route class. Have a look at the Skeleton of a route file:

```javascript
import Route from "@slyte/router.js"

class Home extends Route {
  static queryParams = [{"per_page" : { cache:false, reFetch :false }},"page"];
  forceFetch() {} /*boolean or callback*/

  renderLoadingTemplate(paramsObject) {
    /* return where and what to render in loading state.(container and component/HTML) @param {Object} queryParams and dynamicParams  @return {Object} outlet and component/HTML */
  }

  beforeFetch(paramsObject) {
    /* Pre processing stage where you can decide whether to abort/redirect the current navigation(e.g Permission check). */
  }

  fetch(paramsObject) {
    /* Initiate data request that are necessary for the current page. */
  }

  afterFetch(Data, paramsObject) {
    /* Manipulating data before returning data to component. */
  }

  divert(Data, paramsObject) {
    /* Redirections based on data fetched. */
  }

  render(Data, paramsObject) {
    /* return where and what to render.(container and component/HTML) */
  }

  afterRender(Data, paramsObject) {
    /* Post processing of rendered page. */
  }

  beforeExit(Data, paramsObject) {
    /* Will be invoked before a route is removed from view. */
  }

  didDestroy(Data, paramsObject) {
    /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
  }

  static actions() {
    return {

      onBeforeLoad : function(paramsObject) {
        /* Triggered once route navigation starts. */
      }

      onError : function(error, pausedTrans, paramsObject) {
        /* Triggered by error on file load or on data request. */
      }

      willNavigate : function(navigation) {
        /* Triggered before a navigation is going to change. */
      }

      didNavigate : function(paramsObject) {
        /* Triggered after completion of navigation. */
      }

    }
  }
};

export { Home }
```
Functions of Route

The route is responsible for

Requirements fetch
Data fetch
Rendering the view

Have a look at the below image to understand how a route comes into action.

When the client sends a requirement fetch and data API request to the server, the server humbly receives it and provides the response to the client to render the view. The route plays a significant role in this client server interaction.

Requirements Fetch

Most of the frameworks out there are designed for SPA's in which the entire app is loaded as a single monolithic file during the first load. Despite options to split the entire application into logical applications, each logical app gets downloaded entirely, which is still heavy.

sLyte is designed in such a way that, you can choose whether to have a single monolithic file for the entire app or to split the resource downloads up to individual route level. You can provide the resources to be downloaded for each and every route separately so that the initial load can be minimized and the files get downloaded only when that particular route is invoked (on-demand). This in turn makes your apps load fast.

There are three types of files which may be required for a route.

Resources : Component and CSS files gets downloaded parallelly with the API request (default). These files can be downloaded ondemand.
Dependencies : Store files gets downloaded as dependencies by default. Route file will execute only after downloading these files.
Bundle : Other thirdparty files and util files will be bundled along with route file (will not download separately).

However file types can be overriden through configuration. You can learn more about it here. Take a look at the below code snippet to see how it works.

```html
import "a.js" ; //@bundle
import "b.js" ; //@resources
import "c.js" ; //@dependencies
import "d.js" ; //@resources @if a<b
import "e.js" ; //@if b<c @dependencies
```
```javascript
//#start resources
import "f.js" ;
import "h.js" ;
import "i.js" ;
//#end resources
```
```javascript
//#start dependencies
import "l.js" ; //@if b<c
import "j.js" ;
import "k.js" ;
//#end dependencies
```
```javascript
import "m.js" ;
import "g.js";
//#start if c<d
import "m.js" ;
import "g.js";
//#end if
```
Data Fetch

Router plays a great role in fetching the data and providing it to the user. There are three processes such as pre-processing, actual data fetch and post-processing to assist you with data fetching.

Pre-Processing

Pre-processing such as permission checks and redirections is carried out in beforeFetch method of a route. Have a look at the below code snippet to check how it works.

```javascript
beforeFetch(params){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  if(!Permissions.getPermission( params.queryParams.filter )){
    this.navigation.abort();
  }
}
```

Here, in the beforeFetch hook, the permission is being checked and if the permission is not granted, the route gets aborted. You can also return a Promise from the beforeFetch. The Router will wait for this promise to be resolved before proceeding with the execution of the next method of the Route. You can get the returned value of the beforeFetch hook using this.$.beforeFetch.

Actual Data Fetch

Fetching of data is carried out in the fetch method of the Route. Here is where you make the calls to the Data Store or have your own requests to the server for getting the data. Have a look at the below code to get an insight.

```javascript
fetch( params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  return this.$db.getAll(schema : Todo);
}
```

Most often you will be returning a promise from this hook. Router will wait for this promise to be resolved before proceeding with the execution of the next method of the Route.

The data returned from the fetch will be available in the route instance under "currentData" property.

Post-Processing

You can make any post-processing on the data in the afterFetch method of the Router. If you want to change the entire data with a new object, you can do so by setting the "data" property of the route instance.

```javascript
afterFetch( data , params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  data.displayRecords = true;
  data.list = [];
}
```

If you want to make some changes to the data already present, you can do so by making changes to the "data" argument of the method.

```javascript
afterFetch( data , params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  this.currentData = { "todoList" : data , filter : params.queryParams.filter };
}
```

Like beforeFetch and fetch method, afterFetch can also return a Promise, however, the value returned from this method won't be set in the route's fetch callback.

The above-mentioned three process(pre-processing, actual data fetch, post-processing)works in a sequential order. For each route, even if it is a nested route say a/b/c, the route 'a' performs all three processes then the route 'b' performs the same three processes, and then the last route 'c' performs the three process. However, if you want all the nested routed to undergo the processes parallelly for fast rendering, Router lets you do it with Force Fetch.

Force Fetch

As a performance-enhancing option, Router allows you to fetch data requests of nested routes in parallel. Ideally, the processing of a child route will take place once the parent route is rendered. But in cases where you need to override this default behavior and have data fetch requests sent parallelly, you can opt for "forceFetch" option in the route.

```javascript
class Home extends Route {
  forceFetch( params ) { /* params = {queryParams : {} , dynamicParam : 'string'} */
    /* returns boolean.*/
  }
  (OR)
  forceFetch = boolean
};
```

While using forceFetch option, the routes' data fetch must be independent of each other. This is because the routes' executed in parallel gets resolved at a different time and hence the child route may or may not have the parent's data.

Rendering the View

The render method of the Route takes care of the rendering the view for a specific Route. sLyte follows a parent-child's data, wherein the child view (container) should be contained by the parent view (container). Say, if we have three routes name A, B, C respectively. A's view should contain B's view and C's view. B's view should in turn contain C's view.

If a navigation is made from A.B.C to A.B, then there will be no rendering, Because A and B are already rendered.

Component Rendering

You can specify the component you wish to render along with the outlet where the component needs to be rendered. Router will then create the component and set the data as the component's data and render it in the specified outlet.

```javascript
render( data, params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  return { outlet : '#outlet' , component : 'todo-list' } /* reRender : true (to re-render a component)*/
}
```

As stated earlier, the data will be set to the component. Hence it needs to be an Object. If not, Router will throw an error. Re-rendering the component will initialize the component once again completely

```javascript
afterFetch( data , params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  this.currentData = { "todoList" : data };
}
```

When there is change in dynamic param or query param of a route and if a same component is returned to a route, then the component will not be re-initialized.

HTML Rendering

Router also supports rendering HTML directly instead of rendering a component, in order to support applications which don't use lyte Component.

```javascript
render( data, params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  return { outlet : '#outlet' , html : `<p>html to be rendered</p>` }
}
```
Before Template Destroy

beforeTemplateDestroy hook is called when a route is removed from view. To be precise, this event can be set globally to remove a component/html of a route from view. This hook gets called only after the next transition gets rendered.

```javascript
lyte.addEventListener("beforeTemplateDestroy", function(e) {
  // remove scroll event or events bound to component
});
```
Did Destroy

By default, when route navigations are made, the router removes the view part of the previous route. If you wish to perform any function before removing the route, the router provides an event to notify view removal.

```javascript
didDestroy( data, params ){ /* params = {queryParams : {} , dynamicParam : 'string'} */
  this.removeListener()
}
```

---

### route - query-params

QUERY PARAMS
Introduction

While establishing a route, query params play an important role. Query params are a set of key-value pairs that are part of the URL after "?".

With the query params, you can provide the additional information to the process.

Here are a few sample query params.

filter
pageNumber
perPageCount
sorting

You can provide the default values for these queryParams in map.js just like the below code snippet.

```javascript
class testAppMap extends RouterMap {
  map() {
    this.route( "authors" , { "path" : "authors" } ,() => {
      this.route("list",{"path": "list?page=1&perPage=10"});
    });
  }
}
```
Factors To Consider

There are a few factors that require your attention before setting up the query param.

Caching

Let us first understand what stickiness is all about. This is also a provision to maintain the query params from one navigation to another (cache query param). Say, you have n number of query params for a navigation and you need to change only one param and make a new navigation, instead of providing all the query params, cache query params would let you maintain it for the new navigation.

Caching being an important factor to consider, comes up with a global configuration, which defaults to be true. In order to disable it, you need to provide cache as false to router configuration.

The global configuration for cache query params can be provided as follows.

```javascript
import { AppMap } from "./maps/map";

class AppRouter extends Router {
  getConfig() {
    return {
      queryParamOptions : {
        cache : false
      }
    }
  }
}
```

sLyte also gives you a provision to change the query params individually. Have a look at the below code snippet to understand how it works.

```javascript
class List extends Route {
  static queryParams = [ 'page' , 'perPage' , { "sort" : { "cache" : false }}]
}
```
Refresh Data on Query Param Change

Whenever a query param is changed for a route the corresponding route's hook gets called. If you want the route's hook not to be called, you can set refreshfetch as false.

```javascript
class List extends Route {
  static queryParams = [ 'page' , 'perPage' , { "sort" : { "refreshData" : false , "cache" : false } }]
}
```
Route navigation using Query Param

Now, while navigating a route, you may require a query param and you can use it with navigateTo, setQueryParams, replaceWith.

---

### route - actions

ACTIONS
Introduction

Actions are similar to events. Action on a route will be propagated to the parent route unless it is stopped explicitly. Give a read to understand how action handling works. An action can be stopped from being propagated to the parent by returning false (boolean) to an action. Some of the actions are as follows.

onBeforeLoad

When navigation is initiated successfully, onBeforeLoad action gets called. This is the first action to get called while establishing a route. Thus it would be an ideal place to show the loading state of a navigation. And loading state of a navigation can be stopped in didNavigate callback or in afterRouteNavigation

```javascript
static actions() {
  return {
    onBeforeLoad : function( params ) {
      showLoadingState();
    }
  }
}
```
onError

onError action gets called on the following three conditions

When the imports fail
When there is an error in the data fetch
When there is a JS error in requirements/data fetch methods

When any one of the mentioned errors occurs, the navigation will be paused and the onError action will be called. Based on the priority of error, the navigation can be resumed or aborted. By default, navigation will be aborted after the onError action has been called. So if a navigation is not resumed in onError, it will remain aborted.

```javascript
static actions() {
  return {
    onError : function( error , pausedTrans , params , hook ) {
      if( error.lowPriorityResource ){
        pausedTrans.resume();
      } else {
        this.navigationTo( "home" );
      }
    }
  }
}
```
willNavigate

willNavigate is to notify a route that a navigation is going to be made from the current route. You can prevent the new navigation from happening, in cases where you want the user to be on the same route.

Let us consider an example, where a user is editing a particular entity and clicks on the "Home" button by mistake. You can use the will willNavigate method to display a popup asking for confirmation from the user to quit editing.

```javascript
static actions() {
  return {
    willNavigate : function( trans ) {
      var pausedTrans = trans.pause();
      if( this.currentData.user.$.isDirty ){
        var conf = confirm( 'Are you sure to proceed, there are unsaved data?' );
        if( !conf ){
          pausedTrans.abort();
        } else {
          pausedTrans.resume();
        }
      }
      return false;
    }
  }
}
```

If there is any common handling for a navigation, then it can be handled in the router with beforeRouteNavigation which gets called before a navigation is done (Before URL is changed).

didNavigate

didNavigate notifies the route that the navigation is completed.

```javascript
static actions() {
  return {
    didNavigate : function( params ){
      hideLoadingState();
    }
  }
}
```

If there is any common handling to be done after a navigation is completed, then it can be handled in the router afterRouteNavigation, which gets called after a navigation is done.

---

### route - transition

ROUTE NAVIGATION
Introduction

Let us consider an example, where the user doesn't have permission to view his profile until he logs in. Generally, an application would redirect him to the login page and after successful login, redirects him back to the profile page. In such cases, navigation plays a major role.

Route Navigation

Router allows you to handle navigation using the following methods.

go-to

If you are planning to make a route navigation with HTML, using go-to will be the right choice. go-to can be used inside a component or html. By default, it creates an anchor element. Custom HTML can be created instead of anchor tag using lt-prop-custom property. Have a look at the below code snippet for better understanding.

```html
<go-to lt-prop-route="home.tab" lt-prop-dp='["Lead"]' lt-prop-qp='{"default" : "true"}' lt-prop-target="_blank" lt-prop-data='{"option": "20" ,"page" : "2"}'>
  Link 1
</go-to>
<go-to lt-prop-route="home.tab" lt-prop-dp='["Lead"]' lt-prop-qp='{"default" : "true"}' lt-prop-target="_blank" lt-prop-data='{"option": "20" ,"page" : "2"}' lt-prop-custom>
  Link 2
  <span>
    This is custom span
  </span>
</go-to>
```
Attribute list:

Here is a list of attributes that can be used with respect to go-to navigation.

PROERTY NAME	TYPE	DESCRIPTION
lt-prop-route	String	Route name
lt-prop-dp	StringArray	- Dynamic params. (["one","two"])
lt-prop-qp	StringObject	- Query param object. ('{"per_page" : "5"}')
lt-prop-fragment	String	Scroll to certain element on the page with an id.
lt-prop-data	Object	Navigation data(which will be pushed to the history stack)
lt-prop-refresh-route	String/Boolean	To refresh from specified route, when the current route is same as specified route. By default it is set to false.
lt-prop-begin-from	String	Forced refresh from a particular route. If same route, lt-prop-refresh-route has priority
lt-prop-replace	Boolean	To use replaceWith API for navigation. By default, navigate-to will be used.
lt-prop-custom	Boolean	This property can be used to create a specific element instead of anchor tag.
lt-prop-<<attrs>>	NA	target|id|class|style|rel|title will be set to anchor tag. The above mentioned other attributes can also be provided which will be set to go-to tag.

Events and other properties can be set to go-to element.

refresh

Refresh method of route is useful for refreshing the current routes. Let us consider an example, where you are in 'a.b.c.d' route. If 'b.c.d' route needs to be refreshed, refresh method needs to be called from 'b' route.

Have a look at the below code, to understand its working.

```javascript
class Blogs extends Route {
  actions : {
    refreshRoute : function(){
      var obj = {};
      obj.refreshTemplate = true;
      this.refresh(obj);
    }
  }
}
```

By default refreshing a route does not re-initialise the components in a route.

setQueryParams

setQueryParams is to navigate to the same route with query param changes. This can be done in that particular route instance.

```javascript
class Blogs extends Route {
  actions : {
    changePageNumber : function( value ){
      this.setQueryParams({ page : value });
    }
  }
}
```
setDynamicParam

setDynamicParams is to navigate to the same route with dynamic param changes. This can be done in that particular route instance.

```javascript
class Blogs extends Route {
  actions : {
    changeVersion : function( value ) {
      this.setDynamicParams( value ) ;
    }
  }
}
```
navigateTo

navigate to new route with a new entry being pushed to history array can be carried out using this method.

```javascript
if(this.navigation.info.route == "index"){
  this.navigateTo('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : this.navigationTo(routeName, dynamicParams..., queryParamsObject)
  OR
  this.navigateTo({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //used on same url, history will not be pushed.
    startFrom : "string"' //forced refresh from specified route
  })
  */
}
```
replaceWith

Any new navigation requiring to replace the existing history entry can be done using this method. This, replaces the current history entry.

```javascript
if(this.navigation.info.route == "index"){
  this.replaceWith('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : this.replaceWith(routeName, dynamicParams..., queryParamsObject)
  OR
  this.replaceWith({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //will refresh the specified route on same url
    startFrom : "string"' //forced refresh from specified route
  })*/
}
```

refresh, setQueryParams, navigateTo and replaceWith method returns navigation object. Using navigation object, data can be set to new navigation. The object in "data" key will be pushed to history.

A route navigation is set to be complete when didNavigate hook is executed, any navigation before this hook will be assumed as a new navigation, thus executes all the navigation hooks from the beginning. To make it more clear, let's say you are in /todo and used redirect (using replaceWith or using navigateTo) to /todo/create in afterRender, then both todo route and create route will be executed. If you redirect the same in 'didNavigate', only create route will be executed.

The field 'Fragment' supports only the HTML5 history file. With this, you get the flexibility to scroll to certain element on the page with an id(provided the DOM is loaded). The field 'Refreshroute' lets you refresh from specified route, when the current route is same as specified route. The field 'StartFrom', lets to refresh or begin the transition to a different route from a specified route. It is also important to note that while using StartFrom, and if the transition is happening to the same route then RefreshRoute takes priority.

divert

beforeFetch and divert are ideal methods to make a route navigation. Once permission checks are done and if user does not have permission for a page, then he can be redirected.

```javascript
beforeFetch : function( params ){  /* params = {queryParams : {} , dynamicParam : 'string' } */
  if(!Permissions.getPermission ( params.queryParams.filter)){
    this.navigation.abort();
  }
}
```

In some cases, redirection may occur based on the data fetched in a route. Such redirections can be handled in redirect method.

```javascript
divert : function( model , params ){
  if( this.navigation.info.route == "index" ){
    this.replaceWith( 'todo.create' )
  }
}
```

On every route execution, divert method gets called. This ensures that you can do the redirections on any navigation, even if it involves a navigation between child routes.

---

### route - route-scenarios

Routing - Scenarios
Basic CRUD

Let us consider a scenario where you need to preform CRUD operation(say author). "author" route will be used to fetch common data and common components required for CRUD operation. Subroutes will be used to display and perform specific task like create, read, update and delete respectively.

```javascript
import { RouterMap } from "@slyte/router";

class AppMap extends RouterMap {
	map() {
		this.route( "authors" , { path : "/authors" } , () => {
			this.route( 'index' , { path : "/" }); 	// This route displays the list of authors.
			this.route( "create" , { path : "/create" }); 	// This route creates a new author.
			this.route( "edit" , { path : "/edit" }); 		// This route edits the author details.
			this.route( "delete" , { path : "/delete" }); 	// This route deletes author record.
		});
	}
}

export default AppMap;
```
Loading State

The loading state can be notified either from route(local handling) or router file(global handling). Route file is provided with "onBeforeLoad" and "didNavigate" for notifying user or it can be notified from "beforeRouteNavigation" and "afterRouteNavigation" provided in router.js(global handling).

```javascript
static actions() {
	return() {
		onBeforeLoad : function(){
			startLoadingState();
		},
		didNavigate : function(){
			endLoadingState();
		}
	}
}
```
```javascript
import { AppMap } from "./maps/map";

class AppRouter extends Router {
	lookups(){
		return [];
	}
	getConfig() {
	var config = {
		baseURL : '',
		history : "html5"
		baseMap : AppMap
	}
	return config;
	}
	beforeRouteNavigation = function(prev,current) {
		startLoadingState();
	}
	afterRouteNavigation = function(current) {
		endLoadingState();
	}
}
```
willNavigate

If a tranisition requires user confirmation, willNavigate hook of the route comes into the picture. Ongoing navigation can be paused based on the user's interacion, and the navigation can also be resumed or aborted with it.

```javascript
static actions() {
	return {
		willNavigate : function( trans ) {
			var paused = trans.pause();
			var result = confirm( "Are you sure to proceed ? Your unsaved data might be lost." );
			if( result ){
				paused.resume();
			} else {
				paused.abort();
			}
		}
	}
}
```
forceFetch

In case of nested routes,the child routes will be executed only after the parent route gets executed. To override this default behaviour, sLyte has come up with an attribute forceFetch for the routes. If forceFetch is set to true,then both the parent and child routes will get executed parallelly provided the models in both parent and child route must be independent of each other.

```javascript
forceFetch(params){
	/* returns boolean.*/
}
(OR)
forceFetch = boolean
```
```javascript
class Edit extends Router {
	forceFetch = true
};
```
```javascript
class Create extends Router {
	forceFetch(){

	}
};
```

The models of child route and parent route must be independent of each other.

Refreshing Parent

By default, a route which is already rendered will not be fetched/rendered once again unless there is a change in any of query param or dynamic param. "refresh" method will refresh a route which is already rendered. Let us consider a navigation between "home.create" to "home.edit", home route will not be rendered. If we need to re-render it, we can use "refresh" method in beforeFetch hook of edit route.

```javascript
class Edit extends Router {
	static actions() {
		return {
			"on-callCreate" : function(){
				var trans = this.navigateTo( 'home.create' );
				trans.refresh = true;
			}
		}
	}
};
```
```javascript
class Create extends Router {
	beforeFetch(){
		if( this.navigation.refresh ){
			this.parent.refresh();
		}
	}
};
```

---

## api

### api - lyte-mixin

Mixins
Introduction

Mixins are used to share re-usable code across your application. You can define the methods which are to be used across your application in a mixin. It can be included as part of component / schema / connector / serializer / route.

Mixin class gets placed as a inherited class to acheive modularity. With this you can include reusable methods or properties in other classes through inheritance. On including a mixin class to another class, its methods and properties become accessible in the class instance.

In precise, Mixins are added in other classes through multiple inheritance where they allow classes to inherit behavior from multiple sources.

On speaking about the functionality of mixin, code reusability plays a vital role in it. On providing a way to share methods or properties across multiple classes it reduces code duplication to a great extent.

Creating a mixin

To create a mixin, create a class which should extend Mixin class from "@slyte/core". You can define the methods and properties with in it. With this mixin class, you get this piece of code shared across the application.

```javascript
import { Mixin } from "@slyte/core";

class SampleMixin extends Mixin {
  generateMixin() {
    return "This is new Mixin";
    }
}

export { SampleMixin };
```

Let us create another mixin.

```javascript
import { Mixin } from "@slyte/core";
class NotificationMixin extends Mixin {
  sendBrowserNotification(){
   return "Hello, you have received a message"
    }
  }
export { NotificationMixin };
```
Creating a mixin with CLI

You can also generate a mixin with CLI by executing the following command

lyte generate mixin <mixin-name> [options]
Using a mixin

To use a mixin in a particular module of sLyte, add the mixin class to 'includes' method of parent class just like below code snippet. During the compile time, sLyte will take care of inheriting the particular mixin to the parent class.

Lets us create a mixin named 'NotificationMixin'.

```javascript
import { Mixin } from "@slyte/core";
class NotificationMixin extends Mixin {
sendBrowserNotification(message){
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    const notification = new Notification(message);
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
  if(permission === "granted") {
    const notification = new Notification(message);
  }});
}}
sendNotification(message, preference) {
  preference = preference || "browser";
  switch (preference) {
  case 'browser':
     this.sendBrowserNotification(message);
     break;
  default:
     console.warn(`No valid notification preference`);
  }
}
sendPriorityNotification(message) {
  this.sendBrowserNotification(`URGENT: ${message}`);
  console.log('High-priority notification sent');
}
sendDelayedNotification(message, delay) {
  setTimeout(() => {
    this.sendNotification(message);
  },delay);
  console.log(`Notification will be sent in ${delay / 1000} seconds`);
  }
}
export {NotificationMixin};
```

On creating the notificationMixin, you can use it in route, component and datastore as seen in the below code snippet.

```javascript
import { Route } from "@slyte/route";
import { NotificationMixin } from "../mixins/NotificationMixin"
class Home extends Route {
  includes(){
    return [NotificationMixin];
  }
  fetch() {
    this.sendNotification("Home Page loading...");
  }
}
export { Home };
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
import { NotificationMixin } from "../mixins/NotificationMixin"
class BlogComponent extends Component {
  data() {
    return {
      // Data that is processed in template.
    }
  }
  includes(){
    return [NotificationMixin];
  }
  actions(){
    return {
        save: function(){
            this.sendNotification("Blog is saved");
        }
    }
  }
}
export {BlogComponent};
```
```javascript
import { RESTConnector } from "@slyte/data";
  import { NotificationMixin } from "../mixins/NotificationMixin"
  class UserConnector extends RESTConnector{
    includes(){
      return [SampleMixin];
    }
    processRequest() {
     this.sendNotification("User request triggered");
    }
  }
export { UserConnector };
```

On creating and extending the mixin in any sLyte modules, the methods and properties are available in the 'this' context of that particular moule's instance.

If your application desires a shared and scoped instance, sLyte advises you to go for Services.

Go Extramile

In this section, you will get to know, how mixins are placed as inherited class.

Multiple mixin

When associating a mixin to a component, its content is available in the 'this' scope. Similarly, multiple mixins can also be associated to the same file to ensure that its contents are also available in the same scope.

When multiple mixins are included in the sLyte module, the mixins will be added as an extended class to the particular module during the build time.

When mixins are included in a slyte module class, that class will inherit the mixins classes in the order provided. Based on that, methods / properties can be accessed from that instance.

Let us consider an example, where Welcome component uses Mixin1 and Mixin2

Welcome Comp -> Mixin1 -> Mixin2

Here, Welcome comp's properties and methods will have preference over the Mixin1, Mixin2 in order.

Using Array or object in mixin

Since mixins are added to classes via inheritance, any object or array property is not shared across instances of classes that use that particular mixin, unlike in the lyte version. But to achieve the same behaviour in slyte, add the comment "//@old" at the end of the property's definition of that class.

```javascript
class UsersMixin extends Mixin{
 currentUser = { id:'1', name: 'Peter }; //old
 getUsers(){
     return fetch("users");
 }
 }
```
Things to Know

Mixins can't be instantiated on their own. They are used only to add functionality to other classes. If you want the piece of code to get instantiated on its own, in such case you can use services.

Mixins are added in other classes through inheritance, allowing classes to inherit from multiple mixins.

Mixins provide a way to share methods or properties across multiple classes, reducing code duplication.

---

### api - slyte_core

@slyte/core

@slyte/core is the base package exposed by the slyte framework. Following are the classes and methods that are exported from this package.

Class
Lyte

It is the base lyte class exported by this package. Application team class will create a base app class extending Lyte class.

```javascript
import { Lyte } from "@slyte/core";

class CrmApp extends Lyte {
  lookups(){
    return [];
  }
}
export { CrmApp };
```
Logger

Logger is a class with method warn / error, to throw a warning or an error in the browser console. Check here to know more about this.

```javascript
import { Logger } from "@slyte/core";

  Logger.error("ERR01");

  Logger.addEventListener("error", function(){
    console.log("Logger ",arguments);
  });
});
```
LyteAddon

Addons are dependent features that adds value to an existing program.

```javascript
import { LyteAddon }  from "@slyte/core";
class UICompAddon extends LyteAddon {
  lookups() {
    return [UICompRegistry];
   }
  }
  export {UICompAddon}
```
Mixin

Mixin is a class used to share re-usable code across your application. You can define the methods/properties which are to be used across your application in a mixin. It can be included as part of component/ schema / connector / serializer / route .

```javascript
import { Mixin } from "@slyte/core";
class SampleMixin extends Mixin {
    newMixin() {
        return "This is new Mixin";
    }
}
export { SampleMixin };
```
Service

A service is a piece of code that is written to do a particular function just like utils and any other libraries.

```javascript
import {Service} from "@slyte/core";
class RequestHandler extends Service {
  logRequest() {

  }

  onRequestError() {

  }
}
export default RequestHandler;
```
CustomValidator

A CustomValidator is used to validate the required details.

```javascript
import { CustomValidator } from "@slyte/core";
class CheckLanguage extends CustomValidator{
  validate(fieldName, fieldValue){
    if( fieldValue.indexOf([ "English" , "Tamil" ]) != -1 ){
      return true;
    } else {
      return { message : "Unsupported Language" }; // returning an object with key message would align with the default error message of the data store.
    }
  }
}
export { CheckLanguage };
```
Datatype

In addition to the primitive data types, you can define a custom data type as shown in the example below

```javascript
import { DataType } from "@slyte/core";
class Dollars extends DataType{
  static type = "string"
  static serialize(deserialized, key, record){
      return deserialized * 70 ;
  }
  static deserialize(serialized, key, modelName, pkVal){
      return serialized / 70 ;
  }
}
export { Dollars };
```

Nested properties definition in custom datatype can be done in properties / items for object / array respectively.

```javascript
import { DataType, prop } from "@slyte/core";
class SomeObj extends DataType{
  static type = "object";
  static properties = {
    name: prop("string"),
    number: prop("number"),
    profile: prop("object",{
      properties: {
        name: prop("string")
      }
    })
  }
}
export { SomeObj };
```
```javascript
import { DataType, prop } from "@slyte/core";
class SomeArr extends DataType{
  static type = "object";
  static items = prop("object", {
    name: prop("string"),
    number: prop("number"),
    profile: prop("object",{
      properties: {
        name: prop("string")
      }
    })
  })
}
export { SomeArr };
```
Method
prop
Params	:	String dataType, Object options
Returns	:	Object definitionObj
Desc	:	The method is used to define a property on the component / model

prop is used to define a property in either Schema or in a Component's data. Following is the list of primitive data types.

string
number
boolean
object
array

Note: null is accepted as a valid data, to the above data types

Below is the list of options that can be provided while defining a property.

	STRING	NUMBER	BOOLEAN	ARRAY	OBJECT
primaryKey					
default					
mandatory					
maximum					
minimum					
maxLength					
minLength					
maxItems					
minItems					
uniqueItems					
pattern					
items					
* hideAttr					

* - Available only in component

hideAttr

The "hideAttr" option can be provided only while defining the data in the Component inorder to hide the attribute from being displayed in the DOM. This is useful if you are having a large string and don't want it to be displayed as an attribute of the component in the DOM.

Example with hideAttr as true: In the below example 'some-data' attribute is hidden from DOM tree since we defined 'some-data' with hideAttr property.

```javascript
<template tag-name="blog-post">
  <my-component some-data = "{{largeString}}">  </my-component>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class BlogPost extends Component {
  data(){
    return {
      largeString : prop("string",{default : "this is very large string"})
    }
  }
}
```
```javascript
<template tag-name="my-component">
  <div> some content </div>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class MyComponent extends Component{
  data(){
    return {
      someData : prop("string",{hideAttr : true})
    }
  }
}
```
```javascript
<my-component>
  <div> some content </div>
</my-component>
```

Example with hideAttr as false: In the below example 'some-data' attribute will be displayed in DOM tree

The framework doesnot render boolean attribute but as the 'hideAttr' is decalred as false, the framework renders it just like the below code snippet.

```javascript
<template tag-name="blog-post">
  <my-component some-data = "{{boolean}}">  </my-component>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
  class BlogPost extends Component{
    data : function(){
      return {
        boolean : prop("boolean",{default : true})
      }
    }
  }
```
```javascript
<template tag-name="my-component">
  <div> some content </div>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class MyComponent extends Component{
  data : function(){
    return {
      someData : prop("string",{hideAttr : false})
    }
  }
}
```
```javascript
<my-component some-data=this is very large string>
  <div> some content </div>
</my-component>
```

Example without hideAttr: In the below example 'some-data' attribute will be displayed in DOM tree.

```javascript
<template tag-name="blog-post">
  <my-component some-data = "{{largeString}}">  </my-component>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
  class BlogPost extends Component{
    data : function(){
      return {
        largeString : prop("string",{default : "this is very large string"})
      }
    }
  }
```
```javascript
<template tag-name="my-component">
  <div> some content </div>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class MyComponent extends Component{
  data : function(){
    return {
      someData : prop("string")
    }
  }
}
```
```javascript
<my-component some-data=this is very large string>
  <div> some content </div>
</my-component>
```

Note: hideAttr attribute will be hidden from the DOM only when the attribute is passed to sLyte component. It will not work with native elements.

mandatory

The "mandatory" option can be provided inorder to ensure the given data is valid. The value cannot be null or undefined or empty string.

```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class BlogPost extends Component{
  data : function(){
    return {
      fieldName : prop("string",{default : "user",mandatory : true})
    }
  }
}
```

During inital rendering, the data might be undefined or null or empty string, In those cases you need to skip mandatory validation by passing the flag "skipValidationOnInit" as true as follows.

```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
  class BlogPost extends Component{
    data : function(){
      return {
        fieldName : prop("string",{default : "",mandatory : {skipValidationOnInit : true}})
      }
    }
  }
```

Assume there might be the case where we want to reset the mandatory data to empty. For example. if we want to reset the form field data , which might have mandatory flag, then you can pass the "skipValidation" option on setdata and component's set method API's.

```javascript
<template tag-name="blog-post">
  <form>
    <label for="username">User name:</label>
    <input type="text" id="username" name="username" value="{{lbind(fieldName)}}">
    <button onclick="{{action("saveField")}}" > save </button>
    <button onclick="{{action("resetField")}}" > reset </button>
  </form>
</template>
```
```javascript
import {Component} from "@slyte/component";
import {prop} from "@slyte/core";
class BlogPost extends Component{
  data(){
    return {
      fieldName : prop("string",{default : "",mandatory :  true})
    }
  }
  static actions(){
    return{
      resetField : function(){
        this.setData("fieldName","",{skipValidation : true})
      }
    }
  }
}
```
freeze data

To make the properties defined in the data block immutable(properties can't be changed, added, or deleted), you can use pass the config "freeze" as true just like the below code snippet.

It is to note that on freezing the data properties, such properties cannot be changed during runtime.

```javascript
data(){
  return{
    sections: prop("object", {
    "default":
      	{a : "apple", b : "ball"};
        freeze : true;
      })
  }
}
```
many

An entity of the schema can be associated to multiple entities in another schema with the method many.

Params	:	String schemaName, Object options
Returns	:	Object definitionObj
Desc	:	This method is used to define relationship with another model, stating that the given attribute can hold more than one record, of the related model.
```javascript
import { AppDb } from "../db.js";
import { prop, many } from "@slyte/core";
import { Comment } from "../comment.js";
class Blog extends AppDb.Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      userComment : many( Comment )
    }
  }
}
export { Blog };
```
one

In an one-to-one relationship, one entity in a schema can be associated with just one entity in another schema.

Params	:	String schemaName, Object options
Returns	:	Object definitionObj
Desc	:	This method is used to define relationship with another model, stating that the given attribute can hold only a single record of the related model.
```javascript
import { AppDb } from "../db.js";
import { prop, one } from "@slyte/core";
import { User } from "../user.js";
class Profile extends AppDb.Schema{
  props(){
    return {
      id : prop( "string" ),
      name : prop( "string" ),
      user : one( User )
    }
  }
}
export { Profile };
```
resolvePromises

This method takes an array/object containing promises and resolves them.

```javascript
import { resolvePromises } from "@slyte/core";
var prom = resolvePromises([
    this.$db.getAll({schema: User}),
    this.$db.getAll({schema: Module})
]);
prom.then( function( data ){
    // data will contain the array containing the resolved data
    console.log( data [ 0 ] ); // contains user response
    console.log( data [ 1 ] ); // contains module response
},function( error ){
    // error instance of the first failure
})
```
```javascript
import { resolvePromises } from "@slyte/core";
var prom = resolvePromises({
    users : this.$db.getAll({schema: User}),
    modules : this.$db.getAll({schema: Module})
});
prom.then( function( data ){
    // data will contain the resolved object.
    console.log( data.users );    // contains this.$db.getAll({schema: User}) response
    console.log( data.modules );  // contains this.$db.getAll({schema: Module}) response
},function( error ){
    // error instance of first failure
})
```

This method returns a promise which will be resolved with the data (resolved object / resolved array) on success and would reject with an error of the first failure in case of failure.

---

### api - lyte

Lyte

Lyte is a class exported from "@slyte/core" package. Following are the properties and methods in Lyte class.

Properties
Globals Inherited

Globals is an object with the methods get / set defined in this.

```javascript
this.$app.Globals.get("listview")
```
```javascript
this.$app.Globals.set("listview", true);
```
patterns Inherited

This property contains the list of registered pattern.

```javascript
this.$app.patterns.email
```
Methods
addEventListener Inherited
Params	:	String eventName, Function listenerFunction
Returns	:	String listenerId
Desc	:	This method is used to add a listener to Lyte global event

This method is used to add an event listener to global event. It returns the listenerId which can be used to remove the event listener later.

```javascript
var listenerId = this.$app.addEventListener( "callCreated" , function(){
    // Handles call creation
});
```
arrayUtils Inherited
Params	:	Array array, String functionName, param1, param2 ...
Returns	:	* (Depends upon the functionName)
Desc	:	This method is used to perform array manipulations

arrayUtils helps you to perform any array manipulation. This can be effectively implemented by using this.$app.arrayUtils for the bindings to work seemlessly. You can also import the arrayUtils and use it.

```javascript
this.$app.arrayUtils( array , 'insertAt' , 2 , { "name" : "abc" });;
```

Note:
Assume an array is passed as argument to the helper and you are manipulating array using arrayUtils api, then the helper won't be triggered. If you want to trigger helper, you need to pass additional "length" arguments as "{{helper(array,array.length)}}". so whenever you are adding or removing a value in the array then the length of the array will be changed and so helper will be triggered.

deepCopyObject Inherited
Params	:	Object data
Returns	:	Object data
Desc	:	This method is used to return a nested cloned copy of an object

This method helps you to get a nested cloned copy of an object.

```javascript
this.$app.deepCopyObject( obj );
```
error Inherited
Params	:	String Code/String message, param1, param2 ..
Returns	:	N/A
Desc	:	This method is used to throw an error with the message passed to it

This methods helps to throw an error along with the passed message.

```javascript
this.$app.error( "Error thrown" );
```
objectUtils Inherited
Params	:	Object object, String functionName, String Key, [*anyDataType Value]
Returns	:	N/A
Desc	:	This method is used to add / delete a key of an object

objectUtils is used to add / delete a key in an object. It must be used, if the object is used in the template for effective binding.

```javascript
// Will add a key "module" with value "Leads" to the object
this.$app.objectUtils( object , "add" , "module" , "Leads" )
```
```javascript
// Will delete the key "keyToBeDeleted" of the object
this.$app.objectUtils( object , "delete" , "keyToBeDeleted" );
```

Note:
Assume an object is passed as argument to the helper and you are manipulating object using objectUtils api, then the helper won't be triggered.

registerPattern Inherited
Params	:	String name, RegExp pattern
Returns	:	N/A
Desc	:	This method is used to register a pattern which can be used in prop

You can define custom pattern using registerPattern and use the same for the default pattern.

```javascript
this.$app.registerPattern("moduleName" , /CustomModule[1-5]/);
```
removeEventListener Inherited
Params	:	String listenerId
Returns	:	N/A
Desc	:	This method is used to remove a listener from Lyte global event registry

This method is used to remove the event listener for a sLyte global event. The listenerId obtained during the "addEventListener" needs to be passed as a parameter.

```javascript
this.$app.removeEventListener( listenerId );
```
triggerEvent Inherited
Params	:	String eventName, arg1, arg2 ...
Returns	:	N/A
Desc	:	This method is used to trigger a Lyte global event.

The triggerEvent method is used to trigger a sLyte global event. It takes event name, followed by the arguments to be passed to the listener function.

triggerEvent
this.$app.triggerEvent ("callCreated",{ 

		"id" : 12334,

		"name" : "CustomerCall"

 });
warn Inherited
Params	:	String Code/String message, param1, param2 ..
Returns	:	N/A
Desc	:	This method is used to throw a warning with the message passed to it

This mehod is used to throw a warning message.

```javascript
this.$app.warn( "Warning thrown" );
```

---

### api - logger

Logger

Logger is a class exported from "@slyte/core" package. Logger is used to either log a warning or an error in the console in a structured way. Error message thrown will be the instance of that particular logger class. This class is used by the other lyte modules(data/component/router) to create their own extended logger class.

Error code - It is suggested to start the error code name with a capital letter / letter followed a 3 digit number

Ex: "LD001"

Error message - It can either be a static string or with some dynamic values in a string. For dynamic points, it can be mentioned in the string with "{}" along with a decimal inside starting from 0. ({0})

Ex: "{0} is already registered in {1}"

logLevel - There are three logLevels for which the specific type of messages will be displayed in console. They are,

0 (default) - log, warn, error
1 - warn, error
2 - error

Loglevels will only work for the error thrown with an app instance. For static error messages(like error during register) or for those where app instance is not passed, this will not work.

It can be set only in an app or addon class as a property named as "logLevel"

Methods
register
Desc	:	Used in a extended class to add required event listeners to it

A new class can be created by extending the Logger class and calling register over the defined class

```javascript
import { Logger } from "@slyte/core";
class ServiceLogger extends Logger{
    static errorCodes = {
        "SL001" : "This is a sample error",
        "SL002" : "This is a sample error with two dynamic values. {0} and {1}"
    }
}
ServiceLogger.register();
```
registerErrorCodes
Params	:	Object errorCodesObj, Boolean isConstant
Returns	:	N/A
Desc	:	Used for register/add a set of error codes with its respective message with a optional constant option(defaults to false)
```javascript
ServiceLogger.registerErrorCodes({
    "SL001" : "This is a sample error",
    "SL002" : "This is a sample error with two dynamic values. {0} and {1}"
});
```
getErrorMessage
Params	:	String code
Returns	:	String Message
Desc	:	Used to return the error message for the respective code
```javascript
ServiceLogger.getErrorMessage("SL001");
ServiceLogger.getErrorMessage("SL002", "Firstvalue", "SecondValue");
```
setErrorMessage
Params	:	String code, String message, Boolean isConstant
Returns	:	N/A
Desc	:	Used to set a message for a respective error code, with a optional constant option(defaults to false)
```javascript
ServiceLogger.setErrorMessage("SL001", "This is a sample error");
ServiceLogger.setErrorMessage("SL002", "This is a sample error with two dynamic values. {0} and {1}");
```
log
Params	:	String code, Arg1...ArgN / String message
Returns	:	N/A
Desc	:	Used to log a message in console.
```javascript
ServiceLogger.log("SL001");
ServiceLogger.log("SL002", "Firstvalue", "SecondValue");
ServiceLogger.log("Some error message");
```
warn
Params	:	String code, Arg1...ArgN / String message
Returns	:	N/A
Desc	:	Used to log a warn message in console.
```javascript
ServiceLogger.warn("SL001");
ServiceLogger.warn("SL002", "Firstvalue", "SecondValue");
ServiceLogger.warn("Some error message");
```
error
Params	:	String code, Arg1...ArgN / String message / LyteInstance ins, String code, Arg1...ArgN
Returns	:	N/A
Desc	:	Used to log a error message in console.
```javascript
ServiceLogger.error("SL001");
ServiceLogger.error("SL002", "Firstvalue", "SecondValue");
ServiceLogger.error("Some error message");
ServiceLogger.error(this.$app, "SL001");
```
Events
error

For the error method, "error" event will be thrown to it particular extended Logger class. This event will also be thrown to its parent logger classes.

```javascript
ServiceLogger.error("SL001");//error method calling

ServiceLogger.addEventListener("error", function(errorObj){
    if(errorObj instanceof ServiceLogger){

    }
});
Logger.addEventListener("error", function(errorObj){
    if(errorObj instanceof ServiceLogger){

    }
});
```

If LyteInstance is passed to error, error event will also be thrown to its LyteInstance.

```javascript
ServiceLogger.error(this.$app, "SL001"); //error method calling

this.$app.addEventListener("error", function(errorObj){
    if(errorObj instanceof ServiceLogger){

    }
});
```

---

### api - slyte_router

@slyte/router

@slyte/router is a module of the sLyte framework. Following are the classes and methods that are exported from this package.

Class
Router

The Router is the base lyte class exported by this package. Application team class will create a base app class extending Lyte class. This, helps you to map the application and the browser URL.

```javascript
import { Router } from "@slyte/router";

class AppRouter extends Router {
    getConfig() {
      var config = {
        baseURL:'org',
        history : "html5",
        queryParamOptions : {
          sticky : false
        }
      }
      return config;
    }
}

export { AppRouter };
```
Route

The route file helps you to handle the navigation. With this you can establish queryParams and perform series of actions.

```javascript
import Route from "@slyte/router"

class Home extends Route {
  static queryParams = [{"per_page" : { cache:false, refreshfetch:false }},"page"];
  forceFetch() {} /*boolean or callback*/
  .
  .
  .
  static actions() {
    return {
        .
        .
        .
    }
  }
};

export { Home }
```
RouterMap

The mapping of the routes to the corresponding URL is done here.

```javascript
import { RouterMap } from "@slyte/router";

 class AppMap extends RouterMap {
     map() {
         this.route("users",{path:'/orgUsers'}, () => {
             this.route( "list" );
             this.route( "detail" , { path : "/:userId" });
         })
     }
 }

 export default AppMap;
```
History

Based on your application, you can choose the route to have any type of history such as hash history or HTML5 History.

```javascript
import { AppMap } from "./maps/map";

    class AppRouter extends Router {
    lookups(){
        return [];
    }
    getConfig() {
        history : "html5"
    }
    return config;
}
```

---

### api - router

@slyte/router

@slyte/router is a module of the sLyte framework. Following are the classes and methods that are exported from this package.

properties Instance
location

Location details ( to provide details such as initial load, history Index and fromHistory - to specify if the navigation is via history APIs / history buttons) provided in router instance(this.$app.$router.Location).

```javascript
{
   data : object, /* state object pushed to history*/
   fromHistory : boolean, /* Is URL from browser navigation */
   hash :  string, /* hash segment of url */
   host :  "string",
   hostname :  "string",
   href :  "string",
   index :  0,
   initial :  boolean, /* Is URL change from browser reload */
   origin :  "string",
   pathname :  "string",
   port :  "string",
   protocol :  "string",
   search :  "string",
   type :  "html5", /* type of history used */
   url : "string",
}
```
events 
beforeTemplateDestroy 
Desc	:	event before removing template.
Params	:	{ outlet (String), route (Object) } (Object)
ReturnType	:	N/A

Before removing DOM corresponding to exiting route, this event is dispatched. Any operations that needs to be done before removal of DOM can be done here.

```javascript
this.$app.$router.addEventListener( 'beforeTemplateDestroy' , function(params){
  Utils.unbindChildEvents(params.outlet);
});
```
beforeRouteNavigation Instance event
Desc	:	event triggered before a tranisition is started.
Params	:	{ prevNavObj, transObj, historyObj} (Object)
ReturnType	:	N/A

This event is thrown whenever a navigation is started.

```javascript
this.$app.$router.addEventListener( "beforeRouteNavigation" , function(){
  // event before a navigation is made
});
```

This function will be called for all transitiions. So avoid unwanted checks in this function.

afterRouteNavigation Instance event
Desc	:	event triggered after a navigation is completed.
Params	:	{ transObject } (Object)
ReturnType	:	N/A

This event is thrown after a navigation is completed.

```javascript
this.$app.$router.addEventListener( "afterRouteNavigation" , function(){
  // event after a navigation is made
});
```

This function will be called for all transitions. So avoid unwanted checks in this function.

methods 
setConfig Instance
Params	:	N/A
ReturnType	:	object
Desc	:	Mapping for router and other base configuration.
getConfig Instance
Params	:	Object
ReturnType	:	N/A
Desc	:	Default configurations for router.

Default configurations for router are specified to this method. Router level configurations are

```javascript
import { Router } from "./router/router";
import { AppMap } from "./maps/map";

class AppRouter extends Router {
  getConfig() {
    var config = {
      baseURL : '',
      history : "html5",
      queryParamOptions :  {
        sticky : false
      },
      baseMap : AppMap,
      linkActiveClass : "active"
    }
    return config;
  }
}
```
BaseURL

baseURL is context path of the application. sLyte router will prefix this to all path specified in the routes.

History

sLyte Router supports two type of history.

Hash(default)
HTML5
QueryParamOptions

QueryParams are maintained for a route when navigationed to same route, this property is called as sticky query params. By default sticky query params is enabled. To disable it, it should be configured in router to false.

BaseMap

This config will provide base map to the router.

LinkActiveClass

This class will be set to all active link tags.

addMap 
Params	:	mapInstance, route to be mounted
ReturnType	:	N/A
Desc	:	Adds the map dynamically.

With this function, you can add the maps dynamically.

```javascript
import{settingsMap} from "router/maps/settingsMap.js"
this.addMap(settingsMap,"a.b")
```

You can add the maps dynamically as desired with addMap api, provided the routes are declared in map.js.

In the above code snippet, the routes present in the dynamicMap gets added as a child route of a.b route.

beforeRouteNavigation Instance
Params	:	prevNav, nav, historyObj
ReturnType	:	N/A
Desc	:	Callback before a navigation is started.

This method will be invoked with the old navigation and new navigation as arguments, whenever a route is changed. This function helps you to handle common use cases before starting a new navigation.

```javascript
class AppRouter extends Router {
  beforeRouteNavigation = function(prev,current) {
    showLoading();
  }
}
```
afterRouteNavigation Instance
Params	:	nav
ReturnType	:	N/A
Desc	:	Callback after a navigation is completed.

This method will be invoked when a navigation is completed. This function helps you to handle common use cases for navigations.

```javascript
class AppRouter extends Router {
  afterRouteNavigation = function(prev,current) {
    hideLoading()
  }
}
```
beforeScroll Instance
Params	:	nav
ReturnType	:	boolean
Desc	:	before scrolling to a fragment (only in html5 history)

Html5 history can have fragments(elementId) as hash segment. This hash segment will be auto scrolled. This can be prevented by returning false to beforeScroll method.

```javascript
this.$router.beforeScroll = function( trans ){
  if( trans.ignoreScroll ){
    return false;
  }
};
```
getRouteInstance Inherited
Params	:	routeName
ReturnType	:	Object
Desc	:	Will return route instance of the mentioned route, From which its properties can be accessed.

This method returns instances of navigation which is currently visible.

```javascript
this.$router.getRouteInstance('blog.list'); // returns route instance of "blog/list";
```
getRouteDefinition 
Params	:	routeName
ReturnType	:	Object
Desc	:	Will return route definition of the mentioned route.

This method returns definition that is registered for particular route.

```javascript
this.$router.getRouteDefinition('blog.list'); // returns route's class definition of list route;
```
getURL Inherited
Params	:	routeName
ReturnType	:	String
Desc	:	Returns url of the mentioned route object.

This method returns URL for a route object provided

```javascript
this.$router.getURL( 'blog.list' ){   // returns "blog/list"
```
getRoute Inherited
Params	:	URL
ReturnType	:	Object
Desc	:	Returns route object for url provided.

This method returns route match based on router mapping for a particular URL.

```javascript
this.$router.getRoute( 'blog/list' ){  //returns {route : "blog.list" , queryParams : {}, dynamicParams : []}
```
checkIfSameRoute Inherited
Params	:	navigation1,navigation2
ReturnType	:	boolean
Desc	:	Returns boolean based on similarity among tranistions.

This method is used to compare two navigation objects. It returns boolean value.

```javascript
actions : {
  willNavigate : function( trans ){
    if( this.$router.checkIfSameRoute( this.navigation.info , trans.info )){
      this.abort();
    }
  }
}
```
navigateTo Inherited
Params	:	routeName , dynamicParams... , QueryParamObject
ReturnType	:	navigationObject
Desc	:	Navigations to specified route by creating new entry in history

Navigate to new route with a new entry being pushed to history array can be carried out using this method.

```javascript
if(app.$router.navigation.info.route == "index"){
  app.$router.navigateTo('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : app.$router.navigationTo(routeName, dynamicParams..., queryParamsObject)
  OR
  app.$router.navigateTo({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //used on same url, history will not be pushed.
    startFrom : "string"' //forced refresh from specified route
  })
  */
}
```
replaceWith Inherited
Params	:	routeName , dynamicParams... , QueryParamObject
ReturnType	:	navigationObject
Desc	:	Navigations to specified route by replacing existing history entry

Any new navigation requiring to replace the existing history entry can be done using this method. This, replaces the current history entry.

```javascript
if(app.$router.navigation.info.route == "index"){
  app.$router.replaceWith('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : app.$router.replaceWith(routeName, dynamicParams..., queryParamsObject)
  OR
  app.$router.replaceWith({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //will refresh the specified route on same url
    startFrom : "string"' //forced refresh from specified route
  })*/
}
```

---

### api - route

@slyte/route

@slyte/route is a module of the sLyte framework. Following are the classes and methods that are exported from this package.

properties
$ 

With the '$' properties you can get the values returned from the fetch, beforeFetch, afterFetch hooks.

this.$.beforeFetch

With the property 'this.$.beforeFetch' you get the values returned from the hook beforeFetch.

this.$.Fetch

With the property 'this.$.Fetch' you get the values returned from the hook Fetch.

this.$.afterFetch

With the property 'this.$.afterFetch' you get the values returned from the hook afterFetch.

queryParams Instance

Query params for a route is meta properties of data fetched on that route. Changes in query param triggers the route's model hooks in order to fetch new data. We should specify the list of query params for a given route.

While using with components, Query param change or dynamic param change will not re-initialize the component. Instead, it will try to update the component based on the data change.

```javascript
class Home extends Route {
  static queryParams = ["page"];
}
```

Default query params value can be specified in the router file itself.

```javascript
class testAppMap extends RouterMap {
  map() {
    this.route( "users" , { "path" : "orgUsers" } ,() => {
      this.route( "list?page=1&perPage=10" );
    });
  }
}
```

Routes with default query params can be generated through CLI by passing it as an argument.


```javascript
lyte generate route "home" "/home?default=true"
```
title Instance

document title is set from this property. The property must be set before navigating to a route. If document title needs to be set dynamically, then use 'setTitle' method.

routeName Instance

This property holds the name of the route. It is not nested value.

component Instance

Component rendered in a particular route is stored in this property.

parent Instance

This property returns instance of parent route. Parent route instance can also be retrived using 'getRouteInstance'.

currentData Instance

currentData holds the data returned from model hook, It is set to component. If data set to component needs to be changed, then currentData model needs to be changed in afterModel hook.

forceFetch Instance

forceFetch is a property which enables to fetch data across routes without waiting for parent route.

While using forceFetch, routes Fetch hooks should not be dependent with other route.

forceFetch can be either a callback returning boolean or boolean

```javascript
class Home extends Route {
  forceFetch( params ){
    /* returns boolean.*/
  },
  (OR)
  forceFetch : boolean
}
```
methods
setTitle Inherited
Params	:	String
ReturnType	:	N/A
Desc	:	The value will be set as document title.

This method is used to set title of document.

setQueryParams Inherited
Params	:	Object (or) key-value
ReturnType	:	N/A
Desc	:	The given value will be set to the location URL. Will inturn call route refresh.

setQueryParams is to navigation to the same route with query param changes. This can be done in that particular route instance.

```javascript
class Blogs extends Route {
  actions : {
    changePageNumber : function( value ){
      this.setQueryParams({ page : value });
    }
  }
};
```
getQueryParams Inherited
Params	:	N/A
ReturnType	:	Object
Desc	:	Will return the query params specified in the route.

This method returns query params of the particular route.

setDynamicParam Inherited
Params	:	value
ReturnType	:	N/A
Desc	:	This will change the dynamic segment of a route and updates location URL. Will inturn call route refresh.

setDynamicParam is to navigation to the same route with dynamic param changes. This can be done in that particular route instance.

```javascript
class Blogs extends Route {
  actions : {
    changeVersion : function( value ){
      this.setDynamicParams( value );
    }
  }
};
```
getDynamicParam Inherited
Params	:	N/A
ReturnType	:	String
Desc	:	Will return the dynamic param associated with the route.

This method returns dynamic params of the particular route(If exists).

refresh Inherited
Params	:	N/A
ReturnType	:	transObject
Desc	:	Will refresh a navigation from the specified route.

refresh method of route is useful for refreshing the current routes. Let us consider we are in 'a.b.c.d' route. If 'b.c.d' route needs to be refreshed, refresh method needs to be called from 'b' route.

```javascript
static actions() {
  return {
    refreshRoute : function() {
      this.refresh();
    }
  }
}
```
navigateTo Inherited
Params	:	routeName , dynamicParams... , QueryParamObject
ReturnType	:	transObject
Desc	:	Will navigate to the specified route.

Navigate to new route with a new entry being pushed to history array can be carried out using this method.

```javascript
if(this.navigation.info.route == "index"){
  this.navigateTo('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : this.navigationTo(routeName, dynamicParams..., queryParamsObject)
  OR
  this.navigateTo({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //used on same url, history will not be pushed.
    startFrom : "string"' //forced refresh from specified route
  })
  */
}
```
replaceWith 
Params	:	routeName , dynamicParams... , QueryParamObject
ReturnType	:	transObject
Desc	:	Will replace the current URL with the specified URL.

Any new navigation requiring to replace the existing history entry can be done using this method. This, replaces the current history entry.

```javascript
if(this.navigation.info.route == "index"){
  this.replaceWith('index.author.view','authorID001', { type : 'detail' });
  /* WITH MIN DATA : this.replaceWith(routeName, dynamicParams..., queryParamsObject)
  OR
  this.replaceWith({
    route : routeName,
    dynamicParams : ["string"],
    queryParams : {},
    fragment : "string"',
    refreshRoute : "string", //will refresh the specified route on same url
    startFrom : "string"' //forced refresh from specified route
  })*/
}
```
hooks

When a route is invoked, these are lifecylce hooks/callbacks made available.

renderLoadingTemplate Instance
Params	:	paramsObject
ReturnType	:	Object
Desc	:	return where and what to render in loading state.(container and component/HTML) @param {Object} queryParams and dynamicParams @return {Object} outlet and component/HTML
```javascript
renderLoadingTemplate: function(){
  return{
    outlet : '#outlet',
    component : 'todo-list',
    html : "html to be rendered"
  }  /* component OR html */
}
```
beforeFetch Instance
Params	:	paramsObject
ReturnType	:	Promise OR Object
Desc	:	Pre processing stage where you can decide whether to abort/redirect the current navigation(e.g Permission check).

There are cases that needs to be checked before making data requests(Permissions for that page), and decide whether to abort/redirect the navigation. Such checks can be executed in 'beforeFetch' callback of a route. 'beforeFetch' is provided with param object as arguments(Query params and dynamic params of that particular route).

```javascript
beforeFetch : function(params){  /* params = { queryParams : {} , dynamicParam : 'string' } */
if(!Permissions.getPermission( params.queryParams.filter )){
  this.navigation.abort();
}
```
fetch Instance
Params	:	paramsObject
ReturnType	:	Promise OR Object
Desc	:	Initiate data request that are necessary for the current page.

Data requests for a particular route needs to be orginated from 'fetch' hook. You can make ajax calls or use DataStore to fetch the data. Typically 'fetch' hook will return a promise object, which Router will resolve automatically and the data(records) will be available to you in upcoming hooks.

Router resolves promise object or promise array and returns data to afterModel hook.

```javascript
fetch : function( params ){     /* params = {queryParams : {} , dynamicParam : 'string'} */
  return
}
```
afterFetch Instance
Params	:	Data, paramsObject
ReturnType	:	Promise OR Object
Desc	:	Manipulating data before returning data to component.

There might be manipulations with the data recieved from fetch hook. Such manipulations can be made in 'afterFetch' hook. It receives current fetch as an argument which was resolved in the earlier step, and params as same as all other lifecycle hooks.

```javascript
afterFetch : function( model , params ){
  this.currentData = { "todoList" : model , filter : params.queryParams.filter };
}
```
divert Instance
Params	:	Data, paramsObject
ReturnType	:	N/A
Desc	:	Redirections based on data fetched.

Followed by afterFetch, divert hook will be triggered.
This will leave the original navigation validated, and not cause the parent route's hooks to fire again. Say for example we are in '/todo'. if we try to change the navigation to '/todo/create' inside redirect hook, the hooks that are executed till now will not be fired again.

```javascript
divert : function( model , params ){
  if( this.navigation.info.route == "index" ){
    this.navigateTo( '/todo/create' )
  }
}
```
render Instance
Params	:	Data, paramsObject
ReturnType	:	Object
Desc	:	return where and what to render.(container and component/HTML)

render is where you actually render the view/template combining with db/Fetch. An outlet is where you want to render the component. Outlet takes querySelector as value, it is mandatory to be present in the parent route's outlet. The content which needs to be rendered can be a sLyte Component or HTML content.

```javascript
render : function(){
  return{
    outlet : '#outlet',
    component : 'todo-list',
    html : "html to be rendered"
  }  /* component OR html */
}
```

outlet value should be CSS selector. The render template of old route will be destroyed, once we recieve return statement from render. Say for example we go to route "/a/b/c" from "/d" and render is available only in "c" route then "d" route template will be destroyed only before render hook of "d" route.

afterRender Instance
Params	:	Data, paramsObject
ReturnType	:	N/A
Desc	:	Post processing of rendered page.

afterRender is executed after the template/component is inserted into the document. This hook will be useful to do post-processing of the DOM.

```javascript
afterRender : function( model , params , renderedComponent ){
  console.log( 'after render' );
}
```
beforeExit Instance
Params	:	Data, paramsObject
ReturnType	:	N/A
Desc	:	Will be invoked before a route is removed from view.

'beforeExit' is a hook which gets invoked when a route is about to exit from the view. For example, when a user navigates from 'blogs/create' to 'blogs/edit', create route's 'beforeExit' will be invoked before the route transits.

```javascript
beforeExit : function( params ){
  console.log( 'before exit' );
}
```
didDestroy Instance
Params	:	Data, paramsObject
ReturnType	:	N/A
Desc	:	Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal).

'didDestroy' is a hook which gets invoked when a route is about to destroy from memory. For example, when a user navigates from 'blogs/create' to 'blogs/edit', create route's 'didDestroy' will be invoked before render hook of edit.

```javascript
didDestroy : function( params ){
  //remove css files
}
```
actions

These methods are called as actions because these functions will be bubbled to parent routes unless its stopped(returning false to the method). Common handling between sibling routes can be handled in parent route.

onBeforeLoad
Params	:	paramsObject
ReturnType	:	N/A
Desc	:	Triggered once route navigation starts.

onBeforeLoad is an action which will be triggered before a navigation starts. This can be used to handle loading state for a navigation.

```javascript
actions : {
  onBeforeLoad : function( params ){
    // handle loading state
  }
}
```
onError
Params	:	error, pausedTrans, paramsObject
ReturnType	:	N/A
Desc	:	Triggered by error on file load or on data request.

If there is an error in file download(file provided in getResources or getDependencies) or If there is error response from model hooks, navigation will be paused and 'onError' hook will be called. navigation can be resumed based on priorities. If not resumed, navigation will be aborted.

```javascript
actions : {
  onError : function( error , pausedTrans , params , hook ){
    if( error.isSecurityError ){
      var securityError = Lyte.Component.render( "security-error" , errorData.data , "#outlet" );
    } else {
      this.navigateTo( "home" )
    }
  }
}
```
willNavigate
Params	:	navigation
ReturnType	:	N/A
Desc	:	Triggered before a navigation is going to change.
```javascript
actions : {
  willNavigate : function( trans ){
    if( this.$router.checkIfSameRoute( this.navigation.info , trans.info )){
      this.abort();
    }
  }
}
```
didNavigate
Params	:	paramsObject
ReturnType	:	N/A
Desc	:	Triggered after completion of navigation.
```javascript
actions : {
  didNavigate : function( trans ){
    if( this.$router.checkIfSameRoute( this.navigation.info , trans.info )){
      this.abort();
    }
  }
}
```

---

### api - transition

sLyte Navigation
properties
state

This property says about the state of a navigation with status codes.

```javascript
201 - Navigation started
102 - Navigation on process
307 - Navigation on pause
308 - Navigation redirected permanently (aborted)
200 - Navigation success
```
info

This property returns details about the transition.

Info (Object)
route (String)
queryParams (Object)
dynamicParams (Array)
fragment (String)
url

This property returns URL of a transition.

data

Data which needs not be put in URL but need to be transfered to a transition is send through this property. This data will be pushed to history once a transition starts. This data will be available on reload.

```javascript
this.navigateTo( '/todo.create' ).data = { refresh : true }
```

Other keys that are set in a transition object will be available for transition and it will not be pushed to history. Hence it will not be available on browser reload.
```javascript
this.navigateTo( '/todo.create' ).from = "todo"
```

methods
abort

This method aborts a transition which is in process.

pause

This method is used to pause a transition. For example, When a transition is started and if page has data which is not saved, transition can be paused and based on users response, transition can be processed.

resume

This method resumes a transition which is already paused.

---

### api - slyte_component

@slyte/component

@slyte/component is the package exposed by the sLyte framework. Following are the classes that are exported from this package.

Class
ComponentRegistry

This gets created by default on creating an app in the Slyte.

```javascript
import { ComponentRegistry } from "@slyte/component";
class CrmSettingsRegistry extends ComponentRegistry{
    lookups() {
        return []
    }
}
export { CrmSettingsRegistry };
```
Methods
arrayUtils

Any manipulation with the arrays has to be performed with arrayUtils. In simple terms, whenever you render a component which has an array in it or you need to perform any manipulation on the array, this.$app.arrayUtils comes handy. You can also import the arrayUtils and use it as follows. These arrayUtils plays an effective role in binding.

Note:
Assume an array is passed as argument to the helper and u are manipulating array using arrayUtils api, then the helper won't be triggered. If u want to trigger helper, u need to pass additional "length" arguments as "{{helper(array,array.length)}}". so whenever you are adding or removing a value in the array then the length of the array will be changed and so helper will be triggered.

It supports the following array manipulations.

InsertAt
Param	:	Array array, "insertAt", Number position, element / [element1, element2, ...]
Returns	:	N/A
Desc	:	Used to insert one or more elements into an array at the specified position

This method allows you to insert one or many elements in an array at a specified position.

```javascript
import { arrayUtils } from "@slyte/component";
//inserts single element in the array
arrayUtils( array , 'insertAt' , 2 , { "name" : "abc" });

//inserts multiple element in the array
arrayUtils( array , 'insertAt' , 2 , [{ "name" : "abc" },{ "name" : "def"}]);


//inserts a new array in to the array
arrayUtils( array , 'insertAt' , 2 , [[{ "name" : "abc" },{ "name" : "def"}]]);
```
removeAt
Param	:	Array array, "removeAt", Number position, Number noOfElementsToRemove
Returns	:	Array deletedItems
Desc	:	Used to remove one or more elements at the specified position
```javascript
import { arrayUtils } from "@slyte/component";
// Removes one element at index 2
arrayUtils( array , 'removeAt' , 2 , 1 );
```
replaceAt
Param	:	Array array, "replaceAt", Number position, element / [element1, element2, ...]
Returns	:	replacedElement
Desc	:	Used to replace the element at specified position with one or more elements
```javascript
import { arrayUtils } from "@slyte/component";
// Replaces element at 2 with a single element
arrayUtils( array , 'replaceAt' , 2 , {"name" : "something" });

// Replaces element at 2 with a multiple element
arrayUtils( array , 'replaceAt' , 2 , [{"name" : "something1" },{"name" : "something2" }]);

// Replaces element at 2 with an array element
arrayUtils( array , 'replaceAt' , 2 , [[{"name" : "something1" },{"name" : "something2" }]]);
```
Push
Param	:	Array array, "push", element / [element1, element2, ...]
Returns	:	N/A
Desc	:	Used to push one or more elements at the end of the array
```javascript
import { arrayUtils } from "@slyte/component";
//pushes single element to the array
arrayUtils( array , 'push' , 1);

//pushes multiple element to the array
arrayUtils( array , 'push' , [1,2,3]);

// pushes an new array into the array
arrayUtils( array , 'push' , [[ "1" , "2" , "3" ]]);
```
Pop
Param	:	Array array, "pop"
Returns	:	poppedElement
Desc	:	Used to pop the last element in the array
```javascript
import { arrayUtils } from "@slyte/component";
arrayUtils( array , 'pop' );
```
Shift
Param	:	Array array, "shift"
Returns	:	removedElement
Desc	:	Used to remove the first element in the array
```javascript
import { arrayUtils } from "@slyte/component";
arrayUtils( array , 'shift' );
```
Unshift
Param	:	Array array, "unshift", element / [element1, element2, ...]
Returns	:	N/A
Desc	:	Used to add one or more elements at the beginning of the array
```javascript
import { arrayUtils } from "@slyte/component";
//add single element at the beginning of the array
arrayUtils( array , 'unshift' , { "name" : "something" });

//add multiple element at the beginning of the array
arrayUtils( array , 'unshift' , [{ "name" : "something1" },{ "name" : "something2" }]);

//add new array element at the beginning of the array
arrayUtils( array , 'unshift' , [[{ "name" : "something1" },{ "name" : "something2" }]]);
```
Concat
Param	:	Array array, "concat", Array arrayToBeAdded
Returns	:	N/A
Desc	:	Used to concat one array to another.
```javascript
import { arrayUtils } from "@slyte/component";
//pushes single element in to the array
arrayUtils( array , 'concat', 1);

//pushes multiple elements in to the array
arrayUtils( array , 'concat', [ "1" , "2" , "3" ]);

//pushes a new array element in to the array
arrayUtils( array , 'concat', [[ "1" , "2" , "3" ]]);
```
Splice
Param	:	Array array, "splice", Number position, Number noOfElementsToDelete, element / [element1, element2, ...]
Returns	:	Array deletedItems
Desc	:	Used to perform splice operation on the array
```javascript
import { arrayUtils } from "@slyte/component";
// The following code removes two elements starting at index 3 and inserts one element.
arrayUtils( array , 'splice' , 3 , 2, { "name" : "something1" });

// The following code removes two elements starting at index 3 and inserts two elements.
arrayUtils( array , 'splice' , 3 , 2, [{ "name" : "something1" } , { "name" : "something2" }]);

// The following code removes two elements starting at index 3 and inserts a new array in to the array.
arrayUtils( array , 'splice' , 3 , 2, [[{ "name" : "something1" } , { "name" : "something2" }]]);
```
removeObjects
Param	:	Array array, "removeObjects", Array elementsToBeDeleted
Returns	:	N/A
Desc	:	Used to remove the specified objects from the array
```javascript
import { arrayUtils } from "@slyte/component";
// Removes element "1" from array
arrayUtils( array , 'removeObjects' , "1" );
// Removes element "2" and "3" from array
arrayUtils( array , 'removeObjects' , ["2","3"] );
```
sort
Param	:	Array array, options with keys sortBy,sortOrder
Returns	:	sorted array
Desc	:	Used to sort with sortby and sortorder option.
```javascript
this.$app.arrayUtils(this.getData("someArray2"), "sort",
{"sortBy" : this.getData("property"),
"sortOrder" : this.getData("currentSort")});
```
compareSort
Param	:	Array array, sort, compare function.
Returns	:	sorted array
Desc	:	Allows to pass any function to the sort arrayUtil.
```javascript
this.$app.arrayUtils(this.getData("someArray"), "sort", function(item1, item2) {
 console.log(item1, item2);
 if(item1 > item2) {
  return -1;
 } else if(item1 ≶ item2) {
  return 1;
 } else {
  return 0;
 }
});
```
objectUtils

This method is used to add / delete a key in an object. It must be used if the object is used in the template for effective binding. ObjectUtils can be used by importing them just like the below code snippet. You can also use it via this.$app.objectUtils.

```javascript
import {objectUtils} from "@slyte/component";
// Will add a key "module" with value "Leads" to the object
objectUtils( object , "add" , "module" , "Leads" )
```
```javascript
import {objectUtils} from "@slyte/component";
// Will delete the key "keyToBeDeleted" of the object
objectUtils( object , "delete" , "keyToBeDeleted" );
```

Note:
Assume an object is passed as argument to the helper and you are manipulating object using objectUtils api, then the helper won't be triggered.

set
Params	:	Object object, String paramName, * Value
Returns	:	N/A
Desc	:	Used for setting a value to a particular key of an object

In cases where you don't have the reference to component or record (store's record instance) and want to set a value to a specific key of an Object, you can use this method.

```javascript
import { set } from "@slyte/component";
set( someObject , "module" , "Leads" )
```

The above code will set the value of "module" key of "someObject" to "Leads" and ensures that the changes are reflected in the components which have used this data.

render
Params	:	Component's Class, Object componentData, String querySelector, options
Returns	:	Component Element (Node)
Desc	:	To create a component and render it at the outlet specified by the querySelector or append in the node reference

This method comes handy when you want to render a component. Let us consider an example where CRM registry has multiple instances. If any particular instance is not specified, the first intiaited instance will be taken into consideration by default. Now to make it available in the particular registry, you can use this.$registry.render. Apart from that, you can also pass the registry instance in the options with the keyword "registryInstance."

Have a look at the below code snippet to get a better understanding of render()

```javascript
render(
  componentClass,           // the component you want to render
  componentData,           // object (props/attributes) for that component
  outlet,                  // where to render it (a selector or node reference)
  options                  // optional to define the position such as before,after,prepend,append
)
```
Parameters in detail
componentClass - The actual component you want to render.
data - The Properties/data passed into the component.
outlet - The node to render the DOM.
options - Define the position such as before, after, prepend, append. While using prepend and append, the framework uses node.prepend api and node.appendchild api. While passing the position, you can also pass the referenceNode such as {position : "before", refNode : refNode}

In the componentClass - provide the component you want to render

Let us look at few examples

```javascript
import { render } from "@slyte/component";
import { WelcomeComponent } from "./welcome-component.js";
let node = document.querySelector("home-comp");
let welcomeCompNode1 = render( welcomeComponent , {
  "module" : "Leads",
  "list" : true
}, node,
{
  attributes : ["attrName1" , {name : "attrName2", value : "attrValue2"} ],
  registryInstance : window.crmreigstryinstance,
  {methods : {methodName : function(){} ,methodName2 : function(){} }},
  clearOutlet : true,
  setInnerHTML: true
  position : "after"
});


let welcomeCompNode2 = render( welcomeComponent , {
  "module" : "Leads",
  "list" : true
}, "#outlet",{position : "append"} );
```

In the above example, the component "welcome-component" will be created and appended to the element(node) or in the outlet.

load component

Slyte autobundles the components, router, datastore of your app by default. But if your app lacks the router, the auto bundling gets interrupted as there will be an improper flow of import statements. In such cases, you can use loadcomponent api. With this, you can download the files and use it with much ease.

```html
import {loadComponent} from "@slyte/core"
loadComponent("welcome-component", registryClass);
loadComponent(["a-comp", "b-comp"] , registryClass);
loadComponent([{ name : "a-comp" , registry : registryClass1}, { name : "x-comp" , registry : registryClass2} ] );
```

While using the loadcomponents, the registryClass has to be mentioned. If the registryClass is not passed, then the welcome-component will be searched only in the default registry.

With load components, you can pass the following as the first argument
Components as string,
Multiple components as array of string,
The component and the registry class as an object.
and the registry class can be passed as the second argument.

---

### api - lyte-component

Registry - API
Properties
registeredHelpers

This property contains a list of all the registered Helpers. This can be used to check if a helper has been registered or not.

"this.$registry" refers to registry instance.

```javascript
if(this.$registry.registeredHelpers[ "someHelper" ] ){
  //Helper is present
}
```
registeredComponents

This property contains a list of all the registered Components. This can be used to check if a particular component has been registered successfully.

"this.$registry" refers to registry instance.

```javascript
if( this.$registry.registeredComponents[ "some-component" ] ){
  //Helper is present
}
```
Methods
register Static Inherited
Params	:	String componentName, Object componentDefinition, Object options
Returns	:	N/A
Desc	:	Used for registering the Component

This method is used to register the Component. We can provide additional options during registering, such as Mixins to be used in the Component.

component class will be registered by default throw cli.

```javascript
import {prop} from "@slyte/core";
import {FirstMixin} from "../mixins/first-mixin.js";
class SomeComponent extends component{
  data(){
    return {
      firstData : prop( "string" )
    }
  }
  static actions(){
    return{
      firstAction : function(){
      }
    }
  }
  static methods(){
    return{
      firstMethod : function(){
      }
    }
  }
  someFunc : function(){
  }
  includes : function(){
    return [FirstMixin];
  }
}
SomeComponent.register("some-component") //will be added from cli by default.
```
registerHelper Static Inherited
Params	:	String helperName, Function helperFunction
Returns	:	N/A
Desc	:	Used for registering the Helper

"TestAppregistry" refers the registry class in "component.js" file. So the helper will be registered in this particulat registry scope.

```javascript
import {TestAppregistry} from "./component.js";
TestAppregistry.registerHelper( "custom-helper" , function( param1 , param2 ){
  if( param1 === "someValue" ){
    // do some processing
    return "someValue"
  }
});
```
render Inherited
Params	:	Component's Class, Object componentData, String querySelector and options
Returns	:	Component Element (Node)
Desc	:	To create a component and render it at the outlet specified by the querySelector or append in the node reference

This method is used when we need to render a component to a specified outlet. You can provide the data for the component and either specify the outlet as query Selector or pass direct node element, where the created component needs to be appended.

While passing the arguments, the fourth options can contain attributes, registryInstance, methods, clear outlet and set inner HTML.

Options

Here, the 'attributes' contain class, id or any other parameter. You can also pass the directives in the attributes.(eg @shadow). 'registryInstance' contains the particular instance in which it can be rendered. 'Methods' contains the functions. Setting the 'clearOutlet' parameter as true, clears the outlet and renders the component. And on setting 'setInnerHTML parameter true, helps to render only the HTML string and along with it, the data and method will not be passed to it.

```javascript
import { render } from "@slyte/component";
import { WelcomeComponent } from "./welcome-component.js";
let node = document.querySelector("home-comp");
let welcomeCompNode1 = render( welcomeComponent , {
  "module" : "Leads",
  "list" : true
}, node,
{
  attributes : ["attrName1" , {name : "attrName2", value : "attrValue2"} ],
  registryInstance : window.crmreigstryinstance,
  {methods : {methodName : function(){} ,methodName2 : function(){} }},
  clearOutlet : true,
  setInnerHTML: true
}
);

let welcomeCompNode2 = render( welcomeComponent , {
  "module" : "Leads",
  "list" : true
}, "#outlet" );
```
set Inherited
Params	:	Object object, String paramName, * Value
Returns	:	N/A
Desc	:	Used for setting a value to a particular key of an object

In cases where you don't have the reference to component or record (store's record instance) and want to set a value to a specific key of an Object, you can use this method.

"this.$registry" refers to registry instance.

```javascript
this.$registry.set( someObject , "module" , "Leads" )
```

The above code will set the value of "module" key of "someObject" to "Leads" and ensures that the changes are reflected in the components which have used this data.

unregisterComponent Static Inherited
Params	:	String componentName
Returns	:	N/A
Desc	:	Used for unregistering a component

"TestAppregistry" refers the registry class in "component.js" file. So the helper will be registered in this particulat registry scope.

```javascript
import {TestAppregistry} from "./component.js";
TestAppregistry.unregisterComponent( "first-component" )
```

The above code will unregister the component "first-component". Please do note that, there shouldn't be any active instances of the component while unregistering it, otherwise the unregistration fails.

---

### api - component

Component - API

The "this" context inside the component JS file refers to the Component Instance. Inside actions, methods and custom functions too, "this" refers to the Component Instance.

Note: The Component Instance is not the actual Component which is rendered in the DOM. This is a wrapper which contains the methods, actions and data of the Component.



Properties
$node Inherited

This property is used to get the actual HTML Element (associated with this component), that was rendered in the DOM.

```javascript
var actElement = this.$node;
var id = actElement.getAttribute( "id" );
```
data Inherited

This property contains the data associated with the component.

```javascript
var someDataVal = this.data.someDataVal;
```
$validate 

With this, you can validate the particular component's data type.

```javascript
this.$.validate()
```

On validating, if there is an error, you can find them just like the below image in the console of the developer's mode.

Methods
getData Inherited
Params	:	String dataPath
Returns	:	value
Desc	:	The method is used to retrieve a value of a data from component
```javascript
// someVal is a data defined in the "data" block of the Component.
var someDataVal = this.getData( "someVal" );
// retrieving nested data
var someDeepData = this.getData( "someVal.module.module_name" );
```

As explained in the code, you can also retrieve nested data using "getData".

getMethods Inherited
Params	:	String methodName (Optional)
Returns	:	Object methodList / Function method
Desc	:	This method is used to retrieve the methods present in the component

This method is used to retrieve a single method / list of all methods associated with the component.

```javascript
// Retrieving a single method.
var onBeforeCloseMethod = this.getMethod( "onBeforeClose" );
// Retrieving all methods
var allMethods = this.getMethods();
```
setData Inherited
Params	:	[ String key, *anyDataType value ] / Object multipleSetData
Returns	:	N/A
Desc	:	This method is used to set value in the component.

This method is used set single / multiple data in the component.

```javascript
// Setting a direct data
this.setData( "module" , { "module_name" : "Leads" });
// Setting a deeply nested data
this.setData( "module.module_name" , "Leads" );
// Setting multiple data
this.setData({ "page" : "1" , "per_page" : "30" });
```
setMethods Inherited
Params	:	[ String methodName, Function method ] / Object multipleMethods
Returns	:	
Desc	:	This method is used to set method in the component

This method is used to set either a single method / multiple methods in a component.

```javascript
// Setting a single method
this.setMethods( "onBeforeClose" , function(){
  // some functionality
});
// Setting multiple methods
this.setData ( {
  "onBeforeClose" : function(){
    // some functionality
  } ,
  "onBeforeOpen" : function(){
    // some functionality
  }
});
```
hasAction Inherited
Params	:	[ String actionName ]
Returns	:	Boolean
Desc	:	This method is used to check whether a custom action has been defined for the component by the parent component.

This method is used to check whether a custom action has been defined for the component by the parent component.

```html
<template tag-name="parent-comp">
  <child-comp custom-check="{{action('parentCompAction')}}">
  </child-comp>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class ParentComp extends Component {
  static actions() {
    test: function () {
      this.setData("clicked", true);
      this.getData("order").push("test");
      }
    }
  };
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class ChildComp extends Component {
    init : function(){
      //checking whether the action is passed to the component.
      var actionPresent = this.hasAction("custom-check");
      //if the action is present , we can throwEvent.
      if(actionPresent){
        this.throwEvent("custom-check");
      }

    }
  };
```
throwEvent Inherited
Params	:	[ String Hyphenated actionName ]
Returns	:	N/A
Desc	:	This method triggers the custom action.

Custom events help you to carry out any functionality of your choice to the custom elements. Custom events are usually defined with a hyphen in it. For example, onClose is defined as on-close. While using in a template the camel case must be represented as hyphen values.

```html
<template tag-name="blog-post">
    <span> {{title}} </span>
    <span onclick="{{action('editBlog',id, content)}}"> Edit </span>
    <span> {{content}} </span>
    <lyte-menu on-close="{{action('onMenuClose')}}"> </lyte-menu>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
      id : prop( "string" , { "default" : "1233" }),
      title : prop( "string" , { "default" : "Blog title" }),
      content : prop( "string" , { "default" : "Blog Content" })
    }
  }
  static actions() {
    return {
      onMenuClose : function(){
        return false; // will stop onClose event bubbling
      }
    }
  }
}
export {BlogPost};
```

In the above code, lyte-menu being the child component, calls the on-close(custom event) and the parent component(blog-post) handles it.

Let's check how to throw a custom event (onClose) from lyte-menu component

```html
<template tag-name="lyte-menu">
   <ul>
     <template lyte-for="{{menuItems}} as item index">
       <li onclick="{{action("closeMenu")}}">
       "{{menuItems}}"
       </li>
     </template>
   </ul>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class LyteMenu extends Component {
  static actions() {
    return {
      closeMenu : function() {
        this.throwEvent( "on-close" ); // Throws onClose event
        return false;
      }
    }
  }
}
export {LyteMenu};
```

It is not mandated to explicitly specify listeners for custom events. If the parent contains onClose action and if the event is not stopped explicitly the same gets invoked.

```html
<template tag-name="blog-Post">
    <span> {{title}} </span>
    <span onclick="{{action('editBlog',id, content)}}"> Edit </span>
    <span> {{content}} </span>
    <lyte-menu> </lyte-menu>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class BlogPost extends Component {
  data() {
    return {
      id : prop( "string" , { "default" : "1233" }),
      title : prop( "string" , { "default" : "Blog title" }),
      content : prop( "string" , { "default" : "Blog Content" })
    }
  }
  static actions() {
    return {
      onClose : function(){
        return false; // will stop onClose event bubbling
      }
    }
  }
}
export {BlogPost};
```


executeMethod

Have a look at the below code snippet.

```html
<template tag-name="user-component">
    <lyte-menu on-before-show={{method('onBeforeShow')}}> </lyte-menu>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class UserComponent extends Component {
    static methods() {
        return {
            "onBeforeShow" : function(){
                console.log( this );
            }
        }
    }
}
export {UserComponent};
```
```html
<template tag-name="lyte-menu">
    <ul>
     <template lyte-for="{{menuItems}} as menuItem index"
             <li> {{menuItem}} </li>
         </template>
    </ul>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class LyteMenu extends Component {
  init() {
     var retValue = this.executeMethod( "onBeforeShow" );
     if(retValue) {
       // Do something
     } else {
       // Do something else
     }
  }
}
export {LyteMenu};
```

Here the method 'onBeforeShow' is passed from the parent component(UserComp) to the child component(lyte-menu). So that the child component can execute the method via executeMethod api. This method will be executed in parent component's context.

In short, The method that is been passed from the parent component to the child component is executed with execute method.

---

### api - component-element

Component Element - API

Component Element refers to the actual HTML Element which gets rendered when we render a component. The Component Element will be rendered with the tagName as that of the component name.

The API's present here will be useful when we want to set methods / data in a component from JS outside of the Component's JS file.

Properties
component Inherited

This property is used to get Component Instance from the Component Element.

```javascript
var componentElement = document.getElementsByTagName( "some-component" )[0];
var componentInstance = componentElement.component;
```
data 

This property contains the data associated with the component.

```javascript
var someDataVal = this.data.someDataVal;
```
Methods
getData Inherited
Params	:	String dataPath
Returns	:	value
Desc	:	The method is used to retrieve a value of a data from Component
```javascript
// someVal is a data defined in the "data" block of the Component.
var someDataVal = this.getData( "someVal" );
// retrieving nested data
var someDeepData = this.getData( "someVal.module.module_name" );
```

As explained in the code, you can also retrieve nested data using "getData".

getMethods Inherited
Params	:	String methodName (Optional)
Returns	:	Object methodList / Function method
Desc	:	This method is used to retrieve the methods present in the Component

This method is used to retrieve a single method / list of all methods associated with the component.

```javascript
// Retrieving a single method.
var onBeforeCloseMethod = this.getMethods( "onBeforeClose" );
// Retrieving all methods
var allMethods = this.getMethods();
```
setData Inherited
Params	:	[ String key, *anyDataType value ] / Object multipleSetData
Returns	:	N/A
Desc	:	This method is used to set value in the Component.

This method is used set single / multiple data in the component.

```javascript
// Setting a direct data
this.setData( "module" , { "module_name" : "Leads" });
// Setting a deeply nested data
this.setData( "module.module_name" , "Leads" );
// Setting multiple data
this.setData({ "page" : "1" , "per_page" : "30" });
```
setMethods Inherited
Params	:	[ String methodName, Function method ] / Object multipleMethods
Returns	:	
Desc	:	This method is used to set method in the Component

This method is used to set either a single method / multiple methods in a component.

```javascript
// Setting a single method
this.setMethods( "onBeforeClose" , function(){
  // some functionality
});
// Setting multiple methods
this.setData({
  "onBeforeClose" : function(){
    // some functionality
  },
  "onBeforeOpen" : function(){
    // some functionality
  }
});
```
hasAction Inherited
Params	:	[ String actionName ]
Returns	:	Boolean
Desc	:	This method is used to check whether the action is present in the component

This method is used to check whether a custom action has been defined for the component by the parent component.

```html
<template tag-name="parent-comp">
  <child-comp custom-check="{{action('parentCompAction')}}">
  </child-comp>
</template>
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class ParentComp extends Component {
  static actions() {
    return {
      parentCompAction : function(){
        debugger;
      }
    }
  }}
export {ParentComp};
```
```javascript
import { prop } from "@slyte/core";
import { Component } from "@slyte/component";
class ChildComp extends Component {
init(){
      //checking whether the action is passed to the component.
      var actionPresent = this.hasAction("custom-check");
      //if the action is present , we can throwEvent.
      if(actionPresent){
        this.throwEvent("custom-check");
      }
  }
}
export {ChildComp};
```

---

### api - slyte_data

@slyte/data

@slyte/data is the package exposed by the slyte framework. Following are the classes that are exported from this package.

Class
db

Base db class for the app can be created by extending db class exported from @slyte/data.

```javascript
import { db } from "@slyte/data";
class CrmDb extends db{
}
export { crmDb };
```
RESTConnector

A connector class can be created by extending RESTConnector class.

```javascript
import { RESTConnector } from "@slyte/data";
class UserConnector extends RESTConnector{
}
export { UserConnector };
```
RESTSerializer

A Serializer class can be created by extending RESTSerializer class.

```javascript
import { RESTSerializer } from "@slyte/data";
class UserSerializer extends RESTSerializer{
}
export { UserSerializer };
```
GraphqlConnector

A connector class can be created by extending RESTConnector class.

```javascript
import { GraphqlConnector } from "@slyte/data";
class UserConnector extends GraphqlConnector{
}
export { UserConnector };
```
GraphqlSerializer

A Serializer class can be created by extending RESTSerializer class.

```javascript
import { GraphqlSerializer } from "@slyte/data";
class UserSerializer extends GraphqlSerializer{
}
export { UserSerializer };
```

---

### api - db

db - API
Methods
getSchema
Params	:	String name
Returns	:	Schema
Desc	:	The method is used to returns a schema
```javascript
var userSchema = this.$db.getSchema( "user" );
```
addField
Params	:	{ schema: Schema, key: Stering, type: String, prop: Object, options: Object, skipValidation: Boolean, deserialize: Boolean }
Returns	:	N/A
Desc	:	This is used to add a field dynamically to a schema.
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.addField({ schema:User, key:"mobile", type:"number", options:{ mandatory : true }});
//or
this.$db.addField({ schema:User, key:"mobile", prop: Lyte.attr( "number" , { mandatory : true })});
```
newEntity
Params	:	{ schema: Schema, data: Object, skipValidation:Boolean }
Returns	:	Entity
Desc	:	The method is used to create a Entity

It is used to create a entity with the given data object. It also has an option to skipValidation while creating a entity.

Note: Empty data object can also be passed.

```
import { User } from "../../data-store/schemas/user";
this.$db.newEntity({ schema:User, data:{ name : "john" , email : "john@something.com" } });
this.$db.newEntity({ schema:User, data:{}, skipValidation:true });
```
getAll
Params	:	{ schema: Schema, qP: Object, cacheQuery: Boolean, cacheData: Boolean, customData: AnyDataType }
Returns	:	Promise
Desc	:	The method is used to make a GET request to get all entities of the schema

This is used to get all the data for a schema from the server.

Note: Data can be cached based on the queryParams if cacheQuery is true .
if cacheData is false, data will not be stored in the this.$db.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getAll({ schema:User, qP:{ type : "admin" }}).then( function(){
  // Success Callback
},function(){
  // Failure Callback
});
```
getEntity
Params	:	{ schema: Schema, pK: String/Number/Object, qP: Object, cacheQuery: Boolean, cacheData: Boolean, customData: AnyDataType }
Returns	:	Promise
Desc	:	The method is used to make a GET request to get an entity of the schema

This is used to get data for a specifc key of model from the server.

Note: Data can be cached based on the queryParams if cacheQuery is true .
if cacheData is false, data will not be stored in the data store.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getEntity({ schema:User, pK:"1", qP:{ type : "admin" }}).then( function(){
  // Success Callback
},function(){
  // Failure Callback
});
```
cache.getAll
Params	:	{ schema: Schema }
Returns	:	Array
Desc	:	The method is used to return the all the entity present in the specific schema
cache.getEntity
Params	:	{ schema: Schema, pK: String/Number/Object }
Returns	:	Entity
Desc	:	The method is used to return a specific entity of the schema
deleteEntity
Params	:	{ schema: Schema, pK: String/Number/Object }
Returns	:	N/A
Desc	:	The method is used to delete a specific entity of the schema
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.deleteEntity({schema:User, pK:"1"});
```
deleteMany
Params	:	{ schema: Schema, pK: [String/Number/Object] }
Returns	:	N/A
Desc	:	The method is used to delete multiple entity of the schema
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.deleteMany({schema:User, pK:["1","2"]});
```
dropAll
Params	:	{ schema: Schema, data: [AnyData] , inherit: Boolean , idbPersist: Boolean }
Returns	:	N/A
Desc	:	The method is used to remove all / given entity from the schema
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.cache.dropAll({schema:User});
```
dropEntity
Params	:	{ schema: Schema, pK: [String/Number/Object] , inherit: Boolean , idbPersist: Boolean }
Returns	:	N/A
Desc	:	The method is used to remove a specific entity of the schema
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.dropEntity({ schema:User , pK:"1" });
```
create
Params	:	{ schema: Schema, data: Object, customData: AnyDataType, qP: Object, toSendData: Array }
Returns	:	Promise
Desc	:	The method is used to make POST request with all newly created records of the model
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.create({ schema:User }).then( function(){
  // Success callback
},function(){
  // Failure Callback
});
```
update
Params	:	{ schema: Schema, data: Object, customData: AnyDataType, qP: Object, toSendData: Array }
Returns	:	Promise
Desc	:	The method is used to make PATCH request with all updated records of the model
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.update({ schema:User }).then( function(){
  // Success callback
},function(){
  // Failure Callback
});
```
delete
Params	:	{ schema: Schema, data: Object, customData: AnyDataType, qP: Object, toSendData: Array }
Returns	:	Promise
Desc	:	The method is used to make DELETE request with all deleted records of the model
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.delete({ schema:User }).then( function(){
  // Success callback
},function(){
  // Failure Callback
});
```
revert
Params	:	{ schema: Schema }
Returns	:	N/A
Desc	:	The method is used to revert the changes done to all the entity of the schema to its initial value
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.revert({ schema:User });
```
triggerAction
Params	:	{ schema: Schema, action: String, customData: AnyDataType, qp: Object, method: String, data: AnyDataType }
Returns	:	Promise
Desc	:	The method is used to send a action request for the model, if defined
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.triggerAction({ schema:User, action:"sendMail" }).then( function(){
  // Success Callback
},function(){
  // Failure Callback
});
```
setErrorMessages
Params	:	Object errorObject
Returns	:	N/A
Desc	:	The method is used to set error message

This method is used to set error message with code. Pass an object with key as error code and value as error message.

```javascript
this.$db.setErrorMessages({ "ERR100" : "Some Error Message" });
```
push
Params	:	{ schema: Schema, data: Array/Object, deserialize: Boolean }
Returns	:	N/A
Desc	:	The method is used to add data to db manually

This is used to insert persisted data into schema dynamically. Either an object data or an array of object data can be passed.

Note: If serializer callbacks need to be called, give the third param as true.

```javascript
import { User } from "../../data-store/schemas/user";
this.$db.push({schema:User, data:{ id : "1" , name : "John" }});
this.$db.push({schema:User, data:[{ id : "1" , name : "John" } , { id : '2' , name : "Max" }]});
```
clearCachedQuery
Params	:	{ schema: Schema, pK: String/Number, qp: Object }
Returns	:	N/A
Desc	:	The method is used to remove cached data for a query
```javascript
import { User } from "../../data-store/schemas/user";                                                                                                                                                                                                      ~
//Consider the two findAll calls below
this.$db.getAll({ schema:User, qP:{type:"active"}, cacheQuery:true });
this.$db.getAll({ schema:User, qP:{type:"inactive"}, cacheQuery:true });
//Once the response is received, the above request will be cached. Now we can clear the cache using clearCachedQuery
this.$db.clearCachedQuery({ schema:User }); //Will remove all query caches in user model
// [ OR ]
this.$db.clearCachedQuery({ schema:User, qP:{type:"active"}}); // will remove the particular query cache
```
```javascript
import { User } from "../../data-store/schemas/user";                                                                                                                                                                                                      ~
//Consider the two findAll calls below
this.$db.getEntity({ schema:User, pK:"1", qP:{type:"active"}, cacheQuery:true });
this.$db.getEntity({ schema:User, pK:"1", qP:{type:"inactive"}, cacheQuery:true });
//Once the response is received, the above request will be cached. Now we can clear the cache using clearCachedQuery
this.$db.clearCachedQuery({ schema:User, pK:"1" }); //Will remove all query caches in user model
// [ OR ]
this.$db.clearCachedQuery({ schema:User, pK:"1", qP:{type:"active"}}); // will remove the particular query cache
```
batch
Params	:	Function multipleRequests
Returns	:	Promise
Desc	:	This is used to send batch multiple request in a single request with the request information in the request data
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.batch( function(){
  var entity = this.$db.cache.getEntity({schema:User, "1"});
  entity.$.set( "name" , "Mike" );
  entity.$.save();   // PATCH
  var entity2 = this.$db.cache.getEntity({schema:User, "2"});
  entity2.$.delete();
  entity2.$.save();     //DELETE
}).then(function(){
  // Success callback
},function(){
  // Failure callback
});
```
triggerUpdate
Params	:	{ schema: Schema, pK: String/Number, keys: Array, qP: Object, customData: AnyDataType}
Returns	:	Promise
Desc	:	This is used to manually trigger a manual update even if the data is not dirty.
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.triggerUpdate({schema:User, pK: "1", keys: [ "name" , "phone" ]})then( function(){
  // Success Callback
},function(){
  // Failure Callback
});
```
getPrimaryKey
Params	:	{ schema: Schema }
Returns	:	String primaryKey
Desc	:	This is used to return the primary key defined in the schema
```javascript
import { User } from "../../data-store/schemas/user";
this.$db.getPrimaryKey({schema:User});
```

---

### api - entity

Entity - API

An entity is an object(instance of a schema), which holds the schema properties data. The datastore's properties and methods are defined under entity.$. Since entity holds all the properties of a schema, all the entity properties and methods are defined under entity.$, in order to avoid polluting the entity namespace.

Properties
isModified

If true, it determines, that there are changes being made to the entity.

isNew

It will be true, for a newly created entity. When it is successfully saved, it will be made false.

isDeleted

It will be true, for a deleted entity.

isError

It will be true, when there is any validation errors in the entity.

Methods
get
Params	:	String attr
Returns	:	Attribue value of the record
Desc	:	This method is used to get the attribute value of an entity

The following code snippet is an example of 'get' method. And this method accepts only the string data type as its parameter. While implementing this method, you get the attribute value of an entity.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.get( "name" );
```
set
Params	:	< String attr, AnyDataType Value > [ OR ] < Object dataObject >
Returns	:	Record
Desc	:	This method is used to set the attribute value of an entity

This method is used to set the attribute value of a record. You can also set values for multiple attributes of an record. This method accepts any datatype.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set( "name" , "john" );
entity.$.set({ "name" : "john" , "email" : "john@something.com" });
```
getDirtyProps
Params	:	N/A
Returns	:	Array
Desc	:	This method is used to return all modified attribute names in a array

This method helps you out to get the modified attribute name in an array.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.getDirtyProps();
```
revert
Params	:	String stateName
Returns	:	N/A
Desc	:	This method is used to revert all the modified attributes values to the previous persisted state data

This is used to "revert" the properties of the schema to its initial data.

Note: If a newly created entity is reverted, it will be removed from store.
If a deleted entity is reverted, it will be added back to the schema data.


```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.revert();
// [ OR ]
entity.$.set("name", "test1");
entity.$.saveState("test");
entity.$.set("name", "test2");
entity.$.revert("test");
```
revertProps
Params	:	[ or ]
Returns	:	N/A
Desc	:	This method is used to revert the given attributes values to its initial values

This is used to revert the given attributes values to its initial values. Multiple properties can also be reverted.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.revertProps( "name" );
//[ OR ]
entity.$.revertProps([ "name" , "email" ]);
```
delete
Params	:	Boolean delayPersistence
Returns	:	N/A
Desc	:	This method is used to delete the entity

This is used to delete an entity from its schema.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.delete ( ) ;
//[ OR ]
entity.$.delete ( true ) ;   //with delayPersistence as true
```
destroy
Params	:	AnyDataType customData, Object queryParams, Boolean delayPersistence
Returns	:	Promise
Desc	:	This method is used to delete the entity and make a DELETE request to the server

This method not only deletes the entity, but also makes a delete request to the server.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.destroy();
//[ OR ]
entity.$.destroy({},{},true); //with delayPersistence as true
```
toJSON
Params	:	N/A
Returns	:	Object
Desc	:	This method is returns a JSON format of the entity.

This method comes handy when you are in need to get a JSON format of an entity.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.toJSON();
```
save
Params	:	AnyDataType customData, Object queryParams, Object options
Returns	:	Promise
Desc	:	This method is used to make a request to the server depending on the state of the entity. In the options object, if validateOnSave key is passed as true, it will be validated before save.

Depends on the state of the entity(isNew, isModified, isDeleted), respective request(POST, PATCH, DELETE) will be sent to the server.

validateOnSave - Except for skip validation
case, validation will not happen on save of the entity. It can be validated on save, by passing true to validateOnSave to save.
skipValidation - Passing true to this option will skip the validation on saving the entity
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.save();
//[ or ]entity.$.save ( undefined, undefined, { validateOnSave : true}) ; //By default, entity will be validated, if it is created with skip validation . For other cases, you can pass this option on entity's save.
```
triggerAction
Params	:	String actionName, AnyDataType customData, Object queryParams, String method, AnyDataType data
Returns	:	Promise
Desc	:	This method is used to make a action request for the entity to the server

With this method, you can make an action request for an entity, to the server.

```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.triggerAction( "sendMail" );
```
isDirty
Params	:	N/A
Returns	:	True [ or ] Array of modified relations
Desc	:	This method is used to find if the entity is dirty (also its related data)
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.isDirty();
```
undo
Params	:	String attribute / Array attributes
Returns	:	N/A
Desc	:	This method is used to undo the change made to the entity
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.set("name", "test1");
entity.$.undo()
// OR
entity.$.set("phone", 123123);
entity.$.set("mail", "abc@gmail.com");
entity.$.undo("phone");
// OR
entity.$.undo(["phone", "mail"]);
```
redo
Params	:	String attribute / Array attributes
Returns	:	N/A
Desc	:	This method is used to redo the change made to the entity
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.redo();
// OR
entity.$.redo("phone");
// OR
entity.$.redo(["name", "phone"])
```
validate
Params	:	Array attr(optional)
Returns	:	N/A
Desc	:	This method is used to validate an entity
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.validate();
// or
entity.$.validate([ "name" , "email" ]);
```
saveState
Params	:	String stateName
Returns	:	N/A
Desc	:	This method is used to save the state of the entity which can used to rollback
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.saveState();
// OR
entity.$.saveState("test");
```
hasSavedState
Params	:	String state
Returns	:	Boolean
Desc	:	This method return true, if the passed state is still present is saved states of the entity. It returns false, if not present in it.
```javascript
import { User } from "../../data-store/schemas/user";
var entity = this.$db.cache.getEntity({schema:User, pK:"1"});
entity.$.hasSavedState("id");
//return true/false
```

---

### api - serializer

RESTSerializer - API
Properties
initHasManyRelation

It is a property the can be defined in serializer, which will init all the hasMany relation with an empty array([]). Default value of this property is false.

arguments

You can pass the required arguments inside the object notation of the callback. Below is the list of arguments along with its properties.

Properties and its details
type - type of method, which triggered the request( possible values - get / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / triggerAction )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object

If just one property is required for a callback, it can be destructured like below

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends RESTSerializer{
	normalizePayload({payLoad}){
		return payLoad;
	}
}
export { UserSerializer };
```
Callbacks
Attribute details
modelName - Model name of the requested util
type - Type of the util which initiated the request ( possible values - findAll / findRecord / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / triggerAction )
queryParams - queryParams that is passed / set in the request
payLoad - response payLoad that is recevied
pkValue - primary key value of the particular record
actionName - Action name of the particular action which is triggered
customData - Data that can be passed from a specific util to adapter / serializer callbacks
headers - Request headers
status - Response status
record / records - Record instance / Array of records
snapshot - Record instance
normalizePayload
To Return	:	Object payload
Desc	:	The callback can be used to modify the response data to how the data expects

In this callback, response payLoad will be received . This will be a single point for customizing response data as a whole. It should return the modified payLoad.

opts : ( Both the options are passed in get )

cacheQuery - cache the data based on the queryParams
cacheData - cache the data in the store

```javascript
normalizePayload({schemaName, payLoad}){
	payLoad[ schemaName ].sort( function(a,b){
		return a.id > b.id
	})
	return payLoad;
}
```
serializePayload
To Return	:	Object payload
Desc	:	The callback can be used to modify the request payload

To change the format of the data that is sent to the server, you can use the serializePayload() hook.
Let's say that we have this JSON API response:

But the server expects data in this format:

```javascript
{
	"data" : {
		"id" : "1",
		"type" : "product",
		"attributes" : {
			"name" : "My Product",
			"cost" : {
			"amount" : 100,
			"currency" : "SEK"
			}
		}
	}
}
```

Here's how you can change the data:

```javascript
serializePayload({data}){
	if( data.attributes.amount ){
		var obj = {}
		obj.amount = data.attributes.amount;
		obj.currency = data.attributes.currency;
		data.attributes.cost = obj;
		delete data.attributes.amount;
		delete data.attributes.currency;
	}
	return data;
}
```
normalizeKey
To Return	:	String payloadKey
Desc	:	Used to determine which key in the response is the actual payload data.

There may be cases, when the response is received with payload/schema data in a different key other than the schemaName key which data store expects. In those cases, the key name which contains the payload/schema related data should be returned.

```javascript
normalizeKey(){
	return "data";
}
```
serializeKey
To Return	:	String key
Desc	:	Modifies the base key of the request data. By default, the base key will be modelName. If an empty serializeKey is returned, the data will be passed as it is.

By default the entire response object will be surrounded with the schema name (as per REST API standard). Say for example any request sent from user schema will have "user" as the base key. If your server differs from this standard, we can change it in this callback.
The default request format for user schema will be:

```javascript
{
	"user" : {
		"id" : "1",
		"name" : "test",
		"mail" : "test@test.com",
	}
}
```
```javascript
serializeKey(){
	return "data";
}
```

If you change the key the request body will be:

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "test",
		"mail" : "test@test.com",
	}
}
```
getMeta
To Return	:	AnyDataType
Desc	:	Any additional meta information from the server can be extracted here.

Data returned from this callback will be treated as the meta for the request and will be available in payLoad in meta key.

Considering the payload below, meta data is not in the key as the db expects. Correct Meta data can be returned from getMeta callback.

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "Nick",
		"info" : {
			count : 100,
		}
	}
}
```

It will be available in the payLoad as

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "Nick",
	},
	"meta" : {
		count : 100,
	}
}
```
serializeEntity
To Return	:	Object payLoad
Desc	:	Called when specific model's record is sent to the serializer (either saved directly or via any relations).

This callback will be called before a entity's payload is sent to the server, either directly or as a relation

urlObj:

url - url of the request
type - type of the db's util
qP - queryParams
method - method of the request
headers - headers of the request
withCredentials - withCredentials option

```javascript
serializeEntity({entityData}){
	return entityData;
}
```
normalizeEntity
To Return	:	Object payLoad
Desc	:	Called when specific model's data is received from the server (either received directly or via any relations).

This callback will be called after response is received from the server, either directly or as a relation

urlObj:

url - url of the request
type - type of the db's util
qP - queryParams
method - method of the request
headers - headers of the request
withCredentials - withCredentials option

```javascript
normalizeEntity({entityPayload}){
	return entityPayload;
}
```

---

### api - connector

RESTConnector - API
Properties
namespace

This property can be used to prefix request url.

actionNamespace

This property can be used to prefix action requests.By default, it will be "/action"

host

By default the adapter will add the current domain to the request URL. If you would like to specify a new domain you can do so in this property.

withCredentials

It is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests. By default this is false

delayPersistence

It is a boolean property in connector, which will delayPersistence for delete operation (entity will only be removed when it is persisted).

arguments

You can pass the required arguments inside the object notation of the callback. Below is the list of arguments along with its properties.

Properties and its details
type - type of method, which triggered the request( possible values - get / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / triggerAction )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object

If just one property is required for a callback, it can be destructured like below

```javascript
import { ApplicationSerializer } from "./application";
 class UserConnector extends RESTConnector{
 normalizePayload({payLoad}){
 return payLoad;
 }
}
export { UserConnector };
```
Callbacks
requestURL
To Return	:	String url
Desc	:	The callback can be used to modify url or add queryParams for a specific request

This callback is used to determine / modify the request URL. If required we can change the url in this callback.

```javascript
requestURL({ schemaName, type, url }){
  if( modelName == "user" && type == "FINDALL" && queryParams.email ){
    queryParams.default = true;
  }
  return url;
}
```
requestMethod
To Return	:	String method
Desc	:	The callback can be used to modify the request method

This callback is used to determine/modify the method type of request to be sent. To fetch data, the db will originate GET request, for create db will initiate POST request, for update PATCH request & to delete DELETE request.(as REST API Standard)
If needed it can be changed through this callback

```javascript
requestMethod({ method }){
  if( method == "PATCH" ){
    return "PUT";
  }
  return method;
}
```
requestHeaders
To Return	:	Object headers
Desc	:	The callback can be used to add headers to the request

This hook can be used to set headers to the request.

```javascript
requestHeaders(){
  return {
    'API_KEY' : 'secret key',
    'ANOTHER_HEADER' : 'Some header value'
  }
}
```
refetchEntity
To Return	:	true/false
Desc	:	Used to determine if the store should reload the record.If true, the record will be fetched from the server.

This callback is used to determine if the datastore should refetch the entity from the server when it is requested by db.get
If this method returns,

true , the db will re-fetch the entity from the server.
false , the db will resolve immediately using the cached entity.
```javascript
refetchEntity({ cachedData, queryParams }){
		                                if( cachedData.isUptoDate ){
		                                return false;
		                                }
		                                return true ;
		                                }
```
refetchAll
To Return	:	true/false
Desc	:	Used by the store to determine if the store should reload all records. If true, the record will be fetched from the server.

This method is to determine if the db should refetch all entity from the server, when it is requested by db.get
If this method returns,

true , the db will re-fetch all entity from the server.
false , the store will resolve immediately using the cached data.
```javascript
refetchAll({ cachedData }){
  if( cachedData.length == 100 ){
    return false;
  }
  return true;
}
```
processRequest
To Return	:	Promise
Desc	:	A Callback to replace XHR(request) with user-defined behaviours. It should return a promise

A callback to replace XHR(request) with user defined behaviours. It should return a promise.

```javascript
processRequest({ type, schemaName, payLoad, cachedData, customData, queryParams, key, url, action, method, headers }){
  var prm;
  if( type === "findAll" ){
    prm = new Promise( function( resolve , reject ){
      resolve( JSON.stringify({ todo : Object.keys( TODO ).map( function(k){ return TODO[k] })}))
    });
  } else {
    return undefined;
  }
  return prm; // Promise
}
```
parseResponse
To Return	:	Object payload or Promise
Desc	:	A Callback after receiving the response from api, with the respective request object as param. It should return the payLoad

A callback after the response from the api, with the respective request object as a param(xhrObj). It should return the payLoad

By default, Slyte datastore expects response code to be 2xx for success and 3xx or 4xx for failure. In case where the success or failure received in different response code, promise which can be resolved with success and rejected with failure.

```javascript
parseResponse({xhr, payLoad}){
    if( xhr.status == 400 ){
        alert( "Request failure" );
    }
    return payLoad; // payload
}
```
```javascript
parseResponse({xhr, payLoad}){
  return new Promise( function(resolve,reject){
    if( xhrObj.status == 200 ){
      resolve(payLoad);
    }
    else {
      reject(payLoad);
    }
  });
}
```
parseRequest
To Return	:	-
Desc	:	A Callback before a request is sent to server, with the respective request object as param.

A callback before the request is sent to the server, with the respective request object as a param(xhrObj).

```javascript
parseRequest({ type, schemaName, xhr, qP, key, customData}){
    // any processing if needed
}
```

---

### api - gqlconnector

GraphqlConnector - API
Properties
namespace

This property can be used to prefix request url.

host

By default the adapter will add the current domain to the request URL. If you would like to specify a new domain you can do so in this property.

withCredentials

It is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests. By default this is false

gql

It is an object, in which query / mutation string can be configured for a particular schema / connector

arguments

You can pass the required arguments inside the object notation of the callback. Below is the list of arguments along with its properties.

Properties and its details
type - type of method, which triggered the request( possible values - getAll / getEntity / createEntity / updateEntity / deleteEntity / create / update / delete / triggerAction )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object
gqlObj - An object with gql details like type, queryName/mutationName, query/mutation, variables

If just one property is required for a callback, it can be destructured like below

```javascript
import { ApplicationSerializer } from "./application";
 class UserConnector extends GraphqlConnector{
 normalizePayload({payLoad}){
 return payLoad;
 }
}
export { UserConnector };
```
Callbacks
buildGqlQuery
To Return	:	Object gqlObj
Desc	:	The callback can be used to configure / modify graphql query or variables for a specific request

```javascript
buildGqlQuery({type, gqlObj}){
  if(gqlObj.queryName == "user1"){
    gqlObj.variables = ["id"];
  }
  return gqlObj;
}
```
requestURL
To Return	:	String url
Desc	:	The callback can be used to modify url or add queryParams for a specific request

This callback is used to determine / modify the request URL. If required we can change the url in this callback.

```javascript
requestURL({ schemaName, type, url }){
  if( modelName == "user" && type == "FINDALL" && queryParams.email ){
    queryParams.default = true;
  }
  return url;
}
```
requestMethod
To Return	:	String method
Desc	:	The callback can be used to modify the request method

This callback is used to determine/modify the method type of request to be sent. To fetch data, the db will originate GET request, for create db will initiate POST request, for update PATCH request & to delete DELETE request.(as REST API Standard)
If needed it can be changed through this callback

```javascript
requestMethod({ method }){
  if( method == "PATCH" ){
    return "PUT";
  }
  return method;
}
```
requestHeaders
To Return	:	Object headers
Desc	:	The callback can be used to add headers to the request

This hook can be used to set headers to the request.

```javascript
requestHeaders(){
  return {
    'API_KEY' : 'secret key',
    'ANOTHER_HEADER' : 'Some header value'
  }
}
```
refetchEntity
To Return	:	true/false
Desc	:	Used to determine if the store should reload the record.If true, the record will be fetched from the server.

This callback is used to determine if the db should refetch the entity from the server when it is requested by db.get
If this method returns,

true , the db will re-fetch the entity from the server.
false , the db will resolve immediately using the cached entity.
```javascript
refetchEntity({ cachedData, queryParams }){
    if( cachedData.isUptoDate ){
        return false;
    }
    return true;
}
```
refetchAll
To Return	:	true/false
Desc	:	Used by the store to determine if the store should reload all records. If true, the record will be fetched from the server.

This method is to determine if the db should refetch all entity from the server, when it is requested by db.get
If this method returns,

true , the db will re-fetch all entity from the server.
false , the store will resolve immediately using the cached data.
```javascript
refetchAll({ cachedData }){
  if( cachedData.length == 100 ){
    return false;
  }
  return true;
}
```
processRequest
To Return	:	Promise
Desc	:	A Callback to replace XHR(request) with user-defined behaviours. It should return a promise

A callback to replace XHR(request) with user defined behaviours. It should return a promise.

```javascript
processRequest({ type, schemaName, payLoad, cachedData, customData, queryParams, key, url, action, method, headers }){
  var prm;
  if( type === "findAll" ){
    prm = new Promise( function( resolve , reject ){
      resolve( JSON.stringify({ todo : Object.keys( TODO ).map( function(k){ return TODO[k] })}))
    });
  } else {
    return undefined;
  }
  return prm; // Promise
}
```
parseResponse
To Return	:	Object payload or Promise
Desc	:	A Callback after receiving the response from api, with the respective request object as param. It should return the payLoad

A callback after the response from the api, with the respective request object as a param(xhrObj). It should return the payLoad

By default, lyte datastore expects response code to be 2xx for success and 3xx or 4xx for failure. In case where the success or failure received in different response code, promise which can be resolved with success and rejected with failure.

```javascript
parseResponse({xhr, payLoad}){
    if( xhr.status == 400 ){
        alert( "Request failure" );
    }
    return payLoad; // payload
}
```
```javascript
parseResponse({xhr, payLoad}){
  return new Promise( function(resolve,reject){
    if( xhrObj.status == 200 ){
      resolve(payLoad);
    }
    else {
      reject(payLoad);
    }
  });
}
```
parseRequest
To Return	:	-
Desc	:	A Callback before a request is sent to server, with the respective request object as param.

A callback before the request is sent to the server, with the respective request object as a param(xhrObj).

```javascript
parseRequest({ type, schemaName, xhr, qP, key, customData}){
    // any processing if needed
}
```

---

### api - gqlserializer

GraphqlSerializer - API
arguments

You can pass the required arguments inside the object notation of the callback. Below is the list of arguments along with its properties.

Properties and its details
type - type of method, which triggered the request( possible values - getAll / getEntity / createEntity / updateEntity / deleteEntity / create / update / delete / triggerAction )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object
gqlObj - Graphql object with properties such as type, queryName/mutationName, query/Mutation. variables
selfGqlObj - Graphql object with properties such query and variables

If just one property is required for a callback, it can be destructured like below
```javascript
import { ApplicationSerializer } from "./application";
 class UserSerializer extends GraphqlSerializer{
 normalizePayload({payLoad}){
 return payLoad;
 }
}
export { UserSerializer };
```

Callbacks
Attribute details
modelName - Model name of the requested util
type - Type of the util which initiated the request ( possible values - findAll / findRecord / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / triggerAction )
queryParams - queryParams that is passed / set in the request
payLoad - response payLoad that is recevied
pkValue - primary key value of the particular record
actionName - Action name of the particular action which is triggered
customData - Data that can be passed from a specific util to adapter / serializer callbacks
headers - Request headers
status - Response status
record / records - Record instance / Array of records
snapshot - Record instance
serializeGqlQuery
To Return	:	Object gqlObj
Desc	:	The callback can be used to serialize the gql query that is being sent to server

The query which is sent to the server can be configured or customized in serializeGqlQuery. In serializeGqlQuery, entire query with its variables will be received as an argument in gqlObj, which can be modified if required and returned.

```javascript
serializeGqlQuery({type, gqlObj}){
	if(type !== "deleteEntity" || type !== "delete"){
	    gqlObj.variables={insert_Data:gqlObj.data}
	}
	else{
	    gqlObj.variables={delete_data:gqlObj.data}
	}
	return gqlObj;
}
```

Here, in this query gglObj in the callback which returns an object with the following keys,

type - Query or Mutation
query - query in object structure
mutation - query in object structure
variables - variables of query
queryType - default or namedQuery or query
queryName - query name (for namedQuery)
mutationType - default or namedMutation or customMutation
mutationName - mutation name (for namedMutation)
serializeSelfQuery
To Return	:	Array gqlQueryFields
Desc	:	The callback can be used to serialize any query either for the parent schema or relation schema

To serialize any query either for the parent schema or relation schema, serializeSelfQuery callback can be used. In simple terms, this can be used for the nested or the parent model.

```javascript
serializeSelfQuery({type, selfGqlObj}){
  return selfGqlObj.query;
}
```

Here, in this query selfGqlobj in the callback which returns an object with the following keys,

query - properties of that schema in array structure
variables - variables of the query as object
normalizePayload
To Return	:	Object payload
Desc	:	The callback can be used to modify the response data to how the data expects

In this callback, response payLoad will be received . This will be a single point for customizing response data as a whole. It should return the modified payLoad.

opts : ( Both the options are passed in get )

cacheQuery - cache the data based on the queryParams
cacheData - cache the data in the store

```javascript
normalizePayload({schemaName, payLoad}){
	payLoad[ schemaName ].sort( function(a,b){
		return a.id > b.id
	})
	return payLoad;
}
```
serializePayload
To Return	:	Object payload
Desc	:	The callback can be used to add headers to the request

To change the format of the data that is sent to the server, you can use the serializePayload() hook.
Let's say that we have this JSON API response:

But the server expects data in this format:

```javascript
{
	"data" : {
		"id" : "1",
		"type" : "product",
		"attributes" : {
			"name" : "My Product",
			"cost" : {
			"amount" : 100,
			"currency" : "SEK"
			}
		}
	}
}
```

Here's how you can change the data:

```javascript
serializePayload({payLoad}){
	if( payLoad.data.attributes.amount ){
		var obj = {}
		obj.amount = payLoad.data.attributes.amount;
		obj.currency = payLoad.data.attributes.currency;
		payLoad.data.attributes.cost = obj;
		delete payLoad.data.attributes.amount;
		delete payLoad.data.attributes.currency;
	}
	return payLoad;
}
```
normalizeKey
To Return	:	String payloadKey
Desc	:	Used to determine which key in the response is the actual payload data.

There may be cases, when the response is received with payload/schema data in a different key other than the schemaName key which data store expects. In those cases, the key name which contains the payload/schema related data should be returned.

```javascript
normalizeKey(){
	return "data";
}
```
serializeKey
To Return	:	String key
Desc	:	Modifies the base key of the request data. By default, the base key will be modelName. If an empty serializeKey is returned, the data will be passed as it is.

By default the entire response object will be surrounded with the schema name (as per REST API standard). Say for example any request sent from user schema will have "user" as the base key. If your server differs from this standard, we can change it in this callback.
The default request format for user schema will be:

```javascript
{
	"user" : {
		"id" : "1",
		"name" : "test",
		"mail" : "test@test.com",
	}
}
```
```javascript
serializeKey(){
	return "data";
}
```

If you change the key the request body will be:

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "test",
		"mail" : "test@test.com",
	}
}
```
getMeta
To Return	:	AnyDataType
Desc	:	Any additional meta information from the server can be extracted here.

Data returned from this callback will be treated as the meta for the request and will be available in payLoad in meta key.

Considering the payload below, meta data is not in the key as the db expects. Correct Meta data can be returned from getMeta callback.

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "Nick",
		"info" : {
			count : 100,
		}
	}
}
```

It will be available in the payLoad as

```javascript
{
	"data" : {
		"id" : "1",
		"name" : "Nick",
	},
	"meta" : {
		count : 100,
	}
}
```
serializeEntity
To Return	:	Object payLoad
Desc	:	Called when specific model's record is sent to the serializer (either saved directly or via any relations).

This callback will be called before a entity's payload is sent to the server, either directly or as a relation

urlObj:

url - url of the request
type - type of the db's util
qP - queryParams
method - method of the request
headers - headers of the request
withCredentials - withCredentials option

```javascript
serializeEntity({entityData}){
	return entityPayload;
}
```
normalizeEntity
To Return	:	Object payLoad
Desc	:	Called when specific model's data is received from the server (either received directly or via any relations).

This callback will be called after response is received from the server, either directly or as a relation

urlObj:

url - url of the request
type - type of the db's util
qP - queryParams
method - method of the request
headers - headers of the request
withCredentials - withCredentials option

```javascript
normalizeEntity({entityPayload}){
	return entityPayload;
}
```

---

### api - security

Security - API

Before using this please refer the link Client Side Sanitizing for Custom Configuration Flags for creating custom sanitizer and only Custom Configuration Flags are allowed to be given in sanitizer.

MethodsforSanitization
createSanitizer
Param	:	Object Configuration
Returns	:	Instance
Desc	:	The method is used to create new sanitizer instance using Custom Configuration Flags
```html
<template tag-name="blog-Post">
		<span> {{unescape(content_with_style_tag,undefined,instance_style.obj)}} </span>
		<span> {{unescape(content_with_onevents,undefined,instance_onevents.obj)}} </span>
		<span> {{unescape(content_with_src,undefined,instance_src.obj)}} </span>
</template>
```
```Javascript
import { Component, Sanitizer } from "@slyte/component";
class BlogPost extends Component{
	data(){
		return {
			content_with_style_tag : prop( "string" , { default : "<head> <style>p{color:red} </style> </head><p>this is ptag </p><p style='color:green'>this is ptag with inline style </p> <my-comp>this is new custom tag </my-comp>" });
			content_with_onevents : prop( "string" , { default : "<div onclick = 'myfn()'> this is div  </div>" });
			content_with_src : prop( "string" , { default : "<lyte-comp> <p>this is lyte component</p>  <img class="ZCrmImage" src="https://cdn.mos.cms.futurecdn.net/i26qpaxZhVC28XRTJWafQS.jpeg" width="100%" height="100%"/> </lyte-comp>" });
			instance_style : prop( "object" , { default : { "obj" : {} }});
			instance_onevents : prop( "object" , { default : { "obj" : {} }});
			instance_src : prop( "object" , { default : { "obj" : {} }});
		}
	},
	init(){
		this.setData( "instance_style.obj" , new Sanitizer ( { GLOBAL_TAGS : [ "my-comp" ] , "GLOBAL_ATTRIBUTES" : [ "some-attr" ] ,"ALLOWED_STYLE" : "ALL" ,"STYLE_VALIDATION" : false}));
		this.setData( "instance_onevents.obj" , new Sanitizer ( {"GLOBAL_ATTRIBUTES" : [ "onclick" ],'REMOVE_ONEVENTS':false}));
		this.setData( "instance_src.obj" , new Sanitizer ( { GLOBAL_TAGS : [ "lyte-comp" ] ,"ADD_URI_SAFE_ATTR" : [ "src" ] }));
	}
}
```

Note : Additional Object can also be passed as second param whereas it can support only GLOBAL_TAGS, GLOBAL_ATTRIBUTES, FORBID_TAGS and FORBID_ATTR configurations.

Note : If the html content contains lyte components, then you have to add the component's name in "GLOBAL_TAGS" whereas the attributes associated with component will be preserved .

Note : We have shown few sample configurations with custom sanitizer instance in the above example, such as preserving dom events, style and src attributes etc. Please check the security documentation for more custom configurations supported by sanitizer.

---

### api - connectors

sLyte is a light weight, fast and memory efficient client framework designed to develop web application efficiently and reliably, which focuses on three main layers - router, component and data. We do have a host of other libraries, tools and extensions which ease the app development making it faster to build apps using sLyte.

Git RepoRelease Notes Forum

---

### api - dataserializer

Customizing Serializer
Serializer

Serializer is a callback layer where the request and the response data can be modified and configured before being sent and received from the server. By default Data store supports RESTSerializer and GraphqlSerializer, which support REST and Graphql standards respectively.

Generate Using CLI

To generate a serializer using CLI, use the following command.

```javascript
lyte generate serializer user
```
Skeleton

On creating a serializer, you can find the class serializer. Have a look at the below code snippet to find out the available call backs. You can pass the required arguments based on your needs. Keep reading to understand the needs and importance of these callbacks..

```javascript
import { RESTSerializer } from "@slyte/data";
class UserSerializer extends RESTSerializer{
  normalizePayload({schemaName, type, payLoad, key, status, headers, queryParams, customData, opts }){
    return payLoad;
  }
  serializePayload({type , data ,cachedData, customData, schemaName, queryParams, actionName}){
    return data;
  }
  serializeKey({schemaName, type, customData, queryParams}){
  }
  getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  }
  normalizeKey({schemaName, type, key, queryParams, customData, opts}){
  }
  serializeEntity({entityData, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityData;
  }
  normalizeEntity({entityPayload, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityPayload;
  }
}
export { UserSerializer };
```
```javascript
import { GraphqlSerializer } from "@slyte/data";
class UserSerializer extends GraphqlSerializer{
  serializeGqlQuery({gqlObj}){
    return gqlObj
  }
  serializeSelfQuery({selfGqlObj}){
    return selfGqlObj;
  }
  normalizePayload({schemaName, type, payLoad, key, status, headers, queryParams, customData, opts }){
    return payLoad;
  }
  serializePayload({type , data ,cachedData, customData, schemaName, queryParams, actionName}){
    return data;
  }
  serializeKey({schemaName, type, customData, queryParams}){
  }
  getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  }
  normalizeKey({schemaName, type, key, queryParams, customData, opts}){
  }
  serializeEntity({entityData, cachedData, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityData;
  }
  normalizeEntity({entityPayload, schemaName, customData, url, type, queryParams, method, headers, withCredentials}){
    var urlObj = {url:url, type:type, qP:queryParams, method:method, headers, headers, withCredentials:withCredentials};
    return entityPayload;
  }
}
export { UserSerializer };
```
Adding to Schema

In the schema class, the serializer class can be added either in the static Serializer variable or can be returned in static Serializer method as below.

```javascript
import { Schema } from "@slyte/data";
import { UserSerializer } from "../serializers/user";
class User extends Schema{
  static Serializer = UserSerializer;
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
```javascript
import { Schema } from "@slyte/data";
import { UserSerializer } from "../serializers/user";
import { UserGqlSerializer } from "../serializers/gql/user";
class User extends Schema{
  static Serializer({type}){
    if(type == "updateEntity"){
      return UserGqlSerializer;
    }
    return UserSerializer;
  }
  props(){
    return {
      str: prop("string")
    }
  }
}
export { User };
```
Callback Arguments

As mentioned above, you can pass the required arguments inside the object notation of the callbacks. Below is list of arguments along with its properties.

Properties and its details
REST
Graphql
type - type of method, which triggered the request( possible values - get / update / updateRecord / create / createRecord / delete / deleteRecord / destroyRecord / action )
schemaName - name of the schema
queryParams - queryParams of the request
data - request data of the request
entityData - request data of a single entity
payLoad - response payLoad of the request
entityPayload - response payLoad of a single entity
opts - extra option of the method, which triggered the request
method - method of the request(GET/POST/PATCH/DELETE)
key - primaryKey value of the entity
host - url host
headers - headers of the request
customData - customData passed in the method
callback - callback name
cachedData - cached entities
actionName - name of the action defined in model
xhr - XMLHTTPRequest object

If just one property is required for a callback, it can be destructured like below

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return payLoad;
  }
}
export { UserSerializer };
```
Expected Response Structure

For all types of request, datastore will expect the response in a specific format. It should be an object which can have two keys, one with schemaName value as the key which has the payload data as value and other with meta key which has the meta information of the request.

[schemaName] : [Response data]
"meta" : [meta information]

Consider for the schema with name "user", following structure will be expected.

```javascript
{
        "user" : { } /  [  ] ,
        "meta" : Some meta information which can be of any type ( Optional )
}
```
Structuring a Serializer

Ideal way is to have an application serializer as the base serializer for the db. It is good to mention the same in the db. This should extend either RESTSerializer / GraphqlSerializer. All the schema specific connectors, should extend this application connector.

```javascript
import { Db, RESTConnector, RESTSerializer } from "@slyte/data";
class AppDb extends Db{
static Serializer = GraphQL;
}
export { AppDb };
```

Below is an example for RESTSerializer.

```javascript
import { RESTSerializer } from "@slyte/data";
class ApplicationSerializer extends RESTSerializer{
  normalizePayload({type, queryParams, payLoad}){
        return payLoad;
      }
}
export { ApplicationSerializer };
```
```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return payLoad;
  }
}
export { UserSerializer };
```
Usage
Modify the response - from server

Response received from the server, will be expected in some format by the data store. Check expected response structure before it is given to data store, if it is not in the format as the data store expects, then it can be modified in normalizePayload or normalizeEntity callbacks as per the needs.

First entire response will be received in normalizePayload callback. And you can use normalizeEntity callback to call each data entity object.

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizeEntity({schemaName, type, entityPayload, customData, opts}){
    entityPayload.fromServer = true;
    return entityPayload;
  }
  normalizePayload({schemaName, type, payLoad, key, xhr, headers, queryParams, customData, opts}){
    payLoad[ schemaName ].sort( function( a , b ){ return a.id > b.id })
    return payLoad;
  }
});
export { UserSerializer };
```
Modify the payload - to server

Before a request data is sent to server, serializeEntity callback will be called for each entity object that is being sent to server. Then the entire payload will be recevied in serialize callback, where the request serializePayload structure can be modified, if needed.

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  serializeEntity({schemaName, type, entityData, customData, opts}){
    return entityData;
  }
  serializePayload({schemaName, type, data, key, xhr, headers, queryParams, customData, opts}){
    return data;
  }
});
export { UserSerializer };
```
Determine the payLoad data key

If the schema data is received in some other key other than its schemaName key, then you can specify the key for which the schema data is received, in normalizeKey callback in the serializer.

```javascript
normalizeKey({schemaName , type , key , queryParams , customData, opts}){
  return "data";
}
```
Determine the metadata for the request

In simple terms, Metadata is some additional information about the request.
such pageno, perpage etc.,

Metadata can be returned for a request in the serializer callback getMeta .

```javascript
getMeta({payLoad, schemaName, type, queryParams, customData, opts}){
  return payLoad.meta;
}
```
Method for calling parent serializer callbacks

Using super, parent serializer callbacks can be called. Arguments can be called like below

```javascript
import { ApplicationSerializer } from "./application";
class UserSerializer extends ApplicationSerializer{
  normalizePayload({payLoad}){
    return super.normalizePayload(..arguments);
  }
}
export { UserSerializer };
```
Customizing GraphqSerializer
Configure / modify the base graphql query

The query which is sent to the server can be configured or customized in serializeGqlQuery. In serializeGqlQuery, entire query with its variables will be received as an argument in gqlObj, which can be modified if required and returned.

```javascript
serializeGqlQuery({type, gqlObj}){
  if(type !== "deleteEntity" || type !== "delete"){
      gqlObj.variables={insert_Data:gqlObj.data}
  }
  else{
      gqlObj.variables={delete_data:gqlObj.data}
  }
  return gqlObj;
}
```

Here, in this query gglObj and in its callback, an object gets returned with the following keys,

type - Query or Mutation
query - query in object structure
mutation - query in object structure
variables - variables of query
queryType - default or namedQuery or query
queryName - query name (for namedQuery)
mutationType - default or namedMutation or customMutation
mutationName - mutation name (for namedMutation)
Configure / modify any self graphql query

To serialize any query either for the parent schema or relation schema, serializeSelfQuery callback can be used. In simple terms, this can be used for the nested or the parent model.

Example: If we make a query for user(parent) and the profile as child, then for user, user serializer's serializeSelfQuery gets called and for profile, the profile serializer's serializeSelfQuery get called.

```javascript
serializeSelfQuery({type, selfGqlObj}){
  return selfGqlObj.query;
}
```

Here, in this query selfGqlobj and in its callback an object gets returned with the following keys,

query - properties of that schema in array structure
variables - variables of the query as object

Here, It returns the subfields(array) for the given call backs.

---

## services

### services - service-introduction

Services

Service in sLyte can be shared across the application. All you need to do is just define and declare it and the rest will be taken care of by sLyte itself. But what actually is a service? A service is a piece encapsulated code for which the instances get created and accessible in the particular 'this' context of any slyte module.

sLyte helps in instantiating the services unlike mixins and makes it usable across the entire application with the help of lookups.

Before diving into the lookups, let us first see how to create a service in sLyte.

Creating a Service

sLyte helps in instantiating the services and makes it usable across the entire application with the help of lookups. Before diving into the lookups, let us first see how to create a service in sLyte.

Service can be created by using the lyte generate command. Here is a syntax for creating a service named 'requestHandler'.

lyte generate service requestHandler

Let us consider an example

```javascript
import {Service} from "@slyte/core";
class RequestHandler extends Service {
	logRequest() {
	}
	onRequestError() {
	}
}
export default RequestHandler;
```

Here, you have created a service named "RequestHandler" which can be used across the application. Based on the requirements, the user-defined functions can be declared. Here, the user-defined functions logRequest() and onRequestError() are declared.

Looking up a Service

Now that you have created a service, you need to declare it in the places where you need to use it. To do so, sLyte has come up with lookups. In simple words, employ 'lookups' hooks to use the services.

Let us consider an example:

```javascript
import { AppComponentRegistry } from "../component";
import {RequestHandler} from "../services/request-handler";
class WelcomeComp extends ComponentRegistry{
	lookups() {
		return [RequestHandler];
	}
}
export default WelcomeComp;
```

The "lookups" hook specifies the list of services to be used in a particular module of sLyte, when it gets instantiated. In this example, you have included the RequestHandler Service in the lookups hook of the WelcomeComp. In this way, you are communicating to the framework that you need to use the mentioned service whenever the component is created.

Using a Service

After specifying the lookups, the appropriate instantiation of the mentioned services takes place. In our example, whenever a WelcomeComp component is being created, the lookups, check for the service named "RequestHandler" and then instantiate it accordingly and make it available in the context of the component for using the services.

```javascript
import { AppComponentRegistry } from "../component";
import {RequestHandler} from "../services/request-handler";
class WelcomeComp extends AppComponentRegistry.Component {
	lookups() {
		return [RequestHandler];
	}
	static actions() {
		return {
			"errorHandling" : function() {
				this.$requestHandler.onRequestError();
			}
		}
	}
}
export default WelcomeComp;
```

What does a lookups do?

In general, a lookup in sLyte checks if the instance for the service is created in app.js,and if it is created then the same instance can be used. And if the instance for the service is not created, the lookups creates an instance and stores in app.js and makes it available across the application.

In the above example, whenever the component WelcomeComp is getting instantiated, it will create a new instance of RequestHandler Service if an instance is not readily available, or else it will share the already created instance in the context of the component's this with the name of the service in camelCase preceding by a "$".

So now the instance of RequestHandler is being placed in the component's this context as $requestHandler

Named Service Lookup

By default, the name in which the service becomes available in the module will be "$"+<<CamelCase_Name_Of_Service>>. In the above example, it will be "$requestHandler". However, you can change this behaviour by mentioning the Service as a key-value pair, where the key becomes the name under which the service becomes available for the module.

```javascript
import { AppComponentRegistry } from "../component";
import {RequestHandler} from "../services/request-handler";
class WelcomeComp extends AppComponentRegistry.Component {
	lookups() {
		return [{"myNewRequestHandler" : RequestHandler}];
	}
	static actions() {
		return {
			"errorHandling" : function() {
				this.$myNewRequestHandler.onRequestError();
			}
		}
	}
}
export default WelcomeComp;
```

In the above example, we had given a different name "myNewRequestHandler" in the service lookup and therefore, it becomes available in the component as "$myNewRequestHandler".

Instantiation of a Service

By default, if you mention the Service class in the lookups, sLyte creates an instance in the scope of the app and then it shares it across the application.

In the above example, no matter how many times the WelcomeComp gets created, sLyte ensures that only a single instance of the RequestHandler Service is created and then shares it across multiple instances of the component.

However, there can be cases, where you need to create a new instance for a service or you might need to take control of how the instantiation is happening. In such cases, you can instantiate the service yourself and return it in the lookup.

```javascript
import { AppComponentRegistry } from "../component";
import {RequestHandler} from "../services/request-handler";
class WelcomeComp extends AppComponentRegistry.Component {
	lookups() {
		return [{"newRequestHandler" : new RequestHandler("abc")}];
	}
	static actions() {
		return {
			"errorHandling" : function() {
				this.$newRequestHandler.onRequestError();
			}
		}
	}
}
export default WelcomeComp;
```

In this way, every new instance of the component will have a separate instance of the Service RequestHandler.

sLyte Modules as Service

sLyte Modules such as Router, ComponentRegistry, or Db, are exposed as Services, so that they can be used across other modules with ease, just like how a normal Service can be used.

```javascript
import {SampleDb} from "../data-store/db"
class SampleRouter extends Router {
	lookups(){
		return [{"db" : SampleDb}];
	}
}
export {SampleRouter}
```
```javascript
import {SampleRouter} from "../router/router.js"
class SampleComponent extends Component {
	lookups(){
		return [{"router" : SampleRouter}];
	}
}
export {SampleComponent}
```

Here SampleRouter looks up for the service "db". And for all the services, including the services called inside the service, the service gets created in the app's scope.

---

## globals

Globals
Globals

Globals is a global object that can be set and used across the sLyte modules in various scopes. Globals will be available in the '$lg' scope in various sLyte module's context(this) and also can be used in the component template.

Setting Globals

To set the globals, pass the global key and value to the this.$app.Globals.set method

```javascript
this.$app.Globals.set("permissions", {get:true});
```

Nested property set is also supported, with the syntax as below

```javascript
this.$app.Globals.set("permissions.set", true);
```
Getting Globals

To get the globals, pass the global key and value to the this.$app.Globals.get method,

```javascript
this.$app.Globals.get("listview")
```
Using Globals
Template

Globals can be used with $lg scope in the template as shown in the example below,

```text
<template tag-name="user-comp">
{{$lg.permissions.get}}
</template>
```
sLyte modules

Globals can be used with $lg scope in the sLyte modules context(this) as shown in the example below,

```javascript
class TestRoute extends Route{
	model(){
		if(this.$lg.permissions.get === true){
			return this.$db.getAll({schema:TestSchema});
		}
	}
};
```
```javascript
class TestComp extends Component{
	init(){
		if(this.$lg.permissions.get === true){
			this.$db.getAll({schema: Test});
		}
	}
};
```
```javascript
class TestConnector extends Connector{
	parseResponse ({type , schemaName:modelName , xhr, payLoad, queryParams, key, customData, opts, actionName}){
	  return new Promise( function(resolve,reject){
	    if( this.$lg.permissions.get == true ){
	      resolve(payLoad);
	    } else {
	      reject(payLoad);
	    }
	  });
	}
}
```

---

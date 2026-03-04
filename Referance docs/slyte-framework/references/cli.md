# sLyte CLI (lyte-cli) Reference

Complete reference for the sLyte build tool and CLI commands.

## Table of Contents

- [introduction](#introduction)
- [commands](#commands)
- [config](#config)
- [utils](#utils)
- [slicer](#slicer)
- [subresorces](#subresorces)
- [advancedconfig](#advancedconfig)
- [imports](#imports)
- [themeConfiguration](#themeConfiguration)
- [addons](#addons)
- [fingerprints](#fingerprints)
- [pod](#pod)
- [webpackconfig](#webpackconfig)
- [slot](#slot)
- [i18n](#i18n)
- [build](#build)

## introduction

Command Line Interface(CLI)

CLI helps you manage your sLyte applications with ease, from your local machine. Using CLI, you can perform various operations in your sLyte application with simple commands. You can create, build, and run your applications, as well as generate files, minify and concatenate lyte files, and more.

Installation of CLI

The CLI is published as an npm package in the cm-npmregistry. To install the CLI, refer to the installation procedures specified in the Quick Start Section.

Functionality of CLI

The functions of CLI can be broadly categorized as follows:

Application creation
Files generation
Application Build
Asset management
CSS Assets Handling
Application Layout
Application creation

You can create a new application in sLyte using CLI in the directory of your choice. You can integrate your application with lyte using npm.

Files generation

CLI provides commands to generate routes, components, helpers, mixins, schemas and more. You can generate these files using the lyte generate command. You can delete files created using the lyte generate command by using the lyte destroy command.

Application Build

With CLI, you can compile routes, models, components, and other generated files. You can define your own build configurations for the application. Just start the sLyte server in a specific port, and perform several other actions with CLI.

Asset Management

Asset management involves all operations that are performed on the sLyte application. These operations include bundling.

CLI uses webpack for bundling all the dependent files. Webpack is a static module bundler that bundles the javascript file based on one or more entry points and builds a dependency graph based on the entry points.

In the sLyte applications the entry point will be configured in lyte.config.js

Entry points

CLI gives you an option to define the entry point of your application. This entry point would serve as a starting point for your application to build the dependency graph.

```javascript
let path = require("path");
 module.exports = function() {
     return {
         initialFileToLoad : path.join(process.cwd(),"app-init.js"),

         // entry : {
             // key : Array of values
         // }
         // Eg : entry : {
         //     "components/todo.js" : ["components/javascript/todo-item.js","components/javascript/todo-modal.js"]
         // }

     }
 }
```

If the entry point is not provided, CLI takes app-init.js as its entry point and builds the dependency graph.

```javascript
import {LyteblogApp} from "./app.js";

var app = new LyteblogApp({
    performance : true,
    debug : true
});

export {app};
```
Custom plugins

CLI, allows you to optimise your bundle based on the corresponding plugin. Based on your need, you can choose the plugin and require it in lyte.config.js just like the below code snippet.

```javascript
let path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = function() {
    return {
        initialFileToLoad : path.join(process.cwd(),"app-init.js"),
        plugins: [
            new MonacoWebpackPlugin({
                languages: ['typescript', 'javascript', 'css', 'html', 'json'],
                filename : "/node_modules/@slyte/lyte-editor/dist/workers/[name].worker.js"
            })
        ]
    }
}
```
CSS Assets Handling

sLyte cli has internally handled the relative urls to smoothen the assets download from css files. This is done automatically by updating the asset paths in your CSS and SCSS files during CLI processing. It ensures that the asset references point to the correct dist locations and handles both absolute and relative paths seamlessly.

Absolute path

Let us consider an example, where you can give the absolute path. This path stays as an absolute path, rooted at the dist. Let us consider an example

```javascript
body {
 background-image:url("/path/to/asset");
}
```

The CLI takes the given absolute path rooted at the dist folder.

```javascript
body {
  background-image:url("/path/to/asset");
}
```

There are cases where the absolute paths are given in the below structure.

```javascript
body {
  background-image: url("path/to/asset");
}
```

In such cases, the absolute path will be converted to a relative path with respect to the output file's location within the dist directory just like below

```javascript
body {
 background-image: url("../../path/to/asset");
}
```
Relative path

If the relative path is given, it gets adjusted to reflect the dist structure.

```javascript
body {
 background-image: url("../../path/to/asset");
}
```

The CLI takes the path from the dist just like the below code snippet

```javascript
body {
 background-image: url("../../path/to/asset");
}
```

In production, fingerprints are appended to asset filenames just like the below code snippet.
```javascript
body {
    background-image: url("../../path/to/asset-123456.png");
}
```

Application Layout

Using CLI, you can define a default directory structure for all files in your lyte application. The organization of all the files of your application is represented in the directory structure, which makes it easier for you to navigate through any sLyte application.

View the complete list of CLI commands here.

---

## commands

Commands in CLI

Once you have installed CLI, you will have access to all CLI commands in your terminal. Using the CLI commands, you will be able to perform a variety of operations on your application such as creating a new project, generating a new component, building the application, and so on.

The following commands are available in your CLI

Creating a new project

The lyte new command creates a new application in the sLyte framework with default sLyte folder structure. You can navigate to the required folder in your terminal, and execute the command to create a new application. And the command is

lyte new <app-name>

Here, the app name stands for the name of the application.

Let us consider an example of creating a new sLyte application called as blog-app

```javascript
lyte new blog-app
```

This command will create a new directory called blog-app with default files and folders such as routes,components,build.js(build configuration file) and package.json(contains all the sLyte dependencies and place a npm install to install the dependencies)

Creating an app without dependencies

CLI also lets you to create an application without the dependencies. To do so, execute the following code

```javascript
lyte new blog-app --skip-install
```

This feature would lend a hand if you wish to customize your package.json file before installing the dependencies.

Generating a module

The sLyte framework gives you an option to generate any module with this command. This lyte generate command will create the required files with their basic syntaxes. You can execute the lyte generate command after navigating to your application's folder.

lyte generate <module(route | component | helper | mixin | connector | serializer | schema | registry | map | subapp | service)> <name> [options]
module : default lyte module such as route, component, helper, mixin, test, adapter, model and serializer.
name : name for the module
options : default options given by lyte for generating module
Generating a route

The route plays an important role in handling the navigation. And the command to generate a route is as follows:

lyte generate route <route-name> <path>
route-name : name of the route
path (Optional) : path for the route.

If the path is not specified, it will be generated based on the route's name.

This command adds a route entry for the routes in router/map/map.js under the method map() and creates a route file at the location router/routes/<<route-name.js>>. You can also create additional map file.

The path of a route is always relative.

```javascript
lyte generate route blog /blog/favourites
// '/blog/favourites' is path for route 'favourites'
lyte generate route blog /blog/favourites?review=true
// 'favourites' route with default query params
//Router Entry
class BlogAppMap extends RouterMap {
	map() {
	this.route("blog", {
		path: "/blog/favourites?review=true"
	});
	}
}
```
```javascript
lyte generate route blog.create

// create route is nested to blog
//Router entry under map function
this.route("blog", {
	path: "/blog"
	}, function () {
	this.route("create", {
		path: "/create"
	});
});
```
```javascript
lyte generate route blog.edit edit/:editId
// edit route is dynamic route, matches with any segment
//Router entry
this.route("blog", {
	path: "/blog"
}, function () {
	this.route("edit", {
		path: "edit/:editId"
	});
});
```
```javascript
lyte generate route index /

// route with path '/' will be executed directly when it is hit from URL
//Router entry
this.route("index", {
	path: '/'
});
```
```javascript
lyte generate route blog.wildcard *wildcard
// wildcard route matches with multiple segments
//Router Entry
this.route("blog", {
	path: "/blog"
}, function () {

	this.route("wildcard", {
		path: "*wildcard"
	});
});
```
```javascript
lyte generate route blog --lazy
// Lazyroute is used when you wish to render the route after sometime
//Router Entry
this.lazyroute("blog", {
	path: "/blog"
},
);
```
Generating a component

Components plays a significant role in establishing the visual layer of an application. And the command to create it is

lyte generate component <component-name> [options]
component-name : name of the component
options : -d

To create a component inside a folder. It should be always relative to the component's default path

Following the norms of W3C Custom Elements, the component name must have at least one hyphen in it. This helps prevent clashes with the current or future HTML element names. Therefore, blog-post or audio-player-controls are acceptable names, whereas post or AudioPlayerControls are not.

You can create a component inside the folder and also without specifying the folder. Have a look at the below code snippet.

```javascript
lyte generate component blogger-comp
/* create three files under component directory
		1)components/javascript/blogger-comp.js
		2)components/templates/blogger-comp.html
		3)components/styles/blogger-comp.css
*/
```
```javascript
lyte generate component blogger-comp -d blogger
/* This command will generate the files with the folder structure
		1)components/javascript/blogger/blogger-comp.js
		2)components/templates/blogger/blogger-comp.html
		3)components/styles/blogger/blogger-comp.css
*/
```
Generating a raw component

Raw Components is a sLyte web component with no bindings and lifecycle hooks and dynamic html contents. And the command to generate it is

lyte generate raw-component component's name

component-name : name of the component

Generating a schema

Schema defines the data's properties and relations and the command to generate it is

lyte generate schema <model-name> [options]
model-name : name of the schem
options : -d

You can create a schema inside the folder and also without specifying the folder. But while creating a schema inside the folder, it should be always relative to the model's default path. Have a look at the below code snippet.

```javascript
lyte generate schema bloggerList
```
```javascript
lyte generate schema bloggerList -d blogger /* will create the model under data-store/schemas/blogger */
```
Generating an connector

Connector being a callback layer, is an absolute must in data store and the command to create it is

lyte generate connector <connector-name> [options]
connector-name : name of the connector
options : -d
option: --type

Data store, by default takes RESTConnector as its super class. You can also use graphql, and to specify it, use --type="gql"

You can create it inside the folder and also without specifying the folder. But while creating it inside the folder It should be always relative to the connector's default path. Have a look at the below code snippet.

```javascript
lyte generate connector bloggerList
```
```javascript
lyte generate connector bloggerList -d blogger /* will create the connector under data-store/connector/blogger */
```
Generating a serializer

A serailizer is an absolute must callback layer of the data store and the command to generate it is

lyte generate serializer <serializer-name> [options]
serializer-name : name of the serializer
options : -d

Data store, by default takes RESTSerializer as its super class. You can also use graphql, and to specify it, use --type="gql"

You can create it inside the folder and also without specifying the folder. But to create a serializer inside a folder, it should be always relative to the serializer's default path. Have a look at the below code snippet.

```javascript
lyte generate serializer bloggerList
```
```javascript
lyte generate serializer bloggerList -d blogger /* will create the serializer under data-store/serializers/blogger */
```
Generating a helper

A helper is a simple class that can be called from a template.

lyte generate helper <helper-name> [options]
helper-name : name of the helper
options : -d

You can create a helper inside the folder and also without specifying the folder. But to create a helper inside a folder, it should be always relative to the helper's default path. Have a look at the below code snippet.

To generate a helper for concatenation of the string with name concatString, execute below command in the terminal

```javascript
lyte generate helper concatString
```
```javascript
lyte generate helper concatString  -d string
```

Hyphens are not allowed to be used in helper names. When there are multiple words in the name, we can name the helper as ConcatString or PrefixString instead of using a hyphen.

Generating a mixin

Mixins are used to share functions across different components, routers, or data layers. Before you register a mixin, you need to generate it with the slyte generate command.

lyte generate mixin <mixin-name> [options]
mixin-name : name of the mixin
options : -d

You can create a mixin inside the folder and also without specifying the folder. But to create a mixin inside a folder, it should be always relative to the mixin's default path. Have a look at the below code snippet.

```javascript
lyte generate mixin menu-util
```
```javascript
lyte generate mixin menu-util  -d util
```
Generating a service

Services are modules that can be share across the application. Before you start with services, you need to generate it with the lyte generate command.

lyte generate service <service-name> [options]
service-name : name of the service
options : -d

You can create a service inside the folder and also without specifying the folder. But to create a srvice inside a folder, it should be always relative to the service's default path. Have a look at the below code snippet.

```javascript
lyte generate service request
```
```javascript
lyte generate service request -d util
```
Generating a registry

Just like components, you can also generate a registry. On generating a registry you will get a folder which holds the components pertaining to that registry. You can find this registry in build.js. The command to create a registry is

lyte generate registry registryname
Generating a map

Additional to the map.js file, you can also create a map file.

The command to generate a additional map file is

lyte generate map mapname

While creating an additional map, you will be asked to provide the basePath. You can provide the default route(index) or you can provide any route that you have created earlier.

You can also create a parallel route to the default route by providing '/' in the basePath.

In the case, where the map is created in prior to the route, and if you want that route to be present in the created map, you can do so by executing the below command

lyte generate route routename --map mapname
```javascript
lyte generate route home --map map3
```
Generating a subapp

Creates a new subapp inside an existing sLyte application.

lyte new subapp <subapp-name>[options]
options: -d <directory> - Create the subapp in a specific directory
```javascript
lyte new subapp my-subapp
lyte new subapp my-subapp -d apps
```
PodApp Support
lyte new subapp <name> --podApp
Generating a module in subapp

Any above mentioned modules can be generated within a subapp.

lyte generate module <module-name> --subApp <subapp-name>
```javascript
lyte g component user-profile --subApp my-subapp
lyte generate helper auth-helper --subApp my-subapp
```

When creating registries in subapps, the system automatically updates the registry in the build/config.js file in subapp.

Points to remenber
Subapps can only be created inside existing Lyte applications
The --subApp flag works with most generate commands (component, helper, etc.)
Subapps are automatically registered in build.js
Generating Components with Registry in Subapp

You can also generate component with registry in a subapp just like a below code snippet.

lyte generate component <component-name> --subApp <subapp-name> --registry <registry-name>
```javascript
lyte g component user-card --subApp admin-panel --registry users
lyte generate helper data-formatter --subApp e-commerce --registry products
```
Destroying a module

The lyte destroy command will delete all the files and folders that was created using the lyte generate command. The syntax for using the lyte destroy command is:

lyte destroy <module-name> <name> [options]

For the modules, you need to specify the module name.

If you created a module inside a folder, you are required to specify the same while destroying the folder.

```javascript
lyte destroy component blogger-comp
/* Removes three files under component directory
		1. components/javascript/blogger-comp.js
		2. components/templates/blogger-comp.html
		3. components/styles/blogger-comp.css
*/
```
```javascript
lyte destroy component blogger-comp -d blogger
/* This command will destroy the files with the folder structure
		1. components/javascript/blogger/blogger-comp.js
		2. components/templates/blogger/blogger-comp.html
		3. components/styles/blogger/blogger-comp.css
*/
```
Destroying a route

If you need to destroy routes, you are required to specify the complete route name.

```javascript
lyte destroy route favourites
// destroys the favourites route
```
```javascript
lyte destroy route blog.create
// create route nested to blog will be destroyed
```
Destroying a subapp

Removes an existing subapp and cleans up its configuration.

lyte destroy subapp <subapp-name>[options]
options: -d <directory> - Destroy the subapp in a specific directory
Building the application

The lyte build command compiles all the files and places them into the output folder. By default, the output folder is /dist. The syntax for using the lyte build command is:

lyte build [options]
```javascript
lyte build
lyte build --watch
lyte build --production
```
--production: In production, the js files (i.e., the routes, models, components, etc.) will be concatenated and minified as per the configurations provided by the user in build.js.
-watch: The --watch option watches the files for changes and automatically builds the application.

The default value is false.

'log.txt' contains logs of CLI build process.

Serving the application

The lyte serve command will start the application at port 3000 by default. The syntax for using the lyte serve command is:

lyte serve [options]
--port (Number) : To change the port of the lyte serve

If you want the application to be started in a different port, you can change the port number. Include --port << port number >> in your lyte serve command.

To run the application in port 4000 you can use --port options

```javascript
lyte serve --port=4000
```

---

## config

Configuration
Introduction

The sLyte application is built based on the procedures mentioned in the build.js file, which can be found at build/build.js in the application directory. CLI also gives you the flexibility to add any configuration or any task that needs to be executed during the build process.

Folder Structure

Inside your application, you can find the following files/folder:

Lyte

component

lyte-c.js, lyte-c.min.js, lyte-c-es5.js

custom-elements-es5-adapter.js

custom-elements.min.js

data

lyte-d.js, lyte-d.min.js

lyte-dom

lyte-dom.js, lyte-dom.min.js

lyte.js, lyte.min.js, lyte-es5.js, lyte-es5.min.js

polyfill-bundle.js

rc

lyte-rc.js, lyte-rc.min.js, lyte-rc-es5.js, lyte-rc-es5.min.js

router

lyte-r.js, lyte-r.min.js, lyte-r-es5.js, lyte-r-es5.min.js

template.min.js

test

FILE	PURPOSE
index.html	This page serves the application with the sLyte dependencies.
jsconfig.json	Visual studio configuration file used to support auto import suggestion in Microsoft visual Studio.
lyte.config.js	sLyte webpack configuration file (similar to webpack configuration file)
app-init.js	Base entry file for the application where you will create an instance for your application.
app.js	Used to create the instance of Router,Data and Component that can used throughout the application.
.npmrc	Npm configuration file
package.json	Npm configuration and dependency list
components/	This directory contains custom component related files that handles the UI layout and the rendering logic.
router/	This directory contains the files related to Routing.
router/maps/map.js	Contains the mapping between the application logic and the browser url.
router/router.js	Configuration file for the router to specify the history type,baseUrl etc..
data-store/	This directory contains all the database related stuff
data-store/schemas	This directory contains the files which specifies the structure of your data tables.
data-store/connectors	This directory contains the files where you can set/modify the default REST API standard using connector callbacks.
data-store/serializers	This directory contains the files where you can customize your data between the client and the server based on your requirement.
build/build.js	Build configuration file is used during lyte build.
mixins/	This directory contains the files which can be used to share the common logic across components and routes.
Configuring the build options
Initiating the build process

In this method, the compilation process will be intiated. You can also write a custom function to be executed before and after build process. The custom function which has to be executed before the build process must be specified before the init and the custom function that has to be executed after the build process must be specified after the build.

```javascript
build : async function (options)  {
    buildUtils = require(path.join(options.cliRoot,'lib','utilities','buildUtils'));
    /* Building of modules starts. Custom modules can be added in build function.*/
    await buildUtils.init(options); /* Provides options to buildUtils.*/
    await buildUtils.build(options);
},
```
Default build procedures

By default, CLI incorporates the routes and components. If your application has any helpers, mixers or any files that has to taken into consideration while building, you can mention it in build.js. Now let us see what happens while building the routes and components.

Building routes:

The routes that has been mentioned in map.js gets imported and gets compiled automatically.

Building components:

While building the components, CLI bundles the template files, style files and the JS files into a single JS file. Based on your requirements, CLI gives you an option to bundle the CSS files along the the JS files. You can set the property 'includeStyle: true' to bundle it and set the property 'includeStyle: false' to consider not bundling the CSS and the JS files.

```javascript
includeStyle : true /* toggle this boolean to include style into component's javascript file */
```

Rather than bundling the CSS file, you can also use the link tag just like the below code snippet.

```javascript
includeLinkTag=true;
```

On doing so, the css file will be added as a link tag to the JS file. And now in the dist folder you can see the JS and the CSS file.

```javascript
isBaseHref=true;
```

On setting isBaseHref true, the leading forward slash (/) is removed from absolute paths to support <base> tag in HTML.

Let us see an example with and without isBaseHref

```javascript
<link rel="stylesheet" href="/styles/main.css">>
```
```javascript
<link rel="stylesheet" href="styles/main.css">
```
Watching for file changes

A Watcher watches a directory and all its descendant directories for changes, deletions, and additions of files and directories. Changes in components, routes, models, and configuration JSON files are watched, and they are built once again if changes occur. You can also write custom watcher function to watch the files. And that particular file, requiring watcher function must require sane in build.js. Have a look at the below code to see how the custom watcher function works.

obj (object)
path (String) path of the directory to watch
ignored (optional) (Array) a glob, regex, or file path to ignore from watching
glob (optional) (Array) a single string glob pattern to watch
```javascript
var obj = {
    path : options.root ,
    ignored : [
        '/bower_components/' ,
        '/node-modules/'
    ] ,
    glob : [ '**/*.css' , '**/*.js' ]
}
var sane=require('sane');
/* sane is the npm package for watching the files */
var watcher = sane ( obj.path , {
    glob : obj.glob ,
    ignored : obj.ignored
} ) ;
watcher.on ( 'change' , function ( filePath , root , stat ) {
    /* code to execute when the file changes */
} ) ;
watcher.on ( 'add' , function ( filePath , root , stat ) {
    /* code to execute when the file new added */
} ) ;
watcher.on ( 'delete' , function ( filePath , root , stat ) {
    /* code to execute when the file deleted */
} ) ;
```

---

## utils

Utils
Available utilities

Here are the Utils provided by CLI. With these utils you can perform copying and many other functions. Keep reading to know more.

Copy utils
Copy utils

For copying the file or folder CLI provides the util named buildUtils.copy

buildUtils.copy.file(obj,options)

This copies a single file from its source folder to the destination folder, and minifies the files if 'minify' option is set as true.

obj (Object)
src (String) src path of the file
dest (String) destination path of the file
minify (Boolean) To minify the file
srcCopy (Boolean) This option is used to copy the source file without the fingerprints in the production mode.
options - provide the options
```javascript
build : async function (options)  {
    buildUtils = require(path.join(options.cliRoot,'lib','utilities','buildUtils'));
    await buildUtils.init(options);
    var obj = {
        src : '/Users/Documents/blog-app/favourites/nature.js' ,
        dist : '/Users/Documents/blog-app/dist/favourites/nature.js' ,
        minify : true ,
        srcCopy: true
    }
    buildUtils.copy.file(obj,options)
    await buildUtils.build(options,);
},
```
buildUtils.copy.folder(obj,options)

This copies folder from their source to the destination and minifies all the files if 'minify' is set to true.

obj (Object)
src (String) src path of the folder
dist (String) destination path of the folder
minify (Boolean) To minify the file in production mode. But in development mode minify is set to false
srcCopy (Boolean) This option is used to copy the all the source files without the fingerprints in the production mode.
options- provide the options
```javascript
var obj = {
    src : '/Users/Documents/blog-app/favourites/' ,
    dist : '/Users/Documents/blog-app/favourites/' ,
    minify : true ,
    srcCopy : true
}
buildUtils.copy.folder(obj,options)
```
Concatenation util
Concatenation util

To concat the files and minify the files based on the configuration object using buildUtils.consolidate utils

buildUtils.consolidate(options, obj)(experimental)

This util will help to consolidates and minifies the files based on the options given like below

options - Pass the options.
obj (Object)
src - can be folder path / file path or glob patterns.
dist - can be folder path / file path or glob patterns.
(or)
config (Object) content for the consolidation object
minify - To minify the file.
```javascript
var conf = {
   "lyte.js": [
   "bower_components/lyte/polyfill-bundle.js",
   "bower_components/lyte/lyte-es5.js",
   "bower_components/lyte-dom/lyte-dom.js",
   "bower_components/lyte-dom/lyte-dom-migrate.js"
   ]
  };
  await buildUtils.consolidate(options,{
   config : conf
   });
```
```javascript
await buildUtils.consolidate(options, {
   src: ["node_modules/lyte/", "src/**/*.js","lyte-dom.js"],
   dist: "lyte.js"
  });
```
Transpile util
Transpile util
transpile(obj)

For the conversion of files or folders from es6 to es5 syntax

obj (Object)
file (String) src path of the file
dist (String) dist path of the file
```javascript
/* options.cliRoot mentioning the path of the lyte-cli */
var transpile = require ( path.join ( options.cliRoot , 'lib' , 'utilities' , 'transpile' ) ) ;
var obj = {
    file : "/Users/Documents/blog-app/blog-list.js" ,
    dist : "/Users/Documents/blog-app/dist/blog-list.js"
}
transpile ( obj ) ;
```
updateFingerPrint
updateFingerPrint(options,filePath/folderpath)

This is used to update the fingerprint if file changed after the production build.

options - Provide the options.
filePath/folderPath - Provide the file path or the folder path.

---

## slicer

Slicer

This feature helps the CLI to let know that certain lines of code are not to be considered when it is indicated with @Slicer.someStart and @Slicer.somesEnd.

To enable this feature, add the below code in the setCustomConfiguration in your build.js file

```javascript
options.slicer ={
 some:false
}
```

Where, 'some' can be any key inside the slicer object. If 'some' is set false or undefined, the code within the specified markers will be removed. This feature can be used as a single lined comment and multi lined commet just like the below code snippet.

```html
var a=number;
// @Slicer.someStart
var a="str";
console.log(a);
// @Slicer.someEnd
console.log(a)
```
```javascript
var a=number;
/* @Slicer.someStart */
var a="str";
console.log(a);
/*  @Slicer.someEnd */
console.log(a)
```
```javascript
var a=number;
console.log(a)
```

In the production mode, the 'development' key in the slicer object is set as false. As set false, the code given with the @Slicer.developmentStart and @Slicer.developmentEnd, when given by the user will not be considered in the production mode.

In the development mode, the 'production' key in the slicer object is set as false. As set false, the code given with the @Slicer.productionStart and @Slicer.productionEnd, when given by the user will not be considered in the development mode.

Error Handling: If a user attempts to use $ in a slicer key, an error will be thrown as $ denotes internal slicer.

---

## subresorces

Subresource Integrity

CLI supports Subresource Integrity. To get deeper, let's first understand about SRI. Subresource Integrity which is shortly referred as SRI, helps to enforce security by letting the browsers ensure the integrity of fetched resources, especially from a CDN. SRI uses cryptographic hash which must match with the fetched resources. This prevents the malicious content into the files on the CDN to a great extent. As per mdn sha256, sha384, sha512 are the valid hash algorithms supported in client.

In CLI, the integrity will be computed for the files loaded from webpack and from copyAppDir. Have a look below to see how it is acheived.

```javascript
SRI : true || {
   hash: "sha256" || "sha384" || "sha512"}
```

For the element injected via runtime, these integrity values will be added before it is appended to the DOM.

This integrity value is also available in two formats in the outputFolder as

integrity.json
integrity.js

To get the integrity of the particular file, you need to load this file to the client initially and execute the following command.

```javascript
LyteIntegrityMap.get(<<fileName>>)
```

Here the fileName is the location of the file relative to the outputFolder.

On adding the above command in your script file, the hash value corresponding to the file will be returned as response.

---

## advancedconfig

Configuration
Introduction

The following are the advanced configurations.

Proxy configuration

Let us consider an example, where the data is residing in different server. Now, the request that is being intiated from your app gets redirected to the server with the help of options.devserver.

Let us consider an example, where you have an route called as api of someapp serving at port 4000. Now, if you want to access the data of that particular api, you can set the options.devServer in your main app. Now from your main app you can access the api route and get it rendered in any different port of your choice.

```javascript
options.devServer={
    proxy:[{
        context:['/api'], //Name of your request
        target:'http://local:2000' //destination for the request
    }
    ]
}
```
Debugging_configuration

There are cases where you feel the need to debug the variables that has been imported and used in a file. To support such feature, CLI makes all the imported variables available in "_" during the file execution.

If "_" clashes with your any of your app's variable, then you can change the variable name as desired by setting the below configuration in your build.js using options.definePropertyVar

```javascript
options.definePropertyVar = <<variableNameToBeChanged>>
```

---

## imports

Dynamic Imports
Introduction

As sLyte framework has implemented class based approach, imports and exports plays a huge role. In the earlier versions, you could have mentioned the dependencies and resources file. Now, things have become more easy. All you need to do is import the needed files and mention it with its type with '//@'' just like the below code snippet. Keep reading to know more about it.

```javascript
import { Route } from "@slyte/router";
import { Lyte } from "@slyte/core";
import  {studentAppDb} from "./data-store/schemas/test.js;  //@dependencies
import  {studentAppComponentRegistry}  from "./components/javascript/ab-comp.js";  //@resources
import "/plugins/testPlugin.js" //@bundle
class RouteFile extends Route {
  // ... your route component logic ...
}
```
Block Comments

You can @mention multiple lines of import with its file type. All you need to do is mention the multiple lines of imports with the //#startresources and //#end resorces. Have a look at the below code snippet to see how it works.

```javascript
import { Route } from "@slyte/router";
 //#start resources
import "f.js" ;
import "h.js" ;
import "i.js" ;
//#end resources
class RouteFile extends Route {
 // ... your route component logic ...
 }
```

Apart from the block comments, you can also provide @mention even for a single line of imports just like the below code snippet.

```javascript
import { Route } from "@slyte/router";
import "m.js" ;//@bundle
class RouteFile extends Route {
  // ... your route component logic ...
}
```
Conditionals
If check in block comments

You can use 'if' condition in the import statement. And if the 'if condition' returns true, then the particular file gets imported along with other files to import. And if the 'if condition' returns false, apart from that particular import statement all other import statement gets executed.

```html
import "a.js" ; //@bundle
import "b.js" ; //@resources
import "c.js" ; //@dependencies
import "d.js" ; //@resources @ if a<b
import "e.js" ; //@if b<c @ dependencies
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
import "l.js" ; //@ if b<c
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

If the file type of a single line differs from the rest of other lines in the import statements, even in such cases based on the given comments, the files gets imported.

```javascript
import { Route } from "@slyte/router";
//#start dependencies
import "a.js" ; //@bundle
import "b.js" ; //@resources
import "c.js" ; //@dependencies
import "d.js" ; //@resources @ if a<b
import "e.js" ; //@if b<c @ dependencies
//#end dependencies
class RouteFile extends Route {
  // ... your route component logic ...
}
```
Download initiators

The available file types are

//@resources
//@dependencies
//@bundle
//@dist
//@resources

You can import the files which are required for the execution of route during the data fetch or permission check and mention it as resources. You can mention it as '@resources' or '@getResources'.

```javascript
import { Route } from "@slyte/router";
import "a.js" ; //@resources
import "a.js" ; //@getResources
class RouteFile extends Route {
  // ... your route component logic ...
}
```
//@dependencies

You can import the files which are required only during rendering, post rendering and mention it as dependencies. You can mention it as '@dependencies' or '@getdependencies'.

```javascript
import { Route } from "@slyte/router";
import "b.js" ; //@dependencies
import "b.js" ; //@getDependencies
class RouteFile extends Route {
  // ... your route component logic ...
}
```
//@bundle

Any files that you wish to bundle it along the route can be specified as bundle in the imports.

```javascript
import { Route } from "@slyte/router";
import "/plugins/testPlugin.js" //@bundle
class RouteFile extends Route {
  // ... your route component logic ...
}
```
//@dist

With the help of '@dist', you can import the files which are only available in the dist folder.

```javascript
import { Route } from "@slyte/router";
import "/a.css"; //@dist
class RouteFile extends Route {
  // ... your route component logic ...
}
```
Override

While using the import statements, if the file type is not mentionted, then by default CLI imports the file based on the its type. CLI also provides an additional favour for you, that is, you can also overide the files as dependencies and resources, even if they don't fall under that category. Have a look at the below code to get a better understanding of it.

```javascript
import { Route } from "@slyte/router";
import { Lyte } from "@slyte/core";
import  {studentAppDb} from "./data-store/schemas/test.js;  //@resources
import  {studentAppComponentRegistry}  from "./components/javascript/ab-comp.js";  //@dependencies
class RouteFile extends Route {
  // ... your route component logic ...
}
```
Dynamic CSS theme Loading

CSS files in your application can be dynamically imported using placeholders within the import path. This allows flexible styling based on user preferences or application state.

```javascript
import "/css/styles/$key1/$key2/.../a.css
```

$key1 and $key2 are placeholders that will be replaced with actual values during the build process. These variables are user-defined and can represent various attributes, such as theme, direction, lang, etc

Defining Dynamic Variables

Dynamic variables are defined in build.js as follows

```javascript
dynamicVars = {
    key1: ["ltr", "rtl"],
    key2: ["light", "dark"]
};
```

Let us see an example

```javascript
module.exports = {
  version: "1.0.0-RC",
  setCustomConfiguration: function (options) {
      options.customConfig = {
      outputFolder: "dist",
        dynamicVars: {
          dir: ["ltr", "rtl"], // Possible values for 'dir'
          theme: ["light", "dark"] // Possible values for 'theme'
        },
      }
  }
}
```
Runtime Configuration

The env object in app.js determines the active combination of dynamic variables during runtime in app.js. This combination has to be mentioned in app.js. Here's how you configure it

```javascript
env = {
  key1: "ltr",
  key2: "dark"
};
```

Let us see an example of it.

```javascript
class SampleApp extends Lyte {
  env = {
      dir: "ltr", // Currently using left-to-right direction
      theme: "dark"// Currently using the dark theme
  };
}
```

When the values within the env object are updated, the application will dynamically switch to the corresponding CSS file.

Let us see an example usage in a Route

```javascript
import { Route } from "@slyte/router";
import { WelcomeComp } from "../../components/javascript/welcome-comp";
import "/css/$dir/$theme/a.css"; // Dynamic import based on 'dir' and 'theme'

class Index extends Route {
    // ... your route component logic ...
}
```

In this example, if env.dir is "ltr" and env.theme is "dark", the imported CSS file will effectively be in /css/ltr/dark/a.css

@dist with Dynamic Theme Loading

You can combine @dist with dynamic theme loading to import CSS files from your dist folder based on your dynamic variables.

Let's say you have the below structure your dist folder. In such case, you can then use the following import statement in your index.js just like the code.

```javascript
dist/
├── css/
│   ├── ltr/
│   │   ├── dark/
│   │   │   └── a.css
│   │   └── light/
│   │        └── a.css
│   └── rtl/
│       ├── dark/
│       │   └── a.css
│       └── light/
│           └── a.css
└── ... other files ...
```
```javascript
import "/css/$dir/$theme/a.css"; //@dist
```

Now, when your application runs, the build process will replace $dir and $theme with the values from your env object. The @dist directive will ensure that the resulting path is resolved relative to your dist folder.

Let us see some example scenario

env.dir = "ltr", env.theme = "dark": Here, the import will resolve to dist/css/ltr/dark/a.css.

env.dir = "rtl", env.theme = "light": Here, the import will resolve to dist/css/rtl/light/a.css.

---

## themeConfiguration

Theme Configuration
Configuring the themes
Configure the folder structure for the themes:

Lyte-cli will search the themes files from the base path mentioned in the folder object of the configureFolders function under the key themes. By default we will considered the base path for the themes as css folder.

Base path will be relative to the application

```javascript
setCustomConfiguration : function ( options ) {
  var folders  = {  /* Available modules and its folder structures.*/
    routes  : 'routes' ,
    components  : 'components' ,
    adapters  : path.join ( 'data-store' , 'adapters' ) ,
    models  : path.join ( 'data-store' , 'models' ) ,
    themes : path.join ( "css" )
  } ;
}
```

There will be two ways for compiling the themes and depending on that the configuration varies as

Default compilation
Custom compilation
Default compilation

Default compilation of the themes will execute during the lyte build process. To enable default compilation of the themes follow the following steps:

Set the theming options to true

Set the theming options to true in the configurefolder function of the configuration file(build/build.js)

```javascript
setCustomConfiguration: function(options) {
   options.theming = true;
 }
```

This configuration will also help to generate the themes file for the components during the generation of the component file.

Add the configuration file less-min-conf.json under build directory of your application

sLyte supports theming based on Less(.less) library. The less files will be compiled with the help of the less compiler and the corresponding css file will be generated based on this configuration file(less-min-conf.json) and placed under the output folder of the themes.

```javascript
/* build/less-min-conf.json */ {
   "lyte-ui-accordion.css" : [ "styles/global.less" , "styles/accordion.less" ] ,
   "lyte-ui-alert.css" : [ "styles/global.less" , "styles/alert.less" ]
 }
```
To pass the dynamic values

To pass the dynamic values for the variables defined in the less file. You can use the options named themeOptions.

```javascript
options.themeOptions  : {
globalVars  : {
  themeName  : "night"
    /* themeName will be dynamicParam of the theme file */
  }
}
```

To compile the themes based on custom configuration Lyte-cli comes with the util to compile themes named as compileThemes. We will see how to do that in custom compilation topic.

Custom compilation

Lyte-cli will provide an separate util for the compilation of themes. Developers can use this util for compiling multiple themes by varying value for the arguments of the utils function. This util will also compile the themes based on Less compiler.

Disable the theme options

For custom compilation, disable the theming options in the build function of the build.js file to false to avoid the default less compilation

```javascript
build : function()  {
  options.theming = true;
}
```
Add the compileThemes util

Add the compileThemes util after the init call of the build function of the build/build.js file.

```javascript
await buildUtils.init(options);
await buildUtils.compileThemes ( {
  src : Array of source files ,
  dist : destination file ,
  themeOptions : {

  }
} )
```
```javascript
options.theming = false ; /* to disable the default less compilation */
buildUtils.compileThemes ( {
  src : [ "styles/blog-list.less" , "styles/blog-model.less" ] ,
  dist : "blog-list.css" ,
  themeOptions : {
    globalVars : {
      themeName : "night"
      /* themeName will be dynamicParam of the theme file */ }
    }
  } )
```
Enable the watch for custom themes

By default, we don't provide watch for themes when compiled using compileThemes utils. You can enable this by adding options.theming = true after the call of buildUtils.build in the build function.

```javascript
build : async function ( options , dependencies ) {
  /* Building of modules starts. Custom modules can be added in build function.*/
  await buildUtils.init ( options ) ;
  /* custom function to execute before the build process */
  await buildUtils.build ( [ 'copyAppDir' , 'routes' , 'components' , 'models' , 'helpers' , 'mixins' ] ) ;
  /* custom function to execute after the build process */
  options.theming = true
}
```
Including SCSS file

CLI extends its support to include scss files instead of css files. To do so, add the below code in your build.js

```javascript
options.cssType = "scss"
```

Then, execute the following command in your terminal to install the sass package.

```javascript
npm i @zoho/lyte-cli-sass@2.0.8 --registry http://cm-npmregistry
```

After including it in your build.js, now when you generate a component, you can see the scss file, instead of your css file just like the below image.

And during the build process, SCSS will be supported and converted to css in the dist folder.

Similary, when you destroy the created component, the scss files gets deleted automatically.

Building SASS file

Lyte-CLI provides a separate utility for the compilation of SASS. Developers can use this utility to compile multiple themes by varying values for the arguments of the utility function. This utility also compiles themes based on the Less compiler.

Install the following package

```javascript
npm i @zoho/lyte-cli-sass@2.0.8 --registry http://cm-npmregistry
```

Add the following code snippet in build.js below buildUtils.init()

```javascript
let sass = require("@zoho/lyte-cli-sass"),
await sass.compileFolder(path.join(options.root, "scss")
   /*folder to run the sass compilation*/,
options,
{
outputPath: path.join(buildOptions.outputFolder, "scss"),
   /*output path for the compiled css */
watch: options.watch,
folderToWatch: path.join(options.root, "scss")
   /*Folder you want to watch */

});
```

---

## addons

Addons in Lyte-cli

CLI introduces a new feature called as Lyte addons for distributing the resuable custom components among different projects.

Generating the addon files

To generate the file structure for the addons

lyte new addon < addon-name >

Lyte addons should be created in an new directory, and not inside an existing sLyte apps.

Installing addons

The lyte install command, helps you to install any addons in your application

lyte install <package> <options> --registry
package : the name of the package.
--registry: specifies the registry link to install the package from.
options:
--version[number or link]: specifies the version number or the link to the specific version to install
```javascript
lyte install @zoho/lyte-ui-component@4.0.0-plugins-beta-3 --registry http://cm-npmregistry
lyte install @zoho/lyte-ui-component --registry http://cm-npmregistry
lyte install @zoho/lyte-ui-component --version 1.0// or lyte install @zoho/lyte-ui-component@1.0
lyte install @zoho/lyte-ui-component --version [buildurl] //or lyte install @zoho/lyte-ui-component@[buildurl]
```
Addon file structure

Inside your addons, you will see the following files/folders.

lyte-welcome-page

components/

javascript/

templates/

styles/

build/

build.js

runscript.js

testApp

build

components

node_modules

data-store

router

.eslintrc

.npmrc

app-init.js

app

index.html

jsconfig.json

lyte.config.js

package-lock.json

package.json

.npmrc

addon.js

package.json

components/

This folder contains the custom components of the addons. To get more details on generation of components for the addons refer here.

If you want to create a component inside the testApp, execute the following command

slyte generate component comonent-name --testApp
build/

This folder contains build.js file and runscript.js.Addon contains the build.js file with extra key addon specifying the name of the addons. To know more about the build configuration refer here.

The file runscript.js which contains script to execute while installing the addons. To check the content of the runscript.js refer here.

testApp/

This folder contains all the folder of the sLyte apps to test the addons.

package.json

This is the package configuration file mentioning the package name,version,dependencies,devDependencies.. etc

For an lyte addons add the below configuration in the package.json file of the addons

Lyte addons must include semver and inquirer as default dependencies of the package to check the version compatibility.

Below is an example of package.json file of lyte-welcome-page which have ui-component,sLyte and CLI as client dependencies.

```javascript
{
    "name" : "lyte-welcome-page",
    "version" : "1.0.0",
    "description": "Description for lyte-welcome-page goes here",
    "scripts" : {
        "test" : "echo \Error: no test specified\" && exit 1",
        "postInstallation": "node build/runscript.js $INIT_CWD"
    },
    "author":" ",
    "license":"ISC",
    "dependencies" : {
        "semver" : "7.3.4",
        "inquirer": "7.3.3"
    },
    "lyte-addon":true,
    "devDependencies" : { },
    "addons":[
    "lyte-welcome-page"
    ]

}
```
Publishing the addons

Addons should be published as an npm package.

To publish the package:

Run the npm publish command from the addon directory.

```javascript
npm publish --registry  http://cm-npmregistry
```
To unpublish the package:

Run the npm unpublish command from the addon directory.

```javascript
npm unpublish --registry  http://cm-npmregistry --force
```
Building the addons

To build the addons, use

lyte build <<options>>

For more information about the build command refer here.

On building the addons, both the addons and testApp are compiled and addons are built and placed under "addons" folder in outputFolder of the testApp.

By default, the addons gets built only from the testApp and the output will be generated in the dist folder of the testApp with the app-init.js as the entry point.

Serving the application

To serve the addons use

lyte serve <<options>>

This will serve the items under the testApp of the addons.

For more information about the serve command refer here

How to use the addons inside the sLyte app

Consider the example lyte-sample-todo application ,we are using lyte-welcome-page as an addon

Installing the addons:

To install the addons inside the app run the following command.

```javascript
npm install lyte-welcome-page --registry http://cm-npmregistry
```

Or you can mention addon-name under the dependencies of the package.json file of the app and run the command

```javascript
npm install --registry http://cm-npmregistry
```

On installing the addons inside the app ,the version compatibility between the dependencies of the addons and app will be checked and only the version compatible dependencies will be installed.

If an mismatch in version on npm install postscript asked for an prompt in the development mode which one to install and saved under resolution key in the package.json .Don't forgot to checkin the package.json with that key to avoid the mismatch issue in production setup.

Once the addons (lyte-welcome-page) successfully installed ,it will be placed inside the node_modules folder of the lyte-sample-todo

After installing the addons successfully,add an entry in the application's package.json like below to build the addons.

```javascript
"addons": [
   "lyte-welcome-page"
]
```
Building the app with addons:

Run the lyte build command from the app directory to build the app and addons.Now the compiled addons kept inside the outputFolder of the app under addons folder.

Lets have an view on the folder structure of the addons inside the app after compilation

lyte-sample-todo

components/

build/

dist

addons

lyte-welcome-page

components/

javascript/

welcome-page.js

some external files

components/

javascript/

todo-modal.js

todo-item.js

routes

index.js

todo.js

router.js

package.json

routes

index.js

todo.js

router.js

package.json

How to use the addons in the other frameworks and v3 Lyte app

After creating an addon using cli, add the following configuration in your build.js

```javascript
options.processAllComponents = true
```

Now to convert an addon as an sLyte app, do the following

Create dummy-app.js file
Create dummy-app-init.js file
Create lyte.config.js file

Here, dummy-app.js is used to create an app environment, dummy-app-init.js is used to to create app instance and lyte-config.js is used to build the app based on the app-configuration.

```javascript
import { Lyte } from "@slyte/core";
import {TestAddonAddon} from "./addon"; //import the addon.js and add that in lookup

class DummyApp extends Lyte{
    lookups(){
        return [ TestAddonAddon ];
    }
}
export {DummyApp};
```
```javascript
import { DummyApp } from "./dummy-app";
var app = new DummyApp({
    performance : true,
    debug : true
});

export {app};
```
```javascript
let path = require("path");
module.exports = function() {
    return {
        initialFileToLoad : path.join(__dirname,"dummy-app-init.js")
    }
}
```

After converting an addon as an sLyte app, include the following files in index.html/jsp before loading it in the browser.

runtime.js
lyte.js
dummy-app-init.js
And the corresponding component compiled js and css

Let us see an example index.html file for your reference.

```html
<html>
  <head>
    <script src="/runtime.js"></script>
    <script src="/lyte.js"></script>
    <script src="/dummy-app-init.js"></script>
    <script src="/components/javascript/page-comp.js"></script>
    <script src="/components/javascript/welcome-page.js"></script>
  </head>
  <body>
      <h1>Welcome to Slyte framework</h1>
      <div id='outlet'></div>
      <welcome-page></welcome-page>
  </body>
</html>
```

---

## fingerprints

Finger Prints
Introduction

With CLI you can achieve fingerprinting. But what actually is fingerprinting?.

In general, when a user tries to access a webpage, it hits the server and fetches the details from it and gives you the needed information.

With fingerprint, a hash value is randomly generated for each file. This hash value gets attached to the filename. Only when the hash value changes, the files gets downloaded from the server and gives you needed details. If the hash value is not changed, the cached file will be available in the browser.

Fingerprints in CLI

During lyte build in the production mode, by default CLI will generate the fingerprint for all the minified files. You can find the fingerprint.js file under your outputFolder which contain the fingerprint related utils and fingerprint info of the each files. 

By default, fingerprint is available in the production mode. You can enable and disable fingerprint by setting the field, options.fingePrint available in your build.js

options.fingerPrint = true/false
```javascript
setCustomConfiguration : function(options) {
    options.customConfig = {
        outputFolder : "dist",
        eslint : false,
        fingerPrint : false
    }
}
```
Renaming fingerprint.js

To overcome the issues caused by adblockers being actively prevailing in certain browsers, the CLI allows you to rename fingerprint.js file by executing the following code.

```javascript
setCustomConfiguration : function(options) {
    options.customConfig = {
        outputFolder : "dist",
        eslint : false,
        fingerPrint : true,
       fingerPrintFileName : "hashMap.js"
    }
}
```

Here, you set the fingerPrint as true and rename the fingerprint.js file as "hashMap". You can rename figureprint.js by configuring build.js.

fingerPrintFileName : 'filename'
Disabling hash for fingerprints

By default, the hash gets generated for the fingerprint file . To ignore it, use 'ignoreFingerPrintHash' as true in build.js

```javascript
setCustomConfiguration : function(options) {
    options.customConfig = {
        outputFolder : "dist",
        eslint : false,
        fingerPrint : false,
        ignoreFingerPrintHash:true
    }
}
```

On doing so, hashing for fingerPrint file will be disabled.

Get Fingerprints

To get the fingerprint of the particular file, you need to intially load the fingerprint.js file to the client and execute the following command

LyteFingerPrint.get(<<fileName>>)

The expected return value is string.

Here is an example for your reference.

LyteFingerPrint.get('app.js')
skip FingerPrints

In Build.js you can specify options.skipTheFingerPrint which is a array that allows you to specify files, directories, or patterns for which fingerprinting should be skipped, even when fingerprinting is enabled. This array can contain file paths,glob patterns, regular expressions.

File Paths: Exact paths to specific files.

Glob Patterns: Patterns using wildcards (*, ?, etc.) to match multiple files or directories. .

Regular Expressions: For more complex and precise matching using regular expression syntax.

If a file's path matches any entry (file path, glob pattern, or regular expression) in the options.skipTheFingerPrint array, fingerprinting will be bypassed for that file.

Let us see an example.

```javascript
module.exports = {
  setCustomConfiguration: function (options) {
      options.customConfig = {
        skipTheFingerPrint: [
        "legacy-code.js", // Specific file
        "temp-folder/", // folder path
        "temp-data/*", // Glob pattern
         /\.map$/\ // Regular expression
        ],
      };
  }
},
```

---

## pod

Pod Components
Introduction

On creating a sLyte app, you can see your html file created within the template folder, your css file created within the styles folder and your script file created in the javascript folder of the components just like the below image.

The role of Pod component

Now, with the Pod configuration, you can encapsulate a set of functionalities or features within a single unit just like the below image.

The image above represent a sample pod component called `welcome-comp`. In this component, you will find templates, scripts, and styles grouped together in a folder with the component's name. You can observe that helpers are enclosed within the pod component.

Generate Pod component

To create a pod app, use the following command. With this command you would be able to generate a pod app with welcome component.

```javascript
slyte new <appName> --podApp
```

Apart from the welcome component, you can also create your own component with the following command.

```javascript
slyte generate component <componentName> [options]
```

Here, options are as follows,
-d [folder] : To create a component inside a folder. It should always be relative to the component's default path.

Creating a component inside Pod component

If you wish to create a component inside pod component, then in such cases use the following option with the slyte generate command

```javascript
slyte generate component <componentName> [options]
```

Here, options are as follows,
-p [podName] : In podApp, a pod-component can have another pod-component within its range. To indicate which pod-component is referred, the produced component should be enclosed with the -p flag.
-d [folder] : To create a component inside a folder. It should always be relative to the component's default path.

Destroying Pod component

To destroy a pod component, use the following command. And while destroying a Pod component, the flag -p in the options is an absolute must.

```html
slyte destroy component <componentName> [options]
```

Here, options are as follows,
-p [podName]: Provide the name of the pod component.

Generating helpers and directives

To generate a helper inside the Pod component, use the below code.

```javascript
slyte generate helper <helperName> [options]
```

Here, options are as follows,
-p [podName] : In podApp, a pod-component can have another pod-component within its range. To indicate which pod-component is referred, the produced component should be enclosed with the -p flag.
-d [folder] : To create a component inside a folder. It should always be relative to the component's default path.

To generate a directive inside the Pod component

To generate a directive inside the Pod component use the below code.

```javascript
slyte generate directive <helperName> [options]
```

Here, options are as follows,
-p [podName] : In podApp, a pod-component can have another pod-component within its range. To indicate which pod-component is referred, the produced component should be enclosed with the -p flag.
-d [folder] : To create a component inside a folder. It should always be relative to the component's default path.

The flag -p or the podName is mandatory for the generation of helpers and directives.
The helpers and directives are not limited to just the pod component; they can also be used for any child or concurrent pod components

---

## webpackconfig

Webpack Configuration
Entry Point

An entry point indicates which module should the CLI use to begin building out its internal dependency graph. Lyte-cli will figure out which other modules and libraries that entry point depends on (directly and indirectly). In simple words, the CLI begins its bundling with the files given in the entry points.

On creating a app, you would see lyte.config.js file just like the below code snippet.

On clicking it, you can find the below code snippet.

```javascript
let path = require("path");
module.exports = function() {
    return {
        initialFileToLoad : path.join(process.cwd(),"app-init.js"),
        entry:{}
    }}
```
Adding a file

All you need to do is just provide the name of the file from which you desire the bundling to get started just like the below code snippet.

```javascript
entry : {
    "app-bundle" : "./app.js"
}
```

Here, the bundling starts from the file 'app.js'.

You can mention the entry point file as an array or as an object. If you are passing additional parameters to it, it is permissible to mention it only as an object.

Additional parameters

The additional parameters can be passed as an object along with the entry file just like the below code snippet. Keep reading to know about the additional parameters.

```javascript
entry : {
   "app-bundle" : {
       import : "./app.js" ,
       runStandalone : true ,
       layoutHTML : "app.html"
       chunk : ['components/javascript/welcome-comp']
       dependsOn: [components/homepage.js]
   },
   "components/javascript/welcome-comp" : ["./components/javascript/welcome-comp.js","components/javascript/welcome-page.js"]
   }
```

Import: Mention the file name or the module that is to be loaded.

runStandalone: This parameter being a boolean, on setting true, if the entry points doesn't depend on each other, in such case, all common chunks are bundled along with the entry points. And on setting as false, if the entry points doesn't depend on each other, the common chunks are bundled separately.

layoutHTML: With this you can provide the layout html for the entry point.

chunk: Here, you can provide the Array of other entry points to be included in this page

dependsOn: Here, you can provide the files upon which the entry point file is dependent on. On setting this parameter, only after the download of the dependent file, the entry point file will be downloaded and executed.

maxSize

With this param, you communicate to the webpack stating to split the files as chunks if the file size exceeds the threshold. The threshold is set with the parameter maxSize in bytes. Have a look at the below code snippet.

When the file splitting becomes unwieldy below a certain threshold, utilize `slyte-import` to import dependencies for an entry point.

```javascript
optimization:{
   splitChunks:{
       maxSize: 10 /*Value in Bytes*/
    }
 }
```

---

## slot

Slot
Introduction

SLOT being a JSP tag support to load all the dependencies of lyte application file.

Dependencies

Install the required external jars from maven

```html
https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind/2.12.7.1
https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core/2.12.3
https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations/2.12.3
```
Setup and Installation

1. Add this slyteImport.tld file in your WEB-INF folder 2. Include this at the beginning of your JSP file. this is mandate as this includes custom tag library
```html
<%@ taglib prefix = "slyte" uri = "WEB-INF/slyteImport.tld"%>
```

Usage
```html
<slyte:import
    fileName= ""
    manifestJson = ""
    mappingJson = ""
    integrityJson = ""
    staticPath = ""
    staticJsPath = ""
    mapFilePath = ""
>
</slyte:import>
```
Property Details

fileName - The file whose dependency chunks are to be loaded at runtime. [MANDATORY]

manifestJson - This json can be found in <<outputFolder>>/manifest.json containing the fingerprint mapping for the source to be loaded.

mappingJson - This json can be found in <<outputFolder>>/mapping.json which is the resource mapper for the application

integrityJson - This json can be found in <<outputFolder>>/integrity.json holding the SRI hashes of the dependency file.

staticPath - If the source to be loaded is from a CDN link mention the basePath using staticPath this will be applied for both JS and CSS dependencies

staticJsPath - To mention a specific CDN link for JS mention it here

staticCssPath - To mention a specific CDN link for CSS mention it here

You can also mention mapFilePath, staticPath, staticJsPath, staticCssPath in web.xml like below

```html
<context-param>
   <param-name>manifestJson </param-name>
   <param-value> </param-value>
</context-param>
<context-param>
    <param-name>mappingJson</param-name>
    <param-value></param-value>
</context-param>
<context-param>
    <param-name>integrityJson</param-name>
    <param-value></param-value>
</context-param>
<context-param>
    <param-name>staticPath</param-name>
    <param-value></param-value>
</context-param>
<context-param>
    <param-name>staticJsPath</param-name>
    <param-value></param-value>
</context-param>
<context-param>
    <param-name>staticCssPath</param-name>
    <param-value></param-value>
</context-param>
```
As api

The same can be expressed as an API

Usage
```html
SlyteImportGenerator generator = new SlyteImportGenerator();
generator.generateScript(<<options>>)
```
Property Details

fileName - This includes the file whose dependency chunks to be loaded at runtime [MANDATE]

manifestJson - This json can be found in <<outputFolder>>/manifest.json which has the fingerPrint mapping for the source to be loaded

This json can be found in <<outputFolder>>/mapping.json which is the resource mapper for the application

This json can be found in <<outputFolder>>/integrity.json which holds the SRI hashes of the dependency file

If the source to be loaded is from a CDN link mention the basePath using staticPath this will be applied for both JS and CSS dependencies.

To mention a specific CDN link for JS mention it here.

To mention a specific CDN link for CSS mention it here.

Option to ignore fingerprint JS file from script loading.

Static Properties

manifestJson, mappingJson, integrityJson also exposed as static properties.

Usage
```html
SlyteImportGenerator.setMappingJson(mappingJson);
SlyteImportGenerator.setManifestJson(manifestJson);
SlyteImportGenerator.setManifestJson(manifestJson);
```

---

## i18n

I18N Compilation
Introduction

Let's deep dive in this document to see about i18n compilation.

Setting default i18n language

The default i18n language can be given in build.js file just like the below code snippet.

```javascript
module.exports = {
version: "1.0.0-RC",
setCustomConfiguration : function(options) {
    options.customConfig = {
        outputFolder : "dist",
        eslint : false,
        defaultI18nLangName: "en"
    }
  }
}
```
Properties file

You need to mention the properties file with the below syntax

#@file=<<file path relative to the app>>

Let us see a below example

```javascript
# @file=registry1/javascript/welcome-comp
# @file=components/javascript/home-comp
user.login=Se connecter
user.logout=Se déconnecter
user.username=Nom d'utilisateur
user.password=Mot de passe
user.profile.update.success=Profil mis à jour avec succès.
user.profile.update.failure=La mise à jour du profil a échoué. Veuillez réessayer.
```

The properties file should be saved with ".properties" extention. For example,'message-fr.properties'

You can also use the same set of properties to multiple files just like the below code snippet.

```javascript
# @file=components/javascript/welcome-comp
# @file=registry1/javascript/welcome-comp
welcome.message=Bienvenue dans notre application!
goodbye.message=Merci d'avoir utilisé notre application. Au revoir!
```
Multiple .properties files

"The filename may include a hyphen (e.g., en.properties or message-en.properties), but it must always specify the language and use the .properties extension."

The filename can and cannot be with an hypen such as en.properties or message-en.properties. But it is absolute necessity to define the language used with '.properties' extention.

```javascript
# @file=registry1/javascript/entirewelcome-comp
notification.message.sent=Votre message a été envoyé.
notification.email.received=Vous avez reçu un nouvel e-mail.
user.login=Connexion
user.logout=Déconnexion
```
```javascript
#@file=registry1/javascript/welcome-comp
notification.message.sent=Votre message a été envoyé avec succès.
notification.email.received=Vous avez reçu un nouvel e-mail dans votre boîte de réception.
```
Property override

If the same property is present in multiple files, the files are prioritized by sorting the filename in alphabetical order.

In the below code snippet, the property 'notification.message.sent' is present in multiple property files.

```html
#@file=registry1/javascript/welcome-comp
notification.message.sent=Votre message a été envoyé.
notification.email.received=Vous avez reçu un nouvel e-mail.
user.login=Connexion
user.logout=Déconnexion
```
```javascript
#@file=registry1/javascript/welcome-comp
notification.message.sent=Votre message a été envoyé avec succès.
notification.email.received=Vous avez reçu un nouvel e-mail dans votre boîte de réception.
```
```javascript
#@file=registry1/javascript/welcome-comp
notification.message.sent=Votre message a été envoyé à l'utilisateur.
```

The output en language file will contain

```javascript
#@file=registry1/javascript/welcome-comp
notification.message.sent=Votre message a été envoyé à l'utilisateur.
notification.email.received=Vous avez reçu un nouvel e-mail.
user.login=Connexion
user.logout=Déconnexion
```

If any property is not given in a particular language, then that property will be taken from the default language.

Using i18n in an application

To use i18n inside the application, import I18n from "@slyte/i18n" and include it in the lookups array just like the below code snippet.

```javascript
import { Lyte } from "@slyte/core";
import  {DemoAppDb} from "./data-store/db";
import {DemoAppRouter}  from "./router/router";
import  {DemoAppComponentRegistry}  from "./components/component";
import {I18n} from "@slyte/i18n"

class DemoApp extends Lyte{
    env = {
        lang: "en"
    }
    lookups(){
        return [{component : DemoAppComponentRegistry}, {router : DemoAppRouter} , {db : DemoAppDb},I18n];
    }
}
export {DemoApp};
```

---

## build

Build Configuration

The sLyte application is built based on the procedures mentioned in the build.js file, which can be found at build/build.js in the application directory. CLI also gives you the flexibility to add any configuration or any task that needs to be executed during the build process.

Folder Structure

build

build.js /* Procedures for building the application */

Configuring the build options

This function is used to set the outputFolder which contains the compiled files. By default, CLI provides it under the dist folder. You can also recieve the complied files from the CLI in any folder of your choice.

```javascript
setCustomConfiguration : function(options) {
    options.customConfig = {
        outputFolder : "dist"
    }
}
```
Initiating the build process

In this method, the compilation process will be intiated. You can also write a custom function to be executed before and after build process. The custom function which has to be executed before the build process must be specified before the init and the custom function that has to be executed after the build process must be specified after the build.

```javascript
build : async function (options)  {
    buildUtils = require(path.join(options.cliRoot,'lib','utilities','buildUtils'));
    /* Building of modules starts. Custom modules can be added in build function.*/
    await buildUtils.init(options); /* Provides options to buildUtils.*/
    await buildUtils.build(options);
},
```
Default build procedures

By default, CLI incorporates the routes and components. If your application has any helpers, mixers or any files that has to taken into consideration while building, you can mention it in build.js. Now let us see what happens while building the routes and components.

Building routes:

The routes that has been mentioned in map.js gets imported and gets compiled automatically.

Building components:

While building the components, CLI bundles the template files, style files and the JS files into a single JS file. Based on your requirements, CLI gives you an option to bundle the CSS files along the the JS files. You can set the property 'includeStyle: true' to bundle it and set the property 'includeStyle: false' to consider not bundling the CSS and the JS files.

```javascript
includeStyle : true /* toggle this boolean to include style into component's javascript file */
```

Rather than bundling the CSS file, you can also use the link tag just like the below code snippet.

```javascript
includeLinkTag=true;
```

On doing so, the css file will be added as a link tag to the JS file. And now in the dist folder you can see the JS and the CSS file.

```javascript
isBaseHref=true;
```

On setting isBaseHref true, the leading forward slash (/) is removed from absolute paths to support <base> tag in HTML.

Let us see an example with and without isBaseHref

```javascript
<link rel="stylesheet" href="/styles/main.css">>
```
```javascript
<link rel="stylesheet" href="styles/main.css">
```
Watching for file changes

A Watcher watches a directory and all its descendant directories for changes, deletions, and additions of files and directories. Changes in components, routes, models, and configuration JSON files are watched, and they are built once again if changes occur. You can also write custom watcher function to watch the files. And that particular file, requiring watcher function must require sane in build.js. Have a look at the below code to see how the custom watcher function works.

obj (object)
path (String) path of the directory to watch
ignored (optional) (Array) a glob, regex, or file path to ignore from watching
glob (optional) (Array) a single string glob pattern to watch
```javascript
var obj = {
    path : options.root ,
    ignored : [
        '/bower_components/' ,
        '/node-modules/'
    ] ,
    glob : [ '**/*.css' , '**/*.js' ]
}
var sane=require('sane');
/* sane is the npm package for watching the files */
var watcher = sane ( obj.path , {
    glob : obj.glob ,
    ignored : obj.ignored
} ) ;
watcher.on ( 'change' , function ( filePath , root , stat ) {
    /* code to execute when the file changes */
} ) ;
watcher.on ( 'add' , function ( filePath , root , stat ) {
    /* code to execute when the file new added */
} ) ;
watcher.on ( 'delete' , function ( filePath , root , stat ) {
    /* code to execute when the file deleted */
} ) ;
```
Available utilities
Slicer

This feature helps the CLI to let know that certain lines of code are not to be considered when it is indicated with @Slicer.someStart and @Slicer.somesEnd.

To enable this feature, add the below code in the setCustomConfiguration in your build.js file

```javascript
options.slicer ={
 some:false
}
```

Where, 'some' can be any key inside the slicer object. If 'some' is set false or undefined, the code within the specified markers will be removed. This feature can be used as a single lined comment and multi lined commet just like the below code snippet.

```html
var a=number;
// @Slicer.someStart
var a="str";
console.log(a);
// @Slicer.someEnd
console.log(a)
```
```javascript
var a=number;
/* @Slicer.someStart */
var a="str";
console.log(a);
/*  @Slicer.someEnd */
console.log(a)
```
```javascript
var a=number;
console.log(a)
```

In the production mode, the 'development' key in the slicer object is set as false. As set false, the code given with the @Slicer.developmentStart and @Slicer.developmentEnd, when given by the user will not be considered in the production mode.

In the development mode, the 'production' key in the slicer object is set as false. As set false, the code given with the @Slicer.productionStart and @Slicer.productionEnd, when given by the user will not be considered in the development mode.

Error Handling: If a user attempts to use $ in a slicer key, an error will be thrown as $ denotes internal slicer.

Proxy configuration

Let us consider an example, where the data is residing in different server. Now, the request that is being intiated from your app gets redirected to the server with the help of options.devserver.

Let us consider an example, where you have an route called as api of someapp serving at port 4000. Now, if you want to access the data of that particular api, you can set the options.devServer in your main app. Now from your main app you can access the api route and get it rendered in any different port of your choice.

```javascript
options.devServer={
	proxy:[{
		context:['/api'], //Name of your request
		target:'http://local:2000' //destination for the request
	}
	]
}
```
Debugging configuration

There are cases where you feel the need to debug the variables that has been imported and used in a file. To support such feature, CLI makes all the imported variables available in "_" during the file execution.

If "_" clashes with your any of your app's variable, then you can change the variable name as desired by setting the below configuration in your build.js using options.definePropertyVar

```javascript
options.definePropertyVar = <<variableNameToBeChanged>>
```
Subresource Integrity

---

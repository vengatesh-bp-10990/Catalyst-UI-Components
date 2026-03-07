import { _delimit, _dynamicRouteCheck, _frameQueryParams, _getObj, _strPresence, _splitPath, _wildcardRouteCheck } from "@slyte/router/src/router-utils";
import { deepCopyObject } from '@slyte/core/src/lyte-utils';
import { _getPathForRoute } from "./router-utils";

const parseRouteMappingStr = "parseRouteMapping",
functionStr = "function";
var  mapObj = {}, 
pathStringArr = [], 
routeStringArr = [],
injectedRoutes = {},
_config,
_initialRegisterRoute,
routesObj;

class RouterMap {
    constructor() {
        this.aliasPrefix = [];
        this.interceptor = function(routeName, obj) {
            if(typeof obj == "object") {
                this.route.apply(this, Array.from(arguments))
                _getObj(routeStringArr.concat(routeName), _config.routes).__lp.ignoreHit = true;
            } else {
                console.error("Type of second arugment should be an object.")
            }
        };
        this.injector = this.interceptor;
        this.lazyRoute = this.route;
        this.mountRoute = this.route;

        this.setAlias = function(lyte,_config,alias,route) {
            var _alias="";
            if(alias) {
                if(this.aliasPrefix.length) {
                    this.aliasPrefix.forEach((a) => {
                        _alias += a;
                    });
                }
                alias = _alias+alias
            };
            if(_config.aliasRouteMap[alias]) {
                lyte.error('Duplicate entries found for alias "'+ alias +'". Existing entry will be overwritten');
            }
            _config.aliasRouteMap[alias] = route;
            _config.routeAliasMap[route] = alias;
        };
    }

    route(routeName, obj, nestedFn) {
        // var lazyRoute;
        // if(typeof obj.class == functionStr && obj.class.name == "__routeProm__") {
        //     // className = obj.cName;
        //     lazyRoute = true
        // }
        // if(!obj.class) {
        //     return "No route file map"
        // };
        if(typeof obj == "object"/*  || lazyRoute*/) {
            if(!obj.path) {
                obj.path = _delimit(routeName);
            } else if(!obj.path.source) {
                if(_strPresence(obj.path,"?")) {
                    var split = obj.path.split('?');
                    obj.defQP = _frameQueryParams(split[1]);
                    obj.path = split[0] || "/";
                }  
            }
            if(obj.queryParams) {
                obj.defQP = obj.queryParams;
            }
        } else {
            if(typeof obj == functionStr) {
                nestedFn = obj;
            }
            obj = {path : _delimit(routeName) /* ,cName : obj.class.name */};  
        }
        // if(_getObj(pathStringArr,_config.routeHash)[obj.path]) {
        //     console.error("Duplicate object path at same level is provided");
        // }
        mapObj = {
            __lp : {}
        };
        _getObj(pathStringArr,_config.routeHash)[obj.path] = mapObj
        if(obj.path == '/') {
            pathStringArr.push('/');
        } else {
            var trimedPath = obj.path;  
            if(_dynamicRouteCheck(trimedPath) || _wildcardRouteCheck(trimedPath)) {
                _splitPath(trimedPath).every(function(seg,index,arr) {
                if(_dynamicRouteCheck(seg) || _wildcardRouteCheck(seg)) {
                    var dpKey;
                    if(_dynamicRouteCheck(seg)) {
                        dpKey = seg.replace(":","");
                        if(obj.regex) {
                            let _regex = obj.regex;
                            obj.regex = {}
                            if(typeof _regex == "string") {
                                obj.regex[dpKey] = _regex
                            }
                            // if(_regex[dpKeys].indexOf(":") != -1) {
                            //     console.log("Dont provide colon for regex");
                            // }
                            obj.regex[dpKey] = _regex[dpKey]
                        }
                    } else  {
                        dpKey = seg.replace("*","");
                        obj.wildcard = mapObj.__lp.wildcard = true;
                        obj.sufix = mapObj.__lp.sufix = [];
                        for(var i = index+1,j; j = arr[i]; i++) {
                            mapObj.__lp.sufix.push(j);
                        }
                    }
                    obj.dpKeys = mapObj.__lp.dpKeys = obj.dpKeys ? (obj.dpKeys.push(dpKey) && obj.dpKeys) : [dpKey];
                    obj.dIndex = mapObj.__lp.dIndex = obj.dIndex ? (obj.dIndex.push(index) && obj.dIndex) : [index];
                }
                return true;
                });
            } 
            pathStringArr.push(trimedPath);
        }
        if(obj && obj.mount) {
            mapObj.__lp.mount = true;
        }
        var routesObj = _getObj(routeStringArr,_config.routes);
        routesObj[routeName] ? (Object.assign(routesObj[routeName].__lp,obj)) : (routesObj[routeName] = {__lp : obj});
        routeStringArr.push(routeName);
        mapObj.__lp.route = Array.from(routeStringArr);
        if(obj.alias) {
            this.setAlias(this.lyte,_config,obj.alias,mapObj.__lp.route.join('.'))
        }
        if(obj.handler.name == "__routeProm__") {
            // obj.then = function(routeStringArr,data) {
            //     debugger;
            //     _initialRegisterRoute(routeStringArr,data[obj.cName]);    
            // }.bind(undefined,Array.from(routeStringArr))
        } else {
            _initialRegisterRoute(routeStringArr,obj.handler);
        }
        if(nestedFn) {
            nestedFn.call(this,{});
        }
        checkForInjection({obj, routeNames : [routeName], routeStringArr})
        // if(obj && obj.mount) {
        //     obj.mount.prototype.map.call(this,{});
        // }
        routeStringArr.pop();
        pathStringArr.pop();
        this.aliasPrefix.pop();
    }
    include(mapClass, obj) {
        if(mapClass && mapClass instanceof Promise) {
            obj = obj || {};
            obj._routeStringArr = Array.from(routeStringArr);
            obj._pathStringArr = Array.from(pathStringArr);
            mapClass.then(function(mapClass) {
                this.include(mapClass[obj.cName], obj);
            }.bind(this));
        } else {
            try {
                let _routeNames
                obj = obj || {};
                routeStringArr = obj._routeStringArr || routeStringArr;
                pathStringArr = obj._pathStringArr || pathStringArr;
                if(obj.aliasPrefix) {
                    this.aliasPrefix.push(obj.aliasPrefix)
                }
                if(obj.injectTo) {
                    _routeNames = Object.keys(_getObj(routeStringArr, _config.routes))
                }
                obj && new mapClass().map.call(this,{});
                // _getObj(routeStringArr, _config.routes).__lp.ignoreHit = true; check this code. getting error when routeArr is empty
                if(obj.injectTo) {
                    obj._fromInclude = true;
                    _routeNames = Object.keys(_getObj(routeStringArr, _config.routes)).filter(value => !_routeNames.includes(value))
                }
                checkForInjection({obj, routeNames : _routeNames, routeStringArr})
            } catch(e) {
                console.error(e, "Error in includes")
            }
        }
    }
}

RouterMap.__lMod = "RouterMap";

function _addMap({MapClass, route, lyte, config, initialRegisterRoute}) {
    if(this.__lp.routesConfigured) {
        _parseRouteMap.call(this, MapClass, {lyte, config , initialRegisterRoute,   addTo : route});
    } else {
        var clr = setInterval(function() {
            if(this.__lp.routesConfigured) {
                clearInterval(clr);
                _parseRouteMap.call(this, MapClass, {lyte, config , initialRegisterRoute,   addTo : route});
            }
        }.bind(this),0);
    }
}

function _parseRouteMap(MapClass,{ lyte, config , initialRegisterRoute, addTo}) {
    _config = config;
    _initialRegisterRoute = initialRegisterRoute;
    lyte.time(parseRouteMappingStr);
    routesObj = _config.routes ? _config.routes : (_config.routes = {})
    // routeHash = config.routeHash;
    if(addTo) {
        routeStringArr = addTo ? addTo.split(".") : [];
        pathStringArr = [];
        var _routesObj = _getObj(routeStringArr, config.routes);
        if(!_routesObj) {
            console.error(addTo+" is not specified in router map.");
            return;
        }
        _routesObj = config.routes
        routeStringArr.forEach(function(r) {
            pathStringArr.push((_routesObj = _getObj(r,_routesObj)).__lp.path);
        })
        // routeHash = _getObj(pathStringArr,config.routeHash);
    }
    var ins = new MapClass({ lyte }),
    err = ins.map(_config);
    if(typeof err == "string") { 
        lyte.log(err)
    } else {
        injectRoute()
    }
    lyte.time(parseRouteMappingStr);
    return routesObj;
}

function _traverseMap(path, config) {
    if(!path) {
     return;
    }
    var selectedPaths = [],
    fragment;
    if(config.historyType) {
        var fragSplit = path.split('#');
        if(fragment = fragSplit[1]) {
            path = fragSplit[0];
        }
    }
    var pathSplit = path.split('?');
    path = decodeURI(pathSplit[0]);
    if(path == '/') {
        if(_getObj(['/'],config.routeHash)) {
            selectedPaths.push([path]);  
        } else {
            return;
        }
    } else {
        var params = pathSplit[1],
        pathSplitArr = _splitPath(path);
        var pathLevel = 0,
        pathArrLevel = [0],
        exactMatch,
        matchedPath = [];
        matchedPath.dynamicParams = [];
        findPossibleMatch(config.routeHash);

        function checkArrayMatch(arr1,arr2,l,pathObj,matchedPath) {
            if(!(pathObj.__lp.wildcard || pathObj.__lp.dpKeys)) {
            var prevObj;
            if(prevObj = _getObj(matchedPath,config.routeHash).__lp) {
                if(prevObj.wildcard) {
                    var pathArr = arr2.slice(l);
                    if(!(l += pathArr.indexOf(arr1[0]))) {
                        return false;
                    }  
                    }
                }
            }
            for(var i = 0,a1;a1 = arr1[i]; i++,l++) {
                if(a1 != arr2[l]) {
                    if(pathObj.__lp.dpKeys && !pathObj.__lp.wildcard) {
                        let reg = pathObj.__lp.regex && pathObj.__lp.regex[pathObj.__lp.dpKeys];
                        if((reg && reg.test(arr2[l]) || _dynamicRouteCheck(a1))) {
                            return ++l;
                        } else {
                            return false;  
                        }
                    } 
                    if(_wildcardRouteCheck(a1)) {
                        if(pathObj.__lp.sufix.length) {
                            l = arr2.indexOf(pathObj.__lp.sufix[0])-1; 
                        }
                    } else if(arr1[l] == '/') {
                        l--;
                    } else {
                        return false;  
                    }
                }
            }
            return l;
        }

        function findPossibleMatch(mapObj) {
            for(var mapPath in mapObj) {
                if(!exactMatch) {
                    var pathObj = mapObj[mapPath],
                    innerLevel;
                    if(mapPath != "__lp") {
                        var mapPathSplit = _splitPath(mapPath);
                        if(mapPathSplit) {
                            if((innerLevel = checkArrayMatch(mapPathSplit,pathSplitArr,pathLevel,pathObj,matchedPath)) !== false) {
                            pathArrLevel.push(innerLevel);
                            pathLevel = pathArrLevel[pathArrLevel.length-1];
                                if(pathSplitArr.length == pathLevel || pathObj.__lp.mount) {
                                    var path = Array.from(matchedPath.concat(mapPath));
                                    if(pathObj["/"]) {
                                        path = path.concat('/');
                                    }
                                    selectedPaths.push(path);
                                    if(pathObj.__lp.wildcard || pathObj.__lp.dpKeys || pathObj.__lp.mount) {
                                        pathArrLevel.pop();
                                        pathLevel = pathArrLevel[pathArrLevel.length-1];
                                    } else {
                                        if(!/[:*]/.test(path.join(''))) {
                                            exactMatch = path;  
                                        }
                                        pathArrLevel.pop();
                                        return;
                                    }
                                } else {
                                    var innerRoutes = Object.keys(pathObj);
                                    matchedPath.push(mapPath);
                                    if(pathSplitArr[pathLevel]) {
                                        if(pathObj.__lp.wildcard && !pathObj.__lp.sufix.length && innerRoutes.length == 1) {
                                            var wildcard = Array.from(matchedPath);
                                            if(pathObj["/"]) {
                                                wildcard = wildcard.concat('/');
                                            }
                                            selectedPaths.push(wildcard);
                                        } else if(innerRoutes.length > 1) {
                                            findPossibleMatch(pathObj);    
                                        }
                                    } 
                                    matchedPath.pop();
                                    pathArrLevel.pop();
                                    pathLevel = pathArrLevel[pathArrLevel.length-1];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(exactMatch) {
        return [exactMatch,path,params,fragment];
    } else if(selectedPaths.length == 1) {
        return [selectedPaths[0],path,params,fragment];
    } else if(selectedPaths.length) {
        return [getBestMatch(getStaticMatches(selectedPaths),selectedPaths),path,params,fragment];

        function getBestMatch(staticMatches, selectedPaths, position) {
            position = position || 0;
            var traversedStaticMatch = traversedStaticMatch || traverseArray(staticMatches),
            maxStaticSeg = Math.max(...traversedStaticMatch[position]),
            duplicatePos;
            while(duplicatePos = checkForArrayDuplicates(traversedStaticMatch[position], maxStaticSeg, selectedPaths, staticMatches)) {
                position = position+1;
                var newSelectedPaths = [],
                newStaticMatches = [];
                for(var i = 0,l = duplicatePos.length; i < l; i++) {
                    newSelectedPaths.push(selectedPaths[i]);
                    newStaticMatches.push(staticMatches[i]);
                }
                var newSelectedPathsFiltered = [],
                newStaticMatchesFiltered = [];
                for(var i = 0,l = newStaticMatches.length; i < l; i++) {
                    if(newStaticMatches[i][position] != undefined) {
                        newSelectedPathsFiltered.push(newSelectedPaths[i]);
                        newStaticMatchesFiltered.push(newStaticMatches[i]);
                    }
                }
                if(!newSelectedPathsFiltered.length) {
                    return newSelectedPaths[0];
                } else if(newSelectedPathsFiltered.length == 1) {
                    return newSelectedPathsFiltered[0];
                }
                return getBestMatch(newStaticMatchesFiltered, newSelectedPathsFiltered, position);
            }
            return selectedPaths[traversedStaticMatch[position].indexOf(maxStaticSeg)];
        }
        

        function getStaticMatches(selectedPaths) {
            var staticSegmentsInMatch = [];
            for(var i = 0,l = selectedPaths.length; i < l; i++) {
                var arr = Array.from(selectedPaths[i]),
                staticPath = 0,
                result = [];
                if(arr[0] == "/") {
                    arr.shift();
                }
                if(arr[arr.length-1] == "/") {
                    arr.pop();
                }
                var counter = -1;
                arr.every(function(seg,i) {
                    var noWildcard = true;
                    _splitPath(seg).every(function(innerSeg,j) {
                    counter++;
                    if(innerSeg == pathSplitArr[counter]) {
                        staticPath++;
                        if(arr.length == i+1){
                        result.push(staticPath);
                        }
                        return true;
                    } else if(innerSeg.indexOf(':') != -1) {
                        result.push(staticPath);
                        staticPath = 0;
                        return true;
                    } else {
                        if(innerSeg.indexOf('*') != -1) {
                        noWildcard = false;
                        }
                        result.push(staticPath);
                        return false;
                    }
                    });  
                    return noWildcard;
                });
                staticSegmentsInMatch.push(result);
            }
            return staticSegmentsInMatch;
        }
    } else {
        return false;
    }
}


function checkForArrayDuplicates(arr, value) {
    var pos = [];
    for(var i = 0,l = arr.length;i < l; i++) {
        if(arr[i] == value) {
            pos.push(i);
        }
    }
    return pos.length == 1 ? false : pos;
}

function alignRouteHash(obj, from, to, {fromInclude}) {
    for(var key in obj) {
        if(key == "__lp") {
            let routeObj = _getObj(obj[key].route, _config.routes);
            obj[key].route = obj[key].route.slice(from.length)
            obj[key].route.unshift(...to);
            _initialRegisterRoute(fromInclude ? obj[key].route : obj[key].route.concat[to],routeObj.__lp.handler);
        } else {
            alignRouteHash(obj[key], from, to)
        }
    }
    return obj;
}

function injectRoute() {
    for(var key in injectedRoutes) {
        let { injectTo, obj, routeNames} = injectedRoutes[key],
        currentInjection = injectedRoutes[key];
        if(injectTo.source && !currentInjection.completed) {
            injectedRoutes[key].completed = [];
        }
        injectTo = Array.isArray(injectTo) ? injectTo : (injectTo.source ? getRouteBasedOnRegex({routes : _config.routes, regex : injectTo}) : [injectTo])
        if(Array.isArray(injectTo)) {
            while(injectTo[0]) {
                if(injectTo.source) {
                    injectTo.concat(getRouteBasedOnRegex[{routes : _config.routes, regex : injectTo[i]}])
                    injectTo.splice(0, 1);
                    break;
                }
                let routeStringArr = [],
                pathStringArr = [],
                pathObj = _config.routeHash,
                route = injectTo[0];
                if(currentInjection.completed && currentInjection.completed.indexOf(route) != -1) {
                    injectTo.splice(0, 1);
                    break;
                }
                let routesObj = _config.routes;
                try {
                    route.split(".").forEach(function(r,i) {
                        routeStringArr.push(r)
                        try {   
                            routesObj = routesObj[r];
                            pathObj = pathObj[routesObj.__lp.path]
                            pathStringArr.push(routesObj.__lp.path);
                        } catch(e) {
                            injectTo.splice(0, 1);
                            console.error(`There is no route declaration for route ${route}`)
                            return;
                        }
                    })
                    if(!routesObj) {break;}
                    routeNames.forEach(function(routeName) {
                        let fromInclude = obj._fromInclude,
                        orgRouteArr =  fromInclude ? key.split(".").concat(routeName) : key.split("."),
                        newRouteObj = Object.assign({},_getObj(orgRouteArr, _config.routes));
                        delete newRouteObj.__lp.injectTo;
                        delete newRouteObj.__lp.ignoreHit;
                        _getObj(routeStringArr,_config.routes)[routeName] = newRouteObj
                        let orgPathObj = _getPathForRoute(orgRouteArr, _config.routes),
                        pathObj = _getObj(pathStringArr, _config.routeHash);
                        pathObj[newRouteObj.__lp.path] = alignRouteHash(deepCopyObject(_getObj(orgPathObj,_config.routeHash)),key.split("."), routeStringArr, {fromInclude})
                    })
                    injectTo.splice(0, 1);
                    // _initialRegisterRoute(routeStringArr,obj.handler);
                    if(currentInjection.injectTo.source) {
                        currentInjection.completed.push(route)
                    }
                    if(injectTo.length == 0) {
                        if(!currentInjection.injectTo.source) {
                            delete injectedRoutes[key]
                        }
                        return
                    } 
                } catch(e) {
                    // waiting for route to be added dynamically
                    injectTo.splice(0, 1);
                    break;
                }
            }
        }
    }
}

function getRouteBasedOnRegex({routes, regex, results, parentRoute}) {
    parentRoute = parentRoute || [];
    results = results || [];
    for(var key in routes) {
        if(key != "__lp") {
            if(regex.test(key)) {
                results.push(Array.from(parentRoute).concat(key).join("."))
            } else if(typeof routes[key]) {
                parentRoute.push(key);
                getRouteBasedOnRegex({routes : routes[key], regex, results, parentRoute})
                parentRoute.pop();
            }
        }
    }
    return results;
}

function checkForInjection({obj,routeNames}) {
    if(obj.injectTo) {
        injectedRoutes[routeStringArr.join(".")] = {
            obj,
            routeNames,
            injectTo : obj.injectTo
        }
    }
}

function traverseArray(arr) {
    var res = [],
    maxArrLen = 0;
    for(var i = 0,l = arr.length; i < l; i++) {
        var a = arr[i];
        maxArrLen = a.length > maxArrLen ? a.length : maxArrLen;
    }
    for(var i=0,a ;a = arr[i]; i++) {
        for(var j=0; j<maxArrLen; j++) {
            res[j] = res[j] || [];    
            res[j][i] = a[j];
        } 
    }
    return res;
}

export {
    _addMap,
    _parseRouteMap,
    _traverseMap,
    RouterMap
}

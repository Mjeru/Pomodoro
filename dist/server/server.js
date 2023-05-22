/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.DELETE_TASK = exports.editTask = exports.EDIT_TASK = exports.decTomato = exports.DEC_TOMATO = exports.incTomato = exports.INC_TOMATO = exports.addTask = exports.ADD_TASK = void 0;
var generateRandomIndex_1 = __webpack_require__(5);
exports.ADD_TASK = "ADD_TASK";
var addTask = function (title) { return ({
    type: exports.ADD_TASK,
    task: { title: title, complete: 0, tomato: 1, id: (0, generateRandomIndex_1.generateRandomString)() },
}); };
exports.addTask = addTask;
exports.INC_TOMATO = "INC_TOMATO";
var incTomato = function (id) { return ({
    type: exports.INC_TOMATO,
    id: id,
}); };
exports.incTomato = incTomato;
exports.DEC_TOMATO = "DEC_TOMATO";
var decTomato = function (id) { return ({
    type: exports.DEC_TOMATO,
    id: id,
}); };
exports.decTomato = decTomato;
exports.EDIT_TASK = "EDIT_TASK";
var editTask = function (id, title) { return ({
    type: exports.EDIT_TASK,
    id: id,
    title: title,
}); };
exports.editTask = editTask;
exports.DELETE_TASK = "DELETE_TASK";
var deleteTask = function (id) { return ({
    type: exports.DELETE_TASK,
    id: id,
}); };
exports.deleteTask = deleteTask;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.initialState = void 0;
var redux_1 = __webpack_require__(24);
var redux_devtools_extension_1 = __webpack_require__(25);
var redux_thunk_1 = __importDefault(__webpack_require__(26));
var reducer_1 = __webpack_require__(27);
var generateRandomIndex_1 = __webpack_require__(5);
exports.initialState = {
    tasks: [
        {
            title: "Сверстать сайт",
            tomato: 1,
            complete: 0,
            id: (0, generateRandomIndex_1.generateRandomString)(),
            done: false
        },
        {
            title: "Aдаптив",
            complete: 0,
            tomato: 1,
            id: (0, generateRandomIndex_1.generateRandomString)(),
            done: false
        },
    ],
};
exports.store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(28);
var generateRandomString = function () {
    return Math.random().toString(36).substring(2, 15);
};
exports.generateRandomString = generateRandomString;
exports.assignId = (0, assoc_1.assoc)("id", (0, exports.generateRandomString)());
var generateId = function (obj) { return (0, exports.assignId)(obj); };
exports.generateId = generateId;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(9));
var server_1 = __importDefault(__webpack_require__(10));
var indexTemplate_1 = __webpack_require__(11);
var App_1 = __webpack_require__(12);
var app = (0, express_1.default)();
var react_1 = __importDefault(__webpack_require__(0));
var server_2 = __webpack_require__(55);
app.use("/static", express_1.default.static("./dist/client"));
app.get("/*", function (req, res) {
    var html = server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, (0, App_1.App)()));
    res.send((0, indexTemplate_1.indexTemplate)(html));
});
app.listen(3000, function () {
    console.log("server started on port http://localhost:3000");
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Pomodoro</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n    if (window.localStorage.getItem('token') && window.localStorage.getItem('token') === 'undefined'){\n        window.localStorage.removeItem('token')\n    }\n    if (!window.localStorage.getItem('token') && '".concat(token, "' !== 'undefined'){\n        window.localStorage.setItem('token','").concat(token, "')\n    }\n    </script>\n</head>\n\n<body>\n    <div id=\"react_root\">").concat(content, "</div>\n    <div id=\"modal_root\"><div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(13);
var Layout_1 = __webpack_require__(14);
__webpack_require__(17);
var Header_1 = __webpack_require__(19);
var react_redux_1 = __webpack_require__(2);
var store_1 = __webpack_require__(4);
var react_router_dom_1 = __webpack_require__(29);
var NotFound_1 = __webpack_require__(30);
var Content_1 = __webpack_require__(32);
function AppComponent() {
    var _a = (0, react_1.useState)(false), mouted = _a[0], setMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.NotFound, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Layout_1.Layout, null,
                    react_1.default.createElement(Header_1.Header, null),
                    react_1.default.createElement(Content_1.Content, null)) })),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement("span", null) }))));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(16));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(18);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.cdnfonts.com/css/sf-ui-display);"]);
// Module
exports.push([module.i, ":root {\n  --black: #333333;\n  --orange: #cc6633;\n  --red: #dc3e22;\n  --green: #a8b64f;\n  --green2: #a8b64f;\n  --green3: #899441;\n  --whiteLightness: 100%;\n  --white: hsl(0, 0%, var(--whiteLightness));\n  --greyF4: #f4f4f4;\n  --greyE4: #e4e4e4;\n  --grey33: #333333;\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n  --grey-demi-dark: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nbody {\n  min-height: 1024px;\n  padding: 0;\n  margin: 0;\n  background-color: var(--white);\n  font-size: 14px;\n  line-height: 16px;\n  font-family: \"SF UI Display\", serif;\n  position: relative;\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(21));
var Icon_1 = __webpack_require__(1);
var Logo_png_1 = __importDefault(__webpack_require__(23));
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement("div", { className: header_css_1.default.container },
            react_1.default.createElement("div", { className: header_css_1.default.logoBlock },
                react_1.default.createElement("img", { src: Logo_png_1.default }),
                "pomodoro_timer"),
            react_1.default.createElement("div", { className: header_css_1.default.statBlock },
                react_1.default.createElement(Icon_1.Icon, { iconName: "statistic", size: 16 }),
                "Statistic"))));
}
exports.Header = Header;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG",
	"container": "header__container--2eZxl",
	"logoBlock": "header__logoBlock--2nQWQ",
	"statBlock": "header__statBlock--2YowI"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function Icon(props) {
    var iconName = props.iconName, size = props.size;
    var iconSvg;
    switch (iconName) {
        case 'addButton':
            iconSvg = (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "25", cy: "25", r: "25", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z", fill: "white" })));
            break;
        case 'disDec': {
            iconSvg = (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z", fill: "#C4C4C4" })));
            break;
        }
        case 'delete': {
            iconSvg = (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z", fill: "#A8B64F" })));
            break;
        }
        case 'edit': {
            iconSvg = (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.825 2.9875 13.825 2.515 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z", fill: "#A8B64F" })));
            break;
        }
        case 'dec': {
            iconSvg = (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#A8B64F" }),
                react_1.default.createElement("path", { d: "M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z", fill: "#A8B64F" })));
            break;
        }
        case 'inc': {
            iconSvg = (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#A8B64F" })));
            break;
        }
        case 'menu': {
            iconSvg = (react_1.default.createElement("svg", { width: "26", height: "6", viewBox: "0 0 26 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "#C4C4C4" }),
                react_1.default.createElement("circle", { cx: "13", cy: "3", r: "3", fill: "#C4C4C4" }),
                react_1.default.createElement("circle", { cx: "23", cy: "3", r: "3", fill: "#C4C4C4" })));
            break;
        }
        case 'statistic':
            {
                iconSvg = (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z", fill: "#DC3E22" })));
            }
            break;
        default:
            iconSvg = (react_1.default.createElement("svg", { width: size !== null && size !== void 0 ? size : '15', height: size !== null && size !== void 0 ? size : '15', viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#999999" })));
    }
    return iconSvg;
}
exports.Icon = Icon;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgBzZjfTxxVFMfPvQMEFkhXWqiWKLMUTJZGhUSNMSkMMTE2NQovPvhi+xdA/wLKUxNf0Afja31q36DRVmNiGKn6RCIaC7HF7NSIhFLt8GOXZXfn3p4zw0z31+yvgXa/yWbu3Lkz+7nnnnPuD4CAunZz7PL1Wx/K67c+mIEjEIeA4ky+5pTY5FFABgZkkk0zAPPgbvLa1+9rcIgKDPjR+bklYbFx954pypRbvvKlpn76hTZxZUZToUY1QJWamdHCmSY+IaQckyBNxmHpuRsGpN7uMhPPt4Sxibb48SuzP73eEd63mNaYEqbF2A2oUayaxjFNDYPgn+Afjhk9IW3lTBgSrU4fW9ub4ERns13eWU/A/3sZuzzwhwkDy1smSJgTCv+qX1/VoQpVBEhgGcEn0R8mJEDYrY8j3IJ20obknMGLartdv7uTgv82k9Aaz8B7N9fs56F45uAPpSG4crFS0LKAf53tncRWU9lg2cqGJEACTaL1NtCK4UcpiLc1QLrRcfUTCH1qbQ+6/0kQ/NVtRVwa0g2zJkCymiWVWZBSgzIiyB/efQG6Th+DhgYGmYyAtb93i7YlS4bNFPTd3YauzaTBuRyN6IYB1QAinCoEn0erqcWe/9sdwl+LDUaWw0Cwrx0vtUFzC9bF07C5see1b0wL6P9zG3qMOIQSmTwAaVhcjr+sG0sVAZaCI6DFN4/Dw4NgKKbmZgVSCCyE9OqG5zegE4e3hEyFi6FilizIg5jTZvwsR76WD+cOV/SO40rJpJUDZ783ehIW3zgOiZBvVgsLweZ/pSyRp5w3KCAkg7FiX1jOSik0ZD2xXXT4BFpm364z1Lac9mQ1srb7zv1IGzzsaoa3ft60O5UvCUxtR+Ng8WJ2vTfE5Yb2u/Pdni/13duxy9n6Fp+7MBQI5zC9OOCt8PtQhxfJlHre+X694H0PlIvRft3Q3XtviIXFx/yGduXMMRvs3DdrEF3eKvi4GW7y4FwIVyoGBgG5eZA6S9B+Yhabyr5/4oMMJvxeit7Zgld/e+Tb63RTriv3GLkphoCH9Q0Pch2zgD8h0+5pqpYDGNP6B/2s5/5BNep8sF/0GwRJnSSLl1K2FZ2uC2sEDkkUPPm5LhsyinMzWdz1yeKETHMj2m4lsAICyB06AhhAdyilfgywzgfJ0oCoNgtGPEC/ebZSNaUc36R86Ge9bEXLdMIW4xpdnNCTMhAg+RVZhdJPJSozq9hiUqp0dezMglmQRAFwqGJskC4HjsAMqFPZgE82PfUnx4JSGlCncqKYsx+h3nRgNBtQAUuH+pPtdjZghPYFUupQT2Jyji5eOpeKnIY6UpqD7XY5S/7V4d4YlFg0PDXhaPbdjo1SMXdC5OIS1IOYvOoV85+tno3MQ8DFQzBJo28hFnHvCpYUaUXSnsCAZ6Q07pOz7wsAo7j1wy3g+LOYXRiIy9G8rWfRRRmmnSX5lP2R4E4vGNOF9SWEO71BS/BZOOLI9oNznpXRCm5HG3E7CkcCKQ1FyguR24bvVFvx+eBdrfcCF0CbGRWCy0SrfbbN4fOaT7f8FAgUEzBjUq8EDGoFdEX+iScRI3Q8h8clKn4KfzkrcwOJTDzS0BmwpVBG6Kd+id2HKvUYcwkTZClD4twAAAAASUVORK5CYII=");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var store_1 = __webpack_require__(4);
var actions_1 = __webpack_require__(3);
var rootReducer = function (state, action) {
    if (state === void 0) { state = store_1.initialState; }
    switch (action.type) {
        case actions_1.INC_TOMATO:
            return __assign(__assign({}, state), { tasks: state.tasks.map(function (task) {
                    if (task.id === action.id)
                        return __assign(__assign({}, task), { tomato: task.tomato + 1 });
                    return task;
                }) });
        case actions_1.DEC_TOMATO:
            if (state.tasks.find(function (el) { return el.id === action.id; }).tomato > 1) {
                return __assign(__assign({}, state), { tasks: state.tasks.map(function (task) {
                        if (task.id === action.id) {
                            if (task.tomato === 1) {
                                return __assign(__assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1, done: true });
                            }
                            return __assign(__assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1 });
                        }
                        return task;
                    }) });
            }
            else {
                return __assign(__assign({}, state), { tasks: state.tasks.filter(function (task) {
                        return task.id !== action.id;
                    }) });
            }
        case actions_1.EDIT_TASK:
            return __assign(__assign({}, state), { tasks: state.tasks.map(function (task) {
                    if (task.id === action.id)
                        return __assign(__assign({}, task), { title: action.title });
                    return task;
                }) });
        case actions_1.ADD_TASK:
            return __assign(__assign({}, state), { tasks: state.tasks.concat(action.task) });
        case actions_1.DELETE_TASK:
            return __assign(__assign({}, state), { tasks: state.tasks.filter(function (task) { return task.id !== action.id; }) });
    }
    return __assign({}, state);
};
exports.rootReducer = rootReducer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function NotFound() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Not found")));
}
exports.NotFound = NotFound;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(34));
var Timer_1 = __webpack_require__(35);
var TaskList_1 = __webpack_require__(42);
function Content() {
    return (react_1.default.createElement("div", { className: content_css_1.default.container },
        react_1.default.createElement("div", { className: content_css_1.default.content },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "\u0423\u0440\u0430! \u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C:"),
                react_1.default.createElement("ul", { className: content_css_1.default.infoList },
                    react_1.default.createElement("li", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"),
                    react_1.default.createElement("li", null, "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0442\u0430\u0439\u043C\u0435\u0440 (\u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB)"),
                    react_1.default.createElement("li", null, "\u0420\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u043F\u043E\u043A\u0430 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB \u043D\u0435 \u043F\u0440\u043E\u0437\u0432\u043E\u043D\u0438\u0442"),
                    react_1.default.createElement("li", null, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0440\u044B\u0432 (3-5 \u043C\u0438\u043D\u0443\u0442)"),
                    react_1.default.createElement("li", null, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB \u0437\u0430 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u043E\u043C\u00BB, \u043F\u043E\u043A\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430. \u041A\u0430\u0436\u0434\u044B\u0435 4 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u0430\u00BB \u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0440\u044B\u0432 (15-30 \u043C\u0438\u043D\u0443\u0442).")),
                react_1.default.createElement(TaskList_1.TaskList, null)),
            react_1.default.createElement(Timer_1.Timer, null))));
}
exports.Content = Content;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S",
	"container": "content__container--2div-",
	"infoList": "content__infoList--1ny9L"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var timer_css_1 = __importDefault(__webpack_require__(37));
var react_redux_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(1);
var Button_1 = __webpack_require__(7);
var classnames_1 = __importDefault(__webpack_require__(6));
var actions_1 = __webpack_require__(3);
var use_sound_1 = __importDefault(__webpack_require__(40));
var beep_mp3_1 = __importDefault(__webpack_require__(41));
// const WORK = 2
var WORK = 1500;
// const TIMEOUT = 2
var TIMEOUT = 300;
var timerContainer = null;
function Timer() {
    var play = (0, use_sound_1.default)(beep_mp3_1.default)[0];
    var dispatch = (0, react_redux_1.useDispatch)();
    var task = (0, react_redux_1.useSelector)(function (state) {
        return state.tasks.find(function (task) { return !task.done; });
    });
    var _a = (0, react_1.useState)(WORK), time = _a[0], setTime = _a[1];
    var _b = (0, react_1.useState)('work'), part = _b[0], setPart = _b[1];
    var _c = (0, react_1.useState)('stop'), mode = _c[0], setMode = _c[1];
    var addTime = function () {
        setTime(function (time) { return time + 60; });
    };
    var startTimer = function () {
        if (mode === 'stop' || mode === 'pause') {
            setMode('start');
            setTime(function (time) { return time - 1; });
            timerContainer = setInterval(function () {
                setTime(function (time) { return (time - 1 ? time - 1 : 0); });
            }, 1000);
        }
    };
    (0, react_1.useEffect)(function () {
        setTime(WORK);
        setMode('stop');
        setPart('work');
    }, [task]);
    (0, react_1.useEffect)(function () {
        checkTimer();
    }, [time]);
    var checkTimer = function () {
        if (time < 0) {
            endTimer();
        }
    };
    var stopTimer = function () {
        if (timerContainer !== null && mode === 'start') {
            clearInterval(timerContainer);
            setTime(WORK);
            setMode('stop');
        }
    };
    var pauseTimer = function () {
        if (timerContainer !== null && mode == 'start') {
            setMode('pause');
            clearInterval(timerContainer);
        }
    };
    var endTimer = function () {
        console.log(mode);
        if (timerContainer !== null && part == 'work') {
            clearInterval(timerContainer);
            setTime(TIMEOUT);
            setPart('timeout');
            setMode('stop');
            play();
        }
        if (timerContainer !== null && part == 'timeout') {
            clearInterval(timerContainer);
            setTime(WORK);
            setPart('work');
            setMode('stop');
            endTomato();
            play();
        }
    };
    var endTomato = function () {
        if (task) {
            dispatch((0, actions_1.decTomato)(task.id));
        }
    };
    var skipWork = function () {
        if (timerContainer !== null && part == 'work') {
            clearInterval(timerContainer);
            setTime(TIMEOUT);
            setPart('timeout');
            setMode('stop');
        }
    };
    var skipTimeout = function () {
        console.log('skipWork');
        endTomato();
    };
    if (!task) {
        return react_1.default.createElement("div", null, "123");
    }
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(timer_css_1.default.wrapper, part === 'work' ? timer_css_1.default.work : timer_css_1.default.timeout, mode === 'start'
            ? timer_css_1.default.start
            : mode === 'pause'
                ? timer_css_1.default.pause
                : timer_css_1.default.stop) },
        react_1.default.createElement("header", { className: timer_css_1.default.header },
            react_1.default.createElement("div", { className: timer_css_1.default.title }, task.title),
            react_1.default.createElement("div", { className: timer_css_1.default.tomato }, part === 'work' ? 'Помидор ' + (task.complete + 1) : 'Перерыв ' + (task.complete + 1))),
        react_1.default.createElement("div", { className: timer_css_1.default.timeWrapper },
            formatTime(time),
            react_1.default.createElement("button", { onClick: addTime, className: timer_css_1.default.addButton },
                react_1.default.createElement(Icon_1.Icon, { iconName: 'addButton' }))),
        react_1.default.createElement("div", { className: timer_css_1.default.buttonsBlock },
            mode === 'stop' ? (react_1.default.createElement(Button_1.Button, { onClick: startTimer, text: 'Старт', type: 'default' })) : mode === 'pause' ? (react_1.default.createElement(Button_1.Button, { onClick: startTimer, text: 'Продолжить', type: 'default' })) : mode === 'start' ? (react_1.default.createElement(Button_1.Button, { onClick: pauseTimer, text: 'Пауза', type: 'default' })) : (''),
            part === 'work' ? (mode === 'pause' ? (react_1.default.createElement(Button_1.Button, { onClick: skipWork, text: 'Сделано', type: 'disabledR' })) : (react_1.default.createElement(Button_1.Button, { onClick: stopTimer, text: 'Стоп', type: 'disabledR' }))) : (react_1.default.createElement(Button_1.Button, { onClick: skipTimeout, text: 'Пропустить', type: 'disabledR' })))));
}
exports.Timer = Timer;
function formatTime(seconds) {
    if (seconds < 0)
        return "00:00";
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var minutesString = String(minutes).padStart(2, '0');
    var secondsString = String(remainingSeconds).padStart(2, '0');
    return "".concat(minutesString, ":").concat(secondsString);
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "timer__wrapper--3u7KI",
	"header": "timer__header--3faD3",
	"title": "timer__title--3gsyz",
	"tomato": "timer__tomato--1jvOX",
	"timeWrapper": "timer__timeWrapper--2ICHa",
	"addButton": "timer__addButton--2VcuR",
	"buttonsBlock": "timer__buttonsBlock--1TFyW",
	"work": "timer__work--3PzM-",
	"start": "timer__start--u85EJ",
	"pause": "timer__pause--2SoCb",
	"timeout": "timer__timeout--3SLMl",
	"stop": "timer__stop--JpBm6"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var button_css_1 = __importDefault(__webpack_require__(39));
function Button(_a) {
    var text = _a.text, onClick = _a.onClick, type = _a.type;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: onClick, className: button_css_1.default[type ? type : 'default'] }, text)));
}
exports.Button = Button;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"default": "button__default--1RcHZ",
	"disabledR": "button__disabledR--1yGGa"
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("use-sound");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:audio/mpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksDVgAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//uSwP+AAAABLAAAAAAAACWAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAA==");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var tasklist_css_1 = __importDefault(__webpack_require__(44));
var Button_1 = __webpack_require__(7);
var Break_1 = __webpack_require__(45);
var Task_1 = __webpack_require__(48);
var store_1 = __webpack_require__(4);
var actions_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(2);
function TaskList() {
    var _a = (0, react_1.useState)(""), value = _a[0], setValue = _a[1];
    var list = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });
    var onChange = function (ev) {
        setValue(ev.target.value);
    };
    var clickHandler = function () {
        if (value.trim() !== "") {
            store_1.store.dispatch((0, actions_1.addTask)(value));
            setValue("");
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { value: value, onChange: onChange, className: tasklist_css_1.default.taskInput, type: "text", placeholder: "Название задачи" }),
        react_1.default.createElement(Break_1.Break, { top: true, size: 25 }),
        react_1.default.createElement(Button_1.Button, { onClick: clickHandler, text: "Добавить" }),
        react_1.default.createElement(Break_1.Break, { top: true, size: 25 }),
        list.map(function (item) { return (react_1.default.createElement(Task_1.Task, { key: item.id, id: item.id, tomato: item.tomato, text: item.title })); }),
        react_1.default.createElement("div", { className: tasklist_css_1.default.timeBlock }, formatTime(list.reduce(function (acc, el) {
            return acc + el.tomato;
        }, 0) * 25))));
}
exports.TaskList = TaskList;
function formatTime(minutes) {
    var hours = Math.floor(minutes / 60);
    var remainderMinutes = minutes % 60;
    var result = "";
    if (hours > 0) {
        result += hours + " " + getHoursSuffix(hours);
    }
    if (remainderMinutes > 0) {
        result += " " + remainderMinutes + " минут";
    }
    if (result === "") {
        result = "0 минут";
    }
    return result.trim();
}
function getHoursSuffix(hours) {
    var lastDigit = hours % 10;
    if (hours >= 11 && hours <= 19) {
        return "часов";
    }
    else if (lastDigit === 1) {
        return "час";
    }
    else if (lastDigit >= 2 && lastDigit <= 4) {
        return "часа";
    }
    else {
        return "часов";
    }
}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"taskInput": "tasklist__taskInput--3_ct_",
	"timeBlock": "tasklist__timeBlock--27vAU"
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var break_css_1 = __importDefault(__webpack_require__(47));
var classnames_1 = __importDefault(__webpack_require__(6));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(break_css_1.default["s".concat(size)], (_a = {}, _a[break_css_1.default["mobile_s".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default["tablet_s".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default["desktop_s".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));
}
exports.Break = Break;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--rnbuA",
	"s8": "break__s8--2ubV4",
	"s12": "break__s12--3dSW2",
	"s16": "break__s16--2bop2",
	"s20": "break__s20--PBhCB",
	"s25": "break__s25--2iv3f",
	"inline": "break__inline--22pcx",
	"top": "break__top--25ISJ",
	"mobile_s4": "break__mobile_s4--LrEFY",
	"mobile_s8": "break__mobile_s8--1Tmgm",
	"mobile_s12": "break__mobile_s12--2En9X",
	"mobile_s16": "break__mobile_s16--2KmPq",
	"mobile_s20": "break__mobile_s20--1j8g5",
	"tablet_s4": "break__tablet_s4--2nTnL",
	"tablet_s8": "break__tablet_s8--7zEhs",
	"tablet_s12": "break__tablet_s12--3Y-kT",
	"tablet_s16": "break__tablet_s16--2rsLQ",
	"tablet_s20": "break__tablet_s20--V1f92",
	"desktop_s4": "break__desktop_s4--3mFLY",
	"desktop_s8": "break__desktop_s8--2uQYJ",
	"desktop_s12": "break__desktop_s12--1-0wy",
	"desktop_s16": "break__desktop_s16--2k7qE",
	"desktop_s20": "break__desktop_s20--AjVsi"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var react_1 = __importStar(__webpack_require__(0));
var task_css_1 = __importDefault(__webpack_require__(50));
var Icon_1 = __webpack_require__(1);
var generateRandomIndex_1 = __webpack_require__(5);
var Dropdown_1 = __webpack_require__(51);
var GenericList_1 = __webpack_require__(54);
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(3);
var classnames_1 = __importDefault(__webpack_require__(6));
function Task(_a) {
    var text = _a.text, tomato = _a.tomato, id = _a.id;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, react_1.useState)(text), value = _b[0], setValue = _b[1];
    var _c = (0, react_1.useState)(false), edit = _c[0], setEdit = _c[1];
    var editInput = (0, react_1.useRef)(null);
    var startEdit = function () {
        setEdit(true);
        if (editInput.current) {
            editInput.current.focus();
        }
    };
    var changeHandler = function (ev) {
        setValue(ev.target.value);
    };
    var keyDownHandler = function (ev) {
        if (ev.key === "Escape") {
            setEdit(false);
            setValue(text);
        }
        if (ev.key === "Enter") {
            setEdit(false);
            dispatch((0, actions_1.editTask)(id, value));
        }
    };
    var LIST = [
        {
            As: "li",
            text: "Увеличить",
            icon: "inc",
            className: task_css_1.default.desktop,
            onClick: function (ev) {
                ev.stopPropagation();
                dispatch((0, actions_1.incTomato)(id));
            },
        },
        {
            As: "li",
            text: "Уменьшить",
            icon: "dec",
            className: (0, classnames_1.default)(task_css_1.default.desktop, tomato <= 1 ? task_css_1.default.disabled : ""),
            onClick: function (ev) {
                ev.stopPropagation();
                if (tomato > 1) {
                    dispatch((0, actions_1.decTomato)(id));
                }
            },
        },
        {
            As: "li",
            text: "Редактировать",
            icon: "edit",
            onClick: function () {
                startEdit();
            },
        },
        {
            As: "li",
            text: "Удалить",
            icon: "delete",
            className: task_css_1.default.desktop,
            onClick: function () {
                dispatch((0, actions_1.deleteTask)(id));
            },
        },
    ].map(function (item) { return (__assign(__assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })); });
    return (react_1.default.createElement("div", { className: task_css_1.default.wrapper },
        react_1.default.createElement("div", { className: task_css_1.default.textWrapper },
            react_1.default.createElement("span", { className: task_css_1.default.tomato }, tomato),
            edit ? (react_1.default.createElement("input", { className: task_css_1.default.editInput, ref: editInput, type: "text", value: value, autoFocus: true, onChange: changeHandler, onKeyDown: keyDownHandler })) : (text)),
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: task_css_1.default.menuButton },
                react_1.default.createElement(Icon_1.Icon, { iconName: "menu" })), isOpen: false },
            react_1.default.createElement("ul", { className: task_css_1.default.menuList },
                react_1.default.createElement(GenericList_1.GenericList, { list: LIST })))));
}
exports.Task = Task;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tomato": "task__tomato--3X-Ld",
	"wrapper": "task__wrapper--2Vosb",
	"menuButton": "task__menuButton--2FEhB",
	"textWrapper": "task__textWrapper--37ImZ",
	"editInput": "task__editInput--25Du6",
	"disabled": "task__disabled--IuLK2"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(53));
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var _b = react_1.default.useState(isOpen), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var handleOpen = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    var close = function () {
        setIsDropdownOpen(false);
    };
    var container = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (isDropdownOpen) {
            document.body.addEventListener("click", function CloseDropdown(ev) {
                setIsDropdownOpen(false);
                document.body.removeEventListener("click", CloseDropdown);
            });
        }
    }, [isDropdownOpen]);
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen, className: isDropdownOpen ? dropdown_css_1.default.dropdownOpen : "" }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer, onClick: close },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, ref: container }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a5Jzh",
	"listContainer": "dropdown__listContainer--YYYB3",
	"list": "dropdown__list--23slg",
	"dropdownOpen": "dropdown__dropdownOpen--1Av0m",
	"dropdownList": "dropdown__dropdownList--2t5CY"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icon_1 = __webpack_require__(1);
function noop() { }
var GenericList = function (_a) {
    var list = _a.list;
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? "div" : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, className = _a.className, id = _a.id, href = _a.href, icon = _a.icon;
        return (react_1.default.createElement(As, { className: className, onClick: onClick, key: id, href: href },
            icon && react_1.default.createElement(Icon_1.Icon, { iconName: icon }),
            text));
    })));
};
exports.GenericList = GenericList;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server");

/***/ })
/******/ ]);
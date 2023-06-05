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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
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
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setTheme = exports.SET_THEME = exports.setTimerEvent = exports.SET_TIMER_EVENT = exports.setTimerPart = exports.SET_TIMER_PART = exports.setTime = exports.SET_TIME = exports.setTimerMode = exports.SET_TIMER_MODE = exports.statAdd = exports.STAT_ADD = exports.setTasks = exports.SET_TASKS = exports.deleteTask = exports.DELETE_TASK = exports.editTask = exports.EDIT_TASK = exports.decTomato = exports.DEC_TOMATO = exports.incTomato = exports.INC_TOMATO = exports.addTask = exports.ADD_TASK = void 0;
const generateRandomIndex_1 = __webpack_require__(6);
exports.ADD_TASK = "ADD_TASK";
const addTask = (title) => ({
    type: exports.ADD_TASK,
    task: { title, complete: 0, tomato: 1, id: (0, generateRandomIndex_1.generateRandomString)() },
});
exports.addTask = addTask;
exports.INC_TOMATO = "INC_TOMATO";
const incTomato = (id) => ({
    type: exports.INC_TOMATO,
    id,
});
exports.incTomato = incTomato;
exports.DEC_TOMATO = "DEC_TOMATO";
const decTomato = (id) => ({
    type: exports.DEC_TOMATO,
    id,
});
exports.decTomato = decTomato;
exports.EDIT_TASK = "EDIT_TASK";
const editTask = (id, title) => ({
    type: exports.EDIT_TASK,
    id,
    title,
});
exports.editTask = editTask;
exports.DELETE_TASK = "DELETE_TASK";
const deleteTask = (id) => ({
    type: exports.DELETE_TASK,
    id,
});
exports.deleteTask = deleteTask;
exports.SET_TASKS = 'SET_TASKS';
const setTasks = (tasks) => ({
    type: exports.SET_TASKS,
    tasks
});
exports.setTasks = setTasks;
exports.STAT_ADD = 'STAT_ADD';
const statAdd = (stat) => ({
    stat,
    type: exports.STAT_ADD
});
exports.statAdd = statAdd;
exports.SET_TIMER_MODE = 'SET_TIMER_MODE';
const setTimerMode = (mode) => ({
    type: exports.SET_TIMER_MODE,
    mode
});
exports.setTimerMode = setTimerMode;
exports.SET_TIME = 'SET_TIME';
const setTime = (time) => ({
    time,
    type: exports.SET_TIME
});
exports.setTime = setTime;
exports.SET_TIMER_PART = 'SET_TIMER_PART';
const setTimerPart = (part) => ({
    type: exports.SET_TIMER_PART,
    part
});
exports.setTimerPart = setTimerPart;
exports.SET_TIMER_EVENT = 'SET_TIMER_EVENT';
const setTimerEvent = (event) => ({
    type: exports.SET_TIMER_EVENT,
    event
});
exports.setTimerEvent = setTimerEvent;
exports.SET_THEME = 'SET_THEME';
const setTheme = (theme) => ({
    type: exports.SET_THEME,
    theme
});
exports.setTheme = setTheme;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
const assoc_1 = __webpack_require__(28);
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
exports.generateRandomString = generateRandomString;
exports.assignId = (0, assoc_1.assoc)("id", (0, exports.generateRandomString)());
const generateId = (obj) => (0, exports.assignId)(obj);
exports.generateId = generateId;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = exports.initialState = void 0;
const redux_1 = __webpack_require__(52);
const redux_devtools_extension_1 = __webpack_require__(53);
const redux_thunk_1 = __importDefault(__webpack_require__(54));
const reducer_1 = __webpack_require__(55);
const redux_persist_1 = __webpack_require__(56);
const storage_1 = __importDefault(__webpack_require__(57));
exports.initialState = {
    theme: 'dark',
    stats: [],
    tasks: [],
    timerModel: {
        options: {
            workTime: 1500,
            pauseTime: 300,
        },
        mode: 'stop',
        part: 'work',
        time: 1500,
        event: null
    },
};
const persistConfig = {
    key: 'root',
    storage: storage_1.default,
};
// export const store = createStore(
//     persistReducer(persistConfig, rootReducer),
//     composeWithDevTools(applyMiddleware(thunk))
// )
const persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, reducer_1.rootReducer);
exports.store = (0, redux_1.createStore)(persistedReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);


/***/ }),
/* 9 */
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
__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebworker = void 0;
const react_1 = __webpack_require__(1);
const workerHandler = () => {
    let timerContainer = 0;
    onmessage = (event) => {
        switch (event.data) {
            case 'start':
                {
                    postMessage('tick');
                    clearInterval(timerContainer);
                    timerContainer = setInterval(() => {
                        postMessage('tick');
                    }, 1000);
                }
                break;
            case 'pause':
                {
                    clearInterval(timerContainer);
                    timerContainer = setInterval(() => {
                        postMessage('tick');
                    }, 1000);
                }
                break;
            case 'stop': {
                clearInterval(timerContainer);
                break;
            }
        }
    };
};
const useWebworker = () => {
    const [result, setResult] = (0, react_1.useState)(0);
    const workerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})()`])));
        workerRef.current = worker;
        worker.onmessage = () => setResult(result => result + 1);
        return () => {
            worker.terminate();
        };
    }, []);
    return {
        result,
        run: (value) => { var _a; return (_a = workerRef.current) === null || _a === void 0 ? void 0 : _a.postMessage(value); }
    };
};
exports.useWebworker = useWebworker;


/***/ }),
/* 11 */
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
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@dnd-kit/sortable");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(0);
const express_1 = __importDefault(__webpack_require__(14));
const server_1 = __importDefault(__webpack_require__(15));
const indexTemplate_1 = __webpack_require__(16);
const App_1 = __webpack_require__(17);
const app = (0, express_1.default)();
const server_2 = __webpack_require__(89);
app.use("/static", express_1.default.static("./dist/client"));
app.get("/*", (req, res) => {
    let html = server_1.default.renderToString((0, jsx_runtime_1.jsx)(server_2.StaticRouter, Object.assign({ location: req.url }, { children: (0, App_1.App)() })));
    res.send((0, indexTemplate_1.indexTemplate)(html));
});
app.listen(3000, () => {
    console.log("server started on port http://localhost:3000");
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
    if (window.localStorage.getItem('token') && window.localStorage.getItem('token') === 'undefined'){
        window.localStorage.removeItem('token')
    }
    if (!window.localStorage.getItem('token') && '${token}' !== 'undefined'){
        window.localStorage.setItem('token','${token}')
    }
    </script>
</head>

<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"><div>
</body>

</html>
`;
exports.indexTemplate = indexTemplate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const root_1 = __webpack_require__(18);
const Layout_1 = __webpack_require__(19);
__webpack_require__(22);
const Header_1 = __webpack_require__(24);
const react_redux_1 = __webpack_require__(4);
// import { store } from './store'
const react_router_dom_1 = __webpack_require__(7);
const NotFound_1 = __webpack_require__(29);
const Content_1 = __webpack_require__(31);
const Stats_1 = __webpack_require__(59);
const TimerContainer_1 = __webpack_require__(83);
const actions_1 = __webpack_require__(5);
const react_2 = __webpack_require__(88);
const store_1 = __webpack_require__(8);
function AppComponent() {
    (0, react_1.useEffect)(() => {
        document.documentElement.dataset.theme = store_1.store.getState().theme;
        store_1.store.dispatch((0, actions_1.statAdd)({ date: new Date(), workTime: 0, pauseTime: 0, tomato: 0, stops: 0 }));
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(react_2.PersistGate, Object.assign({ loading: null, persistor: store_1.persistor }, { children: (0, jsx_runtime_1.jsx)(TimerContainer_1.TimerContainer, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotFound_1.NotFound, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: '/', element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, { children: (0, jsx_runtime_1.jsx)(Header_1.Header, {}) }) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Content_1.Content, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/stats', element: (0, jsx_runtime_1.jsx)(Stats_1.Stats, {}) })] }))] }) }) })) })));
}
exports.App = (0, root_1.hot)(() => (0, jsx_runtime_1.jsx)(AppComponent, {}));


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

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
exports.Layout = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const layout_css_1 = __importDefault(__webpack_require__(21));
const react_router_dom_1 = __webpack_require__(7);
function Layout({ children }) {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: layout_css_1.default.layout }, { children: [children, (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] })));
}
exports.Layout = Layout;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(23);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.cdnfonts.com/css/sf-ui-display);"]);
// Module
exports.push([module.i, ":root[data-theme=\"dark\"] {\n  --black: #eae8e8;\n  --yellow: #b4926d;\n  --purple: #757388;\n  --blue: #637780;\n  --orange: #cc6633;\n  --red2: #EA8A79;\n  --red: #dc3e22;\n  --redDark: #B7280F;\n  --green: #a8b64f;\n  --green2: #a8b64f;\n  --green3: #899441;\n  --whiteLightness: 100%;\n  --white: #333333;\n  --greyF4: #484646;\n  --greyE4: #656565;\n  --grey33: #d9d9d9;\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 95%));\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 90%));\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 95%));\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 63%));\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey-demi-dark: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n  /*filter: invert(100%) hue-rotate(180deg);*/\n}\n\n:root[data-theme=\"light\"] {\n  --yellow: #FFDDA9;\n  --purple: #DFDCFE;\n  --blue: #C5F1FF;\n  --black: #333333;\n  --orange: #cc6633;\n  --red2: #EA8A79;\n  --red: #dc3e22;\n  --redDark: #B7280F;\n  --green: #a8b64f;\n  --green2: #a8b64f;\n  --green3: #899441;\n  --whiteLightness: 100%;\n  --white: hsl(0, 0%, var(--whiteLightness));\n  --greyF4: #f4f4f4;\n  --greyE4: #e4e4e4;\n  --grey33: #333333;\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n  --grey-demi-dark: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nbody {\n  min-height: 1024px;\n  padding: 0;\n  margin: 0;\n  background-color: var(--white);\n  font-size: 14px;\n  line-height: 16px;\n  font-family: \"SF UI Display\", serif;\n  position: relative;\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
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
/* 24 */
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
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const header_css_1 = __importDefault(__webpack_require__(26));
const Icon_1 = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(7);
const react_redux_1 = __webpack_require__(4);
const actions_1 = __webpack_require__(5);
function Header() {
    const theme = (0, react_redux_1.useSelector)(state => state.theme);
    const dispatch = (0, react_redux_1.useDispatch)();
    const changeTheme = () => {
        dispatch((0, actions_1.setTheme)(theme !== 'dark' ? 'dark' : 'light'));
    };
    return ((0, jsx_runtime_1.jsx)("header", Object.assign({ className: header_css_1.default.header }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: header_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: header_css_1.default.logoBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomatoLogo' }), "pomodoro_box"] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: header_css_1.default.statWrapper }, { children: [(0, jsx_runtime_1.jsx)("input", { onChange: changeTheme, checked: theme === 'dark', type: "checkbox", id: "switch" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: header_css_1.default.app }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: header_css_1.default.content }, { children: (0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: "switch" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: header_css_1.default.toggle }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: header_css_1.default.names }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: header_css_1.default.light }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'sun' }) })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: header_css_1.default.dark }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'moon' }) }))] }))] })) })) })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: 'stats' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: header_css_1.default.statBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'statistic', size: 16 }), "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"] })) })) })] }))] })) })));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG",
	"container": "header__container--2eZxl",
	"logoBlock": "header__logoBlock--2nQWQ",
	"statBlock": "header__statBlock--2YowI",
	"app": "header__app--fGRQl",
	"content": "header__content--2YKyN",
	"toggle": "header__toggle--35GAX",
	"names": "header__names--1i_9K",
	"dark": "header__dark--3DCX3",
	"mark": "header__mark--1ewfn",
	"light": "header__light--1ys3E",
	"statWrapper": "header__statWrapper--1mE7N"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = __webpack_require__(0);
function Icon(props) {
    const { iconName, size } = props;
    let iconSvg;
    switch (iconName) {
        case 'moon': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ id: "Layer_1", version: "1.1", viewBox: "0 0 512 512", width: "40px", height: "40px", xmlSpace: "preserve" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z" }) })));
            break;
        }
        case 'sun': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ viewBox: "0 0 50 50", width: "40px", height: "40px" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" }) })));
            break;
        }
        case 'tomatoLogo': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsxs)("g", Object.assign({ clipPath: "url(#clip0_13884_174)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z", fill: "#899441" }), (0, jsx_runtime_1.jsx)("path", { d: "M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z", fill: "#A8B64F" })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", Object.assign({ id: "clip0_13884_174" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "40", height: "40", fill: "white" }) })) })] })));
            break;
        }
        case 'tomatoSad': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsxs)("g", Object.assign({ clipPath: "url(#clip0_16_527)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z", fill: "#DC3E22" }), (0, jsx_runtime_1.jsx)("path", { d: "M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z", fill: "#899441" }), (0, jsx_runtime_1.jsx)("path", { d: "M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z", fill: "#A8B64F" }), (0, jsx_runtime_1.jsx)("circle", { cx: "41.5", cy: "64.5", r: "2.5", fill: "black" }), (0, jsx_runtime_1.jsx)("g", Object.assign({ filter: "url(#filter0_f_16_527)" }, { children: (0, jsx_runtime_1.jsx)("circle", { cx: "29.5", cy: "75.5", r: "5.5", fill: "#EA8979" }) })), (0, jsx_runtime_1.jsx)("g", Object.assign({ filter: "url(#filter1_f_16_527)" }, { children: (0, jsx_runtime_1.jsx)("circle", { cx: "85.5", cy: "75.5", r: "5.5", fill: "#EA8979" }) })), (0, jsx_runtime_1.jsx)("circle", { cx: "73.5", cy: "64.5", r: "2.5", fill: "black" }), (0, jsx_runtime_1.jsx)("path", { d: "M46 78C50 82 64.5 83 68.5 78", stroke: "black" })] })), (0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("filter", Object.assign({ id: "filter0_f_16_527", x: "20", y: "66", width: "19", height: "19", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, { children: [(0, jsx_runtime_1.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, jsx_runtime_1.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), (0, jsx_runtime_1.jsx)("feGaussianBlur", { stdDeviation: "2", result: "effect1_foregroundBlur_16_527" })] })), (0, jsx_runtime_1.jsxs)("filter", Object.assign({ id: "filter1_f_16_527", x: "76", y: "66", width: "19", height: "19", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, { children: [(0, jsx_runtime_1.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, jsx_runtime_1.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), (0, jsx_runtime_1.jsx)("feGaussianBlur", { stdDeviation: "2", result: "effect1_foregroundBlur_16_527" })] })), (0, jsx_runtime_1.jsx)("clipPath", Object.assign({ id: "clip0_16_527" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "115", height: "115", fill: "white" }) }))] })] })));
            break;
        }
        case 'arrow': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "16", height: "10", viewBox: "0 0 16 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1 9L8 2L15 9", stroke: "#B7280F", strokeWidth: "2" }) })));
            break;
        }
        case 'focusDis': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'pauseDis': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.3154 30.1579V57.3158L70.8944 70.8947", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'stopDis': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M21 20L95 94", stroke: "#C4C4C4", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'stop': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#7FC2D7", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M21 20L95 94", stroke: "#7FC2D7", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'pause': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#9C97D7", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.3154 30.158V57.3159L70.8944 70.8948", stroke: "#9C97D7", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'focus': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "115", height: "115", viewBox: "0 0 115 115", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z", stroke: "#FFAE35", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z", stroke: "#FFAE35", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z", stroke: "#FFAE35", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" })] })));
            break;
        }
        case 'tomato':
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "81", height: "81", viewBox: "0 0 81 81", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsxs)("g", Object.assign({ clipPath: "url(#clip0_16_413)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M78.8031 47.4452C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.081C2.37305 21.9757 20.017 9 41.1223 9C62.2283 9 78.8031 26.3393 78.8031 47.4452Z", fill: "#DC3E22" }), (0, jsx_runtime_1.jsx)("path", { d: "M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3439 62.8917 17.3439C62.8917 17.3439 55.9932 13.7785 50.9492 14.0023C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92999 51.6862 6.93824 51.6862 6.93824C51.6862 6.93824 46.3974 7.22064 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65243 25.7565 8.44232 25.7565 8.44232C25.7565 8.44232 31.8459 11.8966 34.5857 15.3426C35.6554 16.6883 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7889 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0222 33.1722 24.0095C35.036 23.3474 37.0065 23.1719 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8532C34.88 32.3806 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7835 43.3412 31.6218C44.2905 28.9723 44.5255 26.3122 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283Z", fill: "#899441" }), (0, jsx_runtime_1.jsx)("path", { d: "M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8364 38.757 19.5894 38.7934 18.0901C38.7965 17.9604 38.9275 8.83154 33.8564 4.86224C32.6735 3.9365 32.4647 2.22717 33.3904 1.04373C34.3168 -0.139084 36.0261 -0.347962 37.2089 0.578393C44.4609 6.25332 44.2446 17.7416 44.2323 18.2279C44.1933 19.7049 42.9833 20.8766 41.5144 20.8766Z", fill: "#A8B64F" })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", Object.assign({ id: "clip0_16_413" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "81", height: "81", fill: "white" }) })) })] })));
            break;
        case 'addButton':
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "25", cy: "25", r: "25", fill: "#C4C4C4" }), (0, jsx_runtime_1.jsx)("path", { d: "M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z", fill: "white" })] })));
            break;
        case 'disDec': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#C4C4C4" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z", fill: "#C4C4C4" })] })));
            break;
        }
        case 'delete': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z", fill: "#A8B64F" }) })));
            break;
        }
        case 'edit': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.825 2.9875 13.825 2.515 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z", fill: "#A8B64F" }) })));
            break;
        }
        case 'dec': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#A8B64F" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z", fill: "#A8B64F" })] })));
            break;
        }
        case 'inc': {
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z", fill: "#A8B64F" }) })));
            break;
        }
        case 'menu': {
            iconSvg = ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "26", height: "6", viewBox: "0 0 26 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "3", cy: "3", r: "3", fill: "#C4C4C4" }), (0, jsx_runtime_1.jsx)("circle", { cx: "13", cy: "3", r: "3", fill: "#C4C4C4" }), (0, jsx_runtime_1.jsx)("circle", { cx: "23", cy: "3", r: "3", fill: "#C4C4C4" })] })));
            break;
        }
        case 'statistic':
            {
                iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" }) })));
            }
            break;
        default:
            iconSvg = ((0, jsx_runtime_1.jsx)("svg", Object.assign({ width: size !== null && size !== void 0 ? size : '15', height: size !== null && size !== void 0 ? size : '15', viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#999999" }) })));
    }
    return iconSvg;
}
exports.Icon = Icon;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));
}
exports.assoc = assoc;


/***/ }),
/* 29 */
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
__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const jsx_runtime_1 = __webpack_require__(0);
function NotFound() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h1", { children: "Not found" }) }));
}
exports.NotFound = NotFound;


/***/ }),
/* 31 */
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
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const content_css_1 = __importDefault(__webpack_require__(33));
const Timer_1 = __webpack_require__(34);
const TaskList_1 = __webpack_require__(39);
function Content() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: content_css_1.default.container }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: content_css_1.default.content }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\u0423\u0440\u0430! \u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C:" }), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: content_css_1.default.infoList }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438" }), (0, jsx_runtime_1.jsx)("li", { children: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0442\u0430\u0439\u043C\u0435\u0440 (\u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB)" }), (0, jsx_runtime_1.jsx)("li", { children: "\u0420\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u043F\u043E\u043A\u0430 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB \u043D\u0435 \u043F\u0440\u043E\u0437\u0432\u043E\u043D\u0438\u0442" }), (0, jsx_runtime_1.jsx)("li", { children: "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0440\u044B\u0432 (3-5 \u043C\u0438\u043D\u0443\u0442)" }), (0, jsx_runtime_1.jsx)("li", { children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u00BB \u0437\u0430 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u043E\u043C\u00BB, \u043F\u043E\u043A\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430. \u041A\u0430\u0436\u0434\u044B\u0435 4 \u00AB\u043F\u043E\u043C\u0438\u0434\u043E\u0440\u0430\u00BB \u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0440\u044B\u0432 (15-30 \u043C\u0438\u043D\u0443\u0442)." })] })), (0, jsx_runtime_1.jsx)(TaskList_1.TaskList, {})] }), (0, jsx_runtime_1.jsx)(Timer_1.Timer, {})] })) })));
}
exports.Content = Content;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S",
	"container": "content__container--2div-",
	"infoList": "content__infoList--1ny9L"
};


/***/ }),
/* 34 */
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
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const timer_css_1 = __importDefault(__webpack_require__(36));
const react_redux_1 = __webpack_require__(4);
const Icon_1 = __webpack_require__(2);
const Button_1 = __webpack_require__(9);
const classnames_1 = __importDefault(__webpack_require__(3));
const actions_1 = __webpack_require__(5);
const useWorker_1 = __webpack_require__(10);
const WORK = 2;
const TIMEOUT = 300;
function Timer() {
    const { result, run } = (0, useWorker_1.useWebworker)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const task = (0, react_redux_1.useSelector)((state) => state.tasks.find((task) => !task.done));
    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);
    const pauseTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.pauseTime);
    const time = (0, react_redux_1.useSelector)(state => state.timerModel.time);
    const mode = (0, react_redux_1.useSelector)(state => state.timerModel.mode);
    const part = (0, react_redux_1.useSelector)(state => state.timerModel.part);
    const addTime = () => {
        dispatch((0, actions_1.setTime)(time + 60));
    };
    const startTimer = () => {
        if (mode === 'stop' || mode === 'pause') {
            dispatch((0, actions_1.setTimerEvent)('start'));
        }
    };
    const stopTimer = () => {
        if (mode === 'start') {
            // dispatch(setTime(workTime))
            dispatch((0, actions_1.setTimerEvent)('stop'));
        }
    };
    const pauseTimer = () => {
        dispatch((0, actions_1.setTimerEvent)('pause'));
    };
    const skipWork = () => {
        if (part == 'work') {
            // dispatch(setTime(pauseTime))
            dispatch((0, actions_1.setTimerEvent)('skipWork'));
            // dispatch(setTimerPart('timeout'))
        }
    };
    const skipTimeout = () => {
        console.log('skip');
        dispatch((0, actions_1.setTimerEvent)('skipTimeout'));
    };
    if (!task) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(timer_css_1.default.wrapper, part === 'work' ? timer_css_1.default.work : timer_css_1.default.timeout, mode === 'start'
                ? timer_css_1.default.start
                : mode === 'pause'
                    ? timer_css_1.default.pause
                    : timer_css_1.default.stop) }, { children: [(0, jsx_runtime_1.jsxs)("header", Object.assign({ className: timer_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)("div", { className: timer_css_1.default.title }), (0, jsx_runtime_1.jsx)("div", { className: timer_css_1.default.tomato })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: timer_css_1.default.timeWrapper }, { children: [formatTime(0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: timer_css_1.default.addButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'addButton' }) }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: timer_css_1.default.buttonsBlock }, { children: [mode === 'stop' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Сделано', type: 'activeR' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Стоп', type: 'activeR' })) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Стоп', type: 'disabledR' }))) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Пропустить', type: 'activeR' }))] }))] })));
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(timer_css_1.default.wrapper, part === 'work' ? timer_css_1.default.work : timer_css_1.default.timeout, mode === 'start'
            ? timer_css_1.default.start
            : mode === 'pause'
                ? timer_css_1.default.pause
                : timer_css_1.default.stop) }, { children: [(0, jsx_runtime_1.jsxs)("header", Object.assign({ className: timer_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: timer_css_1.default.title }, { children: task.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: timer_css_1.default.tomato }, { children: part === 'work' ? 'Помидор ' + (task.complete + 1) : 'Перерыв ' + (task.complete + 1) }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: timer_css_1.default.timeWrapper }, { children: [formatTime(time), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: addTime, className: timer_css_1.default.addButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'addButton' }) }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: timer_css_1.default.buttonsBlock }, { children: [mode === 'stop' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: startTimer, text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: startTimer, text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: pauseTimer, text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: skipWork, text: 'Сделано', type: 'activeR' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: stopTimer, text: 'Стоп', type: 'activeR' })) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: stopTimer, text: 'Стоп', type: 'disabledR' }))) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: skipTimeout, text: 'Пропустить', type: 'activeR' }))] }))] })));
}
exports.Timer = Timer;
function formatTime(seconds) {
    if (seconds < 0)
        return `00:00`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(remainingSeconds).padStart(2, '0');
    return `${minutesString}:${secondsString}`;
}


/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const button_css_1 = __importDefault(__webpack_require__(38));
function Button({ text, onClick, type }) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClick, className: button_css_1.default[type ? type : 'default'] }, { children: text })) }));
}
exports.Button = Button;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"default": "button__default--1RcHZ",
	"disabledR": "button__disabledR--1yGGa",
	"activeR": "button__activeR--EVZgE"
};


/***/ }),
/* 39 */
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
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const tasklist_css_1 = __importDefault(__webpack_require__(41));
const Button_1 = __webpack_require__(9);
const Break_1 = __webpack_require__(42);
const Task_1 = __webpack_require__(45);
const store_1 = __webpack_require__(8);
const actions_1 = __webpack_require__(5);
const react_redux_1 = __webpack_require__(4);
const core_1 = __webpack_require__(58);
const sortable_1 = __webpack_require__(12);
function TaskList() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);
    const list = (0, react_redux_1.useSelector)((state) => state.tasks);
    const [activeItem, setActiveItem] = (0, react_1.useState)();
    const sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.TouchSensor));
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveItem(list.find((item) => item.id === active.id));
    };
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over)
            return;
        const activeItem = list.find((item) => item.id === active.id);
        const overItem = list.find((item) => item.id === over.id);
        if (!activeItem || !overItem) {
            return;
        }
        const activeIndex = list.findIndex((item) => item.id === active.id);
        const overIndex = list.findIndex((item) => item.id === over.id);
        if (activeIndex !== overIndex) {
            dispatch((0, actions_1.setTasks)((0, sortable_1.arrayMove)(list, activeIndex, overIndex)));
            // setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));
        }
        setActiveItem(undefined);
    };
    const handleDragCancel = () => {
        setActiveItem(undefined);
    };
    const [value, setValue] = (0, react_1.useState)('');
    const onChange = (ev) => {
        setValue(ev.target.value);
    };
    const clickHandler = () => {
        if (value.trim() !== '') {
            store_1.store.dispatch((0, actions_1.addTask)(value));
            setValue('');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { value: value, onChange: onChange, className: tasklist_css_1.default.taskInput, type: 'text', placeholder: 'Название задачи' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: clickHandler, text: 'Добавить' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsxs)(core_1.DndContext, Object.assign({ id: 'list', sensors: sensors, collisionDetection: core_1.pointerWithin, onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragCancel: handleDragCancel }, { children: [(0, jsx_runtime_1.jsx)(sortable_1.SortableContext, Object.assign({ items: list, strategy: sortable_1.verticalListSortingStrategy }, { children: (0, jsx_runtime_1.jsx)("div", { children: list.map((item) => ((0, jsx_runtime_1.jsx)(Task_1.Task, { text: item.title, tomato: item.tomato, id: item.id }, item.id))) }) })), (0, jsx_runtime_1.jsx)(core_1.DragOverlay, Object.assign({ style: { transformOrigin: '0 0 ' } }, { children: activeItem ? (0, jsx_runtime_1.jsx)(Task_1.Task, { id: activeItem.id, text: activeItem.title, isDragging: true, tomato: activeItem.tomato }) : null }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: tasklist_css_1.default.timeBlock }, { children: formatTime(list.reduce((acc, el) => {
                    return acc + el.tomato;
                }, 0) * Math.floor(workTime / 60)) }))] }));
}
exports.TaskList = TaskList;
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;
    let result = '';
    if (hours > 0) {
        result += hours + ' ' + getHoursSuffix(hours);
    }
    if (remainderMinutes > 0) {
        result += ' ' + remainderMinutes + ' минут';
    }
    if (result === '') {
        result = '0 минут';
    }
    return result.trim();
}
function getHoursSuffix(hours) {
    const lastDigit = hours % 10;
    if (hours >= 11 && hours <= 19) {
        return 'часов';
    }
    else if (lastDigit === 1) {
        return 'час';
    }
    else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'часа';
    }
    else {
        return 'часов';
    }
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"taskInput": "tasklist__taskInput--3_ct_",
	"timeBlock": "tasklist__timeBlock--27vAU"
};


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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const break_css_1 = __importDefault(__webpack_require__(44));
const classnames_1 = __importDefault(__webpack_require__(3));
function Break(props) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(break_css_1.default[`s${size}`], { [break_css_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_css_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_css_1.default[`desktop_s${desktopSize}`]]: desktopSize }, { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }) }));
}
exports.Break = Break;


/***/ }),
/* 44 */
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
exports.Task = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const task_css_1 = __importDefault(__webpack_require__(47));
const Icon_1 = __webpack_require__(2);
const generateRandomIndex_1 = __webpack_require__(6);
const Dropdown_1 = __webpack_require__(11);
const GenericList_1 = __webpack_require__(50);
const react_redux_1 = __webpack_require__(4);
const actions_1 = __webpack_require__(5);
const classnames_1 = __importDefault(__webpack_require__(3));
const sortable_1 = __webpack_require__(12);
const utilities_1 = __webpack_require__(51);
function Task({ text, tomato, id }) {
    const { attributes, listeners, setNodeRef, transition, transform } = (0, sortable_1.useSortable)({ id });
    const dispatch = (0, react_redux_1.useDispatch)();
    const [value, setValue] = (0, react_1.useState)(text);
    const [edit, setEdit] = (0, react_1.useState)(false);
    const editInput = (0, react_1.useRef)(null);
    const startEdit = () => {
        setEdit(true);
        if (editInput.current) {
            editInput.current.focus();
        }
    };
    const changeHandler = (ev) => {
        setValue(ev.target.value);
    };
    const keyDownHandler = (ev) => {
        if (ev.key === 'Escape') {
            setEdit(false);
            setValue(text);
        }
        if (ev.key === 'Enter') {
            setEdit(false);
            dispatch((0, actions_1.editTask)(id, value));
        }
    };
    const LIST = [
        {
            As: 'li',
            text: 'Увеличить',
            icon: 'inc',
            className: task_css_1.default.desktop,
            onClick: (ev) => {
                ev.stopPropagation();
                dispatch((0, actions_1.incTomato)(id));
            },
        },
        {
            As: 'li',
            text: 'Уменьшить',
            icon: 'dec',
            className: (0, classnames_1.default)(task_css_1.default.desktop, tomato <= 1 ? task_css_1.default.disabled : ''),
            onClick: (ev) => {
                ev.stopPropagation();
                if (tomato > 1) {
                    dispatch((0, actions_1.decTomato)(id));
                }
            },
        },
        {
            As: 'li',
            text: 'Редактировать',
            icon: 'edit',
            onClick: () => {
                startEdit();
            },
        },
        {
            As: 'li',
            text: 'Удалить',
            icon: 'delete',
            className: task_css_1.default.desktop,
            onClick: () => {
                dispatch((0, actions_1.deleteTask)(id));
            },
        },
    ].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: task_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: task_css_1.default.textWrapper, ref: setNodeRef, style: {
                    transform: utilities_1.CSS.Transform.toString(transform),
                    transition,
                } }, attributes, listeners, transform, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: task_css_1.default.tomato }, { children: tomato })), edit ? ((0, jsx_runtime_1.jsx)("input", { className: task_css_1.default.editInput, ref: editInput, type: 'text', value: value, autoFocus: true, onChange: changeHandler, onKeyDown: keyDownHandler })) : (text)] })), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, Object.assign({ button: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: task_css_1.default.menuButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'menu' }) })), isOpen: false }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: task_css_1.default.menuList }, { children: (0, jsx_runtime_1.jsx)(GenericList_1.GenericList, { list: LIST }) })) }))] })));
}
exports.Task = Task;


/***/ }),
/* 47 */
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
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __importStar(__webpack_require__(1));
const dropdown_css_1 = __importDefault(__webpack_require__(49));
function Dropdown({ button, children, isOpen, onOpen, onClose, }) {
    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(isOpen);
    const handleOpen = () => {
        if (onOpen)
            onOpen();
        setIsDropdownOpen(!isDropdownOpen);
    };
    const close = () => {
        if (onClose)
            onClose();
        setIsDropdownOpen(false);
    };
    const container = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (isDropdownOpen) {
            document.body.addEventListener("click", function CloseDropdown(ev) {
                close();
                document.body.removeEventListener("click", CloseDropdown);
            });
        }
    }, [isDropdownOpen]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: dropdown_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: handleOpen, className: isDropdownOpen ? dropdown_css_1.default.dropdownOpen : "" }, { children: button })), isDropdownOpen && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: dropdown_css_1.default.listContainer, onClick: close }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: dropdown_css_1.default.list, ref: container }, { children: children })) })))] })));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const Icon_1 = __webpack_require__(2);
function noop() { }
const GenericList = function ({ list }) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: list.map(({ As = "div", text, onClick = noop, className, id, href, icon }) => ((0, jsx_runtime_1.jsxs)(As, Object.assign({ className: className, onClick: onClick, href: href }, { children: [icon && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: icon }), text] }), id))) }));
};
exports.GenericList = GenericList;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@dnd-kit/utilities");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const store_1 = __webpack_require__(8);
const actions_1 = __webpack_require__(5);
const generateRandomIndex_1 = __webpack_require__(6);
const rootReducer = (state = store_1.initialState, action) => {
    switch (action.type) {
        case actions_1.SET_THEME: {
            return Object.assign(Object.assign({}, state), { theme: action.theme });
        }
        case actions_1.SET_TIMER_EVENT: {
            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { event: action.event }) });
        }
        case actions_1.SET_TIMER_PART: {
            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { part: action.part }) });
        }
        case actions_1.SET_TIME: {
            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { time: action.time }) });
        }
        case actions_1.SET_TIMER_MODE: {
            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { mode: action.mode }) });
        }
        case actions_1.STAT_ADD: {
            if (state.stats.find((el) => {
                return new Date(el.date).getDate() === new Date().getDate();
            })) {
                return Object.assign(Object.assign({}, state), { stats: state.stats.map((el) => {
                        if (new Date(el.date).getDate() === new Date(action.stat.date).getDate()) {
                            return Object.assign(Object.assign({}, el), { stops: el.stops + action.stat.stops, pauseTime: el.pauseTime + action.stat.pauseTime, workTime: el.workTime + action.stat.workTime, tomato: el.tomato + action.stat.tomato });
                        }
                        else {
                            return el;
                        }
                    }) });
            }
            else {
                return Object.assign(Object.assign({}, state), { stats: state.stats.concat(Object.assign(Object.assign({}, action.stat), { id: (0, generateRandomIndex_1.generateRandomString)() })) });
            }
        }
        case actions_1.SET_TASKS: {
            return Object.assign(Object.assign({}, state), { tasks: action.tasks });
        }
        case actions_1.INC_TOMATO:
            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {
                    if (task.id === action.id)
                        return Object.assign(Object.assign({}, task), { tomato: task.tomato + 1 });
                    return task;
                }) });
        case actions_1.DEC_TOMATO:
            if (state.tasks.find((el) => el.id === action.id).tomato > 1) {
                return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {
                        if (task.id === action.id) {
                            if (task.tomato === 1) {
                                return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1, done: true });
                            }
                            return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1 });
                        }
                        return task;
                    }) });
            }
            else {
                return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => {
                        return task.id !== action.id;
                    }) });
            }
        case actions_1.EDIT_TASK:
            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {
                    if (task.id === action.id)
                        return Object.assign(Object.assign({}, task), { title: action.title });
                    return task;
                }) });
        case actions_1.ADD_TASK:
            return Object.assign(Object.assign({}, state), { tasks: state.tasks.concat(action.task) });
        case actions_1.DELETE_TASK:
            return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => task.id !== action.id) });
    }
    return Object.assign({}, state);
};
exports.rootReducer = rootReducer;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@dnd-kit/core");

/***/ }),
/* 59 */
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
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const stats_css_1 = __importDefault(__webpack_require__(61));
const DateStat_1 = __webpack_require__(62);
const TomatoStat_1 = __webpack_require__(65);
const DiaStat_1 = __webpack_require__(68);
const react_redux_1 = __webpack_require__(4);
const FocusStat_1 = __webpack_require__(71);
const PauseStat_1 = __webpack_require__(74);
const StopStat_1 = __webpack_require__(77);
const StatSelect_1 = __webpack_require__(80);
const generateRandomIndex_1 = __webpack_require__(6);
function Stats() {
    const stats = (0, react_redux_1.useSelector)((state) => state.stats);
    const [targetDate, setTargetDate] = (0, react_1.useState)(stats[0]);
    const [week, setWeek] = (0, react_1.useState)('current');
    const filteredStats = (0, react_1.useMemo)(() => {
        const weekDiff = week === 'current' ? 0 : week === 'past' ? 1 : 2;
        const day = new Date().getDay();
        const diff = new Date().getDate() - day + (day == 0 ? -6 : 1);
        const weekStart = new Date(new Date(new Date().setDate(diff - 7 * weekDiff)).setHours(0, 0, 0, 0));
        const weekEnd = new Date(new Date(new Date().setDate(diff + 7 - 7 * weekDiff)).setHours(0, 0, 0, 0));
        const result = [
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Понедельник' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Вторник' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Среда' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Четверг' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Пятница' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Суббота' },
            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Воскресенье' },
        ];
        stats
            .filter((el) => {
            return new Date(el.date) >= weekStart && new Date(el.date) < weekEnd;
        })
            .reverse()
            .forEach((el) => {
            const day = new Date(el.date).getDay();
            result[day === 0 ? 6 : day - 1] = el;
        });
        return result;
    }, [week, stats]);
    const setTarget = (target) => {
        setTargetDate(target);
    };
    const setWeekHandler = (value) => {
        switch (value) {
            case 'current': {
                setWeek('current');
                break;
            }
            case 'past': {
                setWeek('past');
                break;
            }
            case '2past': {
                setWeek('2past');
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stats_css_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stats_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.headerTitle }, { children: "\u0412\u0430\u0448\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C" })), (0, jsx_runtime_1.jsx)(StatSelect_1.StatSelect, { week: week, setWeek: setWeekHandler })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stats_css_1.default.statWrapper }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.date }, { children: (0, jsx_runtime_1.jsx)(DateStat_1.DateStat, { date: targetDate.date, workTime: targetDate.workTime ? targetDate.workTime : null }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.tomato }, { children: (0, jsx_runtime_1.jsx)(TomatoStat_1.TomatoStat, { count: targetDate.tomato ? targetDate.tomato : 0 }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.dio }, { children: (0, jsx_runtime_1.jsx)(DiaStat_1.DiaStat, { target: targetDate, stats: filteredStats, setTarget: setTarget }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.focus }, { children: (0, jsx_runtime_1.jsx)(FocusStat_1.FocusStat, { value: targetDate
                                ? Math.round((targetDate.workTime /
                                    (targetDate.workTime +
                                        targetDate.pauseTime)) *
                                    100)
                                : null }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.pause }, { children: (0, jsx_runtime_1.jsx)(PauseStat_1.PauseStat, { value: targetDate ? targetDate.pauseTime : null }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stats_css_1.default.stop }, { children: (0, jsx_runtime_1.jsx)(StopStat_1.StopStat, { value: targetDate ? targetDate.stops : null }) }))] }))] })));
}
exports.Stats = Stats;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "stats__container--3KfA4",
	"header": "stats__header--yuAMW",
	"headerTitle": "stats__headerTitle--D8afd",
	"statWrapper": "stats__statWrapper--2OUBm",
	"date": "stats__date--1jnff",
	"tomato": "stats__tomato--1LMH6",
	"dio": "stats__dio--AlQzd",
	"focus": "stats__focus--18Qf9",
	"pause": "stats__pause--1OZ7Y",
	"stop": "stats__stop--13dor"
};


/***/ }),
/* 62 */
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
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const datestat_css_1 = __importDefault(__webpack_require__(64));
function DateStat({ date, workTime }) {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: datestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: datestat_css_1.default.title }, { children: date ? getDay(date) : '' })), workTime ? ((0, jsx_runtime_1.jsxs)("p", Object.assign({ className: datestat_css_1.default.text }, { children: ["\u0412\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u043D\u0430 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 ", (0, jsx_runtime_1.jsx)("span", Object.assign({ className: datestat_css_1.default.timeHighlight }, { children: formatTime(workTime) }))] }))) : ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: datestat_css_1.default.text }, { children: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445" })))] })));
}
exports.DateStat = DateStat;
const getDay = (date) => {
    if (date.length < 12)
        return date;
    switch (new Date(date).getDay()) {
        case 1: {
            return 'Понедельник';
        }
        case 2: {
            return 'Вторник';
        }
        case 3: {
            return 'Среда';
        }
        case 4: {
            return 'Четверг';
        }
        case 5: {
            return 'Пятница';
        }
        case 6: {
            return 'Суббота';
        }
        case 0: {
            return 'Воскресенье';
        }
        default: return '';
    }
};
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600); // количество полных часов
    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут
    if (minutes === 0) {
        return `${hours} часов`;
    }
    if (hours === 0) {
        return `${minutes} минут`;
    }
    return `${hours} часов ${minutes} минут`;
}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "datestat__wrapper--2xQQo",
	"title": "datestat__title--3RUof",
	"text": "datestat__text--3fRQy",
	"timeHighlight": "datestat__timeHighlight--1R_Rt"
};


/***/ }),
/* 65 */
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
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TomatoStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const tomatostat_css_1 = __importDefault(__webpack_require__(67));
const Icon_1 = __webpack_require__(2);
function TomatoStat({ count }) {
    if (count)
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: tomatostat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: tomatostat_css_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: tomatostat_css_1.default.tomatoHeader }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomato' }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: tomatostat_css_1.default.tomatoText }, { children: 'x' + count }))] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: tomatostat_css_1.default.tomatoFooter }, { children: count + ' помидора' }))] })));
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: tomatostat_css_1.default.wrapper }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: tomatostat_css_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: tomatostat_css_1.default.tomatoHeader }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomatoSad' }) })) })) })));
}
exports.TomatoStat = TomatoStat;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imageContainer": "tomatostat__imageContainer--2DLvN",
	"tomatoText": "tomatostat__tomatoText--2Q77E",
	"tomatoFooter": "tomatostat__tomatoFooter--3KaDN",
	"tomatoHeader": "tomatostat__tomatoHeader--3Vi46",
	"wrapper": "tomatostat__wrapper--2K-Q8"
};


/***/ }),
/* 68 */
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
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const diastat_css_1 = __importDefault(__webpack_require__(70));
const classnames_1 = __importDefault(__webpack_require__(3));
const noop = () => {
    //do nothing.
};
function DiaStat({ stats, setTarget, target }) {
    const [max, setMax] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const maxMap = Math.max(...stats.map((el) => (el.workTime ? el.workTime : 0)));
        setMax(Math.ceil(maxMap / (1500 * 5)) * 1500 * 5);
    }, [stats]);
    const clickHandler = (date) => () => {
        setTarget(date);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: diastat_css_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: diastat_css_1.default.legendWrapper }, { children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 4) }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 3) }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 2) }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 1) }))] })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: diastat_css_1.default.daysWrapper }, { children: [(0, jsx_runtime_1.jsx)(Day, { stat: stats[0], clickHandler: clickHandler(stats[0]), target: target, max: max, day: 'Пн' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[1], clickHandler: clickHandler(stats[1]), target: target, max: max, day: 'Вт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[2], clickHandler: clickHandler(stats[2]), target: target, max: max, day: 'Ср' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[3], clickHandler: clickHandler(stats[3]), target: target, max: max, day: 'Чт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[4], clickHandler: clickHandler(stats[4]), target: target, max: max, day: 'Пт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[5], clickHandler: clickHandler(stats[5]), target: target, max: max, day: 'Сб' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[6], clickHandler: clickHandler(stats[6]), target: target, max: max, day: 'Вс' })] })), (0, jsx_runtime_1.jsx)("div", { className: diastat_css_1.default.dioFooter })] })));
}
exports.DiaStat = DiaStat;
const Day = ({ stat, clickHandler, target, max, day }) => {
    if (stat)
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selected : '', !stat.workTime ? diastat_css_1.default.disabled : ''), style: {
                            height: stat.workTime
                                ? `${(stat.workTime / max) * 100}%`
                                : `5px`,
                        } }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selectedText : '') }, { children: day }))] })));
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, diastat_css_1.default.disabled), style: { height: '5px' } }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, '') }, { children: day }))] })));
};
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600); // количество полных часов
    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут
    if (minutes === 0) {
        return `${hours} ч`;
    }
    if (hours === 0) {
        return `${minutes} мин`;
    }
    return `${hours} ч ${minutes} мин`;
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "diastat__container--14qD8",
	"daysWrapper": "diastat__daysWrapper--mHCGx",
	"day": "diastat__day--2FCL2",
	"dayBar": "diastat__dayBar--1ahU_",
	"datBarInner": "diastat__datBarInner--1h65Y",
	"dayText": "diastat__dayText--1VTgw",
	"dioFooter": "diastat__dioFooter--2q8NV",
	"selected": "diastat__selected--2trww",
	"selectedText": "diastat__selectedText--32L6s",
	"disabled": "diastat__disabled--DSb4X",
	"legendWrapper": "diastat__legendWrapper--HPAs3",
	"legedText": "diastat__legedText--CBjnQ"
};


/***/ }),
/* 71 */
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
__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const focusstat_css_1 = __importDefault(__webpack_require__(73));
const Icon_1 = __webpack_require__(2);
const classnames_1 = __importDefault(__webpack_require__(3));
function FocusStat({ value }) {
    if (value) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: focusstat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: focusstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: focusstat_css_1.default.text }, { children: "\u0424\u043E\u043A\u0443\u0441" })), (0, jsx_runtime_1.jsxs)("h3", Object.assign({ className: focusstat_css_1.default.value }, { children: [value, "%"] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: focusstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'focus' }) }))] })));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(focusstat_css_1.default.wrapper, focusstat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: focusstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: focusstat_css_1.default.text }, { children: "\u0424\u043E\u043A\u0443\u0441" })), (0, jsx_runtime_1.jsxs)("h3", Object.assign({ className: focusstat_css_1.default.value }, { children: [0, "%"] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: focusstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'focusDis' }) }))] })));
    }
}
exports.FocusStat = FocusStat;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "focusstat__wrapper--2fiPw",
	"disabled": "focusstat__disabled--XJ9sU",
	"value": "focusstat__value--1hG9R"
};


/***/ }),
/* 74 */
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
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const pausestat_css_1 = __importDefault(__webpack_require__(76));
const Icon_1 = __webpack_require__(2);
const classnames_1 = __importDefault(__webpack_require__(3));
function PauseStat({ value }) {
    if (value) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: pausestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: pausestat_css_1.default.text }, { children: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u0430\u0443\u0437\u0435" })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(value) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pause' }) }))] })));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(pausestat_css_1.default.wrapper, pausestat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: pausestat_css_1.default.text }, { children: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u0430\u0443\u0437\u0435" })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(0) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pauseDis' }) }))] })));
    }
}
exports.PauseStat = PauseStat;
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600); // количество полных часов
    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут
    if (seconds === 0) {
        return `${minutes}м`;
    }
    if (hours === 0 && minutes === 0) {
        return `${seconds}c`;
    }
    if (hours === 0 && minutes !== 0) {
        return `${minutes}м`;
    }
    if (minutes === 0 && hours !== 0) {
        return `${hours}ч`;
    }
    const timeString = `${hours}ч ${minutes}м`;
    return timeString;
}


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "pausestat__wrapper--ovDlV",
	"disabled": "pausestat__disabled--vlV3V",
	"value": "pausestat__value--1CAYx"
};


/***/ }),
/* 77 */
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
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopStat = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const stopstat_css_1 = __importDefault(__webpack_require__(79));
const Icon_1 = __webpack_require__(2);
const classnames_1 = __importDefault(__webpack_require__(3));
function StopStat({ value }) {
    if (value) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stopstat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stopstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: stopstat_css_1.default.text }, { children: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438" })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: stopstat_css_1.default.value }, { children: value }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stopstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'stop' }) }))] })));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(stopstat_css_1.default.wrapper, stopstat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: stopstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: stopstat_css_1.default.text }, { children: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438" })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: stopstat_css_1.default.value }, { children: "0" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: stopstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'stopDis' }) }))] })));
    }
}
exports.StopStat = StopStat;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "stopstat__wrapper--krN8M",
	"disabled": "stopstat__disabled--23ECg",
	"value": "stopstat__value--1pZjU"
};


/***/ }),
/* 80 */
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
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatSelect = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const statselect_css_1 = __importDefault(__webpack_require__(82));
const Dropdown_1 = __webpack_require__(11);
const Icon_1 = __webpack_require__(2);
const classnames_1 = __importDefault(__webpack_require__(3));
const options = [
    { value: 'chocolate', label: 'Эта неделя' },
    { value: 'strawberry', label: 'Прошедшая неделя' },
    { value: 'vanilla', label: '2 недели назад' },
];
function StatSelect({ setWeek, week }) {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)(options[0]);
    const setOpen = () => {
        setIsOpen(true);
    };
    const setClose = () => {
        setIsOpen(false);
    };
    const clickHandler = (value) => () => {
        console.log('clickHandler');
        setWeek(value);
    };
    return ((0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, Object.assign({ onOpen: setOpen, onClose: setClose, button: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: statselect_css_1.default.input }, { children: [(0, jsx_runtime_1.jsx)("span", { children: week === 'current'
                        ? 'Эта неделя'
                        : week === 'past'
                            ? 'Прошедшая неделя'
                            : week === '2past'
                                ? '2 недели назад'
                                : '' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(statselect_css_1.default.inputArrow, isOpen ? statselect_css_1.default.open : '') }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'arrow' }) }))] })) }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('current') }, { children: (0, jsx_runtime_1.jsx)("span", { children: options[0].label }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('past') }, { children: (0, jsx_runtime_1.jsx)("span", { children: options[1].label }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('2past') }, { children: (0, jsx_runtime_1.jsx)("span", { children: options[2].label }) }))] }) })));
}
exports.StatSelect = StatSelect;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input": "statselect__input--38Aon",
	"inputArrow": "statselect__inputArrow--3Pf5D",
	"open": "statselect__open--27Sp9"
};


/***/ }),
/* 83 */
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
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerContainer = void 0;
const jsx_runtime_1 = __webpack_require__(0);
const react_1 = __webpack_require__(1);
const useWorker_1 = __webpack_require__(10);
const use_sound_1 = __importDefault(__webpack_require__(85));
const beep_mp3_1 = __importDefault(__webpack_require__(86));
const react_redux_1 = __webpack_require__(4);
const actions_1 = __webpack_require__(5);
const useMounted_1 = __webpack_require__(87);
function TimerContainer({ children }) {
    const theme = (0, react_redux_1.useSelector)(state => state.theme);
    (0, react_1.useEffect)(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);
    const isMounted = (0, useMounted_1.useIsMount)();
    const didMountRef = (0, react_1.useRef)(false);
    const [workedTime, setWorkedTime] = (0, react_1.useState)(0);
    const [pausedTime, setPausedTime] = (0, react_1.useState)(0);
    const [stops, setStops] = (0, react_1.useState)(0);
    const { result, run } = (0, useWorker_1.useWebworker)();
    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);
    const pauseTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.pauseTime);
    const task = (0, react_redux_1.useSelector)((state) => state.tasks.find((task) => !task.done));
    const time = (0, react_redux_1.useSelector)(state => state.timerModel.time);
    const mode = (0, react_redux_1.useSelector)(state => state.timerModel.mode);
    const timerEvent = (0, react_redux_1.useSelector)(state => state.timerModel.event);
    const part = (0, react_redux_1.useSelector)(state => state.timerModel.part);
    const [play] = (0, use_sound_1.default)(beep_mp3_1.default);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        if (isMounted) {
            checkTimer();
        }
    }, [result]);
    (0, react_1.useEffect)(() => {
        if (isMounted) {
            switch (timerEvent) {
                case 'start': {
                    startTimer();
                    dispatch((0, actions_1.setTimerEvent)(null));
                    break;
                }
                case 'stop': {
                    stopTimer();
                    dispatch((0, actions_1.setTimerEvent)(null));
                    break;
                }
                case 'pause': {
                    pauseTimer();
                    dispatch((0, actions_1.setTimerEvent)(null));
                    break;
                }
                case 'skipWork': {
                    skipWork();
                    dispatch((0, actions_1.setTimerEvent)(null));
                    break;
                }
                case 'skipTimeout': {
                    skipTimeout();
                    dispatch((0, actions_1.setTimerEvent)(null));
                    break;
                }
            }
        }
    }, [timerEvent]);
    const startTimer = () => {
        run('start');
        dispatch((0, actions_1.setTimerMode)('start'));
    };
    const pauseTimer = () => {
        run('pause');
        dispatch((0, actions_1.setTimerMode)('pause'));
    };
    const checkTimer = () => {
        if (time <= 0) {
            endTimer();
        }
        else {
            if (mode === 'start') {
                setWorkedTime(workedTime => workedTime + 1);
                dispatch((0, actions_1.setTime)(time - 1));
            }
            else {
                setPausedTime(pausedTime => pausedTime + 1);
            }
        }
    };
    const endTimer = () => {
        if (part == 'work') {
            run('stop');
            dispatch((0, actions_1.statAdd)({
                date: new Date(),
                tomato: 1,
                pauseTime: pausedTime,
                workTime: workedTime,
                stops: stops,
            }));
            dispatch((0, actions_1.setTime)(pauseTime));
            dispatch((0, actions_1.setTimerMode)('stop'));
            dispatch((0, actions_1.setTimerPart)('timeout'));
            play();
        }
        if (part == 'timeout') {
            dispatch((0, actions_1.setTime)(workTime));
            dispatch((0, actions_1.setTimerMode)('stop'));
            dispatch((0, actions_1.setTimerPart)('work'));
            endTomato();
            play();
        }
    };
    const stopTimer = () => {
        run('stop');
        dispatch((0, actions_1.setTimerMode)('stop'));
        dispatch((0, actions_1.setTimerPart)('work'));
        dispatch((0, actions_1.setTime)(workTime));
        dispatch((0, actions_1.statAdd)({
            date: new Date(),
            tomato: 0,
            pauseTime: 0,
            workTime: 0,
            stops: 1,
        }));
    };
    const endTomato = () => {
        if (task) {
            dispatch((0, actions_1.decTomato)(task.id));
            dispatch((0, actions_1.statAdd)({
                date: new Date(),
                tomato: 1,
                pauseTime: pausedTime,
                workTime: workedTime,
                stops: stops,
            }));
            setPausedTime(0);
            setWorkedTime(0);
        }
    };
    const skipWork = () => {
        run('stop');
        dispatch((0, actions_1.setTimerMode)('stop'));
        dispatch((0, actions_1.setTimerPart)('timeout'));
        dispatch((0, actions_1.setTime)(pauseTime));
    };
    const skipTimeout = () => {
        dispatch((0, actions_1.setTimerMode)('stop'));
        dispatch((0, actions_1.setTimerPart)('work'));
        dispatch((0, actions_1.setTime)(workTime));
        endTomato();
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
}
exports.TimerContainer = TimerContainer;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("use-sound");

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:audio/mpeg;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAMCw+onN1AKDBBBAFBAEPMD//2f/+nFun/3M1Y6NbBv/+mxPRshZuiBn5dAauNXNzdADFAaA4aWwMdFT06DAZgCQGIBwDigBh8J/bwGDIBg0OgBC8BcHgMB//3hqwEQHAcAACgYEgoBioVf7/AGGAbGQAiH//+4arJInCwOYOADAYBDAQGGAV/9/v4GCQOAcBysLLLZOEkRQ0Ioa/////g2fBwFABA4DQDANBYLAoLFAFBwDaYYzloXOKoQv/////////++svm5oM1gCAAAAACAACBAAAQDBFs56TXbeZ1iZsOGkPvwVqCjAAYzdag2871gwBCYw/FZhABDNRsKBsdJx8Z5lkYfAWcPaqakFykwaj90a0jAUAGYHhJDACAYvlK4ac/thsLz5ITk4gsA9KnL81KL/6oaexpYq8V+l5m4mJJQ3H4yyacY4ApVgzWayDFchDBQD31flkcHUV4mDfPcgm72IYEGuxqRYe6GMkl8ckcrVRMCQU79fD4nRbU9S3ddxwpZiGTAwFysD2szLOZP35rlMP/7ksBmACgSHz+5voACbzpo/7FgAQBITqpdNUptdmrezBMACsDKPcikH9td7nWgt2brkkIUhwObvJuWtcj2s5m3lNoYjwK4Zt2kGP3O4Vp7DIQAk8NNi+8Hf3e+/rd/ebskQFTX///////////e1rdS/r1sFABa///////////6X/3NX/yIAGW9yJ2YYiAAAcAAAnh4s5KnGZzHvppZebE98Tmb1bJRNEeOEP1C9ALAWAxlplAwmCDAwggWAwUgSHKIeOE1QSVKB02db99BJEqlZZXRa8ykKUx4InVXWXTEkAMAIMwJBdFAkjpP5TPHKTbdTrW/9VGf7bLUsqAoDggpqjX9EkFsv/bV/10l/0jI3Cx4yZ/7DzZf+zV/7VGX/UZBqRIZAIm8ZhIAAHAAUQALOKc1zJXju3Gdqc+5odakjU2Ko7g9UDB4SA95bALSoA0LgYMGoZaHNLyKWiTZRKl3/M3ko80dfOoEgP5OkSq+cHyCHaA0lMl6vj+mY1P+pq3r+qpamq7ltjoQBgDipcdVteYEijUrbz2j6u65r396AFj/+5LAPgARsdNFx9aNwkM6aLmOUbhpn7Vcbbt/enf/7O3+6w9MeXl7xjIwAA8ACIgzmF1kFR5aDlHp64GfarP1LvLdI/7XEHzCQePc4A0sGjBAgMBDBh8or63++0Xwd/9/+c78ov/G+/b5/f1hubfGU2KtVZwfYJcQGhZgdVX8jT6Vb/qba390S0+9crImIJggFFZPIvVqrLCZz/qR1er1ubf/ChIoW/xkFt/ahq/r1nV/8zC9JE2AlqpiEgAAsABhgUnYpVuTcngS5IbD42ILq3+3sbkTeBeYoAwFFcy00Ew7DcwHAswxAEmAR76K/zvMI1MSH8u/r+f9N+c7f3Sb//zr4Spsu4Oq+gQ8AzGBMGTjoIKZetElzWm1TdbJqTq+uio1QrfZBbB+4IsRJoPS3zIbbsrv1Oun/W63NVt79gLGCm318XOtlf61Va/W12f+6JwMCDaaump4QSAABwAGsj51HSOxJYJq4U+bdXsnOz3KbKrKoi3JBCYCiIatW8Y1g0SAKYWBOJAE4sus9x/cdoLesu//973D9QZ/0/ec/8Ow//uSwHUAE/HTQ8x2jcJ/Omh5ntG4K2GXS2rsmxPgAHQXdkgbIV16igWze7VetOo/tXrnFG6e2eJZykER4N5impOtrZTHpda9trrpevZrm3Xq2UAoXJj2rfGMX/qpKp/bekWP9nMAt0OxOoB4u4QBAACwAKUHgpJpp89K6kudaepHyiVS3q7jfkELbxKMSEU5xJkzaAAwIDACiknq+0prb19qAKz35Zd/f73qVXsZfzVBzWOsrW3vel5pHV0UkSLAYBUCtoeS+ykq9IbiRpUnV2Wf0q9W11lZvUxdSLwWWgMbB2mzOt75KmCD+2yzbR9b7KSKqvtZaIGMAF9lfeoWlbL/aaqt/tZJHtqWgYgVBjRUmFikISAACgAHaA68bjjS9Kt9MJ33oeV45jKnwzpIbdhTMEAEYMiWbzW6ZWhyYKhWYShugMd+kz53DkvoYV9b//Hevj975b37u9d1vmpZMwuT1bIuiOoAjwAyaIKk1fsPo0TefdXz9TWevVWZoL3qcroLBAGAOukQdCg9qiiMBV+/WrQ2q2ZTlb99FQGFDlyj6v/7ksCbgBTR00HMdo3CkLpoOY7RudEVstl/rn+36tiyv+8vhZKLew/oVnlxAgAAYAA3CQWmRDUgDALWkmIamzw6pbEampuUQWo0VQNIBoMIPIBofBACBg+kwHNRhU7l+9y2hufc///8Pqfx8Ofc///Xc5utF61V0UTA6PoCCeAUCRdKSNBLoFIeDBJNTqbqUys5q1MYKJZWrckkTEEwkAMDy8yS1amoDtR1aus8yR2rV6lmq9WqyjMAAHFdbeqxwTqtGmur2QZS/6SnRN/q5kCQCHEulFmUICAABgAIA+VuIXkl5PhuRISvTyPQ7dPUicOXa8WaaYIhOYUjKb2yaBoEMOhgMEwyZa3BxJZX1hqSVYEpKnP1n3e5Xr6O9nd/Pf5Z8jVSfk1KtNBAdAWgAEo4CwsFmDgZNa+smyERW7VeplK3ZS+zlAxR22NkCLibgoahcZulfXURh2/tU0tKmVX1uqkz+jYzHwCEIjmMlVqZNMRstlVdmVen/mtyg7e2yIZGFsQqrlJAABhF9GULktnSewYR7xD9VJvLR+rL7SeWs9L/+5LAvIAVcdNBxnatysI6aDj+1bjwrpfAGC8ygRzGRpNuTk507zIIJMsFcmIK9nRSFb2XRGHqGHbFqrZrZyqeq4U3atnVymzpcKbOzNRmpaqmqnJk1koGKhGYaoA5wNrDVJOrKRefOkBHNLyaPSepJ9VFFLWiyjIvKSW1zEwJ4fQWhCjGg5x9aKmXUTRFjZJ1JLRpOXTVJaKKLOtGjScxNW0UVJLLAY2BuITqTpqktHyiMqQVknWikkk/rdaKKNJJJTpJJJLRbrGNDVouE1NyIMTE2DfTivVj9sUiHmoLUDdAbkEKSiQ6QY8SDmjQLM9oxJxHYK2haohmHYRE0BUTECCCxoBPNjjyu08L1Qa+D1t0bu9L0QHDEXorVnu2WdJw7R6IEQhGIpAEs0PsVJQJQJIZC0WAljYOsmLHlWH1nNiJiWPr/////5iZq6cikikVFJgmaH1nNbEsur//trpiJh9X//bXNiZYudNjUqMTAwVQDFn////6bpqq/66VQaorSBqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwNUAGwHTO2fyTcrNrdrA/K2xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksDVgAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//uSwP+AAAABLAAAAAAAACWAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAA==");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMount = void 0;
const react_1 = __webpack_require__(1);
const useIsMount = () => {
    const isMountRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        isMountRef.current = true;
    }, []);
    return isMountRef.current;
};
exports.useIsMount = useIsMount;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server");

/***/ })
/******/ ]);
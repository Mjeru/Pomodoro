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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\n// import { store } from './store'\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst NotFound_1 = __webpack_require__(/*! ./shared/NotFound */ \"./src/shared/NotFound/index.ts\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Stats_1 = __webpack_require__(/*! ./shared/Stats */ \"./src/shared/Stats/index.ts\");\r\nconst TimerContainer_1 = __webpack_require__(/*! ./shared/TimerContainer */ \"./src/shared/TimerContainer/index.ts\");\r\nconst actions_1 = __webpack_require__(/*! ./store/actions */ \"./src/store/actions.ts\");\r\nconst react_2 = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\r\nconst store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nfunction AppComponent() {\r\n    (0, react_1.useEffect)(() => {\r\n        document.documentElement.dataset.theme = store_1.store.getState().theme;\r\n        store_1.store.dispatch((0, actions_1.statAdd)({ date: new Date(), workTime: 0, pauseTime: 0, tomato: 0, stops: 0 }));\r\n    }, []);\r\n    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(react_2.PersistGate, Object.assign({ loading: null, persistor: store_1.persistor }, { children: (0, jsx_runtime_1.jsx)(TimerContainer_1.TimerContainer, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotFound_1.NotFound, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: '/', element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, { children: (0, jsx_runtime_1.jsx)(Header_1.Header, {}) }) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Content_1.Content, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/stats', element: (0, jsx_runtime_1.jsx)(Stats_1.Stats, {}) })] }))] }) }) })) })));\r\n}\r\nexports.App = (0, root_1.hot)(() => (0, jsx_runtime_1.jsx)(AppComponent, {}));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/assets/beep.mp3":
/*!*****************************!*\
  !*** ./src/assets/beep.mp3 ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:audio/mpeg;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAMCw+onN1AKDBBBAFBAEPMD//2f/+nFun/3M1Y6NbBv/+mxPRshZuiBn5dAauNXNzdADFAaA4aWwMdFT06DAZgCQGIBwDigBh8J/bwGDIBg0OgBC8BcHgMB//3hqwEQHAcAACgYEgoBioVf7/AGGAbGQAiH//+4arJInCwOYOADAYBDAQGGAV/9/v4GCQOAcBysLLLZOEkRQ0Ioa/////g2fBwFABA4DQDANBYLAoLFAFBwDaYYzloXOKoQv/////////++svm5oM1gCAAAAACAACBAAAQDBFs56TXbeZ1iZsOGkPvwVqCjAAYzdag2871gwBCYw/FZhABDNRsKBsdJx8Z5lkYfAWcPaqakFykwaj90a0jAUAGYHhJDACAYvlK4ac/thsLz5ITk4gsA9KnL81KL/6oaexpYq8V+l5m4mJJQ3H4yyacY4ApVgzWayDFchDBQD31flkcHUV4mDfPcgm72IYEGuxqRYe6GMkl8ckcrVRMCQU79fD4nRbU9S3ddxwpZiGTAwFysD2szLOZP35rlMP/7ksBmACgSHz+5voACbzpo/7FgAQBITqpdNUptdmrezBMACsDKPcikH9td7nWgt2brkkIUhwObvJuWtcj2s5m3lNoYjwK4Zt2kGP3O4Vp7DIQAk8NNi+8Hf3e+/rd/ebskQFTX///////////e1rdS/r1sFABa///////////6X/3NX/yIAGW9yJ2YYiAAAcAAAnh4s5KnGZzHvppZebE98Tmb1bJRNEeOEP1C9ALAWAxlplAwmCDAwggWAwUgSHKIeOE1QSVKB02db99BJEqlZZXRa8ykKUx4InVXWXTEkAMAIMwJBdFAkjpP5TPHKTbdTrW/9VGf7bLUsqAoDggpqjX9EkFsv/bV/10l/0jI3Cx4yZ/7DzZf+zV/7VGX/UZBqRIZAIm8ZhIAAHAAUQALOKc1zJXju3Gdqc+5odakjU2Ko7g9UDB4SA95bALSoA0LgYMGoZaHNLyKWiTZRKl3/M3ko80dfOoEgP5OkSq+cHyCHaA0lMl6vj+mY1P+pq3r+qpamq7ltjoQBgDipcdVteYEijUrbz2j6u65r396AFj/+5LAPgARsdNFx9aNwkM6aLmOUbhpn7Vcbbt/enf/7O3+6w9MeXl7xjIwAA8ACIgzmF1kFR5aDlHp64GfarP1LvLdI/7XEHzCQePc4A0sGjBAgMBDBh8or63++0Xwd/9/+c78ov/G+/b5/f1hubfGU2KtVZwfYJcQGhZgdVX8jT6Vb/qba390S0+9crImIJggFFZPIvVqrLCZz/qR1er1ubf/ChIoW/xkFt/ahq/r1nV/8zC9JE2AlqpiEgAAsABhgUnYpVuTcngS5IbD42ILq3+3sbkTeBeYoAwFFcy00Ew7DcwHAswxAEmAR76K/zvMI1MSH8u/r+f9N+c7f3Sb//zr4Spsu4Oq+gQ8AzGBMGTjoIKZetElzWm1TdbJqTq+uio1QrfZBbB+4IsRJoPS3zIbbsrv1Oun/W63NVt79gLGCm318XOtlf61Va/W12f+6JwMCDaaump4QSAABwAGsj51HSOxJYJq4U+bdXsnOz3KbKrKoi3JBCYCiIatW8Y1g0SAKYWBOJAE4sus9x/cdoLesu//973D9QZ/0/ec/8Ow//uSwHUAE/HTQ8x2jcJ/Omh5ntG4K2GXS2rsmxPgAHQXdkgbIV16igWze7VetOo/tXrnFG6e2eJZykER4N5impOtrZTHpda9trrpevZrm3Xq2UAoXJj2rfGMX/qpKp/bekWP9nMAt0OxOoB4u4QBAACwAKUHgpJpp89K6kudaepHyiVS3q7jfkELbxKMSEU5xJkzaAAwIDACiknq+0prb19qAKz35Zd/f73qVXsZfzVBzWOsrW3vel5pHV0UkSLAYBUCtoeS+ykq9IbiRpUnV2Wf0q9W11lZvUxdSLwWWgMbB2mzOt75KmCD+2yzbR9b7KSKqvtZaIGMAF9lfeoWlbL/aaqt/tZJHtqWgYgVBjRUmFikISAACgAHaA68bjjS9Kt9MJ33oeV45jKnwzpIbdhTMEAEYMiWbzW6ZWhyYKhWYShugMd+kz53DkvoYV9b//Hevj975b37u9d1vmpZMwuT1bIuiOoAjwAyaIKk1fsPo0TefdXz9TWevVWZoL3qcroLBAGAOukQdCg9qiiMBV+/WrQ2q2ZTlb99FQGFDlyj6v/7ksCbgBTR00HMdo3CkLpoOY7RudEVstl/rn+36tiyv+8vhZKLew/oVnlxAgAAYAA3CQWmRDUgDALWkmIamzw6pbEampuUQWo0VQNIBoMIPIBofBACBg+kwHNRhU7l+9y2hufc///8Pqfx8Ofc///Xc5utF61V0UTA6PoCCeAUCRdKSNBLoFIeDBJNTqbqUys5q1MYKJZWrckkTEEwkAMDy8yS1amoDtR1aus8yR2rV6lmq9WqyjMAAHFdbeqxwTqtGmur2QZS/6SnRN/q5kCQCHEulFmUICAABgAIA+VuIXkl5PhuRISvTyPQ7dPUicOXa8WaaYIhOYUjKb2yaBoEMOhgMEwyZa3BxJZX1hqSVYEpKnP1n3e5Xr6O9nd/Pf5Z8jVSfk1KtNBAdAWgAEo4CwsFmDgZNa+smyERW7VeplK3ZS+zlAxR22NkCLibgoahcZulfXURh2/tU0tKmVX1uqkz+jYzHwCEIjmMlVqZNMRstlVdmVen/mtyg7e2yIZGFsQqrlJAABhF9GULktnSewYR7xD9VJvLR+rL7SeWs9L/+5LAvIAVcdNBxnatysI6aDj+1bjwrpfAGC8ygRzGRpNuTk507zIIJMsFcmIK9nRSFb2XRGHqGHbFqrZrZyqeq4U3atnVymzpcKbOzNRmpaqmqnJk1koGKhGYaoA5wNrDVJOrKRefOkBHNLyaPSepJ9VFFLWiyjIvKSW1zEwJ4fQWhCjGg5x9aKmXUTRFjZJ1JLRpOXTVJaKKLOtGjScxNW0UVJLLAY2BuITqTpqktHyiMqQVknWikkk/rdaKKNJJJTpJJJLRbrGNDVouE1NyIMTE2DfTivVj9sUiHmoLUDdAbkEKSiQ6QY8SDmjQLM9oxJxHYK2haohmHYRE0BUTECCCxoBPNjjyu08L1Qa+D1t0bu9L0QHDEXorVnu2WdJw7R6IEQhGIpAEs0PsVJQJQJIZC0WAljYOsmLHlWH1nNiJiWPr/////5iZq6cikikVFJgmaH1nNbEsur//trpiJh9X//bXNiZYudNjUqMTAwVQDFn////6bpqq/66VQaorSBqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwNUAGwHTO2fyTcrNrdrA/K2xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksDVgAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//uSwP+AAAABLAAAAAAAACWAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAA==\");\n\n//# sourceURL=webpack:///./src/assets/beep.mp3?");

/***/ }),

/***/ "./src/hooks/useMounted.ts":
/*!*********************************!*\
  !*** ./src/hooks/useMounted.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsMount = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst useIsMount = () => {\r\n    const isMountRef = (0, react_1.useRef)(false);\r\n    (0, react_1.useEffect)(() => {\r\n        isMountRef.current = true;\r\n    }, []);\r\n    return isMountRef.current;\r\n};\r\nexports.useIsMount = useIsMount;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useMounted.ts?");

/***/ }),

/***/ "./src/hooks/useWorker.ts":
/*!********************************!*\
  !*** ./src/hooks/useWorker.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useWebworker = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst workerHandler = () => {\r\n    let timerContainer = 0;\r\n    onmessage = (event) => {\r\n        switch (event.data) {\r\n            case 'start':\r\n                {\r\n                    postMessage('tick');\r\n                    clearInterval(timerContainer);\r\n                    timerContainer = setInterval(() => {\r\n                        postMessage('tick');\r\n                    }, 1000);\r\n                }\r\n                break;\r\n            case 'pause':\r\n                {\r\n                    clearInterval(timerContainer);\r\n                    timerContainer = setInterval(() => {\r\n                        postMessage('tick');\r\n                    }, 1000);\r\n                }\r\n                break;\r\n            case 'stop': {\r\n                clearInterval(timerContainer);\r\n                break;\r\n            }\r\n        }\r\n    };\r\n};\r\nconst useWebworker = () => {\r\n    const [result, setResult] = (0, react_1.useState)(0);\r\n    const workerRef = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(() => {\r\n        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})()`])));\r\n        workerRef.current = worker;\r\n        worker.onmessage = () => setResult(result => result + 1);\r\n        return () => {\r\n            worker.terminate();\r\n        };\r\n    }, []);\r\n    return {\r\n        result,\r\n        run: (value) => { var _a; return (_a = workerRef.current) === null || _a === void 0 ? void 0 : _a.postMessage(value); }\r\n    };\r\n};\r\nexports.useWebworker = useWebworker;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useWorker.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.cdnfonts.com/css/sf-ui-display);\"]);\n// Module\nexports.push([module.i, \":root[data-theme=\\\"dark\\\"] {\\n  --black: #eae8e8;\\n  --yellow: #b4926d;\\n  --purple: #757388;\\n  --blue: #637780;\\n  --orange: #cc6633;\\n  --red2: #EA8A79;\\n  --red: #dc3e22;\\n  --redDark: #B7280F;\\n  --green: #a8b64f;\\n  --green2: #a8b64f;\\n  --green3: #899441;\\n  --whiteLightness: 100%;\\n  --white: #333333;\\n  --greyF4: #484646;\\n  --greyE4: #656565;\\n  --grey33: #d9d9d9;\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 95%));\\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 90%));\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 95%));\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 63%));\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey-demi-dark: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n  /*filter: invert(100%) hue-rotate(180deg);*/\\n}\\n\\n:root[data-theme=\\\"light\\\"] {\\n  --yellow: #FFDDA9;\\n  --purple: #DFDCFE;\\n  --blue: #C5F1FF;\\n  --black: #333333;\\n  --orange: #cc6633;\\n  --red2: #EA8A79;\\n  --red: #dc3e22;\\n  --redDark: #B7280F;\\n  --green: #a8b64f;\\n  --green2: #a8b64f;\\n  --green3: #899441;\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --greyF4: #f4f4f4;\\n  --greyE4: #e4e4e4;\\n  --grey33: #333333;\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n  --grey-demi-dark: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  min-height: 1024px;\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--white);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: \\\"SF UI Display\\\", serif;\\n  position: relative;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content, token) => `\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Pomodoro</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n    if (window.localStorage.getItem('token') && window.localStorage.getItem('token') === 'undefined'){\n        window.localStorage.removeItem('token')\n    }\n    if (!window.localStorage.getItem('token') && '${token}' !== 'undefined'){\n        window.localStorage.setItem('token','${token}')\n    }\n    </script>\n</head>\n\n<body>\n    <div id=\"react_root\">${content}</div>\n    <div id=\"modal_root\"><div>\n</body>\n\n</html>\n`;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst app = (0, express_1.default)();\r\nconst server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"/*\", (req, res) => {\r\n    let html = server_1.default.renderToString((0, jsx_runtime_1.jsx)(server_2.StaticRouter, Object.assign({ location: req.url }, { children: (0, App_1.App)() })));\r\n    res.send((0, indexTemplate_1.indexTemplate)(html));\r\n});\r\napp.listen(3000, () => {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;\r\n    return ((0, jsx_runtime_1.jsx)(\"div\", { className: (0, classnames_1.default)(break_css_1.default[`s${size}`], { [break_css_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_css_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_css_1.default[`desktop_s${desktopSize}`]]: desktopSize }, { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"s25\": \"break__s25--2iv3f\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/Button/Button.tsx":
/*!**************************************!*\
  !*** ./src/shared/Button/Button.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Button = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst button_css_1 = __importDefault(__webpack_require__(/*! ./button.css */ \"./src/shared/Button/button.css\"));\r\nfunction Button({ text, onClick, type }) {\r\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"button\", Object.assign({ onClick: onClick, className: button_css_1.default[type ? type : 'default'] }, { children: text })) }));\r\n}\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack:///./src/shared/Button/Button.tsx?");

/***/ }),

/***/ "./src/shared/Button/button.css":
/*!**************************************!*\
  !*** ./src/shared/Button/button.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"default\": \"button__default--1RcHZ\",\n\t\"disabledR\": \"button__disabledR--1yGGa\",\n\t\"activeR\": \"button__activeR--EVZgE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Button/button.css?");

/***/ }),

/***/ "./src/shared/Button/index.ts":
/*!************************************!*\
  !*** ./src/shared/Button/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/shared/Button/Button.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Button/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nconst Timer_1 = __webpack_require__(/*! ../Timer */ \"./src/shared/Timer/index.ts\");\r\nconst TaskList_1 = __webpack_require__(/*! ../TaskList */ \"./src/shared/TaskList/index.ts\");\r\nfunction Content() {\r\n    return ((0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: content_css_1.default.container }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: content_css_1.default.content }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h2\", { children: \"\\u0423\\u0440\\u0430! \\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u043C\\u043E\\u0436\\u043D\\u043E \\u043D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C:\" }), (0, jsx_runtime_1.jsxs)(\"ul\", Object.assign({ className: content_css_1.default.infoList }, { children: [(0, jsx_runtime_1.jsx)(\"li\", { children: \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E \\u0438 \\u043D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435 \\u043D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0435\\u0439 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"\\u0417\\u0430\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u0435 \\u0442\\u0430\\u0439\\u043C\\u0435\\u0440 (\\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB)\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"\\u0420\\u0430\\u0431\\u043E\\u0442\\u0430\\u0439\\u0442\\u0435 \\u043F\\u043E\\u043A\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u043D\\u0435 \\u043F\\u0440\\u043E\\u0437\\u0432\\u043E\\u043D\\u0438\\u0442\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u043A\\u043E\\u0440\\u043E\\u0442\\u043A\\u0438\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (3-5 \\u043C\\u0438\\u043D\\u0443\\u0442)\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0430\\u0439\\u0442\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u0437\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u043E\\u043C\\u00BB, \\u043F\\u043E\\u043A\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043D\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430. \\u041A\\u0430\\u0436\\u0434\\u044B\\u0435 4 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u0430\\u00BB \\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u0434\\u043B\\u0438\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (15-30 \\u043C\\u0438\\u043D\\u0443\\u0442).\" })] })), (0, jsx_runtime_1.jsx)(TaskList_1.TaskList, {})] }), (0, jsx_runtime_1.jsx)(Timer_1.Timer, {})] })) })));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\",\n\t\"container\": \"content__container--2div-\",\n\t\"infoList\": \"content__infoList--1ny9L\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nfunction Dropdown({ button, children, isOpen, onOpen, onClose, }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(isOpen);\r\n    const handleOpen = () => {\r\n        if (onOpen)\r\n            onOpen();\r\n        setIsDropdownOpen(!isDropdownOpen);\r\n    };\r\n    const close = () => {\r\n        if (onClose)\r\n            onClose();\r\n        setIsDropdownOpen(false);\r\n    };\r\n    const container = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(() => {\r\n        if (isDropdownOpen) {\r\n            document.body.addEventListener(\"click\", function CloseDropdown(ev) {\r\n                close();\r\n                document.body.removeEventListener(\"click\", CloseDropdown);\r\n            });\r\n        }\r\n    }, [isDropdownOpen]);\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: dropdown_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ onClick: handleOpen, className: isDropdownOpen ? dropdown_css_1.default.dropdownOpen : \"\" }, { children: button })), isDropdownOpen && ((0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: dropdown_css_1.default.listContainer, onClick: close }, { children: (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: dropdown_css_1.default.list, ref: container }, { children: children })) })))] })));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\",\n\t\"dropdownOpen\": \"dropdown__dropdownOpen--1Av0m\",\n\t\"dropdownList\": \"dropdown__dropdownList--2t5CY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList.tsx":
/*!************************************!*\
  !*** ./src/shared/GenericList.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst Icon_1 = __webpack_require__(/*! ./Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction noop() { }\r\nconst GenericList = function ({ list }) {\r\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: list.map(({ As = \"div\", text, onClick = noop, className, id, href, icon }) => ((0, jsx_runtime_1.jsxs)(As, Object.assign({ className: className, onClick: onClick, href: href }, { children: [icon && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: icon }), text] }), id))) }));\r\n};\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Header() {\r\n    return ((0, jsx_runtime_1.jsx)(\"header\", Object.assign({ className: header_css_1.default.header }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.logoBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomatoLogo' }), \"pomodoro_box\"] })) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: 'stats' }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.statBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'statistic', size: 16 }), \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430\"] })) }))] })) })));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"container\": \"header__container--2eZxl\",\n\t\"logoBlock\": \"header__logoBlock--2nQWQ\",\n\t\"statBlock\": \"header__statBlock--2YowI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nfunction Icon(props) {\r\n    const { iconName, size } = props;\r\n    let iconSvg;\r\n    switch (iconName) {\r\n        case 'tomatoLogo': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"40\", height: \"40\", viewBox: \"0 0 40 40\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsxs)(\"g\", Object.assign({ clipPath: \"url(#clip0_13884_174)\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z\", fill: \"#899441\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z\", fill: \"#A8B64F\" })] })), (0, jsx_runtime_1.jsx)(\"defs\", { children: (0, jsx_runtime_1.jsx)(\"clipPath\", Object.assign({ id: \"clip0_13884_174\" }, { children: (0, jsx_runtime_1.jsx)(\"rect\", { width: \"40\", height: \"40\", fill: \"white\" }) })) })] })));\r\n            break;\r\n        }\r\n        case 'tomatoSad': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsxs)(\"g\", Object.assign({ clipPath: \"url(#clip0_16_527)\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z\", fill: \"#DC3E22\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z\", fill: \"#899441\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z\", fill: \"#A8B64F\" }), (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"41.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }), (0, jsx_runtime_1.jsx)(\"g\", Object.assign({ filter: \"url(#filter0_f_16_527)\" }, { children: (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"29.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" }) })), (0, jsx_runtime_1.jsx)(\"g\", Object.assign({ filter: \"url(#filter1_f_16_527)\" }, { children: (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"85.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" }) })), (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"73.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M46 78C50 82 64.5 83 68.5 78\", stroke: \"black\" })] })), (0, jsx_runtime_1.jsxs)(\"defs\", { children: [(0, jsx_runtime_1.jsxs)(\"filter\", Object.assign({ id: \"filter0_f_16_527\", x: \"20\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" }, { children: [(0, jsx_runtime_1.jsx)(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }), (0, jsx_runtime_1.jsx)(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }), (0, jsx_runtime_1.jsx)(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })] })), (0, jsx_runtime_1.jsxs)(\"filter\", Object.assign({ id: \"filter1_f_16_527\", x: \"76\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" }, { children: [(0, jsx_runtime_1.jsx)(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }), (0, jsx_runtime_1.jsx)(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }), (0, jsx_runtime_1.jsx)(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })] })), (0, jsx_runtime_1.jsx)(\"clipPath\", Object.assign({ id: \"clip0_16_527\" }, { children: (0, jsx_runtime_1.jsx)(\"rect\", { width: \"115\", height: \"115\", fill: \"white\" }) }))] })] })));\r\n            break;\r\n        }\r\n        case 'arrow': {\r\n            iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: \"16\", height: \"10\", viewBox: \"0 0 16 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M1 9L8 2L15 9\", stroke: \"#B7280F\", strokeWidth: \"2\" }) })));\r\n            break;\r\n        }\r\n        case 'focusDis': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'pauseDis': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3154 30.1579V57.3158L70.8944 70.8947\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'stopDis': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M21 20L95 94\", stroke: \"#C4C4C4\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'stop': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#7FC2D7\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M21 20L95 94\", stroke: \"#7FC2D7\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'pause': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#9C97D7\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3154 30.158V57.3159L70.8944 70.8948\", stroke: \"#9C97D7\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'focus': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z\", stroke: \"#FFAE35\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z\", stroke: \"#FFAE35\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z\", stroke: \"#FFAE35\", strokeWidth: \"5\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })] })));\r\n            break;\r\n        }\r\n        case 'tomato':\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"81\", height: \"81\", viewBox: \"0 0 81 81\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsxs)(\"g\", Object.assign({ clipPath: \"url(#clip0_16_413)\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M78.8031 47.4452C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.081C2.37305 21.9757 20.017 9 41.1223 9C62.2283 9 78.8031 26.3393 78.8031 47.4452Z\", fill: \"#DC3E22\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3439 62.8917 17.3439C62.8917 17.3439 55.9932 13.7785 50.9492 14.0023C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92999 51.6862 6.93824 51.6862 6.93824C51.6862 6.93824 46.3974 7.22064 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65243 25.7565 8.44232 25.7565 8.44232C25.7565 8.44232 31.8459 11.8966 34.5857 15.3426C35.6554 16.6883 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7889 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0222 33.1722 24.0095C35.036 23.3474 37.0065 23.1719 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8532C34.88 32.3806 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7835 43.3412 31.6218C44.2905 28.9723 44.5255 26.3122 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283Z\", fill: \"#899441\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8364 38.757 19.5894 38.7934 18.0901C38.7965 17.9604 38.9275 8.83154 33.8564 4.86224C32.6735 3.9365 32.4647 2.22717 33.3904 1.04373C34.3168 -0.139084 36.0261 -0.347962 37.2089 0.578393C44.4609 6.25332 44.2446 17.7416 44.2323 18.2279C44.1933 19.7049 42.9833 20.8766 41.5144 20.8766Z\", fill: \"#A8B64F\" })] })), (0, jsx_runtime_1.jsx)(\"defs\", { children: (0, jsx_runtime_1.jsx)(\"clipPath\", Object.assign({ id: \"clip0_16_413\" }, { children: (0, jsx_runtime_1.jsx)(\"rect\", { width: \"81\", height: \"81\", fill: \"white\" }) })) })] })));\r\n            break;\r\n        case 'addButton':\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" })] })));\r\n            break;\r\n        case 'disDec': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"16\", height: \"16\", viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z\", fill: \"#C4C4C4\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z\", fill: \"#C4C4C4\" })] })));\r\n            break;\r\n        }\r\n        case 'delete': {\r\n            iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z\", fill: \"#A8B64F\" }) })));\r\n            break;\r\n        }\r\n        case 'edit': {\r\n            iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.825 2.9875 13.825 2.515 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z\", fill: \"#A8B64F\" }) })));\r\n            break;\r\n        }\r\n        case 'dec': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"16\", height: \"16\", viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: \"M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z\", fill: \"#A8B64F\" }), (0, jsx_runtime_1.jsx)(\"path\", { d: \"M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z\", fill: \"#A8B64F\" })] })));\r\n            break;\r\n        }\r\n        case 'inc': {\r\n            iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: \"16\", height: \"16\", viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z\", fill: \"#A8B64F\" }) })));\r\n            break;\r\n        }\r\n        case 'menu': {\r\n            iconSvg = ((0, jsx_runtime_1.jsxs)(\"svg\", Object.assign({ width: \"26\", height: \"6\", viewBox: \"0 0 26 6\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: [(0, jsx_runtime_1.jsx)(\"circle\", { cx: \"3\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" }), (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"13\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" }), (0, jsx_runtime_1.jsx)(\"circle\", { cx: \"23\", cy: \"3\", r: \"3\", fill: \"#C4C4C4\" })] })));\r\n            break;\r\n        }\r\n        case 'statistic':\r\n            {\r\n                iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: size, height: size, viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z\" }) })));\r\n            }\r\n            break;\r\n        default:\r\n            iconSvg = ((0, jsx_runtime_1.jsx)(\"svg\", Object.assign({ width: size !== null && size !== void 0 ? size : '15', height: size !== null && size !== void 0 ? size : '15', viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#999999\" }) })));\r\n    }\r\n    return iconSvg;\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Layout({ children }) {\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: layout_css_1.default.layout }, { children: [children, (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] })));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/NotFound/NotFound.tsx":
/*!******************************************!*\
  !*** ./src/shared/NotFound/NotFound.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFound = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nfunction NotFound() {\r\n    return ((0, jsx_runtime_1.jsx)(\"div\", { children: (0, jsx_runtime_1.jsx)(\"h1\", { children: \"Not found\" }) }));\r\n}\r\nexports.NotFound = NotFound;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFound.tsx?");

/***/ }),

/***/ "./src/shared/NotFound/index.ts":
/*!**************************************!*\
  !*** ./src/shared/NotFound/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFound */ \"./src/shared/NotFound/NotFound.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/DateStat/DateStat.tsx":
/*!************************************************!*\
  !*** ./src/shared/Stats/DateStat/DateStat.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DateStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst datestat_css_1 = __importDefault(__webpack_require__(/*! ./datestat.css */ \"./src/shared/Stats/DateStat/datestat.css\"));\r\nfunction DateStat({ date, workTime }) {\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: datestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: datestat_css_1.default.title }, { children: date ? getDay(date) : '' })), workTime ? ((0, jsx_runtime_1.jsxs)(\"p\", Object.assign({ className: datestat_css_1.default.text }, { children: [\"\\u0412\\u044B \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B\\u0438 \\u043D\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430\\u043C\\u0438 \\u0432 \\u0442\\u0435\\u0447\\u0435\\u043D\\u0438\\u0438 \", (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: datestat_css_1.default.timeHighlight }, { children: formatTime(workTime) }))] }))) : ((0, jsx_runtime_1.jsx)(\"p\", Object.assign({ className: datestat_css_1.default.text }, { children: \"\\u041D\\u0435\\u0442 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\" })))] })));\r\n}\r\nexports.DateStat = DateStat;\r\nconst getDay = (date) => {\r\n    if (date.length < 12)\r\n        return date;\r\n    switch (new Date(date).getDay()) {\r\n        case 1: {\r\n            return 'Понедельник';\r\n        }\r\n        case 2: {\r\n            return 'Вторник';\r\n        }\r\n        case 3: {\r\n            return 'Среда';\r\n        }\r\n        case 4: {\r\n            return 'Четверг';\r\n        }\r\n        case 5: {\r\n            return 'Пятница';\r\n        }\r\n        case 6: {\r\n            return 'Суббота';\r\n        }\r\n        case 0: {\r\n            return 'Воскресенье';\r\n        }\r\n        default: return '';\r\n    }\r\n};\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (minutes === 0) {\r\n        return `${hours} часов`;\r\n    }\r\n    if (hours === 0) {\r\n        return `${minutes} минут`;\r\n    }\r\n    return `${hours} часов ${minutes} минут`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DateStat/DateStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/DateStat/datestat.css":
/*!************************************************!*\
  !*** ./src/shared/Stats/DateStat/datestat.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"datestat__wrapper--2xQQo\",\n\t\"title\": \"datestat__title--3RUof\",\n\t\"text\": \"datestat__text--3fRQy\",\n\t\"timeHighlight\": \"datestat__timeHighlight--1R_Rt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DateStat/datestat.css?");

/***/ }),

/***/ "./src/shared/Stats/DateStat/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Stats/DateStat/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DateStat */ \"./src/shared/Stats/DateStat/DateStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DateStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/DiaStat.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Stats/DiaStat/DiaStat.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DiaStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst diastat_css_1 = __importDefault(__webpack_require__(/*! ./diastat.css */ \"./src/shared/Stats/DiaStat/diastat.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst noop = () => {\r\n    //do nothing.\r\n};\r\nfunction DiaStat({ stats, setTarget, target }) {\r\n    const [max, setMax] = (0, react_1.useState)(0);\r\n    (0, react_1.useEffect)(() => {\r\n        const maxMap = Math.max(...stats.map((el) => (el.workTime ? el.workTime : 0)));\r\n        setMax(Math.ceil(maxMap / (1500 * 5)) * 1500 * 5);\r\n    }, [stats]);\r\n    const clickHandler = (date) => () => {\r\n        setTarget(date);\r\n    };\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.legendWrapper }, { children: [(0, jsx_runtime_1.jsx)(\"div\", {}), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 4) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 3) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 2) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 1) }))] })] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.daysWrapper }, { children: [(0, jsx_runtime_1.jsx)(Day, { stat: stats[0], clickHandler: clickHandler(stats[0]), target: target, max: max, day: 'Пн' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[1], clickHandler: clickHandler(stats[1]), target: target, max: max, day: 'Вт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[2], clickHandler: clickHandler(stats[2]), target: target, max: max, day: 'Ср' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[3], clickHandler: clickHandler(stats[3]), target: target, max: max, day: 'Чт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[4], clickHandler: clickHandler(stats[4]), target: target, max: max, day: 'Пт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[5], clickHandler: clickHandler(stats[5]), target: target, max: max, day: 'Сб' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[6], clickHandler: clickHandler(stats[6]), target: target, max: max, day: 'Вс' })] })), (0, jsx_runtime_1.jsx)(\"div\", { className: diastat_css_1.default.dioFooter })] })));\r\n}\r\nexports.DiaStat = DiaStat;\r\nconst Day = ({ stat, clickHandler, target, max, day }) => {\r\n    if (stat)\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selected : '', !stat.workTime ? diastat_css_1.default.disabled : ''), style: {\r\n                            height: stat.workTime\r\n                                ? `${(stat.workTime / max) * 100}%`\r\n                                : `5px`,\r\n                        } }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selectedText : '') }, { children: day }))] })));\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, diastat_css_1.default.disabled), style: { height: '5px' } }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, '') }, { children: day }))] })));\r\n};\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (minutes === 0) {\r\n        return `${hours} ч`;\r\n    }\r\n    if (hours === 0) {\r\n        return `${minutes} мин`;\r\n    }\r\n    return `${hours} ч ${minutes} мин`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/DiaStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/diastat.css":
/*!**********************************************!*\
  !*** ./src/shared/Stats/DiaStat/diastat.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"diastat__container--14qD8\",\n\t\"daysWrapper\": \"diastat__daysWrapper--mHCGx\",\n\t\"day\": \"diastat__day--2FCL2\",\n\t\"dayBar\": \"diastat__dayBar--1ahU_\",\n\t\"datBarInner\": \"diastat__datBarInner--1h65Y\",\n\t\"dayText\": \"diastat__dayText--1VTgw\",\n\t\"dioFooter\": \"diastat__dioFooter--2q8NV\",\n\t\"selected\": \"diastat__selected--2trww\",\n\t\"selectedText\": \"diastat__selectedText--32L6s\",\n\t\"disabled\": \"diastat__disabled--DSb4X\",\n\t\"legendWrapper\": \"diastat__legendWrapper--HPAs3\",\n\t\"legedText\": \"diastat__legedText--CBjnQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/diastat.css?");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Stats/DiaStat/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DiaStat */ \"./src/shared/Stats/DiaStat/DiaStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/FocusStat/FocusStat.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Stats/FocusStat/FocusStat.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FocusStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst focusstat_css_1 = __importDefault(__webpack_require__(/*! ./focusstat.css */ \"./src/shared/Stats/FocusStat/focusstat.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction FocusStat({ value }) {\r\n    if (value) {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: focusstat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: focusstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: focusstat_css_1.default.text }, { children: \"\\u0424\\u043E\\u043A\\u0443\\u0441\" })), (0, jsx_runtime_1.jsxs)(\"h3\", Object.assign({ className: focusstat_css_1.default.value }, { children: [value, \"%\"] }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: focusstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'focus' }) }))] })));\r\n    }\r\n    else {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(focusstat_css_1.default.wrapper, focusstat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: focusstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: focusstat_css_1.default.text }, { children: \"\\u0424\\u043E\\u043A\\u0443\\u0441\" })), (0, jsx_runtime_1.jsxs)(\"h3\", Object.assign({ className: focusstat_css_1.default.value }, { children: [0, \"%\"] }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: focusstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'focusDis' }) }))] })));\r\n    }\r\n}\r\nexports.FocusStat = FocusStat;\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/FocusStat/FocusStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/FocusStat/focusstat.css":
/*!**************************************************!*\
  !*** ./src/shared/Stats/FocusStat/focusstat.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"focusstat__wrapper--2fiPw\",\n\t\"disabled\": \"focusstat__disabled--XJ9sU\",\n\t\"value\": \"focusstat__value--1hG9R\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/FocusStat/focusstat.css?");

/***/ }),

/***/ "./src/shared/Stats/FocusStat/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Stats/FocusStat/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FocusStat */ \"./src/shared/Stats/FocusStat/FocusStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/FocusStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/PauseStat/PauseStat.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Stats/PauseStat/PauseStat.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PauseStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst pausestat_css_1 = __importDefault(__webpack_require__(/*! ./pausestat.css */ \"./src/shared/Stats/PauseStat/pausestat.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction PauseStat({ value }) {\r\n    if (value) {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: pausestat_css_1.default.text }, { children: \"\\u0412\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430 \\u043F\\u0430\\u0443\\u0437\\u0435\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(value) }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pause' }) }))] })));\r\n    }\r\n    else {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(pausestat_css_1.default.wrapper, pausestat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: pausestat_css_1.default.text }, { children: \"\\u0412\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430 \\u043F\\u0430\\u0443\\u0437\\u0435\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(0) }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pauseDis' }) }))] })));\r\n    }\r\n}\r\nexports.PauseStat = PauseStat;\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (seconds === 0) {\r\n        return `${minutes}м`;\r\n    }\r\n    if (hours === 0 && minutes === 0) {\r\n        return `${seconds}c`;\r\n    }\r\n    if (hours === 0 && minutes !== 0) {\r\n        return `${minutes}м`;\r\n    }\r\n    if (minutes === 0 && hours !== 0) {\r\n        return `${hours}ч`;\r\n    }\r\n    const timeString = `${hours}ч ${minutes}м`;\r\n    return timeString;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/PauseStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/PauseStat/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Stats/PauseStat/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PauseStat */ \"./src/shared/Stats/PauseStat/PauseStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/PauseStat/pausestat.css":
/*!**************************************************!*\
  !*** ./src/shared/Stats/PauseStat/pausestat.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"pausestat__wrapper--ovDlV\",\n\t\"disabled\": \"pausestat__disabled--vlV3V\",\n\t\"value\": \"pausestat__value--1CAYx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/pausestat.css?");

/***/ }),

/***/ "./src/shared/Stats/StatSelect/StatSelect.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Stats/StatSelect/StatSelect.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StatSelect = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst statselect_css_1 = __importDefault(__webpack_require__(/*! ./statselect.css */ \"./src/shared/Stats/StatSelect/statselect.css\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst options = [\r\n    { value: 'chocolate', label: 'Эта неделя' },\r\n    { value: 'strawberry', label: 'Прошедшая неделя' },\r\n    { value: 'vanilla', label: '2 недели назад' },\r\n];\r\nfunction StatSelect({ setWeek, week }) {\r\n    const [isOpen, setIsOpen] = (0, react_1.useState)(false);\r\n    const [selected, setSelected] = (0, react_1.useState)(options[0]);\r\n    const setOpen = () => {\r\n        setIsOpen(true);\r\n    };\r\n    const setClose = () => {\r\n        setIsOpen(false);\r\n    };\r\n    const clickHandler = (value) => () => {\r\n        console.log('clickHandler');\r\n        setWeek(value);\r\n    };\r\n    return ((0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, Object.assign({ onOpen: setOpen, onClose: setClose, button: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: statselect_css_1.default.input }, { children: [(0, jsx_runtime_1.jsx)(\"span\", { children: week === 'current'\r\n                        ? 'Эта неделя'\r\n                        : week === 'past'\r\n                            ? 'Прошедшая неделя'\r\n                            : week === '2past'\r\n                                ? '2 недели назад'\r\n                                : '' }), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: (0, classnames_1.default)(statselect_css_1.default.inputArrow, isOpen ? statselect_css_1.default.open : '') }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'arrow' }) }))] })) }, { children: (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('current') }, { children: (0, jsx_runtime_1.jsx)(\"span\", { children: options[0].label }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('past') }, { children: (0, jsx_runtime_1.jsx)(\"span\", { children: options[1].label }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: statselect_css_1.default.input, onClick: clickHandler('2past') }, { children: (0, jsx_runtime_1.jsx)(\"span\", { children: options[2].label }) }))] }) })));\r\n}\r\nexports.StatSelect = StatSelect;\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StatSelect/StatSelect.tsx?");

/***/ }),

/***/ "./src/shared/Stats/StatSelect/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Stats/StatSelect/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./StatSelect */ \"./src/shared/Stats/StatSelect/StatSelect.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StatSelect/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/StatSelect/statselect.css":
/*!****************************************************!*\
  !*** ./src/shared/Stats/StatSelect/statselect.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"statselect__input--38Aon\",\n\t\"inputArrow\": \"statselect__inputArrow--3Pf5D\",\n\t\"open\": \"statselect__open--27Sp9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StatSelect/statselect.css?");

/***/ }),

/***/ "./src/shared/Stats/Stats.tsx":
/*!************************************!*\
  !*** ./src/shared/Stats/Stats.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Stats = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst stats_css_1 = __importDefault(__webpack_require__(/*! ./stats.css */ \"./src/shared/Stats/stats.css\"));\r\nconst DateStat_1 = __webpack_require__(/*! ./DateStat */ \"./src/shared/Stats/DateStat/index.ts\");\r\nconst TomatoStat_1 = __webpack_require__(/*! ./TomatoStat */ \"./src/shared/Stats/TomatoStat/index.ts\");\r\nconst DiaStat_1 = __webpack_require__(/*! ./DiaStat */ \"./src/shared/Stats/DiaStat/index.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst FocusStat_1 = __webpack_require__(/*! ./FocusStat */ \"./src/shared/Stats/FocusStat/index.ts\");\r\nconst PauseStat_1 = __webpack_require__(/*! ./PauseStat */ \"./src/shared/Stats/PauseStat/index.ts\");\r\nconst StopStat_1 = __webpack_require__(/*! ./StopStat */ \"./src/shared/Stats/StopStat/index.ts\");\r\nconst StatSelect_1 = __webpack_require__(/*! ./StatSelect */ \"./src/shared/Stats/StatSelect/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\r\nfunction Stats() {\r\n    const stats = (0, react_redux_1.useSelector)((state) => state.stats);\r\n    const [targetDate, setTargetDate] = (0, react_1.useState)(stats[0]);\r\n    const [week, setWeek] = (0, react_1.useState)('current');\r\n    const filteredStats = (0, react_1.useMemo)(() => {\r\n        const weekDiff = week === 'current' ? 0 : week === 'past' ? 1 : 2;\r\n        const day = new Date().getDay();\r\n        const diff = new Date().getDate() - day + (day == 0 ? -6 : 1);\r\n        const weekStart = new Date(new Date(new Date().setDate(diff - 7 * weekDiff)).setHours(0, 0, 0, 0));\r\n        const weekEnd = new Date(new Date(new Date().setDate(diff + 7 - 7 * weekDiff)).setHours(0, 0, 0, 0));\r\n        const result = [\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Понедельник' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Вторник' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Среда' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Четверг' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Пятница' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Суббота' },\r\n            { id: (0, generateRandomIndex_1.generateRandomString)(), date: 'Воскресенье' },\r\n        ];\r\n        stats\r\n            .filter((el) => {\r\n            return new Date(el.date) >= weekStart && new Date(el.date) < weekEnd;\r\n        })\r\n            .reverse()\r\n            .forEach((el) => {\r\n            const day = new Date(el.date).getDay();\r\n            result[day === 0 ? 6 : day - 1] = el;\r\n        });\r\n        return result;\r\n    }, [week, stats]);\r\n    const setTarget = (target) => {\r\n        setTargetDate(target);\r\n    };\r\n    const setWeekHandler = (value) => {\r\n        switch (value) {\r\n            case 'current': {\r\n                setWeek('current');\r\n                break;\r\n            }\r\n            case 'past': {\r\n                setWeek('past');\r\n                break;\r\n            }\r\n            case '2past': {\r\n                setWeek('2past');\r\n            }\r\n        }\r\n    };\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stats_css_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stats_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.headerTitle }, { children: \"\\u0412\\u0430\\u0448\\u0430 \\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E\\u0441\\u0442\\u044C\" })), (0, jsx_runtime_1.jsx)(StatSelect_1.StatSelect, { week: week, setWeek: setWeekHandler })] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stats_css_1.default.statWrapper }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.date }, { children: (0, jsx_runtime_1.jsx)(DateStat_1.DateStat, { date: targetDate.date, workTime: targetDate.workTime ? targetDate.workTime : null }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.tomato }, { children: (0, jsx_runtime_1.jsx)(TomatoStat_1.TomatoStat, { count: targetDate.tomato ? targetDate.tomato : 0 }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.dio }, { children: (0, jsx_runtime_1.jsx)(DiaStat_1.DiaStat, { target: targetDate, stats: filteredStats, setTarget: setTarget }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.focus }, { children: (0, jsx_runtime_1.jsx)(FocusStat_1.FocusStat, { value: targetDate\r\n                                ? Math.round((targetDate.workTime /\r\n                                    (targetDate.workTime +\r\n                                        targetDate.pauseTime)) *\r\n                                    100)\r\n                                : null }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.pause }, { children: (0, jsx_runtime_1.jsx)(PauseStat_1.PauseStat, { value: targetDate ? targetDate.pauseTime : null }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stats_css_1.default.stop }, { children: (0, jsx_runtime_1.jsx)(StopStat_1.StopStat, { value: targetDate ? targetDate.stops : null }) }))] }))] })));\r\n}\r\nexports.Stats = Stats;\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/Stats.tsx?");

/***/ }),

/***/ "./src/shared/Stats/StopStat/StopStat.tsx":
/*!************************************************!*\
  !*** ./src/shared/Stats/StopStat/StopStat.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StopStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst stopstat_css_1 = __importDefault(__webpack_require__(/*! ./stopstat.css */ \"./src/shared/Stats/StopStat/stopstat.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction StopStat({ value }) {\r\n    if (value) {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stopstat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stopstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: stopstat_css_1.default.text }, { children: \"\\u041E\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u043A\\u0438\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: stopstat_css_1.default.value }, { children: value }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stopstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'stop' }) }))] })));\r\n    }\r\n    else {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(stopstat_css_1.default.wrapper, stopstat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: stopstat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: stopstat_css_1.default.text }, { children: \"\\u041E\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u043A\\u0438\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: stopstat_css_1.default.value }, { children: \"0\" }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: stopstat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'stopDis' }) }))] })));\r\n    }\r\n}\r\nexports.StopStat = StopStat;\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StopStat/StopStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/StopStat/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Stats/StopStat/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./StopStat */ \"./src/shared/Stats/StopStat/StopStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StopStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/StopStat/stopstat.css":
/*!************************************************!*\
  !*** ./src/shared/Stats/StopStat/stopstat.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"stopstat__wrapper--krN8M\",\n\t\"disabled\": \"stopstat__disabled--23ECg\",\n\t\"value\": \"stopstat__value--1pZjU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/StopStat/stopstat.css?");

/***/ }),

/***/ "./src/shared/Stats/TomatoStat/TomatoStat.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Stats/TomatoStat/TomatoStat.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TomatoStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst tomatostat_css_1 = __importDefault(__webpack_require__(/*! ./tomatostat.css */ \"./src/shared/Stats/TomatoStat/tomatostat.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction TomatoStat({ count }) {\r\n    if (count)\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: tomatostat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tomatostat_css_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: tomatostat_css_1.default.tomatoHeader }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomato' }), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: tomatostat_css_1.default.tomatoText }, { children: 'x' + count }))] })) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tomatostat_css_1.default.tomatoFooter }, { children: count + ' помидора' }))] })));\r\n    return ((0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tomatostat_css_1.default.wrapper }, { children: (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tomatostat_css_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tomatostat_css_1.default.tomatoHeader }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomatoSad' }) })) })) })));\r\n}\r\nexports.TomatoStat = TomatoStat;\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/TomatoStat/TomatoStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/TomatoStat/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Stats/TomatoStat/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TomatoStat */ \"./src/shared/Stats/TomatoStat/TomatoStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/TomatoStat/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/TomatoStat/tomatostat.css":
/*!****************************************************!*\
  !*** ./src/shared/Stats/TomatoStat/tomatostat.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"imageContainer\": \"tomatostat__imageContainer--2DLvN\",\n\t\"tomatoText\": \"tomatostat__tomatoText--2Q77E\",\n\t\"tomatoFooter\": \"tomatostat__tomatoFooter--3KaDN\",\n\t\"tomatoHeader\": \"tomatostat__tomatoHeader--3Vi46\",\n\t\"wrapper\": \"tomatostat__wrapper--2K-Q8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/TomatoStat/tomatostat.css?");

/***/ }),

/***/ "./src/shared/Stats/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Stats/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Stats */ \"./src/shared/Stats/Stats.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/index.ts?");

/***/ }),

/***/ "./src/shared/Stats/stats.css":
/*!************************************!*\
  !*** ./src/shared/Stats/stats.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"stats__container--3KfA4\",\n\t\"header\": \"stats__header--yuAMW\",\n\t\"headerTitle\": \"stats__headerTitle--D8afd\",\n\t\"statWrapper\": \"stats__statWrapper--2OUBm\",\n\t\"date\": \"stats__date--1jnff\",\n\t\"tomato\": \"stats__tomato--1LMH6\",\n\t\"dio\": \"stats__dio--AlQzd\",\n\t\"focus\": \"stats__focus--18Qf9\",\n\t\"pause\": \"stats__pause--1OZ7Y\",\n\t\"stop\": \"stats__stop--13dor\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Stats/stats.css?");

/***/ }),

/***/ "./src/shared/TaskList/Task/Task.tsx":
/*!*******************************************!*\
  !*** ./src/shared/TaskList/Task/Task.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Task = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst task_css_1 = __importDefault(__webpack_require__(/*! ./task.css */ \"./src/shared/TaskList/Task/task.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\r\nconst Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList.tsx\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../../../store/actions */ \"./src/store/actions.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst sortable_1 = __webpack_require__(/*! @dnd-kit/sortable */ \"@dnd-kit/sortable\");\r\nconst utilities_1 = __webpack_require__(/*! @dnd-kit/utilities */ \"@dnd-kit/utilities\");\r\nfunction Task({ text, tomato, id }) {\r\n    const { attributes, listeners, setNodeRef, transition, transform } = (0, sortable_1.useSortable)({ id });\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const [value, setValue] = (0, react_1.useState)(text);\r\n    const [edit, setEdit] = (0, react_1.useState)(false);\r\n    const editInput = (0, react_1.useRef)(null);\r\n    const startEdit = () => {\r\n        setEdit(true);\r\n        if (editInput.current) {\r\n            editInput.current.focus();\r\n        }\r\n    };\r\n    const changeHandler = (ev) => {\r\n        setValue(ev.target.value);\r\n    };\r\n    const keyDownHandler = (ev) => {\r\n        if (ev.key === 'Escape') {\r\n            setEdit(false);\r\n            setValue(text);\r\n        }\r\n        if (ev.key === 'Enter') {\r\n            setEdit(false);\r\n            dispatch((0, actions_1.editTask)(id, value));\r\n        }\r\n    };\r\n    const LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Увеличить',\r\n            icon: 'inc',\r\n            className: task_css_1.default.desktop,\r\n            onClick: (ev) => {\r\n                ev.stopPropagation();\r\n                dispatch((0, actions_1.incTomato)(id));\r\n            },\r\n        },\r\n        {\r\n            As: 'li',\r\n            text: 'Уменьшить',\r\n            icon: 'dec',\r\n            className: (0, classnames_1.default)(task_css_1.default.desktop, tomato <= 1 ? task_css_1.default.disabled : ''),\r\n            onClick: (ev) => {\r\n                ev.stopPropagation();\r\n                if (tomato > 1) {\r\n                    dispatch((0, actions_1.decTomato)(id));\r\n                }\r\n            },\r\n        },\r\n        {\r\n            As: 'li',\r\n            text: 'Редактировать',\r\n            icon: 'edit',\r\n            onClick: () => {\r\n                startEdit();\r\n            },\r\n        },\r\n        {\r\n            As: 'li',\r\n            text: 'Удалить',\r\n            icon: 'delete',\r\n            className: task_css_1.default.desktop,\r\n            onClick: () => {\r\n                dispatch((0, actions_1.deleteTask)(id));\r\n            },\r\n        },\r\n    ].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: task_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: task_css_1.default.textWrapper, ref: setNodeRef, style: {\r\n                    transform: utilities_1.CSS.Transform.toString(transform),\r\n                    transition,\r\n                } }, attributes, listeners, transform, { children: [(0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: task_css_1.default.tomato }, { children: tomato })), edit ? ((0, jsx_runtime_1.jsx)(\"input\", { className: task_css_1.default.editInput, ref: editInput, type: 'text', value: value, autoFocus: true, onChange: changeHandler, onKeyDown: keyDownHandler })) : (text)] })), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, Object.assign({ button: (0, jsx_runtime_1.jsx)(\"button\", Object.assign({ className: task_css_1.default.menuButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'menu' }) })), isOpen: false }, { children: (0, jsx_runtime_1.jsx)(\"ul\", Object.assign({ className: task_css_1.default.menuList }, { children: (0, jsx_runtime_1.jsx)(GenericList_1.GenericList, { list: LIST }) })) }))] })));\r\n}\r\nexports.Task = Task;\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/Task/Task.tsx?");

/***/ }),

/***/ "./src/shared/TaskList/Task/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/TaskList/Task/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Task */ \"./src/shared/TaskList/Task/Task.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/Task/index.ts?");

/***/ }),

/***/ "./src/shared/TaskList/Task/task.css":
/*!*******************************************!*\
  !*** ./src/shared/TaskList/Task/task.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tomato\": \"task__tomato--3X-Ld\",\n\t\"wrapper\": \"task__wrapper--2Vosb\",\n\t\"menuButton\": \"task__menuButton--2FEhB\",\n\t\"textWrapper\": \"task__textWrapper--37ImZ\",\n\t\"editInput\": \"task__editInput--25Du6\",\n\t\"disabled\": \"task__disabled--IuLK2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/Task/task.css?");

/***/ }),

/***/ "./src/shared/TaskList/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/shared/TaskList/TaskList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskList = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst tasklist_css_1 = __importDefault(__webpack_require__(/*! ./tasklist.css */ \"./src/shared/TaskList/tasklist.css\"));\r\nconst Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\r\nconst Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/Break/index.ts\");\r\nconst Task_1 = __webpack_require__(/*! ./Task */ \"./src/shared/TaskList/Task/index.ts\");\r\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst core_1 = __webpack_require__(/*! @dnd-kit/core */ \"@dnd-kit/core\");\r\nconst sortable_1 = __webpack_require__(/*! @dnd-kit/sortable */ \"@dnd-kit/sortable\");\r\nfunction TaskList() {\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);\r\n    const list = (0, react_redux_1.useSelector)((state) => state.tasks);\r\n    const [activeItem, setActiveItem] = (0, react_1.useState)();\r\n    const sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.TouchSensor));\r\n    const handleDragStart = (event) => {\r\n        const { active } = event;\r\n        setActiveItem(list.find((item) => item.id === active.id));\r\n    };\r\n    const handleDragEnd = (event) => {\r\n        const { active, over } = event;\r\n        if (!over)\r\n            return;\r\n        const activeItem = list.find((item) => item.id === active.id);\r\n        const overItem = list.find((item) => item.id === over.id);\r\n        if (!activeItem || !overItem) {\r\n            return;\r\n        }\r\n        const activeIndex = list.findIndex((item) => item.id === active.id);\r\n        const overIndex = list.findIndex((item) => item.id === over.id);\r\n        if (activeIndex !== overIndex) {\r\n            dispatch((0, actions_1.setTasks)((0, sortable_1.arrayMove)(list, activeIndex, overIndex)));\r\n            // setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));\r\n        }\r\n        setActiveItem(undefined);\r\n    };\r\n    const handleDragCancel = () => {\r\n        setActiveItem(undefined);\r\n    };\r\n    const [value, setValue] = (0, react_1.useState)('');\r\n    const onChange = (ev) => {\r\n        setValue(ev.target.value);\r\n    };\r\n    const clickHandler = () => {\r\n        if (value.trim() !== '') {\r\n            store_1.store.dispatch((0, actions_1.addTask)(value));\r\n            setValue('');\r\n        }\r\n    };\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"input\", { value: value, onChange: onChange, className: tasklist_css_1.default.taskInput, type: 'text', placeholder: 'Название задачи' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: clickHandler, text: 'Добавить' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsxs)(core_1.DndContext, Object.assign({ id: 'list', sensors: sensors, collisionDetection: core_1.pointerWithin, onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragCancel: handleDragCancel }, { children: [(0, jsx_runtime_1.jsx)(sortable_1.SortableContext, Object.assign({ items: list, strategy: sortable_1.verticalListSortingStrategy }, { children: (0, jsx_runtime_1.jsx)(\"div\", { children: list.map((item) => ((0, jsx_runtime_1.jsx)(Task_1.Task, { text: item.title, tomato: item.tomato, id: item.id }, item.id))) }) })), (0, jsx_runtime_1.jsx)(core_1.DragOverlay, Object.assign({ style: { transformOrigin: '0 0 ' } }, { children: activeItem ? (0, jsx_runtime_1.jsx)(Task_1.Task, { id: activeItem.id, text: activeItem.title, isDragging: true, tomato: activeItem.tomato }) : null }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tasklist_css_1.default.timeBlock }, { children: formatTime(list.reduce((acc, el) => {\r\n                    return acc + el.tomato;\r\n                }, 0) * Math.floor(workTime / 60)) }))] }));\r\n}\r\nexports.TaskList = TaskList;\r\nfunction formatTime(minutes) {\r\n    const hours = Math.floor(minutes / 60);\r\n    const remainderMinutes = minutes % 60;\r\n    let result = '';\r\n    if (hours > 0) {\r\n        result += hours + ' ' + getHoursSuffix(hours);\r\n    }\r\n    if (remainderMinutes > 0) {\r\n        result += ' ' + remainderMinutes + ' минут';\r\n    }\r\n    if (result === '') {\r\n        result = '0 минут';\r\n    }\r\n    return result.trim();\r\n}\r\nfunction getHoursSuffix(hours) {\r\n    const lastDigit = hours % 10;\r\n    if (hours >= 11 && hours <= 19) {\r\n        return 'часов';\r\n    }\r\n    else if (lastDigit === 1) {\r\n        return 'час';\r\n    }\r\n    else if (lastDigit >= 2 && lastDigit <= 4) {\r\n        return 'часа';\r\n    }\r\n    else {\r\n        return 'часов';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/TaskList.tsx?");

/***/ }),

/***/ "./src/shared/TaskList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/TaskList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskList */ \"./src/shared/TaskList/TaskList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/index.ts?");

/***/ }),

/***/ "./src/shared/TaskList/tasklist.css":
/*!******************************************!*\
  !*** ./src/shared/TaskList/tasklist.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"taskInput\": \"tasklist__taskInput--3_ct_\",\n\t\"timeBlock\": \"tasklist__timeBlock--27vAU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/tasklist.css?");

/***/ }),

/***/ "./src/shared/Timer/Timer.tsx":
/*!************************************!*\
  !*** ./src/shared/Timer/Timer.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Timer = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Timer/timer.css\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nconst useWorker_1 = __webpack_require__(/*! ../../hooks/useWorker */ \"./src/hooks/useWorker.ts\");\r\nconst WORK = 2;\r\nconst TIMEOUT = 300;\r\nfunction Timer() {\r\n    const { result, run } = (0, useWorker_1.useWebworker)();\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const task = (0, react_redux_1.useSelector)((state) => state.tasks.find((task) => !task.done));\r\n    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);\r\n    const pauseTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.pauseTime);\r\n    const time = (0, react_redux_1.useSelector)(state => state.timerModel.time);\r\n    const mode = (0, react_redux_1.useSelector)(state => state.timerModel.mode);\r\n    const part = (0, react_redux_1.useSelector)(state => state.timerModel.part);\r\n    const addTime = () => {\r\n        dispatch((0, actions_1.setTime)(time + 60));\r\n    };\r\n    const startTimer = () => {\r\n        if (mode === 'stop' || mode === 'pause') {\r\n            dispatch((0, actions_1.setTimerEvent)('start'));\r\n        }\r\n    };\r\n    const stopTimer = () => {\r\n        if (mode === 'start') {\r\n            // dispatch(setTime(workTime))\r\n            dispatch((0, actions_1.setTimerEvent)('stop'));\r\n        }\r\n    };\r\n    const pauseTimer = () => {\r\n        dispatch((0, actions_1.setTimerEvent)('pause'));\r\n    };\r\n    const skipWork = () => {\r\n        if (part == 'work') {\r\n            // dispatch(setTime(pauseTime))\r\n            dispatch((0, actions_1.setTimerEvent)('skipWork'));\r\n            // dispatch(setTimerPart('timeout'))\r\n        }\r\n    };\r\n    const skipTimeout = () => {\r\n        console.log('skip');\r\n        dispatch((0, actions_1.setTimerEvent)('skipTimeout'));\r\n    };\r\n    if (!task) {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(timer_css_1.default.wrapper, part === 'work' ? timer_css_1.default.work : timer_css_1.default.timeout, mode === 'start'\r\n                ? timer_css_1.default.start\r\n                : mode === 'pause'\r\n                    ? timer_css_1.default.pause\r\n                    : timer_css_1.default.stop) }, { children: [(0, jsx_runtime_1.jsxs)(\"header\", Object.assign({ className: timer_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)(\"div\", { className: timer_css_1.default.title }), (0, jsx_runtime_1.jsx)(\"div\", { className: timer_css_1.default.tomato })] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: timer_css_1.default.timeWrapper }, { children: [formatTime(0), (0, jsx_runtime_1.jsx)(\"button\", Object.assign({ className: timer_css_1.default.addButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'addButton' }) }))] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: timer_css_1.default.buttonsBlock }, { children: [mode === 'stop' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Сделано', type: 'activeR' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Стоп', type: 'activeR' })) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Стоп', type: 'disabledR' }))) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: 'Пропустить', type: 'activeR' }))] }))] })));\r\n    }\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(timer_css_1.default.wrapper, part === 'work' ? timer_css_1.default.work : timer_css_1.default.timeout, mode === 'start'\r\n            ? timer_css_1.default.start\r\n            : mode === 'pause'\r\n                ? timer_css_1.default.pause\r\n                : timer_css_1.default.stop) }, { children: [(0, jsx_runtime_1.jsxs)(\"header\", Object.assign({ className: timer_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: timer_css_1.default.title }, { children: task.title })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: timer_css_1.default.tomato }, { children: part === 'work' ? 'Помидор ' + (task.complete + 1) : 'Перерыв ' + (task.complete + 1) }))] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: timer_css_1.default.timeWrapper }, { children: [formatTime(time), (0, jsx_runtime_1.jsx)(\"button\", Object.assign({ onClick: addTime, className: timer_css_1.default.addButton }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'addButton' }) }))] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: timer_css_1.default.buttonsBlock }, { children: [mode === 'stop' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: startTimer, text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: startTimer, text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: pauseTimer, text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: skipWork, text: 'Сделано', type: 'activeR' })) : mode === 'start' ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: stopTimer, text: 'Стоп', type: 'activeR' })) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: stopTimer, text: 'Стоп', type: 'disabledR' }))) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: skipTimeout, text: 'Пропустить', type: 'activeR' }))] }))] })));\r\n}\r\nexports.Timer = Timer;\r\nfunction formatTime(seconds) {\r\n    if (seconds < 0)\r\n        return `00:00`;\r\n    const minutes = Math.floor(seconds / 60);\r\n    const remainingSeconds = seconds % 60;\r\n    const minutesString = String(minutes).padStart(2, '0');\r\n    const secondsString = String(remainingSeconds).padStart(2, '0');\r\n    return `${minutesString}:${secondsString}`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Timer/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Timer/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Timer */ \"./src/shared/Timer/Timer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Timer/index.ts?");

/***/ }),

/***/ "./src/shared/Timer/timer.css":
/*!************************************!*\
  !*** ./src/shared/Timer/timer.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"timer__wrapper--3u7KI\",\n\t\"header\": \"timer__header--3faD3\",\n\t\"title\": \"timer__title--3gsyz\",\n\t\"tomato\": \"timer__tomato--1jvOX\",\n\t\"timeWrapper\": \"timer__timeWrapper--2ICHa\",\n\t\"addButton\": \"timer__addButton--2VcuR\",\n\t\"buttonsBlock\": \"timer__buttonsBlock--1TFyW\",\n\t\"work\": \"timer__work--3PzM-\",\n\t\"start\": \"timer__start--u85EJ\",\n\t\"pause\": \"timer__pause--2SoCb\",\n\t\"timeout\": \"timer__timeout--3SLMl\",\n\t\"stop\": \"timer__stop--JpBm6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Timer/timer.css?");

/***/ }),

/***/ "./src/shared/TimerContainer/TimerContainer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/TimerContainer/TimerContainer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TimerContainer = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst useWorker_1 = __webpack_require__(/*! ../../hooks/useWorker */ \"./src/hooks/useWorker.ts\");\r\nconst use_sound_1 = __importDefault(__webpack_require__(/*! use-sound */ \"use-sound\"));\r\nconst beep_mp3_1 = __importDefault(__webpack_require__(/*! ../../assets/beep.mp3 */ \"./src/assets/beep.mp3\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nconst useMounted_1 = __webpack_require__(/*! ../../hooks/useMounted */ \"./src/hooks/useMounted.ts\");\r\nfunction TimerContainer({ children }) {\r\n    const isMounted = (0, useMounted_1.useIsMount)();\r\n    const didMountRef = (0, react_1.useRef)(false);\r\n    const [workedTime, setWorkedTime] = (0, react_1.useState)(0);\r\n    const [pausedTime, setPausedTime] = (0, react_1.useState)(0);\r\n    const [stops, setStops] = (0, react_1.useState)(0);\r\n    const { result, run } = (0, useWorker_1.useWebworker)();\r\n    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);\r\n    const pauseTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.pauseTime);\r\n    const task = (0, react_redux_1.useSelector)((state) => state.tasks.find((task) => !task.done));\r\n    const time = (0, react_redux_1.useSelector)(state => state.timerModel.time);\r\n    const mode = (0, react_redux_1.useSelector)(state => state.timerModel.mode);\r\n    const timerEvent = (0, react_redux_1.useSelector)(state => state.timerModel.event);\r\n    const part = (0, react_redux_1.useSelector)(state => state.timerModel.part);\r\n    const [play] = (0, use_sound_1.default)(beep_mp3_1.default);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(() => {\r\n        if (isMounted) {\r\n            checkTimer();\r\n        }\r\n    }, [result]);\r\n    (0, react_1.useEffect)(() => {\r\n        if (isMounted) {\r\n            switch (timerEvent) {\r\n                case 'start': {\r\n                    startTimer();\r\n                    dispatch((0, actions_1.setTimerEvent)(null));\r\n                    break;\r\n                }\r\n                case 'stop': {\r\n                    stopTimer();\r\n                    dispatch((0, actions_1.setTimerEvent)(null));\r\n                    break;\r\n                }\r\n                case 'pause': {\r\n                    pauseTimer();\r\n                    dispatch((0, actions_1.setTimerEvent)(null));\r\n                    break;\r\n                }\r\n                case 'skipWork': {\r\n                    skipWork();\r\n                    dispatch((0, actions_1.setTimerEvent)(null));\r\n                    break;\r\n                }\r\n                case 'skipTimeout': {\r\n                    skipTimeout();\r\n                    dispatch((0, actions_1.setTimerEvent)(null));\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }, [timerEvent]);\r\n    const startTimer = () => {\r\n        run('start');\r\n        dispatch((0, actions_1.setTimerMode)('start'));\r\n    };\r\n    const pauseTimer = () => {\r\n        run('pause');\r\n        dispatch((0, actions_1.setTimerMode)('pause'));\r\n    };\r\n    const checkTimer = () => {\r\n        if (time <= 0) {\r\n            endTimer();\r\n        }\r\n        else {\r\n            if (mode === 'start') {\r\n                setWorkedTime(workedTime => workedTime + 1);\r\n                dispatch((0, actions_1.setTime)(time - 1));\r\n            }\r\n            else {\r\n                setPausedTime(pausedTime => pausedTime + 1);\r\n            }\r\n        }\r\n    };\r\n    const endTimer = () => {\r\n        if (part == 'work') {\r\n            run('stop');\r\n            dispatch((0, actions_1.statAdd)({\r\n                date: new Date(),\r\n                tomato: 1,\r\n                pauseTime: pausedTime,\r\n                workTime: workedTime,\r\n                stops: stops,\r\n            }));\r\n            dispatch((0, actions_1.setTime)(pauseTime));\r\n            dispatch((0, actions_1.setTimerMode)('stop'));\r\n            dispatch((0, actions_1.setTimerPart)('timeout'));\r\n            play();\r\n        }\r\n        if (part == 'timeout') {\r\n            dispatch((0, actions_1.setTime)(workTime));\r\n            dispatch((0, actions_1.setTimerMode)('stop'));\r\n            dispatch((0, actions_1.setTimerPart)('work'));\r\n            endTomato();\r\n            play();\r\n        }\r\n    };\r\n    const stopTimer = () => {\r\n        run('stop');\r\n        dispatch((0, actions_1.setTimerMode)('stop'));\r\n        dispatch((0, actions_1.setTimerPart)('work'));\r\n        dispatch((0, actions_1.setTime)(workTime));\r\n        dispatch((0, actions_1.statAdd)({\r\n            date: new Date(),\r\n            tomato: 0,\r\n            pauseTime: 0,\r\n            workTime: 0,\r\n            stops: 1,\r\n        }));\r\n    };\r\n    const endTomato = () => {\r\n        if (task) {\r\n            dispatch((0, actions_1.decTomato)(task.id));\r\n            dispatch((0, actions_1.statAdd)({\r\n                date: new Date(),\r\n                tomato: 1,\r\n                pauseTime: pausedTime,\r\n                workTime: workedTime,\r\n                stops: stops,\r\n            }));\r\n            setPausedTime(0);\r\n            setWorkedTime(0);\r\n        }\r\n    };\r\n    const skipWork = () => {\r\n        run('stop');\r\n        dispatch((0, actions_1.setTimerMode)('stop'));\r\n        dispatch((0, actions_1.setTimerPart)('timeout'));\r\n        dispatch((0, actions_1.setTime)(pauseTime));\r\n    };\r\n    const skipTimeout = () => {\r\n        dispatch((0, actions_1.setTimerMode)('stop'));\r\n        dispatch((0, actions_1.setTimerPart)('work'));\r\n        dispatch((0, actions_1.setTime)(workTime));\r\n        endTomato();\r\n    };\r\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));\r\n}\r\nexports.TimerContainer = TimerContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/TimerContainer/TimerContainer.tsx?");

/***/ }),

/***/ "./src/shared/TimerContainer/index.ts":
/*!********************************************!*\
  !*** ./src/shared/TimerContainer/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TimerContainer */ \"./src/shared/TimerContainer/TimerContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TimerContainer/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.persistor = exports.store = exports.initialState = void 0;\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nconst reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ./util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\r\nconst redux_persist_1 = __webpack_require__(/*! redux-persist */ \"redux-persist\");\r\nconst storage_1 = __importDefault(__webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\"));\r\nexports.initialState = {\r\n    theme: 'dark',\r\n    stats: [\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date(),\r\n            tomato: 0,\r\n            workTime: 0,\r\n            pauseTime: 0,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.30.23'),\r\n            tomato: 2,\r\n            workTime: 2500,\r\n            pauseTime: 124,\r\n            stops: 3,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.29.23'),\r\n            tomato: 3,\r\n            workTime: 2660,\r\n            pauseTime: 233,\r\n            stops: 4,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.28.23'),\r\n            tomato: 3,\r\n            workTime: 2660,\r\n            pauseTime: 233,\r\n            stops: 4,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.27.23'),\r\n            tomato: 2,\r\n            workTime: 2500,\r\n            pauseTime: 124,\r\n            stops: 3,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.26.23'),\r\n            tomato: 4,\r\n            workTime: 1500,\r\n            pauseTime: 0,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.25.23'),\r\n            tomato: 4,\r\n            workTime: 4500,\r\n            pauseTime: 4500,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.24.23'),\r\n            tomato: 3,\r\n            workTime: 3660,\r\n            pauseTime: 1383,\r\n            stops: 4,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.23.23'),\r\n            tomato: 3,\r\n            workTime: 2660,\r\n            pauseTime: 2033,\r\n            stops: 4,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.22.23'),\r\n            tomato: 2,\r\n            workTime: 5500,\r\n            pauseTime: 1024,\r\n            stops: 3,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.21.23'),\r\n            tomato: 4,\r\n            workTime: 2500,\r\n            pauseTime: 0,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.20.23'),\r\n            tomato: 2,\r\n            workTime: 2500,\r\n            pauseTime: 124,\r\n            stops: 3,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.19.23'),\r\n            tomato: 4,\r\n            workTime: 1500,\r\n            pauseTime: 0,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.18.23'),\r\n            tomato: 3,\r\n            workTime: 2660,\r\n            pauseTime: 233,\r\n            stops: 4,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.17.23'),\r\n            tomato: 4,\r\n            workTime: 1500,\r\n            pauseTime: 0,\r\n            stops: 0,\r\n        },\r\n        {\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            date: new Date('5.16.23'),\r\n            tomato: 2,\r\n            workTime: 2500,\r\n            pauseTime: 124,\r\n            stops: 3,\r\n        },\r\n    ],\r\n    tasks: [\r\n        {\r\n            title: 'Сверстать сайт',\r\n            tomato: 1,\r\n            complete: 0,\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            done: false,\r\n        },\r\n        {\r\n            title: 'Aдаптив',\r\n            complete: 0,\r\n            tomato: 1,\r\n            id: (0, generateRandomIndex_1.generateRandomString)(),\r\n            done: false,\r\n        },\r\n    ],\r\n    timerModel: {\r\n        options: {\r\n            workTime: 1500,\r\n            pauseTime: 300,\r\n        },\r\n        mode: 'stop',\r\n        part: 'work',\r\n        time: 1500,\r\n        event: null\r\n    },\r\n};\r\nconst persistConfig = {\r\n    key: 'root',\r\n    storage: storage_1.default,\r\n};\r\n// export const store = createStore(\r\n//     persistReducer(persistConfig, rootReducer),\r\n//     composeWithDevTools(applyMiddleware(thunk))\r\n// )\r\nconst persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, reducer_1.rootReducer);\r\nexports.store = (0, redux_1.createStore)(persistedReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nexports.persistor = (0, redux_persist_1.persistStore)(exports.store);\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setTimerEvent = exports.SET_TIMER_EVENT = exports.setTimerPart = exports.SET_TIMER_PART = exports.setTime = exports.SET_TIME = exports.setTimerMode = exports.SET_TIMER_MODE = exports.statAdd = exports.STAT_ADD = exports.setTasks = exports.SET_TASKS = exports.deleteTask = exports.DELETE_TASK = exports.editTask = exports.EDIT_TASK = exports.decTomato = exports.DEC_TOMATO = exports.incTomato = exports.INC_TOMATO = exports.addTask = exports.ADD_TASK = void 0;\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\r\nexports.ADD_TASK = \"ADD_TASK\";\r\nconst addTask = (title) => ({\r\n    type: exports.ADD_TASK,\r\n    task: { title, complete: 0, tomato: 1, id: (0, generateRandomIndex_1.generateRandomString)() },\r\n});\r\nexports.addTask = addTask;\r\nexports.INC_TOMATO = \"INC_TOMATO\";\r\nconst incTomato = (id) => ({\r\n    type: exports.INC_TOMATO,\r\n    id,\r\n});\r\nexports.incTomato = incTomato;\r\nexports.DEC_TOMATO = \"DEC_TOMATO\";\r\nconst decTomato = (id) => ({\r\n    type: exports.DEC_TOMATO,\r\n    id,\r\n});\r\nexports.decTomato = decTomato;\r\nexports.EDIT_TASK = \"EDIT_TASK\";\r\nconst editTask = (id, title) => ({\r\n    type: exports.EDIT_TASK,\r\n    id,\r\n    title,\r\n});\r\nexports.editTask = editTask;\r\nexports.DELETE_TASK = \"DELETE_TASK\";\r\nconst deleteTask = (id) => ({\r\n    type: exports.DELETE_TASK,\r\n    id,\r\n});\r\nexports.deleteTask = deleteTask;\r\nexports.SET_TASKS = 'SET_TASKS';\r\nconst setTasks = (tasks) => ({\r\n    type: exports.SET_TASKS,\r\n    tasks\r\n});\r\nexports.setTasks = setTasks;\r\nexports.STAT_ADD = 'STAT_ADD';\r\nconst statAdd = (stat) => ({\r\n    stat,\r\n    type: exports.STAT_ADD\r\n});\r\nexports.statAdd = statAdd;\r\nexports.SET_TIMER_MODE = 'SET_TIMER_MODE';\r\nconst setTimerMode = (mode) => ({\r\n    type: exports.SET_TIMER_MODE,\r\n    mode\r\n});\r\nexports.setTimerMode = setTimerMode;\r\nexports.SET_TIME = 'SET_TIME';\r\nconst setTime = (time) => ({\r\n    time,\r\n    type: exports.SET_TIME\r\n});\r\nexports.setTime = setTime;\r\nexports.SET_TIMER_PART = 'SET_TIMER_PART';\r\nconst setTimerPart = (part) => ({\r\n    type: exports.SET_TIMER_PART,\r\n    part\r\n});\r\nexports.setTimerPart = setTimerPart;\r\nexports.SET_TIMER_EVENT = 'SET_TIMER_EVENT';\r\nconst setTimerEvent = (event) => ({\r\n    type: exports.SET_TIMER_EVENT,\r\n    event\r\n});\r\nexports.setTimerEvent = setTimerEvent;\r\n\n\n//# sourceURL=webpack:///./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nconst store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\r\nconst rootReducer = (state = store_1.initialState, action) => {\r\n    switch (action.type) {\r\n        case actions_1.SET_TIMER_EVENT: {\r\n            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { event: action.event }) });\r\n        }\r\n        case actions_1.SET_TIMER_PART: {\r\n            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { part: action.part }) });\r\n        }\r\n        case actions_1.SET_TIME: {\r\n            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { time: action.time }) });\r\n        }\r\n        case actions_1.SET_TIMER_MODE: {\r\n            return Object.assign(Object.assign({}, state), { timerModel: Object.assign(Object.assign({}, state.timerModel), { mode: action.mode }) });\r\n        }\r\n        case actions_1.STAT_ADD: {\r\n            if (state.stats.find((el) => {\r\n                return new Date(el.date).getDate() === new Date().getDate();\r\n            })) {\r\n                return Object.assign(Object.assign({}, state), { stats: state.stats.map((el) => {\r\n                        if (new Date(el.date).getDate() === new Date(action.stat.date).getDate()) {\r\n                            return Object.assign(Object.assign({}, el), { stops: el.stops + action.stat.stops, pauseTime: el.pauseTime + action.stat.pauseTime, workTime: el.workTime + action.stat.workTime, tomato: el.tomato + action.stat.tomato });\r\n                        }\r\n                        else {\r\n                            return el;\r\n                        }\r\n                    }) });\r\n            }\r\n            else {\r\n                return Object.assign(Object.assign({}, state), { stats: state.stats.concat(Object.assign(Object.assign({}, action.stat), { id: (0, generateRandomIndex_1.generateRandomString)() })) });\r\n            }\r\n        }\r\n        case actions_1.SET_TASKS: {\r\n            return Object.assign(Object.assign({}, state), { tasks: action.tasks });\r\n        }\r\n        case actions_1.INC_TOMATO:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                    if (task.id === action.id)\r\n                        return Object.assign(Object.assign({}, task), { tomato: task.tomato + 1 });\r\n                    return task;\r\n                }) });\r\n        case actions_1.DEC_TOMATO:\r\n            if (state.tasks.find((el) => el.id === action.id).tomato > 1) {\r\n                return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                        if (task.id === action.id) {\r\n                            if (task.tomato === 1) {\r\n                                return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1, done: true });\r\n                            }\r\n                            return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1 });\r\n                        }\r\n                        return task;\r\n                    }) });\r\n            }\r\n            else {\r\n                return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => {\r\n                        return task.id !== action.id;\r\n                    }) });\r\n            }\r\n        case actions_1.EDIT_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                    if (task.id === action.id)\r\n                        return Object.assign(Object.assign({}, task), { title: action.title });\r\n                    return task;\r\n                }) });\r\n        case actions_1.ADD_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.concat(action.task) });\r\n        case actions_1.DELETE_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => task.id !== action.id) });\r\n    }\r\n    return Object.assign({}, state);\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/util/js/assoc.ts":
/*!******************************!*\
  !*** ./src/util/js/assoc.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/util/js/assoc.ts?");

/***/ }),

/***/ "./src/util/react/generateRandomIndex.tsx":
/*!************************************************!*\
  !*** ./src/util/react/generateRandomIndex.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/util/js/assoc.ts\");\r\nconst generateRandomString = () => Math.random().toString(36).substring(2, 15);\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, assoc_1.assoc)(\"id\", (0, exports.generateRandomString)());\r\nconst generateId = (obj) => (0, exports.assignId)(obj);\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/util/react/generateRandomIndex.tsx?");

/***/ }),

/***/ "@dnd-kit/core":
/*!********************************!*\
  !*** external "@dnd-kit/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@dnd-kit/core\");\n\n//# sourceURL=webpack:///external_%22@dnd-kit/core%22?");

/***/ }),

/***/ "@dnd-kit/sortable":
/*!************************************!*\
  !*** external "@dnd-kit/sortable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@dnd-kit/sortable\");\n\n//# sourceURL=webpack:///external_%22@dnd-kit/sortable%22?");

/***/ }),

/***/ "@dnd-kit/utilities":
/*!*************************************!*\
  !*** external "@dnd-kit/utilities" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@dnd-kit/utilities\");\n\n//# sourceURL=webpack:///external_%22@dnd-kit/utilities%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");\n\n//# sourceURL=webpack:///external_%22react/jsx-runtime%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");\n\n//# sourceURL=webpack:///external_%22redux-persist%22?");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/integration/react\");\n\n//# sourceURL=webpack:///external_%22redux-persist/integration/react%22?");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/storage%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "use-sound":
/*!****************************!*\
  !*** external "use-sound" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-sound\");\n\n//# sourceURL=webpack:///external_%22use-sound%22?");

/***/ })

/******/ });
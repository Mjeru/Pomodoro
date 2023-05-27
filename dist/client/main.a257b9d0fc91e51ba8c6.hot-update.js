"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro_box"]("main",{

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: () => (/* binding */ initialState),\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\n/* harmony import */ var _util_react_generateRandomIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\n\r\n\r\n\r\n\r\n\r\nconst initialState = {\r\n    stats: [\r\n        date, new Date(),\r\n        tomato\r\n    ],\r\n    tasks: [\r\n        {\r\n            title: \"Сверстать сайт\",\r\n            tomato: 1,\r\n            complete: 0,\r\n            id: (0,_util_react_generateRandomIndex__WEBPACK_IMPORTED_MODULE_2__.generateRandomString)(),\r\n            done: false\r\n        },\r\n        {\r\n            title: \"Aдаптив\",\r\n            complete: 0,\r\n            tomato: 1,\r\n            id: (0,_util_react_generateRandomIndex__WEBPACK_IMPORTED_MODULE_2__.generateRandomString)(),\r\n            done: false\r\n        },\r\n    ],\r\n};\r\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_store_reducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/store.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1cb69494e4b21d6bdeff")
/******/ })();
/******/ 
/******/ }
);
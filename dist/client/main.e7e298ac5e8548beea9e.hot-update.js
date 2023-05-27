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

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rootReducer: () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\n\r\n\r\nconst rootReducer = (state = _store__WEBPACK_IMPORTED_MODULE_0__.initialState, action) => {\r\n    switch (action.type) {\r\n        case S:\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_TASKS: {\r\n            return Object.assign(Object.assign({}, state), { tasks: action.tasks });\r\n        }\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.INC_TOMATO:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                    if (task.id === action.id)\r\n                        return Object.assign(Object.assign({}, task), { tomato: task.tomato + 1 });\r\n                    return task;\r\n                }) });\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.DEC_TOMATO:\r\n            if (state.tasks.find((el) => el.id === action.id).tomato > 1) {\r\n                return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                        if (task.id === action.id) {\r\n                            if (task.tomato === 1) {\r\n                                return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1, done: true });\r\n                            }\r\n                            return Object.assign(Object.assign({}, task), { tomato: task.tomato - 1, complete: task.complete + 1 });\r\n                        }\r\n                        return task;\r\n                    }) });\r\n            }\r\n            else {\r\n                return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => {\r\n                        return task.id !== action.id;\r\n                    }) });\r\n            }\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.EDIT_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => {\r\n                    if (task.id === action.id)\r\n                        return Object.assign(Object.assign({}, task), { title: action.title });\r\n                    return task;\r\n                }) });\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.ADD_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.concat(action.task) });\r\n        case _actions__WEBPACK_IMPORTED_MODULE_1__.DELETE_TASK:\r\n            return Object.assign(Object.assign({}, state), { tasks: state.tasks.filter((task) => task.id !== action.id) });\r\n    }\r\n    return Object.assign({}, state);\r\n};\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/store/reducer.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b7cac44b82084dd4bfb")
/******/ })();
/******/ 
/******/ }
);
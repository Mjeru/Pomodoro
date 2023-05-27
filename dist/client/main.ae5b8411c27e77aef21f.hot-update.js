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

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_TASK: () => (/* binding */ ADD_TASK),\n/* harmony export */   DEC_TOMATO: () => (/* binding */ DEC_TOMATO),\n/* harmony export */   DELETE_TASK: () => (/* binding */ DELETE_TASK),\n/* harmony export */   EDIT_TASK: () => (/* binding */ EDIT_TASK),\n/* harmony export */   INC_TOMATO: () => (/* binding */ INC_TOMATO),\n/* harmony export */   SET_TASKS: () => (/* binding */ SET_TASKS),\n/* harmony export */   STAT_ADD: () => (/* binding */ STAT_ADD),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   decTomato: () => (/* binding */ decTomato),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   incTomato: () => (/* binding */ incTomato),\n/* harmony export */   setTasks: () => (/* binding */ setTasks),\n/* harmony export */   statAdd: () => (/* binding */ statAdd)\n/* harmony export */ });\n/* harmony import */ var _util_react_generateRandomIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/react/generateRandomIndex */ \"./src/util/react/generateRandomIndex.tsx\");\n\r\nconst ADD_TASK = \"ADD_TASK\";\r\nconst addTask = (title) => ({\r\n    type: ADD_TASK,\r\n    task: { title, complete: 0, tomato: 1, id: (0,_util_react_generateRandomIndex__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)() },\r\n});\r\nconst INC_TOMATO = \"INC_TOMATO\";\r\nconst incTomato = (id) => ({\r\n    type: INC_TOMATO,\r\n    id,\r\n});\r\nconst DEC_TOMATO = \"DEC_TOMATO\";\r\nconst decTomato = (id) => ({\r\n    type: DEC_TOMATO,\r\n    id,\r\n});\r\nconst EDIT_TASK = \"EDIT_TASK\";\r\nconst editTask = (id, title) => ({\r\n    type: EDIT_TASK,\r\n    id,\r\n    title,\r\n});\r\nconst DELETE_TASK = \"DELETE_TASK\";\r\nconst deleteTask = (id) => ({\r\n    type: DELETE_TASK,\r\n    id,\r\n});\r\nconst SET_TASKS = 'SET_TASKS';\r\nconst setTasks = (tasks) => ({\r\n    type: SET_TASKS,\r\n    tasks\r\n});\r\nconst STAT_ADD = 'STAT_ADD';\r\nconst statAdd = (stat) => ({\r\n    stat\r\n});\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/store/actions.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("526247850f89ccc2fc45")
/******/ })();
/******/ 
/******/ }
);
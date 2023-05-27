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

/***/ "./src/hooks/useWorker.ts":
/*!********************************!*\
  !*** ./src/hooks/useWorker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWebworker: () => (/* binding */ useWebworker)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nconst workerHandler = (fn) => {\r\n    let timerContainer = null;\r\n    let dateStart = Date.now();\r\n    onmessage = (event) => {\r\n        switch (event.data) {\r\n            case 'start':\r\n                {\r\n                    dateStart = Date.now();\r\n                    timerContainer = setInterval(() => {\r\n                        const current = Date.now();\r\n                        if (current - dateStart > 1000) {\r\n                            dateStart = current;\r\n                            postMessage(fn());\r\n                        }\r\n                    }, 300);\r\n                }\r\n                break;\r\n            case 'pause':\r\n                {\r\n                    clearInterval(timerContainer);\r\n                }\r\n                break;\r\n            case 's':\r\n        }\r\n    };\r\n};\r\nconst useWebworker = (fn) => {\r\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\r\n    const workerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\r\n        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])));\r\n        workerRef.current = worker;\r\n        worker.onmessage = (event) => setResult(result => result + 1);\r\n        return () => {\r\n            worker.terminate();\r\n        };\r\n    }, []);\r\n    return {\r\n        result,\r\n        run: (value) => { var _a; return (_a = workerRef.current) === null || _a === void 0 ? void 0 : _a.postMessage(value); }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/hooks/useWorker.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0122e387da8b02fb7d5d")
/******/ })();
/******/ 
/******/ }
);
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWebworker: () => (/* binding */ useWebworker)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nconst workerHandler = () => {\r\n    let timerContainer = null;\r\n    onmessage = (event) => {\r\n        switch (event.data) {\r\n            case 'start':\r\n                {\r\n                    postMessage();\r\n                    timerContainer = setInterval(() => {\r\n                        postMessage();\r\n                    }, 1000);\r\n                }\r\n                break;\r\n            case 'pause':\r\n                {\r\n                    clearInterval(timerContainer);\r\n                }\r\n                break;\r\n            case 'stop': {\r\n                clearInterval(timerContainer);\r\n                break;\r\n            }\r\n        }\r\n    };\r\n};\r\nconst useWebworker = () => {\r\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\r\n    const workerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\r\n        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])));\r\n        workerRef.current = worker;\r\n        worker.onmessage = () => setResult(result => result + 1);\r\n        return () => {\r\n            worker.terminate();\r\n        };\r\n    }, []);\r\n    return {\r\n        result,\r\n        run: (value) => { var _a; return (_a = workerRef.current) === null || _a === void 0 ? void 0 : _a.postMessage(value); }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/hooks/useWorker.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("296b62e0dc990be5c555")
/******/ })();
/******/ 
/******/ }
);
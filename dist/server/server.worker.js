/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/timer.worker.js":
/*!*****************************!*\
  !*** ./src/timer.worker.js ***!
  \*****************************/
/***/ ((module) => {

eval("const workercode = () => {\r\n    let timerInterval;\r\n    let time = 0;\r\n    self.onmessage = function ({ data: { turn } }) {\r\n        if (turn === \"off\" || timerInterval) {\r\n            clearInterval(timerInterval);\r\n            time = 0;\r\n        }\r\n        if (turn === \"on\") {\r\n            timerInterval = setInterval(() => {\r\n                time += 1;\r\n                self.postMessage({ time });\r\n            }, 100);\r\n        }\r\n    };\r\n};\r\n\r\n\r\nlet code = workercode.toString();\r\ncode = code.substring(code.indexOf(\"{\") + 1, code.lastIndexOf(\"}\"));\r\n\r\nconst blob = new Blob([code], { type: \"application/javascript\" });\r\nconst worker_script = URL.createObjectURL(blob);\r\n\r\nmodule.exports = worker_script;\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/timer.worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/timer.worker.js");
/******/ 	
/******/ })()
;
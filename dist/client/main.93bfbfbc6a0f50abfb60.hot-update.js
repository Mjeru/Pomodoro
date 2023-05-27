/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro_box"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Header/header.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Header/header.css ***!
  \********************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"@media all and (min-width: 1024px) {\\n  .header__header--bAgyG {\\n    flex-flow: row nowrap;\\n    align-items: center;\\n  }\\n}\\n\\n@media all and (min-width: 1540px) {\\n  .header__header--bAgyG {\\n  }\\n}\\n\\n.header__header--bAgyG {\\n  height: 70px;\\n  background-color: var(--white);\\n  box-shadow: 0 10px 63px rgba(0, 0, 0, 0.07);\\n}\\n\\n.header__header--bAgyG > .header__container--2eZxl {\\n  height: 100%;\\n  max-width: 1240px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 auto;\\n}\\n\\n.header__logoBlock--2nQWQ {\\n  display: flex;\\n  align-items: center;\\n  color: var(--red);\\n  font-weight: 300;\\n  font-size: 24px;\\n  line-height: 24px;\\n}\\n.header__logoBlock--2nQWQ img {\\n  margin-right: 13px;\\n}\\n\\n.header__statBlock--2YowI {\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 17px;\\n  display: flex;\\n  align-items: center;\\n  color: var(--red);\\n}\\n.header__statBlock--2YowI svg {\\n  margin-right: 9px;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"container\": \"header__container--2eZxl\",\n\t\"logoBlock\": \"header__logoBlock--2nQWQ\",\n\t\"statBlock\": \"header__statBlock--2YowI\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Header/header.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./header.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Header/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./header.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Header/header.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./header.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Header/header.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.id, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\");\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\n/* harmony import */ var _assets_Logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Logo.png */ \"./src/assets/Logo.png\");\n\r\n\r\n\r\n\r\nfunction Header() {\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", Object.assign({ className: (_header_css__WEBPACK_IMPORTED_MODULE_1___default().header) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_header_css__WEBPACK_IMPORTED_MODULE_1___default().container) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_header_css__WEBPACK_IMPORTED_MODULE_1___default().logoBlock) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: _assets_Logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }), \"pomodoro_timer\"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_header_css__WEBPACK_IMPORTED_MODULE_1___default().statBlock) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, { iconName: \"statistic\", size: 16 }), \"Statistic\"] }))] })) })));\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\");\n\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/assets/Logo.png":
/*!*****************************!*\
  !*** ./src/assets/Logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgBzZjfTxxVFMfPvQMEFkhXWqiWKLMUTJZGhUSNMSkMMTE2NQovPvhi+xdA/wLKUxNf0Afja31q36DRVmNiGKn6RCIaC7HF7NSIhFLt8GOXZXfn3p4zw0z31+yvgXa/yWbu3Lkz+7nnnnPuD4CAunZz7PL1Wx/K67c+mIEjEIeA4ky+5pTY5FFABgZkkk0zAPPgbvLa1+9rcIgKDPjR+bklYbFx954pypRbvvKlpn76hTZxZUZToUY1QJWamdHCmSY+IaQckyBNxmHpuRsGpN7uMhPPt4Sxibb48SuzP73eEd63mNaYEqbF2A2oUayaxjFNDYPgn+Afjhk9IW3lTBgSrU4fW9ub4ERns13eWU/A/3sZuzzwhwkDy1smSJgTCv+qX1/VoQpVBEhgGcEn0R8mJEDYrY8j3IJ20obknMGLartdv7uTgv82k9Aaz8B7N9fs56F45uAPpSG4crFS0LKAf53tncRWU9lg2cqGJEACTaL1NtCK4UcpiLc1QLrRcfUTCH1qbQ+6/0kQ/NVtRVwa0g2zJkCymiWVWZBSgzIiyB/efQG6Th+DhgYGmYyAtb93i7YlS4bNFPTd3YauzaTBuRyN6IYB1QAinCoEn0erqcWe/9sdwl+LDUaWw0Cwrx0vtUFzC9bF07C5see1b0wL6P9zG3qMOIQSmTwAaVhcjr+sG0sVAZaCI6DFN4/Dw4NgKKbmZgVSCCyE9OqG5zegE4e3hEyFi6FilizIg5jTZvwsR76WD+cOV/SO40rJpJUDZ783ehIW3zgOiZBvVgsLweZ/pSyRp5w3KCAkg7FiX1jOSik0ZD2xXXT4BFpm364z1Lac9mQ1srb7zv1IGzzsaoa3ft60O5UvCUxtR+Ng8WJ2vTfE5Yb2u/Pdni/13duxy9n6Fp+7MBQI5zC9OOCt8PtQhxfJlHre+X694H0PlIvRft3Q3XtviIXFx/yGduXMMRvs3DdrEF3eKvi4GW7y4FwIVyoGBgG5eZA6S9B+Yhabyr5/4oMMJvxeit7Zgld/e+Tb63RTriv3GLkphoCH9Q0Pch2zgD8h0+5pqpYDGNP6B/2s5/5BNep8sF/0GwRJnSSLl1K2FZ2uC2sEDkkUPPm5LhsyinMzWdz1yeKETHMj2m4lsAICyB06AhhAdyilfgywzgfJ0oCoNgtGPEC/ebZSNaUc36R86Ge9bEXLdMIW4xpdnNCTMhAg+RVZhdJPJSozq9hiUqp0dezMglmQRAFwqGJskC4HjsAMqFPZgE82PfUnx4JSGlCncqKYsx+h3nRgNBtQAUuH+pPtdjZghPYFUupQT2Jyji5eOpeKnIY6UpqD7XY5S/7V4d4YlFg0PDXhaPbdjo1SMXdC5OIS1IOYvOoV85+tno3MQ8DFQzBJo28hFnHvCpYUaUXSnsCAZ6Q07pOz7wsAo7j1wy3g+LOYXRiIy9G8rWfRRRmmnSX5lP2R4E4vGNOF9SWEO71BS/BZOOLI9oNznpXRCm5HG3E7CkcCKQ1FyguR24bvVFvx+eBdrfcCF0CbGRWCy0SrfbbN4fOaT7f8FAgUEzBjUq8EDGoFdEX+iScRI3Q8h8clKn4KfzkrcwOJTDzS0BmwpVBG6Kd+id2HKvUYcwkTZClD4twAAAAASUVORK5CYII=\");\n\n//# sourceURL=webpack://pomodoro_box/./src/assets/Logo.png?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04c53ea390176b416d6a")
/******/ })();
/******/ 
/******/ }
);
webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/PauseStat/pausestat.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/shared/Stats/PauseStat/pausestat.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".pausestat__wrapper--ovDlV {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    padding: 25px;\\r\\n    background-color: #DFDCFE;\\r\\n    align-items: center;\\r\\n}\\r\\n.pausestat__disabled--vlV3V {\\r\\n    background-color: var(--greyF4);\\r\\n}\\r\\n.pausestat__value--1CAYx {\\r\\n    font-weight: 400;\\r\\n    font-size: 64px;\\r\\n    line-height: 76px;\\r\\n    margin: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"wrapper\": \"pausestat__wrapper--ovDlV\",\n\t\"disabled\": \"pausestat__disabled--vlV3V\",\n\t\"value\": \"pausestat__value--1CAYx\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/pausestat.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./src/shared/Stats/PauseStat/PauseStat.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Stats/PauseStat/PauseStat.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PauseStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst pausestat_css_1 = __importDefault(__webpack_require__(/*! ./pausestat.css */ \"./src/shared/Stats/PauseStat/pausestat.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nfunction PauseStat({ value }) {\r\n    if (value) {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: pausestat_css_1.default.text }, { children: \"\\u0412\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430 \\u043F\\u0430\\u0443\\u0437\\u0435\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(value) }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pause' }) }))] })));\r\n    }\r\n    else {\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: (0, classnames_1.default)(pausestat_css_1.default.wrapper, pausestat_css_1.default.disabled) }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: pausestat_css_1.default.textSection }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: pausestat_css_1.default.text }, { children: \"\\u0412\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430 \\u043F\\u0430\\u0443\\u0437\\u0435\" })), (0, jsx_runtime_1.jsx)(\"h3\", Object.assign({ className: pausestat_css_1.default.value }, { children: formatTime(0) }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: pausestat_css_1.default.iconSection }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'pauseDis' }) }))] })));\r\n    }\r\n}\r\nexports.PauseStat = PauseStat;\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (hours === 0 && minutes === 0) {\r\n        return `${minutes}м`;\r\n    }\r\n    {\r\n        return `${minutes}м`;\r\n    }\r\n    if (seconds === 0) {\r\n        return `${minutes}м`;\r\n    }\r\n    if (minutes === 0) {\r\n        return `${hours}ч`;\r\n    }\r\n    if (hours === 0) {\r\n        return `${minutes}м`;\r\n    }\r\n    const timeString = `${hours}ч ${minutes}м`;\r\n    return timeString;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/PauseStat.tsx?");

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
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./pausestat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/PauseStat/pausestat.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./pausestat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/PauseStat/pausestat.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./pausestat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/PauseStat/pausestat.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Stats/PauseStat/pausestat.css?");

/***/ })

})
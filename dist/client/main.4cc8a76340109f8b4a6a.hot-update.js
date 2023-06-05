webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nfunction Header() {\r\n    const theme = (0, react_redux_1.useSelector)(state => state.theme);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const changeTheme = () => {\r\n        dispatch((0, actions_1.setTheme)(theme !== 'dark' ? 'dark' : 'light'));\r\n    };\r\n    return ((0, jsx_runtime_1.jsx)(\"header\", Object.assign({ className: header_css_1.default.header }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.logoBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'tomatoLogo' }), \"pomodoro_box\"] })) })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.statWrapper }, { children: [(0, jsx_runtime_1.jsx)(\"input\", { onChange: changeTheme, checked: theme === 'dark', type: \"checkbox\", id: \"switch\" }), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: header_css_1.default.app }, { children: (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: header_css_1.default.content }, { children: (0, jsx_runtime_1.jsxs)(\"label\", Object.assign({ htmlFor: \"switch\" }, { children: [(0, jsx_runtime_1.jsx)(\"div\", { className: header_css_1.default.toggle }), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.names }, { children: [(0, jsx_runtime_1.jsx)(\"p\", Object.assign({ className: header_css_1.default.light }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: true }) })), (0, jsx_runtime_1.jsx)(\"p\", Object.assign({ className: header_css_1.default.dark }, { children: \"Dark\" }))] }))] })) })) })), (0, jsx_runtime_1.jsx)(\"div\", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: 'stats' }, { children: (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: header_css_1.default.statBlock }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { iconName: 'statistic', size: 16 }), \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430\"] })) })) })] }))] })) })));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ })

})
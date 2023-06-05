webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-persist/es/constants.js":
false,

/***/ "./node_modules/redux-persist/es/createMigrate.js":
false,

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
false,

/***/ "./node_modules/redux-persist/es/createTransform.js":
false,

/***/ "./node_modules/redux-persist/es/getStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/index.js":
false,

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
false,

/***/ "./node_modules/redux-persist/es/persistReducer.js":
false,

/***/ "./node_modules/redux-persist/es/persistStore.js":
false,

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/index.js":
false,

/***/ "./node_modules/redux-thunk/es/index.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nconst NotFound_1 = __webpack_require__(/*! ./shared/NotFound */ \"./src/shared/NotFound/index.ts\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst Stats_1 = __webpack_require__(/*! ./shared/Stats */ \"./src/shared/Stats/index.ts\");\r\nconst TimerContainer_1 = __webpack_require__(/*! ./shared/TimerContainer */ \"./src/shared/TimerContainer/index.ts\");\r\nconst actions_1 = __webpack_require__(/*! ./store/actions */ \"./src/store/actions.ts\");\r\nfunction AppComponent() {\r\n    const [mouted, setMounted] = (0, react_1.useState)(false);\r\n    (0, react_1.useEffect)(() => {\r\n        setMounted(true);\r\n        store_1.store.dispatch((0, actions_1.statAdd)({ date: new Date(), workTime: 0, pauseTime: 0, tomato: 0, stops: 0 }));\r\n    }, []);\r\n    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(TimerContainer_1.TimerContainer, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotFound_1.NotFound, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: '/', element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, { children: (0, jsx_runtime_1.jsx)(Header_1.Header, {}) }) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Content_1.Content, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/stats', element: (0, jsx_runtime_1.jsx)(Stats_1.Stats, {}) })] }))] }) }) })));\r\n}\r\nexports.App = (0, root_1.hot)(() => (0, jsx_runtime_1.jsx)(AppComponent, {}));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (179:60)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| const persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, reducer_1.rootReducer);\\n| exports.default = () => {\\n>     const store = (0, redux_1.createStore)(persistedReducer.);\\n|     const persistor = (0, redux_persist_1.persistStore)(store);\\n|     return { store, persistor };\");\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
false

})
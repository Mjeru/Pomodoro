webpackHotUpdate("main",{

/***/ "./src/shared/Stats/DateStat/DateStat.tsx":
/*!************************************************!*\
  !*** ./src/shared/Stats/DateStat/DateStat.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DateStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst datestat_css_1 = __importDefault(__webpack_require__(/*! ./datestat.css */ \"./src/shared/Stats/DateStat/datestat.css\"));\r\nfunction DateStat({ date, workTime }) {\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: datestat_css_1.default.wrapper }, { children: [(0, jsx_runtime_1.jsx)(\"h2\", Object.assign({ className: datestat_css_1.default.title }, { children: date ? getDay(date) : '' })), workTime ? ((0, jsx_runtime_1.jsxs)(\"p\", Object.assign({ className: datestat_css_1.default.text }, { children: [\"\\u0412\\u044B \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u043B\\u0438 \\u043D\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430\\u043C\\u0438 \\u0432 \\u0442\\u0435\\u0447\\u0435\\u043D\\u0438\\u0438 \", (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: datestat_css_1.default.timeHighlight }, { children: formatTime(workTime) }))] }))) : ((0, jsx_runtime_1.jsx)(\"p\", Object.assign({ className: datestat_css_1.default.text }, { children: \"\\u041D\\u0435\\u0442 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\" })))] })));\r\n}\r\nexports.DateStat = DateStat;\r\nconst getDay = (date) => {\r\n    if (date.length === 'string')\r\n        return date;\r\n    switch (new Date(date).getDay()) {\r\n        case 1: {\r\n            return 'Понедельник';\r\n        }\r\n        case 2: {\r\n            return 'Вторник';\r\n        }\r\n        case 3: {\r\n            return 'Среда';\r\n        }\r\n        case 4: {\r\n            return 'Четверг';\r\n        }\r\n        case 5: {\r\n            return 'Пятница';\r\n        }\r\n        case 6: {\r\n            return 'Суббота';\r\n        }\r\n        case 0: {\r\n            return 'Воскресенье';\r\n        }\r\n        default: return '';\r\n    }\r\n};\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (minutes === 0) {\r\n        return `${hours} часов`;\r\n    }\r\n    if (hours === 0) {\r\n        return `${minutes} минут`;\r\n    }\r\n    return `${hours} часов ${minutes} минут`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DateStat/DateStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/DateStat/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Stats/DateStat/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DateStat */ \"./src/shared/Stats/DateStat/DateStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DateStat/index.ts?");

/***/ })

})
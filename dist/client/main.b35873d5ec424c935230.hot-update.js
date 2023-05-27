/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro_box"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Timer/timer.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Timer/timer.css ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".timer__wrapper--3u7KI {\\n    width: 100%;\\n    height: 507px;\\n    background-color: var(--greyF4);\\n}\\n\\n.timer__header--3faD3 {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 19px 40px;\\n    background-color: var(--greyC4);\\n    font-size: 16px;\\n    line-height: 17px;\\n}\\n\\n.timer__header--3faD3 div {\\n    color: var(--white);\\n}\\n\\n.timer__title--3gsyz {\\n    font-weight: 700;\\n}\\n\\n.timer__tomato--1jvOX {\\n    font-weight: 400;\\n}\\n\\n.timer__timeWrapper--2ICHa {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    width: 380px;\\n    margin: 70px auto 0;\\n    /*margin-top: 70px;*/\\n    font-weight: 200;\\n    font-size: 150px;\\n    line-height: 179px;\\n}\\n\\n.timer__addButton--2VcuR {\\n    position: absolute;\\n    left: 105%;\\n    top: 50%;\\n    transform: translateY(-50%);\\n}\\n.timer__addButton--2VcuR:active svg circle{\\n    fill: var(--green3);\\n}\\n\\n.timer__buttonsBlock--1TFyW {\\n    margin: 32px auto 0;\\n    display: flex;\\n    justify-content: center;\\n    gap: 25px\\n}\\n\\n.timer__work--3PzM-.timer__start--u85EJ > header {\\n    background-color: var(--red);\\n}\\n\\n.timer__work--3PzM-.timer__start--u85EJ > .timer__timeWrapper--2ICHa {\\n    color: var(--red);\\n}\\n\\n.timer__work--3PzM-.timer__pause--2SoCb > .timer__timeWrapper--2ICHa {\\n}\\n\\n.timer__timeout--3SLMl.timer__pause--2SoCb > header {\\n    background-color: var(--green);\\n}\\n\\n.timer__timeout--3SLMl.timer__start--u85EJ > header {\\n    background-color: var(--green);\\n}\\n\\n.timer__timeout--3SLMl.timer__stop--JpBm6 > header {\\n    background-color: var(--green);\\n}\\n\\n.timer__timeout--3SLMl.timer__start--u85EJ > .timer__timeWrapper--2ICHa {\\n    color: var(--green);\\n}\\n\\n.timer__timeout--3SLMl.timer__pause--2SoCb > .timer__timeWrapper--2ICHa {\\n}\\n\\n.timer__work--3PzM-.timer__pause--2SoCb > header {\\n    background-color: var(--red);\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"wrapper\": \"timer__wrapper--3u7KI\",\n\t\"header\": \"timer__header--3faD3\",\n\t\"title\": \"timer__title--3gsyz\",\n\t\"tomato\": \"timer__tomato--1jvOX\",\n\t\"timeWrapper\": \"timer__timeWrapper--2ICHa\",\n\t\"addButton\": \"timer__addButton--2VcuR\",\n\t\"buttonsBlock\": \"timer__buttonsBlock--1TFyW\",\n\t\"work\": \"timer__work--3PzM-\",\n\t\"start\": \"timer__start--u85EJ\",\n\t\"pause\": \"timer__pause--2SoCb\",\n\t\"timeout\": \"timer__timeout--3SLMl\",\n\t\"stop\": \"timer__stop--JpBm6\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Timer/timer.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D");

/***/ }),

/***/ "./src/shared/Timer/timer.css":
/*!************************************!*\
  !*** ./src/shared/Timer/timer.css ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./timer.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Timer/timer.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./timer.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Timer/timer.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./timer.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/shared/Timer/timer.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.id, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Timer/timer.css?");

/***/ }),

/***/ "./node_modules/use-sound/dist/use-sound.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sound/dist/use-sound.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useSound: () => (/* binding */ useSound)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nfunction _extends() {\r\n    _extends = Object.assign || function (target) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            var source = arguments[i];\r\n            for (var key in source) {\r\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\r\n                    target[key] = source[key];\r\n                }\r\n            }\r\n        }\r\n        return target;\r\n    };\r\n    return _extends.apply(this, arguments);\r\n}\r\nfunction _objectWithoutPropertiesLoose(source, excluded) {\r\n    if (source == null)\r\n        return {};\r\n    var target = {};\r\n    var sourceKeys = Object.keys(source);\r\n    var key, i;\r\n    for (i = 0; i < sourceKeys.length; i++) {\r\n        key = sourceKeys[i];\r\n        if (excluded.indexOf(key) >= 0)\r\n            continue;\r\n        target[key] = source[key];\r\n    }\r\n    return target;\r\n}\r\nfunction useOnMount(callback) {\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(callback, []);\r\n}\r\nfunction useSound(src, _ref) {\r\n    if (_ref === void 0) {\r\n        _ref = {};\r\n    }\r\n    var _ref2 = _ref, _ref2$volume = _ref2.volume, volume = _ref2$volume === void 0 ? 1 : _ref2$volume, _ref2$playbackRate = _ref2.playbackRate, playbackRate = _ref2$playbackRate === void 0 ? 1 : _ref2$playbackRate, _ref2$soundEnabled = _ref2.soundEnabled, soundEnabled = _ref2$soundEnabled === void 0 ? true : _ref2$soundEnabled, _ref2$interrupt = _ref2.interrupt, interrupt = _ref2$interrupt === void 0 ? false : _ref2$interrupt, onload = _ref2.onload, delegated = _objectWithoutPropertiesLoose(_ref2, [\"id\", \"volume\", \"playbackRate\", \"soundEnabled\", \"interrupt\", \"onload\"]);\r\n    var HowlConstructor = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\r\n    var isMounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);\r\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), duration = _React$useState[0], setDuration = _React$useState[1];\r\n    var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), sound = _React$useState2[0], setSound = _React$useState2[1];\r\n    var handleLoad = function handleLoad() {\r\n        if (typeof onload === 'function') {\r\n            // @ts-ignore\r\n            onload.call(this);\r\n        }\r\n        if (isMounted.current) {\r\n            // @ts-ignore\r\n            setDuration(this.duration() * 1000);\r\n        } // @ts-ignore\r\n        setSound(this);\r\n    }; // We want to lazy-load Howler, since sounds can't play on load anyway.\r\n    useOnMount(function () {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_howler_dist_howler_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! howler */ \"./node_modules/howler/dist/howler.js\", 23)).then(function (mod) {\r\n            if (!isMounted.current) {\r\n                var _mod$Howl;\r\n                // Depending on the module system used, `mod` might hold\r\n                // the export directly, or it might be under `default`.\r\n                HowlConstructor.current = (_mod$Howl = mod.Howl) !== null && _mod$Howl !== void 0 ? _mod$Howl : mod[\"default\"].Howl;\r\n                isMounted.current = true;\r\n                new HowlConstructor.current(_extends({\r\n                    src: Array.isArray(src) ? src : [src],\r\n                    volume: volume,\r\n                    rate: playbackRate,\r\n                    onload: handleLoad\r\n                }, delegated));\r\n            }\r\n        });\r\n        return function () {\r\n            isMounted.current = false;\r\n        };\r\n    }); // When the `src` changes, we have to do a whole thing where we recreate\r\n    // the Howl instance. This is because Howler doesn't expose a way to\r\n    // tweak the sound\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\r\n        if (HowlConstructor.current && sound) {\r\n            setSound(new HowlConstructor.current(_extends({\r\n                src: Array.isArray(src) ? src : [src],\r\n                volume: volume,\r\n                onload: handleLoad\r\n            }, delegated)));\r\n        } // The linter wants to run this effect whenever ANYTHING changes,\r\n        // but very specifically I only want to recreate the Howl instance\r\n        // when the `src` changes. Other changes should have no effect.\r\n        // Passing array to the useEffect dependencies list will result in\r\n        // ifinite loop so we need to stringify it, for more details check\r\n        // https://github.com/facebook/react/issues/14476#issuecomment-471199055\r\n        // eslint-disable-next-line react-hooks/exhaustive-deps\r\n    }, [JSON.stringify(src)]); // Whenever volume/playbackRate are changed, change those properties\r\n    // on the sound instance.\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\r\n        if (sound) {\r\n            sound.volume(volume);\r\n            sound.rate(playbackRate);\r\n        } // A weird bug means that including the `sound` here can trigger an\r\n        // error on unmount, where the state loses track of the sprites??\r\n        // No idea, but anyway I don't need to re-run this if only the `sound`\r\n        // changes.\r\n        // eslint-disable-next-line react-hooks/exhaustive-deps\r\n    }, [volume, playbackRate]);\r\n    var play = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (options) {\r\n        if (typeof options === 'undefined') {\r\n            options = {};\r\n        }\r\n        if (!sound || !soundEnabled && !options.forceSoundEnabled) {\r\n            return;\r\n        }\r\n        if (interrupt) {\r\n            sound.stop();\r\n        }\r\n        if (options.playbackRate) {\r\n            sound.rate(options.playbackRate);\r\n        }\r\n        sound.play(options.id);\r\n    }, [sound, soundEnabled, interrupt]);\r\n    var stop = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {\r\n        if (!sound) {\r\n            return;\r\n        }\r\n        sound.stop(id);\r\n    }, [sound]);\r\n    var pause = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {\r\n        if (!sound) {\r\n            return;\r\n        }\r\n        sound.pause(id);\r\n    }, [sound]);\r\n    var returnedValue = [play, {\r\n            sound: sound,\r\n            stop: stop,\r\n            pause: pause,\r\n            duration: duration\r\n        }];\r\n    return returnedValue;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSound);\r\n\r\n\r\n\n\n//# sourceURL=webpack://pomodoro_box/./node_modules/use-sound/dist/use-sound.esm.js?");

/***/ }),

/***/ "./src/hooks/useWorker.ts":
/*!********************************!*\
  !*** ./src/hooks/useWorker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWebworker: () => (/* binding */ useWebworker)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nconst workerHandler = (fn) => {\r\n    onmessage = (event) => {\r\n        postMessage(fn(event.data));\r\n    };\r\n};\r\nconst useWebworker = (fn) => {\r\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\r\n    const workerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\r\n        const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])));\r\n        workerRef.current = worker;\r\n        worker.onmessage = (event) => setResult(event.data);\r\n        return () => {\r\n            worker.terminate();\r\n        };\r\n    }, [fn]);\r\n    return {\r\n        result,\r\n        run: (value) => { var _a; return (_a = workerRef.current) === null || _a === void 0 ? void 0 : _a.postMessage(value); }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/hooks/useWorker.ts?");

/***/ }),

/***/ "./src/shared/Timer/Timer.tsx":
/*!************************************!*\
  !*** ./src/shared/Timer/Timer.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.css */ \"./src/shared/Timer/timer.css\");\n/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_timer_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n/* harmony import */ var _assets_beep_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/beep.mp3 */ \"./src/assets/beep.mp3\");\n/* harmony import */ var _hooks_useWorker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useWorker */ \"./src/hooks/useWorker.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// if (typeof window !== 'undefined'){\r\n//     const myWorker = new Worker(URL.createObjectURL(new Blob([`${}`])));\r\n//     myWorker.onmessage = (messageEvent) => {console.log(\"Returning event:\",messageEvent)};\r\n//     myWorker.postMessage({data:123});\r\n// }\r\n// const WORK = 2\r\nconst WORK = 1500;\r\n// const TIMEOUT = 2\r\nconst TIMEOUT = 300;\r\nlet timerContainer = null;\r\nfunction Timer() {\r\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\r\n    const { result, run } = (0,_hooks_useWorker__WEBPACK_IMPORTED_MODULE_10__.useWebworker)();\r\n    const [play] = (0,use_sound__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_assets_beep_mp3__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\r\n    const task = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state) => state.tasks.find((task) => !task.done));\r\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(WORK);\r\n    const [part, setPart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('work');\r\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('stop');\r\n    const addTime = () => {\r\n        setTime((time) => time + 60);\r\n    };\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\r\n    });\r\n    const startTimer = () => {\r\n        if (mode === 'stop' || mode === 'pause') {\r\n            setMode('start');\r\n            setTime((time) => time - 1);\r\n            timerContainer = setInterval(() => {\r\n                setTime((time) => (time - 1 ? time - 1 : 0));\r\n            }, 1000);\r\n        }\r\n    };\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\r\n        setTime(WORK);\r\n        setMode('stop');\r\n        setPart('work');\r\n    }, [task]);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\r\n        checkTimer();\r\n    }, [time]);\r\n    const checkTimer = () => {\r\n        if (time < 0) {\r\n            endTimer();\r\n        }\r\n    };\r\n    const stopTimer = () => {\r\n        if (timerContainer !== null && mode === 'start') {\r\n            clearInterval(timerContainer);\r\n            setTime(WORK);\r\n            setMode('stop');\r\n        }\r\n    };\r\n    const pauseTimer = () => {\r\n        if (timerContainer !== null && mode == 'start') {\r\n            setMode('pause');\r\n            clearInterval(timerContainer);\r\n        }\r\n    };\r\n    const endTimer = () => {\r\n        console.log(mode);\r\n        if (timerContainer !== null && part == 'work') {\r\n            clearInterval(timerContainer);\r\n            setTime(TIMEOUT);\r\n            setPart('timeout');\r\n            setMode('stop');\r\n            play();\r\n        }\r\n        if (timerContainer !== null && part == 'timeout') {\r\n            clearInterval(timerContainer);\r\n            setTime(WORK);\r\n            setPart('work');\r\n            setMode('stop');\r\n            endTomato();\r\n            play();\r\n        }\r\n    };\r\n    const endTomato = () => {\r\n        if (task) {\r\n            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.decTomato)(task.id));\r\n        }\r\n    };\r\n    const skipWork = () => {\r\n        if (timerContainer !== null && part == 'work') {\r\n            clearInterval(timerContainer);\r\n            setTime(TIMEOUT);\r\n            setPart('timeout');\r\n            setMode('stop');\r\n        }\r\n    };\r\n    const skipTimeout = () => {\r\n        console.log('skipWork');\r\n        endTomato();\r\n    };\r\n    if (!task) {\r\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: \"123\" });\r\n    }\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_timer_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper), part === 'work' ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().work) : (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().timeout), mode === 'start'\r\n            ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().start)\r\n            : mode === 'pause'\r\n                ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().pause)\r\n                : (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().stop)) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().header) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().title) }, { children: task.title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().tomato) }, { children: part === 'work' ? 'Помидор ' + (task.complete + 1) : 'Перерыв ' + (task.complete + 1) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().timeWrapper) }, { children: [formatTime(time), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", Object.assign({ onClick: addTime, className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().addButton) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, { iconName: 'addButton' }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().buttonsBlock) }, { children: [mode === 'stop' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: startTimer, text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: startTimer, text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: pauseTimer, text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: skipWork, text: 'Сделано', type: 'disabledR' })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: stopTimer, text: 'Стоп', type: 'disabledR' }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: skipTimeout, text: 'Пропустить', type: 'disabledR' }))] }))] })));\r\n}\r\nfunction formatTime(seconds) {\r\n    if (seconds < 0)\r\n        return `00:00`;\r\n    const minutes = Math.floor(seconds / 60);\r\n    const remainingSeconds = seconds % 60;\r\n    const minutesString = String(minutes).padStart(2, '0');\r\n    const secondsString = String(remainingSeconds).padStart(2, '0');\r\n    return `${minutesString}:${secondsString}`;\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Timer/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Timer/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* reexport safe */ _Timer__WEBPACK_IMPORTED_MODULE_0__.Timer)\n/* harmony export */ });\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ \"./src/shared/Timer/Timer.tsx\");\n\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Timer/index.ts?");

/***/ }),

/***/ "./src/assets/beep.mp3":
/*!*****************************!*\
  !*** ./src/assets/beep.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:audio/mpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksDVgAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uSwP+AAAABLAAAAAAAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7ksD/gAAAASwAAAAAAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5LA/4AAAAEsAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//uSwP+AAAABLAAAAAAAACWAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAA==\");\n\n//# sourceURL=webpack://pomodoro_box/./src/assets/beep.mp3?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".client.js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a539c556d7088bdcb083")
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdatepomodoro_box"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkpomodoro_box"] = self["webpackChunkpomodoro_box"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/******/ }
);
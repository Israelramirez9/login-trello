"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/helpers/enviroment.ts":
/*!***********************************!*\
  !*** ./src/helpers/enviroment.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isClient: function() { return /* binding */ isClient; },\n/* harmony export */   isServer: function() { return /* binding */ isServer; }\n/* harmony export */ });\nconst isClient = ()=>{\n    return \"object\" !== \"undefined\";\n};\nconst isServer = ()=>{\n    return \"object\" === \"undefined\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9lbnZpcm9tZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsV0FBVztJQUNwQixPQUFPLGFBQWtCO0FBQzdCLEVBQUM7QUFDTSxNQUFNQyxXQUFXO0lBQ3BCLE9BQU8sYUFBa0I7QUFDN0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVycy9lbnZpcm9tZW50LnRzP2Q5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzQ2xpZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xufVxuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xufSJdLCJuYW1lcyI6WyJpc0NsaWVudCIsImlzU2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/enviroment.ts\n"));

/***/ }),

/***/ "./src/helpers/token.ts":
/*!******************************!*\
  !*** ./src/helpers/token.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAccessToken: function() { return /* binding */ getAccessToken; },\n/* harmony export */   getRefreshToken: function() { return /* binding */ getRefreshToken; },\n/* harmony export */   removeAccessToken: function() { return /* binding */ removeAccessToken; },\n/* harmony export */   removeRefreshToken: function() { return /* binding */ removeRefreshToken; },\n/* harmony export */   setAccessToken: function() { return /* binding */ setAccessToken; },\n/* harmony export */   setRefreshToken: function() { return /* binding */ setRefreshToken; }\n/* harmony export */ });\n/* harmony import */ var _enviroment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviroment */ \"./src/helpers/enviroment.ts\");\n\nconst getAccessToken = ()=>{\n    if ((0,_enviroment__WEBPACK_IMPORTED_MODULE_0__.isServer)()) {\n        return null;\n    }\n    return localStorage.getItem(\"token\");\n};\nconst setAccessToken = (token)=>{\n    localStorage.setItem(\"token\", token);\n};\nconst getRefreshToken = ()=>{\n    return localStorage.getItem(\"refreshToken\");\n};\nconst setRefreshToken = (refreshToken)=>{\n    localStorage.setItem(\"refreshToken\", refreshToken);\n};\nconst removeAccessToken = ()=>{\n    localStorage.removeItem(\"token\");\n};\nconst removeRefreshToken = ()=>{\n    localStorage.removeItem(\"refreshToken\");\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy90b2tlbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQzNDLE1BQU1DLGlCQUFpQjtJQUMxQixJQUFJRCxxREFBUUEsSUFBSTtRQUNaLE9BQU87SUFDWDtJQUNBLE9BQU9FLGFBQWFDLE9BQU8sQ0FBQztBQUNoQyxFQUFDO0FBRU0sTUFBTUMsaUJBQWlCLENBQUNDO0lBRTNCSCxhQUFhSSxPQUFPLENBQUMsU0FBU0Q7QUFDbEMsRUFBQztBQUVNLE1BQU1FLGtCQUFrQjtJQUMzQixPQUFPTCxhQUFhQyxPQUFPLENBQUM7QUFDaEMsRUFBQztBQUVNLE1BQU1LLGtCQUFrQixDQUFDQztJQUM1QlAsYUFBYUksT0FBTyxDQUFDLGdCQUFnQkc7QUFDekMsRUFBQztBQUVNLE1BQU1DLG9CQUFvQjtJQUM3QlIsYUFBYVMsVUFBVSxDQUFDO0FBQzVCLEVBQUM7QUFFTSxNQUFNQyxxQkFBcUI7SUFDOUJWLGFBQWFTLFVBQVUsQ0FBQztBQUM1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXJzL3Rva2VuLnRzP2Y3ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNDbGllbnQsIGlzU2VydmVyIH0gZnJvbSBcIi4vZW52aXJvbWVudFwiO1xuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICAgIGlmIChpc1NlcnZlcigpKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWNjZXNzVG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbilcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZnJlc2hUb2tlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoVG9rZW5cIilcbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlZnJlc2hUb2tlbiA9IChyZWZyZXNoVG9rZW46IHN0cmluZykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbilcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIilcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlZnJlc2hUb2tlbiA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInJlZnJlc2hUb2tlblwiKVxufSJdLCJuYW1lcyI6WyJpc1NlcnZlciIsImdldEFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJzZXRJdGVtIiwiZ2V0UmVmcmVzaFRva2VuIiwic2V0UmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuIiwicmVtb3ZlQWNjZXNzVG9rZW4iLCJyZW1vdmVJdGVtIiwicmVtb3ZlUmVmcmVzaFRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/token.ts\n"));

/***/ })

});
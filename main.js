/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Figtree-Light.woff2 */ \"./src/assets/fonts/Figtree-Light.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Figtree-Light.woff */ \"./src/assets/fonts/Figtree-Light.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Manrope-ExtraLight.woff2 */ \"./src/assets/fonts/Manrope-ExtraLight.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Figtree';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Manrope';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: 200;\n    font-style: normal;\n    font-display: swap;\n}\n\n* {\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n}\n\n*:not(dialog) {\n    margin: 0;\n}\n\n:root {\n    --color-1: #6832ff;\n    --color-2: #ff298d;\n    --gradient: linear-gradient(var(--color-1), var(--color-2));\n}\n\nbody {\n    height: 100vh;\n    background: var(--gradient);\n}\n\n.mainapp {\n    background: #eeeaea;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 5px 6px 20px rgb(80, 80, 80);\n    margin: 2em;\n    padding: 3rem;\n    display: flex;\n    gap: 2rem;\n}\n\n.btn {\n    border: none;\n    padding: 1em;\n    color: white;\n    border-radius: 10px;\n    font-family: \"Figtree\";\n    background: var(--color-1);\n    transition: 0.3s;\n}\n\n.open-project-modal, .open-todo-modal {\n    font-size: 1.3rem;\n}\n\n:modal {\n    background-color: #b296ff;\n    border: none;\n    border-radius: 20px;\n    padding: 3rem;\n    font-size: 2rem;\n    transition: 0.3s;\n}\n\n:modal > form {\n    display: flex;\n    flex-direction: column;\n}\n\n#project-name {\n    border:none;\n    font-family: \"Manrope\";\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    border-radius: 10px;\n}\n\n.project-modal > form {\n    font-family: \"Manrope\";\n    gap: 20px;\n    align-items: start;\n}\n\n#project-modal button {\n    border-radius: 10px;\n    font-size: 1.3rem;\n    padding: 1rem;\n}\n\n.todo-modal form {\n    font-family: \"Manrope\";\n    gap: 20px;\n}\n\n.todo-modal label {\n    width: 12rem;\n    display: inline-block;\n}\n\n#select, #title, #priority, #duedate, #description {\n    border:none;\n    font-family: \"Manrope\";\n    border-radius: 10px;\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n}\n\n.project-area, .todo-area {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n.project-nav {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.project-nav-item {\n    font-family: \"Manrope\";\n    font-size: 1.5rem;\n    padding: 1rem;\n    margin: 0.5rem;\n    border-radius: 10px;\n}\n\n.project-nav-item:hover {\n    background-color: #bebdbd;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\n.todo-modal button {\n    font-size: 1.3rem;\n}\n\n.btn:hover {\n    background: var(--color-2);\n    cursor: pointer;\n}\n\n.close-project-modal:hover, .close-todo-modal:hover {\n    cursor: pointer;\n}\n\n.todo {\n    font-family: \"Manrope\";\n    font-size: 1.3rem;\n    display: flex;\n    gap: 20px\n}\n\n.project-details {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.delete-icon {\n    color: red;\n    height: 2rem;\n    border: none;\n}\n\n.delete-button {\n    border: none;\n    padding: 10px;\n    transition: 0.3s;\n    align-self: center;\n    border-radius: 10px;\n}\n\n.delete-button:hover {\n    background-color: #c5c5c5;\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/fonts/Figtree-Light.woff"
/*!*********************************************!*\
  !*** ./src/assets/fonts/Figtree-Light.woff ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"99db3a711961d1dbfc18.woff\";\n\n//# sourceURL=webpack://todolist/./src/assets/fonts/Figtree-Light.woff?\n}");

/***/ },

/***/ "./src/assets/fonts/Figtree-Light.woff2"
/*!**********************************************!*\
  !*** ./src/assets/fonts/Figtree-Light.woff2 ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a185b7dbb188fe6e1fbe.woff2\";\n\n//# sourceURL=webpack://todolist/./src/assets/fonts/Figtree-Light.woff2?\n}");

/***/ },

/***/ "./src/assets/fonts/Manrope-ExtraLight.woff2"
/*!***************************************************!*\
  !*** ./src/assets/fonts/Manrope-ExtraLight.woff2 ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"28ade8c6fbf418788629.woff2\";\n\n//# sourceURL=webpack://todolist/./src/assets/fonts/Manrope-ExtraLight.woff2?\n}");

/***/ },

/***/ "./src/assets/svg/trash-can.svg"
/*!**************************************!*\
  !*** ./src/assets/svg/trash-can.svg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bd23f7e6c28835d6b486.svg\";\n\n//# sourceURL=webpack://todolist/./src/assets/svg/trash-can.svg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_projectModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectModal */ \"./src/modules/projectModal.js\");\n/* harmony import */ var _modules_todoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todoModal */ \"./src/modules/todoModal.js\");\n/* harmony import */ var _modules_addDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addDefault */ \"./src/modules/addDefault.js\");\n\n\n\n\n\n\n\n(0,_modules_addDefault__WEBPACK_IMPORTED_MODULE_3__.addDefault)();\n\n(0,_modules_projectModal__WEBPACK_IMPORTED_MODULE_1__.projectModalOpenCloseHandler)();\n(0,_modules_todoModal__WEBPACK_IMPORTED_MODULE_2__.todoModalOpenCloseHandler)();\n\n(0,_modules_todoModal__WEBPACK_IMPORTED_MODULE_2__.createTodoHandler)();\n(0,_modules_projectModal__WEBPACK_IMPORTED_MODULE_1__.createProjectHandler)();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/Project.js"
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\n\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todoList = [];\n    }\n\n    /* Input: Todo name, Output: Todo Object */\n    findTodo(todoTitle) {\n        return this.todoList.find(x => x.name === todoTitle);\n    }\n\n    removeTodo(todoTitle) {\n        const index = this.todoList.indexOf(x => x.name === todoTitle);\n        return this.todoList.splice(index, 1);\n    }\n\n    findTodoByClassName(className) {\n        return this.todoList.find(x => (0,_helper__WEBPACK_IMPORTED_MODULE_0__.nameToClassName)(x.title) === className);\n    }\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/Project.js?\n}");

/***/ },

/***/ "./src/modules/ProjectList.js"
/*!************************************!*\
  !*** ./src/modules/ProjectList.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\n\n\n\nconst projectList = {\n    \n    listOfProjects: [],\n\n    findProject: (projectName) => {\n        return projectList.listOfProjects.find(x => x.name === projectName);\n    },\n\n    findProjectByClassName: (className) => {\n        return projectList.listOfProjects.find(x => (0,_helper__WEBPACK_IMPORTED_MODULE_0__.nameToClassName)(x.name) === className);\n    }\n};\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/ProjectList.js?\n}");

/***/ },

/***/ "./src/modules/Todo.js"
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n\n\n/**\n * @class\n * @classdesc The Todo class stores one Todo object.\n */\nclass Todo {\n\n    constructor(title, priority, dueDate, description) {\n        this.title = title;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.description = description;\n        this.complete = false;\n    }\n};\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/Todo.js?\n}");

/***/ },

/***/ "./src/modules/addDefault.js"
/*!***********************************!*\
  !*** ./src/modules/addDefault.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDefault: () => (/* binding */ addDefault)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ \"./src/modules/Todo.js\");\n/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priority */ \"./src/modules/priority.js\");\n/* harmony import */ var _renderPriority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderPriority */ \"./src/modules/renderPriority.js\");\n\n\n\n\n\n\n\n\n\n/**\n * Function called at the beginning of execution\n */\nfunction addDefault() {\n\n    (0,_renderPriority__WEBPACK_IMPORTED_MODULE_5__.renderPriority)(_priority__WEBPACK_IMPORTED_MODULE_4__.priority);\n\n    const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_1__.Project(\"Personal Life\");\n    _ProjectList__WEBPACK_IMPORTED_MODULE_0__.projectList.listOfProjects.push(defaultProject);\n\n    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjectDetails)(defaultProject);\n    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjectNavBar)(_ProjectList__WEBPACK_IMPORTED_MODULE_0__.projectList.listOfProjects);\n    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectMenu)(_ProjectList__WEBPACK_IMPORTED_MODULE_0__.projectList.listOfProjects);\n\n    // const default2Project = new Project(\"Work Tasks\");\n    // projectList.listOfProjects.push(default2Project);\n\n    // renderProjectDetails(default2Project);\n    // renderProjectNavBar(projectList.listOfProjects);\n    // renderSelectMenu(projectList.listOfProjects);\n\n    // const todo1 = new Todo(\"Cook Food\", \"1\", \"2nd Jan, 2026\", \"Cook Meals for yourself. Something less with carbs\");\n    // defaultProject.todoList.push(todo1);\n    // renderProjectDetails(defaultProject);\n\n    // const todo2 = new Todo(\"Meeting with client\", \"2\", \"4th Feb, 2026\", \"Please don't be late\");\n    // default2Project.todoList.push(todo2);\n    // renderProjectDetails(default2Project);\n    // renderProjectDetails(default2Project);\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/addDefault.js?\n}");

/***/ },

/***/ "./src/modules/addDeleteEventHandler.js"
/*!**********************************************!*\
  !*** ./src/modules/addDeleteEventHandler.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDeleteEventHandler: () => (/* binding */ addDeleteEventHandler)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/modules/Todo.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\n\nfunction addDeleteEventHandler(deleteElement) {\n\n    const projectClassName = deleteElement.classList[1];\n\n    //console.log(deleteElement.parentElement);\n    const todoClassName = deleteElement.classList[2];\n    console.log(todoClassName);\n\n    deleteElement.addEventListener(\"click\", () => {\n        const projectObject = _ProjectList__WEBPACK_IMPORTED_MODULE_1__.projectList.findProjectByClassName(projectClassName);\n        console.log(projectObject);\n        console.log(projectClassName);\n        console.log(todoClassName);\n        const toDoObj = projectObject.findTodoByClassName(todoClassName);\n        console.log(toDoObj);\n        projectObject.removeTodo(toDoObj.title);\n        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjectDetails)(projectObject);\n        console.log(projectObject);\n        //const todoIndex = projectObject.indexOf(0);\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/addDeleteEventHandler.js?\n}");

/***/ },

/***/ "./src/modules/helper.js"
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nameToClassName: () => (/* binding */ nameToClassName)\n/* harmony export */ });\n\n\nfunction nameToClassName(name) {\n\n    const lowercasename = name.trim().toLowerCase();\n    let className = \"\";\n\n    for (const char of lowercasename) {\n        if (char === \" \") {\n            className += \"-\";\n        }\n        else {\n            className += char;\n        }\n    }\n\n    return className;\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/helper.js?\n}");

/***/ },

/***/ "./src/modules/modalHandler.js"
/*!*************************************!*\
  !*** ./src/modules/modalHandler.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalOpenCloseHandler: () => (/* binding */ modalOpenCloseHandler)\n/* harmony export */ });\n\n\nfunction modalOpenCloseHandler(openBtn, closeBtn, modal) {\n\n    openBtn.addEventListener(\"click\", () => {\n        modal.showModal();\n    });\n\n    closeBtn.addEventListener(\"click\", () => {\n        modal.close();\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/modalHandler.js?\n}");

/***/ },

/***/ "./src/modules/priority.js"
/*!*********************************!*\
  !*** ./src/modules/priority.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   priority: () => (/* binding */ priority)\n/* harmony export */ });\n\n\n/** A Priority Object stores finite values of the Priorities each task can take \n */\nconst priority = {\n    0: \"High\",\n    1: \"Medium\",\n    2: \"Low\",\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/priority.js?\n}");

/***/ },

/***/ "./src/modules/projectModal.js"
/*!*************************************!*\
  !*** ./src/modules/projectModal.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addprojectSwitchEventHandler: () => (/* binding */ addprojectSwitchEventHandler),\n/* harmony export */   createProjectHandler: () => (/* binding */ createProjectHandler),\n/* harmony export */   projectModalOpenCloseHandler: () => (/* binding */ projectModalOpenCloseHandler)\n/* harmony export */ });\n/* harmony import */ var _modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalHandler */ \"./src/modules/modalHandler.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\n\n\n\n\nfunction projectModalOpenCloseHandler() {\n\n    const openProjectBtn = document.querySelector(\".open-project-modal\");\n    const closeProjectBtn = document.querySelector(\".close-project-modal\");\n    const projectModal = document.querySelector(\".project-modal\");\n\n    (0,_modalHandler__WEBPACK_IMPORTED_MODULE_0__.modalOpenCloseHandler)(openProjectBtn, closeProjectBtn, projectModal);\n}\n\n/* Input: Project nav dom item, Output: on click event will cause user to move\n    to that project */\nfunction addprojectSwitchEventHandler(projectNavItem) {\n    \n    const className = projectNavItem.classList[1];\n\n    projectNavItem.addEventListener(\"click\", () => {\n\n        const projectObject = _ProjectList__WEBPACK_IMPORTED_MODULE_2__.projectList.findProjectByClassName(className);\n        (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjectDetails)(projectObject);\n    });\n}\n\nfunction createProjectHandler() {\n\n    const createProjectBtn = document.querySelector(\".create-project-btn\");\n\n    createProjectBtn.addEventListener(\"click\", projectInputHandler);\n}\n\nfunction getProjectInputData() {\n\n    const projectName = document.querySelector(\"#project-name\").value;\n\n    const projectForm = document.querySelector(\".project-form\");\n    projectForm.reset();\n    \n    return projectName;\n}\n\nfunction projectInputHandler() {\n\n    const projectModal = document.querySelector(\".project-modal\");\n    const projectName = getProjectInputData();\n\n    const projectObject = new _Project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\n    _ProjectList__WEBPACK_IMPORTED_MODULE_2__.projectList.listOfProjects.push(projectObject);\n\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderSelectMenu)(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.projectList.listOfProjects);\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjectDetails)(projectObject);\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjectNavBar)(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.projectList.listOfProjects);\n\n    projectModal.close();\n\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/projectModal.js?\n}");

/***/ },

/***/ "./src/modules/render.js"
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjectDetails: () => (/* binding */ renderProjectDetails),\n/* harmony export */   renderProjectNavBar: () => (/* binding */ renderProjectNavBar),\n/* harmony export */   renderSelectMenu: () => (/* binding */ renderSelectMenu)\n/* harmony export */ });\n/* harmony import */ var _projectModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModal */ \"./src/modules/projectModal.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n/* harmony import */ var _renderDeleteElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDeleteElement */ \"./src/modules/renderDeleteElement.js\");\n/* harmony import */ var _addDeleteEventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addDeleteEventHandler */ \"./src/modules/addDeleteEventHandler.js\");\n\n\n\n\n\n\n\n/* Input: Todo Object, Output: Todo Dom Element */\nfunction renderTodo(todoObject, projectName) {\n    \n    const todoDiv = document.createElement(\"div\");\n    todoDiv.classList.toggle(\"todo\");\n\n    const todoInfoDiv = document.createElement(\"div\");\n    todoInfoDiv.classList.toggle(\"todo-info\");\n\n    const summary = document.createElement(\"summary\");\n    summary.textContent = todoObject.title;\n\n    const p = document.createElement(\"p\");\n    p.textContent = todoObject.description;\n\n    const descElement = document.createElement(\"details\");\n    descElement.append(summary, p);\n\n    const priority = document.createElement(\"div\");\n    priority.textContent = `${todoObject.priority} Priority`;\n\n    const date = document.createElement(\"div\");\n    date.textContent = `Due: ${todoObject.dueDate}`;\n\n    todoInfoDiv.append(descElement, priority, date);\n\n    const deleteElement = (0,_renderDeleteElement__WEBPACK_IMPORTED_MODULE_2__.renderDeleteElement)();\n    deleteElement.classList.toggle((0,_helper__WEBPACK_IMPORTED_MODULE_1__.nameToClassName)(projectName));\n    deleteElement.classList.toggle((0,_helper__WEBPACK_IMPORTED_MODULE_1__.nameToClassName)(todoObject.title));\n    (0,_addDeleteEventHandler__WEBPACK_IMPORTED_MODULE_3__.addDeleteEventHandler)(deleteElement);\n\n    todoDiv.classList.toggle((0,_helper__WEBPACK_IMPORTED_MODULE_1__.nameToClassName)(todoObject.title));\n\n    todoDiv.append(todoInfoDiv, deleteElement);\n\n    return todoDiv;\n}\n\n/* Input: Project Object, Output: Project Details Dom Updated */\nfunction renderProjectDetails(projectObject) {\n\n    const projectDetails = document.querySelector(\".project-details\");\n    projectDetails.innerHTML = \"\";\n\n    if(projectObject.todoList != undefined) {\n        projectObject.todoList.forEach(todo => {\n            const todoDiv = renderTodo(todo, projectObject.name);\n            projectDetails.appendChild(todoDiv);\n        });\n    }\n}\n\n/* Input: Project Name, Output: Project nav Dom Element */\nfunction renderProjectNavItem(projectName) {\n\n    const className = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.nameToClassName)(projectName);\n\n    const projectNavItem = document.createElement(\"div\");\n    projectNavItem.classList.toggle(\"project-nav-item\");\n    projectNavItem.classList.toggle(className);\n\n    (0,_projectModal__WEBPACK_IMPORTED_MODULE_0__.addprojectSwitchEventHandler)(projectNavItem);\n\n    projectNavItem.textContent = projectName;\n\n    return projectNavItem;\n}\n\n/* Input: List of Projects, Output: updated project nav bar */\nfunction renderProjectNavBar(projectList) {\n\n    const projectNavBar = document.querySelector(\".project-nav\");\n    projectNavBar.innerHTML = \"\";\n\n    projectList.forEach(project => {\n        const projectNavItem = renderProjectNavItem(project.name);\n        projectNavBar.appendChild(projectNavItem);\n    });\n}\n\nfunction renderSelectMenu(projectList) {\n\n    const select = document.querySelector(\"#select\");\n    select.innerHTML = \"\";\n\n    projectList.forEach(project => {\n        const option = document.createElement(\"option\");\n        option.textContent = project.name;\n        select.appendChild(option);\n    })\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/render.js?\n}");

/***/ },

/***/ "./src/modules/renderDeleteElement.js"
/*!********************************************!*\
  !*** ./src/modules/renderDeleteElement.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDeleteElement: () => (/* binding */ renderDeleteElement)\n/* harmony export */ });\n/* harmony import */ var _assets_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/svg/trash-can.svg */ \"./src/assets/svg/trash-can.svg\");\n\n\nfunction renderDeleteElement() {\n\n    const deleteElement = document.createElement(\"button\");\n    deleteElement.classList.toggle(\"delete-button\");\n\n    const deleteElementIcon = document.createElement(\"img\");\n    deleteElementIcon.src = _assets_svg_trash_can_svg__WEBPACK_IMPORTED_MODULE_0__;\n    deleteElementIcon.alt = \"delete\";\n    deleteElementIcon.classList.toggle(\"delete-icon\");\n\n    deleteElement.appendChild(deleteElementIcon);\n\n    return deleteElement;\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/renderDeleteElement.js?\n}");

/***/ },

/***/ "./src/modules/renderPriority.js"
/*!***************************************!*\
  !*** ./src/modules/renderPriority.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPriority: () => (/* binding */ renderPriority)\n/* harmony export */ });\nfunction renderPriorityLabel() {\n\n    const priorityLabel = document.createElement(\"label\");\n\n    priorityLabel.htmlFor = \"priority\"\n    priorityLabel.textContent = \"Priority\";\n\n    return priorityLabel;\n}\n\n/**\n * Creates a priority select element and appends it to the Todo form\n * @param {*} priority The priority object\n */\nfunction renderPriority(priority) {\n\n    const priorityItem = document.querySelector(\".priority-item\");\n\n    const prioritySelect = document.createElement(\"select\");\n    prioritySelect.id = \"priority\";\n\n    for (const priorityValue in priority) {\n\n        const optionElement = document.createElement(\"option\");\n\n        optionElement.textContent =  priority[priorityValue];\n        optionElement.value = priority[priorityValue].toLowerCase();\n\n        prioritySelect.appendChild(optionElement);\n\n    }\n\n    const priorityLabel = renderPriorityLabel();\n    priorityItem.append(priorityLabel, prioritySelect);\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/renderPriority.js?\n}");

/***/ },

/***/ "./src/modules/todoModal.js"
/*!**********************************!*\
  !*** ./src/modules/todoModal.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoHandler: () => (/* binding */ createTodoHandler),\n/* harmony export */   todoModalOpenCloseHandler: () => (/* binding */ todoModalOpenCloseHandler)\n/* harmony export */ });\n/* harmony import */ var _modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalHandler */ \"./src/modules/modalHandler.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/modules/Todo.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\n\n\n\n\nfunction todoModalOpenCloseHandler() {\n\n    const openTodoModal = document.querySelector(\".open-todo-modal\");\n    const closeTodoModal = document.querySelector(\".close-todo-modal\");\n    const todoModal = document.querySelector(\".todo-modal\");\n\n    (0,_modalHandler__WEBPACK_IMPORTED_MODULE_0__.modalOpenCloseHandler)(openTodoModal, closeTodoModal, todoModal);\n}\n\nfunction createTodoHandler() {\n\n    const createTodoBtn = document.querySelector(\".create-todo-btn\");\n\n    createTodoBtn.addEventListener(\"click\", todoInputHandler);\n}\n\n// Gets todo form data\nfunction getTodoInput() {\n    \n    const validFlag = false;\n\n    const projectName = document.querySelector(\"#select\").value;\n    const title = document.querySelector(\"#title\").value;\n    const priority = document.querySelector(\"#priority\").value;\n    const duedate = document.querySelector(\"#duedate\").value;\n    const description = document.querySelector(\"#description\").value;\n\n    const todoForm = document.querySelector(\".todo-form\");\n    todoForm.reset();\n\n    return { projectName, title, priority, duedate, description }\n}\n\nfunction todoInputHandler() {\n    \n    const todoModal = document.querySelector(\".todo-modal\");\n    const { projectName, title, priority, duedate, description } = getTodoInput();\n\n    const todoObject = new _Todo__WEBPACK_IMPORTED_MODULE_1__.Todo(title, priority, duedate, description);\n    const projectObject = _ProjectList__WEBPACK_IMPORTED_MODULE_2__.projectList.findProject(projectName);\n    projectObject.todoList.push(todoObject);\n    console.log(projectObject);\n    console.log(\"==================\");\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjectDetails)(projectObject); \n    todoModal.close();\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/todoModal.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
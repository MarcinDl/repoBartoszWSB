/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.inputSelect {
  width: 200px;
  height: 17px;
  text-align: center;
  font-size: 12px;
  font-style: italic;
  border: none;
  border-radius: 10px;
  background-color: rgba(254, 247, 247, 0.8);
}

.upper-div {
  margin: 15px 0 10px;
}

.bottom-div {
  margin-bottom: 20px;
}

.paragraph-style {
  margin-bottom: 5px;
  font-size: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  background-color: rgba(226, 213, 213, 0.4509803922);
}
.navigation__date-hour, .navigation__arrival-weather, .navigation__login {
  width: 100px;
}
.navigation__arrival-weather, .navigation__login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation__arrival-weather, .navigation__date-hour {
  font-size: 14px;
  text-align: center;
}
.navigation__date-hour {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.navigation__date-hour__date--margin {
  margin: 5px 0;
}
.navigation__date-hour__date--margin i {
  margin-right: 5px;
}
.navigation__date-hour__time--padding {
  margin-bottom: 5px;
  padding-bottom: 3px;
}
.navigation__date-hour__time--padding i {
  margin-right: 5px;
}
.navigation__login__login-button--colors {
  padding: 7px 10px;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: #fff;
  background-color: rgba(55, 101, 240, 0.497);
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #fff;
}
.navigation__login-panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: none;
  height: 800px;
  width: 90vw;
  border-radius: 20px;
  z-index: 5;
}
.navigation__login-panel__inputs {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  z-index: 5;
}
.navigation__login-panel__inputs input {
  margin: 10px 0;
  padding: 5px;
  width: 50%;
}
.navigation__login-panel__inputs button {
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(55, 101, 240, 0.497);
  border: 2px solid rgba(254, 247, 247, 0.451);
  border-radius: 15px;
  transition: background-color 1s, color 1s, border 1s;
}
.navigation__login-panel__inputs button:hover {
  color: royalblue;
  background-color: #fff;
  border: 1px solid royalblue;
}
.navigation__login-panel__inputs i {
  position: absolute;
  top: -60%;
  right: 5%;
  padding: 10px;
  font-size: 30px;
}
.navigation__login-panel__error {
  position: absolute;
  top: -50%;
  z-index: 6;
  color: red;
  font-size: 17px;
}

.header {
  position: relative;
  width: 100%;
  height: 130px;
  background-color: rgba(55, 101, 240, 0.497);
}
.header__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.header__text__headline--font {
  font-size: 24px;
  text-align: center;
}
.header__text__paragraph--style {
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
}

.container {
  position: relative;
  height: 650px;
}
.container__panel {
  height: 100%;
  background-color: rgba(254, 247, 247, 0.451);
}
.container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container__panel__flight-places__departure, .container__panel__flight-places__arrival {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.container__panel__passengers__adults, .container__panel__passengers__childrens {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.container__panel__travel-date__departure-date, .container__panel__travel-date__return-date {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.container__panel__luggage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__panel__submit-button {
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translateX(-50%);
  padding: 2px 10px;
  font-size: 25px;
  border-radius: 5px;
  background-color: transparent;
  color: rgb(65, 105, 225);
}
.container__panel__info {
  background-color: rgba(55, 101, 240, 0.497);
  font-size: 1rem;
  padding: 5px 0;
  text-align: center;
}
.container__error {
  display: none;
  position: absolute;
  bottom: 11%;
  width: 100%;
  font-size: 15px;
  text-align: center;
}

.summary {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  display: none;
  width: 100%;
}
.summary__informations {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30%;
  width: 100%;
  padding: 5px;
  border: 10px double rgba(55, 101, 240, 0.497);
}
.summary__informations__header {
  text-align: center;
  font-style: italic;
  font-weight: 700;
  color: rgba(55, 101, 240, 0.497);
}
.summary__informations__panel-first, .summary__informations__panel-second {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 5px;
  padding: 7px 5px;
  width: 100%;
  background-color: rgba(55, 101, 240, 0.497);
  color: rgb(233, 229, 229);
  border-radius: 10px;
  font-weight: 400;
}
.summary__informations__panel-first div, .summary__informations__panel-second div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  text-align: center;
  font-size: 14px;
}
.summary__informations__panel-first i, .summary__informations__panel-second i {
  margin-bottom: 5px;
}
.summary__informations__panel-first__departure-date div {
  flex-direction: row;
  margin-bottom: 5px;
}
.summary__informations__panel-first__departure-date div i {
  margin: 0 5px;
}
.summary__informations__panel-second__return-date div {
  flex-direction: row;
  margin-bottom: 5px;
}
.summary__informations__panel-second__return-date div i {
  margin: 0 5px;
}
.summary__informations__panel-second__passengers div {
  display: inline-block;
  margin: 2px 0;
}
.summary__informations__panel-second__passengers div i {
  margin: 0 2px;
}
.summary__flights {
  background-color: rgba(254, 247, 247, 0.451);
  height: 80%;
  width: 100%;
}
.summary__flights__flightInfo {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr 3fr;
  margin: 30px auto;
  width: 90%;
  height: 100px;
  background-color: rgba(55, 101, 240, 0.497);
  border-radius: 10px;
  color: #fff;
  border: 1px solid rgba(254, 247, 247, 0.451);
}
.summary__flights__flightInfo__paragraph {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
}
.summary__flights__flightErrorInfo {
  margin: 50px 20px 0;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}

.footer {
  height: 50px;
  width: 100%;
  background-color: rgba(55, 101, 240, 0.497);
  border-top: 1px solid black;
}
.footer__rights {
  margin-top: 5px;
  padding-bottom: 7px;
  font-style: italic;
  font-size: 12px;
  text-align: center;
}
.footer .footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-bottom: 10px;
}
.footer .footer-links__link {
  margin: 0 8px;
}
.footer .footer-links__link i {
  margin-right: 5px;
}
.footer .footer-links a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .upper-div,
  .bottom-div {
    margin: 0px;
  }
  .inputSelect {
    width: 260px;
    height: 25px;
    text-align: center;
    font-size: 18px;
    font-style: italic;
    border: none;
    border-radius: 10px;
    background-color: rgba(254, 247, 247, 0.8);
  }
  .paragraph-style {
    margin-bottom: 15px;
    font-size: 20px;
  }
  body {
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .navigation {
    height: 100px;
  }
  .navigation__date-hour, .navigation__arrival-weather, .navigation__login {
    width: 140px;
  }
  .navigation__date-hour, .navigation__arrival-weather {
    font-size: 20px;
  }
  .navigation__date-hour__date--margin, .navigation__arrival-weather__date--margin {
    margin: 15px 0;
  }
  .navigation__date-hour__time--padding, .navigation__arrival-weather__time--padding {
    margin-bottom: 10px;
  }
  .navigation__login__login-button--colors {
    padding: 8px 15px;
    font-size: 20px;
  }
  .navigation__login-panel {
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1000px;
  }
  .navigation__login-panel__inputs input {
    margin: 20px 0;
    padding: 10px;
  }
  .navigation__login-panel__inputs button {
    margin-top: 25px;
    padding: 12px 40px;
    font-size: 18px;
  }
  .navigation__login-panel__error {
    font-size: 22px;
  }
  .header {
    height: 165px;
  }
  .header__text__headline--font {
    font-size: 35px;
  }
  .header__text__paragraph--style {
    margin-top: 25px;
    font-size: 22px;
  }
  .container {
    position: relative;
    height: 900px;
  }
  .container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {
    height: 170px;
    flex-direction: row;
  }
  .container__panel__submit-button {
    bottom: 5%;
    padding: 8px 21px;
    font-size: 32px;
    border-radius: 15px;
  }
  .container__panel__luggage {
    height: 120px;
  }
  .container__panel__luggage__info,
  .container__panel__luggage p {
    margin-bottom: 20px;
    font-size: 25px;
  }
  .container__panel__info {
    background-color: rgba(55, 101, 240, 0.497);
    font-size: 20px;
    padding: 7px 0;
    text-align: center;
  }
  .container__error {
    display: none;
    bottom: 16%;
    font-size: 22px;
  }
  .summary__informations {
    height: 30%;
  }
  .summary__informations__header {
    font-size: 30px;
  }
  .summary__informations__panel-first, .summary__informations__panel-second {
    padding: 10px 20px;
  }
  .summary__informations__panel-first div, .summary__informations__panel-second div {
    width: 130px;
    font-size: 16px;
  }
  .summary__flights__flightInfo {
    margin: 35px auto;
    height: 130px;
  }
  .summary__flights__flightInfo__paragraph {
    margin-top: 15px;
    font-size: 20px;
  }
  .summary__flights__flightErrorInfo {
    margin: 50px 15px 0;
    font-size: 23px;
  }
  .footer {
    height: 75px;
  }
  .footer__rights {
    margin-top: 10px;
    font-size: 18px;
  }
  .footer .footer-links {
    margin-top: 5px;
    font-size: 13px;
  }
  .footer .footer-links__link {
    margin: 0 50px;
  }
  .footer .footer-links__link i {
    margin-right: 10px;
  }
}
@media screen and (min-width: 992px) {
  .paragraph-style {
    margin-bottom: 20px;
    font-size: 25px;
  }
  .inputSelect {
    width: 400px;
    height: 25px;
    text-align: center;
    font-size: 20px;
    font-style: italic;
    border: none;
    border-radius: 10px;
    background-color: rgba(254, 247, 247, 0.8);
  }
  body {
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
  }
  .navigation {
    height: 130px;
  }
  .navigation__date-hour, .navigation__arrival-weather, .navigation__login {
    width: 200px;
  }
  .navigation__date-hour {
    font-size: 20px;
  }
  .navigation__date-hour__date--margin {
    margin: 18px 0;
  }
  .navigation__date-hour__time--padding {
    padding-bottom: 3px;
    margin-bottom: 10px;
  }
  .navigation__login__login-button--colors {
    font-size: 20px;
    padding: 10px 20px;
    transition: background-color 0.5s, color 0.5s;
  }
  .navigation__login__login-button--colors:hover {
    padding: 9px 19px;
    border: 2px solid black;
    color: rgb(55, 101, 240);
    background-color: transparent;
  }
  .navigation__login-panel {
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    width: 75vw;
  }
  .navigation__login-panel__inputs input {
    padding: 10px;
    font-size: 15px;
  }
  .navigation__login-panel__inputs button {
    padding: 15px 40px;
    font-size: 25px;
  }
  .navigation__login-panel__error {
    font-size: 25px;
  }
  .header {
    height: 200px;
  }
  .header__text__headline--font {
    font-size: 38px;
  }
  .header__text__paragraph--style {
    margin-top: 15px;
    font-size: 25px;
  }
  .container {
    height: 1000px;
  }
  .container__panel__flight-places, .container__panel__passengers, .container__panel__travel-date {
    height: 190px;
  }
  .container__panel__luggage {
    height: 120px;
  }
  .container__panel__submit-button {
    font-size: 35px;
    bottom: 5%;
    transition: padding 0.5s, color 0.5s, background-color 0.5s;
  }
  .container__panel__submit-button:hover {
    padding: 8px 30px;
    background-color: rgba(55, 101, 240, 0.497);
    color: #fff;
  }
  .container__panel__submit-button:hover > #icon {
    animation: discoverIcon 0.5s;
    animation-fill-mode: forwards;
  }
  .container__panel__info {
    font-size: 22px;
  }
  .container__error {
    bottom: 15%;
    font-size: 25px;
  }
  .summary {
    flex-direction: row;
  }
  .summary__informations {
    justify-content: flex-start;
    height: 100%;
    width: 30%;
    border: none;
  }
  .summary__informations__header {
    margin: 50px 0 15px;
    color: royalblue;
  }
  .summary__informations__panel-first, .summary__informations__panel-second {
    margin: 15px 0;
    background: none;
    color: royalblue;
  }
  .summary__informations__panel-first div, .summary__informations__panel-second div {
    display: inline;
    margin: 10px 0;
    width: 220px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 20px;
  }
  .summary__informations__panel-first i, .summary__informations__panel-second i {
    text-align: left;
    margin-right: 20px;
  }
  .summary__flights {
    position: relative;
    background-color: rgba(254, 247, 247, 0.451);
    height: 100%;
    width: 80%;
  }
  .summary__flights__flightInfo {
    margin: 30px auto 20px;
    height: 170px;
    border: 4px solid royalblue;
    border-radius: 20px;
    background: none;
  }
  .summary__flights__flightInfo :first-child {
    border-top-left-radius: 16px;
  }
  .summary__flights__flightInfo :nth-child(4) {
    border-top-right-radius: 16px;
  }
  .summary__flights__flightInfo :nth-child(-n+4) {
    border-bottom: 2px outset royalblue;
    background-color: royalblue;
    color: #fff;
  }
  .summary__flights__flightInfo__paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
    color: royalblue;
    margin-top: 0;
    font-size: 20px;
  }
  .summary__flights__flightErrorInfo {
    position: absolute;
    top: 50%;
    margin: 0 10px;
    transform: translateY(-50%);
  }
  .footer {
    height: 80px;
  }
  .footer__rights {
    font-size: 20px;
  }
  .footer .footer-links {
    font-size: 15px;
  }
  .footer .footer-links__link {
    margin: 0 64px;
  }
}
.errorAnimation {
  animation: showError 1s;
  animation-fill-mode: forwards;
}

.errorInfoAnimation {
  animation: showInfoError 2s;
  animation-fill-mode: forwards;
}

@keyframes discoverIcon {
  from {
    font-size: 0;
  }
  to {
    font-size: 40px;
  }
}
@keyframes showError {
  from {
    left: -100%;
  }
  to {
    left: 0%;
    margin: 0 auto;
  }
}
@keyframes showInfoError {
  from {
    top: -50%;
  }
  to {
    top: 30%;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/partials/_mixins.scss","webpack://./src/scss/partials/_colors.scss"],"names":[],"mappings":"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","sourcesContent":["@import './partials/mixins';\n@import './partials/colors';\n\n$navFont: 14px;\n\n.inputSelect {\n\t@include inputStyle(200px, 17px, 12px);\n}\n.upper-div {\n\tmargin: 15px 0 10px;\n}\n.bottom-div {\n\tmargin-bottom: 20px;\n}\n\n.paragraph-style {\n\tmargin-bottom: 5px;\n\tfont-size: 15px;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\tfont-family: 'Montserrat', sans-serif;\n\t@include imageCenter('/src/images/clouds640.jpg');\n}\n\n.navigation {\n\t@include dispayFlex(space-around, center);\n\theight: 75px;\n\tbackground-color: #e2d5d573;\n\t&__date-hour,\n\t&__arrival-weather,\n\t&__login {\n\t\twidth: 100px;\n\t}\n\t&__arrival-weather,\n\t&__login {\n\t\t@include flexCenter;\n\t}\n\t&__arrival-weather,\n\t&__date-hour {\n\t\tfont-size: $navFont;\n\t\ttext-align: center;\n\t}\n\n\t&__date-hour {\n\t\t@include dispayFlex(center, flex-start);\n\t\tflex-direction: column;\n\n\t\t&__date {\n\t\t\t&--margin {\n\t\t\t\tmargin: 5px 0;\n\t\t\t\ti {\n\t\t\t\t\tmargin-right: 5px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__time {\n\t\t\t&--padding {\n\t\t\t\tmargin-bottom: 5px;\n\t\t\t\tpadding-bottom: 3px;\n\t\t\t\ti {\n\t\t\t\t\tmargin-right: 5px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__login {\n\t\t&__login-button {\n\t\t\t&--colors {\n\t\t\t\tpadding: 7px 10px;\n\t\t\t\tfont-size: $navFont;\n\t\t\t\tfont-style: italic;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: $whiteColor;\n\t\t\t\tbackground-color: $primaryColor;\n\t\t\t\tborder: 1px solid black;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tbox-shadow: 1px 1px 2px #fff;\n\t\t\t}\n\t\t}\n\t}\n\t&__login-panel {\n\t\t@include posAbsuluteCenter();\n\t\t@include dispayFlex(center, center);\n\t\t@include imageCenter('/src/images/Sky640.jpg');\n\t\tdisplay: none;\n\t\theight: 800px;\n\t\twidth: 90vw;\n\t\tborder-radius: 20px;\n\t\tz-index: 5;\n\n\t\t&__inputs {\n\t\t\tposition: relative;\n\t\t\t@include flexCenter();\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\tz-index: 5;\n\t\t\tinput {\n\t\t\t\tmargin: 10px 0;\n\t\t\t\tpadding: 5px;\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\tmargin-top: 20px;\n\t\t\t\tpadding: 10px 30px;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: $whiteColor;\n\t\t\t\tbackground-color: $primaryColor;\n\t\t\t\tborder: 2px solid $secondaryColor;\n\t\t\t\tborder-radius: 15px;\n\t\t\t\ttransition: background-color 1s, color 1s, border 1s;\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: royalblue;\n\t\t\t\t\tbackground-color: $whiteColor;\n\t\t\t\t\tborder: 1px solid royalblue;\n\t\t\t\t}\n\t\t\t}\n\t\t\ti {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -60%;\n\t\t\t\tright: 5%;\n\t\t\t\tpadding: 10px;\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t}\n\t\t&__error {\n\t\t\tposition: absolute;\n\t\t\ttop: -50%;\n\t\t\tz-index: 6;\n\t\t\tcolor: red;\n\t\t\tfont-size: 17px;\n\t\t}\n\t}\n}\n\n.header {\n\tposition: relative;\n\twidth: 100%;\n\theight: 130px;\n\tbackground-color: $primaryColor;\n\t&__text {\n\t\t@include posAbsuluteCenter();\n\t\twidth: 100%;\n\t\t&__headline {\n\t\t\t&--font {\n\t\t\t\tfont-size: 24px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\t\t&__paragraph {\n\t\t\t&--style {\n\t\t\t\tmargin-top: 8px;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.container {\n\tposition: relative;\n\theight: 650px;\n\t// display: none;\n\t&__panel {\n\t\theight: 100%;\n\t\tbackground-color: $secondaryColor;\n\n\t\t&__flight-places,\n\t\t&__passengers,\n\t\t&__travel-date {\n\t\t\t@include flexCenter();\n\t\t\tflex-direction: column;\n\t\t}\n\t\t&__flight-places {\n\t\t\t&__departure,\n\t\t\t&__arrival {\n\t\t\t\t@include flexCenter();\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t&__passengers {\n\t\t\t&__adults,\n\t\t\t&__childrens {\n\t\t\t\t@include flexCenter();\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t&__travel-date {\n\t\t\t&__departure-date,\n\t\t\t&__return-date {\n\t\t\t\t@include flexCenter();\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t&__luggage {\n\t\t\t@include flexCenter();\n\t\t}\n\n\t\t&__submit-button {\n\t\t\tposition: absolute;\n\t\t\tleft: 50%;\n\t\t\tbottom: 3%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tpadding: 2px 10px;\n\t\t\tfont-size: 25px;\n\t\t\tborder-radius: 5px;\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: rgb(65, 105, 225);\n\t\t}\n\n\t\t&__info {\n\t\t\tbackground-color: $primaryColor;\n\t\t\tfont-size: 1rem;\n\t\t\tpadding: 5px 0;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t&__error {\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tbottom: 11%;\n\t\twidth: 100%;\n\t\tfont-size: 15px;\n\t\ttext-align: center;\n\t}\n}\n.summary {\n\t@include posAbsuluteCenter;\n\t@include imageCenter('/src/images/clouds640.jpg');\n\t@include dispayFlex(center, flex-start);\n\tflex-direction: column;\n\tdisplay: none;\n\twidth: 100%;\n\t&__informations {\n\t\t&__header {\n\t\t\ttext-align: center;\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 700;\n\t\t\tcolor: $primaryColor;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-evenly;\n\t\theight: 30%;\n\t\twidth: 100%;\n\t\tpadding: 5px;\n\t\tborder: 10px double $primaryColor;\n\t\t&__panel-first,\n\t\t&__panel-second {\n\t\t\t@include dispayFlex(space-between, flex-start);\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 5px;\n\t\t\tpadding: 7px 5px;\n\t\t\twidth: 100%;\n\t\t\tbackground-color: $primaryColor;\n\t\t\tcolor: rgb(233, 229, 229);\n\t\t\tborder-radius: 10px;\n\t\t\tfont-weight: 400;\n\t\t\tdiv {\n\t\t\t\t@include flexCenter;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 110px;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tmargin-bottom: 5px;\n\t\t\t}\n\t\t}\n\n\t\t&__panel-first {\n\t\t\t&__departure-date {\n\t\t\t\tdiv {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tmargin-bottom: 5px;\n\t\t\t\t\ti {\n\t\t\t\t\t\tmargin: 0 5px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__panel-second {\n\t\t\t&__return-date {\n\t\t\t\tdiv {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t\tmargin-bottom: 5px;\n\t\t\t\t\ti {\n\t\t\t\t\t\tmargin: 0 5px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__passengers {\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 2px 0;\n\t\t\t\t\ti {\n\t\t\t\t\t\tmargin: 0 2px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&__flights {\n\t\tbackground-color: $secondaryColor;\n\t\theight: 80%;\n\t\twidth: 100%;\n\n\t\t&__flightInfo {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(4, auto);\n\t\t\tgrid-template-rows: 1fr 3fr;\n\t\t\tmargin: 30px auto;\n\t\t\twidth: 90%;\n\t\t\theight: 100px;\n\t\t\tbackground-color: $primaryColor;\n\t\t\tborder-radius: 10px;\n\t\t\tcolor: $whiteColor;\n\t\t\tborder: 1px solid $secondaryColor;\n\t\t\t&__paragraph {\n\t\t\t\tmargin-top: 10px;\n\t\t\t\tfont-size: 16px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\t\t&__flightErrorInfo {\n\t\t\tmargin: 50px 20px 0;\n\t\t\tfont-size: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n}\n\n.footer {\n\theight: 50px;\n\twidth: 100%;\n\tbackground-color: $primaryColor;\n\tborder-top: 1px solid black;\n\t&__rights {\n\t\tmargin-top: 5px;\n\t\tpadding-bottom: 7px;\n\t\tfont-style: italic;\n\t\tfont-size: 12px;\n\t\ttext-align: center;\n\t}\n\t.footer-links {\n\t\t@include dispayFlex(center, center);\n\t\tfont-size: 10px;\n\t\tmargin-bottom: 10px;\n\t\t&__link {\n\t\t\tmargin: 0 8px;\n\t\t\ti {\n\t\t\t\tmargin-right: 5px;\n\t\t\t}\n\t\t}\n\t\ta {\n\t\t\tcolor: black;\n\t\t\ttext-decoration: none;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.upper-div,\n\t.bottom-div {\n\t\tmargin: 0px;\n\t}\n\n\t.inputSelect {\n\t\t@include inputStyle(260px, 25px, 18px);\n\t}\n\n\t.paragraph-style {\n\t\tmargin-bottom: 15px;\n\t\tfont-size: 20px;\n\t}\n\tbody {\n\t\t@include imageCenter('/src/images/clouds1280.jpg');\n\t}\n\n\t.navigation {\n\t\theight: 100px;\n\t\t&__date-hour,\n\t\t&__arrival-weather,\n\t\t&__login {\n\t\t\twidth: 140px;\n\t\t}\n\t\t&__date-hour,\n\t\t&__arrival-weather {\n\t\t\tfont-size: 20px;\n\t\t\t&__date {\n\t\t\t\t&--margin {\n\t\t\t\t\tmargin: 15px 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__time {\n\t\t\t\t&--padding {\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__login {\n\t\t\t&__login-button {\n\t\t\t\t&--colors {\n\t\t\t\t\tpadding: 8px 15px;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__login-panel {\n\t\t\t@include imageCenter('/src/images/sky1280.jpg');\n\t\t\theight: 1000px;\n\t\t\t&__inputs {\n\t\t\t\tinput {\n\t\t\t\t\tmargin: 20px 0;\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t}\n\t\t\t\tbutton {\n\t\t\t\t\tmargin-top: 25px;\n\t\t\t\t\tpadding: 12px 40px;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__error {\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.header {\n\t\theight: 165px;\n\t\t&__text {\n\t\t\t&__headline {\n\t\t\t\t&--font {\n\t\t\t\t\tfont-size: 35px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__paragraph {\n\t\t\t\t&--style {\n\t\t\t\t\tmargin-top: 25px;\n\t\t\t\t\tfont-size: 22px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.container {\n\t\tposition: relative;\n\t\theight: 900px;\n\t\t&__panel {\n\t\t\t&__flight-places,\n\t\t\t&__passengers,\n\t\t\t&__travel-date {\n\t\t\t\theight: 170px;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\n\t\t\t&__submit-button {\n\t\t\t\tbottom: 5%;\n\t\t\t\tpadding: 8px 21px;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tborder-radius: 15px;\n\t\t\t}\n\n\t\t\t&__luggage {\n\t\t\t\theight: 120px;\n\t\t\t\t&__info,\n\t\t\t\tp {\n\t\t\t\t\tmargin-bottom: 20px;\n\t\t\t\t\tfont-size: 25px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__info {\n\t\t\t\tbackground-color: $primaryColor;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tpadding: 7px 0;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t&__error {\n\t\t\tdisplay: none;\n\t\t\tbottom: 16%;\n\t\t\tfont-size: 22px;\n\t\t}\n\t}\n\n\t.summary {\n\t\t&__informations {\n\t\t\theight: 30%;\n\t\t\t&__header {\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t\t&__panel-first,\n\t\t\t&__panel-second {\n\t\t\t\tpadding: 10px 20px;\n\t\t\t\tdiv {\n\t\t\t\t\twidth: 130px;\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__flights {\n\t\t\t&__flightInfo {\n\t\t\t\tmargin: 35px auto;\n\t\t\t\theight: 130px;\n\t\t\t\t&__paragraph {\n\t\t\t\t\tmargin-top: 15px;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__flightErrorInfo {\n\t\t\t\tmargin: 50px 15px 0;\n\t\t\t\tfont-size: 23px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.footer {\n\t\theight: 75px;\n\t\t&__rights {\n\t\t\tmargin-top: 10px;\n\t\t\tfont-size: 18px;\n\t\t}\n\t\t.footer-links {\n\t\t\tmargin-top: 5px;\n\t\t\tfont-size: 13px;\n\t\t\t&__link {\n\t\t\t\tmargin: 0 50px;\n\t\t\t\ti {\n\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (min-width: 992px) {\n\t.paragraph-style {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 25px;\n\t}\n\t.inputSelect {\n\t\t@include inputStyle(400px, 25px, 20px);\n\t}\n\tbody {\n\t\t@include imageCenter('/src/images/clouds1920.jpg');\n\t\theight: 100%;\n\t}\n\t.navigation {\n\t\theight: 130px;\n\t\t&__date-hour,\n\t\t&__arrival-weather,\n\t\t&__login {\n\t\t\twidth: 200px;\n\t\t}\n\t\t&__date-hour {\n\t\t\tfont-size: 20px;\n\t\t\t&__date {\n\t\t\t\t&--margin {\n\t\t\t\t\tmargin: 18px 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__time {\n\t\t\t\t&--padding {\n\t\t\t\t\tpadding-bottom: 3px;\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__login {\n\t\t\t&__login-button {\n\t\t\t\t&--colors {\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tpadding: 10px 20px;\n\t\t\t\t\ttransition: background-color 0.5s, color 0.5s;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tpadding: 9px 19px;\n\t\t\t\t\t\tborder: 2px solid black;\n\t\t\t\t\t\tcolor: rgb(55, 101, 240);\n\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__login-panel {\n\t\t\t@include imageCenter('/src/images/sky1920.jpg');\n\t\t\theight: 90vh;\n\t\t\twidth: 75vw;\n\t\t\t&__inputs {\n\t\t\t\tinput {\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t}\n\t\t\t\tbutton {\n\t\t\t\t\tpadding: 15px 40px;\n\t\t\t\t\tfont-size: 25px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__error {\n\t\t\t\tfont-size: 25px;\n\t\t\t}\n\t\t}\n\t}\n\t.header {\n\t\theight: 200px;\n\t\t&__text {\n\t\t\t&__headline {\n\t\t\t\t&--font {\n\t\t\t\t\tfont-size: 38px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__paragraph {\n\t\t\t\t&--style {\n\t\t\t\t\tmargin-top: 15px;\n\t\t\t\t\tfont-size: 25px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.container {\n\t\theight: 1000px;\n\t\t&__panel {\n\t\t\t&__flight-places,\n\t\t\t&__passengers,\n\t\t\t&__travel-date {\n\t\t\t\theight: 190px;\n\t\t\t}\n\t\t\t&__luggage {\n\t\t\t\theight: 120px;\n\t\t\t}\n\t\t\t&__submit-button {\n\t\t\t\tfont-size: 35px;\n\t\t\t\tbottom: 5%;\n\t\t\t\ttransition: padding 0.5s, color 0.5s, background-color 0.5s;\n\t\t\t\t&:hover {\n\t\t\t\t\t> #icon {\n\t\t\t\t\t\tanimation: discoverIcon 0.5s;\n\t\t\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\t\t}\n\t\t\t\t\tpadding: 8px 30px;\n\t\t\t\t\tbackground-color: $primaryColor;\n\t\t\t\t\tcolor: $whiteColor;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__info {\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\t\t}\n\t\t&__error {\n\t\t\tbottom: 15%;\n\t\t\tfont-size: 25px;\n\t\t}\n\t}\n\n\t.summary {\n\t\tflex-direction: row;\n\n\t\t&__informations {\n\t\t\tjustify-content: flex-start;\n\t\t\theight: 100%;\n\t\t\twidth: 30%;\n\t\t\tborder: none;\n\t\t\t&__header {\n\t\t\t\tmargin: 50px 0 15px;\n\t\t\t\tcolor: royalblue;\n\t\t\t}\n\t\t\t&__panel-first,\n\t\t\t&__panel-second {\n\t\t\t\tmargin: 15px 0;\n\t\t\t\tbackground: none;\n\t\t\t\tcolor: royalblue;\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: inline;\n\t\t\t\t\tmargin: 10px 0;\n\t\t\t\t\twidth: 220px;\n\t\t\t\t\theight: 50px;\n\t\t\t\t\tline-height: 50px;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t\ti {\n\t\t\t\t\ttext-align: left;\n\t\t\t\t\tmargin-right: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__flights {\n\t\t\tposition: relative;\n\t\t\tbackground-color: $secondaryColor;\n\t\t\theight: 100%;\n\t\t\twidth: 80%;\n\n\t\t\t&__flightInfo {\n\t\t\t\tmargin: 30px auto 20px;\n\t\t\t\theight: 170px;\n\t\t\t\tborder: 4px solid royalblue;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbackground: none;\n\n\t\t\t\t:first-child {\n\t\t\t\t\tborder-top-left-radius: 16px;\n\t\t\t\t}\n\t\t\t\t:nth-child(4) {\n\t\t\t\t\tborder-top-right-radius: 16px;\n\t\t\t\t}\n\t\t\t\t:nth-child(-n + 4) {\n\t\t\t\t\tborder-bottom: 2px outset royalblue;\n\t\t\t\t\tbackground-color: royalblue;\n\t\t\t\t\tcolor: $whiteColor;\n\t\t\t\t}\n\t\t\t\t&__paragraph {\n\t\t\t\t\t@include flexCenter;\n\t\t\t\t\tcolor: royalblue;\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__flightErrorInfo {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tmargin: 0 10px;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t}\n\t\t}\n\t}\n\t.footer {\n\t\theight: 80px;\n\t\t&__rights {\n\t\t\tfont-size: 20px;\n\t\t}\n\t\t.footer-links {\n\t\t\tfont-size: 15px;\n\t\t\t&__link {\n\t\t\t\tmargin: 0 64px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.errorAnimation {\n\tanimation: showError 1s;\n\tanimation-fill-mode: forwards;\n}\n\n.errorInfoAnimation {\n\tanimation: showInfoError 2s;\n\tanimation-fill-mode: forwards;\n}\n\n@keyframes discoverIcon {\n\tfrom {\n\t\tfont-size: 0;\n\t}\n\tto {\n\t\tfont-size: 40px;\n\t}\n}\n\n@keyframes showError {\n\tfrom {\n\t\tleft: -100%;\n\t}\n\tto {\n\t\tleft: 0%;\n\t\tmargin: 0 auto;\n\t}\n}\n@keyframes showInfoError {\n\tfrom {\n\t\ttop: -50%;\n\t}\n\tto {\n\t\ttop: 30%;\n\t}\n}\n","@mixin flexCenter() {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n@mixin dispayFlex($jc, $ai) {\n\tdisplay: flex;\n\tjustify-content: $jc;\n\talign-items: $ai;\n}\n\n@mixin posAbsuluteCenter() {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate((-50%, -50%));\n}\n@mixin inputStyle($width, $height, $fontSize) {\n\twidth: $width;\n\theight: $height;\n\ttext-align: center;\n\tfont-size: $fontSize;\n\tfont-style: italic;\n\tborder: none;\n\tborder-radius: 10px;\n\tbackground-color: rgba(254, 247, 247, 0.8);\n}\n\n@mixin resetMarginPadding() {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n@mixin imageCenter($url) {\n\theight: 100%;\n\tbackground-image: url($url);\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n","$primaryColor: rgba(55, 101, 240, 0.497);\n$secondaryColor: rgba(254, 247, 247, 0.451);\n$whiteColor: #fff;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cf90426eec82d249867.jpg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "040ef16c46a1b800ea4e.jpg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b52a9c4330de0410e047.jpg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5d7e042d1c4d23c71f1.jpg";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3ba364f78aa11cd7e84.jpg";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467edf68be4b0f737347.jpg";

/***/ })
/******/ 	]);
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var currentDate = document.querySelector('.navigation__date-hour__date--margin');
var currentTime = document.querySelector('.navigation__date-hour__time--padding');
var loginButton = document.querySelector('#login-button');
var loginPanel = document.querySelector('.navigation__login-panel');
var loginCloseButton = document.querySelector('#login-close-button');
var signInButton = document.querySelector('#sign-in-button');
var login = document.querySelector('#login');
var password = document.querySelector('#password');
var signInErrorInfo = document.querySelector('.navigation__login-panel__error');
var departureCities = document.querySelector('#departureCities');
var arrivalCities = document.querySelector('#arrivalCities');
var adultsPassenegers = document.querySelector('#adultPass');
var childrenPassenegers = document.querySelector('#childrensPass');
var departureDate = new Date().toISOString().split('T')[0];
var inputDepartureDate = document.querySelector('#departureDate');
var inputReturnDate = document.querySelector('#returnDate');
inputDepartureDate.setAttribute('min', departureDate);
var luggageAmount = document.querySelector('#luggage');
var submitButton = document.querySelector('.container__panel__submit-button ');
var errorInfo = document.querySelector('.container__error');
var summaryPage = document.querySelector('.summary');
var summaryFlight = document.querySelector('.summary__flights');
var errorColor = 'red';
var welcomeColor = 'lawngreen';
var errorBorderStyle = "1px solid ".concat(errorColor);
var welcomeBorderStyle = "1px solid ".concat(welcomeColor);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var actualHour = today.getHours();
var actualMin = today.getMinutes();
var actualTemp = 0;
today = dd + '.' + mm + '.' + yyyy;
currentDate.innerHTML = "<i class=\"fa-solid fa-calendar-days\"></i>  ".concat(today);
currentTime.innerHTML = "<i class=\"fa-solid fa-clock\"></i> ".concat(actualHour, ":").concat(actualMin < 10 ? "0".concat(actualMin) : actualMin);
var flightInfo = {
  arrivals: [],
  departures: [],
  durations: [],
  ticketPrices: []
};
var codeObj = {
  code: '',
  code1: ''
};
var selectedOption;
var selectedOption1;
function checkIfEmpty() {
  switch (true) {
    case departureCities.value === '0':
      showComunicate([departureCities], errorInfo, 'errorAnimation', 'Choose departure city!', errorBorderStyle, errorColor);
      break;
    case arrivalCities.value === '0':
      showComunicate([arrivalCities], errorInfo, 'errorAnimation', 'Choose arrival city!', errorBorderStyle, errorColor);
      break;
    case adultsPassenegers.value === '0':
      showComunicate([adultsPassenegers], errorInfo, 'errorAnimation', 'Choose at least one passenger', errorBorderStyle, errorColor);
      break;
    case inputDepartureDate.value === '':
      showComunicate([inputDepartureDate], errorInfo, 'errorAnimation', 'Select departure date', errorBorderStyle, errorColor);
      break;
    case inputReturnDate.value === '':
      showComunicate([inputReturnDate], errorInfo, 'errorAnimation', 'Select return date', errorBorderStyle, errorColor);
      break;
    case luggageAmount.value === '0':
      showComunicate([luggageAmount], errorInfo, 'errorAnimation', 'Please select luggage amount', errorBorderStyle, errorColor);
      break;
  }
}
var checkLogin = function checkLogin() {
  switch (true) {
    case login.value.length === 0:
      login.style.border = 'none';
      password.style.border = 'none';
      showComunicate([login], signInErrorInfo, 'errorInfoAnimation', 'Please enter login', errorBorderStyle, errorColor);
      break;
    case password.value.length === 0:
      login.style.border = 'none';
      password.style.border = 'none';
      showComunicate([password], signInErrorInfo, 'errorInfoAnimation', 'Please enter password', errorBorderStyle, errorColor);
      break;
    case login.value.length !== 0 && password.value.length !== 0:
      showComunicate([login, password], signInErrorInfo, 'errorInfoAnimation', "Welcome back ".concat(login.value, "!"), welcomeBorderStyle, welcomeColor);
  }
};
var showComunicate = function showComunicate(param1, param2, param3, param4, param5, param6) {
  if (param1.length === 1) {
    param1[0].style.border = param5;
  } else if (param1.length > 1) {
    var _iterator = _createForOfIteratorHelper(param1),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var param = _step.value;
        param.style.border = param5;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  param2.style.display = 'block';
  param2.style.color = param6;
  param2.classList.add(param3);
  param2.textContent = param4;
};
var hideError = function hideError(param1, param2, param3, param4) {
  var _iterator2 = _createForOfIteratorHelper(param1),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var param = _step2.value;
      param.style.border = 'none';
      param.style.color = 'none';
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(param2),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var nextParam = _step3.value;
      nextParam.style.display = 'none';
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  param3.classList.remove(param4);
};
fetch('https://raw.githubusercontent.com/Bartroz/ticket-reservation-JavaScript/main/endpoints/inital.json').then(function (res) {
  return res.json();
}).then(function (data) {
  return data.destination;
}).then(function (data) {
  data.forEach(function (el) {
    var option = document.createElement('option');
    option.setAttribute('value', el.value);
    option.setAttribute('data-code', el.code);
    departureCities.append(option);
    option.innerText = el.desc;
    var option2 = document.createElement('option');
    option2.setAttribute('value', el.value);
    option2.setAttribute('data-lat', el.lat);
    option2.setAttribute('data-lon', el.lon);
    option2.setAttribute('data-code', el.code);
    arrivalCities.append(option2);
    option2.innerText = el.desc;
  });
  departureCities.addEventListener('click', function () {
    var selectedValue = departureCities.value;
    var selectedValue2 = arrivalCities.value;
    for (var i = 0; i < arrivalCities.options.length; i++) {
      if (arrivalCities.options[i].value === selectedValue) {
        arrivalCities.options[i].disabled = true;
      } else {
        arrivalCities.options[i].disabled = false;
      }
    }
    for (var _i = 0; _i < departureCities.options.length; _i++) {
      if (departureCities.options[_i].value === selectedValue2) {
        departureCities.options[_i].disabled = true;
      } else {
        departureCities.options[_i].disabled = false;
      }
    }
  });
})["catch"](function (err) {
  return console.log(err);
});
var getCurrentTemperature = function getCurrentTemperature(lat, lon, APIKEY) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(APIKEY, "&units=metric")).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data.main.temp;
  }).then(function (data) {
    return actualTemp = data;
  })["catch"](function (err) {
    return console.log(err);
  });
};
function getflight(_x, _x2, _x3, _x4) {
  return _getflight.apply(this, arguments);
}
function _getflight() {
  _getflight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(adults, departure, destination, departureDate) {
    var url, options, response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://skyscanner44.p.rapidapi.com/search-extended?adults=".concat(adults, "&origin=").concat(departure, "&destination=").concat(destination, "&departureDate=").concat(departureDate, "&currency=EUR&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59");
          options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '4b3ba86928msh83cd6a7d580ee08p1b7cddjsn2c4894141241',
              'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
          };
          _context.prev = 2;
          _context.next = 5;
          return fetch(url, options);
        case 5:
          response = _context.sent;
          _context.next = 8;
          return response.json();
        case 8:
          result = _context.sent;
          getFlightInfo(result);
          console.log(result);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _getflight.apply(this, arguments);
}
var getFlightInfo = function getFlightInfo(param) {
  var timeString;
  console.log(flightInfo);
  for (var i = 0; i <= 2; i++) {
    var _flightInfo$ticketPri;
    var resultsArr = param.itineraries.results[i].legs;
    resultsArr.forEach(function (el) {
      flightInfo.arrivals.push(el.arrival.slice(11, -3));
      flightInfo.departures.push(el.departure.slice(11, -3));
      var hours = Math.floor(el.durationInMinutes / 60);
      var minutes = el.durationInMinutes % 60;
      timeString = hours + " h " + (minutes < 10 ? minutes = "0".concat(minutes, " min") : minutes + ' min');
      flightInfo.durations.push(timeString);
    });
    var flightPrice = param.itineraries.results[i].pricing_options[0].price.amount;
    (_flightInfo$ticketPri = flightInfo.ticketPrices).push.apply(_flightInfo$ticketPri, [flightPrice, flightPrice]);
  }
  getFlightDataToDiv();
};
var createParagraph = function createParagraph(param1, param2) {
  param1.classList.add('summary__flights__flightInfo__paragraph');
  param1.textContent = param2;
};
var getFlightDataToDiv = function getFlightDataToDiv() {
  if (flightInfo.arrivals.length !== 0) {
    for (var i = 0; i <= 2; i++) {
      var summaryFlightDiv = document.createElement('div');
      var p1 = document.createElement('p');
      createParagraph(p1, 'Departure');
      summaryFlightDiv.appendChild(p1);
      var p2 = document.createElement('p');
      createParagraph(p2, 'Arrival');
      summaryFlightDiv.appendChild(p2);
      var p3 = document.createElement('p');
      createParagraph(p3, 'Duration');
      summaryFlightDiv.appendChild(p3);
      var p4 = document.createElement('p');
      createParagraph(p4, 'Price (€)');
      summaryFlightDiv.appendChild(p4);
      for (var arrayName in flightInfo) {
        var p = document.createElement('p');
        p.innerText = flightInfo[arrayName][i];
        p.classList.add('summary__flights__flightInfo__paragraph');
        summaryFlightDiv.appendChild(p);
      }
      summaryFlightDiv.classList.add('summary__flights__flightInfo');
      summaryFlight.appendChild(summaryFlightDiv);
    }
  } else {
    var summaryFlightError = document.createElement('p');
    summaryFlightError.classList.add('summary__flights__flightErrorInfo');
    summaryFlightError.textContent = 'There is no available flights corresponding to your selected options.';
    summaryFlight.appendChild(summaryFlightError);
  }
};
var createInnerHTML = function createInnerHTML(param, param1) {
  param.innerHTML = param1;
};
inputDepartureDate.addEventListener('change', function () {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  inputReturnDate.setAttribute('min', new Date(departureDate).addDays(1).toISOString().split('T')[0]);
  inputReturnDate.valueAsDate = null;
  inputReturnDate.setAttribute('min', new Date(inputDepartureDate.value).addDays(1).toISOString().split('T')[0]);
});
submitButton.addEventListener('click', function () {
  return checkIfEmpty();
});
loginButton.addEventListener('click', function (e) {
  loginPanel.style.display = 'flex';
  e.stopPropagation();
});
login.addEventListener('keyup', function (e) {
  if (e.target.value.length > 0) {
    login.style.border = 'none';
    signInErrorInfo.style.display = 'none';
  }
});
password.addEventListener('keyup', function (e) {
  if (e.target.value.length > 0) {
    password.style.border = 'none';
    signInErrorInfo.style.display = 'none';
  }
});
signInButton.addEventListener('click', checkLogin);
document.addEventListener('click', function (event) {
  if (!loginPanel.contains(event.target)) {
    hideError([login, password], [loginPanel, signInErrorInfo], signInErrorInfo, 'errorInfoAnimation');
  }
});
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && loginPanel.style.display === 'flex') {
    checkLogin();
  }
});
loginCloseButton.addEventListener('click', function () {
  hideError([login, password], [loginPanel, signInErrorInfo], signInErrorInfo, 'errorInfoAnimation');
});
departureCities.addEventListener('change', function () {
  return hideError([departureCities], [errorInfo], errorInfo, 'errorAnimation');
});
arrivalCities.addEventListener('change', function () {
  hideError([arrivalCities], [errorInfo], errorInfo, 'errorAnimation');
  var departureWeather = document.querySelector('.navigation__arrival-weather');
  var selectedOption = departureCities.options[departureCities.selectedIndex];
  var selectedOption1 = arrivalCities.options[arrivalCities.selectedIndex];
  var lon = selectedOption1.getAttribute('data-lon');
  var lat = selectedOption1.getAttribute('data-lat');
  var code = selectedOption.getAttribute('data-code');
  var code1 = selectedOption1.getAttribute('data-code');
  codeObj.code = code;
  codeObj.code1 = code1;
  var apiKey = '979e98cbfff2fda43447f846275c2d9e';
  getCurrentTemperature(lat, lon, apiKey);
  setTimeout(function () {
    departureWeather.innerHTML = "".concat(arrivalCities.value, " ").concat(actualTemp.toFixed(1), "\xB0C");
  }, 150);
});
adultsPassenegers.addEventListener('change', function () {
  return hideError([adultsPassenegers], [errorInfo], errorInfo, 'errorAnimation');
});
inputDepartureDate.addEventListener('change', function () {
  return hideError([inputDepartureDate], [errorInfo], errorInfo, 'errorAnimation');
});
inputReturnDate.addEventListener('change', function () {
  return hideError([inputReturnDate], [errorInfo], errorInfo, 'errorAnimation');
});
luggageAmount.addEventListener('change', function () {
  return hideError([luggageAmount], [errorInfo], errorInfo, 'errorAnimation');
});
submitButton.addEventListener('click', function () {
  if (departureCities.value !== '0' && arrivalCities.value !== '0' && adultsPassenegers.value !== '0' && inputDepartureDate.value !== '' && inputReturnDate.value !== '' && luggageAmount.value !== '0') {
    var container = document.querySelector('.container');
    var summaryDepartureCity = document.querySelector('.summary__informations__panel-first__departure-city');
    var summaryArrivalCity = document.querySelector('.summary__informations__panel-first__arrival-city');
    var summaryDepartureDate = document.querySelector('.summary__informations__panel-first__departure-date');
    var summaryReturnDate = document.querySelector('.summary__informations__panel-second__return-date');
    var summaryPassenger = document.querySelector('.summary__informations__panel-second__passengers');
    var summaryLuggage = document.querySelector('.summary__informations__panel-second__luggage');
    var secondSummaryPanel = document.querySelector('.summary__informations__panel-second');
    getflight(adultsPassenegers.value, codeObj.code, codeObj.code1, inputDepartureDate.value);
    setTimeout(function () {
      summaryPage.style.display = 'flex';
      container.style.display = 'none';
      createInnerHTML(summaryDepartureCity, "<i class=\"fa-sharp fa-solid fa-plane-departure\"></i> ".concat(departureCities.value));
      createInnerHTML(summaryArrivalCity, "<i class=\"fa-solid fa-plane-arrival\"></i> ".concat(arrivalCities.value));
      createInnerHTML(summaryDepartureDate, "<div> <i\n\t\t\t\tclass=\"fa-solid fa-calendar-days\"></i> <i class=\"fa-solid fa-arrow-right\"></i> </div> ".concat(inputDepartureDate.value));
      createInnerHTML(summaryReturnDate, "<div><i\n\t\t\t\tclass=\"fa-solid fa-calendar-days\"></i> <i class=\"fa-solid fa-arrow-left\"></i></div> ".concat(inputReturnDate.value));
      createInnerHTML(summaryPassenger, "<div><i class=\"fa-solid fa-user\"></i> ".concat(adultsPassenegers.value, " </div> ").concat(childrenPassenegers.value === '0' ? '' : "<div> <i class=\"fa-solid fa-child\"></i> ".concat(childrenPassenegers.value, "</div> ")));
      createInnerHTML(summaryLuggage, "<i class=\"fa-solid fa-suitcase\"></i> ".concat(luggageAmount.value));
    }, 500);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
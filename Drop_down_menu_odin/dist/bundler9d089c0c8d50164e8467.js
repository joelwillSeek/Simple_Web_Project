/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/drop_down.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/drop_down.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.drop_down {
  background-color: rgb(60, 60, 184);
  position: fixed;
  width: 100%;
  transition: opacity ease-in-out 300ms;
  opacity: 1;
  z-index: 10;
}

.drop_down ul {
  align-self: center;
  list-style: none;
  margin: 0 0 1rem 0;
  color: white;
  width: 100%;
  height: 100%;
  top: 1rem;
  padding: 1rem;
  text-align: center;
}

.drop_down ul li {
  position: relative;
  margin: 1rem 0;
  padding: 1rem;
}

.drop_down ul li:hover {
  background-color: blueviolet;
}
`, "",{"version":3,"sources":["webpack://./src/css/drop_down.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,eAAe;EACf,WAAW;EACX,qCAAqC;EACrC,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":[".drop_down {\n  background-color: rgb(60, 60, 184);\n  position: fixed;\n  width: 100%;\n  transition: opacity ease-in-out 300ms;\n  opacity: 1;\n  z-index: 10;\n}\n\n.drop_down ul {\n  align-self: center;\n  list-style: none;\n  margin: 0 0 1rem 0;\n  color: white;\n  width: 100%;\n  height: 100%;\n  top: 1rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.drop_down ul li {\n  position: relative;\n  margin: 1rem 0;\n  padding: 1rem;\n}\n\n.drop_down ul li:hover {\n  background-color: blueviolet;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/landing_page.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/landing_page.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
  position: relative;
  min-width: 100%;
}

header .carosuel_container .carousel_for_moving div.img {
  min-width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

header .carosuel_container .carousel_for_moving div.img div.shade p,
header .carosuel_container .carousel_for_moving div.img div.shade ul {
  margin: 2rem;
  color: white;
  font-size: 30px;
  list-style: none;
}

header .carosuel_container .carousel_for_moving div.img div.shade ul li {
  margin-bottom: 2rem;
}

header .carosuel_container .carousel_for_moving div.img div.shade {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.503);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 15;
  align-items: center;
  padding: 1rem 5rem;
}

header .carosuel_container .carousel_for_moving div.img div.shade button {
  background-color: transparent;
  color: white;
  outline: transparent solid 10px;
  border-radius: 20px;
  box-sizing: border-box;
  border: 0;
  transition: all ease-in-out 300ms;
  margin: 1rem;
  position: relative;
}

header .carosuel_container .carousel_for_moving div.img div.shade button:hover {
  outline-color: rgb(178, 0, 170);
  color: rgb(200, 0, 150);
}

header
  .carosuel_container
  .carousel_for_moving
  div.img
  div.shade
  button.landing_button {
  font-size: 60px;
}

header .slider_buttons {
  position: absolute;
  top: 50%;
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  z-index: 1;
  pointer-events: none;
}

header .slider_buttons button {
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  border: 0;
  pointer-events: all;
}

header .slider_buttons button#left_most img {
  border-right: 2px solid transparent;
}

header .slider_buttons button#right_most img {
  border-left: 2px solid transparent;
}

header .slider_buttons button img {
  transition: transform ease-in-out 200ms;
  transition: border ease-in-out 500ms;
  border-radius: 20px;
  padding: 1rem;
}

header .slider_buttons button#right_most:hover img,
header .slider_buttons button#left_most:hover img {
  transform: scale(1.5);
  border-color: red;
}

header .carosuel_container .carousel_for_moving {
  display: flex;
  transition: all ease-in-out 300ms;
}

/* add overflow on .carosuel_container */
header .carosuel_container {
  overflow: hidden;
}

header .horizontal_indicators {
  min-width: 100%;
  display: flex;
  position: absolute;
  bottom: 10px;
}

header .horizontal_indicators hr {
  width: 100%;
  margin: 0.5rem;
  height: 5px;
  background-color: rgb(179, 178, 178);
  outline: none;
  border: 0;
  border-radius: 20px;
}

header .horizontal_indicators hr.selected_bar {
  background-color: #fff;
}
`, "",{"version":3,"sources":["webpack://./src/css/landing_page.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA;;;;;;EAME,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uCAAuC;EACvC,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;AACf;;AAEA;;EAEE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,oCAAoC;EACpC,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["header {\n  position: relative;\n  min-width: 100%;\n}\n\nheader .carosuel_container .carousel_for_moving div.img {\n  min-width: 100%;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\nheader .carosuel_container .carousel_for_moving div.img div.shade p,\nheader .carosuel_container .carousel_for_moving div.img div.shade ul {\n  margin: 2rem;\n  color: white;\n  font-size: 30px;\n  list-style: none;\n}\n\nheader .carosuel_container .carousel_for_moving div.img div.shade ul li {\n  margin-bottom: 2rem;\n}\n\nheader .carosuel_container .carousel_for_moving div.img div.shade {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.503);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 15;\n  align-items: center;\n  padding: 1rem 5rem;\n}\n\nheader .carosuel_container .carousel_for_moving div.img div.shade button {\n  background-color: transparent;\n  color: white;\n  outline: transparent solid 10px;\n  border-radius: 20px;\n  box-sizing: border-box;\n  border: 0;\n  transition: all ease-in-out 300ms;\n  margin: 1rem;\n  position: relative;\n}\n\nheader .carosuel_container .carousel_for_moving div.img div.shade button:hover {\n  outline-color: rgb(178, 0, 170);\n  color: rgb(200, 0, 150);\n}\n\nheader\n  .carosuel_container\n  .carousel_for_moving\n  div.img\n  div.shade\n  button.landing_button {\n  font-size: 60px;\n}\n\nheader .slider_buttons {\n  position: absolute;\n  top: 50%;\n  display: flex;\n  min-width: 100%;\n  justify-content: space-between;\n  z-index: 1;\n  pointer-events: none;\n}\n\nheader .slider_buttons button {\n  background-color: transparent;\n  outline: none;\n  box-sizing: border-box;\n  border: 0;\n  pointer-events: all;\n}\n\nheader .slider_buttons button#left_most img {\n  border-right: 2px solid transparent;\n}\n\nheader .slider_buttons button#right_most img {\n  border-left: 2px solid transparent;\n}\n\nheader .slider_buttons button img {\n  transition: transform ease-in-out 200ms;\n  transition: border ease-in-out 500ms;\n  border-radius: 20px;\n  padding: 1rem;\n}\n\nheader .slider_buttons button#right_most:hover img,\nheader .slider_buttons button#left_most:hover img {\n  transform: scale(1.5);\n  border-color: red;\n}\n\nheader .carosuel_container .carousel_for_moving {\n  display: flex;\n  transition: all ease-in-out 300ms;\n}\n\n/* add overflow on .carosuel_container */\nheader .carosuel_container {\n  overflow: hidden;\n}\n\nheader .horizontal_indicators {\n  min-width: 100%;\n  display: flex;\n  position: absolute;\n  bottom: 10px;\n}\n\nheader .horizontal_indicators hr {\n  width: 100%;\n  margin: 0.5rem;\n  height: 5px;\n  background-color: rgb(179, 178, 178);\n  outline: none;\n  border: 0;\n  border-radius: 20px;\n}\n\nheader .horizontal_indicators hr.selected_bar {\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_drop_down_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./drop_down.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/drop_down.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./landing_page.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/landing_page.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_drop_down_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 0;
  right: 0;

  z-index: 12;
}

button {
  font-size: larger;
  font-weight: bold;
  padding: 1rem;
}

button.shower {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  background-color: transparent;
  border-radius: 20px;
  position: relative;
  transition: all ease-in-out 300ms;
  margin: 1rem;
  right: 0;
  z-index: 20;
}

button.shower svg line {
  stroke: white;
  transition: all ease-in-out 300ms;
}

button.shower:hover {
  border-color: rgb(181, 8, 181);
}

button.shower:hover svg line {
  stroke: rgb(181, 8, 181);
}

/* JS */
.active_for_drop {
  opacity: 0;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAIA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;;EAER,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;EACjC,YAAY;EACZ,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,OAAO;AACP;EACE,UAAU;AACZ","sourcesContent":["@import url(drop_down.css);\n\n@import url(landing_page.css);\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  position: fixed;\n  top: 0;\n  right: 0;\n\n  z-index: 12;\n}\n\nbutton {\n  font-size: larger;\n  font-weight: bold;\n  padding: 1rem;\n}\n\nbutton.shower {\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid white;\n  background-color: transparent;\n  border-radius: 20px;\n  position: relative;\n  transition: all ease-in-out 300ms;\n  margin: 1rem;\n  right: 0;\n  z-index: 20;\n}\n\nbutton.shower svg line {\n  stroke: white;\n  transition: all ease-in-out 300ms;\n}\n\nbutton.shower:hover {\n  border-color: rgb(181, 8, 181);\n}\n\nbutton.shower:hover svg line {\n  stroke: rgb(181, 8, 181);\n}\n\n/* JS */\n.active_for_drop {\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/script/drop_down_functionality.js":
/*!***********************************************!*\
  !*** ./src/script/drop_down_functionality.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hide_or_show_dropdown: () => (/* binding */ hide_or_show_dropdown),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/**
 * The code is hard coded for only fade in and out
 *
 * add opacity:0%; and transform:translateX(2000px) on the element
 *
 * hides the drop down else where
 */

let hidden = true;

let duration_of_fade = 300;

let ul_list;

let initialize = (ul_list_element) => {
  ul_list = ul_list_element;
  ul_list.style.transform = "translateX(2000px) ";
  ul_list.style.opacity = "0%";
};

/**
 *
 * @param {HTMLUListElement} ul_list
 * @param {HTMLButtonElement} button_shower
 */
//after opacity is 0% hide it to the left
let hide_or_show_dropdown = () => {
  let hold_time_out;

  if (!hidden) {
    clearTimeout(hold_time_out);
    ul_list.style.opacity = "0%";

    hold_time_out = setTimeout(() => {
      ul_list.style.transform = "translateX(2000px)";
    }, duration_of_fade);
  } else {
    clearTimeout(hold_time_out);

    ul_list.style.transform = "translateX(0px)";

    hold_time_out = setTimeout(() => {
      ul_list.style.opacity = "100%";
    }, 0);
  }

  hidden = !hidden;
};




/***/ }),

/***/ "./src/script/image_slide_show.js":
/*!****************************************!*\
  !*** ./src/script/image_slide_show.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let counter = 1;
let horizontal_bar_position = 0;
/**
 *
 * @param {HTMLButtonElement} button_left_slide
 * @param {HTMLButtonElement} button_right_slide
 * @param {HTMLDivElement} flex_container
 * @param {HTMLDivElement} image_to_measure_width
 * @param {Number} number_of_images
 * @param {Array<Element>} horizontal_bar_image_order
 */
let carosuel = (
  button_left_slide,
  button_right_slide,
  flex_container,
  image_to_measure_width,
  number_of_images,
  horizontal_bar_image_order,
  stop_slideing
) => {
  let size = image_to_measure_width.clientWidth;

  flex_container.style.transform = "translateX(" + -size * counter + "px)";

  horizontal_bar_image_order[0].classList.add("selected_bar");

  let to_right_sliding_image = () => {
    if (counter >= number_of_images - 1) return;

    if (counter == 1) flex_container.style.transition = "all ease-in-out 300ms";

    counter++;

    flex_container.style.transform = "translateX(" + -size * counter + "px)";

    flex_container.addEventListener("transitionend", () => {
      if (counter >= number_of_images - 1) {
        flex_container.style.transition = "none";

        counter = 1;

        flex_container.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    });

    //horizontal bar mechanics to the right

    horizontal_bar_image_order[horizontal_bar_position].classList.remove(
      "selected_bar"
    );
    if (horizontal_bar_position == 2) {
      horizontal_bar_position = -1;
    }
    horizontal_bar_image_order[++horizontal_bar_position].classList.add(
      "selected_bar"
    );
  };

  if (!stop_slideing) {
    setInterval(() => {
      to_right_sliding_image();
      console.log("hel");
    }, 5000);
  }

  button_right_slide.addEventListener("click", () => {
    to_right_sliding_image();
  });

  button_left_slide.addEventListener("click", () => {
    if (counter <= 0) return;
    if (counter == number_of_images - 2)
      flex_container.style.transition = "all ease-in-out 300ms";

    counter--;

    flex_container.style.transform = "translateX(" + -size * counter + "px)";

    flex_container.addEventListener("transitionend", () => {
      if (counter <= 0) {
        flex_container.style.transition = "none";

        counter = number_of_images - 2;

        flex_container.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    });

    //horizontal bar to left
    horizontal_bar_image_order[horizontal_bar_position].classList.remove(
      "selected_bar"
    );
    if (horizontal_bar_position <= 0) {
      horizontal_bar_position = 3;
    }
    horizontal_bar_image_order[--horizontal_bar_position].classList.add(
      "selected_bar"
    );
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carosuel);


/***/ }),

/***/ "./src/assets/arrow-left.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow-left.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-left.svg";

/***/ }),

/***/ "./src/assets/arrow-right.svg":
/*!************************************!*\
  !*** ./src/assets/arrow-right.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-right.svg";

/***/ }),

/***/ "./src/assets/bg1.jpg":
/*!****************************!*\
  !*** ./src/assets/bg1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg1.jpg";

/***/ }),

/***/ "./src/assets/bg2.jpg":
/*!****************************!*\
  !*** ./src/assets/bg2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg2.jpg";

/***/ }),

/***/ "./src/assets/bg3.jpg":
/*!****************************!*\
  !*** ./src/assets/bg3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg3.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _drop_down_functionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down_functionality */ "./src/script/drop_down_functionality.js");
/* harmony import */ var _assets_bg1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/bg1.jpg */ "./src/assets/bg1.jpg");
/* harmony import */ var _assets_bg2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bg2.jpg */ "./src/assets/bg2.jpg");
/* harmony import */ var _assets_bg3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bg3.jpg */ "./src/assets/bg3.jpg");
/* harmony import */ var _assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/arrow-left.svg */ "./src/assets/arrow-left.svg");
/* harmony import */ var _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/arrow-right.svg */ "./src/assets/arrow-right.svg");
/* harmony import */ var _image_slide_show__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image_slide_show */ "./src/script/image_slide_show.js");











let button_shower = document.querySelector("button.shower");

let div_that_has_images = document.querySelector(
  "header .carosuel_container .carousel_for_moving"
);

/**
 * @type {SVGForeignObjectElement}
 */
let img_menu_icon = document.querySelector("nav button.shower object");

let ul_to_hide_and_show = document.querySelector(".drop_down");

let array_of_img_in_image_slider = document.querySelectorAll(
  "header .carosuel_container .carousel_for_moving div.img"
);

let array_of_img_next_and_previous_for_carousel = document.querySelectorAll(
  "header .slider_buttons button img"
);

let button_left_slider = document.querySelector(
  "header .slider_buttons button#left_most"
);

let button_right_slider = document.querySelector(
  "header .slider_buttons button#right_most"
);

let hr_horizontal_bar_image_order = document.querySelectorAll(
  "header .horizontal_indicators hr"
);

array_of_img_in_image_slider.forEach(
  /**
   *
   * @param {HTMLImageElement} img
   */
  (img, index) => {
    /**
     * @type {Array<String>}
     */
    let img_list = [_assets_bg1_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_bg2_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_bg3_jpg__WEBPACK_IMPORTED_MODULE_4__];

    //make it so that the last img becomes the first and first img becomes the last
    if (img.id == "last_clone") {
      img.style.backgroundImage = "url(" + img_list[img_list.length - 1] + ")";
    } else if (img.id == "first_clone") {
      img.style.backgroundImage = "url(" + img_list[0] + ")";
    } else {
      img.style.backgroundImage = "url(" + img_list[index - 1] + ")";
    }
  }
);

array_of_img_next_and_previous_for_carousel.forEach((img, index) => {
  let list_of_img = [_assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_6__];
  img.src = list_of_img[index];
});

button_shower.addEventListener("click", () => {
  (0,_drop_down_functionality__WEBPACK_IMPORTED_MODULE_1__.hide_or_show_dropdown)();
});

(0,_image_slide_show__WEBPACK_IMPORTED_MODULE_7__["default"])(
  button_left_slider,
  button_right_slider,
  div_that_has_images,
  array_of_img_in_image_slider[1],
  array_of_img_in_image_slider.length,
  hr_horizontal_bar_image_order,
  true
);

(0,_drop_down_functionality__WEBPACK_IMPORTED_MODULE_1__.initialize)(ul_to_hide_and_show);

})();

/******/ })()
;
//# sourceMappingURL=bundler9d089c0c8d50164e8467.js.map
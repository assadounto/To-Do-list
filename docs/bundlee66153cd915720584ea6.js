/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody {\r\n  background-color: #f4f5f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-grow: 2;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\nbutton:active {\r\n  color: black;\r\n  opacity: 1;\r\n}\r\n\r\n.container {\r\n  background-color: #f1f2f5;\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 24px;\r\n}\r\n\r\n.page-footer {\r\n  display: flex;\r\n  margin: auto;\r\n  padding: 24px;\r\n}\r\n\r\n.list-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  background-color: white;\r\n}\r\n\r\n.list-title {\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-form {\r\n  display: flex;\r\n  background-color: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.add-todo-input {\r\n  border: none;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  outline: none;\r\n  box-shadow: none;\r\n  width: 100%;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  font-size: 1rem;\r\n  padding-left: 15px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: white;\r\n}\r\n\r\n.dragging {\r\n  border: 2px solid royalblue;\r\n}\r\n\r\n.todo-completed .toggle .icon {\r\n  color: #2e8ae6;\r\n}\r\n\r\n.edit {\r\n  height: 20px;\r\n  line-height: 20px;\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 300;\r\n  resize: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.todo-completed .edit {\r\n  text-decoration: line-through;\r\n  color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.edit:focus {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.list-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.clear-button {\r\n  margin: 1rem auto;\r\n  font-weight: 300;\r\n}\r\n\r\n.clear-button:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.icon-button {\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  color: #333;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 12px;\r\n}\r\n\r\n.toggle {\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-right: 17px;\r\n  opacity: 1;\r\n  color: #c1c1c3;\r\n}\r\n\r\n.drag-button {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.opacity-2 {\r\n  opacity: 0.2;\r\n}\r\n\r\n.opacity-5 {\r\n  opacity: 0.5;\r\n}\r\n\r\n.opacity-0 {\r\n  opacity: 0;\r\n}\r\n\r\n.color-gray {\r\n  color: #515664;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,oCAAoC;EACpC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,sCAAsC;EACtC,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,4CAA4C;EAC5C,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,4CAA4C;EAC5C,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody {\r\n  background-color: #f4f5f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-grow: 2;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\nbutton:active {\r\n  color: black;\r\n  opacity: 1;\r\n}\r\n\r\n.container {\r\n  background-color: #f1f2f5;\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 24px;\r\n}\r\n\r\n.page-footer {\r\n  display: flex;\r\n  margin: auto;\r\n  padding: 24px;\r\n}\r\n\r\n.list-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  background-color: white;\r\n}\r\n\r\n.list-title {\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-form {\r\n  display: flex;\r\n  background-color: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.add-todo-input {\r\n  border: none;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  outline: none;\r\n  box-shadow: none;\r\n  width: 100%;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  font-size: 1rem;\r\n  padding-left: 15px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: white;\r\n}\r\n\r\n.dragging {\r\n  border: 2px solid royalblue;\r\n}\r\n\r\n.todo-completed .toggle .icon {\r\n  color: #2e8ae6;\r\n}\r\n\r\n.edit {\r\n  height: 20px;\r\n  line-height: 20px;\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 300;\r\n  resize: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.todo-completed .edit {\r\n  text-decoration: line-through;\r\n  color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.edit:focus {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.list-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.clear-button {\r\n  margin: 1rem auto;\r\n  font-weight: 300;\r\n}\r\n\r\n.clear-button:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.icon-button {\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  color: #333;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 12px;\r\n}\r\n\r\n.toggle {\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-right: 17px;\r\n  opacity: 1;\r\n  color: #c1c1c3;\r\n}\r\n\r\n.drag-button {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.opacity-2 {\r\n  opacity: 0.2;\r\n}\r\n\r\n.opacity-5 {\r\n  opacity: 0.5;\r\n}\r\n\r\n.opacity-0 {\r\n  opacity: 0;\r\n}\r\n\r\n.color-gray {\r\n  color: #515664;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addItemsToDOM),
/* harmony export */   "listItemComponent": () => (/* binding */ listItemComponent)
/* harmony export */ });
/* harmony import */ var _todo_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-store.js */ "./src/modules/todo-store.js");


function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons', 'icon');

  node.appendChild(icon);
  return node;
}

function listItemComponent({
  index, description, completed, onToggle, onSwap, onEdit, onDelete,
}) {
  const node = document.createElement('li');
  node.classList.add('todo');

  // Drag and Drop listeners
  node.addEventListener('dragstart', (event) => {
    node.classList.add('dragging');
    setTimeout(() => {
      node.classList.add('opacity-0');
    }, 0);
    event.dataTransfer.setData('index', index);
  });

  node.addEventListener('dragover', (event) => {
    event.preventDefault();
    node.classList.add('opacity-2');
  });

  node.addEventListener('dragleave', () => {
    node.classList.remove('opacity-2');
  });

  node.addEventListener('dragend', () => {
    node.setAttribute('draggable', false);
    node.classList.remove('opacity-0', 'dragging');
  });

  node.addEventListener('drop', (event) => {
    const source = event.dataTransfer.getData('index');
    const destination = index;
    onSwap(source, destination);
  });

  // Todo toggle checkbox
  const checkbox = iconButton(completed ? 'done' : 'check_box_outline_blank');
  checkbox.classList.add('toggle');
  if (completed) {
    node.classList.add('todo-completed');
    checkbox.classList.add('todo-completed');
  }
  checkbox.addEventListener('click', () => {
    onToggle(index);
  });

  // Todo description input
  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');
  text.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEdit(index, event.target.value);
    }
  });

  // Drag handle
  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button', 'opacity-2');
  dragButton.addEventListener('mousedown', () => {
    node.setAttribute('draggable', true);
  });

  // Delete Todo item
  const deleteButton = iconButton('delete_outline');
  deleteButton.classList.add('opacity-5', 'hide', 'delete-btn');
  deleteButton.addEventListener('mousedown', () => {
    onDelete(index);
  });

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(deleteButton);
  node.appendChild(dragButton);

  const toggleButtons = () => {
    dragButton.classList.toggle('hide');
    deleteButton.classList.toggle('hide');
  };

  text.addEventListener('focus', toggleButtons);
  text.addEventListener('blur', (event) => {
    toggleButtons();
    onEdit(index, event.target.value);
  });

  return node;
}

function addItemsToDOM(items = []) {
  const list = document.getElementById('items');
  list.innerHTML = '';
  items.forEach((item) => {
    list.appendChild(listItemComponent({
      ...item,
      onToggle: (index) => _todo_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleTodo(index),
      onSwap: (source, dest) => _todo_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].swapTodos(source, dest),
      onEdit: (index, text) => _todo_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].editTodo(index, text),
      onDelete: (index) => _todo_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(index),
    }));
  });
}

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TODO": () => (/* binding */ ADD_TODO),
/* harmony export */   "CLEAR_COMPLETED": () => (/* binding */ CLEAR_COMPLETED),
/* harmony export */   "DELETE_TODO": () => (/* binding */ DELETE_TODO),
/* harmony export */   "EDIT_TODO": () => (/* binding */ EDIT_TODO),
/* harmony export */   "LOAD_TODOS": () => (/* binding */ LOAD_TODOS),
/* harmony export */   "SWAP_TODOS": () => (/* binding */ SWAP_TODOS),
/* harmony export */   "TOGGLE": () => (/* binding */ TOGGLE),
/* harmony export */   "default": () => (/* binding */ createStore)
/* harmony export */ });
const TOGGLE = 'action/toggle';
const LOAD_TODOS = 'action/load_todos';
const SWAP_TODOS = 'action/swap';
const ADD_TODO = 'action/add_todo';
const EDIT_TODO = 'action/edit_description';
const DELETE_TODO = 'action/delete_todo';
const CLEAR_COMPLETED = 'action/clear_completed';

function createStore() {
  let state = [];
  const subscribers = [];

  const getState = () => state;

  const subscribe = (subscriber) => subscribers.push(subscriber);

  const dispatch = (action) => {
    switch (action.type) {
      case TOGGLE: {
        const todo = state.find((item) => item.index === action.index);
        todo.completed = !todo.completed;
        break;
      }
      case LOAD_TODOS: {
        state = action.items;
        break;
      }
      case SWAP_TODOS: {
        // Get values
        const src = state[action.source];
        const dest = state[action.dest];

        // Swap positions
        state[action.source] = dest;
        state[action.dest] = src;

        // Update indexes
        dest.index = action.source;
        src.index = action.dest;
        break;
      }
      case ADD_TODO: {
        if (action.text.trim()) {
          const todo = {
            index: state.length,
            description: action.text,
            completed: false,
          };
          state.push(todo);
        }
        break;
      }
      case EDIT_TODO: {
        const todo = state[action.index];
        if (todo && action.text.trim()) {
          todo.description = action.text;
        }
        break;
      }
      case DELETE_TODO: {
        state = state.filter((todo) => todo.index !== action.index)
          .map((item, index) => ({ ...item, index }));
        break;
      }
      case CLEAR_COMPLETED: {
        state = state.filter((todo) => !todo.completed).map((item, index) => ({ ...item, index }));
        break;
      }
      default:
        break;
    }

    subscribers.forEach((subscriber) => subscriber());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

/***/ }),

/***/ "./src/modules/todo-store.js":
/*!***********************************!*\
  !*** ./src/modules/todo-store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");


class TodoStore {
  constructor() {
    this.store = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  get todos() {
    return this.store.getState();
  }

  toggleTodo(index) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.TOGGLE,
      index,
    });
  }

  loadTodos(items) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.LOAD_TODOS,
      items,
    });
  }

  swapTodos(source, dest) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.SWAP_TODOS,
      source,
      dest,
    });
  }

  addTodo(text) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,
      text,
    });
  }

  editTodo(index, text) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.EDIT_TODO,
      index,
      text,
    });
  }

  deleteTodo(index) {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.DELETE_TODO,
      index,
    });
  }

  clearCompleted() {
    this.store.dispatch({
      type: _store_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_COMPLETED,
    });
  }

  onUpdate(callback) {
    this.store.subscribe(callback);
  }
}

const Store = TodoStore;

const store = new TodoStore();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components.js */ "./src/modules/components.js");
/* harmony import */ var _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo-store.js */ "./src/modules/todo-store.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");




const form = document.getElementById('add-todo');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = form.elements[0].value;
  _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(description);
  form.elements[0].value = '';
});

window.addEventListener('load', () => {
  document.getElementById('clear-btn').addEventListener('click', () => {
    _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompleted();
  });

  const STORE_KEY = 'localstorage/todos';

  _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].onUpdate(() => {
    (0,_modules_components_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos);
  });
  _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].onUpdate(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(_modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos));
  });
  const saved = localStorage.getItem(STORE_KEY);
  _modules_todo_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadTodos(saved ? JSON.parse(saved) : []);
});
})();

/******/ })()
;
//# sourceMappingURL=bundlee66153cd915720584ea6.js.map
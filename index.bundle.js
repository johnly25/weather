"use strict";
(self["webpackChunkweather"] = self["webpackChunkweather"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Overpass/Overpass-VariableFont_wght.ttf */ "./src/fonts/Overpass/Overpass-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf */ "./src/fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Overpass';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'OverpassItalic';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

body {
    padding: 0;
    margin: 0;
    height: 100vh;
    font-family: 'Overpass';
    color: white;
}

.nav {
    display: grid;
    justify-items: end;
    padding: 2rem 4rem;
}

.container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-repeat: no-repeat;
}

.container-weather {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    padding: 2rem 4rem;
}

input[type=text] {
    width: 250px;
}

.hourly,
.daily {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}

.tabs {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 5rem;
}

.tophalf {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.content {
    display: none;
}

.name {
    font-size: 2rem;
}

.date {
    font-size: 1.5rem;
}

.city img {
    height: 5rem;
}

.status {
    font-size: 1.8rem;
}

.degrees {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    gap: 0;
    font-size: 4rem;
    font-variation-settings: 'wght' 200;
}

.degrees div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.hourly div,
.daily div {
    display: grid;
    justify-items: center;
    align-items: center;
    font-size: 1.5rem;
    gap: 1rem;
}

.details div,
.precipitation div {
    font-size: 1.5rem;

}

.hourly div img {
    height: 4rem;
}

.tab {
    padding: 2rem 0 0 0;
}

.active {
    border-bottom: 2px solid white !important;; 
}

.buttons button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,+DAA8E;IAC9E,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,+DAAqF;AACzF;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,YAAY;IACZ,mDAA0C;IAC1C,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2CAA2C;IAC3C,qBAAqB;IACrB,mBAAmB;IACnB,MAAM;IACN,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;;AAErB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["@font-face {\n    font-family: 'Overpass';\n    src: url('./fonts/Overpass/Overpass-VariableFont_wght.ttf') format('truetype');\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: 'OverpassItalic';\n    src: url('./fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf') format('truetype');\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    font-family: 'Overpass';\n    color: white;\n}\n\n.nav {\n    display: grid;\n    justify-items: end;\n    padding: 2rem 4rem;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    height: 100%;\n    background: url('./assets/background.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.container-weather {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    padding: 2rem 4rem;\n}\n\ninput[type=text] {\n    width: 250px;\n}\n\n.hourly,\n.daily {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n}\n\n.tabs {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding-bottom: 5rem;\n}\n\n.tophalf {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n* {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.content {\n    display: none;\n}\n\n.name {\n    font-size: 2rem;\n}\n\n.date {\n    font-size: 1.5rem;\n}\n\n.city img {\n    height: 5rem;\n}\n\n.status {\n    font-size: 1.8rem;\n}\n\n.degrees {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: min-content min-content;\n    justify-items: center;\n    align-items: center;\n    gap: 0;\n    font-size: 4rem;\n    font-variation-settings: 'wght' 200;\n}\n\n.degrees div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.hourly div,\n.daily div {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    font-size: 1.5rem;\n    gap: 1rem;\n}\n\n.details div,\n.precipitation div {\n    font-size: 1.5rem;\n\n}\n\n.hourly div img {\n    height: 4rem;\n}\n\n.tab {\n    padding: 2rem 0 0 0;\n}\n\n.active {\n    border-bottom: 2px solid white !important;; \n}\n\n.buttons button {\n    background: none;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domHandler = (function () {


    function searchEvent() {
        let search = document.getElementById("search");
        search.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                let promise = getApi(event.target.value);
                getData(promise);
            }
        });
    }

    function setup() {
        let promise = getApi("seattle");
        let data = getData(promise);
        loadData(data);
    }
    async function getData(forecast) {
        let data = await forecast;
        loadData(data);
    }

    function loadData(data) {
        loadCity(data);
        loadDegrees(data);
        loadTabs(data);
        loadContent(data);
        setupTabs();
    }

    function loadCity(data) {
        let city = document.querySelector('.city');
        console.log(city);
        city.textContent = "";
        let name = document.createElement('div');
        let date = document.createElement('div');
        let imgContainer = document.createElement('div');
        let img = document.createElement('img');
        let status = document.createElement('div');

        name.classList.add('name');
        date.classList.add('date');
        imgContainer.classList.add('status-image');
        status.classList.add('status');

        console.log(data);
        name.textContent = data.location.name + ", " + data.location.region;
        date.textContent = data.location.localtime;
        img.src = data.current.condition.icon;
        status.textContent = data.current.condition.text;

        city.append(name, date, img, status);
    }

    function loadDegrees(data) {
        let degrees = document.querySelector('.degrees');
        degrees.textContent = "";
        let current = document.createElement('div');
        let range = document.createElement('div');
        current.textContent = data.current.feelslike_f + "°";
        range.textContent = data.forecast.forecastday[0].day.maxtemp_f + "°" + " / " + data.forecast.forecastday[0].day.mintemp_f + "°";
        degrees.append(current, range);
    }

    function loadTabs(data) {
        let tabs = document.querySelector('.tabs');
        tabs.textContent = "";
        let container = document.createElement('div');
        let buttons = document.createElement('div');
        let hourly = document.createElement('button');
        let daily = document.createElement('button');
        let details = document.createElement('button');
        let percipitation = document.createElement('button');

        container.classList.add("tabs-container");
        buttons.classList.add("buttons");
        hourly.textContent = "Hourly";
        daily.textContent = "Daily";
        details.textContent = "Details";
        percipitation.textContent = "Precipitation";
        hourly.id = "hourly";
        daily.id = "daily";
        details.id = "details";
        percipitation.id = "precipitation";


        buttons.append(hourly, daily, details, percipitation);
        container.append(buttons);
        tabs.append(container);


    }

    function loadContent(data) {
        loadHourly(data);
        loadDaily(data);
        loadDetails(data);
        loadPrecipitation(data);

        //add class to buttons
        //add another div to wrap the content 
        //add the events on click 
        //make active classes 
        //
    }

    function loadHourly(data) {
        let container = document.querySelector(".tabs-container");
        let hourly = document.createElement("div");
        hourly.classList.add("hourly", 'tab');
        // hourly.classList.add("content");

        let time = parseInt(data.location.localtime.split(' ')[1].split(':')[0].trim());
        let i = 0;
        let day = 0;
        while (i < 6) {
            let div = document.createElement('div');
            let timewrapper = document.createElement('div');
            let img = document.createElement('img');
            let degree = document.createElement('div');
            timewrapper.textContent = time;
            img.src = data.forecast.forecastday[day].hour[time].condition.icon;
            degree.textContent = data.forecast.forecastday[day].hour[time].temp_f + "°";
            div.append(timewrapper, img, degree);
            hourly.append(div);
            time++;
            i++;
            if (time == 24) {
                time = 0;
                day = 1;
            }
        }

        container.append(hourly);
    }

    function loadDaily(data) {
        let container = document.querySelector(".tabs-container");
        let daily = document.createElement("div");
        daily.classList.add("daily", 'content', 'tab');

        for (let i = 0; i < 3; i++) {
            let weather = data.forecast.forecastday[i];
            let div = document.createElement("div");
            let day = document.createElement("div");
            let img = document.createElement("img");
            let degrees = document.createElement("div");

            day.textContent = weather.date;
            img.src = weather.day.condition.icon;
            degrees.textContent = weather.day.maxtemp_f + "°/" + weather.day.mintemp_f + "°";


            div.append(day, img, degrees);
            daily.append(div);
        }

        container.append(daily);

    }

    function loadDetails(data) {
        let container = document.querySelector(".tabs-container");
        let details = document.createElement('div');
        details.classList.add('details', 'content', 'tab');

        let windMph = document.createElement('div');
        let windDirection = document.createElement('div');
        let pressure = document.createElement('div');
        let humidity = document.createElement('div');
        let visibility = document.createElement('div');

        windMph.textContent = "Wind MPH: " + data.current.wind_mph;
        windDirection.textContent = "Wind Direction: " + data.current.wind_dir;
        pressure.textContent = "Pressure IN: " + data.current.pressure_in;
        humidity.textContent = "Humidity: " + data.current.humidity;
        visibility.textContent = "Visibility: " + data.current.vis_miles;

        details.append(windMph, windDirection, pressure, humidity, visibility);
        container.append(details);
    }

    function loadPrecipitation(data) {
        let container = document.querySelector(".tabs-container");
        let precipitation = document.createElement('div');
        precipitation.classList.add('precipitation', 'content', 'tab');

        let info = document.createElement("div");
        info.textContent = "Precipitation IN: " + data.current.precip_in;
        precipitation.append(info);
        container.append(precipitation);
    }

    function setupTabs() {
        let buttons = document.querySelectorAll('.buttons button');
        console.log(buttons)
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                showTab(event.target.textContent.toLowerCase());
            });
        });
    }

    function showTab(name) {
        hideActive();
        hideTabs();
        let tab = document.querySelector("." + name);
        let button = document.getElementById(name);
        button.classList.add('active');
        console.log(button);
        tab.classList.remove('content');


    }

    function hideTabs() {
        let tabs = document.querySelectorAll('.tab');
        console.log(tabs);
        tabs.forEach((tab) => {
            tab.classList.add('content');
        });
    }

    function hideActive() {
        let buttons = document.querySelectorAll('.buttons button');
        buttons.forEach((button) => {
            button.classList.remove('active');
        })
    }
    async function getApi(city) {
        const query = 'http://api.weatherapi.com/v1/forecast.json?key=175167add14f41e0abe221313232612&aqi=no&days=3&q=' + city;
        const weather = await fetch(query, { mode: 'cors' });
        const data = await weather.json();
        return data;
    }

    return { searchEvent, setup };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domHandler);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");




(0,_setup__WEBPACK_IMPORTED_MODULE_1__.setup)();
_domHandler__WEBPACK_IMPORTED_MODULE_2__["default"].searchEvent();
_domHandler__WEBPACK_IMPORTED_MODULE_2__["default"].setup();


/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
function setup() {
    let container = document.createElement("div");
    let nav = document.createElement("div");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let containerWeather = document.createElement("div");
    let tophalf = document.createElement("div"); 
    let city = document.createElement("div");
    let degrees = document.createElement("div");
    let tabs = document.createElement("div");

    container.classList.add("container");
    tophalf.classList.add("tophalf");
    nav.classList.add('nav');
    containerWeather.classList.add("container-weather");
    city.classList.add("city");
    degrees.classList.add('degrees');
    tabs.classList.add("tabs");

    input.id = "search";
    input.type = "text";

    tophalf.append(city,degrees);
    container.append(nav, containerWeather)
    nav.append(div);
    div.append(input);
    containerWeather.append(tophalf, tabs);
    document.body.append(container);
}



/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b8ba1053209f333b156.jpg";

/***/ }),

/***/ "./src/fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf":
/*!******************************************************************!*\
  !*** ./src/fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e30b25bc1808e1c4cb70.ttf";

/***/ }),

/***/ "./src/fonts/Overpass/Overpass-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/Overpass/Overpass-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0f60ff011440e03864e.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDalBKO0FBQ1E7QUFDUzs7QUFFdEMsNkNBQUs7QUFDTCxtREFBVTtBQUNWLG1EQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNOVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0dXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3ZlcnBhc3MvT3ZlcnBhc3MtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PdmVycGFzcy9PdmVycGFzcy1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3NJdGFsaWMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzJztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY29udGFpbmVyLXdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLmhvdXJseSxcbi5kYWlseSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xufVxuXG4udGFicyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbn1cblxuLnRvcGhhbGYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG4qIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jaXR5IGltZyB7XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmRlZ3JlZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDA7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgMjAwO1xufVxuXG4uZGVncmVlcyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhvdXJseSBkaXYsXG4uZGFpbHkgZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmRldGFpbHMgZGl2LFxuLnByZWNpcGl0YXRpb24gZGl2IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxufVxuXG4uaG91cmx5IGRpdiBpbWcge1xuICAgIGhlaWdodDogNHJlbTtcbn1cblxuLnRhYiB7XG4gICAgcGFkZGluZzogMnJlbSAwIDAgMDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7OyBcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQThFO0lBQzlFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrREFBcUY7QUFDekY7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osbURBQTBDO0lBQzFDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9PdmVycGFzcy9PdmVycGFzcy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ092ZXJwYXNzSXRhbGljJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvT3ZlcnBhc3MvT3ZlcnBhc3MtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5jb250YWluZXItd2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uaG91cmx5LFxcbi5kYWlseSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxufVxcblxcbi50YWJzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4udG9waGFsZiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuKiB7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2l0eSBpbWcge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5zdGF0dXMge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmRlZ3JlZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyAyMDA7XFxufVxcblxcbi5kZWdyZWVzIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhvdXJseSBkaXYsXFxuLmRhaWx5IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMgZGl2LFxcbi5wcmVjaXBpdGF0aW9uIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbn1cXG5cXG4uaG91cmx5IGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi50YWIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7OyBcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZG9tSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG5cblxuICAgIGZ1bmN0aW9uIHNlYXJjaEV2ZW50KCkge1xuICAgICAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gZ2V0QXBpKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgZ2V0RGF0YShwcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0QXBpKFwic2VhdHRsZVwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBnZXREYXRhKHByb21pc2UpO1xuICAgICAgICBsb2FkRGF0YShkYXRhKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShmb3JlY2FzdCkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGZvcmVjYXN0O1xuICAgICAgICBsb2FkRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIGxvYWRDaXR5KGRhdGEpO1xuICAgICAgICBsb2FkRGVncmVlcyhkYXRhKTtcbiAgICAgICAgbG9hZFRhYnMoZGF0YSk7XG4gICAgICAgIGxvYWRDb250ZW50KGRhdGEpO1xuICAgICAgICBzZXR1cFRhYnMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ2l0eShkYXRhKSB7XG4gICAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICAgICAgY29uc29sZS5sb2coY2l0eSk7XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1pbWFnZScpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWUgKyBcIiwgXCIgKyBkYXRhLmxvY2F0aW9uLnJlZ2lvbjtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICAgICAgICBpbWcuc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgICAgICAgY2l0eS5hcHBlbmQobmFtZSwgZGF0ZSwgaW1nLCBzdGF0dXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWREZWdyZWVzKGRhdGEpIHtcbiAgICAgICAgbGV0IGRlZ3JlZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVncmVlcycpO1xuICAgICAgICBkZWdyZWVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGN1cnJlbnQudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIsKwXCI7XG4gICAgICAgIHJhbmdlLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mICsgXCLCsFwiICsgXCIgLyBcIiArIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZiArIFwiwrBcIjtcbiAgICAgICAgZGVncmVlcy5hcHBlbmQoY3VycmVudCwgcmFuZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUYWJzKGRhdGEpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicycpO1xuICAgICAgICB0YWJzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaG91cmx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBkYWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgcGVyY2lwaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFicy1jb250YWluZXJcIik7XG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgICAgIGhvdXJseS50ZXh0Q29udGVudCA9IFwiSG91cmx5XCI7XG4gICAgICAgIGRhaWx5LnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gICAgICAgIHBlcmNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBcIlByZWNpcGl0YXRpb25cIjtcbiAgICAgICAgaG91cmx5LmlkID0gXCJob3VybHlcIjtcbiAgICAgICAgZGFpbHkuaWQgPSBcImRhaWx5XCI7XG4gICAgICAgIGRldGFpbHMuaWQgPSBcImRldGFpbHNcIjtcbiAgICAgICAgcGVyY2lwaXRhdGlvbi5pZCA9IFwicHJlY2lwaXRhdGlvblwiO1xuXG5cbiAgICAgICAgYnV0dG9ucy5hcHBlbmQoaG91cmx5LCBkYWlseSwgZGV0YWlscywgcGVyY2lwaXRhdGlvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9ucyk7XG4gICAgICAgIHRhYnMuYXBwZW5kKGNvbnRhaW5lcik7XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRDb250ZW50KGRhdGEpIHtcbiAgICAgICAgbG9hZEhvdXJseShkYXRhKTtcbiAgICAgICAgbG9hZERhaWx5KGRhdGEpO1xuICAgICAgICBsb2FkRGV0YWlscyhkYXRhKTtcbiAgICAgICAgbG9hZFByZWNpcGl0YXRpb24oZGF0YSk7XG5cbiAgICAgICAgLy9hZGQgY2xhc3MgdG8gYnV0dG9uc1xuICAgICAgICAvL2FkZCBhbm90aGVyIGRpdiB0byB3cmFwIHRoZSBjb250ZW50IFxuICAgICAgICAvL2FkZCB0aGUgZXZlbnRzIG9uIGNsaWNrIFxuICAgICAgICAvL21ha2UgYWN0aXZlIGNsYXNzZXMgXG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEhvdXJseShkYXRhKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnMtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgaG91cmx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5LmNsYXNzTGlzdC5hZGQoXCJob3VybHlcIiwgJ3RhYicpO1xuICAgICAgICAvLyBob3VybHkuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgbGV0IHRpbWUgPSBwYXJzZUludChkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF0udHJpbSgpKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgZGF5ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCA2KSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGltZXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGxldCBkZWdyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpbWV3cmFwcGVyLnRleHRDb250ZW50ID0gdGltZTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91clt0aW1lXS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgIGRlZ3JlZS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW3RpbWVdLnRlbXBfZiArIFwiwrBcIjtcbiAgICAgICAgICAgIGRpdi5hcHBlbmQodGltZXdyYXBwZXIsIGltZywgZGVncmVlKTtcbiAgICAgICAgICAgIGhvdXJseS5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgIHRpbWUrKztcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmICh0aW1lID09IDI0KSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZGF5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaG91cmx5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkRGFpbHkoZGF0YSkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IGRhaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGFpbHkuY2xhc3NMaXN0LmFkZChcImRhaWx5XCIsICdjb250ZW50JywgJ3RhYicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd2VhdGhlciA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV07XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxldCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBsZXQgZGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgICAgIGRheS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZGF0ZTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB3ZWF0aGVyLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgIGRlZ3JlZXMudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRheS5tYXh0ZW1wX2YgKyBcIsKwL1wiICsgd2VhdGhlci5kYXkubWludGVtcF9mICsgXCLCsFwiO1xuXG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZGF5LCBpbWcsIGRlZ3JlZXMpO1xuICAgICAgICAgICAgZGFpbHkuYXBwZW5kKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRhaWx5KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWREZXRhaWxzKGRhdGEpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFicy1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycsICdjb250ZW50JywgJ3RhYicpO1xuXG4gICAgICAgIGxldCB3aW5kTXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB3aW5kTXBoLnRleHRDb250ZW50ID0gXCJXaW5kIE1QSDogXCIgKyBkYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gICAgICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBcIldpbmQgRGlyZWN0aW9uOiBcIiArIGRhdGEuY3VycmVudC53aW5kX2RpcjtcbiAgICAgICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIlByZXNzdXJlIElOOiBcIiArIGRhdGEuY3VycmVudC5wcmVzc3VyZV9pbjtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OiBcIiArIGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgICAgICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IFwiVmlzaWJpbGl0eTogXCIgKyBkYXRhLmN1cnJlbnQudmlzX21pbGVzO1xuXG4gICAgICAgIGRldGFpbHMuYXBwZW5kKHdpbmRNcGgsIHdpbmREaXJlY3Rpb24sIHByZXNzdXJlLCBodW1pZGl0eSwgdmlzaWJpbGl0eSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGV0YWlscyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByZWNpcGl0YXRpb24oZGF0YSkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJlY2lwaXRhdGlvbi5jbGFzc0xpc3QuYWRkKCdwcmVjaXBpdGF0aW9uJywgJ2NvbnRlbnQnLCAndGFiJyk7XG5cbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gXCJQcmVjaXBpdGF0aW9uIElOOiBcIiArIGRhdGEuY3VycmVudC5wcmVjaXBfaW47XG4gICAgICAgIHByZWNpcGl0YXRpb24uYXBwZW5kKGluZm8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHByZWNpcGl0YXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwVGFicygpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9ucyBidXR0b24nKTtcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9ucylcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dUYWIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dUYWIobmFtZSkge1xuICAgICAgICBoaWRlQWN0aXZlKCk7XG4gICAgICAgIGhpZGVUYWJzKCk7XG4gICAgICAgIGxldCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgbmFtZSk7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudCcpO1xuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlVGFicygpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhYnMpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFjdGl2ZSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9ucyBidXR0b24nKTtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXBpKGNpdHkpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNzUxNjdhZGQxNGY0MWUwYWJlMjIxMzEzMjMyNjEyJmFxaT1ubyZkYXlzPTMmcT0nICsgY2l0eTtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKHF1ZXJ5LCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZWFyY2hFdmVudCwgc2V0dXAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUhhbmRsZXI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge3NldHVwfSBmcm9tICcuL3NldHVwJ1xuaW1wb3J0IGRvbUhhbmRsZXIgZnJvbSBcIi4vZG9tSGFuZGxlclwiO1xuXG5zZXR1cCgpO1xuZG9tSGFuZGxlci5zZWFyY2hFdmVudCgpO1xuZG9tSGFuZGxlci5zZXR1cCgpO1xuIiwiZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBjb250YWluZXJXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdG9waGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgdG9waGFsZi5jbGFzc0xpc3QuYWRkKFwidG9waGFsZlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgY29udGFpbmVyV2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXdlYXRoZXJcIik7XG4gICAgY2l0eS5jbGFzc0xpc3QuYWRkKFwiY2l0eVwiKTtcbiAgICBkZWdyZWVzLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZXMnKTtcbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gICAgaW5wdXQuaWQgPSBcInNlYXJjaFwiO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcblxuICAgIHRvcGhhbGYuYXBwZW5kKGNpdHksZGVncmVlcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChuYXYsIGNvbnRhaW5lcldlYXRoZXIpXG4gICAgbmF2LmFwcGVuZChkaXYpO1xuICAgIGRpdi5hcHBlbmQoaW5wdXQpO1xuICAgIGNvbnRhaW5lcldlYXRoZXIuYXBwZW5kKHRvcGhhbGYsIHRhYnMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IHNldHVwIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
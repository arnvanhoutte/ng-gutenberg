"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _reactNativeSvg.Circle;
  }
});
Object.defineProperty(exports, "G", {
  enumerable: true,
  get: function get() {
    return _reactNativeSvg.G;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _reactNativeSvg.Path;
  }
});
Object.defineProperty(exports, "Polygon", {
  enumerable: true,
  get: function get() {
    return _reactNativeSvg.Polygon;
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _reactNativeSvg.Rect;
  }
});
exports.SVG = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reactNativeSvg = require("react-native-svg");

var _style = _interopRequireDefault(require("./style.scss"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
var SVG = function SVG(props) {
  var stylesFromClasses = (props.className || '').split(' ').map(function (element) {
    return _style.default[element];
  }).filter(Boolean);
  var styleValues = Object.assign.apply(Object, [{}, props.style].concat((0, _toConsumableArray2.default)(stylesFromClasses)));
  var safeProps = (0, _objectSpread2.default)({}, props, {
    style: styleValues
  });
  return (0, _element.createElement)(_reactNativeSvg.Svg //We want to re-render when style color is changed
  , (0, _extends2.default)({
    key: safeProps.style.color,
    height: "100%",
    width: "100%"
  }, safeProps));
};

exports.SVG = SVG;
//# sourceMappingURL=index.native.js.map
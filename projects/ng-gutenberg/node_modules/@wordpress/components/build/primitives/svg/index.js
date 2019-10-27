"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVG = exports.Rect = exports.Polygon = exports.Path = exports.G = exports.Circle = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _element = require("@wordpress/element");

/**
 * WordPress dependencies
 */
var Circle = function Circle(props) {
  return (0, _element.createElement)('circle', props);
};

exports.Circle = Circle;

var G = function G(props) {
  return (0, _element.createElement)('g', props);
};

exports.G = G;

var Path = function Path(props) {
  return (0, _element.createElement)('path', props);
};

exports.Path = Path;

var Polygon = function Polygon(props) {
  return (0, _element.createElement)('polygon', props);
};

exports.Polygon = Polygon;

var Rect = function Rect(props) {
  return (0, _element.createElement)('rect', props);
};

exports.Rect = Rect;

var SVG = function SVG(props) {
  var appliedProps = (0, _objectSpread2.default)({}, props, {
    role: 'img',
    'aria-hidden': 'true',
    focusable: 'false'
  }); // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements

  return (0, _element.createElement)("svg", appliedProps);
};

exports.SVG = SVG;
//# sourceMappingURL=index.js.map
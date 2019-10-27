"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _reactNative = require("react-native");

var _style = _interopRequireDefault(require("./style.scss"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
var ToolbarContainer = function ToolbarContainer(props) {
  return (0, _element.createElement)(_reactNative.View, {
    style: [_style.default.container, props.passedStyle]
  }, props.children);
};

var _default = ToolbarContainer;
exports.default = _default;
//# sourceMappingURL=toolbar-container.native.js.map
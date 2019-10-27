"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KeyboardAvoidingView = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _reactNative = require("react-native");

/**
 * External dependencies
 */
var KeyboardAvoidingView = function KeyboardAvoidingView(_ref) {
  var parentHeight = _ref.parentHeight,
      otherProps = (0, _objectWithoutProperties2.default)(_ref, ["parentHeight"]);

  var _Dimensions$get = _reactNative.Dimensions.get('window'),
      fullHeight = _Dimensions$get.height;

  var keyboardVerticalOffset = fullHeight - parentHeight;
  return (0, _element.createElement)(_reactNative.KeyboardAvoidingView, (0, _extends2.default)({}, otherProps, {
    behavior: "padding",
    keyboardVerticalOffset: keyboardVerticalOffset
  }));
};

exports.KeyboardAvoidingView = KeyboardAvoidingView;
var _default = KeyboardAvoidingView;
exports.default = _default;
//# sourceMappingURL=index.ios.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffAriaProps = exports.pickAriaProps = void 0;

var _lodash = require("lodash");

/**
 * External dependencies
 */
var isAriaPropName = function isAriaPropName(name) {
  return (0, _lodash.startsWith)(name, 'aria-');
};

var pickAriaProps = function pickAriaProps(props) {
  return (0, _lodash.pickBy)(props, function (value, key) {
    return isAriaPropName(key) && !(0, _lodash.isNil)(value);
  });
};

exports.pickAriaProps = pickAriaProps;

var diffAriaProps = function diffAriaProps(props, nextProps) {
  var prevAriaKeys = (0, _lodash.keys)(pickAriaProps(props));
  var nextAriaKeys = (0, _lodash.keys)(pickAriaProps(nextProps));
  var removedKeys = (0, _lodash.difference)(prevAriaKeys, nextAriaKeys);
  var updatedKeys = nextAriaKeys.filter(function (key) {
    return !(0, _lodash.isEqual)(props[key], nextProps[key]);
  });
  return {
    removedKeys: removedKeys,
    updatedKeys: updatedKeys
  };
};

exports.diffAriaProps = diffAriaProps;
//# sourceMappingURL=aria.js.map
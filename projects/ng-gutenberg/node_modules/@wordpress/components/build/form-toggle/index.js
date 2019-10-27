"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _primitives = require("../primitives");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
function FormToggle(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      id = _ref.id,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _lodash.noop : _ref$onChange,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "checked", "id", "onChange"]);
  var wrapperClasses = (0, _classnames.default)('components-form-toggle', className, {
    'is-checked': checked
  });
  return (0, _element.createElement)("span", {
    className: wrapperClasses
  }, (0, _element.createElement)("input", (0, _extends2.default)({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, props)), (0, _element.createElement)("span", {
    className: "components-form-toggle__track"
  }), (0, _element.createElement)("span", {
    className: "components-form-toggle__thumb"
  }), checked ? (0, _element.createElement)(_primitives.SVG, {
    className: "components-form-toggle__on",
    width: "2",
    height: "6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2 6"
  }, (0, _element.createElement)(_primitives.Path, {
    d: "M0 0h2v6H0z"
  })) : (0, _element.createElement)(_primitives.SVG, {
    className: "components-form-toggle__off",
    width: "6",
    height: "6",
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 6"
  }, (0, _element.createElement)(_primitives.Path, {
    d: "M3 1.5c.8 0 1.5.7 1.5 1.5S3.8 4.5 3 4.5 1.5 3.8 1.5 3 2.2 1.5 3 1.5M3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
  })));
}

var _default = FormToggle;
exports.default = _default;
//# sourceMappingURL=index.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconButton = _interopRequireDefault(require("../icon-button"));

var _toolbarButtonContainer = _interopRequireDefault(require("./toolbar-button-container"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
function ToolbarButton(_ref) {
  var containerClassName = _ref.containerClassName,
      icon = _ref.icon,
      title = _ref.title,
      shortcut = _ref.shortcut,
      subscript = _ref.subscript,
      _onClick = _ref.onClick,
      className = _ref.className,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      extraProps = _ref.extraProps,
      children = _ref.children;
  return (0, _element.createElement)(_toolbarButtonContainer.default, {
    className: containerClassName
  }, (0, _element.createElement)(_iconButton.default, (0, _extends2.default)({
    icon: icon,
    label: title,
    shortcut: shortcut,
    "data-subscript": subscript,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    },
    className: (0, _classnames.default)('components-toolbar__control', className, {
      'is-active': isActive
    }),
    "aria-pressed": isActive,
    disabled: isDisabled
  }, extraProps)), children);
}

var _default = ToolbarButton;
exports.default = _default;
//# sourceMappingURL=index.js.map
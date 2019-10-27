"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlockIcon;

var _element = require("@wordpress/element");

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _components = require("@wordpress/components");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function BlockIcon(_ref) {
  var icon = _ref.icon,
      _ref$showColors = _ref.showColors,
      showColors = _ref$showColors === void 0 ? false : _ref$showColors,
      className = _ref.className;

  if ((0, _lodash.get)(icon, ['src']) === 'block-default') {
    icon = {
      src: (0, _element.createElement)(_components.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, (0, _element.createElement)(_components.Path, {
        d: "M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"
      }))
    };
  }

  var renderedIcon = (0, _element.createElement)(_components.Icon, {
    icon: icon && icon.src ? icon.src : icon
  });
  var style = showColors ? {
    backgroundColor: icon && icon.background,
    color: icon && icon.foreground
  } : {};
  return (0, _element.createElement)("span", {
    style: style,
    className: (0, _classnames.default)('editor-block-icon block-editor-block-icon', className, {
      'has-colors': showColors
    })
  }, renderedIcon);
}
//# sourceMappingURL=index.js.map
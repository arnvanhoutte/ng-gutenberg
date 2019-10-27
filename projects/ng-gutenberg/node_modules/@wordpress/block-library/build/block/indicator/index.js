"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

/**
 * WordPress dependencies
 */
function ReusableBlockIndicator(_ref) {
  var title = _ref.title;
  // translators: %s: title/name of the reusable block
  var tooltipText = (0, _i18n.sprintf)((0, _i18n.__)('Reusable Block: %s'), title);
  return (0, _element.createElement)(_components.Tooltip, {
    text: tooltipText
  }, (0, _element.createElement)("span", {
    className: "reusable-block-indicator"
  }, (0, _element.createElement)(_components.Dashicon, {
    icon: "controls-repeat"
  })));
}

var _default = ReusableBlockIndicator;
exports.default = _default;
//# sourceMappingURL=index.js.map
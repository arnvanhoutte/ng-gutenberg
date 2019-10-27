"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _navigableToolbar = _interopRequireDefault(require("../navigable-toolbar"));

var _ = require("../");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function BlockContextualToolbar(_ref) {
  var focusOnMount = _ref.focusOnMount;
  return (0, _element.createElement)(_navigableToolbar.default, {
    focusOnMount: focusOnMount,
    className: "editor-block-contextual-toolbar block-editor-block-contextual-toolbar"
    /* translators: accessibility text for the block toolbar */
    ,
    "aria-label": (0, _i18n.__)('Block tools')
  }, (0, _element.createElement)(_.BlockToolbar, null));
}

var _default = BlockContextualToolbar;
exports.default = _default;
//# sourceMappingURL=block-contextual-toolbar.js.map
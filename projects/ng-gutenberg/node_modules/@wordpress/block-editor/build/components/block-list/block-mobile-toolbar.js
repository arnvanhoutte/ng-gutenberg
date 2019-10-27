"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _viewport = require("@wordpress/viewport");

var _blockMover = _interopRequireDefault(require("../block-mover"));

var _inserter = _interopRequireDefault(require("../inserter"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function BlockMobileToolbar(_ref) {
  var clientId = _ref.clientId;
  return (0, _element.createElement)("div", {
    className: "editor-block-list__block-mobile-toolbar block-editor-block-list__block-mobile-toolbar"
  }, (0, _element.createElement)(_inserter.default, null), (0, _element.createElement)(_blockMover.default, {
    clientIds: [clientId]
  }));
}

var _default = (0, _viewport.ifViewportMatches)('< small')(BlockMobileToolbar);

exports.default = _default;
//# sourceMappingURL=block-mobile-toolbar.js.map
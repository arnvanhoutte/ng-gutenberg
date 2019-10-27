"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _components = require("@wordpress/components");

var _context = require("../block-edit/context");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var _createSlotFill = (0, _components.createSlotFill)('BlockControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var BlockControlsFill = function BlockControlsFill(_ref) {
  var controls = _ref.controls,
      children = _ref.children;
  return (0, _element.createElement)(Fill, null, (0, _element.createElement)(_components.Toolbar, {
    controls: controls
  }), children);
};

var BlockControls = (0, _context.ifBlockEditSelected)(BlockControlsFill);
BlockControls.Slot = Slot;
var _default = BlockControls;
exports.default = _default;
//# sourceMappingURL=index.js.map
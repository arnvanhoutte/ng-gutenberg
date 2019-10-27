"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = require("@wordpress/components");

var _context = require("../block-edit/context");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var _createSlotFill = (0, _components.createSlotFill)('InspectorAdvancedControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var InspectorAdvancedControls = (0, _context.ifBlockEditSelected)(Fill);
InspectorAdvancedControls.Slot = Slot;
var _default = InspectorAdvancedControls;
exports.default = _default;
//# sourceMappingURL=index.js.map
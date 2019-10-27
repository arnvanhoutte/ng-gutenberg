"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSlotFill = createSlotFill;
Object.defineProperty(exports, "Slot", {
  enumerable: true,
  get: function get() {
    return _slot.default;
  }
});
Object.defineProperty(exports, "Fill", {
  enumerable: true,
  get: function get() {
    return _fill.default;
  }
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
Object.defineProperty(exports, "Consumer", {
  enumerable: true,
  get: function get() {
    return _context.Consumer;
  }
});

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slot = _interopRequireDefault(require("./slot"));

var _fill = _interopRequireDefault(require("./fill"));

var _context = _interopRequireWildcard(require("./context"));

/**
 * Internal dependencies
 */
function createSlotFill(name) {
  var FillComponent = function FillComponent(props) {
    return (0, _element.createElement)(_fill.default, (0, _extends2.default)({
      name: name
    }, props));
  };

  FillComponent.displayName = name + 'Fill';

  var SlotComponent = function SlotComponent(props) {
    return (0, _element.createElement)(_slot.default, (0, _extends2.default)({
      name: name
    }, props));
  };

  SlotComponent.displayName = name + 'Slot';
  return {
    Fill: FillComponent,
    Slot: SlotComponent
  };
}
//# sourceMappingURL=index.js.map
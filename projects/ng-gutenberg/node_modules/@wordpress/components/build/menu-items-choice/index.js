"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItemsChoice;

var _element = require("@wordpress/element");

var _menuItem = _interopRequireDefault(require("../menu-item"));

/**
 * Internal dependencies
 */
function MenuItemsChoice(_ref) {
  var _ref$choices = _ref.choices,
      choices = _ref$choices === void 0 ? [] : _ref$choices,
      onSelect = _ref.onSelect,
      value = _ref.value;
  return choices.map(function (item) {
    var isSelected = value === item.value;
    return (0, _element.createElement)(_menuItem.default, {
      key: item.value,
      role: "menuitemradio",
      icon: isSelected && 'yes',
      isSelected: isSelected,
      shortcut: item.shortcut,
      onClick: function onClick() {
        if (!isSelected) {
          onSelect(item.value);
        }
      }
    }, item.label);
  });
}
//# sourceMappingURL=index.js.map
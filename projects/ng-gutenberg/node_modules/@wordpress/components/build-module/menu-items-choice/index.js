import { createElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import MenuItem from '../menu-item';
export default function MenuItemsChoice(_ref) {
  var _ref$choices = _ref.choices,
      choices = _ref$choices === void 0 ? [] : _ref$choices,
      onSelect = _ref.onSelect,
      value = _ref.value;
  return choices.map(function (item) {
    var isSelected = value === item.value;
    return createElement(MenuItem, {
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
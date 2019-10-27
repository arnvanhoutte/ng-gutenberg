"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _panel = _interopRequireDefault(require("./panel"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function TableOfContents(_ref) {
  var hasBlocks = _ref.hasBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  return (0, _element.createElement)(_components.Dropdown, {
    position: "bottom",
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return (0, _element.createElement)(_components.IconButton, {
        onClick: hasBlocks ? onToggle : undefined,
        icon: "info-outline",
        "aria-expanded": isOpen,
        label: (0, _i18n.__)('Content structure'),
        labelPosition: "bottom",
        "aria-disabled": !hasBlocks
      });
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return (0, _element.createElement)(_panel.default, {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

var _default = (0, _data.withSelect)(function (select) {
  return {
    hasBlocks: !!select('core/block-editor').getBlockCount()
  };
})(TableOfContents);

exports.default = _default;
//# sourceMappingURL=index.js.map
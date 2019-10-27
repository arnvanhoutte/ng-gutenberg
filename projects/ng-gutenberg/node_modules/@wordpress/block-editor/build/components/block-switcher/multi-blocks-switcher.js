"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiBlocksSwitcher = MultiBlocksSwitcher;
exports.default = void 0;

var _element = require("@wordpress/element");

var _data = require("@wordpress/data");

var _ = _interopRequireDefault(require("./"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function MultiBlocksSwitcher(_ref) {
  var isMultiBlockSelection = _ref.isMultiBlockSelection,
      selectedBlockClientIds = _ref.selectedBlockClientIds;

  if (!isMultiBlockSelection) {
    return null;
  }

  return (0, _element.createElement)(_.default, {
    key: "switcher",
    clientIds: selectedBlockClientIds
  });
}

var _default = (0, _data.withSelect)(function (select) {
  var selectedBlockClientIds = select('core/block-editor').getMultiSelectedBlockClientIds();
  return {
    isMultiBlockSelection: selectedBlockClientIds.length > 1,
    selectedBlockClientIds: selectedBlockClientIds
  };
})(MultiBlocksSwitcher);

exports.default = _default;
//# sourceMappingURL=multi-blocks-switcher.js.map
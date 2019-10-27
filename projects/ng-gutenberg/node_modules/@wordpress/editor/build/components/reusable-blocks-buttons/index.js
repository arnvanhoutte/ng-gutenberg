"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _blockEditor = require("@wordpress/block-editor");

var _data = require("@wordpress/data");

var _reusableBlockConvertButton = _interopRequireDefault(require("./reusable-block-convert-button"));

var _reusableBlockDeleteButton = _interopRequireDefault(require("./reusable-block-delete-button"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function ReusableBlocksButtons(_ref) {
  var clientIds = _ref.clientIds;
  return (0, _element.createElement)(_blockEditor.__experimentalBlockSettingsMenuPluginsExtension, null, function (_ref2) {
    var onClose = _ref2.onClose;
    return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_reusableBlockConvertButton.default, {
      clientIds: clientIds,
      onToggle: onClose
    }), clientIds.length === 1 && (0, _element.createElement)(_reusableBlockDeleteButton.default, {
      clientId: clientIds[0],
      onToggle: onClose
    }));
  });
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ReusableBlocksButtons);

exports.default = _default;
//# sourceMappingURL=index.js.map
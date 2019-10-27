"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _blocks = require("@wordpress/blocks");

var _dom = require("@wordpress/dom");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */
function CopyHandler(_ref) {
  var children = _ref.children,
      onCopy = _ref.onCopy,
      onCut = _ref.onCut;
  return (0, _element.createElement)("div", {
    onCopy: onCopy,
    onCut: onCut
  }, children);
}

var _default = (0, _compose.compose)([(0, _data.withDispatch)(function (dispatch, ownProps, _ref2) {
  var select = _ref2.select;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds,
      hasMultiSelection = _select.hasMultiSelection;

  var _dispatch = dispatch('core/block-editor'),
      removeBlocks = _dispatch.removeBlocks;

  var onCopy = function onCopy(event) {
    var selectedBlockClientIds = getSelectedBlockClientIds();

    if (selectedBlockClientIds.length === 0) {
      return;
    } // Let native copy behaviour take over in input fields.


    if (!hasMultiSelection() && (0, _dom.documentHasSelection)()) {
      return;
    }

    var serialized = (0, _blocks.serialize)(getBlocksByClientId(selectedBlockClientIds));
    event.clipboardData.setData('text/plain', serialized);
    event.clipboardData.setData('text/html', serialized);
    event.preventDefault();
  };

  return {
    onCopy: onCopy,
    onCut: function onCut(event) {
      onCopy(event);

      if (hasMultiSelection()) {
        var selectedBlockClientIds = getSelectedBlockClientIds();
        removeBlocks(selectedBlockClientIds);
      }
    }
  };
})])(CopyHandler);

exports.default = _default;
//# sourceMappingURL=index.js.map
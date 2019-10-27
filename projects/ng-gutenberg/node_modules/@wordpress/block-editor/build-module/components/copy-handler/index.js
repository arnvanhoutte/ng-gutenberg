import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { serialize } from '@wordpress/blocks';
import { documentHasSelection } from '@wordpress/dom';
import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

function CopyHandler(_ref) {
  var children = _ref.children,
      onCopy = _ref.onCopy,
      onCut = _ref.onCut;
  return createElement("div", {
    onCopy: onCopy,
    onCut: onCut
  }, children);
}

export default compose([withDispatch(function (dispatch, ownProps, _ref2) {
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


    if (!hasMultiSelection() && documentHasSelection()) {
      return;
    }

    var serialized = serialize(getBlocksByClientId(selectedBlockClientIds));
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
//# sourceMappingURL=index.js.map
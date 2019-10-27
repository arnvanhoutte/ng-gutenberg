import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Draggable } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

var BlockDraggable = function BlockDraggable(_ref) {
  var children = _ref.children,
      clientId = _ref.clientId,
      rootClientId = _ref.rootClientId,
      blockElementId = _ref.blockElementId,
      index = _ref.index,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd;
  var transferData = {
    type: 'block',
    srcIndex: index,
    srcRootClientId: rootClientId,
    srcClientId: clientId
  };
  return createElement(Draggable, {
    elementId: blockElementId,
    transferData: transferData,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  }, function (_ref2) {
    var onDraggableStart = _ref2.onDraggableStart,
        onDraggableEnd = _ref2.onDraggableEnd;
    return children({
      onDraggableStart: onDraggableStart,
      onDraggableEnd: onDraggableEnd
    });
  });
};

export default withSelect(function (select, _ref3) {
  var clientId = _ref3.clientId;

  var _select = select('core/block-editor'),
      getBlockIndex = _select.getBlockIndex,
      getBlockRootClientId = _select.getBlockRootClientId;

  var rootClientId = getBlockRootClientId(clientId);
  return {
    index: getBlockIndex(clientId, rootClientId),
    rootClientId: rootClientId
  };
})(BlockDraggable);
//# sourceMappingURL=index.js.map
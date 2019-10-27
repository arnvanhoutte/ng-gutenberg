import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * Internal dependencies
 */

import BlockDraggable from '../block-draggable';
export var IconDragHandle = function IconDragHandle(_ref) {
  var isVisible = _ref.isVisible,
      className = _ref.className,
      icon = _ref.icon,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      blockElementId = _ref.blockElementId,
      clientId = _ref.clientId;

  if (!isVisible) {
    return null;
  }

  var dragHandleClassNames = classnames('editor-block-mover__control-drag-handle block-editor-block-mover__control-drag-handle', className);
  return createElement(BlockDraggable, {
    clientId: clientId,
    blockElementId: blockElementId,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  }, function (_ref2) {
    var onDraggableStart = _ref2.onDraggableStart,
        onDraggableEnd = _ref2.onDraggableEnd;
    return createElement("div", {
      className: dragHandleClassNames,
      "aria-hidden": "true",
      onDragStart: onDraggableStart,
      onDragEnd: onDraggableEnd,
      draggable: true
    }, icon);
  });
};
//# sourceMappingURL=drag-handle.js.map
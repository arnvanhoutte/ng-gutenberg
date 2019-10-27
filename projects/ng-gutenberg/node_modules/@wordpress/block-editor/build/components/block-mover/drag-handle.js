"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconDragHandle = void 0;

var _element = require("@wordpress/element");

var _classnames = _interopRequireDefault(require("classnames"));

var _blockDraggable = _interopRequireDefault(require("../block-draggable"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
var IconDragHandle = function IconDragHandle(_ref) {
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

  var dragHandleClassNames = (0, _classnames.default)('editor-block-mover__control-drag-handle block-editor-block-mover__control-drag-handle', className);
  return (0, _element.createElement)(_blockDraggable.default, {
    clientId: clientId,
    blockElementId: blockElementId,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  }, function (_ref2) {
    var onDraggableStart = _ref2.onDraggableStart,
        onDraggableEnd = _ref2.onDraggableEnd;
    return (0, _element.createElement)("div", {
      className: dragHandleClassNames,
      "aria-hidden": "true",
      onDragStart: onDraggableStart,
      onDragEnd: onDraggableEnd,
      draggable: true
    }, icon);
  });
};

exports.IconDragHandle = IconDragHandle;
//# sourceMappingURL=drag-handle.js.map
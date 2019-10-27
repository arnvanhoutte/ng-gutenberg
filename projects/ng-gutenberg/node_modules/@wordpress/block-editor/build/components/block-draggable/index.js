"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
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
  return (0, _element.createElement)(_components.Draggable, {
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

var _default = (0, _data.withSelect)(function (select, _ref3) {
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

exports.default = _default;
//# sourceMappingURL=index.js.map
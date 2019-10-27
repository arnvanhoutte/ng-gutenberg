"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reusableBlocks = require("./effects/reusable-blocks");

/**
 * Internal dependencies
 */
var _default = {
  FETCH_REUSABLE_BLOCKS: function FETCH_REUSABLE_BLOCKS(action, store) {
    (0, _reusableBlocks.fetchReusableBlocks)(action, store);
  },
  SAVE_REUSABLE_BLOCK: function SAVE_REUSABLE_BLOCK(action, store) {
    (0, _reusableBlocks.saveReusableBlocks)(action, store);
  },
  DELETE_REUSABLE_BLOCK: function DELETE_REUSABLE_BLOCK(action, store) {
    (0, _reusableBlocks.deleteReusableBlocks)(action, store);
  },
  CONVERT_BLOCK_TO_STATIC: _reusableBlocks.convertBlockToStatic,
  CONVERT_BLOCK_TO_REUSABLE: _reusableBlocks.convertBlockToReusable
};
exports.default = _default;
//# sourceMappingURL=effects.js.map
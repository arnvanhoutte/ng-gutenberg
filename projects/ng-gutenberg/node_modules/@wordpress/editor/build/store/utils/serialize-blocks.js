"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _memize = _interopRequireDefault(require("memize"));

var _blocks = require("@wordpress/blocks");

var _autop = require("@wordpress/autop");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Serializes blocks following backwards compatibility conventions.
 *
 * @param {Array} blocksForSerialization The blocks to serialize.
 *
 * @return {string} The blocks serialization.
 */
var serializeBlocks = (0, _memize.default)(function (blocksForSerialization) {
  // A single unmodified default block is assumed to
  // be equivalent to an empty post.
  if (blocksForSerialization.length === 1 && (0, _blocks.isUnmodifiedDefaultBlock)(blocksForSerialization[0])) {
    blocksForSerialization = [];
  }

  var content = (0, _blocks.serialize)(blocksForSerialization); // For compatibility, treat a post consisting of a
  // single freeform block as legacy content and apply
  // pre-block-editor removep'd content formatting.

  if (blocksForSerialization.length === 1 && blocksForSerialization[0].name === (0, _blocks.getFreeformContentHandlerName)()) {
    content = (0, _autop.removep)(content);
  }

  return content;
}, {
  maxSize: 1
});
var _default = serializeBlocks;
exports.default = _default;
//# sourceMappingURL=serialize-blocks.js.map
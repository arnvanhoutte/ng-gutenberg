"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockTitle = BlockTitle;
exports.default = void 0;

var _data = require("@wordpress/data");

var _blocks = require("@wordpress/blocks");

/**
 * WordPress dependencies
 */

/**
 * Renders the block's configured title as a string, or empty if the title
 * cannot be determined.
 *
 * @example
 *
 * ```jsx
 * <BlockTitle clientId="afd1cb17-2c08-4e7a-91be-007ba7ddc3a1" />
 * ```
 *
 * @param {Object}  props
 * @param {?string} props.name Block name.
 *
 * @return {?string} Block title.
 */
function BlockTitle(_ref) {
  var name = _ref.name;

  if (!name) {
    return null;
  }

  var blockType = (0, _blocks.getBlockType)(name);

  if (!blockType) {
    return null;
  }

  return blockType.title;
}

var _default = (0, _data.withSelect)(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlockName = _select.getBlockName;

  var clientId = ownProps.clientId;
  return {
    name: getBlockName(clientId)
  };
})(BlockTitle);

exports.default = _default;
//# sourceMappingURL=index.js.map
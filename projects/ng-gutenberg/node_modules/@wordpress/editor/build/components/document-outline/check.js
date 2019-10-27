"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function DocumentOutlineCheck(_ref) {
  var blocks = _ref.blocks,
      children = _ref.children;
  var headings = (0, _lodash.filter)(blocks, function (block) {
    return block.name === 'core/heading';
  });

  if (headings.length < 1) {
    return null;
  }

  return children;
}

var _default = (0, _data.withSelect)(function (select) {
  return {
    blocks: select('core/block-editor').getBlocks()
  };
})(DocumentOutlineCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
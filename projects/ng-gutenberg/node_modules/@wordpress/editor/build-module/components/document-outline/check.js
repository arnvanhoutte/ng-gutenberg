/**
 * External dependencies
 */
import { filter } from 'lodash';
/**
 * WordPress dependencies
 */

import { withSelect } from '@wordpress/data';

function DocumentOutlineCheck(_ref) {
  var blocks = _ref.blocks,
      children = _ref.children;
  var headings = filter(blocks, function (block) {
    return block.name === 'core/heading';
  });

  if (headings.length < 1) {
    return null;
  }

  return children;
}

export default withSelect(function (select) {
  return {
    blocks: select('core/block-editor').getBlocks()
  };
})(DocumentOutlineCheck);
//# sourceMappingURL=check.js.map
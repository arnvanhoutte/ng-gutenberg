import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import BlockSwitcher from './';
export function MultiBlocksSwitcher(_ref) {
  var isMultiBlockSelection = _ref.isMultiBlockSelection,
      selectedBlockClientIds = _ref.selectedBlockClientIds;

  if (!isMultiBlockSelection) {
    return null;
  }

  return createElement(BlockSwitcher, {
    key: "switcher",
    clientIds: selectedBlockClientIds
  });
}
export default withSelect(function (select) {
  var selectedBlockClientIds = select('core/block-editor').getMultiSelectedBlockClientIds();
  return {
    isMultiBlockSelection: selectedBlockClientIds.length > 1,
    selectedBlockClientIds: selectedBlockClientIds
  };
})(MultiBlocksSwitcher);
//# sourceMappingURL=multi-blocks-switcher.js.map
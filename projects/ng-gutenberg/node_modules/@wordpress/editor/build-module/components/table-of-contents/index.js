import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dropdown, IconButton } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import TableOfContentsPanel from './panel';

function TableOfContents(_ref) {
  var hasBlocks = _ref.hasBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  return createElement(Dropdown, {
    position: "bottom",
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return createElement(IconButton, {
        onClick: hasBlocks ? onToggle : undefined,
        icon: "info-outline",
        "aria-expanded": isOpen,
        label: __('Content structure'),
        labelPosition: "bottom",
        "aria-disabled": !hasBlocks
      });
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return createElement(TableOfContentsPanel, {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

export default withSelect(function (select) {
  return {
    hasBlocks: !!select('core/block-editor').getBlockCount()
  };
})(TableOfContents);
//# sourceMappingURL=index.js.map
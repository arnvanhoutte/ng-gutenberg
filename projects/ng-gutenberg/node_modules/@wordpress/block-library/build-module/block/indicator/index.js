import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Tooltip, Dashicon } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

function ReusableBlockIndicator(_ref) {
  var title = _ref.title;
  // translators: %s: title/name of the reusable block
  var tooltipText = sprintf(__('Reusable Block: %s'), title);
  return createElement(Tooltip, {
    text: tooltipText
  }, createElement("span", {
    className: "reusable-block-indicator"
  }, createElement(Dashicon, {
    icon: "controls-repeat"
  })));
}

export default ReusableBlockIndicator;
//# sourceMappingURL=index.js.map
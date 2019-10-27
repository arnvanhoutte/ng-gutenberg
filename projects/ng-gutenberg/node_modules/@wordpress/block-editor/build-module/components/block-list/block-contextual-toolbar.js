import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import NavigableToolbar from '../navigable-toolbar';
import { BlockToolbar } from '../';

function BlockContextualToolbar(_ref) {
  var focusOnMount = _ref.focusOnMount;
  return createElement(NavigableToolbar, {
    focusOnMount: focusOnMount,
    className: "editor-block-contextual-toolbar block-editor-block-contextual-toolbar"
    /* translators: accessibility text for the block toolbar */
    ,
    "aria-label": __('Block tools')
  }, createElement(BlockToolbar, null));
}

export default BlockContextualToolbar;
//# sourceMappingURL=block-contextual-toolbar.js.map
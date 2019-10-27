import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { ifViewportMatches } from '@wordpress/viewport';
/**
 * Internal dependencies
 */

import BlockMover from '../block-mover';
import VisualEditorInserter from '../inserter';

function BlockMobileToolbar(_ref) {
  var clientId = _ref.clientId;
  return createElement("div", {
    className: "editor-block-list__block-mobile-toolbar block-editor-block-list__block-mobile-toolbar"
  }, createElement(VisualEditorInserter, null), createElement(BlockMover, {
    clientIds: [clientId]
  }));
}

export default ifViewportMatches('< small')(BlockMobileToolbar);
//# sourceMappingURL=block-mobile-toolbar.js.map
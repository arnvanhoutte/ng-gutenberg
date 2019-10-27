import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import PostTypeSupportCheck from '../post-type-support-check';
export function PostLastRevisionCheck(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount,
      children = _ref.children;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return createElement(PostTypeSupportCheck, {
    supportKeys: "revisions"
  }, children);
}
export default withSelect(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck);
//# sourceMappingURL=check.js.map
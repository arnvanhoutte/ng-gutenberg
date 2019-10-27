/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
export function PostPendingStatusCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isPublished = _ref.isPublished,
      children = _ref.children;

  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
export default compose(withSelect(function (select) {
  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPost = _select.getCurrentPost;

  return {
    hasPublishAction: get(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck);
//# sourceMappingURL=check.js.map
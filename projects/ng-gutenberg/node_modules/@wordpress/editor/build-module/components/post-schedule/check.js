/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
export function PostScheduleCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      children = _ref.children;

  if (!hasPublishAction) {
    return null;
  }

  return children;
}
export default compose([withSelect(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: get(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck);
//# sourceMappingURL=check.js.map
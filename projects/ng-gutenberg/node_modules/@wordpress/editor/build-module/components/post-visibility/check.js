/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
export function PostVisibilityCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      render = _ref.render;
  var canEdit = hasPublishAction;
  return render({
    canEdit: canEdit
  });
}
export default compose([withSelect(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: get(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck);
//# sourceMappingURL=check.js.map
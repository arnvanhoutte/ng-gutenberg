import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { withInstanceId, compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import PostTypeSupportCheck from '../post-type-support-check';
export function PostAuthorCheck(_ref) {
  var hasAssignAuthorAction = _ref.hasAssignAuthorAction,
      authors = _ref.authors,
      children = _ref.children;

  if (!hasAssignAuthorAction || authors.length < 2) {
    return null;
  }

  return createElement(PostTypeSupportCheck, {
    supportKeys: "author"
  }, children);
}
export default compose([withSelect(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: get(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), withInstanceId])(PostAuthorCheck);
//# sourceMappingURL=check.js.map
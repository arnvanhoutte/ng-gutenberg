/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';

function PostTrashCheck(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      children = _ref.children;

  if (isNew || !postId) {
    return null;
  }

  return children;
}

export default withSelect(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId()
  };
})(PostTrashCheck);
//# sourceMappingURL=check.js.map
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

function PostComments(_ref) {
  var _ref$commentStatus = _ref.commentStatus,
      commentStatus = _ref$commentStatus === void 0 ? 'open' : _ref$commentStatus,
      props = _objectWithoutProperties(_ref, ["commentStatus"]);

  var onToggleComments = function onToggleComments() {
    return props.editPost({
      comment_status: commentStatus === 'open' ? 'closed' : 'open'
    });
  };

  return createElement(CheckboxControl, {
    label: __('Allow Comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

export default compose([withSelect(function (select) {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), withDispatch(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostComments);
//# sourceMappingURL=index.js.map
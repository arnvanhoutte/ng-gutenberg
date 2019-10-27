import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import PostPendingStatusCheck from './check';
export function PostPendingStatus(_ref) {
  var status = _ref.status,
      onUpdateStatus = _ref.onUpdateStatus;

  var togglePendingStatus = function togglePendingStatus() {
    var updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return createElement(PostPendingStatusCheck, null, createElement(CheckboxControl, {
    label: __('Pending Review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
export default compose(withSelect(function (select) {
  return {
    status: select('core/editor').getEditedPostAttribute('status')
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdateStatus: function onUpdateStatus(status) {
      dispatch('core/editor').editPost({
        status: status
      });
    }
  };
}))(PostPendingStatus);
//# sourceMappingURL=index.js.map
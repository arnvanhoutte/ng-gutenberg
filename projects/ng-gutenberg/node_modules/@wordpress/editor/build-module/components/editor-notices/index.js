import { createElement, Fragment } from "@wordpress/element";

/**
 * External dependencies
 */
import { filter } from 'lodash';
/**
 * WordPress dependencies
 */

import { NoticeList, SnackbarList } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import TemplateValidationNotice from '../template-validation-notice';
export function EditorNotices(_ref) {
  var notices = _ref.notices,
      onRemove = _ref.onRemove;
  var dismissibleNotices = filter(notices, {
    isDismissible: true,
    type: 'default'
  });
  var nonDismissibleNotices = filter(notices, {
    isDismissible: false,
    type: 'default'
  });
  var snackbarNotices = filter(notices, {
    type: 'snackbar'
  });
  return createElement(Fragment, null, createElement(NoticeList, {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), createElement(NoticeList, {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, createElement(TemplateValidationNotice, null)), createElement(SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: onRemove
  }));
}
export default compose([withSelect(function (select) {
  return {
    notices: select('core/notices').getNotices()
  };
}), withDispatch(function (dispatch) {
  return {
    onRemove: dispatch('core/notices').removeNotice
  };
})])(EditorNotices);
//# sourceMappingURL=index.js.map
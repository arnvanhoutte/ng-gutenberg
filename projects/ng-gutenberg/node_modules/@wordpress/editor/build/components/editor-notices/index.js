"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorNotices = EditorNotices;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _templateValidationNotice = _interopRequireDefault(require("../template-validation-notice"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function EditorNotices(_ref) {
  var notices = _ref.notices,
      onRemove = _ref.onRemove;
  var dismissibleNotices = (0, _lodash.filter)(notices, {
    isDismissible: true,
    type: 'default'
  });
  var nonDismissibleNotices = (0, _lodash.filter)(notices, {
    isDismissible: false,
    type: 'default'
  });
  var snackbarNotices = (0, _lodash.filter)(notices, {
    type: 'snackbar'
  });
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.NoticeList, {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), (0, _element.createElement)(_components.NoticeList, {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, (0, _element.createElement)(_templateValidationNotice.default, null)), (0, _element.createElement)(_components.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: onRemove
  }));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    notices: select('core/notices').getNotices()
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onRemove: dispatch('core/notices').removeNotice
  };
})])(EditorNotices);

exports.default = _default;
//# sourceMappingURL=index.js.map
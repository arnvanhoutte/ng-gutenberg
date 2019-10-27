"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostPendingStatus = PostPendingStatus;
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _check = _interopRequireDefault(require("./check"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostPendingStatus(_ref) {
  var status = _ref.status,
      onUpdateStatus = _ref.onUpdateStatus;

  var togglePendingStatus = function togglePendingStatus() {
    var updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return (0, _element.createElement)(_check.default, null, (0, _element.createElement)(_components.CheckboxControl, {
    label: (0, _i18n.__)('Pending Review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}

var _default = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  return {
    status: select('core/editor').getEditedPostAttribute('status')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdateStatus: function onUpdateStatus(status) {
      dispatch('core/editor').editPost({
        status: status
      });
    }
  };
}))(PostPendingStatus);

exports.default = _default;
//# sourceMappingURL=index.js.map
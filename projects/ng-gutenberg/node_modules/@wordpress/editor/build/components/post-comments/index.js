"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
function PostComments(_ref) {
  var _ref$commentStatus = _ref.commentStatus,
      commentStatus = _ref$commentStatus === void 0 ? 'open' : _ref$commentStatus,
      props = (0, _objectWithoutProperties2.default)(_ref, ["commentStatus"]);

  var onToggleComments = function onToggleComments() {
    return props.editPost({
      comment_status: commentStatus === 'open' ? 'closed' : 'open'
    });
  };

  return (0, _element.createElement)(_components.CheckboxControl, {
    label: (0, _i18n.__)('Allow Comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostComments);

exports.default = _default;
//# sourceMappingURL=index.js.map
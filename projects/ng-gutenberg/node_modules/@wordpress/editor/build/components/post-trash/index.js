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

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */
function PostTrash(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      postType = _ref.postType,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isNew", "postId", "postType"]);

  if (isNew || !postId) {
    return null;
  }

  var onClick = function onClick() {
    return props.trashPost(postId, postType);
  };

  return (0, _element.createElement)(_components.Button, {
    className: "editor-post-trash button-link-delete",
    onClick: onClick,
    isDefault: true,
    isLarge: true
  }, (0, _i18n.__)('Move to Trash'));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId(),
    postType: getCurrentPostType()
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    trashPost: dispatch('core/editor').trashPost
  };
})])(PostTrash);

exports.default = _default;
//# sourceMappingURL=index.js.map
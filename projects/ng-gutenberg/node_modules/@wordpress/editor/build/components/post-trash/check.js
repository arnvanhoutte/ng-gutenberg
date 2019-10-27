"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
function PostTrashCheck(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      children = _ref.children;

  if (isNew || !postId) {
    return null;
  }

  return children;
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId()
  };
})(PostTrashCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
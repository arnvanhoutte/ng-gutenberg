"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostStickyCheck = PostStickyCheck;
exports.default = void 0;

var _lodash = require("lodash");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function PostStickyCheck(_ref) {
  var hasStickyAction = _ref.hasStickyAction,
      postType = _ref.postType,
      children = _ref.children;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasStickyAction: (0, _lodash.get)(post, ['_links', 'wp:action-sticky'], false),
    postType: select('core/editor').getCurrentPostType()
  };
})])(PostStickyCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
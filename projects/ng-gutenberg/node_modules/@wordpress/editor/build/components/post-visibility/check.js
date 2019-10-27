"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostVisibilityCheck = PostVisibilityCheck;
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
function PostVisibilityCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      render = _ref.render;
  var canEdit = hasPublishAction;
  return render({
    canEdit: canEdit
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: (0, _lodash.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
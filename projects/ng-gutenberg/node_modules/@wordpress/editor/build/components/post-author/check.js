"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostAuthorCheck = PostAuthorCheck;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostAuthorCheck(_ref) {
  var hasAssignAuthorAction = _ref.hasAssignAuthorAction,
      authors = _ref.authors,
      children = _ref.children;

  if (!hasAssignAuthorAction || authors.length < 2) {
    return null;
  }

  return (0, _element.createElement)(_postTypeSupportCheck.default, {
    supportKeys: "author"
  }, children);
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: (0, _lodash.get)(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), _compose.withInstanceId])(PostAuthorCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostLastRevisionCheck = PostLastRevisionCheck;
exports.default = void 0;

var _element = require("@wordpress/element");

var _data = require("@wordpress/data");

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostLastRevisionCheck(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount,
      children = _ref.children;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return (0, _element.createElement)(_postTypeSupportCheck.default, {
    supportKeys: "revisions"
  }, children);
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
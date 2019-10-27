"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _check = _interopRequireDefault(require("./check"));

var _url = require("../../utils/url");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function LastRevision(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount;
  return (0, _element.createElement)(_check.default, null, (0, _element.createElement)(_components.IconButton, {
    href: (0, _url.getWPAdminURL)('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: "backup"
  }, (0, _i18n.sprintf)((0, _i18n._n)('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision);

exports.default = _default;
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostTaxonomiesCheck = PostTaxonomiesCheck;
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
function PostTaxonomiesCheck(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      children = _ref.children;
  var hasTaxonomies = (0, _lodash.some)(taxonomies, function (taxonomy) {
    return (0, _lodash.includes)(taxonomy.types, postType);
  });

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
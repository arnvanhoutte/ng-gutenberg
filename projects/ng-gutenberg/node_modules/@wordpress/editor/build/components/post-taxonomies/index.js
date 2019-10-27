"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostTaxonomies = PostTaxonomies;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _hierarchicalTermSelector = _interopRequireDefault(require("./hierarchical-term-selector"));

var _flatTermSelector = _interopRequireDefault(require("./flat-term-selector"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostTaxonomies(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      _ref$taxonomyWrapper = _ref.taxonomyWrapper,
      taxonomyWrapper = _ref$taxonomyWrapper === void 0 ? _lodash.identity : _ref$taxonomyWrapper;
  var availableTaxonomies = (0, _lodash.filter)(taxonomies, function (taxonomy) {
    return (0, _lodash.includes)(taxonomy.types, postType);
  });
  var visibleTaxonomies = (0, _lodash.filter)(availableTaxonomies, function (taxonomy) {
    return taxonomy.visibility.show_ui;
  });
  return visibleTaxonomies.map(function (taxonomy) {
    var TaxonomyComponent = taxonomy.hierarchical ? _hierarchicalTermSelector.default : _flatTermSelector.default;
    return (0, _element.createElement)(_element.Fragment, {
      key: "taxonomy-".concat(taxonomy.slug)
    }, taxonomyWrapper((0, _element.createElement)(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies);

exports.default = _default;
//# sourceMappingURL=index.js.map
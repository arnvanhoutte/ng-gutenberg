import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { filter, identity, includes } from 'lodash';
/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import HierarchicalTermSelector from './hierarchical-term-selector';
import FlatTermSelector from './flat-term-selector';
export function PostTaxonomies(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      _ref$taxonomyWrapper = _ref.taxonomyWrapper,
      taxonomyWrapper = _ref$taxonomyWrapper === void 0 ? identity : _ref$taxonomyWrapper;
  var availableTaxonomies = filter(taxonomies, function (taxonomy) {
    return includes(taxonomy.types, postType);
  });
  var visibleTaxonomies = filter(availableTaxonomies, function (taxonomy) {
    return taxonomy.visibility.show_ui;
  });
  return visibleTaxonomies.map(function (taxonomy) {
    var TaxonomyComponent = taxonomy.hierarchical ? HierarchicalTermSelector : FlatTermSelector;
    return createElement(Fragment, {
      key: "taxonomy-".concat(taxonomy.slug)
    }, taxonomyWrapper(createElement(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
export default compose([withSelect(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies);
//# sourceMappingURL=index.js.map
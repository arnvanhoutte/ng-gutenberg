/**
 * External dependencies
 */
import { some, includes } from 'lodash';
/**
 * WordPress dependencies
 */

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
export function PostTaxonomiesCheck(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      children = _ref.children;
  var hasTaxonomies = some(taxonomies, function (taxonomy) {
    return includes(taxonomy.types, postType);
  });

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
export default compose([withSelect(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck);
//# sourceMappingURL=check.js.map
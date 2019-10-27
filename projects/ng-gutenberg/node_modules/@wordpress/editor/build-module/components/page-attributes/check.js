/**
 * External dependencies
 */
import { get, isEmpty } from 'lodash';
/**
 * WordPress dependencies
 */

import { withSelect } from '@wordpress/data';
export function PageAttributesCheck(_ref) {
  var availableTemplates = _ref.availableTemplates,
      postType = _ref.postType,
      children = _ref.children;
  var supportsPageAttributes = get(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes && isEmpty(availableTemplates)) {
    return null;
  }

  return children;
}
export default withSelect(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    availableTemplates: availableTemplates
  };
})(PageAttributesCheck);
//# sourceMappingURL=check.js.map
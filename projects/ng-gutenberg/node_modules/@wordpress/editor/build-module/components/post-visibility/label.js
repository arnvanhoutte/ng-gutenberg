/**
 * External dependencies
 */
import { find } from 'lodash';
/**
 * WordPress dependencies
 */

import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import { visibilityOptions } from './utils';

function PostVisibilityLabel(_ref) {
  var visibility = _ref.visibility;

  var getVisibilityLabel = function getVisibilityLabel() {
    return find(visibilityOptions, {
      value: visibility
    }).label;
  };

  return getVisibilityLabel(visibility);
}

export default withSelect(function (select) {
  return {
    visibility: select('core/editor').getEditedPostVisibility()
  };
})(PostVisibilityLabel);
//# sourceMappingURL=label.js.map
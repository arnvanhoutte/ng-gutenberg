/**
 * External dependencies
 */
import { isEmpty } from 'lodash';
/**
 * WordPress dependencies
 */

import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
export default createHigherOrderComponent(withSelect(function (select, ownProps) {
  var settings = select('core/block-editor').getSettings();
  var colors = ownProps.colors === undefined ? settings.colors : ownProps.colors;
  var disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors: colors,
    disableCustomColors: disableCustomColors,
    hasColorsToChoose: !isEmpty(colors) || !disableCustomColors
  };
}), 'withColorContext');
//# sourceMappingURL=with-color-context.js.map
/**
 * WordPress dependencies
 */
import { FontSizePicker } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
export default withSelect(function (select) {
  var _select$getSettings = select('core/block-editor').getSettings(),
      disableCustomFontSizes = _select$getSettings.disableCustomFontSizes,
      fontSizes = _select$getSettings.fontSizes;

  return {
    disableCustomFontSizes: disableCustomFontSizes,
    fontSizes: fontSizes
  };
})(FontSizePicker);
//# sourceMappingURL=font-size-picker.js.map
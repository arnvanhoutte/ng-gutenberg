/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, __experimentalGetSettings } from '@wordpress/date';
import { withSelect } from '@wordpress/data';
export function PostScheduleLabel(_ref) {
  var date = _ref.date,
      isFloating = _ref.isFloating;

  var settings = __experimentalGetSettings();

  return date && !isFloating ? dateI18n("".concat(settings.formats.date, " ").concat(settings.formats.time), date) : __('Immediately');
}
export default withSelect(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel);
//# sourceMappingURL=label.js.map
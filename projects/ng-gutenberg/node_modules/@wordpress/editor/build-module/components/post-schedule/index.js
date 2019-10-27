import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __experimentalGetSettings } from '@wordpress/date';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { DateTimePicker } from '@wordpress/components';
export function PostSchedule(_ref) {
  var date = _ref.date,
      onUpdateDate = _ref.onUpdateDate;

  var settings = __experimentalGetSettings(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
  return createElement(DateTimePicker, {
    key: "date-time-picker",
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  });
}
export default compose([withSelect(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date')
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdateDate: function onUpdateDate(date) {
      dispatch('core/editor').editPost({
        date: date
      });
    }
  };
})])(PostSchedule);
//# sourceMappingURL=index.js.map
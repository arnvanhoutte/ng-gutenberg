"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostSchedule = PostSchedule;
exports.default = void 0;

var _element = require("@wordpress/element");

var _date = require("@wordpress/date");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _components = require("@wordpress/components");

/**
 * WordPress dependencies
 */
function PostSchedule(_ref) {
  var date = _ref.date,
      onUpdateDate = _ref.onUpdateDate;
  var settings = (0, _date.__experimentalGetSettings)(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"

  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
  return (0, _element.createElement)(_components.DateTimePicker, {
    key: "date-time-picker",
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdateDate: function onUpdateDate(date) {
      dispatch('core/editor').editPost({
        date: date
      });
    }
  };
})])(PostSchedule);

exports.default = _default;
//# sourceMappingURL=index.js.map
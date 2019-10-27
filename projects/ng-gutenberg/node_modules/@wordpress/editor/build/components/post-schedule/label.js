"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostScheduleLabel = PostScheduleLabel;
exports.default = void 0;

var _i18n = require("@wordpress/i18n");

var _date = require("@wordpress/date");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
function PostScheduleLabel(_ref) {
  var date = _ref.date,
      isFloating = _ref.isFloating;
  var settings = (0, _date.__experimentalGetSettings)();
  return date && !isFloating ? (0, _date.dateI18n)("".concat(settings.formats.date, " ").concat(settings.formats.time), date) : (0, _i18n.__)('Immediately');
}

var _default = (0, _data.withSelect)(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel);

exports.default = _default;
//# sourceMappingURL=label.js.map
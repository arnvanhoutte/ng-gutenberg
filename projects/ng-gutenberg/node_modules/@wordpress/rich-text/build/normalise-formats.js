"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normaliseFormats = normaliseFormats;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _isFormatEqual = require("./is-format-equal");

/**
 * Internal dependencies
 */

/**
 * Normalises formats: ensures subsequent adjacent equal formats have the same
 * reference.
 *
 * @param {Object} value Value to normalise formats of.
 *
 * @return {Object} New value with normalised formats.
 */
function normaliseFormats(value) {
  var newFormats = value.formats.slice();
  newFormats.forEach(function (formatsAtIndex, index) {
    var formatsAtPreviousIndex = newFormats[index - 1];

    if (formatsAtPreviousIndex) {
      var newFormatsAtIndex = formatsAtIndex.slice();
      newFormatsAtIndex.forEach(function (format, formatIndex) {
        var previousFormat = formatsAtPreviousIndex[formatIndex];

        if ((0, _isFormatEqual.isFormatEqual)(format, previousFormat)) {
          newFormatsAtIndex[formatIndex] = previousFormat;
        }
      });
      newFormats[index] = newFormatsAtIndex;
    }
  });
  return (0, _objectSpread2.default)({}, value, {
    formats: newFormats
  });
}
//# sourceMappingURL=normalise-formats.js.map
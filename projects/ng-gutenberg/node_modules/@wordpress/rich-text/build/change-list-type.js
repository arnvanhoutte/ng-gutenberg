"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeListType = changeListType;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _specialCharacters = require("./special-characters");

var _getLineIndex = require("./get-line-index");

var _getParentLineIndex = require("./get-parent-line-index");

/**
 * Internal dependencies
 */

/**
 * Changes the list type of the selected indented list, if any. Looks at the
 * currently selected list item and takes the parent list, then changes the list
 * type of this list. When multiple lines are selected, the parent lists are
 * takes and changed.
 *
 * @param {Object} value     Value to change.
 * @param {Object} newFormat The new list format object. Choose between
 *                           `{ type: 'ol' }` and `{ type: 'ul' }`.
 *
 * @return {Object} The changed value.
 */
function changeListType(value, newFormat) {
  var text = value.text,
      replacements = value.replacements,
      start = value.start,
      end = value.end;
  var startingLineIndex = (0, _getLineIndex.getLineIndex)(value, start);
  var startLineFormats = replacements[startingLineIndex] || [];
  var endLineFormats = replacements[(0, _getLineIndex.getLineIndex)(value, end)] || [];
  var startIndex = (0, _getParentLineIndex.getParentLineIndex)(value, startingLineIndex);
  var newReplacements = replacements.slice();
  var startCount = startLineFormats.length - 1;
  var endCount = endLineFormats.length - 1;
  var changed;

  for (var index = startIndex + 1 || 0; index < text.length; index++) {
    if (text[index] !== _specialCharacters.LINE_SEPARATOR) {
      continue;
    }

    if ((newReplacements[index] || []).length <= startCount) {
      break;
    }

    if (!newReplacements[index]) {
      continue;
    }

    changed = true;
    newReplacements[index] = newReplacements[index].map(function (format, i) {
      return i < startCount || i > endCount ? format : newFormat;
    });
  }

  if (!changed) {
    return value;
  }

  return (0, _objectSpread2.default)({}, value, {
    replacements: newReplacements
  });
}
//# sourceMappingURL=change-list-type.js.map
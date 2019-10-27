"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indentListItems = indentListItems;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _specialCharacters = require("./special-characters");

var _getLineIndex = require("./get-line-index");

/**
 * Internal dependencies
 */

/**
 * Gets the line index of the first previous list item with higher indentation.
 *
 * @param {Object} value      Value to search.
 * @param {number} lineIndex  Line index of the list item to compare with.
 *
 * @return {boolean} The line index.
 */
function getTargetLevelLineIndex(_ref, lineIndex) {
  var text = _ref.text,
      replacements = _ref.replacements;
  var startFormats = replacements[lineIndex] || [];
  var index = lineIndex;

  while (index-- >= 0) {
    if (text[index] !== _specialCharacters.LINE_SEPARATOR) {
      continue;
    }

    var formatsAtIndex = replacements[index] || []; // Return the first line index that is one level higher. If the level is
    // lower or equal, there is no result.

    if (formatsAtIndex.length === startFormats.length + 1) {
      return index;
    } else if (formatsAtIndex.length <= startFormats.length) {
      return;
    }
  }
}
/**
 * Indents any selected list items if possible.
 *
 * @param {Object} value      Value to change.
 * @param {Object} rootFormat Root format.
 *
 * @return {Object} The changed value.
 */


function indentListItems(value, rootFormat) {
  var lineIndex = (0, _getLineIndex.getLineIndex)(value); // There is only one line, so the line cannot be indented.

  if (lineIndex === undefined) {
    return value;
  }

  var text = value.text,
      replacements = value.replacements,
      end = value.end;
  var previousLineIndex = (0, _getLineIndex.getLineIndex)(value, lineIndex);
  var formatsAtLineIndex = replacements[lineIndex] || [];
  var formatsAtPreviousLineIndex = replacements[previousLineIndex] || []; // The the indentation of the current line is greater than previous line,
  // then the line cannot be furter indented.

  if (formatsAtLineIndex.length > formatsAtPreviousLineIndex.length) {
    return value;
  }

  var newFormats = replacements.slice();
  var targetLevelLineIndex = getTargetLevelLineIndex(value, lineIndex);

  for (var index = lineIndex; index < end; index++) {
    if (text[index] !== _specialCharacters.LINE_SEPARATOR) {
      continue;
    } // Get the previous list, and if there's a child list, take over the
    // formats. If not, duplicate the last level and create a new level.


    if (targetLevelLineIndex) {
      var targetFormats = replacements[targetLevelLineIndex] || [];
      newFormats[index] = targetFormats.concat((newFormats[index] || []).slice(targetFormats.length - 1));
    } else {
      var _targetFormats = replacements[previousLineIndex] || [];

      var lastformat = _targetFormats[_targetFormats.length - 1] || rootFormat;
      newFormats[index] = _targetFormats.concat([lastformat], (newFormats[index] || []).slice(_targetFormats.length));
    }
  }

  return (0, _objectSpread2.default)({}, value, {
    replacements: newFormats
  });
}
//# sourceMappingURL=indent-list-items.js.map
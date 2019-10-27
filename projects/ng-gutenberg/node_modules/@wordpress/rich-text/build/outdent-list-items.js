"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outdentListItems = outdentListItems;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _specialCharacters = require("./special-characters");

var _getLineIndex = require("./get-line-index");

var _getParentLineIndex = require("./get-parent-line-index");

var _getLastChildIndex = require("./get-last-child-index");

/**
 * Internal dependencies
 */

/**
 * Outdents any selected list items if possible.
 *
 * @param {Object} value Value to change.
 *
 * @return {Object} The changed value.
 */
function outdentListItems(value) {
  var text = value.text,
      replacements = value.replacements,
      start = value.start,
      end = value.end;
  var startingLineIndex = (0, _getLineIndex.getLineIndex)(value, start); // Return early if the starting line index cannot be further outdented.

  if (replacements[startingLineIndex] === undefined) {
    return value;
  }

  var newFormats = replacements.slice(0);
  var parentFormats = replacements[(0, _getParentLineIndex.getParentLineIndex)(value, startingLineIndex)] || [];
  var endingLineIndex = (0, _getLineIndex.getLineIndex)(value, end);
  var lastChildIndex = (0, _getLastChildIndex.getLastChildIndex)(value, endingLineIndex); // Outdent all list items from the starting line index until the last child
  // index of the ending list. All children of the ending list need to be
  // outdented, otherwise they'll be orphaned.

  for (var index = startingLineIndex; index <= lastChildIndex; index++) {
    // Skip indices that are not line separators.
    if (text[index] !== _specialCharacters.LINE_SEPARATOR) {
      continue;
    } // In the case of level 0, the formats at the index are undefined.


    var currentFormats = newFormats[index] || []; // Omit the indentation level where the selection starts.

    newFormats[index] = parentFormats.concat(currentFormats.slice(parentFormats.length + 1));

    if (newFormats[index].length === 0) {
      delete newFormats[index];
    }
  }

  return (0, _objectSpread2.default)({}, value, {
    replacements: newFormats
  });
}
//# sourceMappingURL=outdent-list-items.js.map
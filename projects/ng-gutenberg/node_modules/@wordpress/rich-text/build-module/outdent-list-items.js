import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * Internal dependencies
 */
import { LINE_SEPARATOR } from './special-characters';
import { getLineIndex } from './get-line-index';
import { getParentLineIndex } from './get-parent-line-index';
import { getLastChildIndex } from './get-last-child-index';
/**
 * Outdents any selected list items if possible.
 *
 * @param {Object} value Value to change.
 *
 * @return {Object} The changed value.
 */

export function outdentListItems(value) {
  var text = value.text,
      replacements = value.replacements,
      start = value.start,
      end = value.end;
  var startingLineIndex = getLineIndex(value, start); // Return early if the starting line index cannot be further outdented.

  if (replacements[startingLineIndex] === undefined) {
    return value;
  }

  var newFormats = replacements.slice(0);
  var parentFormats = replacements[getParentLineIndex(value, startingLineIndex)] || [];
  var endingLineIndex = getLineIndex(value, end);
  var lastChildIndex = getLastChildIndex(value, endingLineIndex); // Outdent all list items from the starting line index until the last child
  // index of the ending list. All children of the ending list need to be
  // outdented, otherwise they'll be orphaned.

  for (var index = startingLineIndex; index <= lastChildIndex; index++) {
    // Skip indices that are not line separators.
    if (text[index] !== LINE_SEPARATOR) {
      continue;
    } // In the case of level 0, the formats at the index are undefined.


    var currentFormats = newFormats[index] || []; // Omit the indentation level where the selection starts.

    newFormats[index] = parentFormats.concat(currentFormats.slice(parentFormats.length + 1));

    if (newFormats[index].length === 0) {
      delete newFormats[index];
    }
  }

  return _objectSpread({}, value, {
    replacements: newFormats
  });
}
//# sourceMappingURL=outdent-list-items.js.map
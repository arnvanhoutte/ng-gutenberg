"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleFormat = toggleFormat;

var _getActiveFormat = require("./get-active-format");

var _removeFormat = require("./remove-format");

var _applyFormat = require("./apply-format");

/**
 * Internal dependencies
 */

/**
 * Toggles a format object to a Rich Text value at the current selection.
 *
 * @param {Object} value  Value to modify.
 * @param {Object} format Format to apply or remove.
 *
 * @return {Object} A new value with the format applied or removed.
 */
function toggleFormat(value, format) {
  if ((0, _getActiveFormat.getActiveFormat)(value, format.type)) {
    return (0, _removeFormat.removeFormat)(value, format.type);
  }

  return (0, _applyFormat.applyFormat)(value, format);
}
//# sourceMappingURL=toggle-format.js.map
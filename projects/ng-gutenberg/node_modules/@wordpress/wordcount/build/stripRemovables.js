"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Removes items matched in the regex.
 *
 * @param {Object} settings The main settings object containing regular expressions
 * @param {string} text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function _default(settings, text) {
  if (settings.removeRegExp) {
    return text.replace(settings.removeRegExp, '');
  }

  return text;
}
//# sourceMappingURL=stripRemovables.js.map
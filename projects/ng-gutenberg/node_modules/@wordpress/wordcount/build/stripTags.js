"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Replaces items matched in the regex with new line
 *
 * @param {Object} settings The main settings object containing regular expressions
 * @param {string} text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function _default(settings, text) {
  if (settings.HTMLRegExp) {
    return text.replace(settings.HTMLRegExp, '\n');
  }
}
//# sourceMappingURL=stripTags.js.map
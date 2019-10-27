"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatTypes = getFormatTypes;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Returns all registered formats.
 *
 * @return {Array} Format settings.
 */
function getFormatTypes() {
  return (0, _data.select)('core/rich-text').getFormatTypes();
}
//# sourceMappingURL=get-format-types.js.map
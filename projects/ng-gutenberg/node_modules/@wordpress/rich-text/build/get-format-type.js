"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatType = getFormatType;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Returns a registered format type.
 *
 * @param {string} name Format name.
 *
 * @return {?Object} Format type.
 */
function getFormatType(name) {
  return (0, _data.select)('core/rich-text').getFormatType(name);
}
//# sourceMappingURL=get-format-type.js.map
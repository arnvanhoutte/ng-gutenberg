"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speak = void 0;

var _filterMessage = _interopRequireDefault(require("./filterMessage"));

/**
 * Internal dependencies
 */

/**
 * Update the ARIA live notification area text node.
 *
 * @param {string} message  The message to be announced by Assistive Technologies.
 * @param {string} ariaLive Optional. The politeness level for aria-live. Possible values:
 *                          polite or assertive. Default polite.
 */
var speak = function speak(message, ariaLive) {
  message = (0, _filterMessage.default)(message); //TODO: Use native module to speak message

  if ('assertive' === ariaLive) {} else {}
};

exports.speak = speak;
//# sourceMappingURL=index.native.js.map
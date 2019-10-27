"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speak = exports.setup = void 0;

var _domReady = _interopRequireDefault(require("@wordpress/dom-ready"));

var _addContainer = _interopRequireDefault(require("./addContainer"));

var _clear = _interopRequireDefault(require("./clear"));

var _filterMessage = _interopRequireDefault(require("./filterMessage"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Create the live regions.
 */
var setup = function setup() {
  var containerPolite = document.getElementById('a11y-speak-polite');
  var containerAssertive = document.getElementById('a11y-speak-assertive');

  if (containerPolite === null) {
    containerPolite = (0, _addContainer.default)('polite');
  }

  if (containerAssertive === null) {
    containerAssertive = (0, _addContainer.default)('assertive');
  }
};
/**
 * Run setup on domReady.
 */


exports.setup = setup;
(0, _domReady.default)(setup);
/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in wp-a11y.js
 *
 * @param {string} message  The message to be announced by Assistive Technologies.
 * @param {string} ariaLive Optional. The politeness level for aria-live. Possible values:
 *                          polite or assertive. Default polite.
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 */

var speak = function speak(message, ariaLive) {
  // Clear previous messages to allow repeated strings being read out.
  (0, _clear.default)();
  message = (0, _filterMessage.default)(message);
  var containerPolite = document.getElementById('a11y-speak-polite');
  var containerAssertive = document.getElementById('a11y-speak-assertive');

  if (containerAssertive && 'assertive' === ariaLive) {
    containerAssertive.textContent = message;
  } else if (containerPolite) {
    containerPolite.textContent = message;
  }
};

exports.speak = speak;
//# sourceMappingURL=index.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ifViewportMatches", {
  enumerable: true,
  get: function get() {
    return _ifViewportMatches.default;
  }
});
Object.defineProperty(exports, "withViewportMatch", {
  enumerable: true,
  get: function get() {
    return _withViewportMatch.default;
  }
});

var _lodash = require("lodash");

var _data = require("@wordpress/data");

require("./store");

var _ifViewportMatches = _interopRequireDefault(require("./if-viewport-matches"));

var _withViewportMatch = _interopRequireDefault(require("./with-viewport-match"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Object}
 */
var BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * Hash of query operators with corresponding condition for media query.
 *
 * @type {Object}
 */

var OPERATORS = {
  '<': 'max-width',
  '>=': 'min-width'
};
/**
 * Callback invoked when media query state should be updated. Is invoked a
 * maximum of one time per call stack.
 */

var setIsMatching = (0, _lodash.debounce)(function () {
  var values = (0, _lodash.mapValues)(queries, function (query) {
    return query.matches;
  });
  (0, _data.dispatch)('core/viewport').setIsMatching(values);
}, {
  leading: true
});
/**
 * Hash of breakpoint names with generated MediaQueryList for corresponding
 * media query.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 *
 * @type {Object<string,MediaQueryList>}
 */

var queries = (0, _lodash.reduce)(BREAKPOINTS, function (result, width, name) {
  (0, _lodash.forEach)(OPERATORS, function (condition, operator) {
    var list = window.matchMedia("(".concat(condition, ": ").concat(width, "px)"));
    list.addListener(setIsMatching);
    var key = [operator, name].join(' ');
    result[key] = list;
  });
  return result;
}, {});
window.addEventListener('orientationchange', setIsMatching); // Set initial values

setIsMatching();
setIsMatching.flush();
//# sourceMappingURL=index.js.map
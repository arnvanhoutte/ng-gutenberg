/**
 * External dependencies
 */
import { reduce, forEach, debounce, mapValues } from 'lodash';
/**
 * WordPress dependencies
 */

import { dispatch } from '@wordpress/data';
/**
 * Internal dependencies
 */

import './store';
export { default as ifViewportMatches } from './if-viewport-matches';
export { default as withViewportMatch } from './with-viewport-match';
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

var setIsMatching = debounce(function () {
  var values = mapValues(queries, function (query) {
    return query.matches;
  });
  dispatch('core/viewport').setIsMatching(values);
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

var queries = reduce(BREAKPOINTS, function (result, width, name) {
  forEach(OPERATORS, function (condition, operator) {
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
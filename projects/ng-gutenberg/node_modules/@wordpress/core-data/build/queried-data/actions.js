"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveItems = receiveItems;
exports.receiveQueriedItems = receiveQueriedItems;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _lodash = require("lodash");

/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array} items Items received.
 *
 * @return {Object} Action object.
 */
function receiveItems(items) {
  return {
    type: 'RECEIVE_ITEMS',
    items: (0, _lodash.castArray)(items)
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 *
 * @return {Object} Action object.
 */


function receiveQueriedItems(items) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _objectSpread2.default)({}, receiveItems(items), {
    query: query
  });
}
//# sourceMappingURL=actions.js.map
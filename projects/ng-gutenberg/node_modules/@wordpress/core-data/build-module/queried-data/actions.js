import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * External dependencies
 */
import { castArray } from 'lodash';
/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array} items Items received.
 *
 * @return {Object} Action object.
 */

export function receiveItems(items) {
  return {
    type: 'RECEIVE_ITEMS',
    items: castArray(items)
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

export function receiveQueriedItems(items) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({}, receiveItems(items), {
    query: query
  });
}
//# sourceMappingURL=actions.js.map
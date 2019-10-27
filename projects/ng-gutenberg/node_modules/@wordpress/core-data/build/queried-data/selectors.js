"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueriedItems = void 0;

var _rememo = _interopRequireDefault(require("rememo"));

var _equivalentKeyMap = _interopRequireDefault(require("equivalent-key-map"));

var _getQueryParts2 = _interopRequireDefault(require("./get-query-parts"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */
var queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  var _getQueryParts = (0, _getQueryParts2.default)(query),
      stableKey = _getQueryParts.stableKey,
      page = _getQueryParts.page,
      perPage = _getQueryParts.perPage;

  if (!state.queries[stableKey]) {
    return null;
  }

  var itemIds = state.queries[stableKey];

  if (!itemIds) {
    return null;
  }

  var startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  var endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  var items = [];

  for (var i = startOffset; i < endOffset; i++) {
    var itemId = itemIds[i];
    items.push(state.items[itemId]);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


var getQueriedItems = (0, _rememo.default)(function (state) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    var queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new _equivalentKeyMap.default();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  var items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});
exports.getQueriedItems = getQueriedItems;
//# sourceMappingURL=selectors.js.map
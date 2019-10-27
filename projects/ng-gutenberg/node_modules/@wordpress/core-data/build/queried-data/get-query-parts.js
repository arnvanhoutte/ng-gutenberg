"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryParts = getQueryParts;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _url = require("@wordpress/url");

var _utils = require("../utils");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number} page      The query page (1-based index, default 1).
 * @property {number} perPage   Items per page for query (default 10).
 * @property {string} stableKey An encoded stable string of all non-pagination
 *                              query parameters.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */
function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  var parts = {
    stableKey: '',
    page: 1,
    perPage: 10
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  var keys = Object.keys(query).sort();

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      default:
        // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.
        parts.stableKey += (parts.stableKey ? '&' : '') + (0, _url.addQueryArgs)('', (0, _defineProperty2.default)({}, key, value)).slice(1);
    }
  }

  return parts;
}

var _default = (0, _utils.withWeakMapCache)(getQueryParts);

exports.default = _default;
//# sourceMappingURL=get-query-parts.js.map
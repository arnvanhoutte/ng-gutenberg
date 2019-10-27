"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _compose = require("@wordpress/compose");

var _context = require("../block-edit/context");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var withClientId = (0, _compose.createHigherOrderComponent)(function (WrappedComponent) {
  return (0, _context.withBlockEditContext)(function (context) {
    return (0, _lodash.pick)(context, ['clientId']);
  })(WrappedComponent);
}, 'withClientId');
var _default = withClientId;
exports.default = _default;
//# sourceMappingURL=with-client-id.js.map
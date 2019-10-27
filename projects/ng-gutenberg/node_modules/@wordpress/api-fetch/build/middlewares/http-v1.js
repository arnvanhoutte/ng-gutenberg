"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

/**
 * Set of HTTP methods which are eligible to be overridden.
 *
 * @type {Set}
 */
var OVERRIDE_METHODS = new Set(['PATCH', 'PUT', 'DELETE']);
/**
 * Default request method.
 *
 * "A request has an associated method (a method). Unless stated otherwise it
 * is `GET`."
 *
 * @see  https://fetch.spec.whatwg.org/#requests
 *
 * @type {string}
 */

var DEFAULT_METHOD = 'GET';
/**
 * API Fetch middleware which overrides the request method for HTTP v1
 * compatibility leveraging the REST API X-HTTP-Method-Override header.
 *
 * @param {Object}   options Fetch options.
 * @param {Function} next    [description]
 *
 * @return {*} The evaluated result of the remaining middleware chain.
 */

function httpV1Middleware(options, next) {
  var _options = options,
      _options$method = _options.method,
      method = _options$method === void 0 ? DEFAULT_METHOD : _options$method;

  if (OVERRIDE_METHODS.has(method.toUpperCase())) {
    options = (0, _objectSpread2.default)({}, options, {
      headers: (0, _objectSpread2.default)({}, options.headers, {
        'X-HTTP-Method-Override': method,
        'Content-Type': 'application/json'
      }),
      method: 'POST'
    });
  }

  return next(options, next);
}

var _default = httpV1Middleware;
exports.default = _default;
//# sourceMappingURL=http-v1.js.map
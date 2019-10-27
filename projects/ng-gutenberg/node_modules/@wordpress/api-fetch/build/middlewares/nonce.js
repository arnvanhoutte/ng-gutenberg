"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function createNonceMiddleware(nonce) {
  function middleware(options, next) {
    var _options$headers = options.headers,
        headers = _options$headers === void 0 ? {} : _options$headers; // If an 'X-WP-Nonce' header (or any case-insensitive variation
    // thereof) was specified, no need to add a nonce header.

    for (var headerName in headers) {
      if (headerName.toLowerCase() === 'x-wp-nonce') {
        return next(options);
      }
    }

    return next((0, _objectSpread2.default)({}, options, {
      headers: (0, _objectSpread2.default)({}, headers, {
        'X-WP-Nonce': middleware.nonce
      })
    }));
  }

  middleware.nonce = nonce;
  return middleware;
}

var _default = createNonceMiddleware;
exports.default = _default;
//# sourceMappingURL=nonce.js.map
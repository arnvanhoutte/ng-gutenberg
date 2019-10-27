import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

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

    return next(_objectSpread({}, options, {
      headers: _objectSpread({}, headers, {
        'X-WP-Nonce': middleware.nonce
      })
    }));
  }

  middleware.nonce = nonce;
  return middleware;
}

export default createNonceMiddleware;
//# sourceMappingURL=nonce.js.map
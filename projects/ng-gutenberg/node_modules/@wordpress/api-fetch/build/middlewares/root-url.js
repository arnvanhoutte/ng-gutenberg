"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _namespaceEndpoint = _interopRequireDefault(require("./namespace-endpoint"));

/**
 * Internal dependencies
 */
var createRootURLMiddleware = function createRootURLMiddleware(rootURL) {
  return function (options, next) {
    return (0, _namespaceEndpoint.default)(options, function (optionsWithPath) {
      var url = optionsWithPath.url;
      var path = optionsWithPath.path;
      var apiRoot;

      if (typeof path === 'string') {
        apiRoot = rootURL;

        if (-1 !== rootURL.indexOf('?')) {
          path = path.replace('?', '&');
        }

        path = path.replace(/^\//, ''); // API root may already include query parameter prefix if site is
        // configured to use plain permalinks.

        if ('string' === typeof apiRoot && -1 !== apiRoot.indexOf('?')) {
          path = path.replace('?', '&');
        }

        url = apiRoot + path;
      }

      return next((0, _objectSpread2.default)({}, optionsWithPath, {
        url: url
      }));
    });
  };
};

var _default = createRootURLMiddleware;
exports.default = _default;
//# sourceMappingURL=root-url.js.map
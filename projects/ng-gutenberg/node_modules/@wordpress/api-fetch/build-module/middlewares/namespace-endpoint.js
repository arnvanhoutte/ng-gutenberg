import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

var namespaceAndEndpointMiddleware = function namespaceAndEndpointMiddleware(options, next) {
  var path = options.path;
  var namespaceTrimmed, endpointTrimmed;

  if (typeof options.namespace === 'string' && typeof options.endpoint === 'string') {
    namespaceTrimmed = options.namespace.replace(/^\/|\/$/g, '');
    endpointTrimmed = options.endpoint.replace(/^\//, '');

    if (endpointTrimmed) {
      path = namespaceTrimmed + '/' + endpointTrimmed;
    } else {
      path = namespaceTrimmed;
    }
  }

  delete options.namespace;
  delete options.endpoint;
  return next(_objectSpread({}, options, {
    path: path
  }));
};

export default namespaceAndEndpointMiddleware;
//# sourceMappingURL=namespace-endpoint.js.map
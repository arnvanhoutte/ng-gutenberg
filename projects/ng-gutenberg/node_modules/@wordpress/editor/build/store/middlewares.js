"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _refx = _interopRequireDefault(require("refx"));

var _effects = _interopRequireDefault(require("./effects"));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Applies the custom middlewares used specifically in the editor module.
 *
 * @param {Object} store Store Object.
 *
 * @return {Object} Update Store Object.
 */
function applyMiddlewares(store) {
  var enhancedDispatch = function enhancedDispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var middlewareAPI = {
    getState: store.getState,
    dispatch: function dispatch() {
      return enhancedDispatch.apply(void 0, arguments);
    }
  };
  enhancedDispatch = (0, _refx.default)(_effects.default)(middlewareAPI)(store.dispatch);
  store.dispatch = enhancedDispatch;
  return store;
}

var _default = applyMiddlewares;
exports.default = _default;
//# sourceMappingURL=middlewares.js.map
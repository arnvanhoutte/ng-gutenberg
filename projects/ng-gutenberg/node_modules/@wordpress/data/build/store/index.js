"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function createCoreDataStore(registry) {
  var getCoreDataSelector = function getCoreDataSelector(selectorName) {
    return function (reducerKey) {
      var _registry$select;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_registry$select = registry.select(reducerKey))[selectorName].apply(_registry$select, args);
    };
  };

  var getCoreDataAction = function getCoreDataAction(actionName) {
    return function (reducerKey) {
      var _registry$dispatch;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_registry$dispatch = registry.dispatch(reducerKey))[actionName].apply(_registry$dispatch, args);
    };
  };

  return {
    getSelectors: function getSelectors() {
      return ['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'].reduce(function (memo, selectorName) {
        return (0, _objectSpread4.default)({}, memo, (0, _defineProperty2.default)({}, selectorName, getCoreDataSelector(selectorName)));
      }, {});
    },
    getActions: function getActions() {
      return ['startResolution', 'finishResolution', 'invalidateResolution', 'invalidateResolutionForStore', 'invalidateResolutionForStoreSelector'].reduce(function (memo, actionName) {
        return (0, _objectSpread4.default)({}, memo, (0, _defineProperty2.default)({}, actionName, getCoreDataAction(actionName)));
      }, {});
    },
    subscribe: function subscribe() {
      // There's no reasons to trigger any listener when we subscribe to this store
      // because there's no state stored in this store that need to retrigger selectors
      // if a change happens, the corresponding store where the tracking stated live
      // would have already triggered a "subscribe" call.
      return function () {};
    }
  };
}

var _default = createCoreDataStore;
exports.default = _default;
//# sourceMappingURL=index.js.map
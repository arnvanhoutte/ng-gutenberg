"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _data = require("@wordpress/data");

var _reducer = _interopRequireDefault(require("./reducer"));

var _controls = _interopRequireDefault(require("./controls"));

var selectors = _interopRequireWildcard(require("./selectors"));

var actions = _interopRequireWildcard(require("./actions"));

var resolvers = _interopRequireWildcard(require("./resolvers"));

var _entities = require("./entities");

var _name = require("./name");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
// The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.
var entitySelectors = _entities.defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[(0, _entities.getMethodName)(kind, name)] = function (state, key) {
    return selectors.getEntityRecord(state, kind, name, key);
  };

  result[(0, _entities.getMethodName)(kind, name, 'get', true)] = function (state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return selectors.getEntityRecords.apply(selectors, [state, kind, name].concat(args));
  };

  return result;
}, {});

var entityResolvers = _entities.defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[(0, _entities.getMethodName)(kind, name)] = function (key) {
    return resolvers.getEntityRecord(kind, name, key);
  };

  var pluralMethodName = (0, _entities.getMethodName)(kind, name, 'get', true);

  result[pluralMethodName] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return resolvers.getEntityRecords.apply(resolvers, [kind, name].concat(args));
  };

  result[pluralMethodName].shouldInvalidate = function (action) {
    var _resolvers$getEntityR;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (_resolvers$getEntityR = resolvers.getEntityRecords).shouldInvalidate.apply(_resolvers$getEntityR, [action, kind, name].concat(args));
  };

  return result;
}, {});

var entityActions = _entities.defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[(0, _entities.getMethodName)(kind, name, 'save')] = function (key) {
    return actions.saveEntityRecord(kind, name, key);
  };

  return result;
}, {});

(0, _data.registerStore)(_name.REDUCER_KEY, {
  reducer: _reducer.default,
  controls: _controls.default,
  actions: (0, _objectSpread2.default)({}, actions, entityActions),
  selectors: (0, _objectSpread2.default)({}, selectors, entitySelectors),
  resolvers: (0, _objectSpread2.default)({}, resolvers, entityResolvers)
});
//# sourceMappingURL=index.js.map
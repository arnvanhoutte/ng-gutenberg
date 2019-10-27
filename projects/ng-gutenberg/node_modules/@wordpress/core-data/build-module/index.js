import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';
/**
 * Internal dependencies
 */

import reducer from './reducer';
import controls from './controls';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import { defaultEntities, getMethodName } from './entities';
import { REDUCER_KEY } from './name'; // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

var entitySelectors = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[getMethodName(kind, name)] = function (state, key) {
    return selectors.getEntityRecord(state, kind, name, key);
  };

  result[getMethodName(kind, name, 'get', true)] = function (state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return selectors.getEntityRecords.apply(selectors, [state, kind, name].concat(args));
  };

  return result;
}, {});
var entityResolvers = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[getMethodName(kind, name)] = function (key) {
    return resolvers.getEntityRecord(kind, name, key);
  };

  var pluralMethodName = getMethodName(kind, name, 'get', true);

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
var entityActions = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[getMethodName(kind, name, 'save')] = function (key) {
    return actions.saveEntityRecord(kind, name, key);
  };

  return result;
}, {});
registerStore(REDUCER_KEY, {
  reducer: reducer,
  controls: controls,
  actions: _objectSpread({}, actions, entityActions),
  selectors: _objectSpread({}, selectors, entitySelectors),
  resolvers: _objectSpread({}, resolvers, entityResolvers)
});
//# sourceMappingURL=index.js.map
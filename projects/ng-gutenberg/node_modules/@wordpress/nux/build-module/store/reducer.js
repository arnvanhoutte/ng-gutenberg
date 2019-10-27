import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';
/**
 * Reducer that tracks which tips are in a guide. Each guide is represented by
 * an array which contains the tip identifiers contained within that guide.
 *
 * @param {Array} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Array} Updated state.
 */

export function guides() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TRIGGER_GUIDE':
      return [].concat(_toConsumableArray(state), [action.tipIds]);
  }

  return state;
}
/**
 * Reducer that tracks whether or not tips are globally enabled.
 *
 * @param {boolean} state Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

export function areTipsEnabled() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DISABLE_TIPS':
      return false;

    case 'ENABLE_TIPS':
      return true;
  }

  return state;
}
/**
 * Reducer that tracks which tips have been dismissed. If the state object
 * contains a tip identifier, then that tip is dismissed.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

export function dismissedTips() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DISMISS_TIP':
      return _objectSpread({}, state, _defineProperty({}, action.id, true));

    case 'ENABLE_TIPS':
      return {};
  }

  return state;
}
var preferences = combineReducers({
  areTipsEnabled: areTipsEnabled,
  dismissedTips: dismissedTips
});
export default combineReducers({
  guides: guides,
  preferences: preferences
});
//# sourceMappingURL=reducer.js.map
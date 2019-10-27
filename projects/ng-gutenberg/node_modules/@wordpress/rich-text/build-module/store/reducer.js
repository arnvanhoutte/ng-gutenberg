import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * External dependencies
 */
import { keyBy, omit } from 'lodash';
/**
 * WordPress dependencies
 */

import { combineReducers } from '@wordpress/data';
/**
 * Reducer managing the format types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

export function formatTypes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_FORMAT_TYPES':
      return _objectSpread({}, state, keyBy(action.formatTypes, 'name'));

    case 'REMOVE_FORMAT_TYPES':
      return omit(state, action.names);
  }

  return state;
}
export default combineReducers({
  formatTypes: formatTypes
});
//# sourceMappingURL=reducer.js.map
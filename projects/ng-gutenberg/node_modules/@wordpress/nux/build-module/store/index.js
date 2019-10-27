/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';
/**
 * Internal dependencies
 */

import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
var store = registerStore('core/nux', {
  reducer: reducer,
  actions: actions,
  selectors: selectors,
  persist: ['preferences']
});
export default store;
//# sourceMappingURL=index.js.map
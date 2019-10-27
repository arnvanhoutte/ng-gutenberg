/**
 * External dependencies
 */
import { pick } from 'lodash';
/**
 * WordPress dependencies
 */

import { createHigherOrderComponent } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import { withBlockEditContext } from '../block-edit/context';
var withClientId = createHigherOrderComponent(function (WrappedComponent) {
  return withBlockEditContext(function (context) {
    return pick(context, ['clientId']);
  })(WrappedComponent);
}, 'withClientId');
export default withClientId;
//# sourceMappingURL=with-client-id.js.map
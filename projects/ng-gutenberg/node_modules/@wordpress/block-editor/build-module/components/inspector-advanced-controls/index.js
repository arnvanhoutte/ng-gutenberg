/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { ifBlockEditSelected } from '../block-edit/context';

var _createSlotFill = createSlotFill('InspectorAdvancedControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var InspectorAdvancedControls = ifBlockEditSelected(Fill);
InspectorAdvancedControls.Slot = Slot;
export default InspectorAdvancedControls;
//# sourceMappingURL=index.js.map
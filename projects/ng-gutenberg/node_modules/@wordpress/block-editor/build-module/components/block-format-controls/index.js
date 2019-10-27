/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { ifBlockEditSelected } from '../block-edit/context';

var _createSlotFill = createSlotFill('BlockFormatControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var BlockFormatControls = ifBlockEditSelected(Fill);
BlockFormatControls.Slot = Slot;
export default BlockFormatControls;
//# sourceMappingURL=index.js.map
/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { ifBlockEditSelected } from '../block-edit/context';

var _createSlotFill = createSlotFill('InspectorControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var InspectorControls = ifBlockEditSelected(Fill);
InspectorControls.Slot = Slot;
/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inspector-controls/README.md
 */

export default InspectorControls;
//# sourceMappingURL=index.js.map
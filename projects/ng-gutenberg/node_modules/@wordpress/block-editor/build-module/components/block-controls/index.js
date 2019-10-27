import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { createSlotFill, Toolbar } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { ifBlockEditSelected } from '../block-edit/context';

var _createSlotFill = createSlotFill('BlockControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var BlockControlsFill = function BlockControlsFill(_ref) {
  var controls = _ref.controls,
      children = _ref.children;
  return createElement(Fill, null, createElement(Toolbar, {
    controls: controls
  }), children);
};

var BlockControls = ifBlockEditSelected(BlockControlsFill);
BlockControls.Slot = Slot;
export default BlockControls;
//# sourceMappingURL=index.js.map
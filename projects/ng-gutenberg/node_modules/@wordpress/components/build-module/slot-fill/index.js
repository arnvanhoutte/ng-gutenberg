import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Slot from './slot';
import Fill from './fill';
import Provider, { Consumer } from './context';
export { Slot };
export { Fill };
export { Provider, Consumer };
export function createSlotFill(name) {
  var FillComponent = function FillComponent(props) {
    return createElement(Fill, _extends({
      name: name
    }, props));
  };

  FillComponent.displayName = name + 'Fill';

  var SlotComponent = function SlotComponent(props) {
    return createElement(Slot, _extends({
      name: name
    }, props));
  };

  SlotComponent.displayName = name + 'Slot';
  return {
    Fill: FillComponent,
    Slot: SlotComponent
  };
}
//# sourceMappingURL=index.js.map
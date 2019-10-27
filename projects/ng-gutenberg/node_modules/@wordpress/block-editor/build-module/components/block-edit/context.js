import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { noop } from 'lodash';
/**
 * WordPress dependencies
 */

import { createContext } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

var _createContext = createContext({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: noop,
  clientId: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

export { Provider as BlockEditContextProvider };
/**
 * A Higher Order Component used to inject BlockEdit context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {Component} Enhanced component with injected context as props.
 */

export var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return createHigherOrderComponent(function (OriginalComponent) {
    return function (props) {
      return createElement(Consumer, null, function (context) {
        return createElement(OriginalComponent, _extends({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * A Higher Order Component used to render conditionally the wrapped
 * component only when the BlockEdit has selected state set.
 *
 * @param {Component} OriginalComponent Component to wrap.
 *
 * @return {Component} Component which renders only when the BlockEdit is selected.
 */

export var ifBlockEditSelected = createHigherOrderComponent(function (OriginalComponent) {
  return function (props) {
    return createElement(Consumer, null, function (_ref) {
      var isSelected = _ref.isSelected;
      return isSelected && createElement(OriginalComponent, props);
    });
  };
}, 'ifBlockEditSelected');
//# sourceMappingURL=context.js.map
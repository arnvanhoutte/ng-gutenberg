import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * WordPress dependencies
 */
import { createElement } from '@wordpress/element';
export var Circle = function Circle(props) {
  return createElement('circle', props);
};
export var G = function G(props) {
  return createElement('g', props);
};
export var Path = function Path(props) {
  return createElement('path', props);
};
export var Polygon = function Polygon(props) {
  return createElement('polygon', props);
};
export var Rect = function Rect(props) {
  return createElement('rect', props);
};
export var SVG = function SVG(props) {
  var appliedProps = _objectSpread({}, props, {
    role: 'img',
    'aria-hidden': 'true',
    focusable: 'false'
  }); // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements


  return createElement("svg", appliedProps);
};
//# sourceMappingURL=index.js.map
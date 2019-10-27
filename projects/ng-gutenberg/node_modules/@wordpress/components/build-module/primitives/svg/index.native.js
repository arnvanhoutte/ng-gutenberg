import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { Svg } from 'react-native-svg';
/**
 * Internal dependencies
 */

import styles from './style.scss';
export { Circle, G, Path, Polygon, Rect } from 'react-native-svg';
export var SVG = function SVG(props) {
  var stylesFromClasses = (props.className || '').split(' ').map(function (element) {
    return styles[element];
  }).filter(Boolean);
  var styleValues = Object.assign.apply(Object, [{}, props.style].concat(_toConsumableArray(stylesFromClasses)));

  var safeProps = _objectSpread({}, props, {
    style: styleValues
  });

  return createElement(Svg //We want to re-render when style color is changed
  , _extends({
    key: safeProps.style.color,
    height: "100%",
    width: "100%"
  }, safeProps));
};
//# sourceMappingURL=index.native.js.map
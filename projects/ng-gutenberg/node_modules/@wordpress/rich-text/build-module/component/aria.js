/**
 * External dependencies
 */
import { difference, isEqual, isNil, keys, pickBy, startsWith } from 'lodash';

var isAriaPropName = function isAriaPropName(name) {
  return startsWith(name, 'aria-');
};

export var pickAriaProps = function pickAriaProps(props) {
  return pickBy(props, function (value, key) {
    return isAriaPropName(key) && !isNil(value);
  });
};
export var diffAriaProps = function diffAriaProps(props, nextProps) {
  var prevAriaKeys = keys(pickAriaProps(props));
  var nextAriaKeys = keys(pickAriaProps(nextProps));
  var removedKeys = difference(prevAriaKeys, nextAriaKeys);
  var updatedKeys = nextAriaKeys.filter(function (key) {
    return !isEqual(props[key], nextProps[key]);
  });
  return {
    removedKeys: removedKeys,
    updatedKeys: updatedKeys
  };
};
//# sourceMappingURL=aria.js.map
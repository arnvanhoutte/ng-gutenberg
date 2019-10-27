import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { KeyboardAvoidingView as IOSKeyboardAvoidingView, Dimensions } from 'react-native';
export var KeyboardAvoidingView = function KeyboardAvoidingView(_ref) {
  var parentHeight = _ref.parentHeight,
      otherProps = _objectWithoutProperties(_ref, ["parentHeight"]);

  var _Dimensions$get = Dimensions.get('window'),
      fullHeight = _Dimensions$get.height;

  var keyboardVerticalOffset = fullHeight - parentHeight;
  return createElement(IOSKeyboardAvoidingView, _extends({}, otherProps, {
    behavior: "padding",
    keyboardVerticalOffset: keyboardVerticalOffset
  }));
};
export default KeyboardAvoidingView;
//# sourceMappingURL=index.ios.js.map
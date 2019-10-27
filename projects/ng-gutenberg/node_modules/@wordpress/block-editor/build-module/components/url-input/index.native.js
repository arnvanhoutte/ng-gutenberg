import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { TextInput } from 'react-native';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { withInstanceId } from '@wordpress/compose';

var URLInput =
/*#__PURE__*/
function (_Component) {
  _inherits(URLInput, _Component);

  function URLInput() {
    _classCallCheck(this, URLInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(URLInput).apply(this, arguments));
  }

  _createClass(URLInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value,
          _this$props$autoFocus = _this$props.autoFocus,
          autoFocus = _this$props$autoFocus === void 0 ? true : _this$props$autoFocus,
          extraProps = _objectWithoutProperties(_this$props, ["value", "autoFocus"]);
      /* eslint-disable jsx-a11y/no-autofocus */


      return createElement(TextInput, _extends({
        autoFocus: autoFocus,
        editable: true,
        selectTextOnFocus: true,
        autoCapitalize: "none",
        autoCorrect: false,
        textContentType: "URL",
        value: value,
        onChangeText: this.props.onChange,
        placeholder: __('Paste URL')
      }, extraProps));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);

  return URLInput;
}(Component);

export default withInstanceId(URLInput);
//# sourceMappingURL=index.native.js.map
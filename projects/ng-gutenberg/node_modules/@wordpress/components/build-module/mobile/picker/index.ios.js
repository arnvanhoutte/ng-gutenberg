import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

/**
 * External dependencies
 */
import { ActionSheetIOS } from 'react-native';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

var Picker =
/*#__PURE__*/
function (_Component) {
  _inherits(Picker, _Component);

  function Picker() {
    _classCallCheck(this, Picker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Picker).apply(this, arguments));
  }

  _createClass(Picker, [{
    key: "presentPicker",
    value: function presentPicker() {
      var _this$props = this.props,
          options = _this$props.options,
          onChange = _this$props.onChange;
      var labels = options.map(function (_ref) {
        var label = _ref.label;
        return label;
      });
      var fullOptions = [__('Cancel')].concat(labels);
      ActionSheetIOS.showActionSheetWithOptions({
        options: fullOptions,
        cancelButtonIndex: 0
      }, function (buttonIndex) {
        if (buttonIndex === 0) {
          return;
        }

        var selected = options[buttonIndex - 1];
        onChange(selected.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Picker;
}(Component);

export default Picker;
//# sourceMappingURL=index.ios.js.map
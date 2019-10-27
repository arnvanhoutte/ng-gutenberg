import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { TextInput, Platform } from 'react-native';
/**
 * WordPress dependencies
 */

import { Component } from '@wordpress/element';
/**
 * Internal dependencies
 */

import styles from './style.scss';

var PlainText =
/*#__PURE__*/
function (_Component) {
  _inherits(PlainText, _Component);

  function PlainText() {
    var _this;

    _classCallCheck(this, PlainText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlainText).apply(this, arguments));
    _this.isIOS = Platform.OS === 'ios';
    return _this;
  }

  _createClass(PlainText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if isSelected is true, we should request the focus on this TextInput
      if (this._input.isFocused() === false && this._input.props.isSelected === true) {
        this.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.isSelected && prevProps.isSelected && this.isIOS) {
        this._input.blur();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this._input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return createElement(TextInput, _extends({}, this.props, {
        ref: function ref(x) {
          return _this2._input = x;
        },
        className: [styles['block-editor-plain-text'], this.props.className],
        onChange: function onChange(event) {
          _this2.props.onChange(event.nativeEvent.text);
        },
        onFocus: this.props.onFocus // always assign onFocus as a props
        ,
        onBlur: this.props.onBlur // always assign onBlur as a props
        ,
        fontFamily: this.props.fontFamily || styles['block-editor-plain-text'].fontFamily,
        fontSize: this.props.fontSize,
        fontWeight: this.props.fontWeight,
        fontStyle: this.props.fontStyle
      }));
    }
  }]);

  return PlainText;
}(Component);

export { PlainText as default };
//# sourceMappingURL=index.native.js.map
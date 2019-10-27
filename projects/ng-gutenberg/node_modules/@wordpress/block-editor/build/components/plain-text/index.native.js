"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactNative = require("react-native");

var _style = _interopRequireDefault(require("./style.scss"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var PlainText =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PlainText, _Component);

  function PlainText() {
    var _this;

    (0, _classCallCheck2.default)(this, PlainText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PlainText).apply(this, arguments));
    _this.isIOS = _reactNative.Platform.OS === 'ios';
    return _this;
  }

  (0, _createClass2.default)(PlainText, [{
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

      return (0, _element.createElement)(_reactNative.TextInput, (0, _extends2.default)({}, this.props, {
        ref: function ref(x) {
          return _this2._input = x;
        },
        className: [_style.default['block-editor-plain-text'], this.props.className],
        onChange: function onChange(event) {
          _this2.props.onChange(event.nativeEvent.text);
        },
        onFocus: this.props.onFocus // always assign onFocus as a props
        ,
        onBlur: this.props.onBlur // always assign onBlur as a props
        ,
        fontFamily: this.props.fontFamily || _style.default['block-editor-plain-text'].fontFamily,
        fontSize: this.props.fontSize,
        fontWeight: this.props.fontWeight,
        fontStyle: this.props.fontStyle
      }));
    }
  }]);
  return PlainText;
}(_element.Component);

exports.default = PlainText;
//# sourceMappingURL=index.native.js.map
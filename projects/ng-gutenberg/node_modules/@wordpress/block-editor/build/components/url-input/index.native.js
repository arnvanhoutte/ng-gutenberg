"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactNative = require("react-native");

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var URLInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(URLInput, _Component);

  function URLInput() {
    (0, _classCallCheck2.default)(this, URLInput);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(URLInput).apply(this, arguments));
  }

  (0, _createClass2.default)(URLInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value,
          _this$props$autoFocus = _this$props.autoFocus,
          autoFocus = _this$props$autoFocus === void 0 ? true : _this$props$autoFocus,
          extraProps = (0, _objectWithoutProperties2.default)(_this$props, ["value", "autoFocus"]);
      /* eslint-disable jsx-a11y/no-autofocus */

      return (0, _element.createElement)(_reactNative.TextInput, (0, _extends2.default)({
        autoFocus: autoFocus,
        editable: true,
        selectTextOnFocus: true,
        autoCapitalize: "none",
        autoCorrect: false,
        textContentType: "URL",
        value: value,
        onChangeText: this.props.onChange,
        placeholder: (0, _i18n.__)('Paste URL')
      }, extraProps));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);
  return URLInput;
}(_element.Component);

var _default = (0, _compose.withInstanceId)(URLInput);

exports.default = _default;
//# sourceMappingURL=index.native.js.map
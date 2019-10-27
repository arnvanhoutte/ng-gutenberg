"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactNative = require("react-native");

var _i18n = require("@wordpress/i18n");

var _element = require("@wordpress/element");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var Picker =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Picker, _Component);

  function Picker() {
    (0, _classCallCheck2.default)(this, Picker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Picker).apply(this, arguments));
  }

  (0, _createClass2.default)(Picker, [{
    key: "presentPicker",
    value: function presentPicker() {
      var _this$props = this.props,
          options = _this$props.options,
          onChange = _this$props.onChange;
      var labels = options.map(function (_ref) {
        var label = _ref.label;
        return label;
      });
      var fullOptions = [(0, _i18n.__)('Cancel')].concat(labels);

      _reactNative.ActionSheetIOS.showActionSheetWithOptions({
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
}(_element.Component);

var _default = Picker;
exports.default = _default;
//# sourceMappingURL=index.ios.js.map
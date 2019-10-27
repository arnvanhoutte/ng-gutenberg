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

var _element = require("@wordpress/element");

/**
 * WordPress dependencies
 */
var BlockCrashBoundary =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BlockCrashBoundary, _Component);

  function BlockCrashBoundary() {
    var _this;

    (0, _classCallCheck2.default)(this, BlockCrashBoundary);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockCrashBoundary).apply(this, arguments));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  (0, _createClass2.default)(BlockCrashBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.props.onError(error);
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }]);
  return BlockCrashBoundary;
}(_element.Component);

var _default = BlockCrashBoundary;
exports.default = _default;
//# sourceMappingURL=block-crash-boundary.js.map
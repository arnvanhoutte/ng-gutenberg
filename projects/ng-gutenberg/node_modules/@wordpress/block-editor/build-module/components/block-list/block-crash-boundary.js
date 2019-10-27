import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

var BlockCrashBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockCrashBoundary, _Component);

  function BlockCrashBoundary() {
    var _this;

    _classCallCheck(this, BlockCrashBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlockCrashBoundary).apply(this, arguments));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(BlockCrashBoundary, [{
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
}(Component);

export default BlockCrashBoundary;
//# sourceMappingURL=block-crash-boundary.js.map
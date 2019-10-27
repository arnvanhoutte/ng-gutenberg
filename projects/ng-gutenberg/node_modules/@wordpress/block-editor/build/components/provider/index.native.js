"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */

/**
 * Higher-order component which renders the original component with the current
 * registry context passed as its `registry` prop.
 *
 * @param {WPComponent} OriginalComponent Original component.
 *
 * @return {WPComponent} Enhanced component.
 */
var withRegistry = (0, _compose.createHigherOrderComponent)(function (OriginalComponent) {
  return function (props) {
    return (0, _element.createElement)(_data.RegistryConsumer, null, function (registry) {
      return (0, _element.createElement)(OriginalComponent, (0, _extends2.default)({}, props, {
        registry: registry
      }));
    });
  };
}, 'withRegistry');

var BlockEditorProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BlockEditorProvider, _Component);

  function BlockEditorProvider() {
    (0, _classCallCheck2.default)(this, BlockEditorProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockEditorProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(BlockEditorProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.updateSettings(this.props.settings);
      this.props.resetBlocks(this.props.value);
      this.attachChangeObserver(this.props.registry);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          settings = _this$props.settings,
          updateSettings = _this$props.updateSettings,
          value = _this$props.value,
          resetBlocks = _this$props.resetBlocks,
          registry = _this$props.registry;

      if (settings !== prevProps.settings) {
        updateSettings(settings);
      }

      if (registry !== prevProps.registry) {
        this.attachChangeObserver(registry);
      }

      if (this.isSyncingOutcomingValue) {
        this.isSyncingOutcomingValue = false;
      } else if (value !== prevProps.value) {
        this.isSyncingIncomingValue = true;
        resetBlocks(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
    /**
     * Given a registry object, overrides the default dispatch behavior for the
     * `core/block-editor` store to interpret a state change and decide whether
     * we should call `onChange` or `onInput` depending on whether the change
     * is persistent or not.
     *
     * This needs to be done synchronously after state changes (instead of using
     * `componentDidUpdate`) in order to avoid batching these changes.
     *
     * @param {WPDataRegistry} registry     Registry from which block editor
     *                                      dispatch is to be overriden.
     */

  }, {
    key: "attachChangeObserver",
    value: function attachChangeObserver(registry) {
      var _this = this;

      if (this.unsubscribe) {
        this.unsubscribe();
      }

      var _registry$select = registry.select('core/block-editor'),
          getBlocks = _registry$select.getBlocks,
          isLastBlockChangePersistent = _registry$select.isLastBlockChangePersistent;

      var blocks = getBlocks();
      var isPersistent = isLastBlockChangePersistent();
      this.unsubscribe = registry.subscribe(function () {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            onInput = _this$props2.onInput;
        var newBlocks = getBlocks();
        var newIsPersistent = isLastBlockChangePersistent();

        if (newBlocks !== blocks && _this.isSyncingIncomingValue) {
          _this.isSyncingIncomingValue = false;
          blocks = newBlocks;
          isPersistent = newIsPersistent;
          return;
        }

        if (newBlocks !== blocks || // This happens when a previous input is explicitely marked as persistent.
        newIsPersistent && !isPersistent) {
          blocks = newBlocks;
          isPersistent = newIsPersistent;
          _this.isSyncingOutcomingValue = true;

          if (isPersistent) {
            onChange(blocks);
          } else {
            onInput(blocks);
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return (0, _element.createElement)(_components.SlotFillProvider, null, children);
    }
  }]);
  return BlockEditorProvider;
}(_element.Component);

var _default = (0, _compose.compose)([(0, _data.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      updateSettings = _dispatch.updateSettings,
      resetBlocks = _dispatch.resetBlocks;

  return {
    updateSettings: updateSettings,
    resetBlocks: resetBlocks
  };
}), withRegistry])(BlockEditorProvider);

exports.default = _default;
//# sourceMappingURL=index.native.js.map
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { SlotFillProvider } from '@wordpress/components';
import { withDispatch, RegistryConsumer } from '@wordpress/data';
import { createHigherOrderComponent, compose } from '@wordpress/compose';
/**
 * Higher-order component which renders the original component with the current
 * registry context passed as its `registry` prop.
 *
 * @param {WPComponent} OriginalComponent Original component.
 *
 * @return {WPComponent} Enhanced component.
 */

var withRegistry = createHigherOrderComponent(function (OriginalComponent) {
  return function (props) {
    return createElement(RegistryConsumer, null, function (registry) {
      return createElement(OriginalComponent, _extends({}, props, {
        registry: registry
      }));
    });
  };
}, 'withRegistry');

var BlockEditorProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockEditorProvider, _Component);

  function BlockEditorProvider() {
    _classCallCheck(this, BlockEditorProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlockEditorProvider).apply(this, arguments));
  }

  _createClass(BlockEditorProvider, [{
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
      return createElement(SlotFillProvider, null, children);
    }
  }]);

  return BlockEditorProvider;
}(Component);

export default compose([withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      updateSettings = _dispatch.updateSettings,
      resetBlocks = _dispatch.resetBlocks;

  return {
    updateSettings: updateSettings,
    resetBlocks: resetBlocks
  };
}), withRegistry])(BlockEditorProvider);
//# sourceMappingURL=index.native.js.map
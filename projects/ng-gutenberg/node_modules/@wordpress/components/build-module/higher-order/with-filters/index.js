import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { debounce, without } from 'lodash';
/**
 * WordPress dependencies
 */

import { Component } from '@wordpress/element';
import { addAction, applyFilters, removeAction } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
var ANIMATION_FRAME_PERIOD = 16;
/**
 * Creates a higher-order component which adds filtering capability to the
 * wrapped component. Filters get applied when the original component is about
 * to be mounted. When a filter is added or removed that matches the hook name,
 * the wrapped component re-renders.
 *
 * @param {string} hookName Hook name exposed to be used by filters.
 *
 * @return {Function} Higher-order component factory.
 */

export default function withFilters(hookName) {
  return createHigherOrderComponent(function (OriginalComponent) {
    var namespace = 'core/with-filters/' + hookName;
    /**
     * The component definition with current filters applied. Each instance
     * reuse this shared reference as an optimization to avoid excessive
     * calls to `applyFilters` when many instances exist.
     *
     * @type {?Component}
     */

    var FilteredComponent;
    /**
     * Initializes the FilteredComponent variable once, if not already
     * assigned. Subsequent calls are effectively a noop.
     */

    function ensureFilteredComponent() {
      if (FilteredComponent === undefined) {
        FilteredComponent = applyFilters(hookName, OriginalComponent);
      }
    }

    var FilteredComponentRenderer =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FilteredComponentRenderer, _Component);

      function FilteredComponentRenderer() {
        var _this;

        _classCallCheck(this, FilteredComponentRenderer);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FilteredComponentRenderer).apply(this, arguments));
        ensureFilteredComponent();
        return _this;
      }

      _createClass(FilteredComponentRenderer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          FilteredComponentRenderer.instances.push(this); // If there were previously no mounted instances for components
          // filtered on this hook, add the hook handler.

          if (FilteredComponentRenderer.instances.length === 1) {
            addAction('hookRemoved', namespace, onHooksUpdated);
            addAction('hookAdded', namespace, onHooksUpdated);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          FilteredComponentRenderer.instances = without(FilteredComponentRenderer.instances, this); // If this was the last of the mounted components filtered on
          // this hook, remove the hook handler.

          if (FilteredComponentRenderer.instances.length === 0) {
            removeAction('hookRemoved', namespace);
            removeAction('hookAdded', namespace);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return createElement(FilteredComponent, this.props);
        }
      }]);

      return FilteredComponentRenderer;
    }(Component);

    FilteredComponentRenderer.instances = [];
    /**
     * Updates the FilteredComponent definition, forcing a render for each
     * mounted instance. This occurs a maximum of once per animation frame.
     */

    var throttledForceUpdate = debounce(function () {
      // Recreate the filtered component, only after delay so that it's
      // computed once, even if many filters added.
      FilteredComponent = applyFilters(hookName, OriginalComponent); // Force each instance to render.

      FilteredComponentRenderer.instances.forEach(function (instance) {
        instance.forceUpdate();
      });
    }, ANIMATION_FRAME_PERIOD);
    /**
     * When a filter is added or removed for the matching hook name, each
     * mounted instance should re-render with the new filters having been
     * applied to the original component.
     *
     * @param {string} updatedHookName Name of the hook that was updated.
     */

    function onHooksUpdated(updatedHookName) {
      if (updatedHookName === hookName) {
        throttledForceUpdate();
      }
    }

    return FilteredComponentRenderer;
  }, 'withFilters');
}
//# sourceMappingURL=index.js.map
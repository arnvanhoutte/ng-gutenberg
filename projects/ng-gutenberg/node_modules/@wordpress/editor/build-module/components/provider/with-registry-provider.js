import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { withRegistry, createRegistry, RegistryProvider } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { storeConfig as blockEditorStoreConfig } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */

import { storeConfig } from '../../store';
import applyMiddlewares from '../../store/middlewares';
var withRegistryProvider = createHigherOrderComponent(function (WrappedComponent) {
  return withRegistry(function (props) {
    var _props$useSubRegistry = props.useSubRegistry,
        useSubRegistry = _props$useSubRegistry === void 0 ? true : _props$useSubRegistry,
        registry = props.registry,
        additionalProps = _objectWithoutProperties(props, ["useSubRegistry", "registry"]);

    if (!useSubRegistry) {
      return createElement(WrappedComponent, additionalProps);
    }

    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        subRegistry = _useState2[0],
        setSubRegistry = _useState2[1];

    useEffect(function () {
      var newRegistry = createRegistry({
        'core/block-editor': blockEditorStoreConfig
      }, registry);
      var store = newRegistry.registerStore('core/editor', storeConfig); // This should be removed after the refactoring of the effects to controls.

      applyMiddlewares(store);
      setSubRegistry(newRegistry);
    }, [registry]);

    if (!subRegistry) {
      return null;
    }

    return createElement(RegistryProvider, {
      value: subRegistry
    }, createElement(WrappedComponent, additionalProps));
  });
}, 'withRegistryProvider');
export default withRegistryProvider;
//# sourceMappingURL=with-registry-provider.js.map
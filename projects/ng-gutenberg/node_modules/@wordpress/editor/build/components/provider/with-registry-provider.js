"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _blockEditor = require("@wordpress/block-editor");

var _store = require("../../store");

var _middlewares = _interopRequireDefault(require("../../store/middlewares"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var withRegistryProvider = (0, _compose.createHigherOrderComponent)(function (WrappedComponent) {
  return (0, _data.withRegistry)(function (props) {
    var _props$useSubRegistry = props.useSubRegistry,
        useSubRegistry = _props$useSubRegistry === void 0 ? true : _props$useSubRegistry,
        registry = props.registry,
        additionalProps = (0, _objectWithoutProperties2.default)(props, ["useSubRegistry", "registry"]);

    if (!useSubRegistry) {
      return (0, _element.createElement)(WrappedComponent, additionalProps);
    }

    var _useState = (0, _element.useState)(null),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        subRegistry = _useState2[0],
        setSubRegistry = _useState2[1];

    (0, _element.useEffect)(function () {
      var newRegistry = (0, _data.createRegistry)({
        'core/block-editor': _blockEditor.storeConfig
      }, registry);
      var store = newRegistry.registerStore('core/editor', _store.storeConfig); // This should be removed after the refactoring of the effects to controls.

      (0, _middlewares.default)(store);
      setSubRegistry(newRegistry);
    }, [registry]);

    if (!subRegistry) {
      return null;
    }

    return (0, _element.createElement)(_data.RegistryProvider, {
      value: subRegistry
    }, (0, _element.createElement)(WrappedComponent, additionalProps));
  });
}, 'withRegistryProvider');
var _default = withRegistryProvider;
exports.default = _default;
//# sourceMappingURL=with-registry-provider.js.map
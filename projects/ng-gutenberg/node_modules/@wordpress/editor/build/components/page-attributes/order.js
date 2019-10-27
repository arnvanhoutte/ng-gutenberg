"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PageAttributesOrder = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var PageAttributesOrder = (0, _compose.withState)({
  orderInput: null
})(function (_ref) {
  var onUpdateOrder = _ref.onUpdateOrder,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 0 : _ref$order,
      orderInput = _ref.orderInput,
      setState = _ref.setState;

  var setUpdatedOrder = function setUpdatedOrder(value) {
    setState({
      orderInput: value
    });
    var newOrder = Number(value);

    if (Number.isInteger(newOrder) && (0, _lodash.invoke)(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  var value = orderInput === null ? order : orderInput;
  return (0, _element.createElement)(_components.TextControl, {
    className: "editor-page-attributes__order",
    type: "number",
    label: (0, _i18n.__)('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: function onBlur() {
      setState({
        orderInput: null
      });
    }
  });
});
exports.PageAttributesOrder = PageAttributesOrder;

function PageAttributesOrderWithChecks(props) {
  return (0, _element.createElement)(_postTypeSupportCheck.default, {
    supportKeys: "page-attributes"
  }, (0, _element.createElement)(PageAttributesOrder, props));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdateOrder: function onUpdateOrder(order) {
      dispatch('core/editor').editPost({
        menu_order: order
      });
    }
  };
})])(PageAttributesOrderWithChecks);

exports.default = _default;
//# sourceMappingURL=order.js.map
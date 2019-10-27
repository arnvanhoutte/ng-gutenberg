import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { invoke } from 'lodash';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose, withState } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import PostTypeSupportCheck from '../post-type-support-check';
export var PageAttributesOrder = withState({
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

    if (Number.isInteger(newOrder) && invoke(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  var value = orderInput === null ? order : orderInput;
  return createElement(TextControl, {
    className: "editor-page-attributes__order",
    type: "number",
    label: __('Order'),
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

function PageAttributesOrderWithChecks(props) {
  return createElement(PostTypeSupportCheck, {
    supportKeys: "page-attributes"
  }, createElement(PageAttributesOrder, props));
}

export default compose([withSelect(function (select) {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdateOrder: function onUpdateOrder(order) {
      dispatch('core/editor').editPost({
        menu_order: order
      });
    }
  };
})])(PageAttributesOrderWithChecks);
//# sourceMappingURL=order.js.map
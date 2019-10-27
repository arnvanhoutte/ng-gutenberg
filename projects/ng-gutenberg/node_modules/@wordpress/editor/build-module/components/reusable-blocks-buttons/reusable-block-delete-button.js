import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { noop } from 'lodash';
/**
 * WordPress dependencies
 */

import { compose } from '@wordpress/compose';
import { MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { isReusableBlock } from '@wordpress/blocks';
import { withSelect, withDispatch } from '@wordpress/data';
export function ReusableBlockDeleteButton(_ref) {
  var isVisible = _ref.isVisible,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete;

  if (!isVisible) {
    return null;
  }

  return createElement(MenuItem, {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "no",
    disabled: isDisabled,
    onClick: function onClick() {
      return onDelete();
    }
  }, __('Remove from Reusable Blocks'));
}
export default compose([withSelect(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/editor'),
      getReusableBlock = _select3.__experimentalGetReusableBlock;

  var block = getBlock(clientId);
  var reusableBlock = block && isReusableBlock(block) ? getReusableBlock(block.attributes.ref) : null;
  return {
    isVisible: !!reusableBlock && !!canUser('delete', 'blocks', reusableBlock.id),
    isDisabled: reusableBlock && reusableBlock.isTemporary
  };
}), withDispatch(function (dispatch, _ref3, _ref4) {
  var clientId = _ref3.clientId,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? noop : _ref3$onToggle;
  var select = _ref4.select;

  var _dispatch = dispatch('core/editor'),
      deleteReusableBlock = _dispatch.__experimentalDeleteReusableBlock;

  var _select4 = select('core/block-editor'),
      getBlock = _select4.getBlock;

  return {
    onDelete: function onDelete() {
      // TODO: Make this a <Confirm /> component or similar
      // eslint-disable-next-line no-alert
      var hasConfirmed = window.confirm(__('Are you sure you want to delete this Reusable Block?\n\n' + 'It will be permanently removed from all posts and pages that use it.'));

      if (hasConfirmed) {
        var block = getBlock(clientId);
        deleteReusableBlock(block.attributes.ref);
        onToggle();
      }
    }
  };
})])(ReusableBlockDeleteButton);
//# sourceMappingURL=reusable-block-delete-button.js.map
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { filter, isEmpty } from 'lodash';
/**
 * WordPress dependencies
 */

import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { IconButton } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { withDispatch, withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import BlockIcon from '../block-icon';

function InserterWithShortcuts(_ref) {
  var items = _ref.items,
      isLocked = _ref.isLocked,
      onInsert = _ref.onInsert;

  if (isLocked) {
    return null;
  }

  var itemsWithoutDefaultBlock = filter(items, function (item) {
    return !item.isDisabled && (item.name !== getDefaultBlockName() || !isEmpty(item.initialAttributes));
  }).slice(0, 3);
  return createElement("div", {
    className: "editor-inserter-with-shortcuts block-editor-inserter-with-shortcuts"
  }, itemsWithoutDefaultBlock.map(function (item) {
    return createElement(IconButton, {
      key: item.id,
      className: "editor-inserter-with-shortcuts__block block-editor-inserter-with-shortcuts__block",
      onClick: function onClick() {
        return onInsert(item);
      } // translators: %s: block title/name to be added
      ,
      label: sprintf(__('Add %s'), item.title),
      icon: createElement(BlockIcon, {
        icon: item.icon
      })
    });
  }));
}

export default compose(withSelect(function (select, _ref2) {
  var rootClientId = _ref2.rootClientId;

  var _select = select('core/block-editor'),
      getInserterItems = _select.getInserterItems,
      getTemplateLock = _select.getTemplateLock;

  return {
    items: getInserterItems(rootClientId),
    isLocked: !!getTemplateLock(rootClientId)
  };
}), withDispatch(function (dispatch, ownProps) {
  var clientId = ownProps.clientId,
      rootClientId = ownProps.rootClientId;
  return {
    onInsert: function onInsert(_ref3) {
      var name = _ref3.name,
          initialAttributes = _ref3.initialAttributes;
      var block = createBlock(name, initialAttributes);

      if (clientId) {
        dispatch('core/block-editor').replaceBlocks(clientId, block);
      } else {
        dispatch('core/block-editor').insertBlock(block, undefined, rootClientId);
      }
    }
  };
}))(InserterWithShortcuts);
//# sourceMappingURL=index.js.map
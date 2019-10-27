import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { ifCondition, compose } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import BlockTypesList from '../block-types-list';
import BlockIcon from '../block-icon';

function ChildBlocks(_ref) {
  var rootBlockIcon = _ref.rootBlockIcon,
      rootBlockTitle = _ref.rootBlockTitle,
      items = _ref.items,
      props = _objectWithoutProperties(_ref, ["rootBlockIcon", "rootBlockTitle", "items"]);

  return createElement("div", {
    className: "editor-inserter__child-blocks block-editor-inserter__child-blocks"
  }, (rootBlockIcon || rootBlockTitle) && createElement("div", {
    className: "editor-inserter__parent-block-header block-editor-inserter__parent-block-header"
  }, createElement(BlockIcon, {
    icon: rootBlockIcon,
    showColors: true
  }), rootBlockTitle && createElement("h2", null, rootBlockTitle)), createElement(BlockTypesList, _extends({
    items: items
  }, props)));
}

export default compose(ifCondition(function (_ref2) {
  var items = _ref2.items;
  return items && items.length > 0;
}), withSelect(function (select, _ref3) {
  var rootClientId = _ref3.rootClientId;

  var _select = select('core/blocks'),
      getBlockType = _select.getBlockType;

  var _select2 = select('core/block-editor'),
      getBlockName = _select2.getBlockName;

  var rootBlockName = getBlockName(rootClientId);
  var rootBlockType = getBlockType(rootBlockName);
  return {
    rootBlockTitle: rootBlockType && rootBlockType.title,
    rootBlockIcon: rootBlockType && rootBlockType.icon
  };
}))(ChildBlocks);
//# sourceMappingURL=child-blocks.js.map
import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */

import { withFilters } from '@wordpress/components';
import { getBlockDefaultClassName, hasBlockSupport, getBlockType } from '@wordpress/blocks';
export var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      attributes = _props$attributes === void 0 ? {} : _props$attributes,
      name = props.name;
  var blockType = getBlockType(name);

  if (!blockType) {
    return null;
  } // Generate a class name for the block's editable form


  var generatedClassName = hasBlockSupport(blockType, 'className', true) ? getBlockDefaultClassName(name) : null;
  var className = classnames(generatedClassName, attributes.className); // `edit` and `save` are functions or components describing the markup
  // with which a block is displayed. If `blockType` is valid, assign
  // them preferentially as the render value for the block.

  var Component = blockType.edit || blockType.save;
  return createElement(Component, _extends({}, props, {
    className: className
  }));
};
export default withFilters('editor.BlockEdit')(Edit);
//# sourceMappingURL=edit.js.map
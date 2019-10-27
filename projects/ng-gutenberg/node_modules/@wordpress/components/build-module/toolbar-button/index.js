import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * Internal dependencies
 */

import IconButton from '../icon-button';
import ToolbarButtonContainer from './toolbar-button-container';

function ToolbarButton(_ref) {
  var containerClassName = _ref.containerClassName,
      icon = _ref.icon,
      title = _ref.title,
      shortcut = _ref.shortcut,
      subscript = _ref.subscript,
      _onClick = _ref.onClick,
      className = _ref.className,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      extraProps = _ref.extraProps,
      children = _ref.children;
  return createElement(ToolbarButtonContainer, {
    className: containerClassName
  }, createElement(IconButton, _extends({
    icon: icon,
    label: title,
    shortcut: shortcut,
    "data-subscript": subscript,
    onClick: function onClick(event) {
      event.stopPropagation();

      _onClick();
    },
    className: classnames('components-toolbar__control', className, {
      'is-active': isActive
    }),
    "aria-pressed": isActive,
    disabled: isDisabled
  }, extraProps)), children);
}

export default ToolbarButton;
//# sourceMappingURL=index.js.map
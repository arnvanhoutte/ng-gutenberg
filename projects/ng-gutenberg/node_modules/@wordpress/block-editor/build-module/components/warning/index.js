import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */

import { Children } from '@wordpress/element';
import { Dropdown, IconButton, MenuGroup, MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function Warning(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      children = _ref.children,
      secondaryActions = _ref.secondaryActions;
  return createElement("div", {
    className: classnames(className, 'editor-warning block-editor-warning')
  }, createElement("div", {
    className: "editor-warning__contents block-editor-warning__contents"
  }, createElement("p", {
    className: "editor-warning__message block-editor-warning__message"
  }, children), Children.count(actions) > 0 && createElement("div", {
    className: "editor-warning__actions block-editor-warning__actions"
  }, Children.map(actions, function (action, i) {
    return createElement("span", {
      key: i,
      className: "editor-warning__action block-editor-warning__action"
    }, action);
  }))), secondaryActions && createElement(Dropdown, {
    className: "editor-warning__secondary block-editor-warning__secondary",
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return createElement(IconButton, {
        icon: "ellipsis",
        label: __('More options'),
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent() {
      return createElement(MenuGroup, null, secondaryActions.map(function (item, pos) {
        return createElement(MenuItem, {
          onClick: item.onClick,
          key: pos
        }, item.title);
      }));
    }
  }));
}

export default Warning;
//# sourceMappingURL=index.js.map
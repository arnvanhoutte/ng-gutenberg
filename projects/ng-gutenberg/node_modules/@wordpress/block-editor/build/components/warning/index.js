"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function Warning(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      children = _ref.children,
      secondaryActions = _ref.secondaryActions;
  return (0, _element.createElement)("div", {
    className: (0, _classnames.default)(className, 'editor-warning block-editor-warning')
  }, (0, _element.createElement)("div", {
    className: "editor-warning__contents block-editor-warning__contents"
  }, (0, _element.createElement)("p", {
    className: "editor-warning__message block-editor-warning__message"
  }, children), _element.Children.count(actions) > 0 && (0, _element.createElement)("div", {
    className: "editor-warning__actions block-editor-warning__actions"
  }, _element.Children.map(actions, function (action, i) {
    return (0, _element.createElement)("span", {
      key: i,
      className: "editor-warning__action block-editor-warning__action"
    }, action);
  }))), secondaryActions && (0, _element.createElement)(_components.Dropdown, {
    className: "editor-warning__secondary block-editor-warning__secondary",
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return (0, _element.createElement)(_components.IconButton, {
        icon: "ellipsis",
        label: (0, _i18n.__)('More options'),
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent() {
      return (0, _element.createElement)(_components.MenuGroup, null, secondaryActions.map(function (item, pos) {
        return (0, _element.createElement)(_components.MenuItem, {
          onClick: item.onClick,
          key: pos
        }, item.title);
      }));
    }
  }));
}

var _default = Warning;
exports.default = _default;
//# sourceMappingURL=index.js.map
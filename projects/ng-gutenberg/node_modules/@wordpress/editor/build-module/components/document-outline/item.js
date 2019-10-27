import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */

import { BlockTitle } from '@wordpress/block-editor';

var TableOfContentsItem = function TableOfContentsItem(_ref) {
  var children = _ref.children,
      isValid = _ref.isValid,
      level = _ref.level,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? [] : _ref$path,
      href = _ref.href,
      onSelect = _ref.onSelect;
  return createElement("li", {
    className: classnames('document-outline__item', "is-".concat(level.toLowerCase()), {
      'is-invalid': !isValid
    })
  }, createElement("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect
  }, createElement("span", {
    className: "document-outline__emdash",
    "aria-hidden": "true"
  }), // path is an array of nodes that are ancestors of the heading starting in the top level node.
  // This mapping renders each ancestor to make it easier for the user to know where the headings are nested.
  path.map(function (_ref2, index) {
    var clientId = _ref2.clientId;
    return createElement("strong", {
      key: index,
      className: "document-outline__level"
    }, createElement(BlockTitle, {
      clientId: clientId
    }));
  }), createElement("strong", {
    className: "document-outline__level"
  }, level), createElement("span", {
    className: "document-outline__item-content"
  }, children)));
};

export default TableOfContentsItem;
//# sourceMappingURL=item.js.map
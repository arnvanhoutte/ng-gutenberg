"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _dom = require("@wordpress/dom");

/**
 * WordPress dependencies
 */

/**
 * Removes iframes.
 *
 * @param {Node} node The node to check.
 *
 * @return {void}
 */
function _default(node) {
  if (node.nodeName === 'IFRAME') {
    (0, _dom.remove)(node);
  }
}
//# sourceMappingURL=iframe-remover.js.map
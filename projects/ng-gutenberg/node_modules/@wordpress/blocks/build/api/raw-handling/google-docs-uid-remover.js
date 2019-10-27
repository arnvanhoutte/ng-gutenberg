"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _dom = require("@wordpress/dom");

/**
 * WordPress dependencies
 */
function _default(node) {
  if (!node.id || node.id.indexOf('docs-internal-guid-') !== 0) {
    return;
  }

  (0, _dom.unwrap)(node);
}
//# sourceMappingURL=google-docs-uid-remover.js.map
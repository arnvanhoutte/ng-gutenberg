"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(node) {
  if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'NOSCRIPT' && node.nodeName !== 'TEMPLATE' && node.nodeName !== 'STYLE') {
    return;
  }

  node.parentNode.removeChild(node);
}
//# sourceMappingURL=head-remover.js.map
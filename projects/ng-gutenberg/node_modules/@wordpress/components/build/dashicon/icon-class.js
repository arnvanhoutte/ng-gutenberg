"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconClassName = void 0;

var getIconClassName = function getIconClassName(icon, className) {
  return ['dashicon', 'dashicons-' + icon, className].filter(Boolean).join(' ');
};

exports.getIconClassName = getIconClassName;
//# sourceMappingURL=icon-class.js.map
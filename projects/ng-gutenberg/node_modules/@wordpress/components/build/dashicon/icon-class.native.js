"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconClassName = void 0;

var getIconClassName = function getIconClassName(icon, className, ariaPressed) {
  return [ariaPressed ? 'dashicon-active' : 'dashicon', 'dashicons-' + icon, className].filter(Boolean).join(' ');
};

exports.getIconClassName = getIconClassName;
//# sourceMappingURL=icon-class.native.js.map
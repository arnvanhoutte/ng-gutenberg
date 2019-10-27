export var getIconClassName = function getIconClassName(icon, className, ariaPressed) {
  return [ariaPressed ? 'dashicon-active' : 'dashicon', 'dashicons-' + icon, className].filter(Boolean).join(' ');
};
//# sourceMappingURL=icon-class.native.js.map
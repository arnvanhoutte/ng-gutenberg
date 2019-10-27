"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Clear the a11y-speak-region elements.
 */
var clear = function clear() {
  var regions = document.querySelectorAll('.a11y-speak-region');

  for (var i = 0; i < regions.length; i++) {
    regions[i].textContent = '';
  }
};

var _default = clear;
exports.default = _default;
//# sourceMappingURL=clear.js.map
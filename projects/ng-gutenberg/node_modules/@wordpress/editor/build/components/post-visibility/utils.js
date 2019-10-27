"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibilityOptions = void 0;

var _i18n = require("@wordpress/i18n");

/**
 * WordPress dependencies
 */
var visibilityOptions = [{
  value: 'public',
  label: (0, _i18n.__)('Public'),
  info: (0, _i18n.__)('Visible to everyone.')
}, {
  value: 'private',
  label: (0, _i18n.__)('Private'),
  info: (0, _i18n.__)('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: (0, _i18n.__)('Password Protected'),
  info: (0, _i18n.__)('Protected with a password you choose. Only those with the password can view this post.')
}];
exports.visibilityOptions = visibilityOptions;
//# sourceMappingURL=utils.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextEditorGlobalKeyboardShortcuts;

var _element = require("@wordpress/element");

var _saveShortcut = _interopRequireDefault(require("./save-shortcut"));

/**
 * Internal dependencies
 */
function TextEditorGlobalKeyboardShortcuts() {
  return (0, _element.createElement)(_saveShortcut.default, null);
}
//# sourceMappingURL=text-editor-shortcuts.js.map
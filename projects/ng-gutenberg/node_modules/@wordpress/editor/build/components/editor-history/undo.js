"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _keycodes = require("@wordpress/keycodes");

/**
 * WordPress dependencies
 */
function EditorHistoryUndo(_ref) {
  var hasUndo = _ref.hasUndo,
      undo = _ref.undo;
  return (0, _element.createElement)(_components.IconButton, {
    icon: "undo",
    label: (0, _i18n.__)('Undo'),
    shortcut: _keycodes.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    hasUndo: select('core/editor').hasEditorUndo()
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    undo: dispatch('core/editor').undo
  };
})])(EditorHistoryUndo);

exports.default = _default;
//# sourceMappingURL=undo.js.map
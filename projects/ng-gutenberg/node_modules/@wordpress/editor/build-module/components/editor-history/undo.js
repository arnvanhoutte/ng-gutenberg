import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { displayShortcut } from '@wordpress/keycodes';

function EditorHistoryUndo(_ref) {
  var hasUndo = _ref.hasUndo,
      undo = _ref.undo;
  return createElement(IconButton, {
    icon: "undo",
    label: __('Undo'),
    shortcut: displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

export default compose([withSelect(function (select) {
  return {
    hasUndo: select('core/editor').hasEditorUndo()
  };
}), withDispatch(function (dispatch) {
  return {
    undo: dispatch('core/editor').undo
  };
})])(EditorHistoryUndo);
//# sourceMappingURL=undo.js.map
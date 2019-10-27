import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { displayShortcut } from '@wordpress/keycodes';

function EditorHistoryRedo(_ref) {
  var hasRedo = _ref.hasRedo,
      redo = _ref.redo;
  return createElement(IconButton, {
    icon: "redo",
    label: __('Redo'),
    shortcut: displayShortcut.primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  });
}

export default compose([withSelect(function (select) {
  return {
    hasRedo: select('core/editor').hasEditorRedo()
  };
}), withDispatch(function (dispatch) {
  return {
    redo: dispatch('core/editor').redo
  };
})])(EditorHistoryRedo);
//# sourceMappingURL=redo.js.map
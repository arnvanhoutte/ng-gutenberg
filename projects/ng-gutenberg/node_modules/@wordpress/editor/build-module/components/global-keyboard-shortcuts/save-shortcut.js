import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { KeyboardShortcuts } from '@wordpress/components';
import { rawShortcut } from '@wordpress/keycodes';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
export function SaveShortcut(_ref) {
  var onSave = _ref.onSave;
  return createElement(KeyboardShortcuts, {
    bindGlobal: true,
    shortcuts: _defineProperty({}, rawShortcut.primary('s'), function (event) {
      event.preventDefault();
      onSave();
    })
  });
}
export default compose([withSelect(function (select) {
  var _select = select('core/editor'),
      isEditedPostDirty = _select.isEditedPostDirty;

  return {
    isDirty: isEditedPostDirty()
  };
}), withDispatch(function (dispatch, ownProps, _ref3) {
  var select = _ref3.select;

  var _dispatch = dispatch('core/editor'),
      savePost = _dispatch.savePost;

  return {
    onSave: function onSave() {
      // TODO: This should be handled in the `savePost` effect in
      // considering `isSaveable`. See note on `isEditedPostSaveable`
      // selector about dirtiness and meta-boxes.
      //
      // See: `isEditedPostSaveable`
      var _select2 = select('core/editor'),
          isEditedPostDirty = _select2.isEditedPostDirty;

      if (!isEditedPostDirty()) {
        return;
      }

      savePost();
    }
  };
})])(SaveShortcut);
//# sourceMappingURL=save-shortcut.js.map
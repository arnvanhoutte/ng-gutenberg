"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveShortcut = SaveShortcut;
exports.default = void 0;

var _element = require("@wordpress/element");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _components = require("@wordpress/components");

var _keycodes = require("@wordpress/keycodes");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
function SaveShortcut(_ref) {
  var onSave = _ref.onSave;
  return (0, _element.createElement)(_components.KeyboardShortcuts, {
    bindGlobal: true,
    shortcuts: (0, _defineProperty2.default)({}, _keycodes.rawShortcut.primary('s'), function (event) {
      event.preventDefault();
      onSave();
    })
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      isEditedPostDirty = _select.isEditedPostDirty;

  return {
    isDirty: isEditedPostDirty()
  };
}), (0, _data.withDispatch)(function (dispatch, ownProps, _ref3) {
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

exports.default = _default;
//# sourceMappingURL=save-shortcut.js.map
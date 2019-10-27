"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underline = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _richText = require("@wordpress/rich-text");

var _blockEditor = require("@wordpress/block-editor");

/**
 * WordPress dependencies
 */
var name = 'core/underline';
var underline = {
  name: name,
  title: (0, _i18n.__)('Underline'),
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      onChange((0, _richText.toggleFormat)(value, {
        type: name,
        attributes: {
          style: 'text-decoration: underline;'
        }
      }));
    };

    return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_blockEditor.RichTextShortcut, {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), (0, _element.createElement)(_blockEditor.__unstableRichTextInputEvent, {
      inputType: "formatUnderline",
      onInput: onToggle
    }));
  }
};
exports.underline = underline;
//# sourceMappingURL=index.js.map
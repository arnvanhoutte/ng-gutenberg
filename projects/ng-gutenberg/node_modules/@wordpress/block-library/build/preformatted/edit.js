"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreformattedEdit;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _blockEditor = require("@wordpress/block-editor");

/**
 * WordPress dependencies
 */
function PreformattedEdit(_ref) {
  var attributes = _ref.attributes,
      mergeBlocks = _ref.mergeBlocks,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var content = attributes.content;
  return (0, _element.createElement)(_blockEditor.RichText, {
    tagName: "pre" // Ensure line breaks are normalised to HTML.
    ,
    value: content.replace(/\n/g, '<br>'),
    onChange: function onChange(nextContent) {
      setAttributes({
        // Ensure line breaks are normalised to characters. This
        // saves space, is easier to read, and ensures display
        // filters work correctly.
        content: nextContent.replace(/<br ?\/?>/g, '\n')
      });
    },
    placeholder: (0, _i18n.__)('Write preformatted text…'),
    wrapperClassName: className,
    onMerge: mergeBlocks
  });
}
//# sourceMappingURL=edit.js.map
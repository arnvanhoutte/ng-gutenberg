import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
export default function PreformattedEdit(_ref) {
  var attributes = _ref.attributes,
      mergeBlocks = _ref.mergeBlocks,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var content = attributes.content;
  return createElement(RichText, {
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
    placeholder: __('Write preformatted text…'),
    wrapperClassName: className,
    onMerge: mergeBlocks
  });
}
//# sourceMappingURL=edit.js.map
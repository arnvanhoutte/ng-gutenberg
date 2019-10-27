import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import PostTypeSupportCheck from '../post-type-support-check';

function PostFormatCheck(_ref) {
  var disablePostFormats = _ref.disablePostFormats,
      props = _objectWithoutProperties(_ref, ["disablePostFormats"]);

  return !disablePostFormats && createElement(PostTypeSupportCheck, _extends({}, props, {
    supportKeys: "post-formats"
  }));
}

export default withSelect(function (select) {
  var editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck);
//# sourceMappingURL=check.js.map
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';
/**
 * Internal dependencies
 */

import formats from './default-formats';
formats.forEach(function (_ref) {
  var name = _ref.name,
      settings = _objectWithoutProperties(_ref, ["name"]);

  return registerFormatType(name, settings);
});
//# sourceMappingURL=index.js.map
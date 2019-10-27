import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { compact } from 'lodash';
/**
 * WordPress dependencies
 */

import { RawHTML } from '@wordpress/element';
export default function save(_ref) {
  var attributes = _ref.attributes;
  var customText = attributes.customText,
      noTeaser = attributes.noTeaser;
  var moreTag = customText ? "<!--more ".concat(customText, "-->") : '<!--more-->';
  var noTeaserTag = noTeaser ? '<!--noteaser-->' : '';
  return createElement(RawHTML, null, compact([moreTag, noTeaserTag]).join('\n'));
}
//# sourceMappingURL=save.js.map
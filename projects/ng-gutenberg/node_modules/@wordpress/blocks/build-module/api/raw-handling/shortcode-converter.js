import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * External dependencies
 */
import { some, castArray, first, mapValues, pickBy, includes } from 'lodash';
/**
 * WordPress dependencies
 */

import { regexp, next } from '@wordpress/shortcode';
/**
 * Internal dependencies
 */

import { createBlock, getBlockTransforms, findTransform } from '../factory';
import { getBlockType } from '../registration';
import { getBlockAttributes } from '../parser';

function segmentHTMLToShortcodeBlock(HTML) {
  var lastIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Get all matches.
  var transformsFrom = getBlockTransforms('from');
  var transformation = findTransform(transformsFrom, function (transform) {
    return transform.type === 'shortcode' && some(castArray(transform.tag), function (tag) {
      return regexp(tag).test(HTML);
    });
  });

  if (!transformation) {
    return [HTML];
  }

  var transformTags = castArray(transformation.tag);
  var transformTag = first(transformTags);
  var match;

  if (match = next(transformTag, HTML, lastIndex)) {
    var beforeHTML = HTML.substr(0, match.index);
    lastIndex = match.index + match.content.length; // If the shortcode content does not contain HTML and the shortcode is
    // not on a new line (or in paragraph from Markdown converter),
    // consider the shortcode as inline text, and thus skip conversion for
    // this segment.

    if (!includes(match.shortcode.content || '', '<') && !/(\n|<p>)\s*$/.test(beforeHTML)) {
      return segmentHTMLToShortcodeBlock(HTML, lastIndex);
    }

    var attributes = mapValues(pickBy(transformation.attributes, function (schema) {
      return schema.shortcode;
    }), // Passing all of `match` as second argument is intentionally broad
    // but shouldn't be too relied upon.
    //
    // See: https://github.com/WordPress/gutenberg/pull/3610#discussion_r152546926
    function (schema) {
      return schema.shortcode(match.shortcode.attrs, match);
    });
    var block = createBlock(transformation.blockName, getBlockAttributes(_objectSpread({}, getBlockType(transformation.blockName), {
      attributes: transformation.attributes
    }), match.shortcode.content, attributes));
    return [beforeHTML, block].concat(_toConsumableArray(segmentHTMLToShortcodeBlock(HTML.substr(lastIndex))));
  }

  return [HTML];
}

export default segmentHTMLToShortcodeBlock;
//# sourceMappingURL=shortcode-converter.js.map
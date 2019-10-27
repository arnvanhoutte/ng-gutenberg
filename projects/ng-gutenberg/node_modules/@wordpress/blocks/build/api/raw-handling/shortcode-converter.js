"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _lodash = require("lodash");

var _shortcode = require("@wordpress/shortcode");

var _factory = require("../factory");

var _registration = require("../registration");

var _parser = require("../parser");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function segmentHTMLToShortcodeBlock(HTML) {
  var lastIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Get all matches.
  var transformsFrom = (0, _factory.getBlockTransforms)('from');
  var transformation = (0, _factory.findTransform)(transformsFrom, function (transform) {
    return transform.type === 'shortcode' && (0, _lodash.some)((0, _lodash.castArray)(transform.tag), function (tag) {
      return (0, _shortcode.regexp)(tag).test(HTML);
    });
  });

  if (!transformation) {
    return [HTML];
  }

  var transformTags = (0, _lodash.castArray)(transformation.tag);
  var transformTag = (0, _lodash.first)(transformTags);
  var match;

  if (match = (0, _shortcode.next)(transformTag, HTML, lastIndex)) {
    var beforeHTML = HTML.substr(0, match.index);
    lastIndex = match.index + match.content.length; // If the shortcode content does not contain HTML and the shortcode is
    // not on a new line (or in paragraph from Markdown converter),
    // consider the shortcode as inline text, and thus skip conversion for
    // this segment.

    if (!(0, _lodash.includes)(match.shortcode.content || '', '<') && !/(\n|<p>)\s*$/.test(beforeHTML)) {
      return segmentHTMLToShortcodeBlock(HTML, lastIndex);
    }

    var attributes = (0, _lodash.mapValues)((0, _lodash.pickBy)(transformation.attributes, function (schema) {
      return schema.shortcode;
    }), // Passing all of `match` as second argument is intentionally broad
    // but shouldn't be too relied upon.
    //
    // See: https://github.com/WordPress/gutenberg/pull/3610#discussion_r152546926
    function (schema) {
      return schema.shortcode(match.shortcode.attrs, match);
    });
    var block = (0, _factory.createBlock)(transformation.blockName, (0, _parser.getBlockAttributes)((0, _objectSpread2.default)({}, (0, _registration.getBlockType)(transformation.blockName), {
      attributes: transformation.attributes
    }), match.shortcode.content, attributes));
    return [beforeHTML, block].concat((0, _toConsumableArray2.default)(segmentHTMLToShortcodeBlock(HTML.substr(lastIndex))));
  }

  return [HTML];
}

var _default = segmentHTMLToShortcodeBlock;
exports.default = _default;
//# sourceMappingURL=shortcode-converter.js.map
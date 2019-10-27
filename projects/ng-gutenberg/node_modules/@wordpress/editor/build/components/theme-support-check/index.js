"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSupportCheck = ThemeSupportCheck;
exports.default = void 0;

var _lodash = require("lodash");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function ThemeSupportCheck(_ref) {
  var themeSupports = _ref.themeSupports,
      children = _ref.children,
      postType = _ref.postType,
      supportKeys = _ref.supportKeys;
  var isSupported = (0, _lodash.some)((0, _lodash.castArray)(supportKeys), function (key) {
    var supported = (0, _lodash.get)(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && (0, _lodash.isArray)(supported)) {
      return (0, _lodash.includes)(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core'),
      getThemeSupports = _select.getThemeSupports;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck);

exports.default = _default;
//# sourceMappingURL=index.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _richText = require("@wordpress/rich-text");

var _defaultFormats = _interopRequireDefault(require("./default-formats"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
_defaultFormats.default.forEach(function (_ref) {
  var name = _ref.name,
      settings = (0, _objectWithoutProperties2.default)(_ref, ["name"]);
  return (0, _richText.registerFormatType)(name, settings);
});
//# sourceMappingURL=index.js.map
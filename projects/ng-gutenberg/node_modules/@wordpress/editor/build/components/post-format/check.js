"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _data = require("@wordpress/data");

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostFormatCheck(_ref) {
  var disablePostFormats = _ref.disablePostFormats,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disablePostFormats"]);
  return !disablePostFormats && (0, _element.createElement)(_postTypeSupportCheck.default, (0, _extends2.default)({}, props, {
    supportKeys: "post-formats"
  }));
}

var _default = (0, _data.withSelect)(function (select) {
  var editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck);

exports.default = _default;
//# sourceMappingURL=check.js.map
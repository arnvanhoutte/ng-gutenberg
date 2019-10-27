"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

var _themeSupportCheck = _interopRequireDefault(require("../theme-support-check"));

/**
 * Internal dependencies
 */
function PostFeaturedImageCheck(props) {
  return (0, _element.createElement)(_themeSupportCheck.default, {
    supportKeys: "post-thumbnails"
  }, (0, _element.createElement)(_postTypeSupportCheck.default, (0, _extends2.default)({}, props, {
    supportKeys: "thumbnail"
  })));
}

var _default = PostFeaturedImageCheck;
exports.default = _default;
//# sourceMappingURL=check.js.map
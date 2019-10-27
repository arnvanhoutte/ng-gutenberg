"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _postTypeSupportCheck = _interopRequireDefault(require("../post-type-support-check"));

/**
 * Internal dependencies
 */
function PostExcerptCheck(props) {
  return (0, _element.createElement)(_postTypeSupportCheck.default, (0, _extends2.default)({}, props, {
    supportKeys: "excerpt"
  }));
}

var _default = PostExcerptCheck;
exports.default = _default;
//# sourceMappingURL=check.js.map
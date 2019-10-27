"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = exports.name = void 0;

var _i18n = require("@wordpress/i18n");

var _edit = _interopRequireDefault(require("./edit"));

var _icon = _interopRequireDefault(require("./icon"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var name = 'core/latest-posts';
exports.name = name;
var settings = {
  title: (0, _i18n.__)('Latest Posts'),
  description: (0, _i18n.__)('Display a list of your most recent posts.'),
  icon: _icon.default,
  category: 'widgets',
  keywords: [(0, _i18n.__)('recent posts')],
  supports: {
    align: true,
    html: false
  },
  edit: _edit.default
};
exports.settings = settings;
//# sourceMappingURL=index.js.map
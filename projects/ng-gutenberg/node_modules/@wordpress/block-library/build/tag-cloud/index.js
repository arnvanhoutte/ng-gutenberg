"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = exports.name = void 0;

var _i18n = require("@wordpress/i18n");

var _edit = _interopRequireDefault(require("./edit"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var name = 'core/tag-cloud';
exports.name = name;
var settings = {
  title: (0, _i18n.__)('Tag Cloud'),
  description: (0, _i18n.__)('A cloud of your most used tags.'),
  icon: 'tag',
  category: 'widgets',
  supports: {
    html: false,
    align: true
  },
  edit: _edit.default
};
exports.settings = settings;
//# sourceMappingURL=index.js.map
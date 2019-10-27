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
var name = 'core/block';
exports.name = name;
var settings = {
  title: (0, _i18n.__)('Reusable Block'),
  category: 'reusable',
  description: (0, _i18n.__)('Create content, and save it for you and other contributors to reuse across your site. Update the block, and the changes apply everywhere it’s used.'),
  supports: {
    customClassName: false,
    html: false,
    inserter: false
  },
  edit: _edit.default
};
exports.settings = settings;
//# sourceMappingURL=index.js.map
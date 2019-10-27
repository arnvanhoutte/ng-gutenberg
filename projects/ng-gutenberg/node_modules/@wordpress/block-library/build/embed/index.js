"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.others = exports.common = exports.settings = exports.name = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _coreEmbeds = require("./core-embeds");

var _icons = require("./icons");

var _settings = require("./settings");

var _i18n = require("@wordpress/i18n");

var _blocks = require("@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var name = 'core/embed';
exports.name = name;
var settings = (0, _settings.getEmbedBlockSettings)({
  title: (0, _i18n._x)('Embed', 'block title'),
  description: (0, _i18n.__)('Embed videos, images, tweets, audio, and other content from external sources.'),
  icon: _icons.embedContentIcon,
  // Unknown embeds should not be responsive by default.
  responsive: false,
  transforms: {
    from: [{
      type: 'raw',
      isMatch: function isMatch(node) {
        return node.nodeName === 'P' && /^\s*(https?:\/\/\S+)\s*$/i.test(node.textContent);
      },
      transform: function transform(node) {
        return (0, _blocks.createBlock)('core/embed', {
          url: node.textContent.trim()
        });
      }
    }]
  }
});
exports.settings = settings;

var common = _coreEmbeds.common.map(function (embedDefinition) {
  return (0, _objectSpread2.default)({}, embedDefinition, {
    settings: (0, _settings.getEmbedBlockSettings)(embedDefinition.settings)
  });
});

exports.common = common;

var others = _coreEmbeds.others.map(function (embedDefinition) {
  return (0, _objectSpread2.default)({}, embedDefinition, {
    settings: (0, _settings.getEmbedBlockSettings)(embedDefinition.settings)
  });
});

exports.others = others;
//# sourceMappingURL=index.js.map
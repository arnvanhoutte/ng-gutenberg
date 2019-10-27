"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var _default = (0, _compose.createHigherOrderComponent)((0, _data.withSelect)(function (select, ownProps) {
  var settings = select('core/block-editor').getSettings();
  var colors = ownProps.colors === undefined ? settings.colors : ownProps.colors;
  var disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors: colors,
    disableCustomColors: disableCustomColors,
    hasColorsToChoose: !(0, _lodash.isEmpty)(colors) || !disableCustomColors
  };
}), 'withColorContext');

exports.default = _default;
//# sourceMappingURL=with-color-context.js.map
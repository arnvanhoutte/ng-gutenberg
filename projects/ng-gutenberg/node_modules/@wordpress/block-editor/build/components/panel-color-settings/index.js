"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanelColorSettings = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lodash = require("lodash");

var _components = require("@wordpress/components");

var _compose = require("@wordpress/compose");

var _i18n = require("@wordpress/i18n");

var _control = _interopRequireDefault(require("../color-palette/control"));

var _withColorContext = _interopRequireDefault(require("../color-palette/with-color-context"));

var _colors = require("../colors");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var hasCustomColorsDisabledForSetting = function hasCustomColorsDisabledForSetting(disableCustomColors, colorSetting) {
  if (colorSetting.disableCustomColors !== undefined) {
    return colorSetting.disableCustomColors;
  }

  return disableCustomColors;
};

var hasColorsToChooseInSetting = function hasColorsToChooseInSetting() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var disableCustomColors = arguments.length > 1 ? arguments[1] : undefined;
  var colorSetting = arguments.length > 2 ? arguments[2] : undefined;

  if (!hasCustomColorsDisabledForSetting(disableCustomColors, colorSetting)) {
    return true;
  }

  return (colorSetting.colors || colors).length > 0;
};

var hasColorsToChoose = function hasColorsToChoose(_ref) {
  var colors = _ref.colors,
      disableCustomColors = _ref.disableCustomColors,
      colorSettings = _ref.colorSettings;
  return (0, _lodash.some)(colorSettings, function (colorSetting) {
    return hasColorsToChooseInSetting(colors, disableCustomColors, colorSetting);
  });
}; // translators: first %s: The type of color (e.g. background color), second %s: the color name or value (e.g. red or #ff0000)


var colorIndicatorAriaLabel = (0, _i18n.__)('(%s: %s)');

var renderColorIndicators = function renderColorIndicators(colorSettings, colors) {
  return colorSettings.map(function (_ref2, index) {
    var value = _ref2.value,
        label = _ref2.label,
        availableColors = _ref2.colors;

    if (!value) {
      return null;
    }

    var colorObject = (0, _colors.getColorObjectByColorValue)(availableColors || colors, value);
    var colorName = colorObject && colorObject.name;
    var ariaLabel = (0, _i18n.sprintf)(colorIndicatorAriaLabel, label.toLowerCase(), colorName || value);
    return (0, _element.createElement)(_components.ColorIndicator, {
      key: index,
      colorValue: value,
      "aria-label": ariaLabel
    });
  });
}; // colorSettings is passed as an array of props so that it can be used for
// mapping both ColorIndicator and ColorPaletteControl components. Passing
// an array of components/nodes here wouldn't be feasible.


var PanelColorSettings = (0, _compose.ifCondition)(hasColorsToChoose)(function (_ref3) {
  var children = _ref3.children,
      colors = _ref3.colors,
      colorSettings = _ref3.colorSettings,
      disableCustomColors = _ref3.disableCustomColors,
      title = _ref3.title,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children", "colors", "colorSettings", "disableCustomColors", "title"]);
  var titleElement = (0, _element.createElement)("span", {
    className: "editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title"
  }, title, renderColorIndicators(colorSettings, colors));
  return (0, _element.createElement)(_components.PanelBody, (0, _extends2.default)({
    className: "editor-panel-color-settings block-editor-panel-color-settings",
    title: titleElement
  }, props), colorSettings.map(function (settings, index) {
    return (0, _element.createElement)(_control.default, (0, _extends2.default)({
      key: index
    }, (0, _objectSpread2.default)({
      colors: colors,
      disableCustomColors: disableCustomColors
    }, settings)));
  }), children);
});
exports.PanelColorSettings = PanelColorSettings;

var _default = (0, _withColorContext.default)(PanelColorSettings);

exports.default = _default;
//# sourceMappingURL=index.js.map
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { some } from 'lodash';
/**
 * WordPress dependencies
 */

import { PanelBody, ColorIndicator } from '@wordpress/components';
import { ifCondition } from '@wordpress/compose';
import { sprintf, __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import ColorPaletteControl from '../color-palette/control';
import withColorContext from '../color-palette/with-color-context';
import { getColorObjectByColorValue } from '../colors';

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
  return some(colorSettings, function (colorSetting) {
    return hasColorsToChooseInSetting(colors, disableCustomColors, colorSetting);
  });
}; // translators: first %s: The type of color (e.g. background color), second %s: the color name or value (e.g. red or #ff0000)


var colorIndicatorAriaLabel = __('(%s: %s)');

var renderColorIndicators = function renderColorIndicators(colorSettings, colors) {
  return colorSettings.map(function (_ref2, index) {
    var value = _ref2.value,
        label = _ref2.label,
        availableColors = _ref2.colors;

    if (!value) {
      return null;
    }

    var colorObject = getColorObjectByColorValue(availableColors || colors, value);
    var colorName = colorObject && colorObject.name;
    var ariaLabel = sprintf(colorIndicatorAriaLabel, label.toLowerCase(), colorName || value);
    return createElement(ColorIndicator, {
      key: index,
      colorValue: value,
      "aria-label": ariaLabel
    });
  });
}; // colorSettings is passed as an array of props so that it can be used for
// mapping both ColorIndicator and ColorPaletteControl components. Passing
// an array of components/nodes here wouldn't be feasible.


export var PanelColorSettings = ifCondition(hasColorsToChoose)(function (_ref3) {
  var children = _ref3.children,
      colors = _ref3.colors,
      colorSettings = _ref3.colorSettings,
      disableCustomColors = _ref3.disableCustomColors,
      title = _ref3.title,
      props = _objectWithoutProperties(_ref3, ["children", "colors", "colorSettings", "disableCustomColors", "title"]);

  var titleElement = createElement("span", {
    className: "editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title"
  }, title, renderColorIndicators(colorSettings, colors));
  return createElement(PanelBody, _extends({
    className: "editor-panel-color-settings block-editor-panel-color-settings",
    title: titleElement
  }, props), colorSettings.map(function (settings, index) {
    return createElement(ColorPaletteControl, _extends({
      key: index
    }, _objectSpread({
      colors: colors,
      disableCustomColors: disableCustomColors
    }, settings)));
  }), children);
});
export default withColorContext(PanelColorSettings);
//# sourceMappingURL=index.js.map
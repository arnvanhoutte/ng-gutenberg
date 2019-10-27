"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
var _default = (0, _data.withSelect)(function (select) {
  var _select$getSettings = select('core/block-editor').getSettings(),
      disableCustomFontSizes = _select$getSettings.disableCustomFontSizes,
      fontSizes = _select$getSettings.fontSizes;

  return {
    disableCustomFontSizes: disableCustomFontSizes,
    fontSizes: fontSizes
  };
})(_components.FontSizePicker);

exports.default = _default;
//# sourceMappingURL=font-size-picker.js.map
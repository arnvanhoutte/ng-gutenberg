"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _blockEditor = require("@wordpress/block-editor");

/**
 * WordPress dependencies
 */
var EmbedControls = function EmbedControls(props) {
  var blockSupportsResponsive = props.blockSupportsResponsive,
      showEditButton = props.showEditButton,
      themeSupportsResponsive = props.themeSupportsResponsive,
      allowResponsive = props.allowResponsive,
      getResponsiveHelp = props.getResponsiveHelp,
      toggleResponsive = props.toggleResponsive,
      switchBackToURLInput = props.switchBackToURLInput;
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components.Toolbar, null, showEditButton && (0, _element.createElement)(_components.IconButton, {
    className: "components-toolbar__control",
    label: (0, _i18n.__)('Edit URL'),
    icon: "edit",
    onClick: switchBackToURLInput
  }))), themeSupportsResponsive && blockSupportsResponsive && (0, _element.createElement)(_blockEditor.InspectorControls, null, (0, _element.createElement)(_components.PanelBody, {
    title: (0, _i18n.__)('Media Settings'),
    className: "blocks-responsive"
  }, (0, _element.createElement)(_components.ToggleControl, {
    label: (0, _i18n.__)('Resize for smaller devices'),
    checked: allowResponsive,
    help: getResponsiveHelp,
    onChange: toggleResponsive
  }))));
};

var _default = EmbedControls;
exports.default = _default;
//# sourceMappingURL=embed-controls.js.map
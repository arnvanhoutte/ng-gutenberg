"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageTemplate = PageTemplate;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function PageTemplate(_ref) {
  var availableTemplates = _ref.availableTemplates,
      selectedTemplate = _ref.selectedTemplate,
      onUpdate = _ref.onUpdate;

  if ((0, _lodash.isEmpty)(availableTemplates)) {
    return null;
  }

  return (0, _element.createElement)(_components.SelectControl, {
    label: (0, _i18n.__)('Template:'),
    value: selectedTemplate,
    onChange: onUpdate,
    className: "editor-page-attributes__template",
    options: (0, _lodash.map)(availableTemplates, function (templateName, templateSlug) {
      return {
        value: templateSlug,
        label: templateName
      };
    })
  });
}

var _default = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    selectedTemplate: getEditedPostAttribute('template'),
    availableTemplates: availableTemplates
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdate: function onUpdate(templateSlug) {
      dispatch('core/editor').editPost({
        template: templateSlug || ''
      });
    }
  };
}))(PageTemplate);

exports.default = _default;
//# sourceMappingURL=template.js.map
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { isEmpty, map } from 'lodash';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
export function PageTemplate(_ref) {
  var availableTemplates = _ref.availableTemplates,
      selectedTemplate = _ref.selectedTemplate,
      onUpdate = _ref.onUpdate;

  if (isEmpty(availableTemplates)) {
    return null;
  }

  return createElement(SelectControl, {
    label: __('Template:'),
    value: selectedTemplate,
    onChange: onUpdate,
    className: "editor-page-attributes__template",
    options: map(availableTemplates, function (templateName, templateSlug) {
      return {
        value: templateSlug,
        label: templateName
      };
    })
  });
}
export default compose(withSelect(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    selectedTemplate: getEditedPostAttribute('template'),
    availableTemplates: availableTemplates
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdate: function onUpdate(templateSlug) {
      dispatch('core/editor').editPost({
        template: templateSlug || ''
      });
    }
  };
}))(PageTemplate);
//# sourceMappingURL=template.js.map
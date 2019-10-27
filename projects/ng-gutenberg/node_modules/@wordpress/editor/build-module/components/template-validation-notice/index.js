import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Notice, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

function TemplateValidationNotice(_ref) {
  var isValid = _ref.isValid,
      props = _objectWithoutProperties(_ref, ["isValid"]);

  if (isValid) {
    return null;
  }

  var confirmSynchronization = function confirmSynchronization() {
    // eslint-disable-next-line no-alert
    if (window.confirm(__('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return createElement(Notice, {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning"
  }, createElement("p", null, __('The content of your post doesn’t match the template assigned to your post type.')), createElement("div", null, createElement(Button, {
    isDefault: true,
    onClick: props.resetTemplateValidity
  }, __('Keep it as is')), createElement(Button, {
    onClick: confirmSynchronization,
    isPrimary: true
  }, __('Reset the template'))));
}

export default compose([withSelect(function (select) {
  return {
    isValid: select('core/block-editor').isValidTemplate()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      setTemplateValidity = _dispatch.setTemplateValidity,
      synchronizeTemplate = _dispatch.synchronizeTemplate;

  return {
    resetTemplateValidity: function resetTemplateValidity() {
      return setTemplateValidity(true);
    },
    synchronizeTemplate: synchronizeTemplate
  };
})])(TemplateValidationNotice);
//# sourceMappingURL=index.js.map
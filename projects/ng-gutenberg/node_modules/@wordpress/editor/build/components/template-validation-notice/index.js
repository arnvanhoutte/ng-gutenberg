"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */
function TemplateValidationNotice(_ref) {
  var isValid = _ref.isValid,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isValid"]);

  if (isValid) {
    return null;
  }

  var confirmSynchronization = function confirmSynchronization() {
    // eslint-disable-next-line no-alert
    if (window.confirm((0, _i18n.__)('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return (0, _element.createElement)(_components.Notice, {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning"
  }, (0, _element.createElement)("p", null, (0, _i18n.__)('The content of your post doesn’t match the template assigned to your post type.')), (0, _element.createElement)("div", null, (0, _element.createElement)(_components.Button, {
    isDefault: true,
    onClick: props.resetTemplateValidity
  }, (0, _i18n.__)('Keep it as is')), (0, _element.createElement)(_components.Button, {
    onClick: confirmSynchronization,
    isPrimary: true
  }, (0, _i18n.__)('Reset the template'))));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    isValid: select('core/block-editor').isValidTemplate()
  };
}), (0, _data.withDispatch)(function (dispatch) {
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

exports.default = _default;
//# sourceMappingURL=index.js.map
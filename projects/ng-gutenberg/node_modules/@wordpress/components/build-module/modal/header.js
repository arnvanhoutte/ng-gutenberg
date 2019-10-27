import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import IconButton from '../icon-button';

var ModalHeader = function ModalHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      onClose = _ref.onClose,
      closeLabel = _ref.closeLabel,
      headingId = _ref.headingId,
      isDismissable = _ref.isDismissable;
  var label = closeLabel ? closeLabel : __('Close dialog');
  return createElement("div", {
    className: "components-modal__header"
  }, createElement("div", {
    className: "components-modal__header-heading-container"
  }, icon && createElement("span", {
    className: "components-modal__icon-container",
    "aria-hidden": true
  }, icon), title && createElement("h1", {
    id: headingId,
    className: "components-modal__header-heading"
  }, title)), isDismissable && createElement(IconButton, {
    onClick: onClose,
    icon: "no-alt",
    label: label
  }));
};

export default ModalHeader;
//# sourceMappingURL=header.js.map
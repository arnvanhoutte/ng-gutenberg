import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
import { noop } from 'lodash';
/**
 * WordPress dependencies
 */

import { withInstanceId } from '@wordpress/compose';
import { __, sprintf } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import IconButton from '../icon-button';

function Token(_ref) {
  var value = _ref.value,
      status = _ref.status,
      title = _ref.title,
      displayTransform = _ref.displayTransform,
      _ref$isBorderless = _ref.isBorderless,
      isBorderless = _ref$isBorderless === void 0 ? false : _ref$isBorderless,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$onClickRemove = _ref.onClickRemove,
      onClickRemove = _ref$onClickRemove === void 0 ? noop : _ref$onClickRemove,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      messages = _ref.messages,
      termPosition = _ref.termPosition,
      termsCount = _ref.termsCount,
      instanceId = _ref.instanceId;
  var tokenClasses = classnames('components-form-token-field__token', {
    'is-error': 'error' === status,
    'is-success': 'success' === status,
    'is-validating': 'validating' === status,
    'is-borderless': isBorderless,
    'is-disabled': disabled
  });

  var onClick = function onClick() {
    return onClickRemove({
      value: value
    });
  };

  var transformedValue = displayTransform(value);
  var termPositionAndCount = sprintf(
  /* translators: 1: term name, 2: term position in a set of terms, 3: total term set count. */
  __('%1$s (%2$s of %3$s)'), transformedValue, termPosition, termsCount);
  return createElement("span", {
    className: tokenClasses,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    title: title
  }, createElement("span", {
    className: "components-form-token-field__token-text",
    id: "components-form-token-field__token-text-".concat(instanceId)
  }, createElement("span", {
    className: "screen-reader-text"
  }, termPositionAndCount), createElement("span", {
    "aria-hidden": "true"
  }, transformedValue)), createElement(IconButton, {
    className: "components-form-token-field__remove-token",
    icon: "dismiss",
    onClick: !disabled && onClick,
    label: messages.remove,
    "aria-describedby": "components-form-token-field__token-text-".concat(instanceId)
  }));
}

export default withInstanceId(Token);
//# sourceMappingURL=token.js.map
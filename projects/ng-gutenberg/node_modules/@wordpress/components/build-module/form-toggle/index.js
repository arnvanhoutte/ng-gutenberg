import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
import { noop } from 'lodash';
/**
 * Internal dependencies
 */

import { Path, SVG } from '../primitives';

function FormToggle(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      id = _ref.id,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      props = _objectWithoutProperties(_ref, ["className", "checked", "id", "onChange"]);

  var wrapperClasses = classnames('components-form-toggle', className, {
    'is-checked': checked
  });
  return createElement("span", {
    className: wrapperClasses
  }, createElement("input", _extends({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, props)), createElement("span", {
    className: "components-form-toggle__track"
  }), createElement("span", {
    className: "components-form-toggle__thumb"
  }), checked ? createElement(SVG, {
    className: "components-form-toggle__on",
    width: "2",
    height: "6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2 6"
  }, createElement(Path, {
    d: "M0 0h2v6H0z"
  })) : createElement(SVG, {
    className: "components-form-toggle__off",
    width: "6",
    height: "6",
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 6"
  }, createElement(Path, {
    d: "M3 1.5c.8 0 1.5.7 1.5 1.5S3.8 4.5 3 4.5 1.5 3.8 1.5 3 2.2 1.5 3 1.5M3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
  })));
}

export default FormToggle;
//# sourceMappingURL=index.js.map
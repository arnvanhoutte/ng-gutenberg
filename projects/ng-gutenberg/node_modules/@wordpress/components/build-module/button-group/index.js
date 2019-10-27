import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';

function ButtonGroup(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var classes = classnames('components-button-group', className);
  return createElement("div", _extends({}, props, {
    className: classes,
    role: "group"
  }));
}

export default ButtonGroup;
//# sourceMappingURL=index.js.map
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { Path, Icon, SVG } from '@wordpress/components';
export default function BlockIcon(_ref) {
  var icon = _ref.icon,
      _ref$showColors = _ref.showColors,
      showColors = _ref$showColors === void 0 ? false : _ref$showColors,
      className = _ref.className;

  if (get(icon, ['src']) === 'block-default') {
    icon = {
      src: createElement(SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, createElement(Path, {
        d: "M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"
      }))
    };
  }

  var renderedIcon = createElement(Icon, {
    icon: icon && icon.src ? icon.src : icon
  });
  var style = showColors ? {
    backgroundColor: icon && icon.background,
    color: icon && icon.foreground
  } : {};
  return createElement("span", {
    style: style,
    className: classnames('editor-block-icon block-editor-block-icon', className, {
      'has-colors': showColors
    })
  }, renderedIcon);
}
//# sourceMappingURL=index.js.map
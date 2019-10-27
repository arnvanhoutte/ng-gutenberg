import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { View } from 'react-native';
/**
 * Internal dependencies
 */

import styles from './style.scss';

var ToolbarContainer = function ToolbarContainer(props) {
  return createElement(View, {
    style: [styles.container, props.passedStyle]
  }, props.children);
};

export default ToolbarContainer;
//# sourceMappingURL=toolbar-container.native.js.map
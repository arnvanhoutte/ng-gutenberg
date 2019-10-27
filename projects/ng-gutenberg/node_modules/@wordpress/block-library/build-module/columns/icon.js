import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { G, Path, SVG } from '@wordpress/components';
export default createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), createElement(G, null, createElement(Path, {
  d: "M4,4H20a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4ZM4 6V18H8V6Zm6 0V18h4V6Zm6 0V18h4V6Z"
})));
//# sourceMappingURL=icon.js.map
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
export default createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), createElement(Path, {
  d: "M19 13H5v-2h14v2z"
}));
//# sourceMappingURL=icon.js.map
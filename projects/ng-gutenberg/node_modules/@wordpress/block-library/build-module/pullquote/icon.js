import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Path, Polygon, SVG } from '@wordpress/components';
export default createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), createElement(Polygon, {
  points: "21 18 2 18 2 20 21 20"
}), createElement(Path, {
  d: "m19 10v4h-15v-4h15m1-2h-17c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h17c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1z"
}), createElement(Polygon, {
  points: "21 4 2 4 2 6 21 6"
}));
//# sourceMappingURL=icon.js.map
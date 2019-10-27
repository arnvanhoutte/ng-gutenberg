import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { Path, Rect, SVG } from '@wordpress/components';
export default createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), createElement(Path, {
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"
}), createElement(Rect, {
  x: "6",
  y: "10",
  width: "2",
  height: "2"
}), createElement(Rect, {
  x: "6",
  y: "14",
  width: "8",
  height: "2"
}), createElement(Rect, {
  x: "16",
  y: "14",
  width: "2",
  height: "2"
}), createElement(Rect, {
  x: "10",
  y: "10",
  width: "8",
  height: "2"
}));
//# sourceMappingURL=icon.js.map
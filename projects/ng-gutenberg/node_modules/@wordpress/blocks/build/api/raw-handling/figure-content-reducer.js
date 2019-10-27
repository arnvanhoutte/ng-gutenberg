"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _lodash = require("lodash");

var _phrasingContent = require("./phrasing-content");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Whether or not the given node is figure content.
 *
 * @param {Node}   node   The node to check.
 * @param {Object} schema The schema to use.
 *
 * @return {boolean} True if figure content, false if not.
 */
function isFigureContent(node, schema) {
  var tag = node.nodeName.toLowerCase(); // We are looking for tags that can be a child of the figure tag, excluding
  // `figcaption` and any phrasing content.

  if (tag === 'figcaption' || (0, _phrasingContent.isPhrasingContent)(node)) {
    return false;
  }

  return (0, _lodash.has)(schema, ['figure', 'children', tag]);
}
/**
 * Whether or not the given node can have an anchor.
 *
 * @param {Node}   node   The node to check.
 * @param {Object} schema The schema to use.
 *
 * @return {boolean} True if it can, false if not.
 */


function canHaveAnchor(node, schema) {
  var tag = node.nodeName.toLowerCase();
  return (0, _lodash.has)(schema, ['figure', 'children', 'a', 'children', tag]);
}
/**
 * This filter takes figure content out of paragraphs, wraps it in a figure
 * element, and moves any anchors with it if needed.
 *
 * @param {Node}     node   The node to filter.
 * @param {Document} doc    The document of the node.
 * @param {Object}   schema The schema to use.
 *
 * @return {void}
 */


function _default(node, doc, schema) {
  if (!isFigureContent(node, schema)) {
    return;
  }

  var nodeToInsert = node;
  var parentNode = node.parentNode; // If the figure content can have an anchor and its parent is an anchor with
  // only the figure content, take the anchor out instead of just the content.

  if (canHaveAnchor(node, schema) && parentNode.nodeName === 'A' && parentNode.childNodes.length === 1) {
    nodeToInsert = node.parentNode;
  }

  var wrapper = nodeToInsert;

  while (wrapper && wrapper.nodeName !== 'P') {
    wrapper = wrapper.parentElement;
  }

  var figure = doc.createElement('figure');

  if (wrapper) {
    wrapper.parentNode.insertBefore(figure, wrapper);
  } else {
    nodeToInsert.parentNode.insertBefore(figure, nodeToInsert);
  }

  figure.appendChild(nodeToInsert);
}
//# sourceMappingURL=figure-content-reducer.js.map
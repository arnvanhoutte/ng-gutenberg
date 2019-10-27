"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlockContentSchema = getBlockContentSchema;
exports.isEmpty = isEmpty;
exports.isPlain = isPlain;
exports.deepFilterNodeList = deepFilterNodeList;
exports.deepFilterHTML = deepFilterHTML;
exports.removeInvalidHTML = removeInvalidHTML;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lodash = require("lodash");

var _dom = require("@wordpress/dom");

var _ = require("..");

var _phrasingContent = require("./phrasing-content");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Browser dependencies
 */
var _window$Node = window.Node,
    ELEMENT_NODE = _window$Node.ELEMENT_NODE,
    TEXT_NODE = _window$Node.TEXT_NODE;
/**
 * Given raw transforms from blocks, merges all schemas into one.
 *
 * @param {Array} transforms Block transforms, of the `raw` type.
 *
 * @return {Object} A complete block content schema.
 */

function getBlockContentSchema(transforms) {
  var schemas = transforms.map(function (_ref) {
    var isMatch = _ref.isMatch,
        blockName = _ref.blockName,
        schema = _ref.schema;
    var hasAnchorSupport = (0, _.hasBlockSupport)(blockName, 'anchor'); // If the block does not has anchor support and the transform does not
    // provides an isMatch we can return the schema right away.

    if (!hasAnchorSupport && !isMatch) {
      return schema;
    }

    return (0, _lodash.mapValues)(schema, function (value) {
      var attributes = value.attributes || []; // If the block supports the "anchor" functionality, it needs to keep its ID attribute.

      if (hasAnchorSupport) {
        attributes = [].concat((0, _toConsumableArray2.default)(attributes), ['id']);
      }

      return (0, _objectSpread2.default)({}, value, {
        attributes: attributes,
        isMatch: isMatch ? isMatch : undefined
      });
    });
  });
  return _lodash.mergeWith.apply(void 0, [{}].concat((0, _toConsumableArray2.default)(schemas), [function (objValue, srcValue, key) {
    switch (key) {
      case 'children':
        {
          if (objValue === '*' || srcValue === '*') {
            return '*';
          }

          return (0, _objectSpread2.default)({}, objValue, srcValue);
        }

      case 'attributes':
      case 'require':
        {
          return [].concat((0, _toConsumableArray2.default)(objValue || []), (0, _toConsumableArray2.default)(srcValue || []));
        }

      case 'isMatch':
        {
          // If one of the values being merge is undefined (matches everything),
          // the result of the merge will be undefined.
          if (!objValue || !srcValue) {
            return undefined;
          } // When merging two isMatch functions, the result is a new function
          // that returns if one of the source functions returns true.


          return function () {
            return objValue.apply(void 0, arguments) || srcValue.apply(void 0, arguments);
          };
        }
    }
  }]));
}
/**
 * Recursively checks if an element is empty. An element is not empty if it
 * contains text or contains elements with attributes such as images.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} Wether or not the element is empty.
 */


function isEmpty(element) {
  if (!element.hasChildNodes()) {
    return true;
  }

  return Array.from(element.childNodes).every(function (node) {
    if (node.nodeType === TEXT_NODE) {
      return !node.nodeValue.trim();
    }

    if (node.nodeType === ELEMENT_NODE) {
      if (node.nodeName === 'BR') {
        return true;
      } else if (node.hasAttributes()) {
        return false;
      }

      return isEmpty(node);
    }

    return true;
  });
}
/**
 * Checks wether HTML can be considered plain text. That is, it does not contain
 * any elements that are not line breaks.
 *
 * @param {string} HTML The HTML to check.
 *
 * @return {boolean} Wether the HTML can be considered plain text.
 */


function isPlain(HTML) {
  return !/<(?!br[ />])/i.test(HTML);
}
/**
 * Given node filters, deeply filters and mutates a NodeList.
 *
 * @param {NodeList} nodeList The nodeList to filter.
 * @param {Array}    filters  An array of functions that can mutate with the provided node.
 * @param {Document} doc      The document of the nodeList.
 * @param {Object}   schema   The schema to use.
 */


function deepFilterNodeList(nodeList, filters, doc, schema) {
  Array.from(nodeList).forEach(function (node) {
    deepFilterNodeList(node.childNodes, filters, doc, schema);
    filters.forEach(function (item) {
      // Make sure the node is still attached to the document.
      if (!doc.contains(node)) {
        return;
      }

      item(node, doc, schema);
    });
  });
}
/**
 * Given node filters, deeply filters HTML tags.
 * Filters from the deepest nodes to the top.
 *
 * @param {string} HTML    The HTML to filter.
 * @param {Array}  filters An array of functions that can mutate with the provided node.
 * @param {Object} schema  The schema to use.
 *
 * @return {string} The filtered HTML.
 */


function deepFilterHTML(HTML) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var schema = arguments.length > 2 ? arguments[2] : undefined;
  var doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  deepFilterNodeList(doc.body.childNodes, filters, doc, schema);
  return doc.body.innerHTML;
}
/**
 * Given a schema, unwraps or removes nodes, attributes and classes on a node
 * list.
 *
 * @param {NodeList} nodeList The nodeList to filter.
 * @param {Document} doc      The document of the nodeList.
 * @param {Object}   schema   An array of functions that can mutate with the provided node.
 * @param {Object}   inline   Whether to clean for inline mode.
 */


function cleanNodeList(nodeList, doc, schema, inline) {
  Array.from(nodeList).forEach(function (node) {
    var tag = node.nodeName.toLowerCase(); // It's a valid child, if the tag exists in the schema without an isMatch
    // function, or with an isMatch function that matches the node.

    if (schema.hasOwnProperty(tag) && (!schema[tag].isMatch || schema[tag].isMatch(node))) {
      if (node.nodeType === ELEMENT_NODE) {
        var _schema$tag = schema[tag],
            _schema$tag$attribute = _schema$tag.attributes,
            attributes = _schema$tag$attribute === void 0 ? [] : _schema$tag$attribute,
            _schema$tag$classes = _schema$tag.classes,
            classes = _schema$tag$classes === void 0 ? [] : _schema$tag$classes,
            children = _schema$tag.children,
            _schema$tag$require = _schema$tag.require,
            require = _schema$tag$require === void 0 ? [] : _schema$tag$require,
            allowEmpty = _schema$tag.allowEmpty; // If the node is empty and it's supposed to have children,
        // remove the node.


        if (children && !allowEmpty && isEmpty(node)) {
          (0, _dom.remove)(node);
          return;
        }

        if (node.hasAttributes()) {
          // Strip invalid attributes.
          Array.from(node.attributes).forEach(function (_ref2) {
            var name = _ref2.name;

            if (name !== 'class' && !(0, _lodash.includes)(attributes, name)) {
              node.removeAttribute(name);
            }
          }); // Strip invalid classes.
          // In jsdom-jscore, 'node.classList' can be undefined.
          // TODO: Explore patching this in jsdom-jscore.

          if (node.classList && node.classList.length) {
            var mattchers = classes.map(function (item) {
              if (typeof item === 'string') {
                return function (className) {
                  return className === item;
                };
              } else if (item instanceof RegExp) {
                return function (className) {
                  return item.test(className);
                };
              }

              return _lodash.noop;
            });
            Array.from(node.classList).forEach(function (name) {
              if (!mattchers.some(function (isMatch) {
                return isMatch(name);
              })) {
                node.classList.remove(name);
              }
            });

            if (!node.classList.length) {
              node.removeAttribute('class');
            }
          }
        }

        if (node.hasChildNodes()) {
          // Do not filter any content.
          if (children === '*') {
            return;
          } // Continue if the node is supposed to have children.


          if (children) {
            // If a parent requires certain children, but it does
            // not have them, drop the parent and continue.
            if (require.length && !node.querySelector(require.join(','))) {
              cleanNodeList(node.childNodes, doc, schema, inline);
              (0, _dom.unwrap)(node); // If the node is at the top, phrasing content, and
              // contains children that are block content, unwrap
              // the node because it is invalid.
            } else if (node.parentNode.nodeName === 'BODY' && (0, _phrasingContent.isPhrasingContent)(node)) {
              cleanNodeList(node.childNodes, doc, schema, inline);

              if (Array.from(node.childNodes).some(function (child) {
                return !(0, _phrasingContent.isPhrasingContent)(child);
              })) {
                (0, _dom.unwrap)(node);
              }
            } else {
              cleanNodeList(node.childNodes, doc, children, inline);
            } // Remove children if the node is not supposed to have any.

          } else {
            while (node.firstChild) {
              (0, _dom.remove)(node.firstChild);
            }
          }
        }
      } // Invalid child. Continue with schema at the same place and unwrap.

    } else {
      cleanNodeList(node.childNodes, doc, schema, inline); // For inline mode, insert a line break when unwrapping nodes that
      // are not phrasing content.

      if (inline && !(0, _phrasingContent.isPhrasingContent)(node) && node.nextElementSibling) {
        (0, _dom.insertAfter)(doc.createElement('br'), node);
      }

      (0, _dom.unwrap)(node);
    }
  });
}
/**
 * Given a schema, unwraps or removes nodes, attributes and classes on HTML.
 *
 * @param {string} HTML   The HTML to clean up.
 * @param {Object} schema Schema for the HTML.
 * @param {Object} inline Whether to clean for inline mode.
 *
 * @return {string} The cleaned up HTML.
 */


function removeInvalidHTML(HTML, schema, inline) {
  var doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  cleanNodeList(doc.body.childNodes, doc, schema, inline);
  return doc.body.innerHTML;
}
//# sourceMappingURL=utils.js.map
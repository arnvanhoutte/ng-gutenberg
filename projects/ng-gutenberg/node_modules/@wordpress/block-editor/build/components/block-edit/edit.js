"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Edit = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("@wordpress/components");

var _blocks = require("@wordpress/blocks");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      attributes = _props$attributes === void 0 ? {} : _props$attributes,
      name = props.name;
  var blockType = (0, _blocks.getBlockType)(name);

  if (!blockType) {
    return null;
  } // Generate a class name for the block's editable form


  var generatedClassName = (0, _blocks.hasBlockSupport)(blockType, 'className', true) ? (0, _blocks.getBlockDefaultClassName)(name) : null;
  var className = (0, _classnames.default)(generatedClassName, attributes.className); // `edit` and `save` are functions or components describing the markup
  // with which a block is displayed. If `blockType` is valid, assign
  // them preferentially as the render value for the block.

  var Component = blockType.edit || blockType.save;
  return (0, _element.createElement)(Component, (0, _extends2.default)({}, props, {
    className: className
  }));
};

exports.Edit = Edit;

var _default = (0, _components.withFilters)('editor.BlockEdit')(Edit);

exports.default = _default;
//# sourceMappingURL=edit.js.map
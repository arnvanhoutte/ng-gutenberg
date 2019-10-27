"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _blockTypesList = _interopRequireDefault(require("../block-types-list"));

var _blockIcon = _interopRequireDefault(require("../block-icon"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function ChildBlocks(_ref) {
  var rootBlockIcon = _ref.rootBlockIcon,
      rootBlockTitle = _ref.rootBlockTitle,
      items = _ref.items,
      props = (0, _objectWithoutProperties2.default)(_ref, ["rootBlockIcon", "rootBlockTitle", "items"]);
  return (0, _element.createElement)("div", {
    className: "editor-inserter__child-blocks block-editor-inserter__child-blocks"
  }, (rootBlockIcon || rootBlockTitle) && (0, _element.createElement)("div", {
    className: "editor-inserter__parent-block-header block-editor-inserter__parent-block-header"
  }, (0, _element.createElement)(_blockIcon.default, {
    icon: rootBlockIcon,
    showColors: true
  }), rootBlockTitle && (0, _element.createElement)("h2", null, rootBlockTitle)), (0, _element.createElement)(_blockTypesList.default, (0, _extends2.default)({
    items: items
  }, props)));
}

var _default = (0, _compose.compose)((0, _compose.ifCondition)(function (_ref2) {
  var items = _ref2.items;
  return items && items.length > 0;
}), (0, _data.withSelect)(function (select, _ref3) {
  var rootClientId = _ref3.rootClientId;

  var _select = select('core/blocks'),
      getBlockType = _select.getBlockType;

  var _select2 = select('core/block-editor'),
      getBlockName = _select2.getBlockName;

  var rootBlockName = getBlockName(rootClientId);
  var rootBlockType = getBlockType(rootBlockName);
  return {
    rootBlockTitle: rootBlockType && rootBlockType.title,
    rootBlockIcon: rootBlockType && rootBlockType.icon
  };
}))(ChildBlocks);

exports.default = _default;
//# sourceMappingURL=child-blocks.js.map
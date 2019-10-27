"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _blocks = require("@wordpress/blocks");

var _compose = require("@wordpress/compose");

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

var _data = require("@wordpress/data");

var _blockIcon = _interopRequireDefault(require("../block-icon"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function InserterWithShortcuts(_ref) {
  var items = _ref.items,
      isLocked = _ref.isLocked,
      onInsert = _ref.onInsert;

  if (isLocked) {
    return null;
  }

  var itemsWithoutDefaultBlock = (0, _lodash.filter)(items, function (item) {
    return !item.isDisabled && (item.name !== (0, _blocks.getDefaultBlockName)() || !(0, _lodash.isEmpty)(item.initialAttributes));
  }).slice(0, 3);
  return (0, _element.createElement)("div", {
    className: "editor-inserter-with-shortcuts block-editor-inserter-with-shortcuts"
  }, itemsWithoutDefaultBlock.map(function (item) {
    return (0, _element.createElement)(_components.IconButton, {
      key: item.id,
      className: "editor-inserter-with-shortcuts__block block-editor-inserter-with-shortcuts__block",
      onClick: function onClick() {
        return onInsert(item);
      } // translators: %s: block title/name to be added
      ,
      label: (0, _i18n.sprintf)((0, _i18n.__)('Add %s'), item.title),
      icon: (0, _element.createElement)(_blockIcon.default, {
        icon: item.icon
      })
    });
  }));
}

var _default = (0, _compose.compose)((0, _data.withSelect)(function (select, _ref2) {
  var rootClientId = _ref2.rootClientId;

  var _select = select('core/block-editor'),
      getInserterItems = _select.getInserterItems,
      getTemplateLock = _select.getTemplateLock;

  return {
    items: getInserterItems(rootClientId),
    isLocked: !!getTemplateLock(rootClientId)
  };
}), (0, _data.withDispatch)(function (dispatch, ownProps) {
  var clientId = ownProps.clientId,
      rootClientId = ownProps.rootClientId;
  return {
    onInsert: function onInsert(_ref3) {
      var name = _ref3.name,
          initialAttributes = _ref3.initialAttributes;
      var block = (0, _blocks.createBlock)(name, initialAttributes);

      if (clientId) {
        dispatch('core/block-editor').replaceBlocks(clientId, block);
      } else {
        dispatch('core/block-editor').insertBlock(block, undefined, rootClientId);
      }
    }
  };
}))(InserterWithShortcuts);

exports.default = _default;
//# sourceMappingURL=index.js.map
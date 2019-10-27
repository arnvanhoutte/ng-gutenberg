"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReusableBlockConvertButton = ReusableBlockConvertButton;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

var _blocks = require("@wordpress/blocks");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function ReusableBlockConvertButton(_ref) {
  var isVisible = _ref.isVisible,
      isReusable = _ref.isReusable,
      onConvertToStatic = _ref.onConvertToStatic,
      onConvertToReusable = _ref.onConvertToReusable;

  if (!isVisible) {
    return null;
  }

  return (0, _element.createElement)(_element.Fragment, null, !isReusable && (0, _element.createElement)(_components.MenuItem, {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToReusable
  }, (0, _i18n.__)('Add to Reusable Blocks')), isReusable && (0, _element.createElement)(_components.MenuItem, {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToStatic
  }, (0, _i18n.__)('Convert to Regular Block')));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/editor'),
      getReusableBlock = _select2.__experimentalGetReusableBlock;

  var _select3 = select('core'),
      canUser = _select3.canUser;

  var blocks = getBlocksByClientId(clientIds);
  var isReusable = blocks.length === 1 && blocks[0] && (0, _blocks.isReusableBlock)(blocks[0]) && !!getReusableBlock(blocks[0].attributes.ref); // Show 'Convert to Regular Block' when selected block is a reusable block

  var isVisible = isReusable || // Hide 'Add to Reusable Blocks' when reusable blocks are disabled
  canInsertBlockType('core/block') && (0, _lodash.every)(blocks, function (block) {
    return (// Guard against the case where a regular block has *just* been converted
      !!block && // Hide 'Add to Reusable Blocks' on invalid blocks
      block.isValid && // Hide 'Add to Reusable Blocks' when block doesn't support being made reusable
      (0, _blocks.hasBlockSupport)(block.name, 'reusable', true)
    );
  }) && // Hide 'Add to Reusable Blocks' when current doesn't have permission to do that
  !!canUser('create', 'blocks');
  return {
    isReusable: isReusable,
    isVisible: isVisible
  };
}), (0, _data.withDispatch)(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? _lodash.noop : _ref3$onToggle;

  var _dispatch = dispatch('core/editor'),
      convertBlockToReusable = _dispatch.__experimentalConvertBlockToReusable,
      convertBlockToStatic = _dispatch.__experimentalConvertBlockToStatic;

  return {
    onConvertToStatic: function onConvertToStatic() {
      if (clientIds.length !== 1) {
        return;
      }

      convertBlockToStatic(clientIds[0]);
      onToggle();
    },
    onConvertToReusable: function onConvertToReusable() {
      convertBlockToReusable(clientIds);
      onToggle();
    }
  };
})])(ReusableBlockConvertButton);

exports.default = _default;
//# sourceMappingURL=reusable-block-convert-button.js.map
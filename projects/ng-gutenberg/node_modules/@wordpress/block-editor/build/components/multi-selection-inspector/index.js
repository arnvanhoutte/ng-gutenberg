"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _data = require("@wordpress/data");

var _blocks = require("@wordpress/blocks");

var _wordcount = require("@wordpress/wordcount");

var _components = require("@wordpress/components");

var _blockIcon = _interopRequireDefault(require("../block-icon"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function MultiSelectionInspector(_ref) {
  var blocks = _ref.blocks;
  var words = (0, _wordcount.count)((0, _blocks.serialize)(blocks), 'words');
  return (0, _element.createElement)("div", {
    className: "editor-multi-selection-inspector__card block-editor-multi-selection-inspector__card"
  }, (0, _element.createElement)(_blockIcon.default, {
    icon: (0, _element.createElement)(_components.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, (0, _element.createElement)(_components.Path, {
      d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
    })),
    showColors: true
  }), (0, _element.createElement)("div", {
    className: "editor-multi-selection-inspector__card-content block-editor-multi-selection-inspector__card-content"
  }, (0, _element.createElement)("div", {
    className: "editor-multi-selection-inspector__card-title block-editor-multi-selection-inspector__card-title"
  },
  /* translators: %d: number of blocks */
  (0, _i18n.sprintf)((0, _i18n._n)('%d block', '%d blocks', blocks.length), blocks.length)), (0, _element.createElement)("div", {
    className: "editor-multi-selection-inspector__card-description block-editor-multi-selection-inspector__card-description"
  },
  /* translators: %d: number of words */
  (0, _i18n.sprintf)((0, _i18n._n)('%d word', '%d words', words), words))));
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/block-editor'),
      getMultiSelectedBlocks = _select.getMultiSelectedBlocks;

  return {
    blocks: getMultiSelectedBlocks()
  };
})(MultiSelectionInspector);

exports.default = _default;
//# sourceMappingURL=index.js.map
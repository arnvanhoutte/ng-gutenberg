"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _diff = require("diff");

var _i18n = require("@wordpress/i18n");

var _blocks = require("@wordpress/blocks");

var _blockView = _interopRequireDefault(require("./block-view"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var BlockCompare =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BlockCompare, _Component);

  function BlockCompare() {
    (0, _classCallCheck2.default)(this, BlockCompare);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockCompare).apply(this, arguments));
  }

  (0, _createClass2.default)(BlockCompare, [{
    key: "getDifference",
    value: function getDifference(originalContent, newContent) {
      var difference = (0, _diff.diffChars)(originalContent, newContent);
      return difference.map(function (item, pos) {
        var classes = (0, _classnames.default)({
          'editor-block-compare__added block-editor-block-compare__added': item.added,
          'editor-block-compare__removed block-editor-block-compare__removed': item.removed
        });
        return (0, _element.createElement)("span", {
          key: pos,
          className: classes
        }, item.value);
      });
    }
  }, {
    key: "getOriginalContent",
    value: function getOriginalContent(block) {
      return {
        rawContent: block.originalContent,
        renderedContent: (0, _blocks.getSaveElement)(block.name, block.attributes)
      };
    }
  }, {
    key: "getConvertedContent",
    value: function getConvertedContent(block) {
      // The convertor may return an array of items or a single item
      var newBlocks = (0, _lodash.castArray)(block); // Get converted block details

      var newContent = newBlocks.map(function (item) {
        return (0, _blocks.getSaveContent)(item.name, item.attributes, item.innerBlocks);
      });
      var renderedContent = newBlocks.map(function (item) {
        return (0, _blocks.getSaveElement)(item.name, item.attributes, item.innerBlocks);
      });
      return {
        rawContent: newContent.join(''),
        renderedContent: renderedContent
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          block = _this$props.block,
          onKeep = _this$props.onKeep,
          onConvert = _this$props.onConvert,
          convertor = _this$props.convertor,
          convertButtonText = _this$props.convertButtonText;
      var original = this.getOriginalContent(block);
      var converted = this.getConvertedContent(convertor(block));
      var difference = this.getDifference(original.rawContent, converted.rawContent);
      return (0, _element.createElement)("div", {
        className: "editor-block-compare__wrapper block-editor-block-compare__wrapper"
      }, (0, _element.createElement)(_blockView.default, {
        title: (0, _i18n.__)('Current'),
        className: "editor-block-compare__current block-editor-block-compare__current",
        action: onKeep,
        actionText: (0, _i18n.__)('Convert to HTML'),
        rawContent: original.rawContent,
        renderedContent: original.renderedContent
      }), (0, _element.createElement)(_blockView.default, {
        title: (0, _i18n.__)('After Conversion'),
        className: "editor-block-compare__converted block-editor-block-compare__converted",
        action: onConvert,
        actionText: convertButtonText,
        rawContent: difference,
        renderedContent: converted.renderedContent
      }));
    }
  }]);
  return BlockCompare;
}(_element.Component);

var _default = BlockCompare;
exports.default = _default;
//# sourceMappingURL=index.js.map
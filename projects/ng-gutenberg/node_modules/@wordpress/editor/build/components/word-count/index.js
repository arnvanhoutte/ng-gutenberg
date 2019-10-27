"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _data = require("@wordpress/data");

var _i18n = require("@wordpress/i18n");

var _wordcount = require("@wordpress/wordcount");

/**
 * WordPress dependencies
 */
function WordCount(_ref) {
  var content = _ref.content;

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  var wordCountType = (0, _i18n._x)('words', 'Word count type. Do not translate!');
  return (0, _element.createElement)("span", {
    className: "word-count"
  }, (0, _wordcount.count)(content, wordCountType));
}

var _default = (0, _data.withSelect)(function (select) {
  return {
    content: select('core/editor').getEditedPostAttribute('content')
  };
})(WordCount);

exports.default = _default;
//# sourceMappingURL=index.js.map
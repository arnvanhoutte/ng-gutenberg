import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { _x } from '@wordpress/i18n';
import { count as wordCount } from '@wordpress/wordcount';

function WordCount(_ref) {
  var content = _ref.content;

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  var wordCountType = _x('words', 'Word count type. Do not translate!');

  return createElement("span", {
    className: "word-count"
  }, wordCount(content, wordCountType));
}

export default withSelect(function (select) {
  return {
    content: select('core/editor').getEditedPostAttribute('content')
  };
})(WordCount);
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */
function PostExcerpt(_ref) {
  var excerpt = _ref.excerpt,
      onUpdateExcerpt = _ref.onUpdateExcerpt;
  return (0, _element.createElement)("div", {
    className: "editor-post-excerpt"
  }, (0, _element.createElement)(_components.TextareaControl, {
    label: (0, _i18n.__)('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: function onChange(value) {
      return onUpdateExcerpt(value);
    },
    value: excerpt
  }), (0, _element.createElement)(_components.ExternalLink, {
    href: (0, _i18n.__)('https://codex.wordpress.org/Excerpt')
  }, (0, _i18n.__)('Learn more about manual excerpts')));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    excerpt: select('core/editor').getEditedPostAttribute('excerpt')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdateExcerpt: function onUpdateExcerpt(excerpt) {
      dispatch('core/editor').editPost({
        excerpt: excerpt
      });
    }
  };
})])(PostExcerpt);

exports.default = _default;
//# sourceMappingURL=index.js.map
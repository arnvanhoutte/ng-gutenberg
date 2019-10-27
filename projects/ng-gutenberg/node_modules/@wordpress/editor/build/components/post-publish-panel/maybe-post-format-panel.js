"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _components = require("@wordpress/components");

var _postFormat = require("../post-format");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var PostFormatSuggestion = function PostFormatSuggestion(_ref) {
  var suggestedPostFormat = _ref.suggestedPostFormat,
      suggestionText = _ref.suggestionText,
      onUpdatePostFormat = _ref.onUpdatePostFormat;
  return (0, _element.createElement)(_components.Button, {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestedPostFormat);
    }
  }, suggestionText);
};

var PostFormatPanel = function PostFormatPanel(_ref2) {
  var suggestion = _ref2.suggestion,
      onUpdatePostFormat = _ref2.onUpdatePostFormat;
  var panelBodyTitle = [(0, _i18n.__)('Suggestion:'), (0, _element.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0, _i18n.__)('Use a post format'))];
  return (0, _element.createElement)(_components.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, (0, _element.createElement)("p", null, (0, _i18n.__)('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), (0, _element.createElement)("p", null, (0, _element.createElement)(PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: (0, _i18n.sprintf)((0, _i18n.__)('Apply the "%1$s" format.'), suggestion.caption)
  })));
};

var getSuggestion = function getSuggestion(supportedFormats, suggestedPostFormat) {
  var formats = _postFormat.POST_FORMATS.filter(function (format) {
    return (0, _lodash.includes)(supportedFormats, format.id);
  });

  return (0, _lodash.find)(formats, function (format) {
    return format.id === suggestedPostFormat;
  });
};

var _default = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var supportedFormats = (0, _lodash.get)(select('core').getThemeSupports(), ['formats'], []);
  return {
    currentPostFormat: getEditedPostAttribute('format'),
    suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), (0, _compose.ifCondition)(function (_ref3) {
  var suggestion = _ref3.suggestion,
      currentPostFormat = _ref3.currentPostFormat;
  return suggestion && suggestion.id !== currentPostFormat;
}))(PostFormatPanel);

exports.default = _default;
//# sourceMappingURL=maybe-post-format-panel.js.map
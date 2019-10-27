import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { find, get, includes } from 'lodash';
/**
 * WordPress dependencies
 */

import { __, sprintf } from '@wordpress/i18n';
import { ifCondition, compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { Button, PanelBody } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { POST_FORMATS } from '../post-format';

var PostFormatSuggestion = function PostFormatSuggestion(_ref) {
  var suggestedPostFormat = _ref.suggestedPostFormat,
      suggestionText = _ref.suggestionText,
      onUpdatePostFormat = _ref.onUpdatePostFormat;
  return createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestedPostFormat);
    }
  }, suggestionText);
};

var PostFormatPanel = function PostFormatPanel(_ref2) {
  var suggestion = _ref2.suggestion,
      onUpdatePostFormat = _ref2.onUpdatePostFormat;
  var panelBodyTitle = [__('Suggestion:'), createElement("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, __('Use a post format'))];
  return createElement(PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, createElement("p", null, __('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), createElement("p", null, createElement(PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: sprintf(__('Apply the "%1$s" format.'), suggestion.caption)
  })));
};

var getSuggestion = function getSuggestion(supportedFormats, suggestedPostFormat) {
  var formats = POST_FORMATS.filter(function (format) {
    return includes(supportedFormats, format.id);
  });
  return find(formats, function (format) {
    return format.id === suggestedPostFormat;
  });
};

export default compose(withSelect(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var supportedFormats = get(select('core').getThemeSupports(), ['formats'], []);
  return {
    currentPostFormat: getEditedPostAttribute('format'),
    suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), ifCondition(function (_ref3) {
  var suggestion = _ref3.suggestion,
      currentPostFormat = _ref3.currentPostFormat;
  return suggestion && suggestion.id !== currentPostFormat;
}))(PostFormatPanel);
//# sourceMappingURL=maybe-post-format-panel.js.map
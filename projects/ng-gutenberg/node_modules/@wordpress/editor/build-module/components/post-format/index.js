import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { find, get, includes, union } from 'lodash';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { withInstanceId, compose } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import PostFormatCheck from './check';
export var POST_FORMATS = [{
  id: 'aside',
  caption: __('Aside')
}, {
  id: 'gallery',
  caption: __('Gallery')
}, {
  id: 'link',
  caption: __('Link')
}, {
  id: 'image',
  caption: __('Image')
}, {
  id: 'quote',
  caption: __('Quote')
}, {
  id: 'standard',
  caption: __('Standard')
}, {
  id: 'status',
  caption: __('Status')
}, {
  id: 'video',
  caption: __('Video')
}, {
  id: 'audio',
  caption: __('Audio')
}, {
  id: 'chat',
  caption: __('Chat')
}];

function PostFormat(_ref) {
  var onUpdatePostFormat = _ref.onUpdatePostFormat,
      _ref$postFormat = _ref.postFormat,
      postFormat = _ref$postFormat === void 0 ? 'standard' : _ref$postFormat,
      supportedFormats = _ref.supportedFormats,
      suggestedFormat = _ref.suggestedFormat,
      instanceId = _ref.instanceId;
  var postFormatSelectorId = 'post-format-selector-' + instanceId;
  var formats = POST_FORMATS.filter(function (format) {
    return includes(supportedFormats, format.id);
  });
  var suggestion = find(formats, function (format) {
    return format.id === suggestedFormat;
  }); // Disable reason: We need to change the value immiediately to show/hide the suggestion if needed

  return createElement(PostFormatCheck, null, createElement("div", {
    className: "editor-post-format"
  }, createElement("div", {
    className: "editor-post-format__content"
  }, createElement("label", {
    htmlFor: postFormatSelectorId
  }, __('Post Format')), createElement(SelectControl, {
    value: postFormat,
    onChange: function onChange(format) {
      return onUpdatePostFormat(format);
    },
    id: postFormatSelectorId,
    options: formats.map(function (format) {
      return {
        label: format.caption,
        value: format.id
      };
    })
  })), suggestion && suggestion.id !== postFormat && createElement("div", {
    className: "editor-post-format__suggestion"
  }, __('Suggestion:'), ' ', createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestion.id);
    }
  }, suggestion.caption))));
}

export default compose([withSelect(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var postFormat = getEditedPostAttribute('format');
  var themeSupports = select('core').getThemeSupports(); // Ensure current format is always in the set.
  // The current format may not be a format supported by the theme.

  var supportedFormats = union([postFormat], get(themeSupports, ['formats'], []));
  return {
    postFormat: postFormat,
    supportedFormats: supportedFormats,
    suggestedFormat: getSuggestedPostFormat()
  };
}), withDispatch(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), withInstanceId])(PostFormat);
//# sourceMappingURL=index.js.map
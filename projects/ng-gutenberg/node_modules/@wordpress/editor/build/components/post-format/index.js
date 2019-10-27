"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.POST_FORMATS = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _check = _interopRequireDefault(require("./check"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var POST_FORMATS = [{
  id: 'aside',
  caption: (0, _i18n.__)('Aside')
}, {
  id: 'gallery',
  caption: (0, _i18n.__)('Gallery')
}, {
  id: 'link',
  caption: (0, _i18n.__)('Link')
}, {
  id: 'image',
  caption: (0, _i18n.__)('Image')
}, {
  id: 'quote',
  caption: (0, _i18n.__)('Quote')
}, {
  id: 'standard',
  caption: (0, _i18n.__)('Standard')
}, {
  id: 'status',
  caption: (0, _i18n.__)('Status')
}, {
  id: 'video',
  caption: (0, _i18n.__)('Video')
}, {
  id: 'audio',
  caption: (0, _i18n.__)('Audio')
}, {
  id: 'chat',
  caption: (0, _i18n.__)('Chat')
}];
exports.POST_FORMATS = POST_FORMATS;

function PostFormat(_ref) {
  var onUpdatePostFormat = _ref.onUpdatePostFormat,
      _ref$postFormat = _ref.postFormat,
      postFormat = _ref$postFormat === void 0 ? 'standard' : _ref$postFormat,
      supportedFormats = _ref.supportedFormats,
      suggestedFormat = _ref.suggestedFormat,
      instanceId = _ref.instanceId;
  var postFormatSelectorId = 'post-format-selector-' + instanceId;
  var formats = POST_FORMATS.filter(function (format) {
    return (0, _lodash.includes)(supportedFormats, format.id);
  });
  var suggestion = (0, _lodash.find)(formats, function (format) {
    return format.id === suggestedFormat;
  }); // Disable reason: We need to change the value immiediately to show/hide the suggestion if needed

  return (0, _element.createElement)(_check.default, null, (0, _element.createElement)("div", {
    className: "editor-post-format"
  }, (0, _element.createElement)("div", {
    className: "editor-post-format__content"
  }, (0, _element.createElement)("label", {
    htmlFor: postFormatSelectorId
  }, (0, _i18n.__)('Post Format')), (0, _element.createElement)(_components.SelectControl, {
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
  })), suggestion && suggestion.id !== postFormat && (0, _element.createElement)("div", {
    className: "editor-post-format__suggestion"
  }, (0, _i18n.__)('Suggestion:'), ' ', (0, _element.createElement)(_components.Button, {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestion.id);
    }
  }, suggestion.caption))));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var postFormat = getEditedPostAttribute('format');
  var themeSupports = select('core').getThemeSupports(); // Ensure current format is always in the set.
  // The current format may not be a format supported by the theme.

  var supportedFormats = (0, _lodash.union)([postFormat], (0, _lodash.get)(themeSupports, ['formats'], []));
  return {
    postFormat: postFormat,
    supportedFormats: supportedFormats,
    suggestedFormat: getSuggestedPostFormat()
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), _compose.withInstanceId])(PostFormat);

exports.default = _default;
//# sourceMappingURL=index.js.map
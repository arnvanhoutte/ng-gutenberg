"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmbedBlockSettings = getEmbedBlockSettings;

var _element = require("@wordpress/element");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _edit = require("./edit");

var _dedupe = _interopRequireDefault(require("classnames/dedupe"));

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _blockEditor = require("@wordpress/block-editor");

var _data = require("@wordpress/data");

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var embedAttributes = {
  url: {
    type: 'string'
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  type: {
    type: 'string'
  },
  providerNameSlug: {
    type: 'string'
  },
  allowResponsive: {
    type: 'boolean',
    default: true
  }
};

function getEmbedBlockSettings(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? 'embed' : _ref$category,
      transforms = _ref.transforms,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? [] : _ref$keywords,
      _ref$supports = _ref.supports,
      supports = _ref$supports === void 0 ? {} : _ref$supports,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive;
  var blockDescription = description || (0, _i18n.__)('Add a block that displays content pulled from other sites, like Twitter, Instagram or YouTube.');
  var edit = (0, _edit.getEmbedEditComponent)(title, icon, responsive);
  return {
    title: title,
    description: blockDescription,
    icon: icon,
    category: category,
    keywords: keywords,
    attributes: embedAttributes,
    supports: (0, _objectSpread2.default)({
      align: true
    }, supports),
    transforms: transforms,
    edit: (0, _compose.compose)((0, _data.withSelect)(function (select, ownProps) {
      var url = ownProps.attributes.url;
      var core = select('core');
      var getEmbedPreview = core.getEmbedPreview,
          isPreviewEmbedFallback = core.isPreviewEmbedFallback,
          isRequestingEmbedPreview = core.isRequestingEmbedPreview,
          getThemeSupports = core.getThemeSupports;
      var preview = undefined !== url && getEmbedPreview(url);
      var previewIsFallback = undefined !== url && isPreviewEmbedFallback(url);
      var fetching = undefined !== url && isRequestingEmbedPreview(url);
      var themeSupports = getThemeSupports(); // The external oEmbed provider does not exist. We got no type info and no html.

      var badEmbedProvider = !!preview && undefined === preview.type && false === preview.html; // Some WordPress URLs that can't be embedded will cause the API to return
      // a valid JSON response with no HTML and `data.status` set to 404, rather
      // than generating a fallback response as other embeds do.

      var wordpressCantEmbed = !!preview && preview.data && preview.data.status === 404;
      var validPreview = !!preview && !badEmbedProvider && !wordpressCantEmbed;
      var cannotEmbed = undefined !== url && (!validPreview || previewIsFallback);
      return {
        preview: validPreview ? preview : undefined,
        fetching: fetching,
        themeSupportsResponsive: themeSupports['responsive-embeds'],
        cannotEmbed: cannotEmbed
      };
    }), (0, _data.withDispatch)(function (dispatch, ownProps) {
      var url = ownProps.attributes.url;
      var coreData = dispatch('core/data');

      var tryAgain = function tryAgain() {
        coreData.invalidateResolution('core', 'getEmbedPreview', [url]);
      };

      return {
        tryAgain: tryAgain
      };
    }))(edit),
    save: function save(_ref2) {
      var _classnames;

      var attributes = _ref2.attributes;
      var url = attributes.url,
          caption = attributes.caption,
          type = attributes.type,
          providerNameSlug = attributes.providerNameSlug;

      if (!url) {
        return null;
      }

      var embedClassName = (0, _dedupe.default)('wp-block-embed', (_classnames = {}, (0, _defineProperty2.default)(_classnames, "is-type-".concat(type), type), (0, _defineProperty2.default)(_classnames, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames));
      return (0, _element.createElement)("figure", {
        className: embedClassName
      }, (0, _element.createElement)("div", {
        className: "wp-block-embed__wrapper"
      }, "\n".concat(url, "\n")
      /* URL needs to be on its own line. */
      ), !_blockEditor.RichText.isEmpty(caption) && (0, _element.createElement)(_blockEditor.RichText.Content, {
        tagName: "figcaption",
        value: caption
      }));
    },
    deprecated: [{
      attributes: embedAttributes,
      save: function save(_ref3) {
        var _classnames2;

        var attributes = _ref3.attributes;
        var url = attributes.url,
            caption = attributes.caption,
            type = attributes.type,
            providerNameSlug = attributes.providerNameSlug;

        if (!url) {
          return null;
        }

        var embedClassName = (0, _dedupe.default)('wp-block-embed', (_classnames2 = {}, (0, _defineProperty2.default)(_classnames2, "is-type-".concat(type), type), (0, _defineProperty2.default)(_classnames2, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames2));
        return (0, _element.createElement)("figure", {
          className: embedClassName
        }, "\n".concat(url, "\n")
        /* URL needs to be on its own line. */
        , !_blockEditor.RichText.isEmpty(caption) && (0, _element.createElement)(_blockEditor.RichText.Content, {
          tagName: "figcaption",
          value: caption
        }));
      }
    }]
  };
}
//# sourceMappingURL=settings.js.map
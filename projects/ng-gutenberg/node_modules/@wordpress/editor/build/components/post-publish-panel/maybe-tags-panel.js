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

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _components = require("@wordpress/components");

var _flatTermSelector = _interopRequireDefault(require("../post-taxonomies/flat-term-selector"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var TagsPanel = function TagsPanel() {
  var panelBodyTitle = [(0, _i18n.__)('Suggestion:'), (0, _element.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0, _i18n.__)('Add tags'))];
  return (0, _element.createElement)(_components.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, (0, _element.createElement)("p", null, (0, _i18n.__)('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), (0, _element.createElement)(_flatTermSelector.default, {
    slug: 'post_tag'
  }));
};

var MaybeTagsPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MaybeTagsPanel, _Component);

  function MaybeTagsPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MaybeTagsPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaybeTagsPanel).call(this, props));
    _this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
    return _this;
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  (0, _createClass2.default)(MaybeTagsPanel, [{
    key: "render",
    value: function render() {
      if (!this.state.hadTagsWhenOpeningThePanel) {
        return (0, _element.createElement)(TagsPanel, null);
      }

      return null;
    }
  }]);
  return MaybeTagsPanel;
}(_element.Component);

var _default = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  var tagsTaxonomy = select('core').getTaxonomy('post_tag');
  var tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && (0, _lodash.some)(tagsTaxonomy.types, function (type) {
      return type === postType;
    }),
    hasTags: tags && tags.length
  };
}), (0, _compose.ifCondition)(function (_ref) {
  var areTagsFetched = _ref.areTagsFetched,
      isPostTypeSupported = _ref.isPostTypeSupported;
  return isPostTypeSupported && areTagsFetched;
}))(MaybeTagsPanel);

exports.default = _default;
//# sourceMappingURL=maybe-tags-panel.js.map
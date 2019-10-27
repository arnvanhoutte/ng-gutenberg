import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { some } from 'lodash';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose, ifCondition } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { PanelBody } from '@wordpress/components';
/**
 * Internal dependencies
 */

import FlatTermSelector from '../post-taxonomies/flat-term-selector';

var TagsPanel = function TagsPanel() {
  var panelBodyTitle = [__('Suggestion:'), createElement("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, __('Add tags'))];
  return createElement(PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, createElement("p", null, __('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), createElement(FlatTermSelector, {
    slug: 'post_tag'
  }));
};

var MaybeTagsPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(MaybeTagsPanel, _Component);

  function MaybeTagsPanel(props) {
    var _this;

    _classCallCheck(this, MaybeTagsPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaybeTagsPanel).call(this, props));
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


  _createClass(MaybeTagsPanel, [{
    key: "render",
    value: function render() {
      if (!this.state.hadTagsWhenOpeningThePanel) {
        return createElement(TagsPanel, null);
      }

      return null;
    }
  }]);

  return MaybeTagsPanel;
}(Component);

export default compose(withSelect(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  var tagsTaxonomy = select('core').getTaxonomy('post_tag');
  var tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && some(tagsTaxonomy.types, function (type) {
      return type === postType;
    }),
    hasTags: tags && tags.length
  };
}), ifCondition(function (_ref) {
  var areTagsFetched = _ref.areTagsFetched,
      isPostTypeSupported = _ref.isPostTypeSupported;
  return isPostTypeSupported && areTagsFetched;
}))(MaybeTagsPanel);
//# sourceMappingURL=maybe-tags-panel.js.map
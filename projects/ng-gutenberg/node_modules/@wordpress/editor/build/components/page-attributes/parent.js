"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageAttributesParent = PageAttributesParent;
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _terms = require("../../utils/terms");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PageAttributesParent(_ref) {
  var parent = _ref.parent,
      postType = _ref.postType,
      items = _ref.items,
      onUpdateParent = _ref.onUpdateParent;
  var isHierarchical = (0, _lodash.get)(postType, ['hierarchical'], false);
  var parentPageLabel = (0, _lodash.get)(postType, ['labels', 'parent_item_colon']);
  var pageItems = items || [];

  if (!isHierarchical || !parentPageLabel || !pageItems.length) {
    return null;
  }

  var pagesTree = (0, _terms.buildTermsTree)(pageItems.map(function (item) {
    return {
      id: item.id,
      parent: item.parent,
      name: item.title.raw ? item.title.raw : "#".concat(item.id, " (").concat((0, _i18n.__)('no title'), ")")
    };
  }));
  return (0, _element.createElement)(_components.TreeSelect, {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    noOptionLabel: "(".concat((0, _i18n.__)('no parent'), ")"),
    tree: pagesTree,
    selectedId: parent,
    onChange: onUpdateParent
  });
}

var applyWithSelect = (0, _data.withSelect)(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType,
      getEntityRecords = _select.getEntityRecords;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var postTypeSlug = getEditedPostAttribute('type');
  var postType = getPostType(postTypeSlug);
  var postId = getCurrentPostId();
  var isHierarchical = (0, _lodash.get)(postType, ['hierarchical'], false);
  var query = {
    per_page: -1,
    exclude: postId,
    parent_exclude: postId,
    orderby: 'menu_order',
    order: 'asc'
  };
  return {
    parent: getEditedPostAttribute('parent'),
    items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
    postType: postType
  };
});
var applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateParent: function onUpdateParent(parent) {
      editPost({
        parent: parent || 0
      });
    }
  };
});

var _default = (0, _compose.compose)([applyWithSelect, applyWithDispatch])(PageAttributesParent);

exports.default = _default;
//# sourceMappingURL=parent.js.map
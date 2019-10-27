"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _postVisibility = _interopRequireDefault(require("../post-visibility"));

var _label = _interopRequireDefault(require("../post-visibility/label"));

var _postSchedule = _interopRequireDefault(require("../post-schedule"));

var _label2 = _interopRequireDefault(require("../post-schedule/label"));

var _maybeTagsPanel = _interopRequireDefault(require("./maybe-tags-panel"));

var _maybePostFormatPanel = _interopRequireDefault(require("./maybe-post-format-panel"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostPublishPanelPrepublish(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      children = _ref.children;
  var prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = (0, _i18n.__)('Are you ready to submit for review?');
    prePublishBodyText = (0, _i18n.__)('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = (0, _i18n.__)('Are you ready to schedule?');
    prePublishBodyText = (0, _i18n.__)('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = (0, _i18n.__)('Are you ready to publish?');
    prePublishBodyText = (0, _i18n.__)('Double-check your settings before publishing.');
  }

  return (0, _element.createElement)("div", {
    className: "editor-post-publish-panel__prepublish"
  }, (0, _element.createElement)("div", null, (0, _element.createElement)("strong", null, prePublishTitle)), (0, _element.createElement)("p", null, prePublishBodyText), hasPublishAction && (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.PanelBody, {
    initialOpen: false,
    title: [(0, _i18n.__)('Visibility:'), (0, _element.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0, _element.createElement)(_label.default, null))]
  }, (0, _element.createElement)(_postVisibility.default, null)), (0, _element.createElement)(_components.PanelBody, {
    initialOpen: false,
    title: [(0, _i18n.__)('Publish:'), (0, _element.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0, _element.createElement)(_label2.default, null))]
  }, (0, _element.createElement)(_postSchedule.default, null))), (0, _element.createElement)(_maybePostFormatPanel.default, null), (0, _element.createElement)(_maybeTagsPanel.default, null), children);
}

var _default = (0, _data.withSelect)(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled;

  return {
    hasPublishAction: (0, _lodash.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: isEditedPostBeingScheduled()
  };
})(PostPublishPanelPrepublish);

exports.default = _default;
//# sourceMappingURL=prepublish.js.map
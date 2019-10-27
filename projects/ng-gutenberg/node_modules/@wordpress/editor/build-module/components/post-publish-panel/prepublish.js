import { createElement, Fragment } from "@wordpress/element";

/**
 * External dependencies
 */
import { get } from 'lodash';
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import PostVisibility from '../post-visibility';
import PostVisibilityLabel from '../post-visibility/label';
import PostSchedule from '../post-schedule';
import PostScheduleLabel from '../post-schedule/label';
import MaybeTagsPanel from './maybe-tags-panel';
import MaybePostFormatPanel from './maybe-post-format-panel';

function PostPublishPanelPrepublish(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      children = _ref.children;
  var prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = __('Are you ready to submit for review?');
    prePublishBodyText = __('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = __('Are you ready to schedule?');
    prePublishBodyText = __('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = __('Are you ready to publish?');
    prePublishBodyText = __('Double-check your settings before publishing.');
  }

  return createElement("div", {
    className: "editor-post-publish-panel__prepublish"
  }, createElement("div", null, createElement("strong", null, prePublishTitle)), createElement("p", null, prePublishBodyText), hasPublishAction && createElement(Fragment, null, createElement(PanelBody, {
    initialOpen: false,
    title: [__('Visibility:'), createElement("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, createElement(PostVisibilityLabel, null))]
  }, createElement(PostVisibility, null)), createElement(PanelBody, {
    initialOpen: false,
    title: [__('Publish:'), createElement("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, createElement(PostScheduleLabel, null))]
  }, createElement(PostSchedule, null))), createElement(MaybePostFormatPanel, null), createElement(MaybeTagsPanel, null), children);
}

export default withSelect(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled;

  return {
    hasPublishAction: get(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: isEditedPostBeingScheduled()
  };
})(PostPublishPanelPrepublish);
//# sourceMappingURL=prepublish.js.map
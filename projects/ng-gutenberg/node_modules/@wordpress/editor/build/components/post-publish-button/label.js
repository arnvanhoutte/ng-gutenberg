"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishButtonLabel = PublishButtonLabel;
exports.default = void 0;

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function PublishButtonLabel(_ref) {
  var isPublished = _ref.isPublished,
      isBeingScheduled = _ref.isBeingScheduled,
      isSaving = _ref.isSaving,
      isPublishing = _ref.isPublishing,
      hasPublishAction = _ref.hasPublishAction,
      isAutosaving = _ref.isAutosaving;

  if (isPublishing) {
    return (0, _i18n.__)('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    return (0, _i18n.__)('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    return (0, _i18n.__)('Scheduling…');
  }

  if (!hasPublishAction) {
    return (0, _i18n.__)('Submit for Review');
  } else if (isPublished) {
    return (0, _i18n.__)('Update');
  } else if (isBeingScheduled) {
    return (0, _i18n.__)('Schedule');
  }

  return (0, _i18n.__)('Publish');
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select, _ref2) {
  var forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      isSavingPost = _select.isSavingPost,
      isPublishingPost = _select.isPublishingPost,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      isAutosavingPost = _select.isAutosavingPost;

  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: (0, _lodash.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel);

exports.default = _default;
//# sourceMappingURL=label.js.map
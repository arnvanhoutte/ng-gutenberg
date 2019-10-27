import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * External dependencies
 */
import createSelector from 'rememo';
import { includes, difference, keys, has } from 'lodash';
/**
 * An object containing information about a guide.
 *
 * @typedef {Object} NUX.GuideInfo
 * @property {string[]} tipIds       Which tips the guide contains.
 * @property {?string}  currentTipId The guide's currently showing tip.
 * @property {?string}  nextTipId    The guide's next tip to show.
 */

/**
 * Returns an object describing the guide, if any, that the given tip is a part
 * of.
 *
 * @param {Object} state Global application state.
 * @param {string} tipId The tip to query.
 *
 * @return {?NUX.GuideInfo} Information about the associated guide.
 */

export var getAssociatedGuide = createSelector(function (state, tipId) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.guides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tipIds = _step.value;

      if (includes(tipIds, tipId)) {
        var nonDismissedTips = difference(tipIds, keys(state.preferences.dismissedTips));

        var _nonDismissedTips = _slicedToArray(nonDismissedTips, 2),
            _nonDismissedTips$ = _nonDismissedTips[0],
            currentTipId = _nonDismissedTips$ === void 0 ? null : _nonDismissedTips$,
            _nonDismissedTips$2 = _nonDismissedTips[1],
            nextTipId = _nonDismissedTips$2 === void 0 ? null : _nonDismissedTips$2;

        return {
          tipIds: tipIds,
          currentTipId: currentTipId,
          nextTipId: nextTipId
        };
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}, function (state) {
  return [state.guides, state.preferences.dismissedTips];
});
/**
 * Determines whether or not the given tip is showing. Tips are hidden if they
 * are disabled, have been dismissed, or are not the current tip in any
 * guide that they have been added to.
 *
 * @param {Object} state Global application state.
 * @param {string} tipId The tip to query.
 *
 * @return {boolean} Whether or not the given tip is showing.
 */

export function isTipVisible(state, tipId) {
  if (!state.preferences.areTipsEnabled) {
    return false;
  }

  if (has(state.preferences.dismissedTips, [tipId])) {
    return false;
  }

  var associatedGuide = getAssociatedGuide(state, tipId);

  if (associatedGuide && associatedGuide.currentTipId !== tipId) {
    return false;
  }

  return true;
}
/**
 * Returns whether or not tips are globally enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether tips are globally enabled.
 */

export function areTipsEnabled(state) {
  return state.preferences.areTipsEnabled;
}
//# sourceMappingURL=selectors.js.map
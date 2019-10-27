"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guides = guides;
exports.areTipsEnabled = areTipsEnabled;
exports.dismissedTips = dismissedTips;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Reducer that tracks which tips are in a guide. Each guide is represented by
 * an array which contains the tip identifiers contained within that guide.
 *
 * @param {Array} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Array} Updated state.
 */
function guides() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TRIGGER_GUIDE':
      return [].concat((0, _toConsumableArray2.default)(state), [action.tipIds]);
  }

  return state;
}
/**
 * Reducer that tracks whether or not tips are globally enabled.
 *
 * @param {boolean} state Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */


function areTipsEnabled() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DISABLE_TIPS':
      return false;

    case 'ENABLE_TIPS':
      return true;
  }

  return state;
}
/**
 * Reducer that tracks which tips have been dismissed. If the state object
 * contains a tip identifier, then that tip is dismissed.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function dismissedTips() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DISMISS_TIP':
      return (0, _objectSpread3.default)({}, state, (0, _defineProperty2.default)({}, action.id, true));

    case 'ENABLE_TIPS':
      return {};
  }

  return state;
}

var preferences = (0, _data.combineReducers)({
  areTipsEnabled: areTipsEnabled,
  dismissedTips: dismissedTips
});

var _default = (0, _data.combineReducers)({
  guides: guides,
  preferences: preferences
});

exports.default = _default;
//# sourceMappingURL=reducer.js.map
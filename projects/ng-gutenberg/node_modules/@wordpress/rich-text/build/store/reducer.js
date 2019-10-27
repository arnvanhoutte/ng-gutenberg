"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTypes = formatTypes;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _lodash = require("lodash");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Reducer managing the format types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function formatTypes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_FORMAT_TYPES':
      return (0, _objectSpread2.default)({}, state, (0, _lodash.keyBy)(action.formatTypes, 'name'));

    case 'REMOVE_FORMAT_TYPES':
      return (0, _lodash.omit)(state, action.names);
  }

  return state;
}

var _default = (0, _data.combineReducers)({
  formatTypes: formatTypes
});

exports.default = _default;
//# sourceMappingURL=reducer.js.map
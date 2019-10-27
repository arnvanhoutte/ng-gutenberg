"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _data = require("@wordpress/data");

var _utils = require("./utils");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostVisibilityLabel(_ref) {
  var visibility = _ref.visibility;

  var getVisibilityLabel = function getVisibilityLabel() {
    return (0, _lodash.find)(_utils.visibilityOptions, {
      value: visibility
    }).label;
  };

  return getVisibilityLabel(visibility);
}

var _default = (0, _data.withSelect)(function (select) {
  return {
    visibility: select('core/editor').getEditedPostVisibility()
  };
})(PostVisibilityLabel);

exports.default = _default;
//# sourceMappingURL=label.js.map
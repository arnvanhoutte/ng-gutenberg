"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostSticky = PostSticky;
exports.default = void 0;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

var _check = _interopRequireDefault(require("./check"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function PostSticky(_ref) {
  var onUpdateSticky = _ref.onUpdateSticky,
      _ref$postSticky = _ref.postSticky,
      postSticky = _ref$postSticky === void 0 ? false : _ref$postSticky;
  return (0, _element.createElement)(_check.default, null, (0, _element.createElement)(_components.CheckboxControl, {
    label: (0, _i18n.__)('Stick to the top of the blog'),
    checked: postSticky,
    onChange: function onChange() {
      return onUpdateSticky(!postSticky);
    }
  }));
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    postSticky: select('core/editor').getEditedPostAttribute('sticky')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    onUpdateSticky: function onUpdateSticky(postSticky) {
      dispatch('core/editor').editPost({
        sticky: postSticky
      });
    }
  };
})])(PostSticky);

exports.default = _default;
//# sourceMappingURL=index.js.map
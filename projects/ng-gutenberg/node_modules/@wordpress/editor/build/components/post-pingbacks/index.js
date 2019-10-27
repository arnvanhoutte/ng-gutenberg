"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

var _compose = require("@wordpress/compose");

/**
 * WordPress dependencies
 */
function PostPingbacks(_ref) {
  var _ref$pingStatus = _ref.pingStatus,
      pingStatus = _ref$pingStatus === void 0 ? 'open' : _ref$pingStatus,
      props = (0, _objectWithoutProperties2.default)(_ref, ["pingStatus"]);

  var onTogglePingback = function onTogglePingback() {
    return props.editPost({
      ping_status: pingStatus === 'open' ? 'closed' : 'open'
    });
  };

  return (0, _element.createElement)(_components.CheckboxControl, {
    label: (0, _i18n.__)('Allow Pingbacks & Trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

var _default = (0, _compose.compose)([(0, _data.withSelect)(function (select) {
  return {
    pingStatus: select('core/editor').getEditedPostAttribute('ping_status')
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostPingbacks);

exports.default = _default;
//# sourceMappingURL=index.js.map
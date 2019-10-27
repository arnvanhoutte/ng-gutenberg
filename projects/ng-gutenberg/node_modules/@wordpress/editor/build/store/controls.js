"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.awaitNextStateChange = awaitNextStateChange;
exports.getRegistry = getRegistry;
exports.localAutosaveGet = localAutosaveGet;
exports.localAutosaveSet = localAutosaveSet;
exports.localAutosaveClear = localAutosaveClear;
exports.default = void 0;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Returns a control descriptor signalling to subscribe to the registry and
 * resolve the control promise only when the next state change occurs.
 *
 * @return {Object} Control descriptor.
 */
function awaitNextStateChange() {
  return {
    type: 'AWAIT_NEXT_STATE_CHANGE'
  };
}
/**
 * Returns a control descriptor signalling to resolve with the current data
 * registry.
 *
 * @return {Object} Control descriptor.
 */


function getRegistry() {
  return {
    type: 'GET_REGISTRY'
  };
}
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string} postId  Post ID.
 * @return {string}        sessionStorage key
 */


function postKey(postId) {
  return "wp-autosave-block-editor-post-".concat(postId);
}

function localAutosaveGet(postId) {
  return window.sessionStorage.getItem(postKey(postId));
}

function localAutosaveSet(postId, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId), JSON.stringify({
    post_title: title,
    content: content,
    excerpt: excerpt
  }));
}

function localAutosaveClear(postId) {
  window.sessionStorage.removeItem(postKey(postId));
}

var controls = {
  AWAIT_NEXT_STATE_CHANGE: (0, _data.createRegistryControl)(function (registry) {
    return function () {
      return new Promise(function (resolve) {
        var unsubscribe = registry.subscribe(function () {
          unsubscribe();
          resolve();
        });
      });
    };
  }),
  GET_REGISTRY: (0, _data.createRegistryControl)(function (registry) {
    return function () {
      return registry;
    };
  }),
  LOCAL_AUTOSAVE_SET: function LOCAL_AUTOSAVE_SET(_ref) {
    var postId = _ref.postId,
        title = _ref.title,
        content = _ref.content,
        excerpt = _ref.excerpt;
    localAutosaveSet(postId, title, content, excerpt);
  }
};
var _default = controls;
exports.default = _default;
//# sourceMappingURL=controls.js.map
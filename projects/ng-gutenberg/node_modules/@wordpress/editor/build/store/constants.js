"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTOSAVE_PROPERTIES = exports.ONE_MINUTE_IN_MS = exports.PERMALINK_POSTNAME_REGEX = exports.TRASH_POST_NOTICE_ID = exports.SAVE_POST_NOTICE_ID = exports.POST_UPDATE_TRANSACTION_ID = exports.STORE_KEY = exports.EDIT_MERGE_PROPERTIES = void 0;

/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
var EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

exports.EDIT_MERGE_PROPERTIES = EDIT_MERGE_PROPERTIES;
var STORE_KEY = 'core/editor';
exports.STORE_KEY = STORE_KEY;
var POST_UPDATE_TRANSACTION_ID = 'post-update';
exports.POST_UPDATE_TRANSACTION_ID = POST_UPDATE_TRANSACTION_ID;
var SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
exports.SAVE_POST_NOTICE_ID = SAVE_POST_NOTICE_ID;
var TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
exports.TRASH_POST_NOTICE_ID = TRASH_POST_NOTICE_ID;
var PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
exports.PERMALINK_POSTNAME_REGEX = PERMALINK_POSTNAME_REGEX;
var ONE_MINUTE_IN_MS = 60 * 1000;
exports.ONE_MINUTE_IN_MS = ONE_MINUTE_IN_MS;
var AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];
exports.AUTOSAVE_PROPERTIES = AUTOSAVE_PROPERTIES;
//# sourceMappingURL=constants.js.map
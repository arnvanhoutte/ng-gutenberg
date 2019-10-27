/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
export var EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

export var STORE_KEY = 'core/editor';
export var POST_UPDATE_TRANSACTION_ID = 'post-update';
export var SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
export var TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
export var PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
export var ONE_MINUTE_IN_MS = 60 * 1000;
export var AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];
//# sourceMappingURL=constants.js.map
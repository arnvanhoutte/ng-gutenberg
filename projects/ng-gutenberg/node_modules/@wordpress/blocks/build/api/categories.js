"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = getCategories;
exports.setCategories = setCategories;
exports.updateCategory = updateCategory;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Returns all the block categories.
 *
 * @return {Object[]} Block categories.
 */
function getCategories() {
  return (0, _data.select)('core/blocks').getCategories();
}
/**
 * Sets the block categories.
 *
 * @param {Object[]} categories Block categories.
 */


function setCategories(categories) {
  (0, _data.dispatch)('core/blocks').setCategories(categories);
}
/**
 * Updates a category.
 *
 * @param {string} slug          Block category slug.
 * @param {Object} category Object containing the category properties that should be updated.
 */


function updateCategory(slug, category) {
  (0, _data.dispatch)('core/blocks').updateCategory(slug, category);
}
//# sourceMappingURL=categories.js.map
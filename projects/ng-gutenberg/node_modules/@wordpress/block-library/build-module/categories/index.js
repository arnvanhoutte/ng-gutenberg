/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import edit from './edit';
import icon from './icon';
export var name = 'core/categories';
export var settings = {
  title: __('Categories'),
  description: __('Display a list of all categories.'),
  icon: icon,
  category: 'widgets',
  supports: {
    align: true,
    html: false
  },
  edit: edit
};
//# sourceMappingURL=index.js.map
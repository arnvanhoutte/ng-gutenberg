/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import edit from './edit';
import icon from './icon';
export var name = 'core/latest-posts';
export var settings = {
  title: __('Latest Posts'),
  description: __('Display a list of your most recent posts.'),
  icon: icon,
  category: 'widgets',
  keywords: [__('recent posts')],
  supports: {
    align: true,
    html: false
  },
  edit: edit
};
//# sourceMappingURL=index.js.map
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import edit from './edit';
import icon from './icon';
export var name = 'core/latest-comments';
export var settings = {
  title: __('Latest Comments'),
  description: __('Display a list of your most recent comments.'),
  icon: icon,
  category: 'widgets',
  keywords: [__('recent comments')],
  supports: {
    align: true,
    html: false
  },
  edit: edit
};
//# sourceMappingURL=index.js.map
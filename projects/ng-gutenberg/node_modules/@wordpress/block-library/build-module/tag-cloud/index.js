/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import edit from './edit';
export var name = 'core/tag-cloud';
export var settings = {
  title: __('Tag Cloud'),
  description: __('A cloud of your most used tags.'),
  icon: 'tag',
  category: 'widgets',
  supports: {
    html: false,
    align: true
  },
  edit: edit
};
//# sourceMappingURL=index.js.map
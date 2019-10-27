/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import edit from './edit';
export var name = 'core/block';
export var settings = {
  title: __('Reusable Block'),
  category: 'reusable',
  description: __('Create content, and save it for you and other contributors to reuse across your site. Update the block, and the changes apply everywhere it’s used.'),
  supports: {
    customClassName: false,
    html: false,
    inserter: false
  },
  edit: edit
};
//# sourceMappingURL=index.js.map
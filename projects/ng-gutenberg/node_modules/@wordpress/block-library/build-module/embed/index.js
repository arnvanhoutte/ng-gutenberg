import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * Internal dependencies
 */
import { common as commonEmbeds, others as otherEmbeds } from './core-embeds';
import { embedContentIcon } from './icons';
import { getEmbedBlockSettings } from './settings';
/**
 * WordPress dependencies
 */

import { __, _x } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
export var name = 'core/embed';
export var settings = getEmbedBlockSettings({
  title: _x('Embed', 'block title'),
  description: __('Embed videos, images, tweets, audio, and other content from external sources.'),
  icon: embedContentIcon,
  // Unknown embeds should not be responsive by default.
  responsive: false,
  transforms: {
    from: [{
      type: 'raw',
      isMatch: function isMatch(node) {
        return node.nodeName === 'P' && /^\s*(https?:\/\/\S+)\s*$/i.test(node.textContent);
      },
      transform: function transform(node) {
        return createBlock('core/embed', {
          url: node.textContent.trim()
        });
      }
    }]
  }
});
export var common = commonEmbeds.map(function (embedDefinition) {
  return _objectSpread({}, embedDefinition, {
    settings: getEmbedBlockSettings(embedDefinition.settings)
  });
});
export var others = otherEmbeds.map(function (embedDefinition) {
  return _objectSpread({}, embedDefinition, {
    settings: getEmbedBlockSettings(embedDefinition.settings)
  });
});
//# sourceMappingURL=index.js.map
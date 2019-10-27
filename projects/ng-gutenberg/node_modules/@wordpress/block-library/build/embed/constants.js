"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORDPRESS_EMBED_BLOCK = exports.DEFAULT_EMBED_BLOCK = exports.ASPECT_RATIOS = exports.HOSTS_NO_PREVIEWS = void 0;
// These embeds do not work in sandboxes due to the iframe's security restrictions.
var HOSTS_NO_PREVIEWS = ['facebook.com', 'smugmug.com'];
exports.HOSTS_NO_PREVIEWS = HOSTS_NO_PREVIEWS;
var ASPECT_RATIOS = [// Common video resolutions.
{
  ratio: '2.33',
  className: 'wp-embed-aspect-21-9'
}, {
  ratio: '2.00',
  className: 'wp-embed-aspect-18-9'
}, {
  ratio: '1.78',
  className: 'wp-embed-aspect-16-9'
}, {
  ratio: '1.33',
  className: 'wp-embed-aspect-4-3'
}, // Vertical video and instagram square video support.
{
  ratio: '1.00',
  className: 'wp-embed-aspect-1-1'
}, {
  ratio: '0.56',
  className: 'wp-embed-aspect-9-16'
}, {
  ratio: '0.50',
  className: 'wp-embed-aspect-1-2'
}];
exports.ASPECT_RATIOS = ASPECT_RATIOS;
var DEFAULT_EMBED_BLOCK = 'core/embed';
exports.DEFAULT_EMBED_BLOCK = DEFAULT_EMBED_BLOCK;
var WORDPRESS_EMBED_BLOCK = 'core-embed/wordpress';
exports.WORDPRESS_EMBED_BLOCK = WORDPRESS_EMBED_BLOCK;
//# sourceMappingURL=constants.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.others = exports.common = void 0;

var _icons = require("./icons");

var _i18n = require("@wordpress/i18n");

var _blocks = require("@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var common = [{
  name: 'core-embed/twitter',
  settings: {
    title: 'Twitter',
    icon: _icons.embedTwitterIcon,
    keywords: ['tweet'],
    description: (0, _i18n.__)('Embed a tweet.')
  },
  patterns: [/^https?:\/\/(www\.)?twitter\.com\/.+/i]
}, {
  name: 'core-embed/youtube',
  settings: {
    title: 'YouTube',
    icon: _icons.embedYouTubeIcon,
    keywords: [(0, _i18n.__)('music'), (0, _i18n.__)('video')],
    description: (0, _i18n.__)('Embed a YouTube video.')
  },
  patterns: [/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i, /^https?:\/\/youtu\.be\/.+/i]
}, {
  name: 'core-embed/facebook',
  settings: {
    title: 'Facebook',
    icon: _icons.embedFacebookIcon,
    description: (0, _i18n.__)('Embed a Facebook post.')
  },
  patterns: [/^https?:\/\/www\.facebook.com\/.+/i]
}, {
  name: 'core-embed/instagram',
  settings: {
    title: 'Instagram',
    icon: _icons.embedInstagramIcon,
    keywords: [(0, _i18n.__)('image')],
    description: (0, _i18n.__)('Embed an Instagram post.')
  },
  patterns: [/^https?:\/\/(www\.)?instagr(\.am|am\.com)\/.+/i]
}, {
  name: 'core-embed/wordpress',
  settings: {
    title: 'WordPress',
    icon: _icons.embedWordPressIcon,
    keywords: [(0, _i18n.__)('post'), (0, _i18n.__)('blog')],
    responsive: false,
    description: (0, _i18n.__)('Embed a WordPress post.')
  }
}, {
  name: 'core-embed/soundcloud',
  settings: {
    title: 'SoundCloud',
    icon: _icons.embedAudioIcon,
    keywords: [(0, _i18n.__)('music'), (0, _i18n.__)('audio')],
    description: (0, _i18n.__)('Embed SoundCloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?soundcloud\.com\/.+/i]
}, {
  name: 'core-embed/spotify',
  settings: {
    title: 'Spotify',
    icon: _icons.embedSpotifyIcon,
    keywords: [(0, _i18n.__)('music'), (0, _i18n.__)('audio')],
    description: (0, _i18n.__)('Embed Spotify content.')
  },
  patterns: [/^https?:\/\/(open|play)\.spotify\.com\/.+/i]
}, {
  name: 'core-embed/flickr',
  settings: {
    title: 'Flickr',
    icon: _icons.embedFlickrIcon,
    keywords: [(0, _i18n.__)('image')],
    description: (0, _i18n.__)('Embed Flickr content.')
  },
  patterns: [/^https?:\/\/(www\.)?flickr\.com\/.+/i, /^https?:\/\/flic\.kr\/.+/i]
}, {
  name: 'core-embed/vimeo',
  settings: {
    title: 'Vimeo',
    icon: _icons.embedVimeoIcon,
    keywords: [(0, _i18n.__)('video')],
    description: (0, _i18n.__)('Embed a Vimeo video.')
  },
  patterns: [/^https?:\/\/(www\.)?vimeo\.com\/.+/i]
}];
exports.common = common;
var others = [{
  name: 'core-embed/animoto',
  settings: {
    title: 'Animoto',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed an Animoto video.')
  },
  patterns: [/^https?:\/\/(www\.)?(animoto|video214)\.com\/.+/i]
}, {
  name: 'core-embed/cloudup',
  settings: {
    title: 'Cloudup',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Cloudup content.')
  },
  patterns: [/^https?:\/\/cloudup\.com\/.+/i]
}, {
  name: 'core-embed/collegehumor',
  settings: {
    title: 'CollegeHumor',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed CollegeHumor content.')
  },
  patterns: [/^https?:\/\/(www\.)?collegehumor\.com\/.+/i]
}, {
  name: 'core-embed/crowdsignal',
  settings: {
    title: 'Crowdsignal',
    icon: _icons.embedContentIcon,
    keywords: ['polldaddy'],
    transform: [{
      type: 'block',
      blocks: ['core-embed/polldaddy'],
      transform: function transform(content) {
        return (0, _blocks.createBlock)('core-embed/crowdsignal', {
          content: content
        });
      }
    }],
    description: (0, _i18n.__)('Embed Crowdsignal (formerly Polldaddy) content.')
  },
  patterns: [/^https?:\/\/((.+\.)?polldaddy\.com|poll\.fm|.+\.survey\.fm)\/.+/i]
}, {
  name: 'core-embed/dailymotion',
  settings: {
    title: 'Dailymotion',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed a Dailymotion video.')
  },
  patterns: [/^https?:\/\/(www\.)?dailymotion\.com\/.+/i]
}, {
  name: 'core-embed/hulu',
  settings: {
    title: 'Hulu',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed Hulu content.')
  },
  patterns: [/^https?:\/\/(www\.)?hulu\.com\/.+/i]
}, {
  name: 'core-embed/imgur',
  settings: {
    title: 'Imgur',
    icon: _icons.embedPhotoIcon,
    description: (0, _i18n.__)('Embed Imgur content.')
  },
  patterns: [/^https?:\/\/(.+\.)?imgur\.com\/.+/i]
}, {
  name: 'core-embed/issuu',
  settings: {
    title: 'Issuu',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Issuu content.')
  },
  patterns: [/^https?:\/\/(www\.)?issuu\.com\/.+/i]
}, {
  name: 'core-embed/kickstarter',
  settings: {
    title: 'Kickstarter',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Kickstarter content.')
  },
  patterns: [/^https?:\/\/(www\.)?kickstarter\.com\/.+/i, /^https?:\/\/kck\.st\/.+/i]
}, {
  name: 'core-embed/meetup-com',
  settings: {
    title: 'Meetup.com',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Meetup.com content.')
  },
  patterns: [/^https?:\/\/(www\.)?meetu(\.ps|p\.com)\/.+/i]
}, {
  name: 'core-embed/mixcloud',
  settings: {
    title: 'Mixcloud',
    icon: _icons.embedAudioIcon,
    keywords: [(0, _i18n.__)('music'), (0, _i18n.__)('audio')],
    description: (0, _i18n.__)('Embed Mixcloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?mixcloud\.com\/.+/i]
}, {
  // Deprecated in favour of the core-embed/crowdsignal block
  name: 'core-embed/polldaddy',
  settings: {
    title: 'Polldaddy',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Polldaddy content.'),
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/reddit',
  settings: {
    title: 'Reddit',
    icon: _icons.embedRedditIcon,
    description: (0, _i18n.__)('Embed a Reddit thread.')
  },
  patterns: [/^https?:\/\/(www\.)?reddit\.com\/.+/i]
}, {
  name: 'core-embed/reverbnation',
  settings: {
    title: 'ReverbNation',
    icon: _icons.embedAudioIcon,
    description: (0, _i18n.__)('Embed ReverbNation content.')
  },
  patterns: [/^https?:\/\/(www\.)?reverbnation\.com\/.+/i]
}, {
  name: 'core-embed/screencast',
  settings: {
    title: 'Screencast',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed Screencast content.')
  },
  patterns: [/^https?:\/\/(www\.)?screencast\.com\/.+/i]
}, {
  name: 'core-embed/scribd',
  settings: {
    title: 'Scribd',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Scribd content.')
  },
  patterns: [/^https?:\/\/(www\.)?scribd\.com\/.+/i]
}, {
  name: 'core-embed/slideshare',
  settings: {
    title: 'Slideshare',
    icon: _icons.embedContentIcon,
    description: (0, _i18n.__)('Embed Slideshare content.')
  },
  patterns: [/^https?:\/\/(.+?\.)?slideshare\.net\/.+/i]
}, {
  name: 'core-embed/smugmug',
  settings: {
    title: 'SmugMug',
    icon: _icons.embedPhotoIcon,
    description: (0, _i18n.__)('Embed SmugMug content.')
  },
  patterns: [/^https?:\/\/(www\.)?smugmug\.com\/.+/i]
}, {
  // Deprecated in favour of the core-embed/speaker-deck block.
  name: 'core-embed/speaker',
  settings: {
    title: 'Speaker',
    icon: _icons.embedAudioIcon,
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/speaker-deck',
  settings: {
    title: 'Speaker Deck',
    icon: _icons.embedContentIcon,
    transform: [{
      type: 'block',
      blocks: ['core-embed/speaker'],
      transform: function transform(content) {
        return (0, _blocks.createBlock)('core-embed/speaker-deck', {
          content: content
        });
      }
    }],
    description: (0, _i18n.__)('Embed Speaker Deck content.')
  },
  patterns: [/^https?:\/\/(www\.)?speakerdeck\.com\/.+/i]
}, {
  name: 'core-embed/ted',
  settings: {
    title: 'TED',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed a TED video.')
  },
  patterns: [/^https?:\/\/(www\.|embed\.)?ted\.com\/.+/i]
}, {
  name: 'core-embed/tumblr',
  settings: {
    title: 'Tumblr',
    icon: _icons.embedTumbrIcon,
    description: (0, _i18n.__)('Embed a Tumblr post.')
  },
  patterns: [/^https?:\/\/(www\.)?tumblr\.com\/.+/i]
}, {
  name: 'core-embed/videopress',
  settings: {
    title: 'VideoPress',
    icon: _icons.embedVideoIcon,
    keywords: [(0, _i18n.__)('video')],
    description: (0, _i18n.__)('Embed a VideoPress video.')
  },
  patterns: [/^https?:\/\/videopress\.com\/.+/i]
}, {
  name: 'core-embed/wordpress-tv',
  settings: {
    title: 'WordPress.tv',
    icon: _icons.embedVideoIcon,
    description: (0, _i18n.__)('Embed a WordPress.tv video.')
  },
  patterns: [/^https?:\/\/wordpress\.tv\/.+/i]
}, {
  name: 'core-embed/amazon-kindle',
  settings: {
    title: 'Amazon Kindle',
    icon: _icons.embedAmazonIcon,
    keywords: [(0, _i18n.__)('ebook')],
    responsive: false,
    description: (0, _i18n.__)('Embed Amazon Kindle content.')
  },
  patterns: [/^https?:\/\/([a-z0-9-]+\.)?(amazon|amzn)(\.[a-z]{2,4})+\/.+/i, /^https?:\/\/(www\.)?(a\.co|z\.cn)\/.+/i]
}];
exports.others = others;
//# sourceMappingURL=core-embeds.js.map
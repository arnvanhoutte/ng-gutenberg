import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { sprintf, _n } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import PostLastRevisionCheck from './check';
import { getWPAdminURL } from '../../utils/url';

function LastRevision(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount;
  return createElement(PostLastRevisionCheck, null, createElement(IconButton, {
    href: getWPAdminURL('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: "backup"
  }, sprintf(_n('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

export default withSelect(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision);
//# sourceMappingURL=index.js.map
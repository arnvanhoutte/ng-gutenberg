import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import PostTypeSupportCheck from '../post-type-support-check';

function PostExcerptCheck(props) {
  return createElement(PostTypeSupportCheck, _extends({}, props, {
    supportKeys: "excerpt"
  }));
}

export default PostExcerptCheck;
//# sourceMappingURL=check.js.map
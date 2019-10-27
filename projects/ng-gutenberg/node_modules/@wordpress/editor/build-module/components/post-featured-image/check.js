import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import PostTypeSupportCheck from '../post-type-support-check';
import ThemeSupportCheck from '../theme-support-check';

function PostFeaturedImageCheck(props) {
  return createElement(ThemeSupportCheck, {
    supportKeys: "post-thumbnails"
  }, createElement(PostTypeSupportCheck, _extends({}, props, {
    supportKeys: "thumbnail"
  })));
}

export default PostFeaturedImageCheck;
//# sourceMappingURL=check.js.map
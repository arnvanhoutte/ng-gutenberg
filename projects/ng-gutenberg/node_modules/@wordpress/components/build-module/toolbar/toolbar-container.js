import { createElement } from "@wordpress/element";

var ToolbarContainer = function ToolbarContainer(props) {
  return createElement("div", {
    className: props.className
  }, props.children);
};

export default ToolbarContainer;
//# sourceMappingURL=toolbar-container.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("@wordpress/block-editor");

require("@wordpress/blocks");

require("@wordpress/core-data");

require("@wordpress/rich-text");

require("./store");

require("./hooks");

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
//# sourceMappingURL=index.native.js.map
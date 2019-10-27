"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePreferedImageSize = calculatePreferedImageSize;

function calculatePreferedImageSize(image, container) {
  var maxWidth = container.clientWidth;
  var exceedMaxWidth = image.width > maxWidth;
  var ratio = image.height / image.width;
  var width = exceedMaxWidth ? maxWidth : image.width;
  var height = exceedMaxWidth ? maxWidth * ratio : image.height;
  return {
    width: width,
    height: height
  };
}
//# sourceMappingURL=utils.js.map
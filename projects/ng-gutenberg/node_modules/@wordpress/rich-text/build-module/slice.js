import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/**
 * Slice a Rich Text value from `startIndex` to `endIndex`. Indices are
 * retrieved from the selection if none are provided. This is similar to
 * `String.prototype.slice`.
 *
 * @param {Object} value        Value to modify.
 * @param {number} [startIndex] Start index.
 * @param {number} [endIndex]   End index.
 *
 * @return {Object} A new extracted value.
 */
export function slice(value) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value.start;
  var endIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : value.end;
  var formats = value.formats,
      replacements = value.replacements,
      text = value.text;

  if (startIndex === undefined || endIndex === undefined) {
    return _objectSpread({}, value);
  }

  return {
    formats: formats.slice(startIndex, endIndex),
    replacements: replacements.slice(startIndex, endIndex),
    text: text.slice(startIndex, endIndex)
  };
}
//# sourceMappingURL=slice.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveSelector = resolveSelector;

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */

/**
 * Waits for the resolution of a selector before returning the selector's value.
 *
 * @param {string} namespace    Store namespace.
 * @param {string} selectorName Selector name.
 * @param {Array} args          Selector args.
 *
 * @return {Promise} Selector result.
 */
function resolveSelector(namespace, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return new Promise(function (resolve) {
    var hasFinished = function hasFinished() {
      return (0, _data.select)('core/data').hasFinishedResolution(namespace, selectorName, args);
    };

    var getResult = function getResult() {
      return (0, _data.select)(namespace)[selectorName].apply(null, args);
    }; // We need to trigger the selector (to trigger the resolver)


    var result = getResult();

    if (hasFinished()) {
      return resolve(result);
    }

    var unsubscribe = (0, _data.subscribe)(function () {
      if (hasFinished()) {
        unsubscribe();
        resolve(getResult());
      }
    });
  });
}
//# sourceMappingURL=utils.js.map
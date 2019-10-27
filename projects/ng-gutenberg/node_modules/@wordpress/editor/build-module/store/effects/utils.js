/**
 * WordPress dependencies
 */
import { select, subscribe } from '@wordpress/data';
/**
 * Waits for the resolution of a selector before returning the selector's value.
 *
 * @param {string} namespace    Store namespace.
 * @param {string} selectorName Selector name.
 * @param {Array} args          Selector args.
 *
 * @return {Promise} Selector result.
 */

export function resolveSelector(namespace, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return new Promise(function (resolve) {
    var hasFinished = function hasFinished() {
      return select('core/data').hasFinishedResolution(namespace, selectorName, args);
    };

    var getResult = function getResult() {
      return select(namespace)[selectorName].apply(null, args);
    }; // We need to trigger the selector (to trigger the resolver)


    var result = getResult();

    if (hasFinished()) {
      return resolve(result);
    }

    var unsubscribe = subscribe(function () {
      if (hasFinished()) {
        unsubscribe();
        resolve(getResult());
      }
    });
  });
}
//# sourceMappingURL=utils.js.map
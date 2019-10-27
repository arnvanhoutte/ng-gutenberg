/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {Function} replacer Function mapping original action to replacement.
 *
 * @return {Function} Higher-order reducer.
 */
var replaceAction = function replaceAction(replacer) {
  return function (reducer) {
    return function (state, action) {
      return reducer(state, replacer(action));
    };
  };
};

export default replaceAction;
//# sourceMappingURL=replace-action.js.map
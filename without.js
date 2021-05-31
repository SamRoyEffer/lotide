const without = function(sourceArray, itemsToRemove) {
  let values = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== itemsToRemove[i]) {
      values.push(sourceArray[i]);
    }
  }
  return values;
};

module.exports = without;
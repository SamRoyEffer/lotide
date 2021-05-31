const map = function(array, name) {
  const results = [];
  for (let item of array) {
    results.push(name(item));
  }
  return results;
};


module.exports = map;

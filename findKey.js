const findKey = function(object, callback) {
  for (let move in object) {
    if (callback(object[move])) {
      return move;
    }
  }
};

module.exports = findKey;
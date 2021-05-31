const tail = function(array) {
  const first = [];
  if (array === []) {
    return undefined;
  } else {
    first.push(array.shift());
  }
  return array;
};

module.exports = tail;
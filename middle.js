const middle = function(array) {
  let middleValue = [];
  if (array.length <= 2) {
    return middleValue;
  }  else if (array.length % 2 === 0) {
    middleValue.push(array[Math.floor((array.length - 1) / 2)]);
    middleValue.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 1) {
    middleValue.push(array[Math.floor(array.length / 2)]);
    
  }
  return middleValue;
};

module.exports = middle;
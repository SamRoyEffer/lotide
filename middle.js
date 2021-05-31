const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let middleValue = [];
    if (array.length <= 2) {
      //console.log("in if", middleValue)
      return middleValue;
    } else if (array.length % 2 === 0 ) {
      middleValue.push(array[Math.floor((array.length - 1)/2)]);
      middleValue.push(array[Math.floor(array.length/2)]);
      //console.log("first", middleValue)
    } else if (array.length % 2 === 1) {
      middleValue.push(array[Math.floor(array.length/2)]);
      //console.log("second", middleValue)
    }
  return middleValue;
}






module.exports = middle
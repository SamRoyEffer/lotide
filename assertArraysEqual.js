const eqArrays = require('./eqArrays');
// const assertArraysEqual = function(array1, array2) {
//   if (!eqArrays(array1, array2)) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   }
// };
const assertArraysEqual = function(array1, array2){
  let firstArray = array1;
  let secArray = array2;
  if (secArray.length !== firstArray.length){
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secArray}`);
  }
  for(let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secArray[i]){
      
      console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secArray}`);
    } 
  }
  console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secArray}`);

}

module.exports = assertArraysEqual;

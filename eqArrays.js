// function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2){
  let firstArray = array1;
  let secArray = array2;
  if (secArray.length !== firstArray.length){
    return console.log(false);
  }
  for(let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secArray[i]){
      
      return console.log(false);
    } 
  }
  return console.log(true);
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
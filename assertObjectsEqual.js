const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  }
  for (let key of object1KeysArr) {
    if (!object2[key]) {
      return false;
    }
    if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};

 const ab = { a: "1", b: "2" };
 const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true);

 const abc = { a: "1", b: "2", c: "3" };



const eqArrays = function(array1, array2){
  const keysArr1 = Array.isArray(array1);
  const keysArr2 = Array.isArray(array2);

  
  if (Array.isArray(array1) !== true || array1.length !== array2.length) {
    return console.log(false);
  }
  for(let i = 0; i < array1.length; i++){ 
    if (array1[i] !== array2[i]){
      
      return console.log(false);
    } 
  }
  return console.log(true);
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  assertEqual(inspect(actual), inspect(expected))
};

assertObjectsEqual(abc, abc);

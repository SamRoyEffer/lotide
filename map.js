const words = ["cat", "dog", "coffee", "tree", "sand"];
const map = function(array, charmander) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', charmander(item));
    console.log('---');
    results.push(charmander(item));
  }
  return results;
};
// const rez = map(words, word => word[0]);
// console.log(rez)


const eqArrays = function(array1, array2){
  if (array2.length !== array1.length) {
    return console.log(false);
  }
  for(let i = 0; i < array1.length; i++){ 
    if (array1[i] !== array2[i]){
      
      return console.log(false);
    } 
  }
  return console.log(true);
};

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

assertArraysEqual(map(["sam","char","mom"],word => word[0]),["s", "c", "m"])
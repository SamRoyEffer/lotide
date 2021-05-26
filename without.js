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


const without = function(sourceArray, itemsToRemove){
  let values = []
  for (let i = 0; i < sourceArray.length; i++){
    if(sourceArray[i] !== itemsToRemove[i]){
      //console.log("Console.log 1", sourceArray);
      values.push(sourceArray[i]);
    } 
  }
  //console.log("Console.log values", values);
  return values;
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

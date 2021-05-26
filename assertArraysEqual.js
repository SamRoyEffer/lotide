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


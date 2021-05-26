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

const middle = function(array){
  let middleValue = []
  
  
    
    if (array.length <= 2){
      //console.log("in if", middleValue)
      
      return middleValue
    } else if (array.length % 2 === 0 ){

      middleValue.push(array[Math.floor((array.length - 1)/2)])
      middleValue.push(array[Math.floor(array.length/2)])
      //console.log("first", middleValue)
    } else if (array.length % 2 === 1){

      middleValue.push(array[Math.floor(array.length/2)])
      //console.log("second", middleValue)

    }
    
  
  return middleValue
}




console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
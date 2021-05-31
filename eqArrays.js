/*
const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      
      return false;
    }
  }
  return true;
};


const eqArrays = function(array1, array2){
  if (Array.isArray(array1) !== true || array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++){ 
    if (array1[i] !== array2[i]){
      
      return false;
    } 
  }
  return true;
};
*/
const eqArrays = function(array1, array2){
  
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
module.exports = eqArrays;

console.log(eqArrays([1,2,3], [1,2,3]));
const assertArraysEqual = function(array1, array2){
  let firstArray = array1;
  let secArray = array2;

  for (let i = 0; i < firstArray.length; i++){
    for (let j = 0; j < secArray.length; j++){
      if (secArray.length[j] === firstArray.length[i]) {
        
        return "Excellent work";
      } else {
        return "That is not right";
      }
    }
  }
}


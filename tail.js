// function implementation
const assertEqual = require('./assertEqual') 


const tail = function(array) {
  const first = [];
  
  if (array === []) {
    return undefined;
  } else {
  
  first.push(array.shift());
  };
  return array;
};

module.exports = tail

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!



// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
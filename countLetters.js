const assertEqual = require('./assertEqual')

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/


//take a sting, seperate it and count the individual letters
const countLetters = function(scentence) {
  const results = {};
  for (const letter of scentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
module.exports = countLetters

//console.log((countLetters("Hello my name is what")));
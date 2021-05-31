// function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;


// // test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual("Tooth", "Car");
// assertEqual("car", "car");
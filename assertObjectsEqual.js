const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  assertEqual(inspect(actual), inspect(expected));
};

assertObjectsEqual(abc, abc);
module.exports = assertObjectsEqual;

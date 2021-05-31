//const assertEqual = require('../assertEqual');
const tail = require('../tail')

const assert = require('chai').assert;

describe('#tail', () => {
  it('return "Lighthouse" and "Labs for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const tailWords = tail(words);
    assert.deepEqual(tailWords,["Lighthouse","Labs"]);
  });

  it('return "of cards" for ["deck", "of", "cards"]', () => {
    const words = ["deck", "of","cards"];
    const tailWords = tail(words);
    assert.deepEqual(tailWords,["of", "cards"]);
  });
});





// //Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
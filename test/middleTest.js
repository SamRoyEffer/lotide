//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')
const assert = require('chai').assert

describe("#middle", () => {
  it("return 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("returns 5 for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,]),[5]);
  });
  it("returns 3 for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  })
});


// assertArraysEqual((middle([1])), []) // => []
// assertArraysEqual((middle([1, 2])),[]) // => []
// assertArraysEqual((middle([1, 2, 3])),[2]) // => [2]
// assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]) // => [3]
// assertArraysEqual((middle([1, 2, 3, 4])),[2,3]) // => [2, 3]
// assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4]) // => [3, 4]
//const assertEqual = require('../assertEqual')
const head = require('../head');

const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("return 2 for [2,4,6,8]", () => {
    assert.strictEqual(head([2,4,6,8]),2);
  });

});

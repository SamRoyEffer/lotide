const eqObjects = function(object1, object2) {
  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  }
  for (let key of object1KeysArr) {
    if (!object2[key]) {
      return false;
    }
    if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;

// const cd = { c: "1", d: ["2", 3] };
// //const dc = { d: ["2", 3], c: "1" };
// //eqArrays(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqArrays(eqObjects(cd, cd2)); // => false
// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };

// // assertEqual(eqObjects(ab, ba), true);

// // const abc = { a: "1", b: "2", c: "3" };

// //assertEqual(eqObjects(ab, abc), false);








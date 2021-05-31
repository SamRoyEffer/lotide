const letterPositions = function(sentence) {
  const results = {};
  for (let position in sentence) {
    const key = sentence[position];//letter in the sentence
    if (key !== ' ') {
      if (results[key]) {
        console.log(sentence[position]);
        results[key].push(position);
      } else {
        results[key] = [position];
      }
    }
  }
  return results;
};

module.exports = letterPositions
// console.log(letterPositions("hello"));
// console.log(letterPositions("My name is WHAT?!"));
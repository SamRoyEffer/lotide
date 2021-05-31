const letterPositions = function(sentence) {
  const results = {};
  for (let position in sentence) {
    const key = sentence[position];
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

module.exports = letterPositions;
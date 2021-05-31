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
module.exports = countLetters;

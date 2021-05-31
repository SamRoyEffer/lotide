const findKeyByValue = function(bestTVShowsByGenre, tvShow) {
  for (let genre in bestTVShowsByGenre) {
    const show = bestTVShowsByGenre[genre];
    if (show === tvShow) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
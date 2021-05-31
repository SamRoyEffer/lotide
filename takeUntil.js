const takeUntil = function(array, callback) {
  const results = []
  for (let item of array){
    if(!callback(item)){
    results.push(item)
    } else {
      break;
    }
  };
  return results;

};

module.exports = takeUntil

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

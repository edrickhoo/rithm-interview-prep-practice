// add whatever parameters you deem necessary - good luck!
function twoHighest(arr) {
  let highest = -Infinity;
  let secondHighest = -Infinity;
  arr.forEach((val) => {
    if (val >= highest) {
      secondHighest = highest;
      highest = val;
    } else if (val > secondHighest) {
      secondHighest = val;
    }
  });
  return [secondHighest, highest];
}

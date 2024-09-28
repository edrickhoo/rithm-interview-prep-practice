// add whatever parameters you deem necessary - good luck!
function max(arr) {
  let currMax = -Infinity;
  for (const num of arr) {
    if (num > currMax) currMax = num;
  }
  return currMax;
}

// add whatever parameters you deem necessary - good luck!
function countValues(arr, num) {
  let count = 0;
  for (let arrNum of arr) {
    if (arrNum === num) {
      count++;
    }
  }
  return count;
}

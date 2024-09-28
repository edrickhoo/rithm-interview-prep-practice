// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr, num) {
  let lastIndexOfNum = -1;
  arr.forEach((arrNum, index) => {
    if (arrNum === num) {
      lastIndexOfNum = index;
    }
  });
  return lastIndexOfNum;
}

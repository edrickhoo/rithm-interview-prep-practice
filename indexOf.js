// add whatever parameters you deem necessary - good luck!
function indexOf(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return -1;
}

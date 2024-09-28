// add whatever parameters you deem necessary - good luck!
function countNumbers(arr) {
  return arr.filter((item) => !isNaN(parseInt(item))).length;
}

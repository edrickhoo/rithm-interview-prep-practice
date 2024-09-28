// add whatever parameters you deem necessary - good luck!
function slice(arr, start, noToSlice) {
  if (noToSlice === undefined) {
    noToSlice = Infinity;
  }
  const arrSliced = [];
  arr.forEach((item, idx) => {
    if (idx >= start && idx < noToSlice) {
      arrSliced.push(item);
    }
  });

  return arrSliced;
}

// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr) {
  const set = new Set();
  for (const num of arr) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return undefined;
}

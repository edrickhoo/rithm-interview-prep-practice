// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, char) {
  let idx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      idx = i;
    }
  }
  return idx;
}

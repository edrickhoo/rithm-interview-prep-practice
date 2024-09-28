// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === char) {
      return i;
    }
  }
  return -1;
}

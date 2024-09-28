// add whatever parameters you deem necessary - good luck!
function stringIncludes(str, char) {
  for (const letter of str) {
    if (letter === char) {
      return true;
    }
  }
  return false;
}

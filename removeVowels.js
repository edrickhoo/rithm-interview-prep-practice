// add whatever parameters you deem necessary - good luck!
function removeVowels(str) {
  let newStr = "";
  const vowels = ["a", "e", "i", "o", "u"];
  for (const char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      newStr += char;
    }
  }
  return newStr;
}

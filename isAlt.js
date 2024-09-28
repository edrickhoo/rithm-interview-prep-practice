// add whatever parameters you deem necessary - good luck!
function isAlt(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let type = "";
  if (str) {
    type = vowels.includes(str[0]) ? "vowel" : "consonants";
  }

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    if (type === "vowel" && vowels.includes(char)) {
      return false;
    }
    if (type === "consonants" && !vowels.includes(char)) {
      return false;
    }

    type = type === "vowel" ? "consonants" : "vowel";
  }
  return true;
}

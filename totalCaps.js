// add whatever parameters you deem necessary - good luck!
function totalCaps(arr) {
  return arr.reduce((acc, str) => {
    let caps = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === str[i]) {
        caps++;
      }
    }
    acc += caps;
    return acc;
  }, 0);
}

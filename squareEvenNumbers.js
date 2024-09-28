// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc += curr * curr;
    }
    return acc;
  }, 0);
}

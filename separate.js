// add whatever parameters you deem necessary - good luck!
function separate(arr) {
  return arr
    .reduce(
      (acc, curr) => {
        const [catArr, waterArr, dogsArr] = acc;
        switch (curr) {
          case "cat":
            catArr.push(curr);
            break;
          case "water":
            waterArr.push(curr);
            break;
          case "dog":
            dogsArr.push(curr);
            break;
          default:
            break;
        }
        return acc;
      },
      [[], [], []]
    )
    .flat();
}

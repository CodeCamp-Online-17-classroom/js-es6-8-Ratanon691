function removeRandom(array) {
  const newArray = [...array]
  const randomIndex = Math.floor(Math.random() * newArray.length)
  newArray.splice(randomIndex, 1)
  return newArray
}

const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = removeRandom(originalArray);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(modifiedArray); // One element removed, e.g., [1, 2, 4, 5]

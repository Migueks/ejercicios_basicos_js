const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(mixedElements) {
  let total = 0;

  for (let i = 0; i < mixedElements.length; i++) {
    let elemento = mixedElements[i];

    if (typeof elemento === "number") {
      total += elemento;
    } else if (typeof elemento === "string") {
      total += elemento.length;
    }
  }
  return total;
}

console.log(averageWord(mixedElements));

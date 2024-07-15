const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

avengerLength = [];

function findLongestWord(avengers) {
  let nombreMasLargo = "";

  for (let i = 0; i < avengers.length; i++) {
    let avenger = avengers[i];
    if (avenger.length > nombreMasLargo.length) {
      nombreMasLargo = avenger;
    }
  }

  return nombreMasLargo;
}

const avengerNombre = findLongestWord(avengers);
console.log("El nombre de avenger más largo es:", avengerNombre);

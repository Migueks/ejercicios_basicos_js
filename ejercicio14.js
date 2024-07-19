const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(words) {
  const contador = {};
  for (let i = 0; i < words.length; i++) {
    const palabra = words[i];
    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }
  return contador;
}

const result = repeatCounter(words);
console.log(result);

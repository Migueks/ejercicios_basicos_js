const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(names, valor) {
  let found = false;
  for (let i = 0; i < names.length; i++) {
    if (valor === names[i]) {
      found = true;
      break;
    }
  }
  if (found) {
    console.log(true);
    console.log(names.indexOf(valor));
  } else {
    console.log(false);
  }
}

nameFinder(names, "Marc");

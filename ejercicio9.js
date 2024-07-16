const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total += number;
  }
  return total;
}

let resultado = sumNumbers(numbers);
console.log("La suma total de los elementos del array es: " + resultado);

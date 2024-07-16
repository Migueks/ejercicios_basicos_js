const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total += number;
  }
  return total / numbers.length;
}

let resultado = average(numbers);
console.log("La media es: " + resultado.toFixed(2));

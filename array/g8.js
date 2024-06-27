const numbers = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
let contador = 0;
numbers.sort();
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers.indexOf(numbers[i]) != i) {
    numbers.splice(i, 1);
    i--;
  }
}
console.log(numbers);

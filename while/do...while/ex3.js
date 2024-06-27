const prompt = require("prompt-sync")();

let maior;
let menor;
let i = 1;

do {
  const x = Number(prompt("digite um numero: "));

  if (i == 1) {
    maior = x;
    menor = x;
  } else {
    if (x > maior) {
      maior = x;
    }
    if (x < menor) {
      menor = x;
    }
  }
  i++;
} while (i <= 10);

console.log("numero é maior : ", maior);
console.log("numero é menor : ", menor);

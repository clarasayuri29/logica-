const prompt = require("prompt-sync")();
let menor;
let maior;
let i = 1;

while (i <= 10) {
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
}
console.log("numero é maior : ", maior);
console.log("numero é menor : ", menor);

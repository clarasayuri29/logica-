const prompt = require("prompt-sync")();

let maior;
let menor;

for (let i = 0; i < 5; i++) {
  const x = Number(prompt("digite um numero: "));

  if (i == 0) {
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
}
console.log("numero é maior : ", maior);
console.log("numero é menor : ", menor);

const prompt = require("prompt-sync")();

const number = Number(prompt("digiteum numero: "));

let resultado = number;
let i = 1;
do {
  resultado = resultado * i;
  console.log(resultado, i);
  i++;
} while (i < number);

console.log(resultado);

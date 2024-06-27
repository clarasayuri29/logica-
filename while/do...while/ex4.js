const prompt = require("prompt-sync")();
let i = 1;
let cont = 0;
let numero = Number(prompt("digite um numero: "));

do {
  if (numero % i == 0) {
    cont++;
  }
  i++;
} while (i <= numero);

if (cont > 2) {
  console.log("nao é um numero primo");
} else {
  console.log("é um numero primo");
}

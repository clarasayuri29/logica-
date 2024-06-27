const prompt = require("prompt-sync")();
const i = 10;

while (true) {
  const x = Number(prompt("digite um numero: "));
  {
    if (x == 10) {
      console.log("parabens voce acertou o numero: ");
      break;
    }
    if (x !== i && x < i) {
      console.log("aumente: ", i - x);
      break;
    }

    if (x !== i && x > i) {
      console.log("diminua:", x - i);
      break;
    }
  }
}

const prompt = require("prompt-sync")();
let y = 0;
let media;

for (let i = 0; i < 10; i++) {
  const x = Number(prompt("digite um numero: "));
  {
    y = y + x;
    media = y / 10;
  }
}
console.log(media);

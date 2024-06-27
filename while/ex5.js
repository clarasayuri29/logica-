const prompt = require("prompt-sync")();

const user = "clara13";
const senha = "1234";

while (true) {
  const user2 = String(prompt("escreva seu usuario: "));
  const senha2 = String(prompt("digite sua senha: "));
  {
    if (user2 == user && senha2 == senha) {
      console.log("acesso liberado: ");
    } else {
      console.log("acesso negado: ");
    }
  }
}

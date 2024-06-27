const matriz = [
  [10, 20, 60],
  [8, 10, 52],
];
let soma = 0;

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
    console.log(matriz[linha][coluna]);
    soma = matriz[linha][coluna] + soma;
  }
}
console.log(soma);

const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

for (let linha = 0; linha < numbers.length; linha++) {
  let resultado = 1;
  for (let coluna = 0; coluna < numbers[linha].length; coluna++) {
    resultado = resultado * numbers[linha][coluna];
  }
  console.log(resultado);
}

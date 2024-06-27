const carro = {
  marca: "chevrolet",
  ano: 1967,
  modelo: "impala",
  cor: "preto",
};

console.log(carro.marca);
console.log(carro.cor);

carro.cor = "jacinto";
carro.condiçao = "novo";
delete carro.ano;

console.log(carro);

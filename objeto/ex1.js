const pessoa = {
  nome: "clara sayuri",
  idade: 18,
  profissao: "trabalha no akiras ' hamburgues",
  pais: "mirandopolis",
};
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.profissao = "programadora no itau";
pessoa.email = "clara@sayuri13";
delete pessoa.pais;

console.log(pessoa);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Raíza',
  sobrenome: 'Cirne', 
  idade: 29, 
  profissao: 'Desenvolvedora Front end',
  possuiGraduacao: true, 
  possuiMestrado: false, 
  nomedaMae: 'Joselena', 
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  },
}

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());

// OUTRA FORMA DE CRIAR UM MÉTODO NO OBJETO ANTERIOR, QUE MOSTRE O SEU NOME COMPLETO - AULA  
// dadosPessoais.nomeCompleto = function() {
//   return `${this.nome} ${this.sobrenome}`
// }


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto', 
  idade: 10,  
  latir(pessoa) {
    var pessoa = 'homem';
    if (pessoa === 'homem') {
      return 'au au'
    } else {
      return 'É uma mulher';
    }
  },
}

console.log(cachorro.latir());


// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  return !!valor; 
}
console.log(verificaValor(" "));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4; 
}
// console.log(perimetroQuadrado(1, 1, 1, 1));
console.log(perimetroQuadrado(3)); 



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Raíza', 'Cirne'));


// Crie uma função que verifica se um número é par
function verificaPar (numero) {
  if(numero % 2 === 0) {
    console.log('O número é par!');
  } else {
    console.log('O número é ímpar!');
  }
}
verificaPar(2);
// OUTRA FORMA DE VERIFICAR SE UM NÚMERO É PAR - CORREÇÃO AULA 
function isEven(numero) {
  var modulo = numero % 2; 
  if(modulo === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(1098));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}
console.log(tipoDeDado(function(){
  console.log('teste')}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener('scroll', function() {
//   console.log('Raíza Cirne'); // não funcionou
// });


// Corrija o erro abaixo
var totalPaises = 193; // colocamos do lado de fora 

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));


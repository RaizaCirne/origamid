// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeRaiza = 29; 
var idadeAna = 24; 

if (idadeRaiza > idadeAna) {
  console.log('É maior');
} else if (idadeRaiza === idadeAna) {
  console.log('É igusl');
} else {
  console.log('É menor');
} // É maior

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3
console.log(expressao); 

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy 
var idade = 28; // Truthy 
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy - undefined 
var dinheiroNaConta = 0; // Falsy 

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); // verifica se é true ou false.


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes'); 
} else {
  console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // Falso 


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // Cão 
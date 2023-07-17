// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhouCopa = [1959, 1962, 1970, 1994, 2002];

// // forEach
// ganhouCopa.forEach(function(anos){
//   console.log(anos);
// })


// // while 
// var i = 0; 
// while(i < ganhouCopa.length) {
//   console(ganhouCopa[i]);
//   i++
// }


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// // for loop
for (var i = 0; i < ganhouCopa.length; i++) {
  console.log(`O brasil ganhou a copa de ${ganhouCopa[i]}`);
} 

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < ganhouCopa.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break; 
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]; // 4
console.log(ultimaFruta);
console.log(frutas);
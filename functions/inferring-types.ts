/*
Inferencia de tipos de funções
*/


// Neste exemplo a função myName não precisa receber um tipos
// somente na definição de tipo já é suficiente;

let myName: (name: string) => string = function(name){
  return `My name is ${name}`;
}


// Neste exemplo através do tipo de 
// retorno da função o TS já inferir um tipo nos parametros

function sum(x, y): number {
  return x + y;
}

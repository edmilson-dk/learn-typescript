/*
O tipo de uma função tem as mesmas duas partes: o tipo dos argumentos 
e o tipo de retorno. Ao escrever todo o tipo de função, ambas as partes 
são necessárias. Escrevemos os tipos de parâmetro como uma lista de 
parâmetros, dando a cada parâmetro um nome e um tipo. Este nome é 
apenas para ajudar na legibilidade
*/

let myName: (name: string) => string = function(name: string): string {
  return `My name is ${name}`;
}

let sum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
}

console.log(sum(3, 3));
console.log(myName('Alex'));


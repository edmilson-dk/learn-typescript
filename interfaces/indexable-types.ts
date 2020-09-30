/*
Da mesma forma como podemos usar interfaces para descrever tipos de função, t
ambém podemos descrever tipos que podemos “indexar” como a[10], ou ageMap["daniel"]. 
Os tipos indexáveis têm uma assinatura de índice que descreve os tipos que podemos 
usar para indexar no objeto, junto com os tipos de retorno correspondentes durante a 
indexação. Vamos dar um exemplo:
*/

interface indexNumbers {
  [index: string]: number;
}

interface indexStrings {
  [index: number]: string;
}

let myNumbers: indexNumbers;
let myNames: indexStrings;

myNumbers = {
  zero: 0,
  one: 1,
  two: 2,
}

myNames = ['Alex', 'Sophia'];

console.log(myNumbers['zero']);
console.log(myNames[0]);


/*
As interfaces são capazes de descrever a ampla gama de formas que os objetos JavaScript podem assumir. 
Além de descrever um objeto com propriedades, as interfaces também são capazes de descrever tipos de 
funções.

Para descrever um tipo de função com uma interface, damos à interface uma assinatura de chamada. 
É como uma declaração de função com apenas a lista de parâmetros e o tipo de retorno fornecidos.
Cada parâmetro na lista de parâmetros requer nome e tipo.
*/

interface Calc {
  ( primary: number, second: number ): number;
}

let myCalc: Calc;

myCalc = function(primary: number, second: number): number {
  return primary * second;
}

console.log(myCalc(5, 5));


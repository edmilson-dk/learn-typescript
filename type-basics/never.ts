/*
 O nevertipo representa o tipo de valores que nunca ocorrem. 
 Por exemplo, neveré o tipo de retorno para uma expressão de função ou uma expressão de 
 função de seta que sempre lança uma exceção ou que nunca retorna. As variáveis 
 também adquirem o tipo neverquando estreitadas por qualquer tipo de proteção que nunca pode ser verdadeiro.
*/

function error(message: string): never {
  throw new Error(message);
}

console.log(error('Error essa função retorna um error :('));


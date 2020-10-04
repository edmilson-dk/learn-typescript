/*
No TypeScript, todo parâmetro é considerado exigido pela 
função. Isso não significa que não possa ser fornecido 
nullou undefined, ao contrário, quando a função for chamada, o compilador
verificará se o usuário forneceu um valor para cada parâmetro. 
O compilador também assume que esses parâmetros são os únicos parâmetros 
que serão passados para a função. Resumindo, o número de argumentos 
dados a uma função deve corresponder ao número de parâmetros que a 
função espera.

Em JavaScript, cada parâmetro é opcional e os usuários podem deixá-los 
desligados como quiserem. Quando o fazem, seu valor é undefined. 
Podemos obter essa funcionalidade no TypeScript adicionando um ?ao final 
dos parâmetros que desejamos ser opcionais.
*/


// Todos os parâmetros opcionais devem vim depois dos parâmetros não opcionais

function myData(name: string, age?: number): string {
  if (age) {
    return `My name is ${name} and my age is ${age}`;
  } else {
    return `My name is ${name}`;
  }
}

console.log(myData('Alex')); // My name is Alex
console.log(myData('Alex', 16)); // My name is Alex and my age is 16
//console.log(myData('Alex', 16, 20)); -> error

/*
No TypeScript, também podemos definir um valor que um parâmetro será 
atribuído se o usuário não fornecer um, ou se o usuário passar 
undefined em seu lugar. Eles são chamados de parâmetros inicializados 
por padrão
*/

function myName(firstName: string, lastName = 'Jesus'): string {
  return `My name is ${firstName} ${lastName}`;
}

console.log(myName('Alex'));
console.log(myName('Alex', 'Jesus'));
//console.log(myName('Alex', 'Jesus', 16)); -> error


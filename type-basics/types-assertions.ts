/*
 Às vezes, você acabará em uma situação em que saberá mais sobre um valor do que o TypeScript. 
 Normalmente, isso acontecerá quando você souber que o tipo de alguma entidade pode ser mais
 específico do que seu tipo atual.

Asserções de tipo são uma forma de dizer ao compilador "confie em mim, eu sei o que estou fazendo". 
Uma asserção de tipo é como uma conversão de tipo em outras linguagens, mas não executa nenhuma 
verificação especial ou reestruturação de dados. Ele não tem impacto no tempo de execução e é usado 
exclusivamente pelo compilador. O TypeScript pressupõe que você, o programador, tenha executado todas 
as verificações especiais necessárias.
*/

let isName: unknown = 'Is a name';
let sizeIsName: number = (isName as string).length;

let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;

console.log(sizeIsNamem strLength);

